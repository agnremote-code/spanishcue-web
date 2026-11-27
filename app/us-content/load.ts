import { env } from "cloudflare:workers";

/**
 * US 1000-page plan: page bodies live in public/us-content/<family>/<slug>.json and are read from the
 * ASSETS binding at render time, never imported, so they never count against the Worker bundle
 * (docs/seo-plan/us1000/LEEME.md, incident 2026-11-02). The small index in catalog.generated.ts lists
 * what exists; scripts/build-us-catalog.mjs regenerates it and tests/us-content-quality.test.mjs
 * enforces the quality gate on every file.
 */
export async function loadUsContent<T>(family: string, slug: string): Promise<T | null> {
  if (!/^[a-z0-9-]+$/.test(family) || !/^[a-z0-9-]+$/.test(slug)) return null;
  const assets = (env as unknown as { ASSETS?: Fetcher }).ASSETS;
  if (!assets) return null;
  const response = await assets.fetch(new Request(`https://assets.local/us-content/${family}/${slug}.json`));
  if (!response.ok) return null;
  return (await response.json()) as T;
}
