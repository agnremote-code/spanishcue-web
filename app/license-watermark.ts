/**
 * Forensic watermark for PRO pages. Every PRO class or Homework week served to
 * an account carries `<meta name="spanishcue-license" content="v1.<day>.<mac>">`
 * where mac = HMAC(secret, account + day). A copied page (saved HTML, a scraper
 * dump, a re-hosted clone) can then be traced back to the account that opened
 * it from /admin/seguridad. The token reveals nothing without the secret, and
 * it is invisible: no layout, copy or behaviour changes.
 *
 * The key is derived from AUTOESTUDIO_SHARE_SECRET (always provisioned in
 * production) with its own label, so no new secret is needed.
 */
const encoder = new TextEncoder();
const TOKEN = /^v1\.(\d{8})\.([0-9a-f]{20})$/;

export const WATERMARK_META = "spanishcue-license";

async function mac(secret: string, accountId: string, day: string): Promise<string> {
  const key = await crypto.subtle.importKey("raw", encoder.encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const signature = new Uint8Array(await crypto.subtle.sign("HMAC", key, encoder.encode(`watermark:v1:${day}:${accountId}`)));
  return [...signature.slice(0, 10)].map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

/** `day` is UTC YYYYMMDD so a token also dates the copy. */
export function watermarkDay(now: Date): string {
  return now.toISOString().slice(0, 10).replace(/-/g, "");
}

export async function watermarkToken(secret: string, accountId: string, day: string): Promise<string> {
  return `v1.${day}.${await mac(secret, accountId, day)}`;
}

/** Returns the account whose token this is, or null. Candidates are the accounts to test. */
export async function traceWatermark(secret: string, token: string, candidates: readonly string[]): Promise<{ accountId: string; day: string } | null> {
  const match = TOKEN.exec(token.trim().toLowerCase());
  if (!match) return null;
  const [, day, expected] = match;
  for (const accountId of candidates) {
    if ((await mac(secret, accountId, day)) === expected) return { accountId, day };
  }
  return null;
}

export type Rewriter = {
  on(selector: string, handlers: { element(element: { append(content: string, options: { html: boolean }): void }): void }): Rewriter;
  transform(response: Response): Response;
};

/** Adds the meta tag to the document head; any non-HTML response passes through untouched. */
export function withWatermark(response: Response, token: string, rewriter: (() => Rewriter) | undefined): Response {
  if (!rewriter || !response.ok || !/^text\/html/i.test(response.headers.get("Content-Type") || "")) return response;
  if (!TOKEN.test(token)) return response;
  return rewriter()
    .on("head", { element(element) { element.append(`<meta name="${WATERMARK_META}" content="${token}">`, { html: true }); } })
    .transform(response);
}
