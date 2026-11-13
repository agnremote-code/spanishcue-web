// HR Crisis · the two candidates of mission 1. Whatever the student asks is
// classified (evaluar.mjs intentOf) and the candidate answers in the band of
// the level: a (A1–A2) short and slow, b (B1–B2) natural, c (C1) with nuance
// and subtext. The facts never change between levels, only the language.

export const CANDIDATES = {
  bruno: {
    nombre: { a: 'Me llamo Bruno Salvatierra. Soy el mejor candidato.', b: 'Bruno Salvatierra, encantado. Le adelanto que soy exactamente lo que esta empresa necesita.', c: 'Bruno Salvatierra. Aunque, sinceramente, mi currículum habla por mí mejor que yo… y eso que yo hablo muy bien.' },
    experiencia: { a: 'Trabajo en muchas empresas. Cinco empresas en tres años.', b: 'He trabajado en cinco empresas en los últimos tres años. En todas me fui porque no estaban a mi nivel.', c: 'He pasado por cinco empresas en tres años. Digamos que no encontraban la manera de aprovechar mi talento… y alguna me lo dijo por escrito.' },
    estudios: { a: 'Estudio un curso de marketing en internet. Dos semanas.', b: 'Hice un curso online de marketing de dos semanas. Lo dejé a la mitad porque ya lo sabía todo.', c: 'Tengo formación autodidacta, que es la más exigente. Bueno, y un curso online que no llegué a terminar por falta de retos.' },
    idiomas: { a: 'Hablo cuatro idiomas. Bueno… español y un poco de inglés de películas.', b: 'Hablo cuatro idiomas… bueno, español perfecto, inglés de series y un poco de italiano de pizzería.', c: 'En el currículum puse cuatro idiomas. Si somos estrictos, español nativo y un inglés más bien cinematográfico.' },
    fortalezas: { a: 'Soy perfecto. Trabajo mucho. Soy muy simpático.', b: 'Soy líder nato, muy carismático y aprendo rápido. Mis jefes anteriores no lo vieron, pero es así.', c: 'Liderazgo, carisma y una capacidad de persuasión que mis antiguos jefes calificaron de «agotadora». Yo prefiero llamarla «intensa».' },
    debilidades: { a: '¿Defectos? Trabajo demasiado. Soy demasiado perfecto.', b: 'Mi único defecto es que soy demasiado perfeccionista. Y a veces llego tarde, pero porque pienso mucho.', c: 'El clásico: soy demasiado perfeccionista. Si quiere uno más honesto… me cuesta aceptar que alguien sepa más que yo.' },
    disponibilidad: { a: 'Puedo empezar hoy. ¡Ahora!', b: 'Puedo empezar hoy mismo. De hecho, ya traje mi taza.', c: 'Hoy mismo. Mi último empleo terminó de forma… repentina, así que tengo agenda libre.' },
    salario: { a: 'Quiero cuatro mil euros al mes. Y un coche.', b: 'Pido cuatro mil euros al mes, coche de empresa y un despacho con ventana. No es negociable.', c: 'Cuatro mil al mes, coche y despacho con ventana. Entiendo que la banda del puesto es de dos mil, pero con talento las bandas se estiran.' },
    motivacion: { a: 'Me gusta la empresa. El edificio es bonito.', b: 'La verdad, vi la oferta ayer y la oficina queda cerca de mi casa. Y me encanta el café de recepción.', c: 'Busco un proyecto a la altura de mi ambición. Y, no le voy a mentir, la oficina queda a diez minutos de mi gimnasio.' },
    conflicto: { a: 'Yo no tengo problemas. Los otros tienen problemas conmigo.', b: 'Yo nunca tengo conflictos. Los demás tienen conflictos conmigo, que es distinto.', c: 'Conflictos no tengo; tengo opiniones firmes que algunos interpretan como conflictos. En mi último trabajo, por ejemplo, el equipo entero pidió cambiarse de planta.' },
    ilegal: { a: 'Eh… ¿por qué me pregunta eso? Eso no es importante para el trabajo.', b: 'Perdone, pero eso es personal y no tiene nada que ver con el puesto.', c: 'Con todo respeto, esa pregunta no es legal en una entrevista. Voy a fingir que no la he oído.' },
    nada: { a: 'Perdón, no entiendo. ¿Otra pregunta?', b: 'Perdone, no entiendo bien la pregunta. ¿Puede formularla de otra manera?', c: 'Me temo que no capto el sentido de la pregunta. ¿Podría reformularla?' },
  },
  lucia: {
    nombre: { a: 'Hola… perdón, estoy nerviosa. Me llamo Lucía Ferrán.', b: 'Lucía Ferrán, mucho gusto. Perdone, se me han caído los papeles… estoy un poco nerviosa.', c: 'Lucía Ferrán. Disculpe los nervios: llevo una semana preparando esta entrevista y ahora me tiemblan las manos.' },
    experiencia: { a: 'Trabajo en una empresa de logística. Seis años. Soy asistente de Recursos Humanos.', b: 'Llevo seis años como asistente de Recursos Humanos en una empresa de logística con trescientos empleados.', c: 'Seis años en una empresa de logística de trescientas personas. Empecé archivando contratos y acabé coordinando la selección de todo el almacén.' },
    estudios: { a: 'Estudié Psicología. Y un máster de Recursos Humanos.', b: 'Estudié Psicología y después hice un máster en Dirección de Recursos Humanos.', c: 'Soy licenciada en Psicología, con un máster en Dirección de Personas. Estudié psicología porque me interesa entender por qué la gente se va de una empresa.' },
    idiomas: { a: 'Hablo español, catalán e inglés. Y un poco de portugués.', b: 'Español y catalán nativos, inglés B2 y un poco de portugués, porque mi abuela es de Oporto.', c: 'Español y catalán como lenguas maternas, inglés profesional y un portugués de sobremesa familiar: mi abuela es de Oporto.' },
    fortalezas: { a: 'Soy organizada. Escucho a las personas.', b: 'Soy muy organizada y sé escuchar. En mi empresa la gente venía a mi mesa a contarme sus problemas.', c: 'Organización y escucha. Tiendo a detectar los conflictos antes de que estallen, lo cual en logística es casi un superpoder.' },
    debilidades: { a: 'No sé decir que no. Trabajo muchas horas.', b: 'Me cuesta decir que no y acabo haciendo el trabajo de otros. Estoy aprendiendo a poner límites.', c: 'Me cuesta delegar y decir que no; durante años confundí ser útil con estar disponible siempre. Ahora lo trabajo con una mentora.' },
    disponibilidad: { a: 'Puedo empezar en quince días.', b: 'Tengo que avisar con quince días de antelación, así que podría empezar el día uno del mes que viene.', c: 'Quiero salir bien de mi empresa actual, así que necesito quince días de preaviso. A partir del día uno, toda suya.' },
    salario: { a: 'Quiero dos mil doscientos euros al mes.', b: 'Mi expectativa son dos mil doscientos euros brutos al mes, aunque estoy abierta a hablarlo.', c: 'Alrededor de dos mil doscientos brutos mensuales. Valoro también la formación y la flexibilidad horaria, así que hay margen para negociar.' },
    motivacion: { a: 'Me gusta su empresa. Quiero aprender más.', b: 'Quiero un puesto con más responsabilidad. Y me han dicho que aquí hay mucho trabajo por hacer… bastante caos.', c: 'Busco un reto real. Me han contado que aquí la gestión de personas es… mejorable, y eso para mí es una oportunidad, no un problema.' },
    conflicto: { a: 'Dos equipos del almacén tienen un problema con los horarios. Yo hablo con todos y hago un calendario nuevo.', b: 'Una vez dos equipos del almacén se peleaban por los turnos de verano. Hablé con cada equipo por separado y propuse un calendario rotativo. Funcionó.', c: 'Dos turnos del almacén estaban en guerra por las vacaciones de agosto. Organicé una reunión con cada turno, saqué los datos de los últimos cinco veranos y propuse un sistema rotativo. Hubo quejas una semana; después, nadie volvió a pelearse.' },
    ilegal: { a: 'Eh… eso es personal. ¿Es importante para el trabajo?', b: 'Prefiero no contestar a eso. No creo que tenga relación con el puesto.', c: 'Entiendo que no lo pregunta con mala intención, pero no es una pregunta adecuada en una entrevista. Prefiero centrarme en mi perfil profesional.' },
    nada: { a: 'Perdón, no entiendo. ¿Puede repetir?', b: 'Perdone, no le he entendido. ¿Me lo puede preguntar de otra forma?', c: 'Disculpe, no estoy segura de entender la pregunta. ¿Podría reformularla?' },
  },
};

export const INTENT_LABELS = {
  nombre: 'presentación', experiencia: 'experiencia', estudios: 'estudios', idiomas: 'idiomas', fortalezas: 'puntos fuertes',
  debilidades: 'puntos débiles', disponibilidad: 'disponibilidad', salario: 'salario', motivacion: 'motivación', conflicto: 'gestión de conflictos',
};

export const bandOf = (level) => (level === 'C1' ? 'c' : level === 'B1' || level === 'B2' ? 'b' : 'a');

/** The candidate's answer to a classified question. */
export function answerFor(candidate, intent, level) {
  const c = CANDIDATES[candidate];
  if (!c) return '';
  return (c[intent ?? 'nada'] ?? c.nada)[bandOf(level)];
}
