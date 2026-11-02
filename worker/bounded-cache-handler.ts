// Bounded ISR cache for the Worker (incident 2026-11-02, Cloudflare Error 1102).
//
// vinext's default MemoryCacheHandler is an unbounded Map that keeps the HTML and
// RSC payload of every statically renderable page the isolate has served. With
// thousands of SEO pages being crawled, an isolate accumulated hundreds of MB and
// Cloudflare killed it («Worker exceeded resource limits»), taking every in-flight
// request with it. Staging, without crawl traffic, never showed it.
//
// Same semantics as vinext's MemoryCacheHandler (tags, revalidate, expire), but it
// holds at most `maxEntries` recent entries (LRU). Anonymous repeat traffic is
// already served by the edge cache in worker/index.ts, so the in-isolate cache
// only needs to absorb bursts.
import type { CacheHandler, CacheHandlerValue, IncrementalCacheValue } from "vinext/shims/cache";

export const MAX_ENTRIES = 12;

type Entry = {
  value: IncrementalCacheValue | null;
  tags: string[];
  lastModified: number;
  revalidateAt: number | null;
  expireAt: number | null;
  cacheControl: { revalidate: number; expire?: number } | undefined;
};

function stringArray(ctx: Record<string, unknown> | undefined, field: string): string[] {
  const value = ctx?.[field];
  return Array.isArray(value) ? value.filter((item): item is string => typeof item === "string") : [];
}

function numberField(ctx: Record<string, unknown> | undefined, field: string): number | undefined {
  const control = ctx?.cacheControl;
  if (control && typeof control === "object") {
    const nested = (control as Record<string, unknown>)[field];
    if (typeof nested === "number") return nested;
  }
  const direct = ctx?.[field];
  return typeof direct === "number" ? direct : undefined;
}

export class BoundedCacheHandler implements CacheHandler {
  readonly store = new Map<string, Entry>();
  private readonly tagRevalidatedAt = new Map<string, number>();

  constructor(private readonly maxEntries: number = MAX_ENTRIES) {}

  async get(key: string, ctx?: Record<string, unknown>): Promise<CacheHandlerValue | null> {
    const entry = this.store.get(key);
    if (!entry) return null;
    for (const tag of entry.tags) {
      const revalidatedAt = this.tagRevalidatedAt.get(tag);
      if (revalidatedAt && revalidatedAt >= entry.lastModified) {
        this.store.delete(key);
        return null;
      }
    }
    for (const tag of stringArray(ctx, "softTags")) {
      const revalidatedAt = this.tagRevalidatedAt.get(tag);
      if (revalidatedAt && revalidatedAt >= entry.lastModified) return null;
    }
    const now = Date.now();
    if (entry.expireAt !== null && now > entry.expireAt) {
      this.store.delete(key);
      return null;
    }
    // Refresh recency: Map iteration order is insertion order.
    this.store.delete(key);
    this.store.set(key, entry);
    if (entry.revalidateAt !== null && now > entry.revalidateAt) {
      return { lastModified: entry.lastModified, value: entry.value, cacheState: "stale", cacheControl: entry.cacheControl };
    }
    return { lastModified: entry.lastModified, value: entry.value, cacheControl: entry.cacheControl };
  }

  async set(key: string, data: IncrementalCacheValue | null, ctx?: Record<string, unknown>): Promise<void> {
    const tagSet = new Set<string>();
    if (data && "tags" in data && Array.isArray(data.tags)) for (const tag of data.tags) if (typeof tag === "string") tagSet.add(tag);
    for (const tag of stringArray(ctx, "tags")) tagSet.add(tag);
    let revalidate = numberField(ctx, "revalidate");
    const expire = numberField(ctx, "expire");
    if (data && "revalidate" in data && typeof data.revalidate === "number") revalidate = data.revalidate;
    if (revalidate === 0) return;
    const now = Date.now();
    this.store.delete(key);
    this.store.set(key, {
      value: data,
      tags: [...tagSet],
      lastModified: now,
      revalidateAt: typeof revalidate === "number" && revalidate > 0 ? now + revalidate * 1000 : null,
      expireAt: typeof expire === "number" && expire > 0 ? now + expire * 1000 : null,
      cacheControl: typeof revalidate === "number" ? (expire === undefined ? { revalidate } : { revalidate, expire }) : undefined,
    });
    while (this.store.size > this.maxEntries) {
      const oldest = this.store.keys().next().value;
      if (oldest === undefined) break;
      this.store.delete(oldest);
    }
  }

  async revalidateTag(tags: string | string[]): Promise<void> {
    const now = Date.now();
    for (const tag of Array.isArray(tags) ? tags : [tags]) this.tagRevalidatedAt.set(tag, now);
  }

  resetRequestCache(): void {}
}
