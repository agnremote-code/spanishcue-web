// Built Worker: the ten classic conversation classes are PRO pages whose question
// banks live in encrypted blobs. Anonymous and forged-header visitors never get
// a 5xx and never see a question. Run by scripts/test-worker.mjs.
import test from 'node:test';
import assert from 'node:assert/strict';
import { CLASES } from '../app/conversacion-clasica/clases.mjs';
import { CONTENT } from '../app/speed-dating-de-personajes/content/index.mjs';

const origin = process.env.CHESPANISH_TEST_ORIGIN;
const probe = CONTENT.B1.categorias[0].questions[0];

test('classic classes stay closed to visitors without access', { skip: !origin }, async () => {
  for (const { slug } of CLASES) {
    for (const headers of [{}, { 'x-chespanish-access-level': 'full', 'x-chespanish-owner': '1' }, { RSC: '1' }]) {
      const response = await fetch(`${origin}/${slug}`, { redirect: 'manual', headers });
      assert.ok(response.status < 500, `${slug} ${JSON.stringify(headers)} → ${response.status}`);
      const body = await response.text();
      assert.ok(!body.includes(probe), `${slug} leaks a question`);
    }
  }
});
