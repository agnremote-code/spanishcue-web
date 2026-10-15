import type { LiveLesson } from '../types';

/**
 * Lesson 231 · B1 · Por y para.
 * One delivery runs through the class: Eva and her team take tables and
 * posters to a cultural centre. «Por» looks back (cause) or along the way
 * (route, exchange); «para» looks ahead (goal, recipient, deadline).
 */
export const lesson: LiveLesson = {
  id: 231,
  level: 'B1',
  title: 'Por y para',
  subtitle: 'Explicar el motivo, el objetivo, el destinatario, el plazo, el recorrido y el precio de una acción con «por» y «para».',
  legend: [
    { tone: 'blue', label: 'Por · la causa, el motivo' },
    { tone: 'teal', label: 'Por · el recorrido o el intercambio' },
    { tone: 'orange', label: 'Para · el objetivo' },
    { tone: 'violet', label: 'Para · el destinatario o el plazo' },
  ],
  optionNotes: {
    por: '«Por» mira hacia atrás (la causa) o por el camino (el lugar por donde pasas, lo que das a cambio). Aquí la frase mira hacia otra cosa.',
    Por: '«Por» mira hacia atrás (la causa) o por el camino (el lugar por donde pasas, lo que das a cambio). Aquí la frase mira hacia otra cosa.',
    para: '«Para» mira hacia delante: el objetivo, la persona que recibe algo o el plazo. Aquí la frase no habla de eso.',
    Para: '«Para» mira hacia delante: el objetivo, la persona que recibe algo o el plazo. Aquí la frase no habla de eso.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Por y para', coach: 'Una mira atrás, la otra mira adelante.',
      steps: [
        { title: 'Dos preposiciones, una entrega', blocks: [
          { kind: 'lead', text: 'Eva organiza la entrega de mesas y carteles para un taller en el centro cultural. En su mensaje al equipo usa **por** y **para** muchas veces. Mira dos frases sobre el mismo cambio de ruta.' },
          { kind: 'guide', text: { teacher: 'Lean las dos frases. Pregunta: «¿Cuál explica qué pasó antes? ¿Cuál explica lo que Eva quiere conseguir?».', self: 'Lee las dos frases y piensa: ¿cuál explica la causa y cuál el objetivo?' } },
          { kind: 'compare', title: 'El mismo cambio, dos explicaciones', columns: [
            { tone: 'blue', label: 'POR · LA CAUSA', sentence: 'Cambiamos la ruta [[por las obras|blue]].', idea: 'Las obras existen antes. Son el motivo del cambio.' },
            { tone: 'orange', label: 'PARA · EL OBJETIVO', sentence: 'Cambiamos la ruta [[para llegar antes|orange]].', idea: 'Llegar antes es lo que queremos conseguir. Mira hacia el futuro.' },
          ] },
          { kind: 'tip', icon: '🧭', title: 'Una imagen para recordar', text: '**Por** mira hacia atrás o por el camino: la causa, el lugar por donde pasas, lo que das a cambio. **Para** mira hacia delante: el objetivo, la persona que recibe algo, el plazo.' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: '¿Qué frase dice **lo que quieres conseguir**?', options: ['Salgo temprano para evitar el tráfico.', 'Salgo temprano por el tráfico.'], answer: 0, why: 'Para + infinitivo: el objetivo.' },
            { prompt: '¿Qué frase explica **la causa**?', options: ['No fui a clase por la lluvia.', 'Compré un paraguas para la lluvia.'], answer: 0, why: 'La lluvia es el motivo de no ir: por.' },
          ] },
        ] },
        { title: 'La causa y el objetivo', mascot: '/brand/mascot/studying.webp', coach: '¿Por qué pasó? ¿Para qué lo haces?', blocks: [
          { kind: 'concept', tone: 'blue', label: 'POR · CAUSA', question: '¿Por qué?', formula: ['por + nombre', 'por + infinitivo'],
            meaning: 'Explica **qué motiva** la acción: la razón, lo que pasó antes.',
            examples: [
              { es: 'La sala está cerrada [[por una avería|blue]].' },
              { es: 'Haremos un recorrido más largo [[por las obras de la avenida|blue]].' },
              { es: 'Me pusieron una multa [[por estacionar|blue]] mal.' },
              { es: 'Gracias [[por la ayuda|blue]].' },
            ],
            note: '«Gracias por…» siempre lleva «por»: la ayuda es la causa del agradecimiento.' },
          { kind: 'concept', tone: 'orange', label: 'PARA · OBJETIVO', question: '¿Para qué?', formula: ['para + infinitivo', 'para que + subjuntivo'],
            meaning: 'Dice **qué quieres conseguir** con la acción: la finalidad.',
            examples: [
              { es: 'Llamo [[para confirmar|orange]] la hora.' },
              { es: 'Necesitamos la camioneta [[para transportar|orange]] las mesas.' },
              { es: 'Salimos antes [[para no perder|orange]] tiempo.' },
              { es: 'Te lo explico [[para que lo entiendas|orange]].' },
            ],
            note: 'Si el sujeto es el mismo, usa **para + infinitivo**. Si es otra persona, **para que + subjuntivo**.' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'La sala está cerrada ___ una avería.', options: ['por', 'para'], answer: 0, why: 'La avería es la causa del cierre.' },
            { prompt: 'Llamo ___ confirmar la hora.', options: ['por', 'para'], answer: 1, why: 'Confirmar la hora es el objetivo de la llamada.' },
            { prompt: 'Se canceló el vuelo ___ la niebla.', options: ['por', 'para'], answer: 0, why: 'La niebla es la causa.' },
          ] },
        ] },
        { title: 'El destinatario y el plazo', mascot: '/brand/mascot/speaking.webp', coach: '¿Para quién? ¿Para cuándo?', blocks: [
          { kind: 'concept', tone: 'violet', label: 'PARA · DESTINATARIO Y PLAZO', question: '¿Para quién? ¿Para cuándo?', formula: ['para + persona', 'para + momento límite'],
            meaning: 'Indica **quién recibe** algo o **cuándo tiene que estar listo**: el plazo, la fecha límite.',
            examples: [
              { es: 'Estos carteles son [[para los visitantes|violet]].' },
              { es: 'La caja es [[para Ana|violet]].' },
              { es: 'Necesito la lista [[para el jueves|violet]].' },
              { es: 'Los carteles estarán listos [[para las tres|violet]].' },
            ] },
          { kind: 'compare', title: 'Con fecha y sin fecha', columns: [
            { tone: 'neutral', label: 'EL MOMENTO', sentence: 'Entrego la lista **el jueves**.', idea: 'Dice cuándo pasa la acción.' },
            { tone: 'violet', label: 'EL PLAZO', sentence: 'Necesito la lista [[para el jueves|violet]].', idea: 'El jueves es el límite: antes o ese día, no después.' },
          ] },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'La entrega es el lunes: lo necesito ___ el lunes.', options: ['por', 'para'], answer: 1, why: 'El lunes es el plazo.' },
            { prompt: 'Esta tarjeta es ___ mi abuela: mañana es su cumpleaños.', options: ['por', 'para'], answer: 1, why: 'Tu abuela es la persona que recibe la tarjeta.' },
          ] },
        ] },
        { title: 'El recorrido y el intercambio', mascot: '/autoestudio/mascot/noting.webp', coach: 'Por el camino… y a cambio de algo.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'POR · RECORRIDO E INTERCAMBIO', question: '¿Por dónde? ¿A cambio de qué?', formula: ['por + lugar', 'por + precio', 'cambiar algo por algo'],
            meaning: '**Por** indica el lugar **por donde pasas** (no el destino) y también lo que **das a cambio**: un precio o un producto.',
            examples: [
              { es: 'Primero pasamos [[por la imprenta|teal]].' },
              { es: 'Fuimos [[por el parque|teal]] porque es más bonito.' },
              { es: 'Alquilamos la camioneta [[por cuarenta euros|teal]].' },
              { es: 'Cambiamos los vasos [[por servilletas|teal]].' },
            ] },
          { kind: 'compare', title: 'Pasar por o ir a', columns: [
            { tone: 'teal', label: 'EL CAMINO', sentence: 'Vamos [[por el centro|teal]].', idea: 'Atravesamos el centro: es parte del recorrido.' },
            { tone: 'neutral', label: 'EL DESTINO', sentence: 'Vamos **al** centro.', idea: 'El centro es el final del viaje.' },
          ] },
          { kind: 'table', title: 'Resumen de usos', head: ['', 'Pregunta', 'Ejemplo'], rows: [
            ['[[por|blue]] · causa', '¿Por qué?', 'Cerrado [[por una avería|blue]].'],
            ['[[por|teal]] · recorrido', '¿Por dónde?', 'Pasamos [[por la imprenta|teal]].'],
            ['[[por|teal]] · intercambio', '¿A cambio de qué?', 'La compré [[por veinte euros|teal]].'],
            ['[[para|orange]] · objetivo', '¿Para qué?', 'Llamo [[para confirmar|orange]].'],
            ['[[para|violet]] · destinatario', '¿Para quién?', 'Es [[para Ana|violet]].'],
            ['[[para|violet]] · plazo', '¿Para cuándo?', 'Lo necesito [[para el jueves|violet]].'],
          ], note: 'No es una lista cerrada: por y para tienen más usos. Si dudas, pregúntate qué quieres decir.' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'Atravesamos el parque: fuimos ___ el parque.', options: ['por', 'para'], answer: 0, why: 'El parque es el recorrido, no el destino.' },
            { prompt: 'Compré esta lámpara por veinte euros. Es ___ mi hermana.', options: ['por', 'para'], answer: 1, why: 'Mi hermana es la destinataria; «por veinte euros» es el precio.' },
          ] },
        ] },
        { title: 'Cómo elegir', mascot: '/brand/mascot/seated.webp', coach: 'Pregunta qué quieres decir.', blocks: [
          { kind: 'decide', title: 'Piensa en tu frase y responde', steps: [
            { q: '¿Hablas de lo que quieres conseguir, de quién recibe algo o de un plazo?', yes: 'Usa **para**: «Llamo [[para confirmar|orange]]», «Es [[para Ana|violet]]», «[[Para el jueves|violet]]».', no: 'next' },
            { q: '¿Explicas la causa, el lugar por donde pasas o lo que das a cambio?', yes: 'Usa **por**: «[[Por las obras|blue]]», «[[Por la imprenta|teal]]», «[[Por cuarenta euros|teal]]».', no: 'Quizá no necesitas ninguna de las dos: «Vamos **al** centro», «Lo entrego **el** jueves».' },
          ] },
          { kind: 'compare', title: 'Mismas palabras, otra intención', columns: [
            { tone: 'blue', label: 'MOTIVACIÓN', sentence: 'Trabajo mucho [[por mi familia|blue]].', idea: 'Mi familia es la razón, lo que me mueve.' },
            { tone: 'violet', label: 'DESTINATARIO', sentence: 'Este regalo es [[para mi familia|violet]].', idea: 'Mi familia recibe el regalo.' },
          ] },
          { kind: 'tip', icon: '💬', title: 'Si las dos tienen sentido', text: 'A veces las dos preposiciones son posibles y cambian el significado: «Lo hice **por** ti» (tú eres la razón) / «Lo hice **para** ti» (tú lo recibes). En ese caso, explica qué quieres decir.' },
        ] },
        { title: 'Errores frecuentes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Estos errores son muy comunes.', blocks: [
          { kind: 'guide', text: { teacher: 'Tu alumno encuentra el error y dice qué pregunta responde la preposición correcta (¿por qué?, ¿para qué?, ¿para quién?…).', self: 'Lee cada frase, busca el error y después toca para ver la corrección.' } },
          { kind: 'mistakes', title: '¿Dónde está el error?', items: [
            { wrong: 'La caja es por Ana.', right: 'La caja es para Ana.', why: 'Ana recibe la caja: destinataria, «para».' },
            { wrong: 'Estudio español por viajar a México.', right: 'Estudio español para viajar a México.', why: 'Viajar es el objetivo: para + infinitivo.' },
            { wrong: 'Gracias para tu ayuda.', right: 'Gracias por tu ayuda.', why: '«Gracias» siempre va con «por»: la ayuda es la causa.' },
            { wrong: 'Necesito el informe por el viernes.', right: 'Necesito el informe para el viernes.', why: 'El viernes es el plazo: «para».' },
            { wrong: 'Pagué cincuenta euros para la chaqueta.', right: 'Pagué cincuenta euros por la chaqueta.', why: 'Es un intercambio: dinero a cambio de la chaqueta.' },
            { wrong: 'La sala está cerrada para una avería.', right: 'La sala está cerrada por una avería.', why: 'La avería es la causa, no el objetivo.' },
          ] },
          { kind: 'teacher', text: 'Pide al alumno dos frases sobre una compra reciente: una con «por» (precio o causa) y otra con «para» (destinatario u objetivo).' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'Organizar una entrega', coach: 'Toca las expresiones marcadas.',
      steps: [
        { title: 'El plan de Eva', blocks: [
          { kind: 'guide', text: { teacher: 'Lean el diálogo con papeles. Después el alumno toca cada expresión y dice qué pregunta responde: ¿por qué?, ¿para qué?, ¿para quién?, ¿para cuándo?, ¿por dónde?, ¿a cambio de qué?', self: 'Lee el diálogo. Después toca cada expresión marcada para descubrir por qué se usó.' } },
          { kind: 'explore', title: 'Una llamada antes del taller', setting: 'Es miércoles. Eva llama a su compañero Hugo para organizar la entrega del viernes en el centro cultural.', lines: [
            { who: 'Eva', text: 'Hola, Hugo. Te llamo [[para organizar|orange]] la entrega del viernes.' },
            { who: 'Hugo', text: 'Perfecto. ¿Llevamos las mesas en tu auto?' },
            { who: 'Eva', text: 'No, son demasiado grandes. Reservé una camioneta [[por cuarenta euros|teal]].' },
            { who: 'Hugo', text: 'Bien. ¿Y los carteles?' },
            { who: 'Eva', text: 'Primero pasamos [[por la imprenta|teal]] y después vamos al centro. Los carteles son [[para las personas que visitan el barrio|violet]] por primera vez.' },
            { who: 'Hugo', text: '¿Vamos por la avenida, como siempre?' },
            { who: 'Eva', text: 'No, [[por las obras|blue]] tenemos que dar una vuelta más larga.' },
            { who: 'Hugo', text: '¿Necesitas algo de mí?' },
            { who: 'Eva', text: 'Sí, la lista de materiales. La necesito [[para el jueves|violet]] por la tarde. El viernes ya no hay tiempo de comprar nada.' },
            { who: 'Hugo', text: 'De acuerdo. Ah, nos sobraron muchos vasos del último taller.' },
            { who: 'Eva', text: 'Entonces no compres más. Podemos cambiarlos [[por servilletas|teal]] en la tienda.' },
            { who: 'Hugo', text: 'Genial. Gracias [[por organizarlo todo|blue]], Eva.' },
          ], notes: {
            'para organizar': 'Organizar la entrega es el **objetivo** de la llamada: para + infinitivo.',
            'por cuarenta euros': 'Un **intercambio**: Eva paga cuarenta euros a cambio de la camioneta.',
            'por la imprenta': 'Un **recorrido**: la imprenta es una parada en el camino, no el destino final.',
            'para las personas que visitan el barrio': 'Las personas que visitan el barrio **reciben** los carteles: destinatario.',
            'por las obras': 'Las obras son la **causa** del cambio de ruta.',
            'para el jueves': 'El jueves es el **plazo**: la lista tiene que estar lista ese día como muy tarde.',
            'por servilletas': '**Intercambio**: dan los vasos y reciben servilletas.',
            'por organizarlo todo': '«Gracias por…»: la organización es la **causa** del agradecimiento.',
          } },
          { kind: 'choice', title: '¿Entendiste?', items: [
            { prompt: '¿Por qué no llevan las mesas en el auto de Eva?', options: ['Porque son demasiado grandes.', 'Porque el auto está en el taller.', 'Porque hay obras.'], answer: 0, why: '«No, son demasiado grandes. Reservé una camioneta».' },
            { prompt: '¿Por qué Eva pide la lista el jueves?', options: ['Porque el viernes no hay tiempo de comprar nada.', 'Porque el taller es el jueves.', 'Porque Hugo se va de viaje.'], answer: 0, why: '«El viernes ya no hay tiempo de comprar nada».' },
          ] },
        ] },
        { title: 'En la tienda', mascot: '/brand/mascot/speaking.webp', coach: 'Precio, regalo y plazo en una compra.', blocks: [
          { kind: 'explore', title: 'Un regalo de última hora', setting: 'Hugo entra en una tienda para comprar un regalo para la directora del centro cultural.', lines: [
            { who: 'Vendedora', text: 'Buenas tardes, ¿qué busca?' },
            { who: 'Hugo', text: 'Un regalo [[para la directora del centro cultural|violet]]. Se jubila el viernes.' },
            { who: 'Vendedora', text: '¿Qué le parece este cuaderno de piel? Es muy elegante.' },
            { who: 'Hugo', text: 'Es bonito. ¿Cuánto cuesta?' },
            { who: 'Vendedora', text: 'Se lo dejo [[por treinta euros|teal]]. Hoy tiene un descuento [[por la campaña de otoño|blue]].' },
            { who: 'Hugo', text: 'Perfecto. ¿Lo pueden envolver [[para regalo|orange]]?' },
            { who: 'Vendedora', text: 'Claro. Y si quiere grabarle el nombre, estaría listo [[para el jueves|violet]].' },
            { who: 'Hugo', text: 'Muy bien. Paso [[por aquí|teal]] el jueves a mediodía.' },
          ], notes: {
            'para la directora del centro cultural': 'La directora **recibe** el regalo: destinataria.',
            'por treinta euros': '**Intercambio**: el precio que Hugo paga por el cuaderno.',
            'por la campaña de otoño': 'La campaña es la **causa** del descuento.',
            'para regalo': 'El **objetivo** del envoltorio: que sirva como regalo.',
            'para el jueves': 'Un **plazo**: el jueves estará listo.',
            'por aquí': '«Pasar por» un lugar: una parada breve en el **recorrido** de Hugo.',
          } },
          { kind: 'teacher', text: 'Pregunta: «Si Hugo dijera "Compro esto por la directora", ¿qué entenderíamos?». Que la directora es el motivo, no la persona que recibe el regalo.' },
        ] },
        { title: '¿Qué pregunta responde?', blocks: [
          { kind: 'classify', title: 'Clasifica las expresiones de las dos conversaciones', categories: [
            { id: 'causa', label: 'Por · causa', tone: 'blue' },
            { id: 'camino', label: 'Por · recorrido o intercambio', tone: 'teal' },
            { id: 'objetivo', label: 'Para · objetivo', tone: 'orange' },
            { id: 'destino', label: 'Para · destinatario o plazo', tone: 'violet' },
          ], items: [
            { text: 'por las obras', answer: 'causa', why: 'Las obras explican el cambio de ruta.' },
            { text: 'por la imprenta', answer: 'camino', why: 'Una parada en el recorrido.' },
            { text: 'para organizar la entrega', answer: 'objetivo', why: 'Lo que Eva quiere conseguir con la llamada.' },
            { text: 'para el jueves', answer: 'destino', why: 'Un plazo.' },
            { text: 'por treinta euros', answer: 'camino', why: 'Un intercambio: el precio.' },
            { text: 'para la directora', answer: 'destino', why: 'La persona que recibe el regalo.' },
            { text: 'por la campaña de otoño', answer: 'causa', why: 'La causa del descuento.' },
          ] },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Antes de elegir, pregúntate: ¿qué quiero decir?',
      steps: [
        { title: 'Elige según el contexto', blocks: [
          { kind: 'choice', items: [
            { context: 'El cine cerró el domingo. Había un problema eléctrico.', prompt: 'El cine cerró ___ un problema eléctrico.', options: ['por', 'para'], answer: 0, why: 'El problema es la causa del cierre.' },
            { context: 'Quieres hablar mejor con tus compañeros de trabajo.', prompt: 'Tomo clases ___ hablar mejor con mis compañeros.', options: ['por', 'para'], answer: 1, why: 'Hablar mejor es el objetivo.' },
            { context: 'El tren no va directo: hace una parada en Córdoba.', prompt: 'El tren pasa ___ Córdoba.', options: ['por', 'para'], answer: 0, why: 'Córdoba es parte del recorrido, no el destino.' },
            { context: 'La profesora quiere los trabajos antes del final del mes.', prompt: 'Hay que entregar el trabajo ___ el día 30.', options: ['por', 'para'], answer: 1, why: 'El día 30 es el plazo.' },
            { context: 'Viste una bicicleta usada en internet.', prompt: 'Compré la bicicleta ___ ochenta euros.', options: ['por', 'para'], answer: 0, why: 'Un intercambio: el precio.' },
            { context: 'Hiciste un pastel. Lo vas a llevar a la fiesta de tus vecinos.', prompt: 'Este pastel es ___ mis vecinos.', options: ['por', 'para'], answer: 1, why: 'Tus vecinos reciben el pastel.' },
          ] },
        ] },
        { title: 'Compara los significados', blocks: [
          { kind: 'choice', items: [
            { prompt: '¿Qué frase dice que **tu madre es la razón** de tu esfuerzo?', options: ['Lo hago por mi madre.', 'Lo hago para mi madre.'], answer: 0, why: '«Por» presenta la motivación. «Para» diría que tu madre recibe lo que haces.' },
            { prompt: '¿Qué frase dice que el informe **tiene un límite**?', options: ['Necesito el informe para el lunes.', 'Te mando el informe el lunes.'], answer: 0, why: '«Para el lunes» marca un plazo. «El lunes» solo dice cuándo.' },
            { prompt: '«Vamos por el centro.» ¿Qué significa?', options: ['Atravesamos el centro en el camino.', 'El centro es el destino final.', 'Vamos porque está el centro.'], answer: 0, why: '«Por» + lugar: el recorrido.' },
            { prompt: '¿Qué frase habla de **un cambio de un producto por otro**?', options: ['Cambié la camisa por una más grande.', 'Cambié la camisa para mi hermano.'], answer: 0, why: '«Cambiar algo por algo»: intercambio.' },
          ] },
        ] },
        { title: 'Completa la conversación', blocks: [
          { kind: 'chat-fill', title: 'Un problema con un pedido', lines: [
            { who: 'Clienta', text: 'Hola, llamo ___ un problema con mi pedido.', options: ['por', 'para'], answer: 0, why: 'El problema es la causa de la llamada.' },
            { who: 'Empleado', text: 'Dígame, ¿qué pasó?' },
            { who: 'Clienta', text: 'Compré una lámpara ___ mi hija, pero llegó rota.', options: ['para', 'por'], answer: 0, why: 'Su hija recibe la lámpara: destinataria.' },
            { who: 'Empleado', text: 'Lo siento mucho. Podemos cambiarla ___ una nueva.', options: ['por', 'para'], answer: 0, why: 'Intercambio: la lámpara rota a cambio de una nueva.' },
            { who: 'Clienta', text: 'Bien, pero la necesito ___ el sábado. Es su cumpleaños.', options: ['para', 'por'], answer: 0, why: 'El sábado es el plazo.' },
            { who: 'Empleado', text: 'Sin problema. Y ___ las molestias, le hacemos un descuento del diez por ciento.', options: ['por', 'para'], answer: 0, why: 'Las molestias son la causa del descuento.' },
            { who: 'Clienta', text: 'Muchas gracias. ¿Tengo que pasar ___ la tienda?', options: ['por', 'para'], answer: 0, why: '«Pasar por» un lugar: una parada en el recorrido.' },
          ] },
        ] },
        { title: 'Encuentra el error', blocks: [
          { kind: 'fix', items: [
            { sentence: 'La caja es por Ana.', ok: false, options: ['La caja es para Ana.', 'La caja es a Ana.', 'La caja por es Ana.'], answer: 0, why: 'Ana recibe la caja: «para».' },
            { sentence: 'Gracias por venir tan rápido.', ok: true, why: 'Correcta: «gracias por» + la causa del agradecimiento.' },
            { sentence: 'Necesito el presupuesto por el martes.', ok: false, options: ['Necesito el presupuesto para el martes.', 'Necesito el presupuesto en el martes.', 'Necesito por el martes el presupuesto.'], answer: 0, why: 'El martes es el plazo: «para».' },
            { sentence: 'Ahorro dinero por comprar un auto.', ok: false, options: ['Ahorro dinero para comprar un auto.', 'Ahorro dinero por comprarme un auto.', 'Ahorro dinero a comprar un auto.'], answer: 0, why: 'Comprar un auto es el objetivo: para + infinitivo.' },
            { sentence: 'Vendo mi teléfono viejo por cien euros.', ok: true, why: 'Correcta: un intercambio.' },
            { sentence: 'No salimos para la tormenta.', ok: false, options: ['No salimos por la tormenta.', 'No salimos a la tormenta.', 'No salimos para que la tormenta.'], answer: 0, why: 'La tormenta es la causa: «por».' },
          ] },
        ] },
        { title: 'Construye frases', blocks: [
          { kind: 'build', title: 'Ordena las palabras', items: [
            { tiles: ['Cambiamos', 'la', 'ruta', 'por', 'las', 'obras'], accept: ['Cambiamos la ruta por las obras', 'Por las obras cambiamos la ruta'] },
            { tiles: ['Llamo', 'para', 'confirmar', 'la', 'reserva'], accept: ['Llamo para confirmar la reserva'] },
            { tiles: ['Estas', 'flores', 'son', 'para', 'mi', 'abuela'], accept: ['Estas flores son para mi abuela'] },
            { tiles: ['Necesito', 'el', 'informe', 'para', 'el', 'lunes'], accept: ['Necesito el informe para el lunes', 'Para el lunes necesito el informe'] },
            { tiles: ['Primero', 'pasamos', 'por', 'la', 'farmacia'], accept: ['Primero pasamos por la farmacia'] },
          ] },
        ] },
        { title: 'Explica tus motivos', mascot: '/brand/mascot/kneeling.webp', coach: 'Una causa y un objetivo para cada cambio.', blocks: [
          { kind: 'rewrite', title: 'Escribe la misma idea con «por» o «para»', items: [
            { prompt: 'Cambiamos la reunión porque hubo un problema de horarios.', instruction: 'Usa «por» + nombre.', accept: ['Cambiamos la reunión por un problema de horarios'] },
            { prompt: 'Salgo temprano. Quiero evitar el tráfico.', instruction: 'Une las dos ideas con «para».', accept: ['Salgo temprano para evitar el tráfico'] },
            { prompt: 'Ana va a recibir este paquete.', instruction: 'Empieza con «Este paquete es…».', accept: ['Este paquete es para Ana'] },
            { prompt: 'El informe tiene que estar listo el viernes como muy tarde.', instruction: 'Empieza con «Necesito el informe…».', accept: ['Necesito el informe para el viernes'] },
            { prompt: 'Llevé los vasos a la tienda y me dieron servilletas.', instruction: 'Usa «cambiar… por…».', accept: ['Cambié los vasos por servilletas'] },
          ] },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Cambio de plan en la imprenta', coach: 'Primero escucha sin leer.',
      steps: [
        { title: 'Un mensaje desde la imprenta', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha para la idea general. En la segunda, el alumno anota cada «por» y «para» y dice qué pregunta responde.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Anota cada «por» y «para» que oigas.' } },
          { kind: 'listen', title: 'Hugo llama desde la imprenta', channel: 'MENSAJE DE VOZ · PARA EVA', src: '/audio/grammar-classroom/231.mp3',
            before: 'Hugo deja un mensaje a Eva desde la imprenta. Hay un problema con los carteles. ¿Qué crees que propone?',
            gist: { prompt: '¿Para qué deja Hugo el mensaje?', options: ['Para proponer un cambio de plan por un retraso.', 'Para cancelar el taller.', 'Para pedir más dinero.'], answer: 0, why: 'Los carteles se retrasan y Hugo propone otro orden para la entrega.' },
            details: [
              { prompt: '¿Por qué no estarán listos los carteles por la mañana?', options: ['Por un problema con el papel.', 'Por las obras.', 'Por la lluvia.'], answer: 0, why: '«No estarán listos por la mañana por un problema con el papel».' },
              { prompt: '¿Para cuándo estarán listos?', options: ['Para las tres.', 'Para el lunes.', 'Para las diez.'], answer: 0, why: '«Nos los preparan para las tres».' },
              { prompt: '¿Qué ofrece la imprenta por la espera?', options: ['Un descuento de diez euros.', 'Un café gratis.', 'Carteles más grandes.'], answer: 0, why: '«Nos ofrecen un descuento de diez euros por la espera».' },
              { prompt: '¿Por qué cambia el descuento?', options: ['Por veinte copias más.', 'Por un envío gratis.', 'Por papel mejor.'], answer: 0, why: '«Prefiero cambiar ese descuento por veinte copias más».' },
              { prompt: '¿Para quién son las copias nuevas?', options: ['Para las tiendas de la zona.', 'Para los vecinos del edificio.', 'Para la imprenta.'], answer: 0, why: '«Las copias nuevas son para las tiendas de la zona».' },
            ],
            transcript: 'Hola, Eva. Acabo de hablar con la imprenta. Los carteles no estarán listos por la mañana [[por un problema con el papel|blue]]. Nos los preparan [[para las tres|violet]]. [[Para no perder tiempo|orange]], propongo llevar primero las mesas al centro cultural y pasar [[por la imprenta|teal]] después. Nos ofrecen un descuento de diez euros [[por la espera|blue]]. He dicho que prefiero cambiar ese descuento [[por veinte copias más|teal]], porque siempre llega más gente de la prevista. Las copias nuevas son [[para las tiendas de la zona|violet]]. ¿Te parece bien? Llámame [[para confirmar|orange]] el cambio antes de que hagan la factura. Yo puedo recoger todo por la tarde.',
            reply: { teacher: 'El alumno responde a Hugo como si fuera Eva: acepta o cambia el plan y usa por y para al menos dos veces cada uno.', self: 'Responde a Hugo como si fueras Eva. ¿Te parece bien el cambio? Usa «por» y «para» al menos dos veces cada uno.' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Motivos, objetivos y regalos', coach: '¿Por qué? ¿Para qué? ¿Para quién?',
      steps: [
        { title: 'Motivos, objetivos y regalos', blocks: [
          { kind: 'guide', text: { teacher: 'No hace falta usar todas las preguntas. Sigue lo que el alumno quiere contar y repregunta con «¿por qué?», «¿para qué?» y «¿para quién?».', self: 'Responde cada pregunta en voz alta, como en una conversación. Si quieres, escribe tu respuesta después.' } },
          { kind: 'talk', cards: [
            { q: '¿Por qué estudias español? ¿Y para qué lo quieres usar?', followUps: ['¿Qué te motivó al principio?', '¿Para qué lo usas ahora?', '¿Qué quieres poder hacer dentro de un año?'], phrases: ['Empecé [[por|blue]]…', 'Lo estudio [[para|orange]]…', 'Lo necesito [[para|orange]] mi trabajo.'], hint: 'Separa el motivo (por + nombre) del objetivo (para + infinitivo).', example: 'Empecé por mi pareja, que es colombiana. Ahora lo estudio para hablar con su familia y para viajar por Sudamérica.', next: 'Hablemos de regalos.' },
            { q: '¿Cuál fue el último regalo que compraste? ¿Para quién era?', followUps: ['¿Por qué elegiste ese regalo?', '¿Cuánto pagaste por él?', '¿Le gustó?'], phrases: ['Era [[para|violet]] mi…', 'Lo compré [[por|teal]] … euros.', 'Lo escogí [[porque|blue]]…'], hint: 'Cuidado: «para» + la persona que lo recibe; «por» + el precio.', example: 'Compré un libro de cocina para mi hermano. Lo encontré por quince euros en una librería pequeña. Lo escogí porque le encanta cocinar.', next: 'Ahora, tus rutas de cada día.' },
            { q: '¿Qué camino haces para ir al trabajo o a clase? ¿Por dónde pasas?', followUps: ['¿Por qué eliges ese camino?', '¿Hay obras o problemas a veces?', '¿Qué lugar te gusta ver en el camino?'], phrases: ['Paso [[por|teal]]…', 'Voy [[por|teal]] la avenida…', '[[Por|blue]] las obras, a veces…'], hint: '«Por» + lugar: el camino. «A» + lugar: el destino.', example: 'Voy al trabajo en bicicleta. Paso por el parque y por el mercado. A veces, por las obras, tengo que ir por la avenida principal.', next: 'Hablemos de plazos.' },
            { q: '¿Qué tienes que terminar pronto? ¿Para cuándo?', followUps: ['¿Por qué tiene ese plazo?', '¿Qué haces para no llegar tarde?', '¿Te gustan los plazos o te ponen nervioso?'], phrases: ['Tengo que terminar… [[para|violet]] el…', 'Es [[para|violet]] mi jefe / mi profesora.', 'Me organizo [[para|orange]] no…'], hint: 'El plazo con «para»: «para el viernes», «para fin de mes».', example: 'Tengo que terminar un informe para el viernes. Es para mi jefa. Para no llegar tarde, trabajo una hora más cada día.', next: 'Ahora, un cambio de plan.' },
            { q: '¿Cuándo fue la última vez que cambiaste un plan? ¿Por qué lo cambiaste y para qué?', followUps: ['¿Qué pasó?', '¿Fue una buena idea?', '¿Qué harías diferente?'], phrases: ['Lo cambié [[por|blue]]…', 'Lo cambié [[para|orange]]…', 'Al final…'], hint: 'Da una causa con «por» y un objetivo con «para».', example: 'El mes pasado cambié mis vacaciones por un problema en el trabajo. Las moví a septiembre para tener más tiempo y para viajar con menos gente.', next: 'Para terminar, algo que hiciste por otra persona.', teacher: 'Tu alumno repite la idea con la otra preposición y explica cómo cambia el significado.' },
            { q: '¿Hay algo importante que hiciste por otra persona?', followUps: ['¿Qué hiciste exactamente?', '¿Por qué lo hiciste?', '¿Alguien hizo algo así por ti?'], phrases: ['Lo hice [[por|blue]] mi…', 'Lo preparé [[para|violet]]…', 'Gracias [[por|blue]]…'], hint: '«Lo hice por ti»: tú eres la razón. «Lo hice para ti»: tú lo recibes.', example: 'Una vez organicé una fiesta sorpresa para mi mejor amiga. Lo hice por ella, porque estaba triste después de un cambio de trabajo. Me dijo: «Gracias por todo».', teacher: 'Aprovecha la pregunta para comparar «hacer algo por alguien» y «hacer algo para alguien».' },
          ], swap: { teacher: 'Al final, cambien los papeles: el alumno le hace al profesor dos o tres de estas preguntas.', self: 'Escribe tres preguntas con «¿Por qué…?», «¿Para qué…?» y «¿Para cuándo…?» y házselas a alguien esta semana.' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Reorganizar una entrega', coach: 'Un mensaje claro: nadie tiene que preguntar nada.',
      steps: [
        { title: 'Reorganizar una entrega', blocks: [
          { kind: 'guide', text: { teacher: 'Puede escribir en clase o como tarea. Después revisen juntos qué pregunta responde cada «por» y cada «para».', self: 'Escribe tu mensaje y toca «Revisar mi texto». Después comprueba qué pregunta responde cada «por» y cada «para».' } },
          { kind: 'write', title: 'Un mensaje para el equipo', situation: 'Tu equipo tiene que llevar materiales a un evento (una fiesta, un taller, una feria). Hay un cambio de plan. Escribe un mensaje para que todos sepan qué hacer sin tener que preguntar.', task: [
            'Explica la **causa** del cambio (por) y el **objetivo** del nuevo plan (para).',
            'Describe el **recorrido**: por dónde pasan.',
            'Di **para quién** son los materiales y **para cuándo** necesitas algo.',
            'Menciona un **precio** o un **intercambio**.',
          ], starters: ['Hola, equipo:', 'Por…, mañana cambiaremos…', 'Primero pasaremos por…', 'Los materiales son para…', 'Necesito… para…', 'Para evitar…'],
            words: ['la camioneta', 'el recorrido', 'la entrega', 'el plazo', 'cambiar… por…', 'a cambio', 'confirmar', 'recoger', 'gracias por'],
            model: 'Hola, equipo. [[Por las obras de la avenida|blue]], mañana cambiaremos el recorrido. Primero pasaremos [[por la tienda|teal]] [[para recoger|orange]] las cajas y después iremos al centro cultural. Los materiales son [[para las personas del taller de fotografía|violet]]. Necesito la lista completa [[para las diez|violet]], porque saldremos a las once. [[Para evitar|orange]] otro viaje, confirmen hoy si falta algo. He conseguido la camioneta [[por treinta euros|teal]]. ¿Quién puede acompañarme y ayudar con la entrega?',
            minWords: 70 },
        ] },
      ],
    },
    {
      id: 'cerrar', label: 'Cerrar', icon: '✓', mascot: '/brand/mascot/standing.webp',
      title: 'Lo esencial', coach: '¿Qué te llevas hoy?',
      steps: [
        { title: 'Lo esencial', blocks: [
          { kind: 'recap', items: [
            { tone: 'blue', label: 'POR · CAUSA', formula: 'por + nombre', example: 'Cambiamos la ruta por las obras.', caption: '¿Por qué? Lo que motiva la acción.' },
            { tone: 'teal', label: 'POR · CAMINO E INTERCAMBIO', formula: 'por + lugar / precio / producto', example: 'Pasamos por la imprenta. La compré por veinte euros.', caption: '¿Por dónde? ¿A cambio de qué?' },
            { tone: 'orange', label: 'PARA · OBJETIVO', formula: 'para + infinitivo', example: 'Cambiamos la ruta para llegar antes.', caption: '¿Para qué? Lo que quieres conseguir.' },
            { tone: 'violet', label: 'PARA · DESTINATARIO Y PLAZO', formula: 'para + persona / momento límite', example: 'Es para Ana. Lo necesito para el jueves.', caption: '¿Para quién? ¿Para cuándo?' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'Atrás o adelante', text: '**Por** mira hacia atrás (la causa) o por el camino (el recorrido, el intercambio). **Para** mira hacia delante (el objetivo, quién lo recibe, el plazo).' },
        ] },
        { title: 'Desafío final', blocks: [
          { kind: 'choice', title: 'Cuatro frases, sin ayuda', items: [
            { prompt: 'El partido se suspendió ___ la lluvia.', options: ['por', 'para'], answer: 0, why: 'La lluvia es la causa.' },
            { prompt: 'Estas galletas son ___ los niños.', options: ['por', 'para'], answer: 1, why: 'Los niños las reciben.' },
            { prompt: 'Te mando el contrato ___ que lo firmes.', options: ['por', 'para'], answer: 1, why: 'Para que + subjuntivo: el objetivo.' },
            { prompt: 'Cambié mi turno del sábado ___ el del domingo.', options: ['por', 'para'], answer: 0, why: 'Un intercambio: un turno a cambio de otro.' },
          ] },
        ] },
        { title: 'Tus errores y repaso', blocks: [
          { kind: 'review' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: completa «Cambié el plan por…» y «Cambié el plan para…». La primera frase da la causa (por un retraso); la segunda, el objetivo (para llegar a tiempo).' },
        ] },
      ],
    },
  ],
};
