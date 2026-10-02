import assert from 'node:assert/strict';
import test from 'node:test';
import { build } from 'esbuild';
const result = await build({ stdin: { contents: `export { b2Modules } from './app/autoestudio/curriculum/modules/b2'; export { b2Objectives } from './app/autoestudio/curriculum/objectives/b2'; export { validateModule, duplicationAudit } from './app/autoestudio/curriculum/validate';`, resolveDir: process.cwd(), loader: 'ts' }, bundle: true, format: 'esm', platform: 'node', write: false });
const { b2Modules: modules, b2Objectives: objectives, validateModule, duplicationAudit } = await import('data:text/javascript;base64,' + Buffer.from(result.outputFiles[0].text).toString('base64'));
const words = s => s.trim().split(/\s+/u).length;
test('B2 has twenty complete original weeks and four cumulative checkpoints', () => {
  assert.equal(modules.length, 20);
  assert.deepEqual(modules.filter(m => m.kind === 'checkpoint').map(m => m.week), [5,10,15,20]);
  for (const m of modules) assert.deepEqual(validateModule(m), [], m.id);
  assert.deepEqual(duplicationAudit({a1:[],a2:[],b1:[],b2:modules,c1:[],c2:[]}), []);
});
test('B2 requires sustained reception, independent production and audio-first inference', () => {
  for (const m of modules) {
    assert.ok(words(m.reading.text.join(' ')) >= (m.kind === 'checkpoint' ? 450 : 300), m.id + ' reading');
    assert.ok(words(m.listening.script.map(l => l.text).join(' ')) >= (m.kind === 'checkpoint' ? 330 : 220), m.id + ' listening');
    assert.deepEqual(m.listening.stages.map(s => s.stage), ['gist','detail','notice']);
    assert.ok(m.writing.words[0] >= 200, m.id + ' writing');
    assert.ok(m.speaking.tasks.every(t => t.seconds >= 120), m.id + ' speaking');
    assert.ok(m.reading.tasks.some(t => t.type === 'open'), m.id + ' interpretive reading');
  }
});
test('B2 objectives are actually assigned once and subsequently retrieved', () => {
  for (const o of objectives) {
    const teaching = modules.filter(m => m.newObjectives.includes(o.id));
    assert.equal(teaching.length, 1, o.id);
    assert.equal(teaching[0].week, o.week, o.id);
    if (o.week < 20) assert.ok(modules.some(m => m.week > o.week && m.reviewObjectives.includes(o.id)), o.id + ' retrieval');
  }
  for (const m of modules) for (const id of m.reviewObjectives.filter(id => id.startsWith('b2.'))) assert.ok(objectives.find(o => o.id === id)?.week < m.week, id);
});

test('B2 free reformulations use illustrative models rather than rejecting valid wording', () => {
  for (const m of modules) {
    const reformulations = m.grammar.exercises.flatMap(e => e.type === 'open' ? e.items : []);
    assert.ok(reformulations.length >= 3, m.id + ' productive reformulation');
    for (const item of reformulations) {
      assert.match(item.prompt, /Texto de partida:/u);
      assert.ok(item.model && item.checklist.some(s => s.includes('no es una respuesta única')), m.id);
    }
    assert.ok(!m.grammar.exercises.some(e => e.type === 'transform'), m.id + ' no exact-key free reformulation');
    assert.ok(!m.quiz.items.some(i => i.type === 'transform'), m.id + ' quiz accepts independently worded reformulations');
  }
  const connector = modules[10].grammar.exercises.flatMap(e => e.type === 'open' ? e.items : []).find(i => i.prompt.includes('conector formal equivalente'));
  assert.ok(connector, 'por tanto and por consiguiente are both eligible for self-review');
});

test('B2 writing models demonstrate a complete response within the assigned range', () => {
  for (const m of modules) {
    const count = words(m.writing.model.join(' '));
    assert.ok(count >= m.writing.words[0] && count <= m.writing.words[1], `${m.id}: model ${count}, assigned ${m.writing.words.join('–')}`);
    assert.ok(m.writing.model.length >= 3, m.id + ' organized full model');
    assert.doesNotMatch(m.writing.context ?? '', /fragmento|parcial/u, m.id + ' no partial-model framing');
  }
});
