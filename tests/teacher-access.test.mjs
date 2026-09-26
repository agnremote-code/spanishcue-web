import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile,readdir,access } from 'node:fs/promises';
import { createDecipheriv } from 'node:crypto';
import { pathToFileURL } from 'node:url';
import { build } from 'esbuild';
import { request as httpRequest } from 'node:http';

const result=await build({stdin:{contents:'export * from "./app/access-policy";export * from "./app/account-types";export * from "./app/firebase-session";export * from "./app/offer";export * from "./app/marketing/free-sample-selector";export {lessons} from "./app/lesson-catalog";',resolveDir:process.cwd()},bundle:true,write:false,format:'esm',platform:'node'});
const p=await import('data:text/javascript;base64,'+Buffer.from(result.outputFiles[0].text).toString('base64'));
const root=process.env.CHESPANISH_TEST_ORIGIN||'http://127.0.0.1:8787';
const forgedOwner={'x-chespanish-user-uid':p.OWNER_UID,'x-chespanish-user-email':p.OWNER_EMAIL,'x-chespanish-owner':'1'};
const get=(path,headers={})=>fetch(root+path,{headers,redirect:'manual'});
const getWithHost=(path,host)=>new Promise((resolve,reject)=>{const url=new URL(root+path);const request=httpRequest({hostname:url.hostname,port:url.port,path:url.pathname+url.search,method:'GET',headers:{host}},response=>{response.resume();response.once('end',()=>resolve(response))});request.once('error',reject);request.end()});
const route=l=>p.localLessonPath(l);

test('each category has exactly two fixed, matching free lessons',()=>{
 for(const [category,ids] of Object.entries(p.samplesByCategory)){assert.equal(new Set(ids).size,2);for(const id of ids)assert.equal(p.lessons.find(l=>l.id===id)?.category,category)}
 assert.deepEqual(new Set(p.freeLessonIds),new Set(Object.values(p.samplesByCategory).flat()));
 assert.equal(p.freeLessonIds.length,Object.keys(p.samplesByCategory).length*2);
 assert.equal(new Set(p.lessons.map(l=>l.id)).size,p.lessons.length);
});

test('the adult body exploration belongs to B1 conversation and keeps full-library access',()=>{
 const lesson=p.lessonAtPath('/la-vida-despues-de-los-30',p.lessons);
 assert.ok(lesson,'missing adult body exploration route');
 assert.equal(lesson.level,'B1');
 assert.equal(lesson.category,'Conversación');
 assert.equal(p.isFreeLesson(lesson.id),false);
 assert.equal(p.lessonAtPath('/la-vida-despues-de-los-30/',p.lessons)?.id,lesson.id);
});

test('home product samples are unique, routable and free by central access metadata',()=>{
 const catalog=p.lessons.map(lesson=>({...lesson,free:p.isFreeLesson(lesson.id),href:p.localLessonPath(lesson)||''}));
 const samples=p.selectFreeProductSamples(catalog);
 assert.equal(samples.length,6);
 assert.equal(new Set(samples.map(({lesson})=>lesson.id)).size,samples.length);
 for(const {lesson} of samples){
  assert.equal(p.isFreeLesson(lesson.id),true,lesson.title);
  assert.ok(lesson.href.startsWith('/'),lesson.title);
 }
 assert.deepEqual(samples.map(({lesson})=>lesson.title),[
  'La Fábrica de los Nombres',
  'MÉXICO',
  'El hotel de lo imposible',
  'ARGENTO',
  'Cinco vocales, cinco sonidos',
  'ESTADOS UNIDOS',
 ]);
 assert.equal(p.isFreeLesson(29),false);
 assert.equal(p.isFreeLesson(36),true);
 assert.equal(p.isFreeLesson(210),true);
 assert.equal(p.isFreeLesson(104),false);
 for(const premiumId of [119,136,135,108,139]){
  assert.equal(samples.some(({lesson})=>lesson.id===premiumId),false);
 }
});

