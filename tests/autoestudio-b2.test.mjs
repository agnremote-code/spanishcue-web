import assert from 'node:assert/strict';
import test from 'node:test';
import { commonLevelChecks, loadLevel, readingWords, listeningWords, words } from './helpers/autoestudio-espejo.mjs';
const course = await loadLevel('b2');
const { modules } = course;
commonLevelChecks(test, 'b2', course);
test('B2: recepción sostenida, producción independiente y lectura interpretativa', () => {
  for (const m of modules) {
    assert.ok(readingWords(m) >= (m.kind === 'checkpoint' ? 450 : 300), m.id + ' lectura');
    assert.ok(listeningWords(m) >= (m.kind === 'checkpoint' ? 330 : 220), m.id + ' escucha');
    assert.ok(m.writing.words[0] >= 200 && m.writing.model.length >= 3, m.id + ' escritura');
    assert.ok(m.speaking.tasks.every((t) => t.seconds >= 120), m.id + ' habla');
    assert.ok(m.reading.tasks.some((t) => t.type === 'open'), m.id + ' lectura interpretativa');
    assert.doesNotMatch(m.writing.context ?? '', /fragmento|parcial/u, m.id);
    assert.doesNotMatch(JSON.stringify(m), /"(?:support|en|canDoEn)":/, m.id);
  }
});
test('B2: reformulaciones libres con modelo ilustrativo, nunca clave exacta', () => {
  for (const m of modules) {
    const items = m.grammar.exercises.flatMap((e) => (e.type === 'open' ? e.items : []));
    assert.ok(items.length >= 3, m.id);
    for (const item of items) {
      assert.match(item.prompt, /Texto de partida:/u, m.id);
      assert.ok(item.model && item.checklist.some((s) => s.includes('no es una respuesta única')), m.id);
    }
    assert.ok(!m.grammar.exercises.some((e) => e.type === 'transform'), m.id);
    assert.ok(!m.quiz.items.some((i) => i.type === 'transform'), m.id);
  }
});
