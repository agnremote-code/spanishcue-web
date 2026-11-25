import Link from "next/link";
import { Section } from "../../growth/components";
import { eleMetadata } from "../../material-ele/components";
import styles from "../../growth/growth.module.css";
import { ConjugacionFrame, VerbSearch } from "../components";
import { IRREGULARES_PATH, irregularRows, tiempoPages } from "../tiempos";

const title = "Verbos irregulares en español por tiempo verbal | SpanishCue";
const description = "Verbos irregulares en español ordenados por tiempo: presente, indefinido, imperfecto, futuro, condicional, subjuntivo, imperativo, participios y gerundios.";

export const metadata = eleMetadata(IRREGULARES_PATH, title, description);

const faq = [
  { question: "¿Cuántos verbos irregulares hay en español?", answer: "Depende de cómo se cuenten los compuestos, pero los de uso frecuente son unos pocos cientos y casi todos siguen un modelo: diptongo (pensar, poder), cambio e → i (pedir), yo en -go o -zco (tener, conocer) o pretérito fuerte (tener, hacer)." },
  { question: "¿En qué tiempo hay más irregulares?", answer: "En el presente de indicativo y, por extensión, en el presente de subjuntivo y el imperativo. El imperfecto, en cambio, solo tiene tres: ser, ir y ver." },
  { question: "¿Cómo se enseñan los verbos irregulares?", answer: "Por modelos y por tiempos, de uno en uno: primero los regulares del tiempo, después los irregulares agrupados por el patrón que comparten, con práctica en contexto." },
];

export default function IrregularesHub() {
  return (
    <ConjugacionFrame
      path={IRREGULARES_PATH} title={title} description={description} h1="Verbos irregulares en español por tiempo"
      kicker="Conjugación · Irregulares" crumbs={[{ name: "Irregulares", href: IRREGULARES_PATH }]} faq={faq}
      about={["verbos irregulares en español", "tiempos verbales", "conjugación", "ELE"]} hero={<VerbSearch />}
    >
      <Section title="Elige un tiempo" intro="Cada página explica los patrones del tiempo, lista todos los verbos irregulares con sus formas marcadas e incluye un ejercicio corregido.">
        <nav className={styles.linkList} aria-label="Verbos irregulares por tiempo">
          {tiempoPages.map((page) => <Link key={page.slug} href={page.path}>{page.h1} <span>· {irregularRows(page).length} verbos</span></Link>)}
        </nav>
      </Section>
    </ConjugacionFrame>
  );
}
