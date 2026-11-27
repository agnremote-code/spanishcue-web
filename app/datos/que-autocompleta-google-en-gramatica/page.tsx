import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, Faq, GrowthFooter, JsonLd, Section } from "../../growth/components";
import { TEAM_PATH, articleSchema, datasetSchema, faqPageSchema } from "../../growth/schema";
import { EleTopbar } from "../../material-ele/components";
import { MATERIAL_ELE_PATH } from "../../material-ele/data";
import { pageImage } from "../../material-ele/media";
import ChoiceQuiz, { type QuizItem } from "../../mini-apps/ChoiceQuiz";
import { canonicalUrl } from "../../seo";
import { autocompletado as a, dele, modifiersEn, modifiersEs, wordsInside } from "../autocompletado";
import { DATOS_PATH } from "../informes";
import styles from "../../growth/growth.module.css";

const n = (value: number) => value.toLocaleString("es-ES");
const word = (w: string, lang: "es" | "en") => wordsInside.find((row) => row.word.startsWith(w) && row.lang === lang)!;
const pdfEs = word("pdf", "es");
const interEs = word("interactivo", "es");
const pdfEn = word("pdf", "en");
const interEn = word("interactive", "en");
const worksheetEn = word("worksheet", "en");

const h1 = "Qué autocompleta Google cuando buscas gramática del español";
const title = "Qué autocompleta Google en búsquedas de gramática del español: pdf sí, interactivo casi nunca";
const description = `Analizamos ${n(a.suggestions)} sugerencias de Google para ${a.queries} búsquedas de gramática del español. «pdf» salió ${pdfEs.count} veces en español e «interactivo», ${interEs.count}; en inglés, «interactive» no salió nunca.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: canonicalUrl(a.path) },
  robots: { index: true, follow: true },
  openGraph: { title, description, url: canonicalUrl(a.path), type: "article" },
};

const faq = [
  {
    question: "¿Qué busca la gente cuando escribe un tema de gramática del español en Google?",
    answer: `Sobre todo ejercicios y material para descargar. Con 18 temas, «ejercicios» tuvo ${modifiersEs[0][1]} sugerencias de 270 posibles y «pdf», ${modifiersEs[1][1]}. Fuera de las búsquedas que ya decían pdf, Google sugirió «pdf» ${pdfEs.count} veces y «interactivo», ${interEs.count}.`,
  },
  {
    question: "¿«DELE» en estas búsquedas se refiere al examen?",
    answer: `Casi nunca. Al escribir un tema seguido de «dele», ${dele.deleAhora} de las ${dele.suggestions} sugerencias nombraban el sitio DELE Ahora y ninguna hablaba del examen, su modelo o el Instituto Cervantes.`,
  },
  {
    question: "¿Las sugerencias indican cuánta gente busca cada cosa?",
    answer: "No. Google muestra las búsquedas frecuentes, pero no dice cuántas veces se hacen. Sirven para saber qué palabras usa la gente, no para medir volumen.",
  },
  {
    question: "¿Puedo usar estos datos?",
    answer: "Sí, con un enlace a esta página (licencia CC BY 4.0). El CSV tiene los recuentos de cada tabla.",
  },
];

const quiz: QuizItem[] = [
  { before: "Cuando escribes «imperativo», la primera sugerencia de Google es «imperativo ", after: "».", options: ["categórico", "afirmativo", "ejercicios"], answer: 0, why: "«Imperativo categórico», el concepto de Kant: la gramática compite con la filosofía en la misma búsqueda." },
  { before: "Con «por y para», la primera sugerencia fue «por y para ", after: "».", options: ["siempre", "ejercicios", "diferencias"], answer: 0, why: "La frase hecha «por y para siempre» va antes que «por y para ejercicios», que salió segunda." },
  { before: "En las búsquedas en inglés, «interactive» apareció en ", after: " de 1409 sugerencias.", options: ["0", "14", "146"], answer: 0, why: `Cero. «pdf» salió ${pdfEn.count} veces y «worksheet», ${worksheetEn.count}.` },
  { before: "Con «[tema] dele», Google nombró el sitio DELE Ahora en ", after: " de 168 sugerencias.", options: ["12", "76", "150"], answer: 1, why: "76 de 168: para quien estudia, «dele» en una búsqueda de gramática suele ser el nombre de un sitio de ejercicios." },
];

export default function AutocompletadoPage() {
  const dates = a.dates;
  return (
    <>
      <main className={styles.page} lang="es">
        <div className={styles.shell}>
          <JsonLd data={articleSchema({ pathname: a.path, headline: h1, description, dates, inLanguage: "es", image: pageImage([350]), about: ["búsquedas de gramática del español", "Google autocompletar", "material de ELE", "ejercicios interactivos"] })} />
          <JsonLd
            data={datasetSchema({
              pathname: a.path,
              name: "Sugerencias de Google para búsquedas de gramática del español (SpanishCue, 26 de noviembre de 2026)",
              description: `Recuentos de ${n(a.suggestions)} sugerencias de autocompletado de Google para ${a.queries} búsquedas de 18 temas de gramática en español y 18 en inglés, solas y con modificadores (ejercicios, pdf, quiz, worksheet, AP, GCSE, IB). Recogidas el ${a.dateLabel}.`,
              temporalCoverage: a.date,
              variableMeasured: ["sugerencias por modificador", "consultas sin sugerencias", "palabras dentro de las sugerencias"],
              csvPath: a.csvPath,
              keywords: ["Google autocompletar", "gramática del español", "ELE", "búsquedas", "material interactivo"],
              dates,
            })}
          />
          <JsonLd data={faqPageSchema(faq, "es")} />
          <EleTopbar current={MATERIAL_ELE_PATH} />
          <Breadcrumbs items={[{ name: "SpanishCue", href: "/" }, { name: "Datos", href: DATOS_PATH }, { name: h1, href: a.path }]} />
          <section className={styles.hero}>
            <p className={styles.eyebrow}>Datos de SpanishCue · Búsquedas</p>
            <h1 className={styles.title}>{h1}</h1>
            <p className={styles.lead}>
              <strong>Google completa con «pdf» mucho más que con «interactivo».</strong> En español sugirió «pdf» {pdfEs.count} veces
              e «interactivo», {interEs.count}. En inglés, «pdf» salió {pdfEn.count} veces, «worksheet» {worksheetEn.count} e «interactive»
              ninguna. La palabra que más completa Google en español es «ejercicios»; en inglés, «practice».
            </p>
            <p>
              Analizamos {n(a.suggestions)} sugerencias reales de Google para {a.queries} búsquedas de gramática del español, recogidas el{" "}
              {a.dateLabel}. Por <Link className={styles.textLink} href={TEAM_PATH}>Ale</Link>, profesor de ELE · Publicado el 27 de noviembre de 2026.
            </p>
          </section>

          <Section title="Qué palabra completa Google después del tema" intro={`Cada modificador se probó con los mismos ${a.topicsPerLanguage} temas. Google muestra como mucho 15 sugerencias por búsqueda: el máximo posible es 270.`}>
            <div className="twoColTables" style={{ display: "grid", gap: 18 }}>
              {[["Búsquedas en español (España)", modifiersEs], ["Búsquedas en inglés (Estados Unidos)", modifiersEn]].map(([label, rows]) => (
                <div key={label as string} className={`${styles.panel} ${styles.tableWrap}`}>
                  <table>
                    <caption>{label as string}: sugerencias por modificador</caption>
                    <thead><tr><th scope="col">{label as string}</th><th scope="col">Sugerencias (de 270)</th><th scope="col">Temas sin ninguna</th></tr></thead>
                    <tbody>{(rows as [string, number, number][]).map(([mod, count, empty]) => <tr key={mod}><th scope="row">tema + «{mod}»</th><td>{count}</td><td>{empty} de 18</td></tr>)}</tbody>
                  </table>
                </div>
              ))}
            </div>
            <div className={styles.prose}>
              <p>
                En español la gente escribe «ejercicios», no «práctica»: {modifiersEs[0][1]} sugerencias contra {modifiersEs[6][1]}. En inglés pasa
                lo contrario: «practice» es lo más completado. Las búsquedas de exámenes en inglés (AP, IB, GCSE) tienen menos sugerencias y más temas
                sin ninguna, señal de que se buscan menos con un tema de gramática concreto.
              </p>
            </div>
          </Section>

          <Section title="Qué palabras aparecen dentro de las sugerencias" intro="Cada palabra se cuenta solo en las búsquedas que no la llevaban ya.">
            <div className={`${styles.panel} ${styles.tableWrap}`}>
              <table>
                <caption>Palabras dentro de las sugerencias de Google</caption>
                <thead><tr><th scope="col">Palabra</th><th scope="col">Idioma de la búsqueda</th><th scope="col">Sugerencias</th></tr></thead>
                <tbody>{wordsInside.map((row) => <tr key={`${row.lang}${row.word}`}><th scope="row">{row.word}</th><td>{row.lang === "es" ? "español" : "inglés"}</td><td>{row.count} de {n(row.of)}</td></tr>)}</tbody>
              </table>
            </div>
            <div className={styles.prose}>
              <p>
                Los nombres de sitios también aparecen: Wordwall y Quizlet en español, Quizlet en inglés. Con «dele» pasa algo curioso: {dele.deleAhora} de{" "}
                {dele.suggestions} sugerencias nombraban el sitio DELE Ahora y ninguna hablaba del examen. Para quien estudia, «dele» en una búsqueda de
                gramática suele ser un sitio de ejercicios.
              </p>
              <p>
                Para un profesor o un sitio de material, la lectura es simple: la gente pide ejercicios y PDF porque es lo que conoce. Que «interactivo»
                casi no aparezca no quiere decir que nadie lo quiera, sino que pocos lo buscan con esa palabra. Por eso en SpanishCue los títulos dicen
                «ejercicios» y el ejercicio se corrige en la página.
              </p>
            </div>
          </Section>

          <Section title="¿Adivinas qué completa Google?" intro="Cuatro datos de este informe. Pulsa una opción y verás la respuesta.">
            <ChoiceQuiz items={quiz} />
          </Section>

          <Section title="Cómo se hizo">
            <div className={styles.panel}>
              <ul>
                <li><b>Búsquedas.</b> 18 temas de gramática en español (presente, ser y estar, por y para, subjuntivo…) y 18 en inglés (spanish preterite, spanish ser vs estar…), cada uno solo y con 7 modificadores en español o 10 en inglés: {a.es.queries} + {a.en.queries} = {a.queries} búsquedas.</li>
                <li><b>Idioma y país.</b> Sugerencias pedidas a Google con idioma y país fijados: español de España (hl=es, gl=es) e inglés de Estados Unidos (hl=en, gl=us), el {a.dateLabel}.</li>
                <li><b>Resultado.</b> {n(a.suggestions)} sugerencias ({n(a.es.suggestions)} en español y {n(a.en.suggestions)} en inglés); {a.es.empty + a.en.empty} búsquedas no tuvieron ninguna.</li>
                <li><b>Límites.</b> Es una foto de un día. Las sugerencias muestran qué palabras usa la gente, no cuántas veces busca cada cosa, y pueden cambiar por país.</li>
                <li><b>Descarga.</b> <a className={styles.textLink} href={a.csvPath} download>CSV con los recuentos</a> (licencia CC BY 4.0: cita con enlace a esta página).</li>
              </ul>
            </div>
          </Section>

          <Section title="Sigue leyendo">
            <div className={styles.prose}>
              <ul>
                <li><Link className={styles.textLink} href="/datos/errores-preterito-perfecto-a2">Errores reales con el pretérito perfecto en A2</Link>, el otro informe de datos.</li>
                <li><Link className={styles.textLink} href="/material-ele/guia/ia-de-google-en-busquedas-de-profes-de-ele">La IA de Google en las búsquedas de profesores de ELE</Link>.</li>
                <li>Ejercicios que se corrigen en la página: <Link className={styles.textLink} href="/ser-o-estar">ser o estar</Link>, <Link className={styles.textLink} href="/por-o-para">por o para</Link>, <Link className={styles.textLink} href="/indicativo-o-subjuntivo">indicativo o subjuntivo</Link>.</li>
                <li><Link className={styles.textLink} href={DATOS_PATH}>Todos los informes de datos</Link>.</li>
              </ul>
            </div>
          </Section>

          <Section title="Preguntas frecuentes">
            <Faq items={faq} />
          </Section>
        </div>
      </main>
      <GrowthFooter />
    </>
  );
}
