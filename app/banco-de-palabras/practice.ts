import type { WordCard } from "./data";

// Models for oral comparison, not an exhaustive answer key. The teacher accepts
// other natural completions and can credit an equivalent lexical expression.
export type LexicalPractice = {
  answer: string;
  combination: string;
  hint: string;
  register: "neutral" | "regional" | "contextual";
  use?: string;
};
const entries: [number, string, string, string][] = [
  [1, "el enchufe", "conectar el cargador al enchufe", "Busca un objeto de la pared; recuerda el artículo."],
  [2, "el estante", "poner los libros en el estante", "Es un lugar para apoyar objetos; incluye el artículo."],
  [3, "la toalla", "secarse con una toalla", "Piensa en lo que usas después de ducharte."],
  [4, "hacer la cama", "hacer la cama antes de salir", "Necesitas una expresión con hacer."],
  [5, "guardar", "guardar las llaves en el cajón", "Piensa en poner algo a resguardo; usa un infinitivo."],
  [6, "ordenar", "ordenar la habitación", "La idea es poner cada cosa en su lugar."],
  [7, "quedarme sin", "quedarse sin batería", "Habla de lo que te pasa a ti: adapta el pronombre."],
  [8, "arreglar", "arreglar una lámpara", "La lámpara no funciona; necesita una reparación."],
  [9, "cómodo", "un sillón cómodo", "El adjetivo describe un departamento: masculino singular."],
  [10, "desordenada", "una habitación desordenada", "El adjetivo describe la habitación: femenino singular."],
  [11, "la esquina", "en la esquina de dos calles", "Las calles se encuentran allí; incluye el artículo."],
  [12, "cuadra", "a dos cuadras de aquí", "El artículo una ya está escrito."],
  [13, "la vereda", "caminar por la vereda", "Busca el espacio por donde caminan las personas."],
  [14, "cruzar", "cruzar la avenida", "Hay que pasar de un lado al otro."],
  [15, "doblá", "doblar a la derecha", "Da una indicación: puedes usar vos, tú o usted."],
  [16, "la parada", "la parada del colectivo", "Es el lugar donde esperas el transporte."],
  [17, "un embotellamiento", "un embotellamiento en la autopista", "Presenta algo nuevo con hay: usa un artículo indefinido."],
  [18, "queda cerca", "queda cerca de la estación", "El lugar está a poca distancia; mantén la expresión completa."],
  [19, "tomar el metro", "tomar el metro hasta el centro", "Nombra la acción y el transporte juntos."],
  [20, "barrio", "un barrio bien conectado", "Tu ya acompaña al nombre: no repitas el artículo."],
  [21, "pedir", "pedir la sopa del día", "Es lo que haces cuando eliges la comida del menú."],
  [22, "probar", "probar un plato típico", "Quieres conocer el sabor por primera vez."],
  [23, "picante", "una salsa muy picante", "El sabor produce una sensación ardiente."],
  [24, "plato", "el plato del día", "Aquí se habla de una preparación; el artículo ya está."],
  [25, "los cubiertos", "traer los cubiertos", "Faltan el tenedor, el cuchillo y la cuchara."],
  [26, "la cuenta", "pedir la cuenta", "Es el total que pagas al terminar de comer."],
  [27, "estar lleno", "estar lleno después de comer", "Usa estar y adapta el adjetivo a quien habla."],
  [28, "tener hambre", "tener hambre después de hacer ejercicio", "Esta sensación se expresa con tener."],
  [29, "para llevar", "un café para llevar", "La comida se consume fuera del local."],
  [30, "sin", "un café sin azúcar", "Excluye un ingrediente; no añadas puntos suspensivos."],
  [31, "el equipaje", "dejar el equipaje en el hotel", "Nombra el conjunto de bolsos y valijas."],
  [32, "el alojamiento", "reservar alojamiento", "Necesitas un lugar donde dormir durante el viaje."],
  [33, "reservar", "reservar una habitación", "Quieres asegurar una habitación para una fecha."],
  [34, "perderse", "perderse en una ciudad", "Recuerda el pronombre del verbo en infinitivo."],
  [35, "el retraso", "dos horas de retraso", "La salida ocurre más tarde de lo previsto."],
  [36, "ida y vuelta", "un pasaje de ida y vuelta", "La expresión incluye salir y regresar."],
  [37, "hacer escala", "hacer escala en Lima", "Usa hacer para la parada intermedia."],
  [38, "sacar una foto", "sacar una foto desde el mirador", "Nombra la acción con cámara o teléfono."],
  [39, "llegar a tiempo", "llegar a tiempo al aeropuerto", "No basta llegar: incluye la relación con el horario."],
  [40, "la puerta de embarque", "cambiar la puerta de embarque", "Usa el nombre completo del acceso al avión."],
  [41, "emocionada", "estar emocionada por un viaje", "Se refiere a ella: adapta el final del adjetivo."],
  [42, "preocupado", "estar preocupado por el examen", "Puedes adaptar el género a tu interlocutor."],
  [43, "orgullosos", "estar orgulloso de alguien", "Habla de sus padres: plural. Recuerda la preposición de."],
  [44, "frustrado", "sentirse frustrado después de varios intentos", "Adapta el género a la persona que imaginas."],
  [45, "darse cuenta", "darse cuenta de un error", "La expresión se combina con de o de que."],
  [46, "tener ganas de", "tener ganas de aprender", "La preposición va dentro de la expresión."],
  [47, "echar de menos", "echar de menos a mis amigos", "Nombra la expresión completa para sentir una ausencia."],
  [48, "llevarse bien", "llevarse bien con alguien", "Recuerda el pronombre y la combinación con con."],
  [49, "dar vergüenza", "me da vergüenza hablar en público", "La situación produce la sensación: usa dar."],
  [50, "estar de buen humor", "estar de buen humor por la mañana", "Mantén la expresión completa con estar."],
  [51, "tarea", "terminar una tarea", "La primera ya acompaña al nombre."],
  [52, "la reunión", "cambiar la fecha de la reunión", "Es un encuentro de trabajo; incluye el artículo."],
  [53, "el plazo", "ampliar el plazo de entrega", "Habla del tiempo disponible para terminar algo."],
  [54, "entregar", "entregar un informe", "El proyecto terminado llega a quien lo espera."],
  [55, "los apuntes", "tomar y revisar apuntes", "Son las notas de la clase; usa el plural."],
  [56, "rendir un examen", "rendir un examen el lunes", "Es una expresión completa para presentarse a una evaluación."],
  [57, "ponerme al día", "ponerse al día con los correos", "El sujeto de debo es yo: adapta el pronombre."],
  [58, "resolver", "resolver un problema", "Hay que encontrar la solución."],
  [59, "tener pendientes", "tener pendiente una tarea", "Muchas tareas exige el adjetivo en plural."],
  [60, "concentrarme", "concentrarse en una tarea", "El sujeto de apago es yo: adapta el pronombre."],
];
export const lexicalPractice: Record<number, LexicalPractice> = Object.fromEntries(
  entries.map(([id, answer, combination, hint]) => [id, { answer, combination, hint, register: "neutral" as const }]),
);
Object.assign(lexicalPractice[15], { register: "contextual", use: "El modelo usa vos: doblá. Con tú: dobla; con usted: doble. Elige el trato adecuado para la persona." });
Object.assign(lexicalPractice[25], { register: "contextual", use: "En el restaurante, por favor suaviza el pedido. Con usted: ¿Nos puede traer los cubiertos, por favor?" });
Object.assign(lexicalPractice[26], { register: "contextual", use: "La cuenta, por favor es un pedido breve y cortés. También puedes decir: ¿Me trae la cuenta, por favor?" });
Object.assign(lexicalPractice[38], { register: "contextual", use: "A alguien de confianza: ¿Nos podés sacar una foto? A una persona que tratas de usted: ¿Nos puede sacar una foto, por favor?" });
Object.assign(lexicalPractice[56], { register: "regional", use: "La tarjeta original señala el uso frecuente en Argentina. También se usa hacer un examen; el profesor acepta la variante habitual del alumno." });
export const completedGap = (card: WordCard) => card.gap.replace("___", lexicalPractice[card.id].answer);

