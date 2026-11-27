// Quality gate for the US page families (docs/seo-plan/us1000/LEEME.md). A page that fails here is
// not published: Google removed 2,955 near-duplicate URLs from the index in November 2026, so every
// page must carry its own text, its own questions and a real US search behind it.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { catalogSource, readCatalog } from '../scripts/build-us-catalog.mjs';

const root = resolve(import.meta.dirname, '..');
const base = resolve(root, 'public/us-content');
const families = existsSync(base) ? readdirSync(base, { withFileTypes: true }).filter(d => d.isDirectory()).map(d => d.name) : [];
const load = family => readdirSync(resolve(base, family)).filter(f => f.endsWith('.json')).sort()
  .map(file => ({ slug: file.replace(/\.json$/, ''), page: JSON.parse(readFileSync(resolve(base, family, file), 'utf8')) }));

const words = text => text.split(/\s+/).filter(Boolean);
const strings = value => typeof value === 'string' ? [value] : Array.isArray(value) ? value.flatMap(strings) : value && typeof value === 'object' ? Object.values(value).flatMap(strings) : [];
const normal = text => text.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9ñ\s]/g, ' ');
// Own text: everything the page says except the demand record and the short labels.
const ownText = page => strings({ ...page, demand: undefined, level: undefined, theme: undefined, themeLabel: undefined }).join(' ');
function shingles(text, size = 5) {
  const list = words(normal(text));
  const set = new Set();
  for (let i = 0; i + size <= list.length; i += 1) set.add(list.slice(i, i + size).join(' '));
  return set;
}
function jaccard(a, b) {
  let shared = 0;
  for (const item of a) if (b.has(item)) shared += 1;
  return shared / (a.size + b.size - shared || 1);
}
function checkQuiz(items, label) {
  for (const item of items) {
    assert.ok(Array.isArray(item.options) && item.options.length >= 2, `${label}: at least two options`);
    assert.equal(new Set(item.options).size, item.options.length, `${label}: options are distinct («${item.before}»)`);
    assert.ok(Number.isInteger(item.answer) && item.answer >= 0 && item.answer < item.options.length, `${label}: answer index valid`);
    assert.ok(words(item.why).length >= 2, `${label}: every answer explains why («${item.before}»)`);
  }
}

test('the generated catalog lists exactly the pages in public/us-content', () => {
  const generated = readFileSync(resolve(root, 'app/us-content/catalog.generated.ts'), 'utf8');
  assert.equal(generated, catalogSource(readCatalog(root)), 'run node scripts/build-us-catalog.mjs');
});

test('only known families exist', () => {
  for (const family of families) assert.ok(['vocabulary', 'verbs'].includes(family), `${family} has a route and a gate`);
});

