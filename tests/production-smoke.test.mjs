import test from 'node:test';
import assert from 'node:assert/strict';
import { runSmoke } from '../scripts/production-smoke.mjs';

const resourcePages = {
  '/resources/spanish-conversation-activity-a0-c2-hospital-san-casi-vivo': '3D Spanish Conversation Activity A0–C2: Hospital San Casi Vivo',
  '/resources/spanish-conversation-activity-a2-la-feria-de-villaluz': '3D Spanish Conversation Activity A2: La feria de Villaluz',
};
const legacyResource = '/resources/spanish-grammar-lesson-a1-a2-ser-estar-y-hay-describir-personas-y-lugares';
function fixture(overrides = {}) {
  return async (url, options) => {
    const path = new URL(url).pathname;
    if (overrides[path]) return overrides[path]();
    if (path === '/cuenta') return new Response(null, { status: 307, headers: { location: '/ingresar?next=/cuenta' } });
    if (path === '/tablero-de-eso-si-hablo' || path === '/noche-abierta' || path === '/hospital-san-casi-vivo' || path === '/la-feria-de-villaluz') return new Response(null, { status: 302, headers: { location: '/acceso' } });
    if (path.startsWith('/audio/')) return new Response('Forbidden', { status: 403 });
    if (path === '/api/students') return Response.json({ error: 'unauthorized' }, { status: 401, headers: { 'cache-control': 'private, no-store' } });
    if (path === '/api/auth/verification-email') return Response.json({ code: 'INVALID_SESSION' }, { status: 401 });
    if (path === '/api/auth/session') return options.method === 'GET'
      ? Response.json({authenticated:false},{headers:{'cache-control':'private, no-store'}})
      : Response.json({ error: 'invalid session' }, { status: 401 });
    if (path === '/api/billing/founder-status') return Response.json({ mode: 'live', paddleCheckoutAvailable: true, trialCheckoutAvailable: true, priceUsd: 15.5, trialPriceUsd: 2 });
    if (path === '/api/billing/paddle/webhook') return new Response('invalid signature', { status: 401 });
    if (path.startsWith('/api/billing/')) {
      if (options.headers?.origin !== 'https://spanishcue.com') return Response.json({ error: 'origin' }, { status: 403 });
      return Response.json({ error: 'invalid' }, { status: 400 });
    }
    if (path === legacyResource) return new Response(null, { status: 308, headers: { location: '/resources/spanish-grammar-lesson-a1-ser-estar-y-hay-describir-personas-y-lugares' } });
    if (resourcePages[path]) return new Response(`<html><title>${resourcePages[path]} | SPANISHCUE</title><h2>Inside the 3D world</h2><script type="application/ld+json">{"@type":"BreadcrumbList"}</script></html>`);
    if (path.startsWith('/does-not-exist')) return new Response('404', { status: 404 });
    if (path === '/la-fabrica-de-los-nombres') return new Response('<html>La Fábrica de los Nombres</html>');
    if (path === '/para-profesores' || path === '/aprender-espanol') return new Response(`<html><link rel="canonical" href="https://spanishcue.com${path}"/><nav class="audience-switch"></nav></html>`);
    return new Response('<html>SPANISHCUE</html>');
  };
}
test('valid 307 and 302 protection plus bounded invalid-token checks pass', async () => {
  assert.ok((await runSmoke('https://spanishcue.com', fixture())).length >= 9);
});
test('a protected (403) script chunk on the Google landing fails smoke', async () => {
  const normal = fixture({ '/lp/google-teachers': () => new Response('<html>SPANISHCUE<script type="module" src="/assets/GoogleTeachersLanding-abc.js"></script></html>') });
  await assert.rejects(() => runSmoke('https://spanishcue.com', (url, options) =>
    new URL(url).pathname === '/assets/GoogleTeachersLanding-abc.js' ? new Response('Forbidden', { status: 403 }) : normal(url, options)), /GoogleTeachersLanding-abc\.js: expected 200, got 403/);
  assert.ok((await runSmoke('https://spanishcue.com', normal)).some(r => r.path === '/assets/GoogleTeachersLanding-abc.js'));
});
test('the three reviewed Noche level URLs fail smoke if any deployed route breaks', async () => {
  for (const level of ['A1', 'B2', 'C1']) {
    const normal = fixture();
    await assert.rejects(() => runSmoke('https://spanishcue.com', (url, options) => {
      const parsed = new URL(url);
      return parsed.pathname === '/noche-abierta' && parsed.searchParams.get('level') === level
        ? new Response('Worker error', { status: 500 }) : normal(url, options);
    }));
  }
});
test('anonymous session status cannot report authentication or be cached', async () => {
  for(const response of [
    ()=>Response.json({authenticated:true},{headers:{'cache-control':'private, no-store'}}),
    ()=>Response.json({authenticated:false},{headers:{'cache-control':'public, max-age=3600'}}),
  ]){
    const normal=fixture();
    await assert.rejects(()=>runSmoke('https://spanishcue.com', (url,options)=>
      new URL(url).pathname === '/api/auth/session' && options.method === 'GET'
        ? response() : normal(url,options)));
  }
});
test('soft 404, leaked account, foreign redirect and verification 500 each fail', async () => {
  for (const [path, response] of [
    ['/does-not-exist-automated-smoke', () => new Response('home')],
    ['/cuenta', () => new Response('private account')],
    ['/cuenta', () => new Response(null, { status: 302, headers: { location: 'https://evil.test/ingresar' } })],
    ['/api/auth/verification-email', () => new Response('Worker error', { status: 500 })],
  ]) await assert.rejects(() => runSmoke('https://spanishcue.com', fixture({ [path]: response })));
});
test('billing smoke fails when Live Paddle checkout or its webhook is not ready', async () => {
  for (const [path, response] of [
    ['/api/billing/founder-status', () => Response.json({ mode: 'sandbox', paddleCheckoutAvailable: true, trialCheckoutAvailable: true, priceUsd: 15.5, trialPriceUsd: 2 })],
    ['/api/billing/founder-status', () => Response.json({ mode: 'live', paddleCheckoutAvailable: true, trialCheckoutAvailable: false, priceUsd: 15.5, trialPriceUsd: 2 })],
    ['/api/billing/paddle/webhook', () => new Response('billing unavailable', { status: 503 })],
    ['/api/billing/conversion', () => Response.json({}, { status: 200 })],
    ['/demo/noche-abierta', () => new Response('Worker error', { status: 500 })],
  ]) await assert.rejects(() => runSmoke('https://spanishcue.com', fixture({ [path]: response })));
});
test('staging (Sandbox, no Paddle) passes the billing smoke without Live checks', async () => {
  const staging = 'https://spanishcue-staging.agnremote.workers.dev';
  const normal = fixture();
  const results = await runSmoke(staging, (url, options) => {
    const path = new URL(url).pathname;
    if (path === '/api/billing/founder-status') return Response.json({ mode: 'sandbox', paddleCheckoutAvailable: false, trialCheckoutAvailable: false, priceUsd: 15.5, trialPriceUsd: 2 });
    if (path === '/api/billing/paddle/webhook') return new Response('billing unavailable', { status: 503 });
    if (path.startsWith('/api/billing/') && options.headers?.origin === staging) return Response.json({ error: 'invalid' }, { status: 400 });
    return normal(url, options);
  });
  assert.ok(!results.some(r => r.path === '/api/billing/paddle/webhook'));
});

