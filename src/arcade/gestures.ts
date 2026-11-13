import { unit } from '../hand-geometry.js'
import type { Point, Size } from '../types.js'

const TRACK_GAP_MS = 300
const READY_MS = 75
const CLOSE_MS = 50
const CLOSE_WINDOW_MS = 650

type TriggerPose = 'open' | 'closed' | 'transition'
type TriggerState = {
  id: number
  time: number
  openSince: number | null
  closedSince: number | null
  lastOpen: number
  ready: boolean
}

export function arenaAim(point: Point, source: Size, stage: Size): Point {
  return {
    x: unit((point.x / source.width - 0.13) / 0.74) * stage.width,
    y: unit((point.y / source.height - 0.15) / 0.70) * stage.height,
  }
}

export class FistTrigger {
  private state: TriggerState | null = null

  clear() { this.state = null }

  update(id: number, pose: TriggerPose, time: number) {
    let state = this.state
    if (!state || id !== state.id || time - state.time > TRACK_GAP_MS) {
      state = { id, time, openSince: null, closedSince: null, lastOpen: -Infinity, ready: false }
      this.state = state
    }
    state.time = time
    if (pose === 'open') {
      state.openSince ??= time
      state.lastOpen = time
      state.closedSince = null
      state.ready ||= time - state.openSince >= READY_MS
      return { ready: state.ready, fire: false }
    }

    state.openSince = null
    if (time - state.lastOpen > CLOSE_WINDOW_MS) state.ready = false
    if (!state.ready || pose !== 'closed') {
      state.closedSince = null
      return { ready: state.ready, fire: false }
    }

    // Confirma o punho em quadros consecutivos e exige reabrir a mão depois do tiro.
    state.closedSince ??= time
    const fire = time - state.closedSince >= CLOSE_MS
    if (fire) state.ready = false
    return { ready: state.ready, fire }
  }
}
