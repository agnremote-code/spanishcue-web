import { listLessonReports } from '../../../../db/lesson-reports';
import { reportStatuses, ReportError } from '../../../lesson-reports/contracts';
import { reportErrorResponse, reportResponse, requireReportIdentity } from '../../../lesson-reports/server';
export async function GET(request: Request) {
  try {
    requireReportIdentity(request,true);
    const search=new URL(request.url).searchParams,status=search.get('status')||'pending';
    if (!['all','pending',...reportStatuses].includes(status)) throw new ReportError('El filtro no es válido.');
    const limit=Number(search.get('limit')||30),offset=Number(search.get('offset')||0);
    if (!Number.isInteger(limit)||limit<1||limit>100||!Number.isInteger(offset)||offset<0||offset>100000) throw new ReportError('La página no es válida.');
    return reportResponse(await listLessonReports(status,limit,offset));
  }catch(error){return reportErrorResponse(error)}
}
