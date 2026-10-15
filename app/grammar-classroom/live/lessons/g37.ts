import type { LiveLesson } from '../types';

/**
 * Lesson 37 · C1 · Subjuntivo y concordancia temporal.
 * Valeria, a team coordinator, reports a meeting from two moments: what she
 * expected then and what she values and asks for now. Four modern subjunctive
 * tenses, chosen by frame (present / past) and relation (anterior / not).
 */
export const lesson: LiveLesson = {
  id: 37,
  level: 'C1',
  title: 'Subjuntivo y concordancia temporal',
  subtitle: 'Cambiar de perspectiva al contar expectativas, reacciones y peticiones, eligiendo el tiempo del subjuntivo según el marco y la relación temporal.',
  legend: [
    { tone: 'blue', label: 'Marco presente · acción simultánea o posterior: presente de subjuntivo' },
    { tone: 'teal', label: 'Marco presente · acción anterior: haya + participio' },
    { tone: 'orange', label: 'Marco pasado · acción simultánea o posterior: imperfecto de subjuntivo' },
    { tone: 'violet', label: 'Marco pasado · acción anterior: hubiera + participio' },
  ],
  optionNotes: {
    'participó': 'Después de «esperar que» va el subjuntivo: la acción se presenta a través de una expectativa.',
    'hubiera participado': 'El pluscuamperfecto marca una acción anterior a un marco pasado. Aquí el marco es presente y la acción, posterior.',
    'participa': 'Después de «esperar que» va el subjuntivo, no el indicativo.',
    'haya participado': 'El perfecto de subjuntivo pertenece al marco presente y marca anterioridad. Aquí el marco es pasado y la acción, posterior.',
    'enviaran': 'El imperfecto de subjuntivo pertenece al marco pasado. Aquí el marco es presente y la acción, anterior.',
    'hayan enviado': 'El perfecto de subjuntivo pertenece al marco presente. Con un verbo principal en pasado, la anterioridad va con «hubieran + participio».',
    'enviarán': 'El futuro de indicativo no va después de una valoración con «que». Además, el envío es anterior.',
    'hubieran enviado': 'El pluscuamperfecto marca una acción anterior a un marco pasado. Comprueba el tiempo del verbo principal.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Dos decisiones antes de elegir', coach: '¿Desde cuándo hablas? ¿La acción es anterior o no?',
      steps: [
        { title: 'Dos preguntas, cuatro tiempos', blocks: [
          { kind: 'lead', text: 'Valeria coordina un equipo. En la convocatoria de una reunión escribió: «Espero que todos **puedan** participar y me alegra que **hayan enviado** sus preguntas». Semanas después, en el informe, recuerda aquel momento: «Esperaba que todos **pudieran** participar y me alegraba que **hubieran enviado** sus preguntas». ¿Qué ha cambiado y qué se ha mantenido?' },
          { kind: 'guide', text: { teacher: 'Construyan juntos la tabla: primero el marco (presente o pasado), después la relación (anterior o no anterior). Tu alumno da un ejemplo propio para cada casilla.', self: 'Lee la tabla por filas y columnas. Para cada casilla, inventa un ejemplo sobre tu semana.' } },
          { kind: 'table', title: 'Marco del verbo principal × relación temporal', head: ['', 'Acción simultánea o posterior', 'Acción anterior'], rows: [
            ['**Marco presente** (espero, me alegra, quiero, dudo)', '[[presente de subjuntivo|blue]]: Espero que **participen**.', '[[haya + participio|teal]]: Me alegra que **hayan enviado** las preguntas.'],
            ['**Marco pasado** (esperaba, me alegró, quería, dudé)', '[[imperfecto de subjuntivo|orange]]: Esperaba que **participaran**.', '[[hubiera + participio|violet]]: Me alegraba que **hubieran enviado** las preguntas.'],
          ], note: 'Dos decisiones: **¿desde qué momento hablo?** (marco) y **¿la acción es anterior a ese momento?** (relación). El tiempo del subjuntivo sale de las dos.' },
          { kind: 'tip', icon: '↔', title: '-ra o -se', text: 'En el imperfecto y el pluscuamperfecto, las formas en **-ra** y **-se** son equivalentes: «pudieran / pudiesen», «hubieran / hubiesen enviado». En América predomina -ra.' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'Espero que el equipo ___ mañana.', options: ['participe', 'participó', 'hubiera participado'], answer: 0, why: 'Marco presente y acción posterior: presente de subjuntivo.' },
            { prompt: 'Esperaba que el equipo ___ al día siguiente.', options: ['participa', 'participara', 'haya participado'], answer: 1, why: 'Marco pasado y acción posterior: imperfecto de subjuntivo.' },
            { prompt: '¿Qué dos decisiones tomas antes de elegir el tiempo?', options: ['El marco del verbo principal y si la acción es anterior.', 'El sujeto y el número.', 'Si la frase es afirmativa o negativa.'], answer: 0, why: 'Marco y relación temporal determinan el tiempo.' },
          ] },
        ] },
        { title: 'Marco presente', mascot: '/brand/mascot/studying.webp', coach: 'Hablas desde hoy.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'DESDE AHORA', question: '¿Qué esperas, valoras o pides hoy?', formula: ['verbo principal en presente + que + presente de subjuntivo (no anterior)', 'verbo principal en presente + que + haya + participio (anterior)'],
            meaning: 'Desde el **presente**, una acción pendiente o simultánea va en **presente de subjuntivo**; una acción ya **completada** antes de ahora, en **perfecto de subjuntivo**. Las dos pueden convivir en la misma frase.',
            examples: [
              { es: 'Quiero que el equipo [[pruebe|blue]] la solución este mes.' },
              { es: 'Me alegra que [[hayamos encontrado|teal]] una solución.' },
              { es: 'No creo que la propuesta [[resuelva|blue]] todo de inmediato.' },
              { es: 'Me sorprende que nadie [[haya protestado|teal]] todavía.' },
            ],
            note: 'También es marco presente el imperativo y el futuro: «Dile que me **llame**», «Le pediré que **venga**».' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'Me alegra que ya ___ las preguntas.', options: ['hubieran enviado', 'envíen mañana', 'hayan enviado'], answer: 2, why: 'Marco presente y acción anterior: perfecto de subjuntivo.' },
            { prompt: '«Me alegra que hayamos encontrado una solución y quiero que el equipo la pruebe.» ¿Por qué dos tiempos distintos?', options: ['La solución ya está encontrada; la prueba está pendiente.', 'Porque los sujetos son distintos.', 'Es un error: deberían coincidir.'], answer: 0, why: 'Mismo marco presente, relaciones distintas: anterior y posterior.' },
          ] },
        ] },
        { title: 'Marco pasado', mascot: '/autoestudio/mascot/noting.webp', coach: 'Recuerdas lo que pensabas entonces.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'DESDE ENTONCES', question: '¿Qué esperabas, valorabas o pedías entonces?', formula: ['verbo principal en pasado + que + imperfecto de subjuntivo (no anterior)', 'verbo principal en pasado + que + hubiera + participio (anterior)'],
            meaning: 'Cuando el verbo principal pasa al **pasado**, todo se desplaza un escalón, pero las **relaciones se conservan**: lo que era posterior sigue siéndolo respecto de aquel momento; lo que era anterior, también.',
            examples: [
              { es: 'Esperaba que todos [[pudieran|orange]] participar.' },
              { es: 'Me alegraba que [[hubieran enviado|violet]] sus preguntas.' },
              { es: 'La directora le pidió que [[revisara|orange]] el informe al día siguiente.' },
              { es: 'Me molestó que nadie me [[hubiera avisado|violet]] del cambio.' },
            ] },
          { kind: 'compare', title: 'Al cambiar de marco, se conserva la relación', columns: [
            { tone: 'blue', label: 'MARCO PRESENTE', sentence: 'Espero que [[vengan|blue]] mañana y me alegra que [[hayan preparado|teal]] las preguntas.', idea: 'Venir: posterior. Preparar: anterior.' },
            { tone: 'orange', label: 'MARCO PASADO', sentence: 'Esperaba que [[vinieran|orange]] al día siguiente y me alegraba que [[hubieran preparado|violet]] las preguntas.', idea: 'Las mismas relaciones, vistas desde entonces. «Mañana» pasa a «al día siguiente».' },
          ] },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'Me alegró que ya ___ las preguntas antes de la reunión.', options: ['hubieran enviado', 'hayan enviado', 'enviarán'], answer: 0, why: 'Envío anterior a una reacción pasada: pluscuamperfecto de subjuntivo.' },
            { prompt: 'Al pasar «Quiero que lo pruebes mañana» al pasado, «mañana» se convierte en…', options: ['al día siguiente', 'ayer', 'hoy'], answer: 0, why: 'Las referencias temporales también se adaptan al nuevo marco.' },
          ] },
        ] },
        { title: 'Perspectiva no es duda', mascot: '/brand/mascot/speaking.webp', coach: 'El subjuntivo no niega el hecho.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'VALORAR UN HECHO CONOCIDO', question: '¿El subjuntivo significa que no pasó?', formula: ['me alegra / me sorprende / es lógico + que + subjuntivo'],
            meaning: 'Después de una **valoración** o una **reacción**, el subjuntivo aparece aunque el hecho sea **conocido y verdadero**. El modo no dice que el hecho sea dudoso: lo presenta **a través de una perspectiva**.',
            examples: [
              { es: 'Me alegra que [[hayas terminado|teal]]. (sé que terminaste)' },
              { es: 'Me sorprendió que el informe [[hubiera llegado|violet]] tan pronto. (llegó)' },
              { es: 'Es lógico que el equipo [[esté|blue]] cansado. (lo está)' },
            ] },
          { kind: 'tip', icon: '⚖', title: 'Cuándo cambia el tiempo', text: 'El tiempo del subjuntivo solo cambia cuando cambia el **marco** o la **relación** que quieres expresar. No lo cambies para «sonar más formal» ni para mostrar duda: la duda se expresa con el verbo principal (dudo, no creo).' },
          { kind: 'tip', icon: '🌎', title: 'Un matiz frecuente', text: 'Si lo pedido en el pasado **todavía está pendiente hoy**, muchos hablantes usan el presente de subjuntivo: «Ayer me pidió que lo **llame** mañana». «Que lo **llamara**» también es correcto. Con acciones ya cerradas, el marco pasado pide imperfecto. Y al revés: con un marco presente y un hecho fechado en el pasado, también se oye el imperfecto: «Me alegra que **vinieras** ayer». En esta clase practicamos «haya + participio», que es la opción más clara para la anterioridad desde hoy.' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: '«Me alegraba que hubieran enviado sus preguntas.» ¿Las enviaron?', options: ['Sí: la reacción se apoya en un hecho conocido.', 'No: el subjuntivo lo niega.', 'No se puede saber nunca.'], answer: 0, why: 'El subjuntivo presenta el hecho a través de una valoración, sin negarlo.' },
            { prompt: '¿Qué frase expresa duda sobre el hecho?', options: ['No creo que hayan enviado las preguntas.', 'Me alegra que hayan enviado las preguntas.'], answer: 0, why: 'La duda está en «no creo», no en el subjuntivo.' },
          ] },
        ] },
        { title: 'Cómo elegir', mascot: '/brand/mascot/seated.webp', coach: 'Marco primero, relación después.', blocks: [
          { kind: 'decide', title: 'Antes de escribir el verbo después de «que»', steps: [
            { q: '¿El verbo principal está en presente, futuro o imperativo (espero, quiero, me alegra, dile)?', yes: 'next', no: 'Marco pasado. ¿La acción es anterior a ese momento? Sí: [[hubiera + participio|violet]]. No: [[imperfecto de subjuntivo|orange]].' },
            { q: '¿La acción ya estaba completada antes de ahora?', yes: 'Usa [[haya + participio|teal]]: «Me alegra que hayan llegado».', no: 'Usa el [[presente de subjuntivo|blue]]: «Espero que lleguen pronto».' },
          ] },
          { kind: 'tip', icon: '📌', title: 'Como referencia', text: 'En las condiciones irreales y en textos históricos aparecen otras combinaciones («Si **hubiera** sabido…», «Quien **tuviere** dudas…»). Hoy no las trabajamos: el objetivo es reportar perspectivas con los cuatro tiempos actuales.' },
        ] },
        { title: 'Errores frecuentes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Errores típicos incluso en C1.', blocks: [
          { kind: 'guide', text: { teacher: 'Tu alumno identifica marco y relación en cada frase antes de corregirla.', self: 'Para cada frase, di cuál es el marco y la relación. Después busca el error y toca para comprobar.' } },
          { kind: 'mistakes', title: '¿Dónde está el error?', items: [
            { wrong: 'Esperaba que todos puedan participar.', right: 'Esperaba que todos pudieran participar.', why: 'Marco pasado cerrado y acción posterior: imperfecto de subjuntivo.' },
            { wrong: 'Me alegró que hayan enviado las preguntas antes de la reunión.', right: 'Me alegró que hubieran enviado las preguntas antes de la reunión.', why: 'La anterioridad respecto de un marco pasado va con «hubiera + participio».' },
            { wrong: 'Me alegra que hubieran encontrado una solución hoy.', right: 'Me alegra que hayan encontrado una solución hoy.', why: 'Marco presente y acción anterior: perfecto de subjuntivo.' },
            { wrong: 'Quiero que el equipo prueba la solución.', right: 'Quiero que el equipo pruebe la solución.', why: 'Después de «querer que» va el subjuntivo.' },
            { wrong: '«Me alegra que hayan enviado las preguntas» significa que no las enviaron.', right: '«Me alegra que hayan enviado las preguntas» valora un envío que sí ocurrió.', why: 'El subjuntivo de valoración no niega el hecho.' },
            { wrong: 'El lunes Marta le pidió que la llame el martes, y la llamó.', right: 'El lunes Marta le pidió que la llamara el martes, y la llamó.', why: 'Si la acción ya está cerrada en el pasado, el marco pasado pide imperfecto.' },
          ] },
          { kind: 'teacher', text: 'Pide al alumno un párrafo breve sobre una expectativa que tenía al empezar a estudiar español y otro sobre lo que espera hoy, con un tiempo de cada casilla.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'La concordancia en situaciones reales', coach: 'Toca las expresiones marcadas.',
      steps: [
        { title: 'Revisando el informe', blocks: [
          { kind: 'guide', text: { teacher: 'Lean la conversación con papeles. Después, el alumno toca cada expresión e identifica marco y relación.', self: 'Lee la conversación. Antes de tocar cada expresión, di el marco (presente o pasado) y la relación (anterior o no).' } },
          { kind: 'explore', title: 'Un informe con dos momentos', setting: 'Valeria comenta con Ignacio el borrador de su informe sobre la última reunión del equipo.', lines: [
            { who: 'Ignacio', text: 'He leído el informe. En la primera parte escribes: «Esperaba que todos [[pudieran|orange]] participar».' },
            { who: 'Valeria', text: 'Sí, es lo que pensaba antes de la reunión. Y «me alegraba que [[hubieran enviado|violet]] sus preguntas», porque ya las tenía.' },
            { who: 'Ignacio', text: 'Entonces, ¿las enviaron o no? El subjuntivo me hace dudar.' },
            { who: 'Valeria', text: 'Las enviaron. Es una reacción a un hecho conocido, no una duda.' },
            { who: 'Ignacio', text: 'Entendido. ¿Y en la segunda parte?' },
            { who: 'Valeria', text: 'Ahí hablo desde hoy: «Me alegra que [[hayamos encontrado|teal]] una solución y quiero que el equipo la [[pruebe|blue]] este mes».' },
            { who: 'Ignacio', text: 'Me gusta el cambio. Pero en la reunión tú preferías otra cosa, ¿no?' },
            { who: 'Valeria', text: 'Sí, al principio quería que [[eligiéramos|orange]] una opción definitiva. Después vi que convenía probar.' },
            { who: 'Ignacio', text: 'Pues ponlo así. Que se vea que tu punto de vista cambió.' },
            { who: 'Valeria', text: 'Y añadiré: «No creo que la prueba [[resuelva|blue]] todo de inmediato».' },
          ], notes: {
            'pudieran': '**Marco pasado** (esperaba) y participación **posterior**: imperfecto de subjuntivo.',
            'hubieran enviado': '**Marco pasado** (me alegraba) y envío **anterior**: pluscuamperfecto de subjuntivo.',
            'hayamos encontrado': '**Marco presente** (me alegra) y acción **anterior**: la solución ya está encontrada.',
            'pruebe': '**Marco presente** (quiero) y acción **posterior**: la prueba está pendiente.',
            'eligiéramos': '**Marco pasado** (quería) y acción **posterior** a ese deseo.',
            'resuelva': '**Marco presente** (no creo) y acción **posterior**. La duda está en «no creo».',
          } },
          { kind: 'choice', title: '¿Entendiste?', items: [
            { prompt: '¿Enviaron las preguntas antes de la reunión?', options: ['Sí: Valeria ya las tenía.', 'No: el subjuntivo lo niega.', 'No se sabe.'], answer: 0, why: '«Las enviaron. Es una reacción a un hecho conocido».' },
            { prompt: '¿Desde qué momento habla Valeria en la segunda parte del informe?', options: ['Desde hoy.', 'Desde antes de la reunión.', 'Desde el mes que viene.'], answer: 0, why: '«Ahí hablo desde hoy».' },
            { prompt: '¿Qué quería Valeria al principio de la reunión?', options: ['Elegir una opción definitiva.', 'Probar la solución un mes.', 'Cancelar la reunión.'], answer: 0, why: '«Al principio quería que eligiéramos una opción definitiva».' },
          ] },
        ] },
        { title: 'Expectativas de familia', blocks: [
          { kind: 'explore', title: 'Una videollamada', setting: 'Paula vive en Santiago desde hace tres años. Habla con su amiga Inés, que está pensando en irse a estudiar fuera.', lines: [
            { who: 'Inés', text: '¿Cómo reaccionaron tus padres cuando te fuiste?' },
            { who: 'Paula', text: 'Al principio querían que me [[quedara|orange]] en casa y que [[estudiara|orange]] en mi ciudad.' },
            { who: 'Inés', text: 'Los míos también. ¿Y qué pasó?' },
            { who: 'Paula', text: 'Les molestó que no les [[hubiera consultado|violet]] antes de aceptar la beca. Tenían razón en eso.' },
            { who: 'Inés', text: '¿Y ahora?' },
            { who: 'Paula', text: 'Ahora les encanta que [[haya encontrado|teal]] un buen trabajo aquí. Y esperan que [[vuelva|blue]] en Navidad, claro.' },
            { who: 'Inés', text: 'Yo quiero que mis padres lo [[entiendan|blue]] desde el principio.' },
            { who: 'Paula', text: 'Entonces cuéntaselo antes de decidir. Me habría gustado que alguien me lo [[hubiera dicho|violet]] a mí.' },
          ], notes: {
            'quedara': '**Marco pasado** (querían) y acción **posterior**: imperfecto de subjuntivo.',
            'estudiara': 'Mismo marco pasado y la misma relación: otra acción deseada entonces.',
            'hubiera consultado': '**Marco pasado** (les molestó) y acción **anterior**: la consulta debía haber ocurrido antes de aceptar.',
            'haya encontrado': '**Marco presente** (les encanta) y acción **anterior**: el trabajo ya está encontrado.',
            'vuelva': '**Marco presente** (esperan) y acción **posterior**: Navidad todavía no ha llegado.',
            'entiendan': '**Marco presente** (quiero) y acción **posterior**.',
            'hubiera dicho': 'Marco **condicional compuesto** (me habría gustado), que funciona como pasado: la acción deseada es **anterior** a su decisión.',
          } },
          { kind: 'teacher', text: 'Pregunta: «¿Qué esperaban tus padres que estudiaras? ¿Qué esperan hoy de ti?». El alumno responde con un marco pasado y otro presente.' },
        ] },
        { title: '¿Qué casilla?', blocks: [
          { kind: 'classify', title: 'Clasifica las expresiones de las dos conversaciones', categories: [
            { id: 'pres', label: 'Presente + no anterior', tone: 'blue' },
            { id: 'perf', label: 'Presente + anterior', tone: 'teal' },
            { id: 'imp', label: 'Pasado + no anterior', tone: 'orange' },
            { id: 'plus', label: 'Pasado + anterior', tone: 'violet' },
          ], items: [
            { text: 'Esperaba que todos pudieran participar.', answer: 'imp', why: 'Esperaba + acción posterior.' },
            { text: 'Me alegra que hayamos encontrado una solución.', answer: 'perf', why: 'Me alegra + acción completada.' },
            { text: 'Quiero que el equipo la pruebe este mes.', answer: 'pres', why: 'Quiero + acción pendiente.' },
            { text: 'Les molestó que no les hubiera consultado antes.', answer: 'plus', why: 'Les molestó + acción anterior.' },
            { text: 'Esperan que vuelva en Navidad.', answer: 'pres', why: 'Esperan + acción futura.' },
            { text: 'Querían que me quedara en casa.', answer: 'imp', why: 'Querían + acción posterior.' },
            { text: 'Les encanta que haya encontrado un buen trabajo.', answer: 'perf', why: 'Les encanta + acción ya ocurrida.' },
            { text: 'Me alegraba que hubieran enviado sus preguntas.', answer: 'plus', why: 'Me alegraba + envío anterior.' },
          ] },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Marco primero, relación después.',
      steps: [
        { title: 'Elige según el contexto', blocks: [
          { kind: 'choice', items: [
            { context: 'Convocatoria de hoy para la reunión del jueves.', prompt: 'Espero que todos ___ venir el jueves.', options: ['puedan', 'pudieran', 'hayan podido'], answer: 0, why: 'Marco presente, acción posterior.' },
            { context: 'Informe escrito después de la reunión, sobre lo que pensabas antes.', prompt: 'Antes de la reunión, temía que nadie ___ las propuestas.', options: ['hubiera leído', 'haya leído', 'lea'], answer: 0, why: 'Marco pasado (temía) y lectura anterior a la reunión.' },
            { context: 'Un compañero ya ha terminado su parte del proyecto.', prompt: 'Me tranquiliza que Lucas ya ___ su parte.', options: ['haya terminado', 'hubiera terminado', 'termine'], answer: 0, why: 'Marco presente, acción anterior.' },
            { context: 'El mes pasado la directora dio una instrucción para aquella semana.', prompt: 'La directora nos pidió que ___ el informe esa misma semana.', options: ['entregáramos', 'entreguemos', 'hayamos entregado'], answer: 0, why: 'Marco pasado, acción posterior y ya cerrada.' },
            { context: 'La crisis ya terminó. Hoy valoras la actitud que tuvo el equipo.', prompt: 'Me parece admirable que el equipo ___ tan unido durante la crisis.', options: ['haya estado', 'esté', 'hubiera estado'], answer: 0, why: 'Marco presente (me parece) y una situación anterior, ya terminada: perfecto de subjuntivo.' },
            { context: 'En tu infancia, tus padres tenían una regla.', prompt: 'Mis padres no permitían que ___ la tele entre semana.', options: ['viéramos', 'veamos', 'hayamos visto'], answer: 0, why: 'Marco pasado, acción simultánea.' },
          ] },
        ] },
        { title: 'Compara los significados', blocks: [
          { kind: 'choice', items: [
            { prompt: '¿Qué frase dice que la llegada fue **anterior** a la alegría?', options: ['Me alegró que hubieran llegado.', 'Me alegró que llegaran.'], answer: 0, why: 'El pluscuamperfecto marca anterioridad; el imperfecto, simultaneidad o posterioridad.' },
            { prompt: '«Me alegra que hayan enviado las preguntas.» ¿Qué significa?', options: ['Las enviaron y lo valoro positivamente.', 'Dudo que las hayan enviado.', 'Quiero que las envíen.'], answer: 0, why: 'Valoración de un hecho conocido.' },
            { prompt: '¿Qué frase habla desde **hoy**?', options: ['Quiero que cada persona anote qué funciona.', 'Quería que cada persona anotara qué funcionaba.'], answer: 0, why: '«Quiero»: marco presente.' },
            { prompt: '«Esperaba que la reunión sirviera para elegir una opción.» ¿Sirvió?', options: ['La frase no lo dice: solo cuenta una expectativa pasada.', 'Sí, seguro.', 'No, seguro.'], answer: 0, why: 'La expectativa no informa sobre el resultado.' },
            { prompt: '¿Cuál es la versión en pasado de «Quiero que lo pruebes mañana»?', options: ['Quería que lo probaras al día siguiente.', 'Quería que lo hayas probado mañana.', 'Quiero que lo probaras ayer.'], answer: 0, why: 'Imperfecto de subjuntivo y adaptación de «mañana».' },
          ] },
        ] },
        { title: 'Completa el informe', blocks: [
          { kind: 'chat-fill', title: 'Valeria dicta el informe a Ignacio', lines: [
            { who: 'Valeria', text: 'Primera parte: «Antes de la reunión, esperaba que todos ___ participar».', options: ['pudieran', 'puedan', 'hayan podido'], answer: 0, why: 'Marco pasado, acción posterior.' },
            { who: 'Valeria', text: '«Me alegraba que ___ sus preguntas con antelación».', options: ['hubieran enviado', 'hayan enviado', 'enviaran mañana'], answer: 0, why: 'Marco pasado, acción anterior.' },
            { who: 'Ignacio', text: '¿Y la parte de hoy?' },
            { who: 'Valeria', text: '«Hoy me alegra que ___ una prueba de un mes».', options: ['hayamos acordado', 'hubiéramos acordado', 'acordáramos'], answer: 0, why: 'Marco presente, acción anterior.' },
            { who: 'Valeria', text: '«Quiero que cada persona ___ qué funciona y qué no».', options: ['anote', 'anotara', 'haya anotado'], answer: 0, why: 'Marco presente, acción posterior.' },
            { who: 'Ignacio', text: '¿Algo más?' },
            { who: 'Valeria', text: '«No espero que la prueba ___ todo de inmediato».', options: ['resuelva', 'resolviera', 'resuelve'], answer: 0, why: 'Marco presente, acción posterior; subjuntivo tras «no espero que».' },
          ] },
        ] },
        { title: 'Encuentra el error', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Esperaba que el informe llegue a tiempo, pero llegó tarde.', ok: false, options: ['Esperaba que el informe llegara a tiempo, pero llegó tarde.', 'Esperaba que el informe haya llegado a tiempo, pero llegó tarde.', 'Espero que el informe llegara a tiempo, pero llegó tarde.'], answer: 0, why: 'Marco pasado y acción ya cerrada: imperfecto de subjuntivo.' },
            { sentence: 'Me alegra que hayas aprobado el examen.', ok: true, why: 'Correcta: marco presente y acción anterior.' },
            { sentence: 'Me sorprendió que no hayan avisado antes.', ok: false, options: ['Me sorprendió que no hubieran avisado antes.', 'Me sorprendió que no avisen antes.', 'Me sorprende que no hubieran avisado antes.'], answer: 0, why: 'Marco pasado y acción anterior: pluscuamperfecto.' },
            { sentence: 'Quería que me ayudaras con la mudanza.', ok: true, why: 'Correcta: marco pasado, acción posterior.' },
            { sentence: 'Quiero que el equipo hubiera probado la solución mañana.', ok: false, options: ['Quiero que el equipo pruebe la solución mañana.', 'Quiero que el equipo probaba la solución mañana.', 'Quería que el equipo pruebe la solución ayer.'], answer: 0, why: 'Marco presente y acción posterior: presente de subjuntivo.' },
            { sentence: 'Les pidió que traigan sus cuadernos a la clase de ayer.', ok: false, options: ['Les pidió que trajeran sus cuadernos a la clase de ayer.', 'Les pide que trajeran sus cuadernos a la clase de ayer.', 'Les pidió que hayan traído sus cuadernos a la clase de ayer.'], answer: 0, why: 'La clase ya pasó: marco pasado cerrado, imperfecto de subjuntivo.' },
          ] },
        ] },
        { title: 'Construye y transforma', blocks: [
          { kind: 'build', title: 'Ordena las palabras', items: [
            { tiles: ['Esperaba', 'que', 'todos', 'pudieran', 'participar'], accept: ['Esperaba que todos pudieran participar'] },
            { tiles: ['Me', 'alegra', 'que', 'hayamos', 'encontrado', 'una', 'solución'], accept: ['Me alegra que hayamos encontrado una solución'] },
            { tiles: ['Me', 'molestó', 'que', 'no', 'me', 'hubieran', 'avisado'], accept: ['Me molestó que no me hubieran avisado'] },
            { tiles: ['Quiero', 'que', 'el', 'equipo', 'pruebe', 'la', 'solución'], accept: ['Quiero que el equipo pruebe la solución'] },
          ] },
          { kind: 'rewrite', title: 'Cambia de perspectiva', items: [
            { prompt: 'Espero que vengan mañana y me alegra que hayan preparado las preguntas.', instruction: 'Pásalo al pasado: «Esperaba…». Adapta «mañana».', accept: ['Esperaba que vinieran al día siguiente y me alegraba que hubieran preparado las preguntas', 'Esperaba que vinieran al día siguiente, y me alegraba que hubieran preparado las preguntas', 'Esperaba que viniesen al día siguiente y me alegraba que hubiesen preparado las preguntas'] },
            { prompt: 'Quería que el equipo probara la solución y me alegraba que hubiera acordado una prueba.', instruction: 'Vuelve al marco actual: «Quiero…».', accept: ['Quiero que el equipo pruebe la solución y me alegra que haya acordado una prueba', 'Quiero que el equipo pruebe la solución, y me alegra que haya acordado una prueba'] },
            { prompt: 'Me sorprende que no hayan contestado.', instruction: 'Empieza con «Me sorprendió…».', accept: ['Me sorprendió que no hubieran contestado', 'Me sorprendió que no hubiesen contestado'] },
            { prompt: 'Les pide que lleguen puntuales.', instruction: 'Empieza con «Les pidió…».', accept: ['Les pidió que llegaran puntuales', 'Les pidió que llegasen puntuales'] },
          ] },
        ] },
        { title: 'Clasifica por la casilla', blocks: [
          { kind: 'classify', title: '¿Marco y relación?', categories: [
            { id: 'pres', label: 'Presente + no anterior', tone: 'blue' },
            { id: 'perf', label: 'Presente + anterior', tone: 'teal' },
            { id: 'imp', label: 'Pasado + no anterior', tone: 'orange' },
            { id: 'plus', label: 'Pasado + anterior', tone: 'violet' },
          ], items: [
            { text: 'Ojalá encuentres trabajo pronto.', answer: 'pres', why: '«Ojalá» con presente: deseo hacia el futuro.' },
            { text: 'Es raro que no haya llamado todavía.', answer: 'perf', why: 'Valoración actual de algo que ya debía haber pasado.' },
            { text: 'Nos prohibieron que saliéramos de noche.', answer: 'imp', why: 'Marco pasado, acción simultánea o posterior.' },
            { text: 'Me dolió que no me hubieras invitado.', answer: 'plus', why: 'La invitación debía ser anterior a la reacción.' },
            { text: 'Te recomiendo que leas el informe.', answer: 'pres', why: 'Marco presente, acción posterior.' },
            { text: 'No creí que lo hubieran conseguido tan rápido.', answer: 'plus', why: 'Marco pasado, logro anterior.' },
          ] },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Un comentario sobre el informe', coach: 'Primero escucha sin leer.',
      steps: [
        { title: 'Un comentario sobre el informe', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha para la idea general. En la segunda, el alumno anota cada verbo en subjuntivo y lo coloca en una casilla de la tabla.', self: 'Escucha una vez para la idea general. En la segunda, anota cada verbo en subjuntivo y decide su marco y su relación. Puedes bajar la velocidad.' } },
          { kind: 'listen', title: 'Ignacio comenta el informe', channel: 'NOTA DE VOZ · PARA VALERIA', src: '/audio/grammar-classroom/37.mp3',
            before: 'Un compañero ha leído el informe de la reunión y deja un mensaje. ¿Crees que hablará solo del pasado o también del presente?',
            gist: { prompt: '¿Cuál es la idea principal del mensaje?', options: ['Separar con claridad lo que esperaba entonces de lo que valora y pide hoy.', 'Pedir que se cancele la prueba.', 'Quejarse de que nadie envió preguntas.'], answer: 0, why: 'Dice que «las perspectivas están claras» y quiere «marcar cuándo cambia mi punto de vista».' },
            details: [
              { prompt: '¿Qué esperaba al principio de la reunión?', options: ['Que sirviera para elegir una opción definitiva.', 'Que durara poco.', 'Que nadie enviara preguntas.'], answer: 0, why: '«Al principio esperaba que la reunión sirviera para elegir una opción definitiva».' },
              { prompt: '¿Por qué le alegraba haber recibido preguntas antes?', options: ['Porque les permitían preparar ejemplos.', 'Porque así la reunión fue más corta.', 'Porque no tenía tiempo.'], answer: 0, why: '«Nos permitían preparar ejemplos».' },
              { prompt: '¿Qué prefirió después?', options: ['Probar la solución durante un mes.', 'Elegir una opción ese mismo día.', 'Repetir la reunión.'], answer: 0, why: '«Preferí que probáramos la solución durante un mes».' },
              { prompt: '¿Qué pide hoy a cada persona?', options: ['Que anote qué funciona y qué sigue siendo difícil.', 'Que envíe nuevas preguntas.', 'Que escriba un informe.'], answer: 0, why: '«Quiero que cada persona anote qué funciona y qué sigue siendo difícil».' },
              { prompt: 'Según el mensaje, ¿una duda o reacción siempre significa falta de realidad?', options: ['No: a veces reacciona a un hecho confirmado.', 'Sí, siempre.', 'Solo en el pasado.'], answer: 0, why: '«No necesito presentar cada duda como falta de realidad: a veces reacciono a un hecho confirmado».' },
            ],
            transcript: 'Hola, leí tu informe y creo que ahora las perspectivas están claras. Al principio esperaba que la reunión [[sirviera|orange]] para elegir una opción definitiva. También me alegraba que [[hubiéramos recibido|violet]] preguntas antes, porque nos permitían preparar ejemplos. Después vi que algunas necesidades eran distintas y preferí que [[probáramos|orange]] la solución durante un mes. Hoy me alegra que [[hayamos acordado|teal]] esa prueba, aunque no espero que [[resuelva|blue]] todo de inmediato. Quiero que cada persona [[anote|blue]] qué funciona y qué sigue siendo difícil. Cuando recuerde esta etapa en el próximo informe, distinguiré lo que esperaba entonces de lo que ya habíamos hecho. No necesito presentar cada duda como falta de realidad: a veces reacciono a un hecho confirmado. Me parece útil marcar cuándo cambia mi punto de vista para que el lector pueda seguirlo. Podemos revisar juntos un párrafo donde se mezclan la expectativa pasada y la petición actual, y comprobar si la alternancia corresponde a nuestra intención.',
            reply: { teacher: 'El alumno responde en voz alta como Valeria: cuenta qué esperaba él o ella antes de la reunión y qué pide hoy al equipo.', self: 'Responde como Valeria en un mensaje breve: una expectativa de antes de la reunión, una valoración de hoy y una petición. Usa al menos tres tiempos distintos del subjuntivo.' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Lo que esperabas, lo que esperas', coach: 'Una pregunta por vez. Cambia de perspectiva.',
      steps: [
        { title: 'Lo que esperabas, lo que esperas', blocks: [
          { kind: 'guide', text: { teacher: 'No hace falta usar todas las preguntas. Tu alumno pasa del marco pasado al presente dentro de la misma respuesta; tú repreguntas cuando mezcle tiempos sin intención.', self: 'Responde cada pregunta en voz alta. En cada respuesta, combina lo que pensabas entonces con lo que piensas hoy.' } },
          { kind: 'talk', cards: [
            { q: 'Cuando empezaste a estudiar español, ¿qué esperabas conseguir? ¿Qué esperas hoy?', followUps: ['¿Qué te sorprendió al principio?', '¿Qué te alegra haber conseguido?', '¿Qué quieres que cambie este año?'], phrases: ['Esperaba que [[fuera|orange]]…', 'Me sorprendió que [[hubiera|violet]]…', 'Hoy me alegra que [[haya…|teal]]', 'Espero que [[pueda|blue]]…'], hint: 'Primero el marco pasado; después, el presente. Marca el cambio con «al principio» y «hoy».', example: 'Al principio esperaba que fuera fácil, porque hablo italiano. Me sorprendió que el subjuntivo se usara tanto. Hoy me alegra que haya podido ver películas sin subtítulos, y espero que este año pueda leer una novela entera.', next: 'Pasemos a tu familia.' },
            { q: '¿Qué esperaban tus padres o tu familia que hicieras de mayor? ¿Qué esperan hoy de ti?', followUps: ['¿Coincidía con lo que tú querías?', '¿Les sorprendió alguna decisión tuya?', '¿Qué les alegra hoy?'], phrases: ['Querían que [[estudiara|orange]]…', 'Les molestó que no [[hubiera…|violet]]', 'Ahora les encanta que [[haya…|teal]]', 'Esperan que [[vuelva|blue]]…'], hint: 'Puedes hablar de expectativas muy concretas: una carrera, una ciudad, un deporte.', example: 'Mis padres querían que estudiara Derecho, como mi abuelo. Les molestó que no les hubiera consultado antes de cambiarme a Biología. Ahora les encanta que haya encontrado un trabajo en un laboratorio.', next: 'Ahora, el trabajo en equipo.', teacher: 'Si el tema familiar es delicado, propón hablar de un entrenador, un profesor o un jefe.' },
            { q: 'Piensa en una reunión o un proyecto reciente. ¿Qué esperabas antes y qué valoras ahora?', followUps: ['¿Qué te molestó?', '¿Qué te alegró que hubieran hecho otros?', '¿Qué pides ahora al grupo?'], phrases: ['Antes temía que…', 'Me alegró que [[hubieran…|violet]]', 'Ahora quiero que [[todos…|blue]]'], hint: 'Separa tres momentos: antes, durante y ahora.', example: 'Antes de la reunión temía que nadie hubiera leído la propuesta. Me alegró que dos personas trajeran preguntas. Ahora quiero que todos comenten el borrador antes del viernes.', next: 'Hablemos de reacciones.' },
            { q: 'Cuéntame una noticia reciente que te alegró o te sorprendió. ¿Por qué?', followUps: ['¿La sabías ya cuando la leíste?', '¿Te sigue sorprendiendo hoy?', '¿Qué esperas que pase ahora?'], phrases: ['Me sorprendió que [[hubieran…|violet]]', 'Me alegra que por fin [[hayan…|teal]]', 'Espero que [[sigan…|blue]]'], hint: 'Fíjate en que la reacción puede apoyarse en un hecho cierto: el subjuntivo no lo niega.', example: 'Me sorprendió que mi ciudad hubiera prohibido los coches en el centro. Hoy me alegra que lo hayan hecho: se respira mejor. Espero que sigan ampliando la zona.', next: 'Ahora, consejos.' },
            { q: '¿Qué consejo te dieron hace años que hoy agradeces? ¿Qué consejo darías tú?', followUps: ['¿Quién te lo dio?', '¿Lo seguiste enseguida?', '¿A quién se lo darías?'], phrases: ['Me aconsejó que [[ahorrara|orange]]…', 'Me habría gustado que alguien me [[hubiera dicho|violet]]…', 'Te recomiendo que [[pruebes|blue]]…'], hint: 'Combina el consejo pasado (marco pasado) con tu recomendación actual (marco presente).', example: 'Mi primera jefa me aconsejó que guardara copia de todo. Me habría gustado que alguien me lo hubiera dicho antes. Hoy recomiendo a los nuevos que documenten cada decisión.', next: 'Para terminar, una mirada al futuro.' },
            { q: 'Imagina que dentro de cinco años lees lo que dices hoy. ¿Qué esperas que haya cambiado?', followUps: ['¿Qué te gustaría que siguiera igual?', '¿Qué temes que no haya cambiado?', '¿Qué le dirías a tu yo de hoy?'], phrases: ['Espero que para entonces [[haya…|teal]]', 'Me gustaría que [[siguiera|orange]]…', 'Ojalá [[pueda|blue]]…'], hint: 'Observa que «me gustaría» (condicional) suele llevar imperfecto de subjuntivo.', example: 'Espero que para entonces haya terminado el máster y que mi español sea natural. Me gustaría que siguiera viviendo en esta ciudad, cerca de mis amigos.', teacher: 'Aprovecha para señalar que «me gustaría que» funciona como marco pasado: «me gustaría que vinieras».' },
          ], swap: { teacher: 'Al final, el alumno entrevista al profesor: «¿Qué esperabas cuando empezaste a enseñar? ¿Qué esperas hoy?».', self: 'Escribe dos preguntas, una con «¿Qué esperabas que…?» y otra con «¿Qué esperas que…?», y házselas a alguien esta semana.' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Un informe con dos momentos', coach: 'Entonces y ahora, con claridad.',
      steps: [
        { title: 'Un informe con dos momentos', blocks: [
          { kind: 'guide', text: { teacher: 'Puede escribirse en clase o como tarea. Usen la revisión automática y después marquen juntos en qué punto del texto cambia el marco.', self: 'Escribe tu informe y toca «Revisar mi texto». Después subraya dónde cambias del marco pasado al presente: ¿se nota claramente?' } },
          { kind: 'write', title: 'Informe de una reunión o un proyecto', situation: 'Escribe un breve informe sobre una reunión, un proyecto o una etapa real (trabajo, estudios, una asociación). Cuenta primero qué esperabas entonces y después qué valoras y pides hoy.', task: [
            'Cuenta dos **expectativas o reacciones pasadas**, una con acción posterior y otra con acción anterior.',
            'Marca con claridad el **cambio de perspectiva** (hoy, ahora, a día de hoy).',
            'Añade una **valoración actual** de algo ya hecho y una **petición** para el futuro.',
            'Aclara al menos una reacción que se apoya en un hecho confirmado.',
          ], starters: ['Antes de la reunión esperaba que…', 'Me alegraba que ya…', 'Durante la sesión preferí que…', 'Hoy me alegra que…', 'Quiero que cada persona…', 'No afirmo que…, pero…'],
            words: ['expectativa', 'perspectiva', 'a día de hoy', 'en aquel momento', 'con antelación', 'valorar', 'propuesta', 'pendiente'],
            model: 'Antes de la reunión esperaba que todos [[pudieran|orange]] participar. Me alegraba que [[hubieran enviado|violet]] sus preguntas, porque así podía preparar ejemplos. Durante la sesión preferí que [[probáramos|orange]] la solución un mes antes de adoptarla definitivamente. Hoy me alegra que [[hayamos acordado|teal]] esa prueba y quiero que cada persona [[anote|blue]] qué funciona y qué sigue siendo difícil. No afirmo que la propuesta [[resuelva|blue]] todo, pero sí que el equipo tiene una forma concreta de evaluarla. En el próximo informe distinguiré lo que esperábamos de lo que ya habíamos comprobado, para que el lector no confunda una expectativa pasada con nuestra valoración actual.',
            minWords: 130 },
        ] },
      ],
    },
    {
      id: 'cerrar', label: 'Cerrar', icon: '✓', mascot: '/brand/mascot/standing.webp',
      title: 'Lo esencial', coach: '¿Qué te llevas hoy?',
      steps: [
        { title: 'Lo esencial', blocks: [
          { kind: 'recap', items: [
            { tone: 'blue', label: 'PRESENTE + NO ANTERIOR', formula: 'espero que + presente de subjuntivo', example: 'Quiero que el equipo pruebe la solución.', caption: 'Pendiente o simultáneo, visto desde hoy.' },
            { tone: 'teal', label: 'PRESENTE + ANTERIOR', formula: 'me alegra que + haya + participio', example: 'Me alegra que hayamos encontrado una solución.', caption: 'Ya hecho, valorado hoy.' },
            { tone: 'orange', label: 'PASADO + NO ANTERIOR', formula: 'esperaba que + imperfecto de subjuntivo', example: 'Esperaba que todos pudieran participar.', caption: 'Pendiente, visto desde entonces.' },
            { tone: 'violet', label: 'PASADO + ANTERIOR', formula: 'me alegraba que + hubiera + participio', example: 'Me alegraba que hubieran enviado sus preguntas.', caption: 'Ya hecho, valorado entonces.' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'Dos decisiones', text: 'Localiza el **marco** del verbo principal (presente o pasado) y decide si la acción es **anterior** o no. El subjuntivo no niega el hecho: lo presenta desde una perspectiva.' },
        ] },
        { title: 'Desafío final', blocks: [
          { kind: 'choice', title: 'Cuatro frases, sin ayuda', items: [
            { prompt: 'Nos alegró que el director ___ la propuesta antes de la reunión.', options: ['hubiera aprobado', 'haya aprobado', 'apruebe'], answer: 0, why: 'Marco pasado, acción anterior.' },
            { prompt: 'Te pido que me ___ el informe esta tarde.', options: ['envíes', 'enviaras', 'hayas enviado'], answer: 0, why: 'Marco presente, acción posterior.' },
            { prompt: 'Es una pena que no ___ venir ayer.', options: ['hayas podido', 'puedas', 'podrás'], answer: 0, why: 'Marco presente, acción anterior.' },
            { prompt: 'Mi abuela quería que ___ médico.', options: ['fuera', 'sea', 'haya sido'], answer: 0, why: 'Marco pasado, acción posterior.' },
          ] },
        ] },
        { title: 'Tus errores y repaso', blocks: [
          { kind: 'review' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Qué dos decisiones tomas antes de elegir el tiempo del subjuntivo?». Respuesta: localizo el marco principal y decido si la acción es anterior o simultánea / posterior.' },
        ] },
      ],
    },
  ],
};
