import test from 'node:test';
import assert from 'node:assert/strict';
import { PLATFORMS, ZONES, STAGES, CATEGORIES, stageAt, clearOf, columnClear } from '../app/bosque-de-los-hongos-gigantes/engine.mjs';
import b1 from '../app/bosque-de-los-hongos-gigantes/content/stations/b1.mjs';

test('the world climbs: stations rise from the forest floor through ten stages to a summit above the clouds', () => {
  assert.equal(STAGES.length, 10);
  assert.deepEqual(ZONES.map(z => z.id), CATEGORIES.map(c => c.id), 'one landmark per category, same order');
  for (let i = 1; i < ZONES.length; i++) assert.ok(ZONES[i].y > ZONES[i - 1].y + 2.5, `${ZONES[i].id} is higher than ${ZONES[i - 1].id}`);
  assert.ok(ZONES[0].y < 3, 'the first station is near the ground');
  assert.ok(ZONES.at(-1).y >= 50, 'the summit is above the cloud layer');
  assert.ok(new Set(ZONES.map(z => z.stage)).size >= 9, 'stations spread over the stages');
  assert.equal(stageAt(0), 0); assert.equal(stageAt(ZONES.at(-1).y), STAGES.length - 1);
  for (const z of ZONES) assert.ok(z.place && z.species, z.id);
});

test('every hop on the main route is a calm jump: gap under 2.5 m and rise under 2 m', () => {
  const route = PLATFORMS.filter(p => !p.id.startsWith('side'));
  for (let i = 1; i < route.length; i++) {
    const a = route[i - 1], b = route[i], gap = Math.hypot(a.x - b.x, a.z - b.z) - a.r - b.r;
    assert.ok(gap > .3 && gap < 2.5, `${a.id} → ${b.id}: gap ${gap.toFixed(2)}`);
    assert.ok(b.y - a.y < 2 && b.y >= a.y, `${a.id} → ${b.id}: rise ${(b.y - a.y).toFixed(2)}`);
  }
});

test('no cap overlaps another and no stem or trunk rises through a cap', () => {
  for (const p of PLATFORMS) assert.ok(clearOf(p, PLATFORMS, p), `${p.id} collides with another cap or stem`);
  const shelves = PLATFORMS.filter(p => p.kind === 'shelf');
  assert.ok(shelves.length >= 2, 'bracket fungi on oak trunks');
  for (const p of shelves) { assert.ok(p.trunk, p.id); assert.ok(columnClear(p.trunk.x, p.trunk.z, p.trunk.r, 0, p.trunk.top, PLATFORMS, p), `${p.id} trunk`); }
});

test('B1 expedition: one authored station per landmark, a choice that triggers talk and an open spoken question', () => {
  assert.deepEqual(b1.map(p => p.zone).sort(), CATEGORIES.map(c => c.id).sort());
  for (const p of b1) {
    assert.equal(p.level, 'B1'); assert.equal(p.station, true); assert.match(p.id, /^b1-ruta-/);
    assert.ok(p.scene.length > 40, `${p.id}: the world sets the scene`);
    assert.ok(p.open.length > 30, `${p.id}: open spoken question`);
    assert.ok(p.followUps.length >= 2 && p.glosses.length >= 2 && p.support.length >= 2 && p.teacherNote);
    if (p.zone === 'final') assert.equal(p.choices, undefined);
    else { assert.ok(p.choices.length >= 2); if (p.type !== 'ranking') assert.equal(p.reactions.length, p.choices.length, `${p.id}: every choice gets a reaction`); }
    for (const text of [p.scene, p.question, p.open, ...(p.reactions ?? []), ...p.followUps]) assert.doesNotMatch(text, /\b(?:vos|tenés|querés|podés|sabés|preferís|confiás|hacés|encontrás)\b/i, 'tú, like the rest of the site');
  }
  assert.equal(b1.find(p => p.zone === 'cambia').type, 'change-condition'); assert.ok(b1.find(p => p.zone === 'cambia').condition);
});

