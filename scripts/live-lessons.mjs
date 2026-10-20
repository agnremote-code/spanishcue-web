// Live grammar lessons leave the Worker bundle (PERF-001: every uploaded module
// stays resident, and ~240 lessons of text would push the isolate past its
// memory budget). The build swaps `live/registry.ts` for a small index (ids,
// titles, section sizes) and ships each lesson as an encrypted static blob that
// the Worker decrypts on demand, like premium audio. This reads the source
// registry once so the Vite stub and the encryption step agree byte for byte.
import { build } from "esbuild";
import { createRequire } from "node:module";
import { resolve } from "node:path";

const require = createRequire(import.meta.url);

export async function liveLessonData(root = process.cwd()) {
  const outfile = resolve(root, "node_modules/.cache/live-lessons/registry.cjs");
  await build({
    stdin: {
      contents: "export * from './app/grammar-classroom/live/registry';export {lessonSections} from './app/grammar-classroom/live/progress';",
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
  const { liveLessonIds, getLiveLesson, lessonSections } = require(outfile);
  const info = {};
  const bodies = {};
  for (const id of liveLessonIds) {
    const lesson = getLiveLesson(id);
    info[id] = { title: lesson.title, level: lesson.level, sections: lessonSections(lesson) };
    bodies[id] = JSON.stringify(lesson);
  }
  return { ids: liveLessonIds, info, bodies };
}

/** The server-side registry the Worker build uses instead of the lesson sources. */
export function liveLessonIndexModule({ ids, info }) {
  return `import { env } from "cloudflare:workers";
const info = ${JSON.stringify(info)};
export const liveLessonIds = ${JSON.stringify(ids)};
export const getLiveLessonInfo = id => Object.hasOwn(info, id) ? { id: Number(id), ...info[id] } : undefined;
const cache = new Map();
export async function loadLiveLesson(id) {
  if (!Object.hasOwn(info, id)) return undefined;
  if (cache.has(id)) { const hit = cache.get(id); cache.delete(id); cache.set(id, hit); return hit; }
  const loader = globalThis.__spanishcueLiveLessons;
  if (!loader) throw new Error("Live lesson loader is not installed");
  const lesson = loader.load(env.ASSETS, Number(id));
  cache.set(id, lesson);
  lesson.catch(() => cache.delete(id));
  while (cache.size > 16) cache.delete(cache.keys().next().value);
  return lesson;
}
`;
}
