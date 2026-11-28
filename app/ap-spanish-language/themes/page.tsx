import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, Faq, GrowthFooter, GrowthTopbar, JsonLd, Section } from "../../growth/components";
import { collectionPageSchema, faqPageSchema } from "../../growth/schema";
import { canonicalUrl } from "../../seo";
import { AP_PATH } from "../data";
import { AP_CED_URL, AP_COURSE_URL, AP_THEMES_PATH, apUnitPath, apUnits } from "./paths";
import styles from "../../growth/growth.module.css";

const title = "AP Spanish Themes 2026-27: The Six Units with Vocabulary and Practice";
const description = "The six units of AP Spanish Language and Culture from fall 2026, with vocabulary, a reading, essay and speaking practice for each one. Free, no login.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: canonicalUrl(AP_THEMES_PATH) },
  robots: { index: true, follow: true },
  openGraph: { title, description, url: canonicalUrl(AP_THEMES_PATH), type: "website" },
};

const faq = [
  {
    question: "What are the six AP Spanish themes now?",
    answer: "Since fall 2026 the course is organized in six units: Families and Communities, Language and Culture, Art and Creativity, Science and Technology, Contemporary Life and Global Contexts. Each unit lists recommended contexts, which the course description says are not required.",
  },
  {
    question: "Where did Beauty and Aesthetics and Global Challenges go?",
    answer: "Older materials list six themes with those names. In the framework effective fall 2026, Beauty and Aesthetics appears as a recommended context inside Unit 3, Art and Creativity. Check the course description for the full list of contexts in each unit.",
  },
  {
    question: "Which unit is the 2026-27 course project about?",
    answer: "College Board says the 2026-27 course project is drawn from Unit 3, Art and Creativity, and uses music as its lens. The project packet comes out in January of the exam year.",
  },
];

export default function ApThemesHubPage() {
  return (
    <>
      <main className={styles.page} lang="en">
        <div className={styles.shell}>
          <JsonLd data={collectionPageSchema({ pathname: AP_THEMES_PATH, name: title, description, inLanguage: "en", items: apUnits.map((entry) => ({ name: entry.title, href: apUnitPath(entry.slug) })) })} />
          <JsonLd data={faqPageSchema(faq, "en")} />
          <GrowthTopbar />
          <Breadcrumbs items={[{ name: "SpanishCue", href: "/" }, { name: "AP Spanish Language", href: AP_PATH }, { name: "Themes", href: AP_THEMES_PATH }]} />
          <section className={styles.hero}>
            <p className={styles.eyebrow}>AP Spanish Language and Culture · course framework from fall 2026</p>
            <h1 className={styles.title}>AP Spanish themes: the six units</h1>
            <p className={styles.lead}>
              The course now runs in six units. Each page below has the unit&apos;s recommended contexts as College Board prints them, the
              vocabulary you need to argue about them, an original reading with questions, an essay prompt with two sides and Q&amp;A
              questions to answer out loud.
            </p>
          </section>

          <Section title="Choose a unit">
            <div className={styles.cardGrid}>
              {apUnits.map((entry) => (
                <Link key={entry.slug} className={styles.levelCard} href={apUnitPath(entry.slug)}>
                  <b>Unit {entry.theme.replace("unit-", "")}</b>
                  <span>{entry.title}</span>
                  <em>Vocabulary, reading, essay and speaking</em>
                </Link>
              ))}
            </div>
          </Section>

          <Section title="Old themes, new units">
            <div className={styles.prose}>
              <p>
                Many review sites still list the six themes of the previous course, such as Personal and Public Identities, Beauty and
                Aesthetics and Global Challenges. The framework effective fall 2026 uses units instead. Some old theme names survive as
                recommended contexts: Beauty and Aesthetics, for example, is now a context in Unit 3. If your textbook uses the old names,
                the vocabulary still helps; just match it to the new unit.
              </p>
              <p>
                For the exam itself (project presentation, Q&amp;A, argumentative essay, listening and reading), see the{" "}
                <Link className={styles.textLink} href={AP_PATH}>AP Spanish Language 2027 exam guide</Link>.
              </p>
            </div>
          </Section>

          <Section title="Questions">
            <Faq items={faq} />
          </Section>

          <p className={styles.footnote}>
            Unit names and contexts from College Board: <a className={styles.textLink} href={AP_COURSE_URL} rel="noopener">AP Central course page</a> ·{" "}
            <a className={styles.textLink} href={AP_CED_URL} rel="noopener">Course and Exam Description, effective fall 2026</a>. AP is a registered
            trademark of College Board, which is not affiliated with SpanishCue and does not endorse this page.
          </p>
        </div>
      </main>
      <GrowthFooter />
    </>
  );
}
