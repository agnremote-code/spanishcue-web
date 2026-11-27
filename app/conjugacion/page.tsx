import Link from "next/link";
import { Section } from "../growth/components";
import { eleMetadata } from "../material-ele/components";
import styles from "../growth/growth.module.css";
import { ConjugacionFrame, VerbLinks, VerbSearch } from "./components";
import cj from "./conjugacion.module.css";
import { CONJUGACION_PATH, TOP_VERBS, isIrregular, modelGroups, verbPath, verbos } from "./verbos";
import { IRREGULARES_PATH, tiempoPages } from "./tiempos";
import { TRAINER_PATH } from "../practicar-conjugacion/drill";

const title = "Conjugación de verbos en español: más de 1.200 verbos | SpanishCue";
const description = `Conjugación completa de más de 1.200 verbos en español, con las formas irregulares marcadas, notas para enseñarlos y un ejercicio corregido en cada verbo.`;

export const metadata = eleMetadata(CONJUGACION_PATH, title, description);

const faq = [
  { question: "¿Cómo se sabe si un verbo es irregular?", answer: "Un verbo es irregular cuando alguna de sus formas cambia la raíz o la terminación respecto al modelo regular (hablar, comer, vivir). En cada página las formas irregulares aparecen en rojo, y las notas explican el patrón: diptongo, raíz fuerte en el indefinido, primera persona en -go o -zco, futuro irregular." },
  { question: "¿Qué diferencia hay entre una irregularidad y un cambio ortográfico?", answer: "En buscar → busqué o en coger → cojo cambia la letra pero no el sonido: es un cambio ortográfico y el verbo se considera regular. En pensar → pienso o en tener → tuve cambia la pronunciación: eso es una irregularidad." },
  { question: "¿Por qué aparece vosotros en las tablas?", answer: "Vosotros es la forma de la segunda persona del plural en España. En América se usa ustedes, que comparte las formas de ellos y ellas. Las tablas muestran las dos para que sirvan en cualquier variedad; los ejercicios usan solo las personas comunes a todas." },
  { question: "¿Puedo usar estas tablas en clase?", answer: "Sí. Cada página se puede proyectar o imprimir, y el ejercicio final se corrige en la misma página, así que funciona como repaso rápido o como tarea." },
];

function letterOf(verb: string) {
  return verb.normalize("NFD").charAt(0);
}

export default function ConjugacionHub() {
  const letters = [...new Set(verbos.map(letterOf))];
  const groups = modelGroups();
  const irregularCount = verbos.filter(isIrregular).length;
  return (
    <ConjugacionFrame
      path={CONJUGACION_PATH} title={title} description={description} h1="Conjugación de verbos en español"
      kicker="Material ELE · Verbos" crumbs={[]} faq={faq}
      about={["conjugación de verbos en español", "verbos irregulares", "tiempos verbales", "ELE"]}
      hero={<VerbSearch />}
    >
      <Section title="Los verbos más buscados" intro="Los verbos que más aparecen en clase de A1 a B1, casi todos irregulares.">
        <VerbLinks verbs={TOP_VERBS} href={verbPath} />
      </Section>
      <Section title="Verbos irregulares por tiempo" intro="Todos los irregulares de cada tiempo, con sus formas marcadas, los patrones explicados y un ejercicio.">
        <ul className={cj.verbList}>
          {tiempoPages.map((page) => <li key={page.slug}><Link href={page.path}>{page.h1}</Link></li>)}
          <li><Link href={IRREGULARES_PATH}>Todos los tiempos</Link></li>
        </ul>
      </Section>
      <Section title="Verbos irregulares agrupados por modelo" intro={`${irregularCount} de los ${verbos.length} verbos tienen alguna irregularidad. Agruparlos por modelo es la forma más rápida de enseñarlos: quien sabe pensar sabe también cerrar, empezar y despertar.`}>
        <div className={cj.groups}>
          {groups.map((group) => (
            <div key={group.key}>
              <h3>{group.label[0].toUpperCase() + group.label.slice(1)} · {group.verbs.length}</h3>
              <VerbLinks verbs={group.verbs} href={verbPath} />
            </div>
          ))}
        </div>
      </Section>
      <Section title="Todos los verbos de la A a la Z" intro="Cada verbo tiene su página con todos los tiempos del indicativo y del subjuntivo, el imperativo y un ejercicio.">
        <nav className={cj.letters} aria-label="Letras">
          {letters.map((letter) => <a key={letter} href={`#letra-${letter}`}>{letter.toUpperCase()}</a>)}
        </nav>
        {letters.map((letter) => (
          <div className={cj.letterBlock} id={`letra-${letter}`} key={letter}>
            <h3>{letter.toUpperCase()}</h3>
            <VerbLinks verbs={verbos.filter((verb) => letterOf(verb) === letter)} href={verbPath} />
          </div>
        ))}
      </Section>
      <Section title="Practica la conjugación">
        <p className={styles.sectionIntro}>Elige tiempos y verbos y escribe cada forma, con corrección al instante y repaso de lo que fallas: <Link className={styles.textLink} href={TRAINER_PATH}>entrenador de verbos gratis</Link>.</p>
      </Section>
      <Section title="Conjugador gratis para tu web">
        <p className={styles.sectionIntro}>¿Tienes blog, web de academia o curso en Moodle? <Link className={styles.textLink} href="/material-ele/conjugador-para-tu-web">Inserta este conjugador gratis</Link>: sin registro, sin cookies, con los irregulares marcados.</p>
      </Section>
      <Section title="Para enseñar cada tiempo">
        <p className={styles.sectionIntro}>Guías con explicación, actividades y ejercicios: <Link className={styles.textLink} href="/material-ele/presente-de-indicativo">presente</Link>, <Link className={styles.textLink} href="/material-ele/indefinido-e-imperfecto">indefinido e imperfecto</Link>, <Link className={styles.textLink} href="/material-ele/preterito-perfecto">pretérito perfecto</Link>, <Link className={styles.textLink} href="/material-ele/futuro">futuro</Link>, <Link className={styles.textLink} href="/material-ele/condicional">condicional</Link>, <Link className={styles.textLink} href="/material-ele/subjuntivo">subjuntivo</Link> e <Link className={styles.textLink} href="/material-ele/imperativo">imperativo</Link>.</p>
      </Section>
    </ConjugacionFrame>
  );
}
