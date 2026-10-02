import { shareEnvironment } from '../../../autoestudio/share/runtime';
import { listPasses, createPass, shareError } from '../../../autoestudio/share/server';
export async function GET(request: Request) {
  try { return await listPasses(request,shareEnvironment); } catch(error) { return shareError(error); }
}
export async function POST(request: Request) {
  try { return await createPass(request,shareEnvironment); } catch(error) { return shareError(error); }
}
