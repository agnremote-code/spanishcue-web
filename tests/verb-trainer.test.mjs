// Entrenador de verbos (/practicar-conjugacion): drill logic, spaced repetition,
// FREE / PRO options and the wiring that keeps PRO decided by the server.
import assert from 'node:assert/strict';
import test from 'node:test';
import { readFileSync } from 'node:fs';
import { build } from 'esbuild';

const r = await build({ stdin: { contents: 'export * from "./app/practicar-conjugacion/drill.ts"; export {default as sitemap} from "./app/sitemap.ts"; export {isEdgeCacheablePath, languageAlternates} from "./app/seo.ts"; export {TRAINER_COPY, VERB_GLOSS} from "./app/practicar-conjugacion/copy.ts";', resolveDir: process.cwd() }, bundle: true, write: false, platform: 'node', format: 'esm', logLevel: 'error' });
const m = await import('data:text/javascript;base64,' + Buffer.from(r.outputFiles[0].text).toString('base64'));
const read = (path) => readFileSync(path, 'utf8');
const card = (verb, tense, person) => ({ verb, tense, person });

test('free set: the 100 most used verbs, all known to the engine; PRO adds the rest', () => {
  assert.ok(m.FREE_VERBS.length >= 100, `${m.FREE_VERBS.length} free verbs`);
  assert.equal(m.verbsForSet('irregulares').length + m.verbsForSet('regulares').length, m.verbsForSet('frecuentes').length);
  assert.ok(m.verbsForSet('todos').length > 1000);
  assert.ok(!m.verbsForSet('todos').includes('llover'), 'impersonal verbs are not drilled');
  assert.deepEqual(m.FREE_TENSES, ['presente', 'indefinido', 'imperfecto', 'futuro', 'condicional', 'perfecto']);
  assert.equal(m.DRILL_TENSES.length, 15);
});

test('answers: exact, accents, pronouns, -se subjunctive and the printed «no»', () => {
  assert.equal(m.checkAnswer(card('tener', 'indefinido', 0), 'tuve', true).verdict, 'correct');
  assert.equal(m.checkAnswer(card('tener', 'indefinido', 0), '  Yo   Tuve ', true).verdict, 'correct');
  assert.deepEqual(m.checkAnswer(card('hablar', 'indefinido', 2), 'hablo', true), { verdict: 'accent', expected: 'habló', counted: false });
  assert.equal(m.checkAnswer(card('hablar', 'indefinido', 2), 'hablo', false).counted, true, 'lenient accents count');
  assert.equal(m.checkAnswer(card('pedir', 'presente', 5), 'peden', false).verdict, 'wrong');
  assert.equal(m.checkAnswer(card('ser', 'subjImperfecto', 0), 'fuese', true).verdict, 'correct');
  assert.equal(m.checkAnswer(card('ser', 'subjImperfecto', 0), 'fuera', true).verdict, 'correct');
  assert.equal(m.checkAnswer(card('tener', 'subjPluscuamperfecto', 0), 'hubiese tenido', true).verdict, 'correct');
  assert.equal(m.checkAnswer(card('tener', 'subjPluscuamperfecto', 3), 'hubiésemos tenido', true).verdict, 'correct');
  assert.equal(m.answerPrefix('imperativoNegativo'), 'no');
  assert.deepEqual(m.expectedForms(card('tener', 'imperativoNegativo', 1)), ['tengas']);
  assert.equal(m.checkAnswer(card('tener', 'imperativoNegativo', 1), 'no tengas', true).verdict, 'correct');
  assert.equal(m.checkAnswer(card('hacer', 'perfecto', 3), 'hemos hecho', true).verdict, 'correct');
  assert.equal(m.checkAnswer(card('hacer', 'presente', 0), '', true).verdict, 'wrong');
  assert.deepEqual(m.personsFor('imperativo', false), [1, 2, 3, 5], 'no yo and no vosotros by default');
  assert.deepEqual(m.diffMarks('hablo', 'habló'), [{ text: 'habl', miss: false }, { text: 'ó', miss: true }]);
});

