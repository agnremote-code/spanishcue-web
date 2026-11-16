// La casa (ID 260, /la-casa-del-reality): one night inside the house of a
// reality show. The student walks in at the live gala as «la Sorpresa», the
// surprise contestant, and stays from 22:00 to the last confession at dawn.
// One house with a garden, 18 circles (three of them in the red armchair of
// the confessional), 17 housemates who all talk, a listening per circle,
// A0–C2. Every answer becomes a caption; at dawn La Voz shows the edit.
import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { CAST, CONFESSIONS, LEVEL_IDS, ROTULOS, ROTULO_IDS, SHOW, STORY, STORY_IDS, nightClock, nightPhase, rotulosFor } from '../app/la-casa-del-reality/story.mjs';
import { LOADERS, loadLevel } from '../app/la-casa-del-reality/levels.mjs';
import { LEVELS } from '../app/la-casa-del-reality/levels-info.mjs';
import * as L from '../app/la-casa-del-reality/layout.mjs';
import { captionsFor, choose, closeScene, createState, doneFor, invitadoById, openScene, progress, restore, sceneView, serialise, setLevel, undo } from '../app/la-casa-del-reality/engine.mjs';
import { INVITADOS } from '../app/la-casa-del-reality/invitados.mjs';
import { CASTS } from '../app/charlas-3d/mundos.mjs';
import { GAMES, listeningFor } from '../app/escucha-3d/games.mjs';
import { checkLevel } from '../scripts/check-la-casa-del-reality.mjs';
import { scanSource } from '../scripts/neutral-spanish.mjs';

const DIR = 'app/la-casa-del-reality';
const listening = (level) => JSON.parse(readFileSync(`app/escucha-3d/content/reality/${level.toLowerCase()}.json`, 'utf8'));
const words = (text) => (String(text).match(/[\p{L}\p{N}]+/gu) ?? []).length;
const CONTENT = Object.fromEntries(await Promise.all(LEVEL_IDS.map(async level => [level, await loadLevel(level)])));

test('one house with a garden, 18 circles, every circle in a real room and reachable on foot from the door', () => {
  assert.equal(L.SCENES.length, 18);
  assert.deepEqual(L.SCENES.map(s => s.id), STORY_IDS);
  const R = 0.35, step = 0.25, b = L.BOUNDS;
  const people = [...L.CROWD, ...L.FILLERS].map(c => ({ x0: c.x - 0.27, x1: c.x + 0.27, z0: c.z - 0.27, z1: c.z + 0.27 }));
  const all = [...L.solidsFor(), ...people];
  const free = (x, z) => x > b.minX + R && x < b.maxX - R && z > b.minZ + R && z < b.maxZ - R && !all.some(s => x > s.x0 - R && x < s.x1 + R && z > s.z0 - R && z < s.z1 + R);
  const key = (i, j) => `${i},${j}`;
  const first = [Math.round(L.SPAWN.x / step), Math.round(L.SPAWN.z / step)];
  const seen = new Set([key(...first)]); const queue = [first];
  while (queue.length) { const [i, j] = queue.pop(); for (const [di, dj] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) { const a = i + di, c = j + dj, k = key(a, c); if (seen.has(k) || !free(a * step, c * step)) continue; seen.add(k); queue.push([a, c]); } }
  for (const s of L.SCENES) {
    assert.ok(L.sectorAt(s.spot.x, s.spot.z), `${s.id} stands in a room`);
    assert.ok(seen.has(key(Math.round(s.spot.x / step), Math.round(s.spot.z / step))), `${s.id} reachable from the door`);
  }
  // Each circle opens its own scene; the red armchair opens the next confession you have not played.
  for (const spot of L.SPOTS) assert.equal(L.spotAt(spot.x, spot.z), spot.ids[0]);
  const armchair = L.SPOTS.find(s => s.ids.includes('confesionario'));
  assert.deepEqual(armchair.ids, CONFESSIONS);
  assert.equal(L.spotAt(armchair.x, armchair.z, ['confesionario']), 'nominaciones');
  assert.equal(L.spotAt(armchair.x, armchair.z, ['confesionario', 'nominaciones']), 'veredicto');
  for (const id of CONFESSIONS) { const s = L.sceneById(id); assert.ok(s.voice && s.look === null, `${id}: La Voz is heard, never seen`); }
});

