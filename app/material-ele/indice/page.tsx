import Link from "next/link";
import { Breadcrumbs, GrowthFooter, JsonLd, Section } from "../../growth/components";
import { collectionPageSchema } from "../../growth/schema";
import { EleBuyBand, EleTopbar, eleMetadata } from "../components";
import { MATERIAL_ELE_PATH } from "../data";
import { FEED_PATH, INDICE_PATH, indiceCount, indiceDescription, indiceEntries, indiceSections, indiceTitle } from "../indice";
import styles from "../../growth/growth.module.css";

export const metadata = { ...eleMetadata(INDICE_PATH, indiceTitle, indiceDescription), alternates: { canonical: `https://spanishcue.com${INDICE_PATH}`, types: { "application/atom+xml": `https://spanishcue.com${FEED_PATH}` } } };

/** The whole Material ELE catalogue as one HTML list, so every page is two clicks from the home page. */
export default function IndicePage() {
  return (
    <>
      <main className={styles.page} lang="es">
        <div className={styles.shell}>
          <JsonLd data={collectionPageSchema({ pathname: INDICE_PATH, name: indiceTitle, description: indiceDescription, inLanguage: "es", about: ["material ELE", "índice", "profesores de español"], items: indiceEntries.map((entry) => ({ name: entry.title.replace(/ \| SpanishCue$/, ""), href: entry.path })) })} />
          <EleTopbar current={MATERIAL_ELE_PATH} />
          <Breadcrumbs items={[{ name: "SpanishCue", href: "/" }, { name: "Material ELE", href: MATERIAL_ELE_PATH }, { name: "Índice completo", href: INDICE_PATH }]} />
          <section className={styles.hero}>
            <p className={styles.eyebrow}>Material ELE · índice</p>
            <h1 className={styles.title}>Índice completo de Material ELE: {indiceCount} páginas</h1>
            <p className={styles.lead}>{indiceDescription} Cada enlace abre una página con clases listas para proyectar, imprimir o compartir en el aula virtual.</p>
            <p className={styles.sectionIntro}>
              {indiceSections.map((section, index) => <span key={section.id}>{index ? " · " : ""}<a href={`#${section.id}`}>{section.title}</a></span>)}
              {" · "}<a href={FEED_PATH}>Feed Atom</a>
            </p>
          </section>
          {indiceSections.map((section) => (
            <Section key={section.id} id={section.id} title={`${section.title} (${section.entries.length})`}>
              <ul className={styles.linkList}>
                {section.entries.map((entry) => <li key={entry.path}><Link href={entry.path}>{entry.title.replace(/ \| SpanishCue$/, "")}</Link></li>)}
              </ul>
            </Section>
          ))}
          <EleBuyBand />
        </div>
      </main>
      <GrowthFooter />
    </>
  );
}
