// El mundo en blanco (ID 259, /el-mundo-en-blanco): a paper world that lost
// its ink. Twelve folded beings in four regions, one deep question each, and
// colour floods back from every encounter the student closes.
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import * as L from '../app/el-mundo-en-blanco/layout.mjs';
import * as E from '../app/el-mundo-en-blanco/engine.mjs';
import { CAST, LEVEL_IDS, OPTIONS, SPOTS, TALKS, ZONES } from '../app/el-mundo-en-blanco/story.mjs';
import { GAMES } from '../app/escucha-3d/games.mjs';
import { checkAll } from '../scripts/check-mundo-en-blanco.mjs';
import { buildIndex, repeats } from '../scripts/question-index.mjs';
import { PLAYER_RADIUS } from '../app/noche-abierta/world3d.mjs';

const read = (path) => readFileSync(path, 'utf8');
const game = read('app/el-mundo-en-blanco/MundoGame.tsx');
const world = read('app/el-mundo-en-blanco/World3D.tsx');
const card = read('app/el-mundo-en-blanco/Encuentro.tsx');
const paper = read('app/el-mundo-en-blanco/papel3d.ts');
const beings = read('app/el-mundo-en-blanco/seres3d.ts');
const css = read('app/el-mundo-en-blanco/mundo.css');
const catalog = read('app/lesson-catalog.ts');
const es = (t) => (typeof t === 'string' ? t : t?.es ?? '');
const levelOf = async (level) => (await import(`../app/el-mundo-en-blanco/levels/${level.toLowerCase()}.mjs`)).default;

test('all seven levels pass the checker (twelve encounters, words per level, one deep question, three open ones, no gender for the student, neutral Spanish)', async () => {
  assert.deepEqual(await checkAll(), []);
});

test('four regions with three paper beings each, every one with its own voice from a different country', () => {
  assert.deepEqual(ZONES.map((z) => z.id), ['muelle', 'bosque', 'ciudad', 'cumbre']);
  assert.equal(SPOTS.length, 12);
  for (const z of ZONES) assert.equal(SPOTS.filter((s) => s.zone === z.id).length, 3, z.id);
  const cast = SPOTS.map((s) => CAST[s.cast[0]]);
  assert.ok(cast.every(Boolean));
  assert.equal(new Set(cast.map((c) => c.voice)).size, 12, 'twelve voices');
  assert.equal(new Set(cast.map((c) => c.country)).size, 12, 'twelve countries');
  assert.deepEqual(L.PLACES.map((p) => p.id), SPOTS.map((s) => s.id));
  assert.deepEqual([OPTIONS, TALKS], [3, 3]);
});

test('no generic dolls: each being is folded by hand in its own function, and nobody but the student uses the mascot', () => {
  for (const s of SPOTS) assert.match(beings, new RegExp(`\\b${s.id}\\b`), `${s.id} has its own model`);
  assert.doesNotMatch(beings, /createHero|createPerson|figures3d/, 'beings are not people rigs');
  assert.match(world, /createHero/, 'the student is the SpanishCue mascot');
});

test('the questions of this world are asked nowhere else on the site', async () => {
  const index = buildIndex({ exclude: ['app/el-mundo-en-blanco', 'app/escucha-3d/content/papel'] });
  const bad = [];
  for (const level of LEVEL_IDS) {
    const content = await levelOf(level);
    for (const s of SPOTS) for (const t of [content[s.id].q, ...content[s.id].talk]) {
      for (const q of es(t).match(/¿[^?¿]{4,400}\?/g) ?? []) {
        const hit = repeats(index, q);
        if (hit && hit.score >= 0.7) bad.push(`${level} ${s.id}: «${q}» ≈ «${hit.text}» (${[...hit.where][0]})`);
      }
    }
    const file = JSON.parse(read(`app/escucha-3d/content/papel/${level.toLowerCase()}.json`));
    for (const item of file.items) for (const o of item.open) {
      const hit = repeats(index, o.q);
      if (hit && hit.score >= 0.7) bad.push(`${level} escucha ${item.id}: «${o.q}» ≈ «${hit.text}» (${[...hit.where][0]})`);
    }
  }
  assert.deepEqual(bad, []);
});

