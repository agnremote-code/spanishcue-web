import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, Faq, GrowthFooter, GrowthTopbar, JsonLd, Section } from "../growth/components";
import { collectionPageSchema, faqPageSchema } from "../growth/schema";
import { canonicalUrl } from "../seo";
import { READING_PATH } from "../spanish-reading-comprehension/data";
import { AUTOCOMPLETE_REPORT, PRACTICE_PATH, practiceTopics } from "./data";
import styles from "../growth/growth.module.css";

const title = "Spanish Grammar Practice Online: Ser vs Estar, Preterite vs Imperfect, Subjunctive, Por vs Para";
const description = "Free Spanish grammar practice that corrects as you answer: the four contrasts learners ask about most, each with the rule in one table, 8 questions, common mistakes and a note for heritage speakers. No login.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: canonicalUrl(PRACTICE_PATH) },
  robots: { index: true, follow: true },
  openGraph: { title, description, url: canonicalUrl(PRACTICE_PATH), type: "website" },
};

const faq = [
  {
    question: "Do I need an account?",
    answer: "No. Every rule table and every question is open. Answers are checked on the page as soon as you tap an option, and the answer key is printed under each question.",
  },
  {
    question: "Which topic should I start with?",
    answer: "Ser vs estar comes first (A1–B1). Then preterite vs imperfect and por vs para (A2–B1). The present subjunctive is B1–B2: start it once you can tell a story in the past.",
  },
  {
    question: "Can teachers use these pages in class?",
    answer: "Yes. Share the link as a warm-up or as homework: students check their own answers on a phone or a computer. Each topic links to a teacher guide with class activities.",
  },
];

export default function PracticeHubPage() {
  return (
    <>
      <main className={styles.page} lang="en">
        <div className={styles.shell}>
          <JsonLd data={collectionPageSchema({ pathname: PRACTICE_PATH, name: title, description, inLanguage: "en", items: practiceTopics.map((topic) => ({ name: topic.title, href: topic.path })) })} />
          <JsonLd data={faqPageSchema(faq, "en")} />
          <GrowthTopbar />
          <Breadcrumbs items={[{ name: "SpanishCue", href: "/" }, { name: "Spanish grammar practice", href: PRACTICE_PATH }]} />
          <section className={styles.hero}>
            <p className={styles.eyebrow}>Spanish grammar practice</p>
            <h1 className={styles.title}>Spanish grammar practice, checked as you answer</h1>
            <p className={styles.lead}>
              Four contrasts cause most of the doubts in Spanish class: ser or estar, preterite or imperfect, indicative or subjunctive, por
              or para. Each page gives you the rule in one table, eight sentences that correct the moment you tap, and the mistakes learners
              make most. Free, no login.
            </p>
          </section>

          <Section title="Choose a topic">
            <div className={styles.cardGrid}>
              {practiceTopics.map((topic) => (
                <Link key={topic.slug} className={styles.levelCard} href={topic.path}>
                  <b>{topic.levels}</b>
                  <span>{topic.name}</span>
                  <span>{topic.rules.length} rules · {topic.quiz.length} questions · common mistakes</span>
                  <em>Practise now</em>
                </Link>
              ))}
            </div>
          </Section>

          <Section title="Why practice on screen instead of a PDF">
            <div className={styles.prose}>
              <p>
                We collected Google's English autocomplete for 198 Spanish grammar searches on 26 November 2026. When the search did not
                already include the word, Google suggested «pdf» 146 times and «worksheet» 132 times, while «interactive» did not appear once
                in 1409 suggestions. People want to practise, but what they are offered is mostly a sheet to print. A sentence that corrects itself as soon as you answer tells you at once whether you
                understood the rule, and why.
              </p>
              <p><small>Source: <Link className={styles.textLink} href={AUTOCOMPLETE_REPORT}>our autocomplete report</Link> (in Spanish), with the method and the data as CSV.</small></p>
            </div>
          </Section>

          <Section title="More practice">
            <div className={styles.prose}>
              <ul>
                <li><Link className={styles.textLink} href={READING_PATH}>Spanish reading comprehension</Link>: short texts by level with questions that correct as you answer.</li>
              </ul>
            </div>
          </Section>

          <Section title="Questions">
            <Faq items={faq} />
          </Section>
        </div>
      </main>
      <GrowthFooter />
    </>
  );
}
