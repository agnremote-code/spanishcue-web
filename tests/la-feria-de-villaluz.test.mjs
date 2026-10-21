import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import * as L from '../app/la-feria-de-villaluz/layout.mjs';
import * as E from '../app/la-feria-de-villaluz/engine.mjs';
import { CONTENT, LEVELS } from '../app/la-feria-de-villaluz/levels.mjs';
import { validateBuscaSet } from '../app/la-feria-de-villaluz/look-contract.mjs';
import { GAMES } from '../app/escucha-3d/games.mjs';
import { checkFeria } from '../scripts/check-feria.mjs';

const A2 = CONTENT.A2;
const game = readFileSync('app/la-feria-de-villaluz/FeriaGame.tsx', 'utf8');
const world = readFileSync('app/la-feria-de-villaluz/World3D.tsx', 'utf8');
const catalog = readFileSync('app/lesson-catalog.ts', 'utf8');

test('the A2 content passes the Feria checker (G1, N1, AC2–AC4, AC6–AC10, AM-1, routes, cast voices)', () => {
  const { problems } = checkFeria();
  assert.deepEqual(problems, []);
});

test('release gate: every circle of every listed level is authored (G6, AM-9)', () => {
  const { blocked } = checkFeria();
  assert.deepEqual(blocked, [], `not authored yet: ${blocked.join(', ')}`);
  assert.deepEqual(LEVELS.map(l => l.id), ['A2']);
  assert.match(catalog, /\{id:241,[^\n]*levels:\["A2"\],displayLevel:"A2"[^\n]*path:"\/la-feria-de-villaluz"/);
});

test('eight circles, one per stall, all reachable on foot from the spawn', () => {
  assert.deepEqual(L.CIRCLE_IDS, GAMES.feria.spots);
  assert.deepEqual(L.CIRCLE_IDS, A2.SPOTS);
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
    assert.ok(seen.has(key(Math.round(c.spot.x / step), Math.round(c.spot.z / step))), `${c.id} reachable`);
    const a = L.arrival(c.id);
    assert.ok(L.isFree(a.x, a.z) && !L.spotAt(a.x, a.z), `${c.id}: click-to-travel lands on free ground outside the circle (AM-5)`);
  }
});

test('AC4: every Busca candidate stands within 10 m of its circle, and the crowd keeps away from the clusters', () => {
  for (const set of A2.BUSCA) {
    const circle = set.kind === 'transfer' ? 'baile' : L.CIRCLES[set.circle - 1].id;
    const c = L.circleById(circle);
    for (const p of L.placeSet(set, circle)) {
      assert.ok(Math.hypot(p.x - c.spot.x, p.z - c.spot.z) <= 10, `${set.id}/${p.figure.id} within 10 m`);
      assert.ok(L.isFree(p.x, p.z, 0.3), `${set.id}/${p.figure.id} on free ground`);
    }
  }
  for (const id of ['informacion', 'escenario', 'fotos', 'baile']) {
    const c = L.circleById(id);
    for (const slot of [...L.defaultSlots(4), ...L.defaultSlots(5)]) {
      const p = L.slotToWorld(c, slot);
      assert.ok(Math.hypot(p.x - c.spot.x, p.z - c.spot.z) <= 10, `${id} default slot within 10 m`);
      assert.ok(L.isFree(p.x, p.z, 0.3), `${id} default slot on free ground`);
    }
  }
  const people = L.crowd(24);
  assert.equal(people.length, 24);
  for (const id of ['informacion', 'escenario', 'fotos', 'baile']) {
    const centre = L.slotToWorld(id, { x: 0, z: 0 });
    for (const p of people) assert.ok(Math.hypot(p.x - centre.x, p.z - centre.z) >= 6.5, 'no crowd inside a Busca cluster');
  }
});

test('Busca view: x is screen-right and the camera faces the cluster from behind the mascot (risk 3)', () => {
  for (const id of ['informacion', 'escenario', 'fotos', 'baile']) {
    const h = L.buscaHeading(id);
    const left = L.slotToWorld(id, { x: -2, z: 0 }), right = L.slotToWorld(id, { x: 2, z: 0 });
    // Seen from behind the mascot looking along h, screen-right is (-cos h, sin h).
    const rx = -Math.cos(h), rz = Math.sin(h);
    assert.ok((right.x - left.x) * rx + (right.z - left.z) * rz > 3.9, id);
  }
  assert.match(world, /if \(live\.current\.busca\) return;/, 'drag-look is off while a Busca card is open');
  assert.match(world, /player\.heading = buscaHeading\(c\); yaw = player\.heading;/, 'camera yaw snaps to the mascot heading');
});

