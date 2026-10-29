import assert from "node:assert/strict";
import { pathToFileURL } from "node:url";

export async function runSmoke(origin, fetcher = fetch, { retryDelayMs = 1500 } = {}) {
  origin = new URL(origin).origin;
  const results = [];
  // A network error or timeout names the request it hit (run 40638724042 died
  // with a bare TimeoutError). GET/HEAD get one retry, so a single dropped
  // connection does not open a production incident; a wrong status never retries.
  // The body is read here too, so a timeout while reading it is covered as well.
  async function request(path, options) {
    const method = (options.method || "GET").toUpperCase();
    for (let attempt = 1; ; attempt++) {
      try {
        const response = await fetcher(origin + path, { ...options, redirect: "manual", signal: AbortSignal.timeout(20000) });
        const body = await response.arrayBuffer();
        return new Response([101, 204, 205, 304].includes(response.status) ? null : body, response);
      } catch (error) {
        if (attempt < 2 && (method === "GET" || method === "HEAD")) {
          await new Promise((resolve) => setTimeout(resolve, retryDelayMs));
          continue;
        }
        throw new Error(`${method} ${path}: ${error?.name || "Error"}: ${error?.message || error}`, { cause: error });
      }
    }
  }
  async function check(path, statuses, options = {}) {
    const response = await request(path, options);
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
  // Released PRO 3D worlds: the world and its listening audio stay private,
  // while its indexable teacher page stays public and names the 3D world.
  for (const [world, audio, resource, title] of [
    ["/hospital-san-casi-vivo", null, "/resources/spanish-conversation-activity-a0-c2-hospital-san-casi-vivo", "3D Spanish Conversation Activity A0–C2: Hospital San Casi Vivo"],
    ["/la-feria-de-villaluz", "/audio/escucha-3d/feria-a2-baile.mp3", "/resources/spanish-conversation-activity-a2-la-feria-de-villaluz", "3D Spanish Conversation Activity A2: La feria de Villaluz"],
  ]) {
    await protectedRedirect(world, "/acceso");
    if (audio) await check(audio, 403);
    const html = await (await check(resource, 200)).text();
    assert.ok(html.includes(`<title>${title}`), `${resource} must carry its 3D title`);
    assert.ok(html.includes("Inside the 3D world"), `${resource} must describe the 3D world`);
    assert.ok(html.includes('"BreadcrumbList"'), `${resource} must carry its breadcrumb`);
  }
  // A /resources slug that search engines already saw keeps working: retired
  // slugs 308 to the lesson's current page (app/resource-legacy-slugs.ts).
  // Production may still 404 it until the release carrying the redirect lands;
  // staging always requires the redirect.
  const legacyResource = "/resources/spanish-grammar-lesson-a1-a2-ser-estar-y-hay-describir-personas-y-lugares";
  const legacy = await check(legacyResource, origin === "https://spanishcue.com" ? [308, 404] : 308);
  if (legacy.status === 308) {
    const location = new URL(legacy.headers.get("location") || "", origin);
    assert.equal(location.origin, origin, `${legacyResource}: foreign redirect`);
    assert.equal(location.pathname, "/resources/spanish-grammar-lesson-a1-ser-estar-y-hay-describir-personas-y-lugares", `${legacyResource}: wrong redirect target`);
  }
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
  // The two audience landings, the teacher home and the student's free week too.
  // The scheduled monitor checks out main against spanishcue.com before a new
  // page is promoted there, so production may still 404 the audience landings;
  // staging (which runs this same script before promotion) always requires them.
  const audienceLandings = ["/para-profesores", "/aprender-espanol"];
  const awaitingRelease = new Set();
  if (origin === "https://spanishcue.com") {
    for (const path of audienceLandings) {
      if ((await check(path, [200, 404])).status === 404) awaitingRelease.add(path);
    }
  }
  for (const path of ["/lp/google-teachers", "/demo/noche-abierta", "/la-fabrica-de-los-nombres", "/el-hotel-de-lo-imposible", "/", ...audienceLandings, "/autoestudio/a1/semana-1"]) {
    if (awaitingRelease.has(path)) continue;
    const html = await (await check(path, 200)).text();
    // A server-side crash still answers 200 with the error boundary.
    assert.ok(!html.includes("Algo salió mal") && !html.includes("Something went wrong"), `${path} must not render the error screen`);
    for (const [, src] of html.matchAll(/<script[^>]+src="(\/assets\/[^"]+\.js)"/g)) await check(src, 200);
  }
  for (const [path, canonical] of [["/para-profesores", "https://spanishcue.com/para-profesores"], ["/aprender-espanol", "https://spanishcue.com/aprender-espanol"]]) {
    if (awaitingRelease.has(path)) continue;
    const html = await (await check(path, 200)).text();
    assert.ok(html.includes(`<link rel="canonical" href="${canonical}"`), `${path} must carry its own canonical`);
    assert.match(html, /class="audience-switch/, `${path} must render the Teach/Learn selector`);
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
