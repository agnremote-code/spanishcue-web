import type { LiveLesson } from '../types';

/**
 * Lesson 406 · B1 · Perífrasis incoativas: empezar a, ponerse a (course unit G106).
 * Builds on G082 (empezar a / acabar de / volver a previewed at A2, ponerse a as
 * an extension), G061 (ponerse + adjective), G065 (pronoun position with the
 * infinitive) and G050 (imperfect scene + preterite event). G107 (seguir +
 * gerundio, dejar de) follows. Scene: Natalia Ferrer directs «La Escalera», an
 * amateur theatre group at a neighbourhood cultural centre. On Thursday, at the
 * dress rehearsal, they were about to start when it began to pour and the power
 * went; Marcos (lights) looked for torches, Rodrigo (lead actor) meddled with
 * the fuses; in the saddest scene Rodrigo burst out laughing; at the end Elena
 * burst into tears. On Friday Natalia tells Luisa Montero, the centre
 * coordinator, and sends the group a voice message (Colombian voice, ustedes).
 * The opening night is on Saturday.
 * Content: empezar a / comenzar a (neutral start, also states and processes;
 * comenzar more formal); ponerse a (sudden or decided start, activity verbs, not
 * states); echarse a + reír / llorar / correr / temblar (abrupt, near-fixed);
 * prospective phase: estar a punto de (imminent), estaba a punto de… cuando
 * (interrupted), estuve a punto de (it nearly happened), ir a (plan). Tenses:
 * se puso a llover, me eché a reír, he empezado a. Pronouns: empecé a leerlo /
 * lo empecé a leer; me puse a leerlo (me lo puse a leer sounds forced); se echó
 * a reír (not *reírse). Contrast: ponerse nervioso (G061) / ponerse a temblar;
 * empezar por + infinitive. Receptive: romper a, meterse a. Ampliación: romper a,
 * meterse a, comenzar in formal texts, estar por + inf. in many areas of Latin
 * America. Anchor: Empezó a llover al salir. Instructions use tú.
 */
