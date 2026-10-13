import type { LiveLesson } from '../types';

/**
 * Lesson 41 · A1 · Adjetivos y concordancia.
 * Clara and Marcos choose rooms and furniture in a small company: every
 * section describes the same two rooms.
 */
export const lesson: LiveLesson = {
  id: 41,
  level: 'A1',
  title: 'Adjetivos y concordancia',
  subtitle: 'Describir personas, lugares y cosas con adjetivos que concuerdan en género y número.',
  legend: [
    { tone: 'blue', label: 'Adjetivo en -o · cambia: nuevo, nueva' },
    { tone: 'teal', label: 'Adjetivo en -e o consonante · una forma: grande, azul' },
    { tone: 'violet', label: 'Nacionalidad · español, española' },
  ],
  optionNotes: {
    blanco: '«Blanco» es masculino singular. Mira el sustantivo: ¿es masculino o femenino? ¿Uno o varios?',
    tranquilo: '«Tranquilo» es masculino singular. Mira el género y el número del sustantivo.',
    tranquila: '«Tranquila» es femenino singular. Mira el género y el número del sustantivo.',
    interesanta: '«Interesante» termina en -e: no tiene forma en -a. Es igual para masculino y femenino.',
    interesantos: '«Interesante» termina en -e: en plural solo agrega -s: interesantes.',
    grando: '«Grande» termina en -e: no cambia por género.',
    azuls: 'Después de consonante, el plural agrega -es: azules.',
    fácils: 'Después de consonante, el plural agrega -es: fáciles.',
    joven: '«Joven» es singular. Si el sustantivo es plural, el adjetivo también: jóvenes.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Describir lo que ves', coach: 'El sustantivo nombra; el adjetivo describe.',
      steps: [
        { title: 'Nombrar y describir', blocks: [
          { kind: 'lead', text: '«Una sala.» Ya sabes qué es. «Una sala **pequeña** y **tranquila**.» Ahora sabes **cómo es**. Las palabras que describen son **adjetivos**.', en: 'Adjectives describe nouns.' },
          { kind: 'guide', text: { teacher: 'Muestra un objeto de la sala y pregunta: «¿Cómo es?». Acepta una palabra: «grande», «azul». Después lean la explicación.', self: 'Mira un objeto cerca de ti y piensa: ¿cómo es? ¿Grande, pequeño, nuevo? Después lee la explicación.' } },
          { kind: 'concept', tone: 'neutral', label: 'SUSTANTIVO + ADJETIVO', question: '¿Cómo es?', en: 'noun + adjective', formula: ['sustantivo + adjetivo', 'una casa + bonita'],
            meaning: 'El adjetivo dice **cómo es** algo o alguien. En español, normalmente va **después** del sustantivo.',
            examples: [
              { es: 'un libro [[interesante|teal]]', en: 'an interesting book' },
              { es: 'una calle [[tranquila|blue]]', en: 'a quiet street' },
              { es: 'un día [[difícil|teal]]', en: 'a difficult day' },
              { es: 'una persona [[amable|teal]]', en: 'a kind person' },
            ],
            note: 'En inglés el adjetivo va antes: «a quiet street». En español, para empezar, usa **sustantivo + adjetivo**.' },
          { kind: 'tip', icon: '🔗', title: 'También con «ser»', text: 'El adjetivo puede ir después del verbo **ser**: «La sala **es** pequeña». «Las sillas **son** cómodas». También concuerda con el sustantivo.', en: 'The room is small. The chairs are comfortable.' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: '¿Qué frase tiene el orden normal en español?', options: ['una grande casa', 'una casa grande'], answer: 1, why: 'Sustantivo + adjetivo: una casa grande.' },
            { prompt: '«La sala es tranquila.» ¿Qué palabra es el adjetivo?', options: ['sala', 'es', 'tranquila'], answer: 2, why: '«Tranquila» dice cómo es la sala.' },
          ] },
        ] },
        { title: 'Adjetivos en -o: cuatro formas', mascot: '/brand/mascot/studying.webp', coach: 'El adjetivo copia al sustantivo.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'ADJETIVOS EN -O', question: '¿Masculino o femenino? ¿Uno o varios?', en: 'adjectives in -o: four forms', formula: ['-o · -a · -os · -as'],
            meaning: 'Los adjetivos en **-o** cambian para **concordar** con el sustantivo: **-a** para el femenino, **-s** para el plural. El adjetivo copia el género y el número del sustantivo.',
            examples: [
              { es: 'el barrio [[nuevo|blue]] · la casa [[nueva|blue]]', en: 'the new neighbourhood · the new house' },
              { es: 'los barrios [[nuevos|blue]] · las casas [[nuevas|blue]]', en: 'the new neighbourhoods · the new houses' },
              { es: 'Las paredes son [[blancas|blue]].', en: 'The walls are white.' },
            ] },
          { kind: 'table', title: 'Nuevo, nueva, nuevos, nuevas', head: ['', 'Uno', 'Varios'], rows: [
            ['masculino', 'un sillón [[cómodo|blue]]', 'unos sillones [[cómodos|blue]]'],
            ['femenino', 'una silla [[cómoda|blue]]', 'unas sillas [[cómodas|blue]]'],
          ], note: 'Otros adjetivos así: pequeño, bonito, blanco, negro, rojo, tranquilo, viejo, moderno, redondo.' },
          { kind: 'tip', icon: '👥', title: 'Un grupo mixto', text: 'Si el grupo tiene sustantivos masculinos y femeninos, el adjetivo va en **masculino plural**: «Ana y Leo son [[simpáticos|blue]]», «la mesa y el sillón son [[nuevos|blue]]».', en: 'Mixed group → masculine plural.' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'Una casa ___', options: ['blanco', 'blanca', 'blancos'], answer: 1, why: '«Casa» es femenino singular: blanca.' },
            { prompt: 'Dos barrios ___', options: ['tranquilo', 'tranquila', 'tranquilos'], answer: 2, why: '«Barrios» es masculino plural: tranquilos.' },
            { prompt: 'Las sillas son ___.', options: ['viejos', 'viejas', 'vieja'], answer: 1, why: '«Sillas» es femenino plural: viejas.' },
          ] },
        ] },
        { title: 'Una forma para los dos', mascot: '/autoestudio/mascot/noting.webp', coach: 'Estos adjetivos solo cambian en plural.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'ADJETIVOS EN -E O CONSONANTE', question: '¿Cambia por género?', en: 'same form for masculine and feminine', formula: ['-e → igual · + s', 'consonante → igual · + es'],
            meaning: 'Los adjetivos que terminan en **-e** o en **consonante** (grande, interesante, fácil, azul) tienen **una forma** para masculino y femenino. Solo cambian en plural.',
            examples: [
              { es: 'un hotel [[grande|teal]] · una casa [[grande|teal]]', en: 'a big hotel · a big house' },
              { es: 'dos libros [[interesantes|teal]]', en: 'two interesting books' },
              { es: 'una tarea [[fácil|teal]] · unas tareas [[fáciles|teal]]', en: 'an easy task · easy tasks' },
              { es: 'unas calles [[azules|teal]]', en: 'some blue streets' },
            ] },
          { kind: 'table', title: 'El plural', head: ['Termina en…', 'Uno', 'Varios'], rows: [
            ['-e', 'grande, amable, verde', '[[grandes|teal]], [[amables|teal]], [[verdes|teal]]'],
            ['consonante', 'azul, fácil, joven', '[[azules|teal]], [[fáciles|teal]], [[jóvenes|teal]]'],
          ], note: 'Las mismas reglas que con los sustantivos: vocal + s, consonante + es.' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'Una película ___', options: ['interesante', 'interesanta', 'interesantos'], answer: 0, why: '«Interesante» es igual para masculino y femenino.' },
            { prompt: 'Las ventanas son ___.', options: ['grande', 'grandes', 'grandas'], answer: 1, why: '«Ventanas» es plural: grande + s.' },
            { prompt: 'Unas sillas ___', options: ['azuls', 'azules', 'azulas'], answer: 1, why: 'Consonante + es: azules.' },
          ] },
        ] },
        { title: 'Las nacionalidades', mascot: '/brand/mascot/speaking.webp', coach: 'Aquí hay una excepción importante.', blocks: [
          { kind: 'concept', tone: 'violet', label: 'NACIONALIDADES', question: '¿Español o española?', en: 'nationalities', formula: ['-o → -a: mexicano, mexicana', 'consonante → + a: español, española'],
            meaning: 'Muchas nacionalidades terminan en **consonante**, pero **sí cambian** en femenino: agregan **-a**. Las nacionalidades en -o funcionan como «nuevo».',
            examples: [
              { es: 'un chico [[español|violet]] · una chica [[española|violet]]', en: 'a Spanish boy · a Spanish girl' },
              { es: 'un estudiante [[francés|violet]] · una estudiante [[francesa|violet]]', en: 'a French student (m · f)' },
              { es: 'Ana y Leo son [[argentinos|violet]].', en: 'Ana and Leo are Argentinian.' },
              { es: 'Clara es [[colombiana|violet]].', en: 'Clara is Colombian.' },
            ],
            note: 'Las nacionalidades en **-e** o **-a** no cambian: «un chico [[canadiense|teal]], una chica [[canadiense|teal]]», «un chico [[belga|teal]]».' },
          { kind: 'tip', icon: '✏️', title: 'Atención a la tilde', text: '«Francés» lleva tilde, pero «francesa», «franceses» y «francesas» no. Igual: «inglés» → «inglesa».', en: 'francés → francesa' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'Mi profesora es ___.', options: ['español', 'española', 'españoles'], answer: 1, why: 'Las nacionalidades en consonante agregan -a: española.' },
            { prompt: 'Un estudiante ___', options: ['francés', 'francesa', 'franceses'], answer: 0, why: '«Un estudiante»: masculino singular, francés.' },
            { prompt: 'Lucía y Pedro son ___.', options: ['mexicanas', 'mexicanos', 'mexicano'], answer: 1, why: 'Grupo mixto: masculino plural.' },
          ] },
        ] },
        { title: 'Cómo elegir', mascot: '/brand/mascot/seated.webp', coach: 'Primero mira el sustantivo.', blocks: [
          { kind: 'decide', title: 'Piensa en un sustantivo y un adjetivo', steps: [
            { q: '¿El adjetivo termina en **-o** o es una nacionalidad?', yes: 'Cambia por género y número: [[nuevo|blue]], [[nueva|blue]], [[nuevos|blue]], [[nuevas|blue]] · [[español|violet]], [[española|violet]].', no: 'next' },
            { q: '¿El sustantivo es plural?', yes: 'Agrega **-s** (vocal) o **-es** (consonante): [[grandes|teal]], [[azules|teal]].', no: 'No cambia: una casa [[grande|teal]], un hotel [[grande|teal]].' },
          ] },
          { kind: 'compare', title: 'Dos tipos de adjetivos', columns: [
            { tone: 'blue', label: 'CAMBIA POR GÉNERO', sentence: 'una sala [[pequeña|blue]] · un salón [[pequeño|blue]]', idea: 'Terminación -o: cuatro formas.', en: 'four forms' },
            { tone: 'teal', label: 'UNA FORMA', sentence: 'una sala [[grande|teal]] · un salón [[grande|teal]]', idea: 'Terminación -e o consonante: dos formas.', en: 'two forms' },
          ] },
          { kind: 'tip', icon: '📚', title: 'Para saber más', text: 'A veces el adjetivo va **antes**: «un **buen** libro», «una **gran** ciudad». Y con «**muy**» describes más fuerte: «una sala **muy** tranquila». No es necesario aprenderlo ahora.', en: 'a good book · a great city · very quiet' },
        ] },
        { title: 'Taller: describir la sala', mascot: '/brand/mascot/walking.webp', coach: 'Cambia el objeto y mira cómo cambia el adjetivo.', blocks: [
          { kind: 'guide', text: { teacher: 'Abran el taller juntos. Cambia el objeto o la cantidad y pide al alumno la forma del adjetivo antes de mostrarla.', self: 'Cambia el objeto y la cantidad. Di la forma del adjetivo antes de mirar la respuesta.' } },
          { kind: 'visual', visual: 'adjective-workbench' },
        ] },
        { title: 'Errores frecuentes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Estos errores son muy comunes.', blocks: [
          { kind: 'guide', text: { teacher: 'Pide al alumno que encuentre el error antes de mostrar la corrección.', self: 'Lee cada frase, busca el error y después toca para ver la corrección.' } },
          { kind: 'mistakes', title: '¿Dónde está el error?', items: [
            { wrong: 'Tengo una roja mesa.', right: 'Tengo una mesa roja.', why: 'En español, el adjetivo de color va después del sustantivo.' },
            { wrong: 'La casa es bonito.', right: 'La casa es bonita.', why: '«Casa» es femenino: bonita.' },
            { wrong: 'Las sillas son cómoda.', right: 'Las sillas son cómodas.', why: 'Plural: el adjetivo también agrega -s.' },
            { wrong: 'Es una película interesanta.', right: 'Es una película interesante.', why: 'Los adjetivos en -e no cambian por género.' },
            { wrong: 'Tengo dos camisas azuls.', right: 'Tengo dos camisas azules.', why: 'Consonante + es: azules.' },
            { wrong: 'Mi amiga es francés.', right: 'Mi amiga es francesa.', why: 'Las nacionalidades en consonante sí cambian: francesa.' },
          ] },
          { kind: 'teacher', text: 'Di un sustantivo y un adjetivo sin concordar («casas / nuevo»). El alumno dice la forma correcta: «casas nuevas».' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'Los adjetivos en situaciones reales', coach: 'Toca los adjetivos marcados.',
      steps: [
        { title: 'Dos salas para trabajar', blocks: [
          { kind: 'guide', text: { teacher: 'Lean el diálogo con papeles. Después, el alumno toca cada adjetivo y dice con qué sustantivo concuerda.', self: 'Lee el diálogo en voz alta. Después toca cada adjetivo marcado y mira con qué sustantivo concuerda.' } },
          { kind: 'explore', title: 'Las salas nuevas', setting: 'Clara y su compañero Marcos visitan las dos salas nuevas de la empresa.', lines: [
            { who: 'Marcos', text: 'Mira, Clara: esta es la sala [[pequeña|blue]].', en: 'Look, Clara: this is the small room.' },
            { who: 'Clara', text: '¡Qué bonita! Es muy [[tranquila|blue]].', en: 'How nice! It’s very quiet.' },
            { who: 'Marcos', text: 'Sí, y tiene una mesa [[redonda|blue]].' },
            { who: 'Clara', text: 'Las paredes son [[blancas|blue]]. Me gusta.' },
            { who: 'Marcos', text: 'Ahora vamos a la sala [[grande|teal]].' },
            { who: 'Clara', text: 'Oh, tiene unas ventanas [[enormes|teal]].' },
            { who: 'Marcos', text: 'Y las sillas son muy [[cómodas|blue]]. Es perfecta para las reuniones.' },
            { who: 'Clara', text: 'Sí, pero es un poco [[ruidosa|blue]]. Yo trabajo sola y necesito silencio.' },
            { who: 'Marcos', text: 'Entonces, ¿prefieres la sala pequeña?' },
            { who: 'Clara', text: 'Sí. Y allí están los libros [[interesantes|teal]].' },
          ], notes: {
            pequeña: '«Sala» es femenino singular: pequeñ**a**.',
            tranquila: 'Concuerda con «la sala»: femenino singular, tranquil**a**.',
            redonda: '«Mesa» es femenino: redond**a**.',
            blancas: '«Las paredes»: femenino plural. Blanco → blanc**as**.',
            grande: '«Grande» termina en -e: la misma forma para «la sala» y «el salón».',
            enormes: '«Enorme» termina en -e: no cambia por género. «Ventanas» es plural: + **s**.',
            cómodas: '«Las sillas»: femenino plural, cómod**as**.',
            ruidosa: 'Concuerda con «la sala»: femenino singular.',
            interesantes: '«Libros» es masculino plural. «Interesante» termina en -e: solo agrega **-s**.',
          } },
          { kind: 'choice', title: '¿Entendiste?', items: [
            { prompt: '¿Cómo es la mesa de la sala pequeña?', options: ['Cuadrada.', 'Redonda.', 'Grande.'], answer: 1, why: '«Tiene una mesa redonda».' },
            { prompt: '¿Por qué Clara prefiere la sala pequeña?', options: ['Porque tiene ventanas enormes.', 'Porque trabaja sola y necesita silencio.', 'Porque es perfecta para las reuniones.'], answer: 1, why: '«Yo trabajo sola y necesito silencio».' },
          ] },
        ] },
        { title: 'En la tienda de muebles', blocks: [
          { kind: 'explore', title: 'Una silla para Clara', setting: 'Clara busca una silla para la sala pequeña.', lines: [
            { who: 'Vendedor', text: 'Buenas tardes. ¿Qué busca?' },
            { who: 'Clara', text: 'Busco una silla [[cómoda|blue]] para una sala [[pequeña|blue]].' },
            { who: 'Vendedor', text: 'Tenemos estas sillas [[italianas|violet]]. Son muy [[modernas|blue]].' },
            { who: 'Clara', text: 'Son bonitas, pero un poco [[grandes|teal]].' },
            { who: 'Vendedor', text: 'Entonces, ¿qué tal esta silla [[azul|teal]]? Es [[ligera|blue]] y no es cara.' },
            { who: 'Clara', text: '¿Es [[española|violet]]?' },
            { who: 'Vendedor', text: 'No, es [[mexicana|violet]]. Y también hay una [[verde|teal]].' },
            { who: 'Clara', text: 'Me gusta la azul. ¡Perfecto, gracias!' },
          ], notes: {
            cómoda: '«Una silla»: femenino singular, cómod**a**.',
            pequeña: '«Una sala»: femenino singular, pequeñ**a**.',
            italianas: 'Nacionalidad en -o: italiano → italian**as**, porque son «las sillas».',
            modernas: '«Las sillas»: femenino plural, modern**as**.',
            grandes: '«Grande» no cambia por género, pero sí por número: grande**s**.',
            azul: '«Azul» termina en consonante: igual para masculino y femenino.',
            ligera: '«La silla»: femenino singular, liger**a**.',
            española: 'Nacionalidad en consonante: español → español**a**, para «la silla».',
            mexicana: 'Nacionalidad en -o: mexicano → mexican**a**.',
            verde: '«Verde» termina en -e: no cambia por género.',
          } },
          { kind: 'teacher', text: 'Pregunta: «¿Qué silla prefieres tú y cómo es?». El alumno responde con dos adjetivos.' },
        ] },
        { title: '¿Qué tipo de adjetivo?', blocks: [
          { kind: 'classify', title: 'Clasifica los adjetivos de las dos conversaciones', categories: [
            { id: 'cambia', label: 'Cambia por género (-o, nacionalidad)', tone: 'blue' },
            { id: 'igual', label: 'Una forma para los dos (-e, consonante)', tone: 'teal' },
          ], items: [
            { text: 'tranquila', answer: 'cambia', why: 'Tranquilo / tranquila: cambia.' },
            { text: 'grande', answer: 'igual', why: 'El salón grande, la sala grande.' },
            { text: 'azul', answer: 'igual', why: 'El sillón azul, la silla azul.' },
            { text: 'española', answer: 'cambia', why: 'Español / española: las nacionalidades cambian.' },
            { text: 'interesantes', answer: 'igual', why: 'Interesante: misma forma para los dos géneros.' },
            { text: 'cómodas', answer: 'cambia', why: 'Cómodo / cómoda.' },
            { text: 'verde', answer: 'igual', why: 'El sillón verde, la silla verde.' },
          ] },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Primero mira el sustantivo, después el adjetivo.',
      steps: [
        { title: 'Elige la forma correcta', blocks: [
          { kind: 'choice', items: [
            { context: 'Una oficina sin ruido.', prompt: 'Es una oficina ___.', options: ['tranquilo', 'tranquila', 'tranquilos'], answer: 1, why: '«Oficina»: femenino singular.' },
            { context: 'Dos sillones nuevos.', prompt: 'Los sillones son ___.', options: ['nuevos', 'nuevas', 'nuevo'], answer: 0, why: '«Sillones»: masculino plural.' },
            { context: 'Un hotel enorme.', prompt: 'Es un hotel muy ___.', options: ['grando', 'grande', 'grandes'], answer: 1, why: '«Grande» no cambia por género; aquí es singular.' },
            { context: 'Tareas sin problemas.', prompt: 'Las tareas de hoy son ___.', options: ['fácils', 'fáciles', 'fácil'], answer: 1, why: 'Consonante + es: fáciles.' },
            { context: 'Una compañera de Madrid.', prompt: 'Mi compañera es ___.', options: ['español', 'española', 'españolo'], answer: 1, why: 'Nacionalidad en consonante: + a.' },
            { context: 'Personas de 20 años.', prompt: 'Mis vecinos son ___.', options: ['joven', 'jóvenes', 'jóvenas'], answer: 1, why: 'Plural: joven → jóvenes.' },
          ] },
        ] },
        { title: 'Compara los significados', blocks: [
          { kind: 'choice', items: [
            { prompt: '¿Qué frase habla de **una** silla?', options: ['La silla es cómoda.', 'Las sillas son cómodas.'], answer: 0, why: 'Singular: la silla, cómoda.' },
            { prompt: '«Es un estudiante francés.» ¿Quién es?', options: ['Un chico.', 'Una chica.', 'Varias personas.'], answer: 0, why: '«Un estudiante francés»: masculino singular.' },
            { prompt: '«Son simpáticos.» ¿Puede ser un grupo de chicos y chicas?', options: ['Sí.', 'No, solo chicos.'], answer: 0, why: 'Un grupo mixto usa el masculino plural.' },
            { prompt: '«Una casa grande» y «un hotel grande». ¿Qué pasa con «grande»?', options: ['Cambia.', 'No cambia.'], answer: 1, why: '«Grande» termina en -e: igual para los dos géneros.' },
            { prompt: '¿Qué frase describe **varias** paredes?', options: ['La pared es blanca.', 'Las paredes son blancas.'], answer: 1, why: 'Plural: las paredes, blancas.' },
          ] },
        ] },
        { title: 'Completa la conversación', blocks: [
          { kind: 'chat-fill', title: 'Clara le describe la sala a su madre', lines: [
            { who: 'Madre', text: '¿Y cómo es tu sala nueva?' },
            { who: 'Clara', text: 'Es una sala ___ y muy bonita.', options: ['pequeño', 'pequeña', 'pequeñas'], answer: 1, why: '«Sala»: femenino singular.' },
            { who: 'Madre', text: '¿Y las sillas?' },
            { who: 'Clara', text: 'Son muy ___.', options: ['cómodos', 'cómoda', 'cómodas'], answer: 2, why: '«Las sillas»: femenino plural.' },
            { who: 'Madre', text: '¿Tienes compañeros ___?', options: ['simpáticos', 'simpáticas', 'simpático'], answer: 0, why: '«Compañeros»: masculino plural (o grupo mixto).' },
            { who: 'Clara', text: 'Sí. Marcos es ___ y muy amable.', options: ['chilena', 'chileno', 'chilenos'], answer: 1, why: 'Marcos: masculino singular, chileno.' },
            { who: 'Clara', text: 'Y la jefa es ___.', options: ['inglés', 'inglesa', 'ingleses'], answer: 1, why: 'Nacionalidad en consonante: inglés → inglesa (sin tilde).' },
          ] },
        ] },
        { title: 'Encuentra el error', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Las ventanas son grande.', ok: false, options: ['Las ventanas son grandes.', 'Las ventanas son grandas.', 'La ventanas son grande.'], answer: 0, why: 'Plural: grande + s.' },
            { sentence: 'Tengo un libro interesante.', ok: true, why: 'Correcta: «interesante» es igual en masculino y femenino.' },
            { sentence: 'Mi barrio es muy tranquila.', ok: false, options: ['Mi barrio es muy tranquilos.', 'Mi barrio es muy tranquilo.', 'Mi barria es muy tranquila.'], answer: 1, why: '«Barrio» es masculino: tranquilo.' },
            { sentence: 'Ana es una chica alemán.', ok: false, options: ['Ana es una chica alemana.', 'Ana es una chica alemanes.', 'Ana es un chico alemán.'], answer: 0, why: 'Las nacionalidades en consonante agregan -a: alemana.' },
            { sentence: 'Compro dos camisetas azules.', ok: true, why: 'Correcta: consonante + es.' },
            { sentence: 'Es un blanco sillón.', ok: false, options: ['Es un sillón blanco.', 'Es una sillón blanca.', 'Es un sillón blanca.'], answer: 0, why: 'El color va después del sustantivo: un sillón blanco.' },
          ] },
        ] },
        { title: 'Construye y transforma', blocks: [
          { kind: 'build', title: 'Ordena las palabras', items: [
            { tiles: ['La', 'sala', 'pequeña', 'es', 'tranquila'], accept: ['La sala pequeña es tranquila'], en: 'The small room is quiet.' },
            { tiles: ['Tengo', 'una', 'mesa', 'redonda'], accept: ['Tengo una mesa redonda'], en: 'I have a round table.' },
            { tiles: ['Las', 'sillas', 'azules', 'son', 'cómodas'], accept: ['Las sillas azules son cómodas'], en: 'The blue chairs are comfortable.' },
            { tiles: ['Mis', 'compañeros', 'son', 'muy', 'simpáticos'], accept: ['Mis compañeros son muy simpáticos'], en: 'My colleagues are very nice.' },
          ] },
          { kind: 'rewrite', title: 'Cambia a plural', items: [
            { prompt: 'una oficina tranquila y grande', instruction: 'Escribe «unas…».', accept: ['unas oficinas tranquilas y grandes', 'unas oficinas grandes y tranquilas'] },
            { prompt: 'un libro azul', instruction: 'Escribe «unos…».', accept: ['unos libros azules'] },
            { prompt: 'La silla es cómoda.', instruction: 'Escribe «Las sillas…».', accept: ['Las sillas son cómodas'] },
            { prompt: 'El estudiante es francés.', instruction: 'Escribe «Los estudiantes…».', accept: ['Los estudiantes son franceses'] },
          ] },
        ] },
        { title: 'Del masculino al femenino', blocks: [
          { kind: 'rewrite', title: 'Cambia la persona', items: [
            { prompt: 'Mi vecino es simpático y joven.', instruction: 'Escribe «Mi vecina…».', accept: ['Mi vecina es simpática y joven'] },
            { prompt: 'El profesor es español.', instruction: 'Escribe «La profesora…».', accept: ['La profesora es española'] },
            { prompt: 'Mi hermano es alto y amable.', instruction: 'Escribe «Mi hermana…».', accept: ['Mi hermana es alta y amable'] },
            { prompt: 'Un chico colombiano muy inteligente.', instruction: 'Escribe «Una chica…».', accept: ['Una chica colombiana muy inteligente'] },
          ] },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Una visita a la sala', coach: 'Primero escucha sin leer.',
      steps: [
        { title: 'Una visita a la sala', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha para la idea general. En la segunda, el alumno anota los objetos y cómo son.', self: 'Escucha una vez para la idea general. Después escucha otra vez y anota cada objeto con su adjetivo. Puedes bajar la velocidad.' } },
          { kind: 'listen', title: 'Un mensaje para Clara', channel: 'MENSAJE DE VOZ · PARA CLARA', src: '/audio/grammar-free/41.mp3',
            before: 'Una compañera visita la sala grande y le deja un mensaje a Clara. ¿Qué crees que le pregunta?',
            gist: { prompt: '¿Qué decisión pide a Clara?', options: ['Elegir una mesa redonda o cuadrada.', 'Elegir la sala grande o la pequeña.', 'Comprar sillas nuevas.'], answer: 0, why: '«¿Prefieres una mesa redonda o una mesa cuadrada para tu espacio?».' },
            details: [
              { prompt: '¿Cómo son las mesas de la sala grande?', options: ['Viejas.', 'Nuevas.', 'Pequeñas.'], answer: 1, why: '«Las mesas son nuevas».' },
              { prompt: '¿Qué objetos son viejos?', options: ['Las sillas.', 'Las mesas.', 'Los libros.'], answer: 0, why: '«…pero las sillas son viejas».' },
              { prompt: '¿Cómo está la sala ahora?', options: ['Ruidosa.', 'Tranquila.', 'Cerrada.'], answer: 1, why: '«…y la sala es tranquila ahora».' },
              { prompt: '¿Qué tiene para Clara?', options: ['Dos libros interesantes.', 'Una silla cómoda.', 'Unas ventanas abiertas.'], answer: 0, why: '«Tengo dos libros interesantes para ti».' },
              { prompt: '¿Cómo son las dos mesas?', options: ['Grandes y nuevas.', 'Pequeñas y cómodas.', 'Redondas y viejas.'], answer: 1, why: '«Las dos son pequeñas y cómodas».' },
            ],
            transcript: 'Hola, Clara. Estoy en la sala [[grande|teal]]. Las mesas son [[nuevas|blue]], pero las sillas son [[viejas|blue]]. Las ventanas están [[abiertas|blue]] y la sala es [[tranquila|blue]] ahora. Tengo dos libros [[interesantes|teal]] para ti. ¿Prefieres una mesa [[redonda|blue]] o una mesa [[cuadrada|blue]] para tu espacio? Las dos son [[pequeñas|blue]] y [[cómodas|blue]].',
            reply: { teacher: 'El alumno responde en voz alta como si fuera Clara: elige una mesa y explica por qué con dos adjetivos.', self: 'Responde al mensaje como si fueras Clara: ¿qué mesa prefieres y por qué? Usa dos adjetivos.' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Describe tu mundo', coach: 'Mira a tu alrededor y describe.',
      steps: [
        { title: 'Describe tu mundo', blocks: [
          { kind: 'guide', text: { teacher: 'No hace falta usar todas las preguntas. Cuando el alumno usa un adjetivo, pregunta por el plural o por el femenino para revisar la concordancia.', self: 'Responde cada pregunta en voz alta. Antes de decir el adjetivo, piensa: ¿masculino o femenino? ¿Uno o varios?' } },
          { kind: 'talk', cards: [
            { q: '¿Cómo es el lugar donde estás ahora?', followUps: ['¿Es grande o pequeño?', '¿Cómo son las paredes?', '¿Es un lugar tranquilo?'], phrases: ['Es una habitación [[pequeña|blue]].', 'Las paredes son [[blancas|blue]].', 'Es un lugar [[tranquilo|blue]].'], hint: 'Empieza con «Es un… / Es una…» y agrega un adjetivo.', example: 'Estoy en mi habitación. Es una habitación pequeña y tranquila. Las paredes son blancas y la ventana es grande.', next: 'Ahora, los objetos que ves.' },
            { q: 'Describe tres objetos que ves ahora.', followUps: ['¿De qué color son?', '¿Son nuevos o viejos?', '¿Cuál es tu favorito?'], phrases: ['Una taza [[roja|blue]].', 'Unos libros [[viejos|blue]].', 'Una lámpara [[verde|teal]].'], hint: 'Sustantivo primero, adjetivo después: «una taza roja».', example: 'Veo una taza roja, unos libros viejos y una lámpara verde. Mi favorita es la lámpara.', next: 'Hablemos de tu lugar ideal para estudiar.', teacher: 'Si el alumno está en videollamada, pide que muestre cada objeto.' },
            { q: '¿Cómo es tu lugar ideal para estudiar o trabajar?', followUps: ['¿Prefieres una mesa redonda o cuadrada?', '¿Necesitas silencio?', '¿Cómo son las sillas?'], phrases: ['Prefiero una sala [[tranquila|blue]].', 'Necesito una silla [[cómoda|blue]].', 'Me gustan las ventanas [[grandes|teal]].'], hint: 'Usa «Prefiero…», «Necesito…», «Me gustan…» + sustantivo + adjetivo.', example: 'Prefiero una sala pequeña y tranquila, con una mesa redonda y una silla cómoda. Me gustan las ventanas grandes.', next: 'Ahora, tu barrio.' },
            { q: '¿Cómo es tu barrio?', followUps: ['¿Las calles son tranquilas o ruidosas?', '¿Hay edificios altos?', '¿Qué lugar es bonito?'], phrases: ['Mi barrio es [[tranquilo|blue]].', 'Las calles son [[ruidosas|blue]].', 'Hay un parque [[grande|teal]].'], hint: '«Barrio» es masculino: «mi barrio es tranquilo». «Calles» es femenino plural: «las calles son tranquilas».', example: 'Mi barrio es antiguo y bonito. Las calles son pequeñas y un poco ruidosas, pero hay un parque grande y verde.', next: 'Ahora, las personas.' },
            { q: '¿Cómo son tus amigos o tus compañeros?', followUps: ['¿De dónde son?', '¿Son simpáticos?', '¿Quién es muy divertido?'], phrases: ['Mi amiga es [[simpática|blue]].', 'Mis compañeros son [[colombianos|violet]].', 'Es una persona [[amable|teal]].'], hint: 'Si hablas de un grupo de hombres y mujeres, usa el masculino plural: «son simpáticos».', example: 'Mis compañeros son muy simpáticos. Ana es mexicana y Leo es español. Ana es una persona alegre y amable.', next: 'Para terminar, tu objeto favorito.', teacher: 'Pide una nacionalidad en femenino y en masculino para revisar la terminación.' },
            { q: '¿Cuál es tu objeto favorito? ¿Cómo es?', followUps: ['¿Es nuevo o viejo?', '¿Es caro o barato?', '¿Por qué es especial?'], phrases: ['Es [[pequeño|blue]] y [[bonito|blue]].', 'Es un regalo [[especial|teal]].', 'Es [[japonés|violet]].'], hint: 'Usa dos o tres adjetivos con «y»: «es pequeño, viejo y bonito».', example: 'Mi objeto favorito es una guitarra vieja. Es española y muy bonita. Es un regalo especial de mi abuelo.' },
          ], swap: { teacher: 'Al final, cambien los papeles: el alumno le pregunta al profesor cómo es su barrio y su lugar de trabajo.', self: 'Describe en voz alta tu cocina o tu calle con cinco adjetivos. Revisa la concordancia de cada uno.' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Te recomiendo esta sala', coach: 'Describe un lugar real.',
      steps: [
        { title: 'Te recomiendo esta sala', blocks: [
          { kind: 'guide', text: { teacher: 'Puede escribir en clase o como tarea. Usen la revisión automática y después revisen juntos cada adjetivo con su sustantivo.', self: 'Escribe tu mensaje y toca «Revisar mi texto». Después busca cada adjetivo y mira su sustantivo: ¿concuerdan?' } },
          { kind: 'write', title: 'Un lugar para estudiar', situation: 'Una compañera busca un lugar para estudiar español. Recomiéndale un lugar real que conoces: una sala, un café, una biblioteca o tu casa.', task: [
            'Di qué lugar recomiendas y **cómo es**.',
            'Describe **tres objetos** del lugar con adjetivos.',
            'Usa al menos **un adjetivo en plural**.',
            'Explica **por qué** es bueno para estudiar.',
          ], starters: ['Te recomiendo…', 'Es un lugar…', 'Tiene una mesa…', 'Las sillas son…', 'Es perfecto para estudiar porque…'],
            words: ['tranquilo', 'pequeño', 'grande', 'cómodo', 'luminoso', 'moderno', 'redondo', 'blanco', 'interesante'],
            model: 'Te recomiendo la sala pequeña. Es una sala [[tranquila|blue]] y [[luminosa|blue]]. Tiene una mesa [[redonda|blue]] y dos sillas [[cómodas|blue]]. Las paredes son [[blancas|blue]] y las ventanas son [[grandes|teal]]. Es perfecta para estudiar español por la tarde.',
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
            { tone: 'blue', label: 'ADJETIVOS EN -O', formula: '-o · -a · -os · -as', example: 'la sala tranquila · los libros nuevos', caption: 'Cambian por género y número.', en: 'four forms' },
            { tone: 'teal', label: '-E Y CONSONANTE', formula: 'igual · + s / + es', example: 'una casa grande · calles azules', caption: 'Solo cambian en plural.', en: 'two forms' },
            { tone: 'violet', label: 'NACIONALIDADES', formula: 'consonante + a', example: 'español → española', caption: 'Sí cambian por género.', en: 'nationalities' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'El adjetivo copia al sustantivo', text: 'Primero mira el **sustantivo**: ¿masculino o femenino? ¿Uno o varios? Después elige la forma del adjetivo. Y recuerda: normalmente va **después**.', en: 'The adjective copies the noun.' },
        ] },
        { title: 'Desafío final', blocks: [
          { kind: 'choice', title: 'Cuatro frases, sin ayuda', items: [
            { prompt: 'Las calles de mi barrio son ___.', options: ['tranquilos', 'tranquilas', 'tranquila'], answer: 1, why: '«Calles»: femenino plural.' },
            { prompt: 'Es un día muy ___.', options: ['difícil', 'difícila', 'difíciles'], answer: 0, why: '«Difícil» termina en consonante: no cambia por género; aquí es singular.' },
            { prompt: 'Mi profesora es ___.', options: ['portugués', 'portuguesa', 'portugueso'], answer: 1, why: 'Nacionalidad en consonante: + a.' },
            { prompt: '¿Qué frase es correcta?', options: ['Tengo un rojo sillón.', 'Tengo un sillón rojo.', 'Tengo una sillón roja.'], answer: 1, why: 'Sustantivo + adjetivo, en masculino.' },
          ] },
        ] },
        { title: 'Tus errores y repaso', blocks: [
          { kind: 'review' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «Describe dos sillas con un adjetivo en -o y uno en -e». Respuesta posible: «Son dos sillas cómodas y grandes».' },
        ] },
      ],
    },
  ],
};