test('every grammar lesson has one valid global curriculum position and earlier prerequisites',()=>{
 const grammar=p.lessons.filter(l=>l.category==='Gramática').sort((a,b)=>a.curriculumSequence-b.curriculumSequence);
 assert.equal(grammar.length,51);
 assert.deepEqual(grammar.map(l=>l.curriculumSequence),Array.from({length:grammar.length},(_,i)=>i+1));
 assert.equal(new Set(grammar.map(l=>l.curriculumOrder)).size,grammar.length);
 const sequenceById=new Map(grammar.map(l=>[l.id,l.curriculumSequence]));
 for(const lesson of grammar)for(const prerequisite of lesson.requires||[])assert.ok(sequenceById.get(prerequisite)<lesson.curriculumSequence,`${prerequisite} before ${lesson.id}`);
});

test('every library route has consecutive, unique display positions',()=>{
 for(const category of ['Gramática','Conversación','Escucha','Fonética','Vocabulario']){
  const route=p.lessons.filter(l=>l.category===category).sort((a,b)=>a.routeSequence-b.routeSequence);
  assert.deepEqual(route.map(l=>l.routeSequence),Array.from({length:route.length},(_,i)=>i+1),category);
  assert.equal(new Set(route.map(l=>l.routeOrder)).size,route.length,category);
 }
});

test('owner identity requires a verified email plus the exact Firebase UID and email',async()=>{
 assert.equal(p.isOwnerUser({uid:p.OWNER_UID,email:p.OWNER_EMAIL,emailVerified:false,displayName:null}),false);
 assert.equal(p.isOwnerUser({uid:'different',email:p.OWNER_EMAIL,emailVerified:true,displayName:null}),false);
 assert.equal(p.isOwnerUser({uid:p.OWNER_UID,email:'other@example.test',emailVerified:true,displayName:null}),false);
 const fetcher=async()=>new Response(JSON.stringify({users:[{localId:p.OWNER_UID,email:p.OWNER_EMAIL,emailVerified:false}]}),{status:200,headers:{'content-type':'application/json'}});
 const user=await p.verifyFirebaseIdToken('x'.repeat(60),fetcher);
 assert.equal(p.isOwnerUser(user),false);
 const unverifiedHeaders=p.authenticatedRequestHeaders(new Headers(),user,{userId:'owner-unverified',email:p.OWNER_EMAIL,displayName:null,role:'owner',status:'active',accessLevel:'full',accessSource:'owner',accessExpiresAt:null});
 assert.equal(p.signedInFromHeaders(unverifiedHeaders),false);
 assert.equal(p.fullAccessFromHeaders(unverifiedHeaders),false);
 const filtered=await p.getFirebaseUserFromHeaders(new Headers({cookie:`__session=${'x'.repeat(60)}`}),fetcher);
 assert.equal(filtered,null);
 const headers=p.authenticatedRequestHeaders(new Headers(forgedOwner),null);
 assert.equal(p.ownerFromHeaders(headers),false);
});

test('verified account access is carried only in server-created headers',()=>{
 const user={uid:'firebase-teacher',email:'teacher@example.test',emailVerified:true,displayName:'Teacher'};
 const account={userId:'user-1',email:user.email,displayName:user.displayName,role:'teacher',status:'active',accessLevel:'full',accessSource:'manual',accessExpiresAt:null};
 const headers=p.authenticatedRequestHeaders(new Headers({'x-chespanish-access-level':'full'}),user,account);
 assert.equal(p.signedInFromHeaders(headers),true);
 assert.equal(p.accountIdFromHeaders(headers),'user-1');
 assert.equal(p.ownerFromHeaders(headers),false);
 assert.equal(p.fullAccessFromHeaders(headers),true);
 const stripped=p.authenticatedRequestHeaders(headers,null);
 assert.equal(p.signedInFromHeaders(stripped),false);
 assert.equal(p.fullAccessFromHeaders(stripped),false);
 assert.equal(p.accountIdFromHeaders(stripped),null);
});