test('AC5: ambience is silent under clips, 0.3 with a card, 1 otherwise; the world pauses with a card', () => {
  assert.equal(E.ambienceGain({ clip: true, card: true }), 0);
  assert.equal(E.ambienceGain({ clip: true }), 0);
  assert.equal(E.ambienceGain({ card: true }), 0.3);
  assert.equal(E.ambienceGain({}), 1);
  assert.ok(E.worldPaused({ card: true }));
  assert.ok(!E.worldPaused({}));
  assert.match(game, /ambienceGain\(\{ clip: voice, card: cardOpen \}\)/);
  assert.match(world, /const moving = !p\.paused && !circleId && !busca && !p\.intro;/);
});

test('beats: a contrast needs the right option, wrong tries keep their feedback; a stimulus takes one pick', () => {
  const circle = A2.CIRCLES.churreria;
  let state = E.openScene(E.createState(), 'churreria');
  const [pedir] = circle.beats;
  const wrong = pedir.options.findIndex(o => !o.correct), right = pedir.options.findIndex(o => o.correct);
  state = E.answerBeat(state, pedir, wrong);
  assert.equal(E.currentBeat(state.scene, circle), 0);
  assert.equal(E.lastFeedback(state.scene, pedir).correct, false);
  assert.ok(E.lastFeedback(state.scene, pedir).text.length > 10);
  state = E.answerBeat(state, pedir, right);
  assert.equal(E.currentBeat(state.scene, circle), 1);
  assert.equal(E.answerBeat(state, pedir, wrong), state, 'a solved contrast does not change');
  for (const beat of circle.beats.slice(1)) {
    const i = beat.kind === 'contrast' ? beat.options.findIndex(o => o.correct) : 1;
    state = E.answerBeat(state, beat, i);
  }
  assert.equal(E.currentBeat(state.scene, circle), circle.beats.length);
  assert.equal(E.timelinePick(state.scene, circle), 1);
});

test('D2/AM-7: group notes live in sessionStorage and reset; the device keeps level, route and circles done', () => {
  let session = E.createSession();
  session = E.tick(session, 'churreria', 'logrado');
  session = E.recordPick(session, 'noria', 2);
  session = E.recordPick(session, 'churreria', 0);
  session = E.toggleCheck(session, 'fondo');
  const restored = E.restoreSession(E.serialiseSession(session));
  assert.deepEqual(restored, session);
  assert.deepEqual(E.resetGroup(), E.createSession());
  const device = E.restore(E.serialise(E.markDone(E.setRoute(E.createState(), 'escucha'), 'tombola')));
  assert.deepEqual(device.done, { A2: ['tombola'] });
  assert.equal(device.route, 'escucha');
  assert.ok(!('ticks' in JSON.parse(E.serialise(E.createState()))), 'no group data in localStorage');
  assert.match(game, /write\('session', SESSION_KEY, serialiseSession\(session\)\)/);
  assert.match(game, /write\('local', STORAGE_KEY, serialise\(state\)\)/);
  assert.match(game, /Notas de esta sesión: no se guardan por alumno|closing\.sessionLabel/);
  assert.equal(A2.CLOSING.sessionLabel, 'Notas de esta sesión: no se guardan por alumno');
});

test('AC9: the closing timeline renders from this session only, in the order played', () => {
  let session = E.createSession();
  session = E.recordPick(session, 'noria', 2);
  session = E.recordPick(session, 'churreria', 0);
  const story = E.timeline(session, A2.CIRCLES);
  assert.deepEqual(story.map(s => s.id), ['noria', 'churreria']);
  assert.equal(story[0].text, A2.CIRCLES.noria.timeline[2]);
  assert.deepEqual(E.timeline(E.createSession(), A2.CIRCLES), []);
  assert.match(game, /closing\.narrative\.opening/);
  assert.match(game, /closing\.selfCheck\.items\.map/);
  assert.match(game, /closing\.transfer\.question/);
});

