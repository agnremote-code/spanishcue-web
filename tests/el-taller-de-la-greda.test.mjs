import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import * as L from '../app/el-taller-de-la-greda/layout.mjs';
import * as E from '../app/el-taller-de-la-greda/engine.mjs';
import { CONTENT, LEVELS } from '../app/el-taller-de-la-greda/levels.mjs';
import { GAMES } from '../app/escucha-3d/games.mjs';
import { HUB_WORLDS } from '../app/jugar/worlds.mjs';
import { checkTaller } from '../scripts/check-taller-greda.mjs';

const B1 = CONTENT.B1;
const dir = 'app/el-taller-de-la-greda';
const game = readFileSync(`${dir}/TallerGame.tsx`, 'utf8');
const world = readFileSync(`${dir}/World3D.tsx`, 'utf8');
const shop = readFileSync(`${dir}/taller3d.ts`, 'utf8');
const catalog = readFileSync('app/lesson-catalog.ts', 'utf8');
const row = catalog.split('\n').find(line => line.startsWith('  {id:285,'));

test('the B1 content passes the Taller checker (G1, N1, Martin §11 counts, hand-offs, production, route, listening, language)', () => {
  const { problems } = checkTaller();
  assert.deepEqual(problems, []);
});

test('catalog: lesson 285 is a single-level B1 PRO 3D world, not featured, at /el-taller-de-la-greda', () => {
  assert.ok(row, 'catalog row 285');
  assert.match(row, /level:"B1",levels:\["B1"\],displayLevel:"B1",category:"Conversación",conversationMode:"play"/);
  assert.match(row, /path:"\/el-taller-de-la-greda"/);
  assert.match(row, /news:\{addedAt:"2026-11-25",featured:false\}/, 'listed as new, never featured');
  assert.deepEqual(LEVELS.map(l => l.id), ['B1']);
  assert.equal(E.LESSON_ID, 285);
  assert.equal(catalog.split('\n').filter(line => /^ {2}\{id:285,/.test(line)).length, 1, 'one row, no id collision');
});

test('PRO: not a free sample, access policy untouched, no API route, premium audio stays under the protected prefix', () => {
  const policy = readFileSync('app/access-policy.ts', 'utf8');
  assert.doesNotMatch(policy, /285|taller/);
  assert.ok(!existsSync('app/api/taller'));
  for (const spot of GAMES.taller.spots) assert.ok(existsSync(`public/audio/escucha-3d/taller-b1-${spot}.mp3`), `${spot} audio`);
  assert.ok(!('freeAudio' in GAMES.taller), 'no free audio');
  const resource = readFileSync('app/resource-seo.ts', 'utf8');
  assert.match(resource, /\[285, "taller"\]/);
});

test('both modes in one world: the shared ModeSwitch, ListeningCard and own listening per circle', () => {
  assert.ok(GAMES.taller.ownListening);
  assert.deepEqual(GAMES.taller.levels, ['B1']);
  assert.deepEqual(L.CIRCLE_IDS, GAMES.taller.spots);
  assert.match(game, /from '\.\.\/escucha-3d\/Escucha'/);
  assert.match(game, /useListeningMode\('taller'\)/);
  assert.match(game, /<ListeningCard game="taller"/);
  assert.match(game, /<ModeSwitch mode=\{mode\} onChange=\{switchMode\}/);
  assert.match(readFileSync('app/escucha-3d/loaders.ts', 'utf8'), /taller: \{\n {4}B1: \(\) => import\('\.\/content\/taller\/b1\.json'\)/);
});

test('eight stations along the line, all reachable on foot from the gate; the list lands outside each circle', () => {
  const R = 0.35, step = 0.5, b = L.BOUNDS;
  const free = (x, z) => L.isFree(x, z, R);
  assert.ok(free(L.SPAWN.x, L.SPAWN.z));
  const key = (i, j) => `${i},${j}`;
  const first = [Math.round(L.SPAWN.x / step), Math.round(L.SPAWN.z / step)];
  const seen = new Set([key(...first)]); const queue = [first];
  while (queue.length) {
    const [i, j] = queue.shift();
    for (const [di, dj] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
      const ni = i + di, nj = j + dj, k = key(ni, nj);
      if (seen.has(k) || ni * step < b.minX || ni * step > b.maxX || nj * step < b.minZ || nj * step > b.maxZ || !free(ni * step, nj * step)) continue;
      seen.add(k); queue.push([ni, nj]);
    }
  }
  for (const c of L.CIRCLES) {
    assert.equal(L.spotAt(c.spot.x, c.spot.z), c.id);
    assert.ok(L.isClearGround(c.spot.x, c.spot.z, 1), `${c.id}: the circle is on clear floor`);
    assert.ok(seen.has(key(Math.round(c.spot.x / step), Math.round(c.spot.z / step))), `${c.id} reachable`);
    const a = L.arrival(c.id);
    assert.ok(L.isFree(a.x, a.z) && !L.spotAt(a.x, a.z), `${c.id}: click-to-travel lands on free ground outside the circle`);
    assert.ok(Math.hypot(c.npc.x - c.spot.x, c.npc.z - c.spot.z) < 5, `${c.id}: the speaker stands near the circle`);
  }
});

test('nobody is shown twice: each person stands at the open circle or at home, never in a solid or a circle', () => {
  const people = Object.keys(L.HOMES);
  for (const open of [null, ...L.CIRCLE_IDS]) for (const closing of [false, true]) {
    const at = L.standings(open, closing);
    assert.deepEqual(Object.keys(at).sort(), [...people].sort());
    const spots = Object.values(at).map(p => `${p.x},${p.z}`);
    assert.equal(new Set(spots).size, spots.length, `${open} ${closing}: two people in one place`);
    for (const [who, p] of Object.entries(at)) {
      assert.ok(L.isClearGround(p.x, p.z, 0.3), `${who} at ${open}: on clear floor`);
      assert.equal(L.spotAt(p.x, p.z), null, `${who} at ${open}: not inside a white circle`);
    }
    if (open && !closing) for (const who of B1.CIRCLES[open].cast) assert.deepEqual(at[who], L.circleById(open).slots[who], `${who} comes to ${open}`);
  }
  for (const who of people) assert.ok(Object.values(B1.CIRCLES).some(c => c.cast.includes(who)), `${who} speaks somewhere`);
});

test('«El recado viaja»: each prop moves one station along when its circle is done (concept §5.4)', () => {
  assert.equal(L.PROPS.length, 7);
  assert.deepEqual(L.PROPS.map(p => p.after), L.CIRCLE_IDS.slice(0, 7));
  for (const p of L.PROPS) {
    assert.deepEqual(L.propAt(p, []), p.from);
    assert.deepEqual(L.propAt(p, [p.after]), p.to);
  }
  for (const id of L.CIRCLE_IDS.slice(0, 7)) assert.equal(E.nextCircle(id), L.CIRCLE_IDS[L.CIRCLE_IDS.indexOf(id) + 1]);
  assert.equal(E.nextCircle('patio'), null);
  assert.match(game, /order=\{done\}/, 'the props follow the conversation circles done');
  assert.match(world, /shop\.props\(p\.order\)/);
  assert.match(game, /Llevar el recado →/);
});

test('beats: a contrast needs the right option and keeps wrong feedback; a stimulus takes one pick; frames move on', () => {
  const circle = B1.CIRCLES.torno;
  let state = E.openScene(E.createState(), 'torno');
  const [first] = circle.beats;
  const wrong = first.options.findIndex(o => !o.correct), right = first.options.findIndex(o => o.correct);
  state = E.answerBeat(state, first, wrong);
  assert.equal(E.currentBeat(state.scene, circle), 0);
  assert.equal(E.lastFeedback(state.scene, first).correct, false);
  assert.ok(E.lastFeedback(state.scene, first).feature);
  state = E.answerBeat(state, first, right);
  assert.equal(E.currentBeat(state.scene, circle), 1);
  assert.equal(E.answerBeat(state, first, wrong), state, 'a solved contrast does not change');
  for (const beat of circle.beats.slice(1)) state = E.settleScene(E.answerBeat(state, beat, beat.kind === 'contrast' ? beat.options.findIndex(o => o.correct) : 2), B1.CIRCLES);
  assert.equal(E.currentBeat(state.scene, circle), circle.beats.length);
  assert.ok(E.doneFor(state).includes('torno'), 'done on its last beat (E1)');
  assert.equal(E.pickOf(state.scene, circle.beats.at(-1)), 2);
  // A frame stimulus is «seen» once.
  const greda = B1.CIRCLES.greda;
  let g = E.openScene(E.createState(), 'greda');
  const frames = greda.beats.find(b => b.frames);
  g = E.answerBeat(g, frames);
  assert.equal(E.answerBeat(g, frames), g);
  assert.doesNotMatch(game, /useEffect\(\(\) => \{ if \(finished/, 'no setState in an effect for E1');
  assert.match(game, /setState\(settleScene\(nextState, circles\)\)/);
});

test('group notes live in sessionStorage and reset; the device keeps level, route and circles done', () => {
  let session = E.createSession();
  session = E.tick(session, 'torno', 'logrado');
  session = E.toggleCheck(session, 'sentido');
  assert.deepEqual(E.restoreSession(E.serialiseSession(session)), session);
  assert.deepEqual(E.resetGroup(), E.createSession());
  const device = E.restore(E.serialise(E.markDone(E.setRoute(E.createState(), 'escucha'), 'horno')));
  assert.deepEqual(device.done, { B1: ['horno'] });
  assert.equal(device.route, 'escucha');
  assert.ok(!('ticks' in JSON.parse(E.serialise(E.createState()))), 'no group data in localStorage');
  assert.match(game, /write\('session', SESSION_KEY, serialiseSession\(session\)\)/);
  assert.match(game, /write\('local', STORAGE_KEY, serialise\(state\)\)/);
  assert.equal(E.restore('{bad').level, 'B1');
});

test('E1: route progress counts route steps (the listening step counts when heard) and reaches 100 only on «Terminar»', () => {
  const route = B1.ROUTES[0];
  assert.equal(E.routeProgress(route, [], false), 0);
  assert.equal(E.routeProgress(route, [...L.CIRCLE_IDS], false), 99);
  assert.equal(E.routeProgress(route, [...L.CIRCLE_IDS], true), 100);
  assert.equal(E.routeProgress(route, ['horno'], false), E.routeProgress(route, ['oficina'], false), 'oneOf: either circle counts');
  assert.equal(E.routeProgress(route, [], false, ['esmaltes']), E.routeProgress(route, ['esmaltes'], false), 'the esmaltes listening counts');
  assert.equal(E.routeProgress(route, [], false, ['torno']), 0, 'a listening only counts on a listening step');
  assert.match(game, /fetch\('\/api\/progress', \{ method: 'PUT'/);
  assert.match(game, /lessonId: LESSON_ID/);
});

test('the closing: chain round brings everyone to the yard, then the written message, the criteria and «Terminar»', () => {
  assert.match(game, /closing=\{closingRound\}/);
  assert.match(world, /shop\.stage\(circleId, p\.closing && circleId === 'patio'/);
  assert.match(game, /closing\.production\.prompt/);
  assert.match(game, /closing\.selfCheck\.items\.map/);
  assert.match(game, /setSession\(s => finish\(s\)\)/);
  assert.equal(B1.CLOSING.reset, 'Nueva clase / nuevo grupo');
});

test('no WebGL, reduced motion or the teacher\'s choice: the list and the map reach every circle and listening', () => {
  assert.match(game, /const showList = list \|\| \(ready && entered && !use3d && !busy\);/);
  assert.match(game, /\{CIRCLES\.map\(c => <li key=\{c\.id\}><button type="button"[^>]*onClick=\{\(\) => open\(c\.id\)\}/);
  assert.match(game, /setFlat\(window\.matchMedia\('\(prefers-reduced-motion: reduce\)'\)\.matches\)/);
  assert.match(game, /onFail=\{\(\) => setHas3d\(false\)\}/);
  assert.match(game, /Usar el mapa/);
  assert.match(game, /Mapa sin movimiento/);
  assert.match(world, /webglcontextlost/);
});

test('three.js loads lazily; listening audio comes from the TTS pipeline, never speechSynthesis', () => {
  assert.match(game, /dynamic\(\(\) => import\('\.\/World3D'\), \{\s*ssr: false/);
  assert.doesNotMatch(game, /from 'three'/);
  for (const path of ['TallerGame.tsx', 'World3D.tsx', 'taller3d.ts', 'ambience.ts']) assert.doesNotMatch(readFileSync(`${dir}/${path}`, 'utf8'), /speechSynthesis/);
  const manifest = JSON.parse(readFileSync('app/escucha-3d/audio-manifest.json', 'utf8')).clips;
  for (const spot of GAMES.taller.spots) assert.equal(manifest[`taller/b1-${spot}`]?.src, `/audio/escucha-3d/taller-b1-${spot}.mp3`);
});

test('same controls and teacher tools as the other 3D worlds', () => {
  for (const needle of ['keyAction', 'inputFrom', 'stepPlayer', 'followYaw', 'createHero', 'animateHero', 'tg-joy', 'Saltar', 'Nitro', 'pushOut']) assert.ok(world.includes(needle), needle);
  for (const needle of ['<ModeSwitch', 'Lista del profesor', 'Mapa sin movimiento', '{closing.reset}', 'Espacio para saltar, Shift para correr, N para el nitro']) assert.ok(game.includes(needle), needle);
  assert.match(shop, /from '\.\.\/noche-abierta\/people3d'/, 'people from the shared kit');
  assert.match(world, /from '\.\.\/noche-abierta\/world3d\.mjs'/, 'movement from the shared kit');
});

test('a working workshop, no folkloric décor and no town name', () => {
  const all = [game, world, shop, readFileSync(`${dir}/layout.mjs`, 'utf8'), readFileSync(`${dir}/layout.tsx`, 'utf8'), row].join('\n');
  assert.doesNotMatch(all, /Ráquira|folcl|ruana|sombrero|poncho|artesanía típica/i);
  for (const thing of ['COUNTER', 'KNEAD_TABLE', 'SACKS', 'WHEEL', 'DRY_SHELVES', 'SMALL_KILN', 'BIG_KILN', 'GLAZE_TABLE', 'DESK', 'CRATES', 'TRUCK']) assert.match(shop, new RegExp(`\\b${thing}\\b`), thing);
});

test('student hub: saves and scene count match the engine', () => {
  const entry = HUB_WORLDS.find(w => w.id === 285);
  assert.equal(entry.slug, 'el-taller-de-la-greda');
  assert.equal(entry.save.key, E.STORAGE_KEY);
  assert.equal(entry.total, E.progress(E.createState()).total);
  assert.equal(entry.open, undefined, 'no public door: PRO only');
});

test('unmount frees the GPU and the WebGL context', () => {
  const cleanup = world.slice(world.indexOf('disposed = true;'));
  assert.match(cleanup, /shop\.dispose\(\)/);
  assert.match(cleanup, /renderer\.forceContextLoss\(\)/);
  assert.match(cleanup, /isTexture[\s\S]*\.dispose\(\)/);
  assert.match(cleanup, /composer\?\.passes[\s\S]*pass\.dispose\(\)/);
});

test('the catalog cover exists and matches the other 3D covers (1200×750 lossy WebP)', () => {
  const image = row.match(/image:"([^"]+)"/)?.[1];
  assert.equal(image, '/el-taller-de-la-greda/portada.webp');
  const file = readFileSync(`public${image}`);
  assert.equal(file.toString('ascii', 0, 4), 'RIFF');
  assert.equal(file.toString('ascii', 8, 16), 'WEBPVP8 ', 'plain lossy VP8, no metadata chunks');
  assert.deepEqual([file.readUInt16LE(26) & 0x3fff, file.readUInt16LE(28) & 0x3fff], [1200, 750]);
  assert.ok(file.length < 120_000, `${file.length} bytes`);
});
