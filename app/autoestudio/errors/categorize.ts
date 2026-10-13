/**
 * Deterministic linguistic categorisation of a wrong Homework answer.
 *
 * Pure rules, no AI: the same answer always lands in the same category, in the
 * browser (for the discreet recommendation) and on the server (for the stored
 * history the teacher reads). Categories double as the key of the premium
 * class mapping in ./catalog.ts.
 */
import type { SectionKey } from "../curriculum/types";

export type CategoryId =
  | "ser-estar" | "por-para" | "desde-hace" | "pasados" | "pluscuamperfecto" | "subjuntivo"
  | "condicionales" | "imperativo" | "pronombres" | "relativos" | "preposiciones" | "concordancia"
  | "determinantes" | "conectores" | "perifrasis" | "presente" | "futuro-condicional" | "cantidad"
  | "voz-pasiva" | "estilo-indirecto" | "ortografia-tildes" | "pronunciacion" | "comprension-auditiva"
  | "comprension-lectora" | "vocabulario" | "gramatica-general";

export type Category = { id: CategoryId; label: string; question: string };

/** Learner-facing label plus the short question that heads the recommendation card. */
export const categories: Record<CategoryId, Omit<Category, "id">> = {
  "ser-estar": { label: "SER / ESTAR", question: "¿Ser o estar?" },
  "por-para": { label: "POR / PARA", question: "¿Por o para?" },
  "desde-hace": { label: "DESDE, HACE y DESDE HACE", question: "¿Desde, hace o desde hace?" },
  pasados: { label: "Tiempos del pasado", question: "¿Indefinido, imperfecto o perfecto?" },
  pluscuamperfecto: { label: "Pluscuamperfecto", question: "¿Qué había pasado antes?" },
  subjuntivo: { label: "Subjuntivo", question: "¿Indicativo o subjuntivo?" },
  condicionales: { label: "Condicionales", question: "¿Qué pasa si…?" },
  imperativo: { label: "Imperativo", question: "¿Cómo se da una instrucción?" },
  pronombres: { label: "Pronombres", question: "¿Lo, la, le o se?" },
  relativos: { label: "Relativos", question: "¿Que, quien o el que?" },
  preposiciones: { label: "Preposiciones", question: "¿Qué preposición va aquí?" },
  concordancia: { label: "Concordancia", question: "¿Masculino, femenino, singular o plural?" },
  determinantes: { label: "Artículos y determinantes", question: "¿El, la, un, una… o nada?" },
  conectores: { label: "Conectores y oraciones", question: "¿Cómo se conectan las ideas?" },
  perifrasis: { label: "Perífrasis verbales", question: "¿Seguir, volver a, dejar de…?" },
  presente: { label: "Presente de indicativo", question: "¿Cómo se conjuga en presente?" },
  "futuro-condicional": { label: "Futuro y condicional", question: "¿Futuro o condicional?" },
  cantidad: { label: "Cantidad y comparación", question: "¿Cuánto, tanto, más o menos?" },
  "voz-pasiva": { label: "Pasiva e impersonal", question: "¿Quién hace la acción?" },
  "estilo-indirecto": { label: "Estilo indirecto", question: "¿Qué dijo exactamente?" },
  "ortografia-tildes": { label: "Ortografía y tildes", question: "¿Lleva tilde?" },
  pronunciacion: { label: "Pronunciación", question: "¿Cómo suena?" },
  "comprension-auditiva": { label: "Comprensión auditiva", question: "¿Qué has oído?" },
  "comprension-lectora": { label: "Comprensión lectora", question: "¿Qué dice el texto?" },
  vocabulario: { label: "Vocabulario", question: "¿Qué palabra es?" },
  "gramatica-general": { label: "Gramática", question: "¿Cuál es la forma correcta?" },
};

export type CategoryInput = {
  section: SectionKey;
  /** Accepted answers (first accepted form per gap) or the correct option. */
  correct: string[];
  question?: string;
  why?: string;
  verdict?: "wrong" | "accent";
  /** What the learner answered: a ser/estar swap is the most reliable signal there is. */
  given?: string;
  /** Objective ids of the week, e.g. "b1.gram.contraste-pasados". */
  objectives?: string[];
};

