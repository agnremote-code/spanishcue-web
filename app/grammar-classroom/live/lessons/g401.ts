import type { LiveLesson } from '../types';

/**
 * Lesson 401 · B1 · Concesivas iniciales: aunque + indicativo (course unit G101).
 * One scene runs through the class: Irene Salas, a graphic designer, visits an
 * old apartment in the city centre with her friend Gabriel Ortiz (an architect)
 * and the estate agent, señora Molina (usted). The apartment has real drawbacks
 * (fourth floor without a lift, a small kitchen, a rent above her budget) and
 * clear advantages (light, quiet bedroom, ten minutes on foot from her studio).
 * Irene takes it anyway. In the voice message Irene (Colombian voice, tú)
 * tells Gabriel she has signed and asks him to help with the move.
 * Content: aunque + indicativo to concede a fact the speaker presents as real
 * (aunque es caro, me gusta; aunque llovía, salimos) in front position (with a
 * comma) or after the main clause (a reservation added at the end); the
 * obstacle goes with «aunque», the result with «pero / sin embargo / aun así»
 * (punctuation and register); a pesar de + noun / infinitive (same subject) /
 * que + indicativo. Mistakes: *aunque…, pero…; *aunque + noun; *a pesar el /
 * *a pesar de el; *a pesar de que + infinitive; «sin embargo» after a comma;
 * *aún así; «aunque» with a cause (→ como / porque).
 * Aunque + subjuntivo (G137, B2, lesson 220) and «y eso que» appear only as a
 * recognition preview in the Ampliación. Lesson 217 (G114) later adds ni… ni
 * and more practice with connectors; here the focus is the concessive clause.
 */
