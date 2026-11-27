/**
 * Entrenador de verbos: the pure logic of the conjugation drill (no React, no
 * browser APIs), so tests can run it in Node.
 *
 * Forms come from the public conjugation engine (app/conjugacion), which the
 * free /conjugacion pages already publish: the drill adds no new data to the
 * Worker bundle and nothing here is premium content. FREE / PRO only decides
 * which tenses and verb sets the trainer offers; the server says who is PRO
 * (app/api/verb-trainer/access).
 */
import type { Forms, TenseKey } from "../conjugacion/engine";
import { IMPERSONAL, TOP_VERBS, conjugateVerb, isIrregular, verbFromParam, verbos } from "../conjugacion/verbos";

export const TRAINER_PATH = "/practicar-conjugacion";
/** English twin (app/spanish-conjugation-practice): same trainer, English interface. */
export const TRAINER_PATH_EN = "/spanish-conjugation-practice";
export const TRAINER_ACCESS_PATH = "/api/verb-trainer/access";
export const TRAINER_STORAGE_KEY = "spanishcue:entrenador-verbos:v1";

export type Mood = "indicativo" | "compuesto" | "subjuntivo" | "imperativo";
export type DrillTense = { key: TenseKey; label: string; short: string; mood: Mood; pro: boolean };

/** Order = teaching order. -se forms of the imperfect subjunctive are accepted, not drilled apart. */
export const DRILL_TENSES: DrillTense[] = [
  { key: "presente", label: "Presente", short: "Presente", mood: "indicativo", pro: false },
  { key: "indefinido", label: "Pretérito indefinido", short: "Indefinido", mood: "indicativo", pro: false },
  { key: "imperfecto", label: "Pretérito imperfecto", short: "Imperfecto", mood: "indicativo", pro: false },
  { key: "futuro", label: "Futuro simple", short: "Futuro", mood: "indicativo", pro: false },
  { key: "condicional", label: "Condicional simple", short: "Condicional", mood: "indicativo", pro: false },
  { key: "perfecto", label: "Pretérito perfecto", short: "Perfecto", mood: "compuesto", pro: false },
  { key: "pluscuamperfecto", label: "Pretérito pluscuamperfecto", short: "Pluscuamperfecto", mood: "compuesto", pro: true },
  { key: "futuroPerfecto", label: "Futuro compuesto", short: "Futuro compuesto", mood: "compuesto", pro: true },
  { key: "condicionalPerfecto", label: "Condicional compuesto", short: "Condicional comp.", mood: "compuesto", pro: true },
  { key: "subjPresente", label: "Presente de subjuntivo", short: "Subj. presente", mood: "subjuntivo", pro: true },
  { key: "subjImperfecto", label: "Imperfecto de subjuntivo", short: "Subj. imperfecto", mood: "subjuntivo", pro: true },
  { key: "subjPerfecto", label: "Pretérito perfecto de subjuntivo", short: "Subj. perfecto", mood: "subjuntivo", pro: true },
  { key: "subjPluscuamperfecto", label: "Pluscuamperfecto de subjuntivo", short: "Subj. pluscuamp.", mood: "subjuntivo", pro: true },
  { key: "imperativo", label: "Imperativo afirmativo", short: "Imperativo", mood: "imperativo", pro: true },
  { key: "imperativoNegativo", label: "Imperativo negativo", short: "Imperativo neg.", mood: "imperativo", pro: true },
];
export const TENSE_BY_KEY = new Map(DRILL_TENSES.map((tense) => [tense.key, tense]));
export const FREE_TENSES = DRILL_TENSES.filter((tense) => !tense.pro).map((tense) => tense.key);
export const MOOD_LABEL: Record<Mood, string> = { indicativo: "Indicativo", compuesto: "Tiempos compuestos", subjuntivo: "Subjuntivo", imperativo: "Imperativo" };

export const PERSON_LABELS = ["yo", "tú", "él / ella / usted", "nosotros", "vosotros", "ellos / ellas / ustedes"] as const;
const IMPERATIVE_LABELS = ["", "tú", "usted", "nosotros", "vosotros", "ustedes"] as const;
export function personLabel(tense: TenseKey, person: number) {
  return tense.startsWith("imperativo") ? IMPERATIVE_LABELS[person] : PERSON_LABELS[person];
}

