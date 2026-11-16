// Último crucero (ID 261, /ultimo-crucero): the last night of the old liner
// Albatros, in a storm that grows circle by circle; tomorrow the passengers go
// ashore in Cádiz and the ship goes to the breakers. One ship in 3D, 18
// circles, 17 passengers who all talk, a listening per circle, A0–C2. Every
// answer writes a line of the last page of the logbook, read at dawn.
import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { BITACORA, BITACORA_IDS, CAST, LEVEL_IDS, SHIP, STORY, STORY_IDS, logLines, nightClock, stormPhase } from '../app/ultimo-crucero/story.mjs';
import { LEVELS, LOADERS, loadLevel } from '../app/ultimo-crucero/levels.mjs';
import * as L from '../app/ultimo-crucero/layout.mjs';
import { FINAL, STORAGE_KEY, choose, closeScene, createState, doneFor, invitadoById, logFor, openScene, progress, restore, sceneView, serialise, setLevel, undo } from '../app/ultimo-crucero/engine.mjs';
import { INVITADOS } from '../app/ultimo-crucero/invitados.mjs';
import { GAMES, listeningFor } from '../app/escucha-3d/games.mjs';
import { c1c2Overlap, checkLevel, choiceBalance } from '../scripts/check-crucero.mjs';
import { scanSource } from '../scripts/neutral-spanish.mjs';

const listening = (level) => JSON.parse(readFileSync(`app/escucha-3d/content/crucero/${level.toLowerCase()}.json`, 'utf8'));
const words = (text) => (String(text).match(/[\p{L}\p{N}]+/gu) ?? []).length;
const CONTENT = Object.fromEntries(await Promise.all(LEVEL_IDS.map(async (level) => [level, await loadLevel(level)])));

test('one ship, 18 circles, every circle in a real room and reachable on foot from the gangway', () => {
  assert.equal(L.SCENES.length, 18);
  assert.deepEqual(L.SCENES.map(s => s.id), STORY_IDS);
  const R = 0.35, step = 0.25, b = L.BOUNDS;
  const people = [...L.CROWD, ...L.FILLERS].map(c => ({ x0: c.x - 0.27, x1: c.x + 0.27, z0: c.z - 0.27, z1: c.z + 0.27 }));
  const all = [...L.solidsFor(), ...people];
  const free = (x, z) => x > b.minX + R && x < b.maxX - R && z > b.minZ + R && z < b.maxZ - R && Math.abs(x) < L.halfBeam(z) - R && !all.some(s => x > s.x0 - R && x < s.x1 + R && z > s.z0 - R && z < s.z1 + R);
  const key = (i, j) => `${i},${j}`;
  const first = [Math.round(L.SPAWN.x / step), Math.round(L.SPAWN.z / step)];
  const seen = new Set([key(...first)]); const queue = [first];
  while (queue.length) { const [i, j] = queue.pop(); for (const [di, dj] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) { const a = i + di, c = j + dj, k = key(a, c); if (seen.has(k) || !free(a * step, c * step)) continue; seen.add(k); queue.push([a, c]); } }
  for (const s of L.SCENES) {
    assert.ok(L.sectorAt(s.spot.x, s.spot.z), `${s.id} stands in a sector`);
    assert.equal(L.spotAt(s.spot.x, s.spot.z), s.id);
    assert.ok(seen.has(key(Math.round(s.spot.x / step), Math.round(s.spot.z / step))), `${s.id} reachable from the gangway`);
  }
  for (const id of ['puente', 'salon', 'maquinas', 'cocina', 'camarotes', 'botes']) assert.ok(L.SECTORS.some(s => s.id.startsWith(id) || s.name.toLowerCase().includes(id.slice(0, 5))), `the ship has its ${id}`);
});

test('the cast: one distinct regional neural voice each, at least twelve countries', () => {
  const voices = Object.values(CAST).map(c => c.voice);
  assert.equal(new Set(voices).size, voices.length);
  assert.ok(new Set(Object.values(CAST).map(c => c.country)).size >= 12);
  for (const s of STORY) for (const id of s.cast) assert.ok(CAST[id], `${s.id}: ${id} is cast`);
});

