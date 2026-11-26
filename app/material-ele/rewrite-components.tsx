import { Section } from "../growth/components";
import { richText } from "./guia-components";
import type { PageRewrite, RewriteBlock } from "./seo-rewrites";
import styles from "../growth/growth.module.css";
import ele from "./material-ele.module.css";

/** Screen-reader caption: the section heading already names the table on screen. */
const visuallyHidden = { position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0 0 0 0)", whiteSpace: "nowrap" } as const;

function Block({ block }: { block: RewriteBlock }) {
  if (block.type === "p") return <p>{richText(block.text)}</p>;
  if (block.type === "table") {
    return (
      <div className={ele.tableWrap}>
        <table className={ele.compare}>
          <caption style={visuallyHidden}>{block.caption}</caption>
          <thead><tr>{block.head.map((cell) => <th key={cell} scope="col">{cell}</th>)}</tr></thead>
          <tbody>{block.rows.map((row) => <tr key={row[0]}>{row.map((cell, index) => index === 0 ? <th key={index} scope="row">{richText(cell)}</th> : <td key={index}>{richText(cell)}</td>)}</tr>)}</tbody>
        </table>
      </div>
    );
  }
  const items = block.items.map((item) => <li key={item}>{richText(item)}</li>);
  return <div className={styles.panel}>{block.type === "ol" ? <ol>{items}</ol> : <ul>{items}</ul>}</div>;
}

/** The hand-written sections of a rewritten page (SEO plan step 6), in brief order. */
export function RewriteSections({ rewrite }: { rewrite: PageRewrite | undefined }) {
  if (!rewrite) return null;
  return (
    <>
      {rewrite.sections.map((section) => (
        <Section key={section.id} id={section.id} title={section.title} intro={section.intro}>
          {section.blocks.map((block, index) => <Block key={index} block={block} />)}
        </Section>
      ))}
    </>
  );
}
