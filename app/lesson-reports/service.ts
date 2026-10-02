import { conversationFamilyByLessonId } from '../conversation-families/catalog';
import { lessons } from '../lesson-catalog';
import { localLessonPath } from '../access-policy';
import { reportCategories,reportStatuses,type ReportRow } from './contracts';
export class ReportError extends Error { constructor(message:string,public status=400){super(message);} }
const text = (v:unknown,max:number) => typeof v==='string' ? v.trim().slice(0,max) : '';
export function validateReport(value:unknown) {
 if(!value || typeof value!=='object') throw new ReportError('Reporte no válido.');
 const v=value as Record<string,unknown>;
 const lesson=lessons.find(l=>l.id===v.lessonId);
 if(!lesson) throw new ReportError('Clase no válida.');
 const message=typeof v.message==='string'?v.message.trim():'';
 if(message.length<3 || message.length>2000) throw new ReportError('Escribí entre 3 y 2000 caracteres.');
 const level=text(v.level,10)||lesson.level;
 if(!(conversationFamilyByLessonId.get(lesson.id)?.availableLevels||lesson.levels||[lesson.level]).includes(level)) throw new ReportError('Nivel no válido.');
 const path=localLessonPath(lesson);
 const url=text(v.url,1000);
 if(!path || !url.startsWith('/') || url.startsWith('//') || url.includes('\\')) throw new ReportError('URL no válida.');
 const parsed=new URL(url,'https://spanishcue.local');
 if(parsed.origin!=='https://spanishcue.local'||(parsed.pathname!==path && !(parsed.pathname==='/'&&!lesson.path&&!lesson.special&&parsed.searchParams.get('lessonId')===String(lesson.id)))) throw new ReportError('URL no válida.');
 const category=v.category===undefined||v.category===''?'Otro':v.category;
 if(!reportCategories.includes(category as typeof reportCategories[number])) throw new ReportError('Categoría no válida.');
 const rawContext=v.context && typeof v.context==='object'?v.context as Record<string,unknown>:{};
 const context=Object.fromEntries(['sectionId','activityId','questionId','blockId','sectionLabel','viewport','userAgent'].map(k=>[k,text(rawContext[k],300)]).filter(([,v])=>v));
 // Only useful navigation state. Never persist tokens or arbitrary query data.
 const query=new URLSearchParams(); if(parsed.pathname==='/')query.set('lessonId',String(lesson.id)); if(parsed.searchParams.has('level'))query.set('level',level);
 return {lesson,message,level,url:parsed.pathname+(query.size?'?'+query.toString():''),category:String(category),context};
}
export async function createReport(db:D1Database,userId:string,email:string|null,value:unknown) {
 const r=validateReport(value); const now=new Date().toISOString(); const cutoff=new Date(Date.now()-600_000).toISOString(); const key=(value as Record<string,unknown>).requestKey;
 let id=crypto.randomUUID() as string;
 if(key!==undefined){if(typeof key!=='string'||!/^[a-zA-Z0-9_-]{16,100}$/.test(key))throw new ReportError('Clave de envío no válida.');
 const digest=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(JSON.stringify([userId,key,r.lesson.id,r.level,r.url,r.message,r.category,r.context])));id='report-'+Array.from(new Uint8Array(digest),b=>b.toString(16).padStart(2,'0')).join('');
 const existing=await db.prepare('SELECT id FROM lesson_reports WHERE id=? AND user_id=?').bind(id,userId).first();if(existing)return id;}
 const result=await db.prepare(`INSERT INTO lesson_reports (id,user_id,user_email,lesson_id,lesson_slug,lesson_title,lesson_category,level,url,message,category,context_json,created_at,updated_at)
 SELECT ?,?,?,?,?,?,?,?,?,?,?,?,?,? WHERE (SELECT count(*) FROM lesson_reports WHERE user_id=? AND created_at>=?) < 5 ON CONFLICT(id) DO NOTHING`).bind(id,userId,email,r.lesson.id,localLessonPath(r.lesson)!,r.lesson.title,r.lesson.category,r.level,r.url,r.message,r.category,JSON.stringify(r.context),now,now,userId,cutoff).run();
 if(!result.meta.changes){const existing=await db.prepare('SELECT id FROM lesson_reports WHERE id=? AND user_id=?').bind(id,userId).first();if(existing)return id;}
 if(!result.meta.changes)throw new ReportError('Ya enviaste varios reportes. Probá nuevamente en unos minutos.',429);
 return id;
}
export async function listReports(db:D1Database,url:URL) {
 const status=url.searchParams.get('status')||''; const category=url.searchParams.get('category')||''; const lessonId=Number(url.searchParams.get('lessonId'))||0;
 if(status&&!reportStatuses.includes(status as typeof reportStatuses[number]))throw new ReportError('Estado no válido.');
 const result=await db.prepare(`SELECT * FROM lesson_reports WHERE (?='' OR status=?) AND (?='' OR category=?) AND (?=0 OR lesson_id=?) ORDER BY created_at DESC LIMIT 200`).bind(status,status,category,category,lessonId,lessonId).all<ReportRow>();
 return result.results;
}
export async function updateReport(db:D1Database,value:unknown) {
 if(!value||typeof value!=='object')throw new ReportError('Formato no válido.'); const v=value as Record<string,unknown>;
 const id=text(v.id,100); const status=text(v.status,30); const resolution=typeof v.resolution==='string'?v.resolution.trim():'';
 if(!id||!reportStatuses.includes(status as typeof reportStatuses[number])||resolution.length>2000)throw new ReportError('Estado o resolución no válidos.');
 const now=new Date().toISOString(); const result=await db.prepare('UPDATE lesson_reports SET status=?,resolution=?,updated_at=?,resolved_at=? WHERE id=?').bind(status,resolution,now,status==='resolved'?now:null,id).run();
 if(!result.meta.changes)throw new ReportError('No encontramos el reporte.',404);
}
export async function readReportJson(request:Request) {
 if(!request.headers.get('content-type')?.startsWith('application/json'))throw new ReportError('Formato no válido.',415);
 if(Number(request.headers.get('content-length')||0)>12000)throw new ReportError('Solicitud demasiado grande.',413);
 const raw=await request.text();if(raw.length>12000)throw new ReportError('Solicitud demasiado grande.',413);
 try{return JSON.parse(raw);}catch{throw new ReportError('Formato no válido.');}
}
export function requireReportOrigin(request:Request) {if(request.headers.get('origin')!==new URL(request.url).origin)throw new ReportError('Origen no válido.',403);}
export function reportErrorResponse(error:unknown) {return Response.json({error:error instanceof ReportError?error.message:'No pudimos completar la operación. Intentá nuevamente.'},{status:error instanceof ReportError?error.status:503,headers:{'cache-control':'private, no-store'}});}