test('verified identity, owner status and PRO entitlement remain distinct',()=>{
 const user={uid:'firebase-teacher',email:'teacher@example.test',emailVerified:true,displayName:'Teacher'};
 const freeAccount={userId:'user-free',email:user.email,displayName:user.displayName,role:'teacher',status:'active',accessLevel:'free',accessSource:null,accessExpiresAt:null};
 const proAccount={...freeAccount,userId:'user-pro',accessLevel:'full',accessSource:'billing'};
 const freeSession=p.getUserSessionFromHeaders(p.authenticatedRequestHeaders(new Headers(),user,freeAccount));
 assert.deepEqual({role:freeSession.role,isAuthenticated:freeSession.isAuthenticated,isPro:freeSession.isPro,isOwner:freeSession.isOwner},{role:'authenticated_free',isAuthenticated:true,isPro:false,isOwner:false});
 const proSession=p.getUserSessionFromHeaders(p.authenticatedRequestHeaders(new Headers(),user,proAccount));
 assert.deepEqual({role:proSession.role,isAuthenticated:proSession.isAuthenticated,isPro:proSession.isPro,isOwner:proSession.isOwner},{role:'pro',isAuthenticated:true,isPro:true,isOwner:false});
 const ownerUser={uid:p.OWNER_UID,email:p.OWNER_EMAIL,emailVerified:true,displayName:'Alejandro'};
 const ownerSession=p.getUserSessionFromHeaders(p.authenticatedRequestHeaders(new Headers(),ownerUser,null));
 assert.deepEqual({role:ownerSession.role,isAuthenticated:ownerSession.isAuthenticated,isPro:ownerSession.isPro,isOwner:ownerSession.isOwner},{role:'owner',isAuthenticated:true,isPro:true,isOwner:true});
 const forgedSession=p.getUserSessionFromHeaders(p.authenticatedRequestHeaders(new Headers(forgedOwner),null));
 assert.deepEqual({role:forgedSession.role,isAuthenticated:forgedSession.isAuthenticated,isPro:forgedSession.isPro,isOwner:forgedSession.isOwner},{role:'visitor',isAuthenticated:false,isPro:false,isOwner:false});
});

test('account return paths stay same-origin and account sections expose honest states',()=>{
 assert.equal(p.safeRelativeReturnPath('/clase/48?modo=pro'),'\/clase/48?modo=pro');
 for(const unsafe of ['//evil.example','https://evil.example','\\\\evil.example','/%2F%2Fevil.example','/%5C%5Cevil.example'])assert.equal(p.safeRelativeReturnPath(unsafe),'/');
 assert.deepEqual(p.ACCOUNT_TAB_KEYS,['inicio','alumnos','historial','favoritos','suscripcion','ajustes']);
 assert.equal(p.accountTabFromValue('favoritos'),'favoritos');
 assert.equal(p.accountTabFromValue('inventado'),'inicio');
 for(const tab of ['alumnos','historial','favoritos']){
  const state=p.accountEmptyState(tab,'es');
  assert.equal(state.kind,'empty');
  assert.equal(state.hasPersistedData,false);
  assert.ok(state.title.length>0);
  assert.ok(state.body.length>0);
 }
});

test('offer remains configurable and invalid values are rejected',()=>{
 assert.equal(p.discountedCents(p.DEFAULT_OFFER),1500);assert.equal(p.DEFAULT_OFFER.months,0);assert.equal(p.DEFAULT_OFFER.maxTeachers,1000);
 for(const change of [{baseCents:0},{discountPercent:101},{months:-1},{maxTeachers:1.5},{revision:-1}])assert.equal(p.validateOffer({...p.DEFAULT_OFFER,...change}),false);
});

test('all free routes open and all paid routes deny anonymous access without cacheable redirects',async()=>{
 for(const l of p.lessons.filter(l=>route(l))){const path=route(l);const anon=await get(path);await anon.arrayBuffer();assert.equal(anon.status,p.isFreeLesson(l.id)?200:302,`anonymous ${path}`);if(!p.isFreeLesson(l.id))assert.match(anon.headers.get('cache-control')||'',/private, no-store/,path)}
});

