import type { LiveLesson } from '../types';

/**
 * Lesson 47 · A1 · Adverbios: dónde, cuándo y cómo.
 * Core: aquí / ahí / allí, basic time words and sequence, muy versus mucho.
 * The same library (Lucía, Diego, Marta) runs through the class.
 */
export const lesson: LiveLesson = {
  id: 47,
  level: 'A1',
  title: 'Adverbios',
  subtitle: 'Decir dónde está algo, cuándo haces las cosas y cómo son, con aquí, ahí, allí, hoy, después, muy y mucho.',
  legend: [
    { tone: 'blue', label: 'Dónde · aquí, ahí, allí' },
    { tone: 'teal', label: 'Cuándo · hoy, mañana, primero, después' },
    { tone: 'orange', label: 'Cuánto · muy, mucho' },
    { tone: 'violet', label: 'Cómo · bien, mal, despacio' },
  ],
  optionNotes: {
    muy: '«Muy» va delante de un adjetivo o un adverbio: muy grande, muy cerca, muy bien. No va solo después de un verbo.',
    Muy: '«Muy» va delante de un adjetivo o un adverbio: muy grande, muy cerca, muy bien. No va solo después de un verbo.',
    mucho: '«Mucho» va después de un verbo (trabajo mucho) o delante de un nombre masculino (mucho ruido).',
    mucha: '«Mucha» va delante de un nombre femenino: mucha gente, mucha luz.',
    muchos: '«Muchos» va delante de un nombre masculino plural: muchos libros.',
    muchas: '«Muchas» va delante de un nombre femenino plural: muchas mesas.',
    aquí: '«Aquí» es el lugar donde está la persona que habla: muy cerca de mí.',
    ahí: '«Ahí» es un lugar cerca de la otra persona, a una distancia media.',
    allí: '«Allí» es un lugar lejos de las dos personas.',
    Dónde: '«¿Dónde?» pregunta por un lugar.',
    Cuándo: '«¿Cuándo?» pregunta por un momento: hoy, mañana, a las nueve.',
    Cómo: '«¿Cómo?» pregunta por la manera: bien, mal, despacio.',
    Cuando: 'Sin tilde, «cuando» no es una pregunta. Para preguntar escribimos «¿Cuándo…?».',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Dónde, cuándo y cómo', coach: 'Palabras pequeñas, información importante.',
      steps: [
        { title: 'Aquí, ahí y allí', blocks: [
          { kind: 'lead', text: 'Lucía está en la biblioteca. Habla con Diego. Mira dónde están las cosas: **cerca de Lucía**, **cerca de Diego** o **lejos de los dos**.', en: 'Here, there (near you), over there (far from both of us).' },
          { kind: 'guide', text: { teacher: 'Usa objetos de la clase o de la pantalla: señala algo cerca de ti, algo cerca del alumno y algo lejos. Tu alumno dice aquí, ahí o allí.', self: 'Lee los ejemplos y piensa en tu casa: ¿qué está aquí, cerca de ti? ¿Qué está allí, lejos?' } },
          { kind: 'concept', tone: 'blue', label: 'AQUÍ · AHÍ · ALLÍ', question: '¿Dónde?', en: 'here · there · over there', formula: ['aquí = cerca de mí', 'ahí = cerca de ti', 'allí = lejos de los dos'],
            meaning: 'Estas palabras dicen **dónde** está algo. No cambian: son iguales con un libro, con una mesa o con muchas personas.',
            examples: [
              { es: 'Estoy [[aquí|blue]], en la biblioteca.', en: 'I am here, in the library.' },
              { es: 'Tu mochila está [[ahí|blue]], al lado de tu silla.', en: 'Your backpack is there, next to your chair.' },
              { es: 'Los libros de español están [[allí|blue]], al fondo.', en: 'The Spanish books are over there, at the back.' },
              { es: 'Mi casa está muy lejos. La biblioteca está cerca.', en: 'My house is very far. The library is close.' },
            ],
            note: 'También son útiles **cerca** y **lejos**: «La biblioteca está cerca». Y para dar más detalles: **junto a** la puerta, **al fondo**, **dentro de** la caja.' },
          { kind: 'table', title: 'Tres distancias', head: ['Palabra', 'Dónde está', 'Ejemplo'], rows: [
            ['[[aquí|blue]]', 'cerca de la persona que habla', 'Estoy [[aquí|blue]].'],
            ['[[ahí|blue]]', 'cerca de la persona que escucha', 'Tu café está [[ahí|blue]].'],
            ['[[allí|blue]]', 'lejos de las dos personas', 'La salida está [[allí|blue]].'],
          ] },
          { kind: 'tip', icon: '🌎', title: 'Vas a escuchar también', text: 'En muchos países se dice **acá** (como aquí) y **allá** (como allí). Significan casi lo mismo. En esta clase usamos aquí, ahí y allí.', en: 'acá ≈ aquí · allá ≈ allí' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'Tienes las llaves en la mano. «Las llaves están ___.»', options: ['aquí', 'ahí', 'allí'], answer: 0, why: 'Las llaves están contigo, muy cerca de ti: aquí.' },
            { prompt: 'Tu amigo tiene el teléfono junto a él. Tú le dices: «Tu teléfono está ___, al lado de tu plato».', options: ['aquí', 'ahí', 'allí'], answer: 1, why: 'El teléfono está cerca de la otra persona: ahí.' },
            { prompt: 'Ves una montaña muy lejos. «Mi pueblo está ___, detrás de la montaña.»', options: ['aquí', 'ahí', 'allí'], answer: 2, why: 'El pueblo está lejos de las dos personas: allí.' },
          ] },
        ] },
        { title: 'Hoy, mañana, primero, después', mascot: '/brand/mascot/studying.webp', coach: 'Ahora, el tiempo: cuándo pasan las cosas.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'CUÁNDO', question: '¿Cuándo?', en: 'when', formula: ['ayer · hoy · mañana', 'ahora · antes · después', 'primero → después → luego'],
            meaning: 'Estas palabras dicen **cuándo** pasa algo. «Primero», «después» y «luego» ordenan las acciones, una detrás de otra.',
            examples: [
              { es: '[[Hoy|teal]] trabajo en la biblioteca.', en: 'Today I work at the library.' },
              { es: '[[Mañana|teal]] trabajo en casa.', en: 'Tomorrow I work at home.' },
              { es: '[[Primero|teal]] leo mis mensajes y [[después|teal]] estudio.', en: 'First I read my messages and then I study.' },
              { es: '[[Ahora|teal]] no puedo, estoy en clase.', en: 'I can’t right now, I’m in class.' },
            ],
            note: 'Estas palabras pueden ir al principio o al final: «[[Hoy|teal]] estudio» o «Estudio [[hoy|teal]]». Las dos frases son correctas.' },
          { kind: 'table', title: 'Palabras de tiempo', head: ['Pasado', 'Presente', 'Futuro'], rows: [
            ['[[ayer|teal]]', '[[hoy|teal]]', '[[mañana|teal]]'],
            ['[[antes|teal]]', '[[ahora|teal]]', '[[después|teal]] · [[luego|teal]]'],
          ], note: 'Para ordenar: [[primero|teal]] → [[después|teal]] → [[luego|teal]] → [[al final|teal]].' },
          { kind: 'tip', icon: '🔑', title: 'Después y después de', text: '**Después** puede ir solo: «Primero como; después salgo». **Después de** necesita una palabra detrás: «después de la clase», «después de comer». Lo mismo con **antes** y **antes de**.', en: 'después = afterwards · después de = after' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'Hoy es lunes. El martes es ___.', options: ['ayer', 'mañana', 'ahora'], answer: 1, why: 'El día siguiente a hoy es mañana.' },
            { prompt: 'Primero desayuno y ___ voy al trabajo.', options: ['ayer', 'después', 'aquí'], answer: 1, why: '«Después» ordena la segunda acción.' },
            { prompt: '___ la clase, tomo un café con Marta.', options: ['Después de', 'Después', 'Ayer de'], answer: 0, why: 'Hay una palabra detrás (la clase): «después de».' },
          ] },
        ] },
        { title: 'Muy y mucho', mascot: '/brand/mascot/speaking.webp', coach: 'Muy y mucho no son iguales.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'MUY', question: '¿Cómo de…?', en: 'very', formula: ['muy + adjetivo', 'muy + adverbio'],
            meaning: '**Muy** hace más fuerte una cualidad. Va **delante** de un adjetivo (tranquilo, grande) o de un adverbio (cerca, bien). Nunca cambia.',
            examples: [
              { es: 'La sala está [[muy|orange]] tranquila.', en: 'The room is very quiet.' },
              { es: 'Mi casa está [[muy|orange]] lejos.', en: 'My house is very far.' },
              { es: 'Marta habla [[muy|orange]] bien.', en: 'Marta speaks very well.' },
            ] },
          { kind: 'concept', tone: 'orange', label: 'MUCHO', question: '¿Cuánto?', en: 'a lot · much / many', formula: ['verbo + mucho', 'mucho / mucha / muchos / muchas + nombre'],
            meaning: '**Mucho** habla de cantidad. Después de un verbo **no cambia**: «trabajo mucho». Delante de un nombre **cambia** como el nombre: mucho ruido, mucha gente, muchos libros, muchas mesas.',
            examples: [
              { es: 'Diego trabaja [[mucho|orange]].', en: 'Diego works a lot.' },
              { es: 'Hay [[mucho|orange]] ruido en la calle.', en: 'There is a lot of noise in the street.' },
              { es: 'Hoy hay [[mucha|orange]] gente en la biblioteca.', en: 'There are a lot of people in the library today.' },
              { es: 'Tengo [[muchos|orange]] libros en casa.', en: 'I have a lot of books at home.' },
            ] },
          { kind: 'table', title: 'Mucho delante de un nombre', head: ['', 'Masculino', 'Femenino'], rows: [
            ['Singular', '[[mucho|orange]] ruido', '[[mucha|orange]] luz'],
            ['Plural', '[[muchos|orange]] libros', '[[muchas|orange]] mesas'],
          ], note: 'Con un verbo, siempre **mucho**: «Ana estudia [[mucho|orange]]», «Las chicas leen [[mucho|orange]]».' },
          { kind: 'compare', title: 'Mira la palabra que va al lado', columns: [
            { tone: 'orange', label: 'MUY + ADJETIVO', sentence: 'El curso es [[muy|orange]] **interesante**.', idea: 'Una cualidad más fuerte.', en: 'very interesting' },
            { tone: 'orange', label: 'VERBO + MUCHO', sentence: '**Estudio** [[mucho|orange]].', idea: 'Una cantidad grande de acción.', en: 'I study a lot' },
          ] },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'El museo está ___ cerca: a dos minutos.', options: ['mucho', 'muy', 'mucha'], answer: 1, why: '«Cerca» es un adverbio: muy cerca.' },
            { prompt: 'Ana estudia ___ para el examen.', options: ['mucho', 'muy', 'mucha'], answer: 0, why: 'Después del verbo «estudia» va «mucho», sin cambios.' },
            { prompt: 'Hay ___ gente en el autobús.', options: ['mucho', 'muy', 'mucha'], answer: 2, why: '«Gente» es un nombre femenino: mucha gente.' },
          ] },
        ] },
        { title: 'Cómo: bien, mal, despacio', mascot: '/autoestudio/mascot/noting.webp', coach: 'Y para terminar: cómo haces las cosas.', blocks: [
          { kind: 'concept', tone: 'violet', label: 'CÓMO', question: '¿Cómo?', en: 'how', formula: ['verbo + bien / mal / despacio / rápido'],
            meaning: 'Estas palabras dicen **cómo** haces algo. Van normalmente **después del verbo** y no cambian. Con «muy» dicen más: muy bien, muy mal.',
            examples: [
              { es: 'Marta cocina [[bien|violet]].', en: 'Marta cooks well.' },
              { es: 'Hoy duermo [[mal|violet]]: hay mucho ruido.', en: 'Today I sleep badly: there is a lot of noise.' },
              { es: 'Habla [[despacio|violet]], por favor.', en: 'Speak slowly, please.' },
              { es: 'Diego escribe [[muy|orange]] [[rápido|violet]].', en: 'Diego writes very fast.' },
            ],
            note: 'Más adelante vas a ver palabras con **-mente**: tranquila → tranquila**mente**, fácil → fácil**mente**.' },
          { kind: 'table', title: 'Tres preguntas, tres respuestas', head: ['Pregunta', 'Respuesta'], rows: [
            ['¿**Dónde** estudias?', 'Estudio [[aquí|blue]], en la biblioteca.'],
            ['¿**Cuándo** estudias?', 'Estudio [[hoy|teal]] y [[mañana|teal]].'],
            ['¿**Cómo** estudias?', 'Estudio [[despacio|violet]] y [[muy|orange]] [[bien|violet]].'],
          ], note: 'Las preguntas llevan tilde: **dónde**, **cuándo**, **cómo**.' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: '¿___ empieza la clase? —A las nueve.', options: ['Cuándo', 'Dónde', 'Cómo'], answer: 0, why: '«A las nueve» es un momento: ¿Cuándo?' },
            { prompt: '¿___ está la salida? —Allí, al fondo.', options: ['Cuándo', 'Dónde', 'Cómo'], answer: 1, why: '«Allí, al fondo» es un lugar: ¿Dónde?' },
            { prompt: '¿___ habla tu profesora? —Muy despacio.', options: ['Cuándo', 'Dónde', 'Cómo'], answer: 2, why: '«Muy despacio» es una manera: ¿Cómo?' },
          ] },
        ] },
        { title: 'Cómo elegir', mascot: '/brand/mascot/seated.webp', coach: 'Muy o mucho: mira la palabra de al lado.', blocks: [
          { kind: 'decide', title: '¿Muy o mucho? Responde las preguntas', steps: [
            { q: '¿La palabra de al lado es un adjetivo o un adverbio (tranquilo, cerca, bien)?', yes: 'Usa **muy** delante: «[[muy|orange]] tranquilo», «[[muy|orange]] cerca».', no: 'next' },
            { q: '¿Va después de un verbo (trabajo, estudio, duermo)?', yes: 'Usa **mucho**, sin cambios: «Trabajo [[mucho|orange]]».', no: 'Va delante de un nombre: **mucho, mucha, muchos, muchas**, como el nombre: «[[mucha|orange]] gente», «[[muchos|orange]] libros».' },
          ] },
          { kind: 'tip', icon: '👀', title: 'Un truco rápido', text: 'Si puedes poner «**más**» delante de la palabra (más tranquilo, más cerca), usa **muy**. Si quieres decir «**cuánto**» (cuánto trabajas, cuánta gente), usa **mucho**.', en: 'very + quality · a lot of + quantity' },
        ] },
        { title: 'Errores frecuentes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Estos errores son muy comunes.', blocks: [
          { kind: 'guide', text: { teacher: 'Tu alumno encuentra el error antes de que muestres la corrección. Pregunta: «¿Qué palabra va al lado?».', self: 'Lee cada frase, busca el error y después toca para ver la corrección.' } },
          { kind: 'mistakes', title: '¿Dónde está el error?', items: [
            { wrong: 'El libro es mucho interesante.', right: 'El libro es muy interesante.', why: '«Interesante» es un adjetivo: va con «muy».' },
            { wrong: 'Trabajo muy.', right: 'Trabajo mucho.', why: 'Después de un verbo, «mucho». «Muy» necesita un adjetivo o un adverbio.' },
            { wrong: 'Hay mucho gente aquí.', right: 'Hay mucha gente aquí.', why: '«Gente» es femenino: mucha gente.' },
            { wrong: 'Estoy muy cansada y trabajo muchos.', right: 'Estoy muy cansada y trabajo mucho.', why: 'Con un verbo, «mucho» no cambia.' },
            { wrong: 'Después la clase, voy a casa.', right: 'Después de la clase, voy a casa.', why: 'Con una palabra detrás, usa «después de».' },
            { wrong: '¿Donde está la biblioteca?', right: '¿Dónde está la biblioteca?', why: 'En una pregunta, «dónde» lleva tilde.' },
          ] },
          { kind: 'teacher', text: 'Pide tres frases verdaderas del alumno: una con aquí/allí, una con primero/después y una con muy o mucho. Corrige solo la palabra objetivo.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'Los adverbios en situaciones reales', coach: 'Toca las palabras marcadas.',
      steps: [
        { title: 'Una tarde en la biblioteca', blocks: [
          { kind: 'guide', text: { teacher: 'Lean el diálogo con papeles. Después, el alumno toca cada palabra marcada y explica por qué se usó.', self: 'Lee el diálogo. Después toca cada palabra marcada para descubrir por qué se usó.' } },
          { kind: 'explore', title: 'En la entrada de la biblioteca', setting: 'Lucía trabaja hoy en la biblioteca. Diego llega y la busca.', lines: [
            { who: 'Diego', text: '¡Hola, Lucía! ¿Trabajas [[aquí|blue]] hoy?', en: 'Are you working here today?' },
            { who: 'Lucía', text: 'Sí. Mi casa está [[muy|orange]] lejos y en mi calle hay [[mucho|orange]] ruido.' },
            { who: 'Diego', text: 'Aquí está [[muy|orange]] tranquilo. ¿Dónde están los libros de español?' },
            { who: 'Lucía', text: 'Están [[allí|blue]], al fondo, al lado de la ventana.' },
            { who: 'Diego', text: '¿Y dónde pongo la mochila?' },
            { who: 'Lucía', text: '[[Ahí|blue]], al lado de tu silla. Está bien.' },
            { who: 'Diego', text: '¿Qué haces esta tarde?' },
            { who: 'Lucía', text: '[[Primero|teal]] reviso mis mensajes y [[después|teal]] leo un poco.' },
            { who: 'Diego', text: '¿Vienes [[mañana|teal]] también?' },
            { who: 'Lucía', text: 'No, [[mañana|teal]] trabajo en casa. Leo [[mucho|orange]], pero en casa leo [[mal|violet]]: no tengo mesa.' },
          ], notes: {
            'aquí': 'Diego está con Lucía, en el mismo lugar: **aquí** es el lugar donde están los dos.',
            'muy': '«Muy» va delante de **lejos** y de **tranquilo**: un adverbio y un adjetivo.',
            'mucho': 'En «mucho ruido», **mucho** va delante de un nombre masculino. En «leo mucho», va después del verbo y no cambia.',
            'allí': 'Los libros están **lejos** de los dos, al fondo: allí.',
            'Ahí': 'La silla está **cerca de Diego**, la persona que escucha: ahí.',
            'Primero': 'Ordena la **primera** acción de la tarde.',
            'después': 'Ordena la **segunda** acción, después de revisar los mensajes.',
            'mañana': 'El día siguiente a hoy: dice **cuándo** trabaja en casa.',
            'mal': 'Dice **cómo** lee en casa. Va después del verbo «leo».',
          } },
          { kind: 'choice', title: '¿Entendiste?', items: [
            { prompt: '¿Por qué trabaja Lucía en la biblioteca hoy?', options: ['Porque su casa está lejos y hay ruido.', 'Porque los libros están en su casa.', 'Porque Diego trabaja allí.'], answer: 0, why: '«Mi casa está muy lejos y en mi calle hay mucho ruido.»' },
            { prompt: '¿Dónde están los libros de español?', options: ['Al lado de la silla de Diego.', 'Al fondo, al lado de la ventana.', 'En la entrada.'], answer: 1, why: '«Están allí, al fondo, al lado de la ventana.»' },
            { prompt: '¿Qué hace Lucía primero?', options: ['Lee.', 'Revisa sus mensajes.', 'Trabaja en casa.'], answer: 1, why: '«Primero reviso mis mensajes y después leo.»' },
          ] },
        ] },
        { title: 'Una tarde de estudio', blocks: [
          { kind: 'explore', title: 'Planes para estudiar', setting: 'Marta llama a Diego para estudiar juntos.', lines: [
            { who: 'Marta', text: 'Diego, ¿estudiamos juntos [[hoy|teal]]?' },
            { who: 'Diego', text: 'Sí. Estoy en la biblioteca. ¿Vienes [[aquí|blue]]?' },
            { who: 'Marta', text: 'Hmm… La biblioteca está [[muy|orange]] lejos de mi casa.' },
            { who: 'Diego', text: 'Entonces vamos al café de la plaza. Está [[muy|orange]] cerca de ti.' },
            { who: 'Marta', text: 'Buena idea, pero hay [[mucha|orange]] gente por la tarde.' },
            { who: 'Diego', text: '¿Y [[ahora|teal]]? A las tres está tranquilo.' },
            { who: 'Marta', text: 'Perfecto. [[Primero|teal]] repasamos los verbos, [[después|teal]] hacemos los ejercicios.' },
            { who: 'Diego', text: 'Y [[al final|teal]], un café. Yo hablo [[despacio|violet]] y tú me corriges.' },
            { who: 'Marta', text: '¡Trato hecho! Hasta [[luego|teal]].' },
          ], notes: {
            'hoy': 'El día de la conversación: **hoy**.',
            'aquí': 'Diego habla del lugar donde **él** está: la biblioteca.',
            'muy': 'Delante de **lejos** y **cerca**, dos adverbios de lugar: muy.',
            'mucha': '«Gente» es un nombre femenino: **mucha** gente.',
            'ahora': 'El momento presente. Diego propone ir **en este momento**.',
            'Primero': 'La primera actividad del plan.',
            'después': 'La segunda actividad, después de repasar.',
            'al final': 'La última actividad del plan.',
            'despacio': 'Dice **cómo** habla Diego. Va después del verbo.',
            'luego': '«Hasta luego» es una despedida. «Luego» significa después.',
          } },
          { kind: 'teacher', text: 'Pregunta: «¿Dónde estudias tú normalmente? ¿Hay mucha gente?». Pide una respuesta con muy y otra con mucho.' },
        ] },
        { title: '¿Dónde, cuándo o cuánto?', blocks: [
          { kind: 'classify', title: 'Clasifica las palabras marcadas de las dos conversaciones', categories: [
            { id: 'donde', label: 'Dónde', tone: 'blue' },
            { id: 'cuando', label: 'Cuándo', tone: 'teal' },
            { id: 'cuanto', label: 'Cuánto · muy, mucho', tone: 'orange' },
          ], items: [
            { text: 'Están allí, al fondo.', answer: 'donde', why: '«Allí» es un lugar lejano.' },
            { text: 'Mañana trabajo en casa.', answer: 'cuando', why: '«Mañana» dice cuándo.' },
            { text: 'Hay mucha gente por la tarde.', answer: 'cuanto', why: '«Mucha» habla de cantidad.' },
            { text: 'Primero repasamos los verbos.', answer: 'cuando', why: '«Primero» ordena en el tiempo.' },
            { text: '¿Vienes aquí?', answer: 'donde', why: '«Aquí» es el lugar donde está Diego.' },
            { text: 'La biblioteca está muy lejos.', answer: 'cuanto', why: '«Muy» hace más fuerte «lejos».' },
          ] },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Si te equivocas, lee la pista y prueba otra vez.',
      steps: [
        { title: 'Elige según el contexto', blocks: [
          { kind: 'choice', items: [
            { context: 'Tienes un vaso en la mano.', prompt: 'El vaso está ___, en mi mano.', options: ['aquí', 'ahí', 'allí'], answer: 0, why: 'El vaso está contigo: aquí.', en: 'here' },
            { context: 'Tu compañero busca su lápiz. El lápiz está junto a su cuaderno.', prompt: 'Tu lápiz está ___, junto a tu cuaderno.', options: ['aquí', 'ahí', 'allí'], answer: 1, why: 'El lápiz está cerca de la persona que escucha: ahí.' },
            { context: 'Estás en la puerta. El baño está al final del pasillo.', prompt: 'El baño está ___, al fondo.', options: ['aquí', 'ahí', 'allí'], answer: 2, why: 'Al fondo, lejos de los dos: allí.' },
            { context: 'La película es excelente.', prompt: 'La película es ___ buena.', options: ['muy', 'mucho', 'mucha'], answer: 0, why: '«Buena» es un adjetivo: muy buena.' },
            { context: 'Pedro trabaja diez horas al día.', prompt: 'Pedro trabaja ___.', options: ['muy', 'mucho', 'mucha'], answer: 1, why: 'Después del verbo, «mucho».' },
            { context: 'En la sala hay cuarenta personas.', prompt: 'Hay ___ gente en la sala.', options: ['muy', 'mucho', 'mucha'], answer: 2, why: '«Gente» es femenino: mucha.' },
            { context: 'Cocinar es la primera acción. Comer es la segunda.', prompt: 'Primero cocino; ___ como.', options: ['allí', 'después', 'mal'], answer: 1, why: '«Después» ordena la segunda acción. «Allí» es un lugar y «mal» es una manera.' },
          ] },
        ] },
        { title: 'Compara los significados', blocks: [
          { kind: 'choice', items: [
            { prompt: '¿Qué frase habla de **cantidad de trabajo**?', options: ['Trabajo mucho.', 'Trabajo muy bien.'], answer: 0, why: '«Mucho» después del verbo es cantidad. «Muy bien» es la manera.' },
            { prompt: '¿Qué frase dice que la mesa está **cerca de la otra persona**?', options: ['Tu mesa está ahí.', 'Tu mesa está allí.'], answer: 0, why: '«Ahí» es cerca de la persona que escucha. «Allí» es lejos de los dos.' },
            { prompt: '«Primero leo y después escribo.» ¿Qué hago antes?', options: ['Leer.', 'Escribir.', 'Las dos cosas a la vez.'], answer: 0, why: '«Primero» marca la primera acción: leer.' },
            { prompt: '«Hay mucha gente, pero la sala está muy tranquila.» ¿Hay ruido?', options: ['No, hay silencio.', 'Sí, mucho ruido.', 'No hay gente.'], answer: 0, why: '«Mucha gente» es cantidad de personas; «muy tranquila» dice que no hay ruido.' },
            { prompt: '¿Qué frase habla de **mañana**?', options: ['Ayer estudio en casa.', 'Mañana estudio en casa.', 'Ahora estudio en casa.'], answer: 1, why: 'Mañana es el día después de hoy. En español, el presente sirve para hablar de planes cercanos.' },
          ] },
        ] },
        { title: 'Completa la conversación', blocks: [
          { kind: 'chat-fill', title: 'Buscando la sala de reuniones', lines: [
            { who: 'Visitante', text: 'Perdón, ¿___ está la sala de reuniones?', options: ['dónde', 'cuándo', 'cómo'], answer: 0, why: 'Pregunta por un lugar: ¿dónde?' },
            { who: 'Recepcionista', text: 'Está ___, al fondo del pasillo.', options: ['allí', 'aquí', 'mañana'], answer: 0, why: 'La sala está lejos de los dos: allí.' },
            { who: 'Visitante', text: '¿Está ___ lejos?', options: ['mucho', 'muy', 'mucha'], answer: 1, why: '«Lejos» es un adverbio: muy lejos.' },
            { who: 'Recepcionista', text: 'No, está cerca. Pero ___ firme aquí, por favor.', options: ['primero', 'ayer', 'allí'], answer: 0, why: '«Primero» marca la primera acción.' },
            { who: 'Visitante', text: 'Claro. ¿Y la reunión empieza ___?', options: ['ahora', 'ayer', 'allí'], answer: 0, why: 'Pregunta por el momento presente: ahora.' },
            { who: 'Recepcionista', text: 'En cinco minutos. Hoy hay ___ personas en la reunión: veinte.', options: ['muchas', 'muy', 'mucho'], answer: 0, why: '«Personas» es femenino plural: muchas.' },
          ] },
        ] },
        { title: 'Encuentra el error', blocks: [
          { kind: 'fix', items: [
            { sentence: 'El examen es mucho difícil.', ok: false, options: ['El examen es muy difícil.', 'El examen es mucha difícil.', 'El examen es muchos difícil.'], answer: 0, why: '«Difícil» es un adjetivo: muy.' },
            { sentence: 'Mi hermano duerme mucho.', ok: true, why: 'Correcta: verbo + mucho.' },
            { sentence: 'Hay mucho personas en la calle.', ok: false, options: ['Hay muy personas en la calle.', 'Hay muchas personas en la calle.', 'Hay mucha personas en la calle.'], answer: 1, why: '«Personas» es femenino plural: muchas.' },
            { sentence: 'Después de la cena, veo una película.', ok: true, why: 'Correcta: «después de» + la cena.' },
            { sentence: 'Mis amigos estudian muy.', ok: false, options: ['Mis amigos estudian muchos.', 'Mis amigos estudian mucho.', 'Mis amigos muy estudian.'], answer: 1, why: 'Con un verbo, «mucho», sin cambios.' },
            { sentence: '¿Cuando empieza la película?', ok: false, options: ['¿Cuándo empieza la película?', '¿Dónde empieza la película?', '¿Cómo empieza la película cuando?'], answer: 0, why: 'La pregunta lleva tilde: ¿Cuándo?' },
          ] },
        ] },
        { title: '¿Muy o mucho?', blocks: [
          { kind: 'classify', title: 'Clasifica cada frase según la palabra que falta', categories: [
            { id: 'muy', label: 'muy', tone: 'orange' },
            { id: 'mucho', label: 'mucho', tone: 'orange' },
          ], items: [
            { text: 'La sopa está ___ caliente.', answer: 'muy', why: '«Caliente» es un adjetivo.' },
            { text: 'Mi abuela camina ___.', answer: 'mucho', why: 'Después del verbo «camina».' },
            { text: 'Vivo ___ cerca del parque.', answer: 'muy', why: '«Cerca» es un adverbio.' },
            { text: 'En verano hace ___ calor.', answer: 'mucho', why: '«Calor» es un nombre masculino.' },
            { text: 'Tu español es ___ bueno.', answer: 'muy', why: '«Bueno» es un adjetivo.' },
            { text: 'Los niños comen ___.', answer: 'mucho', why: 'Después del verbo: no cambia, aunque «niños» es plural.' },
          ] },
        ] },
        { title: 'Construye frases', blocks: [
          { kind: 'build', title: 'Ordena las palabras', items: [
            { tiles: ['está', 'La biblioteca', 'muy', 'lejos'], accept: ['La biblioteca está muy lejos'], en: 'The library is very far.' },
            { tiles: ['leo', 'Primero', 'y después', 'escribo'], accept: ['Primero leo y después escribo'], en: 'First I read and then I write.' },
            { tiles: ['trabajo', 'Hoy', 'mucho', 'no'], accept: ['Hoy no trabajo mucho', 'No trabajo mucho hoy'], en: 'I’m not working much today.' },
            { tiles: ['están', 'Los libros', 'allí', 'al fondo'], accept: ['Los libros están allí al fondo'], en: 'The books are over there, at the back.' },
          ] },
          { kind: 'rewrite', title: 'Escribe la frase con la palabra correcta', items: [
            { prompt: 'Mi casa está lejos.', instruction: 'Añade «muy».', accept: ['Mi casa está muy lejos'] },
            { prompt: 'En la calle hay ruido.', instruction: 'Añade «mucho».', accept: ['En la calle hay mucho ruido', 'Hay mucho ruido en la calle'] },
            { prompt: 'Hay gente en la biblioteca.', instruction: 'Añade «mucho» con la forma correcta.', accept: ['Hay mucha gente en la biblioteca', 'En la biblioteca hay mucha gente'] },
            { prompt: 'Desayuno. Voy a clase.', instruction: 'Une las dos frases con «primero» y «después».', accept: ['Primero desayuno y después voy a clase', 'Primero desayuno, después voy a clase', 'Primero desayuno y luego voy a clase'] },
          ] },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Una llamada desde la biblioteca', coach: 'Primero escucha sin leer.',
      steps: [
        { title: 'Una llamada desde la biblioteca', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha con la idea general. En la segunda, el alumno anota los lugares (aquí, ahí, allí) y el orden de las acciones antes de responder.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Puedes bajar la velocidad.' } },
          { kind: 'listen', title: 'Lucía llama a una compañera', channel: 'LLAMADA · BIBLIOTECA', src: '/audio/grammar-classroom/47.mp3',
            before: 'Lucía llama a una compañera desde la biblioteca. ¿Qué crees que le explica: dónde está, qué hace o las dos cosas?',
            gist: { prompt: '¿Qué hace Lucía en la llamada?', options: ['Explica dónde está y qué va a hacer.', 'Pide ayuda porque hay mucho ruido.', 'Cancela una reunión.'], answer: 0, why: 'Dice «Estoy aquí, cerca de la ventana» y «Primero voy a leer y después voy a escribir».' },
            details: [
              { prompt: '¿Dónde está Lucía?', options: ['Cerca de la ventana.', 'Junto a la puerta.', 'En la oficina del fondo.'], answer: 0, why: '«Estoy aquí, cerca de la ventana.»' },
              { prompt: '¿Cómo está la sala?', options: ['Muy tranquila.', 'Con mucho ruido.', 'Vacía.'], answer: 0, why: '«Hoy hay mucha gente, pero la sala está muy tranquila.»' },
              { prompt: '¿Dónde está la mesa de la compañera?', options: ['Cerca de la ventana.', 'Junto a la puerta.', 'Al fondo.'], answer: 1, why: '«Tu mesa está ahí, junto a la puerta.»' },
              { prompt: '¿Qué hace Lucía primero?', options: ['Escribir.', 'Leer.', 'Ir a una reunión.'], answer: 1, why: '«Primero voy a leer y después voy a escribir.»' },
              { prompt: '¿Cuándo tiene Lucía una reunión?', options: ['Esta tarde.', 'Mañana.', 'Ahora.'], answer: 1, why: '«Mañana tengo una reunión allí, en la oficina del fondo.»' },
            ],
            transcript: 'Hola. Estoy [[aquí|blue]], cerca de la ventana. [[Hoy|teal]] hay [[mucha|orange]] gente, pero la sala está [[muy|orange]] tranquila. Tu mesa está [[ahí|blue]], junto a la puerta. [[Primero|teal]] voy a leer y [[después|teal]] voy a escribir. No trabajo [[mucho|orange]] esta tarde. [[Mañana|teal]] tengo una reunión [[allí|blue]], en la oficina del fondo.',
            reply: { teacher: 'El alumno responde a Lucía en voz alta, como si fuera la compañera: ¿dónde está ahora?, ¿qué hace primero y después?', self: 'Responde a Lucía en voz alta o por escrito: di dónde estás y qué haces primero y después. Usa «muy» o «mucho» una vez.' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Tus lugares y tu día', coach: 'Una pregunta por vez. Habla de tu vida.',
      steps: [
        { title: 'Tus lugares y tu día', blocks: [
          { kind: 'guide', text: { teacher: 'No hace falta usar todas las preguntas. Sigue lo que el alumno quiere contar, repregunta y comparte también tu experiencia.', self: 'Responde cada pregunta en voz alta, con frases cortas. Si quieres, escribe tu respuesta.' } },
          { kind: 'talk', cards: [
            { q: '¿Dónde estás ahora? Describe el lugar.', followUps: ['¿Qué hay aquí, cerca de ti?', '¿Qué cosas están allí, lejos?', '¿Es un lugar tranquilo?'], phrases: ['Estoy [[aquí|blue]], en…', '[[Allí|blue]] hay…', 'Es [[muy|orange]]…'], hint: 'Mira a tu alrededor. Di una cosa cerca de ti (aquí) y una cosa lejos (allí).', example: 'Estoy en mi casa, en la cocina. Aquí tengo mi café y mi computadora. Allí, al fondo, está la ventana. Es un lugar muy tranquilo.', next: 'Ahora, tu lugar para estudiar.', teacher: 'Tu alumno te guía hacia un objeto: «¿Dónde está tu lápiz?».' },
            { q: '¿Dónde estudias o trabajas normalmente?', followUps: ['¿Está cerca o lejos de tu casa?', '¿Hay mucha gente?', '¿Hay mucho ruido?'], phrases: ['Estudio en…', 'Está [[muy|orange]] cerca / lejos.', 'Hay [[mucha|orange]] gente.', 'No hay [[mucho|orange]] ruido.'], hint: 'Con «gente» usa «mucha». Con «ruido» usa «mucho».', example: 'Trabajo en una oficina. Está muy lejos de mi casa. Hay mucha gente y mucho ruido, pero me gusta.', next: 'Hablemos de tu día de hoy.' },
            { q: '¿Qué haces hoy? Cuéntalo en orden.', followUps: ['¿Qué haces primero?', '¿Y después?', '¿Qué haces al final del día?'], phrases: ['[[Primero|teal]]…', '[[Después|teal]]…', '[[Luego|teal]]…', '[[Al final|teal]]…'], hint: 'Di tres acciones: primero, después, al final.', example: 'Primero desayuno con mi hija. Después voy a la oficina. Al final del día, leo un libro.', next: '¿Y mañana? ¿Es igual?' },
            { q: '¿Qué vas a hacer mañana? ¿Es diferente de hoy?', followUps: ['¿Trabajas mañana?', '¿Dónde vas a estar?', '¿Mañana es un día tranquilo?'], phrases: ['[[Mañana|teal]]…', '[[Hoy|teal]]… pero [[mañana|teal]]…', 'Es un día [[muy|orange]]…'], hint: 'Compara: «Hoy trabajo, pero mañana descanso».', example: 'Hoy trabajo mucho, pero mañana no. Mañana voy al parque con mis amigos. Es un día muy tranquilo.', next: 'Ahora, algo que haces bien.' },
            { q: '¿Qué haces muy bien? ¿Y qué haces mal?', followUps: ['¿Cocinas bien?', '¿Hablas despacio o rápido en tu idioma?', '¿Qué practicas mucho?'], phrases: ['Cocino [[muy|orange]] [[bien|violet]].', 'Canto [[mal|violet]].', 'Practico [[mucho|orange]]…'], hint: 'Pon «bien» o «mal» después del verbo: «Bailo mal».', example: 'Cocino muy bien, especialmente pasta. Pero canto muy mal. Leo mucho en español.', next: 'Para terminar, tu lugar favorito.' },
            { q: '¿Cuál es tu lugar favorito en tu ciudad? ¿Por qué?', followUps: ['¿Está cerca o lejos?', '¿Cuándo vas allí?', '¿Qué haces allí?'], phrases: ['Mi lugar favorito es…', 'Voy [[allí|blue]] los…', 'Es [[muy|orange]]… y hay [[mucho|orange]] / [[mucha|orange]]…'], hint: 'Di dónde está, cuándo vas y cómo es.', example: 'Mi lugar favorito es un parque. Está muy cerca de mi casa. Voy allí los domingos por la mañana. Es muy bonito y hay mucha luz.', teacher: 'Al final, tu alumno te hace una pregunta con dónde, cuándo o cómo.' },
          ], swap: { teacher: 'Al final, cambien los papeles: el alumno te hace dos preguntas con «¿Dónde…?» y «¿Cuándo…?».', self: 'Escribe tres preguntas con «¿Dónde…?», «¿Cuándo…?» y «¿Cómo…?» y házselas a alguien esta semana.' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Un mensaje a tu compañero', coach: 'Escribe sobre tu día real.',
      steps: [
        { title: 'Un mensaje a tu compañero', blocks: [
          { kind: 'guide', text: { teacher: 'Puede escribir en clase o como tarea. Usen la revisión automática y después corrijan juntos muy y mucho.', self: 'Escribe tu mensaje y toca «Revisar mi texto». Corrige lo que te indique y vuelve a revisarlo.' } },
          { kind: 'write', title: '¿Dónde estudias hoy y mañana?', situation: 'Tu compañero de clase quiere estudiar contigo. Escríbele un mensaje con tus planes.', task: [
            'Di **dónde** estudias hoy y da una referencia: aquí, allí, cerca de…',
            'Di **cómo** es el lugar: usa **muy** y **mucho** o **mucha**.',
            'Ordena dos actividades con **primero** y **después**.',
            'Di qué haces **mañana**.',
          ], starters: ['Hola, …', 'Hoy estudio aquí, en…', 'El lugar es muy…', 'Hay mucha…', 'Primero… y después…', 'Mañana…'],
            words: ['cerca', 'lejos', 'al fondo', 'junto a', 'tranquilo', 'ruido', 'gente', 'luz', 'luego'],
            model: 'Hola, Sara: hoy estudio [[aquí|blue]], en la biblioteca. La sala es [[muy|orange]] tranquila y hay [[mucha|orange]] luz. Mi mesa está [[allí|blue]], junto a la ventana. [[Primero|teal]] leo y [[después|teal]] escribo. [[Mañana|teal]] trabajo en casa. ¿Vienes [[hoy|teal]]?',
            minWords: 30 },
        ] },
      ],
    },
    {
      id: 'cerrar', label: 'Cerrar', icon: '✓', mascot: '/brand/mascot/standing.webp',
      title: 'Lo esencial', coach: '¿Qué te llevas hoy?',
      steps: [
        { title: 'Lo esencial', blocks: [
          { kind: 'recap', items: [
            { tone: 'blue', label: 'DÓNDE', formula: 'aquí · ahí · allí', example: 'Los libros están allí, al fondo.', caption: 'Cerca de mí, cerca de ti, lejos.', en: 'here · there · over there' },
            { tone: 'teal', label: 'CUÁNDO', formula: 'hoy · mañana · primero → después', example: 'Primero leo y después escribo.', caption: 'El momento y el orden.', en: 'today · tomorrow · first → then' },
            { tone: 'orange', label: 'MUY · MUCHO', formula: 'muy + adjetivo · verbo + mucho · mucha + nombre', example: 'Es muy tranquila. Trabajo mucho. Hay mucha gente.', caption: 'Muy no cambia; mucho cambia solo delante de un nombre.', en: 'very · a lot' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'Mira la palabra de al lado', text: '¿Un adjetivo o un adverbio? **Muy**. ¿Un verbo? **Mucho**. ¿Un nombre? **Mucho, mucha, muchos, muchas**.' },
        ] },
        { title: 'Desafío final', blocks: [
          { kind: 'choice', title: 'Cuatro frases, sin ayuda', items: [
            { prompt: 'La biblioteca está ___ lejos.', options: ['muy', 'mucho', 'mucha'], answer: 0, why: '«Lejos» es un adverbio: muy lejos.' },
            { prompt: 'Trabajo ___ en la biblioteca.', options: ['muy', 'mucho', 'mucha'], answer: 1, why: 'Después del verbo: mucho.' },
            { prompt: 'Tienes el libro en tu mesa. Te digo: «Tu libro está ___».', options: ['aquí', 'ahí', 'allí'], answer: 1, why: 'El libro está cerca de la otra persona: ahí.' },
            { prompt: '___ la clase, voy al gimnasio.', options: ['Después', 'Después de', 'Primero de'], answer: 1, why: 'Hay una palabra detrás (la clase): después de.' },
          ] },
        ] },
        { title: 'Tus errores y repaso', blocks: [
          { kind: 'review' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: completa «La biblioteca está … lejos y trabajo … allí». Respuesta: muy lejos; trabajo mucho allí. Pide al alumno que explique por qué.' },
        ] },
      ],
    },
  ],
};
