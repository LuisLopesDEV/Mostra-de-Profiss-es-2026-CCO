import { ARENA, ARENA_ASPECT, ROUND, TRACKING, formatTime } from './config.js'
import type { Hit } from './game.js'
import { RANKING_LIMIT, RANKING_NAME_LIMIT } from './record.js'
import type { RankingEntry } from './record.js'
import type { Control, Point, Rectangle, Screen } from './types.js'

function element<T extends HTMLElement = HTMLElement>(id: string) {
  const node = document.getElementById(id)
  if (!node) throw new Error('Elemento ausente: ' + id)
  return node as T
}

function text(node: HTMLElement, value: string) {
  if (node.textContent !== value) node.textContent = value
}

export class GameView {
  readonly arena = element('arena')
  readonly canvas = element<HTMLCanvasElement>('game')
  readonly video = element<HTMLVideoElement>('camera')
  readonly handAim = element<HTMLSelectElement>('hand-aim')
  readonly rankingForm = element<HTMLFormElement>('ranking-form')
  readonly rankingName = element<HTMLInputElement>('ranking-name')
  readonly buttons = {
    camera: element<HTMLButtonElement>('use-camera'),
    mouse: element<HTMLButtonElement>('use-mouse'),
    startCamera: element<HTMLButtonElement>('start-camera'),
    setupMouse: element<HTMLButtonElement>('setup-mouse'),
    setupBack: element<HTMLButtonElement>('setup-back'),
    pauseBack: element<HTMLButtonElement>('pause-back'),
    resultBack: element<HTMLButtonElement>('result-back'),
    menuRanking: element<HTMLButtonElement>('menu-ranking'),
    resultRanking: element<HTMLButtonElement>('result-ranking'),
    pause: element<HTMLButtonElement>('pause'),
    resume: element<HTMLButtonElement>('resume'),
    replay: element<HTMLButtonElement>('replay'),
    fullscreen: element<HTMLButtonElement>('fullscreen'),
    exitFullscreen: element<HTMLButtonElement>('exit-fullscreen'),
  }
  private readonly panels = {
    menu: element('menu-panel'),
    setup: element('setup-panel'),
    paused: element('pause-panel'),
    result: element('result-panel'),
  }
  private readonly viewfinder = element('viewfinder')
  private readonly cameraFrame = element('camera-frame')
  private readonly cameraGuide = element('camera-guide')
  private readonly cameraDot = element('camera-dot')
  private readonly cameraLabel = element('camera-label')
  private readonly setupStatus = element('setup-status')
  private readonly startAim = element('corte-start-aim')
  private readonly cameraRate = element('camera-rate')
  private readonly controlLabel = element('control-label')
  private readonly gameStatus = element('game-status')
  private readonly countdown = element('countdown')
  private readonly feedback = element('feedback')
  private readonly score = element('score')
  private readonly time = element('time')
  private readonly best = element('best')
  private readonly pauseNote = element('pause-note')
  private readonly resultScore = element('result-score')
  private readonly resultNote = element('result-note')
  private readonly rankingDialog = element<HTMLDialogElement>('ranking')
  private readonly rankingTable = element<HTMLTableElement>('ranking-table')
  private readonly rankingScores = element<HTMLTableSectionElement>('ranking-scores')
  private readonly rankingEmpty = element('ranking-empty')
  private readonly rankingStatus = element('ranking-status')

  constructor() {
    const style = document.documentElement.style
    style.setProperty('--arena-ratio', ARENA.width + ' / ' + ARENA.height)
    style.setProperty('--arena-aspect', String(ARENA_ASPECT))
    this.canvas.tabIndex = -1
    element('hand-aim-control').hidden = !TRACKING.palmControlEnabled
    this.rankingName.maxLength = RANKING_NAME_LIMIT
    text(element('ranking-subtitle'), 'As ' + RANKING_LIMIT + ' melhores partidas neste navegador.')

    text(element('menu-rules'), 'Corte as frutas, desvie do Gaguinho e faça o máximo de pontos em ' +
      ROUND.durationMs / 1000 + ' segundos.')
    text(element('fruit-rule'), 'Fruta +' + ROUND.fruitPoints)
    text(element('gaguinho-rule'), 'Gaguinho −' + ROUND.bombPenalty)
  }

  showScreen(screen: Screen, control: Control) {
    this.arena.dataset.screen = screen
    this.setControl(control)
    for (const [name, panel] of Object.entries(this.panels)) panel.hidden = name !== screen
    this.countdown.hidden = screen !== 'countdown'
    this.buttons.pause.hidden = screen !== 'playing'
  }

  setControl(control: Control) {
    this.arena.dataset.control = control
  }

  setControlLabel(message: string) { text(this.controlLabel, message) }
  setStatus(message: string) { text(this.gameStatus, message) }
  setSetupStatus(message: string) { text(this.setupStatus, message) }
  setCameraLabel(message: string) { text(this.cameraLabel, message) }

