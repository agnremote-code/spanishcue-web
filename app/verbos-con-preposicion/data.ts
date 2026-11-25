import type { QuizItem } from "../mini-apps/ChoiceQuiz";
import { verbBySlug, verbPath, verbSlug } from "../conjugacion/verbos";
import { PREPOSICIONES, verbosPrep, verboPrepSlug, type Prep, type VerboPrep } from "./verbos";

export const PREP_PATH = "/verbos-con-preposicion";
export const prepVerbPath = (e: VerboPrep) => `${PREP_PATH}/${encodeURIComponent(verboPrepSlug(e))}`;
export const prepGroupPath = (p: Prep) => `${PREP_PATH}/preposicion-${p}`;
const cap = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);
const label = (e: VerboPrep) => `${e.v} ${e.p}`;

function quizItem(e: VerboPrep, sentence: string, tag?: string): QuizItem {
  const [before, after] = sentence.split("___");
  return { before, after, options: [...PREPOSICIONES], answer: PREPOSICIONES.indexOf(e.p), why: `Se dice «${label(e)}».`, ...(tag ? { tag } : {}) };
}

/** Sentences of other verbs whose preposition differs, spread over the list. */
function contrast(exclude: Prep | undefined, count: number, seed: number) {
  const pool = verbosPrep.filter((e) => e.p !== exclude);
  return Array.from({ length: count }, (_, k) => {
    const e = pool[(seed * 7 + k * 11) % pool.length];
    return quizItem(e, e.ex[(seed + k) % e.ex.length]);
  });
}

/** Infinitive whose conjugation page exists: «acordarse» → acordar, «darse cuenta» → dar. */
function conjugable(e: VerboPrep) {
  const first = e.v.split(" ")[0];
  const base = first.endsWith("se") && !verbBySlug.has(verbSlug(first)) ? first.slice(0, -2) : first;
  const verb = verbBySlug.get(verbSlug(base));
  return verb ? { verb, href: verbPath(verb) } : undefined;
}

export type PrepPage = VerboPrep & {
  slug: string; path: string; title: string; h1: string; description: string;
  quiz: QuizItem[]; related: VerboPrep[]; conj?: { verb: string; href: string };
  faq: { question: string; answer: string }[];
};

export function prepPage(e: VerboPrep): PrepPage {
  const idx = verbosPrep.indexOf(e);
  const name = label(e);
  const title = e.wrong ? `¿${cap(name)} o ${e.v} ${e.wrong}? Uso y ejercicio | SpanishCue` : `${cap(name)}: significado, ejemplos y ejercicio | SpanishCue`;
  const h1 = e.wrong ? `¿${cap(name)} o ${e.v} ${e.wrong}?` : `${cap(name)}: uso y ejemplos`;
  const quiz = [...e.ex.slice(0, 4).map((s) => quizItem(e, s)), ...contrast(e.p, 4, idx)];
  let description = e.wrong
    ? `Se dice «${name}», no «${e.v} ${e.wrong}». Significa ${e.meaning}. Con ejemplos y ${quiz.length} frases para elegir la preposición.`
    : `«${cap(name)}» significa ${e.meaning}. Con ejemplos y un ejercicio de ${quiz.length} frases para elegir la preposición correcta, con corrección al instante.`;
  if (description.length < 110) description += " Corrección al instante.";
  if (description.length > 165) description = `«${cap(name)}»: significado, ejemplos y un ejercicio de ${quiz.length} frases para elegir la preposición, con corrección al instante.`;
  const sameP = verbosPrep.filter((o) => o.p === e.p && o !== e);
  const at = sameP.findIndex((o) => verbosPrep.indexOf(o) > idx);
  const related = [...sameP.slice(Math.max(at, 0)), ...sameP.slice(0, Math.max(at, 0))].slice(0, 6);
  const example = e.ex[0].replace("___", e.p);
  const faq = [
    { question: e.wrong ? `¿Se dice «${name}» o «${e.v} ${e.wrong}»?` : `¿Qué preposición lleva ${e.v}?`, answer: `${e.wrong ? `Lo correcto es «${name}». ` : `Lleva la preposición «${e.p}». `}${e.note}` },
    { question: `¿Qué significa «${name}»?`, answer: `${cap(e.meaning)}. Por ejemplo: «${example}»` },
    { question: "¿En qué nivel se aprende?", answer: `Suele aparecer en ${e.level}. Conviene aprenderlo con la preposición desde el principio, como una sola unidad: «${name}».` },
    { question: "¿Cómo se usa el ejercicio en clase?", answer: "Proyecta la página y deja que el alumno elija la preposición antes de leer la frase completa en voz alta. Las últimas frases mezclan otros verbos para que tenga que decidir de verdad." },
  ];
  return { ...e, slug: verboPrepSlug(e), path: prepVerbPath(e), title, h1, description, quiz, related, conj: conjugable(e), faq };
}

