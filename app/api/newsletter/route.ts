import { env } from 'cloudflare:workers';
import { GIFT_LESSON_PATH } from '../../newsletter/gift';
import { deliverWelcome, giftCookie, NewsletterError, subscribe, type NewsletterEnvironment } from '../../newsletter/server';

export const dynamic = 'force-dynamic';
const noStore = { 'Cache-Control': 'private, no-store' };

export async function POST(request: Request) {
  try {
    if (request.headers.get('origin') !== new URL(request.url).origin) throw new NewsletterError('Origen no válido.', 403);
    if (!request.headers.get('content-type')?.startsWith('application/json')) throw new NewsletterError('Formato no válido.', 415);
    const raw = await request.text();
    if (raw.length > 2048) throw new NewsletterError('Solicitud demasiado grande.', 413);
    let body: unknown;
    try { body = JSON.parse(raw); } catch { throw new NewsletterError('Formato no válido.'); }
    if (!body || typeof body !== 'object' || Array.isArray(body)) throw new NewsletterError('Formato no válido.');
    const value = body as Record<string, unknown>;
    // Honeypot: answer like a success without storing anything or opening the class.
    if (typeof value.website === 'string' && value.website.trim()) return Response.json({ ok: true, href: GIFT_LESSON_PATH }, { status: 201, headers: noStore });
    const environment = env as unknown as NewsletterEnvironment;
    // Without the signing secret the class cannot be opened: refuse before storing the email.
    if ((environment.AUTOESTUDIO_SHARE_SECRET ?? '').length < 32) throw new NewsletterError('El regalo no está disponible ahora.', 503);
    const subscriber = await subscribe(environment.DB, value);
    await deliverWelcome(environment, fetch, new URL(request.url).origin, subscriber);
    return Response.json({ ok: true, href: GIFT_LESSON_PATH }, { status: 201, headers: { ...noStore, 'Set-Cookie': await giftCookie(environment, subscriber.id) } });
  } catch (error) {
    if (error instanceof NewsletterError) return Response.json({ message: error.message }, { status: error.status, headers: noStore });
    return Response.json({ message: 'No pudimos guardar tu email. Inténtalo de nuevo.' }, { status: 503, headers: noStore });
  }
}
