import type { LiveLesson } from '../types';

/**
 * Lesson 113 · A2 · Orden de la oración.
 * One study group (Ana, Leo, Marta) plans a meeting at the library near the
 * station; the same plan runs through every section.
 */
export const lesson: LiveLesson = {
  id: 113,
  level: 'A2',
  title: 'Orden de la oración',
  subtitle: 'Decir cuándo, dónde y cómo pasa algo, empezar por la información más importante y ofrecer dos opciones con «o».',
  legend: [
    { tone: 'blue', label: 'Tiempo · ¿cuándo?' },
    { tone: 'teal', label: 'Lugar · ¿dónde?' },
    { tone: 'orange', label: 'Modo · ¿cómo?' },
    { tone: 'violet', label: 'Dos opciones · ¿X o Y?' },
  ],
  optionNotes: {
    Tiempo: 'El tiempo responde a «¿cuándo?»: el martes, por la tarde, después de las tres.',
    Lugar: 'El lugar responde a «¿dónde?»: en casa, en la biblioteca, junto a la puerta.',
    Modo: 'El modo responde a «¿cómo?»: tranquilamente, despacio, juntos, sin prisa.',
    y: '«Y» suma las dos cosas. Para elegir una de dos, usa «o».',
    ni: '«Ni» niega las dos cosas. Para ofrecer una elección, usa «o».',
    'Sí.': 'Una pregunta con «o» no se responde con «sí» o «no»: se elige una opción.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Cuándo, dónde y cómo', coach: 'Una oración tiene piezas. Algunas se pueden mover.',
      steps: [
        { title: 'Las piezas de la oración', blocks: [
          { kind: 'lead', text: 'Ana, Leo y Marta estudian juntos. Ana escribe en el grupo: «**El martes por la tarde** estudiamos **tranquilamente** **en la biblioteca**». En una sola oración hay tres informaciones extra: cuándo, cómo y dónde.', en: 'One sentence can say when, how and where something happens.' },
          { kind: 'guide', text: { teacher: 'Lee la oración de Ana en voz alta y pregunta: «¿Cuándo estudian? ¿Dónde? ¿Cómo?». El alumno busca cada respuesta en la oración.', self: 'Lee la oración de Ana y busca tres respuestas: ¿cuándo?, ¿dónde? y ¿cómo?' } },
          { kind: 'concept', tone: 'blue', label: 'TIEMPO · LUGAR · MODO', question: '¿Cuándo? ¿Dónde? ¿Cómo?', en: 'when, where, how', formula: ['¿cuándo? → tiempo', '¿dónde? → lugar', '¿cómo? → modo'],
            meaning: 'Alrededor del verbo podemos poner información de **tiempo** (cuándo pasa algo), de **lugar** (dónde pasa) y de **modo** (cómo pasa). Son piezas extra: la oración funciona sin ellas, pero con ellas el mensaje es más claro.',
            examples: [
              { es: 'Estudio [[por la mañana|blue]].', en: 'I study in the morning.' },
              { es: 'Estudio [[en casa|teal]].', en: 'I study at home.' },
              { es: 'Estudio [[tranquilamente|orange]].', en: 'I study calmly.' },
              { es: 'Estudio [[tranquilamente|orange]] [[en casa|teal]] [[por la mañana|blue]].', en: 'I study calmly at home in the morning.' },
            ] },
          { kind: 'table', title: 'Palabras útiles', head: ['Pregunta', 'Pieza', 'Ejemplos'], rows: [
            ['¿Cuándo?', '[[Tiempo|blue]]', 'hoy, mañana, el martes, por la tarde, después de las tres, los domingos'],
            ['¿Dónde?', '[[Lugar|teal]]', 'en casa, en la biblioteca, en el parque, junto a la puerta, cerca de la estación'],
            ['¿Cómo?', '[[Modo|orange]]', 'tranquilamente, despacio, rápido, juntos, sin prisa, con calma'],
          ], note: 'Muchas palabras de modo terminan en **-mente**: tranquila → tranquila**mente**, lenta → lenta**mente**.' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: '«Caminamos **despacio** por el parque los domingos.» ¿Qué indica «despacio»?', options: ['Tiempo', 'Lugar', 'Modo'], answer: 2, why: 'Responde a «¿cómo caminamos?»: despacio.' },
            { prompt: '«Trabajo en casa **por la mañana**.» ¿Qué indica «por la mañana»?', options: ['Tiempo', 'Lugar', 'Modo'], answer: 0, why: 'Responde a «¿cuándo trabajo?»: por la mañana.' },
            { prompt: '«Comemos **junto a la ventana**.» ¿Qué indica «junto a la ventana»?', options: ['Modo', 'Lugar', 'Tiempo'], answer: 1, why: 'Responde a «¿dónde comemos?»: junto a la ventana.' },
          ] },
        ] },
        { title: 'Un orden normal', mascot: '/brand/mascot/studying.webp', coach: 'Primero la acción; después, las piezas extra.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'ORDEN NORMAL', question: '¿Cómo ordeno las piezas?', en: 'the usual order', formula: ['verbo + (cosa) + modo + lugar + tiempo'],
            meaning: 'Cuando no queremos destacar nada especial, empezamos por la **acción** (el verbo) y después añadimos las piezas extra. Un orden muy frecuente es: **modo, lugar, tiempo**. No es una regla fija, pero suena natural.',
            examples: [
              { es: 'Trabajo [[tranquilamente|orange]] [[en casa|teal]] [[por la mañana|blue]].', en: 'I work calmly at home in the morning.' },
              { es: 'Caminamos [[despacio|orange]] [[por el parque|teal]] [[los domingos|blue]].', en: 'We walk slowly in the park on Sundays.' },
              { es: 'Leo un libro [[en el tren|teal]] [[todos los días|blue]].', en: 'I read a book on the train every day.' },
            ],
            note: 'El verbo y la cosa van juntos: «Leo **un libro** en el tren», no «Leo en el tren un libro todos los días un libro».' },
          { kind: 'tip', icon: '!', title: 'No separes el sujeto y el verbo', text: 'En español, el lugar no va entre el sujeto y el verbo: «Yo **estudio** en casa», no «Yo en casa estudio» como orden normal. Primero el verbo; después, el lugar.', en: 'Keep the subject and the verb together.' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: '¿Qué oración tiene un orden normal y natural?', options: ['Yo en la biblioteca estudio el lunes.', 'Estudio en la biblioteca el lunes.', 'En la biblioteca el lunes estudio yo.'], answer: 1, why: 'Primero el verbo (estudio), después el lugar y el tiempo.' },
            { prompt: '¿Qué oración suena más natural?', options: ['Bebo café en la cocina por la mañana.', 'Bebo en la cocina café por la mañana.', 'Bebo por la mañana en la cocina café por la mañana.'], answer: 0, why: 'El verbo y la cosa van juntos (bebo café); después, el lugar y el tiempo.' },
          ] },
        ] },
        { title: 'Mover el marco', mascot: '/brand/mascot/speaking.webp', coach: 'El plan es el mismo. Cambia el punto de partida.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'MARCO AL PRINCIPIO', question: '¿Por dónde empiezo?', en: 'start with the frame', formula: ['tiempo / lugar + verbo + resto', 'verbo + resto + tiempo / lugar'],
            meaning: 'El **tiempo** y el **lugar** forman el **marco** de la acción, y el marco puede ir **al principio** o **al final**. El hecho no cambia: cambia lo primero que escucha la otra persona. Lo que va primero se nota más.',
            examples: [
              { es: '[[El martes por la tarde|blue]] trabajamos juntos en la biblioteca.', en: 'On Tuesday afternoon we work together in the library.' },
              { es: 'Trabajamos juntos en la biblioteca [[el martes por la tarde|blue]].', en: 'We work together in the library on Tuesday afternoon.' },
              { es: '[[En casa|teal]] trabajo mejor.', en: 'At home I work better.' },
              { es: 'Trabajo mejor [[en casa|teal]].', en: 'I work better at home.' },
            ] },
          { kind: 'compare', title: 'El mismo plan, dos mensajes', columns: [
            { tone: 'blue', label: 'ANA EMPIEZA POR EL DÍA', sentence: '[[El martes por la tarde|blue]] trabajamos juntos en la biblioteca.', idea: 'Lo primero es el día. Útil si el grupo pregunta «¿cuándo?».', en: 'The day comes first.' },
            { tone: 'teal', label: 'LEO EMPIEZA POR LA ACTIVIDAD', sentence: 'Trabajamos juntos en la biblioteca [[el martes por la tarde|blue]].', idea: 'Lo primero es la actividad. El día llega al final.', en: 'The activity comes first.' },
          ] },
          { kind: 'tip', icon: '✏', title: 'La coma', text: 'Cuando el marco es largo y va al principio, muchas veces escribimos una coma: «**Por la mañana,** la biblioteca tiene una actividad para niños». Con un marco corto, la coma no es necesaria: «Mañana cenamos en casa».', en: 'A long frame at the start often takes a comma.' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: '«El martes estudiamos juntos en la biblioteca.» ¿Qué versión dice lo mismo y empieza por la actividad?', options: ['Estudiamos juntos en la biblioteca el martes.', 'El martes la biblioteca estudia con nosotros.', 'Estudiamos solos en la biblioteca, pero no el martes.'], answer: 0, why: 'El día pasa al final y el plan es el mismo: quién, qué, dónde y cuándo.' },
            { prompt: '«En casa trabajo mejor» y «Trabajo mejor en casa»: ¿significan lo mismo?', options: ['Sí, solo cambia lo que va primero.', 'No, la primera habla del pasado.'], answer: 0, why: 'Mover el lugar no cambia el hecho: cambia el punto de partida.' },
          ] },
        ] },
        { title: '¿Esto o aquello?', mascot: '/autoestudio/mascot/noting.webp', coach: 'Con «o», la otra persona elige.', blocks: [
          { kind: 'concept', tone: 'violet', label: 'PREGUNTA CON «O»', question: '¿Cuál prefieres?', en: 'either… or…', formula: ['¿verbo + opción A + o + opción B?'],
            meaning: 'Para **ofrecer dos opciones** en una sola pregunta, unimos las opciones con **o**. La otra persona responde eligiendo una, no con «sí» o «no».',
            examples: [
              { es: '¿Prefieres [[té o café|violet]]?', en: 'Do you prefer tea or coffee?' },
              { es: '¿Trabajas [[en casa o en una oficina|violet]]?', en: 'Do you work at home or in an office?' },
              { es: '¿Nos reunimos [[antes o después|violet]] de comer?', en: 'Shall we meet before or after lunch?' },
              { es: '¿Vamos [[el martes o el miércoles|violet]]?', en: 'Shall we go on Tuesday or on Wednesday?' },
            ],
            note: 'Respuesta natural: «¿Té o café?» → «**Café**, por favor». «¿Antes o después de comer?» → «**Después**».' },
          { kind: 'tip', icon: '🎵', title: 'Escucha la entonación', text: 'La voz **sube** en la primera opción y **baja** en la segunda: «¿Prefieres té ↗ o café ↘?». Así la otra persona sabe que tiene que elegir.', en: 'The voice rises on the first option and falls on the second.' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'Quieres ofrecer dos días para la reunión. ¿Qué preguntas?', options: ['¿Prefieres el martes y el miércoles?', '¿No prefieres el martes ni el miércoles?', '¿Prefieres el martes o el miércoles?'], answer: 2, why: '«O» presenta dos opciones para elegir una.' },
            { prompt: '«¿Vienes en bus o en metro?» ¿Qué respuesta es natural?', options: ['Sí.', 'En metro.', 'Bus y metro no.'], answer: 1, why: 'Se elige una de las opciones: «En metro».' },
          ] },
        ] },
        { title: 'Cómo elegir', mascot: '/brand/mascot/seated.webp', coach: 'Piensa en lo que quiere saber la otra persona.', blocks: [
          { kind: 'decide', title: 'Antes de escribir tu mensaje, responde', steps: [
            { q: '¿La otra persona pregunta «¿cuándo?»?', yes: 'Empieza por el **tiempo**: «[[El martes por la tarde|blue]] estudiamos en la biblioteca».', no: 'next' },
            { q: '¿La otra persona pregunta «¿dónde?»?', yes: 'Empieza por el **lugar**: «[[En la biblioteca|teal]] estudiamos el martes por la tarde».', no: 'next' },
            { q: '¿Quieres que la otra persona elija entre dos cosas?', yes: 'Haz una pregunta con **o**: «¿Nos vemos [[el martes o el miércoles|violet]]?».', no: 'Usa el **orden normal**: verbo + modo + lugar + tiempo. «Estudiamos [[tranquilamente|orange]] [[en la biblioteca|teal]] [[el martes|blue]]».' },
          ] },
          { kind: 'tip', icon: '⚖', title: 'No pongas todo al principio', text: 'Una o dos piezas al principio está bien. Si pones todas, el mensaje se vuelve difícil: «Tranquilamente, el martes, en la biblioteca, por la tarde, estudiamos» es raro. Mejor: «El martes por la tarde estudiamos tranquilamente en la biblioteca».', en: 'Don’t put every piece at the start.' },
        ] },
        { title: 'Errores frecuentes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Estos errores son muy comunes.', blocks: [
          { kind: 'guide', text: { teacher: 'Tu alumno busca el error antes de que muestres la corrección. Después lee la versión correcta en voz alta.', self: 'Lee cada frase, busca el error y después toca para ver la corrección.' } },
          { kind: 'mistakes', title: '¿Dónde está el error?', items: [
            { wrong: 'Yo en casa estudio por la mañana.', right: 'Yo estudio en casa por la mañana.', why: 'El lugar no va entre el sujeto y el verbo. Primero el verbo; después, el lugar.' },
            { wrong: '¿Prefieres té y café?', right: '¿Prefieres té o café?', why: 'Para elegir una de dos cosas, usa «o». «Y» suma las dos.' },
            { wrong: '¿Nos reunimos antes o después comer?', right: '¿Nos reunimos antes o después de comer?', why: '«Antes» y «después» necesitan «de» antes de otra palabra: antes de comer, después de las tres.' },
            { wrong: 'Tranquilamente, el martes, en la biblioteca, por la tarde, estudiamos.', right: 'El martes por la tarde estudiamos tranquilamente en la biblioteca.', why: 'Demasiadas piezas al principio. Pon una o dos al principio y el resto después del verbo.' },
            { wrong: 'El martes la biblioteca estudia con nosotros.', right: 'El martes estudiamos en la biblioteca.', why: 'Al mover el marco, el hecho no cambia: nosotros estudiamos, no la biblioteca.' },
            { wrong: '—¿Té o café? —Sí.', right: '—¿Té o café? —Café, por favor.', why: 'Una pregunta con «o» se responde eligiendo una opción.' },
          ] },
          { kind: 'teacher', text: 'Pide al alumno una oración verdadera sobre su rutina con tiempo, lugar y modo. Después, que la diga otra vez empezando por el tiempo.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'El orden en situaciones reales', coach: 'Toca las expresiones marcadas.',
      steps: [
        { title: 'El grupo de estudio', blocks: [
          { kind: 'guide', text: { teacher: 'Lean el chat con papeles. Después, el alumno toca cada expresión marcada y explica por qué va en ese lugar.', self: 'Lee el chat. Después toca cada expresión marcada para descubrir por qué está ahí.' } },
          { kind: 'explore', title: 'Chat del grupo «Examen de junio»', setting: 'Ana, Leo y Marta organizan una tarde de estudio para el examen.', lines: [
            { who: 'Marta', text: 'Hola, chicos. ¿Cuándo estudiamos juntos esta semana?' },
            { who: 'Ana', text: '[[El martes por la tarde|blue]] estoy libre.', en: 'I’m free on Tuesday afternoon.' },
            { who: 'Leo', text: 'Yo también. ¿Estudiamos [[en tu casa o en la biblioteca|violet]]?' },
            { who: 'Ana', text: 'En mi casa hay mucho ruido. Mejor en la biblioteca.' },
            { who: 'Marta', text: 'La biblioteca está cerca de la estación, ¿no?' },
            { who: 'Leo', text: 'Sí. Allí podemos hablar [[tranquilamente|orange]] en una sala reservada.' },
            { who: 'Ana', text: 'Perfecto. Entonces: estudiamos juntos en la biblioteca [[el martes por la tarde|blue]].' },
            { who: 'Marta', text: '¿Nos reunimos [[antes o después de comer|violet]]?' },
            { who: 'Leo', text: 'Después. Así llegamos [[sin prisa|orange]].' },
            { who: 'Marta', text: 'De acuerdo. ¿Dónde nos encontramos?' },
            { who: 'Ana', text: '[[En la estación, junto a la salida|teal]]. Desde allí caminamos juntos.' },
          ], notes: {
            'El martes por la tarde': 'Marta pregunta «¿cuándo?», así que Ana **empieza por el tiempo**: es la información que el grupo necesita primero.',
            'en tu casa o en la biblioteca': 'Leo ofrece **dos lugares** con «o». Ana responde eligiendo uno: «Mejor en la biblioteca».',
            'tranquilamente': 'Responde a «¿cómo podemos hablar?». Es **modo** y va después del verbo, en el orden normal.',
            'el martes por la tarde': 'Ana resume el plan en **orden normal**: actividad, lugar y, al final, el tiempo. Es la misma información del principio, en otro orden.',
            'antes o después de comer': 'Marta ofrece **dos opciones** con «o». Fíjate: «antes **de** comer», «después **de** comer».',
            'sin prisa': '**Modo**: cómo llegan. Responde a «¿cómo?».',
            'En la estación, junto a la salida': 'Marta pregunta «¿dónde?», así que Ana **empieza por el lugar**. El marco es largo y por eso hay un punto o una coma después.',
          } },
          { kind: 'choice', title: '¿Entendiste?', items: [
            { prompt: '¿Dónde estudian finalmente?', options: ['En la casa de Ana.', 'En la biblioteca.', 'En la estación.'], answer: 1, why: '«Mejor en la biblioteca» y «estudiamos juntos en la biblioteca».' },
            { prompt: '¿Por qué Ana empieza su último mensaje con «En la estación»?', options: ['Porque Marta preguntó dónde se encuentran.', 'Porque es una pregunta con «o».', 'Porque «estación» es modo.'], answer: 0, why: 'Marta preguntó «¿Dónde nos encontramos?»: la respuesta empieza por el lugar.' },
          ] },
        ] },
        { title: 'Una reserva por teléfono', mascot: '/brand/mascot/speaking.webp', blocks: [
          { kind: 'explore', title: 'Restaurante La Esquina', setting: 'Leo llama a un restaurante para celebrar el final del examen con el grupo.', lines: [
            { who: 'Camarera', text: 'Restaurante La Esquina, buenas tardes.' },
            { who: 'Leo', text: 'Buenas tardes. Quiero reservar una mesa para tres personas.' },
            { who: 'Camarera', text: 'Muy bien. ¿Para [[el viernes o el sábado|violet]]?' },
            { who: 'Leo', text: '[[El viernes|blue]], por favor. A las nueve.' },
            { who: 'Camarera', text: '¿Prefieren [[en la terraza o en el salón|violet]]?' },
            { who: 'Leo', text: 'En la terraza. Allí se cena muy [[a gusto|orange]].' },
            { who: 'Camarera', text: 'Perfecto. [[En la terraza|teal]] tenemos una mesa libre a las nueve.' },
            { who: 'Leo', text: 'Muchas gracias. Hasta el viernes.' },
          ], notes: {
            'el viernes o el sábado': 'La camarera ofrece **dos días** con «o». Leo no dice «sí»: elige uno.',
            'El viernes': 'Leo responde con el **tiempo** primero, porque es justo lo que le preguntan.',
            'en la terraza o en el salón': 'Otra pregunta con «o», ahora con **dos lugares**.',
            'a gusto': '**Modo**: cómo se cena allí. Va después del verbo.',
            'En la terraza': 'La camarera **empieza por el lugar** porque Leo eligió la terraza: confirma primero esa información.',
          } },
          { kind: 'teacher', text: 'Cambien los papeles: el alumno es el camarero y hace dos preguntas con «o» (hora, mesa, bebida). El profesor responde eligiendo.' },
        ] },
        { title: '¿Cuándo, dónde o cómo?', blocks: [
          { kind: 'classify', title: 'Clasifica las expresiones de las dos conversaciones', categories: [
            { id: 'tiempo', label: 'Tiempo · ¿cuándo?', tone: 'blue' },
            { id: 'lugar', label: 'Lugar · ¿dónde?', tone: 'teal' },
            { id: 'modo', label: 'Modo · ¿cómo?', tone: 'orange' },
          ], items: [
            { text: 'el martes por la tarde', answer: 'tiempo', why: 'Responde a «¿cuándo estudian?».' },
            { text: 'en una sala reservada', answer: 'lugar', why: 'Responde a «¿dónde pueden hablar?».' },
            { text: 'tranquilamente', answer: 'modo', why: 'Responde a «¿cómo pueden hablar?».' },
            { text: 'junto a la salida', answer: 'lugar', why: 'Responde a «¿dónde se encuentran?».' },
            { text: 'sin prisa', answer: 'modo', why: 'Responde a «¿cómo llegan?».' },
            { text: 'a las nueve', answer: 'tiempo', why: 'Responde a «¿a qué hora?», una pregunta de tiempo.' },
            { text: 'a gusto', answer: 'modo', why: 'Responde a «¿cómo se cena?».' },
          ] },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Si te equivocas, lee la pista y prueba otra vez.',
      steps: [
        { title: 'Elige según el contexto', blocks: [
          { kind: 'choice', items: [
            { context: 'Tu amigo pregunta: «¿Dónde estudian ustedes?».', prompt: '¿Qué respuesta empieza por lo más útil?', options: ['En la biblioteca, estudiamos juntos el martes por la tarde.', 'Por la tarde, el martes estudiamos juntos.', 'Tranquilamente, el martes estudiamos juntos.'], answer: 0, why: 'Empieza por el lugar, que es lo que pregunta. Las otras no dicen dónde.' },
            { context: 'Tu jefa pregunta: «¿Cuándo es la reunión?».', prompt: '¿Qué respuesta le sirve más a tu jefa?', options: ['En la sala grande es la reunión.', 'El jueves a las diez es la reunión, en la sala grande.', 'Con todo el equipo es la reunión.'], answer: 1, why: 'La jefa pregunta «¿cuándo?»: empieza por el tiempo.' },
            { context: '«Hablamos tranquilamente en la sala después de las tres.»', prompt: '«Tranquilamente» indica…', options: ['Tiempo', 'Modo', 'Lugar'], answer: 1, why: 'Dice cómo hablan. «En la sala» es lugar y «después de las tres», tiempo.' },
            { context: 'Quieres saber qué bebida prefiere tu invitada.', prompt: '¿Quieres agua ___ limonada?', options: ['y', 'o', 'ni'], answer: 1, why: 'Ofreces dos bebidas para elegir una: «o».' },
            { context: 'Organizas una cena y no sabes qué día le va mejor a tu amigo.', prompt: '¿Qué pregunta es la más clara?', options: ['¿Cenamos el viernes o el sábado?', '¿Cenamos el viernes y el sábado?', '¿Cenamos?'], answer: 0, why: 'Ofrece dos días concretos con «o».' },
            { context: 'Escribes tu rutina: lugar = en el parque, tiempo = los domingos, modo = despacio.', prompt: '¿Qué oración tiene el orden normal?', options: ['Corro despacio en el parque los domingos.', 'Corro los domingos despacio en el parque despacio.', 'Yo en el parque corro despacio los domingos.'], answer: 0, why: 'Verbo + modo + lugar + tiempo, sin repetir y sin separar sujeto y verbo.' },
          ] },
        ] },
        { title: 'Compara los significados', blocks: [
          { kind: 'choice', items: [
            { prompt: '«Mañana cenamos en casa» y «Cenamos en casa mañana». ¿Qué cambia?', options: ['El día de la cena.', 'Lo primero que escucha la otra persona.', 'Quién cena.'], answer: 1, why: 'El hecho es el mismo. Solo cambia el punto de partida del mensaje.' },
            { prompt: '¿Qué oración **destaca el lugar**?', options: ['En el café trabajo mejor.', 'Trabajo mejor en el café.'], answer: 0, why: 'El lugar va al principio: es lo primero que se nota.' },
            { prompt: '¿Qué pregunta ofrece **dos opciones**?', options: ['¿Quieres té?', '¿Quieres té o café?', '¿Quieres té y café?'], answer: 1, why: 'Con «o», la otra persona elige una de las dos.' },
            { prompt: '¿Qué versión **cambia el plan**?', options: ['El sábado vamos al cine con Leo.', 'Vamos al cine con Leo el sábado.', 'El sábado Leo va al cine sin nosotros.'], answer: 2, why: 'Aquí cambia quién va. Las otras dos dicen lo mismo en otro orden.' },
          ] },
        ] },
        { title: 'Completa la conversación', blocks: [
          { kind: 'chat-fill', title: 'Organizar una clase de repaso', lines: [
            { who: 'Profesor', text: 'Hola, Marta. ¿Cuándo hacemos la clase de repaso?' },
            { who: 'Marta', text: '___ estoy libre.', options: ['El jueves por la tarde', 'Tranquilamente', 'En la biblioteca'], answer: 0, why: 'El profesor pregunta «¿cuándo?»: la respuesta empieza por el tiempo.' },
            { who: 'Profesor', text: 'Muy bien. ¿Prefieres en el aula ___ en línea?', options: ['y', 'o', 'ni'], answer: 1, why: 'Dos opciones para elegir: «o».' },
            { who: 'Marta', text: 'En el aula. Así podemos trabajar ___.', options: ['el jueves', 'en el aula', 'con calma'], answer: 2, why: 'Falta el modo: ¿cómo trabajan? Con calma.' },
            { who: 'Profesor', text: '¿Empezamos antes ___ después de las cinco?', options: ['o', 'y', 'de'], answer: 0, why: 'Dos opciones: antes o después.' },
            { who: 'Marta', text: '___. A las cinco termino mi trabajo.', options: ['Sí', 'Después', 'Antes y después'], answer: 1, why: 'Se responde eligiendo una opción. Termina a las cinco, así que llega después.' },
          ] },
        ] },
        { title: 'Encuentra el error', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Yo en la oficina trabajo por la mañana.', ok: false, options: ['Yo trabajo en la oficina por la mañana.', 'Yo en la oficina por la mañana trabajo.', 'Trabajo yo en la mañana oficina.'], answer: 0, why: 'El lugar no va entre el sujeto y el verbo.' },
            { sentence: 'Por la tarde, tomo café con mi hermana.', ok: true, why: 'Correcta: el tiempo va al principio y destaca cuándo.' },
            { sentence: '¿Prefieres la playa y la montaña?', ok: false, options: ['¿Prefieres la playa o la montaña?', '¿Prefieres la playa ni la montaña?', '¿Prefieres la playa, la montaña?'], answer: 0, why: 'Para elegir, «o».' },
            { sentence: 'Nos vemos después la clase.', ok: false, options: ['Nos vemos después de la clase.', 'Nos vemos después a la clase.', 'Nos vemos de después la clase.'], answer: 0, why: '«Después de» + momento: después de la clase.' },
            { sentence: 'Caminamos despacio por el parque los domingos.', ok: true, why: 'Correcta: verbo + modo + lugar + tiempo.' },
            { sentence: 'Leo en el tren todos los días leo un libro.', ok: false, options: ['Leo un libro en el tren todos los días.', 'Leo en el tren un libro leo todos los días.', 'En el tren todos los días un libro.'], answer: 0, why: 'No repitas el verbo: verbo + cosa + lugar + tiempo.' },
          ] },
        ] },
        { title: 'Construye frases', blocks: [
          { kind: 'build', title: 'Ordena las palabras', items: [
            { tiles: ['trabajo', 'Por la mañana', 'en casa'], accept: ['Por la mañana trabajo en casa', 'Trabajo en casa por la mañana', 'En casa trabajo por la mañana'], en: 'I work at home in the morning.' },
            { tiles: ['Prefieres', 'el martes', 'o', 'el miércoles'], accept: ['Prefieres el martes o el miércoles', 'Prefieres el miércoles o el martes'], en: 'Do you prefer Tuesday or Wednesday?' },
            { tiles: ['despacio', 'Caminamos', 'por el parque', 'los domingos'], accept: ['Caminamos despacio por el parque los domingos', 'Los domingos caminamos despacio por el parque'], en: 'We walk slowly in the park on Sundays.' },
            { tiles: ['nos reunimos', 'Mañana', 'en la biblioteca'], accept: ['Mañana nos reunimos en la biblioteca', 'Nos reunimos en la biblioteca mañana', 'En la biblioteca nos reunimos mañana'], en: 'Tomorrow we meet at the library.' },
          ] },
        ] },
        { title: 'Escribe la misma idea de otra forma', blocks: [
          { kind: 'rewrite', items: [
            { prompt: 'Estudiamos en la biblioteca el miércoles por la tarde.', instruction: 'Destaca el día: empieza por el tiempo.', accept: ['El miércoles por la tarde estudiamos en la biblioteca', 'El miércoles por la tarde, estudiamos en la biblioteca'] },
            { prompt: 'Nos reunimos antes de comer. Nos reunimos después de comer.', instruction: 'Haz una sola pregunta con dos opciones.', accept: ['Nos reunimos antes o después de comer', 'Nos reunimos después o antes de comer'] },
            { prompt: 'Cenamos en la terraza el sábado.', instruction: 'Empieza por el lugar.', accept: ['En la terraza cenamos el sábado', 'En la terraza, cenamos el sábado', 'En la terraza el sábado cenamos'] },
            { prompt: 'Por la tarde tomo café en la cocina.', instruction: 'Empieza por la acción y pon el tiempo al final.', accept: ['Tomo café en la cocina por la tarde'] },
            { prompt: '¿Quieres té? ¿Quieres café?', instruction: 'Haz una sola pregunta con dos opciones.', accept: ['Quieres te o cafe', 'Quieres cafe o te'] },
          ] },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Un cambio de horario', coach: 'Primero escucha sin leer.',
      steps: [
        { title: 'Un cambio de horario', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha para la idea general. En la segunda, el alumno anota cuándo, dónde y cómo antes de responder.', self: 'Escucha una vez para la idea general y otra vez para los detalles: anota cuándo, dónde y cómo. Puedes bajar la velocidad.' } },
          { kind: 'listen', title: 'Un mensaje para el grupo', channel: 'NOTA DE VOZ · GRUPO DE ESTUDIO', src: '/audio/grammar-classroom/113.mp3',
            before: 'Una compañera deja una nota de voz al grupo de estudio. La biblioteca está ocupada por la mañana. ¿Qué crees que propone?',
            gist: { prompt: '¿Qué propone la compañera?', options: ['Reunirse por la tarde, después de las tres.', 'Cancelar la reunión de esta semana.', 'Estudiar en su casa por la mañana.'], answer: 0, why: '«Podemos reunirnos tranquilamente en la sala pequeña después de las tres».' },
            details: [
              { prompt: '¿Por qué no pueden reunirse por la mañana?', options: ['La biblioteca tiene una actividad para niños.', 'La compañera trabaja en la biblioteca.', 'La sala pequeña está cerrada.'], answer: 0, why: '«Por la mañana, la biblioteca tiene una actividad para niños».' },
              { prompt: '¿Qué dos días ofrece?', options: ['El lunes o el martes.', 'El martes o el miércoles.', 'El miércoles o el jueves.'], answer: 1, why: '«¿Prefieren el martes o el miércoles?».' },
              { prompt: '¿Hasta qué hora trabaja en casa el martes?', options: ['Hasta las dos.', 'Hasta las tres.', 'Hasta la tarde.'], answer: 0, why: '«Yo trabajo el martes en casa hasta las dos».' },
              { prompt: '¿Dónde se encuentran primero?', options: ['En la sala pequeña.', 'En la estación, junto a la puerta principal.', 'En la biblioteca, junto a la puerta.'], answer: 1, why: '«En la estación, junto a la puerta principal, podemos encontrarnos primero».' },
              { prompt: '«En la estación, junto a la puerta principal, podemos encontrarnos primero.» ¿Por qué empieza por el lugar?', options: ['Para destacar dónde se encuentran.', 'Porque es una pregunta con «o».', 'Porque el lugar siempre va primero.'], answer: 0, why: 'El lugar va al principio para destacarlo: es la información nueva.' },
            ],
            transcript: 'Hola, equipo. [[Por la mañana|blue]], la biblioteca tiene una actividad para niños. Podemos reunirnos [[tranquilamente|orange]] [[en la sala pequeña|teal]] [[después de las tres|blue]]. ¿Prefieren [[el martes o el miércoles|violet]]? Yo trabajo el martes [[en casa|teal]] hasta las dos, así que puedo llegar sin problemas. [[En la estación, junto a la puerta principal|teal]], podemos encontrarnos primero. Después caminamos a la biblioteca. Confirmen el día en el grupo y yo reservo la sala [[por la tarde|blue]].',
            reply: { teacher: 'El alumno responde a la nota de voz en voz alta: elige el día con una frase completa y propone una hora. Ejemplo: «El miércoles es mejor para mí. ¿Nos vemos a las tres o a las cuatro?».', self: 'Responde a la nota de voz: elige el martes o el miércoles y haz tú también una pregunta con «o».' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Tu rutina y tus planes', coach: 'Primero lo importante. Después, los detalles.',
      steps: [
        { title: 'Tu rutina y tus planes', blocks: [
          { kind: 'guide', text: { teacher: 'No hace falta usar todas las preguntas. Sigue lo que tu alumno quiere contar; de vez en cuando, tu alumno repite una idea empezando por el tiempo o por el lugar.', self: 'Responde cada pregunta en voz alta, como en una conversación. Después di la misma idea en otro orden.' } },
          { kind: 'talk', cards: [
            { q: '¿Cuándo y dónde te concentras mejor?', followUps: ['¿Cómo te gusta estudiar: con música o en silencio?', '¿Y dónde no puedes concentrarte nada?', '¿Siempre fue así?'], phrases: ['[[Por la mañana|blue]] me concentro mejor.', 'Estudio mejor [[en casa|teal]].', 'Trabajo [[en silencio|orange]].'], hint: 'Primero responde con una oración completa. Después repítela empezando por el tiempo o por el lugar.', example: 'Me concentro mejor por la mañana, en mi habitación. Por la tarde estoy cansado. Estudio en silencio, sin música.', next: 'Ahora hablemos de tu rutina.', teacher: 'Si responde solo «por la mañana», tú preguntas «¿Qué haces por la mañana?» y tu alumno da la oración completa.' },
            { q: 'Cuéntame un día normal de tu semana.', followUps: ['¿Qué haces primero?', '¿Dónde comes?', '¿Qué haces por la noche?'], phrases: ['[[Por la mañana|blue]] trabajo…', 'Como [[en la oficina|teal]]…', '[[Después de comer|blue]]…', 'Vuelvo a casa [[en bici|orange]].'], hint: 'Usa el tiempo al principio para organizar tu día: por la mañana, después de comer, por la noche.', example: 'Por la mañana trabajo en una tienda. Como en la cocina de la tienda con mis compañeros. Después de comer vuelvo a casa despacio, caminando. Por la noche estudio español.', next: '¿Y tu fin de semana?' },
            { q: '¿Qué haces los fines de semana? ¿Es diferente de tu semana?', followUps: ['¿Dónde te gusta pasar el domingo?', '¿Con quién?', '¿Prefieres salir o quedarte en casa?'], phrases: ['[[Los sábados|blue]]…', '[[En el parque|teal]]…', 'Prefiero [[salir o quedarme en casa|violet]]…'], hint: 'Si te preguntan «¿salir o quedarte?», elige una opción y di por qué.', example: 'Los sábados duermo mucho. Por la tarde salgo con mis amigos. Los domingos prefiero quedarme en casa tranquilamente.', next: 'Ahora vamos a organizar algo juntos.' },
            { q: 'Vamos a organizar una tarde de estudio juntos. ¿Qué día te va bien?', followUps: ['¿En tu casa o en una biblioteca?', '¿Antes o después de comer?', '¿Cómo llegamos: caminando o en bus?'], phrases: ['¿Nos vemos [[el martes o el jueves|violet]]?', '[[En la biblioteca|teal]] hay una sala…', 'Prefiero [[después de comer|blue]].'], hint: 'Haz tú también al menos una pregunta con «o».', example: 'El jueves por la tarde me va bien. ¿Nos vemos en la biblioteca o en un café? En la biblioteca podemos trabajar tranquilamente.', next: 'Ahora piensa en un lugar especial para ti.', teacher: 'Haz tú de compañero indeciso y tu alumno te ofrece opciones con «o».' },
            { q: '¿Hay un lugar donde te sientes muy bien? ¿Cuándo vas allí?', followUps: ['¿Qué haces allí?', '¿Vas solo o con alguien?', '¿Cuándo fuiste la última vez?'], phrases: ['[[En la playa|teal]] me siento…', 'Voy allí [[los domingos|blue]].', 'Camino [[sin prisa|orange]].'], hint: 'Empieza por el lugar para destacarlo: «En la playa me siento libre».', example: 'En el parque de mi barrio me siento muy bien. Voy allí los domingos por la mañana. Camino sin prisa y escucho música.', next: 'Para terminar, un plan perfecto.' },
            { q: 'Describe tu sábado perfecto: cuándo, dónde y cómo.', followUps: ['¿Por dónde empieza el día?', '¿Dónde comes?', '¿Cómo termina?'], phrases: ['[[Por la mañana|blue]]…', '[[En un café|teal]]…', '[[Tranquilamente|orange]]…'], hint: 'Usa las tres piezas: tiempo, lugar y modo. Pon al principio lo que más quieres destacar.', example: 'Por la mañana desayuno tranquilamente en un café cerca del mar. Después camino por la playa. Por la noche ceno con mis amigos en una terraza.' },
          ], swap: { teacher: 'Al final, cambien los papeles: el alumno le hace al profesor dos preguntas con «o» para organizar un plan.', self: 'Escribe dos preguntas con «o» para organizar un plan con un amigo y envíaselas esta semana.' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Un aviso para tu grupo', coach: 'El mismo plan, dos puntos de partida.',
      steps: [
        { title: 'Un aviso para tu grupo', blocks: [
          { kind: 'guide', text: { teacher: 'Puede escribir en clase o como tarea. Usen la revisión automática y después comparen juntos las dos versiones del aviso: ¿qué destaca cada una?', self: 'Escribe tu aviso y toca «Revisar mi texto». Corrige lo que te indique y vuelve a revisarlo.' } },
          { kind: 'write', title: 'Organiza una reunión', situation: 'Eres parte de un grupo (de estudio, de deporte o de trabajo) y tienes que avisar una reunión.', task: [
            'Escribe el aviso empezando por **el tiempo**: día y hora.',
            'Escribe el mismo aviso empezando por **el lugar**. El plan no cambia.',
            'Añade **cómo** van a trabajar o llegar (tranquilamente, juntos, sin prisa…).',
            'Termina con una **pregunta con «o»** para que el grupo elija.',
          ], starters: ['El miércoles por la tarde…', 'En la biblioteca…', 'Podemos hablar…', '¿Prefieren… o…?', 'Yo puedo esperar…'],
            words: ['por la mañana', 'después de las tres', 'junto a la puerta', 'cerca de', 'tranquilamente', 'juntos', 'sin prisa', 'antes o después'],
            model: '[[El miércoles por la tarde|blue]] estudiamos juntos en la biblioteca. [[En la biblioteca|teal]] estudiamos juntos el miércoles por la tarde. Podemos hablar [[tranquilamente|orange]] en la sala pequeña. ¿Prefieren llegar [[antes o después de las tres|violet]]? Yo puedo esperar [[junto a la puerta principal|teal]] y caminar con ustedes hasta la sala reservada.',
            minWords: 40 },
        ] },
      ],
    },
    {
      id: 'cerrar', label: 'Cerrar', icon: '✓', mascot: '/brand/mascot/standing.webp',
      title: 'Lo esencial', coach: '¿Qué te llevas hoy?',
      steps: [
        { title: 'Lo esencial', blocks: [
          { kind: 'recap', items: [
            { tone: 'blue', label: 'TIEMPO · LUGAR · MODO', formula: '¿cuándo? · ¿dónde? · ¿cómo?', example: 'Estudio tranquilamente en casa por la mañana.', caption: 'Tres piezas alrededor del verbo.', en: 'when · where · how' },
            { tone: 'teal', label: 'MARCO AL PRINCIPIO O AL FINAL', formula: 'tiempo / lugar + verbo ↔ verbo + tiempo / lugar', example: 'El martes estudio en casa. · Estudio en casa el martes.', caption: 'El hecho no cambia. Cambia lo que destacas.', en: 'same fact, different start' },
            { tone: 'violet', label: 'PREGUNTA CON «O»', formula: '¿opción A o opción B?', example: '¿Nos vemos el martes o el miércoles?', caption: 'La respuesta elige una opción.', en: 'A or B?' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'Una pregunta para ordenar', text: '¿Qué quiere saber la otra persona? Pon **eso** primero. Si nadie pregunta nada especial, usa el orden normal: **verbo + modo + lugar + tiempo**.' },
        ] },
        { title: 'Desafío final', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'choice', title: 'Cuatro frases, sin ayuda', items: [
            { prompt: '«Nadamos rápido en la piscina los lunes.» ¿Qué indica «los lunes»?', options: ['Tiempo', 'Lugar', 'Modo'], answer: 0, why: 'Responde a «¿cuándo?».' },
            { prompt: '¿Vamos en metro ___ en taxi?', options: ['y', 'o', 'ni'], answer: 1, why: 'Dos opciones para elegir: «o».' },
            { prompt: 'Alguien pregunta «¿Dónde trabajas?». ¿Qué respuesta empieza por lo más útil?', options: ['Por la mañana trabajo.', 'En un hospital trabajo por las noches.', 'Mucho trabajo.'], answer: 1, why: 'Empieza por el lugar, que es lo que preguntan.' },
            { prompt: '¿Qué oración tiene un orden natural?', options: ['Yo en el gimnasio entreno los jueves.', 'Entreno en el gimnasio los jueves.', 'Entreno los jueves en el gimnasio los jueves.'], answer: 1, why: 'Verbo + lugar + tiempo, sin separar sujeto y verbo y sin repetir.' },
          ] },
        ] },
        { title: 'Tus errores y repaso', blocks: [
          { kind: 'review' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «El martes estudio en casa» y «Estudio en casa el martes»: ¿qué diferencia hay? El plan es el mismo; la primera destaca el día. Pide un ejemplo propio con una pregunta con «o».' },
        ] },
      ],
    },
  ],
};
