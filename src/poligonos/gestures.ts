import type { Point, Rectangle, Size } from '../types.js'
import type { Detection, HandSide } from '../vision-protocol.js'
import type { SolidModel } from './solid.js'

export type Grip = { id: number; point: Point }
export type HandCursor = Grip & { pinched: boolean; joints: Point[] }
type TrackedHand = HandCursor & { palm: Point; side: HandSide | null }
type ColorWheel = { center: Point; radius: number }

const PINCH_CLOSE = 0.29
const PINCH_OPEN = 0.42

export function fitVideo(video: Size, stage: Size): Rectangle {
  const scale = Math.min(stage.width / video.width, stage.height / video.height)
  const width = video.width * scale
  const height = video.height * scale
  return { x: (stage.width - width) / 2, y: (stage.height - height) / 2, width, height }
}

function mirrored(point: Point, image: Rectangle): Point {
  return { x: image.x + (1 - point.x) * image.width, y: image.y + point.y * image.height }
}

function distance(a: Point, b: Point) {
  return Math.hypot(a.x - b.x, a.y - b.y)
}

function midpoint(a: Point, b: Point): Point {
  return { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 }
}

export class PinchTracker {
  private previous: TrackedHand[] = []
  private nextId = 0

  clear() { this.previous = [] }

  update(frame: Detection, image: Rectangle): HandCursor[] {
    const candidates = frame.hands.flatMap(hand => {
      const thumb = hand.landmarks?.[4]
      const index = hand.landmarks?.[8]
      if (!thumb || !index || !hand.landmarks || hand.palmSpan <= 0) return []
      const { width, height } = frame.size
      const gap = Math.hypot((thumb.x - index.x) * width, (thumb.y - index.y) * height)
      return [{
        thumb, index, hand,
        ratio: gap / (hand.palmSpan * Math.max(width, height)),
        side: hand.sideScore >= 0.8 ? hand.side : null,
      }]
    })

    const matches = candidates.flatMap((next, index) => this.previous.map(old => ({
      old, index,
      cost: distance(next.hand.palm, old.palm) + (next.side && old.side && next.side !== old.side ? 0.26 : 0),
    }))).sort((a, b) => a.cost - b.cost)
    const paired = new Map<number, TrackedHand>()
    const used = new Set<number>()
    for (const match of matches) {
      if (match.cost > 0.36 || paired.has(match.index) || used.has(match.old.id)) continue
      paired.set(match.index, match.old)
      used.add(match.old.id)
    }

    this.previous = candidates.map((candidate, index) => {
      const old = paired.get(index)
      const pinched = candidate.ratio <= (old?.pinched ? PINCH_OPEN : PINCH_CLOSE)
      const raw = mirrored(pinched ? midpoint(candidate.thumb, candidate.index) : candidate.index, image)
      const point = old && pinched === old.pinched
        ? { x: old.point.x * 0.26 + raw.x * 0.74, y: old.point.y * 0.26 + raw.y * 0.74 }
        : raw
      return {
        id: old?.id ?? this.nextId++,
        pinched,
        point,
        joints: candidate.hand.landmarks?.map(joint => mirrored(joint, image)) ?? [],
        palm: candidate.hand.palm,
        side: candidate.side,
      }
    })
    return this.previous
  }
}

type Gesture =
  | { kind: 'vertex'; id: number; index: number; offset: Point }
  | { kind: 'rotate'; id: number; point: Point }
  | { kind: 'color'; id: number }
  | { kind: 'pair'; first: Grip; second: Grip }

export class SculptInteraction {
  private gesture: Gesture | null = null
  private readonly model: SolidModel

  constructor(model: SolidModel) { this.model = model }

  get mode() { return this.gesture?.kind ?? null }
  get grabbed() { return this.gesture?.kind === 'vertex' ? this.gesture.index : null }

  clear() { this.gesture = null }

  update(grips: readonly Grip[], size: Size, wheel: ColorWheel) {
    const first = grips[0]
    if (!first) {
      this.clear()
      return
    }
    const current = this.gesture
    if (current?.kind === 'color') {
      const colorGrip = grips.find(grip => grip.id === current.id)
      if (colorGrip) {
        this.color(colorGrip.point, wheel)
        return
      }
    }

    const second = grips[1]
    if (second) {
      this.rotatePair(first, second, size)
      return
    }

    if (!current || current.kind === 'pair' || current.id !== first.id) {
      this.grab(first, size, wheel, current?.kind === 'pair')
      return
    }
    if (current.kind === 'vertex') {
      const edge = 10
      this.model.dragVertex(current.index, {
        x: Math.min(size.width - edge, Math.max(edge, first.point.x + current.offset.x)),
        y: Math.min(size.height - edge, Math.max(edge, first.point.y + current.offset.y)),
      }, size)
    } else if (current.kind === 'rotate') {
      this.rotateBy(current.point, first.point, size)
      this.gesture = { ...current, point: first.point }
    }
  }

  private grab(grip: Grip, size: Size, wheel: ColorWheel, afterPair: boolean) {
    if (!afterPair && distance(grip.point, wheel.center) <= wheel.radius) {
      this.gesture = { kind: 'color', id: grip.id }
      this.color(grip.point, wheel)
      return
    }
    const index = afterPair ? null : this.model.hitVertex(grip.point, size)
    const vertex = index === null ? undefined : this.model.project(size)[index]
    if (vertex && index !== null) {
      this.gesture = {
        kind: 'vertex', id: grip.id, index,
        offset: { x: vertex.x - grip.point.x, y: vertex.y - grip.point.y },
      }
    } else {
      this.gesture = { kind: 'rotate', id: grip.id, point: grip.point }
    }
  }

  private rotatePair(a: Grip, b: Grip, size: Size) {
    const [first, second] = a.id < b.id ? [a, b] : [b, a]
    const before = this.gesture
    if (before?.kind === 'pair' && first.id === before.first.id && second.id === before.second.id) {
      const from = midpoint(before.first.point, before.second.point)
      const to = midpoint(first.point, second.point)
      const oldDistance = distance(before.first.point, before.second.point)
      const newDistance = distance(first.point, second.point)
      if (oldDistance > 24 && newDistance > 24) {
        const fromAngle = Math.atan2(before.second.point.y - before.first.point.y, before.second.point.x - before.first.point.x)
        const toAngle = Math.atan2(second.point.y - first.point.y, second.point.x - first.point.x)
        const angle = toAngle - fromAngle
        const roll = -Math.atan2(Math.sin(angle), Math.cos(angle))
        this.rotateBy(from, to, size, roll)
        this.model.magnify(Math.min(1.22, Math.max(0.82, newDistance / oldDistance)))
      }
    }
    this.gesture = { kind: 'pair', first, second }
  }

  private rotateBy(from: Point, to: Point, size: Size, roll = 0) {
    const scale = 4.2 / Math.min(size.width, size.height)
    this.model.rotate((to.x - from.x) * scale, (to.y - from.y) * scale, roll)
  }

  private color(point: Point, wheel: ColorWheel) {
    if (distance(point, wheel.center) < 4) return
    const angle = Math.atan2(point.x - wheel.center.x, wheel.center.y - point.y)
    this.model.hue = (angle * 180 / Math.PI + 360) % 360
  }
}
