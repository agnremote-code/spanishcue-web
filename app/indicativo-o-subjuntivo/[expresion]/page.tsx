import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "../../growth/components";
import { eleMetadata } from "../../material-ele/components";
import { EleNewsletterInline } from "../../material-ele/PopularLinks";
import styles from "../../growth/growth.module.css";
import cj from "../../conjugacion/conjugacion.module.css";
import m from "../modo.module.css";
import MoodChooser from "../MoodChooser";
import { ExpresionCards, GUIDE_LINKS, ModoFrame } from "../components";
import { MODO_PATH, modoPageBySlug } from "../data";
import { expresiones } from "../expresiones";

type Props = { params: Promise<{ expresion: string }> };

export function generateStaticParams() { return expresiones.map((e) => ({ expresion: e.slug })); }

export async function generateMetadata({ params }: Props) {
  const page = modoPageBySlug((await params).expresion);
  if (!page) return {};
  return eleMetadata(page.path, page.title, page.description);
}

export default async function ExpresionPage({ params }: Props) {
  const page = modoPageBySlug((await params).expresion);
  if (!page) notFound();
  const items = page.playable.map(({ before, after, options, answer, correctLabel, wrongLabel }) => ({ before, after, options, answer, correctLabel, wrongLabel }));
  return (
    <ModoFrame
      path={page.path} title={page.title} description={page.description} h1={page.h1} kicker={page.kicker}
      crumbs={[{ name: page.expr, href: page.path }]} faq={page.faq} level={page.level}
      about={[`${page.expr.toLowerCase()} subjuntivo`, "indicativo o subjuntivo", "subjuntivo en español", "ELE"]}
    >
      <Section id="regla" title="La regla">
        <p className={m.rule}>{page.rule}</p>
        <p className={m.tip}><strong>Ojo:</strong> {page.tip}</p>
      </Section>
      <Section id="ejercicio" title={`Ejercicio: ${page.expr.toLowerCase()}`} intro="Elige la forma que va en el hueco. Al pulsar ves si es correcta y en qué tiempo está. Sirve para proyectar en clase o como repaso rápido.">
        <MoodChooser items={items} />
      </Section>
      <EleNewsletterInline source={page.path} />
      {page.related.length ? (
        <Section title="Practica otras expresiones">
          <ExpresionCards items={page.related} />
          <p className={styles.footnote}><Link className={styles.textLink} href={MODO_PATH}>Las {expresiones.length} expresiones: ¿indicativo o subjuntivo?</Link></p>
        </Section>
      ) : null}
      {page.verbs.length ? (
        <Section title="Verbos de este ejercicio" intro="Cada verbo tiene su conjugación completa, con las formas irregulares marcadas.">
          <ul className={cj.verbList}>{page.verbs.map((v) => <li key={v.verb}><Link href={v.href}>{v.verb}</Link></li>)}</ul>
        </Section>
      ) : null}
      <Section title="Para preparar la clase">
        <ul className={cj.verbList}>{GUIDE_LINKS.map((g) => <li key={g.href}><Link href={g.href}>{g.label}</Link></li>)}</ul>
      </Section>
    </ModoFrame>
  );
}
