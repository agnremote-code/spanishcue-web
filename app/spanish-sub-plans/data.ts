import type { QuizItem } from "../mini-apps/ChoiceQuiz";

/**
 * US cluster «Spanish sub plans». One complete 50-minute plan per US high-school course, built only
 * from SpanishCue pages that are open without login (reading texts and grammar practice), so a
 * substitute who does not speak Spanish can run it from a projector or the students' devices.
 * SERP figure from docs/seo-plan/fase0/serp-20261126-fase0.json («emergency spanish sub plans»,
 * Google en-US, 2026-11-26). Never link a step to a page that needs an account.
 */
export const SUB_PLANS_PATH = "/spanish-sub-plans";

export const subPlansSerp = { query: "emergency spanish sub plans", results: 9, easyPromise: 4, selfCorrecting: 0, date: "26 November 2026" };

export type SubStep = { minutes: number; title: string; sub: string; href?: string; linkLabel?: string };

export type SubPlan = {
  slug: string;
  path: string;
  course: string;
  levels: string;
  title: string;
  description: string;
  h1: string;
  answer: string;
  steps: SubStep[];
  writing: { intro: string; frames: string[] };
  exitTicket: QuizItem[];
  heritage: string;
  faq: { question: string; answer: string }[];
};

export const subPlans: SubPlan[] = [
  {
    slug: "spanish-1",
    path: `${SUB_PLANS_PATH}/spanish-1`,
    course: "Spanish 1",
    levels: "A1",
    title: "Emergency Spanish 1 Sub Plan: 50 Minutes, No Prep, Answers Checked on Screen",
    description: "A complete 50-minute emergency sub plan for Spanish 1: a short reading, ser vs estar practice that corrects itself, sentence frames for writing and an exit ticket. The sub does not need to speak Spanish. Free, no login.",
    h1: "Emergency Spanish 1 sub plan",
    answer: "Project this page or share its link. In 50 minutes, students read a short text about a weekend routine, practise ser and estar with sentences that correct themselves, write six sentences about their own weekend, and finish with an exit ticket. Every activity checks its own answers, so the substitute does not need to know Spanish.",
    steps: [
      { minutes: 10, title: "Warm-up: read and answer", sub: "Students open the text, read it and tap the answers. Each answer shows at once whether it is right.", href: "/spanish-reading-comprehension/a1", linkLabel: "Reading A1: «Los sábados de Lucía»" },
      { minutes: 15, title: "Practice: ser vs estar", sub: "Students read the rule table, then answer the 8 questions. Ask them to write down the two they found hardest.", href: "/spanish-grammar-practice/ser-vs-estar", linkLabel: "Ser vs estar practice" },
      { minutes: 15, title: "Writing: my weekend", sub: "Students copy and complete the six sentence frames below in their notebook or on paper." },
      { minutes: 10, title: "Exit ticket", sub: "Students answer the four questions at the bottom of this page and show their score to the substitute before leaving." },
    ],
    writing: {
      intro: "Complete the sentences about your weekend. Write in Spanish.",
      frames: ["Los sábados me levanto a las…", "Por la mañana, normalmente…", "Mi lugar favorito es… porque…", "Los domingos estoy… (cansado, contento, aburrido…)", "Mi mejor amigo es… y es muy…", "El fin de semana no me gusta…"],
    },
    exitTicket: [
      { before: "Yo ", after: " estudiante de español.", options: ["soy", "estoy"], answer: 0, why: "Identity: ser." },
      { before: "Mis libros ", after: " en la mochila.", options: ["son", "están"], answer: 1, why: "Location: estar." },
      { before: "Hoy mi profesora no ", after: " en clase.", options: ["es", "está"], answer: 1, why: "Where someone is today: estar." },
      { before: "La clase de español ", after: " a las diez.", options: ["es", "está"], answer: 0, why: "Time of an event: ser." },
    ],
    heritage: "Heritage speakers in Spanish 1 will finish the reading and the practice quickly. Give them the extension: write the six sentences as one paragraph with connectors (primero, después, luego, por la noche) and check the accents in está, están and también.",
    faq: [
      { question: "Does the substitute need to speak Spanish?", answer: "No. Every step has instructions in English, and the reading, the practice and the exit ticket correct themselves on screen." },
      { question: "Do students need an account?", answer: "No. All the pages in this plan are open, on a projector or on the students' own devices." },
    ],
  },
  {
    slug: "spanish-2",
    path: `${SUB_PLANS_PATH}/spanish-2`,
    course: "Spanish 2",
    levels: "A2",
    title: "Emergency Spanish 2 Sub Plan: Preterite vs Imperfect in 50 Minutes, No Prep",
    description: "A complete 50-minute emergency sub plan for Spanish 2: a short story in the past, preterite vs imperfect practice that corrects itself, sentence frames for a strange day and an exit ticket. The sub does not need to speak Spanish. Free, no login.",
    h1: "Emergency Spanish 2 sub plan",
    answer: "Project this page or share its link. In 50 minutes, students read a short story about a strange day, practise the preterite and the imperfect with sentences that correct themselves, write their own strange-day story with sentence frames, and finish with an exit ticket. Every activity checks its own answers.",
    steps: [
      { minutes: 10, title: "Warm-up: read and answer", sub: "Students read the story and tap the answers. Each answer shows at once whether it is right, with the line that proves it.", href: "/spanish-reading-comprehension/a2", linkLabel: "Reading A2: «Un día raro»" },
      { minutes: 15, title: "Practice: preterite vs imperfect", sub: "Students read the rule table, then answer the 8 questions. Ask them to copy one example of each tense from the story.", href: "/spanish-grammar-practice/preterite-vs-imperfect", linkLabel: "Preterite vs imperfect practice" },
      { minutes: 15, title: "Writing: a strange day", sub: "Students copy and complete the six sentence frames below. Background in the imperfect, events in the preterite." },
      { minutes: 10, title: "Exit ticket", sub: "Students answer the four questions at the bottom of this page and show their score to the substitute before leaving." },
    ],
    writing: {
      intro: "Write about a strange day. Use the imperfect for the background and the preterite for what happened.",
      frames: ["Era un día normal: hacía… y yo estaba…", "Eran las… cuando de repente…", "Yo no sabía qué hacer, así que…", "Mientras yo…, mi amigo…", "Al final, todo terminó cuando…", "Desde ese día, siempre…"],
    },
    exitTicket: [
      { before: "Ayer ", after: " al cine con mis amigos.", options: ["fui", "iba"], answer: 0, why: "A completed event with «ayer»: preterite." },
      { before: "De niño, siempre ", after: " videojuegos después de la escuela.", options: ["jugué", "jugaba"], answer: 1, why: "A repeated habit in the past: imperfect." },
      { before: "", after: " las ocho cuando sonó el teléfono.", options: ["Fueron", "Eran"], answer: 1, why: "Time in the past: imperfect." },
      { before: "Mientras mi madre cocinaba, yo ", after: " la mesa.", options: ["puse", "ponía"], answer: 1, why: "Two actions in progress at the same time: imperfect." },
    ],
    heritage: "Heritage speakers in Spanish 2 often choose the right tense by ear. Their extension: write the story in eight sentences and check the spelling points that cost marks, such as -aba with b (estaba), the accent on -ía (tenía) and the tú preterite without -s (fuiste, not «fuistes»).",
    faq: [
      { question: "What if students finish early?", answer: "Send them to the free interactive class on the preterite and the imperfect, which also runs on screen, or to the next reading level." },
      { question: "Can this plan be used as homework?", answer: "Yes. Share the link: the reading, the practice and the exit ticket all correct themselves, and the writing can be handed in the next day." },
    ],
  },
  {
    slug: "spanish-3",
    path: `${SUB_PLANS_PATH}/spanish-3`,
    course: "Spanish 3",
    levels: "B1",
    title: "Emergency Spanish 3 Sub Plan: Subjunctive and a Family Story in 50 Minutes",
    description: "A complete 50-minute emergency sub plan for Spanish 3: a short family story, present subjunctive practice that corrects itself, sentence frames for advice and wishes, and an exit ticket. The sub does not need to speak Spanish. Free, no login.",
    h1: "Emergency Spanish 3 sub plan",
    answer: "Project this page or share its link. In 50 minutes, students read a short family story, review how to form and use the present subjunctive with sentences that correct themselves, write advice and wishes with sentence frames, and finish with an exit ticket. Every activity checks its own answers.",
    steps: [
      { minutes: 10, title: "Warm-up: read and answer", sub: "Students read the story and tap the answers. Each answer shows at once whether it is right.", href: "/spanish-reading-comprehension/b1", linkLabel: "Reading B1: «La guitarra de mi abuela»" },
      { minutes: 15, title: "Practice: present subjunctive", sub: "Students read how to form the subjunctive and the table of triggers, then answer the 8 questions.", href: "/spanish-grammar-practice/subjunctive", linkLabel: "Present subjunctive practice" },
      { minutes: 15, title: "Writing: advice and wishes", sub: "Students copy and complete the six sentence frames below. Every frame needs a verb in the subjunctive." },
      { minutes: 10, title: "Exit ticket", sub: "Students answer the four questions at the bottom of this page and show their score to the substitute before leaving." },
    ],
    writing: {
      intro: "Give advice and express wishes. Every sentence needs a verb in the subjunctive.",
      frames: ["Ojalá que este año…", "Quiero que mi familia…", "Le recomiendo a un estudiante nuevo que…", "Es importante que los profesores…", "No creo que la tecnología…", "Cuando termine la escuela, …"],
    },
    exitTicket: [
      { before: "Quiero que tú ", after: " conmigo al concierto.", options: ["vienes", "vengas"], answer: 1, why: "A wish about another person: subjunctive." },
      { before: "Creo que el examen ", after: " fácil.", options: ["es", "sea"], answer: 0, why: "An affirmative belief: indicative." },
      { before: "Ojalá ", after: " sol el sábado.", options: ["hace", "haga"], answer: 1, why: "Ojalá takes the subjunctive." },
      { before: "Te llamo cuando ", after: " a casa.", options: ["llego", "llegue"], answer: 1, why: "Cuando + a future action: subjunctive." },
    ],
    heritage: "Heritage speakers in Spanish 3 often use the subjunctive naturally after ojalá or cuando. Their extension: turn the six sentences into a short letter of advice to a younger student, and check the written forms that cost marks: haya (not «haiga»), vaya, esté and llegue.",
    faq: [
      { question: "Is this plan too hard for a substitute?", answer: "No. The substitute only manages time: each step says how many minutes it takes and what students do, and the answers are checked on screen." },
      { question: "What if the class has no devices?", answer: "Project the page. Read each practice question aloud, let the class vote, then tap the answer on the projector so everyone sees the reason." },
    ],
  },
];

export const subPlanBySlug = new Map(subPlans.map((plan) => [plan.slug, plan]));
