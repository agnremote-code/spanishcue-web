import type { LiveLesson } from '../types';

/**
 * Lesson 303 · A1 · Género de sustantivos y terminaciones frecuentes.
 * The general rule (-o / -or masculine, -a / -ción / -dad feminine), the
 * trick words where the ending lies (el problema, el día, el mapa / la mano,
 * la foto, la moto) and feminine words that take «el» (el agua fría, el aula).
 * Scene: Pablo, new in a parcel warehouse, labels packages; Elena, the
 * supervisor, finds three mistakes on his cards. Elena also leaves the voice
 * message. Instructions address the learner with tú; English help throughout.
 */
export const lesson: LiveLesson = {
  id: 303,
  level: 'A1',
  title: 'Género de sustantivos y terminaciones frecuentes',
  subtitle: 'Saber si una palabra es masculina o femenina, también cuando la terminación engaña: el problema, la mano, el agua fría.',
  legend: [
    { tone: 'blue', label: 'Masculino · el, un (masculine)' },
    { tone: 'orange', label: 'Femenino · la, una (feminine)' },
    { tone: 'violet', label: 'Palabra trampa · el problema, la mano (tricky ending)' },
    { tone: 'teal', label: 'Femenina con «el» · el agua, el aula (feminine with el)' },
  ],
  optionNotes: {
    'la problema': '«Problema» termina en -a, pero es masculino: el problema.',
    'la idioma': '«Idioma» termina en -a, pero es masculino: el idioma.',
    'un mano': '«Mano» termina en -o, pero es femenina: una mano.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: '¿El o la?', coach: 'Cada palabra tiene su género. Every noun has a gender.',
      steps: [
        { title: 'Las etiquetas · The labels', blocks: [
          { kind: 'lead', text: 'Pablo es nuevo en un almacén de paquetes. Escribe las etiquetas y las fichas: **el paquete**, **la caja**, **el libro**, **la mesa**. Hoy Elena, la encargada, encuentra tres errores en sus fichas. Al final de la clase sabes si una palabra es **masculina** (el, un) o **femenina** (la, una), también cuando la terminación engaña.', en: 'Pablo is new in a parcel warehouse. He writes the labels and the cards: the parcel, the box, the book, the table. Today Elena, the supervisor, finds three mistakes on his cards. By the end of the class you know if a word is masculine (el, un) or feminine (la, una), even when the ending tricks you.' },
          { kind: 'guide', text: { teacher: 'Tú lees las tres columnas en voz alta y tu alumno repite cada palabra con su artículo. Todavía no hay regla: solo mirar y escuchar.', self: 'Lee las tres columnas en voz alta. Repite cada palabra con su artículo: «el libro», no solo «libro».' } },
          { kind: 'compare', title: 'Las etiquetas de Pablo · Pablo’s labels', columns: [
            { tone: 'blue', label: 'MASCULINO · el, un', sentence: '[[el libro|blue]] · [[un paquete|blue]]', idea: 'Muchas palabras en -o son masculinas.', en: 'the book · a parcel' },
            { tone: 'orange', label: 'FEMENINO · la, una', sentence: '[[la mesa|orange]] · [[una caja|orange]]', idea: 'Muchas palabras en -a son femeninas.', en: 'the table · a box' },
            { tone: 'violet', label: '¡TRAMPA! · tricky', sentence: '[[El problema|violet]] es serio; [[la mano|violet]] es pequeña.', idea: 'La terminación engaña: -a masculina, -o femenina.', en: 'The problem is serious; the hand is small.' },
          ] },
          { kind: 'tip', icon: '💡', title: 'Todas las cosas tienen género · Every thing has a gender', text: 'En español, una mesa o un libro también son **masculinos** o **femeninos**. No es por el significado: es gramática. El artículo (el, la, un, una) te dice el género.', en: 'In Spanish, a table or a book is also masculine or feminine. It is not about meaning: it is grammar. The article (el, la, un, una) tells you the gender.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«La caja»: ¿masculino o femenino?', options: ['Femenino.', 'Masculino.'], answer: 0, why: '«La» es el artículo femenino: la caja.', en: '“La caja” (the box): masculine or feminine?' },
            { prompt: '«Un paquete»: ¿masculino o femenino?', options: ['Femenino.', 'Masculino.'], answer: 1, why: '«Un» es el artículo masculino: un paquete.', en: '“Un paquete” (a parcel): masculine or feminine?' },
            { prompt: '«El problema» termina en -a. ¿Es femenino?', options: ['Sí: todas las palabras en -a son femeninas.', 'No: es masculino, una palabra trampa.'], answer: 1, why: '«El» dice masculino. La -a aquí engaña.', en: '“El problema” ends in -a. Is it feminine?' },
          ] },
        ] },
        { title: 'La regla general · The general rule', mascot: '/brand/mascot/studying.webp', coach: 'La terminación ayuda… casi siempre.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'MASCULINO', question: '¿Cuándo «el»?', en: 'Masculine: el, un', formula: ['el · un + palabra masculina', '-o · -or → casi siempre masculino'],
            meaning: 'Las palabras en **-o** y en **-or** son casi siempre **masculinas**. Van con **el** (the) y **un** (a).',
            examples: [
              { es: '[[El teléfono|blue]] está en la mesa.', en: 'The phone is on the table.' },
              { es: '[[Un vaso|blue]] es para Elena.', en: 'A glass is for Elena.' },
              { es: '[[El color|blue]] de la caja es azul.', en: 'The colour of the box is blue.' },
            ],
            note: 'Con **-e** o con consonante no hay regla fija: [[el paquete|blue]], [[el papel|blue]]… pero [[la llave|orange]], [[la flor|orange]].' },
          { kind: 'concept', tone: 'orange', label: 'FEMENINO', question: '¿Cuándo «la»?', en: 'Feminine: la, una', formula: ['la · una + palabra femenina', '-a · -ción · -sión · -dad · -tad → femenino'],
            meaning: 'Las palabras en **-a** son casi siempre **femeninas**. Las palabras en **-ción**, **-sión**, **-dad** y **-tad** son siempre femeninas. Van con **la** (the) y **una** (a).',
            examples: [
              { es: '[[La etiqueta|orange]] está en la caja.', en: 'The label is on the box.' },
              { es: '[[La dirección|orange]] es correcta.', en: 'The address is correct.' },
              { es: '[[La ciudad|orange]] de destino es Quito.', en: 'The destination city is Quito.' },
            ] },
          { kind: 'table', title: 'Terminaciones frecuentes · Frequent endings', head: ['Terminación (ending)', 'Género', 'Ejemplos'], rows: [
            ['-o', 'masculino (casi siempre)', '[[el libro|blue]] · [[el teléfono|blue]]'],
            ['-or', 'masculino (casi siempre)', '[[el color|blue]] · [[el motor|blue]] · ¡pero [[la flor|orange]]!'],
            ['-a', 'femenino (casi siempre)', '[[la mesa|orange]] · [[la etiqueta|orange]]'],
            ['-ción · -sión', 'femenino', '[[la dirección|orange]] · [[la televisión|orange]]'],
            ['-dad · -tad', 'femenino', '[[la ciudad|orange]] · [[la universidad|orange]] · [[la mitad|orange]]'],
            ['-e · consonante', 'no hay regla (no rule)', '[[el paquete|blue]] · [[la llave|orange]] · [[el papel|blue]] · [[la flor|orange]]'],
          ], note: '«Casi siempre» es importante: hay palabras trampa. Las vemos en el paso siguiente.' },
          { kind: 'tip', icon: '🔑', title: 'Aprende la palabra con su artículo · Learn the word with its article', text: 'No aprendas «paquete»: aprende **el paquete**. No aprendas «llave»: aprende **la llave**. Así nunca dudas.', en: 'Do not learn “paquete”: learn “el paquete”. Do not learn “llave”: learn “la llave”. That way you never hesitate.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '___ televisión', options: ['la', 'el'], answer: 0, why: '-sión: siempre femenino. La televisión.', en: 'the television' },
            { prompt: '___ motor', options: ['el', 'la'], answer: 0, why: '-or: casi siempre masculino. El motor.', en: 'the engine' },
            { prompt: '___ universidad', options: ['la', 'el'], answer: 0, why: '-dad: siempre femenino. La universidad.', en: 'the university' },
            { prompt: '___ flor', options: ['la', 'el'], answer: 0, why: 'Termina en -or, pero es femenina: la flor. Una excepción.', en: 'the flower' },
          ] },
        ] },
        { title: 'Palabras trampa · Tricky words', mascot: '/brand/mascot/standing.webp', coach: '-a masculina, -o femenina: de memoria.', blocks: [
          { kind: 'concept', tone: 'violet', label: 'PALABRAS TRAMPA', question: '¿Por qué «el problema» y «la mano»?', en: 'Tricky words: the ending lies', formula: ['el · un + -a: el problema, el tema, el idioma, el día, el mapa', 'la · una + -o: la mano, la foto, la moto'],
            meaning: 'Algunas palabras **engañan**: terminan en -a y son **masculinas**, o terminan en -o y son **femeninas**. Son pocas y muy frecuentes. Se aprenden **de memoria**, con su artículo.',
            examples: [
              { es: '[[El problema|violet]] es la dirección.', en: 'The problem is the address.' },
              { es: '[[El idioma|violet]] de la etiqueta es el español.', en: 'The language of the label is Spanish.' },
              { es: '[[El día|violet]] es largo en el almacén.', en: 'The day is long in the warehouse.' },
              { es: '[[La foto|violet]] del paquete está en la ficha.', en: 'The photo of the parcel is on the card.' },
              { es: '[[La moto|violet]] del repartidor está en la calle.', en: 'The delivery rider’s motorbike is in the street.' },
            ],
            note: '«Foto» y «moto» son formas cortas de **la fotografía** y **la motocicleta**: por eso son femeninas. Ojo: no todas las palabras en -ma son masculinas: [[la cama|orange]], [[la crema|orange]], [[la forma|orange]].' },
          { kind: 'table', title: 'Tres pares · Three pairs', head: ['-a, pero masculino', '-o, pero femenino', 'Frase (sentence)'], rows: [
            ['[[el problema|violet]]', '[[la mano|violet]]', 'El problema es serio; la mano es pequeña. (The problem is serious; the hand is small.)'],
            ['[[el día|violet]]', '[[la foto|violet]]', 'El día es largo; la foto es bonita. (The day is long; the photo is nice.)'],
            ['[[el mapa|violet]]', '[[la moto|violet]]', 'El mapa es nuevo; la moto es vieja. (The map is new; the motorbike is old.)'],
          ] },
          { kind: 'tip', icon: '💡', title: 'El adjetivo también lo dice · The adjective tells you too', text: 'Mira las frases: el problema es **serio**, la mano es **pequeña**. La palabra que describe cambia con el género (-o / -a). Hoy solo lo ves; lo practicas en la clase 006.', en: 'Look at the sentences: the problem is “serio”, the hand is “pequeña”. The describing word changes with the gender (-o / -a). Today you only notice it; you practise it in class 006.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Cuál es correcto? · Which is correct?', options: ['el problema', 'la problema'], answer: 0, why: 'Problema termina en -a, pero es masculino: el problema.', en: 'the problem' },
            { prompt: '¿Cuál es correcto? · Which is correct?', options: ['una mano', 'un mano'], answer: 0, why: 'Mano termina en -o, pero es femenina: una mano.', en: 'a hand' },
            { prompt: '¿Cuál es correcto? · Which is correct?', options: ['la idioma', 'el idioma'], answer: 1, why: 'Idioma es masculino, como problema y tema: el idioma.', en: 'the language' },
            { prompt: '«Crema» termina en -ma. ¿Es masculina, como «problema»?', options: ['Sí: el crema.', 'No: es la crema, femenina.'], answer: 1, why: 'No todas las palabras en -ma son masculinas: la crema, la cama.', en: '“Crema” (cream) ends in -ma. Is it masculine, like “problema”?' },
          ] },
        ] },
        { title: 'El agua · Feminine with «el»', mascot: '/brand/mascot/kneeling.webp', coach: 'El agua es femenina. Sí, con «el».', blocks: [
          { kind: 'concept', tone: 'teal', label: 'EL + A TÓNICA', question: '¿Por qué «el agua»?', en: 'Feminine words that start with a stressed a', formula: ['el · un + palabra femenina con á tónica (singular)', 'el agua · el aula · el área'],
            meaning: 'Algunas palabras **femeninas** empiezan con **a** tónica: la voz es fuerte en esa a (**A**-gua, **AU**-la, **Á**-rea). En singular llevan **el** o **un**, por el sonido. Pero la palabra sigue siendo **femenina**: el agua **fría**. En plural, otra vez **las**.',
            examples: [
              { es: '[[El agua|teal]] está fría.', en: 'The water is cold.' },
              { es: '[[El aula|teal]] 12 es nueva.', en: 'Classroom 12 is new.' },
              { es: '[[El área|teal]] de envíos está cerrada.', en: 'The shipping area is closed.' },
              { es: 'Las aulas de la escuela son grandes.', en: 'The school classrooms are big.' },
            ],
            note: 'Si la a no es tónica, usamos «la»: [[la alarma|orange]] (a-**LAR**-ma), [[la ayuda|orange]] (a-**YU**-da).' },
          { kind: 'decide', title: '¿El o la? Piensa en una palabra y responde · Think of a word', steps: [
            { q: '¿Es una palabra trampa (problema, tema, idioma, día, mapa · mano, foto, moto)? (A tricky word?)', yes: 'Usa la forma de memoria: **el problema**, **la mano**.', no: 'next' },
            { q: '¿Es femenina y empieza con a tónica (agua, aula, área)? (Feminine with a stressed a?)', yes: 'En singular, **el** o **un**: el agua fría. En plural, **las**: las aguas.', no: 'next' },
            { q: '¿Termina en -ción, -sión, -dad o -tad? (These endings?)', yes: 'Femenina: **la** dirección, **la** ciudad.', no: 'next' },
            { q: '¿Termina en -o, -or o -a? (Ends in -o, -or or -a?)', yes: '-o, -or: **el** libro, **el** color (¡pero la flor!). -a: **la** mesa.', no: 'Termina en -e o en otra consonante: no hay regla. Busca el artículo y apréndelo: el paquete, la llave.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '___ agua de la botella', options: ['el', 'la'], answer: 0, why: 'Agua es femenina, pero con a tónica: el agua.', en: 'the water in the bottle' },
            { prompt: 'El agua está ___.', options: ['frío', 'fría'], answer: 1, why: '«El» es solo por el sonido: agua es femenina, fría.', en: 'The water is cold.' },
            { prompt: '___ alarma del almacén', options: ['la', 'el'], answer: 0, why: 'La a de «alarma» no es tónica (a-LAR-ma): la alarma.', en: 'the warehouse alarm' },
            { prompt: '___ aulas de la escuela', options: ['el', 'las', 'los'], answer: 1, why: 'En plural vuelve el artículo femenino: las aulas.', en: 'the school classrooms' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: '¿Trampa, regla o «el agua»?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la frase con el error. Tu alumno dice qué palabra está mal y por qué: ¿trampa, regla o «el agua»? Después aparece la corrección.', self: 'Lee cada frase, busca la palabra con el artículo incorrecto y toca para ver la corrección.' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'La problema es la dirección.', right: 'El problema es la dirección.', why: 'Problema es una palabra trampa: termina en -a, pero es masculina. (Masculine despite the -a.)' },
            { wrong: 'Contenido: un mano de madera.', right: 'Contenido: una mano de madera.', why: 'Mano termina en -o, pero es femenina: una mano. (Feminine despite the -o.)' },
            { wrong: 'La agua está en el área B.', right: 'El agua está en el área B.', why: 'Agua empieza con a tónica: en singular, el agua. (Stressed a: el.)' },
            { wrong: 'El agua está frío.', right: 'El agua está fría.', why: '«El» es solo por el sonido; agua sigue siendo femenina: fría. (Still feminine.)' },
            { wrong: 'El ciudad de destino es Quito.', right: 'La ciudad de destino es Quito.', why: '-dad es siempre femenino: la ciudad. (Always feminine.)' },
            { wrong: 'Un crema para las manos.', right: 'Una crema para las manos.', why: 'No todas las palabras en -ma son trampa: la crema, una crema. (Not every -ma word is masculine.)' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué frase es correcta? · Which sentence is correct?', options: ['El mapa está en la caja.', 'La mapa está en la caja.'], answer: 0, why: 'Mapa es trampa: el mapa.', en: 'The map is in the box.' },
            { prompt: '¿Qué frase es correcta? · Which sentence is correct?', options: ['La foto es de Quito.', 'El foto es de Quito.'], answer: 0, why: 'Foto viene de «la fotografía»: la foto.', en: 'The photo is of Quito.' },
            { prompt: '¿Qué frase es correcta? · Which sentence is correct?', options: ['El área B está cerrada.', 'La área B está cerrada.', 'El área B está cerrado.'], answer: 0, why: 'Área: el (a tónica), pero femenina: cerrada.', en: 'Area B is closed.' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno dice tres palabras trampa con su artículo y una frase con «el agua». Si duda, vuelve a la tabla de los tres pares.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'Las tres fichas', coach: 'Toca las palabras marcadas. Tap the marked words.',
      steps: [
        { title: 'Elena revisa las fichas · Elena checks the cards', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Elena. Después, tu alumno toca cada palabra marcada y explica el artículo: ¿regla, trampa o «el agua»?', self: 'Lee el diálogo en voz alta. Después toca cada palabra marcada para ver por qué lleva ese artículo.' } },
          { kind: 'explore', title: 'Tres errores en tres fichas', setting: 'Lunes, nueve de la mañana, en un almacén de paquetes. Pablo es nuevo. Elena, la encargada, revisa sus tres fichas. (Monday, 9 a.m., in a parcel warehouse. Pablo is new. Elena, the supervisor, checks his three cards.)', lines: [
            { who: 'Elena', text: 'Buenos días, Pablo. ¿Están listas las fichas para [[el área|teal]] de envíos?', en: 'Good morning, Pablo. Are the cards ready for the shipping area?' },
            { who: 'Pablo', text: 'Sí, aquí están. Son tres: [[un paquete|blue]] para Quito, [[una caja|orange]] para Lima y otra caja para una escuela.', en: 'Yes, here they are. There are three: a parcel for Quito, a box for Lima and another box for a school.' },
            { who: 'Elena', text: 'A ver. Ficha uno: «la problema de la dirección». No, Pablo: es [[el problema|violet]].', en: 'Let’s see. Card one: “la problema de la dirección”. No, Pablo: it’s “el problema”.' },
            { who: 'Pablo', text: '¿El problema? ¡Pero termina en -a!', en: '“El problema”? But it ends in -a!' },
            { who: 'Elena', text: 'Sí, pero es masculino, como [[el tema|violet]] o [[el día|violet]]. Ficha dos: «un mapa de Lima y un mano de madera».', en: 'Yes, but it’s masculine, like “el tema” or “el día”. Card two: “un mapa de Lima y un mano de madera”.' },
            { who: 'Pablo', text: '¿Qué está mal? [[Un mapa|violet]] es correcto, ¿no?', en: 'What’s wrong? “Un mapa” is correct, isn’t it?' },
            { who: 'Elena', text: 'Sí, el mapa está bien. Pero es [[una mano|violet]]: [[la mano|violet]] es femenina.', en: 'Yes, the map is fine. But it’s “una mano”: “la mano” is feminine.' },
            { who: 'Pablo', text: 'Ah, claro: como [[la foto|violet]] o [[la moto|violet]]. Terminan en -o, pero son femeninas.', en: 'Oh, of course: like “la foto” or “la moto”. They end in -o, but they’re feminine.' },
            { who: 'Elena', text: 'Exacto. Ficha tres: «paquete para la aula 12». Es [[el aula|teal]], Pablo.', en: 'Exactly. Card three: “paquete para la aula 12”. It’s “el aula”, Pablo.' },
            { who: 'Pablo', text: '¿El aula? ¿Entonces es masculina?', en: '“El aula”? So it’s masculine?' },
            { who: 'Elena', text: 'No, es femenina: [[el aula nueva|teal]]. Es como [[el agua fría|teal]]: «el» solo por el sonido.', en: 'No, it’s feminine: “el aula nueva”. It’s like “el agua fría”: “el” only because of the sound.' },
            { who: 'Pablo', text: 'Entendido. Ahora corrijo las tres fichas. ¡Gracias, Elena!', en: 'Got it. I’ll correct the three cards now. Thanks, Elena!' },
          ], notes: {
            'el área': '**Área** es femenina, pero empieza con á tónica: en singular, **el área**.',
            'un paquete': '**Paquete** termina en -e: no hay regla. Es masculino: **un paquete**, el paquete.',
            'una caja': '**Caja** termina en -a y es femenina, como casi todas: **una caja**.',
            'el problema': 'Palabra trampa: termina en -a, pero es masculina: **el problema**. El error de la ficha uno.',
            'el tema': 'Otra palabra en -ma masculina: **el tema** (the topic), como el problema.',
            'el día': '**Día** termina en -a, pero es masculino: **el día**, buenos días.',
            'Un mapa': '**Mapa** es trampa: -a, pero masculino. Pablo lo escribe bien: **un mapa**.',
            'una mano': 'Palabra trampa: termina en -o, pero es femenina: **una mano**. El error de la ficha dos.',
            'la mano': 'Con el artículo definido, igual: **la mano** es femenina.',
            'la foto': '**Foto** = la fotografía, en corto. Por eso es femenina: **la foto**.',
            'la moto': '**Moto** = la motocicleta, en corto. Femenina: **la moto**.',
            'el aula': '**Aula** (classroom) empieza con a tónica: **el aula**. El error de la ficha tres.',
            'el aula nueva': '«El» delante, pero la palabra es femenina: el aula **nueva**, no «nuevo».',
            'el agua fría': 'El mismo caso: **el agua**, pero **fría**. Agua es femenina.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Cuántas fichas revisa Elena?', options: ['Tres.', 'Dos.', 'Una.'], answer: 0, why: '«Son tres: un paquete para Quito, una caja para Lima y otra caja para una escuela».', en: 'How many cards does Elena check?' },
            { prompt: '¿Qué está mal en la ficha dos?', options: ['«Un mano»: es «una mano».', '«Un mapa»: es «una mapa».', 'Nada: está bien.'], answer: 0, why: '«El mapa está bien. Pero es una mano».', en: 'What is wrong on card two?' },
            { prompt: '¿Por qué es «el aula»?', options: ['Empieza con a tónica; la palabra es femenina.', 'Porque aula es masculina.', 'Porque termina en -a.'], answer: 0, why: '«Es femenina: el aula nueva. Es como el agua fría».', en: 'Why is it “el aula”?' },
          ] },
        ] },
        { title: 'Las etiquetas nuevas · The new labels', mascot: '/autoestudio/mascot/noting.webp', blocks: [
          { kind: 'lead', text: 'Pablo prepara más etiquetas para el almacén. ¿Qué artículo lleva cada palabra?', en: 'Pablo prepares more labels for the warehouse. Which article does each word take?' },
          { kind: 'classify', title: '¿El o la en la etiqueta? · El or la on the label?', categories: [
            { id: 'el', label: 'EL · masculino', tone: 'blue' },
            { id: 'la', label: 'LA · femenino', tone: 'orange' },
            { id: 'elf', label: 'EL · pero femenina (á tónica)', tone: 'teal' },
          ], items: [
            { text: '… mapa de Lima', answer: 'el', why: 'Mapa es trampa: el mapa.' },
            { text: '… foto del paquete', answer: 'la', why: 'Foto es trampa: la foto.' },
            { text: '… dirección de la escuela', answer: 'la', why: '-ción: siempre femenino.' },
            { text: '… agua para la oficina', answer: 'elf', why: 'Agua: femenina con a tónica, el agua.' },
            { text: '… idioma de la ficha', answer: 'el', why: 'Idioma es masculino, como problema.' },
            { text: '… moto del repartidor', answer: 'la', why: 'Moto = la motocicleta: la moto.' },
            { text: '… área C', answer: 'elf', why: 'Área: femenina con á tónica, el área.' },
            { text: '… motor del camión', answer: 'el', why: '-or: masculino, el motor.' },
          ] },
          { kind: 'teacher', text: 'Pregunta útil para cada palabra: «¿Es una palabra trampa?». Si la respuesta es no, la terminación decide.' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: '¿Regla, trampa o «el agua»? Rule, trick or “el agua”?',
      steps: [
        { title: 'Elige el artículo · Choose the article', blocks: [
          { kind: 'choice', items: [
            { context: 'Pablo escribe una etiqueta. (Pablo writes a label.)', prompt: 'Contenido: ___ sistema de alarma.', options: ['una', 'un'], answer: 1, why: 'Sistema es masculino, como problema: un sistema.', en: 'Contents: an alarm system.' },
            { context: 'Elena habla de Lima. (Elena talks about Lima.)', prompt: '___ clima de Lima es húmedo.', options: ['El', 'La'], answer: 0, why: 'Clima termina en -a, pero es masculino: el clima.', en: 'The climate in Lima is humid.' },
            { context: 'Una foto para el catálogo. (A photo for the catalogue.)', prompt: '___ foto del catálogo está en la mesa.', options: ['El', 'La'], answer: 1, why: 'Foto termina en -o, pero es femenina: la foto.', en: 'The catalogue photo is on the table.' },
            { context: 'Pablo pregunta por un cliente. (Pablo asks about a customer.)', prompt: '¿Cuál es ___ del cliente: español o portugués?', options: ['la idioma', 'el idioma'], answer: 1, why: 'Idioma es masculino: el idioma.', en: 'Which is the customer’s language: Spanish or Portuguese?' },
            { context: 'Un paquete para Cusco. (A parcel for Cusco.)', prompt: 'Paquete para ___ universidad de Cusco.', options: ['la', 'el'], answer: 0, why: '-dad es siempre femenino: la universidad.', en: 'Parcel for the University of Cusco.' },
            { context: 'Una crema en una caja. (A cream in a box.)', prompt: 'Contenido: ___ crema para las manos.', options: ['una', 'un'], answer: 0, why: 'Crema termina en -ma, pero no es trampa: una crema.', en: 'Contents: a hand cream.' },
          ] },
        ] },
        { title: 'Ordena el almacén · Sort the warehouse', blocks: [
          { kind: 'classify', title: '¿Qué artículo? · Which article?', categories: [
            { id: 'el', label: 'EL · masculino', tone: 'blue' },
            { id: 'la', label: 'LA · femenino', tone: 'orange' },
            { id: 'elf', label: 'EL · pero femenina', tone: 'teal' },
          ], items: [
            { text: '… tema', answer: 'el', why: 'Tema: -a, pero masculino. El tema.' },
            { text: '… cama', answer: 'la', why: 'Cama: -ma, pero femenina, como casi todas las palabras en -a. La cama.' },
            { text: '… canción', answer: 'la', why: '-ción: siempre femenino. La canción.' },
            { text: '… flor', answer: 'la', why: '-or, pero femenina: la flor. Una excepción.' },
            { text: '… aula', answer: 'elf', why: 'Femenina con a tónica: el aula.' },
            { text: '… planeta', answer: 'el', why: 'Planeta: -a, pero masculino. El planeta.' },
          ] },
        ] },
        { title: 'Corrige las fichas · Correct the cards', blocks: [
          { kind: 'fix', items: [
            { sentence: 'El sistema de la oficina es nuevo.', ok: true, why: 'Correcta: sistema es masculino, el sistema.' },
            { sentence: 'Hoy es una día largo.', ok: false, options: ['Hoy es un día largo.', 'Hoy es una día larga.', 'Hoy es la día largo.'], answer: 0, why: 'Día termina en -a, pero es masculino: un día largo.' },
            { sentence: 'El flor es para Elena.', ok: false, options: ['Los flor es para Elena.', 'El flora es para Elena.', 'La flor es para Elena.'], answer: 2, why: '-or es casi siempre masculino, pero flor es femenina: la flor.' },
            { sentence: 'La alarma está en el área B.', ok: true, why: 'Correcta: la a de alarma no es tónica (la alarma); área sí (el área).' },
            { sentence: 'La aula 12 está cerrada.', ok: false, options: ['El aula 12 está cerrada.', 'El aula 12 está cerrado.', 'La aula 12 está cerrado.'], answer: 0, why: 'Aula: el, por la a tónica; pero es femenina: cerrada.' },
          ] },
        ] },
        { title: 'Una llamada al almacén · A call to the warehouse', blocks: [
          { kind: 'chat-fill', title: 'Rosa llama por su paquete', lines: [
            { who: 'Rosa', text: 'Buenos días. Soy Rosa Vega. Es por mi paquete para Quito.' },
            { who: 'Pablo', text: 'Buenos días. Sí, aquí está ___ ficha de su paquete.', options: ['un', 'la', 'el'], answer: 1, why: 'Ficha termina en -a y es femenina: la ficha.' },
            { who: 'Rosa', text: 'Contenido: ___ mapa antiguo y dos libros.', options: ['una', 'la', 'un'], answer: 2, why: 'Mapa es trampa: un mapa.' },
            { who: 'Pablo', text: 'Correcto. Pero hay ___ problema: no está el número de la calle.', options: ['una', 'la', 'un'], answer: 2, why: 'Problema es masculino: un problema.' },
            { who: 'Rosa', text: 'Ah, perdón. ___ dirección es calle Sol, número 8.', options: ['La', 'El', 'Un'], answer: 0, why: '-ción: femenino, la dirección.' },
            { who: 'Pablo', text: 'Gracias. ___ moto del repartidor sale a las tres.', options: ['La', 'El', 'Un'], answer: 0, why: 'Moto = la motocicleta: la moto.' },
            { who: 'Rosa', text: '¡Perfecto! Muchas gracias.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['es', 'El', 'nuevo.', 'sistema'], accept: ['El sistema es nuevo.'], en: 'The system is new.' },
            { tiles: ['está', 'La', 'en', 'moto', 'calle.', 'la'], accept: ['La moto está en la calle.'], en: 'The motorbike is in the street.' },
            { tiles: ['fría.', 'agua', 'está', 'El'], accept: ['El agua está fría.'], en: 'The water is cold.' },
          ] },
        ] },
        { title: 'Escribe la ficha bien · Write the card correctly', blocks: [
          { kind: 'rewrite', title: 'Corrige el artículo · Correct the article', items: [
            { prompt: 'Contenido: un mapa y un foto de la ciudad.', instruction: 'Una palabra tiene el artículo incorrecto. Escribe la frase bien. (One article is wrong.)', accept: ['Contenido: un mapa y una foto de la ciudad.'] },
            { prompt: 'La agua de la oficina está en el área C.', instruction: 'Una palabra tiene el artículo incorrecto. Escribe la frase bien. (One article is wrong.)', accept: ['El agua de la oficina está en el área C.'] },
            { prompt: 'Paquete para el universidad de Lima.', instruction: 'Una palabra tiene el artículo incorrecto. Escribe la frase bien. (One article is wrong.)', accept: ['Paquete para la universidad de Lima.'] },
          ] },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Un mensaje de Elena', coach: 'Primero escucha sin leer. Listen first, read later.',
      steps: [
        { title: 'Elena deja un mensaje de voz · Elena leaves a voice message', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: la idea general. Segunda escucha: tu alumno dice «¡trampa!» cada vez que oye una palabra trampa o «el» con una palabra femenina. Después, las preguntas.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Fíjate en el artículo de cada cosa. (Listen once for the gist, once for the details.)' } },
          { kind: 'listen', title: 'Un mensaje de Elena', channel: 'MENSAJE DE VOZ · INÉS, LA ENCARGADA', src: '/audio/grammar-live/303.mp3',
            before: 'Elena deja un mensaje de voz a Pablo sobre los paquetes de hoy. ¿Qué crees que dice? (Elena leaves Pablo a voice message about today’s parcels. What do you think she says?)',
            gist: { prompt: '¿Para qué llama Elena? · Why does Elena call?', options: ['Para dar información de un paquete y del almacén.', 'Para hablar de su fin de semana.', 'Para pedir una moto nueva.'], answer: 0, why: 'Habla del paquete grande, del problema de la dirección y del agua.', en: 'Why does Elena call?' },
            details: [
              { prompt: '¿Para dónde es el paquete grande?', options: ['Para el aula 12 de la universidad.', 'Para la oficina de Lima.', 'Para el área B.'], answer: 0, why: '«El paquete grande es para la universidad, para el aula doce».', en: 'Where is the big parcel going?' },
              { prompt: '¿Qué hay en el paquete?', options: ['Agua y una flor.', 'Un mapa, una foto de la ciudad y una crema.', 'Dos libros y una moto.'], answer: 1, why: '«Dentro hay un mapa, una foto de la ciudad y una crema para las manos».', en: 'What is in the parcel?' },
              { prompt: '¿Cuál es el problema?', options: ['La dirección no está completa.', 'El paquete está abierto.', 'El aula está cerrada.'], answer: 0, why: '«El problema es la dirección: no está completa».', en: 'What is the problem?' },
              { prompt: '¿Dónde está el agua para la oficina?', options: ['En la mesa de Pablo.', 'En el área B, al lado de la moto.', 'En el aula 12.'], answer: 1, why: '«El agua para la oficina está en el área B, al lado de la moto del repartidor».', en: 'Where is the water for the office?' },
            ],
            transcript: 'Hola, Pablo, soy Elena. Un mensaje rápido sobre los paquetes de hoy. El paquete grande es para la universidad, para [[el aula|teal]] doce. Ojo: [[el aula|teal]], con «el». Dentro hay [[un mapa|violet]], [[una foto|violet]] de la ciudad y una crema para las manos. [[El problema|violet]] es la dirección: no está completa. Falta el número de la calle. Y otra cosa: [[el agua|teal]] para la oficina está en [[el área|teal]] B, al lado de [[la moto|violet]] del repartidor. Por favor, corrige las fichas antes de las tres. ¡Gracias, Pablo! Hasta luego.',
            reply: { teacher: 'Tú eres Elena. Tu alumno responde como Pablo con tres frases: dónde está el paquete, cuál es el problema y dónde está el agua. Cada cosa, con su artículo.', self: 'Responde a Elena en voz alta como Pablo: «Hola, Elena. El paquete… El problema… El agua…». Cuida cada artículo. (Answer Elena aloud as Pablo.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'En el almacén', coach: 'Cada cosa con su artículo. Every thing with its article.',
      steps: [
        { title: 'Habla en el almacén · Talk in the warehouse', blocks: [
          { kind: 'guide', text: { teacher: 'Tú eres Elena y haces las preguntas. Tu alumno responde con frases cortas y cada palabra con su artículo. Si un artículo está mal, tú repites la palabra bien y sigues.', self: 'Lee la pregunta y responde en voz alta. Di cada palabra con su artículo. Si quieres, escribe tu respuesta. (Read the question and answer aloud.)' } },
          { kind: 'talk', cards: [
            { q: 'Mira tu mesa: nombra cinco cosas con un o una · Look at your desk: name five things with un or una', followUps: ['¿Qué cosa es masculina? ¿Y femenina? (Which is masculine? Feminine?)', '¿Hay una palabra trampa? (Any tricky word?)'], phrases: ['[[un libro|blue]] · [[un teléfono|blue]]', '[[una llave|orange]] · [[una foto|violet]]', 'En mi mesa: un…, una…'], hint: 'Di cada cosa con su artículo. Si no sabes el género, pregunta: «¿Es el o la?».', example: 'En mi mesa: un libro, un teléfono, una llave, una foto y un vaso de agua.', next: 'Ahora, las fichas de Pablo.', teacher: 'Responde tú también con tu mesa real. Así tu alumno oye más palabras con artículo.' },
            { q: 'Elena te da una ficha: «la problema, un mano, la agua». Corrige y explica · Correct the card and explain', followUps: ['¿Por qué «el problema»? (Why?)', '¿El agua es masculina o femenina? (Masculine or feminine?)'], phrases: ['Es [[el problema|violet]]: es una palabra trampa.', 'Es [[una mano|violet]]: es femenina.', 'Es [[el agua|teal]]: femenina, pero con «el».'], hint: 'Tres correcciones y una razón corta para cada una.', example: 'Es el problema: termina en -a, pero es masculino. Es una mano: es femenina. Y es el agua: es femenina, pero empieza con a tónica.', next: 'Ahora, tu idioma.' },
            { q: '¿Cuál es tu idioma? ¿Y el idioma de tu familia? · What is your language? And your family’s?', followUps: ['¿Es difícil el español? (Is Spanish hard?)', '¿Cuál es el problema número uno en español? (Your number-one problem?)'], phrases: ['[[El idioma|violet]] de mi familia es…', 'Mi idioma es el inglés.', '[[El problema|violet]] número uno es…'], hint: 'Idioma y problema: dos palabras trampa. Las dos con «el».', example: 'Mi idioma es el inglés. El idioma de mi familia es el inglés también. El problema número uno en español es el género.', next: 'Ahora, un paquete.' },
            { q: 'Un paquete para un amigo: ¿qué es y para quién es? · A parcel for a friend: what is in it and who is it for?', followUps: ['¿Y la dirección? (And the address?)', '¿Para qué ciudad es? (For which city?)'], phrases: ['Es [[un mapa|violet]] y [[una foto|violet]].', 'Es para…', '[[La dirección|orange]] es…'], hint: 'Nombra dos o tres cosas con un / una. Después di para quién es y la dirección.', example: 'Es un mapa de Lima, una foto y una crema. Es para Ana. La dirección es calle Luna, número 4. La ciudad es Quito.', next: 'Ahora, ¿dónde está?' },
            { q: '¿Dónde está? Un compañero busca cosas en el almacén · Where is it? A colleague is looking for things', followUps: ['¿Y el agua? (And the water?)', '¿Y la moto del repartidor? (And the rider’s motorbike?)', '¿Y el mapa? (And the map?)'], phrases: ['[[El agua|teal]] está en…', '[[La moto|violet]] está en…', '[[El mapa|violet]] está en…'], hint: '«Está en» + lugar, como en la clase 001. El artículo de la cosa, bien.', example: 'El agua está en el área B. La moto está en la calle. El mapa está en la caja, en la mesa de Pablo.', next: 'Para terminar, tus palabras trampa.' },
            { q: 'Tus palabras trampa: di tres y una frase con cada una · Your tricky words: say three, with a sentence each', followUps: ['¿Cuál es la más difícil para ti? (Which is the hardest for you?)', '¿Conoces otra? (Do you know another one?)'], phrases: ['[[El día|violet]] es…', '[[La mano|violet]] es…', '[[El tema|violet]] de hoy es…'], hint: 'Elige entre: el problema, el tema, el idioma, el día, el mapa, la mano, la foto, la moto.', example: 'El día es largo. La foto es de mi familia. El tema de hoy es el género.', teacher: 'Cuando tu alumno dice una palabra trampa bien, tú dices otra frase con ella. Después, cambian los papeles.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno es Elena y te da una ficha con errores. Tú corriges y él o ella explica.', self: 'Ahora tú eres Elena: inventa una ficha con dos errores, dila en voz alta y corrígela. (Now you are Elena: invent a card with two mistakes and correct it.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Las fichas corregidas', coach: 'Corto y claro. Short and clear.',
      steps: [
        { title: 'Un mensaje para Elena · A message for Elena', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos cada artículo: ¿regla, trampa o «el agua»? Después, tu alumno lee su mensaje en voz alta.', self: 'Escribe tu mensaje y toca «Revisar mi texto». Mira cada artículo. (Write your message and tap “Revisar mi texto”.)' } },
          { kind: 'write', title: 'Las tres fichas, bien · The three cards, correct', situation: 'Eres Pablo. Escribe un mensaje corto a Elena: las tres fichas ya están corregidas. Describe el contenido de los paquetes y dónde están las cosas. (You are Pablo. Write a short message to Elena: the three cards are corrected. Describe what is in the parcels and where things are.)', task: [
            'Saluda a Elena y di que las fichas están bien. (Greet Elena.)',
            'Usa una palabra trampa en -a con «el» o «un»: el problema, el mapa, el día… (A tricky -a word.)',
            'Usa una palabra trampa en -o con «la» o «una»: la mano, la foto, la moto. (A tricky -o word.)',
            'Usa una palabra femenina con «el»: el agua, el aula, el área. (A feminine word with el.)',
            'Despídete con tu nombre. (Sign off with your name.)',
          ], starters: ['Hola, Elena:', 'Las tres fichas ya están bien.', 'Ficha 1: el problema es…', 'Ficha 2: el contenido es…', 'Ficha 3: el paquete es para…', 'El agua está en…', 'Gracias. Pablo'],
            words: ['el problema', 'el mapa', 'el día', 'la mano', 'la foto', 'la moto', 'el agua', 'el aula', 'el área', 'la dirección', 'la ficha', 'el paquete', 'la caja'],
            model: 'Hola, Elena: las tres fichas ya están bien. Ficha 1: el problema es la dirección, pero ahora está completa. Ficha 2: el contenido es un mapa de Lima y una mano de madera. Ficha 3: el paquete es para el aula 12 de la universidad. El agua para la oficina está en el área B, al lado de la moto. Gracias. Pablo',
            minWords: 35,
            checks: [
              { label: 'Una palabra trampa en -a con el / un (el problema, el mapa…)', pattern: '(?<!\\p{L})(?:el|un)\\s+(?:problema|tema|sistema|idioma|programa|clima|planeta|d[ií]a|mapa)(?!\\p{L})', tip: 'Escribe, por ejemplo: «el problema es la dirección» o «un mapa de Lima».' },
              { label: 'Una palabra trampa en -o con la / una (la mano, la foto, la moto)', pattern: '(?<!\\p{L})(?:la|una)\\s+(?:mano|foto|moto)(?!\\p{L})', tip: 'Escribe, por ejemplo: «una mano de madera» o «la moto del repartidor».' },
              { label: 'Una palabra femenina con el (el agua, el aula, el área)', pattern: '(?<!\\p{L})(?:el|un)\\s+(?:agua|aula|[aá]rea)(?!\\p{L})', tip: 'Escribe, por ejemplo: «el agua está en el área B».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})(?:la|una)\\s+(?:problema|tema|sistema|idioma|programa|clima|planeta|d[ií]a|mapa)(?!\\p{L})', why: 'Problema, tema, idioma, día, mapa… terminan en -a, pero son masculinas: el problema, un mapa.' },
              { pattern: '(?<!\\p{L})(?:el|un)\\s+(?:mano|foto|moto)(?!\\p{L})', why: 'Mano, foto y moto terminan en -o, pero son femeninas: la mano, una foto.' },
              { pattern: '(?<!\\p{L})la\\s+(?:agua|aula|[aá]rea)(?!\\p{L})', why: 'Agua, aula y área empiezan con a tónica: en singular, el agua, el aula, el área.' },
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
            { tone: 'blue', label: 'MASCULINO', formula: 'el · un + -o, -or', example: 'el libro · un motor', caption: 'la regla general', en: 'Masculine: -o, -or (almost always)' },
            { tone: 'orange', label: 'FEMENINO', formula: 'la · una + -a, -ción, -dad', example: 'la mesa · una ciudad', caption: 'la regla general', en: 'Feminine: -a, -ción, -dad' },
            { tone: 'violet', label: 'TRAMPA', formula: 'el problema · el día · el mapa / la mano · la foto · la moto', example: 'El problema es serio; la mano es pequeña.', caption: 'de memoria', en: 'Tricky words: learn them by heart' },
            { tone: 'teal', label: 'EL + Á TÓNICA', formula: 'el agua · el aula · el área (femeninas)', example: 'El agua está fría.', caption: 'el por el sonido, femenina siempre', en: 'Feminine words with el: still feminine' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'La terminación ayuda casi siempre, pero el artículo manda. Aprende cada palabra con **el** o **la**: el problema, la mano, el agua fría.', en: 'The ending helps almost always, but the article is the boss. Learn every word with “el” or “la”: el problema, la mano, el agua fría.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/portrait.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: '___ programa de hoy es corto.', options: ['El', 'La'], answer: 0, why: 'Programa: -ma masculino, como problema.' },
            { prompt: 'Es ___ foto de mi ciudad.', options: ['una', 'un'], answer: 0, why: 'Foto = la fotografía: una foto.' },
            { prompt: '___ agua del almacén está fría.', options: ['El', 'La'], answer: 0, why: 'Agua: femenina con a tónica, el agua.' },
            { prompt: '___ canción es muy bonita.', options: ['El', 'La'], answer: 1, why: '-ción: siempre femenino.' },
            { prompt: 'Contenido: ___ mano de madera y ___ mapa.', options: ['una / una', 'una / un', 'un / una'], answer: 1, why: 'Una mano (femenina), un mapa (masculino): las dos son trampa.' },
          ] },
        ] },
        { title: 'Otra situación · A new situation', mascot: '/autoestudio/mascot/noting.webp', blocks: [
          { kind: 'lead', text: 'Ahora en una escuela: una profesora prepara la lista de su aula. Corrige su lista.', en: 'Now in a school: a teacher prepares the list for her classroom. Correct her list.' },
          { kind: 'rewrite', title: 'La lista del aula · The classroom list', items: [
            { prompt: 'La mapa está en la pared.', instruction: 'Escribe la frase bien. (Write it correctly.)', accept: ['El mapa está en la pared.'] },
            { prompt: 'La aula 3 es nueva.', instruction: 'Escribe la frase bien. (Write it correctly.)', accept: ['El aula 3 es nueva.', 'El aula tres es nueva.'] },
            { prompt: 'Es un foto del grupo.', instruction: 'Escribe la frase bien. (Write it correctly.)', accept: ['Es una foto del grupo.'] },
          ] },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 004 · Artículos definidos e indefinidos', text: 'Ya sabes si una palabra es masculina o femenina. El paso natural ahora: **el, la, los, las** y **un, una, unos, unas**, y cuándo usar cada uno. Con el género claro, elegir el artículo es fácil.', en: 'You now know if a word is masculine or feminine. The natural next step: el, la, los, las and un, una, unos, unas, and when to use each one. With gender clear, choosing the article is easy.', href: '/la-galeria-de-los-articulos', label: 'Ir a la clase 004' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿El o la: problema, mano, agua?». Respuesta esperada: el problema, la mano, el agua (femenina). Tarea: una lista de diez cosas de su casa, cada una con su artículo y dos palabras trampa.' },
        ] },
      ],
    },
  ],
};
