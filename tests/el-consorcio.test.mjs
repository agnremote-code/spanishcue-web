// El consorcio (ID 245, /el-consorcio): one evening in a Buenos Aires
// apartment building, from 18:00 to the 21:00 meeting on the terrace. Nine
// floors, 18 circles, 17 neighbours who all talk, a listening per circle, A0–C2.
import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { BUILDING, CAST, LEVEL_IDS, STORY, STORY_IDS, clipboard, eveningClock } from '../app/el-consorcio/story.mjs';
import { CONTENT } from '../app/el-consorcio/levels.mjs';
import { LEVELS } from '../app/el-consorcio/levels-info.mjs';
import * as L from '../app/el-consorcio/layout.mjs';
import { choose, closeScene, createState, doneFor, openScene, progress, restore, sceneView, serialise, setFloor, setLevel, undo, vecinoById } from '../app/el-consorcio/engine.mjs';
import { VECINOS } from '../app/el-consorcio/vecinos.mjs';
import { GAMES, listeningFor } from '../app/escucha-3d/games.mjs';
import { checkLevel } from '../scripts/check-consorcio.mjs';
import { scanSource } from '../scripts/neutral-spanish.mjs';

const listening = (level) => JSON.parse(readFileSync(`app/escucha-3d/content/consorcio/${level.toLowerCase()}.json`, 'utf8'));
const words = (text) => (String(text).match(/[\p{L}\p{N}]+/gu) ?? []).length;

test('nine floors, 18 circles, every circle in a real sector and reachable on foot', () => {
  assert.deepEqual(L.FLOORS.map(f => f.name), ['Planta baja', '1.° piso', '2.° piso', '3.° piso', '4.° piso', '5.° piso', '6.° piso', '7.° piso', 'Terraza']);
  assert.equal(L.SCENES.length, 18);
  assert.deepEqual(L.SCENES.map(s => s.id).sort(), [...STORY_IDS].sort());
  for (const s of L.SCENES) {
    assert.ok(L.sectorAt(s.floor, s.spot.x, s.spot.z), `${s.id} stands in a sector`);
    assert.equal(L.spotAt(s.floor, s.spot.x, s.spot.z), s.id);
  }
  for (const f of L.FLOORS) {
    const R = 0.35, step = 0.25, b = f.bounds;
    const crowd = (L.CROWD[f.id] ?? []).filter(c => !c.lying).map(c => ({ x0: c.x - 0.27, x1: c.x + 0.27, z0: c.z - 0.27, z1: c.z + 0.27 }));
    const all = [...L.solidsFor(f.id), ...crowd];
    const free = (x, z) => x > b.minX + R && x < b.maxX - R && z > b.minZ + R && z < b.maxZ - R && !all.some(s => x > s.x0 - R && x < s.x1 + R && z > s.z0 - R && z < s.z1 + R);
    const start = f.id === L.SPAWN.floor ? L.SPAWN : L.ELEVATOR_ARRIVAL;
    const key = (i, j) => `${i},${j}`;
    const first = [Math.round(start.x / step), Math.round(start.z / step)];
    const seen = new Set([key(...first)]); const queue = [first];
    while (queue.length) { const [i, j] = queue.pop(); for (const [di, dj] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) { const a = i + di, c = j + dj, k = key(a, c); if (seen.has(k) || !free(a * step, c * step)) continue; seen.add(k); queue.push([a, c]); } }
    const reach = (x, z) => seen.has(key(Math.round(x / step), Math.round(z / step)));
    for (const s of L.SCENES.filter(s => s.floor === f.id)) assert.ok(reach(s.spot.x, s.spot.z), `${s.id} reachable`);
    assert.ok(reach(L.ELEVATOR_ARRIVAL.x, L.ELEVATOR_ARRIVAL.z), `elevator reachable on floor ${f.id}`);
    assert.ok(reach(L.STAIRS_ARRIVAL.x, L.STAIRS_ARRIVAL.z), `stairs reachable on floor ${f.id}`);
  }
});

test('the cast: one distinct regional neural voice each, at least eight countries', () => {
  const voices = Object.values(CAST).map(c => c.voice);
  assert.equal(new Set(voices).size, voices.length);
  assert.ok(new Set(Object.values(CAST).map(c => c.country)).size >= 8);
  for (const s of STORY) for (const id of s.cast) assert.ok(CAST[id], `${s.id}: ${id} is cast`);
});

