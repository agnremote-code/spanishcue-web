import type { TenseKey } from "./engine";
import { CONJUGACION_PATH, cap, conjugateVerb, irregularForms, verbModel, verbos } from "./verbos";

export const IRREGULARES_PATH = `${CONJUGACION_PATH}/irregulares`;

type Kind = { tense: TenseKey } | { form: "participle" | "gerund" };

type TiempoBase = {
  slug: string; label: string; h1: string; title: string; description: string; guide?: string;
  intro: string[]; patterns: { name: string; text: string }[]; faq: { question: string; answer: string }[];
};
export type TiempoPage = TiempoBase & Kind & { path: string };

const pages: (TiempoBase & Kind)[] = [
  {
    slug: "presente", tense: "presente", label: "Presente de indicativo", guide: "presente-de-indicativo",
    h1: "Verbos irregulares en presente de indicativo",
    title: "Verbos irregulares en presente: lista completa con formas | SpanishCue",
    description: "Lista de verbos irregulares en presente de indicativo: diptongo e → ie y o → ue, cambio e → i, yo en -go y -zco, con todas las formas marcadas y ejercicio.",
    intro: [
      "El presente concentra más irregularidades que cualquier otro tiempo, pero casi todas siguen cuatro patrones. Conviene enseñarlos por grupos y no verbo por verbo.",
      "Las irregularidades de raíz aparecen cuando el acento cae en la raíz: yo, tú, él/ella y ellos/ellas. Nosotros y vosotros llevan el acento en la terminación y quedan regulares (pienso, pero pensamos).",
    ],
    patterns: [
      { name: "Diptongo e → ie", text: "pensar → pienso, querer → quiero, sentir → siento. Es el grupo más numeroso." },
      { name: "Diptongo o → ue", text: "poder → puedo, volver → vuelvo, dormir → duermo. Jugar hace u → ue: juego." },
      { name: "Cambio e → i", text: "Solo verbos en -ir: pedir → pido, seguir → sigo, repetir → repito." },
      { name: "Primera persona irregular", text: "tener → tengo, hacer → hago, salir → salgo, conocer → conozco, traducir → traduzco. El resto del presente puede ser regular (hago, haces, hace)." },
      { name: "Verbos con formas propias", text: "ser (soy, eres), ir (voy, vas), estar (estoy), haber (he), dar (doy), saber (sé), ver (veo), oír (oigo, oyes)." },
    ],
    faq: [
      { question: "¿Cuáles son los verbos irregulares más comunes en presente?", answer: "ser, estar, ir, tener, hacer, poder, querer, decir, venir, salir, poner, saber, dar, ver, pensar, dormir, pedir, jugar, conocer y oír. Con ellos se cubre la mayor parte de lo que el alumno necesita en A1." },
      { question: "¿Por qué nosotros no cambia en los verbos con diptongo?", answer: "Porque en nosotros y vosotros el acento cae en la terminación (pensamos, podéis), y el diptongo solo aparece en sílaba tónica." },
      { question: "¿En qué orden se enseñan los irregulares del presente?", answer: "Lo habitual es empezar por ser, estar, tener e ir; después la primera persona en -go (hago, salgo, pongo); luego los diptongos e → ie y o → ue; y al final e → i y los verbos en -zco." },
    ],
  },
  {
    slug: "indefinido", tense: "indefinido", label: "Pretérito indefinido", guide: "indefinido-e-imperfecto",
    h1: "Verbos irregulares en pretérito indefinido",
    title: "Verbos irregulares en pretérito indefinido: lista completa | SpanishCue",
    description: "Verbos irregulares en pretérito indefinido: raíces fuertes (tuve, hice, dije), cambio e → i y o → u en -ir y los que comparten ser e ir, con ejercicio.",
    intro: [
      "En el indefinido hay dos tipos de irregularidad. Los pretéritos fuertes cambian toda la raíz y usan terminaciones propias sin tilde (tuve, tuvo). Los verbos en -ir con cambio vocálico solo cambian en la tercera persona (pidió, durmieron).",
      "Las formas del indefinido son la base del imperfecto de subjuntivo: si el alumno sabe «tuvieron», sabe «tuviera».",
    ],
    patterns: [
      { name: "Raíz con u", text: "tener → tuve, estar → estuve, andar → anduve, poder → pude, poner → puse, saber → supe, caber → cupe, haber → hube." },
      { name: "Raíz con i", text: "hacer → hice (hizo con z), querer → quise, venir → vine." },
      { name: "Raíz con j", text: "decir → dije, traer → traje, conducir → conduje. En ellos/ellas la terminación es -eron: dijeron, trajeron." },
      { name: "Cambio en tercera persona (-ir)", text: "pedir → pidió, pidieron; sentir → sintió; dormir → durmió, durmieron; morir → murió." },
      { name: "Formas propias", text: "ser e ir comparten fui, fuiste, fue, fuimos, fuisteis, fueron. dar → di, dio; ver → vi, vio." },
    ],
    faq: [
      { question: "¿Qué terminaciones tienen los pretéritos fuertes?", answer: "-e, -iste, -o, -imos, -isteis, -ieron, sin tilde en yo y él/ella: tuve, tuviste, tuvo, tuvimos, tuvisteis, tuvieron. Después de j, -eron: dijeron." },
      { question: "¿Leyó o creyó son irregulares?", answer: "No. La y de leyó, creyó o construyó es un cambio ortográfico: la i entre vocales se escribe y. Pasa lo mismo con busqué o llegué." },
      { question: "¿Cómo se distinguen fue de ser y fue de ir?", answer: "Por el contexto: «fue un buen año» (ser) frente a «fue a Madrid» (ir, casi siempre con a o con un lugar)." },
    ],
  },
  {
    slug: "imperfecto", tense: "imperfecto", label: "Pretérito imperfecto", guide: "indefinido-e-imperfecto",
    h1: "Verbos irregulares en pretérito imperfecto",
    title: "Verbos irregulares en imperfecto: solo ser, ir y ver | SpanishCue",
    description: "En pretérito imperfecto solo hay tres verbos irregulares: ser (era), ir (iba) y ver (veía). Todas sus formas, por qué los demás son regulares y un ejercicio.",
    intro: [
      "El imperfecto es el tiempo más regular del español: todos los verbos siguen -aba o -ía excepto tres. Es una buena noticia para el alumno y conviene decírselo pronto.",
      "Los verbos que son irregulares en presente (tener, poder, querer) son regulares en imperfecto: tenía, podía, quería.",
    ],
    patterns: [
      { name: "ser", text: "era, eras, era, éramos, erais, eran." },
      { name: "ir", text: "iba, ibas, iba, íbamos, ibais, iban." },
      { name: "ver", text: "veía, veías, veía, veíamos, veíais, veían: conserva la e de la raíz (ve-ía); sus compuestos, como prever, hacen lo mismo." },
    ],
    faq: [
      { question: "¿Cuántos verbos irregulares hay en imperfecto?", answer: "Tres: ser, ir y ver, más los compuestos de ver (prever, entrever). Todos los demás son regulares." },
      { question: "¿Haber es irregular en imperfecto?", answer: "No: había, habías, había. Por eso los pluscuamperfectos (había comido) son fáciles de formar." },
      { question: "¿Cuál es la terminación del imperfecto?", answer: "-aba para los verbos en -ar (hablaba) e -ía para los verbos en -er y en -ir (comía, vivía). Nosotros lleva tilde: hablábamos, comíamos." },
    ],
  },
  {
    slug: "futuro", tense: "futuro", label: "Futuro simple", guide: "futuro",
    h1: "Verbos irregulares en futuro simple",
    title: "Verbos irregulares en futuro: tendré, haré, podré y más | SpanishCue",
    description: "Lista de los verbos irregulares en futuro simple: los que pierden la vocal (podré), los que añaden d (tendré) y los de raíz propia (haré, diré), con ejercicio.",
    intro: [
      "En el futuro la irregularidad está solo en la raíz; las terminaciones son las mismas para todos los verbos (-é, -ás, -á, -emos, -éis, -án). Son unos doce verbos y sus compuestos.",
      "Los mismos verbos son irregulares en condicional, con la misma raíz: tendré → tendría.",
    ],
    patterns: [
      { name: "Pierden la vocal", text: "poder → podré, saber → sabré, querer → querré, haber → habré, caber → cabré." },
      { name: "Cambian la vocal por d", text: "tener → tendré, poner → pondré, venir → vendré, salir → saldré, valer → valdré." },
      { name: "Raíz propia", text: "hacer → haré, decir → diré." },
    ],
    faq: [
      { question: "¿Qué verbos son irregulares en futuro?", answer: "tener, poner, venir, salir, valer, poder, saber, querer, haber, caber, hacer y decir, más sus compuestos (mantendré, propondré, desharé)." },
      { question: "¿Las terminaciones del futuro cambian en los irregulares?", answer: "No. Solo cambia la raíz: tendré, tendrás, tendrá, tendremos, tendréis, tendrán." },
      { question: "¿Predecir hace prediré o prediceré?", answer: "La forma recomendada es prediré, como decir, aunque en el uso aparece también predeciré." },
    ],
  },
  {
    slug: "condicional", tense: "condicional", label: "Condicional simple", guide: "condicional",
    h1: "Verbos irregulares en condicional simple",
    title: "Verbos irregulares en condicional: tendría, haría, podría | SpanishCue",
    description: "Verbos irregulares en condicional simple, con la misma raíz que el futuro: tendría, haría, diría, podría, querría y saldría. Formas completas y ejercicio.",
    intro: [
      "El condicional usa exactamente las mismas raíces irregulares que el futuro, con las terminaciones del imperfecto de -er/-ir: -ía, -ías, -ía, -íamos, -íais, -ían.",
      "Por eso se enseñan juntos: quien sabe «tendré» sabe «tendría».",
    ],
    patterns: [
      { name: "Pierden la vocal", text: "podría, sabría, querría, habría, cabría." },
      { name: "Cambian la vocal por d", text: "tendría, pondría, vendría, saldría, valdría." },
      { name: "Raíz propia", text: "haría, diría." },
    ],
    faq: [
      { question: "¿El condicional tiene los mismos irregulares que el futuro?", answer: "Sí, los mismos doce verbos y sus compuestos, con la misma raíz: haré → haría, diré → diría." },
      { question: "¿Para qué se usa el condicional?", answer: "Para hipótesis (yo en tu lugar iría), consejos (deberías descansar), peticiones corteses (¿podrías ayudarme?) y el futuro visto desde el pasado (dijo que vendría)." },
      { question: "¿Querría o quisiera?", answer: "Las dos sirven para pedir con cortesía: «querría un café» (condicional) y «quisiera un café» (imperfecto de subjuntivo)." },
    ],
  },
  {
    slug: "subjuntivo-presente", tense: "subjPresente", label: "Presente de subjuntivo", guide: "subjuntivo",
    h1: "Verbos irregulares en presente de subjuntivo",
    title: "Verbos irregulares en presente de subjuntivo: lista completa | SpanishCue",
    description: "Verbos irregulares en presente de subjuntivo: los que salen del yo del presente (tenga, haga, conozca), los diptongos y los seis de forma propia (sea, vaya, haya).",
    intro: [
      "El presente de subjuntivo se forma desde la primera persona del presente de indicativo: tengo → tenga, conozco → conozca, pido → pida. Si el alumno domina el yo del presente, tiene casi todo el subjuntivo.",
      "Los verbos con diptongo lo mantienen en las mismas personas que en indicativo (piense, pensemos). Los verbos en -ir con cambio e → i o o → u lo llevan también en nosotros: sintamos, durmamos.",
    ],
    patterns: [
      { name: "Desde el yo del presente", text: "tengo → tenga, hago → haga, digo → diga, salgo → salga, conozco → conozca, oigo → oiga." },
      { name: "Diptongos", text: "pensar → piense, poder → pueda, volver → vuelva; nosotros vuelve a la vocal: pensemos, podamos." },
      { name: "-ir con cambio vocálico", text: "pedir → pida, pidamos; sentir → sienta, sintamos; dormir → duerma, durmamos." },
      { name: "Formas propias", text: "ser → sea, ir → vaya, haber → haya, saber → sepa, estar → esté, dar → dé." },
    ],
    faq: [
      { question: "¿Cómo se forma el presente de subjuntivo de un verbo irregular?", answer: "Se toma la primera persona del presente de indicativo, se quita la -o y se añaden las terminaciones contrarias: -e en los verbos en -ar (piense) y -a en los verbos en -er/-ir (tenga)." },
      { question: "¿Qué verbos no siguen esa regla?", answer: "Seis: ser (sea), ir (vaya), haber (haya), saber (sepa), estar (esté) y dar (dé)." },
      { question: "¿Busque o busqué?", answer: "busque, sin tilde, es presente de subjuntivo (que yo busque). busqué, con tilde, es indefinido (ayer busqué). El cambio c → qu es ortográfico." },
    ],
  },
  {
    slug: "subjuntivo-imperfecto", tense: "subjImperfecto", label: "Imperfecto de subjuntivo", guide: "subjuntivo",
    h1: "Verbos irregulares en imperfecto de subjuntivo",
    title: "Verbos irregulares en imperfecto de subjuntivo: tuviera | SpanishCue",
    description: "Verbos irregulares en imperfecto de subjuntivo: se forman desde la tercera persona plural del indefinido (tuvieron → tuviera). Lista, formas -ra y -se, ejercicio.",
    intro: [
      "El imperfecto de subjuntivo no tiene irregularidades propias: hereda todas las del indefinido. Se toma la forma de ellos/ellas del indefinido, se quita -ron y se añade -ra o -se: tuvieron → tuviera / tuviese.",
      "Las dos terminaciones (-ra y -se) son equivalentes en casi todos los usos; -ra es más frecuente, sobre todo en América.",
    ],
    patterns: [
      { name: "Pretéritos fuertes", text: "tuvieron → tuviera, hicieron → hiciera, dijeron → dijera, pudieron → pudiera, supieron → supiera." },
      { name: "-ir con cambio vocálico", text: "pidieron → pidiera, sintieron → sintiera, durmieron → durmiera." },
      { name: "ser, ir, dar", text: "fueron → fuera (ser e ir), dieron → diera." },
    ],
    faq: [
      { question: "¿Cómo se forma el imperfecto de subjuntivo?", answer: "Con la tercera persona plural del indefinido sin -ron, más -ra, -ras, -ra, -ramos, -rais, -ran (o -se, -ses…). Nosotros lleva tilde: tuviéramos." },
      { question: "¿Hubiera o hubiese?", answer: "Son equivalentes: «si hubiera sabido» y «si hubiese sabido» significan lo mismo." },
      { question: "¿Cuándo se usa?", answer: "En oraciones que dependen de un verbo en pasado (quería que vinieras), en condiciones irreales (si tuviera tiempo…) y en deseos difíciles (ojalá pudiera)." },
    ],
  },
  {
    slug: "imperativo", tense: "imperativo", label: "Imperativo", guide: "imperativo",
    h1: "Verbos irregulares en imperativo",
    title: "Verbos irregulares en imperativo: ten, haz, di, pon, sal | SpanishCue",
    description: "Verbos irregulares en imperativo afirmativo: los ocho de tú (ten, haz, di, pon, sal, ven, ve, sé), los diptongos (piensa) y usted/ustedes desde el subjuntivo.",
    intro: [
      "El imperativo de tú suele ser igual que la tercera persona del presente (habla, come, piensa). Solo ocho verbos de uso frecuente tienen una forma corta propia, más sus compuestos.",
      "Usted, nosotros y ustedes usan las formas del presente de subjuntivo, así que heredan sus irregularidades: tenga, hagamos, vayan. El imperativo negativo usa siempre el subjuntivo: no tengas, no hagas.",
    ],
    patterns: [
      { name: "Los ocho de tú", text: "tener → ten, hacer → haz, decir → di, poner → pon, salir → sal, venir → ven, ir → ve, ser → sé." },
      { name: "Compuestos", text: "mantener → mantén, proponer → propón, deshacer → deshaz. Llevan tilde cuando la forma termina en n o s y tiene más de una sílaba." },
      { name: "Diptongos y cambios vocálicos", text: "piensa, vuelve, pide, duerme: igual que la tercera persona del presente." },
    ],
    faq: [
      { question: "¿Cuáles son los imperativos irregulares de tú?", answer: "ten, haz, di, pon, sal, ven, ve y sé, de tener, hacer, decir, poner, salir, venir, ir y ser." },
      { question: "¿El imperativo negativo es irregular?", answer: "Usa el presente de subjuntivo: no tengas, no hagas, no digas. Sus irregularidades son las del subjuntivo." },
      { question: "¿Cómo se pone el pronombre?", answer: "Detrás y unido en el afirmativo (dímelo, ponlo) y delante y separado en el negativo (no me lo digas)." },
    ],
  },
  {
    slug: "participios", form: "participle", label: "Participios irregulares", guide: "preterito-perfecto",
    h1: "Participios irregulares en español",
    title: "Participios irregulares: lista completa (hecho, dicho, visto) | SpanishCue",
    description: "Lista de participios irregulares en español: hecho, dicho, visto, puesto, escrito, abierto, vuelto, roto, muerto y sus compuestos, con ejemplos y ejercicio.",
    intro: [
      "El participio regular termina en -ado (hablado) o -ido (comido). Una veintena de verbos frecuentes tienen participio irregular, casi siempre en -to o -cho, y lo transmiten a sus compuestos: hacer → hecho, deshacer → deshecho.",
      "El participio no cambia en los tiempos compuestos (he escrito, habían escrito), pero concuerda cuando funciona como adjetivo: la carta escrita, las puertas abiertas.",
    ],
    patterns: [
      { name: "En -cho", text: "hacer → hecho, decir → dicho, satisfacer → satisfecho." },
      { name: "En -to", text: "ver → visto, poner → puesto, escribir → escrito, abrir → abierto, cubrir → cubierto, volver → vuelto, romper → roto, morir → muerto, resolver → resuelto." },
      { name: "En -so", text: "imprimir → impreso (también imprimido)." },
    ],
    faq: [
      { question: "¿Cuáles son los participios irregulares más comunes?", answer: "hecho, dicho, visto, puesto, escrito, abierto, vuelto, roto, muerto, cubierto y resuelto." },
      { question: "¿Los compuestos también son irregulares?", answer: "Sí: devolver → devuelto, descubrir → descubierto, proponer → propuesto, prever → previsto." },
      { question: "¿Imprimido o impreso?", answer: "Las dos formas son correctas como participio (he imprimido / he impreso); como adjetivo se prefiere impreso." },
    ],
  },
  {
    slug: "gerundios", form: "gerund", label: "Gerundios irregulares", guide: "estar-gerundio",
    h1: "Gerundios irregulares en español",
    title: "Gerundios irregulares: diciendo, durmiendo, yendo, leyendo | SpanishCue",
    description: "Gerundios irregulares en español: los verbos en -ir con cambio vocálico (pidiendo, durmiendo), poder (pudiendo), ir (yendo) y la y de leyendo, con ejercicio.",
    intro: [
      "El gerundio se forma con -ando para los verbos en -ar e -iendo para los verbos en -er/-ir. Las irregularidades se concentran en los verbos en -ir con cambio vocálico, que repiten el cambio de la tercera persona del indefinido: pidió → pidiendo.",
      "Cuando la raíz termina en vocal, -iendo se escribe -yendo: leyendo, cayendo, construyendo. Es un cambio ortográfico.",
    ],
    patterns: [
      { name: "e → i", text: "pedir → pidiendo, decir → diciendo, sentir → sintiendo, venir → viniendo, seguir → siguiendo." },
      { name: "o → u", text: "dormir → durmiendo, morir → muriendo, poder → pudiendo." },
      { name: "Formas propias", text: "ir → yendo; reír, freír y sonreír → riendo, friendo, sonriendo." },
    ],
    faq: [
      { question: "¿Qué gerundios son irregulares?", answer: "Los de los verbos en -ir con cambio e → i u o → u (pidiendo, durmiendo), además de decir (diciendo), venir (viniendo), poder (pudiendo) e ir (yendo)." },
      { question: "¿Leyendo es irregular?", answer: "No: la y es un cambio ortográfico porque la raíz termina en vocal (le- + -iendo)." },
      { question: "¿Para qué se usa el gerundio?", answer: "Sobre todo con estar para la acción en curso (está durmiendo) y en perífrasis como seguir + gerundio (sigue lloviendo) o llevar + gerundio (lleva dos años estudiando)." },
    ],
  },
];

