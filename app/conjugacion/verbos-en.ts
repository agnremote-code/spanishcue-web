import { conjugate, type Conjugation, type TenseKey } from "./engine";
import { irregulares } from "./irregulares";
import {
  FULL_IRREGULAR, IMPERSONAL, MODEL_REGULAR, cap, conjugateVerb, ending, irregularCount, irregularForms, isIrregular,
  resolvedSpec, sameModel, spelling, verbExercise, verbModel, verbSlug, type Highlight,
} from "./verbos";

/** English twin of /conjugacion: same tables, notes written for English-speaking learners and teachers. */
export const SPANISH_VERBS_PATH = "/spanish-verbs";
export function verbPathEn(verb: string) {
  return `${SPANISH_VERBS_PATH}/${encodeURIComponent(verbSlug(verb))}`;
}

export const TENSE_GROUPS_EN: { mood: string; intro: string; tenses: { key: TenseKey; label: string }[] }[] = [
  {
    mood: "Indicative",
    intro: "The simple tenses of the indicative mood: facts, routines, the past, the future and hypotheses.",
    tenses: [
      { key: "presente", label: "Present" },
      { key: "indefinido", label: "Preterite" },
      { key: "imperfecto", label: "Imperfect" },
      { key: "futuro", label: "Future" },
      { key: "condicional", label: "Conditional" },
    ],
  },
  {
    mood: "Compound tenses",
    intro: "Formed with haber plus the past participle, which never changes.",
    tenses: [
      { key: "perfecto", label: "Present perfect" },
      { key: "pluscuamperfecto", label: "Pluperfect" },
      { key: "futuroPerfecto", label: "Future perfect" },
      { key: "condicionalPerfecto", label: "Conditional perfect" },
    ],
  },
  {
    mood: "Subjunctive",
    intro: "Wishes, doubts, emotions and clauses that depend on another verb: «quiero que…», «ojalá…», «cuando…».",
    tenses: [
      { key: "subjPresente", label: "Present subjunctive" },
      { key: "subjImperfecto", label: "Imperfect subjunctive (-ra)" },
      { key: "subjImperfectoSe", label: "Imperfect subjunctive (-se)" },
      { key: "subjPerfecto", label: "Present perfect subjunctive" },
      { key: "subjPluscuamperfecto", label: "Pluperfect subjunctive" },
    ],
  },
];

const MODEL_EN: Record<string, (verb: string) => string> = {
  ducir: () => "irregular -zco / -uje verb (like conducir)",
  fuerte: () => "irregular preterite or future stem (like tener, hacer, poder)",
  zc: () => "irregular -zco verb (like conocer)",
  yo: () => "irregular first person (like caer)",
  participio: () => "regular, with an irregular past participle",
};

export function modelLabelEn(verb: string): string {
  const model = verbModel(verb);
  const [kind, rest] = model.key.split(/:(.*)/);
  if (kind === "como") return `conjugated like ${rest}`;
  if (kind === "propio") return "irregular, with forms of its own";
  if (MODEL_EN[model.key]) return MODEL_EN[model.key](verb);
  if (kind === "stem") {
    const change = rest.split(":")[0];
    const names: Record<string, string> = { ie: "stem change e → ie", ue: "stem change o → ue", i: "stem change e → i", "u>ue": "stem change u → ue", "o>hue": "stem change o → hue", "i>ie": "stem change i → ie", í: "written accent on í", ú: "written accent on ú" };
    return `${names[change]} (like ${model.example})`;
  }
  const e = ending(verb);
  if (spelling(verb)) return "regular, with a spelling change";
  return `regular -${e} verb (like ${MODEL_REGULAR[e]})`;
}

const join = (forms: string[]) => forms.filter(Boolean).join(", ");

const SPELLING_EN: Record<string, string> = {
  guar: "gu → gü before e, so the u is still pronounced",
  car: "c → qu before e, to keep the /k/ sound",
  gar: "g → gu before e, to keep the hard g",
  zar: "z → c before e (Spanish rarely writes ze)",
  guir: "gu → g before a and o, where the u is no longer needed",
  cer: "c → z before a and o, to keep the soft c",
  ger: "g → j before a and o, to keep the /x/ sound",
  uir: "a y is added between the stem and endings that do not start with i",
  vocal: "an unstressed i between two vowels is written y, and a stressed i takes an accent",
  ñ: "the i of -ió and -iendo disappears after ñ, ll or ch",
};

