export const teacherBands = ['1-5', '6-15', '16-30', '31-50', '51+'] as const;

export class DemoRequestError extends Error {
  constructor(message: string, public status = 400) { super(message); }
}

export type DemoRequestRow = {
  id: string; name: string; institution: string; email: string;
  teachers: string; message: string; consent_at: string; created_at: string;
};

function field(value: unknown, max: number, required = true): string {
  if (typeof value !== 'string' || value.trim().length > max || (required && !value.trim())) {
    throw new DemoRequestError('Revisa los campos del formulario.');
  }
  return value.trim();
}

export async function readDemoRequest(request: Request): Promise<Record<string, unknown>> {
  if (request.headers.get('origin') !== new URL(request.url).origin) throw new DemoRequestError('Origen no válido.', 403);
  if (!request.headers.get('content-type')?.startsWith('application/json')) throw new DemoRequestError('Formato no válido.', 415);
  if (Number(request.headers.get('content-length') || 0) > 8192) throw new DemoRequestError('Solicitud demasiado grande.', 413);
  const reader = request.body?.getReader();
  const chunks: Uint8Array[] = [];
  let size = 0;
  if (reader) {
    try {
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        size += value.byteLength;
        if (size > 8192) {
          await reader.cancel().catch(() => undefined);
          throw new DemoRequestError('Solicitud demasiado grande.', 413);
        }
        chunks.push(value);
      }
    } finally { reader.releaseLock(); }
  }
  const bytes = new Uint8Array(size);
  let offset = 0;
  for (const chunk of chunks) { bytes.set(chunk, offset); offset += chunk.byteLength; }
  let value: unknown;
  try { value = JSON.parse(new TextDecoder().decode(bytes)); } catch { throw new DemoRequestError('Formato no válido.'); }
  if (!value || typeof value !== 'object' || Array.isArray(value)) throw new DemoRequestError('Formato no válido.');
  return value as Record<string, unknown>;
}

export async function saveDemoRequest(db: D1Database, value: Record<string, unknown>) {
  const name = field(value.name, 100);
  const institution = field(value.institution, 160);
  const email = field(value.email, 254).toLowerCase();
  if (!/^[a-z0-9.!$%'*+/=_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)+$/i.test(email)) throw new DemoRequestError('Ingresa un email válido.');
  const teachers = field(value.teachers, 10);
  if (!teacherBands.includes(teachers as typeof teacherBands[number])) throw new DemoRequestError('Selecciona la cantidad de profesores.');
  const message = field(value.message ?? '', 2000, false);
  const requestKey = field(value.requestKey, 100);
  if (!/^[a-zA-Z0-9_-]{16,100}$/.test(requestKey) || value.consent !== true) throw new DemoRequestError('Revisa el formulario y acepta el contacto.');
  // Stable across retries, including retries after an ambiguous network failure.
  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(JSON.stringify([requestKey, name, institution, email, teachers, message])));
  const id = Array.from(new Uint8Array(digest), b => b.toString(16).padStart(2, '0')).join('');
  const now = new Date().toISOString();
  const cutoff = new Date(Date.now() - 60 * 60 * 1000).toISOString();
  const result = await db.prepare(`INSERT INTO academy_demo_requests (id,name,institution,email,teachers,message,consent_at,created_at)
    SELECT ?,?,?,?,?,?,?,? WHERE (SELECT count(*) FROM academy_demo_requests WHERE email=? AND created_at>=?) < 3
    ON CONFLICT(id) DO NOTHING`).bind(id, name, institution, email, teachers, message, now, now, email, cutoff).run();
  if (!result.meta.changes) {
    const existing = await db.prepare('SELECT id FROM academy_demo_requests WHERE id=?').bind(id).first();
    if (!existing) throw new DemoRequestError('Ya recibimos varias solicitudes. Inténtalo más tarde.', 429);
  }
  return { ok: true };
}

export async function listDemoRequests(db: D1Database): Promise<DemoRequestRow[]> {
  const result = await db.prepare('SELECT id,name,institution,email,teachers,message,consent_at,created_at FROM academy_demo_requests ORDER BY created_at DESC LIMIT 200').bind().all<DemoRequestRow>();
  return result.results;
}

/** Source can be released before the separately coordinated additive migration.
 * Never offer visitors a form whose storage has not been prepared. */
export async function demoStorageReady(db: D1Database): Promise<boolean> {
  try {
    const row = await db.prepare("SELECT name FROM sqlite_master WHERE type='table' AND name='academy_demo_requests'").bind().first();
    return Boolean(row);
  } catch { return false; }
}

export function demoErrorResponse(error: unknown) {
  return Response.json({ error: error instanceof DemoRequestError ? error.message : 'No pudimos guardar la solicitud. Inténtalo de nuevo.' }, {
    status: error instanceof DemoRequestError ? error.status : 503,
    headers: { 'Cache-Control': 'private, no-store' },
  });
}
