import { shareEnvironment } from '../../../autoestudio/share/runtime';
import { claim, shareError } from '../../../autoestudio/share/server';
export async function POST(request: Request) {
  try { return await claim(request,shareEnvironment); } catch(error) { return shareError(error); }
}
