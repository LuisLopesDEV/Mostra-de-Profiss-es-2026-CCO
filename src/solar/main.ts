import '../style.css'
import './solar.css'
import { cameraErrorMessage, connectHandCamera } from '../hand-camera.js'
import type { CameraEvent, HandCamera } from '../hand-camera.js'
import { PinchTracker } from '../poligonos/gestures.js'
import type { HandCursor } from '../poligonos/gestures.js'
import type { Point, Size } from '../types.js'
import type { Detection } from '../vision-protocol.js'
import { OrbitSweep, PoseConfirmation, VisibleSnap, readHand } from './hand-actions.js'
import type { ReadyPose } from './hand-actions.js'
import { DwellSelection } from './dwell.js'
import { drawHandPreview } from './hand-preview.js'
import { IndexAim } from './index-aim.js'
import { SolarGestures } from './navigation.js'
import { PLANETS, SECRET_PLANET, SOLAR_BODIES } from './planets.js'
import type { BodyId } from './planets.js'
import { SolarScene } from './scene.js'

function element<T extends HTMLElement>(id: string): T {
  const node = document.getElementById(id)
  if (!node) throw new Error('Elemento ausente: ' + id)
  return node as T
}

const explorer = element('solar-explorer')
const stage = element('solar-stage')
const bodyList = element('solar-bodies')
const overview = element<HTMLButtonElement>('solar-overview')
const motion = element<HTMLButtonElement>('solar-motion')
const build = element<HTMLButtonElement>('solar-build')
const add = element<HTMLButtonElement>('solar-add')
const signal = element<HTMLButtonElement>('solar-signal')
const cameraButton = element<HTMLButtonElement>('solar-camera-button')
const viewfinder = element('solar-viewfinder')
const video = element<HTMLVideoElement>('solar-video')
const preview = element<HTMLCanvasElement>('solar-landmarks')
const handCount = element('solar-hand-count')
const name = element('solar-name')
const kind = element('solar-kind')
const description = element('solar-description')
const year = element('solar-year')
const period = element('solar-period')
const status = element('solar-status')
const label = element('solar-object-label')
const handAim = element('solar-hand-aim')
const bodyAim = element('solar-body-aim')
const pointers = Array.from(stage.querySelectorAll<HTMLElement>('[data-hand-pointer]'))
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)')
const scene = new SolarScene(stage)
const tracker = new PinchTracker()
const snap = new VisibleSnap()
const orbit = new OrbitSweep()
const poses = new PoseConfirmation()
const indexAim = new IndexAim()
const dwell = new DwellSelection<HTMLButtonElement | BodyId>()
const gestures = new SolarGestures({
  rotate: (dx, dy) => scene.rotate(dx, dy),
  zoom: zoomView,
})

let playing = !reducedMotion.matches
let selected: BodyId | null = null
let shown: number = PLANETS.length
let building = false
let secretDiscovered = false
let size: Size = { width: 1, height: 1 }
let hands: HandCursor[] = []
let previewHands: HandCursor[] = []
let ready = new Map<number, ReadyPose>()
let fistHand: number | null = null
let dwellButton: HTMLButtonElement | null = null
let dwellBody: BodyId | null = null
let pointerLock: Point | null = null
let camera: HandCamera | null = null
let cameraRequest: AbortController | null = null
let handsTimer: number | null = null
let mouse: Point | null = null
let drag: { id: number; start: Point; point: Point; moved: boolean; body: BodyId | null } | null = null

const bodyButtons = SOLAR_BODIES.map(body => {
  const button = document.createElement('button')
  button.type = 'button'
  button.className = 'solar-control'
  button.dataset.solarDwell = ''
  button.hidden = body.id === SECRET_PLANET.id
  button.setAttribute('aria-pressed', 'false')
  const swatch = document.createElement('span')
  swatch.className = 'solar-body-dot'
  swatch.style.backgroundColor = body.color
  swatch.setAttribute('aria-hidden', 'true')
  button.append(swatch, body.name)
  button.addEventListener('click', () => selectBody(body.id))
  bodyList.append(button)
  return { id: body.id, button }
})

