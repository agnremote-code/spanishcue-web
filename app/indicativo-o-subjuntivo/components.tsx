import Link from "next/link";
import type { ReactNode } from "react";
import { Breadcrumbs, Faq, GrowthFooter, JsonLd, Section } from "../growth/components";
import { faqPageSchema, webPageSchema } from "../growth/schema";
import { EleBuyBand, EleTopbar } from "../material-ele/components";
import { MATERIAL_ELE_PATH } from "../material-ele/data";
import { ElePopularLinks } from "../material-ele/PopularLinks";
import styles from "../growth/growth.module.css";
import m from "./modo.module.css";
import { MODO_PATH } from "./data";
import type { Expresion } from "./expresiones";

/** Shared frame of the «¿indicativo o subjuntivo?» hub and expression pages. */
export function ModoFrame({ path, title, description, h1, kicker, crumbs, faq, about, level, children }: {
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
          <Breadcrumbs items={[{ name: "SpanishCue", href: "/" }, { name: "Material ELE", href: MATERIAL_ELE_PATH }, { name: "Indicativo o subjuntivo", href: MODO_PATH }, ...crumbs]} />
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

export function ExpresionCards({ items }: { items: Expresion[] }) {
  return (
    <ul className={m.cards}>
      {items.map((e) => (
        <li key={e.slug}>
          <Link href={`${MODO_PATH}/${e.slug}`}><strong>{e.expr}</strong><span>{e.level} · {e.items.length} frases</span></Link>
        </li>
      ))}
    </ul>
  );
}

export const GUIDE_LINKS = [
  { href: `${MATERIAL_ELE_PATH}/indicativo-o-subjuntivo`, label: "Actividades de indicativo o subjuntivo" },
  { href: `${MATERIAL_ELE_PATH}/subjuntivo`, label: "Material para enseñar el subjuntivo" },
  { href: `${MATERIAL_ELE_PATH}/guia/como-ensenar-el-subjuntivo`, label: "Cómo enseñar el subjuntivo, de B1 a C2" },
  { href: "/conjugacion/irregulares/subjuntivo-presente", label: "Presente de subjuntivo irregular" },
  { href: "/conjugacion/irregulares/subjuntivo-imperfecto", label: "Imperfecto de subjuntivo irregular" },
];