test('spaced repetition: right answers climb boxes, a miss goes back to the start', () => {
  let mem = m.emptyMemory();
  const c = card('ir', 'presente', 0);
  mem = m.remember(mem, c, true, 1000, '2026-11-27');
  assert.deepEqual(mem.items['ir|presente|0'], [1, 1010, 1, 0]);
  mem = m.remember(mem, c, true, 1010, '2026-11-27');
  assert.equal(mem.items['ir|presente|0'][1], 1010 + 1440);
  mem = m.remember(mem, c, false, 1020, '2026-11-27');
  assert.deepEqual(mem.items['ir|presente|0'], [0, 1021, 2, 1]);
  assert.equal(mem.days['2026-11-27'], 3);
  assert.deepEqual(mem.tenses.presente, [2, 1]);
  const pool = { verbs: ['ir'], tenses: ['presente'], vosotros: false };
  assert.equal(m.dueCards(mem, pool, 1021).length, 1);
  assert.equal(m.dueCards(mem, { ...pool, tenses: ['futuro'] }, 1021).length, 0, 'due reviews stay inside the chosen pool');
  assert.equal(m.parseMemory('{broken').v, 1);
  assert.deepEqual(m.parseMemory(JSON.stringify(mem)).items, mem.items);
});

test('next card never repeats a recent one and stays inside the pool', () => {
  const pool = m.poolOf({ ...m.DEFAULT_SETTINGS, tenses: ['presente', 'indefinido'], set: 'top' });
  const recent = [];
  for (let i = 0; i < 200; i++) {
    const next = m.nextCard(m.emptyMemory(), pool, recent);
    assert.ok(next && pool.verbs.includes(next.verb) && pool.tenses.includes(next.tense) && next.person !== 4);
    assert.ok(!recent.includes(m.cardKey(next)));
    recent.unshift(m.cardKey(next)); recent.length = Math.min(recent.length, 6);
  }
});

test('stats and day streaks', () => {
  const days = { '2026-11-25': 4, '2026-11-26': 2, '2026-11-27': 1 };
  assert.equal(m.dayStreak(days, new Date(2026, 10, 27, 12)), 3);
  assert.equal(m.dayStreak({ '2026-11-26': 2 }, new Date(2026, 10, 27, 9)), 1, 'yesterday keeps the streak until midnight');
  assert.equal(m.dayStreak({ '2026-11-20': 2 }, new Date(2026, 10, 27)), 0);
  let mem = m.emptyMemory();
  mem = m.remember(mem, card('ser', 'presente', 0), false);
  mem = m.remember(mem, card('ser', 'presente', 1), false);
  const stats = m.statsOf(mem);
  assert.equal(stats.answered, 2);
  assert.equal(stats.weakVerbs[0].verb, 'ser');
});

test('FREE visitors lose PRO tenses and sets; shared links round-trip', () => {
  const wanted = { ...m.DEFAULT_SETTINGS, tenses: ['presente', 'subjPresente', 'imperativo'], set: 'todos' };
  const free = m.allowedSettings(wanted, false);
  assert.deepEqual(free.settings.tenses, ['presente']);
  assert.deepEqual(free.removed, ['subjPresente', 'imperativo']);
  assert.equal(free.settings.set, 'frecuentes');
  assert.deepEqual(m.allowedSettings(wanted, true).settings.tenses, wanted.tenses);
  const onlyPro = m.allowedSettings({ ...wanted, tenses: ['subjPresente'] }, false).settings;
  assert.deepEqual(onlyPro.tenses, ['presente'], 'never an empty drill');
  const list = Array.from({ length: 14 }, (_, i) => m.FREE_VERBS[i]);
  assert.equal(m.allowedSettings({ ...wanted, set: 'lista', list }, false).settings.list.length, m.FREE_LIST_LIMIT);
  const shared = { ...m.DEFAULT_SETTINGS, tenses: ['presente', 'futuro'], set: 'lista', list: ['tener', 'oír'], vosotros: true };
  const back = m.settingsFromQuery(new URLSearchParams(m.shareQuery(shared)));
  assert.deepEqual([back.tenses, back.set, back.list, back.vosotros], [shared.tenses, 'lista', ['tener', 'oír'], true]);
  assert.deepEqual(m.parseVerbList('Tener, oir; xyz pedir tener'), { verbs: ['tener', 'oír', 'pedir'], unknown: ['xyz'] });
  assert.equal(m.settingsFromQuery(new URLSearchParams('t=nada')).tenses[0], 'presente');
});