test('the cast: one distinct regional neural voice each, at least eight countries', () => {
  const voices = Object.values(CAST).map(c => c.voice);
  assert.equal(new Set(voices).size, voices.length);
  assert.ok(new Set(Object.values(CAST).map(c => c.country)).size >= 8);
  for (const s of STORY) for (const id of s.cast) assert.ok(CAST[id], `${s.id}: ${id} is cast`);
});

test('conversation: 18 scenes × 7 levels pass the checker (3 answers, consequence, 5 questions), loaded on demand', () => {
  assert.deepEqual(LEVELS.map(l => l.id), LEVEL_IDS);
  assert.deepEqual(Object.keys(LOADERS), LEVEL_IDS);
  for (const level of LEVEL_IDS) assert.deepEqual(checkLevel(level, CONTENT[level]), [], level);
  const first = new Set(LEVEL_IDS.map(level => JSON.stringify(CONTENT[level].entrada.talk)));
  assert.equal(first.size, LEVEL_IDS.length, 'every level writes its own questions');
  for (const level of LEVEL_IDS) {
    const source = readFileSync(`${DIR}/levels/${level.toLowerCase()}.mjs`, 'utf8');
    assert.deepEqual(scanSource(source, level), [], `${level} is neutral Spanish with tú`);
  }
  for (const file of ['story.mjs', 'layout.mjs', 'invitados.mjs']) assert.deepEqual(scanSource(readFileSync(`${DIR}/${file}`, 'utf8'), file), []);
  const game = readFileSync(`${DIR}/RealityGame.tsx`, 'utf8');
  assert.match(game, /loadLevel\(state\.level\)/, 'the scene texts load with import()');
  assert.doesNotMatch(game, /from '\.\/levels\/[a-c][0-2]\.mjs'/, 'no level is bundled eagerly');
});

test('everyone you can see in the house who stops still has a conversation at three levels', () => {
  assert.equal(L.CROWD.length, 17);
  assert.deepEqual(Object.keys(INVITADOS).sort(), L.CROWD.map((_, i) => String(i)).sort());
  assert.equal(new Set(Object.values(INVITADOS).map(p => p.name)).size, L.CROWD.length, 'every housemate has their own name');
  for (const [key, p] of Object.entries(INVITADOS)) {
    assert.ok(p.who.es && p.who.en && p.basic.es && p.basic.en, `${key} basic is bilingual`);
    assert.ok(words(p.basic.es) <= 45 && words(p.mid) >= 40 && words(p.high) >= 60, `${key} lengths`);
    for (const ask of [p.basicAsk.es, p.midAsk, p.highAsk]) assert.match(ask, /\?\s*$/);
    assert.equal(invitadoById(key), p);
  }
  assert.ok(CASTS.reality.length >= 8, 'the anonymous crew and fillers have charla roles of their own');
  const world = readFileSync(`${DIR}/World3D.tsx`, 'utf8');
  assert.match(world, /world: 'reality'/);
  assert.match(world, /LANDMARKS/, 'the landmarks have charla circles too');
});

