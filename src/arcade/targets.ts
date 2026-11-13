import type { Point } from '../types.js'

export const RANGE_SIZE = { width: 960, height: 540 }
export const ROUND_MS = 30_000
const MAX_TARGETS = 2
const TARGET_INTERVAL_MS = 3500
const TARGET_LIFETIME_MS = 5500

export type Target = Point & { radius: number; born: number; expires: number }
export type Impact = Point & { radius: number; time: number; points: number }

export class TargetRound {
  readonly targets: Target[] = []
  readonly impacts: Impact[] = []
  score = 0
  shots = 0
  hits = 0
  private nextAt = 0

  constructor(private readonly random = Math.random) {}

  reset() {
    this.targets.length = 0
    this.impacts.length = 0
    this.score = 0
    this.shots = 0
    this.hits = 0
    this.nextAt = TARGET_INTERVAL_MS
    this.add(0)
  }

  update(time: number) {
    for (let i = this.targets.length - 1; i >= 0; i--) {
      const target = this.targets[i]
      if (target && time >= target.expires) this.targets.splice(i, 1)
    }
    while (this.impacts[0] && time - this.impacts[0].time >= 540) this.impacts.shift()
    if (time >= this.nextAt && time <= ROUND_MS - TARGET_INTERVAL_MS) {
      if (this.targets.length < MAX_TARGETS) this.add(time)
      this.nextAt = time + TARGET_INTERVAL_MS
    }
  }

  shoot(point: Point, time: number) {
    if (time < 0 || time >= ROUND_MS) return 0
    this.shots++
    for (const [i, target] of this.targets.entries()) {
      if (time >= target.expires) continue
      const ratio = Math.hypot(point.x - target.x, point.y - target.y) / target.radius
      if (ratio > 1) continue
      const points = ratio <= 0.33 ? 30 : ratio <= 0.62 ? 20 : 10
      this.targets.splice(i, 1)
      this.hits++
      this.score += points
      this.impacts.push({ x: target.x, y: target.y, radius: target.radius, time, points })
      return points
    }
    return 0
  }

  private add(time: number) {
    const radius = 42 + this.random() * 12
    for (let attempt = 0; attempt < 20; attempt++) {
      const x = 116 + this.random() * 735
      const y = 122 + this.random() * 294
      if (x + radius > 678 && y + radius > 385) continue
      if (this.targets.some(t => Math.hypot(t.x - x, t.y - y) < t.radius + radius + 32)) continue
      this.targets.push({ x, y, radius, born: time, expires: Math.min(ROUND_MS, time + TARGET_LIFETIME_MS) })
      return
    }
  }
}
