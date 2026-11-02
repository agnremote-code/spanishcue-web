// Classic conversation question banks leave the Worker bundle (incident
// 2026-11-02, Error 1102: every uploaded module stays resident in the isolate,
// see docs/board/perf-001-notes.md). The ten classes (IDs 246–255) carry 2,100
// questions plus English support at A0/A1. The build swaps
// `app/conversacion-clasica/content.ts` for a tiny index and ships each class's
// seven levels as one encrypted static blob the Worker decrypts on demand,
// exactly like Autoestudio modules (scripts/autoestudio-modules.mjs).
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { CLASES } from "../app/conversacion-clasica/clases.mjs";

export async function clasicasData(root = process.cwd()) {
  const bodies = {};
  for (const { slug } of CLASES) {
    const { CONTENT } = await import(pathToFileURL(resolve(root, `app/${slug}/content/index.mjs`)).href);
    bodies[slug] = JSON.stringify(CONTENT);
  }
  return { slugs: CLASES.map((c) => c.slug), bodies };
}

/** The server-side loader the Worker build uses instead of the question sources. */
export function clasicasIndexModule({ slugs }) {
  return `import { env } from "cloudflare:workers";
const slugs = new Set(${JSON.stringify(slugs)});
const cache = new Map();
export async function loadClassicContent(slug) {
  if (!slugs.has(slug)) return undefined;
  if (cache.has(slug)) { const hit = cache.get(slug); cache.delete(slug); cache.set(slug, hit); return hit; }
  const loader = globalThis.__spanishcueClasicas;
  if (!loader) throw new Error("Classic conversation loader is not installed");
  const body = loader.load(env.ASSETS, slug);
  cache.set(slug, body);
  body.catch(() => cache.delete(slug));
  while (cache.size > 4) cache.delete(cache.keys().next().value);
  return body;
}
`;
}
