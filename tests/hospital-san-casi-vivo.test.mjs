import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { CAST, LEVEL_IDS, STORY, STORY_IDS } from '../app/hospital-san-casi-vivo/story.mjs';
import { CONTENT, LEVELS } from '../app/hospital-san-casi-vivo/levels.mjs';
import * as L from '../app/hospital-san-casi-vivo/layout.mjs';
import { choose, closeScene, createState, doneFor, openScene, progress, restore, sceneView, serialise, setFloor, setLevel, undo } from '../app/hospital-san-casi-vivo/engine.mjs';
import { GAMES, listeningFor } from '../app/escucha-3d/games.mjs';
import { checkLevel } from '../scripts/check-hospital.mjs';

const listening = (level) => JSON.parse(readFileSync(`app/escucha-3d/content/hospital/${level.toLowerCase()}.json`, 'utf8'));

test('twenty sectors and 21 circles, every circle in a real sector', () => {
  const required = ['recepcion', 'espera', 'triage', 'guardia', 'ambulancias', 'trauma', 'observacion', 'curaciones', 'laboratorio', 'radiologia', 'internacion', 'habitaciones', 'uci', 'quirofanos', 'enfermeria', 'nucleo', 'cafeteria', 'descanso', 'facturacion', 'morgue'];
  const ids = new Set(L.SECTORS.map(s => s.id));
  for (const id of required) assert.ok(ids.has(id), `sector ${id}`);
  assert.equal(STORY.length, 21);
  assert.deepEqual(L.SCENE_IDS, STORY_IDS);
  for (const s of L.SCENES) {
    assert.ok(L.sectorAt(s.floor, s.spot.x, s.spot.z), `${s.id} spot inside a sector`);
    assert.equal(L.spotAt(s.floor, s.spot.x, s.spot.z), s.id, `${s.id} circle answers at its spot`);
  }
});

test('every circle, the elevator and the stairs can be reached on foot', () => {
  const R = 0.35, step = 0.5;
  for (const f of L.FLOORS) {
    const solids = L.solidsFor(f.id), b = f.bounds;
    const free = (x, z) => x > b.minX + R && x < b.maxX - R && z > b.minZ + R && z < b.maxZ - R && !solids.some(s => x > s.x0 - R && x < s.x1 + R && z > s.z0 - R && z < s.z1 + R);
    const start = f.id === 1 ? L.SPAWN : L.ELEVATOR_ARRIVAL;
    assert.ok(free(start.x, start.z), `floor ${f.id} start is free`);
    const key = (i, j) => `${i},${j}`;
    const first = [Math.round(start.x / step), Math.round(start.z / step)];
    const seen = new Set([key(...first)]); const queue = [first];
    while (queue.length) {
      const [i, j] = queue.pop();
      for (const [di, dj] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
        const a = i + di, c = j + dj, k = key(a, c);
        if (seen.has(k) || !free(a * step, c * step)) continue;
        seen.add(k); queue.push([a, c]);
      }
    }
    const reach = (x, z) => seen.has(key(Math.round(x / step), Math.round(z / step)));
    for (const s of L.SCENES.filter(s => s.floor === f.id)) assert.ok(reach(s.spot.x, s.spot.z), `${s.id} reachable`);
    assert.ok(reach(L.ELEVATOR.x, L.ELEVATOR.z + 2.2), `elevator on floor ${f.id}`);
    assert.ok(reach(L.STAIRS.x, L.STAIRS.z), `stairs on floor ${f.id}`);
    assert.ok(L.atElevator(L.ELEVATOR.x, L.ELEVATOR.z + 2.2) && L.atStairs(L.STAIRS.x, L.STAIRS.z));
  }
});

test('people move: walkers follow loops and doors exist on every floor', () => {
  for (const f of L.FLOORS) {
    assert.ok((L.WALKERS[f.id] ?? []).length >= 2, `walkers on floor ${f.id}`);
    assert.ok((L.DOORS[f.id] ?? []).length >= 1, `doors on floor ${f.id}`);
    for (const w of L.WALKERS[f.id]) {
      const a = L.walkerAt(w, 0), b = L.walkerAt(w, 7.3);
      assert.ok(Number.isFinite(a.x) && Number.isFinite(b.z));
    }
  }
  assert.ok(L.ANNOUNCEMENTS.length >= 6);
});

test('the cast: 43 characters, one distinct regional neural voice each', () => {
  const voices = Object.values(CAST).map(c => c.voice);
  assert.equal(new Set(voices).size, voices.length, 'no two characters share a voice');
  for (const [id, c] of Object.entries(CAST)) {
    assert.match(c.voice, /^es-[A-Z]{2}-[A-Za-z]+Neural$/, `${id} voice`);
    assert.ok(c.country && c.name && c.full && c.role, `${id} data`);
  }
  for (const s of STORY) for (const id of s.cast) assert.ok(CAST[id], `${s.id} cast ${id}`);
  const countries = new Set(voices.map(v => v.slice(3, 5)));
  for (const cc of ['AR', 'ES', 'MX', 'CO', 'CL', 'PE', 'UY', 'CU', 'DO', 'PR']) assert.ok(countries.has(cc), `a ${cc} voice`);
});

