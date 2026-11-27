import type { QuizItem } from "../mini-apps/ChoiceQuiz";

/**
 * US cluster «AP Spanish Language and Culture». Exam facts come only from College Board's own pages,
 * read on 2026-11-27: apstudents.collegeboard.org/courses/ap-spanish-language-and-culture/assessment
 * and apcentral.collegeboard.org/courses/ap-spanish-language-and-culture/exam. The SERP figure comes
 * from docs/seo-plan/fase0/serp-20261126-fase0.json (Google, en-US, 2026-11-26). Never add a fact
 * the official pages do not state; the previous format (email reply, argumentative essay, conversation,
 * cultural comparison) is the one in the released free-response questions up to 2026. SpanishCue is not
 * affiliated with College Board.
 */
export const AP_PATH = "/ap-spanish-language";
export const AP_SOURCES = [
  { href: "https://apstudents.collegeboard.org/courses/ap-spanish-language-and-culture/assessment", label: "AP Students: exam overview" },
  { href: "https://apcentral.collegeboard.org/courses/ap-spanish-language-and-culture/exam", label: "AP Central: exam information" },
];

/** The 2027 exam as College Board describes it. */
export const examFormat = [
  { section: "Section I: Free response", task: "Question 1: Project presentation", time: "3 minutes to prepare, 3 to present", weight: "20%" },
  { section: "Section I: Free response", task: "Question 2: Project Q&A", time: "4 recorded questions, 40 seconds per answer", weight: "15%" },
  { section: "Section I: Free response", task: "Question 3: Argumentative essay", time: "55 minutes, audio played twice", weight: "15%" },
  { section: "Section II: Multiple choice", task: "Part A: Listening (25 questions)", time: "40 minutes", weight: "25%" },
  { section: "Section II: Multiple choice", task: "Part B: Reading (30 questions)", time: "40 minutes", weight: "25%" },
];

/** Google, en-US, «AP spanish practice», 2026-11-26: organic results and how many titles mention 2027. */
export const serpFigure = { query: "AP spanish practice", results: 9, mention2027: 1, date: "26 November 2026" };

export type ApPart = {
  slug: string;
  path: string;
  name: string;
  title: string;
  description: string;
  h1: string;
  answer: string;
  facts: { label: string; value: string }[];
  steps: string[];
  quizTitle: string;
  quizIntro: string;
  quiz: QuizItem[];
  /** Optional original text the questions are about. */
  text?: { title: string; paragraphs: string[] };
  mistakes: string[];
  figure: string;
  heritage: string;
  faq: { question: string; answer: string }[];
  links: { href: string; label: string }[];
};

