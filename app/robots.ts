import type { MetadataRoute } from "next";

/**
 * Crawlers that fetch thousands of pages for SEO tools, AI training or
 * scraping and bring no visitors. They are blocked outright: every HTML page
 * is rendered by the Worker, so their crawl is pure load (incident 2026-11-02,
 * Cloudflare 1102 "Worker exceeded resource limits" under crawler traffic).
 * Google and Bing are never listed here.
 */
export const BLOCKED_CRAWLERS = ["AhrefsBot", "SemrushBot", "MJ12bot", "DotBot", "PetalBot", "Bytespider", "GPTBot", "CCBot", "ClaudeBot", "Amazonbot"] as const;

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
