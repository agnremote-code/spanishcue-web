// HR Crisis (ID 258, /hr-crisis): a chaotic company in 3D and Tizia, the
// configurable HR mascot. Six missions (19 tasks) authored for A1–C1 with
// typed production and contextual feedback, the help tab in the student's
// language closed by default, the notebook of recurring mistakes, and one
// listening per mission in the same world.
import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { COUNTRIES, DEFAULT_PROFILE, LEVEL_IDS, NATIVE, fill, normaliseProfile, profileFromQuery } from '../app/hr-crisis/config.mjs';
import { LEVEL_RULES, MISSIONS, TASKS, TASK_IDS, missionOpen, variant } from '../app/hr-crisis/misiones.mjs';
import { CHECKS, emptyStats, evaluate, intentOf, interference, recordAnswer, recurring } from '../app/hr-crisis/evaluar.mjs';
import { CANDIDATES, answerFor } from '../app/hr-crisis/candidatos.mjs';
import { AYUDA } from '../app/hr-crisis/ayuda.mjs';
import * as O from '../app/hr-crisis/oficina.mjs';
import { complete, createState, remember, restore, serialise } from '../app/hr-crisis/engine.mjs';
import { GAMES, listeningFor } from '../app/escucha-3d/games.mjs';
import { checkFile } from '../scripts/check-escucha-3d.mjs';
import { scanSource } from '../scripts/neutral-spanish.mjs';

const words = (text) => (String(text).match(/[\p{L}\p{N}]+/gu) ?? []).length;

test('six missions, 19 tasks, every task genuinely authored at A1, A2, B1, B2 and C1', () => {
  assert.deepEqual(LEVEL_IDS, ['A1', 'A2', 'B1', 'B2', 'C1']);
  assert.equal(MISSIONS.length, 6);
  assert.equal(TASKS.length, 19);
  assert.equal(new Set(TASK_IDS).size, 19);
  for (let n = 1; n <= 6; n++) assert.ok(TASKS.some(t => t.mission === n), `mission ${n} has tasks`);
  for (const task of TASKS) {
    const lines = LEVEL_IDS.map(level => variant(task, level).line);
    assert.equal(new Set(lines).size, 5, `${task.id}: five different texts, not one copied with a new badge`);
    for (const level of LEVEL_IDS) {
      const v = variant(task, level);
      assert.ok(v.line && v.prompt && Array.isArray(v.hints), `${task.id} ${level}`);
      if (task.kind === 'interview') assert.ok(v.need >= 3, `${task.id} ${level}: the student asks her own questions`);
      else assert.ok(v.write?.model && v.write.min > 0, `${task.id} ${level} asks for typed production`);
    }
    // Answers get longer and richer as the level goes up.
    if (task.kind === 'interview') assert.ok(variant(task, 'C1').need >= variant(task, 'A1').need, `${task.id}: C1 asks for more than A1`);
    else assert.ok(variant(task, 'C1').write.min > variant(task, 'A1').write.min, `${task.id}: C1 asks for more than A1`);
  }
});

test('no repetitive multiple choice: the student writes, interviews, finds errors, orders and decides', () => {
  const kinds = new Set(TASKS.map(t => t.kind ?? 'write'));
  for (const kind of ['write', 'interview', 'select', 'order', 'choose']) assert.ok(kinds.has(kind), kind);
  assert.ok(TASKS.filter(t => (t.kind ?? 'write') === 'write').length >= 8, 'most tasks are free production');
  for (const t of TASKS.filter(t => t.kind === 'select')) for (const level of LEVEL_IDS) assert.ok(variant(t, level).doc.lines.some(l => l.err), `${t.id} ${level} has errors to find`);
});