test('every circle, the inkwell and the spawn are reachable on foot, and nobody stands in a solid', () => {
  const step = 0.5, R = PLAYER_RADIUS, solids = L.solidsFor(), b = L.BOUNDS;
  const free = (x, y) => x > b.minX && x < b.maxX && y > b.minZ && y < b.maxZ && !solids.some((s) => s.top == null && x > s.x0 - R && x < s.x1 + R && y > s.z0 - R && y < s.z1 + R);
  assert.ok(free(L.SPAWN.x, L.SPAWN.z), 'spawn');
  const first = [Math.round(L.SPAWN.x / step), Math.round(L.SPAWN.z / step)];
  const seen = new Set([first.join()]), queue = [first];
  for (let q = 0; q < queue.length; q++) {
    const [i, j] = queue[q];
    for (const [di, dj] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
      const ni = i + di, nj = j + dj, k = `${ni},${nj}`;
      if (seen.has(k) || !free(ni * step, nj * step)) continue;
      seen.add(k); queue.push([ni, nj]);
    }
  }
  const near = (p, d = 1.2) => [...seen].some((k) => { const [i, j] = k.split(',').map(Number); return Math.hypot(i * step - p.x, j * step - p.z) < d; });
  for (const p of L.PLACES) assert.ok(near(p), `${p.id} unreachable`);
  assert.ok(near(L.FINAL, L.FINAL.r + 1), 'inkwell unreachable');
  for (const p of L.peopleOf()) assert.ok(!solids.some((s) => p.x > s.x0 - 0.25 && p.x < s.x1 + 0.25 && p.z > s.z0 - 0.25 && p.z < s.z1 + 0.25), `${p.id} inside a solid`);
  // A circle never sits on its being, nor on another circle.
  for (const p of L.PLACES) {
    if (!p.being.air) assert.ok(Math.hypot(p.x - p.being.x, p.z - p.being.z) >= p.being.radius + R, `${p.id}: the circle is on the being`);
    for (const o of L.PLACES) if (o.id !== p.id) assert.ok(Math.hypot(o.x - p.x, o.z - p.z) >= 6, `${p.id} too close to ${o.id}`);
  }
});

test('progress per level: one answer per encounter, ink grows with every closed encounter, ending, reset, account rows round-trip', () => {
  let s = E.createState('B1');
  s = E.answer(s, 'grulla', 1);
  assert.equal(E.answer(s, 'grulla', 9), s, 'no answer beyond the three');
  assert.equal(E.inkOf(s), 0, 'answering is not closing');
  s = E.markDone(s, 'grulla');
  assert.equal(E.markDone(s, 'grulla'), s, 'a second visit does not add ink');
  assert.equal(E.markDone(s, 'nadie'), s, 'unknown spots are ignored');
  assert.ok(Math.abs(E.inkOf(s) - 1 / 12) < 1e-9);
  assert.equal(E.nextSpot(s, 'grulla').id, 'barco');
  s = E.decide(s, 'regalar');
  assert.equal(E.decide(s, 'quemar'), s, 'only the three endings');
  const back = E.fromSaved(E.toSaved(s));
  assert.deepEqual([back.done, back.answers, back.ending], [s.done, s.answers, s.ending]);
  s = E.setLevel(s, 'A0');
  assert.deepEqual(E.doneFor(s), []);
  assert.deepEqual(E.doneFor(E.resetLevel(E.setLevel(s, 'B1'))), []);
  assert.deepEqual(E.restore('{bad json'), E.createState());
});

