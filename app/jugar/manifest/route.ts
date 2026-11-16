import { HUB_PATH } from "../worlds.mjs";

/**
 * Web app manifest of the student app. The site manifest (app/manifest.ts)
 * stays the teacher library, and the framework always links that one from the
 * document head, so the hub points the browser here once it loads
 * (StudentHub.tsx). A student who installs from /jugar gets an app that opens
 * on the map of worlds. `scope` is the whole site because the worlds live at
 * their own class routes.
 */
export function GET() {
  const manifest = {
    id: HUB_PATH,
    name: "SpanishCue · Jugar",
    short_name: "SpanishCue",
    description: "Mundos 3D para practicar español jugando.",
    lang: "es",
    start_url: `${HUB_PATH}?app=1`,
    scope: "/",
    display: "standalone",
    orientation: "any",
    background_color: "#061b3e",
    theme_color: "#061b3e",
    categories: ["education", "games"],
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
    ],
  };
  return new Response(JSON.stringify(manifest), {
    headers: { "content-type": "application/manifest+json; charset=utf-8", "cache-control": "public, max-age=3600" },
  });
}
