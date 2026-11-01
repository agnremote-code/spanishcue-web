/**
 * Activity bank of the ELE cluster: every classroom activity, exercise and conversation-question set
 * of the hand-written guides (data.ts) also gets its own indexable, printable URL:
 *   /material-ele/actividad/<slug>   one activity (steps, prompts, model answer, correction, online variant)
 *   /material-ele/ejercicio/<slug>   one exercise with its answer key
 *   /material-ele/preguntas/<nivel>  the conversation questions of one level
 * Teachers search for and link single activities («actividad ser y estar A1») far more than hubs, so each
 * one is a page of its own, with the guide it comes from and the classes that teach the same point.
 */
import { MATERIAL_ELE_PATH, elePages, type EleActivity, type EleExercise, type ElePage, type EleQuestionSet } from "./data";
export { MATERIAL_ELE_PATH };

export const ACTIVIDADES_PATH = `${MATERIAL_ELE_PATH}/actividades`;

export const slugify = (text: string) =>
  text.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

/** The level a guide page speaks to: its own code for level pages, the CEFR range named in its copy otherwise. */
export function pageLevel(page: ElePage): string {
  if (page.code) return page.code;
  const found = `${page.kicker} ${page.h1} ${page.intro}`.match(/\b([ABC][12])(?:\s?[–-]\s?([ABC][12]))?\b/);
  return found ? (found[2] ? `${found[1]}–${found[2]}` : found[1]) : "A1–C2";
}

export type ActividadPage = {
  kind: "actividad"; slug: string; path: string; title: string; description: string; h1: string; level: string;
  activity: EleActivity; parent: ElePage; siblings: { name: string; path: string; minutes: number }[]; faq: { question: string; answer: string }[];
};
export type EjercicioPage = {
  kind: "ejercicio"; slug: string; path: string; title: string; description: string; h1: string; level: string;
  exercise: EleExercise; parent: ElePage; faq: { question: string; answer: string }[];
};
export type PreguntasPage = {
  kind: "preguntas"; slug: string; path: string; title: string; description: string; h1: string; level: string;
  set: EleQuestionSet; parent: ElePage; faq: { question: string; answer: string }[];
};

const fit = (...candidates: string[]) => candidates.find((candidate) => candidate.length <= 78) ?? candidates[candidates.length - 1];
const describe = (base: string, extra: string) => {
  let text = `${base} ${extra}`.trim();
  if (text.length > 165) text = base.length <= 165 ? base : `${base.slice(0, 162).replace(/\s+\S*$/, "")}…`;
  if (text.length < 110) text = `${text} Material ELE gratuito de SpanishCue para profesores de español.`;
  if (text.length > 165) text = `${base} Ficha ELE gratis de SpanishCue.`;
  return text;
};

function activityPage(page: ElePage, activity: EleActivity): ActividadPage {
  const slug = slugify(activity.name);
  const level = pageLevel(page);
  const topic = page.label.replace(/^Material ELE /, "");
  const title = fit(`${activity.name}: actividad ELE ${level} de ${topic.toLowerCase()} | SpanishCue`, `${activity.name}: actividad ELE ${level} | SpanishCue`);
  const description = describe(`Actividad de ${activity.minutes} minutos para ${activity.goal.charAt(0).toLowerCase()}${activity.goal.slice(1).replace(/\.$/, "")}.`, `Con pasos, frases modelo, corrección y versión online. Nivel ${level}, ficha en PDF.`);
  const siblings = page.activities.filter((other) => other.name !== activity.name).map((other) => ({ name: other.name, path: `${MATERIAL_ELE_PATH}/actividad/${slugify(other.name)}`, minutes: other.minutes }));
  return {
    kind: "actividad", slug, path: `${MATERIAL_ELE_PATH}/actividad/${slug}`, title, description, level, activity, parent: page, siblings,
    h1: `${activity.name}: actividad de ${topic.toLowerCase()} para la clase de ELE`,
    faq: [
      { question: `¿Para qué nivel es «${activity.name}»?`, answer: `Para alumnos de nivel ${level}. Está pensada para una clase particular online o un grupo pequeño de adultos, y dura unos ${activity.minutes} minutos.` },
      { question: "¿Qué necesito para hacerla?", answer: `Solo la ficha: ${activity.steps.length} pasos, ${activity.prompts.length === 1 ? "una frase modelo" : `${activity.prompts.length} frases modelo`} y la corrección más frecuente. ${activity.online}` },
      { question: "¿Dónde está el resto del material?", answer: `En la guía «${page.h1}», con ${page.activities.length} actividades${page.exercise ? ", un ejercicio con soluciones" : ""} y las clases interactivas que enseñan el mismo punto.` },
    ],
  };
}

