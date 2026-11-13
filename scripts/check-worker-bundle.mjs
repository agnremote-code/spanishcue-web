// Worker bundle guard (incident 1102, 2026-11-02). Cloudflare keeps every
// uploaded Worker module resident in the isolate; at ~35 MiB the site fell
// over under crawler traffic. This sums the JavaScript modules in dist/server
// (what the deploy reports as «Total Upload») and fails the build above the
// budget, so a new class can never ship the outage again.
//
// Over budget? Move big data out of the bundle instead of raising the number:
// encrypted blobs (scripts/live-lessons.mjs, scripts/autoestudio-modules.mjs,
// scripts/clasicas-content.mjs) or browser-only code out of SSR
// (build/ssr-client-only-plugin.ts). `await import()` does not help.
import { readdir, stat } from "node:fs/promises";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

export const WORKER_BUNDLE_BUDGET_MIB = 27;
const WARN_MIB = 25.5;

async function moduleBytes(directory, sizes) {
  let total = 0;
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = resolve(directory, entry.name);
    if (entry.isDirectory()) total += await moduleBytes(path, sizes);
    else if (/\.m?js$/.test(entry.name)) {
      const { size } = await stat(path);
      sizes.push([path, size]);
      total += size;
    }
  }
  return total;
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  const server = resolve(process.argv[2] ?? "dist/server");
  const sizes = [];
  const total = await moduleBytes(server, sizes);
  const mib = total / 1048576;
  const summary = `Worker modules: ${mib.toFixed(2)} MiB (budget ${WORKER_BUNDLE_BUDGET_MIB} MiB)`;
  if (mib > WORKER_BUNDLE_BUDGET_MIB) {
    const top = sizes.sort((a, b) => b[1] - a[1]).slice(0, 10)
      .map(([path, size]) => `  ${(size / 1048576).toFixed(2)} MiB  ${path.slice(server.length + 1)}`).join("\n");
    console.error(`${summary}: over budget. Largest modules:\n${top}\nSee scripts/check-worker-bundle.mjs for how to shrink it.`);
    process.exit(1);
  }
  console.log(mib > WARN_MIB ? `${summary}: close to the budget, move data out before adding more.` : summary);
}
