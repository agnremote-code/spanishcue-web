import kit from "../../public/brand/ads/manifest.json";
import { socialPreviewUrl } from "../social-preview";
import { SITE_NAME, SITE_ORIGIN } from "../seo";

/**
 * Site-wide Organization + WebSite structured data for the homepage. Only
 * facts that are true today: no ratings, awards or search actions are
 * declared. `alternateName` lists the spellings people type for the brand so
 * Google ties «spanishcue», «Spanish Cue» and «SpanishCue» to this site
 * instead of correcting them to unrelated words; `sameAs` lists only profiles
 * the owner actually runs.
 */
export const BRAND_ALTERNATE_NAMES = ["SpanishCue", "Spanish Cue", "spanishcue", "spanishcue.com"];
export const BRAND_PROFILES = ["https://www.linkedin.com/company/144023469"];

export default function SiteSchema() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_ORIGIN}/#organization`,
    name: SITE_NAME,
    alternateName: BRAND_ALTERNATE_NAMES,
    url: SITE_ORIGIN,
    description: kit.brand.description,
    slogan: kit.brand.tagline,
    logo: `${SITE_ORIGIN}/brand/spanishcue-logo.png`,
    image: socialPreviewUrl,
    sameAs: BRAND_PROFILES,
    knowsLanguage: ["es", "en"],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      url: `${SITE_ORIGIN}/contact`,
      availableLanguage: ["Spanish", "English"],
    },
  };
  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_ORIGIN}/#website`,
    name: SITE_NAME,
    alternateName: BRAND_ALTERNATE_NAMES,
    url: SITE_ORIGIN,
    inLanguage: ["es", "en"],
    publisher: { "@id": `${SITE_ORIGIN}/#organization` },
  };
  const serialize = (value: unknown) => JSON.stringify(value).replace(/</g, "\\u003c");
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serialize(organization) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serialize(website) }} />
    </>
  );
}
