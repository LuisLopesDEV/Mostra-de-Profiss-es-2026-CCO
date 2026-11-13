import {
  AmbientLight, BufferGeometry, CanvasTexture, DoubleSide, Group, LineBasicMaterial, LineLoop, Mesh,
  MeshBasicMaterial, MeshLambertMaterial, PerspectiveCamera, PointLight, Points, PointsMaterial,
  RingGeometry, Scene, SphereGeometry, Sprite, SpriteMaterial, SRGBColorSpace, TextureLoader, Vector3, WebGLRenderer,
} from 'three'
import type { Point, Size } from '../types.js'
import { GaguinhoGlobe } from './gaguinho-globe.js'
import { PLANETS, SECRET_PLANET, SOLAR_BODIES } from './planets.js'
import type { Body, BodyId } from './planets.js'

const TAU = Math.PI * 2
const DEFAULT_YAW = 0.13
const DEFAULT_ELEVATION = 0.55
const OVERVIEW_ZOOM = 0.56
const GESTURE_SPIN_SPEED = 0.85
const GESTURE_ORBIT_SPEED = 0.52
const SECRET_SPIN_SPEED = 0.23
const ORBITS = SOLAR_BODIES.filter(body => body.orbit > 0).map(body => Array.from({ length: 97 }, (_, i) => {
  const angle = i * TAU / 96
  return new Vector3(Math.cos(angle) * body.orbit, 0, Math.sin(angle) * body.orbit)
}))

const texturePath = (file: string) => new URL('solar/' + file + '.webp', document.baseURI).href

type SceneBody = {
  body: Body; index: number; position: Vector3; anchor: Group; globe?: Mesh
  orbitAngle: number; spin: number; orbitSpeed: number; spinSpeed: number
}
type ScreenBody = Point & { body: Body; radius: number; depth: number; spin: number }

function canvasElement() {
  const canvas = document.createElement('canvas')
  canvas.className = 'solar-canvas'
  canvas.setAttribute('aria-hidden', 'true')
  return canvas
}

function bodyGlow(radius: number, pink: boolean) {
  const canvas = document.createElement('canvas')
  canvas.width = canvas.height = 128
  const ctx = canvas.getContext('2d')
  if (!ctx) return null
  const glow = ctx.createRadialGradient(64, 64, 14, 64, 64, 64)
  glow.addColorStop(0, pink ? '#ffd0e377' : '#ffce774d')
  glow.addColorStop(0.45, pink ? '#ff76ac4d' : '#ff9f293e')
  glow.addColorStop(0.72, pink ? '#ff4c9419' : '#ff6c1817')
  glow.addColorStop(1, pink ? '#ff4c9400' : '#ff6c1800')
  ctx.fillStyle = glow
  ctx.fillRect(0, 0, 128, 128)
  const texture = new CanvasTexture(canvas)
  texture.colorSpace = SRGBColorSpace
  const sprite = new Sprite(new SpriteMaterial({ map: texture, depthWrite: false, toneMapped: false }))
  sprite.scale.setScalar(radius * (pink ? 3.3 : 5.3))
  return sprite
}

function saturnRings(radius: number, loader: TextureLoader) {
  const inner = radius * 1.22
  const outer = radius * 2.33
  const geometry = new RingGeometry(inner, outer, 96)
  const { position, uv } = geometry.attributes
  if (position && uv) {
    for (let i = 0; i < position.count; i++) {
      const distance = Math.hypot(position.getX(i), position.getY(i))
      uv.setXY(i, (distance - inner) / (outer - inner), 0.5)
    }
  }
  const material = new MeshBasicMaterial({ color: '#c3ad93', transparent: true, opacity: 0.83, depthWrite: false, side: DoubleSide })
  loader.load(texturePath('saturn_ring_alpha'), texture => {
    texture.colorSpace = SRGBColorSpace
    material.map = texture
    material.color.set('#fff3df')
    material.needsUpdate = true
  }, undefined, () => { /* A cor do material cobre a ausência da textura. */ })
  const rings = new Mesh(geometry, material)
  rings.rotation.x = -Math.PI / 2
  return rings
}

