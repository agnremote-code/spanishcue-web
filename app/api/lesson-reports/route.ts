import { env } from 'cloudflare:workers';
import { getUserSessionFromHeaders, fullAccessFromHeaders, isFreeLesson } from '../../access-policy';
import { createReport,readReportJson,requireReportOrigin,reportErrorResponse,ReportError,validateReport } from '../../lesson-reports/service';
export const dynamic='force-dynamic';
export async function POST(request:Request) {
 try {
  const session=getUserSessionFromHeaders(request.headers);
  if(!session.userId)throw new ReportError('Ingresá para enviar un reporte.',401);
  requireReportOrigin(request);const value=await readReportJson(request);const {lesson}=validateReport(value);
  if(!fullAccessFromHeaders(request.headers)&&!isFreeLesson(lesson.id))throw new ReportError('No tenés acceso a esta clase.',403);
  const id=await createReport(env.DB,session.userId,session.email,value);
  return Response.json({id},{status:201,headers:{'cache-control':'private, no-store'}});
 }catch(error){return reportErrorResponse(error);}
}
