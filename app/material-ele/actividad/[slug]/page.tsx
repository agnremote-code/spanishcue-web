import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "../../../growth/components";
import { eleMetadata } from "../../components";
import { actividadBySlug, actividadPages } from "../../actividades";
import { BancoFrame } from "../../banco-components";
import styles from "../../../growth/growth.module.css";
import grammar from "../../../growth/grammar.module.css";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return actividadPages.map((page) => ({ slug: page.slug })); }
export async function generateMetadata({ params }: Props) {
  const page = actividadBySlug.get((await params).slug);
  return page ? eleMetadata(page.path, page.title, page.description) : {};
}

export default async function ActividadPage({ params }: Props) {
  const page = actividadBySlug.get((await params).slug);
  if (!page) notFound();
  const { activity } = page;
  return (
    <BancoFrame path={page.path} title={page.title} description={page.description} h1={page.h1} level={page.level} kicker="Actividad ELE" parent={page.parent} faq={page.faq} about={[activity.name, page.parent.label, "actividad ELE", page.level]}>
      <Section id="ficha" title={`La actividad paso a paso (${activity.minutes} minutos)`} intro={`Objetivo: ${activity.goal}`}>
        <article className={grammar.activity}>
          <div className={grammar.activityBody}>
            <ol>{activity.steps.map((step) => <li key={step}>{step}</li>)}</ol>
            <div>
              <h3>Frases modelo</h3>
              {activity.prompts.map((prompt) => <p className={grammar.prompt} key={prompt}>{prompt}</p>)}
              <p className={grammar.model}><strong>Respuesta modelo: </strong>{activity.model}</p>
              <p className={grammar.feedback}><strong>Corrección frecuente: </strong>{activity.correction}</p>
            </div>
          </div>
          <p className={grammar.teacherTip}><strong>Online o en grupo: </strong>{activity.online}</p>
        </article>
      </Section>
      {page.siblings.length ? (
        <Section title={`Más actividades de ${page.parent.label.replace(/^Material ELE /, "").toLowerCase()}`}>
          <div className={styles.cardGrid}>
            {page.siblings.map((sibling) => <Link className={styles.levelCard} key={sibling.path} href={sibling.path}><em>{sibling.minutes} minutos</em><b>{sibling.name}</b></Link>)}
          </div>
        </Section>
      ) : null}
    </BancoFrame>
  );
}
