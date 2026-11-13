import assert from 'node:assert/strict'
import test from 'node:test'
import { FLIGHT_LIMIT_SECONDS, FLYER_X, FlightRound } from '../.test-build/arcade/flight.js'
import { FistTrigger } from '../.test-build/arcade/gestures.js'
import { ROUND_MS, TargetRound } from '../.test-build/arcade/targets.js'

test('abrir, fechar e reabrir a mão controla um tiro por gesto', () => {
  const trigger = new FistTrigger()
  assert.equal(trigger.update(1, 'closed', 0).fire, false)
  assert.equal(trigger.update(1, 'open', 80).ready, false)
  assert.equal(trigger.update(1, 'open', 160).ready, true)
  assert.equal(trigger.update(1, 'transition', 220).fire, false)
  assert.equal(trigger.update(1, 'closed', 280).fire, false)
  assert.equal(trigger.update(1, 'closed', 340).fire, true)
  assert.equal(trigger.update(1, 'closed', 410).fire, false)
  assert.equal(trigger.update(1, 'open', 480).ready, false)
  assert.equal(trigger.update(1, 'open', 560).ready, true)
  assert.equal(trigger.update(1, 'closed', 630).fire, false)
  assert.equal(trigger.update(1, 'closed', 690).fire, true)
})

test('trocar de mão ou perder o rastreamento desarma o tiro', () => {
  const trigger = new FistTrigger()
  trigger.update(1, 'open', 0)
  assert.equal(trigger.update(1, 'open', 80).ready, true)
  assert.equal(trigger.update(2, 'closed', 150).ready, false)
  trigger.update(2, 'open', 220)
  assert.equal(trigger.update(2, 'open', 300).ready, true)
  assert.equal(trigger.update(2, 'closed', 650).ready, false)
})

test('o voo acompanha a altura comandada e estabiliza quando a mão sai', () => {
  const flight = new FlightRound(() => 0.5)
  flight.reset()
  flight.steer(116)
  for (let frame = 0; frame < 18; frame++) flight.update(1 / 60)
  assert.ok(Math.abs(flight.y - 116) < 1)
  flight.steer(375)
  for (let frame = 0; frame < 23; frame++) flight.update(1 / 60)
  assert.ok(Math.abs(flight.y - 375) < 2)
  flight.steer(116)
  flight.update(1 / 60)
  flight.hold()
  const height = flight.y
  flight.update(0.12)
  assert.equal(flight.y, height)
})

test('o voo acelera, estreita os dutos e termina aos 90 segundos', () => {
  const flight = new FlightRound(() => 0.5)
  flight.reset()
  const firstGap = flight.ducts[0].gap
  let earlySpeed = 0
  let lateSpeed = 0
  for (let frame = 0; frame < 90 * 60 + 3; frame++) {
    const before = flight.travel
    flight.update(1 / 60)
    if (frame === 60) earlySpeed = (flight.travel - before) * 60
    if (frame === 78 * 60) lateSpeed = (flight.travel - before) * 60
  }
  assert.equal(flight.crashed, false)
  assert.equal(flight.finished, true)
  assert.equal(flight.elapsed, FLIGHT_LIMIT_SECONDS)
  assert.ok(Math.abs(earlySpeed - 200) < 0.001)
  assert.ok(lateSpeed > earlySpeed * 1.7)
  assert.ok(flight.ducts[0].gap < firstGap * 0.6)
  assert.ok(flight.score >= 60)
})

test('o voo pontua só ao atravessar a dupla de dutos e encerra na colisão', () => {
  const flight = new FlightRound(() => 0.5)
  flight.reset()
  Object.assign(flight.ducts[0], { x: FLYER_X - 25, center: flight.y })
  flight.update(0.03)
  assert.equal(flight.score, 0)
  Object.assign(flight.ducts[0], { x: FLYER_X - 126 })
  flight.update(0.04)
  assert.equal(flight.score, 1)
  flight.update(0.04)
  assert.equal(flight.score, 1)
  Object.assign(flight.ducts[1], { x: FLYER_X - 55, center: flight.y + 115, gap: 160 })
  flight.update(0.04)
  assert.equal(flight.crashed, true)
  const before = flight.travel
  flight.update(0.04)
  assert.equal(flight.travel, before)
})

test('cada disco concede uma única pontuação e ignora disparos fora da rodada', () => {
  const range = new TargetRound(() => 0.4)
  range.reset()
  const target = range.targets[0]
  assert.ok(target)
  assert.equal(range.shoot(target, 220), 30)
  assert.equal(range.shoot(target, 450), 0)
  assert.equal(range.shoot(target, ROUND_MS), 0)
  assert.equal(range.score, 30)
  assert.equal(range.shots, 2)
  assert.equal(range.hits, 1)
  range.update(3500)
  assert.equal(range.impacts.length, 0)
  const next = range.targets[0]
  assert.ok(next)
  assert.equal(range.shoot({ x: next.x + next.radius * 0.48, y: next.y }, 3750), 20)
  range.update(7000)
  const edge = range.targets[0]
  assert.ok(edge)
  assert.equal(range.shoot({ x: edge.x + edge.radius * 0.83, y: edge.y }, 7200), 10)
  assert.equal(range.score, 60)
})

test('o alvo fica disponível por 5,5 segundos e expira mesmo sem disparo', () => {
  const range = new TargetRound(() => 0.4)
  range.reset()
  const target = range.targets[0]
  assert.ok(target)
  range.update(5499)
  assert.ok(range.targets.includes(target))
  assert.equal(range.shoot(target, 5500), 0)
  range.update(5500)
  assert.ok(!range.targets.includes(target))
})
