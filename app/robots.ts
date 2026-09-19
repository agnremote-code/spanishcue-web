import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    disallow: ["/api/", "/ingresar", "/cuenta", "/acceso", "/pro/", "/admin/"],
    },
    sitemap: "https://spanishcue.com/sitemap.xml",
    host: "https://spanishcue.com",
  };
}