const known = new Set(verbos);
/** The 100 most frequent verbs in class (A1–B1). The free trainer drills these. */
export const FREE_VERBS: string[] = [...new Set(`
ser estar tener haber hacer ir poder decir querer saber poner venir dar ver salir pensar conocer volver pedir dormir
jugar empezar seguir traer oír hablar comer vivir llegar gustar llamar llevar dejar pasar deber parecer quedar creer
encontrar sentir conseguir mirar esperar buscar trabajar entrar escribir leer entender recordar terminar perder abrir
cerrar comprar tomar beber estudiar aprender viajar cocinar bailar caminar correr nadar ayudar usar cambiar necesitar
vender pagar preguntar responder contestar escuchar enseñar mostrar contar costar almorzar cenar desayunar limpiar
lavar preferir repetir servir morir nacer caer construir conducir traducir elegir recibir subir decidir olvidar ganar
visitar mandar mover`.trim().split(/\s+/))].filter((verb) => known.has(verb));

/** 1258 → «1.258» (Intl does not group four-digit numbers in Spanish); English passes ",". */
export const formatCount = (value: number, separator = ".") => String(value).replace(/\B(?=(\d{3})+$)/g, separator);
export const VERB_TOTAL = verbos.length;

export type VerbSetKey = "top" | "frecuentes" | "irregulares" | "regulares" | "todos" | "lista";
export type VerbSet = { key: VerbSetKey; label: string; hint: string; pro: boolean };
export const VERB_SETS: VerbSet[] = [
  { key: "top", label: "Los 30 imprescindibles", hint: "ser, estar, tener, ir, hacer…", pro: false },
  { key: "frecuentes", label: "Los 100 más usados", hint: "Todo lo que sale en clase de A1 a B1", pro: false },
  { key: "irregulares", label: "Solo irregulares", hint: "Los irregulares de los 100 más usados", pro: false },
  { key: "regulares", label: "Solo regulares", hint: "Para fijar las terminaciones", pro: false },
  { key: "todos", label: `Todos los verbos (${formatCount(verbos.length)})`, hint: "Del diccionario completo de SpanishCue", pro: true },
  { key: "lista", label: "Mi lista", hint: "Escribe los verbos que quieres practicar", pro: false },
];
/** A free custom list holds this many verbs; PRO has no limit. */
export const FREE_LIST_LIMIT = 10;

const drillable = (verb: string) => known.has(verb) && !IMPERSONAL.has(verb);

/** Parses «tener, pedir dormir» into known infinitives (accents optional, duplicates dropped). */
export function parseVerbList(text: string): { verbs: string[]; unknown: string[] } {
  const verbs: string[] = [];
  const unknown: string[] = [];
  for (const raw of text.toLowerCase().split(/[\s,;·/]+/)) {
    const word = raw.trim();
    if (!word) continue;
    const verb = verbFromParam(word);
    if (verb && drillable(verb)) { if (!verbs.includes(verb)) verbs.push(verb); } else if (!unknown.includes(word)) unknown.push(word);
  }
  return { verbs, unknown };
}

export function verbsForSet(set: VerbSetKey, list: string[] = []): string[] {
  switch (set) {
    case "top": return TOP_VERBS.filter(drillable);
    case "frecuentes": return FREE_VERBS.filter(drillable);
    case "irregulares": return FREE_VERBS.filter((verb) => drillable(verb) && isIrregular(verb));
    case "regulares": return FREE_VERBS.filter((verb) => drillable(verb) && !isIrregular(verb));
    case "todos": return verbos.filter(drillable);
    case "lista": return list.filter(drillable);
  }
}

export type Settings = {
  tenses: TenseKey[];
  set: VerbSetKey;
  list: string[];
  vosotros: boolean;
  /** true: a missing or wrong accent counts as a mistake. */
  strictAccents: boolean;
  /** Cards per round; 0 = until the student stops. */
  length: number;
};
export const DEFAULT_SETTINGS: Settings = { tenses: ["presente"], set: "top", list: [], vosotros: false, strictAccents: true, length: 20 };
export const ROUND_LENGTHS = [10, 20, 50, 0] as const;

