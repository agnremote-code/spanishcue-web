import { shareEnvironment } from '../../../autoestudio/share/runtime';
import { shareError } from '../../../autoestudio/share/server';
import { recordEvent } from '../../../autoestudio/errors/server';
export async function POST(request: Request) {
  try { return await recordEvent(request,shareEnvironment); } catch(error) { return shareError(error); }
}
