import Link from "next/link";
import type { ReactNode } from "react";
import type { GuiaBlock } from "./guias";

/** Turns `**bold**` and `[label](/path)` inside guide prose into elements; everything else stays literal text. */
export function richText(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const pattern = /\*\*([^*]+)\*\*|\[([^\]]+)\]\(([^)\s]+)\)/g;
  let last = 0;
  let match: RegExpExecArray | null;
  while ((match = pattern.exec(text)) !== null) {
    if (match.index > last) nodes.push(text.slice(last, match.index));
    if (match[1] !== undefined) nodes.push(<strong key={match.index}>{match[1]}</strong>);
    else nodes.push(<Link key={match.index} href={match[3]}>{match[2]}</Link>);
    last = match.index + match[0].length;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

export function GuiaBlocks({ blocks }: { blocks: GuiaBlock[] }) {
  return (
    <>
      {blocks.map((block, index) => {
        if (block.type === "p") return <p key={index}>{richText(block.text)}</p>;
        const items = block.items.map((item) => <li key={item}>{richText(item)}</li>);
        return block.type === "ol" ? <ol key={index}>{items}</ol> : <ul key={index}>{items}</ul>;
      })}
    </>
  );
}
