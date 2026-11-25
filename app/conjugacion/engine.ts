/**
 * Spanish conjugation engine for the public /conjugacion pages.
 *
 * Forms are computed at render time from a compact spec per verb (see
 * ./verbs.ts), so a thousand verbs cost a few kilobytes in the Worker bundle
 * instead of a table of every form (incident 1102: big data never goes into
 * the bundle). Orthography follows the RAE 2010 rules: monosyllables such as
 * «rio», «guio» or «fie» carry no written accent.
 */

export type Forms = [string, string, string, string, string, string];

export type TenseKey =
  | "presente" | "indefinido" | "imperfecto" | "futuro" | "condicional"
  | "perfecto" | "pluscuamperfecto" | "futuroPerfecto" | "condicionalPerfecto"
  | "subjPresente" | "subjImperfecto" | "subjImperfectoSe" | "subjPerfecto" | "subjPluscuamperfecto"
  | "imperativo" | "imperativoNegativo";

export type Conjugation = {
  infinitive: string;
  gerund: string;
  participle: string;
  tenses: Record<TenseKey, Forms>;
};

type StemChange = "ie" | "ue" | "i" | "u>ue" | "o>hue" | "i>ie" | "í" | "ú";

export type VerbSpec = {
  /** Present-tense stem change in stressed syllables. */
  stem?: StemChange;
  /** Irregular first person present (tengo, conozco, hago). Subjunctive present is built on it. */
  yo?: string;
  /** Strong preterite stem (tuv, pud, dij). */
  pret?: string;
  /** Irregular future and conditional stem (tendr, har). */
  fut?: string;
  participle?: string;
  gerund?: string;
  /** Irregular affirmative tú imperative (ten, haz, di). */
  impTu?: string;
  /** Prefix + base verb (mantener = man + tener): forms are derived from the base. */
  base?: string;
  /** Whole tenses that no rule produces (ser, ir, estar…). */
  full?: Partial<Record<TenseKey, Forms>>;
};

const VOWELS = "aeiouáéíóú";
const strongAccent: Record<string, string> = { a: "á", e: "é", i: "í", o: "ó", u: "ú" };
const unaccent: Record<string, string> = { á: "a", é: "e", í: "i", ó: "o", ú: "u" };

function stripAccents(text: string) {
  return text.replace(/[áéíóú]/g, (c) => unaccent[c]);
}

/** Spanish syllable nuclei: weak unaccented i/u next to another vowel form a diphthong; gu/qu before e/i is silent. */
function nuclei(word: string): number[] {
  const w = word.toLowerCase().replace(/([gq])u(?=[eéií])/g, "$1·");
  const positions: number[] = [];
  let i = 0;
  while (i < w.length) {
    if (VOWELS.includes(w[i])) {
      let j = i + 1;
      while (j < w.length && VOWELS.includes(w[j])) {
        const prev = w[j - 1];
        const cur = w[j];
        const weak = (c: string) => c === "i" || c === "u";
        if (weak(prev) || weak(cur)) { if (prev === cur) break; j++; } else break;
      }
      positions.push(i);
      i = j;
    } else i++;
  }
  return positions;
}

function isMonosyllable(word: string) {
  return nuclei(word).length <= 1;
}

/** Writes the accent on the strong vowel of the last syllable (prefix + monosyllable: mantén, previó). */
function accentLastSyllable(word: string) {
  const ns = nuclei(word);
  const start = ns[ns.length - 1];
  let end = start;
  while (end + 1 < word.length && VOWELS.includes(word[end + 1])) end++;
  const group = word.slice(start, end + 1);
  let index = group.search(/[aeo]/);
  if (index < 0) index = group.length - 1;
  const pos = start + index;
  return word.slice(0, pos) + (strongAccent[word[pos]] ?? word[pos]) + word.slice(pos + 1);
}

/** RAE 2010: a monosyllable written with an accent on its last vowel loses it (rió → rio, guié → guie). */
function dropMonosyllableAccent(word: string) {
  const accented = word.search(/[áéíóú]/);
  if (accented < 0) return word;
  // An accent on a weak vowel after a strong one marks a hiatus (caí, leí) and stays.
  if (/[íú]/.test(word[accented]) && !/[iu]/.test(word[accented - 1] ?? "")) return word;
  const plain = stripAccents(word);
  return isMonosyllable(plain) ? plain : word;
}

