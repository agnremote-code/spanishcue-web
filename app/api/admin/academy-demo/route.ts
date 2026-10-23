import { env } from 'cloudflare:workers';
import { ownerFromHeaders } from '../../../access-policy';
import { DemoRequestError, demoErrorResponse, listDemoRequests } from '../../../academias/demo-service';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  try {
    if (!ownerFromHeaders(request.headers)) throw new DemoRequestError('Acceso exclusivo del propietario.', 403);
    return Response.json({ items: await listDemoRequests(env.DB) }, { headers: { 'Cache-Control': 'private, no-store' } });
  } catch (error) { return demoErrorResponse(error); }
}