export const tiempoPages: TiempoPage[] = pages.map((page) => ({ ...page, path: `${IRREGULARES_PATH}/${page.slug}` }));
export const tiempoBySlug = new Map(tiempoPages.map((page) => [page.slug, page]));

export type IrregularRow = { verb: string; forms: string[]; marks: boolean[]; group: string };

const cache = new Map<string, IrregularRow[]>();

/** Verbs with at least one irregular form in this tense (or an irregular participle/gerund), grouped by model. */
export function irregularRows(page: TiempoPage): IrregularRow[] {
  const cached = cache.get(page.slug);
  if (cached) return cached;
  const rows: IrregularRow[] = [];
  for (const verb of verbos) {
    const cj = conjugateVerb(verb);
    const h = irregularForms(verb, cj);
    if ("tense" in page) {
      const marks = h[page.tense];
      if (!marks.some(Boolean)) continue;
      const forms = [...cj.tenses[page.tense]];
      rows.push({ verb, forms, marks, group: cap(verbModel(verb).label) });
    } else {
      const value = page.form === "participle" ? cj.participle : cj.gerund;
      const isIrregular = page.form === "participle" ? h.perfecto[0] : value !== regularGerund(verb);
      if (!isIrregular) continue;
      rows.push({ verb, forms: [value], marks: [true], group: cap(verbModel(verb).label) });
    }
  }
  cache.set(page.slug, rows);
  return rows;
}

