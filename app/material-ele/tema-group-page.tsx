import Link from "next/link";
import { Breadcrumbs, Faq, GrowthFooter, JsonLd, Section } from "../growth/components";
import { collectionPageSchema, faqPageSchema } from "../growth/schema";
import { EleBuyBand, EleTopbar } from "./components";
import { MATERIAL_ELE_PATH } from "./data";
import { TemaGroupCards, TemaIndex, TemaLevelLinks } from "./tema-components";
import { temasByGroup, type TemaGroup } from "./temas";
import styles from "../growth/growth.module.css";

/** /material-ele/<grupo>: the table of contents of one topic group. */
export function TemaGroupIndexPage({ group }: { group: TemaGroup }) {
  const pages = temasByGroup(group.id);
  const free = pages.reduce((total, page) => total + page.freeCount, 0);
  const faq = [
    { question: `¿Cómo está organizado el índice de ${group.label.toLowerCase()}?`, answer: `Por el orden en que un profesor de ELE lo busca: ${[...new Set(pages.map((page) => page.parent))].join(", ")}. Cada tema enlaza las clases interactivas que lo enseñan, con su nivel MCER y si es gratis o PRO.` },
    { question: "¿Qué incluye cada clase?", answer: group.method.join(" ") },
    { question: "¿Puedo probar antes de suscribirme?", answer: free > 0 ? `Sí. En este índice hay ${free === 1 ? "una clase gratis" : `${free} clases gratis`} que se abren sin registro, y en Material ELE por nivel hay una clase de gramática gratis por cada nivel.` : "Sí: en Material ELE por nivel hay una clase de gramática gratis por cada nivel, y el mundo 3D Noche abierta se prueba sin registro." },
  ];
  return (
    <>
      <main className={styles.page} lang="es">
        <div className={styles.shell}>
          <JsonLd data={collectionPageSchema({ pathname: group.path, name: group.title, description: group.description, inLanguage: "es", about: [group.label, "ELE", "material para profesores de español"], items: pages.map((page) => ({ name: page.name, href: page.path })) })} />
          <JsonLd data={faqPageSchema(faq, "es")} />
          <EleTopbar current={MATERIAL_ELE_PATH} />
          <Breadcrumbs items={[{ name: "SpanishCue", href: "/" }, { name: "Material ELE", href: MATERIAL_ELE_PATH }, { name: group.label, href: group.path }]} />
          <section className={styles.hero}>
            <p className={styles.eyebrow}>Material ELE · {group.label}</p>
            <h1 className={styles.title}>{group.h1}</h1>
            <p className={styles.lead}>{group.intro}</p>
            <div className={styles.heroActions}>
              <Link className={styles.primaryButton} href="#indice">Ver el índice</Link>
              <Link className={styles.secondaryButton} href="/demo/noche-abierta">Probar una clase gratis</Link>
            </div>
          </section>
          <div id="indice" />
          <TemaIndex group={group.id} />
          <Section title="Preguntas frecuentes"><Faq items={faq} /></Section>
          <Section title="Otros grupos de temas">
            <TemaGroupCards current={group.id} />
            <TemaLevelLinks />
          </Section>
          <EleBuyBand />
        </div>
      </main>
      <GrowthFooter />
    </>
  );
}
