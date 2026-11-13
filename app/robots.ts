import type { MetadataRoute } from "next";
import { BLOCKED_CRAWLERS } from "./crawler-policy";

// Who is blocked, and why, lives in app/crawler-policy.ts (shared with the Worker).
export { BLOCKED_CRAWLERS };

/** Seconds between requests for the crawlers that honour Crawl-delay (Bing, Yandex, Seznam…). Google ignores it. */
export const CRAWL_DELAY_SECONDS = 10;

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
      { userAgent: "*", allow: "/", disallow: ["/api/"], crawlDelay: CRAWL_DELAY_SECONDS },
      { userAgent: [...BLOCKED_CRAWLERS], disallow: "/" },
    ],
    sitemap: "https://spanishcue.com/sitemap.xml",
    host: "https://spanishcue.com",
  };
}
