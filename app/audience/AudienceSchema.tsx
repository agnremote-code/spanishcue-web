import { SITE_ORIGIN, canonicalUrl } from "../seo";
import type { Audience } from "./audiences";

/**
 * WebPage structured data for an audience landing: who the page is for and
 * that it belongs to the site. Only facts that are true today; no offers,
 * ratings or reviews are declared.
 */
export default function AudienceSchema({ path, name, description, audience, language }: { path: string; name: string; description: string; audience: Audience; language: string }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${canonicalUrl(path)}#webpage`,
    url: canonicalUrl(path),
    name,
    description,
    inLanguage: language,
    isPartOf: { "@id": `${SITE_ORIGIN}/#website` },
    publisher: { "@id": `${SITE_ORIGIN}/#organization` },
    audience: {
      "@type": "EducationalAudience",
      educationalRole: audience === "teacher" ? "teacher" : "student",
    },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
