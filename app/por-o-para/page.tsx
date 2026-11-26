import Link from "next/link";
import { Section } from "../growth/components";
import { eleMetadata } from "../material-ele/components";
import { EleNewsletterInline } from "../material-ele/PopularLinks";
import cj from "../conjugacion/conjugacion.module.css";
import ChoiceQuiz from "../mini-apps/ChoiceQuiz";
import { MiniAppFrame } from "../mini-apps/Frame";
import { PORPARA_GUIDES, PorParaCards } from "./components";
import { PORPARA_PATH, porParaMixed } from "./data";
import { usosPorPara } from "./usos";

const TITLE = "Por o para: usos, reglas y ejercicios | SpanishCue";
const DESCRIPTION = `Los ${usosPorPara.length} usos de por y para (causa, finalidad, destino, plazo, medio, precio, opinión…), cada uno con su regla, ejemplos y un ejercicio con corrección al instante.`;
const FAQ = [
  { question: "¿Cuándo se usa por?", answer: "Para la causa, el lugar por donde se pasa, las partes del día, la duración, el medio, el precio o intercambio, el agente de la pasiva y expresiones como «por eso» o «por fin»." },
  { question: "¿Cuándo se usa para?", answer: "Para la finalidad, el destinatario, el destino, el plazo, la opinión («para mí»), la comparación con lo esperado y la utilidad de algo." },
  { question: "¿Hay un truco para no confundirlos?", answer: "Por mira hacia atrás, a la causa o al medio; para mira hacia delante, al objetivo, al destino o al plazo. «Lo hace por su hija» (por ella, a causa de ella) y «lo hace para su hija» (ella lo recibe)." },
  { question: "¿Los ejercicios son gratis?", answer: "Sí. Todas las páginas son abiertas y se pueden proyectar en clase o mandar como tarea con el enlace." },
];

export function generateMetadata() { return eleMetadata(PORPARA_PATH, TITLE, DESCRIPTION); }

export default function PorParaHub() {
  return (
    <MiniAppFrame
      path={PORPARA_PATH} title={TITLE} description={DESCRIPTION} h1="¿Por o para? Usos y ejercicios" kicker="Gramática · A1–B1"
      crumbs={[{ name: "Por o para", href: PORPARA_PATH }]} faq={FAQ}
      about={["por o para", "por y para", "preposiciones", "ELE"]}
    >
      <Section title="Usos de por" intro="Causa, medio, lugar de paso, tiempo aproximado, precio.">
        <PorParaCards items={usosPorPara.filter((u) => u.prep === "por")} />
      </Section>
      <Section title="Usos de para" intro="Finalidad, destinatario, destino, plazo, opinión.">
        <PorParaCards items={usosPorPara.filter((u) => u.prep === "para")} />
      </Section>
      <Section id="mezcla" title="Prueba mezclada" intro="Doce frases de usos distintos. Si dudas en alguna, abre su página y repasa la regla.">
        <ChoiceQuiz items={porParaMixed()} label="Elige por o para" />
      </Section>
      <EleNewsletterInline source={PORPARA_PATH} />
      <Section title="Para preparar la clase">
        <ul className={cj.verbList}>{PORPARA_GUIDES.map((g) => <li key={g.href}><Link href={g.href}>{g.label}</Link></li>)}</ul>
      </Section>
    </MiniAppFrame>
  );
}