export class SolarScene {
  private readonly world = new Scene()
  private readonly camera = new PerspectiveCamera(43, 1, 0.08, 390)
  private readonly renderer: WebGLRenderer | null
  private readonly context: CanvasRenderingContext2D | null
  private readonly canvas: HTMLCanvasElement
  private readonly bodies: SceneBody[] = SOLAR_BODIES.map((body, index) => ({
    body, index, position: new Vector3(), anchor: new Group(), orbitAngle: body.phase, spin: body.phase,
    orbitSpeed: 0, spinSpeed: 0,
  }))
  private readonly orbitLines: LineLoop[] = []
  private belt: Points | null = null
  private readonly target = new Vector3()
  private readonly projected = new Vector3()
  private readonly view = new Vector3()
  private screenBodies: ScreenBody[] = []
  private size: Size = { width: 1, height: 1 }
  private zoomLevel = 1
  private yaw = DEFAULT_YAW
  private elevation = DEFAULT_ELEVATION
  private selected: BodyId | null = null
  private framing: BodyId | null = null
  private visibleCount: number = PLANETS.length
  private secretVisible = false
  private fallbackGlobe: GaguinhoGlobe | null = null
  private revealAt = -Infinity
  private distance = 0
  private pixelRatio = 1

  constructor(stage: HTMLElement) {
    let canvas = canvasElement()
    let renderer: WebGLRenderer | null = null
    let webgl: WebGL2RenderingContext | null = null
    try {
      webgl = canvas.getContext('webgl2', { alpha: true, antialias: true })
      if (webgl) {
        renderer = new WebGLRenderer({ canvas, context: webgl })
        renderer.setClearColor(0x000000, 0)
      }
    } catch {
      renderer = null
    }
    if (!renderer && webgl) canvas = canvasElement()
    this.renderer = renderer
    this.canvas = canvas
    this.context = renderer ? null : canvas.getContext('2d')
    stage.prepend(canvas)
    if (renderer) this.prepareWorld()
  }

  get available() { return this.renderer !== null || this.context !== null }
  get fallback() { return this.renderer === null }
  get atWideView() { return this.framing === null && this.zoomLevel <= OVERVIEW_ZOOM + 0.045 }

  showSecret(visible: boolean) {
    this.secretVisible = visible
    if (visible && this.context) {
      this.fallbackGlobe ??= new GaguinhoGlobe(texturePath(SECRET_PLANET.texture), SECRET_PLANET.tilt * Math.PI / 180)
    }
    const item = this.bodies.at(-1)
    if (item) {
      item.anchor.visible = visible
      if (!visible) {
        item.orbitAngle = item.body.phase
        item.spinSpeed = item.orbitSpeed = 0
      }
    }
    if (!visible) this.screenBodies = this.screenBodies.filter(({ body }) => body.id !== 'gaguinho')
  }

  resize(size: Size) {
    this.size = size
    this.camera.aspect = size.width / size.height
    this.camera.updateProjectionMatrix()
    this.pixelRatio = Math.min(1.5, devicePixelRatio || 1)
    if (this.renderer) {
      this.renderer.setPixelRatio(this.pixelRatio)
      this.renderer.setSize(size.width, size.height, false)
    } else {
      this.canvas.width = Math.round(size.width * this.pixelRatio)
      this.canvas.height = Math.round(size.height * this.pixelRatio)
    }
  }

  focus(id: BodyId, closeUp = true) {
    const framing = closeUp ? id : null
    if (id === this.selected && framing === this.framing) return
    this.selected = id
    this.framing = framing
    this.zoomLevel = 1
    if (framing === SECRET_PLANET.id) {
      const world = this.bodies.at(-1)
      if (world) world.spin = this.yaw - Math.PI / 2
      this.elevation = 0.23
    }
  }

  resetView() {
    this.selected = null
    this.framing = null
    this.yaw = DEFAULT_YAW
    this.elevation = DEFAULT_ELEVATION
    this.zoomLevel = 1
  }

