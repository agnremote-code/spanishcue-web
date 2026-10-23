import { env as workerEnv } from 'cloudflare:workers';
import { accountIdFromHeaders, emailFromHeaders, ownerFromHeaders, signedInFromHeaders } from '../../access-policy';
import { InstitutionError, institutionStorageReady, institutionDashboard, mutateInstitution, createInstitutionInvitation, markInvitationDelivery, acceptInstitutionInvitation } from '../../../db/institutions';
import { sendInstitutionInvitation, type InstitutionEmailEnvironment } from '../../../server/institution-invitation';

const env = workerEnv as typeof workerEnv & InstitutionEmailEnvironment;
export const dynamic = 'force-dynamic';
const json = (value: unknown, status = 200) => Response.json(value, { status, headers: {'cache-control':'private, no-store','referrer-policy':'no-referrer'} });
const errorResponse = (error: unknown) => json({error: error instanceof InstitutionError ? error.message : 'La gestión de academias no está disponible. Inténtalo más tarde.'}, error instanceof InstitutionError ? error.status : 503);
function actorOf(request: Request) {
  const id = accountIdFromHeaders(request.headers), email = emailFromHeaders(request.headers);
  if (!signedInFromHeaders(request.headers) || !id || !email) throw new InstitutionError('Inicia sesión con tu cuenta y verifica tu correo.', 401);
  return {id, email, owner:ownerFromHeaders(request.headers)};
}
async function bodyOf(request: Request) {
  if (request.headers.get('origin') !== new URL(request.url).origin) throw new InstitutionError('Origen no permitido.', 403);
  if (!request.headers.get('content-type')?.startsWith('application/json')) throw new InstitutionError('Formato no válido.', 415);
  if (Number(request.headers.get('content-length') || 0) > 12000) throw new InstitutionError('Solicitud demasiado grande.', 413);
  const reader = request.body?.getReader();
  if (!reader) throw new InstitutionError('Solicitud no válida.');
  const chunks: Uint8Array[] = []; let size = 0;
  try { while (true) { const {done,value} = await reader.read(); if (done) break; size += value.byteLength;
    if (size > 12000) { await reader.cancel(); throw new InstitutionError('Solicitud demasiado grande.', 413); } chunks.push(value); }
  } finally { reader.releaseLock(); }
  const bytes = new Uint8Array(size); let offset = 0; for (const chunk of chunks) { bytes.set(chunk,offset); offset += chunk.byteLength; }
  let value; try { value = JSON.parse(new TextDecoder().decode(bytes)); } catch { throw new InstitutionError('Solicitud no válida.'); }
  if (!value || typeof value !== 'object' || Array.isArray(value)) throw new InstitutionError('Solicitud no válida.');
  return value as Record<string,unknown>;
}
export async function GET(request: Request) {
  try {
    const actor = actorOf(request);
    if (!await institutionStorageReady(env.DB)) return json({ready:false,emailReady:Boolean(env.RESEND_API_KEY)});
    return json({ready:true,emailReady:Boolean(env.RESEND_API_KEY),...await institutionDashboard(env.DB,actor,new URL(request.url).searchParams.get('institutionId'))});
  } catch (error) { return errorResponse(error); }
}
export async function POST(request: Request) {
  try {
    const actor = actorOf(request), body = await bodyOf(request);
    if (!await institutionStorageReady(env.DB)) throw new InstitutionError('El panel institucional está pendiente de preparación.', 503);
    if (body.action === 'accept') return json(await acceptInstitutionInvitation(env.DB,actor,body.token));
    if (body.action === 'invite') {
      if (!env.RESEND_API_KEY) throw new InstitutionError('Los envíos de invitaciones no están configurados.', 503);
      const invitation = await createInstitutionInvitation(env.DB,actor,body);
      if (!invitation.created) return json({id:invitation.id,status:invitation.status});
      const sent = await sendInstitutionInvitation(env, invitation as Required<typeof invitation>);
      await markInvitationDelivery(env.DB,invitation.id,sent);
      return json({id:invitation.id,status:sent?'sent':'failed'});
    }
    return json(await mutateInstitution(env.DB,actor,body));
  } catch (error) { return errorResponse(error); }
}