test('page is public, indexed, cached and linked; PRO comes only from server headers', () => {
  const urls = m.sitemap().map((entry) => entry.url);
  assert.ok(urls.some((url) => url.endsWith('/practicar-conjugacion')));
  assert.equal(m.isEdgeCacheablePath('/practicar-conjugacion'), true);
  assert.match(read('scripts/protect-client-assets.mjs'), /"app\/practicar-conjugacion\/VerbTrainer\.tsx"/);
  const worker = read('worker/index.ts');
  assert.match(worker, /const identityAware=pathname==='\/'\|\|pathname==='\/api\/verb-trainer\/access'\|\|/);
  assert.match(read('app/jugar/student-pass.ts'), /pathname === "\/api\/verb-trainer\/access"/);
  const route = read('app/api/verb-trainer/access/route.ts');
  assert.match(route, /fullAccessFromHeaders\(request\.headers\)/);
  assert.match(route, /private, no-store/);
  assert.doesNotMatch(route, /searchParams|cookie/i, 'no query or cookie ever grants PRO');
  const trainer = read('app/practicar-conjugacion/VerbTrainer.tsx');
  assert.match(trainer, /allowedSettings\(start, false\)/, 'starts FREE until the server answers');
  assert.doesNotMatch(trainer, /\(\?<[=!]/, 'no regex lookbehind (Safari)');
  assert.match(read('app/conjugacion/page.tsx'), /TRAINER_PATH/);
  assert.match(read("app/jugar/StudentHub.tsx"), /"\/practicar-conjugacion"/);
});

test('English twin: same trainer, full English copy, glosses for every free verb, hreflang pair', () => {
  const { es, en } = m.TRAINER_COPY;
  for (const key of Object.keys(es)) assert.ok(key in en, `missing English copy: ${key}`);
  for (const tense of m.DRILL_TENSES) assert.ok(en.tense[tense.key]?.label, `English tense name: ${tense.key}`);
  for (const set of m.VERB_SETS) assert.ok(en.sets[set.key]?.label, `English set name: ${set.key}`);
  for (const verb of m.FREE_VERBS) assert.ok(m.VERB_GLOSS[verb], `gloss for ${verb}`);
  const urls = m.sitemap().map((entry) => entry.url);
  assert.ok(urls.some((url) => url.endsWith('/spanish-conjugation-practice')));
  assert.equal(m.isEdgeCacheablePath('/spanish-conjugation-practice'), true);
  assert.deepEqual(m.languageAlternates('/spanish-conjugation-practice'), m.languageAlternates('/practicar-conjugacion'));
  assert.match(m.languageAlternates('/practicar-conjugacion').en, /\/spanish-conjugation-practice$/);
  assert.match(read('app/spanish-conjugation-practice/page.tsx'), /<VerbTrainer locale="en" \/>/);
  assert.match(read('app/spanish-verbs/page.tsx'), /TRAINER_PATH_EN/);
  assert.equal(m.formatCount(1258, ','), '1,258');
  assert.equal(m.formatCount(1258), '1.258');
});