const fold = (text: string) => text.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase();
const words = (text: string) => fold(text).split(/[^a-zñ]+/).filter(Boolean);

const SER = new Set(["soy", "eres", "es", "somos", "sois", "son", "era", "eras", "eramos", "erais", "eran", "fui", "fuiste", "fue", "fuimos", "fuisteis", "fueron", "sea", "seas", "seamos", "sean", "sere", "seras", "sera", "seremos", "seran", "seria", "serias", "seriamos", "serian", "ser", "sido", "siendo", "fuera", "fuese", "fueras"]);
const ESTAR = new Set(["estoy", "estas", "esta", "estamos", "estais", "estan", "estaba", "estabas", "estabamos", "estabais", "estaban", "estuve", "estuviste", "estuvo", "estuvimos", "estuvieron", "este", "estes", "estemos", "esten", "estare", "estara", "estaria", "estar", "estado", "estando", "estuviera", "estuviese", "hay", "habia", "hubo", "haya"]);
const PRONOUNS = new Set(["me", "te", "se", "le", "lo", "la", "les", "los", "las", "nos", "os", "mi", "ti", "conmigo", "contigo", "consigo", "selo", "sela", "selos", "selas", "melo", "mela", "telo", "tela"]);
const PREPOSITIONS = new Set(["a", "al", "de", "del", "en", "con", "sin", "sobre", "hasta", "hacia", "entre", "desde", "durante", "según", "segun", "tras", "contra", "ante", "bajo"]);
const DETERMINERS = new Set(["el", "la", "los", "las", "un", "una", "unos", "unas", "este", "esta", "estos", "estas", "ese", "esa", "esos", "esas", "aquel", "aquella", "aquellos", "aquellas", "mi", "mis", "tu", "tus", "su", "sus", "nuestro", "nuestra", "nuestros", "nuestras", "vuestro", "vuestra"]);
const SUBJUNCTIVE = /\b(?:sea|seas|seamos|sean|este|estes|esten|tenga|tengas|tengamos|tengan|haya|hayas|hayan|vaya|vayas|vayamos|vayan|pueda|puedas|puedan|haga|hagas|hagan|quiera|quieras|quieran|venga|vengas|vengan|diga|digas|digan|sepa|sepas|sepan|ponga|pongas|pongan|salga|salgas|salgan|de|des|demos|den|vea|veas|vean|oiga|oigan|conozca|conozcan|traiga|traigan|\w+(?:ara|iera|ase|iese|aras|ieras|aramos|ieramos|aran|ieran|aramos))\b/;
const CONDITIONAL = /\b\w+(?:aria|erias|eria|iria|ariamos|eriamos|iriamos|arian|erian|irian|arias|irias)\b/;
const FUTURE = /\b\w+(?:are|aras|ara|aremos|areis|aran|ere|eras|era|eremos|eran|ire|iras|ira|iremos|iran)\b/;
const PAST = /\b(?:fui|fue|fuimos|fueron|hice|hizo|hicimos|hicieron|tuve|tuvo|tuvieron|estuve|estuvo|pude|pudo|dije|dijo|vine|vino|puse|puso|supe|supo|quise|quiso|di|dio|dieron|vi|vio|vieron|\w+(?:aba|abas|abamos|abais|aban|ia|ias|iamos|iais|ian|e|o|aste|amos|asteis|aron|iste|imos|isteis|ieron))\b/;
const PLUPERFECT = /\bhab(?:ia|ias|iamos|iais|ian)\s+\w+(?:ado|ido|to|cho|so)\b/;
const PERFECT = /\b(?:he|has|ha|hemos|habeis|han)\s+\w+(?:ado|ido|to|cho|so)\b/;
const IMPERATIVE_HINT = /\b(?:imperativo|instrucci|orden|manda|no\s+\w+(?:es|as|an|en)\b)/;

function mention(text: string, pattern: RegExp) { return pattern.test(fold(text)); }

