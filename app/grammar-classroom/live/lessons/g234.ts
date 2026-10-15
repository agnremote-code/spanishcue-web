import type { LiveLesson } from '../types';

/**
 * Lesson 234 · B2 · Relativos con preposición.
 * A group of professionals looks for a shared office: Laura (architect),
 * Sergio (owner) and the administrator. The verb decides the preposition
 * (hablar con, depender de, adaptarse a) and the article agrees with the noun.
 * «Cuyo» is left for C1.
 */
export const lesson: LiveLesson = {
  id: 234,
  level: 'B2',
  title: 'Relativos con preposición',
  subtitle: 'Identificar con precisión personas, lugares y documentos con «con la que», «del que», «a quien» sin perder la preposición que pide el verbo.',
  legend: [
    { tone: 'orange', label: 'Verbo + preposición · la relación original' },
    { tone: 'blue', label: 'Preposición + el / la / los / las que' },
    { tone: 'teal', label: 'Preposición + quien / quienes · solo personas' },
  ],
  optionNotes: {
    'las que': 'Falta la preposición. El verbo la pide («adaptarse a», «hablar con»…) y se queda delante del relativo.',
    'que depende la autorización': 'Falta la preposición: «depender de» → «del que depende».',
    'al que depende la autorización': '«Depender» va con «de», no con «a»: «del que depende».',
    'de las que': 'Revisa el verbo: ¿qué preposición pide? «Adaptarse» va con «a».',
    'con los quienes hablamos': '«Quien» y «quienes» nunca llevan artículo: «con quienes».',
    'a quien hablamos': '«Hablar» va con «con»: «con quienes hablamos». Y son dos personas: plural.',
    'en que': 'Sin artículo es posible a veces, pero con antecedentes concretos lo normal es «en el que / en la que».',
    'con el quien': '«Quien» nunca lleva artículo: «con quien» o «con el que».',
    'que': 'Falta la preposición que pide el verbo. Busca la relación original: hablar con, confiar en, depender de…',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'La preposición viaja con el relativo', coach: 'El verbo decide la preposición.',
      steps: [
        { title: 'De dos frases a una', blocks: [
          { kind: 'lead', text: 'Un grupo de profesionales busca un local para compartir. En la primera visita conocen a Laura, la arquitecta. Antes, ya habían hablado con ella por teléfono. ¿Cómo unimos las dos ideas en una frase?' },
          { kind: 'guide', text: { teacher: 'Escribe las dos frases separadas. Pregunta: «¿Qué palabra no puede desaparecer cuando las unimos?». Tu alumno descubre que «con» se queda.', self: 'Mira las dos frases separadas y la frase unida. Busca qué palabra se mueve y no desaparece.' } },
          { kind: 'compare', title: 'La preposición no desaparece', columns: [
            { tone: 'orange', label: 'DOS FRASES', sentence: 'Laura es la arquitecta. Ellos [[han hablado con|orange]] la arquitecta.', idea: '«Hablar» pide «con»: hablar **con** alguien.' },
            { tone: 'blue', label: 'UNA FRASE', sentence: 'Laura es la arquitecta [[con la que|blue]] han hablado.', idea: '«Con» se coloca delante del relativo. «La» concuerda con «arquitecta».' },
          ] },
          { kind: 'tip', icon: '🧳', title: 'La preposición viaja delante', text: 'En español, la preposición **no puede quedarse al final** de la frase. Va siempre **delante del relativo**: «la arquitecta **con la que** hablamos», nunca «la arquitecta que hablamos con».' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'Vivimos en una casa. → Es la casa ___ vivimos.', options: ['en la que', 'la que', 'que en'], answer: 0, why: '«Vivir en» → la preposición «en» va delante: «en la que».' },
            { prompt: 'Trabajo con unos compañeros. → Son los compañeros ___ trabajo.', options: ['con los que', 'los que', 'que con'], answer: 0, why: '«Trabajar con» → «con los que», en masculino plural.' },
          ] },
        ] },
        { title: 'Preposición + el / la / los / las que', mascot: '/brand/mascot/studying.webp', coach: 'Primero la preposición, después el artículo.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'PREP. + ARTÍCULO + QUE', question: '¿El verbo de la relativa pide una preposición?', formula: ['nombre + preposición + el / la / los / las + que + verbo'],
            meaning: 'La **preposición** depende del verbo de la relativa (hablar **con**, depender **de**, adaptarse **a**, interesarse **por**). El **artículo** concuerda en género y número con el nombre al que se refiere. Sirve para personas y cosas.',
            examples: [
              { es: 'La arquitecta [[con la que|blue]] hablamos.' },
              { es: 'El informe [[del que|blue]] depende la autorización.' },
              { es: 'Las condiciones [[a las que|blue]] debemos adaptarnos.' },
              { es: 'Los locales [[por los que|blue]] preguntamos.' },
            ],
            note: 'Con «a» y «de» + «el», haz la contracción: **al que**, **del que**.' },
          { kind: 'table', title: 'El verbo decide la preposición', head: ['Verbo', 'Ejemplo', 'Relativa'], rows: [
            ['[[hablar con|orange]]', 'la arquitecta', 'la arquitecta [[con la que|blue]] hablamos'],
            ['[[depender de|orange]]', 'el informe', 'el informe [[del que|blue]] depende'],
            ['[[adaptarse a|orange]]', 'las condiciones', 'las condiciones [[a las que|blue]] nos adaptamos'],
            ['[[interesarse por|orange]]', 'los locales', 'los locales [[por los que|blue]] nos interesamos'],
            ['[[estar interesado en|orange]]', 'la sala', 'la sala [[en la que|blue]] estamos interesados'],
            ['[[ir a|orange]]', 'el edificio', 'el edificio [[al que|blue]] vamos'],
          ], note: 'La preposición no cambia con el género del nombre: cambia el artículo (el, la, los, las).' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'Nos adaptamos a unas condiciones. → Son las condiciones ___ debemos adaptarnos.', options: ['a las que', 'de las que', 'las que'], answer: 0, why: '«Adaptarse a»; «condiciones» es femenino plural.' },
            { prompt: 'La autorización depende del informe. → Este es el informe ___.', options: ['del que depende la autorización', 'al que depende la autorización', 'que depende la autorización'], answer: 0, why: '«Depender de»; de + el = del.' },
          ] },
        ] },
        { title: 'Preposición + quien / quienes', mascot: '/brand/mascot/speaking.webp', coach: 'Quien: solo personas, sin artículo.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'PREP. + QUIEN / QUIENES', question: '¿Hablas de una persona?', formula: ['persona + preposición + quien / quienes + verbo'],
            meaning: '**Quien** (singular) y **quienes** (plural) se usan **solo para personas** y **nunca llevan artículo**. Con preposición, alternan con «el / la / los / las que»: las dos formas son correctas. «Quien» suena un poco más formal.',
            examples: [
              { es: 'La persona [[a quien|teal]] envié el mensaje.' },
              { es: 'Los compañeros [[con quienes|teal]] trabajo.' },
              { es: 'La administradora [[con quien|teal]] nos reunimos el martes.' },
              { es: 'El técnico [[en quien|teal]] confío.' },
            ] },
          { kind: 'compare', title: 'Dos formas correctas para personas', columns: [
            { tone: 'teal', label: 'CON QUIEN', sentence: 'La persona [[a quien|teal]] llamé.', idea: 'Solo personas. Sin artículo. Concuerda en número: quien / quienes.' },
            { tone: 'blue', label: 'CON ARTÍCULO', sentence: 'La persona [[a la que|blue]] llamé.', idea: 'Personas y cosas. El artículo concuerda: el / la / los / las.' },
          ] },
          { kind: 'tip', icon: '!', title: 'Nunca «el quien»', text: '«Con **el quien**», «al **quien**» son incorrectos. Elige: «con **quien**» o «con **el que**». Y recuerda el plural: «las asesoras con **quienes** hablamos».' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'Hablamos con dos asesoras. → Son las asesoras ___.', options: ['con quienes hablamos', 'con los quienes hablamos', 'a quien hablamos'], answer: 0, why: '«Hablar con»; plural «quienes» y sin artículo.' },
            { prompt: '¿Qué par de frases es correcto?', options: ['La persona a quien llamé / la persona a la que llamé.', 'La persona quien llamé / la persona que llamé.', 'La persona al quien llamé / la persona al que llamé.'], answer: 0, why: '«Llamar a» alguien: «a quien» o «a la que».' },
          ] },
        ] },
        { title: 'Concordancia y lugares', mascot: '/autoestudio/mascot/noting.webp', coach: 'El artículo mira hacia atrás.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'CONCORDANCIA', question: '¿A qué nombre se refiere el relativo?', formula: ['el / la / los / las → mismo género y número que el nombre', 'a + el = al · de + el = del'],
            meaning: 'El **artículo** vuelve al nombre anterior: si cambias el nombre, cambia el artículo, pero la **preposición se queda** (depende del verbo). Para lugares, también puedes usar **donde** en lugar de «en el que».',
            examples: [
              { es: 'La sala [[en la que|blue]] nos reunimos.' },
              { es: 'El edificio [[en el que|blue]] está el local.' },
              { es: 'El edificio [[al que|blue]] vamos.' },
              { es: 'El barrio [[donde|blue]] / [[en el que|blue]] vivo.' },
            ] },
          { kind: 'table', title: 'El mismo verbo, distintos nombres', head: ['', 'Masculino', 'Femenino'], rows: [
            ['singular', 'el local [[en el que|blue]] trabajamos', 'la oficina [[en la que|blue]] trabajamos'],
            ['plural', 'los locales [[en los que|blue]] trabajamos', 'las oficinas [[en las que|blue]] trabajamos'],
          ], note: 'La preposición «en» se mantiene en las cuatro: viene de «trabajar en».' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'Preguntamos por unos locales. → Son los locales ___ preguntamos.', options: ['por los que', 'por las que', 'por el que'], answer: 0, why: '«Locales»: masculino plural.' },
            { prompt: 'Vamos a un edificio. → Es el edificio ___ vamos.', options: ['al que', 'a el que', 'el que'], answer: 0, why: '«Ir a» + el → al que.' },
          ] },
        ] },
        { title: 'Cómo elegir', mascot: '/brand/mascot/seated.webp', coach: 'Tres pasos para una relativa precisa.', blocks: [
          { kind: 'decide', title: 'Piensa en tu frase y responde', steps: [
            { q: '¿El verbo de la relativa necesita una preposición? (hablar con, confiar en, depender de…)', yes: 'next', no: 'Usa solo **que**: «el informe **que** leímos» (leer algo, sin preposición).' },
            { q: '¿Hablas de una persona?', yes: 'Elige: **preposición + quien / quienes** o **preposición + el / la / los / las que**: «la persona [[en quien|teal]] confío» / «la persona [[en la que|blue]] confío».', no: 'Usa **preposición + el / la / los / las que**, con el artículo que concuerda: «el informe [[del que|blue]] depende la autorización».' },
          ] },
          { kind: 'tip', icon: '🔍', title: 'Un truco para encontrar la preposición', text: 'Vuelve a la frase original: «La autorización depende **del** informe». La preposición que aparece ahí («de») es la que necesitas: «el informe **del que** depende».' },
          { kind: 'tip', icon: '📚', title: 'Lo que viene después', text: 'Existe también **cuyo / cuya** («el edificio **cuyo** propietario es Sergio»), que expresa posesión. Es más formal y lo trabajarás en C1.' },
        ] },
        { title: 'Errores frecuentes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'El error más común: perder la preposición.', blocks: [
          { kind: 'guide', text: { teacher: 'Tu alumno reconstruye la frase original («hablamos con…») antes de corregir.', self: 'Para cada frase, reconstruye la frase original con el verbo y su preposición. Después toca para ver la corrección.' } },
          { kind: 'mistakes', title: '¿Dónde está el error?', items: [
            { wrong: 'Las condiciones que debemos adaptarnos.', right: 'Las condiciones a las que debemos adaptarnos.', why: '«Adaptarse a»: la preposición no puede desaparecer.' },
            { wrong: 'La arquitecta que hablamos con ella.', right: 'La arquitecta con la que hablamos.', why: 'La preposición va delante del relativo y no se repite el pronombre.' },
            { wrong: 'Los compañeros con los quienes trabajo.', right: 'Los compañeros con quienes trabajo. / Los compañeros con los que trabajo.', why: '«Quien» nunca lleva artículo.' },
            { wrong: 'El informe de lo que depende la autorización.', right: 'El informe del que depende la autorización.', why: '«Informe» es masculino: el artículo es «el» (de + el = del), no «lo».' },
            { wrong: 'La sala en el que estamos interesados.', right: 'La sala en la que estamos interesados.', why: 'El artículo concuerda con «sala», femenino.' },
            { wrong: 'La ciudad en la que vivo en ella es pequeña.', right: 'La ciudad en la que vivo es pequeña.', why: 'No repitas la preposición ni el pronombre: «en la que» ya los incluye.' },
          ] },
          { kind: 'teacher', text: 'Pide al alumno tres frases sobre personas de su vida con verbos distintos: trabajar con, confiar en, pedir ayuda a. Comprueba la preposición y la concordancia.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'Precisar en una visita real', coach: 'Toca las expresiones marcadas.',
      steps: [
        { title: 'La visita al local', blocks: [
          { kind: 'guide', text: { teacher: 'Lean el diálogo con papeles. Después el alumno toca cada expresión y reconstruye la frase original con el verbo y su preposición.', self: 'Lee el diálogo. Después toca cada expresión marcada y piensa: ¿qué verbo pide esa preposición?' } },
          { kind: 'explore', title: 'Dos salas parecidas', setting: 'Andrea y Óscar, dos diseñadores, visitan un local para compartir con otros profesionales. Los recibe Laura, la arquitecta.', lines: [
            { who: 'Laura', text: '¡Hola! Soy Laura. Creo que hablamos por teléfono la semana pasada.' },
            { who: 'Andrea', text: 'Sí, eres la arquitecta [[con la que|blue]] hablé. Él es Óscar.' },
            { who: 'Laura', text: 'Encantada. Este es el edificio [[en el que|blue]] está el local. El propietario es Sergio.' },
            { who: 'Óscar', text: '¿Sergio es la persona [[a quien|teal]] tenemos que enviar las preguntas?' },
            { who: 'Laura', text: 'No, para eso está la administradora. Ahora les doy su correo.' },
            { who: 'Andrea', text: 'Hay dos salas muy parecidas, ¿no?' },
            { who: 'Laura', text: 'Sí, pero solo esta tiene acceso directo desde la calle.' },
            { who: 'Óscar', text: 'Esa es la sala [[en la que|blue]] estamos más interesados. Vamos a recibir a personas con movilidad reducida.' },
            { who: 'Laura', text: 'Perfecto. Les enseño el informe [[del que|blue]] depende la autorización de la reforma. Todavía falta una firma.' },
            { who: 'Andrea', text: '¿Y cuáles son las normas [[a las que|blue]] tendríamos que adaptarnos?' },
            { who: 'Laura', text: 'El horario de acceso, el uso de las zonas comunes y el límite de ruido. Los otros profesionales [[con quienes|teal]] compartirían el espacio son muy tranquilos.' },
          ], notes: {
            'con la que': '«Hablé **con** la arquitecta» → la arquitecta **con la que** hablé. «La» concuerda con «arquitecta».',
            'en el que': '«El local está **en** el edificio» → el edificio **en el que** está el local.',
            'a quien': '«Enviar las preguntas **a** una persona» → la persona **a quien** enviar las preguntas. «Quien» porque es una persona.',
            'en la que': '«Estar interesado **en** la sala» → la sala **en la que** estamos interesados.',
            'del que': '«La autorización depende **del** informe» → el informe **del que** depende. De + el = del.',
            'a las que': '«Adaptarse **a** las normas» → las normas **a las que** tendríamos que adaptarnos. Femenino plural.',
            'con quienes': '«Compartir el espacio **con** otros profesionales» → **con quienes**: plural y sin artículo.',
          } },
          { kind: 'choice', title: '¿Entendiste?', items: [
            { prompt: '¿Por qué prefieren una de las dos salas?', options: ['Porque tiene acceso directo desde la calle.', 'Porque es más grande.', 'Porque es más barata.'], answer: 0, why: '«Solo esta tiene acceso directo desde la calle… Vamos a recibir a personas con movilidad reducida».' },
            { prompt: '¿Qué falta para la autorización de la reforma?', options: ['Una firma en el informe.', 'El presupuesto.', 'Hablar con Sergio.'], answer: 0, why: '«El informe del que depende la autorización… Todavía falta una firma».' },
          ] },
        ] },
        { title: 'Presentar al equipo', mascot: '/brand/mascot/speaking.webp', coach: 'Personas identificadas con precisión.', blocks: [
          { kind: 'explore', title: 'El primer día en el local', setting: 'Un mes después, Andrea presenta el espacio a Clara, una fotógrafa que se une al proyecto.', lines: [
            { who: 'Clara', text: '¡Qué bonito! ¿Quién es toda esta gente?' },
            { who: 'Andrea', text: 'Te los presento. Él es Martín, el ilustrador [[con quien|teal]] comparto mesa.' },
            { who: 'Clara', text: '¿Y la chica del fondo?' },
            { who: 'Andrea', text: 'Es Nuria, la persona [[a la que|blue]] puedes pedir ayuda con la impresora.' },
            { who: 'Clara', text: '¿Hay alguien [[en quien|teal]] pueda confiar para las llaves?' },
            { who: 'Andrea', text: 'La administradora. Es muy responsable. Y esta es la sala [[por la que|blue]] luchamos tanto: la que tiene entrada desde la calle.' },
            { who: 'Clara', text: '¿Y aquellas cajas?' },
            { who: 'Andrea', text: 'Son los materiales [[de los que|blue]] te hablé por correo. Puedes usarlos cuando quieras.' },
            { who: 'Clara', text: 'Perfecto. Creo que este es el lugar [[con el que|blue]] soñaba.' },
          ], notes: {
            'con quien': '«Comparto mesa **con** el ilustrador» → **con quien**. Persona singular, sin artículo.',
            'a la que': '«Puedes pedir ayuda **a** Nuria» → la persona **a la que**. También sería correcto «a quien».',
            'en quien': '«Confiar **en** alguien» → alguien **en quien** pueda confiar.',
            'por la que': '«Luchar **por** la sala» → la sala **por la que** luchamos.',
            'de los que': '«Te hablé **de** los materiales» → los materiales **de los que** te hablé. Masculino plural.',
            'con el que': '«Soñar **con** un lugar» → el lugar **con el que** soñaba.',
          } },
          { kind: 'teacher', text: 'Pide al alumno que presente a tres personas de su trabajo o su clase como lo hace Andrea, con verbos distintos.' },
        ] },
        { title: '¿Qué verbo pide la preposición?', blocks: [
          { kind: 'classify', title: 'Clasifica por la preposición', categories: [
            { id: 'con', label: 'con', tone: 'blue' },
            { id: 'en', label: 'en', tone: 'teal' },
            { id: 'a', label: 'a', tone: 'orange' },
            { id: 'de', label: 'de', tone: 'violet' },
          ], items: [
            { text: 'la arquitecta ___ la que hablé', answer: 'con', why: 'Hablar con alguien.' },
            { text: 'la sala ___ la que estamos interesados', answer: 'en', why: 'Estar interesado en algo.' },
            { text: 'las normas ___ las que tenemos que adaptarnos', answer: 'a', why: 'Adaptarse a algo.' },
            { text: 'los materiales ___ los que te hablé', answer: 'de', why: 'Hablar de algo.' },
            { text: 'alguien ___ quien pueda confiar', answer: 'en', why: 'Confiar en alguien.' },
            { text: 'el lugar ___ el que soñaba', answer: 'con', why: 'Soñar con algo.' },
            { text: 'la persona ___ quien enviar las preguntas', answer: 'a', why: 'Enviar algo a alguien.' },
          ] },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Vuelve siempre a la frase original.',
      steps: [
        { title: 'Elige según el contexto', blocks: [
          { kind: 'choice', items: [
            { context: 'Confías en una amiga desde hace años.', prompt: 'Es la amiga ___ más confío.', options: ['en la que', 'con la que', 'la que'], answer: 0, why: '«Confiar en» alguien.' },
            { context: 'Tu proyecto depende de una beca.', prompt: 'Es la beca ___ depende mi proyecto.', options: ['de la que', 'a la que', 'la que'], answer: 0, why: '«Depender de»; «beca» es femenino.' },
            { context: 'Ayer llamaste a unos clientes.', prompt: 'Son los clientes ___ llamé ayer.', options: ['a quienes', 'a quien', 'quienes'], answer: 0, why: '«Llamar a»; plural: «quienes».' },
            { context: 'Te mudaste a un barrio nuevo.', prompt: 'Es el barrio ___ me mudé en enero.', options: ['al que', 'del que', 'el que'], answer: 0, why: '«Mudarse a» + el → al que.' },
            { context: 'Te preocupan unos problemas.', prompt: 'Son los problemas ___ me preocupo.', options: ['por los que', 'por las que', 'los que'], answer: 0, why: '«Preocuparse por»; «problemas» es masculino plural.' },
            { context: 'Vienes de otra empresa: allí trabajabas antes.', prompt: 'Es la empresa ___ vengo.', options: ['de la que', 'en la que', 'a la que'], answer: 0, why: '«Venir de» un lugar: el origen.' },
          ] },
        ] },
        { title: 'Compara los significados', blocks: [
          { kind: 'choice', items: [
            { prompt: '«La persona de la que te hablé» / «La persona con la que te hablé». ¿Qué diferencia hay?', options: ['En la primera hablé sobre esa persona; en la segunda, hablé con ella.', 'No hay diferencia.', 'La segunda es incorrecta.'], answer: 0, why: '«Hablar de» (el tema) y «hablar con» (el interlocutor) cambian el significado.' },
            { prompt: '¿Qué frase dice que **pensamos en** el proyecto?', options: ['Es el proyecto en el que pensamos.', 'Es el proyecto que pensamos.', 'Es el proyecto del que pensamos.'], answer: 0, why: '«Pensar en» algo.' },
            { prompt: '«Los compañeros con quienes trabajo» y «los compañeros con los que trabajo». ¿Son correctas?', options: ['Sí, las dos.', 'Solo la primera.', 'Solo la segunda.'], answer: 0, why: 'Para personas, «quien(es)» y «el / la / los / las que» alternan.' },
            { prompt: '¿Qué frase habla de **un lugar de destino**?', options: ['La ciudad a la que viajamos.', 'La ciudad de la que venimos.', 'La ciudad en la que vivimos.'], answer: 0, why: '«Viajar a»: el destino. «Venir de»: el origen. «Vivir en»: el lugar.' },
          ] },
        ] },
        { title: 'Completa la conversación', blocks: [
          { kind: 'chat-fill', title: 'Buscar un local', lines: [
            { who: 'Óscar', text: '¿Te acuerdas del local ___ te hablé?', options: ['del que', 'que', 'al que'], answer: 0, why: '«Hablar de» + el → del que.' },
            { who: 'Andrea', text: 'Sí, el de la calle Mayor. ¿Lo visitaste?' },
            { who: 'Óscar', text: 'Sí. Conocí a la arquitecta ___ trabaja el propietario.', options: ['con la que', 'la que', 'con el que'], answer: 0, why: '«Trabajar con»; «arquitecta» es femenino.' },
            { who: 'Andrea', text: '¿Y las condiciones?' },
            { who: 'Óscar', text: 'Hay algunas normas ___ tendríamos que adaptarnos: el horario y el ruido.', options: ['a las que', 'las que', 'de las que'], answer: 0, why: '«Adaptarse a»; femenino plural.' },
            { who: 'Andrea', text: '¿Hay alguien ___ podamos preguntar las dudas?', options: ['a quien', 'quien', 'a quienes que'], answer: 0, why: '«Preguntar a» una persona; singular.' },
            { who: 'Óscar', text: 'Sí, la administradora ___ nos reunimos ayer.', options: ['con quien', 'quien', 'con la quien'], answer: 0, why: '«Reunirse con»; «quien» sin artículo.' },
          ] },
        ] },
        { title: 'Encuentra el error', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Es la empresa que trabajo.', ok: false, options: ['Es la empresa en la que trabajo.', 'Es la empresa la que trabajo.', 'Es la empresa en el que trabajo.'], answer: 0, why: '«Trabajar en»; «empresa» es femenino.' },
            { sentence: 'El técnico en quien confío vendrá mañana.', ok: true, why: 'Correcta: «confiar en» + quien.' },
            { sentence: 'Son las amigas con los quienes viajé.', ok: false, options: ['Son las amigas con quienes viajé.', 'Son las amigas quienes viajé.', 'Son las amigas con las quienes viajé.'], answer: 0, why: '«Quien» no lleva artículo.' },
            { sentence: 'Este es el libro que te hablé.', ok: false, options: ['Este es el libro del que te hablé.', 'Este es el libro al que te hablé.', 'Este es el libro el que te hablé.'], answer: 0, why: '«Hablar de» un libro: «del que».' },
            { sentence: 'La ciudad a la que nos mudamos es muy tranquila.', ok: true, why: 'Correcta: «mudarse a»; «ciudad», femenino.' },
            { sentence: 'Es el problema que te preocupas.', ok: false, options: ['Es el problema por el que te preocupas.', 'Es el problema el que te preocupas.', 'Es el problema por la que te preocupas.'], answer: 0, why: '«Preocuparse por»; «problema» es masculino.' },
          ] },
        ] },
        { title: 'Construye frases', blocks: [
          { kind: 'build', title: 'Ordena las palabras', items: [
            { tiles: ['la', 'arquitecta', 'con', 'la', 'que', 'hablamos'], accept: ['la arquitecta con la que hablamos'] },
            { tiles: ['el', 'informe', 'del', 'que', 'depende', 'todo'], accept: ['el informe del que depende todo'] },
            { tiles: ['los', 'compañeros', 'con', 'quienes', 'trabajo'], accept: ['los compañeros con quienes trabajo'] },
            { tiles: ['la', 'sala', 'en', 'la', 'que', 'nos', 'reunimos'], accept: ['la sala en la que nos reunimos'] },
          ] },
        ] },
        { title: 'Une las frases', mascot: '/brand/mascot/kneeling.webp', coach: 'Una frase, sin repetir el nombre.', blocks: [
          { kind: 'rewrite', title: 'Une las dos frases con un relativo', items: [
            { prompt: 'Visitamos un local. En ese local queremos trabajar.', instruction: 'Empieza con «Visitamos un local…».', accept: ['Visitamos un local en el que queremos trabajar', 'Visitamos un local donde queremos trabajar', 'Visitamos un local en que queremos trabajar'] },
            { prompt: 'Hablé con una abogada. La abogada me ayudó mucho.', instruction: 'Empieza con «La abogada…».', accept: ['La abogada con la que hablé me ayudó mucho', 'La abogada con quien hablé me ayudó mucho'] },
            { prompt: 'Te hablé de unos libros. Los libros están en la mesa.', instruction: 'Empieza con «Los libros…».', accept: ['Los libros de los que te hablé están en la mesa'] },
            { prompt: 'Confío en mis padres. Mis padres siempre me apoyan.', instruction: 'Empieza con «Mis padres, en…». Usa «quienes».', accept: ['Mis padres, en quienes confío, siempre me apoyan'] },
            { prompt: 'Nos adaptamos a unas normas. Las normas son muy claras.', instruction: 'Empieza con «Las normas…».', accept: ['Las normas a las que nos adaptamos son muy claras'] },
          ] },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Una aclaración sobre los documentos', coach: 'Primero escucha sin leer.',
      steps: [
        { title: 'Una llamada a Laura', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha para la idea general. En la segunda, el alumno anota cada relativa con preposición y el verbo del que viene.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Anota las relativas con preposición que oigas.' } },
          { kind: 'listen', title: 'Andrea llama a Laura', channel: 'LLAMADA · PARA LAURA', src: '/audio/grammar-classroom/234.mp3',
            before: 'Andrea llama a Laura porque el grupo tiene dudas sobre los documentos y sobre una de las salas. ¿Qué crees que quiere aclarar?',
            gist: { prompt: '¿Por qué llama Andrea?', options: ['Para aclarar qué documento falta y confirmar el uso de un pasillo.', 'Para cancelar el alquiler del local.', 'Para pedir un descuento.'], answer: 0, why: 'Distingue el informe del presupuesto y pregunta por el pasillo.' },
            details: [
              { prompt: '¿Qué documento ya tienen?', options: ['El presupuesto de las obras.', 'El informe firmado.', 'La autorización.'], answer: 0, why: '«El presupuesto es el documento en el que aparecen los precios y los materiales; ese ya lo tenemos».' },
              { prompt: '¿Qué les falta?', options: ['La versión firmada del informe técnico.', 'Los precios de los materiales.', 'Las llaves del local.'], answer: 0, why: '«Nos falta la versión firmada del informe técnico».' },
              { prompt: '¿Qué le pregunta a Laura sobre el informe?', options: ['Quién es la persona a la que deben solicitarlo.', 'Cuánto cuesta.', 'Dónde está la sala.'], answer: 0, why: '«¿Puedes indicarnos quién es la persona a la que debemos solicitarla?».' },
              { prompt: '¿Por qué es importante el pasillo?', options: ['Es el espacio por el que saldrían las personas en una emergencia.', 'Es donde quieren poner las mesas.', 'Comunica con la otra sala.'], answer: 0, why: '«Es el espacio por el que saldrían las personas en caso de emergencia».' },
              { prompt: '¿Con quién propone hablar?', options: ['Con la administradora con quien se reunieron el martes.', 'Con Sergio, el propietario.', 'Con los otros profesionales.'], answer: 0, why: '«Podemos hablar con la administradora con quien nos reunimos el martes».' },
            ],
            transcript: 'Hola, Laura. Te llamo porque hemos mezclado dos documentos. El informe [[del que|blue]] depende la autorización no es el presupuesto de las obras. El presupuesto es el documento [[en el que|blue]] aparecen los precios y los materiales; ese ya lo tenemos. Nos falta la versión firmada del informe técnico. ¿Puedes indicarnos quién es la persona [[a la que|blue]] debemos solicitarla? También queremos confirmar una condición sobre las salas. La sala [[en la que|blue]] estamos interesados es la que tiene entrada desde la calle, pero no sabemos si podemos utilizar el pasillo [[con el que|blue]] comunica. Para nosotros es importante, porque es el espacio [[por el que|blue]] saldrían las personas en caso de emergencia. Si te parece, podemos hablar con la administradora [[con quien|teal]] nos reunimos el martes.',
            reply: { teacher: 'El alumno responde como si fuera Laura: identifica a la persona a la que deben pedir el informe y responde sobre el pasillo, con al menos dos relativas con preposición.', self: 'Responde a Andrea como si fueras Laura. Usa al menos dos relativas con preposición («la persona a la que…», «el pasillo por el que…»).' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Personas y lugares de tu vida', coach: 'Describe sin decir el nombre.',
      steps: [
        { title: 'Personas y lugares de tu vida', blocks: [
          { kind: 'guide', text: { teacher: 'No hace falta usar todas las preguntas. Sigue lo que el alumno quiere contar y repregunta. Si pierde una preposición, pregúntale por el verbo original.', self: 'Responde cada pregunta en voz alta, como en una conversación. Si quieres, escribe tu respuesta después.' } },
          { kind: 'talk', cards: [
            { q: 'Describe a una persona importante para ti por algo que haces con ella, sin decir su nombre.', followUps: ['¿Desde cuándo la conoces?', '¿Qué aprendes de ella?', '¿Qué hacen juntos normalmente?'], phrases: ['Es la persona [[con la que|blue]]…', 'Es alguien [[en quien|teal]] confío.', 'Es la amiga [[a la que|blue]] llamo cuando…'], hint: 'Piensa primero en el verbo: hablar con, confiar en, contar con, salir con, pedir ayuda a.', example: 'Es la persona con la que hablo todos los días y en quien más confío. Es mi hermana mayor: la persona a la que llamo cuando tengo un problema.', next: 'Ahora, un lugar.' },
            { q: 'Describe un lugar que conoces bien con precisión, sin decir el nombre: ¿qué haces allí?', followUps: ['¿Por qué es importante para ti?', '¿Con quién vas?', '¿Qué cambiarías?'], phrases: ['Es el lugar [[en el que|blue]]…', 'Es el café [[al que|blue]] voy…', 'Es la ciudad [[de la que|blue]] vengo.'], hint: 'Cuidado con el artículo: el lugar → en el que; la plaza → en la que.', example: 'Es un café pequeño al que voy los domingos. Es el lugar en el que leo y del que salgo siempre con buenas ideas.', next: 'Pensemos en tu trabajo o tus estudios.' },
            { q: '¿Con qué personas trabajas o estudias? Preséntamelas como si yo fuera nuevo o nueva.', followUps: ['¿A quién pides ayuda cuando tienes un problema?', '¿Con quién te llevas mejor?', '¿Hay alguien de quien aprendes mucho?'], phrases: ['Es el compañero [[con quien|teal]]…', 'Es la persona [[a la que|blue]] pides…', 'Es alguien [[de quien|teal]] aprendo…'], hint: 'Con personas, puedes alternar «quien» y «el / la que».', example: 'Este es Andrés, el compañero con quien comparto proyecto. Y ella es Marta, la persona a la que tienes que pedir las llaves. Es alguien de quien aprendo mucho.', next: 'Ahora, un objeto o un documento.', teacher: 'Haz de compañero nuevo y pregunta: «¿Y a quién le pido…?», para que el alumno use relativas con distintas preposiciones.' },
            { q: '¿Hay un objeto sin el que no puedes vivir? ¿Por qué?', followUps: ['¿Desde cuándo lo tienes?', '¿Qué harías sin él?', '¿Hay algo de lo que te gustaría deshacerte?'], phrases: ['Es el objeto [[sin el que|blue]]…', 'Es algo [[con lo que|blue]]…', 'Es una cosa [[de la que|blue]] me gustaría…'], hint: '«Sin el que / sin la que»: «la taza sin la que no empiezo el día».', example: 'Mi bicicleta es el objeto sin el que no puedo vivir. Es el medio con el que voy a todas partes. En cambio, hay un sofá viejo del que me gustaría deshacerme.', next: 'Hablemos de decisiones.' },
            { q: '¿Cuál es una decisión de la que estás muy orgulloso u orgullosa?', followUps: ['¿Quién te ayudó?', '¿De qué dependía?', '¿Qué dificultades tuviste?'], phrases: ['Es una decisión [[de la que|blue]]…', 'La persona [[en quien|teal]] me apoyé fue…', 'Todo dependía de…'], hint: '«Estar orgulloso de» → «de la que estoy orgulloso».', example: 'Es la decisión de cambiar de carrera, de la que estoy muy orgullosa. La persona en quien me apoyé fue mi profesora, a la que todavía escribo.', next: 'Para terminar, algo con lo que sueñas.' },
            { q: '¿Cómo sería el espacio de trabajo con el que sueñas?', followUps: ['¿Con quién lo compartirías?', '¿A qué normas te adaptarías?', '¿Qué sería imprescindible?'], phrases: ['Sería un lugar [[en el que|blue]]…', 'Lo compartiría con personas [[con quienes|teal]]…', 'Las normas [[a las que|blue]] me adaptaría…'], hint: 'Combina varias preposiciones: en, con, a, por, de.', example: 'Sería un estudio luminoso en el que pudiera trabajar con música. Lo compartiría con personas con quienes pudiera aprender. Las únicas normas a las que me adaptaría serían el silencio por la mañana y la limpieza.', teacher: 'Al final, tu alumno identifica cuántas preposiciones diferentes usó.' },
          ], swap: { teacher: 'Al final, cambien los papeles: el profesor describe personas y lugares sin decir el nombre y el alumno adivina.', self: 'Juega a adivinar con alguien esta semana: describe una persona o un lugar con relativas («Es la persona con la que…») sin decir el nombre.' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Una consulta sobre un espacio', coach: 'Cada cosa y cada persona, bien identificadas.',
      steps: [
        { title: 'Una consulta sobre un espacio', blocks: [
          { kind: 'guide', text: { teacher: 'Puede escribir en clase o como tarea. Revisen juntos cada relativa: ¿la preposición viene del verbo?, ¿el artículo concuerda?', self: 'Escribe tu consulta y toca «Revisar mi texto». Después revisa cada relativa: ¿la preposición viene del verbo? ¿El artículo concuerda?' } },
          { kind: 'write', title: 'Escribe a la persona responsable', situation: 'Estás buscando un espacio compartido (una oficina, un estudio, un taller, una sala para clases). Ya lo visitaste y tienes dudas. Escribe a la persona responsable.', task: [
            'Identifica **un local o una sala** con una relativa (en el que, al que…).',
            'Identifica **un documento** y **una persona** con relativas (del que, a quien, con la que…).',
            'Haz **dos preguntas** concretas.',
            'Explica **por qué** necesitas esas respuestas antes de decidir.',
          ], starters: ['Hola, …:', 'Quería confirmar dos datos del local en el que…', 'La sala en la que estamos interesados…', '¿Podrías indicarnos quién es la persona a la que…?', 'Todavía no tenemos el documento del que…', 'Con esa información…'],
            words: ['la sala', 'el local', 'el informe', 'el presupuesto', 'la administradora', 'depender de', 'adaptarse a', 'estar interesado en', 'reunirse con'],
            model: 'Hola, Laura. Quería confirmar dos datos del local [[en el que|blue]] nos reunimos el martes. La sala [[en la que|blue]] estamos interesados es la que tiene entrada desde la calle. ¿Podemos utilizar también el pasillo [[con el que|blue]] comunica? Necesitamos saberlo antes de organizar las visitas. Además, todavía no tenemos la versión firmada del informe [[del que|blue]] depende la autorización. ¿Podrías indicarnos quién es la persona [[a la que|blue]] debemos solicitarla? Con esa información podremos revisar las condiciones y decidir si el espacio se adapta a nuestro proyecto.',
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
            { tone: 'orange', label: 'EL VERBO DECIDE', formula: 'hablar con · depender de · adaptarse a', example: 'Hablamos con la arquitecta.', caption: 'Busca la preposición en la frase original.' },
            { tone: 'blue', label: 'PREP. + EL / LA / LOS / LAS QUE', formula: 'preposición + artículo + que', example: 'La arquitecta con la que hablamos.', caption: 'El artículo concuerda con el nombre. Al que, del que.' },
            { tone: 'teal', label: 'PREP. + QUIEN / QUIENES', formula: 'preposición + quien / quienes', example: 'Los compañeros con quienes trabajo.', caption: 'Solo personas. Nunca con artículo.' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'Tres pasos', text: '1. Busca el **verbo** y su **preposición**. 2. Pon la preposición **delante** del relativo. 3. Elige el **artículo** que concuerda (o **quien / quienes** para personas).' },
        ] },
        { title: 'Desafío final', blocks: [
          { kind: 'choice', title: 'Cuatro frases, sin ayuda', items: [
            { prompt: 'Es la persona ___ más confío.', options: ['en quien', 'con quien', 'quien'], answer: 0, why: '«Confiar en».' },
            { prompt: 'Son las condiciones ___ me adapto.', options: ['a las que', 'de las que', 'las que'], answer: 0, why: '«Adaptarse a»; femenino plural.' },
            { prompt: 'Es el tema ___ más hablamos en clase.', options: ['del que', 'al que', 'el que'], answer: 0, why: '«Hablar de» un tema; de + el = del.' },
            { prompt: 'Son los vecinos ___ organizamos la fiesta.', options: ['con quienes', 'con los quienes', 'quienes'], answer: 0, why: '«Organizar con»; plural y sin artículo.' },
          ] },
        ] },
        { title: 'Tus errores y repaso', blocks: [
          { kind: 'review' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: completa y justifica «la persona ___ confío» y «las condiciones ___ me adapto». En quien / en la que confío; a las que me adapto. «Confiar en» y «adaptarse a» deciden la preposición.' },
        ] },
      ],
    },
  ],
};
