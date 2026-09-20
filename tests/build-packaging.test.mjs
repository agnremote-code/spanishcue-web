import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { access, mkdtemp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { fileURLToPath } from "node:url";
import { join } from "node:path";
import test from "node:test";
import { sites } from "../build/sites-vite-plugin.ts";

const finalizer = fileURLToPath(new URL("../scripts/finalize-protected-build.mjs", import.meta.url));

test("concurrent Vite environments package Sites metadata only once", async () => {
  const root = await mkdtemp(join(tmpdir(), "spanishcue-sites-plugin-"));
  try {
    await mkdir(join(root, ".openai"), { recursive: true });
    await mkdir(join(root, "drizzle"), { recursive: true });
    await writeFile(join(root, ".openai", "hosting.json"), '{"project_id":"test"}\n');
    await writeFile(join(root, "drizzle", "0000_test.sql"), "select 1;\n");

    const plugin = sites();
    assert.equal(typeof plugin.configResolved, "function");
    assert.equal(typeof plugin.closeBundle, "function");
    await plugin.configResolved({ root });
    await Promise.all([plugin.closeBundle(), plugin.closeBundle(), plugin.closeBundle()]);

    assert.equal(await readFile(join(root, "dist", ".openai", "hosting.json"), "utf8"), '{"project_id":"test"}\n');
    await access(join(root, "dist", ".openai", "drizzle", "0000_test.sql"));
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});

test("final protected build absorbs a late static asset copy", async () => {
  const root = await mkdtemp(join(tmpdir(), "spanishcue-finalizer-"));
  const lateAsset = join(root, "dist", "client", "late.webp");
  let writer;
  try {
    await mkdir(join(root, "dist", ".openai"), { recursive: true });
    await mkdir(join(root, "dist", "client"), { recursive: true });
    await writeFile(lateAsset, "late copy");
    await writeFile(
      join(root, "dist", ".openai", "client-protection-report.json"),
      JSON.stringify({
        protectedFiles: [],
        protectedMediaFiles: [],
        routedWebpFiles: ["/late.webp"],
      }),
    );

    writer = setInterval(() => void writeFile(lateAsset, "late copy").catch(() => {}), 2);
    const child = spawn(process.execPath, [finalizer], { cwd: root, stdio: ["ignore", "pipe", "pipe"] });
    let stderr = "";
    child.stderr.setEncoding("utf8");
    child.stderr.on("data", (chunk) => (stderr += chunk));
    setTimeout(() => clearInterval(writer), 2_250);
    const exitCode = await new Promise((resolve, reject) => {
      child.once("error", reject);
      child.once("exit", resolve);
    });

    assert.equal(exitCode, 0, stderr);
    await assert.rejects(access(lateAsset), { code: "ENOENT" });
  } finally {
    if (writer) clearInterval(writer);
    await rm(root, { recursive: true, force: true });
  }
});
