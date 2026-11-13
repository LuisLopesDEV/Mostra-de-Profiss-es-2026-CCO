import '../style.css'
import '../mostra.css'
import { cameraErrorMessage, connectHandCamera } from '../hand-camera.js'
import type { CameraEvent, HandCamera } from '../hand-camera.js'
import type { Point, Size } from '../types.js'
import type { Detection } from '../vision-protocol.js'
import { PinchTracker, SculptInteraction, fitVideo } from './gestures.js'
import type { HandCursor } from './gestures.js'
import { SHAPES, SolidModel, paintSolid } from './solid.js'
import type { ShapeName } from './solid.js'

function element<T extends HTMLElement>(id: string): T {
  const node = document.getElementById(id)
  if (!node) throw new Error('Elemento ausente: ' + id)
  return node as T
}

const stage = element('stage')
const sculptor = element('sculptor')
const canvas = element<HTMLCanvasElement>('solid-canvas')
const video = element<HTMLVideoElement>('sculpture-camera')
const wheel = element<HTMLButtonElement>('color-wheel')
const exitFullscreen = element<HTMLButtonElement>('scene-exit')
const cameraButton = element<HTMLButtonElement>('toggle-camera')
const status = element('sculpture-status')
const detail = element('solid-detail')
const context = canvas.getContext('2d')
if (!context) throw new Error('Este navegador não conseguiu iniciar o Canvas.')
const ctx = context

const model = new SolidModel()
const tracker = new PinchTracker()
const interaction = new SculptInteraction(model)
let camera: HandCamera | null = null
let request: AbortController | null = null
let hands: HandCursor[] = []
let mouseId: number | null = null
let mousePoint: Point | null = null
let renderFrame: number | null = null
let handTimeout: number | null = null

function sceneSize(): Size {
  return { width: stage.clientWidth, height: stage.clientHeight }
}

function placeWheel() {
  const stageSize = sceneSize()
  if (video.hidden || !video.videoWidth || !video.videoHeight || !stageSize.width || !stageSize.height) {
    wheel.style.removeProperty('right')
    wheel.style.removeProperty('top')
    return
  }
  const image = fitVideo({ width: video.videoWidth, height: video.videoHeight }, stageSize)
  wheel.style.right = (stageSize.width - image.x - image.width + 13) + 'px'
  wheel.style.top = (image.y + 13) + 'px'
}

function wheelGeometry() {
  const box = wheel.getBoundingClientRect()
  const scene = stage.getBoundingClientRect()
  return {
    center: {
      x: box.left - scene.left - stage.clientLeft + box.width / 2,
      y: box.top - scene.top - stage.clientTop + box.height / 2,
    },
    radius: box.width / 2,
  }
}

function statusText(message: string) {
  if (status.textContent !== message) status.textContent = message
}

function showGestureStatus() {
  if (interaction.mode === 'vertex') statusText('Vértice selecionado · arraste para deformar')
  else if (interaction.mode === 'pair') statusText('Duas pinças · rotação e zoom')
  else if (interaction.mode === 'rotate') statusText('Girando o sólido')
  else if (interaction.mode === 'color') statusText('Escolhendo uma cor')
  else if (camera) statusText(hands.length ? 'Aproxime a pinça de um ponto rosa' : 'Mostre a mão inteira para a webcam')
  else if (!request) statusText('Modo mouse')
}

