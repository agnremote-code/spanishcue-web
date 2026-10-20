import type { LiveLesson } from '../types';

/**
 * Lesson 153 · B2 · Futuro compuesto.
 * The team of a cultural centre (Paula, Marta, Luis) prepares an exhibition
 * opening on Friday: what will be done before it and what can only be guessed.
 */
export const lesson: LiveLesson = {
  id: 153,
  level: 'B2',
  title: 'Futuro compuesto',
  subtitle: 'Prever qué estará terminado antes de un momento futuro, hacer balance hasta una fecha y formular conjeturas sobre lo que ya pasó.',
  legend: [
    { tone: 'orange', label: 'Punto de referencia futuro' },
    { tone: 'teal', label: 'Acción terminada antes de ese punto' },
    { tone: 'blue', label: 'Balance acumulado hasta una fecha' },
    { tone: 'violet', label: 'Conjetura sobre algo que ya pasó' },
  ],
  optionNotes: {
    'terminaré': 'El futuro simple sitúa la acción en el futuro, pero no la presenta como terminada antes de un punto.',
    'habría terminado': 'El condicional compuesto mira desde el pasado o imagina. Aquí el punto de referencia es futuro.',
    'habrían terminado': 'El condicional compuesto mira desde el pasado o imagina. Aquí el punto de referencia es futuro.',
    'había terminado': 'El pluscuamperfecto cuenta algo anterior a otro hecho pasado. Aquí miramos hacia un momento futuro.',
    'haya terminado': 'El subjuntivo necesita un elemento que lo pida (cuando, ojalá, espero que…). En la oración principal va el indicativo.',
    'habrán terminados': 'Con «haber», el participio es invariable: «habrán terminado».',
    'hayan terminado': 'Después de «cuando» con valor futuro sí va el subjuntivo, pero en la oración principal va el futuro compuesto.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Mirar atrás desde el futuro', coach: 'Ponte en un momento futuro y mira hacia atrás.',
      steps: [
        { title: 'La forma: habré + participio · The form: habré + past participle', blocks: [
          { kind: 'lead', text: 'El viernes se abre una exposición en el centro cultural. Paula, la coordinadora, se imagina el **jueves por la tarde** y mira hacia atrás: ¿qué estará ya hecho? Para eso usa el **futuro compuesto**.', en: 'An exhibition opens at the cultural centre on Friday. Paula, the coordinator, pictures herself on Thursday afternoon and looks back: what will already be done by then? To talk about that she uses the future perfect (futuro compuesto).' },
          { kind: 'guide', text: { teacher: 'Lean la tabla por filas; tu alumno forma una frase con cada persona sobre la próxima semana.', self: 'Lee la tabla y fíjate en qué parte cambia con la persona. Después di una frase con «yo» y otra con «nosotros».' } },
          { kind: 'table', title: 'Futuro de «haber» + participio', head: ['Persona', 'hablar', 'comer', 'vivir'], rows: [
            ['yo', '**habré** hablado', '**habré** comido', '**habré** vivido'],
            ['tú', '**habrás** hablado', '**habrás** comido', '**habrás** vivido'],
            ['él / ella / usted', '**habrá** hablado', '**habrá** comido', '**habrá** vivido'],
            ['nosotros / nosotras', '**habremos** hablado', '**habremos** comido', '**habremos** vivido'],
            ['vosotros / vosotras', '**habréis** hablado', '**habréis** comido', '**habréis** vivido'],
            ['ellos / ellas / ustedes', '**habrán** hablado', '**habrán** comido', '**habrán** vivido'],
          ], note: '«Haber» es irregular en futuro: **habr-** (no «haberé»). El participio no cambia: «habrán comprobado», nunca «comprobados».' },
          { kind: 'table', title: 'Participios irregulares que vas a necesitar', head: ['Infinitivo', 'Participio', 'Ejemplo'], rows: [
            ['hacer', '**hecho**', 'Para el lunes habré hecho la maleta.'],
            ['poner', '**puesto**', 'Habrán puesto los carteles.'],
            ['ver', '**visto**', 'Ya habrás visto el correo.'],
            ['decir', '**dicho**', 'Se lo habrá dicho su jefa.'],
            ['escribir · abrir · volver', '**escrito · abierto · vuelto**', 'A las nueve habrán vuelto.'],
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Para el jueves, los voluntarios ___ las entradas.', options: ['habrán preparado', 'habrán preparados', 'haberán preparado'], answer: 0, why: '«Habrán» + participio invariable.', en: 'By Thursday the volunteers will have the tickets ready. Watch the form of the participle.' },
            { prompt: 'Cuando llegues, ya ___ la cena.', options: ['habré hacido', 'habré hecho', 'habría hecho'], answer: 1, why: 'Participio irregular de «hacer»: «hecho».', en: 'When you arrive, dinner will already be done. Which participle of «hacer» is correct?' },
            { prompt: '¿Qué parte de «habremos vivido» cambia con la persona?', options: ['«habremos»', '«vivido»', 'Las dos'], answer: 0, why: 'Solo se conjuga «haber».', en: 'Which part of «habremos vivido» changes with the person?' },
          ] },
        ] },
        { title: 'Terminado antes de un punto futuro · Done before a future point', mascot: '/brand/mascot/studying.webp', coach: 'Primero el punto; después, lo que estará hecho.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'ANTERIORIDAD FUTURA', question: '¿Qué estará hecho para entonces?', en: 'Choose a moment in the future and look back from it: the action will already be finished at that point. English does the same with “will have done”: “By Thursday afternoon the team will have put up all the panels.”', formula: ['para + fecha / hora + habré + participio', 'cuando + subjuntivo, habré + participio'],
            meaning: 'Elegimos un **momento futuro** y presentamos una acción como **ya terminada** en ese momento. La acción ocurre antes del punto de referencia.',
            examples: [
              { es: '[[Para el jueves por la tarde|orange]], el equipo [[habrá colocado|teal]] todos los paneles.', en: 'By Thursday afternoon the team will have put up all the panels.' },
              { es: '[[Cuando lleguen los invitados|orange]], los voluntarios ya [[habrán comprobado|teal]] la lista.', en: 'When the guests arrive, the volunteers will already have checked the list.' },
              { es: '[[A esta hora mañana|orange]] [[habré llegado|teal]] a Bogotá.', en: 'This time tomorrow I will have arrived in Bogotá.' },
              { es: '[[Antes de las diez|orange]] [[habremos abierto|teal]] las puertas.', en: 'Before ten we will have opened the doors.' },
            ],
            note: 'Después de «cuando» con valor futuro va el **presente de subjuntivo** («cuando lleguen»), nunca el futuro.' },
          { kind: 'compare', title: 'Futuro simple o compuesto', columns: [
            { tone: 'neutral', label: 'FUTURO SIMPLE', sentence: 'El jueves **colocaremos** los paneles.', idea: 'La acción ocurre el jueves.', en: 'Simple future: the action takes place on Thursday itself (“we’ll put up the panels on Thursday”).' },
            { tone: 'teal', label: 'FUTURO COMPUESTO', sentence: '[[Para el jueves|orange]] [[habremos colocado|teal]] los paneles.', idea: 'El jueves la acción ya está terminada.', en: 'Future perfect: on Thursday the job is already finished (“by Thursday we’ll have put them up”).' },
          ] },
          { kind: 'tip', icon: '📍', title: 'Busca el punto de referencia', text: 'Casi siempre aparece: **para** el viernes, **antes de** junio, **cuando** lleguen, **a esta hora** mañana, **dentro de** dos años. Sin ese punto, la frase suele leerse como conjetura.', en: 'Look for the reference point. It is almost always there: para (by) Friday, antes de (before) June, cuando (when) they arrive, this time tomorrow, in two years’ time. Without it, the sentence is usually read as a guess.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Para junio, Ana ___ la carrera.', options: ['habrá terminado', 'terminaré', 'había terminado'], answer: 0, why: 'Acción terminada antes del punto futuro «junio».', en: 'Ana’s degree and a point in June: what will be the situation by then?' },
            { prompt: 'Cuando ___ a casa, ya habremos cenado.', options: ['llegarás', 'llegues', 'habrás llegado'], answer: 1, why: '«Cuando» con valor futuro pide presente de subjuntivo.', en: 'When you get home, we’ll have had dinner. Which form goes after «cuando» with a future meaning?' },
          ] },
        ] },
        { title: 'El balance hasta una fecha · Taking stock up to a date', mascot: '/autoestudio/mascot/noting.webp', coach: 'Contamos lo acumulado.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'BALANCE FUTURO', question: '¿Cuánto habrá sumado para entonces?', en: 'Here the future perfect adds things up: how much time, distance, reading or visitors will have built up by a future date. The action may well carry on afterwards, just as in “By December we’ll have lived here for a year”.', formula: ['en / para + fecha + habré + participio + cantidad'],
            meaning: 'Hace **balance** de lo acumulado desde antes hasta un momento futuro: tiempo vivido, kilómetros, páginas, visitantes. La acción puede seguir después.',
            examples: [
              { es: '[[En diciembre|orange]] [[habremos vivido|blue]] un año en esta ciudad.', en: 'In December we will have lived in this city for a year.' },
              { es: '[[Al final de la exposición|orange]] la sala [[habrá recibido|blue]] más de cinco mil visitantes.', en: 'By the end of the exhibition the gallery will have had more than five thousand visitors.' },
              { es: '[[Para el domingo|orange]] [[habré corrido|blue]] cien kilómetros este mes.', en: 'By Sunday I will have run a hundred kilometres this month.' },
            ] },
          { kind: 'tip', icon: '🧮', title: 'Muy útil en informes', text: 'El balance futuro es frecuente en informes, discursos y despedidas: «**Cuando me jubile, habré trabajado** treinta años en esta escuela».', en: 'Very useful in reports. Taking stock with the future perfect is common in reports, speeches and farewells: “When I retire, I will have worked at this school for thirty years.”' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'El sábado ___ diez años casados.', options: ['habremos estado', 'estaríamos', 'habíamos estado'], answer: 0, why: 'Balance acumulado hasta un momento futuro (el sábado).', en: 'On Saturday it’s their tenth wedding anniversary: add up the years until then.' },
            { prompt: '«En marzo habré leído veinte novelas este año.» ¿Qué expresa?', options: ['Una suma hasta marzo.', 'Lo que leeré en marzo.', 'Una suposición sobre el pasado.'], answer: 0, why: 'Es un balance acumulado hasta un punto futuro.', en: '“By March I’ll have read twenty novels this year.” What does it express?' },
          ] },
        ] },
        { title: 'La conjetura sobre el pasado · Guessing about the past', mascot: '/brand/mascot/speaking.webp', coach: 'No lo sabes: lo supones.', blocks: [
          { kind: 'concept', tone: 'violet', label: 'CONJETURA', question: '¿Qué habrá pasado?', en: 'The same tense can express a guess about something that has just happened. There is no future point: there is some evidence (someone isn’t answering, something is missing) and a likely but unconfirmed explanation. English uses “must have” or “I suppose … has”: “He must have used another link.”', formula: ['habrá + participio (= seguramente / supongo que + ha + participio)'],
            meaning: 'El mismo tiempo sirve para **suponer** qué ocurrió hace poco. No hay punto futuro: hay una **evidencia** (alguien no contesta, algo no aparece) y una explicación probable, sin confirmar.',
            examples: [
              { es: 'Las fotos no están en la carpeta. [[Habrá usado|violet]] otro enlace.', en: 'The photos aren’t in the folder. He must have used another link.' },
              { es: 'No contesta el teléfono: se [[habrá quedado|violet]] dormido.', en: 'She isn’t answering the phone: she must have fallen asleep.' },
              { es: '¿Dónde [[habré puesto|violet]] las llaves?', en: 'Where can I have put my keys?' },
              { es: 'Llegan muy contentos. [[Habrán ganado|violet]] el partido.', en: 'They’re arriving in a great mood. They must have won the match.' },
            ] },
          { kind: 'compare', title: 'Misma forma, dos lecturas', columns: [
            { tone: 'teal', label: 'PREVISIÓN', sentence: '[[Para mañana|orange]] [[habrá terminado|teal]].', idea: 'Una tarea que estará hecha antes de un punto futuro.', en: 'Forecast: a task that will be finished before a point in the future (“it will have finished by tomorrow”).' },
            { tone: 'violet', label: 'CONJETURA', sentence: 'No responde; [[habrá terminado|violet]] ya.', idea: 'Una explicación probable de algo que ya pasó.', en: 'Guess: a likely explanation of something that has already happened (“it must have finished already”).' },
          ] },
          { kind: 'tip', icon: '⚠', title: 'Una suposición no es un dato', text: 'En el trabajo conviene **comprobar** una conjetura antes de actuar: «Habrá usado otro enlace, **pero voy a preguntarle**». Si quieres evitar la ambigüedad, puedes reformularla como pregunta: «¿Lo has compartido por otro canal?».', en: 'A guess is not a fact. At work it is wise to check a guess before acting on it: “He must have used another link, but I’ll ask him.” To avoid any ambiguity you can turn it into a question: “Did you share it another way?”' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Luis no ha llegado todavía. ___ el autobús.', options: ['Habrá perdido', 'Perderá', 'Habría perdido'], answer: 0, why: 'Conjetura sobre algo que acaba de ocurrir: «habrá + participio».', en: 'Luis hasn’t arrived yet. You guess why.' },
            { prompt: '«Habrá salido.» ¿Qué expresa sin ningún punto futuro?', options: ['Una suposición: probablemente ha salido.', 'Una salida prevista para mañana.', 'Una salida que no ocurrió.'], answer: 0, why: 'Sin punto de referencia futuro, se lee como conjetura.', en: 'With no future point at all, what does «Habrá salido» express?' },
          ] },
        ] },
        { title: 'Cómo elegir · How to choose', mascot: '/brand/mascot/seated.webp', coach: 'Busca el punto de referencia.', blocks: [
          { kind: 'decide', title: 'Lee una frase con «habrá + participio» y responde', steps: [
            { q: '¿Hay un momento futuro de referencia (para, cuando, antes de, a esta hora mañana)?', yes: 'next', no: 'Es una **conjetura** sobre algo que ya pasó: «No contesta; [[habrá salido|violet]]».' },
            { q: '¿Se suma una cantidad acumulada hasta ese momento (años, visitantes, kilómetros)?', yes: 'Es un **balance**: «[[En diciembre|orange]] [[habremos vivido|blue]] un año aquí».', no: 'Es una **acción terminada antes** del punto: «[[Para el jueves|orange]] [[habré enviado|teal]] la lista».' },
          ] },
          { kind: 'tip', icon: '🔭', title: 'Como extensión', text: 'En textos más complejos se combinan varios puntos: «Cuando ustedes lean este informe, el equipo ya **habrá cerrado** el presupuesto y **habrá empezado** la segunda fase». Basta con encontrar cada punto de referencia.', en: 'Going further. In longer texts several reference points are combined: “When you read this report, the team will already have closed the budget and started the second phase.” Just find each reference point.' },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Errores típicos con el futuro compuesto.', blocks: [
          { kind: 'guide', text: { teacher: 'Tu alumno corrige cada frase en voz alta y dice qué regla se rompió.', self: 'Lee cada frase, encuentra el error y di la versión correcta antes de tocar.' } },
          { kind: 'mistakes', title: '¿Dónde está el error?', items: [
            { wrong: 'Cuando habrás llegado, ya habremos cenado.', right: 'Cuando llegues, ya habremos cenado.', why: 'Después de «cuando» con valor futuro va el presente de subjuntivo.' },
            { wrong: 'Para el viernes haberé terminado.', right: 'Para el viernes habré terminado.', why: '«Haber» tiene raíz irregular en futuro: habr-.' },
            { wrong: 'Para junio habremos terminados el curso.', right: 'Para junio habremos terminado el curso.', why: 'El participio con «haber» es invariable.' },
            { wrong: 'Mañana a las seis terminaré ya el montaje.', right: 'Mañana a las seis ya habré terminado el montaje.', why: 'Con «ya» y un punto futuro, la acción se presenta como terminada: futuro compuesto.' },
            { wrong: 'No contesta. Habría perdido el teléfono.', right: 'No contesta. Habrá perdido el teléfono.', why: 'Para suponer sobre un pasado reciente, desde hoy, se usa el futuro compuesto.' },
            { wrong: 'Habrá usado otro enlace, así que la tarea está terminada.', right: 'Habrá usado otro enlace; voy a preguntarle para confirmarlo.', why: 'Una conjetura no confirma nada: no la presentes como un hecho.' },
          ] },
          { kind: 'teacher', text: 'Pide al alumno dos frases con la misma forma, «habrá llegado»: una previsión con un punto futuro y una conjetura sin él.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'El futuro compuesto en situaciones reales', coach: 'Toca las expresiones marcadas.',
      steps: [
        { title: 'Antes de abrir la exposición · Before the exhibition opens', blocks: [
          { kind: 'guide', text: { teacher: 'Lean la reunión con papeles. Después, el alumno toca cada expresión y explica si es una previsión, un balance o una conjetura.', self: 'Lee la reunión. Antes de tocar cada expresión, decide si es previsión, balance o conjetura.' } },
          { kind: 'explore', title: 'Reunión del martes', setting: 'Paula, la coordinadora del centro cultural, repasa con Marta las tareas para la inauguración del viernes.', lines: [
            { who: 'Paula', text: 'Vamos por partes. [[Para el jueves por la tarde|orange]], ¿qué [[habremos terminado|teal]]?', en: 'Let’s go step by step. By Thursday afternoon, what will we have finished?' },
            { who: 'Marta', text: 'El equipo de montaje [[habrá colocado|teal]] todos los paneles y [[habrá revisado|teal]] la iluminación.', en: 'The set-up team will have put up all the panels and checked the lighting.' },
            { who: 'Paula', text: '¿Y la lista de invitados?', en: 'And the guest list?' },
            { who: 'Marta', text: '[[Cuando lleguen los voluntarios|orange]], yo ya [[habré enviado|teal]] la lista definitiva.', en: 'By the time the volunteers arrive, I’ll already have sent the final list.' },
            { who: 'Paula', text: 'Perfecto. Oye, ¿y las fotos de Luis? Prometió enviarlas ayer y no están en la carpeta.', en: 'Great. Hey, what about Luis’s photos? He promised to send them yesterday and they’re not in the folder.' },
            { who: 'Marta', text: 'Qué raro. [[Habrá usado|violet]] otro enlace, como la otra vez.', en: 'That’s odd. He must have used another link, like last time.' },
            { who: 'Paula', text: 'Puede ser, pero no lo doy por hecho. Le escribo ahora mismo.', en: 'Could be, but I’m not taking it for granted. I’ll message him right now.' },
            { who: 'Marta', text: 'Por cierto, [[al final de esta exposición|orange]] el centro [[habrá organizado|blue]] veinte muestras en cinco años.', en: 'By the way, by the end of this exhibition the centre will have put on twenty shows in five years.' },
            { who: 'Paula', text: 'Y nosotras [[habremos sobrevivido|blue]] a veinte inauguraciones. ¡Merece una celebración!', en: 'And we will have survived twenty openings. That deserves a celebration!' },
            { who: 'Marta', text: 'Primero que lleguen las fotos.', en: 'First let’s get those photos.' },
          ], notes: {
            'Para el jueves por la tarde': 'El **punto de referencia futuro** desde el que Paula mira hacia atrás.',
            'habremos terminado': 'Paula pregunta qué tareas estarán **ya hechas** el jueves por la tarde.',
            'habrá colocado': '**Anterioridad futura**: la colocación de los paneles ocurrirá antes del jueves por la tarde.',
            'habrá revisado': 'Otra acción **terminada antes** del mismo punto. El participio no cambia.',
            'Cuando lleguen los voluntarios': 'Otro **punto futuro**. Después de «cuando», presente de subjuntivo: «lleguen».',
            'habré enviado': 'Marta presenta el envío como **terminado** cuando lleguen los voluntarios.',
            'Habrá usado': '**Conjetura**: no hay punto futuro. Marta explica con una suposición por qué no están las fotos.',
            'al final de esta exposición': 'El **punto futuro** para hacer balance.',
            'habrá organizado': '**Balance**: suma las muestras acumuladas hasta el final de esta exposición.',
            'habremos sobrevivido': 'Otro **balance**, con humor: veinte inauguraciones acumuladas.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Qué estará hecho el jueves por la tarde?', options: ['Los paneles y la iluminación.', 'Las fotos de Luis.', 'La celebración.'], answer: 0, why: '«Habrá colocado todos los paneles y habrá revisado la iluminación».', en: 'What will be done by Thursday afternoon?' },
            { prompt: '¿Sabe Marta por qué no llegaron las fotos?', options: ['No, solo lo supone.', 'Sí, Luis se lo dijo.', 'Sí, las fotos están en otra carpeta.'], answer: 0, why: '«Habrá usado otro enlace» es una conjetura; Paula decide confirmarlo.', en: 'Does Marta know why the photos didn’t arrive?' },
            { prompt: '¿Cuántas muestras habrá organizado el centro al final de esta exposición?', options: ['Veinte.', 'Cinco.', 'Una.'], answer: 0, why: '«El centro habrá organizado veinte muestras en cinco años».', en: 'How many exhibitions will the centre have held by the end of this one?' },
          ] },
        ] },
        { title: 'Esperando a Luis · Waiting for Luis', blocks: [
          { kind: 'explore', title: 'En la puerta del cine', setting: 'Elena y Sergio esperan a su amigo Luis. La película empieza en diez minutos.', lines: [
            { who: 'Elena', text: 'Son las ocho y diez y Luis no aparece.', en: 'It’s ten past eight and there’s no sign of Luis.' },
            { who: 'Sergio', text: 'Se [[habrá entretenido|violet]] en el trabajo. Los martes sale tarde.', en: 'He must have been held up at work. On Tuesdays he finishes late.' },
            { who: 'Elena', text: 'Le mandé un mensaje hace un rato y no contesta.', en: 'I sent him a message a while ago and he isn’t answering.' },
            { who: 'Sergio', text: 'Se le [[habrá acabado|violet]] la batería. Le pasa siempre.', en: 'His battery must have died. It always happens to him.' },
            { who: 'Elena', text: 'O [[habrá olvidado|violet]] que la cita era hoy.', en: 'Or he must have forgotten we were meeting today.' },
            { who: 'Sergio', text: 'No creo. Esta mañana me dijo que [[para las ocho|orange]] ya [[habría salido|teal]]… bueno, eso dijo.', en: 'I don’t think so. This morning he told me he’d have left by eight… well, that’s what he said.' },
            { who: 'Elena', text: 'Mira, mejor entramos. [[Cuando termine la película|orange]], ya nos [[habrá escrito|teal]] y nos tomamos algo juntos.', en: 'Look, let’s go in. By the time the film ends he’ll have texted us, and we can all go for a drink.' },
            { who: 'Sergio', text: 'Bueno, le dejo la entrada en la taquilla.', en: 'OK, I’ll leave his ticket at the box office.' },
          ], notes: {
            'habrá entretenido': '**Conjetura**: Sergio no sabe por qué Luis no llega; propone una explicación probable.',
            'habrá acabado': 'Otra **conjetura** para explicar por qué Luis no contesta.',
            'habrá olvidado': 'Elena propone **otra hipótesis** con la misma forma.',
            'para las ocho': 'Un **punto de referencia**, pero visto desde esta mañana (el pasado).',
            'habría salido': 'Desde el pasado («me dijo»), el futuro compuesto pasa al condicional compuesto: «habría salido».',
            'Cuando termine la película': 'Un **punto futuro** con «cuando» + presente de subjuntivo.',
            'habrá escrito': '**Previsión**: el mensaje de Luis llegará antes del final de la película.',
          } },
          { kind: 'teacher', text: 'Pregunta: «Un compañero no viene a clase hoy. ¿Qué le habrá pasado?». El alumno propone tres conjeturas distintas.' },
        ] },
        { title: '¿Previsión, balance o conjetura?', blocks: [
          { kind: 'classify', title: 'Clasifica las frases de las dos conversaciones', categories: [
            { id: 'prevision', label: 'Terminado antes de un punto futuro', tone: 'teal' },
            { id: 'balance', label: 'Balance hasta una fecha', tone: 'blue' },
            { id: 'conjetura', label: 'Conjetura sobre el pasado', tone: 'violet' },
          ], items: [
            { text: 'Para el jueves, habremos revisado la iluminación.', answer: 'prevision', why: 'Hay un punto futuro: el jueves.' },
            { text: 'Habrá usado otro enlace.', answer: 'conjetura', why: 'Explica algo que ya pasó, sin confirmarlo.' },
            { text: 'Al final de esta exposición, el centro habrá organizado veinte muestras.', answer: 'balance', why: 'Suma lo acumulado hasta un momento futuro.' },
            { text: 'Se le habrá acabado la batería.', answer: 'conjetura', why: 'Una explicación probable del silencio de Luis.' },
            { text: 'Cuando termine la película, ya nos habrá escrito.', answer: 'prevision', why: 'El punto futuro es el final de la película.' },
            { text: 'Nosotras habremos sobrevivido a veinte inauguraciones.', answer: 'balance', why: 'Cuenta lo acumulado hasta el final de la exposición.' },
          ] },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Busca el punto de referencia antes de elegir.',
      steps: [
        { title: 'Elige según el contexto · Choose from the context', blocks: [
          { kind: 'choice', items: [
            { context: 'Tu examen final es el 20 de junio.', prompt: 'Para el 20 de junio ya ___ todos los temas.', options: ['habré repasado', 'repasaré', 'habría repasado'], answer: 0, why: 'Acción terminada antes del punto futuro.', en: 'Your final exam is on 20 June: what will be done by then?' },
            { context: 'Tu vecina tiene la casa a oscuras desde el viernes.', prompt: 'Se ___ de vacaciones.', options: ['habrá ido', 'irá', 'hubiera ido'], answer: 0, why: 'Conjetura sobre algo que ya ocurrió.', en: 'Your neighbour’s house has been dark since Friday. You guess why.' },
            { context: 'Trabajas en la misma empresa desde 2007. Te jubilas en 2037.', prompt: 'Cuando me jubile, ___ treinta años aquí.', options: ['habré trabajado', 'trabajaré', 'había trabajado'], answer: 0, why: 'Balance acumulado hasta un momento futuro.', en: 'Same company since 2007, retiring in 2037: take stock of the years.' },
            { context: 'Tu hijo vuelve del colegio a las cinco. Tú quieres preparar la merienda antes.', prompt: 'Cuando ___, la merienda ya estará lista.', options: ['vuelva', 'volverá', 'habrá vuelto'], answer: 0, why: '«Cuando» con valor futuro pide presente de subjuntivo.', en: 'Your son gets home at five and you want his snack ready first. Which form goes after «cuando»?' },
            { context: 'El paquete salió de la tienda hace tres días y no tienes noticias.', prompt: '___ a la oficina de correos.', options: ['Habrá llegado', 'Llegaría', 'Había llegado'], answer: 0, why: 'Conjetura desde hoy sobre un hecho reciente.', en: 'The parcel left the shop three days ago and you have no news. Make a guess.' },
            { context: 'Un viaje de diez horas que empieza mañana a las ocho.', prompt: 'Mañana a las seis de la tarde ___ a Lima.', options: ['habremos llegado', 'llegamos', 'habíamos llegado'], answer: 0, why: 'Punto futuro (las seis) y llegada anterior a él.', en: 'A ten-hour journey starting at eight tomorrow: where will you be at six in the evening?' },
          ] },
        ] },
        { title: 'Compara los significados · Compare the meanings', blocks: [
          { kind: 'choice', items: [
            { prompt: '¿Qué frase dice que, el lunes, la mudanza **ya estará terminada**?', options: ['El lunes habremos hecho la mudanza.', 'El lunes haremos la mudanza.'], answer: 0, why: 'El futuro compuesto presenta la acción terminada en ese punto.', en: 'Which sentence says the move will already be finished on Monday?' },
            { prompt: '«No me ha llamado. Habrá tenido mucho trabajo.» ¿Qué significa?', options: ['Supongo que ha tenido mucho trabajo.', 'Tendrá mucho trabajo mañana.', 'Tuvo trabajo, lo sé seguro.'], answer: 0, why: 'Es una conjetura sobre el pasado reciente.', en: '“He hasn’t called me. He must have had a lot of work.” What does it mean?' },
            { prompt: '¿Qué frase hace un balance?', options: ['En mayo habré dado cien clases este año.', 'En mayo daré una clase especial.'], answer: 0, why: 'Suma lo acumulado hasta mayo.', en: 'Which sentence takes stock of a total?' },
            { prompt: '¿Cuál presenta un **hecho confirmado**?', options: ['Luis ha compartido el enlace por otro canal.', 'Luis habrá compartido el enlace por otro canal.'], answer: 0, why: 'El pretérito perfecto afirma. «Habrá compartido» solo lo supone.', en: 'Which one presents a confirmed fact?' },
            { prompt: 'Desde ayer: «Pensé que hoy habría terminado». Desde hoy: «Pienso que mañana ___».', options: ['habré terminado', 'habría terminado', 'había terminado'], answer: 0, why: 'Si el cálculo se hace hoy, la forma es el futuro compuesto.', en: 'Seen from yesterday you say «Pensé que hoy habría terminado». Seen from today, how do you make the same calculation about tomorrow?' },
          ] },
        ] },
        { title: 'Completa la conversación · Complete the conversation', blocks: [
          { kind: 'chat-fill', title: 'Mensajes del equipo de montaje', lines: [
            { who: 'Paula', text: '¿Cómo va todo? El viernes abrimos.' },
            { who: 'Marta', text: 'Bien. Para mañana a las seis ___ la sala principal.', options: ['habremos terminado', 'terminaremos ya', 'habríamos terminado'], answer: 0, why: 'Acción terminada antes de un punto futuro.' },
            { who: 'Paula', text: '¿Y los rótulos?' },
            { who: 'Marta', text: 'Los imprimimos cuando Luis ___ las fotos.', options: ['revise', 'revisará', 'habrá revisado'], answer: 0, why: '«Cuando» con valor futuro pide presente de subjuntivo.' },
            { who: 'Paula', text: 'Luis no me contesta desde la mañana.' },
            { who: 'Marta', text: 'Estará en la imprenta. Allí no hay cobertura. Seguro que ya ___ las pruebas.', options: ['habrá recogido', 'recogerá', 'habría recogido'], answer: 0, why: 'Conjetura sobre algo reciente.' },
            { who: 'Paula', text: 'Ojalá. Si seguimos el horario, al abrir ___ cada panel dos veces.', options: ['habremos comprobado', 'habremos comprobados', 'hemos comprobado'], answer: 0, why: 'Futuro compuesto con participio invariable.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Cuando habrás terminado, avísame.', ok: false, options: ['Cuando termines, avísame.', 'Cuando terminarás, avísame.', 'Cuando habrías terminado, avísame.'], answer: 0, why: 'Después de «cuando» con valor futuro: presente de subjuntivo.' },
            { sentence: 'Para el verano habremos ahorrado lo suficiente.', ok: true, why: 'Correcta: acción terminada antes de un punto futuro.' },
            { sentence: 'No contestan; habrán salidos a cenar.', ok: false, options: ['No contestan; habrán salido a cenar.', 'No contestan; habrá salidos a cenar.', 'No contestan; habrían salidos a cenar.'], answer: 0, why: 'El participio con «haber» es invariable: «habrán salido».' },
            { sentence: 'Dentro de un mes, los obreros habrán puesto el techo.', ok: true, why: 'Correcta: participio irregular «puesto».' },
            { sentence: 'Para diciembre, haberé leído todos los libros.', ok: false, options: ['Para diciembre, habré leído todos los libros.', 'Para diciembre, haberé leídos todos los libros.', 'Para diciembre, he leído todos los libros.'], answer: 0, why: 'Futuro irregular de «haber»: habré.' },
            { sentence: 'En septiembre habremos vivido aquí dos años.', ok: true, why: 'Correcta: balance hasta un punto futuro.' },
          ] },
        ] },
        { title: 'Construye y transforma · Build and transform', blocks: [
          { kind: 'build', title: 'Ordena las palabras', items: [
            { tiles: ['Para', 'junio', 'habré', 'terminado', 'la', 'tesis'], accept: ['Para junio habré terminado la tesis', 'Habré terminado la tesis para junio'], en: 'By June I’ll have finished my thesis.' },
            { tiles: ['habrá', 'Se', 'quedado', 'dormido'], accept: ['Se habrá quedado dormido'], en: 'He must have fallen asleep.' },
            { tiles: ['Cuando', 'lleguen', 'habremos', 'ya', 'cenado'], accept: ['Cuando lleguen ya habremos cenado', 'Ya habremos cenado cuando lleguen'], en: 'When they arrive, we’ll already have had dinner.' },
            { tiles: ['En', 'mayo', 'habremos', 'vivido', 'un', 'año', 'aquí'], accept: ['En mayo habremos vivido un año aquí', 'En mayo habremos vivido aquí un año'], en: 'In May we’ll have lived here for a year.' },
          ] },
          { kind: 'rewrite', title: 'Escribe la misma idea con el futuro compuesto', items: [
            { prompt: 'Terminaré antes de junio.', instruction: 'Empieza con «Para junio…».', accept: ['Para junio habré terminado', 'Para junio ya habré terminado'] },
            { prompt: 'Seguramente perdió el tren.', instruction: 'Conviértela en conjetura con el futuro compuesto.', accept: ['Habrá perdido el tren'] },
            { prompt: 'Supongo que ya han salido de la oficina.', instruction: 'Sin «supongo que».', accept: ['Ya habrán salido de la oficina', 'Habrán salido ya de la oficina', 'Habrán salido de la oficina'] },
            { prompt: 'Mañana, antes de las ocho, enviaré el informe.', instruction: 'Empieza con «Mañana a las ocho ya…».', accept: ['Mañana a las ocho ya habré enviado el informe'] },
          ] },
        ] },
        { title: 'Clasifica por el sentido · Sort by meaning', blocks: [
          { kind: 'classify', title: '¿Qué lectura tiene cada frase?', categories: [
            { id: 'prevision', label: 'Terminado antes de un punto futuro', tone: 'teal' },
            { id: 'balance', label: 'Balance hasta una fecha', tone: 'blue' },
            { id: 'conjetura', label: 'Conjetura sobre el pasado', tone: 'violet' },
          ], items: [
            { text: 'Para Navidad habrán arreglado la calle.', answer: 'prevision', why: 'Punto futuro: Navidad.' },
            { text: 'La puerta está abierta. Habrá salido el gato.', answer: 'conjetura', why: 'Explicación probable de una evidencia.' },
            { text: 'Al terminar la gira, la banda habrá dado ochenta conciertos.', answer: 'balance', why: 'Suma acumulada hasta el final de la gira.' },
            { text: 'Han llegado muy cansados. Habrán caminado mucho.', answer: 'conjetura', why: 'Suposición sobre lo que ya hicieron.' },
            { text: 'Cuando vuelvas, habré pintado tu habitación.', answer: 'prevision', why: 'Acción terminada antes de tu regreso.' },
            { text: 'El domingo habré nadado mil metros esta semana.', answer: 'balance', why: 'Lo acumulado hasta el domingo.' },
          ] },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'El avance del montaje', coach: 'Primero escucha sin leer.',
      steps: [
        { title: 'El avance del montaje', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha para la idea general. En la segunda, el alumno anota cada «habré / habrá / habremos» y decide si es previsión o conjetura.', self: 'Escucha una vez para la idea general. En la segunda escucha, anota cada futuro compuesto y su lectura. Puedes bajar la velocidad.' } },
          { kind: 'listen', title: 'Paula informa al equipo', channel: 'NOTA DE VOZ · GRUPO DEL MONTAJE', src: '/audio/grammar-classroom/153.mp3',
            before: 'Faltan dos días para la inauguración. La coordinadora envía una nota de voz al equipo. ¿Qué tipo de información crees que va a dar?',
            gist: { prompt: '¿Cuál es el propósito del mensaje?', options: ['Informar qué estará hecho antes de abrir y aclarar una duda pendiente.', 'Cancelar la inauguración.', 'Pedir más voluntarios para el viernes.'], answer: 0, why: 'Enumera lo que «habremos terminado» y comenta el archivo de Luis, que todavía no encuentra.', en: 'What is the purpose of the message?' },
            details: [
              { prompt: '¿Para cuándo estará terminado el montaje de la sala principal?', options: ['Para mañana a las seis.', 'Para el viernes.', 'Para esta noche.'], answer: 0, why: '«Para mañana a las seis habremos terminado el montaje de la sala principal».', en: 'By when will the main hall be set up?' },
              { prompt: '¿Qué hará Marta antes de imprimir los rótulos?', options: ['Revisar las fotos.', 'Enviar la lista de invitados.', 'Llamar a Luis.'], answer: 0, why: '«Marta habrá revisado las fotos antes de que imprimamos los rótulos».', en: 'What will Marta do before the signs are printed?' },
              { prompt: 'Sobre el archivo de Luis, ¿qué hace la coordinadora?', options: ['Supone que lo compartió por otro canal, pero va a preguntarle.', 'Confirma que lo compartió por correo.', 'Decide no esperar el archivo.'], answer: 0, why: '«Habrá compartido el enlace por otro canal, pero voy a preguntarle antes de asumirlo».', en: 'What does the coordinator do about Luis’s file?' },
              { prompt: '¿Qué no quiere confundir?', options: ['Una previsión con una confirmación.', 'La sala principal con la secundaria.', 'El viernes con el sábado.'], answer: 0, why: '«No quiero confundir una previsión con una confirmación».', en: 'What does she not want to confuse?' },
              { prompt: '¿Qué enviará esta noche?', options: ['Una actualización con lo hecho y lo pendiente.', 'La lista de invitados.', 'Las fotos impresas.'], answer: 0, why: '«Les enviaré una actualización esta noche con lo que ya está hecho y lo que deberá quedar listo mañana».', en: 'What will she send tonight?' },
            ],
            transcript: 'Hola, equipo. [[Para mañana a las seis|orange]] [[habremos terminado|teal]] el montaje de la sala principal. Marta [[habrá revisado|teal]] las fotos antes de que imprimamos los rótulos. Yo [[habré enviado|teal]] la lista de invitados [[cuando ustedes lleguen|orange]] el viernes. Todavía no encuentro el archivo de Luis; [[habrá compartido|violet]] el enlace por otro canal, pero voy a preguntarle antes de asumirlo. Tenemos dos tareas pendientes y no quiero confundir una previsión con una confirmación. Si seguimos el horario, [[al abrir|orange]] [[habremos comprobado|teal]] todos los paneles. Les enviaré una actualización esta noche con lo que ya está hecho y lo que deberá quedar listo mañana. Revisen sus plazos y avisen si necesitan ayuda para cumplirlos.',
            reply: { teacher: 'El alumno responde en voz alta como Luis: confirma o corrige la suposición sobre el archivo y dice qué habrá hecho él antes del viernes.', self: 'Responde como Luis en un mensaje breve: aclara dónde está el archivo y di dos cosas que habrás terminado antes del viernes.' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Planes, balances y suposiciones', coach: 'Una pregunta por vez. Mírate desde el futuro.',
      steps: [
        { title: 'Planes, balances y suposiciones', blocks: [
          { kind: 'guide', text: { teacher: 'No hace falta usar todas las preguntas. Pide siempre el punto de referencia futuro y comparte también tus planes.', self: 'Responde cada pregunta en voz alta. Antes de hablar, piensa en el punto de referencia: ¿para cuándo?' } },
          { kind: 'talk', cards: [
            { q: 'Piensa en el final de esta semana. ¿Qué cosas habrás terminado para el domingo?', followUps: ['¿Qué tarea te preocupa más?', '¿Hay algo que depende de otra persona?', '¿Qué no habrás hecho todavía?'], phrases: ['[[Para el domingo|orange]] [[habré terminado|teal]]…', 'Todavía no [[habré…|teal]]', 'Si todo va bien…'], hint: 'Primero di el punto («para el domingo») y después las acciones terminadas.', example: 'Para el domingo habré entregado el informe mensual y habré hecho la compra de la semana. Lo que no habré terminado es la limpieza del armario.', next: 'Ahora miremos un poco más lejos.' },
            { q: '¿Qué metas habrás alcanzado dentro de cinco años?', followUps: ['¿Dónde te ves viviendo?', '¿Qué habrás aprendido?', '¿Qué cosa no habrá cambiado?'], phrases: ['[[Dentro de cinco años|orange]] [[habré…|teal]]', 'Para entonces ya [[habré…|teal]]', 'Espero que…'], hint: 'Combina el futuro compuesto con «espero que» cuando no estés seguro.', example: 'Dentro de cinco años habré terminado el máster y, si todo va bien, habré cambiado de trabajo. Espero que también haya aprendido a cocinar.', next: 'Hagamos ahora un balance.' },
            { q: 'Haz un balance: cuando termine este año, ¿cuánto habrás hecho de algo que te importa?', followUps: ['¿Es más o menos que el año pasado?', '¿Te sientes orgulloso u orgullosa de esa cifra?', '¿Qué cifra quieres para el próximo año?'], phrases: ['[[Al final del año|orange]] [[habré leído|blue]]…', '[[Habré viajado|blue]] a… países', '[[Habremos ahorrado|blue]]…'], hint: 'El balance suma una cantidad: libros, kilómetros, clases, viajes.', example: 'Al final del año habré leído unos quince libros y habré dado más de doscientas clases. Es un buen balance, aunque me habría gustado viajar más.', next: 'Pasemos de los planes a las suposiciones.' },
            { q: 'Imagina que un amigo no llega a una cita y no contesta. ¿Qué le habrá pasado?', followUps: ['¿Cuál es la explicación más probable?', '¿Cuánto tiempo esperas antes de preocuparte?', '¿Qué haces para comprobarlo?'], phrases: ['[[Se habrá…|violet]]', '[[Habrá perdido|violet]]…', 'Seguro que [[habrá…|violet]], pero…'], hint: 'Da al menos tres conjeturas distintas y termina con cómo lo comprobarías.', example: 'Se habrá entretenido en el trabajo o se le habrá acabado la batería. Le escribiría a su pareja para comprobarlo antes de preocuparme.', next: 'Ahora, una suposición en el trabajo o en los estudios.' },
            { q: 'En el trabajo o en los estudios, ¿alguna vez una suposición tuya resultó falsa?', followUps: ['¿Qué suponías?', '¿Qué consecuencias tuvo?', '¿Cómo lo comprobarías hoy?'], phrases: ['Pensé: «[[Habrá…|violet]]», pero…', 'No lo comprobé y…', 'Ahora pregunto antes de…'], hint: 'Cuenta tu suposición tal como la pensaste, con el futuro compuesto entre comillas.', example: 'Un cliente no respondió a un presupuesto y pensé: «Habrá elegido otra empresa». En realidad, el correo estaba en su carpeta de correo no deseado. Desde entonces llamo antes de dar algo por perdido.', next: 'Para terminar, un viaje al futuro.' },
            { q: 'Imagina que hoy es tu último día de clase de español, dentro de unos años. ¿Qué habrás logrado?', followUps: ['¿Qué habrás leído o visto en español?', '¿Con quién habrás hablado?', '¿Qué te habrá costado más?'], phrases: ['[[Para entonces|orange]] [[habré…|teal]]', '[[Habré conocido|teal]] a…', 'Lo más difícil [[habrá sido|violet]]…'], hint: 'Mezcla previsiones y balances: «habré leído tres novelas», «habré hablado con cientos de personas».', example: 'Para entonces habré leído mis primeras novelas en español y habré trabajado unos meses en Ciudad de México. Lo más difícil habrá sido el subjuntivo, seguro.', teacher: 'Esta última pregunta permite cerrar con objetivos personales del alumno. Anótalos para retomarlos más adelante.' },
          ], swap: { teacher: 'Al final, cambien los papeles: el alumno pregunta al profesor qué habrá hecho para final de mes.', self: 'Escribe dos preguntas con «¿Qué habrás hecho para…?» y házselas a alguien esta semana.' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Una actualización para el equipo', coach: 'Separa lo previsto de lo supuesto.',
      steps: [
        { title: 'Una actualización para el equipo', blocks: [
          { kind: 'guide', text: { teacher: 'Puede escribirse en clase o como tarea. Usen la revisión automática y después comprueben juntos que cada previsión tiene su punto de referencia.', self: 'Escribe tu actualización y toca «Revisar mi texto». Comprueba que cada previsión tiene un punto futuro y que la suposición no parece un hecho.' } },
          { kind: 'write', title: 'Actualización antes de una fecha clave', situation: 'Se acerca una fecha importante: una presentación, una mudanza, un evento o un examen. Escribe una actualización para las personas que trabajan contigo.', task: [
            'Indica la **fecha clave** y tres resultados que estarán terminados antes.',
            'Incluye un **balance** de lo acumulado hasta esa fecha.',
            'Presenta una **suposición** sobre algo que no sabes, con el futuro compuesto.',
            'Explica cómo vas a comprobarla y qué queda pendiente.',
          ], starters: ['Para el… habremos…', 'Cuando lleguen…, ya habré…', 'Al terminar…, habremos…', 'Todavía no sé…; habrá…', 'Voy a comprobarlo…', 'Queda pendiente…'],
            words: ['para entonces', 'antes de', 'pendiente', 'confirmar', 'plazo', 'actualización', 'suposición', 'dar por hecho'],
            model: 'Hola a todos. La exposición se abre el viernes. [[Para el jueves por la tarde|orange]] [[habremos colocado|teal]] todos los paneles y Marta [[habrá revisado|teal]] las fotos antes de imprimir los rótulos. Yo [[habré enviado|teal]] la lista [[cuando lleguen los voluntarios|orange]]. [[Al abrir|orange]], el centro [[habrá organizado|blue]] veinte muestras en cinco años, un buen motivo para celebrarlo. El archivo de Luis todavía no aparece. [[Habrá usado|violet]] otro enlace, pero no lo doy por hecho: le escribiré hoy para confirmarlo. Mañana enviaré otra actualización con lo que ya esté hecho y lo que quede pendiente.',
            minWords: 100 },
        ] },
      ],
    },
    {
      id: 'cerrar', label: 'Cerrar', icon: '✓', mascot: '/brand/mascot/standing.webp',
      title: 'Lo esencial · The essentials', coach: '¿Qué te llevas hoy?',
      steps: [
        { title: 'Lo esencial · The essentials', blocks: [
          { kind: 'recap', items: [
            { tone: 'teal', label: 'TERMINADO ANTES', formula: 'para + fecha + habré + participio', example: 'Para el jueves habremos colocado los paneles.', caption: 'Hecho antes de un punto futuro.', en: 'Finished before a point in the future (“by Thursday we’ll have…”).' },
            { tone: 'blue', label: 'BALANCE', formula: 'en + fecha + habré + participio + cantidad', example: 'En diciembre habremos vivido un año aquí.', caption: 'Lo acumulado hasta entonces.', en: 'What will have built up by then (“by December we’ll have lived here a year”).' },
            { tone: 'violet', label: 'CONJETURA', formula: 'habrá + participio (sin punto futuro)', example: 'No contesta; se habrá quedado dormido.', caption: 'Una explicación probable, sin confirmar.', en: 'A likely but unconfirmed explanation (“he must have fallen asleep”).' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La pregunta clave', text: '¿Hay un **punto futuro**? Entonces es previsión o balance. ¿No lo hay y explicas algo que ya pasó? Es una **conjetura**: compruébala antes de darla por hecha. Y recuerda: «cuando» + **subjuntivo**, nunca «cuando habrás».', en: 'The key question. Is there a future point? Then it’s a forecast or a stock-take. Is there none, and you’re explaining something that already happened? Then it’s a guess: check it before treating it as fact. And remember: «cuando» takes the subjunctive, never «cuando habrás».' },
        ] },
        { title: 'Desafío final · Final challenge', blocks: [
          { kind: 'choice', title: 'Cuatro frases, sin ayuda', items: [
            { prompt: 'Para el lunes, los albañiles ___ la cocina.', options: ['habrán terminado', 'habrán terminados', 'habrían terminado'], answer: 0, why: 'Anterioridad futura con participio invariable.', en: 'By Monday the builders will be done with the kitchen.' },
            { prompt: 'Tiene los ojos rojos. ___ mal.', options: ['Habrá dormido', 'Dormirá', 'Había dormido'], answer: 0, why: 'Conjetura sobre algo reciente.', en: 'Her eyes are red. You guess why.' },
            { prompt: 'Cuando ___ el curso, habrás estudiado tres años.', options: ['termines', 'terminarás', 'habrás terminado'], answer: 0, why: '«Cuando» con valor futuro: presente de subjuntivo.', en: 'When you finish the course, you’ll have studied for three years.' },
            { prompt: '¿Qué frase es un balance?', options: ['En junio habré dado cien clases.', 'En junio habré terminado el libro.', 'Habrá dado una clase ya.'], answer: 0, why: 'Suma una cantidad hasta un punto futuro.', en: 'Which sentence takes stock of a total?' },
          ] },
        ] },
        { title: 'Tus errores y repaso · Your mistakes and review', blocks: [
          { kind: 'review' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «Para mañana habrá terminado» y «No responde; habrá terminado ya»: ¿qué diferencia hay? La primera es una previsión con punto futuro; la segunda, una conjetura sobre algo que ya pasó.' },
        ] },
      ],
    },
  ],
};
