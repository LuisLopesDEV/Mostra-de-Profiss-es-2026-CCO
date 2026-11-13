import arenaUrl from '../assets/arcade/tiro/arena.webp'
import targetUrl from '../assets/arcade/tiro/alvo-eletronico.png'
import aimUrl from '../assets/arcade/tiro/mira.png'
import armedUrl from '../assets/arcade/tiro/mira-pronta.png'
import impactUrl from '../assets/arcade/tiro/impacto.png'
import launcherUrl from '../assets/arcade/tiro/lancador-gaguinho.webp'
import { formatTime } from '../config.js'
import { readHand } from '../solar/hand-actions.js'
import { IndexAim as AimFilter } from '../solar/index-aim.js'
import type { Point } from '../types.js'
import { arenaAim, FistTrigger } from './gestures.js'
import { ArcadeBest, loadImages, mountArcade } from './session.js'
import type { ArcadeGame, PlayState } from './session.js'
import { RANGE_SIZE, ROUND_MS, TargetRound } from './targets.js'
import type { Target } from './targets.js'

const { width, height } = RANGE_SIZE
const center = { x: width / 2, y: height / 2 }
const previewTarget: Target = { x: 483, y: 247, radius: 55, born: 0, expires: Infinity }
const direction: Record<string, readonly [number, number]> = { ArrowLeft: [-20, 0], ArrowRight: [20, 0], ArrowUp: [0, -20], ArrowDown: [0, 20] }
const sources = { arena: arenaUrl, disc: targetUrl, aim: aimUrl, armed: armedUrl, impact: impactUrl, launcher: launcherUrl }
const AIM_HINT = 'Abra a mão para mirar.'
type Images = Record<keyof typeof sources, HTMLImageElement>

function createRange(images: Images): ArcadeGame {
  const backdrop = document.createElement('canvas')
  backdrop.width = width
  backdrop.height = height
  const background = backdrop.getContext('2d')
  if (!background) throw new Error('Não foi possível desenhar a arena.')
  const launcher = images.launcher
  const launcherWidth = 264
  background.drawImage(images.arena, 0, 0, width, height)
  background.drawImage(launcher, width - 268, height - 148, launcherWidth, launcherWidth * launcher.height / launcher.width)

  const game = new TargetRound()
  const best = new ArcadeBest('cacco-tiro-best')
  const tracking = new AimFilter()
  const trigger = new FistTrigger()
  let time = 0
  let aim: Point | null = null
  let shot: { point: Point; at: number; hit: boolean } | null = null
  let armed = false
  let handId: number | null = null
  let cameraHint = AIM_HINT

  function saveBest() {
    best.record(game.score)
  }

  window.addEventListener('pagehide', saveBest)
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) saveBest()
  })

  function shoot(point: Point, fromHand = false) {
    if (shot && time - shot.at < 82) return
    shot = { point, at: time, hit: game.shoot(point, time) > 0 }
    if (fromHand) cameraHint = AIM_HINT
  }

  function drawTarget(ctx: CanvasRenderingContext2D, target: Target, now: number) {
    ctx.globalAlpha = Math.min(1, 0.66 + (target.expires - now) / 620)
    ctx.drawImage(images.disc, target.x - target.radius, target.y - target.radius, target.radius * 2, target.radius * 2)
    ctx.globalAlpha = 1
  }

  function draw(ctx: CanvasRenderingContext2D, _now: number, state: PlayState) {
    ctx.drawImage(backdrop, 0, 0)
    const waiting = state === 'menu' || state === 'setup'
    if (waiting) drawTarget(ctx, previewTarget, 0)
    else for (const target of game.targets) drawTarget(ctx, target, time)

    for (const hit of game.impacts) {
      const size = hit.radius * 2.3
      ctx.globalAlpha = Math.max(0, 1 - (time - hit.time) / 540)
      ctx.drawImage(images.impact, hit.x - size / 2, hit.y - size / 2, size, size)
      ctx.font = '800 25px Arial'
      ctx.textAlign = 'center'
      ctx.fillStyle = '#ffe4ef'
      ctx.fillText('+' + hit.points, hit.x + hit.radius * 0.85, hit.y - hit.radius * 0.75)
    }
    if (state === 'playing' && shot && !shot.hit && time - shot.at < 180) {
      ctx.globalAlpha = 0.8 * (1 - (time - shot.at) / 180)
      ctx.strokeStyle = '#ffb4ca'
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.arc(shot.point.x, shot.point.y, 24, 0, 2 * Math.PI)
      ctx.stroke()
    }
    ctx.globalAlpha = 1
    const pointer = state === 'playing' ? aim : waiting ? previewTarget : null
    if (pointer) ctx.drawImage(armed || waiting ? images.armed : images.aim, pointer.x - 20, pointer.y - 20, 40, 40)
  }

  return {
    get handReady() { return cameraHint },
    display: () => ({ points: game.score, metric: formatTime(ROUND_MS - time) }),
    reset() {
      saveBest()
      time = 0
      shot = null
      game.reset()
    },
    clearInput() {
      aim = null
      handId = null
      tracking.clear()
      trigger.clear()
      armed = false
      cameraHint = AIM_HINT
    },
    hand(hand, source, received, playing) {
      if (!hand) {
        trigger.clear()
        armed = false
        return undefined
      }
      const gesture = readHand(hand)
      if (handId !== hand.id) {
        this.clearInput()
        handId = hand.id
      }
      if (!gesture) {
        this.clearInput()
        return undefined
      }
      const pose = gesture.pose === 'palm' ? 'open' : gesture.pose === 'fist' ? 'closed' : 'transition'
      const command = trigger.update(hand.id, pose, received)
      armed = command.ready
      if (pose === 'open') {
        const filtered = tracking.update(hand.id, gesture.palm.center, Math.max(source.width, source.height), received)
        aim = arenaAim(filtered, source, RANGE_SIZE)
      }
      if (command.fire && playing && aim) shoot(aim, true)
      else cameraHint = armed ? 'Feche a mão para atirar.' : AIM_HINT
      return command.fire ? 'fist' : armed && pose === 'open' ? 'palm' : undefined
    },
    step(seconds) {
      time = Math.min(ROUND_MS, time + seconds * 1000)
      game.update(time)
      if (time < ROUND_MS) return null
      saveBest()
      const accuracy = game.shots ? Math.round(game.hits * 100 / game.shots) : 0
      return { title: 'Tempo encerrado', note: `${game.score} pontos · ${accuracy}% de acertos · recorde ${best.value}` }
    },
    draw,
    pointer(point, pressed, playing) {
      aim = point
      armed = true
      if (pressed && playing) shoot(point)
    },
    key(key, repeat, playing) {
      if (key === ' ') {
        if (playing && !repeat) shoot(aim ?? center)
        return true
      }
      const delta = direction[key]
      if (!delta) return false
      const current = aim ?? center
      aim = { x: Math.max(0, Math.min(width, current.x + delta[0])), y: Math.max(0, Math.min(height, current.y + delta[1])) }
      armed = true
      return true
    },
    pointerLeaves() { aim = null },
  }
}

mountArcade(loadImages(sources).then(createRange))
