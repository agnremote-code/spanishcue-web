import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { readFile, readdir } from 'node:fs/promises';
import { dirname, extname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import test from 'node:test';

import { availableLevels, groupLessonsByLevel } from '../app/library-filters.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const publicLevels = ['A0', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
// Indonesia (24) left this list in 2026-10-21: its 3D world has a genuinely authored A0.
const movedLessonIds = [16, 19, 26, 27, 38, 201];
const lessons = JSON.parse(execFileSync(process.execPath, [
  '--import', 'tsx', '--input-type=module', '--eval',
  "import { lessons } from './app/lesson-catalog.ts'; console.log(JSON.stringify(lessons));",
], { cwd: root, encoding: 'utf8' }));

test('all former A0 lessons are A1 without A0 metadata', () => {
  assert.equal(lessons.length, 317);
  for (const id of movedLessonIds) {
    const lesson = lessons.find((candidate) => candidate.id === id);
    assert.ok(lesson, `missing lesson ${id}`);
    assert.equal(lesson.level, 'A1', `lesson ${id} must be A1`);
    assert.ok(!lesson.levels?.includes('A0'), `lesson ${id} still includes A0`);
    assert.doesNotMatch(lesson.displayLevel ?? '', /\bA0\b/);
  }
  for (const lesson of lessons) {
    assert.ok(publicLevels.includes(lesson.level), `lesson ${lesson.id} has level ${lesson.level}`);
    assert.equal(Boolean(lesson.levels?.includes('A0')), [24,25,29,30,32,33,36,210,223,226,227,228,229,236,237,238,240,242].includes(lesson.id), `lesson ${lesson.id}: A0 only when authored`);
  }
});

test('A0 appears in filters only for the explicitly authored lessons', () => {
  assert.deepEqual(availableLevels(lessons), publicLevels);
  assert.deepEqual(groupLessonsByLevel(lessons).map(({ level }) => level), publicLevels);
  assert.equal(lessons.filter(l=>l.levels?.includes('A0')).length,18);
});

test('A1 has the merged total and pedagogical route order', () => {
  const a1Lessons = lessons.filter((lesson) => lesson.level === 'A1' || lesson.levels?.includes('A1'));
  assert.equal(a1Lessons.length, 76);
  assert.ok(a1Lessons.some(lesson => lesson.id === 32), 'Reino Unido offers an A1 route');
  const idsFor = (category) => lessons.filter((lesson) => lesson.category === category)
    .sort((a, b) => a.routeSequence - b.routeSequence).map((lesson) => lesson.id);
  assert.deepEqual(idsFor('Conversación').slice(0, 4), [27, 24, 26, 19]);
  assert.deepEqual(idsFor('Fonética'), [201, 202, 38, 224, 225]);
  assert.deepEqual(idsFor('Vocabulario'), [16, 204, 108]);
  for (const category of ['Gramática', 'Conversación', 'Escucha', 'Fonética', 'Vocabulario']) {
    const route = lessons.filter((lesson) => lesson.category === category)
      .sort((a, b) => a.routeSequence - b.routeSequence).map((lesson) => lesson.routeSequence);
    assert.deepEqual(route, Array.from({ length: route.length }, (_, index) => index + 1), `${category} route has gaps`);
  }
});

test('legacy surfaces keep A0 absent outside the shared selector and explicitly authored lessons', async () => {
  const entries = await readdir(join(root, 'app'), { recursive: true, withFileTypes: true });
  const files = entries.filter((entry) => entry.isFile() && ['.ts', '.tsx', '.mjs', '.css'].includes(extname(entry.name)))
    .map((entry) => join(entry.parentPath, entry.name));
  for (const file of files) {
    const source = await readFile(file, 'utf8');
    const relative=file.slice(root.length+1);
    const authored=relative.includes('/mundo/')||relative.startsWith('app/estados-unidos-a2-b1/')||relative.startsWith('app/mundo-3d/')||relative.startsWith('app/the-sound-map/')||relative.startsWith('app/escucha-3d/')||relative.startsWith('app/el-reino-de-la-rosa-dormida/')||relative.startsWith('app/hospital-san-casi-vivo/')||relative.startsWith('app/madrid-infectada/')||relative.startsWith('app/marketing-de-casinos/')||relative.startsWith('app/bosque-de-los-hongos-gigantes/')||relative.startsWith('app/noche-abierta/')||relative.startsWith('app/conversacion-general/')||relative.startsWith('app/country-atlas/')||['app/grammar-classroom/catalog.ts','app/grammar-classroom/live/LiveClassroom.tsx','app/grammar-classroom/live/lessons/g239.ts','app/argentina/layout.tsx','app/suecia/layout.tsx','app/espana/layout.tsx','app/Library.tsx','app/library-filters.mjs','app/conversation-families/types.ts','app/lesson-catalog.ts','app/grammar-classroom/curriculum.ts'].includes(relative);
    if(!authored) assert.doesNotMatch(source, /\bA0\b/, `${file} exposes unauthored A0`);
    assert.doesNotMatch(source, /(?:a0-entry|level-a0|accent-a0)/, `${file} retains A0 styling`);
  }
});
