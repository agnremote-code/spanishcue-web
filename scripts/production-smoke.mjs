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
  await check("/audio/habitacion-508/release-smoke.mp3", 403);
  const students = await check("/api/students", 401);
  assert.match(students.headers.get("cache-control") || "", /no-store/i);
  const headers = { origin, "content-type": "application/json" };
  const verification = await check("/api/auth/verification-email", 401, { method: "POST", headers, body: "{}" });
  assert.equal((await verification.json()).code, "INVALID_SESSION");
  const session = await check("/api/auth/session", 401, { method: "POST", headers, body: '{"idToken":"invalid-release-smoke"}' });
  assert.ok((await session.json()).error);
  return results;
}
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const results = await runSmoke(process.env.SPANISHCUE_PRODUCTION_ORIGIN || "https://spanishcue.com");
  console.log(JSON.stringify({ passed: true, checks: results }, null, 2));
}
