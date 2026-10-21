import type { LiveLesson } from '../types';

/**
 * Lesson 435 · B2 · Condicionales mixtas: pasado y consecuencia presente (course unit G135).
 * Builds on G131 (si + imperfecto de subjuntivo → condicional, lesson 219), G132 (lesson 23,
 * which only previews the past → present type), G133 (pluscuamperfecto de subjuntivo, 151)
 * and G134 (condicional compuesto, reproaches, 152).
 * One scene runs through the class: fifteen years after graduating, Irene Salas (architect)
 * hosts the reunion of her Architecture class in Bogotá. Daniel Ortega, now a journalist and
 * famously scatterbrained, missed his morning flight from Cartagena; Lucía Méndez left the
 * degree and runs a bakery; Felipe Rojas lives in Montreal and sends a voice note
 * (es-CO-GonzaloNeural, ustedes). Rosa Medina and Julián Paz appear in Practicar.
 * Content: mixed type 1, si + pluscuamperfecto de subjuntivo → condicional simple (a past fact
 * changes the present: Si no hubiera aceptado aquel trabajo, hoy estaría aquí); mixed type 2,
 * si + imperfecto de subjuntivo for a stable trait or current situation → condicional compuesto
 * (Si fuera más organizado, no habría perdido el vuelo); contrast with the pure present and pure
 * past hypotheses; de + infinitivo compuesto (De haberlo sabido…) for recognition and light
 * practice; registers in the main clause: habría (general), hubiera (standard, accepted by the
 * RAE), imperfecto de indicativo «no venía» (colloquial, described by the NGLE), «Si lo sé,
 * no vengo» as a set phrase; -se form avoided in the main clause. Regrets and gentle reproaches.
 */
