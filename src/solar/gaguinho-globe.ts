import { Matrix4 } from 'three'

const TAU = Math.PI * 2

export class GaguinhoGlobe {
  private readonly canvas = document.createElement('canvas')
  private readonly context = this.canvas.getContext('2d')
  private readonly view = new Matrix4()
  private readonly inverseTilt = new Matrix4()
  private source: ImageData | null = null
  private pixels: ImageData | null = null
  private lastFrame = ''

  constructor(url: string, tilt: number) {
    this.inverseTilt.makeRotationZ(-tilt)
    const image = new Image()
    image.onload = () => {
      const canvas = document.createElement('canvas')
      canvas.width = 768
      canvas.height = 384
      const ctx = canvas.getContext('2d', { willReadFrequently: true })
      if (!ctx) return
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
      this.source = ctx.getImageData(0, 0, canvas.width, canvas.height)
    }
    image.src = url
  }

  draw(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number, camera: Matrix4, spin: number) {
    if (!this.source || !this.context) return false
    const size = radius < 22 ? 48 : radius < 68 ? 112 : 224
    const cameraAxes = camera.elements.slice(0, 11).map(value => Math.round(value * 90))
    const frame = `${size}:${Math.round(spin * 90)}:${cameraAxes.join(',')}`
    if (frame !== this.lastFrame) {
      this.lastFrame = frame
      if (this.pixels?.width !== size) {
        this.canvas.width = this.canvas.height = size
        this.pixels = this.context.createImageData(size, size)
      }
      this.view.makeRotationY(-spin).multiply(this.inverseTilt).multiply(camera)
      projectMap(this.source, this.pixels, this.view)
      this.context.putImageData(this.pixels, 0, 0)
    }
    ctx.drawImage(this.canvas, x - radius, y - radius, 2 * radius, 2 * radius)
    return true
  }
}

function projectMap(source: ImageData, globe: ImageData, view: Matrix4) {
  const { width: size, data } = globe
  const matrix = view.elements
  for (let y = 0; y < size; y++) {
    const ny = 1 - (2 * y + 1) / size
    for (let x = 0; x < size; x++) {
      const nx = (2 * x + 1) / size - 1
      const depth = 1 - nx * nx - ny * ny
      if (depth <= 0) continue
      const nz = Math.sqrt(depth)
      const localX = matrix[0] * nx + matrix[4] * ny + matrix[8] * nz
      const localY = matrix[1] * nx + matrix[5] * ny + matrix[9] * nz
      const localZ = matrix[2] * nx + matrix[6] * ny + matrix[10] * nz
      const u = (Math.atan2(localZ, -localX) / TAU + 1) % 1
      const v = Math.acos(Math.max(-1, Math.min(1, localY))) / Math.PI
      const sourceX = Math.floor(u * source.width)
      const sourceY = Math.min(source.height - 1, Math.floor(v * source.height))
      const sample = (sourceY * source.width + sourceX) * 4
      const pixel = (y * size + x) * 4
      const shade = 0.66 + 0.34 * Math.max(0, -0.34 * nx + 0.45 * ny + 0.83 * nz)
      data[pixel] = (source.data[sample] ?? 0) * shade
      data[pixel + 1] = (source.data[sample + 1] ?? 0) * shade
      data[pixel + 2] = (source.data[sample + 2] ?? 0) * shade
      data[pixel + 3] = Math.min(255, depth * size * 125)
    }
  }
}
