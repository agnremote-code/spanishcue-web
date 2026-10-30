import { env } from 'cloudflare:workers';
import { ownerFromHeaders } from '../../../access-policy';

export const dynamic = 'force-dynamic';
const noStore = { 'Cache-Control': 'private, no-store' };

/** Owner-only list of newsletter subscribers (newest first). Never exposes unsubscribe tokens. */
export async function GET(request: Request) {
  if (!ownerFromHeaders(request.headers)) return Response.json({ error: 'Acceso exclusivo del propietario.' }, { status: 403, headers: noStore });
  try {
    const { results } = await env.DB.prepare('SELECT email,source_path,status,created_at,unsubscribed_at FROM newsletter_subscribers ORDER BY created_at DESC LIMIT 5000').all();
    const active = results.filter(row => row.status === 'active').length;
    return Response.json({ active, total: results.length, items: results }, { headers: noStore });
  } catch {
    return Response.json({ error: 'La lista no está disponible.' }, { status: 503, headers: noStore });
  }
}
