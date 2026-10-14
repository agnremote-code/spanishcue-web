/**
 * «Preparar próxima clase»: a lesson plan built only from the learner's real
 * recorded errors. Every exercise below quotes a stored question or answer;
 * the conversation prompts are the only pre-written material, chosen per
 * category and level. No AI, no generic advice.
 */
import { categories, type CategoryId } from "./categorize";
import { summarizeCategories, type CategorySummary, type ErrorRecord, type TeacherNote } from "./model";

export type PlanExercise = { kind: "corrige" | "completa" | "elige" | "transforma"; prompt: string; answer: string; source: string };
export type PlanBlock = { category: CategoryId; label: string; status: CategorySummary["status"]; reason: string; exercises: PlanExercise[]; conversation: string[]; classroomClassIds: number[] };
export type ClassPlan = { alias: string; level: string; summary: string; priorities: PlanBlock[]; generatedAt: string };

const conversationBank: Partial<Record<CategoryId, Record<"a" | "b" | "c", string[]>>> = {
  "ser-estar": {
    a: ["¿Cómo eres y cómo estás hoy? Da dos frases con cada verbo.", "Describe tu casa: ¿cómo es? ¿Dónde está?", "¿Cómo estabas ayer por la noche? ¿Por qué?"],
    b: ["Cuenta un día en el que estabas muy cansado y explica cómo era la situación.", "Describe a una persona de tu familia: cómo es y cómo está últimamente.", "¿Qué cosas de tu ciudad son así siempre y cuáles están cambiando?"],
    c: ["Explica la diferencia entre «es aburrido» y «está aburrido» con ejemplos de tu vida.", "Describe un lugar que es bonito pero estaba descuidado la última vez que fuiste.", "¿Qué aspectos de tu carácter son permanentes y cuáles dependen del momento?"],
  },
  "por-para": {
    a: ["¿Para qué estudias español? ¿Por qué empezaste?", "Compra algo: ¿cuánto pagaste por ello y para quién es?"],
    b: ["Cuenta un viaje: por dónde pasaste y para qué fuiste.", "Explica un regalo que hiciste: para quién era y por qué lo elegiste."],
    c: ["Defiende una decisión profesional: las razones por las que la tomaste y los objetivos para los que sirve.", "Describe un trámite: por qué medio lo hiciste y para cuándo lo necesitabas."],
  },
  "desde-hace": {
    a: ["¿Desde cuándo vives en tu ciudad? ¿Cuánto tiempo hace?", "¿Cuánto tiempo hace que estudias español?"],
    b: ["Habla de tres cosas que haces desde hace tiempo y una que dejaste de hacer hace poco.", "¿Desde cuándo conoces a tu mejor amigo? Cuenta cómo empezó."],
    c: ["Explica un cambio en tu vida: desde cuándo ocurre, cuánto hace que lo notaste y qué llevas haciendo al respecto.", "Describe una tradición de tu familia: desde cuándo existe y qué ha cambiado."],
  },
  pasados: {
    a: ["¿Qué hiciste ayer? Cuenta tres acciones en orden.", "¿Cómo era tu escuela cuando eras pequeño?"],
    b: ["Cuenta una anécdota: qué pasó, cómo era la situación y cómo terminó.", "Describe tu último viaje: qué hiciste y cómo era el lugar."],
    c: ["Narra un momento que cambió tu forma de pensar: contexto, hecho y consecuencias.", "Cuenta una noticia reciente como si fueras periodista: antecedentes y hechos."],
  },
  pluscuamperfecto: {
    b: ["Cuenta algo que ya había pasado cuando llegaste a un sitio.", "¿Qué habías hecho antes de empezar a estudiar español?"],
    c: ["Reconstruye un malentendido: qué había dicho cada persona antes de la discusión.", "Explica un error en el trabajo: qué había fallado antes de que lo descubrieran."],
    a: ["Cuenta algo que ya había pasado cuando llegaste a un sitio."],
  },
  subjuntivo: {
    a: ["¿Qué quieres que haga tu familia este fin de semana?", "Da tres consejos a un amigo: es importante que…"],
    b: ["Expresa tres deseos para el próximo año con ojalá y espero que.", "Opina sobre una noticia: creo que… / no creo que…"],
    c: ["Aconseja a alguien que va a mudarse a tu país: es fundamental que, no es necesario que…", "Valora una decisión polémica: me parece bien que… aunque…"],
  },
  condicionales: {
    a: ["Si llueve mañana, ¿qué haces?", "Si tienes tiempo libre hoy, ¿qué vas a hacer?"],
    b: ["¿Qué harías si ganaras mucho dinero?", "Si pudieras vivir en otro país, ¿cuál elegirías y por qué?"],
    c: ["¿Qué habrías hecho de otra manera en tu último trabajo?", "Negocia: si aceptaras este cambio, ¿qué pedirías a cambio?"],
  },
  imperativo: {
    a: ["Da instrucciones para llegar a tu casa desde la estación.", "Explica cómo se prepara tu plato favorito, paso a paso."],
    b: ["Da consejos a alguien que empieza en tu profesión: haz…, no hagas…", "Explica las normas de un juego con instrucciones afirmativas y negativas."],
    c: ["Redacta en voz alta las instrucciones de seguridad de un lugar que conoces.", "Convence a un amigo de que cambie un hábito con órdenes suaves y razones."],
  },
  pronombres: {
    a: ["¿Qué regalas a tu familia y por qué? Responde sin repetir los nombres.", "Habla de tu rutina de la mañana con verbos reflexivos."],
    b: ["Cuenta un favor que hiciste: ¿a quién se lo hiciste? ¿Cómo lo hiciste?", "Describe cómo organizas un regalo sin repetir el objeto ni la persona."],
    c: ["Resume una conversación en la que alguien te pidió algo y explica qué le respondiste.", "Explica un proceso de trabajo evitando repeticiones con pronombres."],
  },
  preposiciones: {
    a: ["Describe dónde están las cosas en tu habitación.", "¿A qué hora, en qué lugar y con quién comes normalmente?"],
    b: ["Cuenta tu trayecto habitual: de dónde sales, por dónde pasas, a dónde llegas.", "Habla de tus sueños: ¿con qué sueñas? ¿En qué piensas?"],
    c: ["Explica una decisión difícil: en qué consistía, de qué dependía y a qué te comprometiste.", "Describe un proyecto: con quién contaste y a qué te enfrentaste."],
  },
  concordancia: {
    a: ["Describe tres objetos de tu casa con dos adjetivos cada uno.", "¿Cómo son las personas de tu familia?"],
    b: ["Describe tu ciudad con al menos cinco adjetivos en plural.", "Compara dos lugares que conoces bien."],
    c: ["Describe una obra de arte o una película con precisión y vocabulario variado.", "Explica un problema social con sustantivos abstractos y sus adjetivos."],
  },
  determinantes: {
    a: ["Presenta a tres personas de tu clase y después habla de ellas otra vez.", "¿Qué hay en tu mochila? Después, ¿dónde está cada cosa?"],
    b: ["Cuenta una historia introduciendo personajes nuevos y volviendo a mencionarlos.", "Habla de tus objetos favoritos y de los de tu familia."],
    c: ["Explica una noticia distinguiendo lo nuevo y lo ya mencionado.", "Describe los recursos de tu trabajo y a quién pertenece cada cosa."],
  },
  conectores: {
    a: ["Cuenta tu día con y, pero, porque y después.", "¿Por qué estudias español y para qué?"],
    b: ["Explica una opinión con aunque, sin embargo y por eso.", "Cuenta un plan que cambió: primero…, pero…, así que…"],
    c: ["Defiende una postura con concesiones: aunque…, si bien…, no obstante…", "Explica causas y consecuencias de un problema actual con conectores variados."],
  },
  perifrasis: {
    a: ["¿Qué sigues haciendo y qué dejaste de hacer este año?", "¿Qué acabas de hacer antes de la clase?"],
    b: ["Cuenta cambios en tu vida con empezar a, dejar de, volver a y seguir.", "¿Qué solías hacer de niño que ya no haces?"],
    c: ["Describe una evolución profesional con perífrasis de cambio y de duración.", "Explica un proceso largo: llevar + gerundio, ir + gerundio, acabar por."],
  },
  presente: {
    a: ["Describe tu rutina de un día normal.", "¿Qué hace tu familia los domingos?"],
    b: ["Explica cómo funciona algo que conoces bien, paso a paso.", "Describe los hábitos de alguien muy diferente a ti."],
    c: ["Explica un proceso técnico de tu trabajo en presente.", "Describe las tendencias actuales de tu sector."],
  },
  "futuro-condicional": {
    a: ["¿Qué harás el próximo fin de semana?", "¿Cómo será tu vida en diez años?"],
    b: ["Haz predicciones sobre tu ciudad en 2040.", "Pide tres cosas con cortesía en un restaurante y en un hotel."],
    c: ["Imagina las consecuencias de una decisión política y defiéndelas.", "Haz hipótesis sobre por qué alguien no ha llegado a una reunión."],
  },
  relativos: {
    a: ["Describe a una persona que conoces: la persona que…", "Habla de un lugar al que vas mucho."],
    b: ["Describe el trabajo ideal: un trabajo en el que…, con compañeros que…", "Habla de una persona cuya historia te impresionó."],
    c: ["Define tres conceptos de tu profesión con oraciones de relativo precisas.", "Describe un lugar del que guardas recuerdos y una persona a la que admiras."],
  },
};

