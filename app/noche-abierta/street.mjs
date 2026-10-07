// Noche Abierta · the street encounters beyond the ten places.
//
// White circles all over the city open small scenes: someone reacts, the
// learner chooses what to say (and says it aloud), the person answers, a new
// decision appears, something changes in the world, and the scene closes with
// one personal question about the learner's real life. The object the learner
// carries tonight (lápiz, libro, gas pimienta, granada, pistola, cuchillo or
// the corazón) changes the scene: most scenes open on a different moment for
// each object (`variants`), with its own reactions, choices, endings and
// closing question, and the object also adds its own option wherever it fits.
//
// Pure data and state, no DOM: the 3D world reads which people stand where
// and how they feel; the card reads what to say. Texts come in three bands
// (A for A1–A2, B for B1–B2, C for C1–C2) and the closing question in six
// levels. The data lives in ./street/<district>.mjs.

import ALTO from "./street/alto.mjs";
import CLINICA from "./street/clinica.mjs";
import COSTA from "./street/costa.mjs";
import ESTACION from "./street/estacion.mjs";
import MERCADO from "./street/mercado.mjs";
import SUR from "./street/sur.mjs";
import VIEJO from "./street/viejo.mjs";
import CAOS_NORTE from "./street/caos-norte.mjs";
import CAOS_CENTRO from "./street/caos-centro.mjs";
import CAOS_SUR from "./street/caos-sur.mjs";

// What the learner can carry. The heart is not an object but a power.
export const ITEMS = [
  { id: "lapiz", name: "Lápiz", short: "Lápiz", note: "Escribir, dibujar, dejar una nota." },
  { id: "libro", name: "Libro", short: "Libro", note: "Buscar, enseñar, regalar." },
  { id: "gas", name: "Gas pimienta", short: "Gas", note: "Por si te sientes en peligro." },
  { id: "granada", name: "Granada", short: "Granada", note: "Nadie sabe si es de verdad. Nadie quiere averiguarlo." },
  { id: "pistola", name: "Pistola", short: "Pistola", note: "Todo el mundo la ve antes de verte a ti." },
  { id: "cuchillo", name: "Cuchillo", short: "Cuchillo", note: "Cortar, abrir… o que alguien saque el suyo." },
  { id: "corazon", name: "Corazón", short: "Corazón", note: "Un poder: cambia la actitud de quien lo recibe." },
];
export const ITEM_IDS = ITEMS.map((item) => item.id);
export const isItem = (value) => ITEM_IDS.includes(value);
export const itemById = (id) => ITEMS.find((item) => item.id === id) ?? null;

export const DISTRICTS = {
  centro: "El centro",
  viejo: "Barrio Viejo",
  alto: "Barrio Alto",
  clinica: "Hospital y comisaría",
  mercado: "Mercado nocturno",
  costa: "La Costanera",
  estacion: "La Estación",
  sur: "Barrio Sur",
  galpones: "Los Galpones",
};

export const ENCOUNTERS = Object.freeze([...VIEJO, ...ALTO, ...CLINICA, ...MERCADO, ...COSTA, ...ESTACION, ...SUR, ...CAOS_NORTE, ...CAOS_CENTRO, ...CAOS_SUR]);
const byId = new Map(ENCOUNTERS.map((encounter) => [encounter.id, encounter]));
export const encounterById = (id) => byId.get(id) ?? null;

// A1–A2 read band A, B1–B2 band B, C1–C2 band C.
export function bandFor(level) {
  return level === "A1" || level === "A2" ? "A" : level === "C1" || level === "C2" ? "C" : "B";
}
const text = (value, band) => (value ? value[band] ?? value.B ?? value.A ?? "" : "");

export function emptyStreet() {
  return { item: null, open: null, done: {}, flags: [] };
}

