// LES-001 «La feria de Villaluz» · A2 · authoritative content data (DRAFT).
//
// Author: Martin (CLRQO). G4 review: Alejandro or a fresh agent (never Martin).
// Builder: Sofia. Decision: docs/board/decisions/LESSON-DECISION-001-feria-de-villaluz.md
// v5 (locked) + BOARD-DECISION-001 overlays (G1 objective + 3–6 exponents per
// circle, N1 beat labels, routes as data with the N4/E1 label).
//
// The world (FeriaGame.tsx) reads this file as is; the listening is
// app/escucha-3d/content/feria/a2.json (`feria` in app/escucha-3d/games.mjs).
// Validate with: node scripts/check-feria.mjs
//
// Shape (house style of app/hospital-san-casi-vivo/levels/a2.mjs, plus BD-001 fields):
// - title, line, dialogue ([castKey | '*Extra', text]), talk (5), words (6): as in the hospital.
// - objective (primary A2 id), related (review ids), exponents (3–6, G1).
// - beats, in order. kind "contrast" = linguistic contrast: exactly one correct
//   option; every wrong option names the `feature` it gets wrong and its
//   `feedback` says why; a wrong pick shows the feedback and lets the class
//   choose again; the right pick shows `feedback`, then `after`.
//   kind "stimulus" = conversation stimulus: never scored. Either `options`
//   in the hospital shape (say / reply / end / mood: the class picks one and
//   says it) or `frames` (open reply, the frames are only a start).
// - timeline: one first-person past sentence per stimulus option (the pick
//   stored in sessionStorage, AM-7/D2) for the closing narrative at «baile».
// - teacher: the teacher note shown in the teacher list.
// - Circles 1/6/7 (Busca y describe) are NOT authored yet: they wait for
//   Sofia's rendered Look-attribute contract (AM-4, §7 risk 2).
//
// Language: neutral international Spanish. tú by default; older stall
// keepers speak usted to customers, and the class answers in their register.
// Banned in this game (AC7): verbena, «me pone», apetece, vaqueros, jersey.

export const SPOTS = ['informacion', 'churreria', 'tombola', 'noria', 'artesania', 'escenario', 'fotos', 'baile'];

// One voice per character for the whole world (scenes and listenings), from
// app/escucha-3d/voices.json. `listening` = speaks only in a listening.
export const CAST = {
  rosario: { name: 'Rosario', full: 'Rosario Benítez', role: 'Encargada del puesto de información', gender: 'f', voice: 'es-PY-TaniaNeural', country: 'Paraguay' },
  hernan: { name: 'Hernán', full: 'Don Hernán Godoy', role: 'Visitante que busca sus llaves', gender: 'm', voice: 'es-AR-TomasNeural', country: 'Argentina', listening: true },
  ernesto: { name: 'Ernesto', full: 'Don Ernesto Ledesma', role: 'Churrero', gender: 'm', voice: 'es-CU-ManuelNeural', country: 'Cuba' },
  yesenia: { name: 'Yesenia', full: 'Yesenia Ledesma', role: 'Hija de Ernesto, en la caja', gender: 'f', voice: 'es-CU-BelkysNeural', country: 'Cuba' },
  fabiola: { name: 'Fabiola', full: 'Fabiola Rentería', role: 'Dueña de la tómbola', gender: 'f', voice: 'es-VE-PaolaNeural', country: 'Venezuela' },
  ivan: { name: 'Iván', full: 'Iván Rentería', role: 'Sobrino de Fabiola', gender: 'm', voice: 'es-VE-SebastianNeural', country: 'Venezuela', listening: true },
  camilo: { name: 'Camilo', full: 'Camilo Ospina', role: 'Tu amigo', gender: 'm', voice: 'es-CO-GonzaloNeural', country: 'Colombia' },
  abelardo: { name: 'Abelardo', full: 'Don Abelardo Funes', role: 'Encargado de la noria', gender: 'm', voice: 'es-SV-RodrigoNeural', country: 'El Salvador' },
  marta: { name: 'Marta', full: 'Marta Quiñónez', role: 'Vende las entradas de la noria', gender: 'f', voice: 'es-GT-MartaNeural', country: 'Guatemala' },
  nayeli: { name: 'Nayeli', full: 'Nayeli Cruz', role: 'Artesana de tazas de barro', gender: 'f', voice: 'es-MX-DaliaNeural', country: 'México' },
  wilfredo: { name: 'Wilfredo', full: 'Don Wilfredo Choque', role: 'Vende bufandas de lana', gender: 'm', voice: 'es-BO-MarceloNeural', country: 'Bolivia' },
  facundo: { name: 'Facundo', full: 'Facundo Silva', role: 'Guitarrista de la banda', gender: 'm', voice: 'es-UY-MateoNeural', country: 'Uruguay', listening: true },
  daniela: { name: 'Daniela', full: 'Daniela Fuentes', role: 'Técnica de sonido', gender: 'f', voice: 'es-CL-CatalinaNeural', country: 'Chile', listening: true },
  lorenzo: { name: 'Lorenzo', full: 'Lorenzo Araya', role: 'Fotógrafo de la feria', gender: 'm', voice: 'es-CL-LorenzoNeural', country: 'Chile' },
  paloma: { name: 'Paloma', full: 'Paloma Ríos', role: 'Viene con toda su familia', gender: 'f', voice: 'es-US-PalomaNeural', country: 'Estados Unidos', listening: true },
  celia: { name: 'Celia', full: 'Doña Celia Paredes', role: 'Abuela que baila en la plaza', gender: 'f', voice: 'es-PR-KarinaNeural', country: 'Puerto Rico' },
  julian: { name: 'Julián', full: 'Julián Paredes', role: 'Nieto de Celia', gender: 'm', voice: 'es-PE-AlexNeural', country: 'Perú' },
};

// Reserved for circle 6 (the singer), authored with the Look contract.
export const RESERVED_VOICES = { valentina: 'es-UY-ValentinaNeural' };

const BLOCKED = 'BLOCKED: waits for the rendered Look-attribute contract (Sofia, LESSON-DECISION-001 AM-4, §7 risk 2).';

