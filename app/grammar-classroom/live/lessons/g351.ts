import type { LiveLesson } from '../types';

/**
 * Lesson 351 · A2 · Perfecto e indefinido: variación regional (course unit G051).
 * One scene runs through the class: six in the evening in the staff room of a
 * language school in Madrid. Lucía, a teacher from Puebla (Mexico), and Pablo,
 * a teacher from Madrid, tell each other what they did today. Both talked to
 * Ana, the coordinator: Pablo says «Hoy he hablado con Ana», Lucía says «Hoy
 * hablé con Ana». In the voice message Pablo (Spanish voice) tells Lucía what he
 * has done after class, with the perfecto for today and the indefinido for
 * yesterday. Content: both forms as legitimate varieties for a time that
 * includes now (hoy, esta mañana, este año): perfecto dominant in most of
 * Spain; indefinido common in most of Latin America and in Canarias and parts
 * of NW Spain; extended compound uses in some Andean areas (RAE-ASALE, NGLE;
 * DPD). With ayer and finished times, the indefinido is the general norm
 * («ayer he comido» is described as outside the norm, never as wrong in every variety). Mistake to diagnose: labelling
 * «Hoy comí» as an error. Real errors: *he comí, *ayer he comido, *hable.
 * Instructions use tú; no vosotros or vos forms.
 */
