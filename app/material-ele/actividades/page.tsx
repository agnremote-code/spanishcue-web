import Link from "next/link";
import { Breadcrumbs, Faq, GrowthFooter, JsonLd, Section } from "../../growth/components";
import { collectionPageSchema, faqPageSchema } from "../../growth/schema";
import { EleBuyBand, EleTopbar, eleMetadata } from "../components";
import { ACTIVIDADES_PATH, actividadPages, bancoDescription, bancoTitle, ejercicioPages, preguntasPages } from "../actividades";
import { MATERIAL_ELE_PATH, elePages } from "../data";
import styles from "../../growth/growth.module.css";

export const metadata = eleMetadata(ACTIVIDADES_PATH, bancoTitle, bancoDescription);

const faq = [
  { question: "¿Las actividades son gratis?", answer: "Sí. Cada ficha se abre, se imprime o se guarda en PDF sin registro. Las clases interactivas que acompañan cada tema tienen una versión gratis por nivel y el resto es PRO." },
  { question: "¿Cómo están organizadas?", answer: "Por guía: cada tema de Material ELE (ser y estar, indefinido e imperfecto, subjuntivo, por y para…) trae varias actividades, un ejercicio con soluciones y, en conversación, una lista de preguntas por nivel. Aquí está todo junto para encontrarlo por nombre." },
  { question: "¿Sirven para clases online?", answer: "Están escritas para clases particulares online y grupos pequeños de adultos: cada actividad dice cómo hacerla en pantalla compartida o en pizarra colaborativa." },
];

export default function BancoPage() {
  const all = [...actividadPages, ...ejercicioPages, ...preguntasPages];
  return (
    <>
      <main className={styles.page} lang="es">
        <div className={styles.shell}>
          <JsonLd data={collectionPageSchema({ pathname: ACTIVIDADES_PATH, name: bancoTitle, description: bancoDescription, inLanguage: "es", about: ["actividades ELE", "ejercicios ELE con soluciones", "preguntas de conversación"], items: all.map((page) => ({ name: page.h1, href: page.path })) })} />
          <JsonLd data={faqPageSchema(faq, "es")} />
          <EleTopbar current={MATERIAL_ELE_PATH} />
          <Breadcrumbs items={[{ name: "SpanishCue", href: "/" }, { name: "Material ELE", href: MATERIAL_ELE_PATH }, { name: "Banco de actividades", href: ACTIVIDADES_PATH }]} />
          <section className={styles.hero}>
            <p className={styles.eyebrow}>Material ELE · Banco de actividades</p>
            <h1 className={styles.title}>Banco de actividades ELE: {actividadPages.length} fichas, {ejercicioPages.length} ejercicios y preguntas de conversación por nivel</h1>
            <p className={styles.lead}>Cada actividad tiene su propia página con pasos, frases modelo, corrección y versión online, lista para imprimir o compartir en pantalla. Todo gratis, sin registro.</p>
            <div className={styles.heroActions}>
              <Link className={styles.primaryButton} href="#actividades">Ver las actividades</Link>
              <Link className={styles.secondaryButton} href="#preguntas">Preguntas de conversación</Link>
            </div>
          </section>
          <Section id="preguntas" title="Preguntas de conversación por nivel">
            <div className={styles.cardGrid}>
              {preguntasPages.map((page) => <Link className={styles.levelCard} key={page.path} href={page.path}><em>{page.set.items.length} preguntas</em><b>Conversación {page.level}</b></Link>)}
            </div>
          </Section>
          <Section id="ejercicios" title="Ejercicios con soluciones">
            <div className={styles.cardGrid}>
              {ejercicioPages.map((page) => <Link className={styles.levelCard} key={page.path} href={page.path}><em>{page.level} · {page.exercise.items.length} frases</em><b>{page.exercise.title}</b></Link>)}
            </div>
          </Section>
          <div id="actividades" />
          {elePages.filter((guide) => guide.activities.length).map((guide) => (
            <Section key={guide.slug} title={`Actividades de ${guide.label.replace(/^Material ELE /, "").toLowerCase()}`} intro={guide.intro}>
              <div className={styles.cardGrid}>
                {actividadPages.filter((page) => page.parent.slug === guide.slug).map((page) => <Link className={styles.levelCard} key={page.path} href={page.path}><em>{page.level} · {page.activity.minutes} min</em><b>{page.activity.name}</b><span>{page.activity.goal}</span></Link>)}
              </div>
            </Section>
          ))}
          <Section title="Preguntas frecuentes"><Faq items={faq} /></Section>
          <EleBuyBand />
        </div>
      </main>
      <GrowthFooter />
    </>
  );
}
