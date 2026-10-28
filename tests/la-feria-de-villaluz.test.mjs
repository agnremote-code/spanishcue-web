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

test('Busca feedback never shows a raw id, and «¡Encontrado/a!» agrees with the target', () => {
  assert.match(game, /buscaTry\(session, buscaSet, figureId, buscaNames\(buscaSet\)\)/, 'the UI passes the names map');
  assert.doesNotMatch(game, /'¡Encontrada!'|'✓ Encontrada'/, 'no fixed feminine label');
  for (const set of A2.BUSCA) {
    const names = E.buscaNames(set);
    const ids = new Set([...set.figures.map(f => f.id), ...(set.landmarks ?? []).map(l => l.id)]);
    for (const f of set.figures.filter(f => f.id !== set.target)) {
      const text = E.buscaTry(E.createSession(), set, f.id, names).feedback;
      for (const id of ids) if (!/\s/.test(id)) assert.ok(!text.includes(id), `${set.id}: feedback for ${f.id} shows the id '${id}': ${text}`);
      assert.doesNotMatch(text, /La persona del aviso es (rubio|pelirrojo|canoso|moreno|castaño|calvo|alto|bajo)\b|está sentado\b/, `${set.id}: ${text}`);
    }
    const target = set.figures.find(f => f.id === set.target);
    assert.equal(E.foundLabel(set), target.body === 'm' ? 'Encontrado' : 'Encontrada');
  }
  // A Spanish-phrase id (Martin's fotos references) is kept as written; any other id becomes the shown number.
  const set = { figures: [{ id: 'x1' }, { id: 'la abuela sentada' }], landmarks: [{ id: 'fuente', x: 0, z: 0 }] };
  assert.deepEqual(E.buscaNames(set), { x1: 'la persona número 1', 'la abuela sentada': 'la abuela sentada', fuente: 'el punto de referencia' });
  assert.equal(E.foundLabel({ target: 't', figures: [{ id: 't', body: 'm' }] }), 'Encontrado');
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

test('the catalog cover exists and matches the other 3D covers (1200×750 lossy WebP)', () => {
  const row = readFileSync('app/lesson-catalog.ts', 'utf8').split('\n').find(line => line.startsWith('  {id:241,'));
  assert.ok(row, 'catalog row 241');
  const image = row.match(/image:"([^"]+)"/)?.[1];
  assert.equal(image, '/la-feria-de-villaluz/cover.webp');
  const file = readFileSync(`public${image}`);
  assert.equal(file.toString('ascii', 0, 4), 'RIFF');
  assert.equal(file.toString('ascii', 8, 16), 'WEBPVP8 ', 'plain lossy VP8, no metadata chunks');
  // VP8 key frame header: 14-bit width and height after the 3-byte start code.
  assert.deepEqual([file.readUInt16LE(26) & 0x3fff, file.readUInt16LE(28) & 0x3fff], [1200, 750]);
  assert.ok(file.length < 120_000, `${file.length} bytes`);
});

test('settleScene: a circle counts as done on its last beat and its first pick feeds the story (no effects)', () => {
  assert.doesNotMatch(game, /useEffect\(\(\) => \{ if \(finished/, 'no setState in an effect for E1');
  assert.match(game, /settleScene\(nextState, nextSession, circles\)/);
  const [id, circle] = Object.entries(A2.CIRCLES).find(([, c]) => !c.status && c.beats.every(b => b.kind !== 'busca'));
  let state = E.openScene(E.createState(), id), session = E.createSession();
  for (const beat of circle.beats) {
    const index = beat.kind === 'contrast' ? beat.options.findIndex(o => o.correct) : 0;
    ({ state, session } = E.settleScene(E.answerBeat(state, beat, index), session, A2.CIRCLES));
  }
  assert.ok(E.doneFor(state).includes(id), `${id} done after its last beat`);
  const pick = E.timelinePick(state.scene, circle);
  if (pick !== null) assert.equal(session.picks[id], pick);
  const again = E.settleScene(state, session, A2.CIRCLES);
  assert.equal(again.session, session, 'settling twice changes nothing');
  assert.deepEqual(E.settleScene(E.createState(), session, A2.CIRCLES).state, E.createState());
});

// ------------------------------------------------------------------ Busca framing (D6 fix, 2026-10-21)
// Projects the real Busca camera (layout.buscaCamera, as World3D uses it) and
// checks, in screen space, that no candidate is hidden by the mascot, a circle
// host, the ambient crowd, a stall or a pole in front of it, that every
// candidate with its number label is fully in frame, and that the camera is
// clear of the stalls (the informacion awning wedge).
function busca2d(circle, aspect, points) {
  const cam = L.buscaCamera(circle, aspect, points);
  const sub = (a, b) => ({ x: a.x - b.x, y: a.y - b.y, z: a.z - b.z }), dot = (a, b) => a.x * b.x + a.y * b.y + a.z * b.z;
  const norm = a => { const l = Math.hypot(a.x, a.y, a.z); return { x: a.x / l, y: a.y / l, z: a.z / l }; };
  const f = norm(sub(cam.target, cam.position)), r = norm({ x: -f.z, y: 0, z: f.x }), u = { x: r.y * f.z - r.z * f.y, y: r.z * f.x - r.x * f.z, z: r.x * f.y - r.y * f.x };
  const tv = Math.tan((cam.fov * Math.PI) / 360), th = tv * aspect;
  const rect = (x, z, w, y0, y1, d = w) => {
    const pts = [];
    for (const ox of [-w, w]) for (const oz of [-d, d]) for (const y of [y0, y1]) { const v = sub({ x: x + ox, y, z: z + oz }, cam.position); const depth = dot(v, f); pts.push({ x: dot(v, r) / (depth * th), y: dot(v, u) / (depth * tv), z: depth }); }
    if (pts.some(p => p.z <= 0.2)) return null;
    return { x0: Math.min(...pts.map(p => p.x)), x1: Math.max(...pts.map(p => p.x)), y0: Math.min(...pts.map(p => p.y)), y1: Math.max(...pts.map(p => p.y)), z: Math.min(...pts.map(p => p.z)) };
  };
  return { cam, rect };
}
const overlaps = (a, b) => Math.min(a.x1, b.x1) > Math.max(a.x0, b.x0) && Math.min(a.y1, b.y1) > Math.max(a.y0, b.y0);
function framingProblems(circle, aspect, points) {
  const c = L.circleById(circle);
  const { cam, rect } = busca2d(circle, aspect, points);
  const problems = [];
  const blockers = [{ id: 'mascot', r: rect(c.spot.x, c.spot.z, 0.35, 0, 1.9) }];
  for (const o of L.CIRCLES) blockers.push({ id: `host ${o.id}`, r: rect(o.npc.x, o.npc.z, 0.28, 0, 1.85) });
  L.crowd(24).forEach((p, i) => blockers.push({ id: `crowd ${i}`, r: rect(p.x, p.z, 0.28, 0, 1.85) }));
  for (const b of L.SOLIDS) blockers.push({ id: `stall ${b.x0},${b.z0}`, r: rect((b.x0 + b.x1) / 2, (b.z0 + b.z1) / 2, (b.x1 - b.x0) / 2 + 0.3, 0, b.top ?? 3.3, (b.z1 - b.z0) / 2 + 0.3) });
  for (const p of L.POLES) blockers.push({ id: `pole ${p.x.toFixed(1)},${p.z.toFixed(1)}`, r: rect(p.x, p.z, 0.1, 0, p.h) });
  points.forEach((p, i) => {
    const body = rect(p.x, p.z, 0.28, 0, 1.8), label = rect(p.x, p.z, 0.3, 0, 1.8 + 0.85);
    if (!label || label.x0 < -1 || label.x1 > 1 || label.y0 < -1 || label.y1 > 1) problems.push(`candidate ${i + 1} not fully in frame`);
    for (const b of blockers) if (b.r && body && b.r.z < body.z && overlaps(b.r, body)) problems.push(`candidate ${i + 1} hidden by ${b.id}`);
    // A near pole behind a candidate (within 6 m, e.g. the dance-floor pole) still cuts through them on screen.
    for (const b of blockers) if (b.id.startsWith('pole') && b.r && body && b.r.z >= body.z && b.r.z - body.z < 6 && overlaps(b.r, body)) problems.push(`candidate ${i + 1} crossed by ${b.id} behind`);
  });
  for (const b of L.SOLIDS) if (b.top == null && cam.position.x > b.x0 - 1.2 && cam.position.x < b.x1 + 1.2 && cam.position.z > b.z0 - 1.2 && cam.position.z < b.z1 + 1.2) problems.push('camera inside a stall awning');
  return problems;
}

test('Busca framing: no candidate hidden or out of frame, at every Busca place, on tablet, laptop and 390 px portrait', () => {
  const aspects = { tablet: 1180 / 820, laptop: 16 / 9, phone: 390 / 844 };
  for (const id of ['informacion', 'escenario', 'fotos', 'baile']) for (const [name, aspect] of Object.entries(aspects)) for (const n of [4, 5]) {
    const points = L.defaultSlots(n).map(slot => L.slotToWorld(id, slot));
    assert.deepEqual(framingProblems(id, aspect, points), [], `${id} ${name} ${n} slots`);
  }
  for (const set of A2.BUSCA) {
    const circle = set.kind === 'transfer' ? 'baile' : L.CIRCLES[set.circle - 1].id;
    const points = L.placeSet(set, circle);
    for (const [name, aspect] of Object.entries(aspects)) assert.deepEqual(framingProblems(circle, aspect, points), [], `${set.id} ${name}`);
  }
  // Same view as before: behind the mascot, along his heading (screen-left = his left).
  for (const id of ['informacion', 'escenario', 'fotos', 'baile']) {
    const c = L.circleById(id), cam = L.buscaCamera(id, 1.5), h = L.buscaHeading(id);
    assert.ok(Math.abs(Math.atan2(cam.target.x - cam.position.x, cam.target.z - cam.position.z) - h) < 1e-9 || Math.abs(Math.abs(Math.atan2(cam.target.x - cam.position.x, cam.target.z - cam.position.z) - h) - 2 * Math.PI) < 1e-9, `${id} looks along the mascot's heading`);
    assert.ok((c.spot.x - cam.position.x) * Math.sin(h) + (c.spot.z - cam.position.z) * Math.cos(h) > 0, `${id} camera behind the mascot`);
  }
  assert.match(world, /buscaCamera\(busca\.circle, camera\.aspect, busca\.placed\)/, 'World3D uses the tested camera');
  assert.match(world, /new THREE\.DirectionalLight\('#fff1dc', 0\)/, 'one scene-wide fill, never a light on the target (AC4)');
});

test('T5 low path: static scenery, crowd, hosts and Busca candidates are baked; cabins instanced; one live host', () => {
  const fair = readFileSync('app/la-feria-de-villaluz/feria3d.ts', 'utf8');
  const baker = readFileSync('app/la-feria-de-villaluz/bake3d.ts', 'utf8');
  assert.match(fair, /import \{ bake \} from '\.\/bake3d';/);
  assert.match(fair, /for \(const p of crowd\(low \? 10 : 24\)\)/, '§3: ~10 people in low mode');
  assert.match(fair, /root\.add\(bake\(\[root\], \{ skip: m => ringsAndGems\.has\(m\) \|\| isLive\(m\) \}\)\);/, 'static scenery baked');
  assert.match(fair, /spin\.add\(bake\(\[spin\], \{ relativeTo: spin \}\)\);/, 'the turning wheel frame baked in its own frame');
  assert.match(fair, /new THREE\.InstancedMesh\(new THREE\.BoxGeometry\(1\.1, 0\.9, 1\)/, 'cabins instanced');
  assert.match(fair, /candidateBake = bake\(candidates\.map\(c => c\.person\.root\), \{ people: true \}\);/, 'Busca candidates baked in low mode');
  assert.match(world, /fair\.focus\(circleId && !busca \? circleId : null\);/, 'only the open circle\'s host is live');
  // A baked person keeps its colours (vertex colour = material colour) and no part is lit apart (AC4).
  assert.match(baker, /color: m\.color\.clone\(\)/);
  assert.doesNotMatch(fair, /PointLight[^\n]*low|if \(low\)[^\n]*PointLight/, 'no extra point lights in low mode');
});

test('unmount frees the GPU: label textures, cached low-mode host bakes and the WebGL context (Feria QA note; Ascensor code review B1)', () => {
  const fair = readFileSync('app/la-feria-de-villaluz/feria3d.ts', 'utf8');
  const cleanup = world.slice(world.indexOf('disposed = true;'));
  assert.match(cleanup, /fair\.dispose\(\)/);
  assert.match(cleanup, /renderer\.forceContextLoss\(\)/);
  assert.match(cleanup, /isTexture[\s\S]*\.dispose\(\)/, 'texture slots of every material are disposed');
  assert.match(fair, /dispose: \(\) => void/);
  const dispose = fair.slice(fair.indexOf('function dispose()'));
  assert.match(dispose, /clearBusca\(\)/, 'the Busca label canvas textures');
  assert.match(dispose, /hostBakes\.values\(\)[\s\S]*geometry\.dispose\(\)[\s\S]*hostBakes\.clear\(\)/, 'every cached host bake, attached or not');
});
