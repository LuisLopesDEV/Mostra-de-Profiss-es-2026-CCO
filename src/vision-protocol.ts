import type { Point, Size } from './types.js'

export type Delegate = 'CPU' | 'GPU'
export type HandSide = 'Left' | 'Right'
export type VisionMode = 'search' | 'track'
export type VisionDetail = 'blade' | 'landmarks'

export type HandObservation = {
  tip: Point
  palm: Point
  palmSpan: number
  indexExtended: boolean
  side: HandSide | null
  sideScore: number
  landmarks?: Point[]
  worldLandmarks?: (Point & { z: number })[]
}

export type LightRegion = { center: Point; span: number }

export type Detection = {
  hands: HandObservation[]
  size: Size
  inferenceMs: number
  mode: VisionMode
}

export type VisionRequest =
  | { type: 'init'; assets: string; delegate: Delegate; mode: VisionMode; detail: VisionDetail }
  | { type: 'frame'; image: ImageBitmap; time: number; region: LightRegion | null }

export type VisionResponse =
  | { type: 'ready' }
  | { type: 'frame'; detection: Detection }
  | { type: 'error'; message: string }
