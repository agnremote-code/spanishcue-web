// El Recadero de Puerto Neón · B1 · Modo Play.
// Discurso referido con verbo introductor en presente: información, órdenes,
// pedidos y preguntas, con los cambios de persona y de deixis que exige.

export const STAGES = [
  { id: "arranque", title: "Suena el teléfono", zone: "Despacho", minutes: 4 },
  { id: "mercado", title: "Notas de voz de Doña Chela", zone: "El Mercado", minutes: 7 },
  { id: "puerto", title: "Carga rápida", zone: "El Puerto", minutes: 7 },
  { id: "barrio-alto", title: "Mensajes cruzados", zone: "Barrio Alto", minutes: 7 },
  { id: "techos", title: "Ruta libre", zone: "Los Techos", minutes: 8 },
  { id: "terraza", title: "La noche del bloque", zone: "La Terraza", minutes: 10 },
  { id: "ranking", title: "Ranking barrial", zone: "Cierre", minutes: 2 },
];

export const VEHICLES = [
  { id: "moto", label: "Moto", icon: "🛵" },
  { id: "bici", label: "Bici eléctrica", icon: "🚲" },
  { id: "monopatin", label: "Monopatín", icon: "🛴" },
];

export const WARMUP_QUESTIONS = [
  "¿Alguna vez un mensaje llegó mal y se armó un lío? ¿Qué pasó?",
  "¿Preferís mandar audios o textos? ¿Por qué?",
];

export const DISCOVERY_PAIRS = [
  { original: "Estoy en el mercado y tengo el hielo.", relayed: "Chela dice que **está** en el mercado y que **tiene** el hielo.", kind: "Información" },
  { original: "Vení a buscarlo antes de las nueve.", relayed: "Chela dice que **vayas** a buscarlo antes de las nueve.", kind: "Orden" },
  { original: "¿Tenés mi carrito?", relayed: "Chela pregunta **si** tenés **su** carrito.", kind: "Pregunta" },
];

export const DISCOVERY_QUESTIONS = [
  {
    prompt: "Cuando el mensaje da información, después de «dice que» va…",
    options: ["presente de indicativo", "presente de subjuntivo", "infinitivo"],
    answer: 0,
    hint: "Chela informa: «estoy» → «dice que está». La información se queda en indicativo.",
  },
  {
    prompt: "Cuando el mensaje es una orden o un pedido, después de «dice que» va…",
    options: ["presente de indicativo", "presente de subjuntivo", "imperativo"],
    answer: 1,
    hint: "Ojo: una orden transmitida pide subjuntivo. «Vení» → «dice que vayas».",
  },
  {
    prompt: "Cuando el mensaje es una pregunta de sí o no, usamos…",
    options: ["pregunta que", "pregunta si", "dice si"],
    answer: 1,
    hint: "Las preguntas de sí o no se transmiten con «pregunta si».",
  },
];

export const CHEAT_SHEET = {
  formulas: [
    { kind: "Información", formula: "dice que + indicativo", example: "Dice que llega tarde." },
    { kind: "Orden o pedido", formula: "dice / pide que + subjuntivo", example: "Dice que traigas hielo." },
    { kind: "Pregunta sí/no", formula: "pregunta si + indicativo", example: "Pregunta si venís." },
    { kind: "Pregunta abierta", formula: "pregunta qué / dónde / cuándo…", example: "Pregunta dónde está la llave." },
  ],
  changes: [
    { what: "Persona", from: "yo, me, mi", to: "él/ella, le/lo/la, su" },
    { what: "Lugar", from: "acá / aquí", to: "allá / allí" },
    { what: "Movimiento", from: "venir, traer", to: "ir, llevar" },
    { what: "Cerca / lejos", from: "este", to: "ese" },
  ],
};

export const CARGO = [
  { from: "Tano", original: "Traeme los parlantes.", before: "Tano dice que le", after: "los parlantes.", options: ["llevás", "lleves", "llevar"], answer: 1, hint: "Tano te pide algo: orden → subjuntivo. Y lejos de Tano, «traer» se convierte en «llevar»." },
  { from: "Lu", original: "No compres más pan.", before: "Lu dice que no", after: "más pan.", options: ["comprás", "compres", "compraste"], answer: 1, hint: "Es un pedido negativo: con «dice que no…» se mantiene el subjuntivo." },
  { from: "Lu", original: "Ya tengo las empanadas.", before: "Lu dice que ya", after: "las empanadas.", options: ["tenga", "tiene", "tengo"], answer: 1, hint: "Esto es información, no un pedido: «dice que ya tiene»." },
  { from: "Mayra", original: "¿A qué hora empieza la fiesta?", before: "Mayra pregunta", after: "empieza la fiesta.", options: ["si", "a qué hora", "que"], answer: 1, hint: "No es una pregunta de sí o no: repetí la palabra interrogativa." },
  { from: "Tano", original: "Esperame en la esquina.", before: "Tano dice que lo", after: "en la esquina.", options: ["esperás", "esperes", "esperar"], answer: 1, hint: "Orden → subjuntivo: «que lo esperes»." },
  { from: "Chela", original: "Mi sobrino va a ayudar.", before: "Chela dice que", after: "sobrino va a ayudar.", options: ["mi", "tu", "su"], answer: 2, hint: "El «mi» de Chela es «su» cuando lo cuenta otra persona." },
  { from: "Mayra", original: "Llamame cuando llegues.", before: "Mayra te pide que la", after: "cuando llegues.", options: ["llamás", "llames", "llamar"], answer: 1, hint: "«Pedir que» + subjuntivo: «que la llames»." },
  { from: "Lu", original: "¿Podés venir acá?", before: "Lu pregunta si podés", after: "", options: ["venir acá", "ir allá", "ir acá"], answer: 1, hint: "Desde otro lugar, «venir acá» se convierte en «ir allá»." },
];

