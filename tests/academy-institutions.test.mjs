import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
import { DatabaseSync } from 'node:sqlite';
import { build } from 'esbuild';

async function moduleOf(entry) {
 const built = await build({stdin:{contents:entry,resolveDir:process.cwd()},bundle:true,write:false,format:'esm',platform:'node',plugins:[{name:'boundaries',setup(b){
 b.onResolve({filter:/^cloudflare:workers$/},()=>({path:'env',namespace:'env'}));
 b.onLoad({filter:/.*/,namespace:'env'},()=>({contents:'export const env=globalThis.__INSTITUTION_ENV;'}));
 b.onResolve({filter:/^server-only$/},()=>({path:'empty',namespace:'empty'})); b.onLoad({filter:/.*/,namespace:'empty'},()=>({contents:''}));
 }}]}); return import('data:text/javascript;base64,'+Buffer.from(built.outputFiles[0].text).toString('base64'));
}
function asD1(sqlite) {
 const statement=(sql,args=[])=>({bind:(...v)=>statement(sql,v),first:async()=>sqlite.prepare(sql).get(...args)??null,all:async()=>({results:sqlite.prepare(sql).all(...args)}),run:async()=>({meta:{changes:Number(sqlite.prepare(sql).run(...args).changes)}})});
 let queue=Promise.resolve();
 return {prepare:sql=>statement(sql),batch(statements){const result=queue.then(async()=>{sqlite.exec('BEGIN IMMEDIATE');try{const values=[];for(const s of statements)values.push(await s.run());sqlite.exec('COMMIT');return values;}catch(e){sqlite.exec('ROLLBACK');throw e;}});queue=result.catch(()=>{});return result;}};
}
async function fixture(institutions=true) {const sqlite=new DatabaseSync(':memory:');sqlite.exec('PRAGMA foreign_keys=ON');for(const f of (await readdir('drizzle')).filter(n=>n.endsWith('.sql')&&(institutions||!n.startsWith('0017'))).sort())sqlite.exec((await readFile('drizzle/'+f,'utf8')).replaceAll('--> statement-breakpoint',''));return {sqlite,db:asD1(sqlite)};}
function user(sqlite,id,role='teacher'){sqlite.prepare("INSERT INTO users(id,email,normalized_email,role,status,created_at,updated_at,last_sign_in_at) VALUES(?,?,?,?,'active',1,1,1)").run(id,id+'@example.test',id+'@example.test',role);sqlite.prepare("INSERT INTO auth_identities(user_id,provider,provider_subject,provider_email,email_verified,created_at,last_seen_at) VALUES(?,'firebase',?,?,1,1,1)").run(id,'uid-'+id,id+'@example.test');return {id,email:id+'@example.test',owner:role==='owner'};}
const input=(action,values={})=>({action,requestKey:crypto.randomUUID(),...values});
const service=await moduleOf("export * from './db/institutions'; export {resolveFirebaseAccount} from './db/accounts';");
const now=Math.floor(Date.now()/1000);
const access=(db,actor)=>service.resolveFirebaseAccount(db,{uid:'uid-'+actor.id,email:actor.email,emailVerified:true,displayName:null});

test('institution creation is retry-safe, grants no access and scopes all administrative writes',async()=>{
 const {sqlite,db}=await fixture();const admin=user(sqlite,'admin'), outsider=user(sqlite,'outsider');
 const req=input('create',{name:'Instituto Uno'});const first=await service.mutateInstitution(db,admin,req);assert.equal((await service.mutateInstitution(db,admin,req)).institutionId,first.institutionId);
 assert.equal((await access(db,admin)).accessLevel,'free');assert.equal(sqlite.prepare('SELECT count(*) n FROM institutions').get().n,1);
 const second=await service.mutateInstitution(db,outsider,input('create',{name:'Instituto Dos'}));
 for(const action of [input('edit',{institutionId:first.institutionId,name:'Forged'}),input('member',{institutionId:first.institutionId,userId:admin.id,active:false}),input('seat',{institutionId:first.institutionId,userId:admin.id,allocated:true}),input('provision',{institutionId:first.institutionId,seats:99,expiresAt:now+1000})])await assert.rejects(service.mutateInstitution(db,outsider,action),e=>e.status===403);
 assert.equal((await service.institutionDashboard(db,outsider,first.institutionId)).institution,undefined);
 await service.mutateInstitution(db,admin,input('edit',{institutionId:first.institutionId,name:'Nuevo nombre'}));assert.equal(sqlite.prepare('SELECT name FROM institutions WHERE id=?').get(first.institutionId).name,'Nuevo nombre');
 assert.notEqual(first.institutionId,second.institutionId);
});

