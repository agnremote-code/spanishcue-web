import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs, Faq, GrowthFooter, JsonLd, Section } from "../../growth/components";
import { faqPageSchema, webPageSchema } from "../../growth/schema";
import { EleActivities, EleBuyBand, EleExerciseBlock, EleFeaturedLesson, EleLessonGrid, EleLevelNav, EleQuestions, EleTopbar, EleTopicCards, PRICE_LABEL, PRICING_PATH, eleLessonCards, eleMetadata, featuredGrammarLesson } from "../components";
import { MATERIAL_ELE_PATH, elePageBySlug, elePages } from "../data";
import styles from "../../growth/growth.module.css";
import PrintButton from "../PrintButton";
import print from "../print.module.css";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return elePages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const page = elePageBySlug.get(slug);
  return page ? eleMetadata(page.path, page.title, page.description) : {};
}

export default async function ElePage({ params }: Props) {
  const { slug } = await params;
  const page = elePageBySlug.get(slug);
  if (!page) notFound();
  const lessons = eleLessonCards(page.lessonIds);
  const freeLesson = lessons.find((lesson) => lesson.free);
  const featured = featuredGrammarLesson(page.lessonIds);
  return (
    <>
      <main className={styles.page} lang="es">
        <div className={styles.shell}>
          <JsonLd data={webPageSchema({ pathname: page.path, name: page.title, description: page.description, about: page.keyPoints.items, inLanguage: "es", ...(page.code ? { educationalLevel: page.code } : {}) })} />
          <JsonLd data={faqPageSchema(page.faq, "es")} />
          <EleTopbar current={page.slug === "preguntas-de-conversacion" || page.slug === "juegos-para-clase-de-espanol" ? page.path : MATERIAL_ELE_PATH} />
          <Breadcrumbs items={[{ name: "SpanishCue", href: "/" }, { name: "Material ELE", href: MATERIAL_ELE_PATH }, { name: page.label, href: page.path }]} />
          <p className={print.printOnly}>
            <strong>Ficha de SpanishCue · {page.label}</strong><br />
            Más actividades y clases interactivas: spanishcue.com{page.path}
          </p>
          <section className={styles.hero}>
            <p className={styles.eyebrow}>{page.kicker}</p>
            <h1 className={styles.title}>{page.h1}</h1>
            <p className={styles.lead}>{page.intro}</p>
            <div className={`${styles.heroActions} ${print.noPrint}`}>
              <Link className={styles.primaryButton} href="#actividades">Ver las actividades</Link>
              <PrintButton />
              {freeLesson ? <Link className={styles.secondaryButton} href={freeLesson.href}>Clase gratis: {freeLesson.title}</Link> : <Link className={styles.secondaryButton} href="/demo/noche-abierta">Probar una clase gratis</Link>}
            </div>
          </section>
          {page.kind === "level" ? <EleLevelNav current={page.slug} /> : null}
          {featured ? <EleFeaturedLesson lesson={featured} /> : null}

          <Section title={page.keyPoints.title}>
            <div className={styles.panel}><ul>{page.keyPoints.items.map((item) => <li key={item}>{item}</li>)}</ul></div>
          </Section>

          {page.questions ? (
            <Section id="preguntas" title="60 preguntas de conversación por nivel" intro="Elige el nivel de tu alumno. Las preguntas suben de dificultad dentro de cada lista.">
              <EleQuestions sets={page.questions} />
            </Section>
          ) : null}

          <Section id="actividades" title={`${page.activities.length} actividades listas para usar`} intro="Cada actividad tiene pasos, frases para el alumno, una respuesta modelo y una forma de corregir. La respuesta modelo es solo una posibilidad: lo que el alumno quiere decir guía la corrección.">
            <EleActivities activities={page.activities} />
          </Section>

          {page.exercise ? (
            <Section id="ejercicio" title={page.exercise.title}>
              <EleExerciseBlock exercise={page.exercise} />
            </Section>
          ) : null}

          <Section title="Errores frecuentes al enseñarlo">
            <div className={styles.panel}><ul>{page.errors.map((item) => <li key={item}>{item}</li>)}</ul></div>
          </Section>

          <div className={print.noPrint}>
          <Section id="clases" title="Clases interactivas para continuar" intro={`Las clases GRATIS se abren ya. Las PRO están incluidas en la suscripción de ${PRICE_LABEL}.`}>
            <EleLessonGrid lessons={lessons} />
            <p><Link className={styles.textLink} href={PRICING_PATH}>Desbloquear todas las clases →</Link></p>
          </Section>
          </div>

          <Section title="Preguntas frecuentes">
            <Faq items={page.faq} />
          </Section>

          <div className={print.noPrint}>
            <Section title="Sigue con">
              <EleTopicCards slugs={page.related} />
            </Section>
            <EleBuyBand />
          </div>
          <p className={print.printOnly}>Ficha gratuita de SpanishCue. Clases interactivas de A1 a C2 para compartir en pantalla: spanishcue.com/material-ele</p>
        </div>
      </main>
      <GrowthFooter />
    </>
  );
}
