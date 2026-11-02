import Link from "next/link";
import { Breadcrumbs, Faq, GrowthFooter, JsonLd, Section } from "../growth/components";
import { faqPageSchema, webPageSchema } from "../growth/schema";
import { EleBuyBand, EleFeaturedLesson, EleLessonGrid, EleTopbar, eleLessonCards, featuredGrammarLesson } from "./components";
import { ACTIVIDADES_PATH, MATERIAL_ELE_PATH } from "./actividades";
import type { ElePage } from "./data";
import PrintButton from "./PrintButton";
import ShareSnippet from "./ShareSnippet";
import styles from "../growth/growth.module.css";
import print from "./print.module.css";
import type { ReactNode } from "react";

/** Shared frame of every activity-bank page: metadata, breadcrumbs, print line, hero, parent guide and classes. */
export function BancoFrame({ path, title, description, h1, level, kicker, parent, faq, children, about }: {
  path: string; title: string; description: string; h1: string; level: string; kicker: string; parent: ElePage; faq: { question: string; answer: string }[]; children: ReactNode; about: string[];
}) {
  const lessons = eleLessonCards(parent.lessonIds);
  const featured = featuredGrammarLesson(parent.lessonIds);
  const freeLesson = lessons.find((lesson) => lesson.free);
  return (
    <>
      <main className={styles.page} lang="es">
        <div className={styles.shell}>
          <JsonLd data={webPageSchema({ pathname: path, name: title, description, about, inLanguage: "es", ...(/^[ABC][12]$/.test(level) ? { educationalLevel: level } : {}) })} />
          <JsonLd data={faqPageSchema(faq, "es")} />
          <EleTopbar current={MATERIAL_ELE_PATH} />
          <Breadcrumbs items={[{ name: "SpanishCue", href: "/" }, { name: "Material ELE", href: MATERIAL_ELE_PATH }, { name: "Banco de actividades", href: ACTIVIDADES_PATH }, { name: h1, href: path }]} />
          <p className={print.printOnly}>
            <strong>Ficha de SpanishCue · {kicker}</strong><br />
            Más material: spanishcue.com{path}
          </p>
          <section className={styles.hero}>
            <p className={styles.eyebrow}>{kicker} · {level}</p>
            <h1 className={styles.title}>{h1}</h1>
            <p className={styles.lead}>{description}</p>
            <div className={`${styles.heroActions} ${print.noPrint}`}>
              <PrintButton />
              <Link className={styles.secondaryButton} href={parent.path}>Guía completa: {parent.label}</Link>
              {freeLesson ? <Link className={styles.secondaryButton} href={freeLesson.href}>Clase gratis: {freeLesson.title}</Link> : null}
            </div>
          </section>
          {children}
          {featured ? <div className={print.noPrint}><EleFeaturedLesson lesson={featured} /></div> : null}
          {lessons.length ? (
            <Section title="Clases interactivas del mismo tema" intro="Para dar el tema entero en pantalla: teoría visual, práctica con corrección y conversación.">
              <div className={print.noPrint}><EleLessonGrid lessons={lessons} /></div>
            </Section>
          ) : null}
          <div className={print.noPrint}><Section title="Compartir"><ShareSnippet path={path} title={h1} description={description} /></Section></div>
          <Section title="Preguntas frecuentes"><Faq items={faq} /></Section>
          <div className={print.noPrint}><EleBuyBand /></div>
        </div>
      </main>
      <GrowthFooter />
    </>
  );
}
