import type { LiveLesson } from '../types';

/**
 * Lesson 372 · A2 · Doble negación: nadie, nada, nunca (course unit G072).
 * One scene runs through the class: Marina Salgado and her friend Lorena rent
 * a small holiday apartment in Cartagena (Colombia) for a week. They arrive on
 * Friday at eleven at night and nothing is ready: nobody is at the front desk
 * (la portería), there is nothing in the kitchen, there are neither towels nor
 * sheets in the second bedroom, the wifi keeps dropping and the air
 * conditioning doesn't work well either. On Saturday morning Marina phones the
 * owner, Federico Ruiz (usted between them). In the voice message Federico
 * (Colombian voice) explains that everything is fixed.
 * Content, built on G024 (no + verb), G025 (ni), G030 (nunca) and G070–G071
 * (algo/nada, alguien/nadie, alguno/ninguno): the whole negative system.
 * 1) no + verb + nadie / nada / nunca / ningún / tampoco («No vino nadie»);
 * 2) negative word before the verb, without no («Nadie vino», «Nunca voy»),
 * same meaning as «No voy nunca»; 3) también (positive) vs tampoco
 * (negative): «Yo también / Yo tampoco», «A mí también / A mí tampoco»;
 * 4) ni… ni («No hay ni toallas ni sábanas», «Ni Marina ni Lorena durmieron»).
 * Typical mistakes: *Nadie no vino, *Hay nada, *Yo también no, *No vi nadie
 * (personal a: no vi a nadie), *ningunas toallas. Ampliación: several negative
 * words together, sin + nada / nadie, «no… nada» = not at all, jamás.
 * Instructions use tú; the two friends use tú with each other.
 */
