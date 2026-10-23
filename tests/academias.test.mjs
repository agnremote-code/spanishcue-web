import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, access, mkdir, mkdtemp, rm } from 'node:fs/promises';
import { DatabaseSync } from 'node:sqlite';
import { build } from 'esbuild';

test('academy demo acquisition persists real requests, rejects abuse and protects owner review', async () => {
  // A missing persistence route or an unauthorized read must fail this boundary test.
  await access('app/api/academy-demo/route.ts');
  const sqlite = new DatabaseSync(':memory:');
  const sql = await readFile('drizzle/0016_academy_demo_requests.sql', 'utf8');
  sqlite.exec('CREATE TABLE existing_data (value TEXT); INSERT INTO existing_data VALUES (\'keep\')');
  sqlite.exec(sql); sqlite.exec(sql);
  assert.equal(sqlite.prepare('SELECT value FROM existing_data').get().value, 'keep');
  const db = { prepare(query) { return { bind(...values) { const statement = sqlite.prepare(query); return {
    async first() { return statement.get(...values) ?? null; },
    async all() { return { results: statement.all(...values) }; },
    async run() { return { meta: { changes: Number(statement.run(...values).changes) } }; },
  }; } }; } };
  globalThis.__ACADEMY_TEST_ENV = { DB: db };
  const bundle = await build({ stdin: { contents: `export { POST } from './app/api/academy-demo/route'; export { GET } from './app/api/admin/academy-demo/route';`, resolveDir: process.cwd() }, bundle: true, write: false, format: 'esm', platform: 'node', plugins: [{ name: 'env', setup(b) {
    b.onResolve({ filter: /^cloudflare:workers$/ }, () => ({ path: 'env', namespace: 'test-env' }));
    b.onLoad({ filter: /.*/, namespace: 'test-env' }, () => ({ contents: 'export const env = globalThis.__ACADEMY_TEST_ENV;' }));
  } }] });
  const routes = await import('data:text/javascript;base64,' + Buffer.from(bundle.outputFiles[0].text).toString('base64'));
  const valid = { name: 'Ana López', institution: 'Instituto Ejemplo', email: 'ANA@example.test', teachers: '6-15', message: 'Queremos conocer los mundos 3D.', consent: true, requestKey: 'demo-request-key-0001' };
  const request = (body, origin = 'https://spanishcue.test') => new Request('https://spanishcue.test/api/academy-demo', { method: 'POST', headers: { origin, 'content-type': 'application/json' }, body: JSON.stringify(body) });
  assert.equal((await routes.POST(request(valid, 'https://evil.test'))).status, 403);
  for (const body of [null, [], {}, { ...valid, consent: false }, { ...valid, email: 'bad' }, { ...valid, email: 'person@example.com?bcc=attacker%40example.net&subject=hello' }, { ...valid, teachers: 'unlimited' }, { ...valid, message: 'x'.repeat(2001) }]) {
    assert.equal((await routes.POST(request(body))).status, 400);
  }
  assert.equal((await routes.POST(request({ ...valid, message: 'x'.repeat(9000) }))).status, 413);
  let chunksRead = 0;
  let cancelled = false;
  const stream = new ReadableStream({ pull(controller) { chunksRead++; if (chunksRead <= 100) controller.enqueue(new Uint8Array(8192)); else controller.close(); }, cancel() { cancelled = true; } });
  const oversized = new Request('https://spanishcue.test/api/academy-demo', { method: 'POST', headers: { origin: 'https://spanishcue.test', 'content-type': 'application/json' }, body: stream, duplex: 'half' });
  assert.equal((await routes.POST(oversized)).status, 413);
  assert.equal(cancelled, true, 'reject and cancel before buffering the whole upload');
  assert.ok(chunksRead <= 3, 'at most two chunks and one prefetched chunk');
  const first = await routes.POST(request(valid));
  assert.equal(first.status, 201);
  assert.equal((await routes.POST(request(valid))).status, 201);
  const row = sqlite.prepare('SELECT * FROM academy_demo_requests').get();
  assert.equal(row.email, 'ana@example.test');
  assert.equal(row.institution, 'Instituto Ejemplo');
  assert.equal(sqlite.prepare('SELECT count(*) AS n FROM academy_demo_requests').get().n, 1);
  assert.equal(first.headers.get('cache-control'), 'private, no-store');
  for (let i = 2; i <= 3; i++) assert.equal((await routes.POST(request({ ...valid, requestKey: `demo-request-key-000${i}` }))).status, 201);
  assert.equal((await routes.POST(request({ ...valid, requestKey: 'demo-request-key-0004' }))).status, 429);
  const admin = owner => new Request('https://spanishcue.test/api/admin/academy-demo', { headers: owner ? { 'x-chespanish-owner': '1' } : {} });
  assert.equal((await routes.GET(admin(false))).status, 403);
  const listed = await routes.GET(admin(true));
  assert.equal(listed.status, 200);
  assert.equal((await listed.json()).items.length, 3);
  assert.equal(listed.headers.get('cache-control'), 'private, no-store');
  globalThis.__ACADEMY_TEST_ENV.DB = { prepare() { throw new Error('PRIVATE_DATABASE_ERROR'); } };
  const failed = await routes.POST(request({ ...valid, email: 'other@example.test' }));
  assert.equal(failed.status, 503);
  assert.doesNotMatch(await failed.text(), /PRIVATE_DATABASE_ERROR/);
  sqlite.close();
});