export const CROSSED = [
  { original: "Tano (a Lu): «Apagá la luz del patio.»", rulo: "Tano dice que apagás la luz del patio.", consequence: "Lu cree que Tano la espía.", options: ["Tano dice que apagues la luz del patio.", "Tano dice que apagaste la luz del patio.", "Tano dice que apagar la luz del patio."], answer: 0, hint: "Es una orden: «dice que apagues»." },
  { original: "Lu: «Estoy cansada.»", rulo: "Lu dice que estoy cansada.", consequence: "Chela te manda a dormir a vos.", options: ["Lu dice que esté cansada.", "Lu dice que está cansada.", "Lu dice que estaba cansado."], answer: 1, hint: "Información: cambia la persona («estoy» → «está») y se queda en indicativo." },
  { original: "Chela (a Tano): «Traé tu guitarra.»", rulo: "Chela dice que traigas su guitarra.", consequence: "Tano se presenta con la guitarra de Chela.", options: ["Chela dice que traés su guitarra.", "Chela dice que llevás mi guitarra.", "Chela dice que lleves tu guitarra."], answer: 2, hint: "Dos cambios: «traer» → «llevar» (el recado va hacia otro lugar) y «tu» se mantiene porque Tano sigue siendo «vos»." },
  { original: "Mayra (a Tano): «¿Vas a venir?»", rulo: "Mayra pregunta que vas a venir.", consequence: "Tano cree que Mayra lo obliga a ir.", options: ["Mayra pregunta si vas a ir.", "Mayra pregunta qué vas a venir.", "Mayra dice que vayas."], answer: 0, hint: "Pregunta de sí o no → «pregunta si». Y desde otro lugar, «venir» → «ir»." },
  { original: "Inspector Ruiz (al grupo): «No pongan música después de las doce.»", rulo: "El inspector dice que no ponen música después de las doce.", consequence: "Todos creen que el inspector está desinformado y suben el volumen.", options: ["El inspector dice que no ponían música después de las doce.", "El inspector dice que no pongan música después de las doce.", "El inspector dice que no poner música después de las doce."], answer: 1, hint: "Es una orden al grupo: «que no pongan»." },
  { original: "Lu (a Chela): «Decile a Chela que la espero.»", rulo: "Lu dice que lo espera.", consequence: "Chela busca a un tal «él» por todo el barrio.", options: ["Lu dice que la espero.", "Lu dice que me espera.", "Lu dice que te espera."], answer: 2, hint: "Le hablás a Chela: «la espero» → «te espera»." },
];

export const ROUTES = [
  {
    id: "avenida",
    name: "La Avenida",
    risk: "Rápida · mucho tráfico",
    bonus: 0,
    cards: [
      { from: "Tano", text: "Necesito dos sillas más. ¿Quién tiene?", model: "Tano dice que necesita dos sillas más y pregunta quién tiene." },
      { from: "Chela", text: "No le digas nada a Lu de la torta.", model: "Chela dice que no le digas nada a Lu de la torta." },
      { from: "Mayra", text: "Estoy en la puerta del edificio.", model: "Mayra dice que está en la puerta del edificio." },
      { from: "Lu", text: "Traé servilletas y apurate.", model: "Lu dice que lleves servilletas y que te apures." },
    ],
  },
  {
    id: "mercado-nocturno",
    name: "El Mercado nocturno",
    risk: "Segura · lenta",
    bonus: 0,
    cards: [
      { from: "Lu", text: "¿Dónde dejo las empanadas?", model: "Lu pregunta dónde deja las empanadas." },
      { from: "Tano", text: "Probá el micrófono antes de subir.", model: "Tano dice que pruebes el micrófono antes de subir." },
      { from: "Chela", text: "Mi hermana llega a las diez.", model: "Chela dice que su hermana llega a las diez." },
      { from: "Mayra", text: "No uses el ascensor, está roto.", model: "Mayra dice que no uses el ascensor, que está roto." },
    ],
  },
  {
    id: "atajo",
    name: "El atajo de los techos",
    risk: "Arriesgada · +10 fichas por entrega",
    bonus: 10,
    cards: [
      { from: "Inspector Ruiz", text: "¿Tienen permiso para la fiesta?", model: "El inspector pregunta si tienen permiso para la fiesta." },
      { from: "Tano", text: "Decile al inspector que el permiso está en la oficina de Chela.", model: "Tano dice que le digas al inspector que el permiso está en la oficina de Chela." },
      { from: "Chela", text: "No se lo muestres todavía. Esperá a que yo llegue.", model: "Chela dice que no se lo muestres todavía, que esperes a que ella llegue." },
      { from: "Lu", text: "¿Por qué el inspector está acá?", model: "Lu pregunta por qué el inspector está allá." },
    ],
  },
];

