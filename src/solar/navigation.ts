import type { Grip } from '../poligonos/gestures.js'
import type { Point, Size } from '../types.js'

type Touch = { kind: 'one'; id: number; start: Point; point: Point; dragging: boolean }
  | { kind: 'two'; ids: [number, number]; gap: number }

export interface SolarNavigationTarget {
  rotate(dx: number, dy: number): void
  zoom(factor: number): void
}

export class SolarGestures {
  private touch: Touch | null = null

  constructor(private readonly target: SolarNavigationTarget) {}

  get mode() { return this.touch?.kind ?? null }

  clear() { this.touch = null }

  update(grips: readonly Grip[], size: Size) {
    const current = this.touch
    const [first, second] = grips
    if (!first) {
      this.clear()
      return
    }

    if (second) {
      const ids: [number, number] = first.id < second.id ? [first.id, second.id] : [second.id, first.id]
      const gap = Math.hypot(first.point.x - second.point.x, first.point.y - second.point.y)
      const minGap = Math.min(size.width, size.height) * 0.06
      if (current?.kind === 'two' && current.ids[0] === ids[0] && current.ids[1] === ids[1] &&
          current.gap > minGap && gap > minGap) {
        this.target.zoom(Math.min(1.18, Math.max(0.85, gap / current.gap)))
      }
      this.touch = { kind: 'two', ids, gap }
      return
    }

    const { id, point } = first
    if (current?.kind !== 'one' || current.id !== id) {
      this.touch = { kind: 'one', id, start: point, point, dragging: false }
      return
    }

    const moved = Math.hypot(point.x - current.start.x, point.y - current.start.y)
    if (!current.dragging && moved < 9) return
    this.target.rotate(point.x - current.point.x, point.y - current.point.y)
    this.touch = { ...current, point, dragging: true }
  }
}
