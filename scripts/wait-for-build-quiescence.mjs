import { readdir, stat } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve("dist");
const pause = (milliseconds) => new Promise((resolvePause) => setTimeout(resolvePause, milliseconds));

async function fingerprint(directory) {
  let count = 0;
  let newest = 0;
  const pending = [directory];
  while (pending.length) {
    const current = pending.pop();
    for (const entry of await readdir(current, { withFileTypes: true })) {
      const path = resolve(current, entry.name);
      if (entry.isDirectory()) pending.push(path);
      else if (entry.isFile()) {
        const details = await stat(path);
        count += 1;
        newest = Math.max(newest, details.mtimeMs);
      }
    }
  }
  return `${count}:${newest}`;
}

const deadline = Date.now() + 10_000;
let previous = "";
let stableChecks = 0;
while (Date.now() < deadline) {
  const current = await fingerprint(root);
  stableChecks = current === previous ? stableChecks + 1 : 0;
  if (stableChecks >= 4) process.exit(0);
  previous = current;
  await pause(250);
}
throw new Error("Build output did not become quiescent within 10 seconds.");
