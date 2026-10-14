import type { LiveLesson } from '../types';

/**
 * Lesson 239 · A0 · Clase inicial: tu primer «hola».
 * The first class for a learner who starts from zero. Everything carries an
 * English line (the EN help opens by default at A0). The story is generic:
 * the learner wants to talk to their Argentine grandparents, who say «vos».
 * Content: the alphabet, the subject pronouns, «soy» and «estoy», and a first
 * real exchange (name, origin, how and where you are, what you are a fan of).
 * Instructions address the learner with tú; the grandparents speak with vos.
 */
export const lesson: LiveLesson = {
  id: 239,
  level: 'A0',
  title: 'Clase inicial: tu primer «hola» en español',
  subtitle: 'El abecedario, yo / tú / vos, «soy» y «estoy»: lo justo para tu primera charla con tus abuelos argentinos.',
  legend: [
    { tone: 'blue', label: 'SOY · quién soy (who I am)' },
    { tone: 'teal', label: 'ESTOY · cómo y dónde estoy (how / where I am)' },
    { tone: 'orange', label: 'TÚ · VOS · la persona con quien hablas (you)' },
    { tone: 'violet', label: 'Letras y sonidos (letters and sounds)' },
  ],
  optionNotes: {
    estoy: '«Estoy» es para un estado o un lugar (how / where). Para tu nombre o de dónde eres, usa «soy».',
    Estoy: '«Estoy» es para un estado o un lugar (how / where). Para tu nombre o de dónde eres, usa «soy».',
    soy: '«Soy» es para tu identidad (who). Para cómo estás o dónde estás, usa «estoy».',
    Soy: '«Soy» es para tu identidad (who). Para cómo estás o dónde estás, usa «estoy».',
    eres: '«Eres» es «you are» (tú). Aquí hablas de ti: «soy».',
    es: '«Es» es «he / she is». Aquí hablas de ti: «soy».',
    sos: '«Sos» es «you are» con vos. Aquí la persona habla de ella misma: «soy».',
    son: '«Son» es «they are». Aquí hablas de ti: «soy».',
    estás: '«Estás» es «you are» (tú / vos). Aquí hablas de ti: «estoy».',
    está: '«Está» es «he / she is». Aquí hablas de ti: «estoy».',
    cansado: 'Cansad**o** es para él. Para ella: cansad**a**.',
    cansada: 'Cansad**a** es para ella. Para él: cansad**o**.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Tu primer «hola»', coach: 'Hoy decimos «hola». Today we say hello.',
      steps: [
        { title: 'Hola · Hello', blocks: [
          { kind: 'lead', text: 'Esta es tu primera clase de español. Al final de la clase puedes decir **quién eres**, **cómo estás** y **dónde estás**: tu primer mensaje para tus abuelos.', en: 'This is your first Spanish class. By the end you can say who you are, how you are and where you are: your first message to your grandparents.' },
          { kind: 'guide', text: { teacher: 'Lee las tres frases en voz alta y pide al alumno que las repita. Todavía no explicas nada: solo escuchar y repetir.', self: 'Lee las tres frases en voz alta. No busques la regla todavía: solo escucha cómo suenan.' } },
          { kind: 'compare', title: 'Tu objetivo de hoy · Your goal today', columns: [
            { tone: 'blue', label: 'SOY · who I am', sentence: 'Hola, abuela. [[Soy|blue]] Alex.', idea: 'Tu nombre, de dónde eres.', en: 'Hi, grandma. I am Alex.' },
            { tone: 'teal', label: 'ESTOY · how / where I am', sentence: '[[Estoy|teal]] muy feliz. [[Estoy|teal]] en Sídney.', idea: 'Cómo estás y dónde estás.', en: 'I am very happy. I am in Sydney.' },
            { tone: 'orange', label: 'TÚ · VOS · you', sentence: '¿Y tú? ¿Cómo [[estás|orange]]?', idea: 'La pregunta para tus abuelos.', en: 'And you? How are you?' },
          ] },
          { kind: 'tip', icon: '🇦🇷', title: 'Tus abuelos dicen «vos»', text: 'En Argentina, para hablar con alguien de confianza, se dice **vos** en lugar de **tú**. Significa lo mismo: «you». Tú puedes usar «tú»: tus abuelos te entienden perfecto.', en: 'In Argentina people say “vos” instead of “tú”. Same meaning: “you”. You can keep saying “tú”: your grandparents will understand you perfectly.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Soy Alex» significa…', options: ['Quién soy: mi nombre.', 'Cómo estoy.', 'Dónde estoy.'], answer: 0, why: '«Soy» + nombre = who I am.', en: '“Soy Alex” means…' },
            { prompt: '«Estoy en Sídney» significa…', options: ['Dónde estoy.', 'Quién soy.', 'De dónde soy.'], answer: 0, why: '«Estoy en» + lugar = where I am.', en: '“Estoy en Sídney” means…' },
            { prompt: 'Tu abuela dice «vos». ¿Qué significa?', options: ['You (tú).', 'I (yo).', 'We (nosotros).'], answer: 0, why: 'Vos = tú = you. Es la forma de Argentina.', en: 'Your grandma says “vos”. What does it mean?' },
          ] },
        ] },
        { title: 'El abecedario · The ABC', mascot: '/brand/mascot/studying.webp', coach: 'Veintisiete letras, cinco vocales.', blocks: [
          { kind: 'lead', text: 'El español tiene **27 letras**. La buena noticia: casi siempre se lee como se escribe. Si ves la palabra, puedes decirla.', en: 'Spanish has 27 letters. Good news: it almost always sounds the way it is written. If you can see the word, you can say it.' },
          { kind: 'guide', text: { teacher: 'Lee la tabla con el alumno, letra por letra, y pídele que repita el nombre y el ejemplo. Después, que deletree su nombre.', self: 'Lee cada letra en voz alta con su ejemplo. Después, deletrea tu nombre: letra por letra.' } },
          { kind: 'table', title: 'Las 27 letras · The 27 letters', head: ['Letra', 'Nombre', 'Suena como… (sounds like)', 'Ejemplo'], rows: [
            ['A a', 'a', '“ah”', '[[abuela|violet]] · grandma'],
            ['B b', 'be', '“b”', '[[bien|violet]] · well'],
            ['C c', 'ce', '“k” (ca, co, cu) · “s” (ce, ci)', '[[casa|violet]] · house · [[cine|violet]] · cinema'],
            ['D d', 'de', '“d”', '[[día|violet]] · day'],
            ['E e', 'e', '“eh”', '[[estoy|violet]] · I am'],
            ['F f', 'efe', '“f”', '[[feliz|violet]] · happy'],
            ['G g', 'ge', '“g” (ga, go, gu) · “h” fuerte (ge, gi)', '[[gato|violet]] · cat · [[gente|violet]] · people'],
            ['H h', 'hache', '¡No suena! (silent)', '[[hola|violet]] · hello'],
            ['I i', 'i', '“ee”', '[[isla|violet]] · island'],
            ['J j', 'jota', '“h” fuerte (strong h)', '[[jugo|violet]] · juice'],
            ['K k', 'ka', '“k”', '[[kilo|violet]] · kilo'],
            ['L l', 'ele', '“l”', '[[luna|violet]] · moon'],
            ['M m', 'eme', '“m”', '[[mate|violet]] · mate (the drink)'],
            ['N n', 'ene', '“n”', '[[noche|violet]] · night'],
            ['Ñ ñ', 'eñe', '“ny” (canyon)', '[[mañana|violet]] · tomorrow'],
            ['O o', 'o', '“oh”', '[[ocho|violet]] · eight'],
            ['P p', 'pe', '“p”', '[[papá|violet]] · dad'],
            ['Q q', 'cu', '“k” (que, qui)', '[[queso|violet]] · cheese'],
            ['R r', 'erre', '“r” suave · “rr” fuerte', '[[pero|violet]] · but · [[perro|violet]] · dog'],
            ['S s', 'ese', '“s”', '[[sol|violet]] · sun'],
            ['T t', 'te', '“t”', '[[tango|violet]] · tango'],
            ['U u', 'u', '“oo”', '[[uno|violet]] · one'],
            ['V v', 'uve', '“b” (¡igual que la b!)', '[[vos|violet]] · you'],
            ['W w', 'uve doble', '“w”', '[[wifi|violet]] · wifi'],
            ['X x', 'equis', '“ks”', '[[taxi|violet]] · taxi'],
            ['Y y', 'ye', '“y” · sola: “ee”', '[[yo|violet]] · I · [[y|violet]] · and'],
            ['Z z', 'zeta', '“s” (en América)', '[[zapato|violet]] · shoe'],
          ], note: 'En Argentina, **ll** y **y** suenan como «sh»: «yo» suena «sho», «calle» suena «cashe». Es el sonido de tus abuelos.' },
          { kind: 'tip', icon: '🔊', title: 'Cinco vocales, cinco sonidos', text: '**a, e, i, o, u** suenan siempre igual: a (ah), e (eh), i (ee), o (oh), u (oo). Cortas y claras. Por eso «abuela» es fácil: a-bue-la.', en: 'The five vowels always sound the same: a (ah), e (eh), i (ee), o (oh), u (oo). Short and clear. That is why “abuela” is easy: a-bue-la.' },
          { kind: 'tip', icon: '✍', title: 'Deletrea tu nombre · Spell your name', text: 'Tus abuelos van a preguntar cómo se escribe tu nombre. Deletrea con los nombres de las letras: «Alex: a, ele, e, equis».', en: 'Your grandparents will ask how your name is spelt. Spell it with the letter names: “Alex: a, ele, e, equis”.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Cómo suena la «h» de «hola»?', options: ['No suena: «ola».', 'Como en inglés: «ho-la».', 'Como «j»: «jola».'], answer: 0, why: 'La h no suena nunca. «Hola» se dice «ola».', en: 'How does the “h” in “hola” sound?' },
            { prompt: '«Abuela»: ¿cuántas vocales tiene?', options: ['Cuatro: a, u, e, a.', 'Dos: a, e.', 'Seis.'], answer: 0, why: 'A-b-u-e-l-a: cuatro vocales, cada una con su sonido.', en: 'How many vowels does “abuela” have?' },
            { prompt: '¿Cómo se llama la letra «ñ»?', options: ['Eñe.', 'Ene.', 'Ye.'], answer: 0, why: 'Ñ = eñe. Suena «ny»: mañana.', en: 'What is the letter “ñ” called?' },
            { prompt: '«Vos» y «bos» suenan…', options: ['Igual: la v suena como la b.', 'Diferente: la v suena como en inglés.'], answer: 0, why: 'En español, v y b suenan igual.', en: '“Vos” and “bos” sound…' },
          ] },
          { kind: 'build', title: 'Deletrea · Spell it', items: [
            { tiles: ['o', 'h', 'a', 'l'], accept: ['h o l a'], en: 'hello' },
            { tiles: ['e', 'a', 'm', 't'], accept: ['m a t e'], en: 'mate (the drink)' },
            { tiles: ['e', 'a', 'b', 'u', 'l', 'a'], accept: ['a b u e l a'], en: 'grandma' },
          ] },
        ] },
        { title: 'Yo, tú y vos · The people', mascot: '/brand/mascot/speaking.webp', coach: 'Primero decimos quién.', blocks: [
          { kind: 'lead', text: 'Para hablar, primero decimos **quién**: yo, tú, él, ella… Son los **pronombres**. Hoy necesitas tres: **yo** (I), **tú / vos** (you) y los demás solo para reconocerlos.', en: 'To speak, we first say who: I, you, he, she… These are the pronouns. Today you need three: yo (I), tú / vos (you), and the rest only to recognise them.' },
          { kind: 'table', title: 'Los pronombres · The pronouns', head: ['Español', 'English', 'Nota'], rows: [
            ['[[yo|blue]]', 'I', 'La persona que habla.'],
            ['[[tú|orange]]', 'you (one person)', 'La forma general: México, España, Colombia…'],
            ['[[vos|orange]]', 'you (one person)', '**Argentina** y Uruguay. Tus abuelos dicen vos.'],
            ['usted', 'you (formal)', 'Para una persona mayor que no conoces, en una oficina…'],
            ['él', 'he', 'Tu abuelo: él.'],
            ['ella', 'she', 'Tu abuela: ella.'],
            ['nosotros · nosotras', 'we', 'Tu abuela y tú: nosotros.'],
            ['ustedes', 'you (several people)', 'En Argentina, también para amigos: «¿Ustedes están bien?».'],
            ['ellos · ellas', 'they', 'Tus abuelos: ellos.'],
          ], note: '**-os** es para hombres o grupos mixtos; **-as** es para mujeres: nosotras, ellas.' },
          { kind: 'tip', icon: '💡', title: 'Muchas veces no decimos el pronombre', text: '«Soy Alex» y «Yo soy Alex» son iguales. El verbo ya dice quién habla. Al principio, di el pronombre si te ayuda.', en: '“Soy Alex” and “Yo soy Alex” are the same. The verb already says who is speaking. At the start, say the pronoun if it helps you.' },
          { kind: 'tip', icon: '🇦🇷', title: 'Tú y vos', text: 'Tú y vos son la **misma persona**: «you». Con vos, el verbo cambia un poco: tú **eres** → vos **sos**. Hoy solo lo reconoces cuando tus abuelos lo dicen.', en: 'Tú and vos are the same person: “you”. With vos the verb changes a little: tú eres → vos sos. Today you only need to recognise it when your grandparents say it.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Tu abuela habla de ella misma. ¿Qué pronombre usa?', options: ['yo', 'tú', 'ella'], answer: 0, why: 'La persona que habla dice «yo» (I).', en: 'Your grandma talks about herself. Which pronoun does she use?' },
            { prompt: 'Hablas con tu abuelo. En Argentina, él es…', options: ['vos', 'yo', 'ellos'], answer: 0, why: 'La persona con quien hablas: tú, o vos en Argentina.', en: 'You are talking to your grandpa. In Argentina, he is…' },
            { prompt: 'Mi abuelo y yo: ¿qué pronombre?', options: ['nosotros', 'ellos', 'ustedes'], answer: 0, why: 'Él + yo = nosotros (we).', en: 'My grandpa and I: which pronoun?' },
            { prompt: 'Mis abuelos, los dos: ¿qué pronombre?', options: ['ellos', 'ella', 'nosotros'], answer: 0, why: 'Dos personas, un hombre y una mujer: ellos (they).', en: 'My grandparents, both of them: which pronoun?' },
          ] },
        ] },
        { title: 'Soy · Who I am', mascot: '/brand/mascot/standing.webp', coach: 'Soy: tu nombre, tu lugar, tu gente.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'SOY', question: '¿Quién soy?', en: 'I am (who I am)', formula: ['yo soy + nombre · de + lugar · profesión', 'Soy Alex. Soy de Australia.'],
            meaning: 'Con **soy** dices tu **identidad**: tu nombre, de dónde eres, tu trabajo, qué tipo de persona eres. Es lo que no cambia de hoy a mañana.',
            examples: [
              { es: '[[Soy|blue]] Alex.', en: 'I am Alex.' },
              { es: '[[Soy|blue]] de Sídney, Australia.', en: 'I am from Sydney, Australia.' },
              { es: '[[Soy|blue]] estudiante de español.', en: 'I am a Spanish student.' },
              { es: '[[Soy|blue]] fan de las películas y del fútbol.', en: 'I am a fan of movies and football.' },
              { es: '[[Soy|blue]] deportista: gimnasio tres días.', en: 'I am sporty: gym three days a week.' },
            ],
            note: 'Tus abuelos también: «[[Soy|blue]] la abuela. [[Soy|blue]] de Buenos Aires». Para preguntar: «¿Eres de Sídney?» o, con vos, «¿**Sos** de Sídney?».' },
          { kind: 'table', title: 'Ser · to be (las formas de hoy)', head: ['Persona', 'ser', 'English'], rows: [
            ['[[yo|blue]]', '**soy**', 'I am'],
            ['[[tú|orange]] · [[vos|orange]]', 'eres · **sos**', 'you are'],
            ['él · ella · usted', 'es', 'he / she is · you are'],
            ['nosotros · nosotras', 'somos', 'we are'],
            ['ustedes · ellos · ellas', 'son', 'you / they are'],
          ], note: 'Hoy usas **soy** y reconoces **eres / sos**, **es** y **son**: «Mis abuelos **son** de Argentina».' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Hola, ___ Alex.', options: ['soy', 'estoy', 'eres'], answer: 0, why: 'Tu nombre = identidad = soy.', en: 'Hi, I am Alex.' },
            { prompt: 'Mis abuelos ___ de Argentina.', options: ['son', 'soy', 'es'], answer: 0, why: 'Ellos (they) = son.', en: 'My grandparents are from Argentina.' },
            { prompt: 'Tu abuela: «Yo ___ Marta».', options: ['soy', 'es', 'sos'], answer: 0, why: 'Ella habla de ella misma: yo soy.', en: 'Your grandma: “I am Marta”.' },
            { prompt: '___ fan del tenis.', options: ['Soy', 'Estoy'], answer: 0, why: 'Ser fan de algo es parte de quién eres: soy.', en: 'I am a tennis fan.' },
          ] },
        ] },
        { title: 'Estoy · How and where I am', mascot: '/brand/mascot/seated.webp', coach: 'Estoy: cómo estás y dónde estás.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'ESTOY', question: '¿Cómo estoy? ¿Dónde estoy?', en: 'I am (how / where I am)', formula: ['yo estoy + bien · feliz · cansado/a', 'yo estoy + en + lugar'],
            meaning: 'Con **estoy** dices un **estado** (cómo te sientes) o un **lugar** (dónde estás). Hoy sí, mañana puede cambiar.',
            examples: [
              { es: '[[Estoy|teal]] bien.', en: 'I am fine.' },
              { es: '[[Estoy|teal]] muy feliz.', en: 'I am very happy.' },
              { es: '[[Estoy|teal]] cansada. / [[Estoy|teal]] cansado.', en: 'I am tired. (she / he)' },
              { es: '[[Estoy|teal]] en casa.', en: 'I am at home.' },
              { es: '[[Estoy|teal]] en Sídney. [[Estoy|teal]] en el gimnasio.', en: 'I am in Sydney. I am at the gym.' },
            ],
            note: '**Bien** y **feliz** no cambian. **Cansado / cansada**: -o si eres hombre, -a si eres mujer. En Argentina, para «muy feliz» también vas a oír «re feliz».' },
          { kind: 'table', title: 'Estar · to be (las formas de hoy)', head: ['Persona', 'estar', 'English'], rows: [
            ['[[yo|teal]]', '**estoy**', 'I am'],
            ['[[tú|orange]] · [[vos|orange]]', '**estás**', 'you are'],
            ['él · ella · usted', 'está', 'he / she is · you are'],
            ['nosotros · nosotras', 'estamos', 'we are'],
            ['ustedes · ellos · ellas', 'están', 'you / they are'],
          ], note: 'Buena noticia: con **tú** y con **vos**, «estás» es igual. «¿Cómo estás?» funciona en todo el mundo.' },
          { kind: 'compare', title: '¿Soy o estoy? · Which one?', columns: [
            { tone: 'blue', label: 'SOY', sentence: '[[Soy|blue]] Alex. [[Soy|blue]] de Australia.', idea: 'Identidad: no cambia de hoy a mañana.', en: 'I am Alex. I am from Australia.' },
            { tone: 'teal', label: 'ESTOY', sentence: '[[Estoy|teal]] feliz. [[Estoy|teal]] en Sídney.', idea: 'Un estado o un lugar: hoy sí, mañana quizás no.', en: 'I am happy. I am in Sydney.' },
          ] },
          { kind: 'decide', title: 'Tu frase empieza con «I am…». Responde', steps: [
            { q: '¿Dices tu nombre, de dónde eres, tu trabajo o de qué eres fan? (name, origin, job, fan of…)', yes: 'Usa **soy**: «Soy Alex», «Soy de Australia».', no: 'next' },
            { q: '¿Dices cómo te sientes o dónde estás? (how you feel, where you are)', yes: 'Usa **estoy**: «Estoy bien», «Estoy en casa».', no: 'Pregunta a tu profesor. Hoy solo necesitas soy y estoy.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '___ muy feliz.', options: ['Estoy', 'Soy'], answer: 0, why: 'Feliz es un estado: estoy.', en: 'I am very happy.' },
            { prompt: '___ de Australia.', options: ['Soy', 'Estoy'], answer: 0, why: 'De dónde eres = identidad: soy.', en: 'I am from Australia.' },
            { prompt: 'Abuela, ¿cómo ___?', options: ['estás', 'eres', 'soy'], answer: 0, why: 'Para preguntar cómo está alguien: estás.', en: 'Grandma, how are you?' },
            { prompt: '___ en el gimnasio.', options: ['Estoy', 'Soy'], answer: 0, why: 'Un lugar: estoy en.', en: 'I am at the gym.' },
            { prompt: 'Mi abuelo ___ cansado.', options: ['está', 'es', 'estoy'], answer: 0, why: 'Él + un estado: está cansado.', en: 'My grandpa is tired.' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Mira bien: ¿quién soy o cómo estoy?', blocks: [
          { kind: 'guide', text: { teacher: 'Lee la frase con el error y pregunta: «¿Quién soy o cómo estoy?». Después muestra la corrección.', self: 'Lee cada frase, busca el error y toca para ver la corrección.' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Estoy Alex.', right: 'Soy Alex.', why: 'Tu nombre es identidad: soy. (Your name: soy.)' },
            { wrong: 'Soy en Sídney.', right: 'Estoy en Sídney.', why: 'Un lugar va con estoy en. (A place: estoy en.)' },
            { wrong: 'Soy feliz hoy.', right: 'Estoy feliz hoy.', why: 'Cómo te sientes hoy: estoy. (How you feel today: estoy.)' },
            { wrong: 'Estoy de Australia.', right: 'Soy de Australia.', why: 'De dónde eres: soy de. (Where you are from: soy de.)' },
            { wrong: 'Abuela, ¿cómo eres?', right: 'Abuela, ¿cómo estás?', why: 'Para preguntar cómo está alguien hoy: ¿cómo estás? («¿Cómo eres?» pregunta qué tipo de persona es.)' },
            { wrong: 'Yo estoy bien, gracias. ¿Y tú, abuelo? ¿Está bien?', right: 'Yo estoy bien, gracias. ¿Y tú, abuelo? ¿Estás bien?', why: 'Hablas con él (tú / vos): estás, no está.' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: pide al alumno tres frases reales con yo: «Soy…», «Soy de…», «Estoy…». Repite cada frase con la pronunciación correcta y que el alumno la repita.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'La primera videollamada', coach: 'Toca las palabras marcadas. Tap the marked words.',
      steps: [
        { title: 'La videollamada · The video call', blocks: [
          { kind: 'guide', text: { teacher: 'Lean el diálogo con papeles: tú eres la abuela. Después, el alumno toca cada palabra marcada y dice «soy» o «estoy» y por qué.', self: 'Lee el diálogo en voz alta. Después toca cada palabra marcada para ver por qué se usa.' } },
          { kind: 'explore', title: 'Hola, abuela', setting: 'Sábado por la mañana en Sídney, sábado por la noche en Argentina. Alex llama a su abuela por videollamada por primera vez en español. (Alex video-calls grandma for the first time in Spanish.)', lines: [
            { who: 'Abuela', text: '¡Hola, mi amor! ¿Cómo [[estás|orange]]?', en: 'Hi, my love! How are you?' },
            { who: 'Alex', text: '¡Hola, abuela! [[Estoy|teal]] bien. ¡Estoy muy feliz!', en: 'Hi, grandma! I am fine. I am very happy!' },
            { who: 'Abuela', text: 'Yo también, mi amor. ¿[[Estás|orange]] en casa?', en: 'Me too, my love. Are you at home?' },
            { who: 'Alex', text: 'Sí, [[estoy|teal]] en casa, en Sídney. Y tú, abuela, ¿dónde estás?', en: 'Yes, I am at home, in Sydney. And you, grandma, where are you?' },
            { who: 'Abuela', text: 'En la cocina, con el mate. Tu abuelo [[está|teal]] en el sofá, con el fútbol.', en: 'In the kitchen, with the mate. Your grandpa is on the sofa, with the football.' },
            { who: 'Alex', text: '¡Ja, ja! Yo también [[soy|blue]] fan del fútbol.', en: 'Ha ha! I am a football fan too.' },
            { who: 'Abuela', text: '¡Claro! [[Sos|orange]] de la familia.', en: 'Of course! You are family.' },
            { who: 'Alex', text: 'Abuela, ahora [[soy estudiante|blue]] de español.', en: 'Grandma, now I am a Spanish student.' },
            { who: 'Abuela', text: '¡Qué bien, mi amor! Un beso grande.', en: 'How lovely, my love! A big kiss.' },
            { who: 'Alex', text: 'Un beso, abuela. ¡Chau!', en: 'A kiss, grandma. Bye!' },
          ], notes: {
            'estás': 'La abuela pregunta cómo está Alex: **estás** (you are). Con tú y con vos es igual.',
            'Estoy': 'Alex dice cómo está: **estoy** bien, estoy feliz. Un estado, no una identidad.',
            'Estás': 'Otra vez **estás**, ahora para preguntar dónde: «¿Estás en casa?».',
            'estoy': '**Estoy en** + lugar: estoy en casa, en Sídney. Dónde estoy.',
            'está': 'La abuela habla del abuelo (él): **está** en el sofá. Un lugar.',
            'soy': '**Soy fan** del fútbol: parte de quién es Alex. Identidad: soy.',
            'Sos': '«Sos» es «eres» con **vos**. La abuela es argentina. Significa: you are.',
            'soy estudiante': '**Soy** + profesión u ocupación: soy estudiante. Identidad.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Dónde está Alex?', options: ['En casa, en Sídney.', 'En Argentina.', 'En el gimnasio.'], answer: 0, why: '«Sí, estoy en casa, en Sídney».', en: 'Where is Alex?' },
            { prompt: '¿Dónde está el abuelo?', options: ['En el sofá, con el fútbol.', 'En la cocina.', 'En el trabajo.'], answer: 0, why: '«Tu abuelo está en el sofá, con el fútbol».', en: 'Where is grandpa?' },
            { prompt: '«Sos de la familia»: ¿qué significa «sos»?', options: ['Eres (you are), con vos.', 'Soy (I am).', 'Son (they are).'], answer: 0, why: 'Sos = eres. Es la forma de vos, la de tus abuelos.', en: '“Sos de la familia”: what does “sos” mean?' },
          ] },
        ] },
        { title: 'Un mensaje del abuelo · A text from grandpa', blocks: [
          { kind: 'explore', title: 'El abuelo escribe', setting: 'Por la tarde, un mensaje de texto del abuelo. (In the afternoon, a text message from grandpa.)', lines: [
            { who: 'Abuelo', text: 'Hola. [[Soy|blue]] el abuelo. ¿Cómo [[estás|orange]]?', en: 'Hi. It’s grandpa. How are you?' },
            { who: 'Alex', text: 'Hola, abuelo. Estoy bien, gracias. ¿Y tú?', en: 'Hi, grandpa. I am fine, thanks. And you?' },
            { who: 'Abuelo', text: '[[Estoy cansado|teal]]. Hoy, dos horas de bicicleta.', en: 'I am tired. Today, two hours of cycling.' },
            { who: 'Alex', text: '¡Guau! Abuelo, [[eres|orange]] deportista.', en: 'Wow! Grandpa, you are sporty.' },
            { who: 'Abuelo', text: 'Ja. [[Soy viejo|blue]], pero fuerte. ¿Mañana, videollamada?', en: 'Ha. I am old, but strong. Video call tomorrow?' },
            { who: 'Alex', text: 'Sí. Mañana [[estoy en casa|teal]].', en: 'Yes. Tomorrow I am at home.' },
            { who: 'Abuelo', text: 'Perfecto. Un abrazo.', en: 'Perfect. A hug.' },
          ], notes: {
            'Soy': 'El abuelo se presenta: **soy** el abuelo. Identidad.',
            'estás': 'La pregunta de siempre: ¿cómo **estás**?',
            'Estoy cansado': 'Un estado de hoy: **estoy cansado**. Él es hombre: cansad**o**.',
            'eres': 'Alex habla con el abuelo usando **tú**: eres deportista. El abuelo diría «sos».',
            'Soy viejo': 'Cómo es el abuelo, su identidad: **soy** viejo, pero fuerte.',
            'estoy en casa': 'Dónde va a estar Alex mañana: **estoy en** casa.',
          } },
          { kind: 'classify', title: '¿Soy o estoy? · Which verb?', categories: [
            { id: 'soy', label: 'SOY · quién soy', tone: 'blue' },
            { id: 'estoy', label: 'ESTOY · cómo / dónde', tone: 'teal' },
          ], items: [
            { text: '… Alex', answer: 'soy', why: 'Tu nombre: soy Alex.' },
            { text: '… de Australia', answer: 'soy', why: 'De dónde eres: soy de Australia.' },
            { text: '… feliz', answer: 'estoy', why: 'Un estado: estoy feliz.' },
            { text: '… en casa', answer: 'estoy', why: 'Un lugar: estoy en casa.' },
            { text: '… cansada', answer: 'estoy', why: 'Un estado: estoy cansada.' },
            { text: '… estudiante', answer: 'soy', why: 'Una ocupación: soy estudiante.' },
            { text: '… en Sídney', answer: 'estoy', why: 'Un lugar: estoy en Sídney.' },
            { text: '… fan del fútbol', answer: 'soy', why: 'Parte de quién eres: soy fan.' },
          ] },
          { kind: 'teacher', text: 'Pregunta: «¿Qué responde Alex cada vez que el abuelo pregunta con estás?». El alumno ve el par estás → estoy.' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: '¿Quién soy o cómo estoy? Who or how?',
      steps: [
        { title: 'Elige: soy o estoy', blocks: [
          { kind: 'choice', items: [
            { context: 'Te presentas a tu abuela. (You introduce yourself.)', prompt: 'Hola, abuela. ___ Alex.', options: ['Soy', 'Estoy'], answer: 0, why: 'Tu nombre: soy.', en: 'Hi, grandma. I am Alex.' },
            { context: 'Dices cómo te sientes. (You say how you feel.)', prompt: '___ muy feliz.', options: ['Estoy', 'Soy'], answer: 0, why: 'Un estado: estoy.', en: 'I am very happy.' },
            { context: 'Dices dónde estás. (You say where you are.)', prompt: '___ en Sídney, en casa.', options: ['Estoy', 'Soy'], answer: 0, why: 'Un lugar: estoy en.', en: 'I am in Sydney, at home.' },
            { context: 'Dices de dónde eres. (You say where you are from.)', prompt: '___ de Australia.', options: ['Soy', 'Estoy'], answer: 0, why: 'De dónde eres: soy de.', en: 'I am from Australia.' },
            { context: 'Hablas de tus abuelos. (You talk about your grandparents.)', prompt: 'Mis abuelos ___ de Argentina.', options: ['son', 'están', 'soy'], answer: 0, why: 'Ellos + origen: son de.', en: 'My grandparents are from Argentina.' },
            { context: 'Hablas de tu abuela ahora. (You talk about grandma now.)', prompt: 'Mi abuela ___ en la cocina.', options: ['está', 'es', 'estoy'], answer: 0, why: 'Ella + lugar: está en.', en: 'My grandma is in the kitchen.' },
            { context: 'Hablas de tu abuelo. (You talk about grandpa.)', prompt: 'Mi abuelo ___ deportista.', options: ['es', 'está', 'son'], answer: 0, why: 'Él + cómo es siempre: es.', en: 'My grandpa is sporty.' },
            { context: 'Le preguntas a tu abuelo. (You ask grandpa.)', prompt: 'Abuelo, ¿cómo ___?', options: ['estás', 'eres', 'está'], answer: 0, why: 'Para preguntar cómo está alguien: ¿cómo estás?', en: 'Grandpa, how are you?' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Estoy Alex.', ok: false, options: ['Soy Alex.', 'Es Alex.', 'Está Alex.'], answer: 0, why: 'Tu nombre: soy Alex.' },
            { sentence: 'Estoy en casa.', ok: true, why: 'Correcta: un lugar, estoy en casa.' },
            { sentence: 'Soy en el gimnasio.', ok: false, options: ['Estoy en el gimnasio.', 'Soy el gimnasio.', 'Son en el gimnasio.'], answer: 0, why: 'Un lugar: estoy en el gimnasio.' },
            { sentence: 'Soy de Sídney.', ok: true, why: 'Correcta: de dónde eres, soy de.' },
            { sentence: 'Mi abuela estoy bien.', ok: false, options: ['Mi abuela está bien.', 'Mi abuela es bien.', 'Mi abuela estás bien.'], answer: 0, why: 'Ella (she): está bien.' },
            { sentence: 'Abuela, ¿cómo estás?', ok: true, why: 'Correcta: la pregunta para tus abuelos.' },
            { sentence: 'Estoy fan del fútbol.', ok: false, options: ['Soy fan del fútbol.', 'Es fan del fútbol.', 'Estás fan del fútbol.'], answer: 0, why: 'Ser fan de algo es identidad: soy fan.' },
          ] },
        ] },
        { title: 'Completa la videollamada · Complete the call', blocks: [
          { kind: 'chat-fill', title: 'Segunda videollamada', lines: [
            { who: 'Abuela', text: '¡Hola, mi amor! ¿Cómo ___?', options: ['estás', 'eres', 'estoy'], answer: 0, why: 'La abuela pregunta cómo está Alex: estás.' },
            { who: 'Alex', text: 'Hola, abuela. ___ muy bien.', options: ['Estoy', 'Soy', 'Está'], answer: 0, why: 'Alex habla de cómo está: estoy.' },
            { who: 'Abuela', text: '¿___ en casa o en el trabajo?', options: ['Estás', 'Eres', 'Soy'], answer: 0, why: 'Un lugar, para tú / vos: estás.' },
            { who: 'Alex', text: '___ en casa. ¿Y el abuelo?', options: ['Estoy', 'Soy', 'Es'], answer: 0, why: 'Un lugar: estoy en casa.' },
            { who: 'Abuela', text: 'El abuelo ___ en el patio, con el mate.', options: ['está', 'es', 'estoy'], answer: 0, why: 'Él + lugar: está.' },
            { who: 'Alex', text: 'Abuela, yo ___ fan del mate también.', options: ['soy', 'estoy', 'eres'], answer: 0, why: 'Identidad: soy fan.' },
            { who: 'Abuela', text: '¡Claro! Vos ___ de la familia.', options: ['sos', 'soy', 'son'], answer: 0, why: 'La abuela habla con vos: sos (eres).' },
            { who: 'Alex', text: 'Un beso, abuela. ¡Chau!' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['de', 'Soy', 'Australia'], accept: ['Soy de Australia'], en: 'I am from Australia.' },
            { tiles: ['en', 'Estoy', 'casa'], accept: ['Estoy en casa'], en: 'I am at home.' },
            { tiles: ['soy', 'Hola,', 'abuela,', 'Alex'], accept: ['Hola, abuela, soy Alex'], en: 'Hi, grandma, I am Alex.' },
            { tiles: ['muy', 'Estoy', 'feliz', 'hoy'], accept: ['Estoy muy feliz hoy', 'Hoy estoy muy feliz'], en: 'I am very happy today.' },
            { tiles: ['abuelos', 'Mis', 'de', 'son', 'Argentina'], accept: ['Mis abuelos son de Argentina'], en: 'My grandparents are from Argentina.' },
          ] },
          { kind: 'rewrite', title: 'Escríbelo en español · Write it in Spanish', items: [
            { prompt: 'I am happy.', instruction: 'Escribe la frase en español.', accept: ['Estoy feliz', 'Yo estoy feliz', 'Estoy muy feliz'] },
            { prompt: 'I am from Australia.', instruction: 'Escribe la frase en español.', accept: ['Soy de Australia', 'Yo soy de Australia'] },
            { prompt: 'I am at home.', instruction: 'Escribe la frase en español.', accept: ['Estoy en casa', 'Yo estoy en casa'] },
            { prompt: 'Grandma, how are you?', instruction: 'Escribe la pregunta en español. (Grandma = abuela)', accept: ['Abuela, ¿cómo estás?', '¿Cómo estás, abuela?', 'Abuela, cómo estás', 'Cómo estás, abuela'] },
          ] },
        ] },
        { title: 'Las personas · The people', blocks: [
          { kind: 'classify', title: '¿De quién hablamos? · Who are we talking about?', categories: [
            { id: 'yo', label: 'I', tone: 'blue' },
            { id: 'tu', label: 'you (one person)', tone: 'orange' },
            { id: 'el', label: 'he · she', tone: 'teal' },
            { id: 'plural', label: 'we · you all · they', tone: 'violet' },
          ], items: [
            { text: 'yo', answer: 'yo', why: 'Yo = I.' },
            { text: 'vos', answer: 'tu', why: 'Vos = you, en Argentina.' },
            { text: 'ella', answer: 'el', why: 'Ella = she.' },
            { text: 'nosotros', answer: 'plural', why: 'Nosotros = we.' },
            { text: 'tú', answer: 'tu', why: 'Tú = you.' },
            { text: 'ellos', answer: 'plural', why: 'Ellos = they.' },
            { text: 'él', answer: 'el', why: 'Él = he.' },
            { text: 'ustedes', answer: 'plural', why: 'Ustedes = you all.' },
          ] },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Un mensaje de voz de la abuela', coach: 'Primero escucha sin leer. Listen first, read later.',
      steps: [
        { title: 'La abuela te deja un mensaje · Grandma leaves you a message', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general (¿quién habla?). Segunda escucha: el alumno levanta la mano cada vez que oye «estoy», «está» o «estás». Después, las preguntas.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Cuenta cuántas veces oyes «estoy», «está» o «estás». (Listen once for the gist, once for the details.)' } },
          { kind: 'listen', title: 'Un mensaje de voz de la abuela', channel: 'MENSAJE DE VOZ · DE LA ABUELA, DESDE ARGENTINA', src: '/audio/grammar-live/239.mp3',
            before: 'Tu abuela te manda un mensaje de voz desde Argentina. ¿Qué crees que dice? (Your grandma sends you a voice message from Argentina. What do you think she says?)',
            gist: { prompt: '¿Quién habla? · Who is speaking?', options: ['La abuela.', 'El abuelo.', 'Alex.'], answer: 0, why: '«Hola, mi amor. Soy la abuela».', en: 'Who is speaking?' },
            details: [
              { prompt: '¿Dónde está la abuela? · Where is grandma?', options: ['En casa, en Buenos Aires.', 'En el gimnasio.', 'En Sídney.'], answer: 0, why: '«Estoy en casa, en Buenos Aires».', en: 'Where is grandma?' },
              { prompt: '¿Cómo está la abuela? · How is grandma?', options: ['Muy bien.', 'Cansada.', 'Triste.'], answer: 0, why: '«Estoy muy bien».', en: 'How is grandma?' },
              { prompt: '¿Dónde está el abuelo? · Where is grandpa?', options: ['En el patio, con el mate.', 'En el sofá.', 'En el trabajo.'], answer: 0, why: '«Tu abuelo está en el patio, con el mate».', en: 'Where is grandpa?' },
              { prompt: '¿Qué pregunta la abuela? · What does grandma ask?', options: ['¿Cómo estás? ¿Estás en casa o en el gimnasio?', '¿Cómo te llamas?', '¿De dónde eres?'], answer: 0, why: '«¿Y vos? ¿Cómo estás? ¿Estás en casa o en el gimnasio?».', en: 'What does grandma ask?' },
              { prompt: '¿Cuándo es la videollamada? · When is the video call?', options: ['Mañana, a las ocho.', 'Hoy.', 'El domingo.'], answer: 0, why: '«Mañana, videollamada a las ocho».', en: 'When is the video call?' },
            ],
            transcript: 'Hola, mi amor. [[Soy|blue]] la abuela. [[Estoy|teal]] en casa, en Buenos Aires. [[Estoy|teal]] muy bien. Hoy hay sol. Tu abuelo [[está|teal]] en el patio, con el mate. ¿Y [[vos|orange]]? ¿Cómo [[estás|orange]]? ¿[[Estás|orange]] en casa o en el gimnasio? Mañana, videollamada a las ocho. Un beso grande. Chau, chau.',
            reply: { teacher: 'El profesor es la abuela. El alumno responde al mensaje con tres frases: cómo está, dónde está y un saludo. Después pregunta: «¿Y tú, abuela? ¿Cómo estás?».', self: 'Responde a la abuela en voz alta: «Hola, abuela. Estoy… Estoy en…». Termina con una pregunta: «¿Y tú? ¿Cómo estás?». (Answer grandma aloud: how you are, where you are, and ask her back.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Tu primera charla', coach: 'Responde con yo. Answer with “yo”.',
      steps: [
        { title: 'Tu primera charla · Your first chat', blocks: [
          { kind: 'guide', text: { teacher: 'Tú eres la abuela o el abuelo y preguntas con tú (o con vos, si quieres que el alumno lo oiga). El alumno responde con yo, en frases cortas. Repite su frase bien pronunciada y sigue.', self: 'Imagina que tu abuela te pregunta. Lee la pregunta, responde en voz alta con yo y, si quieres, escribe tu respuesta. (Read the question, answer aloud with “yo”.)' } },
          { kind: 'talk', cards: [
            { q: '¿Cómo te llamas? · What is your name?', followUps: ['¿Cómo se escribe? Deletrea. (Spell it.)', '¿Tienes otro nombre en casa? (A nickname?)'], phrases: ['[[Soy|blue]] …', 'Me llamo …', 'Se escribe: a, ele, e, equis.'], hint: '«Soy» + tu nombre. Para deletrear, usa los nombres de las letras del abecedario.', example: 'Soy Alex. Se escribe a, ele, e, equis. En casa, Al.', next: 'Ahora, de dónde eres.', teacher: 'Responde tú también con información real y simple: «Yo soy Marta». Así el alumno oye «soy» otra vez.' },
            { q: '¿De dónde eres? · Where are you from?', followUps: ['¿De qué ciudad? (Which city?)', '¿Y tus abuelos, de dónde son? (And your grandparents?)'], phrases: ['[[Soy|blue]] de Australia.', '[[Soy|blue]] de Sídney.', 'Mis abuelos son de Argentina.'], hint: '«Soy de» + país o ciudad. Para ellos: «son de».', example: 'Soy de Australia, de Sídney. Mis abuelos son de Argentina, de Buenos Aires.', next: 'Ahora, cómo estás hoy.' },
            { q: '¿Cómo estás hoy? · How are you today?', followUps: ['¿Cansado o cansada? (Tired?)', '¿Y tu familia, cómo está? (And your family?)'], phrases: ['[[Estoy|teal]] bien. / Muy bien.', '[[Estoy|teal]] feliz.', '[[Estoy|teal]] cansado. / [[Estoy|teal]] cansada.'], hint: '«Estoy» + cómo te sientes. Hombre: cansado. Mujer: cansada.', example: 'Estoy muy bien, gracias. Un poco cansada. Mi familia está bien.', next: 'Ahora, dónde estás.' },
            { q: '¿Dónde estás ahora? · Where are you now?', followUps: ['¿En casa o en el trabajo? (At home or at work?)', '¿Y tus abuelos, dónde están? (Where are your grandparents?)'], phrases: ['[[Estoy|teal]] en casa.', '[[Estoy|teal]] en Sídney.', 'Mis abuelos están en Argentina.'], hint: '«Estoy en» + lugar. Para ellos: «están en».', example: 'Estoy en casa, en Sídney. Mis abuelos están en Argentina.', next: 'Ahora, tus gustos.' },
            { q: '¿De qué eres fan? · What are you a fan of?', followUps: ['¿Películas o series? (Movies or series?)', '¿Fútbol, tenis, natación? (Football, tennis, swimming?)', '¿Viajar? (Travelling?)'], phrases: ['[[Soy|blue]] fan de las películas.', '[[Soy|blue]] fan del fútbol / del tenis.', '[[Soy|blue]] fan de viajar.'], hint: '«Soy fan de» + lo que te gusta. Películas, series, fútbol, gimnasio, viajar…', example: 'Soy fan de las películas y del fútbol. Y soy fan de viajar: Argentina pronto.', next: 'Para terminar, la llamada completa.' },
            { q: 'Ahora llama a tu abuela: saluda, di cómo estás, dónde estás y pregunta. · Now call grandma: greet her, say how and where you are, and ask her.', followUps: ['¿Y tú, abuela? (And you, grandma?)', '¿Está el abuelo? (Is grandpa there?)'], phrases: ['Hola, abuela. [[Soy|blue]] …', '[[Estoy|teal]] … [[Estoy|teal]] en …', '¿Y tú? ¿Cómo [[estás|orange]]?'], hint: 'Cuatro frases: hola + soy, estoy (cómo), estoy en (dónde), ¿y tú?', example: 'Hola, abuela. Soy Alex. Estoy muy feliz. Estoy en casa, en Sídney. ¿Y tú? ¿Cómo estás?', teacher: 'Responde como la abuela, con vos si quieres: «Estoy re bien, mi amor. ¿Y vos?». Después, cambien los papeles.' },
          ], swap: { teacher: 'Al final, cambien los papeles: el alumno es la abuela y te hace las preguntas con «¿cómo estás?», «¿dónde estás?».', self: 'Ahora tú eres la abuela: haz las preguntas en voz alta («¿cómo estás?», «¿dónde estás?») y responde como ella. (Now you are grandma: ask the questions and answer as her.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Tu primer mensaje', coach: 'Corto y claro. Short and clear.',
      steps: [
        { title: 'Tu primer mensaje · Your first message', blocks: [
          { kind: 'guide', text: { teacher: 'Puede escribir en clase o como tarea. Revisen juntos soy / estoy y la -o / -a de cansado. Después, que lea el mensaje en voz alta.', self: 'Escribe tu mensaje y toca «Revisar mi texto». Mira bien soy / estoy. (Write your message and tap “Revisar mi texto”.)' } },
          { kind: 'write', title: 'Un mensaje para tus abuelos · A message for your grandparents', situation: 'Escribe tu primer mensaje de texto en español para tus abuelos. Corto: cuatro o cinco frases. (Write your first text message in Spanish to your grandparents. Short: four or five sentences.)', task: [
            'Saluda: «Hola, abuela», «Hola, abuelo». (Say hello.)',
            'Di quién eres con **soy**: tu nombre, de dónde eres, de qué eres fan. (Who you are.)',
            'Di cómo estás y dónde estás con **estoy**. (How and where you are.)',
            'Pregunta: «¿Y tú? ¿Cómo estás?». (Ask them back.)',
          ], starters: ['Hola, abuela. Hola, abuelo.', 'Soy …', 'Soy de …', 'Soy fan de …', 'Estoy …', 'Estoy en …', '¿Y tú? ¿Cómo estás?', 'Un beso.'],
            words: ['soy', 'estoy', 'de', 'en', 'bien', 'feliz', 'cansado / cansada', 'casa', 'fan de', 'abuela', 'abuelo', 'un beso', 'un abrazo'],
            model: 'Hola, abuela. Hola, abuelo. [[Soy|blue]] Alex. [[Soy|blue]] de Sídney y soy fan del fútbol. [[Estoy|teal]] muy feliz. Hoy [[estoy|teal]] en casa. ¿Y tú, abuela? ¿Cómo [[estás|orange]]? Un beso grande.',
            minWords: 15,
            checks: [
              { label: 'Soy + quién eres (name, origin, fan of)', pattern: '(?<!\\p{L})soy(?!\\p{L})', tip: 'Di quién eres: «Soy Alex», «Soy de Australia».' },
              { label: 'Estoy + cómo o dónde estás (how / where)', pattern: '(?<!\\p{L})estoy(?!\\p{L})', tip: 'Di cómo estás o dónde estás: «Estoy bien», «Estoy en casa».' },
              { label: 'Una pregunta para ellos: ¿cómo estás? (ask them back)', pattern: 'c[oó]mo\\s+est[aá]s', tip: 'Pregunta: «¿Y tú? ¿Cómo estás?».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})estoy\\s+(?:de\\s+(?!viaje|vacaciones)|fan(?!\\p{L}))', why: 'De dónde eres o de qué eres fan es identidad: «soy de…», «soy fan de…».' },
              { pattern: '(?<!\\p{L})soy\\s+(?:en(?!\\p{L})|bien(?!\\p{L})|feliz(?!\\p{L})|cansad[oa](?!\\p{L}))', why: 'Un lugar o un estado va con estoy: «estoy en casa», «estoy bien», «estoy feliz».' },
              { pattern: 'c[oó]mo\\s+eres\\s*\\?', why: 'Para preguntar cómo está alguien hoy: «¿cómo estás?».' },
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
            { tone: 'blue', label: 'SOY', formula: 'soy + nombre · de + lugar · fan de…', example: 'Soy Alex. Soy de Australia.', caption: 'quién soy', en: 'I am (who I am)' },
            { tone: 'teal', label: 'ESTOY', formula: 'estoy + bien / feliz · en + lugar', example: 'Estoy feliz. Estoy en casa.', caption: 'cómo y dónde estoy', en: 'I am (how / where I am)' },
            { tone: 'orange', label: '¿Y TÚ? ¿Y VOS?', formula: '¿cómo estás? · ¿dónde estás?', example: 'Abuela, ¿cómo estás?', caption: 'la pregunta para tus abuelos', en: 'And you? How are you?' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Tu nombre, tu lugar de origen, tu gente y tus gustos: **soy**. Cómo te sientes hoy y dónde estás ahora: **estoy**. Y la h no suena: «hola» es «ola».', en: 'Your name, where you are from, your people and your likes: soy. How you feel today and where you are now: estoy. And the h is silent: “hola” sounds “ola”.' },
        ] },
        { title: 'Desafío final · Final challenge', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'Hola, abuelo. ___ Alex.', options: ['Soy', 'Estoy', 'Es'], answer: 0, why: 'Tu nombre: soy.' },
            { prompt: '___ muy bien, gracias.', options: ['Estoy', 'Soy', 'Eres'], answer: 0, why: 'Cómo estás: estoy.' },
            { prompt: '___ de Australia, pero mis abuelos ___ de Argentina.', options: ['Soy / son', 'Estoy / están', 'Soy / soy'], answer: 0, why: 'Origen: soy de, son de.' },
            { prompt: 'Hoy ___ en casa, en Sídney.', options: ['estoy', 'soy', 'está'], answer: 0, why: 'Un lugar: estoy en.' },
            { prompt: '¿Y tú, abuela? ¿Cómo ___?', options: ['estás', 'eres', 'está'], answer: 0, why: 'La pregunta: ¿cómo estás?' },
          ] },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente paso: Noche abierta · Next step: Noche abierta', text: 'Ya puedes decir quién eres y cómo estás. Ahora, al barrio en 3D: en **Noche abierta**, nivel A0, caminas por una ciudad argentina de noche, escuchas a la gente y eliges qué decir. Todo bilingüe, con las mismas frases de hoy.', en: 'You can now say who you are and how you are. Next, the 3D neighbourhood: in Noche abierta, level A0, you walk through an Argentine city at night, listen to people and choose what to say. All bilingual, with the same sentences as today.', href: '/noche-abierta?level=A0', label: 'Ir a Noche abierta · nivel A0' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «Di quién eres y cómo estás». Respuesta esperada: «Soy… Soy de… Estoy…». Tarea para la próxima clase: mandar el mensaje de Escribir a los abuelos de verdad y traer la respuesta.' },
        ] },
      ],
    },
  ],
};
