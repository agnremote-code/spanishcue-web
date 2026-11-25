import { conjugate, type Conjugation, type Forms, type TenseKey, type VerbSpec } from "./engine";
import { irregulares } from "./irregulares";
import { verbos } from "./verbs";

export const CONJUGACION_PATH = "/conjugacion";

/** URL slug: the infinitive without acute accents (oír → oir); ñ stays (soñar ≠ sonar). */
export function verbSlug(verb: string) {
  return verb.normalize("NFD").replace(/́/g, "").normalize("NFC");
}
/** Percent-encoded, so canonical links, the sitemap and IndexNow all carry the same ASCII URL. */
export function verbPath(verb: string) {
  return `${CONJUGACION_PATH}/${encodeURIComponent(verbSlug(verb))}`;
}
export const verbBySlug = new Map(verbos.map((verb) => [verbSlug(verb), verb]));

/** Route param → infinitive. Params may arrive percent-encoded (so%C3%B1ar). */
export function verbFromParam(param: string): string | undefined {
  let value = param;
  try { value = decodeURIComponent(param); } catch { /* keep raw */ }
  return verbBySlug.get(verbSlug(value.toLowerCase()));
}

export const PERSONS = ["yo", "tú", "él / ella / usted", "nosotros", "vosotros", "ellos / ustedes"] as const;

export type TenseInfo = { key: TenseKey; label: string; guide?: string };
export const TENSE_GROUPS: { mood: string; intro: string; tenses: TenseInfo[] }[] = [
  {
    mood: "Indicativo",
    intro: "Los tiempos simples del modo indicativo: hechos, rutinas, pasado, futuro e hipótesis.",
    tenses: [
      { key: "presente", label: "Presente", guide: "presente-de-indicativo" },
      { key: "indefinido", label: "Pretérito indefinido", guide: "indefinido-e-imperfecto" },
      { key: "imperfecto", label: "Pretérito imperfecto", guide: "indefinido-e-imperfecto" },
      { key: "futuro", label: "Futuro simple", guide: "futuro" },
      { key: "condicional", label: "Condicional simple", guide: "condicional" },
    ],
  },
  {
    mood: "Tiempos compuestos",
    intro: "Se forman con el verbo haber y el participio, que no cambia.",
    tenses: [
      { key: "perfecto", label: "Pretérito perfecto", guide: "preterito-perfecto" },
      { key: "pluscuamperfecto", label: "Pretérito pluscuamperfecto", guide: "preterito-pluscuamperfecto" },
      { key: "futuroPerfecto", label: "Futuro compuesto" },
      { key: "condicionalPerfecto", label: "Condicional compuesto" },
    ],
  },
  {
    mood: "Subjuntivo",
    intro: "Deseos, dudas, emociones y oraciones que dependen de otra: «quiero que…», «ojalá…», «cuando…».",
    tenses: [
      { key: "subjPresente", label: "Presente de subjuntivo", guide: "subjuntivo" },
      { key: "subjImperfecto", label: "Imperfecto de subjuntivo (-ra)", guide: "subjuntivo" },
      { key: "subjImperfectoSe", label: "Imperfecto de subjuntivo (-se)" },
      { key: "subjPerfecto", label: "Pretérito perfecto de subjuntivo" },
      { key: "subjPluscuamperfecto", label: "Pluscuamperfecto de subjuntivo", guide: "si-hubiera-sabido" },
    ],
  },
];

const SIMPLE: TenseKey[] = ["presente", "indefinido", "imperfecto", "futuro", "condicional", "subjPresente", "subjImperfecto", "imperativo"];

function resolvedSpec(verb: string): { spec: VerbSpec; base?: string } {
  const spec = irregulares[verb] ?? {};
  if (spec.base) return { spec: { ...(irregulares[spec.base] ?? {}), ...spec, base: undefined }, base: spec.base };
  return { spec };
}

export function conjugateVerb(verb: string): Conjugation {
  return conjugate(verb, irregulares[verb] ?? {}, irregulares);
}

const ending = (verb: string) => verb.slice(-2).replace("í", "i") as "ar" | "er" | "ir";
const MODEL_REGULAR = { ar: "hablar", er: "comer", ir: "vivir" } as const;
const CONJ_NUMBER = { ar: "primera", er: "segunda", ir: "tercera" } as const;

