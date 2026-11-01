import Link from "next/link";
import { Breadcrumbs, Faq, GrowthFooter, JsonLd, Section } from "../growth/components";
import { catalogSummary } from "../growth/lessons";
import { collectionPageSchema, faqPageSchema } from "../growth/schema";
import { EleBuyBand, EleLessonGrid, EleLevelNav, EleTopbar, EleTopicCards, PRICE_LABEL, PRICING_PATH, eleLessonCards, eleMetadata } from "./components";
import { MATERIAL_ELE_PATH, eleLevels, eleTopics, hubDescription, hubFaq, hubTitle } from "./data";
import { TemaGroupCards } from "./tema-components";
import { temaPages } from "./temas";
import { FEED_PATH, INDICE_PATH } from "./indice";
import { ACTIVIDADES_PATH, actividadPages, ejercicioPages } from "./actividades";
import styles from "../growth/growth.module.css";
import ele from "./material-ele.module.css";

export const metadata = eleMetadata(MATERIAL_ELE_PATH, hubTitle, hubDescription);

/** One free classroom per level plus the free conversation and listening entries. */
const freeEntryIds = [239, 350, 389, 439, 468, 515, 36, 28];

export default function MaterialElePage() {
  const free = eleLessonCards(freeEntryIds);
  const schema = collectionPageSchema({
    pathname: MATERIAL_ELE_PATH,
    name: hubTitle,
    description: hubDescription,
    inLanguage: "es",
    about: ["material ELE", "recursos ELE para profesores", "actividades ELE", "enseñar español como lengua extranjera"],
    items: [...eleLevels, ...eleTopics].map((page) => ({ name: page.h1, href: page.path })),
  });
  return (
    <>
      <main className={styles.page} lang="es">
        <div className={styles.shell}>
          <JsonLd data={schema} />
          <JsonLd data={faqPageSchema(hubFaq, "es")} />
          <EleTopbar current={MATERIAL_ELE_PATH} />
          <Breadcrumbs items={[{ name: "SpanishCue", href: "/" }, { name: "Material ELE", href: MATERIAL_ELE_PATH }]} />
          <section className={styles.hero}>
            <p className={styles.eyebrow}>Para profesores de español como lengua extranjera</p>
            <h1 className={styles.title}>Material ELE para profesores: actividades, ejercicios y clases interactivas de A1 a C2</h1>
            <p className={styles.lead}>
              Actividades listas para usar mañana, ejercicios con soluciones, 60 preguntas de conversación y {catalogSummary.total} clases interactivas para compartir en pantalla.
              Pensado para clases particulares online y grupos pequeños de adultos.
            </p>
            <div className={styles.heroActions}>
              <Link className={styles.primaryButton} href="#niveles">Elegir un nivel</Link>
              <Link className={styles.secondaryButton} href="#gratis">Abrir una clase gratis</Link>
            </div>
            <p className={ele.stats}>
              <span><strong>{catalogSummary.grammar}</strong> clases de gramática</span>
              <span><strong>{catalogSummary.conversation}</strong> clases de conversación</span>
              <span><strong>{catalogSummary.listening}</strong> de comprensión auditiva</span>
              <span>Clases gratis en todos los niveles</span>
            </p>
          </section>

          <Section id="niveles" title="Material ELE por nivel" intro="Cada nivel trae actividades comunicativas con pasos, frases modelo y corrección, un ejercicio con soluciones y las clases interactivas de ese nivel.">
            <EleLevelNav />
            <div className={styles.cardGrid}>
              {eleLevels.map((level) => (
                <Link className={styles.levelCard} key={level.path} href={level.path}>
                  <em>{level.kicker}</em>
                  <b>{level.label}</b>
                  <span>{level.keyPoints.items.slice(0, 3).join(" · ")}</span>
                </Link>
              ))}
            </div>
          </Section>

          <Section id="indice" title="Índice de temas: gramática, vocabulario, funciones y cultura" intro={`${temaPages.length} temas organizados como los buscas, cada uno con las clases interactivas que lo enseñan: presente de indicativo, pretérito indefinido, subjuntivo, por y para, la familia, la comida, dar consejos, narrar…`}>
            <TemaGroupCards />
            <p className={styles.sectionIntro}><Link href={INDICE_PATH}>Índice completo de Material ELE</Link>: todas las páginas en una lista, también disponible como <a href={FEED_PATH}>feed Atom</a>.</p>
          </Section>

          <Section id="banco" title="Banco de actividades: cada ficha con su propia página" intro={`${actividadPages.length} actividades, ${ejercicioPages.length} ejercicios con soluciones y preguntas de conversación por nivel, para imprimir o compartir en pantalla.`}>
            <Link className={styles.primaryButton} href={ACTIVIDADES_PATH}>Abrir el banco de actividades</Link>
          </Section>

          <Section id="temas" title="Actividades ELE por tema" intro="Los temas que más se buscan antes de preparar una clase: los usos difíciles de la gramática, la conversación y los juegos.">
            <EleTopicCards />
          </Section>

          <Section id="gratis" title="Clases interactivas gratis, una por nivel" intro="Ábrelas sin pagar y úsalas con tu alumno hoy. Cada clase tiene teoría, práctica, audio, conversación y escritura, con una guía para el profesor.">
            <EleLessonGrid lessons={free} />
          </Section>

          <Section title="Por qué SpanishCue y no otra carpeta de PDF">
            <div className={styles.twoCol}>
              <article className={styles.panel}>
                <h3>Para la clase, no para imprimir</h3>
                <ul>
                  <li>Compartes la pantalla y la clase avanza contigo: lectura, audio, preguntas y escritura en un solo lugar.</li>
                  <li>Modo profesor con respuestas ocultas para el alumno.</li>
                  <li>Mundos 3D de conversación donde cada escena da un motivo para hablar.</li>
                  <li>Progreso guardado por alumno en tu cuenta.</li>
                </ul>
              </article>
              <article className={styles.panel}>
                <h3>Un precio simple</h3>
                <ul>
                  <li>Todas las clases de A1 a C2 por {PRICE_LABEL}.</li>
                  <li>Las clases marcadas GRATIS se abren sin tarjeta.</li>
                  <li>Pagas con tarjeta o PayPal y cancelas cuando quieras.</li>
                </ul>
                <p><Link className={styles.textLink} href={PRICING_PATH}>Ver precios y suscribirse →</Link></p>
              </article>
            </div>
          </Section>

          <Section title="Preguntas frecuentes">
            <Faq items={hubFaq} />
          </Section>

          <nav className={styles.linkList} aria-label="Más recursos">
            <Link href="/autoestudio">Autoestudio para tus alumnos</Link>
            <Link href="/sistema-verbal">Sistema verbal del español</Link>
            <Link href="/para-profesores">SpanishCue para profesores</Link>
            <Link href="/academias">Para academias</Link>
          </nav>
          <EleBuyBand />
        </div>
      </main>
      <GrowthFooter />
    </>
  );
}
