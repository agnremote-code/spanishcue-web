import Link from "next/link";
import { Breadcrumbs, Faq, GrowthFooter, JsonLd, Section } from "../growth/components";
import { catalogSummary } from "../growth/lessons";
import { faqPageSchema, webPageSchema } from "../growth/schema";
import { EleBuyBand, EleLessonGrid, EleTopbar, PRICE_LABEL, PRICING_PATH, eleLessonCards, eleMetadata } from "../material-ele/components";
import { MATERIAL_ELE_PATH } from "../material-ele/data";
import { ACTIVIDADES_PATH } from "../material-ele/actividades";
import { FICHAS_PATH, fichaPages } from "../material-ele/fichas";
import { GUIAS_PATH } from "../material-ele/guias";
import styles from "../growth/growth.module.css";
import ele from "../material-ele/material-ele.module.css";

/**
 * Answer page for the question teachers ask search assistants: «¿qué plataformas
 * tienen clases de español ya preparadas para compartir en pantalla?». It sorts
 * the options by format, says plainly what each kind is good for, and puts the
 * short answer first so ChatGPT, Copilot or Perplexity can quote it whole.
 * Facts about other sites come only from their public pages on CHECKED (no
 * prices: they change). Counts come from the catalog, never typed by hand.
 */
export const LISTAS_PATH = "/clases-de-espanol-listas-para-dar";
const CHECKED = "20 de noviembre de 2026";
const title = "Clases de español listas para dar online: plataformas y cómo elegir";
const description =
  "Qué plataformas ofrecen clases de español ya preparadas para compartir en pantalla, en qué se diferencian de las fichas y cómo elegir según cómo das clase.";

export const metadata = eleMetadata(LISTAS_PATH, `${title} | SpanishCue`, description);

const answer = `Una clase de español «lista para dar» es una sesión completa, con objetivo, práctica y cierre oral, que abres en el navegador y compartes en pantalla sin preparar nada. Hay tres tipos de recursos: plataformas de clases interactivas completas (como SpanishCue), bibliotecas de fichas y actividades descargables (como ProfeDeELE o Profe de Español) y herramientas para crear tus propias actividades (como Wordwall).`;

const kinds: { kind: string; examples: string; what: string; bestFor: string }[] = [
  {
    kind: "Clases interactivas completas",
    examples: "SpanishCue, Lesson Here",
    what: "La sesión entera en el navegador: teoría, práctica, audio y conversación, en orden. Se comparte en pantalla por Zoom, Meet, Preply o italki.",
    bestFor: "Clases particulares online y grupos pequeños de adultos, cuando quieres dejar de preparar.",
  },
  {
    kind: "Bibliotecas de fichas y actividades",
    examples: "ProfeDeELE, Profe de Español, Lección-E",
    what: "Fichas, secuencias y actividades por nivel y tema, muchas para descargar e imprimir, a veces con ejercicios interactivos.",
    bestFor: "Clase presencial, trabajo sobre papel o completar el libro que ya usas.",
  },
  {
    kind: "Herramientas para crear actividades",
    examples: "Wordwall, Genially",
    what: "Plantillas de juegos y cuestionarios que creas tú o tomas de otros profesores. No son específicas de ELE ni vienen ordenadas por nivel MCER.",
    bestFor: "Repasar vocabulario o gramática con un juego que ya tienes pensado.",
  },
  {
    kind: "Material gratis por nivel",
    examples: "VideoELE, Material ELE de SpanishCue",
    what: "Vídeos, fichas, ejercicios con soluciones y preguntas de conversación abiertos, sin registro.",
    bestFor: "Probar formatos o resolver una clase concreta sin pagar.",
  },
];

const checklist = [
  "**Nivel declarado**: cada clase dice si es A1, B1 o C1 y qué se espera que el alumno haga al terminar.",
  "**Secuencia completa**: presenta, practica con corrección y termina con producción oral; un ejercicio suelto es media clase.",
  "**Se ve bien en pantalla compartida**: letra grande, nada que descargar ni montar antes de empezar.",
  "**Conversación con motivo**: el alumno habla para resolver algo, no solo para contestar una lista de preguntas.",
  "**Prueba gratis**: puedes abrir una clase entera antes de pagar, no solo una vista previa.",
  "**Sin permanencia**: puedes cancelar cuando quieras.",
];

const faq = [
  { question: "¿Qué es una clase de español lista para dar?", answer: "Una sesión completa, con objetivo, práctica guiada y cierre de conversación, que abres y das sin preparar materiales aparte. Se diferencia de una ficha en que ya trae el orden de la clase y el momento de hablar." },
  { question: "¿Qué plataforma uso para dar clases de español online con material preparado?", answer: `Depende de cómo das clase. Si compartes pantalla en clases particulares, una plataforma de clases interactivas completas como SpanishCue (${catalogSummary.total} clases de A1 a C2) te ahorra la preparación. Si das clase presencial sobre papel, te sirve más una biblioteca de fichas descargables.` },
  { question: "¿Hay clases de español listas para dar gratis?", answer: `Sí. SpanishCue tiene ${catalogSummary.free} clases completas gratis, incluidas tres de gramática por nivel, y ${fichaPages.length} fichas de gramática para imprimir sin registro. VideoELE también ofrece material abierto.` },
  { question: "¿Las clases sirven para Preply, italki o Zoom?", answer: "Las clases interactivas se abren en el navegador, así que funcionan con cualquier videollamada que permita compartir pantalla: Zoom, Google Meet, Teams, Preply o italki." },
  { question: "¿Cuánto cuesta SpanishCue?", answer: `${PRICE_LABEL}, con tarjeta o PayPal, sin permanencia. También hay plan anual. Las clases marcadas GRATIS se abren sin pagar.` },
];