test('standalone board routes deny anonymous access without exposing their content',async()=>{
 for(const path of ['/tablero-de-eso-si-hablo','/tablero-no-es-tan-simple']){
  const response=await get(path);
  const body=await response.text();
  assert.equal(response.status,302,path);
  assert.equal(new URL(response.headers.get('location')).pathname,'/acceso',path);
  assert.match(response.headers.get('cache-control')||'',/private, no-store/,path);
  assert.doesNotMatch(body,/DE ESO SÍ HABLO|NO ES TAN SIMPLE/i,path);
 }
});

test('legacy numeric lesson links redirect once to their canonical local route',async()=>{
 for(const lesson of p.lessons){
  const canonical=route(lesson);
  const legacy=`/clase/${lesson.id}`;
  if(!canonical||canonical===legacy)continue;
  const response=await get(`${legacy}?utm_source=legacy`);
  assert.equal(response.status,308,legacy);
  const location=new URL(response.headers.get('location'));
  assert.equal(location.pathname,canonical,legacy);
  assert.equal(location.searchParams.get('utm_source'),'legacy',legacy);
  await response.arrayBuffer();
 }
});

test('public discovery endpoints and canonical redirects respond correctly',async()=>{
 for(const path of ['/robots.txt','/sitemap.xml','/pricing','/free-spanish-lesson','/spanish-teacher-resources','/ele-recursos-profesores','/sistema-verbal']){
  const response=await get(path);assert.equal(response.status,200,path);await response.arrayBuffer();
 }
 const favicon=await get('/favicon.ico');assert.equal(favicon.status,308);assert.equal(new URL(favicon.headers.get('location')).pathname,'/favicon.svg');await favicon.arrayBuffer();
 const slash=await get('/pricing/');assert.equal(slash.status,308);assert.equal(new URL(slash.headers.get('location')).pathname,'/pricing');await slash.arrayBuffer();
 const www=await getWithHost('/','www.spanishcue.com');assert.equal(www.statusCode,308);assert.equal(new URL(www.headers.location).hostname,'spanishcue.com');
});

test('production host and scheme normalization is one-hop before route handling', async () => {
 const source = await readFile('worker/index.ts','utf8');
 assert.match(source,/url\.protocol !== "https:"/);
 assert.match(source,/url\.hostname === "www\.spanishcue\.com"/);
 assert.match(source,/url\.protocol = "https:"/);
 assert.match(source,/url\.hostname = "spanishcue\.com"/);
});

test('every local catalog route is resolved by the server gate, including harmless slash variants',()=>{
 for(const lesson of p.lessons.filter(item=>route(item))){const path=route(lesson);assert.equal(p.lessonAtPath(path,p.lessons)?.id,lesson.id,path);assert.equal(p.lessonAtPath(path+'/',p.lessons)?.id,lesson.id,path+'/');assert.equal(p.lessonAtPath('/'+path,p.lessons)?.id,lesson.id,'/'+path)}
});

test('Spanish Mouth Lab is local, complete and protected by the premium gate',async()=>{
 const lesson=p.lessons.find(item=>item.id===38);
 assert.ok(lesson);
 assert.equal(route(lesson),'/clase/38');
 assert.equal(lesson.path,undefined);
 assert.equal(lesson.special,undefined);
 assert.ok(lesson.practice.length>=6);
 assert.ok(lesson.speaking.length>=4);
 assert.ok(lesson.homework.length>0);
 const response=await get('/clase/38');
 assert.equal(response.status,302);
 assert.equal(new URL(response.headers.get('location')).pathname,'/acceso');
 await response.arrayBuffer();
});

test('the D1 export is owner-only and forged owner headers get nothing',async()=>{
 for(const headers of [{},forgedOwner]){const response=await get('/api/admin/export',headers);assert.equal(response.status,403);assert.match(response.headers.get('cache-control')||'',/private, no-store/);assert.doesNotMatch(await response.text(),/jsonl|manifest/)}
});

test('forged browser identity headers cannot unlock paid routes or admin',async()=>{
 for(const path of ['/past-b1','/admin']){const response=await get(path,forgedOwner);assert.equal(response.status,302,path);assert.match(response.headers.get('cache-control')||'',/private, no-store/,path);await response.arrayBuffer()}
 const api=await get('/api/settings',forgedOwner);assert.equal(api.status,403);assert.match(api.headers.get('cache-control')||'',/private, no-store/);await api.arrayBuffer();
});

