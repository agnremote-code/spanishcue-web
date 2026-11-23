// Objetos perdidos (ID 264, /objetos-perdidos): the night shift at the
// municipal lost-and-found office of Puerto Alba after the Noche de los
// Faroles, until the 07:00 shift change. One office in 3D (street, waiting
// room, shelves, cold room, archive, big objects, loading dock and roof),
// 18 circles, 17 people who all talk, a listening per circle, A0–C2. Every
// answer writes a line in the night ledger, and some lines send an object home.
import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { CAST, LEVEL_IDS, OFFICE, REGISTRO, REGISTRO_IDS, STORY, STORY_IDS, ledgerLines, nightPhase, returned, shiftClock } from '../app/objetos-perdidos/story.mjs';
import { LEVELS, LOADERS, loadLevel } from '../app/objetos-perdidos/levels.mjs';
import * as L from '../app/objetos-perdidos/layout.mjs';
import { FINAL, STORAGE_KEY, choose, closeScene, createState, doneFor, invitadoById, logFor, openScene, progress, restore, returnedFor, sceneView, serialise, setLevel, undo } from '../app/objetos-perdidos/engine.mjs';
import { INVITADOS } from '../app/objetos-perdidos/invitados.mjs';
import { GAMES, listeningFor } from '../app/escucha-3d/games.mjs';
import { c1c2Overlap, checkLevel, choiceBalance } from '../scripts/check-objetos-perdidos.mjs';
import { scanSource } from '../scripts/neutral-spanish.mjs';

const listening = (level) => JSON.parse(readFileSync(`app/escucha-3d/content/perdidos/${level.toLowerCase()}.json`, 'utf8'));
const words = (text) => (String(text).match(/[\p{L}\p{N}]+/gu) ?? []).length;
const CONTENT = Object.fromEntries(await Promise.all(LEVEL_IDS.map(async (level) => [level, await loadLevel(level)])));

test('one office, 18 circles, every circle in a real room and reachable on foot (and by the stair doors) from the street', () => {
  assert.equal(L.SCENES.length, 18);
  assert.deepEqual(L.SCENES.map(s => s.id), STORY_IDS);
  const R = 0.35, step = 0.25, b = L.BOUNDS;
  const people = [...L.CROWD, ...L.FILLERS].map(c => ({ x0: c.x - 0.27, x1: c.x + 0.27, z0: c.z - 0.27, z1: c.z + 0.27 }));
  const all = [...L.solidsFor().filter(s => !(s.top != null && s.top < 0.2)), ...people];
  const free = (x, z) => x > b.minX + R && x < b.maxX - R && z > b.minZ + R && z < b.maxZ - R && !all.some(s => x > s.x0 - R && x < s.x1 + R && z > s.z0 - R && z < s.z1 + R);
  const key = (i, j) => `${i},${j}`;
  const cell = (x, z) => [Math.round(x / step), Math.round(z / step)];
  const first = cell(L.SPAWN.x, L.SPAWN.z);
  const seen = new Set([key(...first)]); const queue = [first];
  const visit = (a, c) => { const k = key(a, c); if (seen.has(k) || !free(a * step, c * step)) return; seen.add(k); queue.push([a, c]); };
  while (queue.length) {
    const [i, j] = queue.pop();
    for (const [di, dj] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) visit(i + di, j + dj);
    const door = L.teleportAt(i * step, j * step);
    if (door) { const to = L.teleportTarget(door); visit(...cell(to.x, to.z)); }
  }
  for (const s of L.SCENES) {
    assert.ok(L.sectorAt(s.spot.x, s.spot.z), `${s.id} stands in a sector`);
    assert.equal(L.spotAt(s.spot.x, s.spot.z), s.id);
    assert.ok(seen.has(key(...cell(s.spot.x, s.spot.z))), `${s.id} reachable from the street`);
  }
  assert.equal(L.TELEPORTS.length, 2);
  for (const d of L.TELEPORTS) {
    const to = L.teleportTarget(d.id);
    assert.ok(to && free(to.x, to.z), `${d.id} lands on free floor`);
    assert.equal(L.teleportAt(to.x, to.z), null, `${d.id} does not land inside the other door`);
  }
  assert.ok(L.onRoof(L.TELEPORTS[1].x, L.TELEPORTS[1].z) && !L.onRoof(L.TELEPORTS[0].x, L.TELEPORTS[0].z));
});

