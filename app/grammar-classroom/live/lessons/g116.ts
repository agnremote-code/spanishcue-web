import type { LiveLesson } from '../types';

/**
 * Lesson 116 · B2 · Precisión en el grupo nominal.
 * A neighbourhood association edits its newsletter: Sofía (editor), Nuria
 * (author), Laura (photographer) and Marta (in the portrait) run through
 * every section.
 */
export const lesson: LiveLesson = {
  id: 116,
  level: 'B2',
  title: 'Grupos nominales complejos',
  subtitle: 'Escribir con precisión: decidir cuándo omitir un nombre, controlar el alcance de una relativa y aclarar qué relación expresa «de».',
  legend: [
    { tone: 'blue', label: 'Elipsis · el nombre se recupera' },
    { tone: 'orange', label: 'Restrictivo · selecciona (sin comas)' },
    { tone: 'teal', label: 'Explicativo · comenta (entre comas)' },
    { tone: 'violet', label: 'Relación explícita · quién hace qué' },
  ],
  optionNotes: {
    'Selecciona': 'El dato restrictivo delimita el grupo: solo los que cumplen la condición. Va sin comas.',
    'Comenta': 'El dato explicativo se atribuye a todo el grupo ya identificado. Va entre comas.',
    'Repetir el nombre': 'Repetir es la mejor opción cuando detrás de la elipsis hay dos nombres posibles.',
    'Omitir el nombre': 'Omitir solo funciona si el contexto deja un único nombre posible.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Precisión en el grupo nominal', coach: 'Escribir breve está bien. Escribir ambiguo, no.',
      steps: [
        { title: 'Lo omitido debe recuperarse', blocks: [
          { kind: 'lead', text: 'Una asociación vecinal prepara su boletín. La autora envía esta nota: «Los informes breves están listos; revisen **los de las visitas**». En la carpeta hay **informes** y **resúmenes** de las visitas. ¿Qué hay que revisar?' },
          { kind: 'guide', text: { teacher: 'Antes de la teoría, tu alumno dice qué documentos hay que revisar y por qué no puede saberlo con seguridad.', self: 'Antes de leer la explicación, decide: ¿qué documentos hay que revisar? ¿Puedes estar seguro?' } },
          { kind: 'concept', tone: 'blue', label: 'ELIPSIS RECUPERABLE', question: '¿Puede el lector recuperar el nombre?',
            formula: ['artículo + (Ø) + complemento', 'condición: un solo nombre posible en el contexto'],
            meaning: 'La elipsis nominal es económica y elegante, pero depende del **contexto discursivo**. Funciona cuando el lector puede recuperar **un único** núcleo. Si hay **dos candidatos** con el mismo género y número, la economía produce confusión: conviene **repetir** o **especificar** el nombre.',
            examples: [
              { es: 'Prefiero los productos locales a [[los importados|blue]].' },
              { es: 'Elige la propuesta breve, no [[la extensa|blue]].' },
              { es: '¿Los informes nuevos o [[los de ayer|blue]]?' },
              { es: 'Hay informes y resúmenes. Revisen los [[informes de las visitas|violet]].' },
            ],
            note: 'La pregunta clave no es «¿es corto?», sino «¿hay un solo nombre posible detrás del artículo?».' },
          { kind: 'compare', title: 'La misma elipsis, dos contextos', columns: [
            { tone: 'blue', label: 'UN SOLO CANDIDATO', sentence: 'Hay imágenes actuales y antiguas. Prefiero [[las del año pasado|blue]].', idea: 'Solo «imágenes» encaja con «las»: la elipsis es clara.' },
            { tone: 'violet', label: 'DOS CANDIDATOS', sentence: 'Hay informes y resúmenes. Revisen [[los informes|violet]] de las visitas.', idea: '«Los de las visitas» podría ser informes o resúmenes: hay que repetir el nombre.' },
          ] },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'Se mencionan informes y resúmenes de las visitas. ¿Qué problema tiene «Revisen los de las visitas»?', options: ['La elipsis siempre es incorrecta.', 'Hay dos núcleos posibles y conviene decir cuál.', '«Los» solo puede referirse a personas.'], answer: 1, why: 'Los dos candidatos son masculinos plurales: el lector tiene que adivinar.' },
            { prompt: 'Tras mencionar imágenes actuales y antiguas, «Prefiero las del año pasado» es…', options: ['adecuada: «imágenes» se recupera sin dudas.', 'incorrecta: falta un sustantivo.', 'ambigua: puede referirse a informes.'], answer: 0, why: 'El único núcleo femenino plural es «imágenes».' },
          ] },
        ] },
        { title: 'Restringir o comentar', mascot: '/brand/mascot/studying.webp', coach: 'Dos comas cambian a quién incluyes.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'RESTRICTIVO · SIN COMAS', question: '¿Solo algunos?',
            formula: ['nombre + que + … (sin pausa)'],
            meaning: 'El modificador **delimita** el referente: de todo el grupo, solo hablamos de los que cumplen la condición. Si lo quitamos, cambia a quién se refiere la frase.',
            examples: [
              { es: 'Los voluntarios [[que trabajan los sábados|orange]] recibirán una copia.' },
              { es: 'Los vecinos [[que protestaron|orange]] pidieron una reunión.' },
              { es: 'Las propuestas [[que llegaron tarde|orange]] no se evaluarán.' },
            ] },
          { kind: 'concept', tone: 'teal', label: 'EXPLICATIVO · ENTRE COMAS', question: '¿Todos?',
            formula: ['nombre + , que + … + ,'],
            meaning: 'El modificador **añade un comentario** que se atribuye a **todo** el grupo ya identificado. Al hablar, hacemos una pausa; al escribir, ponemos comas. Si lo quitamos, el referente no cambia.',
            examples: [
              { es: 'Los voluntarios, [[que trabajan los sábados|teal]], recibirán una copia.' },
              { es: 'Los vecinos, [[que protestaron|teal]], pidieron una reunión.' },
              { es: 'Nuestra presidenta, [[que fundó la asociación|teal]], se jubila.' },
            ],
            note: 'Con un nombre propio o un referente único (mi madre, la presidenta) casi siempre hace falta la versión explicativa.' },
          { kind: 'tip', icon: '!', title: 'Quien, el cual: solo con comas', text: 'Sin preposición, **quien** y **el cual** solo aparecen en las explicativas: «Los voluntarios, **quienes** trabajan los sábados, …». En una restrictiva se usa **que**: «Los voluntarios **que** trabajan los sábados…», no «los voluntarios quienes trabajan».' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'Solo algunos voluntarios trabajan los sábados. ¿Qué frase selecciona a esos para recibir copias?', options: ['Los voluntarios, que trabajan los sábados, recibirán copias.', 'Los voluntarios recibirán copias, y todos trabajan los sábados.', 'Los voluntarios que trabajan los sábados recibirán copias.'], answer: 2, why: 'Sin comas, la relativa restringe el grupo.' },
            { prompt: '«Los vecinos, que protestaron, pidieron una reunión.» ¿Cuántos vecinos protestaron?', options: ['Todos los vecinos de los que hablamos.', 'Solo una parte.'], answer: 0, why: 'Entre comas, el dato se atribuye a todo el grupo.' },
          ] },
        ] },
        { title: 'Las relaciones de «de»', mascot: '/brand/mascot/speaking.webp', coach: '«De» une, pero no siempre dice cómo.', blocks: [
          { kind: 'concept', tone: 'violet', label: 'RELACIÓN CON «DE»', question: '¿Qué relación expresa «de»?',
            formula: ['nombre + de + persona → ¿autor? ¿tema? ¿dueño? ¿origen?', 'si el contexto no alcanza → formulación explícita'],
            meaning: '«De» puede expresar **autor**, **tema**, **posesión**, **origen** o **persona representada**. Muchas veces el contexto basta. Cuando no basta, elegimos una formulación más explícita: un participio con agente («realizado por»), una relativa o otra preposición.',
            examples: [
              { es: 'El retrato de Laura → [[el retrato realizado por Laura|violet]].' },
              { es: 'El retrato de Laura → [[el retrato en el que aparece Laura|violet]].' },
              { es: 'La crítica de la directora → [[la crítica que hizo la directora|violet]].' },
              { es: 'La crítica de la directora → [[la crítica a la directora|violet]].' },
            ] },
          { kind: 'table', title: 'Cómo hacer explícita la relación', head: ['Expresión ambigua', 'Relación', 'Versión precisa'], rows: [
            ['el retrato de Laura', 'autora', 'el retrato [[realizado por Laura|violet]] · el retrato [[que hizo Laura|violet]]'],
            ['el retrato de Laura', 'persona representada', 'el retrato [[en el que aparece Laura|violet]]'],
            ['el retrato de Laura', 'dueña', 'el retrato [[que tiene Laura|violet]] · el retrato [[que pertenece a Laura|violet]]'],
            ['la crítica de la directora', 'ella critica', 'la crítica [[que hizo la directora|violet]]'],
            ['la crítica de la directora', 'la critican', 'la crítica [[a la directora|violet]] · las críticas [[contra la directora|violet]]'],
            ['el libro de Cortázar', 'tema', 'el libro [[sobre Cortázar|violet]]'],
          ], note: 'Combinar dos relaciones también es posible: «el retrato **de Marta realizado por Laura**» (Marta aparece; Laura es la autora).' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'Laura fotografió a Marta. ¿Qué pie de foto identifica a la autora y a la persona retratada?', options: ['Retrato de Marta realizado por Laura.', 'Retrato de Laura.', 'Retrato realizado por Marta.'], answer: 0, why: 'Marta es la persona representada; «realizado por» marca a la autora.' },
            { prompt: 'La directora recibió muchas críticas. ¿Qué titular no es ambiguo?', options: ['Las críticas de la directora.', 'Las críticas a la directora.'], answer: 1, why: '«A la directora» marca que ella es quien recibe las críticas.' },
          ] },
        ] },
        { title: 'Cómo elegir', mascot: '/brand/mascot/seated.webp', coach: 'Lee como lo haría alguien que no sabe nada.', blocks: [
          { kind: 'decide', title: 'Antes de enviar tu texto, revisa cada grupo nominal', steps: [
            { q: '¿Detrás de la elipsis hay más de un nombre posible del mismo género y número?', yes: '**Repite o especifica** el nombre: «revisen [[los informes|violet]] de las visitas».', no: 'next' },
            { q: '¿El dato que añades se refiere a todo el grupo?', yes: 'Ponlo **entre comas**: «los voluntarios, [[que viven cerca|teal]], …».', no: 'next' },
            { q: '¿Hay un «de» que podría significar autor, tema o dueño?', yes: '**Hazlo explícito**: «el retrato [[realizado por Laura|violet]]».', no: 'Tu grupo nominal es claro. Si el dato selecciona, déjalo **sin comas**: «los voluntarios [[que viven cerca|orange]]».' },
          ] },
          { kind: 'tip', icon: '⚖', title: 'Precisión no es longitud', text: 'No añadas palabras por formalidad. Añádelas **solo donde el lector no puede recuperar la relación** con seguridad. Un texto preciso puede seguir siendo breve.' },
        ] },
        { title: 'Errores frecuentes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Estos errores cambian el mensaje.', blocks: [
          { kind: 'guide', text: { teacher: 'Tu alumno explica qué entendería un lector con la versión errónea antes de que muestres la corrección.', self: 'Lee cada frase y pregúntate qué entendería otra persona. Después toca para ver la corrección.' } },
          { kind: 'mistakes', title: '¿Dónde está el problema?', items: [
            { wrong: 'Hay informes y resúmenes. Revisen los de las visitas.', right: 'Hay informes y resúmenes. Revisen los informes de las visitas.', why: 'Dos candidatos posibles: hay que repetir el nombre.' },
            { wrong: 'Solo aprobaron diez. Los alumnos, que aprobaron, recibirán el diploma.', right: 'Solo aprobaron diez. Los alumnos que aprobaron recibirán el diploma.', why: 'Las comas incluyen a todos los alumnos. Para seleccionar, sin comas.' },
            { wrong: 'Mi madre que vive en Quito me llamó ayer.', right: 'Mi madre, que vive en Quito, me llamó ayer.', why: 'Solo hay una madre: el dato comenta y va entre comas.' },
            { wrong: 'Los voluntarios quienes trabajan los sábados recibirán copia.', right: 'Los voluntarios que trabajan los sábados recibirán copia.', why: 'En una restrictiva sin preposición se usa «que», no «quienes».' },
            { wrong: 'Publicamos el retrato de Laura. (Laura es la fotógrafa.)', right: 'Publicamos el retrato realizado por Laura.', why: '«De Laura» puede leerse como la persona retratada. Hay que marcar la autoría.' },
            { wrong: 'Prefiero los productos locales a importados.', right: 'Prefiero los productos locales a los importados.', why: 'En la elipsis, el artículo se mantiene: es la señal que permite recuperar el nombre.' },
          ] },
          { kind: 'teacher', text: 'Pide al alumno un ejemplo real de su trabajo o estudios donde un correo breve causó confusión, y que lo reescriba con precisión.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'Editar con precisión', coach: 'Toca las expresiones marcadas.',
      steps: [
        { title: 'Reunión de edición', blocks: [
          { kind: 'guide', text: { teacher: 'Lean el diálogo con papeles. Después, el alumno toca cada expresión y explica qué problema resuelve o qué decisión toma la editora.', self: 'Lee el diálogo. Después toca cada expresión marcada para descubrir por qué se usó.' } },
          { kind: 'explore', title: 'Antes de publicar el boletín', setting: 'Sofía, editora del boletín de la asociación, revisa la nota de Nuria, la autora.', lines: [
            { who: 'Sofía', text: 'Nuria, tu nota está muy bien, pero hay tres puntos que necesitan contexto.' },
            { who: 'Nuria', text: 'Dime, ¿cuáles?' },
            { who: 'Sofía', text: 'Escribes «revisen los de las visitas». En la carpeta hay informes y resúmenes. ¿Cuáles son?' },
            { who: 'Nuria', text: 'Los informes. Entonces mejor escribo «[[los informes de las visitas|violet]]».' },
            { who: 'Sofía', text: 'Perfecto. Segundo punto: «Los voluntarios [[que trabajan los sábados|orange]] recibirán una copia». ¿Todos trabajan los sábados?' },
            { who: 'Nuria', text: 'No, solo un grupo. Y solo ese grupo recibe la copia.' },
            { who: 'Sofía', text: 'Entonces está bien sin comas. Con comas, parecería que todos trabajan ese día.' },
            { who: 'Nuria', text: '¿Y el tercer punto?' },
            { who: 'Sofía', text: '«El retrato de Laura». ¿Laura sale en la foto o la hizo?' },
            { who: 'Nuria', text: 'La hizo. Laura, [[que es nuestra fotógrafa|teal]], retrató a Marta.' },
            { who: 'Sofía', text: 'Entonces pongamos «el retrato de Marta [[realizado por Laura|violet]]».' },
            { who: 'Nuria', text: 'Y las imágenes antiguas, [[las del año pasado|blue]], las dejamos fuera.' },
          ], notes: {
            'los informes de las visitas': 'Nuria **repite el nombre** porque «los de las visitas» tenía dos candidatos: informes y resúmenes.',
            'que trabajan los sábados': '**Restrictivo**: selecciona solo a los voluntarios del sábado. Sin comas.',
            'que es nuestra fotógrafa': '**Explicativo**: Laura ya está identificada; el dato solo comenta. Entre comas.',
            'realizado por Laura': 'El participio con «por» marca a la **autora**. «De Marta» queda para la persona retratada.',
            'las del año pasado': '**Elipsis clara**: acaban de mencionar «las imágenes antiguas», y no hay otro nombre femenino plural posible.',
          } },
          { kind: 'choice', title: '¿Entendiste?', items: [
            { prompt: '¿Quién recibe una copia del boletín?', options: ['Todos los voluntarios.', 'Solo los voluntarios que trabajan los sábados.', 'Solo Laura y Marta.'], answer: 1, why: '«Solo un grupo. Y solo ese grupo recibe la copia».' },
            { prompt: '¿Por qué Sofía no corrige «las del año pasado»?', options: ['Porque el nombre «imágenes» se recupera sin dudas.', 'Porque es una aposición.', 'Porque no le gusta repetir.'], answer: 0, why: 'Acaban de decir «las imágenes antiguas»: un solo candidato.' },
          ] },
        ] },
        { title: 'En el museo', mascot: '/brand/mascot/standing.webp', blocks: [
          { kind: 'explore', title: 'La sala tres', setting: 'Dos visitantes, Pablo y Elisa, leen las cartelas de una exposición.', lines: [
            { who: 'Pablo', text: 'Mira: «La colección de Ruiz». ¿Ruiz era el pintor?' },
            { who: 'Elisa', text: 'No, creo que era el coleccionista. Los cuadros son de varios artistas.' },
            { who: 'Pablo', text: 'Pues la cartela debería decir «[[la colección reunida por Ruiz|violet]]».' },
            { who: 'Elisa', text: 'Es verdad. Y aquí: «Los cuadros [[que se restauraron en 2020|orange]] están en esta sala».' },
            { who: 'Pablo', text: 'Entonces hay otros cuadros, sin restaurar, en otra sala.' },
            { who: 'Elisa', text: 'Exacto. Y mira la de al lado: «Los grabados, [[que proceden de México|teal]], son del siglo XIX».' },
            { who: 'Pablo', text: 'Ahí sí, todos vienen de México.' },
            { who: 'Elisa', text: '¿Vamos a ver los paisajes o [[los de la planta baja|blue]]?' },
            { who: 'Pablo', text: '¿Los paisajes de la planta baja o los retratos?' },
            { who: 'Elisa', text: 'Perdón: [[los retratos de la planta baja|violet]].' },
          ], notes: {
            'la colección reunida por Ruiz': 'Pablo propone hacer explícita la relación: Ruiz **reunió** la colección; no la pintó.',
            'que se restauraron en 2020': '**Restrictivo**: selecciona una parte de los cuadros. Pablo deduce que hay otros.',
            'que proceden de México': '**Explicativo**: el dato se aplica a todos los grabados. Entre comas.',
            'los de la planta baja': 'Elipsis **ambigua**: antes se habló de paisajes, y en la planta baja hay paisajes y retratos.',
            'los retratos de la planta baja': 'Elisa **repite el nombre** para resolver la duda de Pablo.',
          } },
          { kind: 'teacher', text: 'Pide al alumno que redacte la cartela de un objeto suyo (una foto, un regalo) dejando clara la relación con «de»: quién lo hizo, a quién representa, de quién es.' },
        ] },
        { title: '¿Selecciona o comenta?', blocks: [
          { kind: 'classify', title: 'Clasifica el dato marcado en negrita', categories: [
            { id: 'selecciona', label: 'Selecciona una parte', tone: 'orange' },
            { id: 'comenta', label: 'Comenta sobre todos', tone: 'teal' },
          ], items: [
            { text: 'Los voluntarios **que trabajan los sábados** recibirán una copia.', answer: 'selecciona', why: 'Sin comas: solo ese grupo.' },
            { text: 'Laura, **que es nuestra fotógrafa**, retrató a Marta.', answer: 'comenta', why: 'Laura ya está identificada: el dato comenta.' },
            { text: 'Los cuadros **que se restauraron en 2020** están en esta sala.', answer: 'selecciona', why: 'Hay otros cuadros sin restaurar.' },
            { text: 'Los grabados, **que proceden de México**, son del siglo XIX.', answer: 'comenta', why: 'Entre comas: todos vienen de México.' },
            { text: 'Las propuestas **que llegaron tarde** no se evaluarán.', answer: 'selecciona', why: 'Solo las tardías quedan fuera.' },
            { text: 'Nuestra presidenta, **que fundó la asociación**, se jubila.', answer: 'comenta', why: 'Referente único: el dato añade información.' },
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
            { context: 'Todos los empleados recibieron el correo; además, todos trabajan en remoto.', prompt: '¿Qué frase lo expresa?', options: ['Los empleados, que trabajan en remoto, recibieron el correo.', 'Los empleados que trabajan en remoto recibieron el correo.'], answer: 0, why: 'El dato se aplica a todos: entre comas.' },
            { context: 'Solo los socios con la cuota pagada pueden votar.', prompt: '¿Qué frase dice quién puede votar?', options: ['Los socios, que pagaron la cuota, pueden votar.', 'Los socios que pagaron la cuota pueden votar.'], answer: 1, why: 'Selecciona una parte: sin comas.' },
            { context: 'En el correo se mencionan contratos y presupuestos del proveedor.', prompt: '¿Qué instrucción es precisa?', options: ['Firma los del proveedor.', 'Firma los contratos del proveedor.'], answer: 1, why: '«Los del proveedor» tiene dos candidatos: hay que repetir el nombre.' },
            { context: 'Ya hablamos de dos propuestas: una breve y una extensa.', prompt: '¿Qué frase es correcta y económica?', options: ['Elige la breve, no la extensa.', 'Elige la breve, no extensa.', 'Elige la propuesta breve, no la propuesta extensa propuesta.'], answer: 0, why: 'Un solo candidato y el artículo se mantiene: elipsis clara.' },
            { context: 'García escribió un libro. El tema del libro es Neruda.', prompt: '¿Qué expresión no deja dudas?', options: ['El libro de Neruda.', 'El libro sobre Neruda escrito por García.', 'El libro de García de Neruda.'], answer: 1, why: '«Sobre» marca el tema y «escrito por» marca el autor.' },
            { context: 'Solo tienes una hermana.', prompt: '¿Qué frase está bien puntuada?', options: ['Mi hermana que es abogada me ayudó.', 'Mi hermana, que es abogada, me ayudó.'], answer: 1, why: 'Referente único: explicativa, entre comas.' },
          ] },
        ] },
        { title: 'Compara los significados', blocks: [
          { kind: 'choice', items: [
            { prompt: '«Los vecinos que protestaron pidieron una reunión.» ¿Qué sabemos?', options: ['Que algunos vecinos no protestaron.', 'Que todos protestaron.', 'Que ningún vecino protestó.'], answer: 0, why: 'La restrictiva delimita: hay vecinos que no protestaron.' },
            { prompt: '«La crítica a la directora» y «la crítica de la directora». ¿Qué diferencia hay?', options: ['En la primera, ella recibe la crítica; la segunda es ambigua.', 'Significan exactamente lo mismo.', 'En la primera, ella critica.'], answer: 0, why: '«A» marca a quien recibe; «de» puede indicar quién critica o a quién.' },
            { prompt: '«Revisa los nuevos.» ¿Cuándo es clara esta frase?', options: ['Cuando el contexto deja un solo nombre masculino plural posible.', 'Nunca.', 'Siempre.'], answer: 0, why: 'La elipsis depende de que el núcleo sea recuperable y único.' },
            { prompt: '«Los alumnos, que llegaron tarde, no entraron.» ¿Cuántos alumnos no entraron?', options: ['Todos.', 'Solo los que llegaron tarde; otros sí entraron.'], answer: 0, why: 'Entre comas: todos llegaron tarde y ninguno entró.' },
          ] },
        ] },
        { title: 'Completa la conversación', blocks: [
          { kind: 'chat-fill', title: 'Correcciones por chat', lines: [
            { who: 'Sofía', text: 'Nuria, en la carpeta hay carteles y folletos de la fiesta. Escribiste «imprime los de la fiesta».' },
            { who: 'Nuria', text: 'Tienes razón. Mejor: «imprime ___ de la fiesta».', options: ['los carteles', 'los', 'las'], answer: 0, why: 'Carteles y folletos son masculinos plurales: «los de la fiesta» tiene dos candidatos. Hay que nombrar el documento.' },
            { who: 'Sofía', text: 'Y los socios ___ ya pagaron reciben una entrada gratis, ¿no? Solo ellos.', options: ['que', ', que', 'quienes'], answer: 0, why: 'Solo ellos: restrictiva, sin coma y con «que».' },
            { who: 'Nuria', text: 'Sí. Y Laura, ___ hizo las fotos, quiere aparecer en los créditos.', options: ['que', 'la que', 'de que'], answer: 0, why: 'Explicativa entre comas sobre una persona identificada: «Laura, que hizo las fotos, …».' },
            { who: 'Sofía', text: 'Perfecto. En el pie pondremos «Fotografía ___ Laura Gómez».', options: ['de', 'realizada por', 'a'], answer: 1, why: '«Realizada por» marca la autoría sin ambigüedad.' },
            { who: 'Nuria', text: '¿Y las fotos antiguas? ¿Las del año pasado también?' },
            { who: 'Sofía', text: 'No, solo ___ de este año.', options: ['las', 'los', 'la'], answer: 0, why: 'Elipsis clara: «las (fotos) de este año». Acaban de mencionar fotos.' },
          ] },
        ] },
        { title: 'Encuentra el error', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Mi padre que trabaja en un hospital llega tarde.', ok: false, options: ['Mi padre, que trabaja en un hospital, llega tarde.', 'Mi padre, que trabaja en un hospital llega tarde.', 'Mi padre quien trabaja en un hospital llega tarde.'], answer: 0, why: 'Referente único: explicativa entre dos comas.' },
            { sentence: 'Prefiero los vinos locales a los importados.', ok: true, why: 'Correcta: elipsis con artículo y un solo candidato.' },
            { sentence: 'Los empleados quienes llegaron tarde perdieron el tren.', ok: false, options: ['Los empleados que llegaron tarde perdieron el tren.', 'Los empleados, quienes llegaron tarde perdieron el tren.', 'Los empleados los que llegaron tarde perdieron el tren.'], answer: 0, why: 'Restrictiva sin preposición: «que».' },
            { sentence: 'Publicamos el retrato de Marta realizado por Laura.', ok: true, why: 'Correcta: Marta aparece y Laura es la autora.' },
            { sentence: 'Elige la propuesta breve, no extensa.', ok: false, options: ['Elige la propuesta breve, no la extensa.', 'Elige la propuesta breve, no de extensa.', 'Elige la breve propuesta, no extensa.'], answer: 0, why: 'La elipsis conserva el artículo: «la extensa».' },
            { sentence: 'Solo cinco candidatos aprobaron. Los candidatos, que aprobaron, pasan a la entrevista.', ok: false, options: ['Solo cinco candidatos aprobaron. Los candidatos que aprobaron pasan a la entrevista.', 'Solo cinco candidatos aprobaron. Los candidatos, quienes aprobaron, pasan a la entrevista.', 'Solo cinco candidatos aprobaron. Los candidatos que, aprobaron, pasan a la entrevista.'], answer: 0, why: 'Solo una parte: restrictiva, sin comas.' },
          ] },
        ] },
        { title: 'Construye frases', blocks: [
          { kind: 'build', title: 'Ordena las palabras', items: [
            { tiles: ['Publicaremos', 'el', 'retrato', 'de', 'Marta', 'realizado', 'por', 'Laura'], accept: ['Publicaremos el retrato de Marta realizado por Laura'] },
            { tiles: ['Los', 'voluntarios', 'que', 'trabajan', 'los', 'sábados', 'recibirán', 'una', 'copia'], accept: ['Los voluntarios que trabajan los sábados recibirán una copia'] },
            { tiles: ['Revisen', 'los', 'informes', 'de', 'las', 'visitas'], accept: ['Revisen los informes de las visitas'] },
            { tiles: ['Prefiero', 'los', 'productos', 'locales', 'a', 'los', 'importados'], accept: ['Prefiero los productos locales a los importados'] },
          ] },
        ] },
        { title: 'Reescribe con precisión', blocks: [
          { kind: 'rewrite', items: [
            { prompt: 'Hay informes y resúmenes. «Revisen los de las visitas.» (Se refiere a los informes.)', instruction: 'Aclara la instrucción.', accept: ['Revisen los informes de las visitas'] },
            { prompt: 'Mi hermano que vive en Lisboa vendrá en Navidad. (Tengo un solo hermano.)', instruction: 'Corrige la puntuación.', accept: ['Mi hermano, que vive en Lisboa, vendrá en Navidad'] },
            { prompt: 'Laura hizo un retrato. En el retrato aparece Marta.', instruction: 'Escribe un pie de foto que empiece por «Retrato de Marta…».', accept: ['Retrato de Marta realizado por Laura', 'Retrato de Marta hecho por Laura', 'Retrato de Marta que hizo Laura', 'Retrato de Marta, realizado por Laura'] },
            { prompt: 'Muchos criticaron a la directora. «Las críticas de la directora fueron duras.»', instruction: 'Elimina la ambigüedad cambiando la preposición.', accept: ['Las críticas a la directora fueron duras', 'Las críticas contra la directora fueron duras'] },
            { prompt: 'Solo algunos socios votaron. Esos socios recibirán el acta.', instruction: 'Una sola frase con una relativa restrictiva.', accept: ['Los socios que votaron recibirán el acta'] },
          ] },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'La aclaración de la autora', coach: 'Primero escucha sin leer.',
      steps: [
        { title: 'La aclaración de la autora', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha para la idea general. En la segunda, el alumno anota las tres decisiones de la autora: qué nombre repite, qué relativa mantiene y cómo aclara el retrato.', self: 'Escucha una vez para la idea general. En la segunda, anota las tres decisiones de la autora. Puedes bajar la velocidad.' } },
          { kind: 'listen', title: 'Nuria responde a Sofía', channel: 'NOTA DE VOZ · BOLETÍN DE LA ASOCIACIÓN', src: '/audio/grammar-classroom/116.mp3',
            before: 'Nuria, la autora de la nota, responde a las preguntas de la editora. ¿Qué crees que va a cambiar y qué va a mantener?',
            gist: { prompt: '¿Qué busca Nuria con sus correcciones?', options: ['Un boletín breve en el que nadie tenga que adivinar a qué se refiere.', 'Un boletín más largo y formal.', 'Eliminar todas las expresiones breves.'], answer: 0, why: '«Mi objetivo es que el boletín sea breve, pero que nadie tenga que adivinar qué documento o persona estamos mencionando».' },
            details: [
              { prompt: '¿Qué quería decir con «los de las visitas»?', options: ['Los resúmenes.', 'Los informes.', 'Las imágenes.'], answer: 1, why: '«Quería decir los informes, no los resúmenes».' },
              { prompt: '¿Por qué va a repetir el nombre?', options: ['Porque los dos documentos aparecen en la carpeta.', 'Porque la editora lo exige siempre.', 'Porque el boletín es formal.'], answer: 0, why: '«Voy a repetir el nombre porque ambos aparecen en la carpeta».' },
              { prompt: '¿Por qué mantiene la relativa sin comas?', options: ['Porque no todos los voluntarios trabajan los sábados.', 'Porque todos trabajan los sábados.', 'Porque las comas son incorrectas.'], answer: 0, why: '«No todos tienen ese horario, así que prefiero mantener la relativa sin comas».' },
              { prompt: '¿Quién aparece en la foto?', options: ['Laura.', 'Marta.', 'La autora.'], answer: 1, why: '«La persona que aparece en la foto es Marta».' },
              { prompt: '¿Por qué acepta la elipsis «las del año pasado»?', options: ['Porque el nombre se recupera bien.', 'Porque son imágenes nuevas.', 'Porque no quiere repetir «retrato».'], answer: 0, why: '«En ese caso creo que el nombre se recupera bien».' },
            ],
            transcript: 'Hola, gracias por revisar la nota. Con «[[los de las visitas|blue]]» quería decir los informes, no los resúmenes. Voy a repetir el nombre porque ambos aparecen en la carpeta. Sobre las copias, solo deben recibirlas los voluntarios [[que trabajan los sábados|orange]]. No todos tienen ese horario, así que prefiero mantener la relativa sin comas. El retrato es obra de Laura, aunque la persona que aparece en la foto es Marta. Podemos escribir «el retrato de Marta [[realizado por Laura|violet]]». También hay unas imágenes antiguas, [[las del año pasado|blue]], que no quiero incluir. En ese caso creo que el nombre se recupera bien. Mi objetivo es que el boletín sea breve, pero que nadie tenga que adivinar qué documento o persona estamos mencionando.',
            reply: { teacher: 'El alumno responde como Sofía: confirma los tres cambios y propone uno más para otra frase del boletín, justificando la decisión.', self: 'Responde a Nuria como si fueras Sofía: confirma los tres cambios y explica, con tus palabras, por qué «las del año pasado» sí funciona.' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Malentendidos y precisión', coach: '¿Lo entendería alguien que no estaba allí?',
      steps: [
        { title: 'Malentendidos y precisión', blocks: [
          { kind: 'guide', text: { teacher: 'No hace falta usar todas las preguntas. Cuando el alumno use una elipsis o una relativa, interpreta mal a propósito para que tenga que precisar.', self: 'Responde cada pregunta en voz alta, como en una conversación. Después revisa: ¿alguna frase admite dos lecturas?' } },
          { kind: 'talk', cards: [
            { q: '¿Recuerdas un correo o un mensaje que entendiste mal por una expresión ambigua?', followUps: ['¿Qué consecuencias tuvo?', '¿Cómo se aclaró?', '¿Quién tenía la culpa: quien escribió o quien leyó?'], phrases: ['El mensaje decía «[[los de|blue]]…» y había dos…', 'Pensé que…, pero en realidad…', 'Habría bastado con…'], hint: 'Explica qué dos lecturas tenía la frase y cuál era la intención.', example: 'Mi jefa me escribió «manda los de marzo». Había facturas y presupuestos de marzo. Mandé los presupuestos, pero quería las facturas. Habría bastado con repetir el nombre.', next: 'Ahora pensemos en grupos de personas.', teacher: 'Si la anécdota es corta, tu alumno reescribe el mensaje original con precisión.' },
            { q: 'En tu trabajo o en tus estudios, ¿hay instrucciones que se aplican solo a una parte del grupo? ¿Cómo se comunican?', followUps: ['¿Alguna vez alguien se sintió incluido por error?', '¿Cómo lo dirías por escrito?', '¿Y si fuera para todos?'], phrases: ['Los empleados [[que tienen hijos|orange]]…', 'Los alumnos, [[que ya conocen el sistema|teal]],…', 'Solo los que…'], hint: 'Practica las dos versiones: sin comas (una parte) y con comas (todos).', example: 'En mi empresa, los empleados que trabajan desde casa reciben un teléfono de empresa. No todos: solo ese grupo. Si dijéramos «los empleados, que trabajan desde casa», parecería que todos lo hacen.', next: 'Hablemos de autoría.' },
            { q: 'Si tuvieras que poner un pie de foto a tu imagen favorita, ¿cómo lo escribirías para que se entienda quién la hizo y quién aparece?', followUps: ['¿Quién la sacó?', '¿Dónde y cuándo?', '¿Cómo lo dirías en menos de diez palabras?'], phrases: ['Foto de… [[tomada por|violet]]…', 'Retrato de… [[realizado por|violet]]…', 'Imagen [[en la que aparece|violet]]…'], hint: 'Separa la persona representada y la autoría: «de» + persona retratada, «por» + autor.', example: 'Mi foto favorita es una de mis abuelos en la playa. Escribiría: «Mis abuelos en Mar del Plata, 1975. Foto tomada por mi tío Julio».', next: 'Ahora, sobre la brevedad.' },
            { q: '¿Prefieres escribir mensajes breves o completos? ¿Depende de la persona?', followUps: ['¿Con quién puedes ser muy breve?', '¿Con quién necesitas más precisión?', '¿Qué te molesta en los mensajes de otros?'], phrases: ['Con mis compañeros puedo decir «[[el de siempre|blue]]»…', 'Con un cliente prefiero…', 'Repito el nombre cuando…'], hint: 'Relaciona la brevedad con el contexto compartido: cuanto más saben los dos, más puedes omitir.', example: 'Con mi pareja soy muy breve: «¿Compraste el de siempre?» y los dos sabemos qué es. Con clientes repito todo, porque no compartimos el mismo contexto.', next: 'Ahora piensa en los titulares.' },
            { q: 'Piensa en un titular o un cartel ambiguo que hayas visto. ¿Qué entendiste primero?', followUps: ['¿Era un error o un juego?', '¿Cómo lo reescribirías?', '¿Por qué crees que lo escribieron así?'], phrases: ['El titular decía «[[la crítica de|violet]]…»', 'Se podía entender como… o como…', 'Yo escribiría…'], hint: 'Si no recuerdas uno, inventa uno con «de»: «La foto de Laura», «El regalo de mi madre».', example: 'Vi un cartel: «Venta de ropa de niños usada». No sabía si los niños o la ropa estaban usados. Yo escribiría: «Venta de ropa usada para niños».', next: 'Para terminar, una reflexión.' },
            { q: '¿Crees que escribir con precisión es una cuestión de gramática o de respeto por el lector?', followUps: ['¿Has cambiado tu forma de escribir con los años?', '¿Qué consejo darías a alguien que escribe correos de trabajo?', '¿Cuándo la ambigüedad es útil?'], phrases: ['Para mí, es sobre todo…', 'Quien escribe debe…', 'A veces la ambigüedad sirve para…'], hint: 'Da una opinión y justifícala con un ejemplo de la clase o de tu vida.', example: 'Creo que es respeto. Si escribo «revisen los de las visitas» y hay dos posibilidades, obligo al lector a adivinar. Prefiero escribir dos palabras más y ahorrar tiempo a todos.' },
          ], swap: { teacher: 'Al final, cambien los papeles: el profesor dice frases con elipsis o con «de» ambiguas y el alumno pregunta «¿Cuáles?», «¿Todos?» o «¿Quién lo hizo?».', self: 'Busca en tus correos o mensajes una frase ambigua (tuya o de otra persona) y reescríbela con precisión.' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Una nota editorial', coach: 'Justifica cada cambio.',
      steps: [
        { title: 'Una nota editorial', blocks: [
          { kind: 'guide', text: { teacher: 'Puede escribir en clase o como tarea. Usen la revisión automática y después lean juntos cada justificación: ¿explica realmente por qué la versión original era ambigua?', self: 'Escribe tu nota y toca «Revisar mi texto». Después comprueba que cada cambio tenga una razón clara.' } },
          { kind: 'write', title: 'Correcciones para el boletín', situation: 'Eres editor del boletín de tu asociación, tu empresa o tu escuela. Recibes un texto con expresiones ambiguas y escribes a la autora qué corregir y por qué.', task: [
            'Señala una **elipsis ambigua** y propón repetir o especificar el nombre.',
            'Comenta una relativa: ¿debe ir **con comas o sin comas**? Explica qué cambia en el alcance.',
            'Aclara una **relación con «de»** (autor, tema, persona representada).',
            'Indica una **elipsis que sí funciona** y explica por qué la conservas.',
          ], starters: ['Conviene repetir…, porque…', 'Mantendría… sin comas: …', 'Con comas, el mensaje…', 'En el pie de foto escribiría…', 'Podemos conservar…, porque…'],
            words: ['referente', 'candidato', 'alcance', 'selecciona', 'se atribuye', 'realizado por', 'en el que aparece', 'se recupera'],
            model: 'Conviene repetir «[[informes de las visitas|violet]]» porque también hay resúmenes en la carpeta y «los de las visitas» admite dos referentes. Mantendría «los voluntarios [[que trabajan los sábados|orange]]» sin comas: solo ese grupo recibirá las copias. Con comas, el mensaje atribuiría el horario a todos los voluntarios. En el pie de foto escribiría «retrato de Marta [[realizado por Laura|violet]]» para distinguir a la persona representada de la autora. Podemos conservar «[[las del año pasado|blue]]» después de mencionar las imágenes, porque en ese contexto el nombre se recupera sin dificultad.',
            minWords: 100 },
        ] },
      ],
    },
    {
      id: 'cerrar', label: 'Cerrar', icon: '✓', mascot: '/brand/mascot/standing.webp',
      title: 'Lo esencial', coach: '¿Qué te llevas hoy?',
      steps: [
        { title: 'Lo esencial', blocks: [
          { kind: 'recap', items: [
            { tone: 'blue', label: 'ELIPSIS', formula: 'artículo + Ø + complemento', example: 'Prefiero las del año pasado.', caption: 'Solo si hay un único nombre posible.' },
            { tone: 'orange', label: 'RESTRICTIVO', formula: 'nombre + que… (sin comas)', example: 'Los voluntarios que trabajan los sábados…', caption: 'Selecciona una parte.' },
            { tone: 'teal', label: 'EXPLICATIVO', formula: 'nombre, que…,', example: 'Laura, que es nuestra fotógrafa, …', caption: 'Comenta sobre todos.' },
            { tone: 'violet', label: 'RELACIÓN EXPLÍCITA', formula: 'de → realizado por / sobre / a', example: 'el retrato de Marta realizado por Laura', caption: 'Cuando «de» no basta.' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'Tres preguntas antes de enviar', text: '¿Hay **un solo nombre** detrás de cada elipsis? ¿El dato se aplica a **todos** o a **una parte**? ¿Cada «de» deja clara la **relación**?' },
        ] },
        { title: 'Desafío final', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'choice', title: 'Cuatro frases, sin ayuda', items: [
            { prompt: 'Solo los estudiantes que entregaron el trabajo aprueban. ¿Qué frase lo dice?', options: ['Los estudiantes, que entregaron el trabajo, aprueban.', 'Los estudiantes que entregaron el trabajo aprueban.'], answer: 1, why: 'Restrictiva: selecciona una parte, sin comas.' },
            { prompt: 'Hay facturas y recibos de enero. ¿Qué instrucción es precisa?', options: ['Archiva los de enero.', 'Archiva los recibos de enero.'], answer: 1, why: 'Dos candidatos masculinos plurales: hay que nombrar el documento.' },
            { prompt: 'Goya pintó a la duquesa. ¿Qué frase es precisa?', options: ['El retrato de Goya.', 'El retrato de la duquesa pintado por Goya.', 'El retrato de la duquesa de Goya.'], answer: 1, why: '«De la duquesa» = persona retratada; «pintado por» = autor.' },
            { prompt: 'Solo tengo una abuela. ¿Qué frase es correcta?', options: ['Mi abuela que vive en Cádiz cumple noventa años.', 'Mi abuela, que vive en Cádiz, cumple noventa años.', 'Mi abuela quien vive en Cádiz cumple noventa años.'], answer: 1, why: 'Referente único: explicativa entre comas.' },
          ] },
        ] },
        { title: 'Tus errores y repaso', blocks: [
          { kind: 'review' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Cuándo repetir un nombre mejora la precisión?». Respuesta esperada: cuando el contexto deja más de un nombre posible detrás de la elipsis. Pide al alumno un ejemplo de su propia escritura.' },
        ] },
      ],
    },
  ],
};
