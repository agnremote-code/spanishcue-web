import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import * as L from '../app/mas-alla/layout.mjs';
import * as E from '../app/mas-alla/engine.mjs';
import { CAST, FORMS, LEVEL_IDS, SPOTS, WORLD_IDS, ZONES } from '../app/mas-alla/story.mjs';
import { GAMES } from '../app/escucha-3d/games.mjs';
import { checkAll } from '../scripts/check-mas-alla.mjs';
import { VOICES, VOICE_IDS } from '../app/mas-alla/voces.mjs';
import { PLAYER_RADIUS } from '../app/noche-abierta/world3d.mjs';

const game = readFileSync('app/mas-alla/MasAllaGame.tsx', 'utf8');
const world = readFileSync('app/mas-alla/World3D.tsx', 'utf8');
const card = readFileSync('app/mas-alla/Encuentro.tsx', 'utf8');
const forms = readFileSync('app/mas-alla/Pregunta.tsx', 'utf8');
const intro = readFileSync('app/mas-alla/intro3d.ts', 'utf8');
const catalog = readFileSync('app/lesson-catalog.ts', 'utf8');

test('all seven levels pass the Más allá checker (twelve encounters, words per level, one deep question, two open ones, neutral Spanish)', async () => {
  assert.deepEqual(await checkAll(), []);
});

test('two worlds after the Umbral, three zones each, two encounters per zone, each in its own world', () => {
  assert.deepEqual(WORLD_IDS, ['cielo', 'infierno']);
  assert.equal(ZONES.length, 6);
  assert.equal(SPOTS.length, 12);
  for (const z of ZONES) assert.equal(SPOTS.filter(s => s.zone === z.id && s.world === z.world).length, 2, z.id);
  for (const w of WORLD_IDS) assert.deepEqual(L.layoutOf(w).spots.map(s => s.id).sort(), SPOTS.filter(s => s.world === w).map(s => s.id).sort(), w);
  for (const s of SPOTS) for (const c of s.cast) assert.ok(CAST[c], `${s.id}: cast ${c}`);
  assert.deepEqual(L.SPOT_PLACE, Object.fromEntries(SPOTS.map(s => [s.id, s.world])));
});

test('twelve encounters, twelve ways to answer: no form repeats and every form is drawn, none as a plain list', () => {
  const used = SPOTS.map(s => s.form);
  assert.equal(new Set(used).size, 12);
  for (const f of used) {
    assert.ok(FORMS[f]?.options >= 3, f);
    assert.match(forms, new RegExp(`\\b${f}: [A-Z]\\w+`), `${f} has its own component`);
  }
  assert.doesNotMatch(forms, /<ol|<ul/, 'answers are never a vertical list');
  assert.ok(card.includes('Saltear directo a la pregunta'), 'every encounter can skip to the question');
});

test('in every place the circles, portals and the way out are reachable on foot from the spawn', () => {
  const step = 0.5, R = PLAYER_RADIUS;
  for (const id of L.PLACE_IDS) {
    const z = L.layoutOf(id), solids = L.solidsFor(id), b = z.bounds;
    const free = (x, y) => x > b.minX && x < b.maxX && y > b.minZ && y < b.maxZ && !solids.some(s => s.top == null && x > s.x0 - R && x < s.x1 + R && y > s.z0 - R && y < s.z1 + R);
    const key = (i, j) => `${i},${j}`;
    const first = [Math.round(z.spawn.x / step), Math.round(z.spawn.z / step)];
    assert.ok(free(z.spawn.x, z.spawn.z), `${id}: spawn`);
    const seen = new Set([key(...first)]), queue = [first];
    for (let q = 0; q < queue.length; q++) {
      const [i, j] = queue[q];
      for (const [di, dj] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
        const ni = i + di, nj = j + dj, k = key(ni, nj);
        if (seen.has(k) || !free(ni * step, nj * step)) continue;
        seen.add(k); queue.push([ni, nj]);
      }
    }
    const near = (p, d = 1.2) => [...seen].some(k => { const [i, j] = k.split(',').map(Number); return Math.hypot(i * step - p.x, j * step - p.z) < d; });
    for (const s of z.spots) assert.ok(near(s), `${id}/${s.id} unreachable`);
    for (const v of L.voicesFor(id).filter(v => !v.walker)) assert.ok(near(v), `${id}/voz ${v.id} unreachable`);
    for (const p of z.portals) assert.ok(near(p, p.r), `${id}: portal to ${p.to} unreachable`);
    if (z.exit) assert.ok(near(z.exit), `${id}: way back unreachable`);
    if (z.final) assert.ok(near(z.final, z.final.r + 1), `${id}: hourglass unreachable`);
  }
});

