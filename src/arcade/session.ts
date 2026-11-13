import '../style.css'
import './arcade.css'
import { cameraErrorMessage, connectHandCamera } from '../hand-camera.js'
import type { CameraEvent, HandCamera } from '../hand-camera.js'
import type { HandFrame } from '../hand-filter.js'
import { previewPoint } from '../hand-geometry.js'
import type { FrameGeometry } from '../hand-geometry.js'
import { fitVideo, PinchTracker } from '../poligonos/gestures.js'
import type { HandCursor } from '../poligonos/gestures.js'
import { loadRecord, saveRecord } from '../record.js'
import type { ReadyPose } from '../solar/hand-actions.js'
import { drawHandPreview } from '../solar/hand-preview.js'
import type { HandAim, Point, Size } from '../types.js'
import type { Detection } from '../vision-protocol.js'

export type PlayState = 'menu' | 'setup' | 'countdown' | 'playing' | 'paused' | 'result'
type Mode = 'mouse' | 'camera'
type Display = { points: number; metric: string }
type Finish = { title: string; note: string }
export type ArcadeGame = {
  display(): Display
  reset(): void
  begin?(): void
  clearInput(): void
  hand?(hand: HandCursor | null, source: Size, time: number, playing: boolean): ReadyPose | undefined
  tracking?(frame: HandFrame, geometry: FrameGeometry): void
  handReady: string
  step(seconds: number): Finish | null
  draw(ctx: CanvasRenderingContext2D, time: number, state: PlayState): void
  pointer(point: Point, pressed: boolean, playing: boolean): void
  key(key: string, repeat: boolean, playing: boolean): boolean
  pointerLeaves?(): void
}

export function loadImages<const T extends Record<string, string>>(sources: T) {
  const entries = Object.entries(sources).map(async ([key, url]) => {
    const image = new Image()
    image.src = url
    await image.decode()
    return [key, image] as const
  })
  return Promise.all(entries).then(result => Object.fromEntries(result) as Record<keyof T, HTMLImageElement>)
}

export class ArcadeBest {
  value = 0

  constructor(private readonly key: string) {
    this.value = loadRecord(key)
  }

  record(points: number) {
    if (points <= this.value) return
    this.value = points
    saveRecord(points, this.key)
  }
}

function element<T extends HTMLElement = HTMLElement>(name: string) {
  const node = document.getElementById('arcade-' + name)
  if (!node) throw new Error('Elemento ausente: ' + name)
  return node as T
}

