import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { build } from "esbuild";

const compiled = await build({ entryPoints: ["worker/rate-limit.ts"], bundle: true, write: false, format: "esm", platform: "node" });
const { RATE_LIMITED_POSTS, rateLimitKey, rateLimited, rateLimitResponse } = await import(`data:text/javascript;base64,${Buffer.from(compiled.outputFiles[0].text).toString("base64")}`);

const post = (path, ip = "203.0.113.7") => new Request(`https://spanishcue.com${path}`, { method: "POST", headers: ip ? { "cf-connecting-ip": ip } : {} });

test("cost and academy mutation endpoints are limited, per deployment and IP", () => {
  assert.deepEqual([...RATE_LIMITED_POSTS].sort(), ["/api/academy", "/api/academy-demo", "/api/billing/checkout", "/api/billing/paddle/checkout", "/api/founder-access", "/api/phonetics/speech-attempt"]);
  assert.equal(rateLimitKey(post("/api/academy"), "/api/academy", undefined), "production:/api/academy:203.0.113.7");
  assert.equal(rateLimitKey(post("/api/academy-demo"), "/api/academy-demo", undefined), "production:/api/academy-demo:203.0.113.7");
  assert.equal(rateLimitKey(post("/api/founder-access"), "/api/founder-access", undefined), "production:/api/founder-access:203.0.113.7");
  assert.equal(rateLimitKey(post("/api/billing/checkout"), "/api/billing/checkout", "staging"), "staging:/api/billing/checkout:203.0.113.7");
  // Webhooks, page loads and GETs are never limited here.
  assert.equal(rateLimitKey(post("/api/billing/paddle/webhook"), "/api/billing/paddle/webhook", undefined), null);
  assert.equal(rateLimitKey(new Request("https://spanishcue.com/api/founder-access"), "/api/founder-access", undefined), null);
  assert.equal(rateLimitKey(post("/api/founder-access", ""), "/api/founder-access", undefined), null);
});

test("the limiter fails open without a binding or when the binding errors", async () => {
  assert.equal(await rateLimited(undefined, "k"), false);
  assert.equal(await rateLimited({ limit: async () => ({ success: true }) }, null), false);
  assert.equal(await rateLimited({ limit: async () => { throw new Error("down"); } }, "k"), false);
  assert.equal(await rateLimited({ limit: async () => ({ success: true }) }, "k"), false);
  assert.equal(await rateLimited({ limit: async () => ({ success: false }) }, "k"), true);
  const response = rateLimitResponse();
  assert.equal(response.status, 429);
  assert.equal(response.headers.get("retry-after"), "60");
  assert.equal(response.headers.get("cache-control"), "private, no-store");
  const body = await response.json();
  assert.ok(body.error && body.message, "checkout reads `error`, the founder form reads `message`");
});

test("the Worker canonicalises repeated slashes before any access check", async () => {
  const source = await readFile("worker/index.ts", "utf8");
  const collapse = source.indexOf('url.pathname.replace(/\\/{2,}/g, "/")');
  assert.ok(collapse > 0, "repeated slashes must redirect");
  assert.ok(collapse < source.indexOf("const administrative="), "the redirect must run before the admin/premium checks");
  assert.ok(source.indexOf("rateLimited(env.ABUSE_LIMITER") < source.indexOf("getFirebaseUserFromHeaders(routedHeaders)"), "limits run before identity work");
});

test("owner-only admin API routes check the owner themselves", async () => {
  for (const route of ["billing", "billing/setup", "export", "lesson-reports", "teachers"]) {
    const source = await readFile(`app/api/admin/${route}/route.ts`, "utf8");
    assert.match(source, /ownerFromHeaders/, `${route} must not rely on the Worker prefix alone`);
  }
});

test("the build declares the abuse limiter binding", async () => {
  const config = await readFile("vite.config.ts", "utf8");
  assert.match(config, /name: "ABUSE_LIMITER"/);
  assert.match(config, /period: 60/);
});