test('only owner provisions allowance; concurrent allocations cannot overbook and revocation preserves personal grants',async()=>{
 const {sqlite,db}=await fixture();const owner=user(sqlite,'owner','owner'),admin=user(sqlite,'admin'),a=user(sqlite,'a'),b=user(sqlite,'b');
 const {institutionId:id}=await service.mutateInstitution(db,admin,input('create',{name:'Escuela'}));
 for(const actor of [a,b])sqlite.prepare("INSERT INTO institution_memberships(institution_id,user_id,role,status,seat_allocated,created_at,updated_at) VALUES(?,?,'teacher','active',0,1,1)").run(id,actor.id);
 await service.mutateInstitution(db,owner,input('provision',{institutionId:id,seats:1,expiresAt:now+1000}));
 const results=await Promise.allSettled([a,b].map(actor=>service.mutateInstitution(db,admin,input('seat',{institutionId:id,userId:actor.id,allocated:true}))));assert.equal(results.filter(r=>r.status==='fulfilled').length,1);
 const winner=sqlite.prepare('SELECT user_id FROM institution_memberships WHERE seat_allocated=1').get().user_id;const teacher=winner===a.id?a:b;
 assert.equal((await access(db,teacher)).accessSource,'institution');await service.mutateInstitution(db,admin,input('seat',{institutionId:id,userId:winner,allocated:true}));
 await assert.rejects(service.mutateInstitution(db,owner,input('provision',{institutionId:id,seats:0,expiresAt:now+1000})),e=>e.status===409);
 await service.mutateInstitution(db,admin,input('member',{institutionId:id,userId:winner,active:false}));assert.equal((await access(db,teacher)).accessLevel,'free');
 sqlite.prepare("INSERT INTO access_grants(user_id,product_code,access_level,source,status,starts_at,created_at,updated_at) VALUES(?,'teacher_library','full','manual','active',1,1,1)").run(winner);assert.equal((await access(db,teacher)).accessLevel,'full');
 await service.mutateInstitution(db,admin,input('seat',{institutionId:id,userId:admin.id,allocated:true}));sqlite.prepare('UPDATE institution_licenses SET starts_at=1,expires_at=?').run(now-1);assert.equal((await access(db,admin)).accessLevel,'free');
 sqlite.prepare("UPDATE users SET status='disabled' WHERE id=?").run(admin.id);await assert.rejects(service.mutateInstitution(db,admin,input('edit',{institutionId:id,name:'No'})),e=>e.status===403);
});

test('old schema fails closed for institutional access and dashboard readiness',async()=>{const {sqlite,db}=await fixture(false);const a=user(sqlite,'old');assert.equal((await access(db,a)).accessLevel,'free');assert.equal(await service.institutionStorageReady(db),false);});