function exercisePage(page: ElePage, exercise: EleExercise): EjercicioPage {
  const slug = page.slug;
  const level = pageLevel(page);
  const title = fit(`${exercise.title} con soluciones, nivel ${level} | SpanishCue`, `${exercise.title} con soluciones | SpanishCue`, `${exercise.title} | SpanishCue`);
  const description = describe(`${exercise.title}: ${exercise.items.length} frases para completar con sus soluciones explicadas, nivel ${level}.`, `Para hacer en clase o de tarea, con ficha en PDF y las clases interactivas del mismo tema.`);
  return {
    kind: "ejercicio", slug, path: `${MATERIAL_ELE_PATH}/ejercicio/${slug}`, title, description, level, exercise, parent: page,
    h1: `${exercise.title} (${exercise.items.length} frases con soluciones)`,
    faq: [
      { question: "¿Cómo se usa este ejercicio en clase?", answer: `${exercise.instructions} Las soluciones están ocultas: el alumno responde primero y después abre cada una para comparar. En pantalla compartida, lo resuelven juntos; de tarea, descarga la ficha en PDF.` },
      { question: `¿Para qué nivel es?`, answer: `Para nivel ${level}. Si el alumno falla más de la mitad, vuelve a la guía «${page.h1}» y a su clase interactiva antes de repetirlo.` },
    ],
  };
}

function questionsPage(page: ElePage, set: EleQuestionSet): PreguntasPage {
  const slug = set.level.toLowerCase();
  const title = `${set.items.length} preguntas de conversación en español ${set.level} para clase | SpanishCue`;
  const description = describe(`${set.items.length} preguntas de conversación de nivel ${set.level} para la clase de ELE, ordenadas de más fácil a más difícil.`, `Para romper el hielo, practicar un tema o cerrar la clase hablando. Ficha en PDF.`);
  return {
    kind: "preguntas", slug, path: `${MATERIAL_ELE_PATH}/preguntas/${slug}`, title, description, level: set.level, set, parent: page,
    h1: `Preguntas de conversación ${set.level}: ${set.items.length} preguntas para la clase de español`,
    faq: [
      { question: `¿Cómo uso estas preguntas en una clase ${set.level}?`, answer: "Elige tres o cuatro, no la lista entera. Deja que el alumno responda largo, repregunta («¿por qué?», «¿y después?») y anota un error o dos para corregir al final, no en medio de la respuesta." },
      { question: "¿Hay preguntas de otros niveles?", answer: `Sí: hay una lista por nivel de A1 a C2, y una guía con las 60 preguntas juntas («${page.h1}»).` },
    ],
  };
}

export const actividadPages: ActividadPage[] = elePages.flatMap((page) => page.activities.map((activity) => activityPage(page, activity)));
export const ejercicioPages: EjercicioPage[] = elePages.flatMap((page) => (page.exercise ? [exercisePage(page, page.exercise)] : []));
export const preguntasPages: PreguntasPage[] = elePages.flatMap((page) => (page.questions ?? []).map((set) => questionsPage(page, set)));
export const actividadBySlug = new Map(actividadPages.map((page) => [page.slug, page]));
export const ejercicioBySlug = new Map(ejercicioPages.map((page) => [page.slug, page]));
export const preguntasBySlug = new Map(preguntasPages.map((page) => [page.slug, page]));
export const actividadPathByName = new Map(actividadPages.map((page) => [page.activity.name, page.path]));
export const bancoPaths = [...actividadPages, ...ejercicioPages, ...preguntasPages].map((page) => page.path);

export const bancoTitle = "Banco de actividades ELE: fichas, ejercicios y preguntas | SpanishCue";
export const bancoDescription = `${actividadPages.length} actividades, ${ejercicioPages.length} ejercicios con soluciones y preguntas de conversación por nivel, listos para imprimir o compartir en pantalla.`;
