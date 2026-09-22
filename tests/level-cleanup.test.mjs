import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { readFile, readdir } from 'node:fs/promises';
import { dirname, extname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import test from 'node:test';

import { availableLevels, groupLessonsByLevel } from '../app/library-filters.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const publicLevels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
const movedLessonIds = [16, 19, 24, 26, 27, 38, 201];
const lessons = JSON.parse(execFileSync(process.execPath, [
  '--import', 'tsx', '--input-type=module', '--eval',
  "import { lessons } from './app/lesson-catalog.ts'; console.log(JSON.stringify(lessons));",
], { cwd: root, encoding: 'utf8' }));

test('all former A0 lessons are A1 without A0 metadata', () => {
  assert.equal(lessons.length, 108);
  for (const id of movedLessonIds) {
    const lesson = lessons.find((candidate) => candidate.id === id);
    assert.ok(lesson, `missing lesson ${id}`);
    assert.equal(lesson.level, 'A1', `lesson ${id} must be A1`);
    assert.ok(!lesson.levels?.includes('A0'), `lesson ${id} still includes A0`);
    assert.doesNotMatch(lesson.displayLevel ?? '', /\bA0\b/);
  }
  for (const lesson of lessons) {
    assert.ok(publicLevels.includes(lesson.level), `lesson ${lesson.id} has level ${lesson.level}`);
    assert.ok(!lesson.levels?.includes('A0'), `lesson ${lesson.id} still includes A0`);
  }
});

test('public level navigation and shelves begin at A1', () => {
  assert.deepEqual(availableLevels(lessons), publicLevels);
  assert.deepEqual(groupLessonsByLevel(lessons).map(({ level }) => level), publicLevels);
});

test('A1 has the merged total and pedagogical route order', () => {
  const a1Lessons = lessons.filter((lesson) => lesson.level === 'A1' || lesson.levels?.includes('A1'));
  assert.equal(a1Lessons.length, 30);
  const idsFor = (category) => lessons.filter((lesson) => lesson.category === category)
    .sort((a, b) => a.routeSequence - b.routeSequence).map((lesson) => lesson.id);
  assert.deepEqual(idsFor('Conversación').slice(0, 4), [27, 24, 26, 19]);
  assert.deepEqual(idsFor('Fonética'), [201, 202, 38]);
  assert.deepEqual(idsFor('Vocabulario'), [16, 204, 108]);
  for (const category of ['Gramática', 'Conversación', 'Escucha', 'Fonética', 'Vocabulario']) {
    const route = lessons.filter((lesson) => lesson.category === category)
      .sort((a, b) => a.routeSequence - b.routeSequence).map((lesson) => lesson.routeSequence);
    assert.deepEqual(route, Array.from({ length: route.length }, (_, index) => index + 1), `${category} route has gaps`);
  }
});

test('public application surfaces contain no A0 label or styling hook', async () => {
  const entries = await readdir(join(root, 'app'), { recursive: true, withFileTypes: true });
  const files = entries.filter((entry) => entry.isFile() && ['.ts', '.tsx', '.mjs', '.css'].includes(extname(entry.name)))
    .map((entry) => join(entry.parentPath, entry.name));
  for (const file of files) {
    const source = await readFile(file, 'utf8');
    assert.doesNotMatch(source, /\bA0\b/, `${file} exposes A0`);
    assert.doesNotMatch(source, /(?:a0-entry|level-a0|accent-a0)/, `${file} retains A0 styling`);
  }
});
