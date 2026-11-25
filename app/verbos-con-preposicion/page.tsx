import Link from "next/link";
import { Section } from "../growth/components";
import { eleMetadata } from "../material-ele/components";
import { EleNewsletterInline } from "../material-ele/PopularLinks";
import cj from "../conjugacion/conjugacion.module.css";
import styles from "../growth/growth.module.css";
import ChoiceQuiz from "../mini-apps/ChoiceQuiz";
import { MiniAppFrame } from "../mini-apps/Frame";
import { PREP_GUIDES, VerbCards } from "./components";
import { PREP_PATH, hubQuiz, prepGroups } from "./data";
import { verbosPrep } from "./verbos";

const TITLE = "Verbos con preposición en español: lista y ejercicios | SpanishCue";
const DESCRIPTION = `${verbosPrep.length} verbos con su preposición (soñar con, depender de, pensar en, empezar a…), el error típico de cada uno y ejercicios para elegir la preposición.`;
const FAQ = [
  { question: "¿Qué son los verbos con preposición?", answer: "Verbos que piden una preposición fija delante de su complemento: soñar con, depender de, pensar en, empezar a. Cambiar la preposición cambia el sentido o produce un error." },
  { question: "¿Cuáles son los errores más comunes?", answer: "Los calcos del inglés: «depender en» (depend on), «consistir de» (consist of), «soñar en» (dream about), «pensar de» (think of). En español se dice depender de, consistir en, soñar con y pensar en." },
  { question: "¿Cómo se aprenden?", answer: "Como una sola unidad, verbo y preposición juntos, con frases completas. Cada página tiene ejemplos y un ejercicio que mezcla verbos para obligar a decidir." },
  { question: "¿Los ejercicios son gratis?", answer: "Sí. Todas las páginas son abiertas y se pueden proyectar en clase o mandar como tarea con el enlace." },
];

export function generateMetadata() { return eleMetadata(PREP_PATH, TITLE, DESCRIPTION); }

export default function PrepHub() {
  return (
    <MiniAppFrame
      path={PREP_PATH} title={TITLE} description={DESCRIPTION} h1="Verbos con preposición: lista y ejercicios" kicker="Gramática · A1–B2"
      crumbs={[{ name: "Verbos con preposición", href: PREP_PATH }]} faq={FAQ}
      about={["verbos con preposición", "régimen preposicional", "preposiciones en español", "ELE"]}
    >
      {prepGroups.map((g) => (
        <Section key={g.p} title={`Verbos con «${g.p}»`}>
          <VerbCards verbs={g.verbs} />
          <p className={styles.footnote}><Link className={styles.textLink} href={g.path}>Lista y ejercicio de los verbos con «{g.p}»</Link></p>
        </Section>
      ))}
      <Section id="mezcla" title="Prueba mezclada" intro="Doce frases con verbos distintos. Si dudas en alguna, abre su página.">
        <ChoiceQuiz items={hubQuiz()} label="Elige la preposición" />
      </Section>
      <EleNewsletterInline source={PREP_PATH} />
      <Section title="Para preparar la clase">
        <ul className={cj.verbList}>{PREP_GUIDES.map((g) => <li key={g.href}><Link href={g.href}>{g.label}</Link></li>)}</ul>
      </Section>
    </MiniAppFrame>
  );
}
