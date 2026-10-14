// Noche Abierta · A0 patch. See ../levels.mjs for the shape and merge rules.
//
// A0: someone who starts from zero. Words and very short sentences in the
// present, each with its English under it ({ es, en } pairs, flattened into
// one bilingual string by ../bilingual.mjs). The places read their A0 from
// ../pedagogy-a0.mjs; this file covers the arrival, the three city events
// and the closing of the night.
import { bi } from "../bilingual.mjs";

const t = (es, en) => ({ es, en });
const flatten = (value) => {
  if (Array.isArray(value)) return value.map(flatten);
  if (value && typeof value === "object") {
    if (typeof value.es === "string" && typeof value.en === "string") return bi(value);
    return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, flatten(item)]));
  }
  return value;
};

const A0 = {
  arrival: {
    premise: t("Es sábado. Es de noche. Hoy es el cumpleaños de Vale. Hay una fiesta. Camina y entra donde quieras.", "It is Saturday. It is night. Today is Vale’s birthday. There is a party. Walk and go in wherever you want."),
    warmup: [
      t("¿Cómo te llamas?", "What is your name?"),
      t("¿Te gustan las fiestas? ¿Sí o no?", "Do you like parties? Yes or no?"),
      t("¿Qué día es hoy?", "What day is it today?"),
    ],
    teacher: "Dos minutos con preguntas de una palabra. Señala el inglés solo si el alumno se bloquea. Acepta «sí», «no» y una palabra; repite tú la frase completa.",
  },

  events: {
    lluvia: {
      text: t("Llueve. La plaza y la terraza están vacías. No hay taxis.", "It is raining. The square and the rooftop are empty. There are no taxis."),
      prompts: [
        t("¿Qué lugar está bien con lluvia: el café, el bar o la plaza?", "Which place is good in the rain: the café, the bar or the square?"),
        t("¿Adónde vas ahora? Di un lugar.", "Where are you going now? Say one place."),
        t("¿Tienes paraguas? ¿Sí o no?", "Do you have an umbrella? Yes or no?"),
      ],
      teacher: "Pide un lugar y repite tú la frase: «Vas al café». Después pregunta «¿Con quién?».",
    },
    transporte: {
      text: t("No hay metro. No hay autobús. Lu quiere ir a casa.", "There is no metro. There is no bus. Lu wants to go home."),
      prompts: [
        t("¿Lu va en taxi o a pie?", "Does Lu go by taxi or on foot?"),
        t("¿Tú vas a casa ahora? ¿Sí o no?", "Are you going home now? Yes or no?"),
        t("¿Quién va con Lu?", "Who goes with Lu?"),
      ],
      teacher: "Haz de Lu: di «Estoy cansada» y «¿Taxi?». Acepta respuestas de una palabra.",
    },
    celular: {
      text: t("Nico no tiene su celular. ¿Dónde está?", "Nico doesn’t have his phone. Where is it?"),
      prompts: [
        t("¿Dónde estás esta noche? Di un lugar.", "Where are you tonight? Say one place."),
        t("¿El celular está en el bar, en el taxi o en la plaza?", "Is the phone at the bar, in the taxi or in the square?"),
        t("¿Buscas el celular? ¿Sí o no?", "Do you look for the phone? Yes or no?"),
      ],
      teacher: "El celular está en el lugar que diga el alumno. Celebra la respuesta: «¡Sí! Está en el bar».",
    },
  },

  final: {
    prompts: [
      t("¿Adónde fuiste? Di un lugar.", "Where did you go? Say one place."),
      t("¿Qué lugar te gusta?", "Which place do you like?"),
      t("¿Qué hay en ese lugar?", "What is there in that place?"),
      t("¿Quién es una persona de esta noche? Di su nombre.", "Who is a person from tonight? Say their name."),
      t("¿Te gusta la noche? ¿Sí o no?", "Do you like the night? Yes or no?"),
    ],
    hypothetical: t("Mañana, ¿adónde vas?", "Tomorrow, where are you going?"),
    help: {
      starters: [t("Fui a…", "I went to…"), t("Me gusta…", "I like…"), t("Hay…", "There is…"), t("Es…", "It is…")],
      chunks: [t("el café", "the café"), t("la plaza", "the square"), t("el bar", "the bar"), t("la fiesta", "the party"), t("mañana", "tomorrow")],
    },
    criteria: [
      { id: "conectores", label: "Dos palabras juntas", detail: "Une dos palabras o dos frases mínimas con «y»." },
      { id: "razones", label: "Me gusta", detail: "Dice qué le gusta o qué quiere con «me gusta» o «quiero»." },
      { id: "repreguntas", label: "Responde", detail: "Contesta «sí», «no» o una palabra a preguntas cortas." },
      { id: "claridad", label: "Se entiende", detail: "Se le entiende la palabra clave, aunque la frase no esté completa." },
    ],
  },
};

export default flatten(A0);
