import { notFound } from "next/navigation";
import { Section } from "../../../growth/components";
import { EleExerciseBlock, eleMetadata } from "../../components";
import { ejercicioBySlug, ejercicioPages } from "../../actividades";
import { BancoFrame } from "../../banco-components";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return ejercicioPages.map((page) => ({ slug: page.slug })); }
export async function generateMetadata({ params }: Props) {
  const page = ejercicioBySlug.get((await params).slug);
  return page ? eleMetadata(page.path, page.title, page.description) : {};
}

export default async function EjercicioPage({ params }: Props) {
  const page = ejercicioBySlug.get((await params).slug);
  if (!page) notFound();
  return (
    <BancoFrame path={page.path} title={page.title} description={page.description} h1={page.h1} level={page.level} kicker="Ejercicio ELE con soluciones" parent={page.parent} faq={page.faq} about={[page.exercise.title, page.parent.label, "ejercicio ELE", page.level]}>
      <Section id="ejercicio" title={page.exercise.title} intro="Pulsa cada frase para ver la solución. El botón de PDF las abre todas antes de imprimir.">
        <EleExerciseBlock exercise={page.exercise} />
      </Section>
    </BancoFrame>
  );
}
