import type { Point, Size } from '../types.js'

type Vertex = Point & { z: number }
export type ProjectedVertex = Point & { depth: number }
type Shape = { label: string; vertices: readonly Vertex[]; faces: readonly (readonly number[])[] }

function vertex(x: number, y: number, z: number): Vertex {
  return { x, y, z }
}

export const SHAPES = {
  cube: {
    label: 'Cubo',
    vertices: [
      vertex(-1, 1, 1), vertex(1, 1, 1), vertex(1, -1, 1), vertex(-1, -1, 1),
      vertex(-1, 1, -1), vertex(1, 1, -1), vertex(1, -1, -1), vertex(-1, -1, -1),
    ],
    faces: [[0, 1, 2, 3], [4, 5, 6, 7], [0, 4, 7, 3], [1, 5, 6, 2], [0, 1, 5, 4], [3, 2, 6, 7]],
  },
  pyramid: {
    label: 'Pirâmide',
    vertices: [vertex(0, 1.4, 0), vertex(-1, -0.85, 1), vertex(1, -0.85, 1), vertex(1, -0.85, -1), vertex(-1, -0.85, -1)],
    faces: [[1, 2, 3, 4], [0, 1, 2], [0, 2, 3], [0, 3, 4], [0, 4, 1]],
  },
  octahedron: {
    label: 'Octaedro',
    vertices: [vertex(0, 1.45, 0), vertex(0, -1.45, 0), vertex(-1.35, 0, 0), vertex(0, 0, 1.35), vertex(1.35, 0, 0), vertex(0, 0, -1.35)],
    faces: [[0, 2, 3], [0, 3, 4], [0, 4, 5], [0, 5, 2], [1, 2, 3], [1, 3, 4], [1, 4, 5], [1, 5, 2]],
  },
} satisfies Record<string, Shape>

export type ShapeName = keyof typeof SHAPES
const CAMERA_DISTANCE = 5.4
const MAX_VERTEX_RADIUS = 3.1

function turnX({ x, y, z }: Vertex, angle: number): Vertex {
  const cos = Math.cos(angle)
  const sin = Math.sin(angle)
  return { x, y: y * cos - z * sin, z: y * sin + z * cos }
}

function turnY({ x, y, z }: Vertex, angle: number): Vertex {
  const cos = Math.cos(angle)
  const sin = Math.sin(angle)
  return { x: x * cos + z * sin, y, z: -x * sin + z * cos }
}

function turnZ({ x, y, z }: Vertex, angle: number): Vertex {
  const cos = Math.cos(angle)
  const sin = Math.sin(angle)
  return { x: x * cos - y * sin, y: x * sin + y * cos, z }
}

export class SolidModel {
  shape: ShapeName = 'cube'
  hue = 293
  private vertices: Vertex[] = SHAPES.cube.vertices.map(point => ({ ...point }))
  private yaw = -0.42
  private pitch = 0.28
  private roll = -0.08
  private zoom = 1

  get faces() { return SHAPES[this.shape].faces }

  reset(shape: ShapeName = this.shape) {
    this.shape = shape
    this.vertices = SHAPES[shape].vertices.map(point => ({ ...point }))
    this.yaw = -0.42
    this.pitch = 0.28
    this.roll = -0.08
    this.zoom = 1
  }

  rotate(dx: number, dy: number, roll = 0) {
    this.yaw += dx
    this.pitch += dy
    this.roll += roll
  }

  magnify(factor: number) {
    this.zoom = Math.max(0.6, Math.min(1.75, this.zoom * factor))
  }

  project(size: Size): ProjectedVertex[] {
    const focal = this.focal(size)
    return this.vertices.map(point => {
      const view = this.toView(point)
      const depth = CAMERA_DISTANCE - view.z
      return { x: size.width / 2 + view.x * focal / depth, y: size.height / 2 - view.y * focal / depth, depth }
    })
  }

  hitVertex(point: Point, size: Size): number | null {
    const radius = Math.max(22, Math.min(46, Math.min(size.width, size.height) * 0.075))
    let best: number | null = null
    let bestDistance = radius
    for (const [index, projected] of this.project(size).entries()) {
      const distance = Math.hypot(projected.x - point.x, projected.y - point.y)
      if (distance >= bestDistance) continue
      best = index
      bestDistance = distance
    }
    return best
  }

  dragVertex(index: number, point: Point, size: Size) {
    const vertex = this.vertices[index]
    if (!vertex) return
    const view = this.toView(vertex)
    const scale = (CAMERA_DISTANCE - view.z) / this.focal(size)
    // Mantém a profundidade do vértice e move o ponto no plano da tela.
    const moved = {
      x: (point.x - size.width / 2) * scale,
      y: (size.height / 2 - point.y) * scale,
      z: view.z,
    }
    const world = turnY(turnX(turnZ(moved, -this.roll), -this.pitch), -this.yaw)
    const radius = Math.hypot(world.x, world.y, world.z)
    const factor = radius > MAX_VERTEX_RADIUS ? MAX_VERTEX_RADIUS / radius : 1
    this.vertices[index] = { x: world.x * factor, y: world.y * factor, z: world.z * factor }
  }

  private toView(point: Vertex) {
    return turnZ(turnX(turnY(point, this.yaw), this.pitch), this.roll)
  }

  private focal(size: Size) {
    return Math.max(1, Math.min(size.width, size.height) * 1.1 * this.zoom)
  }
}

export function paintSolid(
  ctx: CanvasRenderingContext2D,
  model: SolidModel,
  size: Size,
  hovered: number | null = null,
  grabbed: number | null = null,
) {
  const points = model.project(size)
  const faces = model.faces.map((indices, index) => {
    const vertices = indices.flatMap(i => points[i] ? [points[i]] : [])
    return {
      vertices,
      index,
      depth: vertices.reduce((sum, point) => sum + point.depth, 0) / vertices.length,
    }
  }).sort((a, b) => b.depth - a.depth)

  ctx.save()
  ctx.lineJoin = 'round'
  for (const { vertices, index, depth } of faces) {
    if (!vertices[0]) continue
    ctx.beginPath()
    ctx.moveTo(vertices[0].x, vertices[0].y)
    for (const point of vertices.slice(1)) ctx.lineTo(point.x, point.y)
    ctx.closePath()
    const light = 45 + index * 3.8
    const alpha = depth < CAMERA_DISTANCE ? 0.57 : 0.22
    ctx.fillStyle = 'hsl(' + model.hue + ' 86% ' + light + '% / ' + alpha + ')'
    ctx.strokeStyle = 'hsl(' + model.hue + ' 92% 83% / 0.75)'
    ctx.lineWidth = 1.4
    ctx.fill()
    ctx.stroke()
  }

  const radius = Math.max(5, Math.min(10, Math.min(size.width, size.height) * 0.021))
  const vertices = points.map((point, index) => ({ point, index })).sort((a, b) => b.point.depth - a.point.depth)
  for (const { point, index } of vertices) {
    const selected = index === grabbed || index === hovered
    ctx.beginPath()
    ctx.arc(point.x, point.y, radius * (selected ? 1.38 : point.depth > CAMERA_DISTANCE ? 0.76 : 1), 0, Math.PI * 2)
    ctx.fillStyle = index === grabbed ? '#ff6599' : point.depth > CAMERA_DISTANCE ? '#ffb9d0b0' : '#ffc6d9'
    ctx.strokeStyle = selected ? '#fff' : '#291c43'
    ctx.lineWidth = selected ? 2 : 1
    ctx.fill()
    ctx.stroke()
  }
  ctx.restore()
}
