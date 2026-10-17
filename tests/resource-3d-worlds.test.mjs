import assert from 'node:assert/strict';
import test from 'node:test';
import {readFile} from 'node:fs/promises';
import {build} from 'esbuild';
import {GAMES} from '../app/escucha-3d/games.mjs';

const r = await build({stdin: {contents: 'export * from "./app/resource-seo"; export * from "./app/conversation-families/catalog"; export * from "./app/access-policy";', resolveDir: process.cwd()}, bundle: true, write: false, format: 'esm', platform: 'node'});
const p = await import('data:text/javascript;base64,' + Buffer.from(r.outputFiles[0].text).toString('base64'));
const page = await readFile('app/resources/[slug]/page.tsx', 'utf8');

const worlds = [...p.immersiveWorldGameByLessonId].map(([id, game]) => ({lesson: p.resourceLessons.find(l => l.id === id), game}));

test('every 3D world in the listening registry has exactly one public resource page', () => {
  assert.deepEqual(new Set(worlds.map(w => w.game)), new Set(Object.keys(GAMES)), 'map lessons to every game in app/escucha-3d/games.mjs');
  for (const {lesson, game} of worlds) {
    assert.ok(lesson, `catalog lesson for ${game}`);
    assert.ok(p.resourcePathForLesson(lesson).startsWith('/resources/'), game);
    assert.ok(!p.resourcePathForLesson(lesson).includes('?'), game);
  }
});

test('3D world lessons stay PRO (the public page is a poster, not a free lesson)', () => {
  for (const {lesson} of worlds) assert.equal(p.isFreeLesson(lesson.id), false, lesson.title);
});

test('3D world titles and descriptions say 3D; other resources are unchanged', () => {
  for (const {lesson} of worlds) {
    const range = p.resourceLevelLabel(lesson);
    assert.ok(p.resourceTitle(lesson).startsWith(`3D ${p.resourceTypeLabel(lesson)} ${range}: ${lesson.title}`), lesson.title);
    assert.ok(p.resourceDescription(lesson).startsWith(`Browser-based 3D Spanish conversation and listening world for teachers, ${range}: `), lesson.title);
    assert.ok(p.resourceDescription(lesson).length <= 158);
  }
  const plain = p.resourceLessons.find(l => !p.isImmersiveWorld(l));
  assert.ok(!p.resourceTitle(plain).startsWith('3D '));
  assert.match(p.resourceDescription(plain), /^Ready-to-teach /);
});

test('other 3D worlds are cross-linked and never include the page itself', () => {
  for (const {lesson} of worlds) {
    const others = p.otherImmersiveWorldLessons(lesson);
    assert.equal(others.length, worlds.length - 1);
    assert.ok(!others.some(o => o.id === lesson.id));
  }
});

test("multi-level pages: title, eyebrow and schema use the full level range on the canonical URL", () => {
  const hospital = worlds.find(w => w.game === 'hospital').lesson;
  assert.deepEqual(p.resourceLevels(hospital), ['A0', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2']);
  assert.match(page, /educationalLevel: multiLevel \? levels : level/);
  assert.match(page, /styles\.eyebrow\}>\{world3d \? "3D " : ""\}\{typeLabel\} · \{multiLevel \? pageLevel : level\}/);
  assert.match(page, /This preview shows the \$\{level\} version\./);
  assert.match(page, /levels\.length > 1 && !\(family && requestedLevel === selectedLevel\)/, 'an explicit ?level= preview keeps its own level');
});

test('3D section exposes no paid content and keeps the gated lesson link', () => {
  const section = page.slice(page.indexOf('Inside the 3D world'), page.indexOf('How to use it'));
  assert.match(section, /scenes, dialogues and listenings stay inside the lesson/);
  assert.doesNotMatch(section, /\.(json|mp3)|escucha-3d|transcript/i);
  assert.match(page, /href=\{lessonPath\}>Open lesson/);
  assert.match(page, /breadcrumbSchema\(/);
});
