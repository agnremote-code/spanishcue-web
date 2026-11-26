import Link from "next/link";
import { EleNewsletterInline } from "../PopularLinks";
import { notFound } from "next/navigation";
import { Breadcrumbs, Faq, GrowthFooter, JsonLd, Section } from "../../growth/components";
import { courseSchema, faqPageSchema, webPageSchema } from "../../growth/schema";
import { EleActivities, EleBuyBand, EleExerciseBlock, EleFeaturedLesson, EleLessonGrid, EleLevelNav, ElePageDates, ElePreviewVideo, EleQuestions, EleTopbar, EleTopicCards, PRICE_LABEL, PRICING_PATH, eleLessonCards, eleMetadata, elePreviewLesson, featuredGrammarLesson, pageImage } from "../components";
import { pageDates } from "../indice";
import { MATERIAL_ELE_PATH, elePageBySlug, elePages } from "../data";
import { teachingGuidesForTopic } from "../guias";
import { ejercicioBySlug } from "../actividades";
import { EleFreeAudios, freeAudioSamples } from "../audios";
import { TemaGroupIndexPage } from "../tema-group-page";
import { isPrunedPath, livePath } from "../../seo-prune";
import { temaGroupById, temaLevelsForTopic, temasByGroup, type TemaGroupId } from "../temas";
import { EleFichaLinks } from "../ficha-links";
import { fillCount, pageRewrites } from "../seo-rewrites";
import { RewriteSections } from "../rewrite-components";
import styles from "../../growth/growth.module.css";
import PrintButton from "../PrintButton";
import print from "../print.module.css";

/** Topic guides that have an interactive mini-app family: one rule and one quiz per use. */
const MINI_APPS: Record<string, { href: string; label: string; detail: string }> = {
  "ser-y-estar": { href: "/ser-o-estar", label: "¿Ser o estar? Ejercicios por uso y por adjetivo", detail: "15 usos y 18 adjetivos que cambian de significado" },
  "por-y-para": { href: "/por-o-para", label: "¿Por o para? Ejercicios por uso", detail: "15 usos, cada uno con su regla" },
  "indefinido-e-imperfecto": { href: "/indefinido-o-imperfecto", label: "¿Indefinido o imperfecto? Ejercicios por marcador", detail: "26 marcadores temporales" },
  subjuntivo: { href: "/indicativo-o-subjuntivo", label: "¿Indicativo o subjuntivo? Ejercicios por expresión", detail: "36 expresiones" },
  imperativo: { href: "/ejercicios-de-imperativo", label: "Ejercicios del imperativo por regla", detail: "6 ejercicios: tú, irregulares, negativo, usted, pronombres y reflexivos" },
  gustar: { href: "/ejercicios-de-gustar", label: "Ejercicios de gustar y verbos como gustar", detail: "8 ejercicios: gusta o gustan, pronombres, encantar, doler…" },
  "pronombres-de-objeto": { href: "/ejercicios-de-pronombres", label: "Ejercicios de objeto directo e indirecto", detail: "4 ejercicios: lo/la, le/les, se lo y posición" },
  preposiciones: { href: "/verbos-con-preposicion", label: "Verbos con preposición: ejercicios", detail: "48 verbos con su preposición" },
};

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return [...elePages.map((page) => ({ slug: page.slug })), ...[...temaGroupById.keys()].map((slug) => ({ slug }))];
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const page = elePageBySlug.get(slug);
  const group = temaGroupById.get(slug as TemaGroupId);
  const rewrite = page ? pageRewrites.get(page.path) : undefined;
  const count = page?.lessonIds.length ?? 0;
  return page ? eleMetadata(page.path, fillCount(rewrite?.title ?? page.title, count), fillCount(rewrite?.description ?? page.description, count), pageImage(page.lessonIds)) : group ? eleMetadata(group.path, group.title, group.description, pageImage(temasByGroup(group.id).flatMap((tema) => tema.lessonIds))) : {};
}

