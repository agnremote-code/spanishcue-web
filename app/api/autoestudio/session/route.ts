import { shareEnvironment } from '../../../autoestudio/share/runtime';
import { sessionResponse, shareError } from '../../../autoestudio/share/server';
export async function GET(request: Request) {
  try { return await sessionResponse(request,shareEnvironment); } catch(error) { return shareError(error); }
}
