import type { LiveLesson } from '../types';

/**
 * Lesson 338 · A1 · La hora, el día y la fecha (course unit G038).
 * One scene runs through the class: on Tuesday 20 October at eight in the
 * morning, Elena buys a train ticket at the ticket office of the Madrid
 * station. Óscar, the clerk, offers three trains to Valencia for Friday
 * 23 October (9:10, 13:00, 18:30). Elena works until two, so she takes the
 * 18:30 (arrives 20:15) and comes back on Sunday 25 (17:00, arrives 18:50).
 * Her brother Pablo, who lives in Valencia, leaves the voice message.
 * Content: ¿Qué hora es? Es la una / Son las dos…, y cuarto, y media, menos
 * cuarto, de la mañana / tarde / noche; ¿A qué hora…? a la una / a las seis;
 * días (el martes, los martes) and fechas (el 20 de octubre).
 * Contrast: Es la una / Son las tres; Son las seis / a las seis.
 * Mistake: *Es las dos → Son las dos. 24-hour clock and regional forms
 * («cuarto para las nueve») appear only receptively, glossed.
 * Óscar and Elena use usted; Pablo speaks Peninsular Spanish with tú.
 */
export const lesson: LiveLesson = {
  id: 338,
  level: 'A1',
  title: 'La hora, el día y la fecha',
  subtitle: 'Preguntar y decir la hora, el día y la fecha para comprar un billete de tren y confirmar la salida y la llegada.',
  legend: [
    { tone: 'blue', label: 'ES LA · SON LAS · la hora de ahora (what time it is)' },
    { tone: 'orange', label: 'A LA · A LAS · a qué hora pasa algo (at what time)' },
    { tone: 'teal', label: 'EL MARTES · EL 20 DE OCTUBRE · el día y la fecha (day and date)' },
  ],
  optionNotes: {
    'Es las': '«Las» es plural, entonces el verbo también: **son las** dos, son las ocho. «Es las» no existe.',
    'Son la': '«La una» es singular, entonces el verbo también: **es la una**.',
    'en el viernes': 'Con los días no hay preposición: **el viernes** = on Friday.',
    'en el': 'Con los días no hay preposición: **el** + día = on + day.',
    'a el': 'Con los días no hay preposición: solo **el** + día. (Y «a + el» siempre se escribe «al».)',
    'por la noche': 'Después de una hora exacta se dice **de la noche**: a las ocho de la noche. «Por la noche» va sin hora: «Llego el viernes por la noche».',
    'octubre 25': 'En español, primero el número y después el mes, con **de**: 25 de octubre.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Un billete para el viernes', coach: '¿Qué hora es? ¿Qué día? What time? What day?',
      steps: [
        { title: 'En la taquilla · At the ticket office', blocks: [
          { kind: 'lead', text: 'Es martes por la mañana en la estación de Madrid. Elena quiere un **billete de tren** para Valencia: el viernes es el cumpleaños de su madre. En la taquilla necesita tres cosas: **la hora**, **el día** y **la fecha**.', en: 'It is Tuesday morning at the station in Madrid. Elena wants a train ticket to Valencia: on Friday it is her mother’s birthday. At the ticket office she needs three things: the time, the day and the date.' },
          { kind: 'guide', text: { teacher: 'Tú lees la pantalla de la estación y tu alumno dice qué tren prefiere. Después leen juntos las tres frases de abajo.', self: 'Mira la pantalla de la estación. ¿Qué tren prefieres tú? Después lee en voz alta las tres frases. (Look at the screen, then read the three sentences aloud.)' } },
          { kind: 'table', title: 'Pantalla: Madrid → Valencia · viernes 23 de octubre', head: ['Tren (train)', 'Sale (leaves)', 'Llega (arrives)'], rows: [
            ['**1**', '9:10', '11:00'],
            ['**2**', '13:00', '14:45'],
            ['**3**', '18:30', '20:15'],
          ], note: 'Ahora, en el reloj de la estación: **8:00 · martes 20 de octubre**. (The station clock now.)' },
          { kind: 'compare', title: 'Tres preguntas en la taquilla · Three questions', columns: [
            { tone: 'blue', label: 'AHORA · now', sentence: '¿Qué hora es? [[Son las ocho|blue]].', idea: 'La hora de este momento.', en: 'What time is it? It’s eight o’clock.' },
            { tone: 'orange', label: 'EL TREN · the train', sentence: 'El tren sale [[a las seis y media|orange]].', idea: 'La hora de una salida o de una cita.', en: 'The train leaves at half past six.' },
            { tone: 'teal', label: 'EL DÍA · the day', sentence: 'Hoy es martes. Viajo [[el viernes 23 de octubre|teal]].', idea: 'El día de la semana y la fecha.', en: 'Today is Tuesday. I travel on Friday 23 October.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Son las ocho» dice…', options: ['la hora del tren.', 'la fecha.', 'la hora de ahora.'], answer: 2, why: '¿Qué hora es? Son las ocho: este momento.', en: '“Son las ocho” tells you…' },
            { prompt: '¿Qué día es hoy?', options: ['Domingo.', 'Martes.', 'Viernes.'], answer: 1, why: 'El reloj de la estación dice: martes 20 de octubre.', en: 'What day is it today?' },
            { prompt: '¿A qué hora sale el tren 3?', options: ['A las ocho y cuarto (20:15).', 'A la una (13:00).', 'A las seis y media (18:30).'], answer: 2, why: 'La pantalla: tren 3, sale 18:30. Llega a las 20:15.', en: 'What time does train 3 leave?' },
          ] },
        ] },
        { title: '¿Qué hora es? · What time is it?', mascot: '/brand/mascot/standing.webp', coach: 'Es la una. Son las dos, las tres…', blocks: [
          { kind: 'concept', tone: 'blue', label: 'ES LA UNA · SON LAS…', question: '¿Qué hora es?', en: 'What time is it?', formula: ['es + la una', 'son + las + dos, tres… doce'],
            meaning: 'La hora lleva artículo femenino, porque pensamos en «la hora»: **la** una, **las** dos. Con **la una** el verbo es singular: **es**. Con las demás horas es plural: **son**. (The verb agrees with the hour: one o’clock is singular, the rest are plural.)',
            examples: [
              { es: '[[Es la una|blue]].', en: 'It’s one o’clock.' },
              { es: '[[Son las dos|blue]].', en: 'It’s two o’clock.' },
              { es: '[[Son las ocho|blue]] en punto.', en: 'It’s eight o’clock sharp.' },
              { es: '[[Es la una y media|blue]].', en: 'It’s half past one.' },
              { es: '[[Son las doce|blue]]. / Es mediodía.', en: 'It’s twelve. / It’s midday.' },
            ],
            note: 'Para preguntar: **¿Qué hora es?** A un desconocido: «Perdone, ¿qué hora es?». (Excuse me, what time is it?)' },
          { kind: 'table', title: 'Los minutos · The minutes', head: ['Reloj (clock)', 'En español', 'English'], rows: [
            ['8:00', '[[Son las ocho|blue]] (en punto)', 'eight o’clock'],
            ['8:10', 'Son las ocho **y diez**', 'ten past eight'],
            ['8:15', 'Son las ocho **y cuarto**', 'quarter past eight'],
            ['8:30', 'Son las ocho **y media**', 'half past eight'],
            ['8:45', 'Son las nueve **menos cuarto**', 'quarter to nine'],
            ['8:50', 'Son las nueve **menos diez**', 'ten to nine'],
            ['1:20', '[[Es la una|blue]] y veinte', 'twenty past one'],
            ['12:50', '[[Es la una|blue]] menos diez', 'ten to one'],
          ], note: 'Hasta la media (:30) sumas con **y**; después, restas con **menos** desde la hora siguiente. Ojo: 12:50 es **la una** menos diez, entonces: **es**.' },
          { kind: 'compare', title: 'Es la una / Son las tres · One or more', columns: [
            { tone: 'blue', label: 'SINGULAR · la una', sentence: '[[Es la una|blue]] y cuarto.', idea: 'Solo con la una: es la.', en: 'It’s quarter past one.' },
            { tone: 'blue', label: 'PLURAL · las dos… las doce', sentence: '[[Son las tres|blue]] y cuarto.', idea: 'Todas las otras horas: son las.', en: 'It’s quarter past three.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '(4:00) ___ las cuatro.', options: ['Son', 'Es', 'Está'], answer: 0, why: 'Las cuatro es plural: son las cuatro.', en: 'It’s four o’clock.' },
            { prompt: '(1:30) ___ la una y media.', options: ['Son', 'Están', 'Es'], answer: 2, why: 'La una es singular: es la una y media.', en: 'It’s half past one.' },
            { prompt: '(6:45) Son las ___.', options: ['siete menos cuarto', 'seis menos cuarto', 'seis y cuarto'], answer: 0, why: 'Después de la media restas desde la hora siguiente: las siete menos cuarto.', en: 'It’s quarter to seven.' },
          ] },
        ] },
        { title: '¿A qué hora? · At what time?', mascot: '/brand/mascot/studying.webp', coach: 'Ahora: son las seis. El tren: a las seis.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'A LA · A LAS', question: '¿A qué hora…?', en: 'At what time…?', formula: ['a + la una', 'a + las + dos, tres… doce'],
            meaning: 'Para decir **cuándo pasa algo** (una salida, una llegada, una cena, una clase) usas **a la** o **a las** + la hora. La pregunta es **¿A qué hora…?**',
            examples: [
              { es: '¿[[A qué hora|orange]] sale el tren?', en: 'What time does the train leave?' },
              { es: 'El tren sale [[a la una|orange]].', en: 'The train leaves at one.' },
              { es: 'Llega [[a las tres menos cuarto|orange]].', en: 'It arrives at quarter to three.' },
              { es: 'Elena trabaja hasta [[las dos|orange]].', en: 'Elena works until two.' },
              { es: 'La cena es [[a las nueve y media de la noche|orange]].', en: 'Dinner is at half past nine in the evening.' },
            ],
            note: 'Con la hora exacta: **de la mañana** (morning), **de la tarde** (afternoon), **de la noche** (evening, night). Sin hora: **por la** mañana / tarde / noche: «Viajo el viernes por la tarde».' },
          { kind: 'compare', title: 'Son las seis / a las seis · Now or an event?', columns: [
            { tone: 'blue', label: 'AHORA · now', sentence: '¿Qué hora es? [[Son las seis|blue]].', idea: 'El reloj, en este momento.', en: 'What time is it? It’s six.' },
            { tone: 'orange', label: 'UN EVENTO · an event', sentence: 'El tren sale [[a las seis|orange]].', idea: 'La hora de una acción.', en: 'The train leaves at six.' },
          ] },
          { kind: 'decide', title: 'Antes de decir la hora, piensa · Before you say the time', steps: [
            { q: '¿Dices la hora de este momento? (Is it the time right now?)', yes: 'Usa **es la una** o **son las** + hora.', no: 'next' },
            { q: '¿Dices cuándo pasa algo: sale, llega, empieza, es la cena…? (When something happens?)', yes: 'Usa **a la una** o **a las** + hora.', no: 'Quizás es un día o una fecha: **el viernes**, **el 23 de octubre**.' },
          ] },
          { kind: 'tip', icon: '🔊', title: 'En la pantalla, 18:30 · On the screen, 18:30', text: 'Los billetes y las pantallas usan el reloj de 24 horas: **18:30**. En una conversación normal decimos «las seis y media **de la tarde**». En los anuncios de la estación vas a oír «las dieciocho treinta».', en: 'Tickets and screens use the 24-hour clock: 18:30. In normal conversation we say “las seis y media de la tarde”. In station announcements you will hear “las dieciocho treinta”.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'El tren de Elena sale ___ seis y media.', options: ['son las', 'es las', 'a las'], answer: 2, why: 'Una salida: a las + hora.', en: 'Elena’s train leaves at half past six.' },
            { prompt: 'Perdone, ¿qué hora es? · ___ las nueve.', options: ['Son', 'A', 'A las'], answer: 0, why: 'La hora de ahora: son las nueve.', en: 'Excuse me, what time is it? · It’s nine.' },
            { prompt: 'El tren llega a las ocho y cuarto ___.', options: ['de la noche', 'por la noche', 'en la noche'], answer: 0, why: 'Con una hora exacta: de la noche.', en: 'The train arrives at quarter past eight in the evening.' },
          ] },
        ] },
        { title: 'El día y la fecha · The day and the date', mascot: '/brand/mascot/portrait.webp', coach: 'El viernes, el 23 de octubre.', blocks: [
          { kind: 'table', title: 'Los días de la semana · The days of the week', head: ['Español', 'English'], rows: [
            ['lunes', 'Monday'], ['martes', 'Tuesday'], ['miércoles', 'Wednesday'], ['jueves', 'Thursday'],
            ['viernes', 'Friday'], ['sábado', 'Saturday'], ['domingo', 'Sunday'],
          ], note: 'Días y meses van en **minúscula**: martes, octubre. Los meses: enero, febrero, marzo, abril, mayo, junio, julio, agosto, septiembre, octubre, noviembre, diciembre.' },
          { kind: 'concept', tone: 'teal', label: 'EL MARTES · EL 20 DE OCTUBRE', question: '¿Qué día? ¿Qué fecha?', en: 'Which day? What date?', formula: ['hoy es + martes', 'el + martes = on Tuesday', 'el + 20 + de + octubre'],
            meaning: 'Después de **hoy es** el día va sin artículo: «Hoy es martes». Para decir **cuándo** pasa algo, el día lleva **el** y no hay preposición: «Viajo el viernes». La fecha es **el + número + de + mes**.',
            examples: [
              { es: 'Hoy es martes, [[20 de octubre|teal]].', en: 'Today is Tuesday, 20 October.' },
              { es: 'Elena viaja [[el viernes|teal]].', en: 'Elena travels on Friday.' },
              { es: 'Vuelve [[el domingo 25 de octubre|teal]].', en: 'She comes back on Sunday 25 October.' },
              { es: 'Elena trabaja en la oficina [[los lunes|teal]].', en: 'Elena works at the office on Mondays.' },
              { es: 'El cumpleaños de su madre es [[el 23 de octubre|teal]].', en: 'Her mother’s birthday is on 23 October.' },
            ],
            note: 'Para preguntar: **¿Qué día es hoy?** y **¿Qué fecha es hoy?** En España también oyes «¿A cuántos estamos?». El día 1: **el primero** o **el uno** de noviembre (las dos formas existen).' },
          { kind: 'compare', title: 'El martes / los martes · One Tuesday or every Tuesday', columns: [
            { tone: 'teal', label: 'EL MARTES · this Tuesday', sentence: 'Elena viaja [[el viernes|teal]].', idea: 'Un día concreto.', en: 'Elena travels on Friday (this Friday).' },
            { tone: 'teal', label: 'LOS MARTES · every Tuesday', sentence: 'Elena trabaja [[los viernes|teal]] hasta las dos.', idea: 'Todas las semanas, como en la clase de frecuencia.', en: 'Elena works until two on Fridays.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Elena viaja ___ viernes.', options: ['el', 'en el', 'en'], answer: 0, why: 'Con los días no hay preposición: el viernes.', en: 'Elena travels on Friday.' },
            { prompt: '¿Cuál es la fecha correcta?', options: ['el 23 octubre', 'el 23 de octubre', 'el octubre 23'], answer: 1, why: 'Número + de + mes: el 23 de octubre.', en: 'Which date is correct?' },
            { prompt: 'Hoy ___ martes.', options: ['es', 'son', 'está'], answer: 0, why: 'Hoy es + el día: hoy es martes.', en: 'Today is Tuesday.' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: '¿Una o varias? ¿Ahora o a qué hora?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la frase con el error y preguntas: «¿La una o las otras? ¿Ahora o a qué hora?». Tu alumno responde y después aparece la corrección.', self: 'Lee cada frase, busca el error y toca para ver la corrección. (Find the mistake, then tap.)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Es las dos.', right: 'Son las dos.', why: '«Las dos» es plural: el verbo también, **son**. (Every hour except one: son las.)' },
            { wrong: 'Son la una y diez.', right: 'Es la una y diez.', why: '«La una» es singular: **es**. (One o’clock is singular.)' },
            { wrong: 'El tren sale a las una.', right: 'El tren sale a la una.', why: 'Una es singular: **a la** una.' },
            { wrong: 'Viajo en el viernes.', right: 'Viajo el viernes.', why: 'Con los días no hay preposición: **el viernes** = on Friday.' },
            { wrong: 'Mi cumpleaños es el octubre 23.', right: 'Mi cumpleaños es el 23 de octubre.', why: 'Primero el número, después **de** + mes, en minúscula.' },
            { wrong: 'La cena es a las nueve por la noche.', right: 'La cena es a las nueve de la noche.', why: 'Con una hora exacta: **de la** noche. «Por la noche» va sin hora.' },
          ] },
          { kind: 'tip', icon: '🌎', title: 'Otras formas que vas a oír · Other forms you will hear', text: 'En México y en otros países de América: «Son **cuarto para las** nueve» (8:45) o «Son **quince para las** nueve». En algunas zonas también preguntan «¿Qué horas son?». Todas son correctas; tú puedes usar «son las nueve menos cuarto».', en: 'In Mexico and other Latin American countries: “Son cuarto para las nueve” (8:45) or “Son quince para las nueve”. In some areas people also ask “¿Qué horas son?”. They are all correct; you can use “son las nueve menos cuarto”.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Cuál es correcta?', options: ['Es las once y cuarto.', 'Son la once y cuarto.', 'Son las once y cuarto.'], answer: 2, why: 'Las once es plural: son las.', en: 'Which one is correct?' },
            { prompt: '¿Cuál es correcta?', options: ['La clase es a la una.', 'La clase es a las una.', 'La clase son a la una.'], answer: 0, why: 'Un evento a la una: a la (singular).', en: 'Which one is correct?' },
            { prompt: '¿Cuál es correcta?', options: ['Vuelvo el domingo.', 'Vuelvo en el domingo.', 'Vuelvo en domingo.'], answer: 0, why: 'Día concreto: el domingo, sin preposición.', en: 'Which one is correct?' },
          ] },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'En la taquilla', coach: 'Toca las palabras marcadas. Tap the marked words.',
      steps: [
        { title: 'Un billete para Valencia · A ticket to Valencia', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Óscar y tu alumno es Elena. Después, tu alumno toca cada expresión marcada y dice si es la hora de ahora, la hora de un evento o el día.', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada: ¿hora de ahora, hora de un evento o día? (Tap each marked expression.)' } },
          { kind: 'explore', title: 'Ida y vuelta · Return ticket', setting: 'Martes 20 de octubre, a las ocho de la mañana, en la taquilla de la estación de Madrid. Óscar y Elena se hablan de usted. (Tuesday morning at the ticket office. They use the formal “usted”.)', lines: [
            { who: 'Óscar', text: 'Buenos días. ¿Qué desea?', en: 'Good morning. How can I help you?' },
            { who: 'Elena', text: 'Buenos días. Un billete de ida y vuelta a Valencia, por favor. Para [[el viernes|teal]].', en: 'Good morning. A return ticket to Valencia, please. For Friday.' },
            { who: 'Óscar', text: '¿[[El viernes 23 de octubre|teal]]? Hay tres trenes: [[a las nueve y diez|orange]], [[a la una|orange]] y a las seis y media de la tarde.', en: 'Friday 23 October? There are three trains: at ten past nine, at one, and at half past six in the afternoon.' },
            { who: 'Elena', text: 'El viernes trabajo [[hasta las dos|orange]]. ¿[[A qué hora|orange]] llega el tren de las seis y media?', en: 'On Friday I work until two. What time does the half past six train arrive?' },
            { who: 'Óscar', text: 'Llega [[a las ocho y cuarto de la noche|orange]].', en: 'It arrives at quarter past eight in the evening.' },
            { who: 'Elena', text: 'Perfecto, ese. Y la vuelta, [[el domingo|teal]] por la tarde.', en: 'Perfect, that one. And the return, on Sunday afternoon.' },
            { who: 'Óscar', text: 'El domingo 25 hay un tren [[a las cinco|orange]]. Llega a Madrid [[a las siete menos diez|orange]].', en: 'On Sunday the 25th there is a train at five. It arrives in Madrid at ten to seven.' },
            { who: 'Elena', text: 'Muy bien. Perdone, ¿[[qué hora es|blue]]? Entro a trabajar a las nueve.', en: 'Very good. Excuse me, what time is it? I start work at nine.' },
            { who: 'Óscar', text: '[[Son las ocho y cinco|blue]]. Tranquila, tiene tiempo.', en: 'It’s five past eight. Don’t worry, you have time.' },
            { who: 'Elena', text: 'Entonces: ida, viernes 23, a las seis y media; vuelta, domingo 25, a las cinco.', en: 'So: outward, Friday 23rd, at half past six; return, Sunday 25th, at five.' },
            { who: 'Óscar', text: 'Exacto. Aquí tiene su billete. ¡Buen viaje!', en: 'Exactly. Here is your ticket. Have a good trip!' },
          ], notes: {
            'el viernes': 'Un día concreto, sin preposición: **el viernes** = on Friday.',
            'El viernes 23 de octubre': 'Día + fecha: **el viernes 23 de octubre**. Número + de + mes.',
            'a las nueve y diez': 'La hora de una salida: **a las** + hora. 9:10 = las nueve y diez.',
            'a la una': '13:00. **A la** una: singular, porque es la una.',
            'hasta las dos': '**Hasta las dos** = until two. Hasta + las + hora, como a las.',
            'A qué hora': 'La pregunta para un evento: **¿A qué hora** llega? (What time does it arrive?)',
            'a las ocho y cuarto de la noche': '20:15. Con una hora exacta: **de la noche**.',
            'el domingo': 'Otro día concreto: **el domingo**. «Por la tarde», sin hora exacta.',
            'a las cinco': '17:00: **a las cinco** (de la tarde).',
            'a las siete menos diez': '18:50: diez minutos antes de las siete. **Menos** después de la media.',
            'qué hora es': 'Ahora Elena pregunta la hora de **este momento**: ¿qué hora es?',
            'Son las ocho y cinco': 'La hora de ahora, plural: **son las** ocho y cinco.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Por qué no quiere Elena el tren de la una?', options: ['Porque llega muy tarde.', 'Porque el viernes trabaja hasta las dos.', 'Porque es muy caro.'], answer: 1, why: '«El viernes trabajo hasta las dos».', en: 'Why doesn’t Elena want the one o’clock train?' },
            { prompt: '¿A qué hora llega Elena a Valencia?', options: ['A las siete menos diez.', 'A las ocho y cuarto de la noche.', 'A las seis y media de la tarde.'], answer: 1, why: '«Llega a las ocho y cuarto de la noche».', en: 'What time does Elena arrive in Valencia?' },
            { prompt: '¿Qué día vuelve Elena?', options: ['El martes 20.', 'El domingo 25.', 'El viernes 23.'], answer: 1, why: '«Vuelta, domingo 25, a las cinco».', en: 'Which day does Elena come back?' },
          ] },
        ] },
        { title: 'El billete de Elena · Elena’s ticket', blocks: [
          { kind: 'guide', text: { teacher: 'Tu alumno lee cada trozo de frase y decide: ¿hora de ahora, hora de un evento o día y fecha? Tú lees la frase completa en voz alta.', self: 'Lee cada trozo y decide: ¿hora de ahora, hora de un evento o día y fecha? (Now, event time, or day and date?)' } },
          { kind: 'classify', title: '¿Ahora, a qué hora o qué día? · Now, what time or which day?', categories: [
            { id: 'ahora', label: 'AHORA · es la / son las', tone: 'blue' },
            { id: 'evento', label: 'EVENTO · a la / a las', tone: 'orange' },
            { id: 'dia', label: 'DÍA Y FECHA · el …', tone: 'teal' },
          ], items: [
            { text: 'Perdone, ¿qué hora es? … las ocho y cinco.', answer: 'ahora', why: 'La hora de este momento: son las ocho y cinco.' },
            { text: 'El tren sale … seis y media.', answer: 'evento', why: 'Una salida: a las seis y media.' },
            { text: 'Elena viaja … 23 de octubre.', answer: 'dia', why: 'Una fecha: el 23 de octubre.' },
            { text: 'El tren llega … ocho y cuarto.', answer: 'evento', why: 'Una llegada: a las ocho y cuarto.' },
            { text: 'Elena vuelve … domingo.', answer: 'dia', why: 'Un día concreto: el domingo.' },
            { text: 'Mira el reloj: … la una.', answer: 'ahora', why: 'La hora de ahora, singular: es la una.' },
            { text: 'La cena de cumpleaños es … nueve y media.', answer: 'evento', why: 'Un evento: a las nueve y media.' },
            { text: 'Hoy … martes, 20 de octubre.', answer: 'dia', why: 'El día de hoy: hoy es martes.' },
          ] },
          { kind: 'teacher', text: 'Al final, tu alumno lee el billete completo en voz alta: «Ida: el viernes 23 de octubre, sale a las seis y media de la tarde y llega a las ocho y cuarto de la noche. Vuelta: el domingo 25…».' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: '¿Ahora o a qué hora? Now or at what time?',
      steps: [
        { title: 'Elige la forma · Choose the form', blocks: [
          { kind: 'choice', items: [
            { context: 'Reloj (clock): 1:20', prompt: '___ la una y veinte.', options: ['Es', 'Son', 'A'], answer: 0, why: 'La una es singular: es la una y veinte.', en: 'It’s twenty past one.' },
            { context: 'Reloj: 10:30', prompt: '___ diez y media.', options: ['Es la', 'Son las', 'Es las'], answer: 1, why: 'Las diez es plural: son las diez y media.', en: 'It’s half past ten.' },
            { context: 'Un autobús a Valencia: 15:00 (bus)', prompt: 'El autobús sale ___ tres de la tarde.', options: ['a las', 'son las', 'a la'], answer: 0, why: 'Una salida, hora plural: a las tres.', en: 'The bus leaves at three in the afternoon.' },
            { context: 'Reloj: 7:45', prompt: 'Son las ___.', options: ['ocho menos cuarto', 'siete menos cuarto', 'ocho y cuarto'], answer: 0, why: 'Después de la media restas desde la hora siguiente: las ocho menos cuarto.', en: 'It’s quarter to eight.' },
            { context: 'Una cita con el médico: jueves (doctor’s appointment)', prompt: 'La cita es ___ jueves.', options: ['el', 'en el', 'a el'], answer: 0, why: 'Un día concreto, sin preposición: el jueves.', en: 'The appointment is on Thursday.' },
            { context: 'El cumpleaños de Pablo: 4/5 (4 May)', prompt: 'El cumpleaños de Pablo es ___.', options: ['el 4 de mayo', 'el mayo 4', 'el 4 mayo'], answer: 0, why: 'Número + de + mes: el 4 de mayo.', en: 'Pablo’s birthday is on 4 May.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', mascot: '/brand/mascot/kneeling.webp', coach: 'Mira el verbo, el artículo y la preposición.', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Es las seis y media.', ok: false, options: ['Son las seis y media.', 'Es la seis y media.', 'Son la seis y media.'], answer: 0, why: 'Las seis es plural: son las seis y media.' },
            { sentence: 'El autobús sale a la una.', ok: true, why: 'Correcta: una salida a la una, en singular.' },
            { sentence: 'Son la una y cuarto.', ok: false, options: ['Es las una y cuarto.', 'Son las una y cuarto.', 'Es la una y cuarto.'], answer: 2, why: 'La una es singular: es la una y cuarto.' },
            { sentence: 'Elena tiene clase de inglés en el jueves.', ok: false, options: ['Elena tiene clase de inglés a el jueves.', 'Elena tiene clase de inglés el jueves.', 'Elena tiene clase de inglés en jueves.'], answer: 1, why: 'Con los días no hay preposición: el jueves.' },
            { sentence: 'Hoy es viernes, 23 de octubre.', ok: true, why: 'Correcta: hoy es + día, y la fecha con número + de + mes.' },
            { sentence: 'La cena es a las nueve por la noche.', ok: false, options: ['La cena es a las nueve de la noche.', 'La cena es en las nueve de la noche.', 'La cena es las nueve por la noche.'], answer: 0, why: 'Con una hora exacta: a las nueve de la noche.' },
            { sentence: 'El tren de vuelta llega el octubre 25.', ok: false, options: ['El tren de vuelta llega el 25 de octubre.', 'El tren de vuelta llega en 25 de octubre.', 'El tren de vuelta llega el 25 octubre.'], answer: 0, why: 'La fecha: el + número + de + mes.' },
          ] },
        ] },
        { title: 'Completa el chat · Complete the chat', mascot: '/brand/mascot/speaking.webp', coach: 'Miércoles: Elena escribe a Pablo.', blocks: [
          { kind: 'chat-fill', title: 'Elena y Pablo, el miércoles · Elena and Pablo, on Wednesday', lines: [
            { who: 'Pablo', text: '¡Hola, Elena! ¿Ya tienes el billete?' },
            { who: 'Elena', text: 'Sí. Llego ___.', options: ['los viernes', 'el viernes', 'en el viernes'], answer: 1, why: 'Un viernes concreto, sin preposición: el viernes. «Los viernes» es todas las semanas.' },
            { who: 'Pablo', text: '¿___ llega el tren?', options: ['A qué hora', 'Qué hora es', 'Qué día'], answer: 0, why: 'Pablo pregunta la hora de un evento: ¿a qué hora llega?' },
            { who: 'Elena', text: 'A las ocho y cuarto ___.', options: ['de la noche', 'por la noche', 'en la noche'], answer: 0, why: 'Con una hora exacta: de la noche.' },
            { who: 'Pablo', text: 'Perfecto. La cena de mamá es ___ nueve y media.', options: ['a las', 'a la', 'son las'], answer: 0, why: 'Un evento a una hora plural: a las nueve y media.' },
            { who: 'Elena', text: '¡Genial! Oye, ¿qué hora es? Mi móvil no tiene batería.' },
            { who: 'Pablo', text: '___ la una menos diez.', options: ['Es', 'Son', 'A'], answer: 0, why: '12:50 es la una menos diez: con la una, singular: es.' },
            { who: 'Elena', text: 'Gracias. Y vuelvo el domingo, ___. Sale a las cinco.', options: ['25 de octubre', 'octubre 25', '25 octubre'], answer: 0, why: 'La fecha: número + de + mes.' },
            { who: 'Pablo', text: '¡Muy bien! Hasta el viernes.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/autoestudio/mascot/noting.webp', coach: 'Ordena las piezas.', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['las', 'Son', 'cuarto', 'ocho', 'y'], accept: ['Son las ocho y cuarto'], en: 'It’s quarter past eight.' },
            { tiles: ['es', 'Hoy', '20', 'martes,', 'de', 'octubre'], accept: ['Hoy es martes, 20 de octubre'], en: 'Today is Tuesday, 20 October.' },
            { tiles: ['sale', 'El', 'una', 'a', 'tren', 'la'], accept: ['El tren sale a la una', 'A la una sale el tren'], en: 'The train leaves at one.' },
            { tiles: ['viernes', 'Elena', 'el', 'a', 'llega', 'las', 'ocho'], accept: ['Elena llega el viernes a las ocho', 'El viernes Elena llega a las ocho', 'El viernes llega Elena a las ocho', 'Elena llega a las ocho el viernes'], en: 'Elena arrives on Friday at eight.' },
          ] },
        ] },
        { title: 'De los números a las palabras · From numbers to words', mascot: '/autoestudio/mascot/writing.webp', coach: 'Escribe la hora y la fecha con palabras.', blocks: [
          { kind: 'rewrite', title: 'Escribe la frase · Write the sentence', items: [
            { prompt: 'Reloj: 13:00. ¿Qué hora es?', instruction: 'Escribe la hora con palabras. (Write the time in words.)', accept: ['Es la una', 'Es la una en punto', 'Es la una de la tarde', 'Es la una en punto de la tarde'] },
            { prompt: 'Reloj: 9:45. ¿Qué hora es?', instruction: 'Escribe la hora con palabras. (Write the time in words.)', accept: ['Son las diez menos cuarto', 'Son las diez menos cuarto de la mañana', 'Son las diez menos quince', 'Son las nueve y cuarenta y cinco', 'Son cuarto para las diez', 'Es cuarto para las diez', 'Son quince para las diez', 'Es quince para las diez'] },
            { prompt: 'Billete: Valencia → Madrid · domingo 25/10 · 17:00', instruction: 'Escribe cuándo sale el tren: día, fecha y hora. Empieza con «El tren sale». (Day, date and time.)', accept: ['El tren sale el domingo 25 de octubre a las cinco de la tarde', 'El tren sale el domingo 25 de octubre a las cinco', 'El tren sale a las cinco de la tarde el domingo 25 de octubre', 'El tren sale a las cinco el domingo 25 de octubre'] },
            { prompt: 'My birthday is on 3 May.', instruction: 'Escribe la frase en español. (birthday = cumpleaños)', accept: ['Mi cumpleaños es el 3 de mayo', 'Mi cumpleaños es el tres de mayo'] },
          ] },
          { kind: 'teacher', text: 'Después de cada frase, tu alumno dice la misma hora de otra manera: 18:30 → «las seis y media de la tarde»; 13:00 → «la una de la tarde».' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Un mensaje de Pablo', coach: 'Primero escucha sin leer. Listen first, read later.',
      steps: [
        { title: 'Pablo deja un mensaje · Pablo leaves a message', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general (¿por qué llama Pablo?). Segunda escucha: tu alumno escribe cada hora que oye. Después, las preguntas.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Escribe cada hora que oyes. (Listen once for the gist, once for the details, and note every time you hear.)' } },
          { kind: 'listen', title: 'Un mensaje de voz de Pablo', channel: 'MENSAJE DE VOZ · DE PABLO, DESDE VALENCIA', src: '/audio/grammar-live/338.mp3',
            before: 'Es jueves por la noche. Pablo, el hermano de Elena, vive en Valencia y le deja un mensaje de voz. ¿Qué horas crees que dice? (It is Thursday night. Elena’s brother Pablo lives in Valencia and leaves her a voice message. Which times do you think he mentions?)',
            gist: { prompt: '¿Por qué llama Pablo? · Why does Pablo call?', options: ['Para cambiar el billete de Elena.', 'Para decir que no hay cena.', 'Para confirmar las horas del viaje y de la cena.'], answer: 2, why: '«Tu tren llega mañana a las ocho y cuarto, ¿verdad?… La cena… es a las nueve y media».', en: 'Why does Pablo call?' },
            details: [
              { prompt: '¿Qué día es hoy en el mensaje?', options: ['Viernes, 23 de octubre.', 'Martes, 20 de octubre.', 'Jueves, 22 de octubre.'], answer: 2, why: '«Hoy es jueves, 22 de octubre».', en: 'What day is it today in the message?' },
              { prompt: '¿A qué hora sale Pablo del trabajo?', options: ['A las diez.', 'A las siete y media.', 'A las ocho y cuarto.'], answer: 1, why: '«Yo salgo del trabajo a las siete y media».', en: 'What time does Pablo leave work?' },
              { prompt: '¿A qué hora es la cena de cumpleaños?', options: ['A las nueve.', 'A las ocho y cuarto.', 'A las nueve y media.'], answer: 2, why: '«La cena de cumpleaños de mamá es a las nueve y media».', en: 'What time is the birthday dinner?' },
              { prompt: '¿Cuándo hay mercado en la plaza?', options: ['El viernes por la noche.', 'El sábado por la mañana; abre a las nueve.', 'El domingo a las cinco.'], answer: 1, why: '«El sábado por la mañana hay mercado en la plaza. Abre a las nueve».', en: 'When is there a market in the square?' },
              { prompt: '¿A qué hora sale el tren del domingo?', options: ['A las siete menos diez.', 'A las cinco de la tarde.', 'A la una.'], answer: 1, why: '«El domingo tu tren sale a las cinco de la tarde, ¿no?».', en: 'What time does the Sunday train leave?' },
            ],
            transcript: 'Hola, Elena, soy Pablo. [[Hoy es jueves, 22 de octubre|teal]], y [[son las diez|blue]] de la noche. Una pregunta: tu tren llega mañana [[a las ocho y cuarto|orange]], ¿verdad? Yo salgo del trabajo [[a las siete y media|orange]] y voy a la estación en coche. La cena de cumpleaños de mamá es [[a las nueve y media|orange]], en un restaurante del puerto. Ah, y [[el sábado|teal]] por la mañana hay mercado en la plaza. Abre [[a las nueve|orange]]. Y [[el domingo|teal]] tu tren sale [[a las cinco|orange]] de la tarde, ¿no? Bueno, hasta mañana. ¡Un beso!',
            reply: { teacher: 'Tú eres Pablo. Tu alumno responde al mensaje como Elena: confirma el día y la hora de llegada, la hora de la vuelta, y pregunta algo más («¿A qué hora cierra el mercado?»).', self: 'Responde a Pablo en voz alta como Elena: «Sí, llego el viernes a las…». Di también la hora de la vuelta y haz una pregunta con «¿a qué hora…?». (Answer Pablo aloud and ask one question.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'En la taquilla y en tu semana', coach: 'Pregunta y responde. Ask and answer.',
      steps: [
        { title: 'Horas, días y fechas · Times, days and dates', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la pregunta y tu alumno responde con frases completas. Tú repites su frase bien dicha y haces la repregunta. En la tarjeta de la taquilla, tú eres Óscar.', self: 'Lee la pregunta, responde en voz alta con una frase completa y, si quieres, escribe tu respuesta. (Answer aloud with a full sentence.)' } },
          { kind: 'talk', cards: [
            { q: '¿Qué hora es ahora? ¿Y en tu reloj o en tu móvil? · What time is it now?', followUps: ['¿Y qué hora es en Madrid ahora? (And in Madrid?)', '¿Es por la mañana, por la tarde o por la noche? (Morning, afternoon or night?)'], phrases: ['[[Es la una|blue]] y …', '[[Son las|blue]] … y cuarto / y media.', '[[Son las|blue]] … menos cuarto.'], hint: 'Con la una: es la. Con las otras horas: son las. Después de la media: menos.', example: 'Son las seis menos cuarto de la tarde. En Madrid son las once menos cuarto de la noche.', next: 'Ahora, el día y la fecha.' },
            { q: '¿Qué día es hoy? ¿Y qué fecha? · What day and date is it today?', followUps: ['¿Y mañana? (And tomorrow?)', '¿Qué día es tu día favorito de la semana? ¿Por qué? (Your favourite day?)'], phrases: ['Hoy es [[martes|teal]].', 'Hoy es martes, [[20 de octubre|teal]].', 'Mañana es …'], hint: 'Hoy es + día, sin artículo. La fecha: número + de + mes.', example: 'Hoy es jueves, 5 de marzo. Mañana es viernes, 6 de marzo. Mi día favorito es el sábado, porque no trabajo.', next: 'Ahora, a la taquilla.' },
            { q: 'Estás en la taquilla. Pide un billete para un día y pregunta las horas. · You are at the ticket office. Ask for a ticket and the times.', followUps: ['¿Ida o ida y vuelta? (One way or return?)', 'Hay un tren a la una y otro a las cinco. ¿Cuál prefiere? (Which one do you prefer?)', '¿Y la vuelta, qué día? (And the return, which day?)'], phrases: ['Un billete para Sevilla, para [[el sábado|teal]].', '¿[[A qué hora|orange]] sale? ¿[[A qué hora|orange]] llega?', 'Prefiero el tren [[de las cinco|orange]].'], hint: 'Primero el día (el sábado), después la pregunta: ¿a qué hora sale? ¿a qué hora llega?', example: 'Buenos días. Un billete de ida y vuelta para Sevilla, para el sábado 7 de noviembre. ¿A qué hora sale el primer tren? ¿Y a qué hora llega?', teacher: 'Tú eres Óscar: das dos horarios (a la una, a las cinco y diez) y tu alumno elige y repite el billete completo.', next: 'Ahora, tu semana.' },
            { q: '¿Qué haces esta semana? Di dos días y dos horas. · What are you doing this week? Say two days and two times.', followUps: ['¿A qué hora sales de casa el lunes? (What time do you leave home?)', '¿Qué haces los sábados? (What do you do on Saturdays?)'], phrases: ['[[El lunes|teal]] trabajo hasta [[las cinco|orange]].', '[[Los sábados|teal]] voy al gimnasio [[a las diez|orange]].', 'Ceno [[a las nueve de la noche|orange]].'], hint: 'El lunes = this Monday. Los lunes = every Monday. Y la hora con a las.', example: 'El miércoles tengo clase de español a las seis y media de la tarde. Los sábados voy al mercado a las diez. El domingo ceno con mi familia a las dos.', next: 'Ahora, fechas importantes.' },
            { q: '¿Cuándo es tu cumpleaños? ¿Y otra fecha importante para ti? · When is your birthday? And another important date?', followUps: ['¿Qué día de la semana es este año? (Which day of the week is it this year?)', '¿Qué haces ese día? (What do you do that day?)'], phrases: ['Mi cumpleaños es [[el 3 de mayo|teal]].', 'El cumpleaños de mi madre es [[el 23 de octubre|teal]].', 'Este año es [[un sábado|teal]].'], hint: 'El + número + de + mes. Los meses van en minúscula.', example: 'Mi cumpleaños es el 12 de junio. Este año es un viernes. El cumpleaños de mi hermano es el 1 de enero: el primero de enero.', next: 'Para terminar, confirma un billete.' },
            { q: 'Óscar repite tu billete, pero hay un error. Corrige la fecha o la hora. · The clerk repeats your ticket with a mistake. Correct it.', followUps: ['Entonces, ¿la vuelta es el sábado? (So the return is on Saturday?)', '¿Y el tren llega a las siete? (And it arrives at seven?)'], phrases: ['No, perdone: [[el domingo|teal]], no el sábado.', 'No sale [[a la una|orange]]; sale [[a las cinco|orange]].', 'Entonces: ida, [[el viernes 23|teal]], [[a las seis y media|orange]].'], hint: 'Primero «No, perdone», después el dato correcto: día, fecha u hora.', example: 'No, perdone. La vuelta es el domingo 25 de octubre, no el sábado. Y el tren sale a las cinco y llega a las siete menos diez.', teacher: 'Tú eres Óscar y dices el billete con dos errores («el sábado 24, a la una»). Tu alumno los corrige con frases completas.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno es Óscar en la taquilla y ofrece tres trenes con día, fecha y hora; tú eres el cliente y eliges.', self: 'Ahora tú eres Óscar: ofrece en voz alta tres trenes con día, fecha y hora, y después elige como cliente. (Now you are the clerk: offer three trains, then choose one.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Tu viaje, con día y hora', coach: 'Día, fecha y hora. Day, date and time.',
      steps: [
        { title: 'Un mensaje para Pablo · A message for Pablo', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos es la / son las, a la / a las, el + día y la fecha con «de». Después, tu alumno lee su mensaje en voz alta.', self: 'Escribe tu mensaje y toca «Revisar mi texto». Mira bien: a la una / a las dos, el viernes, el 23 de octubre. (Write your message and tap “Revisar mi texto”.)' } },
          { kind: 'write', title: 'Mi billete · My ticket', situation: 'Eres Elena (o escribe sobre un viaje tuyo). Escribe a Pablo, que te recoge en la estación: dile el día, la fecha y las horas de tu viaje. (You are Elena, or write about your own trip. Write to Pablo, who is picking you up: tell him the day, date and times of your trip.)', task: [
            'Saluda a Pablo. (Say hello.)',
            'Di qué día y qué fecha sales: «el viernes 23 de octubre». (Day and date.)',
            'Di a qué hora sale y a qué hora llega el tren, con **a la / a las**. (Departure and arrival times.)',
            'Di el día y la hora de la vuelta. (The return.)',
            'Haz una pregunta con **¿A qué hora…?** (Ask one question.)',
          ], starters: ['Hola, Pablo:', 'Ya tengo el billete.', 'Salgo de Madrid el …', 'El tren sale a las …', 'Llego a Valencia a las …', 'La vuelta es el …', '¿A qué hora …?', '¡Un beso!'],
            words: ['el viernes', 'el domingo', 'de octubre', 'a la una', 'a las …', 'y cuarto', 'y media', 'menos diez', 'de la mañana', 'de la tarde', 'de la noche', 'sale', 'llega', 'la vuelta'],
            model: 'Hola, Pablo: Ya tengo el billete. Salgo de Madrid [[el viernes 23 de octubre|teal]] [[a las seis y media|orange]] de la tarde y llego a Valencia [[a las ocho y cuarto|orange]] de la noche. La vuelta es [[el domingo 25 de octubre|teal]]: el tren sale [[a las cinco|orange]] de la tarde y llega a Madrid [[a las siete menos diez|orange]]. ¿[[A qué hora|orange]] es la cena de mamá? ¡Un beso!',
            minWords: 35,
            checks: [
              { label: 'Un día de la semana (a day of the week)', pattern: '(?<!\\p{L})(?:lunes|martes|miércoles|miercoles|jueves|viernes|sábado|sabado|domingo)(?!\\p{L})', tip: 'Di qué día viajas: «el viernes», «el domingo».' },
              { label: 'Una fecha: número + de + mes (a date)', pattern: '(?<!\\p{L})(?:\\d{1,2}|\\p{L}+)\\s+de\\s+(?:enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|setiembre|octubre|noviembre|diciembre)(?!\\p{L})', tip: 'Escribe la fecha: «el 23 de octubre».' },
              { label: 'A la / a las + hora (a time for an event)', pattern: '(?<!\\p{L})a\\s+las?\\s+(?:\\d{1,2}|una|dos|tres|cuatro|cinco|seis|siete|ocho|nueve|diez|once|doce)(?!\\p{L})', tip: 'Di a qué hora sale o llega el tren: «a las seis y media», «a la una».' },
              { label: 'Una pregunta con ¿a qué hora…? (a question)', pattern: '(?<!\\p{L})a\\s+qu[eé]\\s+hora(?!\\p{L})', tip: 'Pregunta algo: «¿A qué hora es la cena?».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})es\\s+las(?!\\p{L})', why: 'Con las horas en plural, el verbo es plural: «**son las** dos». Para un evento: «la cena es **a las** nueve».' },
              { pattern: '(?<!\\p{L})son\\s+la\\s+una(?!\\p{L})', why: 'La una es singular: «**es la una**».' },
              { pattern: '(?<!\\p{L})a\\s+las\\s+una(?!\\p{L})', why: 'Una es singular: «**a la una**».' },
              { pattern: '(?<!\\p{L})en\\s+el\\s+(?:lunes|martes|miércoles|miercoles|jueves|viernes|sábado|sabado|domingo)(?!\\p{L})', why: 'Con los días no hay preposición: «**el viernes**», no «en el viernes».' },
              { pattern: '(?<!\\p{L})las?\\s+(?:\\d{1,2}|una|dos|tres|cuatro|cinco|seis|siete|ocho|nueve|diez|once|doce)(?:\\s+(?:y|menos)\\s+\\p{L}+)?\\s+por\\s+la\\s+(?:mañana|tarde|noche)(?!\\p{L})', why: 'Con una hora exacta se dice «**de la** tarde / noche»: «a las seis de la tarde».' },
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
            { tone: 'blue', label: 'ES LA · SON LAS', formula: 'es la una · son las dos… doce', example: '¿Qué hora es? Son las ocho y cinco.', caption: 'la hora de ahora', en: 'What time is it? It’s five past eight.' },
            { tone: 'orange', label: 'A LA · A LAS', formula: '¿a qué hora? · a la una · a las seis + de la tarde', example: 'El tren sale a las seis y media de la tarde.', caption: 'cuándo pasa algo', en: 'The train leaves at half past six in the afternoon.' },
            { tone: 'teal', label: 'EL MARTES · EL 20 DE OCTUBRE', formula: 'hoy es martes · el viernes · el 23 de octubre', example: 'Vuelvo el domingo 25 de octubre.', caption: 'el día y la fecha', en: 'I come back on Sunday 25 October.' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'La una es singular: **es la una**, **a la una**. Las demás horas son plural: **son las** dos, **a las** dos. Para un día concreto, **el** viernes, sin «en». Y la fecha: **el 23 de octubre**.', en: 'One o’clock is singular: es la una, a la una. All other hours are plural: son las dos, a las dos. For a specific day, el viernes, without “en”. And the date: el 23 de octubre.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: '(3:00) ___ las tres.', options: ['A', 'Son', 'Es'], answer: 1, why: 'Las tres es plural: son las tres.', en: 'It’s three o’clock.' },
            { prompt: 'La clase de yoga es ___ una.', options: ['es la', 'a la', 'a las'], answer: 1, why: 'Un evento a la una: a la (singular).', en: 'The yoga class is at one.' },
            { prompt: '(11:45) Son las ___.', options: ['doce menos cuarto', 'once menos cuarto', 'once y cuarto'], answer: 0, why: 'Quince minutos antes de las doce: las doce menos cuarto.', en: 'It’s quarter to twelve.' },
            { prompt: 'Elena trabaja ___ lunes y vuelve a Valencia ___ sábado 31.', options: ['el / los', 'los / el', 'en los / en el'], answer: 1, why: 'Todas las semanas: los lunes. Un día concreto: el sábado 31.', en: 'Elena works on Mondays and goes back to Valencia on Saturday the 31st.' },
            { prompt: 'La fiesta de fin de año es ___.', options: ['en 31 diciembre', 'el 31 de diciembre', 'el diciembre 31'], answer: 1, why: 'El + número + de + mes.', en: 'The New Year’s Eve party is on 31 December.' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Del tren al médico.', blocks: [
          { kind: 'lead', text: 'De vuelta en Madrid, Elena tiene una semana llena: una cita con el médico, una clase y un concierto. Escribe cada cita con día, fecha y hora.', en: 'Back in Madrid, Elena has a busy week: a doctor’s appointment, a class and a concert. Write each one with day, date and time.' },
          { kind: 'rewrite', title: 'La agenda de Elena · Elena’s diary', items: [
            { prompt: 'Médico: jueves 29/10 · 10:15', instruction: 'Escribe la frase. Empieza con «La cita con el médico es». (appointment = cita)', accept: ['La cita con el médico es el jueves 29 de octubre a las diez y cuarto', 'La cita con el médico es el jueves 29 de octubre a las diez y cuarto de la mañana', 'La cita con el médico es a las diez y cuarto el jueves 29 de octubre'] },
            { prompt: 'Clase de español: lunes 2/11 · 13:30', instruction: 'Escribe la frase. Empieza con «La clase es».', accept: ['La clase es el lunes 2 de noviembre a la una y media', 'La clase es el lunes 2 de noviembre a la una y media de la tarde', 'La clase es a la una y media el lunes 2 de noviembre'] },
            { prompt: 'Concierto: sábado 7/11 · 20:45', instruction: 'Escribe la frase. Empieza con «El concierto es».', accept: ['El concierto es el sábado 7 de noviembre a las nueve menos cuarto', 'El concierto es el sábado 7 de noviembre a las nueve menos cuarto de la noche', 'El concierto es a las nueve menos cuarto el sábado 7 de noviembre', 'El concierto es el sábado 7 de noviembre a las ocho y cuarenta y cinco', 'El concierto es el sábado 7 de noviembre a las ocho y cuarenta y cinco de la noche'] },
          ] },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 039 · Ir a + infinitivo: planes próximos', text: 'Ya dices cuándo pasa algo: el viernes, a las seis y media, el 23 de octubre. En la clase 039 usas estas horas y fechas para hablar de tus **planes**: «El sábado **voy a visitar** a mi madre», «A las nueve **vamos a cenar**». Con ir a + infinitivo, tu agenda habla del futuro.', en: 'You can now say when something happens: on Friday, at half past six, on 23 October. In class 039 you use these times and dates to talk about your plans: “On Saturday I’m going to visit my mother”, “At nine we’re going to have dinner”. With ir a + infinitive, your diary talks about the future.', href: '/gramatica/ir-a-infinitivo', label: 'Ir a la clase 039' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Qué hora es y a qué hora es tu próxima clase?». Respuesta esperada: «Son las… / Es la una…» y «Es el… a las…», con el día y la fecha. Tarea: mandar el mensaje de Escribir a una persona real con un viaje o una cita de verdad.' },
        ] },
      ],
    },
  ],
};
