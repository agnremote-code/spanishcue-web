// Guard for the 2026-11-17 outage (Cloudflare Error 1102): renders in one
// isolate are bounded, viewport prefetch stays off, and real browsers (which
// always carry cookies) are served organic pages from the edge cache.
import assert from 'node:assert/strict';
import test from 'node:test';
import {readFileSync} from 'node:fs';
import {build} from 'esbuild';
const bundle=await build({stdin:{contents:'export * from "./worker/render-gate.ts";',resolveDir:process.cwd()},bundle:true,write:false,platform:'node',format:'esm'});
const {RenderGate,busyResponse,gatedRender,MAX_ACTIVE_RENDERS}=await import('data:text/javascript;base64,'+Buffer.from(bundle.outputFiles[0].text).toString('base64'));
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
const slowBody=(ms,text='ok')=>new ReadableStream({async start(c){await sleep(ms);c.enqueue(new TextEncoder().encode(text));c.close()}});

test('at most maxActive renders run at once and every queued request is still served',async()=>{
 const gate=new RenderGate({maxActive:3,maxQueued:100,waitMs:5000,holdMs:5000});
 let live=0,peak=0;
 const render=async()=>{live++;peak=Math.max(peak,live);await sleep(5);return new Response(new ReadableStream({async start(c){await sleep(10);c.enqueue(new TextEncoder().encode('page'));c.close();live--}}))};
 const responses=await Promise.all(Array.from({length:40},()=>gate.run(render).then(async r=>r&&r.text())));
 assert.equal(responses.filter(t=>t==='page').length,40);
 assert.ok(peak<=3,`peak ${peak}`);assert.equal(gate.peak,3);
 assert.equal(gate.running,0);assert.equal(gate.waiting,0);
});
test('a slot is held until the body has streamed, and freed on cancel, error and empty bodies',async()=>{
 const gate=new RenderGate({maxActive:1,maxQueued:10,waitMs:2000,holdMs:5000});
 const first=await gate.run(async()=>new Response(slowBody(30)));
 assert.equal(gate.running,1,'headers arrived, the stream is still rendering');
 let secondStarted=false;const second=gate.run(async()=>{secondStarted=true;return new Response('b')});
 await sleep(5);assert.equal(secondStarted,false);
 assert.equal(await first.text(),'ok');assert.equal(await (await second).text(),'b');assert.equal(gate.running,0);
 const cancelled=await gate.run(async()=>new Response(slowBody(1000)));await cancelled.body.cancel();assert.equal(gate.running,0);
 await assert.rejects(gate.run(async()=>{throw new Error('boom')}));assert.equal(gate.running,0);
 const redirect=await gate.run(async()=>new Response(null,{status:302,headers:{Location:'/x'}}));assert.equal(redirect.status,302);assert.equal(redirect.headers.get('location'),'/x');assert.equal(gate.running,0);
});
test('a full queue or a long wait sheds the request with a cheap 503 instead of killing the isolate',async()=>{
 const gate=new RenderGate({maxActive:1,maxQueued:1,waitMs:20,holdMs:5000});
 const held=await gate.run(async()=>new Response(slowBody(200)));
 const queued=gate.run(async()=>new Response('late'));
 assert.equal(await gate.run(async()=>new Response('never')),null,'queue full');
 assert.equal(await queued,null,'waited too long');assert.equal(gate.waiting,0);
 await held.text();assert.equal(gate.running,0);
 const busy=busyResponse();assert.equal(busy.status,503);assert.equal(busy.headers.get('retry-after'),'5');assert.equal(busy.headers.get('cache-control'),'private, no-store');
});
test('a stalled client cannot keep a slot forever',async()=>{
 const gate=new RenderGate({maxActive:1,maxQueued:5,waitMs:2000,holdMs:25});
 await gate.run(async()=>new Response(slowBody(10)));// never read
 const next=await gate.run(async()=>new Response('next'));assert.equal(await next.text(),'next');
});
test('pages and payloads are gated; APIs and writes are not',()=>{
 assert.equal(gatedRender('GET','/material-ele/indice'),true);assert.equal(gatedRender('GET','/clase/201'),true);
 assert.equal(gatedRender('GET','/api/auth/session'),false);assert.equal(gatedRender('POST','/api/billing/checkout'),false);assert.equal(gatedRender('POST','/cuenta'),false);
 assert.ok(MAX_ACTIVE_RENDERS>=2&&MAX_ACTIVE_RENDERS<=6,'each render in flight holds isolate memory: keep the cap small');
});
test('the Worker renders pages only through the gate',()=>{
 const worker=readFileSync('worker/index.ts','utf8');
 assert.equal(worker.match(/handler\.fetch\(/g).length,2);
 assert.match(worker,/gatedRender\(request\.method, pathname\)\s*\? await renderGate\.run\(\(\) => handler\.fetch\(verifiedRequest, env, ctx\)\)/);
 assert.match(worker,/if \(!rendered\) \{\s*const busy = busyResponse\(\);/);
});
test('cookies alone never bypass the edge cache; the UI language is part of its key',()=>{
 const worker=readFileSync('worker/index.ts','utf8');
 const states=worker.match(/const VISITOR_STATE_HEADERS = \[([^\]]+)\]/)[1];
 assert.ok(!/cookie/.test(states));assert.match(states,/'authorization'/);assert.match(states,/'rsc'/);
 assert.match(worker,/\$\{deployment \?\? 'production'\}:\$\{BUILD_ID\}:\$\{locale\}/);
});
test('links prefetch on intent only: the viewport observer is compiled out',()=>{
 const config=readFileSync('vite.config.ts','utf8');assert.match(config,/intentPrefetchOnly\(\),/);
 const plugin=readFileSync('build/intent-prefetch-plugin.ts','utf8');assert.match(plugin,/throw new Error/);
 const shim=readFileSync('node_modules/vinext/dist/shims/link.js','utf8');
 assert.ok(shim.includes('const observer = getSharedObserver();'),'vinext Link shim changed: update build/intent-prefetch-plugin.ts');
});
test('the layout sends the browser only the lesson being opened, never the whole catalog',()=>{
 const layout=readFileSync('app/layout.tsx','utf8');
 assert.match(layout,/<LessonReportRoutes lessons=\{reportLessons\}/);
 assert.match(layout,/const reportLessons = lessons\s*\.filter\([^\n]+===pathname\)\s*\.slice\(0,1\)/);
});
