import assert from 'node:assert/strict';
import test from 'node:test';
import { commonLevelChecks, loadLevel, readingWords, listeningWords, words } from './helpers/autoestudio-espejo.mjs';
const course = await loadLevel('b1');
const { modules, moduleExercises } = course;
commonLevelChecks(test, 'b1', course);
test('B1: entradas largas, interacción y español sin campos de inglés', () => {
  for (const m of modules) {
    assert.ok(readingWords(m) >= 180, m.id + ' lectura');
    assert.ok(listeningWords(m) >= 170, m.id + ' escucha');
    assert.ok(m.writing.words[0] >= 130 && m.writing.model.length >= 2, m.id + ' escritura');
    assert.ok(m.speaking.tasks.some((t) => t.seconds >= 120), m.id + ' habla sostenida');
    assert.ok(m.speaking.tasks.some((t) => /pregunta|negocia|responde|aclara|interlocutor/iu.test(t.prompt)), m.id + ' interacción');
    assert.doesNotMatch(JSON.stringify(m), /"(?:support|en|canDoEn)":/, m.id);
  }
});
test('B1: recuperación explícita y reformulación evaluada con modelo', () => {
  for (const m of modules) {
    assert.ok(moduleExercises(m).some((x) => x.id.endsWith('retrieval')), m.id + ' recuperación');
    assert.ok(!m.quiz.items.some((x) => x.type === 'transform'), m.id);
    const reformulation = m.quiz.items.find((x) => x.type === 'open' && x.prompt.startsWith('Reformulación'));
    assert.ok(reformulation?.model && reformulation.checklist.length >= 3, m.id + ' reformulación');
  }
});
