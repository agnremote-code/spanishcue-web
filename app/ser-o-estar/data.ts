import type { QuizItem } from "../mini-apps/ChoiceQuiz";
import { conjugateVerb } from "../conjugacion/verbos";
import { adjetivos, usos, type Adjetivo, type Uso, type Verbo } from "./contenido";

export const SER_PATH = "/ser-o-estar";
export const serPath = (slug: string) => `${SER_PATH}/${slug}`;
const TENSE = { p: "presente", in: "indefinido" } as const;
const ser = conjugateVerb("ser").tenses;
const estar = conjugateVerb("estar").tenses;

/** «sentence|person[|tense]» → the gap item; options always read «ser form / estar form». */
function gap(sentence: string, person: string, tense: string | undefined, answer: Verbo, why: string, tag?: string): QuizItem {
  const key = TENSE[(tense || "p") as keyof typeof TENSE];
  const p = Number(person);
  if (!key || ![0, 1, 2, 3, 5].includes(p) || sentence.split("___").length !== 2) throw new Error(`Bad item: ${sentence}`);
  const [before, after] = sentence.split("___");
  return { before, after, options: [ser[key][p], estar[key][p]], answer: answer === "ser" ? 0 : 1, why, ...(tag ? { tag } : {}) };
}

export const usoItem = (u: Uso, raw: string, tag?: string) => {
  const [sentence, person, tense] = raw.split("|");
  return gap(sentence, person, tense, u.verb, `Se usa ${u.verb}: ${u.name.toLowerCase()}.`, tag);
};

export const adjItem = (a: Adjetivo, raw: string, tag?: string) => {
  const [sentence, person, which] = raw.split("|");
  if (which !== "s" && which !== "e") throw new Error(`Bad item: ${raw}`);
  const verb: Verbo = which === "s" ? "ser" : "estar";
  return gap(sentence, person, undefined, verb, `«${verb === "ser" ? "Ser" : "Estar"} ${a.adj}»: ${verb === "ser" ? a.ser : a.estar}.`, tag);
};

const cap = (t: string) => t.charAt(0).toUpperCase() + t.slice(1);
const rotate = <T,>(list: T[], from: T, n: number) => {
  const others = list.filter((x) => x !== from);
  const at = Math.max(list.indexOf(from), 0) % Math.max(others.length, 1);
  return [...others.slice(at), ...others.slice(0, at)].slice(0, n);
};

type Faq = { question: string; answer: string }[];
export type UsoPage = Uso & { kind: "uso"; path: string; title: string; h1: string; description: string; kicker: string; quiz: QuizItem[]; examples: string[]; related: Uso[]; faq: Faq };
export type AdjPage = Adjetivo & { kind: "adjetivo"; path: string; title: string; h1: string; description: string; kicker: string; quiz: QuizItem[]; related: Adjetivo[]; faq: Faq };

export function usoPage(u: Uso): UsoPage {
  const idx = usos.indexOf(u);
  const other = usos.filter((o) => o.verb !== u.verb);
  const contrast = [0, 1].map((k) => { const o = other[(idx * 3 + k * 5) % other.length]; return usoItem(o, o.items[(idx + k) % o.items.length]); });
  const quiz = [...u.items.map((raw) => usoItem(u, raw)), ...contrast];
  const examples = quiz.slice(0, 3).map((it) => `${it.before}${it.options[it.answer]}${it.after}`);
  const title = `${u.name}: ¿ser o estar? Regla y ejercicio | SpanishCue`;
  const h1 = `${u.name}: ¿ser o estar?`;
  let description = `${u.rule} Con ejemplos y un ejercicio de ${quiz.length} frases para elegir entre ser y estar.`;
  if (description.length > 165) description = `${u.name}: cuándo se usa ${u.verb}, con ejemplos y un ejercicio de ${quiz.length} frases para elegir entre ser y estar, con corrección al instante.`;
  if (description.length < 110) description += " Corrección al instante.";
  const faq = [
    { question: `¿${u.name}: se dice con ser o con estar?`, answer: `Con ${u.verb}. ${u.rule}` },
    { question: "¿Hay algún ejemplo?", answer: `«${examples[0]}» ${u.tip}` },
    { question: "¿Cómo se usa el ejercicio en clase?", answer: "Proyecta la página y deja que el alumno elija la forma antes de explicar el porqué. Las dos últimas frases son de otro uso, con el otro verbo, para que tenga que decidir de verdad." },
  ];
  return { ...u, kind: "uso", path: serPath(u.slug), title, h1, description, kicker: `Ser o estar · ${cap(u.verb)} · ${u.level}`, quiz, examples, related: rotate(usos.filter((o) => o.verb === u.verb), u, 6), faq };
}