export function verbNotesEn(verb: string, cj: Conjugation, h: Highlight): string[] {
  const t = cj.tenses;
  const raw = irregulares[verb] ?? {};
  const { spec, base } = resolvedSpec(verb);
  const e = ending(verb);
  const notes: string[] = [];
  const regular = conjugate(verb, {});

  if (base) notes.push(`${cap(verb)} is conjugated like ${base} and keeps all its irregular forms (${join([t.presente[0], t.indefinido[0], t.futuro[0], cj.participle])}).`);
  if (FULL_IRREGULAR.has(verb)) notes.push(`It has forms of its own that follow no pattern, so learners memorise them, above all the present (${join([t.presente[0], t.presente[1], t.presente[2]])}), the preterite (${join([t.indefinido[0], t.indefinido[2]])}) and the present subjunctive (${t.subjPresente[0]}).`);
  if (verb === "ser" || verb === "ir") notes.push("Ser and ir share the same preterite (fui, fuiste, fue, fuimos, fuisteis, fueron) and imperfect subjunctive (fuera). Context tells them apart: «fue profesora» (ser) versus «fue al mercado» (ir).");
  if (verb === "haber") notes.push("As an auxiliary it forms every compound tense (he hablado, había comido). Meaning «there is / there are» it is impersonal and stays in the third person singular: hay, hubo, había, habrá, haya.");
  if (verb === "estar") notes.push("It is irregular in the present (estoy, está), the preterite (estuve, estuvo) and the present subjunctive (esté). With a gerund it forms the progressive: «está trabajando».");
  if (verb === "ir") notes.push("«Ir a + infinitive» expresses plans and intentions: «voy a estudiar». The nosotros command is «vamos».");
  if (verb === "soler") notes.push("It is defective: it is used mainly in the present and imperfect followed by an infinitive («suele llegar tarde», «solía leer mucho»). The future and the imperative are not used.");
  if (IMPERSONAL.has(verb)) notes.push(`It is a weather verb: in normal use it only appears in the third person singular (${join([t.presente[2], t.indefinido[2], t.imperfecto[2], t.futuro[2]])}).`);

  if (!base && !FULL_IRREGULAR.has(verb)) {
    if (spec.stem === "ie" || spec.stem === "ue" || spec.stem === "u>ue" || spec.stem === "o>hue" || spec.stem === "i>ie") {
      const change = { ie: "e → ie", ue: "o → ue", "u>ue": "u → ue", "o>hue": "o → hue", "i>ie": "i → ie" }[spec.stem];
      notes.push(`Stem change ${change} whenever the stress falls on the stem: ${join([spec.yo ? "" : t.presente[0], t.presente[1], t.presente[2], t.presente[5]])}. Nosotros and vosotros keep the original vowel: ${join([t.presente[3], t.presente[4]])}.${spec.yo ? "" : ` The same change appears in the present subjunctive (${t.subjPresente[0]}) and the tú command (${t.imperativo[1]}).`}`);
      if (e === "ir" && (spec.stem === "ie" || spec.stem === "ue")) notes.push(`As an -ir verb it also changes ${spec.stem === "ie" ? "e → i" : "o → u"} in the third person preterite (${join([t.indefinido[2], t.indefinido[5]])}), the gerund (${cj.gerund}), nosotros in the present subjunctive (${t.subjPresente[3]}) and the whole imperfect subjunctive (${t.subjImperfecto[0]}).`);
    }
    if (spec.stem === "i") notes.push(`Stem change e → i when the stress falls on the stem (${join([t.presente[0], t.presente[1], t.presente[2], t.presente[5]])}), in the third person preterite (${join([t.indefinido[2], t.indefinido[5]])}), the gerund (${cj.gerund}) and the whole present and imperfect subjunctive (${join([t.subjPresente[0], t.subjImperfecto[0]])}).`);
    if (spec.stem === "í" || spec.stem === "ú") notes.push(`The ${spec.stem} takes a written accent when stressed, which keeps it apart from the next vowel: ${join([t.presente[0], t.presente[1], t.presente[2], t.presente[5]])}. Nosotros has no accent (${t.presente[3]}). The accent comes back in the present subjunctive (${t.subjPresente[0]}).`);
    if (spec.yo) {
      if (/zco$/.test(spec.yo)) notes.push(`Only the first person present is irregular: ${t.presente[0]} (c → zc). Because the present subjunctive is built on that form, all of it carries zc: ${join(t.subjPresente.slice(0, 3))}… Everything else is regular.`);
      else notes.push(`The first person present is irregular: ${t.presente[0]}. The present subjunctive is built on it: ${join(t.subjPresente.slice(0, 3))}…`);
    }
    if (spec.pret) {
      if (/j$/.test(spec.pret)) notes.push(`Irregular preterite stem in j: ${join([t.indefinido[0], t.indefinido[2], t.indefinido[5]])}. After j the ellos form ends in -eron, not -ieron. The imperfect subjunctive inherits the stem: ${t.subjImperfecto[0]}.`);
      else notes.push(`Strong preterite with an irregular stem: ${join([t.indefinido[0], t.indefinido[2], t.indefinido[5]])}. The yo and él forms end in unstressed -e and -o, with no accent. The imperfect subjunctive inherits the stem: ${t.subjImperfecto[0]}.`);
    }
    if (spec.fut) notes.push(`Irregular future and conditional stem: ${join([t.futuro[0], t.futuro[2], t.condicional[0]])}. The endings are regular.`);
    if (raw.impTu || spec.impTu) notes.push(`Irregular tú command: ${t.imperativo[1]} (negative: ${t.imperativoNegativo[1]}).`);
  }
  if (base && t.imperativo[1] !== regular.tenses.imperativo[1]) notes.push(`Tú command: ${t.imperativo[1]} (negative: ${t.imperativoNegativo[1]}).`);
  if (cj.participle !== regular.participle) notes.push(`Irregular past participle: ${cj.participle}. It forms every compound tense («${t.perfecto[2]}») and also works as an adjective.`);
  if (cj.gerund !== regular.gerund && !(spec.stem && e === "ir")) notes.push(`Irregular gerund: ${cj.gerund} («está ${cj.gerund}»).`);
  const sp = spelling(verb);
  if (sp && !FULL_IRREGULAR.has(verb)) {
    const examples = ["car", "gar", "zar", "guar"].includes(sp.key) ? [t.indefinido[0], t.subjPresente[0]]
      : ["cer", "ger", "guir"].includes(sp.key) ? [t.presente[0], t.subjPresente[0]]
        : sp.key === "uir" ? [t.presente[0], t.indefinido[2], cj.gerund]
          : sp.key === "vocal" ? [t.indefinido[2], t.indefinido[5], cj.gerund, cj.participle]
            : [t.indefinido[2], cj.gerund];
    notes.push(`Spelling change: ${SPELLING_EN[sp.key]} (${join(examples)}). The pronunciation stays regular.`);
  }
  if (!isIrregular(verb)) notes.unshift(`${cap(verb)} is a regular -${e} verb, conjugated like ${MODEL_REGULAR[e]}: the stem ${verb.slice(0, -2)}- plus the endings of each tense.`);
  const count = irregularCount(h);
  if (count && isIrregular(verb)) notes.push(`In the tables, the ${count === 1 ? "highlighted form is the only one" : `${count} highlighted forms are the ones`} that break the regular pattern in the simple tenses.`);
  return notes;
}

