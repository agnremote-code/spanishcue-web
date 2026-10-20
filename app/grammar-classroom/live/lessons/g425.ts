import type { LiveLesson } from '../types';

/**
 * Lesson 425 · B1 · Narración de anécdotas con marcadores (course unit G125).
 * A B1 integration class: no new tense; the learner tells a personal anecdote
 * with the past tenses already taught (indefinido, imperfecto, estaba +
 * gerundio, estuve + gerundio, pluscuamperfecto: units G047–G050, G086, G087)
 * and the markers of oral storytelling. Builds on G077 (primero, luego, al
 * final, entonces) and G085 (escena / hecho / causa) and goes to B1 depth.
 * One scene runs through the class: Clara Benítez, a translator at Palabra
 * Viva, a small translation agency in Madrid, went to her friend Irene's
 * wedding in Valencia on Saturday. While she was having breakfast her
 * downstairs neighbour rang (water was coming through her bathroom ceiling:
 * Clara's washing machine was leaking); when she got to Atocha the train had
 * already left and she realised she had forgotten the present; she took the
 * next train and arrived just as the couple were walking in. On Monday she
 * tells her colleague Marcos Gil; in Practicar the receptionist Nuria Vega and
 * Clara's trip back on Sunday add new anecdotes. In the audio Irene (Spanish
 * voice, tú) tells her own side of the morning in a voice message.
 * Markers: opening (¿A que no sabes qué me pasó?, ¿Sabes qué…?, resulta que,
 * una vez), sequence (al principio, entonces, luego, al rato, a los diez
 * minutos), sudden events (de repente, de pronto, en ese momento, justo
 * cuando), background (mientras + imperfecto, estaba + gerundio cuando…),
 * closing and evaluation (al final, total, que…, menos mal que + indicativo,
 * por fin), listener reactions (¡No me digas!, ¿Y entonces?, ¡Qué mala
 * suerte!, ¡Qué fuerte! — very frequent in colloquial Spain, less so in
 * America —, ¡Qué barbaridad! — Spain and America —, ¡Menos mal!).
 * Contrasts: cuando llegué, salió / ya había salido; estaba + gerundio
 * (interrupted background) / estuve + gerundio (closed period); al final /
 * por fin. Mistakes: *mientras desayuné, sonó; *de repente sonaba;
 * *ya salió (for an earlier past); *estuve desayunando cuando…; *por fin
 * perdí el tren; *me di cuenta que. Reported speech (me dijo que, G118)
 * appears in the stories. Ampliación: the narrative present (receptive and
 * guided), glossed.
 */
