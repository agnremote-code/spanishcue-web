import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "../../growth/components";
import styles from "../../growth/growth.module.css";
import ExerciseCheck from "../../material-ele/ExerciseCheck";
import type { Forms } from "../../conjugacion/engine";
import cj from "../../conjugacion/conjugacion.module.css";
import { PERSONS, verbFromParam, verbPath, verbSlug, verbos } from "../../conjugacion/verbos";
import { SPANISH_VERBS_PATH, TENSE_GROUPS_EN, verbPageEn, verbPathEn } from "../../conjugacion/verbos-en";
import { VerbLinksEn, VerbSearchEn, VerbsFrame, verbsMetadata } from "../frame";

type Props = { params: Promise<{ verb: string }> };

export function generateStaticParams() { return verbos.map((verb) => ({ verb: verbSlug(verb) })); }

export async function generateMetadata({ params }: Props) {
  const verb = verbFromParam((await params).verb);
  if (!verb) return {};
  const page = verbPageEn(verb);
  return verbsMetadata(page.path, page.title, page.description);
}

function Table({ title, forms, marks, rows = [0, 1, 2, 3, 4, 5], labels = PERSONS }: { title: string; forms: Forms; marks: boolean[]; rows?: number[]; labels?: readonly string[] }) {
  return (
    <div className={cj.tense}>
      <h3>{title}</h3>
      <table lang="es">
        <tbody>
          {rows.map((i) => (
            <tr key={i}><th scope="row">{labels[i]}</th><td className={marks[i] ? cj.irr : undefined}>{forms[i]}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const COMMAND_LABELS = ["", "tú", "usted", "nosotros", "vosotros", "ustedes"];

export default async function SpanishVerbPage({ params }: Props) {
  const verb = verbFromParam((await params).verb);
  if (!verb) notFound();
  const page = verbPageEn(verb);
  const t = page.conjugation.tenses;
  const h = page.highlight;
  return (
    <VerbsFrame
      path={page.path} title={page.title} description={page.description} h1={page.h1}
      kicker={page.irregular ? "Irregular Spanish verb" : "Regular Spanish verb"}
      crumbs={[{ name: verb, href: page.path }]} faq={page.faq}
      about={[`${verb} conjugation`, "Spanish verb conjugation", "Spanish grammar"]}
      hero={(
        <dl className={cj.summary}>
          <div><dt>Infinitive</dt><dd lang="es">{verb}</dd></div>
          <div><dt>Gerund</dt><dd lang="es">{page.conjugation.gerund}</dd></div>
          <div><dt>Past participle</dt><dd lang="es">{page.conjugation.participle}</dd></div>
          <div><dt>Pattern</dt><dd style={{ fontSize: 15 }}>{page.model}</dd></div>
        </dl>
      )}
    >
      <Section title={`Key points: how ${verb} works`}>
        <ul className={cj.notes}>{page.notes.map((note) => <li key={note}>{note}</li>)}</ul>
        <p className={styles.footnote}><Link className={styles.textLink} href={verbPath(verb)} hrefLang="es">Esta página en español: conjugación de {verb}</Link></p>
      </Section>
      {TENSE_GROUPS_EN.map((group) => (
        <Section key={group.mood} title={`${group.mood}: ${verb}`} intro={group.intro}>
          {page.count ? <p className={cj.legend}>Forms in <span className={cj.irr}>red</span> are irregular.</p> : null}
          <div className={cj.tenseGrid}>
            {group.tenses.map((tense) => <Table key={tense.key} title={tense.label} forms={t[tense.key]} marks={h[tense.key]} />)}
          </div>
        </Section>
      ))}
      <Section title={`Commands (imperative): ${verb}`} intro="Affirmative and negative. Negative commands always use present subjunctive forms.">
        <div className={cj.tenseGrid}>
          <Table title="Affirmative commands" forms={t.imperativo} marks={h.imperativo} rows={[1, 2, 3, 4, 5]} labels={COMMAND_LABELS} />
          <Table title="Negative commands" forms={t.imperativoNegativo} marks={h.imperativoNegativo} rows={[1, 2, 3, 4, 5]} labels={COMMAND_LABELS} />
        </div>
        <p className={styles.footnote}>Vosotros is used in Spain; Latin America uses ustedes for the plural «you».</p>
      </Section>
      <Section id="quiz" title={`Quiz: conjugate ${verb}`} intro="Twelve forms across the main tenses, irregular ones first. Type each answer and check them all at once.">
        <ExerciseCheck items={page.exercise} />
      </Section>
      {page.related.length ? (
        <Section title={`Verbs conjugated like ${verb}`} intro={`Same pattern: ${page.model}. Practising them together fixes the pattern.`}>
          <VerbLinksEn verbs={page.related} href={verbPathEn} />
        </Section>
      ) : null}
      <Section title="Another verb">
        <VerbSearchEn />
        <p className={styles.footnote}><Link className={styles.textLink} href={SPANISH_VERBS_PATH}>All Spanish verbs</Link> · <Link className={styles.textLink} href="/spanish-grammar-lessons">Spanish grammar lessons</Link></p>
      </Section>
    </VerbsFrame>
  );
}