test('Comprensión auditiva lives in the same world: one listening per region and level, spoken by the beings themselves', () => {
  const g = GAMES.papel;
  assert.deepEqual(g.levels, LEVEL_IDS);
  assert.deepEqual(g.spots, ZONES.map((z) => z.id));
  assert.equal(g.ownListening, true);
  const names = new Map(Object.values(CAST).map((c) => [c.name, c]));
  for (const level of LEVEL_IDS) {
    const file = JSON.parse(read(`app/escucha-3d/content/papel/${level.toLowerCase()}.json`));
    assert.equal(file.game, 'papel'); assert.equal(file.level, level);
    assert.deepEqual(file.items.map((i) => i.id), ZONES.map((z) => z.id), level);
    for (const item of file.items) for (const sp of item.speakers) {
      const member = names.get(sp.name);
      assert.ok(member, `${level} ${item.id}: ${sp.name}`);
      assert.equal(member.voice, sp.voice);
      assert.equal(SPOTS.find((s) => CAST[s.cast[0]] === member).zone, item.id, `${level} ${item.id}: ${sp.name} lives in another region`);
    }
  }
  assert.ok(game.includes('<ModeSwitch'));
  assert.match(game, /game="papel"/);
});

test('the paper look: ink wells in the shader, pencil outlines in post, and a cheaper path for phones', () => {
  assert.match(paper, /onBeforeCompile/);
  assert.match(paper, /wells/);
  assert.match(paper, /colorspace_fragment/);
  assert.match(world, /calidad/);
  assert.match(world, /INTRO_SECONDS = (\d+)/);
  assert.ok(Number(world.match(/INTRO_SECONDS = (\d+)/)[1]) <= 10, 'the intro lasts ten seconds at most');
  assert.doesNotMatch(css, /neon|#0ff\b|#39ff14/i, 'no neon dashboard');
  assert.doesNotMatch(game, /ranking|monedas|puntos\b/i, 'no coins, no ranking: the reward is the colour');
});

test('same controls as the other 3D worlds; three.js and the world load lazily; music has the shared volume slider', () => {
  for (const needle of ['keyAction', 'inputFrom', 'stepPlayer', 'followYaw', 'createHero', 'animateHero', 'pushOut']) assert.ok(world.includes(needle), needle);
  assert.doesNotMatch(game, /from ['"]three['"]/);
  assert.match(game, /import\(['"]\.\/World3D['"]\)/);
  assert.match(game, /MusicVolume/);
  assert.ok(card.includes('Ir directo a la pregunta'), 'every encounter can skip to the question');
  assert.ok(card.includes('Más tinta'));
  assert.doesNotMatch(card + game, /pide al alumno|pídele al alumno/i);
});

test('PRO by default: listed in the catalog, not in the access policy, counted as a 3D world, no new dependency', () => {
  assert.match(catalog, /\{id:259,[^\n]*levels:\["A0","A1","A2","B1","B2","C1","C2"\],displayLevel:"A0–C2"[^\n]*path:"\/el-mundo-en-blanco"/);
  assert.doesNotMatch(read('app/access-policy.ts'), /\b259\b|el-mundo-en-blanco/);
  assert.match(read('app/resource-seo.ts'), /\[259, "papel"\]/);
  assert.match(read('app/api/live-class/route.ts'), /WORLD_LESSON_IDS = new Set\(\[[^\]]*\b259\b/);
  assert.match(game, /LESSON_ID = 259/);
  const pkg = JSON.parse(read('package.json'));
  assert.ok(!Object.keys({ ...pkg.dependencies, ...pkg.devDependencies }).some((d) => /fiber|drei|cannon|rapier|gltf/i.test(d)));
  assert.ok(!existsSync('app/api/el-mundo-en-blanco'));
});

test('the catalog cover is a 1200×750 lossy WebP like the other 3D covers, and the card has its hover video', () => {
  const file = readFileSync('public/el-mundo-en-blanco/portada.webp');
  assert.equal(file.toString('ascii', 0, 4), 'RIFF');
  assert.equal(file.toString('ascii', 8, 16), 'WEBPVP8 ');
  assert.deepEqual([file.readUInt16LE(26) & 0x3fff, file.readUInt16LE(28) & 0x3fff], [1200, 750]);
  assert.ok(file.length < 120_000, `${file.length} bytes`);
  assert.ok(existsSync('public/conversation-previews/259.mp4'));
  assert.ok(readFileSync('public/conversation-previews/259.mp4').length < 400_000);
});
