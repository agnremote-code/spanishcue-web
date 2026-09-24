import type { Metadata } from "next";
import Link from "next/link";
import ResourceCatalog from "./ResourceCatalog";
import { isFreeLesson } from "../access-policy";
import styles from "./resources.module.css";
import {
  resourceLessons,
  resourcePathForLesson,
  resourceTypePluralLabel,
} from "../resource-seo";

export const metadata: Metadata = {
  title: "Spanish Teaching Resources by Level | SPANISHCUE",
  description:
    "Browse ready-to-teach Spanish grammar, conversation, listening, pronunciation and vocabulary resources for A1–C2 teachers.",
  alternates: { canonical: "https://spanishcue.com/resources" },
  robots: { index: true, follow: true },
};


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

        <ResourceCatalog items={resourceLessons.map(lesson => ({
          id:lesson.id,title:lesson.title,subtitle:lesson.subtitle,category:lesson.category,
          categoryLabel:resourceTypePluralLabel(lesson),level:lesson.level,levels:lesson.levels,
          displayLevel:lesson.displayLevel,duration:lesson.duration,path:resourcePathForLesson(lesson),
          image:lesson.image,free:isFreeLesson(lesson.id),familyId:lesson.familyId,previewByLevel:lesson.previewByLevel,
        }))}/>

      </div>
    </main>
  );
}
