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
// 4. three.js and its addons (~2.3 MB): WebGL only ever runs in the browser,
//    from effects. Many 3D helpers are still reachable from SSR through plain
//    `import()` calls or shared modules, so in SSR every `three` import
//    resolves to an inert stand-in with the same export names: any access,
//    call or `new` returns the stand-in again, so a module that builds
//    geometry at import time still loads on the server and simply does
//    nothing. The client build keeps the real three.js.

const EMPTY_MODULE = "Promise.resolve({ default: () => null })";

const SSR_FALSE_LOADER = /(dynamic\(\s*\(\)\s*=>\s*)import\(\s*(['"])[^'"]+\2\s*\)(\s*,\s*\{\s*ssr\s*:\s*false\b)/g;

// File (relative to the repo) → import() calls that only run in effects or
// event handlers of that client component.
const EFFECT_ONLY_IMPORTS: Record<string, RegExp> = {
  "app/noche-abierta/NocheGame.tsx": /import\(\s*'\.\/World3D'\s*\)/g,
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

const THREE_STUB_PREFIX = "\0spanishcue-ssr-three:";
const isThree = (source: string) => source === "three" || source.startsWith("three/");

// Inert stand-in for every three.js value on the server (see 4. above).
const THREE_STUB_RUNTIME = `
const target = function () {};
let stub;
const handler = {
  get(_, key) {
    if (key === "then") return undefined;
    if (key === Symbol.toPrimitive) return () => 0;
    if (key === Symbol.iterator) return function* () {};
    if (key === "toString" || key === "valueOf") return () => "";
    return stub;
  },
  set() { return true; },
  has() { return false; },
  deleteProperty() { return true; },
  defineProperty() { return true; },
  apply() { return stub; },
  construct() { return stub; },
};
stub = new Proxy(target, handler);
`;

// Export names come from the real module, read in Node one at a time (three's
// addons import three itself, and parallel first loads of an ES module race).
let exportQueue: Promise<unknown> = Promise.resolve();
const exportNames = new Map<string, Promise<string[]>>();
function realExportNames(file: string) {
  let names = exportNames.get(file);
  if (!names) {
    names = exportQueue.then(async () => {
      const { pathToFileURL } = await import("node:url");
      return Object.keys(await import(pathToFileURL(file).href));
    });
    exportQueue = names.catch(() => undefined);
    exportNames.set(file, names);
  }
  return names;
}

async function threeStubModule(source: string, file: string) {
  const names = (await realExportNames(file)).filter((name) => name !== "default" && /^[A-Za-z_$][\w$]*$/.test(name));
  return `// SSR stand-in for ${source} (build/ssr-client-only-plugin.ts); the browser build keeps three.js.
${THREE_STUB_RUNTIME}
export default stub;
${names.map((name) => `export const ${name} = stub;`).join("\n")}
`;
}

const relative = (root: string, id: string) => {
  const clean = id.split("?")[0].replace(/\\/g, "/");
  const base = root.replace(/\\/g, "/").replace(/\/?$/, "/");
  return clean.startsWith(base) ? clean.slice(base.length) : clean;
};

export function ssrClientOnly(): Plugin {
  let root = process.cwd();
  const seen = new Set<string>();
  const threeFiles = new Map<string, string>();
  return {
    name: "spanishcue-ssr-client-only",
    apply: "build",
    enforce: "pre",
    configResolved(config) {
      root = config.root;
    },
    async resolveId(source, importer, options) {
      if (this.environment?.name !== "ssr" || !isThree(source)) return null;
      const real = await this.resolve(source, importer, { ...options, skipSelf: true });
      if (!real) return null;
      seen.add("three");
      threeFiles.set(source, real.id.split("?")[0]);
      return `${THREE_STUB_PREFIX}${source}`;
    },
    async load(id) {
      if (this.environment?.name !== "ssr") return null;
      if (id.startsWith(THREE_STUB_PREFIX)) {
        const source = id.slice(THREE_STUB_PREFIX.length);
        return threeStubModule(source, threeFiles.get(source)!);
      }
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
