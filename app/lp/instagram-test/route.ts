import { experimentDestination } from '../../immersive/policy.mjs';
export const dynamic = 'force-dynamic';
/** Only this explicitly selected campaign URL allocates traffic. No site-wide redirects. */
export async function GET(request:Request) {
  const url = new URL(request.url);
  const requested = url.searchParams.get('variant');
  const cookies = request.headers.get('cookie') || '';
  let remembered: string | null = null;
  try {
    const raw = cookies.split('; ').find(v=>v.startsWith('spanishcue-consent-v1='))?.slice('spanishcue-consent-v1='.length);
    if (raw && JSON.parse(decodeURIComponent(raw)).analytics === true) remembered=cookies.match(/(?:^|; )spanishcue-city-variant=([ab])(?:;|$)/)?.[1] ?? null;
  } catch {}
  const variant = requested==='a'||requested==='b' ? requested : remembered ?? (crypto.getRandomValues(new Uint8Array(1))[0] < 128 ? 'a' : 'b');
  return new Response(null,{status:302,headers:{Location:experimentDestination(url,variant),'Cache-Control':'private, no-store','X-Robots-Tag':'noindex, nofollow'}});
}
