import { updateLessonReport } from '../../../../../db/lesson-reports';
import { readReportJson, reportErrorResponse, reportResponse, requireReportIdentity, requireReportMutation, validateReportPatch } from '../../../../lesson-reports/server';
export async function PATCH(request:Request,{params}:{params:Promise<{id:string}>}) {
  try { const session=requireReportIdentity(request,true);requireReportMutation(request);const {id}=await params;
    return reportResponse(await updateLessonReport(id,session.userId!,validateReportPatch(await readReportJson(request))));
  }catch(error){return reportErrorResponse(error)}
}
