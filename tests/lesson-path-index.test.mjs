import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { stripTypeScriptTypes } from 'node:module';
import test from 'node:test';

const moduleUrl = source => 'data:text/javascript;base64,' + Buffer.from(source).toString('base64');
const policyUrl = moduleUrl(stripTypeScriptTypes(readFileSync('app/access-policy.ts', 'utf8')));
const { lessonAtPath, localLessonPath } = await import(policyUrl);
const source = stripTypeScriptTypes(readFileSync('worker/lesson-path-index.ts', 'utf8'))
  .replace('"../app/access-policy"', JSON.stringify(policyUrl));
const { createLessonPathIndex } = await import(moduleUrl(source));

const catalog = [
  {id: 1, path: '/same', level: 'A1'},
  {id: 2, path: '/same', level: 'B1'},
  {id: 3, path: 'nested//class/'},
  {id: 4, special: true},
  {id: 5},
  {id: 6, path: 'https://example.test/private'},
  {id: 7, path: 'HTTP://example.test/private'},
  {id: 8, path: '/'},
  {id: 9, path: ''},
  ...Array.from({length: 600}, (_, i) => ({id: 100 + i, path: '/gramatica/tema-' + i})),
];

test('indexed lookup preserves exact lesson identity and normalization for every route', () => {
  const find = createLessonPathIndex(catalog);
  const paths = ['/', '', '///', '/unknown', '/__proto__', '/constructor', '/same',
    '/clase/6', '/clase/7', 'https://example.test/private', '/same.rsc',
    '/same?lang=en', '/SAME', '/same%2F'];
  for (const lesson of catalog) {
    const path = localLessonPath(lesson);
    if (path !== null) paths.push(path, path + '/', path.slice(1), path.replaceAll('/', '//'));
  }
  for (const path of paths) assert.equal(find(path), lessonAtPath(path, catalog), path);
  assert.equal(find('/same'), catalog[0], 'duplicate routes retain Array.find first-match ordering');
  assert.equal(find('/choose-conversation'), catalog[3]);
  assert.equal(find('/clase/5'), catalog[4]);
  assert.equal(createLessonPathIndex([])('/'), undefined);
});

test('warm lookups do not reread or normalize the catalog, including misses', () => {
  let pathReads = 0;
  const lessons = Array.from({length: 600}, (_, id) => ({
    id,
    get path() { pathReads++; return '/lesson/' + id; },
  }));
  const find = createLessonPathIndex(lessons);
  const startupReads = pathReads;
  assert.ok(startupReads > 0);
  for (let i = 0; i < 3000; i++) {
    assert.equal(find('/lesson/599'), lessons[599]);
    assert.equal(find('/not-a-lesson/' + i), undefined);
  }
  assert.equal(pathReads, startupReads, 'request paths must never rebuild the static index');
});

test('Worker constructs one catalog index outside fetch and keeps the existing access policy', () => {
  const worker = readFileSync('worker/index.ts', 'utf8');
  assert.equal(worker.match(/createLessonPathIndex\(lessons\)/g)?.length, 1);
  assert.ok(worker.indexOf('const findLessonAtPath =') < worker.indexOf('const app ='));
  assert.match(worker, /const lesson=findLessonAtPath\(pathname\);/);
  assert.ok(!worker.includes('lessonAtPath(pathname,lessons)'));
  assert.match(worker, /const verifiedUser=identityAware&&firebaseTokenFromHeaders/);
  assert.match(worker, /const verifiedHeaders=authenticatedRequestHeaders\(routedHeaders,verifiedUser,account,ownerIdentity\)/);
});

