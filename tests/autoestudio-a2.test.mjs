import assert from 'node:assert/strict';
import test from 'node:test';
import { build } from 'esbuild';
const built = await build({ stdin: { contents: `export { a2Modules as modules, a2RetrievalEvidence as evidence } from './app/autoestudio/curriculum/modules/a2'; export { a2Objectives as objectives } from './app/autoestudio/curriculum/objectives/a2'; export { validateModule, duplicationAudit } from './app/autoestudio/curriculum/validate'; export { SECTION_ORDER } from './app/autoestudio/curriculum/types'; export { checkAnswer } from './app/autoestudio/engine/text';`, resolveDir: process.cwd(), loader: 'ts' }, bundle: true, format: 'esm', platform: 'node', write: false, logLevel: 'error' });
const { modules, evidence, objectives, checkAnswer, validateModule, duplicationAudit, SECTION_ORDER } = await import('data:text/javascript;base64,' + Buffer.from(built.outputFiles[0].text).toString('base64'));
const words = text => text.trim().split(/\s+/u).length;
test('A2 has twenty complete literal weeks and four integrated checkpoints', () => {
  assert.equal(modules.length, 20);
  assert.deepEqual(modules.filter(m => m.kind === 'checkpoint').map(m => m.week), [5,10,15,20]);
  for (const [index, m] of modules.entries()) {
    assert.equal(m.week, index + 1);
    assert.deepEqual(validateModule(m), [], m.id);
    for (const section of SECTION_ORDER) assert.ok(m[section], `${m.id}/${section}`);
  }
});
test('A2 teaches each objective exactly once and retrieves it through a later activity', () => {
  for (const o of objectives) {
    assert.deepEqual(modules.filter(m => m.newObjectives.includes(o.id)).map(m => m.week), [o.week], o.id);
    if (o.week < 20) {
      const later = modules.filter(m => m.week > o.week && m.reviewObjectives.includes(o.id));
      assert.ok(later.length, `retrieval: ${o.id}`);
      assert.ok(evidence.some(e => e.objectiveId === o.id && later.some(m => m.id === e.moduleId && m.practice.exercises.some(x => x.id === e.exerciseId && x.type === 'open' && x.items[0].model))), `actual retrieval task: ${o.id}`);
    }
  }
});
test('A2 receptive and productive skills are substantial, varied and audio first', () => {
  for (const m of modules) {
    assert.ok(words(m.reading.text.join(' ')) >= 110, `${m.id}: reading length`);
    assert.ok(words(m.listening.script.map(l => l.text).join(' ')) >= 95, `${m.id}: listening length`);
    assert.deepEqual(m.listening.stages.map(s => s.stage), ['gist','detail','notice']);
    assert.ok(m.writing.words[0] >= 60);
    assert.ok(m.speaking.tasks.reduce((sum,t) => sum+t.seconds,0) >= 180);
    assert.ok(m.writing.steps.some(s => /revis|corrig/i.test(s)));
    assert.ok(!/TODO|placeholder|próximamente/.test(JSON.stringify(m)));
  }
  assert.deepEqual(duplicationAudit({a1:[],a2:modules,b1:[],b2:[],c1:[],c2:[]}), []);
});

test('A2 models demonstrate the requested writing length and late checkpoints sustain longer input', () => {
  for (const m of modules) {
    const count = words(m.writing.model.join(' '));
    assert.ok(count >= m.writing.words[0] && count <= m.writing.words[1], `${m.id}: model ${count}, target ${m.writing.words}`);
  }
  const checkpoints = modules.filter(m => m.kind === 'checkpoint');
  for (let i = 1; i < checkpoints.length; i++) {
    assert.ok(words(checkpoints[i].reading.text.join(' ')) > words(checkpoints[i-1].reading.text.join(' ')));
    assert.ok(words(checkpoints[i].listening.script.map(x => x.text).join(' ')) > words(checkpoints[i-1].listening.script.map(x => x.text).join(' ')));
  }
  assert.ok(words(checkpoints.at(-1).reading.text.join(' ')) >= 375);
  assert.ok(words(checkpoints.at(-1).listening.script.map(x => x.text).join(' ')) >= 225);
});

test('A2 source-gap additions are taught and later retrieved, with honest synthesis limits', () => {
  for (const id of ['a2.gram.indefinido-ortografia','a2.gram.indefinido-ver-dar','a2.gram.posesivos-tonicos','a2.voc.vivienda-servicios','a2.fun.transmitir-acuerdo']) {
    assert.ok(objectives.some(o => o.id === id), id);
    assert.ok(evidence.some(e => e.objectiveId === id), id);
  }
  for (const m of modules) assert.match(m.listening.context, /síntesis.*no acredita/u);
  assert.match(objectives.find(o => o.id === 'a2.pron.s-aspirada').outcome, /no doy por verificada/u);
});


test('A2 exact-check transformations accept the variants explicitly allowed by their prompts', () => {
  const item = (week, index) => modules[week-1].grammar.exercises.find(e => e.type === 'transform').items[index];
  for (const [week,index,variants] of [
    [2,1,['Recibí una carta.','Yo recibí una carta.']],
    [2,2,['Ellas prepararon una sopa.','Prepararon una sopa.']],
    [4,1,['Antes vivían cerca del colegio.','Antes ellos vivían cerca del colegio.']],
    [19,1,['No estoy de acuerdo.','No estoy de acuerdo con esa opinión.']],
  ]) {
    for (const answer of variants) assert.equal(checkAnswer(answer, item(week,index).answers), 'correct', answer);
  }
  assert.equal(checkAnswer('La sala es pequeña. Por eso no caben treinta personas.', item(20,0).answers), 'correct');
  assert.equal(checkAnswer('Ellas preparó una sopa.', item(2,2).answers), 'wrong');
});
