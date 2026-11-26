import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, GrowthFooter, JsonLd, Section } from "../growth/components";
import { TEAM_PATH, authorNode, collectionPageSchema, organizationNode } from "../growth/schema";
import { EleTopbar } from "../material-ele/components";
import { MATERIAL_ELE_PATH } from "../material-ele/data";
import { canonicalUrl } from "../seo";
import { DATOS_PATH, informes } from "./informes";
import styles from "../growth/growth.module.css";

const title = "Datos de SpanishCue: errores reales de alumnos de español";
const description = "Informes con datos reales de SpanishCue: qué errores cometen los alumnos de español en las tareas y cómo buscan material los profesores. Con método, límites y descarga.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: canonicalUrl(DATOS_PATH) },
  robots: { index: true, follow: true },
  openGraph: { title, description, url: canonicalUrl(DATOS_PATH), type: "website" },
};

export default function DatosPage() {
  return (
    <>
      <main className={styles.page} lang="es">
        <div className={styles.shell}>
          <JsonLd data={collectionPageSchema({ pathname: DATOS_PATH, name: title, description, inLanguage: "es", items: informes.map((informe) => ({ name: informe.title, href: informe.path })) })} />
          <JsonLd
            data={{
              "@context": "https://schema.org",
              "@type": "DataCatalog",
              name: "Datos de SpanishCue",
              description,
              url: canonicalUrl(DATOS_PATH),
              inLanguage: "es",
              creator: authorNode,
              publisher: organizationNode,
              dataset: informes.filter((informe) => informe.dataset).map((informe) => ({ "@type": "Dataset", name: informe.title, description: informe.summary, url: canonicalUrl(informe.path), creator: authorNode, license: "https://creativecommons.org/licenses/by/4.0/" })),
            }}
          />
          <EleTopbar current={MATERIAL_ELE_PATH} />
          <Breadcrumbs items={[{ name: "SpanishCue", href: "/" }, { name: "Datos", href: DATOS_PATH }]} />
          <section className={styles.hero}>
            <p className={styles.eyebrow}>Datos de SpanishCue</p>
            <h1 className={styles.title}>Errores reales de alumnos de español, con datos</h1>
            <p className={styles.lead}>
              Cuando un alumno se equivoca en una tarea de SpanishCue, el error queda guardado para que su profesor lo revise. Aquí publicamos
              lo que se repite: qué formas salen mal, en qué nivel y con cuántos alumnos. Cada informe dice cuántas respuestas analiza, de qué
              fechas y qué no se puede concluir.
            </p>
          </section>

          <Section title="Informes publicados">
            <div className={styles.cardGrid}>
              {informes.map((informe) => (
                <Link key={informe.path} className={styles.levelCard} href={informe.path}>
                  <b style={{ fontSize: 19 }}>{informe.title}</b>
                  <span>{informe.summary}</span>
                  <span>{informe.source}</span>
                  <em>Leer el informe</em>
                </Link>
              ))}
            </div>
          </Section>

          <Section title="Cómo trabajamos los datos">
            <div className={styles.panel}>
              <ul>
                <li><b>Solo cifras reales.</b> Cada número sale de respuestas o búsquedas que podemos contar. Si la muestra es pequeña, lo decimos en el primer párrafo.</li>
                <li><b>Sin datos personales.</b> No publicamos nombres de alumnos ni de profesores, ni nada que permita reconocerlos.</li>
                <li><b>Errores, no aciertos.</b> Las tareas guardan los errores para el profesor, no cada acierto. Por eso los informes cuentan qué errores aparecen y cuántos alumnos los cometen, no porcentajes de error.</li>
                <li><b>Licencia.</b> Puedes citar los datos con un enlace al informe (CC BY 4.0). Los informes con tabla tienen descarga en CSV.</li>
              </ul>
            </div>
            <div className={styles.prose}>
              <p>
                Los informes los prepara <Link className={styles.textLink} href={TEAM_PATH}>Ale</Link>, profesor de español como lengua extranjera.
                Si das clase y quieres ver los errores de tus propios alumnos, las tareas de{" "}
                <Link className={styles.textLink} href="/autoestudio">Autoestudio</Link> te los muestran con el tipo de cada error. Para preparar la clase
                siguiente, empieza por <Link className={styles.textLink} href={MATERIAL_ELE_PATH}>Material ELE</Link>.
              </p>
            </div>
          </Section>
        </div>
      </main>
      <GrowthFooter />
    </>
  );
}
