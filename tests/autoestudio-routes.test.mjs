import test from 'node:test';
import assert from 'node:assert/strict';
import { readdirSync } from 'node:fs';

// Runs against the local Worker (scripts/test-worker.mjs sets the origin).
const origin = process.env.CHESPANISH_TEST_ORIGIN;
const forged = { 'x-chespanish-access-level': 'full', 'x-chespanish-owner': '1' };

test('Autoestudio landing and level maps are public and show the course', { skip: !origin }, async () => {
  const landing = await fetch(origin + '/autoestudio');
  assert.equal(landing.status, 200);
  const html = await landing.text();
  assert.match(html, /Estudia aquí/);
  assert.match(html, /\/autoestudio\/a1/);
  assert.match(landing.headers.get('permissions-policy') || '', /microphone=\(self\)/);
  const map = await fetch(origin + '/autoestudio/a1');
  assert.equal(map.status, 200);
  assert.match(await map.text(), /semana-20/);
  assert.equal((await fetch(origin + '/autoestudio/z9')).status, 404);
});

test('A1 weeks 1 and 2 are free and render the full module', { skip: !origin }, async () => {
  for (const path of ['/autoestudio/a1/semana-1', '/autoestudio/a1/semana-2']) {
    const response = await fetch(origin + path, { redirect: 'manual' });
    assert.equal(response.status, 200, path);
    const html = await response.text();
    assert.match(html, /ae-module/, path);
  }
  const week1 = await (await fetch(origin + '/autoestudio/a1/semana-1')).text();
  assert.match(week1, /Me llamo/);
});

test('PRO weeks redirect anonymous visitors, including forged headers and RSC requests', { skip: !origin }, async () => {
  const levels = readdirSync('app/autoestudio/curriculum/modules').filter((name) => /^[abc][12]$/.test(name));
  const paths = ['/autoestudio/a1/semana-3', '/autoestudio/a1/semana-20', '/autoestudio/a1/semana-3?free=1'];
  if (levels.includes('c2')) paths.push('/autoestudio/c2/semana-1');
  for (const path of paths) {
    for (const headers of [{}, forged]) {
      const response = await fetch(origin + path, { redirect: 'manual', headers });
      assert.equal(response.status, 302, path);
      const location = new URL(response.headers.get('location'), origin);
      assert.equal(location.pathname, '/acceso', path);
    }
  }
  const rsc = await fetch(origin + '/autoestudio/a1/semana-3.rsc', { redirect: 'manual', headers: { RSC: '1' } });
  assert.notEqual(rsc.status, 200);
  assert.doesNotMatch(await rsc.text(), /ae-module|"listening"/);
});
