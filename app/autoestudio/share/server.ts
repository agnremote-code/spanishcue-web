import { getUserSessionFromHeaders } from '../../access-policy';
import { SECTION_ORDER, type SectionKey } from '../curriculum/types';
import { levelProgress, levelWeekIds, requiredSectionsDone, type ModuleProgress, type ProgressState } from '../progress/model';

// Imported only by route handlers and the Worker. Never import from a client component.
export type ShareEnvironment = { DB: D1Database; AUTOESTUDIO_SHARE_SECRET?: string };
export type ShareSession = { passId: string; learnerId: string; level: string; alias: string; revision: number };
type Pass = { id: string; owner_id: string; learner_id: string; level: string; revision: number; revoked_at: string | null; created_at: string; alias: string | null };
export const SHARE_COOKIE = '__Host-sc-autoestudio';
const levels = ['a1','a2','b1','b2','c1','c2'];
export const idPattern = /^[a-f0-9]{48}$/;
const encoder = new TextEncoder();
export class ShareError extends Error { constructor(public status: number, public code: string) { super(code); } }
export function fail(status: number, code: string): never { throw new ShareError(status, code); }
export function configured(env: ShareEnvironment) { if (!env.DB || !env.AUTOESTUDIO_SHARE_SECRET || env.AUTOESTUDIO_SHARE_SECRET.length < 32) fail(503, 'share_unavailable'); }
const hex = (bytes: Uint8Array) => Array.from(bytes, b => b.toString(16).padStart(2,'0')).join('');
export const randomId = () => hex(crypto.getRandomValues(new Uint8Array(24)));
async function signature(env: ShareEnvironment, message: string) {
  configured(env);
  const key = await crypto.subtle.importKey('raw', encoder.encode(env.AUTOESTUDIO_SHARE_SECRET), {name:'HMAC',hash:'SHA-256'}, false, ['sign']);
  return hex(new Uint8Array(await crypto.subtle.sign('HMAC', key, encoder.encode(message))));
}
async function signed(env: ShareEnvironment, payload: string) { return `${payload}.${await signature(env,payload)}`; }
async function authentic(env: ShareEnvironment, token: string) {
  if (token.length > 300 || !/^[a-z0-9.]+$/.test(token)) return false;
  const split = token.lastIndexOf('.');
  if (split < 0) return false;
  const actual = token.slice(split+1), expected = await signature(env,token.slice(0,split));
  if (actual.length !== expected.length) return false;
  let difference = 0;
  for (let i=0;i<expected.length;i++) difference |= actual.charCodeAt(i)^expected.charCodeAt(i);
  return difference === 0;
}
async function passById(env: ShareEnvironment, id: string) {
  return env.DB.prepare('SELECT p.*, l.alias FROM autoestudio_passes p JOIN autoestudio_learners l ON l.id=p.learner_id AND l.owner_id=p.owner_id WHERE p.id=?').bind(id).first<Pass>();
}
export async function passToken(env: ShareEnvironment, pass: Pass) { return signed(env,`v1.${pass.id}.${pass.level}.${pass.revision}`); }
async function resolveToken(env: ShareEnvironment, token: string, cookie: boolean) {
  if (!await authentic(env,token)) return null;
  const parts=token.split('.');
  if ((!cookie && (parts.length!==5 || parts[0]!=='v1')) || (cookie && (parts.length!==7 || !['s1','p1'].includes(parts[0])))) return null;
  const [,id,level,revision]=parts;
  if (!idPattern.test(id) || !levels.includes(level) || !/^[1-9]\d{0,8}$/.test(revision)) return null;
  if (cookie && (!/^\d{10}$/.test(parts[4]) || Number(parts[4])<Math.floor(Date.now()/1000))) return null;
  const pass=await passById(env,id);
  if (!pass || pass.revoked_at || pass.level!==level || pass.revision!==Number(revision)) return null;
  return {pass,pending:cookie && parts[0]==='p1'};
}
function cookieValue(header: string | null) {
  const values=(header??'').split(';').map(v=>v.trim()).filter(v=>v.startsWith(`${SHARE_COOKIE}=`));
  return values.length===1 ? values[0].slice(SHARE_COOKIE.length+1) : '';
}
export async function shareCookieState(header: string | null, env: ShareEnvironment) {
  try { return await resolveToken(env,cookieValue(header),true); } catch { return null; }
}
function session(pass: Pass): ShareSession { return {passId:pass.id,learnerId:pass.learner_id,level:pass.level,alias:pass.alias!,revision:pass.revision}; }
export async function verifyShareSession(cookieHeader: string | null, env: ShareEnvironment): Promise<ShareSession|null> {
  const state=await shareCookieState(cookieHeader,env);
  return state && !state.pending && state.pass.alias ? session(state.pass) : null;
}
async function sessionCookie(env: ShareEnvironment, pass: Pass, pending: boolean) {
  const age=pending?1800:34_560_000;
  const token=await signed(env,`${pending?'p1':'s1'}.${pass.id}.${pass.level}.${pass.revision}.${Math.floor(Date.now()/1000)+age}.0`);
  return `${SHARE_COOKIE}=${token}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=${age}`;
}
export const privateHeaders = {'cache-control':'private, no-store','referrer-policy':'no-referrer','x-robots-tag':'noindex, nofollow'};
export function response(data: unknown, status=200, headers: Record<string,string>={}) { return Response.json(data,{status,headers:{...privateHeaders,...headers}}); }
export function shareError(error: unknown) { return response({error:error instanceof ShareError?error.code:'share_unavailable'},error instanceof ShareError?error.status:503); }
export function sameOrigin(request: Request) {
  const origin=request.headers.get('origin');
  if (request.headers.get('sec-fetch-site')==='cross-site' || !origin || origin!==new URL(request.url).origin) fail(403,'forbidden_origin');
}
export async function readJson(request: Request): Promise<Record<string,unknown>> {
  if (!request.headers.get('content-type')?.startsWith('application/json')) fail(415,'json_required');
  if (Number(request.headers.get('content-length'))>8192) fail(413,'payload_too_large');
  const reader=request.body?.getReader();
  if (!reader) fail(400,'invalid_json');
  let size=0; const chunks: Uint8Array[]=[];
  while (true) { const {value,done}=await reader.read(); if(done)break; size+=value.byteLength; if(size>8192){await reader.cancel();fail(413,'payload_too_large');} chunks.push(value); }
  const bytes=new Uint8Array(size);let offset=0;for(const chunk of chunks){bytes.set(chunk,offset);offset+=chunk.length;}
  try { const parsed=JSON.parse(new TextDecoder().decode(bytes)); if(!parsed || typeof parsed!=='object' || Array.isArray(parsed))fail(400,'invalid_json');return parsed; } catch { return fail(400,'invalid_json'); }
}
function readOrigin(request: Request) {
  const origin=request.headers.get('origin');
  if(request.headers.get('sec-fetch-site')==='cross-site' || (origin && origin!==new URL(request.url).origin))fail(403,'forbidden_origin');
}
export function teacher(request: Request) {
  readOrigin(request);
  const user=getUserSessionFromHeaders(request.headers);
  if(!user.isAuthenticated || !user.userId)fail(401,'sign_in_required');
  if(!user.isPro && !user.isOwner)fail(403,'pro_required');
  return user.userId;
}
/** Atomic distributed counters; 4096 rows maximum, IPs are never persisted. */
export async function rateLimit(env: ShareEnvironment, key: string, limit=120) {
  const digest=await signature(env,`rate:${key}`);
  const bucket=parseInt(digest.slice(0,6),16)%4096, window=Math.floor(Date.now()/60000);
  const row=await env.DB.prepare(`INSERT INTO autoestudio_rate_limits(bucket,window,hits) VALUES(?,?,1) ON CONFLICT(bucket) DO UPDATE SET hits=CASE WHEN window=excluded.window THEN hits+1 ELSE 1 END, window=excluded.window RETURNING hits`).bind(bucket,window).first<{hits:number}>();
  if(!row || row.hits>limit)fail(429,'rate_limited');
}
export async function redeem(request: Request, token: string, env: ShareEnvironment) {
  configured(env);
  await rateLimit(env,`redeem:${request.headers.get('cf-connecting-ip')??'unknown'}`,60);
  const state=await resolveToken(env,token,false);
  if(!state) return new Response(null,{status:303,headers:{...privateHeaders,location:'/autoestudio/claim?error=invalid','set-cookie':`${SHARE_COOKIE}=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0`}});
  const pending=!state.pass.alias;
  return new Response(null,{status:303,headers:{...privateHeaders,location:pending?'/autoestudio/claim':`/autoestudio/${state.pass.level}`,'set-cookie':await sessionCookie(env,state.pass,pending)}});
}
export async function sessionResponse(request: Request, env: ShareEnvironment) {
  readOrigin(request);
  const state=await shareCookieState(request.headers.get('cookie'),env);
  return response({session:state&&!state.pending&&state.pass.alias?session(state.pass):null,pending:Boolean(state?.pending),...(state?{level:state.pass.level}:{}),...(state?.pending?{pendingPass:{passId:state.pass.id,revision:state.pass.revision,level:state.pass.level}}:{})});
}
export async function claim(request: Request, env: ShareEnvironment) {
  sameOrigin(request);configured(env);
  const state=await shareCookieState(request.headers.get('cookie'),env);
  if(!state)fail(401,'invalid_pass');
  const data=await readJson(request);
  // Bind the displayed pending form to its original pass, before any D1 mutation.
  // Another tab may have replaced this browser's cookie since the form loaded.
  if(data.passId!==state.pass.id || data.revision!==state.pass.revision)fail(409,'session_changed');
  if(Object.keys(data).some(k=>!['alias','passId','revision'].includes(k)))fail(400,'invalid_alias');
  await rateLimit(env,`claim:${state.pass.id}`,20);
  const alias=typeof data.alias==='string'?data.alias.normalize('NFC').trim():'';
  if(Array.from(alias).length<2 || Array.from(alias).length>24 || !/^[\p{L}\p{N} _-]+$/u.test(alias) || !/\p{L}/u.test(alias) || /\d[\d _-]{5,}\d/.test(alias))fail(400,'invalid_alias');
  // Conditional update is the claim lock: concurrent clients always resolve the winner.
  await env.DB.prepare(`UPDATE autoestudio_learners SET alias=? WHERE id=? AND owner_id=? AND alias IS NULL AND EXISTS(SELECT 1 FROM autoestudio_passes WHERE id=? AND revision=? AND revoked_at IS NULL)`).bind(alias,state.pass.learner_id,state.pass.owner_id,state.pass.id,state.pass.revision).run();
  const pass=await passById(env,state.pass.id);
  if(!pass?.alias || pass.revoked_at || pass.revision!==state.pass.revision)fail(401,'invalid_pass');
  return response({session:session(pass)},200,{'set-cookie':await sessionCookie(env,pass,false)});
}
const publicPass=(p:Pass)=>({id:p.id,learnerId:p.learner_id,level:p.level,revision:p.revision,revokedAt:p.revoked_at,createdAt:p.created_at,alias:p.alias});
export async function listPasses(request: Request,env: ShareEnvironment) {
  const owner=teacher(request);configured(env);await rateLimit(env,`teacher:${owner}`);
  const passes=await env.DB.prepare('SELECT p.*,l.alias FROM autoestudio_passes p JOIN autoestudio_learners l ON l.id=p.learner_id AND l.owner_id=p.owner_id WHERE p.owner_id=? ORDER BY p.created_at DESC LIMIT 500').bind(owner).all<Pass>();
  const learners=await env.DB.prepare('SELECT id,alias,created_at AS createdAt FROM autoestudio_learners WHERE owner_id=? ORDER BY created_at DESC LIMIT 500').bind(owner).all();
  // One read of every week row this teacher's learners have; summaries are derived with the
  // same pure model the learner sees, so both sides always agree on what "done" means.
  const rows=await env.DB.prepare('SELECT g.learner_id,g.module_id,g.sections,g.last_section,g.completed_at,g.updated_at,g.started_at FROM autoestudio_progress g JOIN autoestudio_learners l ON l.id=g.learner_id WHERE l.owner_id=?').bind(owner).all<{learner_id:string;module_id:string;sections:string;last_section:SectionKey|null;completed_at:string|null;updated_at:string;started_at:string}>();
  const byLearner=new Map<string,typeof rows.results>();
  for(const row of rows.results){const list=byLearner.get(row.learner_id)??[];list.push(row);byLearner.set(row.learner_id,list);}
  const errors=await errorCounts(env,owner);
  return response({passes:passes.results.map(p=>({...publicPass(p),summary:p.alias?summarize(p.level,(byLearner.get(p.learner_id)??[]).filter(r=>r.module_id.startsWith(`${p.level}-`))):null,errors:errors.get(p.learner_id)??null})),learners:learners.results});
}
/** Per-learner error totals for the list; a missing history table never hides the list itself. */
async function errorCounts(env:ShareEnvironment,owner:string){
  const map=new Map<string,{total:number;corrected:number;recurrent:number;top:string|null}>();
  try{
    const rows=await env.DB.prepare('SELECT learner_id,category_label,COUNT(*) AS n,SUM(corrected_at IS NOT NULL) AS c,COUNT(DISTINCT module_id||exercise_id) AS a FROM homework_errors WHERE owner_id=? GROUP BY learner_id,category ORDER BY n DESC').bind(owner).all<{learner_id:string;category_label:string;n:number;c:number;a:number}>();
    for(const row of rows.results){const entry=map.get(row.learner_id)??{total:0,corrected:0,recurrent:0,top:null};entry.total+=row.n;entry.corrected+=row.c;if(row.a>1)entry.recurrent+=row.n;entry.top??=row.category_label;map.set(row.learner_id,entry);}
  }catch{/* History not released yet: the list keeps working without counts. */}
  return map;
}
function parseSections(raw:string):ModuleProgress['sections']{
  try{const value=JSON.parse(raw);return value&&typeof value==='object'&&!Array.isArray(value)?value:{};}catch{return {};}
}
function summarize(level:string,rows:{module_id:string;sections:string;last_section:SectionKey|null;completed_at:string|null;updated_at:string;started_at:string}[]){
  const state:ProgressState={version:1,modules:{}};
  let latest:(typeof rows)[number]|null=null;
  for(const row of rows){
    state.modules[row.module_id]={startedAt:row.started_at,sections:parseSections(row.sections),...(row.last_section?{lastSection:row.last_section}:{}),...(row.completed_at?{completedAt:row.completed_at}:{})};
    if(!latest || row.updated_at>latest.updated_at || (row.updated_at===latest.updated_at && row.module_id>latest.module_id))latest=row;
  }
  const p=levelProgress(state,levelWeekIds(level));
  return {started:p.started,completed:p.completed,inProgress:p.started-p.completed,percent:p.percent,sectionsCompleted:p.sectionsCompleted,sectionsTotal:p.sectionsTotal,coursePercent:p.coursePercent,
    lastModule:latest?.module_id??null,lastSection:latest?.last_section??null,lastModuleSections:latest?requiredSectionsDone(state.modules[latest.module_id]):0,lastActivity:latest?.updated_at??null};
}
export async function createPass(request: Request,env: ShareEnvironment) {
  sameOrigin(request);const owner=teacher(request);configured(env);await rateLimit(env,`mint:${owner}`,20);
  const data=await readJson(request);
  if(Object.keys(data).some(k=>!['level','learnerId'].includes(k)) || typeof data.level!=='string' || !levels.includes(data.level))fail(400,'invalid_level');
  const existing=data.learnerId;
  if(existing!==undefined && (typeof existing!=='string' || !idPattern.test(existing)))fail(400,'invalid_learner');
  if(existing && !await env.DB.prepare('SELECT id FROM autoestudio_learners WHERE id=? AND owner_id=?').bind(existing,owner).first())fail(404,'learner_not_found');
  const count=await env.DB.prepare('SELECT COUNT(*) AS n FROM autoestudio_passes WHERE owner_id=?').bind(owner).first<{n:number}>();
  if((count?.n??0)>=500)fail(409,'pass_limit');
  const id=randomId(), learnerId=existing??randomId(), now=new Date().toISOString();
  const statements=[];
  if(!existing)statements.push(env.DB.prepare('INSERT INTO autoestudio_learners(id,owner_id,created_at) VALUES(?,?,?)').bind(learnerId,owner,now));
  statements.push(env.DB.prepare('INSERT INTO autoestudio_passes(id,owner_id,learner_id,level,created_at) VALUES(?,?,?,?,?)').bind(id,owner,learnerId,data.level,now));
  await env.DB.batch(statements);
  const pass=(await passById(env,id))!;
  return response({pass:publicPass(pass),link:`${new URL(request.url).origin}/s/${await passToken(env,pass)}`},201);
}
export async function mutatePass(request: Request,id: string,env: ShareEnvironment) {
  sameOrigin(request);const owner=teacher(request);configured(env);await rateLimit(env,`mutate:${owner}`,60);
  const data=await readJson(request);
  if(Object.keys(data).some(k=>k!=='action') || !['rotate','revoke','copy'].includes(String(data.action)))fail(400,'invalid_action');
  if(!idPattern.test(id))fail(404,'pass_not_found');
  const pass=await passById(env,id);
  if(!pass || pass.owner_id!==owner)fail(404,'pass_not_found');
  if(data.action==='revoke') await env.DB.prepare('UPDATE autoestudio_passes SET revoked_at=COALESCE(revoked_at,?) WHERE id=? AND owner_id=?').bind(new Date().toISOString(),id,owner).run();
  else if(pass.revoked_at)fail(409,'pass_revoked');
  else if(data.action==='rotate')await env.DB.prepare('UPDATE autoestudio_passes SET revision=revision+1 WHERE id=? AND owner_id=? AND revoked_at IS NULL').bind(id,owner).run();
  const updated=(await passById(env,id))!;
  return response({pass:publicPass(updated),...(!updated.revoked_at?{link:`${new URL(request.url).origin}/s/${await passToken(env,updated)}`}:{})});
}
type ProgressRow = { module_id:string; started_at:string; updated_at:string; sections:string; last_section:SectionKey|null; completed_at:string|null; quiz_score:number|null; quiz_total:number|null; quiz_best:number|null; quiz_attempts:number|null; quiz_at:string|null };
async function progressFor(env: ShareEnvironment, learnerId:string, level?:string):Promise<ProgressState> {
  const rows=await env.DB.prepare(`SELECT * FROM autoestudio_progress WHERE learner_id=? ${level?'AND module_id LIKE ?':''} ORDER BY updated_at ASC,module_id ASC`).bind(...(level?[learnerId,`${level}-%`]:[learnerId])).all<ProgressRow>();
  const state:ProgressState={version:1,modules:{}};
  for(const row of rows.results){
    state.modules[row.module_id]={startedAt:row.started_at,updatedAt:row.updated_at,sections:parseSections(row.sections),...(row.last_section?{lastSection:row.last_section}:{}),...(row.completed_at?{completedAt:row.completed_at}:{}),...(row.quiz_score!==null?{quiz:{score:row.quiz_score,total:row.quiz_total!,best:row.quiz_best!,attempts:row.quiz_attempts!,at:row.quiz_at!}}:{})};
    state.lastModule=row.module_id;state.updatedAt=row.updated_at;
  }
  return state;
}
export async function getProgress(request:Request,env:ShareEnvironment){
  readOrigin(request);
  const identity=await verifyShareSession(request.headers.get('cookie'),env);
  if(!identity)fail(401,'invalid_pass');
  await rateLimit(env,`progress-read:${identity.passId}`);
  return response({session:identity,progress:await progressFor(env,identity.learnerId,identity.level)});
}
function structuralProgress(raw:unknown):ModuleProgress{
  if(!raw || typeof raw!=='object' || Array.isArray(raw))fail(400,'invalid_progress');
  const value=raw as Record<string,unknown>;
  // Drafts, recordings, raw answers and arbitrary identity properties are rejected.
  if(Object.keys(value).some(k=>!['startedAt','sections','lastSection','completedAt','quiz'].includes(k)))fail(400,'invalid_progress');
  if(!value.sections || typeof value.sections!=='object' || Array.isArray(value.sections))fail(400,'invalid_sections');
  const now=new Date().toISOString(), sections:ModuleProgress['sections']={};
  for(const [key,at] of Object.entries(value.sections)){
    if(!SECTION_ORDER.includes(key as SectionKey) || typeof at!=='string' || at.length>40 || !Number.isFinite(Date.parse(at)))fail(400,'invalid_sections');
    sections[key as SectionKey]=now;
  }
  if(value.lastSection!==undefined && !SECTION_ORDER.includes(value.lastSection as SectionKey))fail(400,'invalid_section');
  const clean:ModuleProgress={startedAt:now,sections,lastSection:value.lastSection as SectionKey|undefined};
  if(value.quiz!==undefined){
    const q=value.quiz as Record<string,unknown>;
    if(!q || typeof q!=='object' || Object.keys(q).some(k=>!['score','total','best','attempts','at'].includes(k)))fail(400,'invalid_quiz');
    if(!Number.isInteger(q.score) || !Number.isInteger(q.total) || Number(q.total)<1 || Number(q.total)>100 || Number(q.score)<0 || Number(q.score)>Number(q.total))fail(400,'invalid_quiz');
    if(!Number.isInteger(q.best) || Number(q.best)<Number(q.score) || Number(q.best)>Number(q.total) || !Number.isInteger(q.attempts) || Number(q.attempts)<1 || Number(q.attempts)>10000)fail(400,'invalid_quiz');
    clean.quiz={score:Number(q.score),total:Number(q.total),best:Number(q.best),attempts:Number(q.attempts),at:now};
  }
  return clean;
}
export async function putProgress(request:Request,env:ShareEnvironment){
  sameOrigin(request);
  const identity=await verifyShareSession(request.headers.get('cookie'),env);
  if(!identity)fail(401,'invalid_pass');
  await rateLimit(env,`progress-write:${identity.passId}`);
  const data=await readJson(request);
  if(Object.keys(data).some(k=>!['passId','revision','moduleId','progress'].includes(k)) || data.passId!==identity.passId || data.revision!==identity.revision)fail(409,'session_changed');
  if(typeof data.moduleId!=='string' || !new RegExp(`^${identity.level}-(0[1-9]|1[0-9]|20)$`).test(data.moduleId))fail(403,'outside_level');
  const progress=structuralProgress(data.progress),now=new Date().toISOString(),q=progress.quiz;
  // SQL merges section keys atomically; concurrent devices cannot erase completion.
  // Existing keys win the patch, so the first time a section was finished is kept.
  // EXISTS also rechecks revision/revocation at the exact write, after async parsing.
  await env.DB.prepare(`INSERT INTO autoestudio_progress(learner_id,module_id,started_at,updated_at,sections,last_section,quiz_score,quiz_total,quiz_best,quiz_attempts,quiz_at)
    SELECT ?,?,?,?,?,?,?,?,?,?,? WHERE EXISTS(SELECT 1 FROM autoestudio_passes WHERE id=? AND learner_id=? AND revision=? AND revoked_at IS NULL)
    ON CONFLICT(learner_id,module_id) DO UPDATE SET
    updated_at=excluded.updated_at,sections=json_patch(excluded.sections,autoestudio_progress.sections),last_section=COALESCE(excluded.last_section,autoestudio_progress.last_section),
    quiz_score=COALESCE(excluded.quiz_score,autoestudio_progress.quiz_score),quiz_total=COALESCE(excluded.quiz_total,autoestudio_progress.quiz_total),
    quiz_best=CASE WHEN excluded.quiz_best IS NULL THEN autoestudio_progress.quiz_best WHEN autoestudio_progress.quiz_total=excluded.quiz_total THEN MAX(COALESCE(autoestudio_progress.quiz_best,0),excluded.quiz_best) ELSE excluded.quiz_best END,
    quiz_attempts=CASE WHEN excluded.quiz_attempts IS NULL THEN autoestudio_progress.quiz_attempts ELSE MAX(COALESCE(autoestudio_progress.quiz_attempts,0),excluded.quiz_attempts) END,quiz_at=COALESCE(excluded.quiz_at,autoestudio_progress.quiz_at)
    `).bind(identity.learnerId,data.moduleId,now,now,JSON.stringify(progress.sections),progress.lastSection??null,q?.score??null,q?.total??null,q?.best??null,q?.attempts??null,q?.at??null,identity.passId,identity.learnerId,identity.revision).run();
  // Derived completion cannot be forged using a completedAt flag.
  const required=SECTION_ORDER.filter(s=>s!=='complete').map(s=>`json_extract(sections,'$.${s}') IS NOT NULL`).join(' AND ');
  await env.DB.prepare(`UPDATE autoestudio_progress SET completed_at=COALESCE(completed_at,?) WHERE learner_id=? AND module_id=? AND ${required}`).bind(now,identity.learnerId,data.moduleId).run();
  if(!await verifyShareSession(request.headers.get('cookie'),env))fail(401,'invalid_pass');
  return response({session:identity,progress:await progressFor(env,identity.learnerId,identity.level)});
}
export async function learnerDetail(request:Request,id:string,env:ShareEnvironment){
  const owner=teacher(request);configured(env);await rateLimit(env,`teacher:${owner}`);
  if(!idPattern.test(id))fail(404,'learner_not_found');
  const learner=await env.DB.prepare('SELECT id,alias,created_at AS createdAt FROM autoestudio_learners WHERE id=? AND owner_id=?').bind(id,owner).first();
  if(!learner)fail(404,'learner_not_found');
  const passes=await env.DB.prepare('SELECT p.*,l.alias FROM autoestudio_passes p JOIN autoestudio_learners l ON l.id=p.learner_id WHERE p.owner_id=? AND p.learner_id=? ORDER BY p.created_at DESC').bind(owner,id).all<Pass>();
  return response({learner,passes:passes.results.map(publicPass),progress:await progressFor(env,id)});
}
