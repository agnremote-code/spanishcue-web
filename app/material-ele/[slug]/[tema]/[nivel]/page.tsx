import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs, Faq, GrowthFooter, JsonLd, Section } from "../../../../growth/components";
import { faqPageSchema, webPageSchema } from "../../../../growth/schema";
import { EleBuyBand, EleFeaturedLesson, EleLessonGrid, EleTopbar, eleLessonCards, eleMetadata, featuredGrammarLesson } from "../../../components";
import { MATERIAL_ELE_PATH, eleLevels } from "../../../data";
import ShareSnippet from "../../../ShareSnippet";
import { TemaCards, TemaGroupCards } from "../../../tema-components";
import { temaGroupById, temaLevelPageByPath, temaLevelPages, temaLevelsOf } from "../../../temas";
import styles from "../../../../growth/growth.module.css";

type Props = { params: Promise<{ slug: string; tema: string; nivel: string }> };
export function generateStaticParams() { return temaLevelPages.map((page) => ({ slug: page.group, tema: page.slug, nivel: page.level.toLowerCase() })); }
export async function generateMetadata({ params }: Props) {
  const { slug, tema, nivel } = await params;
  const page = temaLevelPageByPath.get(`${MATERIAL_ELE_PATH}/${slug}/${tema}/${nivel}`);
  return page ? eleMetadata(page.path, page.title, page.description) : {};
}

export default async function TemaLevelRoute({ params }: Props) {
  const { slug, tema, nivel } = await params;
  const page = temaLevelPageByPath.get(`${MATERIAL_ELE_PATH}/${slug}/${tema}/${nivel}`);
  if (!page) notFound();
  const group = temaGroupById.get(page.group)!;
  const lessons = eleLessonCards(page.lessonIds);
  const freeLesson = lessons.find((lesson) => lesson.free);
  const featured = featuredGrammarLesson(page.lessonIds);
  const levelGuide = eleLevels.find((level) => level.code === page.level);
  const otherLevels = temaLevelsOf(page.tema).filter((other) => other.level !== page.level);
  const lower = page.name.toLowerCase();
  return (
    <>
      <main className={styles.page} lang="es">
        <div className={styles.shell}>
          <JsonLd data={webPageSchema({ pathname: page.path, name: page.title, description: page.description, about: [page.name, page.level, group.label, "ELE"], inLanguage: "es", educationalLevel: page.level })} />
          <JsonLd data={faqPageSchema(page.faq, "es")} />
          <EleTopbar current={MATERIAL_ELE_PATH} />
          <Breadcrumbs items={[{ name: "SpanishCue", href: "/" }, { name: "Material ELE", href: MATERIAL_ELE_PATH }, { name: group.label, href: group.path }, { name: page.name, href: page.tema.path }, { name: page.level, href: page.path }]} />
          <section className={styles.hero}>
            <p className={styles.eyebrow}>{group.label} · {page.parent} · {page.level}</p>
            <h1 className={styles.title}>{page.h1}</h1>
            <p className={styles.lead}>{page.intro}</p>
            <div className={styles.heroActions}>
              <Link className={styles.primaryButton} href="#clases">Ver las clases</Link>
              {freeLesson ? <Link className={styles.secondaryButton} href={freeLesson.href}>Clase gratis: {freeLesson.title}</Link> : levelGuide ? <Link className={styles.secondaryButton} href={levelGuide.path}>Material {page.level} con clase gratis</Link> : null}
              <Link className={styles.secondaryButton} href={page.tema.path}>{page.name}: todos los niveles</Link>
            </div>
          </section>
          {featured ? <EleFeaturedLesson lesson={featured} /> : null}
          <Section id="clases" title={`Clases de ${lower} para ${page.level}`} intro={page.order}>
            <EleLessonGrid lessons={lessons} />
          </Section>
          {page.goals.length ? (
            <Section title={`Qué aprende un alumno de ${page.level}`} intro="Objetivos tomados de las propias clases.">
              <div className={styles.panel}><ul>{page.goals.map((goal) => <li key={goal}>{goal}</li>)}</ul></div>
            </Section>
          ) : null}
          {page.warmups.length || page.speaking.length ? (
            <Section title="Para empezar y para conversar">
              <div className={styles.panel}>
                {page.warmups.length ? <><h3>Para empezar</h3><ul>{page.warmups.map((item) => <li key={item}>{item}</li>)}</ul></> : null}
                {page.speaking.length ? <><h3>Para conversar</h3><ul>{page.speaking.map((item) => <li key={item}>{item}</li>)}</ul></> : null}
              </div>
            </Section>
          ) : null}
          <Section title="Preguntas frecuentes"><Faq items={page.faq} /></Section>
          {otherLevels.length ? (
            <Section title={`${page.name} en otros niveles`}>
              <div className={styles.cardGrid}>
                {otherLevels.map((other) => <Link className={styles.levelCard} key={other.path} href={other.path}><em>{other.level}</em><b>{other.name} {other.level}</b><span>{other.lessonIds.length} clases{other.freeCount ? ` · ${other.freeCount} gratis` : ""}</span></Link>)}
              </div>
            </Section>
          ) : null}
          <Section title="Compartir">
            <ShareSnippet path={page.path} title={`${page.name} ${page.level}: clases de español`} description={page.description} />
          </Section>
          <Section title={`Más temas de ${group.label.toLowerCase()}`}>
            <TemaCards pages={temaLevelPages.filter((other) => other.level === page.level && other.slug !== page.slug).slice(0, 8).map((other) => other.tema)} />
            <TemaGroupCards current={page.group} />
          </Section>
          <EleBuyBand />
        </div>
      </main>
      <GrowthFooter />
    </>
  );
}
