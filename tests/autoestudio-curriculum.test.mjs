import assert from 'node:assert/strict';
import test from 'node:test';
import { existsSync, readFileSync } from 'node:fs';
import { build } from 'esbuild';

// Autoestudio: curriculum data, validator, progress adapter and access rules.
// Levels ship one by one; every level that has modules must be complete.

async function load(contents) {
  const built = await build({ stdin: { contents, resolveDir: process.cwd(), loader: 'ts' }, bundle: true, format: 'esm', platform: 'node', write: false, logLevel: 'error' });
  return import('data:text/javascript;base64,' + Buffer.from(built.outputFiles[0].text).toString('base64'));
}

const course = await load(`
export { modulesByLevel, publishedLevels, summarize, findModule, neighbours } from './app/autoestudio/curriculum/course';
export { allObjectives, objectivesByLevel, plannedWeeks } from './app/autoestudio/curriculum/objectives';
export { levels, levelIds } from './app/autoestudio/curriculum/levels';
export { validateModule, validateCourse, duplicationAudit, coverageMatrix, moduleExercises } from './app/autoestudio/curriculum/validate';
export { SECTION_ORDER } from './app/autoestudio/curriculum/types';
export { moduleClips } from './app/autoestudio/curriculum/audio-clips';
export * as progress from './app/autoestudio/progress/model';
export { createLocalProgressAdapter, PROGRESS_STORAGE_KEY } from './app/autoestudio/progress/local-adapter';
export * as access from './app/autoestudio/access';
export * as text from './app/autoestudio/engine/text';
export { lessons } from './app/lesson-catalog';
export { verbalLessons } from './app/verbal-system/lesson-data';
`);

const { modulesByLevel, levelIds } = course;
const published = levelIds.filter((level) => modulesByLevel[level].length > 0);
const allModules = published.flatMap((level) => modulesByLevel[level]);

test('six levels exist with outcomes, routes and an objective map', () => {
  assert.deepEqual(levelIds, ['a1', 'a2', 'b1', 'b2', 'c1', 'c2']);
  for (const level of course.levels) {
    assert.ok(level.outcome.length > 40 && level.route && level.color && level.mascot.startsWith('/brand/mascot/'), level.id);
    assert.ok(course.plannedWeeks(level.id) >= 16, `${level.id} has a full objective map`);
  }
  assert.deepEqual(published, levelIds, 'all six levels are complete');
  for (const level of levelIds) assert.equal(modulesByLevel[level].length,20);
  // Levels ship in order: no gaps in the published route.
  assert.deepEqual(published, levelIds.slice(0, published.length));
});

test('objective ids are unique, well formed and prerequisites point backwards', () => {
  const problems = course.validateCourse({ modulesByLevel: Object.fromEntries(levelIds.map((level) => [level, []])), objectives: course.allObjectives });
  assert.deepEqual(problems, []);
});

test('every published level is complete, ordered, reviewed and free of orphan objectives', () => {
  const problems = course.validateCourse({ modulesByLevel, objectives: course.allObjectives, requiredLevels: published });
  assert.deepEqual(problems, []);
  for (const level of published) {
    const modules = modulesByLevel[level];
    assert.equal(modules.length, course.plannedWeeks(level), `${level} mod count`);
    modules.forEach((mod, index) => assert.equal(mod.week, index + 1, `${mod.id} order`));
    const covered = new Set(modules.flatMap((mod) => mod.newObjectives));
    for (const objective of course.objectivesByLevel[level]) assert.ok(covered.has(objective.id), `${objective.id} is taught`);
  }
});

test('every mod passes the section, speaking, assessment and quiz rules', () => {
  for (const mod of allModules) {
    assert.deepEqual(course.validateModule(mod), [], mod.id);
    for (const key of course.SECTION_ORDER) assert.ok(mod[key] || (key === 'quiz' && mod.quiz), `${mod.id} has ${key}`);
    assert.ok(mod.speaking.tasks.length >= 2, `${mod.id} speaking`);
    assert.ok(mod.quiz.items.some((item) => item.type === 'error'), `${mod.id} quiz error correction`);
  }
});

