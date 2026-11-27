import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs, GrowthFooter, GrowthTopbar, JsonLd, Section } from "../../../growth/components";
import { learningResourceSchema } from "../../../growth/schema";
import ChoiceQuiz from "../../../mini-apps/ChoiceQuiz";
import { canonicalUrl } from "../../../seo";
import { usCatalog } from "../../../us-content/catalog.generated";
import { loadUsContent } from "../../../us-content/load";
import type { UsReadingPage } from "../../../us-content/types";
import { READING_PATH } from "../../data";
import styles from "../../../growth/growth.module.css";

type Props = { params: Promise<{ level: string; topic: string }> };

const readings = usCatalog.filter((entry) => entry.family === "reading");
const topicPath = (slug: string) => `${READING_PATH}/${slug.replace("-", "/")}`;

function entryFor(level: string, topic: string) {
  return readings.find((entry) => entry.slug === `${level}-${topic}`);
}

async function readingFor(params: Props["params"]) {
  const { level, topic } = await params;
  const entry = entryFor(level, topic);
  if (!entry) return null;
  const page = await loadUsContent<UsReadingPage>("reading", entry.slug);
  return page ? { entry, page } : null;
}

export function generateStaticParams() {
  return readings.map((entry) => {
    const [level, ...topic] = entry.slug.split("-");
    return { level, topic: topic.join("-") };
  });
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const found = await readingFor(params);
  if (!found) return {};
  const path = topicPath(found.entry.slug);
  return {
    title: found.page.title,
    description: found.page.description,
    alternates: { canonical: canonicalUrl(path) },
    robots: { index: true, follow: true },
    openGraph: { title: found.page.title, description: found.page.description, url: canonicalUrl(path), type: "article" },
  };
}

export default async function ReadingTopicPage({ params }: Props) {
  const found = await readingFor(params);
  if (!found) notFound();
  const { entry, page } = found;
  const path = topicPath(entry.slug);
  const levelSlug = page.level.toLowerCase();
  const levelPath = `${READING_PATH}/${levelSlug}`;
  const sameLevel = readings.filter((other) => other.level === page.level);
  const next = sameLevel[(sameLevel.indexOf(entry) + 1) % sameLevel.length];
  const words = page.paragraphs.join(" ").split(/\s+/).filter(Boolean).length;
  return (
    <>
      <main className={styles.page} lang="en">
        <div className={styles.shell}>
          <JsonLd data={learningResourceSchema({ pathname: path, name: page.title, description: page.description, learningResourceType: "reading comprehension exercise", interactivityType: "active", educationalLevel: page.level, inLanguage: "es", roles: ["student", "teacher"], teaches: ["Spanish reading comprehension", page.focus] })} />
          <GrowthTopbar />
          <Breadcrumbs items={[{ name: "SpanishCue", href: "/" }, { name: "Spanish reading comprehension", href: READING_PATH }, { name: `Level ${page.level}`, href: levelPath }, { name: page.themeLabel, href: path }]} />
          <section className={styles.hero}>
            <p className={styles.eyebrow}>Reading comprehension · {page.level} · {page.themeLabel}</p>
            <h1 className={styles.title}>{page.h1}: <span lang="es">«{page.titleEs}»</span></h1>
            <p className={styles.lead}>{page.intro} The text has {words} words and every answer is checked as soon as you tap it. No account needed.</p>
          </section>

          <Section title={`Text: «${page.titleEs}»`}>
            <div className={`${styles.panel} ${styles.prose}`} lang="es">
              {page.paragraphs.map((paragraph) => <p key={paragraph.slice(0, 32)}>{paragraph}</p>)}
            </div>
          </Section>

          <Section title="Comprehension questions" intro="Tap the option that completes each sentence according to the text.">
            <ChoiceQuiz items={page.comprehension} lang="en" />
          </Section>

          <Section title="Glossary">
            <div className={`${styles.panel} ${styles.tableWrap}`}>
              <table>
                <caption>Words from the text with their meaning in English</caption>
                <thead><tr><th scope="col">Spanish</th><th scope="col">English</th></tr></thead>
                <tbody>{page.glossary.map(([es, en]) => <tr key={es}><th scope="row" lang="es">{es}</th><td>{en}</td></tr>)}</tbody>
              </table>
            </div>
          </Section>

          <Section title={page.grammar.title} intro={page.grammar.intro}>
            <ChoiceQuiz items={page.grammar.items} lang="en" />
          </Section>

          <Section title="Talk or write about it" intro="Answer in Spanish, out loud with a partner or in your notebook.">
            <div className={`${styles.panel} ${styles.prose}`} lang="es"><ol>{page.speaking.map((prompt) => <li key={prompt}>{prompt}</li>)}</ol></div>
          </Section>

          <Section title="Why this text exists">
            <div className={styles.panel}>
              <p>{page.figure.text}</p>
              <p><small>Source: {page.figure.href ? <Link className={styles.textLink} href={page.figure.href}>{page.figure.source}</Link> : page.figure.source}.</small></p>
            </div>
          </Section>

          <Section title="If you grew up speaking Spanish at home">
            <div className={styles.prose}><p>{page.heritage}</p></div>
          </Section>

          <Section title="Keep going">
            <div className={styles.prose}>
              <ul>
                {next && next !== entry ? <li>Next {page.level} text: <Link className={styles.textLink} href={topicPath(next.slug)}>{next.title}</Link>.</li> : null}
                <li>All {page.level} texts: <Link className={styles.textLink} href={levelPath}>Spanish reading comprehension {page.level}</Link>.</li>
                <li>Every level: <Link className={styles.textLink} href={READING_PATH}>Spanish reading comprehension practice</Link>.</li>
              </ul>
              <p>{page.teacher}</p>
            </div>
          </Section>
        </div>
      </main>
      <GrowthFooter />
    </>
  );
}
