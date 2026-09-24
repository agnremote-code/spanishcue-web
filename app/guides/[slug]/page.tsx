import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { teachingGuideBySlug, teachingGuides } from "../../teaching-guides";
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
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.description,
    url: canonical,
    mainEntityOfPage: canonical,
    datePublished: "2026-09-24",
    dateModified: "2026-09-24",
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

          <aside className={styles.articleCta}>
            <p className={styles.eyebrow}>USE IT IN CLASS</p>
            <h2>Move from teaching principle to ready-to-teach material.</h2>
            <Link className={styles.button} href={guide.relatedHref}>{guide.relatedLabel}</Link>
          </aside>
        </article>
      </div>
    </main>
  );
}
