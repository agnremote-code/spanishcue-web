import Link from "next/link";
import { Section } from "../growth/components";
import { eleMetadata } from "../material-ele/components";
import { EleNewsletterInline } from "../material-ele/PopularLinks";
import cj from "../conjugacion/conjugacion.module.css";
import MoodChooser from "../indicativo-o-subjuntivo/MoodChooser";
import { MiniAppFrame } from "../mini-apps/Frame";
import { MarcadorCards, PASADO_GUIDES } from "./components";
import { PASADO_PATH, USO_GROUPS, pasadoMixed } from "./data";
import { marcadores } from "./marcadores";

const total = marcadores.reduce((n, m) => n + m.items.length, 0);
const TITLE = "Indefinido o imperfecto: ejercicios por marcador temporal | SpanishCue";
const DESCRIPTION = `${marcadores.length} marcadores temporales (ayer, de repente, mientras, siempre, cuando…) con su regla y ${total} frases para elegir entre indefinido e imperfecto.`;
const FAQ = [
  { question: "¿Cuándo se usa el pretérito indefinido?", answer: "Para contar hechos terminados en un momento concreto o una secuencia de acciones: ayer, anoche, el año pasado, de repente, un día, primero… luego." },
  { question: "¿Y el pretérito imperfecto?", answer: "Para describir situaciones, costumbres y el fondo de una historia: todos los días, normalmente, de niño, antes, mientras, la hora y la edad." },
  { question: "¿Qué marcadores admiten los dos tiempos?", answer: "Siempre, cuando, muchas veces, durante y toda la tarde. El tiempo depende de si se cuenta un hecho cerrado o se describe una costumbre o una escena." },
  { question: "¿Los ejercicios son gratis?", answer: "Sí. Todas las páginas son abiertas y se pueden proyectar en clase o mandar como tarea con el enlace." },
];

export function generateMetadata() { return eleMetadata(PASADO_PATH, TITLE, DESCRIPTION); }

export default function PasadoHub() {
  const mixed = pasadoMixed().map(({ before, after, options, answer, correctLabel, wrongLabel, tag }) => ({ before, after, options, answer, correctLabel, wrongLabel, tag }));
  return (
    <MiniAppFrame
      path={PASADO_PATH} title={TITLE} description={DESCRIPTION} h1="¿Indefinido o imperfecto? Ejercicios por marcador" kicker="Gramática · A2–B1"
      crumbs={[{ name: "Indefinido o imperfecto", href: PASADO_PATH }]} faq={FAQ}
      about={["indefinido o imperfecto", "marcadores temporales", "pretérito indefinido", "pretérito imperfecto", "ELE"]}
    >
      {USO_GROUPS.map((g) => (
        <Section key={g.uso} title={g.title} intro={g.intro}>
          <MarcadorCards items={marcadores.filter((m) => m.uso === g.uso)} />
        </Section>
      ))}
      <Section id="mezcla" title="Prueba mezclada" intro="Doce frases con marcadores distintos. Si dudas en alguna, abre su página y repasa la regla.">
        <MoodChooser items={mixed} />
      </Section>
      <EleNewsletterInline source={PASADO_PATH} />
      <Section title="Para preparar la clase">
        <ul className={cj.verbList}>{PASADO_GUIDES.map((g) => <li key={g.href}><Link href={g.href}>{g.label}</Link></li>)}</ul>
      </Section>
    </MiniAppFrame>
  );
}
