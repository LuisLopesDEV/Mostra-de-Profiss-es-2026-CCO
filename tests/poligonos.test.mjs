import assert from 'node:assert/strict'
import test from 'node:test'
import { fitVideo, PinchTracker, SculptInteraction } from '../.test-build/poligonos/gestures.js'
import { SolidModel } from '../.test-build/poligonos/solid.js'

const size = { width: 900, height: 500 }
const wheel = { center: { x: 852, y: 44 }, radius: 30 }

function handAt(x, ratio, side) {
  const palmSpan = 0.16
  const delta = ratio * palmSpan / 2
  const landmarks = Array.from({ length: 21 }, () => ({ x, y: 0.5 }))
  landmarks[4] = { x: x - delta, y: 0.5 }
  landmarks[8] = { x: x + delta, y: 0.5 }
  return { palm: { x, y: 0.36 }, palmSpan, landmarks, side, sideScore: 0.99 }
}

test('a pinça mantém a mão correta entre quadros e só solta acima do limiar de abertura', () => {
  const tracker = new PinchTracker()
  const camera = { width: 800, height: 600 }
  const image = fitVideo(camera, size)
  assert.ok(image.x > 0)
  assert.equal(image.height, size.height)
  const left = handAt(0.25, 0.20, 'Left')
  const right = handAt(0.72, 0.55, 'Right')
  const frame = hands => ({ hands, size: camera })
  const [first, second] = tracker.update(frame([left, right]), image)
  assert.equal(first.pinched, true)
  assert.equal(second.pinched, false)
  assert.ok(first.point.x > second.point.x)

  const [sameRight, sameLeft] = tracker.update(frame([right, handAt(0.24, 0.36, 'Left')]), image)
  assert.equal(sameRight.id, second.id)
  assert.equal(sameLeft.id, first.id)
  assert.equal(sameLeft.pinched, true)
  const [opened] = tracker.update(frame([handAt(0.24, 0.48, 'Left')]), image)
  assert.equal(opened.id, first.id)
  assert.equal(opened.pinched, false)
})

test('arrastar um vértice deforma o sólido e mantém sua profundidade', () => {
  const model = new SolidModel()
  const control = new SculptInteraction(model)
  const before = model.project(size)
  const point = before[1]
  const target = { x: point.x + 36, y: point.y - 18 }
  control.update([{ id: 3, point }], size, wheel)
  assert.equal(control.grabbed, 1)
  control.update([{ id: 3, point: target }], size, wheel)
  const after = model.project(size)
  assert.ok(Math.abs(after[1].x - target.x) < 0.00001)
  assert.ok(Math.abs(after[1].y - target.y) < 0.00001)
  assert.ok(Math.abs(after[1].depth - point.depth) < 0.00001)
  assert.deepEqual(after[0], before[0])
  control.update([], size, wheel)
  assert.equal(control.grabbed, null)
})

test('duas pinças giram e ampliam a forma sem trocar os dedos ao inverter a ordem de detecção', () => {
  const model = new SolidModel()
  const control = new SculptInteraction(model)
  const before = model.project(size)
  const left = { id: 4, point: { x: 310, y: 240 } }
  const right = { id: 6, point: { x: 590, y: 240 } }
  control.update([left, right], size, wheel)
  control.update([right, left], size, wheel)
  assert.deepEqual(model.project(size), before)
  control.update([
    { ...right, point: { x: 655, y: 300 } },
    { ...left, point: { x: 275, y: 205 } },
  ], size, wheel)
  assert.equal(control.mode, 'pair')
  assert.notDeepEqual(model.project(size), before)
  assert.ok(model.project(size).some((point, i) => Math.abs(point.depth - before[i].depth) > 0.01))
})

test('escolher uma cor na roda mantém a posição dos vértices', () => {
  const model = new SolidModel()
  const control = new SculptInteraction(model)
  const before = model.project(size)
  control.update([{ id: -1, point: { x: wheel.center.x + 24, y: wheel.center.y } }], size, wheel)
  assert.equal(control.mode, 'color')
  assert.equal(model.hue, 90)
  assert.deepEqual(model.project(size), before)
})
