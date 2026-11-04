// El tren de las 23:40 (ID 256, /el-tren-de-las-2340): one night on the
// Nocturno de los Andes, Mendoza 23:40 → Los Andes at dawn. A crime novelist
// vanishes from cabin 7 and the passenger in cabin 8 investigates. Ten places,
// 18 circles, a clue notebook, 17 passengers who all talk, a listening per
// circle, A0–C2.
import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { CAST, CLUES, LEVEL_IDS, STORY, STORY_IDS, TRAIN, hypothesis, nightClock, nightProgress, notebook } from '../app/el-tren-de-las-2340/story.mjs';
import { CONTENT } from '../app/el-tren-de-las-2340/levels.mjs';
import { LEVELS } from '../app/el-tren-de-las-2340/levels-info.mjs';
import * as L from '../app/el-tren-de-las-2340/layout.mjs';
import { choose, closeScene, createState, doneFor, notebookEntries, openScene, pasajeroById, progress, restore, sceneView, serialise, setFloor, setLevel, undo } from '../app/el-tren-de-las-2340/engine.mjs';
import { PASAJEROS } from '../app/el-tren-de-las-2340/pasajeros.mjs';
import { GAMES, listeningFor } from '../app/escucha-3d/games.mjs';
import { checkLevel } from '../scripts/check-tren.mjs';
import { scanSource } from '../scripts/neutral-spanish.mjs';
import postcss from 'postcss';

const DIR = 'app/el-tren-de-las-2340';
const listening = (level) => JSON.parse(readFileSync(`app/escucha-3d/content/tren/${level.toLowerCase()}.json`, 'utf8'));
const words = (text) => (String(text).match(/[\p{L}\p{N}]+/gu) ?? []).length;
const inside = (x, z, r, b) => x > b.x0 - r && x < b.x1 + r && z > b.z0 - r && z < b.z1 + r;

test('ten places, 18 circles, every circle in a real sector and reachable on foot from its doors', () => {
  assert.deepEqual(L.FLOORS.map(f => f.name), ['Andén de Mendoza', 'Locomotora', 'Furgón de equipajes', 'Coche cama A', 'Coche cama B', 'Coche comedor', 'Coche bar', 'Coche mirador', 'Andén de Puente del Inca', 'Andén de Los Andes']);
  assert.equal(L.SCENES.length, 18);
  assert.deepEqual(L.SCENES.map(s => s.id), STORY_IDS);
  for (const s of L.SCENES) {
    assert.ok(L.sectorAt(s.floor, s.spot.x, s.spot.z), `${s.id} stands in a sector`);
    assert.equal(L.spotAt(s.floor, s.spot.x, s.spot.z), s.id);
  }
  for (const f of L.FLOORS) {
    const R = 0.35, step = 0.25, b = f.bounds;
    const crowd = (L.CROWD[f.id] ?? []).map(c => ({ x0: c.x - 0.27, x1: c.x + 0.27, z0: c.z - 0.27, z1: c.z + 0.27 }));
    const all = [...L.solidsFor(f.id), ...crowd];
    const free = (x, z) => x > b.minX + R && x < b.maxX - R && z > b.minZ + R && z < b.maxZ - R && !all.some(s => inside(x, z, R, s));
    const doors = L.ARRIVALS.filter(a => a.floor === f.id);
    assert.ok(doors.length >= 1, `place ${f.id} has a way in`);
    const key = (i, j) => `${i},${j}`;
    const first = [Math.round(doors[0].x / step), Math.round(doors[0].z / step)];
    const seen = new Set([key(...first)]); const queue = [first];
    while (queue.length) { const [i, j] = queue.pop(); for (const [di, dj] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) { const a = i + di, c = j + dj, k = key(a, c); if (seen.has(k) || !free(a * step, c * step)) continue; seen.add(k); queue.push([a, c]); } }
    const reach = (x, z) => [Math.floor, Math.ceil].some(fx => [Math.floor, Math.ceil].some(fz => seen.has(key(fx(x / step), fz(z / step)))));
    for (const s of L.SCENES.filter(s => s.floor === f.id)) assert.ok(reach(s.spot.x, s.spot.z), `${s.id} reachable`);
    for (const d of doors) assert.ok(reach(d.x, d.z), `door ${d.id} reachable in place ${f.id}`);
    if (f.id === L.SPAWN.floor) assert.ok(reach(L.SPAWN.x, L.SPAWN.z), 'spawn reachable');
  }
});

