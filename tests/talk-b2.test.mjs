import assert from 'node:assert/strict';
import test from 'node:test';
import { readFileSync } from 'node:fs';
import { build } from 'esbuild';

const bundled = await build({ entryPoints: ['app/choose-conversation/variants.ts'], bundle: true, write: false, format: 'esm', platform: 'node' });
const { talkVariants } = await import('data:text/javascript;base64,' + Buffer.from(bundled.outputFiles[0].text).toString('base64'));

test('Let’s Talk adds exactly 120 distinct B2 questions in the same fifteen worlds', () => {
  assert.ok(talkVariants.B2, 'B2 is authored and registered');
  assert.deepEqual(Object.keys(talkVariants), ['A1', 'A2', 'B1', 'B2']);
  const worlds = talkVariants.B2.activities;
  assert.equal(worlds.length, 15);
  const previous = new Set(['A1', 'A2', 'B1'].flatMap(level => talkVariants[level].activities.flatMap(topic => topic.questions)));
  const questions = worlds.flatMap(topic => topic.questions);
  assert.equal(questions.length, 120);
  assert.equal(new Set(questions).size, 120);
  for (const [index, topic] of worlds.entries()) {
    const original = talkVariants.B1.activities[index];
    assert.deepEqual([topic.title, topic.emoji, topic.color], [original.title, original.emoji, original.color]);
    assert.equal(topic.questions.length, 8);
    for (const question of topic.questions) {
      assert.ok(question.includes('¿') && question.includes('?'), question);
      assert.ok(!previous.has(question), question);
    }
  }
  assert.match(talkVariants.B2.teacherNotes.join(' '), /45/);
  assert.ok(talkVariants.B2.closingConversation.length >= 3);
});

test('B2 has topic-specific optional follow-ups and closing connected to selected questions', async () => {
  assert.ok(talkVariants.B2, 'B2 support belongs to an authored variant');
  const result = await build({ entryPoints: ['app/choose-conversation/b2-data.ts'], bundle: true, write: false, format: 'esm', platform: 'node' });
  const { b2TopicSupport, b2DiscourseMoves, b2ClosingQuestions } = await import('data:text/javascript;base64,' + Buffer.from(result.outputFiles[0].text).toString('base64'));
  assert.equal(b2TopicSupport.length, 15);
  assert.equal(new Set(b2TopicSupport.flatMap(topic => topic.followUps)).size, 30);
  assert.ok(b2DiscourseMoves.length >= 4);
  for (const topic of b2TopicSupport) assert.equal(topic.followUps.length, 2);
  const selected = [0, 3, 7].map(index => talkVariants.B2.activities[4].questions[index]);
  const closing = b2ClosingQuestions(selected).join(' ');
  for (const question of selected) assert.ok(closing.includes(question));
  assert.match(closing, /conecta|relaciona/i);
  assert.match(closing, /cambiar|revis/i);
});

test('B2 uses the shared keyed world and preserves historical route defaults and three-question gate', () => {
  const page = readFileSync('app/choose-conversation/page.tsx', 'utf8');
  assert.match(page, /levels=\{\["A1","A2","B1","B2"\]\}/);
  assert.match(page, /TalkExperience key=\{level\}/);
  assert.match(page, /defaultLevel=\{variant==="starter"\?"A1":variant==="basic"\?"A2":"B1"\}/);
  assert.match(page, /selected\.length!==3/);
  assert.match(page, /s\.length<3/);
  assert.match(page, /b2ClosingQuestions\(selected\.map/);
  assert.match(page, /b2TopicSupport/);
  assert.doesNotMatch(page, /"C1"|"C2"/);
});

test('B2 conversation board opens only with exactly three choices and refreshes its synthesis after reselection', async () => {
  const { createRequire } = await import('node:module');
  const { runInNewContext } = await import('node:vm');
  const require = createRequire(import.meta.url);
  const React = require('react');
  const source = readFileSync('app/choose-conversation/page.tsx', 'utf8');
  const result = await build({ stdin: { contents: source + '\nexport { TalkExperience };', resolveDir: process.cwd() + '/app/choose-conversation', loader: 'tsx' }, jsx: 'automatic', bundle: true, write: false, format: 'cjs', platform: 'node', external: ['react', 'next/*'], loader: { '.css': 'empty' } });
  const state = [];
  let slot = 0;
  const hooks = { ...React, useState: initial => {
    const index = slot++;
    if (!(index in state)) state[index] = initial;
    return [state[index], value => { state[index] = typeof value === 'function' ? value(state[index]) : value; }];
  } };
  const loadedModule = { exports: {} };
  runInNewContext(`(function(require,module,exports){${result.outputFiles[0].text}\n})`, { console, URL, URLSearchParams, process, window: { scrollTo() {} } })(name => name === 'react' ? hooks : require(name), loadedModule, loadedModule.exports);
  const find = (tree, predicate) => {
    if (!tree || typeof tree !== 'object') return [];
    if (Array.isArray(tree)) return tree.flatMap(child => find(child, predicate));
    return [...(predicate(tree) ? [tree] : []), ...find(tree.props?.children, predicate)];
  };
  const render = () => { slot = 0; return loadedModule.exports.TalkExperience({ variant: 'extended' }); };
  const byClass = (tree, value) => find(tree, node => node.props?.className === value)[0];
  const questionButtons = tree => find(byClass(tree, 'question-list'), node => node.type === 'button');
  const startButton = tree => find(tree, node => node.type === 'button' && node.props.children === 'A CONVERSAR →')[0];
  find(byClass(render(), 'topic-worlds'), node => node.type === 'button')[0].props.onClick();
  assert.equal(questionButtons(render()).length, 8);
  assert.equal(startButton(render()).props.disabled, true);
  for (const index of [0, 3, 7]) questionButtons(render())[index].props.onClick();
  assert.equal(startButton(render()).props.disabled, false);
  assert.equal(questionButtons(render())[2].props.disabled, true);
  questionButtons(render())[2].props.onClick();
  assert.deepEqual(Array.from(state[1]), [0, 3, 7], 'fourth selection is rejected');
  startButton(render()).props.onClick();
  const board = byClass(render(), 'ready-talk');
  assert.equal(find(board, node => node.type === 'article').length, 3);
  const closing = find(board, node => node.type?.name === 'B2ConversationClosing')[0];
  for (const index of [0, 3, 7]) assert.ok(closing.props.questions.join(' ').includes(talkVariants.B2.activities[0].questions[index]));
  questionButtons(render())[3].props.onClick();
  assert.equal(byClass(render(), 'ready-talk'), undefined, 'deselecting closes stale board and synthesis');
  assert.equal(startButton(render()).props.disabled, true);
  questionButtons(render())[2].props.onClick();
  startButton(render()).props.onClick();
  const updatedClosing = find(byClass(render(), 'ready-talk'), node => node.type?.name === 'B2ConversationClosing')[0];
  assert.ok(updatedClosing.props.questions.join(' ').includes(talkVariants.B2.activities[0].questions[2]));
  assert.ok(!updatedClosing.props.questions.join(' ').includes(talkVariants.B2.activities[0].questions[3]));
});