test('invitations contain only a token digest in storage, require matching verified identity and have explicit retry-safe acceptance',async()=>{
 const {sqlite,db}=await fixture();const admin=user(sqlite,'admin'),teacher=user(sqlite,'teacher'),wrong=user(sqlite,'wrong');const {institutionId:id}=await service.mutateInstitution(db,admin,input('create',{name:'Academia & <script>'}));
 const req=input('invite',{institutionId:id,email:teacher.email,role:'teacher'});const invitation=await service.createInstitutionInvitation(db,admin,req);assert.equal(invitation.created,true);assert.match(invitation.token,/^[a-f0-9]{64}$/);
 const stored=sqlite.prepare('SELECT * FROM institution_invitations').get();assert.notEqual(stored.token_hash,invitation.token);assert.equal(Object.values(stored).includes(invitation.token),false);
 assert.equal((await service.createInstitutionInvitation(db,admin,req)).created,false);
 await service.markInvitationDelivery(db,invitation.id,true);
 await assert.rejects(service.acceptInstitutionInvitation(db,wrong,invitation.token),e=>e.status===403);
 const accepted=await service.acceptInstitutionInvitation(db,teacher,invitation.token);assert.equal(accepted.institutionId,id);assert.equal((await service.acceptInstitutionInvitation(db,teacher,invitation.token)).institutionId,id);assert.equal((await access(db,teacher)).accessLevel,'free');
 const revoked=await service.createInstitutionInvitation(db,admin,input('invite',{institutionId:id,email:wrong.email,role:'administrator'}));await service.markInvitationDelivery(db,revoked.id,true);await service.mutateInstitution(db,admin,input('revoke-invite',{institutionId:id,invitationId:revoked.id}));await assert.rejects(service.acceptInstitutionInvitation(db,wrong,revoked.token));
 const expired=await service.createInstitutionInvitation(db,admin,input('invite',{institutionId:id,email:wrong.email,role:'teacher'}));await service.markInvitationDelivery(db,expired.id,true);sqlite.prepare('UPDATE institution_invitations SET expires_at=? WHERE id=?').run(now-1,expired.id);await assert.rejects(service.acceptInstitutionInvitation(db,wrong,expired.token));
});

test('migration 0017 is additive and retry-safe',async()=>{const {sqlite}=await fixture(false);user(sqlite,'preserved');const sql=await readFile('drizzle/0017_institutions.sql','utf8');assert.doesNotMatch(sql,/\b(?:DROP|ALTER|DELETE|UPDATE)\b/i);sqlite.exec(sql);sqlite.exec(sql);assert.equal(sqlite.prepare('SELECT count(*) n FROM users').get().n,1);});

