import type { Locale } from "./i18n/messages";

/**
 * Indexation and canonical rules for spanishcue.com.
 *
 * - Every public page has exactly one canonical URL: the clean path on the
 *   apex domain, without query parameters. `?lang=` only switches the UI
 *   language (and stores a cookie); it never creates a second indexable
 *   document, so it is never a canonical or an hreflang alternate.
 * - hreflang is emitted only for real language pairs: two distinct URLs whose
 *   main content is the same page in two languages (`languagePairs`).
 * - Pages that must stay out of search carry `noindex` both in the HTML
 *   (`robots` metadata) and in the `X-Robots-Tag` header the Worker adds.
 *   robots.txt must NOT block them, or Google could never read the noindex.
 *
 * The strategy behind these rules lives in docs/seo-strategy.md.
 */
export const SITE_ORIGIN = "https://spanishcue.com";
export const SITE_NAME = "SPANISHCUE";

export function normalizePathname(pathname: string): string {
  let path = pathname.split(/[?#]/)[0] || "/";
  if (!path.startsWith("/")) path = `/${path}`;
  if (path.length > 1) path = path.replace(/\/+$/, "");
  return path || "/";
}

/** Absolute, clean URL for a path: no query string, no hash, no trailing slash. */
export function canonicalUrl(pathname: string): string {
  return `${SITE_ORIGIN}${normalizePathname(pathname)}`;
}

/**
 * Real language pairs: the same content published at two URLs. Everything else
 * is a single-language document and gets no hreflang at all.
 */
export const languagePairs: ReadonlyArray<{ es: string; en: string }> = [
  // Empty on purpose (2026-10-07): /ele-recursos-profesores is a campaign
  // landing while /spanish-teacher-resources is a content hub, so they are not
  // translations of each other. Add a pair only when both URLs carry the same
  // content in two languages; the sitemap and metadata pick it up automatically.
];

export function languageAlternates(pathname: string): Record<string, string> | undefined {
  const path = normalizePathname(pathname);
  const pair = languagePairs.find((item) => item.es === path || item.en === path);
  if (!pair) return undefined;
  return {
    es: canonicalUrl(pair.es),
    en: canonicalUrl(pair.en),
    "x-default": canonicalUrl(pair.en),
  };
}

/** Paths whose default UI language is English when no explicit choice exists. */
export function isEnglishDefaultPath(pathname: string): boolean {
  const path = normalizePathname(pathname);
  if (path === "/lp/ele-recursos-profesores") return false;
  return (
    path === "/about" ||
    path === "/resources" ||
    path.startsWith("/resources/") ||
    path === "/guides" ||
    path.startsWith("/guides/") ||
    path === "/lp" ||
    path.startsWith("/lp/") ||
    path.startsWith("/spanish-") ||
    path === "/online-spanish-teaching-resources" ||
    path === "/free-spanish-lesson"
  );
}

/**
 * Account, checkout, admin, API, campaign-only and tooling surfaces: served
 * normally, but excluded from search results with `noindex`.
 */
export function isSearchPrivatePath(pathname: string): boolean {
  const path = normalizePathname(pathname);
  return (
    path === "/ingresar" ||
    path === "/cuenta" ||
    path === "/acceso" ||
    path === "/pro" ||
    path.startsWith("/pro/") ||
    path === "/admin" ||
    path.startsWith("/admin/") ||
    path === "/api" ||
    path.startsWith("/api/") ||
    path === "/auth" ||
    path.startsWith("/auth/") ||
    path === "/demo" ||
    path.startsWith("/demo/") ||
    path === "/s" ||
    path.startsWith("/s/") ||
    path === "/autoestudio/claim" ||
    path === "/zeely" ||
    isCampaignPath(path)
  );
}

/** Ad-only landing variants (`/lp/*`): noindex, but links may be followed. */
export function isCampaignPath(pathname: string): boolean {
  const path = normalizePathname(pathname);
  return path === "/lp" || path.startsWith("/lp/");
}

/**
 * Value for the `X-Robots-Tag` response header, or null when the page is
 * indexable. Campaign variants stay `follow` so their links keep pointing
 * crawlers at the indexable hubs.
 */
export function robotsHeaderFor(pathname: string): string | null {
  if (isCampaignPath(pathname)) return "noindex, follow";
  if (isSearchPrivatePath(pathname)) return "noindex, nofollow";
  return null;
}

export type SeoLocale = Locale;

export const homeMetaCopy: Record<Locale, { title: string; description: string }> = {
  es: {
    title: "Clases de español listas para enseñar (A1–C2) | SPANISHCUE",
    description:
      "Clases visuales de español para profesores y tutores: conversación, gramática, escucha y fonética de A1 a C2. Elige, abre y enseña sin preparar desde cero.",
  },
  en: {
    title: "Interactive Spanish Lessons for Teachers (A1–C2) | SPANISHCUE",
    description:
      "Interactive Spanish lessons for teachers and online tutors: conversation, grammar, listening and pronunciation from A1 to C2. Choose a lesson, open it, teach.",
  },
};
