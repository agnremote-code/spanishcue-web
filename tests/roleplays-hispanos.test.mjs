// Roleplays del mundo hispano (2026-11-24): twenty country classes (ids 265–284)
// on the shared engine app/roleplays-hispanos, graded A1–A2.
import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { checkRoleplays } from '../scripts/check-roleplays-hispanos.mjs';

const paises = readFileSync('app/roleplays-hispanos/paises.ts', 'utf8');
const rows = [...paises.matchAll(/m\('([a-z-]+)', (\d+), '([^']+)', '([a-z]+)'/g)].map(([, slug, id, name, iso]) => ({ slug, id: Number(id), name, iso }));
const catalog = readFileSync('app/lesson-catalog.ts', 'utf8');

test('twenty Spanish-speaking countries, one class each, ids 265–284', () => {
  assert.equal(rows.length, 20);
  assert.deepEqual(rows.map(r => r.id), Array.from({ length: 20 }, (_, i) => 265 + i));
  assert.equal(new Set(rows.map(r => r.iso)).size, 20, 'one flag per country');
  assert.ok(!rows.some(r => r.slug === 'argentina'), 'Argentina keeps its own class (Argento Roleplays)');
});

test('every country has complete, well-shaped content', async () => {
  const { problems, scenes } = await checkRoleplays();
  assert.deepEqual(problems, []);
  assert.equal(scenes, 200);
});

test('routes, catalog entries, flags and covers exist for every country', () => {
  const loaders = readFileSync('app/roleplays-hispanos/loaders.ts', 'utf8');
  assert.match(loaders, /SSR \? \{\}/, 'content stays out of the worker bundle');
  for (const { slug, id, iso } of rows) {
    const page = readFileSync(`app/roleplays-${slug}/page.tsx`, 'utf8');
    assert.match(page, new RegExp(`<Roleplays slug="${slug}" />`));
    assert.ok(loaders.includes(`import('./contenido/${slug}')`), `${slug} loader`);
    assert.ok(existsSync(`public/roleplays-hispanos/banderas/${iso}.svg`), `${slug} flag`);
    assert.ok(existsSync(`public/roleplays-hispanos/portadas/${slug}.webp`), `${slug} cover`);
    const line = catalog.split('\n').find(l => l.startsWith(`  {id:${id},`));
    assert.ok(line, `catalog entry ${id}`);
    assert.ok(line.includes(`path:"/roleplays-${slug}"`) && line.includes(`image:"/roleplays-hispanos/portadas/${slug}.webp"`));
    assert.ok(line.includes('levels:["A1", "A2"],displayLevel:"A1–A2"'), `${slug} is graded A1–A2, never A0–C2`);
    assert.ok(!line.includes('"A0"'), `${slug} has no A0 level`);
  }
});

test('the classes are PRO: none is a free sample', () => {
  const policy = readFileSync('app/access-policy.ts', 'utf8');
  const samples = policy.split('\n').find(l => l.startsWith('export const samplesByCategory'));
  const free = [...samples.matchAll(/\d+/g)].map(Number);
  for (const { slug, id } of rows) {
    assert.ok(!free.includes(id), `${slug} (${id}) is not a free sample`);
    assert.ok(!policy.includes(`/roleplays-${slug}`), `${slug} has no free route`);
  }
});
