import test from 'node:test';
import assert from 'node:assert/strict';
import { compareEnglishCopy } from '../scripts/check-english-copy.mjs';
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
