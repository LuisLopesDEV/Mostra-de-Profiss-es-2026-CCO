import type { HandCursor } from '../poligonos/gestures.js'
import type { Point } from '../types.js'

const SNAP_COOLDOWN = 420
const SNAP_RELEASE_WINDOW = 520
const MAX_SAMPLE_GAP = 250
export const POSE_GAP_MS = 350
const POSE_CONFIRM_MS = 125
const SNAP_CONFIRM_MS = 50
const POINT_GRACE_MS = 130
const SWEEP_WINDOW_MS = 750
const SWEEP_IDLE_MS = 190

type Palm = { center: Point; wrist: Point; span: number }
type Finger = { reach: number; forward: number; extension: number; straightness: number }
type HandPose = 'point' | 'palm' | 'pinch' | 'snap' | 'fist'
export type ReadyPose = HandPose | 'fist-ready'

type HandShape = {
  id: number
  palm: Palm
  pose: HandPose | null
  thumbIndexGap: number
  thumbMiddleGap: number
}

const distance = (a: Point, b: Point) => Math.hypot(a.x - b.x, a.y - b.y)

function palmOf(joints: readonly Point[]): Palm | null {
  const wrist = joints[0]
  const index = joints[5]
  const middle = joints[9]
  const little = joints[17]
  if (!wrist || !index || !middle || !little) return null
  const span = distance(wrist, middle)
  if (span < 10) return null
  return {
    center: { x: (wrist.x + index.x + middle.x + little.x) / 4, y: (wrist.y + index.y + middle.y + little.y) / 4 },
    wrist,
    span,
  }
}

function fingerOf(joints: readonly Point[], baseIndex: number, span: number): Finger | null {
  const wrist = joints[0]
  const base = joints[baseIndex]
  const first = joints[baseIndex + 1]
  const second = joints[baseIndex + 2]
  const tip = joints[baseIndex + 3]
  if (!wrist || !base || !first || !second || !tip) return null
  const length = distance(base, first) + distance(first, second) + distance(second, tip)
  if (length === 0) return null
  const reach = distance(base, tip)
  const tipFromWrist = distance(tip, wrist)
  return {
    reach: reach / span,
    forward: (tipFromWrist - distance(base, wrist)) / span,
    extension: (tipFromWrist - distance(first, wrist)) / span,
    straightness: reach / length,
  }
}

function extended(finger: Finger) {
  return finger.reach >= 0.29 && finger.extension >= 0.12 && finger.straightness >= 0.80
}

function tucked(finger: Finger) {
  return finger.forward <= 0.25 && (finger.reach <= 0.37 || finger.straightness < 0.74)
}

function recognizePose(hand: HandCursor, span: number, thumbIndexGap: number, thumbMiddleGap: number): HandPose | null {
  const [index, middle, ring, little] = [5, 9, 13, 17].map(base => fingerOf(hand.joints, base, span))
  if (!index || !middle || !ring || !little) return null
  const indexUp = extended(index) || (hand.indexExtended && index.reach >= 0.25 && index.forward >= 0.14 && index.straightness >= 0.68)
  const otherFingersUp = [middle, ring, little].filter(extended).length
  const indexContact = hand.pinched && thumbIndexGap <= 0.24 && thumbIndexGap < thumbMiddleGap * 0.75
  // O dedo médio fica junto da palma ao apontar. No preparo do estalo, ele precisa alcançar o polegar à frente da palma.
  const snapContact = thumbMiddleGap <= 0.34 && thumbIndexGap >= 0.46 && middle.forward >= 0.33 && middle.reach >= 0.34
  const indexOnly = indexUp && otherFingersUp === 0 && !indexContact
  if (indexOnly && middle.forward < 0.40) return 'point'
  if (snapContact) return 'snap'
  if (indexOnly) return 'point'
  if (!indexUp && otherFingersUp === 0 && tucked(index) && tucked(middle) && (tucked(ring) || tucked(little))) return 'fist'
  if (hand.pinched) return 'pinch'
  if (otherFingersUp + Number(indexUp) >= 3) return 'palm'
  return null
}

export function readHand(hand: HandCursor): HandShape | null {
  const palm = palmOf(hand.joints)
  const thumb = hand.joints[4]
  const index = hand.joints[8]
  const middle = hand.joints[12]
  if (!palm || !thumb || !index || !middle) return null
  const thumbIndexGap = distance(thumb, index) / palm.span
  const thumbMiddleGap = distance(thumb, middle) / palm.span
  const pose = recognizePose(hand, palm.span, thumbIndexGap, thumbMiddleGap)
  return { id: hand.id, palm, pose, thumbIndexGap, thumbMiddleGap }
}

type SeenPose = { pose: HandPose | null; start: number; last: number; pointedAt: number; confirmedFist: boolean }

export class PoseConfirmation {
  private seen = new Map<number, SeenPose>()

  clear() { this.seen.clear() }

