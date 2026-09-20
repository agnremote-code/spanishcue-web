import test from 'node:test';
import assert from 'node:assert/strict';
import { runSmoke } from '../scripts/production-smoke.mjs';

function fixture(overrides = {}) {
  return async (url) => {
    const path = new URL(url).pathname;
    if (overrides[path]) return overrides[path]();
    if (path === '/cuenta') return new Response(null, { status: 307, headers: { location: '/ingresar?next=/cuenta' } });
    if (path === '/tablero-de-eso-si-hablo') return new Response(null, { status: 302, headers: { location: '/acceso' } });
    if (path.startsWith('/audio/')) return new Response('Forbidden', { status: 403 });
    if (path === '/api/students') return Response.json({ error: 'unauthorized' }, { status: 401, headers: { 'cache-control': 'private, no-store' } });
    if (path === '/api/auth/verification-email') return Response.json({ code: 'INVALID_SESSION' }, { status: 401 });
    if (path === '/api/auth/session') return Response.json({ error: 'invalid session' }, { status: 401 });
    if (path.startsWith('/does-not-exist')) return new Response('404', { status: 404 });
    if (path === '/la-fabrica-de-los-nombres') return new Response('<html>La Fábrica de los Nombres</html>');
    return new Response('<html>SPANISHCUE</html>');
  };
}
test('valid 307 and 302 protection plus bounded invalid-token checks pass', async () => {
  assert.ok((await runSmoke('https://spanishcue.com', fixture())).length >= 9);
});
test('soft 404, leaked account, foreign redirect and verification 500 each fail', async () => {
  for (const [path, response] of [
    ['/does-not-exist-automated-smoke', () => new Response('home')],
    ['/cuenta', () => new Response('private account')],
    ['/cuenta', () => new Response(null, { status: 302, headers: { location: 'https://evil.test/ingresar' } })],
    ['/api/auth/verification-email', () => new Response('Worker error', { status: 500 })],
  ]) await assert.rejects(() => runSmoke('https://spanishcue.com', fixture({ [path]: response })));
});
