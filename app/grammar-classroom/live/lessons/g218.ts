import type { LiveLesson } from '../types';

/**
 * Lesson 218 · B1 · Que y quien.
 * Elena organizes a photography workshop at a cultural centre and must find the right people:
 * Marta (workshop schedule) and Luis (materials) run through the class.
 */
export const lesson: LiveLesson = {
  id: 218,
  level: 'B1',
  title: 'Que y quien',
  subtitle: 'Identificar a la persona, la cosa o el lugar que buscas y añadir información sobre alguien ya identificado.',
  legend: [
    { tone: 'blue', label: 'Que · identifica: separa a una persona o cosa de las demás' },
    { tone: 'teal', label: ', quien… , · añade un dato sobre alguien ya identificado' },
    { tone: 'orange', label: 'El antecedente · la palabra a la que se refiere' },
  ],
  optionNotes: {
    que: '«Que» sirve para personas, cosas y lugares, y es la única opción cuando el dato identifica a alguien entre varios.',
    quien: '«Quien» solo se refiere a personas y, sin preposición, solo añade un dato entre comas sobre alguien ya identificado.',
    quién: '«Quién», con tilde, es interrogativo: «¿Quién viene?», «No sé quién viene».',
    donde: '«Donde» se refiere a un lugar en el que pasa algo; aquí el lugar hace la acción o la recibe.',
    cuando: '«Cuando» introduce un tiempo, no un dato sobre una persona o cosa.',
    porque: '«Porque» da una causa; aquí necesitamos un relativo.',
    'que la': 'El relativo «que» ya representa la cosa; no repitas el pronombre: «la mochila que compré».',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Identificar y añadir información', coach: '¿A cuál te refieres? ¿O ya sabemos quién es? Which one do you mean? Or do we already know who it is?',
      steps: [
        { title: 'Persona + que: identificar · Identifying a person', blocks: [
          { kind: 'lead', text: 'Elena organiza un taller de fotografía en un centro cultural. En recepción hay tres personas con tareas diferentes y Elena no sabe sus nombres. Para encontrar a la persona correcta, no basta con decir «la chica»: necesita un dato que la distinga de las demás.', en: 'Elena is organising a photography workshop at a cultural centre. At reception there are three people with different jobs, and Elena doesn’t know their names. To find the right person, “the girl” is not enough: she needs a detail that picks that person out from the others.' },
          { kind: 'guide', text: { teacher: 'Lee los ejemplos y pregunta: «¿Cuántas personas hay? ¿Qué dato nos dice cuál es?».', self: 'Lee los ejemplos. En cada uno, piensa: ¿qué dato separa a esta persona de las demás?' } },
          { kind: 'concept', tone: 'blue', label: 'PERSONA + QUE', question: '¿Cuál de todas?', en: 'Person + que: which one of all of them?', formula: ['persona + que + verbo / información'],
            meaning: '«Que» une a una persona (el **antecedente**) con un dato que la **identifica**: entre varias personas posibles, selecciona a una. No lleva comas.',
            examples: [
              { es: 'Necesito hablar con [[la persona|orange]] [[que coordina los talleres|blue]].', en: 'I need to speak to the person who coordinates the workshops.' },
              { es: 'Busco a [[la compañera|orange]] [[que vive cerca del centro|blue]].', en: 'I’m looking for the colleague who lives near the centre.' },
              { es: '¿Conoces a [[la chica|orange]] [[que vende las entradas|blue]]?', en: 'Do you know the girl who sells the tickets?' },
              { es: '[[Los alumnos|orange]] [[que llegan tarde|blue]] esperan en la entrada.', en: 'The students who arrive late wait at the entrance.' },
            ],
            note: 'Sin el dato, la frase queda incompleta: «Necesito hablar con la persona…» ¿cuál?' },
          { kind: 'tip', icon: '!', title: 'Aquí no va «quien»', text: 'Cuando el dato identifica a alguien entre varios, usa **que**: «la persona **que** coordina», no «la persona quien coordina».', en: 'English uses “who” here, but Spanish does not use “quien”. When the detail picks someone out from a group, use “que”, with no commas: “la persona que coordina”.' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'Hay dos profesores. Hablo con el profesor ___ enseña fotografía.', options: ['que', 'quien', 'quién'], answer: 0, why: 'El dato identifica a uno entre dos: «que», sin comas.', en: 'There are two teachers. I’m talking to the one who teaches photography.' },
            { prompt: 'En «la persona que coordina los talleres», ¿cuál es el antecedente?', options: ['que', 'la persona', 'los talleres'], answer: 1, why: '«Que» se refiere a «la persona»: ella coordina.', en: 'In this phrase, which word is the antecedent (the word the relative refers back to)?' },
          ] },
        ] },
        { title: 'Cosa o lugar + que · Thing or place + que', mascot: '/brand/mascot/studying.webp', coach: 'Que sirve para todo: personas, cosas y lugares.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'COSA / LUGAR + QUE', question: '¿Cuál de todos?', en: 'Thing or place + que: which one of all of them?', formula: ['cosa / lugar + que + verbo', 'cosa / lugar + que + sujeto + verbo'],
            meaning: '«Que» también identifica **cosas y lugares**. El antecedente tiene que aparecer: si no, el oyente no sabe de qué hablas. A veces el antecedente hace la acción (la sala **tiene**); otras veces la recibe (la sala que **vimos**).',
            examples: [
              { es: 'Reservamos [[la sala|orange]] [[que tiene ventanas grandes|blue]].', en: 'We’re booking the room that has big windows.' },
              { es: '[[La sala|orange]] [[que vimos ayer|blue]] está libre el viernes.', en: 'The room we saw yesterday is free on Friday.' },
              { es: 'Prefiero [[el café|orange]] [[que abre hasta medianoche|blue]].', en: 'I prefer the café that’s open until midnight.' },
              { es: '[[La mochila|orange]] [[que compré en Lima|blue]] es azul.', en: 'The backpack I bought in Lima is blue.' },
            ] },
          { kind: 'tip', icon: '✂', title: 'No repitas la cosa', text: 'El relativo ya representa la cosa. «La mochila que compré», no «la mochila que **la** compré».', en: '“Que” already stands for the thing, so don’t add a pronoun: “la mochila que compré”, not “la mochila que la compré”. English sometimes drops the relative (“the backpack I bought”); Spanish always keeps “que”.' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'Usa el armario ___ está junto a la entrada.', options: ['quien', 'que', 'donde'], answer: 1, why: 'Para cosas, «que». El armario es el sujeto de «está».', en: 'Use the cupboard by the entrance.' },
            { prompt: '¿Qué frase es correcta?', options: ['Que está junto a la estación abre temprano.', 'El café que está junto a la estación abre temprano.', 'El café quien está junto a la estación abre temprano.'], answer: 1, why: 'Necesitas el antecedente («el café») y, para cosas, «que».', en: 'Which sentence is correct?' },
          ] },
        ] },
        { title: ', quien… ,: añadir un dato · Adding a detail', mascot: '/brand/mascot/speaking.webp', coach: 'Ya sabemos quién es. Ahora, un dato más.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'PERSONA IDENTIFICADA, QUIEN…', question: '¿Ya sabemos de quién hablas?', en: 'An identified person, quien…: adding extra information', formula: ['nombre / persona identificada, quien + dato, …', 'nombre / persona identificada, que + dato, …'],
            meaning: 'Cuando la persona **ya está identificada** (por su nombre, por ejemplo), el dato no selecciona: solo **añade información**. Va entre **comas**, como un paréntesis. Aquí puedes usar **quien** o **que**; «quien» suena algo más formal.',
            examples: [
              { es: '[[Marta|orange]], [[quien trabaja aquí desde hace cinco años|teal]], conoce bien a los grupos.', en: 'Marta, who has worked here for five years, knows the groups well.' },
              { es: 'Te presento a [[Luis|orange]], [[quien prepara el material|teal]].', en: 'Let me introduce Luis, who prepares the materials.' },
              { es: 'Hablé con [[Lucía|orange]], [[quien coordinó el proyecto|teal]].', en: 'I spoke to Lucía, who coordinated the project.' },
              { es: '[[Mi jefa|orange]], [[que es muy organizada|teal]], lo prepara todo con tiempo.', en: 'My boss, who is very organised, prepares everything well in advance.' },
            ],
            note: 'Si quitas lo que va entre comas, la frase sigue clara: «Marta conoce bien a los grupos».' },
          { kind: 'tip', icon: '?', title: 'Quien y quién', text: '**Quién**, con tilde, pregunta: «¿**Quién** viene?», «Necesito saber **quién** viene». **Quien**, sin tilde, retoma a una persona: «Luis, **quien** prepara el material…».', en: '“Quién” with an accent asks a question, direct or indirect: “Who is coming?”, “I need to know who is coming.” “Quien” without an accent refers back to a person you have already mentioned.' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'Te presento a Luis, ___ prepara el material de las visitas.', options: ['quien', 'quién', 'donde'], answer: 0, why: 'Luis ya está identificado por su nombre; el dato va entre comas: «quien», sin tilde.', en: 'This is Luis, who prepares the materials for the visits. Luis is already identified by name.' },
            { prompt: 'Necesito saber ___ viene con tu grupo.', options: ['quien', 'quién', 'que'], answer: 1, why: 'Es una pregunta indirecta: «quién», con tilde.', en: 'I need to know who is coming with your group. Is this a relative or a hidden question?' },
          ] },
        ] },
        { title: 'Cómo elegir · How to choose', mascot: '/brand/mascot/seated.webp', coach: '¿Con comas o sin comas?', blocks: [
          { kind: 'table', title: 'Que y quien · Que and quien', head: ['Antecedente', 'Identifica (sin comas)', 'Añade un dato (entre comas)'], rows: [
            ['persona', '[[que|blue]]: la compañera [[que organiza las exposiciones|blue]]', '[[quien|teal]] o [[que|teal]]: Marta, [[quien lleva la agenda|teal]], …'],
            ['cosa / lugar', '[[que|blue]]: la sala [[que tiene ventanas|blue]]', '[[que|teal]]: el centro, [[que abrió en 2020|teal]], …'],
          ], note: '«Quien» nunca se refiere a cosas ni a lugares.' },
          { kind: 'compare', title: 'Las comas cambian el significado · Commas change the meaning', columns: [
            { tone: 'blue', label: 'SIN COMAS', sentence: 'Mi hermano [[que vive en Lima|blue]] es médico.', idea: 'Tengo varios hermanos: hablo del que vive en Lima.', en: 'No commas: I have several brothers, and I mean the one who lives in Lima.' },
            { tone: 'teal', label: 'ENTRE COMAS', sentence: 'Mi hermano, [[quien vive en Lima|teal]], es médico.', idea: 'Tengo un solo hermano; el dato de Lima es información extra.', en: 'Between commas: I have only one brother; Lima is just extra information.' },
          ] },
          { kind: 'decide', title: 'Piensa en tu frase · Think about your sentence', steps: [
            { q: '¿El dato sirve para saber de cuál de varios hablas?', yes: 'Usa **que**, sin comas: «la persona [[que coordina|blue]]».', no: 'next' },
            { q: '¿El antecedente es una persona?', yes: 'Usa **quien** o **que**, entre comas: «Marta, [[quien trabaja aquí|teal]], …».', no: 'Usa **que**, entre comas: «El centro, [[que abrió hace poco|teal]], …».' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Estos errores son muy comunes.', blocks: [
          { kind: 'guide', text: { teacher: 'Tu alumno busca el error antes de que muestres la corrección y dice si el dato identifica o añade información.', self: 'Lee cada frase, busca el error y después toca para ver la corrección.' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Busco a la persona quien coordina los talleres.', right: 'Busco a la persona que coordina los talleres.', why: 'El dato identifica a una persona entre varias: «que».' },
            { wrong: 'La sala quien tiene ventanas grandes es la mejor.', right: 'La sala que tiene ventanas grandes es la mejor.', why: '«Quien» solo se refiere a personas.' },
            { wrong: 'Que está junto a la estación abre temprano.', right: 'El café que está junto a la estación abre temprano.', why: 'Falta el antecedente: ¿qué está junto a la estación?' },
            { wrong: 'Marta quien trabaja aquí conoce la sala.', right: 'Marta, quien trabaja aquí, conoce la sala.', why: 'Con «quien» sin preposición, el dato va entre comas.' },
            { wrong: 'La cámara que la compré es muy buena.', right: 'La cámara que compré es muy buena.', why: '«Que» ya representa la cámara: no repitas «la».' },
            { wrong: 'No sé quien viene mañana.', right: 'No sé quién viene mañana.', why: 'Es una pregunta indirecta: «quién», con tilde.' },
          ] },
          { kind: 'teacher', text: 'Pide al alumno que describa a tres personas de su trabajo o su clase con «la persona que…» sin decir el nombre. Tú adivinas quién es.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'Los relativos en situaciones reales', coach: 'Toca las expresiones marcadas. Tap the marked expressions.',
      steps: [
        { title: 'En la recepción · At reception', blocks: [
          { kind: 'guide', text: { teacher: 'Lean el diálogo con papeles. Después, el alumno toca cada expresión y dice si identifica o añade información.', self: 'Lee la conversación. Después toca cada expresión marcada para descubrir por qué se usó.' } },
          { kind: 'explore', title: 'Centro cultural, recepción', setting: 'Elena llega al centro cultural para organizar un taller de fotografía con su grupo. (Elena arrives at the cultural centre to organise a photography workshop with her group.)', lines: [
            { who: 'Elena', text: 'Buenos días. Necesito hablar con la persona [[que coordina los talleres de fotografía|blue]].', en: 'Good morning. I need to speak to the person who coordinates the photography workshops.' },
            { who: 'Recepcionista', text: 'Aquí trabajamos tres personas. Yo vendo las entradas. Mi compañero prepara las exposiciones.', en: 'There are three of us working here. I sell the tickets. My colleague puts together the exhibitions.' },
            { who: 'Elena', text: 'Entonces busco a la compañera [[que lleva la agenda de talleres|blue]].', en: 'Then I’m looking for the colleague who keeps the workshop calendar.' },
            { who: 'Recepcionista', text: 'Es Marta. Un momento, por favor.', en: 'That’s Marta. One moment, please.' },
            { who: 'Marta', text: 'Hola, soy Marta. ¿En qué puedo ayudarte?', en: 'Hi, I’m Marta. How can I help you?' },
            { who: 'Elena', text: 'Somos seis personas y necesitamos una sala para el viernes.', en: 'There are six of us and we need a room for Friday.' },
            { who: 'Marta', text: 'Te recomiendo la sala [[que tiene ventanas grandes|blue]]. El taller necesita luz natural.', en: 'I recommend the room with the big windows. The workshop needs natural light.' },
            { who: 'Elena', text: '¡Perfecto! ¿Y el material? ¿Hay mesas y enchufes?', en: 'Perfect! And the equipment? Are there tables and sockets?' },
            { who: 'Marta', text: 'Sí. Te presento a Luis, [[quien prepara el material de las visitas|teal]].', en: 'Yes. Let me introduce Luis, who prepares the materials for visits.' },
            { who: 'Luis', text: 'Encantado. Dejo las mesas listas antes de las diez.', en: 'Nice to meet you. I’ll have the tables ready before ten.' },
            { who: 'Elena', text: 'Gracias. Una pregunta: la cámara [[que traemos|blue]] necesita trípode. ¿Tienen alguno?', en: 'Thanks. One question: the camera we’re bringing needs a tripod. Do you have one?' },
            { who: 'Luis', text: 'Sí, hay dos en el armario [[que está junto a la entrada|blue]].', en: 'Yes, there are two in the cupboard by the entrance.' },
            { who: 'Elena', text: '(Más tarde, a su grupo) Marta, [[quien trabaja allí desde hace cinco años|teal]], nos recomendó la mejor sala.', en: '(Later, to her group) Marta, who has worked there for five years, recommended the best room to us.' },
          ], notes: {
            'que coordina los talleres de fotografía': 'Elena no sabe el nombre: el dato **identifica** a una persona entre varias. Sin comas, con «que».',
            'que lleva la agenda de talleres': 'Otro dato para **seleccionar**: de las tres personas, la que lleva la agenda.',
            'que tiene ventanas grandes': 'Identifica **una sala** entre varias. Para cosas y lugares, siempre «que».',
            'quien prepara el material de las visitas': 'Luis ya está identificado por su nombre. El dato es **información extra**, entre comas.',
            'que traemos': 'Aquí la cámara **recibe** la acción (nosotros traemos la cámara). Sin repetir «la».',
            'que está junto a la entrada': 'Identifica qué armario: el de la entrada, no otro.',
            'quien trabaja allí desde hace cinco años': 'Marta ya está identificada. El dato explica por qué su opinión es fiable; va entre comas.',
          } },
          { kind: 'choice', title: '¿Entendiste?', items: [
            { prompt: '¿Por qué Elena describe la función de la persona y no dice un nombre?', options: ['Porque no sabe el nombre y hay varias personas.', 'Porque Marta no está.', 'Porque es más formal.'], answer: 0, why: 'Necesita seleccionar a la persona correcta entre tres.', en: 'Why does Elena describe the person’s job instead of saying a name?' },
            { prompt: '¿Por qué recomiendan la sala con ventanas grandes?', options: ['Porque es más barata.', 'Porque el taller necesita luz natural.', 'Porque es más grande.'], answer: 1, why: '«El taller necesita luz natural».', en: 'Why do they recommend the room with big windows?' },
            { prompt: '¿Dónde están los trípodes?', options: ['En la sala del taller.', 'En el armario junto a la entrada.', 'En recepción.'], answer: 1, why: '«Hay dos en el armario que está junto a la entrada».', en: 'Where are the tripods?' },
          ] },
        ] },
        { title: '¿Identifica o añade? · Identifying or adding?', blocks: [
          { kind: 'classify', title: 'Clasifica las expresiones del diálogo', categories: [
            { id: 'identifica', label: 'Identifica (sin comas)', tone: 'blue' },
            { id: 'anade', label: 'Añade un dato (entre comas)', tone: 'teal' },
          ], items: [
            { text: 'la persona que coordina los talleres', answer: 'identifica', why: 'Selecciona a una persona entre varias.' },
            { text: 'Luis, quien prepara el material', answer: 'anade', why: 'Luis ya tiene nombre: el dato es extra.' },
            { text: 'la sala que tiene ventanas grandes', answer: 'identifica', why: 'Selecciona una sala.' },
            { text: 'Marta, quien trabaja allí desde hace cinco años', answer: 'anade', why: 'Información extra sobre Marta.' },
            { text: 'el armario que está junto a la entrada', answer: 'identifica', why: 'Dice qué armario.' },
            { text: 'la compañera que lleva la agenda', answer: 'identifica', why: 'Selecciona a una compañera.' },
          ] },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Si te equivocas, lee la pista y prueba otra vez.',
      steps: [
        { title: 'Elige según el contexto · Choose according to the context', blocks: [
          { kind: 'choice', items: [
            { context: 'Hay dos compañeras; solo una vive cerca del centro.', prompt: 'Busco a la compañera ___ vive cerca del centro.', options: ['que', 'quien', 'donde'], answer: 0, why: 'El dato selecciona a una compañera: «que».', en: 'There are two colleagues; only one lives near the centre.' },
            { context: 'Eliges entre varios cafés según su horario.', prompt: 'Prefiero el café ___ abre hasta medianoche.', options: ['quien', 'que', 'cuando'], answer: 1, why: 'Para un lugar, «que».', en: 'You choose between several cafés by their opening hours.' },
            { context: 'Hay varias mochilas; solo una es de Lima.', prompt: 'La mochila ___ compré en Lima es azul.', options: ['que', 'que la', 'quien'], answer: 0, why: '«Que» ya representa la mochila.', en: 'There are several backpacks; only one is from Lima.' },
            { context: 'Presentas a tu jefe, que ya tiene nombre.', prompt: 'Este es Andrés, ___ dirige el departamento.', options: ['quién', 'quien', 'donde'], answer: 1, why: 'Dato extra entre comas sobre una persona identificada: «quien», sin tilde.', en: 'You introduce your boss, who already has a name.' },
            { context: 'No sabes la respuesta.', prompt: 'No sé ___ organiza la fiesta.', options: ['quien', 'que', 'quién'], answer: 2, why: 'Pregunta indirecta: «quién», con tilde.', en: 'You don’t know the answer: who is organising the party?' },
            { context: 'Hay muchas películas; hablas de una concreta.', prompt: 'La película ___ vimos anoche era muy larga.', options: ['quien', 'que', 'quién'], answer: 1, why: 'Para cosas, «que».', en: 'There are lots of films; you mean one in particular.' },
          ] },
        ] },
        { title: 'Compara los significados · Compare the meanings', blocks: [
          { kind: 'choice', items: [
            { prompt: '¿Qué frase indica que tengo **varias** hermanas?', options: ['Mi hermana, quien vive en Quito, es arquitecta.', 'Mi hermana que vive en Quito es arquitecta.'], answer: 1, why: 'Sin comas, el dato selecciona a una hermana entre varias.', en: 'Which sentence shows that I have several sisters?' },
            { prompt: '«Los empleados, que trabajan los sábados, cobran más.» ¿Qué significa?', options: ['Todos los empleados trabajan los sábados y cobran más.', 'Solo cobran más los que trabajan los sábados.'], answer: 0, why: 'Entre comas, el dato se refiere a todos: es información extra.', en: 'What does this sentence (with commas) mean?' },
            { prompt: '«Los empleados que trabajan los sábados cobran más.» ¿Qué significa?', options: ['Todos los empleados cobran más.', 'Solo cobran más los que trabajan los sábados.'], answer: 1, why: 'Sin comas, el dato selecciona a un grupo.', en: 'What does this sentence (without commas) mean?' },
            { prompt: '¿Qué frase es **incorrecta**?', options: ['La sala que reservamos tiene proyector.', 'Luis, quien prepara el material, llega a las nueve.', 'La sala quien reservamos tiene proyector.'], answer: 2, why: '«Quien» no se usa para cosas ni lugares.', en: 'Which sentence is incorrect?' },
          ] },
        ] },
        { title: 'Completa la conversación · Complete the conversation', blocks: [
          { kind: 'chat-fill', title: 'Primer día en la oficina', lines: [
            { who: 'Sofía', text: 'Hola, soy la persona nueva. Busco a la compañera ___ lleva los contratos.', options: ['quien', 'que', 'quién'], answer: 1, why: 'Identifica a una compañera entre varias: «que».' },
            { who: 'Raúl', text: 'Es Teresa, la mujer ___ está junto a la ventana.', options: ['que', 'quien', 'donde'], answer: 0, why: 'Identifica a una mujer: «que», sin comas.' },
            { who: 'Sofía', text: 'Gracias. ¿Y la contraseña del wifi? ¿Sabes ___ la tiene?', options: ['quien', 'quién', 'que'], answer: 1, why: 'Pregunta indirecta: «quién».' },
            { who: 'Raúl', text: 'Pregunta a Jorge, ___ es el responsable de informática.', options: ['quien', 'quién', 'donde'], answer: 0, why: 'Jorge ya tiene nombre: dato extra entre comas.' },
            { who: 'Sofía', text: '¿Y dónde dejo el abrigo?' },
            { who: 'Raúl', text: 'En el armario ___ está al lado de la puerta.', options: ['quien', 'que', 'cuando'], answer: 1, why: 'Para cosas, «que».' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Busco al profesor quien enseña fotografía.', ok: false, options: ['Busco al profesor que enseña fotografía.', 'Busco al profesor quién enseña fotografía.', 'Busco al profesor, que enseña fotografía.'], answer: 0, why: 'El dato identifica: «que», sin comas.' },
            { sentence: 'Hablé con Lucía, quien coordinó el proyecto.', ok: true, why: 'Correcta: dato extra, entre comas, sobre una persona con nombre.' },
            { sentence: 'El libro que me lo regalaste es precioso.', ok: false, options: ['El libro quien me regalaste es precioso.', 'El libro que me regalaste es precioso.', 'El libro me regalaste que es precioso.'], answer: 1, why: '«Que» ya representa el libro: sobra «lo».' },
            { sentence: 'La ciudad quien más me gusta es Cartagena.', ok: false, options: ['La ciudad que más me gusta es Cartagena.', 'La ciudad quién más me gusta es Cartagena.', 'La ciudad donde más me gusta es Cartagena.'], answer: 0, why: '«Quien» no se usa para lugares.' },
            { sentence: 'Mi abuela, que tiene noventa años, todavía cocina para todos.', ok: true, why: 'Correcta: con comas, «que» también puede añadir un dato sobre una persona.' },
            { sentence: 'Que vende entradas está en recepción.', ok: false, options: ['La persona que vende entradas está en recepción.', 'Quien que vende entradas está en recepción.', 'La persona quien vende entradas está en recepción.'], answer: 0, why: 'Falta el antecedente: «la persona».' },
          ] },
        ] },
        { title: 'Construye frases · Build sentences', blocks: [
          { kind: 'build', title: 'Ordena las palabras', items: [
            { tiles: ['que', 'Busco a', 'la persona', 'coordina los talleres'], accept: ['Busco a la persona que coordina los talleres'], en: 'I’m looking for the person who coordinates the workshops.' },
            { tiles: ['quien', 'Te presento a', 'prepara el material', 'Luis,'], accept: ['Te presento a Luis, quien prepara el material'], en: 'Let me introduce Luis, who prepares the materials.' },
            { tiles: ['que', 'La sala', 'vimos ayer', 'está libre'], accept: ['La sala que vimos ayer está libre'], en: 'The room we saw yesterday is free.' },
          ] },
          { kind: 'rewrite', title: 'Une las dos frases · Join the two sentences', items: [
            { prompt: 'Busco a una compañera. Ella vive cerca del centro.', instruction: 'Une con «que» para identificarla.', accept: ['Busco a una compañera que vive cerca del centro', 'Busco a la compañera que vive cerca del centro'] },
            { prompt: 'Hablé con Lucía. Lucía coordinó el proyecto.', instruction: 'Añade el dato entre comas con «quien».', accept: ['Hablé con Lucía, quien coordinó el proyecto'] },
            { prompt: 'Reservamos una sala. La sala tiene ventanas grandes.', instruction: 'Une con «que».', accept: ['Reservamos una sala que tiene ventanas grandes', 'Reservamos la sala que tiene ventanas grandes'] },
            { prompt: 'Marta conoce bien a los grupos. Marta trabaja aquí desde hace cinco años.', instruction: 'Empieza con «Marta, quien…».', accept: ['Marta, quien trabaja aquí desde hace cinco años, conoce bien a los grupos'] },
          ] },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Confirmar la visita', coach: 'Primero escucha sin leer. First listen without reading.',
      steps: [
        { title: 'Confirmar la visita', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha para la idea general. En la segunda, el alumno anota quién hace cada cosa y qué objetos o lugares se identifican.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Puedes bajar la velocidad.' } },
          { kind: 'listen', title: 'Marta confirma el taller', channel: 'NOTA DE VOZ · PARA ELENA', src: '/audio/grammar-classroom/218.mp3',
            before: 'Marta le deja a Elena una nota de voz para confirmar el taller. ¿Qué información crees que necesita del grupo? (Marta leaves Elena a voice message to confirm the workshop. What information do you think she needs from the group?)',
            gist: { prompt: '¿Para qué es el mensaje?', options: ['Para confirmar la sala y pedir información del grupo.', 'Para cancelar el taller.', 'Para cambiar de sala.'], answer: 0, why: '«La sala que vimos ayer está libre el viernes… Necesito saber quién viene con tu grupo».', en: 'What is the message for?' },
            details: [
              { prompt: '¿Quién es Marta?', options: ['La persona que vende las entradas.', 'La persona que lleva la agenda de los talleres.', 'La compañera que organiza las exposiciones.'], answer: 1, why: '«Soy Marta, la persona que lleva la agenda de los talleres».', en: 'Who is Marta?' },
              { prompt: '¿Qué hace Luis antes de las diez?', options: ['Deja las mesas listas.', 'Abre la sala.', 'Llama a Elena.'], answer: 0, why: '«Luis, quien prepara el material, puede dejar las mesas listas antes de las diez».', en: 'What does Luis do before ten?' },
              { prompt: '¿Qué necesita saber Marta?', options: ['La hora de llegada.', 'Quién viene y qué cámara van a usar.', 'Cuánto van a pagar.'], answer: 1, why: '«Necesito saber quién viene con tu grupo y qué cámara van a usar».', en: 'What does Marta need to know?' },
              { prompt: '¿Quién no coordinará el taller?', options: ['Luis.', 'La compañera que organiza las exposiciones.', 'Marta.'], answer: 1, why: '«La compañera que organiza las exposiciones también participará un rato, pero no coordinará el taller».', en: 'Who will not coordinate the workshop?' },
              { prompt: '¿Dónde pueden dejar los bolsos?', options: ['En el armario que está junto a la entrada.', 'En recepción.', 'En la sala.'], answer: 0, why: '«…usa el armario que está junto a la entrada».', en: 'Where can they leave their bags?' },
            ],
            transcript: 'Hola, Elena. Soy Marta, la persona [[que lleva la agenda de los talleres|blue]]. La sala [[que vimos ayer|blue]] está libre el viernes. Luis, [[quien prepara el material|teal]], puede dejar las mesas listas antes de las diez. Necesito saber quién viene con tu grupo y qué cámara van a usar. La compañera [[que organiza las exposiciones|blue]] también participará un rato, pero no coordinará el taller. Si buscas un espacio para dejar los bolsos, usa el armario [[que está junto a la entrada|blue]]. Envíame la lista y compartiré los detalles con las personas [[que trabajan ese día|blue]].',
            reply: { teacher: 'El alumno responde en voz alta como si fuera Elena: confirma el viernes, dice quién viene y qué cámara usan, con al menos un «que» y un «quien».', self: 'Responde a Marta como si fueras Elena: di quién viene y qué cámara usan. Usa «que» y «quien» al menos una vez.' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Personas, cosas y lugares', coach: 'Describe sin decir el nombre. Describe without saying the name.',
      steps: [
        { title: 'Personas, cosas y lugares', blocks: [
          { kind: 'guide', text: { teacher: 'No hace falta usar todas las preguntas. Sigue lo que tu alumno quiere contar y repregunta con precisión: «¿Cuál de todos?».', self: 'Responde cada pregunta en voz alta, con frases completas. Si quieres, escribe tu respuesta.' } },
          { kind: 'talk', cards: [
            { q: 'Piensa en tu trabajo o tu clase. ¿Quién es la persona que más te ayuda? · Think of your work or your class. Who is the person who helps you most?', followUps: ['¿Qué hace exactamente?', '¿Cómo la conociste?'], phrases: ['Es la persona [[que|blue]]…', 'Mi compañera Ana, [[quien|teal]]…, …', 'Es alguien [[que|blue]] siempre…'], hint: 'Primero identifica a la persona por su función; después di su nombre y añade un dato entre comas.', example: 'Es la compañera que lleva los contratos. Se llama Teresa. Teresa, quien trabaja allí desde hace diez años, siempre tiene una respuesta.', next: 'Ahora, un juego de adivinanzas.', teacher: 'Si el alumno usa «quien» sin comas, repite su frase con «que».' },
            { q: 'Describe a una persona famosa sin decir su nombre. ¿Quién es? · Describe a famous person without saying their name. Who is it?', followUps: ['¿Qué más hizo?', '¿Por qué te interesa?'], phrases: ['Es una persona [[que|blue]]…', 'Es el cantante [[que|blue]]…', 'Es alguien [[que|blue]] nació en…'], hint: 'Da datos que la identifiquen poco a poco, del más general al más concreto.', example: 'Es una escritora que nació en Chile. Es la autora que escribió «La casa de los espíritus».', next: 'Ahora pensemos en lugares.' },
            { q: '¿Cuál es el lugar de tu ciudad que más te gusta? · Which place in your city do you like most?', followUps: ['¿Qué tiene de especial?', '¿Hay un lugar que no te gusta nada?'], phrases: ['Es el parque [[que|blue]] está…', 'Me gusta el café [[que|blue]] abre…', 'Es un lugar [[que|blue]] pocos conocen.'], hint: 'Identifica el lugar con «que»: dónde está, qué tiene, cuándo abre.', example: 'Me gusta un café que está cerca del río. Es el único café que abre hasta medianoche en mi barrio.', next: 'Hablemos de objetos importantes.' },
            { q: '¿Tienes un objeto que es especial para ti? · Do you have an object that is special to you?', followUps: ['¿Quién te lo dio?', '¿Dónde lo guardas?'], phrases: ['Es un reloj [[que|blue]] me regaló…', 'La foto [[que|blue]] tengo en…', 'Mi abuelo, [[quien|teal]]…, me lo dio.'], hint: 'Cuidado: «el reloj que me regaló», sin «lo».', example: 'Es un reloj que me regaló mi abuelo. Mi abuelo, quien era relojero, lo arregló muchas veces.', next: 'Ahora, una situación práctica.' },
            { q: 'Organizas una fiesta o una reunión. ¿Quién hace cada cosa? · You are organising a party or a meeting. Who does each thing?', followUps: ['¿Quién es la persona que siempre llega tarde?', '¿Y la que lo organiza todo?'], phrases: ['La persona [[que|blue]] trae la comida es…', 'Necesito a alguien [[que|blue]]…', 'Carlos, [[quien|teal]]…, se encarga de…'], hint: 'Reparte las tareas identificando a cada persona por lo que hace.', example: 'La persona que trae la comida es mi hermana. Carlos, quien tiene coche, se encarga de las bebidas. Necesito a alguien que ponga música.', next: 'Para terminar, una persona importante en tu vida.', teacher: 'Si el alumno usa una relativa con subjuntivo («alguien que ponga»), acéptala sin explicarla: es tema de otra clase.' },
            { q: '¿Hay una persona que cambió tu forma de ver algo? · Is there a person who changed the way you see something?', followUps: ['¿Cómo la conociste?', '¿Qué aprendiste de ella?'], phrases: ['Es una profesora [[que|blue]]…', 'Mi amigo Leo, [[quien|teal]]…, me enseñó…'], hint: 'Identifica a la persona y añade datos entre comas para contar su historia.', example: 'Es una profesora que tuve en el colegio. La profesora Ruiz, quien enseñaba historia, me enseñó a hacer preguntas.' },
          ], swap: { teacher: 'Al final, cambien los papeles: el profesor describe a alguien con «es la persona que…» y el alumno adivina.', self: 'Escribe tres adivinanzas con «Es la persona que…» o «Es el lugar que…» y compártelas con alguien.' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Un mensaje para organizar una visita', coach: 'Que no haya confusiones.',
      steps: [
        { title: 'Un mensaje para organizar una visita', blocks: [
          { kind: 'guide', text: { teacher: 'Puede escribir en clase o como tarea. Usen la revisión automática y después corrijan juntos lo que la revisión no ve, sobre todo las comas.', self: 'Escribe tu mensaje y toca «Revisar mi texto». Corrige lo que te indique y vuelve a revisarlo.' } },
          { kind: 'write', title: 'Organiza una visita', situation: 'Organizas una visita de tu grupo (de trabajo, de clase o de amigos) a un museo, una empresa o un centro cultural. Escribe al lugar para pedir lo que necesitas. (You are organising a visit for your group to a museum, a company or a cultural centre. Write to the place to ask for what you need.)', task: [
            'Pide hablar con la persona **que** se ocupa de algo concreto.',
            'Describe el espacio o el material que necesitas con **que**.',
            'Menciona a una persona ya conocida y añade un dato entre comas con **quien**.',
            'Termina con lo que vas a enviar o la pregunta que tienes.',
          ], starters: ['Buenos días:', 'Necesito hablar con la persona que…', 'Buscamos una sala que…', '…, quien…, nos recomendó…', 'Adjunto…'],
            words: ['coordinar', 'encargarse de', 'el responsable', 'la sala', 'el material', 'disponible', 'recomendar', 'adjuntar'],
            model: 'Buenos días: Necesito hablar con la persona [[que coordina los talleres de fotografía|blue]]. Somos seis participantes y buscamos la sala [[que tiene ventanas grandes|blue]]. Marta, [[quien nos mostró el centro ayer|teal]], recomendó ese espacio por la luz natural. También quiero confirmar el horario con Luis, [[quien prepara el material|teal]]. La compañera [[que organiza las exposiciones|blue]] participará un rato, pero no coordinará el taller. Adjunto la lista del grupo.',
            minWords: 70 },
        ] },
      ],
    },
    {
      id: 'cerrar', label: 'Cerrar', icon: '✓', mascot: '/brand/mascot/standing.webp',
      title: 'Lo esencial', coach: '¿Qué te llevas hoy? What do you take away today?',
      steps: [
        { title: 'Lo esencial', blocks: [
          { kind: 'recap', items: [
            { tone: 'blue', label: 'QUE · IDENTIFICA', formula: 'persona / cosa / lugar + que…', example: 'Busco a la persona que coordina los talleres.', caption: 'Sin comas: selecciona entre varios.', en: 'No commas: “que” picks one out from several people, things or places.' },
            { tone: 'teal', label: 'QUIEN · AÑADE', formula: 'persona identificada, quien…,', example: 'Luis, quien prepara el material, llega a las nueve.', caption: 'Entre comas: información extra.', en: 'Between commas: extra information about a person who is already identified.' },
            { tone: 'orange', label: 'EL ANTECEDENTE', formula: 'siempre presente', example: 'El café que está junto a la estación…', caption: 'Sin él, no sabemos de qué hablas.', en: 'The antecedent always appears; without it, the listener doesn’t know what you mean.' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'Tres claves', text: 'Para identificar, **que** (nunca «quien» sin comas). **Quien** solo para personas. **Quién**, con tilde, solo para preguntar.', en: 'To identify, use “que” (never “quien” without commas). “Quien” is only for people. “Quién”, with an accent, is only for questions.' },
        ] },
        { title: 'Desafío final · Final challenge', blocks: [
          { kind: 'choice', title: 'Cuatro frases, sin ayuda · Four sentences, no help', items: [
            { prompt: 'El restaurante ___ abrieron en mi calle es italiano.', options: ['quien', 'que', 'quién'], answer: 1, why: 'Para lugares, «que».' },
            { prompt: 'Busco a la chica ___ habla japonés.', options: ['que', 'quien', 'quién'], answer: 0, why: 'Identifica: «que», sin comas.' },
            { prompt: 'Te presento a Carmen, ___ dirige el equipo.', options: ['quién', 'quien', 'donde'], answer: 1, why: 'Dato extra entre comas sobre una persona con nombre.' },
            { prompt: '¿Sabes ___ tiene las llaves?', options: ['quién', 'quien', 'que'], answer: 0, why: 'Pregunta indirecta: «quién».' },
          ] },
        ] },
        { title: 'Tus errores y repaso · Your mistakes and review', blocks: [
          { kind: 'review' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «Mi hermano que vive en Lima» y «Mi hermano, quien vive en Lima»: ¿cuántos hermanos tengo en cada frase?' },
        ] },
      ],
    },
  ],
};
