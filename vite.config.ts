import vinext from "vinext";
import { defineConfig } from "vite";
import hostingConfig from "./.openai/hosting.json";
import { sites } from "./build/sites-vite-plugin";
import { createRequire } from "node:module";
import { liveLessonData, liveLessonIndexModule } from "./scripts/live-lessons.mjs";

const serverRequire = createRequire(import.meta.url);

const SITE_CREATOR_PLACEHOLDER_DATABASE_ID =
  "00000000-0000-4000-8000-000000000000";

const { d1, r2 } = hostingConfig;

// macOS Seatbelt blocks FSEvents, so Codex previews need polling for HMR.
const isCodexSeatbeltSandbox = process.env.CODEX_SANDBOX === "seatbelt";

const localBindingConfig = (runWorkerFirst: boolean | string[]) => ({
  main: "./worker/index.ts",
  compatibility_flags: ["nodejs_compat"],
  assets: {
    binding: "ASSETS",
    run_worker_first: runWorkerFirst,
  },
  // Per-IP limit for anonymous checkout/lead/speech POSTs (worker/rate-limit.ts).
  // Keys carry the deployment label, so staging and production never share counters.
  ratelimits: [
    {
      name: "ABUSE_LIMITER",
      namespace_id: "7301",
      simple: { limit: 10, period: 60 as const },
    },
  ],
  d1_databases: d1
    ? [
        {
          binding: d1,
          database_name: "site-creator-d1",
          database_id: SITE_CREATOR_PLACEHOLDER_DATABASE_ID,
        },
      ]
    : [],
  r2_buckets: r2
    ? [
        {
          binding: r2,
          bucket_name: "site-creator-r2",
        },
      ]
    : [],
});

export default defineConfig(async ({ command }) => {
  // Keep Wrangler and Miniflare state project-local. These are non-secret tool
  // settings; application environment belongs in ignored `.env*` files.
  process.env.WRANGLER_WRITE_LOGS ??= "false";
  process.env.WRANGLER_LOG_PATH ??= ".wrangler/logs";
  process.env.MINIFLARE_REGISTRY_PATH ??= ".wrangler/registry";

  // Wrangler snapshots its log path while the Cloudflare plugin is imported.
  const { cloudflare } = await import("@cloudflare/vite-plugin");

  return {
    resolve: {
      // Firebase Admin's ESM wrappers default-import __esModule-marked CJS.
      // Resolve its public server entrypoints through the package's own require
      // exports so the Worker bundle uses the real named exports directly.
      alias: {
        "firebase-admin/app": serverRequire.resolve("firebase-admin/app"),
        "firebase-admin/auth": serverRequire.resolve("firebase-admin/auth"),
      },
    },
    // Public HTML edge-cache keys include the build (worker/index.ts), so a new
    // deployment can never serve the previous build's HTML.
    define: {
      __SPANISHCUE_BUILD_ID__: JSON.stringify(
        process.env.GITHUB_SHA || process.env.SPANISHCUE_BUILD_ID || `local-${Date.now().toString(36)}`,
      ),
    },
    server: {
      host: "0.0.0.0",
      allowedHosts: ["terminal.local"],
      ...(isCodexSeatbeltSandbox
        ? { watch: { useFsEvents: false, usePolling: true } }
        : {}),
    },
    plugins: [
      {
        // Lesson bodies ship as encrypted blobs (scripts/live-lessons.mjs);
        // the Worker build keeps only their index.
        name: "spanishcue-live-lesson-index",
        apply: "build",
        enforce: "pre",
        async load(id: string) {
          if (!id.replace(/\\/g, "/").endsWith("/app/grammar-classroom/live/registry.ts")) return null;
          if (this.environment?.name === "client") throw new Error("The live lesson registry is server-only");
          return liveLessonIndexModule(await liveLessonData());
        },
      },
      vinext(),
      sites(),
      cloudflare({
        viteEnvironment: { name: "rsc", childEnvironments: ["ssr"] },
        inspectorPort: false,
        // Production must run the Worker before every asset so premium media
        // cannot bypass authorization. During `vite serve`, the narrower rule
        // keeps Vite's internal modules asset-first for a reliable preview.
        config: localBindingConfig(command === "build" ? true : ["/audio/*"]),
      }),
    ],
  };
});