export function adjPage(a: Adjetivo): AdjPage {
  const quiz = a.items.map((raw) => adjItem(a, raw));
  const title = `¿Ser ${a.adj} o estar ${a.adj}? Diferencia y ejercicio | SpanishCue`;
  const h1 = `¿Ser ${a.adj} o estar ${a.adj}?`;
  let description = `Ser ${a.adj}: ${a.ser}. Estar ${a.adj}: ${a.estar}. La diferencia con ejemplos y ${quiz.length} frases para elegir el verbo.`;
  if (description.length > 165) description = `La diferencia entre «ser ${a.adj}» y «estar ${a.adj}», con ejemplos y un ejercicio de ${quiz.length} frases para elegir el verbo, con corrección al instante.`;
  if (description.length < 110) description += " Corrección al instante.";
  const ex = (which: "s" | "e") => { const it = quiz[a.items.findIndex((r) => r.endsWith(`|${which}`))]; return `${it.before}${it.options[it.answer]}${it.after}`; };
  const faq = [
    { question: `¿Qué diferencia hay entre «ser ${a.adj}» y «estar ${a.adj}»?`, answer: `Con ser: ${a.ser}, como en «${ex("s")}» Con estar: ${a.estar}, como en «${ex("e")}»` },
    { question: `¿Por qué cambia el significado de «${a.adj}»?`, answer: `Ser presenta una cualidad que define a alguien o algo; estar, un estado o una situación. ${a.note}` },
    { question: "¿Qué otros adjetivos cambian de significado con ser y estar?", answer: `Entre los más frecuentes: ${adjetivos.filter((o) => o !== a).slice(0, 8).map((o) => o.adj).join(", ")}.` },
  ];
  return { ...a, kind: "adjetivo", path: serPath(a.slug), title, h1, description, kicker: `Ser o estar · Adjetivos que cambian de significado · ${a.level}`, quiz, related: rotate(adjetivos, a, 6), faq };
}

const cache = new Map<string, UsoPage | AdjPage>();
export function serPageBySlug(slug: string): UsoPage | AdjPage | undefined {
  if (cache.has(slug)) return cache.get(slug);
  const u = usos.find((x) => x.slug === slug);
  const a = u ? undefined : adjetivos.find((x) => x.slug === slug);
  const page = u ? usoPage(u) : a ? adjPage(a) : undefined;
  if (page) cache.set(slug, page);
  return page;
}

export const serSlugs = () => [...usos.map((u) => u.slug), ...adjetivos.map((a) => a.slug)];

/** Twelve mixed sentences for the hub: six uses and six adjectives. */
export function serMixed(): QuizItem[] {
  const fromUsos = usos.filter((_, i) => i % 2 === 0).slice(0, 6).map((u, i) => usoItem(u, u.items[(i + 1) % u.items.length]));
  const fromAdj = adjetivos.filter((_, i) => i % 3 === 0).slice(0, 6).map((a, i) => adjItem(a, a.items[(i + 2) % a.items.length]));
  return fromUsos.flatMap((it, i) => [it, fromAdj[i]]);
}