/** Category from the explicit explanation/question wording, when the content says what it tests. */
function fromWording(text: string): CategoryId | null {
  const t = fold(text);
  const rules: [RegExp, CategoryId][] = [
    [/\b(ser|estar)\b.*\b(ser|estar|hay)\b|\bser\s*\/\s*estar\b|\bestar\b.*\btemporal|\bser\b.*\bpermanente|\bcaracteristica\b.*\bestado\b/, "ser-estar"],
    [/\bpor\b.*\bpara\b|\bpara\b.*\bpor\b|\bpor\/para\b/, "por-para"],
    [/\bdesde hace\b|\bdesde\b.*\bhace\b|\bhace\b.*\bdesde\b|\bduracion\b|\bllevar\s*\+/, "desde-hace"],
    [/\bpluscuamperfecto\b|\bhabia\s+\w+(ado|ido)\b.*\bantes\b/, "pluscuamperfecto"],
    [/\bindefinido\b|\bimperfecto\b(?!\s+de\s+subjuntivo)|\bpreterito\b|\bperfecto compuesto\b|\bpasado\b.*\b(accion|habito|descripcion)/, "pasados"],
    [/\bsubjuntivo\b/, "subjuntivo"],
    [/\bcondicional(?:es)?\b.*\bsi\b|\bsi\s*\+|\bhipotetic|\bcondicion\b/, "condicionales"],
    [/\bimperativo\b/, "imperativo"],
    [/\bestilo indirecto\b|\bdiscurso (?:referido|indirecto)\b|\btransmitir\b.*\bdijo\b/, "estilo-indirecto"],
    [/\bpasiva\b|\bimpersonal\b|\bse\s+impersonal\b/, "voz-pasiva"],
    [/\brelativ[oa]s?\b|\bel que\b|\bla que\b|\bquien(?:es)?\b.*\bantecedente\b/, "relativos"],
    [/\bpronombre/, "pronombres"],
    [/\bperifrasis\b|\bseguir\s*\+|\bvolver a\b|\bdejar de\b|\bacabar de\b|\bempezar a\b|\bponerse a\b/, "perifrasis"],
    [/\bconcordancia\b|\bgenero\b|\bconcuerd|\bfemenin|\bmasculin|\bsingular\b|\bplural\b/, "concordancia"],
    [/\barticulo\b|\bdeterminante\b|\bdemostrativ|\bposesiv/, "determinantes"],
    [/\bconector\b|\baunque\b|\bsino\b|\bporque\b|\bpero\b.*\bcontrast|\bsubordinad/, "conectores"],
    [/\bcomparativ|\bsuperlativ|\bcantidad\b|\bcuantificador|\btan\b.*\bcomo\b|\btanto\b/, "cantidad"],
    [/\bpreposicion/, "preposiciones"],
    [/\bfuturo\b|\bcondicional simple\b|\bcondicional\b.*\bcortes/, "futuro-condicional"],
    [/\bpresente\b/, "presente"],
    [/\btilde\b|\bacento\b|\bortograf/, "ortografia-tildes"],
  ];
  for (const [pattern, id] of rules) if (pattern.test(t)) return id;
  return null;
}

/** Category from the shape of the expected forms themselves. */
function fromForms(correct: string[]): CategoryId | null {
  const forms = correct.map(fold);
  const single = forms.filter((form) => !/\s/.test(form));
  if (single.length && single.every((form) => SER.has(form) || ESTAR.has(form))) return "ser-estar";
  if (single.length && single.every((form) => form === "por" || form === "para")) return "por-para";
  if (single.length && single.every((form) => ["desde", "hace", "desde hace", "llevo", "llevas", "lleva"].includes(form))) return "desde-hace";
  if (single.length && single.every((form) => PRONOUNS.has(form))) return "pronombres";
  if (single.length && single.every((form) => DETERMINERS.has(form))) return "determinantes";
  if (single.length && single.every((form) => PREPOSITIONS.has(form) || form === "por" || form === "para")) return "preposiciones";
  if (single.length && single.every((form) => ["que", "quien", "quienes", "cuyo", "cuya", "donde", "cual", "cuales"].includes(form))) return "relativos";
  const joined = forms.join(" ");
  if (PLUPERFECT.test(joined)) return "pluscuamperfecto";
  if (PERFECT.test(joined)) return "pasados";
  if (single.length && single.every((form) => SUBJUNCTIVE.test(form) && !/^(de|des|den|este|esta|esa|ese)$/.test(form))) return "subjuntivo";
  if (single.length && single.every((form) => CONDITIONAL.test(form) || FUTURE.test(form))) return "futuro-condicional";
  if (single.length && single.every((form) => PAST.test(form) && form.length > 3)) return "pasados";
  return null;
}