test('every model answer passes its own rubric, and short or empty answers do not', () => {
  for (const task of TASKS.filter(t => t.kind !== 'interview')) for (const level of LEVEL_IDS) {
    const { write } = variant(task, level);
    const result = evaluate(fill(write.model, normaliseProfile(DEFAULT_PROFILE)), write);
    assert.equal(result.verdict, 'bien', `${task.id} ${level}: ${result.miss.map(m => m.key).join(', ')}`);
    assert.notEqual(evaluate('Hola.', write).verdict, 'bien', `${task.id} ${level}: a one-word answer is not enough`);
  }
});

test('feedback catches Portuguese interference and false friends', () => {
  const issues = interference('Eu estou cansada de trabalho, a reunião é amanhã com o chefe.');
  assert.ok(issues.length >= 4, JSON.stringify(issues));
  assert.ok(interference('Estoy embarazada de tanto trabajo.').some(i => i.kind === 'falso amigo' && /embarazada/i.test(i.word)));
  assert.ok(CHECKS.pasado.test('Ayer hablé con Iván.', 'ayer hable con ivan'));
  const stats = recordAnswer(emptyStats(), evaluate('Soy de acuerdo, la problema es la sistema.', { need: ['solucion'], min: 3 }), 'la problema', ['nómina']);
  assert.ok(recurring(stats, 3).length >= 1, 'recurring mistakes are tracked');
});

test('interviews: the candidates answer what the student asks, by level, and illegal questions are caught', () => {
  assert.deepEqual(Object.keys(CANDIDATES).sort(), ['bruno', 'lucia']);
  assert.equal(intentOf('¿Cuántos años tiene usted?'), 'ilegal');
  assert.equal(intentOf('¿Tienes hijos?'), 'ilegal');
  const intent = intentOf('¿Cuál es tu experiencia?');
  assert.ok(intent && intent !== 'ilegal');
  assert.notEqual(answerFor('bruno', intent, 'A1'), answerFor('bruno', intent, 'C1'));
});

test('personalised and configurable: name, gender, nationality, flag, native language, field, level, vocabulary', () => {
  const p = normaliseProfile(DEFAULT_PROFILE);
  assert.equal(p.nombre, 'Tizia');
  assert.equal(p.pais, 'BR');
  assert.equal(p.lengua, 'pt');
  assert.ok(COUNTRIES.BR && COUNTRIES.BR.emoji);
  const q = profileFromQuery('?alumno=Marco&genero=m&pais=IT&lengua=otro&area=Marketing&nivel=B2&vocabulario=campaña,cliente', p);
  assert.deepEqual([q.nombre, q.genero, q.pais, q.lengua, q.area, q.nivel], ['Marco', 'm', 'IT', 'otro', 'Marketing', 'B2']);
  assert.deepEqual(q.vocabulario, ['campaña', 'cliente']);
  assert.equal(fill('¡Bienvenid[a|o], {nombre}! Eres {nacionalidad}.', q), '¡Bienvenido, Marco! Eres italiano.');
  assert.equal(fill('¡Bienvenid[a|o], {nombre}!', p), '¡Bienvenida, Tizia!');
  assert.ok(MISSIONS.every(m => m.title.includes('{nombre}')), 'the name appears in every mission title');
  assert.equal(normaliseProfile({ nivel: 'Z9', pais: 'XX' }).nivel, 'A1');
});

test('the help tab in Portuguese: one per task, collapsed by default, never in the way', () => {
  for (const id of TASK_IDS) {
    const help = AYUDA[id];
    assert.ok(help?.situacao && help.gramatica && help.vocab.length >= 3 && help.falsos.length >= 1, id);
  }
  assert.match(NATIVE.pt.tab, /🇧🇷 Ajuda em português/);
  const game = readFileSync('app/hr-crisis/HrGame.tsx', 'utf8');
  assert.match(game, /<details className="hr-help">/);
  assert.doesNotMatch(game, /<details className="hr-help" open/, 'the help tab starts closed');
});