/** Automatic spelling changes, read from the infinitive. */
export function spelling(verb: string): { key: string; text: string } | undefined {
  const v = verb.replace("í", "i");
  if (/guar$/.test(v)) return { key: "guar", text: "gu → gü delante de e, para que la u se siga pronunciando" };
  if (/car$/.test(v)) return { key: "car", text: "c → qu delante de e, para mantener el sonido /k/" };
  if (/gar$/.test(v)) return { key: "gar", text: "g → gu delante de e, para mantener el sonido de la g" };
  if (/zar$/.test(v)) return { key: "zar", text: "z → c delante de e (en español casi nunca se escribe ze)" };
  if (/[gq]uir$/.test(v)) return { key: "guir", text: "gu → g delante de a y o, porque la u ya no hace falta" };
  if (/[^aeiou]c(er|ir)$/.test(v)) return { key: "cer", text: "c → z delante de a y o, para mantener el sonido de la c" };
  if (/g(er|ir)$/.test(v)) return { key: "ger", text: "g → j delante de a y o, para mantener el sonido /x/" };
  if (/uir$/.test(v)) return { key: "uir", text: "se añade una y entre la raíz y la terminación cuando esta no empieza por i" };
  if (/[aeo](er|ir)$/.test(v)) return { key: "vocal", text: "la i átona entre dos vocales se escribe y, y la i tónica lleva tilde" };
  if (/(ñ|ll|ch)(er|ir)$/.test(v)) return { key: "ñ", text: "la i de -ió e -iendo desaparece después de ñ, ll o ch" };
  return undefined;
}

const FULL_IRREGULAR = new Set(["ser", "ir", "estar", "haber", "dar", "ver", "saber", "caber", "oír", "reír", "errar"]);

export type VerbModel = { key: string; label: string; example: string };

/** Conjugation model: verbs that share it are conjugated the same way. */
export function verbModel(verb: string): VerbModel {
  const raw = irregulares[verb] ?? {};
  if (raw.base) return { key: `como:${raw.base}`, label: `se conjuga como ${raw.base}`, example: raw.base };
  if (FULL_IRREGULAR.has(verb)) return { key: `propio:${verb}`, label: "irregular con formas propias", example: verb };
  const { spec } = resolvedSpec(verb);
  if (spec.pret && /uj$/.test(spec.pret)) return { key: "ducir", label: "irregular en -zco y -uje (como conducir)", example: "conducir" };
  if (spec.pret || spec.fut) return { key: "fuerte", label: "irregular en indefinido o futuro (como tener, hacer, poder)", example: "tener" };
  if (spec.yo && /zco$/.test(spec.yo)) return { key: "zc", label: "irregular en -zco (como conocer)", example: "conocer" };
  if (spec.yo) return { key: "yo", label: "irregular en la primera persona (como caer)", example: "caer" };
  if (spec.stem) {
    const e = ending(verb);
    const labels: Record<string, [string, string]> = {
      ie: ["diptongo e → ie", e === "ar" ? "pensar" : e === "er" ? "entender" : "sentir"],
      ue: ["diptongo o → ue", e === "ar" ? "contar" : e === "er" ? "volver" : "dormir"],
      i: ["cambio e → i", "pedir"],
      "u>ue": ["diptongo u → ue", "jugar"],
      "o>hue": ["diptongo o → hue", "oler"],
      "i>ie": ["diptongo i → ie", "adquirir"],
      í: ["tilde en la í", "enviar"],
      ú: ["tilde en la ú", "actuar"],
    };
    const [label, example] = labels[spec.stem];
    const group = spec.stem === "ie" || spec.stem === "ue" ? `${spec.stem}:${e}` : spec.stem;
    return { key: `stem:${group}`, label: `${label} (como ${example})`, example };
  }
  if (spec.participle) return { key: "participio", label: "regular con participio irregular", example: "escribir" };
  const sp = spelling(verb);
  const e = ending(verb);
  if (sp) return { key: `regular:${sp.key}`, label: `regular con cambio ortográfico (${sp.text.split(",")[0]})`, example: verb };
  return { key: `regular:${e}`, label: `regular en -${e} (como ${MODEL_REGULAR[e]})`, example: MODEL_REGULAR[e] };
}

