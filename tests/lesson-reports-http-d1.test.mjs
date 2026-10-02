import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { DatabaseSync } from 'node:sqlite';
import { build } from 'esbuild';
const sqlite = new DatabaseSync(':memory:');
sqlite.exec(await readFile('drizzle/0010_lesson_reports.sql','utf8'));
class D1Adapter {prepare(sql){const db=sqlite;return {bind(...args){return {async all(){return {results:db.prepare(sql).all(...args)}},async first(){return db.prepare(sql).get(...args)||null},async run(){return {meta:{changes:Number(db.prepare(sql).run(...args).changes)}}}}}}}}
globalThis.__REPORTS_ENV={DB:new D1Adapter()};
const bundled=await build({stdin:{contents:`export {POST} from './app/api/lesson-reports/route'; export {GET} from './app/api/admin/lesson-reports/route'; export {PATCH} from './app/api/admin/lesson-reports/[id]/route';`,resolveDir:process.cwd()},plugins:[{name:'env',setup(b){b.onResolve({filter:/^cloudflare:workers$/},()=>({path:'env',namespace:'env'}));b.onLoad({filter:/.*/,namespace:'env'},()=>({contents:'export const env=globalThis.__REPORTS_ENV'}))}}],bundle:true,write:false,format:'esm',platform:'node'});
const {POST,GET,PATCH}=await import('data:text/javascript;base64,'+Buffer.from(bundled.outputFiles[0].text).toString('base64'));
const request=(method,body,user='teacher',owner=false,origin='https://spanishcue.test',path='/api/lesson-reports')=>new Request('https://spanishcue.test'+path,{method,headers:{'content-type':'application/json',origin,...(user?{'x-chespanish-user-uid':user,'x-chespanish-account-id':`account-${user}`,'x-chespanish-user-email':`${user}@test.com`,'x-chespanish-access-level':'full'}:{}),...(owner?{'x-chespanish-owner':'1'}:{})},...(body===undefined?{}:{body:JSON.stringify(body)})});
const payload=(key=crypto.randomUUID())=>({requestKey:key,lessonId:224,message:'En la actividad hay una respuesta que no corresponde.',category:'answer',context:{sectionId:'connect',activityId:'A1/connect/1',questionId:'q1',level:'A1',locationLabel:'Conexiones',routePath:'/hablar-sin-cortar',pageUrl:'https://spanishcue.test/hablar-sin-cortar?level=A1&token=PRIVATE'},reporterEmail:'spoof@bad.test',status:'resolved',aiStatus:'resolved'});
test('valid report persists trusted metadata, exact activity and sanitized URL; retry is idempotent',async()=>{
 const body=payload();const response=await POST(request('POST',body));assert.equal(response.status,201);const result=await response.json();assert.ok(result.id);
 const row=sqlite.prepare('SELECT * FROM lesson_reports WHERE id=?').get(result.id);assert.equal(row.lesson_title,'Hablar sin cortar');assert.equal(row.user_id,'teacher');assert.equal(row.reporter_email,'teacher@test.com');assert.equal(row.status,'new');assert.equal(row.ai_status,'unprocessed');assert.equal(row.activity_id,'A1/connect/1');assert.equal(row.lesson_level,'A1');assert.equal(row.issue_type,'content');assert.ok(!row.page_url.includes('token'));
 const retry=await POST(request('POST',body));assert.equal(retry.status,200);assert.equal((await retry.json()).id,result.id);
});
test('auth, origin, limits and canonical lesson validation reject invalid input',async()=>{
 assert.equal((await POST(request('POST',payload(),null))).status,401);assert.equal((await POST(request('POST',payload(),'teacher',false,'https://evil.test'))).status,403);
 for(const patch of [{message:''},{message:'x'.repeat(3001)},{lessonId:99999},{category:'injected'},{context:{routePath:'/hablar-sin-cortar',level:'C9'}},{context:{routePath:'/noche-abierta'}}]) assert.equal((await POST(request('POST',{...payload(),...patch},'invalid'))).status,400);
 const free=request('POST',payload(),'free');free.headers.delete('x-chespanish-access-level');assert.equal((await POST(free)).status,403);
 const huge=request('POST',{...payload(),extra:'x'.repeat(17000)},'large');assert.equal((await POST(huge)).status,413);
});
test('persistent rate limit is atomic across concurrent requests and allows safe retry',async()=>{
 const messages=await Promise.all(Array.from({length:7},()=>POST(request('POST',payload(),'rate'))));assert.equal(messages.filter(r=>r.status===201).length,5);assert.equal(messages.filter(r=>r.status===429).length,2);assert.equal(sqlite.prepare("SELECT COUNT(*) AS n FROM lesson_reports WHERE user_id='rate'").get().n,5);
});
test('admin privacy, filters, paging and audited resolution work against real storage',async()=>{
 assert.equal((await GET(request('GET',undefined,null))).status,403);assert.equal((await GET(request('GET',undefined,'teacher'))).status,403);
 const listed=await GET(request('GET',undefined,'owner',true,undefined,'/api/admin/lesson-reports?status=pending&limit=2'));assert.equal(listed.status,200);const page=await listed.json();assert.equal(page.reports.length,2);assert.equal(page.nextOffset,2);
 const id=page.reports[0].id;
 assert.equal((await PATCH(request('PATCH',{status:'resolved'},'teacher'),{params:Promise.resolve({id})})).status,403);
 assert.equal((await PATCH(request('PATCH',{status:'fake'},'owner',true),{params:Promise.resolve({id})})).status,400);
 const changed=await PATCH(request('PATCH',{status:'resolved',resolution:'Se corrigió la respuesta.',changeReference:'commit abc123'},'owner',true),{params:Promise.resolve({id})});assert.equal(changed.status,200);
 const row=sqlite.prepare('SELECT * FROM lesson_reports WHERE id=?').get(id);assert.equal(row.status,'resolved');assert.equal(row.resolved_by,'owner');assert.ok(row.resolved_at);assert.equal(row.change_reference,'commit abc123');
 const resolved=await (await GET(request('GET',undefined,'owner',true,undefined,'/api/admin/lesson-reports?status=resolved'))).json();assert.equal(resolved.reports.length,1);
 const missing=await PATCH(request('PATCH',{status:'accepted'},'owner',true),{params:Promise.resolve({id:'missing'})});assert.equal(missing.status,404);
});
test('write freeze and unavailable database never report successful persistence',async()=>{
 globalThis.__REPORTS_ENV.SPANISHCUE_WRITE_FREEZE='true';assert.equal((await POST(request('POST',payload(),'freeze'))).status,503);delete globalThis.__REPORTS_ENV.SPANISHCUE_WRITE_FREEZE;
 const original=globalThis.__REPORTS_ENV.DB;globalThis.__REPORTS_ENV.DB={prepare(){throw new Error('no such table: lesson_reports')}};assert.equal((await POST(request('POST',payload(),'missing-db'))).status,503);globalThis.__REPORTS_ENV.DB=original;
});
test('expanded conversation families preserve C1 instead of falling back to raw A2 seed',async()=>{
 const body={...payload(),lessonId:207,context:{level:'C1',routePath:'/red-flag-o-no-a2',pageUrl:'https://spanishcue.test/red-flag-o-no-a2?level=C1'}};
 const response=await POST(request('POST',body,'family'));assert.equal(response.status,201);
 const {id}=await response.json();assert.equal(sqlite.prepare('SELECT lesson_level FROM lesson_reports WHERE id=?').get(id).lesson_level,'C1');
});
