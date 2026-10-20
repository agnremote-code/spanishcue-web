import type { Metadata } from "next";
import { headers } from "next/headers";
import { localeFromHeaders } from "../i18n/messages";
import type { LandingConfig } from "./config";
import { isPaidLandingSlug, paidCopy } from "./paid-copy";
import { socialPreviewImage, socialPreviewUrl } from "../social-preview";
import { canonicalUrl, languageAlternates } from "../seo";

type LandingMetadataOptions = {
  /** Public path of the page being rendered; defaults to `/${config.slug}`. */
  pathname?: string;
  /** Only the two approved purchase /lp variants set this true; other campaigns remain noindex. */
  index?: boolean;
};

export async function generateLandingMetadata(config: LandingConfig, options: LandingMetadataOptions = {}): Promise<Metadata> {
  const locale = localeFromHeaders(await headers());
  const copy = config.copy[locale];
  const pathname = options.pathname ?? `/${config.slug}`;
  const index = options.index ?? true;
  // The UI language toggle (`?lang=`) never produces a second canonical URL.
  const canonical = canonicalUrl(pathname);
  const languages = index ? languageAlternates(pathname) : undefined;
  // Search-specific commercial titles describe the two distinct buyer intents
  // instead of reusing a generic campaign kicker in organic search results.
  const purchaseTitles = {
    en: {
      "spanish-teacher-resources": "Interactive Spanish Lessons for Teachers | SPANISHCUE PRO",
      "online-spanish-teaching-resources": "Online Spanish Teaching Resources for Tutors | SPANISHCUE PRO",
    },
    es: {
      "spanish-teacher-resources": "Clases interactivas para profesores de español | SPANISHCUE PRO",
      "online-spanish-teaching-resources": "Recursos para enseñar español online | SPANISHCUE PRO",
    },
  } as const;
  const title = pathname.startsWith("/lp/") && isPaidLandingSlug(config.slug)
    ? purchaseTitles[locale][config.slug]
    : `${copy.kicker.toLowerCase().replace(/(^|\s)\S/g, (letter) => letter.toUpperCase())} | SPANISHCUE`;
  const description = pathname.startsWith("/lp/") && isPaidLandingSlug(config.slug)
    ? paidCopy[locale].lead[config.slug]
    : copy.lead;
  return {
    title,
    description,
    alternates: languages ? { canonical, languages } : { canonical },
    openGraph: { title, description, url: canonical, type: "website", images: [socialPreviewImage] },
    twitter: { card: "summary_large_image", title, description, images: [socialPreviewUrl] },
    robots: index ? { index: true, follow: true } : { index: false, follow: true },
  };
}
