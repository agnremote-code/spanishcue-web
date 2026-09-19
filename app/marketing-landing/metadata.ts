import type { Metadata } from "next";
import { headers } from "next/headers";
import { localeFromHeaders } from "../i18n/messages";
import type { LandingConfig } from "./config";

export async function generateLandingMetadata(config: LandingConfig): Promise<Metadata> {
  const locale = localeFromHeaders(await headers());
  const copy = config.copy[locale];
  const url = `https://spanishcue.com/${config.slug}`;
  const defaultLocale = config.slug === "ele-recursos-profesores" ? "es" : "en";
  const canonical = locale === defaultLocale ? url : `${url}?lang=${locale}`;
  const title = `${copy.kicker.toLowerCase().replace(/(^|\s)\S/g, (letter) => letter.toUpperCase())} | SPANISHCUE`;
  const description = copy.lead;
  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        es: defaultLocale === "es" ? url : `${url}?lang=es`,
        en: defaultLocale === "en" ? url : `${url}?lang=en`,
        "x-default": url,
      },
    },
    openGraph: { title, description, url: canonical, type: "website", images: [{ url: "/og.png", width: 1731, height: 909, alt: "SPANISHCUE interactive lesson library" }] },
    twitter: { card: "summary_large_image", title, description, images: ["/og.png"] },
    robots: { index: true, follow: true },
  };
}
