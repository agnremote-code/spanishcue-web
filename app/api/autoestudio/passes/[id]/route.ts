import { shareEnvironment } from '../../../../autoestudio/share/runtime';
import { mutatePass, shareError } from '../../../../autoestudio/share/server';
export async function POST(request: Request, context: { params: Promise<{id:string}> }) {
  try { return await mutatePass(request,(await context.params).id,shareEnvironment); } catch(error) { return shareError(error); }
}
