import type { TenseKey } from "../conjugacion/engine";
import { conjugateVerb, verbBySlug, verbPath, verbSlug } from "../conjugacion/verbos";
import { expresiones, type Expresion, type Mood } from "./expresiones";

export const MODO_PATH = "/indicativo-o-subjuntivo";
export const modoPath = (slug: string) => `${MODO_PATH}/${slug}`;

const TENSES: Record<string, { key: TenseKey; label: string; mood: "subjuntivo" | "indicativo" }> = {
  sp: { key: "subjPresente", label: "presente de subjuntivo", mood: "subjuntivo" },
  si: { key: "subjImperfecto", label: "imperfecto de subjuntivo", mood: "subjuntivo" },
  pi: { key: "presente", label: "presente de indicativo", mood: "indicativo" },
  ii: { key: "imperfecto", label: "imperfecto de indicativo", mood: "indicativo" },
  in: { key: "indefinido", label: "pretérito indefinido", mood: "indicativo" },
  fi: { key: "futuro", label: "futuro de indicativo", mood: "indicativo" },
};

/** One playable sentence: the two buttons, which one is right and why. */
export type ModoItem = {
  before: string; after: string; verb: string; options: [string, string]; answer: 0 | 1;
  correctLabel: string; wrongLabel: string; correctMood: "subjuntivo" | "indicativo";
};

/** Stable pseudo-random order so the right button is not always on the left. */
function flip(text: string) {
  let h = 0;
  for (const ch of text) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  return (h & 1) as 0 | 1;
}

export function parseItem(raw: string): ModoItem {
  const [sentence, verb, person, good, bad] = raw.split("|");
  const p = Number(person);
  const tenses = conjugateVerb(verb).tenses;
  const right = TENSES[good];
  const wrong = TENSES[bad];
  if (!right || !wrong || !sentence.includes("___")) throw new Error(`Bad item: ${raw}`);
  // Impersonal haber: «hay», not the auxiliary «ha».
  const form = (key: TenseKey) => (verb === "haber" && key === "presente" && p === 2 ? "hay" : tenses[key][p]);
  const correct = form(right.key);
  const distractor = form(wrong.key);
  const [before, after] = sentence.split("___");
  const answer = flip(sentence);
  return {
    before, after, verb,
    options: answer === 0 ? [correct, distractor] : [distractor, correct],
    answer, correctLabel: right.label, wrongLabel: wrong.label, correctMood: right.mood,
  };
}

const MOOD_TITLE: Record<Mood, string> = { subjuntivo: "subjuntivo", indicativo: "indicativo", depende: "¿indicativo o subjuntivo?" };
export const MOOD_GROUPS: { mood: Mood; title: string; intro: string }[] = [
  { mood: "subjuntivo", title: "Siempre o casi siempre con subjuntivo", intro: "Deseos, finalidad, emociones, valoraciones, duda y condiciones irreales." },
  { mood: "indicativo", title: "Con indicativo", intro: "Opiniones afirmativas, certeza, causa y condiciones reales." },
  { mood: "depende", title: "Depende: los dos modos", intro: "La elección cambia el significado: futuro o pasado, hecho o posibilidad, información u orden." },
];

export type ModoPage = Expresion & {
  path: string; title: string; h1: string; description: string; kicker: string;
  playable: ModoItem[]; verbs: { verb: string; href: string }[]; related: Expresion[];
  faq: { question: string; answer: string }[];
};

function shortExpr(e: Expresion) {
  return e.expr.replace(/…/g, "...");
}

export function modoPage(e: Expresion): ModoPage {
  const playable = e.items.map(parseItem);
  const name = shortExpr(e);
  const named = e.expr.toLowerCase().includes(e.mood);
  const title = e.mood === "depende"
    ? `${name}: ¿indicativo o subjuntivo? Regla y ejercicio | SpanishCue`
    : `${named ? name : `${name} + ${e.mood}`}: regla y ejercicio interactivo | SpanishCue`;
  const h1 = e.mood === "depende" ? `${e.expr}: ¿indicativo o subjuntivo?` : named ? e.expr : `${e.expr} + ${e.mood}`;
  const lead = e.mood === "depende" ? `¿${e.expr} va con indicativo o con subjuntivo? Depende` : named ? `${e.expr}, cuándo se usa` : `¿Por qué «${e.expr.toLowerCase()}» lleva ${e.mood}?`;
  let description = `${lead}: la regla explicada en una frase y ${playable.length} frases para elegir la forma correcta, con corrección al instante. Nivel ${e.level}.`;
  if (description.length > 165) description = `${e.expr}: la regla de ${MOOD_TITLE[e.mood]} en una frase y ${playable.length} frases para elegir la forma correcta, con corrección al instante. Nivel ${e.level}.`;
  const verbs = [...new Set(playable.map((item) => item.verb))]
    .filter((verb) => verbBySlug.get(verbSlug(verb)) === verb)
    .map((verb) => ({ verb, href: verbPath(verb) }));
  const sameMood = expresiones.filter((other) => other.slug !== e.slug && other.mood === e.mood);
  const index = sameMood.findIndex((other) => expresiones.indexOf(other) > expresiones.indexOf(e));
  const related = [...sameMood.slice(Math.max(index, 0)), ...sameMood.slice(0, Math.max(index, 0))].slice(0, 6);
  const example = playable[0];
  const exampleSentence = `${example.before}${example.options[example.answer]}${example.after}`;
  const faq = [
    {
      question: e.mood === "depende" ? `¿${e.expr} lleva indicativo o subjuntivo?` : `¿${e.expr} lleva subjuntivo o indicativo?`,
      answer: e.rule,
    },
    { question: `¿Cuál es un ejemplo con «${e.expr.toLowerCase()}»?`, answer: `«${exampleSentence}» La forma «${example.options[example.answer]}» está en ${example.correctLabel}. ${e.tip}` },
    { question: "¿En qué nivel se enseña?", answer: `Normalmente en ${e.level}, según el MCER y el Plan Curricular del Instituto Cervantes. Conviene practicarlo después de conocer bien las formas del presente de subjuntivo.` },
    { question: "¿Cómo se usa este ejercicio en clase?", answer: "Proyecta la página y deja que el alumno elija la forma antes de decir por qué. La explicación del error aparece al pulsar, así que también sirve como tarea o repaso de cinco minutos." },
  ];
  return {
    ...e, path: modoPath(e.slug), title, h1, description, playable, verbs, related, faq,
    kicker: e.mood === "depende" ? `Indicativo o subjuntivo · ${e.level}` : `${e.mood === "subjuntivo" ? "Subjuntivo" : "Indicativo"} · ${e.level}`,
  };
}

const pageCache = new Map<string, ModoPage>();
export function modoPageBySlug(slug: string): ModoPage | undefined {
  const e = expresiones.find((x) => x.slug === slug);
  if (!e) return undefined;
  let page = pageCache.get(slug);
  if (!page) { page = modoPage(e); pageCache.set(slug, page); }
  return page;
}

/** Twelve mixed sentences for the hub: two from each of six expressions spread across moods. */
export function mixedItems(): (ModoItem & { slug: string; expr: string })[] {
  const picks = expresiones.filter((_, i) => i % 6 === 0);
  return picks.flatMap((e) => e.items.slice(1, 3).map((raw) => ({ ...parseItem(raw), slug: e.slug, expr: e.expr })));
}
