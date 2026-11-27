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
];

export const practiceBySlug = new Map(practiceTopics.map((topic) => [topic.slug, topic]));