function prefixForm(prefix: string, form: string): string {
  if (!form) return form;
  if (form.startsWith("no ")) return "no " + prefixForm(prefix, form.slice(3));
  if (form.includes(" ")) {
    const [aux, rest] = form.split(" ");
    return `${aux} ${prefixForm(prefix, rest)}`;
  }
  const joined = prefix + form;
  if (/[áéíóú]/.test(form) || !isMonosyllable(form) || isMonosyllable(joined)) return joined;
  return /[aeiouns]$/.test(joined) ? accentLastSyllable(joined) : joined;
}

type Ending = "ar" | "er" | "ir";

/** Spelling adjustments when an ending is attached to a stem (busc+é → busqué, coj+o → cojo). */
function attach(stem: string, ending: string, inf: string): string {
  const first = ending[0] ? stripAccents(ending[0]) : "";
  const front = first === "e" || first === "i";
  const back = first === "a" || first === "o" || first === "u";
  if (/car$/.test(inf) && stem.endsWith("c") && front) return stem.slice(0, -1) + "qu" + ending;
  if (/gar$/.test(inf) && stem.endsWith("g") && front) return stem.slice(0, -1) + "gu" + ending;
  if (/guar$/.test(inf) && stem.endsWith("gu") && front) return stem.slice(0, -2) + "gü" + ending;
  if (/zar$/.test(inf) && stem.endsWith("z") && front) return stem.slice(0, -1) + "c" + ending;
  if (/[gq]uir$/.test(inf) && /[gq]u$/.test(stem) && back) return stem.slice(0, -2) + (stem.endsWith("gu") ? "g" : "c") + ending;
  if (/g[ei]r$/.test(inf) && stem.endsWith("g") && back) return stem.slice(0, -1) + "j" + ending;
  if (/[^aeiouáéíóú]c[ei]r$/.test(inf) && stem.endsWith("c") && back) return stem.slice(0, -1) + "z" + ending;
  if (/[aeiou]c[ei]r$/.test(inf) && stem.endsWith("c") && back) return stem.slice(0, -1) + "z" + ending;
  return stem + ending;
}

const PRESENT: Record<Ending, Forms> = {
  ar: ["o", "as", "a", "amos", "áis", "an"],
  er: ["o", "es", "e", "emos", "éis", "en"],
  ir: ["o", "es", "e", "imos", "ís", "en"],
};
const IMPERFECT: Record<Ending, Forms> = {
  ar: ["aba", "abas", "aba", "ábamos", "abais", "aban"],
  er: ["ía", "ías", "ía", "íamos", "íais", "ían"],
  ir: ["ía", "ías", "ía", "íamos", "íais", "ían"],
};
const PRETERITE: Record<Ending, Forms> = {
  ar: ["é", "aste", "ó", "amos", "asteis", "aron"],
  er: ["í", "iste", "ió", "imos", "isteis", "ieron"],
  ir: ["í", "iste", "ió", "imos", "isteis", "ieron"],
};
const STRONG: Forms = ["e", "iste", "o", "imos", "isteis", "ieron"];
const FUTURE: Forms = ["é", "ás", "á", "emos", "éis", "án"];
const CONDITIONAL: Forms = ["ía", "ías", "ía", "íamos", "íais", "ían"];
const SUBJ: Record<"ar" | "erir", Forms> = {
  ar: ["e", "es", "e", "emos", "éis", "en"],
  erir: ["a", "as", "a", "amos", "áis", "an"],
};
const STRESSED = [0, 1, 2, 5];

const HABER: Record<string, Forms> = {
  presente: ["he", "has", "ha", "hemos", "habéis", "han"],
  imperfecto: ["había", "habías", "había", "habíamos", "habíais", "habían"],
  futuro: ["habré", "habrás", "habrá", "habremos", "habréis", "habrán"],
  condicional: ["habría", "habrías", "habría", "habríamos", "habríais", "habrían"],
  subjPresente: ["haya", "hayas", "haya", "hayamos", "hayáis", "hayan"],
  subjImperfecto: ["hubiera", "hubieras", "hubiera", "hubiéramos", "hubierais", "hubieran"],
};

/** Changes the last stem vowel of the given kind (pens → piens, dorm → duerm, jug → jueg). */
function changeStem(stem: string, change: StemChange): string {
  const replaceLast = (from: RegExp, to: string) => {
    const match = [...stem.matchAll(from)].pop();
    if (!match || match.index === undefined) return stem;
    return stem.slice(0, match.index) + to + stem.slice(match.index + match[0].length);
  };
  switch (change) {
    case "ie": return replaceLast(/e/g, "ie");
    case "ue": {
      const changed = replaceLast(/o/g, "ue");
      return changed.replace(/gue(?=[^aeiou]*$)/, "güe");
    }
    case "i": return replaceLast(/e/g, "i");
    case "u>ue": return replaceLast(/u/g, "ue");
    case "o>hue": return replaceLast(/o/g, "hue");
    case "i>ie": return replaceLast(/i/g, "ie");
    case "í": return replaceLast(/i/g, "í");
    case "ú": return replaceLast(/u/g, "ú");
  }
}

