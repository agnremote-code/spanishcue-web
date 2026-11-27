import type { QuizItem } from "../mini-apps/ChoiceQuiz";

/**
 * Mission phase 2, cluster «spanish reading comprehension» (Google Trends CRECE ×2.00, 2026-11-26).
 * One original graded text per level, answered on the page with instant feedback. A level is only
 * published with one real figure from SpanishCue data and a block for heritage speakers; B2 waits
 * until it has a real figure. Texts are Spanish; the interface around them is English.
 */
export const READING_PATH = "/spanish-reading-comprehension";

export type ReadingFigure = { text: string; source: string; href?: string };

export type ReadingText = {
  level: "A1" | "A2" | "B1";
  slug: string;
  path: string;
  /** Spanish title of the text. */
  titleEs: string;
  /** What the text practises, in English. */
  focus: string;
  title: string;
  description: string;
  paragraphs: string[];
  glossary: [string, string][];
  comprehension: QuizItem[];
  grammar: { title: string; intro: string; items: QuizItem[] };
  heritage: string;
  figure: ReadingFigure;
  freeLessonHref: string;
  freeLessonLabel: string;
};

const path = (slug: string) => `${READING_PATH}/${slug}`;

export const readingTexts: ReadingText[] = [
  {
    level: "A1",
    slug: "a1",
    path: path("a1"),
    titleEs: "Los sábados de Lucía",
    focus: "present tense, ser and estar, daily routine",
    title: "Spanish Reading Comprehension A1: Short Text with Questions",
    description: "A short A1 Spanish text about a nurse in Valparaíso, with comprehension questions that correct instantly, a glossary and ser/estar practice. No login.",
    paragraphs: [
      "Me llamo Lucía y soy de Valparaíso, en Chile. Tengo veintiocho años y soy enfermera. Trabajo en un hospital cerca del puerto. Mi casa está en una calle con muchas escaleras y casas de colores.",
      "Por la mañana me levanto a las seis. Desayuno café con leche y pan con palta. Después camino al trabajo: son quince minutos. Mis compañeros son simpáticos y el trabajo es interesante, pero a veces estoy muy cansada.",
      "Los sábados no trabajo. Voy al mercado con mi hermano Pablo, que es profesor de música. Él está contento porque su escuela está muy cerca de su casa. Por la tarde estamos en la playa o en un café del cerro. Y tú, ¿dónde estás los sábados?",
    ],
    glossary: [
      ["enfermera", "nurse"],
      ["el puerto", "the port"],
      ["escaleras", "stairs"],
      ["la palta", "avocado (in Chile; «aguacate» in many countries)"],
      ["cansada", "tired"],
      ["el mercado", "the market"],
      ["contento", "happy, pleased"],
      ["el cerro", "the hill"],
    ],
    comprehension: [
      { before: "Lucía trabaja como ", after: ".", options: ["enfermera", "profesora", "médica"], answer: 0, why: "«Soy enfermera»: she says it in the first paragraph." },
      { before: "La casa de Lucía está en una calle con ", after: ".", options: ["muchas tiendas", "muchas escaleras", "mucho tráfico"], answer: 1, why: "«Mi casa está en una calle con muchas escaleras y casas de colores»." },
      { before: "Lucía camina al trabajo y tarda ", after: ".", options: ["cinco minutos", "quince minutos", "una hora"], answer: 1, why: "«Después camino al trabajo: son quince minutos»." },
      { before: "Pablo está contento porque ", after: ".", options: ["no trabaja los sábados", "su escuela está cerca de su casa", "va a la playa"], answer: 1, why: "«Él está contento porque su escuela está muy cerca de su casa»." },
    ],
    grammar: {
      title: "Ser or estar? Three sentences from the text",
      intro: "Ser for who someone is and what something is like; estar for where something is and how someone feels right now.",
      items: [
        { before: "Mi casa ", after: " en una calle con muchas escaleras.", options: ["es", "está"], answer: 1, why: "Location of a house or a person: estar." },
        { before: "Mis compañeros ", after: " simpáticos.", options: ["son", "están"], answer: 0, why: "What people are like (personality): ser." },
        { before: "A veces ", after: " muy cansada.", options: ["soy", "estoy"], answer: 1, why: "How she feels at a given moment: estar." },
      ],
    },
    heritage: "If you grew up speaking Spanish at home, you will understand this text by ear. The skill to check is writing: está (it is, with an accent) is not esta (this), and tú (you) is not tu (your). Read the text again and find one example of each.",
    figure: {
      text: "In the ser/estar homework of Ale's A1 students in November 2026, 12 of 19 mistakes were not about choosing ser or estar but about the form of the verb: «es» for «son», «estás» for «está» with usted, «somos» for «sois». The sample is small (4 learners), so read it as a pattern to watch, not a percentage.",
      source: "SpanishCue homework errors, A1 week 1, 11–25 November 2026",
    },
    freeLessonHref: "/autoestudio/a1/semana-1",
    freeLessonLabel: "Autoestudio A1, week 1 (free)",
  },
  {
    level: "A2",
    slug: "a2",
    path: path("a2"),
    titleEs: "Un día raro",
    focus: "pretérito perfecto (he hecho, ha vuelto) and irregular participles",
    title: "Spanish Reading Comprehension A2: Text in the Present Perfect",
    description: "An A2 Spanish text about a strange day, told in the pretérito perfecto, with comprehension questions that correct instantly, a glossary and participle practice. No login.",
    paragraphs: [
      "Hoy ha sido un día raro para Andrés. Esta mañana se ha despertado tarde porque no ha sonado la alarma del teléfono. Se ha duchado en cinco minutos y ha salido de casa sin desayunar.",
      "En la parada ha esperado veinte minutos, pero el autobús no ha llegado. Al final ha tomado un taxi. En la oficina, su jefa le ha dicho que la reunión es mañana, no hoy. Andrés se ha reído: ¡ha corrido para nada!",
      "Después ha escrito varios correos, ha hecho dos llamadas y ha comido un sándwich en su escritorio. Por la tarde ha vuelto a casa caminando porque hacía buen tiempo. Ha puesto música, ha abierto una ventana y ha descansado un rato. Esta noche va a cenar con su hermana. Todavía no le ha contado lo del taxi.",
    ],
    glossary: [
      ["raro", "strange"],
      ["despertarse", "to wake up"],
      ["sonar", "to ring, to go off"],
      ["la parada", "the (bus) stop"],
      ["la jefa", "the boss (woman)"],
      ["para nada", "for nothing"],
      ["el escritorio", "the desk"],
      ["un rato", "a while"],
    ],
    comprehension: [
      { before: "Andrés se ha despertado tarde porque ", after: ".", options: ["se ha acostado tarde", "no ha sonado la alarma", "estaba enfermo"], answer: 1, why: "«Se ha despertado tarde porque no ha sonado la alarma del teléfono»." },
      { before: "Para llegar a la oficina, Andrés ha tomado ", after: ".", options: ["el autobús", "un taxi", "la bicicleta"], answer: 1, why: "The bus did not come: «Al final ha tomado un taxi»." },
      { before: "Su jefa le ha dicho que la reunión ", after: ".", options: ["es mañana", "ha empezado", "es por la tarde"], answer: 0, why: "«La reunión es mañana, no hoy»: he rushed for nothing." },
      { before: "Todavía no le ha contado a su hermana ", after: ".", options: ["lo de la reunión", "lo del taxi", "lo de la alarma"], answer: 1, why: "Last sentence: «Todavía no le ha contado lo del taxi»." },
    ],
    grammar: {
      title: "Irregular participles from the text",
      intro: "The pretérito perfecto is haber + participle. These verbs have irregular participles, and learners often regularize them.",
      items: [
        { before: "Ha ", after: " varios correos.", options: ["escribido", "escrito", "escribiendo"], answer: 1, why: "Escribir → escrito (irregular). «Escribido» is one of the forms learners write." },
        { before: "Ha ", after: " dos llamadas.", options: ["hacido", "hecho", "hizo"], answer: 1, why: "Hacer → hecho. «Hizo» is the pretérito indefinido, not a participle." },
        { before: "Por la tarde ha ", after: " a casa caminando.", options: ["volvido", "vuelto", "volvió"], answer: 1, why: "Volver → vuelto (and devolver → devuelto)." },
      ],
    },
    heritage: "Heritage speakers usually say these forms correctly and write them without the h: «a» for ha, «e» for he, «echo» for hecho. The h of haber is silent but always written: he, has, ha, hemos, han. Hecho (done) also keeps its h; echo (I throw) has none.",
    figure: {
      text: "In the pretérito perfecto homework of 6 A2 learners (43 errors, 12–25 November 2026), the most frequent mistake was a badly formed participle: 16 of 43, with forms like «escribido», «rompido» and «ponido».",
      source: "SpanishCue data report on the pretérito perfecto",
      href: "/datos/errores-preterito-perfecto-a2",
    },
    freeLessonHref: "/autoestudio/a2/semana-1",
    freeLessonLabel: "Autoestudio A2, week 1 (free)",
  },
  {
    level: "B1",
    slug: "b1",
    path: path("b1"),
    titleEs: "La guitarra de mi abuela",
    focus: "pretérito indefinido and imperfecto in a story",
    title: "Spanish Reading Comprehension B1: Story with Instant-Feedback Questions",
    description: "A B1 Spanish story about a summer at a grandmother's house, with comprehension questions that correct instantly, a glossary and indefinido/imperfecto practice. No login.",
    paragraphs: [
      "Cuando era niña, pasaba los veranos en el pueblo de mi abuela, en la sierra de Puebla. La casa era vieja y tenía un patio con limoneros. Todas las mañanas mi abuela preparaba tortillas a mano y yo la ayudaba, aunque casi siempre me salían rotas. Por las tardes, los niños del pueblo jugábamos en la plaza hasta que oscurecía.",
      "Un verano, cuando tenía diez años, pasó algo que nunca olvidé. Una noche hubo una tormenta enorme y se fue la luz en todo el pueblo. Mi abuela encendió unas velas, sacó una guitarra que yo nunca había visto y empezó a cantar. Yo no sabía que tocaba.",
      "Esa noche me contó que de joven cantaba en las fiestas del pueblo y que así conoció a mi abuelo: él la escuchó cantar una noche de feria y al día siguiente volvió con flores. Desde entonces, cada vez que hay tormenta, me acuerdo de su voz.",
    ],
    glossary: [
      ["el pueblo", "the village, small town"],
      ["la sierra", "the mountains, mountain range"],
      ["los limoneros", "lemon trees"],
      ["oscurecer", "to get dark"],
      ["se fue la luz", "the power went out"],
      ["encender", "to light, to switch on"],
      ["la feria", "the fair"],
      ["acordarse de", "to remember"],
    ],
    comprehension: [
      { before: "La narradora pasaba los veranos ", after: ".", options: ["en la playa", "en el pueblo de su abuela", "en la ciudad de Puebla"], answer: 1, why: "«Pasaba los veranos en el pueblo de mi abuela, en la sierra de Puebla»." },
      { before: "La noche de la tormenta ", after: ".", options: ["se fue la luz", "llegó su abuelo", "hubo una fiesta"], answer: 0, why: "«Hubo una tormenta enorme y se fue la luz en todo el pueblo»." },
      { before: "Esa noche la narradora descubrió que su abuela ", after: ".", options: ["hacía tortillas", "tocaba la guitarra", "tenía miedo"], answer: 1, why: "«Sacó una guitarra que yo nunca había visto… Yo no sabía que tocaba»." },
      { before: "Su abuelo la conoció ", after: ".", options: ["en el mercado", "cuando ella cantaba en una feria", "en una tormenta"], answer: 1, why: "«Él la escuchó cantar una noche de feria y al día siguiente volvió con flores»." },
    ],
    grammar: {
      title: "Indefinido or imperfecto? Three sentences from the story",
      intro: "Imperfecto for habits and background (what used to happen, what things were like); indefinido for single events that move the story forward.",
      items: [
        { before: "Todas las mañanas mi abuela ", after: " tortillas a mano.", options: ["preparó", "preparaba"], answer: 1, why: "«Todas las mañanas» marks a habit: imperfecto." },
        { before: "Un verano, cuando ", after: " diez años, pasó algo.", options: ["tuve", "tenía"], answer: 1, why: "Age as background to the event: imperfecto." },
        { before: "Mi abuela ", after: " unas velas y empezó a cantar.", options: ["encendió", "encendía"], answer: 0, why: "One action in a sequence of events that night: indefinido." },
      ],
    },
    heritage: "If Spanish is your home language, the imperfecto probably sounds natural. In writing, check two things: the -ía endings carry an accent (tenía, sabía, oscurecía), and había and iba are spelled with h and with b (not «abía», «iva»).",
    figure: {
      text: "When we searched Google for «spanish reading comprehension b1 pdf» on 26 November 2026, 4 of the 9 results were documents to download (three on TES, one on Scribd). The texts on this page are answered on screen instead, with the answer and the reason shown at once.",
      source: "SpanishCue search review, 26 November 2026",
    },
    freeLessonHref: "/gramatica/indefinido-e-imperfecto",
    freeLessonLabel: "Free class: indefinido and imperfecto",
  },
];

export const readingBySlug = new Map(readingTexts.map((text) => [text.slug, text]));

export const wordCount = (text: ReadingText) => text.paragraphs.join(" ").split(/\s+/).filter(Boolean).length;