export const CIRCLES = {
  informacion: { status: BLOCKED, objective: 'a2.gram.relativo-que', related: ['a1.voc.descripcion-personas', 'a1.voc.ropa-colores'] },

  churreria: {
    title: 'Churros para todo el grupo',
    place: 'La churrería de don Ernesto',
    objective: 'a2.gram.condicional-cortesia',
    related: ['a1.fun.pedir-restaurante'],
    exponents: [
      { id: 'queria', form: 'Quería…, por favor', use: 'pedir con cortesía en un puesto o una tienda' },
      { id: 'podrias', form: '¿Podrías / Podría + infinitivo?', use: 'pedir un cambio con cortesía (tú / usted)' },
      { id: 'me-gustaria', form: 'Me gustaría + infinitivo', use: 'decir lo que quieres con suavidad' },
    ],
    line: 'La churrería de don Ernesto huele a canela. La fila llega casi hasta la noria. Tu grupo te espera en una mesa y tú tienes la lista: seis churros y dos chocolates calientes, uno sin azúcar para tu amiga Lucía.',
    dialogue: [
      ['*Un señor con prisa', 'Dame una docena de churros. Rápido, que empieza el concierto.'],
      ['ernesto', '¿Rápido? Los churros buenos no tienen reloj, señor. Cinco minutos.'],
      ['*Un señor con prisa', 'Cinco minutos es mucho.'],
      ['ernesto', 'Entonces son seis. Uno más por hablar.'],
      ['yesenia', 'Papá, no lo asustes. Señor, le llevo los churros a la mesa. Siéntese tranquilo.'],
    ],
    beats: [
      {
        id: 'pedir', kind: 'contrast', label: 'Contraste lingüístico', exponent: ['queria'], who: 'yesenia',
        context: 'Por fin te toca. Yesenia sonríe detrás de la caja: «¡Siguiente! Hola, ¿qué te sirvo?»',
        prompt: 'Pide con amabilidad seis churros y dos chocolates calientes.',
        options: [
          { id: 'queria', label: 'Hola. Quería seis churros y dos chocolates calientes, por favor.', correct: true,
            feedback: 'Bien: «quería» suaviza el pedido. Es la forma amable de pedir en un puesto, una tienda o un café.' },
          { id: 'dame', label: 'Dame seis churros y dos chocolates calientes.', correct: false, feature: 'cortesía',
            feedback: 'Cortesía: «dame» se entiende, pero suena a orden, como el señor con prisa. Con una persona que no conoces, pide con «quería…, por favor».' },
          { id: 'quiere', label: 'Hola. Quiere seis churros y dos chocolates calientes, por favor.', correct: false, feature: 'persona del verbo',
            feedback: 'Persona del verbo: «quiere» habla de otra persona (él, ella o usted). Para pedir para ti, usa «quería» (yo).' },
        ],
        after: '«Seis churros y dos chocolates. Perfecto.»',
      },
      {
        id: 'cambiar', kind: 'contrast', label: 'Contraste lingüístico', exponent: ['podrias'], who: 'yesenia',
        context: 'Yesenia ya está poniendo azúcar en los dos chocolates. Lucía no toma azúcar.',
        prompt: 'Pídele con amabilidad que deje uno sin azúcar.',
        options: [
          { id: 'puedo', label: 'Perdona, ¿puedo dejar uno sin azúcar? Es para mi amiga.', correct: false, feature: 'quién hace la acción',
            feedback: 'Quién hace la acción: «¿puedo…?» pide permiso para hacerlo tú. Quieres que lo haga ella: «¿podrías…?».' },
          { id: 'podrias', label: 'Perdona, ¿podrías dejar uno sin azúcar? Es para mi amiga.', correct: true,
            feedback: 'Bien: «¿podrías + infinitivo?» pide un cambio con cortesía. Yesenia te habla de tú, por eso «podrías».' },
          { id: 'dejas', label: 'Perdona, ¿podrías dejas uno sin azúcar? Es para mi amiga.', correct: false, feature: 'infinitivo después de «podrías»',
            feedback: 'Infinitivo: después de «podrías» va el verbo sin conjugar. Se dice «¿podrías dejar…?», no «¿podrías dejas…?».' },
        ],
        after: '«¡Uy, justo a tiempo! Uno sin azúcar para tu amiga.»',
      },
      {
        id: 'probar', kind: 'contrast', label: 'Contraste lingüístico', exponent: ['me-gustaria'], who: 'yesenia',
        context: 'En la pizarra del puesto hay algo nuevo: «Churro relleno de chocolate». Te da curiosidad.',
        prompt: 'Dile a Yesenia, con suavidad, que también quieres probar el churro relleno.',
        options: [
          { id: 'gustarias', label: 'También me gustarías probar el churro relleno.', correct: false, feature: 'concordancia de gustar',
            feedback: 'Concordancia de gustar: el verbo no va con la persona, va con lo que gusta. Aquí lo que gusta es «probar», así que «me gustaría», nunca «me gustarías».' },
          { id: 'gustara', label: 'También me gustará probar el churro relleno.', correct: false, feature: 'condicional de cortesía',
            feedback: 'Condicional de cortesía: «me gustará» es futuro y habla de un gusto que vas a tener. Para pedir algo ahora, con suavidad, usa «me gustaría».' },
          { id: 'gustaria', label: 'También me gustaría probar el churro relleno.', correct: true,
            feedback: 'Bien: «me gustaría + infinitivo» dice lo que quieres de una forma suave.' },
        ],
        after: '«Buena idea. Es el primer día que lo hacemos. Ahora te lo llevo.»',
      },
      {
        id: 'ernesto', kind: 'stimulus', label: 'Estímulo de conversación', who: 'ernesto',
        ask: 'Don Ernesto se limpia las manos y te mira muy serio: «Pregunta importante: ¿los churros se comen solos, con azúcar o con chocolate?»',
        options: [
          { say: 'Con chocolate, claro. Me gustaría probarlos con el de su receta.', reply: '¡Eso! La receta es de mi papá. Nadie la conoce, ni Yesenia.', end: 'Yesenia mira al cielo: ella sabe la receta desde los doce años. Don Ernesto te regala un churro.', mood: 'love' },
          { say: 'Solos. Así se nota si el churro es bueno.', reply: 'Mmm. Una persona seria. Me gusta. Entonces pruebe este, recién hecho.', end: 'Pruebas el churro solo. Está tan caliente que no puedes hablar durante un minuto.', mood: 'surprised' },
          { say: 'Con azúcar y con chocolate. ¿Por qué solo uno?', reply: '¡Ja! Esa es la respuesta de un experto.', end: 'Don Ernesto les cuenta tu respuesta a todos en la fila. La fila aplaude. El señor con prisa no.', mood: 'laugh' },
        ],
        teacher: 'No hay respuesta correcta. Que la clase vote y que una persona diga la frase elegida en voz alta, mirando a don Ernesto.',
      },
    ],
    timeline: [
      'En la churrería probé los churros con chocolate y don Ernesto me regaló uno.',
      'En la churrería probé un churro solo, recién hecho, y casi me quemé.',
      'En la churrería probé los churros con azúcar y con chocolate, y la fila aplaudió.',
    ],
    talk: [
      '¿Qué comida de la calle te gusta más? ¿Dónde la compras?',
      '¿Cómo pides en un café de tu ciudad? ¿Qué dices exactamente?',
      '¿Alguna vez te trajeron algo diferente de lo que pediste? ¿Qué hiciste?',
      '¿Prefieres esperar en una fila larga por algo muy bueno o comer algo normal sin esperar?',
      '¿Qué comida típica de tu país le recomendarías a un turista?',
    ],
    words: ['la churrería', 'la fila', 'quería…, por favor', '¿podrías…?', 'sin azúcar', 'recién hecho'],
    teacher: 'Antes de proyectar, pregunta cómo piden en un café. Después del círculo, escribe en la pizarra: quiero → quería, puedes → podrías, me gusta → me gustaría. Aclara que «dame» no es un error de gramática: es una elección de cortesía. Extensión (2 min): en parejas, uno es Yesenia y el otro pide para su grupo con una petición especial.',
  },

  tombola: {
    title: 'El oso de la tómbola',
    place: 'La tómbola de Fabiola',
    objective: 'a2.fun.favores',
    related: ['a2.gram.se-lo'],
    exponents: [
      { id: 'te-lo-guardo', form: '¿Me guardas…? → Sí, te lo guardo', use: 'aceptar un favor con pronombres' },
      { id: 'me-presta', form: '¿Me presta…? → Se la devuelvo…', use: 'pedir algo prestado y prometer devolverlo' },
      { id: 'te-lo-puedo', form: 'Te lo puedo llevar / Puedo llevártelo', use: 'colocar los pronombres con poder + infinitivo' },
    ],
    line: 'En la tómbola de Fabiola hay premios de todos los tamaños. El más grande es un oso de peluche casi tan alto como una persona. Tu amigo Camilo compró un boleto, solo por diversión.',
    dialogue: [
      ['fabiola', '¡Número cuarenta y siete! ¡El oso gigante es para el cuarenta y siete!'],
      ['camilo', '¡Soy yo! ¡Gané! Yo nunca gano nada.'],
      ['fabiola', 'Felicidades. Aquí lo tienes. Cuidado, que pesa más que mi sobrino.'],
      ['camilo', 'Ay, no... Mi mamá me escribió. Tengo que ir a ayudarla con su puesto de empanadas. Ahora mismo.'],
    ],
    beats: [
      {
        id: 'guardar', kind: 'contrast', label: 'Contraste lingüístico', exponent: ['te-lo-guardo'], who: 'camilo',
        context: 'Camilo te pone el oso en los brazos: «¿Me guardas el oso hasta el baile? Vuelvo a las diez.»',
        prompt: 'Dile que sí, que le guardas el oso.',
        options: [
          { id: 'me-lo', label: 'Sí, claro. Me lo guardo.', correct: false, feature: 'persona que recibe el favor',
            feedback: 'Persona que recibe el favor: «me lo guardo» quiere decir que el oso es para ti. El favor es para Camilo: «te lo guardo».' },
          { id: 'te-la', label: 'Sí, claro. Te la guardo.', correct: false, feature: 'género del pronombre',
            feedback: 'Género del pronombre: «el oso» es masculino, así que «lo». «La» sería para una cosa femenina, por ejemplo una bolsa.' },
          { id: 'te-lo', label: 'Sí, claro. Te lo guardo.', correct: true,
            feedback: 'Bien: «te» es Camilo, que recibe el favor, y «lo» es el oso.' },
        ],
        after: '«¡Eres lo máximo! Nos vemos en el baile.» Y Camilo se va corriendo.',
      },
      {
        id: 'prestar', kind: 'contrast', label: 'Contraste lingüístico', exponent: ['me-presta'], who: 'fabiola',
        context: 'El oso no cabe en ningún lado. Detrás del puesto, Fabiola tiene una bolsa enorme. Te mira y se ríe: «¿Y cómo se lo va a llevar, joven?»',
        prompt: 'Fabiola te habla de usted. Pídele prestada la bolsa grande y prométele devolvérsela antes de las diez.',
        options: [
          { id: 'se-la', label: '¿Me presta esa bolsa grande? Se la devuelvo antes de las diez.', correct: true,
            feedback: 'Bien: «¿me presta…?» pide el favor con usted, y en «se la devuelvo», «se» es Fabiola y «la» es la bolsa.' },
          { id: 'se-lo', label: '¿Me presta esa bolsa grande? Se lo devuelvo antes de las diez.', correct: false, feature: 'género del pronombre',
            feedback: 'Género del pronombre: «la bolsa» es femenina, así que «se la devuelvo». «Se lo» sería para el oso.' },
          { id: 'le-la', label: '¿Me presta esa bolsa grande? Le la devuelvo antes de las diez.', correct: false, feature: 'combinación de pronombres',
            feedback: 'Combinación de pronombres: delante de lo, la, los o las, «le» cambia a «se». No se dice «le la», se dice «se la».' },
        ],
        after: '«Claro que sí. Es la bolsa de los premios, así que cuídemela, ¿eh?»',
      },
      {
        id: 'mensaje', kind: 'contrast', label: 'Contraste lingüístico', exponent: ['te-lo-puedo'], who: 'camilo',
        context: 'Te llega un mensaje de Camilo: «Perdón, voy a llegar tarde. ¿Me puedes llevar el oso al baile?»',
        prompt: 'Contéstale que sí, que se lo puedes llevar.',
        options: [
          { id: 'puedo-te-lo', label: 'Sí, puedo te lo llevar. Tranquilo.', correct: false, feature: 'lugar de los pronombres',
            feedback: 'Lugar de los pronombres: van antes del verbo conjugado («te lo puedo llevar») o pegados al infinitivo («puedo llevártelo»), nunca en medio.' },
          { id: 'te-lo-puedo', label: 'Sí, te lo puedo llevar. Tranquilo.', correct: true,
            feedback: 'Bien: con «poder + infinitivo», los pronombres van delante: «te lo puedo llevar». También se dice «puedo llevártelo».' },
          { id: 'te-puedo-lo', label: 'Sí, te puedo lo llevar. Tranquilo.', correct: false, feature: 'pronombres juntos',
            feedback: 'Pronombres juntos: «te» y «lo» no se separan. Van los dos delante («te lo puedo llevar») o los dos detrás («puedo llevártelo»).' },
        ],
        after: 'Camilo te manda tres osos pequeños en el mensaje.',
      },
      {
        id: 'fabiola', kind: 'stimulus', label: 'Estímulo de conversación', who: 'fabiola',
        ask: 'Fabiola se acerca: «Oiga, y ahora usted me hace un favor a mí. Mi sobrino fue a buscar hielo y yo tengo que ir al baño. ¿Me cuida el puesto cinco minutos?»',
        options: [
          { say: 'Claro, se lo cuido. Pero no sé vender boletos.', reply: 'No importa. Usted sonríe y dice «¡suerte!». Eso es todo.', end: 'En cinco minutos vendes doce boletos. El oso te mira desde la bolsa, muy orgulloso.', mood: 'smile' },
          { say: 'Lo siento, no puedo: tengo que llevar este oso a un lugar seguro.', reply: '¿Seguro? Ese oso está más seguro aquí que en el banco.', end: 'Fabiola le pide el favor a la señora del puesto de al lado. Las dos se ríen de tu oso.', mood: 'laugh' },
          { say: 'Sí, se lo cuido, pero solo si me regala un boleto.', reply: '¡Qué negociante! Bueno, uno. Pero si gana, me devuelve el oso.', end: 'Tu boleto no gana nada. Fabiola dice que es el destino: un oso por noche, nada más.', mood: 'surprised' },
        ],
        teacher: 'No hay respuesta correcta. Escucha si contestan en usted, como Fabiola, y si dan una razón cuando dicen que no.',
      },
    ],
    timeline: [
      'En la tómbola le cuidé el puesto a Fabiola cinco minutos.',
      'En la tómbola no pude cuidar el puesto: tuve que llevar el oso de Camilo a un lugar seguro.',
      'En la tómbola le cuidé el puesto a Fabiola y ella me regaló un boleto.',
    ],
    talk: [
      '¿Ganaste alguna vez un premio? ¿Qué era?',
      '¿Qué cosas les guardas a tus amigos o a tu familia?',
      '¿A quién le pides prestadas cosas? ¿Qué cosas?',
      '¿Qué favor no le haces nunca a nadie? ¿Por qué?',
      '¿Hay ferias o fiestas con juegos de premios en tu ciudad? ¿Cómo son?',
    ],
    words: ['la tómbola', 'el boleto', 'el premio', 'el oso de peluche', 'guardar', 'prestar'],
    teacher: 'Mismo objetivo que el círculo gratuito de Noche Abierta (GROW-001, «El ascensor no funciona»), con otra situación y otras formas: aquí el foco es guardar, prestar y el lugar de los pronombres con «poder + infinitivo». En la pizarra: te lo guardo, se la devuelvo, te lo puedo llevar = puedo llevártelo. Glosario: en muchos países la tómbola también se llama «rifa».',
  },

  noria: {
    title: 'Una entrada de más',
    place: 'La noria',
    objective: 'a2.fun.reclamar',
    related: ['a2.gram.condicional-cortesia'],
    exponents: [
      { id: 'explicar-error', form: 'Perdone, creo que hay un error: compré… y me cobró…', use: 'explicar el problema con hechos en indefinido' },
      { id: 'me-podria', form: '¿Me podría + infinitivo…, por favor?', use: 'pedir una solución con cortesía' },
      { id: 'hablar-con', form: 'Quería hablar con el encargado, por favor', use: 'pedir hablar con la persona responsable' },
    ],
    line: 'La noria de Villaluz es lo más alto de la feria. Desde arriba se ve el río. Compraste dos entradas en la taquilla de Marta, una para ti y otra para Lucía. Ahora miras el recibo y lees: «3 entradas».',
    dialogue: [
      ['abelardo', '¡Bajen con cuidado! La noria se para diez minutos. Hay que revisar una luz.'],
      ['*Una señora con dos niños', '¿Diez minutos? Llevamos media hora en la fila.'],
      ['abelardo', 'Lo siento, señora. Primero la seguridad. Después, las vueltas.'],
      ['marta', 'Tranquilos, todo el mundo. Cuando vuelva a funcionar, la vuelta es más bonita: ya se ve toda la feria con luces.'],
    ],
    beats: [
      {
        id: 'error', kind: 'contrast', label: 'Contraste lingüístico', exponent: ['explicar-error'], who: 'marta',
        context: 'Vuelves a la taquilla con el recibo en la mano. Marta te habla de usted: «¿Sí? ¿En qué le ayudo?»',
        prompt: 'Explícale el problema con cortesía.',
        options: [
          { id: 'cobre', label: 'Perdone, creo que hay un error. Compré dos entradas y me cobré tres.', correct: false, feature: 'persona del verbo',
            feedback: 'Persona del verbo: «me cobré» dice que lo hiciste tú. Te cobró ella: «me cobró».' },
          { id: 'compro', label: 'Perdone, creo que hay un error. Compro dos entradas y me cobra tres.', correct: false, feature: 'tiempo del verbo',
            feedback: 'Tiempo del verbo: la compra ya pasó y está terminada. Para hechos terminados, usa el indefinido: «compré», «cobró».' },
          { id: 'cobro', label: 'Perdone, creo que hay un error. Compré dos entradas y me cobró tres.', correct: true,
            feedback: 'Bien: «perdone, creo que hay un error» abre con cortesía, y el indefinido cuenta los hechos: compré, cobró.' },
        ],
        after: '«A ver... Sí, la máquina dice tres. Tiene razón, perdone.»',
      },
      {
        id: 'devolver', kind: 'contrast', label: 'Contraste lingüístico', exponent: ['me-podria'], who: 'marta',
        context: 'Marta mira la pantalla de la máquina y espera.',
        prompt: 'Pídele con cortesía que te devuelva el dinero de una entrada.',
        options: [
          { id: 'te-podria', label: '¿Te podría devolver el dinero de una entrada, por favor?', correct: false, feature: 'dirección de la acción',
            feedback: 'Dirección de la acción: «¿te podría devolver…?» ofrece devolverle tú el dinero a ella. El dinero vuelve a ti: «¿me podría devolver…?».' },
          { id: 'me-podria', label: '¿Me podría devolver el dinero de una entrada, por favor?', correct: true,
            feedback: 'Bien: «¿me podría + infinitivo?» pide la solución con cortesía y con usted, como te habla Marta.' },
          { id: 'devuelve', label: '¿Me podría devuelve el dinero de una entrada, por favor?', correct: false, feature: 'infinitivo después de «podría»',
            feedback: 'Infinitivo: después de «podría» va el verbo sin conjugar. Se dice «¿me podría devolver…?».' },
        ],
        after: '«Ay, yo no puedo devolver dinero. Solo el encargado puede.»',
      },
      {
        id: 'encargado', kind: 'contrast', label: 'Contraste lingüístico', exponent: ['hablar-con'], who: 'marta',
        context: 'Marta se encoge de hombros. Detrás de ti, la fila empieza a protestar.',
        prompt: 'Pide hablar con el encargado, con cortesía.',
        options: [
          { id: 'hablo', label: 'Hablo con el encargado.', correct: false, feature: 'petición o afirmación',
            feedback: 'Petición o afirmación: «hablo con el encargado» informa de lo que haces, no lo pide. Para pedir con cortesía: «quería hablar con el encargado, por favor».' },
          { id: 'quería', label: 'Entonces quería hablar con el encargado, por favor.', correct: true,
            feedback: 'Bien: «quería hablar con…» pide con suavidad, sin enfadarte. Y «hablar con» lleva siempre «con».' },
          { id: 'al', label: 'Entonces quería hablar al encargado, por favor.', correct: false, feature: 'preposición de «hablar»',
            feedback: 'Preposición: se habla «con» una persona. Se dice «hablar con el encargado», no «hablar al encargado».' },
        ],
        after: 'Don Abelardo baja de la noria con una linterna: «El encargado soy yo. A ver ese recibo... Sí, la máquina de cobrar es más vieja que yo.»',
      },
      {
        id: 'abelardo', kind: 'stimulus', label: 'Estímulo de conversación', who: 'abelardo',
        ask: 'Don Abelardo te devuelve el recibo: «Usted decide: le devuelvo el dinero de una entrada o le doy una vuelta extra gratis. ¿Qué prefiere?»',
        options: [
          { say: 'Prefiero el dinero, gracias. Lo necesito para los churros.', reply: 'Muy práctico. Aquí tiene. Pero la fila de los churros es peor que esta, ¿eh?', end: 'Don Abelardo cuenta las monedas dos veces. Marta escribe «¡OJO!» en la máquina.', mood: 'laugh' },
          { say: 'La vuelta extra, por favor. Me gustaría ver la feria desde arriba otra vez.', reply: 'Buena decisión. De noche, desde arriba, se ve hasta el río.', end: 'Lucía y tú dan dos vueltas. En la segunda, la noria se para justo arriba, solo un minuto.', mood: 'smile' },
          { say: 'Las dos cosas no, ¿verdad? Pero ¿podría revisar la máquina? Le pasa a mucha gente.', reply: 'Tiene razón. Mañana viene un técnico. Gracias por decírmelo con tanta educación.', end: 'Don Abelardo te da el dinero y te deja pasar primero. La señora de los dos niños te aplaude.', mood: 'surprised' },
        ],
        teacher: 'No hay respuesta correcta. Después, pregunta: ¿qué opción les parece más justa? ¿Reclaman así en su país?',
      },
    ],
    timeline: [
      'En la noria hubo un error con las entradas y me devolvieron el dinero.',
      'En la noria hubo un error con las entradas y di una vuelta extra gratis.',
      'En la noria hubo un error con las entradas y hablé con el encargado.',
    ],
    talk: [
      '¿Cuál fue la última vez que reclamaste algo? ¿Qué pasó?',
      '¿Revisas siempre el recibo cuando pagas?',
      '¿Qué haces cuando un servicio es malo: reclamas, te vas o no dices nada?',
      '¿Te gustan las atracciones altas, como la noria? ¿Por qué?',
      '¿En tu país es normal pedir hablar con el encargado? ¿Cuándo?',
    ],
    words: ['la noria', 'la taquilla', 'la entrada', 'el recibo', 'cobrar', 'el encargado'],
    teacher: 'Antes del círculo, pregunta: ¿cómo empiezan una reclamación? Después, escribe la secuencia en la pizarra: 1. «Perdone, creo que hay un error.» 2. El hecho en indefinido: «compré…, me cobró…». 3. La petición: «¿me podría…?». 4. Si no hay solución: «quería hablar con el encargado». Extensión (3 min): en parejas, reclaman otro problema de la feria (un churro frío, una vuelta muy corta).',
  },

  artesania: {
    title: 'El regalo de cumpleaños',
    place: 'El puesto de artesanía',
    objective: 'a2.fun.comparar-elegir',
    related: ['a2.gram.comparativos'],
    exponents: [
      { id: 'tan-como', form: 'tan + adjetivo + como', use: 'decir que dos cosas son iguales' },
      { id: 'mas-que', form: 'más / menos + adjetivo + que', use: 'comparar dos cosas diferentes' },
      { id: 'mejor-que', form: 'mejor / peor que', use: 'comparar la calidad o la utilidad (formas irregulares)' },
    ],
    line: 'Mañana es el cumpleaños de tu hermana y todavía no tienes regalo. En el puesto de Nayeli hay tazas de barro de colores. Al lado, don Wilfredo vende bufandas de lana.',
    dialogue: [
      ['nayeli', 'Todas las tazas las hago yo, con barro del río. Por eso ninguna es igual.'],
      ['wilfredo', 'Y mis bufandas las teje mi esposa, con lana de verdad. Abrigan más que tres chaquetas.'],
      ['nayeli', 'Don Wilfredo, usted siempre exagera. ¿Tres chaquetas?'],
      ['wilfredo', 'Bueno... dos. Pero muy buenas.'],
    ],
    beats: [
      {
        id: 'tazas', kind: 'contrast', label: 'Contraste lingüístico', exponent: ['tan-como'], who: 'nayeli',
        context: 'Te gustan dos tazas: una azul y grande, y una verde y pequeña. Nayeli te enseña los precios: las dos cuestan lo mismo.',
        prompt: 'Compara las dos tazas: el precio es igual, el tamaño no.',
        options: [
          { id: 'tan-como', label: 'La taza azul es tan cara como la verde, pero es más grande.', correct: true,
            feedback: 'Bien: «tan cara como» dice que el precio es igual, y «más grande» dice la diferencia.' },
          { id: 'tan-que', label: 'La taza azul es tan cara que la verde, pero es más grande.', correct: false, feature: 'tan… como',
            feedback: 'Tan… como: para decir que dos cosas son iguales, la pareja es «tan… como», no «tan… que».' },
          { id: 'mas-cara', label: 'La taza azul es más cara que la verde, pero es más grande.', correct: false, feature: 'significado de la comparación',
            feedback: 'Significado: «más cara que» dice que la azul cuesta más. Las dos cuestan lo mismo: «tan cara como».' },
        ],
        after: '«Exacto. Y la azul es para el café de la mañana: cabe mucho café.»',
      },
      {
        id: 'bufanda', kind: 'contrast', label: 'Contraste lingüístico', exponent: ['mas-que'], who: 'wilfredo',
        context: 'Don Wilfredo te pone una bufanda roja en las manos. Es preciosa, pero cuesta el doble que una taza.',
        prompt: 'Di que la bufanda cuesta más que la taza.',
        options: [
          { id: 'de', label: 'La bufanda es más cara de la taza.', correct: false, feature: 'más… que',
            feedback: 'Más… que: cuando comparas dos cosas, la pareja es «más… que». Se dice «más cara que la taza».' },
          { id: 'caro', label: 'La bufanda es más caro que la taza.', correct: false, feature: 'concordancia del adjetivo',
            feedback: 'Concordancia: el adjetivo va con «la bufanda», que es femenina: «más cara», no «más caro».' },
          { id: 'cara', label: 'La bufanda es más cara que la taza.', correct: true,
            feedback: 'Bien: «más + adjetivo + que», y el adjetivo concuerda con la bufanda: «cara».' },
        ],
        after: '«Más cara, sí. Pero dura más que tú y yo juntos.»',
      },
      {
        id: 'regalo', kind: 'contrast', label: 'Contraste lingüístico', exponent: ['mejor-que'], who: 'nayeli',
        context: 'Nayeli te pregunta: «¿Y tu hermana dónde vive? Para un regalo, ¿qué es mejor: la taza o la bufanda?» Tu hermana vive en una ciudad muy fría.',
        prompt: 'Contesta: para tu hermana, la bufanda es mejor.',
        options: [
          { id: 'mas-buena', label: 'Para mi hermana, la bufanda es más buena que la taza: vive en una ciudad muy fría.', correct: false, feature: 'comparativo irregular',
            feedback: 'Comparativo irregular: para la calidad o la utilidad de una cosa, «bueno» compara con «mejor». Se dice «es mejor que la taza».' },
          { id: 'mejor-que', label: 'Para mi hermana, la bufanda es mejor que la taza: vive en una ciudad muy fría.', correct: true,
            feedback: 'Bien: «mejor que» es la forma irregular de «más bueno que». Y das la razón: vive en una ciudad fría.' },
          { id: 'mejor-de', label: 'Para mi hermana, la bufanda es mejor de la taza: vive en una ciudad muy fría.', correct: false, feature: 'mejor que',
            feedback: 'Mejor que: cuando comparas dos cosas, después de «mejor» va «que». Se dice «mejor que la taza».' },
        ],
        after: 'Don Wilfredo levanta los brazos: «¡Por fin alguien con sentido común!»',
      },
      {
        id: 'decidir', kind: 'stimulus', label: 'Estímulo de conversación', who: 'wilfredo',
        ask: 'Nayeli y don Wilfredo te miran a la vez: «Bueno, ¿qué se lleva al final?»',
        options: [
          { say: 'Me llevo la bufanda. Es más cara, pero va a durar más.', reply: '¡Eso! Las cosas buenas duran más que las modas.', end: 'Nayeli te regala una taza muy pequeña «para tu hermana, de mi parte».', mood: 'love' },
          { say: 'Me llevo la taza azul. Es más barata y a mi hermana le encanta el café.', reply: 'Muy buena elección. Y tiene un color tan bonito como el río.', end: 'Don Wilfredo dice que tu hermana va a tener frío, pero con un café muy rico.', mood: 'smile' },
          { say: 'No sé... ¿Me hacen un precio especial por las dos cosas?', reply: '¿Las dos? Nayeli, esto es una negociación seria.', end: 'Después de cinco minutos de números, te llevas las dos cosas por un precio mejor que en las tiendas del centro.', mood: 'laugh' },
        ],
        teacher: 'No hay respuesta correcta. Pide que cada persona justifique su elección con una comparación: «es más…», «es tan… como», «es mejor que…».',
      },
    ],
    timeline: [
      'En el puesto de artesanía compré una bufanda para mi hermana.',
      'En el puesto de artesanía compré una taza azul para mi hermana.',
      'En el puesto de artesanía compré una taza y una bufanda, con descuento.',
    ],
    talk: [
      '¿Qué fue el último regalo que compraste? ¿Para quién?',
      '¿Prefieres regalar cosas útiles o cosas bonitas? ¿Por qué?',
      '¿Compras en mercados o ferias de artesanía? ¿Qué compras?',
      '¿Qué es mejor para ti: una cosa hecha a mano o una cosa de tienda?',
      'Compara dos tiendas de tu ciudad. ¿Cuál es mejor y por qué?',
    ],
    words: ['la artesanía', 'el barro', 'la lana', 'la bufanda', 'abrigar', 'el regalo'],
    teacher: 'Lleva dos objetos reales a clase (o dos fotos) y pide comparaciones antes de empezar. Después del círculo, en la pizarra: más/menos + adjetivo + que, tan + adjetivo + como, bueno → mejor, malo → peor. Recuerda que el adjetivo concuerda: «la bufanda es más cara». Extensión (3 min): en parejas, eligen un regalo para alguien de la clase entre dos opciones y lo justifican.',
  },

  escenario: { status: BLOCKED, objective: 'a2.gram.estar-gerundio', related: ['a2.gram.relativo-que'] },
  fotos: { status: BLOCKED, objective: 'a2.gram.imperativo-pronombres', related: ['a1.gram.preposiciones-lugar'] },

  baile: {
    title: 'El baile de la plaza',
    place: 'La plaza mayor',
    objective: 'a2.fun.anecdota',
    related: ['a1.fun.invitar', 'a2.disc.secuenciar'],
    exponents: [
      { id: 'reaccionar', form: '¿En serio? / ¡No me digas! / ¿Y qué pasó después?', use: 'reaccionar a la anécdota de otra persona' },
      { id: 'quieres-inf', form: '¿Quieres + infinitivo?', use: 'invitar a alguien' },
      { id: 'aceptar-rechazar', form: '¡Claro, me encantaría! / Lo siento, es que…', use: 'aceptar o rechazar con una excusa amable' },
      { id: 'fondo-imperfecto', form: 'Cuando llegué, había… / hacía…', use: 'poner el fondo de la historia en imperfecto' },
      { id: 'secuencia-indefinido', form: 'Primero fui…, después estuve…, luego…, al final…', use: 'contar lo que pasó, en orden, en indefinido' },
    ],
    line: 'Es el final de la noche. En la plaza toca una banda y bailan personas de todas las edades. Doña Celia, una señora de ochenta años, baila sola cerca de la fuente. Su nieto Julián la mira desde un banco.',
    dialogue: [
      ['celia', '¿Ves esa esquina de la plaza? Ahí conocí a mi marido, hace cuarenta y dos años.'],
      ['julian', 'Abuela, esa historia ya la sé.'],
      ['celia', 'Tú sí, pero tu amigo no. Esa noche llovía y casi no había gente. Él no sabía bailar.'],
      ['julian', 'Y te pisó tres veces.'],
      ['celia', 'Cuatro. Pero al final de la noche me acompañó a casa, con su chaqueta en mi cabeza por la lluvia.'],
      ['julian', 'Y al día siguiente volvió con flores.'],
      ['celia', 'Con flores no: con una bolsa de churros. Por eso me casé con él.'],
    ],
    beats: [
      {
        id: 'reaccion', kind: 'stimulus', label: 'Estímulo de conversación', exponent: ['reaccionar'], who: 'celia',
        ask: 'Doña Celia termina su historia y te mira. Espera tu reacción.',
        options: [
          { say: '¿En serio? ¿Con churros? ¡Qué romántico!', reply: 'Romántico y práctico. Las flores no se comen.', end: 'Julián se ríe por primera vez en toda la noche.', mood: 'laugh' },
          { say: '¡No me digas! ¿Y él aprendió a bailar después?', reply: 'Nunca. Cuarenta años pisándome. Y yo, feliz.', end: 'Doña Celia mira la esquina de la plaza un momento, en silencio.', mood: 'love' },
          { say: '¿Y qué pasó después? ¿Cuándo se casaron?', reply: 'Un año después, en esta misma plaza. Con baile, claro.', end: 'Doña Celia saca una foto vieja del bolso. En la foto, los dos bailan bajo la lluvia.', mood: 'smile' },
        ],
        teacher: 'No hay respuesta correcta. Después, pregunta qué otras reacciones conocen («¡Qué bonito!», «¡Qué fuerte!») y anótalas.',
      },
      {
        id: 'invitar', kind: 'contrast', label: 'Contraste lingüístico', exponent: ['quieres-inf'], who: 'celia',
        context: 'Doña Celia señala a Julián: «Mi nieto nunca baila. Invítalo tú, a ver si te dice que sí.»',
        prompt: 'Invita a Julián a bailar.',
        options: [
          { id: 'bailando', label: '¿Quieres bailando, Julián? La música está buenísima.', correct: false, feature: 'infinitivo después de «querer»',
            feedback: 'Infinitivo: después de «quieres» va el verbo sin conjugar: «¿quieres bailar?». «Bailando» es el gerundio.' },
          { id: 'a-bailar', label: '¿Quieres a bailar, Julián? La música está buenísima.', correct: false, feature: 'querer sin preposición',
            feedback: 'Sin preposición: «querer» va directo con el infinitivo. Se dice «¿quieres bailar?», sin «a».' },
          { id: 'bailar', label: '¿Quieres bailar, Julián? La música está buenísima.', correct: true,
            feedback: 'Bien: «¿quieres + infinitivo?» es la forma más natural de invitar. También puedes decir «¿te gustaría bailar?».' },
        ],
        after: 'Julián se pone rojo, pero se levanta. Baila mal, pero baila.',
      },
      {
        id: 'juego-de-roles', kind: 'stimulus', label: 'Estímulo de conversación', exponent: ['aceptar-rechazar'], who: 'julian',
        context: 'Después de bailar, Julián te invita a ti: «Oye, mañana mi abuela hace una comida en su casa, con toda la familia. ¿Quieres venir?»',
        prompt: 'Juego de roles en parejas: uno es Julián y el otro contesta de verdad. Después, cambian.',
        frames: [
          { id: 'si', label: '¡Claro, me encantaría! ¿A qué hora?' },
          { id: 'condicion', label: 'Me encantaría, pero solo puedo después de las tres.' },
          { id: 'no', label: 'Lo siento, es que mañana tengo… ¿Otro día?' },
        ],
        teacher: 'No hay respuesta correcta. Escucha si aceptan con entusiasmo o rechazan con una excusa amable («es que…») y si proponen otro momento.',
      },
      {
        id: 'fondo', kind: 'contrast', label: 'Contraste lingüístico', exponent: ['fondo-imperfecto'], who: 'julian',
        context: 'Julián se sienta en el banco, cansado: «Bueno, ¿y qué tal tu noche en la feria? Cuéntame desde el principio.»',
        prompt: 'Empieza tu historia con el fondo: cómo era la feria cuando llegaste.',
        options: [
          { id: 'hubo', label: 'Cuando llegué, hubo mucha gente y hizo calor.', correct: false, feature: 'fondo en imperfecto',
            feedback: 'Fondo en imperfecto: la gente y el calor no son acciones de la historia, son la situación. Para el fondo, usa el imperfecto: «había», «hacía».' },
          { id: 'habia', label: 'Cuando llegué, había mucha gente y hacía calor.', correct: true,
            feedback: 'Bien: «llegué» es la acción (indefinido) y «había», «hacía» describen la situación (imperfecto).' },
          { id: 'llego', label: 'Cuando llego, había mucha gente y hacía calor.', correct: false, feature: 'tiempo de la acción',
            feedback: 'Tiempo de la acción: la llegada ya pasó. Una acción terminada va en indefinido: «cuando llegué».' },
        ],
        after: '«¿Mucha gente? ¡Toda la ciudad! ¿Y adónde fuiste primero?»',
      },
      {
        id: 'secuencia', kind: 'contrast', label: 'Contraste lingüístico', exponent: ['secuencia-indefinido'], who: 'julian',
        context: 'Julián espera el resto de la historia.',
        prompt: 'Cuenta en orden las dos primeras cosas que hiciste.',
        options: [
          { id: 'fue', label: 'Primero fue a la churrería y después estuvo en la noria.', correct: false, feature: 'persona del verbo',
            feedback: 'Persona del verbo: «fue» y «estuvo» hablan de otra persona. Tú cuentas tu noche: «fui», «estuve».' },
          { id: 'iba', label: 'Primero iba a la churrería y después estaba en la noria.', correct: false, feature: 'acciones terminadas en indefinido',
            feedback: 'Acciones terminadas: cuando cuentas lo que pasó, en orden, cada paso es una acción terminada y va en indefinido: «fui», «estuve».' },
          { id: 'fui', label: 'Primero fui a la churrería y después estuve en la noria.', correct: true,
            feedback: 'Bien: «primero» y «después» ordenan la historia, y el indefinido cuenta las acciones: fui, estuve.' },
        ],
        after: '«¿Y luego? ¿Y al final? Cuéntamelo todo.»',
      },
    ],
    talk: [
      '¿Hay una fiesta o una feria importante en tu ciudad? ¿Cómo es?',
      '¿Te gusta bailar? ¿Cuándo bailaste por última vez?',
      '¿Conoces una historia de amor de tu familia? ¿Cómo empezó?',
      '¿Qué haces normalmente cuando alguien te invita y no quieres ir?',
      '¿Cuál fue la mejor noche de tu último año? ¿Qué pasó?',
    ],
    words: ['el baile', 'la plaza', 'invitar', 'pisar', 'primero / después / luego / al final', 'había / hacía'],
    teacher: 'Es el cierre de las dos rutas. Orden fijo (AC9): reacción a la anécdota de doña Celia → invitación y juego de roles → la historia de la noche desde las notas de esta sesión, con la lista de control → una pregunta de transferencia personal. La lista de control se marca a mano (el docente o el grupo); la aplicación no evalúa el habla ni la graba. Si no hay tiempo, deja la charla final para la próxima clase.',
  },
};

