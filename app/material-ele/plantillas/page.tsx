import Link from "next/link";
import { Breadcrumbs, Faq, GrowthFooter, JsonLd, Section } from "../../growth/components";
import { collectionPageSchema, faqPageSchema } from "../../growth/schema";
import { EleBuyBand, EleTopbar, eleMetadata } from "../components";
import { MATERIAL_ELE_PATH } from "../data";
import { FICHAS_PATH } from "../fichas";
import { ACTIVIDADES_PATH } from "../actividades";
import { PLANTILLAS_PATH, plantillaFiles, plantillaKinds, plantillas, plantillasDescription, plantillasTitle } from "../plantillas";
import styles from "../../growth/growth.module.css";
import own from "./plantillas.module.css";

export const metadata = eleMetadata(PLANTILLAS_PATH, plantillasTitle, plantillasDescription);

const faq = [
  { question: "¿Las plantillas son gratis?", answer: "Sí. Cada plantilla se descarga en PDF sin registro y sin dejar el correo, y se puede imprimir las veces que haga falta." },
  { question: "¿Puedo usarlas con mis alumnos o en mi academia?", answer: "Sí. Puedes imprimirlas, fotocopiarlas y compartirlas con tus alumnos. Lo único que pedimos es no venderlas ni quitarles el pie de SpanishCue." },
  { question: "¿En qué tamaño de papel están?", answer: "Cada plantilla tiene dos versiones: A4, el tamaño habitual en Europa y en buena parte de América Latina, y carta, el de Estados Unidos, México y otros países." },
  { question: "¿Se pueden rellenar en el ordenador?", answer: "Son PDF pensados para imprimir. Para rellenarlos en pantalla, usa la herramienta de texto o de anotación de tu lector de PDF o de tu tableta." },
];

export default function PlantillasPage() {
  return (
    <>
      <main className={styles.page} lang="es">
        <div className={styles.shell}>
          <JsonLd data={collectionPageSchema({ pathname: PLANTILLAS_PATH, name: plantillasTitle, description: plantillasDescription, inLanguage: "es", about: ["plantillas para profesores de español", "plantillas ELE", "material imprimible para clase de español"], items: plantillas.map((page) => ({ name: page.h1, href: page.path })) })} />
          <JsonLd data={faqPageSchema(faq, "es")} />
          <EleTopbar current={MATERIAL_ELE_PATH} />
          <Breadcrumbs items={[{ name: "SpanishCue", href: "/" }, { name: "Material ELE", href: MATERIAL_ELE_PATH }, { name: "Plantillas", href: PLANTILLAS_PATH }]} />
          <section className={styles.hero}>
            <p className={styles.eyebrow}>Plantillas ELE gratis · PDF en A4 y carta</p>
            <h1 className={styles.title}>Plantillas para profesores de español, gratis y listas para imprimir</h1>
            <p className={styles.lead}>{plantillasDescription} Son las hojas que un profesor particular acaba haciendo a mano: aquí están ya maquetadas, cada una con su página, lo que incluye y cómo usarla en clase.</p>
          </section>
          {plantillaKinds.map((kind) => {
            const pages = plantillas.filter((page) => page.kind === kind);
            return pages.length ? (
              <Section key={kind} id={kind.toLowerCase().replace(/[^a-záéíóúñ]+/g, "-")} title={kind}>
                <div className={own.grid}>
                  {pages.map((page) => (
                    <Link className={own.card} key={page.path} href={page.path}>
                      <img src={plantillaFiles(page.slug).preview} alt={`Vista previa: ${page.h1}`} width={page.landscape ? 1685 : 1191} height={page.landscape ? 1191 : 1685} loading="lazy" />
                      <em>PDF · {page.sheets === 1 ? "1 hoja" : `${page.sheets} hojas`}</em>
                      <b>{page.name}</b>
                      <span>{page.description}</span>
                    </Link>
                  ))}
                </div>
              </Section>
            ) : null;
          })}
          <Section title="Y para el contenido de la clase" intro="Las plantillas ordenan la clase; el contenido está en el resto de Material ELE.">
            <div className={styles.heroActions}>
              <Link className={styles.secondaryButton} href={FICHAS_PATH}>Fichas de gramática con soluciones</Link>
              <Link className={styles.secondaryButton} href={ACTIVIDADES_PATH}>Banco de actividades</Link>
              <Link className={styles.secondaryButton} href={MATERIAL_ELE_PATH}>Todo el Material ELE</Link>
            </div>
          </Section>
          <Section title="Preguntas frecuentes"><Faq items={faq} /></Section>
          <EleBuyBand />
        </div>
      </main>
      <GrowthFooter />
    </>
  );
}
