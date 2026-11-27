import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "../../../growth/components";
import { EleExerciseBlock, eleMetadata } from "../../../material-ele/components";
import { elePageBySlug } from "../../../material-ele/data";
import { EleNewsletterInline } from "../../../material-ele/PopularLinks";
import styles from "../../../growth/growth.module.css";
import { ConjugacionFrame, VerbSearch } from "../../components";
import cj from "../../conjugacion.module.css";
import { ParticipiosReales } from "../../../datos/enlaces";
import { IRREGULARES_PATH, irregularRows, tiempoBySlug, tiempoExercise, tiempoPages, type IrregularRow } from "../../tiempos";
import { verbPath } from "../../verbos";
import { MODO_PATH, modoPath } from "../../../indicativo-o-subjuntivo/data";
import { PASADO_PATH, pasadoPath } from "../../../indefinido-o-imperfecto/data";

type Props = { params: Promise<{ tiempo: string }> };

const PASADO_LINKS = [["ayer", "Ayer"], ["de-repente", "De repente"], ["mientras", "Mientras"], ["siempre", "Siempre"], ["cuando", "Cuando"], ["de-nino", "De niño"]] as const;
const SUBJ_LINKS = [["quiero-que", "Quiero que"], ["ojala", "Ojalá"], ["para-que", "Para que"], ["no-creo-que", "No creo que"], ["cuando", "Cuando"], ["aunque", "Aunque"], ["como-si", "Como si"], ["si-tuviera", "Si tuviera"]] as const;

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
      {page.slug === "indefinido" || page.slug === "imperfecto" ? (
        <Section title="¿Indefinido o imperfecto?" intro="Una página por marcador temporal, con la regla y un ejercicio de elegir el tiempo.">
          <ul className={cj.verbList}>
            {PASADO_LINKS.map(([slug, label]) => <li key={slug}><Link href={pasadoPath(slug)}>{label}</Link></li>)}
            <li><Link href={PASADO_PATH}>Todos los marcadores</Link></li>
          </ul>
        </Section>
      ) : null}
      {page.slug.startsWith("subjuntivo-") ? (
        <Section title="¿Cuándo se usa el subjuntivo?" intro="Una página por expresión, con la regla y un ejercicio de elegir entre indicativo y subjuntivo.">
          <ul className={cj.verbList}>
            {SUBJ_LINKS.map(([slug, label]) => <li key={slug}><Link href={modoPath(slug)}>{label}</Link></li>)}
            <li><Link href={MODO_PATH}>Todas las expresiones</Link></li>
          </ul>
        </Section>
      ) : null}
      {page.slug === "participios" ? <ParticipiosReales /> : null}
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
