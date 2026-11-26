import type { QuizItem } from "../mini-apps/ChoiceQuiz";
import { gapFamilies, type GapFamily, type GapPage } from "./families";

function hash(text: string) {
  let h = 0;
  for (const ch of text) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  return h;
}

/** "sentence|correct|wrong[|wrong]" → quiz item; the correct option's position depends on the sentence. */
export function gapItem(raw: string, why: string, index = 0): QuizItem {
  const [sentence, correct, ...wrong] = raw.split("|");
  const parts = sentence.split("___");
  if (parts.length !== 2 || !parts[0].replace(/[¿¡]/g, "").trim() || !correct || !wrong.length || new Set([correct, ...wrong]).size !== wrong.length + 1) throw new Error(`Bad item: ${raw}`);
  const answer = (hash(sentence) + index) % (wrong.length + 1);
  const options = [...wrong];
  options.splice(answer, 0, correct);
  return { before: parts[0], after: parts[1], options, answer, why };
}

const why = (p: GapPage) => (p.rule.length <= 160 ? p.rule : `${p.rule.split(":")[0].replace(/\.$/, "")}.`);

const fill = (it: QuizItem) => `${it.before}${it.options[it.answer]}${it.after}`;

export type GapPageView = GapPage & { family: GapFamily; path: string; title: string; h1: string; description: string; kicker: string; quiz: QuizItem[]; examples: string[]; related: GapPage[]; faq: { question: string; answer: string }[] };

export const gapPath = (f: GapFamily, slug: string) => `${f.path}/${slug}`;

export function gapPage(f: GapFamily, p: GapPage): GapPageView {
  const quiz = p.items.map((raw, i) => gapItem(raw, why(p), i));
  const examples = quiz.slice(0, 3).map(fill);
  const short = p.name.split(" (")[0];
  const heading = p.name.endsWith("?") ? `${p.name} Ejercicios` : `${p.name}: ejercicios`;
  let title = `${heading} | SpanishCue`;
  if (title.length > 70) title = `${short}: ejercicios con solución | SpanishCue`;
  const lead = short.endsWith("?") ? short : `${short}:`;
  let description = `${p.rule} Ejercicio de ${quiz.length} frases con corrección al instante.`;
  if (description.length > 165) description = `${lead} La regla en una frase y un ejercicio de ${quiz.length} frases sobre ${f.topic}, con corrección al instante.`;
  if (description.length > 165) description = `${lead} La regla y un ejercicio de ${quiz.length} frases con corrección al instante. Para clase o para practicar solo.`;
  if (description.length < 110) description += " Para clase o para practicar solo.";
  const at = f.pages.indexOf(p);
  const related = [...f.pages.slice(at + 1), ...f.pages.slice(0, at)];
  const faq = [
    { question: `${short}: ¿cuál es la regla?`, answer: p.rule },
    { question: "¿Hay algún ejemplo?", answer: `«${examples[0]}» ${p.tip}` },
    { question: "¿Cómo se usa el ejercicio en clase?", answer: "Proyecta la página y deja que el alumno elija antes de explicar el porqué. También sirve como tarea: la corrección aparece al pulsar y la solución está debajo de cada frase." },
  ];
  return { ...p, family: f, path: gapPath(f, p.slug), title, h1: heading, description, kicker: `${f.label} · ${p.level}`, quiz, examples, related, faq };
}

const cache = new Map<string, GapPageView>();
export function gapPageBySlug(f: GapFamily, slug: string): GapPageView | undefined {
  const key = `${f.key}/${slug}`;
  if (cache.has(key)) return cache.get(key);
  const p = f.pages.find((x) => x.slug === slug);
  if (!p) return undefined;
  const view = gapPage(f, p);
  cache.set(key, view);
  return view;
}

/** Twelve sentences for a family hub, taken across its pages. */
export function gapMixed(f: GapFamily): QuizItem[] {
  const out: QuizItem[] = [];
  for (let round = 0; out.length < 12 && round < 6; round++) {
    for (const p of f.pages) {
      if (out.length >= 12) break;
      const raw = p.items[(round * 3 + 1) % p.items.length];
      out.push({ ...gapItem(raw, why(p)), tag: p.name });
    }
  }
  return out;
}

export const gapPaths = () => gapFamilies.flatMap((f) => [f.path, ...f.pages.map((p) => gapPath(f, p.slug))]);
