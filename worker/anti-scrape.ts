/**
 * Worker-side enforcement of app/crawler-policy.ts.
 *
 * 1. AI/SEO-tool crawlers that announce themselves get 403 everywhere except
 *    /robots.txt (so they can read that they are not welcome).
 * 2. Scraping libraries with a default User-Agent get 403 on content pages.
 * 3. Any single IP that reads pages faster than a person or a classroom can
 *    is slowed down with 429 (`SCRAPE_LIMITER` and `PAYLOAD_LIMITER`, see
 *    vite.config.ts).
 *
 * Search engines and link previews are exempt from all three, and nothing here
 * touches POSTs, APIs, webhooks, student links or static files. The limiter
 * fails open, like the abuse limiter, so a configuration gap never blocks a
 * teacher in class.
 */
import { isBlockedCrawlerAgent, isScrapingToolAgent, isSearchEngineAgent } from "../app/crawler-policy";

/** Machine-readable files every client may fetch, whatever it calls itself. */
const OPEN_FILE = /\.(?:txt|xml)$/i;
const STATIC_FILE = /\.(?:avif|css|gif|ico|jpe?g|js|json|m4a|map|mp3|mp4|ogg|png|svg|ttf|wasm|wav|webm|webp|woff2?)$/i;

function readOnly(request: Request): boolean {
  return request.method === "GET" || request.method === "HEAD";
}

function staticPath(pathname: string): boolean {
  return pathname.startsWith("/assets/") || pathname.startsWith("/_next/static/") || pathname === "/_vinext/image" || STATIC_FILE.test(pathname);
}

/** True when this request must be refused because of who says it is asking. */
export function refusedAgent(request: Request, pathname: string): boolean {
  if (!readOnly(request) || pathname === "/robots.txt") return false;
  const agent = request.headers.get("user-agent");
  if (isBlockedCrawlerAgent(agent)) return true;
  if (!isScrapingToolAgent(agent)) return false;
  // Release smokes and uptime checks use plain HTTP clients on these.
  if (pathname === "/" || OPEN_FILE.test(pathname) || pathname.startsWith("/api/") || pathname === "/s" || pathname.startsWith("/s/")) return false;
  return true;
}

export function refusedAgentResponse(): Response {
  return new Response("Automated access to SpanishCue is not allowed. See /robots.txt and /terms.", {
    status: 403,
    headers: { "content-type": "text/plain; charset=utf-8", "Cache-Control": "private, no-store" },
  });
}

/** Autonomous systems Google and Microsoft crawl from. */
const SEARCH_ENGINE_NETWORKS: ReadonlySet<number> = new Set([15169, 396982, 8075, 8068]);

/**
 * A search-engine User-Agent is trusted unless Cloudflare reports a network
 * that is certainly not Google's or Microsoft's. Unknown network (local
 * preview, missing `cf`) keeps the exemption: SEO wins every doubt.
 */
function trustedSearchEngine(request: Request): boolean {
  const agent = request.headers.get("user-agent");
  if (!isSearchEngineAgent(agent)) return false;
  if (!/Googlebot|bingbot/i.test(agent ?? "")) return true;
  const asn = (request as unknown as { cf?: { asn?: unknown } }).cf?.asn;
  return typeof asn !== "number" || SEARCH_ENGINE_NETWORKS.has(asn);
}

/**
 * Limiter key for page reads, one counter per IP. HTML documents
 * (`SCRAPE_LIMITER`) and client-navigation payloads (`PAYLOAD_LIMITER`) are
 * counted apart: the app prefetches ~35 payloads on a long index page, while
 * nobody opens two full documents a second. Static files, media, APIs and
 * student links never count.
 */
export function pageReadKey(request: Request, pathname: string, deployment: string | undefined, payload = false): string | null {
  if (request.method !== "GET" || staticPath(pathname) || OPEN_FILE.test(pathname)) return null;
  if (pathname.startsWith("/api/") || pathname === "/s" || pathname.startsWith("/s/")) return null;
  if (trustedSearchEngine(request)) return null;
  const ip = request.headers.get("cf-connecting-ip")?.trim();
  // Local preview and the Worker test suite (Miniflare reports loopback).
  if (!ip || ip === "127.0.0.1" || ip === "::1") return null;
  return `${deployment ?? "production"}:${payload ? "payloads" : "pages"}:${ip}`;
}

const SLOW_DOWN = "Demasiadas páginas en muy poco tiempo. Espera un minuto y vuelve a intentarlo. / Too many pages too quickly. Wait a minute and try again.";

export function pageReadLimitResponse(): Response {
  return new Response(SLOW_DOWN, {
    status: 429,
    headers: { "content-type": "text/plain; charset=utf-8", "Cache-Control": "private, no-store", "Retry-After": "60" },
  });
}
