import assert from 'node:assert/strict';
import test from 'node:test';
import { commonLevelChecks, loadLevel, readingWords, listeningWords, words } from './helpers/autoestudio-espejo.mjs';
const course = await loadLevel('a2');
const { modules } = course;
commonLevelChecks(test, 'a2', course);
test('A2: recepción y producción sostenidas', () => {
  for (const m of modules) {
    assert.ok(readingWords(m) >= 110, m.id + ' lectura');
    assert.ok(listeningWords(m) >= 95, m.id + ' escucha');
    assert.ok(m.writing.words[0] >= 60, m.id + ' escritura');
    assert.ok(m.speaking.tasks.reduce((sum, t) => sum + t.seconds, 0) >= 180, m.id + ' habla');
  }
});
test('A2: las integraciones crecen en lectura y escucha hasta el cierre del nivel', () => {
  const checkpoints = modules.filter((m) => m.kind === 'checkpoint');
  for (let i = 1; i < checkpoints.length; i++) {
    assert.ok(readingWords(checkpoints[i]) > readingWords(checkpoints[i - 1]), checkpoints[i].id);
    assert.ok(listeningWords(checkpoints[i]) > listeningWords(checkpoints[i - 1]), checkpoints[i].id);
  }
  assert.ok(readingWords(checkpoints.at(-1)) >= 375);
  assert.ok(listeningWords(checkpoints.at(-1)) >= 225);
});
