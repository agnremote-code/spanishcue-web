import assert from 'node:assert/strict';
import test from 'node:test';
import { readFileSync } from 'node:fs';
import { verbalParadigms, paradigmPersons } from '../app/verbal-system/paradigms.ts';
import { verbalLessons } from '../app/verbal-system/lesson-data.ts';
import { tenseTables } from '../app/condicionales/data.ts';
import { tables } from '../app/subjuntivo-pais-maravillas/data.ts';

test('every verbal tense teaches all six international persons and the imperative has its five addressees', () => {
  assert.equal(Object.keys(verbalParadigms).length, verbalLessons.length);
  for (const lesson of verbalLessons) {
    const rows = verbalParadigms[lesson.id];
    assert.equal(rows.length, lesson.mood === 'Imperativo' ? 5 : 6, lesson.title);
    if (lesson.mood !== 'Imperativo') assert.deepEqual(rows.map(row => row.person), paradigmPersons);
    assert.ok(rows.some(row => row.person.includes('vosotros')));
    assert.ok(rows.some(row => row.person.includes('ustedes')));
    assert.ok(rows.every(row => row.hablar && row.comer && row.vivir));
    assert.ok(!rows.some(row => /\bvos\b/.test(row.person)));
  }
});
test('vosotros morphology remains distinct from ustedes across simple, compound and imperative forms', () => {
  const expected = new Map([[140,'vivís'],[141,'habéis vivido'],[142,'vivisteis'],[143,'vivíais'],[144,'viviréis'],[146,'viviríais'],[147,'habíais vivido'],[148,'viváis'],[149,'hayáis vivido'],[150,'vivierais / vivieseis'],[151,'hubierais vivido / hubieseis vivido'],[152,'habríais vivido'],[153,'habréis vivido'],[154,'hubisteis vivido'],[155,'viviereis'],[156,'hubiereis vivido']]);
  for (const [id, form] of expected) assert.equal(verbalParadigms[id][4].vivir, form);
  assert.equal(verbalParadigms[145][3].vivir, 'vivid / no viváis');
  assert.equal(verbalParadigms[145][4].vivir, 'vivan / no vivan');
});
test('conditional and subjunctive reference tables retain both plurals without a default vos row', () => {
  for (const table of [...tenseTables, ...tables]) {
    assert.ok(table.rows.some(row => row[0].includes('vosotros')), table.title);
    assert.ok(table.rows.some(row => row[0].includes('ustedes')), table.title);
    assert.ok(!table.rows.some(row => /\bvos\b/.test(row[0])), table.title);
  }
});
test('neutral examples and labeled regional comparisons coexist', () => {
  const present = verbalLessons.find(lesson => lesson.id === 140);
  assert.ok(present.examples.some(example => example.es === 'Tú comes temprano.'));
  const regional = present.practice.find(choice => choice.prompt.startsWith('Variante regional:'));
  assert.equal(regional.options[regional.answer], 'vivís');
  assert.equal(regional.whyEn, 'With vos, vivir becomes vivís.');
});

test("subjunctive archival guidance uses the accented tú clitic", () => {
  const source = readFileSync("app/subjuntivo-pais-maravillas/data.ts", "utf8");
  assert.ok(source.includes("Tradúcela mentalmente"));
  assert.ok(!source.includes("Traducila mentalmente"));
});

test('ordinary clitic instructions use tú while internal trainer IDs stay stable', () => {
  const trainer = readFileSync('app/entrenador-personal/PersonalTrainer.tsx','utf8');
  const engine = readFileSync('app/entrenador-personal/engine.mjs','utf8');
  for (const value of ['PREPÁRAME','CORRÍGEME','dirígenos a todos','Respóndeme']) assert.ok(trainer.includes(value),value);
  assert.ok(engine.includes('id: "corregime", title: "Corrígeme"'));
  assert.ok(trainer.includes('stage.id === "corregime"'));
  assert.ok(readFileSync('app/syntax-labs/RepairSyntaxLab.tsx','utf8').includes('Detente después del cierre.'));
  assert.ok(readFileSync('app/syntax-labs/data.ts','utf8').includes('Acláralo sin cambiar'));
  for (const path of ['app/condicionales/data.ts','app/condicionales-b1/data.ts']) assert.ok(!readFileSync(path,'utf8').includes('decile / dile'));
});
