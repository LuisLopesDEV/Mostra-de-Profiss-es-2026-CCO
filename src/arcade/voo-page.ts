import skyUrl from '../assets/arcade/voo/ceu-e-cidade.webp'
import upperUrl from '../assets/arcade/voo/cano-superior.png'
import lowerUrl from '../assets/arcade/voo/cano-inferior.png'
import mascotUrl from '../assets/arcade/voo/gaguinho.png'
import wingUrl from '../assets/arcade/voo/asa.png'
import { formatTime, ARENA } from '../config.js'
import { arenaPoint } from '../hand-geometry.js'
import { DUCT_WIDTH, FLIGHT_LIMIT_SECONDS, FLIGHT_SIZE, FLYER_X, FlightRound } from './flight.js'
import type { Duct } from './flight.js'
import { ArcadeBest, loadImages, mountArcade } from './session.js'
import type { ArcadeGame, PlayState } from './session.js'

const { width, height } = FLIGHT_SIZE
const sources = { sky: skyUrl, upper: upperUrl, lower: lowerUrl, mascot: mascotUrl, wing: wingUrl }
type Images = Record<keyof typeof sources, HTMLImageElement>
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)')

function createFlight(images: Images): ArcadeGame {
  const game = new FlightRound()
  const best = new ArcadeBest('cacco-voo-best')

  function drawDuct(ctx: CanvasRenderingContext2D, duct: Pick<Duct, 'x' | 'center' | 'gap'>) {
    const ductHeight = images.upper.height * DUCT_WIDTH / images.upper.width
    ctx.drawImage(images.upper, duct.x, duct.center - duct.gap / 2 - ductHeight, DUCT_WIDTH, ductHeight)
    ctx.drawImage(images.lower, duct.x, duct.center + duct.gap / 2, DUCT_WIDTH, ductHeight)
  }

  function drawWings(ctx: CanvasRenderingContext2D, phase: number) {
    const stroke = Math.sin(phase)
    for (const [dx, dy, factor, angle] of [[6, -5, 0.79, 0.21], [0, 0, 1, 0]] as const) {
      ctx.save()
      ctx.translate(-21 + dx, 3 + dy)
      ctx.rotate(angle + stroke * 0.65)
      ctx.scale(factor, factor * (1 - 0.33 * Math.abs(Math.cos(phase))))
      ctx.drawImage(images.wing, -36, -21, 43, 39)
      ctx.restore()
    }
  }

  function draw(ctx: CanvasRenderingContext2D, time: number, state: PlayState) {
    const waiting = state === 'menu' || state === 'setup'
    const cameraDrift = waiting ? 0 : Math.sin(game.travel / 825) * 19
    ctx.clearRect(0, 0, width, height)
    ctx.drawImage(images.sky, -30 - cameraDrift, -14, width + 60, height + 29)
    const shade = ctx.createLinearGradient(0, 0, 0, 210)
    shade.addColorStop(0, '#070f3b42')
    shade.addColorStop(1, '#070f3b00')
    ctx.fillStyle = shade
    ctx.fillRect(0, 0, width, 210)
    if (waiting) {
      drawDuct(ctx, { x: 559, center: 290, gap: 225 })
      drawDuct(ctx, { x: 806, center: 235, gap: 225 })
    } else {
      for (const duct of game.ducts) drawDuct(ctx, duct)
    }
    const animationTime = waiting ? time : game.elapsed * 1000
    const moving = !reducedMotion.matches && state !== 'result'
    const tilt = Math.max(-0.31, Math.min(0.35, game.speedY / 1150))
    const phase = moving ? animationTime * 0.019 - tilt : 0.2
    const y = game.y + (waiting && moving ? Math.sin(time / 225) * 7 : 0)
    ctx.save()
    ctx.translate(waiting ? 330 : FLYER_X, y)
    ctx.rotate(waiting ? -0.075 : tilt)
    ctx.shadowColor = '#100d3482'
    ctx.shadowBlur = 10
    if (waiting) ctx.scale(1.35, 1.35)
    drawWings(ctx, phase)
    ctx.shadowBlur = 0
    ctx.drawImage(images.mascot, -34, -39, 76, 78)
    ctx.restore()
  }

  return {
    handReady: 'Mova a mão para cima e para baixo para guiar o Gaguinho.',
    display: () => ({ points: game.score, metric: formatTime(1000 * (FLIGHT_LIMIT_SECONDS - game.elapsed)) }),
    reset() { game.reset() },
    clearInput() { game.hold() },
    tracking(frame, geometry) {
      game.steer(arenaPoint(frame.filtered, geometry).y * height / ARENA.height)
    },
    step(seconds) {
      game.update(seconds)
      best.record(game.score)
      if (!game.finished) return null
      const note = `${game.score} ${game.score === 1 ? 'ponto' : 'pontos'} · recorde ${best.value}`
      return { title: game.crashed ? 'Fim do voo' : 'Percurso completo!', note }
    },
    draw,
    pointer(point) { game.steer(point.y) },
    key(key) {
      if (key !== 'ArrowUp' && key !== 'ArrowDown') return false
      game.nudge(key === 'ArrowUp' ? -35 : 35)
      return true
    },
    pointerLeaves() { game.hold() },
  }
}

mountArcade(loadImages(sources).then(createFlight))
