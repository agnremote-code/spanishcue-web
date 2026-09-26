import assert from 'node:assert/strict';
import test from 'node:test';
import {readFileSync, existsSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {build} from 'esbuild';

const snapshot = JSON.parse(readFileSync('tests/fixtures/conversation-batch1-run1-preserved.json', 'utf8'));
const result = await build({stdin: {contents: `export {getLevelConfig} from './app/red-flag-o-no/engine.mjs'; export {talkVariants} from './app/choose-conversation/variants'; export * from './app/conversation-worlds/data'; export * from './app/conversation-worlds/data-a2'; export * from './app/conversation-worlds/data-b2'; export {conversationWorldStorageKey} from './app/conversation-worlds/state'; export {lessons} from './app/lesson-catalog'; export * from './app/conversation-families/catalog'; export * from './app/resource-seo'; export {conversationLevelUrl} from './app/conversation-families/navigation';`, resolveDir: process.cwd()}, bundle: true, write: false, platform: 'node', format: 'esm'});
const p = await import('data:text/javascript;base64,' + Buffer.from(result.outputFiles[0].text).toString('base64'));
const hashBytes = value => createHash('sha256').update(value).digest('hex');
const hash = value => hashBytes(JSON.stringify(value));
const additions = [
  ['red-flag-o-no', 'C1', ['A1', 'A2', 'B1', 'B2', 'C1']],
  ['lets-talk', 'C1', ['A1', 'A2', 'B1', 'B2', 'C1']],
  ['la-maquina-que-elimina-cosas', 'A1', ['A1', 'A2', 'B1', 'B2']],
  ['tu-vida-con-una-regla-absurda', 'A1', ['A1', 'A2', 'B1', 'B2']],
];

test('all fourteen original and Run 1 banks, existing metadata and route ledger remain intact', () => {
  const banks = {};
  for (const level of ['A1', 'A2', 'B1', 'B2']) banks[`redFlag${level}`] = hash(p.getLevelConfig(level));
  for (const level of ['A1', 'A2', 'B1', 'B2']) banks[`talk${level}`] = hash(p.talkVariants[level]);
  for (const name of ['eliminations', 'absurdRules', 'eliminationsA2', 'absurdRulesA2', 'eliminationsB2', 'absurdRulesB2']) banks[name] = hash(p[name]);
  assert.deepEqual(banks, snapshot.banks);
  assert.equal(hash(p.lessons), snapshot.routeLedger);
  for (const original of snapshot.families) {
    const family = p.conversationFamilies.find(f => f.id === original.id);
    for (const key of ['defaultLevel', 'canonicalPath', 'canonicalLessonId', 'legacyLessonIds', 'access']) assert.deepEqual(family[key], original[key], `${family.id}: ${key}`);
    for (const level of Object.keys(original.variants)) {
      assert.deepEqual(family.variants[level], original.variants[level], `${family.id}: ${level}`);
      assert.deepEqual(family.previewByLevel[level], original.previewByLevel[level], `${family.id}: ${level} preview`);
    }
  }
});

test('existing standalone banks, support modules, thumbnails, routes and Run 1 history retain exact bytes', () => {
  for (const [path, expected] of Object.entries(snapshot.immutableFiles)) assert.equal(hashBytes(readFileSync(path)), expected, path);
  const status = readFileSync('docs/lessons/conversation-family-production-status.md');
  assert.equal(hashBytes(status.subarray(0, snapshot.run1StatusPrefix.bytes)), snapshot.run1StatusPrefix.sha256);
});

test('exactly the four Run 2 additions appear in the existing PRO family cards and resources', () => {
  let added = 0;
  for (const [id, level, levels] of additions) {
    const family = p.conversationFamilies.find(f => f.id === id);
    const original = snapshot.families.find(f => f.id === id);
    assert.deepEqual(family.availableLevels, levels, id);
    assert.equal(family.variants[level].level, level);
    assert.equal(family.variants[level].lessonId, family.canonicalLessonId);
    assert.equal(family.variants[level].contentRef, `${family.canonicalPath}#${level}`);
    assert.equal(family.access, 'pro');
    added += levels.filter(item => !original.variants[item]).length;
    const cards = p.catalogLessons.filter(l => l.familyId === id);
    assert.equal(cards.length, 1);
    assert.deepEqual(cards[0].levels, levels);
    assert.equal(p.conversationLessonHref(cards[0], level), `${family.canonicalPath}?level=${level}`);
    const resource = p.lessonForResourceSlug(p.resourceSlugForLesson(cards[0]));
    assert.equal(resource.id, family.canonicalLessonId);
    assert.deepEqual(resource.levels, levels);
    assert.ok(family.variants[level].communicativeObjectives.length >= 3);
    assert.ok(!family.variants.C2);
    if (level === 'A1') assert.ok(!family.variants.C1);
  }
  assert.equal(added, 4);
});

test('four new previews have distinct assets and metadata never imports private content', async () => {
  const newPaths = [];
  for (const [id, level] of additions) {
    const family = p.conversationFamilies.find(f => f.id === id);
    const preview = family.previewByLevel[level];
    assert.ok(preview?.image, `${id}: ${level} preview exists`);
    newPaths.push(preview.image);
    assert.ok(existsSync('public' + preview.image), preview.image);
    const bytes = readFileSync('public' + preview.image);
    assert.ok(bytes.length > 1000, 'No placeholder asset');
    for (const old of Object.values(snapshot.families.find(f => f.id === id).previewByLevel)) {
      assert.notEqual(preview.image, old.image);
      assert.notDeepEqual(bytes, readFileSync('public' + old.image));
    }
    assert.ok(preview.hook.length > 25);
    assert.ok(preview.explanation?.length > 40);
    assert.ok(preview.warmup?.length > 15);
  }
  assert.equal(new Set(newPaths).size, 4);
  const publicBundle = await build({entryPoints: ['app/conversation-families/catalog.ts'], bundle: true, write: false, platform: 'node', format: 'esm', metafile: true});
  assert.doesNotMatch(Object.keys(publicBundle.metafile.inputs).join('\n'), /app\/choose-conversation\/(?:a1-data|b2-data|c1-data|data|variants)|app\/conversation-worlds\/data|app\/red-flag-o-no\/(?:engine|a1|c1)/);
});

test('all supported levels preserve query/hash; unsupported levels retain every historical route default', () => {
  for (const [id,,levels] of additions) {
    const family = p.conversationFamilies.find(f => f.id === id);
    for (const level of levels) {
      assert.equal(p.resolveConversationLevel(family, level), level);
      assert.equal(p.conversationLevelUrl(`https://example.test${family.canonicalPath}?locale=es&source=teacher#round`, family, level), `${family.canonicalPath}?locale=es&source=teacher&level=${level}#round`);
    }
    const invalid = ['C2', 'a1', 'INVALID', '', null, ...(id === 'red-flag-o-no' || id === 'lets-talk' ? [] : ['C1'])];
    for (const seed of p.lessons.filter(l => family.legacyLessonIds.includes(l.id))) {
      for (const requested of invalid) assert.equal(p.resolveConversationLevel({...family, defaultLevel: seed.level}, requested), seed.level, `${seed.path}: ${requested}`);
    }
  }
});

test('world progress has eight independent family-level keys while all historical keys remain stable', () => {
  const keys = [];
  for (const mode of ['machine', 'rules']) for (const level of ['A1', 'A2', 'B1', 'B2']) {
    const key = p.conversationWorldStorageKey(mode, level);
    assert.equal(key, level === 'B1' ? `chespanish-conversation-${mode}-v1` : `chespanish-conversation-${mode}-${level}-v1`);
    keys.push(key);
  }
  assert.equal(new Set(keys).size, 8);
});