test('an audience landing without its own canonical fails smoke', async () => {
  const broken = fixture({ '/aprender-espanol': () => new Response('<html><link rel="canonical" href="https://spanishcue.com/"/><nav class="audience-switch"></nav></html>') });
  await assert.rejects(runSmoke('https://spanishcue.com', broken), /aprender-espanol must carry its own canonical/);
});

test('production may not have the audience landings yet, but staging must', async () => {
  const notYet = fixture({ '/para-profesores': () => new Response('404', { status: 404 }), '/aprender-espanol': () => new Response('404', { status: 404 }) });
  await runSmoke('https://spanishcue.com', notYet);
  await assert.rejects(runSmoke('https://spanishcue-staging.agnremote.workers.dev', notYet), /para-profesores: expected 200, got 404/);
  const broken = fixture({ '/para-profesores': () => new Response('error', { status: 500 }) });
  await assert.rejects(runSmoke('https://spanishcue.com', broken), /para-profesores: expected 200,404, got 500/);
});

test('released PRO 3D worlds stay private while their teacher pages stay public', async () => {
  const results = await runSmoke('https://spanishcue.com', fixture());
  for (const path of ['/la-feria-de-villaluz', '/audio/escucha-3d/feria-a2-baile.mp3', ...Object.keys(resourcePages)]) assert.ok(results.some(r => r.path === path), path);
  for (const [path, response, message] of [
    ['/la-feria-de-villaluz', () => new Response('<html>world</html>'), /la-feria-de-villaluz: expected/],
    ['/hospital-san-casi-vivo', () => new Response(null, { status: 302, headers: { location: '/ingresar' } }), /wrong protection target/],
    ['/audio/escucha-3d/feria-a2-baile.mp3', () => new Response('mp3'), /feria-a2-baile\.mp3: expected 403, got 200/],
    ['/resources/spanish-conversation-activity-a2-la-feria-de-villaluz', () => new Response('<html><title>Spanish Conversation Activity A2: La feria de Villaluz | SPANISHCUE</title><h2>Inside the 3D world</h2>"BreadcrumbList"</html>'), /must carry its 3D title/],
    ['/resources/spanish-conversation-activity-a0-c2-hospital-san-casi-vivo', () => new Response('404', { status: 404 }), /expected 200, got 404/],
  ]) await assert.rejects(runSmoke('https://spanishcue.com', fixture({ [path]: response })), message, path);
});

