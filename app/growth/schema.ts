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
  inLanguage?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: input.name,
    description: input.description,
    url: canonicalUrl(input.pathname),
    inLanguage: input.inLanguage ?? "en",
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

export type PageDates = { datePublished: string; dateModified: string };

export function webPageSchema(input: { pathname: string; name: string; description: string; about?: string[]; educationalLevel?: string; inLanguage?: string; image?: string; dates?: PageDates }) {
  const image = input.image ? canonicalUrl(input.image) : undefined;
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: input.name,
    description: input.description,
    url: canonicalUrl(input.pathname),
    inLanguage: input.inLanguage ?? "en",
    isPartOf: { "@type": "WebSite", name: SITE_NAME, url: SITE_ORIGIN },
    publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_ORIGIN },
    audience: { "@type": "EducationalAudience", educationalRole: "teacher" },
    about: input.about,
    ...(input.educationalLevel ? { educationalLevel: input.educationalLevel } : {}),
    ...(image ? { image, primaryImageOfPage: { "@type": "ImageObject", url: image } } : {}),
    ...(input.dates ? { datePublished: input.dates.datePublished, dateModified: input.dates.dateModified, author: { "@type": "Organization", name: SITE_NAME, url: SITE_ORIGIN } } : {}),
  };
}

/** A short recording of a class that is visible on the page (Google needs the video on the page for VideoObject). */
export function videoObjectSchema(input: { name: string; description: string; thumbnail: string; contentPath: string; uploadDate: string; pathname: string; inLanguage?: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: input.name,
    description: input.description,
    thumbnailUrl: [canonicalUrl(input.thumbnail)],
    contentUrl: canonicalUrl(input.contentPath),
    uploadDate: `${input.uploadDate}T06:00:00Z`,
    inLanguage: input.inLanguage ?? "es",
    url: canonicalUrl(input.pathname),
    publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_ORIGIN },
  };
}

export function faqPageSchema(items: { question: string; answer: string }[], inLanguage = "en") {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage,
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
