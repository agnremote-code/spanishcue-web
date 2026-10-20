import type { LiveLesson } from '../types';

/**
 * Lesson 361 · A2 · Verbos de cambio básicos: ponerse, quedarse (course unit G061).
 * One scene runs through the class: on Saturday Javier and his friend Elena gave
 * Nuria Campos a surprise party for her fortieth birthday. Their colleague Marcos
 * could not go (he got ill on Friday night and stayed at home). On Monday, at the
 * office coffee machine, Elena tells him how everyone reacted: Javier got nervous
 * when Nuria arrived early, Nuria went red and was left speechless, she got sad
 * and went quiet when she saw her mother Rosa (who lives in Valencia) on a video
 * call, uncle Ramiro fell asleep on the sofa, Elena stayed until three.
 * In the voice message Nuria (Spanish voice, tú) thanks her mother.
 * Content: ponerse + adjective for a quick reaction (se puso nervioso, roja,
 * triste, contenta, enfermo); quedarse + adjective / participle / sin + noun for
 * the state someone is left in (se quedó callada, dormido, sorprendida, sin
 * palabras); quedarse + place / time = stay (me quedé en casa, hasta las tres).
 * Contrast: estar (the state) / ponerse (the change) / quedarse (the result).
 * Forms: me pongo / me puse (irregular), me quedo / me quedé; agreement of the
 * adjective. Builds on class 060 (reflexive pronouns, «se puso nervioso»).
 * hacerse, volverse, convertirse en (B1/B2) appear only receptively in Ampliación.
 */