test('vocabulary pages pass the gate', () => {
  if (!families.includes('vocabulary')) return;
  const pages = load('vocabulary');
  const sentences = new Set();
  const titles = new Set();
  for (const { slug, page } of pages) {
    assert.match(page.level, /^(A1|A2)$/, `${slug}: reading level has a level page`);
    assert.equal(slug, page.theme, `${slug}: slug is the theme`);
    const listed = page.vocabulary.flatMap(group => group.words);
    assert.ok(page.vocabulary.length >= 3 && listed.length >= 20, `${slug}: 20+ words in 3+ groups`);
    assert.equal(new Set(listed.map(([es]) => es)).size, listed.length, `${slug}: no word listed twice`);
    assert.ok(page.vocabQuiz.length >= 8, `${slug}: 8+ vocabulary questions`);
    checkQuiz(page.vocabQuiz, slug);
    assert.match(page.theme, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
    assert.ok(page.title.length <= 70 && !titles.has(page.title), `${slug}: title unique and at most 70 characters`);
    titles.add(page.title);
    assert.ok(page.description.length >= 110 && page.description.length <= 165, `${slug}: description 110-165 characters (${page.description.length})`);
    assert.doesNotMatch(JSON.stringify(page), /PENDING/, `${slug}: no placeholder left`);
    assert.ok(page.demand?.query && /spanish/i.test(page.demand.query) && page.demand.source && page.demand.date, `${slug}: real US demand recorded`);
    const textWords = words(page.paragraphs.join(' ')).length;
    const minimum = { A1: 140, A2: 190, B1: 240 }[page.level];
    assert.ok(textWords >= minimum, `${slug}: text has ${textWords} words, needs ${minimum}`);
    assert.ok(words(ownText(page)).length >= 300, `${slug}: at least 300 own words`);
    assert.ok(page.comprehension.length >= 6 && page.grammar.items.length >= 3, `${slug}: 6+ comprehension and 3+ grammar questions`);
    checkQuiz(page.comprehension, slug);
    checkQuiz(page.grammar.items, slug);
    for (const item of [...page.vocabQuiz, ...page.comprehension, ...page.grammar.items]) {
      const key = normal(`${item.before} ${item.after}`).trim();
      assert.ok(!sentences.has(key), `${slug}: question repeated from another page («${item.before}…»)`);
      sentences.add(key);
    }
    assert.ok(page.glossary.length >= 6, `${slug}: glossary`);
    assert.ok(page.speaking.length >= 3, `${slug}: speaking prompts`);
    assert.ok(words(page.figure.text).length >= 15 && page.figure.source, `${slug}: figure with a source`);
    assert.ok(words(page.heritage).length >= 30, `${slug}: heritage block`);
    assert.ok(words(page.teacher).length >= 15, `${slug}: teacher note`);
  }
  const sets = pages.map(({ slug, page }) => ({ slug, set: shingles(ownText(page)) }));
  for (let i = 0; i < sets.length; i += 1) for (let j = i + 1; j < sets.length; j += 1) {
    const score = jaccard(sets[i].set, sets[j].set);
    assert.ok(score < 0.3, `${sets[i].slug} and ${sets[j].slug} share ${(score * 100).toFixed(0)} % of their 5-word sequences`);
  }
});

test('verb pages pass the gate', () => {
  if (!families.includes('verbs')) return;
  const pages = load('verbs');
  const sentences = new Set();
  for (const { slug, page } of pages) {
    assert.doesNotMatch(JSON.stringify(page), /PENDING/, `${slug}: no placeholder left`);
    assert.equal(slug, page.verb, `${slug}: slug is the verb`);
    assert.match(page.level, /^(A1|A2)$/);
    assert.ok(page.title.length <= 70, `${slug}: title at most 70 characters`);
    assert.ok(page.description.length >= 110 && page.description.length <= 165, `${slug}: description 110-165 characters (${page.description.length})`);
    assert.ok(page.demand?.query?.startsWith(`spanish verb ${page.verb}`) && page.demand.source && page.demand.date, `${slug}: real US demand recorded`);
    assert.equal(page.present.length, 5, `${slug}: present forms`);
    assert.equal(page.preterite.length, 5, `${slug}: preterite forms`);
    assert.ok(page.uses.length >= 4 && page.mistakes.length >= 3, `${slug}: uses and mistakes`);
    assert.ok(page.quiz.length >= 10 && page.reading.comprehension.length >= 4, `${slug}: 10 practice + 4 reading questions`);
    checkQuiz(page.quiz, slug);
    checkQuiz(page.reading.comprehension, slug);
    for (const item of [...page.quiz, ...page.reading.comprehension]) {
      const key = normal(`${item.before} ${item.after}`).trim();
      assert.ok(!sentences.has(key), `${slug}: question repeated from another page («${item.before}…»)`);
      sentences.add(key);
    }
    assert.ok(words(page.reading.paragraphs.join(' ')).length >= 80, `${slug}: reading length`);
    assert.ok(words(strings({ ...page, demand: undefined }).join(' ')).length >= 300, `${slug}: at least 300 own words`);
    assert.ok(words(page.heritage).length >= 30 && words(page.teacher).length >= 15 && words(page.figure.text).length >= 15, `${slug}: heritage, teacher note and figure`);
  }
  const sets = pages.map(({ slug, page }) => ({ slug, set: shingles(strings({ ...page, demand: undefined, present: undefined, preterite: undefined }).join(' ')) }));
  for (let i = 0; i < sets.length; i += 1) for (let j = i + 1; j < sets.length; j += 1) {
    const score = jaccard(sets[i].set, sets[j].set);
    assert.ok(score < 0.3, `${sets[i].slug} and ${sets[j].slug} share ${(score * 100).toFixed(0)} % of their 5-word sequences`);
  }
});

test('page bodies stay out of the Worker bundle', () => {
  for (const file of ['app/spanish-vocabulary/[theme]/page.tsx', 'app/spanish-verb-practice/[verb]/page.tsx']) {
    const route = readFileSync(resolve(root, file), 'utf8');
    assert.match(route, /loadUsContent/);
    assert.doesNotMatch(route, /public\/us-content|\.json['"]/);
  }
  const catalog = readFileSync(resolve(root, 'app/us-content/catalog.generated.ts'), 'utf8');
  assert.ok(Buffer.byteLength(catalog) < 400 * 1024, 'catalog stays small');
});
