import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "../../../growth/components";
import { EleQuestions, eleMetadata } from "../../components";
import { preguntasBySlug, preguntasPages } from "../../actividades";
import { BancoFrame } from "../../banco-components";
import styles from "../../../growth/growth.module.css";

type Props = { params: Promise<{ nivel: string }> };
export function generateStaticParams() { return preguntasPages.map((page) => ({ nivel: page.slug })); }
export async function generateMetadata({ params }: Props) {
  const page = preguntasBySlug.get((await params).nivel);
  return page ? eleMetadata(page.path, page.title, page.description) : {};
}

export default async function PreguntasPage({ params }: Props) {
  const page = preguntasBySlug.get((await params).nivel);
  if (!page) notFound();
  return (
    <BancoFrame path={page.path} title={page.title} description={page.description} h1={page.h1} level={page.level} kicker="Preguntas de conversación" parent={page.parent} faq={page.faq} about={["preguntas de conversación", `español ${page.level}`, "clase de ELE"]}>
      <Section id="preguntas" title={`Las ${page.set.items.length} preguntas`} intro="Suben de dificultad dentro de la lista. Elige tres o cuatro por clase.">
        <EleQuestions sets={[page.set]} />
      </Section>
      <Section title="Otros niveles">
        <div className={styles.cardGrid}>
          {preguntasPages.filter((other) => other.slug !== page.slug).map((other) => <Link className={styles.levelCard} key={other.path} href={other.path}><em>{other.set.items.length} preguntas</em><b>Conversación {other.level}</b></Link>)}
        </div>
      </Section>
    </BancoFrame>
  );
}
