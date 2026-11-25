import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Breadcrumbs, CtaBand, Faq, GrowthFooter, GrowthTopbar, JsonLd, Section } from "../growth/components";
import { faqPageSchema, webPageSchema } from "../growth/schema";
import { canonicalUrl, languageAlternates } from "../seo";
import { socialPreviewImage, socialPreviewUrl } from "../social-preview";
import styles from "../growth/growth.module.css";
import cj from "../conjugacion/conjugacion.module.css";
import { SPANISH_VERBS_PATH } from "../conjugacion/verbos-en";

export function verbsMetadata(path: string, title: string, description: string): Metadata {
  const languages = languageAlternates(path);
  return {
    title,
    description,
    alternates: { canonical: canonicalUrl(path), ...(languages ? { languages } : {}) },
    robots: { index: true, follow: true },
    openGraph: { title, description, url: canonicalUrl(path), type: "website", images: [socialPreviewImage] },
    twitter: { card: "summary_large_image", title, description, images: [socialPreviewUrl] },
  };
}

export function VerbsFrame({ path, title, description, h1, kicker, crumbs, faq, about, hero, children }: {
  path: string; title: string; description: string; h1: string; kicker: string; crumbs: { name: string; href: string }[];
  faq: { question: string; answer: string }[]; about: string[]; hero?: ReactNode; children: ReactNode;
}) {
  return (
    <>
      <main className={styles.page} lang="en">
        <div className={styles.shell}>
          <JsonLd data={webPageSchema({ pathname: path, name: title, description, about })} />
          <JsonLd data={faqPageSchema(faq, "en")} />
          <GrowthTopbar />
          <Breadcrumbs items={[{ name: "SPANISHCUE", href: "/" }, { name: "Teacher resources", href: "/spanish-teacher-resources" }, { name: "Spanish verbs", href: SPANISH_VERBS_PATH }, ...crumbs]} />
          <section className={styles.hero}>
            <p className={styles.eyebrow}>{kicker}</p>
            <h1 className={styles.title}>{h1}</h1>
            <p className={styles.lead}>{description}</p>
            {hero}
          </section>
          {children}
          <Section title="Frequently asked questions"><Faq items={faq} /></Section>
          <CtaBand title="Teach Spanish verbs with ready-made interactive lessons" copy="SpanishCue lessons take one tense at a time, from regular forms to irregulars, with practice and conversation built in." primary={{ href: "/spanish-grammar-lessons", label: "See the grammar lessons" }} secondary={{ href: "/spanish-teacher-resources", label: "Teacher resources" }} />
        </div>
      </main>
      <GrowthFooter />
    </>
  );
}

export function VerbSearchEn() {
  return (
    <form className={cj.search} action="/buscar-verbo" method="get" role="search">
      <input type="hidden" name="lang" value="en" />
      <input aria-label="Find a Spanish verb" name="v" type="search" placeholder="Type a Spanish verb: tener, pedir, ir…" autoComplete="off" autoCapitalize="off" spellCheck={false} lang="es" required />
      <button className={styles.primaryButton} type="submit">Conjugate</button>
    </form>
  );
}

export function VerbLinksEn({ verbs, href }: { verbs: string[]; href: (verb: string) => string }) {
  return <ul className={cj.verbList}>{verbs.map((verb) => <li key={verb}><Link href={href(verb)} lang="es">{verb}</Link></li>)}</ul>;
}