test('each level has checkpoints that review at least three earlier weeks', () => {
  for (const level of published) {
    const checkpoints = modulesByLevel[level].filter((mod) => mod.kind === 'checkpoint');
    assert.ok(checkpoints.length >= 3, `${level} checkpoints`);
    for (const checkpoint of checkpoints) {
      const weeks = new Set(checkpoint.reviewObjectives.map((id) => course.allObjectives.find((objective) => objective.id === id).week));
      assert.ok(weeks.size >= 3, `${checkpoint.id} spans ${weeks.size} weeks`);
    }
  }
});

test('previous and next links form one unbroken route across published levels', () => {
  allModules.forEach((mod, index) => {
    const { previous, next } = course.neighbours(mod);
    assert.equal(previous?.id ?? null, allModules[index - 1]?.id ?? null, `${mod.id} previous`);
    assert.equal(next?.id ?? null, allModules[index + 1]?.id ?? null, `${mod.id} next`);
    assert.equal(course.findModule(mod.level, `semana-${mod.week}`)?.id, mod.id);
  });
  assert.equal(course.findModule('a1', 'semana-99'), undefined);
  assert.equal(course.findModule('z9', 'semana-1'), undefined);
});

test('no exercise, quiz item, listening or reading is repeated across the course', () => {
  assert.deepEqual(course.duplicationAudit(modulesByLevel), []);
});

test('English support decreases: none at all in C1 and C2', () => {
  for (const mod of allModules.filter((mod) => mod.level === 'c1' || mod.level === 'c2')) {
    assert.doesNotMatch(JSON.stringify(mod), /"(support|en|canDoEn)":/, mod.id);
  }
  for (const mod of modulesByLevel.a1) assert.ok(mod.goal.canDoEn, `${mod.id} offers English`);
});

test('related links only point at routes that exist', () => {
  const verbal = new Set(course.verbalLessons.map((lesson) => `/sistema-verbal/${lesson.slug}`));
  const catalog = new Set(course.lessons.map((lesson) => lesson.path).filter(Boolean));
  const ids = new Set(course.lessons.map((lesson) => String(lesson.id)));
  const exists = (path) => catalog.has(path) || verbal.has(path) || existsSync(`app${path}/page.tsx`) || (/^\/clase\/(\d+)$/.test(path) && ids.has(path.split('/')[2]));
  const paths = [...allModules.flatMap((mod) => (mod.related ?? []).map((link) => link.path)), ...course.allObjectives.flatMap((objective) => objective.related ?? [])];
  for (const path of new Set(paths)) assert.ok(exists(path), path);
  assert.ok(!paths.includes('/el-recadero-de-puerto-neon'));
});

test('coverage matrix: every taught grammar, vocabulary, pronunciation and function objective comes back later', () => {
  const rows = course.coverageMatrix(modulesByLevel, course.allObjectives).filter((row) => published.includes(row.level));
  for (const row of rows) {
    assert.equal(row.introducedIn.length, 1, `${row.id} introduced once`);
    if (['grammar', 'vocabulary', 'pronunciation', 'functional', 'discourse'].includes(row.domain)) assert.ok(row.reviewedIn.length >= 1, `${row.id} reviewed`);
  }
});

test('landing summaries carry no lesson bodies', () => {
  const summary = course.summarize(modulesByLevel.a1[0]);
  assert.deepEqual(Object.keys(summary).sort(), ['canDo', 'free', 'id', 'kind', 'level', 'minutes', 'slug', 'stop', 'subtitle', 'title', 'week']);
  const overview = JSON.stringify(course.publishedLevels());
  for (const mod of allModules) assert.ok(!overview.includes(mod.listening.script[0].text), `${mod.id} listening stays out of the landing`);
});