const cache = new Map<string, PrepPage>();
export function prepPageBySlug(param: string): PrepPage | undefined {
  let slug = param;
  try { slug = decodeURIComponent(param).normalize("NFC"); } catch { return undefined; }
  const e = verbosPrep.find((x) => verboPrepSlug(x) === slug);
  if (!e) return undefined;
  if (!cache.has(slug)) cache.set(slug, prepPage(e));
  return cache.get(slug);
}

export type PrepGroup = { p: Prep; slug: string; path: string; title: string; h1: string; description: string; verbs: VerboPrep[]; quiz: QuizItem[]; faq: { question: string; answer: string }[] };

export function prepGroup(p: Prep): PrepGroup {
  const verbs = verbosPrep.filter((e) => e.p === p);
  const own = verbs.slice(0, 6).map((e, i) => quizItem(e, e.ex[(i + 1) % e.ex.length]));
  const quiz = own.flatMap((item, i) => [item, ...contrast(p, 1, i + 3)]);
  const P = p.toUpperCase();
  return {
    p, slug: `preposicion-${p}`, path: prepGroupPath(p),
    title: `Verbos con preposición ${P}: lista, ejemplos y ejercicio | SpanishCue`,
    h1: `Verbos con preposición «${p}»`,
    description: groupDescription(verbs, p, quiz.length),
    verbs, quiz,
    faq: [
      { question: `¿Qué verbos llevan la preposición «${p}»?`, answer: `Entre los más frecuentes: ${verbs.map(label).join(", ")}.` },
      { question: "¿Hay una regla para saber qué preposición lleva un verbo?", answer: "No siempre. Hay tendencias (los verbos de movimiento y de comienzo suelen llevar «a»; los de recuerdo y emoción, «de»), pero lo más eficaz es aprender cada verbo junto con su preposición." },
      { question: "¿Por qué los alumnos se equivocan tanto?", answer: "Porque traducen desde su lengua: «depend on» lleva a «depender en», «dream about» a «soñar en». Cada página del verbo explica el error típico." },
    ],
  };
}

export const prepGroups = PREPOSICIONES.map(prepGroup);

function groupDescription(verbs: VerboPrep[], p: Prep, n: number) {
  for (const take of [3, 2, 1]) {
    const text = `Los ${verbs.length} verbos más usados con «${p}» (${verbs.slice(0, take).map(label).join(", ")}…), con su significado, ejemplos y un ejercicio de ${n} frases para elegir la preposición.`;
    if (text.length <= 165) return text;
  }
  return `Los ${verbs.length} verbos más usados con «${p}», con su significado, ejemplos y un ejercicio de ${n} frases.`;
}

/** Twelve mixed sentences for the hub. */
export function hubQuiz(): QuizItem[] {
  return verbosPrep.filter((_, i) => i % 4 === 0).slice(0, 12).map((e, i) => quizItem(e, e.ex[(i + 2) % e.ex.length], label(e).replace(` ${e.p}`, "")));
}