test('the train runs front to back: every door leads to the next car, and the platforms to the sleeping car', () => {
  for (const car of L.TRAIN_ORDER) {
    const ids = L.PORTALS[car].map(p => p.id).sort();
    assert.deepEqual(ids, car === 1 ? ['back'] : car === 7 ? ['front'] : ['back', 'front'], `car ${car}`);
  }
  assert.equal(L.arrivalFor(3, 2).heading, Math.PI / 2, 'walking forward you come in through the back door');
  assert.equal(L.arrivalFor(2, 3).heading, -Math.PI / 2, 'walking back you come in through the front door');
  for (const f of [0, 8, 9]) assert.equal(L.PORTALS[f].length, 1);
});

test('the cast: one distinct regional neural voice each, at least twelve countries', () => {
  const voices = Object.values(CAST).map(c => c.voice);
  assert.equal(new Set(voices).size, voices.length);
  assert.ok(new Set(Object.values(CAST).map(c => c.country)).size >= 12);
  for (const s of STORY) for (const id of s.cast) assert.ok(CAST[id], `${s.id}: ${id} is cast`);
});

test('conversation: 18 scenes × 7 levels pass the checker, every level written on its own, neutral Spanish with tú', () => {
  assert.deepEqual(LEVELS.map(l => l.id), LEVEL_IDS);
  for (const level of LEVEL_IDS) assert.deepEqual(checkLevel(level, CONTENT[level]), [], level);
  const first = new Set(LEVEL_IDS.map(level => JSON.stringify(CONTENT[level].equipaje.talk)));
  assert.equal(first.size, LEVEL_IDS.length, 'every level writes its own questions');
  for (const level of LEVEL_IDS) {
    const source = readFileSync(`${DIR}/levels/${level.toLowerCase()}.mjs`, 'utf8');
    assert.deepEqual(scanSource(source, level), [], `${level} is neutral Spanish with tú`);
  }
});

test('the notebook: a clue per circle, the hypothesis grows with them, your answer is written under the clue', () => {
  assert.deepEqual(Object.keys(CLUES), STORY_IDS);
  for (const c of Object.values(CLUES)) assert.ok(c.es && c.en);
  assert.equal(hypothesis([]).id, 'nada');
  assert.equal(hypothesis(['equipaje']).id, 'rara');
  assert.equal(hypothesis(['camarote7']).id, 'desaparecida');
  assert.equal(hypothesis(['camarote7', 'sobrino']).id, 'herencia');
  assert.equal(hypothesis(['perro', 'maquinista']).id, 'adelante');
  assert.equal(hypothesis(['amanecer']).id, 'cerrado');
  const book = notebook(['camarote7', 'equipaje']);
  assert.deepEqual(book.clues.map(c => c.id), ['equipaje', 'camarote7'], 'clues follow the night, not the order you played');
  assert.equal(book.solved, false);
  assert.equal(notebook(['amanecer']).solved, true);
  let s = choose(openScene(createState('A2'), 'camarote7'), 2);
  const [entry] = notebookEntries(s);
  assert.equal(entry.id, 'camarote7');
  assert.equal(entry.note, CONTENT.A2.camarote7.options[2].end);
});

