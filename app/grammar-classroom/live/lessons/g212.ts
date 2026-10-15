import type { LiveLesson } from '../types';

/**
 * Lesson 212 · A1 · Creo que, porque y para.
 * Two classmates, Sara and Leo, choose a place to study: the pair runs through the class.
 */
export const lesson: LiveLesson = {
  id: 212,
  level: 'A1',
  title: 'Creo que, porque y para',
  subtitle: 'Dar una opinión simple, explicar una razón y decir para qué haces algo.',
  legend: [
    { tone: 'blue', label: 'Creo que · una opinión' },
    { tone: 'teal', label: 'Porque · una razón' },
    { tone: 'orange', label: 'Para + infinitivo · un objetivo' },
    { tone: 'violet', label: '¿Por qué? · la pregunta' },
  ],
  optionNotes: {
    porque: '«Porque» da una razón y va con un verbo conjugado: «porque hay ruido».',
    Porque: '«Porque» da una razón y va con un verbo conjugado: «porque hay ruido».',
    'por qué': '«Por qué», separado y con tilde, es para preguntar: «¿Por qué estudias?».',
    'Por qué': '«Por qué», separado y con tilde, es para preguntar: «¿Por qué estudias?».',
    que: '«Que» va después de «creo» para presentar una opinión: «Creo que es útil».',
    para: '«Para» dice el objetivo y va con un infinitivo: «para practicar».',
    Para: '«Para» dice el objetivo y va con un infinitivo: «para practicar».',
    'creo que': '«Creo que» presenta tu opinión y después va una frase completa.',
    'Creo que': '«Creo que» presenta tu opinión y después va una frase completa.',
    creo: 'Falta «que»: «Creo **que** la clase es útil».',
    Creo: 'Falta «que»: «Creo **que** la clase es útil».',
    practico: 'Después de «para» va el infinitivo: «para practicar».',
    aprendo: 'Después de «para» va el infinitivo: «para aprender».',
    trabajar: 'Después de «porque» va un verbo conjugado: «porque trabajo».',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Opinión, razón y objetivo', coach: 'Tres preguntas: ¿qué piensas?, ¿por qué?, ¿para qué?',
      steps: [
        { title: 'Creo que + una idea', blocks: [
          { kind: 'lead', text: 'Sara y Leo estudian español juntos. Hoy buscan un lugar para estudiar. Sara dice: «**Creo que** la biblioteca es buena. Voy allí **porque** hay silencio. Llego temprano **para** revisar el libro».', en: 'An opinion, a reason and a goal.' },
          { kind: 'guide', text: { teacher: 'Lee los ejemplos y tu alumno da una opinión suya sobre su ciudad con «Creo que…».', self: 'Lee los ejemplos en voz alta. Después di una opinión tuya con «Creo que…».' } },
          { kind: 'concept', tone: 'blue', label: 'CREO QUE', question: '¿Qué piensas?', en: 'I think (that)', formula: ['creo que + frase completa (con verbo)'],
            meaning: '«Creo que» presenta **tu opinión**. Después de «que» va una frase completa, con su propio verbo.',
            examples: [
              { es: '[[Creo que|blue]] la biblioteca es un buen lugar.', en: 'I think the library is a good place.' },
              { es: '[[Creo que|blue]] este barrio es tranquilo.', en: 'I think this neighbourhood is quiet.' },
              { es: '[[Creo que|blue]] el español es fácil.', en: 'I think Spanish is easy.' },
              { es: 'Leo [[cree que|blue]] la cafetería es mejor.', en: 'Leo thinks the café is better.' },
            ],
            note: 'Con otra persona cambia el verbo: yo **creo**, tú **crees**, él / ella **cree**.' },
          { kind: 'tip', icon: '!', title: 'No olvides «que»', text: 'En inglés puedes decir «I think it is good» sin «that». En español, «que» es necesario: «Creo **que** es bueno».', en: '«que» is never dropped.' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: '¿Qué frase es correcta?', options: ['Creo la clase es útil.', 'Creo que la clase es útil.', 'Creo que útil.'], answer: 1, why: '«Creo que» + una frase completa con verbo: «la clase es útil».' },
            { prompt: 'Tú ___ que la cafetería es mejor.', options: ['creo', 'crees', 'cree'], answer: 1, why: 'Con «tú», el verbo es «crees».' },
          ] },
        ] },
        { title: 'Porque + una razón', mascot: '/brand/mascot/studying.webp', coach: 'Una pregunta, una respuesta.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'PORQUE', question: '¿Por qué?', en: 'because', formula: ['idea + porque + verbo conjugado'],
            meaning: '«Porque» explica **la razón** o la causa. Después va una frase con un verbo conjugado (estudio, hay, tiene…).',
            examples: [
              { es: 'Estudio en la biblioteca [[porque|teal]] mi casa tiene mucho ruido.', en: 'I study at the library because my house is noisy.' },
              { es: 'Estudio español [[porque|teal]] viajo mucho.', en: 'I study Spanish because I travel a lot.' },
              { es: 'No voy a la cafetería [[porque|teal]] hay muchas personas.', en: 'I don’t go to the café because there are lots of people.' },
              { es: 'Me gusta este barrio [[porque|teal]] es tranquilo.', en: 'I like this neighbourhood because it is quiet.' },
            ] },
          { kind: 'compare', title: 'Pregunta y respuesta', columns: [
            { tone: 'violet', label: '¿POR QUÉ?', sentence: '¿[[Por qué|violet]] estudias español?', idea: 'Dos palabras, con tilde: es la **pregunta**.', en: 'why?' },
            { tone: 'teal', label: 'PORQUE', sentence: 'Estudio español [[porque|teal]] viajo mucho.', idea: 'Una palabra, sin tilde: es la **respuesta**.', en: 'because' },
          ] },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: '¿___ llegas tarde?', options: ['Porque', 'Por qué', 'Para'], answer: 1, why: 'Es una pregunta: «¿Por qué…?», en dos palabras y con tilde.' },
            { prompt: 'Llego tarde ___ hay mucho tráfico.', options: ['para', 'por qué', 'porque'], answer: 2, why: 'Es la razón: «porque» + verbo conjugado (hay).' },
          ] },
        ] },
        { title: 'Para + infinitivo', mascot: '/brand/mascot/speaking.webp', coach: '¿Para qué? Para + un verbo sin conjugar.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'PARA + INFINITIVO', question: '¿Para qué?', en: 'to / in order to', formula: ['acción + para + infinitivo (-ar, -er, -ir)'],
            meaning: '«Para» dice **el objetivo** de una acción: qué quieres conseguir. Después va el **infinitivo**: practicar, aprender, escribir.',
            examples: [
              { es: 'Voy temprano [[para preparar|orange]] mis preguntas.', en: 'I go early to prepare my questions.' },
              { es: 'Voy al mercado [[para comprar|orange]] fruta.', en: 'I go to the market to buy fruit.' },
              { es: 'Llevo mi cuaderno [[para escribir|orange]] las palabras nuevas.', en: 'I take my notebook to write down new words.' },
              { es: 'Leo viene [[para practicar|orange]] español conmigo.', en: 'Leo comes to practise Spanish with me.' },
            ] },
          { kind: 'tip', icon: '🔑', title: 'El verbo decide', text: 'Después de **porque** va un verbo **conjugado**: «porque **trabajo**». Después de **para** va un **infinitivo**: «para **trabajar**».', en: 'porque + conjugated verb; para + infinitive.' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'Uso una aplicación para ___ palabras nuevas.', options: ['aprendo', 'aprender', 'aprendes'], answer: 1, why: 'Después de «para» va el infinitivo: «aprender».' },
            { prompt: 'Voy a la biblioteca ___ leer.', options: ['porque', 'para', 'por qué'], answer: 1, why: '«Leer» es infinitivo y es el objetivo: «para leer».' },
          ] },
        ] },
        { title: 'Cómo elegir', mascot: '/brand/mascot/seated.webp', coach: '¿Qué piensas, por qué, para qué?', blocks: [
          { kind: 'table', title: 'Tres preguntas, tres respuestas', head: ['Pregunta', 'Respuesta', 'Después va…', 'Ejemplo'], rows: [
            ['¿Qué piensas?', '[[creo que|blue]]', 'una frase completa', '[[Creo que|blue]] es útil.'],
            ['¿[[Por qué|violet]]?', '[[porque|teal]]', 'un verbo conjugado', '[[Porque|teal]] viajo mucho.'],
            ['¿Para qué?', '[[para|orange]]', 'un infinitivo', '[[Para|orange]] hablar con amigos.'],
          ] },
          { kind: 'decide', title: 'Piensa en tu frase y responde', steps: [
            { q: '¿Das tu opinión?', yes: 'Usa **creo que + frase**: «[[Creo que|blue]] la clase es útil».', no: 'next' },
            { q: '¿Explicas la causa (lo que pasa antes o lo que ya es así)?', yes: 'Usa **porque + verbo conjugado**: «Estudio [[porque|teal]] viajo».', no: 'Usa **para + infinitivo** para el objetivo: «Estudio [[para viajar|orange]]».' },
          ] },
          { kind: 'compare', title: 'Misma acción, dos ideas', columns: [
            { tone: 'teal', label: 'RAZÓN', sentence: 'Estudio español [[porque|teal]] tengo amigos en México.', idea: 'La causa: ya tengo amigos allí.', en: 'because' },
            { tone: 'orange', label: 'OBJETIVO', sentence: 'Estudio español [[para hablar|orange]] con mis amigos.', idea: 'Lo que quiero conseguir.', en: 'in order to' },
          ] },
        ] },
        { title: 'Errores frecuentes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Estos errores son muy comunes.', blocks: [
          { kind: 'guide', text: { teacher: 'Tu alumno busca el error antes de que muestres la corrección.', self: 'Lee cada frase, busca el error y después toca para ver la corrección.' } },
          { kind: 'mistakes', title: '¿Dónde está el error?', items: [
            { wrong: 'Creo la biblioteca es buena.', right: 'Creo que la biblioteca es buena.', why: 'En español, «que» es necesario después de «creo».' },
            { wrong: 'Estudio para aprendo.', right: 'Estudio para aprender.', why: 'Después de «para» va el infinitivo.' },
            { wrong: '¿Porque estudias español?', right: '¿Por qué estudias español?', why: 'La pregunta va en dos palabras y con tilde.' },
            { wrong: 'Voy al gimnasio porque estar bien.', right: 'Voy al gimnasio para estar bien.', why: 'Es un objetivo con infinitivo: «para estar bien». O la razón: «porque quiero estar bien».' },
            { wrong: 'Estudio español por viajar.', right: 'Estudio español para viajar.', why: 'El objetivo con infinitivo se dice con «para».' },
          ] },
          { kind: 'teacher', text: 'Pregunta «¿Por qué estudias español?» y después «¿Para qué?». Pide las dos respuestas y compara el verbo: conjugado o infinitivo.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'Las palabras en situaciones reales', coach: 'Toca las expresiones marcadas.',
      steps: [
        { title: 'Un lugar para estudiar', blocks: [
          { kind: 'guide', text: { teacher: 'Lean el diálogo con papeles. Después, el alumno toca cada expresión y explica por qué se usó.', self: 'Lee la conversación. Después toca cada expresión marcada para descubrir por qué se usó.' } },
          { kind: 'explore', title: 'Mensajes después de clase', setting: 'Sara y Leo tienen un examen el viernes. Deciden dónde estudiar.', lines: [
            { who: 'Leo', text: 'Sara, ¿estudiamos juntos mañana?' },
            { who: 'Sara', text: '¡Sí! [[Creo que|blue]] la biblioteca es un buen lugar.' },
            { who: 'Leo', text: '¿[[Por qué|violet]] la biblioteca? Yo prefiero la cafetería.' },
            { who: 'Sara', text: '[[Porque hay silencio|teal]]. En la cafetería hay muchas personas.' },
            { who: 'Leo', text: 'Sí, pero en la cafetería podemos hablar.' },
            { who: 'Sara', text: 'Bueno, voy a la cafetería después, [[para practicar|orange]] la conversación contigo.' },
            { who: 'Leo', text: 'Perfecto. ¿A qué hora vas a la biblioteca?' },
            { who: 'Sara', text: 'A las cuatro. Voy temprano [[para revisar|orange]] el libro.' },
            { who: 'Leo', text: 'Yo llego a las cinco [[porque trabajo|teal]] hasta las cuatro y media.' },
            { who: 'Sara', text: 'No hay problema. [[Creo que|blue]] una hora es suficiente para mí.' },
          ], notes: {
            'Creo que': 'Sara da **su opinión**. Después de «que» hay una frase completa: «la biblioteca es un buen lugar».',
            'Por qué': 'Leo **pregunta** la razón: «por qué», en dos palabras y con tilde.',
            'Porque hay silencio': 'La **respuesta** a «¿por qué?»: una razón con verbo conjugado (hay).',
            'para practicar': 'El **objetivo** de ir a la cafetería: para + infinitivo.',
            'para revisar': 'Para qué llega temprano: el objetivo, con infinitivo.',
            'porque trabajo': 'La **causa** de llegar a las cinco: verbo conjugado (trabajo).',
          } },
          { kind: 'choice', title: '¿Entendiste?', items: [
            { prompt: '¿Por qué prefiere Sara la biblioteca?', options: ['Porque hay silencio.', 'Porque está cerca.', 'Porque abre temprano.'], answer: 0, why: '«Porque hay silencio».' },
            { prompt: '¿Para qué va Sara a la cafetería después?', options: ['Para comer.', 'Para practicar la conversación.', 'Para revisar el libro.'], answer: 1, why: '«…para practicar la conversación contigo».' },
            { prompt: '¿Por qué llega Leo a las cinco?', options: ['Porque está cansado.', 'Porque trabaja hasta las cuatro y media.', 'Para revisar el libro.'], answer: 1, why: '«Porque trabajo hasta las cuatro y media».' },
          ] },
        ] },
        { title: '¿Razón u objetivo?', blocks: [
          { kind: 'classify', title: 'Clasifica las frases', categories: [
            { id: 'opinion', label: 'Opinión', tone: 'blue' },
            { id: 'razon', label: 'Razón', tone: 'teal' },
            { id: 'objetivo', label: 'Objetivo', tone: 'orange' },
          ], items: [
            { text: 'Creo que la biblioteca es un buen lugar.', answer: 'opinion', why: '«Creo que»: Sara dice lo que piensa.' },
            { text: '…porque hay silencio.', answer: 'razon', why: '«Porque» + verbo conjugado: la causa.' },
            { text: '…para practicar la conversación.', answer: 'objetivo', why: '«Para» + infinitivo: lo que quiere conseguir.' },
            { text: '…porque trabajo hasta las cuatro y media.', answer: 'razon', why: 'La causa de llegar tarde.' },
            { text: '…para revisar el libro.', answer: 'objetivo', why: 'El objetivo de llegar temprano.' },
            { text: 'Creo que una hora es suficiente.', answer: 'opinion', why: 'Otra opinión de Sara.' },
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
            { context: 'Explicas la causa.', prompt: 'Como en casa ___ es más barato.', options: ['porque', 'para', 'por qué'], answer: 0, why: 'Es la razón, con verbo conjugado (es).' },
            { context: 'Dices tu objetivo.', prompt: 'Voy al parque ___ correr.', options: ['porque', 'para', 'que'], answer: 1, why: '«Correr» es infinitivo: el objetivo, con «para».' },
            { context: 'Das tu opinión sobre la clase.', prompt: 'Creo ___ la clase es muy útil.', options: ['para', 'porque', 'que'], answer: 2, why: '«Creo que» + frase completa.' },
            { context: 'Preguntas a un amigo.', prompt: '¿___ no vienes a la fiesta?', options: ['Por qué', 'Porque', 'Para'], answer: 0, why: 'Una pregunta por la razón: «¿Por qué…?».' },
            { context: 'Explicas para qué sirve un objeto.', prompt: 'Uso el teléfono para ___ fotos.', options: ['saco', 'sacar', 'sacas'], answer: 1, why: 'Después de «para» va el infinitivo.' },
            { context: 'Explicas por qué estás feliz.', prompt: 'Estoy feliz porque ___ vacaciones.', options: ['tener', 'tengo', 'para tener'], answer: 1, why: 'Después de «porque» va un verbo conjugado.' },
          ] },
        ] },
        { title: 'Compara los significados', blocks: [
          { kind: 'choice', items: [
            { prompt: '¿Qué frase dice **el objetivo**?', options: ['Estudio español porque mi pareja es mexicana.', 'Estudio español para hablar con la familia de mi pareja.'], answer: 1, why: '«Para + infinitivo» dice lo que quiero conseguir.' },
            { prompt: '¿Qué frase es **una opinión**?', options: ['Creo que este café es muy bueno.', 'Tomo café para despertarme.'], answer: 0, why: '«Creo que» presenta lo que piensa la persona.' },
            { prompt: '«Voy en bicicleta porque no tengo coche.» ¿Qué dice la frase?', options: ['El objetivo de ir en bicicleta.', 'La causa de ir en bicicleta.', 'Una opinión sobre la bicicleta.'], answer: 1, why: '«Porque» da la causa: no tengo coche.' },
            { prompt: '¿Cuál es **la pregunta** correcta?', options: ['¿Porque estudias?', '¿Por qué estudias?', '¿Por que estudias?'], answer: 1, why: 'La pregunta: «¿Por qué…?», en dos palabras y con tilde. Sin tilde no es correcta.' },
          ] },
        ] },
        { title: 'Completa la conversación', blocks: [
          { kind: 'chat-fill', title: 'En la escuela de idiomas', lines: [
            { who: 'Profesora', text: 'Hola, Tom. ¿___ estudias español?', options: ['Por qué', 'Porque', 'Para'], answer: 0, why: 'La profesora pregunta la razón.' },
            { who: 'Tom', text: '___ mi novia es de Colombia.', options: ['Para', 'Porque', 'Por qué'], answer: 1, why: 'La respuesta con la causa: «porque» + verbo conjugado.' },
            { who: 'Profesora', text: '¡Qué bien! ¿Y para qué quieres hablar español?' },
            { who: 'Tom', text: 'Para ___ con su familia.', options: ['hablo', 'hablar', 'hablas'], answer: 1, why: '«Para» + infinitivo.' },
            { who: 'Profesora', text: '¿Qué te parece el español?' },
            { who: 'Tom', text: 'Creo ___ es bonito, pero difícil.', options: ['que', 'porque', 'para'], answer: 0, why: 'Opinión: «creo que» + frase.' },
            { who: 'Tom', text: 'Por eso tengo clases ___ practicar más.', options: ['porque', 'para', 'que'], answer: 1, why: 'El objetivo de las clases: «para» + infinitivo.' },
          ] },
        ] },
        { title: 'Encuentra el error', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Creo el examen es fácil.', ok: false, options: ['Creo que el examen es fácil.', 'Creo para el examen es fácil.', 'Creo porque el examen es fácil.'], answer: 0, why: 'Falta «que» después de «creo».' },
            { sentence: 'Voy al mercado para comprar pan.', ok: true, why: 'Correcta: «para» + infinitivo.' },
            { sentence: 'Estudio mucho para tengo un examen.', ok: false, options: ['Estudio mucho para tener un examen.', 'Estudio mucho porque tengo un examen.', 'Estudio mucho por qué tengo un examen.'], answer: 1, why: 'Tener un examen es la causa, no el objetivo: «porque» + verbo conjugado.' },
            { sentence: '¿Por qué no vienes?', ok: true, why: 'Correcta: la pregunta en dos palabras y con tilde.' },
            { sentence: 'Llevo el cuaderno para escribo las palabras.', ok: false, options: ['Llevo el cuaderno para escribir las palabras.', 'Llevo el cuaderno porque escribir las palabras.', 'Llevo el cuaderno por qué escribo las palabras.'], answer: 0, why: 'Después de «para» va el infinitivo: «escribir».' },
          ] },
        ] },
        { title: 'Construye frases', blocks: [
          { kind: 'build', title: 'Ordena las palabras', items: [
            { tiles: ['que', 'Creo', 'es', 'el barrio', 'tranquilo'], accept: ['Creo que el barrio es tranquilo'], en: 'I think the neighbourhood is quiet.' },
            { tiles: ['porque', 'Estudio', 'en la biblioteca', 'hay silencio'], accept: ['Estudio en la biblioteca porque hay silencio'], en: 'I study at the library because it is quiet.' },
            { tiles: ['para', 'Voy', 'al mercado', 'comprar fruta'], accept: ['Voy al mercado para comprar fruta'], en: 'I go to the market to buy fruit.' },
          ] },
          { kind: 'rewrite', title: 'Escribe la frase de otra forma', items: [
            { prompt: 'La clase es útil. (Es mi opinión.)', instruction: 'Empieza con «Creo que…».', accept: ['Creo que la clase es útil'] },
            { prompt: 'Voy al gimnasio. Mi objetivo: estar en forma.', instruction: 'Une las ideas con «para».', accept: ['Voy al gimnasio para estar en forma'] },
            { prompt: 'No salgo. Tengo un examen mañana.', instruction: 'Une las ideas con «porque».', accept: ['No salgo porque tengo un examen mañana', 'No salgo porque mañana tengo un examen'] },
            { prompt: 'Estudias español. (Pregunta la razón.)', instruction: 'Escribe la pregunta.', accept: ['¿Por qué estudias español?', 'Por qué estudias español'] },
          ] },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Una propuesta para estudiar', coach: 'Primero escucha sin leer.',
      steps: [
        { title: 'Una propuesta para estudiar', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha para la idea general. En la segunda, el alumno anota las razones (porque) y los objetivos (para) antes de responder.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Puedes bajar la velocidad.' } },
          { kind: 'listen', title: 'Un mensaje de Sara', channel: 'NOTA DE VOZ · PARA LEO', src: '/audio/grammar-classroom/212.mp3',
            before: 'Sara le deja una nota de voz a Leo sobre la clase de hoy. ¿Qué lugar crees que propone?',
            gist: { prompt: '¿Qué propone Sara?', options: ['Estudiar hoy en la biblioteca.', 'Ir a la cafetería para comer.', 'Cancelar la clase.'], answer: 0, why: '«Creo que podemos estudiar en la biblioteca hoy».' },
            details: [
              { prompt: '¿Por qué prefiere la biblioteca?', options: ['Porque hay poco ruido.', 'Porque está cerca.', 'Porque es grande.'], answer: 0, why: '«Prefiero ese lugar porque hay poco ruido».' },
              { prompt: '¿A qué hora va?', options: ['A las dos.', 'A las cuatro.', 'A las cinco.'], answer: 1, why: '«Voy a las cuatro…».' },
              { prompt: '¿Para qué va a esa hora?', options: ['Para comer algo.', 'Para revisar el libro antes de la clase.', 'Para hablar con la profesora.'], answer: 1, why: '«…para revisar el libro antes de la clase».' },
              { prompt: '¿Para qué lleva el cuaderno?', options: ['Para escribir las palabras nuevas.', 'Para hacer la tarea.', 'Para dibujar.'], answer: 0, why: '«También llevo mi cuaderno para escribir las palabras nuevas».' },
              { prompt: '¿Qué opina de la cafetería?', options: ['Que es más tranquila.', 'Que está cerca, pero la biblioteca es más tranquila.', 'Que es muy cara.'], answer: 1, why: '«La cafetería está cerca, pero creo que la biblioteca es más tranquila».' },
            ],
            transcript: 'Hola. [[Creo que|blue]] podemos estudiar en la biblioteca hoy. Prefiero ese lugar [[porque|teal]] hay poco ruido. Voy a las cuatro [[para revisar|orange]] el libro antes de la clase. También llevo mi cuaderno [[para escribir|orange]] las palabras nuevas. ¿Tú puedes venir a esa hora? La cafetería está cerca, pero [[creo que|blue]] la biblioteca es más tranquila para hablar de nuestras preguntas.',
            reply: { teacher: 'El alumno responde en voz alta como si fuera Leo: ¿puede ir a las cuatro? Debe dar una razón con «porque» y un objetivo con «para».', self: 'Responde a Sara como si fueras Leo: ¿puedes ir a las cuatro? Usa «porque» y «para» al menos una vez.' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Tus razones y tus objetivos', coach: 'Di qué piensas, por qué y para qué.',
      steps: [
        { title: 'Tus razones y tus objetivos', blocks: [
          { kind: 'guide', text: { teacher: 'No hace falta usar todas las preguntas. Sigue lo que el alumno quiere contar, repregunta con «¿Por qué?» y «¿Para qué?» y comparte también tu experiencia.', self: 'Responde cada pregunta en voz alta, con frases completas. Si quieres, escribe tu respuesta.' } },
          { kind: 'talk', cards: [
            { q: '¿Por qué estudias español?', followUps: ['¿Desde cuándo estudias?', '¿Para qué quieres hablar español?'], phrases: ['Estudio español [[porque|teal]]…', 'Quiero hablar español [[para viajar|orange]]…', '[[Creo que|blue]] es…'], hint: 'Primero la razón con «porque». Después el objetivo con «para».', example: 'Estudio español porque mi pareja es de Perú. Quiero hablar español para conversar con su familia.', next: 'Ahora hablemos de dónde estudias.', teacher: 'Si responde solo «porque sí», pide un ejemplo concreto: «¿Cuándo usas el español?».' },
            { q: '¿Dónde estudias mejor: en casa, en una biblioteca o en una cafetería?', followUps: ['¿Por qué ese lugar?', '¿Qué no te gusta de los otros lugares?'], phrases: ['Estudio en… [[porque|teal]]…', '[[Creo que|blue]] la biblioteca es…', 'En casa hay…'], hint: 'Da tu opinión con «Creo que…» y una razón con «porque».', example: 'Estudio en casa porque es cómodo. Creo que la cafetería es divertida, pero hay mucho ruido.', next: 'Ahora piensa en tu bolso o tu mochila.' },
            { q: '¿Qué cosas llevas en tu bolso o mochila? ¿Para qué?', followUps: ['¿Qué cosa es la más importante?', '¿Llevas algo especial?'], phrases: ['Llevo… [[para|orange]] + infinitivo.', 'Llevo agua [[para beber|orange]].', 'Llevo un libro [[para leer|orange]] en el autobús.'], hint: 'Cada cosa con su objetivo: «para» + infinitivo.', example: 'Llevo el teléfono para hablar con mi familia, agua para beber y un libro para leer en el autobús.', next: 'Hablemos de tus días.' },
            { q: '¿Qué haces los fines de semana para descansar?', followUps: ['¿Por qué te gusta?', '¿Qué haces para estar en forma?'], phrases: ['[[Para descansar|orange]], …', 'Me gusta… [[porque|teal]]…', '[[Creo que|blue]] es importante…'], hint: 'Puedes empezar la frase con «Para descansar, …».', example: 'Para descansar, camino por el parque. Me gusta porque hay árboles y silencio. Creo que es importante salir de casa.', next: 'Ahora, una opinión sobre tu ciudad.' },
            { q: '¿Qué piensas de tu ciudad? ¿Es un buen lugar para vivir?', followUps: ['¿Por qué?', '¿Qué cambias en tu ciudad?'], phrases: ['[[Creo que|blue]] mi ciudad es…', '…[[porque|teal]] hay…', 'Es buena [[para vivir|orange]] / [[para estudiar|orange]].'], hint: 'Una opinión, una razón y, si quieres, para quién es buena.', example: 'Creo que mi ciudad es un buen lugar para vivir porque hay parques y el transporte es bueno.', next: 'Para terminar, un plan para tu español.' },
            { q: '¿Qué haces esta semana para practicar español?', followUps: ['¿Por qué esa actividad?', '¿Qué es lo más difícil para ti?'], phrases: ['Veo series [[para escuchar|orange]]…', 'Leo… [[porque|teal]]…', '[[Creo que|blue]]…'], hint: 'Di dos actividades y su objetivo.', example: 'Escucho música en español para aprender palabras nuevas. Creo que es divertido porque canto también.' },
          ], swap: { teacher: 'Al final, cambien los papeles: el alumno pregunta al profesor «¿Por qué…?» y «¿Para qué…?».', self: 'Escribe dos preguntas, una con «¿Por qué…?» y otra con «¿Para qué…?», y házselas a alguien esta semana.' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Un mensaje para estudiar juntos', coach: 'Escribe a un compañero real.',
      steps: [
        { title: 'Un mensaje para estudiar juntos', blocks: [
          { kind: 'guide', text: { teacher: 'Puede escribir en clase o como tarea. Usen la revisión automática y después corrijan juntos lo que la revisión no ve.', self: 'Escribe tu mensaje y toca «Revisar mi texto». Corrige lo que te indique y vuelve a revisarlo.' } },
          { kind: 'write', title: 'Propón un lugar de estudio', situation: 'Tienes un examen de español. Escribe a un compañero o una compañera para estudiar juntos.', task: [
            'Da tu opinión sobre un lugar con **creo que**.',
            'Explica una razón con **porque**.',
            'Di dos objetivos con **para** + infinitivo.',
            'Termina con una pregunta: la hora o el día.',
          ], starters: ['Hola, …', 'Creo que…', 'Prefiero… porque…', 'Voy temprano para…', 'Llevo… para…', '¿Puedes venir…?'],
            words: ['la biblioteca', 'mi casa', 'una cafetería', 'silencio', 'ruido', 'revisar', 'practicar', 'preparar', 'el cuaderno', 'el libro'],
            model: 'Hola, Ana. [[Creo que|blue]] la biblioteca es buena para estudiar. Prefiero ir allí [[porque|teal]] hay poco ruido. Voy temprano [[para revisar|orange]] el libro y llevo mi cuaderno [[para escribir|orange]] las palabras nuevas. ¿Puedes venir a las cuatro?',
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
            { tone: 'blue', label: 'CREO QUE', formula: 'creo que + frase', example: 'Creo que la clase es útil.', caption: 'Tu opinión.', en: 'I think' },
            { tone: 'teal', label: 'PORQUE', formula: 'porque + verbo conjugado', example: 'Estudio porque viajo mucho.', caption: 'La razón.', en: 'because' },
            { tone: 'orange', label: 'PARA', formula: 'para + infinitivo', example: 'Estudio para viajar.', caption: 'El objetivo.', en: 'to / in order to' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'Mira el verbo', text: '**Porque** + verbo conjugado (viajo). **Para** + infinitivo (viajar). Y en la pregunta: **¿Por qué?**, en dos palabras.' },
        ] },
        { title: 'Desafío final', blocks: [
          { kind: 'choice', title: 'Cuatro frases, sin ayuda', items: [
            { prompt: 'Ahorro dinero ___ comprar una bicicleta.', options: ['porque', 'para', 'que'], answer: 1, why: 'Objetivo + infinitivo.' },
            { prompt: 'No como carne ___ soy vegetariana.', options: ['para', 'por qué', 'porque'], answer: 2, why: 'La razón, con verbo conjugado.' },
            { prompt: 'Creo ___ mañana llueve.', options: ['que', 'porque', 'para'], answer: 0, why: 'Opinión: «creo que» + frase.' },
            { prompt: '¿___ te gusta este barrio?', options: ['Porque', 'Por qué', 'Para'], answer: 1, why: 'Pregunta por la razón.' },
          ] },
        ] },
        { title: 'Tus errores y repaso', blocks: [
          { kind: 'review' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «Estudio porque viajo» y «Estudio para viajar»: ¿qué diferencia hay? La primera da la causa; la segunda, el objetivo.' },
        ] },
      ],
    },
  ],
};