  showCameraRate(fps: number | null) {
    this.cameraRate.hidden = fps === null || fps >= 20
    if (fps !== null && !this.cameraRate.hidden) {
      text(this.cameraRate, 'Câmera a ' + Math.round(fps) + ' fps. Se a mão borrar, ilumine-a de frente.')
    }
  }

  showCamera(visible: boolean) {
    this.viewfinder.hidden = !visible
    if (!visible) {
      this.cameraDot.hidden = true
      this.cameraGuide.hidden = true
    } else if (this.video.videoWidth && this.video.videoHeight) {
      this.cameraFrame.style.aspectRatio = this.video.videoWidth + ' / ' + this.video.videoHeight
    }
  }

  guide(region: Rectangle) {
    this.cameraGuide.hidden = false
    this.cameraGuide.style.left = region.x * 100 + '%'
    this.cameraGuide.style.top = region.y * 100 + '%'
    this.cameraGuide.style.width = region.width * 100 + '%'
    this.cameraGuide.style.height = region.height * 100 + '%'
  }

  aim(point: Point | null, held = false) {
    this.cameraDot.hidden = !point
    if (!point) return
    this.cameraDot.style.left = point.x * 100 + '%'
    this.cameraDot.style.top = point.y * 100 + '%'
    this.cameraDot.style.opacity = held ? '0.5' : '1'
  }

  pointAtStart(point: Point) {
    this.startAim.hidden = false
    this.startAim.style.left = point.x * 100 + '%'
    this.startAim.style.top = point.y * 100 + '%'
    const area = this.panels.setup.getBoundingClientRect()
    const button = this.buttons.startCamera
    if (button.disabled || !area.width || !area.height) return false
    const bounds = button.getBoundingClientRect()
    const x = area.left + area.width * point.x
    const y = area.top + area.height * point.y
    const margin = button.hasAttribute('data-hand-hover') ? 10 : 0
    return x >= bounds.left - margin && x <= bounds.right + margin && y >= bounds.top - margin && y <= bounds.bottom + margin
  }

  showStartProgress(over: boolean, progress: number) {
    const value = progress * 100 + '%'
    this.buttons.startCamera.toggleAttribute('data-hand-hover', over)
    this.buttons.startCamera.style.setProperty('--start-progress', value)
    this.startAim.style.setProperty('--start-progress', value)
  }

  clearStartAim() {
    this.startAim.hidden = true
    this.showStartProgress(false, 0)
  }

  updateHud(score: number, remaining: number, best: number) {
    text(this.score, String(score).padStart(3, '0'))
    text(this.best, String(best).padStart(3, '0'))
    text(this.time, formatTime(remaining))
    this.time.classList.toggle('urgent', remaining <= 10_000)
  }

  setCountdown(milliseconds: number) {
    text(this.countdown, String(Math.ceil(milliseconds / 1000)))
  }

  showHit(hit: Hit) {
    const messages = []
    if (hit.fruitPoints > 0) messages.push('+' + hit.fruitPoints)
    if (hit.bombPenalty > 0) messages.push('Gaguinho −' + hit.bombPenalty)
    this.feedback.classList.toggle('negative', hit.bombPenalty > 0)
    text(this.feedback, messages.join(' · '))
  }

  clearHit() { text(this.feedback, '') }

  showPause(message: string) {
    this.pauseNote.hidden = !message
    text(this.pauseNote, message)
    this.buttons.resume.focus({ preventScroll: true })
  }

  showResult(score: number, best: number, newBest: boolean) {
    text(this.resultScore, score + (score === 1 ? ' ponto' : ' pontos'))
    text(this.resultNote, newBest ? 'Novo recorde neste navegador!' : 'Recorde nesta estação · ' + best)
    this.rankingForm.reset()
    this.rankingName.setCustomValidity('')
    this.rankingForm.hidden = false
    this.rankingStatus.hidden = true
    this.buttons.replay.focus({ preventScroll: true })
  }

  showRanking(entries: readonly RankingEntry[]) {
    this.rankingScores.replaceChildren()
    for (const [index, entry] of entries.entries()) {
      const row = this.rankingScores.insertRow()
      row.insertCell().textContent = String(index + 1)
      row.insertCell().textContent = entry.name
      row.insertCell().textContent = String(entry.score)
    }
    this.rankingTable.hidden = entries.length === 0
    this.rankingEmpty.hidden = entries.length > 0
    if (!this.rankingDialog.open) this.rankingDialog.showModal()
  }

  showRankingSubmission(position: number, persisted: boolean) {
    const result = position > 0
      ? position + 'º lugar no ranking.'
      : 'Pontuação fora do top ' + RANKING_LIMIT + '.'
    text(this.rankingStatus, persisted ? result : result + ' Ranking disponível durante esta sessão.')
    this.rankingStatus.hidden = false
    this.rankingForm.hidden = true
    this.buttons.resultRanking.focus({ preventScroll: true })
  }
}