  showBodies(count: number, reset = false) {
    this.visibleCount = count
    this.revealAt = count > 0 ? performance.now() : -Infinity
    for (const item of this.bodies) {
      item.anchor.visible = item.body.id === 'gaguinho' ? this.secretVisible : item.index < count
      if (reset) {
        item.orbitAngle = item.body.phase
        item.spin = item.body.phase
        item.orbitSpeed = 0
        item.spinSpeed = 0
      }
    }
    for (const [i, line] of this.orbitLines.entries()) line.visible = this.orbitVisible(i)
    if (this.belt) this.belt.visible = count >= 6
  }

  spinBody(id: BodyId) {
    const item = this.bodies.find(entry => entry.body.id === id)
    if (!item) return
    this.focus(id)
    item.spinSpeed = GESTURE_SPIN_SPEED
  }

  moveInOrbit(id: BodyId, direction: number) {
    const item = this.bodies.find(entry => entry.body.id === id)
    if (!item?.body.orbit) return
    if (this.framing) {
      this.framing = null
      this.zoomLevel = 1
      this.yaw = DEFAULT_YAW
      this.elevation = DEFAULT_ELEVATION
    }
    item.orbitSpeed = direction * GESTURE_ORBIT_SPEED
  }

  get movingByGesture() { return this.bodies.some(item => item.orbitSpeed || item.spinSpeed) }

  pauseGestures() {
    for (const item of this.bodies) {
      item.orbitSpeed = 0
      item.spinSpeed = 0
    }
  }

  rotate(dx: number, dy: number) {
    const scale = 3.6 / Math.min(this.size.width, this.size.height)
    this.yaw -= dx * scale
    this.elevation = Math.max(0.12, Math.min(1.53, this.elevation + dy * scale))
  }

  zoom(factor: number) {
    const max = this.framing ? 1.85 : 3.25
    const next = this.zoomLevel * factor
    if (this.framing && factor < 1 && next <= 0.65) return true
    this.zoomLevel = Math.min(max, Math.max(OVERVIEW_ZOOM, next))
    return false
  }

  pick(point: Point, preferred: BodyId | null = null) {
    let best: ScreenBody | undefined
    let bestScore = Infinity
    for (const body of this.screenBodies) {
      const distance = Math.hypot(body.x - point.x, body.y - point.y)
      if (body.body.id === preferred && distance <= Math.max(27, body.radius + 11)) return preferred
      if (distance > Math.max(18, body.radius + 5)) continue
      const score = distance <= body.radius ? distance / body.radius : 1 + distance / 16
      if (score < bestScore || (score === bestScore && best && body.depth < best.depth)) {
        best = body
        bestScore = score
      }
    }
    return best?.body.id ?? null
  }

  screenPosition(id: BodyId) {
    return this.screenBodies.find(item => item.body.id === id)
  }

