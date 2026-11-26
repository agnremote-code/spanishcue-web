// PRO 3D games load only in the browser (app/*/ClientOnlyGame.tsx) so their code
// and level data stay out of the Worker bundle (scripts/check-worker-bundle.mjs).
// The server renders a loading card instead of the game, which is only safe
// because anonymous visitors and crawlers never get these pages: the Worker
// sends them to /acceso. A FREE class must never be wrapped like this.
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { build } from 'esbuild';

const wrapped = readdirSync('app', { withFileTypes: true })
  .filter((entry) => entry.isDirectory() && existsSync(`app/${entry.name}/ClientOnlyGame.tsx`))
  .map((entry) => entry.name);

async function policy() {
  const out = await build({ stdin: { contents: 'export {lessons} from "./app/lesson-catalog"; export {isFreeLesson} from "./app/access-policy";', resolveDir: process.cwd(), loader: 'ts' }, bundle: true, write: false, format: 'esm', platform: 'node', logLevel: 'silent' });
  return import('data:text/javascript;base64,' + Buffer.from(out.outputFiles[0].text).toString('base64'));
}

test('client-only games are PRO classes, loaded with dynamic(..., { ssr: false })', async () => {
  assert.ok(wrapped.length >= 16, `expected the PRO 3D games, found ${wrapped.length}`);
  const { lessons, isFreeLesson } = await policy();
  for (const folder of wrapped) {
    const lesson = lessons.find((item) => item.path === `/${folder}`);
    assert.ok(lesson, `${folder}: no catalog lesson`);
    assert.equal(isFreeLesson(lesson.id), false, `${folder} (ID ${lesson.id}) is FREE: crawlers would see only the loading card`);
    const loader = readFileSync(`app/${folder}/ClientOnlyGame.tsx`, 'utf8');
    assert.match(loader, /^'use client';/);
    assert.match(loader, /dynamic\(\(\) => import\('\.\/\w+'\), \{ ssr: false, loading: \(\) => <GameLoading title="[^"]+" \/> \}\)/);
    assert.match(readFileSync(`app/${folder}/page.tsx`, 'utf8'), /from '\.\/ClientOnlyGame';/);
  }
});

test('the free demos keep their server-rendered game', () => {
  assert.equal(existsSync('app/noche-abierta/ClientOnlyGame.tsx'), false);
  assert.match(readFileSync('app/demo/noche-abierta/page.tsx', 'utf8'), /<NocheDemo /);
  assert.match(readFileSync('app/demo/hospital-san-casi-vivo/page.tsx', 'utf8'), /<HospitalFree /);
});

test('three.js is an inert stand-in in the SSR build only', () => {
  const plugin = readFileSync('build/ssr-client-only-plugin.ts', 'utf8');
  assert.match(plugin, /this\.environment\?\.name !== "ssr" \|\| !isThree\(source\)/);
  assert.match(plugin, /if \(key === "then"\) return undefined;/);
});
