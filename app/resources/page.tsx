import type { Metadata } from "next";
import Link from "next/link";
import styles from "./resources.module.css";
import {
  resourceLessons,
  resourcePathForLesson,
  resourceTypePluralLabel,
  resourceLevelLabel,
} from "../resource-seo";

export const metadata: Metadata = {
  title: "Spanish Teaching Resources by Level | SPANISHCUE",
  description:
    "Browse ready-to-teach Spanish grammar, conversation, listening, pronunciation and vocabulary resources for A1–C2 teachers.",
  alternates: { canonical: "https://spanishcue.com/resources" },
  robots: { index: true, follow: true },
};

const categoryOrder = ["Gramática", "Conversación", "Escucha", "Fonética", "Vocabulario"] as const;

export default function ResourcesPage() {
  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <nav className={styles.topbar} aria-label="Resource navigation">
          <Link className={styles.brand} href="/">SPANISHCUE</Link>
          <Link className={styles.backLink} href="/spanish-teacher-resources">Teacher resources</Link>
        </nav>

        <header className={styles.catalogHeader}>
          <p className={styles.eyebrow}>SPANISH TEACHER RESOURCE LIBRARY</p>
          <h1>Ready-to-teach Spanish resources, indexed by level and skill.</h1>
          <p>
            Browse interactive lesson resources for A1–C2. Each page shows the level,
            teaching goal, lesson format and a direct path to the SpanishCue lesson.
          </p>
          <p>
            <Link className={styles.backLink} href="/guides">
              Read practical teaching guides →
            </Link>
          </p>
        </header>

        {categoryOrder.map((category) => {
          const categoryLessons = resourceLessons.filter((lesson) => lesson.category === category);
          if (!categoryLessons.length) return null;
          return (
            <section className={styles.group} key={category}>
              <h2>{resourceTypePluralLabel(categoryLessons[0])}</h2>
              <div className={styles.catalogGrid}>
                {categoryLessons.map((lesson) => (
                  <Link className={styles.resourceCard} href={resourcePathForLesson(lesson)} key={lesson.id}>
                    <p className={styles.cardMeta}>
                      {resourceLevelLabel(lesson)} · {lesson.duration}
                    </p>
                    <h3 className={styles.cardTitle}>{lesson.title}</h3>
                    <p className={styles.cardCopy}>{lesson.subtitle}</p>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}
