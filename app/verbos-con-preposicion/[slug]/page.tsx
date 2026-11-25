import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "../../growth/components";
import { eleMetadata } from "../../material-ele/components";
import { EleNewsletterInline } from "../../material-ele/PopularLinks";
import styles from "../../growth/growth.module.css";
import cj from "../../conjugacion/conjugacion.module.css";
import q from "../../mini-apps/quiz.module.css";
import ChoiceQuiz from "../../mini-apps/ChoiceQuiz";
import { MiniAppFrame } from "../../mini-apps/Frame";
import { PREP_GUIDES, VerbCards } from "../components";
import { PREP_PATH, prepGroup, prepGroups, prepPageBySlug } from "../data";
import { verbosPrep, verboPrepSlug, type Prep } from "../verbos";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return [...verbosPrep.map((e) => ({ slug: verboPrepSlug(e) })), ...prepGroups.map((g) => ({ slug: g.slug }))];
}

const groupBySlug = (slug: string) => prepGroups.find((g) => g.slug === slug);

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const page = prepPageBySlug(slug) ?? groupBySlug(slug);
  return page ? eleMetadata(page.path, page.title, page.description) : {};
}

const ROOT_CRUMB = { name: "Verbos con preposición", href: PREP_PATH };

export default async function PrepSlugPage({ params }: Props) {
  const { slug } = await params;
  const group = groupBySlug(slug);
  if (group) return <GroupPage p={group.p} />;
  const page = prepPageBySlug(slug);
  if (!page) notFound();
  return (
    <MiniAppFrame
      path={page.path} title={page.title} description={page.description} h1={page.h1} kicker={`Verbos con preposición · ${page.level}`}
      crumbs={[ROOT_CRUMB, { name: `${page.v} ${page.p}`, href: page.path }]} faq={page.faq} level={page.level}
      about={[`${page.v} ${page.p}`, "verbos con preposición", "régimen preposicional", "ELE"]}
    >
      <Section id="uso" title={`Uso de «${page.v} ${page.p}»`}>
        <p className={q.lead}><strong>{page.v} {page.p}</strong>: {page.meaning}.</p>
        <p className={q.note}><strong>Ojo:</strong> {page.note}</p>
        <ul className={q.examples}>
          {page.ex.map((s) => { const [a, b] = s.split("___"); return <li key={s}>{a}<strong>{page.p}</strong>{b}</li>; })}
        </ul>
      </Section>
      <Section id="ejercicio" title="Ejercicio: elige la preposición" intro="Las primeras frases son con este verbo; las últimas mezclan otros verbos. Al pulsar ves si es correcta y por qué.">
        <ChoiceQuiz items={page.quiz} label="Elige la preposición" />
      </Section>
      <EleNewsletterInline source={page.path} />
      <Section title={`Más verbos con «${page.p}»`}>
        <VerbCards verbs={page.related} />
        <p className={styles.footnote}><Link className={styles.textLink} href={prepGroup(page.p).path}>Todos los verbos con «{page.p}»</Link> · <Link className={styles.textLink} href={PREP_PATH}>Los {verbosPrep.length} verbos con preposición</Link></p>
      </Section>
      <Section title="Para preparar la clase">
        <ul className={cj.verbList}>
          {page.conj ? <li><Link href={page.conj.href}>Conjugación de {page.conj.verb}</Link></li> : null}
          {PREP_GUIDES.map((g) => <li key={g.href}><Link href={g.href}>{g.label}</Link></li>)}
        </ul>
      </Section>
    </MiniAppFrame>
  );
}

function GroupPage({ p }: { p: Prep }) {
  const group = prepGroup(p);
  return (
    <MiniAppFrame
      path={group.path} title={group.title} description={group.description} h1={group.h1} kicker="Verbos con preposición · A1–B2"
      crumbs={[ROOT_CRUMB, { name: `Con «${p}»`, href: group.path }]} faq={group.faq}
      about={[`verbos con preposición ${p}`, "régimen preposicional", "ELE"]}
    >
      <Section title={`Los ${group.verbs.length} verbos`} intro="Cada tarjeta abre el verbo con su significado, ejemplos y un ejercicio.">
        <VerbCards verbs={group.verbs} />
      </Section>
      <Section id="ejercicio" title={`Ejercicio: ¿«${p}» u otra preposición?`} intro="La mitad de las frases llevan esta preposición y la otra mitad, otra. Al pulsar ves si es correcta.">
        <ChoiceQuiz items={group.quiz} label="Elige la preposición" />
      </Section>
      <EleNewsletterInline source={group.path} />
      <Section title="Otras preposiciones">
        <ul className={cj.verbList}>
          {prepGroups.filter((g) => g.p !== p).map((g) => <li key={g.p}><Link href={g.path}>Verbos con «{g.p}»</Link></li>)}
          <li><Link href={PREP_PATH}>Todos los verbos con preposición</Link></li>
        </ul>
      </Section>
    </MiniAppFrame>
  );
}
