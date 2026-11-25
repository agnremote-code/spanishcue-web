import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "../../../growth/components";
import { EleExerciseBlock, eleMetadata } from "../../../material-ele/components";
import { elePageBySlug } from "../../../material-ele/data";
import { EleNewsletterInline } from "../../../material-ele/PopularLinks";
import styles from "../../../growth/growth.module.css";
import { ConjugacionFrame, VerbSearch } from "../../components";
import cj from "../../conjugacion.module.css";
import { IRREGULARES_PATH, irregularRows, tiempoBySlug, tiempoExercise, tiempoPages, type IrregularRow } from "../../tiempos";
import { verbPath } from "../../verbos";

type Props = { params: Promise<{ tiempo: string }> };

export function generateStaticParams() { return tiempoPages.map((page) => ({ tiempo: page.slug })); }

export async function generateMetadata({ params }: Props) {
  const page = tiempoBySlug.get((await params).tiempo);
  return page ? eleMetadata(page.path, page.title, page.description) : {};
}

function Forms({ row }: { row: IrregularRow }) {
  const shown = row.forms.map((form, i) => ({ form, marked: row.marks[i] })).filter((item) => item.form);
  return (
    <>
      {shown.map((item, i) => (
        <span key={i}>{i ? ", " : ""}<span className={item.marked ? cj.irr : undefined}>{item.form}</span></span>
      ))}
    </>
  );
}

export default async function TiempoPage({ params }: Props) {
  const page = tiempoBySlug.get((await params).tiempo);
  if (!page) notFound();
  const rows = irregularRows(page);
  const groups = new Map<string, IrregularRow[]>();
  for (const row of rows) groups.set(row.group, [...(groups.get(row.group) ?? []), row]);
  const ordered = [...groups.entries()].sort((a, b) => b[1].length - a[1].length);
  const guide = page.guide ? elePageBySlug.get(page.guide) : undefined;
  const exercise = tiempoExercise(page, rows);
  return (
    <ConjugacionFrame
      path={page.path} title={page.title} description={page.description} h1={page.h1}
      kicker={`Verbos irregulares · ${rows.length} verbos`}
      crumbs={[{ name: "Irregulares", href: IRREGULARES_PATH }, { name: page.label, href: page.path }]}
      faq={page.faq} about={[page.h1, "verbos irregulares en español", page.label, "ELE"]}
    >
      <Section title={`Cómo funcionan los irregulares: ${page.label.toLowerCase()}`}>
        {page.intro.map((text) => <p key={text} className={styles.sectionIntro}>{text}</p>)}
        <ul className={cj.notes}>{page.patterns.map((pattern) => <li key={pattern.name}><strong>{pattern.name}.</strong> {pattern.text}</li>)}</ul>
        {guide ? <p className={styles.footnote}>Para enseñarlo en clase: <Link className={styles.textLink} href={guide.path}>guía de {guide.label.toLowerCase()}</Link>, con actividades y ejercicios.</p> : null}
      </Section>
      <Section title={`Lista de verbos irregulares (${rows.length})`} intro={"tense" in page ? "Agrupados por modelo. En rojo, las formas que se apartan del modelo regular; los cambios solo ortográficos (busqué, leyó) no cuentan como irregularidad." : "Agrupados por modelo de conjugación. Cada verbo enlaza a su conjugación completa."}>
        {ordered.map(([group, list]) => (
          <div key={group} className={cj.letterBlock}>
            <h3>{group} · {list.length}</h3>
            <div className={cj.tenseList}>
              {list.map((row) => (
                <p key={row.verb}><Link href={verbPath(row.verb)}>{row.verb}</Link>: <Forms row={row} /></p>
              ))}
            </div>
          </div>
        ))}
      </Section>
      <Section id="ejercicio" title={`Ejercicio: ${page.label.toLowerCase()} irregular`} intro={`${exercise.length} formas irregulares para practicar, de los verbos más frecuentes a los menos.`}>
        <EleExerciseBlock exercise={{ title: `Ejercicio: ${page.h1.toLowerCase()}`, instructions: "Escribe la forma correcta del verbo para la persona indicada.", items: exercise }} />
      </Section>
      <EleNewsletterInline source={page.path} />
      <Section title="Otros tiempos">
        <ul className={cj.verbList}>
          {tiempoPages.filter((other) => other.slug !== page.slug).map((other) => <li key={other.slug}><Link href={other.path}>{other.h1}</Link></li>)}
        </ul>
        <VerbSearch />
      </Section>
    </ConjugacionFrame>
  );
}