export type VerbPageEn = {
  verb: string; path: string; title: string; description: string; h1: string; conjugation: Conjugation; highlight: Highlight;
  model: string; irregular: boolean; count: number; notes: string[]; exercise: { q: string; a: string }[]; related: string[];
  faq: { question: string; answer: string }[];
};

const PERSONS_SHORT = ["yo", "tú", "él", "nosotros", "vosotros", "ellos"];

export function verbPageEn(verb: string): VerbPageEn {
  const cj = conjugateVerb(verb);
  const h = irregularForms(verb, cj);
  const irregular = isIrregular(verb);
  const count = irregularCount(h);
  const model = modelLabelEn(verb);
  const t = cj.tenses;
  const name = cap(verb);
  const description = irregular
    ? `${name} conjugation in every Spanish tense: present, preterite, subjunctive and commands, with the irregular forms highlighted and a quiz.`
    : `${name} conjugation in every Spanish tense: a regular -${ending(verb)} verb, with present, preterite, future, subjunctive and commands, plus a quiz.`;
  const list = (forms: string[]) => forms.map((form, i) => `${PERSONS_SHORT[i]} ${form}`).join(", ");
  const exercise = verbExercise(verb, cj, h).map((item) => ({
    q: item.q
      .replace("Presente de subjuntivo · que ", "Present subjunctive · que ")
      .replace("Imperfecto de subjuntivo · si ", "Imperfect subjunctive · si ")
      .replace(/^Presente · /, "Present · ")
      .replace(/^Pretérito indefinido · /, "Preterite · ")
      .replace(/^Pretérito imperfecto · /, "Imperfect · ")
      .replace(/^Futuro · /, "Future · ")
      .replace(/^Condicional · /, "Conditional · ")
      .replace(/^Pretérito perfecto · /, "Present perfect · ")
      .replace(/^Imperativo afirmativo · /, "Command · "),
    a: item.a,
  }));
  return {
    verb,
    path: verbPathEn(verb),
    title: `${name} Conjugation in Spanish: All Tenses and Forms | SpanishCue`,
    description,
    h1: `${name} conjugation`,
    conjugation: cj,
    highlight: h,
    model,
    irregular,
    count,
    notes: verbNotesEn(verb, cj, h),
    exercise,
    related: sameModel(verb),
    faq: [
      { question: `Is ${verb} regular or irregular in Spanish?`, answer: irregular ? `${name} is irregular: ${model}.${count ? ` ${count} of its simple-tense forms break the regular pattern.` : ""}` : `${name} is regular: ${model}.` },
      { question: `What are the gerund and past participle of ${verb}?`, answer: `The gerund is «${cj.gerund}» (estar ${cj.gerund}) and the past participle is «${cj.participle}» (haber ${cj.participle}).` },
      { question: `How do you conjugate ${verb} in the preterite?`, answer: `${cap(list(t.indefinido))}.` },
      { question: `What is the present subjunctive of ${verb}?`, answer: `Que ${list(t.subjPresente)}.` },
    ],
  };
}
