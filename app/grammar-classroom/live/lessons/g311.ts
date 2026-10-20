import type { LiveLesson } from '../types';

/**
 * Lesson 311 · A1 · Ser para identidad, profesión y procedencia.
 * The full present of SER (soy, eres, es, somos, son; the vos and vosotros forms only in the table) to say who
 * someone is, their job, where they are from (nationality that agrees) and what
 * they are like. Profession goes without un / una unless an adjective follows.
 * The only contrast with estar is «Soy médica / Estoy cansada».
 * Scene: the community podcast «Gente nueva». The host, Marta Ríos, interviews
 * three new members of a conversation group, who introduce each other:
 * Elena (Chilean doctor), Pablo (Colombian music teacher), Ana (Brazilian engineer).
 * Instructions address the learner with tú; the audio is Marta (es-MX).
 */
export const lesson: LiveLesson = {
  id: 311,
  level: 'A1',
  title: 'Ser para identidad, profesión y procedencia',
  subtitle: 'Presentarte y presentar a otras personas: nombre, profesión, origen, nacionalidad y carácter con todas las formas de ser.',
  legend: [
    { tone: 'blue', label: 'SER · identidad y profesión (who / what someone is)' },
    { tone: 'violet', label: 'SER DE · origen y nacionalidad (where someone is from)' },
    { tone: 'orange', label: 'SER · carácter (what someone is like)' },
    { tone: 'teal', label: 'ESTAR · cómo está hoy (only for contrast: a state today)' },
  ],
  optionNotes: {
    Estoy: '«Estoy» es para un estado de hoy (cansada, nerviosa). Nombre, profesión, origen y carácter van con ser.',
    estoy: '«Estoy» es para un estado de hoy (cansada, nerviosa). Nombre, profesión, origen y carácter van con ser.',
    está: '«Está» es para un estado de hoy (cansado, nerviosa). Nombre, profesión, origen y carácter van con ser: «es».',
    están: '«Están» es para un estado de hoy. Nombre, profesión, origen y carácter van con ser: «son».',
    estamos: '«Estamos» es para un estado de hoy. Identidad, profesión u origen van con ser: «somos».',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Quién es, qué es, de dónde es', coach: 'Hoy presentamos a otras personas. Today we introduce other people.',
      steps: [
        { title: 'Gente nueva · New people', blocks: [
          { kind: 'lead', text: 'Marta Ríos presenta **Gente nueva**, el pódcast de un centro cultural. Hoy entrevista a tres personas nuevas del grupo de conversación: Elena, Pablo y Ana. El juego: cada persona **presenta a otra**. Para eso necesitas el verbo **ser**.', en: 'Marta Ríos hosts “Gente nueva”, a cultural centre’s podcast. Today she interviews three new members of the conversation group: Elena, Pablo and Ana. The game: each person introduces someone else. For that you need the verb ser.' },
          { kind: 'guide', text: { teacher: 'Tú lees las tres columnas en voz alta y tu alumno repite. Después, tu alumno dice qué información da cada frase: nombre, profesión, país o carácter.', self: 'Lee las tres columnas en voz alta. Fíjate: cada frase usa «es», pero da una información diferente.' } },
          { kind: 'compare', title: 'Pablo presenta a Elena · Pablo introduces Elena', columns: [
            { tone: 'blue', label: 'Quién es · qué es', sentence: 'Ella [[es Elena|blue]]. [[Es médica|blue]].', idea: 'Nombre y profesión.', en: 'She is Elena. She is a doctor.' },
            { tone: 'violet', label: 'De dónde es', sentence: '[[Es de Chile|violet]]. [[Es chilena|violet]].', idea: 'Origen y nacionalidad.', en: 'She is from Chile. She is Chilean.' },
            { tone: 'orange', label: 'Cómo es', sentence: '[[Es muy tranquila|orange]].', idea: 'Carácter: cómo es siempre.', en: 'She is very calm.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Es médica» dice…', options: ['cómo está hoy.', 'su profesión.', 'su país.'], answer: 1, why: 'Médica es un trabajo: ser + profesión.', en: '“Es médica” tells you…' },
            { prompt: '«Es de Chile» dice…', options: ['cómo es.', 'de dónde es.', 'dónde está ahora.'], answer: 1, why: 'Ser + de + país = origen (where she is from).', en: '“Es de Chile” tells you…' },
            { prompt: 'Para «she is calm» (siempre, su carácter), dices…', options: ['Es tranquila.', 'Soy tranquila.', 'Eres tranquila.'], answer: 0, why: 'Hablas de ella (she): es. Carácter: ser.', en: 'For “she is calm” (her personality), you say…' },
          ] },
        ] },
        { title: 'Ser: todas las personas · All the forms', mascot: '/brand/mascot/studying.webp', coach: 'Seis formas, un verbo. Six forms, one verb.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'SER', question: '¿Quién es? ¿Qué es? ¿De dónde es? ¿Cómo es?', en: 'to be: who, what, where from, what like', formula: ['ser + nombre · profesión', 'ser + de + lugar · nacionalidad', 'ser + adjetivo de carácter'],
            meaning: 'Con **ser** dices la **identidad** de una persona: su nombre, su profesión, su origen y su carácter. Son datos que no cambian de hoy a mañana.',
            examples: [
              { es: '[[Soy Marta Ríos|blue]] y [[soy periodista|blue]].', en: 'I am Marta Ríos and I am a journalist.' },
              { es: 'Mi hermana [[es médica|blue]] y [[es de Chile|violet]].', en: 'My sister is a doctor and she is from Chile.' },
              { es: 'Pablo y yo [[somos colombianos|violet]].', en: 'Pablo and I are Colombian.' },
              { es: 'Ana y Elena [[son muy simpáticas|orange]].', en: 'Ana and Elena are very nice.' },
              { es: '¿Tú [[eres de Medellín|violet]]?', en: 'Are you from Medellín?' },
            ],
            note: 'Ser es **irregular**: las formas no se parecen mucho. Apréndelas como un grupo de seis.' },
          { kind: 'table', title: 'Ser · presente (present)', head: ['Persona', 'ser', 'English', 'Ejemplo'], rows: [
            ['yo', '**soy**', 'I am', 'Soy periodista.'],
            ['tú · vos', '**eres** · sos', 'you are', '¿Eres de Chile?'],
            ['él · ella · usted', '**es**', 'he / she is · you are', 'Ella es ingeniera.'],
            ['nosotros · nosotras', '**somos**', 'we are', 'Somos amigos.'],
            ['vosotros · vosotras', 'sois', 'you are (plural, Spain)', '¿Sois de Madrid?'],
            ['ustedes · ellos · ellas', '**son**', 'you / they are', 'Ellos son brasileños.'],
          ], note: '**Sos** es la forma de **vos** (Argentina, Uruguay…). **Sois** es la forma de **vosotros** (España). Hoy solo las reconoces; tú usas **eres** y **son**.' },
          { kind: 'tip', icon: '💡', title: 'Sin pronombre · No pronoun needed', text: 'Como ya sabes, el verbo dice quién: «**Somos** amigos» = «Nosotros somos amigos». Usa el pronombre para aclarar o contrastar: «**Ella** es chilena y **él** es colombiano».', en: 'As you know, the verb shows who: “Somos amigos” = “Nosotros somos amigos”. Use the pronoun to clarify or contrast: “She is Chilean and he is Colombian”.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Nosotras ___ de Valparaíso.', options: ['somos', 'son', 'es'], answer: 0, why: 'Nosotras = we: somos.', en: 'We are from Valparaíso.' },
            { prompt: '¿Usted ___ el señor Herrera?', options: ['eres', 'soy', 'es'], answer: 2, why: 'Usted va con la forma de él / ella: es.', en: 'Are you Mr Herrera?' },
            { prompt: 'Mis padres ___ profesores.', options: ['somos', 'es', 'son'], answer: 2, why: 'Mis padres = ellos: son.', en: 'My parents are teachers.' },
            { prompt: 'Pablo y su hermano ___ de Medellín.', options: ['somos', 'es', 'son'], answer: 2, why: 'Pablo y su hermano = ellos: son.', en: 'Pablo and his brother are from Medellín.' },
          ] },
        ] },
        { title: 'Profesión y nacionalidad · Job and nationality', mascot: '/brand/mascot/standing.webp', coach: 'Médica, sin «una». Doctor, without “a”.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'PROFESIÓN', question: '¿Qué es? ¿Cuál es su profesión?', en: 'jobs: no “a / an” in Spanish', formula: ['ser + profesión (sin un / una)', 'ser + un / una + profesión + adjetivo'],
            meaning: 'En inglés dices «she is **a** doctor». En español, la profesión sola va **sin artículo**: «Es médica». Si añades un adjetivo, sí usas **un / una**: «Es **una** médica excelente».',
            examples: [
              { es: 'Pablo [[es profesor|blue]].', en: 'Pablo is a teacher.' },
              { es: 'Pablo [[es un profesor muy paciente|blue]].', en: 'Pablo is a very patient teacher.' },
              { es: 'Ana [[es ingeniera|blue]]. Su hermano [[es abogado|blue]].', en: 'Ana is an engineer. Her brother is a lawyer.' },
              { es: '[[Soy estudiante|blue]]. Leo [[es periodista|blue]].', en: 'I am a student. Leo is a journalist.' },
            ],
            note: 'Profesiones con **-o / -a**: médico / médica, ingeniero / ingeniera. Con consonante: profesor / profesor**a**. Con **-ista** o **-e**, una forma: el / la periodista, el / la estudiante.' },
          { kind: 'table', title: 'Nacionalidades · Nationalities', head: ['País', 'él (masculino)', 'ella (femenino)', 'ellos · ellas'], rows: [
            ['Chile', 'chilen**o**', 'chilen**a**', 'chilenos · chilenas'],
            ['Colombia', 'colombian**o**', 'colombian**a**', 'colombianos · colombianas'],
            ['Brasil', 'brasileñ**o**', 'brasileñ**a**', 'brasileños · brasileñas'],
            ['España', 'español', 'español**a**', 'españoles · españolas'],
            ['Alemania', 'alemán', 'aleman**a**', 'alemanes · alemanas'],
            ['Canadá', 'canadiense', 'canadiense', 'canadienses'],
            ['Estados Unidos', 'estadounidense', 'estadounidense', 'estadounidenses'],
          ], note: 'En español, la nacionalidad va en **minúscula**: chilena, no «Chilena». Con **-o** cambia a **-a**; con consonante añade **-a** (alemán → alemana, sin tilde); con **-e** no cambia.' },
          { kind: 'tip', icon: '🌎', title: 'Dos maneras · Two ways', text: '«Elena **es de Chile**» = «Elena **es chilena**». Con **de** usas el país o la ciudad; sin **de**, el adjetivo de nacionalidad, que concuerda con la persona.', en: '“Elena es de Chile” = “Elena es chilena”. With de you use the country or the city; without de, the nationality adjective, which agrees with the person.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Ana ___ ingeniera.', options: ['es una', 'está', 'es'], answer: 2, why: 'Profesión sola, sin adjetivo: sin artículo.', en: 'Ana is an engineer.' },
            { prompt: 'Pablo es ___ profesor muy divertido.', options: ['—', 'el de', 'un'], answer: 2, why: 'Profesión + adjetivo (muy divertido): un.', en: 'Pablo is a very fun teacher.' },
            { prompt: 'Elena es ___.', options: ['chilena', 'chileno', 'Chilena'], answer: 0, why: 'Elena es mujer: chilena, y en minúscula.', en: 'Elena is Chilean.' },
            { prompt: 'Ana y su hermana son ___.', options: ['brasileños', 'brasileñas', 'brasileña'], answer: 1, why: 'Dos mujeres: brasileñas (femenino plural).', en: 'Ana and her sister are Brazilian.' },
          ] },
        ] },
        { title: 'Soy médica / Estoy cansada', mascot: '/brand/mascot/seated.webp', coach: '¿Quién es o cómo está hoy? Who she is, or how she is today?', blocks: [
          { kind: 'lead', text: 'Ya conoces **estoy** de la primera clase. Hoy solo un contraste: **ser** dice quién es una persona; **estar** dice cómo está hoy.', en: 'You know estoy from the first class. Today, just one contrast: ser says who a person is; estar says how they are today.' },
          { kind: 'compare', title: 'Ser o estar · Which one?', columns: [
            { tone: 'blue', label: 'SER · quién es', sentence: 'Elena [[es médica|blue]]. [[Es tranquila|orange]].', idea: 'Profesión y carácter: no cambian mañana.', en: 'Elena is a doctor. She is calm.' },
            { tone: 'teal', label: 'ESTAR · cómo está hoy', sentence: 'Hoy Elena [[está cansada|teal]].', idea: 'Un estado de hoy: mañana, quizás no.', en: 'Today Elena is tired.' },
          ] },
          { kind: 'decide', title: 'Tu frase dice «is / are…». Responde', steps: [
            { q: '¿Dices nombre, profesión, origen, nacionalidad o carácter? (name, job, origin, personality)', yes: 'Usa **ser**: «Soy médica», «Es de Chile», «Son simpáticos».', no: 'next' },
            { q: '¿Dices cómo se siente hoy? (how someone feels today)', yes: 'Usa **estar**: «Estoy cansada», «Ana está nerviosa».', no: 'Pregunta a tu profesor. Hoy trabajamos con ser.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Después de doce horas en el hospital: «___ cansada».', options: ['Estoy', 'Soy'], answer: 0, why: 'Cómo te sientes hoy: estoy.', en: 'After twelve hours at the hospital: “I am tired”.' },
            { prompt: 'Elena presenta su trabajo: «___ médica».', options: ['Estoy', 'Soy'], answer: 1, why: 'Profesión: soy.', en: 'Elena presents her job: “I am a doctor”.' },
            { prompt: 'Pablo habla de Ana: «___ muy simpática».', options: ['Está', 'Es'], answer: 1, why: 'Carácter, cómo es siempre: es.', en: 'Pablo talks about Ana: “She is very nice”.' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Mira bien la forma. Look closely at the form.', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la frase con el error y tu alumno dice dónde está el problema antes de ver la corrección.', self: 'Lee cada frase, busca el error y toca para ver la corrección.' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Estoy de México.', right: 'Soy de México.', why: 'De dónde eres es identidad: ser de. «Estoy» no dice tu origen. (Origin: soy de.)' },
            { wrong: 'Soy una profesora.', right: 'Soy profesora.', why: 'Profesión sola: sin un / una. (No “a” before a bare job.)' },
            { wrong: 'Es médico excelente.', right: 'Es un médico excelente.', why: 'Profesión + adjetivo: con un / una. (With an adjective, add “un / una”.)' },
            { wrong: 'Mi hermana es colombiano.', right: 'Mi hermana es colombiana.', why: 'La nacionalidad concuerda: ella → colombian**a**. (The nationality agrees.)' },
            { wrong: 'Nosotros son de Chile.', right: 'Nosotros somos de Chile.', why: 'Nosotros → somos. «Son» es para ellos o ustedes.' },
            { wrong: 'Soy Chilena.', right: 'Soy chilena.', why: 'La nacionalidad va en minúscula. (Nationalities are not capitalised.)' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué frase es correcta?', options: ['Ella es periodista.', 'Ella es una periodista.', 'Ella está periodista.'], answer: 0, why: 'Profesión sola, sin adjetivo: sin artículo y con ser.', en: 'Which sentence is correct?' },
            { prompt: '¿Qué frase es correcta?', options: ['Pablo y Ana están de Sudamérica.', 'Pablo y Ana somos de Sudamérica.', 'Pablo y Ana son de Sudamérica.'], answer: 2, why: 'Origen con ser, y ellos → son.', en: 'Which sentence is correct?' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno dice tres frases sobre una persona de su familia: profesión, origen y carácter. Tú corriges solo la forma de ser y la concordancia.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'En el estudio de Gente nueva', coach: 'Toca las expresiones marcadas. Tap the marked expressions.',
      steps: [
        { title: 'Presentaciones cruzadas · Cross introductions', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Marta y tu alumno lee a Pablo, Elena y Ana. Después, tu alumno toca cada expresión marcada y dice qué información da.', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada para ver por qué se usa ser (o estar).' } },
          { kind: 'explore', title: 'Gente nueva', setting: 'Un estudio pequeño en el centro cultural. Marta empieza la grabación con sus tres invitados. (A small studio at the cultural centre. Marta starts recording with her three guests.)', lines: [
            { who: 'Marta', text: 'Buenas tardes y bienvenidos a Gente nueva. Hoy [[somos cuatro|blue]] en el estudio.', en: 'Good afternoon and welcome to Gente nueva. Today there are four of us in the studio.' },
            { who: 'Marta', text: 'Las presentaciones son cruzadas. Pablo, ¿quién es ella?', en: 'The introductions are crossed. Pablo, who is she?' },
            { who: 'Pablo', text: 'Ella [[es Elena Rojas|blue]]. [[Es de Valparaíso|violet]]: [[es chilena|violet]]. Y [[es médica|blue]].', en: 'She is Elena Rojas. She is from Valparaíso: she is Chilean. And she is a doctor.' },
            { who: 'Marta', text: '¡Qué interesante! Elena, ahora tú: ¿cómo es Pablo?', en: 'How interesting! Elena, your turn: what is Pablo like?' },
            { who: 'Elena', text: 'Pablo [[es profesor de música|blue]] y [[es colombiano|violet]], de Medellín. [[Es un profesor excelente|blue]] y [[es muy divertido|orange]].', en: 'Pablo is a music teacher and he is Colombian, from Medellín. He is an excellent teacher and he is very funny.' },
            { who: 'Pablo', text: '¡Gracias, Elena! Y ahora Ana. Ana, [[eres de Brasil|violet]], ¿verdad?', en: 'Thanks, Elena! And now Ana. Ana, you are from Brazil, right?' },
            { who: 'Ana', text: 'Sí, [[soy brasileña|violet]], de Recife. [[Soy ingeniera|blue]]. Y hoy [[estoy un poco nerviosa|teal]]: es mi primera entrevista en español.', en: 'Yes, I am Brazilian, from Recife. I am an engineer. And today I am a bit nervous: it is my first interview in Spanish.' },
            { who: 'Marta', text: '¡Tranquila, Ana! Aquí [[somos amigos|blue]]. ¿Cómo son Elena y Pablo?', en: 'Relax, Ana! We are friends here. What are Elena and Pablo like?' },
            { who: 'Ana', text: '[[Son muy simpáticos|orange]]. Elena [[es tranquila|orange]] y Pablo [[es muy hablador|orange]].', en: 'They are very nice. Elena is calm and Pablo is very chatty.' },
            { who: 'Marta', text: '¡Perfecto! Tres personas, tres países y un grupo.', en: 'Perfect! Three people, three countries and one group.' },
          ], notes: {
            'somos cuatro': '**Somos** = nosotros: Marta y sus tres invitados. Ser + número de personas.',
            'es Elena Rojas': 'Ser + nombre: **es** Elena. Pablo habla de ella, por eso «es», no «soy».',
            'Es de Valparaíso': 'Ser **de** + ciudad: el origen de Elena.',
            'es chilena': 'Nacionalidad con ser. Elena es mujer: chilen**a**, en minúscula.',
            'es médica': 'Profesión sola: **sin** un / una. En inglés, «a doctor»; en español, «es médica».',
            'es profesor de música': 'Profesión + «de música»: todavía sin artículo. Dice qué tipo de profesor es.',
            'es colombiano': 'Pablo es hombre: colombian**o**. Con ser, porque es su nacionalidad.',
            'Es un profesor excelente': 'Ahora hay un adjetivo (excelente): por eso **un** profesor.',
            'es muy divertido': 'Carácter: cómo es Pablo siempre. Ser + adjetivo.',
            'eres de Brasil': 'Pablo habla con Ana (tú): **eres** de. Una pregunta sobre su origen.',
            'soy brasileña': 'Ana responde con yo: **soy**. Brasileñ**a**, porque es mujer.',
            'Soy ingeniera': 'Profesión sola, sin artículo: «soy ingeniera».',
            'estoy un poco nerviosa': 'El contraste: **estoy** nerviosa **hoy**. Es un estado, no su carácter.',
            'somos amigos': 'Marta incluye a todos: nosotros **somos**. Amigos es una relación, una identidad.',
            'Son muy simpáticos': 'Ellos (Elena y Pablo): **son**. Simpáticos: masculino plural porque el grupo es mixto.',
            'es tranquila': 'Carácter de Elena: **es** tranquila. Compara con «Ana **está** nerviosa» (hoy).',
            'es muy hablador': 'Carácter: Pablo habla mucho, siempre. Ser + adjetivo.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿De dónde es Elena?', options: ['De Medellín.', 'De Recife.', 'De Valparaíso, en Chile.'], answer: 2, why: '«Es de Valparaíso: es chilena».', en: 'Where is Elena from?' },
            { prompt: '¿Cuál es la profesión de Ana?', options: ['Es médica.', 'Es profesora de música.', 'Es ingeniera.'], answer: 2, why: '«Soy ingeniera».', en: 'What is Ana’s job?' },
            { prompt: '¿Por qué dice Ana «estoy nerviosa» y no «soy nerviosa»?', options: ['Es cómo está hoy, en la entrevista.', 'Es su profesión.', 'Es su nacionalidad.'], answer: 0, why: 'Hoy, en su primera entrevista: un estado, estar.', en: 'Why does Ana say “estoy nerviosa” and not “soy nerviosa”?' },
          ] },
        ] },
        { title: '¿Qué información da? · What information is it?', mascot: '/brand/mascot/studying.webp', blocks: [
          { kind: 'classify', title: 'Clasifica las frases del pódcast · Sort the podcast sentences', categories: [
            { id: 'quien', label: 'Nombre o profesión', tone: 'blue' },
            { id: 'origen', label: 'Origen o nacionalidad', tone: 'violet' },
            { id: 'caracter', label: 'Carácter', tone: 'orange' },
            { id: 'hoy', label: 'Estado de hoy (estar)', tone: 'teal' },
          ], items: [
            { text: 'Pablo es profesor de música.', answer: 'quien', why: 'Su trabajo: ser + profesión.' },
            { text: 'Ana es de Recife.', answer: 'origen', why: 'Ser de + ciudad: origen.' },
            { text: 'Pablo es muy hablador.', answer: 'caracter', why: 'Cómo es siempre: carácter.' },
            { text: 'Ana está un poco nerviosa.', answer: 'hoy', why: 'Hoy, en la entrevista: estar.' },
            { text: 'Ella es Elena Rojas.', answer: 'quien', why: 'Ser + nombre.' },
            { text: 'Pablo es colombiano.', answer: 'origen', why: 'Nacionalidad.' },
            { text: 'Elena es tranquila.', answer: 'caracter', why: 'Su carácter: es tranquila.' },
            { text: 'Ana es ingeniera.', answer: 'quien', why: 'Su profesión, sin artículo.' },
          ] },
          { kind: 'teacher', text: 'Pregunta rápida: «¿Qué frase del diálogo usa estar? ¿Por qué?». La respuesta esperada es «Estoy un poco nerviosa»: es un estado de hoy.' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/kneeling.webp',
      title: 'Practicar', coach: '¿Quién habla y de quién? Who is speaking, and about whom?',
      steps: [
        { title: 'La forma de ser · The right form', blocks: [
          { kind: 'choice', items: [
            { context: 'Elena habla de ella y de su hermana. (Elena talks about herself and her sister.)', prompt: 'Mi hermana y yo ___ médicas.', options: ['estamos', 'somos', 'son'], answer: 1, why: 'Mi hermana y yo = nosotras: somos. Profesión: ser.', en: 'My sister and I are doctors.' },
            { context: 'Ana pregunta a Pablo. (Ana asks Pablo.)', prompt: 'Pablo, ¿tú ___ de Medellín o de Bogotá?', options: ['eres', 'es', 'está'], answer: 0, why: 'Hablas con él (tú): eres de.', en: 'Pablo, are you from Medellín or Bogotá?' },
            { context: 'Ana habla con Marta con respeto. (Ana talks to Marta formally.)', prompt: 'Usted ___ la presentadora, ¿verdad?', options: ['son', 'es', 'eres'], answer: 1, why: 'Usted usa la forma de él / ella: es.', en: 'You are the host, right?' },
            { context: 'Marta habla de Ana y Pablo. (Marta talks about Ana and Pablo.)', prompt: 'Ana y Pablo ___ muy simpáticos.', options: ['somos', 'están', 'son'], answer: 2, why: 'Ellos: son. Carácter: ser.', en: 'Ana and Pablo are very nice.' },
            { context: 'Marta se presenta. (Marta introduces herself.)', prompt: 'Yo ___ periodista y ___ mexicana.', options: ['soy / soy', 'soy / estoy', 'es / es'], answer: 0, why: 'Yo + profesión y nacionalidad: soy, soy.', en: 'I am a journalist and I am Mexican.' },
            { context: 'Pablo presenta a Ana. (Pablo introduces Ana.)', prompt: 'Ella ___ ingeniera.', options: ['es', 'está', 'eres'], answer: 0, why: 'Ella + profesión: es.', en: 'She is an engineer.' },
          ] },
        ] },
        { title: '¿Con un / una o sin artículo? · With or without “a”?', mascot: '/brand/mascot/pointing.webp', blocks: [
          { kind: 'classify', categories: [
            { id: 'sin', label: 'Sin artículo · es médica', tone: 'blue' },
            { id: 'con', label: 'Con un / una · es una médica excelente', tone: 'violet' },
          ], items: [
            { text: 'Ana es ___ ingeniera.', answer: 'sin', why: 'Profesión sola: es ingeniera.' },
            { text: 'Ana es ___ ingeniera muy buena.', answer: 'con', why: 'Profesión + adjetivo: una ingeniera muy buena.' },
            { text: 'Yo soy ___ periodista.', answer: 'sin', why: 'Profesión sola: soy periodista.' },
            { text: 'Pablo es ___ profesor fantástico.', answer: 'con', why: 'Profesión + adjetivo: un profesor fantástico.' },
            { text: '¿Tu hermano es ___ enfermero?', answer: 'sin', why: 'Profesión sola, también en la pregunta: ¿es enfermero?' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Pablo: «Soy en Colombia, de Medellín».', ok: false, options: ['Pablo: «Estoy de Colombia, de Medellín».', 'Pablo: «Es de Colombia, de Medellín».', 'Pablo: «Soy de Colombia, de Medellín».'], answer: 2, why: 'Origen: ser **de**. «Estoy de» no dice el origen, y Pablo habla de él: soy.' },
            { sentence: 'Elena es chileno.', ok: false, options: ['Elena está chilena.', 'Elena es una chileno.', 'Elena es chilena.'], answer: 2, why: 'Elena es mujer: chilena. Nacionalidad con ser.' },
            { sentence: 'Ana: «Soy una ingeniera».', ok: false, options: ['Ana: «Soy de ingeniera».', 'Ana: «Soy ingeniera».', 'Ana: «Estoy ingeniera».'], answer: 1, why: 'Profesión sola: sin artículo.' },
            { sentence: 'Pablo es un profesor muy bueno.', ok: true, why: 'Correcta: profesión + adjetivo (muy bueno), con un.' },
            { sentence: 'Nosotros es amigos del grupo.', ok: false, options: ['Nosotros estamos amigos del grupo.', 'Nosotros somos amigos del grupo.', 'Nosotros son amigos del grupo.'], answer: 1, why: 'Nosotros: somos.' },
            { sentence: 'Hoy Ana está nerviosa, pero es una persona tranquila.', ok: true, why: 'Correcta: estar para hoy (nerviosa), ser para su carácter (tranquila).' },
          ] },
        ] },
        { title: 'Después de la grabación · After the recording', mascot: '/brand/mascot/speaking.webp', blocks: [
          { kind: 'chat-fill', title: 'Un café después del pódcast · A coffee after the podcast', lines: [
            { who: 'Marta', text: 'Elena, ¿tu familia también ___ de Valparaíso?', options: ['es', 'son', 'está'], answer: 0, why: 'Tu familia = ella (singular): es de. Origen.' },
            { who: 'Elena', text: 'Sí. Y mi hermana ___ médica, como yo.', options: ['es una', 'está', 'es'], answer: 2, why: 'Profesión sola: es médica, sin artículo.' },
            { who: 'Marta', text: '¿Y ustedes dos ___ amigas? (Elena y Ana)', options: ['somos', 'es', 'son'], answer: 2, why: 'Ustedes: son.' },
            { who: 'Ana', text: 'Sí, ___ amigas del grupo de conversación.', options: ['estamos', 'somos', 'son'], answer: 1, why: 'Ana habla de ella e Elena: nosotras somos.' },
            { who: 'Marta', text: 'Ana, ¿___ cansada después de la entrevista?', options: ['es', 'estás', 'eres'], answer: 1, why: 'Cómo se siente ahora, después de la entrevista: estado, estás.' },
            { who: 'Ana', text: 'Un poco. ¡Pero el grupo es fantástico!' },
          ] },
        ] },
        { title: 'Construye y escribe · Build and write', mascot: '/autoestudio/mascot/noting.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['brasileña', 'Ana', 'es'], accept: ['Ana es brasileña'], en: 'Ana is Brazilian.' },
            { tiles: ['una', 'Elena', 'es', 'médica', 'excelente'], accept: ['Elena es una médica excelente'], en: 'Elena is an excellent doctor.' },
            { tiles: ['somos', 'de', 'Nosotros', 'Colombia'], accept: ['Nosotros somos de Colombia'], en: 'We are from Colombia.' },
          ] },
          { kind: 'rewrite', title: 'Cambia la persona · Change the person', items: [
            { prompt: 'Pablo es profesor y es colombiano.', instruction: 'Ahora habla de Lucía, la hermana de Pablo. (Now talk about Lucía, Pablo’s sister.)', accept: ['Lucía es profesora y es colombiana', 'Ella es profesora y es colombiana', 'Es profesora y es colombiana'] },
            { prompt: 'Soy ingeniera y soy de Brasil.', instruction: 'Ana habla de ella y de su hermano: usa «nosotros». (Ana talks about herself and her brother: use nosotros.)', accept: ['Somos ingenieros y somos de Brasil', 'Nosotros somos ingenieros y somos de Brasil'] },
            { prompt: 'I am a nurse. I am from Spain.', instruction: 'Escribe en español. Eres una mujer. (nurse = enfermera)', accept: ['Soy enfermera. Soy de España', 'Yo soy enfermera. Soy de España', 'Soy enfermera y soy de España', 'Yo soy enfermera y soy de España', 'Soy enfermera. Soy española', 'Soy enfermera y soy española', 'Yo soy enfermera. Soy española'] },
          ] },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'El principio del pódcast', coach: 'Primero escucha sin leer. Listen first, read later.',
      steps: [
        { title: 'Marta abre el programa · Marta opens the show', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general. Segunda escucha: tu alumno levanta la mano cada vez que oye una forma de ser (soy, es, eres…). Después, las preguntas.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Cuenta las formas de ser que oyes. (Listen once for the gist, once for the details.)' } },
          { kind: 'listen', title: 'Gente nueva · el principio', channel: 'PÓDCAST · GENTE NUEVA · CENTRO CULTURAL', src: '/audio/grammar-live/311.mp3',
            before: 'Marta empieza el pódcast y presenta a los invitados. ¿Qué datos crees que da de cada persona? (Marta starts the podcast and introduces the guests. What information do you think she gives about each person?)',
            gist: { prompt: '¿Qué es este audio? · What is this audio?', options: ['Una clase de música.', 'El principio de un pódcast.', 'Un mensaje de voz de Ana.'], answer: 1, why: '«Bienvenidos a Gente nueva, el pódcast del centro cultural».', en: 'What is this audio?' },
            details: [
              { prompt: '¿Cuál es la profesión de Elena?', options: ['Profesora de música.', 'Médica.', 'Ingeniera.'], answer: 1, why: '«Elena Rojas es médica y es de Chile».', en: 'What is Elena’s job?' },
              { prompt: '¿De dónde es Pablo?', options: ['De Recife, en Brasil.', 'De Medellín, en Colombia.', 'De Valparaíso, en Chile.'], answer: 1, why: '«Pablo Herrera… es colombiano, de Medellín».', en: 'Where is Pablo from?' },
              { prompt: '¿Cómo está Ana hoy?', options: ['Muy tranquila.', 'Un poco nerviosa.', 'Muy cansada.'], answer: 1, why: '«Hoy Ana está un poco nerviosa».', en: 'How is Ana feeling today?' },
              { prompt: '¿Quién presenta a Ana?', options: ['Elena.', 'Marta.', 'Pablo.'], answer: 2, why: '«Pablo presenta a Ana».', en: 'Who introduces Ana?' },
            ],
            transcript: 'Hola, buenas tardes, y bienvenidos a Gente nueva, el pódcast del centro cultural. [[Soy|blue]] Marta Ríos. Hoy, en el estudio, tres personas nuevas del grupo de conversación. Elena Rojas [[es médica|blue]] y [[es de Chile|violet]], de Valparaíso: una persona muy tranquila. Pablo Herrera, profesor de música, [[es colombiano|violet]], de Medellín. Y Ana Costa [[es ingeniera|blue]]; [[es brasileña|violet]], de Recife. Hoy Ana [[está|teal]] un poco nerviosa: es su primera entrevista en español. Hoy, presentaciones cruzadas: Elena presenta a Pablo, Pablo presenta a Ana y Ana presenta a Elena. ¿Y tú? ¿Quién [[eres|blue]]? ¡Empezamos!',
            reply: { teacher: 'Tú eres Marta y preguntas: «¿Y tú? ¿Quién eres?». Tu alumno responde con tres frases: nombre, profesión y origen. Después presenta a otra persona con «es».', self: 'Responde a Marta en voz alta: «Soy… Soy… (profesión). Soy de…». Después presenta a una persona de tu familia con «es». (Answer Marta aloud, then introduce someone with “es”.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Tu entrevista en Gente nueva', coach: 'Ahora el invitado eres tú. Now you are the guest.',
      steps: [
        { title: 'Eres el invitado · You are the guest', blocks: [
          { kind: 'guide', text: { teacher: 'Tú eres Marta y haces las preguntas de cada tarjeta. Tu alumno responde con frases completas con ser. Tú repites su frase con la forma correcta y sigues con la repregunta.', self: 'Imagina que Marta te entrevista. Lee la pregunta, responde en voz alta con frases completas y después lee el ejemplo. (Read the question, answer aloud, then compare with the example.)' } },
          { kind: 'talk', cards: [
            { q: '¿Quién eres? Preséntate. · Who are you? Introduce yourself.', followUps: ['¿Cómo se escribe tu apellido? (How do you spell your surname?)', '¿Eres nuevo o nueva en el grupo? (Are you new in the group?)'], phrases: ['[[Soy|blue]] …', 'Mi nombre [[es|blue]] … y mi apellido [[es|blue]] …', '[[Soy|blue]] nuevo / nueva.'], hint: '«Soy» + tu nombre. Para deletrear, usa los nombres de las letras.', example: 'Soy Sam Taylor. Mi apellido es Taylor: te, a, ye, ele, o, erre. Soy nueva en el grupo.', next: 'Ahora, tu profesión.' },
            { q: '¿Cuál es tu profesión? · What is your job?', followUps: ['¿Cómo eres en el trabajo? (What are you like at work?)', '¿Y tu hermano o tu hermana? ¿Cuál es su profesión? (And your brother or sister?)'], phrases: ['[[Soy|blue]] enfermera. · [[Soy|blue]] estudiante.', '[[Soy|blue]] una enfermera muy paciente.', 'Mi hermano [[es|blue]] abogado.'], hint: 'Profesión sola: sin un / una. Con un adjetivo: un / una.', example: 'Soy enfermera. Soy una enfermera muy paciente. Mi hermano es abogado.', next: 'Ahora, de dónde eres.', teacher: 'Si el alumno dice «Soy una enfermera», repite su frase sin «una» y espera a que la repita.' },
            { q: '¿De dónde eres? ¿Cuál es tu nacionalidad? · Where are you from?', followUps: ['¿De qué ciudad? (Which city?)', '¿Y tu familia? ¿De dónde es? (And your family?)'], phrases: ['[[Soy de|violet]] Canadá, de Toronto.', '[[Soy|violet]] canadiense.', 'Mis padres [[son de|violet]] …'], hint: '«Soy de» + país o ciudad, o «soy» + nacionalidad. Ella: chilena, española…', example: 'Soy de Canadá, de Toronto: soy canadiense. Mis padres son de Escocia: son escoceses.', next: 'Ahora, cómo eres.' },
            { q: '¿Cómo eres? Di tres adjetivos. · What are you like? Give three adjectives.', followUps: ['¿Eres tranquilo o hablador? ¿Tranquila o habladora? (Calm or chatty?)', '¿Y hoy? ¿Cómo estás? (And today? How are you?)'], phrases: ['[[Soy|orange]] tranquilo / tranquila.', '[[Soy|orange]] muy hablador / habladora.', 'Hoy [[estoy|teal]] cansado / cansada.'], hint: 'Carácter: soy. Cómo te sientes hoy: estoy. Atención a -o / -a.', example: 'Soy tranquila, simpática y un poco seria. Hoy estoy cansada.', next: 'Ahora, otra persona.' },
            { q: 'Presenta a una persona de tu familia o a un amigo. · Introduce a family member or a friend.', followUps: ['¿Cómo es? (What is he / she like?)', '¿Es de tu ciudad? (Is he / she from your town?)'], phrases: ['[[Él es|blue]] … / [[Ella es|blue]] …', '[[Es|blue]] médico / médica.', '[[Es de|violet]] … [[Es|violet]] mexicano / mexicana.'], hint: 'Cuatro datos con «es»: nombre, profesión, origen y carácter.', example: 'Ella es Kate, mi hermana. Es arquitecta. Es de Toronto, como yo. Es muy divertida.', next: 'Para terminar, una presentación cruzada.' },
            { q: 'Presentación cruzada: presenta a tu profesor o profesora y a ti. Usa «somos». · Cross introduction: introduce your teacher and yourself. Use “somos”.', followUps: ['¿Son de la misma ciudad? (Are you from the same city?)', '¿Son los dos tranquilos? (Are you both calm?)'], phrases: ['Él / Ella [[es de|violet]] … y yo [[soy de|violet]] …', '[[Somos|blue]] profesora y alumna.', 'Los dos [[somos|orange]] …'], hint: 'Primero la otra persona (es), después tú (soy), al final los dos (somos).', example: 'Ella es Marta. Es periodista y es mexicana. Yo soy Sam y soy canadiense. Somos muy habladoras.', teacher: 'Responde tú también con una presentación cruzada sobre el alumno: «Él es…». Así oye otra vez «es» y «somos».' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno es Marta y te hace las preguntas con «¿Quién eres?», «¿De dónde eres?», «¿Cómo eres?».', self: 'Ahora tú eres Marta: haz las preguntas en voz alta («¿Quién eres?», «¿De dónde eres?») y responde como Elena o como Pablo. (Now you are Marta: ask and answer as a guest.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Tu ficha para el pódcast', coach: 'Frases cortas y claras. Short, clear sentences.',
      steps: [
        { title: 'Para la web de Gente nueva · For the podcast website', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos la forma de ser, el artículo con la profesión y la concordancia de la nacionalidad. Después, tu alumno lee su texto en voz alta.', self: 'Escribe tu texto y toca «Revisar mi texto». Mira bien: profesión sin un / una, nacionalidad con -o / -a. (Write your text and tap “Revisar mi texto”.)' } },
          { kind: 'write', title: 'Dos presentaciones · Two introductions', situation: 'Marta te escribe: el pódcast tiene una página web y necesita un texto corto sobre ti y sobre otra persona del grupo (o de tu familia). Escribe a Marta. (Marta writes to you: the podcast website needs a short text about you and another person. Write to Marta.)', task: [
            'Preséntate: nombre y profesión. (Your name and job.)',
            'Di de dónde eres y tu nacionalidad. (Where you are from and your nationality.)',
            'Presenta a otra persona con «es»: profesión, origen y carácter. (Introduce someone with “es”.)',
            'Escribe una frase sobre los dos con «somos». (One sentence about both of you with “somos”.)',
          ], starters: ['Hola, Marta.', 'Soy … y soy …', 'Soy de …', 'Mi amigo / Mi amiga … es …', 'Es de …', 'Es muy …', '… y yo somos …', 'Un saludo.'],
            words: ['soy', 'es', 'somos', 'son', 'de', 'médico / médica', 'profesor / profesora', 'periodista', 'estudiante', 'tranquilo / tranquila', 'simpático / simpática', 'divertido / divertida', 'serio / seria'],
            model: 'Hola, Marta. [[Soy|blue]] Sam Taylor y [[soy enfermera|blue]]. [[Soy de Canadá|violet]], de Toronto: [[soy canadiense|violet]]. [[Soy|orange]] tranquila y un poco seria. Mi amigo Leo [[es periodista|blue]]. [[Es español|violet]], de Sevilla, y [[es muy divertido|orange]]. Leo y yo [[somos|blue]] compañeros del grupo de conversación. Un saludo.',
            minWords: 30,
            checks: [
              { label: 'Soy + quién eres (name, job, origin)', pattern: '(?<!\\p{L})soy(?!\\p{L})', tip: 'Preséntate con «soy»: «Soy Sam», «Soy enfermera».' },
              { label: 'Es + la otra persona (the other person)', pattern: '(?<!\\p{L})es(?!\\p{L})', tip: 'Presenta a otra persona con «es»: «Leo es periodista».' },
              { label: 'Ser de + lugar (origin)', pattern: '(?<!\\p{L})(?:soy|eres|es|somos|son)\\s+de(?!\\p{L})', tip: 'Di el origen con ser de: «Soy de Canadá», «Es de Sevilla».' },
              { label: 'Somos (you two together)', pattern: '(?<!\\p{L})somos(?!\\p{L})', tip: 'Una frase sobre los dos: «Leo y yo somos…».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})(?:estoy|est[aá]s?|estamos|est[aá]n)\\s+de\\s+(?!viaje|vacaciones|visita|acuerdo)', why: 'El origen va con ser: «soy de…», «es de…», no «estoy de…».' },
              { pattern: '(?<!\\p{L})(?:soy|eres|es|somos|son)\\s+(?:un|una|unos|unas)\\s+(?:m[eé]dic[oa]s?|enfermer[oa]s?|profesor(?:a|es|as)?|ingenier[oa]s?|abogad[oa]s?|periodistas?|estudiantes?|cociner[oa]s?|arquitect[oa]s?)\\s*(?:[.,;:!?]|$)', why: 'Profesión sola, sin un / una: «soy enfermera», «es periodista». Con un adjetivo, sí: «una enfermera muy paciente».' },
              { pattern: '(?<!\\p{L})(?:estoy|est[aá]s?|estamos|est[aá]n)\\s+(?:m[eé]dic|enfermer|profesor|ingenier|abogad|periodista|estudiante)', why: 'La profesión va con ser: «soy enfermera», no «estoy enfermera».' },
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
            { tone: 'blue', label: 'QUIÉN · QUÉ', formula: 'ser + nombre · profesión (sin un / una)', example: 'Ana es ingeniera.', caption: 'identidad y profesión', en: 'who someone is and their job' },
            { tone: 'blue', label: 'PROFESIÓN + ADJETIVO', formula: 'ser + un / una + profesión + adjetivo', example: 'Es una ingeniera excelente.', caption: 'con adjetivo, con artículo', en: 'with an adjective, add un / una' },
            { tone: 'violet', label: 'DE DÓNDE', formula: 'ser de + lugar · ser + nacionalidad (-o / -a)', example: 'Elena es de Chile: es chilena.', caption: 'origen y nacionalidad', en: 'where someone is from' },
            { tone: 'orange', label: 'CÓMO ES', formula: 'ser + adjetivo de carácter', example: 'Pablo es muy divertido.', caption: 'carácter', en: 'what someone is like' },
            { tone: 'teal', label: 'CONTRASTE', formula: 'estar + estado de hoy', example: 'Soy médica. Hoy estoy cansada.', caption: 'cómo está hoy', en: 'how someone feels today' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Nombre, profesión, origen, nacionalidad y carácter: **ser** (soy, eres, es, somos, son). La profesión sola va **sin** un / una. La nacionalidad **concuerda** y va en minúscula. Cómo te sientes hoy: estar.', en: 'Name, job, origin, nationality and personality: ser. A bare job takes no “a”. Nationality agrees and is lowercase. How you feel today: estar.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'Mis abuelos ___ de Bogotá.', options: ['están', 'somos', 'son'], answer: 2, why: 'Ellos + origen: son de.' },
            { prompt: 'Tú ___ profesora, ¿verdad?', options: ['es', 'eres una', 'eres'], answer: 2, why: 'Tú + profesión sola: eres profesora.' },
            { prompt: 'Lucía es ___ abogada muy seria.', options: ['una', '—', 'la de'], answer: 0, why: 'Profesión + adjetivo: una abogada muy seria.' },
            { prompt: 'Mi madre es ___.', options: ['Alemana', 'alemana', 'alemán'], answer: 1, why: 'Ella: alemana, en minúscula y sin tilde.' },
            { prompt: 'Soy cocinero y hoy ___ muy cansado.', options: ['soy', 'es', 'estoy'], answer: 2, why: 'Hoy, un estado: estoy cansado.' },
          ] },
        ] },
        { title: 'Otra situación · A new situation', mascot: '/brand/mascot/portrait.webp', blocks: [
          { kind: 'lead', text: 'Un congreso de salud en Lima. En la tarjeta de una participante dice: **Dra. Carmen Soto · pediatra · Quito (Ecuador)**. Tú la presentas.', en: 'A health conference in Lima. A participant’s name badge says: Dr Carmen Soto · paediatrician · Quito (Ecuador). You introduce her.' },
          { kind: 'choice', title: 'Presenta a Carmen · Introduce Carmen', items: [
            { prompt: '¿Qué frase es correcta?', options: ['Carmen es una pediatra.', 'Carmen está pediatra.', 'Carmen es pediatra.'], answer: 2, why: 'Profesión sola: sin artículo, con ser.', en: 'Which sentence is correct?' },
            { prompt: '¿Qué frase es correcta?', options: ['Es ecuatoriano, de Quito.', 'Está de Quito.', 'Es ecuatoriana, de Quito.'], answer: 2, why: 'Carmen es mujer: ecuatoriana. Origen con ser.', en: 'Which sentence is correct?' },
            { prompt: 'Carmen y su compañero, el doctor Ruiz, también de Quito: «Ellos ___ ecuatorianos».', options: ['somos', 'están', 'son'], answer: 2, why: 'Ellos: son. Grupo mixto: ecuatorianos.', en: 'Carmen and her colleague Dr Ruiz, also from Quito: “They are Ecuadorian”.' },
          ] },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 012 · Estar para estados y lugares', text: 'Ya sabes decir quién es una persona con **ser**. Hoy viste un solo contraste: «Estoy cansada». En la clase 012 estudias **estar** a fondo: cómo te sientes y dónde estás. Así completas el par ser / estar.', en: 'You can now say who someone is with ser. Today you saw just one contrast: “Estoy cansada”. In class 012 you study estar in depth: how you feel and where you are. That completes the ser / estar pair.', href: '/gramatica/estar-estados-y-lugares', label: 'Ir a la clase 012' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «Presenta a una persona de la clase: quién es, qué es, de dónde es y cómo es». Tarea: enviar el texto de Escribir y añadir una tercera persona con «son».' },
        ] },
      ],
    },
  ],
};
