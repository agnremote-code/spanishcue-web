import type { MetadataRoute } from "next";
import { BLOCKED_CRAWLERS } from "./crawler-policy";

// Who is blocked, and why, lives in app/crawler-policy.ts (shared with the Worker).
export { BLOCKED_CRAWLERS };

/*
 * No Crawl-delay (removed 2026-11-26). Google ignores it, but Bing reads 10 as
 * "extremely slow": after six weeks Bing had indexed 55 of ~2,000 URLs, and
 * Bing's index is what ChatGPT search and Copilot answer from. Bingbot is
 * already exempt from the page limiter and every render goes through the
 * render gate and edge cache, so Bing's own adaptive pacing is enough. If Bing
 * ever loads the Worker too hard, throttle it in Bing Webmaster Tools → Crawl
 * Control instead of putting Crawl-delay back (it overrides that control).
 */

/**
 * robots.txt only keeps crawlers out of machine endpoints and keeps abusive
 * bots out entirely. Account, checkout, admin and campaign pages are excluded
 * from search with `noindex` instead (metadata + X-Robots-Tag), because a path
 * blocked here can never show Google its noindex and may still appear as a
 * URL-only result.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/"] },
      { userAgent: [...BLOCKED_CRAWLERS], disallow: "/" },
    ],
    sitemap: "https://spanishcue.com/sitemap.xml",
    host: "https://spanishcue.com",
  };
}