export const lesson: LiveLesson = {
  id: 435,
  level: 'B2',
  title: 'Condicionales mixtas: pasado y consecuencia presente',
  subtitle: 'Explicar cómo sería tu vida hoy con otra decisión pasada y cómo un rasgo tuyo cambió lo que pasó, también con reproches y lamentos.',
  legend: [
    { tone: 'violet', label: 'CONDICIÓN PASADA · si hubiera aceptado / de haber aceptado' },
    { tone: 'blue', label: 'CONDICIÓN PRESENTE O PERMANENTE · si fuera, si viviera, si supiera' },
    { tone: 'teal', label: 'RESULTADO AHORA · condicional simple: sería, viviría, tendría' },
    { tone: 'orange', label: 'RESULTADO ENTONCES · condicional compuesto: habría perdido (o hubiera perdido)' },
  ],
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Una condición en un tiempo, un resultado en otro', coach: '¿Cuándo es la condición? ¿Cuándo el resultado? When is the condition, when the result?',
      steps: [
        { title: 'Quince años después · Fifteen years later', blocks: [
          { kind: 'lead', text: 'Irene Salas es arquitecta y esta noche organiza en Bogotá la reunión de su promoción de Arquitectura, quince años después de graduarse. Daniel Ortega llega tarde: perdió el vuelo de Cartagena. Felipe Rojas no viene: vive en Montreal desde hace diez años. Todos hablan de decisiones pasadas y de cómo sería su vida hoy. Ya conoces la hipótesis sobre el presente (**si fuera…, sería…**) y sobre el pasado (**si hubiera…, habría…**). Hoy las mezclas: la condición en un tiempo y el resultado en otro.', en: 'Irene Salas, an architect, is hosting her Architecture class reunion in Bogotá tonight, fifteen years after graduation. Daniel arrives late because he missed his flight; Felipe lives in Montreal and cannot come. Everyone talks about past choices and how life would look today. You already know present and past hypotheses; today you mix them: the condition in one time frame, the result in another.' },
          { kind: 'guide', text: { teacher: 'Tú lees las tres frases y tu alumno dice, para cada una, si la condición es de ahora o del pasado, y si el resultado es de ahora o del pasado.', self: 'Lee las tres frases en voz alta. Para cada una: ¿la condición es de ahora o del pasado? ¿Y el resultado? (For each sentence: is the condition about now or the past? And the result?)' } },
          { kind: 'compare', title: 'Dos hipótesis puras y una mixta · Two pure hypotheses and a mixed one', columns: [
            { tone: 'blue', label: 'AHORA → AHORA', sentence: 'Si Felipe [[viviera|blue]] en Bogotá, [[estaría|teal]] en la fiesta.', idea: 'Felipe vive en Montreal hoy; el resultado imaginado también es de hoy (clase 131).', en: 'A present hypothesis: he lives abroad now, so he isn’t at the party now.' },
            { tone: 'orange', label: 'PASADO → PASADO', sentence: 'Si Daniel [[hubiera revisado|violet]] la mochila, [[habría tomado|orange]] el vuelo de las siete.', idea: 'Todo pasó esta mañana y ya no tiene remedio (clases 132–134).', en: 'A past hypothesis: both the condition and the result belong to this morning.' },
            { tone: 'violet', label: 'PASADO → AHORA', sentence: 'Si Felipe no [[hubiera aceptado|violet]] aquel trabajo, hoy [[estaría|teal]] en la fiesta.', idea: 'La decisión es de hace diez años; la consecuencia se ve esta noche. Es una condicional mixta.', en: 'A mixed conditional: a decision taken ten years ago, a consequence visible tonight.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Si Irene ___ más tiempo libre ahora, volvería a tocar el piano.', options: ['tendría', 'tuviera', 'hubiera tenido'], answer: 1, why: 'Condición actual («ahora») y resultado actual: si + imperfecto de subjuntivo → condicional simple. Tras «si» no va el condicional.', en: 'If Irene had more free time now, she would play the piano again.' },
            { prompt: 'Si Daniel ___ la mochila la noche anterior, no habría tenido que volver a casa por la cédula.', options: ['revisaría', 'hubiera revisado', 'revisara'], answer: 1, why: 'Condición pasada (la noche anterior) y resultado pasado (habría tenido): si + pluscuamperfecto de subjuntivo.', en: 'If Daniel had checked his bag the night before, he wouldn’t have had to go back home for his ID card.' },
          ] },
        ] },
        { title: 'Una decisión pasada, una vida presente · A past choice, a present life', mascot: '/brand/mascot/studying.webp', coach: 'Lo que pasó cambia el ahora. What happened shapes now.', blocks: [
          { kind: 'concept', tone: 'violet', label: 'MIXTA 1 · PASADO → AHORA', question: '¿Algo que pasó (o que no pasó) explica cómo son las cosas hoy?', en: 'Use this when you imagine a different past and describe the present it would have produced: the if-clause looks back, the result clause describes today.', formula: ['si + pluscuamperfecto de subjuntivo (hubiera / hubiese + participio)', '→ condicional simple (sería, viviría, tendría)'],
            meaning: 'La condición es un **hecho pasado** imaginado al revés; el resultado es una situación **actual** que sería distinta. Suelen aparecer marcadores de presente: **ahora, hoy, todavía, ya no**.',
            examples: [
              { es: 'Si Felipe no [[hubiera aceptado|violet]] aquel trabajo, ahora [[viviría|teal]] en Bogotá.', en: 'If Felipe hadn’t taken that job, he would be living in Bogotá now.' },
              { es: 'Si Lucía no [[hubiera dejado|violet]] la carrera, hoy [[sería|teal]] arquitecta como nosotros.', en: 'If Lucía hadn’t dropped out, she would be an architect like us today.' },
              { es: 'Si [[hubiéramos reservado|violet]] el salón grande, ahora no [[estaríamos|teal]] tan apretados.', en: 'If we had booked the big room, we wouldn’t be so cramped now.' },
              { es: 'Si me [[hubieras hecho|violet]] caso, ya [[estarías|teal]] descansando en el hotel.', en: 'If you had listened to me, you’d already be resting at the hotel: a reproach.' },
            ],
            note: 'El orden puede cambiar, y entonces no hace falta coma: «Ahora viviría en Bogotá si no hubiera aceptado aquel trabajo». En la condición, **hubiera** y **hubiese** son equivalentes.' },
          { kind: 'table', title: 'Del hecho real a la hipótesis · From the real fact to the hypothesis', head: ['Lo que pasó', 'Cómo es hoy', 'La hipótesis mixta'], rows: [
            ['Felipe aceptó el trabajo en Montreal.', 'Vive en Canadá.', 'Si no **hubiera aceptado** el trabajo, **viviría** en Bogotá.'],
            ['Lucía dejó Arquitectura en tercero.', 'Tiene una pastelería.', 'Si no **hubiera dejado** la carrera, **sería** arquitecta.'],
            ['Irene dejó el conservatorio.', 'No toca en público.', 'Si **hubiera seguido** en el conservatorio, quizá **daría** conciertos.'],
            ['Daniel perdió el vuelo.', 'Está agotado.', 'Si no **hubiera perdido** el vuelo, no **estaría** agotado.'],
          ], note: 'Fíjate en la polaridad: lo que **pasó** se niega en la hipótesis («si no hubiera aceptado») y lo que **no pasó** se afirma («si hubiera seguido»).' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Lucía abrió su pastelería en 2015. Si no la ___, hoy trabajaría en un estudio de arquitectura.', options: ['habría abierto', 'abriera', 'hubiera abierto'], answer: 2, why: 'La apertura es un hecho de 2015: condición pasada, hubiera abierto. «Abriera» hablaría de ahora, y tras «si» no va el condicional.', en: 'Lucía opened her bakery in 2015. If she hadn’t, she would work at an architecture firm today.' },
            { prompt: 'Si Irene hubiera aceptado la beca de Berlín, ahora ___ alemán perfectamente.', options: ['hablara', 'hablaría', 'habría hablado'], answer: 1, why: '«Ahora»: el resultado es actual, condicional simple (hablaría). «Habría hablado» situaría el resultado en el pasado.', en: 'If Irene had accepted the Berlin scholarship, she would speak perfect German now.' },
          ] },
        ] },
        { title: 'Cómo eres, lo que pasó · Who you are, what happened', mascot: '/brand/mascot/standing.webp', coach: 'Un rasgo explica un hecho. A trait explains an event.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'MIXTA 2 · RASGO O SITUACIÓN ACTUAL → PASADO', question: '¿Una característica tuya (o una situación que dura) explica algo que ya pasó?', en: 'Use this when the condition is a lasting trait or a current situation, true now and also back then, and the result is a past event that would have turned out differently.', formula: ['si + imperfecto de subjuntivo (fuera, tuviera, supiera, viviera)', '→ condicional compuesto (habría + participio)'],
            meaning: 'La condición no señala un momento del pasado: es una **característica estable** o una **situación que dura** (cómo eres, qué sabes, dónde vives). El resultado es un **hecho pasado** que habría sido distinto. Sirve para explicar errores y para hacer reproches suaves.',
            examples: [
              { es: 'Si Daniel [[fuera|blue]] más organizado, no [[habría perdido|orange]] el vuelo esta mañana.', en: 'If Daniel were a more organised person, he wouldn’t have missed the flight this morning.' },
              { es: 'Si Irene no [[viviera|blue]] tan lejos del centro, [[habría llegado|orange]] antes a preparar el salón.', en: 'If Irene didn’t live so far from the centre, she would have got here earlier to set up the room.' },
              { es: 'Si [[supiera|blue]] cocinar, yo mismo [[habría preparado|orange]] la cena de esta noche.', en: 'If I could cook, I would have made tonight’s dinner myself.' },
              { es: 'Si Felipe no [[tuviera|blue]] dos niños pequeños, [[habría viajado|orange]] a Bogotá para la reunión.', en: 'If Felipe didn’t have two small children, he would have flown to Bogotá for the reunion.' },
            ],
            note: 'Con verbos de estado (**ser, estar, tener, saber, vivir**…) el imperfecto de subjuntivo describe algo que es verdad ahora y que también lo era cuando pasó el hecho.' },
          { kind: 'compare', title: 'Un rasgo o un momento · A trait or a moment', columns: [
            { tone: 'blue', label: 'RASGO · si fuera', sentence: 'Si Daniel [[fuera|blue]] más organizado, no [[habría perdido|orange]] el vuelo.', idea: 'Daniel es despistado siempre: la causa es su carácter.', en: 'The cause is who Daniel is, then and now: a general criticism.' },
            { tone: 'violet', label: 'MOMENTO · si hubiera sido', sentence: 'Si Daniel [[hubiera sido|violet]] más organizado anoche, no [[habría perdido|orange]] el vuelo.', idea: 'Solo habla de lo que hizo anoche, no de su carácter.', en: 'The cause is one past moment (last night), so it sounds less like a judgement of his personality.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Daniel es muy despistado. Si no lo ___, no se habría dejado la cédula en casa.', options: ['fuera', 'era', 'sería'], answer: 0, why: 'Es su carácter: condición permanente, si + imperfecto de subjuntivo (fuera). Tras «si» no va el condicional, y el indicativo «era» no expresa una hipótesis irreal.', en: 'Daniel is very absent-minded. If he weren’t, he wouldn’t have left his ID card at home.' },
            { prompt: 'Si Irene no hablara inglés, no ___ el proyecto de Toronto el año pasado.', options: ['habría conseguido', 'consiguiera', 'conseguiría'], answer: 0, why: 'Rasgo actual (habla inglés) y resultado pasado («el año pasado»): condicional compuesto, habría conseguido.', en: 'If Irene didn’t speak English, she wouldn’t have won the Toronto project last year.' },
          ] },
        ] },
        { title: 'El mapa completo · The full map', mascot: '/brand/mascot/speaking.webp', coach: 'Dos preguntas bastan. Two questions are enough.', blocks: [
          { kind: 'table', title: 'Cuatro combinaciones · Four combinations', head: ['Condición', 'Resultado', 'Ejemplo'], rows: [
            ['Ahora o siempre · si + imperfecto de subjuntivo', 'Ahora · condicional simple', 'Si [[viviera|blue]] en Bogotá, [[iría|teal]] a todas las reuniones.'],
            ['Pasado · si + pluscuamperfecto de subjuntivo', 'Pasado · condicional compuesto', 'Si [[hubiera visto|violet]] tu mensaje, [[habría ido|orange]] a la reunión de 2020.'],
            ['Pasado · si + pluscuamperfecto de subjuntivo', 'Ahora · condicional simple', 'Si no [[hubiera estudiado|violet]] Arquitectura, ahora no [[conocería|teal]] a Irene.'],
            ['Ahora o siempre · si + imperfecto de subjuntivo', 'Pasado · condicional compuesto', 'Si [[fuera|blue]] más puntual, [[habría llegado|orange]] a la comida.'],
          ], note: 'Las dos primeras filas son las hipótesis «puras» (clases 131 a 134); las dos últimas son las mixtas de esta clase.' },
          { kind: 'decide', title: '¿Qué combinación necesitas? · Which combination?', steps: [
            { q: '¿La condición es un hecho concreto del pasado y el resultado es cómo serían las cosas hoy?', yes: 'Mixta 1: «Si **hubiera aceptado** la beca, ahora **viviría** en Berlín».', no: 'next' },
            { q: '¿La condición es un rasgo o una situación que dura, y el resultado es un hecho pasado?', yes: 'Mixta 2: «Si **fuera** más puntual, **habría llegado** a la comida».', no: 'next' },
            { q: '¿La condición y el resultado son los dos del pasado?', yes: 'Pasado puro: «Si **hubiera visto** el mensaje, **habría ido**».', no: 'Presente puro: «Si **viviera** en Bogotá, **iría** a todas las reuniones».' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Si no ___ a Irene en primer curso, ahora no seríamos amigos.', options: ['conociera', 'habría conocido', 'hubiera conocido'], answer: 2, why: 'Conocer a Irene es un hecho pasado (primer curso) y el resultado es actual: hubiera conocido → seríamos.', en: 'If I hadn’t met Irene in first year, we wouldn’t be friends now.' },
            { prompt: 'Si Daniel no fuera tan cabezota, ___ la alarma anoche, como le dije.', options: ['pondría', 'habría puesto', 'pusiera'], answer: 1, why: 'Rasgo permanente (es cabezota) y resultado pasado («anoche»): condicional compuesto, habría puesto.', en: 'If Daniel weren’t so stubborn, he would have set the alarm last night, as I told him.' },
          ] },
        ] },
        { title: 'Otras maneras de decirlo · Other ways to say it', mascot: '/brand/mascot/portrait.webp', coach: 'Forma compacta y registros. A compact form and registers.', blocks: [
          { kind: 'concept', tone: 'violet', label: 'DE + HABER + PARTICIPIO', question: '¿Quieres una condición pasada más compacta?', en: 'De + perfect infinitive works like an if-clause with hubiera; it is compact and slightly more careful in tone, common in writing and in educated speech.', formula: ['de + haber + participio  (= si + hubiera + participio)', '→ condicional simple o compuesto'],
            meaning: 'El infinitivo compuesto con **de** equivale a «si hubiera…». Es frecuente en la lengua escrita y en el habla cuidada. Los pronombres van pegados a **haber**: «de haber**lo** sabido», «de haber**se** quedado».',
            examples: [
              { es: '[[De haberlo sabido|violet]], [[habría traído|orange]] las fotos de la facultad.', en: 'Had I known, I would have brought the photos from our university days.' },
              { es: '[[De haberse quedado|violet]] en Bogotá, Felipe [[estaría|teal]] hoy aquí.', en: 'Had he stayed in Bogotá, Felipe would be here today.' },
              { es: '[[De no haber perdido|violet]] el vuelo, Daniel [[habría llegado|orange]] a la comida.', en: 'If he hadn’t missed his flight, Daniel would have made it to lunch.' },
            ],
            note: 'Si aparece el sujeto, va detrás: «De haberlo sabido **yo**…». Con infinitivo simple equivale a si + imperfecto de subjuntivo: «De ser así, …» (if that were the case). Hoy solo tienes que reconocerlo.' },
          { kind: 'table', title: 'El resultado pasado en tres registros · The past result in three registers', head: ['Registro', 'Ejemplo', 'Comentario'], rows: [
            ['General', 'Si lo hubiera sabido, no **habría venido**.', 'La opción más clara; sirve en cualquier texto.'],
            ['También estándar', 'Si lo hubiera sabido, no **hubiera venido**.', 'La RAE acepta «hubiera + participio» en la oración principal como equivalente de «habría». Es muy frecuente en todo el mundo hispánico.'],
            ['Coloquial', 'Si lo hubiera sabido, no **venía**.', 'Imperfecto de indicativo con valor de condicional. La gramática académica lo describe como propio de la conversación informal; no lo uses en textos formales.'],
          ], note: 'En la oración principal lo más frecuente es «habría» o «hubiera»; la forma en -se («no hubiese venido») se oye menos allí, así que en tus textos usa las dos primeras. Y tras «si» nunca va el condicional: «si hubiera sabido», no «si habría sabido».' },
          { kind: 'tip', icon: '💬', title: 'Una frase hecha · A set phrase', text: 'En la conversación, sobre todo en España, se oye «**Si lo sé, no vengo**»: presente de indicativo con el sentido de «si lo hubiera sabido, no habría venido». Es una queja medio en broma; solo tienes que reconocerla.', en: 'In casual speech, especially in Spain, people say “Si lo sé, no vengo” (literally “If I know, I don’t come”) to mean “Had I known, I wouldn’t have come”: a half-joking complaint. Recognise it; you don’t need to produce it.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«De haberlo sabido, habría venido antes». ¿Qué significa?', options: ['Si lo hubiera sabido, habría venido antes.', 'Como lo sabía, vine antes.', 'Cuando lo sepa, vendré antes.'], answer: 0, why: 'De + haber + participio = si + hubiera + participio: una condición pasada que no se cumplió.', en: 'What does “De haberlo sabido, habría venido antes” mean?' },
            { prompt: '¿Qué frase NO es adecuada en un informe formal?', options: ['Si lo hubiéramos sabido, no hubiéramos firmado.', 'Si lo hubiéramos sabido, no firmábamos.', 'Si lo hubiéramos sabido, no habríamos firmado.'], answer: 1, why: '«No firmábamos» (imperfecto de indicativo con valor de condicional) es coloquial. «Habríamos firmado» y «hubiéramos firmado» son correctas en un texto formal.', en: 'Which sentence does NOT suit a formal report?' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Revisa los dos tiempos. Check both time frames.', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la frase con el error y tu alumno explica qué falla: la condición, el resultado o la forma. Después aparece la corrección.', self: 'Lee cada frase y piensa qué falla: ¿la condición, el resultado o la forma? Toca para ver la corrección. (Is the problem in the condition, the result or the form?)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Si habría aceptado la beca, ahora viviría en Berlín.', right: 'Si hubiera aceptado la beca, ahora viviría en Berlín.', why: 'Tras «si» condicional no va el condicional: la condición pasada lleva hubiera + participio.' },
            { wrong: 'Si no hubiera dejado la carrera, ahora habría sido arquitecta.', right: 'Si no hubiera dejado la carrera, ahora sería arquitecta.', why: 'Con «ahora» el resultado es actual: condicional simple, sería.' },
            { wrong: 'Si fuera más organizado, no perdería el vuelo esta mañana.', right: 'Si fuera más organizado, no habría perdido el vuelo esta mañana.', why: 'El vuelo ya salió («esta mañana»): el resultado es pasado, condicional compuesto.' },
            { wrong: 'Si Felipe no aceptara aquel trabajo hace diez años, hoy estaría aquí.', right: 'Si Felipe no hubiera aceptado aquel trabajo hace diez años, hoy estaría aquí.', why: '«Hace diez años» sitúa la condición en el pasado: pluscuamperfecto de subjuntivo.' },
            { wrong: 'De lo haber sabido, habría traído las fotos.', right: 'De haberlo sabido, habría traído las fotos.', why: 'Con infinitivo, el pronombre va pegado detrás: haberlo.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Si me ___ caso cuando te dije que viajaras ayer, ahora estarías descansado.', options: ['hubieras hecho', 'habrías hecho', 'hicieras'], answer: 0, why: 'El consejo fue ayer: condición pasada, hubieras hecho caso. El resultado es actual: estarías.', en: 'If you had listened to me when I told you to travel yesterday, you’d be rested now.' },
            { prompt: 'Lucía abrió su pastelería en 2015. Si no fuera tan valiente, nunca la ___.', options: ['abriera', 'habrá abierto', 'habría abierto'], answer: 2, why: 'Rasgo permanente (es valiente) y resultado pasado (la abrió en 2015): habría abierto. «Habrá abierto» es futuro compuesto.', en: 'If Lucía weren’t so brave, she would never have opened it.' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno dice una decisión pasada que explica su vida de hoy («Si no hubiera…, ahora…») y un rasgo suyo que le costó algo («Si fuera más…, habría…»).' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'Llega Daniel', coach: 'Toca cada forma marcada. Tap each marked form.',
      steps: [
        { title: 'En la terraza · On the terrace', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Irene y tu alumno es Daniel (y después Lucía). Luego tu alumno toca cada forma marcada y dice si habla de ahora o del pasado.', self: 'Lee el diálogo en voz alta. Después toca cada forma marcada: ¿habla de ahora o del pasado? (Tap each marked form: does it refer to now or to the past?)' } },
          { kind: 'explore', title: 'Quince años después', setting: 'Sábado por la noche, en la terraza de un restaurante de Bogotá. La reunión ya empezó y Daniel llega directamente del aeropuerto. Se tratan de tú. (Saturday night on a restaurant terrace in Bogotá. Daniel arrives straight from the airport.)', lines: [
            { who: 'Irene', text: '¡Daniel, por fin! Ya creíamos que no venías.', en: 'Daniel, at last! We thought you weren’t coming.' },
            { who: 'Daniel', text: 'Perdí el vuelo de las siete: me dejé la cédula en casa. [[Si no fuera|blue]] tan despistado, [[no lo habría perdido|orange]].', en: 'I missed the seven o’clock flight: I left my ID card at home. If I weren’t so scatterbrained, I wouldn’t have missed it.' },
            { who: 'Irene', text: 'Te lo dije: [[si me hubieras hecho caso|violet]] y [[hubieras viajado|violet]] ayer, [[ahora no estarías|teal]] agotado.', en: 'I told you: if you’d listened to me and travelled yesterday, you wouldn’t be exhausted now.' },
            { who: 'Daniel', text: 'Ya, ya, no me regañes. ¿Y Felipe? ¿No viene?', en: 'All right, all right, don’t tell me off. What about Felipe? Isn’t he coming?' },
            { who: 'Irene', text: 'No, sigue en Montreal. Dice que [[si no hubiera aceptado|violet]] aquel trabajo, [[hoy estaría|teal]] aquí, pero que no se arrepiente.', en: 'No, he’s still in Montreal. He says that if he hadn’t taken that job he’d be here today, but he has no regrets.' },
            { who: 'Daniel', text: 'Normal. [[De haberse quedado|violet]] en Bogotá, [[seguiría|teal]] en aquella oficina gris que tanto odiaba.', en: 'Fair enough. Had he stayed in Bogotá, he’d still be in that grey office he hated so much.' },
            { who: 'Irene', text: '¿Y tú? ¿Te arrepientes de algo?', en: 'And you? Do you regret anything?' },
            { who: 'Daniel', text: 'Un poco, sí. Empecé muy tarde en el periodismo. [[Si hubiera empezado|violet]] a los veinte, [[ahora tendría|teal]] más contactos.', en: 'A little, yes. I got into journalism very late. If I’d started at twenty, I’d have more contacts now.' },
            { who: 'Irene', text: 'Yo, a veces, del piano. [[Si hubiera seguido|violet]] en el conservatorio, quizá [[daría|teal]] conciertos. Pero [[si fuera|blue]] más disciplinada, [[no lo habría dejado|orange]], ¿no?', en: 'Me, sometimes, about the piano. If I’d stayed at the conservatoire, maybe I’d be giving concerts. But if I were more disciplined, I wouldn’t have given it up, would I?' },
            { who: 'Daniel', text: 'Mira, ahí viene Lucía con una tarta enorme. [[De haberlo sabido|violet]], [[no habría cenado|orange]] en el avión.', en: 'Look, here comes Lucía with a huge cake. Had I known, I wouldn’t have eaten on the plane.' },
            { who: 'Lucía', text: '¡Hola, chicos! Si a los veinte me hubieran dicho que acabaría haciendo tartas, no me lo [[hubiera creído|orange]].', en: 'Hi, everyone! If someone had told me at twenty that I’d end up baking cakes, I wouldn’t have believed it.' },
            { who: 'Irene', text: 'Pues [[si no hubieras dejado|violet]] la carrera, [[ahora no comeríamos|teal]] la mejor tarta de Bogotá.', en: 'Well, if you hadn’t dropped out, we wouldn’t be eating the best cake in Bogotá right now.' },
          ], notes: {
            'Si no fuera': 'Mixta 2: un rasgo de carácter (Daniel es despistado siempre) → imperfecto de subjuntivo.',
            'no lo habría perdido': 'Resultado pasado (el vuelo de las siete ya salió): condicional compuesto.',
            'si me hubieras hecho caso': 'Condición pasada: el consejo de Irene fue antes del viaje. Pluscuamperfecto de subjuntivo. Es un reproche.',
            'hubieras viajado': 'Segunda condición pasada, unida con «y»: hubieras viajado ayer.',
            'ahora no estarías': 'Mixta 1: el resultado se ve ahora (está agotado). Condicional simple.',
            'si no hubiera aceptado': 'Condición pasada: Felipe aceptó el trabajo hace diez años. Se niega lo que sí pasó.',
            'hoy estaría': '«Hoy» marca el resultado actual: condicional simple. Va dentro de un «dice que», sin cambiar el tiempo.',
            'De haberse quedado': 'De + haber + participio = «si se hubiera quedado». El pronombre «se» va pegado a «haber».',
            'seguiría': 'Resultado actual: hoy seguiría en esa oficina. Condicional simple.',
            'Si hubiera empezado': 'Condición pasada (a los veinte años): pluscuamperfecto de subjuntivo.',
            'ahora tendría': 'Resultado actual con «ahora»: condicional simple. Es un lamento.',
            'Si hubiera seguido': 'Condición pasada: Irene dejó el conservatorio. Se afirma lo que no pasó.',
            'daría': 'Resultado actual: hoy daría conciertos. «Quizá» suaviza la hipótesis.',
            'si fuera': 'Mixta 2: un rasgo (ser disciplinada) que vale para entonces y para ahora → imperfecto de subjuntivo.',
            'no lo habría dejado': 'Resultado pasado: dejó el piano hace años. Condicional compuesto.',
            'De haberlo sabido': 'Forma compacta de «si lo hubiera sabido». «Lo» va pegado a «haber».',
            'no habría cenado': 'Pasado puro: condición y resultado son de hace unas horas.',
            'hubiera creído': 'Resultado pasado con «hubiera» en vez de «habría»: correcto y muy frecuente («no me lo habría creído»).',
            'si no hubieras dejado': 'Condición pasada: Lucía dejó la carrera en tercero.',
            'ahora no comeríamos': 'Mixta 1: resultado actual, en este momento de la fiesta. Condicional simple.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Por qué perdió Daniel el vuelo?', options: ['Se dejó la cédula en casa.', 'El taxi llegó tarde.', 'Se quedó dormido.'], answer: 0, why: '«Me dejé la cédula en casa»: tuvo que volver a buscarla.', en: 'Why did Daniel miss his flight?' },
            { prompt: '¿Qué opina Daniel de la decisión de Felipe?', options: ['Que Felipe volverá pronto.', 'Que fue un error.', 'Que fue buena: en Bogotá seguiría en una oficina que odiaba.'], answer: 2, why: '«De haberse quedado en Bogotá, seguiría en aquella oficina gris que tanto odiaba».', en: 'What does Daniel think of Felipe’s decision?' },
            { prompt: '¿Qué dice Irene sobre el piano?', options: ['Que nunca le gustó.', 'Que todavía da conciertos.', 'Que lo dejó por falta de disciplina y que quizá hoy daría conciertos.'], answer: 2, why: '«Si hubiera seguido…, quizá daría conciertos. Pero si fuera más disciplinada, no lo habría dejado».', en: 'What does Irene say about the piano?' },
          ] },
        ] },
        { title: 'Junto a la tarta · By the cake', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'chat-fill', title: 'Más tarde, Irene y Lucía · Later, Irene and Lucía', lines: [
            { who: 'Lucía', text: 'Irene, si no ___ esta reunión, ahora no estaríamos todos juntos.', options: ['habrías organizado', 'organizaras', 'hubieras organizado'], answer: 2, why: 'Irene organizó la reunión antes: condición pasada (hubieras organizado). El resultado es de ahora: estaríamos.' },
            { who: 'Irene', text: 'Ya. Y si Felipe no tuviera dos niños tan pequeños, ___ el viaje hace meses.', options: ['organizara', 'habría organizado', 'organizaría'], answer: 1, why: 'Situación actual (tiene niños pequeños) y resultado pasado («hace meses»): condicional compuesto.' },
            { who: 'Lucía', text: '¿Y tú? Si ___ en el conservatorio, ahora serías profesora de música.', options: ['seguirías', 'siguieras', 'hubieras seguido'], answer: 2, why: 'Irene dejó el conservatorio hace años: condición pasada, hubieras seguido.' },
            { who: 'Irene', text: 'Puede ser. Pero si fuera profesora de música, no ___ la casa de mis padres el año pasado.', options: ['diseñaría', 'diseñara', 'habría diseñado'], answer: 2, why: 'Situación imaginada de ahora (ser profesora) y hecho pasado («el año pasado»): habría diseñado.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: «¿Qué decisión de alguien de tu familia explica tu vida de hoy?». Tu alumno responde con «Si mis padres no hubieran…, ahora yo…».' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Condición y resultado, cada uno en su tiempo. Each in its own time.',
      steps: [
        { title: 'Historias de la promoción · Classmates’ stories', blocks: [
          { kind: 'choice', items: [
            { context: 'Rosa estudió Arquitectura, pero hoy trabaja en cine. (Rosa studied architecture but works in film today.)', prompt: 'Si no ___ aquel curso de escenografía, hoy diseñaría edificios.', options: ['hiciera', 'habría hecho', 'hubiera hecho'], answer: 2, why: 'El curso es un hecho pasado: hubiera hecho. El resultado es actual: diseñaría.', en: 'If I hadn’t done that set-design course, I’d be designing buildings today.' },
            { context: 'Julián habla de las obras de su casa. (Julián talks about the renovation of his house.)', prompt: 'Julián es muy paciente. Si no lo ___, no habría aguantado tres años de obras.', options: ['es', 'sería', 'fuera'], answer: 2, why: 'Rasgo permanente en una condición irreal: imperfecto de subjuntivo, fuera. «Sería» es condicional y no va tras «si».', en: 'If he weren’t, he wouldn’t have put up with three years of building work.' },
            { context: 'Daniel bosteza en la mesa. (Daniel yawns at the table.)', prompt: 'Si Daniel hubiera dormido en Bogotá anoche, ahora no ___ tanto sueño.', options: ['tendría', 'habría tenido', 'tuviera'], answer: 0, why: '«Ahora»: resultado actual, condicional simple (tendría).', en: 'If Daniel had spent last night in Bogotá, he wouldn’t be so sleepy now.' },
            { context: 'Irene recuerda un viaje de trabajo. (Irene remembers a work trip.)', prompt: 'Si yo no hablara portugués, la empresa no me ___ a São Paulo en 2019.', options: ['habría enviado', 'enviaría', 'enviara'], answer: 0, why: 'Habilidad actual (habla portugués) y hecho pasado (2019): condicional compuesto.', en: 'If I didn’t speak Portuguese, the company wouldn’t have sent me to São Paulo in 2019.' },
            { context: 'Julián mira a sus amigos. (Julián looks at his friends.)', prompt: 'Si ___ Arquitectura en otra universidad, ahora no conocería a nadie de esta mesa.', options: ['habría estudiado', 'estudiara', 'hubiera estudiado'], answer: 2, why: 'Estudiar la carrera es un hecho pasado: hubiera estudiado. El resultado es actual: conocería.', en: 'If I had studied Architecture at another university, I wouldn’t know anyone at this table now.' },
          ] },
        ] },
        { title: '¿Qué combinación es? · Which combination?', blocks: [
          { kind: 'classify', title: 'Mira cuándo es la condición y cuándo el resultado · Look at the time of each part', categories: [
            { id: 'm1', label: 'MIXTA · pasado → ahora (si hubiera…, sería)', tone: 'violet' },
            { id: 'm2', label: 'MIXTA · rasgo → pasado (si fuera…, habría…)', tone: 'blue' },
            { id: 'pasado', label: 'PASADO PURO (si hubiera…, habría…)', tone: 'orange' },
            { id: 'presente', label: 'PRESENTE PURO (si fuera…, sería)', tone: 'teal' },
          ], items: [
            { text: 'Si no me hubiera mudado a Medellín, ahora vería a mis padres todos los domingos.', answer: 'm1', why: 'Mudanza pasada → costumbre actual (vería).' },
            { text: 'Si Rosa fuera menos tímida, habría dado un discurso esta noche.', answer: 'm2', why: 'Rasgo (tímida) → algo que no hizo hace un rato (habría dado).' },
            { text: 'Si hubiéramos llegado antes, habríamos visto las fotos antiguas.', answer: 'pasado', why: 'Las dos partes son pasadas y cerradas.' },
            { text: 'Si tuviera más vacaciones, viajaría a Montreal para ver a Felipe.', answer: 'presente', why: 'Situación actual → resultado actual o futuro.' },
            { text: 'De haber estudiado Derecho, hoy trabajaría con mi padre.', answer: 'm1', why: '«De haber estudiado» = si hubiera estudiado (pasado); «hoy trabajaría» (ahora).' },
            { text: 'Si Julián no supiera tanto de vinos, no habría elegido un tinto tan bueno para la cena.', answer: 'm2', why: 'Conocimiento estable (supiera) → elección ya hecha (habría elegido).' },
            { text: 'Si nos hubieran avisado, habríamos traído regalos.', answer: 'pasado', why: 'Aviso y regalos pertenecen al pasado.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Si habría sabido que venía Lucía, habría traído su libro de recetas.', ok: false, options: ['Si supiera que venía Lucía, habría traído su libro de recetas.', 'Si sabría que venía Lucía, habría traído su libro de recetas.', 'Si hubiera sabido que venía Lucía, habría traído su libro de recetas.'], answer: 2, why: 'Tras «si» no va el condicional; la condición es pasada y concreta: hubiera sabido.' },
            { sentence: 'Si no hubiera perdido el vuelo, ahora estaría más descansado.', ok: true, why: 'Correcta: condición pasada (hubiera perdido) y resultado actual (ahora estaría).' },
            { sentence: 'Si Rosa fuera más organizada, no olvidaría la cámara anoche.', ok: false, options: ['Si Rosa fuera más organizada, no olvidara la cámara anoche.', 'Si Rosa fuera más organizada, no olvidaba la cámara anoche.', 'Si Rosa fuera más organizada, no habría olvidado la cámara anoche.'], answer: 2, why: '«Anoche»: el resultado es pasado. Rasgo + resultado pasado → habría olvidado.' },
            { sentence: 'De haberlo sabido, te habría guardado un trozo de tarta.', ok: true, why: 'Correcta: de + haber + participio (= si lo hubiera sabido) y resultado pasado.' },
            { sentence: 'Si Felipe no conociera a Claire hace nueve años, hoy viviría en Bogotá.', ok: false, options: ['Si Felipe no hubiera conocido a Claire hace nueve años, hoy viviría en Bogotá.', 'Si Felipe no conocería a Claire hace nueve años, hoy viviría en Bogotá.', 'Si Felipe no habría conocido a Claire hace nueve años, hoy viviría en Bogotá.'], answer: 0, why: '«Hace nueve años» es una condición pasada: hubiera conocido. Tras «si» no va el condicional.' },
            { sentence: 'Si hubiera estudiado más idiomas, ahora trabajara en Ginebra.', ok: false, options: ['Si hubiera estudiado más idiomas, ahora trabajaba en Ginebra.', 'Si hubiera estudiado más idiomas, ahora trabajo en Ginebra.', 'Si hubiera estudiado más idiomas, ahora trabajaría en Ginebra.'], answer: 2, why: 'El resultado actual va en condicional simple (trabajaría), no en subjuntivo.' },
          ] },
        ] },
        { title: 'El grupo de la promoción · The class group chat', blocks: [
          { kind: 'chat-fill', title: 'Domingo por la mañana · Sunday morning', lines: [
            { who: 'Rosa', text: '¡Qué noche! Si no ___ tan tarde, hoy no tendría esta cara.', options: ['me acostara', 'me hubiera acostado', 'me habría acostado'], answer: 1, why: 'Acostarse tarde fue anoche: condición pasada. El resultado es de hoy: tendría.' },
            { who: 'Julián', text: 'Yo igual. Si fuera más sensato, ___ a casa anoche a las once.', options: ['me habría ido', 'me iría', 'me fuera'], answer: 0, why: 'Rasgo (ser sensato) y resultado pasado («anoche»): me habría ido.' },
            { who: 'Daniel', text: 'Lucía, de ___ que tu tarta era tan buena, habría pedido otro trozo.', options: ['hubiera sabido', 'saber', 'haber sabido'], answer: 2, why: 'Tras «de», infinitivo compuesto: de haber sabido = si hubiera sabido.' },
            { who: 'Lucía', text: 'Si me lo ___ anoche, te habría guardado la mitad.', options: ['habrías dicho', 'dijeras', 'hubieras dicho'], answer: 2, why: 'Condición pasada («anoche») con resultado pasado: hubieras dicho.' },
            { who: 'Irene', text: 'Y Felipe dice que, si no ___ tan lejos, ahora estaría ayudándonos a recoger.', options: ['viviera', 'hubiera vivido', 'viviría'], answer: 0, why: 'Vivir lejos es su situación actual y el resultado también es de ahora: hipótesis de presente, viviera.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['Ahora', 'viviría', 'en', 'Berlín', 'si', 'hubiera', 'aceptado', 'la', 'beca'], accept: ['Ahora viviría en Berlín si hubiera aceptado la beca', 'Si hubiera aceptado la beca ahora viviría en Berlín', 'Viviría en Berlín ahora si hubiera aceptado la beca'], en: 'I’d be living in Berlin now if I had accepted the scholarship.' },
            { tiles: ['Si', 'fuera', 'más', 'puntual', 'no', 'habría', 'perdido', 'el', 'tren'], accept: ['Si fuera más puntual no habría perdido el tren', 'No habría perdido el tren si fuera más puntual'], en: 'If I were more punctual, I wouldn’t have missed the train.' },
            { tiles: ['De', 'haberlo', 'sabido', 'habría', 'venido', 'antes'], accept: ['De haberlo sabido habría venido antes'], en: 'Had I known, I would have come earlier.' },
          ] },
        ] },
        { title: 'De los hechos a la hipótesis · From facts to hypotheses', blocks: [
          { kind: 'rewrite', title: 'Une los hechos · Join the facts', items: [
            { prompt: 'Hechos: Julián no aceptó el puesto en Lima. Hoy trabaja en Bogotá.', instruction: 'Escribe una condicional mixta. Empieza: «Si Julián hubiera aceptado el puesto en Lima, hoy…».', accept: ['Si Julián hubiera aceptado el puesto en Lima, hoy trabajaría en Lima', 'Si Julián hubiera aceptado el puesto en Lima, hoy no trabajaría en Bogotá', 'Si Julián hubiera aceptado el puesto en Lima, hoy viviría en Lima', 'Si Julián hubiese aceptado el puesto en Lima, hoy trabajaría en Lima', 'Si Julián hubiese aceptado el puesto en Lima, hoy no trabajaría en Bogotá'] },
            { prompt: 'Hechos: Daniel es muy despistado. Esta mañana perdió el vuelo.', instruction: 'Explica el error con su carácter. Empieza: «Si Daniel no fuera…».', accept: ['Si Daniel no fuera tan despistado, no habría perdido el vuelo esta mañana', 'Si Daniel no fuera tan despistado, esta mañana no habría perdido el vuelo', 'Si Daniel no fuera tan despistado, no habría perdido el vuelo', 'Si Daniel no fuera despistado, no habría perdido el vuelo esta mañana', 'Si Daniel no fuera despistado, no habría perdido el vuelo', 'Si Daniel no fuera tan despistado, no hubiera perdido el vuelo esta mañana', 'Si Daniel no fuera tan despistado, no hubiera perdido el vuelo'] },
            { prompt: 'Si lo hubiera sabido, habría reservado una mesa más grande.', instruction: 'Cambia la condición a la forma con «de» + infinitivo compuesto. Empieza: «De…».', accept: ['De haberlo sabido, habría reservado una mesa más grande'] },
            { prompt: 'Hechos: Irene dejó el piano a los dieciséis años. Ahora no toca en público.', instruction: 'Expresa el lamento de Irene en primera persona. Empieza: «Si no hubiera…».', accept: ['Si no hubiera dejado el piano, ahora tocaría en público', 'Si no hubiera dejado el piano a los dieciséis años, ahora tocaría en público', 'Si no hubiera dejado el piano, tocaría en público', 'Si no hubiera dejado el piano, hoy tocaría en público', 'Si no hubiera dejado el piano a los dieciséis años, hoy tocaría en público', 'Si no hubiera dejado el piano a los dieciséis años, tocaría en público'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno cuenta un hecho real de su pasado y su consecuencia de hoy («Si no hubiera…, ahora…»), y un rasgo suyo que cambió un día concreto («Si no fuera tan…, habría…»).' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'La nota de voz de Felipe', coach: 'Primero la idea, después los detalles. Gist first, then details.',
      steps: [
        { title: 'Desde Montreal · From Montreal', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general. Segunda escucha: tu alumno anota cada condición y dice si su resultado es de ahora o del pasado. Después, las preguntas.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Anota cada condición y su resultado: ¿ahora o pasado? Felipe es colombiano y habla de «ustedes» a sus amigos. (Felipe is Colombian and addresses his friends as «ustedes».)' } },
          { kind: 'listen', title: 'La nota de voz de Felipe', channel: 'NOTA DE VOZ · DE FELIPE PARA LA PROMOCIÓN', src: '/audio/grammar-live/435.mp3',
            before: 'Felipe no ha podido venir y manda una nota de voz que Irene pone en el salón. ¿Qué crees que cuenta: por qué no está, de qué se arrepiente, qué le diría a cada uno? (Felipe couldn’t come and sends a voice note. What do you think he says?)',
            gist: { prompt: '¿Cuál es la idea principal del mensaje? · What is the main idea?', options: ['Felipe anuncia que vuelve a vivir a Bogotá.', 'Felipe lamenta no estar, pero no se arrepiente de su vida en Montreal.', 'Felipe se queja de que nadie lo invitó.'], answer: 1, why: '«Hoy estaría ahí con ustedes… Pero no me arrepiento».', en: 'He misses the party but has no regrets about his life abroad.' },
            details: [
              { prompt: '¿Qué no habría pasado si Felipe se hubiera quedado en Bogotá?', options: ['No habría estudiado Arquitectura.', 'No habría conocido a Claire.', 'No habría aprendido francés.'], answer: 1, why: '«Si me hubiera quedado en Bogotá, no habría conocido a Claire».', en: 'What would not have happened if Felipe had stayed in Bogotá?' },
              { prompt: '¿Por qué no compró el pasaje en septiembre?', options: ['Porque estaba muy caro.', 'Porque Claire no quería viajar.', 'Porque no es muy organizado.'], answer: 2, why: '«Si yo fuera un poquito más organizado, habría comprado el pasaje en septiembre, cuando estaba barato».', en: 'Why didn’t he buy his ticket in September?' },
              { prompt: '¿Qué habría hecho Felipe de haber sabido que iban a poner el audio en el salón?', options: ['Lo habría preparado mejor.', 'No lo habría mandado.', 'Habría llamado por teléfono.'], answer: 0, why: '«De haber sabido que iban a poner este audio en el salón, lo habría preparado mejor».', en: 'What would he have done had he known the audio would be played to everyone?' },
              { prompt: '¿Qué le reprocha Felipe a Daniel?', options: ['Que llegó tarde a la reunión.', 'Que no le mandó fotos de la fiesta.', 'Que no contestó sus mensajes: si lo hubiera hecho, ahora sabría lo de la sorpresa.'], answer: 2, why: '«Si me hubieras contestado los mensajes, ahora sabrías que le mandé una sorpresa a Irene para ti».', en: 'What does Felipe reproach Daniel for?' },
            ],
            transcript: '¡Hola, gente! Les habla Felipe, desde Montreal, donde hoy estamos a diez grados bajo cero. Irene, mil gracias por organizarlo todo. Les cuento: [[si no hubiera aceptado|violet]] aquel trabajo hace diez años, [[hoy estaría|teal]] ahí con ustedes, comiendo ajiaco y cantando las canciones de la facultad. Pero no me arrepiento, ¿eh? [[Si me hubiera quedado|violet]] en Bogotá, [[no habría conocido|orange]] a Claire, y [[ahora no tendríamos|teal]] a los mellizos. Eso sí, [[si yo fuera|blue]] un poquito más organizado, [[habría comprado|orange]] el pasaje en septiembre, cuando estaba barato, y [[estaría|teal]] sentado en esa mesa. Ya saben cómo soy. [[De haber sabido|violet]] que iban a poner este audio en el salón, [[lo habría preparado|orange]] mejor, la verdad. Y Daniel: [[si me hubieras contestado|violet]] los mensajes, [[ahora sabrías|teal]] que le mandé una sorpresa a Irene para ti. Lucía, guárdame un pedazo de tarta para diciembre, que esta vez sí voy. ¡Un abrazo enorme a todos!',
            reply: { teacher: 'Tú eres Felipe. Tu alumno es Irene y le responde con otra nota de voz: le dice cómo habría sido la noche con él y le hace un pequeño reproche con humor («Si fueras más organizado…»).', self: 'Responde a Felipe como Irene, en voz alta: cómo habría sido la noche con él, qué sería distinto hoy y un pequeño reproche con humor. (Reply to Felipe as Irene.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Otras vidas posibles', coach: 'Habla de tu pasado y de tu presente. Talk about your past and your present.',
      steps: [
        { title: 'Decisiones, rasgos y reproches · Choices, traits and reproaches', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas y tu alumno habla de experiencias reales. Si mezcla mal los tiempos, tú repites la frase con la forma correcta y sigues con la repregunta.', self: 'Lee cada pregunta y responde en voz alta con ejemplos reales. Antes de hablar, decide: ¿la condición es pasada o es un rasgo? ¿El resultado es de ahora o del pasado? (Decide the time of each part before speaking.)' } },
          { kind: 'talk', cards: [
            { q: '¿Qué decisión de tu pasado explica tu vida de hoy? ¿Cómo sería tu vida si hubieras elegido otra cosa? · Which past decision explains your life today? How would it look if you had chosen differently?', followUps: ['¿Te arrepientes o te alegras? (Regret or relief?)', '¿Qué no tendrías hoy?'], phrases: ['Si no [[hubiera estudiado|violet]]…, ahora [[sería|teal]]…', 'Si [[me hubiera quedado|violet]] en…, hoy [[viviría|teal]]…', 'No me arrepiento: si…, no [[tendría|teal]]…'], hint: 'Condición pasada (hubiera + participio) → resultado de hoy (condicional simple).', example: 'Si no hubiera estudiado Turismo, ahora no hablaría tres idiomas. Y si me hubiera quedado en mi pueblo, hoy viviría cerca de mis padres, pero no tendría este trabajo.', next: 'Ahora, tu carácter.' },
            { q: 'Un rasgo de tu carácter que te costó algo (o que te salvó) en un momento concreto. · A trait of yours that once cost you something, or saved you.', followUps: ['¿Qué pasó exactamente?', '¿Has cambiado desde entonces?'], phrases: ['Si [[fuera|blue]] más paciente, no [[habría discutido|orange]]…', 'Si no [[fuera|blue]] tan cabezota, [[habría abandonado|orange]]…', 'Si no [[supiera|blue]]…, no [[habría conseguido|orange]]…'], hint: 'Rasgo estable (imperfecto de subjuntivo) → hecho pasado (habría + participio).', example: 'Si fuera más paciente, no habría discutido con mi jefe la semana pasada. Pero si no fuera tan cabezota, habría abandonado mi primer maratón en el kilómetro treinta.', next: 'Ahora, un reproche.' },
            { q: 'Eres Irene. Daniel llega tarde otra vez. Hazle un reproche suave y con humor. · You are Irene: tease Daniel gently for being late again.', followUps: ['¿Cómo lo dices para que no se enfade?', '¿Qué te responde él?'], phrases: ['[[Si me hubieras hecho caso|violet]], ahora [[estarías|teal]]…', 'Si [[fueras|blue]] un poco más organizado, [[habrías llegado|orange]]…', '[[De haber salido|violet]] antes, …'], hint: 'El humor y palabras como «un poquito» o «¿no?» suavizan el reproche.', example: 'Daniel, si me hubieras hecho caso, ahora estarías descansado. Y si fueras un poquito más organizado, habrías llegado a la comida, ¿no?', teacher: 'Tú eres Daniel y te defiendes con excusas; tu alumno responde con otra condicional mixta.' },
            { q: 'Felipe se fue a Montreal. Imagina tu vida si te hubieras ido a otro país a los veinticinco años. · Imagine your life if you had moved abroad at twenty-five.', followUps: ['¿Qué echarías de menos hoy?', '¿Qué habría sido más difícil al principio?'], phrases: ['Si [[me hubiera ido|violet]] a…, hoy [[hablaría|teal]]…', 'Al principio, [[habría echado|orange]] de menos…', 'Ahora [[tendría|teal]]…'], hint: 'Combina un resultado de hoy (hablaría) con uno de entonces (habría echado de menos).', example: 'Si me hubiera ido a Italia a los veinticinco años, hoy hablaría italiano y quizá tendría un restaurante. Al principio, habría echado mucho de menos a mi familia.' },
            { q: 'Algo que no sabías y que te arruinó un día. Cuéntalo primero a un amigo y después en un correo formal. · Tell the same story to a friend, then in a formal email.', followUps: ['¿Qué cambia en la versión formal?', '¿Dirías «Si lo sé, no vengo»?'], phrases: ['[[Si lo hubiera sabido|violet]], no [[venía|orange]]… (coloquial)', '[[De haberlo sabido|violet]], [[habría solicitado|orange]]… (formal)', 'Si lo sé, no vengo. (frase hecha)'], hint: 'Con amigos: «no venía», «no hubiera venido». En un correo formal: «de haberlo sabido», «habría…».', example: 'A un amigo: «¡Si lo hubiera sabido, no venía! Dos horas de cola para nada». En el correo: «De haber sabido que el trámite requería cita previa, habría solicitado una con antelación».', teacher: 'Tú escuchas las dos versiones y dices qué palabra delata el registro de cada una.' },
            { q: 'Una decisión colectiva de tu ciudad, tu empresa o tu país. ¿Cómo serían las cosas hoy si se hubiera decidido otra cosa? · A collective decision: how would things be today otherwise?', followUps: ['¿Fue una buena decisión, en tu opinión?', '¿Quién la tomó y por qué?'], phrases: ['Si el ayuntamiento [[hubiera construido|violet]]…, ahora [[tendríamos|teal]]…', 'Si mi empresa no [[hubiera cerrado|violet]]…, hoy…', 'Si los vecinos [[fueran|blue]] más…, el proyecto no [[se habría parado|orange]]…'], hint: 'Mezcla las dos mixtas: decisiones pasadas con efectos de hoy, y rasgos que explican lo que pasó.', example: 'Si el ayuntamiento hubiera construido el metro hace veinte años, ahora no tendríamos tanto tráfico. Y si los vecinos fueran más exigentes, el proyecto no se habría parado.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno hace las preguntas y tú respondes con algún tiempo equivocado a propósito («Si no estudiaría Arquitectura…», «ahora habría sido…»). Tu alumno lo detecta y lo corrige.', self: 'Ahora haz tú las preguntas en voz alta y respóndelas pensando en otra persona: un amigo, un familiar. (Now ask the questions aloud and answer about someone else.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'El libro de la promoción', coach: 'Tu pasado, tu presente, tus rasgos. Your past, your present, your traits.',
      steps: [
        { title: 'Quince años después · Fifteen years later', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos cada condicional: ¿cuándo es la condición y cuándo el resultado? Después tu alumno lee el texto en voz alta.', self: 'Escribe tu texto y toca «Revisar mi texto». Después repasa cada condicional: ¿cuándo es la condición y cuándo el resultado? (Check the time of the condition and of the result.)' } },
          { kind: 'write', title: 'Quince años después · Fifteen years later', situation: 'Irene prepara un libro de recuerdos de la promoción y pide a cada uno un texto breve con el título «Quince años después». Escribe el tuyo, como Lucía, como Daniel o como tú mismo, con una decisión real de tu vida. (Irene is putting together a memory book for the class and asks everyone for a short piece. Write yours as one of the characters or as yourself.)', task: [
            'Cuenta una decisión de tu pasado y cómo sería tu vida hoy sin ella: si no hubiera…, ahora… (mixta 1).',
            'Explica algo que salió mal por un rasgo tuyo: si fuera más / menos…, no habría… (mixta 2).',
            'Usa una vez la forma compacta: de haber + participio.',
            'Añade un pequeño reproche o un agradecimiento a un compañero.',
            'Cierra con una frase sobre el presente o el futuro. (End with a line about now or the future.)',
          ], starters: ['Quince años después…', 'Cuando decidí…, nadie lo entendió.', 'Si no hubiera…, ahora…', 'No todo salió bien:', 'Si yo fuera menos…, no habría…', 'De haber sabido…,', 'A … le hago un pequeño reproche:', 'Gracias a todos por…'],
            words: ['si no hubiera', 'ahora sería', 'hoy tendría', 'si fuera', 'no habría', 'de haber', 'me habría ahorrado', 'no me arrepiento', 'gracias a', 'por eso'],
            model: 'Quince años después. Cuando dejé Arquitectura en tercero, mis padres pensaron que me había vuelto loca. Hoy lo veo claro: [[si no hubiera dejado|violet]] la carrera, [[ahora sería|teal]] una arquitecta correcta y, probablemente, aburrida. Y [[si no hubiera abierto|violet]] la pastelería, [[no tendría|teal]] este oficio que me hace feliz cada mañana. No todo salió bien, claro. [[Si yo fuera|blue]] menos impulsiva, [[no habría firmado|orange]] aquel primer contrato de alquiler tan caro, que casi me arruina. [[De haber pedido|violet]] consejo a Irene, que siempre lee la letra pequeña, [[me habría ahorrado|orange]] muchos disgustos. A Daniel le hago un pequeño reproche: si viniera más a menudo a la pastelería, ya sabría que la tarta de guayaba es la mejor de la casa. Gracias a todos por estos quince años; espero que en la próxima reunión estemos todos, Felipe también.',
            minWords: 120,
            checks: [
              { label: 'Una condición pasada: si + hubiera / hubiese + participio', pattern: '(?<!\\p{L})si\\s+(?:\\p{L}+\\s+){0,2}?(?:hubiera|hubieras|hubiéramos|hubieran|hubiese|hubieses|hubiésemos|hubiesen)\\s+\\p{L}+(?:ado|ido|to|cho|so)(?!\\p{L})', tip: 'Cuenta una decisión pasada como condición: «Si no hubiera dejado la carrera…».' },
              { label: 'Un resultado de hoy: ahora / hoy + condicional simple', pattern: '(?<!\\p{L})(?:ahora|hoy)\\s+(?:\\p{L}+\\s+){0,2}?(?!habr)\\p{L}+(?:ría|rías|ríamos|rían)(?!\\p{L})', tip: 'Di cómo sería tu vida hoy: «…ahora sería…», «…hoy tendría…».' },
              { label: 'Un rasgo con resultado pasado: si + imperfecto de subjuntivo … habría + participio', pattern: '(?<!\\p{L})si\\s+(?:\\p{L}+\\s+){0,3}?(?!hubi)\\p{L}+(?:ara|aras|áramos|aran|iera|ieras|iéramos|ieran|uera|ueras|uéramos|ueran|ase|ases|asen|iese|ieses|iesen)(?!\\p{L})[^.]*?(?<!\\p{L})(?:habría|habrías|habríamos|habrían|hubiera|hubieras|hubiéramos|hubieran)\\s+\\p{L}+', tip: 'Explica un error con un rasgo tuyo: «Si yo fuera menos impulsiva, no habría firmado…».' },
              { label: 'La forma compacta: de + haber + participio', pattern: '(?<!\\p{L})de\\s+(?:no\\s+)?haber(?:lo|la|los|las|le|les|me|te|se|nos)?\\s+\\p{L}+(?:ado|ido|to|cho|so)(?!\\p{L})', tip: 'Usa una vez «de haber + participio»: «De haber pedido consejo…».' },
            ],
            warnings: [
              { pattern: '(?:^|[.!?¡¿]\\s*)si\\s+(?:no\\s+|me\\s+|te\\s+|lo\\s+|la\\s+|nos\\s+|yo\\s+)*(?:habría|habrías|habríamos|habrían|sería|tendría)(?!\\p{L})', why: 'Al empezar una condicional, tras **si** no va el condicional: «si **hubiera** sabido», «si **fuera**», «si **tuviera**».' },
            ] },
        ] },
      ],
    },
    {
      id: 'cerrar', label: 'Cerrar', icon: '✓', mascot: '/brand/mascot/standing.webp',
      title: 'Lo esencial', coach: '¿Qué te llevas hoy? What do you take away?',
      steps: [
        { title: 'Lo esencial · The essentials', blocks: [
          { kind: 'recap', items: [
            { tone: 'violet', label: 'MIXTA 1 · PASADO → AHORA', formula: 'si + hubiera + participio → condicional simple', example: 'Si Felipe no hubiera aceptado aquel trabajo, hoy estaría aquí.', caption: 'una decisión pasada cambia el presente', en: 'a different past produces a different present: regrets, relief, “what if”' },
            { tone: 'blue', label: 'MIXTA 2 · RASGO → PASADO', formula: 'si + imperfecto de subjuntivo → habría + participio', example: 'Si Daniel fuera más organizado, no habría perdido el vuelo.', caption: 'cómo eres explica lo que pasó', en: 'a lasting trait explains a past event: useful for self-criticism and gentle reproaches' },
            { tone: 'orange', label: 'EL RESULTADO PASADO Y SUS REGISTROS', formula: 'habría venido · hubiera venido · (coloquial) no venía', example: 'Si lo hubiera sabido, no habría venido.', caption: 'habría y hubiera son correctas; «venía», solo informal', en: 'habría and hubiera are both standard in the main clause; the imperfect indicative is colloquial' },
            { tone: 'violet', label: 'FORMA COMPACTA', formula: 'de + haber + participio = si + hubiera + participio', example: 'De haberlo sabido, habría traído las fotos.', caption: 'pronombre pegado: haberlo, haberse', en: 'a compact, slightly more careful if-clause; pronouns attach to haber' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Haz dos preguntas. ¿La condición es un **hecho pasado** (hubiera aceptado) o un **rasgo o situación que dura** (fuera, viviera)? ¿El resultado es **cómo son las cosas hoy** (sería, viviría) o **algo que ya pasó** (habría perdido)? Los marcadores ayudan: **ahora, hoy, todavía** → condicional simple; **anoche, esta mañana, en 2019** → condicional compuesto. Y tras «si», nunca condicional.', en: 'Ask two questions: is the condition a past event or a lasting trait or situation? Is the result about today or about something that already happened? Time markers help: ahora, hoy, todavía point to the simple conditional; anoche, esta mañana, a date point to the compound one. And never use the conditional right after si.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'Si no ___ el autobús nocturno, ahora estaría en casa durmiendo.', options: ['perdiera', 'habría perdido', 'hubiera perdido'], answer: 2, why: 'Condición pasada (perdió el autobús) y resultado actual: hubiera perdido → estaría.', en: 'If I hadn’t missed the night bus, I’d be at home asleep now.' },
            { prompt: 'Si mi hermana no fuera tan generosa, no me ___ su coche el verano pasado.', options: ['prestaría', 'habría prestado', 'prestara'], answer: 1, why: 'Rasgo (es generosa) y resultado pasado («el verano pasado»): habría prestado.', en: 'If my sister weren’t so generous, she wouldn’t have lent me her car last summer.' },
            { prompt: 'Si hubiéramos plantado el limonero hace tres años, ya ___ limones.', options: ['diera', 'daría', 'habría dado'], answer: 1, why: '«Ya» se refiere a ahora: resultado actual, condicional simple.', en: 'If we had planted the lemon tree three years ago, it would already be producing lemons.' },
            { prompt: '___ sabido que cerraban a las ocho, habríamos llegado antes.', options: ['De haber', 'Si habríamos', 'De hubiéramos'], answer: 0, why: 'De + haber + participio = si hubiéramos sabido. «Si habríamos» es incorrecto.', en: 'Had we known they closed at eight, we would have arrived earlier.' },
            { prompt: 'Si ___ más alto, habría jugado en el equipo de baloncesto del colegio.', options: ['fuera', 'era', 'sería'], answer: 0, why: 'La estatura es un rasgo estable: si + imperfecto de subjuntivo. Tras «si» no va el condicional, y «era» no expresa una condición irreal.', en: 'If I were taller, I would have played on the school basketball team.' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Ahora, otra familia. Now, another family.', blocks: [
          { kind: 'lead', text: 'Marisa es enfermera y su hermano Óscar busca trabajo. Los dos hablan de lo que pasó y de cómo sería todo hoy. Escribe las hipótesis.', en: 'Marisa is a nurse and her brother Óscar is looking for work. They talk about what happened and how things would be today. Write the hypotheses.' },
          { kind: 'rewrite', title: 'Marisa y Óscar · Marisa and Óscar', items: [
            { prompt: 'Hechos: Marisa no aprendió inglés de joven. Hoy no puede aceptar una oferta de un hospital de Toronto.', instruction: 'Empieza: «Si Marisa hubiera aprendido inglés de joven, hoy…».', accept: ['Si Marisa hubiera aprendido inglés de joven, hoy podría aceptar la oferta', 'Si Marisa hubiera aprendido inglés de joven, hoy podría aceptar una oferta de un hospital de Toronto', 'Si Marisa hubiera aprendido inglés de joven, hoy podría aceptar la oferta del hospital de Toronto', 'Si Marisa hubiera aprendido inglés de joven, hoy podría trabajar en Toronto', 'Si Marisa hubiera aprendido inglés de joven, hoy aceptaría la oferta', 'Si Marisa hubiera aprendido inglés de joven, hoy podría aceptar esa oferta'] },
            { prompt: 'Hechos: Óscar es muy tímido. El mes pasado no se presentó a una entrevista de trabajo.', instruction: 'Empieza: «Si Óscar no fuera…».', accept: ['Si Óscar no fuera tan tímido, se habría presentado a la entrevista', 'Si Óscar no fuera tan tímido, se habría presentado a la entrevista de trabajo', 'Si Óscar no fuera tan tímido, el mes pasado se habría presentado a la entrevista', 'Si Óscar no fuera tímido, se habría presentado a la entrevista', 'Si Óscar no fuera tan tímido, se hubiera presentado a la entrevista', 'Si Óscar no fuera tan tímido, se habría presentado a la entrevista el mes pasado', 'Si Óscar no fuera tan tímido, se habría presentado a una entrevista de trabajo'] },
            { prompt: 'Si Marisa hubiera visto el anuncio antes, habría pedido el puesto.', instruction: 'Usa la forma compacta. Empieza: «De haber visto el anuncio antes, Marisa…».', accept: ['De haber visto el anuncio antes, Marisa habría pedido el puesto', 'De haber visto el anuncio antes, Marisa hubiera pedido el puesto'] },
          ] },
        ] },
        { title: 'Ampliación · Registros y formas compactas · Registers and compact forms', mascot: '/brand/mascot/portrait.webp', coach: 'Opcional. Optional.', blocks: [
          { kind: 'lead', text: 'Para estudiantes fuertes o si queda tiempo: reconoce el registro de cada forma y elige la adecuada para cada situación.', en: 'For strong students or spare time: recognise the register of each form and choose the right one for the situation.' },
          { kind: 'choice', title: '¿Qué registro? · Which register?', items: [
            { prompt: 'Un amigo llega a una fiesta aburrida y dice: «Si lo sé, no vengo». ¿Qué expresa?', options: ['Una orden para los demás.', 'Una condición real para el futuro.', 'Una queja: «si lo hubiera sabido, no habría venido».'], answer: 2, why: 'Frase hecha coloquial: presente con valor de pasado irreal. Expresa una queja medio en broma.', en: 'A friend at a dull party says “Si lo sé, no vengo”: what does it express?' },
            { prompt: '¿En qué situación encaja «Si me lo hubieras dicho, te llevaba al aeropuerto»?', options: ['En un informe escrito para la empresa.', 'En ninguna: es incorrecta.', 'En una conversación informal entre amigos.'], answer: 2, why: 'El imperfecto de indicativo («te llevaba») con valor de condicional es propio de la conversación informal. En un texto formal: «te habría llevado».', en: 'Where does this sentence with “te llevaba” fit?' },
            { prompt: 'Carta formal de reclamación: «De haber recibido el aviso a tiempo, ___ el pedido».', options: ['habríamos cancelado', 'cancelamos', 'cancelábamos'], answer: 0, why: 'En un texto formal, el resultado pasado va en condicional compuesto. «Cancelábamos» es coloquial y «cancelamos» no es hipotético.', en: 'In a formal complaint letter, which form fits?' },
            { prompt: '«De ser cierto lo que dices, tendríamos un problema». ¿A qué equivale «de ser cierto»?', options: ['Como es cierto', 'Si fuera cierto', 'Si hubiera sido cierto'], answer: 1, why: 'De + infinitivo simple equivale a si + imperfecto de subjuntivo: una hipótesis sobre el presente.', en: 'What does “de ser cierto” correspond to?' },
          ] },
          { kind: 'teacher', text: 'Paso opcional: solo si queda tiempo o para estudiantes fuertes. Tu alumno cuenta la misma anécdota en dos registros: a un amigo («si lo hubiera sabido, no venía») y en un correo formal («de haberlo sabido, habría…»).' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Extensión: Clase 239 · Condiciones con otros nexos', text: 'Antes de seguir, una clase de extensión con otras formas de poner condiciones: «**en caso de que**», «**siempre que**», «**con tal de que**», «**a no ser que**». Son muy útiles para negociar y para escribir textos formales.', en: 'Before moving on, an extension class with other ways to set conditions: in case, as long as, provided that, unless. They are very useful for negotiating and for formal writing.', href: '/gramatica/condiciones-con-otros-nexos', label: 'Ir a la clase 239' },
          { kind: 'link', title: 'Siguiente: Clase 136 · Como si + imperfecto / pluscuamperfecto subjuntivo', text: 'Ya combinas tiempos en las condicionales: una condición pasada con un resultado presente, y un rasgo actual con un resultado pasado. En la clase 136 usas los mismos imperfecto y pluscuamperfecto de subjuntivo después de «como si», para comparar con algo irreal: «Habla **como si fuera** el jefe», «Me miró **como si** nunca me **hubiera visto**». Es el paso natural: las mismas formas y la misma lógica temporal, ahora para comparar.', en: 'You can now mix time frames in conditionals: a past condition with a present result, and a present trait with a past result. In class 136 you use the same imperfect and pluperfect subjunctive after como si to compare with something unreal: “He talks as if he were the boss”, “She looked at me as if she had never seen me”. It is the natural next step: the same forms and time logic, now for comparisons.', href: '/gramatica/como-si-imperfecto-pluscuamperfecto-subjuntivo', label: 'Ir a la clase 136' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Qué decisión de hace años explica tu vida de hoy, y qué rasgo tuyo te ha costado algo?». Respuesta esperada: una mixta de cada tipo. Tarea: el texto de Escribir sobre una decisión real.' },
        ] },
      ],
    },
  ],
};