test('the night: the clock runs from 23:40 to 06:40 and the sky follows it', () => {
  assert.deepEqual([TRAIN.start, TRAIN.arrival, TRAIN.cabin], [[23, 40], [6, 40], 8]);
  assert.equal(nightClock(0), '23:40');
  assert.equal(nightClock(STORY_IDS.length), '06:40');
  assert.equal(nightProgress('23:40'), 0);
  assert.equal(nightProgress('06:40'), 1);
  assert.ok(nightProgress('03:10') > 0.4 && nightProgress('03:10') < 0.6);
});

test('everyone you can see on the train has a conversation at three levels', () => {
  const keys = Object.entries(L.CROWD).flatMap(([floor, list]) => list.map((_, i) => `${floor}-${i}`));
  assert.equal(keys.length, 17);
  assert.deepEqual(Object.keys(PASAJEROS).sort(), keys.sort());
  assert.equal(new Set(Object.values(PASAJEROS).map(p => p.name)).size, keys.length, 'every passenger has their own name');
  for (const [key, p] of Object.entries(PASAJEROS)) {
    assert.ok(p.who.es && p.who.en && p.basic.es && p.basic.en, `${key} basic is bilingual`);
    assert.ok(words(p.basic.es) <= 45 && words(p.mid) >= 40 && words(p.high) >= 60, `${key} lengths`);
    for (const ask of [p.basicAsk.es, p.midAsk, p.highAsk]) assert.match(ask, /\?\s*$/);
    assert.equal(pasajeroById(key), p);
  }
  assert.deepEqual(scanSource(readFileSync(`${DIR}/pasajeros.mjs`, 'utf8'), 'pasajeros'), []);
});

test('listening: 18 own listenings × 7 levels with cast voices, A0 bilingual', () => {
  assert.deepEqual(GAMES.tren.spots, STORY_IDS);
  assert.deepEqual(GAMES.tren.levels, LEVEL_IDS);
  assert.equal(GAMES.tren.ownListening, true);
  const titles = new Set();
  for (const level of LEVEL_IDS) {
    const file = listening(level);
    assert.equal(file.game, 'tren'); assert.equal(file.level, level);
    assert.deepEqual(file.items.map(i => i.id), STORY_IDS, level);
    for (const item of file.items) {
      assert.ok(!titles.has(item.title), `${level} ${item.id}: title «${item.title}» is unique`); titles.add(item.title);
      for (const sp of item.speakers) {
        const id = Object.keys(CAST).find(k => CAST[k].name === sp.name);
        assert.ok(id, `${level} ${item.id} speaker ${sp.name} is cast`);
        assert.equal(sp.voice, CAST[id].voice, `${level} ${item.id} ${sp.name} voice`);
      }
      assert.equal(listeningFor(file.items, item.id, [], true).id, item.id);
      if (level === 'A0') assert.ok(item.contextEn && item.lines.every(line => line.en), `A0 ${item.id} is bilingual`);
    }
  }
  assert.equal(listeningFor(listening('B1').items, 'nowhere', [], true), null, 'no fallback to another circle');
});

test('audio: every listening has its generated clip once the audio is built', () => {
  const manifest = JSON.parse(readFileSync('app/escucha-3d/audio-manifest.json', 'utf8'));
  const built = Object.keys(manifest.clips).filter(k => k.startsWith('tren/'));
  if (!built.length) return; // the GitHub Action has not produced them yet; tests/escucha-3d.test.mjs requires them
  assert.equal(built.length, 18 * LEVEL_IDS.length);
  const files = new Set(readdirSync('public/audio/escucha-3d'));
  for (const key of built) assert.ok(files.has(manifest.clips[key].src.split('/').pop()), `${key} file exists`);
});