  update(hands: readonly HandShape[], time: number) {
    const next = new Map<number, SeenPose>()
    const ready = new Map<number, ReadyPose>()
    for (const { id, pose } of hands) {
      const seen = this.seen.get(id)
      const last = seen && time - seen.last <= POSE_GAP_MS ? seen : undefined
      const start = last?.pose === pose ? last.start : time
      let pointedAt = last?.pointedAt ?? -Infinity
      const heldPoint = time - pointedAt <= POINT_GRACE_MS
      let confirmedFist = false
      if (pose === 'snap') {
        const confirmMs = start - pointedAt <= POINT_GRACE_MS ? POINT_GRACE_MS : SNAP_CONFIRM_MS
        if (time - start >= confirmMs) ready.set(id, 'snap')
      } else if (pose && time - start >= POSE_CONFIRM_MS) {
        ready.set(id, pose === 'fist' && !last?.confirmedFist ? 'fist-ready' : pose)
        confirmedFist = pose === 'fist'
        pointedAt = pose === 'point' ? time : -Infinity
      }
      if (!ready.has(id) && heldPoint) {
        ready.set(id, 'point')
        if (pose === 'point') pointedAt = time
      }
      next.set(id, { pose, start, last: time, pointedAt, confirmedFist })
    }
    this.seen = next
    return ready
  }
}

export class VisibleSnap {
  private contact: { id: number; last: number; seen: number; center: Point } | null = null
  private lastSnap = -Infinity

  get ready() { return this.contact !== null }

  clear() { this.contact = null }

  update(hand: HandShape | undefined, pose: ReadyPose | undefined, time: number) {
    if (!hand || hand.pose === 'pinch' || hand.pose === 'fist' || time - this.lastSnap < SNAP_COOLDOWN) {
      this.clear()
      return false
    }
    const { palm, thumbIndexGap, thumbMiddleGap } = hand
    const previous = this.contact
    const continuous = previous && previous.id === hand.id && time - previous.seen <= MAX_SAMPLE_GAP
    if (hand.pose === 'snap') {
      this.contact = pose === 'snap' ? { id: hand.id, last: time, seen: time, center: palm.center } : null
      return false
    }
    if (thumbMiddleGap < 0.65 && continuous && time - previous.last <= SNAP_RELEASE_WINDOW) {
      previous.seen = time
      return false
    }

    const snapped = Boolean(continuous && time - previous.last <= SNAP_RELEASE_WINDOW &&
      thumbMiddleGap >= 0.65 && thumbIndexGap >= 0.42 && distance(previous.center, palm.center) < palm.span * 0.8)
    this.clear()
    if (snapped) this.lastSnap = time
    return snapped
  }
}

type PalmSample = { id: number; palm: Palm; time: number }
type Sweep = { start: PalmSample; direction: 1 | -1; samples: number; progressedAt: number; fired: boolean }

export class OrbitSweep {
  private previous: PalmSample | null = null
  private sweep: Sweep | null = null

  get active() { return this.sweep?.fired ?? false }

  clear() {
    this.previous = null
    this.sweep = null
  }

  update(hand: HandShape | undefined, time: number, cameraWidth: number): 1 | -1 | null {
    if (!hand || hand.pose !== 'palm') {
      this.clear()
      return null
    }
    const { palm } = hand
    const previous = this.previous
    this.previous = { id: hand.id, palm, time }
    const elapsed = time - (previous?.time ?? time)
    const jump = Math.max(palm.span * 0.9, cameraWidth * (0.035 + elapsed / 2200))
    if (!previous || previous.id !== hand.id || elapsed <= 0 || elapsed > MAX_SAMPLE_GAP ||
        distance(previous.palm.center, palm.center) > jump) {
      this.sweep = null
      return null
    }

    const dx = palm.center.x - previous.palm.center.x
    const dy = palm.center.y - previous.palm.center.y
    if (this.sweep && time - this.sweep.progressedAt > SWEEP_IDLE_MS) this.sweep = null
    if (Math.abs(dx) < Math.max(palm.span * 0.04, cameraWidth * 0.0035) || Math.abs(dx) < Math.abs(dy) * 1.45) return null
    const direction = dx > 0 ? 1 : -1
    const sweep = this.sweep
    if (sweep?.fired && sweep.direction === direction) {
      sweep.progressedAt = time
      return null
    }

    if (!sweep || sweep.direction !== direction || time - sweep.start.time > SWEEP_WINDOW_MS) {
      this.sweep = { start: previous, direction, samples: 1, progressedAt: time, fired: false }
      return null
    }

    sweep.samples++
    sweep.progressedAt = time
    const start = sweep.start.palm
    const travel = (palm.center.x - start.center.x) * direction
    const rise = Math.abs(palm.center.y - start.center.y)
    const minimum = Math.max((start.span + palm.span) * 0.575, cameraWidth * 0.095)
    // O punho precisa acompanhar o centro da palma para excluir uma rotação no lugar.
    const wristTravel = (palm.wrist.x - start.wrist.x) * direction
    if (sweep.samples < 3 || time - sweep.start.time < 110 || travel < minimum || wristTravel < minimum * 0.7 || rise > travel * 0.45) return null
    sweep.fired = true
    return direction
  }
}
