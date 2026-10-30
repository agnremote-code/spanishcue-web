import test from 'node:test';
import assert from 'node:assert/strict';

// Runs against the built Worker started by scripts/test-worker.mjs, as an anonymous visitor.
const origin = process.env.CHESPANISH_TEST_ORIGIN;
const lesson = '/gramatica/opinion-afirmativa-frente-a-opinion-negada';
const other = '/gramatica/duda-posibilidad-y-certeza-en-enunciados';
const get = (path, cookie) => fetch(origin + path, { redirect: 'manual', headers: cookie ? { cookie } : {} });

test('anonymous visitors unlock exactly one PRO grammar class with their email', { skip: !origin }, async () => {
  const landing = await get('/clase-gratis');
  assert.equal(landing.status, 200);
  const html = await landing.text();
  assert.match(html, /Desbloquea gratis una clase PRO de gramática/);
  assert.doesNotMatch(html, /Algo salió mal/);

  const locked = await get(lesson);
  assert.ok([302, 303, 307].includes(locked.status));
  assert.equal(new URL(locked.headers.get('location'), origin).pathname, '/clase-gratis');
  assert.equal((await get('/audio/grammar-live/393.mp3')).status, 403);

  const signup = await fetch(origin + '/api/newsletter', { method: 'POST', headers: { origin, 'content-type': 'application/json' }, body: JSON.stringify({ email: 'rendered@example.test', consent: true, source: '/clase-gratis' }) });
  assert.equal(signup.status, 201);
  const cookie = signup.headers.get('set-cookie').split(';')[0];

  const open = await get(lesson, cookie);
  assert.equal(open.status, 200);
  assert.match(await open.text(), /Opinión afirmativa frente a opinión negada/);
  const audio = await get('/audio/grammar-live/393.mp3', cookie);
  assert.equal(audio.status, 200);
  assert.equal(audio.headers.get('content-type'), 'audio/mpeg');

  // The gift opens nothing else.
  const still = await get(other, cookie);
  assert.ok([302, 303, 307].includes(still.status));
  assert.match(still.headers.get('location'), /\/acceso\?returnTo=/);
  assert.equal((await get('/audio/grammar-live/394.mp3', cookie)).status, 403);
  assert.equal((await get(lesson, cookie.replace(/.$/, c => (c === 'a' ? 'b' : 'a')))).status >= 300, true);
});