/** Drops what the visitor may not use (PRO tenses and sets, oversized free lists) and repairs empty choices. */
export function allowedSettings(settings: Settings, pro: boolean): { settings: Settings; removed: TenseKey[] } {
  const removed = pro ? [] : settings.tenses.filter((key) => TENSE_BY_KEY.get(key)?.pro);
  let tenses = settings.tenses.filter((key) => TENSE_BY_KEY.has(key) && !removed.includes(key));
  if (!tenses.length) tenses = ["presente"];
  let set = settings.set;
  if (!pro && VERB_SETS.find((item) => item.key === set)?.pro) set = "frecuentes";
  let list = settings.list.filter(drillable);
  if (!pro) list = list.slice(0, FREE_LIST_LIMIT);
  if (set === "lista" && !list.length) set = "top";
  const length = (ROUND_LENGTHS as readonly number[]).includes(settings.length) ? settings.length : 20;
  return { settings: { ...settings, tenses, set, list, length }, removed };
}

// ── Share links: /practicar-conjugacion?t=presente,indefinido&v=tener,ir ──

export function settingsFromQuery(query: URLSearchParams, base: Settings = DEFAULT_SETTINGS): Settings {
  const next = { ...base };
  const tenses = (query.get("t") ?? "").split(",").filter((key): key is TenseKey => TENSE_BY_KEY.has(key as TenseKey));
  if (tenses.length) next.tenses = tenses;
  const verbs = query.get("v");
  if (verbs) {
    const { verbs: list } = parseVerbList(verbs);
    if (list.length) { next.set = "lista"; next.list = list; }
  }
  const set = query.get("s") as VerbSetKey | null;
  if (set && VERB_SETS.some((item) => item.key === set) && set !== "lista") next.set = set;
  if (query.get("vosotros") === "1") next.vosotros = true;
  return next;
}

export function shareQuery(settings: Settings): string {
  const query = new URLSearchParams();
  query.set("t", settings.tenses.join(","));
  if (settings.set === "lista") query.set("v", settings.list.join(","));
  else query.set("s", settings.set);
  if (settings.vosotros) query.set("vosotros", "1");
  return query.toString();
}

// ── Cards and answers ──

export type Card = { verb: string; tense: TenseKey; person: number };
export const cardKey = (card: Card) => `${card.verb}|${card.tense}|${card.person}`;
export function cardFromKey(key: string): Card | null {
  const [verb, tense, person] = key.split("|");
  const index = Number(person);
  if (!verb || !TENSE_BY_KEY.has(tense as TenseKey) || !Number.isInteger(index) || index < 0 || index > 5) return null;
  return { verb, tense: tense as TenseKey, person: index };
}

export function personsFor(tense: TenseKey, vosotros: boolean): number[] {
  return [0, 1, 2, 3, 4, 5].filter((person) => (vosotros || person !== 4) && !(person === 0 && tense.startsWith("imperativo")));
}

/** Leading «no» of the negative imperative is printed before the answer box, not typed. */
export const answerPrefix = (tense: TenseKey) => (tense === "imperativoNegativo" ? "no" : "");

const formsCache = new Map<string, Record<TenseKey, Forms>>();
function tensesOf(verb: string) {
  let tenses = formsCache.get(verb);
  if (!tenses) {
    tenses = conjugateVerb(verb).tenses;
    if (formsCache.size > 400) formsCache.clear();
    formsCache.set(verb, tenses);
  }
  return tenses;
}

const stripNo = (form: string) => form.replace(/^no\s+/, "");

/** The expected form without its printed prefix, plus accepted alternatives (-se subjunctive). */
export function expectedForms(card: Card): string[] {
  const tenses = tensesOf(card.verb);
  const main = stripNo(tenses[card.tense][card.person] ?? "");
  const answers = [main];
  if (card.tense === "subjImperfecto") answers.push(tenses.subjImperfectoSe[card.person]);
  if (card.tense === "subjPluscuamperfecto") answers.push(main.replace(/^hubi([eé])ra/, "hubi$1se"));
  return answers.filter((form, index, all) => form && all.indexOf(form) === index);
}

/** The whole row of the tense, for the feedback panel. */
export function tenseRow(card: Card, vosotros: boolean): { person: string; form: string; current: boolean }[] {
  const forms = tensesOf(card.verb)[card.tense];
  return personsFor(card.tense, vosotros).map((person) => ({ person: personLabel(card.tense, person), form: forms[person], current: person === card.person }));
}

const PRONOUNS = /^(?:yo|tú|tu|él|ella|usted|nosotros|nosotras|vosotros|vosotras|ellos|ellas|ustedes|uds?\.?)\s+/;
const ACCENTS: Record<string, string> = { á: "a", é: "e", í: "i", ó: "o", ú: "u", ü: "u" };
const plain = (text: string) => text.replace(/[áéíóúü]/g, (c) => ACCENTS[c]);

