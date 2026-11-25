import { env } from 'cloudflare:workers';
import { ownerFromHeaders } from '../../../../access-policy';
import { pendingBackfillAccounts, runAccountBackfill } from '../../../../newsletter/account-backfill';
import type { NewsletterEnvironment } from '../../../../newsletter/server';

export const dynamic = 'force-dynamic';
const noStore = { 'Cache-Control': 'private, no-store' };
type Env = NewsletterEnvironment & { CHESPANISH_OWNER_EMAIL?: string };

/** Owner-only: how many accounts since 5-nov are still waiting for the first mail. */
export async function GET(request: Request) {
  if (!ownerFromHeaders(request.headers)) return Response.json({ error: 'Acceso exclusivo del propietario.' }, { status: 403, headers: noStore });
  const environment = env as unknown as Env;
  try {
    const pending = await pendingBackfillAccounts(environment.DB, environment.CHESPANISH_OWNER_EMAIL);
    return Response.json({ remaining: pending.length }, { headers: noStore });
  } catch {
    return Response.json({ error: 'No disponible.' }, { status: 503, headers: noStore });
  }
}

/** Owner-only, same origin: sends the first mail to the next small batch. Safe to repeat until remaining is 0. */
export async function POST(request: Request) {
  if (!ownerFromHeaders(request.headers)) return Response.json({ error: 'Acceso exclusivo del propietario.' }, { status: 403, headers: noStore });
  if (request.headers.get('origin') !== new URL(request.url).origin) return Response.json({ error: 'Origen no válido.' }, { status: 403, headers: noStore });
  const environment = env as unknown as Env;
  try {
    const result = await runAccountBackfill(environment, (input, init) => fetch(input, init), new URL(request.url).origin, environment.CHESPANISH_OWNER_EMAIL);
    return Response.json(result, { headers: noStore });
  } catch {
    return Response.json({ error: 'No pudimos enviar este lote.' }, { status: 503, headers: noStore });
  }
}
