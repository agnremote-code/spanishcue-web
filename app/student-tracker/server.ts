import { getUserSessionFromHeaders } from '../access-policy';
import { TrackerError, UnauthorizedError } from './contracts';

export function authenticatedOwnerId(request: Request): string {
  const session = getUserSessionFromHeaders(request.headers);
  if (!session.isAuthenticated || !session.userId) throw new UnauthorizedError();
  return session.userId;
}

export function requireSameOrigin(request: Request): void {
  const origin = request.headers.get('origin');
  if (!origin || new URL(origin).origin !== new URL(request.url).origin) {
    throw new TrackerError('Origen de solicitud no permitido.', 403, 'forbidden_origin');
  }
}

export async function readTrackerJson(request: Request): Promise<unknown> {
  const declared = Number(request.headers.get('content-length') || 0);
  if (declared > 16_384) throw new TrackerError('La solicitud es demasiado grande.', 413, 'payload_too_large');
  const text = await request.text();
  if (text.length > 16_384) throw new TrackerError('La solicitud es demasiado grande.', 413, 'payload_too_large');
  try { return JSON.parse(text); } catch { throw new TrackerError('El JSON no es válido.', 400, 'invalid_json'); }
}

export function trackerErrorResponse(error: unknown): Response {
  if (error instanceof TrackerError) {
    const extra = 'existingId' in error ? { existingId: (error as { existingId: string }).existingId } : {};
    return Response.json({ error: error.message, code: error.code, ...extra }, { status: error.status });
  }
  console.error('Student tracker request failed', error instanceof Error ? error.message : 'Unknown error');
  return Response.json({ error: 'No pudimos completar la operación.', code: 'internal_error' }, { status: 500 });
}
