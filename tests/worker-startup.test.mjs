// Worker memory budget (PERF-001). The Workers runtime keeps every uploaded
// module resident in the isolate, imported or not. With the ~10 MB of paid
// chunk bodies bundled, the isolate started at ~134 MiB, above Cloudflare's
// 128 MB limit, so every request ran on a freshly started isolate (~1 s TTFB).
// Paid chunks must stay encrypted static blobs and the bundle must not grow
// back past the budget. Run after the build:
// node --import ./scripts/worker-shape-loader.mjs --test tests/worker-startup.test.mjs
import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile, readdir, stat } from "node:fs/promises";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
import test from "node:test";

const server = resolve("dist/server");
const client = resolve("dist/client");
// Uploaded modules after PERF-001: about 32 MiB (isolate ~95 MiB at startup).
const BUNDLE_BUDGET_BYTES = 36 * 1024 * 1024;

async function moduleBytes(directory) {
  let total = 0;
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = resolve(directory, entry.name);
    if (entry.isDirectory()) total += await moduleBytes(path);
    else if (/\.m?js$/.test(entry.name)) total += (await stat(path)).size;
  }
  return total;
}

const records = async () => (await import(pathToFileURL(resolve(server, "private-client-assets.js")).href)).default;

test("paid chunk bodies stay out of the Worker bundle", async () => {
  const report = JSON.parse(await readFile("dist/.openai/client-protection-report.json", "utf8"));
  const assets = await records();
  assert.deepEqual(Object.keys(assets).sort(), report.protectedFiles.map((file) => `/${file}`).sort());
  for (const [path, record] of Object.entries(assets)) {
    assert.match(record.assetPath, /^\/_protected-client\/[0-9a-f]{64}\.bin$/, path);
    assert.equal((await stat(client + record.assetPath)).size, record.size + 16, path);
  }
  assert.ok((await stat(resolve(server, "private-client-assets.js"))).size < 512 * 1024, "only decryption records ship in the bundle");
  const bytes = await moduleBytes(server);
  assert.ok(bytes <= BUNDLE_BUDGET_BYTES, `Worker modules total ${(bytes / 1048576).toFixed(1)} MiB, budget ${BUNDLE_BUDGET_BYTES / 1048576} MiB`);
});

test("every paid chunk decrypts to its original JavaScript", async () => {
  const worker = await import(pathToFileURL(resolve(server, "index.js")).href);
  const env = { ASSETS: { fetch: async (request) => new Response(await readFile(client + new URL(request.url).pathname)) } };
  for (const [path, record] of Object.entries(await records())) {
    const response = await worker.__testServePrivateMedia(new Request(`https://spanishcue.test${path}`), env, record);
    assert.equal(response.status, 200, path);
    assert.equal(response.headers.get("content-type"), "text/javascript; charset=utf-8", path);
    assert.match(response.headers.get("cache-control"), /no-store/, path);
    const body = Buffer.from(await response.arrayBuffer());
    assert.equal(`"${createHash("sha256").update(body).digest("hex")}"`, record.etag, path);
  }
});