test('engine: choose, consequence, undo, places and saved progress', () => {
  let s = createState('B1');
  s = openScene(s, 'equipaje');
  assert.equal(s.floor, 0);
  let v = sceneView(s);
  assert.equal(v.options.length, 3); assert.equal(v.talk.length, 5); assert.equal(v.ended, false);
  s = choose(s, 1);
  v = sceneView(s);
  assert.ok(v.ended && v.mood);
  assert.deepEqual(doneFor(s), ['equipaje']);
  s = undo(s); assert.equal(sceneView(s).ended, false);
  s = closeScene(choose(s, 0));
  assert.equal(progress(s).done, 1); assert.equal(progress(s).total, 18);
  s = setFloor(s, 8); assert.equal(s.floor, 8);
  s = setLevel(s, 'A0');
  assert.equal(typeof sceneView(openScene(s, 'nieve')).title.en, 'string', 'A0 is bilingual');
  const back = restore(serialise(s));
  assert.equal(back.level, 'A0'); assert.deepEqual(back.done.B1, ['equipaje']);
});

// Seated people sit on the front edge of a real seat and face the way it
// faces: shins in front of the berth, the bench or the cab seat, never through it.
const SEATS = new Set(['berth', 'dbench', 'chair', 'cabseat', 'armchair', 'swivel', 'bench']);
test('nobody inside anything: seated people sit at the front of their seat, the snorer lies on his berth', () => {
  let seated = 0;
  for (const s of L.SCENES) for (const p of [s.npc, ...(s.extras ?? [])]) {
    if (!p.seat) continue;
    const seat = (L.FURNITURE[s.floor] ?? []).filter(f => SEATS.has(f.type)).sort((a, b) => Math.hypot(a.x - p.x, a.z - p.z) - Math.hypot(b.x - p.x, b.z - p.z))[0];
    assert.ok(seat && Math.hypot(seat.x - p.x, seat.z - p.z) < 0.8, `${s.id} sits on a seat`);
    seated++;
    const r = (seat.rot ?? 0) * Math.PI / 2, fx = Math.sin(r), fz = Math.cos(r);
    assert.ok(Math.sin(p.heading) * fx + Math.cos(p.heading) * fz > 0.9, `${s.id} faces the way the ${seat.type} faces`);
    const ahead = (p.x - seat.x) * fx + (p.z - seat.z) * fz;
    if (seat.type !== 'chair') assert.ok(ahead >= seat.d / 2 - 0.06, `${s.id}: shins clear of the ${seat.type} (${ahead.toFixed(2)})`);
    assert.ok(ahead <= seat.d / 2 + 0.25, `${s.id}: still on the ${seat.type}`);
  }
  assert.ok(seated >= 6, 'Yesenia, Bruno, Pilar, Horacio, Inés, Nelson and Aniceto are checked');
  const evaristo = L.SCENES.find(s => s.id === 'ronquidos').extras.find(p => p.lying);
  const berth = L.FURNITURE[3].find(f => f.type === 'berth' && Math.abs(f.x - evaristo.x) < 1.2);
  assert.ok(evaristo.y >= 0.4, 'he lies on top of the berth');
  assert.ok(inside(evaristo.x, evaristo.z, 0, footprint(berth)), 'and inside its outline');
  assert.match(readFileSync(`${DIR}/tren3d.ts`, 'utf8'), /person\.root\.userData\.person = true/, 'people are tagged for the per-vertex browser check');
});
const footprint = (f) => L.footprint(f);

// The camera in a scene sits beside the two people or over your shoulder,
// inside the car, with room, and sees the person you talk to: never behind a
// wall, in a closed cabin or squeezed between the two of you.
test('camera: every scene is filmed from inside its car, with room, seeing the person you talk to', () => {
  const inWall = (floor, x, z) => L.cameraBlockers(floor).some(b => inside(x, z, 0.2, b));
  for (const s of L.SCENES) {
    const cam = L.sceneCamera(s);
    const b = L.floorById(s.floor).bounds;
    assert.ok(!inWall(s.floor, cam.x, cam.z), `${s.id}: camera clear of the walls`);
    if (L.isCar(s.floor)) assert.ok(cam.x > b.minX && cam.x < b.maxX && cam.z > b.minZ && cam.z < b.maxZ, `${s.id}: camera inside the car`);
    assert.ok(cam.room >= 1.1, `${s.id}: camera has room (${cam.room.toFixed(2)} m)`);
    assert.ok(cam.seen >= cam.faces - 1, `${s.id}: sees ${cam.seen} of ${cam.faces} faces`);
  }
  const world = readFileSync(`${DIR}/World3D.tsx`, 'utf8');
  assert.match(world, /sceneCamera\(s, \{ x: player\.x, z: player\.z \}\)/, 'the game uses the same framing');
  assert.match(world, /CEILING - 0\.32/, 'walking inside a car the camera stays under the roof');
});