export function normalizeAnswer(text: string, tense: TenseKey): string {
  let value = text.normalize("NFC").toLowerCase().replace(/[.!¡?¿]/g, " ").replace(/\s+/g, " ").trim();
  value = value.replace(PRONOUNS, "");
  if (tense === "imperativoNegativo") value = stripNo(value);
  return value;
}

export type Verdict = "correct" | "accent" | "wrong";
export type Result = { verdict: Verdict; expected: string; counted: boolean };

/** «accent»: right letters, wrong or missing accents. It counts as right only when accents are not strict. */
export function checkAnswer(card: Card, typed: string, strictAccents: boolean): Result {
  const answers = expectedForms(card);
  const value = normalizeAnswer(typed, card.tense);
  const exact = answers.find((form) => form === value);
  if (exact) return { verdict: "correct", expected: exact, counted: true };
  const loose = answers.find((form) => plain(form) === plain(value));
  if (loose && value) return { verdict: "accent", expected: loose, counted: !strictAccents };
  return { verdict: "wrong", expected: answers[0], counted: false };
}

/** Marks the letters of `expected` the student missed (simple common-prefix/suffix diff). */
export function diffMarks(typed: string, expected: string): { text: string; miss: boolean }[] {
  const a = typed;
  const b = expected;
  let start = 0;
  while (start < a.length && start < b.length && a[start] === b[start]) start++;
  let end = 0;
  while (end < a.length - start && end < b.length - start && a[a.length - 1 - end] === b[b.length - 1 - end]) end++;
  const parts = [
    { text: b.slice(0, start), miss: false },
    { text: b.slice(start, b.length - end), miss: true },
    { text: b.slice(b.length - end), miss: false },
  ];
  return parts.filter((part) => part.text);
}

// ── Memory: spaced repetition in the browser ──

/** [box 0–5, due (minutes since epoch), right, wrong] */
export type ItemState = [number, number, number, number];
export type Memory = {
  v: 1;
  items: Record<string, ItemState>;
  /** Answers per local day (YYYY-MM-DD). */
  days: Record<string, number>;
  /** [right, wrong] per tense. */
  tenses: Partial<Record<TenseKey, [number, number]>>;
  best: number;
  settings?: Settings;
};
export const emptyMemory = (): Memory => ({ v: 1, items: {}, days: {}, tenses: {}, best: 0 });

/** Minutes until the next review after reaching each box. */
export const INTERVALS = [1, 10, 60 * 24, 60 * 24 * 3, 60 * 24 * 7, 60 * 24 * 21];
export const MASTERED_BOX = 4;
const MAX_ITEMS = 6000;

export const nowMinutes = (date = Date.now()) => Math.floor(date / 60000);
export function dayKey(date = new Date()) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

export function parseMemory(raw: string | null): Memory {
  if (!raw) return emptyMemory();
  try {
    const value = JSON.parse(raw) as Partial<Memory>;
    if (value?.v !== 1 || typeof value.items !== "object" || !value.items) return emptyMemory();
    return { v: 1, items: value.items, days: value.days ?? {}, tenses: value.tenses ?? {}, best: Number(value.best) || 0, settings: value.settings };
  } catch {
    return emptyMemory();
  }
}

/** Records one answer (returns a new object). */
export function remember(memory: Memory, card: Card, right: boolean, minutes = nowMinutes(), today = dayKey()): Memory {
  const key = cardKey(card);
  const [box, , hits, misses] = memory.items[key] ?? [0, 0, 0, 0];
  const nextBox = right ? Math.min(box + 1, INTERVALS.length - 1) : 0;
  const items = { ...memory.items, [key]: [nextBox, minutes + INTERVALS[nextBox], hits + (right ? 1 : 0), misses + (right ? 0 : 1)] as ItemState };
  const keys = Object.keys(items);
  if (keys.length > MAX_ITEMS) {
    // Forget the items reviewed furthest in the future (best known) first.
    keys.sort((x, y) => items[y][1] - items[x][1]).slice(0, keys.length - MAX_ITEMS).forEach((old) => delete items[old]);
  }
  const [r, w] = memory.tenses[card.tense] ?? [0, 0];
  return {
    ...memory,
    items,
    days: { ...memory.days, [today]: (memory.days[today] ?? 0) + 1 },
    tenses: { ...memory.tenses, [card.tense]: [r + (right ? 1 : 0), w + (right ? 0 : 1)] },
  };
}

