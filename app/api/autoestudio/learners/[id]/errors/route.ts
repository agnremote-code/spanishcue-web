import { shareEnvironment } from '../../../../../autoestudio/share/runtime';
import { shareError } from '../../../../../autoestudio/share/server';
import { learnerErrors } from '../../../../../autoestudio/errors/server';
export async function GET(request: Request, context: { params: Promise<{id:string}> }) {
  try { return await learnerErrors(request,(await context.params).id,shareEnvironment); } catch(error) { return shareError(error); }
}