export const apParts: ApPart[] = [
  {
    slug: "argumentative-essay",
    path: `${AP_PATH}/argumentative-essay`,
    name: "Argumentative essay",
    title: "AP Spanish Argumentative Essay Practice (2027 Exam): Structure and Connectors",
    description: "How the AP Spanish argumentative essay works on the 2027 exam, a four-paragraph plan, and 8 questions on the connectors that hold an argument together, checked as you answer. Free, no login.",
    h1: "AP Spanish argumentative essay practice",
    answer: "On the 2027 exam, the argumentative essay is Question 3: you read and listen to sources that present different points of view and write an essay that takes a position. You have 55 minutes, the audio plays twice, and the essay is worth 15% of the score. What raises the score is a clear position, evidence from every source and connectors that show how the ideas relate.",
    facts: [
      { label: "Where it is", value: "Section I, Question 3" },
      { label: "Time", value: "55 minutes, including 2 opportunities to listen to the audio" },
      { label: "Sources", value: "Print and audio, with different viewpoints" },
      { label: "Weight", value: "15% of the score" },
    ],
    steps: [
      "Read the question first, then the sources. Note which source supports which side.",
      "Use the two listenings: on the first, get the main idea; on the second, write down one figure or one quote.",
      "Plan four paragraphs: your position, two arguments with evidence from the sources, and a conclusion that answers the question again.",
      "Name the source every time you use it: «Según la fuente 1…», «Como indica el audio…».",
      "Keep five minutes at the end to check verb agreement and accents.",
    ],
    quizTitle: "Practice: connectors for an argument",
    quizIntro: "Choose the connector that fits the logic of each sentence. Each answer is checked at once, with the reason.",
    quiz: [
      { before: "", after: ", las redes sociales ayudan a los jóvenes a informarse; por otro lado, pueden difundir noticias falsas.", options: ["Por un lado", "Por lo tanto"], answer: 0, why: "«Por un lado» opens the first of two sides; «por otro lado» introduces the second." },
      { before: "La tecnología facilita el aprendizaje. ", after: ", muchos estudiantes no tienen acceso a internet en casa.", options: ["Sin embargo", "Además"], answer: 0, why: "The second sentence contrasts with the first: sin embargo." },
      { before: "", after: " la fuente 2, el 40 % de los jóvenes lee las noticias en el teléfono.", options: ["Según", "Aunque"], answer: 0, why: "«Según» introduces what a source says. Cite a source every time you use it." },
      { before: "El transporte público reduce la contaminación; ", after: ", las ciudades deberían invertir más en él.", options: ["por lo tanto", "en cambio"], answer: 0, why: "The second clause is a consequence of the first: por lo tanto." },
      { before: "", after: " algunos piensen que el uniforme limita la libertad, también reduce la presión social.", options: ["Aunque", "Porque"], answer: 0, why: "«Aunque» concedes an opposing idea. With an opinion you do not share, it takes the subjunctive: piensen." },
      { before: "El audio presenta datos sobre el reciclaje. ", after: ", muestra que la mitad de los residuos se puede reutilizar.", options: ["Por ejemplo", "En conclusión"], answer: 0, why: "The second sentence gives an example of the first: por ejemplo." },
      { before: "", after: ", creo que los beneficios del teletrabajo son mayores que sus desventajas.", options: ["En conclusión", "Por ejemplo"], answer: 0, why: "The last paragraph restates your position: en conclusión." },
      { before: "Es importante que el gobierno ", after: " más espacios verdes.", options: ["cree", "crea"], answer: 0, why: "«Es importante que» takes the subjunctive: cree (from crear). «Crea» would be the indicative." },
    ],
    mistakes: [
      "Summarising the sources without taking a position. The task asks for an argument, not a summary.",
      "Using only one or two sources. Name every source at least once.",
      "Linking every idea with «y» or «también». Contrast and consequence connectors (sin embargo, por lo tanto) show the reasoning.",
    ],
    figure: "«Ap spanish essay prompts» is one of the 8 related searches Google showed for «AP spanish practice» in the United States on 26 November 2026. Of the 9 organic results on that page, only 1 had the new 2027 exam in its title.",
    heritage: "If you grew up speaking Spanish at home, your essay will flow, and that is a real advantage. The points that cost heritage speakers marks are written accents (más, también, opinión), formal register instead of spoken forms («pues» or «o sea» at the start of a sentence) and English calques such as «aplicar para un trabajo» for «solicitar un trabajo» or «hacer sentido» for «tener sentido».",
    faq: [
      { question: "How long should the AP Spanish argumentative essay be?", answer: "College Board does not set a word count. With 55 minutes, a clear essay usually has four or five paragraphs: introduction with your position, two or three arguments with evidence from the sources, and a conclusion." },
      { question: "Do I have to use all the sources?", answer: "The task gives you print and audio sources with different viewpoints and asks you to use them as evidence. Citing each one, with a phrase such as «según la fuente 1», shows that you understood all of them." },
    ],
    links: [
      { href: "/spanish-grammar-practice/subjunctive", label: "Present subjunctive practice (for «es importante que», «aunque»)" },
    ],
  },
  {
    slug: "project-presentation",
    path: `${AP_PATH}/project-presentation`,
    name: "Project presentation and Q&A",
    title: "AP Spanish Project Presentation and Q&A Practice (2027 Exam)",
    description: "How the new AP Spanish project presentation and Q&A work on the 2027 exam, a three-minute plan, and 8 questions on answering follow-up questions in Spanish, checked as you answer. Free, no login.",
    h1: "AP Spanish project presentation and Q&A practice",
    answer: "On the 2027 exam, Questions 1 and 2 are about a research project on a topic College Board releases in January of the exam year. In Question 1 you prepare for 3 minutes and present for 3 minutes on what you learned (20% of the score). In Question 2 you answer 4 recorded questions you have not seen before, with 40 seconds for each answer (15%).",
    facts: [
      { label: "Project topic", value: "Released by College Board in January of the exam year" },
      { label: "Question 1: Presentation", value: "3 minutes to prepare, 3 minutes to present, 20% of the score" },
      { label: "Question 2: Q&A", value: "4 pre-recorded questions not known in advance, 40 seconds each, 15% of the score" },
      { label: "Format", value: "Spoken, recorded in the Bluebook app" },
    ],
    steps: [
      "Organise the presentation in three parts: what you researched, what you found (two or three findings), and what it means.",
      "In the 3 minutes of preparation, write keywords, not sentences: you will speak more naturally.",
      "Use the past to tell what you did (investigué, encontré, leí) and the present to say what it shows (los datos muestran que…).",
      "In the Q&A, answer the question in your first sentence, then add one reason or example.",
      "If you need a second to think, use a filler phrase in Spanish: «Es una buena pregunta», «A ver…».",
    ],
    quizTitle: "Practice: answering follow-up questions",
    quizIntro: "Each question is the kind of follow-up you may hear in the Q&A. Choose the best start for your answer.",
    quiz: [
      { before: "¿Por qué escogiste este tema? → «", after: " me interesa cómo cambia la música entre generaciones».", options: ["Lo escogí porque", "Lo escogí para"], answer: 0, why: "A «¿por qué?» question asks for a reason: porque + a full clause." },
      { before: "¿Qué fuentes consultaste? → «", after: " dos artículos y una entrevista».", options: ["Consulté", "Consulto"], answer: 0, why: "The question is in the past (consultaste), so the answer is too: consulté." },
      { before: "¿Qué fue lo más sorprendente? → «Lo más sorprendente ", after: " que muchos jóvenes prefieren la radio».", options: ["fue", "era"], answer: 0, why: "Match the tense of the question and sum up a finding: fue." },
      { before: "¿Cómo cambiarías tu proyecto? → «", after: " más entrevistas con personas mayores».", options: ["Haría", "Hice"], answer: 0, why: "A hypothetical question in the conditional (cambiarías) gets a conditional answer: haría." },
      { before: "¿Estás de acuerdo con la fuente principal? → «", after: ", aunque no en todo».", options: ["Sí, en parte", "Sí, por parte"], answer: 0, why: "«En parte» means partly. It lets you give a nuanced answer." },
      { before: "¿Qué recomendarías a otros estudiantes? → «Les recomendaría que ", after: " con fuentes de varios países».", options: ["trabajen", "trabajan"], answer: 0, why: "«Recomendar que» takes the subjunctive: trabajen." },
      { before: "Necesitas un segundo para pensar: «", after: "… creo que la causa principal es económica».", options: ["Es una buena pregunta", "Repite, por favor"], answer: 0, why: "The questions are recorded, so asking for a repetition does not help. A filler phrase gives you time." },
      { before: "¿Qué notaste sobre tu comunidad? → «", after: " que muchas familias mantienen sus tradiciones».", options: ["Noté", "Noto"], answer: 0, why: "The question is in the past (notaste): answer in the past, noté." },
    ],
    mistakes: [
      "Reading a script word for word. With 3 minutes to prepare, keywords work better than full sentences.",
      "Answering a Q&A question in a different tense from the question. Listen for the verb and reuse it.",
      "Stopping after one sentence. Forty seconds is enough for an answer, a reason and an example.",
    ],
    figure: "When we searched «AP spanish practice» in the United States on 26 November 2026, Google's «People also ask» box included «Can I self study AP Spanish?». Of the 9 organic results, only 1 had the new 2027 exam in its title, so most of what students find still describes the old tasks.",
    heritage: "If you grew up speaking Spanish at home, speaking for three minutes may feel easy. What raises the score is structure and register: start with what you researched, give two findings with a source, and close with a conclusion. Avoid spoken fillers such as «este…» or «o sea» and English words in the middle of a sentence; «la información», not «la info», and «el proyecto», not «el project».",
    faq: [
      { question: "When is the AP Spanish project topic released?", answer: "College Board says the project topic is released in January of the exam year. Questions 1 and 2 are based on the research you do on that topic." },
      { question: "Can I prepare the Q&A answers in advance?", answer: "Not word for word: the 4 questions are pre-recorded and not known to students ahead of the exam. You can prepare by practising short answers about your research: what you looked at, what you found and what you would change." },
    ],
    links: [
      { href: "/spanish-grammar-practice/preterite", label: "Preterite practice (to say what you researched)" },
      { href: "/spanish-conversation-questions", label: "Spanish conversation questions by level" },
    ],
  },
  {
    slug: "listening-and-reading",
    path: `${AP_PATH}/listening-and-reading`,
    name: "Listening and reading",
    title: "AP Spanish Listening and Reading Practice (2027 Exam Multiple Choice)",
    description: "How the AP Spanish multiple-choice section works on the 2027 exam, strategies for its listening and reading parts, and an original text with 8 questions checked as you answer. Free, no login.",
    h1: "AP Spanish listening and reading practice",
    answer: "On the 2027 exam, multiple choice is Section II: 55 questions in 80 minutes, worth 50% of the score. Part A is listening (25 questions, 40 minutes) and Part B is reading (30 questions, 40 minutes). Read the questions before each text or audio, and answer from what the source says, not from what you already think.",
    facts: [
      { label: "Section II", value: "55 questions, 80 minutes, 50% of the score" },
      { label: "Part A: Listening", value: "25 questions, 40 minutes, 25% of the score" },
      { label: "Part B: Reading", value: "30 questions, 40 minutes, 25% of the score" },
      { label: "Format", value: "Digital, in the Bluebook app" },
    ],
    steps: [
      "Read the questions before the text or the audio: you will know what to look for.",
      "Find the purpose first: is the source informing, persuading or announcing something?",
      "When two options look right, go back to the text and find the exact line that proves one of them.",
      "With about 80 seconds per reading question, do not stay stuck: answer, flag it and come back.",
    ],
    quizTitle: "Practice: read and answer",
    quizIntro: "Read the announcement, then choose the option that matches what the text says.",
    text: {
      title: "Biblioteca Municipal: nuevo club de lectura juvenil",
      paragraphs: [
        "A partir del 15 de febrero, la Biblioteca Municipal abre un club de lectura para jóvenes de 14 a 18 años. El club se reunirá los jueves de 17:00 a 18:30 en la sala del segundo piso. La inscripción es gratuita, pero las plazas son limitadas a veinte participantes.",
        "Cada mes, los participantes leerán una novela de un autor latinoamericano y, en la última reunión, conversarán por videollamada con un estudiante de otro país que haya leído el mismo libro. La bibliotecaria Marta Ruiz explica: «Queremos que los jóvenes descubran que leer también es una forma de conocer a otras personas».",
        "Para inscribirse, hay que completar un formulario en la recepción o en la página web de la biblioteca antes del 10 de febrero. Los participantes no necesitan comprar los libros: la biblioteca prestará un ejemplar a cada uno.",
      ],
    },
    quiz: [
      { before: "El propósito principal del texto es ", after: ".", options: ["anunciar una actividad nueva", "criticar los hábitos de lectura"], answer: 0, why: "The text announces a new reading club: dates, place and how to sign up." },
      { before: "El club es para ", after: ".", options: ["jóvenes de 14 a 18 años", "estudiantes universitarios"], answer: 0, why: "First paragraph: «para jóvenes de 14 a 18 años»." },
      { before: "Las reuniones son ", after: ".", options: ["los jueves por la tarde", "los sábados por la mañana"], answer: 0, why: "First paragraph: «los jueves de 17:00 a 18:30»." },
      { before: "La inscripción ", after: ".", options: ["no cuesta nada, pero hay pocas plazas", "cuesta veinte dólares"], answer: 0, why: "«La inscripción es gratuita, pero las plazas son limitadas a veinte participantes». Twenty is the number of places, not a price." },
      { before: "En la última reunión de cada mes, los participantes ", after: ".", options: ["hablan con un estudiante de otro país", "escriben una reseña del libro"], answer: 0, why: "Second paragraph: they talk by video call with a student from another country who read the same book." },
      { before: "Según Marta Ruiz, leer también sirve para ", after: ".", options: ["conocer a otras personas", "aprobar los exámenes"], answer: 0, why: "Her quote: «leer también es una forma de conocer a otras personas»." },
      { before: "La fecha límite para inscribirse es ", after: ".", options: ["el 10 de febrero", "el 15 de febrero"], answer: 0, why: "Third paragraph: before 10 February. The 15th is when the club starts." },
      { before: "En el texto, «prestará un ejemplar» significa que la biblioteca ", after: ".", options: ["dejará un libro a cada participante", "venderá los libros más baratos"], answer: 0, why: "Prestar means to lend; un ejemplar is a copy of a book." },
    ],
    mistakes: [
      "Choosing the option that sounds true in general instead of the one the text supports.",
      "Mixing up two numbers in the text: here, twenty is the number of places, not a price, and the 10th and the 15th are different dates.",
      "Spending too long on one hard question. Flag it and come back.",
    ],
    figure: "«AP Spanish audio practice» and «AP Spanish practice MCQ» were two of the 8 related searches Google showed for «AP spanish practice» in the United States on 26 November 2026, next to two searches for practice tests in PDF.",
    heritage: "If you grew up speaking Spanish at home, the listening part is often your strongest. In reading, watch for words that look like English but mean something else (actual means current, éxito means success, librería is a bookshop) and for formal vocabulary that is rare in conversation, such as ejemplar, plazo or inscripción.",
    faq: [
      { question: "How many multiple-choice questions are on the AP Spanish exam?", answer: "On the 2027 exam, 55: 25 listening questions in 40 minutes (Part A) and 30 reading questions in 40 minutes (Part B). Together they are 50% of the score." },
      { question: "Is the AP Spanish exam on paper?", answer: "College Board describes the 2027 exam as digital, taken in the Bluebook app, including the spoken questions, which are recorded in the app." },
    ],
    links: [
      { href: "/spanish-reading-comprehension", label: "Spanish reading comprehension by level" },
    ],
  },
];

export const apPartBySlug = new Map(apParts.map((part) => [part.slug, part]));