// The closing production at «baile» (AC9): after the beats above.
export const CLOSING = {
  narrative: {
    prompt: 'Cuéntale a Julián tu noche en la feria, en orden, desde que llegaste. Mira las notas de esta sesión: cada círculo que visitaron tiene una frase.',
    frames: ['Cuando llegué, había… / hacía…', 'Primero fui a…', 'Después…', 'Luego…', 'Al final…'],
    // The timeline is built only from this group's picks in this session
    // (sessionStorage, AM-7/D2): CIRCLES[id].timeline[pick] for each circle
    // visited, in the order visited. Circles not visited are left out.
    source: 'sessionStorage',
    opening: 'Cuando llegué a la feria, había mucha gente y hacía calor.',
    ending: 'Al final, fui al baile de la plaza y bailé con Julián.',
  },
  // Ticked by the teacher or the group, never computed from speech (AC9, Sofia's AC9 edit).
  selfCheck: {
    scope: 'El grupo en esta sesión',
    marks: ['logrado', 'con ayuda', 'todavía no'],
    items: [
      { id: 'frases', label: 'Dije cinco frases o más.' },
      { id: 'orden', label: 'Usé tres palabras de orden o más: primero, después, luego, al final.' },
      { id: 'indefinido', label: 'Usé cuatro verbos en indefinido o más, y dos de ellos son de ir, ser, tener o estar (fui, fue, tuve, estuve).' },
      { id: 'fondo', label: 'Dije una frase de fondo en imperfecto: «había mucha gente», «hacía calor».' },
    ],
  },
  transfer: {
    question: '¿Cuál fue la última fiesta o feria a la que fuiste? ¿Qué hiciste primero y qué pasó al final?',
    model: 'La última fue la fiesta de mi barrio, en agosto. Primero fui a comer con mis amigos. Al final, bailamos hasta las dos.',
  },
  sessionLabel: 'Notas de esta sesión: no se guardan por alumno',
  reset: 'Nueva clase / nuevo grupo',
};

