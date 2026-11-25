import Link from "next/link";
import { Section } from "../growth/components";
import { eleMetadata } from "../material-ele/components";
import { EleNewsletterInline } from "../material-ele/PopularLinks";
import cj from "../conjugacion/conjugacion.module.css";
import ChoiceQuiz from "../mini-apps/ChoiceQuiz";
import { MiniAppFrame } from "../mini-apps/Frame";
import { AdjCards, SER_GUIDES, UsoCards } from "./components";
import { adjetivos, usos } from "./contenido";
import { SER_PATH, serMixed } from "./data";

const TITLE = "Ser o estar: usos, adjetivos y ejercicios | SpanishCue";
const DESCRIPTION = `Los ${usos.length} usos de ser y estar y ${adjetivos.length} adjetivos que cambian de significado (listo, malo, rico, aburrido…), cada uno con su regla y un ejercicio.`;
const FAQ = [
  { question: "¿Cuándo se usa ser?", answer: "Para identificar y definir: origen, profesión, carácter, material, posesión, la hora y la fecha, y dónde o cuándo tiene lugar un evento." },
  { question: "¿Cuándo se usa estar?", answer: "Para la ubicación, los estados de ánimo y físicos, cómo se encuentra una cosa ahora, estar + gerundio, estar + participio y expresiones fijas como «estar de acuerdo»." },
  { question: "¿Qué adjetivos cambian de significado con ser y estar?", answer: `Los más frecuentes son ${adjetivos.slice(0, 8).map((a) => a.adj).join(", ")}. Por ejemplo, «ser listo» es ser inteligente y «estar listo», estar preparado.` },
  { question: "¿Los ejercicios son gratis?", answer: "Sí. Todas las páginas son abiertas y se pueden proyectar en clase o mandar como tarea con el enlace." },
];

export function generateMetadata() { return eleMetadata(SER_PATH, TITLE, DESCRIPTION); }

export default function SerHub() {
  return (
    <MiniAppFrame
      path={SER_PATH} title={TITLE} description={DESCRIPTION} h1="¿Ser o estar? Usos y ejercicios" kicker="Gramática · A1–B2"
      crumbs={[{ name: "Ser o estar", href: SER_PATH }]} faq={FAQ}
      about={["ser o estar", "ser y estar", "adjetivos con ser y estar", "ELE"]}
    >
      <Section title="Usos de ser" intro="Identificar, definir y situar eventos.">
        <UsoCards items={usos.filter((u) => u.verb === "ser")} />
      </Section>
      <Section title="Usos de estar" intro="Lugares, estados y acciones en curso.">
        <UsoCards items={usos.filter((u) => u.verb === "estar")} />
      </Section>
      <Section title="Adjetivos que cambian de significado" intro="El mismo adjetivo dice cosas distintas con ser y con estar.">
        <AdjCards items={adjetivos} />
      </Section>
      <Section id="mezcla" title="Prueba mezclada" intro="Doce frases de usos y adjetivos distintos. Si dudas en alguna, abre su página y repasa la regla.">
        <ChoiceQuiz items={serMixed()} label="Elige ser o estar" />
      </Section>
      <EleNewsletterInline source={SER_PATH} />
      <Section title="Para preparar la clase">
        <ul className={cj.verbList}>{SER_GUIDES.map((g) => <li key={g.href}><Link href={g.href}>{g.label}</Link></li>)}</ul>
      </Section>
    </MiniAppFrame>
  );
}