export function isValidStreet(value) {
  if (!value || typeof value !== "object") return false;
  if (value.item !== null && !isItem(value.item)) return false;
  if (!value.done || typeof value.done !== "object" || !Array.isArray(value.flags)) return false;
  for (const [id, end] of Object.entries(value.done)) if (!encounterById(id)?.ends[end]) return false;
  if (value.open === null) return true;
  const encounter = encounterById(value.open?.id);
  if (!encounter || !Array.isArray(value.open.trail)) return false;
  if (value.open.end) return Boolean(encounter.ends[value.open.end]);
  return Boolean(encounter.nodes[value.open.node]);
}

export function chooseItem(street, item) {
  if (!isItem(item)) return street;
  return { ...street, item };
}

// Encounters that exist right now: the ones that need a flag only once it is
// set, the ones tied to a city event only after that event.
export function isAvailable(street, encounter, eventId = null) {
  if (!encounter) return false;
  if (encounter.requires && !street.flags.includes(encounter.requires)) return false;
  if (encounter.event && encounter.event !== eventId) return false;
  return true;
}
export function availableEncounters(street, eventId = null) {
  return ENCOUNTERS.filter((encounter) => isAvailable(street, encounter, eventId));
}

// The object in hand decides where a scene opens: its own first moment when
// the scene has one for it, the plain start otherwise.
export function variantOf(encounter, item) {
  return (item && encounter?.variants?.[item]) || null;
}
export function startFor(encounter, item) {
  return variantOf(encounter, item)?.start ?? encounter.start;
}
// The short choreography the 3D world plays when a scene opens with this
// object (people step back, raise their hands, run, lean in, kiss…).
export const OPENING_FX = Object.freeze([
  "retrocede", "manos-arriba", "grita", "huye", "evacuacion", "duelo-cuchillo", "policia", "helicoptero",
  "defensa", "risa", "curioso", "corazon", "beso", "abrazo", "calma",
]);
export function openingFx(street, id = street.open?.id) {
  const variant = variantOf(encounterById(id), street.item);
  return variant?.fx ?? (street.item === "corazon" ? "corazon" : null);
}

export function openEncounter(street, id, eventId = null) {
  const encounter = encounterById(id);
  if (!encounter || street.open || street.done[id] || !isAvailable(street, encounter, eventId)) return street;
  return { ...street, open: { id, node: startFor(encounter, street.item), trail: [], end: null } };
}

// The choices on screen: the three ways to answer, then the learner's
// object when this moment has something for it.
export function choicesFor(encounter, nodeId, item) {
  const node = encounter?.nodes[nodeId];
  if (!node) return [];
  const list = node.options.map((option) => ({ ...option, key: option.id, item: null }));
  const special = item ? node.items?.[item] : null;
  if (special) list.push({ ...special, id: `item:${item}`, key: `item:${item}`, item });
  return list;
}

export function chooseLine(street, choiceId) {
  const open = street.open;
  const encounter = encounterById(open?.id);
  if (!encounter || open.end) return street;
  const choice = choicesFor(encounter, open.node, street.item).find((item) => item.key === choiceId);
  if (!choice) return street;
  const trail = [...open.trail, { node: open.node, choice: choice.key }];
  if (choice.end) return { ...street, open: { ...open, trail, end: choice.end } };
  return { ...street, open: { ...open, trail, node: choice.next } };
}

// One step back inside the scene (the teacher wants to try another answer).
export function stepBack(street) {
  const open = street.open;
  if (!open || !open.trail.length) return street;
  const trail = open.trail.slice(0, -1);
  const last = open.trail[open.trail.length - 1];
  return { ...street, open: { ...open, trail, node: last.node, end: null } };
}

export function restartEncounter(street) {
  const encounter = encounterById(street.open?.id);
  if (!encounter) return street;
  return { ...street, open: { id: encounter.id, node: startFor(encounter, street.item), trail: [], end: null } };
}

// Leaving the scene. A scene that reached an end is remembered (and sets its
// flag); one left half-way can be opened again from the start.
export function closeEncounter(street) {
  const open = street.open;
  if (!open) return street;
  if (!open.end) return { ...street, open: null };
  const encounter = encounterById(open.id);
  const end = encounter.ends[open.end];
  const flags = end.flag && !street.flags.includes(end.flag) ? [...street.flags, end.flag] : street.flags;
  return { ...street, open: null, done: { ...street.done, [open.id]: open.end }, flags };
}