export default async function ElePage({ params }: Props) {
  const { slug } = await params;
  const page = elePageBySlug.get(slug);
  if (!page) {
    const group = temaGroupById.get(slug as TemaGroupId);
    if (group) return <TemaGroupIndexPage group={group} />;
    notFound();
  }
  const rewrite = pageRewrites.get(page.path);
  const fill = (text: string) => fillCount(text, page.lessonIds.length);
  const title = fill(rewrite?.title ?? page.title);
  const description = fill(rewrite?.description ?? page.description);
  const faq = [...(rewrite?.faq ?? []), ...page.faq];
  const lessons = eleLessonCards(page.lessonIds);
  const freeLesson = lessons.find((lesson) => lesson.free);
  const featured = featuredGrammarLesson(page.lessonIds);
  const dates = pageDates(page.path);
  const preview = elePreviewLesson(page.lessonIds);
  const levelPages = temaLevelsForTopic(page.slug).filter((level) => !isPrunedPath(level.path));
  const ejercicio = ejercicioBySlug.get(page.slug);
  // A long topic exercise lives in full on its own page (the one built for «ejercicios de …» searches);
  // the guide shows the first sentences so the two pages are not duplicates of each other.
  const exercisePreview = page.kind === "topic" && ejercicio && page.exercise && page.exercise.items.length > 12 ? { ...page.exercise, items: page.exercise.items.slice(0, 8) } : undefined;
  const fichaIds = [...new Set([...page.lessonIds, ...(temasByGroup("gramatica").find((tema) => tema.slug === page.slug)?.lessonIds ?? [])])];
  return (
    <>
      <main className={styles.page} lang="es">
        <div className={styles.shell}>
          <JsonLd data={webPageSchema({ pathname: page.path, name: title, description, about: page.keyPoints.items, inLanguage: "es", ...(page.code ? { educationalLevel: page.code } : {}), image: pageImage(page.lessonIds), dates })} />
          {page.kind === "level" && page.code ? <JsonLd data={courseSchema({ pathname: page.path, name: title, description, educationalLevel: page.code, lessons: lessons.map((lesson) => ({ name: lesson.title, href: lesson.href })) })} /> : null}
          <JsonLd data={faqPageSchema(faq, "es")} />
          <EleTopbar current={page.slug === "preguntas-de-conversacion" || page.slug === "juegos-para-clase-de-espanol" ? page.path : MATERIAL_ELE_PATH} />
          <Breadcrumbs items={[{ name: "SpanishCue", href: "/" }, { name: "Material ELE", href: MATERIAL_ELE_PATH }, { name: page.label, href: page.path }]} />
          <p className={print.printOnly}>
            <strong>Ficha de SpanishCue · {page.label}</strong><br />
            Más actividades y clases interactivas: spanishcue.com{page.path}
          </p>
          <section className={styles.hero}>
            <p className={styles.eyebrow}>{page.kicker}</p>
            <h1 className={styles.title}>{fill(rewrite?.h1 ?? page.h1)}</h1>
            <p className={styles.lead}>{fill(rewrite?.intro ?? page.intro)}</p>
            <div className={`${styles.heroActions} ${print.noPrint}`}>
              <Link className={styles.primaryButton} href="#actividades">Ver las actividades</Link>
              {ejercicio ? <Link className={styles.secondaryButton} href={livePath(ejercicio.path)}>Ejercicios con soluciones</Link> : null}
              <PrintButton />
              {freeLesson ? <Link className={styles.secondaryButton} href={freeLesson.href}>Clase gratis: {freeLesson.title}</Link> : <Link className={styles.secondaryButton} href="/demo/noche-abierta">Probar una clase gratis</Link>}
            </div>
            <ElePageDates dates={dates} />
          </section>
          {page.kind === "level" ? <EleLevelNav current={page.slug} /> : null}
          {preview ? <div className={print.noPrint}><ElePreviewVideo lesson={preview} pathname={page.path} /></div> : null}
          {featured ? <EleFeaturedLesson lesson={featured} /> : null}

          <Section title={page.keyPoints.title}>
            <div className={styles.panel}><ul>{page.keyPoints.items.map((item) => <li key={item}>{item}</li>)}</ul></div>
          </Section>

          <RewriteSections rewrite={rewrite} />

          {page.questions ? (
            <Section id="preguntas" title="60 preguntas de conversación por nivel" intro="Elige el nivel de tu alumno. Las preguntas suben de dificultad dentro de cada lista.">
              <EleQuestions sets={page.questions} />
            </Section>
          ) : null}

          <Section id="actividades" title={`${page.activities.length} actividades listas para usar`} intro="Cada actividad tiene pasos, frases para el alumno, una respuesta modelo y una forma de corregir. La respuesta modelo es solo una posibilidad: lo que el alumno quiere decir guía la corrección.">
            <EleActivities activities={page.activities} />
          </Section>

          <div className={print.noPrint}><EleNewsletterInline source={page.path} topic={page.kind === "topic" ? page.label.toLowerCase() : undefined} /></div>

          {page.exercise ? (
            <Section id="ejercicio" title={page.exercise.title} intro={exercisePreview ? `Las primeras ${exercisePreview.items.length} de ${page.exercise.items.length} frases. Las ${page.exercise.items.length}, con corrección automática y ficha en PDF, están en la página del ejercicio.` : undefined}>
              <EleExerciseBlock exercise={exercisePreview ?? page.exercise} />
              {ejercicio ? <p className={print.noPrint}><Link className={styles.textLink} href={livePath(ejercicio.path)}>Ejercicio de {page.kind === "level" ? `nivel ${page.code}` : page.label.toLowerCase()} {exercisePreview ? "completo" : "en página propia"}, para mandar al alumno: {ejercicio.exercise.items.length} frases con corrección automática y soluciones →</Link></p> : null}
            </Section>
          ) : null}

          {MINI_APPS[page.slug] ? (
            <Section id="practica" title="Práctica interactiva por reglas" intro={`${MINI_APPS[page.slug].detail}, con corrección al instante. Abierto y sin registro.`}>
              <p><Link className={styles.textLink} href={MINI_APPS[page.slug].href}>{MINI_APPS[page.slug].label} →</Link></p>
            </Section>
          ) : null}

          <Section title="Errores frecuentes al enseñarlo">
            <div className={styles.panel}><ul>{page.errors.map((item) => <li key={item}>{item}</li>)}</ul></div>
          </Section>

          <div className={print.noPrint}>
          <Section id="clases" title="Clases interactivas para continuar" intro={`Las clases GRATIS se abren ya. Las PRO están incluidas en la suscripción de ${PRICE_LABEL}.`}>
            <EleLessonGrid lessons={lessons} />
            <p><Link className={styles.textLink} href={PRICING_PATH}>Desbloquear todas las clases →</Link></p>
          </Section>
          </div>

          {page.kind === "topic" ? <div className={print.noPrint}><EleFichaLinks lessonIds={fichaIds} name={page.label.toLowerCase()} /></div> : null}

          {page.slug === "comprension-auditiva" ? <div className={print.noPrint}><EleFreeAudios audios={freeAudioSamples()} pathname={page.path} title="Audios gratis para probar: A1, A2 y B1" intro="Tres audios para escuchar ahora, sin registro, con preguntas, respuestas y transcripción. En cada página de nivel hay más." /></div> : null}

          {page.kind === "topic" && levelPages.length ? (
            <div className={print.noPrint}>
              <Section id="por-nivel" title={`${page.label} por nivel`} intro="Las clases de este tema, separadas por nivel del alumno.">
                <div className={styles.cardGrid}>
                  {levelPages.map((level) => <Link className={styles.levelCard} key={level.path} href={level.path}><em>{level.level}</em><b>{level.name} {level.level}</b><span>{level.lessonIds.length} clases{level.freeCount ? ` · ${level.freeCount} gratis` : ""}</span></Link>)}
                </div>
              </Section>
            </div>
          ) : null}

          <Section title="Preguntas frecuentes">
            <Faq items={faq} />
          </Section>

          <div className={print.noPrint}>
            <Section title="Sigue con">
              {teachingGuidesForTopic(page.slug).map((guide) => (
                <p key={guide.path}>Guía para profesores: <Link className={styles.textLink} href={guide.path}>{guide.h1} →</Link></p>
              ))}
              <EleTopicCards slugs={page.related} />
            </Section>
            <EleBuyBand />
          </div>
          <p className={print.printOnly}>Ficha gratuita de SpanishCue. Clases interactivas de A1 a C2 para compartir en pantalla: spanishcue.com/material-ele</p>
        </div>
      </main>
      <GrowthFooter />
    </>
  );
}
