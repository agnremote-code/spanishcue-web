import type { ReactNode } from "react";
import { Breadcrumbs, Faq, GrowthFooter, JsonLd, Section } from "../growth/components";
import { faqPageSchema, webPageSchema } from "../growth/schema";
import { EleBuyBand, EleTopbar } from "../material-ele/components";
import { MATERIAL_ELE_PATH } from "../material-ele/data";
import { ElePopularLinks } from "../material-ele/PopularLinks";
import styles from "../growth/growth.module.css";

/** Shared frame of the public mini-app families (Material ELE look, FAQ schema). */
export function MiniAppFrame({ path, title, description, h1, kicker, crumbs, faq, about, level, children }: {
  path: string; title: string; description: string; h1: string; kicker: string; crumbs: { name: string; href: string }[];
  faq: { question: string; answer: string }[]; about: string[]; level?: string; children: ReactNode;
}) {
  return (
    <>
      <main className={styles.page} lang="es">
        <div className={styles.shell}>
          <JsonLd data={webPageSchema({ pathname: path, name: title, description, about, inLanguage: "es", educationalLevel: level })} />
          <JsonLd data={faqPageSchema(faq, "es")} />
          <EleTopbar current={MATERIAL_ELE_PATH} />
          <Breadcrumbs items={[{ name: "SpanishCue", href: "/" }, { name: "Material ELE", href: MATERIAL_ELE_PATH }, ...crumbs]} />
          <section className={styles.hero}>
            <p className={styles.eyebrow}>{kicker}</p>
            <h1 className={styles.title}>{h1}</h1>
            <p className={styles.lead}>{description}</p>
          </section>
          {children}
          <ElePopularLinks current={path} />
          <Section title="Preguntas frecuentes"><Faq items={faq} /></Section>
          <EleBuyBand />
        </div>
      </main>
      <GrowthFooter />
    </>
  );
}