  draw(dt: number, playing: boolean, reducedMotion: boolean, held: BodyId | null = null) {
    const reveal = reducedMotion ? 1 : Math.min(1, (performance.now() - this.revealAt) / 380)
    const revealScale = 1 - 0.74 * (1 - reveal) ** 3
    for (const item of this.bodies) {
      const { body, position, anchor, globe, index } = item
      if (body.id === 'gaguinho' ? !this.secretVisible : index >= this.visibleCount) continue
      if (body.id !== held) item.orbitAngle += dt * (item.orbitSpeed || (playing ? body.speed : 0))
      const naturalSpin = body.id === SECRET_PLANET.id ? SECRET_SPIN_SPEED : 0.17 + body.speed * 0.54
      item.spin += dt * (item.spinSpeed || (playing ? naturalSpin : 0))
      const angle = item.orbitAngle
      position.set(Math.cos(angle) * body.orbit, 0, Math.sin(angle) * body.orbit)
      anchor.position.copy(position)
      anchor.scale.setScalar(index === this.visibleCount - 1 ? revealScale : 1)
      if (globe) globe.rotation.y = item.spin
    }

    const selected = this.bodies.find(item => item.body.id === this.framing)
    const secretOrbit = this.orbitLines.at(-1)
    if (secretOrbit) secretOrbit.visible = this.orbitVisible(this.orbitLines.length - 1)
    const target = selected?.position ?? this.view.set(0, 0, 0)
    const tangent = Math.tan(this.camera.fov * Math.PI / 360)
    const widthFactor = Math.min(1, this.camera.aspect)
    const distance = selected
      ? selected.body.radius * (selected.body.id === 'saturn' ? 2.9 : 1.7) / (tangent * widthFactor * this.zoomLevel)
      : Math.max(48, 60 / this.camera.aspect) / (tangent * this.zoomLevel)
    const ease = this.distance === 0 || reducedMotion ? 1 : 1 - Math.exp(-dt * 6)
    this.target.lerp(target, ease)
    this.distance += (distance - this.distance) * ease
    this.camera.position.set(
      Math.sin(this.yaw) * Math.cos(this.elevation),
      Math.sin(this.elevation),
      Math.cos(this.yaw) * Math.cos(this.elevation),
    ).multiplyScalar(this.distance).add(this.target)
    this.camera.lookAt(this.target)
    this.camera.updateMatrixWorld()

    const focal = this.size.height / (2 * tangent)
    this.screenBodies = this.bodies.flatMap(({ body, position, index, spin }) => {
      if (body.id === 'gaguinho' ? !this.secretVisible : index >= this.visibleCount) return []
      const depth = -this.view.copy(position).applyMatrix4(this.camera.matrixWorldInverse).z
      if (depth <= body.radius + this.camera.near) return []
      const point = this.project(position)
      return [{ ...point, body, radius: body.radius * focal / depth * (index === this.visibleCount - 1 ? revealScale : 1), depth, spin }]
    })

    if (this.renderer) this.renderer.render(this.world, this.camera)
    else this.drawFallback()
  }

  private project(position: Vector3): Point {
    this.projected.copy(position).project(this.camera)
    return { x: (this.projected.x + 1) * this.size.width / 2, y: (1 - this.projected.y) * this.size.height / 2 }
  }

  private orbitVisible(index: number) {
    return index + 1 === PLANETS.length
      ? this.secretVisible && this.framing !== SECRET_PLANET.id
      : index + 1 < this.visibleCount
  }

  private prepareWorld() {
    const loader = new TextureLoader()
    this.world.add(new AmbientLight('#bbc3da', 1.5), new PointLight('#fff1d9', 2.65, 0, 0))
    const sphere = new SphereGeometry(1, 48, 32)
    for (const item of this.bodies) {
      const { body, anchor } = item
      const isSun = body.id === 'sun'
      const secret = body.id === SECRET_PLANET.id
      const material = isSun ? new MeshBasicMaterial({ color: body.color }) : new MeshLambertMaterial({ color: body.color })
      if (body.texture) loader.load(texturePath(body.texture), texture => {
        texture.colorSpace = SRGBColorSpace
        material.map = texture
        material.color.set('#ffffff')
        // Uma luz suave da própria textura mantém o mapa legível mesmo no lado em sombra.
        if (secret && material instanceof MeshLambertMaterial) {
          material.emissiveMap = texture
          material.emissive.set('#fff1f6')
          material.emissiveIntensity = 0.56
        }
        material.needsUpdate = true
      }, undefined, () => { /* Os planetas continuam visíveis com a cor base. */ })
      const axis = new Group()
      axis.rotation.z = body.tilt * Math.PI / 180
      const globe = new Mesh(sphere, material)
      globe.scale.setScalar(body.radius)
      item.globe = globe
      axis.add(globe)
      anchor.add(axis)
      if (body.id === 'saturn') axis.add(saturnRings(body.radius, loader))
      if (secret) anchor.visible = false
      if (isSun || secret) {
        const glow = bodyGlow(body.radius, secret)
        if (glow) anchor.add(glow)
      }
      this.world.add(anchor)
    }

    const orbitMaterial = new LineBasicMaterial({ color: '#7d9fd3', transparent: true, opacity: 0.33 })
    for (const [index, orbit] of ORBITS.entries()) {
      const secret = index + 1 === PLANETS.length
      const material = secret ? new LineBasicMaterial({ color: '#ff83b6', transparent: true, opacity: 0.66 }) : orbitMaterial
      const line = new LineLoop(new BufferGeometry().setFromPoints(orbit), material)
      line.visible = !secret
      if (secret) line.renderOrder = -1
      this.orbitLines.push(line)
      this.world.add(line)
    }
    const asteroids = Array.from({ length: 360 }, (_, i) => {
      const angle = i * 2.39996
      const radius = 20.9 + Math.sin(i * 5.32) * 0.84 + Math.sin(i * 0.68) * 0.53
      return new Vector3(Math.cos(angle) * radius, Math.sin(i * 1.22) * 0.29, Math.sin(angle) * radius)
    })
    this.belt = new Points(new BufferGeometry().setFromPoints(asteroids), new PointsMaterial({
      color: '#a2b3d3', size: 0.11, transparent: true, opacity: 0.52, depthWrite: false,
    }))
    this.world.add(this.belt)
  }

