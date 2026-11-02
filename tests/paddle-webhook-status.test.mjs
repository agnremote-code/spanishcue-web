import assert from 'node:assert/strict';
import test from 'node:test';
import { readFile } from 'node:fs/promises';
import { build } from 'esbuild';
const built = await build({stdin:{contents:'export * from "./app/paddle-webhook-status";',resolveDir:process.cwd()},bundle:true,write:false,format:'esm',platform:'node'});
const s = await import(`data:text/javascript;base64,${Buffer.from(built.outputFiles[0].text).toString('base64')}`);
const all = s.PADDLE_WEBHOOK_EVENTS.map(name => ({ name }));

test('the Paddle webhook status finds the production destination and names missing events', () => {
  assert.deepEqual(s.summarizeDestinations([{ destination: 'https://spanishcue.com/api/billing/paddle/webhook/', active: true, api_version: 1, subscribed_events: all }]),
    { destination: 'found', active: true, apiVersion: 1, missingEvents: [] });
  const partial = s.summarizeDestinations([{ destination: 'https://www.spanishcue.com/api/billing/paddle/webhook', active: true, api_version: 1, subscribed_events: [{ name: 'transaction.completed' }] }]);
  assert.ok(partial.missingEvents.includes('transaction.payment_failed') && partial.missingEvents.includes('subscription.canceled'));
  assert.deepEqual(s.summarizeDestinations([{ destination: 'https://example.com/hook', active: true }]), { destination: 'missing', destinations: 1 });
  assert.equal(s.summarizeDestinations([
    { destination: 'https://spanishcue.com/api/billing/paddle/webhook', active: false, subscribed_events: [] },
    { destination: 'https://spanishcue.com/api/billing/paddle/webhook', active: true, subscribed_events: all },
  ]).active, true);
});

test('the status route never returns the endpoint secret', async () => {
  const source = await readFile('app/api/billing/paddle/webhook-status/route.ts', 'utf8');
  assert.doesNotMatch(source, /endpoint_secret_key/);
  assert.match(source, /summarizeDestinations\(/);
});
