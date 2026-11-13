export const FLIGHT_SIZE = { width: 960, height: 540 }
export const FLYER_X = 224
export const FLIGHT_LIMIT_SECONDS = 90
export const DUCT_WIDTH = 103
const DUCT_SHAFT = 70
const DUCT_CAP_HEIGHT = 42
const STEP = 1 / 120
const EDGE = 30

export type Duct = { x: number; center: number; gap: number; scored: boolean }

function difficulty(seconds: number) {
  return Math.min(1, Math.max(0, (seconds - 4) / 64))
}

function ductSpeed(seconds: number) {
  const progress = difficulty(seconds)
  return 200 + 255 * progress + 75 * Math.max(0, (seconds - 68) / 22)
}

export class FlightRound {
  readonly ducts: Duct[] = []
  y = FLIGHT_SIZE.height * 0.48
  speedY = 0
  score = 0
  travel = 0
  elapsed = 0
  crashed = false
  private altitude = this.y

  constructor(private readonly random = Math.random) {}

  get finished() { return this.crashed || this.elapsed >= FLIGHT_LIMIT_SECONDS }

  reset() {
    this.ducts.length = 0
    this.y = FLIGHT_SIZE.height * 0.48
    this.altitude = this.y
    this.speedY = 0
    this.score = 0
    this.travel = 0
    this.elapsed = 0
    this.crashed = false
    for (let index = 0; index < 3; index++) this.ducts.push(this.newDuct(665 + index * 382))
  }

  steer(y: number) {
    this.altitude = Math.min(FLIGHT_SIZE.height - EDGE, Math.max(EDGE, y))
  }

  nudge(dy: number) { this.steer(this.altitude + dy) }

  hold() { this.altitude = this.y }

  update(seconds: number) {
    if (this.finished || seconds <= 0) return
    const interval = Math.min(seconds, FLIGHT_LIMIT_SECONDS - this.elapsed)
    this.elapsed += interval
    for (let remaining = Math.min(interval, 0.13); remaining > 0 && !this.crashed; remaining -= STEP) {
      this.step(Math.min(remaining, STEP))
    }
  }

  private step(seconds: number) {
    const speed = ductSpeed(this.elapsed)
    const distance = (this.altitude - this.y) * (1 - Math.exp(-seconds * 26))
    const dy = Math.max(-1120 * seconds, Math.min(1120 * seconds, distance))
    this.y += dy
    this.speedY = dy / seconds
    this.travel += speed * seconds
    for (const duct of this.ducts) {
      duct.x -= speed * seconds
      const top = duct.center - duct.gap / 2
      const bottom = duct.center + duct.gap / 2
      const intersects = (left: number, right: number) => FLYER_X + 19 > left && FLYER_X - 19 < right
      const shaftLeft = duct.x + (DUCT_WIDTH - DUCT_SHAFT) / 2
      const hitsCap = intersects(duct.x, duct.x + DUCT_WIDTH) &&
        (this.y - 18 < top && this.y + 18 > top - DUCT_CAP_HEIGHT ||
         this.y + 18 > bottom && this.y - 18 < bottom + DUCT_CAP_HEIGHT)
      const hitsShaft = intersects(shaftLeft, shaftLeft + DUCT_SHAFT) &&
        (this.y - 18 < top - DUCT_CAP_HEIGHT || this.y + 18 > bottom + DUCT_CAP_HEIGHT)
      if (hitsCap || hitsShaft) {
        this.crashed = true
        return
      }
      if (!duct.scored && duct.x + DUCT_WIDTH < FLYER_X - 19) {
        duct.scored = true
        this.score++
      }
    }
    const first = this.ducts[0]
    const last = this.ducts.at(-1)
    if (first && last && first.x + DUCT_WIDTH < -12) {
      this.ducts.shift()
      this.ducts.push(this.newDuct(last.x + 382 - 55 * difficulty(this.elapsed)))
    }
  }

  private newDuct(x: number): Duct {
    const ageAtDuct = this.elapsed + (x - FLYER_X) / ductSpeed(this.elapsed)
    const progress = difficulty(ageAtDuct)
    const last = this.ducts.at(-1)
    const gap = 238 - 131 * progress ** 0.67
    const step = (this.random() * 2 - 1) * (93 + 92 * progress)
    const center = last ? Math.max(gap / 2 + 50, Math.min(FLIGHT_SIZE.height - gap / 2 - 50, last.center + step)) : 267
    return { x, center, gap, scored: false }
  }
}
