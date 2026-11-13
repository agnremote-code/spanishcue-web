import type { Plugin } from "vite";

// Worker bundle budget (docs: tests/worker-startup.test.mjs, incident 1102 of
// 2026-11-02). The Workers runtime keeps every uploaded module resident, so
// browser-only code that the SSR environment never executes still costs
// isolate memory. This plugin removes such code from the SSR build only; the
// client build is untouched, so what the browser receives does not change.
//
// 1. `dynamic(() => import('X'), { ssr: false })`: vinext's server shim never
//    calls the loader (it renders `loading` instead), so in SSR the import is
//    replaced with an empty component. This drops the 3D worlds and three.js.
// 2. Imports run only from effects/callbacks of client components (listed
//    below). Effects never run on the server.
// 3. Noche abierta's full street data: the server render starts from
//    `emptyStreet()` and never reads an encounter, so the SSR copy of
//    street.mjs keeps the API without the ~4 MB of scene text.

const EMPTY_MODULE = "Promise.resolve({ default: () => null })";

const SSR_FALSE_LOADER = /(dynamic\(\s*\(\)\s*=>\s*)import\(\s*(['"])[^'"]+\2\s*\)(\s*,\s*\{\s*ssr\s*:\s*false\b)/g;

// File (relative to the repo) → import() calls that only run in effects or
// event handlers of that client component.
const EFFECT_ONLY_IMPORTS: Record<string, RegExp> = {
  "app/noche-abierta/NocheGame.tsx": /import\(\s*'\.\/World3D'\s*\)/g,
  "app/el-reino-de-la-rosa-dormida/ReinoGame.tsx": /import\(\s*'\.\/World3D'\s*\)/g,
};

const NOCHE_STREET = "app/noche-abierta/street.mjs";
const NOCHE_STREET_SSR = `// SSR copy (build/ssr-client-only-plugin.ts): the browser build keeps the data.
import { registerStreet } from "./street-core.mjs";
import "./talk/index.mjs";
export const ALL_ENCOUNTERS = Object.freeze([]);
export const ALL_A0_SCENES = {};
export const ALL_A1_WORDS = {};
export function registerFullStreet() {}
void registerStreet;
export * from "./street-core.mjs";
`;

const relative = (root: string, id: string) => {
  const clean = id.split("?")[0].replace(/\\/g, "/");
  const base = root.replace(/\\/g, "/").replace(/\/?$/, "/");
  return clean.startsWith(base) ? clean.slice(base.length) : clean;
};

export function ssrClientOnly(): Plugin {
  let root = process.cwd();
  const seen = new Set<string>();
  return {
    name: "spanishcue-ssr-client-only",
    apply: "build",
    enforce: "pre",
    configResolved(config) {
      root = config.root;
    },
    load(id) {
      if (this.environment?.name !== "ssr") return null;
      if (relative(root, id) !== NOCHE_STREET) return null;
      seen.add(NOCHE_STREET);
      return NOCHE_STREET_SSR;
    },
    transform(code, id) {
      if (this.environment?.name !== "ssr") return null;
      const file = relative(root, id);
      if (!file.startsWith("app/") || !/\.[cm]?[jt]sx?$/.test(file)) return null;
      let next = code.replace(SSR_FALSE_LOADER, `$1${EMPTY_MODULE}$3`);
      const effectOnly = EFFECT_ONLY_IMPORTS[file];
      if (effectOnly) {
        const replaced = next.replace(effectOnly, EMPTY_MODULE);
        if (replaced === next) this.error(`${file}: expected effect-only import not found; update build/ssr-client-only-plugin.ts`);
        next = replaced;
        seen.add(file);
      }
      return next === code ? null : { code: next, map: null };
    },
    buildEnd() {
      if (this.environment?.name !== "ssr") return;
      for (const file of [NOCHE_STREET, ...Object.keys(EFFECT_ONLY_IMPORTS)]) {
        if (!seen.has(file)) this.warn(`${file} was not part of the SSR build; check build/ssr-client-only-plugin.ts`);
      }
    },
  };
}
