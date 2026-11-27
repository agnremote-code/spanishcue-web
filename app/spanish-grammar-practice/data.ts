import type { QuizItem } from "../mini-apps/ChoiceQuiz";

/**
 * Mission phase 2, English practice cluster. Each topic page has its own rule summary, at least
 * eight questions checked on the page, one real figure from Google autocomplete in English
 * (United States), captured 2026-11-26 (docs/seo-plan/fase0/suggest-20261126.csv), and a block for
 * heritage speakers. A figure is copied from that file, never estimated.
 */
export const PRACTICE_PATH = "/spanish-grammar-practice";
export const AUTOCOMPLETE_REPORT = "/datos/que-autocompleta-google-en-gramatica";

export type PracticeTopic = {
  slug: string;
  path: string;
  /** «contrast» pages compare two forms; «forms» pages teach one tense or structure. */
  group: "contrast" | "forms";
  /** Short name, e.g. «ser vs estar». */
  name: string;
  levels: string;
  title: string;
  description: string;
  h1: string;
  /** Direct answer shown under the H1. */
  answer: string;
  rules: { use: string; example: string; meaning: string }[];
  rulesCaption: string;
  quiz: QuizItem[];
  mistakes: string[];
  figure: string;
  heritage: string;
  teacherLinks: { href: string; label: string }[];
  faq: { question: string; answer: string }[];
};

