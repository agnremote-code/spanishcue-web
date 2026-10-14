import { shareEnvironment } from '../../../autoestudio/share/runtime';
import { shareError } from '../../../autoestudio/share/server';
import { recordAnswer } from '../../../autoestudio/errors/server';
export async function POST(request: Request) {
  try { return await recordAnswer(request,shareEnvironment); } catch(error) { return shareError(error); }
}