test('conversation: 18 scenes × 7 levels pass the checker (3 answers, consequence, 5 questions)', () => {
  assert.deepEqual(LEVELS.map(l => l.id), LEVEL_IDS);
  for (const level of LEVEL_IDS) assert.deepEqual(checkLevel(level, CONTENT[level]), [], level);
  const first = new Set(LEVEL_IDS.map(level => JSON.stringify(CONTENT[level].llegada.talk)));
  assert.equal(first.size, LEVEL_IDS.length, 'every level writes its own questions');
  for (const level of LEVEL_IDS) {
    const source = readFileSync(`app/el-consorcio/levels/${level.toLowerCase()}.mjs`, 'utf8');
    assert.deepEqual(scanSource(source, level), [], `${level} is neutral Spanish with tú`);
  }
});

test('everyone you can see in the building has a conversation at three levels', () => {
  const keys = Object.entries(L.CROWD).flatMap(([floor, list]) => list.map((_, i) => `${floor}-${i}`));
  assert.deepEqual(Object.keys(VECINOS).sort(), keys.sort());
  assert.equal(new Set(Object.values(VECINOS).map(p => p.name)).size, keys.length, 'every neighbour has their own name');
  for (const [key, p] of Object.entries(VECINOS)) {
    assert.ok(p.who.es && p.who.en && p.basic.es && p.basic.en, `${key} basic is bilingual`);
    assert.ok(words(p.basic.es) <= 45 && words(p.mid) >= 40 && words(p.high) >= 60, `${key} lengths`);
    for (const ask of [p.basicAsk.es, p.midAsk, p.highAsk]) assert.match(ask, /\?\s*$/);
    assert.equal(vecinoById(key), p);
  }
  assert.deepEqual(scanSource(readFileSync('app/el-consorcio/vecinos.mjs', 'utf8'), 'vecinos'), []);
});