test('academy landing offers a real contact route until storage is ready, then exposes the form', async () => {
  await mkdir('.sites-runtime', { recursive: true });
  const temporary = await mkdtemp(process.cwd() + '/.sites-runtime/academy-render-');
  try {
    await build({ stdin: { contents: `import React from 'react'; import {renderToStaticMarkup} from 'react-dom/server'; import Page,{generateMetadata} from './app/academias/page'; import {LocaleProvider} from './app/i18n/LocaleProvider'; export {generateMetadata}; export async function render(){return renderToStaticMarkup(React.createElement(LocaleProvider,{initialLocale:'es'},await Page()));}`, resolveDir: process.cwd() }, bundle: true, outfile: temporary + '/render.mjs', format: 'esm', platform: 'node', external: ['react', 'react-dom/server', 'react/jsx-runtime'], banner: { js: "import {createRequire} from 'node:module';const require=createRequire(import.meta.url);" }, plugins: [{ name: 'framework-boundaries', setup(b) {
      b.onResolve({ filter: /\.css$/ }, () => ({ path: 'styles', namespace: 'test-css' }));
      b.onLoad({ filter: /.*/, namespace: 'test-css' }, () => ({ contents: '' }));
      b.onResolve({ filter: /^next\/headers$/ }, () => ({ path: 'headers', namespace: 'test-headers' }));
      b.onLoad({ filter: /.*/, namespace: 'test-headers' }, () => ({ contents: "export async function headers(){return new Headers({'x-spanishcue-locale':'es'});}" }));
      b.onResolve({ filter: /^cloudflare:workers$/ }, () => ({ path: 'env', namespace: 'render-env' }));
      b.onLoad({ filter: /.*/, namespace: 'render-env' }, () => ({ contents: 'export const env=globalThis.__ACADEMY_RENDER_ENV;' }));
    } }] });
    globalThis.__ACADEMY_RENDER_ENV = { LEGAL_SUPPORT_EMAIL: 'schools@example.test', DB: { prepare() { return { bind() { return { async first() { return null; } }; } }; } } };
    const { render, generateMetadata } = await import(temporary + '/render.mjs');
    const fallback = await render();
    assert.doesNotMatch(fallback, /<form\b/, 'no nonfunctional form before the additive migration');
    assert.match(fallback, /mailto:schools%40example\.test\?subject=/);
    assert.match(fallback, /Soy academia/);
    assert.match(fallback, /Soy profesor/);
    assert.match(fallback, /aria-current="true"/);
    assert.equal((await generateMetadata()).alternates.canonical, 'https://spanishcue.com/academias');
    globalThis.__ACADEMY_RENDER_ENV.DB.prepare = () => ({ bind() { return { async first() { return { name: 'academy_demo_requests' }; } }; } });
    const ready = await render();
    assert.match(ready, /<form\b/);
    for (const name of ['name', 'institution', 'email', 'teachers', 'message', 'consent']) assert.match(ready, new RegExp(`name="${name}"`));
  } finally { await rm(temporary, { recursive: true, force: true }); }
});
