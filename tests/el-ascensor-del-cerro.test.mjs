import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import * as L from '../app/el-ascensor-del-cerro/layout.mjs';
import * as E from '../app/el-ascensor-del-cerro/engine.mjs';
import { CONTENT, LEVELS } from '../app/el-ascensor-del-cerro/levels.mjs';
import { GAMES } from '../app/escucha-3d/games.mjs';
import { checkAscensor } from '../scripts/check-ascensor.mjs';

const B2 = CONTENT.B2;
const game = readFileSync('app/el-ascensor-del-cerro/AscensorGame.tsx', 'utf8');
const world = readFileSync('app/el-ascensor-del-cerro/World3D.tsx', 'utf8');
const catalog = readFileSync('app/lesson-catalog.ts', 'utf8');

test('the B2 content passes the ascensor checker (G1, N1 beat labels, routes, closing, cast voices, listening)', () => {
  const { problems } = checkAscensor();
  assert.deepEqual(problems, []);
});

test('release gate: every circle of the only listed level is authored (G6) and the LQG files exist (N1)', () => {
  const { blocked } = checkAscensor();
  assert.deepEqual(blocked, []);
  assert.deepEqual(LEVELS.map(l => l.id), ['B2']);
  assert.deepEqual(GAMES.ascensor.levels, ['B2']);
  assert.match(catalog, /\{id:246,[^\n]*levels:\["B2"\],displayLevel:"B2"[^\n]*path:"\/el-ascensor-del-cerro"/);
  assert.match(catalog, /\{id:246,news:\{addedAt:"2026-11-02",featured:false\}/, 'not featured until the G5(b) real-device check');
  for (const path of ['docs/audits/el-ascensor-del-cerro-g4-review-20261026.md', 'docs/audits/el-ascensor-del-cerro-pedagogy-20261026.md']) assert.ok(existsSync(path), path);
  assert.match(readFileSync('docs/audits/el-ascensor-del-cerro-g4-review-20261026.md', 'utf8'), /G4 VERDICT \(final\): APPROVE/);
});

test('six circles in height order, the assembly last; layout, content and listening registry agree', () => {
  assert.deepEqual(L.CIRCLE_IDS, GAMES.ascensor.spots);
  assert.deepEqual(L.CIRCLE_IDS, B2.SPOTS);
  assert.equal(L.CIRCLE_IDS.at(-1), 'asamblea');
  assert.ok(GAMES.ascensor.ownListening);
  const heights = L.CIRCLES_BY_HEIGHT.map(c => L.terraceById(c.terrace).y);
  assert.deepEqual(heights, [...heights].sort((a, b) => a - b), 'the no-WebGL list goes bottom to top');
  assert.ok(new Set(L.CIRCLES.map(c => c.terrace)).size >= 3, 'the circles sit on at least three heights');
});

test('every circle is reachable: on foot inside its terrace, and between terraces by the funicular or the stairs', () => {
  const R = 0.35, step = 0.5, b = L.BOUNDS;
  const key = (i, j) => `${i},${j}`;
  const flood = start => {
    const first = [Math.round(start.x / step), Math.round(start.z / step)];
    const seen = new Set([key(...first)]); const queue = [first];
    const terrace = L.terraceAt(start.x, start.z).id;
    while (queue.length) {
      const [i, j] = queue.shift();
      for (const [di, dj] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
        const ni = i + di, nj = j + dj, k = key(ni, nj), x = ni * step, z = nj * step;
        if (seen.has(k) || x < b.minX || x > b.maxX || z < b.minZ || z > b.maxZ || !L.isFree(x, z, R) || L.terraceAt(x, z).id !== terrace) continue;
        seen.add(k); queue.push([ni, nj]);
      }
    }
    return seen;
  };
  assert.ok(L.isFree(L.SPAWN.x, L.SPAWN.z));
  // Terraces linked by the funicular or the stairs form one connected graph.
  const reached = new Set([L.terraceAt(L.SPAWN.x, L.SPAWN.z).id]);
  for (let changed = true; changed;) {
    changed = false;
    for (const link of L.LINKS) for (const [a, z] of [[link.from, link.to], [link.to, link.from]]) if (reached.has(a) && !reached.has(z)) { reached.add(z); changed = true; }
  }
  assert.deepEqual([...reached].sort(), L.TERRACES.map(t => t.id).sort());
  assert.ok(L.LINKS.some(l => l.kind === 'funicular') && L.LINKS.some(l => l.kind === 'escalera'));
  for (const t of L.TERRACES) {
    const seen = flood(L.TERRACE_ARRIVAL[t.id]);
    for (const link of L.LINKS.filter(l => l.from === t.id || l.to === t.id)) {
      if (L.terraceAt(link.at.x, link.at.z).id === t.id) assert.ok(seen.has(key(Math.round(link.at.x / step), Math.round(link.at.z / step))), `${link.id} entrance reachable on ${t.id}`);
    }
    for (const c of L.CIRCLES.filter(c => c.terrace === t.id)) {
      assert.equal(L.spotAt(c.spot.x, c.spot.z), c.id);
      assert.ok(seen.has(key(Math.round(c.spot.x / step), Math.round(c.spot.z / step))), `${c.id} reachable on ${t.id}`);
      const a = L.arrival(c.id);
      assert.ok(L.isFree(a.x, a.z) && !L.spotAt(a.x, a.z), `${c.id}: teacher-list travel lands on free ground outside the circle`);
      assert.equal(L.terraceAt(a.x, a.z).id, c.terrace, `${c.id}: arrival on the circle's own height`);
    }
  }
});

test('the funicular ride is scripted: a pose at every moment, from the bottom station to the top, with no physics', () => {
  const ride = L.LINKS.find(l => l.kind === 'funicular');
  const seconds = L.rideSeconds(ride);
  assert.ok(seconds >= 3 && seconds <= 8, `${seconds} s`);
  const start = L.ridePose(ride, 0), end = L.ridePose(ride, seconds);
  assert.ok(start && end);
  assert.ok(Math.abs(end.y - start.y) > 3, 'the ride changes height');
  let last = start.y;
  for (let t = 0; t <= seconds; t += seconds / 20) {
    const p = L.ridePose(ride, t);
    assert.ok(Number.isFinite(p.x) && Number.isFinite(p.y) && Number.isFinite(p.z));
    assert.ok(Math.sign(end.y - start.y) * (p.y - last) >= -1e-6, 'monotonic in height');
    last = p.y;
  }
  assert.doesNotMatch(world, /cannon|rapier|ammo/i);
});

test('ambience is silent under clips, quieter with a card; the world pauses with a card', () => {
  assert.equal(E.ambienceGain({ clip: true, card: true }), 0);
  assert.equal(E.ambienceGain({ clip: true }), 0);
  assert.ok(E.ambienceGain({ card: true }) < E.ambienceGain({}));
  assert.ok(E.worldPaused({ card: true }));
  assert.ok(!E.worldPaused({}));
});

test('beats: a contrast needs the right option, wrong tries keep their feedback; a stimulus takes one pick', () => {
  const id = 'escalera', circle = B2.CIRCLES[id];
  let state = E.openScene(E.createState(), id);
  const [first] = circle.beats;
  assert.equal(first.kind, 'contrast');
  const wrong = first.options.findIndex(o => !o.correct), right = first.options.findIndex(o => o.correct);
  state = E.answerBeat(state, first, wrong);
  assert.equal(E.currentBeat(state.scene, circle), 0);
  assert.equal(E.lastFeedback(state.scene, first).correct, false);
  state = E.answerBeat(state, first, right);
  assert.equal(E.currentBeat(state.scene, circle), 1);
  for (const beat of circle.beats.slice(1)) {
    const i = beat.kind === 'contrast' ? beat.options.findIndex(o => o.correct) : 1;
    state = E.answerBeat(state, beat, i);
  }
  assert.equal(E.currentBeat(state.scene, circle), circle.beats.length);
  assert.equal(E.timelinePick(state.scene, circle), 1);
});

test('group notes live in sessionStorage and reset; the device keeps level, route and circles done', () => {
  let session = E.createSession();
  session = E.tick(session, 'cafe', 'logrado');
  session = E.recordPick(session, 'mirador', 2);
  session = E.recordPick(session, 'estacion', 0);
  const restored = E.restoreSession(E.serialiseSession(session));
  assert.deepEqual(restored, session);
  assert.deepEqual(E.resetGroup(), E.createSession());
  const device = E.restore(E.serialise(E.markDone(E.setRoute(E.createState(), 'escucha'), 'taller')));
  assert.deepEqual(device.done, { B2: ['taller'] });
  assert.equal(device.route, 'escucha');
  assert.ok(!('ticks' in JSON.parse(E.serialise(E.createState()))), 'no group data in localStorage');
  assert.equal(B2.CLOSING.sessionLabel, 'Notas de esta sesión: no se guardan por alumno');
});

test('the closing acta is built from this session only, in the order played', () => {
  let session = E.createSession();
  session = E.recordPick(session, 'mirador', 2);
  session = E.recordPick(session, 'estacion', 0);
  const story = E.timeline(session, B2.CIRCLES);
  assert.deepEqual(story.map(s => s.id), ['mirador', 'estacion']);
  assert.equal(story[0].text, B2.CIRCLES.mirador.timeline[2]);
  assert.deepEqual(E.timeline(E.createSession(), B2.CIRCLES), []);
  assert.match(game, /closing\.narrative\.opening/);
  assert.match(game, /closing\.selfCheck\.items\.map/);
  assert.match(game, /closing\.transfer\.question/);
});

test('E1: route progress counts route circles and reaches 100 only on «Terminar»', () => {
  for (const route of B2.ROUTES) {
    assert.equal(E.routeProgress(route, [], false), 0);
    assert.equal(E.routeProgress(route, [...L.CIRCLE_IDS], false), 99);
    assert.equal(E.routeProgress(route, [...L.CIRCLE_IDS], true), 100);
  }
  assert.match(game, /fetch\('\/api\/progress', \{ method: 'PUT'/);
  assert.match(game, /lessonId: LESSON_ID/);
  assert.equal(E.LESSON_ID, 246);
});

test('without 3D the list reaches every circle, listening and the closing; reduced motion and context loss fall back', () => {
  assert.match(game, /CIRCLES_BY_HEIGHT/);
  assert.match(game, /prefers-reduced-motion: reduce/);
  assert.match(game, /onFail=\{\(\) => setHas3d\(false\)\}/);
  assert.match(world, /webglcontextlost/);
  assert.match(game, /<ListeningCard game="ascensor"/);
});

test('three.js loads lazily; listening audio comes from the TTS pipeline, never speechSynthesis', () => {
  assert.match(game, /dynamic\(\(\) => import\('\.\/World3D'\), \{\s*ssr: false/);
  assert.doesNotMatch(game, /from 'three'/);
  for (const path of ['AscensorGame.tsx', 'World3D.tsx', 'cerro3d.ts', 'ambience.ts']) assert.doesNotMatch(readFileSync(`app/el-ascensor-del-cerro/${path}`, 'utf8'), /speechSynthesis/);
  const manifest = JSON.parse(readFileSync('app/escucha-3d/audio-manifest.json', 'utf8')).clips;
  for (const id of L.CIRCLE_IDS) {
    const clip = manifest[`ascensor/b2-${id}`];
    assert.ok(clip, `audio for ${id}`);
    assert.ok(existsSync(`public${clip.src}`), clip.src);
  }
});

test('no new dependency, no API route, access policy untouched; PRO by default; no claim of a Chilean accent', () => {
  const pkg = JSON.parse(readFileSync('package.json', 'utf8'));
  assert.ok(!Object.keys({ ...pkg.dependencies, ...pkg.devDependencies }).some(d => /fiber|drei|cannon|rapier|gltf/i.test(d)));
  assert.ok(!existsSync('app/api/ascensor'));
  assert.doesNotMatch(readFileSync('app/access-policy.ts', 'utf8'), /246|ascensor/);
  const row = catalog.split('\n').find(line => line.startsWith('  {id:246,'));
  const layout = readFileSync('app/el-ascensor-del-cerro/layout.tsx', 'utf8');
  for (const text of [row, layout]) assert.doesNotMatch(text, /acento chileno|Chilean accent|voces chilenas/i);
});

test('same controls and teacher tools as the other 3D worlds', () => {
  for (const needle of ['keyAction', 'inputFrom', 'stepPlayer', 'followYaw', 'createHero', 'animateHero', 'Saltar', 'Nitro']) assert.ok(world.includes(needle), needle);
  for (const needle of ['<ModeSwitch', 'Lista del profesor', 'Nueva clase / nuevo grupo']) assert.ok(game.includes(needle), needle);
});

test('the catalog cover exists and matches the other 3D covers (1200×750 lossy WebP)', () => {
  const row = catalog.split('\n').find(line => line.startsWith('  {id:246,'));
  const image = row.match(/image:"([^"]+)"/)?.[1];
  assert.equal(image, '/el-ascensor-del-cerro/cover.webp');
  const file = readFileSync(`public${image}`);
  assert.equal(file.toString('ascii', 0, 4), 'RIFF');
  assert.equal(file.toString('ascii', 8, 16), 'WEBPVP8 ', 'plain lossy VP8, no metadata chunks');
  assert.deepEqual([file.readUInt16LE(26) & 0x3fff, file.readUInt16LE(28) & 0x3fff], [1200, 750]);
  assert.ok(file.length < 120_000, `${file.length} bytes`);
});

test('unmount frees the GPU: textures, cached low-mode bakes and the WebGL context (code review B1)', () => {
  const scene = readFileSync('app/el-ascensor-del-cerro/cerro3d.ts', 'utf8');
  const cleanup = world.slice(world.indexOf('disposed = true;'));
  assert.match(cleanup, /cerro\.dispose\(\)/);
  assert.match(cleanup, /renderer\.forceContextLoss\(\)/);
  assert.match(cleanup, /isTexture[\s\S]*\.dispose\(\)/, 'texture slots of every material are disposed');
  const dispose = scene.slice(scene.indexOf('function dispose()'));
  assert.match(scene, /dispose: \(\) => void/);
  assert.match(dispose, /signTexture\.dispose\(\)/);
  assert.match(dispose, /muralMap\.dispose\(\)/);
  assert.match(dispose, /hostBakes/);
});
