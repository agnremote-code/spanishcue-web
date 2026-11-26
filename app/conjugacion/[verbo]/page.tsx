import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "../../growth/components";
import { EleExerciseBlock, eleMetadata } from "../../material-ele/components";
import { elePageBySlug } from "../../material-ele/data";
import styles from "../../growth/growth.module.css";
import type { Forms, TenseKey } from "../engine";
import { ConjugacionFrame, VerbLinks, VerbSearch } from "../components";
import { EleNewsletterInline } from "../../material-ele/PopularLinks";
import EmbedSnippet from "../../material-ele/EmbedSnippet";
import { tiempoPages } from "../tiempos";
import cj from "../conjugacion.module.css";
import { SER_PATH, serPath } from "../../ser-o-estar/data";
import { CONJUGACION_PATH, PERSONS, TENSE_GROUPS, verbFromParam, verbPage, verbPath, verbSlug, verbos, type Highlight } from "../verbos";

const SER_LINKS = [["ubicacion", "Ubicación"], ["estado-de-animo", "Estado de ánimo"], ["origen-y-nacionalidad", "Origen y nacionalidad"], ["eventos", "Dónde es un evento"], ["listo", "Ser listo o estar listo"], ["aburrido", "Ser aburrido o estar aburrido"]] as const;

type Props = { params: Promise<{ verbo: string }> };

export function generateStaticParams() { return verbos.map((verb) => ({ verbo: verbSlug(verb) })); }

export async function generateMetadata({ params }: Props) {
  const verb = verbFromParam((await params).verbo);
  if (!verb) return {};
  const page = verbPage(verb);
  return eleMetadata(page.path, page.title, page.description);
}

function TenseTable({ title, guide, forms, marks, rows = [0, 1, 2, 3, 4, 5], labels = PERSONS }: {
  title: string; guide?: string; forms: Forms; marks: boolean[]; rows?: number[]; labels?: readonly string[];
}) {
  const guidePage = guide ? elePageBySlug.get(guide) : undefined;
  return (
    <div className={cj.tense}>
      <h3>{guidePage ? <Link href={guidePage.path} title={`Guía: ${guidePage.label}`}>{title}</Link> : title}</h3>
      <table>
        <tbody>
          {rows.map((i) => (
            <tr key={i}>
              <th scope="row">{labels[i]}</th>
              <td className={marks[i] ? cj.irr : undefined}>{forms[i]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const IMPERATIVE_LABELS = ["", "tú", "usted", "nosotros", "vosotros", "ustedes"];

export default async function VerbPage({ params }: Props) {
  const verb = verbFromParam((await params).verbo);
  if (!verb) notFound();
  const page = verbPage(verb);
  const t = page.conjugation.tenses;
  const h: Highlight = page.highlight;
  return (
    <ConjugacionFrame
      path={page.path} title={page.title} description={page.description} h1={page.h1}
      kicker={page.irregular ? "Verbo irregular · Conjugación" : "Verbo regular · Conjugación"}
      crumbs={[{ name: verb, href: page.path }]} faq={page.faq}
      about={[`conjugación de ${verb}`, `verbo ${verb}`, "conjugación de verbos en español", "ELE"]}
      hero={(
        <dl className={cj.summary}>
          <div><dt>Infinitivo</dt><dd>{verb}</dd></div>
          <div><dt>Gerundio</dt><dd>{page.conjugation.gerund}</dd></div>
          <div><dt>Participio</dt><dd>{page.conjugation.participle}</dd></div>
          <div><dt>Modelo</dt><dd style={{ fontSize: 15 }}>{page.model.label}</dd></div>
        </dl>
      )}
    >
      <Section id="claves" title={`Claves para enseñar ${verb}`}>
        <ul className={cj.notes}>{page.notes.map((note) => <li key={note}>{note}</li>)}</ul>
      </Section>
      {TENSE_GROUPS.map((group) => (
        <Section key={group.mood} title={`${group.mood} de ${verb}`} intro={group.intro}>
          {page.count ? <p className={cj.legend}>Las formas en <span className={cj.irr}>rojo</span> son irregulares.</p> : null}
          <div className={cj.tenseGrid}>
            {group.tenses.map((tense) => (
              <TenseTable key={tense.key} title={tense.label} guide={tense.guide} forms={t[tense.key as TenseKey]} marks={h[tense.key as TenseKey]} />
            ))}
          </div>
        </Section>
      ))}
      <Section title={`Imperativo de ${verb}`} intro="Afirmativo y negativo. El negativo usa siempre las formas del presente de subjuntivo.">
        <div className={cj.tenseGrid}>
          <TenseTable title="Imperativo afirmativo" guide="imperativo" forms={t.imperativo} marks={h.imperativo} rows={[1, 2, 3, 4, 5]} labels={IMPERATIVE_LABELS} />
          <TenseTable title="Imperativo negativo" forms={t.imperativoNegativo} marks={h.imperativoNegativo} rows={[1, 2, 3, 4, 5]} labels={IMPERATIVE_LABELS} />
        </div>
        <p className={styles.footnote}>Vosotros se usa en España; en América y en Canarias se usa ustedes para la segunda persona del plural.</p>
      </Section>
      <Section id="ejercicio" title={`Ejercicio: conjuga ${verb}`} intro="Doce formas en distintos tiempos, con las irregulares primero. Sirve como repaso rápido en clase o como tarea.">
        <EleExerciseBlock exercise={{ title: `Ejercicio con ${verb}`, instructions: `Escribe la forma correcta de ${verb} en el tiempo y la persona indicados.`, items: page.exercise }} />
      </Section>
      <EleNewsletterInline source={page.path} />
      {verb === "ser" || verb === "estar" ? (
        <Section title="¿Ser o estar?" intro="Cada uso y cada adjetivo que cambia de significado tiene su regla y un ejercicio.">
          <ul className={cj.verbList}>
            <li><Link href={SER_PATH}>Todos los usos de ser y estar</Link></li>
            {SER_LINKS.map(([slug, label]) => <li key={slug}><Link href={serPath(slug)}>{label}</Link></li>)}
          </ul>
        </Section>
      ) : null}
      {page.related.length ? (
        <Section title={`Verbos que se conjugan como ${verb}`} intro={`Mismo modelo: ${page.model.label}. Practicarlos juntos ayuda a fijar el patrón.`}>
          <VerbLinks verbs={page.related} href={verbPath} />
        </Section>
      ) : null}
      <Section title="Verbos irregulares por tiempo">
        <ul className={cj.verbList}>{tiempoPages.map((tiempo) => <li key={tiempo.slug}><Link href={tiempo.path}>{tiempo.label}</Link></li>)}</ul>
      </Section>
      {/* Distribution through use: every embed carries a plain credit link outside the iframe (docs/omega/LOG.md). */}
      <Section id="insertar" title={`Pon el conjugador de ${verb} en tu web`} intro="Gratis para tu blog, la web de tu academia, Moodle o Google Sites. Tus alumnos conjugan sin salir de tu página.">
        <EmbedSnippet verbs={[verb]} />
        <p className={styles.footnote}><Link className={styles.textLink} href="/material-ele/conjugador-para-tu-web">Cómo insertarlo paso a paso</Link></p>
      </Section>
      <Section title="Otro verbo">
        <VerbSearch />
        <p className={styles.footnote}><Link className={styles.textLink} href={CONJUGACION_PATH}>Todos los verbos conjugados</Link> · <Link className={styles.textLink} href="/material-ele">Material ELE para profesores</Link></p>
      </Section>
    </ConjugacionFrame>
  );
}
