/**
 * Per-IP limits for anonymous endpoints that write rows or call a paid
 * provider (PayPal/Paddle checkout, founder list, speech recognition). Backed
 * by the Workers Rate Limiting binding (`ABUSE_LIMITER`, see vite.config.ts):
 * counters live in Cloudflare, never in D1, and no IP is stored.
 *
 * Fails open when the binding is missing (local preview, older deployments),
 * so a configuration gap never blocks checkout.
 */
export interface RateLimitBinding {
  limit(options: { key: string }): Promise<{ success: boolean }>;
}

/** POST endpoints limited per client IP. Real users call each a few times at most. */
export const RATE_LIMITED_POSTS: ReadonlySet<string> = new Set([
  "/api/founder-access",
  "/api/academy-demo",
  "/api/billing/checkout",
  "/api/billing/paddle/checkout",
  "/api/phonetics/speech-attempt",
  "/api/newsletter",
]);

export function rateLimitKey(request: Request, pathname: string, deployment: string | undefined): string | null {
  if (request.method !== "POST" || !RATE_LIMITED_POSTS.has(pathname)) return null;
  const ip = request.headers.get("cf-connecting-ip")?.trim();
  if (!ip) return null;
  return `${deployment ?? "production"}:${pathname}:${ip}`;
}

export async function rateLimited(binding: RateLimitBinding | undefined, key: string | null): Promise<boolean> {
  if (!binding || !key) return false;
  try {
    return !(await binding.limit({ key })).success;
  } catch {
    return false;
  }
}

const TOO_MANY = "Demasiados intentos. Espera un minuto y vuelve a intentarlo.";

export function rateLimitResponse(): Response {
  return new Response(JSON.stringify({ error: TOO_MANY, message: TOO_MANY }), {
    status: 429,
    headers: { "content-type": "application/json", "Cache-Control": "private, no-store", "Retry-After": "60" },
  });
}