export const lesson: LiveLesson = {
  id: 372,
  level: 'A2',
  title: 'Doble negación: nadie, nada, nunca',
  subtitle: 'Quejarte y contar qué falla con no… nadie, nada, nunca, ni… ni, y reaccionar con también o tampoco.',
  legend: [
    { tone: 'orange', label: 'NO + VERBO + nadie / nada / nunca / ningún (no vino nadie)' },
    { tone: 'blue', label: 'PALABRA NEGATIVA + VERBO, sin no (nadie vino, nunca voy)' },
    { tone: 'teal', label: 'TAMBIÉN · TAMPOCO · reaccionar (too · not… either)' },
    { tone: 'violet', label: 'NI… NI · negar dos cosas (neither… nor)' },
  ],
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Cuando nada funciona', coach: 'Dos negaciones, una idea. Two negatives, one idea.',
      steps: [
        { title: 'Una llegada difícil · A difficult arrival', blocks: [
          { kind: 'lead', text: 'Marina Salgado y su amiga Lorena alquilan un apartamento en Cartagena, en Colombia, para una semana. Llegan el viernes a las once de la noche. Pero **no hay nadie** en la portería, en la cocina **no hay nada** y en el segundo cuarto **no hay ni toallas ni sábanas**. Hoy aprendes a decir todo lo que no hay, lo que no funciona y lo que no pasa nunca.', en: 'Marina Salgado and her friend Lorena rent an apartment in Cartagena, Colombia, for a week. They arrive on Friday at eleven at night. But there is nobody at the front desk, there is nothing in the kitchen and in the second bedroom there are no towels and no sheets. Today you learn to say everything that isn’t there, that doesn’t work and that never happens.' },
          { kind: 'guide', text: { teacher: 'Tú lees cada pareja de palabras y tu alumno repite. Después tu alumno lee el ejemplo negativo en voz alta.', self: 'Lee cada pareja de palabras y el ejemplo en voz alta. (Read each pair and the example aloud.)' } },
          { kind: 'table', title: 'Palabras positivas y negativas · Positive and negative words', head: ['SÍ · positive', 'NO · negative', 'Ejemplo · Example'], rows: [
            ['alguien (someone)', '**nadie** (nobody)', 'No hay **nadie** en la portería.'],
            ['algo (something)', '**nada** (nothing)', 'En la cocina no hay **nada**.'],
            ['siempre (always)', '**nunca** (never)', 'El portero **nunca** sale antes de medianoche.'],
            ['algún / alguna (some, any)', '**ningún / ninguna** (no, not any)', 'No hay **ninguna** almohada.'],
            ['también (too, also)', '**tampoco** (not… either)', 'El aire acondicionado **tampoco** funciona.'],
            ['… y … (and)', '**ni… ni** (neither… nor)', 'No hay **ni** toallas **ni** sábanas.'],
          ], note: 'Ya conoces casi todas estas palabras (clases 024, 025, 030, 070 y 071). Hoy ves cómo funcionan juntas en la frase.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«No hay nadie en la portería» significa…', options: ['No hay ninguna persona.', 'Hay una persona.', 'No hay ninguna cosa.'], answer: 0, why: '**Nadie** = ninguna persona (nobody). Para las cosas usas **nada**.', en: '“No hay nadie en la portería” means…' },
            { prompt: 'Lo contrario de «siempre» es…', options: ['tampoco', 'nunca', 'nada'], answer: 1, why: 'Siempre (always) ↔ **nunca** (never).', en: 'The opposite of “siempre” is…' },
            { prompt: 'La nevera está vacía: no hay ___.', options: ['nada', 'nadie', 'algo'], answer: 0, why: 'Una frase negativa sobre cosas: **no hay nada**. «Algo» es positivo y «nadie» es para personas.', en: 'The fridge is empty: there’s nothing.' },
          ] },
        ] },
        { title: 'No + verbo + palabra negativa · No + verb + negative word', mascot: '/brand/mascot/studying.webp', coach: 'En español, dos negaciones no se anulan.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'NO + VERBO + PALABRA NEGATIVA', question: '¿La palabra negativa va después del verbo?', en: 'Does the negative word come after the verb?', formula: ['no + verbo + nadie / nada / nunca / ningún… / tampoco', 'No vino nadie. · No hay nada. · No voy nunca.'],
            meaning: 'Si la palabra negativa va **después** del verbo, necesitas **no** antes del verbo. En español, dos negaciones no se anulan: juntas hacen una frase negativa normal. En inglés dices «nobody came» o «I didn’t see anybody»; en español, «**no** vino **nadie**», «**no** vi **a nadie**».',
            examples: [
              { es: 'Anoche [[no vino nadie|orange]] a abrir la puerta.', en: 'Last night nobody came to open the door.' },
              { es: 'Lorena [[no comió nada|orange]] en el avión.', en: 'Lorena didn’t eat anything on the plane.' },
              { es: 'Yo [[no bebo nunca|orange]] café por la noche.', en: 'I never drink coffee at night.' },
              { es: 'En el baño [[no hay ningún|orange]] espejo.', en: 'There’s no mirror in the bathroom.' },
            ],
            note: 'Con personas, **nadie** lleva **a** cuando es el objeto del verbo, como un nombre de persona: «Vi **a** Lorena» → «No vi **a nadie**», «No conozco **a nadie**».' },
          { kind: 'tip', icon: '💡', title: 'Respuestas cortas · Short answers', text: 'En una respuesta de una palabra, la palabra negativa sola es suficiente: «—¿Hay alguien? —**Nadie**.» «—¿Quieres algo? —**Nada**, gracias.» «—¿Vas a la playa a mediodía? —**Nunca**.» Con verbo, vuelve el **no**: «No, **no** quiero **nada**».', en: 'In a one-word answer, the negative word alone is enough: “Nadie”, “Nada, gracias”, “Nunca”. With a verb, “no” comes back: “No, no quiero nada”.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Cuando llegaron, en la portería ___ nadie.', options: ['había', 'sí había', 'no había'], answer: 2, why: '**Nadie** va después del verbo: el verbo necesita **no** delante. No había nadie.', en: 'When they arrived, there was nobody at the front desk.' },
            { prompt: 'Lorena ___ conoce a nadie en Cartagena.', options: ['no', 'nada', 'ya'], answer: 0, why: 'No + verbo + nadie: **no conoce a nadie**.', en: 'Lorena doesn’t know anybody in Cartagena.' },
            { prompt: 'En la calle no vimos ___.', options: ['nadie', 'a nadie', 'a alguien'], answer: 1, why: 'Nadie es una persona y es el objeto de «ver»: **a nadie**. «A alguien» es positivo; aquí la frase es negativa.', en: 'We didn’t see anybody in the street.' },
          ] },
        ] },
        { title: 'Nunca voy · No voy nunca', mascot: '/brand/mascot/standing.webp', coach: 'Antes del verbo: sin no. Before the verb: no “no”.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'PALABRA NEGATIVA + VERBO', question: '¿La palabra negativa va antes del verbo?', en: 'Does the negative word come before the verb?', formula: ['nadie / nunca / ningún… + verbo (sin no)', 'Nadie vino. · Nunca voy allí.'],
            meaning: 'Si la palabra negativa va **antes** del verbo, ella sola niega la frase: el **no** sobra. «**Nunca** voy allí» y «**No** voy **nunca** allí» dicen lo mismo. Con nunca, nadie y tampoco los dos órdenes son muy normales. Con **nada** es mucho más frecuente el orden con no: «No funciona nada».',
            examples: [
              { es: '[[Nadie contestó|blue]] el teléfono de la portería.', en: 'Nobody answered the phone at the front desk.' },
              { es: '[[Nunca voy|blue]] a la playa a mediodía: hace mucho calor.', en: 'I never go to the beach at midday: it’s very hot.' },
              { es: '[[Ninguna ventana|blue]] cierra bien.', en: 'None of the windows closes properly.' },
            ] },
          { kind: 'compare', title: 'Dos órdenes, la misma idea · Two word orders, same meaning', columns: [
            { tone: 'orange', label: 'NO + VERBO + NUNCA', sentence: '[[No voy nunca|orange]] allí.', idea: 'La frase empieza con no; nunca va al final o después del verbo.', en: 'I never go there.' },
            { tone: 'blue', label: 'NUNCA + VERBO', sentence: '[[Nunca voy|blue]] allí.', idea: 'Nunca va primero y ya niega la frase: sin no.', en: 'I never go there.' },
          ] },
          { kind: 'decide', title: '¿Pongo «no» o no? · Do I need “no”?', steps: [
            { q: '¿Hay una palabra negativa (nadie, nada, nunca, ningún, tampoco) antes del verbo?', yes: 'No pongas **no**: «Nadie vino», «Nunca voy», «Lorena tampoco durmió».', no: 'next' },
            { q: '¿La palabra negativa va después del verbo?', yes: 'Pon **no** antes del verbo: «No vino nadie», «No voy nunca».', no: 'Es una negación simple con no: «No voy».' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '___ me abrió la puerta.', options: ['Nadie no', 'Nada', 'Nadie'], answer: 2, why: 'Nadie va antes del verbo: ya niega, el **no** sobra. «Nada» es para cosas, no para personas.', en: 'Nobody opened the door for me.' },
            { prompt: 'Federico nunca ___ los mensajes por la noche.', options: ['no lee', 'leen', 'lee'], answer: 2, why: 'Nunca va antes del verbo: **nunca lee**, sin no.', en: 'Federico never reads messages at night.' },
            { prompt: '«No voy nunca allí» y «Nunca voy allí»…', options: ['son incorrectas las dos.', 'significan lo mismo.', 'son contrarias.'], answer: 1, why: 'Los dos órdenes son correctos y dicen lo mismo: I never go there.', en: '“No voy nunca allí” and “Nunca voy allí”…' },
          ] },
        ] },
        { title: 'Tampoco y ni… ni · Not… either and neither… nor', mascot: '/brand/mascot/speaking.webp', coach: '¿Positiva o negativa? Positive or negative?', blocks: [
          { kind: 'concept', tone: 'teal', label: 'TAMBIÉN · TAMPOCO', question: '¿Dices «igual que tú»?', en: 'Are you saying “same as you”?', formula: ['frase positiva → también', 'frase negativa → tampoco'],
            meaning: 'Para decir «yo, igual», mira la frase de la otra persona. Si es **positiva**, respondes **también**: «—Estoy cansada. —Yo **también**». Si es **negativa**, respondes **tampoco**: «—No estoy cansada. —Yo **tampoco**». Además, tampoco puede ir antes del verbo, como nunca, y entonces no lleva no: «El aire **tampoco** funciona».',
            examples: [
              { es: '—Tengo calor. —Yo [[también|teal]].', en: '—I’m hot. —Me too.' },
              { es: '—No tengo sueño. —Yo [[tampoco|teal]].', en: '—I’m not sleepy. —Me neither.' },
              { es: 'El wifi no funciona y la tele [[tampoco|teal]].', en: 'The wifi doesn’t work and the TV doesn’t either.' },
            ] },
          { kind: 'table', title: 'Reaccionar · Reacting', head: ['La otra persona dice…', 'Igual (same)', 'Diferente (different)'], rows: [
            ['Tengo hambre. (positiva)', 'Yo **también**.', 'Yo **no**.'],
            ['No tengo hambre. (negativa)', 'Yo **tampoco**.', 'Yo **sí**.'],
            ['Me gusta el mar. (positiva)', 'A mí **también**.', 'A mí **no**.'],
            ['No me gusta el ruido. (negativa)', 'A mí **tampoco**.', 'A mí **sí**.'],
          ], note: 'Con gustar, encantar o interesar respondes con **a mí** (clase 032): «A mí tampoco», no «Yo tampoco».' },
          { kind: 'concept', tone: 'violet', label: 'NI… NI', question: '¿Niegas dos cosas a la vez?', en: 'Are you denying two things at once?', formula: ['no + verbo + ni A ni B', 'Ni A ni B + verbo (sin no)'],
            meaning: 'Ya conoces **ni** (clase 025): «No bebo café ni té». Con **ni… ni** niegas dos cosas con más fuerza. Después del verbo, el verbo lleva **no**: «No hay ni toallas ni sábanas». Antes del verbo, sin no: «Ni Marina ni Lorena durmieron». Con dos personas, el verbo va normalmente en plural.',
            examples: [
              { es: 'En el cuarto [[no hay ni toallas ni sábanas|violet]].', en: 'In the bedroom there are neither towels nor sheets.' },
              { es: '[[Ni Marina ni Lorena|violet]] durmieron bien.', en: 'Neither Marina nor Lorena slept well.' },
            ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '—No conozco Cartagena. —Yo ___.', options: ['tampoco', 'también', 'también no'], answer: 0, why: 'La frase es negativa (no conozco): para decir «igual», **tampoco**. «También no» no existe.', en: '—I don’t know Cartagena. —Me neither.' },
            { prompt: '—Me encanta este barrio. —A mí ___.', options: ['también', 'tampoco', 'nunca'], answer: 0, why: 'La frase es positiva (me encanta): **a mí también**.', en: '—I love this neighbourhood. —Me too.' },
            { prompt: 'En la cocina no hay ___ café ___ azúcar.', options: ['o · o', 'y · y', 'ni · ni'], answer: 2, why: 'Niegas dos cosas: **ni** café **ni** azúcar.', en: 'In the kitchen there’s neither coffee nor sugar.' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: '¿Antes o después del verbo? Before or after the verb?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la frase con el error y tu alumno explica qué falla: ¿falta un no, sobra un no o falta una a? Después aparece la corrección.', self: 'Lee cada frase y piensa: ¿falta un no, sobra un no o falta una a? Toca para ver la corrección. (Is a “no” missing, or is there one too many?)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Nadie no contestó el teléfono.', right: 'Nadie contestó el teléfono. / No contestó nadie.', why: 'Nadie antes del verbo ya niega: el no sobra. O pones nadie después: no contestó nadie. (Nobody before the verb: no extra “no”.)' },
            { wrong: 'Hay nada en la nevera.', right: 'No hay nada en la nevera.', why: 'Nada va después del verbo: necesitas no antes del verbo. (Nada after the verb needs “no”.)' },
            { wrong: '—No me gusta el calor. —A mí también no.', right: '—No me gusta el calor. —A mí tampoco.', why: 'Para estar de acuerdo con una frase negativa: tampoco. «También no» no existe. (Me neither = a mí tampoco.)' },
            { wrong: 'No conocemos nadie en el barrio.', right: 'No conocemos a nadie en el barrio.', why: 'Nadie es una persona y es el objeto del verbo: lleva a. (Personal “a”: a nadie.)' },
            { wrong: 'Nunca no cierro la ventana.', right: 'Nunca cierro la ventana. / No cierro nunca la ventana.', why: 'Nunca antes del verbo ya niega: sin no. (Nunca before the verb: no “no”.)' },
            { wrong: 'No hay ningunas toallas.', right: 'No hay ninguna toalla. / No hay toallas.', why: 'Ninguno casi siempre va en singular. O usas el plural sin ninguno. (Ninguno is almost always singular.)' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué frase es correcta?', options: ['Nadie limpió el apartamento.', 'Nadie no limpió el apartamento.', 'Limpió nadie el apartamento.'], answer: 0, why: 'Nadie antes del verbo, sin no: **Nadie limpió**. (También es correcto: «No limpió nadie el apartamento».)', en: 'Which sentence is correct?' },
            { prompt: '—No quiero salir esta noche. —Yo ___.', options: ['tampoco', 'también', 'también no'], answer: 0, why: 'Frase negativa → **tampoco**. «También no» es un error.', en: '—I don’t want to go out tonight. —Me neither.' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno dice tres cosas que no hay en su casa o en su calle con «No hay ningún… / No hay nada de… / No hay ni… ni…», y una cosa que no hace nunca.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'La llamada del sábado', coach: 'Toca las palabras marcadas. Tap the marked words.',
      steps: [
        { title: 'Marina llama al dueño · Marina calls the owner', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Federico y tu alumno es Marina. Después tu alumno toca cada expresión marcada y dice si lleva no antes del verbo o no.', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada: ¿lleva no antes del verbo? (Does it have “no” before the verb?)' } },
          { kind: 'explore', title: 'Nada funciona', setting: 'Sábado, nueve de la mañana. Marina llama a Federico Ruiz, el dueño del apartamento. Se tratan de usted. (Saturday, 9 a.m. Marina calls Federico Ruiz, the owner of the apartment. They use usted.)', lines: [
            { who: 'Federico', text: 'Buenos días, Marina. ¿Cómo les fue anoche? ¿Todo bien con el apartamento?', en: 'Good morning, Marina. How did it go last night? Is everything OK with the apartment?' },
            { who: 'Marina', text: 'Buenos días, Federico. Pues… no muy bien. Llegamos a las once y [[no había nadie|orange]] en la portería.', en: 'Good morning, Federico. Well… not very well. We arrived at eleven and there was nobody at the front desk.' },
            { who: 'Federico', text: '¡Qué raro! El portero [[nunca sale|blue]] antes de medianoche. ¿Y las llaves?', en: 'How strange! The doorman never leaves before midnight. And the keys?' },
            { who: 'Marina', text: 'Estaban en la caja, menos mal. Pero en el segundo cuarto [[no hay ni toallas ni sábanas|violet]].', en: 'They were in the key box, luckily. But in the second bedroom there are no towels and no sheets.' },
            { who: 'Federico', text: 'Ay, lo siento mucho. ¿Y en la cocina? Siempre dejo café y agua para los clientes.', en: 'Oh, I’m very sorry. And in the kitchen? I always leave coffee and water for guests.' },
            { who: 'Marina', text: 'Esta vez [[no hay nada|orange]]. Y el wifi se apaga cada cinco minutos.', en: 'This time there’s nothing. And the wifi cuts out every five minutes.' },
            { who: 'Federico', text: '¿El wifi? [[Nunca tenemos|blue]] problemas con el wifi. ¿Y el aire acondicionado?', en: 'The wifi? We never have problems with the wifi. And the air conditioning?' },
            { who: 'Marina', text: 'El aire [[tampoco|teal]] funciona bien: hace mucho ruido. Lorena [[no durmió nada|orange]], y yo [[tampoco|teal]].', en: 'The air conditioning doesn’t work well either: it makes a lot of noise. Lorena didn’t sleep at all, and neither did I.' },
            { who: 'Federico', text: 'Lo siento de verdad. [[Nadie me avisó|blue]]. Hoy a las doce va un técnico, y yo les llevo toallas, sábanas y café.', en: 'I’m really sorry. Nobody told me. Today at twelve a technician is coming, and I’ll bring you towels, sheets and coffee.' },
            { who: 'Marina', text: 'Muchas gracias. Una pregunta más: ¿hay un supermercado cerca? [[No conocemos a nadie|orange]] en el barrio.', en: 'Thank you very much. One more question: is there a supermarket nearby? We don’t know anybody in the neighbourhood.' },
            { who: 'Federico', text: 'Sí, hay uno en la esquina. ¿Necesitan algo más?', en: 'Yes, there’s one on the corner. Do you need anything else?' },
            { who: 'Marina', text: 'No, [[nada más|orange]], gracias. Hasta luego.', en: 'No, nothing else, thanks. Bye.' },
          ], notes: {
            'no había nadie': 'No + verbo + **nadie**: nadie va después del verbo, por eso necesitas **no**. En inglés: there was nobody.',
            'nunca sale': '**Nunca** antes del verbo: ya niega la frase, sin no. Igual que «no sale nunca».',
            'no hay ni toallas ni sábanas': '**Ni… ni** después del verbo: el verbo lleva **no**. Niega las dos cosas.',
            'no hay nada': 'No + verbo + **nada**: en la cocina no hay ninguna cosa. Con nada, este orden es el normal.',
            'Nunca tenemos': '**Nunca** + verbo, sin no. Federico dice que es la primera vez: «no tenemos nunca problemas».',
            'tampoco': '**Tampoco** = not… either. Marina ya habló de un problema: el aire es otro problema más. «Y yo tampoco» = and neither did I.',
            'no durmió nada': 'No + verbo + **nada**: Lorena didn’t sleep at all. Aquí nada significa «en absoluto».',
            'Nadie me avisó': '**Nadie** antes del verbo, sin no: nobody told me. Igual que «no me avisó nadie».',
            'No conocemos a nadie': 'No + verbo + **a nadie**: nadie es una persona y es el objeto del verbo, por eso lleva a.',
            'nada más': 'Respuesta corta: «No, **nada más**» = no, nothing else. Después de un no, la palabra negativa sola es suficiente.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Qué pasó cuando Marina y Lorena llegaron?', options: ['El portero les dio las llaves.', 'Federico las esperaba en la puerta.', 'No había nadie en la portería.'], answer: 2, why: '«Llegamos a las once y no había nadie en la portería».', en: 'What happened when Marina and Lorena arrived?' },
            { prompt: '¿Qué dice Federico del wifi?', options: ['Que el wifi nunca funciona.', 'Que no hay wifi en el apartamento.', 'Que nunca tienen problemas con el wifi.'], answer: 2, why: '«Nunca tenemos problemas con el wifi»: para Federico es raro.', en: 'What does Federico say about the wifi?' },
            { prompt: '¿Cómo durmieron Marina y Lorena?', options: ['Las dos durmieron bien.', 'Ni Marina ni Lorena durmieron.', 'Lorena durmió bien, Marina no.'], answer: 1, why: '«Lorena no durmió nada, y yo tampoco»: ninguna de las dos durmió.', en: 'How did Marina and Lorena sleep?' },
          ] },
        ] },
        { title: '¿Con no o sin no? · With or without “no”?', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'classify', title: 'Frases de la llamada · Sentences from the call', categories: [
            { id: 'con', label: 'NO + VERBO + palabra negativa', tone: 'orange' },
            { id: 'sin', label: 'PALABRA NEGATIVA + VERBO, sin no', tone: 'blue' },
          ], items: [
            { text: 'No había nadie en la portería.', answer: 'con', why: 'Nadie va después del verbo: no había nadie.' },
            { text: 'El portero nunca sale antes de medianoche.', answer: 'sin', why: 'Nunca va antes del verbo: sin no.' },
            { text: 'No hay ni toallas ni sábanas.', answer: 'con', why: 'Ni… ni después del verbo: el verbo lleva no.' },
            { text: 'Nadie me avisó.', answer: 'sin', why: 'Nadie va primero y ya niega la frase.' },
            { text: 'Lorena no durmió nada.', answer: 'con', why: 'Nada va después del verbo: no durmió nada.' },
            { text: 'El aire tampoco funciona bien.', answer: 'sin', why: 'Tampoco va antes del verbo: sin no.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: tu alumno cambia el orden de dos frases: «Nadie me avisó» → «No me avisó nadie»; «El portero nunca sale» → «El portero no sale nunca». El significado no cambia.' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Después del verbo: no. Antes: sin no.',
      steps: [
        { title: 'Lorena escribe a su hermano · Lorena texts her brother', blocks: [
          { kind: 'choice', items: [
            { context: 'Lorena escribe a su hermano. (Lorena texts her brother.)', prompt: 'Llegamos tarde y ___ nos abrió la puerta.', options: ['nada', 'nadie', 'alguien'], answer: 1, why: 'Ninguna persona abrió: **nadie**, antes del verbo y sin no. «Nada» es para cosas.', en: 'We arrived late and nobody opened the door for us.' },
            { context: 'Lorena escribe a su hermano. (Lorena texts her brother.)', prompt: 'En mi cuarto no había ___ toalla.', options: ['ninguna', 'ningún', 'nada'], answer: 0, why: 'Toalla es femenino: **ninguna** toalla.', en: 'In my room there wasn’t a single towel.' },
            { context: 'Lorena escribe a su hermano. (Lorena texts her brother.)', prompt: 'Esta mañana no desayunamos ___: la nevera estaba vacía.', options: ['algo', 'nadie', 'nada'], answer: 2, why: 'No + verbo + **nada**: ninguna cosa. «Algo» no va en una frase negativa así.', en: 'This morning we didn’t have anything for breakfast: the fridge was empty.' },
            { context: 'Lorena escribe a su hermano. (Lorena texts her brother.)', prompt: 'Federico dice que el portero ___ falta al trabajo.', options: ['no nunca', 'tampoco', 'nunca'], answer: 2, why: 'Nunca antes del verbo, sin no. «Tampoco» necesita una idea negativa antes, y aquí no la hay.', en: 'Federico says the doorman never misses work.' },
            { context: 'Lorena escribe a su hermano. (Lorena texts her brother.)', prompt: 'Hoy ___ llueve nada: ¡vamos a la playa!', options: ['no', 'nunca', 'nada'], answer: 0, why: 'Nada va después del verbo: el verbo necesita **no**. «Hoy no llueve nada».', en: 'Today it isn’t raining at all: let’s go to the beach!' },
          ] },
        ] },
        { title: '¿También o tampoco? · Too or neither?', blocks: [
          { kind: 'classify', title: 'Lorena dice… y tú estás de acuerdo · Lorena says… and you agree', categories: [
            { id: 'tambien', label: 'Respondes «también»', tone: 'teal' },
            { id: 'tampoco', label: 'Respondes «tampoco»', tone: 'violet' },
          ], items: [
            { text: 'Me encanta Cartagena.', answer: 'tambien', why: 'Frase positiva: a mí también.' },
            { text: 'No tengo sueño.', answer: 'tampoco', why: 'Frase negativa con no: yo tampoco.' },
            { text: 'Nunca como pescado.', answer: 'tampoco', why: 'Atención: no hay «no», pero nunca hace la frase negativa. Yo tampoco.' },
            { text: 'Quiero ir a la playa mañana.', answer: 'tambien', why: 'Frase positiva: yo también.' },
            { text: 'No me gustan las motos.', answer: 'tampoco', why: 'Frase negativa con gustar: a mí tampoco.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Nadie no sabe dónde está el portero.', ok: false, options: ['No nadie sabe dónde está el portero.', 'Nadie sabe no dónde está el portero.', 'Nadie sabe dónde está el portero.'], answer: 2, why: 'Nadie antes del verbo ya niega: el no sobra.' },
            { sentence: 'No hay ni agua ni jabón en el baño.', ok: true, why: 'Correcta: ni… ni después del verbo, con no antes del verbo.' },
            { sentence: 'Ayer vimos nadie en la playa.', ok: false, options: ['Ayer vimos a nadie en la playa.', 'Ayer no vimos nadie en la playa.', 'Ayer no vimos a nadie en la playa.'], answer: 2, why: 'Nadie después del verbo necesita no antes; y con personas, a nadie.' },
            { sentence: 'Lorena tampoco quiere salir esta noche.', ok: true, why: 'Correcta: tampoco antes del verbo, sin no.' },
            { sentence: '—No estoy cansada. —Yo también no.', ok: false, options: ['—Yo tampoco.', '—Yo también.', '—Yo no también.'], answer: 0, why: 'Para estar de acuerdo con una frase negativa: tampoco.' },
          ] },
        ] },
        { title: 'Esa noche · That evening', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'chat-fill', title: 'Marina y Lorena buscan la cena · Marina and Lorena look for dinner', lines: [
            { who: 'Lorena', text: '¿Hay algo para cenar?' },
            { who: 'Marina', text: 'No, no hay ___. Solo el café de Federico.', options: ['algo', 'nadie', 'nada'], answer: 2, why: 'No + verbo + nada: ninguna cosa para cenar.' },
            { who: 'Lorena', text: '¿Y conoces algún restaurante por aquí?' },
            { who: 'Marina', text: 'No, no conozco ___.', options: ['ninguno', 'ninguna', 'nadie'], answer: 0, why: 'Hablas de restaurante (masculino) sin repetir el nombre: **ninguno**.' },
            { who: 'Lorena', text: 'Yo ___. Es nuestra primera vez en Cartagena.', options: ['también', 'sí', 'tampoco'], answer: 2, why: 'Marina dijo una frase negativa y Lorena está de acuerdo: yo tampoco.' },
            { who: 'Marina', text: 'Federico dice que el restaurante de la esquina es bueno, pero ___ abre los sábados.', options: ['nunca', 'no nunca', 'nada'], answer: 0, why: 'Nunca antes del verbo, sin no: nunca abre.' },
            { who: 'Lorena', text: 'Entonces vamos al supermercado. ¿Qué compramos?' },
            { who: 'Marina', text: 'Pan, agua y café. ___ el agua ___ el café están incluidos en el precio.', options: ['No · no', 'O · o', 'Ni · ni'], answer: 2, why: 'Tienen que comprar las dos cosas porque ninguna está incluida: ni… ni, al principio y sin no.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['No', 'vino', 'nadie', 'a', 'limpiar'], accept: ['No vino nadie a limpiar'], en: 'Nobody came to clean.' },
            { tiles: ['Nunca', 'dejamos', 'la', 'puerta', 'abierta'], accept: ['Nunca dejamos la puerta abierta'], en: 'We never leave the door open.' },
            { tiles: ['Ni', 'la', 'tele', 'ni', 'el', 'wifi', 'funcionan'], accept: ['Ni la tele ni el wifi funcionan', 'Ni el wifi ni la tele funcionan'], en: 'Neither the TV nor the wifi works.' },
            { tiles: ['Lorena', 'no', 'habló', 'con', 'nadie', 'en', 'la', 'playa'], accept: ['Lorena no habló con nadie en la playa', 'En la playa Lorena no habló con nadie'], en: 'Lorena didn’t talk to anybody on the beach.' },
          ] },
        ] },
        { title: 'Transforma · Transform', blocks: [
          { kind: 'rewrite', title: 'Cambia la frase · Change the sentence', items: [
            { prompt: 'No llega nadie antes de las diez.', instruction: 'Di lo mismo con nadie antes del verbo. Empieza con «Nadie».', accept: ['Nadie llega antes de las diez'] },
            { prompt: 'Siempre cierro la puerta con llave.', instruction: 'Di lo contrario con «nunca». Empieza con «Nunca».', accept: ['Nunca cierro la puerta con llave'] },
            { prompt: 'Hay jabón y champú en el baño.', instruction: 'Escribe la frase negativa con «ni… ni». Empieza con «No».', accept: ['No hay ni jabón ni champú en el baño', 'No hay jabón ni champú en el baño'] },
            { prompt: 'Federico no contesta. El portero no contesta.', instruction: 'Une las dos ideas con «tampoco». Empieza con «Federico».', accept: ['Federico no contesta y el portero tampoco', 'Federico no contesta y el portero tampoco contesta', 'Federico no contesta y el portero no contesta tampoco', 'Federico no contesta y el portero tampoco lo hace'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno se queja de un hotel o una casa real o inventada en cuatro frases: una con no… nadie, una con no… nada, una con nunca antes del verbo y una con ni… ni.' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Un mensaje de Federico', coach: 'Primero escucha sin leer. Listen first, read later.',
      steps: [
        { title: 'Todo solucionado · All sorted', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general (¿están solucionados los problemas?). Segunda escucha: tu alumno levanta la mano con cada palabra negativa (nada, nadie, nunca, tampoco, ni). Después, las preguntas.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Cuenta las palabras negativas: nada, nadie, nunca, tampoco, ni. Parqueadero = parking (en Colombia). (Listen once for the gist, once for the details.)' } },
          { kind: 'listen', title: 'Un mensaje de voz de Federico', channel: 'MENSAJE DE VOZ · DE FEDERICO PARA MARINA', src: '/audio/grammar-live/372.mp3',
            before: 'Es sábado por la tarde. Federico, el dueño, le manda un mensaje de voz a Marina. ¿Qué crees que dice: qué arregló el técnico, por qué no había toallas…? (Federico sends Marina a voice message. What do you think he says?)',
            gist: { prompt: '¿Cuál es la idea general? · What is the main idea?', options: ['Federico dice que todo está arreglado y que no van a pagar la primera noche.', 'Federico dice que el técnico no puede venir hasta el lunes.', 'Federico pide a Marina y Lorena cambiar de apartamento.'], answer: 0, why: 'El técnico arregló el wifi y el aire, las toallas están en la portería y «no van a pagar nada» por la primera noche.', en: 'What is the main idea?' },
            details: [
              { prompt: '¿Qué problema tenía el wifi?', options: ['Nadie lo sabe.', 'Nada grave: solo un cable.', 'Nunca funciona por la noche.'], answer: 1, why: '«No era nada grave, solo un cable».', en: 'What was wrong with the wifi?' },
              { prompt: '¿Por qué no había toallas ni sábanas?', options: ['Marina y Lorena llegaron tarde.', 'El portero las tenía en el parqueadero.', 'La señora de la limpieza no fue el jueves.'], answer: 2, why: '«La señora de la limpieza no vino el jueves y nadie me avisó».', en: 'Why were there no towels or sheets?' },
              { prompt: '¿Dónde están ahora las toallas y el café?', options: ['En la portería.', 'En la cocina del apartamento.', 'En la casa de Federico.'], answer: 0, why: '«Ya les dejé toallas, sábanas, café y agua en la portería».', en: 'Where are the towels and the coffee now?' },
              { prompt: '¿Por qué el portero no vio a nadie anoche?', options: ['Estaba dormido.', 'Estaba en el parqueadero.', 'Nunca trabaja de noche.'], answer: 1, why: '«No vio a nadie porque estaba en el parqueadero».', en: 'Why didn’t the doorman see anybody last night?' },
            ],
            transcript: 'Hola, Marina, buenas tardes. Habla Federico, el del apartamento. Les cuento: el técnico ya arregló el wifi. [[No era nada|orange]] grave, solo un cable. Y el aire acondicionado [[tampoco|teal]] tenía nada grave: estaba sucio, y el técnico lo limpió. Sobre las toallas y las sábanas: la señora de la limpieza no vino el jueves y [[nadie me avisó|blue]]. Eso [[no pasa nunca|orange]], de verdad. Ya les dejé toallas, sábanas, café y agua en la portería. Y por la primera noche [[no van a pagar nada|orange]]. Ah, y el portero dice que anoche [[no vio a nadie|orange]] porque estaba en el parqueadero. [[Ni él ni yo|violet]] sabíamos la hora de su llegada. Cualquier cosa, me escriben. ¡Buen fin de semana!',
            reply: { teacher: 'Tú eres Federico. Tu alumno es Marina y responde al mensaje con tres frases: da las gracias, dice si ahora funciona todo y cuenta un problema pequeño que todavía hay (con nada, nadie, nunca o tampoco).', self: 'Responde a Federico en voz alta como Marina: da las gracias, di si ahora funciona todo y cuenta un problema pequeño con nada, nadie, nunca o tampoco. (Answer as Marina.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Tus viajes y tus costumbres', coach: 'No… nadie, nunca, tampoco. Habla tú.',
      steps: [
        { title: '¿Y tú? · What about you?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas y reaccionas con «Yo también / Yo tampoco / Yo sí / Yo no». Tu alumno responde con frases completas. Tú repites su frase con la forma correcta y sigues con la repregunta.', self: 'Lee la pregunta, responde en voz alta con frases completas y, si quieres, escribe tu respuesta. (Read the question and answer aloud in full sentences.)' } },
          { kind: 'talk', cards: [
            { q: '¿Tuviste alguna vez un problema en un hotel o un apartamento de vacaciones? ¿Qué no había? · Did you ever have a problem in a hotel or holiday flat? What was missing?', followUps: ['¿Había alguien en la recepción? (Was there anyone at reception?)', '¿Qué no funcionaba? (What didn’t work?)'], phrases: ['[[No había nadie|orange]] en…', '[[No había ni|violet]] … [[ni|violet]] …', 'El wifi no funcionaba y la ducha [[tampoco|teal]].'], hint: 'Después del verbo, la palabra negativa necesita no: no había nadie, no había nada.', example: 'Sí, en un hotel de la costa. No había nadie en la recepción y en el baño no había ni jabón ni toallas. El wifi no funcionaba y la tele tampoco.', next: 'Ahora, tus costumbres de viaje.', teacher: 'Cuenta tú también un problema corto: «Una vez, en un hotel, no había…». Así tu alumno oye otra vez el no… nada.' },
            { q: '¿Qué cosas no haces nunca de vacaciones? · What do you never do on holiday?', followUps: ['¿Y qué haces siempre? (And what do you always do?)', '¿Trabajas un poco o nada? (Do you work a little or not at all?)'], phrases: ['[[Nunca|blue]] me levanto temprano.', '[[No|orange]] trabajo [[nada|orange]].', '[[No|orange]] miro [[nunca|orange]] el correo.'], hint: 'Practica los dos órdenes: «Nunca miro el correo» y «No miro nunca el correo».', example: 'De vacaciones nunca me levanto temprano y no miro nunca el correo del trabajo. Siempre leo una novela en la playa.', next: 'Ahora, reacciona.' },
            { q: 'Escucha y reacciona: ¿también, tampoco, sí o no? · Listen and react: también, tampoco, sí or no?', followUps: ['«Nunca viajo sin mi almohada.»', '«Me encanta dormir con el aire acondicionado.»', '«No me gusta comer en el avión.»'], phrases: ['Yo [[también|teal]]. / Yo [[tampoco|teal]].', 'A mí [[también|teal]]. / A mí [[tampoco|teal]].', 'Yo sí. / A mí no.'], hint: 'Mira la frase de la otra persona: positiva → también; negativa (con no o con nunca) → tampoco.', example: '«Nunca viajo sin mi almohada.» → Yo tampoco. / Yo sí: siempre viajo sin almohada. «No me gusta comer en el avión.» → A mí tampoco.', next: 'Ahora, una llamada.', teacher: 'Tú dices otras frases rápidas (positivas y negativas) y tu alumno reacciona sin pensar mucho. Atención a «Nunca…» → «Yo tampoco».' },
            { q: 'Llegas a un apartamento y nada está listo. Llamas al dueño: explica tres problemas. · You arrive at a flat and nothing is ready. Call the owner and explain three problems.', followUps: ['¿Y las llaves? (And the keys?)', '¿Necesita algo más? (Do you need anything else?)'], phrases: ['Buenos días, le llamo porque [[no hay nadie|orange]]…', 'En la cocina [[no hay nada|orange]].', 'La ducha [[tampoco|teal]] funciona.'], hint: 'Usa usted con el dueño. Tres problemas: con nadie, con nada y con tampoco o ni… ni.', example: 'Buenos días, le llamo porque llegamos anoche y no había nadie en la portería. En la cocina no hay nada y la ducha no funciona. La lavadora tampoco funciona.', next: 'Ahora, la primera vez en un lugar nuevo.', teacher: 'Tú eres el dueño y respondes: «¡Qué raro! Nunca tenemos problemas…». Tu alumno insiste con otro problema.' },
            { q: 'Piensa en tu primer día en una ciudad, un trabajo o una escuela nueva. ¿Conocías a alguien? · Think of your first day in a new city, job or school. Did you know anybody?', followUps: ['¿Alguien te ayudó? (Did anybody help you?)', '¿Entendías algo? (Did you understand anything?)'], phrases: ['[[No conocía a nadie|orange]].', '[[Nadie|blue]] me habló en todo el día.', '[[No entendía nada|orange]].'], hint: 'Con personas: no conocía a nadie (con a). Puedes usar el imperfecto (conocía, entendía) para describir.', example: 'Mi primer día en Madrid no conocía a nadie. Nadie me habló en el metro y en la oficina no entendía nada. Pero una compañera me invitó a comer.' },
            { q: 'Ahora tú eres Marina. Lorena te pregunta: «¿Qué le dijiste a Federico?». Cuéntalo en cinco frases. · Now you are Marina. Tell Lorena what you told Federico.', followUps: ['¿Y qué te dijo él? (And what did he tell you?)', '¿Cuándo viene el técnico? (When is the technician coming?)'], phrases: ['Le dije que [[no había nadie|orange]]…', 'Él dice que [[nunca tienen|blue]] problemas…', '[[Ni|violet]] el wifi [[ni|violet]] el aire…'], hint: 'Cinco frases: los problemas (nadie, nada, ni… ni) y lo que dijo Federico (nunca).', example: 'Le dije que no había nadie en la portería y que en la cocina no hay nada. Le conté que ni el wifi ni el aire funcionan bien. Él dice que nunca tienen problemas con el wifi. Nadie le avisó de nada.', teacher: 'Tú eres Lorena y reaccionas: «¿Nada? ¿Ni café?», «Yo tampoco pude dormir». Después cambian los papeles.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno hace las preguntas («¿Qué no haces nunca…?», «¿Conocías a alguien…?») y tú respondes. Tu alumno reacciona con también, tampoco, sí o no.', self: 'Ahora haz tú las preguntas en voz alta y responde como otra persona. Reacciona con también o tampoco. (Now ask the questions and answer as someone else.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Una reseña del apartamento', coach: 'Lo malo y lo bueno. The bad and the good.',
      steps: [
        { title: 'Tu opinión para otros viajeros · Your review for other travellers', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos cada frase negativa: ¿la palabra negativa va antes o después del verbo? ¿Falta o sobra un no? Después, tu alumno lee su reseña en voz alta.', self: 'Escribe tu reseña y toca «Revisar mi texto». Después, mira cada frase negativa: ¿falta o sobra un no? (Check every negative sentence.)' } },
          { kind: 'write', title: 'Una reseña · A review', situation: 'Eres Marina (o eres tú, después de un viaje real). Al final de la semana escribes una reseña del apartamento para otros viajeros: cuentas los problemas de la llegada y lo bueno de la estancia. (You are Marina, or yourself after a real trip. At the end of the week you write a review of the apartment for other travellers: the problems on arrival and the good things about the stay.)', task: [
            'Di dónde y cuánto tiempo estuviste. (Say where you stayed and for how long.)',
            'Cuenta dos problemas con no + verbo + nadie / nada / nunca / ningún. (Two problems with no + verb + negative word.)',
            'Usa una vez ni… ni y una vez tampoco. (Use ni… ni once and tampoco once.)',
            'Usa una palabra negativa antes del verbo: nunca, nadie… (One negative word before the verb.)',
            'Termina con algo positivo y una recomendación. (End with something positive and a recommendation.)',
          ], starters: ['Pasamos una semana en…', 'La llegada no fue fácil:', 'No había nadie…', 'No había ni… ni…', '… tampoco funcionaba.', 'Después, nunca…', 'Lo recomendamos porque…'],
            words: ['nadie', 'nada', 'nunca', 'ningún', 'ninguna', 'tampoco', 'ni… ni', 'la portería', 'las toallas', 'el wifi', 'el dueño', 'el barrio'],
            model: 'Mi amiga Lorena y yo pasamos una semana en este apartamento de Cartagena. La llegada no fue fácil: [[no había nadie|orange]] en la portería, en el segundo cuarto [[no había ni toallas ni sábanas|violet]] y el wifi no funcionaba. El aire acondicionado [[tampoco|teal]] funcionaba bien. Pero Federico, el dueño, contestó enseguida, lo arregló todo en un día y [[no pagamos nada|orange]] por la primera noche. Después, [[nunca tuvimos|blue]] otro problema. El barrio es tranquilo y [[nadie hace|blue]] ruido por la noche. Lo recomendamos.',
            minWords: 60,
            checks: [
              { label: 'No + verbo + nadie / nada / nunca / ningún (no + verb + negative word)', pattern: '(?<!\\p{L})no\\s+(?:\\p{L}+\\s+){1,3}?(?:a\\s+)?(?:nadie|nada|nunca|ning[uú]n\\p{L}*)(?!\\p{L})', tip: 'Cuenta un problema con no antes del verbo: «No había nadie en la portería», «No había nada en la nevera».' },
              { label: 'Ni… ni (neither… nor)', pattern: '(?<!\\p{L})ni\\s+[^.!?]+?\\s+ni(?!\\p{L})', tip: 'Niega dos cosas: «No había ni toallas ni sábanas».' },
              { label: 'Tampoco (not… either)', pattern: '(?<!\\p{L})tampoco(?!\\p{L})', tip: 'Añade otro problema: «El aire acondicionado tampoco funcionaba».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})(?:nadie|nunca|tampoco|ning[uú]n\\p{L}*)\\s+no(?!\\p{L})', why: 'Si la palabra negativa va antes del verbo, el no sobra: **Nadie vino**, **Nunca tuvimos**, no «nadie no vino».' },
              { pattern: '(?<!\\p{L})tambi[eé]n\\s+no(?!\\p{L})', why: 'Para añadir algo negativo usa **tampoco**: «El aire tampoco funcionaba», no «también no».' },
              { pattern: '(?<!\\p{L})ningun[oa]s(?!\\p{L})', why: 'Ninguno casi siempre va en singular: **ninguna toalla**, o en plural sin ninguno: **no había toallas**.' },
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
            { tone: 'orange', label: 'NO + VERBO + PALABRA NEGATIVA', formula: 'no + verbo + nadie / nada / nunca / ningún', example: 'No había nadie y no hay nada en la nevera.', caption: 'después del verbo: el no es obligatorio', en: 'after the verb: “no” is required' },
            { tone: 'blue', label: 'PALABRA NEGATIVA + VERBO', formula: 'nadie / nunca / ningún + verbo (sin no)', example: 'Nunca voy allí. = No voy nunca allí.', caption: 'antes del verbo: el no sobra', en: 'before the verb: no “no”' },
            { tone: 'teal', label: 'TAMBIÉN · TAMPOCO', formula: 'positiva → también · negativa → tampoco', example: '—No tengo sueño. —Yo tampoco.', caption: 'para decir «igual», mira la otra frase', en: 'to say “same”, look at the other sentence' },
            { tone: 'violet', label: 'NI… NI', formula: 'no + verbo + ni A ni B · Ni A ni B + verbo', example: 'No hay ni toallas ni sábanas.', caption: 'niega dos cosas a la vez', en: 'denies two things at once' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Mira dónde está la palabra negativa. **Después** del verbo: pon **no** delante del verbo («No vino nadie»). **Antes** del verbo: sin no («Nadie vino»). Con personas, **a nadie** («No vi a nadie»). Y para estar de acuerdo con algo negativo, **tampoco**, nunca «también no».', en: 'Look at where the negative word is. After the verb: put “no” before the verb (“No vino nadie”). Before the verb: no “no” (“Nadie vino”). With people, “a nadie” (“No vi a nadie”). And to agree with something negative, “tampoco”, never “también no”.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'Ayer el teléfono estuvo en silencio todo el día: no me llamó ___.', options: ['nada', 'nadie', 'alguien'], answer: 1, why: 'Ninguna persona llamó: no me llamó **nadie**.', en: 'Yesterday my phone was silent all day: nobody called me.' },
            { prompt: 'Mi hermano ___ come verduras.', options: ['nunca', 'no nunca', 'nada'], answer: 0, why: 'Nunca antes del verbo, sin no: **nunca come**.', en: 'My brother never eats vegetables.' },
            { prompt: '—No me gustan las películas de miedo. —A mí ___.', options: ['también', 'nunca', 'tampoco'], answer: 2, why: 'Frase negativa: para decir «igual», **a mí tampoco**.', en: '—I don’t like horror films. —Me neither.' },
            { prompt: 'En esta calle no hay ___ farmacia.', options: ['ninguna', 'ningún', 'nada'], answer: 0, why: 'Farmacia es femenino: **ninguna** farmacia.', en: 'There’s no pharmacy on this street.' },
            { prompt: 'Este mes no tengo ___ tiempo ___ dinero para viajar.', options: ['o · o', 'y · y', 'ni · ni'], answer: 2, why: 'Niegas las dos cosas: **ni** tiempo **ni** dinero.', en: 'This month I have neither the time nor the money to travel.' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Ahora, un trabajo nuevo.', blocks: [
          { kind: 'lead', text: 'De vuelta en casa, Lorena empieza un trabajo nuevo. Su primer día es un poco triste. Cambia las frases positivas por frases negativas, como Lorena.', en: 'Back home, Lorena starts a new job. Her first day is a bit sad. Change the positive sentences into negative ones, as Lorena says them.' },
          { kind: 'rewrite', title: 'El primer día de Lorena · Lorena’s first day', items: [
            { prompt: 'Conozco a alguien en la oficina.', instruction: 'Escribe la frase negativa con «nadie». Empieza con «No».', accept: ['No conozco a nadie en la oficina'] },
            { prompt: 'Alguien come conmigo a mediodía.', instruction: 'Escribe la frase negativa. Empieza con «Nadie».', accept: ['Nadie come conmigo a mediodía'] },
            { prompt: 'Siempre hay algo en la nevera de la oficina.', instruction: 'Escribe la frase negativa. Empieza con «Nunca».', accept: ['Nunca hay nada en la nevera de la oficina'] },
          ] },
        ] },
        { title: 'Ampliación: varias negaciones, sin y «nada» = not at all · Extension', mascot: '/autoestudio/mascot/noting.webp', coach: 'Opcional. Optional.', blocks: [
          { kind: 'lead', text: 'Un paso extra, si tienes tiempo. En español puedes juntar varias palabras negativas en una frase: «**Nunca** le digo **nada** a **nadie**» (I never tell anybody anything). La palabra **sin** funciona como una negación: «Se fue **sin** decir **nada**», «Viajo **sin** nadie». Y **jamás** significa lo mismo que nunca, con más fuerza: «Jamás vuelvo a ese hotel».', en: 'An extra step, if you have time. In Spanish you can put several negative words together in one sentence: “Nunca le digo nada a nadie” (I never tell anybody anything). The word “sin” works like a negative: “Se fue sin decir nada” (he left without saying anything). And “jamás” means the same as “nunca”, but stronger.' },
          { kind: 'tip', icon: '💡', title: '«No… nada» = not at all', text: 'Con un verbo o un adjetivo, **no… nada** significa «en absoluto»: «No me gusta **nada**» (I don’t like it at all), «El apartamento no es **nada** caro» (it isn’t expensive at all), «Lorena no durmió **nada**».', en: 'With a verb or an adjective, “no… nada” means “not at all”: “No me gusta nada”, “El apartamento no es nada caro”, “Lorena no durmió nada”.' },
          { kind: 'choice', title: 'Un poco más · A bit more', items: [
            { prompt: 'Lorena se fue de la fiesta sin decir ___.', options: ['algo', 'nadie', 'nada'], answer: 2, why: '**Sin** funciona como una negación: sin decir **nada** (without saying anything).', en: 'Lorena left the party without saying anything.' },
            { prompt: '«Este apartamento no es nada caro» significa…', options: ['Es muy caro.', 'No tiene precio.', 'Es bastante barato.'], answer: 2, why: '**No… nada** + adjetivo = not at all: no es caro en absoluto.', en: '“Este apartamento no es nada caro” means…' },
            { prompt: 'Marina es muy discreta: ___ le cuenta nada a nadie.', options: ['no nunca', 'tampoco', 'nunca'], answer: 2, why: 'Tres palabras negativas: **nunca** va antes del verbo, sin no; nada y nadie van después.', en: 'Marina is very discreet: she never tells anybody anything.' },
          ] },
          { kind: 'teacher', text: 'Paso opcional para alumnos rápidos o si sobra tiempo. Reto oral: tu alumno dice dos frases con tres palabras negativas («Nunca le pido nada a nadie») y una con sin + nada o nadie.' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 073 · Preposiciones de movimiento y ubicación', text: 'Ya dices lo que no hay, lo que no funciona y lo que no pasa nunca: «No había nadie», «Nunca voy allí», «Yo tampoco». En la clase 073 vuelves a la calle: aprendes a decir por dónde vas y dónde están las cosas, con preposiciones como hacia, por, hasta, entre o enfrente de. Es el paso natural: después de quejarte del apartamento, sales a explorar la ciudad y explicas cómo llegar.', en: 'You can now say what isn’t there, what doesn’t work and what never happens: “No había nadie”, “Nunca voy allí”, “Yo tampoco”. In class 073 you go back out into the street: you learn to say which way you go and where things are, with prepositions like hacia, por, hasta, entre or enfrente de. It’s the natural next step: after complaining about the apartment, you go out to explore the city and explain how to get places.', href: '/gramatica/preposiciones-de-movimiento-y-ubicacion', label: 'Ir a la clase 073' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Qué no haces nunca los domingos? ¿Y qué no hay en tu barrio?». Respuesta esperada: una frase con nunca antes del verbo y una con no hay ningún / ninguna o no hay ni… ni. Tarea: escribir la reseña de Escribir sobre un viaje real.' },
        ] },
      ],
    },
  ],
};
