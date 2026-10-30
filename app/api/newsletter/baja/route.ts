import { env } from 'cloudflare:workers';
import { markResendUnsubscribed, unsubscribe, type NewsletterEnvironment } from '../../../newsletter/server';

export const dynamic = 'force-dynamic';
const noStore = { 'Cache-Control': 'private, no-store' };

async function leave(request: Request) {
  const token = new URL(request.url).searchParams.get('t') ?? '';
  const environment = env as unknown as NewsletterEnvironment;
  const email = await unsubscribe(environment.DB, token).catch(() => null);
  if (email) await markResendUnsubscribed(environment, fetch, email);
  return Boolean(email);
}

/** Link in every email: confirms on a page. */
export async function GET(request: Request) {
  const done = await leave(request);
  return new Response(null, { status: 303, headers: { ...noStore, Location: new URL(`/newsletter/baja?estado=${done ? 'ok' : 'enlace'}`, request.url).toString() } });
}

/** RFC 8058 one-click unsubscribe from the mail client (no origin header, no page). */
export async function POST(request: Request) {
  const done = await leave(request);
  return new Response(null, { status: done ? 200 : 404, headers: noStore });
}