function regularGerund(verb: string) {
  const stem = verb.slice(0, -2);
  const end = verb.slice(-2);
  if (end === "ar") return `${stem}ando`;
  // Vowel stems take -yendo (leyendo, construyendo): spelling, not irregularity.
  return /[aeiou]$/.test(stem) && !/[gq]u$/.test(stem) ? `${stem}yendo` : /(ñ|ll|ch)$/.test(stem) ? `${stem}endo` : `${stem}iendo`;
}

/** Twenty gaps with the irregular forms of this tense. */
export function tiempoExercise(page: TiempoPage, rows: IrregularRow[]): { q: string; a: string }[] {
  const persons = ["yo", "tú", "él / ella", "nosotros", "", "ellos / ellas"];
  const priority = ["ser", "ir", "tener", "hacer", "decir", "poder", "poner", "venir", "querer", "saber", "estar", "dar", "ver", "salir", "pedir", "dormir", "pensar", "volver", "sentir", "conducir", "traer", "oír", "jugar", "seguir", "abrir", "escribir", "romper", "morir", "leer"];
  const ordered = [...rows].sort((a, b) => {
    const ia = priority.indexOf(a.verb), ib = priority.indexOf(b.verb);
    return (ia < 0 ? 999 : ia) - (ib < 0 ? 999 : ib) || a.verb.localeCompare(b.verb, "es");
  });
  const items: { q: string; a: string }[] = [];
  for (const row of ordered) {
    if (items.length >= 20) break;
    if (!("tense" in page)) {
      items.push({ q: `${page.form === "participle" ? "Participio" : "Gerundio"} de ${row.verb}: ___`, a: row.forms[0] });
      continue;
    }
    const usable = row.marks.map((marked, i) => (marked && i !== 4 && row.forms[i] ? i : -1)).filter((i) => i >= 0);
    if (!usable.length) continue;
    const pick = usable[(row.verb.length + items.length) % usable.length];
    const who = page.tense === "imperativo" ? ["", "tú", "usted", "nosotros", "", "ustedes"][pick] : persons[pick];
    const prefix = page.tense === "subjPresente" ? "que " : page.tense === "subjImperfecto" ? "si " : "";
    items.push({ q: `${prefix}${who}: ___ (${row.verb})`, a: row.forms[pick] });
  }
  return items;
}
