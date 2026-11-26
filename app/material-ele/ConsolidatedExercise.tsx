import { Section } from "../growth/components";
import { ejercicioBySlug } from "./actividades";
import { EleExerciseBlock } from "./components";

/**
 * The answer-key exercise of /material-ele/ejercicio/<slug>, shown on the hub that now owns
 * its intent (SEO plan step 4, app/seo-prune.ts): the old URL redirects here, so its content
 * lives on in the destination instead of disappearing.
 */
export function ConsolidatedExercise({ slug }: { slug: string }) {
  const page = ejercicioBySlug.get(slug);
  if (!page) return null;
  return (
    <Section id="ficha-con-soluciones" title={`Ficha con soluciones: ${page.exercise.items.length} frases (${page.level})`} intro="Para hacer en clase o mandar de tarea: el alumno escribe en cada hueco, comprueba y ve la solución explicada.">
      <EleExerciseBlock exercise={page.exercise} />
    </Section>
  );
}
