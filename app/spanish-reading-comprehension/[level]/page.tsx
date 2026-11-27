import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs, GrowthFooter, GrowthTopbar, JsonLd, Section } from "../../growth/components";
import { learningResourceSchema } from "../../growth/schema";
import ChoiceQuiz from "../../mini-apps/ChoiceQuiz";
import { canonicalUrl } from "../../seo";
import { READING_PATH, readingBySlug, readingTexts, wordCount } from "../data";
import styles from "../../growth/growth.module.css";

type Props = { params: Promise<{ level: string }> };

export function generateStaticParams() {
  return readingTexts.map((text) => ({ level: text.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const text = readingBySlug.get((await params).level);
  if (!text) return {};
  return {
    title: text.title,
    description: text.description,
    alternates: { canonical: canonicalUrl(text.path) },
    robots: { index: true, follow: true },
    openGraph: { title: text.title, description: text.description, url: canonicalUrl(text.path), type: "article" },
  };
}

export default async function ReadingTextPage({ params }: Props) {
  const text = readingBySlug.get((await params).level);
  if (!text) notFound();
  const index = readingTexts.indexOf(text);
  const next = readingTexts[index + 1];
  const words = wordCount(text);
  return (
    <>
      <main className={styles.page} lang="en">
        <div className={styles.shell}>
          <JsonLd data={learningResourceSchema({ pathname: text.path, name: text.title, description: text.description, learningResourceType: "reading comprehension exercise", interactivityType: "active", educationalLevel: text.level, inLanguage: "es", roles: ["student", "teacher"], teaches: ["Spanish reading comprehension", text.focus] })} />
          <GrowthTopbar />
          <Breadcrumbs items={[{ name: "SpanishCue", href: "/" }, { name: "Spanish reading comprehension", href: READING_PATH }, { name: `Level ${text.level}`, href: text.path }]} />
          <section className={styles.hero}>
            <p className={styles.eyebrow}>Reading comprehension · {text.level}</p>
            <h1 className={styles.title}>Spanish reading comprehension {text.level}: <span lang="es">«{text.titleEs}»</span></h1>
            <p className={styles.lead}>
              Read the text ({words} words), then answer the questions below: each answer is checked as soon as you tap it, with the line
              of the text that proves it. It practises {text.focus}. No account needed.
            </p>
          </section>

          <Section title={`Text: «${text.titleEs}»`}>
            <div className={`${styles.panel} ${styles.prose}`} lang="es">
              {text.paragraphs.map((paragraph) => <p key={paragraph.slice(0, 24)}>{paragraph}</p>)}
            </div>
          </Section>

          <Section title="Comprehension questions" intro="Tap the option that completes each sentence according to the text.">
            <ChoiceQuiz items={text.comprehension} lang="en" />
          </Section>

          <Section title="Glossary">
            <div className={`${styles.panel} ${styles.tableWrap}`}>
              <table>
                <caption>Words from the text with their meaning in English</caption>
                <thead><tr><th scope="col">Spanish</th><th scope="col">English</th></tr></thead>
                <tbody>{text.glossary.map(([es, en]) => <tr key={es}><th scope="row" lang="es">{es}</th><td>{en}</td></tr>)}</tbody>
              </table>
            </div>
          </Section>

          <Section title={text.grammar.title} intro={text.grammar.intro}>
            <ChoiceQuiz items={text.grammar.items} lang="en" />
          </Section>

          <Section title="What SpanishCue data shows">
            <div className={styles.panel}>
              <p>{text.figure.text}</p>
              <p><small>Source: {text.figure.href ? <Link className={styles.textLink} href={text.figure.href}>{text.figure.source}</Link> : text.figure.source}.</small></p>
            </div>
          </Section>

          <Section title="If you grew up speaking Spanish at home">
            <div className={styles.prose}><p>{text.heritage}</p></div>
          </Section>

          <Section title="Keep going">
            <div className={styles.prose}>
              <ul>
                {next ? <li>Next text: <Link className={styles.textLink} href={next.path}>Spanish reading comprehension {next.level}, «{next.titleEs}»</Link>.</li> : null}
                <li>All texts by level: <Link className={styles.textLink} href={READING_PATH}>Spanish reading comprehension practice</Link>.</li>
                <li>More practice at this level: <Link className={styles.textLink} href={text.freeLessonHref}>{text.freeLessonLabel}</Link>.</li>
              </ul>
              <p>
                Teachers: share this page as a warm-up or as homework. Students read and check their answers on their own phone; the answers
                are also printed on the page under «Show the answer».
              </p>
            </div>
          </Section>
        </div>
      </main>
      <GrowthFooter />
    </>
  );
}