export type Pool = { verbs: string[]; tenses: TenseKey[]; vosotros: boolean };
export const poolOf = (settings: Settings): Pool => ({ verbs: verbsForSet(settings.set, settings.list), tenses: settings.tenses, vosotros: settings.vosotros });

function inPool(card: Card, pool: Pool) {
  return pool.tenses.includes(card.tense) && pool.verbs.includes(card.verb) && personsFor(card.tense, pool.vosotros).includes(card.person);
}

export function dueCards(memory: Memory, pool: Pool | null, minutes = nowMinutes()): Card[] {
  const due: { card: Card; at: number }[] = [];
  for (const [key, state] of Object.entries(memory.items)) {
    if (state[1] > minutes) continue;
    const card = cardFromKey(key);
    if (card && (!pool || inPool(card, pool))) due.push({ card, at: state[1] });
  }
  return due.sort((a, b) => a.at - b.at).map((item) => item.card);
}

/**
 * Next card: half the time the oldest due review of this pool, otherwise a
 * random card that is new or still weak. `recent` keys are never repeated.
 */
export function nextCard(memory: Memory, pool: Pool, recent: string[], random = Math.random, minutes = nowMinutes()): Card | null {
  if (!pool.verbs.length || !pool.tenses.length) return null;
  const due = dueCards(memory, pool, minutes).filter((card) => !recent.includes(cardKey(card)));
  if (due.length && random() < 0.5) return due[0];
  let fallback: Card | null = null;
  for (let attempt = 0; attempt < 24; attempt++) {
    const tense = pool.tenses[Math.floor(random() * pool.tenses.length)];
    const persons = personsFor(tense, pool.vosotros);
    const card = { verb: pool.verbs[Math.floor(random() * pool.verbs.length)], tense, person: persons[Math.floor(random() * persons.length)] };
    const key = cardKey(card);
    if (recent.includes(key) || !expectedForms(card).length) continue;
    fallback ??= card;
    const state = memory.items[key];
    if (!state || state[0] < 3 || state[1] <= minutes) return card;
  }
  return fallback ?? due[0] ?? null;
}

// ── Stats ──

export type Stats = {
  answered: number; accuracy: number; streak: number; today: number; mastered: number; due: number;
  tenses: { key: TenseKey; label: string; right: number; total: number }[];
  weakVerbs: { verb: string; misses: number }[];
};

/** Consecutive days with at least one answer, ending today (or yesterday, so a streak survives until midnight). */
export function dayStreak(days: Record<string, number>, today = new Date()): number {
  const cursor = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  if (!days[dayKey(cursor)]) cursor.setDate(cursor.getDate() - 1);
  let streak = 0;
  while (days[dayKey(cursor)]) { streak++; cursor.setDate(cursor.getDate() - 1); }
  return streak;
}

export function statsOf(memory: Memory, minutes = nowMinutes(), today = new Date()): Stats {
  let right = 0;
  let wrong = 0;
  let mastered = 0;
  const misses = new Map<string, number>();
  for (const [key, [box, , hits, fails]] of Object.entries(memory.items)) {
    right += hits;
    wrong += fails;
    if (box >= MASTERED_BOX) mastered++;
    if (fails > hits) {
      const verb = key.split("|")[0];
      misses.set(verb, (misses.get(verb) ?? 0) + fails - hits);
    }
  }
  const answered = Object.values(memory.days).reduce((sum, count) => sum + count, 0);
  return {
    answered,
    accuracy: right + wrong ? Math.round((right / (right + wrong)) * 100) : 0,
    streak: dayStreak(memory.days, today),
    today: memory.days[dayKey(today)] ?? 0,
    mastered,
    due: dueCards(memory, null, minutes).length,
    tenses: DRILL_TENSES.flatMap((tense) => {
      const [r, w] = memory.tenses[tense.key] ?? [0, 0];
      return r + w ? [{ key: tense.key, label: tense.short, right: r, total: r + w }] : [];
    }),
    weakVerbs: [...misses].sort((a, b) => b[1] - a[1]).slice(0, 6).map(([verb, count]) => ({ verb, misses: count })),
  };
}