// Teacher routes as data (LESSON-DECISION-001 AC8 + AM-1; BD-001 E1/N4).
// A step with `oneOf` lets the teacher pick one circle.
export const ROUTES = [
  {
    id: 'conversacion', mode: 'conversacion', title: 'Conversación', minutes: 42,
    steps: [
      { id: 'calentamiento', minutes: 3, do: 'Pregunta: «¿Hay ferias en tu ciudad? ¿Qué se hace en una feria?». Anota en la pizarra las palabras que salgan.' },
      { circle: 'informacion', minutes: 8 },
      { circle: 'fotos', minutes: 7 },
      { circle: 'escenario', minutes: 8 },
      { oneOf: ['churreria', 'noria'], minutes: 6 },
      { circle: 'baile', minutes: 10, closing: true },
    ],
  },
  {
    id: 'comprension', mode: 'escucha', title: 'Comprensión auditiva', minutes: 45,
    steps: [
      { circle: 'informacion', minutes: 7, listening: true },
      { circle: 'churreria', minutes: 7, listening: true },
      { circle: 'noria', minutes: 7, listening: true },
      { circle: 'escenario', minutes: 7, listening: true },
      { circle: 'fotos', minutes: 7, listening: true },
      { circle: 'baile', minutes: 10, closing: true },
    ],
  },
];

// E1 (BOARD-DECISION-001 §3.2): progress = round(100 × route circles done ÷
// route circles); 100 only on the closing «Terminar». Any report built on it
// uses only the N4 wording below, never "learning" or a session count.
export const E1_LABEL = 'accounts that have reached the closing of lesson X at least once ÷ accounts that opened lesson X; signed-in PRO accounts only; not learning; reaching the closing ≠ teaching the route';

// Placement note for the teacher list (§7 risk 5).
export const PLACEMENT = 'Para la segunda mitad de A2: el círculo 1 usa oraciones de relativo con «que» (semana 18 del plan A2).';