test('conversation: 21 scenes × 7 levels pass the checker (3 answers, consequence, 5 questions)', () => {
  assert.deepEqual(LEVELS.map(l => l.id), LEVEL_IDS);
  for (const level of LEVEL_IDS) assert.deepEqual(checkLevel(level, CONTENT[level]), [], level);
  const firstQuestions = new Set(LEVEL_IDS.map(level => JSON.stringify(CONTENT[level].recepcion.talk)));
  assert.equal(firstQuestions.size, LEVEL_IDS.length, 'every level writes its own questions');
});

test('listening: 21 own listenings × 7 levels with cast voices', () => {
  assert.deepEqual(GAMES.hospital.spots, STORY_IDS);
  assert.deepEqual(GAMES.hospital.levels, LEVEL_IDS);
  assert.equal(GAMES.hospital.ownListening, true);
  for (const level of LEVEL_IDS) {
    const file = listening(level);
    assert.equal(file.game, 'hospital'); assert.equal(file.level, level);
    assert.deepEqual(file.items.map(i => i.id), STORY_IDS, level);
    for (const item of file.items) {
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
  const built = Object.keys(manifest.clips).filter(k => k.startsWith('hospital/'));
  if (!built.length) return; // the GitHub Action has not produced them yet; tests/escucha-3d.test.mjs requires them
  assert.equal(built.length, 21 * LEVEL_IDS.length);
  const files = new Set(readdirSync('public/audio/escucha-3d'));
  for (const key of built) {
    const clip = manifest.clips[key];
    assert.ok(files.has(clip.src.split('/').pop()), `${key} file exists`);
    assert.ok(clip.seconds > 8, `${key} has real length`);
  }
});

test('engine: choose, consequence, undo, floors and saved progress', () => {
  let s = createState('B1');
  s = openScene(s, 'morgue');
  assert.equal(s.floor, 0);
  let v = sceneView(s);
  assert.equal(v.options.length, 3); assert.equal(v.talk.length, 5); assert.equal(v.ended, false);
  s = choose(s, 2);
  v = sceneView(s);
  assert.ok(v.ended && v.chosen && v.mood);
  assert.deepEqual(doneFor(s), ['morgue']);
  s = undo(s); assert.equal(sceneView(s).ended, false);
  s = closeScene(choose(s, 0));
  assert.equal(progress(s).done, 1); assert.equal(progress(s).total, 21);
  s = setFloor(s, 3); assert.equal(s.floor, 3);
  s = setLevel(s, 'A0');
  assert.equal(typeof sceneView(openScene(s, 'uci')).title.en, 'string', 'A0 is bilingual');
  const back = restore(serialise(s));
  assert.equal(back.level, 'A0'); assert.deepEqual(back.done.B1, ['morgue']);
});

test('route, catalog, shared engine and no browser speech', () => {
  const catalog = readFileSync('app/lesson-catalog.ts', 'utf8');
  assert.match(catalog, /\{id:240,[^\n]*path:"\/hospital-san-casi-vivo"/);
  assert.ok(existsSync('app/hospital-san-casi-vivo/page.tsx'));
  assert.match(readFileSync('app/hospital-san-casi-vivo/layout.tsx', 'utf8'), /canonical:"https:\/\/spanishcue\.com\/hospital-san-casi-vivo"/);
  const game = readFileSync('app/hospital-san-casi-vivo/HospitalGame.tsx', 'utf8');
  assert.match(game, /<ListeningCard game="hospital"/);
  assert.match(game, /from '\.\.\/escucha-3d\/Escucha'/);
  const world = readFileSync('app/hospital-san-casi-vivo/World3D.tsx', 'utf8');
  assert.match(world, /from '\.\.\/noche-abierta\/hero3d'/);
  assert.match(world, /from '\.\.\/noche-abierta\/world3d\.mjs'/);
  for (const file of readdirSync('app/hospital-san-casi-vivo').filter(f => /\.(tsx?|mjs)$/.test(f))) {
    const source = readFileSync(`app/hospital-san-casi-vivo/${file}`, 'utf8');
    assert.doesNotMatch(source, /speechSynthesis|SpeechSynthesisUtterance/, `${file} uses no browser speech`);
    assert.doesNotMatch(source, /https?:\/\/(?!spanishcue\.com)/, `${file} loads nothing from the network`);
  }
});
