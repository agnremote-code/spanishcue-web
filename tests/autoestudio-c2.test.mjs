import assert from 'node:assert/strict';
import test from 'node:test';
import { commonLevelChecks, loadLevel, readingWords, listeningWords, words } from './helpers/autoestudio-espejo.mjs';
const course = await loadLevel('c2');
const { modules } = course;
commonLevelChecks(test, 'c2', course);
test('C2: densidad, autonomía y solo español', () => {
  for (const m of modules) {
    assert.ok(readingWords(m) >= 600, m.id + ' lectura');
    assert.ok(listeningWords(m) >= 380, m.id + ' escucha');
    assert.ok(m.writing.words[0] >= 400, m.id + ' escritura');
    assert.ok(m.speaking.tasks.reduce((s, t) => s + t.seconds, 0) >= 480, m.id + ' habla');
    assert.doesNotMatch(JSON.stringify(m), /"(?:support|en|canDoEn)":/, m.id);
  }
});
test('C2: recuperación con modelo, integraciones amplias y respuestas no posicionales', () => {
  for (const m of modules) {
    const recovery = m.practice.exercises.find((e) => e.id.endsWith('recuperacion'));
    assert.ok(recovery && recovery.items.length >= (m.kind === 'checkpoint' ? 8 : 4), m.id + ' recuperación');
    for (const item of recovery.items) assert.ok(item.model, m.id);
    const transform = m.quiz.items.find((i) => i.type === 'transform');
    assert.ok(transform, m.id + ' transformación en el quiz');
    assert.doesNotMatch(transform.instruction ?? '', /Escribe literalmente la segunda/);
    if (m.kind !== 'checkpoint') assert.match(m.writing.model[0], /^Modelo parcial de apertura/, m.id);
  }
  const answers = modules.flatMap((m) => m.quiz.items.filter((i) => i.type === 'choice').map((i) => i.answer));
  assert.ok(answers.includes(0) && answers.includes(1));
});