/** -ir stem-changers raise e → i and o → u in unstressed forms (sintió, durmamos, pidiendo). */
function raiseStem(stem: string): string {
  const match = [...stem.matchAll(/[eo]/g)].pop();
  if (!match || match.index === undefined) return stem;
  return stem.slice(0, match.index) + (match[0] === "e" ? "i" : "u") + stem.slice(match.index + 1);
}

function compound(aux: Forms, participle: string): Forms {
  return aux.map((a) => `${a} ${participle}`) as Forms;
}

export function conjugate(infinitive: string, spec: VerbSpec = {}, specs: Record<string, VerbSpec> = {}): Conjugation {
  if (spec.base) {
    const prefix = infinitive.slice(0, infinitive.length - spec.base.length);
    const base = conjugate(spec.base, specs[spec.base] ?? {}, specs);
    const tenses = Object.fromEntries(
      Object.entries(base.tenses).map(([k, forms]) => [k, forms.map((f) => prefixForm(prefix, f))]),
    ) as Record<TenseKey, Forms>;
    const own = { ...spec, base: undefined };
    const result: Conjugation = {
      infinitive,
      gerund: prefix + base.gerund,
      participle: own.participle ?? prefix + base.participle,
      tenses,
    };
    if (own.participle) for (const k of ["perfecto", "pluscuamperfecto", "futuroPerfecto", "condicionalPerfecto", "subjPerfecto", "subjPluscuamperfecto"] as const) {
      result.tenses[k] = result.tenses[k].map((f) => f.split(" ")[0] + " " + own.participle) as Forms;
    }
    for (const [k, forms] of Object.entries(own.full ?? {})) result.tenses[k as TenseKey] = forms as Forms;
    if (own.impTu) result.tenses.imperativo[1] = own.impTu;
    if (own.fut) {
      result.tenses.futuro = FUTURE.map((e) => own.fut + e) as Forms;
      result.tenses.condicional = CONDITIONAL.map((e) => own.fut + e) as Forms;
    }
    return result;
  }

  const ending = infinitive.slice(-2).replace("í", "i") as Ending;
  const stem = infinitive.slice(0, -2);
  const isIr = ending === "ir";
  const vowelStem = /[aeo]$/.test(stem) && ending !== "ar";
  const uirVerb = /[^gq]u$/.test(stem) && ending === "ir";
  const softStem = /(ñ|ll|ch)$/.test(stem) && ending !== "ar";
  const raises = isIr && (spec.stem === "ie" || spec.stem === "ue" || spec.stem === "i");

  // Present indicative.
  const presente = PRESENT[ending].map((e, p) => {
    let s = stem;
    if (spec.stem && STRESSED.includes(p)) s = changeStem(stem, spec.stem);
    if (uirVerb && p !== 3 && p !== 4) return attach(s + "y", e, infinitive);
    let form = attach(s, e, infinitive);
    if (vowelStem && (p === 3 || p === 4) && ending === "ir") form = s + (p === 3 ? "ímos" : "ís");
    return form;
  }) as Forms;
  if (spec.yo) presente[0] = spec.yo;
  if (uirVerb) presente[4] = dropMonosyllableAccent(stem + "ís");

  // Imperfect indicative.
  const imperfecto = IMPERFECT[ending].map((e) => stem + e) as Forms;

  // Preterite.
  let indefinido: Forms;
  if (spec.pret) {
    const p = spec.pret;
    indefinido = STRONG.map((e, i) => (i === 5 && p.endsWith("j") ? p + "eron" : p + e)) as Forms;
    if (p.endsWith("c")) indefinido[2] = p.slice(0, -1) + "zo";
  } else {
    indefinido = PRETERITE[ending].map((e, p) => {
      let s = stem;
      if (raises && (p === 2 || p === 5)) s = raiseStem(stem);
      if ((vowelStem || uirVerb) && (p === 2 || p === 5)) return s + (p === 2 ? "yó" : "yeron");
      if (softStem && (p === 2 || p === 5)) return s + (p === 2 ? "ó" : "eron");
      if (vowelStem && (p === 1 || p === 3 || p === 4)) return s + e.replace(/^i/, "í");
      return attach(s, e, infinitive);
    }) as Forms;
    indefinido = indefinido.map(dropMonosyllableAccent) as Forms;
  }

  // Future and conditional.
  const futStem = spec.fut ?? infinitive.replace("í", "i");
  const futuro = FUTURE.map((e) => futStem + e) as Forms;
  const condicional = CONDITIONAL.map((e) => futStem + e) as Forms;

  // Present subjunctive: built on the yo stem, with the -ir raising in nosotros/vosotros.
  const subjEndings = ending === "ar" ? SUBJ.ar : SUBJ.erir;
  const yoStem = presente[0].replace(/o$/, "");
  const yoIrregular = Boolean(spec.yo);
  const subjPresente = subjEndings.map((e, p) => {
    if (yoIrregular) return yoStem + e;
    let s = stem;
    if (spec.stem && STRESSED.includes(p)) s = changeStem(stem, spec.stem);
    else if (raises && (p === 3 || p === 4)) s = raiseStem(stem);
    if (uirVerb) return attach(s + "y", e, infinitive);
    return attach(s, e, infinitive);
  }) as Forms;

  // Imperfect subjunctive from the third person plural preterite.
  const ra = indefinido[5].replace(/ron$/, "");
  const accentRa = (base: string) => {
    const last = base.slice(-1);
    return base.slice(0, -1) + (strongAccent[last] ?? last);
  };
  const subjImperfecto = ["ra", "ras", "ra", "ramos", "rais", "ran"].map((e, p) => (p === 3 ? accentRa(ra) + e : ra + e)) as Forms;
  const subjImperfectoSe = ["se", "ses", "se", "semos", "seis", "sen"].map((e, p) => (p === 3 ? accentRa(ra) + e : ra + e)) as Forms;

  // Participle and gerund.
  let participle = spec.participle;
  if (!participle) {
    if (ending === "ar") participle = stem + "ado";
    else if (vowelStem) participle = stem + "ído";
    else participle = stem + "ido";
  }
  let gerund = spec.gerund;
  if (!gerund) {
    if (ending === "ar") gerund = stem + "ando";
    else if (vowelStem || uirVerb) gerund = stem + "yendo";
    else if (softStem) gerund = (raises ? raiseStem(stem) : stem) + "endo";
    else gerund = (raises ? raiseStem(stem) : stem) + "iendo";
  }

  // Imperative.
  const vosotros = infinitive.replace(/[rR]$/, "d").replace("ír", "íd");
  const imperativo: Forms = ["", spec.impTu ?? presente[2], subjPresente[2], subjPresente[3], vosotros, subjPresente[5]];
  const imperativoNegativo: Forms = ["", `no ${subjPresente[1]}`, `no ${subjPresente[2]}`, `no ${subjPresente[3]}`, `no ${subjPresente[4]}`, `no ${subjPresente[5]}`];

  const tenses: Record<TenseKey, Forms> = {
    presente, indefinido, imperfecto, futuro, condicional,
    perfecto: compound(HABER.presente, participle),
    pluscuamperfecto: compound(HABER.imperfecto, participle),
    futuroPerfecto: compound(HABER.futuro, participle),
    condicionalPerfecto: compound(HABER.condicional, participle),
    subjPresente, subjImperfecto, subjImperfectoSe,
    subjPerfecto: compound(HABER.subjPresente, participle),
    subjPluscuamperfecto: compound(HABER.subjImperfecto, participle),
    imperativo, imperativoNegativo,
  };
  for (const [k, forms] of Object.entries(spec.full ?? {})) tenses[k as TenseKey] = forms as Forms;
  // Tenses derived from overridden ones.
  if (spec.full?.indefinido && !spec.full.subjImperfecto) {
    const r = spec.full.indefinido[5].replace(/ron$/, "");
    tenses.subjImperfecto = ["ra", "ras", "ra", "ramos", "rais", "ran"].map((e, p) => (p === 3 ? accentRa(r) + e : r + e)) as Forms;
    tenses.subjImperfectoSe = ["se", "ses", "se", "semos", "seis", "sen"].map((e, p) => (p === 3 ? accentRa(r) + e : r + e)) as Forms;
  }
  if (spec.full?.subjPresente || spec.full?.presente) {
    const s = tenses.subjPresente;
    tenses.imperativo = ["", spec.impTu ?? tenses.presente[2], s[2], s[3], vosotros, s[5]];
    tenses.imperativoNegativo = ["", `no ${s[1]}`, `no ${s[2]}`, `no ${s[3]}`, `no ${s[4]}`, `no ${s[5]}`];
  }
  if (spec.full?.imperativo) tenses.imperativo = spec.full.imperativo;
  return { infinitive, gerund, participle, tenses };
}
