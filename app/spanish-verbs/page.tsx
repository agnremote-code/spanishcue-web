import Link from "next/link";
import { Section } from "../growth/components";
import styles from "../growth/growth.module.css";
import cj from "../conjugacion/conjugacion.module.css";
import { CONJUGACION_PATH, TOP_VERBS, isIrregular, verbos } from "../conjugacion/verbos";
import { SPANISH_VERBS_PATH, verbPathEn } from "../conjugacion/verbos-en";
import { VerbLinksEn, VerbSearchEn, VerbsFrame, verbsMetadata } from "./frame";

const title = "Spanish Verb Conjugation: 1,200+ Verbs in Every Tense | SpanishCue";
const description = "Full conjugation tables for more than 1,200 Spanish verbs, with irregular forms highlighted, clear notes on each pattern and a self-checking quiz for every verb.";

export const metadata = verbsMetadata(SPANISH_VERBS_PATH, title, description);

const faq = [
  { question: "How can I tell if a Spanish verb is irregular?", answer: "A verb is irregular when some forms change the stem or the ending compared with the regular models hablar, comer and vivir. Every page highlights those forms in red and names the pattern: stem change, strong preterite, -go or -zco first person, irregular future." },
  { question: "Is busqué irregular?", answer: "No. Changes like buscar → busqué or coger → cojo only change the spelling to keep the same sound, so the verb is still regular. Pensar → pienso or tener → tuve change the pronunciation: those are irregular." },
  { question: "Why do the tables include vosotros?", answer: "Vosotros is the plural «you» in Spain. Latin America uses ustedes, which shares the ellos forms. The tables show both; the quizzes only use the persons common to every variety." },
];

function letterOf(verb: string) { return verb.normalize("NFD").charAt(0); }

export default function SpanishVerbsHub() {
  const letters = [...new Set(verbos.map(letterOf))];
  const irregular = verbos.filter(isIrregular).length;
  return (
    <VerbsFrame
      path={SPANISH_VERBS_PATH} title={title} description={description} h1="Spanish verb conjugation"
      kicker="Spanish verbs · Conjugation tables" crumbs={[]} faq={faq}
      about={["Spanish verb conjugation", "Spanish irregular verbs", "Spanish tenses"]} hero={<VerbSearchEn />}
    >
      <Section title="Most searched Spanish verbs" intro="The verbs that come up most from A1 to B1, nearly all of them irregular.">
        <VerbLinksEn verbs={TOP_VERBS} href={verbPathEn} />
      </Section>
      <Section title="All verbs, A to Z" intro={`${verbos.length} verbs, ${irregular} of them with at least one irregular form. Each page has every indicative and subjunctive tense, the commands and a quiz.`}>
        <nav className={cj.letters} aria-label="Letters">
          {letters.map((letter) => <a key={letter} href={`#letra-${letter}`}>{letter.toUpperCase()}</a>)}
        </nav>
        {letters.map((letter) => (
          <div className={cj.letterBlock} id={`letra-${letter}`} key={letter}>
            <h3>{letter.toUpperCase()}</h3>
            <VerbLinksEn verbs={verbos.filter((verb) => letterOf(verb) === letter)} href={verbPathEn} />
          </div>
        ))}
      </Section>
      <Section title="In Spanish">
        <p className={styles.sectionIntro}><Link className={styles.textLink} href={CONJUGACION_PATH} hrefLang="es">Conjugación de verbos en español</Link>: the same tables with notes in Spanish, plus lists of irregular verbs by tense.</p>
      </Section>
    </VerbsFrame>
  );
}
