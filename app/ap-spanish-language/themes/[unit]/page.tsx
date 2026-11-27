import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs, GrowthFooter, GrowthTopbar, JsonLd, Section } from "../../../growth/components";
import { learningResourceSchema } from "../../../growth/schema";
import ChoiceQuiz from "../../../mini-apps/ChoiceQuiz";
import { canonicalUrl } from "../../../seo";
import { loadUsContent } from "../../../us-content/load";
import type { UsApPage } from "../../../us-content/types";
import { AP_PATH } from "../../data";
import { AP_CED_URL, AP_THEMES_PATH, apUnitPath, apUnits } from "../paths";
import styles from "../../../growth/growth.module.css";

type Props = { params: Promise<{ unit: string }> };

async function pageFor(params: Props["params"]) {
  const { unit } = await params;
  const entry = apUnits.find((item) => item.slug === unit);
  if (!entry) return null;
  const page = await loadUsContent<UsApPage>("ap", entry.slug);
  return page ? { entry, page } : null;
}

export function generateStaticParams() {
  return apUnits.map((entry) => ({ unit: entry.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const found = await pageFor(params);
  if (!found) return {};
  const url = canonicalUrl(apUnitPath(found.entry.slug));
  return {
    title: found.page.title,
    description: found.page.description,
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: { title: found.page.title, description: found.page.description, url, type: "article" },
  };
}

export default async function ApUnitPage({ params }: Props) {
  const found = await pageFor(params);
  if (!found) notFound();
  const { entry, page } = found;
  const path = apUnitPath(entry.slug);
  const number = page.theme.replace("unit-", "");
  const next = apUnits[(apUnits.indexOf(entry) + 1) % apUnits.length];
  return (
    <>
      <main className={styles.page} lang="en">
        <div className={styles.shell}>
          <JsonLd data={learningResourceSchema({ pathname: path, name: page.title, description: page.description, learningResourceType: "practice", interactivityType: "active", educationalLevel: page.level, inLanguage: "es", roles: ["student", "teacher"], teaches: [`AP Spanish Language and Culture, Unit ${number}: ${page.unitName}`] })} />
          <GrowthTopbar />
          <Breadcrumbs items={[{ name: "SpanishCue", href: "/" }, { name: "AP Spanish Language", href: AP_PATH }, { name: "Themes", href: AP_THEMES_PATH }, { name: page.unitName, href: path }]} />
          <section className={styles.hero}>
            <p className={styles.eyebrow}>AP Spanish · Unit {number}: {page.unitName} · {page.level}</p>
            <h1 className={styles.title}>{page.h1}</h1>
            <p className={styles.lead}>{page.intro} No account needed.</p>
          </section>

          <Section title={page.overview.heading}>
            <div className={styles.prose}>
              {page.overview.paragraphs.map((paragraph) => <p key={paragraph.slice(0, 32)}>{paragraph}</p>)}
              {page.contexts.length ? (
                <>
                  <p>Recommended contexts for this unit printed in the course description include:</p>
                  <ul>{page.contexts.map((context) => <li key={context}>{context}</li>)}</ul>
                </>
              ) : null}
              <p><small>Source: <a className={styles.textLink} href={AP_CED_URL} rel="noopener">AP Spanish Language and Culture Course and Exam Description, effective fall 2026</a>. The course description says these contexts are recommended, not required.</small></p>
            </div>
          </Section>

          <Section title="Vocabulary for this unit" intro="Words you need to discuss the topic and to argue about it in the essay.">
            {page.vocabulary.map((group) => (
              <div key={group.title} className={`${styles.panel} ${styles.tableWrap} ${styles.wordTable}`}>
                <h3>{group.title}</h3>
                <table>
                  <caption>{group.title}</caption>
                  <thead><tr><th scope="col">Spanish</th><th scope="col">English</th></tr></thead>
                  <tbody>{group.words.map(([es, en]) => <tr key={es}><td lang="es"><b>{es}</b></td><td>{en}</td></tr>)}</tbody>
                </table>
              </div>
            ))}
            <ChoiceQuiz items={page.vocabQuiz} lang="en" />
          </Section>

          <Section title={`Read: «${page.reading.titleEs}»`} intro={page.reading.intro}>
            <div className={`${styles.panel} ${styles.prose}`} lang="es">
              {page.reading.paragraphs.map((paragraph) => <p key={paragraph.slice(0, 32)}>{paragraph}</p>)}
            </div>
            <ChoiceQuiz items={page.reading.comprehension} lang="en" />
          </Section>

          <Section title="Argumentative essay practice" intro="On the exam the essay uses print and audio sources with different points of view. Practice taking a side with this prompt.">
            <div className={styles.panel}>
              <p lang="es"><b>{page.essay.prompt}</b></p>
              <ul>
                <li><span lang="es">{page.essay.sideA}</span></li>
                <li><span lang="es">{page.essay.sideB}</span></li>
              </ul>
              <ol>{page.essay.outline.map((step) => <li key={step}>{step}</li>)}</ol>
            </div>
            <div className={`${styles.panel} ${styles.tableWrap} ${styles.wordTable}`}>
              <h3>Phrases for this topic</h3>
              <table>
                <caption>Useful phrases for an essay on {page.unitName.toLowerCase()}</caption>
                <tbody>{page.essay.phrases.map(([es, en]) => <tr key={es}><td lang="es"><b>{es}</b></td><td>{en}</td></tr>)}</tbody>
              </table>
            </div>
          </Section>

          <Section title="Answer out loud" intro="In the Project Q&A you hear four questions and have about 40 seconds for each answer. Time yourself with these.">
            <div className={styles.panel}>
              <ol lang="es">{page.speaking.map((question) => <li key={question}>{question}</li>)}</ol>
            </div>
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
                {next && next !== entry ? <li>Next unit: <Link className={styles.textLink} href={apUnitPath(next.slug)}>{next.title}</Link>.</li> : null}
                <li>All six units: <Link className={styles.textLink} href={AP_THEMES_PATH}>AP Spanish themes</Link>.</li>
                <li>Essay structure and connectors: <Link className={styles.textLink} href={`${AP_PATH}/argumentative-essay`}>AP Spanish argumentative essay practice</Link>.</li>
                <li>The whole exam: <Link className={styles.textLink} href={AP_PATH}>AP Spanish Language 2027 exam guide</Link>.</li>
              </ul>
              <p>{page.teacher}</p>
            </div>
          </Section>

          <p className={styles.footnote}>AP is a registered trademark of College Board, which is not affiliated with SpanishCue and does not endorse this page.</p>
        </div>
      </main>
      <GrowthFooter />
    </>
  );
}
