import type { Plugin } from "vite";

// Prefetch on intent only (incident 2026-11-17, Cloudflare Error 1102).
//
// vinext's <Link> prefetches the `.rsc` payload of every link that scrolls
// into view. Here each payload is a full server render in the Worker, and an
// index page shows ~35 links: one page view cost ~36 renders, most of them for
// pages the visitor never opens. A handful of visitors (or one headless
// browser) was enough to exhaust the isolate's memory.
//
// This plugin turns off the viewport observer in vinext's Link shim. Links
// still prefetch on hover and on touch start, so navigation stays instant for
// the link the visitor is actually about to open.

const LINK_SHIM = /\/vinext\/dist\/shims\/link\.js$/;
const OBSERVER = "const observer = getSharedObserver();";

export function intentPrefetchOnly(): Plugin {
  let patched = false;
  return {
    name: "spanishcue-intent-prefetch-only",
    apply: "build",
    enforce: "pre",
    transform(code, id) {
      if (!LINK_SHIM.test(id.split("?")[0].replace(/\\/g, "/"))) return null;
      if (!code.includes(OBSERVER)) {
        throw new Error("intent-prefetch-plugin: vinext's Link shim changed; update build/intent-prefetch-plugin.ts so viewport prefetch stays off");
      }
      patched = true;
      return { code: code.replace(OBSERVER, "const observer = null;"), map: null };
    },
    buildEnd() {
      if (this.environment?.name === "client" && !patched) {
        throw new Error("intent-prefetch-plugin: vinext's Link shim was not seen in the client build; viewport prefetch would be back on");
      }
    },
  };
}