let modelIndex: Map<string, string[]> | undefined;
/** Other verbs of the same model, for internal links. */
export function sameModel(verb: string, limit = 18): string[] {
  if (!modelIndex) {
    modelIndex = new Map();
    for (const v of verbos) {
      const key = verbModel(v).key;
      modelIndex.set(key, [...(modelIndex.get(key) ?? []), v]);
    }
  }
  const raw = irregulares[verb] ?? {};
  const own = modelIndex.get(verbModel(verb).key) ?? [];
  // A base verb (tener) also lists its compounds (mantener, obtener…).
  const compounds = modelIndex.get(`como:${verb}`) ?? [];
  const parent = raw.base ? [raw.base] : [];
  const peers = verbModel(verb).key.startsWith("propio:") ? [...FULL_IRREGULAR, "tener", "hacer", "poder", "decir"] : [];
  return [...new Set([...parent, ...compounds, ...own, ...peers])].filter((v) => v !== verb && verbBySlug.has(verbSlug(v))).slice(0, limit);
}

export function isIrregular(verb: string) {
  return !verbModel(verb).key.startsWith("regular:");
}

export type Highlight = Record<TenseKey, boolean[]>;

/** Forms that differ from a plain regular conjugation of the same infinitive. */
export function irregularForms(verb: string, cj: Conjugation): Highlight {
  const regular = conjugate(verb, {});
  return Object.fromEntries(
    (Object.keys(cj.tenses) as TenseKey[]).map((key) => [key, cj.tenses[key].map((form, i) => form !== "" && form !== regular.tenses[key][i])]),
  ) as Highlight;
}

export function irregularCount(h: Highlight) {
  return SIMPLE.reduce((sum, key) => sum + h[key].filter(Boolean).length, 0);
}

const IMPERSONAL = new Set(["llover", "nevar", "lloviznar", "granizar", "diluviar", "tronar"]);
const join = (forms: string[]) => forms.filter(Boolean).join(", ");

