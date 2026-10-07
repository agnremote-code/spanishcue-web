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