test('progress per level: one answer per encounter, revisits keep the mark, verdict, reset, account rows round-trip', () => {
  let s = E.createState('B1');
  s = E.answer(s, 'puerta', 1);
  assert.equal(E.answer(s, 'puerta', 1), s);
  assert.equal(E.answer(s, 'puerta', 9), s, 'no answer beyond the form');
  s = E.markDone(s, 'puerta');
  assert.equal(E.markDone(s, 'puerta'), s, 'a second visit does not add a mark');
  assert.equal(E.markDone(s, 'nadie'), s, 'unknown encounters are ignored');
  assert.equal(E.nextSpot(s, 'puerta').id, 'jardin');
  assert.equal(E.nextSpot(s, 'trono').world, 'cielo', 'after the last of a world comes the other world');
  s = E.decide(s, 'cielo');
  const back = E.fromSaved(E.toSaved(s));
  assert.deepEqual([back.done, back.answers, back.verdict], [s.done, s.answers, s.verdict]);
  s = E.setLevel(s, 'A0');
  assert.deepEqual(E.doneFor(s), []);
  assert.deepEqual(E.doneFor(E.resetLevel(E.setLevel(s, 'B1'))), []);
  assert.deepEqual(E.restore('{bad json'), E.createState());
});

test('Comprensión auditiva lives in the same world: one listening per zone and level, its own voices', () => {
  const g = GAMES.masalla;
  assert.deepEqual(g.levels, LEVEL_IDS);
  assert.deepEqual(g.spots, ZONES.map(z => z.id));
  for (const level of LEVEL_IDS) {
    const file = JSON.parse(readFileSync(`app/escucha-3d/content/masalla/${level.toLowerCase()}.json`, 'utf8'));
    assert.equal(file.game, 'masalla');
    assert.deepEqual(file.items.map(i => i.id), ZONES.map(z => z.id), level);
  }
  assert.ok(game.includes('<ModeSwitch'));
  assert.match(game, /mode === 'escucha'/);
});

test('the intro: a hospital room, the monitor beeping to a flat line and the soul rising, ten seconds at most', () => {
  for (const needle of ['monitor', 'beep', 'soul']) assert.match(intro, new RegExp(needle, 'i'), needle);
  const length = Number(intro.match(/INTRO_SECONDS\s*=\s*([\d.]+)/)?.[1]);
  assert.ok(length > 0 && length <= 10, `intro lasts ${length} s`);
});

