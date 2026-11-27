import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, GrowthFooter, GrowthTopbar, JsonLd, Section } from "../growth/components";
import { collectionPageSchema } from "../growth/schema";
import { canonicalUrl } from "../seo";
import { VERB_PRACTICE_PATH, practiceVerbs, verbPracticePath } from "./paths";
import styles from "../growth/growth.module.css";

const title = "Spanish Verb Practice: The Most Common Verbs with Quizzes";
const description = "Free practice for the most common Spanish verbs: when to use each one, present and preterite forms, a self-correcting quiz and a short reading. No login.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: canonicalUrl(VERB_PRACTICE_PATH) },
  robots: { index: true, follow: true },
  openGraph: { title, description, url: canonicalUrl(VERB_PRACTICE_PATH), type: "website" },
};

export default function VerbPracticeHubPage() {
  return (
    <>
      <main className={styles.page} lang="en">
        <div className={styles.shell}>
          <JsonLd data={collectionPageSchema({ pathname: VERB_PRACTICE_PATH, name: title, description, inLanguage: "en", items: practiceVerbs.map((entry) => ({ name: entry.title, href: verbPracticePath(entry.slug) })) })} />
          <GrowthTopbar />
          <Breadcrumbs items={[{ name: "SpanishCue", href: "/" }, { name: "Spanish verb practice", href: VERB_PRACTICE_PATH }]} />
          <section className={styles.hero}>
            <p className={styles.eyebrow}>For students and teachers</p>
            <h1 className={styles.title}>Spanish verb practice</h1>
            <p className={styles.lead}>
              A conjugation chart tells you the forms; it does not tell you when to use them. Each verb here has its main uses with
              examples, the present and the preterite, ten questions that explain every answer, a short reading and the mistakes
              English speakers make most.
            </p>
          </section>

          <Section title="Choose a verb">
            <div className={styles.cardGrid}>
              {practiceVerbs.map((entry) => (
                <Link key={entry.slug} className={styles.levelCard} href={verbPracticePath(entry.slug)}>
                  <b lang="es">{entry.slug}</b>
                  <span>{entry.level} · uses, forms, quiz and reading</span>
                  <em>Practice {entry.slug}</em>
                </Link>
              ))}
            </div>
          </Section>

          <Section title="Why practice and not only charts">
            <div className={styles.panel}>
              <p>
                When we captured Google autocomplete for twenty «spanish verb …» searches in the United States on 27 November 2026, most
                suggestions asked for conjugation charts and tenses, and several asked for practice or worksheets. Charts are everywhere;
                practice that explains each answer is harder to find, so that is what these pages add.
              </p>
              <p><small>Source: SpanishCue capture of Google autocomplete, United States, 27 November 2026.</small></p>
            </div>
          </Section>
        </div>
      </main>
      <GrowthFooter />
    </>
  );
}
