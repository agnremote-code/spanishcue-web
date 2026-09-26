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
