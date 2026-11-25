import { conjugateVerb, verbBySlug, verbPath, verbSlug } from "../conjugacion/verbos";
import { marcadores, type Marcador, type Uso } from "./marcadores";

export const PASADO_PATH = "/indefinido-o-imperfecto";
export const pasadoPath = (slug: string) => `${PASADO_PATH}/${slug}`;

const TENSES = {
  in: { key: "indefinido", label: "pretérito indefinido" },
  ii: { key: "imperfecto", label: "pretérito imperfecto" },
} as const;
const PRONOUNS = ["me", "te", "se", "nos", "os", "se"];

/** Same shape as the «¿indicativo o subjuntivo?» items, so MoodChooser renders both. */
export type PasadoItem = { before: string; after: string; verb: string; options: [string, string]; answer: 0 | 1; correctLabel: string; wrongLabel: string; correctTense: "indefinido" | "imperfecto" };

/** «mudarse» → mudar; «darse cuenta» → dar. */
function baseVerb(verb: string) {
  const head = verb.split(" ")[0];
  return head.endsWith("se") && !verbBySlug.has(verbSlug(head)) ? head.slice(0, -2) : head;
}

/** «mudarse» → «se mudaron»; «darse cuenta» → «te diste cuenta». */
function form(verb: string, key: "indefinido" | "imperfecto", person: number) {
  const [head, ...rest] = verb.split(" ");
  const base = baseVerb(verb);
  const word = conjugateVerb(base).tenses[key][person];
  return [base !== head ? PRONOUNS[person] : "", word, ...rest].filter(Boolean).join(" ");
}

function flip(text: string) {
  let h = 0;
  for (const ch of text) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  return (h & 1) as 0 | 1;
}

export function parsePasado(raw: string): PasadoItem {
  const [sentence, verb, person, good, bad] = raw.split("|");
  const right = TENSES[good as keyof typeof TENSES];
  const wrong = TENSES[bad as keyof typeof TENSES];
  if (!right || !wrong || right === wrong || sentence.split("___").length !== 2) throw new Error(`Bad item: ${raw}`);
  const p = Number(person);
  const correct = form(verb, right.key, p);
  const distractor = form(verb, wrong.key, p);
  const [before, after] = sentence.split("___");
  const answer = flip(sentence);
  return {
    before, after, verb: baseVerb(verb),
    options: answer === 0 ? [correct, distractor] : [distractor, correct],
    answer, correctLabel: right.label, wrongLabel: wrong.label, correctTense: right.key,
  };
}

export const USO_GROUPS: { uso: Uso; title: string; intro: string }[] = [
  { uso: "indefinido", title: "Marcadores de indefinido", intro: "Momentos cerrados, fechas, acciones que interrumpen y secuencias de hechos." },
  { uso: "imperfecto", title: "Marcadores de imperfecto", intro: "Costumbres, descripciones, etapas de la vida, la hora y la edad." },
  { uso: "depende", title: "Depende: los dos tiempos", intro: "El mismo marcador cambia de tiempo según se cuente un hecho o se describa una costumbre." },
];

export type PasadoPage = Marcador & {
  path: string; title: string; h1: string; description: string; kicker: string;
  playable: PasadoItem[]; verbs: { verb: string; href: string }[]; related: Marcador[];
  faq: { question: string; answer: string }[];
};

export function pasadoPage(m: Marcador): PasadoPage {
  const playable = m.items.map(parsePasado);
  const name = m.marker;
  const title = m.uso === "depende"
    ? `${name}: ¿indefinido o imperfecto? Regla y ejercicio | SpanishCue`
    : `${name}: ¿indefinido o imperfecto? Ejercicio | SpanishCue`;
  const h1 = `${name}: ¿indefinido o imperfecto?`;
  let description = m.uso === "depende"
    ? `Con «${name.toLowerCase()}» se usan los dos tiempos y cambia el sentido. La regla en una frase y ${playable.length} frases para elegir, con corrección al instante.`
    : `Con «${name.toLowerCase()}» se usa el ${m.uso}. La regla explicada en una frase y ${playable.length} frases para elegir el tiempo, con corrección al instante. Nivel ${m.level}.`;
  if (description.length > 165) description = `«${name}»: la regla para elegir entre indefinido e imperfecto y ${playable.length} frases para practicar, con corrección al instante.`;
  const verbs = [...new Set(playable.map((i) => i.verb))].filter((v) => verbBySlug.get(verbSlug(v)) === v).map((verb) => ({ verb, href: verbPath(verb) }));
  const same = marcadores.filter((o) => o.uso === m.uso && o !== m);
  const at = same.findIndex((o) => marcadores.indexOf(o) > marcadores.indexOf(m));
  const related = [...same.slice(Math.max(at, 0)), ...same.slice(0, Math.max(at, 0))].slice(0, 6);
  const ex = playable[0];
  const exampleSentence = `${ex.before}${ex.options[ex.answer]}${ex.after}`;
  const faq = [
    { question: `¿«${name}» va con indefinido o con imperfecto?`, answer: m.rule },
    { question: `¿Hay un ejemplo con «${name.toLowerCase()}»?`, answer: `«${exampleSentence}» La forma «${ex.options[ex.answer]}» está en ${ex.correctLabel}. ${m.tip}` },
    { question: "¿Los marcadores temporales deciden siempre el tiempo?", answer: "Ayudan mucho, pero no son una regla mecánica. Lo que decide es si se cuenta un hecho terminado (indefinido) o se describe una situación o una costumbre (imperfecto). Cada marcador tiene su uso más frecuente." },
    { question: "¿Cómo se usa este ejercicio en clase?", answer: "Proyecta la página y deja que el alumno elija la forma antes de explicar por qué. Funciona también como tarea: la corrección aparece al pulsar." },
  ];
  return {
    ...m, path: pasadoPath(m.slug), title, h1, description, playable, verbs, related, faq,
    kicker: `${m.uso === "depende" ? "Indefinido o imperfecto" : m.uso === "indefinido" ? "Pretérito indefinido" : "Pretérito imperfecto"} · ${m.level}`,
  };
}

const cache = new Map<string, PasadoPage>();
export function pasadoPageBySlug(slug: string): PasadoPage | undefined {
  const m = marcadores.find((x) => x.slug === slug);
  if (!m) return undefined;
  if (!cache.has(slug)) cache.set(slug, pasadoPage(m));
  return cache.get(slug);
}

export function pasadoMixed(): (PasadoItem & { tag: string })[] {
  return marcadores.filter((_, i) => i % 4 === 1).slice(0, 6).flatMap((m) => m.items.slice(2, 4).map((raw) => ({ ...parsePasado(raw), tag: m.marker })));
}
