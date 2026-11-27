import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, Faq, GrowthFooter, GrowthTopbar, JsonLd, Section } from "../growth/components";
import { collectionPageSchema, faqPageSchema } from "../growth/schema";
import { canonicalUrl } from "../seo";
import { SUB_PLANS_PATH, subPlans, subPlansSerp } from "./data";
import styles from "../growth/growth.module.css";

const title = "Emergency Spanish Sub Plans: Spanish 1, 2 and 3, No Prep, Self-Correcting";
const description = "Free emergency sub plans for Spanish 1, Spanish 2 and Spanish 3: 50 minutes each, a reading, grammar practice that corrects itself, writing frames and an exit ticket. The substitute does not need to speak Spanish.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: canonicalUrl(SUB_PLANS_PATH) },
  robots: { index: true, follow: true },
  openGraph: { title, description, url: canonicalUrl(SUB_PLANS_PATH), type: "website" },
};

const faq = [
  {
    question: "What makes a good emergency sub plan for Spanish class?",
    answer: "One the substitute can run without speaking Spanish: clear timing, instructions in English, activities students can do on their own, and answers that can be checked without the teacher. That is what each plan here does.",
  },
  {
    question: "Do students need accounts or a printer?",
    answer: "Neither. Every page in these plans is open without login. Use a projector or the students' devices; the writing part only needs paper.",
  },
  {
    question: "Which plan should I leave?",
    answer: "Spanish 1 practises ser and estar with a weekend routine. Spanish 2 practises the preterite and the imperfect with a story. Spanish 3 practises the present subjunctive with advice and wishes.",
  },
];

export default function SubPlansHubPage() {
  return (
    <>
      <main className={styles.page} lang="en">
        <div className={styles.shell}>
          <JsonLd data={collectionPageSchema({ pathname: SUB_PLANS_PATH, name: title, description, inLanguage: "en", items: subPlans.map((plan) => ({ name: plan.title, href: plan.path })) })} />
          <JsonLd data={faqPageSchema(faq, "en")} />
          <GrowthTopbar />
          <Breadcrumbs items={[{ name: "SpanishCue", href: "/" }, { name: "Spanish sub plans", href: SUB_PLANS_PATH }]} />
          <section className={styles.hero}>
            <p className={styles.eyebrow}>For Spanish teachers</p>
            <h1 className={styles.title}>Emergency Spanish sub plans that correct themselves</h1>
            <p className={styles.lead}>
              Sick tomorrow? Leave one link. Each plan fills a 50-minute class with a short reading, grammar practice, writing and an exit
              ticket. The answers are checked on screen, so the substitute does not need to speak Spanish and students keep practising.
              Free, no login, no printing.
            </p>
          </section>

          <Section title="Choose the course">
            <div className={styles.cardGrid}>
              {subPlans.map((plan) => (
                <Link key={plan.slug} className={styles.levelCard} href={plan.path}>
                  <b>{plan.course}</b>
                  <span>{plan.levels} · {plan.steps.reduce((sum, step) => sum + step.minutes, 0)} minutes</span>
                  <span>{plan.steps.map((step) => step.title.split(":")[0]).join(" · ")}</span>
                  <em>Open the plan</em>
                </Link>
              ))}
            </div>
          </Section>

          <Section title="How each plan works">
            <div className={styles.panel}>
              <ul>
                <li><b>10 minutes, reading.</b> A short original text with questions that correct themselves.</li>
                <li><b>15 minutes, grammar.</b> The rule in one table and 8 questions with the reason for each answer.</li>
                <li><b>15 minutes, writing.</b> Six sentence frames in Spanish that students complete on paper.</li>
                <li><b>10 minutes, exit ticket.</b> Four questions on the plan page; students show their score before leaving.</li>
              </ul>
            </div>
          </Section>

          <Section title="What SpanishCue data shows">
            <div className={styles.panel}>
              <p>
                Of the first {subPlansSerp.results} Google results for «{subPlansSerp.query}» in the United States on {subPlansSerp.date},{" "}
                {subPlansSerp.easyPromise} promised easy, no-prep or no-stress plans in their title, and none mentioned an activity that
                corrects itself. Teachers want plans that take no preparation; a plan that checks its own answers also keeps the class
                learning while you are away.
              </p>
              <p><small>Source: our capture of Google search results in English (United States), {subPlansSerp.date}.</small></p>
            </div>
          </Section>

          <Section title="Heritage speakers in the class">
            <div className={styles.prose}>
              <p>
                Each plan includes an extension for heritage speakers, who often finish the reading and the practice first: a longer
                writing task and the spelling points that matter most for them.
              </p>
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
