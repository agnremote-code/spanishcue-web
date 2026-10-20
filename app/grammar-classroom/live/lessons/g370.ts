import type { LiveLesson } from '../types';

/**
 * Lesson 370 · A2 · Cuantificadores algo, nada, alguien, nadie (course unit G070).
 * One scene runs through the class: Marta Salcedo, a photographer working for a
 * week in Oaxaca (Mexico), stays at the small hotel Casa Jacaranda. In the
 * evening she asks Inés, the receptionist (usted), if someone called and if
 * something arrived for her: nobody called, but someone left a box. Nobody saw
 * who: it was her colleague Óscar, who found nobody at the desk. Next morning
 * Marta has lost her phone charger; Raúl is the night receptionist and Lupita
 * works in the kitchen. In the voice message Inés (Mexican voice, usted) gives
 * Marta the news of the day.
 * Content: algo / nada (things), alguien / nadie (people); invariable, verb in
 * the singular; algo / alguien in open questions (English any-) and nada /
 * nadie in negative answers; no + verbo + nada / nadie versus Nadie + verbo
 * (anchor: No vino nadie; alguien llamó); personal «a» with alguien / nadie
 * as objects (veo a alguien, no conozco a nadie) but not after hay.
 * Double negation in depth with nunca (clase 072) and alguno / ninguno
 * (clase 071) stay for later; «nadie… nada» in one sentence is avoided.
 * Ampliación: algo / nada + adjetivo, algo de + infinitivo, ¿algo más? / nada
 * más, alguien más / nadie más, and «no me gustó nada» (receptive).
 * Instructions use tú.
 */
