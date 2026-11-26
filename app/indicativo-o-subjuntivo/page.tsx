import { ConsolidatedExercise } from "../material-ele/ConsolidatedExercise";
import Link from "next/link";
import { Section } from "../growth/components";
import { eleMetadata } from "../material-ele/components";
import { EleNewsletterInline } from "../material-ele/PopularLinks";
import cj from "../conjugacion/conjugacion.module.css";
import MoodChooser from "./MoodChooser";
import { ExpresionCards, GUIDE_LINKS, ModoFrame } from "./components";
import { MODO_PATH, MOOD_GROUPS, mixedItems } from "./data";
import { expresiones } from "./expresiones";

const total = expresiones.reduce((sum, e) => sum + e.items.length, 0);
const TITLE = "Ejercicios de indicativo o subjuntivo interactivos | SpanishCue";
const DESCRIPTION = `${expresiones.length} expresiones con su regla y ${total} frases para elegir entre indicativo y subjuntivo: quiero que, ojalá, aunque, cuando, creo que… Con corrección al instante.`;
const FAQ = [
  { question: "¿Cuándo se usa el subjuntivo en español?", answer: "Cuando la frase no afirma un hecho: deseos (quiero que), finalidad (para que), emociones (me alegra que), valoraciones (es importante que), duda (dudo que), opiniones negadas (no creo que) y el futuro después de cuando, hasta que o en cuanto." },
  { question: "¿Y cuándo va indicativo?", answer: "Cuando se afirma algo como verdadero o como opinión propia: creo que, es verdad que, estoy seguro de que, porque, ya que y si + presente para condiciones reales." },
  { question: "¿Qué expresiones admiten los dos modos?", answer: "Cuando, aunque, hasta que, en cuanto, después de que, tal vez, las relativas (busco un piso que…), lo que y decir que. El modo cambia el significado, y cada página lo explica con ejemplos." },
  { question: "¿Los ejercicios son gratis?", answer: "Sí. Todas las páginas son abiertas y se pueden proyectar en clase o mandar como tarea con el enlace." },
];

export function generateMetadata() { return eleMetadata(MODO_PATH, TITLE, DESCRIPTION); }

export default function ModoHub() {
  const mixed = mixedItems().map(({ before, after, options, answer, correctLabel, wrongLabel, expr }) => ({ before, after, options, answer, correctLabel, wrongLabel, tag: expr }));
  return (
    <ModoFrame
      path={MODO_PATH} title={TITLE} description={DESCRIPTION} h1="¿Indicativo o subjuntivo? Ejercicios por expresión" kicker="Gramática · A2–C1"
      crumbs={[]} faq={FAQ} about={["indicativo o subjuntivo", "ejercicios de subjuntivo", "subjuntivo en español", "ELE"]}
    >
      {MOOD_GROUPS.map((group) => (
        <Section key={group.mood} title={group.title} intro={group.intro}>
          <ExpresionCards items={expresiones.filter((e) => e.mood === group.mood)} />
        </Section>
      ))}
      <Section id="mezcla" title="Prueba mezclada" intro="Doce frases de expresiones distintas. Si dudas en alguna, abre su página y repasa la regla.">
        <MoodChooser items={mixed} />
      </Section>
      <ConsolidatedExercise slug="indicativo-o-subjuntivo" />
      <EleNewsletterInline source={MODO_PATH} />
      <Section title="Para preparar la clase">
        <ul className={cj.verbList}>{GUIDE_LINKS.map((g) => <li key={g.href}><Link href={g.href}>{g.label}</Link></li>)}</ul>
      </Section>
    </ModoFrame>
  );
}
