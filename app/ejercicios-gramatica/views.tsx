import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "../growth/components";
import { eleMetadata } from "../material-ele/components";
import { EleNewsletterInline } from "../material-ele/PopularLinks";
import styles from "../growth/growth.module.css";
import cj from "../conjugacion/conjugacion.module.css";
import q from "../mini-apps/quiz.module.css";
import ChoiceQuiz from "../mini-apps/ChoiceQuiz";
import { MiniAppFrame } from "../mini-apps/Frame";
import { gapMixed, gapPageBySlug, gapPath } from "./data";
import { gapFamilies, type GapFamily, type GapPage } from "./families";

function GapCards({ family, pages }: { family: GapFamily; pages: GapPage[] }) {
  return (
    <ul className={q.cards}>
      {pages.map((p) => <li key={p.slug}><Link href={gapPath(family, p.slug)}><strong>{p.name}</strong><span>{p.level} · {p.items.length} frases</span></Link></li>)}
    </ul>
  );
}

function hubDescription(f: GapFamily) {
  const total = f.pages.reduce((n, p) => n + p.items.length, 0);
  return `${f.pages.length} ejercicios con ${total} frases sobre ${f.topic}, cada uno con su regla y corrección al instante. Para clase o para practicar solo.`;
}

export const hubMetadata = (f: GapFamily) => eleMetadata(f.path, f.title, hubDescription(f));

export function GapHub({ family: f }: { family: GapFamily }) {
  const description = hubDescription(f);
  const others = gapFamilies.filter((o) => o !== f);
  return (
    <MiniAppFrame path={f.path} title={f.title} description={description} h1={f.h1} kicker={f.kicker} crumbs={[{ name: f.label, href: f.path }]} faq={f.faq} about={f.about}>
      <Section title="Ejercicios por regla" intro={f.intro}>
        <GapCards family={f} pages={f.pages} />
      </Section>
      <Section id="mezcla" title="Prueba mezclada" intro="Doce frases de reglas distintas. Si dudas en alguna, abre su página y repasa la regla.">
        <ChoiceQuiz items={gapMixed(f)} />
      </Section>
      <EleNewsletterInline source={f.path} />
      <Section title="Para preparar la clase">
        <ul className={cj.verbList}>
          {f.guides.map((g) => <li key={g.href}><Link href={g.href}>{g.label}</Link></li>)}
          {others.map((o) => <li key={o.path}><Link href={o.path}>{o.h1}</Link></li>)}
        </ul>
      </Section>
    </MiniAppFrame>
  );
}

export async function gapPageMetadata(f: GapFamily, slug: string) {
  const page = gapPageBySlug(f, slug);
  return page ? eleMetadata(page.path, page.title, page.description) : {};
}

export function GapRulePage({ family: f, slug }: { family: GapFamily; slug: string }) {
  const page = gapPageBySlug(f, slug);
  if (!page) notFound();
  return (
    <MiniAppFrame
      path={page.path} title={page.title} description={page.description} h1={page.h1} kicker={page.kicker}
      crumbs={[{ name: f.label, href: f.path }, { name: page.name, href: page.path }]} faq={page.faq} level={page.level}
      about={[`${page.name.toLowerCase()} ejercicios`, ...f.about]}
    >
      <Section id="regla" title="La regla">
        <p className={q.lead}>{page.rule}</p>
        <ul className={q.examples}>{page.examples.map((s) => <li key={s}>{s}</li>)}</ul>
        <p className={q.note}><strong>Ojo:</strong> {page.tip}</p>
      </Section>
      <Section id="ejercicio" title="Ejercicio" intro="Elige la opción que va en el hueco. Al pulsar ves si es correcta y por qué.">
        <ChoiceQuiz items={page.quiz} />
      </Section>
      <EleNewsletterInline source={page.path} />
      <Section title={`Más ${f.label.toLowerCase()}`}>
        <GapCards family={f} pages={page.related} />
        <p className={styles.footnote}><Link className={styles.textLink} href={f.path}>{f.h1}</Link></p>
      </Section>
      <Section title="Para preparar la clase">
        <ul className={cj.verbList}>{f.guides.map((g) => <li key={g.href}><Link href={g.href}>{g.label}</Link></li>)}</ul>
      </Section>
    </MiniAppFrame>
  );
}