test('same controls as the other 3D worlds; three.js and the world load lazily', () => {
  for (const needle of ['keyAction', 'inputFrom', 'stepPlayer', 'followYaw', 'createHero', 'animateHero']) assert.ok(world.includes(needle), needle);
  assert.doesNotMatch(game, /from ['"]three['"]/);
  assert.match(game, /import\(['"]\.\/World3D['"]\)/);
});

test('PRO by default: listed in the catalog, not in the access policy, no new dependency', () => {
  assert.match(catalog, /\{id:243,[^\n]*levels:\["A0","A1","A2","B1","B2","C1","C2"\],displayLevel:"A0–C2"[^\n]*path:"\/mas-alla"/);
  assert.doesNotMatch(readFileSync('app/access-policy.ts', 'utf8'), /243|mas-alla/);
  const pkg = JSON.parse(readFileSync('package.json', 'utf8'));
  assert.ok(!Object.keys({ ...pkg.dependencies, ...pkg.devDependencies }).some(d => /fiber|drei|cannon|rapier|gltf/i.test(d)));
  assert.ok(!existsSync('app/api/mas-alla'));
});

test('the catalog cover is a 1200×750 lossy WebP like the other 3D covers', () => {
  const file = readFileSync('public/mas-alla/cover.webp');
  assert.equal(file.toString('ascii', 0, 4), 'RIFF');
  assert.equal(file.toString('ascii', 8, 16), 'WEBPVP8 ');
  assert.deepEqual([file.readUInt16LE(26) & 0x3fff, file.readUInt16LE(28) & 0x3fff], [1200, 750]);
  assert.ok(file.length < 120_000, `${file.length} bytes`);
});

test('everyone you see has a circle: every extra and walker of the Cielo and the Infierno, the Umbral souls, and the places that stop you', () => {
  assert.equal(new Set(VOICE_IDS).size, VOICE_IDS.length);
  assert.ok(VOICES.length >= 40, `${VOICES.length} voices`);
  for (const id of L.PLACE_IDS) {
    const z = L.layoutOf(id), voices = L.voicesFor(id);
    // Each walker has a voice; still people have one each, or one per couple or queue.
    for (const w of z.walkers) assert.ok(voices.some(v => v.walker === w.seed), `${id}: walker ${w.seed} has no circle`);
    const covered = new Set(voices.map(v => v.extra).filter(Boolean));
    for (const e of z.extras) assert.ok(covered.has(e.seed) || [...covered].some(seed => { const o = z.extras.find(x => x.seed === seed); return o && Math.hypot(o.x - e.x, o.z - e.z) < 6; }), `${id}: extra ${e.seed} has nobody to talk to`);
    const still = voices.filter(v => !v.walker);
    const all = [...z.spots.map(s => ({ id: s.id, x: s.x, z: s.z })), ...still];
    for (const v of still) {
      // A circle never sits in a box or on top of another circle.
      assert.ok(!z.solids.some(b => v.x > b.x0 - 0.4 && v.x < b.x1 + 0.4 && v.z > b.z0 - 0.4 && v.z < b.z1 + 0.4), `${id}/${v.id} inside a solid`);
      for (const o of all) if (o.id !== v.id) assert.ok(Math.hypot(o.x - v.x, o.z - v.z) >= 2.8, `${id}/${v.id} too close to ${o.id}`);
    }
  }
  assert.ok(world.includes("flames = id === 'infierno'"), 'the circles of the Infierno are made of flames');
  assert.ok(game.includes('<Voz '), 'a voice opens its own card');
});

test('nobody is inside an object: the death scene, the dock, the dais and the queue', () => {
  const intro = readFileSync('app/mas-alla/intro3d.ts', 'utf8');
  const num = (re) => Number(intro.match(re)?.[1]);
  // Measured with a vertex check in the browser (2026-10-31): her body rests at 0.84 on a 0.83 mattress,
  // her legs fit under a hollow blanket, seated hips clear a 0.36 seat, and the soul starts above the blanket.
  assert.ok(num(/CHAIR = \{ seat: ([\d.]+)/) <= 0.36, 'seated hips would sink into the chair');
  const blanket = intro.match(/BLANKET = \{ y: ([\d.]+), z: ([-\d.]+), len: ([\d.]+), rx: ([\d.]+), ry: ([\d.]+) \}/).slice(1).map(Number);
  assert.deepEqual([blanket[0], blanket[3] >= 0.45, blanket[4] >= 0.42], [0.83, true, true]);
  assert.match(intro, /CylinderGeometry\(BLANKET\.rx, BLANKET\.rx, BLANKET\.len, 22, 1, true/, 'the blanket is a hollow tent, not a solid block');
  assert.match(intro, /SOUL_Y = BLANKET_TOP \+/);
  assert.match(intro, /bed\.add\(box\(1\.0, 0\.34, 2\.05/, 'the mattress top is at 0.83');
  for (const m of intro.matchAll(/x: (-?[\d.]+), z: [-\d.]+, h: [^,]+, pose: 'sit'/g)) assert.ok(Math.abs(Number(m[1])) >= 1.1, 'a sitter too close to the bed');
  assert.match(intro, /setPose\(kin\[1\], 'cry', true\)/, 'the grandfather keeps sitting when he cries, never standing inside his chair');
  // In the Infierno, Caronte stands on the dock and Lucero on the top step, clear of the throne.
  const inf = L.layoutOf('infierno');
  const trono = inf.spots.find(s => s.id === 'trono').talker, barca = inf.spots.find(s => s.id === 'barca').talker;
  assert.deepEqual([barca.y, trono.y], [0.2, 0.9]);
  const throne = inf.solids.find(b => b.kind === 'throne');
  assert.ok(trono.z - 0.8 >= throne.z1 && trono.z <= -42.2 - 0.2, 'Lucero stands on the top step, in front of the throne');
  const infierno = readFileSync('app/mas-alla/infierno3d.ts', 'utf8');
  for (const e of inf.extras) assert.ok(!infierno.includes(`cylinder(0.05, 0.05, 3.3, iron, ${e.x}, 1.65, `) || Math.abs(e.z - 30.05) > 0.4, 'a pole goes through someone in the queue');
  assert.match(readFileSync('app/mas-alla/figures3d.ts', 'utf8'), /person\.root\.position\.set\(path\[0\]\.x, 0, path\[0\]\.z\)/, 'walkers start on their path');
});