test('access: A1 weeks 1–2 and one sample per new level are free, maps are public', () => {
  const { access } = course;
  assert.ok(access.isFreeAutoestudioModule('/autoestudio/a1/semana-1'));
  assert.ok(access.isFreeAutoestudioModule('/autoestudio/a1/semana-2/'));
  assert.ok(access.isFreeAutoestudioModule('/autoestudio/a1/semana-2.rsc'));
  for (const path of ['/autoestudio/a1/semana-3', '/autoestudio/a1/semana-3.rsc', '/autoestudio/b2/semana-11', '/autoestudio/c2/semana-16/']) assert.ok(access.isPremiumAutoestudioPath(path), path);
  for (const path of ['/autoestudio', '/autoestudio/a1', '/autoestudio/c2', '/autoestudio.rsc', '/', '/noche-abierta']) assert.ok(!access.isPremiumAutoestudioPath(path), path);
  for (const level of levelIds) assert.ok(access.isFreeAutoestudioModule(`/autoestudio/${level}/semana-1`));
  assert.ok(access.isAutoestudioPath('/autoestudio/a1'));
  assert.ok(!access.isAutoestudioPath('/autoestudios'));
  for (const mod of allModules) {
    const path = access.modulePath(mod.level, mod.week);
    assert.equal(course.summarize(mod).free, access.isFreeAutoestudioModule(path), mod.id);
    assert.equal(access.isPremiumAutoestudioPath(path), !access.isFreeAutoestudioModule(path), mod.id);
  }
  // The query string never grants access.
  assert.ok(access.isPremiumAutoestudioPath(new URL('https://x.test/autoestudio/a1/semana-4?free=1').pathname));
});

test('the Worker gates PRO weeks and the client engines never import course data', async () => {
  const worker = readFileSync('worker/index.ts', 'utf8');
  assert.match(worker, /\(premiumAutoestudio&&!fullAccess&&!shareAllowsPath\(pathname,shareSession\)\)/);
  assert.match(worker, /\|\|autoestudio\|\|shareApi\|\|Boolean\(lesson\)/);
  const protect = readFileSync('scripts/protect-client-assets.mjs', 'utf8');
  for (const root of ['AutoestudioLanding', 'LevelMap', 'ModulePlayer']) assert.match(protect, new RegExp(`app/autoestudio/${root}\\.tsx`));
  for (const entry of ['app/autoestudio/AutoestudioLanding.tsx', 'app/autoestudio/LevelMap.tsx', 'app/autoestudio/ModulePlayer.tsx', 'app/autoestudio/LibraryEntry.tsx','app/autoestudio/claim/ClaimClient.tsx','app/autoestudio/TeacherPasses.tsx']) {
    const result = await build({ entryPoints: [entry], bundle: true, write: false, metafile: true, format: 'esm', platform: 'browser', jsx: 'automatic', external: ['react', 'react-dom', 'next/*', 'next'], loader: { '.css': 'empty' }, logLevel: 'error' });
    const inputs = Object.keys(result.metafile.inputs);
    assert.ok(!inputs.some((input) => /autoestudio\/curriculum\/(modules|course|objectives)/.test(input)), `${entry} stays free of course data`);
    assert.ok(!inputs.some(input => /autoestudio\/share\/(server|runtime)/.test(input)), `${entry} excludes server credential code`);
  }
  const page = readFileSync('app/autoestudio/[level]/[module]/page.tsx', 'utf8');
  assert.match(page, /fullAccess/);
});

