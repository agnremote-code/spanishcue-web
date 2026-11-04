// Covers keep their file names when they are redrawn, and browsers and the edge
// may keep an old copy for days. Bump this whenever covers change so every
// preview asks for the new file.
export const COVER_VERSION = "20261104";

export function versionedCover(src: string): string {
  if (!src || !src.startsWith("/") || src.includes("?")) return src;
  return `${src}?v=${COVER_VERSION}`;
}
