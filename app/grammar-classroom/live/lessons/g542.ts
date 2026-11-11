import type { LiveLesson } from '../types';

/**
 * Lesson 542 · A2 · Adverbios en -mente: decir cómo se hace algo (course unit G242,
 * extension from the PCIC coverage review of 2026-11-11; studied after G053).
 * One scene: Nico's first week at a driving school with his instructor, Elena.
 * In the voice message Elena (Colombian voice, tú to Nico) sums up the week before
 * his test. Content: feminine adjective + -mente (lento → lentamente; fácil →
 * fácilmente, the written accent stays); bien / mal / despacio / rápido are adverbs
 * without -mente; two adverbs together (lenta y cuidadosamente); position (after
 * the verb; sentence adverbs at the start: afortunadamente, normalmente);
 * alternatives con + noun (con cuidado, con calma). Mistakes: *lentomente,
 * *facilmente, *conduce muy bueno, *buenamente for bien, *tranquilomente.
 * Instructions use tú.
 */
export const lesson: LiveLesson = {
  id: 542,
  level: 'A2',
  title: 'Adverbios en -mente: decir cómo se hace algo',
  subtitle: 'Explicar cómo, con qué frecuencia y con qué actitud se hace algo: lentamente, normalmente, afortunadamente.',
  legend: [
    { tone: 'teal', label: 'MODO · cómo: lentamente, fácilmente (how)' },
    { tone: 'orange', label: 'FRECUENCIA Y TIEMPO · normalmente, últimamente (how often, when)' },
    { tone: 'violet', label: 'OPINIÓN · afortunadamente, sinceramente (speaker’s view)' },
    { tone: 'blue', label: 'SIN -MENTE · bien, mal, despacio, con cuidado (no -mente)' },
  ],
  optionNotes: {
    'lentomente': 'El adverbio se forma con el adjetivo en **femenino**: lenta + mente → **lentamente**.',
    'facilmente': 'El adjetivo conserva su tilde: fácil → **fácilmente**.',
    'buenamente': 'El adverbio de «bueno» es **bien**: conduce bien.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: '¿Cómo lo haces?', coach: 'Lento → lentamente. Slow → slowly.',
      steps: [
        { title: 'La primera clase de Nico · Nico’s first lesson', blocks: [
          { kind: 'lead', text: 'Nico tiene veinte años y hoy empieza en la autoescuela. Su profesora, Elena, le dice: «Arranca **lentamente**. Mira **atentamente** los espejos. Y respira **tranquilamente**: **normalmente**, el primer día nadie conduce bien». Hoy aprendes a decir **cómo** se hace algo con los adverbios en -mente.', en: 'Nico is twenty and today he starts at the driving school. His instructor, Elena, tells him: “Pull away slowly. Look carefully at the mirrors. And breathe calmly: normally, nobody drives well on the first day”. Today you learn to say how something is done with adverbs ending in -mente.' },
          { kind: 'guide', text: { teacher: 'Tú lees las frases y tu alumno repite. Después tu alumno dice qué palabra responde a «¿cómo?» en cada una.', self: 'Lee las frases en voz alta. ¿Qué palabra responde a «¿cómo?»? (Which word answers “how?”)' } },
          { kind: 'compare', title: 'Adjetivo y adverbio · Adjective and adverb', columns: [
            { tone: 'neutral', label: 'ADJETIVO · cómo es', sentence: 'Nico es un conductor lento.', idea: 'Lento describe a una persona o cosa: concuerda con el nombre.', en: 'Nico is a slow driver.' },
            { tone: 'teal', label: 'ADVERBIO · cómo lo hace', sentence: 'Nico conduce [[lentamente|teal]].', idea: 'Lentamente describe la acción: no cambia nunca.', en: 'Nico drives slowly.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Mira atentamente los espejos». ¿Qué describe «atentamente»?', options: ['Cómo son los espejos.', 'Cómo tiene que mirar Nico.', 'Cómo es Nico.'], answer: 1, why: 'El adverbio describe la acción: mirar con atención.', en: '“Mira atentamente los espejos”. What does “atentamente” describe?' },
            { prompt: 'Elena habla ___ para que Nico entienda.', options: ['clara', 'claramente', 'claros'], answer: 1, why: 'Describe cómo habla: adverbio, claramente.', en: 'Elena speaks clearly so that Nico understands.' },
          ] },
        ] },
        { title: 'Cómo se forma · How it is formed', mascot: '/brand/mascot/studying.webp', coach: 'Femenino + -mente.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'ADVERBIO DE MODO', question: '¿Cómo formo el adverbio?', en: 'How do I form the adverb?', formula: ['adjetivo en femenino + -mente: lenta → lentamente', 'adjetivo en -e o consonante + -mente: fácil → fácilmente', 'la tilde del adjetivo se queda: rápida → rápidamente'],
            meaning: 'Tomas el adjetivo en **femenino singular** y añades **-mente**: tranquil**a**mente, clar**a**mente. Si el adjetivo no cambia en femenino (amable, fácil, normal), solo añades -mente. Si el adjetivo lleva **tilde**, el adverbio también: fácil → fácilmente. El adverbio **no cambia** de género ni de número.',
            examples: [
              { es: 'Arranca [[lentamente|teal]] y sin miedo.', en: 'Pull away slowly and without fear.' },
              { es: 'Con práctica, vas a aparcar [[fácilmente|teal]].', en: 'With practice, you will park easily.' },
              { es: 'Elena responde [[amablemente|teal]] a todas las preguntas.', en: 'Elena answers all the questions kindly.' },
            ] },
          { kind: 'table', title: 'Del adjetivo al adverbio · From adjective to adverb', head: ['Adjetivo', 'Femenino', 'Adverbio'], rows: [
            ['lento', 'lenta', '[[lentamente|teal]]'],
            ['tranquilo', 'tranquila', '[[tranquilamente|teal]]'],
            ['rápido', 'rápida', '[[rápidamente|teal]]'],
            ['fácil', 'fácil', '[[fácilmente|teal]]'],
            ['amable', 'amable', '[[amablemente|teal]]'],
            ['normal', 'normal', '[[normalmente|orange]]'],
          ], note: 'Se pronuncia con dos acentos: LENta-MENte, FÁcil-MENte.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Cruza la calle ___.', options: ['lentomente', 'lentamente', 'lentasmente'], answer: 1, why: 'Lento → lenta + -mente.', en: 'Cross the street slowly.' },
            { prompt: 'Este coche se conduce ___.', options: ['facilmente', 'fácilamente', 'fácilmente'], answer: 2, why: 'Fácil no cambia en femenino y conserva la tilde: fácilmente.', en: 'This car is easy to drive (drives easily).' },
          ] },
        ] },
        { title: 'Frecuencia y opinión · Frequency and opinion', mascot: '/brand/mascot/speaking.webp', coach: 'Normalmente… Afortunadamente…', blocks: [
          { kind: 'concept', tone: 'orange', label: 'FRECUENCIA Y TIEMPO', question: '¿Cómo digo «usually» o «lately»?', en: 'How do I say “usually” or “lately”?', formula: ['normalmente · generalmente · frecuentemente', 'últimamente · actualmente · inmediatamente'],
            meaning: 'Muchos adverbios en -mente hablan de **frecuencia o tiempo**. Suelen ir **al principio** de la frase o después del verbo. Cuidado: **actualmente** significa «ahora, en este momento» (currently), no «actually».',
            examples: [
              { es: '[[Normalmente|orange]] tengo clase los martes y los jueves.', en: 'I usually have lessons on Tuesdays and Thursdays.' },
              { es: '[[Últimamente|orange]] hay mucho tráfico en el centro.', en: 'Lately there has been a lot of traffic downtown.' },
              { es: 'Si ves una señal de stop, frena [[inmediatamente|orange]].', en: 'If you see a stop sign, brake immediately.' },
            ] },
          { kind: 'concept', tone: 'violet', label: 'OPINIÓN', question: '¿Cómo digo qué pienso de toda la frase?', en: 'How do I say what I think about the whole sentence?', formula: ['Afortunadamente, + frase', 'Sinceramente, … · Probablemente … · Evidentemente, …'],
            meaning: 'Algunos adverbios no describen el verbo: dicen **qué piensa la persona que habla** de toda la frase. Van al principio, normalmente con **coma**.',
            examples: [
              { es: '[[Afortunadamente|violet]], el examen es por la mañana.', en: 'Fortunately, the test is in the morning.' },
              { es: '[[Sinceramente|violet]], creo que estás preparado.', en: 'Honestly, I think you are ready.' },
            ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '___ estudio en casa, pero hoy voy a la biblioteca.', options: ['Normalmente', 'Normal', 'Normalamente'], answer: 0, why: 'Frecuencia: normalmente (normal + -mente).', en: 'I usually study at home, but today I’m going to the library.' },
            { prompt: '«Actualmente vivo en Bogotá» significa…', options: ['En realidad vivo en Bogotá.', 'Ahora vivo en Bogotá.', 'Antes vivía en Bogotá.'], answer: 1, why: 'Actualmente = ahora, en este momento.', en: '“Actualmente vivo en Bogotá” means…' },
          ] },
        ] },
        { title: 'Sin -mente · Without -mente', mascot: '/brand/mascot/portrait.webp', coach: 'Bien, mal, despacio.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'ADVERBIOS SIN -MENTE', question: '¿Todos los adverbios de modo terminan en -mente?', en: 'Do all adverbs of manner end in -mente?', formula: ['bueno → bien · malo → mal', 'despacio · rápido · alto · bajo', 'con + nombre: con cuidado, con calma'],
            meaning: 'No. Los más frecuentes son cortos: **bien, mal, despacio**. Además, en la conversación **rápido, alto, bajo, claro** funcionan como adverbios: «habla alto», «conduce rápido». Y muchas veces se prefiere **con + nombre**: con cuidado = cuidadosamente, con calma = tranquilamente.',
            examples: [
              { es: 'Nico aparca [[bien|blue]], pero arranca [[mal|blue]].', en: 'Nico parks well, but pulls away badly.' },
              { es: 'Conduce [[despacio|blue]] cerca del colegio.', en: 'Drive slowly near the school.' },
              { es: 'Gira [[con cuidado|blue]]: hay bicicletas.', en: 'Turn carefully: there are bikes.' },
            ] },
          { kind: 'tip', icon: '💡', title: 'Dos adverbios juntos · Two adverbs together', text: 'Cuando hay dos adverbios en -mente unidos por **y** u **o**, el primero pierde la terminación: «Conduce **lenta y cuidadosamente**» (no «lentamente y cuidadosamente»). Es más frecuente en textos escritos.', en: 'When two -mente adverbs are joined by y or o, the first one drops the ending: “Conduce lenta y cuidadosamente”. It is more common in writing.' },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Nico conduce muy bueno.', right: 'Nico conduce muy bien.', why: 'Describe la acción: bien, no bueno. (Adverb, not adjective.)' },
            { wrong: 'Habla tranquilomente.', right: 'Habla tranquilamente.', why: 'Femenino + -mente: tranquila + mente. (Feminine form.)' },
            { wrong: 'Lo hice rapidamente.', right: 'Lo hice rápidamente.', why: 'Rápida lleva tilde, y el adverbio también. (The accent stays.)' },
            { wrong: 'Las chicas conducen lentamentes.', right: 'Las chicas conducen lentamente.', why: 'El adverbio no tiene plural. (Adverbs never change.)' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Elena explica muy ___ las normas.', options: ['buena', 'bien', 'buenamente'], answer: 1, why: 'El adverbio de bueno es bien.', en: 'Elena explains the rules very well.' },
            { prompt: 'Baja la escalera ___: está mojada.', options: ['con cuidado', 'con cuidadosa', 'cuidadoso'], answer: 0, why: 'Con + nombre: con cuidado = cuidadosamente.', en: 'Go down the stairs carefully: they are wet.' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: di cinco adjetivos (claro, fácil, rápido, amable, perfecto) y tu alumno dice el adverbio y una frase sobre su rutina con cada uno.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'En el coche de la autoescuela', coach: 'Toca las palabras marcadas. Tap the marked words.',
      steps: [
        { title: 'La tercera clase · The third lesson', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Elena y tu alumno es Nico. Después tu alumno toca cada adverbio y dice de qué adjetivo viene.', self: 'Lee el diálogo en voz alta. Después toca cada palabra marcada: ¿de qué adjetivo viene? (Which adjective does it come from?)' } },
          { kind: 'explore', title: 'Jueves, nueve de la mañana', setting: 'Nico conduce por el centro. Elena va a su lado. (Nico is driving through the centre. Elena sits next to him.)', lines: [
            { who: 'Elena', text: 'Buenos días, Nico. ¿Cómo estás hoy?', en: 'Good morning, Nico. How are you today?' },
            { who: 'Nico', text: '[[Sinceramente|violet]], un poco nervioso. Anoche dormí [[mal|blue]].', en: 'Honestly, a bit nervous. I slept badly last night.' },
            { who: 'Elena', text: 'Tranquilo. Arranca [[lentamente|teal]] y mira [[atentamente|teal]] por el espejo.', en: 'Relax. Pull away slowly and look carefully in the mirror.' },
            { who: 'Nico', text: 'Vale. [[Normalmente|orange]] se me para el coche aquí.', en: 'OK. The car usually stalls on me here.' },
            { who: 'Elena', text: 'Hoy no. ¿Ves? Lo hiciste [[perfectamente|teal]].', en: 'Not today. See? You did it perfectly.' },
            { who: 'Nico', text: '¡Sí! Ahora viene una rotonda, ¿no?', en: 'Yes! There’s a roundabout coming up, right?' },
            { who: 'Elena', text: 'Sí. Entra [[con cuidado|blue]] y sal [[tranquilamente|teal]]. No hay prisa.', en: 'Yes. Enter carefully and leave calmly. There’s no rush.' },
            { who: 'Nico', text: 'Ese coche viene muy [[rápido|blue]].', en: 'That car is coming really fast.' },
            { who: 'Elena', text: 'Por eso frenamos [[suavemente|teal]] y esperamos. Muy [[bien|blue]].', en: 'That’s why we brake gently and wait. Very good.' },
            { who: 'Nico', text: '[[Últimamente|orange]] practico con mi padre los domingos.', en: 'Lately I’ve been practising with my dad on Sundays.' },
            { who: 'Elena', text: 'Se nota. [[Probablemente|violet]] puedes hacer el examen el mes que viene.', en: 'It shows. You can probably take the test next month.' },
          ], notes: {
            'Sinceramente': 'Sincera + mente. **Opinión**: Nico dice que habla con sinceridad.',
            'mal': 'Adverbio de **malo**. No se dice «malamente» en este uso.',
            'lentamente': 'Lenta + mente. **Modo**: cómo tiene que arrancar.',
            'atentamente': 'Atenta + mente. **Modo**: con atención.',
            'Normalmente': 'Normal + mente. **Frecuencia**: casi siempre.',
            'perfectamente': 'Perfecta + mente. **Modo**: sin errores.',
            'con cuidado': 'Con + nombre: lo mismo que **cuidadosamente**, y más frecuente al hablar.',
            'tranquilamente': 'Tranquila + mente. **Modo**: con calma.',
            'rápido': 'Aquí **rápido** funciona como adverbio (= rápidamente). No cambia.',
            'suavemente': 'Suave + mente. **Modo**: sin fuerza.',
            'bien': 'Adverbio de **bueno**.',
            'Últimamente': 'Última + mente. **Tiempo**: en los últimos días o semanas.',
            'Probablemente': 'Probable + mente. **Opinión**: Elena cree que es probable.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Cómo está Nico al principio?', options: ['Muy contento.', 'Un poco nervioso.', 'Enfadado con Elena.'], answer: 1, why: '«Sinceramente, un poco nervioso».', en: 'How is Nico at the start?' },
            { prompt: '¿Qué hacen cuando viene un coche rápido?', options: ['Frenan suavemente y esperan.', 'Aceleran.', 'Giran inmediatamente.'], answer: 0, why: '«Frenamos suavemente y esperamos».', en: 'What do they do when a fast car comes?' },
            { prompt: '¿Cuándo puede hacer el examen?', options: ['Mañana.', 'Probablemente el mes que viene.', 'Nunca.'], answer: 1, why: '«Probablemente puedes hacer el examen el mes que viene».', en: 'When can he take the test?' },
          ] },
        ] },
        { title: '¿Qué dice el adverbio? · What does the adverb tell us?', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'classify', title: 'Modo, frecuencia u opinión · Manner, frequency or opinion', categories: [
            { id: 'modo', label: 'MODO · cómo', tone: 'teal' },
            { id: 'frecuencia', label: 'FRECUENCIA Y TIEMPO', tone: 'orange' },
            { id: 'opinion', label: 'OPINIÓN', tone: 'violet' },
          ], items: [
            { text: 'Frena suavemente.', answer: 'modo', why: 'Cómo frenar.' },
            { text: 'Generalmente voy en autobús.', answer: 'frecuencia', why: 'Casi siempre.' },
            { text: 'Afortunadamente, no llovió.', answer: 'opinion', why: 'La persona valora el hecho.' },
            { text: 'Últimamente duermo poco.', answer: 'frecuencia', why: 'En los últimos días.' },
            { text: 'Lo explicó claramente.', answer: 'modo', why: 'Cómo lo explicó.' },
            { text: 'Sinceramente, no me gusta.', answer: 'opinion', why: 'Actitud de quien habla.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: «¿Qué haces normalmente los domingos? ¿Y últimamente?». Tu alumno responde con dos frases.' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Femenino + -mente. Y bien, mal, despacio.',
      steps: [
        { title: 'En la autoescuela · At the driving school', blocks: [
          { kind: 'choice', items: [
            { context: 'Elena da una instrucción. (Elena gives an instruction.)', prompt: 'Gira el volante ___.', options: ['lentamente', 'lento', 'lenta'], answer: 0, why: 'Describe la acción: lentamente.', en: 'Turn the steering wheel slowly.' },
            { context: 'Nico habla de su semana. (Nico talks about his week.)', prompt: '___ estoy muy cansado: trabajo y estudio.', options: ['Últimamente', 'Últimomente', 'Último'], answer: 0, why: 'Última + mente.', en: 'Lately I’ve been very tired: I work and study.' },
            { context: 'Después del examen teórico. (After the theory test.)', prompt: '___, aprobé con solo un error.', options: ['Afortunado', 'Afortunadamente', 'Afortunadomente'], answer: 1, why: 'Opinión sobre toda la frase: afortunadamente.', en: 'Fortunately, I passed with only one mistake.' },
            { context: 'Elena valora a Nico. (Elena assesses Nico.)', prompt: 'Aparcas muy ___.', options: ['bueno', 'bien', 'buenamente'], answer: 1, why: 'Bueno → bien.', en: 'You park very well.' },
            { context: 'En una zona escolar. (In a school zone.)', prompt: 'Aquí hay que conducir ___.', options: ['despacio', 'despaciomente', 'despacia'], answer: 0, why: 'Despacio ya es adverbio.', en: 'You have to drive slowly here.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Nico escucha atentomente a Elena.', ok: false, options: ['Nico escucha atentamente a Elena.', 'Nico escucha atentosmente a Elena.', 'Nico escucha atenta a Elena.'], answer: 0, why: 'Atenta + mente.' },
            { sentence: 'Normalmente desayuno a las siete.', ok: true, why: 'Correcta: normal + mente, al principio de la frase.' },
            { sentence: 'Mi hermana conduce muy mala.', ok: false, options: ['Mi hermana conduce muy malo.', 'Mi hermana conduce muy mal.', 'Mi hermana conduce muy malamente bien.'], answer: 1, why: 'Describe la acción: mal.' },
            { sentence: 'Puedes hacerlo facilmente.', ok: false, options: ['Puedes hacerlo fácilmente.', 'Puedes hacerlo fácilamente.', 'Puedes hacerlo fácilmentes.'], answer: 0, why: 'Fácil conserva la tilde.' },
            { sentence: 'Cruzaron la calle con cuidado.', ok: true, why: 'Correcta: con + nombre.' },
          ] },
        ] },
        { title: 'El día del examen · Test day', blocks: [
          { kind: 'chat-fill', title: 'Antes de salir · Before setting off', lines: [
            { who: 'Elena', text: '¿Cómo te sientes, Nico?' },
            { who: 'Nico', text: '___, tengo miedo.', options: ['Sinceramente', 'Sinceromente', 'Sincero'], answer: 0, why: 'Sincera + mente: opinión.' },
            { who: 'Elena', text: 'Es normal. Respira ___ y piensa en las clases.', options: ['profundo mente', 'profundamente', 'profundomente'], answer: 1, why: 'Profunda + mente.' },
            { who: 'Nico', text: '¿Y si el examinador habla muy ___?', options: ['rápidomente', 'rápida', 'rápido'], answer: 2, why: 'Rápido funciona como adverbio (= rápidamente).' },
            { who: 'Elena', text: 'Le pides ___ que repita. No pasa nada.', options: ['amablemente', 'amablamente', 'amable'], answer: 0, why: 'Amable + mente.' },
            { who: 'Nico', text: 'Vale. Voy a conducir ___.', options: ['tranquila y seguramente', 'tranquilamente y segura', 'tranquilo y seguramente'], answer: 0, why: 'Dos adverbios: el primero pierde -mente, pero sigue en femenino.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['lentamente', 'Elena', 'habla'], accept: ['Elena habla lentamente'], en: 'Elena speaks slowly.' },
            { tiles: ['a', 'Normalmente', 'llego', 'ocho', 'las'], accept: ['Normalmente llego a las ocho'], en: 'I usually arrive at eight.' },
            { tiles: ['muy', 'Nico', 'bien', 'aparca'], accept: ['Nico aparca muy bien'], en: 'Nico parks very well.' },
            { tiles: ['el', 'Afortunadamente,', 'aprobé', 'examen'], accept: ['Afortunadamente, aprobé el examen'], en: 'Fortunately, I passed the test.' },
          ] },
        ] },
        { title: 'Transforma · Transform', blocks: [
          { kind: 'rewrite', title: 'Del adjetivo al adverbio · From adjective to adverb', items: [
            { prompt: 'Elena explica las normas de forma clara.', instruction: 'Cambia «de forma clara» por un adverbio en -mente.', accept: ['Elena explica las normas claramente', 'Elena explica claramente las normas'] },
            { prompt: 'Nico responde con rapidez.', instruction: 'Cambia «con rapidez» por un adverbio en -mente.', accept: ['Nico responde rápidamente'] },
            { prompt: 'Conduce cuidadosamente.', instruction: 'Cambia el adverbio por «con» + nombre.', accept: ['Conduce con cuidado'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno explica cómo hace tres cosas: cocinar, conducir o caminar, y hablar español. Una frase con -mente, una con bien o mal, una con «con + nombre».' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Un audio de Elena', coach: 'Primero escucha sin leer. Listen first, read later.',
      steps: [
        { title: 'Antes del examen · Before the test', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: la idea general. Segunda escucha: tu alumno anota los adverbios que oye. Después, las preguntas.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Anota los adverbios que oyes. (Note the adverbs you hear.)' } },
          { kind: 'listen', title: 'Un audio de Elena para Nico', channel: 'MENSAJE DE VOZ · DE ELENA PARA NICO', src: '/audio/grammar-live/542.mp3',
            before: 'Mañana Nico tiene el examen práctico. Elena le manda un audio con consejos. ¿Qué consejos crees que le da? (What advice do you think she gives him?)',
            gist: { prompt: '¿Cuál es la idea general? · What is the main idea?', options: ['Elena da consejos a Nico para el examen de mañana.', 'Elena cancela el examen.', 'Elena dice que Nico no está preparado.'], answer: 0, why: '«Mañana es tu examen y quiero darte unos consejos».', en: 'What is the main idea?' },
            details: [
              { prompt: '¿Cómo condujo Nico esta semana?', options: ['Mal.', 'Perfectamente.', 'Demasiado rápido.'], answer: 1, why: '«Esta semana condujiste perfectamente».', en: 'How did Nico drive this week?' },
              { prompt: '¿Qué tiene que hacer esta noche?', options: ['Estudiar las señales.', 'Cenar ligero y dormir bien.', 'Practicar con su padre.'], answer: 1, why: '«Cena ligero y duerme bien».', en: 'What does he have to do tonight?' },
              { prompt: '¿Cómo tiene que saludar al examinador?', options: ['Amablemente.', 'Rápidamente.', 'No tiene que saludar.'], answer: 0, why: '«Saluda amablemente al examinador».', en: 'How should he greet the examiner?' },
              { prompt: '¿Qué hace si comete un error?', options: ['Para el coche inmediatamente.', 'Sigue tranquilamente.', 'Pide perdón varias veces.'], answer: 1, why: '«Si cometes un error, sigue tranquilamente».', en: 'What does he do if he makes a mistake?' },
            ],
            transcript: 'Hola, Nico, soy Elena. Mañana es tu examen y quiero darte unos consejos. Primero: esta semana condujiste [[perfectamente|teal]], así que confía en ti. Esta noche cena ligero y duerme [[bien|blue]]. Mañana llega temprano y saluda [[amablemente|teal]] al examinador. Arranca [[lentamente|teal]], mira [[atentamente|teal]] los espejos y frena [[suavemente|teal]]. Si cometes un error, sigue [[tranquilamente|teal]]: [[normalmente|orange]] un error pequeño no importa. Y si no entiendes una instrucción, pregunta [[con calma|blue]]. [[Sinceramente|violet]], creo que vas a aprobar [[fácilmente|teal]]. ¡Mucha suerte!',
            reply: { teacher: 'Tú eres Elena. Tu alumno es Nico y responde: da las gracias, repite dos consejos con adverbios y dice cómo se siente.', self: 'Responde a Elena en voz alta como Nico: da las gracias, repite dos consejos con adverbios y di cómo te sientes. (Answer as Nico.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: '¿Cómo haces las cosas?', coach: 'Cómo, cuándo y qué piensas. How, when and what you think.',
      steps: [
        { title: 'Habla de ti · Talk about yourself', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas; tu alumno responde con adverbios. Repite su frase con la forma correcta y sigue con la repregunta.', self: 'Lee cada pregunta, responde en voz alta y, si quieres, escribe tu respuesta. (Read each question and answer aloud.)' } },
          { kind: 'talk', cards: [
            { q: '¿Cómo es un día normal para ti? · What is a normal day like for you?', followUps: ['¿Y los fines de semana? (And at weekends?)', '¿Qué cambió últimamente? (What has changed lately?)'], phrases: ['[[Normalmente|orange]] me levanto a las…', '[[Generalmente|orange]] como en…', '[[Últimamente|orange]]…'], hint: 'Frecuencia: normalmente, generalmente, últimamente.', example: 'Normalmente me levanto a las siete y desayuno rápidamente. Generalmente como en el trabajo. Últimamente camino más.', next: 'Ahora, cómo haces algo.' },
            { q: '¿Qué haces bien y qué haces mal? · What do you do well and what do you do badly?', followUps: ['¿Cómo aprendiste? (How did you learn?)', '¿Qué haces lentamente? (What do you do slowly?)'], phrases: ['Cocino [[bien|blue]], pero canto [[mal|blue]].', 'Aprendo idiomas [[fácilmente|teal]].', 'Escribo [[lentamente|teal]].'], hint: 'Bien y mal no llevan -mente.', example: 'Cocino bien, sobre todo pasta. Canto muy mal. Y leo lentamente en español, pero entiendo casi todo.', next: 'Ahora, tu opinión.' },
            { q: 'Da tu opinión sincera sobre tu ciudad o tu trabajo. · Give your honest opinion about your city or your job.', followUps: ['¿Qué es lo mejor? (What is the best thing?)', '¿Qué cambiarías? (What would you change?)'], phrases: ['[[Sinceramente|violet]], creo que…', '[[Afortunadamente|violet]], …', '[[Desgraciadamente|violet]], …'], hint: 'Opinión al principio, con coma.', example: 'Sinceramente, mi ciudad es cara. Afortunadamente, hay muchos parques. Desgraciadamente, el transporte funciona mal.', next: 'Ahora, instrucciones.' },
            { q: 'Explica a un amigo cómo hacer algo: una receta, aparcar, estudiar. · Explain to a friend how to do something.', followUps: ['¿Qué hay que hacer primero? (What comes first?)', '¿Qué error es frecuente? (What is a common mistake?)'], phrases: ['Primero, corta… [[finamente|teal]].', 'Mueve [[lentamente|teal]]…', 'Hazlo [[con cuidado|blue]].'], hint: 'Imperativo + adverbio de modo.', example: 'Primero corta la cebolla finamente. Después cocina lentamente, a fuego bajo. Y añade la sal con cuidado.', teacher: 'Tu alumno te da las instrucciones y tú las «haces» mal a propósito para que te corrija con un adverbio.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno pregunta y tú respondes; tu alumno dice qué adverbios usaste.', self: 'Ahora haz tú las preguntas en voz alta y responde como otra persona. (Now ask the questions and answer as someone else.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Consejos para el primer día', coach: 'Di cómo hacerlo. Say how to do it.',
      steps: [
        { title: 'Un mensaje con consejos · A message with advice', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos cada adverbio: ¿femenino + -mente?, ¿tilde?', self: 'Escribe tu mensaje y toca «Revisar mi texto». Después revisa cada adverbio: ¿femenino + -mente?, ¿tilde? (Write your message and tap “Revisar mi texto”.)' } },
          { kind: 'write', title: 'Mañana es tu primer día · Tomorrow is your first day', situation: 'Un amigo empieza mañana algo nuevo: un trabajo, un curso o las clases de conducir. Escríbele un mensaje con consejos. (A friend starts something new tomorrow. Write a message with advice.)', task: [
            'Di qué pasa normalmente el primer día. (Say what usually happens.)',
            'Da tres consejos con adverbios de modo. (Give three pieces of advice.)',
            'Usa bien, mal o despacio una vez. (Use bien, mal or despacio once.)',
            'Da tu opinión con sinceramente o afortunadamente. (Give your opinion.)',
            'Despídete. (Say goodbye.)',
          ], starters: ['¡Hola, …!', 'Normalmente, el primer día…', 'Escucha atentamente…', 'Habla… y pregunta…', 'Sinceramente, creo que…', '¡Mucha suerte!'],
            words: ['normalmente', 'atentamente', 'tranquilamente', 'amablemente', 'claramente', 'fácilmente', 'sinceramente', 'afortunadamente', 'bien', 'despacio', 'con calma'],
            model: '¡Hola, Dani! Mañana empiezas en la oficina. [[Normalmente|orange]], el primer día es largo, pero no es difícil. Llega temprano y saluda [[amablemente|teal]] a todos. Escucha [[atentamente|teal]] las explicaciones y pregunta [[tranquilamente|teal]] si no entiendes algo. Habla [[despacio|blue]] y [[claramente|teal]] en las reuniones. [[Sinceramente|violet]], creo que vas a trabajar muy [[bien|blue]] allí. [[Afortunadamente|violet]], tu jefa es muy simpática. ¡Mucha suerte!',
            minWords: 50,
            checks: [
              { label: 'Tres adverbios en -mente (three -mente adverbs)', pattern: '\\p{L}{3,}mente[^\\p{L}][\\s\\S]*\\p{L}{3,}mente[^\\p{L}][\\s\\S]*\\p{L}{3,}mente(?![\\p{L}])', tip: 'Por ejemplo: atentamente, tranquilamente, claramente.' },
              { label: 'Un adverbio sin -mente: bien, mal, despacio (one without -mente)', pattern: '(?:^|[^\\p{L}])(?:bien|mal|despacio)(?![\\p{L}])', tip: 'Por ejemplo: «Habla despacio».' },
            ],
            warnings: [
              { pattern: '\\p{L}+omente(?![\\p{L}])', why: 'El adverbio se forma con el **femenino**: lenta + mente, no «lentomente».' },
              { pattern: '(?:^|[^\\p{L}])(?:facilmente|rapidamente|ultimamente|practicamente)(?![\\p{L}])', why: 'El adjetivo conserva su **tilde**: fácilmente, rápidamente, últimamente.' },
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
            { tone: 'teal', label: 'MODO', formula: 'adjetivo en femenino + -mente', example: 'Arranca lentamente.', caption: 'cómo se hace; la tilde se queda: fácilmente', en: 'how it is done; the accent stays: fácilmente' },
            { tone: 'orange', label: 'FRECUENCIA Y TIEMPO', formula: 'normalmente · últimamente · actualmente', example: 'Normalmente tengo clase los martes.', caption: 'actualmente = ahora', en: 'actualmente = currently' },
            { tone: 'violet', label: 'OPINIÓN', formula: 'Afortunadamente, + frase', example: 'Sinceramente, creo que estás preparado.', caption: 'al principio, con coma', en: 'at the start, with a comma' },
            { tone: 'blue', label: 'SIN -MENTE', formula: 'bien · mal · despacio · con + nombre', example: 'Conduce bien y con cuidado.', caption: 'bueno → bien, malo → mal', en: 'bueno → bien, malo → mal' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: '¿Describes una persona o cosa? → **adjetivo** (un conductor lento). ¿Describes una acción? → **adverbio** (conduce lentamente). Para formarlo: femenino + -mente. Y recuerda los cortos: bien, mal, despacio.', en: 'Describing a person or thing? → adjective. Describing an action? → adverb. To form it: feminine + -mente. And remember the short ones: bien, mal, despacio.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'El tren llegó ___ a las ocho.', options: ['puntualmente', 'puntualamente', 'puntual mente'], answer: 0, why: 'Puntual + mente.', en: 'The train arrived punctually at eight.' },
            { prompt: 'Hablas español muy ___.', options: ['bueno', 'bien', 'buena'], answer: 1, why: 'Describe la acción: bien.', en: 'You speak Spanish very well.' },
            { prompt: '___ trabajo en un banco, pero antes era profesor.', options: ['Actualmente', 'Actualamente', 'Actual'], answer: 0, why: 'Actualmente = ahora.', en: 'I currently work in a bank, but I used to be a teacher.' },
            { prompt: 'Lo explicó clara y ___.', options: ['sencilla', 'sencillamente', 'sencillo'], answer: 1, why: 'Dos adverbios: solo el último lleva -mente.', en: 'She explained it clearly and simply.' },
            { prompt: '___, no hubo heridos en el accidente.', options: ['Afortunadamente', 'Afortunada', 'Afortunadomente'], answer: 0, why: 'Opinión sobre toda la frase.', en: 'Fortunately, nobody was hurt in the accident.' },
          ] },
        ] },
        { title: 'Ampliación · Solo, justo y los falsos amigos', mascot: '/autoestudio/mascot/noting.webp', coach: 'Opcional: un paso más. Optional: one step further.', blocks: [
          { kind: 'lead', text: 'Dos ideas para ir más lejos. Primera: **solamente** y **solo** significan lo mismo (only): «Solo tengo una clase» = «Solamente tengo una clase». Segunda: algunos adverbios parecen palabras del inglés, pero significan otra cosa: **actualmente** = ahora (no «actually», que es «en realidad»); **eventualmente** = quizá, de forma ocasional (no «eventually», que es «al final»).', en: 'Two ideas to go further. First: solamente and solo mean the same (only). Second: some adverbs look like English words but mean something else: actualmente = currently (not “actually”, which is “en realidad”); eventualmente = possibly, occasionally (not “eventually”, which is “al final”).' },
          { kind: 'choice', title: 'Para estudiantes rápidos · For fast learners', items: [
            { prompt: '¿Cómo dices «Actually, I don’t drive»?', options: ['Actualmente, no conduzco.', 'En realidad, no conduzco.', 'Eventualmente, no conduzco.'], answer: 1, why: 'Actually = en realidad.', en: 'How do you say “Actually, I don’t drive”?' },
            { prompt: '«Al final aprobé» en inglés es…', options: ['Eventually I passed.', 'Currently I passed.', 'Possibly I passed.'], answer: 0, why: 'Eventually = al final.', en: '“Al final aprobé” in English is…' },
          ] },
          { kind: 'teacher', text: 'Este paso es opcional. Pregunta final: «¿Qué haces actualmente? ¿Y qué quieres hacer al final de este año?».' },
        ] },
      ],
    },
  ],
};