test('E1: route progress counts route circles and reaches 100 only on «Terminar»', () => {
  const conv = A2.ROUTES.find(r => r.id === 'conversacion');
  const circles = E.routeCircles(conv);
  assert.ok(['informacion', 'escenario', 'fotos'].every(id => circles.includes(id)), 'AM-1');
  assert.equal(E.routeProgress(conv, [], false), 0);
  const all = [...L.CIRCLE_IDS];
  assert.equal(E.routeProgress(conv, all, false), 99);
  assert.equal(E.routeProgress(conv, all, true), 100);
  assert.equal(E.routeProgress(conv, ['churreria'], false), E.routeProgress(conv, ['noria'], false), 'oneOf: either circle counts');
  assert.match(game, /fetch\('\/api\/progress', \{ method: 'PUT'/);
  assert.match(game, /lessonId: LESSON_ID/);
  assert.equal(E.LESSON_ID, 241);
});

test('Busca: a wrong pick names a feature, the target shows only after it is found (AC3, D4)', () => {
  for (const set of A2.BUSCA) {
    assert.deepEqual(validateBuscaSet(set), []);
    let session = E.createSession();
    for (const f of set.figures.filter(f => f.id !== set.target)) {
      const r = E.buscaTry(session, set, f.id);
      assert.equal(r.correct, false);
      assert.match(r.feedback, /^No, no es esa persona\./);
      session = r.session;
    }
    assert.equal(E.buscaState(session, set.id).solved, false);
    const r = E.buscaTry(session, set, set.target);
    assert.ok(r.correct && E.buscaState(r.session, set.id).solved);
  }
  assert.match(game, /reveal=\{buscaSet && buscaState\(session, buscaSet\.id\)\.solved \? buscaSet\.target : null\}/);
});

test('AC11/T3: without 3D the list and the map reach every circle, listening, Busca set and the closing', () => {
  assert.match(game, /const showList = list \|\| \(ready && entered && !use3d && !busy\);/);
  assert.match(game, /\{CIRCLES\.map\(c => <li key=\{c\.id\}><button type="button"[^>]*onClick=\{\(\) => open\(c\.id\)\}/);
  assert.match(game, /setFlat\(window\.matchMedia\('\(prefers-reduced-motion: reduce\)'\)\.matches\)/, 'reduced motion forces the map');
  assert.match(game, /onFail=\{\(\) => setHas3d\(false\)\}/);
  assert.match(world, /webglcontextlost/);
  assert.match(game, /Usar el mapa/);
  assert.match(game, /<BuscaPanel key=\{buscaSet\.id\} set=\{buscaSet\} session=\{session\} flat=\{!use3d\}/);
  assert.match(readFileSync('app/la-feria-de-villaluz/Busca2D.tsx', 'utf8'), /lookOf\(figure\)/, 'SVG figures come from the same record as the 3D people (AM-3)');
  assert.match(game, /<ListeningCard game="feria"/);
});

test('T2/T6: three.js loads lazily; listening audio comes from the TTS pipeline, never speechSynthesis', () => {
  assert.match(game, /dynamic\(\(\) => import\('\.\/World3D'\), \{\s*ssr: false/);
  assert.doesNotMatch(game, /from 'three'/);
  for (const path of ['FeriaGame.tsx', 'World3D.tsx', 'feria3d.ts', 'Busca2D.tsx', 'ambience.ts']) assert.doesNotMatch(readFileSync(`app/la-feria-de-villaluz/${path}`, 'utf8'), /speechSynthesis/);
  assert.match(game, /\/audio\/escucha-3d\/feria-a2-busca-\$\{set\.id\}\.mp3/);
  assert.match(game, /todavía no está generado/, 'missing audio is reported, never faked');
});

test('T1: no new dependency, no API route, access policy untouched; PRO by default', () => {
  const pkg = JSON.parse(readFileSync('package.json', 'utf8'));
  assert.ok(!Object.keys({ ...pkg.dependencies, ...pkg.devDependencies }).some(d => /fiber|drei|cannon|rapier|gltf/i.test(d)));
  assert.ok(!existsSync('app/api/feria'));
  assert.doesNotMatch(readFileSync('app/access-policy.ts', 'utf8'), /241|feria/);
});

test('same controls and teacher tools as the other 3D worlds', () => {
  for (const needle of ['keyAction', 'inputFrom', 'stepPlayer', 'followYaw', 'createHero', 'animateHero', 'fv-joy', 'Saltar', 'Nitro']) assert.ok(world.includes(needle), needle);
  for (const needle of ['<ModeSwitch', 'Lista del profesor', 'Mapa sin movimiento', 'Nueva clase / nuevo grupo']) assert.ok(game.includes(needle), needle);
});

test('the Busca announcements file for the audio generator is in sync with BUSCA (one voice each)', async () => {
  const { announcementJson, announcementPath } = await import('../scripts/export-feria-announcements.mjs');
  assert.equal(readFileSync(announcementPath('A2'), 'utf8'), announcementJson('A2'), 'run node scripts/export-feria-announcements.mjs');
  const voices = JSON.parse(readFileSync('app/escucha-3d/voices.json', 'utf8'));
  for (const set of A2.BUSCA) assert.ok(voices[set.voice], `${set.id}: voice ${set.voice}`);
  assert.match(readFileSync('scripts/generate-escucha-3d-audio.py', 'utf8'), /data\.get\('announcements', \[\]\)/);
});
