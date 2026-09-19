import { getStudentTrackerService } from '../../../../db/student-tracker';
import { authenticatedOwnerId, readTrackerJson, requireSameOrigin, trackerErrorResponse } from '../../../student-tracker/server';

type Context = { params: Promise<{ id: string }> };

export async function PATCH(request: Request, { params }: Context) {
  try {
    requireSameOrigin(request);
    const ownerId = authenticatedOwnerId(request);
    const { id } = await params;
    const record = await getStudentTrackerService().updateClassRecord(ownerId, id, await readTrackerJson(request));
    return Response.json({ record });
  } catch (error) { return trackerErrorResponse(error); }
}

export async function DELETE(request: Request, { params }: Context) {
  try {
    requireSameOrigin(request);
    const ownerId = authenticatedOwnerId(request);
    const { id } = await params;
    await getStudentTrackerService().deleteClassRecord(ownerId, id);
    return new Response(null, { status: 204 });
  } catch (error) { return trackerErrorResponse(error); }
}
