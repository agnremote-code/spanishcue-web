// The transport guard preloaded into Worker tests (scripts/worker-test-fetch.mjs):
// a GET that gets no response headers is retried on a fresh connection; HTTP
// responses, writes and other origins are never retried.
import test from 'node:test';
import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { execFile } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';

const guard = pathToFileURL(resolve('scripts/worker-test-fetch.mjs')).href;

async function withServer(handler, script, env = {}) {
  const hits = [];
  const server = createServer((req, res) => { hits.push(`${req.method} ${req.url}`); handler(req, res, hits.length); });
  await new Promise((done) => server.listen(0, '127.0.0.1', done));
  const origin = `http://127.0.0.1:${server.address().port}`;
  try {
    const result = await new Promise((done) => execFile(process.execPath, ['--import', guard, '--input-type=module', '-e', script], { env: { ...process.env, NODE_OPTIONS: '', CHESPANISH_TEST_ORIGIN: origin, SPANISHCUE_TEST_FETCH_TIMEOUT_MS: '300', ...env }, timeout: 20000 }, (error, stdout, stderr) => done({ code: error?.code ?? 0, stdout, stderr })));
    return { ...result, hits };
  } finally {
    server.closeAllConnections();
    await new Promise((done) => server.close(done));
  }
}
const o = 'process.env.CHESPANISH_TEST_ORIGIN';

test('a GET that never gets headers is retried on a fresh connection and then served', async () => {
  const run = await withServer((req, res, n) => { if (n > 1) res.end('served'); }, `const r=await fetch(${o}+'/clase');console.log(r.status,await r.text())`);
  assert.equal(run.stdout.trim(), '200 served');
  assert.deepEqual(run.hits, ['GET /clase', 'GET /clase']);
  assert.match(run.stderr, /Retrying local Worker transport: GET .*\/clase \(no headers in 300 ms\), attempt 2\/3/);
});
test('a route that really hangs still fails, after three attempts', async () => {
  const run = await withServer(() => {}, `try{await fetch(${o}+'/hang');console.log('served')}catch(e){console.log(e.message)}`);
  assert.match(run.stdout, /Local Worker sent no response headers within 300 ms: GET .*\/hang \(attempt 3\)/);
  assert.equal(run.hits.length, 3);
});
test('HTTP responses of any status are returned as they are, never retried', async () => {
  const run = await withServer((req, res) => { res.statusCode = 503; res.end('busy'); }, `const r=await fetch(${o}+'/x',{redirect:'manual',headers:{rsc:'1'}});console.log(r.status,await r.text())`);
  assert.equal(run.stdout.trim(), '503 busy');
  assert.equal(run.hits.length, 1);
});
test('writes are bounded but never sent twice', async () => {
  const run = await withServer(() => {}, `try{await fetch(${o}+'/api/x',{method:'POST',body:'{}'});console.log('served')}catch(e){console.log(e.message)}`);
  assert.match(run.stdout, /no response headers within 300 ms: POST .*\/api\/x \(attempt 1\)/);
  assert.deepEqual(run.hits, ['POST /api/x']);
});
test('a slow body is not cut once the headers have arrived', async () => {
  const run = await withServer((req, res) => { res.write('a'); setTimeout(() => res.end('b'), 700); }, `const r=await fetch(${o}+'/slow');console.log(await r.text())`);
  assert.equal(run.stdout.trim(), 'ab');
  assert.equal(run.hits.length, 1);
});
test('other origins and requests with their own signal are left alone', async () => {
  const run = await withServer(() => {}, `try{await fetch(${o}+'/own',{signal:AbortSignal.timeout(100)})}catch(e){console.log(e.name)}`);
  assert.equal(run.stdout.trim(), 'TimeoutError');
  assert.equal(run.hits.length, 1);
  const elsewhere = await withServer((req, res) => res.end('ok'), `console.log(globalThis.fetch.name)`, { CHESPANISH_TEST_ORIGIN: '' });
  assert.equal(elsewhere.stdout.trim(), 'fetch', 'without a test origin the native fetch stays in place');
});
test('the Worker harness preloads the guard into every test that calls the local Worker', () => {
  const harness = readFileSync('scripts/test-worker.mjs', 'utf8');
  assert.match(harness, /--import \$\{pathToFileURL\(resolvePath\('scripts\/worker-test-fetch\.mjs'\)\)\.href\}/);
  assert.ok(!harness.includes('{...process.env,CHESPANISH_TEST_ORIGIN:origin'), 'every origin-bound run must use testEnv');
  assert.ok(harness.split('{...testEnv,CHESPANISH_TEST_ORIGIN:origin').length - 1 >= 5);
});
