import Link from "next/link";
import { EleNewsletterInline } from "../../../PopularLinks";
import { notFound, permanentRedirect } from "next/navigation";
import { Breadcrumbs, Faq, GrowthFooter, JsonLd, Section } from "../../../../growth/components";
import { faqPageSchema, webPageSchema } from "../../../../growth/schema";
import { EleBuyBand, EleFeaturedLesson, EleLessonGrid, ElePageDates, ElePreviewVideo, EleTopbar, eleLessonCards, eleMetadata, elePreviewLesson, featuredGrammarLesson, pageImage } from "../../../components";
import { pageDates } from "../../../indice";
import { MATERIAL_ELE_PATH, eleLevels, elePageBySlug } from "../../../data";
import ShareSnippet from "../../../ShareSnippet";
import { EleFreeAudios, freeAudiosForLevel } from "../../../audios";
import { TemaCards, TemaGroupCards } from "../../../tema-components";
import { isPrunedPath, livePath } from "../../../../seo-prune";
import { retiredTemaLevelPaths, temaGroupById, temaLevelPageByPath, temaLevelPages, temaLevelsOf } from "../../../temas";
import { EleFichaLinks } from "../../../ficha-links";
import { fillCount, pageRewrites } from "../../../seo-rewrites";
import { RewriteSections } from "../../../rewrite-components";
import styles from "../../../../growth/growth.module.css";

type Props = { params: Promise<{ slug: string; tema: string; nivel: string }> };
export function generateStaticParams() { return temaLevelPages.map((page) => ({ slug: page.group, tema: page.slug, nivel: page.level.toLowerCase() })); }
export async function generateMetadata({ params }: Props) {
  const { slug, tema, nivel } = await params;
  const page = temaLevelPageByPath.get(`${MATERIAL_ELE_PATH}/${slug}/${tema}/${nivel}`);
  if (!page) return {};
  const rewrite = pageRewrites.get(page.path);
  const count = page.lessonIds.length;
  return eleMetadata(page.path, fillCount(rewrite?.title ?? page.title, count), fillCount(rewrite?.description ?? page.description, count), pageImage(page.lessonIds));
}

export default async function TemaLevelRoute({ params }: Props) {
  const { slug, tema, nivel } = await params;
  const path = `${MATERIAL_ELE_PATH}/${slug}/${tema}/${nivel}`;
  const page = temaLevelPageByPath.get(path);
  const retiredTo = retiredTemaLevelPaths.get(path);
  if (!page && retiredTo) permanentRedirect(livePath(retiredTo));
  if (!page) notFound();
  const group = temaGroupById.get(page.group)!;
  const rewrite = pageRewrites.get(page.path);
  const fill = (text: string) => fillCount(text, page.lessonIds.length);
  const title = fill(rewrite?.title ?? page.title);
  const description = fill(rewrite?.description ?? page.description);
  const faq = [...(rewrite?.faq ?? []), ...page.faq];
  const lessons = eleLessonCards(page.lessonIds);
  const freeLesson = lessons.find((lesson) => lesson.free);
  const featured = featuredGrammarLesson(page.lessonIds);
  const levelGuide = eleLevels.find((level) => level.code === page.level);
  const otherLevels = temaLevelsOf(page.tema).filter((other) => other.level !== page.level && !isPrunedPath(other.path));
  const lower = page.name.toLowerCase();
  const topic = elePageBySlug.get(page.slug);
  const audios = page.group === "formatos" && page.slug === "comprension-auditiva" ? freeAudiosForLevel(page.level) : [];
  const topicGuide = topic?.kind === "topic" ? topic : null;
  const dates = pageDates(page.path);
  const preview = elePreviewLesson(page.lessonIds);
  return (
    <>
      <main className={styles.page} lang="es">
        <div className={styles.shell}>
          <JsonLd data={webPageSchema({ pathname: page.path, name: title, description, about: [page.name, page.level, group.label, "ELE"], inLanguage: "es", educationalLevel: page.level, image: pageImage(page.lessonIds), dates })} />
          <JsonLd data={faqPageSchema(faq, "es")} />
          <EleTopbar current={MATERIAL_ELE_PATH} />
          <Breadcrumbs items={[{ name: "SpanishCue", href: "/" }, { name: "Material ELE", href: MATERIAL_ELE_PATH }, { name: group.label, href: group.path }, { name: page.name, href: page.tema.path }, { name: page.level, href: page.path }]} />
          <section className={styles.hero}>
            <p className={styles.eyebrow}>{group.label} · {page.parent} · {page.level}</p>
            <h1 className={styles.title}>{fill(rewrite?.h1 ?? page.h1)}</h1>
            <p className={styles.lead}>{fill(rewrite?.intro ?? page.intro)}</p>
            <div className={styles.heroActions}>
              <Link className={styles.primaryButton} href="#clases">Ver las clases</Link>
              {freeLesson ? <Link className={styles.secondaryButton} href={freeLesson.href}>Clase gratis: {freeLesson.title}</Link> : levelGuide ? <Link className={styles.secondaryButton} href={levelGuide.path}>Material {page.level} con clase gratis</Link> : null}
              <Link className={styles.secondaryButton} href={livePath(page.tema.path)}>{page.name}: todos los niveles</Link>
              {topicGuide ? <Link className={styles.secondaryButton} href={topicGuide.path}>Actividades de {lower} para clase</Link> : null}
            </div>
            <ElePageDates dates={dates} />
          </section>
          {preview ? <ElePreviewVideo lesson={preview} pathname={page.path} /> : null}
          {audios.length ? <EleFreeAudios audios={audios} pathname={page.path} title={audios.length > 1 ? `${audios.length} audios gratis de comprensión auditiva ${page.level}` : `Audio gratis de comprensión auditiva ${page.level}`} intro="Para escuchar ahora, sin registro: el audio, las preguntas con sus respuestas, preguntas para conversar y la transcripción." /> : null}
          {featured ? <EleFeaturedLesson lesson={featured} /> : null}
          <RewriteSections rewrite={rewrite} />
          <Section id="clases" title={`Clases de ${lower} para ${page.level}`} intro={page.order}>
            <EleLessonGrid lessons={lessons} compact={Boolean(rewrite)} />
          </Section>
          <EleNewsletterInline source={page.path} topic={`${lower} ${page.level}`} />
          <EleFichaLinks lessonIds={page.lessonIds} name={`${lower} ${page.level}`} />
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
          <Section title="Preguntas frecuentes"><Faq items={faq} /></Section>
          {otherLevels.length ? (
            <Section title={`${page.name} en otros niveles`}>
              <div className={styles.cardGrid}>
                {otherLevels.map((other) => <Link className={styles.levelCard} key={other.path} href={other.path}><em>{other.level}</em><b>{other.name} {other.level}</b><span>{other.lessonIds.length} clases{other.freeCount ? ` · ${other.freeCount} gratis` : ""}</span></Link>)}
              </div>
            </Section>
          ) : null}
          <Section title="Compartir">
            <ShareSnippet path={page.path} title={`${page.name} ${page.level}: clases de español`} description={description} />
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
