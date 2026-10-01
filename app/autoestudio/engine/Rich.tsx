import { Fragment } from "react";

/**
 * Renders the content markup: **bold**, _italic_ and `form`. Everything else is
 * plain text (React escapes it), so content can never inject HTML.
 */
const TOKEN = /(\*\*[^*]+\*\*|`[^`]+`|_[^_\s][^_]*_)/;

export function Rich({ text }: { text: string }) {
  const parts = text.split(TOKEN).filter((part) => part !== "");
  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith("**") && part.endsWith("**")) return <strong key={index}>{part.slice(2, -2)}</strong>;
        if (part.startsWith("`") && part.endsWith("`")) return <mark key={index} className="ae-form">{part.slice(1, -1)}</mark>;
        if (part.startsWith("_") && part.endsWith("_") && part.length > 2) return <em key={index}>{part.slice(1, -1)}</em>;
        return <Fragment key={index}>{part}</Fragment>;
      })}
    </>
  );
}