function selectBody(id: BodyId | null, closeUp = true) {
  gestures.clear()
  orbit.clear()
  selected = id
  if (id) scene.focus(id, closeUp)
  else scene.resetView()
  const body = SOLAR_BODIES.find(item => item.id === id)
  overview.setAttribute('aria-pressed', String(!id))
  for (const entry of bodyButtons) entry.button.setAttribute('aria-pressed', String(entry.id === id))
  name.textContent = body?.name ?? 'Visão geral'
  kind.hidden = !body
  kind.textContent = body?.kind ?? ''
  const detail = body?.description ?? (building ? 'Use o estalo ou o botão acima para revelar o próximo astro.' : 'Selecione um astro para vê-lo de perto.')
  description.textContent = id === 'neptune' && !secretDiscovered
    ? detail + ' Afaste a vista para procurar um sinal além da sua órbita.'
    : detail
  year.hidden = !body?.year
  period.textContent = body?.year ?? ''
  updateSignal()
}

function updateSignal() {
  signal.hidden = secretDiscovered || building || shown !== PLANETS.length || !scene.atWideView
}

function discoverSecret() {
  if (signal.hidden) return
  secretDiscovered = true
  scene.showSecret(true)
  buildControls()
  selectBody(SECRET_PLANET.id)
  statusText('Descoberta do CACCO · ' + SECRET_PLANET.name)
}

function buildControls() {
  build.setAttribute('aria-pressed', String(building))
  build.textContent = building ? 'Recomeçar montagem' : 'Montar do zero'
  const next = PLANETS[shown]
  add.hidden = !building || !next
  add.textContent = next ? (next.id === 'sun' ? 'Acender Sol' : 'Adicionar ' + next.name) : ''
  for (const [index, { id, button }] of bodyButtons.entries()) {
    if (id === SECRET_PLANET.id) {
      button.hidden = !secretDiscovered
      button.disabled = !secretDiscovered
    } else button.disabled = index >= shown
  }
  updateSignal()
}

function startBuild() {
  building = true
  shown = 0
  secretDiscovered = false
  scene.showSecret(false)
  playing = false
  snap.clear()
  scene.showBodies(shown, true)
  selectBody(null)
  buildControls()
  motionLabel()
  statusText('Montagem · polegar e dedo médio para acender o Sol')
}

function addBody() {
  const next = PLANETS[shown]
  if (!building || !next) return false
  shown++
  scene.showBodies(shown)
  selectBody(next.id, false)
  building = shown < PLANETS.length
  buildControls()
  statusText(building ? next.name + ' apareceu' : 'Sistema Solar completo')
  return true
}

function motionLabel() {
  const moving = playing || scene.movingByGesture
  motion.textContent = moving ? 'Pausar órbitas' : 'Retomar órbitas'
  motion.setAttribute('aria-pressed', String(!moving))
}

function toggleMotion() {
  if (playing || scene.movingByGesture) {
    playing = false
    scene.pauseGestures()
  } else {
    playing = true
    selectBody(null)
  }
  motionLabel()
}

function zoomView(factor: number) {
  if (scene.zoom(factor)) {
    selectBody(null)
    statusText('Visão geral')
  }
  updateSignal()
}

function clearDwell() {
  indexAim.clear()
  dwell.clear()
  dwellButton?.removeAttribute('data-hand-hover')
  dwellButton = null
  dwellBody = null
  pointerLock = null
  handAim.hidden = true
  bodyAim.hidden = true
}

