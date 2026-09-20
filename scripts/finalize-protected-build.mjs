import {
  access,
  cp,
  mkdtemp,
  readFile,
  rename,
  rm,
} from "node:fs/promises";
import { tmpdir } from "node:os";
import { relative, resolve } from "node:path";

const distRoot = resolve("dist");
const safeDistRoot = resolve(".sites-safe-dist");
const report = JSON.parse(
  await readFile(resolve(distRoot, ".openai/client-protection-report.json")),
);
const blockedBuildPaths = new Set([
  ...report.protectedFiles.map((file) => `client/${file}`),
  ...report.protectedMediaFiles.map((file) => `client${file}`),
  ...(report.routedWebpFiles ?? []).map((file) => `client${file}`),
  "client/.vite/manifest.json",
]);

for (let attempt = 0; ; attempt++) {
  await rm(safeDistRoot, { recursive: true, force: true });
  try {
    await cp(distRoot, safeDistRoot, {
      recursive: true,
      filter: (source) => {
        const pathWithinDist = relative(distRoot, source).split("\\").join("/");
        return !blockedBuildPaths.has(pathWithinDist) && !/(^|\/)\.[^/]+\.[A-Za-z0-9]{6}$/.test(pathWithinDist);
      },
    });
    break;
  } catch (error) {
    // Workspace synchronization can atomically rename a temporary copy between
    // readdir and lstat. Retry only that race, never a missing build asset.
    if (attempt >= 3 || error?.code !== "ENOENT" || !/\/\.[^/]+\.[A-Za-z0-9]{6}$/.test(error?.path ?? "")) throw error;
  }
}

// Node's recursive copy can retain descendants of an allowed directory even
// when an individual descendant is blocked. Remove the exact denylisted files
// once more before the safe build replaces dist.
for (const pathWithinDist of blockedBuildPaths) {
  await rm(resolve(safeDistRoot, pathWithinDist), { force: true });
}

const displacedRoot = await mkdtemp(
  resolve(tmpdir(), "spanishcue-unprotected-dist-"),
);
await rename(distRoot, resolve(displacedRoot, "dist"));
await rename(safeDistRoot, distRoot);
await rm(displacedRoot, { recursive: true, force: true });

const pause = (milliseconds) =>
  new Promise((resolvePause) => setTimeout(resolvePause, milliseconds));
const deadline = Date.now() + 10_000;
let stableChecks = 0;
let recreatedPaths = [];
while (Date.now() < deadline) {
  for (const pathWithinDist of blockedBuildPaths) {
    await rm(resolve(distRoot, pathWithinDist), { force: true });
  }
  await pause(50);
  recreatedPaths = [];
  for (const pathWithinDist of blockedBuildPaths) {
    try {
      await access(resolve(distRoot, pathWithinDist));
      recreatedPaths.push(pathWithinDist);
    } catch (error) {
      if (error?.code !== "ENOENT") throw error;
    }
  }
  stableChecks = recreatedPaths.length === 0 ? stableChecks + 1 : 0;
  if (stableChecks >= 12) break;
}
if (stableChecks < 12) {
  throw new Error(
    `Protected assets kept reappearing in final build: ${recreatedPaths.join(", ")}`,
  );
}

console.log(
  `Finalized protected build: ${blockedBuildPaths.size} private paths excluded.`,
);
