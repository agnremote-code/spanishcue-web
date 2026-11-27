import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, Faq, GrowthFooter, GrowthTopbar, JsonLd, Section } from "../growth/components";
import { collectionPageSchema, faqPageSchema } from "../growth/schema";
import { canonicalUrl } from "../seo";
import { PRACTICE_PATH } from "../spanish-grammar-practice/data";
import { AP_PATH, AP_SOURCES, apParts, examFormat, serpFigure } from "./data";
import styles from "../growth/growth.module.css";

const title = "AP Spanish Language and Culture 2027: New Exam Format and Free Practice";
const description = "The new AP Spanish Language and Culture exam from May 2027: project presentation, Q&A, argumentative essay, listening and reading, with times and weights from College Board and free practice for each part.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: canonicalUrl(AP_PATH) },
  robots: { index: true, follow: true },
  openGraph: { title, description, url: canonicalUrl(AP_PATH), type: "website" },
};

const faq = [
  {
    question: "What changed in the AP Spanish Language exam for 2027?",
    answer: "College Board revised the AP world language courses for the 2026-27 school year. The 2027 exam starts with free response: a project presentation and a Q&A based on research on a topic released in January, plus the argumentative essay. Then come 55 multiple-choice questions on listening and reading. The whole exam is digital, in the Bluebook app.",
  },
  {
    question: "When is the 2027 AP Spanish Language exam?",
    answer: "College Board lists Thursday, May 13, 2027, as the exam date. Check AP Students or your AP coordinator for the time and place.",
  },
  {
    question: "Can I self study AP Spanish?",
    answer: "Many students do, especially heritage speakers. The research project needs planning from January, so start then: pick sources on the topic, practise presenting for 3 minutes, and time yourself on essays and on listening and reading sets.",
  },
];

export default function ApHubPage() {
  return (
    <>
      <main className={styles.page} lang="en">
        <div className={styles.shell}>
          <JsonLd data={collectionPageSchema({ pathname: AP_PATH, name: title, description, inLanguage: "en", items: apParts.map((part) => ({ name: part.title, href: part.path })) })} />
          <JsonLd data={faqPageSchema(faq, "en")} />
          <GrowthTopbar />
          <Breadcrumbs items={[{ name: "SpanishCue", href: "/" }, { name: "AP Spanish Language", href: AP_PATH }]} />
          <section className={styles.hero}>
            <p className={styles.eyebrow}>AP Spanish Language and Culture · 2027 exam</p>
            <h1 className={styles.title}>AP Spanish Language and Culture 2027: the new exam format</h1>
            <p className={styles.lead}>
              From May 2027 the exam is new: about 2 hours 30 minutes, fully digital, with free response first (a project presentation, a
              Q&A and an argumentative essay) and then 55 multiple-choice questions on listening and reading. Here is each part with its
              time and weight, as College Board describes it, and free practice that corrects as you answer.
            </p>
          </section>

          <Section title="The 2027 exam at a glance">
            <div className={`${styles.panel} ${styles.tableWrap}`}>
              <table>
                <caption>AP Spanish Language and Culture exam, May 2027</caption>
                <thead><tr><th scope="col">Section</th><th scope="col">Task</th><th scope="col">Time</th><th scope="col">Weight</th></tr></thead>
                <tbody>{examFormat.map((row) => <tr key={row.task}><td>{row.section}</td><th scope="row">{row.task}</th><td>{row.time}</td><td>{row.weight}</td></tr>)}</tbody>
              </table>
            </div>
            <p className={styles.footnote}>Section I takes 65–70 minutes and Section II 80 minutes. Questions 1 and 2 are based on research on a project topic released in January of the exam year.</p>
          </Section>

          <Section title="Practise each part">
            <div className={styles.cardGrid}>
              {apParts.map((part) => (
                <Link key={part.slug} className={styles.levelCard} href={part.path}>
                  <b>{part.name}</b>
                  <span>{part.facts[part.facts.length > 2 ? 1 : 0].value}</span>
                  <span>{part.quiz.length} practice questions · strategy · common mistakes</span>
                  <em>Practise now</em>
                </Link>
              ))}
            </div>
          </Section>

          <Section title="What SpanishCue data shows">
            <div className={styles.panel}>
              <p>
                When we searched «{serpFigure.query}» on Google in the United States on {serpFigure.date}, {serpFigure.mention2027} of the{" "}
                {serpFigure.results} organic results had the 2027 exam in its title. Most practice material online was written for the
                previous format, which had an email reply, a conversation and a cultural comparison. Check that what you practise matches
                the new tasks.
              </p>
              <p><small>Source: our capture of Google search results in English (United States), {serpFigure.date}.</small></p>
            </div>
          </Section>

          <Section title="If you grew up speaking Spanish at home">
            <div className={styles.prose}>
              <p>
                Heritage speakers often do very well on listening and speaking. Where points slip is in writing: written accents, formal
                register in the essay and English calques such as «aplicar para» (solicitar) or «hacer sentido» (tener sentido). Each
                practice page ends with the points that matter most for you.
              </p>
            </div>
          </Section>

          <Section title="Grammar that the exam rewards">
            <div className={styles.prose}>
              <p>
                The essay and the Q&A reward accurate verbs more than rare vocabulary. If you want to review, the{" "}
                <Link className={styles.textLink} href={PRACTICE_PATH}>Spanish grammar practice</Link> pages cover the subjunctive, the
                preterite and imperfect, por and para, and ser and estar, each with questions that correct as you answer.
              </p>
            </div>
          </Section>

          <Section title="Questions">
            <Faq items={faq} />
          </Section>

          <p className={styles.footnote}>
            Exam facts from College Board: {AP_SOURCES.map((s, i) => <span key={s.href}>{i ? " · " : ""}<a className={styles.textLink} href={s.href} rel="noopener">{s.label}</a></span>)}. AP is a registered
            trademark of College Board, which is not affiliated with SpanishCue and does not endorse this page.
          </p>
        </div>
      </main>
      <GrowthFooter />
    </>
  );
}
