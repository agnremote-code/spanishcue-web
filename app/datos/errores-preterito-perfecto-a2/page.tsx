import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, Faq, GrowthFooter, JsonLd, Section } from "../../growth/components";
import { TEAM_PATH, articleSchema, datasetSchema, faqPageSchema } from "../../growth/schema";
import { EleTopbar } from "../../material-ele/components";
import ExerciseCheck from "../../material-ele/ExerciseCheck";
import { MATERIAL_ELE_PATH } from "../../material-ele/data";
import { pageImage } from "../../material-ele/media";
import { canonicalUrl } from "../../seo";
import { DATOS_PATH } from "../informes";
import { countByType, errorTypes, participleForms, realErrors, report } from "../preterito-perfecto-a2";
import styles from "../../growth/growth.module.css";

const title = "Errores reales con el pretérito perfecto en A2: participios, auxiliar y «han salidos»";
const h1 = "Errores reales con el pretérito perfecto en A2";
const description = `Analizamos ${realErrors.length} errores reales de ${report.learners} alumnos de A2 con el pretérito perfecto. El más frecuente: participios como «escribido» o «rompido». Tabla, ejemplos y ejercicios que se corrigen solos.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: canonicalUrl(report.path) },
  robots: { index: true, follow: true },
  openGraph: { title, description, url: canonicalUrl(report.path), type: "article" },
};

const counts = countByType();
const count = (type: keyof typeof errorTypes) => counts.find((row) => row.type === type)?.count ?? 0;
const total = realErrors.length;
const irregularForms = participleForms.filter((row) => row.irregular);

const faq = [
  {
    question: "¿Cuál es el error más común con el pretérito perfecto?",
    answer: `En esta muestra, formar mal el participio: ${count("participio")} de ${total} errores, sobre todo con verbos irregulares (escribido por escrito, rompido por roto, ponido por puesto). ${report.participleLearners} de los ${report.learners} alumnos lo cometieron al menos una vez.`,
  },
  {
    question: "¿Por qué los alumnos dicen «escribido» o «rompido»?",
    answer: "Porque aplican la regla regular (-ar → -ado, -er/-ir → -ido) a verbos que tienen participio irregular. Es una señal de que la regla ya está aprendida; lo que falta es memorizar la lista corta de irregulares frecuentes: hecho, dicho, visto, puesto, escrito, abierto, vuelto, roto.",
  },
  {
    question: "¿Se dice «han salidos»?",
    answer: "No. Con haber, el participio no cambia nunca: «los turistas han salido», «ellas han llegado». La concordancia en género y número aparece con estar o ser («las tiendas están cerradas»), no en el pretérito perfecto.",
  },
  {
    question: "¿De dónde salen estos datos y puedo usarlos?",
    answer: `De las respuestas equivocadas que guardaron las tareas de Autoestudio de SpanishCue ${report.periodLabel}, sin nombres ni datos de los alumnos. Puedes citarlos con un enlace a esta página (licencia CC BY 4.0) y descargar el CSV.`,
  },
];

const participleExercise = [
  { q: "¿Quién ha ___ (abrir) la puerta del balcón?", a: "abierto" },
  { q: "Todavía no hemos ___ (ver) la última temporada.", a: "visto" },
  { q: "Ya te he ___ (decir) que mañana no trabajo.", a: "dicho" },
  { q: "Se me ha ___ (romper) la pantalla del teléfono.", a: "roto" },
  { q: "¿Dónde has ___ (poner) las llaves?", a: "puesto" },
  { q: "Esta semana he ___ (escribir) tres correos a la escuela.", a: "escrito" },
  { q: "Mis hijos ya han ___ (volver) del colegio.", a: "vuelto" },
  { q: "¿Qué has ___ (hacer) este fin de semana?", a: "hecho" },
];

const auxiliaryExercise = [
  { q: "Mi hermana y yo ___ (viajar) mucho este año.", a: "hemos viajado" },
  { q: "Mis primas ___ (llegar) tarde a la cena.", a: "han llegado" },
  { q: "Las chicas ___ (salir) antes del final del concierto.", a: "han salido" },
  { q: "Usted ya ___ (pagar) la cuenta, ¿no?", a: "ha pagado" },
  { q: "Ustedes nunca ___ (estar) en Perú, ¿verdad?", a: "han estado" },
  { q: "Las tiendas del centro ___ (cerrar) a las ocho.", a: "han cerrado" },
];

const compoundExercise = [
  { q: "(Resuelvo el problema.) Hoy ___ el problema.", a: "he resuelto" },
  { q: "(Mis padres vuelven de viaje.) Esta mañana mis padres ___ de viaje.", a: "han vuelto" },
  { q: "(Descubrimos un café nuevo.) Esta semana ___ un café nuevo.", a: "hemos descubierto" },
  { q: "(Escribes la lista del supermercado.) Hoy ___ la lista del supermercado.", a: "has escrito" },
  { q: "(La farmacia abre a las nueve.) Hoy la farmacia ___ a las nueve.", a: "ha abierto" },
  { q: "(Digo la verdad.) Esta vez ___ la verdad.", a: "he dicho" },
];

export default function ErroresPreteritoPerfectoPage() {
  const dates = report.dates;
  return (
    <>
      <main className={styles.page} lang="es">
        <div className={styles.shell}>
          <JsonLd data={articleSchema({ pathname: report.path, headline: h1, description, dates, inLanguage: "es", image: pageImage([141]), about: ["pretérito perfecto", "participios irregulares", "errores frecuentes de alumnos de español", "A2"] })} />
          <JsonLd
            data={datasetSchema({
              pathname: report.path,
              name: "Errores reales con el pretérito perfecto en A2 (SpanishCue, noviembre de 2026)",
              description: `Errores de ${report.learners} alumnos de español de nivel A2 en ejercicios de pretérito perfecto, ${report.periodLabel}: ${total} errores (primer intento fallido por alumno y frase) clasificados en ${counts.filter((row) => row.count).length} tipos. Sin datos personales.`,
              temporalCoverage: `${report.from}/${report.to}`,
              variableMeasured: ["frase del ejercicio", "respuesta del alumno", "respuesta esperada", "tipo de error"],
              csvPath: report.csvPath,
              keywords: ["pretérito perfecto", "errores de alumnos", "ELE", "A2", "participios irregulares"],
              dates,
            })}
          />
          <JsonLd data={faqPageSchema(faq, "es")} />
          <EleTopbar current={MATERIAL_ELE_PATH} />
          <Breadcrumbs items={[{ name: "SpanishCue", href: "/" }, { name: "Datos", href: DATOS_PATH }, { name: h1, href: report.path }]} />
          <section className={styles.hero}>
            <p className={styles.eyebrow}>Datos de SpanishCue · Gramática A2</p>
            <h1 className={styles.title}>{h1}</h1>
            <p className={styles.lead}>
              <strong>El error más frecuente fue formar mal el participio:</strong> {count("participio")} de los {total} errores que analizamos
              («abrido», «escribido», «rompido», «ponido»). Le siguen las frases donde el tiempo compuesto no llega a formarse ({count("compuesto")}),
              las dudas sobre qué expresa el perfecto ({count("uso")}), el auxiliar en la persona equivocada ({count("persona")}) y «han salidos»
              ({count("concordancia")}), que escribieron {report.salidosLearners} de los {report.learners} alumnos.
            </p>
            <p>
              Analizamos {report.wrongAnswers} respuestas equivocadas reales de {report.learners} alumnos de A2 {report.periodLabel}. Contando una
              sola vez cada frase que cada alumno falló, quedan {total} errores. Por <Link className={styles.textLink} href={TEAM_PATH}>Ale</Link>,
              profesor de ELE · Publicado el 26 de noviembre de 2026.
            </p>
          </section>

          <Section title="Los errores, por tipo" intro={`${total} errores de ${report.learners} alumnos. Cada fila cuenta el primer intento fallido de un alumno en una frase.`}>
            <div className={`${styles.panel} ${styles.tableWrap}`}>
              <table>
                <caption>Errores con el pretérito perfecto en A2, por tipo</caption>
                <thead><tr><th scope="col">Tipo de error</th><th scope="col">Errores</th><th scope="col">Qué pasa</th></tr></thead>
                <tbody>
                  {counts.filter((row) => row.count).map((row) => (
                    <tr key={row.type}><th scope="row">{errorTypes[row.type].label}</th><td>{row.count} de {total}</td><td>{errorTypes[row.type].explanation}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className={styles.prose}>
              <p>
                Son pocos alumnos, así que la tabla no sirve para decir qué porcentaje de estudiantes se equivoca. Sí sirve para ver qué errores
                aparecen y cuáles se repiten en personas distintas: el participio mal formado lo cometieron {report.participleLearners} de los{" "}
                {report.learners} alumnos y «han salidos», {report.salidosLearners}.
              </p>
            </div>
          </Section>

          <Section id="participios" title="Los participios que salieron mal" intro="Todas las formas equivocadas que escribieron los alumnos, también en el segundo o tercer intento.">
            <div className={`${styles.panel} ${styles.tableWrap}`}>
              <table>
                <caption>Participios escritos por los alumnos y forma correcta</caption>
                <thead><tr><th scope="col">Verbo</th><th scope="col">Participio correcto</th><th scope="col">Lo que escribieron</th></tr></thead>
                <tbody>
                  {participleForms.map((row) => (
                    <tr key={row.verb}><th scope="row">{row.verb}</th><td>{row.correct}</td><td>{row.written.join(", ")}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className={styles.prose}>
              <p>
                {irregularForms.length} de los 9 verbos tienen participio irregular. Casi todas las formas equivocadas siguen la regla regular
                (-ido): «abrido», «escribido», «ponido», «devuelvido», «veido». Eso indica que el alumno ya sabe formar el participio y le falta
                la lista de irregulares. Con «repartir», que es regular, el problema fue otro: «repartio» es el indefinido sin tilde, no un participio.
              </p>
              <p>
                Para la clase: enseña juntos los participios irregulares que más se usan (hecho, dicho, visto, puesto, escrito, abierto, vuelto,
                roto) y practícalos en frases con «hoy» y «esta semana» antes de pasar a los menos frecuentes.
              </p>
            </div>
          </Section>

          <Section title="Ejercicio 1: participios irregulares" intro="Escribe el participio. Se corrige al momento y no necesitas cuenta.">
            <ExerciseCheck items={participleExercise} />
          </Section>

          <Section title="Tres errores que no son del participio">
            <div className={styles.prose}>
              <p>
                <strong>El tiempo compuesto a medias ({count("compuesto")} errores).</strong> El alumno pone el auxiliar pero deja el verbo en
                presente («he abro», «ha devuelve») o escribe una forma de haber que no existe («hos vemos», «hambos»). Pasa sobre todo en los
                ejercicios de reescribir una frase entera, donde hay que cambiar dos cosas a la vez.
              </p>
              <p>
                <strong>El auxiliar en la persona equivocada ({count("persona")} errores).</strong> «Mis compañeros y yo» pide «hemos», pero los
                alumnos escribieron «he» o «han». Con un sujeto compuesto que incluye «yo», el verbo va en nosotros.
              </p>
              <p>
                <strong>«Han salidos» ({count("concordancia")} errores, {report.salidosLearners} alumnos).</strong> Con un sujeto plural, el
                alumno pone también el participio en plural. Con haber, el participio no cambia nunca: «los turistas han salido».
              </p>
            </div>
          </Section>

          <Section title="Ejercicio 2: el auxiliar que toca" intro="Escribe el verbo en pretérito perfecto (auxiliar y participio).">
            <ExerciseCheck items={auxiliaryExercise} />
          </Section>

          <Section title="Ejercicio 3: de presente a pretérito perfecto" intro="Escribe la frase de la izquierda en pretérito perfecto (auxiliar y participio).">
            <ExerciseCheck items={compoundExercise} />
          </Section>

          <Section title="Cómo se hizo este análisis">
            <div className={styles.panel}>
              <ul>
                <li><b>Fuente.</b> Las tareas de <Link className={styles.textLink} href="/autoestudio/a2/semana-1">Autoestudio A2, semana 1</Link> guardan cada respuesta equivocada para que el profesor la revise. Tomamos las de la categoría «Tiempos del pasado» {report.periodLabel}.</li>
                <li><b>Quién.</b> {report.learners} alumnos de A2 de las clases de Ale. Quitamos las cuentas de prueba y los alumnos de otros profesores.</li>
                <li><b>Cómo contamos.</b> {report.wrongAnswers} respuestas equivocadas en total. Si un alumno falló varias veces la misma frase, contamos solo el primer intento: así quedan {total} errores. Cada uno se clasificó a mano en un tipo.</li>
                <li><b>Límites.</b> Las tareas guardan los errores, no los aciertos, así que no hay porcentaje de error por frase. La muestra es pequeña y viene de un solo profesor.</li>
                <li><b>Datos personales.</b> No publicamos nombres, fechas exactas ni nada que identifique a un alumno. Las respuestas se copian tal como se escribieron, con sus faltas de ortografía.</li>
                <li><b>Descarga.</b> <a className={styles.textLink} href={report.csvPath} download>CSV con los {total} errores</a> (licencia CC BY 4.0: cita con enlace a esta página).</li>
              </ul>
            </div>
          </Section>

          <Section title="Para seguir practicando">
            <div className={styles.prose}>
              <ul>
                <li><Link className={styles.textLink} href="/material-ele/preterito-perfecto">Pretérito perfecto: actividades para la clase de ELE</Link>, con ejercicio resuelto.</li>
                <li><Link className={styles.textLink} href="/autoestudio/a2/semana-1">La semana 1 de Autoestudio A2</Link>, gratis, con la misma práctica de donde salen estos datos.</li>
                <li><Link className={styles.textLink} href="/gramatica/indefinido-e-imperfecto">Clase gratis de indefinido e imperfecto</Link>, el paso siguiente después del perfecto.</li>
                <li><Link className={styles.textLink} href="/indefinido-o-imperfecto">¿Indefinido o imperfecto?</Link>: ejercicios que se corrigen solos.</li>
                <li><Link className={styles.textLink} href={DATOS_PATH}>Más informes con datos de SpanishCue</Link>.</li>
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
