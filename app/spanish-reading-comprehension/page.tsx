import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, Faq, GrowthFooter, GrowthTopbar, JsonLd, Section } from "../growth/components";
import { collectionPageSchema, faqPageSchema } from "../growth/schema";
import { canonicalUrl } from "../seo";
import { READING_PATH, readingTexts, wordCount } from "./data";
import styles from "../growth/growth.module.css";

const title = "Spanish Reading Comprehension Practice with Instant Feedback (A1–B1)";
const description = "Short original Spanish texts by level with comprehension questions that correct as you answer, a glossary and one grammar point per text. Free, no login, for students and teachers.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: canonicalUrl(READING_PATH) },
  robots: { index: true, follow: true },
  openGraph: { title, description, url: canonicalUrl(READING_PATH), type: "website" },
};

const faq = [
  {
    question: "Do I need an account to use these texts?",
    answer: "No. Every text, question and glossary is open. Answers are checked on the page as soon as you tap an option, and the answer key is also printed under each question.",
  },
  {
    question: "Which level should I start with?",
    answer: "If you can introduce yourself and describe your day, start with A1. If you can talk about what you did today, try A2. If you can tell a story in the past, go to B1. If you understand every question at one level without the glossary, move up.",
  },
  {
    question: "Can teachers use them in class?",
    answer: "Yes. Share the page link as a warm-up or as homework. Students check their own answers on their phone or computer, and the answer key is on the page for you.",
  },
];

export default function ReadingHubPage() {
  return (
    <>
      <main className={styles.page} lang="en">
        <div className={styles.shell}>
          <JsonLd data={collectionPageSchema({ pathname: READING_PATH, name: title, description, inLanguage: "en", items: readingTexts.map((text) => ({ name: text.title, href: text.path })) })} />
          <JsonLd data={faqPageSchema(faq, "en")} />
          <GrowthTopbar />
          <Breadcrumbs items={[{ name: "SpanishCue", href: "/" }, { name: "Spanish reading comprehension", href: READING_PATH }]} />
          <section className={styles.hero}>
            <p className={styles.eyebrow}>Spanish reading practice</p>
            <h1 className={styles.title}>Spanish reading comprehension practice, checked as you answer</h1>
            <p className={styles.lead}>
              Pick your level and read a short original text in Spanish. Each question is checked the moment you tap an answer, and you see
              the line of the text that proves it. Every text comes with a glossary and one grammar point from the text. Free, no login.
            </p>
          </section>

          <Section title="Choose your level">
            <div className={styles.cardGrid}>
              {readingTexts.map((text) => (
                <Link key={text.slug} className={styles.levelCard} href={text.path}>
                  <b>{text.level}</b>
                  <span lang="es">«{text.titleEs}»</span>
                  <span>{wordCount(text)} words · {text.comprehension.length + text.grammar.items.length} questions · {text.focus}</span>
                  <em>Read and answer</em>
                </Link>
              ))}
            </div>
          </Section>

          <Section title="How each text works">
            <div className={styles.panel}>
              <ul>
                <li><b>Read.</b> A short original text written for the level: a routine, a day that goes wrong, a family story.</li>
                <li><b>Answer.</b> Four comprehension questions. Tap an option: you see at once whether it is right and why.</li>
                <li><b>Check the words.</b> A glossary with the words that block understanding at that level.</li>
                <li><b>Notice the grammar.</b> Three sentences from the text with the grammar point it uses most.</li>
                <li><b>Heritage speakers.</b> If you grew up speaking Spanish at home, each text ends with the spelling points that matter most for you.</li>
              </ul>
            </div>
          </Section>

          <Section title="Why answer on screen instead of printing a PDF">
            <div className={styles.prose}>
              <p>
                When we searched Google for «spanish reading comprehension b1 pdf» on 26 November 2026, 4 of the 9 results were documents to
                download. A worksheet gives you the answers at the end, if at all. Here the feedback arrives while you still remember why you
                chose an answer, which is when it helps most.
              </p>
              <p>
                Where we have data, the grammar notes start from real mistakes: SpanishCue publishes the errors learners make in its homework in{" "}
                <Link className={styles.textLink} href="/datos">SpanishCue data</Link> (in Spanish).
              </p>
            </div>
          </Section>

          <Section title="Frequently asked questions">
            <Faq items={faq} />
          </Section>
        </div>
      </main>
      <GrowthFooter />
    </>
  );
}