function pointAtTarget(finger: Point, id: number, source: Size, time: number) {
  const area = explorer.getBoundingClientRect()
  const top = Math.max(0, area.top)
  const height = Math.min(innerHeight, area.bottom) - top
  const fraction = (value: number, extent: number) => Math.max(0, Math.min(1, (value / extent - 0.12) / 0.76))
  const x = area.left + 2 + fraction(finger.x, source.width) * (area.width - 4)
  const y = top + 2 + fraction(finger.y, source.height) * Math.max(0, height - 4)
  handAim.hidden = false
  handAim.style.transform = 'translate(' + (x - area.left - explorer.clientLeft) + 'px,' + (y - area.top - explorer.clientTop) + 'px)'

  if (pointerLock && Math.hypot(x - pointerLock.x, y - pointerLock.y) < 22) return true
  pointerLock = null
  const hit = document.elementFromPoint(x, y)
  let button = hit?.closest<HTMLButtonElement>('button[data-solar-dwell]:enabled') ?? null
  if (!button && dwellButton && !dwellButton.hidden && !dwellButton.disabled) {
    const bounds = dwellButton.getBoundingClientRect()
    const margin = 7
    if (x >= bounds.left - margin && x <= bounds.right + margin && y >= bounds.top - margin && y <= bounds.bottom + margin) button = dwellButton
  }
  const bounds = stage.getBoundingClientRect()
  const overStage = Boolean(hit && stage.contains(hit))
  const body = !button && overStage
    ? scene.pick({ x: x - bounds.left - stage.clientLeft, y: y - bounds.top - stage.clientTop }, dwellBody)
    : null
  if (dwellButton !== button) dwellButton?.removeAttribute('data-hand-hover')
  dwellButton = button
  dwellBody = body
  const result = dwell.update(button ?? body, id, time)
  const progress = String(result.progress * 100) + '%'
  handAim.style.setProperty('--hand-progress', progress)
  if (button) {
    button.dataset.handHover = 'true'
    button.style.setProperty('--hand-progress', progress)
  }
  if (result.activate) {
    pointerLock = { x, y }
    if (button) button.click()
    else if (body) selectBody(body)
    dwellButton?.removeAttribute('data-hand-hover')
    dwellButton = null
    dwellBody = null
  }
  if ((button || body) && !(button === signal && result.activate)) statusText(result.activate ? 'Selecionado' : 'Mantenha o indicador no alvo por 2 segundos')
  return Boolean(button || body)
}

function statusText(message: string) {
  if (status.textContent !== message) status.textContent = message
}

function clearHands() {
  if (handsTimer !== null) window.clearTimeout(handsTimer)
  handsTimer = null
  hands = []
  previewHands = []
  tracker.clear()
  poses.clear()
  ready.clear()
  fistHand = null
  clearDwell()
  gestures.clear()
  snap.clear()
  orbit.clear()
  handCount.textContent = '0 mãos'
  drawHandPreview(preview, video, previewHands, ready)
}

function stopCamera() {
  cameraRequest?.abort()
  cameraRequest = null
  camera?.close()
  camera = null
  viewfinder.hidden = true
  cameraButton.textContent = 'Ativar webcam'
  clearHands()
  statusText('Modo mouse')
}

