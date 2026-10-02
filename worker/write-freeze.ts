// Maintenance write freeze for the Sites → Cloudflare cutover
// (docs/releases/CUTOVER_RUNBOOK.md). Off unless SPANISHCUE_WRITE_FREEZE is
// exactly "true". While on, every mutating API request (sign-in session
// creation, progress, claims, checkout, admin, provider webhooks) gets a
// retryable 503 so no write reaches D1; payment providers retry webhooks.
// Pages, assets and read-only APIs keep working.
const SAFE_METHODS = new Set(["GET", "HEAD", "OPTIONS"]);

export function writeFreezeActive(value: string | undefined): boolean {
  return value === "true";
}

export function writeFreezeResponse(request: Request, value: string | undefined): Response | null {
  if (!writeFreezeActive(value)) return null;
  const path = new URL(request.url).pathname;
  // Bearer redemption and Share Pass reads persist distributed rate counters.
  const counterWrite = path === "/s" || path.startsWith("/s/") || path.startsWith("/api/autoestudio/");
  if (!counterWrite && SAFE_METHODS.has(request.method.toUpperCase())) return null;
  if (!counterWrite && !path.startsWith("/api/")) return null;
  return new Response(
    JSON.stringify({ code: "WRITE_FREEZE", error: "SPANISHCUE está en mantenimiento breve. Intentá de nuevo en unos minutos." }),
    {
      status: 503,
      headers: {
        "content-type": "application/json",
        "Cache-Control": "private, no-store",
        "Retry-After": "300",
        "X-Content-Type-Options": "nosniff",
      },
    },
  );
}
