import type { LiveLesson } from '../types';

/**
 * Lesson 314 · A1 · Tener y tener + edad / sensaciones (course unit G014).
 * One visit to a clinic in Bogotá runs through the class: Paula Medina, 30,
 * from Argentina, fills in the intake form with Carmen at reception, then sees
 * Dr Ruiz with her son Leo (6). Light, everyday symptoms only. Content: the
 * full present of TENER (tenéis marked as Spain, «vos tenés» only in a
 * variety note), tener + número + años, tener hambre / sed / sueño / frío /
 * calor (mucho / mucha), tener + cosa, and two contrasts: «Tengo 30 años» /
 * «Soy de Argentina» (ser, class 011) and «Tengo frío» / «Estoy cansada»
 * (tener + noun vs estar + adjective, class 012).
 * Carmen and the doctor speak to Paula with usted; Paula and Leo use tú.
 */
export const lesson: LiveLesson = {
  id: 314,
  level: 'A1',
  title: 'Tener y tener + edad / sensaciones',
  subtitle: 'Decir tu edad, qué sientes (frío, calor, hambre, sed, sueño) y qué tienes con «tener», sin confundirlo con «ser» o «estar».',
  legend: [
    { tone: 'blue', label: 'TENER + años · la edad (age)' },
    { tone: 'teal', label: 'TENER + sensación · frío, hambre, sed… (how your body feels)' },
    { tone: 'violet', label: 'TENER + cosa · posesión (to have something)' },
    { tone: 'orange', label: 'SER de · ESTAR + adjetivo (contraste, clases 011–012)' },
  ],
  optionNotes: {
    soy: '«Soy» es ser: quién eres, de dónde eres, tu profesión. La edad y las sensaciones (frío, hambre…) van con tener.',
    Soy: '«Soy» es ser: quién eres, de dónde eres, tu profesión. La edad y las sensaciones (frío, hambre…) van con tener.',
    es: '«Es» es ser: identidad, origen, profesión. La edad va con tener: «tiene seis años».',
    estoy: '«Estoy» va con un adjetivo (cansado, nerviosa) o con un lugar. Frío, calor, hambre, sed y sueño son nombres: van con tener.',
    Estoy: '«Estoy» va con un adjetivo (cansado, nerviosa) o con un lugar. Frío, calor, hambre, sed y sueño son nombres: van con tener.',
    está: '«Está» va con un adjetivo (cansada) o con un lugar. Con años, frío, sed o calor: tiene.',
    están: '«Están» va con un adjetivo o con un lugar. Con años, hambre o sed: tienen.',
    tengo: '«Tengo» (yo) va con la edad, las sensaciones (frío, sed…) y las cosas. Origen o profesión: soy. Un adjetivo (cansado) o un lugar: estoy.',
    Tengo: '«Tengo» (yo) va con la edad, las sensaciones (frío, sed…) y las cosas. Origen o profesión: soy. Un adjetivo (cansado) o un lugar: estoy.',
    tienes: '«Tienes» es la forma de tú (you have). Con usted, él o ella: tiene.',
    Tienes: '«Tienes» es la forma de tú (you have). Con usted, él o ella: tiene.',
    tiene: '«Tiene» (él, ella, usted) va con la edad, las sensaciones y las cosas. Origen o profesión: es. Un adjetivo o un lugar: está. Con tú: tienes.',
    Tiene: '«Tiene» (él, ella, usted) va con la edad, las sensaciones y las cosas. Origen o profesión: es. Un adjetivo o un lugar: está. Con tú: tienes.',
    tenemos: '«Tenemos» es solo para nosotros o nosotras (we have).',
    tienen: '«Tienen» es para ellos, ellas o ustedes (they have · you all have).',
    mucho: '«Mucho» va con nombres masculinos: mucho frío, mucho calor, mucho sueño.',
    mucha: '«Mucha» va con nombres femeninos: mucha hambre, mucha sed.',
    muy: '«Muy» va con adjetivos: muy cansada. Con un nombre (frío, sed, hambre…) se usa mucho / mucha.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'El formulario de la clínica', coach: 'Edad, síntomas, un solo verbo. Age, symptoms, one verb.',
      steps: [
        { title: 'En la recepción · At reception', blocks: [
          { kind: 'lead', text: 'Paula Medina está en la Clínica San Rafael, en Bogotá, con su hijo Leo. En la recepción hay un formulario: nombre, **edad** y **síntomas** (symptoms). Para casi todo el formulario, Paula usa un solo verbo: **tener** (to have).', en: 'Paula Medina is at the San Rafael Clinic in Bogotá with her son Leo. At reception there is a form: name, age and symptoms. For almost the whole form, Paula uses one verb: tener (to have).' },
          { kind: 'guide', text: { teacher: 'Tú lees las tres frases de Paula y tu alumno repite. Después, tu alumno dice qué frase habla de la edad, cuál del cuerpo y cuál de una cosa.', self: 'Lee las tres frases en voz alta. Busca cuál dice la edad, cuál dice qué siente el cuerpo y cuál dice qué cosa tiene Paula.' } },
          { kind: 'compare', title: 'Tres respuestas de Paula · Three answers from Paula', columns: [
            { tone: 'blue', label: 'TENER + años · edad', sentence: '[[Tengo treinta años|blue]].', idea: 'Su edad: 30. En español, la edad se «tiene».', en: 'I am thirty (years old).' },
            { tone: 'teal', label: 'TENER + sensación', sentence: '[[Tengo frío|teal]] y [[tengo sueño|teal]].', idea: 'Qué siente su cuerpo hoy.', en: 'I am cold and I am sleepy.' },
            { tone: 'violet', label: 'TENER + cosa', sentence: '[[Tengo una cita|violet]] a las diez.', idea: 'Algo que tiene: una cita (an appointment).', en: 'I have an appointment at ten.' },
          ] },
          { kind: 'tip', icon: '💡', title: 'En inglés «I am», en español «tengo»', text: 'Para la edad y para frío, calor, hambre, sed y sueño, el inglés usa **to be**: I am 30, I am cold. El español usa **tener**: literalmente «I have 30 years», «I have cold».', en: 'For age and for cold, heat, hunger, thirst and sleepiness, English uses “to be”: I am 30, I am cold. Spanish uses tener: literally “I have 30 years”, “I have cold”.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Tengo treinta años» dice…', options: ['la edad de Paula.', 'cómo está Paula hoy.', 'de dónde es Paula.'], answer: 0, why: 'Tener + número + años = la edad.', en: '“Tengo treinta años” tells you…' },
            { prompt: '«Tengo frío» dice…', options: ['cuántos años tiene Paula.', 'qué siente el cuerpo de Paula.', 'qué cosa tiene Paula.'], answer: 1, why: 'Frío es una sensación del cuerpo: tener frío.', en: '“Tengo frío” tells you…' },
            { prompt: 'En «Tengo una cita», Paula tiene…', options: ['una edad.', 'una cosa: una cita.', 'una sensación.'], answer: 1, why: 'Una cita (appointment) es algo que Paula tiene: tener + cosa.', en: 'In “Tengo una cita”, Paula has…' },
          ] },
        ] },
        { title: 'Las formas de tener · The forms', mascot: '/brand/mascot/studying.webp', coach: 'Tengo, tienes, tiene… Learn the six forms.', blocks: [
          { kind: 'lead', text: 'Tener es irregular. **Tengo** tiene una **g**. **Tienes, tiene, tienen** cambian la e por **ie**. **Tenemos** y **tenéis** son regulares.', en: 'Tener is irregular. “Tengo” has a g. “Tienes, tiene, tienen” change e to ie. “Tenemos” and “tenéis” are regular.' },
          { kind: 'table', title: 'Tener · presente (to have)', head: ['Persona', 'tener', 'English', 'Ejemplo'], rows: [
            ['yo', '**tengo**', 'I have', '[[Tengo una pregunta|violet]].'],
            ['tú', '**tienes**', 'you have', '¿[[Tienes frío|teal]]?'],
            ['él · ella · usted', '**tiene**', 'he / she has · you have', 'Leo [[tiene seis años|blue]].'],
            ['nosotros · nosotras', '**tenemos**', 'we have', '[[Tenemos una cita|violet]].'],
            ['vosotros · vosotras', '**tenéis**', 'you all have (Spain)', '¿[[Tenéis hambre|teal]]?'],
            ['ellos · ellas · ustedes', '**tienen**', 'they have · you all have', 'Los niños [[tienen sed|teal]].'],
          ], note: '**Vosotros** solo se usa en España. En América, para varias personas: **ustedes tienen**. **Usted** (formal) usa la forma de él / ella: «¿Cuántos años **tiene** usted?».' },
          { kind: 'tip', icon: '🇦🇷', title: 'Paula es argentina: «vos tenés»', text: 'En Argentina y Uruguay, con **vos**, la forma es **tenés**: «¿Vos tenés frío?». Significa lo mismo que «¿Tú tienes frío?». En esta clase usas **tú tienes**; «tenés» es solo para reconocerlo.', en: 'In Argentina and Uruguay, with “vos”, the form is “tenés”: “¿Vos tenés frío?”. It means the same as “¿Tú tienes frío?”. In this class you use “tú tienes”; “tenés” is just for recognising it.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Leo ___ seis años.', options: ['tiene', 'tengo', 'tienes'], answer: 0, why: 'Leo = él: tiene.', en: 'Leo is six.' },
            { prompt: 'Paula y Leo ___ una cita.', options: ['tienen', 'tenemos', 'tiene'], answer: 0, why: 'Paula y Leo = ellos: tienen.', en: 'Paula and Leo have an appointment.' },
            { prompt: 'Señora, ¿___ usted su documento?', options: ['tiene', 'tengo', 'tienes'], answer: 0, why: 'Usted usa la forma de él / ella: tiene.', en: 'Madam, do you have your ID?' },
            { prompt: '«¿Vos tenés frío?» significa…', options: ['¿Tú tienes frío?', '¿Ella tiene frío?', '¿Ustedes tienen frío?'], answer: 0, why: 'Vos tenés = tú tienes (you, una persona).', en: '“¿Vos tenés frío?” means…' },
          ] },
        ] },
        { title: 'La edad: tener, no ser · Age: tener, not ser', mascot: '/brand/mascot/standing.webp', coach: 'Los años se tienen. You “have” your years.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'TENER + años', question: '¿Cuántos años tienes?', en: 'How old are you?', formula: ['tener + número + años', 'Tengo treinta años. Leo tiene seis años.'],
            meaning: 'La edad se dice con **tener** + número + **años**. Para preguntar: **¿Cuántos años tienes?** (tú) o **¿Cuántos años tiene?** (usted, él, ella).',
            examples: [
              { es: '[[Tengo treinta años|blue]].', en: 'I am thirty.' },
              { es: 'La doctora [[tiene cuarenta y cinco años|blue]].', en: 'The doctor is forty-five.' },
              { es: 'Mi madre [[tiene sesenta y ocho años|blue]].', en: 'My mother is sixty-eight.' },
              { es: '¿Cuántos años [[tienes|blue]]? — [[Tengo veintidós años|blue]].', en: 'How old are you? — I am twenty-two.' },
            ],
            note: 'Números: 22 veintidós, 30 treinta, 45 cuarenta y cinco, 68 sesenta y ocho. En el formulario y al principio, di siempre la palabra **años**.' },
          { kind: 'compare', title: 'Edad u origen · Age or origin', columns: [
            { tone: 'blue', label: 'TENER · edad', sentence: 'Paula [[tiene treinta años|blue]].', idea: 'Cuántos años tiene: la edad.', en: 'Paula is thirty.' },
            { tone: 'orange', label: 'SER · origen', sentence: 'Paula [[es de Argentina|orange]].', idea: 'De dónde es: identidad (clase 011).', en: 'Paula is from Argentina.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Paula ___ treinta años.', options: ['tiene', 'está', 'es'], answer: 0, why: 'Edad: tener + años.', en: 'Paula is thirty.' },
            { prompt: 'Paula ___ de Argentina.', options: ['tiene', 'está', 'es'], answer: 2, why: 'Origen: ser de (clase 011).', en: 'Paula is from Argentina.' },
            { prompt: 'Preguntas la edad a un amigo:', options: ['¿Cuántos años eres?', '¿Cuántos años tienes?', '¿Cuántos años estás?'], answer: 1, why: 'La pregunta de la edad usa tener: ¿cuántos años tienes?', en: 'You ask a friend his age:' },
            { prompt: 'Mi abuela ___ setenta años.', options: ['son', 'tiene', 'es'], answer: 1, why: 'Mi abuela (ella) + edad: tiene.', en: 'My grandma is seventy.' },
          ] },
        ] },
        { title: 'Tengo frío, estoy cansada · Nouns and adjectives', mascot: '/brand/mascot/seated.webp', coach: '¿Nombre o adjetivo? Noun or adjective?', blocks: [
          { kind: 'concept', tone: 'teal', label: 'TENER + sensación', question: '¿Qué sientes?', en: 'What do you feel?', formula: ['tener + hambre · sed · sueño · frío · calor', 'tener + mucho / mucha + sensación'],
            meaning: 'Hambre (hunger), sed (thirst), sueño (sleepiness), frío (cold) y calor (heat) son **nombres** (nouns). Por eso van con **tener**: «tengo hambre» = I am hungry. Para decir «very»: **mucho** o **mucha**, nunca «muy».',
            examples: [
              { es: '[[Tengo mucha sed|teal]]. ¿Hay agua?', en: 'I am very thirsty. Is there any water?' },
              { es: 'Leo [[tiene calor|teal]].', en: 'Leo is hot.' },
              { es: '[[Tenemos mucho sueño|teal]].', en: 'We are very sleepy.' },
              { es: '[[Tengo hambre|teal]]: la cafetería está en el primer piso.', en: 'I am hungry: the cafeteria is on the first floor.' },
            ],
            note: 'Hambre y sed son femeninos: **mucha** hambre, **mucha** sed. Frío, calor y sueño son masculinos: **mucho** frío, **mucho** calor, **mucho** sueño.' },
          { kind: 'compare', title: 'Tener + nombre o estar + adjetivo · Noun or adjective', columns: [
            { tone: 'teal', label: 'TENER + nombre', sentence: '[[Tengo sueño|teal]].', idea: 'Sueño es un nombre: una sensación que «tienes».', en: 'I am sleepy.' },
            { tone: 'orange', label: 'ESTAR + adjetivo', sentence: '[[Estoy cansada|orange]].', idea: 'Cansada es un adjetivo (-o / -a): un estado (clase 012).', en: 'I am tired.' },
          ] },
          { kind: 'table', title: 'Tres pares mínimos · Three minimal pairs', head: ['TENER', 'SER / ESTAR', 'La diferencia'], rows: [
            ['[[Tengo treinta años|blue]].', '[[Soy de Argentina|orange]].', 'edad / origen (age / origin)'],
            ['[[Tengo frío|teal]].', '[[Estoy cansado|orange]].', 'nombre / adjetivo (noun / adjective)'],
            ['Leo [[tiene calor|teal]].', 'Leo [[está nervioso|orange]].', 'sensación / estado (feeling / state)'],
          ] },
          { kind: 'decide', title: 'Tu frase en inglés dice «I am…». Responde', steps: [
            { q: '¿Es la edad, un número + años? (age)', yes: 'Usa **tener**: «Tengo treinta años».', no: 'next' },
            { q: '¿Es hambre, sed, sueño, frío o calor? (a noun)', yes: 'Usa **tener**: «Tengo frío», «Tengo mucha sed».', no: 'next' },
            { q: '¿Es un adjetivo con -o / -a, como cansado, nervioso, contento? (an adjective)', yes: 'Usa **estar**: «Estoy cansada».', no: 'Origen, profesión o identidad: usa **ser**: «Soy de Argentina».' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'No hay comida en casa: Leo ___ hambre.', options: ['está', 'tiene', 'es'], answer: 1, why: 'Hambre es un nombre: tener hambre.', en: 'There is no food at home: Leo is hungry.' },
            { prompt: 'Es una semana difícil: Paula ___ cansada.', options: ['está', 'tiene', 'es'], answer: 0, why: 'Cansada es un adjetivo: estar cansada.', en: 'It’s a hard week: Paula is tired.' },
            { prompt: 'Tengo ___ sed.', options: ['muy', 'mucho', 'mucha'], answer: 2, why: 'Sed es femenino: mucha sed.', en: 'I am very thirsty.' },
            { prompt: 'Leo tiene ___ frío.', options: ['muy', 'mucho', 'mucha'], answer: 1, why: 'Frío es masculino: mucho frío.', en: 'Leo is very cold.' },
          ] },
        ] },
        { title: 'Hace frío, tengo frío, está frío · Weather, body or a thing', mascot: '/brand/mascot/walking.webp', coach: '¿El tiempo, tu cuerpo o una cosa? Weather, body or a thing?', blocks: [
          { kind: 'lead', text: 'En la sala de espera, Leo mira por la ventana: **llueve**. En Bogotá muchas veces **hace frío** por la mañana. Para el tiempo (the weather) no usas tener: usas **hace** + frío, calor, sol, viento, o los verbos **llueve** y **nieva**.', en: 'In the waiting room, Leo looks out of the window: it’s raining. In Bogotá it is often cold in the morning. For the weather you don’t use tener: you use “hace” + cold, heat, sun, wind, or the verbs “llueve” (it rains) and “nieva” (it snows).' },
          { kind: 'concept', tone: 'neutral', label: 'El tiempo · The weather', question: '¿Qué tiempo hace?', en: 'What’s the weather like?', formula: ['hace + frío · calor · sol · viento', 'llueve (llover) · nieva (nevar)'],
            meaning: 'Para el tiempo, el verbo no tiene persona: no hay «yo», «tú» ni «Leo». Se dice **hace frío**, **hace calor**, **hace sol**, **hace viento**, y **llueve** (it rains, it’s raining) o **nieva** (it snows). Para decir «very»: **mucho** frío, **mucho** calor, **mucho** viento.',
            examples: [
              { es: 'Hoy **hace frío** en Bogotá.', en: 'It’s cold in Bogotá today.' },
              { es: 'En la costa **hace mucho calor**.', en: 'It’s very hot on the coast.' },
              { es: '**Llueve** mucho en abril.', en: 'It rains a lot in April.' },
              { es: '**Hace sol**, pero **hace viento**.', en: 'It’s sunny, but it’s windy.' },
              { es: 'En la montaña **nieva** en invierno.', en: 'It snows in the mountains in winter.' },
            ],
            note: '**Llueve** y **nieva** solo se usan así, sin persona: «Llueve», «Nieva». No digas «Es lluvia»: di «Llueve».' },
          { kind: 'compare', title: 'Tres frases con «frío» · Three sentences with “frío”', columns: [
            { tone: 'neutral', label: 'HACER · el tiempo', sentence: 'Hoy **hace frío**.', idea: 'El tiempo: el aire de la calle, de la ciudad.', en: 'It’s cold today. (the weather)' },
            { tone: 'teal', label: 'TENER · tu cuerpo', sentence: '[[Tengo frío|teal]].', idea: 'Lo que siente una persona.', en: 'I am cold. (my body feels cold)' },
            { tone: 'orange', label: 'ESTAR + adjetivo · una cosa', sentence: 'El café [[está frío|orange]].', idea: 'La temperatura de una cosa: frío es un adjetivo.', en: 'The coffee is cold. (a thing)' },
          ] },
          { kind: 'tip', icon: '💡', title: '«Frío»: ¿nombre o adjetivo? · Noun or adjective?', text: 'En «hace frío» y «tengo frío», frío es un **nombre**: mucho frío. En «el café está frío», frío es un **adjetivo** y cambia: «La sopa está **fría**». Para lo que siente tu cuerpo, di «Tengo frío», no «Estoy frío».', en: 'In “hace frío” and “tengo frío”, frío is a noun: mucho frío. In “el café está frío”, frío is an adjective and it changes: “La sopa está fría” (the soup is cold). For what your body feels, say “Tengo frío”, not “Estoy frío”.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Mira por la ventana: ___. Necesitas un paraguas.', options: ['tiene lluvia', 'llueve', 'está lluvia'], answer: 1, why: 'El tiempo: llover → llueve, sin persona.', en: 'Look out of the window: it’s raining. You need an umbrella.' },
            { prompt: 'En Bogotá, por la mañana, ___.', options: ['hace frío', 'tiene frío', 'está frío'], answer: 0, why: 'Es el tiempo de la ciudad: hace frío.', en: 'In Bogotá, in the morning, it’s cold.' },
            { prompt: 'Paula: «___. ¿Cierro la ventana?»', options: ['Hago frío', 'Tengo frío', 'Estoy fría'], answer: 1, why: 'Es lo que siente el cuerpo de Paula: tengo frío.', en: 'Paula: “I’m cold. Shall I close the window?”' },
            { prompt: 'La sopa de Leo ___.', options: ['tiene fría', 'hace fría', 'está fría'], answer: 2, why: 'Una cosa (la sopa) + adjetivo: está fría.', en: 'Leo’s soup is cold.' },
            { prompt: 'En la costa siempre hace ___ calor.', options: ['muy', 'mucha', 'mucho'], answer: 2, why: 'Calor es un nombre masculino: mucho calor.', en: 'It’s always very hot on the coast.' },
            { prompt: 'Hoy ___ y viento: es un buen día para caminar.', options: ['es sol', 'hace sol', 'tiene sol'], answer: 1, why: 'El tiempo: hace sol, hace viento.', en: 'Today it’s sunny and windy: it’s a good day for a walk.' },
            { prompt: 'En enero ___ en la montaña: todo está blanco.', options: ['nieva', 'hace nieve', 'tiene nieve'], answer: 0, why: 'El tiempo: nevar → nieva, sin persona.', en: 'In January it snows in the mountains: everything is white.' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: '¿Tener, ser o estar? Look closely.', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la frase con el error y preguntas: «¿Edad, sensación o estado?». Tu alumno responde y después aparece la corrección.', self: 'Lee cada frase, busca el error y toca para ver la corrección.' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Soy treinta años.', right: 'Tengo treinta años.', why: 'La edad va con tener + años, no con ser. (Age: tener.)' },
            { wrong: 'Leo es seis años.', right: 'Leo tiene seis años.', why: 'Leo (él) + edad: tiene. (He is six = tiene seis años.)' },
            { wrong: '¿Cuántos años eres?', right: '¿Cuántos años tienes?', why: 'La pregunta de la edad también usa tener.' },
            { wrong: 'Estoy frío.', right: 'Tengo frío.', why: 'Para la sensación del cuerpo: tener frío. (I am cold = tengo frío.)' },
            { wrong: 'Tengo cansada.', right: 'Estoy cansada.', why: 'Cansada es un adjetivo: va con estar. (Adjective → estar.)' },
            { wrong: 'Tengo mucho hambre.', right: 'Tengo mucha hambre.', why: 'Hambre es femenino: mucha. Lo mismo con sed: mucha sed.' },
            { wrong: 'Tengo muy frío.', right: 'Tengo mucho frío.', why: 'Frío es un nombre: mucho. «Muy» va con adjetivos: muy cansado.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Cuál es correcta?', options: ['Soy treinta años.', 'Tengo treinta años.', 'Estoy treinta años.'], answer: 1, why: 'Edad: tener + número + años.', en: 'Which one is correct?' },
            { prompt: '¿Cuál es correcta?', options: ['Tengo cansado.', 'Estoy frío.', 'Tengo frío y estoy cansado.'], answer: 2, why: 'Frío (nombre) con tener; cansado (adjetivo) con estar.', en: 'Which one is correct?' },
            { prompt: '¿Cuál es correcta?', options: ['Tengo mucho hambre.', 'Tengo muy hambre.', 'Tengo mucha hambre.'], answer: 2, why: 'Hambre es femenino: mucha hambre.', en: 'Which one is correct?' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno dice tres frases reales: su edad, una sensación de hoy y un estado. Tú repites cada frase bien y tu alumno la repite.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'El formulario de Paula', coach: 'Toca las palabras marcadas. Tap the marked words.',
      steps: [
        { title: 'En la recepción · At reception', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Carmen, la recepcionista. Después, tu alumno toca cada palabra marcada y dice si es edad, sensación, cosa o contraste.', self: 'Lee el diálogo en voz alta. Después toca cada palabra marcada para ver por qué se usa.' } },
          { kind: 'explore', title: 'Su nombre, por favor', setting: 'Martes, 9:50. Clínica San Rafael, Bogotá. Carmen, la recepcionista, completa el formulario con Paula. Leo está con ella. (Carmen, the receptionist, fills in the form with Paula.)', lines: [
            { who: 'Carmen', text: 'Buenos días. ¿Su nombre, por favor?', en: 'Good morning. Your name, please?' },
            { who: 'Paula', text: 'Paula Medina. [[Tengo una cita|violet]] a las diez con la doctora Ruiz.', en: 'Paula Medina. I have an appointment at ten with Dr Ruiz.' },
            { who: 'Carmen', text: 'Muy bien. Aquí está el formulario. ¿[[Cuántos años tiene|blue]] usted?', en: 'Very good. Here is the form. How old are you?' },
            { who: 'Paula', text: '[[Tengo treinta años|blue]]. [[Soy de Argentina|orange]], pero vivo aquí, en Bogotá.', en: 'I am thirty. I am from Argentina, but I live here, in Bogotá.' },
            { who: 'Carmen', text: '¿Y el niño? ¿Es su hijo?', en: 'And the boy? Is he your son?' },
            { who: 'Paula', text: 'Sí, es Leo. [[Tiene seis años|blue]].', en: 'Yes, this is Leo. He is six.' },
            { who: 'Carmen', text: 'Ahora, los síntomas. ¿Cómo está hoy?', en: 'Now, the symptoms. How are you today?' },
            { who: 'Paula', text: '[[Tengo frío|teal]] y [[tengo sueño|teal]]. Y [[estoy cansada|orange]].', en: 'I am cold and I am sleepy. And I am tired.' },
            { who: 'Carmen', text: '¿Y Leo? ¿También tiene frío?', en: 'And Leo? Is he cold too?' },
            { who: 'Paula', text: 'No, él [[tiene calor|teal]]. Y [[tiene mucha sed|teal]].', en: 'No, he is hot. And he is very thirsty.' },
            { who: 'Carmen', text: 'Hay agua cerca de la ventana. ¿[[Tiene su documento|violet]], por favor?', en: 'There is water near the window. Do you have your ID, please?' },
            { who: 'Paula', text: 'Sí, aquí está. Y [[tengo una pregunta|violet]]: ¿dónde está el baño?', en: 'Yes, here it is. And I have a question: where is the bathroom?' },
          ], notes: {
            'Tengo una cita': '**Tener + cosa**: una cita (appointment) es algo que Paula tiene. Yo: tengo.',
            'Cuántos años tiene': 'La pregunta de la edad: **¿Cuántos años tiene?** Carmen habla con usted: tiene. Con tú: ¿cuántos años tienes?',
            'Tengo treinta años': '**Tener + número + años**: la edad. Nunca «soy treinta años».',
            'Soy de Argentina': 'El origen es identidad: **ser de** (clase 011). Edad con tener, origen con ser.',
            'Tiene seis años': 'Leo (él): **tiene** seis años. La forma de él / ella.',
            'Tengo frío': 'Frío es un nombre: **tener frío** = to be cold.',
            'tengo sueño': '**Tener sueño** = to be sleepy. Sueño es un nombre.',
            'estoy cansada': 'Cansada es un adjetivo (con -a: Paula es mujer): **estar** + adjetivo (clase 012). Nunca «tengo cansada».',
            'tiene calor': 'Leo **tiene calor** = he is hot. Lo contrario de tener frío.',
            'tiene mucha sed': 'Sed es femenino: **mucha** sed = very thirsty.',
            'Tiene su documento': '**Tener + cosa** con usted: ¿tiene su documento? (your ID).',
            'tengo una pregunta': '**Tener una pregunta** = to have a question. Otra vez tener + cosa.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Cuántos años tiene Paula?', options: ['Treinta.', 'Cuarenta y cinco.', 'Seis.'], answer: 0, why: '«Tengo treinta años».', en: 'How old is Paula?' },
            { prompt: '¿Qué síntomas tiene Leo?', options: ['Frío y sueño.', 'Mucha hambre.', 'Calor y mucha sed.'], answer: 2, why: '«Él tiene calor. Y tiene mucha sed».', en: 'What symptoms does Leo have?' },
            { prompt: 'Al final, ¿qué tiene Paula?', options: ['Mucha hambre.', 'Dos citas.', 'Una pregunta: dónde está el baño.'], answer: 2, why: '«Tengo una pregunta: ¿dónde está el baño?».', en: 'At the end, what does Paula have?' },
          ] },
        ] },
        { title: 'Con la doctora · With the doctor', mascot: '/brand/mascot/portrait.webp', coach: 'Nada grave. Nothing serious.', blocks: [
          { kind: 'explore', title: '¿Qué tiene hoy?', setting: 'Diez minutos después, en la consulta de la doctora Ruiz. (Ten minutes later, in Dr Ruiz’s office.)', lines: [
            { who: 'Doctora Ruiz', text: 'Buenos días, Paula. ¿Qué [[tiene|teal]] hoy?', en: 'Good morning, Paula. What’s wrong today?' },
            { who: 'Paula', text: '[[Tengo dolor de cabeza|teal]] y [[mucho frío|teal]].', en: 'I have a headache and I am very cold.' },
            { who: 'Doctora Ruiz', text: 'Y [[está cansada|orange]], ¿verdad?', en: 'And you are tired, right?' },
            { who: 'Paula', text: 'Sí, muy cansada. Es una semana difícil.', en: 'Yes, very tired. It’s a hard week.' },
            { who: 'Doctora Ruiz', text: 'Hola, Leo. Y tú, ¿[[tienes hambre|teal]]?', en: 'Hi, Leo. And you, are you hungry?' },
            { who: 'Leo', text: '¡Sí! [[Tengo mucha hambre|teal]]. Y [[tengo un dinosaurio|violet]].', en: 'Yes! I am very hungry. And I have a dinosaur.' },
            { who: 'Doctora Ruiz', text: '¡Qué bonito! Paula, no es nada grave: mucha agua y a dormir temprano.', en: 'How nice! Paula, it’s nothing serious: lots of water and early to bed.' },
          ], notes: {
            'tiene': '«¿Qué tiene?» en la consulta = ¿qué síntomas tiene? (What’s wrong?). La doctora habla con usted: tiene.',
            'Tengo dolor de cabeza': '**Tener dolor de cabeza** = to have a headache. Dolor es un nombre: va con tener.',
            'mucho frío': 'Frío es masculino: **mucho** frío = very cold.',
            'está cansada': 'La doctora habla con usted: **está** cansada. Cansada es un adjetivo: estar.',
            'tienes hambre': 'Con un niño, la doctora usa **tú**: ¿tienes hambre? Con Paula usa usted: ¿tiene?',
            'Tengo mucha hambre': 'Hambre es femenino: **mucha** hambre = very hungry.',
            'tengo un dinosaurio': '**Tener + cosa**: un dinosaurio de juguete (a toy dinosaur).',
          } },
          { kind: 'classify', title: '¿Tener, ser o estar? · Which verb?', categories: [
            { id: 'tener', label: 'TENER · edad, sensación, cosa', tone: 'teal' },
            { id: 'ser', label: 'SER · origen, profesión', tone: 'orange' },
            { id: 'estar', label: 'ESTAR · adjetivo, lugar', tone: 'neutral' },
          ], items: [
            { text: 'Paula … treinta años.', answer: 'tener', why: 'Edad: tiene treinta años.' },
            { text: 'Paula … de Argentina.', answer: 'ser', why: 'Origen: es de Argentina.' },
            { text: 'Paula … cansada.', answer: 'estar', why: 'Adjetivo, estado: está cansada.' },
            { text: 'Leo … mucha sed.', answer: 'tener', why: 'Sed es un nombre: tiene sed.' },
            { text: 'Paula … una cita a las diez.', answer: 'tener', why: 'Una cosa: tiene una cita.' },
            { text: 'Leo … en la sala de espera.', answer: 'estar', why: 'Un lugar: está en la sala de espera.' },
            { text: 'Carmen … recepcionista.', answer: 'ser', why: 'Profesión: es recepcionista.' },
            { text: 'Leo … nervioso.', answer: 'estar', why: 'Adjetivo, estado de hoy: está nervioso.' },
          ] },
          { kind: 'teacher', text: 'Pregunta útil: «¿Por qué Paula tiene frío pero está cansada?». Respuesta esperada: frío es un nombre, cansada es un adjetivo.' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: '¿Edad, sensación o estado? Age, feeling or state?',
      steps: [
        { title: 'Elige el verbo · Choose the verb', blocks: [
          { kind: 'choice', items: [
            { context: 'En la sala de espera. (In the waiting room.)', prompt: 'La doctora Ruiz ___ cuarenta y cinco años.', options: ['tiene', 'es', 'está'], answer: 0, why: 'Edad: tener + años. La doctora (ella): tiene.', en: 'Dr Ruiz is forty-five.' },
            { context: 'Leo no quiere la chaqueta. (Leo doesn’t want his jacket.)', prompt: 'Leo ___ calor.', options: ['está', 'es', 'tiene'], answer: 2, why: 'Calor es un nombre: tener calor.', en: 'Leo is hot.' },
            { context: 'Son las doce. (It’s twelve o’clock.)', prompt: 'Paula y Leo ___ hambre.', options: ['tienen', 'están', 'tenemos'], answer: 0, why: 'Paula y Leo = ellos: tienen. «Tenemos» es para nosotros.', en: 'Paula and Leo are hungry.' },
            { context: 'Una semana difícil. (A hard week.)', prompt: 'Paula ___ muy cansada.', options: ['está', 'tiene', 'es'], answer: 0, why: 'Cansada es un adjetivo: estar. «Muy» va con adjetivos.', en: 'Paula is very tired.' },
            { context: 'Carmen habla con Óscar, su compañero. (Carmen talks to her colleague.)', prompt: '¿___ sed? Hay agua aquí.', options: ['Tienes', 'Tiene', 'Tengo'], answer: 0, why: 'Carmen habla con Óscar con tú: tienes.', en: 'Are you thirsty? There is water here.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'fix', items: [
            { sentence: 'El enfermero Julián tiene veinticinco años.', ok: true, why: 'Correcta: tener + número + años.' },
            { sentence: 'Yo soy treinta y dos años.', ok: false, options: ['Yo tiene treinta y dos años.', 'Yo estoy treinta y dos años.', 'Yo tengo treinta y dos años.'], answer: 2, why: 'Edad con tener; yo: tengo.' },
            { sentence: 'Leo tiene mucho sed.', ok: false, options: ['Leo es mucha sed.', 'Leo tiene mucha sed.', 'Leo está mucha sed.'], answer: 1, why: 'Sed es femenino: mucha sed. Y la sensación va con tener.' },
            { sentence: 'Mi madre tiene cansada.', ok: false, options: ['Mi madre tienen cansada.', 'Mi madre está cansada.', 'Mi madre es cansada.'], answer: 1, why: 'Cansada es un adjetivo y un estado de hoy: estar.' },
            { sentence: 'Estoy sueño.', ok: false, options: ['Soy sueño.', 'Tengo sueño.', 'Tiene sueño.'], answer: 1, why: 'Sueño es un nombre: tengo sueño. «Tiene» es para él / ella.' },
          ] },
        ] },
        { title: 'Con el enfermero · With the nurse', blocks: [
          { kind: 'chat-fill', title: 'Julián, el enfermero, habla con Leo y Paula', lines: [
            { who: 'Julián', text: 'Hola, Leo. ¿Cuántos años ___?', options: ['eres', 'tienes', 'tiene'], answer: 1, why: 'Julián habla con Leo (tú) de la edad: tienes.' },
            { who: 'Leo', text: '___ seis años.', options: ['Soy', 'Estoy', 'Tengo'], answer: 2, why: 'Edad, yo: tengo.' },
            { who: 'Julián', text: '¡Muy bien! ¿___ frío o calor?', options: ['Estás', 'Eres', 'Tienes'], answer: 2, why: 'Frío y calor son nombres: tienes.' },
            { who: 'Leo', text: 'Calor. Y ___ mucha sed.', options: ['tengo', 'soy', 'estoy'], answer: 0, why: 'Sed es un nombre: tengo sed.' },
            { who: 'Julián', text: 'Aquí hay agua. ¿Y usted, señora? ¿Cómo está?' },
            { who: 'Paula', text: 'Bien, gracias. ___ un poco cansada, nada más.', options: ['Estoy', 'Tengo', 'Soy'], answer: 0, why: 'Cansada es un adjetivo: estoy cansada.' },
            { who: 'Julián', text: 'Perfecto. La doctora viene ahora.' },
          ] },
        ] },
        { title: '¿Mucho o mucha? · Which one?', mascot: '/autoestudio/mascot/noting.webp', blocks: [
          { kind: 'classify', title: 'Para decir «very» con tener', categories: [
            { id: 'mucho', label: 'MUCHO · nombre masculino', tone: 'teal' },
            { id: 'mucha', label: 'MUCHA · nombre femenino', tone: 'orange' },
          ], items: [
            { text: 'Tengo … frío.', answer: 'mucho', why: 'El frío: masculino → mucho frío.' },
            { text: 'Leo tiene … sed.', answer: 'mucha', why: 'La sed: femenino → mucha sed.' },
            { text: 'Tenemos … calor.', answer: 'mucho', why: 'El calor: masculino → mucho calor.' },
            { text: 'Paula tiene … sueño.', answer: 'mucho', why: 'El sueño: masculino → mucho sueño.' },
            { text: 'Los niños tienen … hambre.', answer: 'mucha', why: 'Hambre es femenino → mucha hambre.' },
            { text: 'Tengo … dolor de cabeza.', answer: 'mucho', why: 'El dolor: masculino → mucho dolor.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['años', 'Tengo', 'treinta', 'y', 'dos'], accept: ['Tengo treinta y dos años'], en: 'I am thirty-two.' },
            { tiles: ['sed', 'tiene', 'Leo', 'mucha'], accept: ['Leo tiene mucha sed'], en: 'Leo is very thirsty.' },
            { tiles: ['cansada', 'Estoy', 'y', 'frío', 'tengo'], accept: ['Estoy cansada y tengo frío', 'Tengo frío y estoy cansada'], en: 'I am tired and I am cold.' },
          ] },
        ] },
        { title: 'Escríbelo en español · Write it in Spanish', blocks: [
          { kind: 'rewrite', items: [
            { prompt: 'I am 30 years old.', instruction: 'Escribe la frase en español.', accept: ['Tengo treinta años', 'Tengo 30 años', 'Yo tengo treinta años', 'Yo tengo 30 años'] },
            { prompt: 'Leo is very hungry.', instruction: 'Escribe la frase en español.', accept: ['Leo tiene mucha hambre'] },
            { prompt: 'Are you cold? (tú)', instruction: 'Escribe la pregunta en español.', accept: ['¿Tienes frío?', '¿Tú tienes frío?', '¿Tienes frío tú?'] },
          ] },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'El anuncio de la sala de espera', coach: 'Primero escucha sin leer. Listen first, read later.',
      steps: [
        { title: 'Bienvenidos a la clínica · Welcome to the clinic', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general. Segunda escucha: tu alumno levanta la mano cada vez que oye «tiene» o «tienen». Después, las preguntas.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Cuenta cuántas veces oyes «tiene» o «tienen».' } },
          { kind: 'listen', title: 'El anuncio de bienvenida', channel: 'ANUNCIO · SALA DE ESPERA, CLÍNICA SAN RAFAEL', src: '/audio/grammar-live/314.mp3',
            before: 'Paula y Leo esperan en la sala de espera. En la pantalla hay un anuncio de la clínica. ¿Qué crees que dice? (Paula and Leo are in the waiting room. A clinic announcement plays. What do you think it says?)',
            gist: { prompt: '¿Qué es este audio? · What is this audio?', options: ['Un mensaje de voz de Paula.', 'El anuncio de bienvenida de la clínica.', 'Una llamada de la doctora Ruiz.'], answer: 1, why: '«Bienvenidos a la Clínica San Rafael…»: un anuncio para los pacientes.', en: 'What is this audio?' },
            details: [
              { prompt: '¿Quién tiene prioridad?', options: ['Las personas con una cita a las diez.', 'Las personas de más de sesenta y cinco años.', 'Los niños de seis años.'], answer: 1, why: '«¿Usted tiene más de sesenta y cinco años? Entonces tiene prioridad».', en: 'Who has priority?' },
              { prompt: '¿Dónde esperan los niños de menos de doce años?', options: ['En la sala azul, con sus padres.', 'En la recepción.', 'En la cafetería.'], answer: 0, why: '«Los niños que tienen menos de doce años esperan en la sala azul, con sus padres».', en: 'Where do children under twelve wait?' },
              { prompt: '¿Qué hay para las personas que tienen frío?', options: ['Agua.', 'Café.', 'Mantas (blankets), al lado de la puerta.'], answer: 2, why: '«¿Tiene frío? Hay mantas al lado de la puerta».', en: 'What is there for people who are cold?' },
              { prompt: '¿Dónde está la cafetería?', options: ['Cerca de la ventana.', 'En la sala azul.', 'En el primer piso.'], answer: 2, why: '«¿Tiene hambre? La cafetería está en el primer piso».', en: 'Where is the cafeteria?' },
              { prompt: '¿Quién tiene todas las respuestas?', options: ['Carmen y Óscar, en la recepción.', 'Los padres.', 'La doctora Ruiz.'], answer: 0, why: '«Carmen y Óscar, en la recepción, tienen todas las respuestas».', en: 'Who has all the answers?' },
            ],
            transcript: 'Bienvenidos a la Clínica San Rafael. En la recepción hay un formulario para cada paciente: nombre, edad y síntomas. ¿Usted [[tiene más de sesenta y cinco años|blue]]? Entonces [[tiene prioridad|violet]]. Los niños que [[tienen menos de doce años|blue]] esperan en la sala azul, con sus padres. ¿[[Tiene frío|teal]]? Hay mantas al lado de la puerta. ¿[[Tiene sed|teal]]? El agua está cerca de la ventana y es gratis. ¿[[Tiene hambre|teal]]? La cafetería está en el primer piso. Y una cosa más: ¿[[tiene una pregunta|violet]]? Carmen y Óscar, en la recepción, [[tienen todas las respuestas|violet]]. Gracias y feliz día.',
            reply: { teacher: 'Tú eres Carmen, en la recepción. Tu alumno llega a la clínica y dice tres cosas: su edad, una sensación (frío, sed, hambre…) y una pregunta con «¿Tiene…?».', self: 'Imagina que llegas a la recepción. Di en voz alta tu edad, una sensación y una pregunta: «Tengo… años. Tengo sed. ¿Tiene agua?». (Say your age, a feeling and a question.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'En la recepción', coach: 'Responde con tener. Answer with tener.',
      steps: [
        { title: 'Tu formulario, en voz alta · Your form, out loud', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas como Carmen, la recepcionista. Tu alumno responde con frases completas. Tú repites su frase bien dicha y sigues con una repregunta.', self: 'Lee la pregunta, responde en voz alta con frases completas y, si quieres, escribe tu respuesta. (Read the question and answer aloud in full sentences.)' } },
          { kind: 'talk', cards: [
            { q: '¿Cuántos años tienes? · How old are you?', followUps: ['¿Y tu mejor amigo o amiga? (your best friend?)', '¿Cuántos años tiene tu madre o tu padre? (your mum or dad?)'], phrases: ['[[Tengo|blue]] … años.', 'Mi amiga [[tiene|blue]] … años.', 'Mi padre [[tiene|blue]] … años.'], hint: 'Tener + número + años. Nunca «soy … años».', example: 'Tengo treinta y cuatro años. Mi amiga Laura tiene treinta y dos años. Mi madre tiene sesenta y dos años.', next: 'Ahora, edad y origen juntos.' },
            { q: '¿De dónde eres y cuántos años tienes? · Where are you from and how old are you?', followUps: ['¿Tienes hermanos? (brothers or sisters?)', '¿Cuántos años tienen? (how old are they?)'], phrases: ['[[Soy de|orange]] …', '[[Tengo|blue]] … años.', 'Mi hermano [[tiene|blue]] … años.'], hint: 'Origen con ser; edad con tener.', example: 'Soy de Canadá, de Toronto. Tengo veintiocho años. Tengo un hermano: tiene veinticinco años.', next: 'Ahora, cómo te sientes.' },
            { q: '¿Cómo estás hoy? ¿Tienes frío o calor? · How are you today? Cold or hot?', followUps: ['¿Tienes sueño? (sleepy?)', '¿Estás cansado o cansada? (tired?)'], phrases: ['[[Tengo|teal]] frío. / [[Tengo|teal]] calor.', '[[Tengo|teal]] un poco de sueño.', '[[Estoy|orange]] cansado. / [[Estoy|orange]] cansada.'], hint: 'Frío, calor, sueño: tener. Cansado, contento: estar.', example: 'Estoy bien, pero un poco cansada. Tengo frío: hoy es un día gris.', next: 'Ahora, hambre y sed.' },
            { q: '¿Tienes hambre o sed ahora? · Are you hungry or thirsty now?', followUps: ['¿Mucha o un poco? (very or a little?)', '¿Qué hay en tu cocina? (what is in your kitchen?)'], phrases: ['[[Tengo mucha hambre|teal]].', '[[Tengo un poco de sed|teal]].', 'No [[tengo hambre|teal]].'], hint: 'Mucha hambre, mucha sed: los dos son femeninos.', example: 'Tengo mucha sed, pero no tengo hambre. En mi cocina hay agua y fruta.', next: 'Ahora, tus cosas.' },
            { q: '¿Qué tienes en tu bolso o en tu mochila? · What do you have in your bag?', followUps: ['¿Tienes tu documento? (your ID?)', '¿Tienes una cita esta semana? (an appointment this week?)'], phrases: ['[[Tengo|violet]] mi teléfono, …', '[[Tengo una cita|violet]] el lunes.', 'No [[tengo|violet]] …'], hint: 'Tener + cosa: tengo un libro, tengo mis llaves.', example: 'En mi mochila tengo mi teléfono, mis llaves y un libro. Tengo una cita con el dentista el jueves.', next: 'Para terminar, la recepción completa.' },
            { q: 'En la recepción de la clínica: tú eres el paciente. · At the clinic reception: you are the patient.', followUps: ['¿Cuántos años tiene usted? (how old are you?)', '¿Qué síntomas tiene hoy? (your symptoms today?)', '¿Tiene su documento? (your ID?)'], phrases: ['[[Tengo una cita|violet]] a las …', '[[Tengo|blue]] … años. [[Soy de|orange]] …', '[[Tengo|teal]] frío. [[Estoy|orange]] cansado / cansada.'], hint: 'Nombre, cita, edad, origen y síntomas: como Paula.', example: 'Buenos días. Soy Sam Taylor. Tengo una cita a las once. Tengo cuarenta años y soy de Irlanda. Tengo frío y estoy un poco cansado.', teacher: 'Tú eres Carmen y preguntas con usted: «¿Cuántos años tiene?», «¿Tiene frío?». Tu alumno responde con yo: tengo, soy, estoy.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno es Carmen y te hace las preguntas con usted («¿Cuántos años tiene?», «¿Tiene sed?»).', self: 'Ahora tú eres Carmen: haz las preguntas en voz alta con usted («¿Cuántos años tiene?», «¿Tiene frío?») y responde como el paciente. (Now you are the receptionist.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Un mensaje para la doctora', coach: 'Corto y claro. Short and clear.',
      steps: [
        { title: 'Comentarios para la doctora · Comments for the doctor', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos tener + años, tener + sensación y estar + adjetivo. Después, tu alumno lee su mensaje en voz alta.', self: 'Escribe tu mensaje y toca «Revisar mi texto». Mira bien tener, ser y estar. (Write your message and tap “Revisar mi texto”.)' } },
          { kind: 'write', title: 'El formulario en línea · The online form', situation: 'Mañana tienes una cita en la Clínica San Rafael. En el formulario en línea hay un espacio: «Comentarios para la doctora Ruiz». Escribe un mensaje corto para la doctora. (Tomorrow you have an appointment at the clinic. The online form has a box: “Comments for Dr Ruiz”. Write her a short message.)', task: [
            'Saluda y di tu nombre y de dónde eres con **ser**. (Greet her; say your name and where you are from.)',
            'Di tu edad con **tener + años**. (Say your age.)',
            'Di dos sensaciones con **tener**: frío, calor, sueño, hambre, sed. (Two feelings.)',
            'Di un estado con **estar**: cansado/a, nervioso/a. (One state.)',
            'Di algo que tienes: una pregunta, un documento… (Something you have.)',
          ], starters: ['Buenos días, doctora Ruiz.', 'Soy … Soy de …', 'Tengo … años.', 'Estos días tengo …', 'Estoy un poco …', 'Tengo una pregunta: …', 'Gracias. Hasta mañana.'],
            words: ['tengo', 'años', 'frío', 'calor', 'sueño', 'hambre', 'sed', 'mucho / mucha', 'un poco de', 'dolor de cabeza (headache)', 'estoy', 'cansado / cansada', 'soy de', 'una pregunta'],
            model: 'Buenos días, doctora Ruiz. [[Soy de|orange]] Irlanda y me llamo Sam Taylor. [[Tengo cuarenta años|blue]]. Estos días [[tengo mucho frío|teal]] y por la tarde [[tengo sueño|teal]]. [[Estoy|orange]] un poco cansado. [[Tengo una pregunta|violet]]: ¿el café es malo para el sueño? Gracias. Hasta mañana.',
            minWords: 30,
            checks: [
              { label: 'Tu edad: tener + años (age)', pattern: '(?<!\\p{L})tengo\\s+(?:\\d+|\\p{L}+(?:\\s+y\\s+\\p{L}+)?)\\s+años(?!\\p{L})', tip: 'Di tu edad: «Tengo cuarenta años», «Tengo 25 años».' },
              { label: 'Una sensación con tener (frío, sed, sueño…)', pattern: '(?<!\\p{L})tengo\\s+(?:mucho\\s+|mucha\\s+|un\\s+poco\\s+de\\s+)?(?:hambre|sed|sueño|fr[ií]o|calor|dolor)(?!\\p{L})', tip: 'Di qué sientes: «Tengo frío», «Tengo mucha sed».' },
              { label: 'Tu origen con ser (soy de…)', pattern: '(?<!\\p{L})soy\\s+de(?!\\p{L})', tip: 'Di de dónde eres: «Soy de Irlanda».' },
              { label: 'Un estado con estar (estoy…)', pattern: '(?<!\\p{L})estoy(?!\\p{L})', tip: 'Di cómo estás: «Estoy un poco cansado».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})(?:soy|estoy|es|está)\\s+(?:\\d+|\\p{L}+(?:\\s+y\\s+\\p{L}+)?)\\s+años(?!\\p{L})', why: 'La edad va con tener: «tengo treinta años», no «soy treinta años».' },
              { pattern: '(?<!\\p{L})(?:estoy|soy)\\s+(?:muy\\s+)?(?:hambre|sed|sueño|fr[ií]o|calor)(?!\\p{L})', why: 'Para la sensación del cuerpo, usa tener: «tengo frío», «tengo sueño».' },
              { pattern: '(?<!\\p{L})tengo\\s+(?:muy\\s+|un\\s+poco\\s+)?(?:cansad|nervios|enferm|content)[oa]s?(?!\\p{L})', why: 'Cansado, nervioso, enfermo y contento son adjetivos: van con estar («estoy cansado»).' },
              { pattern: '(?<!\\p{L})(?:mucho\\s+(?:hambre|sed)|mucha\\s+(?:fr[ií]o|calor|sueño))(?!\\p{L})', why: 'Mucha hambre, mucha sed; mucho frío, mucho calor, mucho sueño.' },
              { pattern: '(?<!\\p{L})muy\\s+(?:hambre|sed|sueño|fr[ií]o|calor)(?!\\p{L})', why: 'Con un nombre se usa mucho / mucha: «tengo mucho frío», no «muy frío».' },
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
            { tone: 'blue', label: 'TENER + años', formula: 'tener + número + años', example: 'Tengo treinta años. ¿Cuántos años tienes?', caption: 'la edad', en: 'age: I am thirty. How old are you?' },
            { tone: 'teal', label: 'TENER + sensación', formula: 'tener + (mucho / mucha) + hambre · sed · sueño · frío · calor', example: 'Tengo mucha sed. Leo tiene calor.', caption: 'qué siente el cuerpo', en: 'how your body feels: I am very thirsty. Leo is hot.' },
            { tone: 'violet', label: 'TENER + cosa', formula: 'tener + una cita · un documento · una pregunta', example: 'Tengo una cita a las diez.', caption: 'posesión', en: 'to have something: I have an appointment at ten.' },
            { tone: 'orange', label: 'SER de · ESTAR + adjetivo', formula: 'soy de + lugar · estoy + cansado/a', example: 'Soy de Argentina. Estoy cansada.', caption: 'origen · estado', en: 'origin and state: I am from Argentina. I am tired.' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Si en inglés dices «I am 30» o «I am cold / hungry / thirsty / sleepy», en español dices **tengo**. Si es un adjetivo con -o / -a (cansado, nerviosa), usa **estar**. Y para decir «very» con un nombre: **mucho / mucha**, no «muy».', en: 'If in English you say “I am 30” or “I am cold / hungry / thirsty / sleepy”, in Spanish you say “tengo”. If it is an adjective ending in -o / -a (tired, nervous), use estar. And for “very” with a noun: mucho / mucha, not “muy”.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'Mi hijo ___ ocho años.', options: ['tiene', 'está', 'es'], answer: 0, why: 'Edad: tener + años.', en: 'My son is eight.' },
            { prompt: '___ de Colombia, pero vivo en Madrid.', options: ['Soy', 'Tengo', 'Estoy'], answer: 0, why: 'Origen: soy de.', en: 'I am from Colombia, but I live in Madrid.' },
            { prompt: 'Abre la ventana, por favor: ___ mucho calor.', options: ['estoy', 'soy', 'tengo'], answer: 2, why: 'Calor es un nombre: tengo calor.', en: 'Open the window, please: I am very hot.' },
            { prompt: 'Los niños tienen ___ hambre.', options: ['mucha', 'mucho', 'muy'], answer: 0, why: 'Hambre es femenino: mucha hambre.', en: 'The children are very hungry.' },
            { prompt: 'Hoy mi padre ___ muy cansado.', options: ['es', 'tiene', 'está'], answer: 2, why: 'Cansado es un adjetivo, un estado de hoy: está.', en: 'Today my father is very tired.' },
          ] },
        ] },
        { title: 'Otra situación · A new situation', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'lead', text: 'Ahora no estás en la clínica: estás en un gimnasio nuevo y completas tu ficha (registration form). La regla es la misma.', en: 'Now you are not at the clinic: you are at a new gym, filling in your registration form. The rule is the same.' },
          { kind: 'rewrite', title: 'La ficha del gimnasio · The gym form', items: [
            { prompt: 'I am 25 years old and I am from Chile.', instruction: 'Escribe la frase en español.', accept: ['Tengo 25 años y soy de Chile', 'Tengo veinticinco años y soy de Chile', 'Soy de Chile y tengo 25 años', 'Soy de Chile y tengo veinticinco años', 'Yo tengo veinticinco años y soy de Chile', 'Yo tengo 25 años y soy de Chile'] },
            { prompt: 'We are very hot.', instruction: 'Escribe la frase en español.', accept: ['Tenemos mucho calor', 'Nosotros tenemos mucho calor', 'Nosotras tenemos mucho calor'] },
            { prompt: 'My brother is tired and sleepy.', instruction: 'Escribe la frase en español. (brother = hermano)', accept: ['Mi hermano está cansado y tiene sueño', 'Mi hermano tiene sueño y está cansado'] },
          ] },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 015 · Concordancia dentro del grupo nominal', text: 'Hoy usaste **mucha** hambre y **mucho** frío: la palabra cambia con el nombre. En la clase 015 ves esta regla en todo el grupo nominal: artículo, nombre y adjetivo juntos, en género y número («las manos frías», «un niño cansado»).', en: 'Today you used “mucha hambre” and “mucho frío”: the word changes with the noun. In class 015 you see this rule across the whole noun phrase: article, noun and adjective together, in gender and number (“las manos frías”, “un niño cansado”).', href: '/grupos-de-palabras-con-sentido', label: 'Ir a la clase 015' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Cuántos años tienes, de dónde eres y cómo estás hoy?». Respuesta esperada con tener + años, ser de, y tener o estar según la palabra. Tarea: completar en español un formulario real (gimnasio, biblioteca, médico).' },
        ] },
      ],
    },
  ],
};
