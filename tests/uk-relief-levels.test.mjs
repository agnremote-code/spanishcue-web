import assert from 'node:assert/strict';
import test from 'node:test';
import { readFile } from 'node:fs/promises';
import { build } from 'esbuild';

const built = await build({
  stdin: {
    contents: 'export {areas} from "./app/reino-unido-en-relieve/data"; export * as variant from "./app/reino-unido-en-relieve/variants"; export {placesByCode} from "./app/reino-unido-en-relieve/places"; export {resolveConversationLevel} from "./app/conversation-families/navigation";',
    resolveDir: process.cwd(),
  },
  bundle: true, write: false, format: 'esm', platform: 'node',
});
const { areas, variant, placesByCode, resolveConversationLevel } = await import('data:text/javascript;base64,' + Buffer.from(built.outputFiles[0].text).toString('base64'));

test('A1 uses the same twelve areas and 48 places, with its own eight simple questions per area', () => {
  assert.equal(areas.length, 12);
  for (const area of areas) {
    assert.equal(typeof variant.placesForUKArea, 'function');
    const a1 = variant.questionsForUKArea(area, 'A1');
    const b1 = variant.questionsForUKArea(area, 'B1');
    const a1Places = variant.placesForUKArea(area, 'A1');
    assert.equal(a1.length, 8, area.code);
    assert.equal(b1.length, 12, area.code);
    assert.equal(a1Places.length, 4, area.code);
    assert.deepEqual(a1Places.map(place => place.name), placesByCode[area.code].map(place => place.name));
    assert.ok(a1.every(question => question.es && question.en && !b1.some(other => other.es === question.es)), area.code);
    assert.ok(b1.every(question => question.en), `English support for B1 questions in ${area.code}`);
    assert.ok(a1Places.every(place => place.prompt.es && place.prompt.en && place.context.es && place.context.en), area.code);
    assert.ok(variant.areaForUKLevel(area, 'A1').words.some(word => !variant.areaForUKLevel(areas[0], 'A1').words.some(first => first.es === word.es)) || area === areas[0], `local vocabulary for ${area.code}`);
    assert.ok(area.questions.every(original => b1.some(question => question.es === original.es)), `original B1 questions kept in ${area.code}`);
  }
});

test('old A2 links fall back to B1 while the selector offers a distinct A1, without an A2 option', async () => {
  const page = await readFile('app/reino-unido-en-relieve/page.tsx', 'utf8');
  const catalog = await readFile('app/lesson-catalog.ts', 'utf8');
  const seed = catalog.split('\n').find(line => line.includes('{id:32,'));
  assert.match(page, /levels=\{\["A1","B1"\]\} defaultLevel="B1"/);
  assert.match(page, /placesForUKArea\(active,level\)/);
  assert.match(seed, /level:"B1",levels:\["A1","B1"\]/);
  assert.equal(resolveConversationLevel({availableLevels:['A1','B1'],defaultLevel:'B1'}, 'A2'), 'B1');
});

test('A1 speaking prompts compose as separate, complete ideas', () => {
  const {stances,starters} = variant.a1Support;
  for (const entry of Object.values(stances)) {
    assert.match(entry.es, /\.$/);
    for (const starter of starters) {
      const draft = `${entry.es} ${starter.es}`;
      assert.doesNotMatch(draft, /\b(me gusta|quiero|prefiero)\s+(me gusta|quiero|prefiero)\b/i);
    }
  }
});
