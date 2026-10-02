import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { DatabaseSync } from 'node:sqlite';
import { build } from 'esbuild';
const db = new DatabaseSync(':memory:');
const sql = await readFile('drizzle/0010_lesson_reports.sql', 'utf8');
db.exec(sql); db.exec(sql); // authorized forward SQL must be retry safe
const adapter = { prepare(sql) { return { bind(...values) { const s = db.prepare(sql); return { async all() { return {results:s.all(...values)}; }, async first() { return s.get(...values) ?? null; }, async run() { return {meta:{changes:Number(s.run(...values).changes)}}; } }; } }; } };
const deliveries = [];
let deliveryMode = 'ok';
globalThis.fetch = async (url, options) => {
 const payload = JSON.parse(options.body);
 // Sending before persistence would fail this assertion.
 const reportId = options.headers['idempotency-key'].replace('lesson-report/', '');
 assert.ok(db.prepare('SELECT id FROM lesson_reports WHERE id=?').get(reportId));
 deliveries.push({url, options, payload});
 if(deliveryMode === 'throw') throw new Error('secret-provider-error');
 return Response.json(deliveryMode === 'reject' ? {message:'private-provider-detail'} : {id:'email-test'}, {status:deliveryMode === 'reject' ? 500 : 200});
};
globalThis.__REPORT_ENV = { DB:adapter, RESEND_API_KEY:'server-secret-test', CHESPANISH_OWNER_EMAIL:'configured-owner@example.test' };
const bundle = await build({stdin:{contents:`export {OWNER_EMAIL} from './app/firebase-session'; export {POST} from './app/api/lesson-reports/route'; export {GET,PATCH} from './app/api/admin/lesson-reports/route';`,resolveDir:process.cwd()},bundle:true,write:false,format:'esm',platform:'node',plugins:[{name:'env',setup(b){b.onResolve({filter:/^server-only$/},()=>({path:'server-only',namespace:'empty'}));b.onLoad({filter:/.*/,namespace:'empty'},()=>({contents:''}));b.onResolve({filter:/^cloudflare:workers$/},()=>({path:'env',namespace:'env'}));b.onLoad({filter:/.*/,namespace:'env'},()=>({contents:'export const env = globalThis.__REPORT_ENV;'}));}}]});
const routes = await import('data:text/javascript;base64,'+Buffer.from(bundle.outputFiles[0].text).toString('base64'));
const req = (method,body,{user='teacher',owner=false,origin='https://spanishcue.test'}={})=> new Request('https://spanishcue.test/api/lesson-reports',{method,headers:{'content-type':'application/json',origin,...(user?{'x-chespanish-user-uid':user,'x-chespanish-user-email':'teacher@example.test','x-chespanish-access-level':'full'}:{}),...(owner?{'x-chespanish-owner':'1'}:{})},...(body?{body:JSON.stringify(body)}:{})});
const valid = {lessonId:224,message:'El audio no se reproduce.',category:'Audio',level:'B2',url:'/hablar-sin-cortar?level=B2#listen',context:{activityId:'listen-1'}};
test('report requires identity, same origin, valid lesson/message/level',async()=>{
 assert.equal((await routes.POST(req('POST',valid,{user:null}))).status,401);
 assert.equal((await routes.POST(req('POST',valid,{origin:'https://evil.test'}))).status,403);
 for(const input of [{...valid,message:' '},{...valid,lessonId:999999},{...valid,level:'X1'},{...valid,url:'https://evil.test/'},{...valid,message:'x'.repeat(2001)}]) assert.equal((await routes.POST(req('POST',input))).status,400);
});
test('canonical lesson and authenticated identity persist; private admin filters and resolves',async()=>{
 const response=await routes.POST(req('POST',{...valid,userId:'fake',lessonTitle:'fake'})); assert.equal(response.status,201);
 const {id}=await response.json(); const row=db.prepare('SELECT * FROM lesson_reports WHERE id=?').get(id);
 assert.equal(row.user_id,'teacher'); assert.equal(row.lesson_title,'Hablar sin cortar'); assert.equal(row.level,'B2'); assert.equal(row.status,'new'); assert.equal(row.ai_status,'pending'); assert.equal(JSON.parse(row.context_json).activityId,'listen-1');
 assert.equal((await routes.GET(req('GET'))).status,403);
 const all=await routes.GET(req('GET',null,{owner:true})); assert.equal((await all.json()).items.length,1);
 assert.equal((await routes.PATCH(req('PATCH',{id,status:'resolved',resolution:'Audio corregido.'}))).status,403);
 assert.equal((await routes.PATCH(req('PATCH',{id,status:'invented'},{owner:true}))).status,400);
 assert.equal((await routes.PATCH(req('PATCH',{id,status:'resolved',resolution:'Audio corregido.'},{owner:true}))).status,200);
 assert.ok(db.prepare('SELECT resolved_at FROM lesson_reports WHERE id=?').get(id).resolved_at);
});
test('database atomically bounds bursts per authenticated user',async()=>{
 const results=await Promise.all(Array.from({length:7},()=>routes.POST(req('POST',valid,{user:'burst'}))));
 assert.equal(results.filter(r=>r.status===201).length,5); assert.equal(results.filter(r=>r.status===429).length,2);
 assert.equal((await routes.POST(req('POST',valid,{user:'other'}))).status,201);
});
test('canonical schema retries reuse one persisted row and edited payloads remain distinct',async()=>{
 const body={...valid,requestKey:'retry-key-1234567890'};
 const send=()=>routes.POST(req('POST',body,{user:'retry'}));
 const first=await send();const again=await send();assert.equal(first.status,201);assert.equal(again.status,201);assert.equal((await first.json()).id,(await again.json()).id);
 assert.equal(db.prepare('SELECT count(*) AS n FROM lesson_reports WHERE user_id=?').get('retry').n,1);
 const edited=await routes.POST(req('POST',{...body,message:'Otro detalle corregido.'},{user:'retry'}));assert.equal(edited.status,201);assert.equal(db.prepare('SELECT count(*) AS n FROM lesson_reports WHERE user_id=?').get('retry').n,2);
});
test('expanded conversation family level persists C1 instead of raw seed A2',async()=>{
 const bundle=await build({stdin:{contents:"export {conversationFamilies} from './app/conversation-families/catalog';",resolveDir:process.cwd()},bundle:true,write:false,format:'esm',platform:'node'});const {conversationFamilies}=await import('data:text/javascript;base64,'+Buffer.from(bundle.outputFiles[0].text).toString('base64'));const family=conversationFamilies.find(f=>f.availableLevels.includes('C1'));
 const response=await routes.POST(req('POST',{...valid,lessonId:family.canonicalLessonId,url:family.canonicalPath+'?level=C1',level:'C1'},{user:'family'}));assert.equal(response.status,201);const {id}=await response.json();assert.equal(db.prepare('SELECT level FROM lesson_reports WHERE id=?').get(id).level,'C1');
});

