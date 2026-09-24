import assert from 'node:assert/strict';
import test from 'node:test';
import { build } from 'esbuild';

test('Paddle failure logs actionable fields without logging credentials or buyer data', async () => {
  const result = await build({
    entryPoints: ['app/paddle-server.ts'], bundle: true, write: false, format: 'esm', platform: 'node',
  });
  const { createPaddleCheckoutTransaction } = await import(`data:text/javascript;base64,${Buffer.from(result.outputFiles[0].text).toString('base64')}`);
  const originalFetch = globalThis.fetch;
  const originalError = console.error;
  const logs = [];
  const claimSecret = 'a'.repeat(64);
  globalThis.fetch = async () => Response.json({
    error: {
      type: 'request_error', code: 'invalid_field',
      detail: `Price cannot be used. buyer@example.test pdl_live_apikey_private client-token-private webhook-secret-private ${claimSecret}`,
    },
    meta: { request_id: '9346b365-4cad-43a6-b7c1-48ff6a1c7836' },
  }, { status: 400 });
  console.error = (...args) => logs.push(args);
  try {
    await assert.rejects(
      createPaddleCheckoutTransaction({
        apiKey: 'pdl_live_apikey_private', clientToken: 'client-token-private',
        webhookSecret: 'webhook-secret-private', priceId: 'pri_founder',
      }, { claimId: 'public-claim-id', offerCode: 'founder' }),
      /paddle_api_400/,
    );
    const output = JSON.stringify(logs);
    assert.match(output, /paddle_api_error/);
    assert.match(output, /"status":400/);
    assert.match(output, /request_error/);
    assert.match(output, /invalid_field/);
    assert.match(output, /Price cannot be used/);
    assert.match(output, /9346b365-4cad-43a6-b7c1-48ff6a1c7836/);
    assert.match(output, /\/transactions/);
    assert.match(output, /POST/);
    for (const secret of ['pdl_live_apikey_private', 'client-token-private', 'webhook-secret-private', claimSecret, 'buyer@example.test']) {
      assert.doesNotMatch(output, new RegExp(secret));
    }
  } finally {
    globalThis.fetch = originalFetch;
    console.error = originalError;
  }
});

test('Paddle failure with an empty JSON body still records the HTTP status', async () => {
  const result = await build({
    entryPoints: ['app/paddle-server.ts'], bundle: true, write: false, format: 'esm', platform: 'node',
  });
  const { createPaddleCheckoutTransaction } = await import(`data:text/javascript;base64,${Buffer.from(result.outputFiles[0].text).toString('base64')}`);
  const originalFetch = globalThis.fetch;
  const originalError = console.error;
  const logs = [];
  globalThis.fetch = async () => Response.json(null, { status: 403 });
  console.error = (...args) => logs.push(args);
  try {
    await assert.rejects(
      createPaddleCheckoutTransaction({ apiKey: 'private-key', priceId: 'pri_founder' }, { claimId: 'public-claim-id', offerCode: 'founder' }),
      /paddle_api_403/,
    );
    assert.match(JSON.stringify(logs), /"status":403/);
  } finally {
    globalThis.fetch = originalFetch;
    console.error = originalError;
  }
});
