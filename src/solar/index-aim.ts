import type { Point } from '../types.js'
import { POSE_GAP_MS } from './hand-actions.js'

const distance = (a: Point, b: Point) => Math.hypot(a.x - b.x, a.y - b.y)

type Aim = { id: number; point: Point; lastTip: Point; time: number; pending: Point | null }

export class IndexAim {
  private aim: Aim | null = null

  clear() { this.aim = null }

  update(id: number, tip: Point, cameraSide: number, time: number): Point {
    const aim = this.aim
    if (!aim || aim.id !== id || time - aim.time > POSE_GAP_MS) {
      this.aim = { id, point: tip, lastTip: tip, time, pending: null }
      return tip
    }
    const elapsed = Math.max(0, time - aim.time)
    aim.time = time
    if (distance(aim.lastTip, tip) > cameraSide * 0.045 &&
        (!aim.pending || distance(aim.pending, tip) > cameraSide * 0.065)) {
      aim.pending = tip
      return aim.point
    }
    aim.pending = null
    aim.lastTip = tip

    const delta = distance(aim.point, tip)
    const deadZone = cameraSide * 0.0055
    if (delta <= deadZone) return aim.point
    const travel = delta - deadZone
    const responseMs = 120 - 91 * Math.min(1, travel / (cameraSide * 0.042))
    const weight = (1 - Math.exp(-elapsed / responseMs)) * travel / delta
    aim.point = {
      x: aim.point.x + (tip.x - aim.point.x) * weight,
      y: aim.point.y + (tip.y - aim.point.y) * weight,
    }
    return aim.point
  }
}