test('progress model records sections, quiz and completion, and survives bad data', () => {
  const p = course.progress;
  let state = p.emptyProgress();
  state = p.startModule(state, 'a1-01');
  assert.equal(p.moduleStatus(state, 'a1-01'), 'in-progress');
  assert.equal(state.lastModule, 'a1-01');
  for (const key of course.SECTION_ORDER.filter((key) => key !== 'complete' && key !== 'quiz')) state = p.completeSection(state, 'a1-01', key);
  assert.equal(p.isModuleComplete(state.modules['a1-01']), false, 'quiz still pending');
  state = p.recordQuiz(state, 'a1-01', 6, 10);
  state = p.recordQuiz(state, 'a1-01', 9, 10);
  state = p.recordQuiz(state, 'a1-01', 7, 10);
  assert.equal(state.modules['a1-01'].quiz.best, 9);
  assert.equal(state.modules['a1-01'].quiz.attempts, 3);
  assert.equal(p.isModuleComplete(state.modules['a1-01']), true);
  assert.equal(p.moduleStatus(state, 'a1-01'), 'completed');
  const level = p.levelProgress(state, ['a1-01', 'a1-02', 'a1-03']);
  assert.equal(level.completed, 1);
  assert.equal(level.nextModuleId, 'a1-02');
  assert.equal(level.percent, 33);
  state = p.saveDraft(state, 'a1-01', 'Hola, me llamo Sam.');
  assert.equal(state.modules['a1-01'].writingDraft, 'Hola, me llamo Sam.');
  for (const raw of [null, 'x', 42, [], { version: 9 }, { version: 1, modules: 'bad' }, { version: 1, modules: { 'a1-01': { sections: 7 } } }]) {
    const parsed = p.parseProgress(raw);
    assert.equal(parsed.version, 1);
    assert.equal(typeof parsed.modules, 'object');
  }
});

test('local progress adapter round-trips and never throws when storage fails', () => {
  const memory = new Map();
  const storage = { getItem: (key) => memory.get(key) ?? null, setItem: (key, value) => memory.set(key, value), removeItem: (key) => memory.delete(key) };
  const adapter = course.createLocalProgressAdapter(storage);
  const state = course.progress.startModule(course.progress.emptyProgress(), 'a1-02');
  adapter.save(state);
  assert.ok(memory.has(course.PROGRESS_STORAGE_KEY));
  assert.equal(adapter.load().lastModule, 'a1-02');
  memory.set(course.PROGRESS_STORAGE_KEY, '{not json');
  assert.deepEqual(adapter.load().modules, {});
  const broken = course.createLocalProgressAdapter({ getItem() { throw new Error('denied'); }, setItem() { throw new Error('quota'); }, removeItem() {} });
  assert.doesNotThrow(() => broken.save(state));
  assert.deepEqual(broken.load().modules, {});
  assert.deepEqual(course.createLocalProgressAdapter(null).load().modules, {});
});

test('answer checking tolerates case and punctuation and flags missing accents separately', () => {
  const { checkAnswer } = course.text;
  assert.equal(checkAnswer('me llamo Ana', ['Me llamo Ana.']), 'correct');
  assert.equal(checkAnswer('¿Como te llamas?', ['¿Cómo te llamas?']), 'accent');
  assert.equal(checkAnswer('Yo llamo Ana', ['Me llamo Ana.']), 'wrong');
});

test('every spoken clip has text and a known voice', () => {
  const voices = /^es-(MX|ES|AR|CO|CL|PE|CU|US|VE|UY|GQ)-(f|m)$/;
  for (const mod of allModules) {
    const clips = course.moduleClips(mod);
    assert.ok(clips.length > 20, `${mod.id} has audio to play`);
    for (const clip of clips) {
      assert.ok(clip.text.trim(), `${mod.id} empty clip`);
      if (clip.voice) assert.match(clip.voice, voices, `${mod.id} voice`);
    }
  }
  const manifest = JSON.parse(readFileSync('app/autoestudio/audio-manifest.json', 'utf8'));
  for (const [key, file] of Object.entries(manifest.clips)) {
    assert.match(key, /^[0-9a-f]{16}$/);
    assert.ok(existsSync(`public${file}`), file);
  }
});
