import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, GrowthFooter, GrowthTopbar, JsonLd, Section } from "../growth/components";
import { collectionPageSchema } from "../growth/schema";
import { canonicalUrl } from "../seo";
import { VOCABULARY_PATH, vocabularyPath, vocabularyThemes } from "./paths";
import styles from "../growth/growth.module.css";

const title = "Spanish Vocabulary by Topic: Word Lists, Practice Quizzes and Readings";
const description = "Free Spanish vocabulary by topic for Spanish 1 and 2: a word list, a practice quiz that corrects itself and a short reading on every page. No login, no download.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: canonicalUrl(VOCABULARY_PATH) },
  robots: { index: true, follow: true },
  openGraph: { title, description, url: canonicalUrl(VOCABULARY_PATH), type: "website" },
};

const levels = [
  { level: "A1", label: "Beginner topics (A1, Spanish 1)" },
  { level: "A2", label: "Elementary topics (A2, Spanish 2)" },
];

export default function VocabularyHubPage() {
  return (
    <>
      <main className={styles.page} lang="en">
        <div className={styles.shell}>
          <JsonLd data={collectionPageSchema({ pathname: VOCABULARY_PATH, name: title, description, inLanguage: "en", items: vocabularyThemes.map((entry) => ({ name: entry.title, href: vocabularyPath(entry.slug) })) })} />
          <GrowthTopbar />
          <Breadcrumbs items={[{ name: "SpanishCue", href: "/" }, { name: "Spanish vocabulary", href: VOCABULARY_PATH }]} />
          <section className={styles.hero}>
            <p className={styles.eyebrow}>For students and teachers</p>
            <h1 className={styles.title}>Spanish vocabulary by topic</h1>
            <p className={styles.lead}>
              Each topic has the words grouped on one screen, a practice quiz that explains every answer, and a short original reading
              that uses the words in context, with comprehension questions. It works on a phone or a projector, with no account.
            </p>
          </section>

          {levels.map(({ level, label }) => {
            const themes = vocabularyThemes.filter((entry) => entry.level === level);
            return themes.length ? (
              <Section key={level} title={label}>
                <div className={styles.cardGrid}>
                  {themes.map((entry) => (
                    <Link key={entry.slug} className={styles.levelCard} href={vocabularyPath(entry.slug)}>
                      <b>{entry.title}</b>
                      <span>Word list · practice quiz · reading</span>
                      <em>Open the topic</em>
                    </Link>
                  ))}
                </div>
              </Section>
            ) : null;
          })}

          <Section title="Why lists alone are not enough">
            <div className={styles.panel}>
              <p>
                When we captured Google autocomplete for twenty «spanish … vocabulary» searches in the United States on 27 November 2026,
                most suggestions asked for practice, quizzes, worksheets or games, not only a list. That is why every topic here pairs the
                list with questions that correct themselves and a text to read.
              </p>
              <p><small>Source: SpanishCue capture of Google autocomplete, United States, 27 November 2026.</small></p>
            </div>
          </Section>

          <Section title="Heritage speakers">
            <div className={styles.prose}>
              <p>
                Every topic ends with a short task for students who speak Spanish at home: regional words their family may use and the
                spelling points that matter most in writing.
              </p>
            </div>
          </Section>
        </div>
      </main>
      <GrowthFooter />
    </>
  );
}