test('listening: 18 own listenings × 7 levels with cast voices, A0 bilingual', () => {
  assert.deepEqual(GAMES.reality.spots, STORY_IDS);
  assert.deepEqual(GAMES.reality.levels, LEVEL_IDS);
  assert.equal(GAMES.reality.ownListening, true);
  const titles = new Set();
  for (const level of LEVEL_IDS) {
    const file = listening(level);
    assert.equal(file.game, 'reality'); assert.equal(file.level, level);
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
  const built = Object.keys(manifest.clips).filter(k => k.startsWith('reality/'));
  if (!built.length) return; // the GitHub Action has not produced them yet; tests/escucha-3d.test.mjs requires them
  const files = new Set(readdirSync('public/audio/escucha-3d'));
  for (const key of built) assert.ok(files.has(manifest.clips[key].src.split('/').pop()), `${key} file exists`);
});

test('the night: the clock runs from 22:00 to 05:30, the last confession closes the broadcast', () => {
  assert.equal(nightClock([]), '22:00');
  const before = STORY_IDS.filter(id => id !== 'veredicto');
  assert.equal(nightClock(before), '05:30');
  assert.equal(nightClock([...before, 'veredicto']), SHOW.end);
  assert.equal(nightPhase([]), 0); assert.equal(nightPhase(before), 1); assert.equal(nightPhase(['veredicto']), 2);
  assert.equal(STORY_IDS[0], 'entrada', 'the night starts at the door');
  assert.equal(STORY_IDS.at(-1), 'veredicto', 'the last confession closes the night');
});

test('captions: three per circle before dawn, one per answer, bilingual, never saying if the Sorpresa is a man or a woman', () => {
  assert.deepEqual(ROTULO_IDS.slice().sort(), STORY_IDS.filter(id => id !== 'veredicto').sort());
  for (const id of ROTULO_IDS) {
    assert.equal(ROTULOS[id].length, 3, id);
    for (const c of ROTULOS[id]) {
      assert.ok(c.es && c.en, id);
      assert.doesNotMatch(c.es, /\b(?:el|la) nuev[oa] concursante\b|\bconcursante nuev[oa]\b|\bsorprendid[oa]\b|\bsolo\b.*\bsorpresa\b/i, `${id}: «${c.es}»`);
      assert.doesNotMatch(c.en, /\bthe Surprise (?:\w+ ){0,4}(?:his|her|him|he|she)\b/i, `${id}: «${c.en}»`);
    }
    assert.equal(new Set(ROTULOS[id].map(c => c.es)).size, 3, `${id}: three different captions`);
  }
  assert.deepEqual(rotulosFor(['alianza', 'entrada'], { entrada: 1, alianza: 0 }).map(c => c.id), ['alianza', 'entrada']);
  assert.deepEqual(rotulosFor(['entrada'], {}), [], 'no answer, no caption');
});

test('engine: choose, caption, undo, saved picks and the edit read back at dawn', () => {
  const B1 = CONTENT.B1;
  let s = createState('B1');
  s = openScene(s, 'entrada');
  assert.equal(sceneView(s, null), null, 'nothing to show until the level has loaded');
  let v = sceneView(s, B1);
  assert.equal(v.options.length, 3); assert.equal(v.talk.length, 5); assert.equal(v.ended, false);
  s = choose(s, 2);
  v = sceneView(s, B1);
  assert.ok(v.ended && v.mood);
  assert.equal(v.caption, ROTULOS.entrada[2]);
  assert.deepEqual(doneFor(s), ['entrada']);
  s = undo(s); assert.equal(sceneView(s, B1).ended, false);
  s = closeScene(choose(s, 1));
  assert.equal(captionsFor(s)[0].caption, ROTULOS.entrada[1], 'the strip keeps the last answer');
  assert.equal(progress(s).done, 1); assert.equal(progress(s).total, 18);
  s = closeScene(choose(openScene(s, 'cocina'), 0));
  const edit = sceneView(choose(openScene(s, 'veredicto'), 0), B1).edit;
  assert.deepEqual(edit, [ROTULOS.entrada[1], ROTULOS.cocina[0]]);
  const back = restore(serialise(s));
  assert.deepEqual(back.done.B1, ['entrada', 'cocina']); assert.equal(back.picks.B1.entrada, 1);
  s = setLevel(s, 'A0');
  assert.equal(typeof sceneView(openScene(s, 'entrada'), CONTENT.A0).title.en, 'string', 'A0 is bilingual');
  assert.deepEqual(doneFor(s), [], 'each level keeps its own night');
});

test('PRO by default: route, catalog, cover, preview, shared engine, realistic look and no browser speech', () => {
  const catalog = readFileSync('app/lesson-catalog.ts', 'utf8');
  assert.match(catalog, /\{id:260,[^\n]*levels:\["A0","A1","A2","B1","B2","C1","C2"\],displayLevel:"A0–C2"[^\n]*path:"\/la-casa-del-reality"/);
  assert.doesNotMatch(readFileSync('app/access-policy.ts', 'utf8'), /\b260\b|la-casa-del-reality/);
  assert.match(readFileSync(`${DIR}/layout.tsx`, 'utf8'), /canonical:"https:\/\/spanishcue\.com\/la-casa-del-reality"/);
  assert.match(readFileSync('app/resource-seo.ts', 'utf8'), /\[260, "reality"\]/);
  const cover = readFileSync('public/la-casa-del-reality/portada.webp');
  assert.equal(cover.toString('ascii', 0, 4), 'RIFF');
  assert.equal(cover.toString('ascii', 8, 16), 'WEBPVP8 ');
  assert.deepEqual([cover.readUInt16LE(26) & 0x3fff, cover.readUInt16LE(28) & 0x3fff], [1200, 750]);
  assert.ok(cover.length < 120_000, 'cover under 120 KB');
  assert.ok(existsSync('public/conversation-previews/260.mp4'));
  assert.ok(readFileSync('public/conversation-previews/260.mp4').length < 400_000);
  const game = readFileSync(`${DIR}/RealityGame.tsx`, 'utf8');
  assert.match(game, /<ListeningCard game="reality"/);
  assert.match(game, /MusicVolume/, 'the shared music volume slider');
  assert.match(game, /import\(['"]\.\/World3D['"]\)/);
  assert.doesNotMatch(game, /from ['"]three['"]/);
  const world = readFileSync(`${DIR}/World3D.tsx`, 'utf8');
  assert.match(world, /from '\.\.\/noche-abierta\/hero3d'/);
  assert.match(world, /from '\.\.\/noche-abierta\/world3d\.mjs'/);
  assert.match(world, /enableRealPeople\(real\);\s*\n\s*try \{ building = buildCasa\(/, 'real people are switched on before anyone is built');
  assert.match(world, /realParam !== '0'/, '?real=0 turns the realistic look off');
  assert.match(world, /loadEnvironment\(renderer, scene, '[a-z_0-9]+\.hdr'/);
  const casa = readFileSync(`${DIR}/casa3d.ts`, 'utf8');
  assert.match(casa, /surface\('/); assert.match(casa, /fitSurfaces\(/);
  for (const file of readdirSync(DIR).filter(f => /\.(tsx?|mjs)$/.test(f))) {
    const source = readFileSync(`${DIR}/${file}`, 'utf8');
    assert.doesNotMatch(source, /speechSynthesis|SpeechSynthesisUtterance/, `${file} uses no browser speech`);
    assert.doesNotMatch(source, /https?:\/\/(?!spanishcue\.com)/, `${file} loads nothing from the network`);
  }
});

test('nobody inside anything: everyone seated sits on a seat, facing the way the seat faces', () => {
  assert.match(readFileSync(`${DIR}/casa3d.ts`, 'utf8'), /person\.root\.userData\.person = true/, 'people are tagged for the per-vertex browser check');
  const SEATS = new Set(['sofa', 'chairs', 'bed', 'lounger', 'stool', 'officechair', 'hammock', 'armchair', 'bench', 'makeupchair']);
  const FRONT = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  const seated = [...L.CROWD, ...L.FILLERS, ...L.SCENES.flatMap(s => [s.npc, ...(s.extras ?? [])])].filter(p => p.seat);
  assert.ok(seated.length >= 10);
  for (const p of seated) {
    const where = `(${p.x.toFixed(2)}, ${p.z.toFixed(2)})`;
    const seat = L.FURNITURE.filter(f => SEATS.has(f.type)).find(f => { const b = L.footprint(f); return p.x > b.x0 - 0.15 && p.x < b.x1 + 0.15 && p.z > b.z0 - 0.15 && p.z < b.z1 + 0.15; });
    assert.ok(seat, `${where} sits on something`);
    if (seat.type === 'sofa' || seat.type === 'chairs') {
      const [fx, fz] = FRONT[(seat.rot ?? 0) % 4];
      assert.ok(Math.sin(p.heading) * fx + Math.cos(p.heading) * fz > 0.9, `${where} faces the way the ${seat.type} faces`);
    }
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
  assert.match(cleanup, /charlas\.dispose\(\)/);
});