export const lesson: LiveLesson = {
  id: 370,
  level: 'A2',
  title: 'Cuantificadores algo, nada, alguien, nadie',
  subtitle: 'Preguntar y responder por cosas y personas con algo, nada, alguien y nadie: «No llamó nadie, pero alguien dejó algo».',
  legend: [
    { tone: 'blue', label: 'SÍ · algo (something), alguien (someone) · también en preguntas' },
    { tone: 'orange', label: 'NO · nada (nothing), nadie (nobody)' },
    { tone: 'teal', label: 'PALABRAS PEQUEÑAS · no antes del verbo, a antes de una persona' },
  ],
  optionNotes: {
    'Nadie no': 'Si **nadie** va antes del verbo, la frase ya es negativa: «Nadie contestó». Sobra el «no».',
    'Anoche no vi nadie en el pasillo.': 'Falta la **a**: nadie es una persona y recibe la acción de ver. «No vi **a** nadie».',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Algo, nada, alguien, nadie', coach: 'Cosas y personas. Things and people.',
      steps: [
        { title: 'Una caja en la recepción · A box at the front desk', blocks: [
          { kind: 'lead', text: 'Marta Salcedo es fotógrafa. Esta semana trabaja en Oaxaca, en México, y duerme en el hotel Casa Jacaranda. Por la noche vuelve al hotel y pregunta en la recepción: «¿Me llamó **alguien**? ¿Hay **algo** para mí?». Inés, la recepcionista, responde: «**No** llamó **nadie**, pero **alguien** dejó **algo** para usted». Hoy aprendes cuatro palabras muy útiles: **algo**, **nada**, **alguien** y **nadie**.', en: 'Marta Salcedo is a photographer. This week she is working in Oaxaca, in Mexico, and staying at the Casa Jacaranda hotel. In the evening she comes back and asks at the front desk: “Did anyone call me? Is there anything for me?”. Inés, the receptionist, answers: “Nobody called, but someone left something for you”. Today you learn four very useful words: algo, nada, alguien and nadie.' },
          { kind: 'guide', text: { teacher: 'Tú lees las dos frases de Inés y tu alumno repite. Después tu alumno dice qué palabra es una persona y qué palabra es una cosa.', self: 'Lee las dos frases en voz alta. ¿Qué palabras son personas? ¿Qué palabras son cosas? (Which words are people? Which are things?)' } },
          { kind: 'compare', title: 'Sí o no · Yes or no', columns: [
            { tone: 'blue', label: 'SÍ · alguien, algo', sentence: '[[Alguien|blue]] dejó [[algo|blue]] para usted.', idea: 'Hay una persona y una cosa, pero no decimos cuáles.', en: 'Someone left something for you. (a person and a thing, not named)' },
            { tone: 'orange', label: 'NO · nadie, nada', sentence: '[[No|teal]] llamó [[nadie|orange]]. La caja [[no|teal]] dice [[nada|orange]].', idea: 'Cero personas, cero cosas.', en: 'Nobody called. The box doesn’t say anything. (zero people, zero things)' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'En «Alguien dejó algo», «alguien» es…', options: ['una cosa', 'una persona', 'un lugar'], answer: 1, why: '**Alguien** = una persona, pero no decimos quién.', en: 'In “Alguien dejó algo”, “alguien” is…' },
            { prompt: '«No llamó nadie» significa…', options: ['Cero personas llamaron.', 'Llamó una persona.', 'Llamaron muchas personas.'], answer: 0, why: '**Nadie** = cero personas.', en: '“No llamó nadie” means…' },
            { prompt: '«La caja no dice nada»: ¿qué hay escrito en la caja?', options: ['Nada: no hay palabras.', 'Un nombre.', 'Una dirección.'], answer: 0, why: '**Nada** = cero cosas: no hay ninguna palabra.', en: '“The box doesn’t say anything”: what is written on it?' },
          ] },
        ] },
        { title: 'Cosas y personas · Things and people', mascot: '/brand/mascot/studying.webp', coach: 'Cuatro palabras, dos parejas. Four words, two pairs.', blocks: [
          { kind: 'table', title: 'Las cuatro palabras · The four words', head: ['', 'SÍ (+)', 'NO (–)'], rows: [
            ['COSAS · things', '[[algo|blue]] (something)', '[[nada|orange]] (nothing)'],
            ['PERSONAS · people', '[[alguien|blue]] (someone)', '[[nadie|orange]] (nobody)'],
          ], note: 'Las cuatro palabras **no cambian**: no tienen femenino ni plural. Y el verbo va en **singular**: «alguien llama», «nadie sabe». (They never change, and the verb is singular.)' },
          { kind: 'concept', tone: 'blue', label: 'ALGO · ALGUIEN', question: '¿Hay una cosa? ¿Hay una persona?', en: 'Is there a thing? Is there a person? (we don’t say which one)', formula: ['algo = una cosa (no digo cuál)', 'alguien = una persona (no digo quién)'],
            meaning: 'Usas **algo** y **alguien** cuando una cosa o una persona existe, pero no sabes cuál es o no lo quieres decir.',
            examples: [
              { es: '[[Alguien|blue]] está en la puerta.', en: 'Someone is at the door.' },
              { es: 'Marta quiere comer [[algo|blue]] antes de dormir.', en: 'Marta wants to eat something before going to bed.' },
              { es: 'Hay [[algo|blue]] en la caja: unas fotos.', en: 'There’s something in the box: some photos.' },
            ] },
          { kind: 'concept', tone: 'orange', label: 'NADA · NADIE', question: '¿Cuántas cosas? ¿Cuántas personas? Cero.', en: 'How many things? How many people? Zero.', formula: ['nada = cero cosas', 'nadie = cero personas'],
            meaning: 'Usas **nada** y **nadie** para decir que no hay cosas o personas: cero.',
            examples: [
              { es: '[[Nadie|orange]] sabe quién dejó la caja.', en: 'Nobody knows who left the box.' },
              { es: 'Marta [[no|teal]] tiene [[nada|orange]] en la nevera de la habitación.', en: 'Marta has nothing in the fridge in her room.' },
              { es: '—¿Quién está en la recepción? —[[Nadie|orange]].', en: '—Who is at the front desk? —Nobody.' },
            ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Alguien ___ a la puerta de Marta.', options: ['llamas', 'llaman', 'llama'], answer: 2, why: '**Alguien** va con el verbo en singular: alguien llama.', en: 'Someone is knocking at Marta’s door.' },
            { prompt: 'Inés: «No sé quién dejó la caja. ___ la vio».', options: ['Nadie', 'Nada', 'Algo'], answer: 0, why: 'Hablamos de personas (ver la caja) y la respuesta es cero: **nadie**.', en: '“I don’t know who left the box. Nobody saw it.”' },
            { prompt: 'Marta abre la caja: hay ___ dentro, unas fotos.', options: ['nada', 'algo', 'alguien'], answer: 1, why: 'Unas fotos son cosas y sí existen: **algo**.', en: 'Marta opens the box: there’s something inside, some photos.' },
          ] },
        ] },
        { title: 'Preguntar y responder · Asking and answering', mascot: '/brand/mascot/speaking.webp', coach: '¿Algo? — Nada. ¿Alguien? — Nadie.', blocks: [
          { kind: 'table', title: 'Preguntas y respuestas · Questions and answers', head: ['Pregunta · question', 'Sí', 'No'], rows: [
            ['¿Quieres [[algo|blue]]? (anything?)', 'Sí, un café, por favor.', 'No, gracias, [[nada|orange]]. / [[No|teal]] quiero [[nada|orange]].'],
            ['¿[[Alguien|blue]] sabe la dirección? (anybody?)', 'Sí, Inés la sabe.', '[[Nadie|orange]]. / [[Nadie|orange]] la sabe.'],
            ['¿Hay [[algo|blue]] para mí?', 'Sí, hay [[algo|blue]]: esta caja.', 'No, [[no|teal]] hay [[nada|orange]].'],
            ['¿Hay [[alguien|blue]] en la terraza?', 'Sí, hay [[alguien|blue]]: un señor.', 'No, [[no|teal]] hay [[nadie|orange]].'],
          ], note: 'En la respuesta corta, «Nada.» y «Nadie.» van solas, sin «no». (In short answers, nada and nadie stand alone.)' },
          { kind: 'tip', icon: '🔑', title: 'El «any» del inglés · English “any”', text: 'En inglés, anything y anybody sirven para la pregunta y para la frase negativa. En español son dos palabras distintas. En la pregunta normal: **algo / alguien** («¿Quieres algo?», «¿Alguien sabe…?»). En la frase negativa: **nada / nadie** («No quiero nada», «No sabe nadie»).', en: 'In English, anything and anybody work in questions and in negative sentences. In Spanish they are two different words. In an ordinary question: algo / alguien (“Do you want anything?”, “Does anybody know…?”). In a negative sentence: nada / nadie (“I don’t want anything”, “Nobody knows”).' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Inés: «Buenas noches. ¿Necesita ___?»', options: ['algo', 'alguien', 'nadie'], answer: 0, why: 'Una pregunta normal sobre cosas: **algo** (anything).', en: '“Good evening. Do you need anything?”' },
            { prompt: '—¿Alguien preguntó por mí? —No, ___.', options: ['nada', 'nadie', 'alguien'], answer: 1, why: 'Respuesta negativa sobre personas: **nadie**.', en: '—Did anybody ask for me? —No, nobody.' },
            { prompt: '—¿Hay algo en el buzón? —No, no hay ___.', options: ['nada', 'nadie', 'algo'], answer: 0, why: 'Frase negativa sobre cosas: **no hay nada**. «No hay algo» no se dice.', en: '—Is there anything in the mailbox? —No, there’s nothing.' },
          ] },
        ] },
        { title: 'El lugar de «no» · Where “no” goes', mascot: '/brand/mascot/standing.webp', coach: 'No vino nadie. Nadie vino.', blocks: [
          { kind: 'compare', title: 'Después o antes del verbo · After or before the verb', columns: [
            { tone: 'teal', label: 'DESPUÉS DEL VERBO → no + verbo', sentence: '[[No|teal]] vino [[nadie|orange]]. [[No|teal]] pasó [[nada|orange]].', idea: 'Nada o nadie van después del verbo: pon **no** antes del verbo.', en: 'Nobody came. Nothing happened. (after the verb: put no before the verb)' },
            { tone: 'orange', label: 'ANTES DEL VERBO → sin «no»', sentence: '[[Nadie|orange]] vino. [[Nadie|orange]] contestó.', idea: 'Nadie va primero: la frase ya es negativa.', en: 'Nobody came. Nobody answered. (first in the sentence: no “no”)' },
          ] },
          { kind: 'decide', title: '¿Pongo «no»? · Do I add “no”?', steps: [
            { q: '¿La frase es negativa y «nada» o «nadie» va **después** del verbo?', yes: 'Pon **no** antes del verbo: «No vino nadie», «No hay nada».', no: 'next' },
            { q: '¿«Nadie» va **antes** del verbo, al principio?', yes: 'No pongas «no»: «Nadie vino».', no: 'next' },
            { q: '¿Es una frase afirmativa o una pregunta normal?', yes: 'Usa **algo / alguien**, sin «no»: «Alguien llamó», «¿Hay algo?».', no: 'Lee la frase otra vez: ¿es una cosa o una persona? ¿Sí o no?' },
          ] },
          { kind: 'tip', icon: '💡', title: 'Las dos frases son correctas · Both are correct', text: '«No vino nadie» y «Nadie vino» dicen lo mismo. En la conversación, «No vino nadie» es muy frecuente. Lo que no funciona es «Nadie no vino» (sobra el no) o «Vino nadie» (falta el no). En la clase 072 practicas más con **nunca** y otras palabras negativas.', en: '“No vino nadie” and “Nadie vino” mean the same. In conversation, “No vino nadie” is very common. What doesn’t work is “Nadie no vino” (extra no) or “Vino nadie” (missing no). In class 072 you practise more with nunca and other negative words.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '___ llamó para Marta esta tarde.', options: ['Nadie no', 'No nadie', 'Nadie'], answer: 2, why: '**Nadie** al principio, antes del verbo: sin «no».', en: 'Nobody called for Marta this afternoon.' },
            { prompt: 'Esta tarde ___ para Marta.', options: ['llamó nadie', 'no llamó alguien', 'no llamó nadie'], answer: 2, why: 'Nadie va después del verbo: **no** + verbo + **nadie**.', en: 'This afternoon nobody called for Marta.' },
            { prompt: 'En el hotel hoy ___: un día tranquilo.', options: ['no pasó algo', 'no pasó nada', 'pasó nada'], answer: 1, why: 'Nada después del verbo: **no** pasó **nada**.', en: 'Nothing happened at the hotel today: a quiet day.' },
          ] },
        ] },
        { title: '«A alguien», «a nadie» · Personal “a”', mascot: '/brand/mascot/kneeling.webp', coach: 'Una persona recibe la acción: a.', blocks: [
          { kind: 'lead', text: 'En español, cuando una persona recibe la acción, ponemos **a** antes: «Veo **a** Inés», «Espero **a** mi compañero». Con **alguien** y **nadie** pasa lo mismo, porque son personas: «Veo **a alguien**», «No conozco **a nadie**». Con **hay** no hay «a»: «Hay alguien en la puerta».', en: 'In Spanish, when a person receives the action, we put a before them: “I see Inés”, “I’m waiting for my colleague”. Alguien and nadie work the same way, because they are people: “I see someone”, “I don’t know anybody”. After hay there is no a: “There’s someone at the door”.' },
          { kind: 'table', title: 'Con «a» o sin «a» · With or without “a”', head: ['Sin «a»', 'Con «a»'], rows: [
            ['**Hay** alguien en la puerta. (hay: sin a)', '**Veo** [[a|teal]] alguien en la puerta. (I see someone)'],
            ['**Alguien** llamó. (alguien hace la acción)', 'Inés **llamó** [[a|teal]] alguien de la cocina. (Inés called someone)'],
            ['**No hay** nadie en la recepción.', '**No conozco** [[a|teal]] nadie en Oaxaca. (I don’t know anybody)'],
            ['**Busco** algo para el viaje. (algo: una cosa)', '**Busco** [[a|teal]] alguien para ayudar. (I’m looking for someone)'],
          ], note: 'Con **algo** y **nada** (cosas) no hay «a»: «Veo algo», «No veo nada». Y cuando alguien o nadie hacen la acción (el sujeto), tampoco: «Nadie vio la caja».' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Marta no conoce ___ en Oaxaca.', options: ['a nada', 'nadie', 'a nadie'], answer: 2, why: 'Conocer + persona: **a nadie**. Nadie es una persona que recibe la acción.', en: 'Marta doesn’t know anybody in Oaxaca.' },
            { prompt: 'Hay ___ en la terraza.', options: ['a alguien', 'nadie', 'alguien'], answer: 2, why: 'Con **hay** no ponemos «a»: hay alguien.', en: 'There’s someone on the terrace.' },
            { prompt: 'Inés ve ___ con una cámara en la calle.', options: ['a algo', 'alguien', 'a alguien'], answer: 2, why: 'Ver + persona: **a alguien**.', en: 'Inés sees someone with a camera in the street.' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: '¿Sí o no? ¿Cosa o persona?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la frase con el error y tu alumno explica qué falla: ¿cosa o persona? ¿falta o sobra «no»? ¿falta «a»? Después aparece la corrección.', self: 'Lee cada frase y piensa: ¿cosa o persona? ¿Falta o sobra «no»? ¿Falta «a»? Toca para ver la corrección. (Thing or person? Is “no” or “a” missing?)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Nadie no llamó para usted.', right: 'Nadie llamó para usted. / No llamó nadie para usted.', why: 'Con nadie antes del verbo, sobra el «no». Con nadie después del verbo, «no» va antes del verbo. (Nadie first: no “no”.)' },
            { wrong: 'No quiero algo, gracias.', right: 'No quiero nada, gracias.', why: 'En la frase negativa, anything es **nada**. (I don’t want anything = No quiero nada.)' },
            { wrong: 'No hay alguien en la recepción.', right: 'No hay nadie en la recepción.', why: 'Con «no hay» y una persona: **nadie**. (There isn’t anybody = No hay nadie.)' },
            { wrong: 'Anoche no vi nadie en el pasillo.', right: 'Anoche no vi a nadie en el pasillo.', why: 'Ver + persona: falta la **a**. (I didn’t see anybody: no vi a nadie.)' },
            { wrong: 'Alguien llamaron a la puerta.', right: 'Alguien llamó a la puerta.', why: 'Alguien y nadie van con el verbo en **singular**. (Someone knocked: singular verb.)' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '—¿Quiere algo de la cocina? —No, gracias, no quiero ___.', options: ['nada', 'algo', 'nadie'], answer: 0, why: 'Frase negativa sobre cosas: **no quiero nada**.', en: '—Would you like anything from the kitchen? —No, thanks, I don’t want anything.' },
            { prompt: 'Raúl: «Anoche ___ entró en el hotel después de las doce».', options: ['nadie', 'nadie no', 'alguien no'], answer: 0, why: '**Nadie** antes del verbo: la frase ya es negativa, sin «no».', en: 'Raúl: “Last night nobody came into the hotel after midnight.”' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno mira la sala y dice dos frases reales: una con «hay algo / hay alguien» y otra con «no hay nada / no hay nadie»: «Hay algo en la mesa: un libro. No hay nadie en la puerta».' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'En la recepción del hotel', coach: 'Toca las palabras marcadas. Tap the marked words.',
      steps: [
        { title: '¿Me llamó alguien? · Did anyone call me?', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Inés y tu alumno es Marta. Después tu alumno toca cada palabra marcada y dice si es una cosa o una persona, y si es sí o no.', self: 'Lee el diálogo en voz alta. Después toca cada palabra marcada: ¿cosa o persona? ¿Sí o no? (Thing or person? Yes or no?)' } },
          { kind: 'explore', title: 'Una caja sin nombre', setting: 'Las nueve de la noche, en la recepción del hotel Casa Jacaranda, en Oaxaca. Marta vuelve de trabajar. Inés y Marta se hablan de usted. (9 p.m., at the front desk of the Casa Jacaranda hotel. Marta comes back from work. They use usted.)', lines: [
            { who: 'Inés', text: 'Buenas noches, señora Salcedo. ¿Necesita [[algo|blue]]?', en: 'Good evening, Ms Salcedo. Do you need anything?' },
            { who: 'Marta', text: 'Buenas noches, Inés. Sí, una pregunta: ¿me llamó [[alguien|blue]] esta tarde? Espero una llamada de mi compañero Óscar.', en: 'Good evening, Inés. Yes, a question: did anyone call me this afternoon? I’m expecting a call from my colleague Óscar.' },
            { who: 'Inés', text: 'Lo siento. Hoy no llamó [[nadie|orange]] para usted.', en: 'I’m sorry. Nobody called for you today.' },
            { who: 'Marta', text: 'Qué raro. ¿Y llegó [[algo|blue]] para mí? Espero un paquete pequeño.', en: 'How strange. And did anything arrive for me? I’m expecting a small parcel.' },
            { who: 'Inés', text: 'Sí, [[alguien|blue]] dejó esta caja para usted.', en: 'Yes, someone left this box for you.' },
            { who: 'Marta', text: '¡Qué bien! ¿Quién la dejó?', en: 'Great! Who left it?' },
            { who: 'Inés', text: 'No lo sé. Yo no vi [[a nadie|orange]]: cuando volví de comer, la caja ya estaba aquí, en el mostrador.', en: 'I don’t know. I didn’t see anybody: when I came back from lunch, the box was already here, on the counter.' },
            { who: 'Marta', text: '¿Y la caja no dice [[nada|orange]]? ¿No tiene un nombre?', en: 'And the box doesn’t say anything? Doesn’t it have a name?' },
            { who: 'Inés', text: '[[Nada|orange]]. Solo dice «Habitación 12». Mañana pregunto [[a alguien|blue]] de la cocina.', en: 'Nothing. It only says “Room 12”. Tomorrow I’ll ask someone in the kitchen.' },
            { who: 'Marta', text: '¡Ah, mire! Dentro hay una nota: «Pasé por el hotel, pero no encontré [[a nadie|orange]] en la recepción. Te dejo las fotos. Óscar».', en: 'Oh, look! There’s a note inside: “I came by the hotel, but I didn’t find anybody at the front desk. I’m leaving you the photos. Óscar”.' },
            { who: 'Inés', text: '¡Uy, es verdad! A esa hora no había [[nadie|orange]] aquí. Perdone.', en: 'Oops, that’s true! At that time there was nobody here. I’m sorry.' },
            { who: 'Marta', text: 'No pasa [[nada|orange]]. Ya tengo las fotos, y eso es lo que importa.', en: 'Don’t worry about it. I have the photos now, and that’s what matters.' },
          ], notes: {
            'algo': 'Una cosa, sin decir cuál. En la pregunta, **algo** = anything: «¿Necesita algo?», «¿Llegó algo para mí?».',
            'alguien': 'Una persona, sin decir quién. En la pregunta, **alguien** = anybody: «¿Me llamó alguien?». En la respuesta, someone: «Alguien dejó esta caja».',
            'nadie': 'Cero personas. Va después del verbo, por eso hay **no** antes: «no llamó nadie», «no había nadie».',
            'a nadie': 'Ver o encontrar + persona: **a**. Y como nadie va después del verbo, hay **no**: «no vi a nadie».',
            'nada': 'Cero cosas, después del verbo con **no**: «no dice nada». «No pasa nada» es una frase fija: don’t worry, it’s fine.',
            'Nada': 'Respuesta corta: **Nada.** sola, sin «no».',
            'a alguien': 'Preguntar + persona: **a alguien**. Inés no dice quién: una persona de la cocina.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Quién llamó a Marta esta tarde?', options: ['Nadie.', 'Una persona de la cocina.', 'Óscar.'], answer: 0, why: '«Hoy no llamó nadie para usted».', en: 'Who called Marta this afternoon?' },
            { prompt: '¿Por qué Inés no sabe quién dejó la caja?', options: ['Porque la persona no habló español.', 'Porque la caja llegó por correo.', 'Porque no estaba en la recepción en ese momento.'], answer: 2, why: '«Cuando volví de comer, la caja ya estaba aquí».', en: 'Why doesn’t Inés know who left the box?' },
            { prompt: '¿Qué hay dentro de la caja?', options: ['Un paquete para Inés.', 'Las fotos de Óscar y una nota.', 'Nada.'], answer: 1, why: '«Dentro hay una nota… Te dejo las fotos. Óscar».', en: 'What is inside the box?' },
          ] },
        ] },
        { title: '¿Qué palabra? · Which word?', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'classify', title: 'Frases de la recepción · Sentences from the front desk', categories: [
            { id: 'algo', label: 'ALGO · una cosa, sí', tone: 'blue' },
            { id: 'alguien', label: 'ALGUIEN · una persona, sí', tone: 'blue' },
            { id: 'nada', label: 'NADA · cero cosas', tone: 'orange' },
            { id: 'nadie', label: 'NADIE · cero personas', tone: 'orange' },
          ], items: [
            { text: '¿Llegó ___ para la habitación 12? (a parcel?)', answer: 'algo', why: 'Una pregunta sobre una cosa: algo.' },
            { text: 'Hoy no llamó ___ para usted.', answer: 'nadie', why: 'No + verbo + persona: nadie.' },
            { text: '___ dejó esta caja en el mostrador.', answer: 'alguien', why: 'Una persona sí dejó la caja, pero no sabemos quién: alguien.' },
            { text: 'La caja no dice ___.', answer: 'nada', why: 'No + verbo + cero cosas: nada.' },
            { text: 'Mañana pregunto a ___ de la cocina.', answer: 'alguien', why: 'Una persona, no sabemos cuál: a alguien.' },
            { text: 'A esa hora no había ___ en la recepción.', answer: 'nadie', why: 'Cero personas en la recepción: nadie.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: «¿Y en tu casa ahora? ¿Hay alguien? ¿Hay algo en la nevera?». Tu alumno responde con una frase afirmativa y una negativa.' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Cosa o persona, sí o no.',
      steps: [
        { title: 'A la mañana siguiente · The next morning', blocks: [
          { kind: 'choice', items: [
            { context: 'Marta baja a desayunar. (Marta comes down for breakfast.)', prompt: 'Camarero: «Buenos días. ¿Quiere ___ para beber? ¿Café, jugo?»', options: ['alguien', 'nadie', 'algo'], answer: 2, why: 'Una pregunta normal sobre cosas (café, jugo): algo.', en: 'Waiter: “Good morning. Would you like anything to drink? Coffee, juice?”' },
            { context: 'Marta habla con otros huéspedes. (Marta talks to other guests.)', prompt: '¿___ sabe a qué hora abre el mercado?', options: ['Nada', 'Algo', 'Alguien'], answer: 2, why: 'Pregunta sobre una persona que sabe algo: alguien (anybody).', en: 'Does anybody know what time the market opens?' },
            { context: 'Raúl, el recepcionista de noche, se va a casa. (Raúl, the night receptionist, is going home.)', prompt: 'Raúl: «Anoche no llamó ___ para usted».', options: ['alguien', 'nadie', 'nada'], answer: 1, why: 'Frase negativa con no + verbo, y hablamos de personas: nadie.', en: 'Raúl: “Nobody called for you last night.”' },
            { context: 'Marta no encuentra su cargador. (Marta can’t find her charger.)', prompt: 'Mira en la mesa de la habitación, pero no hay ___.', options: ['nada', 'algo', 'nadie'], answer: 0, why: 'No hay + cero cosas: nada.', en: 'She looks on the table in her room, but there’s nothing there.' },
            { context: 'En la terraza. (On the terrace.)', prompt: '___ dejó un periódico en la mesa de Marta.', options: ['Algo', 'Nadie no', 'Alguien'], answer: 2, why: 'Una persona dejó el periódico (afirmativo): alguien. «Algo» es una cosa.', en: 'Someone left a newspaper on Marta’s table.' },
          ] },
        ] },
        { title: '¿Con «a» o sin «a»? · With or without “a”?', blocks: [
          { kind: 'classify', title: 'La «a» con personas · “A” with people', categories: [
            { id: 'con', label: 'CON «a» · una persona recibe la acción', tone: 'teal' },
            { id: 'sin', label: 'SIN «a» · hay, una cosa o el sujeto', tone: 'neutral' },
          ], items: [
            { text: 'Inés espera ___ alguien de la cocina.', answer: 'con', why: 'Esperar + persona: espera a alguien.' },
            { text: 'Hay ___ alguien en el pasillo.', answer: 'sin', why: 'Con hay no hay «a»: hay alguien.' },
            { text: 'Marta no conoce ___ nadie en Oaxaca.', answer: 'con', why: 'Conocer + persona: no conoce a nadie.' },
            { text: 'Marta busca ___ algo para el viaje.', answer: 'sin', why: 'Algo es una cosa: busca algo.' },
            { text: 'Raúl no vio ___ nadie anoche.', answer: 'con', why: 'Ver + persona: no vio a nadie.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Nadie no contestó el teléfono de la recepción.', ok: false, options: ['Alguien no contestó el teléfono de la recepción.', 'Nadie contestó el teléfono de la recepción.', 'Nadie contestó no el teléfono de la recepción.'], answer: 1, why: 'Nadie antes del verbo: la frase ya es negativa, sin «no».' },
            { sentence: 'Anoche vi nadie en el pasillo.', ok: false, options: ['Anoche no vi nadie en el pasillo.', 'Anoche vi a nada en el pasillo.', 'Anoche no vi a nadie en el pasillo.'], answer: 2, why: 'Nadie después del verbo: falta «no»; y ver + persona: falta «a».' },
            { sentence: '¿Alguien quieren más café?', ok: false, options: ['¿Nadie quieren más café?', '¿Alguien quiere más café?', '¿Alguienes quieren más café?'], answer: 1, why: 'Alguien no tiene plural y va con el verbo en singular: quiere.' },
            { sentence: 'Alguien dejó un mensaje para Marta.', ok: true, why: 'Correcta: una persona dejó el mensaje y no decimos quién.' },
            { sentence: 'Marta no compró algo en el mercado.', ok: false, options: ['Marta no compró nada en el mercado.', 'Marta compró nada en el mercado.', 'Marta no compró nadie en el mercado.'], answer: 0, why: 'Frase negativa sobre cosas: no compró nada.' },
          ] },
        ] },
        { title: 'Marta y Óscar en el mercado · Marta and Óscar at the market', blocks: [
          { kind: 'chat-fill', title: 'Por fin se ven · They finally meet', lines: [
            { who: 'Óscar', text: '¡Marta! ¿Recibiste las fotos?' },
            { who: 'Marta', text: 'Sí, pero en la recepción ___ sabía de quién era la caja.', options: ['alguien', 'nadie no', 'nadie'], answer: 2, why: 'Nadie antes del verbo (sabía): sin «no».' },
            { who: 'Óscar', text: 'Perdón. Cuando llegué, no había ___ en la recepción.', options: ['nada', 'nadie', 'alguien'], answer: 1, why: 'No + verbo + cero personas: no había nadie.' },
            { who: 'Marta', text: '¿Y ___ te vio entrar?', options: ['alguien', 'nadie no', 'algo'], answer: 0, why: 'Una pregunta normal sobre una persona: alguien.' },
            { who: 'Óscar', text: 'No, ___ me vio. Dejé la caja en el mostrador y salí.', options: ['nada', 'nadie', 'alguien'], answer: 1, why: 'Respuesta negativa con nadie antes del verbo: nadie me vio.' },
            { who: 'Marta', text: 'Bueno, no pasa nada. Para las fotos de hoy, ¿necesitas ___?', options: ['a algo', 'algo', 'alguien'], answer: 1, why: 'Pregunta normal sobre cosas: ¿necesitas algo?' },
            { who: 'Óscar', text: 'Sí: busco ___ para ayudar con la luz.', options: ['a alguien', 'alguien', 'a algo'], answer: 0, why: 'Buscar + persona: busco a alguien.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['No', 'llamó', 'nadie', 'para', 'usted.'], accept: ['No llamó nadie para usted.'], en: 'Nobody called for you.' },
            { tiles: ['Alguien', 'dejó', 'algo', 'en', 'la', 'recepción.'], accept: ['Alguien dejó algo en la recepción.'], en: 'Someone left something at the front desk.' },
            { tiles: ['¿Hay', 'alguien', 'en', 'la', 'terraza?'], accept: ['¿Hay alguien en la terraza?'], en: 'Is there anyone on the terrace?' },
            { tiles: ['Marta', 'no', 'conoce', 'a', 'nadie', 'en', 'Oaxaca.'], accept: ['Marta no conoce a nadie en Oaxaca.'], en: 'Marta doesn’t know anybody in Oaxaca.' },
          ] },
        ] },
        { title: 'De sí a no · From yes to no', blocks: [
          { kind: 'rewrite', title: 'Escribe la frase negativa · Write the negative sentence', items: [
            { prompt: 'Alguien llamó para Marta.', instruction: 'Escribe la frase negativa. Empieza con «No».', accept: ['No llamó nadie para Marta', 'No llamó nadie'] },
            { prompt: 'Alguien contestó el teléfono.', instruction: 'Escribe la frase negativa. Empieza con «Nadie».', accept: ['Nadie contestó el teléfono'] },
            { prompt: 'Hay algo en la caja.', instruction: 'Escribe la frase negativa. Empieza con «No».', accept: ['No hay nada en la caja'] },
            { prompt: 'Raúl vio a alguien en el jardín.', instruction: 'Escribe la frase negativa. Empieza con «Raúl».', accept: ['Raúl no vio a nadie en el jardín'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno cuenta su día de ayer en tres frases: una con «alguien», una con «no… nadie» o «nadie…» y una con «no… nada».' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Un mensaje de Inés', coach: 'Primero escucha sin leer. Listen first, read later.',
      steps: [
        { title: 'Noticias de la recepción · News from the front desk', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general (¿de qué temas habla Inés?). Segunda escucha: tu alumno levanta la mano con cada «algo» o «alguien» y da una palmada con cada «nada» o «nadie». Después, las preguntas.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Marca cada «algo / alguien» y cada «nada / nadie». (Listen once for the gist, once for the details.)' } },
          { kind: 'listen', title: 'Un mensaje de Inés', channel: 'MENSAJE DE VOZ · DE INÉS, RECEPCIÓN DEL HOTEL', src: '/audio/grammar-live/370.mp3',
            before: 'Marta está en el mercado. Inés, de la recepción, le deja un mensaje de voz. ¿Qué crees que cuenta: la caja, una llamada, el cargador…? (Inés leaves Marta a voice message. What do you think it is about?)',
            gist: { prompt: '¿Cuál es la idea general? · What is the main idea?', options: ['Inés da a Marta noticias: la caja, una llamada y el cargador.', 'Inés pide a Marta pagar la habitación.', 'Inés invita a Marta a comer en la cocina.'], answer: 0, why: 'Habla de quién dejó la caja, de una llamada para Marta y del cargador.', en: 'What is the main idea?' },
            details: [
              { prompt: '¿Quién vio al señor de la caja?', options: ['Inés.', 'Raúl.', 'Lupita, de la cocina.'], answer: 2, why: '«Lupita, de la cocina, vio a un señor alto».', en: 'Who saw the man with the box?' },
              { prompt: '¿Qué hizo ese señor?', options: ['Dejó su nombre y su número.', 'Habló mucho con Lupita.', 'Dejó la caja y salió sin hablar con nadie.'], answer: 2, why: '«No habló con nadie: dejó la caja y salió».', en: 'What did that man do?' },
              { prompt: '¿Quién llamó hoy para Marta?', options: ['Nadie.', 'Una señora de una editorial.', 'Óscar.'], answer: 1, why: '«Alguien llamó para usted, una señora de una editorial».', en: 'Who called for Marta today?' },
              { prompt: '¿Encontraron el cargador?', options: ['Sí, en la habitación.', 'No, todavía no lo encontró nadie.', 'Sí, en el comedor.'], answer: 1, why: '«En su habitación no encontramos nada… Nadie lo encontró todavía».', en: 'Did they find the charger?' },
            ],
            transcript: 'Buenos días, señora Salcedo, le habla Inés, de la recepción. Le dejo este mensaje porque usted ya salió. Pregunté [[a alguien|blue]] de la cocina por la caja de ayer. Lupita, de la cocina, vio a un señor alto con una cámara, pero el señor no habló con [[nadie|orange]]: dejó la caja y salió. Seguro que era su compañero Óscar. Otra cosa: esta mañana [[alguien|blue]] llamó para usted, una señora de una editorial. No dejó su número, pero va a llamar otra vez a las seis. Y su cargador: en su habitación no encontramos [[nada|orange]]. ¿Lo dejó en el comedor? [[Nadie|orange]] lo encontró todavía, pero lo buscamos hoy. Si necesita [[algo|blue]], llame a la recepción. ¡Buen día!',
            reply: { teacher: 'Tú eres Inés. Tu alumno es Marta y responde al mensaje con tres frases: una pregunta con «alguien» o «algo», una frase con «nadie» o «nada» y las gracias.', self: 'Responde a Inés en voz alta como Marta: haz una pregunta con «alguien» o «algo», di una frase con «nadie» o «nada» y da las gracias. (Answer as Marta: a question, a negative sentence and thanks.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Preguntas y respuestas', coach: '¿Algo? ¿Alguien? Responde con frases completas.',
      steps: [
        { title: '¿Alguien? ¿Algo? · Anyone? Anything?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas y tu alumno responde con frases completas, reales o inventadas. Si tu alumno dice «No hay alguien» o «Nadie no…», tú repites la frase con la forma correcta y sigues con la repregunta.', self: 'Lee la pregunta, responde en voz alta con frases completas y, si quieres, escribe tu respuesta. (Read the question and answer aloud in full sentences.)' } },
          { kind: 'talk', cards: [
            { q: 'Llegas a tu hotel por la noche. Pregunta en la recepción por llamadas y paquetes. · You arrive at your hotel at night. Ask at the front desk about calls and parcels.', followUps: ['¿Y esperas algo importante? (Are you expecting anything important?)', '¿Quién crees que llamó? (Who do you think called?)'], phrases: ['¿Me llamó [[alguien|blue]]?', '¿Hay [[algo|blue]] para mí?', 'Espero un paquete / una llamada de…'], hint: 'En la pregunta normal: algo (cosas) y alguien (personas).', example: 'Buenas noches. ¿Me llamó alguien hoy? Espero una llamada de mi jefa. ¿Y hay algo para mí? Espero un paquete pequeño.', next: 'Ahora, tú eres el recepcionista.', teacher: 'Tú respondes como recepcionista con una frase negativa («No llamó nadie») y una afirmativa («Alguien dejó algo»).' },
            { q: 'Ahora tú trabajas en la recepción. Un huésped pregunta: «¿Me llamó alguien? ¿Hay algo para mí?». Responde. · Now you work at the front desk. Answer the guest.', followUps: ['¿Y quién dejó el paquete? (And who left the parcel?)', '¿Alguien vio a esa persona? (Did anyone see that person?)'], phrases: ['No, [[no|teal]] llamó [[nadie|orange]].', 'Sí, [[alguien|blue]] dejó [[algo|blue]] para usted.', 'No lo sé: yo [[no|teal]] vi [[a nadie|orange]].'], hint: 'Usa usted con el huésped. No + verbo + nadie / nada, o nadie al principio.', example: 'No, hoy no llamó nadie para usted. Pero alguien dejó algo: este paquete. No sé quién: yo no vi a nadie.', next: 'Ahora, tu ciudad.' },
            { q: '¿Conoces a alguien en otra ciudad o en otro país? ¿A quién? · Do you know anyone in another city or country? Who?', followUps: ['¿Conoces a alguien en México? (Do you know anyone in Mexico?)', '¿Alguien de tu familia vive lejos? (Does anyone in your family live far away?)'], phrases: ['Conozco [[a|teal]] [[alguien|blue]] en…', '[[No|teal]] conozco [[a nadie|orange]] en…', 'Mi prima vive en…'], hint: 'Conocer + persona: a alguien, a nadie.', example: 'Sí, conozco a alguien en Lima: un compañero de la universidad. Pero no conozco a nadie en México.', next: 'Ahora, tu día de ayer.' },
            { q: 'Ayer, ¿alguien te llamó o te escribió? ¿Compraste algo? · Yesterday, did anyone call or write to you? Did you buy anything?', followUps: ['¿Pasó algo interesante? (Did anything interesting happen?)', '¿Viste a alguien especial? (Did you see anyone special?)'], phrases: ['Ayer [[alguien|blue]] me escribió…', '[[No|teal]] me llamó [[nadie|orange]].', '[[No|teal]] compré [[nada|orange]].'], hint: 'Una frase con algo o alguien y una con no… nada / no… nadie.', example: 'Ayer me escribió alguien del trabajo, pero no me llamó nadie. Fui al supermercado, pero no compré nada: estaba cerrado.', next: 'Ahora, tu casa.' },
            { q: 'Ahora mismo, en tu casa, ¿hay alguien? ¿Hay algo para cenar? · Right now, at your home, is anybody there? Is there anything for dinner?', followUps: ['¿Hay algo en la nevera? (Is there anything in the fridge?)', '¿Alguien cocina hoy? (Is anyone cooking today?)'], phrases: ['Ahora [[no|teal]] hay [[nadie|orange]] en casa.', 'Hay [[algo|blue]] en la nevera: …', '[[Nadie|orange]] cocina hoy.'], hint: 'Con hay: hay alguien / no hay nadie, sin «a».', example: 'Ahora no hay nadie en casa: mi pareja está en el trabajo. En la nevera hay algo para cenar: sopa y queso. Hoy nadie cocina.', next: 'Para terminar, un objeto perdido.' },
            { q: 'Perdiste algo en un hotel o en un café. Habla con la persona del mostrador. · You lost something in a hotel or café. Talk to the person at the counter.', followUps: ['¿Dónde lo dejó? (Where did you leave it?)', '¿Alguien lo encontró? (Did anyone find it?)'], phrases: ['Perdí [[algo|blue]]: mi…', '¿[[Alguien|blue]] encontró un / una…?', 'Busqué en…, pero [[no|teal]] encontré [[nada|orange]].'], hint: 'Pregunta con alguien, y explica con no… nada.', example: 'Perdón, perdí algo ayer: mi bufanda azul. Busqué en mi habitación, pero no encontré nada. ¿Alguien encontró una bufanda en el comedor?', teacher: 'Tú eres la persona del mostrador y respondes: «Nadie trajo nada» o «Sí, alguien dejó una bufanda aquí». Después cambian los papeles.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno hace las preguntas («¿Me llamó alguien?», «¿Conoces a alguien en…?», «¿Hay algo en…?») y tú respondes, a veces con errores, para ver si tu alumno los oye.', self: 'Ahora haz tú las preguntas en voz alta («¿Me llamó alguien?», «¿Hay algo para mí?») y responde con una frase afirmativa y una negativa. (Now ask the questions yourself and answer them.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Un mensaje a la recepción', coach: 'Pregunta, explica, da las gracias.',
      steps: [
        { title: 'Un objeto perdido · A lost item', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos cada algo, nada, alguien y nadie: ¿cosa o persona? ¿Hay «no» donde hace falta? ¿Hay «a» con las personas? Después, tu alumno lee su mensaje en voz alta.', self: 'Escribe tu mensaje y toca «Revisar mi texto». Después revisa: ¿cosa o persona? ¿Hay «no» y «a» donde hacen falta? (Write your message and tap “Revisar mi texto”.)' } },
          { kind: 'write', title: 'Un mensaje a la recepción · A message to the front desk', situation: 'Eres Marta (o eres tú, en otro hotel). Perdiste algo y escribes un mensaje a Inés, la recepcionista. Usa usted. (You are Marta, or yourself in another hotel. You lost something and write to Inés, the receptionist. Use usted.)', task: [
            'Saluda, di quién eres y qué perdiste. (Say hello, who you are and what you lost.)',
            'Haz una pregunta con «alguien» o «algo». (Ask a question with alguien or algo.)',
            'Escribe una frase negativa con «no… nada» o «no… nadie». (Write a negative sentence with nada or nadie.)',
            'Usa «a alguien» o «a nadie» una vez. (Use a alguien or a nadie once.)',
            'Da las gracias y despídete. (Thank her and say goodbye.)',
          ], starters: ['Hola, Inés:', 'Soy… , de la habitación…', 'Creo que perdí…', 'Busqué en…, pero no encontré nada.', '¿Alguien encontró…?', '¿Puede preguntar a alguien de…?', 'Muchas gracias. Un saludo,'],
            words: ['algo', 'nada', 'alguien', 'nadie', 'a alguien', 'a nadie', 'no hay', 'perdí', 'busqué', 'encontró', 'el comedor', 'la habitación'],
            model: 'Hola, Inés: Soy Marta Salcedo, de la habitación 12. Creo que perdí mi cargador ayer en el comedor. Es negro y pequeño. Esta mañana busqué en la habitación, pero [[no|teal]] encontré [[nada|orange]]. ¿[[Alguien|blue]] encontró un cargador? ¿O hay [[algo|blue]] en la caja de objetos perdidos? Hoy trabajo en el mercado todo el día. Si tiene tiempo, ¿puede preguntar [[a alguien|blue]] de la cocina? Muchas gracias. Un saludo, Marta.',
            minWords: 50,
            checks: [
              { label: 'Algo o alguien (a question or a yes sentence)', pattern: '(?<!\\p{L})(?:algo|alguien)(?!\\p{L})', tip: 'Pregunta con algo o alguien: «¿Alguien encontró un cargador?», «¿Hay algo en objetos perdidos?».' },
              { label: 'Una frase negativa con nada o nadie (a negative sentence)', pattern: '(?<!\\p{L})(?:no\\s+(?:\\p{L}+\\s+){0,3}(?:nada|nadie)|nadie\\s+\\p{L}+)(?!\\p{L})', tip: 'Explica qué no encontraste: «Busqué en la habitación, pero no encontré nada».' },
              { label: 'A alguien o a nadie (personal a)', pattern: '(?<!\\p{L})a\\s+(?:alguien|nadie)(?!\\p{L})', tip: 'Usa a + persona: «¿Puede preguntar a alguien de la cocina?», «No vi a nadie».' },
              { label: 'Una pregunta (a question)', pattern: '¿[^?]+\\?', tip: 'Haz una pregunta a Inés: «¿Alguien encontró…?».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})nadie\\s+no(?!\\p{L})', why: 'Con **nadie** antes del verbo sobra el «no»: «Nadie lo encontró».' },
              { pattern: '(?<!\\p{L})no\\s+hay\\s+alguien(?!\\p{L})(?!\\s+que)', why: 'Con «no hay» y una persona: **no hay nadie**.' },
              { pattern: '(?<!\\p{L})(?:vi|veo|conozco|busco|llamé|esperé)\\s+(?:alguien|nadie)(?!\\p{L})', why: 'Con una persona que recibe la acción, falta la **a**: «vi **a** alguien», «no conozco **a** nadie».' },
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
            { tone: 'blue', label: 'SÍ · ALGO / ALGUIEN', formula: 'algo = una cosa · alguien = una persona', example: '¿Me llamó alguien? Alguien dejó algo para usted.', caption: 'en frases afirmativas y en preguntas normales', en: 'in yes sentences and ordinary questions (any- in questions)' },
            { tone: 'orange', label: 'NO · NADA / NADIE', formula: 'no + verbo + nada / nadie · Nadie + verbo', example: 'No llamó nadie. / Nadie llamó. No hay nada.', caption: 'después del verbo, con no; al principio, sin no', en: 'after the verb, with no; at the start, without no' },
            { tone: 'teal', label: 'A + PERSONA', formula: 'ver / conocer / buscar + a alguien / a nadie', example: 'No vi a nadie. Hay alguien en la puerta.', caption: 'con hay y con cosas, sin a', en: 'with hay and with things, no a' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Dos preguntas: ¿**cosa** o **persona**? (algo / nada, alguien / nadie) y ¿**sí** o **no**? En la pregunta normal, any- es **algo / alguien**. Si nada o nadie van después del verbo, pon **no** antes: «No vino nadie». Si nadie va primero, sin «no»: «Nadie vino». Y con personas que reciben la acción: **a alguien**, **a nadie**.', en: 'Two questions: thing or person? (algo / nada, alguien / nadie) and yes or no? In an ordinary question, any- is algo / alguien. If nada or nadie come after the verb, put no before it: “No vino nadie”. If nadie comes first, no “no”: “Nadie vino”. And with people who receive the action: a alguien, a nadie.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: '—¿Hay ___ en la sala de reuniones? —No, está vacía.', options: ['alguien', 'a alguien', 'a nadie'], answer: 0, why: 'Pregunta normal sobre personas, con hay (sin a): **alguien**.', en: '—Is there anyone in the meeting room? —No, it’s empty.' },
            { prompt: 'Mi hermano estaba enfermo y no comió ___ en todo el día.', options: ['nada', 'algo', 'nadie'], answer: 0, why: 'No + verbo + cero cosas: **nada**.', en: 'My brother was ill and didn’t eat anything all day.' },
            { prompt: 'Es mi primer día en la empresa y no conozco ___.', options: ['a alguien', 'a nadie', 'nadie'], answer: 1, why: 'Conocer + persona, frase negativa: **a nadie**.', en: 'It’s my first day at the company and I don’t know anybody.' },
            { prompt: 'Toqué el timbre tres veces, pero ___ abrió la puerta.', options: ['alguien', 'nadie', 'nadie no'], answer: 1, why: '**Nadie** antes del verbo: sin «no».', en: 'I rang the bell three times, but nobody opened the door.' },
            { prompt: 'Escucha: ___ canta en el piso de arriba.', options: ['Alguien', 'Nadie', 'Algo'], answer: 0, why: 'Una persona canta, pero no sabemos quién: **alguien**.', en: 'Listen: someone is singing upstairs.' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Ahora, la oficina de Óscar.', blocks: [
          { kind: 'lead', text: 'Una semana después, Óscar vuelve a su oficina en la Ciudad de México. Su jefa le hace preguntas. Óscar responde que no a todo: escribe sus respuestas completas.', en: 'A week later, Óscar is back at his office in Mexico City. His boss asks him questions. Óscar says no to everything: write his full answers.' },
          { kind: 'rewrite', title: 'Óscar dice que no · Óscar says no', items: [
            { prompt: 'Jefa: «¿Alguien te ayudó con las fotos?»', instruction: 'Responde que no. Empieza con «No,» y usa nadie después del verbo.', accept: ['No, no me ayudó nadie', 'No, no me ayudó nadie con las fotos'] },
            { prompt: 'Jefa: «¿Compraste algo para la oficina?»', instruction: 'Responde que no con una frase completa. Empieza con «No,».', accept: ['No, no compré nada', 'No, no compré nada para la oficina'] },
            { prompt: 'Jefa: «¿Conociste a alguien interesante en Oaxaca?»', instruction: 'Responde que no con una frase completa. Empieza con «No,».', accept: ['No, no conocí a nadie interesante', 'No, no conocí a nadie', 'No, no conocí a nadie interesante en Oaxaca'] },
          ] },
        ] },
        { title: 'Ampliación: algo rico, algo de comer, nada más · Extension', mascot: '/autoestudio/mascot/noting.webp', coach: 'Opcional. Optional.', blocks: [
          { kind: 'lead', text: 'Un paso extra, si tienes tiempo. Estas palabras aparecen en muchas frases útiles: **algo / nada + adjetivo** en masculino («algo rico», «nada nuevo»), **algo de + infinitivo** («algo de comer», «algo de beber»), y **más** después: «¿Algo más? — Nada más, gracias», «¿Alguien más? — Nadie más».', en: 'An extra step, if you have time. These words appear in many useful phrases: algo / nada + a masculine adjective (“something tasty”, “nothing new”), algo de + infinitive (“something to eat”, “something to drink”), and más after them: “Anything else? — Nothing else, thanks”, “Anyone else? — Nobody else”.' },
          { kind: 'tip', icon: '💡', title: '«Nada» también es «not at all»', text: 'Con un verbo como gustar, **nada** puede significar not at all: «La película no me gustó **nada**». Solo tienes que entenderlo; en la clase 072 ves más frases negativas como esta.', en: 'With a verb like gustar, nada can mean “not at all”: “I didn’t like the film at all”. You only need to understand it; in class 072 you see more negative sentences like this one.' },
          { kind: 'choice', title: 'Frases útiles · Useful phrases', items: [
            { prompt: 'En una tienda: «Aquí tiene sus tortillas. ¿___?» — «Nada más, gracias».', options: ['Alguien más', 'Nadie más', 'Algo más'], answer: 2, why: 'Una pregunta normal sobre cosas: **¿Algo más?** (anything else?).', en: 'In a shop: “Here are your tortillas. Anything else?” — “Nothing else, thanks.”' },
            { prompt: 'Marta tiene hambre: «¿Hay algo ___ en la cocina?»', options: ['para nadie', 'a comer', 'de comer'], answer: 2, why: '**Algo de comer** = something to eat.', en: 'Marta is hungry: “Is there anything to eat in the kitchen?”' },
            { prompt: '—¿Qué tal la reunión? —Normal. No dijeron nada ___.', options: ['nuevo', 'nuevos', 'nueva'], answer: 0, why: 'Algo y nada van con el adjetivo en **masculino singular**: nada nuevo.', en: '—How was the meeting? —Same as always. They didn’t say anything new.' },
            { prompt: '«No me gustó nada el hotel» significa…', options: ['No me gustó el hotel en absoluto.', 'No había nada en el hotel.', 'Me gustó un poco el hotel.'], answer: 0, why: 'Aquí **nada** = not at all: el hotel no le gustó en absoluto.', en: '“No me gustó nada el hotel” means…' },
            { prompt: 'Inés: «Ya tengo dos voluntarios para la excursión. ¿___ quiere venir?»', options: ['Nada más', 'Alguien más', 'Nadie más'], answer: 1, why: 'Una pregunta normal sobre personas: **¿Alguien más?** (anyone else?).', en: 'Inés: “I already have two volunteers for the trip. Does anyone else want to come?”' },
          ] },
          { kind: 'teacher', text: 'Paso opcional, para alumnos rápidos o si sobra tiempo. Tu alumno reconoce «algo rico», «algo de comer», «¿algo más?» y «no me gustó nada»; no necesita producirlos todavía.' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 071 · Alguno, ninguno, mucho, poco, demasiado', text: 'Ya hablas de cosas y personas sin decir cuáles: «Alguien dejó algo», «No vino nadie». En la clase 071 das el paso siguiente: palabras que van con un nombre y dicen cuántos: «¿Hay **alguna** mesa libre?», «No queda **ninguna** mesa», «Hay **mucha** gente». Es el paso natural: de «alguien» y «nadie» solos a «alguno» y «ninguno» con un nombre.', en: 'You can now talk about things and people without saying which: “Someone left something”, “Nobody came”. In class 071 you take the next step: words that go with a noun and say how many: “Is there any table free?”, “There’s no table left”, “There are a lot of people”. It is the natural next step: from alguien and nadie on their own to alguno and ninguno with a noun.', href: '/gramatica/alguno-ninguno-mucho-poco-demasiado', label: 'Ir a la clase 071' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Alguien te llamó hoy? ¿Comiste algo antes de la clase? ¿Conoces a alguien en otro país?». Respuesta esperada: frases completas con algo, alguien, no… nada, no… nadie y a alguien / a nadie. Tarea: escribir el mensaje de Escribir sobre un objeto real que perdiste.' },
        ] },
      ],
    },
  ],
};
