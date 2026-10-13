import type { LiveLesson } from '../types';

/**
 * Lesson 142 · A2 · Pretérito indefinido (hablé, comí).
 * Carla's one-day trip with her sister runs through the class: finished
 * actions, the order of events and closed periods of time.
 */
export const lesson: LiveLesson = {
  id: 142,
  level: 'A2',
  title: 'Pretérito indefinido',
  subtitle: 'Contar qué pasó: acciones terminadas, en orden, en un tiempo que ya se cerró.',
  legend: [
    { tone: 'blue', label: 'Acción terminada · ayer, el sábado, en 2024' },
    { tone: 'teal', label: 'Secuencia · primero, después, al final' },
    { tone: 'orange', label: 'Período cerrado · dos horas, tres años' },
  ],
  optionNotes: {
    'llegaba siempre': '«Llegaba» es imperfecto: describe un hábito del pasado. Aquí hay un día concreto.',
    'ha llegado mañana': '«Ha llegado» es perfecto, y «mañana» es futuro: no combinan con «ayer».',
    'tocaba cada día': '«Tocaba» es imperfecto: un hábito. Aquí es un paso de una secuencia.',
    'he tocado mañana': 'Perfecto y futuro a la vez: no tiene sentido en esta secuencia.',
    'tení': 'Tener es irregular en indefinido: **tuve**.',
    'tenía': '«Tenía» es imperfecto: describe. Aquí hace falta el indefinido.',
    'viajábamos ahora': '«Viajábamos» es imperfecto y «ahora» es presente: no sirve con «en 2024».',
    'hemos viajar': 'Haber necesita participio (viajado). Con «en 2024», además, va el indefinido.',
    hablo: '«Hablo» es presente (yo). El pasado de él o ella es **habló**, con tilde.',
    'fuí': 'Fui, fue, vi, dio: no llevan tilde.',
    'hací': 'Hacer es irregular: **hice**.',
    'hició': 'Hacer es irregular: **hizo**, con z.',
    'estuvió': 'Los irregulares fuertes no llevan tilde: **estuvo**.',
    'tuvó': 'Los irregulares fuertes no llevan tilde: **tuvo**.',
    'llegé': 'Para mantener el sonido «gue», se escribe **llegué**.',
    'ha visitado': '«Ha visitado» es perfecto. Con un tiempo cerrado (ayer, el sábado) se usa el indefinido.',
    'he ido': '«He ido» es perfecto. Con un tiempo cerrado (ayer, el sábado) se usa el indefinido.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'El pretérito indefinido', coach: 'Pasó, terminó y se puede contar.',
      steps: [
        { title: 'Una acción terminada', blocks: [
          { kind: 'lead', text: 'El lunes, Carla cuenta su sábado: «**Fui** a Toledo con mi hermana». El sábado ya terminó y la acción también. Para contar **qué pasó** en un tiempo cerrado, usamos el **indefinido**.', en: 'We use the preterite for finished actions in a finished time.' },
          { kind: 'guide', text: { teacher: 'Lee los ejemplos y pregunta: «¿Cuándo pasó? ¿Ese tiempo ya terminó?». Pide al alumno una acción suya de ayer.', self: 'Lee los ejemplos. Busca la palabra que dice cuándo pasó: ayer, anoche, el sábado…' } },
          { kind: 'concept', tone: 'blue', label: 'ACCIÓN TERMINADA', question: '¿Qué pasó?', en: 'a finished action', formula: ['ayer / anoche / el sábado / la semana pasada / en 2024 + indefinido'],
            meaning: 'Cuenta una acción **terminada** en un tiempo **cerrado**: ayer, anoche, el lunes pasado, en 2024.',
            examples: [
              { es: '[[Anoche cené|blue]] con Laura.', en: 'Last night I had dinner with Laura.' },
              { es: '[[Ayer trabajé|blue]] ocho horas.', en: 'Yesterday I worked eight hours.' },
              { es: '[[El sábado fuimos|blue]] al museo.', en: 'On Saturday we went to the museum.' },
              { es: '[[En 2024 viajamos|blue]] a Chile.', en: 'In 2024 we travelled to Chile.' },
            ],
            note: 'Palabras de tiempo cerrado: **ayer**, **anoche**, **anteayer**, **el lunes**, **la semana pasada**, **el año pasado**, **en 2020**, **hace dos días**.' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'Ayer Ana ___ temprano.', options: ['llegó', 'llegaba siempre', 'ha llegado mañana'], answer: 0, why: '«Ayer» es un tiempo cerrado: llegó.' },
            { prompt: '¿Qué palabra marca un tiempo **cerrado**?', options: ['hoy', 'anoche', 'ahora'], answer: 1, why: 'Anoche ya terminó. Hoy y ahora incluyen el presente.' },
          ] },
        ] },
        { title: 'Las formas regulares', mascot: '/brand/mascot/studying.webp', coach: 'Dos grupos: -ar y -er / -ir.', blocks: [
          { kind: 'table', title: 'Indefinido regular', head: ['Persona', 'hablar', 'comer', 'vivir'], rows: [
            ['yo', 'habl**é**', 'com**í**', 'viv**í**'],
            ['tú', 'habl**aste**', 'com**iste**', 'viv**iste**'],
            ['él / ella / usted', 'habl**ó**', 'com**ió**', 'viv**ió**'],
            ['nosotros / nosotras', 'habl**amos**', 'com**imos**', 'viv**imos**'],
            ['vosotros / vosotras', 'habl**asteis**', 'com**isteis**', 'viv**isteis**'],
            ['ellos / ellas / ustedes', 'habl**aron**', 'com**ieron**', 'viv**ieron**'],
          ], note: '**-er** e **-ir** tienen las mismas terminaciones. Vosotros se usa en España; en América Latina, ustedes.' },
          { kind: 'tip', icon: '🎯', title: 'La tilde cambia todo', text: '«Hablo» (yo, presente) no es «habl**ó**» (él, pasado). La tilde en **-é** y **-ó** marca el pasado: «Yo trabaj**é**» · «Ella trabaj**ó**».', en: 'hablo = I speak · habló = he/she spoke' },
          { kind: 'tip', icon: '🔁', title: 'Nosotros: igual que el presente', text: 'Con -ar y -ir, la forma de nosotros es igual en presente y en indefinido: habl**amos**, viv**imos**. La palabra de tiempo decide: «**Ayer** hablamos con Julia».', en: 'Context tells you if “hablamos” is present or past.' },
          { kind: 'tip', icon: '✏', title: 'Cambios de letra con yo', text: 'Para mantener el sonido: lle**g**ar → lle**gu**é · bus**c**ar → bus**qu**é · empe**z**ar → empe**c**é. Solo cambia la forma de yo.' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'Ayer mi hermana ___ con el médico.', options: ['habló', 'hablo', 'hablaron'], answer: 0, why: 'Ella → habló, con tilde.' },
            { prompt: 'El año pasado mis primos ___ en Quito.', options: ['vivieron', 'vivimos', 'vivió'], answer: 0, why: 'Ellos → viv + ieron.' },
            { prompt: 'Anoche ___ a casa a las once.', options: ['llegé', 'llegué', 'llegue'], answer: 1, why: 'Llegar, yo: llegué (con u y con tilde).' },
          ] },
        ] },
        { title: 'Verbos irregulares frecuentes', mascot: '/autoestudio/mascot/noting.webp', coach: 'Pocos verbos, muy frecuentes.', blocks: [
          { kind: 'lead', text: 'Algunos verbos muy frecuentes tienen una **raíz nueva** y terminaciones propias, **sin tilde**: tuv-e, hic-e, estuv-e.', en: 'Common irregular verbs have a new stem and no written accent.' },
          { kind: 'table', title: 'Irregulares del indefinido', head: ['Infinitivo', 'yo', 'tú', 'él / ella', 'nosotros', 'ellos'], rows: [
            ['ir / ser', '**fui**', 'fuiste', '**fue**', 'fuimos', 'fueron'],
            ['tener', '**tuve**', 'tuviste', '**tuvo**', 'tuvimos', 'tuvieron'],
            ['estar', '**estuve**', 'estuviste', '**estuvo**', 'estuvimos', 'estuvieron'],
            ['hacer', '**hice**', 'hiciste', '**hizo**', 'hicimos', 'hicieron'],
            ['poder', '**pude**', 'pudiste', '**pudo**', 'pudimos', 'pudieron'],
            ['poner', '**puse**', 'pusiste', '**puso**', 'pusimos', 'pusieron'],
            ['decir', '**dije**', 'dijiste', '**dijo**', 'dijimos', '**dijeron**'],
          ], note: 'Ir y ser tienen las mismas formas: «**Fui** al cine» (ir) · «**Fue** un día bonito» (ser). El contexto decide.' },
          { kind: 'tip', icon: '⚠', title: 'Sin tilde', text: 'Las formas irregulares fuertes no llevan tilde: tuve, tuvo, hice, puso. Tampoco fui, fue, vi, vio.' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'El indefinido de **tener** (yo) es…', options: ['tuve', 'tení', 'tenía'], answer: 0, why: 'Tener tiene raíz irregular: tuv- → tuve.' },
            { prompt: 'El domingo Julia ___ una tarta para todos.', options: ['hizo', 'hició', 'hace'], answer: 0, why: 'Hacer, ella: hizo (con z, sin tilde).' },
          ] },
        ] },
        { title: 'Secuencias y períodos cerrados', mascot: '/brand/mascot/speaking.webp', coach: 'Una acción tras otra.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'SECUENCIA', question: '¿Y después?', en: 'a sequence of events', formula: ['primero… / después… / luego… / al final… + indefinido'],
            meaning: 'Varias acciones en indefinido, una detrás de otra, **hacen avanzar la historia**.',
            examples: [
              { es: '[[Entró|teal]], [[saludó|teal]] y [[se sentó|teal]].', en: 'He came in, said hello and sat down.' },
              { es: '[[Primero compramos|teal]] un mapa y [[después visitamos|teal]] el mercado.', en: 'First we bought a map and then we visited the market.' },
              { es: '[[Al final volvimos|teal]] en el último autobús.', en: 'In the end we came back on the last bus.' },
            ] },
          { kind: 'concept', tone: 'orange', label: 'PERÍODO CERRADO', question: '¿Cuánto tiempo duró?', en: 'a finished period', formula: ['indefinido + dos horas / tres años / toda la tarde', 'indefinido + de 2020 a 2023'],
            meaning: 'Dice **cuánto duró** algo que **ya terminó**. Aunque fue largo, lo vemos completo, con principio y fin.',
            examples: [
              { es: '[[Pasamos dos horas|orange]] en el museo.', en: 'We spent two hours at the museum.' },
              { es: '[[Trabajé tres años|orange]] en un hotel.', en: 'I worked in a hotel for three years.' },
              { es: 'El viaje [[duró un solo día|orange]].', en: 'The trip lasted just one day.' },
            ] },
          { kind: 'tip', icon: '⏹', title: '¿Sigue hoy?', text: '«**Trabajé** tres años en un hotel»: ya no trabajo allí. Si sigues allí, usa el presente: «Trabajo en un hotel desde hace tres años».' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'Primero ___ el timbre y después entré.', options: ['toqué', 'tocaba cada día', 'he tocado mañana'], answer: 0, why: 'Una secuencia de acciones terminadas: toqué, entré.' },
            { prompt: '«Estuve dos años en Lima.» ¿Sigo en Lima?', options: ['Sí.', 'No, ese período terminó.'], answer: 1, why: 'Indefinido + duración: un período cerrado.' },
          ] },
        ] },
        { title: 'Cómo elegir', mascot: '/brand/mascot/seated.webp', coach: 'Mira cuándo pasó.', blocks: [
          { kind: 'decide', title: 'Quieres contar algo del pasado. Responde', steps: [
            { q: '¿La acción y el tiempo ya terminaron (ayer, el sábado, en 2024, de 2020 a 2023)?', yes: 'next', no: 'Si el tiempo incluye hoy (hoy, esta semana), puedes usar el perfecto: «Hoy **he trabajado** mucho». Si sigue, usa el presente.' },
            { q: '¿Cuentas qué pasó, una acción tras otra o cuánto duró?', yes: 'Usa el **indefinido**: «[[Ayer trabajé|blue]] ocho horas» · «[[Primero compramos|teal]] un mapa» · «[[Pasamos dos horas|orange]] allí».', no: 'Si describes cómo era algo o un hábito del pasado, vas a necesitar el **imperfecto** (otra clase): «Antes trabajaba en un hotel».' },
          ] },
          { kind: 'tip', icon: '🌎', title: 'Vas a escuchar también', text: 'En gran parte de América Latina se usa el indefinido también con hoy: «Hoy **trabajé** mucho». En España se prefiere «Hoy **he trabajado** mucho». Las dos se entienden.' },
        ] },
        { title: 'Errores frecuentes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Ojo con la tilde.', blocks: [
          { kind: 'guide', text: { teacher: 'Pide al alumno que encuentre el error antes de mostrar la corrección.', self: 'Lee cada frase, busca el error y después toca para ver la corrección.' } },
          { kind: 'mistakes', title: '¿Dónde está el error?', items: [
            { wrong: 'Ayer ella hablo con su jefe.', right: 'Ayer ella habló con su jefe.', why: 'Sin tilde, «hablo» es presente con yo. Pasado de ella: habló.' },
            { wrong: 'El sábado tuvó una fiesta.', right: 'El sábado tuvo una fiesta.', why: 'Los irregulares fuertes no llevan tilde.' },
            { wrong: 'Anoche yo hací la cena.', right: 'Anoche yo hice la cena.', why: 'Hacer es irregular: hice.' },
            { wrong: 'Ayer he ido al cine.', right: 'Ayer fui al cine.', why: 'Con «ayer», un tiempo cerrado, se usa el indefinido.' },
            { wrong: 'El lunes llegé tarde.', right: 'El lunes llegué tarde.', why: 'Llegar, yo: llegué, con u.' },
            { wrong: 'Mis amigos fueron a la playa y comió paella.', right: 'Mis amigos fueron a la playa y comieron paella.', why: 'Mis amigos = ellos: comieron.' },
          ] },
          { kind: 'teacher', text: 'Pide tres acciones del alumno de ayer, en orden, con primero, después y al final.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'El indefinido en situaciones reales', coach: 'Toca las expresiones marcadas.',
      steps: [
        { title: 'Una visita de un día', blocks: [
          { kind: 'guide', text: { teacher: 'Lean el diálogo con papeles. Después, el alumno toca cada expresión y explica qué información da: una acción, un paso de la secuencia o una duración.', self: 'Lee el diálogo. Después toca cada expresión marcada para descubrir por qué se usó.' } },
          { kind: 'explore', title: 'El lunes en la oficina', setting: 'Lunes por la mañana. Sofía pregunta a Carla por su fin de semana.', lines: [
            { who: 'Sofía', text: 'Hola, Carla. ¿Qué tal el fin de semana?' },
            { who: 'Carla', text: '¡Muy bien! [[El sábado fui|blue]] a Toledo con mi hermana.' },
            { who: 'Sofía', text: '¡Qué bonito! ¿A qué hora salieron?' },
            { who: 'Carla', text: '[[Salimos a las ocho|teal]] y [[llegamos antes de las diez|teal]].' },
            { who: 'Sofía', text: '¿Y qué hicieron?' },
            { who: 'Carla', text: '[[Primero compramos|teal]] un mapa y [[visitamos|teal]] el mercado. Mi hermana [[eligió|blue]] un regalo para nuestra madre.' },
            { who: 'Sofía', text: '¿Comieron allí?' },
            { who: 'Carla', text: 'Sí, [[después comimos|teal]] en una plaza. Por la tarde [[entramos|teal]] en un museo pequeño.' },
            { who: 'Sofía', text: '¿Les gustó?' },
            { who: 'Carla', text: 'Mucho. [[Pasamos dos horas|orange]] allí. Al final [[volvimos|teal]] en el último autobús.' },
            { who: 'Sofía', text: '¿Solo un día? ¡Qué rápido!' },
            { who: 'Carla', text: 'Sí, [[el viaje duró un solo día|orange]], pero [[fue|blue]] perfecto.' },
          ], notes: {
            'El sábado fui': '«El sábado» ya terminó. **Fui** es el indefinido de ir: una acción terminada.',
            'Salimos a las ocho': 'El **primer paso** de la historia. «Salimos» con nosotros es igual que el presente: el contexto (el sábado) dice que es pasado.',
            'llegamos antes de las diez': 'El **segundo paso**: después de salir, llegaron.',
            'Primero compramos': '«**Primero**» ordena la secuencia: una acción terminada y después otra.',
            'visitamos': 'Otro paso de la secuencia: hace avanzar el relato.',
            'eligió': 'Una acción terminada de la hermana (ella): eligió.',
            'después comimos': '«**Después**» marca el paso siguiente. Comer, nosotros: comimos.',
            'entramos': 'Otro paso: por la tarde, entraron en el museo.',
            'Pasamos dos horas': 'Una **duración cerrada**: dos horas, con principio y fin.',
            'volvimos': '«**Al final**»: el último paso de la historia.',
            'el viaje duró un solo día': 'Un **período cerrado**: el viaje empezó y terminó el mismo día.',
            'fue': 'Ser en indefinido: **fue**. Una valoración del día completo, ya terminado.',
          } },
          { kind: 'choice', title: '¿Entendiste?', items: [
            { prompt: '¿Qué hicieron primero en Toledo?', options: ['Compraron un mapa.', 'Comieron en una plaza.', 'Entraron en un museo.'], answer: 0, why: '«Primero compramos un mapa y visitamos el mercado».' },
            { prompt: '¿Cuánto tiempo pasaron en el museo?', options: ['Una hora.', 'Dos horas.', 'Todo el día.'], answer: 1, why: '«Pasamos dos horas allí».' },
            { prompt: '¿Cómo volvieron a casa?', options: ['En el último autobús.', 'En tren.', 'En coche con la madre.'], answer: 0, why: '«Al final volvimos en el último autobús».' },
          ] },
        ] },
        { title: '¿Acción, secuencia o duración?', blocks: [
          { kind: 'classify', title: 'Clasifica las frases', categories: [
            { id: 'accion', label: 'Acción terminada', tone: 'blue' },
            { id: 'secuencia', label: 'Paso de una secuencia', tone: 'teal' },
            { id: 'periodo', label: 'Período cerrado', tone: 'orange' },
          ], items: [
            { text: 'El sábado fui a Toledo.', answer: 'accion', why: 'Una acción terminada en un día cerrado.' },
            { text: 'Primero compramos un mapa.', answer: 'secuencia', why: '«Primero» empieza la secuencia.' },
            { text: 'Pasamos dos horas en el museo.', answer: 'periodo', why: '«Dos horas»: cuánto duró.' },
            { text: 'Al final volvimos en el último autobús.', answer: 'secuencia', why: '«Al final»: el último paso.' },
            { text: 'Trabajé tres años en un hotel.', answer: 'periodo', why: 'Tres años, un período que terminó.' },
            { text: 'Anoche cené con Laura.', answer: 'accion', why: '«Anoche»: una acción terminada.' },
          ] },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Busca la palabra de tiempo.',
      steps: [
        { title: 'Elige según el contexto', blocks: [
          { kind: 'choice', items: [
            { context: 'Ana llegó a las siete de la mañana.', prompt: 'Ayer Ana ___ temprano.', options: ['llegó', 'llegaba siempre', 'ha llegado mañana'], answer: 0, why: '«Ayer»: tiempo cerrado. Ella → llegó.' },
            { context: 'Un viaje de tu familia.', prompt: 'Nosotros ___ a Chile en 2024.', options: ['viajamos', 'viajábamos ahora', 'hemos viajar'], answer: 0, why: '«En 2024» fija el pasado: viajamos.' },
            { context: 'Le preguntas a tu amigo por el sábado.', prompt: '¿Qué ___ el sábado?', options: ['hiciste', 'haciste', 'hizo'], answer: 0, why: 'Hacer, tú: hiciste.' },
            { context: 'Tus padres, el verano pasado.', prompt: 'Mis padres ___ en la playa dos semanas.', options: ['estuvieron', 'estuvimos', 'estuvió'], answer: 0, why: 'Ellos → estuvieron.' },
            { context: 'Cuentas tu tarde de ayer.', prompt: 'Ayer ___ al centro después del trabajo.', options: ['fui', 'fuí', 'he ido'], answer: 0, why: 'Ir, yo: fui, sin tilde.' },
            { context: 'Tu jefa, en la reunión del lunes.', prompt: 'En la reunión, la jefa nos ___ la noticia.', options: ['dijo', 'dició', 'decía siempre'], answer: 0, why: 'Decir, ella: dijo.' },
          ] },
        ] },
        { title: 'Compara los significados', blocks: [
          { kind: 'choice', items: [
            { prompt: '¿Qué frase habla del **pasado**?', options: ['Mi hermano trabajó en Lima.', 'Mi hermano trabajo en Lima.'], answer: 0, why: 'Trabajó (él, pasado), con tilde. «Trabajo» es presente de yo y no concuerda con «mi hermano».' },
            { prompt: '«Estuve tres años en Bogotá.» ¿Qué significa?', options: ['Ya no vivo en Bogotá.', 'Vivo en Bogotá ahora.', 'Voy a ir a Bogotá.'], answer: 0, why: 'Un período cerrado: los tres años terminaron.' },
            { prompt: '«Hablamos con Julia» puede ser presente o pasado. ¿Qué frase es pasado?', options: ['Ayer hablamos con Julia.', 'Siempre hablamos con Julia.'], answer: 0, why: '«Ayer» fija el pasado.' },
            { prompt: '«Fue un día largo.» ¿Qué verbo es?', options: ['Ser.', 'Ir.', 'Hacer.'], answer: 0, why: '«Fue un día largo» describe: ser. «Fue al cine» sería ir.' },
          ] },
        ] },
        { title: 'Encuentra el error', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Anoche cenamos en un restaurante peruano.', ok: true, why: 'Correcta: anoche + cenamos.' },
            { sentence: 'El domingo mi madre preparo una paella.', ok: false, options: ['El domingo mi madre preparó una paella.', 'El domingo mi madre preparé una paella.', 'El domingo mi madre preparaba una paella.'], answer: 0, why: 'Ella → preparó, con tilde.' },
            { sentence: 'El año pasado hací un curso de cocina.', ok: false, options: ['El año pasado hice un curso de cocina.', 'El año pasado hicé un curso de cocina.', 'El año pasado hicí un curso de cocina.'], answer: 0, why: 'Hacer, yo: hice.' },
            { sentence: 'Ayer he visitado a mi abuela.', ok: false, options: ['Ayer visité a mi abuela.', 'Ayer visita a mi abuela.', 'Ayer visitaré a mi abuela.'], answer: 0, why: '«Ayer»: tiempo cerrado. Indefinido: visité.' },
            { sentence: 'Pasamos una semana en Cartagena.', ok: true, why: 'Correcta: un período cerrado.' },
            { sentence: 'Los niños tuvó un examen el viernes.', ok: false, options: ['Los niños tuvieron un examen el viernes.', 'Los niños tuvo un examen el viernes.', 'Los niños tenieron un examen el viernes.'], answer: 0, why: 'Ellos → tuvieron.' },
          ] },
        ] },
        { title: 'Completa la conversación', blocks: [
          { kind: 'chat-fill', title: '¿Qué hiciste ayer?', lines: [
            { who: 'Julia', text: '¡Hola! ¿Qué ___ ayer por la tarde?', options: ['hiciste', 'hizo', 'hice'], answer: 0, why: 'Julia pregunta a su amigo: tú → hiciste.' },
            { who: 'Andrés', text: 'Primero ___ a la estación a comprar los boletos.', options: ['fui', 'fue', 'iba'], answer: 0, why: 'Andrés habla de él: yo → fui.' },
            { who: 'Julia', text: '¿Y después?' },
            { who: 'Andrés', text: 'Después ___ un café con mi hermano.', options: ['tomé', 'tomo', 'tomó'], answer: 0, why: 'Yo → tomé, con tilde.' },
            { who: 'Julia', text: '¿___ al museo?', options: ['Fueron', 'Fuimos', 'Fue'], answer: 0, why: 'Julia pregunta por los dos (ustedes): fueron.' },
            { who: 'Andrés', text: 'No, no ___: llegamos tarde.', options: ['pudimos', 'podimos', 'pudieron'], answer: 0, why: 'Nosotros → pudimos (poder es irregular).' },
            { who: 'Andrés', text: 'Al final ___ a casa a las ocho.', options: ['volví', 'volvió', 'volvía'], answer: 0, why: 'Yo → volví.' },
          ] },
        ] },
        { title: 'Construye y transforma', blocks: [
          { kind: 'build', title: 'Ordena las palabras', items: [
            { tiles: ['saludó', 'Entró', 'y', 'se sentó'], accept: ['Entró saludó y se sentó', 'Entró se sentó y saludó'], en: 'He came in, said hello and sat down.' },
            { tiles: ['pasado', 'El sábado', 'fuimos', 'al museo'], accept: ['El sábado pasado fuimos al museo', 'Fuimos al museo el sábado pasado'], en: 'Last Saturday we went to the museum.' },
            { tiles: ['dos horas', 'Pasamos', 'en el mercado'], accept: ['Pasamos dos horas en el mercado'], en: 'We spent two hours at the market.' },
          ] },
          { kind: 'rewrite', title: 'Cuéntalo en pasado', items: [
            { prompt: 'Trabajo en Lima. (Período: de 2021 a 2024)', instruction: 'Cierra el período con el indefinido.', accept: ['Trabajé en Lima de 2021 a 2024', 'De 2021 a 2024 trabajé en Lima', 'Trabajé en Lima desde 2021 hasta 2024'] },
            { prompt: 'Hoy hago la compra.', instruction: 'Cámbialo a «ayer».', accept: ['Ayer hice la compra', 'Ayer yo hice la compra', 'Hice la compra ayer'] },
            { prompt: 'Mi hermano llega a las diez.', instruction: 'Cámbialo a «anoche».', accept: ['Anoche mi hermano llegó a las diez', 'Mi hermano llegó a las diez anoche', 'Anoche mi hermano llegó a las 10'] },
            { prompt: 'Llegar a casa, abrir la ventana, sentarse.', instruction: 'Escribe una secuencia en pasado con ella.', accept: ['Llegó a casa, abrió la ventana y se sentó', 'Ella llegó a casa, abrió la ventana y se sentó', 'Primero llegó a casa, después abrió la ventana y se sentó', 'Llegó a casa abrió la ventana y se sentó'] },
          ] },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Una tarde diferente', coach: 'Primero escucha sin leer.',
      steps: [
        { title: 'Una tarde diferente', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha con la idea general. En la segunda, el alumno ordena las acciones de la tarde en una lista.', self: 'Escucha una vez para la idea general. En la segunda escucha, anota las acciones en orden.' } },
          { kind: 'listen', title: 'Una tarde diferente', channel: 'NOTA DE VOZ · PARA SOFÍA', src: '/audio/grammar-classroom/142.mp3',
            before: 'Una amiga cuenta qué hizo ayer después del trabajo. ¿Qué crees que hizo?',
            gist: { prompt: '¿Cómo fue la tarde de ayer?', options: ['Tranquila, pero hizo varias cosas.', 'Muy aburrida: no hizo nada.', 'Muy mala: perdió el tren.'], answer: 0, why: '«Al final tuve una tarde tranquila, aunque hice varias cosas».' },
            details: [
              { prompt: '¿A qué hora salió de la oficina?', options: ['A las cinco.', 'A las ocho.', 'A la una.'], answer: 0, why: 'Dice que salió «de la oficina a las cinco».' },
              { prompt: '¿Qué hizo en la estación?', options: ['Compró los billetes para el fin de semana.', 'Tomó un café con Julia.', 'Esperó a su hermana.'], answer: 0, why: '«Fui a la estación. Compré los billetes para el fin de semana».' },
              { prompt: '¿Cuánto tiempo habló con Julia?', options: ['Casi una hora.', 'Dos horas.', 'Diez minutos.'], answer: 0, why: '«Hablamos casi una hora».' },
              { prompt: '¿Qué hizo al volver a casa?', options: ['Preparó la cena y envió un mensaje.', 'Visitó el museo.', 'Llamó a Julia.'], answer: 0, why: '«Volví a casa a las ocho, preparé la cena y envié un mensaje al grupo».' },
              { prompt: '¿Por qué no visitó el museo?', options: ['Porque llegó tarde.', 'Porque estaba cerrado.', 'Porque no le gusta.'], answer: 0, why: '«No visité el museo porque llegué tarde».' },
            ],
            transcript: 'Hola, [[ayer hice|blue]] una visita rápida al centro. [[Salí|teal]] de la oficina a las cinco y [[fui|teal]] a la estación. [[Compré|teal]] los billetes para el fin de semana y [[después tomé|teal]] un café con Julia. [[Hablamos casi una hora|orange]]. [[Volví|teal]] a casa a las ocho, [[preparé|teal]] la cena y [[envié|teal]] un mensaje al grupo. No [[visité|blue]] el museo porque [[llegué|blue]] tarde. [[Al final tuve|teal]] una tarde tranquila, aunque [[hice|blue]] varias cosas.',
            reply: { teacher: 'El alumno responde con su tarde de ayer: tres acciones en orden y una cosa que no hizo.', self: 'Responde en voz alta: ¿qué hiciste tú ayer por la tarde? Cuenta tres acciones en orden con primero, después y al final.' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: '¿Qué pasó?', coach: 'Cuenta tu historia en orden.',
      steps: [
        { title: '¿Qué pasó?', blocks: [
          { kind: 'guide', text: { teacher: 'No hace falta usar todas las preguntas. Sigue lo que el alumno quiere contar, pide detalles y ordena la historia con él.', self: 'Responde cada pregunta en voz alta. Ordena tu historia con primero, después y al final.' } },
          { kind: 'talk', cards: [
            { q: '¿Qué hiciste ayer después del trabajo o de las clases?', followUps: ['¿A qué hora llegaste a casa?', '¿Cenaste solo o con alguien?', '¿Hiciste algo diferente?'], phrases: ['[[Ayer llegué|blue]] a casa a las…', '[[Después preparé|teal]]…', '[[Al final vi|teal]] una serie.'], hint: 'Con yo, muchos verbos en -ar terminan en -é: llegué, preparé, cené.', example: 'Ayer llegué a casa a las seis. Primero preparé la cena y después llamé a mi madre. Al final vi una serie.', next: 'Ahora piensa en el fin de semana pasado.' },
            { q: '¿Qué hiciste el fin de semana pasado?', followUps: ['¿Con quién estuviste?', '¿Adónde fuiste?', '¿Qué fue lo mejor?'], phrases: ['[[El sábado fui|blue]] a…', '[[Estuve|blue]] con…', 'Lo mejor [[fue|blue]]…'], hint: 'Ir y ser: fui, fue. Estar: estuve.', example: 'El sábado fui al mercado con mi pareja. El domingo estuve en casa y lo mejor fue la comida con mis amigos.', next: 'Hablemos de un viaje corto.' },
            { q: 'Cuenta una visita de un día que recuerdas bien.', followUps: ['¿A qué hora salieron?', '¿Qué hicieron primero?', '¿Cuánto tiempo pasaron allí?'], phrases: ['[[Salimos|teal]] a las…', '[[Primero visitamos|teal]]…', '[[Pasamos|orange]] … horas en…'], hint: 'Ordena la historia en cinco pasos: salida, dos actividades, comida y regreso.', example: 'Hace un mes fui a un pueblo con mi familia. Salimos a las nueve. Primero visitamos la iglesia y después comimos en una plaza. Pasamos tres horas allí y volvimos por la tarde.', next: 'Ahora, una época de tu vida.', teacher: 'Dibuja una línea del tiempo mientras el alumno habla y pídele que corrija el orden si hace falta.' },
            { q: '¿En qué otro lugar trabajaste o estudiaste antes?', followUps: ['¿Cuánto tiempo estuviste allí?', '¿Qué aprendiste?', '¿Por qué terminaste?'], phrases: ['[[Trabajé|orange]] dos años en…', '[[Estudié|orange]] en… de 2018 a 2021.', 'Allí [[mejoré|blue]]…'], hint: 'Para un período cerrado: indefinido + duración («dos años») o «de… a…».', example: 'Trabajé tres años en una tienda de ropa, de 2019 a 2022. Allí mejoré mucho mi inglés.', next: 'Hablemos de algo que no salió bien.' },
            { q: '¿Recuerdas un día en que todo salió mal?', followUps: ['¿Qué pasó primero?', '¿Qué no pudiste hacer?', '¿Cómo terminó el día?'], phrases: ['[[Primero llegué|teal]] tarde a…', 'No [[pude|blue]]…', '[[Al final|teal]]…'], hint: 'Cuenta el problema en orden y termina con «al final».', example: 'Primero el autobús no llegó y llegué tarde a una reunión. Después no pude encontrar mis llaves. Al final mi vecino me ayudó.', next: 'Para terminar, una decisión.' },
            { q: 'Piensa en dos días pasados: ¿cuál repetirías y por qué?', followUps: ['¿Qué hiciste ese día?', '¿Cuánto duró la actividad?', '¿Qué decisión cambió el día?'], phrases: ['Ese día [[fui|blue]]…', '[[Escogí|blue]]…', 'La actividad [[duró|orange]]…'], hint: '«Repetirías» es una fórmula para opinar. Responde: «Repetiría el día que…» y cuenta qué hiciste.', example: 'Repetiría el día que fui a la montaña con mis primos. Caminamos cuatro horas y comimos en un refugio. Fue un día increíble.', teacher: 'La pregunta usa el condicional solo como fórmula. No hace falta explicarlo.' },
          ], swap: { teacher: 'Al final, cambien los papeles: el alumno te pregunta qué hiciste ayer y ordena tu historia.', self: 'Escribe tres preguntas con «¿Qué hiciste…?», «¿Adónde fuiste…?» y «¿Cuánto tiempo…?» y házselas a alguien esta semana.' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Una visita terminada', coach: 'Cuenta tu visita paso a paso.',
      steps: [
        { title: 'Una visita terminada', blocks: [
          { kind: 'guide', text: { teacher: 'Puede escribir en clase o como tarea. Revisen juntos las tildes y los irregulares.', self: 'Escribe tu mensaje y toca «Revisar mi texto». Mira bien las tildes: habló, llegué.' } },
          { kind: 'write', title: 'Cuéntale tu visita a un amigo', situation: 'Hace poco hiciste una visita de un día: a una ciudad, un pueblo, un parque o un museo. Escribe un mensaje a un amigo.', task: [
            'Di **cuándo** fuiste, adónde y con quién.',
            'Cuenta la salida y **dos actividades**, en orden.',
            'Di **cuánto tiempo** pasaste en un lugar.',
            'Cuenta el regreso y da tu opinión del día.',
          ], starters: ['El sábado pasado fui a…', 'Salimos a las…', 'Primero…', 'Después…', 'Pasamos… horas en…', 'Al final volvimos…', 'Fue un día…'],
            words: ['fui', 'salimos', 'llegamos', 'visitamos', 'compramos', 'pasamos', 'volvimos', 'primero', 'después', 'al final'],
            model: '[[El sábado fui|blue]] al centro con mi hermana. [[Salimos|teal]] a las nueve y [[compramos|teal]] un regalo en el mercado. [[Después comimos|teal]] en una plaza y [[visitamos|teal]] el museo. [[Pasamos dos horas|orange]] allí. [[Volvimos|teal]] a casa a las siete y [[envié|blue]] las fotos a nuestra madre. [[Fue|blue]] una visita corta y agradable.',
            minWords: 40 },
        ] },
      ],
    },
    {
      id: 'cerrar', label: 'Cerrar', icon: '✓', mascot: '/brand/mascot/standing.webp',
      title: 'Lo esencial', coach: '¿Qué te llevas hoy?',
      steps: [
        { title: 'Lo esencial', blocks: [
          { kind: 'recap', items: [
            { tone: 'blue', label: 'ACCIÓN TERMINADA', formula: 'ayer / el sábado + indefinido', example: 'Ayer trabajé ocho horas.', caption: 'Pasó y terminó.', en: 'finished action' },
            { tone: 'teal', label: 'SECUENCIA', formula: 'primero… después… al final…', example: 'Llegó, saludó y se sentó.', caption: 'Una acción tras otra.', en: 'sequence' },
            { tone: 'orange', label: 'PERÍODO CERRADO', formula: 'indefinido + duración', example: 'Pasamos dos horas allí.', caption: 'Duró y terminó.', en: 'finished period' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'Formas', text: '-ar: **-é, -aste, -ó, -amos, -aron**. -er / -ir: **-í, -iste, -ió, -imos, -ieron**. Irregulares sin tilde: fui, tuve, estuve, hice, pude, puse, dije.' },
        ] },
        { title: 'Desafío final', blocks: [
          { kind: 'choice', title: 'Cuatro frases, sin ayuda', items: [
            { prompt: 'La semana pasada mis amigos ___ a Cusco.', options: ['viajaron', 'viajó', 'viajamos'], answer: 0, why: 'Mis amigos = ellos: viajaron.' },
            { prompt: 'Anoche ___ una película muy buena.', options: ['vi', 'ví', 'veí'], answer: 0, why: 'Ver, yo: vi, sin tilde.' },
            { prompt: 'Primero Pedro ___ la puerta y después entró.', options: ['abrió', 'abro', 'abría'], answer: 0, why: 'Una secuencia: abrió, entró.' },
            { prompt: '«Estuvimos un mes en México.» ¿Siguen allí?', options: ['No, el período terminó.', 'Sí, siguen allí.'], answer: 0, why: 'Indefinido + duración: período cerrado.' },
          ] },
        ] },
        { title: 'Tus errores y repaso', blocks: [
          { kind: 'review' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «Di tres acciones terminadas de ayer, en orden». Respuesta posible: «Terminé el trabajo, compré pan y volví a casa».' },
        ] },
      ],
    },
  ],
};
