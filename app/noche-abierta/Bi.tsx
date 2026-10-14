'use client';

// A bilingual line: the Spanish, and under it the English the A0 content
// carries after a line break (see bilingual.mjs). Any other text renders as is.
import { BI_BREAK } from './bilingual.mjs';

export default function Bi({ text }: { text: string | undefined | null }) {
  if (!text) return null;
  const at = text.indexOf(BI_BREAK);
  if (at < 0) return <>{text}</>;
  return <>{text.slice(0, at)}<span className="na-en" lang="en">{text.slice(at + 1)}</span></>;
}
