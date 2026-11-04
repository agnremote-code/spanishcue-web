import { Fragment, type ReactNode } from "react";

/** Renders the only inline markup a worksheet keeps: **bold**. */
export function Bold({ text }: { text: string }): ReactNode {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, index) => (part.startsWith("**") && part.endsWith("**") ? <strong key={index}>{part.slice(2, -2)}</strong> : <Fragment key={index}>{part}</Fragment>));
}
