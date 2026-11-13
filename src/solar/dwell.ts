export const HAND_DWELL_MS = 2000
const HAND_DWELL_GAP_MS = 350

export class DwellSelection<T> {
  private current: { target: T; hand: number; start: number; last: number; fired: boolean } | null = null

  clear() { this.current = null }

  update(target: T | null, hand: number, time: number) {
    if (target === null) {
      this.clear()
      return { progress: 0, activate: false }
    }
    const previous = this.current
    const state = previous?.target === target && previous.hand === hand && time - previous.last <= HAND_DWELL_GAP_MS
      ? previous : { target, hand, start: time, last: time, fired: false }
    state.last = time
    this.current = state
    const progress = Math.min(1, (time - state.start) / HAND_DWELL_MS)
    const activate = progress === 1 && !state.fired
    if (activate) state.fired = true
    return { progress, activate }
  }
}
