import type { LiveLesson } from '../types';

/**
 * Lesson 114 · B1 · Elipsis, aposición y modificador restrictivo.
 * One team (Elena, Daniel, Marta and two designers) prepares an exhibition;
 * the same folders and people run through every section.
 */
export const lesson: LiveLesson = {
  id: 114,
  level: 'B1',
  title: 'Decir más sin repetir',
  subtitle: 'Evitar repeticiones sin perder claridad, explicar quién es alguien y distinguir a una persona o cosa entre varias.',
  legend: [
    { tone: 'blue', label: 'Elipsis · el nombre se sobrentiende' },
    { tone: 'teal', label: 'Aposición · explica (entre comas)' },
    { tone: 'orange', label: 'Modificador · selecciona entre varios' },
  ],
  optionNotes: {
    'Explica': 'Explicar es añadir un dato sobre alguien que ya sabemos quién es. Va entre comas.',
    'Selecciona': 'Seleccionar es elegir uno entre varios. Sin ese dato, no sabríamos cuál.',
    'el tu': '«Tu» siempre va delante de un nombre. Sin nombre, se usa el posesivo largo: el tuyo.',
    'la Ana': 'Para recuperar un nombre con otra persona, hace falta «de»: la de Ana.',
    'la de que': 'Con «que» no se pone «de»: la que tiene los textos.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Decir más sin repetir', coach: 'Si todos saben de qué hablas, no hace falta repetirlo.',
      steps: [
        { title: 'El nombre que no se repite', blocks: [
          { kind: 'lead', text: 'El equipo de Elena prepara una exposición. Hay dos carpetas: la azul tiene las fotos y la verde, los textos. Elena escribe: «Necesito **la verde**, no **la de las fotos**». No dice «carpeta» ni una vez, pero todos la entienden.' },
          { kind: 'guide', text: { teacher: 'Pregunta: «¿Qué palabra falta en "la verde" y en "la de las fotos"? ¿Cómo lo sabes?». Tu alumno señala la mención anterior de «carpeta».', self: 'Lee la frase de Elena y busca la palabra que no aparece. ¿Dónde se dijo antes?' } },
          { kind: 'concept', tone: 'blue', label: 'ELIPSIS DEL NOMBRE', question: '¿Cómo evito repetir un nombre?',
            formula: ['artículo + adjetivo → la verde', 'artículo + de + … → la de Ana', 'artículo + que + … → la que tiene los textos'],
            meaning: 'Si el nombre ya apareció y el contexto deja claro cuál es, **no lo repetimos**. Quedan el **artículo** y el **complemento**, que funcionan como señales: concuerdan en género y número con el nombre que falta.',
            examples: [
              { es: 'Me gusta la mesa grande, pero prefiero [[la pequeña|blue]].' },
              { es: 'Mis fotos están aquí; [[las de Ana|blue]], en la otra carpeta.' },
              { es: 'Revisé los textos verdes y también [[los azules|blue]].' },
              { es: 'De las dos llaves, necesito [[la que abre el garaje|blue]].' },
            ],
            note: 'Con «de» y con «que» se usa el artículo, no «este» ni «ese»: «la de Ana», «la que abre el garaje».' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: '¿Qué frase evita una repetición y se entiende bien?', options: ['Prefiero mi mesa a la mesa de Ana.', 'Prefiero mi mesa a la de Ana.', 'Prefiero mi a la de Ana.'], answer: 1, why: '«La de Ana» recupera «mesa» sin repetirla.' },
            { prompt: 'Compré la falda negra y ___.', options: ['el azul', 'la azul', 'la de azul'], answer: 1, why: 'El artículo concuerda con el nombre que falta: la (falda) azul.' },
            { prompt: '¿Qué carpeta quieres? —___.', options: ['La que tiene los textos', 'La de que tiene los textos', 'Que tiene los textos'], answer: 0, why: 'Artículo + que: «la que tiene los textos».' },
          ] },
        ] },
        { title: 'El mío, la tuya', mascot: '/brand/mascot/studying.webp', coach: 'Sin nombre, el posesivo se alarga.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'POSESIVO SIN NOMBRE', question: '¿Y si el dueño soy yo?',
            formula: ['mi café → el mío', 'tu carpeta → la tuya', 'su idea → la suya', 'nuestros textos → los nuestros'],
            meaning: '«Mi», «tu», «su» solo van **delante de un nombre**. Cuando el nombre desaparece, usamos el **posesivo largo** con artículo: el mío, la tuya, los suyos.',
            examples: [
              { es: 'Tu café está frío; [[el mío|blue]], no.' },
              { es: 'Mi propuesta es corta y [[la tuya|blue]], muy completa.' },
              { es: 'Nuestros textos están listos. ¿Y [[los suyos|blue]]?' },
            ] },
          { kind: 'table', title: 'Posesivos con artículo', head: ['Con nombre', 'Sin nombre (masc.)', 'Sin nombre (fem.)'], rows: [
            ['mi / mis', '[[el mío|blue]] / [[los míos|blue]]', '[[la mía|blue]] / [[las mías|blue]]'],
            ['tu / tus', '[[el tuyo|blue]] / [[los tuyos|blue]]', '[[la tuya|blue]] / [[las tuyas|blue]]'],
            ['su / sus', '[[el suyo|blue]] / [[los suyos|blue]]', '[[la suya|blue]] / [[las suyas|blue]]'],
            ['nuestro/a/os/as', '[[el nuestro|blue]] / [[los nuestros|blue]]', '[[la nuestra|blue]] / [[las nuestras|blue]]'],
            ['vuestro/a/os/as', '[[el vuestro|blue]] / [[los vuestros|blue]]', '[[la vuestra|blue]] / [[las vuestras|blue]]'],
          ], note: '«Vuestro» se usa en España con «vosotros». En América se dice «el de ustedes» o «el suyo».' },
          { kind: 'tip', icon: '!', title: '«Suyo» puede ser de muchos', text: '«El suyo» puede ser de él, de ella, de usted o de ellos. Si hay duda, usa **de + persona**: «el de Marta», «el de ustedes».' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'Mi coche es rojo y ___ es azul.', options: ['el tu', 'el tuyo', 'la tuya'], answer: 1, why: 'Sin nombre: posesivo largo con artículo masculino (coche).' },
            { prompt: 'Hay dos informes, de Marta y de Daniel. ¿Qué frase no deja dudas?', options: ['Leí el suyo.', 'Leí el de Marta.'], answer: 1, why: '«El suyo» podría ser de cualquiera de los dos; «el de Marta» es claro.' },
          ] },
        ] },
        { title: 'La aposición explica', mascot: '/brand/mascot/speaking.webp', coach: 'Ya sabemos quién es. Solo añadimos un dato.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'APOSICIÓN EXPLICATIVA', question: '¿Quién es esa persona?',
            formula: ['nombre + , + explicación + , + resto'],
            meaning: 'La aposición añade un **dato extra** sobre alguien o algo que **ya está identificado**. Si la quitamos, seguimos sabiendo de quién hablamos. Al escribir va **entre dos comas**; al hablar, hacemos una pequeña pausa.',
            examples: [
              { es: 'Marta, [[la fotógrafa del equipo|teal]], eligió las imágenes.' },
              { es: 'Laura, [[la directora|teal]], llamó ayer.' },
              { es: 'Mañana viene Juan, [[mi hermano|teal]].' },
              { es: 'Visitamos Cuenca, [[una ciudad preciosa|teal]], en mayo.' },
            ],
            note: 'Si la aposición está al final de la frase, basta una coma: «Mañana viene Juan, mi hermano».' },
          { kind: 'tip', icon: '✂', title: 'La prueba de quitar', text: 'Tapa lo que está entre comas. Si todavía sabes de quién se habla, es una explicación: «Marta, la fotógrafa, eligió las imágenes» → «Marta eligió las imágenes». Sigue siendo la misma Marta.' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'Clara es la única directora del centro. ¿Qué frase está bien escrita?', options: ['Clara, la directora, abrió la reunión.', 'Clara la directora abrió la reunión.', 'Clara que la directora abrió la reunión.'], answer: 0, why: 'La aposición explica quién es Clara y va entre dos comas.' },
            { prompt: '«Pedro, mi vecino, es piloto.» Si quitas «mi vecino», ¿sabes de quién hablas?', options: ['Sí, de Pedro.', 'No, no se sabe.'], answer: 0, why: 'Pedro ya está identificado: «mi vecino» solo explica.' },
          ] },
        ] },
        { title: 'El modificador selecciona', mascot: '/autoestudio/mascot/noting.webp', coach: 'Hay varios. Este dato dice cuál.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'MODIFICADOR RESTRICTIVO', question: '¿Cuál de todos?',
            formula: ['nombre + que + …', 'nombre + de + …', 'nombre + adjetivo'],
            meaning: 'Cuando hay **varios** del mismo tipo, el modificador **elige uno** (o una parte). **No lleva comas**. Si lo quitamos, ya no sabemos exactamente cuál.',
            examples: [
              { es: 'Habla con el diseñador [[que preparó el cartel|orange]].' },
              { es: 'Los alumnos [[que llegaron temprano|orange]] tienen sitio.' },
              { es: 'Vamos al café [[de la esquina|orange]].' },
              { es: 'Necesito la llave [[que abre el garaje|orange]].' },
            ],
            note: 'Hay dos diseñadores: «el diseñador **que preparó el cartel**» dice de cuál hablamos.' },
          { kind: 'compare', title: 'Con comas o sin comas: cambia el significado', columns: [
            { tone: 'teal', label: 'CON COMAS · TODOS', sentence: 'Los estudiantes, [[que trabajaban|teal]], salieron.', idea: 'Salieron **todos** los estudiantes. El dato explica: todos trabajaban.' },
            { tone: 'orange', label: 'SIN COMAS · UNA PARTE', sentence: 'Los estudiantes [[que trabajaban|orange]] salieron.', idea: 'Salieron **solo** los que trabajaban. Los otros se quedaron.' },
          ] },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'De diez estudiantes, solo cuatro terminaron. ¿Qué frase lo dice?', options: ['Los estudiantes, que terminaron, pueden salir.', 'Los estudiantes que terminaron pueden salir.'], answer: 1, why: 'Sin comas: el dato selecciona una parte del grupo.' },
            { prompt: 'Tienes dos hermanos. ¿Qué frase es correcta?', options: ['Mi hermano, que vive en Lima, es médico.', 'Mi hermano que vive en Lima es médico.'], answer: 1, why: 'Con dos hermanos, «que vive en Lima» dice cuál: selecciona, sin comas.' },
          ] },
        ] },
        { title: 'Cómo elegir', mascot: '/brand/mascot/seated.webp', coach: 'Piensa en quien lee: ¿sabe de qué hablas?', blocks: [
          { kind: 'decide', title: 'Antes de escribir tu mensaje, responde', steps: [
            { q: '¿El nombre ya apareció y no hay duda de cuál es?', yes: 'Puedes omitirlo: «[[la verde|blue]]», «[[la de Ana|blue]]», «[[el mío|blue]]».', no: 'next' },
            { q: '¿Hay varios y necesitas decir cuál?', yes: 'Usa un **modificador sin comas**: «el diseñador [[que preparó el cartel|orange]]».', no: 'next' },
            { q: '¿Ya sabemos quién es y quieres añadir un dato?', yes: 'Usa una **aposición entre comas**: «Marta, [[la fotógrafa|teal]], ya eligió las fotos».', no: 'Repite el nombre: a veces repetir es la opción más clara.' },
          ] },
          { kind: 'tip', icon: '⚠', title: 'Omitir no siempre ayuda', text: 'Si en el mensaje hay **dos nombres posibles** del mismo género, la elipsis confunde: «Tengo el informe y el contrato de Marta. Te mando **el de** Daniel». ¿El informe o el contrato? Aquí es mejor repetir el nombre: «Te mando **el informe** de Daniel».' },
        ] },
        { title: 'Errores frecuentes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Estos errores son muy comunes.', blocks: [
          { kind: 'guide', text: { teacher: 'Tu alumno busca el error y explica qué tipo de problema es: concordancia, posesivo, comas o «de».', self: 'Lee cada frase, busca el error y después toca para ver la corrección.' } },
          { kind: 'mistakes', title: '¿Dónde está el error?', items: [
            { wrong: 'Mi coche es rojo y el tu es azul.', right: 'Mi coche es rojo y el tuyo es azul.', why: 'Sin nombre, el posesivo es largo: el tuyo.' },
            { wrong: 'Prefiero mi mesa a la Ana.', right: 'Prefiero mi mesa a la de Ana.', why: 'Para indicar de quién es, hace falta «de».' },
            { wrong: 'Compré la falda negra y el azul.', right: 'Compré la falda negra y la azul.', why: 'El artículo concuerda con el nombre que falta: falda, femenino.' },
            { wrong: 'Necesito la de que tiene los textos.', right: 'Necesito la que tiene los textos.', why: 'Con «que» no se pone «de».' },
            { wrong: 'Clara la directora abrió la reunión.', right: 'Clara, la directora, abrió la reunión.', why: 'La aposición explicativa va entre dos comas.' },
            { wrong: 'Tengo dos hermanos. Mi hermano, que vive en Lima, es médico.', right: 'Tengo dos hermanos. Mi hermano que vive en Lima es médico.', why: 'Hay dos: el dato selecciona a uno y no lleva comas.' },
          ] },
          { kind: 'teacher', text: 'Pide al alumno que describa a dos personas de su familia o de su trabajo con el mismo rol (dos primos, dos jefes) y que diga de cuál habla sin repetir el nombre.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'Mensajes claros y breves', coach: 'Toca las expresiones marcadas.',
      steps: [
        { title: 'Dos carpetas y dos diseñadores', blocks: [
          { kind: 'guide', text: { teacher: 'Lean el diálogo con papeles. Después, el alumno toca cada expresión y dice qué nombre falta o qué función tiene el dato.', self: 'Lee el diálogo. Después toca cada expresión marcada para descubrir por qué se usó.' } },
          { kind: 'explore', title: 'Antes de imprimir', setting: 'Elena coordina una exposición. Daniel, su compañero, revisa los archivos en la oficina.', lines: [
            { who: 'Elena', text: 'Daniel, ¿ya revisaste la carpeta de los textos?' },
            { who: 'Daniel', text: 'Sí, ya revisé la azul y está todo bien.' },
            { who: 'Elena', text: 'No, esa no. Necesito [[la verde|blue]], no [[la de las fotos|blue]].' },
            { who: 'Daniel', text: '¡Perdón! Recordaba una instrucción antigua. Ya abro la otra.' },
            { who: 'Elena', text: 'Gracias. Y las fotos ya están listas: las eligió Marta, [[la fotógrafa del equipo|teal]].' },
            { who: 'Daniel', text: 'Perfecto. ¿Y el cartel? ¿Hablo con Raúl o con Sergio?' },
            { who: 'Elena', text: 'Con el diseñador [[que preparó el cartel|orange]]. Creo que fue Raúl.' },
            { who: 'Daniel', text: 'Sí, Raúl hizo el cartel y Sergio, el catálogo.' },
            { who: 'Elena', text: 'Entonces habla con Raúl. Su versión es mejor que la anterior.' },
            { who: 'Daniel', text: '¿Uso tu nota o [[la mía|blue]] para los títulos?' },
            { who: 'Elena', text: '[[La del lunes|blue]]. Es la más reciente.' },
          ], notes: {
            'la verde': 'Se omite **carpeta**: ya se habló de ella y solo hay dos. El artículo femenino y el adjetivo bastan.',
            'la de las fotos': 'Otra vez se omite **carpeta**. «De las fotos» dice cuál, sin repetir el nombre.',
            'la fotógrafa del equipo': '**Aposición**: todos saben quién es Marta. El dato solo **explica** su función. Va después de una coma.',
            'que preparó el cartel': '**Modificador restrictivo**: hay dos diseñadores, y este dato **selecciona** a uno. Sin comas.',
            'la mía': 'Se omite **nota**. Sin nombre, el posesivo es largo: la mía.',
            'La del lunes': 'Se omite **nota**. «Del lunes» identifica cuál de las notas.',
          } },
          { kind: 'choice', title: '¿Entendiste?', items: [
            { prompt: '¿Qué carpeta tiene los textos?', options: ['La azul.', 'La verde.', 'La de Marta.'], answer: 1, why: '«Necesito la verde, no la de las fotos»: la azul tiene las fotos.' },
            { prompt: '¿Por qué Elena dice «el diseñador que preparó el cartel» sin comas?', options: ['Porque hay dos diseñadores y el dato dice cuál.', 'Porque solo hay un diseñador.', 'Porque es una pregunta.'], answer: 0, why: 'El modificador restrictivo elige uno entre Raúl y Sergio.' },
          ] },
        ] },
        { title: 'Una foto de familia', mascot: '/brand/mascot/standing.webp', blocks: [
          { kind: 'explore', title: '¿Quién es quién?', setting: 'Lucía le enseña a su amigo Iván una foto de la boda de su prima.', lines: [
            { who: 'Lucía', text: 'Mira, esta es la foto de la boda de mi prima.' },
            { who: 'Iván', text: '¿Cuál de todas es tu prima?' },
            { who: 'Lucía', text: 'La [[del vestido largo|orange]], en el centro.' },
            { who: 'Iván', text: '¿Y el señor de gris?' },
            { who: 'Lucía', text: 'Es Andrés, [[su padre|teal]]. Y ese es mi tío Jorge.' },
            { who: 'Iván', text: 'Tienes muchos tíos, ¿no?' },
            { who: 'Lucía', text: 'Sí, cuatro. El tío [[que vive en Chile|orange]] no pudo venir.' },
            { who: 'Iván', text: '¿Y tus padres?' },
            { who: 'Iván', text: 'Mi padre nunca sale bien en las fotos.' },
            { who: 'Lucía', text: '[[El mío|blue]] tampoco. Mira, está ahí, con los ojos cerrados.' },
            { who: 'Iván', text: 'Ja, ja. ¿Y tu hermano?' },
            { who: 'Lucía', text: 'No está en esta foto. Sale en [[la de la fiesta|blue]].' },
          ], notes: {
            'del vestido largo': '**Selecciona**: hay muchas mujeres en la foto, y el dato dice cuál es la prima. Se omite también «chica»: «la (chica) del vestido largo».',
            'su padre': '**Aposición**: Andrés ya tiene nombre. «Su padre» explica quién es.',
            'que vive en Chile': '**Selecciona**: Lucía tiene cuatro tíos. Sin comas, el dato dice cuál no vino.',
            'El mío': 'Se omite **padre**: Iván acaba de decir «mi padre». Sin nombre, «mi» se convierte en «el mío».',
            'la de la fiesta': 'Se omite **foto**: «la (foto) de la fiesta».',
          } },
          { kind: 'teacher', text: 'Pide al alumno que describa una foto real de su teléfono con al menos una aposición y un modificador que seleccione.' },
        ] },
        { title: '¿Explica o selecciona?', blocks: [
          { kind: 'classify', title: 'Clasifica el dato marcado en negrita', categories: [
            { id: 'explica', label: 'Explica (con comas)', tone: 'teal' },
            { id: 'selecciona', label: 'Selecciona (sin comas)', tone: 'orange' },
          ], items: [
            { text: 'Marta, **la fotógrafa del equipo**, eligió las imágenes.', answer: 'explica', why: 'Marta ya está identificada; el dato añade su función.' },
            { text: 'Habla con el diseñador **que preparó el cartel**.', answer: 'selecciona', why: 'Hay dos diseñadores: el dato dice cuál.' },
            { text: 'Es Andrés, **su padre**.', answer: 'explica', why: 'Andrés ya tiene nombre; el dato explica.' },
            { text: 'El tío **que vive en Chile** no vino.', answer: 'selecciona', why: 'Hay cuatro tíos: el dato elige uno.' },
            { text: 'Es la chica **del vestido largo**.', answer: 'selecciona', why: 'Entre muchas personas, el dato dice cuál.' },
            { text: 'Mañana viene Juan, **mi hermano**.', answer: 'explica', why: 'Juan ya está identificado: la coma y el dato extra lo muestran.' },
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
            { context: 'Ya hablamos de dos propuestas.', prompt: 'Prefiero la propuesta de Ana a ___.', options: ['la propuesta de Luis', 'la de Luis', 'de Luis'], answer: 1, why: '«La de Luis» recupera «propuesta» sin repetirla.' },
            { context: 'Hablas de dos camisas, una blanca y una negra.', prompt: 'Me llevo la blanca; ___ no me queda bien.', options: ['el negro', 'la negra', 'lo negro'], answer: 1, why: 'Concuerda con «camisa»: la negra.' },
            { context: 'Tu amigo y tú tienen bicicleta.', prompt: 'Mi bici está rota. ¿Me prestas ___?', options: ['tu', 'la tuya', 'el tuyo'], answer: 1, why: 'Sin nombre: posesivo largo femenino (bici).' },
            { context: 'En la oficina hay tres impresoras.', prompt: '¿Qué instrucción es correcta?', options: ['Usa la impresora, que está junto a la ventana.', 'Usa la impresora que está junto a la ventana.'], answer: 1, why: 'Hay tres: el dato selecciona una y no lleva comas.' },
            { context: 'Solo hay una directora en la escuela: Laura.', prompt: '¿Qué frase está bien puntuada?', options: ['Laura la directora llamó ayer.', 'Laura, la directora, llamó ayer.', 'Laura, la directora llamó ayer.'], answer: 1, why: 'La aposición explicativa va entre dos comas.' },
            { context: 'Hay dos informes: el de Marta y el de Daniel.', prompt: '¿Qué pregunta es más clara?', options: ['¿Leíste el suyo?', '¿Leíste el de Marta?'], answer: 1, why: '«El suyo» puede referirse a los dos; «el de Marta» no deja dudas.' },
          ] },
        ] },
        { title: 'Compara los significados', blocks: [
          { kind: 'choice', items: [
            { prompt: '¿Qué frase dice que salieron **todos** los estudiantes?', options: ['Los estudiantes, que estaban cansados, salieron.', 'Los estudiantes que estaban cansados salieron.'], answer: 0, why: 'Con comas, el dato explica: todos estaban cansados y todos salieron.' },
            { prompt: '«Mi prima que vive en Madrid viene mañana.» ¿Qué sabemos?', options: ['Que tengo una sola prima.', 'Que tengo más de una prima.'], answer: 1, why: 'Sin comas, el dato selecciona: hay otras primas.' },
            { prompt: '«Mi madre, que es profesora, viene mañana.» ¿Por qué hay comas?', options: ['Porque solo tengo una madre: el dato explica.', 'Porque tengo varias madres.', 'Porque la frase es una pregunta.'], answer: 0, why: 'Una persona única: el dato añade información y va entre comas.' },
            { prompt: '«Revisé tu informe y el mío.» ¿Cuántos informes revisé?', options: ['Uno.', 'Dos.', 'No se sabe.'], answer: 1, why: 'El tuyo y el mío: dos informes. «El mío» = mi informe.' },
          ] },
        ] },
        { title: 'Completa la conversación', blocks: [
          { kind: 'chat-fill', title: 'En la oficina', lines: [
            { who: 'Sergio', text: 'Raúl, ¿tienes los carteles?' },
            { who: 'Raúl', text: 'Tengo dos versiones. ¿Quieres la grande o ___?', options: ['la pequeña', 'la pequeño', 'pequeña'], answer: 0, why: 'Artículo + adjetivo, en femenino: la (versión) pequeña.' },
            { who: 'Sergio', text: 'La grande. ¿Y el texto del cartel es el de Elena o ___?', options: ['tu', 'el tuyo', 'la tuya'], answer: 1, why: 'Se omite «texto» (masculino): el tuyo.' },
            { who: 'Raúl', text: 'El de Elena. Lo revisó Marta, ___.', options: ['la fotógrafa', 'que la fotógrafa', 'de la fotógrafa'], answer: 0, why: 'Aposición: explica quién es Marta.' },
            { who: 'Sergio', text: 'Hay dos impresoras. ¿Uso la ___ tiene papel grande?', options: ['de que', 'que', 'de'], answer: 1, why: 'Artículo + que: «la que tiene papel grande».' },
            { who: 'Raúl', text: 'Sí, la del segundo piso. Pero no uses ___ de la entrada: está rota.', options: ['el', 'la', 'lo'], answer: 1, why: 'Se omite «impresora», femenino: la de la entrada.' },
          ] },
        ] },
        { title: 'Encuentra el error', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Tu idea es buena, pero la mía es más barata.', ok: true, why: 'Correcta: «la mía» recupera «idea».' },
            { sentence: 'Mis llaves están aquí. ¿Dónde están las tus?', ok: false, options: ['¿Dónde están las tuyas?', '¿Dónde están tus?', '¿Dónde están los tuyos?'], answer: 0, why: 'Sin nombre: posesivo largo, femenino plural.' },
            { sentence: 'Pedro mi vecino es piloto.', ok: false, options: ['Pedro, mi vecino, es piloto.', 'Pedro, mi vecino es piloto.', 'Pedro que mi vecino es piloto.'], answer: 0, why: 'La aposición va entre dos comas.' },
            { sentence: 'De los dos vestidos, me gusta más el que es rojo.', ok: true, why: 'Correcta: «el que es rojo» selecciona uno. También es posible «el rojo».' },
            { sentence: 'Me gusta tu casa, pero prefiero la de mis padres casa.', ok: false, options: ['Me gusta tu casa, pero prefiero la de mis padres.', 'Me gusta tu casa, pero prefiero de mis padres.', 'Me gusta tu casa, pero prefiero la mis padres.'], answer: 0, why: 'Si omites el nombre, no lo pongas al final.' },
            { sentence: 'Los alumnos, que llegaron tarde, no entraron; los otros, sí.', ok: false, options: ['Los alumnos que llegaron tarde no entraron; los otros, sí.', 'Los alumnos que, llegaron tarde, no entraron; los otros, sí.', 'Los alumnos, que llegaron tarde no entraron; los otros, sí.'], answer: 0, why: '«Los otros, sí» muestra que solo una parte llegó tarde: el dato selecciona, sin comas.' },
          ] },
        ] },
        { title: 'Construye frases', blocks: [
          { kind: 'build', title: 'Ordena las palabras', items: [
            { tiles: ['Prefiero', 'mi', 'propuesta', 'a', 'la', 'de', 'Ana'], accept: ['Prefiero mi propuesta a la de Ana'] },
            { tiles: ['Habla', 'con', 'el', 'diseñador', 'que', 'hizo', 'el', 'cartel'], accept: ['Habla con el diseñador que hizo el cartel'] },
            { tiles: ['Tu', 'café', 'está', 'frío', 'y', 'el', 'mío', 'también'], accept: ['Tu café está frío y el mío también', 'El mío está frío y tu café también'] },
            { tiles: ['Necesito', 'la', 'llave', 'que', 'abre', 'el', 'garaje'], accept: ['Necesito la llave que abre el garaje'] },
          ] },
        ] },
        { title: 'Escribe la misma idea de otra forma', blocks: [
          { kind: 'rewrite', items: [
            { prompt: 'Revisé los textos de la carpeta verde y los textos de la carpeta azul.', instruction: 'Evita repetir «textos» y «carpeta».', accept: ['Revisé los textos de la carpeta verde y los de la azul', 'Revisé los de la carpeta verde y los de la azul'] },
            { prompt: 'Clara es la directora. Clara abrió la reunión.', instruction: 'Haz una sola frase con una aposición.', accept: ['Clara, la directora, abrió la reunión', 'Clara la directora abrió la reunión'] },
            { prompt: 'Hay dos diseñadores. Uno preparó el catálogo. Habla con ese diseñador.', instruction: 'Una sola frase que empieza con «Habla con el diseñador…».', accept: ['Habla con el diseñador que preparó el catálogo'] },
            { prompt: 'Mi teléfono es nuevo, pero tu teléfono es más rápido.', instruction: 'No repitas «teléfono» en la segunda parte.', accept: ['Mi teléfono es nuevo, pero el tuyo es más rápido'] },
            { prompt: 'Me gusta la mesa grande, pero voy a comprar la mesa pequeña.', instruction: 'Evita repetir «mesa».', accept: ['Me gusta la mesa grande, pero voy a comprar la pequeña'] },
          ] },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Un mensaje más claro', coach: 'Primero escucha sin leer.',
      steps: [
        { title: 'Un mensaje más claro', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha para la idea general. En la segunda, el alumno anota qué nombres se omiten (carpeta, textos, nota) y cómo se identifica a cada persona.', self: 'Escucha una vez para la idea general. En la segunda, fíjate en qué palabras no se repiten y en cómo se habla de cada persona. Puedes bajar la velocidad.' } },
          { kind: 'listen', title: 'Daniel responde a Elena', channel: 'NOTA DE VOZ · PARA ELENA', src: '/audio/grammar-classroom/114.mp3',
            before: 'Daniel ya revisó las carpetas y le deja una nota de voz a Elena antes de imprimir. ¿Qué crees que le cuenta?',
            gist: { prompt: '¿Para qué envía Daniel el mensaje?', options: ['Para informar de la revisión y confirmar detalles antes de imprimir.', 'Para decir que no encontró las carpetas.', 'Para presentar a un diseñador nuevo.'], answer: 0, why: 'Cuenta qué revisó, pregunta con qué diseñador hablar y propone cambiar el título antes de imprimir.' },
            details: [
              { prompt: '¿Qué textos están completos?', options: ['Los de la carpeta verde.', 'Los de la carpeta azul.', 'Los de Marta.'], answer: 0, why: '«Los de la verde están completos».' },
              { prompt: '¿Qué son los textos de la carpeta azul?', options: ['Versiones antiguas.', 'Las versiones finales.', 'Textos de Marta.'], answer: 0, why: '«Los de la azul son versiones antiguas».' },
              { prompt: '¿Quién eligió las imágenes finales?', options: ['Elena.', 'Marta, la fotógrafa.', 'El diseñador del cartel.'], answer: 1, why: '«Marta, nuestra fotógrafa, ya eligió las imágenes finales».' },
              { prompt: '¿Por qué pregunta con qué diseñador debe hablar?', options: ['Porque los dos están trabajando hoy.', 'Porque no conoce a ninguno.', 'Porque el cartel está terminado.'], answer: 0, why: '«Prefiero confirmarlo porque ambos están trabajando hoy».' },
              { prompt: '¿Qué pide la nota del lunes?', options: ['Imprimir el catálogo.', 'Cambiar el título.', 'Usar la carpeta azul.'], answer: 1, why: '«Una nota tuya, la del lunes, que pide cambiar el título».' },
            ],
            transcript: 'Hola, Elena. Revisé los textos de la carpeta verde y [[los de la azul|blue]]. [[Los de la verde|blue]] están completos; [[los de la azul|blue]] son versiones antiguas. Marta, [[nuestra fotógrafa|teal]], ya eligió las imágenes finales. ¿Quieres que hable con el diseñador [[que hizo el cartel|orange]] o con [[el que preparó el catálogo|blue]]? Prefiero confirmarlo porque ambos están trabajando hoy. También encontré una nota tuya, [[la del lunes|blue]], que pide cambiar el título. Puedo hacer ese cambio antes de imprimir. Si hay otra instrucción más reciente, envíamela para no usar una versión equivocada.',
            reply: { teacher: 'El alumno responde a Daniel en voz alta como si fuera Elena: con qué diseñador debe hablar y qué nota usar, con al menos una elipsis y una aposición.', self: 'Responde a Daniel como si fueras Elena: dile con qué diseñador hablar y qué nota usar. Intenta no repetir «diseñador» ni «nota».' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: '¿De cuál hablas?', coach: 'Habla claro, pero sin repetir.',
      steps: [
        { title: '¿De cuál hablas?', blocks: [
          { kind: 'guide', text: { teacher: 'No hace falta usar todas las preguntas. Sigue lo que cuenta el alumno. Si pierdes el referente, dilo: «¿Cuál? No sé de quién hablas». Así practica la reformulación.', self: 'Responde cada pregunta en voz alta, como en una conversación. Después revisa: ¿repetiste algún nombre que podías omitir?' } },
          { kind: 'talk', cards: [
            { q: '¿Cuándo crees que repetir un nombre ayuda y cuándo molesta?', followUps: ['¿Te pasa en tu idioma también?', '¿Recibes mensajes que no se entienden?', '¿Qué haces cuando no sabes de quién hablan?'], phrases: ['Ayuda cuando hay [[dos posibles|orange]]…', 'Molesta cuando todos saben…', 'Prefiero [[el de|blue]]… a [[el de|blue]]…'], hint: 'Piensa en un mensaje real de tu trabajo o de tu familia que no entendiste.', example: 'Repetir molesta en mensajes cortos, porque todos saben de qué hablas. Pero ayuda cuando hay dos cosas parecidas. Una vez mi jefe me escribió «manda el de ayer» y había dos informes de ayer.', next: 'Hablemos de cómo reconoces a las personas.' },
            { q: 'En tu trabajo o en tu clase, ¿hay personas con el mismo nombre o la misma función? ¿Cómo las distinguen?', followUps: ['¿Usan apodos?', '¿Alguna vez hubo una confusión?', '¿Qué dato usas tú para distinguirlas?'], phrases: ['Hay dos Martas: [[la de|blue]] contabilidad y [[la que|blue]]…', 'La persona [[que se sienta junto a mí|orange]]…', 'Carlos, [[mi jefe|teal]],…'], hint: 'Usa un modificador sin comas para decir cuál: «la Marta que trabaja en ventas».', example: 'En mi oficina hay dos Javieres: el de ventas y el que trabaja en informática. Al de informática lo llamamos «Javi». Una vez le mandé un correo al otro por error.', next: 'Ahora, una foto.', teacher: 'Si el alumno usa comas al hablar con un dato que selecciona, haz una pausa exagerada y pregunta: «¿Entonces solo hay uno?».' },
            { q: 'Piensa en una foto de tu familia o de tus amigos. ¿Quién es quién?', followUps: ['¿Quién es la persona que está a la izquierda?', '¿Hay alguien que no conozco?', '¿Dónde y cuándo es la foto?'], phrases: ['Este es Diego, [[mi primo|teal]].', 'La chica [[del pelo corto|orange]] es…', '[[La de|blue]] la derecha es…'], hint: 'Presenta a cada persona con una aposición: «Ana, mi tía, …».', example: 'Esta es una foto de las vacaciones. El chico de la gorra es Diego, mi primo. La de la derecha es mi tía Ana. El perro que está en el centro es el mío.', next: 'Hablemos de cosas: tus objetos favoritos.' },
            { q: '¿Tienes un objeto que prefieres a otros parecidos? Por ejemplo, una taza, una mochila o unos zapatos.', followUps: ['¿Por qué prefieres ese?', '¿Es mejor el tuyo o el de tu pareja o tus amigos?', '¿Lo cambiarías por uno nuevo?'], phrases: ['Tengo dos tazas, pero prefiero [[la azul|blue]].', '[[El mío|blue]] es más viejo, pero…', 'La mochila [[que me regaló mi madre|orange]]…'], hint: 'Compara sin repetir el nombre: «la mía», «la de mi hermano», «la nueva».', example: 'Tengo tres mochilas, pero uso siempre la negra, la que me regaló mi hermana. La nueva es más bonita, pero la mía tiene más bolsillos.', next: 'Ahora piensa en un mensaje difícil.' },
            { q: 'Imagina que organizas una mudanza con amigos. ¿Qué instrucciones das?', followUps: ['¿Qué caja va primero?', '¿Quién lleva qué?', '¿Qué haces si alguien no entiende?'], phrases: ['[[Las de la cocina|blue]] van primero.', 'Laura, [[que tiene coche|teal]], lleva…', 'La caja [[que dice «frágil»|orange]]…'], hint: 'Da instrucciones cortas, pero que se entiendan: omite el nombre solo si no hay dudas.', example: 'Las cajas de la cocina van primero, y las del dormitorio, después. Laura, que tiene coche, lleva las lámparas. La caja que dice «frágil» la llevo yo.', next: 'Para terminar, piensa en tu propia forma de escribir.' },
            { q: '¿Escribes mensajes largos o cortos? ¿Alguna vez un mensaje tuyo causó una confusión?', followUps: ['¿Qué pasó?', '¿Cómo lo aclaraste?', '¿Qué cambiarías ahora?'], phrases: ['Puse «[[el de ayer|blue]]» y…', 'No quedó claro [[cuál|orange]]…', 'Lo aclaré diciendo…'], hint: 'Cuenta la confusión y di cómo la reformulaste: qué nombre o dato añadiste.', example: 'Una vez le mandé un mensaje a mi compañero: «Manda la de Pedro». Había dos presentaciones de Pedro. Después aclaré: «La que hizo para el cliente nuevo».' },
          ], swap: { teacher: 'Al final, cambien los papeles: el alumno describe al profesor una foto o un grupo de personas y el profesor dice «¿Cuál?» cada vez que algo no está claro.', self: 'Elige una foto de tu teléfono y escribe tres frases: una con una aposición, una con un dato que selecciona y una sin repetir un nombre.' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Un mensaje para el equipo', coach: 'Breve, claro y sin repeticiones.',
      steps: [
        { title: 'Un mensaje para el equipo', blocks: [
          { kind: 'guide', text: { teacher: 'Puede escribir en clase o como tarea. Usen la revisión automática y después lean el texto como si fueran otra persona del equipo: ¿se entiende siempre de qué y de quién habla?', self: 'Escribe tu mensaje y toca «Revisar mi texto». Después léelo como si no supieras nada: ¿se entiende cada «el de», «la que» y «el mío»?' } },
          { kind: 'write', title: 'Instrucciones claras', situation: 'Tu equipo (de trabajo, de estudio o de un club) tiene que terminar un proyecto. Hay dos versiones de un documento y dos personas responsables.', task: [
            'Di qué versión hay que revisar y cuál **no**, sin repetir el nombre del documento.',
            'Presenta a una persona del equipo con una **aposición** entre comas.',
            'Indica con quién hablar usando un **dato que selecciona** entre dos personas.',
            'Termina con una instrucción para el final que use un posesivo sin nombre (el mío, la tuya…).',
          ], starters: ['Revisa…, no…', 'Los de… están…', '…, la responsable de…,', 'Habla con el… que…', 'Si necesitas…, usa la de…'],
            words: ['la de', 'el que', 'los de', 'la mía', 'el tuyo', 'la más reciente', 'que preparó', 'que hizo'],
            model: 'Revisa los textos de la carpeta verde, no [[los de la azul|blue]]. [[Los de la verde|blue]] están completos y podemos imprimirlos mañana. Marta, [[la fotógrafa del equipo|teal]], ya eligió las imágenes finales. Antes de enviar todo, habla con el diseñador [[que preparó el catálogo|orange]]. Hay dos diseñadores trabajando hoy, así que confirma su tarea. Si necesitas otra instrucción, usa [[la del martes|blue]]: es la versión más reciente.',
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
            { tone: 'blue', label: 'ELIPSIS', formula: 'artículo + adjetivo / de / que', example: 'Necesito la verde, no la de las fotos.', caption: 'El nombre se sobrentiende.' },
            { tone: 'blue', label: 'POSESIVO SIN NOMBRE', formula: 'el mío, la tuya, los suyos', example: 'Tu café está frío; el mío, no.', caption: '«Mi, tu, su» solo van con nombre.' },
            { tone: 'teal', label: 'APOSICIÓN', formula: 'nombre, + explicación +,', example: 'Marta, la fotógrafa, eligió las fotos.', caption: 'Explica. Va entre comas.' },
            { tone: 'orange', label: 'MODIFICADOR', formula: 'nombre + que / de / adjetivo', example: 'Habla con el diseñador que hizo el cartel.', caption: 'Selecciona. Sin comas.' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'Piensa en quien lee', text: 'Omite el nombre solo si **no hay dudas**. Pon comas solo si el dato **explica**. Si hay varios y el dato **selecciona**, no pongas comas.' },
        ] },
        { title: 'Desafío final', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'choice', title: 'Cuatro frases, sin ayuda', items: [
            { prompt: 'Tus zapatos son cómodos; ___ me hacen daño.', options: ['mis', 'los míos', 'las mías'], answer: 1, why: 'Sin nombre: posesivo largo, masculino plural (zapatos).' },
            { prompt: 'Solo hay una abuela en la historia. ¿Qué frase es correcta?', options: ['Rosa, mi abuela, cumple noventa años.', 'Rosa mi abuela cumple noventa años.', 'Rosa que mi abuela cumple noventa años.'], answer: 0, why: 'Aposición explicativa entre dos comas.' },
            { prompt: 'Tengo tres primos. ¿Qué frase dice cuál viene?', options: ['Mi primo, que es médico, viene mañana.', 'Mi primo que es médico viene mañana.'], answer: 1, why: 'Hay tres: el dato selecciona, sin comas.' },
            { prompt: 'No uses esa impresora; usa ___ del segundo piso.', options: ['la', 'el', 'la de'], answer: 0, why: 'Artículo femenino + del: la (impresora) del segundo piso.' },
          ] },
        ] },
        { title: 'Tus errores y repaso', blocks: [
          { kind: 'review' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Cuándo puedes decir "la verde"?». Respuesta esperada: cuando el contexto ya permite recuperar el nombre y no hay otra carpeta verde. Después: «Mi hermano, que vive en Lima» y «Mi hermano que vive en Lima»: ¿cuántos hermanos tengo en cada caso?' },
        ] },
      ],
    },
  ],
};
