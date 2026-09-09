import assert from 'node:assert/strict';
import test from 'node:test';
const root=process.env.CHESPANISH_TEST_ORIGIN||'http://127.0.0.1:8787';
test('library identifies CHESPANISH and excludes paid lesson bodies from the response',async()=>{
 const response=await fetch(root);assert.equal(response.status,200);const html=await response.text();
 assert.match(html,/CHESPANISH/);assert.match(html,/NAVEGÁ/);assert.match(html,/7.49/);assert.match(html,/14.99/);
 assert.doesNotMatch(html,/<meta[^>]*name="codex-preview"/);
 assert.doesNotMatch(html,/Vos ___ \(trabajar\) desde casa/);
 assert.match(response.headers.get('cache-control'),/no-store/);
});
