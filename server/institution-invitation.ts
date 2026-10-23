import 'server-only';
import { VERIFICATION_FROM } from './verification-template';

export type InstitutionEmailEnvironment = { RESEND_API_KEY?: string };
const escapeHtml = (value: string) => value.replace(/[&<>"']/g, character =>
  ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[character]!));
/** Transactional invitation. No click/open tracking or raw-token logging. */
export async function sendInstitutionInvitation(env: InstitutionEmailEnvironment, invitation: {
 id: string; token: string; email: string; institutionName: string;
}): Promise<boolean> {
  if (!env.RESEND_API_KEY) return false;
  const url = `https://spanishcue.com/pro/academia/aceptar#token=${invitation.token}`;
  const text = `Te invitaron a ${invitation.institutionName} en SpanishCue.\n\nAbre el enlace, inicia sesión con ${invitation.email} y acepta la invitación. El enlace vence en 7 días. La pertenencia no activa una suscripción personal. El administrador asigna las plazas disponibles por separado.\n\n${url}\n\nSi no reconoces esta academia, ignora este correo.`;
  const html = `<!doctype html><html lang="es"><body style="font:16px/1.6 Arial,sans-serif;color:#17233d;max-width:600px;margin:24px auto;padding:24px"><h1 style="font-size:24px">Invitación a ${escapeHtml(invitation.institutionName)}</h1><p>Tu academia te invita a su equipo docente en SpanishCue.</p><p>Inicia sesión con <strong>${escapeHtml(invitation.email)}</strong> y acepta la invitación. Este enlace vence en 7 días.</p><p><a style="display:inline-block;padding:14px 20px;background:#255ee8;color:#fff;border-radius:8px" href="${url}">Aceptar invitación</a></p><p>La pertenencia no activa una suscripción personal. El administrador asigna las plazas disponibles por separado.</p><p>Si no reconoces esta academia, ignora este correo.</p></body></html>`;
  // The same immutable body/key is reused only within this attempt. An interrupted
  // send remains visible for revocation/replacement; raw tokens are never stored.
  for (let attempt = 0; attempt < 2; attempt++) {
    try {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST', headers: { authorization: `Bearer ${env.RESEND_API_KEY}`, 'content-type': 'application/json', 'idempotency-key': `academy-invitation/${invitation.id}` },
        body: JSON.stringify({ from: VERIFICATION_FROM, to: [invitation.email], subject: 'SpanishCue · Invitación a tu academia', text, html }),
        signal: AbortSignal.timeout(8000),
      });
      const result = await response.json().catch(() => null) as {id?:unknown}|null;
      if (response.ok && typeof result?.id === 'string') return true;
      if (response.status < 500 && response.status !== 429) return false;
    } catch { /* Never log provider errors, identities, bodies or links. */ }
    if (attempt === 0) await new Promise(resolve => setTimeout(resolve, 500));
  }
  return false;
}