function fromObjectives(objectives: string[]): CategoryId | null {
  for (const id of objectives) {
    if (!/\.gram\./.test(id)) continue;
    const slug = id.split(".").pop() ?? "";
    const match = fromWording(slug.replace(/-/g, " "));
    if (match) return match;
    if (/pasad|indefinido|imperfecto|perfecto/.test(slug)) return "pasados";
    if (/presente|conjug|regular|irregular|verbo/.test(slug)) return "presente";
    if (/objeto|reflexiv/.test(slug)) return "pronombres";
    if (/articulo|posesiv|demostrativ/.test(slug)) return "determinantes";
    if (/genero|numero|nominal|adjetiv/.test(slug)) return "concordancia";
    if (/conector|oracion|causa|finalidad|contraste|concesi/.test(slug)) return "conectores";
  }
  return null;
}

export function categorize(input: CategoryInput): Category {
  let id: CategoryId | null = null;
  if (input.verdict === "accent") id = "ortografia-tildes";
  else if (input.section === "pronunciation") id = "pronunciacion";
  else if (input.section === "listening") id = "comprension-auditiva";
  else if (input.section === "reading") id = "comprension-lectora";
  else if (input.section === "vocabulary") id = "vocabulario";
  else {
    const given = fold(input.given ?? "").trim();
    const expected = input.correct.map(fold);
    // The learner put one copula where the other belongs: that is SER / ESTAR whatever the tense.
    if ((SER.has(given) && expected.some((form) => ESTAR.has(form))) || (ESTAR.has(given) && expected.some((form) => SER.has(form)))) id = "ser-estar";
    else id = fromWording(input.why ?? "") ?? fromForms(input.correct) ?? fromWording(input.question ?? "") ?? fromObjectives(input.objectives ?? []);
    if (!id && input.question && IMPERATIVE_HINT.test(fold(input.question))) id = "imperativo";
  }
  // A content word with no grammatical shape and no explanation is vocabulary, not grammar.
  if (!id && input.correct.length === 1 && words(input.correct[0]).length === 1 && !mention(input.question ?? "", /conjug|forma|verbo/)) id = "vocabulario";
  const final = id ?? "gramatica-general";
  return { id: final, ...categories[final] };
}

/** Short pedagogical explanation when the content itself has none. */
export function defaultExplanation(category: CategoryId, given: string, correct: string): string {
  const base: Partial<Record<CategoryId, string>> = {
    "ser-estar": "Ser presenta características o identidad; estar presenta estados, lugares y situaciones temporales. Revisa también el tiempo verbal.",
    "por-para": "Por expresa causa, medio, intercambio o recorrido; para expresa finalidad, destinatario o plazo.",
    "desde-hace": "Desde marca el punto de inicio; hace mide un tiempo hacia atrás; desde hace indica una duración que continúa.",
    pasados: "El indefinido cuenta hechos terminados; el imperfecto describe situaciones, hábitos y contexto; el perfecto conecta con el presente.",
    pluscuamperfecto: "El pluscuamperfecto sitúa una acción antes de otra acción pasada.",
    subjuntivo: "El subjuntivo aparece después de deseos, valoraciones, dudas y finalidad con cambio de sujeto.",
    condicionales: "Cada condicional combina un tiempo en la condición y otro en la consecuencia.",
    imperativo: "El imperativo afirmativo y el negativo usan formas distintas.",
    pronombres: "Elige el pronombre según la función (objeto directo, indirecto o reflexivo) y la persona.",
    preposiciones: "La preposición depende del verbo y del significado que quieres expresar.",
    concordancia: "Artículo, sustantivo y adjetivo concuerdan en género y número.",
    determinantes: "El determinante presenta el sustantivo y marca si es conocido o nuevo.",
    presente: "Revisa la terminación de la persona y las irregularidades de este verbo.",
    "futuro-condicional": "El futuro predice y promete; el condicional sugiere, pide con cortesía e imagina.",
  };
  const detail = base[category] ?? "Compara tu respuesta con la forma correcta y fíjate en qué cambia.";
  return `Escribiste «${given}»; la forma esperada es «${correct}». ${detail}`;
}
