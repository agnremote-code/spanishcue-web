// La boda (ID 257, /la-boda): a wedding at an estancia in San Antonio de
// Areco, from the ceremony at sunset to the toast at midnight and dawn. One
// open-air world, 18 circles, 17 guests who all talk, a listening per circle,
// A0–C2. Every answer writes a line of the toast you read at midnight.
import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { CAST, LEVEL_IDS, STORY, STORY_IDS, TOAST, TOAST_IDS, WEDDING, nightClock, nightPhase, toastNotes } from '../app/la-boda/story.mjs';
import { CONTENT } from '../app/la-boda/levels.mjs';
import { LEVELS } from '../app/la-boda/levels-info.mjs';
import * as L from '../app/la-boda/layout.mjs';
import { choose, closeScene, createState, doneFor, invitadoById, notesFor, openScene, progress, restore, sceneView, serialise, setLevel, undo } from '../app/la-boda/engine.mjs';
import { INVITADOS } from '../app/la-boda/invitados.mjs';
import { GAMES, listeningFor } from '../app/escucha-3d/games.mjs';
import { checkLevel } from '../scripts/check-boda.mjs';
import { scanSource } from '../scripts/neutral-spanish.mjs';

const listening = (level) => JSON.parse(readFileSync(`app/escucha-3d/content/boda/${level.toLowerCase()}.json`, 'utf8'));
const words = (text) => (String(text).match(/[\p{L}\p{N}]+/gu) ?? []).length;

test('one open-air estancia, 18 circles, every circle in a real place and reachable on foot from the gate', () => {
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
    assert.ok(L.sectorAt(s.spot.x, s.spot.z), `${s.id} stands in a sector`);
    assert.equal(L.spotAt(s.spot.x, s.spot.z), s.id);
    assert.ok(seen.has(key(Math.round(s.spot.x / step), Math.round(s.spot.z / step))), `${s.id} reachable from the gate`);
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
  const first = new Set(LEVEL_IDS.map(level => JSON.stringify(CONTENT[level].porton.talk)));
  assert.equal(first.size, LEVEL_IDS.length, 'every level writes its own questions');
  for (const level of LEVEL_IDS) {
    const source = readFileSync(`app/la-boda/levels/${level.toLowerCase()}.mjs`, 'utf8');
    assert.deepEqual(scanSource(source, level), [], `${level} is neutral Spanish with tú`);
  }
  assert.deepEqual(scanSource(readFileSync('app/la-boda/story.mjs', 'utf8'), 'story'), []);
});

test('everyone you can see at the party who stops still has a conversation at three levels', () => {
  assert.equal(L.CROWD.length, 17);
  assert.deepEqual(Object.keys(INVITADOS).sort(), L.CROWD.map((_, i) => String(i)).sort());
  assert.equal(new Set(Object.values(INVITADOS).map(p => p.name)).size, L.CROWD.length, 'every guest has their own name');
  for (const [key, p] of Object.entries(INVITADOS)) {
    assert.ok(p.who.es && p.who.en && p.basic.es && p.basic.en, `${key} basic is bilingual`);
    assert.ok(words(p.basic.es) <= 45 && words(p.mid) >= 40 && words(p.high) >= 60, `${key} lengths`);
    for (const ask of [p.basicAsk.es, p.midAsk, p.highAsk]) assert.match(ask, /\?\s*$/);
    assert.equal(invitadoById(key), p);
  }
  assert.deepEqual(scanSource(readFileSync('app/la-boda/invitados.mjs', 'utf8'), 'invitados'), []);
});

