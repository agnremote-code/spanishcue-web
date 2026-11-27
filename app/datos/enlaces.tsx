import Link from "next/link";
import { Section } from "../growth/components";
import styles from "../growth/growth.module.css";
import { DATOS_PATH, informesForTopic } from "./informes";
import { participleForms, realErrors, report } from "./preterito-perfecto-a2";

/**
 * Links from teaching pages to the data reports on /datos. Every figure comes from the report data,
 * so a page never shows a number the report does not publish.
 */
export function InformesDelTema({ topic }: { topic: string }) {
  const list = informesForTopic(topic);
  if (!list.length) return null;
  return (
    <Section id="datos" title="Datos reales de clase" intro="Lo que pasó cuando alumnos reales practicaron este tema, con la muestra y el método a la vista.">
      <div className={styles.prose}><ul>
        {list.map((informe) => (
          <li key={informe.path}><Link className={styles.textLink} href={informe.path}>{informe.title}</Link>: {informe.summary}</li>
        ))}
      </ul></div>
      <p className={styles.footnote}><Link className={styles.textLink} href={DATOS_PATH}>Todos los informes con datos</Link></p>
    </Section>
  );
}

const quote = (forms: string[]) => forms.map((form) => `«${form.replace(/ \(.*\)$/, "")}»`);
const joinEs = (items: string[]) => (items.length > 1 ? `${items.slice(0, -1).join(", ")} y ${items.at(-1)}` : items[0] ?? "");

/** Wrong participles real A2 learners wrote for one verb, or null when the sample has none. */
export function ParticipioReal({ verb }: { verb: string }) {
  const row = participleForms.find((item) => item.verb === verb);
  if (!row) return null;
  return (
    <Section id="participio-real" title={`Errores reales con el participio de ${verb}`}>
      <p className={styles.sectionIntro}>
        En las tareas de Autoestudio A2, alumnos reales escribieron {joinEs(quote(row.written))} en lugar de «{row.correct}». Son datos de {report.learners} alumnos, {report.periodLabel}.
      </p>
      <p className={styles.footnote}><Link className={styles.textLink} href={`${report.path}#participios`}>Ver los {realErrors.length} errores del informe sobre el pretérito perfecto</Link></p>
    </Section>
  );
}

/** Every wrong participle in the sample, for the irregular participles list. */
export function ParticipiosReales() {
  return (
    <Section id="participios-reales" title="Participios que los alumnos escriben mal" intro={`Formas equivocadas reales de ${report.learners} alumnos de A2, ${report.periodLabel}.`}>
      <div className={`${styles.panel} ${styles.tableWrap}`}>
        <table>
          <thead><tr><th scope="col">Verbo</th><th scope="col">Correcto</th><th scope="col">Lo que escribieron</th></tr></thead>
          <tbody>
            {participleForms.map((row) => (
              <tr key={row.verb}><th scope="row">{row.verb}</th><td>{row.correct}</td><td>{row.written.join(", ")}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className={styles.footnote}><Link className={styles.textLink} href={report.path}>Informe completo: errores reales con el pretérito perfecto en A2</Link></p>
    </Section>
  );
}