test('PRO by default: route, catalog, cover, preview, shared engine and no browser speech', () => {
  const catalog = readFileSync('app/lesson-catalog.ts', 'utf8');
  assert.match(catalog, /\{id:256,[^\n]*levels:\["A0","A1","A2","B1","B2","C1","C2"\],displayLevel:"A0–C2"[^\n]*path:"\/el-tren-de-las-2340"/);
  assert.doesNotMatch(readFileSync('app/access-policy.ts', 'utf8'), /256|el-tren-de-las-2340/);
  assert.match(readFileSync(`${DIR}/layout.tsx`, 'utf8'), /canonical:"https:\/\/spanishcue\.com\/el-tren-de-las-2340"/);
  const cover = readFileSync('public/el-tren-de-las-2340/portada.webp');
  assert.equal(cover.toString('ascii', 0, 4), 'RIFF');
  assert.equal(cover.toString('ascii', 8, 16), 'WEBPVP8 ');
  assert.deepEqual([cover.readUInt16LE(26) & 0x3fff, cover.readUInt16LE(28) & 0x3fff], [1200, 750]);
  assert.ok(cover.length < 120 * 1024, 'cover under 120 KB');
  assert.ok(existsSync('public/conversation-previews/256.mp4'));
  const game = readFileSync(`${DIR}/TrenGame.tsx`, 'utf8');
  assert.doesNotThrow(() => postcss.parse(readFileSync(`${DIR}/tren.css`, 'utf8')), 'tren.css parses (an unclosed block breaks the page)');
  assert.match(game, /<ListeningCard game="tren"/);
  assert.match(game, /MusicVolume/, 'the shared music volume slider');
  assert.match(game, /import\(['"]\.\/World3D['"]\)/);
  assert.doesNotMatch(game, /from ['"]three['"]/);
  const world = readFileSync(`${DIR}/World3D.tsx`, 'utf8');
  assert.match(world, /from '\.\.\/noche-abierta\/hero3d'/);
  assert.match(world, /from '\.\.\/noche-abierta\/world3d\.mjs'/);
  for (const file of readdirSync(DIR).filter(f => /\.(tsx?|mjs)$/.test(f))) {
    const source = readFileSync(`${DIR}/${file}`, 'utf8');
    assert.doesNotMatch(source, /speechSynthesis|SpeechSynthesisUtterance/, `${file} uses no browser speech`);
    assert.doesNotMatch(source, /https?:\/\/(?!spanishcue\.com)/, `${file} loads nothing from the network`);
  }
});

test('unmount frees the GPU: texture slots, shadow map, bloom targets, the PMREM target and the WebGL context', () => {
  const world = readFileSync(`${DIR}/World3D.tsx`, 'utf8');
  const cleanup = world.slice(world.indexOf('disposed = true;'));
  assert.match(cleanup, /isTexture[\s\S]*\.dispose\(\)/);
  assert.match(cleanup, /shadow\?\.dispose\(\)/);
  assert.match(cleanup, /composer\?\.passes[\s\S]*pass\.dispose\(\)/);
  assert.match(cleanup, /envTarget\.dispose\(\)/);
  assert.match(cleanup, /renderer\.forceContextLoss\(\)/);
});
