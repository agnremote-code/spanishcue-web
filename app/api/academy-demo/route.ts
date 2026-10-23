import { env } from 'cloudflare:workers';
import { readDemoRequest, saveDemoRequest, demoErrorResponse } from '../../academias/demo-service';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const value = await readDemoRequest(request);
    // Honeypot: report a generic acceptance without retaining spam.
    if (typeof value.website === 'string' && value.website.trim()) return Response.json({ ok: true }, { status: 201, headers: { 'Cache-Control': 'private, no-store' } });
    return Response.json(await saveDemoRequest(env.DB, value), { status: 201, headers: { 'Cache-Control': 'private, no-store' } });
  } catch (error) { return demoErrorResponse(error); }
}
