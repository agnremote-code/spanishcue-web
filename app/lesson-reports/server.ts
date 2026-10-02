import { env } from 'cloudflare:workers';
import { getUserSessionFromHeaders, ownerFromHeaders, isFreeLesson, localLessonPath } from '../access-policy';
import { lessons } from '../lesson-catalog';
import { conversationFamilyByLessonId } from '../conversation-families/catalog';
import { reportCategories, reportStatuses, ReportError, type ReportCategory, type ReportContext, type ReportStatus } from './contracts';

export function requireReportIdentity(request: Request, admin = false) {
  const session = getUserSessionFromHeaders(request.headers);
  if (admin && (!session.isAuthenticated || !ownerFromHeaders(request.headers))) throw new ReportError('Acceso exclusivo del propietario.',403,'forbidden');
  if (!session.isAuthenticated || !session.userId) throw new ReportError('Ingresá para enviar tu reporte.',401,'unauthenticated');
  return session;
}
export function requireReportMutation(request: Request) {
  if ((env as {SPANISHCUE_WRITE_FREEZE?:string}).SPANISHCUE_WRITE_FREEZE === 'true') throw new ReportError('Estamos haciendo mantenimiento. Tu texto sigue acá; probá de nuevo en unos minutos.',503,'maintenance');
  const origin = request.headers.get('origin');
  if (origin !== new URL(request.url).origin) throw new ReportError('Origen de solicitud no permitido.',403,'forbidden_origin');
}
export async function readReportJson(request: Request): Promise<Record<string,unknown>> {
  if (Number(request.headers.get('content-length')||0)>16384) throw new ReportError('El reporte es demasiado grande.',413,'payload_too_large');
  const body = await request.text();
  if (new TextEncoder().encode(body).byteLength>16384) throw new ReportError('El reporte es demasiado grande.',413,'payload_too_large');
  try { const parsed = JSON.parse(body); if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) throw new Error(); return parsed; }
  catch { throw new ReportError('La solicitud no es válida.'); }
}
function short(value: unknown, max: number, field: string, required = false): string | null {
  if (value === undefined || value === null || value === '') { if (required) throw new ReportError(`Falta ${field}.`); return null; }
  if (typeof value !== 'string' || value.length>max || /[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/.test(value)) throw new ReportError(`Revisá ${field}.`);
  const result=value.trim();if (required&&!result) throw new ReportError(`Falta ${field}.`);return result||null;
}

export function validateReport(request: Request, payload: Record<string,unknown>) {
  const session = requireReportIdentity(request);
  const seed = lessons.find(item=>item.id===payload.lessonId);
  const family = seed ? conversationFamilyByLessonId.get(seed.id) : undefined;
  const lesson = seed ? {...seed,levels:family?.availableLevels||seed.levels} : undefined;
  if (!lesson) throw new ReportError('La clase no existe.');
  if (!session.isPro && !isFreeLesson(lesson.id)) throw new ReportError('No tenés acceso a esta clase.',403,'lesson_access');
  const message=short(payload.message,3000,'el texto del reporte',true)!;
  if (message.length<5) throw new ReportError('Contanos un poquito más (al menos 5 caracteres).');
  const category = payload.category ?? 'other';
  if (!reportCategories.includes(category as ReportCategory)) throw new ReportError('Elegí una categoría válida.');
  const requestKey=short(payload.requestKey,80,'la referencia del envío',true)!;
  if (!/^[a-zA-Z0-9_-]{8,80}$/.test(requestKey)) throw new ReportError('La referencia del envío no es válida.');
  if (payload.context!==undefined && (!payload.context || typeof payload.context!=='object' || Array.isArray(payload.context))) throw new ReportError('El contexto no es válido.');
  const raw=(payload.context||{}) as Record<string,unknown>;
  const canonicalPath=localLessonPath(lesson);
  if (!canonicalPath) throw new ReportError('Esta clase no admite reportes.');
  const level=short(raw.level,16,'el nivel')||lesson.level;
  if (!(lesson.levels||[lesson.level]).includes(level)) throw new ReportError('El nivel no corresponde a esta clase.');
  const routePath=short(raw.routePath,250,'la ruta')||canonicalPath;
  // Library inline viewers live on /; special lessons must use their catalog route.
  if (routePath!==canonicalPath && !(routePath==='/'&&!lesson.path&&!lesson.special)) throw new ReportError('La ruta no corresponde a esta clase.');
  let pageUrl = new URL(canonicalPath,request.url).href;
  if (raw.pageUrl!==undefined) {
    const supplied=short(raw.pageUrl,2000,'la URL',true)!;
    let target: URL;try {target=new URL(supplied,request.url)} catch {throw new ReportError('La URL no es válida.')}
    if (target.origin!==new URL(request.url).origin||target.pathname!==routePath) throw new ReportError('La URL no corresponde a la clase.');
    const safe=new URL(routePath,request.url);
    if (raw.level) safe.searchParams.set('level',level);
    const lang=target.searchParams.get('lang');if(lang==='es'||lang==='en')safe.searchParams.set('lang',lang);
    // Never retain query tokens, email, fragment content or campaign identifiers.
    pageUrl=safe.href;
  }
  const context: ReportContext = {sectionId:short(raw.sectionId,160,'la sección'),activityId:short(raw.activityId,160,'la actividad'),questionId:short(raw.questionId,160,'la pregunta'),componentId:short(raw.componentId,160,'el componente'),locationLabel:short(raw.locationLabel,180,'la ubicación'),level,routePath};
  if (raw.viewport && typeof raw.viewport==='object') {
    const size=raw.viewport as {width:unknown;height:unknown};
    if (Number.isInteger(size.width)&&Number.isInteger(size.height)&&Number(size.width)>0&&Number(size.height)>0&&Number(size.width)<20000&&Number(size.height)<20000) context.viewport={width:Number(size.width),height:Number(size.height)};
  }
  // Deployment reference comes from the server environment, never the browser.
  context.build=(env as {SPANISHCUE_DEPLOYMENT?:string}).SPANISHCUE_DEPLOYMENT?.slice(0,120)||null;
  return {session,lesson,canonicalPath,message,category:category as ReportCategory,requestKey,level,routePath,pageUrl,context};
}
export function validateReportPatch(payload: Record<string,unknown>) {
  if (!reportStatuses.includes(payload.status as ReportStatus)) throw new ReportError('Elegí un estado válido.');
  return {status:payload.status as ReportStatus,resolution:short(payload.resolution,3000,'la resolución'),changeReference:short(payload.changeReference,250,'la referencia del cambio')};
}
export function reportResponse(body: unknown, status=200) { return Response.json(body,{status,headers:{'Cache-Control':'private, no-store'}}); }
export function reportErrorResponse(error: unknown) {
  if (error instanceof ReportError) return reportResponse({error:error.message,code:error.code},error.status);
  // Do not log report contents or identifiers.
  console.error('Lesson report storage unavailable');
  return reportResponse({error:'No pudimos guardar el reporte. Tu texto sigue acá; intentá de nuevo.',code:'storage_unavailable'},503);
}
