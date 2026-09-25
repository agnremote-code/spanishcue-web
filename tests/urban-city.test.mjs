import assert from 'node:assert/strict';
import test from 'node:test';
import { readFile } from 'node:fs/promises';
import { build } from 'esbuild';

let engine;
try { engine = await import('../app/la-ciudad-no-duerme/engine.mjs'); } catch {}

test('walking advances continuously by elapsed time and stays within the city', () => {
  assert.ok(engine, 'The city movement engine exists');
  const a = engine.stepMotion({ x: 500, direction: 1, target: null }, 1 / 60);
  assert.ok(a.x > 500 && a.x < 510);
  const b = engine.stepMotion({ x: a.x, direction: 1, target: null }, 1 / 60);
  assert.ok(b.x > a.x);
  assert.equal(engine.stepMotion({ x: engine.WORLD.maxX, direction: 1, target: null }, .05).x, engine.WORLD.maxX);
  assert.equal(engine.stepMotion({ x: engine.WORLD.minX, direction: -1, target: null }, .05).x, engine.WORLD.minX);
});

test('a clicked destination is reached without overshooting or teleporting after a pause', () => {
  assert.ok(engine);
  const normal = engine.stepMotion({ x: 300, direction: 0, target: 600 }, .02);
  assert.ok(normal.x > 300 && normal.x < 600);
  const arrived = engine.stepMotion({ x: 599, direction: 0, target: 600 }, .02);
  assert.equal(arrived.x, 600);
  assert.equal(arrived.arrived, true);
  assert.ok(engine.stepMotion({ x: 300, direction: 1, target: null }, 90).x < 325);
});

test('camera never exposes empty space at either edge and focus stays in bounds', () => {
  assert.ok(engine);
  for (const width of [360, 800, 1440]) {
    for (const x of [engine.WORLD.minX, 1500, engine.WORLD.maxX]) {
      const offset = engine.cameraOffset(x, width, .7);
      assert.ok(offset >= 0);
      assert.ok(offset <= Math.max(0, engine.WORLD.width * .7 - width));
    }
  }
});

test('shortcuts preserve native activation, editable fields and modifier keys', () => {
  assert.ok(engine);
  for (const tagName of ['BUTTON', 'A', 'INPUT', 'SELECT', 'TEXTAREA', 'SUMMARY']) {
    assert.equal(engine.canHandleKeys({ tagName }), false);
  }
  assert.equal(engine.canHandleKeys({ tagName: 'DIV', isContentEditable: true }), false);
  assert.equal(engine.canHandleKeys({ tagName: 'SPAN', closest: () => ({}) }), false);
  assert.equal(engine.canHandleKeys({ tagName: 'MAIN', closest: () => null }), true);
});

test('all ten locations contain authored branches with valid return paths', async () => {
  const data = JSON.parse(await readFile(new URL('../app/la-ciudad-no-duerme/content.json', import.meta.url), 'utf8'));
  assert.equal(data.stops.length, 10);
  const ids = new Set(data.stops.map(stop => stop.id));
  assert.equal(ids.size, 10);
  const questions = [];
  for (const stop of data.stops) {
    assert.ok(stop.choices.length >= 3, stop.id);
    for (const choice of [...stop.choices, ...stop.twist.choices]) {
      assert.ok(choice.question.includes('?'), `${stop.id}: meaningful follow-up`);
      assert.ok(choice.teacher && choice.reaction && choice.label);
      if (choice.goTo) assert.ok(ids.has(choice.goTo), `${stop.id}: valid destination`);
      questions.push(choice.question);
    }
    assert.ok(stop.x >= engine.WORLD.minX && stop.x <= engine.WORLD.maxX);
  }
  assert.equal(new Set(questions).size, questions.length, 'Branches ask distinct questions');
  assert.equal(data.finale.questions.length, 5);
});

test('the city is listed once in Conversation B1, in pedagogical order and behind PRO access', async () => {
  const built = await build({ stdin: { contents: "export {catalogLessons} from './app/conversation-families/catalog'; export {lessons} from './app/lesson-catalog'; export {isFreeLesson,lessonAtPath} from './app/access-policy';", resolveDir: process.cwd() }, bundle: true, format: 'esm', platform: 'node', write: false });
  const policy = await import('data:text/javascript;base64,' + Buffer.from(built.outputFiles[0].text).toString('base64'));
  const lesson = policy.lessonAtPath('/la-ciudad-no-duerme', policy.lessons);
  assert.ok(lesson);
  assert.equal(lesson.level, 'B1');
  assert.equal(lesson.category, 'Conversación');
  assert.equal(lesson.conversationMode, 'play');
  assert.equal(policy.isFreeLesson(lesson.id), false);
  assert.ok(lesson.routeSequence > 0);
  assert.equal(policy.catalogLessons.filter(item => item.path === lesson.path).length, 1);
  assert.ok((await readFile('public' + lesson.image)).length > 1000);
});
