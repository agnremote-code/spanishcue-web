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
import { AdjCards, SER_GUIDES, UsoCards } from "../components";
import { adjetivos, usos } from "../contenido";
import { SER_PATH, serPageBySlug, serSlugs } from "../data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return serSlugs().map((slug) => ({ slug })); }

export async function generateMetadata({ params }: Props) {
  const page = serPageBySlug((await params).slug);
  return page ? eleMetadata(page.path, page.title, page.description) : {};
}

export default async function SerSlugPage({ params }: Props) {
  const page = serPageBySlug((await params).slug);
  if (!page) notFound();
  const name = page.kind === "uso" ? page.name : `Ser o estar ${page.adj}`;
  return (
    <MiniAppFrame
      path={page.path} title={page.title} description={page.description} h1={page.h1} kicker={page.kicker}
      crumbs={[{ name: "Ser o estar", href: SER_PATH }, { name, href: page.path }]} faq={page.faq} level={page.level}
      about={page.kind === "uso" ? [`${page.name.toLowerCase()} ser o estar`, "ser o estar", "ELE"] : [`ser ${page.adj} o estar ${page.adj}`, "adjetivos con ser y estar", "ser o estar", "ELE"]}
    >
      {page.kind === "uso" ? (
        <Section id="regla" title="La regla">
          <p className={q.lead}>{page.rule}</p>
          <ul className={q.examples}>{page.examples.map((s) => <li key={s}>{s}</li>)}</ul>
          <p className={q.note}><strong>Ojo:</strong> {page.tip}</p>
        </Section>
      ) : (
        <Section id="diferencia" title="La diferencia">
          <p className={q.lead}><strong>Ser {page.adj}</strong>: {page.ser}. <strong>Estar {page.adj}</strong>: {page.estar}.</p>
          <p className={q.note}><strong>Ojo:</strong> {page.note}</p>
        </Section>
      )}
      <Section id="ejercicio" title="Ejercicio: ¿ser o estar?" intro="Elige la forma que va en el hueco. Al pulsar ves si es correcta y por qué.">
        <ChoiceQuiz items={page.quiz} label="Elige ser o estar" />
      </Section>
      <EleNewsletterInline source={page.path} />
      {page.kind === "uso" ? (
        <Section title={`Otros usos de ${page.verb}`}>
          <UsoCards items={page.related} />
          <p className={styles.footnote}><Link className={styles.textLink} href={SER_PATH}>Los {usos.length} usos y {adjetivos.length} adjetivos de ser o estar</Link></p>
        </Section>
      ) : (
        <Section title="Otros adjetivos que cambian de significado">
          <AdjCards items={page.related} />
          <p className={styles.footnote}><Link className={styles.textLink} href={SER_PATH}>Los {usos.length} usos y {adjetivos.length} adjetivos de ser o estar</Link></p>
        </Section>
      )}
      <Section title="Para preparar la clase">
        <ul className={cj.verbList}>{SER_GUIDES.map((g) => <li key={g.href}><Link href={g.href}>{g.label}</Link></li>)}</ul>
      </Section>
    </MiniAppFrame>
  );
}