test('clean playable space: station props leave arrivals and departures open, solids never sit in a jump corridor', async () => {
  const { OBSTACLES, MICRO_SPOTS, stepPlayer, spawnPlayer } = await import('../app/bosque-de-los-hongos-gigantes/engine.mjs');
  const route = PLATFORMS.filter(p => !p.id.startsWith('side'));
  for (const zone of ZONES) {
    const i = route.findIndex(p => p.zone === zone.id), cap = route[i];
    for (const neighbour of [route[i - 1], route[i + 1]].filter(Boolean)) {
      // The straight line from the centre to the neighbour crosses the rim without touching a prop.
      const dx = neighbour.x - cap.x, dz = neighbour.z - cap.z, d = Math.hypot(dx, dz);
      for (let t = 0; t <= cap.r + .3; t += .1) {
        const x = cap.x + dx / d * t, z = cap.z + dz / d * t;
        for (const o of OBSTACLES.filter(o => o.id.startsWith(`${zone.id}-`))) assert.ok(Math.hypot(x - o.x, z - o.z) > o.r + .35, `${o.id} blocks the way between ${cap.id} and ${neighbour.id}`);
      }
    }
    // Landing in the centre is never inside a prop.
    for (const o of OBSTACLES.filter(o => o.id.startsWith(`${zone.id}-`))) assert.ok(Math.hypot(o.x - cap.x, o.z - cap.z) > o.r + 1.2, `${o.id} sits on the landing spot`);
  }
  // A walk into a station prop stops at its surface instead of passing through it.
  const zone = ZONES[4], prop = OBSTACLES.find(o => o.id === `${zone.id}-prop`);
  let p = { ...spawnPlayer(), x: zone.x, y: zone.y, z: zone.z, platform: `zone-${zone.id}`, checkpoint: { x: zone.x, y: zone.y, z: zone.z } };
  for (let k = 0; k < 120; k++) { const dx = prop.x - p.x, dz = prop.z - p.z, d = Math.hypot(dx, dz) || 1; p = stepPlayer(p, { x: dx / d, z: dz / d }, 1 / 60); }
  assert.ok(Math.hypot(p.x - prop.x, p.z - prop.z) >= prop.r + .34, 'the player cannot enter a prop');
  assert.equal(p.y, zone.y, 'and stays on the cap');
  // Stems and trunks around the route are solid but never inside a corridor that a jump uses.
  for (const o of OBSTACLES.filter(o => o.id.endsWith('-trunk'))) assert.ok(PLATFORMS.every(q => q.kind === 'shelf' || Math.hypot(q.x - o.x, q.z - o.z) > q.r + o.r - .5 || q.y > o.y1), o.id);
  assert.ok(MICRO_SPOTS.length >= 18, 'short conversation moments between stations');
  assert.equal(new Set(MICRO_SPOTS.map(m => m.platform)).size, MICRO_SPOTS.length);
  for (const m of MICRO_SPOTS) assert.ok(!PLATFORMS.find(p => p.id === m.platform).zone, `${m.id} is not on a station`);
});

test('B1 short moments: one per spot, varied, spoken and never checked', async () => {
  const { MICRO_SPOTS } = await import('../app/bosque-de-los-hongos-gigantes/engine.mjs');
  const { micro } = await import('../app/bosque-de-los-hongos-gigantes/content/stations/b1.mjs');
  assert.deepEqual(micro.map(m => m.id).sort(), MICRO_SPOTS.map(m => m.id).sort());
  assert.ok(new Set(micro.map(m => m.type)).size >= 5, 'observe, react, choose, imagine, tell, compare');
  for (const m of micro) { assert.ok(m.prompt.length > 30 && m.label && m.hint); assert.ok(!Object.keys(m).some(k => /answer|score|correct/i.test(k))); if (m.choices) assert.ok(m.choices.length >= 2); }
  assert.equal(new Set(micro.map(m => m.prompt)).size, micro.length);
});

