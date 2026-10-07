import type { MetadataRoute } from "next";

/**
 * robots.txt only keeps crawlers out of machine endpoints. Account, checkout,
 * admin and campaign pages are excluded from search with `noindex` instead
 * (metadata + X-Robots-Tag), because a path blocked here can never show
 * Google its noindex and may still appear as a URL-only result.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: "https://spanishcue.com/sitemap.xml",
    host: "https://spanishcue.com",
  };
}
