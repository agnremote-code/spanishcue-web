import assert from "node:assert/strict";
import { pathToFileURL } from "node:url";

export async function runSmoke(origin, fetcher = fetch) {
  origin = new URL(origin).origin;
  const results = [];
  async function check(path, statuses, options = {}) {
    const response = await fetcher(origin + path, {
      ...options, redirect: "manual", signal: AbortSignal.timeout(20000),
    });
    assert.ok([].concat(statuses).includes(response.status), `${path}: expected ${statuses}, got ${response.status}`);
    results.push({ path, status: response.status });
    return response;
  }
  async function protectedRedirect(path, target) {
    const r = await check(path, [302, 303, 307, 308]);
    const location = new URL(r.headers.get("location") || "", origin);
    assert.equal(location.origin, origin, `${path}: foreign redirect`);
    assert.equal(location.pathname, target, `${path}: wrong protection target`);
  }
  assert.match(await (await check("/", 200)).text(), /SPANISHCUE/i);
  assert.match(await (await check("/ingresar", 200)).text(), /SPANISHCUE/i);
  assert.match(await (await check("/does-not-exist-automated-smoke", 404)).text(), /404|no está disponible/i);
  assert.match(await (await check("/la-fabrica-de-los-nombres", 200)).text(), /Fábrica|Fábrica de los Nombres|fabrica-de-los-nombres/i);
  await protectedRedirect("/cuenta", "/ingresar");
  await protectedRedirect("/tablero-de-eso-si-hablo", "/acceso");
  for (const level of ["A1", "B2", "C1"]) {
    await protectedRedirect(`/noche-abierta?level=${level}`, "/acceso");
  }
  await check("/audio/habitacion-508/release-smoke.mp3", 403);
  const students = await check("/api/students", 401);
  assert.match(students.headers.get("cache-control") || "", /no-store/i);
  const headers = { origin, "content-type": "application/json" };
  const verification = await check("/api/auth/verification-email", 401, { method: "POST", headers, body: "{}" });
  assert.equal((await verification.json()).code, "INVALID_SESSION");
  const session = await check("/api/auth/session", 401, { method: "POST", headers, body: '{"idToken":"invalid-release-smoke"}' });
  assert.ok((await session.json()).error);
  const sessionStatus = await check("/api/auth/session", 200, { method: "GET" });
  assert.deepEqual(await sessionStatus.json(), { authenticated: false });
  assert.match(sessionStatus.headers.get("cache-control") || "", /private, no-store/i);
  // Paid-traffic purchase path: anonymous demo, checkout page and live offers.
  await check("/demo/noche-abierta", 200);
  // Public pages must load every script chunk they reference, never a protected one:
  // the campaign landing and the FREE sample lessons that anonymous visitors open.
  for (const path of ["/lp/google-teachers", "/la-fabrica-de-los-nombres", "/el-hotel-de-lo-imposible"]) {
    const html = await (await check(path, 200)).text();
    for (const [, src] of html.matchAll(/<script[^>]+src="(\/assets\/[^"]+\.js)"/g)) await check(src, 200);
  }
  assert.match(await (await check("/acceso", 200)).text(), /SPANISHCUE/i);
  const founder = await (await check("/api/billing/founder-status", 200)).json();
  assert.equal(founder.priceUsd, 15.5);
  assert.equal(founder.trialPriceUsd, 2);
  // Only spanishcue.com runs Live billing; staging and inert workers.dev
  // deploys use PayPal Sandbox and have no Paddle.
  if (origin === "https://spanishcue.com") {
    assert.equal(founder.mode, "live", "billing must run in Live mode");
    assert.equal(founder.paddleCheckoutAvailable, true, "Paddle monthly checkout must be available");
    assert.equal(founder.trialCheckoutAvailable, true, "Paddle US$2 trial checkout must be available");
    // A ready Live Paddle webhook rejects a forged signature (503 = not configured).
    await check("/api/billing/paddle/webhook", 401, { method: "POST", headers: { "content-type": "application/json", "paddle-signature": "ts=1;h1=release-smoke" }, body: "{}" });
  }
  // Checkout, payment confirmation and conversions refuse cross-site calls.
  for (const path of ["/api/billing/paddle/checkout", "/api/billing/paddle/confirm", "/api/billing/checkout", "/api/billing/conversion"]) {
    await check(path, 403, { method: "POST", headers: { origin: "https://release-smoke.invalid", "content-type": "application/json" }, body: "{}" });
  }
  // A browser cannot confirm a made-up payment.
  await check("/api/billing/paddle/confirm", 400, { method: "POST", headers, body: '{"transactionId":"not-a-transaction"}' });
  return results;
}
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const results = await runSmoke(process.env.SPANISHCUE_PRODUCTION_ORIGIN || "https://spanishcue.com");
  console.log(JSON.stringify({ passed: true, checks: results }, null, 2));
}