// How the people in a scene feel right now: the mood of the last answer,
// otherwise the mood of the moment on screen; after a scene, how it ended.
export function moodOf(street, id) {
  const encounter = encounterById(id);
  if (!encounter) return "neutral";
  const open = street.open?.id === id ? street.open : null;
  if (open) {
    const last = open.trail[open.trail.length - 1];
    if (last) {
      const choice = choicesFor(encounter, last.node, street.item).find((item) => item.key === last.choice);
      if (choice) return choice.mood;
    }
    return encounter.nodes[open.node]?.mood ?? "neutral";
  }
  const end = street.done[id];
  if (!end) return encounter.nodes[startFor(encounter, street.item)].mood;
  return ENDING_MOOD[encounter.ends[end].change] ?? "neutral";
}
const ENDING_MOOD = {
  sonrie: "smile", "se-va": "smile", corre: "scared", ambulancia: "worried", policia: "worried", baila: "love",
  sigue: "neutral", llama: "worried", triste: "sad", enojado: "angry", luz: "smile", abraza: "love", "se-sienta": "neutral", duerme: "sleepy",
};

// What the card shows, in the learner's level.
export function streetView(street, level) {
  const open = street.open;
  const encounter = encounterById(open?.id);
  if (!encounter) return null;
  const band = bandFor(level);
  const lastStep = open.trail[open.trail.length - 1] ?? null;
  const lastChoice = lastStep ? choicesFor(encounter, lastStep.node, street.item).find((item) => item.key === lastStep.choice) : null;
  const said = lastChoice ? { act: text(lastChoice.act, band), say: text(lastChoice.say, band), reply: text(lastChoice.reply, band), item: lastChoice.item } : null;
  const castName = (id) => encounter.cast.find((person) => person.id === id)?.name ?? "";
  const variant = variantOf(encounter, street.item);
  const base = {
    id: encounter.id, title: encounter.title, district: encounter.district, districtName: DISTRICTS[encounter.district] ?? "",
    goal: encounter.goal, kind: encounter.kind, step: open.trail.length, said, mood: moodOf(street, encounter.id),
    variant: variant ? street.item : null, fx: openingFx(street, encounter.id),
  };
  if (open.end) {
    const end = encounter.ends[open.end];
    // The closing question follows the object when the scene wrote one for it.
    const speak = text(variant?.speak, band) || encounter.speak[level] || encounter.speak.B1;
    return { ...base, ended: true, end: { id: open.end, text: text(end.text, band), change: end.change, recap: end.recap }, speak };
  }
  const node = encounter.nodes[open.node];
  return {
    ...base, ended: false, who: castName(node.who), line: text(node.line, band),
    choices: choicesFor(encounter, open.node, street.item).map((choice) => ({
      key: choice.key, item: choice.item, act: text(choice.act, band), say: text(choice.say, band),
    })),
  };
}

// The scenes this night, for the closing recap.
export function streetSummary(street) {
  return Object.entries(street.done).map(([id, end]) => {
    const encounter = encounterById(id);
    return { id, title: encounter.title, district: DISTRICTS[encounter.district] ?? "", recap: encounter.ends[end].recap };
  });
}

// Whether the heart was just used: the 3D world plays its animation once
// per use (the count only grows while the scene is open).
export function heartsUsed(street) {
  return street.open ? street.open.trail.filter((step) => step.choice === "item:corazon").length : 0;
}

