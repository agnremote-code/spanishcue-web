import type { Voice } from "./types";

/** Stable key for a spoken clip: same text + voice → same recording. */
export function audioKey(text: string, voice: Voice | undefined): string {
  const source = `${voice ?? "es-MX-f"}|${text.normalize("NFC").trim()}`;
  let a = 0x811c9dc5;
  let b = 0x01000193;
  for (let index = 0; index < source.length; index += 1) {
    const code = source.charCodeAt(index);
    a = Math.imul(a ^ code, 16777619);
    b = Math.imul(b ^ code, 2246822519);
  }
  return `${(a >>> 0).toString(16).padStart(8, "0")}${(b >>> 0).toString(16).padStart(8, "0")}`;
}