test('academy API enforces same-origin, verified active account and private responses; provider payload never escapes',async()=>{
 const {sqlite,db}=await fixture();const admin=user(sqlite,'admin');globalThis.__INSTITUTION_ENV={DB:db};
 const routes=await moduleOf("export {GET,POST} from './app/api/academy/route';");
 const headers={'x-chespanish-user-uid':'uid-admin','x-chespanish-account-id':admin.id,'x-chespanish-user-email':admin.email,origin:'https://spanishcue.test','content-type':'application/json'};
 const request=(body,extra={})=>new Request('https://spanishcue.test/api/academy',{method:'POST',headers:{...headers,...extra},body:JSON.stringify(body)});
 assert.equal((await routes.GET(new Request('https://spanishcue.test/api/academy'))).status,401);
 assert.equal((await routes.POST(request(input('create',{name:'API School'}),{origin:'https://evil.test'}))).status,403);
 assert.equal((await routes.POST(request(input('create',{name:'API School'}),{'x-chespanish-account-id':'forged'}))).status,403);
 const response=await routes.POST(request(input('create',{name:'API School'})));assert.equal(response.status,200);assert.equal(response.headers.get('cache-control'),'private, no-store');const {institutionId}=await response.json();
 assert.equal((await routes.POST(request(input('invite',{institutionId,email:'invitee@example.test',role:'teacher'})))).status,503);
 globalThis.__INSTITUTION_ENV.RESEND_API_KEY='test-only';let sends=0;const originalFetch=globalThis.fetch;let emailPayload;
 globalThis.fetch=async(url,options)=>{assert.equal(url,'https://api.resend.com/emails');sends++;emailPayload=JSON.parse(options.body);assert.match(options.headers['idempotency-key'],/^academy-invitation\//);return Response.json({id:'test-provider-id'});};
 try{const req=input('invite',{institutionId,email:'invitee@example.test',role:'teacher'});const sent=await routes.POST(request(req));assert.equal(sent.status,200);const raw=await sent.text();assert.doesNotMatch(raw,/token|test-provider-id|test-only/);assert.equal((await routes.POST(request(req))).status,200);assert.equal(sends,1);assert.match(emailPayload.text,/https:\/\/spanishcue.com\/pro\/academia\/aceptar#token=[a-f0-9]{64}/);assert.match(emailPayload.html,/Aceptar invitación/);assert.equal(sqlite.prepare('SELECT status FROM institution_invitations').get().status,'sent');}finally{globalThis.fetch=originalFetch;}
 assert.equal((await routes.POST(request({...input('create',{name:'x'}),padding:'x'.repeat(13000)}))).status,413);
});

test('invitation quota and administrator revocation are enforced at the acceptance write',async()=>{
 const {sqlite,db}=await fixture();const admin=user(sqlite,'admin'),teacher=user(sqlite,'teacher'),other=user(sqlite,'other');const {institutionId}=await service.mutateInstitution(db,admin,input('create',{name:'Scoped School'}));
 const invite=await service.createInstitutionInvitation(db,admin,input('invite',{institutionId,email:teacher.email,role:'teacher'}));await service.markInvitationDelivery(db,invite.id,true);
 sqlite.prepare("UPDATE institution_memberships SET status='revoked' WHERE user_id=?").run(admin.id);await assert.rejects(service.acceptInstitutionInvitation(db,teacher,invite.token));assert.equal(sqlite.prepare('SELECT count(*) n FROM institution_memberships WHERE user_id=?').get(teacher.id).n,0);
 sqlite.prepare("UPDATE institution_memberships SET status='active' WHERE user_id=?").run(admin.id);
 for(let n=0;n<3;n++){const i=await service.createInstitutionInvitation(db,admin,input('invite',{institutionId,email:other.email,role:'teacher'}));await service.markInvitationDelivery(db,i.id,false);}
 await assert.rejects(service.createInstitutionInvitation(db,admin,input('invite',{institutionId,email:other.email,role:'teacher'})),e=>e.status===429);
});

test('real Worker verification strips forged academy account and owner headers before the API',async()=>{
 const {sqlite,db}=await fixture();const admin=user(sqlite,'admin'),owner=user(sqlite,'owner','owner');const {institutionId}=await service.mutateInstitution(db,admin,input('create',{name:'Worker School'}));
 globalThis.__INSTITUTION_ENV={DB:db};
 const built=await build({entryPoints:['worker/index.ts'],bundle:true,write:false,format:'esm',platform:'node',plugins:[{name:'worker-boundaries',setup(b){
  b.onResolve({filter:/^vinext\/server\/app-router-entry$/},()=>({path:'handler',namespace:'handler'}));
  b.onLoad({filter:/.*/,namespace:'handler'},()=>({contents:"import {GET,POST} from './app/api/academy/route';export default {fetch(request){return new URL(request.url).pathname==='/api/academy'?(request.method==='POST'?POST(request):GET(request)):Response.json(Object.fromEntries(request.headers));}};",resolveDir:process.cwd()}));
  b.onResolve({filter:/^vinext\/server\/image-optimization$/},()=>({path:'image',namespace:'image'}));
  b.onLoad({filter:/.*/,namespace:'image'},()=>({contents:'export const DEFAULT_DEVICE_SIZES=[],DEFAULT_IMAGE_SIZES=[];export function handleImageOptimization(){throw new Error("unused");}'}));
  b.onResolve({filter:/^cloudflare:workers$/},()=>({path:'env',namespace:'env'}));b.onLoad({filter:/.*/,namespace:'env'},()=>({contents:'export const env=globalThis.__INSTITUTION_ENV;'}));
  b.onResolve({filter:/^server-only$/},()=>({path:'empty',namespace:'empty'}));b.onLoad({filter:/.*/,namespace:'empty'},()=>({contents:''}));
 }}]});const worker=(await import('data:text/javascript;base64,'+Buffer.from(built.outputFiles[0].text).toString('base64'))).default;
 const originalFetch=globalThis.fetch;let verificationCalls=0;let identity={localId:'uid-admin',email:admin.email,emailVerified:true};globalThis.fetch=async(url)=>{assert.match(url,/identitytoolkit.googleapis.com/);verificationCalls++;return Response.json({users:[identity]});};
 const env={DB:db,ASSETS:{fetch(){throw new Error('API must not reach assets');}}},ctx={waitUntil(){},passThroughOnException(){}};
 const request=(body,cookie=true)=>new Request('https://spanishcue.test/api/academy',{method:'POST',headers:{origin:'https://spanishcue.test','content-type':'application/json','x-chespanish-user-uid':'uid-owner','x-chespanish-account-id':owner.id,'x-chespanish-user-email':owner.email,'x-chespanish-owner':'1',...(cookie?{cookie:'chespanish_firebase_token='+ 't'.repeat(60)}:{})},body:JSON.stringify(body)});
 try{
  const value=input('provision',{institutionId,seats:50,expiresAt:now+1000});assert.equal((await worker.fetch(request(value,false),env,ctx)).status,401);
  // Use the actual cookie name exported by the Firebase boundary.
  const session=await moduleOf("export {FIREBASE_SESSION_COOKIE} from './app/firebase-session';");
  const authed=body=>{const req=request(body);req.headers.set('cookie',session.FIREBASE_SESSION_COOKIE+'='+'t'.repeat(60));return req;};
  assert.equal((await worker.fetch(authed(value),env,ctx)).status,403);assert.equal(verificationCalls,1);assert.equal(sqlite.prepare('SELECT count(*) n FROM institution_licenses').get().n,0);
  identity={...identity,emailVerified:false};assert.equal((await worker.fetch(authed(value),env,ctx)).status,401);
  identity={localId:'uid-owner',email:owner.email,emailVerified:true};assert.equal((await worker.fetch(authed(value),env,ctx)).status,200);
  const page=await worker.fetch(new Request('https://spanishcue.test/pro/academia/aceptar',{headers:{'x-chespanish-account-id':owner.id,'x-chespanish-owner':'1'}}),env,ctx);assert.equal(page.headers.get('referrer-policy'),'no-referrer');assert.equal(page.headers.get('cache-control'),'private, no-store');assert.match(page.headers.get('x-robots-tag'),/noindex/);const forwarded=await page.json();assert.equal(forwarded['x-chespanish-owner'],undefined);assert.equal(forwarded['x-chespanish-account-id'],undefined);
 }finally{globalThis.fetch=originalFetch;}
});

test('overlapping duplicate invitation acceptance is an idempotent success and never restores revoked access',async()=>{
 const {sqlite,db}=await fixture();const admin=user(sqlite,'admin'),teacher=user(sqlite,'teacher');const {institutionId}=await service.mutateInstitution(db,admin,input('create',{name:'Concurrent School'}));const invitation=await service.createInstitutionInvitation(db,admin,input('invite',{institutionId,email:teacher.email,role:'teacher'}));await service.markInvitationDelivery(db,invitation.id,true);
 let reads=0;let release;const gate=new Promise(resolve=>{release=resolve;});
 const gated={...db,prepare(sql){const wrap=statement=>({...statement,bind(...v){return wrap(statement.bind(...v));},async first(){const result=await statement.first();if(sql.includes('WHERE token_hash=? AND email=?')){reads++;if(reads===2)release();await gate;}return result;}});return wrap(db.prepare(sql));}};
 const results=await Promise.allSettled([service.acceptInstitutionInvitation(gated,teacher,invitation.token),service.acceptInstitutionInvitation(gated,teacher,invitation.token)]);assert.equal(results.filter(r=>r.status==='fulfilled').length,2);
 assert.equal(sqlite.prepare('SELECT count(*) n FROM institution_memberships WHERE user_id=?').get(teacher.id).n,1);
 await service.mutateInstitution(db,admin,input('member',{institutionId,userId:teacher.id,active:false}));await service.acceptInstitutionInvitation(db,teacher,invitation.token);assert.equal((await access(db,teacher)).accessLevel,'free');assert.equal(sqlite.prepare('SELECT status FROM institution_memberships WHERE user_id=?').get(teacher.id).status,'revoked');
});