/** Teacher-facing notes, written from the verb's own forms. */
export function verbNotes(verb: string, cj: Conjugation, h: Highlight): string[] {
  const t = cj.tenses;
  const raw = irregulares[verb] ?? {};
  const { spec, base } = resolvedSpec(verb);
  const e = ending(verb);
  const notes: string[] = [];
  const regular = conjugate(verb, {});

  if (base) {
    notes.push(`${cap(verb)} se conjuga como ${base}: mantiene todas sus irregularidades (${join([t.presente[0], t.indefinido[0], t.futuro[0], cj.participle])}).`);
  }
  if (FULL_IRREGULAR.has(verb)) notes.push(`Tiene formas propias que no siguen ningún modelo: conviene aprenderlas de memoria, sobre todo el presente (${join([t.presente[0], t.presente[1], t.presente[2]])}), el indefinido (${join([t.indefinido[0], t.indefinido[2]])}) y el presente de subjuntivo (${t.subjPresente[0]}).`);
  if (verb === "ser" || verb === "ir") notes.push("Ser e ir comparten el pretérito indefinido (fui, fuiste, fue, fuimos, fuisteis, fueron) y el imperfecto de subjuntivo (fuera). El contexto aclara cuál de los dos es: «fue profesora» (ser), «fue al mercado» (ir).");
  if (verb === "haber") notes.push("Como auxiliar forma todos los tiempos compuestos (he hablado, había comido). Para expresar existencia es impersonal y va siempre en tercera persona del singular: hay, hubo, había, habrá, haya.");
  if (verb === "estar") notes.push("Es irregular en presente (estoy, está), indefinido (estuve, estuvo) y presente de subjuntivo (esté). Con gerundio forma las perífrasis de acción en curso: «está trabajando».");
  if (verb === "ir") notes.push("La perífrasis «ir a + infinitivo» expresa planes e intenciones: «voy a estudiar». El imperativo de nosotros es «vamos».");
  if (verb === "soler") notes.push("Es defectivo: se usa sobre todo en presente e imperfecto seguido de infinitivo («suele llegar tarde», «solía leer mucho»). El futuro y el imperativo no se usan.");
  if (IMPERSONAL.has(verb)) notes.push(`Es un verbo de fenómeno meteorológico: en su uso normal solo aparece en tercera persona del singular (${join([t.presente[2], t.indefinido[2], t.imperfecto[2], t.futuro[2]])}). Las demás formas existen en sentido figurado.`);
  if (verb === "acontecer") notes.push("Solo se usa en tercera persona: acontece, acontecen, aconteció.");

  if (!base && !FULL_IRREGULAR.has(verb)) {
    if (spec.stem === "ie" || spec.stem === "ue" || spec.stem === "u>ue" || spec.stem === "o>hue" || spec.stem === "i>ie") {
      const change = { ie: "e → ie", ue: "o → ue", "u>ue": "u → ue", "o>hue": "o → hue", "i>ie": "i → ie" }[spec.stem];
      notes.push(`Diptonga ${change} cuando el acento cae en la raíz: ${join([spec.yo ? "" : t.presente[0], t.presente[1], t.presente[2], t.presente[5]])}. Nosotros y vosotros conservan la vocal: ${join([t.presente[3], t.presente[4]])}.${spec.yo ? "" : ` El mismo cambio aparece en el presente de subjuntivo (${t.subjPresente[0]}) y en el imperativo (${t.imperativo[1]}).`}`);
      if (e === "ir" && (spec.stem === "ie" || spec.stem === "ue")) {
        notes.push(`Como verbo en -ir, además cambia ${spec.stem === "ie" ? "e → i" : "o → u"} en la tercera persona del indefinido (${join([t.indefinido[2], t.indefinido[5]])}), en el gerundio (${cj.gerund}), en nosotros del presente de subjuntivo (${t.subjPresente[3]}) y en todo el imperfecto de subjuntivo (${t.subjImperfecto[0]}).`);
      }
    }
    if (spec.stem === "i") {
      notes.push(`Cambia e → i cuando el acento cae en la raíz (${join([t.presente[0], t.presente[1], t.presente[2], t.presente[5]])}), en la tercera persona del indefinido (${join([t.indefinido[2], t.indefinido[5]])}), en el gerundio (${cj.gerund}) y en todo el presente y el imperfecto de subjuntivo (${join([t.subjPresente[0], t.subjImperfecto[0]])}).`);
    }
    if (spec.stem === "í" || spec.stem === "ú") {
      const vowel = spec.stem;
      notes.push(`Lleva tilde en la ${vowel} cuando es tónica, para separarla de la vocal vecina: ${join([t.presente[0], t.presente[1], t.presente[2], t.presente[5]])}. Nosotros no la lleva (${t.presente[3]}). La tilde se repite en el presente de subjuntivo (${t.subjPresente[0]}) y en el imperativo (${t.imperativo[1]}).`);
    }
    if (spec.yo) {
      if (/zco$/.test(spec.yo)) notes.push(`Solo la primera persona del presente es irregular: ${t.presente[0]} (c → zc). Como el presente de subjuntivo se forma desde esa persona, todo él lleva zc: ${join(t.subjPresente.slice(0, 3))}… El resto del verbo es regular.`);
      else notes.push(`La primera persona del presente es irregular: ${t.presente[0]}. El presente de subjuntivo se construye sobre ella: ${join(t.subjPresente.slice(0, 3))}…`);
    }
    if (spec.pret) {
      if (/j$/.test(spec.pret)) notes.push(`Indefinido de raíz irregular en j: ${join([t.indefinido[0], t.indefinido[2], t.indefinido[5]])}. Después de j la tercera persona del plural termina en -eron, no en -ieron. Esa raíz pasa al imperfecto de subjuntivo: ${t.subjImperfecto[0]}.`);
      else notes.push(`Indefinido de raíz irregular (pretérito fuerte): ${join([t.indefinido[0], t.indefinido[2], t.indefinido[5]])}. Yo y él/ella terminan en -e y -o sin tilde. Esa raíz pasa al imperfecto de subjuntivo: ${t.subjImperfecto[0]}.`);
    }
    if (spec.fut) notes.push(`Futuro y condicional con raíz irregular: ${join([t.futuro[0], t.futuro[2], t.condicional[0]])}. Las terminaciones son las regulares.`);
    if (raw.impTu || (spec.impTu && !base)) notes.push(`El imperativo de tú es irregular: ${t.imperativo[1]} (negativo: ${t.imperativoNegativo[1]}).`);
  }
  if (base && t.imperativo[1] !== regular.tenses.imperativo[1]) notes.push(`Imperativo de tú: ${t.imperativo[1]} (negativo: ${t.imperativoNegativo[1]}).`);
  if (cj.participle !== regular.participle) notes.push(`Participio irregular: ${cj.participle}. Forma todos los tiempos compuestos («${t.perfecto[2]}») y también funciona como adjetivo.`);
  if (cj.gerund !== regular.gerund && !(spec.stem && e === "ir")) notes.push(`Gerundio irregular: ${cj.gerund} («está ${cj.gerund}»).`);

  const sp = spelling(verb);
  if (sp && !FULL_IRREGULAR.has(verb)) {
    const examples = sp.key === "car" || sp.key === "gar" || sp.key === "zar" || sp.key === "guar" ? [t.indefinido[0], t.subjPresente[0]]
      : sp.key === "cer" || sp.key === "ger" || sp.key === "guir" ? [t.presente[0], t.subjPresente[0]]
        : sp.key === "uir" ? [t.presente[0], t.indefinido[2], cj.gerund]
          : sp.key === "vocal" ? [t.indefinido[2], t.indefinido[5], cj.gerund, cj.participle]
            : [t.indefinido[2], cj.gerund];
    notes.push(`Cambio ortográfico: ${sp.text} (${join(examples)}). No es una irregularidad de pronunciación: el sonido se mantiene.`);
  }
  if (!notes.length || verbModel(verb).key.startsWith("regular:")) {
    notes.unshift(`${cap(verb)} es un verbo regular de la ${CONJ_NUMBER[e]} conjugación (-${e}): se conjuga como ${MODEL_REGULAR[e]}. Raíz ${verb.slice(0, -2)}- más las terminaciones de cada tiempo.`);
  }
  const count = irregularCount(h);
  if (count && isIrregular(verb)) notes.push(`En las tablas, ${count === 1 ? "la forma marcada es la única" : `las ${count} formas marcadas son las`} que se apartan del modelo regular en los tiempos simples.`);
  return notes;
}

