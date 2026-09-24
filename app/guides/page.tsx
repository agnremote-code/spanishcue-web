import type { Metadata } from "next";
import Link from "next/link";
import { teachingGuides } from "../teaching-guides";
import styles from "./guides.module.css";

export const metadata: Metadata = {
  title: "How to Teach Spanish: Practical Guides for Teachers | SPANISHCUE",
  description:
    "Practical guides for Spanish teachers on online teaching, lesson planning, grammar, conversation and psycholinguistics, with direct links to ready-to-teach resources.",
  alternates: { canonical: "https://spanishcue.com/guides" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "How to Teach Spanish: Practical Guides for Teachers",
    description:
      "Evidence-informed, classroom-ready guidance for Spanish teachers, plus direct links to ready-to-teach resources.",
    url: "https://spanishcue.com/guides",
    type: "website",
  },
};

export default function GuidesPage() {
  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <nav className={styles.topbar} aria-label="Guide navigation">
          <Link className={styles.brand} href="/">SPANISHCUE</Link>
          <Link className={styles.navLink} href="/resources">Lesson resources</Link>
        </nav>

        <header className={styles.hero}>
          <p className={styles.eyebrow}>TEACHING GUIDES</p>
          <h1>How to teach Spanish more effectively, without adding more prep.</h1>
          <p className={styles.lead}>
            Practical guidance for online and in-person Spanish teachers. The focus is not theory for
            theory&apos;s sake: each guide turns teaching principles into decisions you can use in a real lesson.
          </p>
        </header>

        <section className={styles.grid} aria-label="Spanish teaching guides">
          {teachingGuides.map((guide) => (
            <article className={styles.card} key={guide.slug}>
              <p className={styles.cardEyebrow}>{guide.eyebrow} · {guide.readingTime}</p>
              <h2><Link href={"/guides/" + guide.slug}>{guide.title}</Link></h2>
              <p>{guide.description}</p>
              <Link className={styles.readLink} href={"/guides/" + guide.slug}>Read guide →</Link>
            </article>
          ))}
        </section>

        <section className={styles.cta}>
          <div>
            <p className={styles.eyebrow}>FROM METHOD TO MATERIAL</p>
            <h2>Need the lesson, not another article?</h2>
            <p>Browse the public index of SpanishCue lessons by level and skill.</p>
          </div>
          <Link className={styles.button} href="/resources">Browse lesson resources</Link>
        </section>
      </div>
    </main>
  );
}
