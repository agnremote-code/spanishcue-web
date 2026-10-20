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
      title: 'Reaccionar a lo que ya ha pasado', coach: 'Ahora reacciono a algo que ya pasó. Now I react to something that already happened.',
      steps: [
        { title: 'Ahora reacciono a algo anterior · Reacting now to something earlier', blocks: [
          { kind: 'lead', text: 'El equipo de Elena acaba de enviar una propuesta para una exposición. Ahora Elena **reacciona** a lo que ya hicieron y **duda** de lo que todavía no sabe. La reacción es de **ahora**; la acción es **anterior**.', en: 'Elena’s team has just sent a proposal for an exhibition. Now Elena reacts to what they have already done and doubts what she doesn’t know yet. The reaction is now; the action came before.' },
          { kind: 'guide', text: { teacher: 'Lean las dos columnas. Pregunta: «¿En cuál de las dos frases la persona ya está aquí?».', self: 'Lee las dos columnas. ¿En cuál de las dos frases la persona ya llegó?' } },
          { kind: 'compare', title: 'Me alegra que… · I’m glad that…', columns: [
            { tone: 'neutral', label: 'PRESENTE DE SUBJUNTIVO', sentence: 'Me alegra que **vengas** a la fiesta del sábado.', idea: 'La acción es presente o futura: la persona va a venir.', en: 'Present subjunctive: the action is present or future; the person is going to come.' },
            { tone: 'blue', label: 'PERFECTO DE SUBJUNTIVO', sentence: '[[Me alegra que|blue]] [[hayas venido|blue]].', idea: 'La acción **ya ocurrió**: la persona está aquí y yo reacciono ahora.', en: 'Perfect subjunctive: the action has already happened; the person is here and I react now. English simply says “I’m glad you’ve come”.' },
          ] },
          { kind: 'tip', icon: '🔁', title: 'Es como el perfecto compuesto', text: 'Si afirmas, dices «**Has venido**». Si reaccionas, dudas o consideras una posibilidad, el auxiliar pasa al subjuntivo: «Me alegra que **hayas venido**».', en: 'When you state a fact, you say “Has venido” (you have come). When you react, doubt or consider a possibility, the auxiliary moves into the subjunctive: “Me alegra que hayas venido”.' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: '«Me alegra que hayamos terminado a tiempo.» ¿Qué pasó primero?', options: ['Terminaron el trabajo.', 'Elena se alegró.'], answer: 0, why: 'El trabajo terminó antes; la alegría es de ahora.', en: '“I’m glad we’ve finished on time.” What happened first?' },
            { prompt: 'Tu amiga está en tu casa. Le dices: «¡Qué bien que ___!».', options: ['hayas venido', 'vengas mañana', 'has venido'], answer: 0, why: 'La llegada ya ocurrió y tú reaccionas ahora: perfecto de subjuntivo.', en: 'Your friend is at your house. You say: “How nice that you’ve come!”' },
          ] },
        ] },
        { title: 'Cómo se forma · How it is formed', mascot: '/brand/mascot/studying.webp', coach: 'Haya + participio.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'PERFECTO DE SUBJUNTIVO', question: '¿Cómo se forma?', en: 'Perfect subjunctive: how is it formed?', formula: ['haya / hayas / haya / hayamos / hayáis / hayan + participio'],
            meaning: 'Se forma con **haber en presente de subjuntivo** y el **participio** del verbo principal. El participio no cambia nunca.',
            examples: [
              { es: 'Me alegra que [[hayamos terminado|blue]] a tiempo.', en: 'I’m glad we’ve finished on time.' },
              { es: 'Dudo que [[hayan revisado|teal]] todo tan pronto.', en: 'I doubt they’ve checked everything so soon.' },
              { es: 'Es posible que el comité [[haya recibido|orange]] los archivos.', en: 'It’s possible the committee has received the files.' },
            ] },
          { kind: 'table', title: 'Formas · Forms', head: ['', 'haber', 'enviar', 'recibir'], rows: [
            ['yo', '**haya**', 'haya envi**ado**', 'haya recib**ido**'],
            ['tú', '**hayas**', 'hayas envi**ado**', 'hayas recib**ido**'],
            ['él / ella / usted', '**haya**', 'haya envi**ado**', 'haya recib**ido**'],
            ['nosotros / nosotras', '**hayamos**', 'hayamos envi**ado**', 'hayamos recib**ido**'],
            ['vosotros / vosotras', '**hayáis**', 'hayáis envi**ado**', 'hayáis recib**ido**'],
            ['ellos / ellas / ustedes', '**hayan**', 'hayan envi**ado**', 'hayan recib**ido**'],
          ], note: 'Participios irregulares de siempre: hecho, dicho, visto, escrito, puesto, vuelto, abierto, roto, muerto, descubierto.' },
          { kind: 'tip', icon: '🔒', title: 'El participio no cambia', text: 'Solo cambia **haya**: «que ellas **hayan llegado**», nunca «llegadas». Y no pongas nada entre los dos: «que **no** haya llegado», «que **ya** haya llegado».', en: 'Only “haya” changes: “que ellas hayan llegado”, never “llegadas”. And don’t put anything between the two words: “que no haya llegado”, “que ya haya llegado”.' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'Es una pena que tus amigos no ___ venir.', options: ['hayan podido', 'hayan podidos', 'han podido'], answer: 0, why: '«Hayan» + participio invariable «podido».', en: 'It’s a shame your friends haven’t been able to come.' },
            { prompt: 'No creo que Luis ___ la tarea.', options: ['haya hacido', 'haya hecho', 'ha hecho'], answer: 1, why: 'El participio de «hacer» es «hecho».', en: 'I don’t think Luis has done the homework.' },
          ] },
        ] },
        { title: 'Reaccionar y valorar · Reacting and evaluating', mascot: '/brand/mascot/speaking.webp', coach: '¡Qué bien que lo hayas conseguido!', blocks: [
          { kind: 'concept', tone: 'blue', label: 'REACCIÓN ACTUAL', question: '¿Qué te parece lo que ha pasado?', en: 'A reaction now: what do you think of what has happened?', formula: ['me alegra / me sorprende / es una pena + que + haya + participio', 'estoy contento de que / qué bien que + haya + participio'],
            meaning: 'Valoras **ahora** algo que **ya ha ocurrido**: te alegra, te sorprende, te molesta o te parece una pena.',
            examples: [
              { es: '[[Me alegra que|blue]] [[hayas guardado|blue]] una copia.', en: 'I’m glad you’ve kept a copy.' },
              { es: '[[Me sorprende que|blue]] un compañero [[haya encontrado|blue]] fotos nuevas a última hora.', en: 'I’m surprised a colleague has found new photos at the last minute.' },
              { es: '[[Es una pena que|blue]] Ana no [[haya podido|blue]] venir.', en: 'It’s a shame Ana hasn’t been able to come.' },
              { es: '[[Qué bien que|blue]] [[hayas aprobado|blue]] el examen.', en: 'How great that you’ve passed the exam.' },
            ] },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'Me alegra que ___ (tú, llamar).', options: ['hayas llamado', 'has llamado', 'habías llamado'], answer: 0, why: 'Una reacción actual a una acción anterior: «hayas llamado».', en: 'I’m glad that you have called.' },
            { prompt: 'Me molesta que nadie me ___ la verdad.', options: ['haya dicho', 'ha dicho', 'haya decido'], answer: 0, why: 'Una valoración + participio irregular «dicho».', en: 'It bothers me that nobody has told me the truth.' },
          ] },
        ] },
        { title: 'Dudar de un resultado · Doubting a result', mascot: '/autoestudio/mascot/noting.webp', coach: 'No lo afirmo: lo pongo en duda.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'DUDA', question: '¿Ya ha pasado? No lo creo.', en: 'Doubt: has it happened already? I don’t think so.', formula: ['dudo que / no creo que / no estoy seguro de que + haya + participio'],
            meaning: 'No afirmas que la acción **haya terminado**: la pones en duda. Por eso no se usa el indicativo.',
            examples: [
              { es: '[[Dudo que|teal]] [[hayan revisado|teal]] todo tan pronto.', en: 'I doubt they’ve checked everything so soon.' },
              { es: '[[No creo que|teal]] Marta [[haya llegado|teal]] todavía.', en: 'I don’t think Marta has arrived yet.' },
              { es: '[[No estoy segura de que|teal]] [[hayamos enviado|teal]] la versión final.', en: 'I’m not sure we’ve sent the final version.' },
            ] },
          { kind: 'compare', title: 'Creer o no creer · Believing or not', columns: [
            { tone: 'violet', label: 'CERTEZA · INDICATIVO', sentence: '[[Creo que|violet]] Marta [[ha llegado|violet]].', idea: 'Lo presentas como verdad: indicativo.', en: 'Certainty: you present it as true, so indicative.' },
            { tone: 'teal', label: 'DUDA · SUBJUNTIVO', sentence: '[[No creo que|teal]] Marta [[haya llegado|teal]].', idea: 'Lo pones en duda: subjuntivo.', en: 'Doubt: you call it into question, so subjunctive. English uses the same verb form in both sentences; Spanish does not.' },
          ] },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'Dudo que ellos ___ el mensaje.', options: ['hayan entendido', 'han entendido', 'entenderían'], answer: 0, why: '«Dudo que» + una acción anterior: «hayan entendido».', en: 'I doubt they’ve understood the message.' },
            { prompt: 'Estoy seguro de que Ana ___ el correo.', options: ['haya leído', 'ha leído'], answer: 1, why: '«Estoy seguro de que» afirma: indicativo.', en: 'I’m sure Ana has read the email.' },
          ] },
        ] },
        { title: 'Considerar una posibilidad · Considering a possibility', mascot: '/brand/mascot/seated.webp', coach: 'Puede ser… o no.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'POSIBILIDAD', question: '¿Qué puede haber pasado?', en: 'Possibility: what may have happened?', formula: ['es posible que / puede que / es probable que + haya + participio'],
            meaning: 'Propones una **explicación posible** de algo que **puede haber ocurrido**, sin presentarla como un hecho demostrado.',
            examples: [
              { es: '[[Es posible que|orange]] el comité [[haya recibido|orange]] ya los archivos.', en: 'It’s possible the committee has already received the files.' },
              { es: '[[Puede que|orange]] [[hayan enviado|orange]] la respuesta a otra dirección.', en: 'They may have sent the reply to another address.' },
              { es: '[[Es probable que|orange]] Luis se [[haya quedado|orange]] dormido.', en: 'Luis has probably overslept.' },
            ] },
          { kind: 'tip', icon: '🔎', title: 'Hecho o hipótesis', text: 'Para un **hecho comprobado**: «El sistema **ha confirmado** la entrega». Para una **hipótesis**: «**Es posible que** el comité **haya abierto** el archivo». No presentes una posibilidad como si fuera seguro.', en: 'For a checked fact: “The system has confirmed the delivery.” For a hypothesis: “It’s possible the committee has opened the file.” Don’t present a possibility as if it were certain.' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'Es posible que se ___ el paquete en el camino.', options: ['haya perdido', 'ha perdido', 'había perdido'], answer: 0, why: '«Es posible que» + una acción anterior: «haya perdido».', en: 'It’s possible the parcel has got lost on the way.' },
            { prompt: 'Luis no contesta. Puede que ___ el teléfono en casa.', options: ['haya dejado', 'ha dejado', 'deje'], answer: 0, why: 'Una hipótesis sobre algo que ya pudo ocurrir: «haya dejado».', en: 'Luis isn’t answering. Maybe he’s left his phone at home.' },
          ] },
        ] },
        { title: 'Cómo elegir · How to choose', mascot: '/brand/mascot/kneeling.webp', coach: '¿Afirmas o reaccionas? ¿Ya pasó o no?', blocks: [
          { kind: 'decide', title: 'Piensa en tu frase y responde · Think about your sentence', steps: [
            { q: '¿Afirmas el hecho como verdad (sé que, creo que, es verdad que)?', yes: 'Usa el **indicativo**: «[[Creo que|violet]] [[ha llegado|violet]]».', no: 'next' },
            { q: '¿La acción ya ha ocurrido (o pudo ocurrir) antes de tu reacción, duda o hipótesis?', yes: 'Usa **haya + participio**: «[[Me alegra que|blue]] [[hayas venido|blue]]» · «[[Dudo que|teal]] [[haya llegado|teal]]».', no: 'Si la acción es presente o futura, usa el **presente de subjuntivo**: «Me alegra que **vengas** el sábado».' },
          ] },
          { kind: 'table', title: 'Tres miradas, la misma acción · Three views, the same action', head: ['frase', 'idea'], rows: [
            ['Sé que Marta **ha revisado** las fotos.', 'Certeza: un hecho.'],
            ['[[Me alegra que|blue]] Marta [[haya revisado|blue]] las fotos.', 'Reacción a un hecho anterior.'],
            ['[[Dudo que|teal]] Marta [[haya revisado|teal]] las fotos.', 'Duda: no lo afirmo.'],
            ['[[Es posible que|orange]] Marta [[haya revisado|orange]] las fotos.', 'Hipótesis: puede ser.'],
          ] },
          { kind: 'tip', icon: '🔭', title: 'Más adelante', text: 'También vas a encontrar esta forma con un futuro: «Llámame **cuando hayas terminado**». Indica que una acción futura estará terminada antes de otra.', en: 'Later on you will also meet this form with a future meaning: “Call me when you’ve finished.” It shows that a future action will be complete before another one.' },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Estos errores son muy comunes.', blocks: [
          { kind: 'guide', text: { teacher: 'Tu alumno busca el error y dice si la frase afirma, reacciona, duda o considera una posibilidad.', self: 'Lee cada frase, busca el error y piensa: ¿afirma o no afirma? Después toca para ver la corrección.' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
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
      title: 'El perfecto de subjuntivo en situaciones reales', coach: 'Toca las formas marcadas. Tap the marked forms.',
      steps: [
        { title: 'Después de la entrega · After the submission', blocks: [
          { kind: 'guide', text: { teacher: 'Lean el diálogo con papeles. Después, el alumno toca cada forma marcada y dice si es una reacción, una duda, una posibilidad o una certeza.', self: 'Lee el diálogo. Después toca cada forma marcada para descubrir por qué se usó.' } },
          { kind: 'explore', title: 'Una videollamada del equipo', setting: 'El equipo de Elena envió ayer una propuesta para una exposición. Hoy hablan por videollamada. (Yesterday Elena’s team sent a proposal for an exhibition. Today they talk on a video call.)', lines: [
            { who: 'Elena', text: 'Hola a todos. Antes que nada: [[me alegra que|blue]] [[hayamos terminado|blue]] a tiempo.', en: 'Hi, everyone. First of all: I’m glad we’ve finished on time.' },
            { who: 'Marta', text: '¡Sí! Fue una semana muy intensa.', en: 'Yes! It was a very intense week.' },
            { who: 'Andrés', text: '¿Sabemos algo del comité?', en: 'Do we know anything from the committee?' },
            { who: 'Elena', text: 'Todavía no. [[Es posible que|orange]] [[hayan recibido|orange]] ya los archivos, pero no hay confirmación.', en: 'Not yet. They may have already received the files, but there’s no confirmation.' },
            { who: 'Andrés', text: '¿Y si los están revisando?', en: 'What if they’re reviewing them?' },
            { who: 'Elena', text: '[[Dudo que|teal]] [[hayan revisado|teal]] todo tan pronto. Son cuarenta propuestas.', en: 'I doubt they’ve checked everything so soon. There are forty proposals.' },
            { who: 'Marta', text: 'Lo que [[sé que|violet]] [[ha funcionado|violet]] son las fotos nuevas de Andrés.', en: 'What I know has worked are Andrés’s new photos.' },
            { who: 'Elena', text: 'Es verdad. [[Me sorprende que|blue]] [[hayas encontrado|blue]] esas imágenes a última hora.', en: 'That’s true. I’m surprised you found those pictures at the last minute.' },
            { who: 'Andrés', text: 'Estaban en una carpeta vieja. ¡Tuve suerte!', en: 'They were in an old folder. I was lucky!' },
            { who: 'Marta', text: '¿Enviamos otra versión, por si acaso?', en: 'Shall we send another version, just in case?' },
            { who: 'Elena', text: 'Mejor no. [[Puede que|orange]] el comité no [[haya abierto|orange]] la primera todavía.', en: 'Better not. The committee may not have opened the first one yet.' },
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
            { prompt: '¿Por qué Elena no quiere enviar otra versión?', options: ['Porque puede que el comité no haya abierto la primera.', 'Porque el comité ya ha respondido.', 'Porque faltan las fotos.'], answer: 0, why: '«Puede que el comité no haya abierto la primera todavía».', en: 'Why doesn’t Elena want to send another version?' },
            { prompt: '¿Qué le sorprende a Elena?', options: ['Que Andrés haya encontrado fotos a última hora.', 'Que el comité haya respondido tan pronto.', 'Que Marta haya llegado tarde.'], answer: 0, why: '«Me sorprende que hayas encontrado esas imágenes a última hora».', en: 'What surprises Elena?' },
          ] },
        ] },
        { title: '¿Dónde está Luis? · Where is Luis?', blocks: [
          { kind: 'explore', title: 'Esperando en el restaurante', setting: 'Sofía y Diego esperan a su amigo Luis para cenar. Ya son las nueve y media y Luis no llega. (Sofía and Diego are waiting for their friend Luis for dinner. It’s already half past nine and Luis hasn’t arrived.)', lines: [
            { who: 'Sofía', text: 'Luis no contesta. Nos íbamos a ver a las nueve.', en: 'Luis isn’t answering. We were meeting at nine.' },
            { who: 'Diego', text: '[[Puede que|orange]] se [[haya quedado|orange]] sin batería.', en: 'Maybe his battery has died.' },
            { who: 'Sofía', text: 'O [[es posible que|orange]] [[haya tenido|orange]] un problema en el trabajo.', en: 'Or maybe he’s had a problem at work.' },
            { who: 'Diego', text: '[[No creo que|teal]] se [[haya olvidado|teal]]. Ayer me habló de la cena.', en: 'I don’t think he’s forgotten. He mentioned the dinner to me yesterday.' },
            { who: 'Sofía', text: 'Mira, ¡ahí viene!', en: 'Look, here he comes!' },
            { who: 'Luis', text: '¡Perdón, perdón! El metro se paró veinte minutos.', en: 'Sorry, sorry! The metro stopped for twenty minutes.' },
            { who: 'Diego', text: 'Tranquilo. [[Qué bien que|blue]] [[hayas llegado|blue]] sin problemas.', en: 'Don’t worry. Good thing you’ve made it here without any problems.' },
            { who: 'Luis', text: '[[Es una pena que|blue]] no [[hayan pedido|blue]] todavía… ¡Tengo un hambre!', en: 'What a shame you haven’t ordered yet… I’m starving!' },
            { who: 'Sofía', text: 'Te esperábamos. Pide tú primero.', en: 'We were waiting for you. You order first.' },
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
        { title: 'Reacción, duda o posibilidad · Reaction, doubt or possibility', blocks: [
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
      title: 'Practicar', coach: '¿Afirmas o no? ¿Ya pasó o no? Are you stating it or not? Has it already happened or not?',
      steps: [
        { title: 'Elige según el contexto · Choose according to the context', blocks: [
          { kind: 'choice', items: [
            { context: 'Tu hermana aprobó ayer un examen muy difícil.', prompt: '¡Me alegra mucho que lo ___!', options: ['hayas aprobado', 'has aprobado', 'apruebes'], answer: 0, why: 'Una reacción actual a un hecho anterior.', en: 'Your sister passed a very difficult exam yesterday.' },
            { context: 'El paquete debía llegar ayer y no llegó.', prompt: 'Es posible que se ___ en el correo.', options: ['haya perdido', 'ha perdido', 'perdía'], answer: 0, why: 'Una hipótesis sobre algo que pudo ocurrir.', en: 'The parcel should have arrived yesterday and it didn’t.' },
            { context: 'Tu compañero dice que ya terminó el informe de cuarenta páginas en una hora.', prompt: 'No creo que lo ___ tan rápido.', options: ['ha terminado', 'haya terminado', 'terminaba'], answer: 1, why: 'Duda sobre una acción anterior: subjuntivo.', en: 'Your colleague says he finished the forty-page report in an hour.' },
            { context: 'Ves el coche de Ana en la puerta.', prompt: 'Seguro que Ana ya ___.', options: ['haya llegado', 'ha llegado', 'llegue'], answer: 1, why: '«Seguro que» afirma: indicativo.', en: 'You see Ana’s car at the door.' },
            { context: 'Tu amigo no pudo venir a tu cumpleaños.', prompt: 'Es una pena que no ___ venir.', options: ['hayas podido', 'has podido', 'puedes'], answer: 0, why: 'Una valoración de algo anterior.', en: 'Your friend couldn’t come to your birthday party.' },
            { context: 'Tus vecinos se fueron sin despedirse.', prompt: 'Me sorprende que no se ___.', options: ['han despedido', 'hayan despedido', 'despiden'], answer: 1, why: 'Una reacción de sorpresa ante un hecho anterior.', en: 'Your neighbours left without saying goodbye.' },
          ] },
        ] },
        { title: 'Compara los significados · Compare the meanings', blocks: [
          { kind: 'choice', items: [
            { prompt: '¿En qué frase la persona **ya está** aquí?', options: ['Me alegra que hayas venido.', 'Me alegra que vengas.'], answer: 0, why: '«Hayas venido»: la llegada ya ocurrió. «Vengas» puede ser futuro.', en: 'In which sentence is the person already here?' },
            { prompt: '¿Qué frase **afirma** el hecho?', options: ['Creo que han cerrado la tienda.', 'No creo que hayan cerrado la tienda.', 'Puede que hayan cerrado la tienda.'], answer: 0, why: '«Creo que» + indicativo afirma. Las otras dudan o suponen.', en: 'Which sentence states the fact?' },
            { prompt: '«Puede que Marta haya salido.» ¿Qué sabemos?', options: ['Nada seguro: es una posibilidad.', 'Que Marta salió.', 'Que Marta va a salir.'], answer: 0, why: '«Puede que» presenta una hipótesis.', en: '“Puede que Marta haya salido.” What do we know?' },
            { prompt: '¿Qué frase reacciona a algo que **todavía no** ha pasado?', options: ['Me preocupa que llueva el sábado.', 'Me preocupa que haya llovido tanto.'], answer: 0, why: '«Llueva» mira el sábado; «haya llovido» mira algo anterior.', en: 'Which sentence reacts to something that hasn’t happened yet?' },
          ] },
        ] },
        { title: 'Completa la conversación · Complete the conversation', blocks: [
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
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Me alegra que has encontrado trabajo.', ok: false, options: ['Me alegra que hayas encontrado trabajo.', 'Me alegra que habías encontrado trabajo.', 'Me alegra que encontraras trabajo ahora.'], answer: 0, why: 'Una reacción actual a algo anterior: «hayas encontrado».' },
            { sentence: 'Es posible que los niños ya se hayan dormido.', ok: true, why: 'Correcta: una hipótesis sobre algo anterior.' },
            { sentence: 'Creo que Juan haya salido.', ok: false, options: ['Creo que Juan ha salido.', 'Creo que Juan haya salida.', 'Creo que Juan hayan salido.'], answer: 0, why: '«Creo que» afirma: indicativo.' },
            { sentence: 'No creo que hayan vueltos de su viaje.', ok: false, options: ['No creo que hayan vuelto de su viaje.', 'No creo que hayan volvido de su viaje.', 'No creo que han vuelto de su viaje.'], answer: 0, why: 'Participio irregular e invariable: «vuelto».' },
            { sentence: 'Qué pena que no hayas podido venir.', ok: true, why: 'Correcta: una valoración de algo anterior.' },
            { sentence: 'Dudo que Marta ha leído el mensaje.', ok: false, options: ['Dudo que Marta haya leído el mensaje.', 'Dudo que Marta había leído el mensaje.', 'Dudo que Marta lea el mensaje ayer.'], answer: 0, why: '«Dudo que» + acción anterior: «haya leído».' },
          ] },
        ] },
        { title: 'Construye frases · Build sentences', blocks: [
          { kind: 'build', title: 'Ordena las palabras', items: [
            { tiles: ['Me', 'alegra', 'que', 'hayas', 'venido'], accept: ['Me alegra que hayas venido'], en: 'I’m glad you’ve come.' },
            { tiles: ['Dudo', 'que', 'hayan', 'entendido', 'el', 'problema'], accept: ['Dudo que hayan entendido el problema'], en: 'I doubt they’ve understood the problem.' },
            { tiles: ['Es', 'posible', 'que', 'se', 'haya', 'perdido'], accept: ['Es posible que se haya perdido'], en: 'It may have got lost.' },
            { tiles: ['No', 'creo', 'que', 'haya', 'llegado', 'todavía'], accept: ['No creo que haya llegado todavía', 'Todavía no creo que haya llegado'], en: 'I don’t think he’s arrived yet.' },
          ] },
        ] },
        { title: 'Transforma las frases · Transform the sentences', blocks: [
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
      title: 'La confirmación pendiente', coach: 'Primero escucha sin leer. First listen without reading.',
      steps: [
        { title: 'La confirmación pendiente', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha para la idea general. En la segunda, el alumno separa lo que la persona sabe de lo que solo supone.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Puedes bajar la velocidad y leer la transcripción al final.' } },
          { kind: 'listen', title: 'Una compañera del equipo', channel: 'NOTA DE VOZ · PARA ELENA', src: '/audio/grammar-classroom/149.mp3',
            before: 'Una compañera del equipo le manda a Elena una nota de voz sobre la propuesta. ¿Crees que ya tienen respuesta del comité? (A team member sends Elena a voice message about the proposal. Do you think they already have an answer from the committee?)',
            gist: { prompt: '¿Qué propone la compañera?', options: ['Esperar, comprobar el correo y no rehacer la propuesta.', 'Enviar otra propuesta hoy.', 'Llamar al comité inmediatamente.'], answer: 0, why: '«Podemos esperar hasta mañana y comprobar las dos cuentas de correo… No hace falta preparar otra propuesta desde cero».', en: 'What does the colleague suggest?' },
            details: [
              { prompt: '¿Qué le alegra?', options: ['Que Elena haya guardado una copia.', 'Que el comité haya respondido.', 'Que Marta haya hecho fotos nuevas.'], answer: 0, why: '«Me alegra que hayas guardado una copia de la propuesta».', en: 'What is she glad about?' },
              { prompt: '¿Qué posibilidad propone?', options: ['Que el comité haya enviado la respuesta a otra dirección.', 'Que el comité haya rechazado la propuesta.', 'Que los archivos no hayan salido.'], answer: 0, why: '«Puede que el comité haya enviado la respuesta a otra dirección».', en: 'What possibility does she suggest?' },
              { prompt: '¿Por qué duda de que hayan perdido los archivos?', options: ['Porque el sistema mostró un mensaje de entrega correcta.', 'Porque el comité lo confirmó por teléfono.', 'Porque Marta los envió dos veces.'], answer: 0, why: '«Dudo que hayan perdido los archivos: el sistema mostró un mensaje de entrega correcta».', en: 'Why does she doubt the files have been lost?' },
              { prompt: '¿Qué hizo Marta antes del envío?', options: ['Revisó las fotos.', 'Escribió al comité.', 'Guardó una copia.'], answer: 0, why: '«Estoy contenta de que Marta haya revisado las fotos antes de enviar todo».', en: 'What did Marta do before sending?' },
              { prompt: '¿Qué harán si mañana no aparece nada?', options: ['Preguntar por la recepción.', 'Enviar otra propuesta.', 'Cambiar de dirección de correo.'], answer: 0, why: '«Si no aparece nada, preguntaremos por la recepción».', en: 'What will they do if nothing turns up tomorrow?' },
            ],
            transcript: 'Hola, Elena. [[Me alegra que|blue]] [[hayas guardado|blue]] una copia de la propuesta. Todavía no veo una confirmación en el correo. [[Puede que|orange]] el comité [[haya enviado|orange]] la respuesta a otra dirección, aunque no tengo ninguna prueba. [[Dudo que|teal]] [[hayan perdido|teal]] los archivos: el sistema mostró un mensaje de entrega correcta. [[Estoy contenta de que|blue]] Marta [[haya revisado|blue]] las fotos antes de enviar todo. Ahora podemos esperar hasta mañana y comprobar las dos cuentas de correo. Si no aparece nada, preguntaremos por la recepción. No hace falta preparar otra propuesta desde cero.',
            reply: { teacher: 'El alumno responde a la compañera en voz alta, como si fuera Elena: una reacción («Me alegra que…»), una duda («Dudo que…») y una posibilidad («Puede que…»).', self: 'Responde a la compañera como si fueras Elena: reacciona con «Me alegra que…» y propón otra posibilidad con «Puede que…».' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Reaccionar, dudar, suponer', coach: 'Habla de lo que ha pasado en tu vida. Talk about what has happened in your life.',
      steps: [
        { title: 'Reaccionar, dudar, suponer', blocks: [
          { kind: 'guide', text: { teacher: 'No hace falta usar todas las preguntas. Sigue lo que el alumno quiere contar y repregunta. Comparte también tus reacciones.', self: 'Responde cada pregunta en voz alta, como en una conversación. Si quieres, escribe tu respuesta antes de decirla.' } },
          { kind: 'talk', cards: [
            { q: '¿Qué ha pasado últimamente en tu vida que te alegra? · What has happened in your life lately that makes you glad?', followUps: ['¿Quién te ayudó?', '¿Qué te ha sorprendido de esa experiencia?', '¿Hay algo que te da pena?'], phrases: ['[[Me alegra que|blue]] mi familia [[haya…|blue]]', '[[Estoy contento de que|blue]]…', '[[Me sorprende que|blue]]…'], hint: 'Reacción de ahora + algo que ya pasó: haya + participio.', example: 'Me alegra que mi hermano haya encontrado trabajo en mi ciudad. Me sorprende que lo hayan llamado tan rápido.', next: 'Ahora piensa en una noticia reciente.' },
            { q: '¿Qué noticia reciente, de tu ciudad o del mundo, te ha llamado la atención? · Which recent news story, from your city or the world, has caught your attention?', followUps: ['¿Qué te parece?', '¿Crees que la información es completa?', '¿Qué es posible que haya pasado detrás de la noticia?'], phrases: ['[[Es una pena que|blue]]…', '[[No creo que|teal]] [[hayan…|teal]]', '[[Es posible que|orange]]…'], hint: 'Separa lo que sabes (indicativo) de lo que solo supones (subjuntivo).', example: 'Han cerrado el cine de mi barrio. Es una pena que lo hayan cerrado. Es posible que no hayan vendido suficientes entradas.', next: 'Hablemos de un misterio pequeño.', teacher: 'Da una información nueva («En realidad, el cine se va a renovar») y tu alumno actualiza lo que sigue siendo incierto.' },
            { q: '¿Has esperado alguna vez una respuesta importante que no llegaba? · Have you ever waited for an important answer that didn’t come?', followUps: ['¿Qué pensabas que había pasado?', '¿Qué hiciste mientras tanto?', '¿Cómo terminó?'], phrases: ['[[Puede que|orange]] no [[hayan…|orange]]', '[[Dudo que|teal]]…', 'Al final supe que…'], hint: 'Imagina que estás en ese momento y haz hipótesis con «puede que» + haya + participio.', example: 'Estoy esperando el resultado de una beca. Puede que no hayan leído todas las solicitudes. Dudo que hayan olvidado mi nombre.', next: 'Ahora, piensa en tu grupo de amigos.' },
            { q: 'Un amigo no contesta tus mensajes desde hace dos días. ¿Qué crees que ha pasado? · A friend hasn’t answered your messages for two days. What do you think has happened?', followUps: ['¿Qué es lo más probable?', '¿Qué no crees que haya pasado?', '¿Qué haces?'], phrases: ['[[Es probable que|orange]] se [[haya…|orange]]', '[[No creo que|teal]] esté enfadado.', 'Seguro que…'], hint: 'Da tres hipótesis: una probable, una posible y una que no crees.', example: 'Es probable que se haya ido de viaje. Puede que haya perdido el teléfono. No creo que esté enfadado conmigo.', next: 'Hablemos de tu aprendizaje.' },
            { q: '¿Qué te alegra de lo que has aprendido en español este año? · What are you glad about in what you’ve learnt in Spanish this year?', followUps: ['¿Qué te sorprende?', '¿Qué es una pena que no hayas podido hacer?', '¿Qué crees que todavía no has dominado?'], phrases: ['[[Me alegra que|blue]] [[haya podido|blue]]…', '[[Es una pena que|blue]] no [[haya tenido|blue]]…', '[[Dudo que|teal]] ya [[haya…|teal]]'], hint: 'Haz un balance con reacciones y dudas.', example: 'Me alegra que haya podido ver una película sin subtítulos. Es una pena que no haya tenido más tiempo para leer. Dudo que haya dominado el subjuntivo, pero voy bien.', next: 'Para terminar, una mirada a los demás.' },
            { q: '¿Qué ha hecho alguien por ti recientemente que quieres agradecer? · What has someone done for you recently that you want to thank them for?', followUps: ['¿Qué hizo exactamente?', '¿Se lo has dicho?', '¿Cómo se lo vas a agradecer?'], phrases: ['[[Me encanta que|blue]] [[haya pensado|blue]] en mí.', '[[Es increíble que|blue]]…', 'Le voy a decir: «Gracias por…».'], hint: 'Termina con una frase de agradecimiento directa: «Me alegra mucho que hayas…».', example: 'Mi vecina me cuidó al gato durante las vacaciones. Me encanta que haya pensado en mí. Le voy a decir: «Me alegra mucho que hayas cuidado a Mía».', teacher: 'Cierra con una pregunta de reflexión: «¿Qué diferencia hay entre “Me alegra que vengas” y “Me alegra que hayas venido”?».' },
          ], swap: { teacher: 'Al final, cambien los papeles: el profesor cuenta una pequeña noticia y el alumno reacciona, duda y propone una hipótesis.', self: 'Lee una noticia corta en español y escribe tres frases: una reacción, una duda y una posibilidad. Dilas en voz alta.' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Una actualización para el equipo', coach: 'Separa lo que sabes de lo que supones. Separate what you know from what you assume.',
      steps: [
        { title: 'Una actualización para el equipo', blocks: [
          { kind: 'guide', text: { teacher: 'Puede escribir en clase o como tarea. Usen la revisión automática y después revisen juntos si cada frase afirma o supone.', self: 'Escribe tu mensaje y toca «Revisar mi texto». Después marca cada frase: ¿es un hecho o una hipótesis?' } },
          { kind: 'write', title: 'Después de un envío', situation: 'Tu equipo, tu clase o tu grupo de amigos acaba de enviar algo importante (una propuesta, una solicitud, un regalo por correo) y todavía no tienen respuesta. Escribe un mensaje al grupo. (Your team, class or group of friends has just sent something important and you still have no answer. Write a message to the group.)', task: [
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
      title: 'Lo esencial', coach: '¿Qué te llevas hoy? What do you take away today?',
      steps: [
        { title: 'Lo esencial', blocks: [
          { kind: 'recap', items: [
            { tone: 'blue', label: 'REACCIÓN', formula: 'me alegra / es una pena + que + haya + participio', example: 'Me alegra que hayas venido.', caption: 'Reaccionas ahora a algo que ya pasó.', en: 'You react now to something that has already happened.' },
            { tone: 'teal', label: 'DUDA', formula: 'dudo que / no creo que + haya + participio', example: 'Dudo que hayan revisado todo.', caption: 'No afirmas el resultado.', en: 'You don’t state the result as true.' },
            { tone: 'orange', label: 'POSIBILIDAD', formula: 'es posible que / puede que + haya + participio', example: 'Puede que se haya perdido.', caption: 'Una hipótesis sobre algo anterior.', en: 'A hypothesis about something earlier.' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La forma', text: '**haya, hayas, haya, hayamos, hayáis, hayan + participio** invariable. Si **afirmas** (sé que, creo que), vuelve al indicativo: «Creo que **ha** llegado».', en: 'The form is haya, hayas, haya, hayamos, hayáis, hayan + a participle that never changes. When you state something as true (sé que, creo que), go back to the indicative: “Creo que ha llegado”.' },
        ] },
        { title: 'Desafío final · Final challenge', blocks: [
          { kind: 'choice', title: 'Cuatro frases, sin ayuda · Four sentences, no help', items: [
            { prompt: 'Qué bien que ___ (ustedes) a tiempo.', options: ['hayan llegado', 'han llegado', 'hayan llegados'], answer: 0, why: 'Una reacción a algo anterior, con participio invariable.' },
            { prompt: 'No creo que el banco ___ ya.', options: ['ha abierto', 'haya abierto', 'haya abrido'], answer: 1, why: 'Duda + participio irregular «abierto».' },
            { prompt: 'Es probable que Marcos se ___ dormido.', options: ['haya quedado', 'ha quedado', 'quede'], answer: 0, why: 'Una hipótesis sobre algo que pudo ocurrir.' },
            { prompt: 'Estoy segura de que ya te ___ el mensaje.', options: ['hayan enviado', 'han enviado', 'envíen'], answer: 1, why: '«Estoy segura de que» afirma: indicativo.' },
          ] },
        ] },
        { title: 'Tus errores y repaso · Your mistakes and review', blocks: [
          { kind: 'review' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «Creo que ha llegado» y «No creo que haya llegado»: ¿qué cambia? La primera afirma (indicativo); la segunda duda (subjuntivo). Las dos miran una acción anterior.' },
        ] },
      ],
    },
  ],
};