test('paid client assets are absent from static storage and denied without a valid Firebase session',async()=>{
 const report=JSON.parse(await readFile('dist/.openai/client-protection-report.json','utf8'));
 assert.ok(report.protectedFiles.length>0);
 for(const required of ['error-','not-found-','layout-segment-context-','SystemHub-','ClaimClient-']){
  assert.equal(report.protectedFiles.some(file=>file.includes('/'+required)),false,`${required} must stay public`);
  assert.ok(report.publicFiles.some(file=>file.includes('/'+required)),`${required} public chunk missing`);
 }
 for(const file of report.protectedFiles){await assert.rejects(access('dist/client/'+file));for(const headers of [{},forgedOwner]){const r=await get('/'+file,headers);assert.equal(r.status,403,file);assert.match(r.headers.get('cache-control'),/no-store/);await r.arrayBuffer();}}
 for(const file of report.publicFiles.filter(x=>x.endsWith('.js'))){const r=await get('/'+file);assert.equal(r.status,200,`public ${file}`);await r.arrayBuffer()}
});

test('only allowlisted free audio collections are public; every other current prefix is private',async()=>{
 const freePrefixes=p.freeAudioPrefixes;
 const report=JSON.parse(await readFile('dist/.openai/client-protection-report.json','utf8'));
 const privateMedia=(await import(pathToFileURL('dist/server/private-media-assets.js').href+`?test=${Date.now()}`)).default;
 const directories=(await readdir('public/audio',{withFileTypes:true})).filter(item=>item.isDirectory()).map(item=>item.name);
 const expectedProtected=[];
 const expectedPublic=[];
 for(const prefix of directories){
  const files=(await readdir(`public/audio/${prefix}`)).filter(name=>name.endsWith('.mp3'));
  assert.ok(files.length,`missing mp3 in ${prefix}`);
  for(const file of files)(freePrefixes.has(prefix)?expectedPublic:expectedProtected).push(`/audio/${prefix}/${file}`);
  const response=await get(`/audio/${prefix}/${files[0]}`);
  assert.equal(response.status,freePrefixes.has(prefix)?200:403,prefix);
  assert.match(response.headers.get('cache-control')||'',freePrefixes.has(prefix)?/public/:/private, no-store/,prefix);
  await response.arrayBuffer();
 }
 assert.deepEqual(new Set(report.protectedMediaFiles),new Set(expectedProtected));
 assert.deepEqual(new Set(report.publicMediaFiles),new Set(expectedPublic));
 assert.equal(report.encryptedMediaFiles.length,expectedProtected.length);
 assert.equal(Object.keys(privateMedia.assets).length,expectedProtected.length);
 const key=Buffer.from(privateMedia.key,'base64');
 for(const publicPath of expectedProtected){
  await assert.rejects(access(`dist/client${publicPath}`));
  const record=privateMedia.assets[publicPath];
  assert.ok(record,publicPath);
  assert.ok(report.encryptedMediaFiles.includes(record.assetPath),record.assetPath);
  const encrypted=await readFile(`dist/client${record.assetPath}`);
  const decipher=createDecipheriv('aes-256-gcm',key,Buffer.from(record.iv,'base64'));
  decipher.setAuthTag(encrypted.subarray(encrypted.length-16));
  const plain=Buffer.concat([decipher.update(encrypted.subarray(0,-16)),decipher.final()]);
  assert.deepEqual(plain,await readFile(`public${publicPath}`),publicPath);
  assert.equal(record.size,plain.length,publicPath);
 }
 for(const publicPath of expectedPublic)await access(`dist/client${publicPath}`);
 const head=await fetch(root+'/audio/edificio-voces/1b-andres.mp3',{method:'HEAD',redirect:'manual'});
 assert.equal(head.status,403);
 assert.match(head.headers.get('cache-control')||'',/private, no-store/);
});