test('double jump: one softer second jump in the air per landing, reset on landing', async () => {
  const e = await import('../app/bosque-de-los-hongos-gigantes/engine.mjs');
  const dt = 1 / 90, idle = { x: 0, z: 0 };
  let p = e.spawnPlayer();
  p = e.stepPlayer(p, { ...idle, jump: true }, dt); assert.ok(p.vy > e.DOUBLE_JUMP_SPEED, 'first jump is the full jump');
  for (let i = 0; i < 30; i++) p = e.stepPlayer(p, idle, dt);
  const before = p.y; p = e.stepPlayer(p, { ...idle, jump: true }, dt);
  assert.ok(Math.abs(p.vy - (e.DOUBLE_JUMP_SPEED - e.GRAVITY * dt)) < 1e-9, 'second jump in the air'); assert.equal(p.airJumps, 0); assert.equal(p.doubleJumps, 1);
  assert.ok(e.DOUBLE_JUMP_SPEED < e.JUMP_SPEED, 'the second jump is softer');
  for (let i = 0; i < 20; i++) p = e.stepPlayer(p, idle, dt);
  const vy = p.vy; p = e.stepPlayer(p, { ...idle, jump: true }, dt); assert.ok(p.vy < vy, 'no third jump'); assert.ok(p.y > before - 5);
  for (let i = 0; i < 400 && !p.grounded; i++) p = e.stepPlayer(p, idle, dt);
  assert.equal(p.grounded, true); assert.equal(p.airJumps, 1, 'landing restores the second jump');
});

test('double jump rescues a jump that falls short; falls return to the last cap, never to the forest floor', async () => {
  const e = await import('../app/bosque-de-los-hongos-gigantes/engine.mjs');
  const route = e.PLATFORMS.filter(p => !p.id.startsWith('side')), dt = 1 / 90;
  const a = route.find(p => p.y > 12), b = route[route.indexOf(a) + 1];
  const run = (doubleAt) => {
    let p = { ...e.spawnPlayer(), x: a.x, y: a.y, z: a.z, platform: a.id, checkpoint: { x: a.x, y: a.y, z: a.z } };
    // A walking (not running) jump toward the next cap falls short without help.
    for (let i = 0; i < 400; i++) { const dx = b.x - p.x, dz = b.z - p.z, d = Math.hypot(dx, dz) || 1; p = e.stepPlayer(p, { x: dx / d * Math.min(1, d / .15), z: dz / d * Math.min(1, d / .15), jump: i === 0 || i === doubleAt }, dt); if (p.respawns || (i > 5 && p.grounded)) break; }
    return p;
  };
  const short = run(-1);
  assert.equal(short.respawns, 1, 'a walking jump misses');
  assert.deepEqual([short.x, short.y, short.z], [a.x, a.y, a.z], 'the fall returns to the cap it left');
  const saved = run(70);
  assert.equal(saved.platform, b.id, 'a second jump at the top of the arc reaches the next cap');
  // Landing on the forest floor after the climb has begun puts you back on the last cap.
  let p = { ...e.spawnPlayer(), x: 0, y: 1, z: 0, vy: 0, grounded: false, platform: null, checkpoint: { x: route[6].x, y: route[6].y, z: route[6].z } };
  for (let i = 0; i < 60; i++) p = e.stepPlayer(p, { x: 0, z: 0 }, dt);
  assert.equal(p.respawns, 1); assert.equal(p.y, route[6].y);
});

test('staged falls and the summit: the world drives the fall, reaching the top opens the final', async () => {
  const e = await import('../app/bosque-de-los-hongos-gigantes/engine.mjs');
  const cap = ZONES[6];
  let p = { ...e.spawnPlayer(), x: cap.x + 30, y: cap.y, z: cap.z, grounded: false, platform: null, checkpoint: { x: cap.x, y: cap.y, z: cap.z } };
  for (let i = 0; i < 120; i++) p = e.stepPlayer(p, { x: 0, z: 0, stagedFalls: true }, 1 / 90);
  assert.equal(p.falling, true); assert.equal(p.respawns, 0, 'no instant teleport while the fall is staged');
  p = e.respawnAt(p); assert.deepEqual([p.x, p.y, p.z, p.falling, p.respawns], [cap.x, cap.y, cap.z, false, 1]);
  let s = e.newSession('B1', 3); assert.equal(e.finalUnlocked(s), false);
  s = e.reachSummit(s); assert.equal(e.finalUnlocked(s), true);
  assert.equal(e.restoreSession(JSON.stringify(s), { B1: [] }).summit, true);
});
