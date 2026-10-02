import { env } from 'cloudflare:workers';
import type { LessonReportRow } from '../app/lesson-reports/contracts';
import { ReportError } from '../app/lesson-reports/contracts';
import type { validateReport, validateReportPatch } from '../app/lesson-reports/server';
const db = () => { if (!env.DB) throw new Error('DB unavailable'); return env.DB; };

export async function createLessonReport(input: ReturnType<typeof validateReport>) {
  const database=db();
  const existing=await database.prepare('SELECT id, created_at FROM lesson_reports WHERE user_id = ? AND request_key = ?').bind(input.session.userId,input.requestKey).first<{id:string;created_at:string}>();
  if(existing) return {id:existing.id,createdAt:existing.created_at,duplicate:true};
  const id=crypto.randomUUID(),now=new Date().toISOString(),cutoff=new Date(Date.now()-3600000).toISOString();
  const {lesson,session,context}=input;
  // A single serialized D1 statement makes the rolling cap atomic, even across Worker instances.
  const inserted=await database.prepare(`INSERT INTO lesson_reports
    (id,created_at,updated_at,user_id,account_id,reporter_email,request_key,lesson_id,lesson_slug,lesson_title,lesson_level,lesson_category,
     section_id,activity_id,question_id,component_id,category,issue_type,message,page_url,route_path,context_json)
    SELECT ?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?
    WHERE (SELECT COUNT(*) FROM lesson_reports WHERE user_id = ? AND created_at > ?) < 5
    ON CONFLICT(user_id,request_key) DO NOTHING`).bind(id,now,now,session.userId,session.accountId,session.email,input.requestKey,lesson.id,input.canonicalPath.slice(1),lesson.title,input.level,lesson.category,
    context.sectionId||null,context.activityId||null,context.questionId||null,context.componentId||null,input.category,input.category==='technical'?'technical':input.category==='suggestion'?'improvement':'content',input.message,input.pageUrl,input.routePath,JSON.stringify(context),session.userId,cutoff).run();
  if(!inserted.meta.changes) {
    const retry=await database.prepare('SELECT id, created_at FROM lesson_reports WHERE user_id = ? AND request_key = ?').bind(session.userId,input.requestKey).first<{id:string;created_at:string}>();
    if(retry) return {id:retry.id,createdAt:retry.created_at,duplicate:true};
    throw new ReportError('Ya recibimos varios reportes tuyos. Probá de nuevo dentro de una hora.',429,'rate_limited');
  }
  return {id,createdAt:now,duplicate:false};
}
export async function listLessonReports(status: string, limit: number, offset: number) {
  const where=status==='all'?'':status==='pending'?"WHERE status IN ('new','reviewing')":'WHERE status = ?';
  const args: (string|number)[]=status==='all'||status==='pending'?[]:[status];
  const result=await db().prepare(`SELECT * FROM lesson_reports ${where} ORDER BY created_at DESC,id DESC LIMIT ? OFFSET ?`).bind(...args,limit+1,offset).all<LessonReportRow>();
  return {reports:result.results.slice(0,limit),nextOffset:result.results.length>limit?offset+limit:null};
}
export async function updateLessonReport(id: string, actorId: string, patch: ReturnType<typeof validateReportPatch>) {
  const now=new Date().toISOString(),resolved=patch.status==='resolved';
  const result=await db().prepare(`UPDATE lesson_reports SET status=?,resolution=?,change_reference=?,resolved_at=?,resolved_by=?,updated_at=? WHERE id=?`).bind(patch.status,patch.resolution,patch.changeReference,resolved?now:null,resolved?actorId:null,now,id).run();
  if(!result.meta.changes) throw new ReportError('Este reporte no existe.',404,'not_found');
  return {id,status:patch.status};
}