test('new report notifies configured owner once with useful escaped context and no identity/browser data', async()=>{
 const start=deliveries.length;
 const response=await routes.POST(req('POST',{...valid,message:'<script>Detalle & duda</script>',context:{sectionId:'practica',sectionLabel:'Práctica',activityId:'voice-1',userAgent:'PRIVATE_BROWSER',viewport:'PRIVATE_VIEWPORT'},notificationEmail:'attacker@example.test'},{user:'notify'}));
 assert.equal(response.status,201);
 assert.equal(deliveries.length,start+1);
 const {payload,url,options}=deliveries.at(-1);
 assert.equal(url,'https://api.resend.com/emails');
 assert.deepEqual(payload.to,['configured-owner@example.test']);
 assert.equal(options.headers.authorization,'Bearer server-secret-test');
 assert.equal(payload.subject,'SpanishCue · Nuevo reporte · Hablar sin cortar');
 for(const value of ['Hablar sin cortar','B2','Audio','Práctica','voice-1','https://spanishcue.com/hablar-sin-cortar?level=B2#practica','https://spanishcue.com/admin/reportes']) assert.ok(payload.text.includes(value),value);
 assert.match(payload.text,/Fecha.*\d{4}-\d{2}-\d{2}/);
 assert.ok(payload.html.includes('&lt;script&gt;'));
 assert.ok(!payload.html.includes('<script>'));
 for(const value of ['PRIVATE_BROWSER','PRIVATE_VIEWPORT','teacher@example.test','server-secret-test','attacker@example.test']) assert.ok(!JSON.stringify(payload).includes(value));
});
test('server notification override takes precedence over owner configuration', async()=>{
 globalThis.__REPORT_ENV.LESSON_REPORT_NOTIFICATION_EMAIL='notification-owner@example.test';
 try {
  assert.equal((await routes.POST(req('POST',valid,{user:'override'}))).status,201);
  assert.deepEqual(deliveries.at(-1).payload.to,['notification-owner@example.test']);
 } finally { delete globalThis.__REPORT_ENV.LESSON_REPORT_NOTIFICATION_EMAIL; }
});
test('concurrent and repeated idempotent submissions attempt exactly one notification', async()=>{
 const start=deliveries.length;
 const body={...valid,requestKey:'concurrent-key-123456789'};
 const results=await Promise.all(Array.from({length:4},()=>routes.POST(req('POST',body,{user:'notification-retry'}))));
 assert.ok(results.every(r=>r.status===201));
 const ids=await Promise.all(results.map(r=>r.json()));
 assert.equal(new Set(ids.map(r=>r.id)).size,1);
 assert.equal(deliveries.length,start+1);
 assert.equal((await routes.POST(req('POST',body,{user:'notification-retry'}))).status,201);
 assert.equal(deliveries.length,start+1);
});
test('provider rejection, network failure and missing config preserve report and return success', async()=>{
 const warnings=[]; const originalWarn=console.warn;
 console.warn=(...values)=>warnings.push(values);
 try {
  for(const mode of ['reject','throw','missing']) {
   deliveryMode=mode;
   if(mode==='missing') delete globalThis.__REPORT_ENV.RESEND_API_KEY;
   const body={...valid,requestKey:`failure-key-123456789-${mode}`};
   const response=await routes.POST(req('POST',body,{user:`failure-${mode}`}));
   assert.equal(response.status,201);
   const {id}=await response.json();
   assert.ok(db.prepare('SELECT id FROM lesson_reports WHERE id=?').get(id));
   const start=deliveries.length;
   assert.equal((await routes.POST(req('POST',body,{user:`failure-${mode}`}))).status,201);
   assert.equal(deliveries.length,start);
  }
  assert.equal(warnings.length,3);
  assert.ok(warnings.every(v=>JSON.stringify(v)==='["lesson_report_notification_failed"]'));
 } finally { deliveryMode='ok'; globalThis.__REPORT_ENV.RESEND_API_KEY='server-secret-test'; console.warn=originalWarn; }
});
test('unauthorized or invalid reports never attempt notification', async()=>{
 const start=deliveries.length;
 assert.equal((await routes.POST(req('POST',valid,{user:null}))).status,401);
 assert.equal((await routes.POST(req('POST',{...valid,message:''}))).status,400);
 const noAccess=req('POST',valid);noAccess.headers.delete('x-chespanish-access-level');
 assert.equal((await routes.POST(noAccess)).status,403);
 assert.equal(deliveries.length,start);
});

test('unconfigured override reuses the canonical existing owner identity without new public recipient literal', async()=>{
 const owner=globalThis.__REPORT_ENV.CHESPANISH_OWNER_EMAIL;
 delete globalThis.__REPORT_ENV.CHESPANISH_OWNER_EMAIL;
 try {
  const start=deliveries.length;
  assert.equal((await routes.POST(req('POST',valid,{user:'canonical-owner'}))).status,201);
  assert.equal(deliveries.length,start+1);
  assert.deepEqual(deliveries.at(-1).payload.to,[routes.OWNER_EMAIL]);
 } finally {globalThis.__REPORT_ENV.CHESPANISH_OWNER_EMAIL=owner;}
});