test('the stair doors fire once on the way in and stay quiet until the player walks out', () => {
  const up = L.TELEPORTS[0];
  let s = L.teleportStep(true, up.x, up.z);
  assert.deepEqual(s.go, L.teleportTarget(up.id));
  s = L.teleportStep(s.armed, up.x, up.z);
  assert.equal(s.go, null, 'standing on the door does not bounce');
  s = L.teleportStep(s.armed, up.x + 3, up.z);
  assert.equal(s.armed, true);
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
  const first = new Set(LEVEL_IDS.map(level => JSON.stringify(CONTENT[level].dentadura.talk)));
  assert.equal(first.size, LEVEL_IDS.length, 'every level writes its own questions');
  for (const level of LEVEL_IDS) {
    const source = readFileSync(`app/objetos-perdidos/levels/${level.toLowerCase()}.mjs`, 'utf8');
    assert.deepEqual(scanSource(source, level), [], `${level} is neutral Spanish with tú`);
    assert.doesNotMatch(source, /(?<!\p{L})(?:vosotros|vosotras|sabéis|decís|tenéis|queréis|habéis|estáis)(?!\p{L})/iu, `${level} has no vosotros`);
  }
  assert.deepEqual(scanSource(readFileSync('app/objetos-perdidos/story.mjs', 'utf8'), 'story'), []);
  const game = readFileSync('app/objetos-perdidos/PerdidosGame.tsx', 'utf8');
  assert.doesNotMatch(game, /from ['"]\.\/levels\/[a-c][0-2]\.mjs['"]/, 'the game never imports a level statically');
  assert.match(readFileSync('app/objetos-perdidos/levels.mjs', 'utf8'), /import\.meta\.env\?\.SSR \? \{\} :/, 'the server build gets no scenes');
  assert.deepEqual(c1c2Overlap(CONTENT.C1, CONTENT.C2), [], 'C2 asks its own questions, not C1 reworded');
});

test('everyone you can see in the office who stops still has a conversation at three levels', () => {
  assert.equal(L.CROWD.length, 17);
  assert.deepEqual(Object.keys(INVITADOS).sort(), L.CROWD.map((_, i) => String(i)).sort());
  assert.equal(new Set(Object.values(INVITADOS).map(p => p.name)).size, L.CROWD.length, 'every person has their own name');
  for (const [key, p] of Object.entries(INVITADOS)) {
    assert.ok(p.who.es && p.who.en && p.basic.es && p.basic.en, `${key} basic is bilingual`);
    assert.ok(words(p.basic.es) <= 45 && words(p.mid) >= 40 && words(p.high) >= 60, `${key} lengths`);
    for (const ask of [p.basicAsk.es, p.midAsk, p.highAsk]) assert.match(ask, /\?\s*$/);
    assert.equal(invitadoById(key), p);
  }
  assert.deepEqual(scanSource(readFileSync('app/objetos-perdidos/invitados.mjs', 'utf8'), 'invitados'), []);
});

test('listening: 18 own listenings × 7 levels with cast voices, A0 bilingual, balanced choices', () => {
  assert.deepEqual(GAMES.perdidos.spots, STORY_IDS);
  assert.deepEqual(GAMES.perdidos.levels, LEVEL_IDS);
  assert.equal(GAMES.perdidos.ownListening, true);
  const titles = new Set();
  for (const level of LEVEL_IDS) {
    const file = listening(level);
    assert.equal(file.game, 'perdidos'); assert.equal(file.level, level);
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
  const built = Object.keys(manifest.clips).filter(k => k.startsWith('perdidos/'));
  if (!built.length) return; // the GitHub Action has not produced them yet; tests/escucha-3d.test.mjs requires them
  const files = new Set(readdirSync('public/audio/escucha-3d'));
  for (const key of built) assert.ok(files.has(manifest.clips[key].src.split('/').pop()), `${key} file exists`);
});

test('the night: the clock runs from 23:00 to the 07:00 shift change, night turns to dawn circle by circle', () => {
  const before = STORY_IDS.filter(id => id !== FINAL);
  assert.equal(shiftClock([]), '23:00');
  assert.equal(shiftClock([...before, FINAL]), OFFICE.change);
  assert.equal(nightPhase([]), 0);
  assert.equal(nightPhase(before), 1);
  assert.equal(nightPhase([FINAL]), 2);
  let last = -1, lastClock = '';
  for (let i = 0; i <= before.length; i++) {
    const k = nightPhase(before.slice(0, i)); assert.ok(k >= last, 'the night never goes back'); last = k;
    const t = shiftClock(before.slice(0, i)); const order = t < '12' ? `1${t}` : `0${t}`; assert.ok(order >= lastClock, `${t} after ${lastClock}`); lastClock = order;
  }
  assert.equal(STORY_IDS.at(-1), FINAL, 'the shift change closes the night');
});

test('the ledger: one line per answer in every circle before the shift change, bilingual, some lines send an object home', () => {
  assert.deepEqual(REGISTRO_IDS.slice().sort(), STORY_IDS.filter(id => id !== FINAL).sort());
  let homes = 0;
  for (const id of REGISTRO_IDS) {
    assert.ok(REGISTRO[id].length >= 3, id);
    for (const n of REGISTRO[id]) { assert.ok(n.es && n.en, `${id}: «${n.es}»`); assert.equal(typeof n.back, 'boolean'); }
    assert.equal(new Set(REGISTRO[id].map(n => n.es)).size, REGISTRO[id].length, `${id}: different lines`);
    if (REGISTRO[id].some(n => n.back)) homes++;
  }
  assert.ok(homes >= OFFICE.goal, 'the bet can be won');
  assert.deepEqual(ledgerLines(['llaves', 'dentadura'], { dentadura: 1, llaves: 0 }).map(n => n.id), ['llaves', 'dentadura']);
  assert.deepEqual(ledgerLines(['dentadura'], {}), [], 'no answer, no line');
  const back = REGISTRO.dentadura.findIndex(n => n.back), stays = REGISTRO.dentadura.findIndex(n => !n.back);
  assert.equal(returned(['dentadura'], { dentadura: back }), 1);
  assert.equal(returned(['dentadura'], { dentadura: stays }), 0);
});

test('engine: choose, ledger line, undo, saved picks and the ledger read back at seven', () => {
  const B1 = CONTENT.B1;
  let s = createState('B1');
  assert.equal(STORAGE_KEY, 'spanishcue:objetos-perdidos:v1');
  s = openScene(s, 'dentadura');
  let v = sceneView(s, B1);
  assert.equal(v.options.length, 3); assert.equal(v.talk.length, 5); assert.equal(v.ended, false);
  s = choose(s, 2);
  v = sceneView(s, B1);
  assert.ok(v.ended && v.mood);
  assert.equal(v.note, REGISTRO.dentadura[2]);
  assert.deepEqual(doneFor(s), ['dentadura']);
  s = undo(s); assert.equal(sceneView(s, B1).ended, false);
  s = closeScene(choose(s, 1));
  assert.equal(logFor(s)[0].line, REGISTRO.dentadura[1], 'the ledger keeps the last answer');
  assert.equal(progress(s).done, 1); assert.equal(progress(s).total, 18);
  s = closeScene(choose(openScene(s, 'llaves'), 0));
  const end = sceneView(choose(openScene(s, FINAL), 0), B1);
  assert.deepEqual(end.log, [REGISTRO.dentadura[1], REGISTRO.llaves[0]]);
  assert.equal(end.back, returnedFor(s));
  const saved = restore(serialise(s));
  assert.deepEqual(saved.done.B1, ['dentadura', 'llaves']); assert.equal(saved.picks.B1.dentadura, 1);
  s = setLevel(s, 'A0');
  assert.equal(typeof sceneView(openScene(s, 'dentadura'), CONTENT.A0).title.en, 'string', 'A0 is bilingual');
  assert.deepEqual(doneFor(s), [], 'each level keeps its own night');
});

test('PRO by default: route, catalog, cover, preview, shared engine, realistic look and no browser speech', () => {
  const catalog = readFileSync('app/lesson-catalog.ts', 'utf8');
  assert.match(catalog, /\{id:264,[^\n]*levels:\["A0","A1","A2","B1","B2","C1","C2"\],displayLevel:"A0–C2"[^\n]*path:"\/objetos-perdidos"/);
  assert.doesNotMatch(readFileSync('app/access-policy.ts', 'utf8'), /\b264\b|objetos-perdidos/);
  assert.match(readFileSync('app/resource-seo.ts', 'utf8'), /\[264, "perdidos"\]/);
  assert.match(readFileSync('app/objetos-perdidos/layout.tsx', 'utf8'), /canonical:"https:\/\/spanishcue\.com\/objetos-perdidos"/);
  const cover = readFileSync('public/objetos-perdidos/portada.webp');
  assert.equal(cover.toString('ascii', 0, 4), 'RIFF');
  assert.equal(cover.toString('ascii', 8, 16), 'WEBPVP8 ');
  assert.deepEqual([cover.readUInt16LE(26) & 0x3fff, cover.readUInt16LE(28) & 0x3fff], [1200, 750]);
  assert.ok(cover.length < 120_000, 'cover under 120 KB');
  assert.ok(existsSync('scripts/covers/art/objetos-perdidos.webp'), 'the cover comes from illustrated key art');
  assert.ok(existsSync('public/conversation-previews/264.mp4'));
  assert.ok(readFileSync('public/conversation-previews/264.mp4').length < 400_000);
  const game = readFileSync('app/objetos-perdidos/PerdidosGame.tsx', 'utf8');
  assert.match(game, /<ListeningCard game="perdidos"/);
  assert.match(game, /MusicVolume/, 'the shared music volume slider');
  assert.match(game, /import\(['"]\.\/World3D['"]\)/);
  assert.doesNotMatch(game, /from ['"]three['"]/);
  const world = readFileSync('app/objetos-perdidos/World3D.tsx', 'utf8');
  assert.match(world, /from '\.\.\/noche-abierta\/hero3d'/);
  assert.match(world, /from '\.\.\/noche-abierta\/world3d\.mjs'/);
  assert.match(world, /enableRealPeople\(real\)/, 'realistic people on computers');
  assert.match(world, /loadEnvironment\(/, 'image-based light on computers');
  assert.match(world, /realParam !== '0'/, '?real=0 turns the realistic look off');
  assert.match(world, /!low && /, 'phones stay light');
  assert.match(world, /escapeSolids|pushOut/, 'the hero is pushed out of any solid it ends up inside');
  assert.match(world, /teleportStep\(/, 'the stair doors run every frame');
  for (const file of readdirSync('app/objetos-perdidos').filter(f => /\.(tsx?|mjs)$/.test(f))) {
    const source = readFileSync(`app/objetos-perdidos/${file}`, 'utf8');
    assert.doesNotMatch(source, /speechSynthesis|SpeechSynthesisUtterance/, `${file} uses no browser speech`);
    assert.doesNotMatch(source, /https?:\/\/(?!spanishcue\.com)/, `${file} loads nothing from the network`);
    if (/\.tsx?$/.test(file)) assert.doesNotMatch(source, /\b(?:coins?|ranking|leaderboard|score)\b/i, `${file} has no score HUD`);
  }
});

test('nobody inside anything: everyone seated sits on a chair, a bench or a row of seats, root toward its front edge', () => {
  assert.match(readFileSync('app/objetos-perdidos/oficina3d.ts', 'utf8'), /person\.root\.userData\.person = true/, 'people are tagged for the per-vertex browser check');
  const seated = [...L.CROWD, ...L.FILLERS, ...L.SCENES.flatMap(s => [s.npc, ...(s.extras ?? [])])].filter(p => p.seat);
  assert.ok(seated.length >= 8);
  const SEATS = ['chair', 'bench', 'seatrow'];
  for (const p of seated) {
    const where = `(${p.x.toFixed(2)}, ${p.z.toFixed(2)})`;
    const seat = L.FURNITURE.find(f => SEATS.includes(f.type) && Math.abs(p.x - f.x) <= f.w / 2 + 0.3 && Math.abs(p.z - f.z) <= f.d / 2 + 0.3);
    assert.ok(seat, `${where} sits on something`);
  }
});

test('unmount frees the GPU: texture slots, shadow map, bloom targets, the PMREM target and the WebGL context', () => {
  const world = readFileSync('app/objetos-perdidos/World3D.tsx', 'utf8');
  const cleanup = world.slice(world.indexOf('disposed = true;'));
  assert.match(cleanup, /isTexture[\s\S]*\.dispose\(\)/);
  assert.match(cleanup, /shadow\?\.dispose\(\)/);
  assert.match(cleanup, /composer\?\.passes[\s\S]*pass\.dispose\(\)/);
  assert.match(cleanup, /envTarget\.dispose\(\)/);
  assert.match(cleanup, /renderer\.forceContextLoss\(\)/);
  assert.match(cleanup, /enableRealPeople\(false\)/);
});
