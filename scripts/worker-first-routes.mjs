// Public hashed chunks under /assets/ are served straight from the asset layer.
// Sending them through the Worker made a page's ~20 parallel script requests
// queue behind each other (10–16s, sometimes 503), so pages never hydrated.
//
// Every other top-level entry of the client build still runs the Worker first
// (premium audio, routed images, media headers). Protected chunks are absent
// from dist/client, so their /assets/ requests miss the asset layer and reach
// the Worker's authorization gate. Pages are never assets and always reach it.
import assert from "node:assert/strict";
import { readdir } from "node:fs/promises";

const LIMIT = 100; // Cloudflare's maximum number of run_worker_first entries.
const REQUIRED = ["/audio/*", "/_protected-audio/*", "/_protected-client/*", "/_routed-webp/*"];

export function workerFirstRoutes(entries) {
  const routes = new Set(["/"]);
  for (const { name, directory } of entries) {
    if (name === "assets" || name === "_headers" || name === "_redirects" || name.startsWith(".")) continue;
    routes.add(directory ? `/${name}/*` : `/${name}`);
  }
  const list = [...routes].sort();
  assertWorkerFirstRoutes(list);
  return list;
}

export function assertWorkerFirstRoutes(list) {
  assert.ok(Array.isArray(list), "run_worker_first must be a route list");
  assert.ok(list.length <= LIMIT, `run_worker_first has ${list.length} entries; Cloudflare allows ${LIMIT}`);
  for (const route of list) {
    assert.match(route, /^\//, `${route} must be a positive route`);
    assert.ok(route !== "/*" && route !== "/assets/*" && !route.startsWith("/assets/"), `${route} would send public chunks through the Worker`);
  }
  for (const route of REQUIRED) assert.ok(list.includes(route), `${route} must run the Worker first`);
}

export async function clientEntries(directory) {
  return (await readdir(directory, { withFileTypes: true })).map(entry => ({ name: entry.name, directory: entry.isDirectory() }));
}
