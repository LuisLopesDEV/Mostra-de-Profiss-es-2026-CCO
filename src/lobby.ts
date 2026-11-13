import './style.css'
import './mostra.css'
import { SliceGame } from './game.js'
import { ArenaRenderer } from './render.js'
import { SolidModel, paintSolid } from './poligonos/solid.js'

const fruitCover = document.querySelector<HTMLCanvasElement>('#fruit-cover')
const fruitContext = fruitCover?.getContext('2d')
if (fruitCover && fruitContext) {
  const preview = document.createElement('canvas')
  new ArenaRenderer(preview).draw(new SliceGame(), 300, true, null)
  fruitContext.drawImage(preview, 585, 137, 695, 403, 0, 0, fruitCover.width, fruitCover.height)
}

const solidCover = document.querySelector<HTMLCanvasElement>('#solid-cover')
const solidContext = solidCover?.getContext('2d')
if (solidCover && solidContext) {
  const { width, height } = solidCover
  const glow = solidContext.createRadialGradient(width * 0.56, height * 0.45, 18, width * 0.56, height * 0.45, width * 0.61)
  glow.addColorStop(0, '#452773')
  glow.addColorStop(0.56, '#222145')
  glow.addColorStop(1, '#171a26')
  solidContext.fillStyle = glow
  solidContext.fillRect(0, 0, width, height)
  solidContext.strokeStyle = '#f8e7ff19'
  for (let x = 4; x < width; x += 30) {
    solidContext.beginPath()
    solidContext.moveTo(x, 0)
    solidContext.lineTo(x, height)
    solidContext.stroke()
  }
  for (let y = 4; y < height; y += 30) {
    solidContext.beginPath()
    solidContext.moveTo(0, y)
    solidContext.lineTo(width, y)
    solidContext.stroke()
  }

  const shape = new SolidModel()
  shape.rotate(0.84, 0.08, -0.16)
  shape.magnify(1.16)
  paintSolid(solidContext, shape, { width, height }, null, 1)
}
