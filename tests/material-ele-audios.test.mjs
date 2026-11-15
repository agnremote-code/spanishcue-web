import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import test from 'node:test';
import { buildFreeAudios } from '../scripts/build-ele-free-audios.mjs';

const clips = JSON.parse(readFileSync(new URL('../app/material-ele/audios-gratis.json', import.meta.url), 'utf8'));
const policy = readFileSync(new URL('../app/access-policy.ts', import.meta.url), 'utf8');

test('free listening clips of Material ELE match their source and stay public', () => {
  assert.deepEqual(clips, buildFreeAudios(), 'run node scripts/build-ele-free-audios.mjs');
  assert.match(policy, /freeAudioPrefixes = new Set\(\[[^\]]*'escucha-3d-libre'/);
  const free = policy.match(/'Conversación':\[([\d,]+)\]/)[1].split(',').map(Number);
  for (const clip of clips) {
    assert.ok(clip.src.startsWith('/audio/escucha-3d-libre/'), clip.src);
    assert.ok(existsSync(new URL(`../public${clip.src}`, import.meta.url)), clip.src);
    assert.ok(free.includes(clip.lessonId), `lesson ${clip.lessonId} is no longer free`);
    assert.ok(clip.questions.length >= 3 && clip.lines.length >= 3 && clip.talk.length >= 1, clip.id);
    for (const question of clip.questions) assert.ok(question.options[question.answer], question.q);
    for (const line of clip.lines) assert.ok(clip.speakers[line.s], clip.id);
  }
  for (const level of ['A1', 'A2', 'B1']) assert.ok(clips.filter((clip) => clip.level === level).length >= 2, level);
});
