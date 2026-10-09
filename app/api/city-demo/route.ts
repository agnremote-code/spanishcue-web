import { demoContent } from '../../immersive/demo-content.mjs';
export const dynamic = 'force-dynamic';
export async function GET(request:Request) {
  const query = new URL(request.url).searchParams;
  const payload = demoContent(query.get('level'), query.get('district') ?? 'centro');
  return Response.json(payload ?? {error:'PRO district. Open the full city with an active subscription.'}, {
    status:payload?200:403,
    headers:{'cache-control':'private, no-store','x-robots-tag':'noindex, nofollow'},
  });
}
