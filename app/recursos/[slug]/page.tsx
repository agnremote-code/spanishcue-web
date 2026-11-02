import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isFreeLesson, localLessonPath } from "../../access-policy";
import { conversationFamilyByLessonId } from "../../conversation-families/catalog";
import { conversationLessonHref } from "../../conversation-families/navigation";
import { GrowthFooter } from "../../growth/components";
import { breadcrumbSchema } from "../../growth/schema";
import { MATERIAL_ELE_PATH, eleLevels } from "../../material-ele/data";
import {
  RECURSOS_PATH,
  immersiveWorldListeningLevels,
  isImmersiveWorld,
  lessonForRecursoSlug,
  otherImmersiveWorldLessons,
  recursoDescription,
  recursoPathForLesson,
  recursoSlugForLesson,
  recursoTitle,
  recursoTypeLabel,
  relatedResourceLessons,
  resourceLessons,
  resourceLevelLabel,
  resourceLevels,
} from "../../resource-seo";
import { canonicalUrl, languageAlternates } from "../../seo";
import styles from "../../resources/resources.module.css";

type Props = { params: Promise<{ slug: string }> };

const PRICE_LABEL = "US$15,50 al mes";

export function generateStaticParams() {
  return resourceLessons.map((lesson) => ({ slug: recursoSlugForLesson(lesson) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const lesson = lessonForRecursoSlug(slug);
  if (!lesson) return {};
  const path = recursoPathForLesson(lesson);
  const title = recursoTitle(lesson);
  const description = recursoDescription(lesson);
  return {
    title,
    description,
    alternates: { canonical: canonicalUrl(path), languages: languageAlternates(path) },
    openGraph: { title, description, url: canonicalUrl(path), type: "article", locale: "es_ES", images: [{ url: lesson.image, alt: `Vista previa de la clase ${lesson.title}` }] },
    twitter: { card: "summary_large_image", title, description, images: [lesson.image] },
    robots: { index: true, follow: true },
  };
}

export default async function RecursoPage({ params }: Props) {
  const { slug } = await params;
  const lesson = lessonForRecursoSlug(slug);
  if (!lesson) notFound();

  const family = conversationFamilyByLessonId.get(lesson.id);
  const preview = family?.previewByLevel[lesson.level as keyof typeof family.previewByLevel];
  const lessonPath = family ? conversationLessonHref({ ...lesson, familyId: family.id }, lesson.level)! : localLessonPath(lesson) || "/";
  const level = resourceLevelLabel(lesson);
  const levels = family && family.availableLevels.length > 1 ? [...family.availableLevels] : resourceLevels(lesson);
  const world3d = isImmersiveWorld(lesson);
  const free = isFreeLesson(lesson.id);
  const listeningLevels = world3d ? immersiveWorldListeningLevels(lesson) : [];
  const related = world3d
    ? relatedResourceLessons(lesson, 12).filter((item) => !isImmersiveWorld(item)).slice(0, 6)
    : relatedResourceLessons(lesson);
  const otherWorlds = world3d ? otherImmersiveWorldLessons(lesson) : [];
  const typeLabel = recursoTypeLabel(lesson);
  const path = recursoPathForLesson(lesson);
  const goals = (family?.variants[lesson.level as keyof typeof family.variants]?.communicativeObjectives || lesson.goals).filter(Boolean);
  const speaking = lesson.speaking.filter(Boolean);
  const materialLevel = eleLevels.find((item) => item.code !== undefined && levels.includes(item.code));

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    name: lesson.title,
    description: recursoDescription(lesson),
    url: canonicalUrl(path),
    image: `https://spanishcue.com${preview?.image || lesson.image}`,
    inLanguage: "es",
    educationalLevel: levels.length > 1 ? levels : level,
    learningResourceType: world3d ? [typeLabel, "Mundo 3D interactivo"] : typeLabel,
    audience: { "@type": "EducationalAudience", educationalRole: "teacher" },
    isAccessibleForFree: free,
    provider: { "@type": "Organization", name: "SPANISHCUE", url: "https://spanishcue.com" },
  };
  const breadcrumbs = breadcrumbSchema([
    { name: "SpanishCue", href: "/" },
    { name: "Recursos para profesores", href: RECURSOS_PATH },
    { name: lesson.title, href: path },
  ]);

  return (
    <>
      <main className={styles.page} lang="es">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
        <div className={styles.shell}>
          <nav className={styles.topbar} aria-label="Navegación de recursos">
            <Link className={styles.brand} href="/">SPANISHCUE</Link>
            <Link className={styles.backLink} href={RECURSOS_PATH}>Todos los recursos</Link>
          </nav>

          <section className={styles.hero}>
            <div>
              <p className={styles.eyebrow}>{world3d ? "3D · " : ""}{typeLabel} · {level}</p>
              <h1 className={styles.title}>{lesson.title}</h1>
              <p className={styles.subtitle}>{preview?.hook || lesson.subtitle}</p>
              <div className={styles.meta} aria-label="Datos de la clase">
                <span className={styles.pill}>{level}</span>
                {world3d ? <span className={styles.pill}>Mundo 3D</span> : null}
                <span className={styles.pill}>{lesson.category}</span>
                <span className={styles.pill}>{lesson.duration}</span>
                <span className={styles.pill}>{free ? "Gratis" : "PRO"}</span>
                <span className={styles.pill}>Para compartir en pantalla</span>
              </div>
              <div className={styles.actions}>
                <Link className={styles.primaryButton} href={lessonPath}>{free ? "Abrir la clase gratis" : "Ver la clase"}</Link>
                <Link className={styles.secondaryButton} href="/pricing">Todas las clases · {PRICE_LABEL}</Link>
              </div>
            </div>
            <div className={styles.previewFrame}>
              <Image className={styles.previewImage} src={preview?.image || lesson.image} alt={`Vista previa de la clase interactiva ${lesson.title}`} width={960} height={720} sizes="(max-width: 900px) 100vw, 45vw" priority />
            </div>
          </section>

          <div className={styles.grid}>
            <div>
              <section className={styles.section}>
                <h2>Una {typeLabel.toLowerCase()} {level} lista para dar</h2>
                <p>
                  Este recurso de {lesson.category.toLowerCase()} de nivel {level} está pensado para profesores de español que quieren
                  una clase coherente, que se abre en el navegador y se da sin tener que montar el material desde cero.
                </p>
                <p>{preview?.explanation || lesson.explanation}</p>
              </section>

              {goals.length ? (
                <section className={styles.section}>
                  <h2>Qué practica el alumno</h2>
                  <ul>{goals.map((goal) => <li key={goal}>{goal}</li>)}</ul>
                </section>
              ) : null}

              {world3d ? (
                <section className={styles.section}>
                  <h2>Dentro del mundo 3D</h2>
                  <ul>
                    <li>Un mundo 3D que funciona en el navegador, sin descargas ni gafas. Compartes la pantalla en la clase online o lo proyectas en el aula.</li>
                    <li>Dos modos en el mismo mundo: <strong>Conversación</strong> para hablar y <strong>Comprensión auditiva</strong> para escuchar{listeningLevels.length && !levels.every((item) => listeningLevels.includes(item)) ? ` (escucha en ${listeningLevels.join(" · ")})` : ""}. Cambias de modo sin salir del mundo.</li>
                    <li>Niveles: {levels.join(" · ")}. Eliges el que corresponde a tu grupo.</li>
                    <li>{free ? "Una clase gratis de SpanishCue." : "Una clase PRO de SpanishCue."} Esta página muestra la premisa, los objetivos y la pregunta de calentamiento; las escenas, los diálogos y las escuchas están dentro de la clase.</li>
                  </ul>
                </section>
              ) : null}

              {preview?.warmup || lesson.warmup ? (
                <section className={styles.section}>
                  <h2>Para empezar la clase</h2>
                  <p>{preview?.warmup || lesson.warmup}</p>
                </section>
              ) : null}

              {speaking.length ? (
                <section className={styles.section}>
                  <h2>Para hablar</h2>
                  <ul>{speaking.map((item) => <li key={item}>{item}</li>)}</ul>
                </section>
              ) : null}

              {lesson.homework ? (
                <section className={styles.section}>
                  <h2>Tarea sugerida</h2>
                  <p>{lesson.homework}</p>
                </section>
              ) : null}

              <section className={styles.section}>
                <h2>Cómo usarla en clase</h2>
                <p>
                  Abre la clase, comparte la pantalla en la videollamada o proyéctala en el aula y sigue la secuencia preparada.
                  La consigna visual, el objetivo y la conversación están en el mismo lugar, con la guía para el profesor y
                  las respuestas ocultas para el alumno.
                </p>
              </section>

              {related.length ? (
                <section className={styles.section}>
                  <h2>Recursos relacionados</h2>
                  <div className={styles.relatedGrid}>
                    {related.map((item) => (
                      <Link className={styles.resourceCard} href={recursoPathForLesson(item)} key={item.id}>
                        <p className={styles.cardMeta}>{resourceLevelLabel(item)} · {item.category}</p>
                        <h3 className={styles.cardTitle}>{item.title}</h3>
                      </Link>
                    ))}
                  </div>
                </section>
              ) : null}

              {otherWorlds.length ? (
                <section className={styles.section}>
                  <h2>Más mundos 3D en español</h2>
                  <div className={styles.relatedGrid}>
                    {otherWorlds.map((item) => (
                      <Link className={styles.resourceCard} href={recursoPathForLesson(item)} key={item.id}>
                        <p className={styles.cardMeta}>3D · {resourceLevelLabel(item)} · {item.category}</p>
                        <h3 className={styles.cardTitle}>{item.title}</h3>
                      </Link>
                    ))}
                  </div>
                </section>
              ) : null}

              <section className={styles.section}>
                <h2>Más material ELE de este nivel</h2>
                <p>
                  <Link className={styles.textLink} href={materialLevel ? materialLevel.path : MATERIAL_ELE_PATH}>
                    {materialLevel ? `Actividades, ejercicios y fichas de ${materialLevel.code} →` : "Actividades, ejercicios y fichas de material ELE →"}
                  </Link>
                </p>
              </section>
            </div>

            <aside className={styles.sideCard}>
              <h2>Darla ahora</h2>
              <p>
                La clase interactiva completa está dentro de SpanishCue. Esta página te da el contexto para decidir
                si te sirve, sin mostrar la clase entera.
              </p>
              <div className={styles.actions}>
                <Link className={styles.primaryButton} href={lessonPath}>{free ? "Abrir la clase gratis" : "Ver la clase"}</Link>
                <Link className={styles.textLink} href="/pricing">Suscribirse · {PRICE_LABEL}</Link>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <GrowthFooter />
    </>
  );
}
