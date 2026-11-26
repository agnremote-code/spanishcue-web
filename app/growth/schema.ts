import { SITE_NAME, SITE_ORIGIN, canonicalUrl } from "../seo";

export type BreadcrumbItem = { name: string; href: string };

export const organizationRef = { "@id": `${SITE_ORIGIN}/#organization` };

/**
 * The brand entity as every page names it (publisher, author, provider). The `@id` ties each
 * mention to the full Organization node on the homepage (app/growth/SiteSchema.tsx), so Google
 * reads one entity called SPANISHCUE instead of many anonymous organizations.
 */
export const organizationNode = { "@type": "Organization", "@id": `${SITE_ORIGIN}/#organization`, name: SITE_NAME, url: SITE_ORIGIN } as const;
export const websiteNode = { "@type": "WebSite", "@id": `${SITE_ORIGIN}/#website`, name: SITE_NAME, url: SITE_ORIGIN } as const;

/** The page that presents the person behind SpanishCue (bio, track record). */
export const TEAM_PATH = "/equipo";

/**
 * The author named on guides and data reports. Only true facts: the owner's
 * teaching track record of more than ten years is the one figure approved for
 * publication (2026-11-26); no surname, photo or personal profile until the
 * owner provides them.
 */
export const authorNode = { "@type": "Person", "@id": `${SITE_ORIGIN}${TEAM_PATH}#ale`, name: "Ale", url: `${SITE_ORIGIN}${TEAM_PATH}` } as const;
export const authorProfile = {
  ...authorNode,
  jobTitle: "Profesor de español como lengua extranjera",
  description: "Profesor de español como lengua extranjera con más de diez años dando clases. Dirige SpanishCue.",
  worksFor: organizationRef,
  knowsLanguage: ["es", "en"],
  knowsAbout: ["Enseñanza de español como lengua extranjera", "Gramática del español", "Clases de conversación", "MCER", "PCIC"],
} as const;

/** Google wants a full datetime with a timezone on Article dates; a date-only value becomes noon UTC of that day. */
const articleDateTime = (value: string) => (/^\d{4}-\d{2}-\d{2}$/.test(value) ? `${value}T12:00:00Z` : value);

/** Article node for authored long-form pages (guides, data reports). */
export function articleSchema(input: { pathname: string; headline: string; description: string; dates: PageDates; inLanguage?: string; image?: string; about?: string[] }) {
  const url = canonicalUrl(input.pathname);
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.headline,
    description: input.description,
    url,
    mainEntityOfPage: url,
    inLanguage: input.inLanguage ?? "es",
    datePublished: articleDateTime(input.dates.datePublished),
    dateModified: articleDateTime(input.dates.dateModified),
    author: authorNode,
    publisher: organizationNode,
    isPartOf: websiteNode,
    ...(input.image ? { image: canonicalUrl(input.image) } : {}),
    ...(input.about ? { about: input.about } : {}),
  };
}

/** A small dataset published on /datos: who made it, what it measures, the period and the CSV. */
export function datasetSchema(input: { pathname: string; name: string; description: string; temporalCoverage: string; variableMeasured: string[]; csvPath?: string; keywords?: string[]; dates: PageDates }) {
  return {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: input.name,
    description: input.description,
    url: canonicalUrl(input.pathname),
    inLanguage: "es",
    creator: authorNode,
    publisher: organizationNode,
    license: "https://creativecommons.org/licenses/by/4.0/",
    isAccessibleForFree: true,
    temporalCoverage: input.temporalCoverage,
    variableMeasured: input.variableMeasured,
    datePublished: input.dates.datePublished,
    dateModified: input.dates.dateModified,
    ...(input.keywords ? { keywords: input.keywords } : {}),
    ...(input.csvPath ? { distribution: [{ "@type": "DataDownload", encodingFormat: "text/csv", contentUrl: canonicalUrl(input.csvPath) }] } : {}),
  };
}

/** A CEFR level hub: an ordered set of classes for one level. */
export function courseSchema(input: { pathname: string; name: string; description: string; educationalLevel: string; inLanguage?: string; lessons: { name: string; href: string }[] }) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: input.name,
    description: input.description,
    url: canonicalUrl(input.pathname),
    inLanguage: input.inLanguage ?? "es",
    educationalLevel: input.educationalLevel,
    provider: organizationNode,
    audience: { "@type": "EducationalAudience", educationalRole: "teacher" },
    teaches: `Español como lengua extranjera, nivel ${input.educationalLevel} del MCER`,
    hasPart: input.lessons.map((lesson) => ({ "@type": "LearningResource", name: lesson.name, url: canonicalUrl(lesson.href) })),
  };
}

/** A worksheet or an interactive exercise page that is free to use without an account. */
export function learningResourceSchema(input: { pathname: string; name: string; description: string; learningResourceType: string; interactivityType: "active" | "expositive" | "mixed"; educationalLevel?: string; inLanguage?: string; roles?: string[]; teaches?: string[] }) {
  return {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    name: input.name,
    description: input.description,
    url: canonicalUrl(input.pathname),
    inLanguage: input.inLanguage ?? "es",
    learningResourceType: input.learningResourceType,
    interactivityType: input.interactivityType,
    isAccessibleForFree: true,
    ...(input.educationalLevel ? { educationalLevel: input.educationalLevel } : {}),
    ...(input.teaches ? { teaches: input.teaches } : {}),
    audience: (input.roles ?? ["teacher", "student"]).map((role) => ({ "@type": "EducationalAudience", educationalRole: role })),
    provider: organizationNode,
  };
}

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
    isPartOf: websiteNode,
    publisher: organizationNode,
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
    isPartOf: websiteNode,
    publisher: organizationNode,
    audience: { "@type": "EducationalAudience", educationalRole: "teacher" },
    about: input.about,
    ...(input.educationalLevel ? { educationalLevel: input.educationalLevel } : {}),
    ...(image ? { image, primaryImageOfPage: { "@type": "ImageObject", url: image } } : {}),
    ...(input.dates ? { datePublished: input.dates.datePublished, dateModified: input.dates.dateModified, author: organizationNode } : {}),
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
    publisher: organizationNode,
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