export function mountArcade(load: Promise<ArcadeGame>) {
  const shell = element('shell')
  const stage = element('stage')
  const canvas = element<HTMLCanvasElement>('canvas')
  const video = element<HTMLVideoElement>('video')
  const landmarks = element<HTMLCanvasElement>('landmarks')
  const viewfinder = element('viewfinder')
  const handAim = document.querySelector<HTMLSelectElement>('#arcade-hand-aim')
  const handDot = document.getElementById('arcade-hand-dot')
  const points = element('points')
  const metric = element('metric')
  const overlay = element('overlay')
  const title = element('overlay-title')
  const note = element('overlay-note')
  const status = element('status')
  const mouse = element<HTMLButtonElement>('mouse')
  const webcam = element<HTMLButtonElement>('webcam')
  const pauseButton = element<HTMLButtonElement>('pause')
  const tracker = new PinchTracker()
  const context = canvas.getContext('2d')
  if (!context) {
    mouse.disabled = webcam.disabled = true
    status.textContent = 'Este navegador não conseguiu iniciar o Canvas.'
    return
  }
  const ctx = context
  const size = { width: canvas.width, height: canvas.height }
  let game: ArcadeGame | null = null
  let state: PlayState = 'menu'
  let control: Mode = 'mouse'
  let camera: HandCamera | null = null
  let request: AbortController | null = null
  let selectedHand: number | null = null
  let selectedSeenAt = -Infinity
  let missingSince: number | null = null
  let handTimeout: number | undefined
  let countdownEnd = 0
  let previous = performance.now()

  function say(message: string) {
    if (status.textContent !== message) status.textContent = message
  }

  function message(heading: string, description: string) {
    if (title.textContent !== heading) title.textContent = heading
    if (note.textContent !== description) note.textContent = description
  }

  function screen(next: PlayState) {
    state = next
    stage.dataset.screen = next
    overlay.hidden = next === 'menu' || next === 'playing'
    pauseButton.hidden = next !== 'playing' && next !== 'paused' && next !== 'countdown'
    pauseButton.textContent = next === 'paused' ? 'Continuar' : 'Pausar'
    const inRound = next === 'playing' || next === 'countdown' || next === 'paused'
    const action = next === 'result' ? 'Rejogar' : inRound ? 'Reiniciar' : 'Jogar'
    mouse.textContent = action + ' com mouse'
    webcam.textContent = request ? 'Cancelar webcam' : action + ' com webcam'
  }

  function clearHands() {
    window.clearTimeout(handTimeout)
    handTimeout = undefined
    tracker.clear()
    selectedHand = null
    selectedSeenAt = -Infinity
    missingSince = null
    game?.clearInput()
    if (handDot) handDot.hidden = true
    drawHandPreview(landmarks, video, [], new Map())
  }

  function closeCamera() {
    request?.abort()
    request = null
    clearHands()
    camera?.close()
    camera = null
    viewfinder.hidden = true
  }

  function count() {
    countdownEnd = performance.now() + 2400
    game?.clearInput()
    screen('countdown')
    message('3', control === 'mouse' ? 'Prepare-se.' : game?.handReady ?? '')
    say(control === 'camera' ? game?.handReady ?? '' : 'Prepare-se.')
    stage.focus({ preventScroll: true })
  }

  function startMouse() {
    if (!game) return
    closeCamera()
    control = 'mouse'
    game.reset()
    count()
  }

  function preferredAim(): HandAim { return handAim?.value === 'index' ? 'index' : 'palm' }

  function updateTracking(event: CameraEvent) {
    if (!game?.tracking || !handDot || !camera) return
    if (event.kind === 'tracking' || event.kind === 'holding') {
      if (!video.videoWidth || !video.videoHeight) return
      const point = previewPoint(event.frame.filtered, event.geometry)
      const image = fitVideo({ width: video.videoWidth, height: video.videoHeight }, { width: video.clientWidth, height: video.clientHeight })
      handDot.hidden = false
      handDot.style.left = image.x + point.x * image.width + 'px'
      handDot.style.top = image.y + point.y * image.height + 'px'
      handDot.style.opacity = event.kind === 'holding' ? '0.5' : '1'
      if (event.kind === 'tracking') {
        if (state === 'playing' || state === 'countdown') game.tracking(event.frame, event.geometry)
        if (state !== 'paused') say(game.handReady)
      }
    } else {
      clearHands()
      if (state !== 'paused') say(event.kind === 'extend' ? 'Estenda o indicador para guiar o Gaguinho.' : 'Mostre uma mão inteira para a webcam.')
    }
  }

  function updateLandmarks(frame: Detection, time: number) {
    if (!game?.hand || !camera) return
    const source = { width: video.videoWidth, height: video.videoHeight }
    if (!source.width || !source.height) return
    const hands = frame.hands.length ? tracker.update(frame, { x: 0, y: 0, ...source }) : []
    const tracked = hands.find(candidate => candidate.id === selectedHand)
    const hand = tracked ?? (time - selectedSeenAt > 260 ? hands[0] : undefined)
    const ready = new Map<number, ReadyPose>()
    if (hand) {
      selectedHand = hand.id
      selectedSeenAt = time
      missingSince = null
      const pose = game.hand(hand, source, time, state === 'playing')
      if (pose) ready.set(hand.id, pose)
      if (state === 'playing' || state === 'countdown') say(game.handReady)
    } else {
      if (missingSince === null) {
        missingSince = time
        game.hand(null, source, time, false)
      }
      if (selectedHand === null || time - missingSince > 165) {
        if (!hands.length) tracker.clear()
        game.clearInput()
        if (state !== 'paused') say('Mostre uma mão inteira para a webcam.')
      }
    }
    drawHandPreview(landmarks, video, hands, ready)
    window.clearTimeout(handTimeout)
    handTimeout = window.setTimeout(() => {
      clearHands()
      if (state !== 'paused') say('Mostre uma mão inteira para a webcam.')
    }, Math.min(2400, Math.max(600, (frame.inferenceMs + 45) * 2.5)))
  }

  async function startWebcam() {
    if (!game) return
    if (request) {
      closeCamera()
      screen('menu')
      say('Escolha um controle para começar.')
      return
    }
    control = 'camera'
    game.reset()
    clearHands()
    if (camera) {
      if (game.tracking) camera.setAim(preferredAim())
      camera.setActive(true)
      count()
      return
    }
    const active = new AbortController()
    request = active
    screen('setup')
    message('Preparando a webcam', 'Permita o acesso à câmera no navegador.')
    say('Abrindo a câmera…')
    try {
      const opened = await connectHandCamera(video, active.signal, {
        update: event => {
          if (active.signal.aborted) return
          if (event.kind === 'recovering') {
            clearHands()
            if (state === 'playing' || state === 'countdown') pause()
            say('Reconectando a webcam…')
          } else if (event.kind === 'error') {
            closeCamera()
            screen('menu')
            say(cameraErrorMessage(event.error))
          } else updateTracking(event)
        },
        landmarks: game.hand ? (frame, time) => { if (!active.signal.aborted) updateLandmarks(frame, time) } : undefined,
      })
      if (active.signal.aborted) {
        opened.close()
        return
      }
      request = null
      camera = opened
      viewfinder.hidden = false
      if (game.tracking) opened.setAim(preferredAim())
      opened.setActive(true)
      count()
    } catch (error) {
      if (active.signal.aborted) return
      closeCamera()
      screen('menu')
      say(cameraErrorMessage(error))
    }
  }

  function pause() {
    if (state === 'paused') {
      count()
    } else if (state === 'playing' || state === 'countdown') {
      screen('paused')
      game?.clearInput()
      message('Pausa', 'Use Continuar para voltar à partida.')
      say('Partida pausada.')
    }
  }

  function animate(now: number) {
    if (!game) return
    const seconds = Math.max(0, (now - previous) / 1000)
    previous = now
    if (state === 'countdown') {
      if (now >= countdownEnd) {
        game.begin?.()
        screen('playing')
        stage.focus({ preventScroll: true })
        say(control === 'mouse' ? 'Modo mouse e teclado.' : game.handReady)
      } else {
        message(String(Math.ceil((countdownEnd - now) / 1000)), control === 'mouse' ? 'Prepare-se.' : game.handReady)
      }
    } else if (state === 'playing') {
      const result = game.step(seconds)
      if (result) {
        closeCamera()
        screen('result')
        message(result.title, result.note)
        say(result.note)
        const replay = control === 'camera' ? webcam : mouse
        replay.focus({ preventScroll: true })
      }
    }
    const display = game.display()
    const score = String(display.points).padStart(2, '0')
    if (points.textContent !== score) points.textContent = score
    if (metric.textContent !== display.metric) metric.textContent = display.metric
    game.draw(ctx, now, state)
    requestAnimationFrame(animate)
  }

  function pointer(event: PointerEvent, pressed: boolean) {
    if (!game || control !== 'mouse') return
    const bounds = stage.getBoundingClientRect()
    const x = (event.clientX - bounds.left - stage.clientLeft) * size.width / stage.clientWidth
    const y = (event.clientY - bounds.top - stage.clientTop) * size.height / stage.clientHeight
    const point = { x: Math.max(0, Math.min(size.width, x)), y: Math.max(0, Math.min(size.height, y)) }
    game.pointer(point, pressed, state === 'playing')
    stage.dataset.pointer = 'true'
  }

  stage.addEventListener('pointermove', event => pointer(event, false))
  stage.addEventListener('pointerdown', event => {
    if (event.button === 0) pointer(event, true)
  })
  stage.addEventListener('pointerleave', () => {
    stage.dataset.pointer = 'false'
    if (control === 'mouse') game?.pointerLeaves?.()
  })
  stage.addEventListener('keydown', event => {
    if (event.key === 'Escape' || event.key.toLowerCase() === 'p') {
      if (!event.repeat && (event.key !== 'Escape' || !document.fullscreenElement)) pause()
    } else if (control === 'mouse' && game?.key(event.key, event.repeat, state === 'playing')) {
      event.preventDefault()
    }
  })
  mouse.addEventListener('click', startMouse)
  webcam.addEventListener('click', () => void startWebcam())
  handAim?.addEventListener('change', () => {
    if (!game?.tracking || !camera) return
    clearHands()
    camera.setAim(preferredAim())
    say(preferredAim() === 'index' ? 'Estenda o indicador para guiar o Gaguinho.' : 'Mova a palma para guiar o Gaguinho.')
  })
  pauseButton.addEventListener('click', pause)
  element('fullscreen').addEventListener('click', async () => {
    try { await shell.requestFullscreen() }
    catch { say('O navegador não abriu em tela cheia.') }
  })
  element('exit').addEventListener('click', () => { if (document.fullscreenElement) void document.exitFullscreen() })
  window.addEventListener('pagehide', closeCamera)
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) return
    if (control === 'camera' && (camera || request)) {
      closeCamera()
      screen('menu')
      say('A webcam foi desligada. Escolha um controle para voltar.')
    } else if (state === 'playing' || state === 'countdown') pause()
  })
  mouse.disabled = webcam.disabled = true
  void load.then(ready => {
    game = ready
    game.reset()
    mouse.disabled = webcam.disabled = false
    requestAnimationFrame(animate)
  }).catch(() => say('A arte da atividade não carregou. Confira a extração do ZIP e recarregue a página.'))
}
