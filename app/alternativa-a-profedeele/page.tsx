import Link from "next/link";
import { Breadcrumbs, Faq, GrowthFooter, JsonLd, Section } from "../growth/components";
import { catalogSummary } from "../growth/lessons";
import { faqPageSchema, webPageSchema } from "../growth/schema";
import { EleBuyBand, EleLessonGrid, EleTopbar, PRICE_LABEL, PRICING_PATH, eleLessonCards, eleMetadata } from "../material-ele/components";
import { MATERIAL_ELE_PATH } from "../material-ele/data";
import styles from "../growth/growth.module.css";
import ele from "../material-ele/material-ele.module.css";

export const ALTERNATIVE_PATH = "/alternativa-a-profedeele";
const title = "Alternativa a ProfeDeELE: clases ELE interactivas | SpanishCue";
const description =
  "¿Buscas una alternativa o un complemento a ProfeDeELE? Compara formato, precio y clases gratis de SpanishCue: material ELE interactivo de A1 a C2 para clases online.";

export const metadata = eleMetadata(ALTERNATIVE_PATH, title, description);

/** Facts about the other site come from its public pages; keep the check date when updating. */
const CHECKED = "30 de octubre de 2026";
const OTHER_PRICE_SOURCE = "https://profedeele.gumroad.com/l/individual";

const rows: { feature: string; spanishcue: string; other: string }[] = [
  { feature: "Formato principal", spanishcue: "Clases interactivas para compartir en pantalla: teoría, práctica, audio, conversación y escritura en el mismo lugar.", other: "Materiales didácticos y actividades, muchos pensados para descargar e imprimir." },
  { feature: "Precio individual", spanishcue: `${PRICE_LABEL}, sin permanencia.`, other: `Membresía individual de 95,88 € al año en su página de pago (consultado el ${CHECKED}).` },
  { feature: "Probar sin pagar", spanishcue: "Clases completas gratis en cada nivel, de A1 a C2, y actividades gratis en /material-ele.", other: "Publica materiales gratuitos en su web." },
  { feature: "Conversación", spanishcue: "Mundos 3D de conversación donde cada escena da un motivo para hablar, con modo de comprensión auditiva.", other: "Consulta su catálogo." },
  { feature: "Seguimiento de alumnos", spanishcue: "Eliges el alumno antes de la clase y su progreso queda guardado en tu cuenta.", other: "Consulta su web." },
  { feature: "Ideal para", spanishcue: "Clases particulares online y grupos pequeños de adultos.", other: "Profesores que buscan fichas y material para el aula." },
];

const faq = [
  { question: "¿Qué es SpanishCue?", answer: `Una biblioteca de ${catalogSummary.total} clases interactivas de español para profesores, de A1 a C2, pensada para compartir en pantalla en clases online o proyectar en el aula.` },
  { question: "¿SpanishCue reemplaza a ProfeDeELE?", answer: "Depende de cómo das clase. Si trabajas sobre todo online y quieres la clase completa en pantalla, SpanishCue te ahorra preparación. Si prefieres fichas impresas, muchos profesores combinan los dos." },
  { question: "¿Cuánto cuesta SpanishCue?", answer: `${PRICE_LABEL}, con tarjeta o PayPal, y cancelas cuando quieras. Las clases marcadas GRATIS se abren sin pagar.` },
  { question: "¿Tiene relación SpanishCue con ProfeDeELE?", answer: "No. Son proyectos independientes. ProfeDeELE es una marca de sus propietarios; esta página solo compara formatos para ayudarte a elegir." },
];

export default function AlternativePage() {
  const free = eleLessonCards([239, 350, 389, 439, 468, 515]);
  return (
    <>
      <main className={styles.page} lang="es">
        <div className={styles.shell}>
          <JsonLd data={webPageSchema({ pathname: ALTERNATIVE_PATH, name: title, description, inLanguage: "es", about: ["material ELE", "alternativa a ProfeDeELE", "clases interactivas de español"] })} />
          <JsonLd data={faqPageSchema(faq, "es")} />
          <EleTopbar />
          <Breadcrumbs items={[{ name: "SpanishCue", href: "/" }, { name: "Material ELE", href: MATERIAL_ELE_PATH }, { name: "Alternativa a ProfeDeELE", href: ALTERNATIVE_PATH }]} />
          <section className={styles.hero}>
            <p className={styles.eyebrow}>Comparativa para profesores de ELE</p>
            <h1 className={styles.title}>Alternativa a ProfeDeELE: clases de español interactivas, listas para compartir en pantalla</h1>
            <p className={styles.lead}>
              ProfeDeELE es uno de los sitios de referencia del material ELE. Si das clases online y quieres dejar de preparar fichas, SpanishCue te da la clase entera en pantalla: {catalogSummary.grammar} clases de gramática, mundos 3D de conversación y comprensión auditiva, de A1 a C2.
            </p>
            <div className={styles.heroActions}>
              <Link className={ele.buyButton} href={PRICING_PATH}>Suscribirse · {PRICE_LABEL}</Link>
              <Link className={styles.secondaryButton} href="#gratis">Probar una clase gratis</Link>
            </div>
          </section>

          <Section title="SpanishCue y ProfeDeELE, lado a lado" intro={`Datos de ProfeDeELE tomados de sus páginas públicas el ${CHECKED}. Si algo cambió, avísanos y lo corregimos.`}>
            <div className={ele.tableWrap}>
              <table className={ele.compare}>
                <thead><tr><th scope="col"></th><th scope="col">SpanishCue</th><th scope="col">ProfeDeELE</th></tr></thead>
                <tbody>
                  {rows.map((row) => (
                    <tr key={row.feature}><th scope="row">{row.feature}</th><td>{row.spanishcue}</td><td>{row.other}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className={styles.footnote}>Fuente del precio: <a className={styles.textLink} href={OTHER_PRICE_SOURCE} rel="nofollow noopener" target="_blank">página de la membresía individual</a>. SpanishCue no tiene relación con ProfeDeELE.</p>
          </Section>

          <Section title="Cuándo conviene cada uno">
            <div className={styles.twoCol}>
              <article className={styles.panel}>
                <h3>Elige SpanishCue si...</h3>
                <ul>
                  <li>Das clases por Zoom, Meet, Preply o italki y compartes pantalla.</li>
                  <li>Quieres teoría, audio, conversación y escritura en una sola clase.</li>
                  <li>Necesitas material para todos los niveles, de A1 a C2.</li>
                  <li>Quieres guardar el progreso de cada alumno.</li>
                </ul>
              </article>
              <article className={styles.panel}>
                <h3>Puede que prefieras fichas si...</h3>
                <ul>
                  <li>Das clase presencial y trabajas sobre papel.</li>
                  <li>Buscas una actividad suelta para completar tu propio libro.</li>
                </ul>
                <p>Y si te sirven los dos formatos, combínalos: las <Link className={styles.textLink} href={MATERIAL_ELE_PATH}>actividades de Material ELE</Link> son gratis.</p>
              </article>
            </div>
          </Section>

          <Section id="gratis" title="Prueba una clase completa, gratis" intro="Una clase por nivel, sin tarjeta. Ábrela y compártela con tu alumno hoy.">
            <EleLessonGrid lessons={free} />
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