export const FINAL_ROLES = [
  { name: "Inspector Ruiz", side: "Autoridad", brief: "Quiere volumen bajo desde las 23:30 y que la música termine a las 00:30. Pregunta si tienen permiso y pide que alguien firme un compromiso. Cede si le ofrecen algo concreto." },
  { name: "Doña Pilar", side: "Vecina de abajo", brief: "Está cansada y mañana trabaja temprano. Pregunta cuánto va a durar la fiesta y pide que no pongan los parlantes contra su ventana. Cede si la invitan a comer." },
  { name: "Tano", side: "Música", brief: "Quiere tocar hasta la 1:00. Pregunta si puede tocar acústico después de medianoche. Pide que el inspector escuche una canción antes de decidir." },
  { name: "Lu", side: "Comida", brief: "Ofrece empanadas a cambio de calma. Pregunta si Pilar quiere bajar a probarlas." },
];

export const FINAL_CHECKLIST = [
  "3 informaciones con «dice que» + indicativo",
  "3 pedidos u órdenes con «dice / pide que» + subjuntivo",
  "2 preguntas con «pregunta si» / «pregunta qué, cuándo…»",
  "Al menos 2 cambios de persona o lugar (su, allá, ir, llevar…)",
  "Un acuerdo final",
];

export const PHRASE_BANK = {
  TRANSMITIR: ["Dice que…", "Te pide que…", "Quiere saber si…", "Me pregunta cuándo…", "Dice que por favor…"],
  MEDIAR: ["Él propone que…", "Ella acepta siempre que…", "¿Y si…?", "Lo que les pide es que…"],
  "GANAR TIEMPO": ["A ver, te explico…", "Lo que quiso decir es que…", "Esperá, que te lo repito."],
};

export const EXIT_QUESTIONS = [
  "¿Qué cambia cuando el mensaje es una orden y no una información?",
  "Contá un recado real que te encargaron esta semana: ¿qué te pidieron exactamente?",
  "Si fueras recadero en tu ciudad, ¿qué barrio sería el más difícil? ¿Por qué?",
];

export const CORRECT_LINES = [
  "¡Recado entregado! +10 fichas.",
  "Carga perfecta, ni una caja rota. +10",
  "El barrio te aplaude. +10",
];

export const REWARD = { answer: 10, delivery: 20, missionSaved: 100, missionPartial: 60 };
export const MAX_RESPECT = 3;

// A wrong first attempt costs half a star; correcting it gives the star back.
export function applyAnswer(state, key, correct) {
  const tried = state.attempts[key] || 0;
  const alreadySolved = Boolean(state.solved[key]);
  if (alreadySolved) return state;
  const attempts = { ...state.attempts, [key]: tried + 1 };
  if (!correct) {
    const penalty = tried === 0 ? 0.5 : 0;
    return { ...state, attempts, respect: Math.max(0, state.respect - penalty), crossed: { ...state.crossed, [key]: true } };
  }
  const refund = state.crossed[key] ? 0.5 : 0;
  return {
    ...state,
    attempts,
    solved: { ...state.solved, [key]: true },
    coins: state.coins + REWARD.answer,
    respect: Math.min(MAX_RESPECT, state.respect + refund),
  };
}

export function applyDelivery(state, key, delivered, bonus = 0) {
  const previous = state.deliveries[key];
  if (previous === delivered) return state;
  const value = REWARD.delivery + bonus;
  const coins = state.coins + (delivered ? value : previous ? -value : 0);
  return { ...state, coins, deliveries: { ...state.deliveries, [key]: delivered } };
}

export function missionVerdict(checkedCount) {
  if (checkedCount >= 5) return { id: "saved", title: "FIESTA SALVADA", copy: "Leyenda en camino.", reward: REWARD.missionSaved };
  if (checkedCount >= 3) return { id: "partial", title: "La fiesta sigue… a media luz", copy: "Casi. Repasá lo que faltó en la checklist.", reward: REWARD.missionPartial };
  return { id: "retry", title: "Recado pendiente", copy: "Repetí la nota de voz con la chuleta abierta.", reward: 0 };
}

export function rankFor(coins) {
  if (coins >= 310) return "Leyenda de Puerto Neón";
  if (coins >= 160) return "Recadero de confianza";
  return "Novato de esquina";
}

export function initialState() {
  return { coins: 0, respect: MAX_RESPECT, attempts: {}, solved: {}, crossed: {}, deliveries: {} };
}
