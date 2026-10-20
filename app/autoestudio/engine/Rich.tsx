import { Fragment } from "react";
import { englishLine } from "../english/key";

/**
 * Renders the content markup: **bold**, _italic_ and `form`. Everything else is
 * plain text (React escapes it), so content can never inject HTML.
 */
const TOKEN = /(\*\*[^*]+\*\*|`[^`]+`|_[^_\s][^_]*_)/;

export function Rich({ text }: { text: string }) {
  const parts = text.split(TOKEN).filter((part) => part !== "");
  // One inline wrapper, so flex and grid parents treat the text as a single item.
  return (
    <span className="ae-rich">
      {parts.map((part, index) => {
        if (part.startsWith("**") && part.endsWith("**")) return <strong key={index}>{part.slice(2, -2)}</strong>;
        if (part.startsWith("`") && part.endsWith("`")) return <mark key={index} className="ae-form">{part.slice(1, -1)}</mark>;
        if (part.startsWith("_") && part.endsWith("_") && part.length > 2) return <em key={index}>{part.slice(1, -1)}</em>;
        return <Fragment key={index}>{part}</Fragment>;
      })}
    </span>
  );
}

/** English helper line for A1–B2: shown under the Spanish when the week has a translation. */
export function En({ text, ctx }: { text?: string; ctx: { showEnglish: boolean; english?: Readonly<Record<string, string>> } }) {
  const line = text && ctx.showEnglish ? englishLine(ctx.english, text) : undefined;
  // Spanish kept on purpose (a cited form, a model answer) needs no second line.
  if (!line || line === text) return null;
  return (
    <span className="ae-en-line" lang="en">
      <Rich text={line} />
    </span>
  );
}