export const practiceTopics: PracticeTopic[] = [
  {
    slug: "ser-vs-estar",
    path: `${PRACTICE_PATH}/ser-vs-estar`,
    group: "contrast",
    name: "ser vs estar",
    levels: "A1–B1",
    title: "Spanish Ser vs Estar Practice: 8 Questions Checked as You Answer",
    description: "Practise ser vs estar online: a one-table summary of the rules, 8 sentences that correct as you tap, the mistakes learners make most and a note for heritage speakers. Free, no login.",
    h1: "Spanish ser vs estar practice",
    answer: "Use ser for what something is: identity, origin, profession, time and what a thing is made of. Use estar for where something is and how it is right now: location, feelings, conditions and the result of a change. Events are the exception: a party or a meeting takes ser for its place.",
    rulesCaption: "When to use ser and when to use estar",
    rules: [
      { use: "Identity, profession, origin", example: "Ana es médica. Somos de Chile.", meaning: "ser" },
      { use: "Time and dates", example: "Son las tres. Hoy es lunes.", meaning: "ser" },
      { use: "Location of people and things", example: "El banco está en la plaza.", meaning: "estar" },
      { use: "Feelings and temporary states", example: "Estoy cansado. La sopa está fría.", meaning: "estar" },
      { use: "Where an event takes place", example: "La fiesta es en mi casa.", meaning: "ser" },
      { use: "Ongoing actions (with -ando / -iendo)", example: "Estamos comiendo.", meaning: "estar" },
    ],
    quiz: [
      { before: "Mi hermana ", after: " profesora de inglés.", options: ["es", "está"], answer: 0, why: "Profession: ser." },
      { before: "¿Dónde ", after: " las llaves del coche?", options: ["son", "están"], answer: 1, why: "Location of a thing: estar." },
      { before: "Hoy ", after: " muy contenta porque aprobé el examen.", options: ["soy", "estoy"], answer: 1, why: "A feeling right now: estar." },
      { before: "El concierto ", after: " en el estadio nuevo.", options: ["es", "está"], answer: 0, why: "Where an event takes place: ser, even though it sounds like location." },
      { before: "Ya ", after: " las nueve; vamos tarde.", options: ["son", "están"], answer: 0, why: "Telling the time: ser." },
      { before: "Esta mesa ", after: " de madera.", options: ["es", "está"], answer: 0, why: "What something is made of: ser." },
      { before: "No puedo hablar ahora, ", after: " cocinando.", options: ["soy", "estoy"], answer: 1, why: "An action in progress (estar + gerund)." },
      { before: "Carlos ", after: " muy aburrido: siempre cuenta los mismos chistes.", options: ["es", "está"], answer: 0, why: "Ser aburrido describes his personality (boring). Estar aburrido would mean he feels bored." },
    ],
    mistakes: [
      "Using estar for events: «la reunión está en la sala 3» should be «la reunión es en la sala 3».",
      "Using ser for location because it feels permanent: Madrid está en España, even if it never moves.",
      "Missing the change of meaning with adjectives: ser listo (clever) and estar listo (ready), ser aburrido (boring) and estar aburrido (bored).",
    ],
    figure: "When we typed «spanish ser vs estar» into Google on 26 November 2026, the first of its 15 suggestions was «spanish ser vs estar practice». Worksheets, tests, Wordwall and a rap song also appeared in the list: people look for a way to practise, not only for the rule.",
    heritage: "If you grew up speaking Spanish at home, you probably choose ser or estar correctly without thinking. The points to check are spelling and accents: está, están and estás carry a written accent, and the first person is estoy, with y. In writing, also check que and qué after estar: «¿Qué tal estás?».",
    teacherLinks: [
      { href: "/ser-o-estar", label: "Ser o estar: every use with its own exercise (in Spanish)" },
      { href: "/guides/how-to-teach-ser-vs-estar", label: "How to teach ser vs estar" },
    ],
    faq: [
      { question: "Is estar only for temporary things?", answer: "Not exactly. Location always takes estar, even for things that never move (Madrid está en España), and death takes estar too (está muerto). Think of estar as where and how something is, not as temporary." },
      { question: "Why is it «la fiesta es en mi casa» and not «está»?", answer: "Because a party is an event. Events take ser for the place where they happen. People and objects take estar for their location." },
    ],
  },
  {
    slug: "preterite-vs-imperfect",
    path: `${PRACTICE_PATH}/preterite-vs-imperfect`,
    group: "contrast",
    name: "preterite vs imperfect",
    levels: "A2–B1",
    title: "Spanish Preterite vs Imperfect Practice: 8 Questions with Instant Answers",
    description: "Practise the Spanish preterite vs imperfect online: the rule in one table, 8 sentences that correct as you tap, the key time words and a note for heritage speakers. Free, no login.",
    h1: "Spanish preterite vs imperfect practice",
    answer: "Use the preterite for completed actions and events that move a story forward: what happened. Use the imperfect for the background: what things were like, what used to happen and what was going on when something else happened. In one sentence: «Llovía (background) cuando llegué (event)».",
    rulesCaption: "When to use the preterite and when to use the imperfect",
    rules: [
      { use: "A completed action at a specific time", example: "Ayer cené con mi abuela.", meaning: "preterite" },
      { use: "A sequence of events", example: "Llegó, se sentó y pidió un café.", meaning: "preterite" },
      { use: "Habits in the past", example: "De niño jugaba al fútbol cada tarde.", meaning: "imperfect" },
      { use: "Descriptions, age, time and weather", example: "Eran las ocho y hacía frío.", meaning: "imperfect" },
      { use: "An action in progress interrupted by another", example: "Leía cuando sonó el teléfono.", meaning: "imperfect + preterite" },
    ],
    quiz: [
      { before: "Ayer ", after: " a Lucía en el supermercado.", options: ["vi", "veía"], answer: 0, why: "A single completed event with «ayer»: preterite." },
      { before: "Cuando era pequeño, mi familia ", after: " en un pueblo cerca del mar.", options: ["vivió", "vivía"], answer: 1, why: "Background in childhood (cuando era pequeño): imperfect." },
      { before: "Todos los veranos ", after: " a casa de mis tíos.", options: ["fuimos", "íbamos"], answer: 1, why: "A repeated habit (todos los veranos): imperfect." },
      { before: "", after: " las once de la noche cuando por fin llegó el tren.", options: ["Fueron", "Eran"], answer: 1, why: "Telling the time in the past: always imperfect." },
      { before: "Mientras yo cocinaba, mi hermano ", after: " la mesa.", options: ["puso", "ponía"], answer: 1, why: "Two actions going on at the same time (mientras): imperfect." },
      { before: "De repente, alguien ", after: " a la puerta.", options: ["llamó", "llamaba"], answer: 0, why: "A sudden event (de repente): preterite." },
      { before: "La casa ", after: " grande y tenía un jardín con naranjos.", options: ["fue", "era"], answer: 1, why: "Description of a place: imperfect." },
      { before: "El año pasado ", after: " tres veces a México.", options: ["viajé", "viajaba"], answer: 0, why: "A counted number of times in a closed period: preterite." },
    ],
    mistakes: [
      "Using the imperfect with a counted number of times: «fui tres veces», not «iba tres veces», when the period is closed.",
      "Putting age and time in the preterite: «tenía diez años», «eran las cinco».",
      "Translating «was/were» always as the imperfect: «fue un viaje increíble» sums up a finished event and takes the preterite.",
    ],
    figure: "8 of the 15 suggestions Google showed for «spanish preterite vs imperfect» on 26 November 2026 ask for practice: practice, worksheets, exercises, a test or Quizlet sets. The very first one was «spanish preterite vs imperfect practice», and another was «practice with a story», which is how this contrast works best.",
    heritage: "If you grew up speaking Spanish at home, the choice between fui and iba probably comes naturally. What to check is spelling: the preterite yo form carries an accent on regular verbs (hablé, volví, conocí), the imperfect -er/-ir forms carry one on the í (comía, vivía), and -aba is always spelled with b (hablaba, estaba).",
    teacherLinks: [
      { href: "/indefinido-o-imperfecto", label: "Indefinido o imperfecto: one page per time word (in Spanish)" },
      { href: "/guides/preterite-vs-imperfect-activities", label: "Preterite vs imperfect activities for class" },
      { href: "/gramatica/indefinido-e-imperfecto", label: "Free interactive class: indefinido e imperfecto" },
    ],
    faq: [
      { question: "Which time words go with the preterite?", answer: "Words that close a period or mark a point: ayer, anoche, el lunes pasado, en 2019, de repente, una vez. They are clues, not rules: the meaning of the sentence decides." },
      { question: "Which time words go with the imperfect?", answer: "Words of habit and background: siempre, todos los días, a menudo, de niño, mientras, antes. Again, they help, but the question is always whether you are telling what happened or describing how things were." },
    ],
  },
  {
    slug: "subjunctive",
    path: `${PRACTICE_PATH}/subjunctive`,
    group: "contrast",
    name: "present subjunctive",
    levels: "B1–B2",
    title: "Spanish Present Subjunctive Practice: Forms First, Then 8 Questions",
    description: "Practise the Spanish present subjunctive online: how to form it, the triggers that need it, 8 sentences that correct as you tap and a note for heritage speakers. Free, no login.",
    h1: "Spanish present subjunctive practice",
    answer: "Form the present subjunctive from the yo form of the present, drop the -o and swap the vowel: -ar verbs take -e (hable), -er and -ir verbs take -a (coma, viva). Use it after expressions of wish, emotion, doubt or purpose when the second clause has a different subject: «Quiero que vengas».",
    rulesCaption: "When the present subjunctive is needed",
    rules: [
      { use: "Wishes and requests with a new subject", example: "Quiero que me llames.", meaning: "subjunctive" },
      { use: "Emotions about someone else's action", example: "Me alegra que estés aquí.", meaning: "subjunctive" },
      { use: "Doubt and denial", example: "No creo que llueva.", meaning: "subjunctive" },
      { use: "Purpose with para que", example: "Te lo explico para que lo entiendas.", meaning: "subjunctive" },
      { use: "Future time with cuando", example: "Cuando llegues, avísame.", meaning: "subjunctive" },
      { use: "Belief and facts", example: "Creo que llueve.", meaning: "indicative" },
    ],
    quiz: [
      { before: "Quiero que tú ", after: " a la fiesta.", options: ["vienes", "vengas"], answer: 1, why: "A wish about another person (quiero que): subjunctive. Vengo → venga." },
      { before: "Creo que Marta ", after: " razón.", options: ["tiene", "tenga"], answer: 0, why: "Creer que in the affirmative presents a belief: indicative." },
      { before: "No creo que Marta ", after: " razón.", options: ["tiene", "tenga"], answer: 1, why: "No creer que expresses doubt: subjunctive." },
      { before: "Te dejo mi coche para que ", after: " al trabajo.", options: ["vas", "vayas"], answer: 1, why: "Para que always takes the subjunctive. Ir is irregular: vaya." },
      { before: "Cuando ", after: " a casa, llámame.", options: ["llegas", "llegues"], answer: 1, why: "Cuando + a future action: subjunctive. Llegar adds u to keep the hard g: llegue." },
      { before: "Ojalá ", after: " buen tiempo mañana.", options: ["hace", "haga"], answer: 1, why: "Ojalá expresses a wish: subjunctive. Hago → haga." },
      { before: "Es verdad que el examen ", after: " difícil.", options: ["es", "sea"], answer: 0, why: "Es verdad que states a fact: indicative." },
      { before: "Me alegra que ", after: " mejor.", options: ["estás", "estés"], answer: 1, why: "An emotion about someone else (me alegra que): subjunctive." },
    ],
    mistakes: [
      "Using the subjunctive when the subject does not change: «quiero ir», not «quiero que yo vaya».",
      "Using the subjunctive after creo que: in the affirmative it takes the indicative; only no creo que takes the subjunctive.",
      "Forgetting the irregular six: ser (sea), ir (vaya), saber (sepa), haber (haya), estar (esté) and dar (dé).",
    ],
    figure: "For «spanish present subjunctive», Google's first suggestion on 26 November 2026 was «conjugation», and 9 of its 15 suggestions were about forms: conjugation, endings, irregular verbs or a single verb (ser, tener, ir, estar, hacer). Only 3 asked for practice. That is why this page shows how to form the tense before the questions.",
    heritage: "If you grew up speaking Spanish at home, you probably use the subjunctive naturally after ojalá or para que. The usual points to check are spelling changes (llegue, busque, empiece), the accents on esté and dé, and haya, which is written with h and y. In formal writing, use the standard forms: «haya», not «haiga».",
    teacherLinks: [
      { href: "/indicativo-o-subjuntivo", label: "Indicativo o subjuntivo: one page per expression (in Spanish)" },
      { href: "/guides/spanish-subjunctive-lesson-plan", label: "Spanish subjunctive lesson plan" },
    ],
    faq: [
      { question: "How do I form the present subjunctive?", answer: "Take the yo form of the present, drop the -o and add the opposite vowel: hablo → hable, como → coma, tengo → tenga. Six verbs do not follow this: ser, ir, saber, haber, estar and dar." },
      { question: "Does «cuando» always take the subjunctive?", answer: "Only when it refers to the future: «cuando llegues». For habits or the past it takes the indicative: «cuando llego, ceno», «cuando llegué, cené»." },
    ],
  },
  {
    slug: "por-vs-para",
    path: `${PRACTICE_PATH}/por-vs-para`,
    group: "contrast",
    name: "por vs para",
    levels: "A2–B1",
    title: "Spanish Por vs Para Practice: 8 Questions Checked as You Answer",
    description: "Practise por vs para online: the uses in one table, 8 sentences that correct as you tap, the most common mistakes and a note for heritage speakers. Free, no login.",
    h1: "Spanish por vs para practice",
    answer: "Use para for goals and destinations: purpose, recipient, destination and deadline. Use por for causes and paths: reason, exchange, the route through a place, a period of time and means. A quick test: if you can say «in order to» or «for (someone) to receive», it is para; if you can say «because of», «in exchange for» or «through», it is por.",
    rulesCaption: "When to use por and when to use para",
    rules: [
      { use: "Purpose (in order to)", example: "Estudio para aprobar.", meaning: "para" },
      { use: "Recipient and destination", example: "Este regalo es para ti. Salgo para Lima.", meaning: "para" },
      { use: "Deadline", example: "Lo necesito para el viernes.", meaning: "para" },
      { use: "Cause or reason", example: "Llegué tarde por el tráfico.", meaning: "por" },
      { use: "Exchange and price", example: "Lo compré por diez dólares.", meaning: "por" },
      { use: "Through a place, means, part of the day", example: "Paseamos por el parque. Hablamos por teléfono por la tarde.", meaning: "por" },
    ],
    quiz: [
      { before: "Estas flores son ", after: " mi madre.", options: ["por", "para"], answer: 1, why: "Recipient: para." },
      { before: "Gracias ", after: " tu ayuda.", options: ["por", "para"], answer: 0, why: "Gracias por: the reason you thank someone." },
      { before: "Necesito el informe ", after: " el lunes.", options: ["por", "para"], answer: 1, why: "Deadline: para." },
      { before: "Caminamos ", after: " la playa al atardecer.", options: ["por", "para"], answer: 0, why: "Movement through or along a place: por." },
      { before: "Ahorro dinero ", after: " viajar a Japón.", options: ["por", "para"], answer: 1, why: "Purpose (in order to): para + infinitive." },
      { before: "Cambié mi bici ", after: " una guitarra.", options: ["por", "para"], answer: 0, why: "Exchange: por." },
      { before: "No salimos ", after: " la lluvia.", options: ["por", "para"], answer: 0, why: "Cause (because of the rain): por." },
      { before: "Mañana salgo ", after: " Bogotá a las seis.", options: ["por", "para"], answer: 1, why: "Destination: para. «Paso por Bogotá» would mean you go through it." },
    ],
    mistakes: [
      "Saying «para» after gracias: it is always gracias por.",
      "Using por for purpose because English says «for»: «estudio para aprender», not «por aprender».",
      "Mixing up destination and route: «salgo para Lima» (going there) and «paso por Lima» (going through).",
    ],
    figure: "Google's first two suggestions for «spanish por vs para» on 26 November 2026 were «quiz» and «practice»; the third was «acronym», for the memory tricks many classes use to remember the uses.",
    heritage: "If you grew up speaking Spanish at home, por and para probably come out right in speech. In writing, watch the contraction pa' (informal; write para in schoolwork) and the fixed expressions that always take por: por favor, por eso, por fin, por supuesto. Also check the accent in «para qué» when it is a question: «¿Para qué lo quieres?».",
    teacherLinks: [
      { href: "/por-o-para", label: "Por o para: a three-question decision tree (in Spanish)" },
      { href: "/spanish-grammar-lessons/por-vs-para-activities", label: "Por vs para activities for class" },
    ],
    faq: [
      { question: "Is there a simple rule for por vs para?", answer: "Para looks forward to a goal or destination; por looks back to a cause or goes through a path. Ask why something happens (por) or what it is for (para)." },
      { question: "Why is it «gracias por» and not «gracias para»?", answer: "Because you thank someone for a reason that already happened: the help, the gift, the time. Reason and cause take por." },
    ],
  },
  {
    slug: "preterite",
    path: `${PRACTICE_PATH}/preterite`,
    group: "forms",
    name: "preterite",
    levels: "A2",
    title: "Spanish Preterite Practice: Endings, Irregulars and 8 Questions",
    description: "Practise the Spanish preterite online: regular endings in one table, the irregular verbs that matter most, 8 sentences that correct as you tap and a note for heritage speakers. Free, no login.",
    h1: "Spanish preterite practice",
    answer: "Regular -ar verbs take -é, -aste, -ó, -amos, -aron (hablé, hablaste, habló). Regular -er and -ir verbs share one set: -í, -iste, -ió, -imos, -ieron (volví, volviste, volvió). The most frequent verbs are irregular: ser and ir share fui, fuiste, fue, fuimos, fueron, and verbs like tener, estar and hacer change their stem (tuve, estuve, hice) and drop the accents.",
    rulesCaption: "Preterite endings and the main irregular groups",
    rules: [
      { use: "Regular -ar verbs", example: "hablé, hablaste, habló, hablamos, hablaron", meaning: "-é, -aste, -ó" },
      { use: "Regular -er and -ir verbs", example: "volví, volviste, volvió, volvimos, volvieron", meaning: "-í, -iste, -ió" },
      { use: "Ser and ir (same forms)", example: "fui, fuiste, fue, fuimos, fueron", meaning: "irregular" },
      { use: "New stem, endings without accents", example: "tuve, estuve, pude, puse, hice, quise, vine", meaning: "irregular" },
      { use: "Stem in -j: ellos form in -eron", example: "dije, dijeron; traje, trajeron", meaning: "irregular" },
      { use: "Stem change in -ir verbs (él and ellos only)", example: "pidió, pidieron; durmió, durmieron", meaning: "e → i, o → u" },
    ],
    quiz: [
      { before: "Ayer yo ", after: " con mi jefe por teléfono.", options: ["hablé", "hablo"], answer: 0, why: "Regular -ar verb, yo form: -é, with a written accent." },
      { before: "¿A qué hora ", after: " tú anoche?", options: ["volviste", "volvistes"], answer: 0, why: "The tú form of the preterite never ends in -s: volviste." },
      { before: "El verano pasado nosotros ", after: " a Cancún.", options: ["fuimos", "íbamos"], answer: 0, why: "A completed trip in a closed period: preterite of ir, fuimos." },
      { before: "Mis padres ", after: " una casa nueva en 2020.", options: ["compraron", "compramos"], answer: 0, why: "Ellos form of a regular -ar verb: -aron." },
      { before: "Ella no ", after: " venir a la fiesta.", options: ["pudo", "podió"], answer: 0, why: "Poder has the irregular stem pud-: pudo, without an accent." },
      { before: "¿Qué ", after: " ustedes el fin de semana?", options: ["hicieron", "hacieron"], answer: 0, why: "Hacer has the stem hic-: hicieron." },
      { before: "Los niños ", after: " la verdad.", options: ["dijeron", "dijieron"], answer: 0, why: "After a stem in -j, the ellos ending is -eron: dijeron, trajeron." },
      { before: "Mi hermano ", after: " diez horas el domingo.", options: ["durmió", "dormió"], answer: 0, why: "Dormir changes o → u in the él and ellos forms: durmió, durmieron." },
    ],
    mistakes: [
      "Adding -s to the tú form: «fuistes», «hablastes». The correct forms are fuiste and hablaste.",
      "Putting accents on irregular stems: «tuvó», «hizó». Irregular preterites have no written accent: tuvo, hizo.",
      "Forgetting the stem change in -ir verbs: «pedió», «dormió» instead of pidió and durmió.",
    ],
    figure: "When we typed «spanish preterite» into Google on 26 November 2026, 9 of its 15 suggestions were about forms: conjugations, endings, irregulars, charts and verb lists. 5 of the 15 mentioned the imperfect too, so this page links straight to the preterite vs imperfect practice.",
    heritage: "If you grew up speaking Spanish at home, you probably use the preterite without thinking. The forms to check in writing are the tú form without -s (fuiste, dijiste, not «fuistes»), the ellos form after -j (trajeron, not «trajieron») and the accents on regular forms: hablé and habló need them, fui and fue never do.",
    teacherLinks: [
      { href: "/conjugacion/irregulares/indefinido", label: "Every irregular preterite verb, with an exercise (in Spanish)" },
      { href: "/material-ele/indefinido-e-imperfecto", label: "Teaching the preterite and the imperfect: activities and worksheets (in Spanish)" },
    ],
    faq: [
      { question: "Why do ser and ir have the same preterite?", answer: "Historically, these forms come from the Latin past of «to be», and ir took them over. Context tells them apart: «fue médico» (ser), «fue al médico» (ir)." },
      { question: "Which irregular preterites should I learn first?", answer: "Ser/ir (fui), tener (tuve), estar (estuve), hacer (hice), poder (pude), poner (puse), decir (dije), venir (vine) and querer (quise). They cover most of what you hear in conversation." },
    ],
  },
  {
    slug: "imperfect",
    path: `${PRACTICE_PATH}/imperfect`,
    group: "forms",
    name: "imperfect",
    levels: "A2",
    title: "Spanish Imperfect Practice: Endings, the Three Irregulars and 8 Questions",
    description: "Practise the Spanish imperfect online: the endings in one table, the only three irregular verbs, 8 sentences that correct as you tap and a note for heritage speakers. Free, no login.",
    h1: "Spanish imperfect practice",
    answer: "The imperfect is the most regular tense in Spanish. -ar verbs take -aba (hablaba, hablabas, hablábamos, hablaban) and -er and -ir verbs take -ía (comía, vivía). Only three verbs are irregular: ser (era), ir (iba) and ver (veía). Use it for habits in the past, descriptions and actions that were in progress.",
    rulesCaption: "Imperfect endings and the three irregular verbs",
    rules: [
      { use: "Regular -ar verbs", example: "hablaba, hablabas, hablaba, hablábamos, hablaban", meaning: "-aba" },
      { use: "Regular -er and -ir verbs", example: "comía, comías, comía, comíamos, comían", meaning: "-ía" },
      { use: "Ser", example: "era, eras, era, éramos, eran", meaning: "irregular" },
      { use: "Ir", example: "iba, ibas, iba, íbamos, iban", meaning: "irregular" },
      { use: "Ver (keeps the e)", example: "veía, veías, veía, veíamos, veían", meaning: "irregular" },
    ],
    quiz: [
      { before: "De niña, yo ", after: " en el coro de la escuela.", options: ["cantaba", "cantía"], answer: 0, why: "Regular -ar verb: -aba." },
      { before: "Antes nosotros ", after: " en el centro de la ciudad.", options: ["vivíamos", "vivábamos"], answer: 0, why: "-ir verbs take -ía, never -aba: vivíamos." },
      { before: "Mi abuelo ", after: " muy alto y tenía el pelo blanco.", options: ["era", "estaba"], answer: 0, why: "A description of what he was like: imperfect of ser, era." },
      { before: "Todos los domingos ", after: " a misa con mi familia.", options: ["iba", "fui"], answer: 0, why: "A repeated habit: imperfect. Ir is irregular: iba." },
      { before: "Cuando éramos pequeños, ", after: " dibujos animados cada mañana.", options: ["veíamos", "víamos"], answer: 0, why: "Ver keeps its e in the imperfect: veíamos." },
      { before: "Mientras tú ", after: " la cena, yo ponía la mesa.", options: ["preparabas", "preparaste"], answer: 0, why: "Two actions in progress at the same time (mientras): imperfect." },
      { before: "Los niños ", after: " mucho cuando jugaban en el parque.", options: ["corrían", "corrieron"], answer: 0, why: "Background action in a past habit: imperfect, -ían." },
      { before: "Ustedes siempre ", after: " temprano a clase.", options: ["llegaban", "llegaron"], answer: 0, why: "Siempre marks a habit here: imperfect." },
    ],
    mistakes: [
      "Mixing the endings: «vivábamos» or «cantía». -ar verbs take -aba, -er and -ir verbs take -ía.",
      "Making regular verbs irregular: only ser, ir and ver are irregular in the imperfect, so tener is tenía and hacer is hacía.",
      "Dropping the accents: comía, vivía, hablábamos and íbamos all need them.",
    ],
    figure: "For «spanish imperfect», 3 of Google's 15 suggestions on 26 November 2026 asked for irregulars, even though the imperfect has only three irregular verbs: ser, ir and ver. Another 3 compared it with the preterite.",
    heritage: "If you grew up speaking Spanish at home, the imperfect will sound natural. In writing, check two things: -aba is always spelled with b (cantaba, estaba), and -ía always carries an accent on the í (tenía, decía). The nosotros forms carry an accent too: hablábamos, éramos, íbamos.",
    teacherLinks: [
      { href: "/conjugacion/irregulares/imperfecto", label: "The imperfect's irregular verbs, with an exercise (in Spanish)" },
      { href: "/indefinido-o-imperfecto", label: "Indefinido o imperfecto: one page per time word (in Spanish)" },
    ],
    faq: [
      { question: "How many irregular verbs does the imperfect have?", answer: "Three: ser (era), ir (iba) and ver (veía). Every other verb is regular, including the ones that are irregular in the present or the preterite." },
      { question: "Is the imperfect the same as «used to»?", answer: "Often. «Jugaba al fútbol» can mean «I used to play football» or «I was playing football». It also describes how things were: «la casa era grande»." },
    ],
  },
  {
    slug: "present-perfect",
    path: `${PRACTICE_PATH}/present-perfect`,
    group: "forms",
    name: "present perfect",
    levels: "A2",
    title: "Spanish Present Perfect Practice: Haber, Participles and 8 Questions",
    description: "Practise the Spanish present perfect online: haber plus the participle, the irregular participles real learners get wrong, 8 sentences that correct as you tap and a note for heritage speakers. Free, no login.",
    h1: "Spanish present perfect practice",
    answer: "Form the present perfect with the present of haber (he, has, ha, hemos, han) and a participle in -ado or -ido: he hablado, hemos comido. The participle never changes: «han salido», not «han salidos». About a dozen frequent verbs have irregular participles: hecho, dicho, visto, puesto, escrito, abierto, vuelto, roto.",
    rulesCaption: "How the present perfect is formed",
    rules: [
      { use: "Haber in the present", example: "he, has, ha, hemos, han", meaning: "auxiliary" },
      { use: "-ar verbs", example: "he trabajado, ha llegado", meaning: "-ado" },
      { use: "-er and -ir verbs", example: "hemos comido, han salido", meaning: "-ido" },
      { use: "Irregular participles", example: "hecho, dicho, visto, puesto, escrito, abierto, vuelto, roto", meaning: "irregular" },
      { use: "Pronouns go before haber", example: "Me he levantado tarde. Se lo he dicho.", meaning: "word order" },
    ],
    quiz: [
      { before: "Hoy ", after: " las ventanas de la oficina.", options: ["he abierto", "he abrido"], answer: 0, why: "Abrir has an irregular participle: abierto." },
      { before: "Mi abuelo nunca ha ", after: " un mensaje de texto.", options: ["escrito", "escribido"], answer: 0, why: "Escribir has an irregular participle: escrito." },
      { before: "Los turistas ", after: " temprano del hotel.", options: ["han salido", "han salidos"], answer: 0, why: "After haber, the participle never takes -s." },
      { before: "Esta semana mis compañeros y yo ", after: " mucho.", options: ["hemos trabajado", "he trabajado"], answer: 0, why: "«Mis compañeros y yo» is nosotros: hemos." },
      { before: "¿Quién ha ", after: " eso? No es verdad.", options: ["dicho", "decido"], answer: 0, why: "Decir has an irregular participle: dicho." },
      { before: "Los vecinos han ", after: " la piñata.", options: ["roto", "rompido"], answer: 0, why: "Romper has an irregular participle: roto." },
      { before: "Todavía no ", after: " nada a Paula.", options: ["le he dicho", "he le dicho"], answer: 0, why: "Pronouns go before haber, never between haber and the participle." },
      { before: "Ya han ", after: " los folletos en el barrio.", options: ["repartido", "repartio"], answer: 0, why: "Regular -ir verb: the participle ends in -ido, repartido." },
    ],
    mistakes: [
      "Regularising irregular participles: «abrido», «escribido», «rompido». The correct forms are abierto, escrito and roto.",
      "Adding -s to the participle: «han salidos». After haber the participle never changes.",
      "Putting the auxiliary in the wrong person: «mis compañeros y yo he trabajado» should be «hemos trabajado».",
    ],
    figure: "In SpanishCue homework, 6 real A2 learners made 43 mistakes with this tense between 12 and 25 November 2026. The most common was a badly formed participle, with 16 of the 43 errors: «escribido», «rompido», «ponido». 4 of the 6 learners wrote «han salidos». Every sentence in the practice above comes from one of those mistakes.",
    heritage: "If you grew up speaking Spanish at home, the forms will sound right. In writing, check the h of haber: «he comido» and «ha llegado» take h, while the preposition a does not («voy a comer»). Also tell hecho (from hacer) from echo (from echar): «he hecho la tarea», «te echo de menos».",
    teacherLinks: [
      { href: "/datos/errores-preterito-perfecto-a2", label: "The full report: 43 real mistakes with the present perfect (in Spanish)" },
      { href: "/conjugacion/irregulares/participios", label: "Every irregular participle, with an exercise (in Spanish)" },
      { href: "/material-ele/preterito-perfecto", label: "Teaching the present perfect: activities and worksheets (in Spanish)" },
    ],
    faq: [
      { question: "When is the present perfect used in Spanish?", answer: "For actions in a period that is not over (hoy, esta semana, este año), for life experiences (¿has estado en México?) and for recent news. In much of Latin America the preterite is used more often for recent actions: «hoy cené» is as common as «hoy he cenado»." },
      { question: "Does the participle agree with the subject?", answer: "Not in the present perfect: «ella ha salido», «ellos han salido». It only agrees when it works as an adjective: «la puerta está abierta»." },
    ],
  },
  {
    slug: "future-tense",
    path: `${PRACTICE_PATH}/future-tense`,
    group: "forms",
    name: "future tense",
    levels: "A2–B1",
    title: "Spanish Future Tense Practice: Endings, Irregular Stems and 8 Questions",
    description: "Practise the Spanish future tense online: one set of endings for every verb, the twelve irregular stems, 8 sentences that correct as you tap and a note for heritage speakers. Free, no login.",
    h1: "Spanish future tense practice",
    answer: "Add one set of endings to the whole infinitive, for -ar, -er and -ir verbs alike: -é, -ás, -á, -emos, -án (hablaré, comerás, vivirá). Irregular verbs keep the same endings on a shorter stem: tendré, saldré, podré, haré, diré. In conversation, «ir a + infinitive» is often used instead, and the future also expresses a guess about the present: «¿Dónde estará Ana?».",
    rulesCaption: "Future endings and irregular stems",
    rules: [
      { use: "All regular verbs: infinitive + ending", example: "hablaré, comerás, vivirá, iremos, serán", meaning: "-é, -ás, -á, -emos, -án" },
      { use: "Stem with -dr-", example: "tendré, saldré, pondré, vendré, valdré", meaning: "irregular" },
      { use: "Stem that loses the e", example: "podré, sabré, habrá, querré, cabré", meaning: "irregular" },
      { use: "Short stems", example: "haré (hacer), diré (decir)", meaning: "irregular" },
      { use: "A guess about the present", example: "Serán las diez. ¿Dónde estará Ana?", meaning: "probability" },
    ],
    quiz: [
      { before: "Mañana ", after: " a mi abuela al hospital.", options: ["visitaré", "visitará"], answer: 0, why: "Yo form: -é. Visitará would be él or ella." },
      { before: "El año que viene nosotros ", after: " en otra ciudad.", options: ["viviremos", "vivimos"], answer: 0, why: "Future, nosotros form: vivir + -emos." },
      { before: "Si sigues así, ", after: " problemas.", options: ["tendrás", "tenerás"], answer: 0, why: "Tener has the irregular stem tendr-: tendrás." },
      { before: "¿Qué ", after: " ustedes en vacaciones?", options: ["harán", "hacerán"], answer: 0, why: "Hacer has the short stem har-: harán." },
      { before: "No te preocupes, te lo ", after: " todo mañana.", options: ["diré", "deciré"], answer: 0, why: "Decir has the short stem dir-: diré." },
      { before: "El tren ", after: " a las ocho en punto.", options: ["saldrá", "salirá"], answer: 0, why: "Salir has the stem saldr-: saldrá." },
      { before: "No contesta el teléfono: ", after: " durmiendo.", options: ["estará", "estaré"], answer: 0, why: "A guess about someone else right now: él/ella form of estar in the future." },
      { before: "Creo que este año ", after: " ir a la playa.", options: ["podremos", "poderemos"], answer: 0, why: "Poder loses the e: podr- → podremos." },
    ],
    mistakes: [
      "Adding the endings to the stem instead of the infinitive: the future is hablaré (hablar + é), not «hablé».",
      "Regularising the irregular stems: «tenerá», «hacerán», «salirá». The correct forms are tendrá, harán and saldrá.",
      "Forgetting the accents: every form except nosotros carries one (hablaré, hablarás, hablará, hablarán).",
    ],
    figure: "«spanish future tense irregulars» was the second of Google's 15 suggestions for «spanish future tense» on 26 November 2026, and 3 more named a single verb: ir, ser and estar. That is why this page puts the irregular stems in the table and half of the questions.",
    heritage: "If you grew up speaking Spanish at home, you may use «voy a + infinitive» more than the future, and that is correct. When you write the future, check the accents (tendré, podrás, harán) and the spelling of haber: «habrá» (there will be) is written with h and b, unlike «abra» from abrir.",
    teacherLinks: [
      { href: "/conjugacion/irregulares/futuro", label: "Every irregular future verb, with an exercise (in Spanish)" },
      { href: "/material-ele/futuro", label: "Teaching the future tense: activities and worksheets (in Spanish)" },
    ],
    faq: [
      { question: "Is «voy a + infinitive» the same as the future tense?", answer: "Both talk about the future. «Voy a viajar» sounds like a plan; «viajaré» sounds more like a prediction or a promise, and it is more frequent in writing." },
      { question: "Which verbs are irregular in the future?", answer: "Twelve common ones: tener, salir, poner, venir, valer (-dr-), poder, saber, haber, querer, caber (lose the e), hacer and decir (har-, dir-). The same stems are used in the conditional." },
    ],
  },
  {
    slug: "reflexive-verbs",
    path: `${PRACTICE_PATH}/reflexive-verbs`,
    group: "forms",
    name: "reflexive verbs",
    levels: "A1–A2",
    title: "Spanish Reflexive Verbs Practice: Pronouns, Position and 8 Questions",
    description: "Practise Spanish reflexive verbs online: the pronouns in one table, where they go, the daily-routine verbs, 8 sentences that correct as you tap and a note for heritage speakers. Free, no login.",
    h1: "Spanish reflexive verbs practice",
    answer: "A reflexive verb carries a pronoun that matches the subject: me, te, se, nos, se (me levanto, te duchas, se viste). The pronoun goes before the conjugated verb, or attached to the end of an infinitive, a gerund or an affirmative command: «me voy a duchar» or «voy a ducharme», «levántate».",
    rulesCaption: "Reflexive pronouns and where they go",
    rules: [
      { use: "Pronoun for each person", example: "yo me, tú te, él/ella/usted se, nosotros nos, ellos/ustedes se", meaning: "me, te, se, nos, se" },
      { use: "Before a conjugated verb", example: "Me levanto a las siete.", meaning: "before" },
      { use: "Attached to an infinitive (or before the helper verb)", example: "Voy a acostarme. / Me voy a acostar.", meaning: "attached or before" },
      { use: "Attached to an affirmative command", example: "¡Siéntate! ¡Despiértense!", meaning: "attached" },
      { use: "Before a negative command", example: "No te preocupes.", meaning: "before" },
    ],
    quiz: [
      { before: "Yo ", after: " levanto a las seis todos los días.", options: ["me", "se"], answer: 0, why: "Yo takes me." },
      { before: "¿A qué hora ", after: " acuestas normalmente?", options: ["te", "se"], answer: 0, why: "Tú takes te." },
      { before: "Mis hermanos ", after: " duchan por la noche.", options: ["se", "nos"], answer: 0, why: "Ellos takes se." },
      { before: "Nosotros ", after: " vestimos rápido porque llegamos tarde.", options: ["nos", "se"], answer: 0, why: "Nosotros takes nos." },
      { before: "Voy a ", after: " temprano esta noche.", options: ["acostarme", "acostarse"], answer: 0, why: "The pronoun matches the subject (yo), even when it is attached: acostarme." },
      { before: "¡", after: ", que llegamos tarde!", options: ["Date prisa", "Te da prisa"], answer: 0, why: "Affirmative command: the pronoun is attached to the end." },
      { before: "No ", after: " preocupes, todo va a salir bien.", options: ["te", "se"], answer: 0, why: "Negative command to tú: the pronoun goes before the verb." },
      { before: "Mi padre ", after: " cada mañana antes del trabajo.", options: ["se afeita", "afeita"], answer: 0, why: "He shaves himself: reflexive, se afeita." },
    ],
    mistakes: [
      "Using se for every person: «voy a acostarse» should be «voy a acostarme».",
      "Putting the pronoun after a conjugated verb: «levanto me». It goes before: «me levanto».",
      "Leaving out the pronoun: «levanto a las siete» means you lift something at seven.",
    ],
    figure: "The first of Google's 15 suggestions for «spanish reflexive verbs» on 26 November 2026 was «list», and one of them was «daily routine», the context in which most classes teach these verbs. That is why most of the questions above describe a morning or an evening.",
    heritage: "If you grew up speaking Spanish at home, reflexive verbs probably come naturally. In writing, check the accents that appear when a pronoun is attached: levántate, sentémonos, duchándome. And in schoolwork, write the full forms rather than the spoken ones, for example «siéntense», not «siéntensen».",
    teacherLinks: [
      { href: "/material-ele/verbos-reflexivos", label: "Teaching reflexive verbs: activities and worksheets (in Spanish)" },
    ],
    faq: [
      { question: "Are all verbs with se reflexive?", answer: "No. Some verbs only exist with se (quejarse, arrepentirse), and some change meaning: ir (to go) and irse (to leave), dormir (to sleep) and dormirse (to fall asleep)." },
      { question: "Where does the pronoun go with two verbs?", answer: "Either before the first verb or attached to the infinitive or gerund: «me voy a duchar» or «voy a ducharme», «me estoy vistiendo» or «estoy vistiéndome»." },
    ],
  },
  {
    slug: "direct-object-pronouns",
    path: `${PRACTICE_PATH}/direct-object-pronouns`,
    group: "forms",
    name: "direct object pronouns",
    levels: "A2",
    title: "Spanish Direct Object Pronouns Practice: Lo, La, Los, Las in 8 Questions",
    description: "Practise Spanish direct object pronouns online: me, te, lo, la, nos, los, las in one table, where they go, 8 sentences that correct as you tap and a note for heritage speakers. Free, no login.",
    h1: "Spanish direct object pronouns practice",
    answer: "Direct object pronouns replace the person or thing that receives the action: me, te, lo, la, nos, los, las. Lo, la, los and las agree with the noun they replace: «¿Tienes las llaves? Sí, las tengo». They go before a conjugated verb, or attached to an infinitive, a gerund or an affirmative command: «voy a comprarlo», «cómpralo».",
    rulesCaption: "Direct object pronouns and where they go",
    rules: [
      { use: "Me, te, nos", example: "Ana me llama. Te veo mañana. Nos invitaron.", meaning: "me, te, nos" },
      { use: "Masculine noun or usted (man)", example: "¿El libro? Lo leí. Señor, lo espero.", meaning: "lo / los" },
      { use: "Feminine noun or usted (woman)", example: "¿La carta? La firmé. Las fotos, las tengo.", meaning: "la / las" },
      { use: "Before a conjugated verb", example: "Lo compro mañana.", meaning: "before" },
      { use: "Attached to an infinitive, gerund or affirmative command", example: "Voy a comprarlo. Estoy leyéndola. ¡Cómpralo!", meaning: "attached" },
    ],
    quiz: [
      { before: "¿Dónde está mi teléfono? No ", after: " encuentro.", options: ["lo", "la"], answer: 0, why: "El teléfono is masculine singular: lo." },
      { before: "¿Compraste las entradas? Sí, ", after: " compré ayer.", options: ["las", "los"], answer: 0, why: "Las entradas is feminine plural: las." },
      { before: "Esos zapatos son bonitos. ¿", after: " vas a comprar?", options: ["Los", "Las"], answer: 0, why: "Los zapatos is masculine plural: los." },
      { before: "Mi madre ", after: " llama todos los domingos. (a mí)", options: ["me", "lo"], answer: 0, why: "The person is me: me llama." },
      { before: "La pizza está deliciosa. ¿Quieres ", after: "?", options: ["probarla", "probarlo"], answer: 0, why: "La pizza is feminine: attached la, probarla." },
      { before: "¿Las tareas? Estoy ", after: " ahora mismo.", options: ["haciéndolas", "haciéndolos"], answer: 0, why: "Las tareas: las, attached to the gerund. Note the written accent." },
      { before: "Este libro es tuyo: ¡", after: "!", options: ["llévatelo", "te lo lleva"], answer: 0, why: "Affirmative command: the pronouns are attached to the end." },
      { before: "Señora Pérez, ", after: " espero en la recepción.", options: ["la", "le"], answer: 0, why: "Usted, a woman, as direct object: la." },
    ],
    mistakes: [
      "Using lo for every noun: «¿La película? Lo vi» should be «la vi». The pronoun agrees with the noun.",
      "Putting the pronoun after a conjugated verb: «compro lo». It goes before: «lo compro».",
      "Forgetting the accent when two syllables are added: «haciendolas» should be «haciéndolas», «compralo» should be «cómpralo».",
    ],
    figure: "8 of the 15 suggestions Google gave for «spanish direct object pronouns» on 26 November 2026 asked for something to practise: practice, worksheets, exercises, a PDF, Quizlet sets or a game. The first one was «spanish direct object pronouns practice».",
    heritage: "If you grew up speaking Spanish at home, you probably place these pronouns correctly by ear. In writing, check the accents that appear when you attach them (cómpralo, diciéndolo) and, in formal texts, use lo and la for direct objects: «a Juan lo vi», even if some regions say «le vi».",
    teacherLinks: [
      { href: "/material-ele/pronombres-de-objeto", label: "Teaching object pronouns: activities and worksheets (in Spanish)" },
      { href: "/guides/spanish-direct-indirect-object-pronouns", label: "Direct and indirect object pronouns: a teacher's guide" },
    ],
    faq: [
      { question: "What is the difference between lo and le?", answer: "Lo (and la, los, las) is for the direct object: «lo veo» (I see him). Le is for the indirect object, the person who receives something: «le doy el libro» (I give him the book)." },
      { question: "Where do the pronouns go with two verbs?", answer: "Before the first verb or attached to the infinitive or gerund: «lo voy a comprar» or «voy a comprarlo». Both are correct." },
    ],
  },
];

export const practiceBySlug = new Map(practiceTopics.map((topic) => [topic.slug, topic]));