// Using the object on someone who is just passing by (Q in the street):
// a short reaction, no scene. People get scared of a weapon and walk away
// fast. The heart always wins a smile.
const AMBIENT = {
  lapiz: { mood: "surprised", A: ["¿Un lápiz? ¿Para qué?", "¿Me quieres dibujar? ¡Qué bien!", "Gracias, pero no tengo papel."], B: ["¿Me estás pidiendo un autógrafo? Nadie me lo pidió nunca.", "Si me dibujas, sácame más alto, por favor.", "¿Un lápiz a esta hora? Debes de ser profe."], C: ["¿Un lápiz? Qué analógico. Me cae bien la gente que todavía escribe a mano.", "Si es para apuntar mi número, lo siento: ya tengo quien me llame tarde.", "Ojalá todos salieran de noche con un lápiz en vez de con prisa."] },
  libro: { mood: "smile", A: ["¡Me gusta ese libro!", "¿Es bueno? ¿Cómo se llama?", "Yo leo en el autobús."], B: ["¿Lo estás leyendo ahora? Yo me lo leí en una noche.", "Si me lo prestas, te lo devuelvo… algún día.", "Un libro de noche siempre es buena compañía."], C: ["¿Me lo recomiendas o me lo estás vendiendo? Porque con esa cara de entusiasmo, no sé.", "Hace años que no leo nada que no sea el móvil. Igual me tienta.", "Dicen que uno se parece a lo que lee. ¿Qué dice eso de ti?"] },
  gas: { mood: "scared", flee: true, A: ["¡Eh! ¡Calma! Me voy.", "¡No, no! ¡Perdón!", "¡Uy! Ya me voy, ya me voy."], B: ["¡Oye, baja eso! No te hice nada.", "Tranquilidad, que solo pasaba por aquí.", "Mejor me voy, ¿no?"], C: ["Entiendo que la noche asusta, pero yo no soy el peligro, de verdad.", "Guarda eso, por favor; me estás poniendo más nervioso que la calle.", "Me voy despacio, sin movimientos raros. Buenas noches."] },
  granada: { mood: "scared", flee: true, A: ["¡¿Qué es eso?! ¡Me voy!", "¡Ay, no! ¡Socorro!", "¿Es de verdad? ¡Adiós!"], B: ["¿Es un juguete? Dime que es un juguete.", "No sé qué es eso y no quiero saberlo.", "¡Esto es una broma muy mala!"], C: ["Si es una instalación artística, el mensaje me llegó con demasiada fuerza.", "Prefiero no quedarme a averiguar si es de utilería.", "Hay maneras más simples de pedir que te dejen pasar, ¿eh?"] },
  pistola: { mood: "scared", flee: true, A: ["¡No! ¡Calma, por favor!", "¡No, no!", "¡Me voy, me voy!"], B: ["¡Eh, eh! ¡Baja eso, por favor!", "No tengo nada, de verdad. Me voy.", "¡Voy a llamar a la policía!"], C: ["Respiremos los dos. Nadie tiene por qué hacer nada de lo que se arrepienta.", "Esto no está pasando. Me doy la vuelta y sigo con mi noche.", "Sea lo que sea, no vale la pena. Me alejo."] },
  cuchillo: { mood: "scared", flee: true, A: ["¡Cuidado con eso!", "¿Un cuchillo? ¡Me voy!", "¡Uy! ¡No, gracias!"], B: ["¿Estás cocinando o qué? ¡Guárdalo!", "Mejor guarda eso, que asustas a la gente.", "Me voy por el otro lado, por si acaso."], C: ["Si es para cortar algo, que no sea la conversación. Hasta luego.", "Con eso en la mano, cualquier cosa que digas suena a amenaza.", "No sé qué pretendes, pero yo me retiro con elegancia."] },
  corazon: { mood: "love", hearts: true, A: ["¡Ay, qué lindo! ¡Gracias!", "¡Qué simpático! Buenas noches.", "¡Me encanta! Eres muy amable."], B: ["¡Me alegraste la noche, de verdad!", "¿Y esto? Hacía mucho que nadie me sonreía así.", "Gracias. Ahora me voy a casa con una sonrisa."], C: ["No sé quién eres, pero acabas de arreglarme una noche bastante torcida.", "Esto no se ve todos los días: alguien que regala cariño gratis.", "Me lo guardo. Mañana se lo devuelvo a otra persona."] },
};
export function ambientReaction(item, level, seed = 0) {
  const data = AMBIENT[item];
  if (!data) return null;
  const lines = data[bandFor(level)];
  return { mood: data.mood, text: lines[Math.abs(seed) % lines.length], flee: Boolean(data.flee), hearts: Boolean(data.hearts) };
}
