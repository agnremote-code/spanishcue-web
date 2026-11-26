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
import { PORPARA_GUIDES, PorParaCards } from "../components";
import { PORPARA_PATH, porParaPageBySlug } from "../data";
import { usosPorPara } from "../usos";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return usosPorPara.map((u) => ({ slug: u.slug })); }

export async function generateMetadata({ params }: Props) {
  const page = porParaPageBySlug((await params).slug);
  return page ? eleMetadata(page.path, page.title, page.description) : {};
}

export default async function PorParaPage({ params }: Props) {
  const page = porParaPageBySlug((await params).slug);
  if (!page) notFound();
  return (
    <MiniAppFrame
      path={page.path} title={page.title} description={page.description} h1={page.h1} kicker={page.kicker}
      crumbs={[{ name: "Por o para", href: PORPARA_PATH }, { name: page.name, href: page.path }]} faq={page.faq} level={page.level}
      about={[`${page.name.toLowerCase()} por o para`, "por o para", "preposiciones", "ELE"]}
    >
      <Section id="regla" title="La regla">
        <p className={q.lead}>{page.rule}</p>
        <ul className={q.examples}>{page.examples.map((s) => <li key={s}>{s}</li>)}</ul>
        <p className={q.note}><strong>Ojo:</strong> {page.tip}</p>
      </Section>
      <Section id="ejercicio" title="Ejercicio: ¿por o para?" intro="Elige la preposición que va en el hueco. Al pulsar ves si es correcta y por qué.">
        <ChoiceQuiz items={page.quiz} label="Elige por o para" />
      </Section>
      <EleNewsletterInline source={page.path} />
      <Section title={`Otros usos de ${page.prep}`}>
        <PorParaCards items={page.related} />
        <p className={styles.footnote}><Link className={styles.textLink} href={PORPARA_PATH}>Los {usosPorPara.length} usos de por y para</Link></p>
      </Section>
      <Section title="Para preparar la clase">
        <ul className={cj.verbList}>{PORPARA_GUIDES.map((g) => <li key={g.href}><Link href={g.href}>{g.label}</Link></li>)}</ul>
      </Section>
    </MiniAppFrame>
  );
}
