import Link from "next/link";
import type { ReactNode } from "react";
import { Breadcrumbs, Faq, GrowthFooter, JsonLd, Section } from "../growth/components";
import { faqPageSchema, webPageSchema } from "../growth/schema";
import { EleBuyBand, EleTopbar } from "../material-ele/components";
import { MATERIAL_ELE_PATH } from "../material-ele/data";
import { ElePopularLinks } from "../material-ele/PopularLinks";
import styles from "../growth/growth.module.css";
import cj from "./conjugacion.module.css";
import { CONJUGACION_PATH } from "./verbos";

/** Shared frame of the /conjugacion hub and verb pages. */
export function ConjugacionFrame({ path, title, description, h1, kicker, crumbs, faq, about, hero, children }: {
  path: string; title: string; description: string; h1: string; kicker: string; crumbs: { name: string; href: string }[];
  faq: { question: string; answer: string }[]; about: string[]; hero?: ReactNode; children: ReactNode;
}) {
  return (
    <>
      <main className={styles.page} lang="es">
        <div className={styles.shell}>
          <JsonLd data={webPageSchema({ pathname: path, name: title, description, about, inLanguage: "es" })} />
          <JsonLd data={faqPageSchema(faq, "es")} />
          <EleTopbar current={MATERIAL_ELE_PATH} />
          <Breadcrumbs items={[{ name: "SpanishCue", href: "/" }, { name: "Material ELE", href: MATERIAL_ELE_PATH }, { name: "Conjugación", href: CONJUGACION_PATH }, ...crumbs]} />
          <section className={styles.hero}>
            <p className={styles.eyebrow}>{kicker}</p>
            <h1 className={styles.title}>{h1}</h1>
            <p className={styles.lead}>{description}</p>
            {hero}
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

export function VerbSearch() {
  return (
    <form className={cj.search} action="/buscar-verbo" method="get" role="search">
      <input aria-label="Buscar un verbo" name="v" type="search" placeholder="Escribe un verbo: tener, pedir, conducir…" autoComplete="off" autoCapitalize="off" spellCheck={false} lang="es" required />
      <button className={styles.primaryButton} type="submit">Conjugar</button>
    </form>
  );
}

export function VerbLinks({ verbs, href }: { verbs: string[]; href: (verb: string) => string }) {
  return (
    <ul className={cj.verbList}>
      {verbs.map((verb) => <li key={verb}><Link href={href(verb)}>{verb}</Link></li>)}
    </ul>
  );
}