export const oralScenes = {
  casa: { situation: "Llega una visita a tu casa y hay un problema con la habitación. Explica el problema y acuerda una solución.", followup: "Tu visita necesita descansar ahora. ¿Qué puedes preparar primero?" },
  ciudad: { situation: "Una persona acaba de llegar a tu barrio. Ayúdala a encontrar un lugar y a elegir cómo llegar.", followup: "Una calle está cerrada. Propón otro camino y comprueba que te entendió." },
  comida: { situation: "Pide algo en un restaurante, pregunta por un detalle y acuerda el pedido con quien te atiende.", followup: "No queda tu primera opción. Pide una alternativa y confirma el pedido." },
  viaje: { situation: "Organiza un viaje con otra persona. Explica una necesidad y acuerda un plan práctico.", followup: "El horario cambia. Explica qué harás y confirma el nuevo plan." },
  emociones: { situation: "Cuenta a alguien cómo te sientes ante un cambio. Da una razón y escucha su propuesta.", followup: "Tu interlocutor se siente de otra manera. Hazle una pregunta y busca algo que puedan hacer juntos." },
  estudio: { situation: "Organiza una semana de trabajo o estudio con otra persona. Acuerden qué hacer primero y cuándo.", followup: "Aparece una tarea urgente. Propón un cambio y confirma el acuerdo." },
};
