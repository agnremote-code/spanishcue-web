import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs, Faq, GrowthFooter, GrowthTopbar, JsonLd, Section } from "../../growth/components";
import { faqPageSchema, learningResourceSchema } from "../../growth/schema";
import ChoiceQuiz from "../../mini-apps/ChoiceQuiz";
import { canonicalUrl } from "../../seo";
import { AUTOCOMPLETE_REPORT, PRACTICE_PATH, practiceBySlug, practiceTopics } from "../data";
import styles from "../../growth/growth.module.css";

type Props = { params: Promise<{ topic: string }> };

export function generateStaticParams() {
  return practiceTopics.map((topic) => ({ topic: topic.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const topic = practiceBySlug.get((await params).topic);
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
  const topic = practiceBySlug.get((await params).topic);
  if (!topic) notFound();
  const index = practiceTopics.indexOf(topic);
  const next = practiceTopics[(index + 1) % practiceTopics.length];
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
              <p><small>Source: Google autocomplete in English (United States), captured on 26 November 2026. Method and full data: <Link className={styles.textLink} href={AUTOCOMPLETE_REPORT}>our autocomplete report</Link> (in Spanish).</small></p>
            </div>
          </Section>

          <Section title="If you grew up speaking Spanish at home">
            <div className={styles.prose}><p>{topic.heritage}</p></div>
          </Section>

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
