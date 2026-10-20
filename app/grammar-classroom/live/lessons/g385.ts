import type { LiveLesson } from '../types';

/**
 * Lesson 385 · A2 · Revisión narrativa A2 y mensajes prácticos (course unit G085).
 * The A2 closing review: no new grammar, the learner combines what A2 taught.
 * One scene runs through the class: Estudio Faro, a small design studio in
 * Zaragoza. On Monday Elisa Navarro had a 9:00 presentation for a client,
 * señora Ibarra (a new logo for her bakery). She took the bus (her bike has
 * been at the repair shop for two weeks; she used to cycle), it was raining,
 * there was heavy traffic, there was an accident on the avenue, the bus was
 * stopped for twenty minutes, her phone had no battery, so she arrived at 9:40.
 * Her colleague Noelia Prieto started the presentation; the client liked the
 * logo. On Tuesday Elisa tells Ramón Gil, the studio head, what happened and
 * organises the week (Wednesday she has a dentist appointment). In the voice
 * message Noelia (Spanish voice, tú) tells her side and asks for two things;
 * in Escribir the learner answers her.
 * Review scope (G045–G084): indefinido for events and closed periods (llegué,
 * hubo, estuvo veinte minutos); imperfecto for scene, cause and old habits
 * (había, llovía, tenía), solía + infinitivo; perfecto for today (hoy he
 * hablado, ya, todavía no: dominant in most of Spain, where the scene is set;
 * hoy hablé is common in much of Latin America; ayer + indefinido is the
 * general norm); connectors (primero, luego, de repente, al final, porque,
 * por eso, así que); practical messages: ¿puedes / podrías + infinitivo?,
 * affirmative imperative with attached pronouns (llámame, envíamelas,
 * dáselas), pronouns before a conjugated verb (te las envío), se for general
 * rules (la sala se reserva en recepción), hay que / tener que, gracias por,
 * para + deadline, pasar por. Anchor: Ayer llegué tarde porque había tráfico.
 * Mistakes: *ayer he llegado, *era mucho tráfico, *solía a ir, *¿puedes me
 * enviar?, *gracias para, *le las doy. Ampliación: the same messages with
 * usted (¿podría…?, llámeme, gracias por su…). No pluperfect, no subjunctive
 * (except the formula «no te preocupes», class 059). Instructions use tú.
 */