function acceptHands(frame: Detection, time: number) {
  const source = { width: video.videoWidth, height: video.videoHeight }
  if (!source.width || !source.height) return
  previewHands = tracker.update(frame, { x: 0, y: 0, ...source })
  hands = previewHands.map(hand => ({ ...hand, point: { x: hand.point.x * size.width / source.width, y: hand.point.y * size.height / source.height } }))
  const shapes = previewHands.map(readHand).filter(shape => shape !== null)
  ready = drag ? new Map() : poses.update(shapes, time)
  handCount.textContent = hands.length === 1 ? '1 mão' : hands.length + ' mãos'
  if (!drag) {
    const single = previewHands.length === 1 ? previewHands[0] : undefined
    const shape = single ? shapes[0] : undefined
    const confirmed = single && ready.get(single.id)
    const snapped = snap.update(building ? shape : undefined, confirmed, time)
    const snapReady = snap.ready && confirmed !== 'point'
    if (single && snapReady) ready.set(single.id, 'snap')
    else if (single && confirmed === 'snap') ready.delete(single.id)
    const pose = single && ready.get(single.id)
    if (pose !== 'point') clearDwell()
    if (!single || fistHand !== single.id || pose === 'point' || pose === 'palm' || pose === 'pinch') fistHand = null
    const grips = hands.filter(hand => ready.get(hand.id) === 'pinch')
    if (snapped && addBody()) {
      orbit.clear()
    } else if (snapReady) {
      gestures.clear()
      orbit.clear()
      statusText('Estalo pronto · solte o dedo médio')
    } else {
      gestures.update(grips, size)
      const direction = orbit.update(selected && selected !== 'sun' && pose === 'palm' ? shape : undefined, time, source.width)
      if (selected && direction) {
        scene.moveInOrbit(selected, direction)
        motionLabel()
      }
      if (single && pose === 'fist' && fistHand !== single.id) {
        fistHand = single.id
        if (selected) {
          scene.spinBody(selected)
          updateSignal()
          motionLabel()
        }
      }
      if (single && pose === 'point') {
        const tip = single.joints[8]
        if (shape?.pose === 'point' && tip) {
          const finger = indexAim.update(single.id, tip, Math.max(source.width, source.height), time)
          if (!pointAtTarget(finger, single.id, source, time)) statusText('Indicador pronto · aponte para um astro ou botão')
        }
      } else if (gestures.mode === 'two') statusText('Duas pinças prontas · afaste ou aproxime as mãos')
      else if (gestures.mode === 'one') statusText('Pinça pronta · arraste para girar a vista')
      else if (pose === 'fist' && selected) statusText('Punho confirmado · rotação no próprio eixo')
      else if (pose === 'fist-ready' && selected) statusText('Punho pronto · mantenha a mão fechada')
      else if (orbit.active) statusText('Órbita ao redor do Sol ativada')
      else if (!hands.length) statusText('Mostre a mão inteira para a webcam')
      else if (selected && pose === 'palm') statusText(selected === 'sun' ? 'Feche a mão para girar o Sol' : 'Palma pronta · mova a mão de um lado para o outro')
      else if (building) statusText('Estale para revelar ' + PLANETS[shown]?.name)
      else statusText(selected ? 'Feche a mão para girar ou abra a palma para orbitar' : 'Estenda só o indicador para apontar')
    }
  }
  drawHandPreview(preview, video, previewHands, ready)
  if (handsTimer !== null) window.clearTimeout(handsTimer)
  handsTimer = window.setTimeout(() => {
    clearHands()
    if (camera) statusText('Mostre a mão inteira para a webcam')
  }, Math.max(420, frame.inferenceMs * 2.5))
}

function cameraEvent(event: CameraEvent) {
  if (event.kind === 'recovering') {
    clearHands()
    statusText('Reconectando a webcam…')
  } else if (event.kind === 'error') {
    stopCamera()
    statusText(cameraErrorMessage(event.error))
  }
}

async function toggleCamera() {
  if (cameraRequest) {
    stopCamera()
    return
  }
  const active = new AbortController()
  cameraRequest = active
  cameraButton.textContent = 'Cancelar'
  statusText('Preparando webcam…')
  try {
    const opened = await connectHandCamera(video, active.signal, {
      update: event => { if (!active.signal.aborted) cameraEvent(event) },
      landmarks: (frame, time) => { if (!active.signal.aborted) acceptHands(frame, time) },
    })
    if (active.signal.aborted) {
      opened.close()
      return
    }
    camera = opened
    viewfinder.hidden = false
    cameraButton.textContent = 'Desligar webcam'
    statusText('Mostre a mão inteira para a webcam')
    opened.setActive(true)
  } catch (error) {
    if (!active.signal.aborted) {
      stopCamera()
      statusText(cameraErrorMessage(error))
    }
  }
}

function localPoint(event: PointerEvent): Point {
  const bounds = stage.getBoundingClientRect()
  return { x: event.clientX - bounds.left - stage.clientLeft, y: event.clientY - bounds.top - stage.clientTop }
}