function draw() {
  if (renderFrame !== null) return
  renderFrame = requestAnimationFrame(() => {
    renderFrame = null
    const { width, height } = sceneSize()
    if (!width || !height) return
    const ratio = Math.min(2, window.devicePixelRatio || 1)
    const canvasWidth = Math.round(width * ratio)
    const canvasHeight = Math.round(height * ratio)
    if (canvas.width !== canvasWidth) canvas.width = canvasWidth
    if (canvas.height !== canvasHeight) canvas.height = canvasHeight
    ctx.setTransform(canvasWidth / width, 0, 0, canvasHeight / height, 0, 0)
    ctx.clearRect(0, 0, width, height)
    const pointer = mousePoint ?? hands[0]?.point
    const hovered = pointer ? model.hitVertex(pointer, { width, height }) : null
    paintSolid(ctx, model, { width, height }, hovered, interaction.grabbed)
    for (const hand of hands) {
      ctx.fillStyle = '#73ffe6d9'
      for (const joint of hand.joints) {
        ctx.beginPath()
        ctx.arc(joint.x, joint.y, 2.4, 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.beginPath()
      ctx.arc(hand.point.x, hand.point.y, hand.pinched ? 9 : 6, 0, Math.PI * 2)
      ctx.strokeStyle = hand.pinched ? '#ff83a3' : '#d5fff6'
      ctx.lineWidth = 2
      ctx.stroke()
    }
  })
}

function clearHands() {
  if (handTimeout !== null) window.clearTimeout(handTimeout)
  handTimeout = null
  hands = []
  tracker.clear()
  if (mouseId === null) interaction.clear()
  draw()
}

function stopCamera() {
  request?.abort()
  request = null
  camera?.close()
  camera = null
  video.hidden = true
  placeWheel()
  cameraButton.textContent = 'Ativar webcam'
  clearHands()
}

function acceptHands(frame: Detection) {
  const size = sceneSize()
  const source = { width: video.videoWidth, height: video.videoHeight }
  if (!size.width || !size.height || !source.width || !source.height) return
  hands = tracker.update(frame, fitVideo(source, size))
  if (mouseId === null) {
    if (hands.length) mousePoint = null
    interaction.update(hands.filter(hand => hand.pinched), size, wheelGeometry())
    showGestureStatus()
  }
  if (handTimeout !== null) window.clearTimeout(handTimeout)
  handTimeout = window.setTimeout(() => {
    clearHands()
    showGestureStatus()
  }, 310)
  draw()
}

function cameraEvent(event: CameraEvent) {
  if (event.kind === 'recovering') {
    clearHands()
    statusText('Reconectando a webcam…')
  } else if (event.kind === 'error') {
    stopCamera()
    statusText(cameraErrorMessage(event.error))
  } else if (event.kind === 'looking') {
    showGestureStatus()
  }
}

async function toggleCamera() {
  if (request || camera) {
    stopCamera()
    showGestureStatus()
    return
  }
  const active = new AbortController()
  request = active
  cameraButton.textContent = 'Cancelar'
  statusText('Preparando webcam…')
  try {
    const opened = await connectHandCamera(video, active.signal, {
      update: event => { if (!active.signal.aborted) cameraEvent(event) },
      landmarks: frame => { if (!active.signal.aborted) acceptHands(frame) },
    })
    if (active.signal.aborted) {
      opened.close()
      return
    }
    camera = opened
    video.hidden = false
    placeWheel()
    cameraButton.textContent = 'Desligar webcam'
    camera.setActive(true)
    showGestureStatus()
  } catch (error) {
    if (!active.signal.aborted) {
      stopCamera()
      statusText(cameraErrorMessage(error))
    }
  } finally {
    if (request === active) request = null
  }
}

function localPoint(event: PointerEvent): Point {
  const rect = stage.getBoundingClientRect()
  return { x: event.clientX - rect.left - stage.clientLeft, y: event.clientY - rect.top - stage.clientTop }
}

stage.addEventListener('pointerdown', event => {
  if (event.button !== 0 || mouseId !== null || event.target === exitFullscreen) return
  mouseId = event.pointerId
  mousePoint = localPoint(event)
  stage.setPointerCapture(mouseId)
  interaction.clear()
  interaction.update([{ id: -1, point: mousePoint }], sceneSize(), wheelGeometry())
  showGestureStatus()
  draw()
})
stage.addEventListener('pointermove', event => {
  if (mouseId !== null && event.pointerId !== mouseId) return
  mousePoint = localPoint(event)
  if (mouseId !== null) interaction.update([{ id: -1, point: mousePoint }], sceneSize(), wheelGeometry())
  draw()
})
function releasePointer(event: PointerEvent) {
  if (event.pointerId !== mouseId) return
  mouseId = null
  interaction.clear()
  if (event.type !== 'pointerup') mousePoint = null
  showGestureStatus()
  draw()
}
stage.addEventListener('pointerup', releasePointer)
stage.addEventListener('pointercancel', releasePointer)
stage.addEventListener('lostpointercapture', releasePointer)
stage.addEventListener('pointerleave', () => {
  if (mouseId === null) mousePoint = null
  draw()
})
stage.addEventListener('wheel', event => {
  event.preventDefault()
  model.magnify(event.deltaY > 0 ? 0.93 : 1.075)
  draw()
}, { passive: false })
stage.addEventListener('keydown', event => {
  if (event.target !== stage) return
  switch (event.key) {
    case 'ArrowLeft': model.rotate(-0.15, 0); break
    case 'ArrowRight': model.rotate(0.15, 0); break
    case 'ArrowUp': model.rotate(0, -0.15); break
    case 'ArrowDown': model.rotate(0, 0.15); break
    case '+': model.magnify(1.1); break
    case '-': model.magnify(0.91); break
    default: return
  }
  event.preventDefault()
  draw()
})

const shapeButtons = document.querySelectorAll<HTMLButtonElement>('[data-shape]')
function selectShape(shape: ShapeName) {
  model.reset(shape)
  interaction.clear()
  const next = SHAPES[shape]
  detail.textContent = next.label + ' · ' + next.vertices.length + ' vértices · ' + next.faces.length + ' faces'
  for (const button of shapeButtons) button.setAttribute('aria-pressed', String(button.dataset.shape === shape))
  draw()
}
for (const button of shapeButtons) {
  button.addEventListener('click', () => selectShape(button.dataset.shape as ShapeName))
}

element('reset-solid').addEventListener('click', () => selectShape(model.shape))
element('zoom-out').addEventListener('click', () => { model.magnify(0.88); draw() })
element('zoom-in').addEventListener('click', () => { model.magnify(1.14); draw() })
wheel.addEventListener('click', event => {
  if (event.detail !== 0) return
  model.hue = (model.hue + 64) % 360
  draw()
})
cameraButton.addEventListener('click', () => void toggleCamera())
element('scene-fullscreen').addEventListener('click', async () => {
  try { await sculptor.requestFullscreen() }
  catch { statusText('O navegador não abriu em tela cheia.') }
})
exitFullscreen.addEventListener('click', () => { if (document.fullscreenElement) void document.exitFullscreen() })
window.addEventListener('pagehide', stopCamera)
document.addEventListener('visibilitychange', () => {
  if (document.hidden && (camera || request)) {
    stopCamera()
    showGestureStatus()
  }
})
new ResizeObserver(() => {
  placeWheel()
  clearHands()
  interaction.clear()
  draw()
}).observe(stage)
draw()
