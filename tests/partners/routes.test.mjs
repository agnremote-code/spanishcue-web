import test from 'node:test';
import assert from 'node:assert/strict';
import {build} from 'esbuild';
import {readFileSync} from 'node:fs';
import {DatabaseSync} from 'node:sqlite';

async function route(path,env){
 globalThis.__partners_env=env;
 const out=await build({entryPoints:[path],bundle:true,write:false,platform:'node',format:'esm',plugins:[{name:'test-cloudflare',setup(b){b.onResolve({filter:/^cloudflare:workers$/},()=>({path:'env',namespace:'test'}));b.onLoad({filter:/.*/,namespace:'test'},()=>({contents:'export const env=globalThis.__partners_env;',loader:'js'}));}}]});
 return import('data:text/javascript;base64,'+Buffer.from(out.outputFiles[0].text).toString('base64')+'#'+crypto.randomUUID());
}
function storage(){const sqlite=new DatabaseSync(':memory:');sqlite.exec(readFileSync('docs/partners/schema.sql','utf8'));const s=(sql,v=[])=>({bind:(...x)=>s(sql,x),first:async()=>sqlite.prepare(sql).get(...v)??null,all:async()=>({results:sqlite.prepare(sql).all(...v)}),run:async()=>({meta:{changes:Number(sqlite.prepare(sql).run(...v).changes)}})});return {sqlite,db:{prepare:sql=>s(sql)}};}
const req=(value,headers={})=>new Request('https://spanishcue.com/api/partners/apply',{method:'POST',headers:{origin:'https://spanishcue.com','content-type':'application/json',...headers},body:JSON.stringify(value)});
const valid={name:'Partner',organization:'Consultora ELE',email:'pro@example.test',country:'España',audience:'mentoring',consent:true,requestKey:'12345678-1234-4234-8234-123456789abc'};

test('public endpoint durably stores a valid application and retry without false success',async()=>{
 const {db,sqlite}=storage();const r=await route('app/api/partners/apply/route.ts',{DB:db});
 assert.equal((await r.POST(req(valid))).status,201);assert.equal((await r.POST(req(valid))).status,201);
 assert.equal(sqlite.prepare('SELECT count(*) n FROM partner_applications').get().n,1);
 assert.equal((await r.POST(req({...valid,requestKey:'new-key-1234567890',companyFax:'bot'}))).status,201);
 assert.equal(sqlite.prepare('SELECT count(*) n FROM partner_applications').get().n,1);
 assert.equal((await r.POST(req(valid,{origin:'https://other.test'}))).status,403);
 sqlite.exec('DROP TABLE partner_audit');const unavailable=await r.POST(req({...valid,requestKey:'new-key-1234567890'}));assert.equal(unavailable.status,503);assert.equal((await unavailable.json()).ok,undefined);
});

test('owner API refuses non-owner reads, writes and CSV; owner writes still require same origin',async()=>{
 const {db}=storage();const r=await route('app/api/admin/partners/route.ts',{DB:db});
 for(const suffix of ['','?export=settlements','?partner=secret'])assert.equal((await r.GET(new Request('https://spanishcue.com/api/admin/partners'+suffix))).status,403);
 assert.equal((await r.POST(req({action:'review',partnerId:'x',status:'approved',reference:'terms'}))).status,403);
 assert.equal((await r.POST(req({action:'review',partnerId:'x'},{'x-chespanish-owner':'1',origin:'https://evil.test'}))).status,403);
 const csv=await r.GET(new Request('https://spanishcue.com/api/admin/partners?export=settlements',{headers:{'x-chespanish-owner':'1'}}));assert.equal(csv.status,200);assert.match(csv.headers.get('content-type'),/text\/csv/);assert.equal(csv.headers.get('cache-control'),'private, no-store');
});

test('partner redirect verifies approval, persists first touch and does not set a cookie without signing configuration',async()=>{
 const {db,sqlite}=storage();const secret='test-secret-with-at-least-32-characters';const code='sc_1234567890abcdef12345678';
 sqlite.prepare("INSERT INTO partner_applications(id,name,organization,email,country,audience,consent_at,created_at,status,code,agreement_reference,approved_at) VALUES('a','a','a','a@example.test','AR','mentoring',1,1,'approved',?,'terms',1)").run(code);
 const r=await route('app/r/partner/[code]/route.ts',{DB:db,AUTOESTUDIO_SHARE_SECRET:secret});
 const consent='spanishcue-consent-v1='+encodeURIComponent(JSON.stringify({version:1,decided:true,marketing:true}));
 const link=new Request('https://spanishcue.com/r/partner/'+code,{headers:{cookie:consent}});const redirect=await r.GET(link,{params:Promise.resolve({code})});
 assert.equal(redirect.status,303);assert.equal(redirect.headers.get('location'),'https://spanishcue.com/');assert.match(redirect.headers.get('set-cookie'),/HttpOnly; Secure; SameSite=Lax; Max-Age=2592000/);assert.equal(redirect.headers.get('x-robots-tag'),'noindex, nofollow');
 const cookie=redirect.headers.get('set-cookie').split(';')[0];const second=await r.GET(new Request(link,{headers:{cookie:cookie+'; '+consent}}),{params:Promise.resolve({code})});assert.equal(second.headers.get('set-cookie'),null);
 const unconfigured=await route('app/r/partner/[code]/route.ts',{DB:db});assert.equal((await unconfigured.GET(link,{params:Promise.resolve({code})})).status,503);
 sqlite.exec("UPDATE partner_applications SET status='paused'");assert.equal((await r.GET(link,{params:Promise.resolve({code})})).status,404);
});

test('referral cookies require marketing consent, including delayed capture after accepting consent',async()=>{
 const {db,sqlite}=storage();const secret='test-secret-with-at-least-32-characters';const code='sc_1234567890abcdef12345678';
 sqlite.prepare("INSERT INTO partner_applications(id,name,organization,email,country,audience,consent_at,created_at,status,code,agreement_reference,approved_at) VALUES('a','a','a','a@example.test','AR','mentoring',1,1,'approved',?,'terms',1)").run(code);
 const r=await route('app/r/partner/[code]/route.ts',{DB:db,AUTOESTUDIO_SHARE_SECRET:secret});
 const first=await r.GET(new Request('https://spanishcue.com/r/partner/'+code),{params:Promise.resolve({code})});
 assert.equal(first.headers.get('set-cookie'),null,'no tracking cookie before consent');
 const referral=new URL(first.headers.get('location')).searchParams.get('partner_ref');assert.ok(referral);
 const touch=await route('app/api/partners/touch/route.ts',{DB:db,AUTOESTUDIO_SHARE_SECRET:secret});
 assert.equal((await touch.POST(req({referral}))).status,403);
 const cookie='spanishcue-consent-v1='+encodeURIComponent(JSON.stringify({version:1,decided:true,marketing:true}));
 const accepted=await touch.POST(req({referral},{cookie}));assert.equal(accepted.status,200);assert.match(accepted.headers.get('set-cookie'),/spanishcue_partner=/);
});
