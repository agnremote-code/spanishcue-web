import test from 'node:test';
import assert from 'node:assert/strict';
import { APPROVAL_MANIFESTS, compareEnglishCopy, filterReviewedChanges, loadApprovedAdditions } from '../scripts/check-english-copy.mjs';
import { existsSync, readFileSync } from 'node:fs';
const compare = (before, after, path = 'app/example.tsx') => compareEnglishCopy(new Map([[path, before]]), new Map([[path, after]]));
test('allows Spanish edits while preserving explicit English objects, helpers and ternaries', () => {
  const before = 'const c = {en:{help:"Listen"},es:{help:"Escuchá"}}; t("Probá", "Try"); const es = locale === "es"; const a = es ? "Mirá" : "Look";';
  assert.deepEqual(compare(before, before.replace('Escuchá', 'Escucha').replace('Probá', 'Prueba').replace('Mirá', 'Mira')), []);
});
test('detects changed and deleted English values including deleted files', () => {
  assert.equal(compare('const c = {en:{help:"Listen"}};', 'const c = {en:{help:"Look"}};').length, 2);
  assert.equal(compare('t("Hola", "Hello")', '').length, 1);
  assert.equal(compareEnglishCopy(new Map([['app/en.json', '{"x":"Hello"}']]), new Map()).length, 1);
});
test('detects English template changes and preserves repeated occurrences', () => {
  assert.equal(compare('t("Hola", `Hello ${name}`)', 't("Hola", `Hey ${name}`)').length, 2);
  assert.equal(compare('t("Uno", "One"); t("Uno", "One");', 't("Uno", "One");').length, 1);
});
test('protects typed tuple and declared factory English values', () => {
  const before = 'type Pair=[string,string]; const a:Pair[]=[["Hola", "Hello"]]; const p=(es:string,en:string)=>({es,en}); p("Hola", "Hi");';
  assert.equal(compare(before, before.replace('Hello','Goodbye').replace('"Hi"','"Bye"')).length, 4);
});
test('protects standalone English dictionaries and Autoestudio support', () => {
  assert.equal(compare('const en:Record<string,string>={help:"Listen"};', 'const en:Record<string,string>={help:"Look"};').length, 2);
  assert.equal(compare('const theory={parts:[{support:["English help"]}]}', 'const theory={parts:[{support:["Changed help"]}]}', 'app/autoestudio/curriculum/modules/a1/w01.ts').length, 2);
});
test('flags new English strings in existing and new files', () => {
  assert.equal(compare('const en={a:"Hello"}', 'const en={a:"Hello",b:"New"}').length, 1);
  assert.equal(compareEnglishCopy(new Map(), new Map([['app/en.json','{"a":"New"}']])).length, 1);
});
test('protects English resource-template text', () => {
  assert.equal(compare('const ui=<p>Evaluate the lesson.</p>', 'const ui=<p>Read the lesson.</p>', 'app/resources/[slug]/page.tsx').length, 2);
});
test('reviewed banner change exempts only its exact path, text and occurrence', () => {
  const path = 'app/NewLessonsBanner.tsx';
  const findings = [
    {path, text:'JUST ADDED', kind:'english-changed-or-deleted'},
    {path, text:'NEW CLASSES!', kind:'english-added'},
    {path, text:'JUST ADDED', kind:'english-changed-or-deleted'},
    {path:'app/other.tsx', text:'JUST ADDED', kind:'english-changed-or-deleted'},
    {path, text:'Open lesson', kind:'english-changed-or-deleted'}
  ];
  assert.deepEqual(filterReviewedChanges(findings, [
    {path, text:'JUST ADDED', kind:'english-changed-or-deleted', reason:'Owner requested banner redesign'},
    {path, text:'NEW CLASSES!', kind:'english-added', reason:'Owner requested banner redesign'}
  ]), findings.slice(2));
});
test('approval manifests are explicit, exact and carry an authorization note', () => {
  assert.ok(APPROVAL_MANIFESTS.includes('docs/audits/seo-english-copy-additions-20261007.json'));
  for (const path of APPROVAL_MANIFESTS) {
    assert.ok(existsSync(path), path);
    const manifest = JSON.parse(readFileSync(path, 'utf8'));
    assert.equal(manifest.version, 1, path);
    assert.ok(typeof manifest.authorization === 'string' && manifest.authorization.length > 20, path);
  }
  const additions = loadApprovedAdditions(process.cwd());
  assert.ok(additions.length > 0);
  for (const addition of additions) {
    assert.match(addition.path, /^(?:app|components|lib|content|data|public|server|worker)\//);
    assert.ok(addition.text.trim().length > 0);
  }
});
test('ignores URL templates, paths and locale codes that only live under English keys', () => {
  const before = 'const alt = {en: {href: `${url}?lang=en`, code: "en", path: "/resources", label: "Open lesson"}}; const c = locale === "es" ? url : `${url}?lang=en`;';
  assert.deepEqual(compare(before, 'const alt = {en: {href: url, code: "en-US", label: "Open lesson"}};'), []);
  assert.equal(compare(before, before.replace('Open lesson', 'Open class')).length, 2);
});