export const lesson: LiveLesson = {
  id: 361,
  level: 'A2',
  title: 'Verbos de cambio básicos: ponerse, quedarse',
  subtitle: 'Contar cómo reaccionó la gente en un momento especial: se puso nerviosa, se quedó callada, me quedé en casa.',
  legend: [
    { tone: 'orange', label: 'PONERSE + adjetivo: un cambio rápido, una reacción (got nervous, went red…)' },
    { tone: 'blue', label: 'QUEDARSE + adjetivo / participio: el estado que queda después (was left speechless, fell asleep…)' },
    { tone: 'teal', label: 'QUEDARSE + lugar o tiempo: no irse, seguir allí (to stay)' },
    { tone: 'violet', label: 'ESTAR + adjetivo: el estado, sin cambio (to be)' },
  ],
  optionNotes: {
    'se ponió': '«Ponió» no existe. Poner es irregular en indefinido: me **puse**, te pusiste, se **puso**, nos pusimos, se pusieron.',
    'quedó': 'Falta el pronombre. Para «stay» o «be left» se dice **se quedó**: se quedó en casa, se quedó dormido.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Un cambio y un resultado', coach: '¿Qué le pasó? ¿Cómo se quedó? What happened to her? How was she left?',
      steps: [
        { title: '¡Sorpresa! · Surprise!', blocks: [
          { kind: 'lead', text: 'El sábado, Javier y su amiga Elena prepararon una **fiesta sorpresa** para Nuria: cumplía cuarenta años. Cuando Nuria abrió la puerta y vio a todos sus amigos, **se puso** roja y **se quedó** sin palabras. Más tarde vio a su madre en una videollamada: **se puso triste y se quedó callada**. En la clase 060 usaste me, te, se… con rutinas y con cambios como «se puso nervioso». Hoy aprendes dos verbos para contar cómo cambia una persona: **ponerse** y **quedarse**.', en: 'On Saturday, Javier and his friend Elena threw a surprise party for Nuria: she was turning forty. When Nuria opened the door and saw all her friends, she went red and was left speechless. Later she saw her mother on a video call: she got sad and went quiet. In class 060 you used me, te, se… with routines and with changes like “se puso nervioso”. Today you learn two verbs to tell how a person changes: ponerse and quedarse.' },
          { kind: 'guide', text: { teacher: 'Tú lees la frase de Nuria en dos partes y tu alumno repite. Después tu alumno dice qué parte es una reacción rápida y qué parte es cómo se quedó Nuria después.', self: 'Lee las dos partes de la frase en voz alta. ¿Qué parte es una reacción rápida? ¿Qué parte dice cómo se quedó Nuria? (Which part is a quick reaction? Which part says how she was left?)' } },
          { kind: 'compare', title: 'Una frase, dos cambios · One sentence, two changes', columns: [
            { tone: 'orange', label: 'PONERSE · la reacción', sentence: 'Nuria [[se puso triste|orange]]…', idea: 'Un cambio rápido: en un momento, Nuria pasa de contenta a triste.', en: 'Nuria got sad… (a quick change, a reaction)' },
            { tone: 'blue', label: 'QUEDARSE · el resultado', sentence: '…y [[se quedó callada|blue]].', idea: 'El estado que queda después: Nuria no dice nada durante un rato.', en: '…and went quiet. (the state she was left in)' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Nuria se puso roja» significa…', options: ['La cara de Nuria cambió de color en un momento.', 'Nuria siempre es roja.', 'Nuria se puso un vestido rojo.'], answer: 0, why: 'Ponerse + adjetivo = un cambio rápido: Nuria se puso roja (she went red, she blushed).', en: '“Nuria se puso roja” means…' },
            { prompt: '«Nuria se quedó callada» significa…', options: ['Nuria no dijo nada durante un rato.', 'Nuria se quedó en casa.', 'Nuria habló mucho.'], answer: 0, why: 'Quedarse callada: el estado después de algo; Nuria no habló durante un rato.', en: '“Nuria se quedó callada” means…' },
          ] },
        ] },
        { title: 'Ponerse + adjetivo · Ponerse + adjective', mascot: '/brand/mascot/studying.webp', coach: 'Se puso nervioso. He got nervous.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'PONERSE · REACCIÓN', question: '¿Qué le pasó en ese momento?', en: 'What happened to him or her at that moment?', formula: ['me / te / se / nos / os / se + poner + adjetivo', 'nervioso · rojo · contento · triste · serio · pálido · enfermo'],
            meaning: 'Con **ponerse** + adjetivo cuentas un **cambio rápido**: una emoción, el color de la cara, la salud. Normalmente es un estado que no dura mucho. Son adjetivos que van con **estar**: está nervioso → se puso nervioso.',
            examples: [
              { es: 'Javier [[se puso nervioso|orange]] cuando sonó el teléfono.', en: 'Javier got nervous when the phone rang.' },
              { es: 'Nuria [[se puso muy contenta|orange]] con la sorpresa.', en: 'Nuria got very happy with the surprise.' },
              { es: 'Yo siempre [[me pongo rojo|orange]] cuando hablo en público.', en: 'I always go red when I speak in public.' },
            ],
            note: 'El adjetivo concuerda con la persona: Javier se puso **nervioso**, Nuria se puso **nerviosa**, ellos se pusieron **nerviosos**.' },
          { kind: 'table', title: 'Ponerse: presente e indefinido · Present and indefinido', head: ['Persona', 'Presente (siempre, ahora)', 'Indefinido (un momento del pasado)'], rows: [
            ['yo', 'me **pongo** nervioso/a', 'me **puse** rojo/a'],
            ['tú', 'te pones nervioso/a', 'te pusiste rojo/a'],
            ['él, ella, usted', 'se pone nervioso/a', 'se **puso** rojo/a'],
            ['nosotros/as', 'nos ponemos nerviosos/as', 'nos pusimos rojos/as'],
            ['vosotros/as (España)', 'os ponéis nerviosos/as', 'os pusisteis rojos/as'],
            ['ellos, ellas, ustedes', 'se ponen nerviosos/as', 'se pusieron rojos/as'],
          ], note: 'Poner es irregular: «me pongo» en presente (clase 019) y la raíz **pus-** en indefinido, sin tilde: puse, puso (como pude, pudo). Nunca «ponió».' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Cuando vio a su madre en la pantalla, Nuria ___ triste.', options: ['puso', 'se ponió', 'se puso'], answer: 2, why: 'Un cambio rápido en el pasado: se puso (pronombre se + puso, irregular).', en: 'When she saw her mother on the screen, Nuria got sad.' },
            { prompt: 'Mis hermanas siempre se ponen ___ antes de un examen.', options: ['nerviosa', 'nerviosas', 'nervioso'], answer: 1, why: 'El adjetivo concuerda con «mis hermanas»: femenino plural, nerviosas.', en: 'My sisters always get nervous before an exam.' },
          ] },
        ] },
        { title: 'Quedarse: dos usos · Quedarse: two uses', mascot: '/brand/mascot/standing.webp', coach: 'Se quedó dormido. Me quedé en casa.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'QUEDARSE · RESULTADO', question: '¿Cómo se quedó después?', en: 'How was he or she left afterwards?', formula: ['se + quedar + adjetivo / participio', 'callado · dormido · sorprendido · solo · tranquilo · sin palabras'],
            meaning: 'Con **quedarse** + adjetivo cuentas el **estado en que queda** una persona después de algo. Muchas veces no lo decide ella: le pasa. Va mucho con participios (-ado, -ido) y con **sin** + nombre.',
            examples: [
              { es: 'Nuria [[se quedó sin palabras|blue]] cuando abrió la puerta.', en: 'Nuria was left speechless when she opened the door.' },
              { es: 'El tío Ramiro [[se quedó dormido|blue]] en el sofá.', en: 'Uncle Ramiro fell asleep on the sofa.' },
              { es: 'Con la noticia, todos [[nos quedamos sorprendidos|blue]].', en: 'With the news, we were all left surprised.' },
            ] },
          { kind: 'concept', tone: 'teal', label: 'QUEDARSE · PERMANECER', question: '¿Dónde se quedó? ¿Hasta cuándo?', en: 'Where did he or she stay? Until when?', formula: ['se + quedar + en / hasta / con…', 'quedarse en casa · quedarse hasta las tres · quedarse con alguien'],
            meaning: 'Con un lugar o un tiempo, **quedarse** significa **no irse, seguir allí** (to stay). Aquí no hay cambio de estado: es una decisión.',
            examples: [
              { es: 'Marcos estaba enfermo y [[se quedó en casa|teal]].', en: 'Marcos was ill and stayed at home.' },
              { es: 'Elena [[se quedó|teal]] en la fiesta hasta las tres.', en: 'Elena stayed at the party until three.' },
            ],
            note: 'Quedarse es regular: me **quedo**, te quedas, se queda… / me **quedé**, te quedaste, se **quedó**, nos quedamos, se quedaron.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'La película era muy larga y yo ___ dormida.', options: ['me puse', 'me quedé', 'quedé'], answer: 1, why: 'Dormido/a es el estado en que quedas: quedarse dormido (to fall asleep). Con pronombre: me quedé.', en: 'The film was very long and I fell asleep.' },
            { prompt: 'Llovía mucho y Elena ___ en casa todo el domingo.', options: ['se quedó', 'se puso', 'quedó'], answer: 0, why: 'Con un lugar, quedarse = no salir, seguir allí: se quedó en casa.', en: 'It was raining a lot and Elena stayed at home all Sunday.' },
          ] },
        ] },
        { title: 'Estar, ponerse, quedarse · State, change, result', mascot: '/brand/mascot/speaking.webp', coach: 'Estado, cambio, resultado. State, change, result.', blocks: [
          { kind: 'compare', title: 'Tres verbos, tres ideas · Three verbs, three ideas', columns: [
            { tone: 'violet', label: 'ESTAR · el estado', sentence: 'A las siete, Javier [[estaba|violet]] tranquilo.', idea: 'Describe cómo está alguien. No hay cambio.', en: 'At seven, Javier was calm. (a description)' },
            { tone: 'orange', label: 'PONERSE · el cambio', sentence: 'A las ocho, Javier [[se puso nervioso|orange]].', idea: 'En un momento, algo cambia: de tranquilo a nervioso.', en: 'At eight, Javier got nervous. (a quick change)' },
            { tone: 'blue', label: 'QUEDARSE · el resultado', sentence: 'Al final, Javier [[se quedó tranquilo|blue]].', idea: 'Después de algo (la fiesta salió bien), así queda Javier.', en: 'In the end, Javier was reassured. (the state he was left in)' },
          ] },
          { kind: 'decide', title: '¿Estar, ponerse o quedarse?', steps: [
            { q: '¿La persona no se va y sigue en un lugar? (en casa, en la fiesta, hasta las tres)', yes: 'Usa **quedarse** = to stay: «Me quedé en casa».', no: 'next' },
            { q: '¿Solo describes cómo está alguien, sin cambio?', yes: 'Usa **estar**: «Javier estaba tranquilo».', no: 'next' },
            { q: '¿Es una reacción rápida? (una emoción, el color de la cara, la salud)', yes: 'Usa **ponerse**: «Se puso nervioso», «Se puso roja».', no: 'next' },
            { q: '¿Es el estado en que queda la persona después? (callado, dormido, sorprendido, sin palabras)', yes: 'Usa **quedarse**: «Se quedó callada».', no: 'Piensa otra vez: ¿estado, reacción o resultado?' },
          ] },
          { kind: 'tip', icon: '💡', title: 'Compañeros frecuentes · Frequent partners', text: 'Algunas palabras van casi siempre con un verbo. Con **ponerse**: nervioso, rojo, contento, serio, enfermo. Con **quedarse**: callado, dormido, sorprendido, solo, sin palabras. Algunas van con los dos: «se puso triste» (la reacción) y «se quedó triste» (así estuvo después, un tiempo). 🌎 En muchos países de América también se dice **enfermarse**: «me enfermé» = me puse enfermo.', en: 'Some words almost always go with one verb. With ponerse: nervous, red, happy, serious, ill. With quedarse: quiet, asleep, surprised, alone, speechless. Some go with both: “se puso triste” (the reaction) and “se quedó triste” (how she felt afterwards, for a while). In many Latin American countries people also say enfermarse: “me enfermé” = I got ill.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Hoy es lunes y Marcos ya ___ bien: no tiene fiebre.', options: ['está', 'se pone', 'se queda'], answer: 0, why: 'Describes cómo está Marcos ahora, sin cambio: estar.', en: 'Today is Monday and Marcos is already well: he has no fever.' },
            { prompt: 'El viernes por la noche, Marcos ___ enfermo de repente.', options: ['estaba', 'se quedó', 'se puso'], answer: 2, why: '«De repente»: un cambio rápido de salud. Se puso enfermo.', en: 'On Friday night, Marcos suddenly got ill.' },
            { prompt: 'Con la mala noticia, todos ___ callados.', options: ['se pusieron', 'se quedaron', 'quedaron'], answer: 1, why: 'Callado es el estado que queda: quedarse callado. Con pronombre: se quedaron.', en: 'With the bad news, everyone went quiet.' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: '¿Dónde está el se? Where is the se?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la frase con el error y tu alumno explica qué falla: ¿falta el pronombre, es otro verbo, es la forma? Después aparece la corrección.', self: 'Lee cada frase y busca el error: ¿falta «se»? ¿Es otro verbo? ¿Es la forma? Toca para ver la corrección. (Find the mistake.)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Cuando vio la tarta, Nuria puso muy contenta.', right: 'Cuando vio la tarta, Nuria se puso muy contenta.', why: 'Sin «se», poner es colocar algo (to put). El cambio de estado necesita el pronombre: se puso.' },
            { wrong: 'El sábado Marcos quedó en casa.', right: 'El sábado Marcos se quedó en casa.', why: 'To stay = **quedarse**, con pronombre: me quedé, se quedó.' },
            { wrong: 'Javier se ponió nervioso.', right: 'Javier se puso nervioso.', why: 'Poner es irregular en indefinido: puse, pusiste, **puso**. «Ponió» no existe.' },
            { wrong: 'El tío Ramiro se puso dormido en el sofá.', right: 'El tío Ramiro se quedó dormido en el sofá.', why: 'Dormido va con quedarse: quedarse dormido = to fall asleep.' },
            { wrong: 'Nuria se puso rojo.', right: 'Nuria se puso roja.', why: 'El adjetivo concuerda con la persona: Nuria → roja.' },
            { wrong: 'Mi hermana se puso médica.', right: 'Mi hermana ahora es médica.', why: 'Ponerse no sirve para profesiones (no es una reacción). Para una profesión: «ahora es médica». (En B1 verás «se hizo médica», she became a doctor.)' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Javier ___ la tarta en la mesa y apagó la luz.', options: ['se puso', 'puso', 'se quedó'], answer: 1, why: 'Aquí poner es colocar un objeto (to put): puso la tarta. Sin «se».', en: 'Javier put the cake on the table and turned off the light.' },
            { prompt: 'Cuando oyó «¡Sorpresa!», Nuria ___ muy pálida.', options: ['se puso', 'puso', 'se ponió'], answer: 0, why: 'Una reacción rápida, con pronombre y la forma irregular: se puso.', en: 'When she heard “Surprise!”, Nuria went very pale.' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno cuenta un momento real con «me puse…» y otro con «me quedé…»: «Me puse nervioso en mi primera entrevista», «Me quedé dormido en el autobús». Tú preguntas: «¿Fue una reacción o el estado de después?».' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: '¿Qué tal la fiesta?', coach: 'Toca las palabras marcadas. Tap the marked words.',
      steps: [
        { title: 'El lunes, en la oficina · On Monday, at the office', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Marcos y tu alumno es Elena. Después tu alumno toca cada palabra marcada y dice si es una reacción, un resultado o «to stay».', self: 'Lee el diálogo en voz alta. Después toca cada palabra marcada y di: ¿reacción, resultado o «to stay»? (Reaction, result or “to stay”?)' } },
          { kind: 'explore', title: '¡Se quedó sin palabras!', setting: 'Lunes por la mañana, junto a la máquina de café de la oficina. Marcos no fue a la fiesta sorpresa de Nuria y Elena le cuenta cómo fue. Se hablan de tú. (Monday morning, by the office coffee machine. Marcos missed Nuria’s surprise party and Elena tells him about it.)', lines: [
            { who: 'Marcos', text: 'Elena, perdona por el sábado. El viernes por la noche [[me puse enfermo|orange]] y [[me quedé en casa|teal]] todo el fin de semana.', en: 'Elena, sorry about Saturday. On Friday night I got ill and stayed at home all weekend.' },
            { who: 'Elena', text: '¡No pasa nada! ¿Ya [[estás|violet]] bien?', en: 'Don’t worry! Are you better now?' },
            { who: 'Marcos', text: 'Sí, ya estoy bien. Pero cuéntame: ¿salió bien la sorpresa?', en: 'Yes, I’m fine now. But tell me: did the surprise work?' },
            { who: 'Elena', text: '¡Casi no! A las ocho Nuria llamó: «Llego en cinco minutos». Y Javier [[se puso nervioso|orange]]: ¡la tarta todavía no estaba en casa!', en: 'Almost not! At eight Nuria called: “I’ll be there in five minutes.” And Javier got nervous: the cake still wasn’t at home!' },
            { who: 'Marcos', text: '¡Pobre Javier! ¿Y qué hizo Nuria cuando abrió la puerta?', en: 'Poor Javier! And what did Nuria do when she opened the door?' },
            { who: 'Elena', text: 'Encendimos la luz y gritamos «¡Sorpresa!». Ella [[se puso roja|orange]] y [[se quedó sin palabras|blue]] un minuto.', en: 'We turned on the light and shouted “Surprise!”. She went red and was speechless for a minute.' },
            { who: 'Marcos', text: '¡Normal! ¿Y después?', en: 'No wonder! And then?' },
            { who: 'Elena', text: 'Después [[se puso muy contenta|orange]] y nos abrazó a todos. Luego Javier llamó a la madre de Nuria por videollamada.', en: 'Then she got very happy and hugged us all. After that Javier called Nuria’s mother on a video call.' },
            { who: 'Marcos', text: '¿A Rosa? Vive en Valencia, ¿no?', en: 'Rosa? She lives in Valencia, right?' },
            { who: 'Elena', text: 'Sí. Cuando la vio en la pantalla, Nuria [[se puso triste|orange]] y [[se quedó callada|blue]]. Pero Rosa le cantó «Cumpleaños feliz» y Nuria sonrió otra vez.', en: 'Yes. When she saw her on the screen, Nuria got sad and went quiet. But Rosa sang “Happy Birthday” to her and Nuria smiled again.' },
            { who: 'Marcos', text: '¡Qué bonito! ¿Y tú hasta qué hora [[te quedaste|teal]]?', en: 'How lovely! And how late did you stay?' },
            { who: 'Elena', text: '[[Me quedé|teal]] hasta las tres. ¡Y el tío Ramiro [[se quedó dormido|blue]] en el sofá a las once, con la música muy alta!', en: 'I stayed until three. And uncle Ramiro fell asleep on the sofa at eleven, with the music really loud!' },
          ], notes: {
            'me puse enfermo': 'Ponerse enfermo: un cambio rápido de salud (to get ill). Yo → **me puse**. En muchos países de América también se dice «me enfermé».',
            'me quedé en casa': 'Quedarse + lugar = to stay. Marcos no salió de casa. No es un cambio de estado.',
            'estás': 'Estar: Elena pregunta por el estado de Marcos ahora, sin cambio.',
            'se puso nervioso': 'Un cambio rápido: de tranquilo a nervioso en un momento. Javier → **nervioso** (masculino).',
            'se puso roja': 'Una reacción visible: la cara cambia de color (she went red, she blushed). Nuria → **roja**.',
            'se quedó sin palabras': 'Quedarse sin + nombre: así quedó Nuria después de la sorpresa (speechless).',
            'se puso muy contenta': 'Otra reacción: la sorpresa la pone contenta. «Muy» va delante del adjetivo.',
            'se puso triste': 'La reacción al ver a su madre lejos: un cambio rápido de emoción.',
            'se quedó callada': 'Callada: el estado en que queda Nuria después; no dice nada durante un rato.',
            'te quedaste': 'Quedarse + tiempo (hasta qué hora) = to stay. Tú → **te quedaste**.',
            'Me quedé': 'Yo → **me quedé** hasta las tres: Elena no se fue de la fiesta hasta esa hora.',
            'se quedó dormido': 'Quedarse dormido = to fall asleep. Nunca «se puso dormido».',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Por qué no fue Marcos a la fiesta?', options: ['Porque se puso enfermo el viernes.', 'Porque estaba en Valencia.', 'Porque tenía que trabajar.'], answer: 0, why: '«El viernes por la noche me puse enfermo y me quedé en casa».', en: 'Why didn’t Marcos go to the party?' },
            { prompt: '¿Por qué se puso nervioso Javier?', options: ['Porque Nuria se puso triste.', 'Porque la música estaba muy alta.', 'Porque Nuria llegó antes y la tarta no estaba.'], answer: 2, why: 'Nuria llamó: «Llego en cinco minutos», y la tarta todavía no estaba en casa.', en: 'Why did Javier get nervous?' },
            { prompt: '¿Qué le pasó al tío Ramiro?', options: ['Se puso muy contento.', 'Se quedó dormido en el sofá.', 'Se fue a las once.'], answer: 1, why: '«El tío Ramiro se quedó dormido en el sofá a las once».', en: 'What happened to uncle Ramiro?' },
          ] },
        ] },
        { title: '¿Reacción, resultado o «to stay»?', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'classify', title: 'La fiesta de Nuria · Nuria’s party', categories: [
            { id: 'reaccion', label: 'PONERSE · reacción rápida', tone: 'orange' },
            { id: 'resultado', label: 'QUEDARSE · el estado de después', tone: 'blue' },
            { id: 'permanecer', label: 'QUEDARSE · to stay (lugar, tiempo)', tone: 'teal' },
          ], items: [
            { text: 'Nuria se puso roja.', answer: 'reaccion', why: 'La cara cambia de color en un momento: reacción.' },
            { text: 'Elena se quedó hasta las tres.', answer: 'permanecer', why: '«Hasta las tres»: un tiempo. Elena no se fue: to stay.' },
            { text: 'Nuria se quedó callada.', answer: 'resultado', why: 'Así quedó Nuria después de ver a su madre: callada.' },
            { text: 'Javier se puso nervioso.', answer: 'reaccion', why: 'De tranquilo a nervioso en un momento.' },
            { text: 'Marcos se quedó en casa.', answer: 'permanecer', why: '«En casa»: un lugar. Marcos no salió.' },
            { text: 'El tío Ramiro se quedó dormido.', answer: 'resultado', why: 'Quedarse dormido: el estado en que quedó el tío.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: «¿Y tú? ¿Te pones rojo o roja con las sorpresas? ¿Te quedas sin palabras?». Tu alumno responde con una frase con ponerse y otra con quedarse.' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Reacción: ponerse. Resultado o lugar: quedarse.',
      steps: [
        { title: 'Más reacciones · More reactions', blocks: [
          { kind: 'choice', items: [
            { context: 'Elena habla de ella. (Elena talks about herself.)', prompt: 'Siempre ___ roja cuando tengo que hablar delante de mucha gente.', options: ['me quedo', 'pongo', 'me pongo'], answer: 2, why: 'Una reacción rápida que pasa siempre: me pongo (presente).', en: 'I always go red when I have to speak in front of a lot of people.' },
            { context: 'La fiesta. (The party.)', prompt: 'Lola, la vecina, no sabía nada. Cuando entró, ___ sorprendida.', options: ['se queda', 'quedó', 'se quedó'], answer: 2, why: 'El estado de después, en un momento del pasado: se quedó sorprendida. Con pronombre.', en: 'Lola, the neighbour, didn’t know anything. When she came in, she was left surprised.' },
            { context: 'El niño de Lola. (Lola’s little boy.)', prompt: 'A las diez, el niño de Lola ___ dormido en sus brazos.', options: ['se quedó', 'se puso', 'estuvo'], answer: 0, why: 'Dormirse sin querer: quedarse dormido. «Se puso dormido» no existe.', en: 'At ten, Lola’s little boy fell asleep in her arms.' },
            { context: 'Marcos explica su fin de semana. (Marcos explains his weekend.)', prompt: 'El viernes ___ enfermo y no fui a la fiesta.', options: ['puse', 'me puse', 'me pusé'], answer: 1, why: 'Un cambio rápido de salud, yo: me puse (irregular, con pronombre y sin tilde). «Pusé» no existe.', en: 'On Friday I got ill and didn’t go to the party.' },
            { context: 'El domingo por la mañana. (Sunday morning.)', prompt: 'Es domingo y Javier ___ muy cansado: solo quiere dormir.', options: ['se pone', 'pone', 'está'], answer: 2, why: 'Describes cómo está Javier ahora, sin cambio: estar.', en: 'It’s Sunday and Javier is very tired: he only wants to sleep.' },
          ] },
        ] },
        { title: '¿Qué verbo? · Which verb?', blocks: [
          { kind: 'classify', title: 'Completa en tu cabeza: ¿se puso o se quedó? · Se puso or se quedó?', categories: [
            { id: 'puso', label: 'SE PUSO… (reacción)', tone: 'orange' },
            { id: 'quedo', label: 'SE QUEDÓ… (resultado o to stay)', tone: 'blue' },
          ], items: [
            { text: '… nervioso antes del examen.', answer: 'puso', why: 'Una emoción que cambia rápido: se puso nervioso.' },
            { text: '… solo en la oficina.', answer: 'quedo', why: 'Todos se fueron y él siguió allí: se quedó solo.' },
            { text: '… enfermo el viernes por la noche.', answer: 'puso', why: 'Un cambio rápido de salud: se puso enfermo.' },
            { text: '… sin batería a las once.', answer: 'quedo', why: 'Quedarse sin + nombre: el resultado (the phone ran out of battery).' },
            { text: '… en casa de un amigo hasta el lunes.', answer: 'quedo', why: 'Un lugar y un tiempo: no volvió a su casa (to stay).' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Cuando abrió el regalo, Nuria puso muy contenta.', ok: false, options: ['Cuando abrió el regalo, Nuria se pone muy contenta.', 'Cuando abrió el regalo, Nuria se puso muy contenta.', 'Cuando abrió el regalo, Nuria se ponió muy contenta.'], answer: 1, why: 'Falta «se», y el pasado de poner es irregular: se puso. «Se pone» es presente.' },
            { sentence: 'Javier se puso nervioso cuando sonó el teléfono.', ok: true, why: 'Correcta: una reacción rápida, con pronombre y forma irregular.' },
            { sentence: 'El sábado Marcos quedó en casa con fiebre.', ok: false, options: ['El sábado Marcos se puso en casa con fiebre.', 'El sábado Marcos se quedó en casa con fiebre.', 'El sábado Marcos se queda en casa con fiebre.'], answer: 1, why: 'To stay = quedarse, con pronombre y en pasado: se quedó.' },
            { sentence: 'Después de la cena, el tío Ramiro se puso dormido.', ok: false, options: ['Después de la cena, el tío Ramiro se quedó dormido.', 'Después de la cena, el tío Ramiro quedó dormido.', 'Después de la cena, el tío Ramiro se ponió dormido.'], answer: 0, why: 'Dormido va con quedarse, y con pronombre: se quedó dormido.' },
            { sentence: 'Delante de todos sus amigos, Nuria se puso rojo.', ok: false, options: ['Delante de todos sus amigos, Nuria puso roja.', 'Delante de todos sus amigos, Nuria se puso roja.', 'Delante de todos sus amigos, Nuria se quedó rojo.'], answer: 1, why: 'El adjetivo concuerda con Nuria: roja.' },
            { sentence: 'Elena se quedó en la fiesta hasta las tres.', ok: true, why: 'Correcta: quedarse + lugar y tiempo = to stay.' },
          ] },
        ] },
        { title: 'El domingo por la mañana · Sunday morning', blocks: [
          { kind: 'chat-fill', title: 'Nuria y Javier hablan de la fiesta · Nuria and Javier talk about the party', lines: [
            { who: 'Javier', text: 'Buenos días. ¿Te gustó la sorpresa?' },
            { who: 'Nuria', text: '¡Me encantó! Cuando abrí la puerta, ___ sin palabras.', options: ['me puse', 'quedé', 'me quedé'], answer: 2, why: 'Sin palabras es el estado en que quedas: quedarse sin palabras. Con pronombre: me quedé.' },
            { who: 'Javier', text: 'Pues yo ___ nerviosísimo cuando llamaste a las ocho.', options: ['me pongo', 'me puse', 'puse'], answer: 1, why: 'Una reacción en un momento del pasado (cuando llamaste): me puse.' },
            { who: 'Nuria', text: '¿Por qué? ¡Si llegué solo un poco antes!' },
            { who: 'Javier', text: 'Porque la tarta todavía no estaba aquí. Y tu madre, ¿qué te dijo después?' },
            { who: 'Nuria', text: 'Que ___ muy contenta con la videollamada.', options: ['se puso', 'puso', 'se ponió'], answer: 0, why: 'Rosa reaccionó con alegría: se puso contenta (pus-, irregular).' },
            { who: 'Javier', text: '¿Y viste al tío Ramiro? ¡___ dormido en el sofá!', options: ['Quedó', 'Se quedó', 'Se puso'], answer: 1, why: 'Quedarse dormido = to fall asleep, con pronombre.' },
            { who: 'Nuria', text: 'Sí, ja, ja. Y Elena ___ hasta las tres para ayudarnos. ¡Qué buena amiga!', options: ['se quedó', 'se puso', 'quedó'], answer: 0, why: '«Hasta las tres»: un tiempo. To stay = se quedó.' },
            { who: 'Javier', text: 'Hoy ___ en casa, ¿vale? Estoy muy cansado.', options: ['nos quedamos', 'nos ponemos', 'se quedan'], answer: 0, why: 'Nosotros + to stay: nos quedamos en casa.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['se', 'puso', 'Nuria', 'roja', 'muy'], accept: ['Nuria se puso muy roja'], en: 'Nuria went very red.' },
            { tiles: ['me', 'quedé', 'Ayer', 'casa', 'en'], accept: ['Ayer me quedé en casa', 'Me quedé en casa ayer'], en: 'Yesterday I stayed at home.' },
            { tiles: ['se', 'quedó', 'El', 'tío', 'dormido', 'en', 'el', 'sofá'], accept: ['El tío se quedó dormido en el sofá', 'En el sofá el tío se quedó dormido'], en: 'The uncle fell asleep on the sofa.' },
            { tiles: ['Cuando', 'vio', 'a', 'su', 'madre', 'se', 'puso', 'triste'], accept: ['Cuando vio a su madre se puso triste', 'Se puso triste cuando vio a su madre'], en: 'When she saw her mother, she got sad.' },
          ] },
        ] },
        { title: 'Del estado al cambio · From state to change', blocks: [
          { kind: 'rewrite', title: 'Cuenta el cambio en pasado · Tell the change in the past', items: [
            { prompt: 'A las siete Javier está tranquilo. A las ocho está nervioso.', instruction: 'Cuenta el cambio con ponerse. Empieza con «A las ocho, Javier…».', accept: ['A las ocho, Javier se puso nervioso', 'A las ocho, Javier se puso muy nervioso'] },
            { prompt: 'El jueves Marcos está bien. El viernes por la noche tiene fiebre.', instruction: 'Cuenta el cambio con ponerse + enfermo. Empieza con «El viernes por la noche, Marcos…».', accept: ['El viernes por la noche, Marcos se puso enfermo'] },
            { prompt: 'Después de la noticia, Rosa no dice nada.', instruction: 'Cuenta el resultado con quedarse + callada, en pasado. Empieza con «Después de la noticia, Rosa…».', accept: ['Después de la noticia, Rosa se quedó callada'] },
            { prompt: 'El domingo, Nuria y Javier no salen: están en casa todo el día.', instruction: 'Usa quedarse = to stay, en pasado. Empieza con «El domingo, Nuria y Javier…».', accept: ['El domingo, Nuria y Javier se quedaron en casa', 'El domingo, Nuria y Javier se quedaron en casa todo el día'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno cuenta la última vez que se puso nervioso o nerviosa y la última vez que se quedó en casa todo el día. Tú repites su frase con la forma correcta si hace falta.' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Un mensaje de voz de Nuria', coach: 'Primero escucha sin leer. Listen first, read later.',
      steps: [
        { title: 'Nuria da las gracias · Nuria says thank you', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general (¿para qué llama Nuria?). Segunda escucha: tu alumno levanta la mano con cada «me puse / se puso» y da una palmada con cada «me quedé / se quedó». Después, las preguntas.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Cuenta cuántas veces oyes ponerse y cuántas quedarse. (Listen for the gist, then for the details.)' } },
          { kind: 'listen', title: 'Un mensaje de voz de Nuria', channel: 'MENSAJE DE VOZ · DE NURIA PARA SU MADRE', src: '/audio/grammar-live/361.mp3',
            before: 'El domingo por la mañana, Nuria manda un mensaje de voz a su madre, Rosa. ¿Qué crees que cuenta: cómo reaccionó, quién se quedó dormido, qué hace hoy…? (On Sunday morning Nuria sends her mother a voice message. What do you think she talks about?)',
            gist: { prompt: '¿Cuál es la idea general? · What is the main idea?', options: ['Nuria cuenta a su madre cómo vivió la fiesta y le da las gracias.', 'Nuria invita a su madre a una fiesta el sábado.', 'Nuria está enferma y no puede salir de casa.'], answer: 0, why: '«Gracias otra vez por la videollamada» y cuenta sus reacciones en la fiesta.', en: 'What is the main idea?' },
            details: [
              { prompt: '¿Cómo reaccionó Nuria cuando abrió la puerta?', options: ['Se quedó sin palabras y se puso muy roja.', 'Se quedó en la calle.', 'Se puso triste.'], answer: 0, why: '«Me quedé sin palabras. Me puse muy roja».', en: 'How did Nuria react when she opened the door?' },
              { prompt: '¿Por qué se puso un poco triste?', options: ['Porque Marcos no fue.', 'Porque su madre vive muy lejos.', 'Porque no había tarta.'], answer: 1, why: '«Me puse un poco triste, porque estás muy lejos».', en: 'Why did she get a little sad?' },
              { prompt: '¿Por qué se puso nervioso Javier?', options: ['Porque Nuria llegó antes y la tarta no estaba.', 'Porque perdió las llaves.', 'Porque la música estaba muy alta.'], answer: 0, why: '«Yo llegué antes de la hora y la tarta todavía no estaba en casa».', en: 'Why did Javier get nervous?' },
              { prompt: '¿Qué hace Nuria hoy?', options: ['Trabaja en la oficina.', 'Va a Valencia.', 'Se queda en casa todo el día.'], answer: 2, why: '«Hoy me quedo en casa todo el día».', en: 'What is Nuria doing today?' },
            ],
            transcript: 'Hola, mamá, soy yo. Gracias otra vez por la videollamada de anoche. ¡Qué sorpresa tan bonita! Cuando abrí la puerta y vi a todos mis amigos, [[me quedé sin palabras|blue]]. [[Me puse muy roja|orange]], ya sabes que siempre me pasa. Y cuando te vi en la pantalla, [[me puse un poco triste|orange]], porque estás muy lejos. Pero luego [[me puse muy contenta|orange]]. Javier me contó que [[se puso muy nervioso|orange]]: yo llegué antes de la hora y la tarta todavía no estaba en casa. La fiesta terminó a las tres. El tío Ramiro [[se quedó dormido|blue]] en el sofá, como siempre. Y hoy [[me quedo en casa|teal]] todo el día, porque [[estoy|violet]] muy cansada. Te llamo esta tarde. Un beso muy grande.',
            reply: { teacher: 'Tú eres Rosa. Tu alumno es Nuria y te cuenta en tres frases otro momento de la fiesta: una reacción con ponerse, un resultado con quedarse y qué va a hacer hoy.', self: 'Responde a Rosa en voz alta como Nuria: cuenta otro momento de la fiesta con «me puse…» y «me quedé…». (Answer as Nuria with “me puse…” and “me quedé…”.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: '¿Y tú cómo reaccionas?', coach: 'Me pongo… Me quedo… I get… I’m left…',
      steps: [
        { title: 'Tus reacciones · Your reactions', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas como Marcos o como una amiga curiosa. Tu alumno habla de sus reacciones reales. Tú repites su frase con la forma correcta (se, puse, el adjetivo) y sigues con la repregunta.', self: 'Lee la pregunta, responde en voz alta con tus reacciones reales y, si quieres, escribe tu respuesta. (Answer aloud about your real reactions.)' } },
          { kind: 'talk', cards: [
            { q: '¿Cuándo te pones nervioso o nerviosa? · When do you get nervous?', followUps: ['¿Te pones rojo o roja también? (Do you go red too?)', '¿Qué haces para estar tranquilo/a? (What do you do to stay calm?)'], phrases: ['[[Me pongo nervioso/a|orange]] cuando…', 'Antes de… siempre [[me pongo|orange]]…', 'Para [[estar|violet]] tranquilo/a, …'], hint: 'Para algo que pasa siempre, usa el presente: me pongo + adjetivo que concuerda contigo.', example: 'Me pongo nerviosa cuando tengo que hablar en inglés en el trabajo. También me pongo un poco roja. Para estar tranquila, respiro despacio.', next: 'Ahora, una sorpresa.', teacher: 'Cuenta tú también: «Yo me pongo nervioso cuando…». Así tu alumno oye otra vez la forma y la concordancia.' },
            { q: '¿Te dieron alguna vez una sorpresa? ¿Cómo reaccionaste? · Did anyone ever surprise you? How did you react?', followUps: ['¿Te quedaste sin palabras? (Were you speechless?)', '¿Te pusiste contento/a o nervioso/a? (Did you get happy or nervous?)'], phrases: ['Una vez mis amigos…', '[[Me quedé sin palabras|blue]] / [[sorprendido/a|blue]].', 'Después [[me puse muy contento/a|orange]].'], hint: 'Primero la reacción rápida (me puse…), después cómo te quedaste (me quedé…).', example: 'Para mi cumpleaños, mi hermana vino de otra ciudad sin decir nada. Cuando la vi, me quedé sin palabras. Después me puse muy contento.', next: 'Ahora, el sueño.' },
            { q: '¿Te quedaste dormido o dormida alguna vez en un mal momento? · Did you ever fall asleep at a bad moment?', followUps: ['¿Dónde estabas? (Where were you?)', '¿Qué pasó después? (What happened next?)'], phrases: ['Una vez [[me quedé dormido/a|blue]] en…', 'Cuando me desperté, …', '[[Me puse rojo/a|orange]] porque…'], hint: 'Quedarse dormido = to fall asleep. Nunca «me puse dormido».', example: 'Una vez me quedé dormido en el cine, en una película muy lenta. Cuando me desperté, la película ya terminaba. Mi novia se puso muy seria.', next: 'Ahora, las malas noticias.' },
            { q: 'Cuando recibes una mala noticia, ¿te pones triste y hablas, o te quedas callado/a? · When you get bad news, do you get sad and talk, or go quiet?', followUps: ['¿Con quién hablas? (Who do you talk to?)', '¿Te quedas en casa o sales? (Do you stay in or go out?)'], phrases: ['[[Me pongo triste|orange]] y…', '[[Me quedo callado/a|blue]] un rato.', 'Prefiero [[quedarme en casa|teal]] / salir.'], hint: 'Ponerse para la reacción, quedarse para el estado de después o para «to stay».', example: 'Cuando recibo una mala noticia, me quedo callada un rato. Después llamo a mi mejor amiga. No me quedo en casa: salgo a caminar.', next: 'Ahora, el fin de semana.' },
            { q: 'El fin de semana pasado, ¿saliste o te quedaste en casa? · Last weekend, did you go out or stay at home?', followUps: ['¿Hasta qué hora te quedaste? (How late did you stay?)', '¿Alguien se puso enfermo? (Did anyone get ill?)'], phrases: ['El sábado [[me quedé en casa|teal]] porque…', 'Fui a… y [[me quedé|teal]] hasta las…', 'Mi hijo / mi amiga [[se puso enfermo/a|orange]].'], hint: 'Con un lugar o un tiempo, quedarse = to stay: me quedé en casa, me quedé hasta las doce.', example: 'El sábado fui a casa de unos amigos y me quedé hasta la una. El domingo llovía, así que me quedé en casa y vi una serie.', teacher: 'Pregunta también: «¿Y cómo estabas el lunes?». Tu alumno usa estar para el estado: «Estaba cansado».' },
            { q: 'Ahora tú eres Elena. Marcos pregunta: «¿Qué tal la fiesta de Nuria?». Cuenta las reacciones de cuatro personas. · Now you are Elena. Tell Marcos how four people reacted.', followUps: ['¿Y Javier, cómo estaba al final? (And Javier, how was he at the end?)', '¿Hasta qué hora te quedaste? (How late did you stay?)'], phrases: ['Javier [[se puso nervioso|orange]] porque…', 'Nuria [[se puso roja|orange]] y [[se quedó sin palabras|blue]].', 'El tío Ramiro [[se quedó dormido|blue]]…'], hint: 'Dos frases con ponerse, dos con quedarse, y cuida el adjetivo: Javier nervioso, Nuria roja.', example: 'Javier se puso nervioso porque Nuria llegó antes. Nuria se puso roja y se quedó sin palabras. Cuando vio a su madre, se quedó callada. El tío Ramiro se quedó dormido en el sofá. Yo me quedé hasta las tres.', teacher: 'Tú eres Marcos y reaccionas: «¿En serio? ¿Y después?». Después, cambian los papeles.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno hace las preguntas («¿Cuándo te pones nervioso?», «¿Te quedaste en casa el sábado?») y tú respondes con tus reacciones reales.', self: 'Ahora haz tú las preguntas en voz alta a una persona imaginaria y respóndelas con otra situación. (Now ask the questions and answer them about a different situation.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Un mensaje para Marcos', coach: 'Reacciones y resultados. Reactions and results.',
      steps: [
        { title: 'Te lo perdiste · You missed it', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos cada «se puso» y «se quedó»: ¿está el pronombre? ¿Concuerda el adjetivo? Después, tu alumno lee su mensaje en voz alta.', self: 'Escribe tu mensaje y toca «Revisar mi texto». Después mira cada ponerse y quedarse: ¿está el pronombre? ¿Concuerda el adjetivo? (Check the pronoun and the adjective.)' } },
          { kind: 'write', title: 'Un mensaje sobre la fiesta · A message about the party', situation: 'Estuviste en la fiesta sorpresa de Nuria (o piensa en una fiesta o una sorpresa real). Un amigo, Marcos, no pudo ir porque estaba enfermo. Escríbele un mensaje para contarle cómo reaccionaron las personas. (You were at Nuria’s surprise party, or think of a real party or surprise. Your friend Marcos couldn’t go because he was ill. Write him a message telling him how people reacted.)', task: [
            'Saluda y pregunta cómo está Marcos. (Say hello and ask how Marcos is.)',
            'Cuenta dos reacciones con ponerse + adjetivo, con el adjetivo bien concordado. (Two reactions with ponerse.)',
            'Cuenta un resultado con quedarse: callado/a, dormido/a, sorprendido/a o sin palabras. (One result with quedarse.)',
            'Di hasta qué hora te quedaste o quién se quedó en casa. (Use quedarse = to stay once.)',
            'Despídete con un buen deseo. (Say goodbye with a good wish.)',
          ], starters: ['¡Hola, Marcos! ¿Ya estás mejor?', 'Te cuento cómo fue la fiesta.', 'Cuando Nuria abrió la puerta, …', 'Javier se puso…', '… se quedó…', 'Yo me quedé hasta…', '¡Que te mejores! Un abrazo.'],
            words: ['se puso', 'me puse', 'se pusieron', 'nervioso/a', 'rojo/a', 'contento/a', 'triste', 'se quedó', 'me quedé', 'callado/a', 'dormido/a', 'sorprendido/a', 'sin palabras', 'hasta las…', 'en casa'],
            model: '¡Hola, Marcos! ¿Ya estás mejor? Te cuento cómo fue la fiesta de Nuria. A las ocho Nuria llamó para decir que llegaba antes, y Javier [[se puso muy nervioso|orange]]: ¡no teníamos la tarta! Por suerte, la tarta llegó a tiempo. Cuando Nuria abrió la puerta, [[se puso roja|orange]] y [[se quedó sin palabras|blue]]. Después habló con su madre por videollamada y [[se quedó callada|blue]] un momento, pero al final [[estaba|violet]] muy contenta. El tío Ramiro [[se quedó dormido|blue]] en el sofá, ¡como siempre! Yo [[me quedé|teal]] hasta las tres. ¡Que te mejores! Un abrazo, Elena.',
            minWords: 60,
            checks: [
              { label: 'Ponerse para una reacción: se puso, me puse… (a reaction with ponerse)', pattern: '(?<!\\p{L})(?:me|te|se|nos|os)\\s+(?:puse|pusiste|puso|pusimos|pusisteis|pusieron|pongo|pones|pone|ponemos|ponéis|ponen)(?!\\p{L})', tip: 'Cuenta una reacción: «Javier se puso nervioso», «Nuria se puso roja».' },
              { label: 'Quedarse: se quedó, me quedé… (quedarse)', pattern: '(?<!\\p{L})(?:me|te|se|nos|os)\\s+qued(?:é|e|aste|ó|o|amos|asteis|aron|as|a|áis|an)(?!\\p{L})', tip: 'Cuenta un resultado o «to stay»: «se quedó sin palabras», «me quedé hasta las tres».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})ponió(?!\\p{L})', why: '«Ponió» no existe: el indefinido de poner es **puso** (se puso nervioso).' },
              { pattern: '(?<!\\p{L})(?:se|me|te|nos)\\s+(?:puso|puse|pusiste|pusimos|pusieron)\\s+(?:muy\\s+)?dormid', why: 'Dormido va con quedarse: **se quedó dormido**, no «se puso dormido».' },
              { pattern: '(?<!(?:me|te|se|nos|os)\\s)(?<!\\p{L})(?:quedé|quedó|quedaron)\\s+(?:dormid|callad|sorprendid|sin\\s+palabras|en\\s+casa|hasta)', why: 'Falta el pronombre: **me quedé**, **se quedó** (dormido, en casa, hasta las tres).' },
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
            { tone: 'violet', label: 'ESTAR · EL ESTADO', formula: 'estar + adjetivo', example: 'A las siete, Javier estaba tranquilo.', caption: 'describe, no hay cambio', en: 'describes; there is no change' },
            { tone: 'orange', label: 'PONERSE · LA REACCIÓN', formula: 'me pongo / me puse + nervioso, rojo, contento, triste, enfermo', example: 'A las ocho, Javier se puso nervioso.', caption: 'un cambio rápido de emoción, color o salud', en: 'a quick change of mood, colour or health' },
            { tone: 'blue', label: 'QUEDARSE · EL RESULTADO', formula: 'me quedo / me quedé + callado, dormido, sorprendido, sin palabras', example: 'Nuria se quedó sin palabras.', caption: 'el estado en que queda la persona después', en: 'the state the person is left in afterwards' },
            { tone: 'teal', label: 'QUEDARSE · TO STAY', formula: 'quedarse + en casa / hasta las tres', example: 'Marcos se quedó en casa.', caption: 'no irse, seguir en un lugar', en: 'not leaving, staying somewhere' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Los dos verbos llevan **siempre** el pronombre: me puse, se quedó. **Ponerse** = la reacción rápida (se puso roja). **Quedarse** = cómo queda la persona después (se quedó callada) o «to stay» (se quedó en casa). El adjetivo concuerda: Nuria se puso **roja**, Javier se puso **rojo**. Y el indefinido de poner es **puso**, nunca «ponió».', en: 'Both verbs always take the pronoun: me puse, se quedó. Ponerse = the quick reaction (se puso roja). Quedarse = how the person is left afterwards (se quedó callada) or “to stay” (se quedó en casa). The adjective agrees: Nuria se puso roja, Javier se puso rojo. And the indefinido of poner is puso, never “ponió”.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'Mi hermano siempre ___ rojo cuando habla en público.', options: ['pone', 'se queda', 'se pone'], answer: 2, why: 'Una reacción rápida que se repite: se pone rojo.', en: 'My brother always goes red when he speaks in public.' },
            { prompt: 'Anoche vi una película muy larga y ___ dormida en el sofá.', options: ['quedé', 'me quedé', 'me puse'], answer: 1, why: 'Quedarse dormido/a = to fall asleep, con pronombre: me quedé.', en: 'Last night I watched a very long film and fell asleep on the sofa.' },
            { prompt: 'Llovía mucho, así que mi novia y yo ___ en casa.', options: ['nos quedamos', 'se quedaron', 'nos pusimos'], answer: 0, why: 'Con un lugar, to stay; sujeto «mi novia y yo» = nosotros: nos quedamos.', en: 'It was raining hard, so my girlfriend and I stayed at home.' },
            { prompt: 'Cuando el médico le dio la noticia, Ana ___ pálida.', options: ['se puso', 'puso', 'se ponió'], answer: 0, why: 'Una reacción rápida, en pasado, con la forma irregular: se puso.', en: 'When the doctor gave her the news, Ana went pale.' },
            { prompt: 'Ahora Pedro ___ enfermo: tiene fiebre y no sale de la cama.', options: ['pone', 'está', 'se queda'], answer: 1, why: 'Describes cómo está Pedro ahora, sin contar el cambio: estar.', en: 'Pedro is ill now: he has a fever and won’t get out of bed.' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Ahora, una entrevista de trabajo.', blocks: [
          { kind: 'lead', text: 'Pablo, el hermano de Elena, tuvo ayer una entrevista de trabajo. Cuenta sus reacciones con ponerse y quedarse.', en: 'Pablo, Elena’s brother, had a job interview yesterday. Tell his reactions with ponerse and quedarse.' },
          { kind: 'rewrite', title: 'La entrevista de Pablo · Pablo’s interview', items: [
            { prompt: 'Pablo está tranquilo. Entra en la sala y ve a cinco personas: → nervioso.', instruction: 'Cuenta el cambio en pasado. Empieza con «Cuando vio a cinco personas, Pablo…».', accept: ['Cuando vio a cinco personas, Pablo se puso nervioso', 'Cuando vio a cinco personas, Pablo se puso muy nervioso'] },
            { prompt: 'Le hacen una pregunta muy difícil. Pablo no dice nada durante unos segundos.', instruction: 'Usa quedarse + callado, en pasado. Empieza con «Con la pregunta difícil, Pablo…».', accept: ['Con la pregunta difícil, Pablo se quedó callado', 'Con la pregunta difícil, Pablo se quedó callado unos segundos'] },
            { prompt: 'Al final le dicen: «El puesto es tuyo». Pablo → muy contento.', instruction: 'Cuenta la reacción en pasado. Empieza con «Al final, Pablo…».', accept: ['Al final, Pablo se puso muy contento'] },
            { prompt: 'Por la tarde Pablo no sale: está en casa con su familia.', instruction: 'Usa quedarse = to stay, en pasado. Empieza con «Por la tarde, Pablo…».', accept: ['Por la tarde, Pablo se quedó en casa', 'Por la tarde, Pablo se quedó en casa con su familia'] },
          ] },
        ] },
        { title: 'Ampliación · Quedarse sin, quedarse en blanco', mascot: '/brand/mascot/portrait.webp', coach: 'Opcional: un paso más. Optional: one step further.', blocks: [
          { kind: 'tip', icon: '💡', title: 'Expresiones con quedarse · Expressions with quedarse', text: 'Quedarse aparece en expresiones muy frecuentes: **quedarse sin** + nombre (me quedé sin batería, sin dinero, sin tarta), **quedarse en blanco** (no recordar nada en un momento: my mind went blank) y **quedarse dormido** también con el sentido de despertarse tarde (to oversleep). Para cambios más grandes, de profesión o de carácter, en B1 y B2 verás otros verbos: «se hizo médica» (became), «se volvió muy tranquilo» (became, changed character), «se convirtió en un problema» (turned into). Hoy solo los reconoces.', en: 'Quedarse appears in very frequent expressions: quedarse sin + noun (I ran out of battery, money, cake), quedarse en blanco (my mind went blank) and quedarse dormido also meaning to oversleep. For bigger changes, of profession or character, at B1 and B2 you will see other verbs: “se hizo médica”, “se volvió muy tranquilo”, “se convirtió en un problema”. Today you only need to recognise them.' },
          { kind: 'choice', title: 'Un paso más · One step further', items: [
            { prompt: 'En el examen oral ___ en blanco: no recordaba nada.', options: ['me puse', 'quedé', 'me quedé'], answer: 2, why: 'Quedarse en blanco = my mind went blank. Con pronombre: me quedé.', en: 'In the oral exam my mind went blank: I couldn’t remember anything.' },
            { prompt: 'Mi móvil ___ sin batería en medio de la llamada.', options: ['se quedó', 'quedó', 'se puso'], answer: 0, why: 'Quedarse sin + nombre: el resultado (the phone ran out of battery).', en: 'My phone ran out of battery in the middle of the call.' },
            { prompt: 'Esta mañana ___ dormido y llegué tarde al trabajo.', options: ['me puse', 'me quedé', 'estuve'], answer: 1, why: 'Quedarse dormido también significa despertarse tarde (to oversleep).', en: 'This morning I overslept and got to work late.' },
            { prompt: 'Lee: «Con los años, mi abuelo se volvió muy tranquilo». ¿Qué significa?', options: ['Un momento se puso tranquilo y después nervioso.', 'Se quedó tranquilo en casa una tarde.', 'Con el tiempo cambió su carácter: ahora es tranquilo.'], answer: 2, why: 'Volverse (B1) cuenta un cambio de carácter, lento y duradero. Hoy solo lo reconoces.', en: 'Read: “Con los años, mi abuelo se volvió muy tranquilo.” What does it mean?' },
          ] },
          { kind: 'teacher', text: 'Paso opcional, para alumnos fuertes o si sobra tiempo. Tu alumno cuenta un momento en que se quedó en blanco o sin batería. Hacerse y volverse son solo de reconocimiento: no hace falta producirlos.' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 062 · Gustar, interesar, doler, faltar: concordancia', text: 'Ya cuentas cómo reacciona una persona: «se puso nerviosa», «se quedó callada», «me quedé en casa». En la clase 062 sigues hablando de lo que sientes, pero con otros verbos y otros pronombres: «**me duelen** los pies», «**me falta** tiempo», «**le interesa** el arte». Es el paso natural: ahora el pronombre dice a quién le pasa algo y el verbo concuerda con la cosa que gusta, duele o falta.', en: 'You can now tell how a person reacts: “se puso nerviosa”, “se quedó callada”, “me quedé en casa”. In class 062 you keep talking about how you feel, but with other verbs and other pronouns: “me duelen los pies” (my feet hurt), “me falta tiempo” (I’m short of time), “le interesa el arte” (he’s interested in art). It is the natural next step: now the pronoun says who something happens to, and the verb agrees with the thing that is liked, hurts or is missing.', href: '/gramatica/gustar-interesar-doler-faltar-concordancia', label: 'Ir a la clase 062' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Cuál fue la última vez que te quedaste sin palabras? ¿Y cuándo te pusiste muy contento o contenta?». Respuesta esperada: una frase con quedarse y otra con ponerse, con el adjetivo concordado. Tarea: escribir el mensaje de Escribir sobre una celebración real.' },
        ] },
      ],
    },
  ],
};
