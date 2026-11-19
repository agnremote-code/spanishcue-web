import Link from "next/link";
import { Faq, JsonLd, Section } from "../../growth/components";
import { collectionPageSchema, faqPageSchema } from "../../growth/schema";
import { eleMetadata } from "../components";
import { FICHAS_GRATIS_LEVELS, FICHAS_GRATIS_PATH, fichasGratis, fichasGratisDescription, fichasGratisTitle, packPath } from "../fichas-gratis";
import { FreeBadge, FreeFooter, FreeHeader } from "./free-components";
import styles from "../../growth/growth.module.css";
import print from "../print.module.css";
import free from "./fichas-gratis.module.css";

export const metadata = eleMetadata(FICHAS_GRATIS_PATH, fichasGratisTitle, fichasGratisDescription);

const faq = [
  { question: "¿Las fichas son de verdad gratis?", answer: "Sí, 100 % gratis. No hace falta crear una cuenta, no se pide ningún pago y en esta sección no hay precios, suscripciones ni nada que comprar." },
  { question: "¿Son fichas completas o muestras?", answer: "Completas. Cada ficha trae la teoría, los errores típicos, entre 8 y 12 ejercicios, una tarea de escritura, preguntas de conversación y todas las soluciones explicadas." },
  { question: "¿Cómo las descargo en PDF?", answer: "Abre la ficha y pulsa «Descargar ficha completa en PDF»: se abre el diálogo de impresión y eliges «Guardar como PDF». También hay un pack por nivel con todas las fichas del nivel en un solo PDF." },
  { question: "¿Puedo usarlas en mis clases y compartirlas?", answer: "Sí. Puedes imprimirlas, proyectarlas en pantalla compartida, dárselas a tus alumnos y enlazar esta página o cualquier ficha desde tu web o tu blog." },
  { question: "¿Qué niveles y temas hay?", answer: `${fichasGratis.length} fichas de A1 a C2 con los temas más buscados: ser y estar, presente, pasados, subjuntivo, condicional, por y para, pronombres, relativos, estilo indirecto, conectores y mucho más.` },
];

export default function FichasGratisPage() {
  return (
    <main className={styles.page} lang="es">
      <div className={styles.shell}>
        <JsonLd data={collectionPageSchema({ pathname: FICHAS_GRATIS_PATH, name: fichasGratisTitle, description: fichasGratisDescription, inLanguage: "es", about: ["fichas ELE gratis", "fichas de español completas", "ejercicios de gramática con soluciones"], items: fichasGratis.map((page) => ({ name: page.freeH1, href: page.freePath })) })} />
        <JsonLd data={faqPageSchema(faq, "es")} />
        <FreeHeader />
        <section className={styles.hero}>
          <p className={styles.eyebrow}>100 % gratis · sin registro · A1–C2</p>
          <h1 className={styles.title}>{fichasGratis.length} fichas ELE completas y gratis, con soluciones</h1>
          <p className={styles.lead}>Fichas de gramática enteras para profesores de español: teoría, errores típicos, ejercicios, escritura, conversación y soluciones explicadas. Se descargan completas en PDF, sin cuenta y sin pagar nada.</p>
          <ul className={free.promise}>
            <li><b>Completas, no muestras</b>Cada ficha está entera: nada se queda bloqueado ni recortado.</li>
            <li><b>Sin registro</b>No pedimos correo, cuenta ni datos para abrirlas o descargarlas.</li>
            <li><b>Descarga en PDF</b>Una ficha suelta o el pack de todo un nivel en un solo PDF.</li>
            <li><b>Para compartir</b>Imprímelas, proyéctalas, dáselas a tus alumnos o enlázalas desde tu web.</li>
          </ul>
          <p className={free.notice}><strong>Esta sección es 100 % gratuita.</strong> No hay precios, ni suscripciones, ni enlaces de compra, ni ninguna insinuación de pago: solo fichas completas para usar en clase.</p>
          <div className={`${free.packs} ${print.noPrint}`}>
            {FICHAS_GRATIS_LEVELS.map((level) => <Link className={styles.secondaryButton} key={level} href={packPath(level)}>Pack {level} completo (PDF)</Link>)}
          </div>
        </section>

        {FICHAS_GRATIS_LEVELS.map((level) => {
          const pages = fichasGratis.filter((page) => page.level === level);
          return (
            <Section key={level} id={level.toLowerCase()} title={`Fichas ${level} completas y gratis (${pages.length})`}>
              <div className={styles.cardGrid}>
                {pages.map((page) => (
                  <Link className={`${styles.levelCard} ${free.card}`} key={page.freePath} href={page.freePath}>
                    <em><FreeBadge /> {page.level}</em>
                    <b>{page.name}</b>
                    <span>Teoría, ejercicios y soluciones · PDF</span>
                  </Link>
                ))}
              </div>
              <p className={print.noPrint}><Link href={packPath(level)}>Descargar todas las fichas de {level} en un solo PDF</Link></p>
            </Section>
          );
        })}

        <Section title="Preguntas frecuentes"><Faq items={faq} /></Section>
        <FreeFooter />
      </div>
    </main>
  );
}