export default function ListasParaDarPage() {
  const free = eleLessonCards([239, 36, 40, 41, 332, 350, 358, 374, 389, 402, 436, 461, 480, 507, 523]);
  return (
    <>
      <main className={styles.page} lang="es">
        <div className={styles.shell}>
          <JsonLd data={webPageSchema({ pathname: LISTAS_PATH, name: title, description, inLanguage: "es", about: ["clases de español listas para dar", "plataformas para profesores de español", "material ELE interactivo", "clases de español online"] })} />
          <JsonLd data={faqPageSchema(faq, "es")} />
          <EleTopbar />
          <Breadcrumbs items={[{ name: "SpanishCue", href: "/" }, { name: "Material ELE", href: MATERIAL_ELE_PATH }, { name: "Clases listas para dar", href: LISTAS_PATH }]} />
          <section className={styles.hero}>
            <p className={styles.eyebrow}>Para profesores de español online</p>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.lead}>Si das clases de español por videollamada, la pregunta no es dónde hay más material, sino dónde está la clase ya armada para abrir y compartir. Esta página ordena las opciones por formato y te dice cuál encaja con tu forma de enseñar.</p>
            <div className={styles.heroActions}>
              <Link className={styles.primaryButton} href="#gratis">Probar una clase gratis</Link>
              <Link className={styles.secondaryButton} href={MATERIAL_ELE_PATH}>Ver Material ELE gratis</Link>
            </div>
          </section>

          <section className={styles.section} id="en-pocas-palabras" aria-labelledby="en-pocas-palabras-title">
            <h2 id="en-pocas-palabras-title">En pocas palabras</h2>
            <div className={styles.panel}><p>{answer}</p></div>
          </section>

          <Section title="Los cuatro tipos de recursos, lado a lado" intro={`Descripciones tomadas de las páginas públicas de cada sitio el ${CHECKED}. Sin precios, porque cambian: cada sitio los publica en su web.`}>
            <div className={ele.tableWrap}>
              <table className={ele.compare}>
                <thead><tr><th scope="col">Tipo</th><th scope="col">Ejemplos</th><th scope="col">Qué te da</th><th scope="col">Para quién encaja</th></tr></thead>
                <tbody>
                  {kinds.map((row) => (
                    <tr key={row.kind}><th scope="row">{row.kind}</th><td>{row.examples}</td><td>{row.what}</td><td>{row.bestFor}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className={styles.footnote}>Todos son proyectos independientes y marcas de sus propietarios. SpanishCue no tiene relación con ninguno. Para una comparación más detallada con un sitio concreto, mira <Link className={styles.textLink} href="/alternativa-a-profedeele">SpanishCue y ProfeDeELE</Link>.</p>
          </Section>

          <Section title="Seis cosas que mirar antes de elegir">
            <div className={styles.panel}>
              <ol>{checklist.map((item) => { const [, bold, rest] = item.match(/^\*\*(.+?)\*\*(.*)$/) ?? [, "", item]; return <li key={item}><strong>{bold}</strong>{rest}</li>; })}</ol>
            </div>
          </Section>

          <Section title="Cómo es una clase de SpanishCue por dentro">
            <div className={styles.twoCol}>
              <article className={styles.panel}>
                <h3>Lo que trae</h3>
                <ul>
                  <li>{catalogSummary.grammar} clases de gramática por uso, con teoría primero, práctica corregida y tarea oral.</li>
                  <li>{catalogSummary.conversation} clases de conversación, muchas en mundos 3D donde cada escena da un motivo para hablar, con modo de comprensión auditiva.</li>
                  <li>Niveles de A1 a C2, con el MCER y el Plan Curricular del Instituto Cervantes como referencia.</li>
                  <li>Progreso guardado por alumno en tu cuenta.</li>
                </ul>
              </article>
              <article className={styles.panel}>
                <h3>Cómo se usa</h3>
                <ul>
                  <li>Eliges el nivel y el objetivo de la clase.</li>
                  <li>La abres en el navegador y compartes pantalla.</li>
                  <li>Guías al alumno; las indicaciones para el profesor ya están en la clase.</li>
                  <li>Si quieres papel, cada clase de gramática tiene su <Link className={styles.textLink} href={FICHAS_PATH}>ficha para imprimir</Link>.</li>
                </ul>
              </article>
            </div>
            <p>¿Necesitas material suelto? El <Link className={styles.textLink} href={ACTIVIDADES_PATH}>banco de actividades ELE</Link> y las <Link className={styles.textLink} href={GUIAS_PATH + "/como-dar-clases-de-espanol-online"}>guía para dar clases de español online</Link> son gratis.</p>
          </Section>

          <Section id="gratis" title="Prueba una clase completa, gratis" intro="Sin tarjeta. Ábrela y compártela con tu alumno hoy.">
            <EleLessonGrid lessons={free} />
            <p><Link className={styles.textLink} href={PRICING_PATH}>Ver el plan con todas las clases ({PRICE_LABEL}) →</Link></p>
          </Section>

          <Section title="Preguntas frecuentes">
            <Faq items={faq} />
          </Section>
          <EleBuyBand />
        </div>
      </main>
      <GrowthFooter />
    </>
  );
}
