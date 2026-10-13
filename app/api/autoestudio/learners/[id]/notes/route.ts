import { shareEnvironment } from '../../../../../autoestudio/share/runtime';
import { shareError } from '../../../../../autoestudio/share/server';
import { addTeacherNote } from '../../../../../autoestudio/errors/server';
export async function POST(request: Request, context: { params: Promise<{id:string}> }) {
  try { return await addTeacherNote(request,(await context.params).id,shareEnvironment); } catch(error) { return shareError(error); }
}