test('adaptive levels: listening speed, transcript and hints change with the level', () => {
  const rates = LEVEL_IDS.map(l => LEVEL_RULES[l].rate);
  assert.deepEqual([...rates].sort((a, b) => a - b), rates, 'voices speed up level by level');
  assert.equal(LEVEL_RULES.A1.transcript, 'visible');
  assert.equal(LEVEL_RULES.C1.transcript, 'hidden');
  assert.ok(missionOpen(1, [], false));
  assert.ok(!missionOpen(6, [], false), 'the final crisis waits for missions 1–5');
  assert.ok(missionOpen(6, [], true), 'the teacher can open it');
});

test('engine: progress, answers and the notebook survive a reload', () => {
  let s = createState();
  s = remember(s, 'm1-recepcion', { answer: 'Hola, soy Tizia.' });
  s = complete(s, 'm1-recepcion');
  const back = restore(serialise(s));
  assert.deepEqual(back.done, ['m1-recepcion']);
  assert.equal(back.answers['m1-recepcion'], 'Hola, soy Tizia.');
  assert.deepEqual(restore('{"done":["nope"]}').done, []);
});

test('the office: every circle in a room, reachable on foot from the entrance, one voice per employee', () => {
  const R = 0.35, step = 0.25, b = O.BOUNDS;
  const crowd = O.CROWD.map(c => ({ x0: c.x - 0.27, x1: c.x + 0.27, z0: c.z - 0.27, z1: c.z + 0.27 }));
  const all = [...O.solidsFor(), ...crowd];
  const free = (x, z) => x > b.minX + R && x < b.maxX - R && z > b.minZ + R && z < b.maxZ - R && !all.some(s => x > s.x0 - R && x < s.x1 + R && z > s.z0 - R && z < s.z1 + R);
  const key = (i, j) => `${i},${j}`;
  const first = [Math.round(O.SPAWN.x / step), Math.round(O.SPAWN.z / step)];
  const seen = new Set([key(...first)]); const queue = [first];
  while (queue.length) { const [i, j] = queue.pop(); for (const [di, dj] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) { const a = i + di, c = j + dj, k = key(a, c); if (seen.has(k) || !free(a * step, c * step)) continue; seen.add(k); queue.push([a, c]); } }
  assert.deepEqual(O.SPOT_IDS.sort(), [...TASK_IDS].sort());
  for (const [id, s] of Object.entries(O.SPOTS)) {
    assert.ok(O.roomAt(s.x, s.z), `${id} is inside a room`);
    assert.ok(seen.has(key(Math.round(s.x / step), Math.round(s.z / step))), `${id} reachable from the entrance`);
  }
  for (const room of ['recepcion', 'rrhh', 'entrevista-1', 'entrevista-2', 'nominas', 'oficinas', 'reuniones', 'direccion']) assert.ok(O.ROOMS.some(r => r.id === room), room);
  const voices = Object.values(O.CAST).map(c => c.voice);
  assert.equal(new Set(voices).size, voices.length, 'one distinct voice per employee');
});

test('listening: one listening per mission × 5 levels, cast voices, in the same world', () => {
  assert.deepEqual(GAMES.hr.levels, LEVEL_IDS);
  assert.equal(GAMES.hr.spots.length, 6);
  for (const id of GAMES.hr.spots) assert.ok(TASK_IDS.includes(id), `${id} is a circle of the office`);
  for (const level of LEVEL_IDS) {
    const path = `app/escucha-3d/content/hr/${level.toLowerCase()}.json`;
    const source = readFileSync(path, 'utf8');
    const data = JSON.parse(source);
    assert.deepEqual(checkFile('hr', level, data, path), []);
    assert.deepEqual(scanSource(source, path).map(f => f.token), []);
    assert.equal(listeningFor(data.items, 'm3-jimena', [], true).id, 'm3-jimena');
  }
  const game = readFileSync('app/hr-crisis/HrGame.tsx', 'utf8');
  assert.match(game, /<ListeningCard game="hr"/);
  assert.match(game, /<ModeSwitch /);
});

