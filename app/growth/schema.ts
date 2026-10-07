import { SITE_NAME, SITE_ORIGIN, canonicalUrl } from "../seo";

export type BreadcrumbItem = { name: string; href: string };

export const organizationRef = { "@id": `${SITE_ORIGIN}/#organization` };

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: canonicalUrl(item.href),
    })),
  };
}

export function collectionPageSchema(input: {
  pathname: string;
  name: string;
  description: string;
  items: { name: string; href: string }[];
  about?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: input.name,
    description: input.description,
    url: canonicalUrl(input.pathname),
    inLanguage: "en",
    isPartOf: { "@type": "WebSite", name: SITE_NAME, url: SITE_ORIGIN },
    publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_ORIGIN },
    audience: { "@type": "EducationalAudience", educationalRole: "teacher" },
    about: input.about,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: input.items.length,
      itemListElement: input.items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        url: canonicalUrl(item.href),
      })),
    },
  };
}

export function webPageSchema(input: { pathname: string; name: string; description: string; about?: string[]; educationalLevel?: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: input.name,
    description: input.description,
    url: canonicalUrl(input.pathname),
    inLanguage: "en",
    isPartOf: { "@type": "WebSite", name: SITE_NAME, url: SITE_ORIGIN },
    publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_ORIGIN },
    audience: { "@type": "EducationalAudience", educationalRole: "teacher" },
    about: input.about,
    ...(input.educationalLevel ? { educationalLevel: input.educationalLevel } : {}),
  };
}

export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
