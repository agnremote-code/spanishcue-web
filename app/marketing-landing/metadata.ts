import type { Metadata } from "next";
import { headers } from "next/headers";
import { localeFromHeaders } from "../i18n/messages";
import type { LandingConfig } from "./config";
import { socialPreviewImage, socialPreviewUrl } from "../social-preview";
import { canonicalUrl, languageAlternates } from "../seo";

type LandingMetadataOptions = {
  /** Public path of the page being rendered; defaults to `/${config.slug}`. */
  pathname?: string;
  /** Campaign-only variants (`/lp/*`) are served but never indexed. */
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
  const title = `${copy.kicker.toLowerCase().replace(/(^|\s)\S/g, (letter) => letter.toUpperCase())} | SPANISHCUE`;
  const description = copy.lead;
  return {
    title,
    description,
    alternates: languages ? { canonical, languages } : { canonical },
    openGraph: { title, description, url: canonical, type: "website", images: [socialPreviewImage] },
    twitter: { card: "summary_large_image", title, description, images: [socialPreviewUrl] },
    robots: index ? { index: true, follow: true } : { index: false, follow: true },
  };
}
