import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs, GrowthFooter, GrowthTopbar, JsonLd, Section } from "../../growth/components";
import { learningResourceSchema } from "../../growth/schema";
import ChoiceQuiz from "../../mini-apps/ChoiceQuiz";
import { canonicalUrl } from "../../seo";
import { loadUsContent } from "../../us-content/load";
import type { UsVocabularyPage } from "../../us-content/types";
import { VOCABULARY_PATH, vocabularyPath, vocabularyThemes } from "../paths";
import styles from "../../growth/growth.module.css";

type Props = { params: Promise<{ theme: string }> };

async function pageFor(params: Props["params"]) {
  const { theme } = await params;
  const entry = vocabularyThemes.find((item) => item.slug === theme);
  if (!entry) return null;
  const page = await loadUsContent<UsVocabularyPage>("vocabulary", entry.slug);
  return page ? { entry, page } : null;
}

export function generateStaticParams() {
  return vocabularyThemes.map((entry) => ({ theme: entry.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const found = await pageFor(params);
  if (!found) return {};
  const url = canonicalUrl(vocabularyPath(found.entry.slug));
  return {
    title: found.page.title,
    description: found.page.description,
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: { title: found.page.title, description: found.page.description, url, type: "article" },
  };
}

export default async function VocabularyThemePage({ params }: Props) {
  const found = await pageFor(params);
  if (!found) notFound();
  const { entry, page } = found;
  const path = vocabularyPath(entry.slug);
  const next = vocabularyThemes[(vocabularyThemes.indexOf(entry) + 1) % vocabularyThemes.length];
  const total = page.vocabulary.reduce((sum, group) => sum + group.words.length, 0);
  const readingLevel = `/spanish-reading-comprehension/${page.level.toLowerCase()}`;
  return (
    <>
      <main className={styles.page} lang="en">
        <div className={styles.shell}>
          <JsonLd data={learningResourceSchema({ pathname: path, name: page.title, description: page.description, learningResourceType: "vocabulary practice", interactivityType: "active", educationalLevel: page.level, inLanguage: "es", roles: ["student", "teacher"], teaches: [`Spanish ${page.themeLabel.toLowerCase()} vocabulary`, page.focus] })} />
          <GrowthTopbar />
          <Breadcrumbs items={[{ name: "SpanishCue", href: "/" }, { name: "Spanish vocabulary", href: VOCABULARY_PATH }, { name: page.themeLabel, href: path }]} />
          <section className={styles.hero}>
            <p className={styles.eyebrow}>Spanish vocabulary · {page.themeLabel} · reading level {page.level}</p>
            <h1 className={styles.title}>{page.h1}</h1>
            <p className={styles.lead}>{page.intro} {total} words, {page.vocabQuiz.length + page.comprehension.length + page.grammar.items.length} questions that correct themselves, no account needed.</p>
          </section>

          <Section title="Word list">
            <div className={styles.cardGrid}>
              {page.vocabulary.map((group) => (
                <div key={group.title} className={`${styles.panel} ${styles.tableWrap}`}>
                  <table>
                    <caption>{group.title}</caption>
                    <thead><tr><th scope="col">Spanish</th><th scope="col">English</th></tr></thead>
                    <tbody>{group.words.map(([es, en]) => <tr key={es}><th scope="row" lang="es">{es}</th><td>{en}</td></tr>)}</tbody>
                  </table>
                </div>
              ))}
            </div>
          </Section>

          <Section title="Practice quiz" intro="Tap the word that completes each sentence. The answer and the reason appear at once.">
            <ChoiceQuiz items={page.vocabQuiz} lang="en" />
          </Section>

          <Section title={`Read: «${page.titleEs}»`} intro="A short original text that uses the words in context.">
            <div className={`${styles.panel} ${styles.prose}`} lang="es">
              {page.paragraphs.map((paragraph) => <p key={paragraph.slice(0, 32)}>{paragraph}</p>)}
            </div>
          </Section>

          <Section title="Comprehension questions" intro="Tap the option that completes each sentence according to the text.">
            <ChoiceQuiz items={page.comprehension} lang="en" />
          </Section>

          <Section title="Words from the text">
            <div className={`${styles.panel} ${styles.tableWrap}`}>
              <table>
                <caption>New words in «{page.titleEs}» with their meaning in English</caption>
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

          <Section title="What US searchers ask for">
            <div className={styles.panel}>
              <p>{page.figure.text}</p>
              <p><small>Source: {page.figure.source}.</small></p>
            </div>
          </Section>

          <Section title="If you grew up speaking Spanish at home">
            <div className={styles.prose}><p>{page.heritage}</p></div>
          </Section>

          <Section title="Keep going">
            <div className={styles.prose}>
              <ul>
                {next && next !== entry ? <li>Next topic: <Link className={styles.textLink} href={vocabularyPath(next.slug)}>{next.title}</Link>.</li> : null}
                <li>All topics: <Link className={styles.textLink} href={VOCABULARY_PATH}>Spanish vocabulary by topic</Link>.</li>
                <li>More reading at this level: <Link className={styles.textLink} href={readingLevel}>Spanish reading comprehension {page.level}</Link>.</li>
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