const levelBand = (level: string): "a" | "b" | "c" => (level.toLowerCase().startsWith("a") ? "a" : level.toLowerCase().startsWith("b") ? "b" : "c");

const quote = (text: string) => text.replace(/\*\*|`/g, "").trim();

/** Replaces the first gap or the expected form with the learner's wrong answer. */
function withWrongAnswer(e: ErrorRecord): string {
  const q = quote(e.question);
  if (/_{3,}/.test(q)) return q.replace(/_{3,}/, e.given.split(" · ")[0] || "___");
  if (e.type === "error") return e.given;
  return `${q} → «${e.given}»`;
}

function exercisesFor(summary: CategorySummary): PlanExercise[] {
  const out: PlanExercise[] = [];
  const seen = new Set<string>();
  for (const e of summary.examples) {
    const key = `${e.moduleId}:${e.exerciseId}:${e.itemIndex}`;
    if (seen.has(key)) continue;
    seen.add(key);
    const source = `Semana ${Number(e.moduleId.split("-")[1])} · ${e.section}`;
    const q = quote(e.question);
    if (/_{3,}/.test(q)) {
      out.push({ kind: "corrige", prompt: `El alumno escribió: «${withWrongAnswer(e)}». ¿Qué falla y cómo se dice?`, answer: q.replace(/_{3,}/, e.correct.split(" · ")[0]), source });
      out.push({ kind: "completa", prompt: q, answer: e.correct, source });
    } else if (e.type === "choice" || e.type === "context" || e.type === "listen" || e.type === "classify") {
      out.push({ kind: "elige", prompt: `${q} (el alumno eligió «${e.given}»)`, answer: e.correct, source });
    } else if (e.type === "error" || e.type === "transform") {
      out.push({ kind: "transforma", prompt: `Corrige en voz alta: «${e.given}»`, answer: e.correct, source });
    } else {
      out.push({ kind: "corrige", prompt: `El alumno respondió «${e.given}» a «${q}».`, answer: e.correct, source });
    }
    if (out.length >= 6) break;
  }
  return out;
}

function reasonFor(s: CategorySummary): string {
  const parts = [`${s.errors} ${s.errors === 1 ? "error" : "errores"}`];
  if (s.recurrent) parts.push(`${s.recurrent} ${s.recurrent === 1 ? "recurrente" : "recurrentes"}`);
  if (s.activities > 1) parts.push(`en ${s.activities} actividades`);
  if (s.corrected) parts.push(`${s.corrected} corregid${s.corrected === 1 ? "o" : "os"} después`);
  if (s.afterWork) parts.push(s.afterWork.errorsAfter ? `${s.afterWork.errorsAfter} nuevos desde que lo trabajaron en clase` : "sin errores nuevos desde que lo trabajaron en clase");
  return parts.join(" · ");
}

const statusText: Record<CategorySummary["status"], string> = { refuerzo: "Necesita refuerzo", atencion: "Conviene repasarlo", leve: "Error aislado", superado: "Superado" };

export function buildClassPlan(alias: string, level: string, errors: ErrorRecord[], notes: TeacherNote[] = [], classIdsByCategory: Partial<Record<CategoryId, number[]>> = {}, now = Date.now()): ClassPlan {
  const summaries = summarizeCategories(errors, notes, now);
  const priorities = summaries.filter((s) => s.status !== "superado").slice(0, 4);
  const sentences: string[] = [];
  if (!errors.length) sentences.push(`${alias} todavía no tiene errores registrados en Homework. Cuando resuelva actividades, aquí verás qué conviene trabajar.`);
  else {
    const first = priorities[0];
    if (first) {
      const example = first.examples.find((e) => !e.correctedAt) ?? first.examples[0];
      sentences.push(`${alias} presenta ${first.recurrent >= 2 ? "dificultades recurrentes" : "dificultades"} con ${first.label} (${first.errors} ${first.errors === 1 ? "error" : "errores"}${first.corrected ? `, ${first.corrected} ${first.corrected === 1 ? "corregido" : "corregidos"} después` : ""}); por ejemplo, en «${quote(example.question)}» respondió «${example.given}» y la forma esperada era «${example.correct}».`);
    }
    const rest = priorities.slice(1, 3);
    if (rest.length) sentences.push(`También conviene repasar ${rest.map((s) => `${s.label} (${s.errors})`).join(" y ")}.`);
    const improved = summaries.filter((s) => s.status === "superado");
    if (improved.length) sentences.push(`Ya superó: ${improved.map((s) => s.label).join(", ")}.`);
  }
  return {
    alias, level, generatedAt: new Date(now).toISOString(), summary: sentences.join(" "),
    priorities: priorities.map((s) => ({ category: s.category, label: s.label, status: s.status, reason: `${statusText[s.status]} · ${reasonFor(s)}`, exercises: exercisesFor(s), conversation: (conversationBank[s.category]?.[levelBand(level)] ?? []).slice(0, 3), classroomClassIds: classIdsByCategory[s.category] ?? [] })),
  };
}

export const categoryQuestion = (category: CategoryId) => categories[category].question;