export const lesson: LiveLesson = {
  id: 401,
  level: 'B1',
  title: 'Concesivas iniciales: aunque + indicativo',
  subtitle: 'Reconocer un inconveniente real y mantener tu decisión: «Aunque es caro, me gusta», «a pesar del precio», «aun así».',
  legend: [
    { tone: 'blue', label: 'AUNQUE + indicativo · el obstáculo real (the drawback you admit)' },
    { tone: 'orange', label: 'PERO · SIN EMBARGO · AUN ASÍ · lo que pasa igualmente (the result)' },
    { tone: 'teal', label: 'A PESAR DE · + nombre / infinitivo / que + indicativo (in spite of)' },
  ],
  optionNotes: {
    'Pero': '«Pero» va con el resultado, no con el obstáculo, y no lleva coma detrás: «Es caro, pero me gusta».',
    'Porque': '«Porque» da una razón: las dos ideas van en la misma dirección. Aquí hay un obstáculo y, aun así, pasa algo: concesión.',
    'de el': '«De» + «el» se une siempre: **del**. «A pesar del tráfico».',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Un obstáculo que no cambia la decisión', coach: 'Admites el problema y sigues adelante. You admit the problem and go ahead.',
      steps: [
        { title: 'Cuatro pisos sin ascensor · Four floors, no lift', blocks: [
          { kind: 'lead', text: 'Irene Salas busca apartamento en el centro. Hoy visita uno con su amigo Gabriel: está en un cuarto piso sin ascensor y el alquiler es más alto de lo que quería pagar. Pero tiene mucha luz y está a diez minutos a pie de su trabajo. Irene sube, mira y dice: «**Aunque es caro, me gusta**». Hoy aprendes a reconocer un inconveniente real sin cambiar de decisión.', en: 'Irene Salas is looking for an apartment in the centre. Today she visits one with her friend Gabriel: it is on the fourth floor with no lift, and the rent is higher than she wanted to pay. But it gets lots of light and it is a ten-minute walk from her work. Irene goes up, looks around and says: “Even though it’s expensive, I like it.” Today you learn to admit a real drawback without changing your decision.' },
          { kind: 'guide', text: { teacher: 'Tú lees la frase de Irene en dos partes y tu alumno repite. Después tu alumno dice qué parte es el problema y qué parte es la decisión.', self: 'Lee la frase de Irene en voz alta. ¿Qué parte es el problema? ¿Qué parte es la decisión? (Which part is the problem, which is the decision?)' } },
          { kind: 'compare', title: 'Una frase, dos partes · One sentence, two parts', columns: [
            { tone: 'blue', label: 'EL OBSTÁCULO · aunque + indicativo', sentence: '[[Aunque es caro|blue]],…', idea: 'Un dato real que Irene acepta: el apartamento es caro. Lo normal sería no alquilarlo.', en: 'Even though it’s expensive… (a real fact she accepts; normally it would stop her)' },
            { tone: 'orange', label: 'LO QUE PASA IGUALMENTE', sentence: '…me gusta.', idea: 'La decisión no cambia: el obstáculo no tiene fuerza suficiente.', en: '…I like it. (the decision stands: the obstacle is not strong enough)' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'En «Aunque es caro, me gusta», ¿el apartamento es caro?', options: ['No sabemos nada del precio.', 'Sí: es un dato real y Irene lo sabe.', 'No: es solo una posibilidad.'], answer: 1, why: 'Con «aunque» + indicativo presentas el obstáculo como un hecho real: «es caro».', en: 'In “Aunque es caro, me gusta”, is the apartment expensive?' },
            { prompt: 'Aunque no hay ascensor, Irene ___ el apartamento.', options: ['quiere', 'no visita', 'no quiere'], answer: 0, why: 'Después de «aunque» viene un obstáculo; la otra parte dice lo contrario de lo esperado: lo quiere igualmente.', en: 'Even though there is no lift, Irene wants the apartment.' },
          ] },
        ] },
        { title: 'La forma y el orden · Form and order', mascot: '/brand/mascot/studying.webp', coach: 'Delante o detrás. In front or after.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'AUNQUE + INDICATIVO', question: '¿Qué inconveniente reconoces? ¿Y qué pasa igualmente?', en: 'What drawback do you admit? And what happens anyway?', formula: ['Aunque + indicativo, + idea principal', 'idea principal + , aunque + indicativo'],
            meaning: 'Con **aunque + indicativo** presentas un hecho que conoces y que aceptas como verdadero (presente, pasado o futuro), pero que no impide la idea principal. Ya conoces todos estos tiempos: el indicativo después de «aunque» sigue el tiempo real del hecho.',
            examples: [
              { es: '[[Aunque la cocina es pequeña|blue]], tiene todo lo necesario.', en: 'Although the kitchen is small, it has everything you need.' },
              { es: '[[Aunque llovía|blue]], Irene fue a ver el apartamento.', en: 'Although it was raining, Irene went to see the apartment.' },
              { es: 'Irene firmó el contrato, [[aunque el dueño no bajó el precio|blue]].', en: 'Irene signed the contract, although the owner didn’t lower the price.' },
            ],
            note: 'Si «aunque» va **delante**, pon coma al final de esa parte. Si va **detrás**, normalmente también hay coma antes de «aunque», y la frase suena a un comentario que añades al final: «Me gusta, aunque es un poco caro».' },
          { kind: 'table', title: 'Dos posiciones, el mismo sentido · Two positions, same meaning', head: ['Delante: el obstáculo primero', 'Detrás: la idea principal primero'], rows: [
            ['[[Aunque es un cuarto piso|blue]], subo bien. (Although it’s on the fourth floor, I manage the stairs.)', 'Subo bien, [[aunque es un cuarto piso|blue]].'],
            ['[[Aunque el salón es antiguo|blue]], tiene mucho encanto. (Although the living room is old, it’s very charming.)', 'El salón tiene mucho encanto, [[aunque es antiguo|blue]].'],
            ['[[Aunque Gabriel estaba cansado|blue]], subió con Irene. (Although Gabriel was tired, he went up with Irene.)', 'Gabriel subió con Irene, [[aunque estaba cansado|blue]].'],
          ], note: 'Delante, el obstáculo prepara la sorpresa. Detrás, suena más a una reserva o un «pequeño pero». Las dos posiciones son correctas.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Aunque ayer ___ mucho calor, Irene subió los cuatro pisos.', options: ['hace', 'hizo', 'hará'], answer: 1, why: 'Después de «aunque» va el tiempo real del hecho: ayer → pasado, hizo.', en: 'Although it was very hot yesterday, Irene climbed the four floors.' },
            { prompt: '¿Qué frase tiene la puntuación correcta?', options: ['Aunque es antiguo, el edificio está bien.', 'Aunque, es antiguo el edificio está bien.', 'Aunque es antiguo el edificio está bien.'], answer: 0, why: 'Con «aunque» delante, la coma va al final del obstáculo: «Aunque es antiguo, …».', en: 'Which sentence has the right punctuation?' },
          ] },
        ] },
        { title: 'Pero, sin embargo, aun así · Three ways to say “but”', mascot: '/brand/mascot/standing.webp', coach: '¿Dónde va el obstáculo? Where does the obstacle go?', blocks: [
          { kind: 'compare', title: 'El mismo mensaje, cuatro formas · Same message, four forms', columns: [
            { tone: 'blue', label: 'AUNQUE · con el obstáculo', sentence: '[[Aunque es caro|blue]], me gusta.', idea: 'Una sola frase. «Aunque» presenta el obstáculo.', en: 'Even though it’s expensive, I like it.' },
            { tone: 'orange', label: 'PERO · con el resultado', sentence: 'Es caro, [[pero|orange]] me gusta.', idea: 'Una sola frase, coma antes de «pero». Es el más frecuente, en todos los registros.', en: 'It’s expensive, but I like it.' },
            { tone: 'orange', label: 'SIN EMBARGO · entre dos frases', sentence: 'Es caro. [[Sin embargo|orange]], me gusta.', idea: 'Después de punto o punto y coma, y con coma detrás. Más formal; muy frecuente por escrito.', en: 'It’s expensive. However, I like it. (more formal, typical in writing)' },
            { tone: 'orange', label: 'AUN ASÍ · incluso así', sentence: 'Es caro. [[Aun así|orange]], me gusta.', idea: 'Insiste: conoces el problema y no cambias de idea. Oral y escrito. Sin tilde.', en: 'It’s expensive. Even so, I like it. (stresses that you know and don’t care)' },
          ] },
          { kind: 'decide', title: '¿Qué conector uso?', steps: [
            { q: '¿La palabra va con el obstáculo (el problema)?', yes: 'Usa **aunque**: «Aunque es caro, …».', no: 'next' },
            { q: '¿Unes las dos ideas en una sola frase, con coma?', yes: 'Usa **pero**: «Es caro, pero me gusta».', no: 'next' },
            { q: '¿Empiezas una frase nueva después de punto (o de punto y coma)?', yes: 'Usa **sin embargo** (más formal) o **aun así** (insistes en tu decisión), con coma detrás.', no: 'Lee otra vez: ¿dónde está el obstáculo y dónde está el resultado?' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'Un solo conector · Only one connector', text: '«Aunque» y «pero» no van juntos en la misma frase: «Aunque es caro, me gusta» o «Es caro, pero me gusta». Con «pero» sí puedes añadir «aun así» para insistir: «Es caro, pero aun así me gusta».', en: '“Aunque” and “pero” don’t go together in the same sentence: choose one. With “pero” you can add “aun así” to insist: “It’s expensive, but even so I like it.”' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'La cocina es pequeña, ___ tiene horno y nevera nueva.', options: ['aun así', 'pero', 'sin embargo'], answer: 1, why: 'Una sola frase con coma y la idea del resultado: pero.', en: 'The kitchen is small, but it has an oven and a new fridge.' },
            { prompt: 'Informe de la agencia: «El edificio no tiene ascensor. ___, está en una zona excelente».', options: ['Sin embargo', 'Pero aunque', 'Aunque'], answer: 0, why: 'Frase nueva después de punto, con coma detrás, en un texto formal: sin embargo.', en: 'Agency report: “The building has no lift. However, it is in an excellent area.”' },
            { prompt: 'Gabriel: «Son novecientos al mes, Irene». Irene: «Ya lo sé. ___, me lo quedo».', options: ['Pero', 'Aun así', 'Aunque'], answer: 1, why: 'Irene conoce el precio e insiste en su decisión: aun así, con coma.', en: 'Gabriel: “It’s nine hundred a month, Irene.” Irene: “I know. Even so, I’ll take it.”' },
          ] },
        ] },
        { title: 'A pesar de · In spite of', mascot: '/brand/mascot/speaking.webp', coach: 'Nombre, infinitivo o que. Noun, infinitive or que.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'A PESAR DE', question: '¿Qué viene después: un nombre, un verbo o una frase completa?', en: 'What comes next: a noun, a verb or a full clause?', formula: ['a pesar de + nombre', 'a pesar de + infinitivo (mismo sujeto)', 'a pesar de que + indicativo'],
            meaning: '**A pesar de** tiene el mismo valor que «aunque», pero cambia la forma de lo que va detrás. Con un nombre: «a pesar **del** precio» (de + el = del). Con un infinitivo, cuando el sujeto es el mismo en las dos partes. Con «**que**» + indicativo, como «aunque»; suena un poco más formal.',
            examples: [
              { es: '[[A pesar del precio|teal]], Irene quiere el apartamento.', en: 'In spite of the price, Irene wants the apartment.' },
              { es: '[[A pesar de vivir en un cuarto piso|teal]], Irene no necesita ascensor.', en: 'Despite living on the fourth floor, Irene doesn’t need a lift. (same subject: Irene)' },
              { es: '[[A pesar de que el edificio es antiguo|teal]], las ventanas son nuevas.', en: 'Even though the building is old, the windows are new.' },
            ] },
          { kind: 'table', title: 'Aunque y a pesar de · Aunque and a pesar de', head: ['Aunque + verbo', 'A pesar de + …'], rows: [
            ['Aunque **llueve**, salgo.', 'A pesar **de la lluvia**, salgo. (nombre)'],
            ['Aunque **estoy** cansada, termino. (yo… yo)', 'A pesar **de estar** cansada, termino. (infinitivo: mismo sujeto)'],
            ['Aunque **el alquiler es** alto, firmo. (el alquiler… yo)', 'A pesar **de que el alquiler es** alto, firmo. (sujetos distintos: que + verbo)'],
          ], note: '«Aunque» nunca va con un nombre solo: no «*aunque el precio», sino «a pesar del precio». Y «a pesar de que» siempre lleva un verbo conjugado: no «*a pesar de que ser».' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'A pesar ___ ruido de la calle, el dormitorio es tranquilo.', options: ['el', 'de el', 'del'], answer: 2, why: 'De + el = del. Siempre: «a pesar del ruido».', en: 'In spite of the street noise, the bedroom is quiet.' },
            { prompt: 'A pesar de ___ arquitecto, Gabriel no vio el problema de la humedad.', options: ['que ser', 'ser', 'es'], answer: 1, why: 'El sujeto es el mismo (Gabriel… Gabriel): a pesar de + infinitivo.', en: 'Despite being an architect, Gabriel didn’t notice the damp problem.' },
            { prompt: 'A pesar de ___ la cocina es pequeña, Irene cocina todos los días.', options: ['del', 'ser', 'que'], answer: 2, why: 'Después viene una frase completa con otro sujeto (la cocina es…): a pesar de que + indicativo.', en: 'Even though the kitchen is small, Irene cooks every day.' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Un obstáculo, un conector. One obstacle, one connector.', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la frase con el error y tu alumno explica qué falla antes de ver la corrección: ¿sobra un conector?, ¿falta un verbo?, ¿es de verdad un obstáculo?', self: 'Lee cada frase y piensa qué falla antes de ver la corrección. (Think about what is wrong before you look.)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Aunque es caro, pero me gusta.', right: 'Aunque es caro, me gusta. / Es caro, pero me gusta.', why: 'Dos conectores para una sola concesión. «Aunque» va con el obstáculo; «pero», con el resultado: elige uno. (In English you can’t say “although… but” either.)' },
            { wrong: 'Aunque el precio, me gusta.', right: 'A pesar del precio, me gusta.', why: '«Aunque» necesita un verbo conjugado. Con un nombre solo, usa «a pesar de». (Aunque + verb; a pesar de + noun.)' },
            { wrong: 'A pesar de que ser pequeño, el apartamento me encanta.', right: 'A pesar de ser pequeño, el apartamento me encanta.', why: 'Con infinitivo, sin «que». «A pesar de que» va con verbo conjugado: «a pesar de que es pequeño».' },
            { wrong: 'Es caro, sin embargo me gusta.', right: 'Es caro. Sin embargo, me gusta. / Es caro; sin embargo, me gusta.', why: '«Sin embargo» une dos frases: punto o punto y coma delante, coma detrás. Para una coma sola, usa «pero».' },
            { wrong: 'Aunque está cerca de mi trabajo, voy a pie.', right: 'Como está cerca de mi trabajo, voy a pie.', why: 'Aquí no hay obstáculo: estar cerca es una razón para ir a pie. Para una causa, usa «como» (delante) o «porque» (detrás).' },
            { wrong: 'Aún así, firmo el contrato.', right: 'Aun así, firmo el contrato.', why: '«Aun así» significa «incluso así» (even so) y se escribe sin tilde. «Aún» con tilde es «todavía».' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué frase es correcta?', options: ['Aunque no ascensor, subo bien.', 'Aunque no hay ascensor, pero subo bien.', 'Aunque no hay ascensor, subo bien.'], answer: 2, why: '«Aunque» + verbo conjugado, y sin «pero» en la otra parte.', en: 'Which sentence is correct?' },
            { prompt: '___ tiene mucha luz, Irene trabaja en el salón.', options: ['Como', 'A pesar de', 'Aunque'], answer: 0, why: 'La luz es una razón, no un obstáculo: como.', en: 'As it gets a lot of light, Irene works in the living room.' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno dice una frase real sobre su casa con «aunque» delante y la misma idea con «pero»: «Aunque mi calle es ruidosa, duermo bien» → «Mi calle es ruidosa, pero duermo bien».' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'La visita al apartamento', coach: 'Toca las expresiones marcadas. Tap the marked expressions.',
      steps: [
        { title: 'En el cuarto piso · On the fourth floor', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres la señora Molina y Gabriel; tu alumno es Irene. Después tu alumno toca cada expresión marcada y dice cuál es el obstáculo en cada caso.', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada y di cuál es el obstáculo. (Read aloud, then tap each marked expression.)' } },
          { kind: 'explore', title: 'Me lo quedo', setting: 'Un sábado por la mañana, en un apartamento antiguo del centro. La señora Molina, de la agencia, enseña el apartamento a Irene y a Gabriel. Irene y la agente usan usted; Irene y Gabriel, tú. (A Saturday morning in an old apartment in the centre. The estate agent shows it to Irene and Gabriel.)', lines: [
            { who: 'Sra. Molina', text: 'Bueno, este es el apartamento. Ya sé que son cuatro pisos sin ascensor. [[Sin embargo|orange]], miren cuánta luz entra.', en: 'Well, this is the apartment. I know it’s four floors with no lift. However, look how much light comes in.' },
            { who: 'Irene', text: '¡Es precioso! [[Aunque llegué arriba sin aliento|blue]], vale la pena.', en: 'It’s lovely! Even though I got to the top out of breath, it’s worth it.' },
            { who: 'Gabriel', text: 'El salón es muy amplio, [[aunque la cocina es bastante pequeña|blue]].', en: 'The living room is very spacious, although the kitchen is quite small.' },
            { who: 'Sra. Molina', text: 'Es pequeña, [[pero|orange]] tiene todo lo necesario: horno, nevera y una lavadora nueva.', en: 'It’s small, but it has everything you need: an oven, a fridge and a new washing machine.' },
            { who: 'Irene', text: '¿Y cuánto es el alquiler, señora Molina?', en: 'And how much is the rent, Mrs Molina?' },
            { who: 'Sra. Molina', text: 'Novecientos al mes, con el agua incluida.', en: 'Nine hundred a month, water included.' },
            { who: 'Gabriel', text: 'Es más de lo que querías pagar, Irene… [[Aun así|orange]], te veo muy contenta.', en: 'It’s more than you wanted to pay, Irene… Even so, you look very happy.' },
            { who: 'Irene', text: 'Es verdad. [[A pesar de que es caro|teal]], está a diez minutos a pie del estudio. Me ahorro el autobús.', en: 'It’s true. Even though it’s expensive, it’s a ten-minute walk from the studio. I save on the bus.' },
            { who: 'Gabriel', text: '¿Y el ruido? Esta calle está llena de bares.', en: 'And the noise? This street is full of bars.' },
            { who: 'Sra. Molina', text: '[[A pesar de estar en pleno centro|teal]], este apartamento es muy tranquilo: el dormitorio da al patio.', en: 'Despite being right in the centre, this apartment is very quiet: the bedroom faces the courtyard.' },
            { who: 'Irene', text: 'Mire, [[a pesar de las escaleras|teal]], me encanta. Me lo quedo. ¿Cuándo podemos firmar?', en: 'Look, in spite of the stairs, I love it. I’ll take it. When can we sign?' },
          ], notes: {
            'Sin embargo': 'Empieza una frase nueva, después de punto, con coma detrás. La agente habla con cuidado, en un registro un poco formal.',
            'Aunque llegué arriba sin aliento': '«Aunque» + indefinido: un hecho real del pasado (sin aliento = out of breath). La idea principal va en presente: vale la pena.',
            'aunque la cocina es bastante pequeña': '«Aunque» detrás de la idea principal: Gabriel añade una reserva al final. Lleva coma antes.',
            'pero': '«Pero» va con el resultado (tiene todo lo necesario). En una sola frase, con coma delante.',
            'Aun así': 'Even so. Gabriel conoce el problema (el precio) y ve que Irene no cambia de idea. Sin tilde: aun = incluso.',
            'A pesar de que es caro': 'A pesar de que + indicativo: igual que «aunque es caro», pero suena un poco más formal.',
            'A pesar de estar en pleno centro': 'A pesar de + infinitivo: el sujeto de «estar» y de «es» es el mismo, el apartamento.',
            'a pesar de las escaleras': 'A pesar de + nombre: no hay verbo después. No se puede decir «aunque las escaleras».',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Qué problemas tiene el apartamento?', options: ['Es ruidoso y no tiene lavadora.', 'No tiene luz y está lejos del estudio.', 'No hay ascensor, la cocina es pequeña y es caro.'], answer: 2, why: 'Cuatro pisos sin ascensor, «la cocina es bastante pequeña» y el alquiler es «más de lo que querías pagar».', en: 'What problems does the apartment have?' },
            { prompt: '¿Por qué es tranquilo el apartamento?', options: ['Porque está lejos del centro.', 'Porque el dormitorio da al patio.', 'Porque la calle no tiene bares.'], answer: 1, why: '«Este apartamento es muy tranquilo: el dormitorio da al patio».', en: 'Why is the apartment quiet?' },
            { prompt: '¿Qué decide Irene?', options: ['Pide una semana para pensar.', 'Busca otro apartamento con ascensor.', 'Se queda con el apartamento.'], answer: 2, why: '«A pesar de las escaleras, me encanta. Me lo quedo».', en: 'What does Irene decide?' },
          ] },
        ] },
        { title: '¿Obstáculo o decisión? · Obstacle or decision?', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'classify', title: 'Las ideas de la visita · Ideas from the visit', categories: [
            { id: 'obstaculo', label: 'EL OBSTÁCULO · va con aunque / a pesar de', tone: 'blue' },
            { id: 'resultado', label: 'LO QUE PASA IGUALMENTE · va con pero / aun así', tone: 'orange' },
          ], items: [
            { text: 'Son cuatro pisos sin ascensor.', answer: 'obstaculo', why: 'Es el problema que podría frenar a Irene.' },
            { text: 'Irene se queda con el apartamento.', answer: 'resultado', why: 'Es la decisión: pasa a pesar de todo.' },
            { text: 'El alquiler es más alto de lo que quería pagar.', answer: 'obstaculo', why: 'Un inconveniente real: el precio.' },
            { text: 'La cocina tiene todo lo necesario.', answer: 'resultado', why: 'Es lo positivo que pesa más que el tamaño.' },
            { text: 'La calle está llena de bares.', answer: 'obstaculo', why: 'Podría ser un problema de ruido.' },
            { text: 'El dormitorio es muy tranquilo.', answer: 'resultado', why: 'Es lo que pasa igualmente, aunque el apartamento está en el centro.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: tu alumno une dos ideas de la lista con «aunque» y después con «pero»: «Aunque la calle está llena de bares, el dormitorio es tranquilo» / «La calle está llena de bares, pero el dormitorio es tranquilo».' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Aunque con el obstáculo; pero con el resultado.',
      steps: [
        { title: 'La mudanza de Irene · Irene’s move', blocks: [
          { kind: 'choice', items: [
            { context: 'Irene habla con su hermana. (Irene talks to her sister.)', prompt: '___ el alquiler es alto, voy a firmar el contrato.', options: ['Aunque', 'Pero', 'Porque'], answer: 0, why: 'El alquiler alto es el obstáculo y la decisión no cambia: «aunque» va con el obstáculo.', en: 'Even though the rent is high, I’m going to sign the contract.' },
            { context: 'El informe de la agencia. (The agency report.)', prompt: 'El edificio es antiguo. ___, las ventanas son nuevas y no entra ruido.', options: ['Pero aunque', 'Sin embargo', 'A pesar de'], answer: 1, why: 'Frase nueva después de punto y con coma detrás, en un texto formal: sin embargo.', en: 'The building is old. However, the windows are new and no noise comes in.' },
            { context: 'El día de la mudanza. (Moving day.)', prompt: '___ las escaleras, la madre de Irene sube sin parar.', options: ['A pesar de que', 'Aunque', 'A pesar de'], answer: 2, why: 'Después viene un nombre (las escaleras), sin verbo: a pesar de.', en: 'In spite of the stairs, Irene’s mother goes up without stopping.' },
            { context: 'Por la noche. (In the evening.)', prompt: 'A pesar de ___ muy cansada, Irene monta la cama esa misma noche.', options: ['está', 'estar', 'que está'], answer: 1, why: 'El sujeto es el mismo (Irene está cansada, Irene monta la cama): infinitivo, estar.', en: 'Despite being very tired, Irene puts the bed together that same night.' },
            { context: 'Irene le escribe a Gabriel. (Irene writes to Gabriel.)', prompt: 'El dueño no quiso bajar el precio. ___, firmé el contrato.', options: ['Aun así', 'Porque', 'Aunque'], answer: 0, why: 'Irene conoce el problema e insiste: frase nueva con «aun así» y coma.', en: 'The owner didn’t want to lower the price. Even so, I signed the contract.' },
          ] },
        ] },
        { title: '¿Aunque o como? · Obstacle or reason?', blocks: [
          { kind: 'classify', title: '¿Qué conector falta? · Which connector is missing?', categories: [
            { id: 'concesion', label: 'AUNQUE · un obstáculo, pero pasa igual', tone: 'blue' },
            { id: 'causa', label: 'COMO / PORQUE · una razón, todo encaja', tone: 'neutral' },
          ], items: [
            { text: 'Irene va a pie al estudio ___ llueve mucho.', answer: 'concesion', why: 'La lluvia podría impedir ir a pie, y aun así va: aunque.' },
            { text: '___ el balcón es pequeño, Irene pone dos plantas y una silla.', answer: 'concesion', why: 'Un balcón pequeño es un obstáculo, y aun así pone cosas: aunque.' },
            { text: 'Irene duerme muy bien ___ el dormitorio da al patio.', answer: 'causa', why: 'El patio explica por qué duerme bien: porque.' },
            { text: '___ ya tiene las llaves, Irene todavía duerme en casa de su madre.', answer: 'concesion', why: 'Lo esperado es dormir ya en su apartamento: aunque.' },
            { text: '___ es su mejor amigo, Gabriel la ayuda con las cajas.', answer: 'causa', why: 'Es la razón de la ayuda. Delante, una causa va con «como».' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Aunque el alquiler es alto, pero Irene está contenta.', ok: false, options: ['Aunque el alquiler es alto, Irene está contenta.', 'Aunque el alquiler es alto, sin embargo Irene está contenta.', 'Aunque el alquiler es alto, porque Irene está contenta.'], answer: 0, why: 'Una sola concesión, un solo conector: «aunque» ya presenta el obstáculo; sobra «pero».' },
            { sentence: 'A pesar del ruido de la calle, Irene duerme bien.', ok: true, why: 'Correcta: a pesar de + nombre, con «del» (de + el).' },
            { sentence: 'Aunque la mudanza, Irene fue a trabajar el lunes.', ok: false, options: ['A pesar la mudanza, Irene fue a trabajar el lunes.', 'Aunque de la mudanza, Irene fue a trabajar el lunes.', 'A pesar de la mudanza, Irene fue a trabajar el lunes.'], answer: 2, why: 'Después viene un nombre sin verbo: «a pesar de la mudanza». «Aunque» necesita un verbo conjugado.' },
            { sentence: 'Los muebles llegaron tarde, sin embargo Irene terminó a tiempo.', ok: false, options: ['Los muebles llegaron tarde; sin embargo, Irene terminó a tiempo.', 'Los muebles llegaron tarde sin embargo Irene terminó a tiempo.', 'Los muebles llegaron tarde, sin embargo, Irene terminó a tiempo.'], answer: 0, why: '«Sin embargo» une dos frases: punto y coma (o punto) delante y coma detrás.' },
            { sentence: 'Aún así, Irene no cambia de idea.', ok: false, options: ['Aun así Irene, no cambia de idea.', 'Aun así, Irene no cambia de idea.', 'Aunque así, Irene no cambia de idea.'], answer: 1, why: '«Aun así» (even so) se escribe sin tilde; la coma va justo detrás.' },
            { sentence: 'A pesar de que no tenía camión, Irene se mudó el sábado.', ok: true, why: 'Correcta: a pesar de que + indicativo (tenía), con un hecho real.' },
          ] },
        ] },
        { title: 'Irene llama a su madre · Irene calls her mother', blocks: [
          { kind: 'chat-fill', title: 'Una llamada de teléfono · A phone call', lines: [
            { who: 'Madre', text: '¿Y por fin alquilaste el apartamento del centro?' },
            { who: 'Irene', text: 'Sí, mamá. ___ es un poco caro, me encanta.', options: ['Pero', 'A pesar de', 'Aunque'], answer: 2, why: 'El precio es el obstáculo y va delante con verbo conjugado (es): aunque.' },
            { who: 'Madre', text: 'Pero es un cuarto piso sin ascensor, hija. ¡Con todas tus cajas!' },
            { who: 'Irene', text: 'Ya lo sé. ___, está a diez minutos del trabajo.', options: ['Aunque', 'Aun así', 'A pesar de'], answer: 1, why: 'Irene acepta el problema que dice su madre e insiste en su decisión: aun así, con coma.' },
            { who: 'Madre', text: 'Bueno… ¿y la cocina?' },
            { who: 'Irene', text: 'A pesar de ___ pequeña, tiene todo lo necesario.', options: ['es', 'que es', 'ser'], answer: 2, why: 'La cocina es pequeña y la cocina tiene todo: mismo sujeto, infinitivo.' },
            { who: 'Madre', text: '¿Y vas a poder dormir con el ruido del centro?' },
            { who: 'Irene', text: 'Sí. ___ que el edificio está en el centro, el dormitorio es muy tranquilo.', options: ['A pesar de', 'Sin embargo', 'Aunque'], answer: 0, why: 'Delante de «que» + verbo conjugado: a pesar de que está.' },
            { who: 'Madre', text: 'Bueno, hija, si tú estás contenta… ¿Y cuándo te mudas?' },
            { who: 'Irene', text: 'El sábado, ___ todavía no tengo camión.', options: ['sin embargo', 'aunque', 'a pesar de'], answer: 1, why: '«Aunque» detrás de la idea principal, con verbo conjugado (tengo): una reserva al final.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['Aunque', 'es', 'pequeño,', 'me', 'encanta', 'el', 'balcón'], accept: ['Aunque es pequeño, me encanta el balcón', 'Aunque es pequeño, el balcón me encanta'], en: 'Although it’s small, I love the balcony.' },
            { tiles: ['A', 'pesar', 'de', 'la', 'lluvia,', 'hicimos', 'la', 'mudanza'], accept: ['A pesar de la lluvia, hicimos la mudanza'], en: 'In spite of the rain, we did the move.' },
            { tiles: ['Irene', 'duerme', 'bien', 'aunque', 'vive', 'en', 'el', 'centro'], accept: ['Irene duerme bien aunque vive en el centro', 'Aunque vive en el centro Irene duerme bien', 'Aunque Irene vive en el centro duerme bien'], en: 'Irene sleeps well although she lives in the centre.' },
          ] },
        ] },
        { title: 'Transforma · Rewrite', blocks: [
          { kind: 'rewrite', title: 'Otro conector, el mismo mensaje · Another connector, same message', items: [
            { prompt: 'El apartamento es antiguo, pero está muy bien cuidado.', instruction: 'Reescribe con «aunque» al principio.', accept: ['Aunque el apartamento es antiguo, está muy bien cuidado', 'Aunque es antiguo, el apartamento está muy bien cuidado'] },
            { prompt: 'Aunque llovía, cargamos el camión.', instruction: 'Usa «a pesar de» + nombre (la lluvia).', accept: ['A pesar de la lluvia, cargamos el camión', 'Cargamos el camión a pesar de la lluvia'] },
            { prompt: 'Aunque estaba cansada, Irene pintó el salón.', instruction: 'Usa «a pesar de» + infinitivo.', accept: ['A pesar de estar cansada, Irene pintó el salón', 'Irene pintó el salón a pesar de estar cansada'] },
            { prompt: 'La nevera es vieja, pero funciona perfectamente.', instruction: 'Escribe dos frases unidas con «sin embargo».', accept: ['La nevera es vieja. Sin embargo, funciona perfectamente', 'La nevera es vieja; sin embargo, funciona perfectamente'] },
            { prompt: 'Gabriel tiene la espalda mal, pero ayuda con las cajas.', instruction: 'Usa «aunque» detrás de la idea principal. Empieza con «Gabriel ayuda».', accept: ['Gabriel ayuda con las cajas, aunque tiene la espalda mal', 'Gabriel ayuda con las cajas aunque tiene la espalda mal'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno dice tres frases sobre una compra o una decisión real con tres formas distintas: «aunque…», «a pesar de…» y «… Aun así, …».' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Un audio de Irene', coach: 'Primero escucha sin leer. Listen first, read later.',
      steps: [
        { title: '¡Ya firmé! · I’ve signed!', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general. Segunda escucha: tu alumno levanta la mano cada vez que oye un obstáculo (aunque, a pesar de) y dice qué pasa igualmente. Después, las preguntas.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Cada vez que oyes «aunque» o «a pesar de», piensa: ¿cuál es el obstáculo? ¿Qué pasa igualmente? (Listen for the gist, then for the details.)' } },
          { kind: 'listen', title: 'Un audio de Irene para Gabriel', channel: 'MENSAJE DE VOZ · DE IRENE PARA GABRIEL', src: '/audio/grammar-live/401.mp3',
            before: 'Dos días después de la visita, Irene le manda un audio a Gabriel. ¿Qué crees que cuenta: el contrato, el precio, la mudanza…? (Two days after the visit, Irene sends Gabriel a voice message. What do you think she talks about?)',
            gist: { prompt: '¿Cuál es la idea general? · What is the main idea?', options: ['Irene busca otro apartamento con su madre.', 'Irene no firmó porque el precio era muy alto.', 'Irene firmó, está contenta a pesar de los problemas y pide ayuda para la mudanza.'], answer: 2, why: '«¡Ya firmé el contrato!», cuenta lo bueno y lo malo, y pregunta: «¿Me ayudas con las cajas?».', en: 'What is the main idea?' },
            details: [
              { prompt: '¿Qué hizo el dueño?', options: ['Bajó un poco el precio.', 'No bajó el precio, pero le regaló el primer mes de internet.', 'Le dio las llaves gratis.'], answer: 1, why: '«Aunque el dueño no quiso bajar el precio, me regaló el primer mes de internet».', en: 'What did the owner do?' },
              { prompt: '¿Cómo fue la visita con la madre de Irene?', options: ['La madre no quiso subir las escaleras.', 'Llovía mucho y aun así a la madre le encantó.', 'Hacía sol y la madre subió en ascensor.'], answer: 1, why: '«Aunque esta mañana llovía muchísimo, fui otra vez… A ella le encantó, a pesar de las escaleras».', en: 'How was the visit with Irene’s mother?' },
              { prompt: '¿Qué dice Irene de la cocina?', options: ['Que es muy pequeña, pero cabe la mesa de Gabriel.', 'Que es grande y nueva.', 'Que no tiene horno.'], answer: 0, why: '«La cocina es muy pequeña; aun así, cabe la mesa que me diste».', en: 'What does Irene say about the kitchen?' },
              { prompt: '¿Qué problema tiene Irene para el sábado?', options: ['No tiene las llaves.', 'Tiene que trabajar.', 'Todavía no tiene camión.'], answer: 2, why: '«Me mudo el sábado, aunque todavía no tengo camión».', en: 'What problem does Irene have for Saturday?' },
            ],
            transcript: '¡Hola, Gabo! Soy Irene. ¡Ya firmé el contrato! Te cuento rápido. [[Aunque el dueño no quiso bajar el precio|blue]], me regaló el primer mes de internet, así que no me quejo. Y mira, [[aunque esta mañana llovía muchísimo|blue]], fui otra vez a ver el apartamento con mi mamá. A ella le encantó, [[a pesar de las escaleras|teal]]: subió los cuatro pisos sin parar, y eso que tiene setenta años. Eso sí, la cocina es muy pequeña; [[aun así|orange]], cabe la mesa que me diste. [[A pesar de que el edificio es viejo|teal]], las ventanas son nuevas y casi no se oye la calle. Me mudo el sábado, [[aunque todavía no tengo camión|blue]]. ¿Me ayudas con las cajas? Te invito a almorzar después. ¡Mil gracias por todo! Un abrazo.',
            reply: { teacher: 'Tú eres Irene. Tu alumno es Gabriel y responde al audio con tres frases: felicita a Irene, dice si puede ayudar el sábado (con «aunque» o «a pesar de») y propone una solución para el camión.', self: 'Responde a Irene en voz alta como Gabriel: felicítala, dile si puedes ayudar el sábado con «aunque» o «a pesar de» y propón una idea para el camión. (Answer as Gabriel, with aunque or a pesar de.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Decisiones con inconvenientes', coach: 'Admite el problema y defiende tu decisión. Admit it, then defend it.',
      steps: [
        { title: '¿Y a pesar de eso…? · And despite that…?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas y tu alumno responde con decisiones reales: dónde vive, qué estudia, qué compró. Tú repites su frase con la forma correcta y sigues con la repregunta.', self: 'Lee cada pregunta y responde en voz alta con una decisión real. Usa una forma distinta en cada respuesta: aunque, a pesar de, aun así. (Answer aloud; vary the forms.)' } },
          { kind: 'talk', cards: [
            { q: '¿Dónde vives? ¿Tu casa tiene algún inconveniente? ¿Por qué sigues allí? · Where do you live? Does your home have a drawback? Why do you stay?', followUps: ['¿Qué es lo peor? (What’s the worst thing?)', '¿Y lo mejor? (And the best thing?)'], phrases: ['[[Aunque|blue]] mi casa es…, …', 'Es…, [[pero|orange]]…', '[[A pesar del|teal]] ruido…, …'], hint: 'Primero el inconveniente con «aunque»; después lo que pesa más.', example: 'Aunque mi apartamento es pequeño y un poco oscuro, no me voy a mudar: está al lado del metro. A pesar del ruido de la calle, duermo bien.', next: 'Ahora, una experiencia difícil.', teacher: 'Cuenta tú también un inconveniente de tu casa con «aunque». Así tu alumno oye la estructura otra vez.' },
            { q: 'Cuenta algo que hiciste aunque era difícil: un viaje, un examen, un trabajo. · Tell me about something you did although it was hard.', followUps: ['¿Qué pasó al final? (What happened in the end?)', '¿Lo harías otra vez? (Would you do it again?)'], phrases: ['[[Aunque|blue]] tenía miedo / estaba cansado, …', '[[A pesar de|teal]] los nervios, …', 'Fue difícil. [[Aun así|orange]], …'], hint: 'En pasado: «aunque» + imperfecto para la situación (tenía, estaba) o + indefinido para un hecho (llovió).', example: 'Aunque no hablaba inglés, viajé solo a Londres a los veinte años. A pesar de los nervios, fue una experiencia increíble.', next: 'Ahora, tu trabajo o tus estudios.' },
            { q: '¿Qué te gusta de tu trabajo o de tus estudios a pesar de los inconvenientes? · What do you like about your job or studies despite the drawbacks?', followUps: ['¿Qué cambiarías? (What would you change?)', '¿Lo recomiendas? (Do you recommend it?)'], phrases: ['[[A pesar de que|teal]] el horario es…, …', 'El sueldo no es muy alto. [[Sin embargo|orange]], …', '…, [[aunque|blue]] a veces…'], hint: 'Prueba «aunque» detrás: «Me gusta mucho, aunque a veces es estresante».', example: 'Me gusta mucho mi trabajo, aunque a veces es estresante. El sueldo no es muy alto. Sin embargo, tengo un equipo fantástico.', next: 'Ahora, un consejo.' },
            { q: 'Un amigo quiere comprar una bicicleta eléctrica muy cara. ¿Qué le dices? · A friend wants to buy a very expensive electric bike. What do you tell them?', followUps: ['¿Y si la usa poco? (What if they hardly use it?)', '¿Tú qué harías? (What would you do?)'], phrases: ['Es cara, [[pero|orange]]…', '[[Aunque|blue]] cuesta mucho, …', '[[A pesar del|teal]] precio, …'], hint: 'Reconoce el precio y da tu opinión: ¿la compra o no?', example: 'Es cara, pero la vas a usar todos los días. Aunque cuesta mucho, te ahorras el autobús y el taxi. Yo la compraría.', next: 'Ahora, tú eres Irene.' },
            { q: 'Tú eres Irene. Tu madre dice: «¡Novecientos al mes! ¡Y sin ascensor!». Defiende tu decisión. · You are Irene. Defend your decision.', followUps: ['¿Y la cocina tan pequeña? (And the tiny kitchen?)', '¿Y el ruido de los bares? (And the noise from the bars?)'], phrases: ['Ya lo sé, mamá. [[Aun así|orange]], …', '[[Aunque|blue]] es caro, …', '[[A pesar de estar|teal]] en el centro, …'], hint: 'Acepta cada problema y responde con una ventaja.', example: 'Ya lo sé, mamá. Aun así, me encanta. Aunque es caro, está a diez minutos del estudio. A pesar de estar en el centro, el dormitorio es muy tranquilo.', teacher: 'Tú eres la madre y añades problemas nuevos («¿Y si hay humedad?»). Tu alumno responde cada vez con una forma distinta.' },
            { q: 'Una costumbre que mantienes aunque no siempre es fácil: el gimnasio, cocinar, leer, madrugar. · A habit you keep even though it isn’t always easy.', followUps: ['¿Cuándo es más difícil? (When is it hardest?)', '¿Por qué no lo dejas? (Why don’t you give it up?)'], phrases: ['[[Aunque|blue]] llego cansado/a, …', '[[A pesar de|teal]] + infinitivo, …', '…, [[aunque|blue]] no siempre…'], hint: 'Usa el presente para tus costumbres: «aunque llueve, salgo a correr».', example: 'Salgo a correr tres veces por semana. Aunque llueve, salgo igual. A pesar de tener poco tiempo, nunca lo dejo.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno hace las preguntas y pone problemas («¡Pero es muy caro!»), y tú defiendes tus decisiones con aunque, a pesar de y aun así.', self: 'Ahora haz tú las preguntas en voz alta y responde como otra persona, con problemas distintos. (Now ask the questions yourself and answer as someone else.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Confirmar la decisión', coach: 'Reconoce los problemas y confirma. Admit the problems, then confirm.',
      steps: [
        { title: 'Un correo a la agencia · An email to the agency', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos cada conector: ¿va con el obstáculo o con el resultado? ¿La puntuación es correcta? Después tu alumno lee su correo en voz alta.', self: 'Escribe tu correo y toca «Revisar mi texto». Después mira cada conector: ¿va con el obstáculo o con el resultado? (Write your email and tap “Revisar mi texto”.)' } },
          { kind: 'write', title: 'Me quedo con el apartamento · I’ll take the apartment', situation: 'Eres Irene (o eres tú, con otra casa, un curso o un trabajo). Escribe un correo formal a la señora Molina, de la agencia: confirma que te quedas con el apartamento, reconoce los inconvenientes y explica por qué lo quieres igualmente. (You are Irene, or yourself with another choice. Write a formal email to the agent: confirm, admit the drawbacks and explain why you want it anyway.)', task: [
            'Saluda y confirma tu decisión. (Greet her and confirm your decision.)',
            'Reconoce un inconveniente con «aunque» + indicativo. (Admit a drawback with aunque.)',
            'Usa «a pesar de» + nombre o infinitivo. (Use a pesar de.)',
            'Une dos frases con «sin embargo» o «aun así», con la puntuación correcta. (Join two sentences with sin embargo or aun así.)',
            'Haz una pregunta práctica y despídete. (Ask a practical question and say goodbye.)',
          ], starters: ['Estimada señora Molina:', 'Le escribo para confirmarle que…', 'Aunque el alquiler es…, …', 'Es verdad que… Sin embargo, …', 'A pesar de…, …', 'Solo tengo una pregunta:', 'Atentamente,'],
            words: ['aunque', 'a pesar de', 'a pesar de que', 'sin embargo', 'aun así', 'pero', 'el alquiler', 'el contrato', 'la luz', 'tranquilo', 'cerca de'],
            model: 'Estimada señora Molina: Le escribo para confirmarle que me quedo con el apartamento de la calle Real. [[Aunque el alquiler es más alto de lo que pensaba|blue]], el lugar es perfecto para mí. Es verdad que no hay ascensor y que la cocina es pequeña. [[Sin embargo|orange]], el apartamento tiene mucha luz y está a diez minutos de mi trabajo. [[A pesar de estar en pleno centro|teal]], el dormitorio es muy tranquilo. Solo tengo una pregunta: ¿puedo pintar el salón? [[Aunque me gustan las paredes blancas|blue]], prefiero un color más cálido. Si le parece bien, firmamos el jueves. Muchas gracias por su ayuda. Atentamente, Irene Salas',
            minWords: 80,
            checks: [
              { label: 'Aunque + un verbo (aunque + a verb)', pattern: '(?<!\\p{L})aunque\\s+(?:\\p{L}+\\s+){0,3}(?:es|son|está|están|hay|tiene|tienen|era|eran|estaba|había|fue|me\\s+gusta|me\\s+gustan|\\p{L}{2,}(?:a|e|o|an|en|aba|ía|ó|é))(?!\\p{L})', tip: 'Reconoce un inconveniente con «aunque» + verbo: «Aunque el alquiler es alto, …».' },
              { label: 'A pesar de (in spite of)', pattern: '(?<!\\p{L})a\\s+pesar\\s+de(?:l)?(?!\\p{L})', tip: 'Añade «a pesar de» + nombre o infinitivo: «A pesar del precio, …», «A pesar de estar en el centro, …».' },
              { label: 'Sin embargo o aun así (however / even so)', pattern: '(?<!\\p{L})(?:sin\\s+embargo|aun\\s+así|aun\\s+asi)(?!\\p{L})', tip: 'Une dos frases: «Es caro. Sin embargo, …» o «Es pequeño. Aun así, …».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})aunque(?!\\p{L})[^.;:!?]*,\\s*pero(?!\\p{L})', why: '«Aunque» y «pero» no van juntos en la misma frase: elige uno. «Aunque es caro, me gusta» o «Es caro, pero me gusta».' },
              { pattern: '(?<!\\p{L})aún\\s+así(?!\\p{L})', why: '«Aun así» (even so) se escribe sin tilde.' },
              { pattern: '(?<!\\p{L})a\\s+pesar\\s+(?:de\\s+el|el|la|los|las)(?!\\p{L})', why: 'Escribe «a pesar **del**…» o «a pesar **de la**…»: «de» no se puede omitir y «de + el» es «del».' },
              { pattern: ',\\s*sin\\s+embargo\\s+(?!,)', why: '«Sin embargo» entre dos frases va con punto o punto y coma delante y con coma detrás: «Es caro. Sin embargo, …».' },
            ] },
        ] },
      ],
    },
    {
      id: 'cerrar', label: 'Cerrar', icon: '✓', mascot: '/brand/mascot/standing.webp',
      title: 'Lo esencial', coach: '¿Qué te llevas hoy? What do you take with you?',
      steps: [
        { title: 'Lo esencial · The essentials', blocks: [
          { kind: 'recap', items: [
            { tone: 'blue', label: 'AUNQUE + INDICATIVO', formula: 'Aunque + hecho real, idea principal · idea principal, aunque + hecho real', example: 'Aunque es caro, me gusta. · Me gusta, aunque es caro.', caption: 'el obstáculo que reconoces; delante o detrás, con coma', en: 'the drawback you admit; in front or after, with a comma' },
            { tone: 'orange', label: 'PERO · SIN EMBARGO · AUN ASÍ', formula: '…, pero… · …. Sin embargo, … · …. Aun así, …', example: 'Es caro, pero me gusta. · Es caro. Sin embargo, me gusta.', caption: 'van con el resultado; nunca «aunque…, pero…»', en: 'they go with the result; never “aunque…, pero…”' },
            { tone: 'teal', label: 'A PESAR DE', formula: 'a pesar de + nombre · + infinitivo · que + indicativo', example: 'A pesar del precio… · A pesar de ser caro… · A pesar de que es caro…', caption: 'del = de + el; infinitivo si el sujeto es el mismo', en: 'del = de + el; infinitive when the subject is the same' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Pregunta: **¿dónde está el obstáculo?** Con el obstáculo va **aunque** (+ verbo) o **a pesar de** (+ nombre o infinitivo). Con el resultado va **pero**, **sin embargo** o **aun así**. Un obstáculo, un conector. Y si no hay obstáculo, sino una razón, no es «aunque»: es «como» o «porque».', en: 'Ask: where is the obstacle? “Aunque” (+ verb) or “a pesar de” (+ noun or infinitive) go with the obstacle. “Pero”, “sin embargo” or “aun así” go with the result. One obstacle, one connector. And if it is a reason rather than an obstacle, use “como” or “porque”.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: '___ no hablo bien alemán, trabajo en una empresa de Berlín.', options: ['Pero', 'Aunque', 'Porque'], answer: 1, why: 'No hablar bien alemán es el obstáculo, y aun así trabajo allí: aunque.', en: 'Although I don’t speak German well, I work for a company in Berlin.' },
            { prompt: 'A pesar ___ tráfico, llegamos a tiempo al aeropuerto.', options: ['de el', 'el', 'del'], answer: 2, why: 'A pesar de + el tráfico → del tráfico.', en: 'In spite of the traffic, we got to the airport on time.' },
            { prompt: 'El hotel era caro. ___, lo reservamos.', options: ['Aunque', 'Aun así', 'A pesar de'], answer: 1, why: 'Frase nueva después de punto, con coma: aun así.', en: 'The hotel was expensive. Even so, we booked it.' },
            { prompt: 'Aunque estudié mucho, ___ aprobé el examen.', options: ['no', 'sin embargo no', 'pero no'], answer: 0, why: 'Con «aunque» delante, la otra parte va sin conector: «no aprobé».', en: 'Although I studied a lot, I didn’t pass the exam.' },
            { prompt: 'A pesar de ___ cansados, terminamos el proyecto.', options: ['estábamos', 'estar', 'que estar'], answer: 1, why: 'Mismo sujeto (nosotros… nosotros): a pesar de + infinitivo.', en: 'Despite being tired, we finished the project.' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Ahora, un trabajo nuevo. Now, a new job.', blocks: [
          { kind: 'lead', text: 'Unos meses después, a Gabriel le ofrecen un trabajo en otra ciudad. Tiene dudas, pero acepta. Transforma sus frases.', en: 'A few months later, Gabriel is offered a job in another city. He has doubts, but he accepts. Rewrite his sentences.' },
          { kind: 'rewrite', title: 'La decisión de Gabriel · Gabriel’s decision', items: [
            { prompt: 'El sueldo es más bajo, pero el proyecto es muy interesante.', instruction: 'Reescribe con «aunque» al principio.', accept: ['Aunque el sueldo es más bajo, el proyecto es muy interesante'] },
            { prompt: 'Aunque tiene que mudarse, Gabriel acepta el trabajo.', instruction: 'Usa «a pesar de» + infinitivo.', accept: ['A pesar de tener que mudarse, Gabriel acepta el trabajo', 'Gabriel acepta el trabajo a pesar de tener que mudarse'] },
            { prompt: 'La ciudad es pequeña. Gabriel está contento.', instruction: 'Une las dos frases con «Aun así».', accept: ['La ciudad es pequeña. Aun así, Gabriel está contento', 'La ciudad es pequeña; aun así, Gabriel está contento', 'La ciudad es pequeña, pero aun así Gabriel está contento'] },
          ] },
        ] },
        { title: 'Ampliación: aunque llueve o aunque llueva · Extension: fact or possibility', mascot: '/brand/mascot/portrait.webp', coach: 'Solo para reconocer. Just to recognise.', blocks: [
          { kind: 'tip', icon: '💡', title: 'Un adelanto de B2 · A preview of B2', text: 'Hoy usas «aunque» con **indicativo**: el obstáculo es un hecho que afirmas («**Aunque llueve**, salgo»: está lloviendo). También vas a oír «aunque» con **subjuntivo**: «**Aunque llueva** mañana, hacemos la mudanza». Aquí no sabes si va a llover, y no importa: la mudanza se hace igual. Lo estudias en la clase 137 (B2); hoy solo tienes que reconocerlo. En la conversación también oyes «**y eso que**» + indicativo, detrás de la idea principal: «Subió los cuatro pisos, y eso que tiene setenta años».', en: 'Today you use “aunque” with the indicative: the obstacle is a fact you state (“Aunque llueve”: it is raining). You will also hear “aunque” with the subjunctive: “Aunque llueva mañana…”: you don’t know if it will rain, and it doesn’t matter. You will study this at B2 (class 137); for now, just recognise it. In conversation you also hear “y eso que” + indicative after the main idea, roughly “and that’s despite the fact that…”.' },
          { kind: 'choice', title: '¿Hecho o posibilidad? · Fact or possibility?', items: [
            { prompt: 'Irene, el viernes: «Aunque llueva mañana, empezamos a las ocho». ¿Qué sabe Irene?', options: ['No sabe si va a llover, y no le importa.', 'Que mañana va a llover seguro.', 'Que está lloviendo ahora.'], answer: 0, why: '«Aunque» + subjuntivo (llueva): una posibilidad que no cambia el plan.', en: 'Irene, on Friday: “Even if it rains tomorrow, we’re starting at eight.” What does Irene know?' },
            { prompt: 'Irene, el sábado, mirando por la ventana: «Aunque llueve, empezamos a las ocho». ¿Qué sabe Irene?', options: ['Que está lloviendo.', 'Que quizá llueve más tarde.', 'Que no va a llover.'], answer: 0, why: '«Aunque» + indicativo (llueve): un hecho real que Irene ve.', en: 'Irene, on Saturday, looking out of the window: “Even though it’s raining, we’re starting at eight.” What does Irene know?' },
            { prompt: '«La madre de Irene subió sin parar, y eso que tiene setenta años». ¿Qué significa?', options: ['Subió sin parar a pesar de tener setenta años.', 'No subió porque tiene setenta años.', 'Subió despacio porque tiene setenta años.'], answer: 0, why: '«Y eso que» presenta un obstáculo real después de la idea principal, como «aunque».', en: '“Irene’s mother went up without stopping, and she’s seventy.” What does it mean?' },
          ] },
          { kind: 'teacher', text: 'Paso opcional: para estudiantes rápidos o si hay tiempo extra. Basta con reconocer la diferencia entre «aunque llueve» (hecho) y «aunque llueva» (posibilidad); la producción de «aunque» + subjuntivo llega en la clase 137 (B2).' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 102 · Condiciones reales: si + presente y futuro', text: 'Ya reconoces un inconveniente real y mantienes tu decisión: «Aunque es caro, me lo quedo», «A pesar de las escaleras, me encanta». En la clase 102 miras hacia el futuro con otra relación entre dos ideas: la condición. «Si termino pronto, te llamaré», «Si llueve el sábado, cambiamos el plan». Es el paso natural: después de decir qué pasa a pesar de un obstáculo, aprendes a decir qué pasa si se cumple una condición real.', en: 'You can now admit a real drawback and keep your decision. In class 102 you look to the future with another relation between two ideas: the condition. “If I finish early, I’ll call you.” It is the natural next step: after saying what happens in spite of an obstacle, you learn to say what happens if a real condition is met.', href: '/gramatica/condiciones-reales-si-presente-y-futuro', label: 'Ir a la clase 102' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Qué decisión tomaste este año a pesar de un inconveniente?». Respuesta esperada: una frase con «aunque» y otra con «a pesar de» o «aun así». Tarea: escribir el correo de Escribir sobre una decisión real.' },
        ] },
      ],
    },
  ],
};
