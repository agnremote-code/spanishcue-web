import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import * as L from '../app/madrid-infectada/layout.mjs';
import * as E from '../app/madrid-infectada/engine.mjs';
import { ZONES, SPOTS, LEVEL_IDS, CAST } from '../app/madrid-infectada/story.mjs';
import { GAMES } from '../app/escucha-3d/games.mjs';
import { checkAll } from '../scripts/check-madrid.mjs';
import { PLAYER_RADIUS } from '../app/noche-abierta/world3d.mjs';

const game = readFileSync('app/madrid-infectada/MadridGame.tsx', 'utf8');
const world = readFileSync('app/madrid-infectada/World3D.tsx', 'utf8');
const card = readFileSync('app/madrid-infectada/SceneCard.tsx', 'utf8');
const catalog = readFileSync('app/lesson-catalog.ts', 'utf8');

test('all seven levels pass the Madrid checker (20 scenes, words per level, quiz, two open questions, neutral Spanish)', async () => {
  assert.deepEqual(await checkAll(), []);
});

test('ten zones in the order of the brief, two circles each', () => {
  assert.deepEqual(ZONES.map(z => z.id), ['sol', 'granvia', 'plaza', 'metro', 'retiro', 'malasana', 'atocha', 'palacio', 'hospital', 'rio']);
  assert.equal(SPOTS.length, 20);
  for (const z of ZONES) {
    assert.equal(SPOTS.filter(s => s.zone === z.id).length, 2, z.id);
    assert.deepEqual(L.layoutOf(z.id).spots.map(s => s.id).sort(), SPOTS.filter(s => s.zone === z.id).map(s => s.id).sort(), z.id);
  }
  for (const s of SPOTS) for (const c of s.cast) assert.ok(CAST[c], `${s.id}: cast ${c}`);
});

test('in every zone both circles and the way on are reachable on foot from the spawn', () => {
  const step = 0.5, R = PLAYER_RADIUS;
  for (const id of L.ZONE_ORDER) {
    const z = L.layoutOf(id), solids = L.solidsFor(id), b = z.bounds;
    const free = (x, y) => x > b.minX && x < b.maxX && y > b.minZ && y < b.maxZ && !solids.some(s => s.top == null && x > s.x0 - R && x < s.x1 + R && y > s.z0 - R && y < s.z1 + R);
    const key = (i, j) => `${i},${j}`;
    const first = [Math.round(z.spawn.x / step), Math.round(z.spawn.z / step)];
    assert.ok(free(z.spawn.x, z.spawn.z), `${id}: spawn`);
    const seen = new Set([key(...first)]), queue = [first];
    while (queue.length) {
      const [i, j] = queue.shift();
      for (const [di, dj] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
        const ni = i + di, nj = j + dj, k = key(ni, nj);
        if (seen.has(k) || !free(ni * step, nj * step)) continue;
        seen.add(k); queue.push([ni, nj]);
      }
    }
    const near = (p) => [...seen].some(k => { const [i, j] = k.split(',').map(Number); return Math.hypot(i * step - p.x, j * step - p.z) < 1.2; });
    for (const s of z.spots) assert.ok(near(s), `${id}/${s.id} unreachable`);
    if (z.gate) assert.ok(near(z.gate), `${id}: gate unreachable`);
  }
});

test('progress: circles per level, revisits keep the mark, reset clears one level only, account rows round-trip', () => {
  let s = E.createState('B1');
  assert.equal(s.level, 'B1');
  s = E.markDone(s, 'sol', SPOTS[0].id);
  assert.equal(E.markDone(s, 'sol', SPOTS[0].id), s, 'a second visit does not add a mark');
  assert.ok(E.isDone(s, 'sol', SPOTS[0].id));
  assert.deepEqual(E.nextSpot(s, 'sol', SPOTS[0].id), { zone: SPOTS[1].zone, spot: SPOTS[1].id });
  s = E.setLevel(s, 'A0');
  assert.deepEqual(E.doneFor(s), []);
  s = E.markDone(s, 'rio', 'nope');
  assert.deepEqual(E.doneFor(s), [], 'unknown circles are ignored');
  const back = E.fromSaved(E.toSaved(E.setLevel(s, 'B1')));
  assert.deepEqual(back.done, { B1: [E.spotKey('sol', SPOTS[0].id)] });
  assert.deepEqual(E.restore('{bad json'), E.createState());
  assert.deepEqual(E.resetLevel(E.setLevel(s, 'B1')).done, {});
});

test('Comprensión auditiva lives in the same world: one listening per zone and level', () => {
  const g = GAMES.madrid;
  assert.deepEqual(g.levels, LEVEL_IDS);
  assert.deepEqual(g.spots, L.ZONE_ORDER);
  for (const level of LEVEL_IDS) {
    const file = JSON.parse(readFileSync(`app/escucha-3d/content/madrid/${level.toLowerCase()}.json`, 'utf8'));
    const items = file.items ?? file;
    assert.deepEqual(items.map(i => i.id), L.ZONE_ORDER, level);
  }
  assert.ok(game.includes('<ModeSwitch'));
  assert.match(game, /mode === 'escucha'/);
});

test('every circle: vaccination first, then the card with «TU TURNO →» and its two slides', () => {
  assert.ok(card.includes('TU TURNO'));
  assert.match(card, /1\/2|\{[^}]*\}\/2|\/ ?2/);
  for (const needle of ['poseVaccination', 'showShield', 'createCloud', 'fireBeam', 'helicopter']) assert.ok(world.includes(needle), needle);
});

test('same controls as the other 3D worlds; three.js and the world load lazily', () => {
  for (const needle of ['keyAction', 'inputFrom', 'stepPlayer', 'followYaw', 'createHero', 'animateHero']) assert.ok(world.includes(needle), needle);
  assert.doesNotMatch(game, /from ['"]three['"]/);
  assert.match(game, /import\(['"]\.\/World3D['"]\)|dynamic\(/);
});

test('PRO by default: listed in the catalog, not in the access policy, no new dependency', () => {
  assert.match(catalog, /\{id:242,[^\n]*levels:\["A0","A1","A2","B1","B2","C1","C2"\],displayLevel:"A0–C2"[^\n]*path:"\/madrid-infectada"/);
  assert.doesNotMatch(readFileSync('app/access-policy.ts', 'utf8'), /242|madrid-infectada/);
  const pkg = JSON.parse(readFileSync('package.json', 'utf8'));
  assert.ok(!Object.keys({ ...pkg.dependencies, ...pkg.devDependencies }).some(d => /fiber|drei|cannon|rapier|gltf/i.test(d)));
  assert.ok(!existsSync('app/api/madrid-infectada'));
});

test('the catalog cover is a 1200×750 lossy WebP like the other 3D covers', () => {
  const file = readFileSync('public/madrid-infectada/cover.webp');
  assert.equal(file.toString('ascii', 0, 4), 'RIFF');
  assert.equal(file.toString('ascii', 8, 16), 'WEBPVP8 ');
  assert.deepEqual([file.readUInt16LE(26) & 0x3fff, file.readUInt16LE(28) & 0x3fff], [1200, 750]);
  assert.ok(file.length < 120_000, `${file.length} bytes`);
});
