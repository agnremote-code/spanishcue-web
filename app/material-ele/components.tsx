import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { catalogLessons } from "../conversation-families/catalog";
import { lessonCards, type LessonCardData } from "../growth/lessons";
import { canonicalUrl } from "../seo";
import { socialPreviewImage, socialPreviewUrl } from "../social-preview";
import { MATERIAL_ELE_PATH, eleLevels, eleTopics, elePageBySlug, type EleActivity, type EleExercise, type EleQuestionSet } from "./data";
import { actividadPathByName } from "./actividades";
import styles from "../growth/growth.module.css";
import grammar from "../growth/grammar.module.css";
import ele from "./material-ele.module.css";

export const PRICING_PATH = "/pricing";
export const PRICE_LABEL = "US$15,50 al mes";

export function eleMetadata(path: string, title: string, description: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: canonicalUrl(path) },
    robots: { index: true, follow: true },
    openGraph: { title, description, url: canonicalUrl(path), type: "website", locale: "es_ES", images: [socialPreviewImage] },
    twitter: { card: "summary_large_image", title, description, images: [socialPreviewUrl] },
  };
}

const topLinks = [
  { href: MATERIAL_ELE_PATH, label: "Material ELE" },
  { href: `${MATERIAL_ELE_PATH}/preguntas-de-conversacion`, label: "Conversación" },
  { href: `${MATERIAL_ELE_PATH}/juegos-para-clase-de-espanol`, label: "Juegos" },
  { href: "/", label: "Biblioteca" },
  { href: "/para-profesores", label: "Para profesores" },
];

export function EleTopbar({ current }: { current?: string }) {
  return (
    <header className={styles.topbar}>
      <Link className={styles.brand} href="/" aria-label="Inicio de SpanishCue">SPANISHCUE</Link>
      <nav className={styles.topnav} aria-label="Material ELE">
        {topLinks.map((link) => (
          <Link href={link.href} key={link.href} aria-current={link.href === current ? "page" : undefined}>{link.label}</Link>
        ))}
        <Link className={ele.navCta} href={PRICING_PATH}>Suscribirse</Link>
      </nav>
    </header>
  );
}

const categoryLabel = new Map(catalogLessons.map((lesson) => [lesson.id, lesson.category]));

/** Catalog cards with Spanish labels: free lessons first, unknown ids dropped. */
export function eleLessonCards(ids: readonly number[]): LessonCardData[] {
  return lessonCards(ids).map((card) => ({ ...card, category: categoryLabel.get(card.id) ?? card.category }));
}