test('conversation: 18 scenes × 7 levels pass the checker, loaded one chunk per level', () => {
  assert.deepEqual(LEVELS.map(l => l.id), LEVEL_IDS);
  assert.deepEqual(Object.keys(LOADERS), LEVEL_IDS);
  for (const level of LEVEL_IDS) assert.deepEqual(checkLevel(level, CONTENT[level]), [], level);
  const first = new Set(LEVEL_IDS.map(level => JSON.stringify(CONTENT[level].popa.talk)));
  assert.equal(first.size, LEVEL_IDS.length, 'every level writes its own questions');
  for (const level of LEVEL_IDS) {
    const source = readFileSync(`app/ultimo-crucero/levels/${level.toLowerCase()}.mjs`, 'utf8');
    assert.deepEqual(scanSource(source, level), [], `${level} is neutral Spanish with tú`);
    assert.doesNotMatch(source, /(?<!\p{L})(?:vosotros|vosotras|sabéis|decís|tenéis|queréis|habéis|estáis)(?!\p{L})/iu, `${level} has no vosotros`);
  }
  assert.deepEqual(scanSource(readFileSync('app/ultimo-crucero/story.mjs', 'utf8'), 'story'), []);
  const game = readFileSync('app/ultimo-crucero/CruceroGame.tsx', 'utf8');
  assert.doesNotMatch(game, /from ['"]\.\/levels\/[a-c][0-2]\.mjs['"]/, 'the game never imports a level statically');
  assert.match(readFileSync('app/ultimo-crucero/levels.mjs', 'utf8'), /import\.meta\.env\?\.SSR \? \{\} :/, 'the server build gets no scenes');
  assert.deepEqual(c1c2Overlap(CONTENT.C1, CONTENT.C2), [], 'C2 asks its own questions, not C1 reworded');
});

test('everyone you can see on board who stops still has a conversation at three levels', () => {
  assert.equal(L.CROWD.length, 17);
  assert.deepEqual(Object.keys(INVITADOS).sort(), L.CROWD.map((_, i) => String(i)).sort());
  assert.equal(new Set(Object.values(INVITADOS).map(p => p.name)).size, L.CROWD.length, 'every passenger has their own name');
  for (const [key, p] of Object.entries(INVITADOS)) {
    assert.ok(p.who.es && p.who.en && p.basic.es && p.basic.en, `${key} basic is bilingual`);
    assert.ok(words(p.basic.es) <= 45 && words(p.mid) >= 40 && words(p.high) >= 60, `${key} lengths`);
    for (const ask of [p.basicAsk.es, p.midAsk, p.highAsk]) assert.match(ask, /\?\s*$/);
    assert.equal(invitadoById(key), p);
  }
  assert.deepEqual(scanSource(readFileSync('app/ultimo-crucero/invitados.mjs', 'utf8'), 'invitados'), []);
});

test('listening: 18 own listenings × 7 levels with cast voices, A0 bilingual, balanced choices', () => {
  assert.deepEqual(GAMES.crucero.spots, STORY_IDS);
  assert.deepEqual(GAMES.crucero.levels, LEVEL_IDS);
  assert.equal(GAMES.crucero.ownListening, true);
  const titles = new Set();
  for (const level of LEVEL_IDS) {
    const file = listening(level);
    assert.equal(file.game, 'crucero'); assert.equal(file.level, level);
    assert.deepEqual(file.items.map(i => i.id), STORY_IDS, level);
    assert.deepEqual(choiceBalance(level, file), [], level);
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
  const built = Object.keys(manifest.clips).filter(k => k.startsWith('crucero/'));
  if (!built.length) return; // the GitHub Action has not produced them yet; tests/escucha-3d.test.mjs requires them
  assert.equal(built.length, 18 * LEVEL_IDS.length);
  const files = new Set(readdirSync('public/audio/escucha-3d'));
  for (const key of built) assert.ok(files.has(manifest.clips[key].src.split('/').pop()), `${key} file exists`);
});

test('the storm: the clock runs through the night, the storm grows circle by circle and clears at dawn', () => {
  const before = STORY_IDS.filter(id => id !== FINAL);
  assert.equal(nightClock([]), `${String(SHIP.start[0]).padStart(2, '0')}:${String(SHIP.start[1]).padStart(2, '0')}`);
  assert.equal(nightClock([...before, FINAL]), SHIP.dawn);
  assert.equal(stormPhase([]), 0);
  assert.equal(stormPhase(before), 1);
  assert.equal(stormPhase([FINAL]), 2);
  let last = -1;
  for (let i = 0; i <= before.length; i++) { const k = stormPhase(before.slice(0, i)); assert.ok(k >= last, 'the storm never calms down before dawn'); last = k; }
  assert.equal(STORY_IDS.at(-1), FINAL, 'dawn closes the night');
});

test('the logbook: one line per answer in every circle before dawn, bilingual, written in the order played', () => {
  assert.deepEqual(BITACORA_IDS.slice().sort(), STORY_IDS.filter(id => id !== FINAL).sort());
  for (const id of BITACORA_IDS) {
    assert.ok(BITACORA[id].length >= 3, id);
    for (const n of BITACORA[id]) assert.ok(n.es && n.en, `${id}: «${n.es}»`);
    assert.equal(new Set(BITACORA[id].map(n => n.es)).size, BITACORA[id].length, `${id}: different lines`);
  }
  assert.deepEqual(logLines(['maquinas', 'popa'], { popa: 1, maquinas: 0 }).map(n => n.id), ['maquinas', 'popa']);
  assert.deepEqual(logLines(['popa'], {}), [], 'no answer, no line');
});

test('engine: choose, logbook line, undo, saved picks and the page read back at dawn', () => {
  const B1 = CONTENT.B1;
  let s = createState('B1');
  assert.equal(STORAGE_KEY, 'spanishcue:ultimo-crucero:v1');
  s = openScene(s, 'popa');
  let v = sceneView(s, B1);
  assert.equal(v.options.length, 3); assert.equal(v.talk.length, 5); assert.equal(v.ended, false);
  s = choose(s, 2);
  v = sceneView(s, B1);
  assert.ok(v.ended && v.mood);
  assert.equal(v.note, BITACORA.popa[2]);
  assert.deepEqual(doneFor(s), ['popa']);
  s = undo(s); assert.equal(sceneView(s, B1).ended, false);
  s = closeScene(choose(s, 1));
  assert.equal(logFor(s)[0].line, BITACORA.popa[1], 'the logbook keeps the last answer');
  assert.equal(progress(s).done, 1); assert.equal(progress(s).total, 18);
  s = closeScene(choose(openScene(s, 'maquinas'), 0));
  const page = sceneView(choose(openScene(s, FINAL), 0), B1).log;
  assert.deepEqual(page, [BITACORA.popa[1], BITACORA.maquinas[0]]);
  const back = restore(serialise(s));
  assert.deepEqual(back.done.B1, ['popa', 'maquinas']); assert.equal(back.picks.B1.popa, 1);
  s = setLevel(s, 'A0');
  assert.equal(typeof sceneView(openScene(s, 'popa'), CONTENT.A0).title.en, 'string', 'A0 is bilingual');
  assert.deepEqual(doneFor(s), [], 'each level keeps its own night');
});

test('PRO by default: route, catalog, cover, preview, shared engine, realistic look and no browser speech', () => {
  const catalog = readFileSync('app/lesson-catalog.ts', 'utf8');
  assert.match(catalog, /\{id:261,[^\n]*levels:\["A0","A1","A2","B1","B2","C1","C2"\],displayLevel:"A0–C2"[^\n]*path:"\/ultimo-crucero"/);
  assert.doesNotMatch(readFileSync('app/access-policy.ts', 'utf8'), /\b261\b|ultimo-crucero/);
  assert.match(readFileSync('app/resource-seo.ts', 'utf8'), /\[261, "crucero"\]/);
  assert.match(readFileSync('app/ultimo-crucero/layout.tsx', 'utf8'), /canonical:"https:\/\/spanishcue\.com\/ultimo-crucero"/);
  const cover = readFileSync('public/ultimo-crucero/portada.webp');
  assert.equal(cover.toString('ascii', 0, 4), 'RIFF');
  assert.equal(cover.toString('ascii', 8, 16), 'WEBPVP8 ');
  assert.deepEqual([cover.readUInt16LE(26) & 0x3fff, cover.readUInt16LE(28) & 0x3fff], [1200, 750]);
  assert.ok(cover.length < 120_000, 'cover under 120 KB');
  assert.ok(existsSync('scripts/covers/art/ultimo-crucero.webp'), 'the cover comes from illustrated key art');
  assert.ok(existsSync('public/conversation-previews/261.mp4'));
  assert.ok(readFileSync('public/conversation-previews/261.mp4').length < 400_000);
  const game = readFileSync('app/ultimo-crucero/CruceroGame.tsx', 'utf8');
  assert.match(game, /<ListeningCard game="crucero"/);
  assert.match(game, /MusicVolume/, 'the shared music volume slider');
  assert.match(game, /import\(['"]\.\/World3D['"]\)/);
  assert.doesNotMatch(game, /from ['"]three['"]/);
  const world = readFileSync('app/ultimo-crucero/World3D.tsx', 'utf8');
  assert.match(world, /from '\.\.\/noche-abierta\/hero3d'/);
  assert.match(world, /from '\.\.\/noche-abierta\/world3d\.mjs'/);
  assert.match(world, /enableRealPeople\(real\)/, 'realistic people on computers');
  assert.match(world, /loadEnvironment\(/, 'image-based light on computers');
  assert.match(world, /realParam !== '0'/, '?real=0 turns the realistic look off');
  assert.match(world, /!low && /, 'phones stay light');
  assert.match(world, /escapeSolids|pushOut/, 'the hero is pushed out of any solid it ends up inside');
  for (const file of readdirSync('app/ultimo-crucero').filter(f => /\.(tsx?|mjs)$/.test(f))) {
    const source = readFileSync(`app/ultimo-crucero/${file}`, 'utf8');
    assert.doesNotMatch(source, /speechSynthesis|SpeechSynthesisUtterance/, `${file} uses no browser speech`);
    assert.doesNotMatch(source, /https?:\/\/(?!spanishcue\.com)/, `${file} loads nothing from the network`);
    if (/\.tsx?$/.test(file)) assert.doesNotMatch(source, /\b(?:coins?|ranking|leaderboard|score)\b/i, `${file} has no score HUD`);
  }
});

test('nobody inside anything: everyone seated sits on a chair, a stool, a bench or at a round table, facing it', () => {
  assert.match(readFileSync('app/ultimo-crucero/barco3d.ts', 'utf8'), /person\.root\.userData\.person = true/, 'people are tagged for the per-vertex browser check');
  const facing = (p, x, z) => { const dx = x - p.x, dz = z - p.z, d = Math.hypot(dx, dz) || 1; return (Math.sin(p.heading) * dx + Math.cos(p.heading) * dz) / d; };
  const seated = [...L.CROWD, ...L.FILLERS, ...L.SCENES.flatMap(s => [s.npc, ...(s.extras ?? [])])].filter(p => p.seat);
  assert.ok(seated.length >= 15);
  const SEATS = ['chair', 'captainchair', 'stool', 'bench', 'pianobench', 'deckchair', 'crate'];
  for (const p of seated) {
    const where = `(${p.x.toFixed(2)}, ${p.z.toFixed(2)})`;
    const round = L.ROUND.find(t => Math.abs(Math.hypot(p.x - t.x, p.z - t.z) - L.SEAT_R) < 0.05);
    const seat = L.FURNITURE.find(f => SEATS.includes(f.type) && Math.abs(p.x - f.x) <= f.w / 2 + 0.3 && Math.abs(p.z - f.z) <= f.d / 2 + 0.3);
    assert.ok(round || seat, `${where} sits on something`);
    if (round) assert.ok(facing(p, round.x, round.z) > 0.9, `${where} faces the round table`);
  }
});

test('unmount frees the GPU: texture slots, shadow map, bloom targets, the PMREM target and the WebGL context', () => {
  const world = readFileSync('app/ultimo-crucero/World3D.tsx', 'utf8');
  const cleanup = world.slice(world.indexOf('disposed = true;'));
  assert.match(cleanup, /isTexture[\s\S]*\.dispose\(\)/);
  assert.match(cleanup, /shadow\?\.dispose\(\)/);
  assert.match(cleanup, /composer\?\.passes[\s\S]*pass\.dispose\(\)/);
  assert.match(cleanup, /envTarget\.dispose\(\)/);
  assert.match(cleanup, /renderer\.forceContextLoss\(\)/);
  assert.match(cleanup, /enableRealPeople\(false\)/);
});
