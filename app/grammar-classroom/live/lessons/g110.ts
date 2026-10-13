import type { LiveLesson } from '../types';

/**
 * Lesson 110 · A1 · Grupos nominales.
 * Core: determiner + noun + modifiers; agreement inside the group; expanding
 * with de / con / para. Marta furnishes a small office through the class.
 */
export const lesson: LiveLesson = {
  id: 110,
  level: 'A1',
  title: 'Grupos nominales',
  subtitle: 'Describir cosas con precisión: una mesa pequeña, una lámpara con luz blanca, una carpeta para documentos.',
  legend: [
    { tone: 'violet', label: 'Determinante · el, una, dos, mi' },
    { tone: 'blue', label: 'Núcleo · el nombre principal' },
    { tone: 'teal', label: 'Adjetivo · cómo es' },
    { tone: 'orange', label: 'De · con · para · más información' },
  ],
  optionNotes: {
    de: '«De» dice el tema, el material o la relación: libro de español, mesa de madera, la clase de hoy.',
    con: '«Con» añade una parte o una característica: casa con jardín, lámpara con luz blanca.',
    para: '«Para» dice la finalidad o para cuántas personas: mesa para cuatro, carpeta para documentos.',
    del: '«Del» = de + el. Va delante de un nombre masculino singular: la página del libro.',
    'de el': '«De el» no se escribe: de + el = **del**.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Un nombre y sus detalles', coach: 'Un nombre, varias capas de información.',
      steps: [
        { title: 'El núcleo y sus capas', blocks: [
          { kind: 'lead', text: 'Marta necesita una mesa. Pero «una mesa» no es suficiente: ¿grande o pequeña? ¿Para cuántas personas? Mira cómo crece la información.', en: 'A noun phrase: one main noun and extra details.' },
          { kind: 'guide', text: { teacher: 'Lee cada línea de la tabla y pregunta: «¿Qué información nueva tenemos ahora?». El alumno señala la palabra nueva.', self: 'Lee la tabla de arriba abajo. En cada línea, busca la información nueva.' } },
          { kind: 'table', title: 'Un grupo que crece', head: ['Grupo', 'Información nueva'], rows: [
            ['[[mesa|blue]]', 'el núcleo: la cosa'],
            ['[[una|violet]] [[mesa|blue]]', 'cuántas: una'],
            ['[[una|violet]] [[mesa|blue]] [[pequeña|teal]]', 'cómo es: pequeña'],
            ['[[una|violet]] [[mesa|blue]] [[pequeña|teal]] [[para cuatro personas|orange]]', 'para qué o para cuántos'],
            ['[[una|violet]] [[mesa|blue]] [[pequeña|teal]] [[con patas negras|orange]]', 'una parte: las patas'],
          ] },
          { kind: 'concept', tone: 'blue', label: 'GRUPO NOMINAL', question: '¿Qué cosa? ¿Cómo es?', en: 'noun phrase', formula: ['determinante + nombre + adjetivo + de / con / para…'],
            meaning: 'El **nombre** es el centro, el **núcleo**. Las otras palabras lo presentan (una, el, mi), lo describen (pequeña) o dan más detalles (con patas negras). Solo el núcleo es obligatorio.',
            examples: [
              { es: '[[el|violet]] [[libro|blue]]', en: 'the book' },
              { es: '[[una|violet]] [[clase|blue]] [[práctica|teal]]', en: 'a practical class' },
              { es: '[[la|violet]] [[clase|blue]] [[de hoy|orange]]', en: 'today’s class' },
              { es: '[[dos|violet]] [[sillas|blue]] [[cómodas|teal]]', en: 'two comfortable chairs' },
            ] },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: '¿Cuál es el núcleo de «una lámpara con luz blanca»?', options: ['una', 'lámpara', 'luz'], answer: 1, why: 'La cosa principal es la lámpara. «Con luz blanca» da un detalle de la lámpara.' },
            { prompt: '¿Cuál es el núcleo de «la carpeta azul de Marta»?', options: ['carpeta', 'azul', 'Marta'], answer: 0, why: 'Hablamos de una carpeta. «Azul» y «de Marta» dan detalles.' },
          ] },
        ] },
        { title: 'Todo el grupo concuerda', mascot: '/brand/mascot/studying.webp', coach: 'El núcleo manda.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'CONCORDANCIA', question: '¿Masculino o femenino? ¿Uno o varios?', en: 'agreement', formula: ['el / un + nombre masculino + adjetivo -o', 'la / una + nombre femenino + adjetivo -a', 'plural: -s / -es en todas las palabras'],
            meaning: 'El **núcleo manda**: el determinante y el adjetivo cambian como el nombre. Si el nombre es femenino y plural, todo el grupo es femenino y plural.',
            examples: [
              { es: '[[un|violet]] [[libro|blue]] [[nuevo|teal]] → [[unos|violet]] [[libros|blue]] [[nuevos|teal]]', en: 'a new book → some new books' },
              { es: '[[una|violet]] [[mesa|blue]] [[redonda|teal]] → [[dos|violet]] [[mesas|blue]] [[redondas|teal]]', en: 'a round table → two round tables' },
              { es: '[[la|violet]] [[casa|blue]] [[blanca|teal]] → [[las|violet]] [[casas|blue]] [[blancas|teal]]', en: 'the white house → the white houses' },
            ] },
          { kind: 'table', title: 'Cuatro formas', head: ['', 'Masculino', 'Femenino'], rows: [
            ['Singular', '[[el|violet]] [[sofá|blue]] [[cómodo|teal]]', '[[la|violet]] [[silla|blue]] [[cómoda|teal]]'],
            ['Plural', '[[los|violet]] [[sofás|blue]] [[cómodos|teal]]', '[[las|violet]] [[sillas|blue]] [[cómodas|teal]]'],
          ], note: 'Adjetivos en **-e** o en consonante (grande, verde, azul) solo cambian en plural: una mesa grande, dos mesas grandes; un bolso azul, dos bolsos azules.' },
          { kind: 'tip', icon: '!', title: 'Lo de «de, con, para» no cambia', text: 'La información con **de, con, para** no concuerda con el núcleo: «una carpeta **de documentos**», «dos carpetas **de documentos**».', en: 'Only determiner, noun and adjective agree.' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: '¿Qué grupo concuerda bien?', options: ['unas habitaciones cómodas', 'unas habitación cómodo', 'una habitaciones cómodas'], answer: 0, why: '«Habitaciones» es femenino plural: unas … cómodas.' },
            { prompt: 'Dos ___ amarillas.', options: ['lámpara', 'lámparas', 'lámparos'], answer: 1, why: 'Dos = plural: lámparas.' },
            { prompt: 'Un coche ___.', options: ['rojo', 'roja', 'rojos'], answer: 0, why: '«Coche» es masculino singular: rojo.' },
          ] },
        ] },
        { title: 'De, con y para', mascot: '/brand/mascot/speaking.webp', coach: 'Tres palabras para dar más detalles.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'DE · CON · PARA', question: '¿Qué tipo? ¿Con qué? ¿Para qué?', en: 'of · with · for', formula: ['nombre + de + tema / material / momento', 'nombre + con + una parte o característica', 'nombre + para + finalidad o personas'],
            meaning: 'Después del nombre, **de**, **con** y **para** añaden información que un adjetivo solo no puede dar.',
            examples: [
              { es: 'un [[libro|blue]] [[de español|orange]] · la [[clase|blue]] [[de hoy|orange]]', en: 'a Spanish book · today’s class' },
              { es: 'una [[casa|blue]] [[con jardín|orange]] · una [[lámpara|blue]] [[con luz blanca|orange]]', en: 'a house with a garden · a lamp with white light' },
              { es: 'una [[mesa|blue]] [[para dos|orange]] · una [[carpeta|blue]] [[para documentos|orange]]', en: 'a table for two · a folder for documents' },
            ],
            note: 'Después de «de» el nombre va muchas veces **sin artículo**: «un libro de cocina», no «un libro de la cocina».' },
          { kind: 'compare', title: 'Tres carpetas diferentes', columns: [
            { tone: 'orange', label: 'DE', sentence: 'una carpeta [[de documentos|orange]]', idea: 'Lo que tiene dentro: documentos.', en: 'a document folder' },
            { tone: 'orange', label: 'CON', sentence: 'una carpeta [[con fotos|orange]]', idea: 'Tiene algo especial: fotos.', en: 'a folder with photos' },
            { tone: 'orange', label: 'PARA', sentence: 'una carpeta [[para la reunión|orange]]', idea: 'Su finalidad: la reunión.', en: 'a folder for the meeting' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'De + el = del', text: 'Cuando «de» va delante de «el», las dos palabras se unen: «la página **del** libro», «la puerta **del** edificio». Con «la» no cambian: «la puerta de la casa».', en: 'de + el = del' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: '¿Cuál expresa el **tema** del libro?', options: ['un libro con español', 'un libro de español', 'un libro para español'], answer: 1, why: '«De» indica el tema o el contenido.' },
            { prompt: 'Una mesa ___ cuatro personas.', options: ['de', 'con', 'para'], answer: 2, why: 'Para cuántas personas es la mesa: para.' },
            { prompt: 'La página ___ libro.', options: ['de el', 'del', 'al'], answer: 1, why: 'De + el = del.' },
          ] },
        ] },
        { title: 'El orden de las palabras', mascot: '/autoestudio/mascot/noting.webp', coach: 'Primero el nombre, después los detalles.', blocks: [
          { kind: 'concept', tone: 'violet', label: 'EL ORDEN', question: '¿Dónde va cada palabra?', en: 'word order', formula: ['determinante + nombre + adjetivo + de / con / para'],
            meaning: 'El determinante va **delante** del nombre. El adjetivo y la información con **de, con, para** van normalmente **detrás**. «Muy» va delante del adjetivo.',
            examples: [
              { es: '[[una|violet]] [[casa|blue]] [[muy grande|teal]] [[con jardín|orange]]', en: 'a very big house with a garden' },
              { es: '[[mi|violet]] [[bolso|blue]] [[negro|teal]] [[de cuero|orange]]', en: 'my black leather bag' },
              { es: '[[dos|violet]] [[sillas|blue]] [[cómodas|teal]] [[para la sala|orange]]', en: 'two comfortable chairs for the living room' },
            ],
            note: 'Muchas veces «de» va pegado al nombre porque forman una unidad: «un libro de cocina interesante» también es correcto.' },
          { kind: 'tip', icon: '👀', title: 'En inglés es al revés', text: 'En inglés dices «a big table». En español, el adjetivo va normalmente **después**: «una mesa grande».', en: 'a big table → una mesa grande' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: '¿Qué opción describe con naturalidad?', options: ['una casa con muy jardín', 'una muy casa grande', 'una casa muy grande con jardín'], answer: 2, why: '«Muy» va delante de «grande» y «con jardín» va al final.' },
            { prompt: '¿Qué orden es el normal?', options: ['un rojo coche', 'un coche rojo', 'coche un rojo'], answer: 1, why: 'Determinante + nombre + adjetivo.' },
          ] },
        ] },
        { title: 'Cómo elegir', mascot: '/brand/mascot/seated.webp', coach: '¿De, con o para? Pregunta qué información das.', blocks: [
          { kind: 'decide', title: 'Piensa en el detalle que quieres añadir', steps: [
            { q: '¿Dices la finalidad o para cuántas personas es?', yes: 'Usa **para**: «una mesa [[para cuatro personas|orange]]».', no: 'next' },
            { q: '¿Dices que tiene una parte o algo especial (jardín, luz, patas)?', yes: 'Usa **con**: «una casa [[con jardín|orange]]».', no: 'next' },
            { q: '¿Dices el tema, el material, el dueño o el momento?', yes: 'Usa **de**: «un libro [[de español|orange]]», «la mesa [[de Marta|orange]]», «la clase [[de hoy|orange]]».', no: 'Quizás necesitas un adjetivo: «una mesa [[grande|teal]]».' },
          ] },
          { kind: 'tip', icon: '✔', title: 'Revisa al final', text: 'Cuando el grupo está completo, mira el **núcleo**: ¿es masculino o femenino? ¿Uno o varios? El determinante y el adjetivo tienen que ir igual.' },
        ] },
        { title: 'Errores frecuentes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Estos errores son muy comunes.', blocks: [
          { kind: 'guide', text: { teacher: 'Pide al alumno que encuentre el error antes de mostrar la corrección. Pregunta: «¿Cuál es el núcleo?».', self: 'Lee cada grupo, busca el error y después toca para ver la corrección.' } },
          { kind: 'mistakes', title: '¿Dónde está el error?', items: [
            { wrong: 'unas sillas cómodos', right: 'unas sillas cómodas', why: '«Sillas» es femenino: cómodas.' },
            { wrong: 'una grande mesa', right: 'una mesa grande', why: 'El adjetivo va normalmente después del nombre.' },
            { wrong: 'un libro con español', right: 'un libro de español', why: 'El tema va con «de».' },
            { wrong: 'la puerta de el edificio', right: 'la puerta del edificio', why: 'De + el = del.' },
            { wrong: 'un mesa nueva', right: 'una mesa nueva', why: 'El determinante también concuerda: «mesa» es femenino, una.' },
            { wrong: 'una mesa para cuatros personas', right: 'una mesa para cuatro personas', why: 'Los números no tienen plural: cuatro personas.' },
          ] },
          { kind: 'teacher', text: 'Pide al alumno que describa un objeto de su mesa con tres capas: determinante + nombre + adjetivo + de / con / para.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'Descripciones en situaciones reales', coach: 'Toca los detalles marcados.',
      steps: [
        { title: 'Un pedido para la oficina', blocks: [
          { kind: 'guide', text: { teacher: 'Lean el diálogo con papeles. Después, el alumno toca cada detalle marcado y explica qué información añade.', self: 'Lee el diálogo. Después toca cada detalle marcado para descubrir qué información añade.' } },
          { kind: 'explore', title: 'En la tienda de muebles', setting: 'Marta necesita material para su oficina nueva. Habla con un vendedor.', lines: [
            { who: 'Vendedor', text: 'Buenos días. ¿Qué necesita?' },
            { who: 'Marta', text: 'Necesito una mesa [[pequeña|teal]] [[para cuatro personas|orange]].' },
            { who: 'Vendedor', text: 'Tenemos esta mesa [[redonda|teal]] [[de madera|orange]]. Y esa mesa [[grande|teal]] [[para reuniones|orange]].' },
            { who: 'Marta', text: 'La grande no: mi oficina es muy pequeña. ¿Tiene una mesa [[con patas negras|orange]]?' },
            { who: 'Vendedor', text: 'Sí, aquí. ¿Y sillas?' },
            { who: 'Marta', text: 'Sí, dos sillas [[cómodas|teal]] [[para la sala|orange]].' },
            { who: 'Vendedor', text: 'Estas sillas [[azules|teal]] son muy cómodas.' },
            { who: 'Marta', text: 'Perfecto. También busco una lámpara [[con luz blanca|orange]].' },
            { who: 'Vendedor', text: '¿Una lámpara [[de escritorio|orange]]?' },
            { who: 'Marta', text: 'Sí. Y una carpeta [[de documentos|orange]] para la reunión [[del lunes|orange]].' },
          ], notes: {
            'pequeña': 'Adjetivo: dice **cómo es** la mesa. Femenino singular, como «mesa».',
            'para cuatro personas': '**Para**: para cuántas personas es la mesa.',
            'redonda': 'Adjetivo: la forma de la mesa. Femenino, como «mesa».',
            'de madera': '**De**: el material de la mesa.',
            'grande': 'Adjetivo en -e: igual en masculino y femenino.',
            'para reuniones': '**Para**: la finalidad de la mesa.',
            'con patas negras': '**Con**: una parte especial de la mesa. «Patas negras» concuerda: femenino plural.',
            'cómodas': 'Adjetivo en femenino plural, como «sillas».',
            'para la sala': '**Para**: el lugar donde van a estar las sillas, su finalidad.',
            'azules': 'Adjetivo en consonante: solo cambia en plural (azul → azules).',
            'con luz blanca': '**Con**: una característica especial de la lámpara.',
            'de escritorio': '**De**: el tipo de lámpara. Sin artículo después de «de».',
            'de documentos': '**De**: el contenido de la carpeta.',
            'del lunes': '**De + el = del**: el momento de la reunión.',
          } },
          { kind: 'choice', title: '¿Entendiste?', items: [
            { prompt: '¿Por qué no quiere Marta la mesa grande?', options: ['Porque su oficina es muy pequeña.', 'Porque es de madera.', 'Porque no tiene patas negras.'], answer: 0, why: '«La grande no: mi oficina es muy pequeña.»' },
            { prompt: '¿Qué luz quiere para la lámpara?', options: ['Amarilla.', 'Blanca.', 'Azul.'], answer: 1, why: '«Una lámpara con luz blanca.»' },
            { prompt: '¿Para qué es la carpeta?', options: ['Para la reunión del lunes.', 'Para la sala.', 'Para cuatro personas.'], answer: 0, why: '«Una carpeta de documentos para la reunión del lunes.»' },
          ] },
        ] },
        { title: '¿Cuál es tu bolso?', blocks: [
          { kind: 'explore', title: 'En el guardarropa del teatro', setting: 'Iván recoge su bolso después del teatro, pero hay muchos bolsos.', lines: [
            { who: 'Empleada', text: '¿Cómo es su bolso?' },
            { who: 'Iván', text: 'Es un bolso [[negro|teal]] [[de cuero|orange]].' },
            { who: 'Empleada', text: 'Hay tres bolsos negros. ¿Es este bolso [[con dos bolsillos|orange]]?' },
            { who: 'Iván', text: 'No, el mío es un bolso [[pequeño|teal]] [[con una cinta roja|orange]].' },
            { who: 'Empleada', text: '¿Y tiene algo dentro?' },
            { who: 'Iván', text: 'Sí, un libro [[de cocina|orange]] y unas gafas [[de sol|orange]].' },
            { who: 'Empleada', text: 'Aquí está: un bolso pequeño con una cinta roja.' },
            { who: 'Iván', text: '¡Sí, es mi bolso! Muchas gracias.' },
          ], notes: {
            'negro': 'Adjetivo: el color. Masculino, como «bolso».',
            'de cuero': '**De**: el material del bolso.',
            'con dos bolsillos': '**Con**: una parte que ayuda a identificar el bolso.',
            'pequeño': 'Adjetivo: el tamaño. Masculino singular.',
            'con una cinta roja': '**Con**: un detalle especial. Así la empleada distingue el bolso.',
            'de cocina': '**De**: el tema del libro.',
            'de sol': '**De**: el tipo de gafas.',
          } },
          { kind: 'teacher', text: 'Juego: el alumno describe un objeto de la habitación sin decir el nombre («Es una cosa pequeña de metal para abrir la puerta»). Tú adivinas. Después cambien.' },
        ] },
        { title: '¿Adjetivo o de / con / para?', blocks: [
          { kind: 'classify', title: 'Clasifica los detalles de las dos conversaciones', categories: [
            { id: 'adj', label: 'Adjetivo · cómo es', tone: 'teal' },
            { id: 'de', label: 'de', tone: 'orange' },
            { id: 'con', label: 'con', tone: 'orange' },
            { id: 'para', label: 'para', tone: 'orange' },
          ], items: [
            { text: 'una mesa ___ cuatro personas', answer: 'para', why: 'Para cuántas personas: para.' },
            { text: 'una mesa ___ madera', answer: 'de', why: 'El material: de.' },
            { text: 'una lámpara ___ luz blanca', answer: 'con', why: 'Una característica especial: con.' },
            { text: 'un bolso negro', answer: 'adj', why: '«Negro» es un adjetivo: el color.' },
            { text: 'un libro ___ cocina', answer: 'de', why: 'El tema: de.' },
            { text: 'dos sillas cómodas', answer: 'adj', why: '«Cómodas» es un adjetivo.' },
            { text: 'un bolso ___ dos bolsillos', answer: 'con', why: 'Una parte: con.' },
            { text: 'una mesa ___ reuniones', answer: 'para', why: 'La finalidad: para.' },
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
            { context: 'Es un libro para aprender a cocinar.', prompt: 'Un libro ___ cocina.', options: ['de', 'con', 'para'], answer: 0, why: 'El tema del libro: de.' },
            { context: 'La casa tiene un jardín.', prompt: 'Una casa ___ jardín.', options: ['de', 'con', 'para'], answer: 1, why: 'Una parte de la casa: con.' },
            { context: 'En la mesa comen dos personas.', prompt: 'Una mesa ___ dos.', options: ['de', 'con', 'para'], answer: 2, why: 'Para cuántas personas: para.' },
            { context: 'Hablas de tus zapatos nuevos.', prompt: 'Mis zapatos ___ son muy cómodos.', options: ['nuevo', 'nuevas', 'nuevos'], answer: 2, why: '«Zapatos»: masculino plural, nuevos.' },
            { context: 'Hablas de una ventana.', prompt: 'La ventana ___ está abierta.', options: ['grande', 'grando', 'grandes'], answer: 0, why: '«Grande» termina en -e: igual en masculino y femenino singular.' },
            { context: 'Marta busca una página en su libro.', prompt: 'La página diez ___ libro.', options: ['de el', 'del', 'con el'], answer: 1, why: 'De + el = del.' },
          ] },
        ] },
        { title: 'Compara los significados', blocks: [
          { kind: 'choice', items: [
            { prompt: '¿Qué grupo habla del **contenido** de la carpeta?', options: ['una carpeta de documentos', 'una carpeta para la reunión'], answer: 0, why: '«De documentos»: lo que hay dentro. «Para la reunión»: su finalidad.' },
            { prompt: '¿Qué mesa sirve para **más personas**?', options: ['una mesa para dos', 'una mesa para seis'], answer: 1, why: '«Para seis» = seis personas.' },
            { prompt: '«Un vaso de agua» y «un vaso para agua»: ¿cuál tiene agua dentro?', options: ['un vaso de agua', 'un vaso para agua'], answer: 0, why: '«De agua»: el contenido. «Para agua»: la finalidad; puede estar vacío.' },
            { prompt: '¿Qué grupo describe el **color**?', options: ['un bolso de cuero', 'un bolso negro', 'un bolso con bolsillos'], answer: 1, why: '«Negro» es un adjetivo de color.' },
          ] },
        ] },
        { title: 'Completa la conversación', blocks: [
          { kind: 'chat-fill', title: 'Buscando un regalo', lines: [
            { who: 'Vendedora', text: 'Hola, ¿qué busca?' },
            { who: 'Andrés', text: 'Un regalo ___ mi madre.', options: ['para', 'de', 'con'], answer: 0, why: 'La persona que va a recibir el regalo: para.' },
            { who: 'Vendedora', text: 'Tenemos unas tazas ___ muy bonitas.', options: ['blancas', 'blancos', 'blanca'], answer: 0, why: '«Tazas»: femenino plural, blancas.' },
            { who: 'Andrés', text: 'Mi madre toma mucho té. ¿Tiene una taza ___ té?', options: ['para', 'con', 'del'], answer: 0, why: 'La finalidad de la taza: para té.' },
            { who: 'Vendedora', text: 'Sí, esta taza ___ flores es para té.', options: ['con', 'para', 'de el'], answer: 0, why: 'Una característica especial, las flores: con.' },
            { who: 'Andrés', text: 'Perfecto. ¿Y tiene una caja ___ regalo?', options: ['de', 'con', 'para la'], answer: 0, why: '«Caja de regalo»: el tipo de caja, con «de» y sin artículo.' },
          ] },
        ] },
        { title: 'Encuentra el error', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Tengo unos libros interesantes de cocina.', ok: true, why: 'Correcta: unos libros interesantes, todo masculino plural.' },
            { sentence: 'Busco una lámpara blanco.', ok: false, options: ['Busco una lámpara blanca.', 'Busco una blanca lámpara.', 'Busco un lámpara blanco.'], answer: 0, why: '«Lámpara» es femenino: blanca.' },
            { sentence: 'Vivo en una casa con jardín.', ok: true, why: 'Correcta: con + una parte de la casa.' },
            { sentence: 'Necesito dos sillas cómoda.', ok: false, options: ['Necesito dos sillas cómodas.', 'Necesito dos silla cómodas.', 'Necesito dos cómodas sillas.'], answer: 0, why: 'Plural en todo el grupo: sillas cómodas.' },
            { sentence: 'Es la oficina de el director.', ok: false, options: ['Es la oficina del director.', 'Es la oficina al director.', 'Es la oficina con el director.'], answer: 0, why: 'De + el = del.' },
            { sentence: 'Quiero una casa con muy ventanas.', ok: false, options: ['Quiero una casa con muchas ventanas.', 'Quiero una muy casa con ventanas.', 'Quiero una casa con ventanas mucho.'], answer: 0, why: '«Muy» no va delante de un nombre. Para la cantidad: con muchas ventanas.' },
          ] },
        ] },
        { title: 'Construye grupos', blocks: [
          { kind: 'build', title: 'Ordena las palabras', items: [
            { tiles: ['mesa', 'Una', 'pequeña', 'para cuatro'], accept: ['Una mesa pequeña para cuatro'], en: 'A small table for four.' },
            { tiles: ['con jardín', 'Una casa', 'muy', 'grande'], accept: ['Una casa muy grande con jardín'], en: 'A very big house with a garden.' },
            { tiles: ['sillas', 'Dos', 'azules', 'cómodas', 'y'], accept: ['Dos sillas azules y cómodas', 'Dos sillas cómodas y azules'], en: 'Two blue, comfortable chairs.' },
            { tiles: ['de documentos', 'La carpeta', 'roja'], accept: ['La carpeta roja de documentos', 'La carpeta de documentos roja'], en: 'The red document folder.' },
          ] },
          { kind: 'rewrite', title: 'Transforma el grupo', items: [
            { prompt: 'un libro interesante de cocina', instruction: 'Pásalo a plural con «unos».', accept: ['unos libros interesantes de cocina'] },
            { prompt: 'una silla', instruction: 'Añade el adjetivo «cómodo» con la forma correcta y «con patas negras».', accept: ['una silla cómoda con patas negras'] },
            { prompt: 'la página de el libro', instruction: 'Corrige la contracción.', accept: ['la página del libro'] },
            { prompt: 'la casa blanca', instruction: 'Pásalo a plural.', accept: ['las casas blancas'] },
          ] },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Confirmación del material', coach: 'Primero escucha sin leer.',
      steps: [
        { title: 'Confirmación del material', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha con la idea general. En la segunda, el alumno anota cada objeto con sus detalles y compara con el pedido de Marta.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Puedes bajar la velocidad.' } },
          { kind: 'listen', title: 'Un compañero llama a Marta', channel: 'NOTA DE VOZ · PARA MARTA', src: '/audio/grammar-classroom/110.mp3',
            before: 'Marta pidió una mesa con patas negras, dos sillas cómodas, una lámpara de escritorio y una carpeta. Un compañero le confirma el material. ¿Todo va a estar igual que en el pedido?',
            gist: { prompt: '¿Para qué deja el mensaje el compañero?', options: ['Para confirmar el material y preguntar por la mesa.', 'Para cancelar la reunión.', 'Para pedir una mesa grande.'], answer: 0, why: 'Describe el material y pregunta: «¿La mesa con patas blancas sirve para tu oficina?».' },
            details: [
              { prompt: '¿Cómo son las patas de la mesa?', options: ['Negras.', 'Blancas.', 'Azules.'], answer: 1, why: '«Tengo una mesa pequeña con patas blancas.»' },
              { prompt: '¿Cómo están las sillas?', options: ['Listas.', 'Rotas.', 'En la sala.'], answer: 0, why: '«Las dos sillas cómodas están listas.»' },
              { prompt: '¿Qué no tiene el compañero?', options: ['Una lámpara de escritorio.', 'Una carpeta azul.', 'Una mesa pequeña.'], answer: 0, why: '«No tengo una lámpara de escritorio.»' },
              { prompt: '¿Qué hay en la sala?', options: ['Una lámpara grande con luz blanca.', 'Dos sillas cómodas.', 'Una carpeta de documentos.'], answer: 0, why: '«Hay una lámpara grande con luz blanca en la sala.»' },
              { prompt: '¿Para qué es la carpeta azul?', options: ['Para la oficina.', 'Para los documentos de la reunión.', 'Para Marta.'], answer: 1, why: '«Preparo una carpeta azul para los documentos de la reunión.»' },
            ],
            transcript: 'Marta, tengo una [[mesa|blue]] [[pequeña|teal]] [[con patas blancas|orange]]. Las dos [[sillas|blue]] [[cómodas|teal]] están listas. No tengo una [[lámpara|blue]] [[de escritorio|orange]], pero hay una [[lámpara|blue]] [[grande|teal]] [[con luz blanca|orange]] en la sala. También preparo una [[carpeta|blue]] [[azul|teal]] [[para los documentos de la reunión|orange]]. ¿La [[mesa|blue]] [[con patas blancas|orange]] sirve para tu oficina?',
            reply: { teacher: 'El alumno responde en voz alta como si fuera Marta: ¿le sirve la mesa? ¿Qué lámpara necesita? Cada objeto con dos detalles.', self: 'Responde al mensaje como si fueras Marta: di si la mesa te sirve y qué lámpara necesitas. Usa dos grupos con «de», «con» o «para».' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Tus cosas, con detalles', coach: 'Una pregunta por vez. Da detalles.',
      steps: [
        { title: 'Tus cosas, con detalles', blocks: [
          { kind: 'guide', text: { teacher: 'No hace falta usar todas las preguntas. Cuando el alumno dice un nombre solo («una mesa»), pide un detalle: «¿Cómo es? ¿Para qué es?».', self: 'Responde cada pregunta en voz alta. Para cada cosa, añade al menos un detalle: un adjetivo o «de, con, para».' } },
          { kind: 'talk', cards: [
            { q: '¿Qué hay en tu mesa ahora? Describe dos cosas.', followUps: ['¿De qué color es?', '¿Para qué sirve?', '¿Es nuevo o viejo?'], phrases: ['Hay un [[cuaderno|blue]] [[azul|teal]] [[de español|orange]].', 'Tengo una [[taza|blue]] [[con flores|orange]].', 'Es [[para|orange]]…'], hint: 'Nombre + adjetivo + de, con o para.', example: 'En mi mesa hay un cuaderno azul de español y una taza blanca con flores. También hay una lámpara pequeña para leer.', next: 'Ahora, tu casa.' },
            { q: '¿Cómo es tu casa o tu apartamento?', followUps: ['¿Tiene balcón o jardín?', '¿Cuántas habitaciones tiene?', '¿Cuál es tu habitación favorita?'], phrases: ['Es un [[apartamento|blue]] [[pequeño|teal]] [[con balcón|orange]].', 'Tengo una [[cocina|blue]] [[grande|teal]].', 'Mi habitación [[favorita|teal]] es…'], hint: 'Con una parte de la casa usa «con»: con balcón, con jardín.', example: 'Vivo en un apartamento pequeño con balcón. Tiene dos habitaciones y una cocina muy luminosa. Mi habitación favorita es la sala.', next: 'Hablemos de tu bolso o mochila.' },
            { q: '¿Cómo es tu bolso o tu mochila? Descríbelo para encontrarlo.', followUps: ['¿De qué material es?', '¿Tiene bolsillos?', '¿Qué hay dentro?'], phrases: ['Es una [[mochila|blue]] [[negra|teal]] [[de tela|orange]].', 'Tiene dos bolsillos.', 'Dentro hay unas [[gafas|blue]] [[de sol|orange]].'], hint: 'Imagina que la pierdes: ¿qué detalles ayudan a identificarla?', example: 'Es una mochila gris de tela con dos bolsillos. Dentro hay un libro de cocina y unas gafas de sol.', next: 'Ahora, un objeto especial.', teacher: 'Haz el juego del guardarropa: «Hay tres mochilas grises. ¿Cuál es la tuya?».' },
            { q: '¿Tienes un objeto especial? ¿Cómo es?', followUps: ['¿Quién te lo regaló?', '¿Dónde está?', '¿Por qué es especial?'], phrases: ['Es un [[reloj|blue]] [[antiguo|teal]] [[de mi abuelo|orange]].', 'Es [[de|orange]] madera / metal.', 'Es especial porque…'], hint: '«De mi abuelo»: «de» también dice de quién es.', example: 'Tengo un reloj antiguo de mi abuelo. Es un reloj pequeño de metal con números romanos. Es especial porque es un recuerdo de mi familia.', next: 'Imagina ahora un pedido.' },
            { q: 'Vas a trabajar en casa. ¿Qué necesitas comprar?', followUps: ['¿Para cuántas personas es la mesa?', '¿Qué tipo de silla quieres?', '¿Necesitas una lámpara?'], phrases: ['Necesito una [[mesa|blue]] [[para|orange]] dos.', 'Busco una [[silla|blue]] [[cómoda|teal]] [[con ruedas|orange]].', 'Quiero una [[lámpara|blue]] [[de escritorio|orange]].'], hint: 'Para cada objeto, di un adjetivo y un detalle con de, con o para.', example: 'Necesito una mesa grande para dos personas, una silla cómoda con ruedas y una lámpara de escritorio con luz blanca.', next: 'Para terminar, adivina un objeto.' },
            { q: 'Describe un objeto sin decir su nombre. ¿Qué es?', followUps: ['¿Es grande o pequeño?', '¿Para qué sirve?', '¿De qué material es?'], phrases: ['Es una cosa [[pequeña|teal]] [[de metal|orange]].', 'Es algo [[para|orange]] abrir la puerta.', 'Tiene…'], hint: 'Usa «es una cosa…» o «es algo para…».', example: 'Es una cosa pequeña de metal. Es algo para abrir la puerta. ¿Qué es? ¡Una llave!', teacher: 'Cambien los papeles: tú describes un objeto y el alumno adivina.' },
          ], swap: { teacher: 'Al final, el alumno te pide que describas tu casa o tu objeto favorito con preguntas: «¿Cómo es? ¿Para qué es?».', self: 'Elige tres objetos de tu casa y escribe un grupo completo para cada uno: «una taza blanca con flores».' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Un pedido para tu espacio', coach: 'Detalles claros, objetos fáciles de elegir.',
      steps: [
        { title: 'Un pedido para tu espacio', blocks: [
          { kind: 'guide', text: { teacher: 'Puede escribir en clase o como tarea. Usen la revisión automática y después revisen juntos la concordancia de cada grupo.', self: 'Escribe tu pedido y toca «Revisar mi texto». Comprueba que en cada grupo el determinante, el nombre y el adjetivo concuerdan.' } },
          { kind: 'write', title: 'Necesito…', situation: 'Vas a preparar un espacio para estudiar o trabajar. Escribe un mensaje a una tienda con tu pedido.', task: [
            'Pide **tres objetos**.',
            'Para cada objeto, di **cómo es** (un adjetivo).',
            'Usa **de, con o para** al menos dos veces.',
            'Revisa la **concordancia**: una silla cómoda, dos sillas cómodas.',
          ], starters: ['Hola, necesito…', 'Busco una… para…', 'También quiero un… con…', 'Es para…'],
            words: ['pequeño', 'grande', 'cómodo', 'blanco', 'negro', 'de madera', 'con luz', 'para dos personas', 'de documentos'],
            model: 'Hola, necesito una [[mesa|blue]] [[pequeña|teal]] [[para dos personas|orange]], una [[lámpara|blue]] [[con luz blanca|orange]] y dos [[sillas|blue]] [[cómodas|teal]]. También busco una [[carpeta|blue]] [[azul|teal]] [[de documentos|orange]]. La mesa [[con patas negras|orange]] es buena para mi oficina. Gracias.',
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
            { tone: 'blue', label: 'NÚCLEO', formula: 'determinante + nombre + adjetivo', example: 'una mesa pequeña', caption: 'El nombre manda: todo concuerda con él.', en: 'noun phrase' },
            { tone: 'teal', label: 'CONCORDANCIA', formula: 'la silla cómoda → las sillas cómodas', example: 'unos libros interesantes', caption: 'Masculino o femenino, uno o varios.', en: 'agreement' },
            { tone: 'orange', label: 'DE · CON · PARA', formula: 'nombre + de / con / para + información', example: 'un libro de español, una casa con jardín, una mesa para dos', caption: 'Tema, parte o finalidad.', en: 'of · with · for' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'Del', text: 'Recuerda: de + el = **del**. «La página **del** libro».' },
        ] },
        { title: 'Desafío final', blocks: [
          { kind: 'choice', title: 'Cuatro frases, sin ayuda', items: [
            { prompt: 'Unas camisas ___.', options: ['blancas', 'blancos', 'blanca'], answer: 0, why: '«Camisas»: femenino plural.' },
            { prompt: 'Un vaso ___ agua, por favor.', options: ['con', 'de', 'para el'], answer: 1, why: 'El contenido del vaso: de.' },
            { prompt: 'Una habitación ___ tres personas.', options: ['de', 'con', 'para'], answer: 2, why: 'Para cuántas personas: para.' },
            { prompt: '¿Qué grupo es correcto?', options: ['una grande casa con jardín', 'una casa grande con jardín', 'una casa con grande jardín'], answer: 1, why: 'Determinante + nombre + adjetivo + con…' },
          ] },
        ] },
        { title: 'Tus errores y repaso', blocks: [
          { kind: 'review' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: expande «una silla» con dos detalles. Respuesta modelo: «una silla cómoda con patas negras». Pide otra versión en plural.' },
        ] },
      ],
    },
  ],
};
