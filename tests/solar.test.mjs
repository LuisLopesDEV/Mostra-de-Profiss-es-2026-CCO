import assert from 'node:assert/strict'
import test from 'node:test'
import { SolarGestures } from '../.test-build/solar/navigation.js'
import { OrbitSweep, PoseConfirmation, VisibleSnap, readHand } from '../.test-build/solar/hand-actions.js'
import { DwellSelection } from '../.test-build/solar/dwell.js'
import { IndexAim } from '../.test-build/solar/index-aim.js'

const size = { width: 900, height: 480 }
const grip = (id, x, y = 240) => ({ id, point: { x, y } })

function setup() {
  const rotated = []
  const zoomed = []
  const gesture = new SolarGestures({
    rotate: (dx, dy) => rotated.push([dx, dy]),
    zoom: factor => zoomed.push(factor),
  })
  const update = grips => gesture.update(grips, size)
  return { update, rotated, zoomed }
}

test('a permanência seleciona após dois segundos, uma vez por alvo', () => {
  const dwell = new DwellSelection()
  for (let t = 0; t < 2000; t += 100) assert.equal(dwell.update('Saturno', 1, t).activate, false)
  assert.deepEqual(dwell.update('Saturno', 1, 2000), { progress: 1, activate: true })
  assert.equal(dwell.update('Saturno', 1, 2100).activate, false)
  assert.equal(dwell.update('Terra', 1, 2200).progress, 0)
  assert.equal(dwell.update('Terra', 2, 2300).progress, 0)
  assert.equal(dwell.update('Terra', 2, 2400).progress, 0.05)
  assert.equal(dwell.update('Terra', 2, 2900).progress, 0)
})

test('arrastar uma pinça gira a vista', () => {
  const { update, rotated } = setup()
  update([grip(1, 450)])
  update([grip(1, 474, 251)])
  update([])
  assert.deepEqual(rotated, [[24, 11]])
})

test('duas pinças controlam o zoom mesmo se a ordem das mãos mudar', () => {
  const { update, rotated, zoomed } = setup()
  update([grip(1, 450), grip(2, 550)])
  update([grip(2, 555), grip(1, 445)])
  update([grip(1, 450)])
  update([])
  assert.deepEqual(zoomed, [1.1])
  assert.deepEqual(rotated, [])
})

function hand({ id = 1, x = 300, y = 230, angle = 0, contact = false, pinched = false, pointing = false, fist = false } = {}) {
  const offsets = [
    [0, 0], [-17, -16], [-24, -25], [-33, -40], contact ? [-2, -86] : [-48, -57],
    [-18, -51], [-22, -67], [-24, -84], [-26, -103],
    [0, -57], [0, -77], [0, -95], [0, -116],
    [16, -53], [20, -70], [21, -85], [22, -103],
    [29, -46], [34, -60], [35, -74], [37, -90],
  ]
  if (contact) offsets[12] = [0, -87]
  if (pointing || fist) {
    offsets[4] = [-3, -46]
    for (const i of fist ? [5, 9, 13, 17] : [9, 13, 17]) {
      const [baseX, baseY] = offsets[i]
      offsets.splice(i + 1, 3, [baseX, baseY - 8], [baseX, baseY + 1], [baseX, baseY + 10])
    }
  }
  if (pinched) offsets[4] = fist ? [-15, -42] : [-30, -99]
  const joints = offsets.map(([dx, dy]) => ({
    x: x + dx * Math.cos(angle) - dy * Math.sin(angle),
    y: y + dx * Math.sin(angle) + dy * Math.cos(angle),
  }))
  return { id, point: joints[8], pinched, joints, indexExtended: pointing || !fist && !pinched }
}

const shape = options => readHand(hand(options))

function snapSetup() {
  const snap = new VisibleSnap()
  const poses = new PoseConfirmation()
  const update = (sample, time) => {
    const ready = poses.update(sample ? [sample] : [], time)
    return snap.update(sample, sample && ready.get(sample.id), time)
  }
  return { snap, update }
}

test('o estalo visível exige contato estável e libera um único astro', () => {
  const { snap, update } = snapSetup()
  assert.equal(update(shape(), 0), false)
  assert.equal(update(shape({ contact: true }), 50), false)
  assert.equal(snap.ready, false)
  assert.equal(update(shape({ contact: true }), 100), false)
  assert.equal(snap.ready, true)
  assert.equal(update(shape(), 140), true)
  assert.equal(update(shape(), 180), false)
  assert.equal(update(shape({ contact: true }), 220), false)
  assert.equal(snap.ready, false)
  const cancelled = snapSetup()
  cancelled.update(shape({ contact: true }), 0)
  cancelled.update(shape({ contact: true }), 55)
  assert.equal(cancelled.update(shape({ fist: true }), 90), false)
  assert.equal(cancelled.snap.ready, false)
})

test('após apontar, o estalo só dispara se o contato novo for confirmado', () => {
  const { snap, update } = snapSetup()
  const pointing = shape({ pointing: true })
  const contact = shape({ contact: true })
  update(pointing, 0)
  update(pointing, 140)
  update(contact, 170)
  update(contact, 230)
  assert.equal(snap.ready, false)
  assert.equal(update(shape(), 265), false)
  update(contact, 300)
  update(contact, 355)
  assert.equal(snap.ready, true)
  assert.equal(update(shape(), 400), true)
})

