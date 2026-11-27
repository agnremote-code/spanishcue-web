import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs, Faq, GrowthFooter, GrowthTopbar, JsonLd, Section } from "../../growth/components";
import { faqPageSchema, learningResourceSchema } from "../../growth/schema";
import ChoiceQuiz from "../../mini-apps/ChoiceQuiz";
import { canonicalUrl } from "../../seo";
import { AP_PATH, AP_SOURCES, apPartBySlug, apParts } from "../data";
import styles from "../../growth/growth.module.css";

type Props = { params: Promise<{ part: string }> };

export function generateStaticParams() {
  return apParts.map((part) => ({ part: part.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const part = apPartBySlug.get((await params).part);
  if (!part) return {};
  return {
    title: part.title,
    description: part.description,
    alternates: { canonical: canonicalUrl(part.path) },
    robots: { index: true, follow: true },
    openGraph: { title: part.title, description: part.description, url: canonicalUrl(part.path), type: "article" },
  };
}

export default async function ApPartPage({ params }: Props) {
  const part = apPartBySlug.get((await params).part);
  if (!part) notFound();
  const next = apParts[(apParts.indexOf(part) + 1) % apParts.length];
  return (
    <>
      <main className={styles.page} lang="en">
        <div className={styles.shell}>
          <JsonLd data={learningResourceSchema({ pathname: part.path, name: part.title, description: part.description, learningResourceType: "exam preparation exercise", interactivityType: "active", educationalLevel: "AP Spanish Language and Culture", inLanguage: "es", roles: ["student", "teacher"], teaches: [`AP Spanish ${part.name.toLowerCase()}`] })} />
          <JsonLd data={faqPageSchema(part.faq, "en")} />
          <GrowthTopbar />
          <Breadcrumbs items={[{ name: "SpanishCue", href: "/" }, { name: "AP Spanish Language", href: AP_PATH }, { name: part.name, href: part.path }]} />
          <section className={styles.hero}>
            <p className={styles.eyebrow}>AP Spanish Language and Culture · 2027 exam</p>
            <h1 className={styles.title}>{part.h1}</h1>
            <p className={styles.lead}>{part.answer}</p>
          </section>

          <Section title="What the official exam description says">
            <div className={`${styles.panel} ${styles.tableWrap}`}>
              <table>
                <caption>{part.name} on the 2027 AP Spanish Language and Culture exam</caption>
                <tbody>{part.facts.map((fact) => <tr key={fact.label}><th scope="row">{fact.label}</th><td>{fact.value}</td></tr>)}</tbody>
              </table>
            </div>
          </Section>

          <Section title="How to approach it">
            <div className={styles.prose}><ol>{part.steps.map((step) => <li key={step}>{step}</li>)}</ol></div>
          </Section>

          {part.text ? (
            <Section title={`Text: «${part.text.title}»`}>
              <div className={`${styles.panel} ${styles.prose}`} lang="es">{part.text.paragraphs.map((p) => <p key={p.slice(0, 24)}>{p}</p>)}</div>
            </Section>
          ) : null}

          <Section id="practice" title={part.quizTitle} intro={part.quizIntro}>
            <ChoiceQuiz items={part.quiz} lang="en" />
          </Section>

          <Section title="Mistakes that cost points">
            <div className={styles.prose}><ul>{part.mistakes.map((m) => <li key={m}>{m}</li>)}</ul></div>
          </Section>

          <Section title="What SpanishCue data shows">
            <div className={styles.panel}>
              <p>{part.figure}</p>
              <p><small>Source: our capture of Google search results in English (United States), 26 November 2026.</small></p>
            </div>
          </Section>

          <Section title="If you grew up speaking Spanish at home">
            <div className={styles.prose}><p>{part.heritage}</p></div>
          </Section>

          <Section title="Questions">
            <Faq items={part.faq} />
          </Section>

          <Section title="Keep going">
            <div className={styles.prose}>
              <ul>
                <li>Next part of the exam: <Link className={styles.textLink} href={next.path}>{next.h1}</Link>.</li>
                <li>The whole exam: <Link className={styles.textLink} href={AP_PATH}>AP Spanish Language and Culture 2027 format</Link>.</li>
                {part.links.map((link) => <li key={link.href}><Link className={styles.textLink} href={link.href}>{link.label}</Link>.</li>)}
              </ul>
              <p><small>Exam facts from College Board: {AP_SOURCES.map((s, i) => <span key={s.href}>{i ? " · " : ""}<a className={styles.textLink} href={s.href} rel="noopener">{s.label}</a></span>)}. AP is a registered trademark of College Board, which is not affiliated with SpanishCue and does not endorse this page.</small></p>
            </div>
          </Section>
        </div>
      </main>
      <GrowthFooter />
    </>
  );
}
