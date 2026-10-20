import type { LiveLesson } from '../types';

/**
 * Lesson 339 · A1 · Ir a + infinitivo: planes próximos (course unit G039).
 * One scene runs through the class: it is Friday night and Lucía and Daniel,
 * two friends who share a flat, agree what they are going to do on Saturday.
 * Morning: Lucía visits Marta (breakfast at ten); Daniel does not work this
 * Saturday (he usually works at the library). Afternoon: the market. Night:
 * Daniel cooks for Marta and her brother Felipe. In the voice message Marta
 * (Colombian voice, tú) confirms the breakfast and adds her own plans.
 * Content: voy / vas / va / vamos / van + a + infinitivo (vais shown as the
 * Spain form), negation and questions, plan vs habit (present), ir a + lugar
 * vs ir a + infinitivo, a + el = al. Contrast: Trabajo hoy / Voy a trabajar
 * mañana. Mistake: *Voy trabajar mañana. The present for fixed plans
 * («Mañana trabajo») appears only as a recognition note.
 * Instructions use tú.
 */
export const lesson: LiveLesson = {
  id: 339,
  level: 'A1',
  title: 'Ir a + infinitivo: planes próximos',
  subtitle: 'Contar y acordar tus planes para el sábado con voy a, vas a, vamos a + infinitivo, y distinguirlos de tus hábitos.',
  legend: [
    { tone: 'blue', label: 'IR A + INFINITIVO · un plan (going to do)' },
    { tone: 'teal', label: 'PRESENTE · un hábito (what you usually do)' },
    { tone: 'violet', label: 'IR A + LUGAR · un destino (going to a place)' },
    { tone: 'orange', label: 'CUÁNDO · palabras de tiempo (when)' },
  ],
  optionNotes: {
    voy: '«Voy» es la forma de **yo** (I). Mira quién hace el plan.',
    Voy: '«Voy» es la forma de **yo** (I). Mira quién hace el plan.',
    vas: '«Vas» es la forma de **tú** (you). Mira quién hace el plan.',
    Vas: '«Vas» es la forma de **tú** (you). Mira quién hace el plan.',
    va: '«Va» es la forma de **él, ella o usted** (he / she / you formal). Mira quién hace el plan.',
    Va: '«Va» es la forma de **él, ella o usted** (he / she / you formal). Mira quién hace el plan.',
    vamos: '«Vamos» es la forma de **nosotros / nosotras** (we). Mira quién hace el plan.',
    Vamos: '«Vamos» es la forma de **nosotros / nosotras** (we). Mira quién hace el plan.',
    van: '«Van» es la forma de **ellos, ellas o ustedes** (they / you all). Mira quién hace el plan.',
    Van: '«Van» es la forma de **ellos, ellas o ustedes** (they / you all). Mira quién hace el plan.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Planes para el sábado', coach: '¿Qué vas a hacer mañana? What are you going to do tomorrow?',
      steps: [
        { title: 'Viernes por la noche · Friday night', blocks: [
          { kind: 'lead', text: 'Es viernes por la noche. Lucía y Daniel son amigos y comparten apartamento. Hablan de **mañana, sábado**: ¿qué van a hacer? Para hablar de un plan, el español tiene una estructura muy fácil: **ir a + infinitivo**.', en: 'It is Friday night. Lucía and Daniel are friends and share a flat. They talk about tomorrow, Saturday: what are they going to do? To talk about a plan, Spanish has a very easy structure: ir a + infinitive.' },
          { kind: 'guide', text: { teacher: 'Tú lees las tres frases en voz alta y tu alumno las repite. Después tu alumno dice qué frase habla de lo normal y qué frase habla de mañana.', self: 'Lee las tres frases en voz alta. ¿Qué frase habla de lo normal, de todas las semanas? ¿Cuál habla de mañana? (Which one is a habit? Which one is a plan?)' } },
          { kind: 'compare', title: 'Lo normal y el plan · Habit and plan', columns: [
            { tone: 'teal', label: 'HÁBITO · habit', sentence: 'Los sábados Daniel [[trabaja|teal]] en la biblioteca.', idea: 'Lo normal: todas las semanas.', en: 'On Saturdays Daniel works at the library.' },
            { tone: 'blue', label: 'PLAN · plan', sentence: 'Mañana [[voy a visitar|blue]] a Marta.', idea: 'Un plan de Lucía para mañana.', en: 'Tomorrow I am going to visit Marta.' },
            { tone: 'orange', label: 'CUÁNDO · when', sentence: '[[Mañana|orange]] · [[esta noche|orange]] · [[el sábado|orange]]', idea: 'Palabras para un futuro cercano.', en: 'Tomorrow · tonight · on Saturday' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Mañana voy a visitar a Marta» habla de…', options: ['un plan para mañana.', 'un hábito de todas las semanas.', 'algo de ayer.'], answer: 0, why: 'Voy a + visitar = un plan. «Mañana» lo confirma.', en: '“Mañana voy a visitar a Marta” talks about…' },
            { prompt: '«Los sábados Daniel trabaja» habla de…', options: ['una pregunta.', 'lo normal, todas las semanas.', 'un plan solo para este sábado.'], answer: 1, why: '«Los sábados» + presente (trabaja) = un hábito.', en: '“Los sábados Daniel trabaja” talks about…' },
            { prompt: '¿Qué palabra habla de un futuro cercano?', options: ['esta noche', 'siempre', 'todos los días'], answer: 0, why: 'Esta noche = tonight: un momento cercano. Siempre y todos los días hablan de hábitos.', en: 'Which word talks about the near future?' },
          ] },
        ] },
        { title: 'La forma · The form', mascot: '/brand/mascot/standing.webp', coach: 'Ir + a + infinitivo. Three pieces.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'IR A + INFINITIVO', question: '¿Qué vas a hacer?', en: 'going to + verb', formula: ['ir (voy, vas, va…) + a + infinitivo', 'Mañana voy a visitar a Marta.'],
            meaning: 'Con **ir a + infinitivo** cuentas un **plan** o una **intención** para un momento cercano: esta noche, mañana, el sábado. Tres piezas: el verbo **ir** conjugado, la palabra **a** y el **infinitivo** (-ar, -er, -ir).',
            examples: [
              { es: 'Esta noche [[voy a cocinar|blue]] arroz con verduras.', en: 'Tonight I am going to cook rice with vegetables.' },
              { es: 'Mañana Daniel [[va a dormir|blue]] hasta las nueve.', en: 'Tomorrow Daniel is going to sleep until nine.' },
              { es: 'El sábado [[vamos a comprar|blue]] fruta en el mercado.', en: 'On Saturday we are going to buy fruit at the market.' },
              { es: 'Marta y Felipe [[van a venir|blue]] a la cena.', en: 'Marta and Felipe are going to come to dinner.' },
            ],
            note: 'Solo cambia **ir**. La **a** y el **infinitivo** no cambian nunca: voy a cocinar, vamos a cocinar. Ojo: «visitar **a** Marta» lleva otra «a», la de las personas (to visit Marta).' },
          { kind: 'table', title: 'Ir + a + infinitivo · All the people', head: ['Persona', 'ir', '+ a + infinitivo', 'English'], rows: [
            ['yo', '**voy**', 'a cocinar', 'I am going to cook'],
            ['tú', '**vas**', 'a cocinar', 'you are going to cook'],
            ['él · ella · usted', '**va**', 'a cocinar', 'he / she is · you are going to cook'],
            ['nosotros · nosotras', '**vamos**', 'a cocinar', 'we are going to cook'],
            ['vosotros · vosotras (España)', 'vais', 'a cocinar', 'you all are going to cook'],
            ['ellos · ellas · ustedes', '**van**', 'a cocinar', 'they are · you all are going to cook'],
          ], note: 'Ya conoces estas formas: son el presente de **ir**. «Vais» es la forma de vosotros en España; en América se dice «ustedes van».' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Esta noche Daniel ___ a cocinar.', options: ['va', 'voy', 'van'], answer: 0, why: 'Daniel = él: va a cocinar.', en: 'Tonight Daniel is going to cook.' },
            { prompt: 'Mañana nosotros ___ a desayunar con Marta.', options: ['vas', 'vamos', 'van'], answer: 1, why: 'Nosotros: vamos a desayunar.', en: 'Tomorrow we are going to have breakfast with Marta.' },
            { prompt: 'El sábado voy a ___ el apartamento.', options: ['limpiar', 'limpio', 'limpia'], answer: 0, why: 'Después de «a» va el infinitivo: limpiar.', en: 'On Saturday I am going to clean the flat.' },
          ] },
        ] },
        { title: 'Hábito o plan · Habit or plan', mascot: '/brand/mascot/studying.webp', coach: '¿Todas las semanas o este sábado?', blocks: [
          { kind: 'lead', text: 'El presente cuenta lo **normal**: lo que haces todos los días, los sábados, siempre. **Ir a + infinitivo** cuenta un **plan**: lo que vas a hacer esta noche, mañana, este sábado.', en: 'The present tells what is normal: what you do every day, on Saturdays, always. Ir a + infinitive tells a plan: what you are going to do tonight, tomorrow, this Saturday.' },
          { kind: 'table', title: 'Tres pares · Three pairs', head: ['Hábito (presente)', 'Plan (ir a + infinitivo)', 'English'], rows: [
            ['Hoy [[trabajo|teal]], como todos los viernes.', 'Mañana [[voy a trabajar|blue]] en casa.', 'I work today, like every Friday. / Tomorrow I am going to work at home.'],
            ['Los sábados [[cocinamos|teal]] pasta.', 'Este sábado [[vamos a cocinar|blue]] pescado.', 'On Saturdays we cook pasta. / This Saturday we are going to cook fish.'],
            ['Marta [[camina|teal]] por el parque todos los días.', 'Mañana Marta [[va a caminar|blue]] con Lucía.', 'Marta walks in the park every day. / Tomorrow Marta is going to walk with Lucía.'],
          ], note: 'Las palabras de tiempo ayudan. **Todos los días, los sábados, siempre, normalmente** → hábito. **Esta noche, mañana, este sábado, la próxima semana** → plan.' },
          { kind: 'decide', title: '¿Presente o ir a + infinitivo? · Which one?', steps: [
            { q: '¿Es lo normal, algo de todas las semanas o de todos los días? (Is it a habit?)', yes: 'Usa el **presente**: «Los sábados trabajo».', no: 'next' },
            { q: '¿Es un plan para después: esta noche, mañana, el sábado? (Is it a plan for later?)', yes: 'Usa **ir a + infinitivo**: «Mañana voy a trabajar».', no: 'Si pasa ahora, usa el presente: «Ahora como».' },
          ] },
          { kind: 'tip', icon: '🌎', title: 'Para reconocer · To recognise', text: 'También vas a oír el presente para un plan fijo: «Mañana trabajo». Es correcto. Hoy practicas **ir a + infinitivo**, la forma más clara para contar un plan.', en: 'You will also hear the present for a fixed plan: “Mañana trabajo”. It is correct. Today you practise ir a + infinitive, the clearest way to tell a plan.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Todos los días Lucía ___ café a las ocho.', options: ['tomamos', 'toma', 'va tomar'], answer: 1, why: '«Todos los días» = hábito: presente, ella toma. «Va tomar» no existe: falta la a.', en: 'Every day Lucía has coffee at eight.' },
            { prompt: 'Esta noche Lucía ___ una película.', options: ['van a ver', 'va a ver', 'vas a ver'], answer: 1, why: '«Esta noche» = un plan: va a ver.', en: 'Tonight Lucía is going to watch a film.' },
            { prompt: '«Normalmente trabajo los sábados, pero este sábado…»', options: ['no voy trabajar.', 'no voy a trabajar.', 'no trabajo nunca.'], answer: 1, why: 'Este sábado es un plan diferente: no voy a trabajar. Falta la «a» en «voy trabajar».', en: '“I normally work on Saturdays, but this Saturday…”' },
          ] },
        ] },
        { title: 'Ir a un lugar o ir a hacer algo · A place or an action', mascot: '/brand/mascot/speaking.webp', coach: '¿Adónde vas? ¿Qué vas a hacer?', blocks: [
          { kind: 'compare', title: 'Dos usos de «ir a» · Two uses of “ir a”', columns: [
            { tone: 'violet', label: 'IR A + LUGAR · place', sentence: 'Mañana [[vamos al mercado|violet]].', idea: 'El destino: adónde vas. a + el = al.', en: 'Tomorrow we are going to the market.' },
            { tone: 'blue', label: 'IR A + INFINITIVO · action', sentence: 'Mañana [[vamos a comprar|blue]] pescado.', idea: 'La acción: qué vas a hacer.', en: 'Tomorrow we are going to buy fish.' },
            { tone: 'blue', label: 'LAS DOS · both', sentence: 'Mañana [[vamos a ir|blue]] [[al mercado|violet]].', idea: 'Plan + destino: vamos a ir al mercado.', en: 'Tomorrow we are going to go to the market.' },
          ] },
          { kind: 'tip', icon: '💡', title: 'Negativa y pregunta · Negative and question', text: '**No** va antes de ir: «No **voy a** trabajar». Para preguntar, el orden no cambia; cambia la entonación: «¿**Vas a** venir?», «¿Qué **vas a** hacer?».', en: '“No” goes before ir: “No voy a trabajar”. To ask, the word order stays the same; only the intonation changes: “¿Vas a venir?”, “¿Qué vas a hacer?”.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Esta tarde voy ___ cine.', options: ['a', 'al', 'a el'], answer: 1, why: 'Un lugar: ir a + el cine = al cine.', en: 'This afternoon I am going to the cinema.' },
            { prompt: 'Esta tarde voy a ___ una película.', options: ['ver', 'al', 'veo'], answer: 0, why: 'Una acción: ir a + infinitivo, ver.', en: 'This afternoon I am going to watch a film.' },
            { prompt: '¿Cuál es la pregunta correcta?', options: ['¿Qué a vas hacer el sábado?', '¿Qué vas a hacer el sábado?', '¿Qué vas hacer el sábado?'], answer: 1, why: 'Ir + a + infinitivo, también en la pregunta: vas a hacer.', en: 'Which question is correct?' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: '¿Están las tres piezas? Are all three pieces there?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la frase con el error y preguntas: «¿Están las tres piezas: ir, a, infinitivo?». Tu alumno responde y después aparece la corrección.', self: 'Lee cada frase, busca la pieza que falta o que está mal y toca para ver la corrección. (Find the missing or wrong piece, then tap.)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Mañana voy trabajar.', right: 'Mañana voy a trabajar.', why: 'Falta la **a**. Las tres piezas: voy + a + trabajar. (The “a” is never optional.)' },
            { wrong: 'Este sábado vamos a cocinamos.', right: 'Este sábado vamos a cocinar.', why: 'Después de «a» va el **infinitivo**, no el verbo conjugado. (After “a”, the infinitive.)' },
            { wrong: 'Daniel voy a dormir hasta las nueve.', right: 'Daniel va a dormir hasta las nueve.', why: 'Ir cambia con la persona: Daniel = él → **va**. (Ir agrees with the person.)' },
            { wrong: 'Lucía y Daniel va a ir al mercado.', right: 'Lucía y Daniel van a ir al mercado.', why: 'Dos personas = ellos → **van**. (Two people: van.)' },
            { wrong: 'Mañana voy a el cine.', right: 'Mañana voy al cine.', why: 'a + el = **al**. Es obligatorio. (a + el always becomes al.)' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Cuál es correcta?', options: ['Felipe va a llega a las once.', 'Felipe va a llegar a las once.', 'Felipe va llegar a las once.'], answer: 1, why: 'Va + a + llegar (infinitivo).', en: 'Which one is correct?' },
            { prompt: '¿Cuál es correcta?', options: ['Ustedes va a comer con nosotros.', 'Ustedes van a comer con nosotros.', 'Ustedes vamos a comer con nosotros.'], answer: 1, why: 'Ustedes → van.', en: 'Which one is correct?' },
            { prompt: '¿Cuál es correcta?', options: ['Voy a no salgo esta noche.', 'No voy a salir esta noche.', 'Voy no a salir esta noche.'], answer: 1, why: '«No» va antes de ir, y después de «a» va el infinitivo.', en: 'Which one is correct?' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno dice tres planes reales para este fin de semana con «voy a…» y un hábito con el presente: «Los sábados…».' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'El plan del sábado', coach: 'Toca las palabras marcadas. Tap the marked words.',
      steps: [
        { title: 'En la cocina · In the kitchen', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Daniel y tu alumno es Lucía. Después, tu alumno toca cada expresión marcada y dice si es un plan, un hábito, un lugar o una palabra de tiempo.', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada: ¿plan, hábito, lugar o tiempo? (Tap each marked expression.)' } },
          { kind: 'explore', title: '¿Qué vas a hacer mañana?', setting: 'Viernes, a las nueve de la noche, en la cocina del apartamento. Lucía y Daniel organizan el sábado. (Friday, 9 p.m., in the flat’s kitchen. They plan Saturday.)', lines: [
            { who: 'Daniel', text: 'Lucía, ¿qué [[vas a hacer|blue]] [[mañana|orange]]?', en: 'Lucía, what are you going to do tomorrow?' },
            { who: 'Lucía', text: 'Por la mañana [[voy a visitar|blue]] a Marta. Vamos a desayunar en su casa a las diez.', en: 'In the morning I am going to visit Marta. We are going to have breakfast at her place at ten.' },
            { who: 'Daniel', text: 'Yo, normalmente, los sábados [[trabajo|teal]] en la biblioteca. Pero este sábado no [[voy a trabajar|blue]].', en: 'I normally work at the library on Saturdays. But this Saturday I am not going to work.' },
            { who: 'Lucía', text: '¡Qué bien! [[Por la tarde|orange]], ¿[[vamos al mercado|violet]]? Necesitamos pescado para la cena.', en: 'Great! In the afternoon, shall we go to the market? We need fish for dinner.' },
            { who: 'Daniel', text: 'Perfecto. Y [[por la noche|orange]] [[voy a cocinar|blue]] yo: pescado con arroz.', en: 'Perfect. And at night I am going to cook: fish with rice.' },
            { who: 'Lucía', text: 'Marta y su hermano Felipe [[van a venir|blue]] a la cena. Pero Marta no come pescado: [[siempre come|teal]] verdura.', en: 'Marta and her brother Felipe are going to come to dinner. But Marta does not eat fish: she always eats vegetables.' },
            { who: 'Daniel', text: 'No hay problema. [[Voy a hacer|blue]] también una ensalada grande.', en: 'No problem. I am also going to make a big salad.' },
            { who: 'Lucía', text: '¿Y la película? Los sábados por la noche [[vemos|teal]] una película.', en: 'And the film? On Saturday nights we watch a film.' },
            { who: 'Daniel', text: 'Sí, pero mañana no. [[Vamos a hablar|blue]] con Marta y Felipe toda la noche.', en: 'Yes, but not tomorrow. We are going to talk with Marta and Felipe all night.' },
            { who: 'Lucía', text: 'Muy bien. ¿Y tú [[vas a venir|blue]] al desayuno también?', en: 'Very good. And are you going to come to the breakfast too?' },
            { who: 'Daniel', text: '¡Sí! Pero primero [[voy a dormir|blue]] hasta las nueve.', en: 'Yes! But first I am going to sleep until nine.' },
          ], notes: {
            'vas a hacer': 'La pregunta típica para un plan: ¿qué **vas a hacer**? Tú → vas. (What are you going to do?)',
            'mañana': '**Mañana** = tomorrow: una palabra de tiempo que pide un plan.',
            'voy a visitar': 'Yo → **voy** + a + visitar. Es la frase ancla de la clase. «A Marta»: la «a» de las personas.',
            'trabajo': 'Presente: **trabajo**. Con «normalmente, los sábados» es un hábito, lo de todas las semanas.',
            'voy a trabajar': 'Este sábado es diferente: **no voy a trabajar**. «No» va antes de ir.',
            'Por la tarde': '**Por la tarde** = in the afternoon. Otra palabra de tiempo para organizar el día.',
            'vamos al mercado': 'Ir a + **lugar**: el destino. a + el = **al**. No hay infinitivo: es un lugar.',
            'por la noche': '**Por la noche** = at night: la tercera parte del sábado.',
            'voy a cocinar': 'Plan de Daniel: **voy a cocinar**. Yo → voy.',
            'van a venir': 'Marta y Felipe = ellos → **van** a venir.',
            'siempre come': '**Siempre** + presente: un hábito de Marta. No es un plan.',
            'Voy a hacer': 'Otro plan: **voy a hacer** una ensalada. Hacer es irregular, pero el infinitivo no cambia.',
            'vemos': 'Presente: **vemos**. «Los sábados por la noche» = un hábito de los dos.',
            'Vamos a hablar': 'Nosotros → **vamos a hablar**. El plan cambia el hábito: mañana no hay película.',
            'vas a venir': 'Pregunta con tú: ¿**vas a venir**? Solo cambia la entonación.',
            'voy a dormir': 'Daniel → yo: **voy a dormir**. Primero el plan de la mañana.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Qué va a hacer Lucía por la mañana?', options: ['Va a visitar a Marta.', 'Va a trabajar en la biblioteca.', 'Va a ir al mercado.'], answer: 0, why: '«Por la mañana voy a visitar a Marta».', en: 'What is Lucía going to do in the morning?' },
            { prompt: '¿Qué hace Daniel normalmente los sábados?', options: ['Cocina pescado.', 'Visita a Marta.', 'Trabaja en la biblioteca.'], answer: 2, why: '«Normalmente, los sábados trabajo en la biblioteca». Es un hábito.', en: 'What does Daniel normally do on Saturdays?' },
            { prompt: '¿Por qué va a hacer Daniel una ensalada?', options: ['Porque no hay pescado en el mercado.', 'Porque Felipe no come arroz.', 'Porque Marta no come pescado.'], answer: 2, why: '«Marta no come pescado: siempre come verdura».', en: 'Why is Daniel going to make a salad?' },
          ] },
        ] },
        { title: 'La agenda del sábado · Saturday’s plan', mascot: '/autoestudio/mascot/noting.webp', coach: '¿Plan o hábito? Plan or habit?', blocks: [
          { kind: 'guide', text: { teacher: 'Tu alumno lee cada frase sobre Lucía, Daniel y Marta y decide: ¿un plan para este sábado o un hábito? Tú lees la frase otra vez con la entonación correcta.', self: 'Lee cada frase. ¿Es un plan para este sábado o un hábito de todas las semanas? (A plan or a habit?)' } },
          { kind: 'classify', title: '¿Plan o hábito? · Plan or habit?', categories: [
            { id: 'plan', label: 'PLAN · ir a + infinitivo', tone: 'blue' },
            { id: 'habito', label: 'HÁBITO · presente', tone: 'teal' },
          ], items: [
            { text: 'Mañana Lucía va a desayunar con Marta.', answer: 'plan', why: 'Mañana + va a desayunar: un plan.' },
            { text: 'Los sábados Daniel trabaja en la biblioteca.', answer: 'habito', why: 'Los sábados + presente: un hábito.' },
            { text: 'Esta noche Daniel va a cocinar pescado.', answer: 'plan', why: 'Esta noche + va a cocinar: un plan.' },
            { text: 'Marta siempre come verdura.', answer: 'habito', why: 'Siempre + presente: un hábito.' },
            { text: 'Por la tarde van a comprar pescado.', answer: 'plan', why: 'Van a comprar: el plan de la tarde.' },
            { text: 'Los sábados por la noche ven una película.', answer: 'habito', why: 'Los sábados + presente: lo normal.' },
            { text: 'Mañana no van a ver la película.', answer: 'plan', why: 'No van a ver: un plan negativo para mañana.' },
            { text: 'Felipe va a llegar a la cena a las ocho.', answer: 'plan', why: 'Va a llegar: un plan para el sábado.' },
          ] },
          { kind: 'teacher', text: 'Al final, tu alumno cambia dos hábitos en planes: «Los sábados Daniel trabaja» → «Este sábado Daniel no va a trabajar».' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Ir + a + infinitivo. Three pieces.',
      steps: [
        { title: 'Elige la forma de ir · Choose the form of ir', blocks: [
          { kind: 'choice', items: [
            { context: 'Felipe habla de él. (Felipe talks about himself.)', prompt: 'El sábado ___ a llevar el postre.', options: ['va', 'vamos', 'voy'], answer: 2, why: 'Felipe habla de él mismo: yo → voy.', en: 'On Saturday I am going to bring dessert.' },
            { context: 'Lucía habla con Daniel. (Lucía talks to Daniel.)', prompt: '¿___ a venir al mercado conmigo?', options: ['Va', 'Van', 'Vas'], answer: 2, why: 'Lucía habla con Daniel: tú → vas.', en: 'Are you going to come to the market with me?' },
            { context: 'Marta y Felipe: ellos. (Marta and Felipe: they.)', prompt: 'Marta y Felipe ___ a llegar a las ocho.', options: ['vamos', 'van', 'va'], answer: 1, why: 'Dos personas, ellos → van.', en: 'Marta and Felipe are going to arrive at eight.' },
            { context: 'Lucía y Daniel: nosotros. (Lucía and Daniel: we.)', prompt: 'El domingo ___ a descansar en casa.', options: ['van', 'voy', 'vamos'], answer: 2, why: 'Lucía habla de ella y Daniel: nosotros → vamos.', en: 'On Sunday we are going to rest at home.' },
            { context: 'Daniel habla con la madre de Marta. (formal: usted)', prompt: 'Señora, ¿usted ___ a venir a la cena?', options: ['va', 'vas', 'van'], answer: 0, why: 'Usted usa la forma de él / ella: va.', en: 'Madam, are you going to come to dinner?' },
          ] },
        ] },
        { title: '¿Plan, hábito o lugar? · Plan, habit or place?', mascot: '/autoestudio/mascot/noting.webp', coach: 'Mira el tiempo y lo que va después de «a».', blocks: [
          { kind: 'classify', title: '¿Qué cuenta la frase? · What does the sentence tell?', categories: [
            { id: 'plan', label: 'PLAN · ir a + infinitivo', tone: 'blue' },
            { id: 'habito', label: 'HÁBITO · presente', tone: 'teal' },
            { id: 'lugar', label: 'LUGAR · ir a + lugar', tone: 'violet' },
          ], items: [
            { text: 'Los domingos Felipe corre en el parque.', answer: 'habito', why: 'Los domingos + presente (corre): un hábito.' },
            { text: 'Esta tarde Marta va a estudiar inglés.', answer: 'plan', why: 'Va a + estudiar (infinitivo): un plan.' },
            { text: 'Ahora Daniel va a la panadería.', answer: 'lugar', why: 'Va a + la panadería (un lugar): un destino, no un infinitivo.' },
            { text: 'Normalmente Lucía desayuna a las ocho.', answer: 'habito', why: 'Normalmente + presente: un hábito.' },
            { text: 'Marta y Felipe van al parque.', answer: 'lugar', why: 'Van al parque: ir a + el = al, un lugar.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', mascot: '/brand/mascot/kneeling.webp', coach: 'Busca las tres piezas.', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Mañana vamos ver una película.', ok: false, options: ['Mañana vamos a ver una película.', 'Mañana vamos a vemos una película.', 'Mañana vamos al ver una película.'], answer: 0, why: 'Falta la **a**: vamos + a + ver.' },
            { sentence: 'Lucía va a visita a su madre.', ok: false, options: ['Lucía va visitar a su madre.', 'Lucía vas a visitar a su madre.', 'Lucía va a visitar a su madre.'], answer: 2, why: 'Después de «a», el infinitivo: visitar, no visita.' },
            { sentence: '¿Tú vas a cocinar esta noche?', ok: true, why: 'Correcta: tú → vas, + a + cocinar.' },
            { sentence: 'Marta y Felipe va a traer el postre.', ok: false, options: ['Marta y Felipe van a traer el postre.', 'Marta y Felipe vamos a traer el postre.', 'Marta y Felipe van traer el postre.'], answer: 0, why: 'Ellos → **van**, y la «a» no desaparece.' },
            { sentence: 'Esta tarde voy a el mercado.', ok: false, options: ['Esta tarde voy a mercado.', 'Esta tarde voy en el mercado.', 'Esta tarde voy al mercado.'], answer: 2, why: 'a + el = **al**: voy al mercado.' },
          ] },
        ] },
        { title: 'Completa los mensajes · Complete the messages', mascot: '/brand/mascot/speaking.webp', coach: 'Sábado, nueve y media de la mañana.', blocks: [
          { kind: 'chat-fill', title: 'Mensajes del sábado · Saturday messages', lines: [
            { who: 'Lucía', text: 'Daniel, ¿estás despierto? ¿___ a venir a casa de Marta?', options: ['Va', 'Voy', 'Vas'], answer: 2, why: 'Lucía habla con Daniel: tú → vas.' },
            { who: 'Daniel', text: 'Sí, pero primero ___ un café.', options: ['voy a tomo', 'voy a tomar', 'voy tomar'], answer: 1, why: 'Las tres piezas: voy + a + tomar (infinitivo).' },
            { who: 'Lucía', text: 'Bien. Marta va a preparar arepas.' },
            { who: 'Daniel', text: '¡Qué rico! ¿Y después? ¿___ al mercado?', options: ['Vamos', 'Vamos a', 'Vamos en'], answer: 0, why: 'Un lugar: vamos al mercado. «Al» ya tiene la a (a + el).' },
            { who: 'Lucía', text: 'Sí. Normalmente los sábados ___ una película, pero hoy no hay tiempo.', options: ['vemos', 'vamos a vemos', 'ven'], answer: 0, why: 'Normalmente + los sábados = hábito: presente, nosotros → vemos.' },
            { who: 'Daniel', text: 'Claro. Y esta noche ___ pescado con arroz. ¡Es mi especialidad!', options: ['voy a cocinar', 'voy cocinar', 'va a cocinar'], answer: 0, why: 'Daniel habla de él: yo → voy a cocinar. Esta noche = un plan.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/brand/mascot/portrait.webp', coach: 'Ir, a, infinitivo.', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['a', 'Felipe', 'va', 'el', 'postre', 'traer'], accept: ['Felipe va a traer el postre'], en: 'Felipe is going to bring dessert.' },
            { tiles: ['vamos', 'a', 'No', 'ver', 'película', 'una'], accept: ['No vamos a ver una película'], en: 'We are not going to watch a film.' },
            { tiles: ['vas', '¿Qué', 'a', 'hacer', 'domingo?', 'el'], accept: ['¿Qué vas a hacer el domingo?'], en: 'What are you going to do on Sunday?' },
            { tiles: ['a', 'voy', 'Mañana', 'descansar'], accept: ['Mañana voy a descansar', 'Voy a descansar mañana'], en: 'Tomorrow I am going to rest.' },
          ] },
        ] },
        { title: 'Del hábito al plan · From habit to plan', mascot: '/autoestudio/mascot/writing.webp', coach: 'Lo normal → el plan de este fin de semana.', blocks: [
          { kind: 'rewrite', title: 'Escribe el plan · Write the plan', items: [
            { prompt: 'Los sábados trabajo en la biblioteca. (este sábado → descansar)', instruction: 'Escribe el plan con ir a + infinitivo. Empieza con «Este sábado».', accept: ['Este sábado voy a descansar', 'Este sábado yo voy a descansar', 'Este sábado voy a descansar en casa'] },
            { prompt: 'Normalmente Marta desayuna sola. (mañana → desayunar con Lucía)', instruction: 'Escribe el plan de Marta. Empieza con «Mañana Marta».', accept: ['Mañana Marta va a desayunar con Lucía'] },
            { prompt: 'Los domingos Lucía y Daniel limpian el apartamento. (este domingo → ir a la playa)', instruction: 'Escribe el plan de los dos. Empieza con «Este domingo».', accept: ['Este domingo Lucía y Daniel van a ir a la playa', 'Este domingo van a ir a la playa'] },
            { prompt: 'We are going to cook tonight.', instruction: 'Escribe la frase en español. (tonight = esta noche)', accept: ['Vamos a cocinar esta noche', 'Esta noche vamos a cocinar', 'Nosotros vamos a cocinar esta noche', 'Esta noche nosotros vamos a cocinar'] },
          ] },
          { kind: 'teacher', text: 'Después de cada plan, tu alumno dice la frase en negativo: «Este sábado no voy a trabajar».' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Un mensaje de voz de Marta', coach: 'Primero escucha sin leer. Listen first, read later.',
      steps: [
        { title: 'Marta responde · Marta answers', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general (¿por qué manda Marta el mensaje?). Segunda escucha: tu alumno levanta la mano cada vez que oye voy a, va a o vamos a. Después, las preguntas.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Cuenta cuántas veces oyes «voy a», «va a» o «vamos a». (Listen once for the gist, once for the details.)' } },
          { kind: 'listen', title: 'Un mensaje de voz de Marta', channel: 'MENSAJE DE VOZ · DE MARTA PARA LUCÍA', src: '/audio/grammar-live/339.mp3',
            before: 'Lucía le escribe a Marta: «Mañana voy a tu casa a las diez». Marta responde con un mensaje de voz. ¿Qué planes crees que cuenta? (Marta answers Lucía with a voice message. What plans do you think she talks about?)',
            gist: { prompt: '¿Por qué manda Marta el mensaje? · Why does Marta send the message?', options: ['Para confirmar el desayuno y contar sus planes del sábado.', 'Para cancelar el desayuno.', 'Para invitar a Lucía al cine.'], answer: 0, why: '«Sí, mañana estoy en casa toda la mañana. Voy a preparar un desayuno grande».', en: 'Why does Marta send the message?' },
            details: [
              { prompt: '¿Qué va a preparar Marta?', options: ['Una ensalada grande.', 'Arepas, fruta y café.', 'Pescado con arroz.'], answer: 1, why: '«Voy a preparar un desayuno grande: arepas, fruta y café».', en: 'What is Marta going to make?' },
              { prompt: '¿A qué hora va a venir Felipe?', options: ['A las once.', 'A las diez.', 'A las dos.'], answer: 0, why: '«Mi hermano Felipe también va a venir, a las once».', en: 'What time is Felipe going to come?' },
              { prompt: '¿Por qué no puede Marta a las dos?', options: ['Va a ir al mercado.', 'Va a llevar a su perro al veterinario.', 'Va a trabajar en la biblioteca.'], answer: 1, why: '«A las dos no puedo, porque voy a llevar a mi perro al veterinario».', en: 'Why can’t Marta make it at two?' },
              { prompt: '¿Qué van a llevar Marta y Felipe a la cena?', options: ['El postre.', 'El pescado.', 'Una película.'], answer: 0, why: '«Por la noche, Felipe y yo vamos a llevar el postre para la cena».', en: 'What are Marta and Felipe going to bring to dinner?' },
              { prompt: '¿Qué pregunta Marta al final?', options: ['A qué hora es la cena.', 'Si Daniel va a venir al desayuno.', 'Si Lucía va a cocinar.'], answer: 1, why: '«¿Y Daniel? ¿Va a venir al desayuno también?».', en: 'What does Marta ask at the end?' },
            ],
            transcript: 'Hola, Lucía. Soy Marta. ¡Qué bien tu mensaje! Sí, mañana estoy en casa toda la mañana. [[Voy a preparar|blue]] un desayuno grande: arepas, fruta y café. Mi hermano Felipe también [[va a venir|blue]], a las once. Después del desayuno, ¿[[vamos a caminar|blue]] por el parque? Mañana [[va a hacer|blue]] sol. Ah, una cosa: a las dos no puedo, porque [[voy a llevar|blue]] a mi perro al veterinario. Y por la noche, Felipe y yo [[vamos a llevar|blue]] el postre para la cena. ¿Y Daniel? ¿[[Va a venir|blue]] al desayuno también? Espero tu mensaje esta noche. Un abrazo. ¡Chao!',
            reply: { teacher: 'Tú eres Marta. Tu alumno responde al mensaje como Lucía: dice a qué hora va a llegar, si Daniel va a venir y qué van a hacer por la tarde, con ir a + infinitivo.', self: 'Responde a Marta en voz alta como Lucía: a qué hora vas a llegar, si Daniel va a venir y qué van a hacer por la tarde. «Hola, Marta. Voy a llegar a las…». (Answer Marta aloud with three plans.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Tu sábado', coach: 'Cuenta tus planes. Tell your plans.',
      steps: [
        { title: 'Planes para el sábado · Plans for Saturday', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la pregunta y tu alumno responde con planes completos: voy a + infinitivo. Tú repites su frase bien dicha y haces la repregunta.', self: 'Lee la pregunta, responde en voz alta con planes completos y, si quieres, escribe tu respuesta. (Answer aloud with full plans.)' } },
          { kind: 'talk', cards: [
            { q: '¿Qué vas a hacer este sábado por la mañana? · What are you going to do this Saturday morning?', followUps: ['¿A qué hora? (At what time?)', '¿Con quién? (With whom?)'], phrases: ['[[Voy a dormir|blue]] hasta las …', '[[Voy a visitar|blue]] a …', '[[Voy a ir|blue]] [[al mercado|violet]] / al parque.'], hint: 'Voy a + infinitivo. Añade la hora: «a las diez».', example: 'El sábado por la mañana voy a dormir hasta las nueve. Después voy a visitar a mi madre. Vamos a desayunar juntas.', next: 'Ahora, lo normal y lo diferente.' },
            { q: 'Normalmente, ¿qué haces los sábados? ¿Y este sábado? · What do you usually do on Saturdays? And this Saturday?', followUps: ['¿Este sábado es diferente? ¿Por qué? (Is this Saturday different? Why?)', '¿Qué no vas a hacer? (What are you not going to do?)'], phrases: ['Los sábados [[trabajo|teal]] / [[limpio|teal]] la casa.', 'Pero este sábado [[voy a|blue]] …', 'Este sábado no [[voy a trabajar|blue]].'], hint: 'Lo normal con el presente; el plan con voy a + infinitivo.', example: 'Normalmente los sábados trabajo por la mañana. Pero este sábado no voy a trabajar: voy a descansar y voy a leer.', next: 'Ahora, un plan con tu compañero.' },
            { q: 'Propón un plan para el sábado por la tarde. · Suggest a plan for Saturday afternoon.', followUps: ['¿A qué hora? (What time?)', '¿Dónde? (Where?)', '¿Quién más va a venir? (Who else is going to come?)'], phrases: ['¿[[Vamos a caminar|blue]] por el parque?', '¿[[Vas a venir|blue]] al cine?', '¿[[Vamos al mercado|violet]] a las cuatro?'], hint: 'Para proponer: «¿Vamos a + infinitivo?» o «¿Vamos al + lugar?».', example: '¿Vamos a caminar por el parque a las cuatro? Después podemos ir al mercado. Marta también va a venir.', teacher: 'Responde al plan con otra propuesta: «A las cuatro no puedo. ¿Vamos a las seis?».', next: 'Ahora, la cena.' },
            { q: 'Por la noche vas a hacer una cena en casa. ¿Qué vas a cocinar? ¿Quién va a venir? · You are going to have a dinner at home. What are you going to cook? Who is going to come?', followUps: ['¿Quién va a llevar el postre? (Who is going to bring dessert?)', '¿Qué van a beber? (What are you going to drink?)'], phrases: ['[[Voy a cocinar|blue]] …', 'Mis amigos [[van a venir|blue]] a las …', 'Ana [[va a llevar|blue]] el postre.'], hint: 'Usa personas diferentes: voy a, va a, van a.', example: 'Voy a cocinar arroz con verduras. Mis amigos van a venir a las ocho. Ana va a llevar el postre y vamos a beber limonada.', next: 'Ahora, un problema.' },
            { q: 'Marta no puede a las dos: va a llevar a su perro al veterinario. Cambia el plan. · Marta can’t make it at two. Change the plan.', followUps: ['¿Qué van a hacer entonces? (What are you going to do then?)', '¿A qué hora va a llegar Marta? (What time is Marta going to arrive?)'], phrases: ['Entonces [[vamos a|blue]] …', 'Marta [[va a llegar|blue]] más tarde.', 'Daniel y yo [[vamos a ir|blue]] [[al mercado|violet]].'], hint: 'Primero el problema, después el nuevo plan con vamos a.', example: 'Marta no puede a las dos. Entonces Daniel y yo vamos a ir al mercado a las dos y Marta va a llegar a la cena a las ocho.', teacher: 'Tú eres Marta: aceptas el plan o propones otra hora.', next: 'Para terminar, tu sábado completo.' },
            { q: 'Cuenta tu sábado completo: mañana, tarde y noche, con la hora. · Tell your whole Saturday: morning, afternoon and night, with times.', followUps: ['¿Qué no vas a hacer este sábado? (What are you not going to do?)', '¿Y el domingo? (And on Sunday?)'], phrases: ['Por la mañana [[voy a|blue]] …', 'Por la tarde [[vamos a|blue]] …', 'Por la noche …'], hint: 'Tres partes del día, tres planes. Un hábito con el presente, si quieres.', example: 'Por la mañana voy a dormir hasta las diez. Por la tarde voy a ir al mercado con mi hermana. Por la noche vamos a cocinar pasta. Normalmente veo una película, pero este sábado no.', teacher: 'Tú cuentas tu sábado también. Tu alumno compara: «Tú vas a trabajar, pero yo voy a descansar».' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno hace las preguntas («¿Qué vas a hacer…?») y tú respondes con tus planes.', self: 'Ahora haz tú las preguntas en voz alta («¿Qué vas a hacer el sábado?») y responde como Daniel. (Now ask the questions and answer as Daniel.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Un mensaje con tus planes', coach: 'Tres planes y una pregunta.',
      steps: [
        { title: 'Un mensaje para Marta · A message for Marta', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos las tres piezas (ir, a, infinitivo) y la persona de ir. Después, tu alumno lee su mensaje en voz alta.', self: 'Escribe tu mensaje y toca «Revisar mi texto». Mira bien las tres piezas: ir + a + infinitivo. (Write your message and tap “Revisar mi texto”.)' } },
          { kind: 'write', title: 'Planes para el sábado · Plans for Saturday', situation: 'Eres Lucía (o eres tú). Escribe un mensaje a Marta con los planes del sábado: la mañana, la tarde y la noche, e invítala a algo. (You are Lucía, or yourself. Write Marta a message with the plans for Saturday and invite her to something.)', task: [
            'Saluda a Marta. (Say hello.)',
            'Cuenta tres planes con **ir a + infinitivo** y la hora o la parte del día. (Three plans with ir a + infinitive.)',
            'Cuenta un hábito con el presente y compáralo con el plan: «Normalmente…, pero este sábado…». (One habit vs. the plan.)',
            'Haz una pregunta con «¿Vas a…?». (Ask a question with “¿Vas a…?”.)',
          ], starters: ['Hola, Marta:', 'Mañana voy a …', 'A las … vamos a …', 'Normalmente …, pero este sábado …', 'Por la noche …', '¿Vas a venir …?', 'Un abrazo.'],
            words: ['voy a', 'vas a', 'va a', 'vamos a', 'van a', 'mañana', 'por la mañana', 'por la tarde', 'por la noche', 'normalmente', 'los sábados', 'al mercado', 'un abrazo'],
            model: 'Hola, Marta: ¡Gracias por tu mensaje! Mañana Daniel y yo [[vamos a ir|blue]] a tu casa a las diez. Normalmente Daniel [[trabaja|teal]] los sábados, pero este sábado no [[va a trabajar|blue]]. Después del desayuno [[vamos a caminar|blue]] por el parque. Por la tarde Daniel y yo [[vamos a comprar|blue]] pescado y verdura en el mercado. Por la noche Daniel [[va a cocinar|blue]] arroz con verduras para ti. ¿[[Vas a venir|blue]] a las ocho? Un abrazo, Lucía.',
            minWords: 40,
            checks: [
              { label: 'Ir a + infinitivo (a plan)', pattern: '(?<!\\p{L})(?:voy|vas|va|vamos|van)\\s+a\\s+\\p{L}+(?:ar|er|ir)(?!\\p{L})', tip: 'Cuenta un plan: «Mañana voy a visitar a Marta».' },
              { label: 'Un hábito: normalmente, siempre, los sábados… (a habit)', pattern: '(?<!\\p{L})(?:normalmente|siempre|los\\s+s[aá]bados|todos\\s+los\\s+d[ií]as)(?!\\p{L})', tip: 'Cuenta lo normal con el presente: «Normalmente trabajo los sábados, pero…».' },
              { label: 'Una pregunta con ¿vas a…? (a question)', pattern: '¿[^?]*(?<!\\p{L})vas\\s+a\\s+\\p{L}+', tip: 'Pregunta a Marta: «¿Vas a venir a la cena?».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})(?:voy|vas|va|vamos|van)\\s+(?:trabajar|comer|cocinar|ver|visitar|hacer|comprar|dormir|preparar|caminar|llevar|venir|salir|descansar|llegar|desayunar)(?!\\p{L})', why: 'Falta la **a**: «voy **a** trabajar», «vamos **a** cocinar».' },
              { pattern: '(?<!\\p{L})(?:voy|vas|va|vamos|van)\\s+a\\s+(?:visito|visitamos|cocino|cocinamos|compro|compramos|comemos|vemos|trabajo|trabajamos|camino|caminamos)(?!\\p{L})', why: 'Después de «a» va el **infinitivo**: «vamos a cocinar», no «vamos a cocinamos».' },
              { pattern: '(?<!\\p{L})a\\s+el(?!\\p{L})', why: '**a + el = al**: «voy al mercado», «vamos al parque».' },
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
            { tone: 'blue', label: 'IR A + INFINITIVO', formula: 'voy · vas · va · vamos · van + a + infinitivo', example: 'Mañana voy a visitar a Marta.', caption: 'un plan cercano', en: 'going to + verb: a plan' },
            { tone: 'teal', label: 'PRESENTE', formula: 'trabajo · come · vemos', example: 'Los sábados Daniel trabaja.', caption: 'lo normal, un hábito', en: 'present: what you usually do' },
            { tone: 'violet', label: 'IR A + LUGAR', formula: 'voy a + lugar · a + el = al', example: 'Vamos al mercado.', caption: 'el destino', en: 'going to a place' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Tres piezas, siempre: **ir** conjugado + **a** + **infinitivo**. Solo cambia ir (voy, vas, va, vamos, van). Lo normal va en presente: «Trabajo hoy»; el plan, con ir a: «Voy a trabajar mañana».', en: 'Three pieces, always: ir conjugated + a + infinitive. Only ir changes. What is normal goes in the present: “Trabajo hoy”; the plan goes with ir a: “Voy a trabajar mañana”.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'Mañana Felipe ___ a llevar el postre.', options: ['va', 'voy', 'van'], answer: 0, why: 'Felipe = él → va.', en: 'Tomorrow Felipe is going to bring dessert.' },
            { prompt: 'Esta noche voy ___ cocinar.', options: ['a', 'al', 'de'], answer: 0, why: 'Ir + **a** + infinitivo: la a no desaparece.', en: 'Tonight I am going to cook.' },
            { prompt: 'Los sábados Marta ___ en el parque.', options: ['va caminar', 'camina', 'caminar'], answer: 1, why: 'Los sábados = hábito: presente, ella camina.', en: 'On Saturdays Marta walks in the park.' },
            { prompt: 'Lucía y Daniel van a ___ pescado.', options: ['compran', 'compra', 'comprar'], answer: 2, why: 'Después de «a», el infinitivo: comprar.', en: 'Lucía and Daniel are going to buy fish.' },
            { prompt: 'Por la tarde vamos ___ mercado.', options: ['a', 'al', 'a el'], answer: 1, why: 'Un lugar con el: a + el = al.', en: 'In the afternoon we are going to the market.' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Del sábado al lunes.', blocks: [
          { kind: 'lead', text: 'Es lunes. En el trabajo, Elena, una compañera, pregunta a Daniel por sus planes de la semana. Escribe las respuestas de Daniel.', en: 'It is Monday. At work, Elena, a colleague, asks Daniel about his plans for the week. Write Daniel’s answers.' },
          { kind: 'rewrite', title: 'Los planes de la semana · Plans for the week', items: [
            { prompt: 'Elena: ¿Qué vas a hacer esta noche? (Daniel → estudiar inglés)', instruction: 'Responde como Daniel con ir a + infinitivo. Empieza con «Esta noche».', accept: ['Esta noche voy a estudiar inglés', 'Esta noche yo voy a estudiar inglés'] },
            { prompt: 'Elena: ¿Y el miércoles? (Daniel y Lucía → ir al cine)', instruction: 'Responde con nosotros. Empieza con «El miércoles».', accept: ['El miércoles vamos a ir al cine', 'El miércoles Lucía y yo vamos a ir al cine', 'El miércoles nosotros vamos a ir al cine'] },
            { prompt: 'Elena: ¿Trabajas el sábado? (Normalmente sí, pero este sábado → no trabajar)', instruction: 'Responde con un hábito y un plan. Empieza con «Normalmente trabajo».', accept: ['Normalmente trabajo, pero este sábado no voy a trabajar', 'Normalmente trabajo los sábados, pero este sábado no voy a trabajar'] },
          ] },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 040 · Querer, poder y tener que + infinitivo', text: 'Ya cuentas tus planes con **ir a + infinitivo**. En la clase 040 usas la misma idea, un verbo + infinitivo, con **querer**, **poder** y **tener que**: lo que quieres hacer, lo que puedes hacer y lo que tienes que hacer. «Quiero salir, pero tengo que estudiar».', en: 'You can now tell your plans with ir a + infinitive. In class 040 you use the same idea, a verb + infinitive, with querer, poder and tener que: what you want to do, what you can do and what you have to do. “Quiero salir, pero tengo que estudiar”.', href: '/gramatica/querer-poder-tener-que', label: 'Ir a la clase 040' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Qué vas a hacer este fin de semana? ¿Y qué haces normalmente?». Respuesta esperada: dos planes con voy a / vamos a + infinitivo y un hábito en presente. Tarea: mandar el mensaje de Escribir a una persona real.' },
        ] },
      ],
    },
  ],
};
