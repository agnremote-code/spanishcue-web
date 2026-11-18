/**
 * Reads the accepted answers of a fill-in sentence out of its hand-written answer key.
 * Keys are written for teachers, not machines: «es», «pudimos · estaba» (two gaps),
 * «de / a (también: desde las nueve hasta las cinco)», «llamarlos (o: los voy a llamar)»,
 * «lo (también «le» en parte de España)». Whatever cannot be read safely is never marked
 * wrong: the student sees «compara con la solución» and the full key.
 */
export type Grade = "empty" | "right" | "accent" | "check";

const clean = (text: string) => text.replace(/\([^)]*\)/g, " ").replace(/[«»"“”]/g, "").replace(/[.;:,!?¡¿]+$/g, "").replace(/\s+/g, " ").trim();
const fold = (text: string) => text.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
const loose = (text: string) => text.replace(/[.,;:!?¡¿«»"“”]/g, "").replace(/\s+/g, " ").trim();

/** Alternatives named inside the key: «(o: X)», «(también: X)», «también «X»». */
function alternatives(key: string): string[] {
  const found: string[] = [];
  for (const match of key.matchAll(/\((?:o|también):\s*([^)]+)\)/gi)) found.push(match[1]);
  for (const match of key.matchAll(/también\s+«([^»]+)»/gi)) found.push(match[1]);
  return found.map(clean).filter(Boolean);
}

/** One list of accepted answers per gap of the sentence. */
export function acceptedAnswers(question: string, key: string): string[][] {
  const gaps = question.split("___").length - 1;
  if (gaps < 1) return [];
  // Explanations live inside brackets or after a semicolon; neither is part of the answer.
  const main = key.replace(/\([^)]*\)/g, " ").split(";")[0];
  if (gaps > 1) {
    let parts = main.split(/\s*[·/]\s*/).map(clean).filter(Boolean);
    if (parts.length !== gaps) parts = main.split(/\s*,\s*/).map(clean).filter(Boolean);
    // A key that does not give one answer per gap cannot be graded gap by gap.
    return Array.from({ length: gaps }, (_, gap) => (parts.length === gaps ? [parts[gap]] : []));
  }
  const options = main.split(/\s+(?:\/|o)\s+/).map(clean).filter(Boolean);
  // «Ø» in a key means the gap stays empty; a student types a dash or «nada» to say so.
  const none = options.includes("Ø") ? ["-", "–", "nada", "0"] : [];
  return [[...new Set([...options, ...alternatives(key), ...none])]];
}

export function gradeAnswer(value: string, accepted: string[]): Grade {
  const answer = loose(value);
  if (!answer) return "empty";
  if (!accepted.length) return "check";
  const options = accepted.map(loose);
  if (options.includes(answer)) return "right";
  // A sentence-initial gap is written with a capital in the key; the student may type either.
  if (options.some((option) => option.toLowerCase() === answer.toLowerCase())) return "right";
  if (options.some((option) => fold(option) === fold(answer))) return "accent";
  return "check";
}
