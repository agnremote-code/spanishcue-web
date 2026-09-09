import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile,access } from 'node:fs/promises';
import { build } from 'esbuild';
const result=await build({stdin:{contents:'export * from "./app/access-policy";export * from "./app/offer";export {lessons} from "./app/lesson-catalog";',resolveDir:process.cwd()},bundle:true,write:false,format:'esm',platform:'node'});
const p=await import('data:text/javascript;base64,'+Buffer.from(result.outputFiles[0].text).toString('base64'));
const root=process.env.CHESPANISH_TEST_ORIGIN||'http://127.0.0.1:8787';
// Fixtures only for the local Worker. Production identity is injected by Sites dispatch.
const owner={'oai-authenticated-user-id':'local-owner','oai-authenticated-user-email':'agnremote@gmail.com'};
const teacher={'oai-authenticated-user-id':'local-teacher','oai-authenticated-user-email':'teacher@example.test'};
const get=(path,headers={})=>fetch(root+path,{headers,redirect:'manual'});
const route=l=>l.path||(l.special?'/choose-conversation':`/clase/${l.id}`);
test('each fixed sample set contains two existing matching lessons',()=>{
 for(const [level,ids] of Object.entries(p.samplesByLevel)){assert.equal(new Set(ids).size,2);for(const id of ids){const l=p.lessons.find(l=>l.id===id);assert.ok(l);assert.ok(l.level===level||l.levels?.includes(level));}}
 for(const [category,ids] of Object.entries(p.samplesByCategory)){assert.equal(new Set(ids).size,2);for(const id of ids)assert.equal(p.lessons.find(l=>l.id===id)?.category,category)}
 assert.equal(new Set(p.lessons.map(l=>l.id)).size,p.lessons.length);
});
test('offer is exactly USD 7.49 for twelve months; invalid configuration rejected',()=>{
 assert.equal(p.discountedCents(p.DEFAULT_OFFER),749);assert.equal(p.DEFAULT_OFFER.months,12);assert.equal(p.DEFAULT_OFFER.maxTeachers,100);
 for(const change of [{baseCents:0},{discountPercent:101},{months:-1},{maxTeachers:1.5},{revision:-1}])assert.equal(p.validateOffer({...p.DEFAULT_OFFER,...change}),false);
 assert.equal(p.ownerFromHeaders(new Headers(teacher)),false);assert.equal(p.ownerFromHeaders(new Headers({'oai-authenticated-user-email':'agnremote@gmail.com'})),false);
});
test('all free routes open, all paid routes deny anonymous and teacher access',async()=>{
 for(const l of p.lessons.filter(l=>!l.path?.startsWith('http'))){const path=route(l);const anon=await get(path);await anon.arrayBuffer();assert.equal(anon.status,p.isFreeLesson(l.id)?200:302,`anonymous ${path}`);if(!p.isFreeLesson(l.id)){const signed=await get(path,teacher);await signed.arrayBuffer();assert.equal(signed.status,302,`teacher ${path}`);assert.equal(new URL(signed.headers.get('location')).pathname,'/acceso');}}
});
test('owner opens a paid route and admin; unauthenticated and teacher admin denied',async()=>{
 for(const path of ['/past-b1','/admin']){const r=await get(path,owner);assert.equal(r.status,200,path);await r.arrayBuffer()}
 assert.equal((await get('/admin')).status,302);assert.equal((await get('/admin',teacher)).status,302);
 assert.equal((await get('/api/settings')).status,403);assert.equal((await get('/api/settings',teacher)).status,403);
});
test('paid client assets are absent from static storage and require owner identity',async()=>{
 const report=JSON.parse(await readFile('dist/.openai/client-protection-report.json','utf8'));
 assert.ok(report.protectedFiles.length>0);
 for(const file of report.protectedFiles){await assert.rejects(access('dist/client/'+file));const r=await get('/'+file);assert.equal(r.status,403,file);assert.match(r.headers.get('cache-control'),/no-store/);const ok=await get('/'+file,owner);assert.equal(ok.status,200);assert.match(ok.headers.get('content-type'),/javascript/);await ok.arrayBuffer();}
 for(const file of report.publicFiles.filter(x=>x.endsWith('.js'))){const r=await get('/'+file);assert.equal(r.status,200,`public ${file}`);await r.arrayBuffer()}
});
test('configuration persists; cross-origin, invalid and stale writes fail',async()=>{
 const before=await(await get('/api/settings',owner)).json();
 const put=(o,extra={})=>fetch(root+'/api/settings',{method:'PUT',headers:{...owner,'content-type':'application/json',origin:root,...extra},body:JSON.stringify(o)});
 assert.equal((await put(before,{origin:'https://example.test'})).status,403);
 assert.equal((await put({...before,discountPercent:200})).status,400);
 const changed={...before,baseCents:1599,discountPercent:40,months:6,maxTeachers:150};
 const saved=await put(changed);assert.equal(saved.status,200);const current=await saved.json();assert.equal(current.baseCents,1599);assert.equal((await(await get('/api/settings',owner)).json()).maxTeachers,150);
 assert.equal((await put(changed)).status,409);
 const restored=await put({...before,revision:current.revision});assert.equal(restored.status,200);
});