  private drawFallback() {
    const ctx = this.context
    if (!ctx) return
    const { width, height } = this.size
    ctx.setTransform(this.pixelRatio, 0, 0, this.pixelRatio, 0, 0)
    ctx.clearRect(0, 0, width, height)
    ctx.strokeStyle = '#7d9fd351'
    ctx.lineWidth = 1
    for (const [index, orbit] of ORBITS.entries()) {
      if (!this.orbitVisible(index)) continue
      const secret = index + 1 === PLANETS.length
      ctx.strokeStyle = secret ? '#ff83b6a8' : '#7d9fd351'
      ctx.beginPath()
      let connected = false
      for (const position of orbit) {
        const point = this.project(position)
        if (this.projected.z >= 1 || this.projected.z < -1) {
          connected = false
          continue
        }
        if (!connected) ctx.moveTo(point.x, point.y)
        else ctx.lineTo(point.x, point.y)
        connected = true
      }
      ctx.stroke()
    }
    const visible = [...this.screenBodies].sort((a, b) => b.depth - a.depth)
    for (const { body, x, y, radius, spin } of visible) {
      const { id } = body
      if (x + radius * 3 < 0 || x - radius * 3 > width || y + radius < 0 || y - radius > height) continue
      if (id === SECRET_PLANET.id) {
        const glow = ctx.createRadialGradient(x, y, radius * 0.72, x, y, radius * 1.85)
        glow.addColorStop(0, '#ff76ac65')
        glow.addColorStop(1, '#ff4c9400')
        ctx.fillStyle = glow
        ctx.fillRect(x - radius * 1.85, y - radius * 1.85, radius * 3.7, radius * 3.7)
        if (this.fallbackGlobe?.draw(ctx, x, y, radius, this.camera.matrixWorld, spin)) continue
      }
      if (id === 'saturn') {
        ctx.strokeStyle = '#d8c4aeb0'
        ctx.lineWidth = Math.max(1, radius * 0.3)
        ctx.beginPath()
        ctx.ellipse(x, y, radius * 2.05, radius * 0.57, -0.26, 0, TAU)
        ctx.stroke()
      }
      if (id === 'sun') {
        ctx.shadowColor = '#ff963a9c'
        ctx.shadowBlur = Math.min(46, radius * 0.8)
      }
      const shading = ctx.createRadialGradient(x - radius * 0.33, y - radius * 0.33, 0, x, y, radius)
      shading.addColorStop(0, id === 'sun' ? '#fff4bd' : '#ece4db')
      shading.addColorStop(0.49, body.color)
      shading.addColorStop(1, id === 'sun' ? '#ec681e' : '#20233c')
      ctx.fillStyle = shading
      ctx.beginPath()
      ctx.arc(x, y, radius, 0, TAU)
      ctx.fill()
      ctx.shadowBlur = 0
      if (id !== SECRET_PLANET.id && id === this.selected && radius > 9) {
        ctx.fillStyle = '#fff7e3b8'
        ctx.beginPath()
        ctx.arc(x + Math.sin(spin) * radius * 0.65, y - radius * 0.16, radius * 0.08, 0, TAU)
        ctx.fill()
      }
    }
  }
}
