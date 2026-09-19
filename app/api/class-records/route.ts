import { getStudentTrackerService } from '../../../db/student-tracker';
import { authenticatedOwnerId, readTrackerJson, requireSameOrigin, trackerErrorResponse } from '../../student-tracker/server';

export async function GET(request: Request) {
  try {
    const ownerId = authenticatedOwnerId(request);
    const studentId = new URL(request.url).searchParams.get('studentId') || undefined;
    const records = await getStudentTrackerService().listClassRecords(ownerId, studentId);
    return Response.json({ records });
  } catch (error) { return trackerErrorResponse(error); }
}

export async function POST(request: Request) {
  try {
    requireSameOrigin(request);
    const ownerId = authenticatedOwnerId(request);
    const body = await readTrackerJson(request) as Record<string, unknown>;
    const record = await getStudentTrackerService().createClassRecord(ownerId, body, { allowDuplicate: body.allowDuplicate === true });
    return Response.json({ record }, { status: 201 });
  } catch (error) { return trackerErrorResponse(error); }
}
