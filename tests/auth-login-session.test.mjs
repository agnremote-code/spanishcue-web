import test from 'node:test';
import assert from 'node:assert/strict';
import { build } from 'esbuild';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const built = await build({entryPoints:['app/ingresar/AuthForm.tsx'], bundle:true,
  platform:'node', format:'cjs', write:false, jsx:'automatic', packages:'external'});
const module = { exports: {} };
new Function('require','module','exports',built.outputFiles[0].text)(require,module,module.exports);
const { establishSession } = module.exports;
const originalFetch = globalThis.fetch;
const originalWindow = globalThis.window;
test.afterEach(() => { globalThis.fetch = originalFetch; globalThis.window = originalWindow; });

test('token failure identifies its stage without exposing Firebase customData', async () => {
  const failure = Object.assign(new Error('secret token and email'), {
    code:'auth/network-request-failed', customData:{password:'do-not-log'},
  });
  await assert.rejects(establishSession({getIdToken:async()=>{throw failure;}}, '/cuenta'), error => {
    assert.equal(error.stage, 'id-token');
    assert.equal(error.code, 'auth/network-request-failed');
    assert.doesNotMatch(JSON.stringify(error), /secret|do-not-log|customData/);
    return true;
  });
});

test('session rejection preserves HTTP status and never navigates', async () => {
  globalThis.fetch = async () => Response.json({error:'private server text'}, {status:401});
  globalThis.window = {location:{assign:()=>assert.fail('rejected identity must not navigate')}};
  await assert.rejects(establishSession({getIdToken:async()=>'test-id-token'}, '/cuenta'), error => {
    assert.equal(error.stage, 'session-post');
    assert.equal(error.httpStatus, 401);
    assert.doesNotMatch(JSON.stringify(error), /private server text|test-id-token/);
    return true;
  });
});

test('a successful POST is not a completed login until the following request carries a valid cookie', async () => {
  const methods=[];
  globalThis.fetch = async (_url, init) => {
    methods.push(init.method);
    return Response.json(init.method === 'POST' ? {} : {authenticated:false});
  };
  let navigation;
  globalThis.window = {location:{assign:path=>{navigation=path;}}};
  await assert.rejects(establishSession({getIdToken:async()=>'test-id-token'}, '/cuenta'), error => {
    assert.equal(error.stage, 'session-cookie');
    return true;
  });
  assert.equal(navigation, undefined);
  assert.deepEqual(methods, ['POST','GET']);
});

test('a verified round trip retains the post-payment destination', async () => {
  globalThis.fetch = async (_url, init) => Response.json(init.method === 'POST'
    ? {postPaymentProvider:'paddle'} : {authenticated:true});
  let navigation;
  globalThis.window = {location:{assign:path=>{navigation=path;}}};
  await establishSession({getIdToken:async()=>'test-id-token'}, '/cuenta');
  assert.equal(navigation, '/pro/claim?provider=paddle');
});

test('email verification rejection remains mandatory and is not retried', async () => {
  let calls=0;
  globalThis.fetch=async()=>{calls++;return Response.json({code:'EMAIL_NOT_VERIFIED'},{status:403});};
  await assert.rejects(establishSession({getIdToken:async()=>'test-token'},'/cuenta'),{
    code:'auth/email-not-verified',stage:'session-post',httpStatus:403,
  });
  assert.equal(calls,1);
});

test('temporary backend failures retry at most once and retain status',async()=>{
  let calls=0;
  globalThis.fetch=async()=>{calls++;return Response.json({error:'unavailable'},{status:503});};
  await assert.rejects(establishSession({getIdToken:async()=>'test-token'},'/cuenta'),{
    code:'auth/session-failed',stage:'session-post',httpStatus:503,
  });
  assert.equal(calls,2);
});

test('a session transport failure is distinguished from Firebase token failure',async()=>{
  globalThis.fetch=async()=>{throw new TypeError('Failed to fetch token=private');};
  await assert.rejects(establishSession({getIdToken:async()=>'test-token'},'/cuenta'),error=>{
    assert.equal(error.stage,'session-post');
    assert.doesNotMatch(JSON.stringify(error),/private|test-token/);
    return true;
  });
});
