import type { LiveLesson } from '../types';

/**
 * Lesson 149 · B1 · Pretérito perfecto de subjuntivo.
 * Core: haya + participio to react now, doubt or consider a possibility about
 * something that has (or may have) already happened. One story runs through the
 * class: Elena's team waits for news about a proposal they sent.
 */
export const lesson: LiveLesson = {
  id: 149,
  level: 'B1',
  title: 'Perfecto de subjuntivo',
  subtitle: 'Reaccionar ahora a algo que ya ha pasado, dudar de un resultado y considerar lo que puede haber ocurrido.',
  legend: [
    { tone: 'blue', label: 'Reacción o valoración de algo que ya pasó' },
    { tone: 'teal', label: 'Duda sobre algo que ya pasó' },
    { tone: 'orange', label: 'Posibilidad sobre algo que ya pasó' },
    { tone: 'violet', label: 'Certeza: indicativo' },
  ],
  optionNotes: {
    'has venido': '«Has venido» es indicativo: afirma el hecho. Después de «me alegra que» se usa el subjuntivo: «hayas venido».',
    'habías venido': 'El pluscuamperfecto necesita un momento pasado de referencia. Aquí la reacción es de ahora.',
    'han entendido': '«Han entendido» afirma el hecho. Después de «dudo que» se usa el subjuntivo.',
    'ha llegado': '«Ha llegado» afirma el hecho. Con una duda, una posibilidad o una reacción se usa «haya llegado».',
    vengas: '«Vengas» mira la acción como presente o futura. Si la acción ya ocurrió, usa «hayas venido».',
    llegue: '«Llegue» mira la llegada como presente o futura. Si ya pudo ocurrir, usa «haya llegado».',
    'hayan llegados': 'Con «haber», el participio no cambia: «hayan llegado».',
    'haya hacido': 'El participio de «hacer» es irregular: «hecho».',
    'haya decido': 'El participio de «decir» es irregular: «dicho».',
    'haya volvido': 'El participio de «volver» es irregular: «vuelto».',
    'haya rompido': 'El participio de «romper» es irregular: «roto».',
    'haya escribido': 'El participio de «escribir» es irregular: «escrito».',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Reaccionar a lo que ya ha pasado', coach: 'Ahora reacciono a algo que ya pasó.',
      steps: [
        { title: 'Ahora reacciono a algo anterior', blocks: [
          { kind: 'lead', text: 'El equipo de Elena acaba de enviar una propuesta para una exposición. Ahora Elena **reacciona** a lo que ya hicieron y **duda** de lo que todavía no sabe. La reacción es de **ahora**; la acción es **anterior**.' },
          { kind: 'guide', text: { teacher: 'Lean las dos columnas. Pregunta: «¿En cuál de las dos frases la persona ya está aquí?».', self: 'Lee las dos columnas. ¿En cuál de las dos frases la persona ya llegó?' } },
          { kind: 'compare', title: 'Me alegra que…', columns: [
            { tone: 'neutral', label: 'PRESENTE DE SUBJUNTIVO', sentence: 'Me alegra que **vengas** a la fiesta del sábado.', idea: 'La acción es presente o futura: la persona va a venir.' },
            { tone: 'blue', label: 'PERFECTO DE SUBJUNTIVO', sentence: '[[Me alegra que|blue]] [[hayas venido|blue]].', idea: 'La acción **ya ocurrió**: la persona está aquí y yo reacciono ahora.' },
          ] },
          { kind: 'tip', icon: '🔁', title: 'Es como el perfecto compuesto', text: 'Si afirmas, dices «**Has venido**». Si reaccionas, dudas o consideras una posibilidad, el auxiliar pasa al subjuntivo: «Me alegra que **hayas venido**».' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: '«Me alegra que hayamos terminado a tiempo.» ¿Qué pasó primero?', options: ['Terminaron el trabajo.', 'Elena se alegró.'], answer: 0, why: 'El trabajo terminó antes; la alegría es de ahora.' },
            { prompt: 'Tu amiga está en tu casa. Le dices: «¡Qué bien que ___!».', options: ['hayas venido', 'vengas mañana', 'has venido'], answer: 0, why: 'La llegada ya ocurrió y tú reaccionas ahora: perfecto de subjuntivo.' },
          ] },
        ] },
        { title: 'Cómo se forma', mascot: '/brand/mascot/studying.webp', coach: 'Haya + participio.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'PERFECTO DE SUBJUNTIVO', question: '¿Cómo se forma?', formula: ['haya / hayas / haya / hayamos / hayáis / hayan + participio'],
            meaning: 'Se forma con **haber en presente de subjuntivo** y el **participio** del verbo principal. El participio no cambia nunca.',
            examples: [
              { es: 'Me alegra que [[hayamos terminado|blue]] a tiempo.' },
              { es: 'Dudo que [[hayan revisado|teal]] todo tan pronto.' },
              { es: 'Es posible que el comité [[haya recibido|orange]] los archivos.' },
            ] },
          { kind: 'table', title: 'Formas', head: ['', 'haber', 'enviar', 'recibir'], rows: [
            ['yo', '**haya**', 'haya envi**ado**', 'haya recib**ido**'],
            ['tú', '**hayas**', 'hayas envi**ado**', 'hayas recib**ido**'],
            ['él / ella / usted', '**haya**', 'haya envi**ado**', 'haya recib**ido**'],
            ['nosotros / nosotras', '**hayamos**', 'hayamos envi**ado**', 'hayamos recib**ido**'],
            ['vosotros / vosotras', '**hayáis**', 'hayáis envi**ado**', 'hayáis recib**ido**'],
            ['ellos / ellas / ustedes', '**hayan**', 'hayan envi**ado**', 'hayan recib**ido**'],
          ], note: 'Participios irregulares de siempre: hecho, dicho, visto, escrito, puesto, vuelto, abierto, roto, muerto, descubierto.' },
          { kind: 'tip', icon: '🔒', title: 'El participio no cambia', text: 'Solo cambia **haya**: «que ellas **hayan llegado**», nunca «llegadas». Y no pongas nada entre los dos: «que **no** haya llegado», «que **ya** haya llegado».' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'Es una pena que tus amigos no ___ venir.', options: ['hayan podido', 'hayan podidos', 'han podido'], answer: 0, why: '«Hayan» + participio invariable «podido».' },
            { prompt: 'No creo que Luis ___ la tarea.', options: ['haya hacido', 'haya hecho', 'ha hecho'], answer: 1, why: 'El participio de «hacer» es «hecho».' },
          ] },
        ] },
        { title: 'Reaccionar y valorar', mascot: '/brand/mascot/speaking.webp', coach: '¡Qué bien que lo hayas conseguido!', blocks: [
          { kind: 'concept', tone: 'blue', label: 'REACCIÓN ACTUAL', question: '¿Qué te parece lo que ha pasado?', formula: ['me alegra / me sorprende / es una pena + que + haya + participio', 'estoy contento de que / qué bien que + haya + participio'],
            meaning: 'Valoras **ahora** algo que **ya ha ocurrido**: te alegra, te sorprende, te molesta o te parece una pena.',
            examples: [
              { es: '[[Me alegra que|blue]] [[hayas guardado|blue]] una copia.' },
              { es: '[[Me sorprende que|blue]] un compañero [[haya encontrado|blue]] fotos nuevas a última hora.' },
              { es: '[[Es una pena que|blue]] Ana no [[haya podido|blue]] venir.' },
              { es: '[[Qué bien que|blue]] [[hayas aprobado|blue]] el examen.' },
            ] },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'Me alegra que ___ (tú, llamar).', options: ['hayas llamado', 'has llamado', 'habías llamado'], answer: 0, why: 'Una reacción actual a una acción anterior: «hayas llamado».' },
            { prompt: 'Me molesta que nadie me ___ la verdad.', options: ['haya dicho', 'ha dicho', 'haya decido'], answer: 0, why: 'Una valoración + participio irregular «dicho».' },
          ] },
        ] },
        { title: 'Dudar de un resultado', mascot: '/autoestudio/mascot/noting.webp', coach: 'No lo afirmo: lo pongo en duda.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'DUDA', question: '¿Ya ha pasado? No lo creo.', formula: ['dudo que / no creo que / no estoy seguro de que + haya + participio'],
            meaning: 'No afirmas que la acción **haya terminado**: la pones en duda. Por eso no se usa el indicativo.',
            examples: [
              { es: '[[Dudo que|teal]] [[hayan revisado|teal]] todo tan pronto.' },
              { es: '[[No creo que|teal]] Marta [[haya llegado|teal]] todavía.' },
              { es: '[[No estoy segura de que|teal]] [[hayamos enviado|teal]] la versión final.' },
            ] },
          { kind: 'compare', title: 'Creer o no creer', columns: [
            { tone: 'violet', label: 'CERTEZA · INDICATIVO', sentence: '[[Creo que|violet]] Marta [[ha llegado|violet]].', idea: 'Lo presentas como verdad: indicativo.' },
            { tone: 'teal', label: 'DUDA · SUBJUNTIVO', sentence: '[[No creo que|teal]] Marta [[haya llegado|teal]].', idea: 'Lo pones en duda: subjuntivo.' },
          ] },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'Dudo que ellos ___ el mensaje.', options: ['hayan entendido', 'han entendido', 'entenderían'], answer: 0, why: '«Dudo que» + una acción anterior: «hayan entendido».' },
            { prompt: 'Estoy seguro de que Ana ___ el correo.', options: ['haya leído', 'ha leído'], answer: 1, why: '«Estoy seguro de que» afirma: indicativo.' },
          ] },
        ] },
        { title: 'Considerar una posibilidad', mascot: '/brand/mascot/seated.webp', coach: 'Puede ser… o no.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'POSIBILIDAD', question: '¿Qué puede haber pasado?', formula: ['es posible que / puede que / es probable que + haya + participio'],
            meaning: 'Propones una **explicación posible** de algo que **puede haber ocurrido**, sin presentarla como un hecho demostrado.',
            examples: [
              { es: '[[Es posible que|orange]] el comité [[haya recibido|orange]] ya los archivos.' },
              { es: '[[Puede que|orange]] [[hayan enviado|orange]] la respuesta a otra dirección.' },
              { es: '[[Es probable que|orange]] Luis se [[haya quedado|orange]] dormido.' },
            ] },
          { kind: 'tip', icon: '🔎', title: 'Hecho o hipótesis', text: 'Para un **hecho comprobado**: «El sistema **ha confirmado** la entrega». Para una **hipótesis**: «**Es posible que** el comité **haya abierto** el archivo». No presentes una posibilidad como si fuera seguro.' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'Es posible que se ___ el paquete en el camino.', options: ['haya perdido', 'ha perdido', 'había perdido'], answer: 0, why: '«Es posible que» + una acción anterior: «haya perdido».' },
            { prompt: 'Luis no contesta. Puede que ___ el teléfono en casa.', options: ['haya dejado', 'ha dejado', 'deje'], answer: 0, why: 'Una hipótesis sobre algo que ya pudo ocurrir: «haya dejado».' },
          ] },
        ] },
        { title: 'Cómo elegir', mascot: '/brand/mascot/kneeling.webp', coach: '¿Afirmas o reaccionas? ¿Ya pasó o no?', blocks: [
          { kind: 'decide', title: 'Piensa en tu frase y responde', steps: [
            { q: '¿Afirmas el hecho como verdad (sé que, creo que, es verdad que)?', yes: 'Usa el **indicativo**: «[[Creo que|violet]] [[ha llegado|violet]]».', no: 'next' },
            { q: '¿La acción ya ha ocurrido (o pudo ocurrir) antes de tu reacción, duda o hipótesis?', yes: 'Usa **haya + participio**: «[[Me alegra que|blue]] [[hayas venido|blue]]» · «[[Dudo que|teal]] [[haya llegado|teal]]».', no: 'Si la acción es presente o futura, usa el **presente de subjuntivo**: «Me alegra que **vengas** el sábado».' },
          ] },
          { kind: 'table', title: 'Tres miradas, la misma acción', head: ['frase', 'idea'], rows: [
            ['Sé que Marta **ha revisado** las fotos.', 'Certeza: un hecho.'],
            ['[[Me alegra que|blue]] Marta [[haya revisado|blue]] las fotos.', 'Reacción a un hecho anterior.'],
            ['[[Dudo que|teal]] Marta [[haya revisado|teal]] las fotos.', 'Duda: no lo afirmo.'],
            ['[[Es posible que|orange]] Marta [[haya revisado|orange]] las fotos.', 'Hipótesis: puede ser.'],
          ] },
          { kind: 'tip', icon: '🔭', title: 'Más adelante', text: 'También vas a encontrar esta forma con un futuro: «Llámame **cuando hayas terminado**». Indica que una acción futura estará terminada antes de otra.' },
        ] },
        { title: 'Errores frecuentes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Estos errores son muy comunes.', blocks: [
          { kind: 'guide', text: { teacher: 'Pide al alumno que encuentre el error y diga si la frase afirma, reacciona, duda o considera una posibilidad.', self: 'Lee cada frase, busca el error y piensa: ¿afirma o no afirma? Después toca para ver la corrección.' } },
          { kind: 'mistakes', title: '¿Dónde está el error?', items: [
            { wrong: 'Me alegra que has venido.', right: 'Me alegra que hayas venido.', why: 'Después de una reacción («me alegra que»), subjuntivo.' },
            { wrong: 'No creo que ha terminado el partido.', right: 'No creo que haya terminado el partido.', why: '«No creo que» expresa duda: subjuntivo.' },
            { wrong: 'Creo que haya llegado.', right: 'Creo que ha llegado.', why: '«Creo que» afirma: indicativo.' },
            { wrong: 'Es posible que hayan llegados tarde.', right: 'Es posible que hayan llegado tarde.', why: 'El participio no cambia.' },
            { wrong: 'Dudo que haya escribido el informe.', right: 'Dudo que haya escrito el informe.', why: 'El participio de «escribir» es «escrito».' },
            { wrong: 'Me alegra que vengas. (Ya estás aquí.)', right: 'Me alegra que hayas venido.', why: 'Si la acción ya ocurrió, perfecto de subjuntivo.' },
          ] },
          { kind: 'teacher', text: 'Pide al alumno que reaccione a tres noticias recientes de su vida o del mundo: una que le alegra, una que le sorprende y una de la que duda.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'El perfecto de subjuntivo en situaciones reales', coach: 'Toca las formas marcadas.',
      steps: [
        { title: 'Después de la entrega', blocks: [
          { kind: 'guide', text: { teacher: 'Lean el diálogo con papeles. Después, el alumno toca cada forma marcada y dice si es una reacción, una duda, una posibilidad o una certeza.', self: 'Lee el diálogo. Después toca cada forma marcada para descubrir por qué se usó.' } },
          { kind: 'explore', title: 'Una videollamada del equipo', setting: 'El equipo de Elena envió ayer una propuesta para una exposición. Hoy hablan por videollamada.', lines: [
            { who: 'Elena', text: 'Hola a todos. Antes que nada: [[me alegra que|blue]] [[hayamos terminado|blue]] a tiempo.' },
            { who: 'Marta', text: '¡Sí! Fue una semana muy intensa.' },
            { who: 'Andrés', text: '¿Sabemos algo del comité?' },
            { who: 'Elena', text: 'Todavía no. [[Es posible que|orange]] [[hayan recibido|orange]] ya los archivos, pero no hay confirmación.' },
            { who: 'Andrés', text: '¿Y si los están revisando?' },
            { who: 'Elena', text: '[[Dudo que|teal]] [[hayan revisado|teal]] todo tan pronto. Son cuarenta propuestas.' },
            { who: 'Marta', text: 'Lo que [[sé que|violet]] [[ha funcionado|violet]] son las fotos nuevas de Andrés.' },
            { who: 'Elena', text: 'Es verdad. [[Me sorprende que|blue]] [[hayas encontrado|blue]] esas imágenes a última hora.' },
            { who: 'Andrés', text: 'Estaban en una carpeta vieja. ¡Tuve suerte!' },
            { who: 'Marta', text: '¿Enviamos otra versión, por si acaso?' },
            { who: 'Elena', text: 'Mejor no. [[Puede que|orange]] el comité no [[haya abierto|orange]] la primera todavía.' },
          ], notes: {
            'me alegra que': 'Una **reacción** de ahora sobre algo que ya pasó.',
            'hayamos terminado': 'El trabajo terminó **antes** de la reacción: haya + participio.',
            'Es posible que': 'Elena presenta una **hipótesis**, no un hecho comprobado.',
            'hayan recibido': 'La recepción **pudo ocurrir** antes de ahora, pero no se sabe.',
            'Dudo que': 'Una **duda**: Elena no cree que la revisión haya terminado.',
            'hayan revisado': 'Una acción anterior que **no se afirma**.',
            'sé que': '**Certeza**: Marta lo sabe. Por eso, indicativo.',
            'ha funcionado': 'Perfecto compuesto de indicativo: un hecho afirmado.',
            'Me sorprende que': 'Una **reacción** de sorpresa ante un hecho anterior.',
            'hayas encontrado': 'Andrés ya encontró las fotos: haya + participio.',
            'Puede que': 'Otra **posibilidad**: Elena explica por qué es mejor esperar.',
            'haya abierto': 'Participio irregular de «abrir»: «abierto».',
          } },
          { kind: 'choice', title: '¿Entendiste?', items: [
            { prompt: '¿Por qué Elena no quiere enviar otra versión?', options: ['Porque puede que el comité no haya abierto la primera.', 'Porque el comité ya ha respondido.', 'Porque faltan las fotos.'], answer: 0, why: '«Puede que el comité no haya abierto la primera todavía».' },
            { prompt: '¿Qué le sorprende a Elena?', options: ['Que Andrés haya encontrado fotos a última hora.', 'Que el comité haya respondido tan pronto.', 'Que Marta haya llegado tarde.'], answer: 0, why: '«Me sorprende que hayas encontrado esas imágenes a última hora».' },
          ] },
        ] },
        { title: '¿Dónde está Luis?', blocks: [
          { kind: 'explore', title: 'Esperando en el restaurante', setting: 'Sofía y Diego esperan a su amigo Luis para cenar. Ya son las nueve y media y Luis no llega.', lines: [
            { who: 'Sofía', text: 'Luis no contesta. Nos íbamos a ver a las nueve.' },
            { who: 'Diego', text: '[[Puede que|orange]] se [[haya quedado|orange]] sin batería.' },
            { who: 'Sofía', text: 'O [[es posible que|orange]] [[haya tenido|orange]] un problema en el trabajo.' },
            { who: 'Diego', text: '[[No creo que|teal]] se [[haya olvidado|teal]]. Ayer me habló de la cena.' },
            { who: 'Sofía', text: 'Mira, ¡ahí viene!' },
            { who: 'Luis', text: '¡Perdón, perdón! El metro se paró veinte minutos.' },
            { who: 'Diego', text: 'Tranquilo. [[Qué bien que|blue]] [[hayas llegado|blue]] sin problemas.' },
            { who: 'Luis', text: '[[Es una pena que|blue]] no [[hayan pedido|blue]] todavía… ¡Tengo un hambre!' },
            { who: 'Sofía', text: 'Te esperábamos. Pide tú primero.' },
          ], notes: {
            'Puede que': 'Diego propone una **posibilidad**: no sabe qué pasó.',
            'haya quedado': 'Una acción que **pudo ocurrir** antes de ahora.',
            'es posible que': 'Otra **hipótesis** sobre algo anterior.',
            'haya tenido': 'Tener → tenido: algo que pudo pasar en el trabajo.',
            'No creo que': 'Una **duda**: Diego tiene una razón para no creerlo.',
            'haya olvidado': 'El olvido **no se afirma**: subjuntivo.',
            'Qué bien que': 'Una **reacción** de alivio ahora.',
            'hayas llegado': 'La llegada ya ocurrió: haya + participio.',
            'Es una pena que': 'Luis **valora** algo que no ha ocurrido hasta ahora (en broma).',
            'hayan pedido': 'Una acción anterior al momento actual.',
          } },
          { kind: 'teacher', text: 'Pide al alumno dos hipótesis más sobre el retraso de Luis con «Puede que…» y «Es probable que…».' },
        ] },
        { title: 'Reacción, duda o posibilidad', blocks: [
          { kind: 'classify', title: 'Clasifica las frases de las dos conversaciones', categories: [
            { id: 'reaccion', label: 'Reacción', tone: 'blue' },
            { id: 'duda', label: 'Duda', tone: 'teal' },
            { id: 'posible', label: 'Posibilidad', tone: 'orange' },
          ], items: [
            { text: 'Me alegra que hayamos terminado a tiempo.', answer: 'reaccion', why: '«Me alegra que»: una reacción.' },
            { text: 'Dudo que hayan revisado todo tan pronto.', answer: 'duda', why: '«Dudo que»: una duda.' },
            { text: 'Puede que se haya quedado sin batería.', answer: 'posible', why: '«Puede que»: una hipótesis.' },
            { text: 'No creo que se haya olvidado.', answer: 'duda', why: '«No creo que»: una duda.' },
            { text: 'Qué bien que hayas llegado sin problemas.', answer: 'reaccion', why: '«Qué bien que»: una reacción de alivio.' },
            { text: 'Es posible que hayan recibido los archivos.', answer: 'posible', why: '«Es posible que»: una hipótesis.' },
          ] },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: '¿Afirmas o no? ¿Ya pasó o no?',
      steps: [
        { title: 'Elige según el contexto', blocks: [
          { kind: 'choice', items: [
            { context: 'Tu hermana aprobó ayer un examen muy difícil.', prompt: '¡Me alegra mucho que lo ___!', options: ['hayas aprobado', 'has aprobado', 'apruebes'], answer: 0, why: 'Una reacción actual a un hecho anterior.' },
            { context: 'El paquete debía llegar ayer y no llegó.', prompt: 'Es posible que se ___ en el correo.', options: ['haya perdido', 'ha perdido', 'perdía'], answer: 0, why: 'Una hipótesis sobre algo que pudo ocurrir.' },
            { context: 'Tu compañero dice que ya terminó el informe de cuarenta páginas en una hora.', prompt: 'No creo que lo ___ tan rápido.', options: ['ha terminado', 'haya terminado', 'terminaba'], answer: 1, why: 'Duda sobre una acción anterior: subjuntivo.' },
            { context: 'Ves el coche de Ana en la puerta.', prompt: 'Seguro que Ana ya ___.', options: ['haya llegado', 'ha llegado', 'llegue'], answer: 1, why: '«Seguro que» afirma: indicativo.' },
            { context: 'Tu amigo no pudo venir a tu cumpleaños.', prompt: 'Es una pena que no ___ venir.', options: ['hayas podido', 'has podido', 'puedes'], answer: 0, why: 'Una valoración de algo anterior.' },
            { context: 'Tus vecinos se fueron sin despedirse.', prompt: 'Me sorprende que no se ___.', options: ['han despedido', 'hayan despedido', 'despiden'], answer: 1, why: 'Una reacción de sorpresa ante un hecho anterior.' },
          ] },
        ] },
        { title: 'Compara los significados', blocks: [
          { kind: 'choice', items: [
            { prompt: '¿En qué frase la persona **ya está** aquí?', options: ['Me alegra que hayas venido.', 'Me alegra que vengas.'], answer: 0, why: '«Hayas venido»: la llegada ya ocurrió. «Vengas» puede ser futuro.' },
            { prompt: '¿Qué frase **afirma** el hecho?', options: ['Creo que han cerrado la tienda.', 'No creo que hayan cerrado la tienda.', 'Puede que hayan cerrado la tienda.'], answer: 0, why: '«Creo que» + indicativo afirma. Las otras dudan o suponen.' },
            { prompt: '«Puede que Marta haya salido.» ¿Qué sabemos?', options: ['Nada seguro: es una posibilidad.', 'Que Marta salió.', 'Que Marta va a salir.'], answer: 0, why: '«Puede que» presenta una hipótesis.' },
            { prompt: '¿Qué frase reacciona a algo que **todavía no** ha pasado?', options: ['Me preocupa que llueva el sábado.', 'Me preocupa que haya llovido tanto.'], answer: 0, why: '«Llueva» mira el sábado; «haya llovido» mira algo anterior.' },
          ] },
        ] },
        { title: 'Completa la conversación', blocks: [
          { kind: 'chat-fill', title: 'Mensajes después de una entrevista', lines: [
            { who: 'Paula', text: '¡Hola! ¿Qué tal la entrevista?' },
            { who: 'Álex', text: 'Bien, creo. Me alegra que me ___ tantas preguntas sobre mi experiencia.', options: ['hayan hecho', 'han hecho', 'hayan hacido'], answer: 0, why: 'Reacción a algo anterior + participio irregular «hecho».' },
            { who: 'Paula', text: '¿Ya te dijeron algo?' },
            { who: 'Álex', text: 'No. Dudo que ___ una decisión hoy: había diez candidatos.', options: ['hayan tomado', 'han tomado', 'tomaron'], answer: 0, why: 'Duda sobre una acción anterior: subjuntivo.' },
            { who: 'Paula', text: 'Puede que te ___ un correo y no lo has visto.', options: ['hayan enviado', 'han enviado', 'envíen'], answer: 0, why: 'Una posibilidad sobre algo que pudo pasar.' },
            { who: 'Álex', text: 'Ya revisé el correo. Sé que todavía no me ___.', options: ['hayan escrito', 'han escrito', 'hayan escribido'], answer: 1, why: '«Sé que» afirma: indicativo.' },
            { who: 'Paula', text: 'Bueno, es genial que ___ hasta la última fase.', options: ['hayas llegado', 'has llegado', 'llegues'], answer: 0, why: 'Una valoración de algo que ya ocurrió.' },
          ] },
        ] },
        { title: 'Encuentra el error', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Me alegra que has encontrado trabajo.', ok: false, options: ['Me alegra que hayas encontrado trabajo.', 'Me alegra que habías encontrado trabajo.', 'Me alegra que encontraras trabajo ahora.'], answer: 0, why: 'Una reacción actual a algo anterior: «hayas encontrado».' },
            { sentence: 'Es posible que los niños ya se hayan dormido.', ok: true, why: 'Correcta: una hipótesis sobre algo anterior.' },
            { sentence: 'Creo que Juan haya salido.', ok: false, options: ['Creo que Juan ha salido.', 'Creo que Juan haya salida.', 'Creo que Juan hayan salido.'], answer: 0, why: '«Creo que» afirma: indicativo.' },
            { sentence: 'No creo que hayan vueltos de su viaje.', ok: false, options: ['No creo que hayan vuelto de su viaje.', 'No creo que hayan volvido de su viaje.', 'No creo que han vuelto de su viaje.'], answer: 0, why: 'Participio irregular e invariable: «vuelto».' },
            { sentence: 'Qué pena que no hayas podido venir.', ok: true, why: 'Correcta: una valoración de algo anterior.' },
            { sentence: 'Dudo que Marta ha leído el mensaje.', ok: false, options: ['Dudo que Marta haya leído el mensaje.', 'Dudo que Marta había leído el mensaje.', 'Dudo que Marta lea el mensaje ayer.'], answer: 0, why: '«Dudo que» + acción anterior: «haya leído».' },
          ] },
        ] },
        { title: 'Construye frases', blocks: [
          { kind: 'build', title: 'Ordena las palabras', items: [
            { tiles: ['Me', 'alegra', 'que', 'hayas', 'venido'], accept: ['Me alegra que hayas venido'] },
            { tiles: ['Dudo', 'que', 'hayan', 'entendido', 'el', 'problema'], accept: ['Dudo que hayan entendido el problema'] },
            { tiles: ['Es', 'posible', 'que', 'se', 'haya', 'perdido'], accept: ['Es posible que se haya perdido'] },
            { tiles: ['No', 'creo', 'que', 'haya', 'llegado', 'todavía'], accept: ['No creo que haya llegado todavía', 'Todavía no creo que haya llegado'] },
          ] },
        ] },
        { title: 'Transforma las frases', blocks: [
          { kind: 'rewrite', title: 'Escribe la frase con el perfecto de subjuntivo', items: [
            { prompt: 'Me alegra que vengas. (Ya estás aquí.)', instruction: 'Marca que la llegada ya ocurrió.', accept: ['Me alegra que hayas venido'] },
            { prompt: 'Ha salido.', instruction: 'Pasa de la certeza a la duda: «Dudo que…».', accept: ['Dudo que haya salido'] },
            { prompt: 'El comité ha recibido los archivos.', instruction: 'Preséntalo como posibilidad: «Es posible que…».', accept: ['Es posible que el comité haya recibido los archivos'] },
            { prompt: 'Han terminado la obra. (No lo creo.)', instruction: 'Empieza con «No creo que…».', accept: ['No creo que hayan terminado la obra'] },
            { prompt: 'Has hecho un gran trabajo. (Me alegra.)', instruction: 'Empieza con «Me alegra que…».', accept: ['Me alegra que hayas hecho un gran trabajo'] },
          ] },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'La confirmación pendiente', coach: 'Primero escucha sin leer.',
      steps: [
        { title: 'La confirmación pendiente', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha para la idea general. En la segunda, el alumno separa lo que la persona sabe de lo que solo supone.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Puedes bajar la velocidad y leer la transcripción al final.' } },
          { kind: 'listen', title: 'Una compañera del equipo', channel: 'NOTA DE VOZ · PARA ELENA', src: '/audio/grammar-classroom/149.mp3',
            before: 'Una compañera del equipo le manda a Elena una nota de voz sobre la propuesta. ¿Crees que ya tienen respuesta del comité?',
            gist: { prompt: '¿Qué propone la compañera?', options: ['Esperar, comprobar el correo y no rehacer la propuesta.', 'Enviar otra propuesta hoy.', 'Llamar al comité inmediatamente.'], answer: 0, why: '«Podemos esperar hasta mañana y comprobar las dos cuentas de correo… No hace falta preparar otra propuesta desde cero».' },
            details: [
              { prompt: '¿Qué le alegra?', options: ['Que Elena haya guardado una copia.', 'Que el comité haya respondido.', 'Que Marta haya hecho fotos nuevas.'], answer: 0, why: '«Me alegra que hayas guardado una copia de la propuesta».' },
              { prompt: '¿Qué posibilidad propone?', options: ['Que el comité haya enviado la respuesta a otra dirección.', 'Que el comité haya rechazado la propuesta.', 'Que los archivos no hayan salido.'], answer: 0, why: '«Puede que el comité haya enviado la respuesta a otra dirección».' },
              { prompt: '¿Por qué duda de que hayan perdido los archivos?', options: ['Porque el sistema mostró un mensaje de entrega correcta.', 'Porque el comité lo confirmó por teléfono.', 'Porque Marta los envió dos veces.'], answer: 0, why: '«Dudo que hayan perdido los archivos: el sistema mostró un mensaje de entrega correcta».' },
              { prompt: '¿Qué hizo Marta antes del envío?', options: ['Revisó las fotos.', 'Escribió al comité.', 'Guardó una copia.'], answer: 0, why: '«Estoy contenta de que Marta haya revisado las fotos antes de enviar todo».' },
              { prompt: '¿Qué harán si mañana no aparece nada?', options: ['Preguntar por la recepción.', 'Enviar otra propuesta.', 'Cambiar de dirección de correo.'], answer: 0, why: '«Si no aparece nada, preguntaremos por la recepción».' },
            ],
            transcript: 'Hola, Elena. [[Me alegra que|blue]] [[hayas guardado|blue]] una copia de la propuesta. Todavía no veo una confirmación en el correo. [[Puede que|orange]] el comité [[haya enviado|orange]] la respuesta a otra dirección, aunque no tengo ninguna prueba. [[Dudo que|teal]] [[hayan perdido|teal]] los archivos: el sistema mostró un mensaje de entrega correcta. [[Estoy contenta de que|blue]] Marta [[haya revisado|blue]] las fotos antes de enviar todo. Ahora podemos esperar hasta mañana y comprobar las dos cuentas de correo. Si no aparece nada, preguntaremos por la recepción. No hace falta preparar otra propuesta desde cero.',
            reply: { teacher: 'El alumno responde a la compañera en voz alta, como si fuera Elena: una reacción («Me alegra que…»), una duda («Dudo que…») y una posibilidad («Puede que…»).', self: 'Responde a la compañera como si fueras Elena: reacciona con «Me alegra que…» y propón otra posibilidad con «Puede que…».' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Reaccionar, dudar, suponer', coach: 'Habla de lo que ha pasado en tu vida.',
      steps: [
        { title: 'Reaccionar, dudar, suponer', blocks: [
          { kind: 'guide', text: { teacher: 'No hace falta usar todas las preguntas. Sigue lo que el alumno quiere contar y repregunta. Comparte también tus reacciones.', self: 'Responde cada pregunta en voz alta, como en una conversación. Si quieres, escribe tu respuesta antes de decirla.' } },
          { kind: 'talk', cards: [
            { q: '¿Qué ha pasado últimamente en tu vida que te alegra?', followUps: ['¿Quién te ayudó?', '¿Qué te ha sorprendido de esa experiencia?', '¿Hay algo que te da pena?'], phrases: ['[[Me alegra que|blue]] mi familia [[haya…|blue]]', '[[Estoy contento de que|blue]]…', '[[Me sorprende que|blue]]…'], hint: 'Reacción de ahora + algo que ya pasó: haya + participio.', example: 'Me alegra que mi hermano haya encontrado trabajo en mi ciudad. Me sorprende que lo hayan llamado tan rápido.', next: 'Ahora piensa en una noticia reciente.' },
            { q: '¿Qué noticia reciente, de tu ciudad o del mundo, te ha llamado la atención?', followUps: ['¿Qué te parece?', '¿Crees que la información es completa?', '¿Qué es posible que haya pasado detrás de la noticia?'], phrases: ['[[Es una pena que|blue]]…', '[[No creo que|teal]] [[hayan…|teal]]', '[[Es posible que|orange]]…'], hint: 'Separa lo que sabes (indicativo) de lo que solo supones (subjuntivo).', example: 'Han cerrado el cine de mi barrio. Es una pena que lo hayan cerrado. Es posible que no hayan vendido suficientes entradas.', next: 'Hablemos de un misterio pequeño.', teacher: 'Da una información nueva («En realidad, el cine se va a renovar») y pide al alumno que actualice lo que sigue siendo incierto.' },
            { q: '¿Has esperado alguna vez una respuesta importante que no llegaba?', followUps: ['¿Qué pensabas que había pasado?', '¿Qué hiciste mientras tanto?', '¿Cómo terminó?'], phrases: ['[[Puede que|orange]] no [[hayan…|orange]]', '[[Dudo que|teal]]…', 'Al final supe que…'], hint: 'Imagina que estás en ese momento y haz hipótesis con «puede que» + haya + participio.', example: 'Estoy esperando el resultado de una beca. Puede que no hayan leído todas las solicitudes. Dudo que hayan olvidado mi nombre.', next: 'Ahora, piensa en tu grupo de amigos.' },
            { q: 'Un amigo no contesta tus mensajes desde hace dos días. ¿Qué crees que ha pasado?', followUps: ['¿Qué es lo más probable?', '¿Qué no crees que haya pasado?', '¿Qué haces?'], phrases: ['[[Es probable que|orange]] se [[haya…|orange]]', '[[No creo que|teal]] esté enfadado.', 'Seguro que…'], hint: 'Da tres hipótesis: una probable, una posible y una que no crees.', example: 'Es probable que se haya ido de viaje. Puede que haya perdido el teléfono. No creo que esté enfadado conmigo.', next: 'Hablemos de tu aprendizaje.' },
            { q: '¿Qué te alegra de lo que has aprendido en español este año?', followUps: ['¿Qué te sorprende?', '¿Qué es una pena que no hayas podido hacer?', '¿Qué crees que todavía no has dominado?'], phrases: ['[[Me alegra que|blue]] [[haya podido|blue]]…', '[[Es una pena que|blue]] no [[haya tenido|blue]]…', '[[Dudo que|teal]] ya [[haya…|teal]]'], hint: 'Haz un balance con reacciones y dudas.', example: 'Me alegra que haya podido ver una película sin subtítulos. Es una pena que no haya tenido más tiempo para leer. Dudo que haya dominado el subjuntivo, pero voy bien.', next: 'Para terminar, una mirada a los demás.' },
            { q: '¿Qué ha hecho alguien por ti recientemente que quieres agradecer?', followUps: ['¿Qué hizo exactamente?', '¿Se lo has dicho?', '¿Cómo se lo vas a agradecer?'], phrases: ['[[Me encanta que|blue]] [[haya pensado|blue]] en mí.', '[[Es increíble que|blue]]…', 'Le voy a decir: «Gracias por…».'], hint: 'Termina con una frase de agradecimiento directa: «Me alegra mucho que hayas…».', example: 'Mi vecina me cuidó al gato durante las vacaciones. Me encanta que haya pensado en mí. Le voy a decir: «Me alegra mucho que hayas cuidado a Mía».', teacher: 'Cierra con una pregunta de reflexión: «¿Qué diferencia hay entre “Me alegra que vengas” y “Me alegra que hayas venido”?».' },
          ], swap: { teacher: 'Al final, cambien los papeles: el profesor cuenta una pequeña noticia y el alumno reacciona, duda y propone una hipótesis.', self: 'Lee una noticia corta en español y escribe tres frases: una reacción, una duda y una posibilidad. Dilas en voz alta.' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Una actualización para el equipo', coach: 'Separa lo que sabes de lo que supones.',
      steps: [
        { title: 'Una actualización para el equipo', blocks: [
          { kind: 'guide', text: { teacher: 'Puede escribir en clase o como tarea. Usen la revisión automática y después revisen juntos si cada frase afirma o supone.', self: 'Escribe tu mensaje y toca «Revisar mi texto». Después marca cada frase: ¿es un hecho o una hipótesis?' } },
          { kind: 'write', title: 'Después de un envío', situation: 'Tu equipo, tu clase o tu grupo de amigos acaba de enviar algo importante (una propuesta, una solicitud, un regalo por correo) y todavía no tienen respuesta. Escribe un mensaje al grupo.', task: [
            'Valora un **logro** del grupo con me alegra que / estoy contento de que + haya + participio.',
            'Di lo que **sabes con seguridad**, con el indicativo.',
            'Plantea **una duda y una posibilidad** sobre lo que puede haber pasado.',
            'Propón el siguiente paso.',
          ], starters: ['Hola a todos:', 'Me alegra que…', 'Sabemos que…', 'Es posible que…', 'Dudo que…', 'Propongo…'],
            words: ['me alegra que', 'estoy contento de que', 'es posible que', 'puede que', 'dudo que', 'no creo que', 'sabemos que', 'todavía', 'ya'],
            model: 'Hola a todos: [[Me alegra que|blue]] [[hayamos enviado|blue]] la propuesta a tiempo y [[estoy contenta de que|blue]] Marta [[haya revisado|blue]] las fotos. [[Sabemos que|violet]] el sistema [[ha confirmado|violet]] la entrega, pero todavía no tenemos respuesta del comité. [[Es posible que|orange]] [[hayan respondido|orange]] a otra dirección; [[dudo que|teal]] [[hayan perdido|teal]] los archivos. Propongo comprobar las dos cuentas de correo mañana antes de enviar otra versión. Así no duplicamos el trabajo. Un abrazo, Elena',
            minWords: 70 },
        ] },
      ],
    },
    {
      id: 'cerrar', label: 'Cerrar', icon: '✓', mascot: '/brand/mascot/standing.webp',
      title: 'Lo esencial', coach: '¿Qué te llevas hoy?',
      steps: [
        { title: 'Lo esencial', blocks: [
          { kind: 'recap', items: [
            { tone: 'blue', label: 'REACCIÓN', formula: 'me alegra / es una pena + que + haya + participio', example: 'Me alegra que hayas venido.', caption: 'Reaccionas ahora a algo que ya pasó.' },
            { tone: 'teal', label: 'DUDA', formula: 'dudo que / no creo que + haya + participio', example: 'Dudo que hayan revisado todo.', caption: 'No afirmas el resultado.' },
            { tone: 'orange', label: 'POSIBILIDAD', formula: 'es posible que / puede que + haya + participio', example: 'Puede que se haya perdido.', caption: 'Una hipótesis sobre algo anterior.' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La forma', text: '**haya, hayas, haya, hayamos, hayáis, hayan + participio** invariable. Si **afirmas** (sé que, creo que), vuelve al indicativo: «Creo que **ha** llegado».' },
        ] },
        { title: 'Desafío final', blocks: [
          { kind: 'choice', title: 'Cuatro frases, sin ayuda', items: [
            { prompt: 'Qué bien que ___ (ustedes) a tiempo.', options: ['hayan llegado', 'han llegado', 'hayan llegados'], answer: 0, why: 'Una reacción a algo anterior, con participio invariable.' },
            { prompt: 'No creo que el banco ___ ya.', options: ['ha abierto', 'haya abierto', 'haya abrido'], answer: 1, why: 'Duda + participio irregular «abierto».' },
            { prompt: 'Es probable que Marcos se ___ dormido.', options: ['haya quedado', 'ha quedado', 'quede'], answer: 0, why: 'Una hipótesis sobre algo que pudo ocurrir.' },
            { prompt: 'Estoy segura de que ya te ___ el mensaje.', options: ['hayan enviado', 'han enviado', 'envíen'], answer: 1, why: '«Estoy segura de que» afirma: indicativo.' },
          ] },
        ] },
        { title: 'Tus errores y repaso', blocks: [
          { kind: 'review' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «Creo que ha llegado» y «No creo que haya llegado»: ¿qué cambia? La primera afirma (indicativo); la segunda duda (subjuntivo). Las dos miran una acción anterior.' },
        ] },
      ],
    },
  ],
};
