import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { Breadcrumbs, Faq, GrowthFooter, GrowthTopbar, JsonLd, Section } from "../../growth/components";
import { faqPageSchema, learningResourceSchema } from "../../growth/schema";
import ChoiceQuiz, { type QuizItem } from "../../mini-apps/ChoiceQuiz";
import { canonicalUrl } from "../../seo";
import { loadUsContent } from "../../us-content/load";
import type { UsGrammarPage } from "../../us-content/types";
import { AUTOCOMPLETE_REPORT, PRACTICE_PATH, practiceBySlug } from "../data";
import { allTopics, assetTopics } from "../topics";
import styles from "../../growth/growth.module.css";

type Props = { params: Promise<{ topic: string }> };

/** What the page renders, whether the topic comes from data.ts (bundled) or from the «grammar» asset family. */
type View = {
  slug: string;
  path: string;
  name: string;
  levels: string;
  title: string;
  description: string;
  h1: string;
  answer: string;
  rulesCaption: string;
  rules: { use: string; example: string; meaning: string }[];
  quiz: QuizItem[];
  mistakes: string[];
  figure: string;
  source: ReactNode;
  heritage: string;
  teacher?: string;
  teacherLinks: { href: string; label: string }[];
  faq: { question: string; answer: string }[];
};

async function viewFor(params: Props["params"]): Promise<View | null> {
  const { topic: slug } = await params;
  const topic = practiceBySlug.get(slug);
  if (topic) {
    return {
      ...topic,
      source: <>Source: Google autocomplete in English (United States), captured on 26 November 2026. Method and full data: <Link className={styles.textLink} href={AUTOCOMPLETE_REPORT}>our autocomplete report</Link> (in Spanish).</>,
    };
  }
  const entry = assetTopics.find((item) => item.slug === slug);
  if (!entry) return null;
  const page = await loadUsContent<UsGrammarPage>("grammar", entry.slug);
  if (!page) return null;
  return {
    slug: entry.slug,
    path: entry.path,
    name: page.name,
    levels: page.level,
    title: page.title,
    description: page.description,
    h1: page.h1,
    answer: page.answer,
    rulesCaption: page.rulesCaption,
    rules: page.rules,
    quiz: page.quiz,
    mistakes: page.mistakes,
    figure: page.figure.text,
    source: <>Source: {page.figure.source}.</>,
    heritage: page.heritage,
    teacher: page.teacher,
    teacherLinks: [],
    faq: page.faq,
  };
}

export function generateStaticParams() {
  return allTopics.map((topic) => ({ topic: topic.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const topic = await viewFor(params);
  if (!topic) return {};
  return {
    title: topic.title,
    description: topic.description,
    alternates: { canonical: canonicalUrl(topic.path) },
    robots: { index: true, follow: true },
    openGraph: { title: topic.title, description: topic.description, url: canonicalUrl(topic.path), type: "article" },
  };
}

export default async function PracticeTopicPage({ params }: Props) {
  const topic = await viewFor(params);
  if (!topic) notFound();
  const index = allTopics.findIndex((item) => item.slug === topic.slug);
  const next = allTopics[(index + 1) % allTopics.length];
  return (
    <>
      <main className={styles.page} lang="en">
        <div className={styles.shell}>
          <JsonLd data={learningResourceSchema({ pathname: topic.path, name: topic.title, description: topic.description, learningResourceType: "grammar exercise", interactivityType: "active", educationalLevel: topic.levels, inLanguage: "es", roles: ["student", "teacher"], teaches: [`Spanish ${topic.name}`] })} />
          <JsonLd data={faqPageSchema(topic.faq, "en")} />
          <GrowthTopbar />
          <Breadcrumbs items={[{ name: "SpanishCue", href: "/" }, { name: "Spanish grammar practice", href: PRACTICE_PATH }, { name: topic.name, href: topic.path }]} />
          <section className={styles.hero}>
            <p className={styles.eyebrow}>Grammar practice · {topic.levels}</p>
            <h1 className={styles.title}>{topic.h1}</h1>
            <p className={styles.lead}>{topic.answer}</p>
          </section>

          <Section title="The rule in one table">
            <div className={`${styles.panel} ${styles.tableWrap}`}>
              <table>
                <caption>{topic.rulesCaption}</caption>
                <thead><tr><th scope="col">Use</th><th scope="col">Example</th><th scope="col">Form</th></tr></thead>
                <tbody>{topic.rules.map((rule) => <tr key={rule.use}><th scope="row">{rule.use}</th><td lang="es">{rule.example}</td><td lang="es">{rule.meaning}</td></tr>)}</tbody>
              </table>
            </div>
          </Section>

          <Section id="practice" title={`Practice: ${topic.quiz.length} questions`} intro="Tap the option that fills the gap. Each answer is checked at once, with the reason. No account needed.">
            <ChoiceQuiz items={topic.quiz} lang="en" />
          </Section>

          <Section title="Mistakes learners make most">
            <div className={styles.prose}><ul>{topic.mistakes.map((mistake) => <li key={mistake}>{mistake}</li>)}</ul></div>
          </Section>

          <Section title="What SpanishCue data shows">
            <div className={styles.panel}>
              <p>{topic.figure}</p>
              <p><small>{topic.source}</small></p>
            </div>
          </Section>

          <Section title="If you grew up speaking Spanish at home">
            <div className={styles.prose}><p>{topic.heritage}</p></div>
          </Section>

          {topic.teacher ? (
            <Section title="Use it in class">
              <div className={styles.prose}><p>{topic.teacher}</p></div>
            </Section>
          ) : null}

          <Section title="Questions">
            <Faq items={topic.faq} />
          </Section>

          <Section title="Keep going">
            <div className={styles.prose}>
              <ul>
                <li>Next topic: <Link className={styles.textLink} href={next.path}>{next.h1}</Link>.</li>
                <li>All topics: <Link className={styles.textLink} href={PRACTICE_PATH}>Spanish grammar practice</Link>.</li>
                {topic.teacherLinks.map((link) => <li key={link.href}>For teachers: <Link className={styles.textLink} href={link.href}>{link.label}</Link>.</li>)}
              </ul>
            </div>
          </Section>
        </div>
      </main>
      <GrowthFooter />
    </>
  );
}
