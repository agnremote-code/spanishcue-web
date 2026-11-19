import Link from "next/link";
import type { FichaContent } from "../ficha-content";
import { Bold } from "../ficha-components";
import { FICHAS_GRATIS_PATH, FICHAS_GRATIS_LEVELS } from "../fichas-gratis";
import styles from "../../growth/growth.module.css";
import grammar from "../../growth/grammar.module.css";
import sheet from "../ficha.module.css";
import free from "./fichas-gratis.module.css";

/**
 * Owner rule (2026-11-19): nothing in /material-ele/fichas-gratis leads to a payment. These
 * header and footer replace the site-wide Material ELE header and footer and every class link;
 * every link here stays inside the section.
 */
export function FreeHeader() {
  return (
    <header className={free.header}>
      <Link className={free.brand} href={FICHAS_GRATIS_PATH}>SPANISHCUE · Fichas gratis</Link>
      <nav className={free.nav} aria-label="Fichas gratis por nivel">
        {FICHAS_GRATIS_LEVELS.map((level) => <Link key={level} href={`${FICHAS_GRATIS_PATH}#${level.toLowerCase()}`}>{level}</Link>)}
      </nav>
    </header>
  );
}

export function FreeFooter() {
  return (
    <footer className={free.footer}>
      <p><strong>Fichas ELE completas y 100 % gratis.</strong> Sin registro, sin pagos y sin muestras: cada ficha está entera, con sus soluciones.</p>
      <p><Link href={FICHAS_GRATIS_PATH}>Todas las fichas gratis</Link> · Hechas por profesores de español para profesores de español · SpanishCue</p>
    </footer>
  );
}

export function FreeBadge() {
  return <span className={free.badge}>Completa y gratis</span>;
}

/** A complete worksheet. `prefix` keeps section ids unique when several fichas share one pack page. */
export function FichaSheet({ content, prefix = "", headingLevel = 2 }: { content: FichaContent; prefix?: string; headingLevel?: 2 | 3 }) {
  const H = headingLevel === 2 ? "h2" : "h3";
  const Sub = headingLevel === 2 ? "h3" : "h4";
  return (
    <>
      <section className={styles.section} id={`${prefix}teoria`}>
        <H>Entender</H>
        {content.theory.map((concept) => (
          <article className={grammar.activity} key={concept.label}>
            <Sub>{concept.label}</Sub>
            {concept.formula.map((line) => <p className={grammar.prompt} key={line}><Bold text={line} /></p>)}
            <p><Bold text={concept.meaning} /></p>
            <ul>{concept.examples.map((example) => <li key={example}><Bold text={example} /></li>)}</ul>
          </article>
        ))}
        {content.tables.map((table, index) => (
          <div className={sheet.tableWrap} key={index}><table className={sheet.table}>
            {table.title ? <caption><Bold text={table.title} /></caption> : null}
            <thead><tr>{table.head.map((cell, c) => <th key={c}><Bold text={cell} /></th>)}</tr></thead>
            <tbody>{table.rows.map((row, r) => <tr key={r}>{row.map((cell, c) => <td key={c}><Bold text={cell} /></td>)}</tr>)}</tbody>
          </table></div>
        ))}
      </section>

      {content.mistakes.length ? (
        <section className={styles.section} id={`${prefix}errores`}>
          <H>Errores típicos</H>
          <ul className={sheet.mistakes}>{content.mistakes.map((mistake) => <li key={mistake.wrong}><s>{mistake.wrong}</s> → <strong>{mistake.right}</strong>. <Bold text={mistake.why} /></li>)}</ul>
        </section>
      ) : null}

      <section className={styles.section} id={`${prefix}ejercicios`}>
        <H>Practicar</H>
        <p className={styles.sectionIntro}>Contesta primero sin mirar las soluciones del final.</p>
        <ol className={sheet.items}>
          {content.exercises.map((item, index) => (
            <li key={index}>
              {item.kind === "fix" ? <em>¿Está bien? Si no, corrígela: </em> : null}
              {item.context ? <em><Bold text={item.context} /> </em> : null}
              <Bold text={item.prompt} />
              {item.options ? <ul className={sheet.options}>{item.options.map((option) => <li key={option}>☐ <Bold text={option} /></li>)}</ul> : <p className={sheet.line} aria-hidden="true" />}
            </li>
          ))}
        </ol>
      </section>

      {content.writing || content.talk.length ? (
        <section className={styles.section} id={`${prefix}usar`}>
          <H>Usar</H>
          {content.writing ? (
            <article className={grammar.activity}>
              <Sub>Escribir: {content.writing.title}</Sub>
              <p><Bold text={content.writing.situation} /></p>
              <ul>{content.writing.task.map((task) => <li key={task}><Bold text={task} /></li>)}</ul>
            </article>
          ) : null}
          {content.talk.length ? (
            <article className={grammar.activity}>
              <Sub>Conversar</Sub>
              <ol className={sheet.items}>{content.talk.map((question) => <li key={question}><Bold text={question} /></li>)}</ol>
            </article>
          ) : null}
        </section>
      ) : null}

      <section className={styles.section} id={`${prefix}soluciones`}>
        <H>Soluciones</H>
        <ol className={sheet.answers}>{content.exercises.map((item, index) => <li key={index}><strong><Bold text={item.answer} /></strong>{item.why ? <> <Bold text={item.why} /></> : null}</li>)}</ol>
      </section>
    </>
  );
}
