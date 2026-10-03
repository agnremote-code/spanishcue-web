import type { SyntaxDecision, SyntaxRepair } from './data';

export const repairedSlugs = ['antes-despues-cuando', 'pero-hay-un-matiz', 'la-persona-que-tengo-en-mente'];
export function accepts(item: SyntaxDecision | SyntaxRepair, option: number | null) {
  return option !== null && Number.isInteger(option) && option >= 0 && option < item.options.length && (item.accepted ?? [item.correct]).includes(option);
}
export function sentence(item: SyntaxDecision | SyntaxRepair, option: number) {
  if (!Number.isInteger(option) || option < 0 || option >= item.options.length) return '';
  return 'left' in item ? [item.left, item.options[option], item.right].join(' ') : item.options[option];
}
// One focused clue per item. None requires the learner to read the full solution.
export const hints: Record<string, { decisions: string[]; repairs: string[] }> = {
  'antes-despues-cuando': {
    decisions: ['Ubica la ducha en la secuencia: ¿ocurre primero o al final?', 'Los platos se lavan cuando la cena ya terminó.', 'El segundo verbo ya está conjugado: llego.', 'La mochila tiene que estar lista al salir.', 'Primero estás dentro del tren; buscas la salida al bajar.', 'El inicio de la reunión es el momento que activa tu hábito.', 'No se cocinan las verduras hasta terminar de cortarlas.', 'La jornada ya terminó al hacer la llamada.', 'Viajas y escuchas música como hábito en el mismo período.', 'Necesitas saber la dirección para pedir el taxi.'],
    repairs: ['Fíjate en la forma del verbo que sigue a la preposición.', 'Conserva el orden: terminar primero, llamar después.', 'La consigna pide conservar el enlace original y corregir solo el verbo.', 'La frase original es válida: cambia el punto de partida, no los hechos.'],
  },
  'pero-hay-un-matiz': {
    decisions: ['El contexto descarta las dos causas por igual.', 'El resultado positivo limita la impresión de dificultad.', 'La reserva es un adjetivo, no otra oración completa.', 'El verbo ya está negado: faltan los dos medios descartados.', 'Lejos no significa necesariamente mal conectado.', 'La segunda afirmación limita el valor de la popularidad.', 'La duración es una reserva sobre una reunión productiva.', 'La autonomía responde a la objeción de aislamiento.', 'La lentitud limita la valoración positiva; no es su consecuencia.', 'Pablo y Lucía quedan descartados por igual.'],
    repairs: ['Separa las dos afirmaciones y marca la pausa del conector.', 'La original ya es válida; conserva la negación del verbo al reformular.', 'El contexto afirma los dos rasgos; no niegues ninguno.', 'Precio alto y buen transporte son hechos afirmados en esta situación.'],
  },
  'la-persona-que-tengo-en-mente': {
    decisions: ['El dato selecciona a una compañera entre dos, sin coma.', 'El café es un lugar, pero aquí el relativo es el sujeto de abre.', 'La mochila es la cosa comprada, no una persona.', 'La coma anuncia información adicional sobre una persona conocida. Puede haber más de una opción válida.', 'El documento es lo que fue enviado.', 'El hábito permite reconocer a un vecino entre otros.', 'La acción futura distingue a una guía entre varias.', 'La película es la cosa recomendada.', 'La información entre comas no elige entre varios Marios. Puede haber más de una opción válida.', 'El pueblo es el sujeto de aparece y ya está nombrado.'],
    repairs: ['Comprueba quién vive en cada ciudad según la consigna.', 'Necesitas nombrar el establecimiento del que hablas.', 'Compara lugar y turno: cada dato por separado deja dos candidatas.', 'Conserva las dos comas: el dato sigue siendo adicional.'],
  },
};
export const timelineEvents = [
  { id: 'wake', text: 'Me levanto', time: '7:00' },
  { id: 'dress', text: 'Me visto', time: '7:10' },
  { id: 'breakfast', text: 'Desayuno', time: '7:30' },
  { id: 'leave', text: 'Salgo de casa', time: '8:00' },
];
export const candidates = [
  { name: 'Ana', place: 'recepción', shift: 'noche' },
  { name: 'Eva', place: 'recepción', shift: 'día' },
  { name: 'Luz', place: 'cocina', shift: 'noche' },
];
export function matchingCandidates(clues: boolean[]) {
  return candidates.filter(person => (!clues[0] || person.place === 'recepción') && (!clues[1] || person.shift === 'noche'));
}
export const contrastTask: SyntaxRepair = {
  prompt: 'El precio y la distancia son aceptables. Ahora descubres que el horario es imposible. Cambia el balance sin negar el nuevo dato.',
  original: 'El precio y la distancia no son un problema.',
  options: ['El horario tampoco es un problema.', 'El plan parece viable. Sin embargo, el horario es imposible.', 'El horario es cómodo, aunque imposible.'],
  correct: 1,
  hint: 'La nueva dificultad tiene que aparecer como un hecho afirmado.',
  feedback: 'El nuevo dato limita la valoración positiva. Se mantiene que precio y distancia son aceptables, pero el horario cambia la decisión.',
};
export const oralGuidance: Record<string, { criteria: string[]; change: string; help: string; recap: string }> = {
  'antes-despues-cuando': {
    criteria: ['La secuencia de seis acciones se entiende.', 'Usa antes de / después de con infinitivo y cuando habitual con presente.', 'Responde al cambio de horario sin invertir los hechos.'],
    change: 'Tu transporte sale quince minutos antes. ¿Qué acción adelantas y qué haces después?',
    help: 'Antes de salir, reviso la mochila. Después de vestirme, desayuno. Cuando llego, aviso.',
    recap: 'Vuelve al desayuno y la salida del inicio: di el mismo orden empezando por la otra acción.',
  },
  'pero-hay-un-matiz': {
    criteria: ['Distingue los hechos afirmados de las dos opciones negadas.', 'Usa un contrapeso y una reserva breve, con pausas claras.', 'Responde al nuevo dato y reformula su decisión.'],
    change: 'El plan que prefieres ahora cuesta el doble y tarda menos. ¿Cambia tu postura? ¿Qué dos objeciones descartas?',
    help: 'No me preocupan ni el precio ni la distancia. Es cómodo, aunque pequeño. Tiene ventajas. Sin embargo, el horario…',
    recap: 'Retoma precio, distancia y horario: explica qué cambió y qué dos datos no eran el problema.',
  },
  'la-persona-que-tengo-en-mente': {
    criteria: ['El interlocutor puede identificar una persona, un lugar y una cosa.', 'Las relativas se unen a un antecedente claro; las aclaraciones se distinguen con pausas.', 'Repara un candidato equivocado con un dato pertinente.'],
    change: 'El docente propone una persona, un lugar u objeto parecido, pero equivocado. Añade un dato que permita distinguirlo.',
    help: 'Busco a la persona que trabaja de noche. Ana, que trabaja en recepción, puede ayudar. Ana, quien trabaja en recepción, puede ayudar.',
    recap: 'Vuelve a Ana, Eva y Luz: identifica a una con dos datos sin decir su nombre.',
  },
};