export function EleLessonGrid({ lessons }: { lessons: LessonCardData[] }) {
  if (!lessons.length) return null;
  return (
    <div className={styles.lessonGrid}>
      {lessons.map((lesson) => (
        <Link className={styles.lessonCard} href={lesson.href} key={lesson.id}>
          <Image src={lesson.image} alt={`Vista previa de la clase interactiva ${lesson.title}`} width={720} height={450} loading="lazy" sizes="(max-width: 640px) 92vw, (max-width: 1000px) 45vw, 25vw" />
          <div className={styles.lessonBody}>
            <div className={styles.lessonMeta}>
              <span className={lesson.free ? styles.badgeFree : styles.badgePro}>{lesson.free ? "GRATIS" : "PRO"}</span>
              <span>{lesson.level} · {lesson.category} · {lesson.duration}</span>
            </div>
            <h3>{lesson.title}</h3>
            <p>{lesson.subtitle}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export function EleActivities({ activities }: { activities: EleActivity[] }) {
  return (
    <div className={grammar.activityGrid}>
      {activities.map((activity) => (
        <article className={grammar.activity} key={activity.name}>
          <div className={grammar.activityHeader}><div><h3>{activity.name}</h3><small>{activity.minutes} minutos · {activity.goal}</small></div></div>
          <div className={grammar.activityBody}>
            <ol>{activity.steps.map((step) => <li key={step}>{step}</li>)}</ol>
            <div>
              {activity.prompts.map((prompt) => <p className={grammar.prompt} key={prompt}>{prompt}</p>)}
              <p className={grammar.model}><strong>Respuesta modelo: </strong>{activity.model}</p>
              <p className={grammar.feedback}><strong>Corrección: </strong>{activity.correction}</p>
            </div>
          </div>
          <p className={grammar.teacherTip}><strong>Online o en grupo: </strong>{activity.online}</p>
          {actividadPathByName.has(activity.name) ? <p><Link href={actividadPathByName.get(activity.name)!}>Ficha de esta actividad para imprimir →</Link></p> : null}
        </article>
      ))}
    </div>
  );
}

export function EleExerciseBlock({ exercise }: { exercise: EleExercise }) {
  return (
    <div className={ele.exercise}>
      <p>{exercise.instructions}</p>
      <ol>
        {exercise.items.map((item) => (
          <li key={item.q}>
            <details>
              <summary>{item.q}</summary>
              <p><strong>Solución: </strong>{item.a}</p>
            </details>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function EleQuestions({ sets }: { sets: EleQuestionSet[] }) {
  return (
    <div className={ele.questionGrid}>
      {sets.map((set) => (
        <article className={styles.panel} key={set.level} id={`preguntas-${set.level.toLowerCase()}`}>
          <h3>Preguntas de conversación {set.level}</h3>
          <ol>{set.items.map((item) => <li key={item}>{item}</li>)}</ol>
        </article>
      ))}
    </div>
  );
}

export function EleLevelNav({ current }: { current?: string }) {
  return (
    <nav className={grammar.levelNav} aria-label="Material ELE por nivel">
      {eleLevels.map((level) => (
        <Link key={level.slug} href={level.path} aria-current={current === level.slug ? "page" : undefined}><b>{level.code}</b><span>Material ELE</span></Link>
      ))}
    </nav>
  );
}

export function EleTopicCards({ slugs }: { slugs?: string[] }) {
  const pages = slugs ? slugs.map((slug) => elePageBySlug.get(slug)).filter((page) => page !== undefined) : eleTopics;
  return (
    <div className={styles.cardGrid}>
      {pages.map((page) => (
        <Link className={styles.levelCard} key={page.path} href={page.path}>
          <em>{page.kicker}</em>
          <b>{page.h1}</b>
          <span>{page.activities.length} actividades listas{page.exercise ? " · ejercicio con soluciones" : ""}{page.questions ? " · 60 preguntas" : ""}</span>
        </Link>
      ))}
    </div>
  );
}

const LIVE_CLASS_STEPS = ["Entender", "Explorar", "Practicar", "Escuchar", "Conversar", "Escribir", "Cerrar"];

/** The page's first grammar class, shown above the activities as the ready-to-teach option. */
export function featuredGrammarLesson(ids: readonly number[]): LessonCardData | undefined {
  const id = ids.find((lessonId) => categoryLabel.get(lessonId) === "Gramática");
  return id === undefined ? undefined : eleLessonCards([id])[0];
}

export function EleFeaturedLesson({ lesson }: { lesson: LessonCardData }) {
  return (
    <section className={ele.featured} aria-label="Clase completa lista para dar">
      <Link href={lesson.href}>
        <Image src={lesson.image} alt={`Vista previa de la clase ${lesson.title}`} width={720} height={450} sizes="(max-width: 760px) 92vw, 45vw" />
      </Link>
      <div>
        <span className={ele.featuredKicker}>Clase completa lista para dar · {lesson.level} · {lesson.free ? "GRATIS" : "PRO"}</span>
        <h2>{lesson.title}</h2>
        <p>{lesson.subtitle}</p>
        <p>La compartes en pantalla y la das tal cual: teoría primero, práctica con respuestas ocultas, audio, conversación y escritura.</p>
        <ol className={ele.steps}>{LIVE_CLASS_STEPS.map((step, index) => <li key={step}>{String(index + 1).padStart(2, "0")} {step}</li>)}</ol>
        <div className={styles.heroActions}>
          {lesson.free ? (
            <Link className={styles.primaryButton} href={lesson.href}>Abrir la clase gratis</Link>
          ) : (
            <>
              <Link className={ele.buyButton} href={PRICING_PATH}>Desbloquear · {PRICE_LABEL}</Link>
              <Link className={styles.secondaryButton} href={lesson.href}>Ver qué incluye</Link>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export function EleBuyBand() {
  return (
    <section className={styles.ctaBand} aria-label="Suscribirse a SpanishCue PRO">
      <h2>Todas las clases, todos los niveles, {PRICE_LABEL}.</h2>
      <p>Gramática de A1 a C2, mundos 3D de conversación, comprensión auditiva y seguimiento de cada alumno. Pruebas gratis las clases marcadas GRATIS y te suscribes cuando quieras. Puedes cancelar cuando quieras.</p>
      <div className={styles.heroActions}>
        <Link className={ele.buyButton} href={PRICING_PATH}>Suscribirse · {PRICE_LABEL}</Link>
        <Link className={styles.secondaryButton} href="/demo/noche-abierta">Probar una clase gratis</Link>
      </div>
    </section>
  );
}
