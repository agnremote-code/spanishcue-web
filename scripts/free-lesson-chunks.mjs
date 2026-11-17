/**
 * No free lesson may show the «Something went wrong» screen.
 *
 * A free lesson's page.tsx is a server component. Its client engine is a
 * private (PRO-only) chunk unless scripts/protect-client-assets.mjs lists it
 * in publicRoots. When it is missing there, the page renders for everyone but
 * the visitor's browser gets 403 on the engine chunk and the error screen.
 *
 * This check serves the built Worker locally, opens every free lesson as an
 * anonymous visitor, reads the client components the page really rendered
 * (the `I["<id>"` rows of the RSC payload), and requires every JavaScript
 * file of those components to be served with 200.
 *
 * Run after `npm run build`. FREE_LESSON_ORIGIN checks a running origin
 * instead of starting a local Worker (it must serve the same build).
 */
import { spawn } from "node:child_process";
import { existsSync } from "node:fs";
import { mkdtemp, readFile, readdir, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { build } from "esbuild";

const root = process.cwd();
const launchGate = existsSync(resolve(root, "app/englishcue-launch.ts"));
const built = await build({
  stdin: {
    contents:
      'export {lessons} from "./app/lesson-catalog"; export {isFreeLesson,localLessonPath} from "./app/access-policy";' +
      (launchGate ? 'export {isEnglishCueLesson as isLaunched} from "./app/englishcue-launch";' : ""),
    resolveDir: root,
  },
  bundle: true,
  format: "esm",
  platform: "node",
  write: false,
});
const policy = await import("data:text/javascript;base64," + Buffer.from(built.outputFiles[0].text).toString("base64"));
const { default: assets } = await import(pathToFileURL(resolve(root, "dist/server/__vite_rsc_assets_manifest.js")).href);
const deps = assets.clientReferenceDeps ?? {};
if (!Object.keys(deps).length) throw new Error("The build has no clientReferenceDeps; refusing to pass an empty check.");

const freeLessons = policy.lessons
  .filter((lesson) => policy.isFreeLesson(lesson.id) && (!policy.isLaunched || policy.isLaunched(lesson.id)))
  .map((lesson) => ({ id: lesson.id, path: policy.localLessonPath(lesson) }))
  .filter((lesson) => lesson.path);
if (!freeLessons.length) throw new Error("No free lessons found; refusing to pass an empty check.");

let server;
let state;
let output = "";
async function startWorker() {
  state = await mkdtemp(join(tmpdir(), "free-lesson-chunks-"));
  const shim = `--require ${resolve("scripts/network-interfaces-shim.cjs")}`;
  const env = { ...process.env, NODE_OPTIONS: [process.env.NODE_OPTIONS, shim].filter(Boolean).join(" "), WRANGLER_SEND_METRICS: "false" };
  server = spawn(
    process.execPath,
    ["node_modules/wrangler/bin/wrangler.js", "dev", "--config", "dist/server/wrangler.json", "--port", "0", "--ip", "127.0.0.1", "--local", "--persist-to", state],
    { env, stdio: ["ignore", "pipe", "pipe"] },
  );
  return new Promise((done, fail) => {
    const timer = setTimeout(() => fail(new Error(`Worker startup timed out: ${output.slice(-2400)}`)), 90000);
    const read = (chunk) => {
      output = (output + chunk.toString()).slice(-16000);
      const match = output.match(/Ready on (http:\/\/127\.0\.0\.1:\d+)/);
      if (match) {
        clearTimeout(timer);
        done(match[1]);
      }
    };
    server.stdout.on("data", read);
    server.stderr.on("data", read);
    server.once("error", fail);
    server.once("exit", (code) => {
      clearTimeout(timer);
      fail(new Error(`Worker exited ${code}: ${output.slice(-1200)}`));
    });
  });
}

// Vite lists a CSS-only chunk's empty JavaScript stub in the dependency
// manifest but never writes it and no module imports it. Such a 404 is a
// wasted preload, not a broken page: only a file some shipped module really
// imports counts.
const assetDir = resolve(root, "dist/client/assets");
const shippedScripts = (await readdir(assetDir)).filter((name) => name.endsWith(".js"));
async function importedSomewhere(file) {
  const name = file.split("/").pop();
  for (const script of shippedScripts) {
    if ((await readFile(join(assetDir, script), "utf8")).includes(name)) return true;
  }
  return false;
}

const failures = [];
const chunkStatus = new Map();
try {
  const origin = process.env.FREE_LESSON_ORIGIN || (await startWorker());
  for (const lesson of freeLessons) {
    const response = await fetch(origin + lesson.path, { redirect: "manual", headers: { accept: "text/html" } });
    if (response.status !== 200) {
      failures.push(`${lesson.path} (free lesson ${lesson.id}) answered ${response.status} to an anonymous visitor`);
      continue;
    }
    const html = await response.text();
    const references = new Set([...html.matchAll(/:I\[\\?"([0-9a-f]{6,})\\?"/g)].map((match) => match[1]));
    if (!references.size) {
      failures.push(`${lesson.path} (free lesson ${lesson.id}) rendered no client components; the check could not read the page`);
      continue;
    }
    for (const reference of references) {
      for (const file of deps[reference]?.js ?? []) {
        if (!chunkStatus.has(file)) {
          const status = (await fetch(origin + file, { redirect: "manual" })).status;
          chunkStatus.set(file, status === 404 && !(await importedSomewhere(file)) ? 200 : status);
        }
        if (chunkStatus.get(file) !== 200) {
          failures.push(`${lesson.path} (free lesson ${lesson.id}) needs ${file}, which answers ${chunkStatus.get(file)} to an anonymous visitor`);
        }
      }
    }
  }
} catch (error) {
  if (output) console.error("Worker output:\n" + output);
  throw error;
} finally {
  if (server && server.exitCode === null) {
    server.kill("SIGTERM");
    await new Promise((done) => {
      server.once("exit", done);
      setTimeout(() => {
        server.kill("SIGKILL");
        done();
      }, 3000).unref();
    });
  }
  if (state) await rm(state, { recursive: true, force: true });
}

if (failures.length) {
  console.error(
    "Free lessons would show the error screen. Add each engine to publicRoots in scripts/protect-client-assets.mjs after checking it carries no paid content:\n" +
      [...new Set(failures)].join("\n"),
  );
  process.exit(1);
}
console.log(`Free lesson chunks: ${freeLessons.length} free lessons checked, ${chunkStatus.size} client files public.`);
