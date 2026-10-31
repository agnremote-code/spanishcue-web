import type { Metadata } from "next";
import Link from "next/link";
import ResourceCatalog from "../resources/ResourceCatalog";
import { isFreeLesson } from "../access-policy";
import { GrowthFooter } from "../growth/components";
import { canonicalUrl, languageAlternates } from "../seo";
import styles from "../resources/resources.module.css";
import { RECURSOS_PATH, recursoPathForLesson, recursoTypePluralLabel, resourceLessons } from "../resource-seo";

export const metadata: Metadata = {
  title: "Recursos para profesores de español: clases listas de A1 a C2 | SPANISHCUE",
  description:
    "Más de 300 clases de español listas para dar: gramática, conversación, comprensión auditiva, pronunciación y vocabulario de A1 a C2, para compartir en pantalla.",
  alternates: { canonical: canonicalUrl(RECURSOS_PATH), languages: languageAlternates(RECURSOS_PATH) },
  robots: { index: true, follow: true },
};

export default function RecursosPage() {
  return (
    <>
      <main className={styles.page} lang="es">
        <div className={styles.shell}>
          <nav className={styles.topbar} aria-label="Navegación de recursos">
            <Link className={styles.brand} href="/">SPANISHCUE</Link>
            <Link className={styles.backLink} href="/material-ele">Material ELE</Link>
          </nav>

          <header className={styles.catalogHeader}>
            <p className={styles.eyebrow}>BIBLIOTECA DE RECURSOS PARA PROFESORES DE ELE</p>
            <h1>Clases de español listas para dar, por nivel y por destreza.</h1>
            <p>
              Cada recurso muestra el nivel, el objetivo, qué practica el alumno y el enlace directo a la clase
              interactiva de SpanishCue. Las clases marcadas como gratis se abren sin registro.
            </p>
            <p>
              <Link className={styles.backLink} href="/material-ele">Actividades y fichas de material ELE →</Link>
            </p>
          </header>

          <ResourceCatalog locale="es" items={resourceLessons.map((lesson) => ({
            id: lesson.id, title: lesson.title, subtitle: lesson.subtitle, category: lesson.category,
            categoryLabel: recursoTypePluralLabel(lesson), level: lesson.level, levels: lesson.levels,
            displayLevel: lesson.displayLevel, duration: lesson.duration, path: recursoPathForLesson(lesson),
            image: lesson.image, free: isFreeLesson(lesson.id), familyId: lesson.familyId, previewByLevel: lesson.previewByLevel,
          }))} />
        </div>
      </main>
      <GrowthFooter />
    </>
  );
}
