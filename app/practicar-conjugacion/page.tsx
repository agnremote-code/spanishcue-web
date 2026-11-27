import Link from "next/link";
import { Section } from "../growth/components";
import { eleMetadata } from "../material-ele/components";
import styles from "../growth/growth.module.css";
import { ConjugacionFrame, VerbLinks } from "../conjugacion/components";
import { CONJUGACION_PATH, TOP_VERBS, verbos } from "../conjugacion/verbos";
import { IRREGULARES_PATH, tiempoPages } from "../conjugacion/tiempos";
import { HUB_PATH } from "../jugar/worlds.mjs";
import { DRILL_TENSES, FREE_LIST_LIMIT, formatCount, FREE_VERBS, TRAINER_PATH } from "./drill";
import VerbTrainer from "./VerbTrainer";
import "./trainer.css";

const title = "Practicar conjugación de verbos en español: entrenador gratis | SpanishCue";
const description = "Entrenador de verbos en español: eliges tiempos y verbos, escribes la forma y se corrige al momento. Repite lo que fallas hasta dominarlo. Gratis y sin registro.";

export const metadata = eleMetadata(TRAINER_PATH, title, description);

const freeTenses = DRILL_TENSES.filter((tense) => !tense.pro);
const proTenses = DRILL_TENSES.filter((tense) => tense.pro);

const faq = [
  { question: "¿Cómo funciona el entrenador de verbos?", answer: "Eliges uno o varios tiempos y un grupo de verbos. Aparece un verbo con una persona (por ejemplo, pedir · ellos · indefinido) y escribes la forma. La corrección es inmediata: si fallas, ves la forma correcta con la parte que cambia marcada y la conjugación completa de ese tiempo, y el verbo vuelve a salir unas preguntas después." },
  { question: "¿Qué es la repetición espaciada?", answer: "Cada forma que aciertas tarda más en volver: diez minutos, un día, tres días, una semana, tres semanas. Las que fallas vuelven enseguida. Así repasas justo lo que se te olvida y no pierdes tiempo con lo que ya sabes." },
  { question: "¿Necesito una cuenta?", answer: "No. El entrenador es gratis y guarda tu progreso en este navegador: racha de días, aciertos por tiempo y los verbos que más te cuestan." },
  { question: "¿Qué incluye la versión gratis?", answer: `${freeTenses.map((tense) => tense.label.toLowerCase()).join(", ")}, con los ${FREE_VERBS.length} verbos más usados en clase y listas propias de hasta ${FREE_LIST_LIMIT} verbos. Con SpanishCue PRO se abren también el subjuntivo, el imperativo, los demás tiempos compuestos y los ${formatCount(verbos.length)} verbos del diccionario.` },
  { question: "¿Las tildes cuentan?", answer: "Por defecto sí, porque en español una tilde cambia la palabra (hablo y habló no son lo mismo). Si escribes desde un teclado sin tildes, usa los botones á é í ó ú ñ o desactiva la opción «Las tildes cuentan»: el entrenador te avisará igual de la tilde que falta." },
  { question: "¿Puedo usarlo con mis alumnos?", answer: "Sí. Elige los tiempos y los verbos de tu clase y pulsa «Copiar enlace para tus alumnos»: el enlace abre el entrenador con esa misma práctica. Si tienes SpanishCue PRO, tus alumnos con tu enlace de alumno tienen todos los tiempos abiertos." },
];

export default function PracticarConjugacion() {
  return (
    <ConjugacionFrame
      path={TRAINER_PATH} title={title} description={description} h1="Entrenador de verbos"
      kicker="Practicar conjugación · Gratis" crumbs={[{ name: "Entrenador de verbos", href: TRAINER_PATH }]} faq={faq}
      about={["practicar conjugación de verbos en español", "ejercicios de conjugación", "verbos irregulares", "repetición espaciada", "ELE"]}
      hero={<VerbTrainer />}
    >
      <Section title="Cómo se practica" intro="Una pregunta cada vez, corrección al instante y repaso de lo que fallas.">
        <ol className="vt-how">
          <li><b>Eliges</b> los tiempos y los verbos: los 30 imprescindibles, los 100 más usados, solo irregulares o tu propia lista.</li>
          <li><b>Escribes</b> la forma que corresponde a la persona. Sin opciones múltiples: así se fija de verdad.</li>
          <li><b>Repasas</b> lo que fallas: vuelve unas preguntas después y, cuando lo aciertas, cada vez más tarde.</li>
        </ol>
      </Section>
      <Section title="Tiempos que puedes practicar" intro={`Gratis: ${freeTenses.map((tense) => tense.label.toLowerCase()).join(", ")}. Con SpanishCue PRO, además: ${proTenses.map((tense) => tense.label.toLowerCase()).join(", ")}.`}>
        <p className={styles.sectionIntro}>Para repasar la teoría antes de practicar, cada tiempo tiene su lista de verbos irregulares con los patrones explicados:</p>
        <ul className="vt-links">
          {tiempoPages.map((page) => <li key={page.slug}><Link href={page.path}>{page.h1}</Link></li>)}
          <li><Link href={IRREGULARES_PATH}>Todos los irregulares</Link></li>
        </ul>
      </Section>
      <Section title="Los verbos que más se practican" intro="Si no sabes por dónde empezar, empieza por estos: casi todos son irregulares y aparecen en cualquier conversación.">
        <VerbLinks verbs={TOP_VERBS} href={(verb) => `${TRAINER_PATH}?v=${encodeURIComponent(verb)}`} />
        <p className={styles.sectionIntro}>¿Quieres ver la tabla completa de un verbo? Está en la <Link className={styles.textLink} href={CONJUGACION_PATH}>conjugación de más de 1.200 verbos</Link>.</p>
      </Section>
      <Section title="En tu teléfono">
        <p className={styles.sectionIntro}>El entrenador funciona en el móvil con el teclado normal. Para tenerlo a mano junto con los mundos 3D de SpanishCue, abre <Link className={styles.textLink} href={HUB_PATH}>Jugar</Link> y añádelo a tu pantalla de inicio.</p>
      </Section>
    </ConjugacionFrame>
  );
}