export const lesson: LiveLesson = {
  id: 385,
  level: 'A2',
  title: 'Revisión narrativa A2 y mensajes prácticos',
  subtitle: 'Contar qué pasó con escena, hechos y causas, y escribir mensajes claros para pedir, dar instrucciones y agradecer.',
  legend: [
    { tone: 'blue', label: 'ESCENA, CAUSA, COSTUMBRE · imperfecto y solía: había, llovía, solía ir (background, reason, old habit)' },
    { tone: 'orange', label: 'HECHOS · indefinido: llegué, hubo, estuvo veinte minutos (what happened)' },
    { tone: 'teal', label: 'HOY · perfecto: he hablado, ya, todavía no (today, up to now)' },
    { tone: 'violet', label: 'MENSAJE · ¿podrías…?, envíamelas, se reserva, gracias por, para el viernes (requests and instructions)' },
  ],
  optionNotes: {
    'solió': 'Soler casi no se usa en indefinido. Para una costumbre de otra época: **solía** + infinitivo.',
    'por eso': '«Por eso» va delante de la **consecuencia**: «Llovía; por eso tomé el autobús». Para dar la causa: **porque**.',
    'Pudiste': '«¿Pudiste…?» pregunta por el pasado (did you manage to…?). Para pedir algo con amabilidad: **¿Podrías…?**',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Contar y pedir', coach: 'Repasamos todo el A2. We review all of A2.',
      steps: [
        { title: 'Un lunes complicado · A difficult Monday', blocks: [
          { kind: 'lead', text: 'Elisa Navarro es diseñadora en Estudio Faro, un pequeño estudio de diseño en Zaragoza. El lunes tenía una presentación a las nueve con una clienta, la señora Ibarra. Pero **llegó** tarde: **había** mucho tráfico. Hoy, martes, Elisa cuenta qué pasó y escribe mensajes para organizar la semana. Esta clase es el **repaso final de A2**: no hay gramática nueva. Juntas todo lo que ya sabes para contar una historia y escribir mensajes prácticos.', en: 'Elisa Navarro is a designer at Estudio Faro, a small design studio in Zaragoza. On Monday she had a presentation at nine with a client, Mrs Ibarra. But she arrived late: there was a lot of traffic. Today, Tuesday, Elisa tells what happened and writes messages to organise the week. This class is the final A2 review: there is no new grammar. You put together everything you know to tell a story and write practical messages.' },
          { kind: 'guide', text: { teacher: 'Tú lees las tres frases de Elisa y tu alumno repite. Después tu alumno dice qué frase cuenta un hecho, cuál explica la causa y cuál pide algo.', self: 'Lee las tres frases en voz alta. ¿Cuál cuenta un hecho? ¿Cuál explica la causa? ¿Cuál pide algo? (Which one tells an event, which one gives the reason, which one asks for something?)' } },
          { kind: 'compare', title: 'Tres frases de Elisa · Three of Elisa’s sentences', columns: [
            { tone: 'orange', label: 'HECHO · indefinido', sentence: 'Ayer [[llegué|orange]] tarde…', idea: 'Lo que pasó: un hecho completo.', en: 'Yesterday I arrived late… (what happened)' },
            { tone: 'blue', label: 'ESCENA Y CAUSA · imperfecto', sentence: '…porque [[había|blue]] mucho tráfico.', idea: 'La situación que explica el hecho.', en: '…because there was a lot of traffic. (the situation behind it)' },
            { tone: 'violet', label: 'MENSAJE · pedir', sentence: '[[¿Podrías enviarme|violet]] las notas?', idea: 'Pedir algo hoy, con amabilidad.', en: 'Could you send me the notes? (a polite request)' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Ayer llegué tarde» cuenta…', options: ['la escena de la historia.', 'un hecho completo de ayer.', 'una costumbre de antes.'], answer: 1, why: '«Llegué» es indefinido: un hecho que pasó y terminó.', en: '“Ayer llegué tarde” tells…' },
            { prompt: '«…porque había mucho tráfico» sirve para…', options: ['hablar de hoy.', 'contar el siguiente hecho.', 'describir la situación que explica el hecho.'], answer: 2, why: '«Había» es imperfecto: la situación en ese momento, la causa.', en: '“…because there was a lot of traffic” is used to…' },
            { prompt: 'Elisa necesita las notas de la reunión. ¿Qué le escribe a Ramón?', options: ['Ramón enviaba las notas.', '¿Podrías enviarme las notas?', '¿Enviaste las notas?'], answer: 1, why: '¿Podrías + infinitivo? es una petición amable. Las otras frases hablan del pasado.', en: 'Elisa needs the meeting notes. What does she write to Ramón?' },
          ] },
        ] },
        { title: 'Escena, hechos y causa · Scene, events and reason', mascot: '/brand/mascot/studying.webp', coach: '¿Cómo era? ¿Qué pasó? What was it like? What happened?', blocks: [
          { kind: 'table', title: 'El lunes de Elisa · Elisa’s Monday', head: ['ESCENA Y CAUSA · imperfecto', 'HECHOS · indefinido'], rows: [
            ['[[Eran|blue]] las ocho y cuarto. (It was a quarter past eight.)', 'Elisa [[salió|orange]] de casa y [[tomó|orange]] el autobús. (She left home and took the bus.)'],
            ['[[Llovía|blue]] y [[había|blue]] mucho tráfico. (It was raining and there was a lot of traffic.)', 'En la avenida [[hubo|orange]] un accidente. (There was an accident on the avenue.)'],
            ['El móvil no [[tenía|blue]] batería. (Her phone had no battery.)', 'El autobús [[estuvo|orange]] parado veinte minutos. (The bus was stopped for twenty minutes.)'],
            ['La clienta ya [[estaba|blue]] en la sala. (The client was already in the room.)', 'Elisa [[llegó|orange]] a las diez menos veinte. (She arrived at twenty to ten.)'],
          ], note: 'Recuerda tres claves (clases 050 y 084): la **hora** en una historia es escena (eran las ocho); un accidente **pasa** (hubo, no «era»); un período con límites es un hecho (estuvo **veinte minutos**).' },
          { kind: 'tip', icon: '💡', title: 'Dos causas correctas · Two correct reasons', text: '«Llegué tarde porque **había** mucho tráfico» explica la causa como una **situación**. «Llegué tarde porque **hubo** un accidente» explica la causa como un **hecho** que pasó. Las dos frases son correctas: porque no decide el tiempo; decides tú.', en: '“Llegué tarde porque había mucho tráfico” gives the reason as a situation. “Llegué tarde porque hubo un accidente” gives the reason as an event that happened. Both are correct: “porque” does not choose the tense; you do.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Cuando Elisa salió de casa, ___ mucho.', options: ['llovió', 'llovía', 'ha llovido'], answer: 1, why: 'La lluvia es la escena en el momento de salir: llovía.', en: 'When Elisa left home, it was raining hard.' },
            { prompt: 'El autobús ___ parado veinte minutos.', options: ['estaba', 'estuvo', 'era'], answer: 1, why: '«Veinte minutos» es un período con principio y final: estuvo.', en: 'The bus was stopped for twenty minutes.' },
            { prompt: '___ las diez menos veinte cuando Elisa entró en la sala.', options: ['Hubo', 'Fueron', 'Eran'], answer: 2, why: 'La hora es el fondo de la historia: eran.', en: 'It was twenty to ten when Elisa went into the room.' },
          ] },
        ] },
        { title: 'Antes, ayer y hoy · Before, yesterday and today', mascot: '/brand/mascot/standing.webp', coach: 'Mira el marcador de tiempo. Look at the time word.', blocks: [
          { kind: 'table', title: 'Cuatro preguntas, cuatro formas · Four questions, four forms', head: ['Pregunta', 'Forma y marcadores', 'Ejemplo de Elisa'], rows: [
            ['¿Qué pasó? (what happened?)', 'indefinido · ayer, el lunes, hace dos semanas', 'Ayer [[tomé|orange]] el autobús.'],
            ['¿Cómo era? ¿Por qué? (what was it like? why?)', 'imperfecto · en ese momento, cuando', 'Cuando salí, [[llovía|blue]].'],
            ['¿Qué hacías antes? (old habit)', 'solía + infinitivo o imperfecto · antes, siempre', 'Antes [[solía ir|blue]] en bici.'],
            ['¿Qué has hecho hoy? (today, up to now)', 'perfecto · hoy, esta semana, ya, todavía no', 'Hoy ya [[he hablado|teal]] con la clienta.'],
          ], note: 'Elisa vive en España: para hoy usa el perfecto («hoy he hablado»). En gran parte de América es muy frecuente «hoy hablé»: las dos formas son correctas (clase 051). Con **ayer**, la norma general es el indefinido: «ayer hablé».' },
          { kind: 'decide', title: '¿Qué pasado uso? · Which past tense?', steps: [
            { q: '¿Hablas de hoy o de esta semana, o usas ya / todavía no?', yes: '**Perfecto** (frecuente en España): «Hoy he hablado con ella». En gran parte de América también: «Hoy hablé con ella».', no: 'next' },
            { q: '¿Es un hecho de ayer, del lunes, de hace dos semanas, o un período con límites (veinte minutos)?', yes: '**Indefinido**: «Ayer tomé el autobús», «Estuvo parado veinte minutos».', no: 'next' },
            { q: '¿Describes la escena, la causa o una costumbre de antes?', yes: '**Imperfecto** o **solía + infinitivo**: «Llovía», «Antes solía ir en bici».', no: 'Haz la pregunta: ¿qué pasó?, ¿cómo era?, ¿qué has hecho hoy?' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Hoy Elisa ya ___ con la clienta por teléfono.', options: ['solía hablar', 'hablaba', 'ha hablado'], answer: 2, why: '«Hoy» y «ya»: un balance de hoy. Perfecto (en gran parte de América también «ya habló»).', en: 'Today Elisa has already spoken to the client on the phone.' },
            { prompt: 'Antes Elisa ___ venir al estudio en bici.', options: ['ha solido', 'solía', 'suele'], answer: 1, why: 'Una costumbre de otra época, con «antes»: solía + infinitivo.', en: 'Elisa used to come to the studio by bike.' },
            { prompt: 'La bici está en el taller. Elisa la ___ allí hace dos semanas.', options: ['llevó', 'llevaba', 'ha llevado'], answer: 0, why: '«Hace dos semanas»: un momento cerrado del pasado. Indefinido: llevó.', en: 'The bike is at the repair shop. Elisa took it there two weeks ago.' },
          ] },
        ] },
        { title: 'Ordenar y explicar · Order and explain', mascot: '/brand/mascot/speaking.webp', coach: 'Primero, luego, al final. First, then, in the end.', blocks: [
          { kind: 'concept', tone: 'neutral', label: 'CONECTORES · ORDEN Y CAUSA', question: '¿En qué orden pasó? ¿Por qué? ¿Y qué pasó entonces?', en: 'In what order did it happen? Why? And what happened as a result?', formula: ['primero · luego / después · de repente · al final', 'porque + causa · por eso / así que + consecuencia'],
            meaning: 'Los conectores ordenan la historia y unen las causas y las consecuencias. **Porque** va delante de la causa; **por eso** y **así que** van delante de la consecuencia.',
            examples: [
              { es: '**Primero** tomé el autobús; **luego** el autobús paró en la avenida.', en: 'First I took the bus; then the bus stopped on the avenue.' },
              { es: 'El móvil no tenía batería, **así que** no pude llamar.', en: 'My phone had no battery, so I couldn’t call.' },
              { es: '**Al final**, a la clienta le gustó mucho el logo.', en: 'In the end, the client really liked the logo.' },
            ] },
          { kind: 'compare', title: 'Causa o consecuencia · Reason or result', columns: [
            { tone: 'blue', label: 'PORQUE · la causa', sentence: 'Noelia empezó la presentación **porque** Elisa no estaba.', idea: 'Después de porque: ¿por qué?', en: 'Noelia started the presentation because Elisa wasn’t there.' },
            { tone: 'orange', label: 'POR ESO · la consecuencia', sentence: 'Elisa no estaba; **por eso** Noelia empezó la presentación.', idea: 'Después de por eso: ¿qué pasó entonces?', en: 'Elisa wasn’t there; that’s why Noelia started the presentation.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Llovía mucho, ___ Elisa no fue en bici.', options: ['primero', 'porque', 'así que'], answer: 2, why: '«No fue en bici» es la consecuencia de la lluvia: así que.', en: 'It was raining hard, so Elisa didn’t go by bike.' },
            { prompt: 'Noelia quería esperar a Elisa, ___ la clienta tenía prisa.', options: ['por eso', 'al final', 'pero'], answer: 2, why: 'Las dos ideas se oponen: quería esperar, pero la clienta tenía prisa. «Por eso» va delante de una consecuencia.', en: 'Noelia wanted to wait for Elisa, but the client was in a hurry.' },
            { prompt: '___, todo salió bien y la clienta firmó.', options: ['Al final', 'Primero', 'Porque'], answer: 0, why: '«Al final» presenta el último hecho, el resultado de la historia.', en: 'In the end, everything went well and the client signed.' },
          ] },
        ] },
        { title: 'Mensajes prácticos · Practical messages', mascot: '/autoestudio/mascot/noting.webp', coach: 'Pedir, indicar, agradecer. Ask, instruct, thank.', blocks: [
          { kind: 'table', title: 'Lo que ya sabes para escribir mensajes · What you know for messages', head: ['Quiero… (I want to…)', 'Forma', 'Ejemplo'], rows: [
            ['pedir algo con amabilidad (ask politely)', '¿Puedes / Podrías + infinitivo?', '[[¿Podrías llamar|violet]] a la imprenta?'],
            ['dar una instrucción a una persona (tell someone to do something)', 'imperativo + pronombre pegado', '[[Llámame|violet]] a las diez. Las muestras: [[dáselas|violet]] a la clienta.'],
            ['usar pronombres con un verbo conjugado', 'pronombres delante del verbo', 'Las notas [[te las envío|violet]] ahora.'],
            ['explicar una norma general (a general rule)', 'se + verbo en 3.ª persona', 'La sala [[se reserva|violet]] en recepción. Los cafés [[se piden|violet]] allí.'],
            ['decir una obligación (say what is necessary)', 'hay que / tener que + infinitivo', '**Hay que** enviar el presupuesto. **Tienes que** firmar aquí.'],
            ['agradecer, dar un plazo, decir por dónde (thank, deadline, route)', 'gracias por · para + fecha · pasar por', '[[Gracias por|violet]] esperar. Es [[para el viernes|violet]]. **Pasa por** recepción.'],
          ], note: 'Con un pronombre al final, el imperativo suele llevar tilde: llama → **llámame**, envía → **envíamelas**, da → **dáselas** (clase 065). Le + lo/la/los/las → **se** lo/la/los/las (clase 064).' },
          { kind: 'tip', icon: '💡', title: 'Tú o usted · Tú or usted', text: 'Con Noelia y Ramón, Elisa usa **tú**: «¿Puedes llamarme?», «Envíamelo». Con la clienta usa **usted**: «¿Podría llamarme?», «Envíemelo, por favor». Practicas el usted en la Ampliación.', en: 'With Noelia and Ramón, Elisa uses tú: “¿Puedes llamarme?”, “Envíamelo”. With the client she uses usted: “¿Podría llamarme?”, “Envíemelo, por favor”. You practise usted in the extension step.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Las fotos del logo, Ramón: ¿___?', options: ['puedes me las enviar', 'me las puedes enviar', 'me puedes las enviar'], answer: 1, why: 'Con un verbo conjugado, los pronombres van delante: me las puedes enviar (o puedes enviármelas).', en: 'The photos of the logo, Ramón: can you send them to me?' },
            { prompt: 'En el estudio, la sala ___ en recepción.', options: ['se reserva', 'reservas', 'se reservan'], answer: 0, why: 'Una norma general con se: el verbo concuerda con «la sala», singular.', en: 'At the studio, the meeting room is booked at reception.' },
            { prompt: 'Muchas gracias ___ tu ayuda, Noelia.', options: ['por', 'para', 'de'], answer: 0, why: 'Agradecer: gracias por + nombre o infinitivo.', en: 'Thank you very much for your help, Noelia.' },
          ] },
        ] },
        { title: 'Errores frecuentes de A2 · Common A2 mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Seis errores típicos. Six typical mistakes.', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la frase con el error y tu alumno explica qué falla y qué clase de A2 lo resuelve. Después aparece la corrección.', self: 'Lee cada frase y busca el error antes de tocar. (Find the mistake before you tap.)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Ayer he llegado tarde al estudio.', right: 'Ayer llegué tarde al estudio.', why: 'Con ayer, la norma general es el indefinido: llegué. El perfecto es para hoy, esta semana, ya… (With ayer: indefinido.)' },
            { wrong: 'Era mucho tráfico en la avenida.', right: 'Había mucho tráfico en la avenida.', why: 'Para decir que algo existe o está allí, haber: había. «Era» (ser) describe o da la hora. (There was = había.)' },
            { wrong: 'Antes solía a ir en bici.', right: 'Antes solía ir en bici.', why: 'Solía + infinitivo, sin preposición. (No “a” after solía.)' },
            { wrong: '¿Puedes me enviar las notas?', right: '¿Puedes enviarme las notas? / ¿Me puedes enviar las notas?', why: 'El pronombre va pegado al infinitivo o delante del verbo conjugado, nunca entre los dos. (Pronoun: before puedes or attached to enviar.)' },
            { wrong: 'Gracias para tu paciencia.', right: 'Gracias por tu paciencia.', why: 'Agradecer siempre con por: gracias por + nombre o infinitivo. (Thanks for = gracias por.)' },
            { wrong: 'Las muestras son para la clienta: le las doy mañana.', right: 'Las muestras son para la clienta: se las doy mañana.', why: 'Le + las no es posible: le se cambia por se. (le las → se las.)' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'El lunes ___ un accidente en la avenida.', options: ['hubo', 'ha habido', 'era'], answer: 0, why: 'Un accidente pasa: haber en indefinido, hubo. «El lunes» es un día cerrado.', en: 'On Monday there was an accident on the avenue.' },
            { prompt: 'Ramón quiere el logo. Elisa: «___ envío ahora».', options: ['Lo le', 'Le lo', 'Se lo'], answer: 2, why: 'Le + lo → se lo. Primero el indirecto (se), después el directo (lo).', en: 'Ramón wants the logo. Elisa: “I’ll send it to him now.”' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno cuenta en tres frases un día en que llegó tarde (escena, hecho, causa) y termina con una petición a un compañero: «¿Puedes…?».' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'El martes en el estudio', coach: 'Toca las palabras marcadas. Tap the marked words.',
      steps: [
        { title: 'Elisa habla con Ramón · Elisa talks to Ramón', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Ramón y tu alumno es Elisa. Después tu alumno toca cada palabra marcada y dice si cuenta, describe, hace balance de hoy o pide algo.', self: 'Lee el diálogo en voz alta. Después toca cada palabra marcada y di: ¿hecho, escena, hoy o mensaje? (Event, scene, today or message?)' } },
          { kind: 'explore', title: '¿Qué pasó ayer?', setting: 'Martes, ocho y media de la mañana, en Estudio Faro. Ramón Gil, el responsable del estudio, habla con Elisa. Se tratan de tú. (Tuesday, half past eight in the morning, at Estudio Faro. Ramón Gil, the head of the studio, talks to Elisa.)', lines: [
            { who: 'Ramón', text: 'Buenos días, Elisa. Hoy [[has llegado|teal]] muy temprano. Oye, ¿qué [[pasó|orange]] ayer?', en: 'Good morning, Elisa. You’ve arrived very early today. Hey, what happened yesterday?' },
            { who: 'Elisa', text: 'Lo siento mucho, Ramón. Ayer [[llegué|orange]] tarde porque [[había|blue]] muchísimo tráfico.', en: 'I’m really sorry, Ramón. Yesterday I arrived late because there was a huge amount of traffic.' },
            { who: 'Ramón', text: 'Pero tú antes [[solías venir|blue]] en bici, ¿no?', en: 'But you used to come by bike, didn’t you?' },
            { who: 'Elisa', text: 'Sí, pero la bici está en el taller desde hace dos semanas. Ayer [[tomé|orange]] el autobús, [[llovía|blue]] y en la avenida [[hubo|orange]] un accidente.', en: 'Yes, but the bike has been at the repair shop for two weeks. Yesterday I took the bus, it was raining and there was an accident on the avenue.' },
            { who: 'Ramón', text: '¡Vaya! ¿Y por qué no [[llamaste|orange]]?', en: 'Oh dear! And why didn’t you call?' },
            { who: 'Elisa', text: 'El móvil no [[tenía|blue]] batería, así que no [[pude|orange]] llamar. Y el autobús [[estuvo|orange]] parado veinte minutos.', en: 'My phone had no battery, so I couldn’t call. And the bus was stopped for twenty minutes.' },
            { who: 'Ramón', text: 'Bueno, no pasa nada. Noelia [[empezó|orange]] la presentación y, al final, a la señora Ibarra le [[gustó|orange]] mucho el logo.', en: 'Well, never mind. Noelia started the presentation and, in the end, Mrs Ibarra really liked the logo.' },
            { who: 'Elisa', text: '¡Qué bien! Esta mañana ya [[he hablado|teal]] con ella por teléfono, pero todavía no le [[he enviado|teal]] el presupuesto.', en: 'Great! I’ve already spoken to her on the phone this morning, but I haven’t sent her the quote yet.' },
            { who: 'Ramón', text: 'Tranquila, es [[para el viernes|violet]]. ¿Necesitas algo?', en: 'Don’t worry, it’s for Friday. Do you need anything?' },
            { who: 'Elisa', text: 'Sí. [[¿Podrías enviarme|violet]] las notas de la reunión?', en: 'Yes. Could you send me the notes from the meeting?' },
            { who: 'Ramón', text: 'Claro, [[te las envío|violet]] ahora. Y mañana, ¿estás aquí a las nueve?', en: 'Sure, I’ll send them to you now. And tomorrow, are you here at nine?' },
            { who: 'Elisa', text: 'No, tengo cita con el dentista. Le dejo instrucciones a Noelia: la sala [[se reserva|violet]] en recepción y las muestras están en mi mesa. [[Gracias por|violet]] tu paciencia, Ramón.', en: 'No, I have a dentist appointment. I’ll leave Noelia some instructions: the room is booked at reception and the samples are on my desk. Thanks for your patience, Ramón.' },
          ], notes: {
            'has llegado': 'Perfecto: un hecho de **hoy**. En España es lo más frecuente; en gran parte de América se oye también «hoy llegaste temprano».',
            'pasó': 'Indefinido: Ramón pregunta por un hecho de **ayer**. ¿Qué pasó? pide hechos en la respuesta.',
            'llegué': 'Indefinido, yo: el hecho principal de la historia. Con **ayer**, indefinido (no «he llegado»).',
            'había': 'Haber en imperfecto: la **situación** que explica el retraso. No «era mucho tráfico».',
            'solías venir': 'Soler en imperfecto + infinitivo, sin preposición: una **costumbre de antes** (used to come).',
            'tomé': 'Indefinido: un hecho completo. Tomar el autobús = to take the bus.',
            'llovía': 'Imperfecto: la escena, el tiempo que hacía en ese momento.',
            'hubo': 'Haber en indefinido: el accidente **pasó**, es un hecho. Compara: había tráfico (situación).',
            'llamaste': 'Indefinido, tú: Ramón pregunta por una acción concreta de ayer.',
            'tenía': 'Imperfecto: cómo estaba el móvil en ese momento. Es la causa.',
            'pude': 'Poder en indefinido (irregular): **pude**. Después de «así que», la consecuencia.',
            'estuvo': 'Estar en indefinido: **veinte minutos** es un período con límites. Por eso no «estaba».',
            'empezó': 'Indefinido: un hecho. Noelia empezó cuando Elisa no estaba.',
            'gustó': 'Gustar en indefinido: **le gustó** el logo (a la señora Ibarra). Un hecho, el resultado.',
            'he hablado': 'Perfecto con «esta mañana» y «ya»: un balance de hoy (frecuente en España).',
            'he enviado': 'Perfecto con «todavía no»: la acción esperada aún no pasó. Le = a ella, a la clienta.',
            'para el viernes': 'Para + fecha: el **plazo** (deadline). El presupuesto tiene que estar listo el viernes.',
            '¿Podrías enviarme': '¿Podrías + infinitivo? Una petición amable. El pronombre **me** va pegado al infinitivo.',
            'te las envío': 'Dos pronombres delante del verbo conjugado: te (a ti) + las (las notas). Primero el indirecto.',
            'se reserva': 'Se + verbo en singular: una **norma general**, sin decir quién. Concuerda con «la sala».',
            'Gracias por': 'Agradecer: **gracias por** + nombre (tu paciencia) o infinitivo (esperar). Nunca «gracias para».',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Por qué no llamó Elisa?', options: ['Porque estaba en la presentación.', 'Porque el móvil no tenía batería.', 'Porque no tenía el número de Ramón.'], answer: 1, why: '«El móvil no tenía batería, así que no pude llamar».', en: 'Why didn’t Elisa call?' },
            { prompt: '¿Qué ha hecho Elisa esta mañana?', options: ['Ha llevado la bici al taller.', 'Ha enviado el presupuesto.', 'Ha hablado con la señora Ibarra por teléfono.'], answer: 2, why: '«Esta mañana ya he hablado con ella por teléfono». El presupuesto todavía no.', en: 'What has Elisa done this morning?' },
            { prompt: '¿Por qué no está Elisa mañana a las nueve?', options: ['Porque tiene cita con el dentista.', 'Porque tiene una presentación.', 'Porque va al taller.'], answer: 0, why: '«No, tengo cita con el dentista».', en: 'Why won’t Elisa be there tomorrow at nine?' },
          ] },
        ] },
        { title: '¿Contar o pedir? · Telling or asking?', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'classify', title: 'Las frases del martes · Tuesday’s sentences', categories: [
            { id: 'escena', label: 'ESCENA O CAUSA · imperfecto', tone: 'blue' },
            { id: 'hecho', label: 'HECHO · indefinido', tone: 'orange' },
            { id: 'hoy', label: 'HOY · perfecto', tone: 'teal' },
            { id: 'mensaje', label: 'MENSAJE · pedir o indicar', tone: 'violet' },
          ], items: [
            { text: 'El móvil no tenía batería.', answer: 'escena', why: 'Describe cómo estaba el móvil: es la causa.' },
            { text: 'Noelia empezó la presentación.', answer: 'hecho', why: 'Un hecho completo de ayer.' },
            { text: 'Todavía no le he enviado el presupuesto.', answer: 'hoy', why: '«Todavía no» + perfecto: un balance hasta ahora.' },
            { text: '¿Podrías enviarme las notas?', answer: 'mensaje', why: 'Una petición amable: ¿podrías + infinitivo?' },
            { text: 'En la avenida hubo un accidente.', answer: 'hecho', why: 'El accidente pasó: hubo.' },
            { text: 'La sala se reserva en recepción.', answer: 'mensaje', why: 'Una norma general con se: información práctica.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: «¿Y tú, qué has hecho hoy? ¿Qué pasó ayer?». Tu alumno responde con una frase de cada tipo.' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Todo el A2 junto. All of A2 together.',
      steps: [
        { title: 'Una semana en el estudio · A week at the studio', blocks: [
          { kind: 'choice', items: [
            { context: 'Noelia cuenta el lunes a otra compañera. (Noelia tells another colleague about Monday.)', prompt: 'Cuando entré en la sala, la señora Ibarra ya ___ allí.', options: ['estaba', 'estuvo', 'ha estado'], answer: 0, why: 'Así era la escena cuando entró Noelia: estaba (imperfecto).', en: 'When I went into the room, Mrs Ibarra was already there.' },
            { context: 'Noelia sigue. (Noelia goes on.)', prompt: 'La reunión ___ dos horas, de nueve a once.', options: ['ha durado', 'duraba', 'duró'], answer: 2, why: '«Dos horas, de nueve a once»: un período con límites. Indefinido: duró.', en: 'The meeting lasted two hours, from nine to eleven.' },
            { context: 'Martes por la tarde. (Tuesday afternoon.)', prompt: 'Esta mañana Ramón ya ___ las notas a Elisa.', options: ['envía', 'ha enviado', 'enviaba'], answer: 1, why: '«Esta mañana» + ya: un balance de hoy, perfecto (en gran parte de América también «ya le envió»).', en: 'This morning Ramón has already sent Elisa the notes.' },
            { context: 'Ramón habla de Noelia. (Ramón talks about Noelia.)', prompt: 'De estudiante, Noelia ___ trabajar los sábados en una librería.', options: ['solió', 'solía', 'suele'], answer: 1, why: 'Una costumbre de otra época: solía + infinitivo.', en: 'As a student, Noelia used to work on Saturdays in a bookshop.' },
            { context: 'El miércoles. (On Wednesday.)', prompt: 'Elisa no fue al estudio a las nueve ___ tenía cita con el dentista.', options: ['por eso', 'para', 'porque'], answer: 2, why: 'Después viene la causa (tenía cita): porque.', en: 'Elisa didn’t go to the studio at nine because she had a dentist appointment.' },
          ] },
        ] },
        { title: '¿Qué pasado es? · Which past is it?', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'classify', title: 'Frases sobre el estudio · Sentences about the studio', categories: [
            { id: 'escena', label: 'ESCENA · imperfecto', tone: 'blue' },
            { id: 'hecho', label: 'HECHO · indefinido', tone: 'orange' },
            { id: 'antes', label: 'COSTUMBRE DE ANTES · solía, imperfecto', tone: 'neutral' },
            { id: 'hoy', label: 'HOY · perfecto', tone: 'teal' },
          ], items: [
            { text: 'Hacía frío y la sala estaba vacía.', answer: 'escena', why: 'Describe el tiempo y el lugar en ese momento.' },
            { text: 'El miércoles Noelia abrió la sala a las nueve.', answer: 'hecho', why: 'Un hecho de un día concreto: abrió.' },
            { text: 'Antes el estudio solía cerrar en agosto.', answer: 'antes', why: '«Antes» + solía: una costumbre de otra época.' },
            { text: 'Esta semana hemos tenido mucho trabajo.', answer: 'hoy', why: '«Esta semana» incluye hoy: perfecto.' },
            { text: 'La señora Ibarra firmó el presupuesto el viernes.', answer: 'hecho', why: 'Un hecho completo, con un día cerrado.' },
            { text: 'De pequeña, Elisa dibujaba en todas partes.', answer: 'antes', why: '«De pequeña» + imperfecto: lo que hacía siempre en otra época.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Ayer la señora Ibarra ha llamado dos veces.', ok: false, options: ['Ayer la señora Ibarra llamó dos veces.', 'Ayer la señora Ibarra llama dos veces.', 'Ayer la señora Ibarra llamaba dos veces.'], answer: 0, why: 'Con ayer, indefinido. «Dos veces» cuenta hechos, no describe una costumbre: llamó.' },
            { sentence: 'Cuando Noelia llegó, eran las nueve menos cuarto.', ok: true, why: 'Correcta: llegar es el hecho (llegó) y la hora es la escena (eran).' },
            { sentence: '¿Puedes enviarme las? Las necesito.', ok: false, options: ['¿Puedes enviarmelas? Las necesito.', '¿Puedes enviármelas? Las necesito.', '¿Puedes me las enviar? Las necesito.'], answer: 1, why: 'Los dos pronombres van juntos, pegados al infinitivo, y la palabra lleva tilde: enviármelas (o «¿Me las puedes enviar?»).' },
            { sentence: 'Gracias por esperar, y perdona por el retraso.', ok: true, why: 'Correcta: gracias por + infinitivo; perdona por + nombre.' },
            { sentence: 'Las bicis se aparca en el patio.', ok: false, options: ['Las bicis se aparcar en el patio.', 'Las bicis aparcan en el patio.', 'Las bicis se aparcan en el patio.'], answer: 2, why: 'Con se, el verbo concuerda con la cosa: las bicis (plural) → se aparcan.' },
          ] },
        ] },
        { title: 'Mensajes del miércoles · Wednesday’s messages', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'chat-fill', title: 'Elisa, en el dentista, escribe con Noelia · Elisa, at the dentist’s, texts Noelia', lines: [
            { who: 'Noelia', text: 'Hola, Elisa. ¿Qué tal en el dentista?' },
            { who: 'Elisa', text: 'Bien. Cuando llegué, ___ mucha gente en la sala de espera, pero ya estoy fuera.', options: ['era', 'había', 'hubo'], answer: 1, why: 'La gente ya estaba allí cuando Elisa llegó: es la escena. Había.' },
            { who: 'Noelia', text: '¡Menos mal! Oye, ¿dónde ___ la sala para el viernes?', options: ['se reserva', 'se reservan', 'se reservar'], answer: 0, why: 'Una norma general con se: el verbo concuerda con «la sala», singular.' },
            { who: 'Elisa', text: 'En recepción. Y las muestras son ___ la señora Ibarra: ___ a las diez, por favor.', options: ['para · dáleslas', 'para · dáselas', 'por · dáselas'], answer: 1, why: 'Para + persona: la destinataria. Le + las → se las, pegado al imperativo y con tilde: dáselas.' },
            { who: 'Noelia', text: 'Perfecto. ¿Algo más?' },
            { who: 'Elisa', text: 'Sí. ¿___ llamar a la señora Ibarra? Quiere ver las muestras antes del viernes.', options: ['Podrías', 'Has podido', 'Pudiste'], answer: 0, why: 'Para pedir algo con amabilidad: ¿Podrías + infinitivo? Las otras formas preguntan por el pasado.' },
            { who: 'Noelia', text: 'Claro. Y no ___, todo está bajo control.', options: ['te preocupas', 'preocúpate', 'te preocupes'], answer: 2, why: 'Fórmula fija para tranquilizar: no te preocupes (clase 059). «Preocúpate» dice lo contrario.' },
            { who: 'Elisa', text: '¡Gracias por todo, Noelia! Llego a las once.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/autoestudio/mascot/noting.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['Antes', 'solía', 'venir', 'en', 'bici', 'al', 'estudio'], accept: ['Antes solía venir en bici al estudio', 'Antes solía venir al estudio en bici'], en: 'I used to come to the studio by bike.' },
            { tiles: ['Esta', 'semana', 'ya', 'he', 'terminado', 'dos', 'logos'], accept: ['Esta semana ya he terminado dos logos', 'Ya he terminado dos logos esta semana', 'Esta semana he terminado ya dos logos'], en: 'This week I’ve already finished two logos.' },
            { tiles: ['¿Puedes', 'enviármelas', 'antes', 'del', 'viernes?'], accept: ['¿Puedes enviármelas antes del viernes?'], en: 'Can you send them to me before Friday?' },
            { tiles: ['Había', 'mucho', 'tráfico,', 'así', 'que', 'tomé', 'el', 'metro'], accept: ['Había mucho tráfico, así que tomé el metro'], en: 'There was a lot of traffic, so I took the metro.' },
          ] },
        ] },
        { title: 'Transforma · Transform', blocks: [
          { kind: 'rewrite', title: 'Contar y pedir · Telling and asking', items: [
            { prompt: 'Elisa llega tarde. Hay un accidente en la avenida. (→ ayer)', instruction: 'Une en pasado con «porque». Empieza con «Ayer Elisa». (Join in the past with porque.)', accept: ['Ayer Elisa llegó tarde porque hubo un accidente en la avenida', 'Ayer Elisa llegó tarde porque había un accidente en la avenida'] },
            { prompt: '«Envíame las notas.» (Elisa a Ramón)', instruction: 'Cambia la orden por una petición amable con «¿Podrías…?». (Make it a polite request.)', accept: ['¿Podrías enviarme las notas?', '¿Me podrías enviar las notas?', '¿Podrías enviarme las notas, por favor?', '¿Me podrías enviar las notas, por favor?'] },
            { prompt: 'Enséñale el logo a Ramón.', instruction: 'Cambia «el logo» y «a Ramón» por pronombres. (Replace both with pronouns.)', accept: ['Enséñaselo'] },
            { prompt: 'Los empleados reservan la sala en recepción.', instruction: 'Escribe una norma general con «se», sin decir quién. (A general rule with se.)', accept: ['La sala se reserva en recepción', 'Se reserva la sala en recepción', 'En recepción se reserva la sala'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno escribe dos mensajes reales al móvil de un compañero de clase o de trabajo (inventado): uno que cuenta un retraso y otro que pide un favor con «¿Podrías…?».' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Un mensaje de voz de Noelia', coach: 'Primero escucha sin leer. Listen first, read later.',
      steps: [
        { title: 'Noelia cuenta su versión · Noelia tells her side', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general. Segunda escucha: tu alumno separa lo que Noelia cuenta del lunes y lo que pide para mañana. Después, las preguntas.', self: 'Escucha una vez para la idea general. En la segunda escucha, separa lo que Noelia cuenta y lo que pide. (Listen once for the gist; then separate what she tells from what she asks for.)' } },
          { kind: 'listen', title: 'Un mensaje de voz de Noelia', channel: 'MENSAJE DE VOZ · DE NOELIA PARA ELISA', src: '/audio/grammar-live/385.mp3',
            before: 'Es martes por la tarde. Noelia le manda a Elisa un mensaje de voz sobre la presentación del lunes. ¿Qué crees que cuenta? ¿Y qué le pide? (Noelia sends Elisa a voice message about Monday’s presentation. What do you think she tells her, and what does she ask for?)',
            gist: { prompt: '¿Cuál es la idea general? · What is the main idea?', options: ['Noelia cuenta cómo fue la reunión del lunes y le pide dos cosas para mañana.', 'Noelia está enfadada porque Elisa llegó tarde.', 'Noelia cancela la reunión del viernes con la señora Ibarra.'], answer: 0, why: '«Te cuento…» (la reunión) y después «déjame la llave…», «mándame el teléfono…».', en: 'What is the main idea?' },
            details: [
              { prompt: '¿Cómo estaba la señora Ibarra cuando llegó Noelia?', options: ['Un poco nerviosa, porque tenía otra reunión.', 'Enfadada con Elisa.', 'Muy tranquila y contenta.'], answer: 0, why: '«Estaba un poco nerviosa porque tenía otra reunión a las once».', en: 'How was Mrs Ibarra when Noelia arrived?' },
              { prompt: '¿Qué hizo Noelia después de esperar diez minutos?', options: ['Llamó a Elisa.', 'Fue a la imprenta.', 'Empezó la presentación.'], answer: 2, why: '«Esperé diez minutos y luego empecé yo la presentación».', en: 'What did Noelia do after waiting ten minutes?' },
              { prompt: '¿Qué ha hecho Noelia hoy?', options: ['Ha llamado a la imprenta.', 'Ha ido al dentista.', 'Ha hablado con Ramón.'], answer: 0, why: '«Hoy he llamado a la imprenta: los carteles están listos para el viernes».', en: 'What has Noelia done today?' },
              { prompt: '¿Qué tiene que dejar Elisa en recepción?', options: ['Los carteles.', 'Las galletas.', 'La llave de la sala.'], answer: 2, why: '«Antes de salir, déjame la llave de la sala en recepción».', en: 'What does Elisa have to leave at reception?' },
            ],
            transcript: 'Hola, Elisa, soy Noelia. No te preocupes por lo del lunes, de verdad. Te cuento: cuando [[llegué|orange]] a la sala, [[eran|blue]] las nueve menos cinco y la señora Ibarra ya [[estaba|blue]] allí. [[Estaba|blue]] un poco nerviosa porque [[tenía|blue]] otra reunión a las once. [[Esperé|orange]] diez minutos y luego [[empecé|orange]] yo la presentación. Al final le [[gustó|orange]] mucho el logo, así que todo salió bien. Y hoy [[he llamado|teal]] a la imprenta: los carteles están listos [[para el viernes|violet]]. Mañana vas al dentista, ¿verdad? Entonces, antes de salir, [[déjame|violet]] la llave de la sala en recepción. Y [[mándame|violet]] el teléfono de la señora Ibarra, por favor. Ah, y [[gracias por|violet]] las galletas: estaban buenísimas. ¡Suerte mañana!',
            reply: { teacher: 'Tú eres Noelia. Tu alumno es Elisa y responde al mensaje en voz alta: da las gracias, cuenta una cosa que ha hecho hoy y responde a las dos peticiones con pronombres («La llave te la dejo…»).', self: 'Responde a Noelia en voz alta como Elisa: da las gracias, di qué has hecho hoy y contesta a sus dos peticiones («La llave te la dejo en recepción»). (Answer as Elisa: thank her, say what you’ve done today and answer her two requests.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Tu historia y tus mensajes', coach: 'Cuenta, explica y pide. Tell, explain and ask.',
      steps: [
        { title: 'Llegué tarde · I was late', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas y tu alumno cuenta una historia real o inventada de un día en que llegó tarde. Tú repites su frase con la forma correcta y sigues con la repregunta. En las dos últimas tarjetas, tu alumno deja mensajes prácticos.', self: 'Piensa en un día real o inventado en que llegaste tarde. Lee la pregunta, responde en voz alta y, si quieres, escribe tu respuesta. (Think of a day when you were late and answer aloud.)' } },
          { kind: 'talk', cards: [
            { q: '¿Llegaste tarde alguna vez a algo importante? ¿Adónde ibas? · Were you ever late for something important? Where were you going?', followUps: ['¿Cuándo fue? (When was it?)', '¿Qué hora era? (What time was it?)'], phrases: ['Una vez [[llegué|orange]] tarde a…', '[[Iba|blue]] a… / [[Tenía|blue]] una reunión, un examen…', '[[Eran|blue]] las…'], hint: 'Primero el hecho (llegué), después la escena: adónde ibas, qué hora era.', example: 'Una vez llegué tarde a un examen. Iba a la universidad en autobús y eran las nueve menos diez.', next: 'Ahora, la causa.', teacher: 'Cuenta tú también un retraso corto: así tu alumno oye otra vez el hecho y la escena.' },
            { q: '¿Por qué llegaste tarde? Cuenta los hechos en orden. · Why were you late? Tell the events in order.', followUps: ['¿Y después? (And then?)', '¿Pudiste avisar a alguien? (Could you let anyone know?)'], phrases: ['[[Había|blue]] mucho tráfico / [[Llovía|blue]]…', 'Primero… luego… al final…', '…así que no [[pude|orange]]…'], hint: 'La causa puede ser una situación (había, llovía) o un hecho (hubo un accidente). Ordena con primero, luego, al final.', example: 'Llovía mucho y había mucho tráfico. Primero el autobús paró en un semáforo; luego hubo un problema en la carretera, así que llegué veinte minutos tarde.', next: 'Ahora, antes y ahora.' },
            { q: '¿Cómo ibas antes al trabajo o a clase? ¿Y ahora? · How did you use to get to work or class? And now?', followUps: ['¿Cuánto tiempo tardabas? (How long did it take you?)', '¿Qué te gusta más? (What do you like better?)'], phrases: ['Antes [[solía ir|blue]] en…', 'Antes [[tardaba|blue]]…', 'Ahora voy en…'], hint: 'Una costumbre de antes: solía + infinitivo o imperfecto. Ahora: presente.', example: 'Antes solía ir a pie, porque vivía cerca. Tardaba diez minutos. Ahora voy en metro.', next: 'Ahora, el balance de hoy.' },
            { q: '¿Qué has hecho hoy? ¿Qué todavía no has hecho? · What have you done today? What haven’t you done yet?', followUps: ['¿Y esta semana? (And this week?)', '¿Qué tienes que hacer mañana? (What do you have to do tomorrow?)'], phrases: ['Hoy ya [[he hablado|teal]] con… / ya [[he terminado|teal]]…', 'Todavía no [[he enviado|teal]]…', 'Mañana tengo que…'], hint: 'Para hoy y esta semana, perfecto (frecuente en España). En gran parte de América también «hoy hablé», «todavía no terminé».', example: 'Hoy ya he hablado con mi jefa y he terminado un informe. Todavía no he contestado los correos.', next: 'Ahora, un mensaje.', teacher: 'Si tu alumno usa «hoy hablé», es correcto en muchas variedades: solo comprueba que es coherente.' },
            { q: 'Mañana no vas a estar. Deja tres instrucciones a un compañero. · You won’t be there tomorrow. Leave a colleague three instructions.', followUps: ['¿Dónde están las llaves? (Where are the keys?)', '¿Para cuándo es el trabajo? (When is the work due?)'], phrases: ['[[Déjame|violet]]… / [[Dáselo|violet]] a…', 'La sala [[se reserva|violet]] en…', 'El informe es [[para el|violet]] jueves.'], hint: 'Imperativo con el pronombre pegado (dáselo), se para una norma general, para + fecha.', example: 'El informe es para el jueves: termínalo, por favor. Las llaves están en mi mesa: dáselas a Ramón. La sala se reserva en recepción.', next: 'Ahora, un favor.' },
            { q: 'Pide un favor a tu jefe o a un compañero y da las gracias. · Ask your boss or a colleague for a favour and thank them.', followUps: ['¿Y si dice que no? (And if they say no?)', '¿Cómo lo dices a un cliente, con usted? (How do you say it to a client?)'], phrases: ['[[¿Podrías|violet]] enviarme…?', '¿Me [[lo|violet]] puedes…?', '[[Gracias por|violet]]…'], hint: '¿Podrías + infinitivo? es muy amable. Con usted: ¿Podría…?', example: '¿Podrías enviarme el horario de la semana? Lo necesito para hoy. ¡Gracias por tu ayuda!', teacher: 'Pregunta también la versión con usted: «¿Podría enviarme…?». Es la idea de la Ampliación.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno hace las preguntas («¿Por qué llegaste tarde?», «¿Qué has hecho hoy?») y tú respondes con un error en cada respuesta. Tu alumno lo encuentra.', self: 'Ahora haz tú las preguntas en voz alta («¿Por qué llegaste tarde?», «¿Qué has hecho hoy?») y respóndelas como Elisa. (Now ask the questions and answer as Elisa.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'La respuesta a Noelia', coach: 'Contar, pedir, agradecer. Tell, ask, thank.',
      steps: [
        { title: 'Un mensaje para Noelia · A message to Noelia', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos cada verbo (¿escena, hecho o hoy?) y cada pronombre. Después, tu alumno lee su mensaje en voz alta.', self: 'Escribe tu mensaje y toca «Revisar mi texto». Después, revisa cada verbo y cada pronombre. (Write your message and tap “Revisar mi texto”.)' } },
          { kind: 'write', title: 'Respuesta a un mensaje de trabajo · Reply to a work message', situation: 'Eres Elisa (o eres tú, en tu trabajo o en tu clase). Contesta por escrito al mensaje de voz de Noelia: cuenta qué te pasó el lunes, di qué has hecho hoy y organiza mañana. (You are Elisa, or yourself. Reply in writing to Noelia’s voice message: tell what happened to you on Monday, say what you’ve done today and organise tomorrow.)', task: [
            'Da las gracias con «gracias por» y cuenta el retraso: la escena y la causa en imperfecto, los hechos en indefinido. (Thank her and tell what happened.)',
            'Usa dos conectores: primero, luego, al final, porque, así que… (Use two connectors.)',
            'Di una cosa que ya has hecho hoy y una que todavía no has hecho. (Say what you have and haven’t done today.)',
            'Responde a las peticiones de Noelia con un pronombre: «La llave te la dejo…». (Answer her requests with a pronoun.)',
            'Pide un favor con «¿Podrías…?» o «¿Puedes…?» y despídete. (Ask a favour and say goodbye.)',
          ], starters: ['Hola, Noelia:', '¡Mil gracias por…!', 'Te cuento qué pasó: …', 'Llovía y había…', 'Hoy ya he… / Todavía no he…', 'La llave te la dejo…', '¿Podrías…?', 'Un abrazo,'],
            words: ['había', 'llovía', 'tenía', 'salí', 'tomé', 'hubo', 'estuvo', 'pude', 'solía', 'he hablado', 'todavía no', 'así que', 'porque', 'te la dejo', 'dáselas', '¿podrías…?', 'gracias por'],
            model: 'Hola, Noelia: ¡Mil [[gracias por|violet]] lo del lunes! Te cuento qué pasó: [[salí|orange]] de casa a las ocho y cuarto, como siempre, pero [[llovía|blue]] y [[había|blue]] muchísimo tráfico. En la avenida [[hubo|orange]] un accidente y el autobús [[estuvo|orange]] parado veinte minutos. Además, el móvil no [[tenía|blue]] batería, así que no [[pude|orange]] llamar. Antes [[solía venir|blue]] en bici, pero ahora está en el taller. Hoy ya [[he hablado|teal]] con la señora Ibarra, pero todavía no le [[he enviado|teal]] el presupuesto. Su teléfono es el 600 123 456. La llave [[te la dejo|violet]] mañana en recepción. Las muestras de papel están en mi mesa: [[dáselas|violet]] a la clienta, por favor. [[¿Podrías decirle|violet]] a Ramón que llego a las once? Un abrazo, Elisa',
            minWords: 70,
            checks: [
              { label: 'Escena o causa en imperfecto: había, llovía, tenía… (scene or reason in the imperfect)', pattern: '(?<!\\p{L})(?:era|eran|había|habia|hacía|hacia|estaba|estaban|llovía|llovia|tenía|tenia|iba|iban|solía|solia|\\p{L}{2,}aban?)(?!\\p{L})', tip: 'Explica la situación: «Llovía y había mucho tráfico».' },
              { label: 'Un hecho en indefinido: salí, hubo, pude… (an event in the indefinido)', pattern: '(?<!\\p{L})(?:hubo|fui|fue|hice|tuve|estuve|estuvo|pude|dije|salí|tomé|llegué|esperé|llamé|perdí|\\p{L}{2,}ó)(?!\\p{L})', tip: 'Cuenta qué pasó: «Salí a las ocho», «Hubo un accidente».' },
              { label: 'Un balance de hoy en perfecto: he hablado… (today in the perfect)', pattern: '(?<!\\p{L})(?:he|has|ha|hemos)\\s+\\p{L}+(?:ado|ido|to|cho)(?!\\p{L})', tip: 'Di qué has hecho hoy: «Hoy ya he hablado con…».' },
              { label: 'Una petición: ¿podrías…? o ¿puedes…? (a request)', pattern: '(?<!\\p{L})(?:podrías|podrias|puedes)(?!\\p{L})', tip: 'Pide un favor: «¿Podrías decirle a Ramón…?».' },
              { label: 'Gracias por (thanks for)', pattern: '(?<!\\p{L})gracias\\s+por(?!\\p{L})', tip: 'Agradece con por: «Gracias por lo del lunes».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})gracias\\s+para(?!\\p{L})', why: 'Para agradecer se usa **gracias por**: «gracias por tu ayuda».' },
              { pattern: '(?<!\\p{L})sol(?:ía|ia)\\s+a\\s', why: 'Solía va sin preposición: **solía venir**, no «solía a venir».' },
              { pattern: '(?<!\\p{L})era\\s+(?:mucho|muchísimo|muchisimo)\\s+tráfico(?!\\p{L})', why: 'Para decir que algo estaba allí, haber: **había mucho tráfico**.' },
              { pattern: '(?<!\\p{L})le\\s+(?:lo|la|los|las)(?!\\p{L})', why: 'Le + lo/la/los/las cambia a **se**: «se las doy», «se lo envío».' },
            ] },
        ] },
      ],
    },
    {
      id: 'cerrar', label: 'Cerrar', icon: '✓', mascot: '/brand/mascot/standing.webp',
      title: 'Lo esencial del A2', coach: '¿Qué te llevas hoy? What do you take with you?',
      steps: [
        { title: 'Lo esencial · The essentials', blocks: [
          { kind: 'recap', items: [
            { tone: 'blue', label: 'ESCENA, CAUSA, COSTUMBRE', formula: 'había · llovía · tenía · eran las… · solía + infinitivo', example: 'Llovía y había mucho tráfico. Antes solía ir en bici.', caption: 'cómo era, por qué, qué hacías antes', en: 'what it was like, why, what you used to do' },
            { tone: 'orange', label: 'HECHOS', formula: 'llegué · hubo · pude · estuvo veinte minutos', example: 'Ayer llegué tarde: hubo un accidente.', caption: 'lo que pasó, en orden; períodos con límites', en: 'what happened, in order; periods with limits' },
            { tone: 'teal', label: 'HOY', formula: 'he hablado · ya · todavía no (hoy hablé: frecuente en América)', example: 'Hoy ya he hablado con la clienta.', caption: 'un balance de hoy o de esta semana', en: 'taking stock of today or this week' },
            { tone: 'violet', label: 'MENSAJES', formula: '¿podrías + inf.? · dáselas · te las envío · se reserva · gracias por · para el viernes', example: '¿Podrías enviarme las notas? Gracias por tu ayuda.', caption: 'pedir, indicar, agradecer, dar un plazo', en: 'ask, instruct, thank, give a deadline' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Para contar, haz tres preguntas: **¿cómo era?** (imperfecto), **¿qué pasó?** (indefinido), **¿qué has hecho hoy?** (perfecto, o indefinido en gran parte de América). Para un mensaje práctico: pide con **¿podrías…?**, pega el pronombre al imperativo (**dáselas**), usa **se** para las normas y agradece con **gracias por**.', en: 'To tell a story, ask three questions: what was it like? (imperfect), what happened? (indefinido), what have you done today? (perfect, or indefinido in much of Latin America). For a practical message: ask with “¿podrías…?”, attach the pronoun to the command (“dáselas”), use “se” for rules and thank with “gracias por”.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'Anoche ___ un apagón de dos horas en el barrio.', options: ['era', 'hubo', 'estaba'], answer: 1, why: 'Un apagón pasa, y «dos horas» es un período cerrado: hubo.', en: 'Last night there was a two-hour power cut in the neighbourhood.' },
            { prompt: 'Cuando Ramón abrió el estudio, ___ mucho frío.', options: ['ha hecho', 'hizo', 'hacía'], answer: 2, why: 'El tiempo en ese momento es la escena: hacía.', en: 'When Ramón opened the studio, it was very cold.' },
            { prompt: 'Esta semana Noelia ya ___ tres presentaciones.', options: ['hacía', 'solía hacer', 'ha hecho'], answer: 2, why: '«Esta semana» + ya: balance hasta hoy, perfecto (en gran parte de América también «ya hizo»).', en: 'This week Noelia has already given three presentations.' },
            { prompt: 'La llave de la sala, ¿___ dejas en recepción?', options: ['me lo', 'me la', 'la me'], answer: 1, why: 'Primero el indirecto (me), después el directo (la, porque es «la llave»).', en: 'The room key, can you leave it for me at reception?' },
            { prompt: 'Muchas gracias ___ venir tan temprano.', options: ['porque', 'por', 'para'], answer: 1, why: 'Gracias por + infinitivo.', en: 'Thank you very much for coming so early.' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Ahora, un viaje de trabajo.', blocks: [
          { kind: 'lead', text: 'Un mes después, Elisa viaja a Valencia para ver a un cliente. En la estación hay problemas: una huelga de taxis (a taxi strike). Cuenta y organiza con lo que sabes.', en: 'A month later, Elisa travels to Valencia to see a client. There are problems at the station: a taxi strike. Tell the story and organise things with what you know.' },
          { kind: 'rewrite', title: 'El viaje a Valencia · The trip to Valencia', items: [
            { prompt: 'Elisa pierde el tren. Hay una huelga de taxis. (→ el jueves pasado)', instruction: 'Une en pasado con «porque». Empieza con «El jueves pasado». (Join in the past with porque.)', accept: ['El jueves pasado Elisa perdió el tren porque había una huelga de taxis', 'El jueves pasado Elisa perdió el tren porque hubo una huelga de taxis'] },
            { prompt: 'Envíame el horario de trenes.', instruction: 'Cambia «el horario de trenes» por un pronombre. (Use a pronoun.)', accept: ['Envíamelo'] },
            { prompt: 'En esta estación, los viajeros compran los billetes en la máquina.', instruction: 'Escribe una norma general con «se». Empieza con «En esta estación». (A general rule with se.)', accept: ['En esta estación los billetes se compran en la máquina', 'En esta estación se compran los billetes en la máquina'] },
          ] },
        ] },
        { title: 'Ampliación: del tú al usted · Extension: from tú to usted', mascot: '/brand/mascot/portrait.webp', coach: 'Un mensaje para la clienta. A message to the client.', blocks: [
          { kind: 'tip', icon: '✍', title: 'Mensajes con usted · Messages with usted', text: 'Con una clienta, Elisa escribe con **usted**: el verbo va en 3.ª persona y el posesivo cambia. «¿Puedes enviarme…?» → «¿**Puede** / **Podría** enviarme…?»; «Llámame» → «**Llámeme**»; «tu paciencia» → «**su** paciencia». Y empieza con «Estimada señora Ibarra:».', en: 'With a client, Elisa writes with usted: the verb is in the third person and the possessive changes. “¿Puedes enviarme…?” becomes “¿Puede / Podría enviarme…?”; “Llámame” becomes “Llámeme”; “tu paciencia” becomes “su paciencia”. And she starts with “Estimada señora Ibarra:”.' },
          { kind: 'rewrite', title: 'Para la señora Ibarra · For Mrs Ibarra', items: [
            { prompt: '¿Puedes enviarme el texto del cartel?', instruction: 'Escríbelo con usted. (Write it with usted.)', accept: ['¿Puede enviarme el texto del cartel?', '¿Podría enviarme el texto del cartel?', '¿Me puede enviar el texto del cartel?', '¿Me podría enviar el texto del cartel?'] },
            { prompt: 'Llámame mañana, por favor.', instruction: 'Escríbelo con usted. (Write it with usted.)', accept: ['Llámeme mañana, por favor', 'Llámeme mañana'] },
            { prompt: 'Déjame las fotos en recepción.', instruction: 'Escríbelo con usted. (Write it with usted.)', accept: ['Déjeme las fotos en recepción'] },
            { prompt: 'Gracias por tu paciencia.', instruction: 'Escríbelo con usted. (Write it with usted.)', accept: ['Gracias por su paciencia'] },
          ] },
          { kind: 'teacher', text: 'Paso opcional: para estudiantes rápidos o si hay tiempo extra. Si hay tiempo, tu alumno escribe un mensaje de tres frases a la señora Ibarra con usted: una disculpa, una petición con «¿Podría…?» y un agradecimiento.' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 086 · Revisión de pasados: contar y describir con intención', text: 'Ya cuentas una historia completa en A2: la escena, los hechos, la causa y el balance de hoy, y escribes mensajes prácticos. En la clase 086 empiezas el B1: vuelves a los pasados con más intención, para describir mejor, crear suspense y decidir qué es importante en tu historia. Es el paso natural: ahora que eliges bien la forma, aprendes a usarla para contar mejor.', en: 'You can now tell a complete story at A2: the scene, the events, the reason and how today has gone, and you can write practical messages. In class 086 you start B1: you go back to the past tenses with more intention, to describe better, build suspense and decide what matters in your story. It is the natural next step: now that you choose the right form, you learn to use it to tell stories better.', href: '/past-b1', label: 'Ir a la clase 086' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Qué pasó la última vez que llegaste tarde? ¿Y qué mensaje escribiste?». Respuesta esperada: escena, hecho y causa, y una petición con «¿Podrías…?». Tarea: escribir la respuesta a Noelia sobre un retraso real.' },
        ] },
      ],
    },
  ],
};
