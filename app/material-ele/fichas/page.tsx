import Link from "next/link";
import { Breadcrumbs, GrowthFooter, JsonLd, Section } from "../../growth/components";
import { collectionPageSchema } from "../../growth/schema";
import { EleBuyBand, EleTopbar, eleMetadata } from "../components";
import { MATERIAL_ELE_PATH } from "../data";
import { FICHAS_PATH, fichaPages, fichasDescription, fichasTitle } from "../fichas";
import styles from "../../growth/growth.module.css";

export const metadata = eleMetadata(FICHAS_PATH, fichasTitle, fichasDescription);
const LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2"];

export default function FichasPage() {
  return (
    <>
      <main className={styles.page} lang="es">
        <div className={styles.shell}>
          <JsonLd data={collectionPageSchema({ pathname: FICHAS_PATH, name: fichasTitle, description: fichasDescription, inLanguage: "es", about: ["fichas ELE", "fichas de gramática española", "ejercicios con soluciones"], items: fichaPages.map((page) => ({ name: page.h1, href: page.path })) })} />
          <EleTopbar current={MATERIAL_ELE_PATH} />
          <Breadcrumbs items={[{ name: "SpanishCue", href: "/" }, { name: "Material ELE", href: MATERIAL_ELE_PATH }, { name: "Fichas de gramática", href: FICHAS_PATH }]} />
          <section className={styles.hero}>
            <p className={styles.eyebrow}>Fichas ELE gratis · A1–C2</p>
            <h1 className={styles.title}>Fichas ELE de gramática: gratis, para imprimir y con soluciones</h1>
            <p className={styles.lead}>{fichasDescription} Cada ficha sale de una clase interactiva gratis: puedes darla completa en pantalla o imprimir solo la ficha.</p>
          </section>
          {LEVELS.map((level) => (
            <Section key={level} id={level.toLowerCase()} title={`Fichas de ${level}`}>
              <div className={styles.cardGrid}>{fichaPages.filter((page) => page.level === level).map((page) => <Link className={styles.levelCard} key={page.path} href={page.path}><em>Ficha {page.level}</em><b>{page.name}</b></Link>)}</div>
            </Section>
          ))}
          <EleBuyBand />
        </div>
      </main>
      <GrowthFooter />
    </>
  );
}
