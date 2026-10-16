import assert from "node:assert/strict";
import test from "node:test";
import { workerFirstRoutes } from "../scripts/worker-first-routes.mjs";
import { stagingConfig } from "../scripts/prepare-staging-worker-config.mjs";

const entries = [
  { name: "assets", directory: true },
  { name: "audio", directory: true },
  { name: "_protected-audio", directory: true },
  { name: "_routed-webp", directory: true },
  { name: "_headers", directory: false },
  { name: "og.png", directory: false },
];

test("public chunks skip the Worker while media and pages still run it first", () => {
  const routes = workerFirstRoutes(entries);
  assert.deepEqual(routes, ["/", "/_protected-audio/*", "/_routed-webp/*", "/audio/*", "/og.png"]);
  assert.ok(!routes.some(route => route.startsWith("/assets") || route.startsWith("!") || route === "/*"));
});

test("route list refuses to drop premium media or exceed Cloudflare's limit", () => {
  assert.throws(() => workerFirstRoutes(entries.filter(entry => entry.name !== "audio")));
  const many = Array.from({ length: 100 }, (_, index) => ({ name: `d${index}`, directory: true }));
  assert.throws(() => workerFirstRoutes([...entries, ...many]));
});

test("deploy config only accepts a validated route list", () => {
  const generated = { main: "index.js", assets: { binding: "ASSETS", run_worker_first: true, directory: "../client" }, vars: {}, d1_databases: [] };
  assert.deepEqual(stagingConfig(generated, { workerFirst: workerFirstRoutes(entries) }).assets.run_worker_first, workerFirstRoutes(entries));
  assert.equal(stagingConfig(generated).assets.run_worker_first, true);
  assert.throws(() => stagingConfig(generated, { workerFirst: ["/*", "!/assets/*"] }));
});
