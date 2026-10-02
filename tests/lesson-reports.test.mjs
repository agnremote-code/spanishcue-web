import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { DatabaseSync } from 'node:sqlite';
import { build } from 'esbuild';
const db = new DatabaseSync(':memory:');
const sql = await readFile('drizzle/0010_lesson_reports.sql', 'utf8');
db.exec(sql); db.exec(sql); // authorized forward SQL must be retry safe
const adapter = { prepare(sql) { return { bind(...values) { const s = db.prepare(sql); return { async all() { return {results:s.all(...values)}; }, async first() { return s.get(...values) ?? null; }, async run() { return {meta:{changes:Number(s.run(...values).changes)}}; } }; } }; } };
globalThis.__REPORT_ENV = { DB:adapter };
const bundle = await build({stdin:{contents:`export {POST} from './app/api/lesson-reports/route'; export {GET,PATCH} from './app/api/admin/lesson-reports/route';`,resolveDir:process.cwd()},bundle:true,write:false,format:'esm',platform:'node',plugins:[{name:'env',setup(b){b.onResolve({filter:/^cloudflare:workers$/},()=>({path:'env',namespace:'env'}));b.onLoad({filter:/.*/,namespace:'env'},()=>({contents:'export const env = globalThis.__REPORT_ENV;'}));}}]});
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
