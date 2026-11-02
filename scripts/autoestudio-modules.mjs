// Autoestudio module bodies leave the Worker bundle (incident 2026-11-02, Error
// 1102). PERF-001 showed that every uploaded module stays resident in the isolate
// whether or not it is imported; the 120 weekly modules plus their English
// support were ~7 MB of the bundle and pushed the isolate's base heap close to
// Cloudflare's 128 MB limit, so concurrent page renders killed it. The build
// swaps `curriculum/course.ts` for a small index (level overviews with module
// summaries) and ships each module body, with its English, as an encrypted
// static blob the Worker decrypts on demand, exactly like live grammar lessons
// (scripts/live-lessons.mjs).
import { build } from "esbuild";
import { createRequire } from "node:module";
import { resolve } from "node:path";

const require = createRequire(import.meta.url);

export async function autoestudioModuleData(root = process.cwd()) {
  const outfile = resolve(root, "node_modules/.cache/autoestudio-modules/course.cjs");
  await build({
    stdin: {
      contents:
        "export { modulesByLevel, summarize } from './app/autoestudio/curriculum/course';" +
        "export { levels } from './app/autoestudio/curriculum/levels';" +
        "export { englishFor } from './app/autoestudio/english';",
      resolveDir: root,
      loader: "ts",
    },
    bundle: true,
    platform: "node",
    format: "cjs",
    outfile,
    logLevel: "error",
  });
  delete require.cache[outfile];
  const { modulesByLevel, summarize, levels, englishFor } = require(outfile);
  const summaries = {};
  const bodies = {};
  for (const level of levels) {
    const modules = modulesByLevel[level.id] ?? [];
    summaries[level.id] = modules.map(summarize);
    for (const entry of modules) {
      bodies[entry.id] = JSON.stringify({ module: entry, english: englishFor(entry.level, entry.week) ?? null });
    }
  }
  return { summaries, bodies };
}

/** The server-side course registry the Worker build uses instead of the module sources. */
export function autoestudioIndexModule({ summaries }) {
  return `import { env } from "cloudflare:workers";
import { levels } from "./levels";
const summaries = ${JSON.stringify(summaries)};
export function publishedLevels() {
  return levels.map((level) => ({ ...level, modules: summaries[level.id] ?? [] })).filter((level) => level.modules.length > 0);
}
export function findModuleSummary(levelId, slug) {
  const match = /^semana-([1-9]\\d?)$/.exec(slug);
  if (!match) return undefined;
  return (summaries[levelId] ?? []).find((module) => module.week === Number(match[1]));
}
export function neighbours(module) {
  const ordered = levels.flatMap((level) => summaries[level.id] ?? []);
  const index = ordered.findIndex((candidate) => candidate.id === module.id);
  return {
    previous: index > 0 ? ordered[index - 1] : null,
    next: index >= 0 && index < ordered.length - 1 ? ordered[index + 1] : null,
  };
}
const cache = new Map();
export async function loadModule(levelId, slug) {
  const summary = findModuleSummary(levelId, slug);
  if (!summary) return undefined;
  const id = summary.id;
  if (cache.has(id)) { const hit = cache.get(id); cache.delete(id); cache.set(id, hit); return hit; }
  const loader = globalThis.__spanishcueAutoestudio;
  if (!loader) throw new Error("Autoestudio module loader is not installed");
  const body = loader.load(env.ASSETS, id);
  cache.set(id, body);
  body.catch(() => cache.delete(id));
  while (cache.size > 8) cache.delete(cache.keys().next().value);
  return body;
}
`;
}
