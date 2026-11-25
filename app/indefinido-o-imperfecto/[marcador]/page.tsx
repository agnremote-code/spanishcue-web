import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "../../growth/components";
import { eleMetadata } from "../../material-ele/components";
import { EleNewsletterInline } from "../../material-ele/PopularLinks";
import styles from "../../growth/growth.module.css";
import cj from "../../conjugacion/conjugacion.module.css";
import q from "../../mini-apps/quiz.module.css";
import MoodChooser from "../../indicativo-o-subjuntivo/MoodChooser";
import { MiniAppFrame } from "../../mini-apps/Frame";
import { MarcadorCards, PASADO_GUIDES } from "../components";
import { PASADO_PATH, pasadoPageBySlug } from "../data";
import { marcadores } from "../marcadores";

type Props = { params: Promise<{ marcador: string }> };

export function generateStaticParams() { return marcadores.map((m) => ({ marcador: m.slug })); }

export async function generateMetadata({ params }: Props) {
  const page = pasadoPageBySlug((await params).marcador);
  return page ? eleMetadata(page.path, page.title, page.description) : {};
}

export default async function MarcadorPage({ params }: Props) {
  const page = pasadoPageBySlug((await params).marcador);
  if (!page) notFound();
  const items = page.playable.map(({ before, after, options, answer, correctLabel, wrongLabel }) => ({ before, after, options, answer, correctLabel, wrongLabel }));
  return (
    <MiniAppFrame
      path={page.path} title={page.title} description={page.description} h1={page.h1} kicker={page.kicker}
      crumbs={[{ name: "Indefinido o imperfecto", href: PASADO_PATH }, { name: page.marker, href: page.path }]} faq={page.faq} level={page.level}
      about={[`${page.marker.toLowerCase()} indefinido o imperfecto`, "pretérito indefinido", "pretérito imperfecto", "ELE"]}
    >
      <Section id="regla" title="La regla">
        <p className={q.lead}>{page.rule}</p>
        <p className={q.note}><strong>Ojo:</strong> {page.tip}</p>
      </Section>
      <Section id="ejercicio" title={`Ejercicio: ${page.marker.toLowerCase()}`} intro="Elige la forma que va en el hueco. Al pulsar ves si es correcta y en qué tiempo está.">
        <MoodChooser items={items} />
      </Section>
      <EleNewsletterInline source={page.path} />
      <Section title="Otros marcadores">
        <MarcadorCards items={page.related} />
        <p className={styles.footnote}><Link className={styles.textLink} href={PASADO_PATH}>Los {marcadores.length} marcadores: ¿indefinido o imperfecto?</Link></p>
      </Section>
      {page.verbs.length ? (
        <Section title="Verbos de este ejercicio" intro="Cada verbo tiene su conjugación completa, con las formas irregulares marcadas.">
          <ul className={cj.verbList}>{page.verbs.map((v) => <li key={v.verb}><Link href={v.href}>{v.verb}</Link></li>)}</ul>
        </Section>
      ) : null}
      <Section title="Para preparar la clase">
        <ul className={cj.verbList}>{PASADO_GUIDES.map((g) => <li key={g.href}><Link href={g.href}>{g.label}</Link></li>)}</ul>
      </Section>
    </MiniAppFrame>
  );
}