test('audio: every listening has its generated clip once the audio is built', (t) => {
  const manifest = JSON.parse(readFileSync('app/escucha-3d/audio-manifest.json', 'utf8'));
  if (!Object.keys(manifest.clips).some(k => k.startsWith('hr/'))) { t.skip('audio not generated yet'); return; }
  for (const level of LEVEL_IDS) for (const id of GAMES.hr.spots) {
    const key = `hr/${level.toLowerCase()}-${id}`;
    assert.ok(manifest.clips[key], key);
    assert.ok(existsSync(`public${manifest.clips[key].src}`), key);
  }
});

test('PRO by default: route, catalog, cover, preview, shared engines', () => {
  const catalog = readFileSync('app/lesson-catalog.ts', 'utf8');
  assert.match(catalog, /\{id:258,[^\n]*levels:\["A1","A2","B1","B2","C1"\],displayLevel:"A1–C1"[^\n]*path:"\/hr-crisis"/);
  assert.doesNotMatch(readFileSync('app/access-policy.ts', 'utf8'), /\b258\b|hr-crisis/);
  assert.match(readFileSync('app/hr-crisis/layout.tsx', 'utf8'), /canonical:"https:\/\/spanishcue\.com\/hr-crisis"/);
  const cover = readFileSync('public/hr-crisis/portada.webp');
  assert.equal(cover.toString('ascii', 0, 4), 'RIFF');
  assert.deepEqual([cover.readUInt16LE(26) & 0x3fff, cover.readUInt16LE(28) & 0x3fff], [1200, 750]);
  assert.ok(cover.length < 120_000);
  assert.ok(existsSync('public/conversation-previews/258.mp4'));
  const game = readFileSync('app/hr-crisis/HrGame.tsx', 'utf8');
  assert.match(game, /MusicVolume/, 'the shared music volume slider');
  assert.match(game, /import\(['"]\.\/World3D['"]\)/);
  assert.doesNotMatch(game, /from ['"]three['"]/);
  const world = readFileSync('app/hr-crisis/World3D.tsx', 'utf8');
  assert.match(world, /from '\.\.\/noche-abierta\/world3d\.mjs'/);
  assert.match(world, /createCharlas/);
  assert.match(world, /escapeSolids|stepPlayer/);
  assert.match(readFileSync('app/hr-crisis/oficina3d.ts', 'utf8'), /userData\.person = true/);
  for (const file of readdirSync('app/hr-crisis').filter(f => /\.(tsx?|mjs)$/.test(f))) {
    assert.doesNotMatch(readFileSync(`app/hr-crisis/${file}`, 'utf8'), /https?:\/\/(?!spanishcue\.com)/, `${file} loads nothing from the network`);
  }
  assert.doesNotMatch(readFileSync('app/hr-crisis/HrGame.tsx', 'utf8'), /SpeechRecognition/, 'no speech recognition: the student types');
});

test('unmount frees the GPU and the WebGL context', () => {
  const world = readFileSync('app/hr-crisis/World3D.tsx', 'utf8');
  const cleanup = world.slice(world.indexOf('disposed = true;'));
  assert.match(cleanup, /isTexture[\s\S]*\.dispose\(\)/);
  assert.match(cleanup, /shadow\?\.dispose\(\)/);
  assert.match(cleanup, /renderer\.forceContextLoss\(\)|forceContextLoss/);
});

test('neutral Spanish everywhere in the lesson', () => {
  for (const file of readdirSync('app/hr-crisis', { recursive: true }).filter(f => /\.(tsx?|mjs)$/.test(f))) {
    const path = `app/hr-crisis/${file}`;
    assert.deepEqual(scanSource(readFileSync(path, 'utf8'), path).map(f => f.token), [], path);
  }
  assert.ok(words(variant(TASKS[0], 'A1').line) < words(variant(TASKS[0], 'C1').line));
});