export const lesson: LiveLesson = {
  id: 406,
  level: 'B1',
  title: 'Perífrasis incoativas: empezar a, ponerse a',
  subtitle: 'Contar cómo empieza algo: de forma neutra, de repente o justo antes, con empezar a, ponerse a, echarse a y estar a punto de.',
  legend: [
    { tone: 'blue', label: 'EMPEZAR A · COMENZAR A · el inicio neutro (to start)' },
    { tone: 'orange', label: 'PONERSE A · ECHARSE A · ROMPER A · inicio repentino o decidido (sudden start)' },
    { tone: 'teal', label: 'ESTAR A PUNTO DE · IR A · justo antes del inicio (about to)' },
    { tone: 'violet', label: 'MARCADORES · de repente, de pronto, cuando (signal words)' },
  ],
  optionNotes: {
    'empezó de': '«Empezar» y «comenzar» llevan **a** delante del infinitivo: empezó a llover. Nunca «empezar de».',
    'estuvo a punto': 'Falta la preposición: **estar a punto de** + infinitivo.',
    'se echó': 'Falta la preposición: **echarse a** + infinitivo (se echó a llorar).',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: '¿Cómo empieza algo?', coach: 'Neutro, de repente o justo antes. Neutral, sudden or just before.',
      steps: [
        { title: 'Un ensayo con sorpresas · A rehearsal full of surprises', blocks: [
          { kind: 'lead', text: 'Natalia Ferrer dirige «La Escalera», un grupo de teatro aficionado del centro cultural de su barrio. El jueves hicieron el ensayo general y nada salió como estaba previsto: «**Estábamos a punto de empezar** cuando **se puso a llover** y se fue la luz». Hoy aprendes a contar cómo empieza algo: de forma neutra, de repente o justo antes de empezar.', en: 'Natalia Ferrer runs “La Escalera”, an amateur theatre group at her neighbourhood cultural centre. On Thursday they had the dress rehearsal and nothing went to plan: “We were about to start when it started to rain and the power went off.” Today you learn to say how something starts: neutrally, suddenly, or just before it starts.' },
          { kind: 'guide', text: { teacher: 'Tú lees las tres frases y tu alumno dice cuál cuenta un inicio sin más, cuál un inicio de golpe y cuál algo que todavía no empezó.', self: 'Lee las tres frases en voz alta. ¿Cuál cuenta un inicio sin más? ¿Cuál, un inicio de golpe? ¿Cuál, algo que todavía no empezó? (Neutral start, sudden start, not started yet?)' } },
          { kind: 'compare', title: 'Tres maneras de empezar · Three ways of starting', columns: [
            { tone: 'blue', label: 'INICIO NEUTRO · empezar a', sentence: '[[Empezó a llover|blue]] al salir del teatro.', idea: 'Solo dice que la lluvia comenzó. Es la opción neutra.', en: 'It started to rain as we left the theatre.' },
            { tone: 'orange', label: 'INICIO REPENTINO · ponerse a', sentence: '[[De repente|violet]], [[se puso a llover|orange]].', idea: 'El inicio llega de golpe: más vivo, con más sorpresa.', en: 'Suddenly it started raining.' },
            { tone: 'teal', label: 'ANTES DEL INICIO · estar a punto de', sentence: '[[Estábamos a punto de|teal]] empezar.', idea: 'Todavía no empezamos: faltaban segundos.', en: 'We were about to start.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Estábamos a punto de empezar» significa…', options: ['Ya habíamos empezado.', 'Empezamos muy tarde.', 'Faltaba muy poco para empezar.'], answer: 2, why: '«Estar a punto de» marca el momento justo antes del inicio: todavía no empezamos.', en: '“Estábamos a punto de empezar” means…' },
            { prompt: '¿Qué frase subraya que el inicio fue de golpe?', options: ['De repente, se puso a llover.', 'Empezó a llover al salir.', 'Iba a llover.'], answer: 0, why: '«Ponerse a» (y «de repente») presenta el inicio como algo brusco. «Empezar a» es neutro; «iba a» habla de antes.', en: 'Which sentence stresses a sudden start?' },
            { prompt: 'En «Empezó a llover», después de «empezó» va…', options: ['de + infinitivo', 'el gerundio: lloviendo', 'a + infinitivo'], answer: 2, why: 'Las perífrasis incoativas llevan **a** + infinitivo: empezar a, ponerse a, echarse a.', en: 'In “Empezó a llover”, after “empezó” comes…' },
          ] },
        ] },
        { title: 'Empezar a y ponerse a · The two main forms', mascot: '/brand/mascot/studying.webp', coach: 'Neutro o con impulso. Neutral or with a push.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'EMPEZAR A · COMENZAR A', question: '¿Cuándo empieza una acción o un proceso?', en: 'When does an action or a process start? The neutral option, valid with any verb.', formula: ['empezar · comenzar + a + infinitivo', 'empiezo a… · empecé a… · empezaba a… · he empezado a…'],
            meaning: 'Marca el **principio** de una acción, sin más información. Funciona con todo tipo de verbos, también con **procesos lentos y estados**: empezar a entender, empezar a hacer frío, empezar a sentirse mejor. **Comenzar a** significa lo mismo; suena algo más formal y es muy frecuente en textos escritos, noticias y avisos.',
            examples: [
              { es: 'El grupo [[empezó a ensayar|blue]] la obra en septiembre.', en: 'The group started rehearsing the play in September.' },
              { es: 'Poco a poco, Rodrigo [[empezó a entender|blue]] a su personaje.', en: 'Little by little, Rodrigo began to understand his character.' },
              { es: 'Aviso del centro: «El lunes [[comenzaremos a vender|blue]] las entradas».', en: 'Centre notice: “On Monday we will begin selling tickets.”' },
            ], note: 'Cuidado: en «la obra empieza a las ocho», «a las ocho» es la hora, no una perífrasis. Solo hay perífrasis con a + infinitivo: «empieza **a llover**».' },
          { kind: 'concept', tone: 'orange', label: 'PONERSE A', question: '¿Empieza algo de golpe, o alguien se pone a hacerlo con decisión?', en: 'Does something start suddenly, or does someone get down to doing it?', formula: ['ponerse + a + infinitivo', 'me puse · te pusiste · se puso · nos pusimos · se pusieron + a…'],
            meaning: 'También marca el principio, con un matiz: el inicio es **repentino** («se puso a llover») o es una **decisión**: alguien deja lo demás y empieza una actividad («me puse a estudiar» = I got down to studying). Va con verbos de **actividad** (trabajar, buscar, cocinar, hablar, llover), no con estados: no se dice «me puse a saber» ni «se puso a tener frío».',
            examples: [
              { es: 'A las siete en punto [[se puso a llover|orange]] muy fuerte.', en: 'At seven o’clock sharp it started pouring.' },
              { es: 'Marcos [[se puso a buscar|orange]] linternas por todo el teatro.', en: 'Marcos started looking for torches all over the theatre.' },
              { es: 'Esta noche [[me pongo a repasar|orange]] el texto.', en: 'Tonight I’m getting down to going over the script.' },
            ] },
          { kind: 'table', title: 'En distintos tiempos · In different tenses', head: ['Tiempo', 'empezar a', 'ponerse a'], rows: [
            ['Presente', 'Ya **empiezo a** entender la obra.', 'Siempre **me pongo a** cantar en la ducha.'],
            ['Indefinido', 'Ayer **empezó a** llover a las siete.', 'De repente **se puso a** llover.'],
            ['Imperfecto', 'Cada tarde **empezábamos a** ensayar a las seis.', 'Cada noche Natalia **se ponía a** leer guiones.'],
            ['Perfecto', 'Este año **he empezado a** hacer teatro.', 'Hoy **me he puesto a** estudiar temprano.'],
            ['Ir a + infinitivo', 'Mañana **vamos a empezar a** ensayar a las seis.', 'Esta noche **me voy a poner a** repasar.'],
          ], note: 'Empezar: **empie-** en el presente (empiezo, empiezas, empieza, empiezan; pero empezamos) y **z → c** delante de e: **empecé**. Ponerse es irregular en indefinido: **me puse, se puso**.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Ayer Rodrigo ___ a estudiar a las once de la noche, después de cenar.', options: ['se puso', 'se pusió', 'se ponió'], answer: 0, why: 'Ponerse es irregular en indefinido: se puso.', en: 'Yesterday Rodrigo got down to studying at eleven at night, after dinner.' },
            { prompt: 'Con el tiempo, Elena ___ sentirse más segura en el escenario.', options: ['se echó a', 'se puso a', 'empezó a'], answer: 2, why: 'Sentirse segura es un estado que llega poco a poco: empezar a. Ponerse a y echarse a no van con estados.', en: 'Over time, Elena began to feel more confident on stage.' },
          ] },
        ] },
        { title: 'De golpe: echarse a · Bursting out', mascot: '/brand/mascot/standing.webp', coach: 'Se echó a reír. He burst out laughing.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'ECHARSE A', question: '¿Una emoción o un movimiento empieza de golpe, casi sin control?', en: 'Does an emotion or a movement start suddenly, almost out of control?', formula: ['echarse + a + reír · llorar · correr · temblar', 'me eché a reír · se echó a llorar · nos echamos a correr'],
            meaning: 'Un inicio **brusco** y casi siempre **involuntario**, sobre todo de emociones y movimientos. Es una combinación casi fija: va con pocos verbos (reír, llorar, correr, temblar; también volar, un pájaro). Con otros verbos usamos ponerse a o empezar a: no «se echó a estudiar», no «se echó a llover». Y es echarse a **reír**, sin otro «se»: no «se echó a reírse».',
            examples: [
              { es: 'En la escena más triste, Rodrigo [[se echó a reír|orange]].', en: 'In the saddest scene, Rodrigo burst out laughing.' },
              { es: 'Con la lluvia, los vecinos [[se echaron a correr|orange]] hacia el portal.', en: 'When the rain came, the neighbours broke into a run towards the doorway.' },
              { es: 'Elena leyó la última carta y [[se echó a llorar|orange]].', en: 'Elena read the last letter and burst into tears.' },
            ] },
          { kind: 'decide', title: '¿Qué perífrasis uso? · Which one?', steps: [
            { q: '¿Es un estado o un proceso lento? (entender, conocer, sentirse, hacer frío)', yes: 'Usa **empezar a** (o comenzar a): «Empecé a entender la obra».', no: 'next' },
            { q: '¿Es reír, llorar, correr o temblar, y empieza de golpe, casi sin control?', yes: '**Echarse a** es lo más expresivo: «Se echó a reír». (Ponerse a y empezar a también son posibles.)', no: 'next' },
            { q: '¿Es una actividad que empieza de repente, o alguien decide ponerse a trabajar en algo?', yes: 'Usa **ponerse a**: «Se puso a llover», «Me puse a estudiar».', no: 'Usa **empezar a**: es la opción neutra y siempre funciona.' },
          ] },
          { kind: 'tip', icon: '💡', title: 'Ponerse nervioso no es ponerse a… · Two different “ponerse”', text: '**Ponerse + adjetivo** es un cambio de estado (clase 061): me puse nervioso, se puso roja. **Ponerse a + infinitivo** es el inicio de una acción: me puse a temblar. En una frase: «Rodrigo **se puso nervioso** y **se puso a hablar** muy rápido».', en: '“Ponerse” + adjective is a change of state (class 061): I got nervous, she went red. “Ponerse a” + infinitive is the start of an action: I started shaking. In one sentence: “Rodrigo got nervous and started talking very fast.”' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Cuando vio su nombre en el cartel, Elena ___ llorar de emoción.', options: ['se puso de', 'se echó a', 'se echó'], answer: 1, why: 'Llorar de emoción, de golpe: echarse a llorar.', en: 'When she saw her name on the poster, Elena burst into tears of joy.' },
            { prompt: 'El jueves, a las siete, ___ llover muy fuerte.', options: ['se puso', 'se echó a', 'se puso a'], answer: 2, why: 'Con el tiempo atmosférico: ponerse a (o empezar a). «Echarse a» va con personas y animales, no con llover.', en: 'On Thursday at seven it started raining very hard.' },
            { prompt: 'Después de cenar, Marcos ___ revisar las luces con calma.', options: ['se puso a', 'empezó de', 'se echó a'], answer: 0, why: 'Una decisión de empezar una actividad: ponerse a. Echarse a no va con revisar.', en: 'After dinner, Marcos got down to checking the lights calmly.' },
          ] },
        ] },
        { title: 'Justo antes de empezar · Just before the start', mascot: '/brand/mascot/speaking.webp', coach: 'A punto de: falta muy poco. About to: very soon.', blocks: [
          { kind: 'compare', title: 'Inminente o planeado · Imminent or planned', columns: [
            { tone: 'teal', label: 'ESTAR A PUNTO DE · inminente', sentence: 'Los actores [[están a punto de|teal]] salir al escenario.', idea: 'Falta muy poco: segundos o minutos.', en: 'The actors are about to go on stage.' },
            { tone: 'teal', label: 'IR A · plan o intención', sentence: 'Elena [[va a|teal]] salir en el segundo acto.', idea: 'Un plan; puede ser más tarde.', en: 'Elena is going to come on in the second act.' },
          ] },
          { kind: 'table', title: 'En pasado · In the past', head: ['Forma', 'Ejemplo', 'Significado'], rows: [
            ['estaba a punto de + inf. … cuando', '**Estábamos a punto de** empezar cuando se fue la luz.', 'iba a pasar y algo lo interrumpe (we were about to start)'],
            ['iba a + inf.', '**Iba a** llamarte, pero me quedé sin batería.', 'era el plan, y no se hizo (I was going to call you)'],
            ['estuve a punto de + inf.', '**Estuve a punto de** caerme de la escalera.', 'casi pasó, pero no pasó (I nearly fell)'],
          ], note: 'Con un momento lejano y concreto (en diciembre, el año que viene), lo natural es **ir a**: «Voy a terminar la carrera el año que viene». «Estoy a punto de terminar» dice que falta muy poco.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Faltan dos minutos para el estreno: los actores ___ salir.', options: ['acaban de', 'se echan a', 'están a punto de'], answer: 2, why: 'Falta muy poco para que salgan: están a punto de. «Acaban de salir» diría que ya salieron.', en: 'Two minutes to curtain-up: the actors are about to go on.' },
            { prompt: 'Rodrigo ___ caerse de la escalera, pero Marcos lo sujetó.', options: ['estuvo a punto de', 'se echó a', 'se puso a'], answer: 0, why: 'Casi pasó, pero no pasó: estuvo a punto de (indefinido).', en: 'Rodrigo nearly fell off the ladder, but Marcos held him.' },
            { prompt: 'El año que viene Elena ___ estudiar Arte Dramático.', options: ['va a', 'se pone a', 'está a punto de'], answer: 0, why: 'Un plan para un momento lejano: ir a + infinitivo.', en: 'Next year Elena is going to study Drama.' },
          ] },
        ] },
        { title: 'Pronombres y errores frecuentes · Pronouns and common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'La preposición y el pronombre. The preposition and the pronoun.', blocks: [
          { kind: 'table', title: '¿Dónde va el pronombre? · Where does the pronoun go?', head: ['Perífrasis', 'Natural', 'Cuidado'], rows: [
            ['empezar a', 'Empecé a leer**lo**. / **Lo** empecé a leer.', 'Las dos posiciones son correctas (clase 065).'],
            ['ponerse a', 'Me puse a leer**lo**.', '«Me lo puse a leer» suena forzado: deja «lo» en el infinitivo.'],
            ['echarse a', 'Se echó a **reír**.', 'Reír, sin otro «se»: no «se echó a reírse».'],
            ['ir a · estar a punto de', '**Te lo** iba a decir. / Estaba a punto de decír**telo**.', 'Con ir a, las dos posiciones; con estar a punto de, mejor detrás del infinitivo.'],
          ] },
          { kind: 'guide', text: { teacher: 'Tú lees la frase con el error y tu alumno explica qué falla: ¿la preposición, el verbo o el pronombre? Después aparece la corrección.', self: 'Lee cada frase y piensa qué falla: ¿la preposición, el verbo o el pronombre? Toca para ver la corrección. (Preposition, verb or pronoun?)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Empezamos ensayar a las seis.', right: 'Empezamos a ensayar a las seis.', why: 'Falta la preposición: empezar **a** + infinitivo. (The “a” is needed.)' },
            { wrong: 'Ayer empecé de estudiar el papel.', right: 'Ayer empecé a estudiar el papel.', why: 'Empezar lleva «a», no «de». («Acabar de» es otra perífrasis, con otro sentido.)' },
            { wrong: 'Se echó a reírse en la escena triste.', right: 'Se echó a reír en la escena triste.', why: 'El «se» ya está en echarse: el infinitivo va solo, reír. (No double “se”.)' },
            { wrong: 'Me puse a nervioso antes de salir.', right: 'Me puse nervioso antes de salir.', why: 'Con un adjetivo es un cambio de estado, sin «a». «Ponerse a» va con infinitivo: me puse a temblar.' },
            { wrong: 'Se echó a llover a las siete.', right: 'Se puso a llover a las siete.', why: 'Echarse a va con personas y animales (reír, llorar, correr). Para la lluvia: ponerse a o empezar a.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'El guion es largo, pero anoche me puse a ___.', options: ['lo leer', 'leerme lo', 'leerlo'], answer: 2, why: 'Con ponerse a, el pronombre va detrás del infinitivo, unido: leerlo.', en: 'The script is long, but last night I got down to reading it.' },
            { prompt: '¿Qué frase es correcta?', options: ['Nos echamos a reír.', 'Nos echamos reír.', 'Nos echamos a reírnos.'], answer: 0, why: 'Echarse a + reír, con «a» y sin otro pronombre.', en: 'Which sentence is correct?' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno cuenta con una frase algo que empezó a hacer este año (empezar a) y algo que se puso a hacer ayer por la noche (ponerse a). Tú preguntas: «¿Fue de repente o poco a poco?».' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'El día después del ensayo', coach: 'Toca las palabras marcadas. Tap the marked words.',
      steps: [
        { title: 'En la cafetería del centro · At the centre café', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Luisa y tu alumno es Natalia. Después tu alumno toca cada expresión marcada y dice si es un inicio neutro, un inicio de golpe o el momento de antes.', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada y di: ¿inicio neutro, inicio de golpe o el momento de antes? (Neutral start, sudden start or just before?)' } },
          { kind: 'explore', title: 'Ni te lo imaginas', setting: 'Viernes por la mañana, en la cafetería del centro cultural. Luisa Montero, la coordinadora, no estuvo en el ensayo general. Natalia le cuenta qué pasó. Se tratan de tú. (Friday morning, at the cultural centre café. Luisa, the coordinator, missed the dress rehearsal. Natalia tells her what happened.)', lines: [
            { who: 'Luisa', text: '¡Natalia! ¿Qué tal el ensayo general? Me dijeron que hubo problemas.', en: 'Natalia! How was the dress rehearsal? I heard there were problems.' },
            { who: 'Natalia', text: 'Uf, ni te lo imaginas. [[Estábamos a punto de empezar|teal]] [[cuando|violet]] [[se puso a llover|orange]] muy fuerte y se fue la luz.', en: 'Oh, you can’t imagine. We were about to start when it started pouring and the power went off.' },
            { who: 'Luisa', text: '¿En serio? ¿Y qué hicieron?', en: 'Seriously? And what did you do?' },
            { who: 'Natalia', text: 'Marcos [[se puso a buscar|orange]] linternas, y Rodrigo [[se metió a arreglar|orange]] los fusibles sin saber nada de electricidad.', en: 'Marcos started looking for torches, and Rodrigo took it upon himself to fix the fuses without knowing anything about electricity.' },
            { who: 'Luisa', text: '¡Qué peligro! ¿Y luego?', en: 'How dangerous! And then?' },
            { who: 'Natalia', text: 'Por suerte, a las siete y media volvió la luz y [[empezamos a ensayar|blue]]. Pero en la escena del hospital, Rodrigo [[se echó a reír|orange]].', en: 'Luckily, at half past seven the power came back and we started rehearsing. But in the hospital scene, Rodrigo burst out laughing.' },
            { who: 'Luisa', text: '¿En la escena más triste de la obra?', en: 'In the saddest scene of the play?' },
            { who: 'Natalia', text: 'Sí, eran los nervios. [[De pronto|violet]], todos [[nos echamos a reír|orange]] con él. Yo [[estuve a punto de|teal]] parar el ensayo.', en: 'Yes, it was nerves. Suddenly we all burst out laughing with him. I nearly stopped the rehearsal.' },
            { who: 'Luisa', text: '¿Y Elena? Ella siempre está tan tranquila.', en: 'And Elena? She’s always so calm.' },
            { who: 'Natalia', text: 'Elena estuvo perfecta. Al final leyó la carta de su personaje y [[rompió a llorar|orange]] de verdad. Nadie se movía.', en: 'Elena was perfect. At the end she read her character’s letter and burst into real tears. Nobody moved.' },
            { who: 'Luisa', text: 'Qué bonito. ¿Y ahora? El estreno es mañana.', en: 'How lovely. And now? The opening night is tomorrow.' },
            { who: 'Natalia', text: 'Esta noche [[me pongo a repasar|orange]] mis notas, y mañana [[vamos a empezar|teal]] a las seis en punto. Rodrigo ya [[empieza a estar|blue]] más tranquilo.', en: 'Tonight I’m getting down to going over my notes, and tomorrow we’re going to start at six sharp. Rodrigo is already starting to feel calmer.' },
          ], notes: {
            'Estábamos a punto de empezar': 'Estar a punto de en imperfecto: faltaba muy poco para empezar, y algo interrumpió ese momento. (We were about to start.)',
            'cuando': '«Cuando» + indefinido presenta lo que interrumpe: estábamos a punto de… **cuando** se puso a llover.',
            'se puso a llover': 'Ponerse a + infinitivo en indefinido: la lluvia empezó de golpe. Con llover, «empezó a llover» también es correcto, pero menos vivo.',
            'se puso a buscar': 'Ponerse a: Marcos deja lo demás y empieza una actividad con decisión. (He set about looking for torches.)',
            'se metió a arreglar': 'Meterse a + infinitivo (coloquial): empezar a hacer algo sin saber hacerlo bien, o sin que nadie te lo pida. Solo tienes que entenderlo. (He took it upon himself to fix…)',
            'empezamos a ensayar': 'Empezar a + infinitivo: el inicio neutro, sin sorpresa. Por fin pudieron empezar.',
            'se echó a reír': 'Echarse a + reír: un inicio brusco e involuntario. Es «reír», sin otro «se».',
            'De pronto': 'De pronto = de repente (suddenly). Acompaña muy bien a ponerse a y echarse a.',
            'nos echamos a reír': 'Echarse a con nosotros: nos echamos a reír. El pronombre cambia con la persona.',
            'estuve a punto de': 'Estar a punto de en indefinido: casi pasó, pero no pasó. Natalia no paró el ensayo. (I nearly stopped.)',
            'rompió a llorar': 'Romper a + llorar: un inicio repentino y muy intenso. Es más literario; solo tienes que reconocerlo. (She burst into tears.)',
            'me pongo a repasar': 'Ponerse a en presente con valor de futuro próximo: esta noche, con decisión, empieza a repasar.',
            'vamos a empezar': 'Ir a + infinitivo: un plan para mañana. Aquí «a las seis» es la hora, no otra perífrasis.',
            'empieza a estar': 'Empezar a + estar: un estado que cambia poco a poco. Con estados, empezar a, no ponerse a.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Qué pasó justo antes del ensayo?', options: ['Rodrigo llegó tarde.', 'Se puso a llover y se fue la luz.', 'Elena se puso enferma.'], answer: 1, why: '«Estábamos a punto de empezar cuando se puso a llover muy fuerte y se fue la luz».', en: 'What happened just before the rehearsal?' },
            { prompt: '¿Qué hizo Rodrigo en la escena del hospital?', options: ['Paró el ensayo.', 'Se echó a reír por los nervios.', 'Se echó a llorar.'], answer: 1, why: '«Rodrigo se echó a reír… eran los nervios».', en: 'What did Rodrigo do in the hospital scene?' },
            { prompt: '¿Qué va a hacer Natalia esta noche?', options: ['Ensayar con Rodrigo.', 'Ir al estreno.', 'Repasar sus notas.'], answer: 2, why: '«Esta noche me pongo a repasar mis notas».', en: 'What is Natalia going to do tonight?' },
          ] },
        ] },
        { title: '¿Cómo empieza? · How does it start?', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'classify', title: 'Más momentos del ensayo · More moments from the rehearsal', categories: [
            { id: 'neutro', label: 'INICIO NEUTRO · empezar / comenzar a', tone: 'blue' },
            { id: 'golpe', label: 'INICIO DE GOLPE O DECIDIDO · ponerse a, echarse a', tone: 'orange' },
            { id: 'antes', label: 'ANTES DEL INICIO · a punto de, iba a', tone: 'teal' },
          ], items: [
            { text: 'Poco a poco, los invitados empezaron a llegar.', answer: 'neutro', why: 'Un inicio sin sorpresa, poco a poco: empezar a.' },
            { text: 'Al oír el trueno, Elena se echó a temblar.', answer: 'golpe', why: 'Temblar de golpe, sin control: echarse a.' },
            { text: 'Los técnicos estaban a punto de abrir las puertas.', answer: 'antes', why: 'Todavía no las abrían: faltaba muy poco.' },
            { text: 'Marcos se puso a revisar los cables uno por uno.', answer: 'golpe', why: 'Una decisión: Marcos se pone a trabajar en algo.' },
            { text: 'El centro comenzó a vender entradas en octubre.', answer: 'neutro', why: 'Comenzar a: el inicio neutro, con un tono algo más formal.' },
            { text: 'Natalia iba a llamar a los actores, pero llegaron antes.', answer: 'antes', why: 'Iba a: era el plan, y al final no lo hizo.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: «¿Qué hizo Marcos cuando se fue la luz? ¿Y Rodrigo?». Tu alumno responde con ponerse a y, si puede, con meterse a.' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Primero, ¿neutro, de golpe o antes? First decide the kind of start.',
      steps: [
        { title: 'El día del estreno · Opening night', blocks: [
          { kind: 'choice', items: [
            { context: 'Sábado, día del estreno. (Saturday, opening night.)', prompt: 'A las cinco, los actores ___ maquillarse en el camerino.', options: ['empezaron de', 'se echaron a', 'empezaron a'], answer: 2, why: 'Un inicio previsto, sin sorpresa: empezar a. Echarse a no va con maquillarse.', en: 'At five the actors started doing their make-up in the dressing room.' },
            { context: 'Sábado, día del estreno. (Saturday, opening night.)', prompt: 'Cuando Rodrigo vio el teatro lleno, ___ temblar.', options: ['estuvo a punto', 'se echó a', 'se echó'], answer: 1, why: 'Temblar de golpe, sin control: echarse a + temblar, con «a».', en: 'When Rodrigo saw the full theatre, he started shaking.' },
            { context: 'En el camerino. (In the dressing room.)', prompt: 'Elena tenía frío y ___ hacer ejercicios para entrar en calor.', options: ['se echó a', 'se puso a', 'se puso'], answer: 1, why: 'Decide empezar una actividad: ponerse a + infinitivo, con «a».', en: 'Elena was cold and started doing exercises to warm up.' },
            { context: 'Las ocho menos dos minutos. (Two minutes to eight.)', prompt: 'Faltaban dos minutos y la obra ___ empezar.', options: ['se puso a', 'estuvo a punto de', 'estaba a punto de'], answer: 2, why: 'Falta muy poco y la obra sí empieza: estaba a punto de. «Estuvo a punto de» diría que al final no empezó.', en: 'There were two minutes left and the play was about to start.' },
            { context: 'Durante la obra. (During the play.)', prompt: 'En el segundo acto, el público ___ entender la historia de los dos hermanos.', options: ['se puso a', 'empezó a', 'se echó a'], answer: 1, why: 'Entender es un proceso mental, no una actividad: empezar a.', en: 'In the second act, the audience began to understand the story of the two brothers.' },
          ] },
        ] },
        { title: '¿Suena natural? · Does it sound natural?', blocks: [
          { kind: 'classify', title: 'Natural o no · Natural or not', categories: [
            { id: 'ok', label: 'NATURAL · correcto', tone: 'blue' },
            { id: 'mal', label: 'NO NATURAL · hay que cambiarlo', tone: 'orange' },
          ], items: [
            { text: 'Se echó a llorar al leer la carta.', answer: 'ok', why: 'Echarse a + llorar: combinación típica.' },
            { text: 'Se echó a estudiar toda la noche.', answer: 'mal', why: 'Echarse a no va con estudiar. Para una decisión: se puso a estudiar.' },
            { text: 'De repente me puse a saber la respuesta.', answer: 'mal', why: 'Saber es un estado: no va con ponerse a. Mejor: «De repente supe la respuesta».' },
            { text: 'Empezó a hacer frío en el teatro.', answer: 'ok', why: 'Empezar a funciona con procesos y estados: hacer frío.' },
            { text: 'A mediodía se puso a nevar.', answer: 'ok', why: 'Ponerse a con el tiempo atmosférico: el inicio es repentino.' },
            { text: 'Me lo puse a leer anoche.', answer: 'mal', why: 'Con ponerse a, el pronombre va con el infinitivo: me puse a leerlo.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Ayer empecé de escribir mi papel.', ok: false, options: ['Ayer me eché a escribir mi papel.', 'Ayer empecé a escribir mi papel.', 'Ayer empecé escribir mi papel.'], answer: 1, why: 'Empezar a + infinitivo. «Echarse a» no va con escribir.' },
            { sentence: 'Cuando se fue la luz, el público se echó a reír.', ok: true, why: 'Correcta: echarse a + reír, un inicio de golpe.' },
            { sentence: 'Rodrigo se puso a nervioso antes del estreno.', ok: false, options: ['Rodrigo se puso nervioso antes del estreno.', 'Rodrigo empezó nervioso antes del estreno.', 'Rodrigo se echó a nervioso antes del estreno.'], answer: 0, why: 'Ponerse + adjetivo, sin «a»: se puso nervioso (un cambio de estado).' },
            { sentence: 'Estábamos a punto de cenar cuando sonó el teléfono.', ok: true, why: 'Correcta: estar a punto de en imperfecto + cuando + el hecho que interrumpe.' },
            { sentence: 'Los dos actores se echaron a reírse.', ok: false, options: ['Los dos actores se echaron a reír.', 'Los dos actores se echaron reír.', 'Los dos actores echaron a reírse.'], answer: 0, why: 'El pronombre va en echarse; el infinitivo, solo: se echaron a reír.' },
          ] },
        ] },
        { title: 'Antes del estreno · Before the opening', blocks: [
          { kind: 'chat-fill', title: 'Natalia habla con Rodrigo · Natalia talks to Rodrigo', lines: [
            { who: 'Natalia', text: 'Rodrigo, ¿qué tal? Te veo un poco pálido.' },
            { who: 'Rodrigo', text: 'Estoy bien… Bueno, anoche no podía dormir y a las dos ___ repasar el texto.', options: ['me puse', 'me puse a', 'me eché a'], answer: 1, why: 'Una decisión de empezar una actividad: me puse a + infinitivo.' },
            { who: 'Natalia', text: '¿A las dos de la mañana? ¿Y lo terminaste?' },
            { who: 'Rodrigo', text: 'No. ___ terminar cuando me quedé dormido en el sofá.', options: ['Me puse a', 'Estaba a punto de', 'Estuve a punto'], answer: 1, why: 'Faltaba poco y algo lo interrumpió: estaba a punto de… cuando.' },
            { who: 'Natalia', text: 'Tranquilo. ¿Y lo de ayer? Te ___ reír en la escena del hospital.', options: ['pusiste', 'echaste', 'echaste a'], answer: 2, why: 'Echarse a + reír, con tú: te echaste a reír.' },
            { who: 'Rodrigo', text: 'Ya, qué vergüenza. Cuando vi a Elena tan seria, ___ reírme y no podía parar.', options: ['empecé', 'empecé a', 'me eché a'], answer: 1, why: 'Con empezar a, reírse lleva su pronombre: empecé a reírme. «Me eché a reírme» repite el pronombre.' },
            { who: 'Natalia', text: 'Pues hoy, antes de salir, ___ respirar despacio un minuto.', options: ['ponte', 'ponte a', 'échate a'], answer: 1, why: 'Un consejo para empezar una actividad: ponte a (imperativo de ponerse) + infinitivo.' },
            { who: 'Rodrigo', text: 'De acuerdo. Ya ___ estar más tranquilo.', options: ['me pongo a', 'empiezo a', 'me echo a'], answer: 1, why: 'Estar tranquilo es un estado: empezar a.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['Se', 'puso', 'a', 'llover', 'de', 'repente'], accept: ['Se puso a llover de repente', 'De repente se puso a llover'], en: 'It suddenly started raining.' },
            { tiles: ['Todos', 'nos', 'echamos', 'a', 'reír'], accept: ['Todos nos echamos a reír', 'Nos echamos a reír todos'], en: 'We all burst out laughing.' },
            { tiles: ['Estaba', 'a', 'punto', 'de', 'salir', 'cuando', 'sonó', 'el', 'teléfono'], accept: ['Estaba a punto de salir cuando sonó el teléfono', 'Cuando sonó el teléfono estaba a punto de salir'], en: 'I was about to leave when the phone rang.' },
          ] },
        ] },
        { title: 'Transforma · Transform', blocks: [
          { kind: 'rewrite', title: 'Cambia la perífrasis · Change the periphrasis', items: [
            { prompt: 'Rodrigo empezó a llorar de repente, sin control.', instruction: 'Usa echarse a. Empieza con «Rodrigo». (Use echarse a.)', accept: ['Rodrigo se echó a llorar de repente, sin control', 'Rodrigo de repente se echó a llorar, sin control', 'Rodrigo se echó a llorar sin control de repente'] },
            { prompt: 'Faltaba muy poco para empezar el ensayo. Entonces se fue la luz.', instruction: 'Une las ideas con «estar a punto de» y «cuando». Empieza con «Estábamos».', accept: ['Estábamos a punto de empezar el ensayo cuando se fue la luz', 'Estábamos a punto de empezar cuando se fue la luz'] },
            { prompt: 'Casi me caigo de la escalera, pero al final no me caí.', instruction: 'Usa «estar a punto de» en indefinido. Empieza con «Estuve».', accept: ['Estuve a punto de caerme de la escalera', 'Estuve a punto de caerme de la escalera, pero al final no me caí', 'Estuve a punto de caerme de la escalera pero no me caí'] },
            { prompt: 'Anoche me puse a estudiar el guion.', instruction: 'Cambia «el guion» por «lo». Empieza con «Anoche». (Replace it with “lo”.)', accept: ['Anoche me puse a estudiarlo'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno cuenta un día reciente con tres inicios: uno neutro (empecé a), uno de golpe (me puse a / me eché a) y uno que casi pasa (estuve a punto de).' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Un audio de Natalia', coach: 'Primero escucha sin leer. Listen first, read later.',
      steps: [
        { title: 'Natalia escribe al grupo · Natalia messages the group', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: la idea general. Segunda escucha: tu alumno levanta la mano cada vez que oye un inicio (empezamos a, se puso a, se echó a…) y da una palmada con cada «a punto de». Después, las preguntas.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Vas a oír «rompiste a llorar» (you burst into tears): solo tienes que entenderlo. (Listen once for the gist, once for details.)' } },
          { kind: 'listen', title: 'Un audio para el grupo', channel: 'AUDIO · DE NATALIA PARA EL GRUPO LA ESCALERA', src: '/audio/grammar-live/406.mp3',
            before: 'Es viernes por la noche. Natalia manda un audio al grupo antes del estreno. ¿Qué crees que dice: qué pasó en el ensayo, a qué hora quedan, algún consejo…? (What do you think she says?)',
            gist: { prompt: '¿Cuál es la idea general? · What is the main idea?', options: ['Natalia cancela el estreno por la lluvia.', 'Natalia recuerda el ensayo, anima al grupo y da instrucciones para mañana.', 'Natalia se queja de los errores de Rodrigo.'], answer: 1, why: 'Da las gracias, recuerda lo que pasó, tranquiliza a Rodrigo y explica el plan de mañana.', en: 'What is the main idea?' },
            details: [
              { prompt: '¿Qué pasó cuando estaban a punto de empezar?', options: ['Rodrigo se echó a reír.', 'Llegó el público.', 'Se puso a llover y se fue la luz.'], answer: 2, why: '«Estábamos a punto de empezar cuando se puso a llover y se fue la luz».', en: 'What happened when they were about to start?' },
              { prompt: '¿Cómo reaccionó el grupo cuando Rodrigo se echó a reír?', options: ['Paró el ensayo.', 'Se molestó con él.', 'Se rio con él.'], answer: 2, why: '«Todo el grupo se rio con él».', en: 'How did the group react when Rodrigo burst out laughing?' },
              { prompt: '¿Qué estuvo a punto de hacer Natalia?', options: ['Irse a casa.', 'Cambiar la escena.', 'Llorar.'], answer: 2, why: '«Yo estuve a punto de llorar también». Casi lloró, pero no lloró.', en: 'What did Natalia nearly do?' },
              { prompt: '¿Qué van a hacer mañana después de calentar la voz?', options: ['Maquillarse.', 'Repasar el segundo acto.', 'Vender entradas.'], answer: 1, why: '«Empezamos por calentar la voz y después nos ponemos a repasar el segundo acto».', en: 'What will they do tomorrow after warming up their voices?' },
            ],
            transcript: 'Hola a todos, soy Natalia. Les mando este audio antes del estreno de mañana. Primero, gracias por la paciencia de ayer. Ya saben: [[estábamos a punto de empezar|teal]] cuando [[se puso a llover|orange]] y se fue la luz. Por suerte, a las siete y media volvió la luz y por fin [[empezamos a ensayar|blue]]. En la escena del hospital, Rodrigo [[se echó a reír|orange]] y todo el grupo se rio con él. Tranquilo, Rodrigo: son los nervios, nos pasa a todos. Y Elena, cuando leíste la carta y [[rompiste a llorar|orange]], yo [[estuve a punto de|teal]] llorar también. Fue precioso. Para mañana: lleguen a las cinco, por favor. Empezamos por calentar la voz y después [[nos ponemos a|orange]] repasar el segundo acto. Y esta noche [[no se pongan a|orange]] repasar hasta las dos de la mañana: duerman bien. Un abrazo y nos vemos mañana.',
            reply: { teacher: 'Tú eres Natalia. Tu alumno es Rodrigo y responde al audio con tres frases: qué le pasó en el ensayo, qué estuvo a punto de hacer y qué se va a poner a hacer esta noche.', self: 'Responde al audio en voz alta como Rodrigo: qué te pasó en el ensayo, qué estuviste a punto de hacer y qué te vas a poner a hacer esta noche. (Answer as Rodrigo.)' } },
          { kind: 'tip', icon: '💡', title: 'Empezar por · Start by', text: 'Natalia dice «**Empezamos por** calentar la voz». **Empezar por** + infinitivo no habla del inicio de una acción: dice qué hacemos **primero** en una lista. Compara: «Empezamos **a** calentar la voz» (el calentamiento comienza) y «Empezamos **por** calentar la voz» (es lo primero del plan).', en: 'Natalia says “Empezamos por calentar la voz”. “Empezar por” + infinitive is not about the start of an action: it says what we do first in a sequence. Compare: “we start warming up our voices” and “we start by warming up our voices”.' },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Tus inicios', coach: 'Cuenta cómo empezó. Tell how it started.',
      steps: [
        { title: '¿Cómo empezó? · How did it start?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas y tu alumno responde con experiencias reales o inventadas. Si usa una perífrasis poco natural, tú repites la frase con la forma natural y sigues con la repregunta.', self: 'Lee la pregunta, responde en voz alta con una experiencia real o inventada y, si quieres, escribe tu respuesta. (Answer aloud with a real or invented experience.)' } },
          { kind: 'talk', cards: [
            { q: '¿Cuándo empezaste a estudiar español? ¿Qué otra actividad has empezado a hacer en los últimos años? · When did you start learning Spanish? What else have you started doing in recent years?', followUps: ['¿Por qué empezaste? (Why did you start?)', '¿Cuándo empezaste a notar el progreso? (When did you start to notice progress?)'], phrases: ['[[Empecé a|blue]] estudiar español en…', 'Hace dos años [[empecé a|blue]]…', 'Poco a poco, [[empecé a|blue]] entender…'], hint: 'Inicio neutro, también para procesos lentos: empezar a + infinitivo.', example: 'Empecé a estudiar español hace tres años, por mi trabajo. El año pasado empecé a hacer yoga y, poco a poco, empecé a dormir mejor.', next: 'Ahora, el impulso.', teacher: 'Responde tú también con un proceso lento: «Empecé a entender a mis alumnos cuando…».' },
            { q: '¿Cuándo te pones a trabajar o a estudiar de verdad? ¿Qué haces antes? · When do you really get down to work or study? What do you do first?', followUps: ['¿Te cuesta ponerte a estudiar? (Is it hard for you to get started?)', '¿Qué haces para no distraerte? (What do you do to avoid distractions?)'], phrases: ['Normalmente [[me pongo a|orange]] trabajar a las…', 'Antes de [[ponerme a|orange]] estudiar, …', 'Me cuesta mucho [[ponerme a|orange]]…'], hint: 'Ponerse a: la decisión de empezar una actividad. Ojo con el pronombre: ponerme, ponerte.', example: 'Normalmente me pongo a trabajar a las nueve. Antes de ponerme a estudiar, apago el móvil, porque me cuesta mucho concentrarme.', next: 'Ahora, una risa en mal momento.' },
            { q: '¿Alguna vez te echaste a reír en un mal momento? ¿Qué pasó? · Have you ever burst out laughing at the wrong moment? What happened?', followUps: ['¿Dónde estabas? (Where were you?)', '¿Cómo reaccionaron los demás? (How did the others react?)'], phrases: ['Una vez [[me eché a reír|orange]] en…', '[[De repente|violet]], …', 'Todos [[se echaron a reír|orange]] / se quedaron serios.'], hint: 'Echarse a + reír (o llorar): un inicio de golpe. Sin otro «se»: me eché a reír.', example: 'Una vez me eché a reír en una reunión muy seria. De repente, mi jefe se cayó de la silla. Por suerte, él también se echó a reír.', next: 'Ahora, un plan interrumpido.' },
            { q: 'Cuenta algo que estabas a punto de hacer cuando pasó algo inesperado. · Tell about something you were about to do when something unexpected happened.', followUps: ['¿Qué hiciste después? (What did you do next?)', '¿Al final pudiste hacerlo? (Were you able to do it in the end?)'], phrases: ['[[Estaba a punto de|teal]] salir de casa [[cuando|violet]]…', '[[Iba a|teal]]…, pero…', '[[De pronto|violet]], [[se puso a|orange]] llover / sonó el teléfono.'], hint: 'Estaba a punto de (imperfecto) + cuando + el hecho que interrumpe (indefinido).', example: 'El domingo estaba a punto de salir a correr cuando se puso a llover. Iba a esperar, pero no paró en toda la tarde.', next: 'Ahora, algo que casi pasa.' },
            { q: '¿Alguna vez estuviste a punto de perder un tren, un avión o una cita importante? · Have you ever nearly missed a train, a plane or an important appointment?', followUps: ['¿Por qué? (Why?)', '¿Cómo llegaste al final? (How did you make it in the end?)'], phrases: ['[[Estuve a punto de|teal]] perder…', 'Al final, [[me eché a correr|orange]] y…', 'Llegué justo a tiempo.'], hint: 'Estuve a punto de (indefinido): casi pasó, pero no pasó.', example: 'Estuve a punto de perder el avión a Lima: había mucho tráfico. Al final me eché a correr por el aeropuerto y llegué justo a tiempo.', next: 'Para terminar, tú eres Natalia.' },
            { q: 'Ahora tú eres Natalia. Luisa te pregunta: «¿Qué tal el ensayo?». Cuenta lo que pasó con cuatro perífrasis distintas. · Now you are Natalia: tell Luisa what happened, with four different periphrases.', followUps: ['¿Y cómo reaccionó Rodrigo? (How did Rodrigo react?)', '¿Qué vas a hacer esta noche? (What are you going to do tonight?)'], phrases: ['[[Estábamos a punto de|teal]] empezar [[cuando|violet]]…', 'Marcos [[se puso a|orange]]…', 'Rodrigo [[se echó a|orange]]…', 'Por fin [[empezamos a|blue]]…'], hint: 'Una de cada tipo: antes del inicio, inicio de golpe, inicio neutro.', example: 'Estábamos a punto de empezar cuando se puso a llover y se fue la luz. Marcos se puso a buscar linternas. Por fin empezamos a ensayar, pero Rodrigo se echó a reír en la escena más triste.', teacher: 'Tú eres Luisa y reaccionas: «¿En serio? ¿Y luego?». Después, cambian los papeles.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno hace las preguntas («¿Cuándo empezaste a…?», «¿Alguna vez estuviste a punto de…?») y tú respondes con tus propias historias.', self: 'Ahora haz tú las preguntas en voz alta («¿Cuándo empezaste a…?», «¿Alguna vez estuviste a punto de…?») y respóndelas con otra historia. (Now ask the questions and answer with another story.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Un mensaje a un amigo', coach: 'Antes, de golpe, poco a poco. Before, suddenly, little by little.',
      steps: [
        { title: 'Cuéntale tu noche · Tell your friend about your evening', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos cada perífrasis: ¿lleva «a»? ¿Es el inicio neutro, de golpe o el momento de antes? Después, tu alumno lee su mensaje en voz alta.', self: 'Escribe tu mensaje y toca «Revisar mi texto». Después, mira cada perífrasis: ¿lleva «a»? ¿Es la más natural? (Write your message and tap “Revisar mi texto”.)' } },
          { kind: 'write', title: 'Una tarde llena de sorpresas · An evening full of surprises', situation: 'Eres Rodrigo (o eres tú, con una historia real). Escribe un mensaje a un amigo que vive en otra ciudad: cuéntale una tarde o una noche en la que todo empezó de repente: un ensayo, un viaje, una fiesta, una reunión. (You are Rodrigo, or yourself with a real story. Write to a friend in another city about an evening when everything started suddenly.)', task: [
            'Di cuándo y dónde fue, y qué estabas a punto de hacer o ibas a hacer. (When, where, and what you were about to do.)',
            'Cuenta qué empezó de repente con ponerse a, y algo que empezó sin sorpresa con empezar a. (A sudden start and a neutral start.)',
            'Cuenta una reacción fuerte con echarse a reír, llorar o correr. (A strong reaction with echarse a.)',
            'Explica cómo terminó y qué te vas a poner a hacer ahora. (How it ended and what you will get down to now.)',
          ], starters: ['¡Hola, Pablo! Te cuento…', 'Estábamos a punto de… cuando…', 'De repente, se puso a…', 'Por fin empezamos a…', 'Todos nos echamos a…', 'Estuve a punto de…', 'Ahora me voy a poner a…', 'Un abrazo,'],
            words: ['empezar a', 'comenzar a', 'ponerse a', 'echarse a reír', 'echarse a llorar', 'echarse a correr', 'estar a punto de', 'ir a', 'de repente', 'de pronto', 'por fin'],
            model: '¡Hola, Pablo! Te cuento el ensayo general de ayer. [[Estábamos a punto de|teal]] empezar [[cuando|violet]] [[se puso a llover|orange]] muy fuerte y se fue la luz. Marcos [[se puso a buscar|orange]] linternas y yo, como un tonto, [[me puse a arreglar|orange]] los fusibles. [[Estuve a punto de|teal]] caerme de la escalera. Por fin volvió la luz y [[empezamos a ensayar|blue]]. Todo iba bien, pero en la escena más triste Elena me miró y [[me eché a reír|orange]]. ¡Qué vergüenza! Por suerte, todos [[se echaron a reír|orange]] conmigo y Natalia no se molestó. El estreno es mañana y ya [[empiezo a|blue]] estar más tranquilo. Ahora [[me voy a poner a|orange]] repasar el texto. ¡Ven a vernos el sábado! Un abrazo, Rodrigo.',
            minWords: 80,
            checks: [
              { label: 'Empezar a o comenzar a + infinitivo (a neutral start)', pattern: '(?<!\\p{L})(?:empie[zc]\\p{L}*|empe[zc]\\p{L}*|comien[zc]\\p{L}*|come[nz][zc]?\\p{L}*)\\s+a\\s+\\p{L}+(?:ar|er|ir|ír)(?:me|te|se|lo|la|le|nos|los|las|les)?(?!\\p{L})', tip: 'Cuenta un inicio sin sorpresa: «Por fin empezamos a ensayar», «Empiezo a estar más tranquilo».' },
              { label: 'Ponerse a + infinitivo (a sudden or decided start)', pattern: '(?<!\\p{L})(?:(?:me|te|se|nos|os)\\s+(?:pus|pon|pong|puest)\\p{L}*|poner(?:me|te|se|nos|os))\\s+a\\s+\\p{L}+(?:ar|er|ir|ír)(?!\\p{L})', tip: 'Cuenta qué empezó de golpe o con decisión: «Se puso a llover», «Me puse a arreglar…».' },
              { label: 'Echarse a + reír, llorar, correr o temblar (a strong reaction)', pattern: '(?<!\\p{L})(?:(?:me|te|se|nos|os)\\s+ech\\p{L}*|echar(?:me|te|se|nos|os))\\s+a\\s+(?:reír|reir|llorar|correr|temblar)(?!\\p{L})', tip: 'Añade una reacción: «Me eché a reír», «Todos se echaron a correr».' },
              { label: 'Estar a punto de o iba a (just before)', pattern: '(?<!\\p{L})(?:a\\s+punto\\s+de|iba\\s+a|ibas\\s+a|íbamos\\s+a|ibamos\\s+a|iban\\s+a)(?!\\p{L})', tip: 'Cuenta el momento de antes: «Estábamos a punto de empezar cuando…».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})(?:empie[zc]\\p{L}*|empe[zc]\\p{L}*|comien[zc]\\p{L}*|come[nz][zc]?\\p{L}*)\\s+de\\s+\\p{L}+(?:ar|er|ir)(?!\\p{L})', why: '«Empezar» y «comenzar» llevan **a** delante del infinitivo: empecé a estudiar, no «empecé de estudiar».' },
              { pattern: '(?<!\\p{L})ech\\p{L}*\\s+a\\s+(?:reírse|reirse|reírme|reirme|reírte|reirte|reírnos|reirnos)(?!\\p{L})', why: 'Con echarse a, el infinitivo va sin pronombre: **me eché a reír**, no «me eché a reírme».' },
              { pattern: '(?<!\\p{L})(?:me|te|se|nos)\\s+(?:puse|pusiste|puso|pusimos|pusieron|pongo|pones|pone|ponemos|ponen)\\s+a\\s+(?:nervios[oa]s?|roj[oa]s?|triste|tristes|content[oa]s?)(?!\\p{L})', why: 'Con un adjetivo, ponerse va sin «a»: **me puse nervioso**. «Ponerse a» va con infinitivo.' },
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
            { tone: 'blue', label: 'EMPEZAR A · COMENZAR A', formula: 'empecé a · empezaba a · he empezado a + infinitivo', example: 'Poco a poco, empecé a entender la obra.', caption: 'el inicio neutro; también estados y procesos lentos', en: 'the neutral start; also for states and slow processes' },
            { tone: 'orange', label: 'PONERSE A', formula: 'me puse a · se puso a + infinitivo', example: 'De repente, se puso a llover.', caption: 'inicio repentino o decidido; verbos de actividad', en: 'a sudden or deliberate start; activity verbs' },
            { tone: 'orange', label: 'ECHARSE A', formula: 'echarse a + reír · llorar · correr · temblar', example: 'Rodrigo se echó a reír.', caption: 'inicio brusco, casi sin control; pocos verbos', en: 'an abrupt start, almost out of control; few verbs' },
            { tone: 'teal', label: 'ESTAR A PUNTO DE · IR A', formula: 'estaba a punto de… cuando · estuve a punto de · voy a', example: 'Estábamos a punto de empezar cuando se fue la luz.', caption: 'antes del inicio: inminente, interrumpido o casi', en: 'before the start: imminent, interrupted, or nearly' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Todas llevan **a** + infinitivo (y estar a punto **de**). Empezar a es la opción neutra y siempre funciona. Ponerse a añade sorpresa o decisión, pero no va con estados. Echarse a es para reír, llorar, correr y temblar, sin otro «se». Y antes del inicio: «estaba a punto de… cuando» (interrumpido) o «estuve a punto de» (casi).', en: 'They all take “a” + infinitive (and “estar a punto de”). “Empezar a” is neutral and always works. “Ponerse a” adds surprise or determination, but not with states. “Echarse a” is for laughing, crying, running and shaking, with no extra “se”. And before the start: “estaba a punto de… cuando” (interrupted) or “estuve a punto de” (nearly).' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'Llevábamos diez minutos en la playa cuando el cielo ___ nublarse.', options: ['se echó a', 'empezó de', 'empezó a'], answer: 2, why: 'Un proceso: el cielo se nubla poco a poco. Empezar a.', en: 'We had been on the beach for ten minutes when the sky began to cloud over.' },
            { prompt: 'La niña vio al perro y ___ llorar.', options: ['estuvo a punto', 'se echó a', 'se echó'], answer: 1, why: 'Llorar de golpe: echarse a llorar.', en: 'The little girl saw the dog and burst into tears.' },
            { prompt: 'Después de comer, mi padre ___ arreglar la bicicleta en el garaje.', options: ['se puso', 'se echó a', 'se puso a'], answer: 2, why: 'Una decisión de empezar una actividad: se puso a.', en: 'After lunch, my father got down to fixing the bike in the garage.' },
            { prompt: 'Ana ___ salir de casa cuando la llamó su jefe.', options: ['se echó a', 'estaba a punto de', 'estuvo a punto'], answer: 1, why: 'Faltaba poco y la llamada lo interrumpió: estaba a punto de… cuando.', en: 'Ana was about to leave home when her boss called her.' },
            { prompt: 'Qué susto: ___ perder el avión, pero llegué justo a tiempo.', options: ['me puse a', 'estuve a punto de', 'empecé a'], answer: 1, why: 'Casi pasó, pero no pasó: estuve a punto de.', en: 'What a scare: I nearly missed the plane, but I arrived just in time.' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Ahora, una entrevista. Now, an interview.', blocks: [
          { kind: 'lead', text: 'Un mes después del estreno, Elena hace su primera entrevista en una radio local. Después se lo cuenta a Natalia. Transforma sus frases.', en: 'A month after the opening night, Elena gives her first interview on a local radio station. Afterwards she tells Natalia about it. Transform her sentences.' },
          { kind: 'rewrite', title: 'La entrevista de Elena · Elena’s interview', items: [
            { prompt: 'Iba a entrar en el estudio. En ese momento me llamaron por teléfono.', instruction: 'Une las ideas con «estar a punto de» (imperfecto) y «cuando». Empieza con «Estaba».', accept: ['Estaba a punto de entrar en el estudio cuando me llamaron por teléfono', 'Estaba a punto de entrar en el estudio cuando me llamaron', 'Estaba a punto de entrar cuando me llamaron por teléfono'] },
            { prompt: 'De repente, el locutor empezó a reír sin control.', instruction: 'Usa echarse a. Empieza con «De repente».', accept: ['De repente, el locutor se echó a reír sin control', 'De repente, el locutor se echó a reír'] },
            { prompt: 'Esta noche empiezo a preparar la próxima entrevista.', instruction: 'Usa ponerse a (una decisión) y cambia «la próxima entrevista» por «la». Empieza con «Esta noche».', accept: ['Esta noche me pongo a prepararla'] },
          ] },
        ] },
        { title: 'Ampliación: romper a, meterse a y variedades · Extension: more starts and varieties', mascot: '/autoestudio/mascot/noting.webp', coach: 'Opcional: registro y regiones. Optional: register and regions.', blocks: [
          { kind: 'lead', text: 'Más perífrasis de inicio. **Romper a** + llorar, llover, hablar: un inicio repentino e intenso; es más literario. **Meterse a** + infinitivo (coloquial): empezar algo sin saber hacerlo o sin que nadie te lo pida. **Comenzar a** es la opción habitual en textos formales. Y en muchas zonas de América, **estar por** + infinitivo significa «estar a punto de»: «Está por llover».', en: 'More ways to express a start. “Romper a” + crying, raining, talking: a sudden, intense start; rather literary. “Meterse a” + infinitive (colloquial): to take on something you are not qualified for, or that nobody asked you to do. “Comenzar a” is the usual choice in formal texts. And in many parts of Latin America, “estar por” + infinitive means “to be about to”: “It’s about to rain.”' },
          { kind: 'choice', title: 'Registro y variedades · Register and varieties', items: [
            { context: 'Una novela. (A novel.)', prompt: '«Al leer la carta, la anciana ___ llorar».', options: ['rompió', 'rompió a', 'se puso de'], answer: 1, why: 'Romper a + llorar: un inicio repentino e intenso, típico de la lengua literaria.', en: '“On reading the letter, the old woman burst into tears.”' },
            { context: 'Un vecino habla de otro. (Colloquial.)', prompt: '«No sabe nada de electricidad, pero ___ arreglar el enchufe y ahora no hay luz».', options: ['se metió a', 'se echó a', 'rompió a'], answer: 0, why: 'Meterse a: empezar algo sin saber hacerlo. Tiene un tono crítico y coloquial.', en: '“He knows nothing about electricity, but he took it upon himself to fix the socket and now there’s no power.”' },
            { context: 'Aviso oficial. (Official notice.)', prompt: '«El plazo de inscripción ___ contar el 1 de marzo».', options: ['se pondrá a', 'comenzará a', 'se echará a'], answer: 1, why: 'En un aviso formal, comenzar a es lo habitual. Ponerse a y echarse a no van en este registro ni con este sujeto.', en: '“The registration period will begin on 1 March.”' },
            { context: 'En México, mirando el cielo. (In Mexico, looking at the sky.)', prompt: '«Llévate el paraguas: ___ llover».', options: ['se echa a', 'está por', 'rompe de'], answer: 1, why: 'En muchas zonas de América, estar por + infinitivo = estar a punto de. En España se diría «está a punto de llover».', en: '“Take the umbrella: it’s about to rain.”' },
            { context: 'Una carta formal. (A formal letter.)', prompt: '¿Qué frase suena adecuada?', options: ['Comenzaremos a recibir solicitudes en enero.', 'Nos echaremos a recibir solicitudes en enero.', 'Nos meteremos a recibir solicitudes en enero.'], answer: 0, why: 'Comenzar a: neutro y formal. Meterse a es coloquial y crítico; echarse a no va con recibir.', en: 'Which sentence sounds appropriate?' },
          ] },
          { kind: 'teacher', text: 'Paso opcional, para alumnos fuertes o si sobra tiempo. Extra: tu alumno cuenta con «meterse a» algo que alguien intentó hacer sin saber (cocinar, pintar, arreglar algo) y cómo terminó.' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 107 · Perífrasis durativas: seguir + gerundio', text: 'Ya cuentas cómo empieza algo: «Empecé a ensayar», «Se puso a llover», «Estaba a punto de salir». En la clase 107 miras lo que pasa después del inicio: la acción **continúa** («Sigo ensayando»), se repite o se termina. Es el paso natural: del principio de una acción a su desarrollo.', en: 'You can now say how something starts: “Empecé a ensayar”, “Se puso a llover”, “Estaba a punto de salir”. In class 107 you look at what happens after the start: the action continues (“Sigo ensayando”), is repeated or stops. It is the natural next step: from the beginning of an action to how it carries on.', href: '/empezar-seguir-repetir-dejar-de-hacer', label: 'Ir a la clase 107' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Qué empezaste a hacer este año y qué estuviste a punto de dejar?». Respuesta esperada: empezar a + infinitivo y estar a punto de + infinitivo. Tarea: escribir el mensaje de Escribir con una historia real.' },
        ] },
      ],
    },
  ],
};
