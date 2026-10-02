import { createLessonReport } from '../../../db/lesson-reports';
import { readReportJson, reportErrorResponse, reportResponse, requireReportIdentity, requireReportMutation, validateReport } from '../../lesson-reports/server';
export async function POST(request: Request) {
  try {
    requireReportIdentity(request);requireReportMutation(request);
    const result=await createLessonReport(validateReport(request,await readReportJson(request)));
    return reportResponse({id:result.id,createdAt:result.createdAt},result.duplicate?200:201);
  } catch(error) {return reportErrorResponse(error)}
}