test('listening: 18 own listenings × 7 levels with cast voices, A0 bilingual', () => {
  assert.deepEqual(GAMES.consorcio.spots, STORY_IDS);
  assert.deepEqual(GAMES.consorcio.levels, LEVEL_IDS);
  assert.equal(GAMES.consorcio.ownListening, true);
  const titles = new Set();
  for (const level of LEVEL_IDS) {
    const file = listening(level);
    assert.equal(file.game, 'consorcio'); assert.equal(file.level, level);
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
  const built = Object.keys(manifest.clips).filter(k => k.startsWith('consorcio/'));
  if (!built.length) return; // the GitHub Action has not produced them yet; tests/escucha-3d.test.mjs requires them
  assert.equal(built.length, 18 * LEVEL_IDS.length);
  const files = new Set(readdirSync('public/audio/escucha-3d'));
  for (const key of built) assert.ok(files.has(manifest.clips[key].src.split('/').pop()), `${key} file exists`);
});

test('the evening: the clock runs from 18:00 to 21:00 and the clipboard follows the quorum', () => {
  assert.equal(eveningClock(0), '18:00');
  assert.equal(eveningClock(STORY_IDS.length), '21:00');
  assert.equal(clipboard([]).state, 'juntando');
  assert.equal(clipboard([]).units, 0);
  const many = STORY_IDS.filter(id => id !== 'asamblea');
  assert.equal(clipboard(many).state, 'quorum');
  assert.ok(clipboard(many).units >= BUILDING.quorum);
  assert.equal(clipboard(['asamblea']).state, 'votado');
  assert.equal(clipboard(['asamblea']).label, 'Acta firmada');
});

test('engine: choose, consequence, undo, floors and saved progress', () => {
  let s = createState('B1');
  s = openScene(s, 'buzones');
  assert.equal(s.floor, 0);
  let v = sceneView(s);
  assert.equal(v.options.length, 3); assert.equal(v.talk.length, 5); assert.equal(v.ended, false);
  s = choose(s, 1);
  v = sceneView(s);
  assert.ok(v.ended && v.mood);
  assert.deepEqual(doneFor(s), ['buzones']);
  s = undo(s); assert.equal(sceneView(s).ended, false);
  s = closeScene(choose(s, 0));
  assert.equal(progress(s).done, 1); assert.equal(progress(s).total, 18);
  s = setFloor(s, 8); assert.equal(s.floor, 8);
  s = setLevel(s, 'A0');
  assert.equal(typeof sceneView(openScene(s, 'sogas')).title.en, 'string', 'A0 is bilingual');
  const back = restore(serialise(s));
  assert.equal(back.level, 'A0'); assert.deepEqual(back.done.B1, ['buzones']);
});

test('PRO by default: route, catalog, cover, preview, shared engine and no browser speech', () => {
  const catalog = readFileSync('app/lesson-catalog.ts', 'utf8');
  assert.match(catalog, /\{id:245,[^\n]*levels:\["A0","A1","A2","B1","B2","C1","C2"\],displayLevel:"A0–C2"[^\n]*path:"\/el-consorcio"/);
  assert.doesNotMatch(readFileSync('app/access-policy.ts', 'utf8'), /245|el-consorcio/);
  assert.match(readFileSync('app/el-consorcio/layout.tsx', 'utf8'), /canonical:"https:\/\/spanishcue\.com\/el-consorcio"/);
  const cover = readFileSync('public/el-consorcio/cover.webp');
  assert.equal(cover.toString('ascii', 0, 4), 'RIFF');
  assert.equal(cover.toString('ascii', 8, 16), 'WEBPVP8 ');
  assert.deepEqual([cover.readUInt16LE(26) & 0x3fff, cover.readUInt16LE(28) & 0x3fff], [1200, 750]);
  assert.ok(existsSync('public/conversation-previews/245.mp4'));
  const game = readFileSync('app/el-consorcio/ConsorcioGame.tsx', 'utf8');
  assert.match(game, /<ListeningCard game="consorcio"/);
  assert.match(game, /MusicVolume/, 'the shared music volume slider');
  assert.match(game, /import\(['"]\.\/World3D['"]\)/);
  assert.doesNotMatch(game, /from ['"]three['"]/);
  const world = readFileSync('app/el-consorcio/World3D.tsx', 'utf8');
  assert.match(world, /from '\.\.\/noche-abierta\/hero3d'/);
  assert.match(world, /from '\.\.\/noche-abierta\/world3d\.mjs'/);
  for (const file of readdirSync('app/el-consorcio').filter(f => /\.(tsx?|mjs)$/.test(f))) {
    const source = readFileSync(`app/el-consorcio/${file}`, 'utf8');
    assert.doesNotMatch(source, /speechSynthesis|SpeechSynthesisUtterance/, `${file} uses no browser speech`);
    assert.doesNotMatch(source, /https?:\/\/(?!spanishcue\.com)/, `${file} loads nothing from the network`);
  }
});

// Seats whose body reaches the floor all the way to the front edge: whoever
// sits there must have their shins in front of it, not through it.
const SEAT_DEPTH = { armchair: d => d, sofa: d => d, gamingchair: () => 0.5 };
test('nobody inside anything: seated people sit at the front of the seat, the patient lies on the divan (Ale, 2026-10-31)', () => {
  const building = readFileSync('app/el-consorcio/edificio3d.ts', 'utf8');
  assert.match(building, /person\.root\.userData\.person = true/, 'people are tagged for the per-vertex browser check');
  assert.match(readFileSync('app/el-consorcio/edificio-items.ts', 'utf8'), /The cable they hang from/, 'the terrace lights hang from a cable, not from the air');
  let seated = 0;
  for (const s of L.SCENES) for (const p of [s.npc, ...(s.extras ?? [])]) {
    if (!p.seat) continue;
    const seat = (L.FURNITURE[s.floor] ?? []).find(f => SEAT_DEPTH[f.type] && Math.abs(f.x - p.x) < 0.8 && Math.abs(f.z - p.z) < 0.8);
    if (!seat) continue;
    seated++;
    const r = (seat.rot ?? 0) * Math.PI / 2, fx = Math.sin(r), fz = Math.cos(r);
    assert.ok(Math.sin(p.heading) * fx + Math.cos(p.heading) * fz > 0.9, `${s.id} faces the way the ${seat.type} faces`);
    const ahead = (p.x - seat.x) * fx + (p.z - seat.z) * fz;
    assert.ok(ahead >= SEAT_DEPTH[seat.type](seat.d) / 2 - 0.06, `${s.id}: shins clear of the ${seat.type} (${ahead.toFixed(2)})`);
  }
  assert.ok(seated >= 4, 'Marta, Pocha, Yuliana and Aurelio are checked');
  const consultorio = L.SCENES.find(s => s.id === 'consultorio');
  const federico = consultorio.extras.find(p => p.lying);
  const divan = L.FURNITURE[1].find(f => f.type === 'divan');
  assert.ok(federico.z - 1.0 >= divan.z - divan.d / 2 + 0.2, 'his head rests in front of the head rest, not inside it');
  assert.ok(federico.z + 0.9 <= divan.z + divan.d / 2 + 0.15, 'and his feet stay on the divan');
});

test('unmount frees the GPU: texture slots, shadow map, bloom targets, the PMREM target and the WebGL context', () => {
  const world = readFileSync('app/el-consorcio/World3D.tsx', 'utf8');
  const cleanup = world.slice(world.indexOf('disposed = true;'));
  assert.match(cleanup, /isTexture[\s\S]*\.dispose\(\)/);
  assert.match(cleanup, /shadow\?\.dispose\(\)/);
  assert.match(cleanup, /composer\?\.passes[\s\S]*pass\.dispose\(\)/);
  assert.match(cleanup, /envTarget\.dispose\(\)/);
  assert.match(cleanup, /renderer\.forceContextLoss\(\)/);
});
