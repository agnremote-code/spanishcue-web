import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SPANISHCUE",
    short_name: "SPANISHCUE",
    description: "Interactive, ready-to-teach Spanish lessons for teachers.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#061b3e",
    icons: [{ src: "/favicon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