test('listening: 18 own listenings × 7 levels with cast voices, A0 bilingual', () => {
  assert.deepEqual(GAMES.boda.spots, STORY_IDS);
  assert.deepEqual(GAMES.boda.levels, LEVEL_IDS);
  assert.equal(GAMES.boda.ownListening, true);
  const titles = new Set();
  for (const level of LEVEL_IDS) {
    const file = listening(level);
    assert.equal(file.game, 'boda'); assert.equal(file.level, level);
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
  const built = Object.keys(manifest.clips).filter(k => k.startsWith('boda/'));
  if (!built.length) return; // the GitHub Action has not produced them yet; tests/escucha-3d.test.mjs requires them
  assert.equal(built.length, 18 * LEVEL_IDS.length);
  const files = new Set(readdirSync('public/audio/escucha-3d'));
  for (const key of built) assert.ok(files.has(manifest.clips[key].src.split('/').pop()), `${key} file exists`);
});

test('the night: the clock runs from 17:00 to midnight, the toast brings the dawn', () => {
  assert.equal(nightClock([]), '17:00');
  const before = STORY_IDS.filter(id => id !== 'brindis');
  assert.equal(nightClock(before), '00:00');
  assert.equal(nightClock([...before, 'brindis']), WEDDING.dawn);
  assert.equal(nightPhase([]), 0); assert.equal(nightPhase(before), 1); assert.equal(nightPhase(['brindis']), 2);
  assert.equal(STORY_IDS.at(-1), 'brindis', 'the toast closes the night');
});

test('the toast: three notes per circle before midnight, one per answer, bilingual and written in the order played', () => {
  assert.deepEqual(TOAST_IDS.slice().sort(), STORY_IDS.filter(id => id !== 'brindis').sort());
  for (const id of TOAST_IDS) {
    assert.equal(TOAST[id].length, 3, id);
    for (const n of TOAST[id]) assert.ok(n.es && n.en && n.es.startsWith('Por '), `${id}: «${n.es}»`);
    assert.equal(new Set(TOAST[id].map(n => n.es)).size, 3, `${id}: three different notes`);
  }
  assert.deepEqual(toastNotes(['muelle', 'porton'], { porton: 1, muelle: 0 }).map(n => n.id), ['muelle', 'porton']);
  assert.deepEqual(toastNotes(['porton'], {}), [], 'no answer, no note');
});

test('engine: choose, note, undo, saved picks and the toast read back at midnight', () => {
  let s = createState('B1');
  s = openScene(s, 'porton');
  let v = sceneView(s);
  assert.equal(v.options.length, 3); assert.equal(v.talk.length, 5); assert.equal(v.ended, false);
  s = choose(s, 2);
  v = sceneView(s);
  assert.ok(v.ended && v.mood);
  assert.equal(v.note, TOAST.porton[2]);
  assert.deepEqual(doneFor(s), ['porton']);
  s = undo(s); assert.equal(sceneView(s).ended, false);
  s = closeScene(choose(s, 1));
  assert.equal(notesFor(s)[0].note, TOAST.porton[1], 'the card keeps the last answer');
  assert.equal(progress(s).done, 1); assert.equal(progress(s).total, 18);
  s = closeScene(choose(openScene(s, 'muelle'), 0));
  const toast = sceneView(choose(openScene(s, 'brindis'), 0)).toast;
  assert.deepEqual(toast, [TOAST.porton[1], TOAST.muelle[0]]);
  const back = restore(serialise(s));
  assert.deepEqual(back.done.B1, ['porton', 'muelle']); assert.equal(back.picks.B1.porton, 1);
  s = setLevel(s, 'A0');
  assert.equal(typeof sceneView(openScene(s, 'porton')).title.en, 'string', 'A0 is bilingual');
  assert.deepEqual(doneFor(s), [], 'each level keeps its own night');
});

test('PRO by default: route, catalog, cover, preview, shared engine and no browser speech', () => {
  const catalog = readFileSync('app/lesson-catalog.ts', 'utf8');
  assert.match(catalog, /\{id:257,[^\n]*levels:\["A0","A1","A2","B1","B2","C1","C2"\],displayLevel:"A0–C2"[^\n]*path:"\/la-boda"/);
  assert.doesNotMatch(readFileSync('app/access-policy.ts', 'utf8'), /\b257\b|la-boda/);
  assert.match(readFileSync('app/la-boda/layout.tsx', 'utf8'), /canonical:"https:\/\/spanishcue\.com\/la-boda"/);
  const cover = readFileSync('public/la-boda/portada.webp');
  assert.equal(cover.toString('ascii', 0, 4), 'RIFF');
  assert.equal(cover.toString('ascii', 8, 16), 'WEBPVP8 ');
  assert.deepEqual([cover.readUInt16LE(26) & 0x3fff, cover.readUInt16LE(28) & 0x3fff], [1200, 750]);
  assert.ok(existsSync('public/conversation-previews/257.mp4'));
  const game = readFileSync('app/la-boda/BodaGame.tsx', 'utf8');
  assert.match(game, /<ListeningCard game="boda"/);
  assert.match(game, /MusicVolume/, 'the shared music volume slider');
  assert.match(game, /import\(['"]\.\/World3D['"]\)/);
  assert.doesNotMatch(game, /from ['"]three['"]/);
  const world = readFileSync('app/la-boda/World3D.tsx', 'utf8');
  assert.match(world, /from '\.\.\/noche-abierta\/hero3d'/);
  assert.match(world, /from '\.\.\/noche-abierta\/world3d\.mjs'/);
  for (const file of readdirSync('app/la-boda').filter(f => /\.(tsx?|mjs)$/.test(f))) {
    const source = readFileSync(`app/la-boda/${file}`, 'utf8');
    assert.doesNotMatch(source, /speechSynthesis|SpeechSynthesisUtterance/, `${file} uses no browser speech`);
    assert.doesNotMatch(source, /https?:\/\/(?!spanishcue\.com)/, `${file} loads nothing from the network`);
  }
});

test('nobody inside anything: everyone seated sits on a chair, a pew, the rocker or the bench, facing the right way', () => {
  assert.match(readFileSync('app/la-boda/estancia3d.ts', 'utf8'), /person\.root\.userData\.person = true/, 'people are tagged for the per-vertex browser check');
  assert.match(readFileSync('app/la-boda/estancia-items.ts', 'utf8'), /stringOfBulbs[\s\S]*sag/, 'the string lights hang from a sagging cable between poles');
  const facing = (p, x, z) => { const dx = x - p.x, dz = z - p.z, d = Math.hypot(dx, dz) || 1; return (Math.sin(p.heading) * dx + Math.cos(p.heading) * dz) / d; };
  const seated = [...L.CROWD, ...L.FILLERS, ...L.SCENES.flatMap(s => [s.npc, ...(s.extras ?? [])])].filter(p => p.seat);
  assert.ok(seated.length >= 15);
  for (const p of seated) {
    const where = `(${p.x.toFixed(2)}, ${p.z.toFixed(2)})`;
    const row = L.FURNITURE.find(f => f.type === 'chairs' && Math.abs(p.x - f.x) <= f.w / 2 && Math.abs(p.z - f.z) <= f.d / 2 + 0.05);
    const round = L.ROUND.find(t => Math.abs(Math.hypot(p.x - t.x, p.z - t.z) - L.SEAT_R) < 0.05);
    const pew = L.FURNITURE.find(f => f.type === 'pew' && Math.abs(p.x - f.x) <= f.w / 2 && Math.abs(p.z - f.z) <= f.d / 2 + 0.05);
    const other = L.FURNITURE.find(f => (f.type === 'rocker' || f.type === 'bench') && Math.hypot(p.x - f.x, p.z - f.z) < 0.6);
    assert.ok(row || round || pew || other, `${where} sits on something`);
    if (row) { const table = L.TABLES.find(t => Math.abs(t.z - p.z) < 1.2); assert.ok(facing(p, p.x, table.z) > 0.9, `${where} faces the long table`); assert.ok(Math.abs(row.z - table.z) - Math.abs(p.z - table.z) >= 0.2, `${where} sits on the front half of the chair, shins clear of it`); }
    if (round) { assert.ok(facing(p, round.x, round.z) > 0.9, `${where} faces the round table`); assert.ok(1.2 - L.SEAT_R >= 0.2, 'round-table guests sit on the front half of the chair'); }
    if (pew) { assert.ok(facing(p, -26, 9.2) > 0.5, `${where} faces the altar`); assert.ok(pew.z - p.z >= 0.25, `${where} sits at the front of the pew`); }
  }
});

test('unmount frees the GPU: texture slots, shadow map, bloom targets, the PMREM target and the WebGL context', () => {
  const world = readFileSync('app/la-boda/World3D.tsx', 'utf8');
  const cleanup = world.slice(world.indexOf('disposed = true;'));
  assert.match(cleanup, /isTexture[\s\S]*\.dispose\(\)/);
  assert.match(cleanup, /shadow\?\.dispose\(\)/);
  assert.match(cleanup, /composer\?\.passes[\s\S]*pass\.dispose\(\)/);
  assert.match(cleanup, /envTarget\.dispose\(\)/);
  assert.match(cleanup, /renderer\.forceContextLoss\(\)/);
});
