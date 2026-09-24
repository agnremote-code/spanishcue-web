import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { teachingGuideBySlug, teachingGuides } from "../../teaching-guides";
import { lessons, type Lesson } from "../../lesson-catalog";
import { resourceLevelLabel, resourcePathForLesson } from "../../resource-seo";
import { formatReviewedDate, guideModifiedDate } from "../guide-format";
import styles from "../guides.module.css";

type GuidePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return teachingGuides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: GuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = teachingGuideBySlug.get(slug);
  if (!guide) return {};

  const canonical = "https://spanishcue.com/guides/" + guide.slug;
  return {
    title: guide.title + " | SPANISHCUE",
    description: guide.description,
    keywords: guide.keywords,
    alternates: { canonical },
    robots: { index: true, follow: true },
    openGraph: {
      title: guide.title,
      description: guide.description,
      url: canonical,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: guide.title,
      description: guide.description,
    },
  };
}

export default async function GuidePage({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = teachingGuideBySlug.get(slug);
  if (!guide) notFound();

  const canonical = "https://spanishcue.com/guides/" + guide.slug;
  const relatedGuides = (guide.relatedGuideSlugs ?? [])
    .map((relatedSlug) => teachingGuideBySlug.get(relatedSlug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));
  const relatedLessons = (guide.relatedLessonIds ?? [])
    .map((id) => lessons.find((lesson) => lesson.id === id))
    .filter((lesson): lesson is Lesson => Boolean(lesson));

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.description,
    url: canonical,
    mainEntityOfPage: canonical,
    datePublished: guide.publishedAt,
    dateModified: guideModifiedDate(guide),
    author: {
      "@type": "Organization",
      name: "SPANISHCUE",
      url: "https://spanishcue.com",
    },
    publisher: {
      "@type": "Organization",
      name: "SPANISHCUE",
      url: "https://spanishcue.com",
    },
    about: guide.keywords,
  };

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "SPANISHCUE", item: "https://spanishcue.com" },
      { "@type": "ListItem", position: 2, name: "Teaching Guides", item: "https://spanishcue.com/guides" },
      { "@type": "ListItem", position: 3, name: guide.title, item: canonical },
    ],
  };

  return (
    <main className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      <div className={styles.articleShell}>
        <nav className={styles.topbar} aria-label="Guide navigation">
          <Link className={styles.brand} href="/">SPANISHCUE</Link>
          <Link className={styles.navLink} href="/guides">All guides</Link>
        </nav>

        <article>
          <header className={styles.articleHeader}>
            <p className={styles.eyebrow}>{guide.eyebrow} · {guide.readingTime}</p>
            <h1>{guide.title}</h1>
            <p className={styles.lead}>{guide.description}</p>
          </header>

          {guide.platform ? (
            <aside className={styles.platformNote}>
              <strong>Platform information reviewed: {formatReviewedDate(guide.lastReviewed!)}</strong>
              <p>
                SpanishCue is an independent teaching-resource platform and is not affiliated with {guide.platform}.
              </p>
            </aside>
          ) : null}

          <div className={styles.articleBody}>
            {guide.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.bullets?.length ? (
                  <ul>
                    {section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>

          {relatedGuides.length ? (
            <section className={styles.relatedGuides}>
              <h2>Related teaching guides</h2>
              <div className={styles.relatedGuideGrid}>
                {relatedGuides.map((item) => (
                  <Link href={`/guides/${item.slug}`} key={item.slug}>{item.title}</Link>
                ))}
              </div>
            </section>
          ) : null}

          {guide.officialSources?.length ? (
            <section className={styles.platformSources}>
              <h2>Platform sources</h2>
              <ul>
                {guide.officialSources.map((source) => (
                  <li key={source.url}>
                    <a href={source.url} rel="noreferrer">{source.label}</a>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          <aside className={styles.articleCta}>
            <p className={styles.eyebrow}>USE IT IN CLASS</p>
            <h2>Move from teaching principle to ready-to-teach material.</h2>
            {relatedLessons.length ? (
              <div className={styles.lessonLinks}>
                {relatedLessons.map((lesson) => (
                  <Link className={styles.lessonLink} href={resourcePathForLesson(lesson)} key={lesson.id}>
                    <span>{resourceLevelLabel(lesson)} · {lesson.category}</span>
                    <strong>{lesson.title}</strong>
                  </Link>
                ))}
              </div>
            ) : null}
            <Link className={styles.button} href={guide.relatedHref}>{guide.relatedLabel}</Link>
          </aside>
        </article>
      </div>
    </main>
  );
}
