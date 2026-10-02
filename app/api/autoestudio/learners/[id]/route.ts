import { shareEnvironment } from '../../../../autoestudio/share/runtime';
import { learnerDetail, shareError } from '../../../../autoestudio/share/server';
export async function GET(request: Request, context: { params: Promise<{id:string}> }) {
  try { return await learnerDetail(request,(await context.params).id,shareEnvironment); } catch(error) { return shareError(error); }
}
