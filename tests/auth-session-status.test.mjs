import test from 'node:test';
import assert from 'node:assert/strict';
import { build } from 'esbuild';

const built = await build({entryPoints:['app/api/auth/session/route.ts'], bundle:true,
  platform:'node', format:'esm', write:false,
  plugins:[{name:'test-worker-binding',setup(builder){
    builder.onResolve({filter:/^cloudflare:workers$/},()=>({path:'env',namespace:'test-env'}));
    builder.onLoad({filter:/.*/,namespace:'test-env'},()=>({contents:'export const env = {};',loader:'js'}));
  }}],
});
const { GET } = await import('data:text/javascript;base64,'+Buffer.from(built.outputFiles[0].text).toString('base64'));
const originalFetch=globalThis.fetch;
test.afterEach(()=>{globalThis.fetch=originalFetch;});
const status = headers => GET(new Request('https://spanishcue.test/api/auth/session',{headers}));

test('session status trusts neither forged identity headers nor authorization tokens',async()=>{
  let calls=0;
  globalThis.fetch=async()=>{calls++;return Response.json({users:[]});};
  const response=await status({'x-chespanish-user-uid':'forged','x-chespanish-owner':'1',authorization:'Bearer ignored'});
  assert.deepEqual(await response.json(),{authenticated:false});
  assert.equal(calls,0);
  assert.equal(response.headers.get('cache-control'),'private, no-store');
  assert.equal(response.headers.get('set-cookie'),null);
});

test('session status checks the actual cookie with Firebase and returns no account data',async()=>{
  let request;
  globalThis.fetch=async(url,init)=>{
    request={url,init};
    return Response.json({users:[{localId:'test-user',email:'private@example.test',emailVerified:true}]});
  };
  const response=await status({cookie:'__session='+ 't'.repeat(60)});
  assert.deepEqual(await response.json(),{authenticated:true});
  assert.equal(new URL(request.url).pathname,'/v1/accounts:lookup');
  assert.deepEqual(JSON.parse(request.init.body),{idToken:'t'.repeat(60)});
  assert.equal(response.headers.get('set-cookie'),null);
});

test('unverified, disabled, invalid and unreachable identities all fail closed',async()=>{
  for(const fixture of [
    ()=>Response.json({users:[{localId:'test-user',email:'private@example.test',emailVerified:false}]}),
    ()=>Response.json({users:[{localId:'test-user',email:'private@example.test',emailVerified:true,disabled:true}]}),
    ()=>Response.json({error:{message:'INVALID_ID_TOKEN'}},{status:400}),
    ()=>{throw new TypeError('network unavailable');},
  ]){
    globalThis.fetch=async()=>fixture();
    const response=await status({cookie:'__session='+ 't'.repeat(60)});
    assert.deepEqual(await response.json(),{authenticated:false});
  }
});
