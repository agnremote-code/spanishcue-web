import type { LiveLesson } from '../types';

/**
 * Lesson 156 · C2 · Futuro perfecto de subjuntivo (receptive).
 * A cultural institution publishes an old circular from its drawing courses:
 * learners interpret «hubiere + participio», separate it from habrá / habría
 * and paraphrase it with «haya + participio», without archaic production.
 */
export const lesson: LiveLesson = {
  id: 156,
  level: 'C2',
  title: 'Futuro perfecto de subjuntivo',
  subtitle: 'Interpretar «hubiere + participio» en circulares, testamentos y textos normativos antiguos, distinguirlo de «habrá» y «habría» y explicarlo con precisión en español actual.',
  legend: [
    { tone: 'violet', label: 'Futuro perfecto de subjuntivo: hubiere + participio' },
    { tone: 'teal', label: 'Equivalente actual: haya + participio' },
    { tone: 'blue', label: 'Futuro compuesto de indicativo: habrá + participio' },
    { tone: 'orange', label: 'Condicional compuesto: habría + participio' },
  ],
  optionNotes: {
    'habrá entregado': '«Habrá entregado» es indicativo: prevé una acción terminada antes de un punto futuro o hace una conjetura. No define una condición eventual.',
    'habría entregado': '«Habría entregado» plantea un resultado alternativo o una previsión desde el pasado. La circular no imagina otro resultado.',
    'hubiera entregado': '«Hubiera entregado» suele expresar una condición pasada no cumplida. La circular contempla una condición que puede cumplirse.',
    'entregue': 'El presente simple mantiene la eventualidad, pero deja menos explícito que la entrega debe estar completada antes.',
    'Mientras estén concluyendo las demostraciones, se abrirá la sala': 'Convierte la anterioridad en simultaneidad: la fuente exige que las demostraciones ya hayan terminado.',
    'hubieren concluidos': 'El participio de la forma compuesta es invariable: «hubieren concluido».',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Una condición que debía estar cumplida', coach: 'Leer con precisión una forma que ya casi nadie escribe.',
      steps: [
        { title: 'La forma: hubiere + participio', blocks: [
          { kind: 'lead', text: 'Una institución cultural prepara una exposición digital sobre sus antiguos cursos de dibujo. En una circular se lee: «Quien [[hubiere entregado|violet]] su cuaderno podrá retirar una copia del catálogo. Cuando [[hubieren concluido|violet]] las demostraciones, se abrirá la sala de trabajos». ¿Qué exige exactamente el texto, y en qué orden?' },
          { kind: 'guide', text: { teacher: 'El objetivo es receptivo e interpretativo: el alumno analiza, distingue y parafrasea. No se pide producir la forma ni se ofrece interpretación jurídica de textos vigentes.', self: 'En esta clase vas a interpretar y parafrasear esta forma, no a usarla. Los textos son históricos: no se trata de asesoría legal.' } },
          { kind: 'table', title: 'Futuro de subjuntivo de «haber» + participio', head: ['Persona', 'hablar', 'comer', 'vivir'], rows: [
            ['yo', '**hubiere** hablado', '**hubiere** comido', '**hubiere** vivido'],
            ['tú', '**hubieres** hablado', '**hubieres** comido', '**hubieres** vivido'],
            ['él / ella / usted', '**hubiere** hablado', '**hubiere** comido', '**hubiere** vivido'],
            ['nosotros / nosotras', '**hubiéremos** hablado', '**hubiéremos** comido', '**hubiéremos** vivido'],
            ['vosotros / vosotras', '**hubiereis** hablado', '**hubiereis** comido', '**hubiereis** vivido'],
            ['ellos / ellas / ustedes', '**hubieren** hablado', '**hubieren** comido', '**hubieren** vivido'],
          ], note: 'El auxiliar concuerda con el sujeto («hubieren concluido las demostraciones»); el participio es **invariable** y conserva sus irregularidades: hubiere hecho, dicho, puesto, vuelto, resuelto.' },
          { kind: 'concept', tone: 'violet', label: 'ANTERIORIDAD EN UNA SITUACIÓN EVENTUAL', question: '¿Qué tiene que haber ocurrido antes?', formula: ['quien / el que / cuando / si + hubiere + participio, + futuro o imperativo'],
            meaning: 'Presenta una acción **completada** que debe darse **antes** de una consecuencia futura, dentro de una situación **eventual**: puede cumplirse o no, y el texto no afirma que se haya cumplido. Es propia de textos normativos, testamentarios e históricos.',
            examples: [
              { es: 'Quien [[hubiere entregado|violet]] su cuaderno podrá retirar una copia. (primero la entrega, después la copia)' },
              { es: 'Cuando [[hubieren concluido|violet]] las demostraciones, se abrirá la sala.' },
              { es: 'Si el alumno no [[hubiere asistido|violet]] a tres sesiones, perderá su plaza.' },
              { es: 'Aquel que [[hubiere vencido|violet]] recibirá el premio.' },
            ] },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: '«Quien hubiere entregado su cuaderno podrá retirar una copia.» ¿Qué debe estar completado antes?', options: ['La entrega del cuaderno.', 'La retirada de la copia.', 'Nada: son simultáneas.'], answer: 0, why: 'La forma compuesta presenta la entrega como terminada antes de la consecuencia.' },
            { prompt: '¿Afirma la circular que alguien ya entregó su cuaderno?', options: ['No: contempla a cualquiera que lo haya entregado.', 'Sí: habla de un alumno concreto.'], answer: 0, why: 'La situación es eventual: define una condición, no un hecho.' },
            { prompt: '¿Qué forma es correcta?', options: ['hubieren concluido', 'hubieren concluidos', 'hubiere concluidos'], answer: 0, why: 'El auxiliar concuerda con el sujeto plural; el participio no varía.' },
          ] },
        ] },
        { title: 'Tres formas con el mismo auxiliar', mascot: '/brand/mascot/studying.webp', coach: 'Habr- y hubie- no son intercambiables.', blocks: [
          { kind: 'compare', title: 'Mismo verbo, tres lecturas', columns: [
            { tone: 'violet', label: 'HUBIERE + PARTICIPIO', sentence: 'Quien [[hubiere entregado|violet]] el cuaderno podrá retirar una copia.', idea: 'Condición eventual y completada: define un requisito.' },
            { tone: 'blue', label: 'HABRÁ + PARTICIPIO', sentence: 'Para mañana [[habrá entregado|blue]] el cuaderno.', idea: 'Indicativo: prevé una acción terminada antes de un punto futuro, o hace una conjetura.' },
            { tone: 'orange', label: 'HABRÍA + PARTICIPIO', sentence: 'Con más tiempo, [[habría entregado|orange]] el cuaderno.', idea: 'Resultado alternativo que no se produjo, o previsión desde el pasado.' },
          ] },
          { kind: 'tip', icon: '⚠', title: 'Y no lo confundas con «hubiera»', text: '«Si **hubiera entregado** el cuaderno, habría recibido la copia» habla de una condición **pasada no cumplida**. «Si **hubiere entregado**…» contempla una condición que **puede cumplirse**. Una letra cambia la lectura.' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: '«Quien hubiere entregado…», «Para mañana habrá entregado…», «Con más tiempo habría entregado…». ¿Qué análisis es correcto?', options: ['Las tres son subjuntivos históricos intercambiables.', 'Hubiere: condición eventual; habrá: anterioridad futura; habría: resultado alternativo.', 'Hubiere predice; habrá ordena; habría confirma.'], answer: 1, why: 'El contexto fija tres lecturas distintas; el parecido del auxiliar no las hace equivalentes.' },
            { prompt: '¿Qué frase plantea un resultado que **no** se produjo?', options: ['Con más tiempo, habría entregado el cuaderno.', 'Quien hubiere entregado el cuaderno podrá retirar una copia.', 'Para el lunes habrá entregado el cuaderno.'], answer: 0, why: 'El condicional compuesto plantea una alternativa irreal.' },
          ] },
        ] },
        { title: 'Parafrasear con fidelidad', mascot: '/autoestudio/mascot/noting.webp', coach: 'Conserva el orden y el resultado completado.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'EQUIVALENTE ACTUAL', question: '¿Cómo se dice hoy?', formula: ['quien / cuando + haya + participio', 'si + ha + participio', 'paráfrasis: primero…, después…'],
            meaning: 'La reformulación más fiel es **haya + participio** (pretérito perfecto de subjuntivo): mantiene la eventualidad y el **carácter completado**. Tras «si», el español actual usa el pretérito perfecto de indicativo. Para un público no especializado, una paráfrasis con «primero… después…» explica el orden sin tecnicismos.',
            examples: [
              { es: 'Quien [[haya entregado|teal]] su cuaderno podrá retirar una copia del catálogo.' },
              { es: 'Cuando [[hayan terminado|teal]] las demostraciones, se abrirá la sala.' },
              { es: 'Si el alumno no **ha asistido** a tres sesiones, perderá su plaza.' },
              { es: 'Primero deben terminar las demostraciones; después se abrirá la sala.' },
            ] },
          { kind: 'compare', title: '¿Cuánto se pierde con el presente simple?', columns: [
            { tone: 'teal', label: 'HAYA + PARTICIPIO', sentence: 'Quien [[haya entregado|teal]] su cuaderno…', idea: 'Destaca que la entrega ya está hecha: es un requisito cumplido.' },
            { tone: 'neutral', label: 'PRESENTE DE SUBJUNTIVO', sentence: 'Quien **entregue** su cuaderno…', idea: 'Sigue siendo eventual, pero el resultado completado queda menos explícito.' },
          ] },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: '¿Qué versión conserva de forma **más explícita** el resultado completado de «Cuando hubieren concluido las demostraciones, se abrirá la sala»?', options: ['Mientras estén concluyendo las demostraciones, se abrirá la sala', 'Cuando hayan terminado las demostraciones, se abrirá la sala', 'Las demostraciones habrían terminado aunque la sala no se abriera'], answer: 1, why: '«Hayan terminado» mantiene la anterioridad completada en una situación pendiente.' },
            { prompt: 'Para un visitante sin formación gramatical, ¿qué explicación es más clara?', options: ['Primero deben terminar las demostraciones; después se abre la sala.', 'Se usa el futuro perfecto de subjuntivo con valor de anterioridad eventual.', 'Las demostraciones y la apertura son simultáneas.'], answer: 0, why: 'Explica el orden sin tecnicismos y sin cambiar el sentido.' },
          ] },
        ] },
        { title: 'Contexto y alcance', mascot: '/brand/mascot/speaking.webp', coach: 'Una forma solemne no es una norma vigente.', blocks: [
          { kind: 'concept', tone: 'violet', label: 'EFECTO DE ARCHIVO', question: '¿Qué dice el texto y qué no dice?', formula: ['fuente histórica + transcripción + paráfrasis + nota de contexto'],
            meaning: 'La forma aporta **solemnidad** y **distancia**. Al presentarla hoy hay que aclarar su **alcance**: reconstruye cómo funcionaba algo en otra época, pero no demuestra que siga vigente. La interpretación gramatical no sustituye la consulta a quien gestiona hoy la institución.',
            examples: [
              { es: 'Si para entonces el heredero no [[hubiere cumplido|violet]] veinticinco años, la casa quedará al cuidado de su tío. (testamento de 1880)' },
              { es: 'El socio que [[hubiere faltado|violet]] a tres asambleas perderá su voto. (estatutos antiguos de un club)' },
              { es: 'Aquel que [[hubiere vencido|violet]] en el certamen recibirá una medalla de plata. (bases de un concurso de 1912)' },
            ] },
          { kind: 'tip', icon: '🏛', title: 'Una buena ficha de archivo', text: 'Incluye la **transcripción** fiel, una **paráfrasis** en español actual, una frase que sitúe el documento en su época y, si hace falta, una aclaración: «Estas condiciones corresponden a los cursos de 1910 y no a las actividades actuales».' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'Un visitante cree que la circular es un requisito actual del museo. ¿Qué aclaración es adecuada?', options: ['La forma solemne demuestra que sigue vigente.', 'La ficha explica cómo se organizaban los cursos antiguos; la fuente no dice cómo funciona hoy el museo.', 'La circular no significa nada porque ese tiempo ya no se usa.'], answer: 1, why: 'Interpretar el documento no establece su vigencia presente.' },
            { prompt: '«Si para entonces el heredero no hubiere cumplido veinticinco años…» ¿Qué se contempla?', options: ['Que, llegado el momento, todavía no tenga esa edad.', 'Que ya la cumplió.', 'Que nunca la cumplirá.'], answer: 0, why: 'Condición eventual: en el momento futuro, la edad puede no estar cumplida todavía.' },
          ] },
        ] },
        { title: 'Cómo leer y reformular', mascot: '/brand/mascot/seated.webp', coach: 'Cuatro preguntas antes de escribir la paráfrasis.', blocks: [
          { kind: 'decide', title: 'Encuentras «hub-/habr- + participio» en un texto', steps: [
            { q: '¿El auxiliar es «hubiere / hubieren» (sin tilde final, en -re)?', yes: 'next', no: 'Si es «habrá», es futuro compuesto de indicativo: [[habrá entregado|blue]]. Si es «habría», condicional compuesto: [[habría entregado|orange]].' },
            { q: '¿Qué acción debe estar completada y cuál viene después?', yes: 'next', no: 'Vuelve a leer: busca el verbo del auxiliar y la consecuencia en futuro o en imperativo.' },
            { q: '¿El lector necesita la forma gramatical o solo el sentido?', yes: 'Paráfrasis fiel: «quien [[haya entregado|teal]]…», «cuando [[hayan terminado|teal]]…».', no: 'Explicación accesible: «Primero…; después…». Añade siempre el contexto histórico.' },
          ] },
          { kind: 'tip', icon: '🧭', title: 'Tres riesgos de una mala paráfrasis', text: 'Invertir el **orden** de las acciones, convertir la anterioridad en **simultaneidad** («mientras estén concluyendo») y transformar una condición eventual en un **hecho** o en un **resultado irreal**.' },
        ] },
        { title: 'Errores frecuentes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Errores de análisis y de paráfrasis.', blocks: [
          { kind: 'guide', text: { teacher: 'Pide al alumno que formule con precisión qué matiz se pierde o se altera en cada versión errónea.', self: 'Lee cada frase, decide qué matiz se pierde o cambia y después toca para ver la corrección.' } },
          { kind: 'mistakes', title: '¿Dónde está el error?', items: [
            { wrong: '«Quien hubiere entregado» = «Quien habría entregado».', right: '«Quien hubiere entregado» = «Quien haya entregado».', why: 'El condicional compuesto plantea un resultado alternativo; la fuente define una condición eventual.' },
            { wrong: '«Cuando hubieren concluido» = «Mientras estén concluyendo».', right: '«Cuando hubieren concluido» = «Cuando hayan terminado».', why: 'La fuente exige anterioridad completada, no simultaneidad.' },
            { wrong: 'Cuando hubieren concluidos las demostraciones…', right: 'Cuando hubieren concluido las demostraciones…', why: 'El participio de la forma compuesta es invariable.' },
            { wrong: '«Si hubiere asistido» = «Si hubiera asistido».', right: '«Si hubiere asistido» = «Si ha asistido».', why: '«Hubiera asistido» suele indicar una condición pasada no cumplida; «hubiere asistido» contempla una que puede cumplirse.' },
            { wrong: 'Nota para visitantes: «Quien hubiere comprado entrada podrá acceder a la sala».', right: 'Nota para visitantes: «Quien haya comprado entrada podrá acceder a la sala».', why: 'En una comunicación actual no se produce la forma histórica.' },
            { wrong: 'Ficha: «Según esta circular, hoy hay que entregar un cuaderno para recibir el catálogo».', right: 'Ficha: «Según esta circular, en los cursos antiguos había que entregar un cuaderno para recibir el catálogo».', why: 'La fuente es histórica: no demuestra una norma vigente.' },
          ] },
          { kind: 'teacher', text: 'Pide al alumno que redacte dos paráfrasis de una misma frase con «hubiere + participio»: una fiel para especialistas y otra accesible para un público general, y que explique qué conserva cada una.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'El futuro perfecto de subjuntivo en documentos', coach: 'Toca las expresiones marcadas.',
      steps: [
        { title: 'La circular de los cursos de dibujo', blocks: [
          { kind: 'guide', text: { teacher: 'Lean la conversación con papeles. Después, el alumno toca cada expresión y explica qué conserva o altera cada versión.', self: 'Lee la conversación. Antes de tocar cada expresión marcada, decide si mantiene el sentido de la fuente.' } },
          { kind: 'explore', title: 'Una ficha para la exposición digital', setting: 'Beatriz, editora de la exposición, y Ramiro, documentalista, preparan la ficha de una circular de 1910.', lines: [
            { who: 'Ramiro', text: 'La circular dice: «Quien [[hubiere entregado|violet]] su cuaderno podrá retirar una copia del catálogo».' },
            { who: 'Beatriz', text: 'Primero la entrega, después la copia. Para la paráfrasis propongo «quien [[haya entregado|teal]] su cuaderno».' },
            { who: 'Ramiro', text: '¿No sería más sencillo «quien [[entregue|teal]] su cuaderno»?' },
            { who: 'Beatriz', text: 'Es posible, pero se pierde algo: el texto insiste en que la entrega ya esté hecha.' },
            { who: 'Ramiro', text: 'Un compañero escribió en el borrador «quien [[habría entregado|orange]]».' },
            { who: 'Beatriz', text: 'Eso cambia todo: parece un resultado imaginado. Y «[[habrá entregado|blue]]» sería una previsión, no un requisito.' },
            { who: 'Ramiro', text: 'Segunda frase: «Cuando [[hubieren concluido|violet]] las demostraciones, se abrirá la sala de trabajos».' },
            { who: 'Beatriz', text: '«Cuando [[hayan terminado|teal]] las demostraciones». Y atención: «concluido», sin plural.' },
            { who: 'Ramiro', text: 'Algún visitante va a pensar que todavía hay que entregar cuadernos.' },
            { who: 'Beatriz', text: 'Por eso añadimos: «Estas condiciones corresponden a los cursos de 1910».' },
          ], notes: {
            'hubiere entregado': '**Futuro perfecto de subjuntivo**: una entrega completada antes de la consecuencia, en una situación eventual.',
            'haya entregado': '**Equivalente actual** más fiel: conserva la eventualidad y el resultado completado.',
            'entregue': 'Presente de subjuntivo: mantiene la eventualidad, pero el carácter **completado** queda menos explícito.',
            'habría entregado': '**Condicional compuesto**: sugeriría un resultado alternativo. Es una paráfrasis errónea.',
            'habrá entregado': '**Futuro compuesto de indicativo**: una previsión o conjetura, no un requisito.',
            'hubieren concluido': 'El auxiliar concuerda con «las demostraciones»; el participio **no varía**.',
            'hayan terminado': '**Equivalente actual**: las demostraciones deben estar terminadas antes de abrir la sala.',
          } },
          { kind: 'choice', title: '¿Entendiste?', items: [
            { prompt: '¿Por qué Beatriz prefiere «haya entregado» a «entregue»?', options: ['Porque destaca que la entrega ya está hecha.', 'Porque «entregue» es incorrecto.', 'Porque es más corto.'], answer: 0, why: '«El texto insiste en que la entrega ya esté hecha».' },
            { prompt: '¿Qué problema tiene «quien habría entregado»?', options: ['Parece un resultado imaginado.', 'Lleva una tilde de más.', 'Es demasiado coloquial.'], answer: 0, why: '«Eso cambia todo: parece un resultado imaginado».' },
            { prompt: '¿Qué añaden a la ficha para evitar malentendidos?', options: ['Que las condiciones corresponden a los cursos de 1910.', 'Una tabla de conjugación completa.', 'La firma del director actual.'], answer: 0, why: '«Estas condiciones corresponden a los cursos de 1910».' },
          ] },
        ] },
        { title: 'Un testamento familiar', blocks: [
          { kind: 'explore', title: 'Papeles de la bisabuela', setting: 'Nuria y su primo Esteban leen el testamento de su bisabuela, de 1921, que encontraron en un baúl. Solo tiene interés histórico.', lines: [
            { who: 'Nuria', text: 'Escucha: «A aquel de mis nietos que [[hubiere concluido|violet]] sus estudios se le entregará mi biblioteca».' },
            { who: 'Esteban', text: 'O sea, el que [[haya terminado|teal]] los estudios cuando se reparta la herencia.' },
            { who: 'Nuria', text: 'Exacto. Y sigue: «Si para entonces ninguno los [[hubiere terminado|violet]], la biblioteca quedará en la casa familiar».' },
            { who: 'Esteban', text: 'Me imagino al abuelo estudiando a toda prisa.' },
            { who: 'Nuria', text: 'Él decía que, sin esa cláusula, nunca [[habría terminado|orange]] la carrera.' },
            { who: 'Esteban', text: 'Y la biblioteca, ¿dónde estará ahora?' },
            { who: 'Nuria', text: 'La [[habrá heredado|blue]] la tía Rosa; ella se quedó con casi todo.' },
            { who: 'Esteban', text: 'Habrá que preguntarle. Con este documento podemos reconstruir la historia de la familia.' },
          ], notes: {
            'hubiere concluido': '**Futuro perfecto de subjuntivo**: define al nieto que, llegado el momento, ya tenga sus estudios terminados.',
            'haya terminado': '**Paráfrasis actual** fiel de la condición.',
            'hubiere terminado': 'Otra condición eventual: en el momento del reparto, ninguno tendría los estudios completos.',
            'habría terminado': '**Condicional compuesto**: un resultado alternativo (sin la cláusula). Aquí sí es la forma adecuada, porque imagina otro pasado.',
            'habrá heredado': '**Futuro compuesto de indicativo** con valor de conjetura: Nuria supone qué pasó.',
          } },
          { kind: 'teacher', text: 'Pregunta: «¿Por qué en la misma conversación aparecen “hubiere terminado”, “habría terminado” y “habrá heredado”?». El alumno explica la función de cada una en su contexto.' },
        ] },
        { title: '¿Qué forma y qué función?', blocks: [
          { kind: 'classify', title: 'Clasifica las formas de las dos conversaciones', categories: [
            { id: 'eventual', label: 'Condición eventual completada (hubiere)', tone: 'violet' },
            { id: 'prevision', label: 'Previsión o conjetura (habrá)', tone: 'blue' },
            { id: 'alternativa', label: 'Resultado alternativo (habría)', tone: 'orange' },
          ], items: [
            { text: 'Quien hubiere entregado su cuaderno podrá retirar una copia.', answer: 'eventual', why: 'Define un requisito que debe estar cumplido.' },
            { text: 'Sin esa cláusula, nunca habría terminado la carrera.', answer: 'alternativa', why: 'Imagina otro pasado.' },
            { text: 'La habrá heredado la tía Rosa.', answer: 'prevision', why: 'Conjetura sobre algo ya ocurrido.' },
            { text: 'Si ninguno los hubiere terminado, la biblioteca quedará en la casa.', answer: 'eventual', why: 'Condición eventual en un testamento.' },
            { text: 'Para el viernes habrá entregado el cuaderno.', answer: 'prevision', why: 'Acción terminada antes de un punto futuro.' },
            { text: 'Con más tiempo, habría entregado el cuaderno.', answer: 'alternativa', why: 'Resultado que no se produjo.' },
          ] },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Orden, eventualidad y resultado completado.',
      steps: [
        { title: 'Interpreta según el contexto', blocks: [
          { kind: 'choice', items: [
            { context: 'Circular de 1910: «Quien hubiere entregado su cuaderno podrá retirar una copia del catálogo».', prompt: '¿Qué debe estar completado antes de retirar la copia?', options: ['La entrega del cuaderno.', 'La retirada de la copia.', 'Ninguna: son simultáneas.'], answer: 0, why: 'La forma compuesta presenta la entrega como anterior y terminada.' },
            { context: 'Estatutos antiguos de un club: «El socio que hubiere faltado a tres asambleas perderá su voto».', prompt: '¿Cuándo pierde el voto un socio?', options: ['Después de haber faltado a tres asambleas.', 'Antes de la primera asamblea.', 'Mientras falta a una asamblea.'], answer: 0, why: 'Las ausencias deben estar acumuladas antes de la consecuencia.' },
            { context: 'Bases de un concurso de 1912: «Aquel que hubiere vencido recibirá una medalla».', prompt: '¿A quién se refiere?', options: ['A quien haya ganado, sea quien sea.', 'A un ganador concreto ya conocido.', 'A quien habría ganado con otras reglas.'], answer: 0, why: 'Persona eventual con una acción completada.' },
            { context: 'Testamento de 1880: «Si para entonces el heredero no hubiere cumplido veinticinco años, la casa quedará al cuidado de su tío».', prompt: '¿Qué situación contempla?', options: ['Que, llegado el momento, todavía no tenga veinticinco años.', 'Que ya tiene veinticinco años.', 'Que nunca los cumplió.'], answer: 0, why: 'Condición eventual sobre un estado no alcanzado todavía.' },
            { context: 'Correo de un compañero de trabajo de hoy.', prompt: '¿Qué frase es natural en un mensaje actual?', options: ['Quien haya terminado el informe, que me lo envíe.', 'Quien hubiere terminado el informe, envíemelo.', 'Quien habría terminado el informe, que me lo envíe.'], answer: 0, why: 'Hoy se usa «haya + participio».' },
            { context: 'Reglamento antiguo: «Cuando hubieren concluido las pruebas, se publicarán los resultados».', prompt: '¿Qué ocurre primero?', options: ['Concluyen las pruebas.', 'Se publican los resultados.', 'Ocurren a la vez.'], answer: 0, why: 'Anterioridad completada: las pruebas antes de la publicación.' },
          ] },
        ] },
        { title: 'Compara los significados', blocks: [
          { kind: 'choice', items: [
            { prompt: '¿Qué frase define un **requisito** que puede cumplirse?', options: ['Quien hubiere pagado quedará registrado.', 'Si hubiera pagado, habría quedado registrado.'], answer: 0, why: '«Hubiere pagado» contempla una condición posible; «hubiera pagado», una no cumplida.' },
            { prompt: '¿Qué paráfrasis conserva mejor el carácter completado de «Quien hubiere entregado su cuaderno»?', options: ['Quien haya entregado su cuaderno', 'Quien entregue su cuaderno', 'Quien entregó su cuaderno'], answer: 0, why: '«Haya entregado» mantiene la eventualidad y el resultado completado; «entregó» afirma un hecho.' },
            { prompt: '«Para el lunes habrá entregado el cuaderno.» ¿Qué expresa?', options: ['Una previsión: estará entregado antes del lunes.', 'Un requisito eventual.', 'Un resultado que no se produjo.'], answer: 0, why: 'Futuro compuesto de indicativo con un punto futuro.' },
            { prompt: '¿Qué versión **altera** el orden de «Cuando hubieren concluido las demostraciones, se abrirá la sala»?', options: ['Se abrirá la sala y después concluirán las demostraciones.', 'Primero terminarán las demostraciones; después se abrirá la sala.', 'Cuando hayan terminado las demostraciones, se abrirá la sala.'], answer: 0, why: 'Invierte la secuencia que exige la fuente.' },
            { prompt: '¿Qué aclaración debe acompañar a la ficha de la circular?', options: ['Que describe los cursos de 1910, no las actividades actuales.', 'Que la circular sigue vigente.', 'Que la forma es un error de imprenta.'], answer: 0, why: 'Situar la fuente evita confundir historia y norma actual.' },
          ] },
        ] },
        { title: 'Completa la conversación editorial', blocks: [
          { kind: 'chat-fill', title: 'Últimos ajustes de la ficha', lines: [
            { who: 'Ramiro', text: 'Para «Quien hubiere entregado su cuaderno», ¿qué ponemos?' },
            { who: 'Beatriz', text: '«Quien ___ su cuaderno podrá retirar una copia».', options: ['haya entregado', 'habría entregado', 'hubiera entregado'], answer: 0, why: 'Equivalente actual que conserva la condición completada.' },
            { who: 'Ramiro', text: '¿Y la segunda frase?' },
            { who: 'Beatriz', text: '«Cuando ___ las demostraciones, se abrirá la sala».', options: ['hayan terminado', 'estén terminando', 'habrán terminado'], answer: 0, why: 'Anterioridad completada; «estén terminando» crearía simultaneidad.' },
            { who: 'Ramiro', text: 'En la transcripción, ¿corregimos «hubieren concluido» a «concluidos»?' },
            { who: 'Beatriz', text: 'No: el participio ___.', options: ['es invariable', 'concuerda con el sujeto', 'va siempre en femenino'], answer: 0, why: 'En las formas compuestas, el participio no cambia.' },
            { who: 'Ramiro', text: '¿Algo más para los visitantes?' },
            { who: 'Beatriz', text: 'Sí: «Estas condiciones ___ a los cursos de 1910».', options: ['correspondían', 'corresponderán', 'habrían correspondido'], answer: 0, why: 'Se describe una situación histórica, cerrada en el pasado.' },
          ] },
        ] },
        { title: 'Encuentra el error', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Paráfrasis: «Quien habría entregado su cuaderno podrá retirar una copia».', ok: false, options: ['Quien haya entregado su cuaderno podrá retirar una copia.', 'Quien habrá entregado su cuaderno podrá retirar una copia.', 'Quien hubiera entregado su cuaderno podrá retirar una copia.'], answer: 0, why: 'El condicional compuesto no expresa un requisito eventual.' },
            { sentence: 'Paráfrasis: «Cuando hayan terminado las demostraciones, se abrirá la sala».', ok: true, why: 'Correcta: mantiene el orden y el resultado completado.' },
            { sentence: 'Transcripción: «Cuando hubieren concluidos las demostraciones…».', ok: false, options: ['Cuando hubieren concluido las demostraciones…', 'Cuando hubiere concluidos las demostraciones…', 'Cuando habrían concluido las demostraciones…'], answer: 0, why: 'El participio de la forma compuesta es invariable.' },
            { sentence: 'Explicación: «Primero deben terminar las demostraciones; después se abrirá la sala».', ok: true, why: 'Correcta: paráfrasis accesible que conserva el orden.' },
            { sentence: 'Paráfrasis: «Mientras estén concluyendo las demostraciones, se abrirá la sala».', ok: false, options: ['Cuando hayan terminado las demostraciones, se abrirá la sala.', 'Mientras concluyan las demostraciones, se abrirá la sala.', 'Las demostraciones habrían concluido al abrir la sala.'], answer: 0, why: 'La fuente exige anterioridad, no simultaneidad.' },
            { sentence: 'Ficha: «Según la circular, hoy los visitantes deben entregar un cuaderno».', ok: false, options: ['Según la circular, en 1910 los alumnos debían entregar un cuaderno.', 'Según la circular, hoy los visitantes hubieren de entregar un cuaderno.', 'Según la circular, los visitantes habrán entregado un cuaderno.'], answer: 0, why: 'La fuente es histórica: no describe normas actuales.' },
          ] },
        ] },
        { title: 'Reformula', blocks: [
          { kind: 'build', title: 'Ordena la paráfrasis actual', items: [
            { tiles: ['Quien', 'haya', 'entregado', 'su', 'cuaderno', 'podrá', 'retirar', 'una', 'copia'], accept: ['Quien haya entregado su cuaderno podrá retirar una copia'] },
            { tiles: ['Cuando', 'hayan', 'terminado', 'las', 'demostraciones', 'se', 'abrirá', 'la', 'sala'], accept: ['Cuando hayan terminado las demostraciones se abrirá la sala', 'Se abrirá la sala cuando hayan terminado las demostraciones'] },
            { tiles: ['Primero', 'deben', 'terminar', 'las', 'demostraciones', 'y', 'después', 'se', 'abrirá', 'la', 'sala'], accept: ['Primero deben terminar las demostraciones y después se abrirá la sala'] },
          ] },
          { kind: 'rewrite', title: 'Moderniza conservando la anterioridad', items: [
            { prompt: 'Quien hubiere entregado su cuaderno podrá retirar una copia del catálogo.', instruction: 'Usa «haya + participio».', accept: ['Quien haya entregado su cuaderno podrá retirar una copia del catálogo', 'Quien haya entregado su cuaderno, podrá retirar una copia del catálogo'] },
            { prompt: 'Cuando hubieren concluido las demostraciones, se abrirá la sala de trabajos.', instruction: 'Usa «terminar» en pretérito perfecto de subjuntivo.', accept: ['Cuando hayan terminado las demostraciones, se abrirá la sala de trabajos', 'Cuando hayan terminado las demostraciones se abrirá la sala de trabajos', 'Se abrirá la sala de trabajos cuando hayan terminado las demostraciones'] },
            { prompt: 'El socio que hubiere faltado a tres asambleas perderá su voto.', instruction: 'Empieza con «El socio que haya…».', accept: ['El socio que haya faltado a tres asambleas perderá su voto'] },
            { prompt: 'Aquel que hubiere vencido recibirá el premio.', instruction: 'Empieza con «Quien…».', accept: ['Quien haya vencido recibirá el premio', 'Quien haya ganado recibirá el premio'] },
          ] },
        ] },
        { title: 'Clasifica las paráfrasis', blocks: [
          { kind: 'classify', title: 'Fuente: «Quien hubiere pagado la matrícula recibirá el carné».', categories: [
            { id: 'fiel', label: 'Paráfrasis fiel', tone: 'teal' },
            { id: 'pierde', label: 'Aceptable, pero pierde un matiz', tone: 'neutral' },
            { id: 'cambia', label: 'Cambia el sentido', tone: 'orange' },
          ], items: [
            { text: 'Quien haya pagado la matrícula recibirá el carné.', answer: 'fiel', why: 'Conserva la eventualidad y el resultado completado.' },
            { text: 'Quien pague la matrícula recibirá el carné.', answer: 'pierde', why: 'Sigue siendo eventual, pero el pago completado queda menos explícito.' },
            { text: 'Quien habría pagado la matrícula recibirá el carné.', answer: 'cambia', why: 'El condicional compuesto plantea un resultado alternativo.' },
            { text: 'Primero hay que pagar la matrícula; después se recibe el carné.', answer: 'fiel', why: 'Paráfrasis accesible que respeta el orden.' },
            { text: 'Quien pagó la matrícula recibió el carné.', answer: 'cambia', why: 'Convierte una condición eventual en un hecho pasado.' },
            { text: 'Si pagas la matrícula, recibirás el carné.', answer: 'pierde', why: 'Mantiene la condición, pero no destaca la anterioridad ni el carácter general.' },
          ] },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'La nota del equipo editorial', coach: 'Primero escucha sin leer.',
      steps: [
        { title: 'La nota del equipo editorial', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha para la idea general. En la segunda, el alumno anota cada decisión editorial y su justificación.', self: 'Escucha una vez para la idea general. En la segunda, anota cada decisión y por qué se toma. Puedes bajar la velocidad.' } },
          { kind: 'listen', title: 'Comentarios sobre la ficha de la circular', channel: 'NOTA DE VOZ · EQUIPO EDITORIAL', src: '/audio/grammar-classroom/156.mp3',
            before: 'Una editora revisa la ficha que explica la circular antigua. ¿Qué crees que le preocupa más: la gramática, el público o el contexto?',
            gist: { prompt: '¿Qué busca la editora con sus comentarios?', options: ['Una paráfrasis precisa y una nota que sitúe la circular como documento histórico.', 'Escribir nuevas instrucciones con el tiempo histórico.', 'Eliminar la circular de la exposición.'], answer: 0, why: 'Insiste en la «precisión de nuestra paráfrasis» y en aclarar que «se trata de una circular de cursos antiguos».' },
            details: [
              { prompt: '¿Por qué mantendría «haya entregado»?', options: ['Porque indica que el cuaderno debe estar entregado antes de retirar la copia.', 'Porque es más corto.', 'Porque «quien entregue» es incorrecto.'], answer: 0, why: '«Indica que el cuaderno debe estar entregado antes de retirar la copia».' },
              { prompt: '¿Qué pasa si se dice «quien entregue»?', options: ['La atención al resultado completado queda menos explícita.', 'La frase se vuelve incorrecta.', 'Cambia el orden de las acciones.'], answer: 0, why: '«La relación sigue siendo posible, pero la atención al resultado completado queda menos explícita».' },
              { prompt: '¿Qué aclara sobre «hubieren»?', options: ['Que no convierte el participio en plural.', 'Que debe escribirse con tilde.', 'Que equivale a «habrían».'], answer: 0, why: '«Hubieren no convierte el participio en plural: concluido permanece invariable».' },
              { prompt: '¿Qué debe distinguir la nota?', options: ['La lectura del documento de una afirmación sobre cómo funciona hoy la institución.', 'Los cursos de dibujo de los de pintura.', 'La versión impresa de la digital.'], answer: 0, why: '«La nota debe distinguir la lectura del documento de una afirmación sobre cómo funciona hoy la institución».' },
              { prompt: '¿Qué riesgo quiere evitar con la aclaración final?', options: ['Que la solemnidad de la forma parezca una autoridad presente.', 'Que los visitantes no lean la ficha.', 'Que la circular parezca falsa.'], answer: 0, why: '«Así evitamos que la solemnidad de la forma parezca una autoridad presente».' },
            ],
            transcript: 'Hola, revisé la explicación de la circular. Mantendría [[haya entregado|teal]] en la paráfrasis, porque indica que el cuaderno debe estar entregado antes de retirar la copia. Si decimos simplemente «quien entregue», la relación sigue siendo posible, pero la atención al resultado completado queda menos explícita. Para las demostraciones, «[[cuando hayan terminado|teal]]» conserva bien el punto anterior a la apertura. También aclararía que [[hubieren|violet]] no convierte el participio en plural: concluido permanece invariable en la forma compuesta. No hace falta escribir una instrucción nueva con ese tiempo histórico. Podemos explicar a los visitantes el orden de las acciones con palabras actuales. La nota debe distinguir la lectura del documento de una afirmación sobre cómo funciona hoy la institución. Quizá convenga añadir que se trata de una circular de cursos antiguos y no de condiciones actuales de acceso. Así evitamos que la solemnidad de la forma parezca una autoridad presente y mantenemos el foco en la historia de la enseñanza y en la precisión de nuestra paráfrasis.',
            reply: { teacher: 'El alumno responde en voz alta como Beatriz: acepta o discute cada propuesta y redacta oralmente la frase de contexto para la ficha.', self: 'Responde a la editora en un mensaje breve: di qué propuestas aceptas, cuál matizarías y escribe la frase de contexto para la ficha.' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Documentos, lectores y precisión', coach: 'Una pregunta por vez. Argumenta con matices.',
      steps: [
        { title: 'Documentos, lectores y precisión', blocks: [
          { kind: 'guide', text: { teacher: 'No hace falta usar todas las preguntas. Exige precisión en la interpretación y matices en la argumentación; las formas en -re aparecen solo como citas.', self: 'Responde cada pregunta en voz alta. Interpreta con precisión y cita las formas antiguas entre comillas, sin usarlas en tus propias frases.' } },
          { kind: 'talk', cards: [
            { q: '¿Has leído alguna vez un documento antiguo de tu familia o de tu ciudad: una carta, un testamento, unas actas? ¿Qué te llamó la atención?', followUps: ['¿Qué te costó entender?', '¿Qué decía de la época?', '¿Quién lo conserva?'], phrases: ['Me llamó la atención…', 'Estaba redactado de un modo…', 'Reflejaba una época en la que…'], hint: 'Si no tienes uno propio, piensa en un documento histórico que hayas visto en un museo.', example: 'En casa de mis abuelos había unas actas de la cooperativa del pueblo. Me llamó la atención lo solemne que era todo: hasta para comprar un tractor usaban fórmulas larguísimas.', next: 'Ahora, una frase concreta.' },
            { q: 'Explica con precisión: «Quien hubiere entregado su cuaderno podrá retirar una copia». ¿Qué exige y qué no dice?', followUps: ['¿Qué ocurre primero?', '¿Afirma que alguien lo entregó?', '¿Cómo lo explicarías a un niño?'], phrases: ['Exige que…', 'No afirma que…', 'Primero…; después…'], hint: 'Separa tres cosas: el orden, la eventualidad y lo que el texto no afirma.', example: 'Exige que la entrega esté hecha antes de retirar la copia. No afirma que nadie la haya hecho: define una condición. A un niño le diría: «Primero entregas el cuaderno y después te dan el catálogo».', next: 'Pasemos a las decisiones editoriales.' },
            { q: '¿Qué prefieres en una exposición: una paráfrasis muy fiel o una explicación muy accesible? ¿Por qué?', followUps: ['¿Depende del público?', '¿Qué se pierde en cada caso?', '¿Se pueden combinar?'], phrases: ['Una paráfrasis fiel conserva…', 'Una explicación accesible gana…, pero pierde…', 'Lo ideal sería…'], hint: 'Usa ejemplos de esta clase: «quien haya entregado» frente a «primero… después…».', example: 'Depende del público. «Quien haya entregado» conserva el matiz de requisito cumplido, pero para un visitante ocasional «primero entregas, después recibes» es más claro. Lo ideal es ofrecer las dos capas.', next: 'Ahora, la autoridad de los textos.', teacher: 'Pide al alumno que justifique con al menos un matiz gramatical concreto.' },
            { q: '¿Por qué crees que un texto solemne puede parecer más «oficial» o vigente de lo que es?', followUps: ['¿Te ha pasado con algún cartel o norma?', '¿Qué papel tiene el lenguaje en la autoridad?', '¿Cómo lo evitarías en una ficha?'], phrases: ['La solemnidad transmite…', 'Puede dar la impresión de que…', 'Para evitarlo, añadiría…'], hint: 'Relaciona forma lingüística y percepción de autoridad.', example: 'La solemnidad transmite autoridad aunque el texto tenga cien años. En una ficha añadiría siempre la fecha y una frase como «estas condiciones correspondían a los cursos de 1910».', next: 'Pasemos a la evolución del idioma.' },
            { q: 'El futuro de subjuntivo casi ha desaparecido del español, pero sigue en algunos textos jurídicos. ¿Debería eliminarse también de ellos?', followUps: ['¿Qué ganaría la ciudadanía?', '¿Qué argumento darían los juristas?', '¿Conoces el movimiento por el lenguaje claro?'], phrases: ['Estoy a favor de…, siempre que…', 'Un argumento en contra sería…', 'Lo decisivo es…'], hint: 'Presenta los dos lados antes de dar tu opinión.', example: 'Estoy a favor de modernizar, siempre que no se pierda precisión. Los juristas dirían que la forma tradicional evita ambigüedades, pero «haya + participio» expresa lo mismo y cualquiera lo entiende.', next: 'Para terminar, una reflexión personal.', teacher: 'Evita entrar en interpretación de normas vigentes: el tema es el lenguaje, no el asesoramiento legal.' },
            { q: 'Como hablante avanzado de español, ¿qué valor tiene para ti reconocer formas que no vas a usar?', followUps: ['¿Te ayuda a leer literatura o historia?', '¿Te da seguridad?', '¿Qué otra forma rara te gustaría conocer?'], phrases: ['Me permite…', 'Sin reconocerlas…', 'Me interesa también…'], hint: 'Piensa en textos que quieres leer en el futuro.', example: 'Me permite leer documentos históricos sin perderme. Sin reconocer estas formas, interpretaría mal una condición o pensaría que hay erratas. Me interesaría conocer también el pretérito anterior, que aparece en novelas clásicas.' },
          ], swap: { teacher: 'Al final, el alumno trae una frase con «hubiere + participio» o con una forma en -re y le pide al profesor dos paráfrasis: una fiel y otra accesible.', self: 'Busca una frase con «hubiere + participio» en un texto histórico o jurídico y escribe dos paráfrasis: una fiel y otra accesible.' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Una ficha interpretativa', coach: 'Precisión, claridad y contexto.',
      steps: [
        { title: 'Una ficha interpretativa', blocks: [
          { kind: 'guide', text: { teacher: 'Puede escribirse en clase o como tarea. Usen la revisión automática y después evalúen juntos la precisión de la paráfrasis y la claridad del contexto.', self: 'Escribe tu ficha y toca «Revisar mi texto». Después comprueba: ¿mantienes el orden, la eventualidad y el carácter histórico de la fuente?' } },
          { kind: 'write', title: 'Ficha para una circular antigua', situation: 'La exposición digital incluye esta circular de 1910: «Quien hubiere entregado su cuaderno podrá retirar una copia del catálogo. Cuando hubieren concluido las demostraciones, se abrirá la sala de trabajos». Escribe la ficha interpretativa que la acompañará.', task: [
            'Explica qué acción debe estar **completada antes** de cada consecuencia.',
            'Propón una **paráfrasis fiel** y comenta qué conserva frente a otras opciones (presente simple, habría, habrá).',
            'Ofrece una explicación **accesible** para el público general.',
            'Sitúa el **alcance histórico** de la información.',
          ], starters: ['En la circular, «hubiere entregado» presenta…', 'La versión «quien haya entregado…» mantiene…', 'Una paráfrasis con el presente simple…', 'No debe confundirse con «habría entregado», que…', 'Para el público general: «Primero…; después…».', 'Estas condiciones correspondían a…'],
            words: ['anterioridad', 'eventual', 'completado', 'requisito', 'paráfrasis', 'alcance', 'vigente', 'transcripción'],
            model: 'En la circular, «[[hubiere entregado|violet]]» presenta el cuaderno como ya entregado antes de retirar la copia del catálogo. La versión «quien [[haya entregado|teal]] su cuaderno podrá retirar una copia» mantiene esa condición eventual y completada; «quien entregue» sería aceptable, pero dejaría menos explícito que la entrega debe estar hecha. Tampoco debe confundirse con «[[habría entregado|orange]]», que sugeriría un resultado alternativo, ni con «[[habrá entregado|blue]]», que sería una previsión. Del mismo modo, «cuando [[hayan terminado|teal]] las demostraciones» sitúa su conclusión antes de abrir la sala; el participio «concluido» es invariable. Para el público general: primero se entregaba el cuaderno y se terminaban las demostraciones; después se recibía el catálogo y se abría la sala. Estas condiciones correspondían a los cursos de 1910 y no describen las actividades actuales de la institución.',
            minWords: 130 },
        ] },
      ],
    },
    {
      id: 'cerrar', label: 'Cerrar', icon: '✓', mascot: '/brand/mascot/standing.webp',
      title: 'Lo esencial', coach: '¿Qué te llevas hoy?',
      steps: [
        { title: 'Lo esencial', blocks: [
          { kind: 'recap', items: [
            { tone: 'violet', label: 'HUBIERE + PARTICIPIO', formula: 'quien / cuando / si + hubiere + participio', example: 'Quien hubiere entregado su cuaderno podrá retirar una copia.', caption: 'Condición eventual, completada antes. Solo para leer.' },
            { tone: 'teal', label: 'PARÁFRASIS FIEL', formula: 'quien / cuando + haya + participio', example: 'Quien haya entregado su cuaderno podrá retirar una copia.', caption: 'Conserva orden, eventualidad y resultado completado.' },
            { tone: 'blue', label: 'NO CONFUNDIR', formula: 'habrá + participio · habría + participio', example: 'Para mañana habrá entregado. · Con más tiempo, habría entregado.', caption: 'Previsión o conjetura · resultado alternativo.' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'Cuatro comprobaciones', text: '¿Qué acción debe estar **completada antes**? ¿La situación es **eventual** o un hecho? ¿Tu paráfrasis evita **habría**, **habrá** y la **simultaneidad**? ¿Has aclarado que el documento es **histórico**?' },
        ] },
        { title: 'Desafío final', blocks: [
          { kind: 'choice', title: 'Cuatro frases, sin ayuda', items: [
            { prompt: '«El aspirante que hubiere superado la prueba escrita pasará a la entrevista.» ¿Qué ocurre primero?', options: ['Superar la prueba escrita.', 'La entrevista.', 'Ocurren a la vez.'], answer: 0, why: 'La prueba debe estar superada antes de la entrevista.' },
            { prompt: 'Paráfrasis más fiel:', options: ['El aspirante que haya superado la prueba escrita pasará a la entrevista.', 'El aspirante que habría superado la prueba escrita pasará a la entrevista.', 'El aspirante que superó la prueba escrita pasó a la entrevista.'], answer: 0, why: '«Haya superado» conserva la eventualidad y el resultado completado.' },
            { prompt: '¿Qué forma plantea un resultado que no se produjo?', options: ['habría superado', 'hubiere superado', 'habrá superado'], answer: 0, why: 'El condicional compuesto plantea una alternativa.' },
            { prompt: '¿Qué forma es correcta?', options: ['hubieren superado', 'hubieren superados', 'hubiere superados'], answer: 0, why: 'Auxiliar concordado, participio invariable.' },
          ] },
        ] },
        { title: 'Tus errores y repaso', blocks: [
          { kind: 'review' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «Explica “hubiere terminado” sin usar ninguna forma arcaica». Respuesta posible: contempla algo que ya haya terminado antes de la consecuencia que establece el documento.' },
        ] },
      ],
    },
  ],
};