export const lesson: LiveLesson = {
  id: 351,
  level: 'A2',
  title: 'Perfecto e indefinido: variación regional',
  subtitle: 'Contar qué hiciste hoy con «he hablado» o «hablé», reconocer las dos variedades y usar el indefinido con ayer.',
  legend: [
    { tone: 'blue', label: 'PERFECTO · he hablado (para hoy: frecuente en la mayor parte de España)' },
    { tone: 'orange', label: 'INDEFINIDO · hablé (para hoy: frecuente en México y gran parte de América; con ayer: la norma general)' },
    { tone: 'teal', label: 'MARCO DE TIEMPO · hoy, esta mañana, ayer (time frame)' },
  ],
  optionNotes: {
    'he hablé': 'No se mezclan las dos formas: o **he hablado** (haber + participio) o **hablé** (indefinido).',
    'he desayuné': 'No se mezclan las dos formas: o **he desayunado** o **desayuné**.',
    'hable': 'Sin tilde es otra forma verbal. El pasado de yo lleva tilde: **hablé**.',
    'desayune': 'Sin tilde es otra forma verbal. El pasado de yo lleva tilde: **desayuné**.',
    'ha hecho': 'Con un tiempo terminado (el lunes pasado, ayer), la norma general es el indefinido: **hizo**.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Hoy he hablado, hoy hablé', coach: 'Dos formas, el mismo día. Two forms, the same day.',
      steps: [
        { title: 'En la sala de profesores · In the staff room', blocks: [
          { kind: 'lead', text: 'Son las seis de la tarde en una escuela de idiomas de Madrid. Lucía es profesora y es de Puebla, en México. Pablo es profesor y es de Madrid. Los dos cuentan su día. Pablo dice: «Hoy **he hablado** con Ana». Lucía dice: «Hoy **hablé** con Ana». ¿Quién lo dice bien? Los dos.', en: 'It is six in the evening at a language school in Madrid. Lucía is a teacher from Puebla, in Mexico. Pablo is a teacher from Madrid. They both talk about their day. Pablo says: “I’ve talked to Ana today”. Lucía says: “I talked to Ana today”. Who is right? Both of them.' },
          { kind: 'guide', text: { teacher: 'Tú lees la frase de Pablo y tu alumno lee la frase de Lucía. Después tu alumno dice qué es igual y qué es diferente.', self: 'Lee las dos frases en voz alta. ¿Qué es igual? ¿Qué es diferente? (What is the same? What is different?)' } },
          { kind: 'compare', title: 'Dos profesores, el mismo día · Two teachers, the same day', columns: [
            { tone: 'blue', label: 'PABLO · Madrid', sentence: '[[Hoy|teal]] [[he hablado|blue]] con Ana.', idea: 'Perfecto: haber + participio. Muy frecuente en España para hoy.', en: 'I’ve talked to Ana today.' },
            { tone: 'orange', label: 'LUCÍA · Puebla', sentence: '[[Hoy|teal]] [[hablé|orange]] con Ana.', idea: 'Indefinido. Muy frecuente en México para hoy.', en: 'I talked to Ana today.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué frase es correcta?', options: ['Las dos.', 'Solo la frase de Pablo.', 'Solo la frase de Lucía.'], answer: 0, why: 'Las dos son español correcto. Cambia la variedad, no la corrección.', en: 'Which sentence is correct?' },
            { prompt: '«He hablado» es…', options: ['el pretérito perfecto: haber + participio', 'el indefinido', 'el presente'], answer: 0, why: 'He (haber) + hablado (participio): pretérito perfecto, como en la clase 045.', en: '“He hablado” is…' },
            { prompt: '¿Por qué Lucía dice «hoy hablé»?', options: ['Porque en México es la forma más frecuente para hoy.', 'Porque no conoce el perfecto.', 'Porque habla de ayer.'], answer: 0, why: 'Es su variedad: en México y en gran parte de América, el indefinido es lo más común también para hoy.', en: 'Why does Lucía say “hoy hablé”?' },
          ] },
        ] },
        { title: 'Las dos formas · The two forms', mascot: '/brand/mascot/studying.webp', coach: 'Ya las conoces. You already know them.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'PRETÉRITO PERFECTO', question: '¿Qué has hecho hoy?', en: 'What have you done today?', formula: ['he · has · ha · hemos · han + participio', 'hablar → hablado · comer → comido · hacer → hecho'],
            meaning: 'Una acción terminada **dentro de un tiempo que incluye ahora**: hoy, esta mañana, esta semana, este año. En la mayor parte de España es la forma más común para contar el día.',
            examples: [
              { es: 'Esta mañana [[he tenido|blue]] tres clases.', en: 'I’ve had three classes this morning.' },
              { es: 'Pablo [[ha comido|blue]] con sus alumnos.', en: 'Pablo has had lunch with his students.' },
              { es: '¿[[Has visto|blue]] a Ana hoy?', en: 'Have you seen Ana today?' },
            ] },
          { kind: 'concept', tone: 'orange', label: 'PRETÉRITO INDEFINIDO', question: '¿Qué hiciste hoy?', en: 'What did you do today?', formula: ['hablé · hablaste · habló · hablamos · hablaron', 'comí · comiste · comió · comimos · comieron'],
            meaning: 'Una acción terminada y cerrada. En México y en gran parte de América se usa **también para hoy**. Y es la forma normal para **ayer**, anoche, el lunes pasado.',
            examples: [
              { es: 'Esta mañana [[tuve|orange]] tres clases.', en: 'This morning I had three classes.' },
              { es: 'Lucía [[comió|orange]] con Ana a mediodía.', en: 'Lucía had lunch with Ana at noon.' },
              { es: '¿[[Viste|orange]] a Ana hoy?', en: 'Did you see Ana today?' },
            ],
            note: 'El mismo hecho, dos formas: «he tenido» y «tuve» cuentan la misma mañana.' },
          { kind: 'table', title: 'Tres pares mínimos · Three minimal pairs', head: ['PABLO · España (perfecto)', 'LUCÍA · México (indefinido)', 'English'], rows: [
            ['Hoy [[he hablado|blue]] con Ana.', 'Hoy [[hablé|orange]] con Ana.', 'I talked to Ana today.'],
            ['Esta mañana [[he desayunado|blue]] en casa.', 'Esta mañana [[desayuné|orange]] en casa.', 'I had breakfast at home this morning.'],
            ['¿Ya [[has comido|blue]]?', '¿Ya [[comiste|orange]]?', 'Have you eaten yet?'],
          ], note: 'Las dos columnas son correctas. La diferencia es de **variedad** y de frecuencia, no de gramática.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Esta mañana desayuné en casa». ¿Cuándo pasó?', options: ['Ayer.', 'Todas las mañanas.', 'Hoy, por la mañana.'], answer: 2, why: '«Esta mañana» es hoy. El indefinido no cambia el momento.', en: '“Esta mañana desayuné en casa”. When did it happen?' },
            { prompt: 'Pablo pregunta a Lucía si ya comió. ¿Qué dice Pablo, de Madrid, normalmente?', options: ['¿Ya has comido?', '¿Ya has comiste?', '¿Ya comes?'], answer: 0, why: 'En Madrid lo más frecuente es el perfecto: has + comido.', en: 'Pablo asks Lucía if she has eaten. What does Pablo, from Madrid, usually say?' },
          ] },
        ] },
        { title: '¿Hoy o ayer? El marco del tiempo · Today or yesterday?', mascot: '/brand/mascot/standing.webp', coach: 'Con ayer, todos igual. With yesterday, everyone agrees.', blocks: [
          { kind: 'table', title: '¿Qué forma es más frecuente? · Which form is more frequent?', head: ['Tiempo (time)', 'Frecuente en España', 'Frecuente en México y gran parte de América'], rows: [
            ['[[hoy|teal]], [[esta mañana|teal]], esta semana, este año (incluye ahora · includes now)', 'Hoy [[he comido|blue]] con Ana.', 'Hoy [[comí|orange]] con Ana.'],
            ['[[ayer|teal]], anoche, el lunes pasado, en 2019 (terminado · finished)', 'Ayer [[comí|orange]] con Ana.', 'Ayer [[comí|orange]] con Ana.'],
            ['experiencias hasta ahora (experiences up to now)', '¿[[Has estado|blue]] en Puebla?', '¿[[Has estado|blue]] en Puebla? · ¿Alguna vez [[estuviste|orange]] en Puebla?'],
          ], note: 'Con **ayer** y con un tiempo terminado, la norma general es el indefinido: «Ayer comí». «Ayer he comido» no se usa en la norma.' },
          { kind: 'decide', title: '¿Perfecto o indefinido?', steps: [
            { q: '¿Hablas de un tiempo terminado: ayer, anoche, el lunes pasado, el año pasado? (a finished time)', yes: 'Usa el **indefinido**, la norma general: «Ayer comí con Ana».', no: 'next' },
            { q: '¿Hablas de hoy, esta mañana, esta semana o este año? (a time that includes now)', yes: 'Las dos formas son correctas. Lo más común en la mayor parte de España: «Hoy **he comido** con Ana». Frecuente en México y gran parte de América: «Hoy **comí** con Ana».', no: 'Para experiencias hasta ahora, el perfecto es común en todas partes: «¿Has estado en Puebla?». En gran parte de América también se oye el indefinido: «¿Alguna vez estuviste en Puebla?».' },
          ] },
          { kind: 'tip', icon: '🌎', title: 'No es «España contra América» · Not Spain versus Latin America', text: 'Dentro de España también hay variación: en Canarias y en partes del noroeste (Galicia, Asturias, León), el indefinido es común para hechos recientes. Y en algunas zonas andinas (por ejemplo, en Bolivia, en Perú o en el noroeste de Argentina), el perfecto tiene usos más amplios. Por eso decimos «**frecuente en**», no «siempre».', en: 'There is variation inside Spain too: in the Canary Islands and parts of the north-west (Galicia, Asturias, León), the indefinido is common for recent events. And in some Andean areas (for example, Bolivia, Peru or north-west Argentina), the perfecto has wider uses. That is why we say “frequent in”, not “always”.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Anoche Pablo ___ a casa muy tarde.', options: ['llegó', 'ha llegado', 'ha llegó'], answer: 0, why: '«Anoche» es un tiempo terminado: indefinido, la norma general, también en Madrid.', en: 'Last night Pablo got home very late.' },
            { prompt: 'Lucía, en Puebla, habla de hoy: «Hoy ___ mucho».', options: ['trabajé', 'trabaje', 'he trabajé'], answer: 0, why: 'Para hoy, en México lo frecuente es el indefinido: trabajé, con tilde.', en: 'Lucía, in Puebla, talks about today: “I worked a lot today”.' },
          ] },
        ] },
        { title: '¿Error o variedad? · Mistake or variety?', mascot: '/brand/mascot/speaking.webp', coach: 'Variedad no es error. Variety is not a mistake.', blocks: [
          { kind: 'compare', title: 'Dos cosas muy diferentes · Two very different things', columns: [
            { tone: 'teal', label: 'VARIEDAD · correcto', sentence: 'Hoy [[comí|orange]] con Ana. · Hoy [[he comido|blue]] con Ana.', idea: 'Dos normas cultas del español. Las dos son correctas.', en: 'Two educated standards of Spanish. Both are correct.' },
            { tone: 'neutral', label: 'FUERA DE LA NORMA', sentence: 'Hoy he comí con Ana. · Ayer he comido con Ana.', idea: '«He comí» mezcla las dos formas: no existe. «Ayer he comido» no se usa en la norma: con «ayer», lo normal es «comí».', en: '“He comí” mixes both forms: it does not exist. “Ayer he comido” is not used in standard Spanish: with “ayer”, the normal form is “comí”.' },
          ] },
          { kind: 'guide', text: { teacher: 'Tú lees cada frase y tu alumno decide: ¿variedad o error? Si es un error, tu alumno lo explica.', self: 'Lee cada frase y decide: ¿variedad (correcta) o error? (Is it a variety or a mistake?)' } },
          { kind: 'choice', title: '¿Variedad o error? · Variety or mistake?', items: [
            { prompt: 'Una profesora de Guadalajara (México) dice: «Hoy terminé el libro».', options: ['Variedad: es correcto.', 'Error: tiene que ser «he terminado».'], answer: 0, why: 'Para hoy, el indefinido es lo frecuente en México. No es un error.', en: 'A teacher from Guadalajara, Mexico, says: “Hoy terminé el libro”.' },
            { prompt: 'Un estudiante escribe: «Esta mañana he escribí un correo».', options: ['Variedad: es correcto.', 'Error: mezcla las dos formas.'], answer: 1, why: 'He + escribí no existe. O «he escrito» o «escribí».', en: 'A student writes: “Esta mañana he escribí un correo”.' },
            { prompt: 'Un señor de Valladolid dice: «Este año he viajado poco».', options: ['Error: tiene que ser «viajé».', 'Variedad: es correcto.'], answer: 1, why: '«Este año» incluye ahora: en la mayor parte de España el perfecto es lo normal.', en: 'A man from Valladolid says: “Este año he viajado poco”.' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Respeta la variedad, corrige la forma.', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la frase y tu alumno explica qué falla: ¿la forma, el tiempo o el juicio sobre la variedad? Después aparece la corrección.', self: 'Lee cada frase y piensa qué falla: la forma, el tiempo o el juicio. Toca para ver la corrección. (Form, time or judgement?)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: '«Hoy comí con Ana» está mal: es español de América.', right: '«Hoy comí con Ana» está bien. Es la forma frecuente en México y en gran parte de América.', why: 'Una variedad no es un error. Las dos formas son correctas para hoy. (A regional variety is not a mistake.)' },
            { wrong: 'Ayer he hablado con el director.', right: 'Ayer hablé con el director.', why: 'Con ayer, la norma general es el indefinido; «ayer he hablado» no se usa en la norma. (With “ayer”, standard Spanish uses the indefinido.)' },
            { wrong: 'Hoy he habló con mis alumnos.', right: 'Hoy he hablado con mis alumnos. · Hoy hablé con mis alumnos.', why: 'Después de he va el participio (-ado, -ido). Sin he, el indefinido. (Never mix both forms.)' },
            { wrong: 'Esta mañana hable con Ana.', right: 'Esta mañana hablé con Ana.', why: 'El indefinido de yo lleva tilde: hablé. Sin tilde es otra forma verbal.' },
            { wrong: 'El año pasado he estado en México.', right: 'El año pasado estuve en México.', why: '«El año pasado» ya terminó: indefinido, la norma general. Con «este año», en la mayor parte de España: he estado.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'El lunes pasado yo ___ un examen difícil.', options: ['tuve', 'he tuve', 'he tenido'], answer: 0, why: '«El lunes pasado» terminó: tuve, la norma general.', en: 'Last Monday I had a difficult exam.' },
            { prompt: 'Alguien dice: «Hoy comí tacos». Tú respondes…', options: ['«Error: se dice he comido».', '«Correcto: es otra variedad».'], answer: 1, why: 'Para hoy, «comí» es correcto y muy frecuente en gran parte de América.', en: 'Someone says: “Hoy comí tacos”. You answer…' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno dice tres frases reales sobre hoy con su variedad preferida y una frase sobre ayer con indefinido. Tú repites cada frase con la otra variedad para hoy: «¿Hoy comiste en casa? Ah, ¿hoy has comido en casa?».' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: '¿Qué tal tu día?', coach: 'Toca las palabras marcadas. Tap the marked words.',
      steps: [
        { title: 'Las seis de la tarde · Six in the evening', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Pablo y tu alumno es Lucía. Después tu alumno toca cada palabra marcada y dice si es perfecto o indefinido.', self: 'Lee el diálogo en voz alta. Después toca cada palabra marcada: ¿perfecto o indefinido? (Is it perfecto or indefinido?)' } },
          { kind: 'explore', title: 'Dos maneras de contar el día', setting: 'Seis de la tarde, en la sala de profesores. Lucía es de Puebla (México) y trabaja en Madrid desde septiembre. Pablo es de Madrid. Los dos cuentan qué hicieron hoy. (6 pm in the staff room. Lucía is from Puebla, Mexico, and has worked in Madrid since September. Pablo is from Madrid. They talk about their day.)', lines: [
            { who: 'Pablo', text: '¡Uf, qué día! ¿Qué tal el tuyo, Lucía?', en: 'Phew, what a day! How was yours, Lucía?' },
            { who: 'Lucía', text: 'Bien, pero largo. [[Esta mañana|teal]] [[tuve|orange]] tres clases y a mediodía [[comí|orange]] con Ana.', en: 'Good, but long. This morning I had three classes and at noon I had lunch with Ana.' },
            { who: 'Pablo', text: '¡Qué bien! Yo también [[he hablado|blue]] con Ana [[hoy|teal]]. [[Hemos preparado|blue]] la excursión del viernes.', en: 'Great! I have talked to Ana today too. We have planned Friday’s trip.' },
            { who: 'Lucía', text: 'Oye, Pablo, una pregunta. Tú dices «he hablado» y yo digo «hablé». ¿Yo lo digo mal?', en: 'Hey, Pablo, a question. You say “he hablado” and I say “hablé”. Am I saying it wrong?' },
            { who: 'Pablo', text: '¡No, para nada! Las dos formas son correctas. En Madrid, para [[hoy|teal]], decimos más «[[he hablado|blue]]».', en: 'No, not at all! Both forms are correct. In Madrid, for today, we mostly say “he hablado”.' },
            { who: 'Lucía', text: 'Y en Puebla decimos «hoy [[hablé|orange]]». Mi madre siempre me pregunta: «¿Ya [[comiste|orange]], hija?».', en: 'And in Puebla we say “hoy hablé”. My mother always asks me: “Have you eaten yet, sweetie?”.' },
            { who: 'Pablo', text: '¡Qué bonito! Mi madre dice «¿Ya [[has comido|blue]]?». Es la misma pregunta.', en: 'How lovely! My mother says “¿Ya has comido?”. It is the same question.' },
            { who: 'Lucía', text: '¿Y para ayer? ¿Tú dices «ayer he hablado»?', en: 'And for yesterday? Do you say “ayer he hablado”?' },
            { who: 'Pablo', text: 'No, eso no. Para ayer, yo también digo «hablé». Por ejemplo: [[ayer|teal]] [[fui|orange]] al cine y [[llegué|orange]] tarde a casa.', en: 'No, not that. For yesterday I say “hablé” too. For example: yesterday I went to the cinema and got home late.' },
            { who: 'Lucía', text: 'Entonces, con ayer, los dos decimos lo mismo. ¡Qué fácil!', en: 'So, with yesterday, we both say the same thing. How easy!' },
            { who: 'Pablo', text: 'Exacto. ¿Y esta tarde qué [[has hecho|blue]]? Uy, perdón: ¿qué [[hiciste|orange]]?', en: 'Exactly. And what have you done this afternoon? Oops, sorry: what did you do?' },
            { who: 'Lucía', text: '¡Las dos preguntas están bien! [[Corregí|orange]] exámenes y [[escribí|orange]] a mi familia.', en: 'Both questions are fine! I marked exams and wrote to my family.' },
          ], notes: {
            'Esta mañana': 'Marco de **hoy**: la mañana forma parte de hoy. Por eso Pablo diría «esta mañana he tenido»; Lucía dice «tuve».',
            'tuve': 'Indefinido de tener, yo. Lucía lo usa **para hoy**: es lo frecuente en México.',
            'comí': 'Indefinido de comer, yo, con tilde. Para hoy, Lucía usa el indefinido. En Madrid, Pablo diría «he comido».',
            'he hablado': 'Perfecto: he + hablado. Pablo lo usa para **hoy**: es lo frecuente en España.',
            'hoy': 'El marco de tiempo **incluye ahora**. Con hoy, las dos formas son posibles: depende de la variedad.',
            'Hemos preparado': 'Perfecto, nosotros: hemos + preparado. Pablo y Ana, hoy.',
            'hablé': 'Indefinido de hablar, yo. Lucía lo usa para hoy (variedad mexicana). No es un error.',
            'comiste': 'Indefinido, tú: la pregunta típica en México. «¿Ya comiste?» = «¿Ya has comido?».',
            'has comido': 'Perfecto, tú: la misma pregunta en la variedad de Madrid.',
            'ayer': 'Tiempo **terminado**: con ayer, la norma general es el indefinido. Pablo también dice «fui», no «he ido».',
            'fui': 'Indefinido de ir, yo. Pablo usa el indefinido porque habla de **ayer**.',
            'llegué': 'Indefinido de llegar, yo: lleg**ué**, con u antes de la e y con tilde. Ayer → indefinido.',
            'has hecho': 'Perfecto de hacer, tú: has + **hecho** (participio irregular). Es la pregunta natural de Pablo para esta tarde.',
            'hiciste': 'Indefinido de hacer, tú. Pablo usa la forma de Lucía por amabilidad. Las dos preguntas son correctas.',
            'Corregí': 'Indefinido de corregir, yo. Lucía habla de esta tarde con su variedad.',
            'escribí': 'Indefinido de escribir, yo. Pablo diría «he escrito» (participio irregular).',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Qué pregunta Lucía a Pablo?', options: ['Si «hablé» es un error.', 'Si Ana fue al cine.', 'Si la excursión es el viernes.'], answer: 0, why: '«Tú dices he hablado y yo digo hablé. ¿Yo lo digo mal?».', en: 'What does Lucía ask Pablo?' },
            { prompt: '¿Qué responde Pablo?', options: ['Que Lucía tiene que decir «he hablado».', 'Que las dos formas son correctas.', 'Que en España «hablé» está mal.'], answer: 1, why: '«¡No, para nada! Las dos formas son correctas».', en: 'What does Pablo answer?' },
            { prompt: '¿Qué forma usa Pablo para ayer?', options: ['El presente: voy, llego.', 'El indefinido: fui, llegué.', 'El perfecto: he ido, he llegado.'], answer: 1, why: '«Ayer fui al cine y llegué tarde a casa». Con ayer, indefinido.', en: 'Which form does Pablo use for yesterday?' },
          ] },
        ] },
        { title: '¿Quién lo dice? · Who says it?', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'classify', title: '¿Pablo, Lucía o los dos? · Pablo, Lucía or both?', categories: [
            { id: 'pablo', label: 'PABLO · Madrid (hoy → perfecto, lo más frecuente)', tone: 'blue' },
            { id: 'lucia', label: 'LUCÍA · Puebla (hoy → indefinido, lo más frecuente)', tone: 'orange' },
            { id: 'dos', label: 'LOS DOS · tiempo terminado (indefinido)', tone: 'neutral' },
          ], items: [
            { text: 'Esta tarde he corregido exámenes.', answer: 'pablo', why: 'Esta tarde = hoy, con perfecto: lo más frecuente en Madrid.' },
            { text: 'Hoy hablé con mi madre.', answer: 'lucia', why: 'Hoy con indefinido: lo más frecuente en Puebla.' },
            { text: 'Ayer llegué tarde a casa.', answer: 'dos', why: 'Ayer: indefinido en las dos variedades.' },
            { text: '¿Ya has terminado la clase?', answer: 'pablo', why: 'Ya + perfecto para hoy: muy típico de España.' },
            { text: '¿Ya terminaste la clase?', answer: 'lucia', why: 'Ya + indefinido: la pregunta típica en México.' },
            { text: 'El mes pasado fuimos de excursión.', answer: 'dos', why: '«El mes pasado» terminó: indefinido para los dos.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: «¿Y tú qué has hecho hoy? ¿Qué hiciste hoy?». Tu alumno responde con una de las dos variedades y después dice una frase sobre ayer.' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Hoy: dos opciones. Ayer: una.',
      steps: [
        { title: 'Elige la forma · Choose the form', blocks: [
          { kind: 'choice', items: [
            { context: 'Pablo (Madrid) habla de esta mañana. (Pablo talks about this morning.)', prompt: 'Esta mañana ___ un correo a Ana.', options: ['he escribí', 'he escrito', 'he escribido'], answer: 1, why: 'Pablo usa el perfecto para hoy. El participio de escribir es irregular: escrito.', en: 'I’ve written an email to Ana this morning.' },
            { context: 'Lucía (Puebla) habla de hoy. (Lucía talks about today.)', prompt: 'Hoy ___ mucho con mis alumnos.', options: ['he hablé', 'hablé', 'hable'], answer: 1, why: 'Lucía usa el indefinido para hoy: hablé, con tilde.', en: 'Today I talked a lot with my students.' },
            { context: 'Los dos hablan del lunes pasado. (Both talk about last Monday.)', prompt: 'El lunes pasado Ana ___ un pastel para todos.', options: ['hizo', 'ha hecho', 'hició'], answer: 0, why: 'El lunes pasado terminó: indefinido, la norma general. Hacer, ella: hizo.', en: 'Last Monday Ana made a cake for everyone.' },
            { context: 'Una pregunta de un alumno nuevo. (A question from a new student.)', prompt: '¿Qué frase es correcta para hablar de hoy?', options: ['Las dos: «Hoy he salido temprano» y «Hoy salí temprano».', 'Solo «Hoy he salido temprano».', 'Solo «Hoy salí temprano».'], answer: 0, why: 'Para hoy, las dos son correctas: cambia la variedad.', en: 'Which sentence is correct to talk about today?' },
          ] },
        ] },
        { title: '¿Hoy o terminado? · Today or finished?', blocks: [
          { kind: 'classify', title: 'El marco del tiempo · The time frame', categories: [
            { id: 'abierto', label: 'INCLUYE AHORA · hoy, esta semana, este año (perfecto o indefinido)', tone: 'teal' },
            { id: 'cerrado', label: 'TERMINADO · ayer, anoche, en 2019 (indefinido: la norma general)', tone: 'orange' },
          ], items: [
            { text: 'Esta semana he dado muchas clases.', answer: 'abierto', why: '«Esta semana» todavía no terminó: incluye ahora.' },
            { text: 'La semana pasada tuve muchas clases.', answer: 'cerrado', why: '«La semana pasada» ya terminó.' },
            { text: 'Este año he viajado poco.', answer: 'abierto', why: '«Este año» incluye ahora.' },
            { text: 'En 2019 viajé a Puebla.', answer: 'cerrado', why: '2019 es un año terminado.' },
            { text: 'Esta tarde he visto a Ana en la biblioteca.', answer: 'abierto', why: '«Esta tarde» es parte de hoy.' },
            { text: 'Anoche cené con mis padres.', answer: 'cerrado', why: '«Anoche» terminó: indefinido para los dos.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Ayer he corregido veinte exámenes.', ok: false, options: ['Ayer corrigí veinte exámenes.', 'Ayer corregí veinte exámenes.', 'Ayer he corregí veinte exámenes.'], answer: 1, why: 'Con ayer, el indefinido es la norma general: corregí (con e en yo).' },
            { sentence: 'Hoy comí con Ana en la cafetería.', ok: true, why: 'Correcta: para hoy, el indefinido es frecuente en México y en gran parte de América. Pablo diría «he comido», y también es correcto.' },
            { sentence: 'Esta mañana Pablo ha llegó tarde.', ok: false, options: ['Esta mañana Pablo ha llegado tarde.', 'Esta mañana Pablo ha llegada tarde.', 'Esta mañana Pablo he llegado tarde.'], answer: 0, why: 'Ha + participio: ha llegado. El participio no cambia (-ado), y con Pablo es ha, no he.' },
            { sentence: 'Este año he trabajado en dos escuelas.', ok: true, why: 'Correcta: «este año» incluye ahora y el perfecto es natural, sobre todo en España.' },
            { sentence: '¿Ya terminastes los exámenes?', ok: false, options: ['¿Ya terminaste los exámenes?', '¿Ya has terminaste los exámenes?', '¿Ya has terminados los exámenes?'], answer: 0, why: 'Tú en indefinido: terminaste, sin -s final. O, en la otra variedad, «¿Ya has terminado?».' },
          ] },
        ] },
        { title: 'Al día siguiente · The next day', blocks: [
          { kind: 'chat-fill', title: 'En la cafetería de la escuela · In the school café', lines: [
            { who: 'Pablo', text: '¡Buenos días, Lucía! ¿Ya ___? Hay café.', options: ['ha desayunado', 'has desayunado', 'has desayunaste'], answer: 1, why: 'Tú + haber: has + participio. Pablo usa el perfecto para hoy, como en Madrid.' },
            { who: 'Lucía', text: 'Sí, ya ___ en casa, gracias.', options: ['desayune', 'he desayuné', 'desayuné'], answer: 2, why: 'Lucía usa el indefinido para hoy: desayuné, con tilde.' },
            { who: 'Lucía', text: 'Y hoy ___ a la escuela en autobús, por primera vez.', options: ['fui', 'fuí', 'fue'], answer: 0, why: 'Ir, yo, en indefinido: fui, sin tilde. Lucía usa su variedad para hoy.' },
            { who: 'Lucía', text: 'Oye, ¿a qué hora ___ ayer a casa, después de la clase de las siete?', options: ['has llegado', 'llegastes', 'llegaste'], answer: 2, why: 'Ayer: indefinido, la norma general. Tú: llegaste, sin -s final.' },
            { who: 'Pablo', text: 'Muy tarde: ___ a las diez y media.', options: ['llegé', 'llegué', 'he llegado'], answer: 1, why: 'Pablo habla de ayer: indefinido también en Madrid. Se escribe llegué, con u.' },
            { who: 'Pablo', text: 'Y esta mañana ___ el metro a las siete. ¡Qué sueño!', options: ['he tomado', 'he tomé', 'ha tomado'], answer: 0, why: 'Esta mañana = hoy: Pablo usa el perfecto. Yo: he tomado.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['ha', 'Pablo', 'escrito', 'a', 'los', 'alumnos', 'esta', 'tarde'], accept: ['Pablo ha escrito a los alumnos esta tarde', 'Esta tarde Pablo ha escrito a los alumnos'], en: 'Pablo has written to the students this afternoon.' },
            { tiles: ['hoy', 'Lucía', 'corrigió', 'los', 'exámenes'], accept: ['Lucía corrigió los exámenes hoy', 'Hoy Lucía corrigió los exámenes'], en: 'Lucía marked the exams today.' },
            { tiles: ['¿Ya', 'has', 'terminado', 'los', 'exámenes?'], accept: ['¿Ya has terminado los exámenes?'], en: 'Have you finished the exams yet?' },
            { tiles: ['Ayer', 'cine', 'fuimos', 'al'], accept: ['Ayer fuimos al cine', 'Fuimos al cine ayer'], en: 'Yesterday we went to the cinema.' },
          ] },
        ] },
        { title: 'Cambia de variedad · Switch variety', blocks: [
          { kind: 'rewrite', title: 'Cuenta lo mismo · Say the same thing', items: [
            { prompt: 'Pablo: «Hoy he visto a Ana en la biblioteca».', instruction: 'Escribe la frase como Lucía, con la forma más frecuente en México. Empieza con «Hoy».', accept: ['Hoy vi a Ana en la biblioteca', 'Hoy yo vi a Ana en la biblioteca'] },
            { prompt: 'Lucía: «Esta tarde preparé la clase de mañana».', instruction: 'Escribe la frase como Pablo, con la forma más frecuente en España. Empieza con «Esta tarde».', accept: ['Esta tarde he preparado la clase de mañana', 'Esta tarde yo he preparado la clase de mañana'] },
            { prompt: 'Pablo: «Hoy he salido tarde de la escuela». (→ ayer)', instruction: 'Cuenta lo mismo sobre ayer. Empieza con «Ayer».', accept: ['Ayer salí tarde de la escuela', 'Ayer yo salí tarde de la escuela'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno cuenta su día en tres frases con una variedad y después las repite con la otra. La última frase habla de ayer: es igual en las dos.' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Un audio de Pablo', coach: 'Primero escucha sin leer. Listen first, read later.',
      steps: [
        { title: 'Pablo, después de clase · Pablo, after class', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general. Segunda escucha: tu alumno levanta la mano con cada perfecto (he hablado, he hecho…) y dice «ayer» cuando oye un indefinido. Después, las preguntas.', self: 'Escucha una vez para la idea general y otra vez para los detalles. ¿Qué forma usa Pablo para hoy? ¿Y para ayer? (Listen once for the gist, once for the details.)' } },
          { kind: 'listen', title: 'Un audio de Pablo', channel: 'MENSAJE DE VOZ · DE PABLO PARA LUCÍA', src: '/audio/grammar-live/351.mp3',
            before: 'Son las nueve de la noche. Pablo le manda un audio a Lucía. ¿Qué forma crees que usa para hoy: «he hablado» o «hablé»? ¿Y para ayer? (Pablo sends Lucía a voice message. Which form do you think he uses for today? And for yesterday?)',
            gist: { prompt: '¿Cuál es la idea general? · What is the main idea?', options: ['Pablo no puede ir a la excursión del viernes.', 'Pablo invita a Lucía al cine.', 'Pablo cuenta qué ha hecho para la excursión y pregunta por los exámenes.'], answer: 2, why: 'Habla de la reserva, de los alumnos y pregunta: «¿Has terminado los exámenes?».', en: 'What is the main idea?' },
            details: [
              { prompt: '¿Quién hizo la reserva del museo?', options: ['Ana, ayer.', 'Pablo, hoy, por internet.', 'Lucía, esta mañana.'], answer: 1, why: '«Ayer Ana llamó al museo, pero no pudo… Hoy la he hecho yo por internet».', en: 'Who made the museum booking?' },
              { prompt: '¿Cuántos alumnos han contestado?', options: ['Doce.', 'Siete.', 'Dos.'], answer: 0, why: '«He escrito a los alumnos y ya han contestado doce».', en: 'How many students have answered?' },
              { prompt: '¿Qué olvidó Pablo ayer?', options: ['Su paraguas.', 'Su teléfono.', 'Sus exámenes.'], answer: 0, why: '«Ayer olvidé mi paraguas en la sala de profesores».', en: 'What did Pablo forget yesterday?' },
              { prompt: '¿Qué forma usa Pablo para ayer?', options: ['El perfecto: ha llamado, he olvidado.', 'El indefinido: llamó, olvidé.', 'Las dos, sin diferencia.'], answer: 1, why: 'Para hoy usa el perfecto, pero para ayer usa el indefinido: «Ana llamó», «olvidé».', en: 'Which form does Pablo use for yesterday?' },
            ],
            transcript: 'Hola, Lucía, soy Pablo. Te mando un audio rápido. Después de la clase de las siete [[he hablado|blue]] otra vez con Ana y [[hemos cerrado|blue]] el plan de la excursión del viernes: vamos al museo y después a comer. [[Ayer|teal]] Ana [[llamó|orange]] al museo, pero no [[pudo|orange]] hacer la reserva. [[Hoy|teal]] la [[he hecho|blue]] yo por internet, ¡y ya está! También [[he escrito|blue]] a los alumnos y ya [[han contestado|blue]] doce. Ah, otra cosa: [[ayer|teal]] [[olvidé|orange]] mi paraguas en la sala de profesores y [[hoy|teal]] no lo [[he encontrado|blue]]. ¿Puedes mirar mañana por la mañana? Bueno, ¿y tú? ¿[[Has terminado|blue]] los exámenes? Mañana me cuentas. ¡Un abrazo!',
            reply: { teacher: 'Tú eres Pablo. Tu alumno es Lucía y responde al audio con su variedad: qué hizo hoy (hoy terminé…, hoy corregí…), una frase sobre ayer y una respuesta sobre el paraguas.', self: 'Responde a Pablo en voz alta como Lucía, con su variedad: qué hiciste hoy («Hoy terminé…»), una frase sobre ayer y algo sobre el paraguas. (Answer as Lucía, in her variety.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Tu día, tu variedad', coach: 'Elige una variedad y cuenta. Pick a variety and talk.',
      steps: [
        { title: '¿Qué tal tu día? · How was your day?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas. Tu alumno habla de su día real y elige una variedad para hoy. Tú repites su frase en la otra variedad («Ah, ¿hoy has trabajado mucho?») y sigues con la repregunta.', self: 'Piensa en tu día real. Lee la pregunta, responde en voz alta y, si quieres, escribe tu respuesta. Para hoy, elige una variedad; para ayer, el indefinido. (Answer about your real day.)' } },
          { kind: 'talk', cards: [
            { q: '¿Qué has hecho hoy? / ¿Qué hiciste hoy? · What have you done today?', followUps: ['¿Y esta mañana? (And this morning?)', '¿Qué fue lo mejor del día? (What was the best part of the day?)'], phrases: ['Hoy [[he trabajado|blue]] / Hoy [[trabajé|orange]] en casa.', 'Esta mañana [[he ido|blue]] / [[fui|orange]] al médico.', 'A mediodía [[he comido|blue]] / [[comí|orange]] con…'], hint: 'Para hoy, elige una variedad: he + participio o indefinido. Las dos son correctas.', example: 'Hoy he trabajado en casa. Esta mañana he ido al médico y a mediodía he comido con mi hermana.', next: 'Ahora, las personas de tu día.', teacher: 'Responde tú también con la otra variedad. Así tu alumno oye las dos formas para el mismo día.' },
            { q: '¿Con quién has hablado hoy? / ¿Con quién hablaste hoy? · Who have you talked to today?', followUps: ['¿De qué hablaron? (What did you talk about?)', '¿Le has escrito a alguien? / ¿Le escribiste a alguien? (Have you written to anyone?)'], phrases: ['Hoy [[he hablado|blue]] con…', 'Hoy [[hablé|orange]] con…', '[[He escrito|blue]] / [[Escribí|orange]] a mi familia.'], hint: 'Hablar con + persona. Escribir: participio irregular escrito.', example: 'Hoy hablé con mi jefa y le escribí a mi madre. Hablamos de las vacaciones.', next: 'Ahora, ayer.' },
            { q: '¿Y ayer? ¿Qué hiciste? · And yesterday? What did you do?', followUps: ['¿A qué hora llegaste a casa? (What time did you get home?)', '¿Qué cenaste? (What did you have for dinner?)'], phrases: ['[[Ayer|teal]] [[fui|orange]] a…', 'Anoche [[cené|orange]]…', '[[Llegué|orange]] a casa a las…'], hint: 'Con ayer y anoche, el indefinido: es la norma general. «Ayer he…» no se usa en la norma.', example: 'Ayer fui al supermercado después del trabajo. Llegué a casa a las ocho y cené pasta.', next: 'Ahora, tu variedad.' },
            { q: '¿Qué forma oyes más en tu clase, en tus series o con tus amigos? · Which form do you hear more often?', followUps: ['¿De dónde es tu profesor o tu profesora? (Where is your teacher from?)', '¿Qué variedad quieres usar tú? ¿Por qué? (Which variety do you want to use? Why?)'], phrases: ['Mi profesora dice «hoy [[he comido|blue]]».', 'En las series mexicanas oigo «hoy [[comí|orange]]».', 'Yo prefiero… porque…'], hint: 'Las dos variedades son correctas. Elige una para hoy y úsala con coherencia.', example: 'Mi profesor es de Colombia y dice «hoy comí». En una serie española oigo «hoy he comido». Yo prefiero «hoy comí» porque es más fácil para mí.', next: 'Ahora, un juego de papeles.' },
            { q: 'Tú eres Lucía. Pablo pregunta: «¿Qué has hecho esta tarde?». Responde con la variedad de Lucía. · You are Lucía. Answer in her variety.', followUps: ['¿Y ayer, qué hiciste? (And yesterday?)', '¿Ya terminaste los exámenes? (Have you finished the exams?)'], phrases: ['Esta tarde [[corregí|orange]]…', 'Ya [[terminé|orange]]…', 'Ayer [[escribí|orange]]…'], hint: 'Lucía usa el indefinido para hoy y para ayer.', example: 'Esta tarde corregí los exámenes de A2 y preparé la clase de mañana. Ya terminé casi todo. Ayer escribí a mi familia.', next: 'Ahora, explica la diferencia.', teacher: 'Tú eres Pablo y usas el perfecto: «¿Ya has terminado?». Después, cambian los papeles: tu alumno es Pablo y responde con el perfecto.' },
            { q: 'Un compañero dice: «"Hoy comí" está mal». ¿Qué le respondes? · A classmate says “Hoy comí” is wrong. What do you answer?', followUps: ['¿Y «ayer he comido»? (And “ayer he comido”?)', '¿Qué dicen en Madrid para hoy? (What do they say in Madrid for today?)'], phrases: ['No está mal: es frecuente en México.', 'En España es más frecuente «hoy [[he comido|blue]]».', 'Con ayer, la norma es «[[comí|orange]]».'], hint: 'Explica: variedad, no error. Y con ayer, indefinido para todos.', example: 'No está mal. «Hoy comí» es frecuente en México y en gran parte de América. En España dicen más «hoy he comido». Pero con ayer, la norma general es «ayer comí».', teacher: 'Haz de compañero escéptico: «¿Seguro? En mi libro dice "he comido"». Tu alumno defiende las dos variedades con un ejemplo.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno hace las preguntas («¿Qué has hecho hoy?», «¿Qué hiciste ayer?») y tú respondes con una variedad. Tu alumno dice qué variedad usas.', self: 'Ahora haz tú las preguntas en voz alta y responde dos veces: una como Pablo (perfecto para hoy) y otra como Lucía (indefinido para hoy). (Ask and answer twice, once in each variety.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Un mensaje sobre tu día', coach: 'Una variedad para hoy, el indefinido para ayer.',
      steps: [
        { title: 'Escribe a una amiga · Write to a friend', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos: una variedad para hoy, con coherencia, y el indefinido para ayer. Después, tu alumno lee su mensaje en voz alta.', self: 'Escribe tu mensaje y toca «Revisar mi texto». Mira dos cosas: una sola variedad para hoy y el indefinido con ayer. (Write your message and tap “Revisar mi texto”.)' } },
          { kind: 'write', title: 'Mi día en la escuela · My day at school', situation: 'Eres Lucía (o eres tú, con tu día real). Escribe un mensaje a una amiga de otro país: cuenta qué hiciste hoy, qué hiciste ayer y cuéntale algo sobre las dos formas del pasado. (You are Lucía, or yourself. Write to a friend in another country: tell her what you did today and yesterday, and something about the two past forms.)', task: [
            'Saluda a tu amiga. (Greet your friend.)',
            'Cuenta tres cosas de hoy con UNA variedad: perfecto (he hablado) o indefinido (hablé). (Three things about today, in one variety.)',
            'Cuenta una cosa de ayer con el indefinido. (One thing about yesterday, with the indefinido.)',
            'Explica en una frase que «hoy comí» y «hoy he comido» son correctas. (Explain that both are correct.)',
            'Termina con una pregunta. (End with a question.)',
          ], starters: ['Hola, Carmen:', 'Hoy …', 'Esta mañana …', 'A mediodía …', 'Ayer …', 'Aquí en Madrid dicen …', '¿Y tú qué …?', 'Un abrazo.'],
            words: ['hoy', 'esta mañana', 'esta tarde', 'ayer', 'anoche', 'he hablado', 'hablé', 'he comido', 'comí', 'he escrito', 'escribí', 'fui', 'tuve', 'variedad', 'correcto'],
            model: 'Hola, Carmen: ¿Cómo estás? Mi día fue largo, pero bonito. [[Hoy|teal]] [[tuve|orange]] tres clases y a mediodía [[comí|orange]] con Ana, la coordinadora. Esta tarde [[corregí|orange]] los exámenes y [[preparé|orange]] la excursión del viernes. [[Ayer|teal]] [[salí|orange]] a cenar con mi prima y [[llegué|orange]] tarde a casa. ¿Sabes qué? Aquí en Madrid, mi compañero Pablo dice «hoy he comido» y yo digo «hoy comí». ¡Las dos formas son correctas! Pero con ayer, los dos decimos «comí». ¿Y tú qué hiciste hoy? Un abrazo, Lucía.',
            minWords: 50,
            checks: [
              { label: 'Marco de hoy: hoy, esta mañana… (a time that includes now)', pattern: '(?<!\\p{L})(?:hoy|esta\\s+(?:mañana|tarde|semana)|este\\s+(?:año|mes))(?!\\p{L})', tip: 'Cuenta tu día: «Hoy…», «Esta mañana…».' },
              { label: 'Tiempo terminado: ayer, anoche… (a finished time)', pattern: '(?<!\\p{L})(?:ayer|anoche|el\\s+fin\\s+de\\s+semana\\s+pasado|la\\s+semana\\s+pasada)(?!\\p{L})', tip: 'Añade una frase sobre ayer con el indefinido: «Ayer salí…».' },
              { label: 'Una pregunta (a question)', pattern: '¿[^?]+\\?', tip: 'Termina con una pregunta: «¿Y tú qué hiciste hoy?».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})(?:ayer|anoche)\\s+(?:yo\\s+|no\\s+)?(?:he|has|ha|hemos|han)\\s+\\p{L}+(?:ado|ido|to|cho)(?!\\p{L})', why: 'Con **ayer** y **anoche**, la norma general es el indefinido: «ayer comí». «Ayer he comido» no se usa en la norma.' },
              { pattern: '(?<!\\p{L})(?:he|has|ha|hemos|han)\\s+\\p{L}+(?:é|ó|aste|iste)(?!\\p{L})', why: 'No mezcles las dos formas: **he hablado** o **hablé**, pero no «he hablé».' },
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
            { tone: 'blue', label: 'PERFECTO · para hoy', formula: 'he · has · ha · hemos · han + participio', example: 'Hoy he hablado con Ana.', caption: 'lo más común en la mayor parte de España', en: 'the most common form in most of Spain' },
            { tone: 'orange', label: 'INDEFINIDO · para hoy', formula: 'hablé · comí · fui · tuve…', example: 'Hoy hablé con Ana.', caption: 'frecuente en México, gran parte de América y Canarias', en: 'frequent in Mexico, much of Latin America and the Canary Islands' },
            { tone: 'teal', label: 'TIEMPO TERMINADO', formula: 'ayer · anoche · el lunes pasado + indefinido', example: 'Ayer hablé con Ana.', caption: 'la norma general', en: 'the general standard' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Para **hoy**, las dos formas son correctas: «Hoy **he comido**» es lo más común en la mayor parte de España y «Hoy **comí**», en México y gran parte de América. No es un error: es una variedad. Para **ayer**, la norma general es el indefinido. Y nunca mezclamos: ni «he comí» ni «hable» sin tilde.', en: 'For today, both forms are correct: “Hoy he comido” is the most common form in most of Spain and “Hoy comí” in Mexico and much of Latin America. It is not a mistake: it is a variety. For yesterday, the general standard is the indefinido. And we never mix: no “he comí”, and no “hable” without the accent.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'Anoche mis vecinos ___ una fiesta.', options: ['han hecho', 'han hicieron', 'hicieron'], answer: 2, why: '«Anoche» terminó: indefinido, la norma general.', en: 'Last night my neighbours had a party.' },
            { prompt: 'Una periodista de Ciudad de México: «Hoy ___ con el director del museo».', options: ['he hablé', 'hablé', 'hable'], answer: 1, why: 'Para hoy, en México lo frecuente es el indefinido: hablé, con tilde.', en: 'A journalist from Mexico City: “Today I talked to the museum director”.' },
            { prompt: 'Un camarero de Zaragoza: «Esta semana ___ mucho».', options: ['he trabajado', 'he trabajé', 'ha trabajado'], answer: 0, why: '«Esta semana» incluye ahora; en España lo frecuente es el perfecto: he trabajado.', en: 'A waiter from Zaragoza: “This week I have worked a lot”.' },
            { prompt: '«Hoy salí temprano» es…', options: ['correcto: es frecuente en gran parte de América', 'incorrecto: hay que decir «he salido»', 'correcto solo para ayer'], answer: 0, why: 'Con hoy, el indefinido es una variedad correcta.', en: '“Hoy salí temprano” is…' },
            { prompt: 'El año pasado yo ___ en Puebla.', options: ['he estuve', 'he estado', 'estuve'], answer: 2, why: '«El año pasado» terminó: estuve, la norma general.', en: 'Last year I was in Puebla.' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Cada uno con su variedad.', blocks: [
          { kind: 'lead', text: 'El viernes, después de la excursión, Lucía llama a su madre a Puebla y Pablo llama a su abuela en Valladolid. Escribe sus frases: cada uno usa su variedad para hoy, y los dos usan el indefinido para ayer.', en: 'On Friday, after the trip, Lucía calls her mother in Puebla and Pablo calls his grandmother in Valladolid. Write their sentences: each uses their own variety for today, and both use the indefinido for yesterday.' },
          { kind: 'rewrite', title: 'Dos llamadas · Two phone calls', items: [
            { prompt: '(Lucía · hoy → visitar el museo con los alumnos)', instruction: 'Escribe como Lucía, con yo y la forma más frecuente en México. Empieza con «Hoy».', accept: ['Hoy visité el museo con los alumnos', 'Hoy yo visité el museo con los alumnos'] },
            { prompt: '(Pablo · hoy → comer con los alumnos)', instruction: 'Escribe como Pablo, con yo y la forma más frecuente en España. Empieza con «Hoy».', accept: ['Hoy he comido con los alumnos', 'Hoy yo he comido con los alumnos'] },
            { prompt: '(Pablo · ayer → encontrar el paraguas)', instruction: 'Escribe como Pablo, con yo. Empieza con «Ayer» y escribe «el paraguas».', accept: ['Ayer encontré el paraguas', 'Ayer yo encontré el paraguas'] },
          ] },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 052 · Solía + infinitivo y costumbres antiguas', text: 'Ya cuentas tu día con las dos variedades y sabes que con ayer la norma general es el indefinido. La clase 052, «Solía + infinitivo y costumbres antiguas», es la siguiente del curso: aprendes a hablar de lo que hacías antes con frecuencia: «De niña, solía comer en casa de mi abuela». Todavía no está publicada; mientras tanto, mira el curso en orden.', en: 'You can now tell your day in both varieties, and you know that with “ayer” the general standard is the indefinido. Class 052, “Solía + infinitive and old habits”, comes next in the course: you learn to talk about what you used to do: “As a girl, I used to eat at my grandmother’s”. It is not published yet; in the meantime, see the course in order.', href: '/spanish-grammar-lessons#course', label: 'Ver el curso en orden' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Qué has hecho hoy? ¿Qué hiciste ayer?». Respuesta esperada: dos frases sobre hoy con una sola variedad y una frase sobre ayer con indefinido. Tarea: mandar el mensaje de Escribir a una persona real y preguntarle qué forma usa para hoy.' },
        ] },
      ],
    },
  ],
};
