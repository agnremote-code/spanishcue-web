import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { build } from 'esbuild';
import { englishKey, moduleTexts, problems, BILINGUAL_LEVELS } from '../scripts/autoestudio-english/fields.mjs';

const bundle = await build({ stdin: { contents: "export { modulesByLevel } from './app/autoestudio/curriculum/course'; export { englishFor } from './app/autoestudio/english'; export { englishKey as appKey } from './app/autoestudio/english/key';", resolveDir: process.cwd(), loader: 'ts' }, bundle: true, platform: 'node', format: 'esm', write: false, logLevel: 'error' });
const { modulesByLevel, englishFor, appKey } = await import('data:text/javascript;base64,' + Buffer.from(bundle.outputFiles[0].text).toString('base64'));

test('every A1–B2 week has an English line for each learner-facing Spanish text', () => {
  for (const level of BILINGUAL_LEVELS) for (const mod of modulesByLevel[level]) {
    const english = englishFor(level, mod.week);
    assert.ok(english, `${mod.id}: no English`);
    for (const es of moduleTexts(mod)) {
      const key = englishKey(es);
      assert.equal(appKey(es), key);
      // A missing key means the Spanish is kept on purpose (cited form or model answer).
      if (key in english) assert.deepEqual(problems(es, english[key]), [], `${mod.id}: ${es.slice(0, 80)}`);
    }
    const covered = moduleTexts(mod).filter((es) => englishKey(es) in english).length;
    assert.ok(covered / moduleTexts(mod).length > 0.9, `${mod.id}: only ${covered} English lines`);
  }
});

test('C1 and C2 stay Spanish-only', () => {
  for (const level of ['c1', 'c2']) for (const mod of modulesByLevel[level]) assert.equal(englishFor(level, mod.week), undefined);
  const player = readFileSync('app/autoestudio/ModulePlayer.tsx', 'utf8');
  assert.match(player, /const hasEnglish = level\.id === "a1" \|\| level\.id === "a2" \|\| level\.id === "b1" \|\| level\.id === "b2";/);
  assert.match(player, /useState\(hasEnglish\)/);
});

test('answers and options never get an English line', () => {
  const exercises = readFileSync('app/autoestudio/engine/Exercises.tsx', 'utf8');
  assert.doesNotMatch(exercises, /<En text=\{option\}/);
  assert.doesNotMatch(exercises, /<En text=\{item\.(?:source|sentence)\}/);
  assert.doesNotMatch(exercises, /<En text=\{pair\./);
});
