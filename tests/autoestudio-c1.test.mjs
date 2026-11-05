import assert from 'node:assert/strict';
import test from 'node:test';
import { commonLevelChecks, loadLevel, readingWords, listeningWords, words } from './helpers/autoestudio-espejo.mjs';
const course = await loadLevel('c1');
const { modules, moduleClips } = course;
commonLevelChecks(test, 'c1', course);
test('C1: discurso avanzado sostenido y solo en español', () => {
  for (const m of modules) {
    assert.ok(readingWords(m) >= 450, m.id + ' lectura');
    assert.ok(listeningWords(m) >= 280, m.id + ' escucha');
    assert.ok(m.writing.words[0] >= 220 && m.writing.model.length >= 3, m.id + ' escritura');
    assert.ok(m.speaking.tasks.some((t) => t.seconds >= 240), m.id + ' habla');
    assert.ok(moduleClips(m).length > 20, m.id + ' audio');
    assert.doesNotMatch(m.writing.context ?? '', /fragmento|parcial/iu, m.id);
    assert.doesNotMatch(JSON.stringify(m), /"(?:support|en|canDoEn)":/, m.id);
  }
});
test('C1: citas reales en el noticing, reformulación con autoevaluación y huecos con pista', () => {
  const positions = new Set();
  for (const m of modules) {
    for (const item of m.reading.noticing.items) assert.ok(m.reading.text.join(' ').includes(item.quote), m.id + ': ' + item.quote);
    for (const item of m.quiz.items) if ('answer' in item) positions.add(item.answer);
    assert.ok(!m.grammar.exercises.some((e) => e.type === 'transform'), m.id);
    assert.ok(!m.quiz.items.some((i) => i.type === 'transform'), m.id);
    for (const item of m.quiz.items.filter((i) => i.type === 'gap')) assert.ok(item.hint?.length > 20, m.id);
    for (const e of m.grammar.exercises.filter((e) => e.type === 'open')) for (const item of e.items) assert.ok(item.model && item.checklist.length >= 2, m.id);
  }
  assert.ok(positions.size >= 3);
});
