import { getStudentTrackerService } from '../../../../db/student-tracker';
import { authenticatedOwnerId, trackerErrorResponse } from '../../../student-tracker/server';

export async function GET(request: Request) {
  try {
    const ownerId = authenticatedOwnerId(request);
    const csv = await getStudentTrackerService().exportCsv(ownerId);
    return new Response(csv, {
      headers: {
        'content-type': 'text/csv; charset=utf-8',
        'content-disposition': 'attachment; filename="spanishcue-mis-alumnos.csv"',
        'cache-control': 'private, no-store',
      },
    });
  } catch (error) { return trackerErrorResponse(error); }
}