stage.addEventListener('pointerdown', event => {
  if (event.button !== 0 || drag || event.target === signal) return
  const point = localPoint(event)
  drag = { id: event.pointerId, start: point, point, moved: false, body: scene.pick(point) }
  stage.setPointerCapture(event.pointerId)
  gestures.clear()
  snap.clear()
  orbit.clear()
  clearDwell()
})
stage.addEventListener('pointermove', event => {
  if (drag && event.pointerId !== drag.id) return
  const point = localPoint(event)
  mouse = point
  if (!drag) return
  if (!drag.moved && Math.hypot(point.x - drag.start.x, point.y - drag.start.y) < 5) return
  scene.rotate(point.x - drag.point.x, point.y - drag.point.y)
  drag.point = point
  drag.moved = true
})
function releasePointer(event: PointerEvent) {
  if (!drag || event.pointerId !== drag.id) return
  if (event.type === 'pointerup' && !drag.moved && drag.body) selectBody(drag.body)
  if (event.type !== 'pointerup') mouse = null
  drag = null
  gestures.clear()
  poses.clear()
}
stage.addEventListener('pointerup', releasePointer)
stage.addEventListener('pointercancel', releasePointer)
stage.addEventListener('lostpointercapture', releasePointer)
stage.addEventListener('pointerleave', () => { mouse = null })
stage.addEventListener('wheel', event => {
  event.preventDefault()
  zoomView(event.deltaY > 0 ? 0.91 : 1.1)
}, { passive: false })
stage.addEventListener('keydown', event => {
  if (event.target !== stage) return
  switch (event.key) {
    case 'ArrowLeft': scene.rotate(-18, 0); break
    case 'ArrowRight': scene.rotate(18, 0); break
    case 'ArrowUp': scene.rotate(0, -18); break
    case 'ArrowDown': scene.rotate(0, 18); break
    case '+': zoomView(1.15); break
    case '-': zoomView(1 / 1.15); break
    default: return
  }
  event.preventDefault()
})

overview.addEventListener('click', () => selectBody(null))
signal.addEventListener('click', discoverSecret)
build.addEventListener('click', startBuild)
add.addEventListener('click', () => addBody())
element('solar-zoom-in').addEventListener('click', () => zoomView(1.18))
element('solar-zoom-out').addEventListener('click', () => zoomView(1 / 1.18))
motion.addEventListener('click', toggleMotion)
motionLabel()
cameraButton.addEventListener('click', () => void toggleCamera())
element('solar-fullscreen').addEventListener('click', async () => {
  try { await explorer.requestFullscreen() }
  catch { statusText('O navegador não abriu em tela cheia.') }
})
element('solar-exit').addEventListener('click', () => {
  if (document.fullscreenElement) void document.exitFullscreen()
})
window.addEventListener('pagehide', stopCamera)
document.addEventListener('visibilitychange', () => {
  if (document.hidden && cameraRequest) stopCamera()
})

new ResizeObserver(() => {
  const { clientWidth: width, clientHeight: height } = stage
  if (!width || !height) return
  size = { width, height }
  scene.resize(size)
  clearHands()
  mouse = null
}).observe(stage)

function updateLabels() {
  for (const [index, pointer] of pointers.entries()) {
    const hand = hands[index]
    const pinching = Boolean(hand && ready.get(hand.id) === 'pinch')
    pointer.hidden = !pinching
    if (!hand || !pinching) continue
    pointer.style.transform = 'translate(' + hand.point.x + 'px,' + hand.point.y + 'px)'
    pointer.dataset.pinched = String(hand.pinched)
  }

  const id = dwellBody ?? (!hands.length && !drag && mouse ? scene.pick(mouse) : null)
  const position = id && (id !== selected || id === dwellBody) ? scene.screenPosition(id) : null
  const body = position ? SOLAR_BODIES.find(item => item.id === id) : null
  stage.dataset.hover = String(Boolean(id) && !hands.length)
  label.hidden = !position || !body
  bodyAim.hidden = !dwellBody || !position
  if (dwellBody && position) {
    const diameter = Math.max(46, position.radius * 2 + 15)
    bodyAim.style.width = diameter + 'px'
    bodyAim.style.height = diameter + 'px'
    bodyAim.style.transform = 'translate(' + (position.x - diameter / 2) + 'px,' + (position.y - diameter / 2) + 'px)'
  }
  if (!position || !body) return
  if (label.textContent !== body.name) label.textContent = body.name
  const x = Math.min(size.width - label.offsetWidth - 6, Math.max(6, position.x - label.offsetWidth / 2))
  const y = Math.max(6, position.y - position.radius - 29)
  label.style.transform = 'translate(' + x + 'px,' + y + 'px)'
}

let last = performance.now()
function animate(now: number) {
  scene.draw(Math.min(0.06, Math.max(0, (now - last) / 1000)), playing, reducedMotion.matches, dwellBody)
  last = now
  updateLabels()
  requestAnimationFrame(animate)
}

element('solar-fallback').hidden = !scene.fallback || !scene.available
if (scene.available) requestAnimationFrame(animate)
else statusText('O navegador não conseguiu desenhar a cena.')
