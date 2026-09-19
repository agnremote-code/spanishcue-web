import { getStudentTrackerService } from '../../../db/student-tracker';
import { authenticatedOwnerId, readTrackerJson, requireSameOrigin, trackerErrorResponse } from '../../student-tracker/server';

export async function GET(request: Request) {
  try {
    return Response.json({ students: await getStudentTrackerService().listStudents(authenticatedOwnerId(request)) });
  } catch (error) { return trackerErrorResponse(error); }
}

export async function POST(request: Request) {
  try {
    requireSameOrigin(request);
    const ownerId = authenticatedOwnerId(request);
    const student = await getStudentTrackerService().createStudent(ownerId, await readTrackerJson(request));
    return Response.json({ student }, { status: 201 });
  } catch (error) { return trackerErrorResponse(error); }
}
