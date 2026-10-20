import type { LiveLesson } from '../types';

/**
 * Lesson 341 · A1 · Estar + gerundio: acción en desarrollo (course unit G041).
 * One scene runs through the class: Saturday, six in the evening. Sofía calls
 * her friend Pablo to invite him to the cinema at eight. Pablo cannot go: right
 * now he is cooking soup for his parents. His flatmate Irene, a nurse who works
 * nights, is sleeping; his brother Mario is reading on the sofa with the radio
 * on. Pablo works Monday to Friday; on Saturdays he rests. In the voice message
 * Sofía (Mexican voice, tú) tells Pablo what she, Lucas and Ana are doing at
 * the cinema. Content: estar (estoy, estás, está, estamos, están; estáis as the
 * Spain form) + gerundio -ando / -iendo; leyendo and durmiendo as the two
 * special forms of today. Contrast: Trabajo todos los días / Estoy trabajando
 * ahora. Mistake: *Estoy trabajar. No object pronouns (next class, G042).
 * Instructions use tú.
 */
export const lesson: LiveLesson = {
  id: 341,
  level: 'A1',
  title: 'Estar + gerundio: acción en desarrollo',
  subtitle: 'Decir qué estás haciendo ahora mismo con estar + gerundio y distinguirlo de lo que haces normalmente.',
  legend: [
    { tone: 'blue', label: 'ESTAR + GERUNDIO · ahora mismo (right now)' },
    { tone: 'teal', label: 'PRESENTE · un hábito (what you usually do)' },
    { tone: 'orange', label: 'GERUNDIOS ESPECIALES · leyendo, durmiendo' },
  ],
  optionNotes: {
    leiendo: 'En «leer», la i entre dos vocales se escribe **y**: le-**y**endo.',
    dormiendo: '«Dormir» cambia la o por **u** en el gerundio: d**u**rmiendo.',
    comando: 'Los verbos en -er hacen **-iendo**: com**iendo**. Solo los verbos en -ar hacen -ando.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: '¿Qué estás haciendo?', coach: 'Ahora mismo. Right now.',
      steps: [
        { title: 'Una llamada · A phone call', blocks: [
          { kind: 'lead', text: 'Es sábado, a las seis de la tarde. Sofía llama a su amigo Pablo: «¿Qué **estás haciendo**?». Pablo responde: «Ahora **estoy cocinando**». Hoy aprendes a decir qué pasa **en este momento**.', en: 'It is Saturday, six in the evening. Sofía calls her friend Pablo: “What are you doing?”. Pablo answers: “I am cooking right now”. Today you learn to say what is happening at this moment.' },
          { kind: 'guide', text: { teacher: 'Tú lees las dos frases de Pablo y tu alumno repite. Después tu alumno dice cuál habla de «todos los días» y cuál habla de «ahora».', self: 'Lee las dos frases de Pablo en voz alta. ¿Cuál habla de todos los días? ¿Cuál habla de ahora? (Which one is every day, which one is now?)' } },
          { kind: 'compare', title: 'Dos frases de Pablo · Two sentences from Pablo', columns: [
            { tone: 'teal', label: 'PRESENTE · hábito', sentence: '[[Trabajo|teal]] todos los días, de lunes a viernes.', idea: 'Lo normal, la rutina.', en: 'I work every day, Monday to Friday.' },
            { tone: 'blue', label: 'ESTAR + GERUNDIO · ahora', sentence: 'Hoy no trabajo. Ahora [[estoy cocinando|blue]].', idea: 'Una acción en desarrollo, en este momento.', en: 'I am not working today. Right now I am cooking.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Ahora estoy cocinando» habla de…', options: ['Lo que Pablo hace todos los días.', 'Un plan para mañana.', 'Lo que Pablo hace en este momento.'], answer: 2, why: '«Estoy cocinando» = la acción está pasando ahora.', en: '“Ahora estoy cocinando” is about…' },
            { prompt: '«Trabajo todos los días» habla de…', options: ['Este momento.', 'Ayer.', 'Un hábito, la rutina.'], answer: 2, why: '«Todos los días» + presente = un hábito.', en: '“Trabajo todos los días” is about…' },
            { prompt: 'Sofía pregunta por este momento. ¿Qué dice?', options: ['¿Qué estás haciendo?', '¿Qué vas a hacer?', '¿Qué haces los sábados?'], answer: 0, why: 'Para preguntar por ahora mismo: ¿qué estás haciendo?', en: 'Sofía asks about this moment. What does she say?' },
          ] },
        ] },
        { title: 'La forma · The form', mascot: '/brand/mascot/studying.webp', coach: 'Estar + gerundio. Two pieces.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'ESTAR + GERUNDIO', question: '¿Qué está pasando ahora?', en: 'to be + -ing: what is happening now', formula: ['estar (conjugado) + gerundio', 'estoy + cocinando'],
            meaning: 'Dos piezas: **estar** cambia con la persona (estoy, estás, está…) y el **gerundio** no cambia nunca. Sirve para una acción que está en desarrollo en este momento.',
            examples: [
              { es: 'Ahora [[estoy cocinando|blue]] una sopa.', en: 'I am cooking a soup now.' },
              { es: 'Mario [[está escuchando|blue]] la radio.', en: 'Mario is listening to the radio.' },
              { es: 'Sofía y sus amigos [[están esperando|blue]] en el cine.', en: 'Sofía and her friends are waiting at the cinema.' },
              { es: '¿Qué [[estás haciendo|blue]], Pablo?', en: 'What are you doing, Pablo?' },
            ],
            note: 'El gerundio es igual para yo, tú, ella, nosotros…: «estoy cocinando», «estamos cocinando». Solo cambia **estar**.' },
          { kind: 'table', title: 'Estar + gerundio · The forms', head: ['Persona', 'estar', '+ gerundio', 'English'], rows: [
            ['yo', '**estoy**', 'cocinando', 'I am cooking'],
            ['tú', '**estás**', 'cocinando', 'you are cooking'],
            ['él · ella · usted', '**está**', 'cocinando', 'he / she is · you are cooking'],
            ['nosotros · nosotras', '**estamos**', 'cocinando', 'we are cooking'],
            ['vosotros · vosotras', 'estáis', 'cocinando', 'you all are cooking (España)'],
            ['ustedes · ellos · ellas', '**están**', 'cocinando', 'you all / they are cooking'],
          ], note: '**Estáis** es la forma de vosotros, en España. En América se usa **ustedes están**.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Irene y Pablo ___ cocinando.', options: ['están', 'está', 'estamos'], answer: 0, why: 'Irene y Pablo = ellos → están.', en: 'Irene and Pablo are cooking.' },
            { prompt: '¿Qué pieza cambia con la persona?', options: ['Las dos.', 'Estar: estoy, estás, está…', 'El gerundio: cocinando, cocinandos…'], answer: 1, why: 'Solo estar cambia. El gerundio es siempre igual.', en: 'Which piece changes with the person?' },
          ] },
        ] },
        { title: 'El gerundio · The -ing form', mascot: '/brand/mascot/standing.webp', coach: '-ando, -iendo. Two endings.', blocks: [
          { kind: 'lead', text: 'Para hacer el gerundio, quitas -ar, -er o -ir y pones **-ando** o **-iendo**. Solo hay dos terminaciones.', en: 'To make the gerund, take off -ar, -er or -ir and add -ando or -iendo. There are only two endings.' },
          { kind: 'table', title: 'Formar el gerundio · Making the gerund', head: ['Verbo', 'Regla', 'Gerundio'], rows: [
            ['cocin**ar** · habl**ar** · trabaj**ar**', '-ar → **-ando**', '[[cocinando|blue]] · hablando · trabajando'],
            ['com**er** · beb**er** · hac**er**', '-er → **-iendo**', '[[comiendo|blue]] · bebiendo · haciendo'],
            ['escrib**ir** · viv**ir** · sal**ir**', '-ir → **-iendo**', '[[escribiendo|blue]] · viviendo · saliendo'],
            ['le**er**', 'i entre vocales → **y**', '[[leyendo|orange]]'],
            ['d**o**rmir', 'o → **u**', '[[durmiendo|orange]]'],
          ], note: 'Hoy aprendes dos formas especiales: **leyendo** y **durmiendo**. Hay otras pocas; las ves en otras clases.' },
          { kind: 'tip', icon: '💡', title: 'Leyendo: escribe como suena', text: '«Le + iendo» se escribe **leyendo**: la i entre dos vocales se escribe y. «Dormir» cambia la o por u: **durmiendo**.', en: '“Le + iendo” is written leyendo: an i between two vowels becomes y. “Dormir” changes o to u: durmiendo.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Hablar → ___', options: ['hablado', 'hablando', 'habliendo'], answer: 1, why: '-ar → -ando: hablando.', en: 'to speak → speaking' },
            { prompt: 'Beber → ___', options: ['bebando', 'bebendo', 'bebiendo'], answer: 2, why: '-er → -iendo: bebiendo.', en: 'to drink → drinking' },
            { prompt: 'Leer → ___', options: ['leiendo', 'leendo', 'leyendo'], answer: 2, why: 'La i entre vocales se escribe y: leyendo.', en: 'to read → reading' },
            { prompt: 'Dormir → ___', options: ['durmiendo', 'dormiendo', 'dormando'], answer: 0, why: 'Dormir cambia o → u: durmiendo.', en: 'to sleep → sleeping' },
          ] },
        ] },
        { title: '¿Hábito o ahora? · Habit or now?', mascot: '/brand/mascot/speaking.webp', coach: '¿Siempre o ahora? Always or now?', blocks: [
          { kind: 'table', title: 'Tres pares · Three pairs', head: ['PRESENTE · hábito', 'ESTAR + GERUNDIO · ahora'], rows: [
            ['[[Trabajo|teal]] todos los días. (I work every day.)', 'Hoy no [[estoy trabajando|blue]]. (I am not working today.)'],
            ['Irene [[duerme|teal]] de día. (Irene sleeps during the day.)', 'Shh, Irene [[está durmiendo|orange]]. (Irene is sleeping.)'],
            ['Mario [[lee|teal]] mucho. (Mario reads a lot.)', 'Mario [[está leyendo|orange]] en el sofá. (Mario is reading on the sofa.)'],
          ], note: 'Palabras de hábito: **todos los días, normalmente, siempre, los sábados**. Palabras de ahora: **ahora, ahora mismo, en este momento**.' },
          { kind: 'decide', title: '¿Presente o estar + gerundio?', steps: [
            { q: '¿Hablas de una rutina, de lo normal? (todos los días, los sábados, siempre)', yes: 'Usa el **presente**: «Los sábados descanso».', no: 'next' },
            { q: '¿La acción está pasando en este momento? (ahora, ahora mismo)', yes: 'Usa **estar + gerundio**: «Ahora estoy descansando».', no: 'Usa el presente para lo general: «Pablo vive en el centro».' },
          ] },
          { kind: 'tip', icon: '🌎', title: 'También vas a oír el presente', text: 'A veces la gente usa el presente para ahora: «¿Qué haces?» — «Cocino». Es correcto. Pero para decir claramente que la acción **está en desarrollo**, se usa estar + gerundio: «Estoy cocinando».', en: 'Sometimes people use the present for now: “¿Qué haces?” — “Cocino”. That is correct. But to say clearly that the action is in progress, use estar + gerund: “Estoy cocinando”.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Los sábados Pablo ___ en casa.', options: ['está descansando', 'descansando', 'descansa'], answer: 2, why: '«Los sábados» = hábito: presente, descansa.', en: 'On Saturdays Pablo rests at home.' },
            { prompt: 'Shh… ahora mismo Irene ___.', options: ['duerme los sábados', 'durmiendo', 'está durmiendo'], answer: 2, why: '«Ahora mismo» = acción en desarrollo: está durmiendo.', en: 'Shh… Irene is sleeping right now.' },
            { prompt: 'Irene ___ de noche en el hospital. Es enfermera.', options: ['trabajando', 'trabaja', 'está trabajando ahora'], answer: 1, why: 'Su rutina, su trabajo normal: trabaja.', en: 'Irene works at night at the hospital. She is a nurse.' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Dos piezas: estar + -ando / -iendo.', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la frase con el error y tu alumno busca qué pieza falla: estar o el gerundio. Después aparece la corrección.', self: 'Lee cada frase, busca qué pieza falla (estar o el gerundio) y toca para ver la corrección.' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Hoy estoy trabajar en casa.', right: 'Hoy estoy trabajando en casa.', why: 'Después de estar va el gerundio (-ando), no el infinitivo. (After estar: -ando / -iendo, not the infinitive.)' },
            { wrong: 'Soy cocinando una sopa.', right: 'Estoy cocinando una sopa.', why: 'Para una acción en desarrollo, siempre **estar**, nunca ser.' },
            { wrong: 'Mario está leiendo.', right: 'Mario está leyendo.', why: 'Leer: la i entre vocales se escribe y → leyendo.' },
            { wrong: 'Irene está dormiendo.', right: 'Irene está durmiendo.', why: 'Dormir cambia o → u en el gerundio: durmiendo.' },
            { wrong: 'Mis padres está comiendo.', right: 'Mis padres están comiendo.', why: 'Mis padres = ellos → están. Estar concuerda con la persona.' },
            { wrong: 'Estoy escribando un mensaje.', right: 'Estoy escribiendo un mensaje.', why: 'Escribir es un verbo en -ir: -iendo, no -ando.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Ahora estoy ___ la radio.', options: ['escuchando', 'escuchar', 'escucho'], answer: 0, why: 'Estar + gerundio: escuchando.', en: 'I am listening to the radio now.' },
            { prompt: 'Nosotros ___ comiendo.', options: ['está', 'estamos', 'somos'], answer: 1, why: 'Acción en desarrollo con nosotros: estamos.', en: 'We are eating.' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno dice tres frases reales sobre ahora («Ahora estoy…») y una sobre su rutina («Todos los días…»). Tú repites cada frase con la forma correcta.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'La llamada de Sofía', coach: 'Toca las palabras marcadas. Tap the marked words.',
      steps: [
        { title: 'La llamada · The call', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Sofía y tu alumno es Pablo. Después, tu alumno toca cada palabra marcada y dice si es «ahora» o «hábito».', self: 'Lee el diálogo en voz alta. Después toca cada palabra marcada: ¿ahora o hábito? (Now or habit?)' } },
          { kind: 'explore', title: '¿Qué estás haciendo?', setting: 'Sábado, seis de la tarde. Sofía llama por teléfono a Pablo para ir al cine a las ocho. (Saturday, 6 pm. Sofía phones Pablo to go to the cinema at eight.)', lines: [
            { who: 'Sofía', text: '¡Hola, Pablo! ¿Qué [[estás haciendo|blue]]?', en: 'Hi, Pablo! What are you doing?' },
            { who: 'Pablo', text: 'Hola, Sofía. Ahora [[estoy cocinando|blue]] una sopa de verduras.', en: 'Hi, Sofía. Right now I am cooking a vegetable soup.' },
            { who: 'Sofía', text: '¡Qué rico! ¿Hoy no [[estás trabajando|blue]]?', en: 'Yum! Aren’t you working today?' },
            { who: 'Pablo', text: 'No. [[Trabajo|teal]] de lunes a viernes. Los sábados [[descanso|teal]].', en: 'No. I work Monday to Friday. On Saturdays I rest.' },
            { who: 'Sofía', text: '¿Y Irene? ¿Está en casa?', en: 'And Irene? Is she at home?' },
            { who: 'Pablo', text: 'Sí, pero [[está durmiendo|orange]]. Ella [[trabaja|teal]] de noche en el hospital.', en: 'Yes, but she is sleeping. She works nights at the hospital.' },
            { who: 'Sofía', text: 'Ah, claro. Escucho otra voz. ¿Quién habla?', en: 'Oh, of course. I can hear another voice. Who is talking?' },
            { who: 'Pablo', text: 'Es la radio. Mi hermano Mario [[está leyendo|orange]] en el sofá y [[está escuchando|blue]] el fútbol.', en: 'It is the radio. My brother Mario is reading on the sofa and listening to the football.' },
            { who: 'Sofía', text: 'Oye, Lucas, Ana y yo vamos a ir al cine a las ocho. ¿Vienes?', en: 'Listen, Lucas, Ana and I are going to the cinema at eight. Are you coming?' },
            { who: 'Pablo', text: 'Hoy no puedo, lo siento. Mis padres vienen a cenar a las ocho.', en: 'I can’t today, sorry. My parents are coming for dinner at eight.' },
            { who: 'Sofía', text: 'Bueno, otro día. ¡Buen provecho!', en: 'OK, another day. Enjoy your meal!' },
          ], notes: {
            'estás haciendo': 'Sofía pregunta por **este momento**: ¿qué estás haciendo? Hacer → hac**iendo** (-er → -iendo).',
            'estoy cocinando': 'La frase clave: **estoy** + cocin**ando**. Pablo cocina en este momento.',
            'estás trabajando': 'Sofía pregunta por **hoy, ahora**: ¿estás trabajando? Trabajar → trabaj**ando**.',
            'Trabajo': 'Presente: la **rutina** de Pablo. «De lunes a viernes» es un hábito, no este momento.',
            'descanso': 'Presente otra vez: lo que Pablo hace **normalmente** los sábados.',
            'está durmiendo': 'Ahora mismo. Gerundio especial: d**o**rmir → d**u**rmiendo.',
            'trabaja': 'Presente: el trabajo **normal** de Irene, de noche. Por eso ahora, de día, duerme.',
            'está leyendo': 'Ahora mismo. Gerundio especial: leer → le**y**endo.',
            'está escuchando': 'Otra acción de Mario en este momento: **está** + escuch**ando**. Las dos acciones pasan a la vez.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Qué está haciendo Pablo?', options: ['Está durmiendo.', 'Está cocinando una sopa.', 'Está trabajando.'], answer: 1, why: '«Ahora estoy cocinando una sopa de verduras».', en: 'What is Pablo doing?' },
            { prompt: '¿Por qué está durmiendo Irene?', options: ['Porque trabaja de noche.', 'Porque está en el cine.', 'Porque no trabaja.'], answer: 0, why: '«Ella trabaja de noche en el hospital».', en: 'Why is Irene sleeping?' },
            { prompt: '¿Qué está haciendo Mario?', options: ['Está hablando con Sofía.', 'Está leyendo y escuchando el fútbol.', 'Está cocinando con Pablo.'], answer: 1, why: '«Mario está leyendo en el sofá y está escuchando el fútbol».', en: 'What is Mario doing?' },
          ] },
        ] },
        { title: '¿Ahora o hábito? · Now or habit?', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'classify', title: 'La casa de Pablo · Pablo’s home', categories: [
            { id: 'ahora', label: 'AHORA · estar + gerundio', tone: 'blue' },
            { id: 'habito', label: 'HÁBITO · presente', tone: 'teal' },
          ], items: [
            { text: 'Pablo está cocinando.', answer: 'ahora', why: 'Estar + gerundio: pasa en este momento.' },
            { text: 'Pablo trabaja de lunes a viernes.', answer: 'habito', why: 'Presente + «de lunes a viernes»: su rutina.' },
            { text: 'Irene está durmiendo.', answer: 'ahora', why: 'Estar + gerundio: en este momento.' },
            { text: 'Irene trabaja de noche.', answer: 'habito', why: 'Presente: su trabajo normal.' },
            { text: 'Mario está escuchando el fútbol.', answer: 'ahora', why: 'Estar + gerundio: ahora, en la radio.' },
            { text: 'Los sábados Pablo descansa.', answer: 'habito', why: '«Los sábados» + presente: un hábito.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: «¿Qué hace Irene normalmente? ¿Y qué está haciendo ahora?». Tu alumno responde con las dos formas: «Trabaja de noche. Ahora está durmiendo».' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: '¿Ahora o siempre? Now or always?',
      steps: [
        { title: 'Elige la forma · Choose the form', blocks: [
          { kind: 'choice', items: [
            { context: 'Pablo habla de él. (Pablo talks about himself.)', prompt: 'Ahora ___ arroz para mis padres.', options: ['estoy preparar', 'soy preparando', 'estoy preparando'], answer: 2, why: 'Estar (estoy) + gerundio (preparando).', en: 'I am making rice for my parents now.' },
            { context: 'Pablo habla de Irene. (Pablo talks about Irene.)', prompt: 'Irene ___ en su habitación.', options: ['está dormiendo', 'están durmiendo', 'está durmiendo'], answer: 2, why: 'Ella → está; dormir → durmiendo.', en: 'Irene is sleeping in her room.' },
            { context: 'Pablo habla de su hermano. (Pablo talks about his brother.)', prompt: 'Mario ___ una novela.', options: ['estás leyendo', 'está leyendo', 'está leiendo'], answer: 1, why: 'Él → está; leer → leyendo, con y.', en: 'Mario is reading a novel.' },
            { context: 'En el cine. (At the cinema.)', prompt: 'Sofía, Lucas y Ana ___ en la fila.', options: ['están esperar', 'están esperando', 'está esperando'], answer: 1, why: 'Tres personas = ellos → están + esperando.', en: 'Sofía, Lucas and Ana are waiting in line.' },
            { context: 'Pablo pregunta a Sofía. (Pablo asks Sofía.)', prompt: '¿Y tú, Sofía? ¿Qué ___ ahora?', options: ['estás hacer', 'estás haciendo', 'está haciendo'], answer: 1, why: 'Tú → estás; hacer → haciendo.', en: 'And you, Sofía? What are you doing now?' },
          ] },
        ] },
        { title: '-ando, -iendo o especial · Which ending?', blocks: [
          { kind: 'classify', title: '¿Qué gerundio? · Which gerund?', categories: [
            { id: 'ando', label: '-ar → -ando', tone: 'blue' },
            { id: 'iendo', label: '-er / -ir → -iendo', tone: 'teal' },
            { id: 'especial', label: 'Especial: leyendo, durmiendo', tone: 'orange' },
          ], items: [
            { text: 'lavar', answer: 'ando', why: 'Lavar → lavando.' },
            { text: 'abrir', answer: 'iendo', why: 'Abrir → abriendo.' },
            { text: 'leer', answer: 'especial', why: 'Leer → leyendo, con y.' },
            { text: 'aprender', answer: 'iendo', why: 'Aprender → aprendiendo.' },
            { text: 'dormir', answer: 'especial', why: 'Dormir → durmiendo, con u.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Mario está leiendo el periódico.', ok: false, options: ['Mario está leyendo el periódico.', 'Mario está leer el periódico.', 'Mario es leyendo el periódico.'], answer: 0, why: 'Leer → leyendo: la i entre vocales se escribe y.' },
            { sentence: 'Irene está durmiendo en su habitación.', ok: true, why: 'Correcta: está + durmiendo (o → u).' },
            { sentence: 'Ahora estoy escribir un mensaje a Sofía.', ok: false, options: ['Ahora estoy escribando un mensaje a Sofía.', 'Ahora soy escribiendo un mensaje a Sofía.', 'Ahora estoy escribiendo un mensaje a Sofía.'], answer: 2, why: 'Después de estar, el gerundio: escribir → escribiendo (-ir → -iendo).' },
            { sentence: 'Lucas y Ana está comprando palomitas.', ok: false, options: ['Lucas y Ana estamos comprando palomitas.', 'Lucas y Ana están comprado palomitas.', 'Lucas y Ana están comprando palomitas.'], answer: 2, why: 'Lucas y Ana = ellos → están. Y el gerundio termina en -ando: comprando.' },
            { sentence: 'Los sábados Pablo descansa en casa.', ok: true, why: 'Correcta: «los sábados» es un hábito, y el hábito va en presente.' },
          ] },
        ] },
        { title: 'Otra llamada · Another call', blocks: [
          { kind: 'chat-fill', title: 'Las nueve de la noche · Nine at night', lines: [
            { who: 'Sofía', text: 'Hola, Pablo. ¿Todavía ___?', options: ['estás cocinando', 'estás cocinar', 'estoy cocinando'], answer: 0, why: 'Sofía habla con Pablo (tú): estás + cocinando.' },
            { who: 'Pablo', text: 'No, ya no. Ahora mis padres y yo ___ la sopa.', options: ['estamos comando', 'están comiendo', 'estamos comiendo'], answer: 2, why: 'Mis padres y yo = nosotros → estamos. Comer → comiendo.' },
            { who: 'Sofía', text: '¡Qué bien! ¿Y Mario? ¿Todavía está leyendo?' },
            { who: 'Pablo', text: 'No, Mario ___ los platos.', options: ['está lavando', 'está lavar', 'es lavando'], answer: 0, why: 'Él → está; lavar → lavando. Nunca ser.' },
            { who: 'Pablo', text: '¿Y ustedes? ¿Qué ___?', options: ['están haciendo', 'estás haciendo', 'están hacer'], answer: 0, why: 'Ustedes → están; hacer → haciendo.' },
            { who: 'Sofía', text: 'Nosotros ___ en un restaurante, cerca del cine.', options: ['están cenando', 'estamos cenando', 'estamos cenar'], answer: 1, why: 'Nosotros → estamos + cenando.' },
            { who: 'Pablo', text: 'Normalmente los sábados yo ___ al cine con ustedes. ¡El próximo sábado voy!', options: ['voy', 'estoy yendo', 'yendo'], answer: 0, why: '«Normalmente los sábados» = un hábito: presente, voy.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['está', 'Irene', 'durmiendo', 'ahora'], accept: ['Irene está durmiendo ahora', 'Ahora Irene está durmiendo', 'Irene ahora está durmiendo'], en: 'Irene is sleeping now.' },
            { tiles: ['leyendo', 'Mario', 'está', 'un', 'libro'], accept: ['Mario está leyendo un libro'], en: 'Mario is reading a book.' },
            { tiles: ['estamos', 'la', 'película', 'viendo'], accept: ['Estamos viendo la película'], en: 'We are watching the film.' },
            { tiles: ['Trabajo', 'todos', 'los', 'días,', 'pero', 'hoy', 'estoy', 'descansando'], accept: ['Trabajo todos los días, pero hoy estoy descansando'], en: 'I work every day, but today I am resting.' },
          ] },
        ] },
        { title: 'De hábito a ahora · From habit to now', blocks: [
          { kind: 'rewrite', title: 'Cambia la frase · Change the sentence', items: [
            { prompt: 'Pablo cocina todos los días. (→ ahora)', instruction: 'Escribe qué está haciendo ahora con estar + gerundio. Empieza con «Ahora».', accept: ['Ahora Pablo está cocinando', 'Ahora está cocinando'] },
            { prompt: 'Irene duerme de día. (→ ahora)', instruction: 'Escribe qué está haciendo ahora. Empieza con «Ahora».', accept: ['Ahora Irene está durmiendo', 'Ahora está durmiendo'] },
            { prompt: 'Leo el periódico los domingos. (→ ahora)', instruction: 'Escribe qué estás haciendo ahora. Empieza con «Ahora».', accept: ['Ahora estoy leyendo el periódico', 'Ahora yo estoy leyendo el periódico'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno mira a su alrededor y dice dos cosas que están pasando ahora mismo: «Tú estás hablando, yo estoy escribiendo…».' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Un mensaje de voz de Sofía', coach: 'Primero escucha sin leer. Listen first, read later.',
      steps: [
        { title: 'Sofía desde el cine · Sofía at the cinema', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general (¿dónde está Sofía?). Segunda escucha: tu alumno levanta la mano cada vez que oye estar + gerundio. Después, las preguntas.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Cuenta cuántas veces oyes estar + gerundio. (Listen once for the gist, once for the details.)' } },
          { kind: 'listen', title: 'Un mensaje de voz de Sofía', channel: 'MENSAJE DE VOZ · DE SOFÍA PARA PABLO', src: '/audio/grammar-live/341.mp3',
            before: 'Son las siete y media. Sofía está en el cine y manda un mensaje de voz a Pablo. ¿Qué crees que están haciendo ella y sus amigos? (Sofía is at the cinema and sends Pablo a voice message. What do you think she and her friends are doing?)',
            gist: { prompt: '¿Dónde está Sofía? · Where is Sofía?', options: ['En el cine.', 'En el hospital.', 'En casa de Pablo.'], answer: 0, why: '«Ya estoy en el cine».', en: 'Where is Sofía?' },
            details: [
              { prompt: '¿Qué está haciendo Sofía?', options: ['Está comprando los boletos.', 'Está viendo la película.', 'Está haciendo fila para las palomitas.'], answer: 2, why: '«Estoy haciendo fila para las palomitas».', en: 'What is Sofía doing?' },
              { prompt: '¿Qué está haciendo Lucas?', options: ['Está cocinando.', 'Está comprando los boletos.', 'Está hablando por teléfono.'], answer: 1, why: '«Lucas está comprando los boletos».', en: 'What is Lucas doing?' },
              { prompt: '¿Qué tiempo hace?', options: ['Hace frío.', 'Está lloviendo mucho.', 'Hace sol.'], answer: 1, why: '«¡Y está lloviendo mucho!».', en: 'What is the weather like?' },
              { prompt: '¿A qué hora empieza la película hoy?', options: ['A las siete y media.', 'A las ocho y cuarto.', 'A las ocho.'], answer: 1, why: '«Los sábados vamos al cine a las ocho, pero hoy la película empieza a las ocho y cuarto».', en: 'What time does the film start today?' },
            ],
            transcript: 'Hola, Pablo. Soy Sofía otra vez. Son las siete y media y ya estoy en el cine. [[Estoy haciendo|blue]] fila para las palomitas. Lucas [[está comprando|blue]] los boletos y Ana [[está hablando|blue]] por teléfono con su mamá. Aquí hay mucha gente. ¡Y [[está lloviendo|blue]] mucho! ¿Y tú? ¿Todavía [[estás cocinando|blue]]? ¿Irene todavía [[está durmiendo|orange]]? Los sábados [[vamos|teal]] al cine a las ocho, pero hoy la película empieza a las ocho y cuarto. Después de la película vamos a la cafetería del cine. Si quieres venir después de la cena, ahí estamos. Un beso. ¡Adiós!',
            reply: { teacher: 'Tú eres Sofía. Tu alumno es Pablo y responde al mensaje con tres frases: qué está haciendo él, qué están haciendo sus padres y una pregunta para Sofía.', self: 'Responde a Sofía en voz alta como Pablo: qué estás haciendo, qué están haciendo tus padres y una pregunta («¿Qué están haciendo ustedes ahora?»). (Answer as Pablo: what you and your parents are doing, and a question.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Una llamada contigo', coach: 'Responde con estar + gerundio. Answer with estar + -ando / -iendo.',
      steps: [
        { title: '¿Qué estás haciendo? · What are you doing?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú llamas por teléfono a tu alumno y haces las preguntas. Tu alumno responde con frases reales y cortas. Tú repites su frase con la forma correcta y sigues con la repregunta.', self: 'Imagina que Sofía te llama. Lee la pregunta, responde en voz alta y, si quieres, escribe tu respuesta. (Imagine Sofía calls you. Answer aloud.)' } },
          { kind: 'talk', cards: [
            { q: 'Hola, ¿qué estás haciendo ahora mismo? · What are you doing right now?', followUps: ['¿Y después? (And afterwards?)', '¿Estás en casa o en otro lugar? (At home or somewhere else?)'], phrases: ['Ahora [[estoy estudiando|blue]] español.', '[[Estoy hablando|blue]] contigo.', '[[Estoy escuchando|blue]] música.'], hint: '«Estoy» + gerundio: -ar → -ando, -er / -ir → -iendo.', example: 'Ahora estoy estudiando español y estoy bebiendo un café. Estoy en casa.', next: 'Ahora, las personas de tu casa.', teacher: 'Responde tú también: «Yo estoy trabajando: estoy hablando contigo». Así tu alumno oye otra vez la forma.' },
            { q: '¿Y las personas de tu casa? ¿Qué están haciendo? · And the people at home?', followUps: ['¿Alguien está durmiendo? (Is anyone sleeping?)', '¿Alguien está leyendo o viendo la tele? (Reading or watching TV?)'], phrases: ['Mi pareja [[está trabajando|blue]].', 'Mi hermana [[está durmiendo|orange]].', 'Mis padres [[están viendo|blue]] la tele.'], hint: 'Él / ella → está; ellos → están. El gerundio no cambia.', example: 'Mi pareja está trabajando en su oficina y mi perro está durmiendo en el sofá.', next: 'Ahora, tu rutina.' },
            { q: '¿Qué haces normalmente a esta hora? · What do you usually do at this time?', followUps: ['¿Y hoy? ¿Es diferente? (And today? Is it different?)', '¿Y los fines de semana? (And at weekends?)'], phrases: ['Normalmente [[trabajo|teal]] a esta hora.', 'Pero hoy [[estoy descansando|blue]].', 'Los sábados [[como|teal]] con mi familia.'], hint: 'Rutina con presente («normalmente trabajo»); hoy, ahora, con estar + gerundio.', example: 'Normalmente trabajo a esta hora, pero hoy estoy descansando en casa.', next: 'Ahora, una invitación.' },
            { q: 'Vamos al cine esta noche. ¿Vienes? · We are going to the cinema tonight. Are you coming?', followUps: ['¿Por qué no puedes? (Why can’t you?)', '¿Y mañana? (And tomorrow?)'], phrases: ['Hoy no puedo: [[estoy cocinando|blue]].', 'Lo siento, [[estoy estudiando|blue]].', 'Sí, voy. Ahora [[estoy terminando|blue]] mi trabajo.'], hint: 'Explica tu respuesta con lo que estás haciendo ahora.', example: 'Lo siento, hoy no puedo. Estoy cocinando para mis padres. ¿Mañana?', next: 'Ahora, adivina.' },
            { q: 'Escucha los sonidos de la llamada. ¿Qué está pasando? · Listen to the sounds. What is happening?', followUps: ['¿Está lloviendo? (Is it raining?)', '¿Alguien está cantando o hablando? (Is someone singing or talking?)'], phrases: ['[[Está lloviendo|blue]].', 'Alguien [[está hablando|blue]] por teléfono.', 'Los vecinos [[están escuchando|blue]] música.'], hint: 'Describe lo que oyes en este momento con está / están + gerundio.', example: 'Está lloviendo y mis vecinos están escuchando música. ¡Muy alta!', teacher: 'Tú haces un sonido o lo describes («¡Plic, plic!», «¡La la la!») y tu alumno dice qué está pasando.' },
            { q: 'Ahora tú llamas a un amigo: saluda, di qué estás haciendo y pregunta qué está haciendo él. · Now you call a friend.', followUps: ['¿Y tu familia? ¿Qué está haciendo? (And your family?)', '¿Quieres hacer algo esta noche? (Do you want to do something tonight?)'], phrases: ['Hola, ¿qué [[estás haciendo|blue]]?', 'Yo [[estoy cocinando|blue]] / [[estoy leyendo|orange]]…', 'Normalmente [[trabajo|teal]] los sábados, pero hoy…'], hint: 'Cuatro frases: hola, qué estás haciendo tú, una rutina y una pregunta.', example: 'Hola, Ana. ¿Qué estás haciendo? Yo estoy leyendo en el sofá. Normalmente trabajo los sábados, pero hoy no. ¿Vamos al cine?', teacher: 'Responde como el amigo con estar + gerundio. Después, cambian los papeles.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno llama y hace las preguntas («¿Qué estás haciendo?», «¿Qué están haciendo en tu casa?») y tú respondes.', self: 'Ahora tú eres Sofía: haz las preguntas en voz alta («¿Qué estás haciendo?») y responde como Pablo. (Now you are Sofía: ask and answer as Pablo.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Un mensaje para Sofía', coach: 'Ahora y siempre. Now and always.',
      steps: [
        { title: 'Responde a Sofía · Answer Sofía', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos las dos piezas (estar + gerundio) y la diferencia con el presente. Después, tu alumno lee su mensaje en voz alta.', self: 'Escribe tu mensaje y toca «Revisar mi texto». Mira bien estar + -ando / -iendo. (Write your message and tap “Revisar mi texto”.)' } },
          { kind: 'write', title: 'Un mensaje desde casa · A message from home', situation: 'Eres Pablo (o eres tú). Escribe un mensaje a Sofía: qué está pasando ahora en tu casa y por qué hoy no vas al cine. (You are Pablo, or yourself. Write Sofía a message: what is happening at home right now and why you are not going to the cinema today.)', task: [
            'Saluda a Sofía. (Say hello.)',
            'Di qué estás haciendo tú ahora con **estar + gerundio**. (What you are doing now.)',
            'Di qué están haciendo dos personas de tu casa. (What two other people are doing.)',
            'Cuenta un hábito con el presente: «Normalmente…, pero hoy…». (One habit vs. today.)',
            'Haz una pregunta a Sofía. (Ask Sofía a question.)',
          ], starters: ['Hola, Sofía:', 'Ahora estoy …', 'Mi hermano está …', 'Mis padres están …', 'Normalmente …, pero hoy …', '¿Qué estás haciendo tú?', 'Un abrazo.'],
            words: ['estoy', 'estás', 'está', 'estamos', 'están', 'cocinando', 'comiendo', 'leyendo', 'durmiendo', 'viendo', 'ahora', 'normalmente', 'pero hoy'],
            model: 'Hola, Sofía: ¡Gracias por tu mensaje! Ahora [[estoy cocinando|blue]] la cena. Mis padres [[están hablando|blue]] en la cocina conmigo. Irene [[está durmiendo|orange]] porque trabaja de noche, y Mario [[está leyendo|orange]] en el sofá. Normalmente los sábados [[voy|teal]] al cine con ustedes, pero hoy no puedo. ¿Qué película están viendo? Un abrazo, Pablo.',
            minWords: 35,
            checks: [
              { label: 'Estar + gerundio (an action in progress)', pattern: '(?<!\\p{L})(?:estoy|est[aá]s|est[aá]|estamos|est[aá]n)\\s+\\p{L}+(?:ando|iendo|yendo)(?!\\p{L})', tip: 'Di qué está pasando ahora: «Ahora estoy cocinando».' },
              { label: 'Un hábito: normalmente, siempre, los sábados… (a habit)', pattern: '(?<!\\p{L})(?:normalmente|siempre|los\\s+(?:lunes|martes|mi[eé]rcoles|jueves|viernes|s[aá]bados|domingos)|todos\\s+los\\s+d[ií]as)(?!\\p{L})', tip: 'Cuenta lo normal con el presente: «Normalmente voy al cine, pero hoy…».' },
              { label: 'Una pregunta para Sofía (a question)', pattern: '¿[^?]+\\?', tip: 'Termina con una pregunta: «¿Qué estás haciendo tú?».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})(?:estoy|est[aá]s|est[aá]|estamos|est[aá]n)\\s+(?:cocinar|trabajar|leer|dormir|comer|hablar|estudiar|escuchar|ver|escribir|descansar|limpiar|hacer|cenar|lavar|preparar)(?!\\p{L})', why: 'Después de estar va el **gerundio**, no el infinitivo: «estoy cocin**ando**», no «estoy cocinar».' },
              { pattern: '(?<!\\p{L})(?:leiendo|dormiendo)(?!\\p{L})', why: 'Las formas especiales: **leyendo** (con y) y **durmiendo** (con u).' },
              { pattern: '(?<!\\p{L})(?:soy|eres|somos)\\s+\\p{L}+(?:ando|iendo)(?!\\p{L})', why: 'Una acción en desarrollo va con **estar**, no con ser: «estoy cocinando».' },
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
            { tone: 'blue', label: 'ESTAR + GERUNDIO', formula: 'estoy · estás · está · estamos · están + -ando / -iendo', example: 'Ahora estoy cocinando.', caption: 'una acción en desarrollo, ahora', en: 'to be + -ing: happening now' },
            { tone: 'teal', label: 'PRESENTE', formula: 'trabajo · descansa · vamos', example: 'Trabajo todos los días.', caption: 'lo normal, un hábito', en: 'present: what you usually do' },
            { tone: 'orange', label: 'GERUNDIOS ESPECIALES', formula: 'leer → leyendo · dormir → durmiendo', example: 'Mario está leyendo; Irene está durmiendo.', caption: 'dos formas para recordar', en: 'two special forms to remember' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Dos piezas, siempre: **estar** conjugado + **gerundio** (-ando, -iendo). Solo cambia estar; el gerundio, nunca. La rutina va en presente: «Trabajo todos los días»; lo que pasa ahora, con estar + gerundio: «Estoy trabajando ahora».', en: 'Two pieces, always: estar conjugated + gerund (-ando, -iendo). Only estar changes; the gerund never does. Routine goes in the present: “Trabajo todos los días”; what is happening now goes with estar + gerund: “Estoy trabajando ahora”.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'Shh… el bebé de los vecinos ___.', options: ['es durmiendo', 'está durmiendo', 'está dormiendo'], answer: 1, why: 'Él → está; dormir → durmiendo.', en: 'Shh… the neighbours’ baby is sleeping.' },
            { prompt: 'Ahora mismo Ana y yo ___ un café.', options: ['estamos tomar', 'estamos tomando', 'están tomando'], answer: 1, why: 'Ana y yo = nosotros → estamos + tomando.', en: 'Right now Ana and I are having a coffee.' },
            { prompt: 'Todos los días Lucas ___ en una oficina.', options: ['trabaja', 'trabajando', 'está trabajar'], answer: 0, why: '«Todos los días» = hábito: presente, trabaja.', en: 'Lucas works in an office every day.' },
            { prompt: '¿Qué estás ___ ahora?', options: ['leyendo', 'leiendo', 'leer'], answer: 0, why: 'Leer → leyendo, con y.', en: 'What are you reading now?' },
            { prompt: 'Mis amigos están ___ en un restaurante.', options: ['comen', 'comiendo', 'comando'], answer: 1, why: 'Comer (-er) → comiendo.', en: 'My friends are eating in a restaurant.' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Del sábado al lunes.', blocks: [
          { kind: 'lead', text: 'Es lunes por la mañana. Pablo está en el trabajo y su jefa, Elena, llama por teléfono: «¿Qué están haciendo todos?». Escribe las respuestas de Pablo.', en: 'It is Monday morning. Pablo is at work and his boss, Elena, phones: “What is everyone doing?”. Write Pablo’s answers.' },
          { kind: 'rewrite', title: 'En la oficina · At the office', items: [
            { prompt: 'Elena: ¿Qué estás haciendo, Pablo? (Pablo → escribir un correo)', instruction: 'Responde como Pablo con estar + gerundio. Empieza con «Estoy».', accept: ['Estoy escribiendo un correo'] },
            { prompt: 'Elena: ¿Y Carmen? (Carmen → hablar con un cliente)', instruction: 'Responde con ella. Empieza con «Carmen».', accept: ['Carmen está hablando con un cliente'] },
            { prompt: 'Elena: ¿Y Raúl y Luisa? (ellos → leer el informe)', instruction: 'Responde con ellos. Empieza con «Raúl y Luisa».', accept: ['Raúl y Luisa están leyendo el informe'] },
          ] },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 042 · Objeto directo básico: lo, la, los, las', text: 'Ya dices qué estás haciendo: «Estoy cocinando **la sopa**», «Mario está leyendo **el libro**». En la clase 042 aprendes a no repetir esas cosas con **lo, la, los, las**: «¿La sopa? La estoy cocinando». Es el paso natural para hablar con más fluidez.', en: 'You can now say what you are doing: “Estoy cocinando la sopa”. In class 042 you learn not to repeat those things, with lo, la, los, las: “¿La sopa? La estoy cocinando”. It is the natural next step to speak more fluently.', href: '/la-estacion-de-los-dos-destinos', label: 'Ir a la clase 042' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Qué estás haciendo ahora? ¿Y qué haces normalmente a esta hora?». Respuesta esperada: una frase con estar + gerundio y una con presente. Tarea: mandar el mensaje de Escribir a una persona real.' },
        ] },
      ],
    },
  ],
};
