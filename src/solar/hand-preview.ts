import { fitVideo } from '../poligonos/gestures.js'
import type { HandCursor } from '../poligonos/gestures.js'
import type { ReadyPose } from './hand-actions.js'

const FINGERS = [[0, 1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16], [17, 18, 19, 20], [0, 5, 9, 13, 17, 0]]

const FIST_POINTS = [8, 12, 16, 20]
const READY_POINTS = { point: [8], palm: [4, 8, 12, 16, 20], pinch: [4, 8], snap: [4, 12], 'fist-ready': FIST_POINTS, fist: FIST_POINTS }

export function drawHandPreview(canvas: HTMLCanvasElement, video: HTMLVideoElement, hands: readonly HandCursor[], ready: ReadonlyMap<number, ReadyPose>) {
  const { clientWidth: width, clientHeight: height } = canvas
  if (!width || !height || !video.videoWidth || !video.videoHeight) return
  const ratio = Math.min(2, devicePixelRatio || 1)
  const pixelsWide = Math.round(width * ratio)
  const pixelsHigh = Math.round(height * ratio)
  if (canvas.width !== pixelsWide) canvas.width = pixelsWide
  if (canvas.height !== pixelsHigh) canvas.height = pixelsHigh
  const ctx = canvas.getContext('2d')
  if (!ctx) return
  ctx.setTransform(pixelsWide / width, 0, 0, pixelsHigh / height, 0, 0)
  ctx.clearRect(0, 0, width, height)
  const image = fitVideo({ width: video.videoWidth, height: video.videoHeight }, { width, height })
  const colors = ['#7ce7ed', '#ff99ba']
  for (const [index, hand] of hands.entries()) {
    const points = hand.joints.map(p => ({ x: image.x + p.x * image.width / video.videoWidth, y: image.y + p.y * image.height / video.videoHeight }))
    const color = colors[index] ?? '#ff99ba'
    const pose = ready.get(hand.id)
    const tips = pose ? READY_POINTS[pose] : []
    ctx.strokeStyle = color
    ctx.lineWidth = 1.5
    ctx.beginPath()
    for (const chain of FINGERS) {
      for (const [i, joint] of chain.entries()) {
        const point = points[joint]
        if (!point) continue
        if (i === 0) ctx.moveTo(point.x, point.y)
        else ctx.lineTo(point.x, point.y)
      }
    }
    ctx.stroke()
    for (const [i, point] of points.entries()) {
      const confirmed = tips.includes(i)
      ctx.fillStyle = confirmed ? '#ffe45c' : color
      ctx.strokeStyle = '#172239'
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.arc(point.x, point.y, confirmed ? 4.5 : 2.5, 0, Math.PI * 2)
      ctx.fill()
      ctx.stroke()
    }
  }
}
