import assert from 'node:assert/strict';
import test from 'node:test';
import { commonLevelChecks, loadLevel, readingWords, listeningWords, words } from './helpers/autoestudio-espejo.mjs';
const course = await loadLevel('a1');
const { modules } = course;
commonLevelChecks(test, 'a1', course);
test('A1: lectura, escucha, escritura y habla con el mínimo del nivel y apoyo en inglés', () => {
  for (const m of modules) {
    assert.ok(readingWords(m) >= 80, m.id + ' lectura');
    assert.ok(listeningWords(m) >= 70, m.id + ' escucha');
    assert.ok(m.writing.words[0] >= 30, m.id + ' escritura');
    assert.ok(m.speaking.tasks.length >= 2, m.id + ' habla');
    assert.ok(m.goal.canDoEn, m.id + ' canDoEn');
    assert.ok(m.theory.parts.every((part) => part.support?.length), m.id + ' apoyo en inglés en cada parte');
  }
});