test('a troca ou a perda da mão cancela o estalo preparado', () => {
  const { update } = snapSetup()
  update(shape({ contact: true }), 10)
  update(shape({ contact: true }), 60)
  assert.equal(update(shape({ id: 2 }), 100), false)
  update(shape({ contact: true }), 140)
  update(shape({ contact: true }), 190)
  update(undefined, 220)
  assert.equal(update(shape(), 260), false)
})

test('só o indicador levantado prevalece quando o polegar está perto do dedo médio', () => {
  const pointing = hand({ pointing: true })
  pointing.pinched = true // O estado da pinça pode vir do quadro anterior.
  const point = readHand(pointing)
  assert.equal(point.pose, 'point')
  assert.ok(point.thumbMiddleGap < 0.34)
  const { snap, update } = snapSetup()
  for (let t = 0; t < 400; t += 40) {
    assert.equal(update(point, t), false)
    assert.equal(snap.ready, false)
  }
  assert.equal(update(shape(), 400), false)
})

test('a órbita exige deslocamento lateral deliberado e aceita os dois sentidos', () => {
  for (const direction of [-1, 1]) {
    const orbit = new OrbitSweep()
    const slide = []
    for (let frame = 0; frame < 20; frame++) {
      const action = orbit.update(shape({ x: 300 + direction * frame * 8 }), frame * 33, 960)
      if (action) slide.push(action)
    }
    assert.deepEqual(slide, [direction])
    assert.equal(orbit.active, true)
    for (let frame = 0; frame < 18; frame++) {
      const action = orbit.update(shape({ x: 300 + direction * (144 - frame * 8) }), (20 + frame) * 33, 960)
      if (action) slide.push(action)
    }
    assert.deepEqual(slide, [direction, -direction])
    assert.equal(orbit.update(undefined, 1280, 960), null)
    assert.equal(orbit.active, false)
  }
})

test('a órbita ignora tremor, deriva lenta, rotação do pulso, diagonal e saltos', () => {
  const paths = [
    frame => ({ x: 300 + frame % 2 * 5 }),
    frame => ({ x: 300 + frame * 2.5 }),
    frame => ({ angle: frame * 0.07 }),
    frame => ({ x: 300 + frame * 8, y: 230 + frame * 6 }),
    frame => ({ x: frame === 7 ? 460 : 300 }),
  ]
  for (const path of paths) {
    const orbit = new OrbitSweep()
    for (let frame = 0; frame < 45; frame++) {
      assert.equal(orbit.update(shape(path(frame)), frame * 33, 960), null)
    }
    assert.equal(orbit.active, false)
  }
})

test('cada pose precisa permanecer estável antes do sinal de confirmação', () => {
  const ready = new PoseConfirmation()
  for (const [pose, sample, confirm] of [
    ['palm', shape(), 125], ['point', shape({ pointing: true }), 125],
    ['pinch', shape({ pinched: true }), 125], ['fist-ready', shape({ fist: true, pinched: true }), 125],
  ]) {
    ready.clear()
    assert.equal(ready.update([sample], 0).size, 0)
    assert.equal(ready.update([sample], confirm - 1).size, 0)
    assert.equal(ready.update([sample], confirm).get(1), pose)
  }
  assert.equal(ready.update([shape({ fist: true })], 165).get(1), 'fist')
  ready.update([], 550)
  assert.equal(ready.update([shape({ pinched: true })], 560).size, 0)
})

test('um quadro ambíguo não derruba o indicador e trocar de mão reinicia a confirmação', () => {
  const poses = new PoseConfirmation()
  const point = shape({ pointing: true })
  const uncertain = { ...point, pose: null }
  poses.update([point], 0)
  assert.equal(poses.update([point], 125).get(1), 'point')
  assert.equal(poses.update([uncertain], 160).get(1), 'point')
  assert.equal(poses.update([point], 195).get(1), 'point')
  assert.equal(poses.update([uncertain], 330).has(1), false)
  assert.equal(poses.update([shape({ id: 2, pointing: true })], 360).has(2), false)
})

test('a mira filtra tremor e um salto isolado, mas acompanha um deslocamento de verdade', () => {
  const aim = new IndexAim()
  const first = { x: 450, y: 240 }
  const moved = { x: 565, y: 248 }
  assert.deepEqual(aim.update(1, first, 960, 0), first)
  assert.deepEqual(aim.update(1, { x: 453, y: 237 }, 960, 34), first)
  assert.deepEqual(aim.update(1, { x: 372, y: 310 }, 960, 68), first)
  assert.deepEqual(aim.update(1, first, 960, 102), first)
  assert.deepEqual(aim.update(1, moved, 960, 136), first)
  assert.ok(aim.update(1, moved, 960, 170).x > 520)
  assert.ok(aim.update(1, moved, 960, 204).x > 542)
  assert.deepEqual(aim.update(2, moved, 960, 238), moved)
})