export const lesson: LiveLesson = {
  id: 425,
  level: 'B1',
  title: 'Narración de anécdotas con marcadores',
  subtitle: 'Contar una anécdota personal con escena, hechos, sorpresa y final, y reaccionar cuando otra persona te cuenta la suya.',
  legend: [
    { tone: 'blue', label: 'ESCENA · imperfecto y estaba + gerundio: hacía, estaba desayunando (background, action in progress)' },
    { tone: 'orange', label: 'HECHOS · indefinido: perdí, sonó, estuve esperando una hora (events that move the story on)' },
    { tone: 'violet', label: 'ANTES DE ANTES · pluscuamperfecto: ya había salido (an earlier past)' },
    { tone: 'teal', label: 'MARCADORES Y REACCIONES · resulta que, de repente, al rato, total, que…, ¡no me digas! (storytelling markers)' },
  ],
  optionNotes: {
    'empezó': 'Si la película empezó **antes** de la llegada, es un hecho anterior a otro pasado: **había empezado**.',
    'se fueron': 'Si los amigos se fueron **antes** de la llegada de Marcos, es un hecho anterior a otro pasado: **se habían ido**.',
    'que': 'Darse cuenta **de** algo: «me di cuenta **de que**…». Sin «de» es un error frecuente.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Cómo se cuenta una anécdota', coach: 'Abrir, pintar, contar, sorprender, cerrar. Open, set the scene, tell, surprise, close.',
      steps: [
        { title: '¿A que no sabes qué me pasó? · Guess what happened to me', blocks: [
          { kind: 'lead', text: 'Clara Benítez es traductora en Palabra Viva, una pequeña agencia de traducción de Madrid. El sábado fue a la boda de su amiga Irene en Valencia… y casi no llega. Hoy, lunes, se lo cuenta a su compañero Marcos Gil. Contar una **anécdota** no es solo poner verbos en pasado: hay que **abrir** el relato, pintar la **escena**, contar los **hechos** en orden, crear **sorpresa** y **cerrar** con una valoración. Hoy no hay tiempos nuevos: juntas los pasados que ya conoces con los **marcadores** del relato.', en: 'Clara Benítez is a translator at Palabra Viva, a small translation agency in Madrid. On Saturday she went to her friend Irene’s wedding in Valencia… and almost didn’t make it. Today, Monday, she tells her colleague Marcos Gil. Telling an anecdote is not just putting verbs in the past: you open the story, set the scene, tell the events in order, create surprise and close with a comment. No new tenses today: you combine the past tenses you know with storytelling markers.' },
          { kind: 'guide', text: { teacher: 'Tú lees las dos versiones en voz alta y tu alumno dice cuál quiere seguir escuchando y por qué.', self: 'Lee las dos versiones en voz alta. ¿Cuál te hace querer saber más? ¿Por qué? (Which one makes you want to hear more?)' } },
          { kind: 'compare', title: 'La misma historia, dos versiones · The same story, two versions', columns: [
            { tone: 'neutral', label: 'SOLO HECHOS', sentence: 'Perdí el tren. Tomé otro tren. Llegué a la boda.', idea: 'Es correcto, pero plano: no hay escena, ni sorpresa, ni final.', en: 'I missed the train. I took another train. I got to the wedding. (correct, but flat)' },
            { tone: 'teal', label: 'UNA ANÉCDOTA', sentence: '[[¿A que no sabes qué me pasó?|teal]] [[Resulta que|teal]] [[perdí|orange]] el tren… [[Total, que|teal]] [[llegué|orange]] a la boda de milagro.', idea: 'Un marcador abre, otro cierra, y el oyente quiere saber el resto.', en: 'Guess what happened to me? It turns out I missed the train… Anyway, I made it to the wedding by a miracle.' },
          ] },
          { kind: 'table', title: 'Las cinco partes de una anécdota · The five parts of an anecdote', head: ['Parte', 'Pregunta', 'Ejemplo de Clara'], rows: [
            ['1. Abrir (open)', '¿De qué vas a hablar?', '[[¿A que no sabes qué me pasó?|teal]] [[Perdí|orange]] el tren.'],
            ['2. Escena (background)', '¿Dónde estabas? ¿Qué hacías?', '[[Estaba desayunando|blue]] tranquilamente en casa.'],
            ['3. Hechos (events)', '¿Qué pasó, en qué orden?', '[[Sonó|orange]] el timbre; [[al rato|teal]] [[vimos|orange]] el problema.'],
            ['4. Sorpresa (twist)', '¿Qué pasó de repente?', '[[De repente|teal]] me [[di cuenta|orange]] de que [[había olvidado|violet]] el regalo.'],
            ['5. Cierre (ending + comment)', '¿Cómo terminó? ¿Qué te parece?', '[[Total, que|teal]] [[llegué|orange]] a tiempo. [[Menos mal que|teal]]…'],
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«¿A que no sabes qué me pasó?» sirve para…', options: ['pedir información práctica.', 'abrir la anécdota y despertar el interés.', 'cerrar la historia.'], answer: 1, why: 'Es una fórmula de apertura: anuncia que viene una historia sorprendente.', en: '“¿A que no sabes qué me pasó?” is used to…' },
            { prompt: '«Estaba desayunando tranquilamente» es…', options: ['el final de la historia.', 'un hecho que hace avanzar la historia.', 'la escena: lo que pasaba cuando ocurrió algo.'], answer: 2, why: 'Estaba + gerundio pinta el fondo: una acción en curso.', en: '“I was having breakfast quietly” is…' },
          ] },
        ] },
        { title: 'Los tiempos del relato · The tenses of a story', mascot: '/brand/mascot/studying.webp', coach: 'Cada tiempo tiene un trabajo. Each tense has a job.', blocks: [
          { kind: 'table', title: 'Qué hace cada pasado en una anécdota · What each past tense does', head: ['Función en la historia', 'Tiempo', 'Ejemplo de Clara'], rows: [
            ['La escena: cómo era, qué había (the setting)', 'imperfecto', '[[Eran|blue]] las siete y [[hacía|blue]] sol.'],
            ['Una acción en curso que algo interrumpe (an action in progress)', 'estaba + gerundio / imperfecto', '[[Estaba desayunando|blue]] cuando [[sonó|orange]] el timbre.'],
            ['Los hechos que hacen avanzar la historia (the events)', 'indefinido', '[[Bajé|orange]] a casa de mi vecina y [[vimos|orange]] el techo mojado.'],
            ['Un período cerrado, con duración (a closed period)', 'estuve + gerundio / indefinido', '[[Estuve limpiando|orange]] media hora.'],
            ['Un hecho anterior a otro pasado (an earlier past)', 'pluscuamperfecto: había + participio', 'Cuando [[llegué|orange]], el tren ya [[había salido|violet]].'],
          ], note: 'Ya conoces estas formas (clases 047–050, 086 y 087). Lo nuevo es usarlas **juntas**: la escena en imperfecto, los hechos en indefinido y, cuando hace falta volver atrás, el pluscuamperfecto.' },
          { kind: 'compare', title: 'Una palabra cambia la historia · One word changes the story', columns: [
            { tone: 'orange', label: 'INDEFINIDO + INDEFINIDO', sentence: 'Cuando [[llegué|orange]] al andén, el tren [[salió|orange]].', idea: 'Los dos hechos casi a la vez: llegué y, en ese momento, salió. ¡Quizá lo vi salir!', en: 'When I got to the platform, the train left. (I arrived, and then it left)' },
            { tone: 'violet', label: 'INDEFINIDO + PLUSCUAMPERFECTO', sentence: 'Cuando [[llegué|orange]] al andén, el tren ya [[había salido|violet]].', idea: 'Primero salió el tren; después llegué yo. Lo perdí.', en: 'When I got to the platform, the train had already left. (it left first)' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Cuando Clara abrió la puerta, su vecina ___ en el rellano con cara de preocupación.', options: ['había estado', 'estuvo', 'estaba'], answer: 2, why: 'Describe la escena en el momento de abrir: estaba (imperfecto).', en: 'When Clara opened the door, her neighbour was on the landing looking worried.' },
            { prompt: 'Clara llegó a la estación a las nueve y veinte. El tren ___ a las nueve y cuarto.', options: ['había salido', 'salía', 'estaba saliendo'], answer: 0, why: 'Salió antes de la llegada de Clara: un hecho anterior a otro pasado, pluscuamperfecto.', en: 'Clara got to the station at twenty past nine. The train had left at a quarter past nine.' },
            { prompt: 'En la estación, Clara ___ esperando el tren siguiente una hora larga.', options: ['estaba', 'estuvo', 'había'], answer: 1, why: '«Una hora larga» marca un período cerrado: estuvo + gerundio.', en: 'At the station, Clara spent a good hour waiting for the next train.' },
          ] },
        ] },
        { title: 'Los marcadores del relato · Storytelling markers', mascot: '/brand/mascot/standing.webp', coach: 'Las palabras que guían al oyente. The words that guide the listener.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'MARCADORES DEL RELATO', question: '¿Cómo empiezo, ordeno, sorprendo y termino?', en: 'How do I start, order, surprise and finish?', formula: ['ABRIR · ¿A que no sabes qué me pasó? · ¿Sabes qué…? · Resulta que… · Una vez…', 'ORDENAR · al principio · entonces · luego · al rato · a los diez minutos', 'SORPRENDER · de repente · de pronto · en ese momento · justo cuando…', 'CERRAR Y VALORAR · al final · total, que… · menos mal que… · ¡qué día!'],
            meaning: 'Los marcadores le dicen al oyente en qué parte de la historia estás. **Resulta que** presenta el problema; **al rato** dice que pasó un poco de tiempo; **de repente** anuncia la sorpresa; **total, que** resume y salta al resultado; **menos mal que** + indicativo valora algo que salvó la situación.',
            examples: [
              { es: '**Una vez**, en un viaje a Sevilla, me quedé sin hotel.', en: 'Once, on a trip to Seville, I was left without a hotel.' },
              { es: '**Al principio** no encontrábamos el problema, pero **al rato** vimos que la lavadora perdía agua.', en: 'At first we couldn’t find the problem, but after a while we saw that the washing machine was leaking.' },
              { es: '**Total, que** llegué justo a tiempo. **Menos mal que** había otro tren.', en: 'So, long story short, I arrived just in time. Thank goodness there was another train.' },
            ],
            note: '«Total, que…» y «¡Qué va!» son muy coloquiales: perfectos para hablar con amigos o compañeros, no para un informe. «Menos mal que» va con **indicativo**: «menos mal que **había** otro tren».' },
          { kind: 'tip', icon: '🌎', title: '«Al rato» en México · “Al rato” in Mexico', text: 'En un relato, **al rato** significa «poco tiempo después» en todo el mundo hispanohablante: «Al rato llegó el taxi». En México, además, se usa mucho para el futuro: «Te llamo **al rato**» (= más tarde, hoy).', en: 'In a story, “al rato” means “a little later” everywhere. In Mexico it is also very common for the future: “Te llamo al rato” = I’ll call you later today.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Llamamos un taxi desde el hotel y ___ llegó a la puerta.', options: ['una vez', 'resulta que', 'al rato'], answer: 2, why: '«Al rato» = poco tiempo después: ordena dos hechos.', en: 'We called a taxi from the hotel and after a while it arrived at the door.' },
            { prompt: 'Íbamos por la autopista tan tranquilos y, ___, el coche hizo un ruido rarísimo.', options: ['total, que', 'al principio', 'de pronto'], answer: 2, why: '«De pronto» (= de repente) anuncia un hecho inesperado que rompe la escena.', en: 'We were driving calmly along the motorway and suddenly the car made a really strange noise.' },
            { prompt: 'Olvidé la cartera en un banco del parque. ___ un chico la vio y me la trajo corriendo.', options: ['Una vez que', 'Menos mal que', 'Mientras'], answer: 1, why: '«Menos mal que» + indicativo valora lo que salvó la situación (thank goodness).', en: 'I left my wallet on a park bench. Thank goodness a young man saw it and ran after me with it.' },
          ] },
        ] },
        { title: 'Dos contrastes clave · Two key contrasts', mascot: '/brand/mascot/kneeling.webp', coach: '¿Fondo o sorpresa? ¿Resultado o alivio? Background or surprise? Outcome or relief?', blocks: [
          { kind: 'compare', title: 'Mientras o de repente · “Mientras” or “de repente”', columns: [
            { tone: 'blue', label: 'MIENTRAS + imperfecto · el fondo', sentence: '[[Mientras|teal]] [[me duchaba|blue]], alguien [[tocó|orange]] el timbre.', idea: 'Mientras presenta la acción en curso, el fondo: imperfecto.', en: 'While I was having a shower, someone rang the doorbell.' },
            { tone: 'orange', label: 'DE REPENTE + indefinido · el hecho', sentence: 'Me [[estaba duchando|blue]] y [[de repente|teal]] [[se fue|orange]] el agua caliente.', idea: 'De repente presenta un hecho puntual que interrumpe: indefinido.', en: 'I was having a shower and suddenly the hot water stopped.' },
          ] },
          { kind: 'compare', title: 'Al final o por fin · “Al final” or “por fin”', columns: [
            { tone: 'teal', label: 'AL FINAL · el resultado', sentence: '[[Al final|teal]] [[perdí|orange]] el tren. / [[Al final|teal]] todo [[salió|orange]] bien.', idea: 'Cómo terminó la historia, bien o mal (in the end).', en: 'In the end I missed the train. / In the end everything went well.' },
            { tone: 'teal', label: 'POR FIN · el alivio', sentence: 'Después de una hora, [[por fin|teal]] [[llegó|orange]] el tren.', idea: 'Algo que esperabas y deseabas pasa, después de mucho tiempo (at last).', en: 'After an hour, the train finally arrived.' },
          ] },
          { kind: 'decide', title: '¿Qué tiempo va con el marcador? · Which tense goes with the marker?', steps: [
            { q: '¿Describes lo que estaba pasando (mientras, cuando… estaba…)?', yes: '**Imperfecto** o **estaba + gerundio**: «Mientras desayunaba…», «Estaba desayunando cuando…».', no: 'next' },
            { q: '¿Cuentas algo que pasa de golpe o el hecho siguiente (de repente, en ese momento, al rato, entonces)?', yes: '**Indefinido**: «De repente sonó el timbre», «Al rato llegó el taxi».', no: 'next' },
            { q: '¿Vuelves atrás, a algo que pasó antes del momento de la historia (ya, antes, nunca)?', yes: '**Pluscuamperfecto**: «El tren ya había salido».', no: 'Piensa: ¿escena, hecho o algo anterior?' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Mientras Clara ___ la lavadora, su vecina secaba el suelo del baño.', options: ['desconectó', 'desconectaba', 'había desconectado'], answer: 1, why: 'Dos acciones en curso a la vez, con «mientras»: imperfecto.', en: 'While Clara was unplugging the washing machine, her neighbour was drying the bathroom floor.' },
            { prompt: 'Después de tres semanas de lluvia, ___ salió el sol el día de la boda.', options: ['de repente', 'por fin', 'al rato'], answer: 1, why: 'Algo esperado y deseado después de mucho tiempo: por fin.', en: 'After three weeks of rain, the sun finally came out on the wedding day.' },
            { prompt: 'Corrí por todo el andén, pero ___ el tren se fue sin mí.', options: ['al final', 'mientras', 'por fin'], answer: 0, why: 'El resultado de la historia, malo en este caso: al final. «Por fin» es para algo que deseabas.', en: 'I ran along the whole platform, but in the end the train left without me.' },
          ] },
        ] },
        { title: 'Cuando escuchas · When you are the listener', mascot: '/brand/mascot/speaking.webp', coach: 'Una anécdota se cuenta entre dos. It takes two to tell an anecdote.', blocks: [
          { kind: 'table', title: 'Reacciones del oyente · Listener reactions', head: ['Para…', 'Reacciones', 'Ejemplo'], rows: [
            ['mostrar sorpresa (surprise)', '[[¡No me digas!|teal]] · ¿En serio? · ¡No puede ser!', '—Perdí el tren. —[[¡No me digas!|teal]]'],
            ['pedir que siga (ask for more)', '[[¿Y entonces?|teal]] · ¿Y qué hiciste? · ¿Y qué pasó?', '—Sonó el timbre… —[[¿Y entonces?|teal]]'],
            ['reaccionar a algo malo (bad news)', '¡Qué mala suerte! · ¡Qué horror! · [[¡Qué fuerte!|teal]] · [[¡Qué barbaridad!|teal]]', '—Había olvidado el regalo. —¡Qué mala suerte!'],
            ['mostrar alivio (relief)', '[[¡Menos mal!|teal]] · ¡Qué suerte!', '—Al final llegué a tiempo. —[[¡Menos mal!|teal]]'],
          ], note: 'Sin reacciones, la persona que cuenta siente que no la escuchas. Una reacción corta cada dos o tres frases es suficiente.' },
          { kind: 'tip', icon: '🌎', title: '¿Dónde se dice? · Where do people say it?', text: '**¡Qué fuerte!** es muy coloquial y muy frecuente en España; en América se oye bastante menos. **¡Qué barbaridad!** se usa en España y en América, y sirve también para algo excesivo («¡Qué barbaridad de precio!»). **¡No me digas!**, **¿En serio?**, **¿Y entonces?** y **¡Menos mal!** se entienden en todas partes.', en: '“¡Qué fuerte!” is very colloquial and very common in Spain; in Latin America you hear it much less. “¡Qué barbaridad!” is used in both Spain and Latin America, also for something excessive. The others work everywhere.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '—Y cuando abrí la puerta, era mi vecina de abajo, empapada. —«___»', options: ['¿Y entonces?', '¡Menos mal!', 'Al rato.'], answer: 0, why: 'La historia no ha terminado: el oyente pide que siga.', en: '“And when I opened the door, it was my downstairs neighbour, soaking wet.”' },
            { prompt: '—Al final, el hermano de Irene me había guardado un sitio. —«___»', options: ['¿Y entonces?', '¡Qué mala suerte!', '¡Menos mal!'], answer: 2, why: 'Es una buena noticia que salva la situación: alivio.', en: '“In the end, Irene’s brother had kept a seat for me.”' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Seis errores típicos de B1. Six typical B1 mistakes.', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la frase con el error y tu alumno explica qué falla antes de ver la corrección.', self: 'Lee cada frase y busca el error antes de tocar. (Find the mistake before you tap.)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Mientras desayuné, sonó el timbre.', right: 'Mientras desayunaba, sonó el timbre.', why: 'Mientras presenta aquí el fondo, una acción en curso: imperfecto. (While I was having breakfast…)' },
            { wrong: 'De repente sonaba el teléfono.', right: 'De repente sonó el teléfono.', why: 'De repente anuncia un hecho puntual: indefinido. (Suddenly + a single event.)' },
            { wrong: 'Cuando llegué a la estación, el tren ya salió.', right: 'Cuando llegué a la estación, el tren ya había salido.', why: 'El tren salió antes de tu llegada: pluscuamperfecto. (The train had already left.)' },
            { wrong: 'Estuve desayunando cuando sonó el timbre.', right: 'Estaba desayunando cuando sonó el timbre.', why: 'La acción interrumpida es el fondo: estaba + gerundio. Estuve + gerundio es para un período cerrado. (I was having breakfast when…)' },
            { wrong: 'Por fin perdí el tren.', right: 'Al final perdí el tren.', why: 'Por fin es para algo que deseabas. Para el resultado, bueno o malo: al final. (In the end, not at last.)' },
            { wrong: 'Me di cuenta que había olvidado el regalo.', right: 'Me di cuenta de que había olvidado el regalo.', why: 'Darse cuenta **de** algo → darse cuenta **de que**. (To realise = darse cuenta de que.)' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Cuando llegamos al cine, la película ya ___.', options: ['empieza', 'empezó', 'había empezado'], answer: 2, why: 'Empezó antes de nuestra llegada: había empezado.', en: 'When we got to the cinema, the film had already started.' },
            { prompt: 'En el metro me di cuenta ___ no llevaba la cartera.', options: ['en que', 'que', 'de que'], answer: 2, why: 'Darse cuenta de algo: «me di cuenta de que…».', en: 'On the metro I realised I didn’t have my wallet.' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno cuenta en cinco frases un día en que casi llegó tarde, una frase por parte (abrir, escena, hechos, sorpresa, cierre). Tú reaccionas con «¡No me digas!» o «¿Y entonces?».' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'El lunes en la agencia', coach: 'Toca las palabras marcadas. Tap the marked words.',
      steps: [
        { title: 'Clara se lo cuenta a Marcos · Clara tells Marcos', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Marcos y tu alumno es Clara. Después tu alumno toca cada palabra marcada y dice si es escena, hecho, algo anterior o un marcador.', self: 'Lee el diálogo en voz alta. Después toca cada palabra marcada: ¿escena, hecho, algo anterior o marcador? (Scene, event, earlier past or marker?)' } },
          { kind: 'explore', title: '¿Qué tal la boda?', setting: 'Lunes, nueve de la mañana, en la cocina de Palabra Viva. Clara llega con cara de cansada y Marcos le pregunta por la boda de Irene. Se tratan de tú. (Monday, 9 a.m., in the kitchen at Palabra Viva. Clara looks tired and Marcos asks her about Irene’s wedding.)', lines: [
            { who: 'Marcos', text: '¡Buenos días, Clara! ¿Qué tal la boda de Irene? Tienes cara de cansada.', en: 'Morning, Clara! How was Irene’s wedding? You look tired.' },
            { who: 'Clara', text: '¡Uf! [[¿A que no sabes qué me pasó?|teal]] [[Perdí|orange]] el tren a Valencia.', en: 'Phew! Guess what happened to me? I missed the train to Valencia.' },
            { who: 'Marcos', text: '[[¡No me digas!|teal]] Si tú siempre llegas temprano a todo…', en: 'You’re kidding! But you’re always early for everything…' },
            { who: 'Clara', text: 'Pues [[resulta que|teal]] el sábado me levanté a las siete. [[Estaba desayunando|blue]] tranquilamente cuando [[sonó|orange]] el timbre: era mi vecina de abajo. Le [[caía|blue]] agua del techo del baño.', en: 'Well, it turns out that on Saturday I got up at seven. I was having breakfast quietly when the doorbell rang: it was my downstairs neighbour. Water was coming through her bathroom ceiling.' },
            { who: 'Marcos', text: '¡Qué horror! [[¿Y entonces?|teal]]', en: 'How awful! And then what?' },
            { who: 'Clara', text: '[[Al principio|teal]] no [[encontrábamos|blue]] el problema, pero [[al rato|teal]] [[vimos|orange]] que mi lavadora perdía agua. La desconecté, limpié todo y salí corriendo.', en: 'At first we couldn’t find the problem, but after a while we saw that my washing machine was leaking. I unplugged it, cleaned everything up and ran out of the house.' },
            { who: 'Marcos', text: 'Uy… ¿Y llegaste a la estación a tiempo?', en: 'Oh dear… And did you get to the station in time?' },
            { who: 'Clara', text: '¡Qué va! Cuando [[llegué|orange]] a Atocha, el tren [[ya había salido|violet]]. Y [[de repente|teal]] [[me di cuenta|orange]] de que [[había olvidado|violet]] el regalo en casa.', en: 'Not at all! When I got to Atocha, the train had already left. And suddenly I realised I had left the present at home.' },
            { who: 'Marcos', text: '[[¡Qué fuerte!|teal]] ¿Y qué hiciste?', en: 'No way! So what did you do?' },
            { who: 'Clara', text: '[[Entonces|teal]] [[compré|orange]] un billete para el tren siguiente y le escribí a Irene. Llegué a Valencia a las doce y media, y la ceremonia [[era|blue]] a la una, en un jardín a las afueras.', en: 'So I bought a ticket for the next train and texted Irene. I got to Valencia at half past twelve, and the ceremony was at one, in a garden outside the city.' },
            { who: 'Marcos', text: '¿Y llegaste?', en: 'And did you make it?' },
            { who: 'Clara', text: 'De milagro. Cuando entré en el jardín, los novios [[estaban entrando|blue]] [[en ese momento|teal]]. [[Total, que|teal]] [[llegué|orange]] a tiempo. [[Menos mal que|teal]] el hermano de Irene me [[había guardado|violet]] un sitio.', en: 'By a miracle. When I walked into the garden, the couple were walking in at that very moment. So, long story short, I made it on time. Thank goodness Irene’s brother had kept a seat for me.' },
          ], notes: {
            '¿A que no sabes qué me pasó?': 'Fórmula para **abrir** una anécdota y despertar el interés (guess what happened to me?). También: «¿Sabes qué me pasó?».',
            'Perdí': 'Indefinido: el hecho principal, que Clara anuncia al principio para enganchar a Marcos.',
            '¡No me digas!': 'Reacción de **sorpresa** del oyente (you’re kidding!). Se usa en todo el mundo hispanohablante.',
            'resulta que': '**Resulta que** + indicativo presenta el problema o la situación inesperada: así empieza de verdad la historia (it turns out that…).',
            'Estaba desayunando': 'Estaba + gerundio: la **acción en curso** que el timbre interrumpe. Es el fondo, no un hecho.',
            'sonó': 'Indefinido: el hecho que **interrumpe** la escena. Estructura típica: estaba + gerundio + cuando + indefinido.',
            'caía': 'Imperfecto: describe la situación de la vecina en ese momento (water was coming through).',
            '¿Y entonces?': 'Reacción del oyente para **pedir que siga** la historia (and then what?).',
            'Al principio': 'Marcador de orden: la primera fase de la historia (at first). No confundas con «en principio» (in principle).',
            'encontrábamos': 'Imperfecto: una situación que duró un tiempo sin cambiar (we couldn’t find it), hasta el hecho siguiente.',
            'al rato': '**Al rato** = poco tiempo después (after a while). Ordena los hechos.',
            'vimos': 'Indefinido: el hecho que cambia la situación: por fin saben qué pasa.',
            'llegué': 'Indefinido: un hecho de la historia. Aquí sirve de referencia para lo que pasó antes (ya había salido) o para cerrar (llegué a tiempo).',
            'ya había salido': 'Pluscuamperfecto con **ya**: el tren salió **antes** de la llegada de Clara. Por eso lo perdió.',
            'de repente': 'Marcador de **sorpresa**: anuncia un hecho inesperado, en indefinido.',
            'me di cuenta': 'Darse cuenta en indefinido (I realised). Va con **de que**: «me di cuenta de que…».',
            'había olvidado': 'Pluscuamperfecto: el olvido pasó antes, en casa; Clara lo descubre después, en la estación.',
            '¡Qué fuerte!': 'Reacción ante algo sorprendente o malo. Muy coloquial y muy frecuente en España; en América se oye menos.',
            'Entonces': 'Aquí **entonces** ordena: el hecho siguiente, la reacción de Clara (so / then).',
            'compré': 'Indefinido: un hecho que hace avanzar la historia.',
            'era': 'Imperfecto para algo previsto u organizado: «la ceremonia era a la una» (it was scheduled for one).',
            'estaban entrando': 'Estaba(n) + gerundio: la acción en curso justo cuando Clara entra en el jardín.',
            'en ese momento': 'Marca que dos cosas coinciden exactamente (at that very moment). Crea tensión.',
            'Total, que': '**Total, que** resume y salta al resultado (so, long story short). Muy coloquial; lleva coma después de «total».',
            'Menos mal que': '**Menos mal que** + indicativo: valora algo que salvó la situación (thank goodness).',
            'había guardado': 'Pluscuamperfecto: el hermano guardó el sitio **antes** de la llegada de Clara.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Por qué tuvo que bajar Clara a casa de su vecina?', options: ['Porque caía agua en el baño de la vecina.', 'Porque la vecina iba también a la boda.', 'Porque su vecina necesitaba un regalo.'], answer: 0, why: '«Le caía agua del techo del baño»: la lavadora de Clara perdía agua.', en: 'Why did Clara have to go down to her neighbour’s flat?' },
            { prompt: '¿Qué descubrió Clara en la estación?', options: ['Que había olvidado el regalo.', 'Que el tren llegaba tarde.', 'Que había perdido el billete.'], answer: 0, why: '«De repente me di cuenta de que había olvidado el regalo en casa».', en: 'What did Clara discover at the station?' },
            { prompt: '¿Cómo terminó la historia?', options: ['Clara volvió a Madrid.', 'Clara llegó justo a tiempo y tenía un sitio.', 'Clara llegó después de la ceremonia.'], answer: 1, why: '«Total, que llegué a tiempo. Menos mal que el hermano de Irene me había guardado un sitio».', en: 'How did the story end?' },
          ] },
        ] },
        { title: 'Las piezas de la historia · The pieces of the story', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'classify', title: '¿Qué hace cada expresión? · What does each expression do?', categories: [
            { id: 'abrir', label: 'ABRIR LA HISTORIA', tone: 'teal' },
            { id: 'sorpresa', label: 'SORPRESA O COINCIDENCIA', tone: 'orange' },
            { id: 'cerrar', label: 'CERRAR Y VALORAR', tone: 'violet' },
            { id: 'oyente', label: 'REACCIÓN DEL OYENTE', tone: 'neutral' },
          ], items: [
            { text: '¿A que no sabes qué me pasó?', answer: 'abrir', why: 'Anuncia una historia y despierta el interés.' },
            { text: 'Resulta que el sábado me levanté a las siete.', answer: 'abrir', why: '«Resulta que» presenta la situación de partida.' },
            { text: 'De repente me di cuenta de que había olvidado el regalo.', answer: 'sorpresa', why: '«De repente» introduce un hecho inesperado.' },
            { text: 'Los novios estaban entrando en ese momento.', answer: 'sorpresa', why: '«En ese momento» marca la coincidencia exacta.' },
            { text: 'Total, que llegué a tiempo.', answer: 'cerrar', why: '«Total, que» resume y da el resultado.' },
            { text: 'Menos mal que el hermano de Irene me había guardado un sitio.', answer: 'cerrar', why: '«Menos mal que» valora lo que salvó la situación.' },
            { text: '¡No me digas!', answer: 'oyente', why: 'Marcos muestra sorpresa.' },
            { text: '¿Y entonces?', answer: 'oyente', why: 'Marcos pide que Clara siga.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: «¿Y a ti, qué te pasó la última vez que viajaste?». Tu alumno empieza con «Resulta que…» y tú reaccionas con «¿Y entonces?» hasta el final de la historia.' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Escena, hechos, antes de antes y marcadores. Scene, events, earlier past and markers.',
      steps: [
        { title: 'El viaje de vuelta · The trip back', blocks: [
          { kind: 'choice', items: [
            { context: 'A la hora de comer, Clara cuenta la vuelta del domingo. (At lunch, Clara tells how Sunday’s trip back went.)', prompt: 'El domingo, mientras ___ un libro en el tren, un señor me tocó el hombro.', options: ['leí', 'había leído', 'leía'], answer: 2, why: 'Mientras + acción en curso, el fondo de otro hecho: imperfecto.', en: 'On Sunday, while I was reading a book on the train, a man tapped me on the shoulder.' },
            { context: 'Clara sigue. (Clara goes on.)', prompt: 'Me dijo que yo estaba en su asiento. ¡Y era verdad! Yo ___ mal el número del vagón.', options: ['estaba leyendo', 'leeré', 'había leído'], answer: 2, why: 'El error con el número pasó antes, al subir al tren: pluscuamperfecto.', en: 'He told me I was in his seat. And it was true! I had misread the carriage number.' },
            { context: 'Clara sigue. (Clara goes on.)', prompt: 'Busqué mi asiento por todo el tren durante veinte minutos. ___ lo encontré: estaba en el último vagón.', options: ['Mientras', 'Por fin', 'De repente'], answer: 1, why: 'Después de buscar mucho, algo deseado: por fin.', en: 'I looked for my seat all over the train for twenty minutes. At last I found it: it was in the last carriage.' },
            { context: 'Clara: «Y el señor del asiento era… ¡mi profesor de inglés del instituto!». (Clara: “And the man in the seat was… my English teacher from secondary school!”)', prompt: 'Marcos: «___»', options: ['¡Qué pena!', 'Al final.', '¡No me digas!'], answer: 2, why: 'Una coincidencia sorprendente: reacción de sorpresa.', en: 'Marcos reacts to the surprise.' },
            { context: 'Clara termina. (Clara finishes.)', prompt: 'Estuvimos hablando hasta Madrid. ___, que llegué a casa con el libro sin abrir.', options: ['Total', 'Entonces', 'Al principio'], answer: 0, why: '«Total, que» resume y da el resultado de la historia.', en: 'We talked all the way to Madrid. So, long story short, I got home without even opening the book.' },
          ] },
        ] },
        { title: 'La anécdota de Nuria · Nuria’s anecdote', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'classify', title: 'Nuria, la recepcionista, cuenta su verano en Oporto · Nuria, the receptionist, tells about her summer in Porto', categories: [
            { id: 'escena', label: 'ESCENA · imperfecto, estaba + gerundio', tone: 'blue' },
            { id: 'hecho', label: 'HECHO · indefinido', tone: 'orange' },
            { id: 'antes', label: 'ANTES DE ANTES · pluscuamperfecto', tone: 'violet' },
          ], items: [
            { text: '**Hacía** un calor horrible y no encontrábamos el hotel.', answer: 'escena', why: 'Describe cómo era el día: imperfecto.' },
            { text: 'Mi hermana y yo **estábamos mirando** el mapa en una esquina.', answer: 'escena', why: 'Una acción en curso, el fondo: estaba + gerundio.' },
            { text: 'De pronto, un chico nos **preguntó** si necesitábamos ayuda.', answer: 'hecho', why: 'Un hecho puntual introducido por «de pronto»: indefinido.' },
            { text: 'Nos **había visto** desde la terraza de un café.', answer: 'antes', why: 'Nos vio antes de acercarse: pluscuamperfecto.' },
            { text: 'Nos **llevó** hasta la puerta del hotel.', answer: 'hecho', why: 'Un hecho que hace avanzar la historia: indefinido.' },
            { text: '¡Y nosotras **habíamos pasado** por delante tres veces!', answer: 'antes', why: 'Pasaron por delante antes de ese momento: pluscuamperfecto.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Estuve duchándome cuando se fue la luz.', ok: false, options: ['Estuve duchándome cuando se iba la luz.', 'Me duché cuando se fue la luz.', 'Estaba duchándome cuando se fue la luz.'], answer: 2, why: 'La ducha es el fondo que el apagón interrumpe: estaba + gerundio.' },
            { sentence: 'Cuando llegamos a la fiesta, la tarta ya se acabó.', ok: false, options: ['Cuando llegamos a la fiesta, la tarta ya se había acabado.', 'Cuando llegábamos a la fiesta, la tarta ya se acabó.', 'Cuando llegamos a la fiesta, la tarta ya se acababa.'], answer: 0, why: 'La tarta se acabó antes de nuestra llegada: pluscuamperfecto.' },
            { sentence: 'Por fin nos quedamos sin cenar.', ok: false, options: ['Mientras nos quedamos sin cenar.', 'Al final nos quedamos sin cenar.', 'Al rato nos quedamos sin cenar.'], answer: 1, why: 'Quedarse sin cenar no es algo deseado: es el resultado. Al final.' },
            { sentence: 'Mientras esperábamos el autobús, empezó a nevar.', ok: true, why: 'Correcta: mientras + imperfecto (el fondo) y el hecho nuevo en indefinido.' },
            { sentence: 'En el aeropuerto me di cuenta que no llevaba el pasaporte.', ok: false, options: ['En el aeropuerto me di cuenta en que no llevaba el pasaporte.', 'En el aeropuerto me daba cuenta que no llevaba el pasaporte.', 'En el aeropuerto me di cuenta de que no llevaba el pasaporte.'], answer: 2, why: 'Darse cuenta de algo → me di cuenta de que.' },
          ] },
        ] },
        { title: 'Nuria cuenta, Clara escucha · Nuria tells, Clara listens', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'chat-fill', title: 'En la recepción, el martes · At reception, on Tuesday', lines: [
            { who: 'Nuria', text: '¿___ qué me pasó ayer en el metro?', options: ['Total', 'Resulta que', 'A que no sabes'], answer: 2, why: 'Fórmula de apertura en pregunta: «¿A que no sabes qué me pasó?».' },
            { who: 'Clara', text: 'No, ¿qué te pasó?' },
            { who: 'Nuria', text: '___ que iba muy cansada y me quedé dormida.', options: ['Al final', 'Resulta', 'Menos mal'], answer: 1, why: '«Resulta que» presenta la situación de partida de la historia.' },
            { who: 'Clara', text: '___', options: ['¿Y entonces?', '¡Menos mal!', 'Por fin.'], answer: 0, why: 'La historia acaba de empezar: Clara pide que siga.' },
            { who: 'Nuria', text: 'Cuando me desperté, el metro ya ___ por mi parada… cuatro estaciones antes.', options: ['pasaba', 'había pasado', 'pasó'], answer: 1, why: 'Pasó por la parada antes de despertarse Nuria: pluscuamperfecto.' },
            { who: 'Nuria', text: 'Y de repente vi a mi jefa sentada enfrente, sonriendo. ¡Me había visto dormida todo el viaje!' },
            { who: 'Clara', text: '___ ¿Y qué le dijiste?', options: ['Al rato.', '¡Qué suerte!', '¡Qué fuerte!'], answer: 2, why: 'Una situación sorprendente y un poco incómoda: «¡Qué fuerte!» (coloquial, frecuente en España).' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/autoestudio/mascot/noting.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['Cuando', 'llegué', 'al', 'cine,', 'la', 'película', 'ya', 'había', 'empezado'], accept: ['Cuando llegué al cine, la película ya había empezado', 'Cuando llegué al cine, ya había empezado la película'], en: 'When I got to the cinema, the film had already started.' },
            { tiles: ['Mientras', 'buscábamos', 'el', 'hotel,', 'empezó', 'a', 'llover'], accept: ['Mientras buscábamos el hotel, empezó a llover'], en: 'While we were looking for the hotel, it started to rain.' },
            { tiles: ['Total,', 'que', 'al', 'final', 'no', 'dormimos', 'nada'], accept: ['Total, que al final no dormimos nada'], en: 'So, long story short, in the end we didn’t sleep at all.' },
            { tiles: ['Menos', 'mal', 'que', 'Nuria', 'tenía', 'un', 'paraguas'], accept: ['Menos mal que Nuria tenía un paraguas'], en: 'Thank goodness Nuria had an umbrella.' },
          ] },
        ] },
        { title: 'Une las frases en un relato · Join the sentences into a story', mascot: '/brand/mascot/pointing.webp', blocks: [
          { kind: 'rewrite', title: 'De dos frases a una historia · From two sentences to a story', items: [
            { prompt: 'Yo leía en el tren. Un señor me habló.', instruction: 'Une las dos frases con «mientras». (Join them with “mientras”.)', accept: ['Mientras leía en el tren, un señor me habló', 'Un señor me habló mientras leía en el tren', 'Mientras yo leía en el tren, un señor me habló', 'Un señor me habló mientras yo leía en el tren'] },
            { prompt: 'Primero empezó el concierto. Después llegamos nosotros.', instruction: 'Empieza con «Cuando llegamos,» y usa «ya» + pluscuamperfecto. (Start with “Cuando llegamos,”.)', accept: ['Cuando llegamos, el concierto ya había empezado', 'Cuando llegamos, ya había empezado el concierto', 'Cuando llegamos, el concierto había empezado ya'] },
            { prompt: 'Estaba cocinando. Sonó el teléfono.', instruction: 'Une las dos frases con «cuando». (Join them with “cuando”.)', accept: ['Estaba cocinando cuando sonó el teléfono', 'Yo estaba cocinando cuando sonó el teléfono'] },
            { prompt: 'Perdimos el último autobús y no había taxis. Volvimos a pie.', instruction: 'Escribe solo el resultado con «Total, que…». (Write only the result, starting with “Total, que…”.)', accept: ['Total, que volvimos a pie', 'Total, que al final volvimos a pie'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno cuenta la anécdota de Nuria en el metro con sus palabras, en tercera persona («Resulta que Nuria…»), y tú reaccionas dos veces.' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'La versión de Irene', coach: 'Primero escucha sin leer. Listen first, read later.',
      steps: [
        { title: 'Un mensaje de voz de Irene · A voice message from Irene', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general. Segunda escucha: tu alumno anota los marcadores que oye (resulta que, al rato, de repente…). Después, las preguntas.', self: 'Escucha una vez para la idea general. En la segunda escucha, anota los marcadores que oyes. (Listen once for the gist; the second time, note the markers you hear.)' } },
          { kind: 'listen', title: 'Un mensaje de voz de Irene', channel: 'MENSAJE DE VOZ · DE IRENE PARA CLARA', src: '/audio/grammar-live/425.mp3',
            before: 'Es domingo. Irene, la novia, le manda a Clara un mensaje de voz. Mientras esperaban a Clara, también pasó algo en casa de Irene. ¿Qué crees que pasó? (Irene, the bride, sends Clara a voice message. Something also happened at Irene’s house while they were waiting for Clara. What do you think it was?)',
            gist: { prompt: '¿Cuál es la idea general? · What is the main idea?', options: ['Irene cuenta un problema con las flores de la boda que al final se resolvió.', 'Irene cuenta que la ceremonia empezó una hora tarde.', 'Irene está enfadada porque Clara llegó tarde.'], answer: 0, why: '«La florista todavía no había traído las flores…» y al final hicieron los ramos con las rosas de la abuela.', en: 'What is the main idea?' },
            details: [
              { prompt: '¿Qué hacía Irene cuando empezó el problema?', options: ['Estaba peinándose.', 'Estaba escribiendo a Clara.', 'Estaba en el jardín.'], answer: 0, why: '«Yo estaba peinándome y mi madre estaba llamándola sin parar».', en: 'What was Irene doing when the problem started?' },
              { prompt: '¿Quién resolvió el problema?', options: ['La madre de Irene.', 'La florista.', 'La abuela de Irene.'], answer: 2, why: '«De repente apareció mi abuela Rosario con un cubo lleno de rosas de su jardín».', en: 'Who solved the problem?' },
              { prompt: '¿Por qué no llegó la florista?', options: ['Porque estaba enferma.', 'Porque se había olvidado de la boda.', 'Porque había tenido un problema con la furgoneta.'], answer: 2, why: '«La florista había tenido un problema con la furgoneta».', en: 'Why didn’t the florist arrive?' },
              { prompt: '¿Qué pasó mientras hacían los ramos?', options: ['Empezó a llover.', 'Llegó el mensaje de Clara.', 'Llegó la florista.'], answer: 1, why: '«Y justo en ese momento llegó tu mensaje».', en: 'What happened while they were making the bouquets?' },
            ],
            transcript: 'Hola, Clara, soy Irene. ¡Muchísimas gracias por venir! Oye, ¿a que no sabes qué pasó mientras te esperábamos? [[Resulta que|teal]] a las doce la florista todavía [[no había traído|violet]] las flores. Yo [[estaba peinándome|blue]] y mi madre [[estaba llamándola|blue]] sin parar, pero no contestaba. [[Al principio|teal]] todos estábamos tranquilos, pero [[al rato|teal]] mi madre empezó a llorar. Entonces, [[de repente|teal]], [[apareció|orange]] mi abuela Rosario con un cubo lleno de rosas de su jardín. Ella ya sabía que la florista [[había tenido|violet]] un problema con la furgoneta, porque se lo había dicho una vecina. [[Total, que|teal]] [[hicimos|orange]] los ramos en la cocina en veinte minutos. Y justo en ese momento llegó tu mensaje: «Voy en el tren siguiente, ¡pero llego!». ¡Qué día! [[Menos mal que|teal]] al final todo salió bien. Bueno, el regalo me lo das cuando quieras. ¡Un beso enorme!',
            reply: { teacher: 'Tú eres Irene. Tu alumno es Clara y responde al mensaje en voz alta: reacciona a la historia de las flores («¡No me digas!», «¡Qué barbaridad!») y cuenta en tres frases su propia mañana con un marcador de apertura y uno de cierre.', self: 'Responde a Irene en voz alta como Clara: reacciona a su historia y cuenta tu mañana en tres frases, con «Resulta que…» y «Total, que…». (Reply as Clara: react and tell your morning in three sentences.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Tus anécdotas', coach: 'Cuenta y reacciona. Tell and react.',
      steps: [
        { title: 'Historias de verdad · Real stories', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces la pregunta y tu alumno cuenta una anécdota real o inventada. Tú reaccionas («¿Y entonces?», «¡No me digas!») y repites su frase con la forma correcta cuando hace falta. En la quinta tarjeta, tú cuentas y tu alumno reacciona.', self: 'Piensa en una anécdota real o inventada para cada pregunta y cuéntala en voz alta, con las cinco partes: abrir, escena, hechos, sorpresa, cierre. (Tell each anecdote aloud with the five parts.)' } },
          { kind: 'talk', cards: [
            { q: '¿Qué te pasó la última vez que llegaste tarde a algo importante? · What happened the last time you were late for something important?', followUps: ['¿Qué estabas haciendo cuando te diste cuenta? (What were you doing when you realised?)', '¿Cómo terminó? (How did it end?)'], phrases: ['[[¿A que no sabes qué me pasó?|teal]]', '[[Estaba|blue]] … cuando [[sonó|orange]] / [[vi|orange]]…', 'Cuando llegué, ya [[había empezado|violet]]…'], hint: 'Abre con una fórmula, pinta la escena con estaba + gerundio y usa el pluscuamperfecto para lo que ya había pasado.', example: '¿A que no sabes qué me pasó en mi primera entrevista de trabajo? Estaba esperando el autobús cuando me di cuenta de que había olvidado el currículum. Volví a casa corriendo y, cuando llegué a la oficina, la entrevista ya había empezado. Total, que me hicieron esperar una hora… ¡pero me contrataron!', next: 'Ahora, un viaje que no salió como pensabas.', teacher: 'Si tu alumno solo usa indefinido, tú preguntas: «¿Y qué estabas haciendo en ese momento? ¿Qué había pasado antes?».' },
            { q: 'Cuenta un viaje que no salió como pensabas. · Tell about a trip that didn’t go as planned.', followUps: ['¿Dónde estabas y cómo era el lugar? (Where were you and what was it like?)', '¿Qué pasó de repente? (What happened suddenly?)', '¿Qué aprendiste? (What did you learn?)'], phrases: ['[[Una vez|teal]], en un viaje a…', '[[Al principio|teal]] todo [[iba|blue]] bien, pero…', '[[De repente|teal]] / [[De pronto|teal]]…'], hint: 'Usa «al principio» para la parte tranquila y «de repente» para el cambio.', example: 'Una vez, en un viaje a Cartagena, alquilamos una casa cerca de la playa. Al principio todo iba bien, pero la segunda noche, de repente, se fue la luz en todo el barrio. Estuvimos sin luz dos días. Al final nos acostumbramos y cenábamos con velas en la terraza.', next: 'Ahora, una sorpresa o una coincidencia.' },
            { q: '¿Alguna vez te encontraste con alguien en un lugar inesperado? · Did you ever run into someone in an unexpected place?', followUps: ['¿Qué estabas haciendo? (What were you doing?)', '¿Qué se dijeron? (What did you say to each other?)'], phrases: ['[[Estaba|blue]] en… cuando [[en ese momento|teal]]…', '[[Justo cuando|teal]] [[salía|blue]], [[vi|orange]] a…', 'No lo [[había visto|violet]] desde hacía años…'], hint: '«Justo cuando» y «en ese momento» marcan la coincidencia exacta.', example: 'Estaba haciendo cola en un museo de Lisboa cuando, justo en ese momento, oí mi nombre. ¡Era mi compañera de piso de la universidad! No la había visto desde hacía diez años. Al final pasamos toda la tarde juntas.', next: 'Ahora, un día en que todo salió mal… pero no tanto.' },
            { q: 'Cuenta un día en que todo salió mal, pero algo te salvó. · Tell about a day when everything went wrong, but something saved you.', followUps: ['¿Qué fue lo peor? (What was the worst part?)', '¿Quién te ayudó? (Who helped you?)'], phrases: ['[[Resulta que|teal]]…', '[[Al rato|teal]] / [[Entonces|teal]]…', '[[Menos mal que|teal]]… / [[Total, que|teal]]…'], hint: 'Cierra con «menos mal que» + indicativo para lo que te salvó.', example: 'Resulta que el día de mi examen de conducir se me rompió el despertador. Me desperté a las ocho y media y el examen era a las nueve. Entonces llamé a mi hermano y me llevó en moto. Total, que llegué con el casco todavía en la mano. Menos mal que el examinador también llegó tarde.', next: 'Ahora te toca escuchar a ti.' },
            { q: 'Ahora tú escuchas: reacciona a la historia. · Now you listen: react to the story.', followUps: ['¿Qué reacción usas para pedir más? (Which reaction asks for more?)', '¿Y para una buena noticia? (And for good news?)'], phrases: ['[[¡No me digas!|teal]] · ¿En serio?', '[[¿Y entonces?|teal]] · ¿Y qué hiciste?', '¡Qué mala suerte! · [[¡Menos mal!|teal]]'], hint: 'Reacciona cada dos o tres frases. Al final, haz una pregunta sobre un detalle.', example: '—Ayer, en el supermercado, una señora se llevó mi carrito por error. —¡No me digas! ¿Y entonces? —Fui detrás de ella y se lo expliqué. —¿Y qué hizo? —Se rio muchísimo y me invitó a un café. —¡Menos mal!', next: 'Por último, una historia de otra persona.', teacher: 'Tú cuentas una anécdota corta (real o inventada) en cinco o seis frases, con pausas. Tu alumno reacciona en cada pausa con una expresión diferente.' },
            { q: 'Cuenta una anécdota que te contó otra persona. · Tell an anecdote someone else told you.', followUps: ['¿Quién te la contó? (Who told you?)', '¿Qué te dijo exactamente? (What exactly did they say?)'], phrases: ['Un amigo me contó que una vez…', 'Me [[dijo|orange]] que [[había perdido|violet]]…', '[[Total, que|teal]]…'], hint: 'Con «me dijo que…» los pasados se mantienen: «había perdido», «estaba esperando» (clase 118).', example: 'Mi prima me contó que una vez, en Ciudad de México, se subió a un taxi y le dio al taxista la dirección de su antigua casa. Estaba muy cansada y no se dio cuenta. Cuando llegó, me dijo que la nueva dueña estaba regando las plantas en la puerta. Total, que acabaron tomando un café juntas.', teacher: 'Si tu alumno mezcla las personas, tú preguntas: «¿Esto te pasó a ti o a tu prima?».' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno hace las preguntas y reacciona, y tú cuentas una anécdota con un error de tiempo («cuando llegué, el tren ya salió»). Tu alumno lo encuentra.', self: 'Ahora graba una de tus anécdotas en el móvil y escúchala: ¿hay una fórmula de apertura, una sorpresa y un cierre? (Record one of your anecdotes and check it has an opening, a twist and an ending.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Tu anécdota por escrito', coach: 'Cuéntalo como se lo contarías a un amigo. Tell it the way you would tell a friend.',
      steps: [
        { title: 'Un mensaje con tu anécdota · A message with your anecdote', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Después, tu alumno lee su mensaje en voz alta y tú reaccionas como si lo escucharas por primera vez.', self: 'Escribe tu mensaje y toca «Revisar mi texto». Después, léelo en voz alta: ¿se entiende el orden de los hechos? (Read it aloud: is the order of events clear?)' } },
          { kind: 'write', title: 'Cuéntaselo a un amigo · Tell a friend', situation: 'Un amigo te escribe: «¿Qué tal el fin de semana? ¡Cuéntame algo!». Contéstale con una anécdota real o inventada: algo que te pasó y que tuvo una sorpresa. (A friend writes: “How was your weekend? Tell me something!” Answer with a real or invented anecdote that had a twist.)', task: [
            'Abre con una fórmula: «¿A que no sabes qué me pasó…?», «Resulta que…» o «Una vez…». (Open with a formula.)',
            'Pinta la escena con el imperfecto o con estaba + gerundio. (Set the scene.)',
            'Usa un marcador de sorpresa (de repente, de pronto, en ese momento) y un hecho anterior en pluscuamperfecto. (Add a twist and an earlier past.)',
            'Cierra con «al final», «total, que…» o «menos mal que…». (Close the story.)',
          ], starters: ['¡Hola, …!', '¿A que no sabes qué me pasó el sábado?', 'Resulta que…', 'Estaba … cuando…', 'De repente…', 'Cuando llegué, ya había…', 'Total, que…', 'Menos mal que…', '¿Y tú, qué tal?'],
            words: ['resulta que', 'al principio', 'al rato', 'entonces', 'de repente', 'de pronto', 'en ese momento', 'mientras', 'estaba + gerundio', 'había + participio', 'me di cuenta de que', 'al final', 'por fin', 'total, que', 'menos mal que'],
            model: '¡Hola, Lucía! [[¿Sabes qué me pasó el viernes?|teal]] Fui a un concierto de jazz con unos amigos. [[Mientras|teal]] [[esperábamos|blue]] en la cola, empezó a llover, pero [[al principio|teal]] no nos importó. [[Al rato|teal]] abrieron las puertas y, cuando fui a enseñar la entrada, ¡no tenía el móvil! Lo [[había dejado|violet]] en el bar donde [[habíamos cenado|violet]]. [[Entonces|teal]] volví corriendo. Cuando llegué, [[estaban cerrando|blue]], pero [[de repente|teal]] el camarero me [[vio|orange]] y me dijo: «¿Buscas esto?». ¡Qué alivio! [[Total, que|teal]] me perdí las dos primeras canciones. [[Menos mal que|teal]] el resto del concierto fue increíble. ¿Y tú, qué tal el fin de semana? Un abrazo, Marcos',
            minWords: 90,
            checks: [
              { label: 'Una fórmula de apertura: resulta que, ¿sabes qué…?, una vez (an opening formula)', pattern: '(?<!\\p{L})(?:resulta\\s+que|sabes\\s+qu[eé]|una\\s+vez|te\\s+cuento)(?!\\p{L})', tip: 'Empieza con «¿A que no sabes qué me pasó…?» o «Resulta que…».' },
              { label: 'La escena en imperfecto o estaba + gerundio (the scene)', pattern: '(?<!\\p{L})(?:estaba|estábamos|estabamos|estaban|era|había|habia|hacía|hacia|tenía|tenia|\\p{L}{2,}(?:aba|ábamos|abamos|aban|íamos|iamos|ían|ian))(?!\\p{L})', tip: 'Describe dónde estabas o qué hacías: «Estaba esperando…», «Hacía frío».' },
              { label: 'Un hecho anterior: había + participio (an earlier past)', pattern: '(?<!\\p{L})(?:había|habia|habías|habias|habíamos|habiamos|habían|habian)\\s+\\p{L}+(?:ado|ido|to|cho|sto)(?!\\p{L})', tip: 'Vuelve atrás con el pluscuamperfecto: «Lo había dejado en el bar».' },
              { label: 'Un marcador de sorpresa: de repente, de pronto, en ese momento (a twist)', pattern: '(?<!\\p{L})(?:de\\s+repente|de\\s+pronto|en\\s+ese\\s+momento|justo\\s+cuando)(?!\\p{L})', tip: 'Anuncia el hecho inesperado: «De repente…».' },
              { label: 'Un cierre: al final, total, que…, menos mal que (an ending)', pattern: '(?<!\\p{L})(?:al\\s+final|total,?\\s+que|menos\\s+mal\\s+que|por\\s+fin)(?!\\p{L})', tip: 'Termina la historia: «Total, que…», «Menos mal que…».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})en\\s+el\\s+final(?!\\p{L})', why: 'Para el resultado de una historia: **al final**, no «en el final».' },
              { pattern: '(?<!\\p{L})(?:di|dio|diste|dimos|dieron)\\s+cuenta\\s+que(?!\\p{L})', why: 'Darse cuenta **de que**: «me di cuenta de que…».' },
              { pattern: '(?<!\\p{L})(?:estuve|estuvimos|estuvo)\\s+\\p{L}+(?:ando|iendo)\\s+cuando(?!\\p{L})', why: 'Para la acción que otro hecho interrumpe: **estaba** + gerundio + cuando…' },
            ] },
        ] },
      ],
    },
    {
      id: 'cerrar', label: 'Cerrar', icon: '✓', mascot: '/brand/mascot/standing.webp',
      title: 'Lo esencial de la anécdota', coach: '¿Qué te llevas hoy? What do you take with you?',
      steps: [
        { title: 'Lo esencial · The essentials', blocks: [
          { kind: 'recap', items: [
            { tone: 'blue', label: 'ESCENA', formula: 'imperfecto · estaba + gerundio · mientras + imperfecto', example: 'Estaba desayunando cuando sonó el timbre.', caption: 'el fondo: cómo era, qué estaba pasando', en: 'the background: what it was like, what was going on' },
            { tone: 'orange', label: 'HECHOS', formula: 'indefinido · estuve + gerundio (período cerrado)', example: 'Compré otro billete. Estuve esperando una hora.', caption: 'lo que pasó y hace avanzar la historia', en: 'what happened and moves the story on' },
            { tone: 'violet', label: 'ANTES DE ANTES', formula: 'había + participio · ya había…', example: 'Cuando llegué, el tren ya había salido.', caption: 'un hecho anterior a otro pasado', en: 'something that happened before another past event' },
            { tone: 'teal', label: 'MARCADORES Y REACCIONES', formula: 'resulta que · al rato · de repente · total, que · menos mal que · ¡no me digas! · ¿y entonces?', example: '—Resulta que perdí el tren. —¡No me digas! ¿Y entonces?', caption: 'abrir, ordenar, sorprender, cerrar y escuchar', en: 'open, order, surprise, close and listen' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Una buena anécdota tiene cinco partes: **abre** («Resulta que…»), pinta la **escena** (imperfecto, estaba + gerundio), cuenta los **hechos** (indefinido), crea **sorpresa** («de repente», pluscuamperfecto para lo que ya había pasado) y **cierra** («total, que…», «menos mal que…»). Y quien escucha, reacciona.', en: 'A good anecdote has five parts: open it, set the scene, tell the events, create a twist (using the pluperfect for what had already happened) and close it. And the listener reacts.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'Nuria ___ la cena cuando llamó su hermana desde Oporto.', options: ['estaba preparando', 'estuvo preparando', 'había preparado'], answer: 0, why: 'La acción en curso que la llamada interrumpe: estaba + gerundio.', en: 'Nuria was making dinner when her sister called from Porto.' },
            { prompt: 'Cuando Marcos llegó al bar, sus amigos ya ___.', options: ['se iban', 'se habían ido', 'se fueron'], answer: 1, why: 'Se fueron antes de la llegada de Marcos: pluscuamperfecto.', en: 'When Marcos got to the bar, his friends had already left.' },
            { prompt: 'Estábamos cenando en la terraza y, ___, empezó a granizar.', options: ['de pronto', 'por fin', 'total, que'], answer: 0, why: 'Un hecho inesperado que rompe la escena: de pronto.', en: 'We were having dinner on the terrace and suddenly it started to hail.' },
            { prompt: '—Al final, el revisor me dejó subir sin billete. —«___»', options: ['¡Menos mal!', '¿Y entonces?', '¡Qué mala suerte!'], answer: 0, why: 'Es el final y es una buena noticia: alivio.', en: '“In the end, the ticket inspector let me get on without a ticket.”' },
            { prompt: 'Perdimos el ferry y no había hoteles libres. ___ dormimos en el coche.', options: ['Total, que', 'Por fin', 'Mientras'], answer: 0, why: '«Total, que» resume la situación y da el resultado.', en: 'We missed the ferry and there were no hotels with free rooms. So, long story short, we slept in the car.' },
          ] },
          { kind: 'review' },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Ahora, la anécdota de Marcos. Now, Marcos’s anecdote.', blocks: [
          { kind: 'lead', text: 'El viernes, Marcos fue a una entrevista para un proyecto de traducción. Cuenta su historia transformando cada frase.', en: 'On Friday, Marcos went to an interview for a translation project. Tell his story by transforming each sentence.' },
          { kind: 'rewrite', title: 'La entrevista de Marcos · Marcos’s interview', items: [
            { prompt: 'Marcos esperaba el ascensor. Se abrió la puerta.', instruction: 'Une con «cuando» y estaba + gerundio. (Join with “cuando”, using estaba + gerund.)', accept: ['Marcos estaba esperando el ascensor cuando se abrió la puerta', 'Marcos estaba esperando el ascensor cuando la puerta se abrió'] },
            { prompt: 'Primero la entrevistadora leyó su currículum. Después entró Marcos.', instruction: 'Empieza con «Cuando Marcos entró,». (Start with “Cuando Marcos entró,”.)', accept: ['Cuando Marcos entró, la entrevistadora ya había leído su currículum', 'Cuando Marcos entró, la entrevistadora había leído ya su currículum', 'Cuando Marcos entró, la entrevistadora había leído su currículum', 'Cuando Marcos entró, ya había leído su currículum la entrevistadora'] },
            { prompt: 'La entrevistadora era su vecina del quinto. (Marcos se sorprendió.)', instruction: 'Empieza con «De repente, Marcos se dio cuenta de que…». (Start with “De repente, Marcos se dio cuenta de que…”.)', accept: ['De repente, Marcos se dio cuenta de que la entrevistadora era su vecina del quinto'] },
          ] },
        ] },
        { title: 'Ampliación: el presente narrativo · Extension: the narrative present', mascot: '/brand/mascot/portrait.webp', coach: 'Contar como si pasara ahora. Telling it as if it were happening now.', blocks: [
          { kind: 'tip', icon: '💡', title: 'Un recurso del relato oral · A device of oral storytelling', text: 'En las anécdotas orales es muy frecuente pasar al **presente** en el momento más emocionante, para que el oyente lo «vea»: «Estaba desayunando tranquilamente y, de repente, **suena** el timbre. **Abro** la puerta y **es** mi vecina…». La escena puede empezar en pasado; el presente da intensidad a los hechos. Úsalo con amigos; en un texto escrito formal, mejor el pasado.', en: 'In spoken anecdotes, people very often switch to the present at the most exciting moment so the listener can “see” it: “… and suddenly the doorbell rings. I open the door and it’s my neighbour…”. It adds intensity; in formal writing, keep to the past.' },
          { kind: 'rewrite', title: 'Pásalo al presente narrativo · Switch to the narrative present', items: [
            { prompt: 'De repente sonó el timbre.', instruction: 'Cambia el verbo al presente. (Change the verb to the present.)', accept: ['De repente suena el timbre'] },
            { prompt: 'Abrí la puerta y era mi vecina.', instruction: 'Cambia los dos verbos al presente. (Change both verbs to the present.)', accept: ['Abro la puerta y es mi vecina'] },
            { prompt: 'Llegué a la estación y el tren ya había salido.', instruction: 'Pasa «llegué» al presente y el pluscuamperfecto al perfecto: «ha salido». (llegué → present; había salido → ha salido.)', accept: ['Llego a la estación y el tren ya ha salido'] },
          ] },
          { kind: 'teacher', text: 'Paso opcional: para estudiantes rápidos o si hay tiempo extra. Si hay tiempo, tu alumno vuelve a contar la anécdota de Clara y pasa al presente en el momento del timbre y en el de la estación.' },
        ] },
        { title: 'El siguiente paso · The next step', blocks: [
          { kind: 'link', title: 'Siguiente: Clase 126 · Comparar hipótesis y posibilidades', text: 'Ya cuentas una anécdota completa: abres, pintas la escena, ordenas los hechos, creas sorpresa, cierras y reaccionas cuando te cuentan una. En la clase 126 pasas de lo que **pasó** a lo que **puede pasar**: comparar hipótesis y posibilidades con puede que, quizás y a lo mejor. Es el paso natural: después de contar los hechos, aprendes a imaginar explicaciones posibles.', en: 'You can now tell a complete anecdote: open it, set the scene, order the events, create a twist, close it and react when someone tells you one. In class 126 you move from what happened to what may happen: comparing hypotheses with puede que, quizás and a lo mejor. It is the natural next step: after telling the facts, you learn to imagine possible explanations.', href: '/gramatica/comparar-hipotesis-y-posibilidades', label: 'Ir a la clase 126' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Qué te pasó el fin de semana?». Respuesta esperada: una anécdota corta con apertura, escena, sorpresa y cierre; tú reaccionas al menos dos veces. Tarea: escribir el mensaje de Escribir con una anécdota real.' },
        ] },
      ],
    },
  ],
};
