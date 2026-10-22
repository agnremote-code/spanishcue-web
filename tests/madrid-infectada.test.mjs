import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import * as L from '../app/madrid-infectada/layout.mjs';
import * as E from '../app/madrid-infectada/engine.mjs';
import { ZONES, SPOTS, LEVEL_IDS, CAST } from '../app/madrid-infectada/story.mjs';
import { GAMES } from '../app/escucha-3d/games.mjs';
import { checkAll } from '../scripts/check-madrid.mjs';
import * as C from '../app/madrid-infectada/city.mjs';
import { solidIndex } from '../app/madrid-infectada/horde.mjs';
import { BANDS, LOADERS } from '../app/madrid-infectada/street.mjs';
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

test('one big Madrid, not a square: bigger than Noche abierta, with its squares, streets and monuments', () => {
  const b = C.CITY_BOUNDS;
  assert.ok(b.maxX - b.minX >= 300 && b.maxZ - b.minZ >= 300, `the city is ${b.maxX - b.minX}×${b.maxZ - b.minZ} m`);
  const places = C.PLACES.map(p => p.name), streets = new Set(C.STREETS.map(s => s.name)), monuments = new Set(C.MONUMENTS.map(m => m.id ?? m.kind));
  for (const name of ['Plaza de la Armería', 'Plaza de Cibeles', 'Puerta de Alcalá', 'Plaza de España', 'Templo de Debod', 'Plaza de Oriente']) assert.ok(places.includes(name), name);
  for (const name of ['Gran Vía', 'Calle de Alcalá', 'Paseo del Prado', 'Calle Mayor', 'Calle de Bailén', 'Calle del Arenal']) assert.ok(streets.has(name), name);
  for (const id of ['cibeles', 'alcala', 'debod', 'oriente', 'almudena', 'teatro', 'comunicaciones', 'prado']) assert.ok(monuments.has(id), id);
  // The nine districts above ground are pieces of the same city (the Metro runs underneath).
  for (const z of L.ZONE_ORDER.filter(z => z !== 'metro')) assert.ok(C.PLACEMENT[z], z);
  assert.equal(C.whereIs(...Object.values(C.arrivalOf('palacio')).slice(0, 2)).zone, 'palacio');
});

test('on foot from Sol the mascot reaches every circle, every survivor, every district and the Metro', () => {
  const step = 1, R = PLAYER_RADIUS, b = C.CITY_BOUNDS, index = solidIndex(C.allSolids());
  const free = (x, z) => x > b.minX + 1 && x < b.maxX - 1 && z > b.minZ + 1 && z < b.maxZ - 1 && !index.near(x, z, R + 0.5).some(s => s.top == null && x > s.x0 - R && x < s.x1 + R && z > s.z0 - R && z < s.z1 + R);
  const start = C.arrivalOf('sol'), key = (i, j) => i * 10000 + j;
  const first = [Math.round(start.x / step), Math.round(start.z / step)];
  const seen = new Set([key(...first)]), queue = [first];
  for (let q = 0; q < queue.length; q++) {
    const [i, j] = queue[q];
    for (const [di, dj] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
      const ni = i + di, nj = j + dj, k = key(ni, nj);
      if (seen.has(k) || !free(ni * step, nj * step)) continue;
      seen.add(k); queue.push([ni, nj]);
    }
  }
  const near = (p) => { for (let i = Math.round(p.x) - 2; i <= Math.round(p.x) + 2; i++) for (let j = Math.round(p.z) - 2; j <= Math.round(p.z) + 2; j++) if (seen.has(key(i, j)) && Math.hypot(i - p.x, j - p.z) < 1.8) return true; return false; };
  for (const s of C.citySpots()) assert.ok(near(s), `circle ${s.id} unreachable`);
  for (const e of C.ENCOUNTERS) assert.ok(near(C.encounterSpot(e)), `survivor ${e.id} unreachable`);
  for (const z of L.ZONE_ORDER.filter(z => z !== 'metro')) assert.ok(near(C.arrivalOf(z)), `district ${z} unreachable`);
  for (const m of C.metroEntrances()) assert.ok(near(m), `Metro ${m.name} unreachable`);
  for (const [id, e] of Object.entries(C.METRO_EXITS)) assert.ok(near(e), `Metro exit ${id} unreachable`);
  assert.ok(seen.size > 20000, `only ${seen.size} m² to walk`);
});

test('thirty survivors in the street, each with a scene in every band, counted apart from the circles', async () => {
  assert.equal(C.ENCOUNTERS.length, 30);
  assert.deepEqual(C.ENCOUNTER_IDS, C.ENCOUNTERS.map(e => e.id));
  for (const e of C.ENCOUNTERS) assert.ok(C.SURVIVORS[e.id]?.name && C.SURVIVORS[e.id]?.role, e.id);
  assert.deepEqual(new Set(Object.values(BANDS)), new Set(['a0', 'a', 'b', 'c']));
  for (const band of Object.keys(LOADERS)) {
    const content = (await LOADERS[band]()).default;
    assert.deepEqual(Object.keys(content).sort(), [...C.ENCOUNTER_IDS].sort(), band);
  }
  let s = E.createState('B2');
  s = E.markDone(s, 'calle', 'cura');
  assert.equal(E.markDone(s, 'calle', 'cura'), s);
  assert.equal(E.markDone(s, 'calle', 'nadie'), s, 'unknown survivors are ignored');
  assert.deepEqual(E.streetDone(s), ['calle/cura']);
  assert.deepEqual(E.circlesDone(s), []);
  assert.deepEqual(E.fromSaved(E.toSaved(s)).done, s.done);
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
