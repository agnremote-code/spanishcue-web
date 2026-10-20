import type { LiveLesson } from '../types';

/**
 * Lesson 348 · A2 · Pretérito indefinido irregular de alta frecuencia (course unit G048).
 * One scene runs through the class: Monday morning at the office. Clara tells
 * her colleague Óscar about her finished weekend visit to her friend Marta in
 * Oaxaca, full of setbacks: the bus broke down on the road, Marta waited two
 * hours at the bus station, then had a fever on Saturday; Clara went to the
 * market alone, could not get into the museum (no booking) and made soup for
 * Marta on Sunday. In the voice message Marta (Mexican voice, tú) thanks Clara
 * and tells what happened after the visit. Content: fui/fue (ir and ser),
 * hice/hizo, tuve/tuvo, estuve/estuvo, pude/pudo, dije/dijo, with the tú forms
 * in questions; other persons only in the reference table. Contrast: Ayer fui /
 * Ahora voy. Mistake: *Ayer hací → Ayer hice. No imperfecto (next class, G049).
 * Instructions use tú.
 */
export const lesson: LiveLesson = {
  id: 348,
  level: 'A2',
  title: 'Pretérito indefinido irregular de alta frecuencia',
  subtitle: 'Contar una visita terminada con fui, hice, tuve, estuve, pude y dije, sin confundirlas con el presente.',
  legend: [
    { tone: 'blue', label: 'INDEFINIDO IRREGULAR · terminado (finished: fui, hice, tuve…)' },
    { tone: 'teal', label: 'PRESENTE · hoy, ahora (now: voy, hago, tengo…)' },
    { tone: 'orange', label: 'FUE = SER · una valoración (it was…)' },
  ],
  optionNotes: {
    'hací': 'Hacer es irregular en indefinido: la raíz cambia a **hic-**. Yo **hice**, él o ella **hizo**.',
    'tení': 'Tener es irregular en indefinido: la raíz cambia a **tuv-**. Yo **tuve**, él o ella **tuvo**.',
    'fuí': '**Fui** y **fue** tienen una sílaba: no llevan tilde.',
    'podí': 'Poder es irregular en indefinido: yo **pude**, él o ella **pudo**.',
    'hició': 'Hacer en él o ella es **hizo**: con z y sin tilde.',
    'dició': 'Decir es irregular en indefinido: yo **dije**, él o ella **dijo**.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Un fin de semana con imprevistos', coach: 'Ya pasó. It is over.',
      steps: [
        { title: 'Lunes en la oficina · Monday at the office', blocks: [
          { kind: 'lead', text: 'Es lunes. Clara llega a la oficina y su compañero Óscar pregunta: «¿Qué tal tu visita a Oaxaca?». Clara responde: «**Fui** en autobús, pero el autobús **tuvo** un problema». La visita ya terminó. Hoy aprendes los verbos irregulares más frecuentes del pasado.', en: 'It is Monday. Clara arrives at the office and her colleague Óscar asks: “How was your visit to Oaxaca?”. Clara answers: “I went by bus, but the bus had a problem”. The visit is over. Today you learn the most frequent irregular past verbs.' },
          { kind: 'guide', text: { teacher: 'Tú lees las dos frases de Clara y tu alumno repite. Después tu alumno dice cuál habla de hoy y cuál habla del viernes.', self: 'Lee las dos frases de Clara en voz alta. ¿Cuál habla de hoy? ¿Cuál habla del viernes? (Which one is today, which one is last Friday?)' } },
          { kind: 'compare', title: 'Dos frases de Clara · Two sentences from Clara', columns: [
            { tone: 'teal', label: 'PRESENTE · hoy', sentence: 'Hoy [[voy|teal]] a la oficina en metro.', idea: 'Ahora, hoy, lo normal.', en: 'Today I go to the office by metro.' },
            { tone: 'blue', label: 'INDEFINIDO · el viernes', sentence: 'El viernes [[fui|blue]] a Oaxaca en autobús.', idea: 'Una acción terminada, en un día del pasado.', en: 'On Friday I went to Oaxaca by bus.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«El viernes fui a Oaxaca» habla de…', options: ['Un viaje terminado.', 'Un plan para el viernes que viene.', 'Lo que Clara hace siempre.'], answer: 0, why: '«El viernes» + fui: el viaje ya pasó y terminó.', en: '“El viernes fui a Oaxaca” is about…' },
            { prompt: '«Fui» es el pasado de…', options: ['ir', 'hacer', 'tener'], answer: 0, why: 'Voy (presente) → fui (pasado). Es el verbo ir, aunque no se parece.', en: '“Fui” is the past of…' },
            { prompt: 'Óscar pregunta por el fin de semana pasado. ¿Qué dice?', options: ['¿Qué hiciste?', '¿Qué vas a hacer?', '¿Qué haces?'], answer: 0, why: 'Para el pasado terminado: ¿qué hiciste? (hacer, tú).', en: 'Óscar asks about last weekend. What does he say?' },
          ] },
        ] },
        { title: 'Las formas · The forms', mascot: '/brand/mascot/studying.webp', coach: 'Raíz nueva, sin tilde. New stem, no accent.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'INDEFINIDO IRREGULAR', question: '¿Qué pasó? ¿Qué hiciste?', en: 'What happened? What did you do?', formula: ['raíz nueva + -e (yo) / -o (él, ella)', 'hacer → hic- → hice, hizo'],
            meaning: 'Estos seis verbos son muy frecuentes y **no siguen la regla** de hablé, comí. Cambian la raíz: hac- → **hic-**, ten- → **tuv-**, est- → **estuv-**, pod- → **pud-**, dec- → **dij-**. Y yo termina en **-e**, él o ella en **-o**, sin tilde.',
            examples: [
              { es: 'El autobús [[tuvo|blue]] un problema en la carretera.', en: 'The bus had a problem on the road.' },
              { es: 'Marta [[estuvo|blue]] dos horas en la terminal.', en: 'Marta was at the bus station for two hours.' },
              { es: 'No [[pude|blue]] entrar al museo.', en: 'I couldn’t get into the museum.' },
              { es: 'El domingo [[hice|blue]] una sopa y Marta [[dijo|blue]]: «¡Gracias!».', en: 'On Sunday I made a soup and Marta said: “Thank you!”.' },
            ],
            note: 'Compara con un verbo regular: lleg**ué**, lleg**ó** llevan tilde; **tuve, tuvo** no llevan tilde.' },
          { kind: 'table', title: 'Seis verbos · Six verbs', head: ['Infinitivo', 'yo', 'tú', 'él · ella · usted', 'nosotros', 'ellos · ustedes'], rows: [
            ['ir · ser (to go · to be)', '**fui**', 'fuiste', '**fue**', 'fuimos', 'fueron'],
            ['hacer (to do, to make)', '**hice**', 'hiciste', '**hizo**', 'hicimos', 'hicieron'],
            ['tener (to have)', '**tuve**', 'tuviste', '**tuvo**', 'tuvimos', 'tuvieron'],
            ['estar (to be)', '**estuve**', 'estuviste', '**estuvo**', 'estuvimos', 'estuvieron'],
            ['poder (can)', '**pude**', 'pudiste', '**pudo**', 'pudimos', 'pudieron'],
            ['decir (to say)', '**dije**', 'dijiste', '**dijo**', 'dijimos', 'dijeron'],
          ], note: 'Hoy practicas sobre todo **yo** y **él / ella**, y la pregunta con tú (¿qué hiciste?). Atención: dij**eron**, sin i. En España, vosotros: fuisteis, hicisteis, tuvisteis…' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Tener, yo, el sábado → ___', options: ['tení', 'tuvo', 'tuve'], answer: 2, why: 'Raíz tuv- + -e para yo: tuve.', en: 'to have, I, on Saturday → I had' },
            { prompt: 'Hacer, ella, ayer → ___', options: ['hició', 'hizo', 'hice'], answer: 1, why: 'Ella → -o: hizo, con z para mantener el sonido.', en: 'to do / make, she, yesterday → she did / made' },
          ] },
        ] },
        { title: 'Fui y fue: dos verbos · Two verbs in one', mascot: '/brand/mascot/standing.webp', coach: 'Ir o ser: el contexto decide.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'FUI · FUE = IR o SER', question: '¿Adónde fue? ¿Cómo fue?', en: 'Where did she go? How was it?', formula: ['fue + a + lugar = ir', 'fue + adjetivo / nombre = ser'],
            meaning: 'Ir y ser tienen **las mismas formas** en indefinido. Con **a + lugar** es ir (went). Con una opinión o una descripción del evento es ser (was): «fue largo», «fue un desastre».',
            examples: [
              { es: 'Clara [[fue|blue]] a Oaxaca el viernes.', en: 'Clara went to Oaxaca on Friday.' },
              { es: 'El viaje [[fue|orange]] muy largo.', en: 'The trip was very long.' },
              { es: '[[Fui|blue]] al mercado sola.', en: 'I went to the market alone.' },
              { es: 'Al final, [[fue|orange]] una visita bonita.', en: 'In the end, it was a nice visit.' },
            ],
            note: '«Fue» como ser sirve para **valorar algo terminado**: la visita, el viaje, el fin de semana.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«El fin de semana fue difícil». Aquí «fue» es…', options: ['ir: went', 'ser: was'], answer: 1, why: 'No hay «a + lugar»: es una valoración. Ser.', en: '“El fin de semana fue difícil”. Here “fue” is…' },
            { prompt: '«Marta fue a la terminal». Aquí «fue» es…', options: ['ir: went', 'ser: was'], answer: 0, why: '«A la terminal» = a + lugar: ir.', en: '“Marta fue a la terminal”. Here “fue” is…' },
          ] },
        ] },
        { title: '¿Hoy o el viernes? · Today or last Friday?', mascot: '/brand/mascot/speaking.webp', coach: 'Voy hoy, fui ayer.', blocks: [
          { kind: 'table', title: 'Tres pares · Three pairs', head: ['PRESENTE · hoy, ahora', 'INDEFINIDO · ayer, el sábado'], rows: [
            ['Ahora [[voy|teal]] a la oficina. (Now I am going to the office.)', 'Ayer [[fui|blue]] al mercado. (Yesterday I went to the market.)'],
            ['Hoy [[tengo|teal]] mucho trabajo. (Today I have a lot of work.)', 'El sábado [[tuve|blue]] un día libre. (On Saturday I had a day off.)'],
            ['Hoy Marta [[está|teal]] bien. (Today Marta is fine.)', 'El sábado [[estuvo|blue]] en cama. (On Saturday she was in bed.)'],
          ], note: 'Palabras de pasado terminado: **ayer, anoche, el viernes, el fin de semana pasado, la semana pasada**. Palabras de presente: **hoy, ahora, normalmente**.' },
          { kind: 'decide', title: '¿Presente o indefinido?', steps: [
            { q: '¿La acción terminó en un tiempo pasado? (ayer, el sábado, el fin de semana pasado)', yes: 'Usa el **indefinido**: «El sábado tuve fiebre».', no: 'next' },
            { q: '¿Hablas de ahora, de hoy o de lo normal?', yes: 'Usa el **presente**: «Hoy tengo tiempo».', no: 'Para planes, usa ir a + infinitivo: «Mañana voy a ir».' },
          ] },
          { kind: 'tip', icon: '💡', title: 'Sin tilde · No accent', text: 'En los verbos regulares, la fuerza va al final: lleg**ué**, comí, salió. En estos irregulares va en la raíz: **tu**ve, **hi**zo, **pu**do. Por eso no llevan tilde. Fui y fue tampoco: tienen una sola sílaba.', en: 'In regular verbs the stress falls on the ending: llegué, comí, salió. In these irregular verbs it falls on the stem: tuve, hizo, pudo. That is why they have no written accent. Fui and fue don’t either: they have only one syllable.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Hoy ___ en casa. Trabajo desde aquí.', options: ['estoy', 'estuvo', 'estuve'], answer: 0, why: '«Hoy» y «trabajo desde aquí»: presente, estoy.', en: 'Today I am at home. I work from here.' },
            { prompt: 'Anoche no ___ dormir bien.', options: ['puedo', 'podí', 'pude'], answer: 2, why: '«Anoche» terminó: indefinido, pude.', en: 'Last night I couldn’t sleep well.' },
            { prompt: 'El viernes Clara le ___ a Óscar: «Me voy a Oaxaca».', options: ['dijo', 'dice', 'dije'], answer: 0, why: '«El viernes» + Clara (ella): dijo.', en: 'On Friday Clara said to Óscar: “I am off to Oaxaca”.' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Raíz nueva, -e / -o, sin tilde.', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la frase con el error y tu alumno explica qué falla: la raíz, la terminación o la tilde. Después aparece la corrección.', self: 'Lee cada frase y busca qué falla: la raíz, la terminación o la tilde. Toca para ver la corrección. (Stem, ending or accent?)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Ayer hací una sopa.', right: 'Ayer hice una sopa.', why: 'Hacer no sigue la regla de comí: cambia la raíz a hic- y yo termina en -e. (Hacer is irregular: hice.)' },
            { wrong: 'El sábado tení fiebre.', right: 'El sábado tuve fiebre.', why: 'Tener cambia la raíz a tuv-: tuve. (Tener is irregular: tuve.)' },
            { wrong: 'El viernes fuí a Oaxaca.', right: 'El viernes fui a Oaxaca.', why: 'Fui tiene una sola sílaba: no lleva tilde.' },
            { wrong: 'Marta estuvó en casa todo el día.', right: 'Marta estuvo en casa todo el día.', why: 'Los irregulares de hoy no llevan tilde: estuvo.' },
            { wrong: 'El autobús hició un ruido raro.', right: 'El autobús hizo un ruido raro.', why: 'Él / ella: hizo. Con z (hi-zo) y sin tilde.' },
            { wrong: 'Marta dició que sí.', right: 'Marta dijo que sí.', why: 'Decir cambia la raíz a dij-: dijo, dije.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'El domingo yo ___ la maleta temprano.', options: ['hací', 'hice', 'hizo'], answer: 1, why: 'Hacer, yo: hice.', en: 'On Sunday I packed my suitcase early.' },
            { prompt: 'Ayer Marta ___ en el médico una hora.', options: ['estuve', 'estuvo', 'estuvó'], answer: 1, why: 'Ella → estuvo, sin tilde.', en: 'Yesterday Marta was at the doctor’s for an hour.' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno dice tres frases reales sobre ayer o el fin de semana con fui, hice y tuve. Tú repites cada frase con la forma correcta.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: '¿Qué tal Oaxaca?', coach: 'Toca las palabras marcadas. Tap the marked words.',
      steps: [
        { title: 'En la oficina · At the office', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Óscar y tu alumno es Clara. Después tu alumno toca cada palabra marcada y dice el infinitivo: fui → ir.', self: 'Lee el diálogo en voz alta. Después toca cada palabra marcada y di el infinitivo: fui → ir. (Say the infinitive of each marked verb.)' } },
          { kind: 'explore', title: 'Un fin de semana con imprevistos', setting: 'Lunes, nueve de la mañana. Clara llega a la oficina. Óscar quiere saber cómo fue su visita a su amiga Marta, en Oaxaca. (Monday, 9 am. Óscar wants to know how Clara’s visit to her friend Marta went.)', lines: [
            { who: 'Óscar', text: '¡Hola, Clara! ¿Qué tal Oaxaca? ¿Qué [[hiciste|blue]]?', en: 'Hi, Clara! How was Oaxaca? What did you do?' },
            { who: 'Clara', text: 'Uf, [[fue|orange]] un fin de semana con muchos imprevistos.', en: 'Phew, it was a weekend full of surprises.' },
            { who: 'Óscar', text: '¿Por qué? ¿Qué pasó?', en: 'Why? What happened?' },
            { who: 'Clara', text: 'El viernes [[fui|blue]] en autobús, pero el autobús [[tuvo|blue]] un problema en la carretera. ¡Llegué a las once de la noche!', en: 'On Friday I went by bus, but the bus had a problem on the road. I arrived at eleven at night!' },
            { who: 'Óscar', text: '¡Qué horror! ¿Y Marta?', en: 'How awful! And Marta?' },
            { who: 'Clara', text: 'Ella [[estuvo|blue]] dos horas en la terminal. Y el sábado tuvo fiebre y no [[pudo|blue]] salir de casa.', en: 'She was at the bus station for two hours. And on Saturday she had a fever and couldn’t leave the house.' },
            { who: 'Óscar', text: 'Entonces, ¿[[estuviste|blue]] sola todo el sábado?', en: 'So you were on your own all Saturday?' },
            { who: 'Clara', text: 'Sí. Por la mañana [[fui|blue]] al mercado. Por la tarde no [[pude|blue]] entrar al museo: no [[hice|blue]] la reserva.', en: 'Yes. In the morning I went to the market. In the afternoon I couldn’t get into the museum: I didn’t book.' },
            { who: 'Óscar', text: '¡Qué mala suerte! ¿Y el domingo?', en: 'What bad luck! And on Sunday?' },
            { who: 'Clara', text: 'El domingo [[hice|blue]] una sopa para Marta. Ella [[dijo|blue]]: «¡Eres la mejor amiga del mundo!».', en: 'On Sunday I made a soup for Marta. She said: “You are the best friend in the world!”.' },
            { who: 'Óscar', text: 'Entonces, al final, ¿[[fue|orange]] una buena visita?', en: 'So, in the end, was it a good visit?' },
            { who: 'Clara', text: 'Sí, muy bonita. Pero ahora [[tengo|teal]] mucho sueño. Hoy [[voy|teal]] a casa temprano.', en: 'Yes, very nice. But now I am very sleepy. Today I am going home early.' },
          ], notes: {
            'hiciste': 'Óscar pregunta por el **fin de semana pasado**: hacer, tú → hic**iste**. La respuesta va con yo: hice.',
            'fue': '**Ser**, no ir: Clara y Óscar **valoran** el fin de semana y la visita. No hay «a + lugar».',
            'fui': '**Ir**, yo: fui. Hay un lugar o un medio: «fui en autobús», «fui al mercado». Sin tilde.',
            'tuvo': 'Tener, él / ella: **tuvo**. El autobús tuvo un problema; Marta tuvo fiebre. Raíz tuv- y sin tilde.',
            'estuvo': 'Estar, ella: **estuvo**. Un tiempo cerrado y terminado: dos horas en la terminal.',
            'pudo': 'Poder, ella: **pudo**. «No pudo salir»: el sábado terminó y Marta no salió.',
            'estuviste': 'Estar, tú: **estuviste**. Óscar pregunta por el sábado, un día terminado.',
            'pude': 'Poder, yo: **pude**. Clara lo intentó y no entró: un hecho terminado.',
            'hice': 'Hacer, yo: **hice** (no «hací»). Sirve para muchas cosas: hacer una reserva, una sopa, la maleta.',
            'dijo': 'Decir, ella: **dijo**. Raíz dij- + -o, sin tilde. Después va la frase de Marta.',
            'tengo': 'Presente: **ahora** Clara tiene sueño. Compara: el sábado Marta tuvo fiebre.',
            'voy': 'Presente: **hoy** Clara va a casa temprano. Compara: el viernes fui a Oaxaca.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Por qué llegó Clara tarde a Oaxaca?', options: ['Porque el autobús tuvo un problema.', 'Porque Marta estuvo enferma.', 'Porque no hizo la reserva.'], answer: 0, why: '«El autobús tuvo un problema en la carretera».', en: 'Why did Clara arrive late in Oaxaca?' },
            { prompt: '¿Por qué no pudo entrar Clara al museo?', options: ['Porque estuvo en el mercado.', 'Porque no hizo la reserva.', 'Porque fue con Marta.'], answer: 1, why: '«No pude entrar al museo: no hice la reserva».', en: 'Why couldn’t Clara get into the museum?' },
            { prompt: '¿Qué hizo Clara el domingo?', options: ['Fue al museo.', 'Hizo una sopa para Marta.', 'Estuvo en la terminal.'], answer: 1, why: '«El domingo hice una sopa para Marta».', en: 'What did Clara do on Sunday?' },
          ] },
        ] },
        { title: '¿Ir o ser? · To go or to be?', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'classify', title: 'Fui, fue en la historia de Clara · Fui, fue in Clara’s story', categories: [
            { id: 'ir', label: 'IR · went (a + lugar, en + transporte)', tone: 'blue' },
            { id: 'ser', label: 'SER · was (una valoración)', tone: 'orange' },
          ], items: [
            { text: 'El viernes fui en autobús.', answer: 'ir', why: '«En autobús»: un viaje, un movimiento. Ir.' },
            { text: 'Fue un fin de semana con muchos imprevistos.', answer: 'ser', why: 'Clara valora el fin de semana. Ser.' },
            { text: 'Por la mañana fui al mercado.', answer: 'ir', why: '«Al mercado» = a + lugar. Ir.' },
            { text: 'El viaje de regreso fue tranquilo.', answer: 'ser', why: '«Tranquilo» describe el viaje. Ser.' },
            { text: 'Marta no fue a la oficina el lunes.', answer: 'ir', why: '«A la oficina» = a + lugar. Ir.' },
            { text: 'La sopa fue una buena idea.', answer: 'ser', why: 'Una opinión sobre la sopa. Ser.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: «¿Cómo fue el viaje de Clara? ¿Adónde fue el sábado?». Tu alumno responde con los dos fue: «Fue largo. Fue al mercado».' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Hic-, tuv-, estuv-, pud-, dij-.',
      steps: [
        { title: 'Elige la forma · Choose the form', blocks: [
          { kind: 'choice', items: [
            { context: 'Clara habla del viernes. (Clara talks about Friday.)', prompt: 'El viernes ___ a la terminal a las cinco de la tarde.', options: ['fui', 'voy', 'fuí'], answer: 0, why: '«El viernes» terminó: indefinido de ir, fui, sin tilde.', en: 'On Friday I went to the bus station at five in the afternoon.' },
            { context: 'Clara habla de Marta. (Clara talks about Marta.)', prompt: 'Marta ___ dos horas en la terminal.', options: ['estuve', 'está', 'estuvo'], answer: 2, why: 'Marta = ella → estuvo. «Estuve» es yo.', en: 'Marta was at the bus station for two hours.' },
            { context: 'El tiempo en Oaxaca. (The weather in Oaxaca.)', prompt: 'El sábado ___ mucho calor.', options: ['hizo', 'hace', 'hició'], answer: 0, why: 'Para el tiempo se usa hacer: el sábado → hizo calor.', en: 'It was very hot on Saturday.' },
            { context: 'Clara habla del museo. (Clara talks about the museum.)', prompt: 'Yo no ___ tiempo para hacer la reserva.', options: ['tení', 'tuvo', 'tuve'], answer: 2, why: 'Yo → tuve. «Tuvo» es él o ella.', en: 'I didn’t have time to make the booking.' },
            { context: 'Después de la sopa. (After the soup.)', prompt: 'Marta ___: «¡Qué rica!».', options: ['dijo', 'dije', 'dició'], answer: 0, why: 'Ella → dijo, raíz dij-.', en: 'Marta said: “How delicious!”.' },
          ] },
        ] },
        { title: '¿Yo o ella? · I or she?', blocks: [
          { kind: 'classify', title: '¿Quién? · Who?', categories: [
            { id: 'yo', label: 'YO · -e (Clara habla de ella)', tone: 'blue' },
            { id: 'ella', label: 'ÉL / ELLA · -o (Marta, el autobús)', tone: 'neutral' },
          ], items: [
            { text: 'hice', answer: 'yo', why: 'Termina en -e: yo hice.' },
            { text: 'pudo', answer: 'ella', why: 'Termina en -o: ella pudo.' },
            { text: 'estuve', answer: 'yo', why: 'Termina en -e: yo estuve.' },
            { text: 'dijo', answer: 'ella', why: 'Termina en -o: ella dijo.' },
            { text: 'tuvo', answer: 'ella', why: 'Termina en -o: él o ella tuvo.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'El sábado Clara hació las compras en el mercado.', ok: false, options: ['El sábado Clara hizo las compras en el mercado.', 'El sábado Clara hice las compras en el mercado.', 'El sábado Clara hizó las compras en el mercado.'], answer: 0, why: 'Hacer, ella: hizo. «Hice» es yo, y hizo no lleva tilde.' },
            { sentence: 'Marta estuvo en cama todo el sábado.', ok: true, why: 'Correcta: estar, ella, un día terminado → estuvo.' },
            { sentence: 'Ayer yo tení mucho trabajo en la oficina.', ok: false, options: ['Ayer yo tengo mucho trabajo en la oficina.', 'Ayer yo tuvé mucho trabajo en la oficina.', 'Ayer yo tuve mucho trabajo en la oficina.'], answer: 2, why: 'Tener, yo: tuve. Sin tilde, y con «ayer» no va el presente.' },
            { sentence: 'El viaje de regreso fue muy tranquilo.', ok: true, why: 'Correcta: aquí fue es ser, una valoración del viaje.' },
            { sentence: 'Clara no podió entrar al museo.', ok: false, options: ['Clara no puedo entrar al museo.', 'Clara no pude entrar al museo.', 'Clara no pudo entrar al museo.'], answer: 2, why: 'Poder, ella: pudo. «Pude» es yo; «puedo» es presente.' },
          ] },
        ] },
        { title: 'En la comida · At lunch', blocks: [
          { kind: 'chat-fill', title: 'Ahora Clara pregunta · Now Clara asks', lines: [
            { who: 'Clara', text: 'Y tú, Óscar, ¿qué ___ el fin de semana?', options: ['haces', 'haciste', 'hiciste'], answer: 2, why: 'Hacer, tú, en pasado: hiciste, con la raíz hic-.' },
            { who: 'Óscar', text: 'El sábado ___ al estadio con mi hijo.', options: ['voy', 'fui', 'fuí'], answer: 1, why: 'Ir, yo, el sábado: fui, sin tilde.' },
            { who: 'Óscar', text: 'Pero no ___ ver todo el partido.', options: ['podí', 'puedo', 'pude'], answer: 2, why: 'Poder, yo, en un día terminado: pude.' },
            { who: 'Óscar', text: 'Mi hijo ___ fiebre en el descanso.', options: ['tenió', 'tuvo', 'tiene'], answer: 1, why: 'Tener, él, el sábado: tuvo.' },
            { who: 'Clara', text: '¡Ay, no! ¿Y qué ___ el médico?', options: ['dició', 'dijo', 'dijió'], answer: 1, why: 'Decir, él: dijo. Raíz dij- + -o, sin i.' },
            { who: 'Óscar', text: 'Que no es nada grave, solo un resfriado.' },
            { who: 'Óscar', text: 'El domingo mi hijo ___ en cama todo el día, pero hoy ya está bien.', options: ['estuvó', 'está', 'estuvo'], answer: 2, why: '«El domingo» terminó: estuvo, sin tilde. «Hoy ya está bien» es presente.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['fui', 'El', 'viernes', 'a', 'Oaxaca'], accept: ['El viernes fui a Oaxaca', 'Fui a Oaxaca el viernes'], en: 'On Friday I went to Oaxaca.' },
            { tiles: ['autobús', 'El', 'tuvo', 'un', 'problema'], accept: ['El autobús tuvo un problema'], en: 'The bus had a problem.' },
            { tiles: ['pudo', 'Marta', 'no', 'salir', 'de', 'casa'], accept: ['Marta no pudo salir de casa'], en: 'Marta couldn’t leave the house.' },
            { tiles: ['Clara', 'dijo', 'que', 'fue', 'un', 'viaje', 'difícil'], accept: ['Clara dijo que fue un viaje difícil'], en: 'Clara said that it was a difficult trip.' },
          ] },
        ] },
        { title: 'De hoy a ayer · From today to yesterday', blocks: [
          { kind: 'rewrite', title: 'Cambia la frase · Change the sentence', items: [
            { prompt: 'Hoy hago la maleta. (→ ayer)', instruction: 'Cuenta lo mismo en pasado. Empieza con «Ayer».', accept: ['Ayer hice la maleta', 'Ayer yo hice la maleta'] },
            { prompt: 'Marta tiene fiebre. (→ el sábado)', instruction: 'Cuenta lo mismo en pasado. Empieza con «El sábado».', accept: ['El sábado Marta tuvo fiebre', 'El sábado tuvo fiebre'] },
            { prompt: 'No puedo entrar al museo. (→ el sábado)', instruction: 'Cuenta lo mismo en pasado, con yo. Empieza con «El sábado».', accept: ['El sábado no pude entrar al museo', 'El sábado yo no pude entrar al museo'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno cuenta su último fin de semana en tres frases, con tres verbos distintos de hoy (fui, hice, tuve, estuve, pude, dije).' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Un mensaje de voz de Marta', coach: 'Primero escucha sin leer. Listen first, read later.',
      steps: [
        { title: 'Marta, desde Oaxaca · Marta, from Oaxaca', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general (¿cómo está Marta?). Segunda escucha: tu alumno levanta la mano con cada verbo de hoy (fui, dijo, tuve…). Después, las preguntas.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Cuenta los verbos irregulares en pasado. (Listen once for the gist, once for the details.)' } },
          { kind: 'listen', title: 'Un mensaje de voz de Marta', channel: 'MENSAJE DE VOZ · DE MARTA PARA CLARA', src: '/audio/grammar-live/348.mp3',
            before: 'Clara ya está en su casa. Marta le manda un mensaje de voz. ¿Qué crees que cuenta Marta: cómo está, qué hizo después de la visita…? (Marta sends Clara a voice message. What do you think she talks about?)',
            gist: { prompt: '¿Cuál es la idea general? · What is the main idea?', options: ['Marta está mejor y cuenta qué pasó después de la visita.', 'Marta está muy enferma y no puede trabajar.', 'Marta invita a Clara a Oaxaca otra vez.'], answer: 0, why: '«Ya estoy mucho mejor» y después cuenta qué pasó.', en: 'What is the main idea?' },
            details: [
              { prompt: '¿Qué dijo el médico?', options: ['Que no puede trabajar esta semana.', 'Que es un virus, nada grave.', 'Que Marta tiene que estar en cama.'], answer: 1, why: '«Me dijo que no es nada grave, solo un virus».', en: 'What did the doctor say?' },
              { prompt: '¿Qué encontró Marta en el sofá?', options: ['La receta de la sopa.', 'El teléfono de Clara.', 'La bufanda roja de Clara.'], answer: 2, why: '«Tu bufanda roja está aquí, en el sofá».', en: 'What did Marta find on the sofa?' },
              { prompt: '¿Por qué no pudo llamar a Clara?', options: ['Porque estuvo en el médico.', 'Porque no tuvo tiempo.', 'Porque el teléfono de Clara estuvo apagado.'], answer: 2, why: '«Tu teléfono estuvo apagado toda la noche».', en: 'Why couldn’t she call Clara?' },
              { prompt: '¿Qué hizo Marta ayer para su hermana?', options: ['Un pastel.', 'Una sopa de verduras.', 'Una reserva en el museo.'], answer: 1, why: '«Ayer hice tu sopa de verduras para mi hermana».', en: 'What did Marta make for her sister yesterday?' },
            ],
            transcript: 'Hola, Clara, soy Marta. ¡Muchas gracias por tu visita! Ya estoy mucho mejor. Ayer [[fui|blue]] al médico y me [[dijo|blue]] que no es nada grave, solo un virus. Oye, el domingo por la noche [[tuve|blue]] una sorpresa: tu bufanda roja está aquí, en el sofá. No [[pude|blue]] llamarte porque tu teléfono [[estuvo|blue]] apagado toda la noche. Te mando la bufanda por correo esta semana. Y otra cosa: ayer [[hice|blue]] tu sopa de verduras para mi hermana. Ella [[dijo|blue]] que [[fue|orange]] la mejor sopa de su vida. ¡Ahora quiere la receta! Hoy [[trabajo|teal]] desde casa, pero el viernes ya [[voy|teal]] a la oficina. ¿Y tu viaje de regreso? ¿Llegaste bien esta vez? Escríbeme pronto. Un abrazo.',
            reply: { teacher: 'Tú eres Marta. Tu alumno es Clara y responde al mensaje con tres frases: cómo fue el viaje de regreso, qué hizo ayer y una pregunta para Marta.', self: 'Responde a Marta en voz alta como Clara: cómo fue el viaje de regreso, qué hiciste ayer y una pregunta («¿Qué dijo tu hermana?»). (Answer as Clara: your trip back, what you did yesterday, and a question.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Tu última visita', coach: 'Cuenta qué pasó. Tell what happened.',
      steps: [
        { title: '¿Qué tal tu visita? · How was your visit?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú eres Óscar y haces las preguntas. Tu alumno habla de una visita real (a su familia, a un amigo, a otra ciudad). Tú repites su frase con la forma correcta y sigues con la repregunta.', self: 'Piensa en una visita real: a tu familia, a un amigo, a otra ciudad. Lee la pregunta, responde en voz alta y, si quieres, escribe tu respuesta. (Think of a real visit and answer aloud.)' } },
          { kind: 'talk', cards: [
            { q: '¿Cuándo fue tu última visita a un amigo o a tu familia? ¿Adónde fuiste? · When was your last visit? Where did you go?', followUps: ['¿Con quién fuiste? (Who did you go with?)', '¿Cómo fuiste: en autobús, en coche, en avión? (How did you travel?)'], phrases: ['El mes pasado [[fui|blue]] a…', '[[Fui|blue]] en autobús / en coche / en avión.', 'El viaje [[fue|orange]] largo / corto.'], hint: 'Fui + a + lugar: es ir. Fue + adjetivo: es ser.', example: 'El mes pasado fui a Guadalajara a visitar a mi hermano. Fui en avión y el viaje fue corto.', next: 'Ahora, qué hiciste allí.', teacher: 'Responde tú también con una visita tuya: «Yo fui a…». Así tu alumno oye otra vez fui y fue.' },
            { q: '¿Qué hiciste allí? · What did you do there?', followUps: ['¿Y qué hizo tu familia o tu amigo? (And what did they do?)', '¿Qué día te gustó más? (Which day did you like best?)'], phrases: ['El sábado [[hice|blue]]…', 'Mi hermano [[hizo|blue]] una cena.', 'Por la tarde [[fuimos|blue]] al centro.'], hint: 'Hacer: yo hice, él o ella hizo. Con regulares también: visité, comí, salí.', example: 'El sábado hice una excursión con mi hermano. Él hizo una cena muy rica y después fuimos al centro.', next: 'Ahora, los imprevistos.' },
            { q: '¿Tuviste algún problema o algún imprevisto? · Did you have any problem or surprise?', followUps: ['¿Qué hiciste entonces? (What did you do then?)', '¿Fue grave o fue divertido? (Was it serious or funny?)'], phrases: ['[[Tuve|blue]] un problema con…', 'El tren / el autobús [[tuvo|blue]] un retraso.', 'Al final [[fue|orange]] divertido.'], hint: 'Tener: yo tuve, él o ella tuvo. Sin tilde.', example: 'Sí: el avión tuvo un retraso de tres horas y tuve que esperar en el aeropuerto. Al final fue divertido: hablé con mucha gente.', next: 'Ahora, lo que no pudiste hacer.' },
            { q: '¿Qué no pudiste hacer? ¿Por qué? · What couldn’t you do? Why?', followUps: ['¿Dónde estuviste en ese momento? (Where were you at that moment?)', '¿Vas a volver? (Are you going back?)'], phrases: ['No [[pude|blue]] ver… porque…', '[[Estuve|blue]] todo el día en…', 'Mi amigo no [[pudo|blue]] venir.'], hint: 'Poder: yo pude, él o ella pudo. Estar: estuve, estuvo.', example: 'No pude ver el lago porque llovió todo el domingo. Estuve en casa de mi hermano todo el día.', next: 'Ahora, el final de la visita.' },
            { q: '¿Qué te dijo tu familia o tu amigo al final? ¿Y qué dijiste tú? · What did they say at the end? And what did you say?', followUps: ['¿Fue una buena visita? (Was it a good visit?)', '¿Cuándo vas a volver? (When are you going back?)'], phrases: ['Mi hermano [[dijo|blue]]: «…».', 'Yo [[dije|blue]]: «¡Gracias por todo!».', '[[Fue|orange]] una visita muy bonita.'], hint: 'Decir: yo dije, él o ella dijo. Fue + valoración para terminar.', example: 'Mi hermano dijo: «¡Vuelve pronto!». Yo dije: «Gracias por todo». Fue una visita muy bonita.', teacher: 'Pregunta también por una opinión final: «Entonces, ¿cómo fue la visita?». Tu alumno responde con fue + adjetivo.' },
            { q: 'Ahora tú eres Clara. Óscar pregunta: «¿Qué tal Oaxaca?». Cuenta la visita en cinco frases. · Now you are Clara. Tell Óscar about the visit.', followUps: ['¿Qué hizo Marta el domingo? (What did Marta do on Sunday?)', '¿Qué fue lo peor? ¿Y lo mejor? (What was the worst part? And the best?)'], phrases: ['El viernes [[fui|blue]]…, pero el autobús [[tuvo|blue]]…', 'Marta [[estuvo|blue]]… y no [[pudo|blue]]…', 'Al final [[fue|orange]]…'], hint: 'Cinco frases, en orden: viernes, sábado, domingo y una valoración.', example: 'El viernes fui a Oaxaca, pero el autobús tuvo un problema. Marta estuvo dos horas en la terminal. El sábado ella tuvo fiebre y no pudo salir. Yo no pude entrar al museo. El domingo hice una sopa y al final fue una visita bonita.', teacher: 'Tú eres Óscar y reaccionas: «¡Qué mala suerte!», «¿Y después?». Después, cambian los papeles.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno es Óscar y hace las preguntas («¿Qué hiciste?», «¿Tuviste algún problema?», «¿Cómo fue?») y tú cuentas una visita.', self: 'Ahora tú eres Óscar: haz las preguntas en voz alta («¿Qué hiciste?», «¿Cómo fue?») y responde como Clara. (Now you are Óscar: ask and answer as Clara.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Un mensaje para Marta', coach: 'Gracias y un imprevisto. Thanks and a surprise.',
      steps: [
        { title: 'Responde a Marta · Answer Marta', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos las formas de hoy: raíz nueva, -e para yo, -o para él o ella, sin tilde. Después, tu alumno lee su mensaje en voz alta.', self: 'Escribe tu mensaje y toca «Revisar mi texto». Mira bien la raíz y la tilde: hice, tuve, pudo. (Write your message and tap “Revisar mi texto”.)' } },
          { kind: 'write', title: 'Un mensaje después de la visita · A message after the visit', situation: 'Eres Clara (o eres tú, después de una visita real). Escribe un mensaje a Marta: da las gracias, cuenta cómo fue el viaje de regreso con un imprevisto y pregunta por ella. (You are Clara, or yourself after a real visit. Write to Marta: thank her, tell her how the trip back went, with one unexpected problem, and ask how she is.)', task: [
            'Saluda y da las gracias por la visita. (Say hello and thank her.)',
            'Di cuándo pasó: el domingo, ayer, anoche… (Say when it happened.)',
            'Cuenta el viaje de regreso con un imprevisto, con tres verbos de hoy: fui, hice, tuve, estuve, pude, dije. (Tell the trip back with three of today’s verbs.)',
            'Valora la visita con «fue». (Give your opinion of the visit with “fue”.)',
            'Haz una pregunta a Marta. (Ask Marta a question.)',
          ], starters: ['Hola, Marta:', '¡Gracias por todo!', 'El domingo …', 'El autobús tuvo …', 'No pude …', 'Al final fue …', '¿Ya estás mejor?', 'Un abrazo.'],
            words: ['fui', 'fue', 'hice', 'hizo', 'tuve', 'tuvo', 'estuve', 'estuvo', 'pude', 'pudo', 'dije', 'dijo', 'ayer', 'el domingo', 'al final'],
            model: 'Hola, Marta: ¡Gracias por todo! Al final [[fue|orange]] una visita muy bonita. El viaje de regreso también [[tuvo|blue]] un imprevisto: el domingo [[estuve|blue]] una hora en la terminal porque el autobús salió tarde. Por eso no [[pude|blue]] llamarte. En el autobús [[hice|blue]] una lista de lugares para mi próxima visita, ¡con el museo! Hoy [[fui|blue]] a la oficina y le [[dije|blue]] a Óscar: «Oaxaca es preciosa». ¿Ya estás mejor? Un abrazo, Clara.',
            minWords: 45,
            checks: [
              { label: 'Indefinido irregular: fui, hice, tuve… (an irregular past form)', pattern: '(?<!\\p{L})(?:fui|fue|hice|hizo|tuve|tuvo|estuve|estuvo|pude|pudo|dije|dijo|fuimos|hicimos|tuvimos|estuvimos|pudimos|dijimos)(?!\\p{L})', tip: 'Cuenta qué pasó con los verbos de hoy: «El autobús tuvo un problema», «No pude llamarte».' },
              { label: 'Cuándo pasó: ayer, el domingo… (a past time marker)', pattern: '(?<!\\p{L})(?:ayer|anoche|el\\s+(?:lunes|martes|mi[eé]rcoles|jueves|viernes|s[aá]bado|domingo)|el\\s+fin\\s+de\\s+semana|la\\s+semana\\s+pasada)(?!\\p{L})', tip: 'Di cuándo pasó: «El domingo…», «Ayer…».' },
              { label: 'Gracias (thanks)', pattern: '(?<!\\p{L})gracias(?!\\p{L})', tip: 'Empieza dando las gracias: «¡Gracias por todo!».' },
              { label: 'Una pregunta para Marta (a question)', pattern: '¿[^?]+\\?', tip: 'Termina con una pregunta: «¿Ya estás mejor?».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})(?:hac[ií]|ten[ií]|pod[ií]|estuv[ií]|hac[ií][oó]|hici[oó]|teni[oó]|podi[oó]|dici[oó]|diji[oó]|deci[oó])(?!\\p{L})', why: 'Estos verbos cambian la raíz: **hice / hizo, tuve / tuvo, pude / pudo, estuve / estuvo, dije / dijo**.' },
              { pattern: '(?<!\\p{L})(?:fuí|fué|hicé|hizó|tuvé|tuvó|estuvé|estuvó|pudé|pudó|dijé|dijó)(?!\\p{L})', why: 'Las formas de hoy **no llevan tilde**: fui, fue, hice, hizo, tuve, tuvo, pude, pudo, dije, dijo.' },
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
            { tone: 'blue', label: 'INDEFINIDO IRREGULAR', formula: 'hice · tuve · estuve · pude · dije (yo) — hizo · tuvo · estuvo · pudo · dijo (él, ella)', example: 'El autobús tuvo un problema y no pude llegar a tiempo.', caption: 'raíz nueva, -e / -o, sin tilde', en: 'new stem, -e / -o, no written accent' },
            { tone: 'orange', label: 'FUI · FUE', formula: 'fui · fue = ir (a + lugar) o ser (valoración)', example: 'Fui a Oaxaca. Fue una visita bonita.', caption: 'mismas formas, dos verbos', en: 'same forms, two verbs: to go / to be' },
            { tone: 'teal', label: 'PRESENTE', formula: 'voy · hago · tengo · estoy · puedo · digo', example: 'Ahora voy a casa. Ayer fui al médico.', caption: 'hoy, ahora; el indefinido es para lo terminado', en: 'present: today, now; the indefinido is for what is finished' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Seis verbos muy frecuentes cambian la raíz en pasado: **hic-, tuv-, estuv-, pud-, dij-** y **fu-**. Yo termina en **-e** y él o ella en **-o**, sin tilde: «hice», «hizo». Nunca «hací» ni «tení». Y con hoy y ahora, el presente: «Ayer fui, hoy voy».', en: 'Six very frequent verbs change their stem in the past: hic-, tuv-, estuv-, pud-, dij- and fu-. “I” ends in -e and “he / she” in -o, with no written accent: hice, hizo. Never “hací” or “tení”. And with today and now, the present: “Ayer fui, hoy voy”.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'La semana pasada mi jefa ___ a Lima por trabajo.', options: ['fuí', 'fue', 'va'], answer: 1, why: '«La semana pasada» + ella: fue (ir).', en: 'Last week my boss went to Lima for work.' },
            { prompt: 'Anoche yo no ___ la cena: pedí una pizza.', options: ['hací', 'hice', 'hizo'], answer: 1, why: 'Hacer, yo: hice.', en: 'Last night I didn’t make dinner: I ordered a pizza.' },
            { prompt: 'El concierto ___ increíble.', options: ['fui', 'hizo', 'fue'], answer: 2, why: 'Una valoración del concierto, él: fue (ser). «Fui» es yo.', en: 'The concert was amazing.' },
            { prompt: 'Ayer mis vecinos no estuvieron en casa y yo no ___ hablar con ellos.', options: ['podí', 'puedo', 'pude'], answer: 2, why: '«Ayer» + yo: pude.', en: 'Yesterday my neighbours weren’t at home and I couldn’t talk to them.' },
            { prompt: 'Hoy ___ mucho trabajo, pero ayer ___ un día tranquilo.', options: ['tuve · tengo', 'tengo · tuve', 'tengo · tení'], answer: 1, why: 'Hoy → presente, tengo; ayer → indefinido, tuve.', en: 'Today I have a lot of work, but yesterday I had a quiet day.' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Ahora habla Óscar.', blocks: [
          { kind: 'lead', text: 'Un mes después, Óscar visita a sus padres en Monterrey. El lunes, Clara pregunta: «¿Qué tal la visita?». Escribe las frases de Óscar.', en: 'A month later, Óscar visits his parents in Monterrey. On Monday, Clara asks: “How was the visit?”. Write Óscar’s sentences.' },
          { kind: 'rewrite', title: 'La visita de Óscar · Óscar’s visit', items: [
            { prompt: '(yo → ir a Monterrey el sábado)', instruction: 'Escribe como Óscar, con yo. Empieza con «El sábado».', accept: ['El sábado fui a Monterrey', 'El sábado yo fui a Monterrey'] },
            { prompt: '(mi madre → hacer mole)', instruction: 'Escribe con ella. Empieza con «Mi madre».', accept: ['Mi madre hizo mole'] },
            { prompt: '(yo → no poder dormir bien por el calor)', instruction: 'Escribe con yo. Empieza con «No».', accept: ['No pude dormir bien por el calor'] },
          ] },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 049 · Imperfecto: hábitos y descripciones del pasado', text: 'Ya cuentas lo que pasó: «Fui a Oaxaca», «Marta tuvo fiebre». En la clase 049 aprendes el **imperfecto** para describir cómo eran las cosas y qué hacías siempre en el pasado: «De niña, iba a Oaxaca todos los veranos». Es el paso natural: primero los hechos, después el fondo de la historia.', en: 'You can now tell what happened: “Fui a Oaxaca”, “Marta tuvo fiebre”. In class 049 you learn the imperfect to describe how things were and what you always did in the past: “As a girl, I went to Oaxaca every summer”. It is the natural next step: first the events, then the background of the story.', href: '/sistema-verbal/preterito-imperfecto-indicativo', label: 'Ir a la clase 049' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Qué hiciste el fin de semana pasado? ¿Cómo fue?». Respuesta esperada: dos frases con verbos de hoy y una con fue + valoración. Tarea: mandar el mensaje de Escribir a una persona real.' },
        ] },
      ],
    },
  ],
};