export function cap(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function hash(text: string) {
  let h = 2166136261;
  for (const c of text) h = Math.imul(h ^ c.codePointAt(0)!, 16777619);
  return h >>> 0;
}

const EXERCISE_TENSES: { key: TenseKey; label: string; prefix?: string }[] = [
  { key: "presente", label: "Presente" },
  { key: "indefinido", label: "Pretérito indefinido" },
  { key: "imperfecto", label: "Pretérito imperfecto" },
  { key: "futuro", label: "Futuro" },
  { key: "condicional", label: "Condicional" },
  { key: "perfecto", label: "Pretérito perfecto" },
  { key: "subjPresente", label: "Presente de subjuntivo", prefix: "que " },
  { key: "subjImperfecto", label: "Imperfecto de subjuntivo", prefix: "si " },
  { key: "imperativo", label: "Imperativo afirmativo" },
  { key: "presente", label: "Presente" },
  { key: "indefinido", label: "Pretérito indefinido" },
  { key: "subjPresente", label: "Presente de subjuntivo", prefix: "que " },
];
const EXERCISE_PERSONS = [0, 1, 2, 3, 5];
const SHORT_PERSONS = ["yo", "tú", "él / ella", "nosotros", "", "ellos / ellas"];

/** Twelve gaps with this verb, irregular forms first. Neutral persons only (no vosotros). */
export function verbExercise(verb: string, cj: Conjugation, h: Highlight): { q: string; a: string }[] {
  const used = new Set<string>();
  return EXERCISE_TENSES.map((tense, index) => {
    const persons = tense.key === "imperativo" ? [1, 2, 5] : EXERCISE_PERSONS;
    const start = hash(`${verb}:${index}`) % persons.length;
    const order = persons.map((_, i) => persons[(start + i) % persons.length]);
    const pick = order.find((p) => h[tense.key][p] && !used.has(`${tense.key}${p}`)) ?? order.find((p) => !used.has(`${tense.key}${p}`)) ?? order[0];
    used.add(`${tense.key}${pick}`);
    const who = tense.key === "imperativo" ? ["", "tú", "usted", "", "", "ustedes"][pick] : SHORT_PERSONS[pick];
    return { q: `${tense.label} · ${tense.prefix ?? ""}${who}: ___ (${verb})`, a: cj.tenses[tense.key][pick] };
  });
}

export type VerbPage = {
  verb: string; slug: string; path: string; title: string; description: string; h1: string;
  conjugation: Conjugation; highlight: Highlight; model: VerbModel; irregular: boolean; count: number;
  notes: string[]; exercise: { q: string; a: string }[]; related: string[]; faq: { question: string; answer: string }[];
};

export function verbPage(verb: string): VerbPage {
  const cj = conjugateVerb(verb);
  const h = irregularForms(verb, cj);
  const model = verbModel(verb);
  const irregular = isIrregular(verb);
  const count = irregularCount(h);
  const t = cj.tenses;
  const e = ending(verb);
  const description = irregular
    ? `Conjugación del verbo ${verb} en todos los tiempos: presente, indefinido, subjuntivo e imperativo, con las formas irregulares marcadas y un ejercicio corregido.`
    : `Conjugación del verbo ${verb}, regular en -${e}, en todos los tiempos: presente, indefinido, futuro, subjuntivo e imperativo, con un ejercicio corregido.`;
  const regularity = model.key === "participio"
    ? `${cap(verb)} es regular en todos los tiempos simples; solo el participio es irregular: ${cj.participle}.`
    : irregular
    ? `${cap(verb)} es un verbo irregular: ${model.label}.${count ? ` ${count === 1 ? "Una forma" : `${count} formas`} de los tiempos simples se aparta${count === 1 ? "" : "n"} del modelo regular.` : ""}`
    : `${cap(verb)} es un verbo regular: ${model.label}.${spelling(verb) ? " Solo cambia la ortografía en algunas formas para mantener el sonido." : ""}`;
  const persons = (forms: Forms, skip4 = true) => forms.map((form, i) => (form && !(skip4 && i === 4) ? `${PERSONS[i].split(" / ")[0]} ${form}` : "")).filter(Boolean).join(", ");
  return {
    verb,
    slug: verbSlug(verb),
    path: verbPath(verb),
    title: `Verbo ${verb}: conjugación en todos los tiempos | SpanishCue`,
    description,
    h1: `Conjugación del verbo ${verb}`,
    conjugation: cj,
    highlight: h,
    model,
    irregular,
    count,
    notes: verbNotes(verb, cj, h),
    exercise: verbExercise(verb, cj, h),
    related: sameModel(verb),
    faq: [
      { question: `¿${cap(verb)} es un verbo regular o irregular?`, answer: regularity },
      { question: `¿Cuál es el gerundio y el participio de ${verb}?`, answer: `El gerundio es «${cj.gerund}» (estar ${cj.gerund}) y el participio es «${cj.participle}» (haber ${cj.participle}).` },
      { question: `¿Cómo se conjuga ${verb} en pretérito indefinido?`, answer: `${cap(persons(t.indefinido, false))}.` },
      { question: `¿Cómo es el presente de subjuntivo de ${verb}?`, answer: `Que ${persons(t.subjPresente, false)}.` },
    ],
  };
}

/** The verbs teachers look up most, shown first on the hub. */
export const TOP_VERBS = "ser estar tener haber hacer ir poder decir querer saber poner venir dar ver salir pensar conocer volver pedir dormir jugar empezar seguir traer oír hablar comer vivir llegar gustar".split(" ");

export function modelGroups(): { key: string; label: string; example: string; verbs: string[] }[] {
  const groups = new Map<string, { key: string; label: string; example: string; verbs: string[] }>();
  for (const verb of verbos) {
    const model = verbModel(verb);
    if (model.key.startsWith("regular:") || model.key.startsWith("propio:")) continue;
    const key = model.key.startsWith("como:") ? "compuestos" : model.key;
    const label = key === "compuestos" ? "compuestos de verbos irregulares (mantener, proponer, deshacer…)" : model.label;
    const group = groups.get(key) ?? { key, label, example: model.example, verbs: [] };
    group.verbs.push(verb);
    groups.set(key, group);
  }
  return [...groups.values()].sort((a, b) => b.verbs.length - a.verbs.length);
}

export { verbos };
