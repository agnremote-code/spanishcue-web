import { Section } from "./components";
import type { ConversationExtra as Extra } from "./conversation-page-extras";
import styles from "./growth.module.css";

export function ConversationExtra({ extra }: { extra: Extra }) {
  return (
    <Section id={extra.id} title={extra.title} intro={extra.intro}>
      <div className={`${styles.panel} ${styles.tableWrap}`}>
        <table>
          <caption>{extra.table.caption}</caption>
          <thead><tr>{extra.table.head.map((cell, i) => <th key={i} scope="col">{cell}</th>)}</tr></thead>
          <tbody>{extra.table.rows.map((row) => <tr key={row[0]}>{row.map((cell, i) => i === 0 ? <th key={i} scope="row">{cell}</th> : <td key={i}>{cell}</td>)}</tr>)}</tbody>
        </table>
      </div>
      <p>{extra.closing}</p>
    </Section>
  );
}