test('a retired /resources slug must 308 to the current lesson page (404 tolerated on production until released)', async () => {
  assert.ok((await runSmoke('https://spanishcue.com', fixture())).some(r => r.path === legacyResource && r.status === 308));
  const notYet = fixture({ [legacyResource]: () => new Response('404', { status: 404 }) });
  await runSmoke('https://spanishcue.com', notYet);
  await assert.rejects(runSmoke('https://spanishcue-staging.agnremote.workers.dev', notYet), /ser-estar-y-hay-describir-personas-y-lugares: expected 308, got 404/);
  const wrong = fixture({ [legacyResource]: () => new Response(null, { status: 308, headers: { location: '/resources' } }) });
  await assert.rejects(runSmoke('https://spanishcue.com', wrong), /wrong redirect target/);
});
test('a dropped GET is retried once, and a network failure names the request it hit', async () => {
  const timeout = () => { throw new DOMException('The operation was aborted due to timeout', 'TimeoutError'); };
  const normal = fixture();
  let calls = 0;
  const blip = (url, options) => new URL(url).pathname === '/ingresar' && ++calls === 1 ? timeout() : normal(url, options);
  assert.ok((await runSmoke('https://spanishcue.com', blip)).some(r => r.path === '/ingresar'));
  assert.equal(calls, 2);
  await assert.rejects(runSmoke('https://spanishcue.com', (url, options) => new URL(url).pathname === '/ingresar' ? timeout() : normal(url, options)),
    /GET \/ingresar: TimeoutError: The operation was aborted due to timeout/);
  let posts = 0;
  await assert.rejects(runSmoke('https://spanishcue.com', (url, options) => options.method === 'POST' && new URL(url).pathname === '/api/auth/verification-email' ? (posts++, timeout()) : normal(url, options)),
    /POST \/api\/auth\/verification-email: TimeoutError/);
  assert.equal(posts, 1, 'a write is never retried');
});
