import assert from "node:assert/strict";

const origin = process.env.SPANISHCUE_PRODUCTION_ORIGIN || "https://spanishcue.com";

async function check(path, expectedStatus, options = {}) {
  const response = await fetch(origin + path, {
    redirect: options.redirect || "manual",
    headers: options.headers || {},
  });
  assert.equal(
    response.status,
    expectedStatus,
    `${path}: expected ${expectedStatus}, got ${response.status}`,
  );
  return response;
}

const homepage = await check("/", 200, { redirect: "follow" });
assert.match(await homepage.text(), /SPANISHCUE/i);

await check("/ingresar", 200, { redirect: "follow" });

const missing = await check("/does-not-exist-automated-smoke", 404, {
  redirect: "manual",
});
assert.match(await missing.text(), /404|no está disponible/i);

const account = await check("/cuenta", 302, { redirect: "manual" });
assert.match(account.headers.get("location") || "", /\/ingresar/);

const proLesson = await check("/tablero-de-eso-si-hablo", 302, {
  redirect: "manual",
});
assert.match(proLesson.headers.get("location") || "", /\/acceso/);

const students = await check("/api/students", 401, { redirect: "manual" });
assert.match(students.headers.get("cache-control") || "", /no-store/i);

console.log("Production smoke checks passed.");
