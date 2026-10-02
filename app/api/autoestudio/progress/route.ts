import { shareEnvironment } from '../../../autoestudio/share/runtime';
import { getProgress, putProgress, shareError } from '../../../autoestudio/share/server';
export async function GET(request: Request) {
  try { return await getProgress(request,shareEnvironment); } catch(error) { return shareError(error); }
}
export async function PUT(request: Request) {
  try { return await putProgress(request,shareEnvironment); } catch(error) { return shareError(error); }
}
