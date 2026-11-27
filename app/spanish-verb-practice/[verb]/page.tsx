import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs, GrowthFooter, GrowthTopbar, JsonLd, Section } from "../../growth/components";
import { learningResourceSchema } from "../../growth/schema";
import ChoiceQuiz from "../../mini-apps/ChoiceQuiz";
import { canonicalUrl } from "../../seo";
import { loadUsContent } from "../../us-content/load";
import type { UsVerbPage } from "../../us-content/types";
import { VERB_PRACTICE_PATH, practiceVerbs, verbPracticePath } from "../paths";
import styles from "../../growth/growth.module.css";

type Props = { params: Promise<{ verb: string }> };

async function pageFor(params: Props["params"]) {
  const { verb } = await params;
  const entry = practiceVerbs.find((item) => item.slug === verb);
  if (!entry) return null;
  const page = await loadUsContent<UsVerbPage>("verbs", entry.slug);
  return page ? { entry, page } : null;
}

export function generateStaticParams() {
  return practiceVerbs.map((entry) => ({ verb: entry.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const found = await pageFor(params);
  if (!found) return {};
  const url = canonicalUrl(verbPracticePath(found.entry.slug));
  return {
    title: found.page.title,
    description: found.page.description,
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: { title: found.page.title, description: found.page.description, url, type: "article" },
  };
}

export default async function VerbPracticePage({ params }: Props) {
  const found = await pageFor(params);
  if (!found) notFound();
  const { entry, page } = found;
  const path = verbPracticePath(entry.slug);
  const next = practiceVerbs[(practiceVerbs.indexOf(entry) + 1) % practiceVerbs.length];
  return (
    <>
      <main className={styles.page} lang="en">
        <div className={styles.shell}>
          <JsonLd data={learningResourceSchema({ pathname: path, name: page.title, description: page.description, learningResourceType: "verb practice", interactivityType: "active", educationalLevel: page.level, inLanguage: "es", roles: ["student", "teacher"], teaches: [`Spanish verb ${page.verb}`] })} />
          <GrowthTopbar />
          <Breadcrumbs items={[{ name: "SpanishCue", href: "/" }, { name: "Spanish verb practice", href: VERB_PRACTICE_PATH }, { name: page.verb, href: path }]} />
          <section className={styles.hero}>
            <p className={styles.eyebrow}>Spanish verb practice · {page.level} · <span lang="es">{page.verb}</span> = {page.meaning}</p>
            <h1 className={styles.title}>{page.h1}</h1>
            <p className={styles.lead}>{page.intro} No account needed.</p>
          </section>

          <Section title={`When to use ${page.verb}`}>
            <div className={`${styles.panel} ${styles.tableWrap} ${styles.wordTable}`}>
              <table>
                <caption>Uses of {page.verb} with an example</caption>
                <thead><tr><th scope="col">Use</th><th scope="col">Example</th></tr></thead>
                <tbody>{page.uses.map((use) => <tr key={use.use}><th scope="row">{use.use}</th><td><span lang="es">{use.example}</span><br /><small>{use.meaning}</small></td></tr>)}</tbody>
              </table>
            </div>
          </Section>

          <Section title="Forms: present and preterite">
            {[{ title: "Present", forms: page.present }, { title: "Preterite (simple past)", forms: page.preterite }].map((tense) => (
              <div key={tense.title} className={`${styles.panel} ${styles.tableWrap} ${styles.wordTable}`}>
                <h3>{tense.title}</h3>
                <table>
                  <caption>{page.verb}, {tense.title.toLowerCase()}</caption>
                  <tbody>{tense.forms.map(([person, form]) => <tr key={person}><th scope="row" lang="es">{person}</th><td lang="es"><b>{form}</b></td></tr>)}</tbody>
                </table>
              </div>
            ))}
          </Section>

          <Section title="Practice quiz" intro="Tap the form that completes each sentence. The answer and the reason appear at once.">
            <ChoiceQuiz items={page.quiz} lang="en" />
          </Section>

          <Section title={`Read: «${page.reading.titleEs}»`} intro={`A short original text full of ${page.verb}.`}>
            <div className={`${styles.panel} ${styles.prose}`} lang="es">
              {page.reading.paragraphs.map((paragraph) => <p key={paragraph.slice(0, 32)}>{paragraph}</p>)}
            </div>
            <ChoiceQuiz items={page.reading.comprehension} lang="en" />
          </Section>

          <Section title="Mistakes English speakers make">
            <div className={`${styles.panel} ${styles.tableWrap} ${styles.wordTable}`}>
              <table>
                <caption>Common mistakes with {page.verb}</caption>
                <thead><tr><th scope="col">Not this</th><th scope="col">But this</th></tr></thead>
                <tbody>{page.mistakes.map((mistake) => <tr key={mistake.wrong}><td lang="es"><s>{mistake.wrong}</s></td><td><span lang="es"><b>{mistake.right}</b></span><br /><small>{mistake.why}</small></td></tr>)}</tbody>
              </table>
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
                {next && next !== entry ? <li>Next verb: <Link className={styles.textLink} href={verbPracticePath(next.slug)}>{next.title}</Link>.</li> : null}
                <li>All verbs: <Link className={styles.textLink} href={VERB_PRACTICE_PATH}>Spanish verb practice</Link>.</li>
                <li>Grammar contrasts: <Link className={styles.textLink} href="/spanish-grammar-practice">Spanish grammar practice</Link>.</li>
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
