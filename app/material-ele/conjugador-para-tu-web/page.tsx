import Link from "next/link";
import { Breadcrumbs, Faq, GrowthFooter, JsonLd, Section } from "../../growth/components";
import { faqPageSchema, webPageSchema } from "../../growth/schema";
import styles from "../../growth/growth.module.css";
import { EleTopbar, eleMetadata } from "../components";
import { MATERIAL_ELE_PATH } from "../data";
import EmbedSnippet from "../EmbedSnippet";
import { CONJUGACION_PATH, TOP_VERBS } from "../../conjugacion/verbos";

export const EMBED_PAGE_PATH = `${MATERIAL_ELE_PATH}/conjugador-para-tu-web`;
const title = "Conjugador de verbos gratis para tu web o aula virtual | SpanishCue";
const description = "Inserta gratis un conjugador de verbos en español en tu blog, Moodle, Google Sites o web de academia: más de 1.200 verbos, irregulares marcados, sin registro.";
export const metadata = eleMetadata(EMBED_PAGE_PATH, title, description);

const faq = [
  { question: "¿Es gratis?", answer: "Sí. El conjugador se puede insertar sin registro y sin coste en cualquier web, blog o aula virtual. Solo pedimos mantener el enlace de crédito que acompaña al código." },
  { question: "¿Dónde funciona?", answer: "En cualquier sitio que acepte un iframe: WordPress, Google Sites, Wix, Blogger, Moodle, Canvas o la web de tu academia. Si tu plataforma no admite iframes, enlaza directamente a la página del verbo." },
  { question: "¿Recoge datos de mis alumnos?", answer: "No. Es una página sin cookies, sin scripts y sin cuentas: solo muestra las tablas del verbo que el alumno escribe." },
  { question: "¿Qué verbos incluye?", answer: "Más de 1.200 verbos frecuentes con presente, indefinido, imperfecto, futuro, presente de subjuntivo e imperativo, y las formas irregulares en rojo. El enlace lleva a la conjugación completa con notas y ejercicio." },
];

export default function EmbedLanding() {
  return (
    <>
      <main className={styles.page} lang="es">
        <div className={styles.shell}>
          <JsonLd data={webPageSchema({ pathname: EMBED_PAGE_PATH, name: title, description, about: ["conjugador de verbos", "recursos ELE gratis"], inLanguage: "es" })} />
          <JsonLd data={faqPageSchema(faq, "es")} />
          <EleTopbar current={MATERIAL_ELE_PATH} />
          <Breadcrumbs items={[{ name: "SpanishCue", href: "/" }, { name: "Material ELE", href: MATERIAL_ELE_PATH }, { name: "Conjugador para tu web", href: EMBED_PAGE_PATH }]} />
          <section className={styles.hero}>
            <p className={styles.eyebrow}>Gratis · Sin registro · Sin cookies</p>
            <h1 className={styles.title}>Un conjugador de verbos para tu web o tu aula virtual</h1>
            <p className={styles.lead}>{description}</p>
          </section>
          <Section title="Así se ve" intro="Prueba a escribir un verbo: es el mismo conjugador que verán tus alumnos.">
            <iframe src="/embed/conjugador?v=tener" title="Conjugador de verbos en español" width="100%" height={640} style={{ border: 0, maxWidth: 760, background: "#fff", borderRadius: 16 }} loading="lazy" />
          </Section>
          <Section title="Cópialo en tu sitio" intro="Elige el verbo con el que se abre, copia el código y pégalo en el editor HTML de tu web, blog o curso de Moodle.">
            <EmbedSnippet verbs={TOP_VERBS} />
          </Section>
          <Section title="Para qué sirve en clase">
            <ul>
              <li>Como consulta rápida durante una tarea de escritura, sin salir del aula virtual.</li>
              <li>Para repasar los irregulares de un tiempo antes de un examen: el alumno ve en rojo lo que se aparta del modelo.</li>
              <li>Junto a las <Link className={styles.textLink} href={`${CONJUGACION_PATH}/irregulares`}>listas de verbos irregulares por tiempo</Link> y la <Link className={styles.textLink} href={CONJUGACION_PATH}>conjugación completa de cada verbo</Link>, con ejercicio corregido.</li>
            </ul>
          </Section>
          <Section title="Preguntas frecuentes"><Faq items={faq} /></Section>
        </div>
      </main>
      <GrowthFooter />
    </>
  );
}
