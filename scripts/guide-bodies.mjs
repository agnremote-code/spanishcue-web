// Long-form guide bodies leave the Worker bundle (budget: scripts/check-worker-bundle.mjs).
// The Material ELE guides (app/material-ele/guias.ts) and the English teaching
// guides (app/guides/data/*.ts) are authored as TypeScript and stay that way:
// tests, dev and type-checking read the full sources. The Worker build keeps
// each guide's card data (title, path, keywords…) and ships the prose
// (intro, sections, FAQ) as one encrypted blob per guide, decrypted on demand
// exactly like the classic conversation banks (scripts/clasicas-content.mjs).
import { resolve } from "node:path";
import { build } from "esbuild";

/** Data modules whose exported guide array is trimmed in the Worker build. */
export const GUIDE_SOURCES = [
  { file: "app/material-ele/guias.ts", exportName: "guiaPages", kind: "guia", heavy: ["intro", "sections", "faq"] },
  { file: "app/guides/data/core.ts", exportName: "coreGuides", kind: "guide", heavy: ["sections"] },
  { file: "app/guides/data/preply.ts", exportName: "preplyGuides", kind: "guide", heavy: ["sections"] },
  { file: "app/guides/data/italki.ts", exportName: "italkiGuides", kind: "guide", heavy: ["sections"] },
  { file: "app/guides/data/other-platforms.ts", exportName: "otherPlatformGuides", kind: "guide", heavy: ["sections"] },
  { file: "app/guides/data/pricing-business.ts", exportName: "pricingBusinessGuides", kind: "guide", heavy: ["sections"] },
  { file: "app/guides/data/operations-retention.ts", exportName: "operationsRetentionGuides", kind: "guide", heavy: ["sections"] },
  { file: "app/guides/data/tutor-niches.ts", exportName: "tutorNicheGuides", kind: "guide", heavy: ["sections"] },
];

let cached;
/**
 * Evaluates the guide sources once (they compute counts from the catalog) and
 * splits every guide into its card data and its body.
 * bodies: "guia:<slug>" | "guide:<slug>" → JSON string of the heavy fields.
 */
export function guideBodiesData(root = process.cwd()) {
  cached ??= (async () => {
    const entry = GUIDE_SOURCES.map((source, i) => `export { ${source.exportName} as s${i} } from ${JSON.stringify("./" + source.file)};`).join("\n");
    const result = await build({ stdin: { contents: entry, resolveDir: root, loader: "ts" }, bundle: true, write: false, platform: "node", format: "esm", logLevel: "error" });
    const mod = await import("data:text/javascript;base64," + Buffer.from(result.outputFiles[0].text).toString("base64"));
    const bodies = {};
    const light = {};
    GUIDE_SOURCES.forEach((source, i) => {
      const pages = mod[`s${i}`];
      if (!Array.isArray(pages) || !pages.length) throw new Error(`${source.file}: ${source.exportName} is not a non-empty array`);
      light[source.file] = pages.map((page) => {
        const card = { ...page };
        const body = {};
        for (const field of source.heavy) {
          if (!(field in page)) throw new Error(`${source.file}: ${page.slug} has no ${field}`);
          body[field] = page[field];
          delete card[field];
        }
        const key = `${source.kind}:${page.slug}`;
        if (Object.hasOwn(bodies, key)) throw new Error(`Duplicate guide body ${key}`);
        bodies[key] = JSON.stringify(body);
        return card;
      });
    });
    return { bodies, light };
  })();
  return cached;
}

/**
 * Worker-build copy of a guide data module: the array literal is replaced by
 * the card data, everything else in the file (types, helpers, maps) is kept.
 */
export function trimGuideModule(code, file, light) {
  const source = GUIDE_SOURCES.find((s) => s.file === file);
  const marker = new RegExp(`^export const ${source.exportName}: [A-Za-z]+\\[\\] = \\[$`, "m");
  const start = code.search(marker);
  if (start < 0) throw new Error(`${file}: «export const ${source.exportName}: …[] = [» not found; update scripts/guide-bodies.mjs`);
  const end = code.indexOf("\n];", start);
  if (end < 0) throw new Error(`${file}: end of ${source.exportName} not found`);
  const head = code.slice(start, code.indexOf("=", start) + 1);
  return `${code.slice(0, start)}${head} JSON.parse(${JSON.stringify(JSON.stringify(light[file]))});${code.slice(end + 3)}`;
}

/** The Worker-build replacement of app/guide-bodies.ts. */
export function guideBodyLoaderModule() {
  return `import { env } from "cloudflare:workers";
const cache = new Map();
function loadBody(key) {
  if (cache.has(key)) { const hit = cache.get(key); cache.delete(key); cache.set(key, hit); return hit; }
  const loader = globalThis.__spanishcueGuides;
  if (!loader) throw new Error("Guide body loader is not installed");
  const body = loader.load(env.ASSETS, key).then((value) => { if (!value) throw new Error("Guide body missing: " + key); return value; });
  cache.set(key, body);
  body.catch(() => cache.delete(key));
  while (cache.size > 24) cache.delete(cache.keys().next().value);
  return body;
}
export async function guiaWithBody(page) { return page.sections ? page : { ...page, ...(await loadBody("guia:" + page.slug)) }; }
export async function guideWithBody(guide) { return guide.sections ? guide : { ...guide, ...(await loadBody("guide:" + guide.slug)) }; }
`;
}

export const guideSourceFiles = new Set(GUIDE_SOURCES.map((s) => resolve(s.file).replace(/\\/g, "/")));
