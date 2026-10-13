import type { LiveLesson } from '../types';

/**
 * Lesson 106 · A1 · Objeto directo e indirecto.
 * Core: lo / la / los / las for the thing or person (ver, tener, llevar),
 * le / les for the person who receives (dar, mandar). Me / te / nos only recognised.
 * Ana, Elena and Pablo deliver things at the office through the class.
 */
export const lesson: LiveLesson = {
  id: 106,
  level: 'A1',
  title: 'Objeto directo e indirecto',
  subtitle: 'No repetir nombres: usar lo, la, los, las para las cosas y personas, y le, les para quien recibe algo.',
  legend: [
    { tone: 'blue', label: 'Lo · la · los · las · la cosa o la persona (objeto directo)' },
    { tone: 'orange', label: 'Le · les · quien recibe (objeto indirecto)' },
    { tone: 'teal', label: 'Me · te · nos · yo, tú, nosotros' },
  ],
  optionNotes: {
    lo: '«Lo» sustituye una cosa o una persona masculina y singular: el libro, el mapa, a Pablo.',
    Lo: '«Lo» sustituye una cosa o una persona masculina y singular: el libro, el mapa, a Pablo.',
    la: '«La» sustituye una cosa o una persona femenina y singular: la foto, la carpeta, a Elena.',
    La: '«La» sustituye una cosa o una persona femenina y singular: la foto, la carpeta, a Elena.',
    los: '«Los» sustituye cosas o personas masculinas y plurales: los libros, a los compañeros.',
    Los: '«Los» sustituye cosas o personas masculinas y plurales: los libros, a los compañeros.',
    las: '«Las» sustituye cosas o personas femeninas y plurales: las llaves, las carpetas.',
    Las: '«Las» sustituye cosas o personas femeninas y plurales: las llaves, las carpetas.',
    le: '«Le» es para **una** persona que recibe algo: le doy, le mando. No cambia con hombre o mujer.',
    Le: '«Le» es para **una** persona que recibe algo: le doy, le mando. No cambia con hombre o mujer.',
    les: '«Les» es para **varias** personas que reciben algo: les doy, les mando.',
    Les: '«Les» es para **varias** personas que reciben algo: les doy, les mando.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'No repetir: lo, la, le', coach: 'Una palabra pequeña en lugar de un nombre.',
      steps: [
        { title: '¿Por qué usamos pronombres?', blocks: [
          { kind: 'lead', text: 'Ana tiene un libro para Elena. Mira las dos versiones: la segunda **no repite** las palabras.', en: 'Pronouns replace a noun we already know.' },
          { kind: 'guide', text: { teacher: 'Lee primero la versión con repeticiones en voz alta. Pregunta: «¿Qué suena raro?». Después lee la segunda versión.', self: 'Lee las dos versiones en voz alta. ¿Cuál suena más natural?' } },
          { kind: 'compare', title: 'El mismo texto, dos versiones', columns: [
            { tone: 'neutral', label: 'CON REPETICIONES', sentence: 'Ana tiene **el libro**. Guarda **el libro** en su bolso. Ve **a Elena** y saluda **a Elena**.', idea: 'Correcto, pero repetimos mucho.' },
            { tone: 'blue', label: 'CON PRONOMBRES', sentence: 'Ana tiene el libro. [[Lo|blue]] guarda en su bolso. Ve a Elena y [[la|blue]] saluda.', idea: 'Natural: «lo» = el libro; «la» = Elena.', en: 'She puts it in her bag. She greets her.' },
          ] },
          { kind: 'tip', icon: '📍', title: 'El lugar del pronombre', text: 'El pronombre va **delante del verbo**: «[[Lo|blue]] guardo», «[[la|blue]] veo», «[[le|orange]] doy». No va después: «guardo lo» no es correcto.', en: 'Pronoun + verb: lo tengo = I have it.' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: '«Tengo el mapa. **Lo** necesito.» ¿Qué es «lo»?', options: ['el mapa', 'yo', 'necesito'], answer: 0, why: '«Lo» sustituye «el mapa» para no repetir.' },
            { prompt: '¿Qué frase es correcta?', options: ['Veo la.', 'La veo.', 'Veo a la.'], answer: 1, why: 'El pronombre va delante del verbo: la veo.' },
          ] },
        ] },
        { title: 'Lo, la, los, las: la cosa o la persona', mascot: '/brand/mascot/studying.webp', coach: 'Lo, la, los, las: como el, la, los, las.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'LO · LA · LOS · LAS', question: '¿Qué? ¿A quién?', en: 'it · him · her · them', formula: ['lo / la / los / las + verbo'],
            meaning: 'Sustituyen **la cosa o la persona** del verbo: lo que tengo, lo que llevo, la persona que veo o saludo. Cambian como el nombre: masculino o femenino, singular o plural.',
            examples: [
              { es: 'Tengo **el mapa**: [[lo|blue]] tengo.', en: 'I have the map: I have it.' },
              { es: 'Tengo **la foto**: [[la|blue]] tengo.', en: 'I have the photo: I have it.' },
              { es: 'Busco **mis libros**: [[los|blue]] busco.', en: 'I look for my books: I look for them.' },
              { es: 'Veo **a Elena**: [[la|blue]] veo.', en: 'I see Elena: I see her.' },
            ],
            note: 'Con personas, el nombre lleva **a**: «Veo **a** Elena». Pero el pronombre es igual: [[la|blue]] veo.' },
          { kind: 'table', title: 'Cuatro formas', head: ['', 'Masculino', 'Femenino'], rows: [
            ['Singular', 'el libro → [[lo|blue]]', 'la carpeta → [[la|blue]]'],
            ['Plural', 'los libros → [[los|blue]]', 'las carpetas → [[las|blue]]'],
          ], note: 'Mira el artículo: **el** → lo, **la** → la, **los** → los, **las** → las.' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'Tengo las llaves. ___ tengo en el bolso.', options: ['Las', 'La', 'Los'], answer: 0, why: '«Las llaves»: femenino plural, las.' },
            { prompt: 'Veo a Pablo. ___ veo en la oficina.', options: ['La', 'Lo', 'Le'], answer: 1, why: 'Pablo es la persona que veo, masculino singular: lo.' },
            { prompt: 'Compro el pan. ___ compro en la panadería.', options: ['Lo', 'La', 'Los'], answer: 0, why: '«El pan»: masculino singular, lo.' },
          ] },
        ] },
        { title: 'Le, les: quien recibe', mascot: '/brand/mascot/speaking.webp', coach: 'Le y les: la persona que recibe.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'LE · LES', question: '¿A quién le doy algo?', en: 'to him · to her · to them', formula: ['le / les + dar / mandar + algo'],
            meaning: 'Con verbos como **dar** y **mandar** hay dos partes: **algo** (la cosa) y **alguien que recibe**. «Le» y «les» son para **la persona que recibe**.',
            examples: [
              { es: 'Doy un libro a Elena: [[le|orange]] doy un libro.', en: 'I give Elena a book: I give her a book.' },
              { es: '[[Le|orange]] mando un mensaje a Pablo.', en: 'I send Pablo a message.' },
              { es: '[[Les|orange]] doy las carpetas a mis compañeros.', en: 'I give the folders to my colleagues.' },
            ],
            note: 'Es normal decir el pronombre **y** la persona: «[[Le|orange]] doy un libro **a Elena**». No es una repetición: es lo más natural.' },
          { kind: 'table', title: 'Una persona o varias', head: ['Quien recibe', 'Pronombre', 'Ejemplo'], rows: [
            ['a Elena · a Pablo · a usted', '[[le|orange]]', '[[Le|orange]] doy un café.'],
            ['a Ana y Pablo · a mis amigos · a ustedes', '[[les|orange]]', '[[Les|orange]] mando una foto.'],
          ], note: '«Le» es igual para hombre y mujer. Cuenta **las personas**, no las cosas: «[[Le|orange]] doy **dos** libros a Elena».' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'Mando una foto a mis padres. ___ mando una foto.', options: ['Le', 'Les', 'Los'], answer: 1, why: 'Reciben dos personas: les.' },
            { prompt: 'Doy dos libros a Elena. ___ doy dos libros.', options: ['Le', 'Les', 'La'], answer: 0, why: 'Recibe una persona, Elena: le. Los libros no cambian el pronombre.' },
            { prompt: 'Escribo un correo a mi jefe. ___ escribo un correo.', options: ['Lo', 'Le', 'Les'], answer: 1, why: 'Mi jefe recibe el correo: le.' },
          ] },
        ] },
        { title: 'Me, te, nos', mascot: '/autoestudio/mascot/noting.webp', coach: 'Para yo, tú y nosotros, es más fácil.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'ME · TE · NOS', question: '¿Y para yo, tú, nosotros?', en: 'me · you · us', formula: ['me / te / nos + verbo'],
            meaning: 'Para **yo**, **tú** y **nosotros** hay una sola forma. Sirve para la persona que ves y también para la persona que recibe.',
            examples: [
              { es: '¿[[Me|teal]] ves? Estoy en la puerta.', en: 'Can you see me? I’m at the door.' },
              { es: '[[Te|teal]] mando una foto de la entrada.', en: 'I’ll send you a photo of the entrance.' },
              { es: 'Elena [[nos|teal]] da un café.', en: 'Elena gives us a coffee.' },
            ] },
          { kind: 'table', title: 'Todos los pronombres', head: ['Persona', 'La cosa o la persona', 'Quien recibe'], rows: [
            ['yo', '[[me|teal]]', '[[me|teal]]'],
            ['tú', '[[te|teal]]', '[[te|teal]]'],
            ['él, ella, usted', '[[lo|blue]] · [[la|blue]]', '[[le|orange]]'],
            ['nosotros, nosotras', '[[nos|teal]]', '[[nos|teal]]'],
            ['ellos, ellas, ustedes', '[[los|blue]] · [[las|blue]]', '[[les|orange]]'],
          ], note: 'Solo la tercera persona tiene dos columnas diferentes. En España también se usa «os» para vosotros.' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: '¿Puedes ayudarme? ___ necesito, por favor.', options: ['Te', 'Le', 'Lo'], answer: 0, why: 'Hablo a «tú»: te necesito.' },
            { prompt: 'Mi madre ___ llama todos los domingos a mi hermano y a mí.', options: ['les', 'nos', 'me'], answer: 1, why: 'Mi hermano y yo = nosotros: nos.' },
          ] },
        ] },
        { title: 'Cómo elegir', mascot: '/brand/mascot/seated.webp', coach: 'Pregunta: ¿qué es o quién recibe?', blocks: [
          { kind: 'decide', title: '¿Lo / la o le? Responde las preguntas', steps: [
            { q: '¿La persona **recibe** algo (le doy un libro, le mando una foto)?', yes: 'Usa **le** (una persona) o **les** (varias): «[[Le|orange]] doy el libro».', no: 'next' },
            { q: '¿Es la cosa o la persona del verbo (tengo, llevo, veo, saludo)?', yes: 'Usa **lo, la, los, las**, como el artículo: «[[La|blue]] veo», «[[Los|blue]] llevo».', no: 'Lee otra vez la frase: ¿qué verbo hay? ¿Qué o a quién?' },
          ] },
          { kind: 'compare', title: 'Elena con dos verbos', columns: [
            { tone: 'blue', label: 'VER A ALGUIEN', sentence: 'Veo a Elena: [[la|blue]] veo.', idea: 'Elena es la persona que veo.', en: 'I see her.' },
            { tone: 'orange', label: 'DAR ALGO A ALGUIEN', sentence: 'Doy un libro a Elena: [[le|orange]] doy un libro.', idea: 'Elena recibe el libro.', en: 'I give her a book.' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La «a» no decide', text: '«Veo **a** Elena» y «Doy un libro **a** Elena» tienen «a», pero son diferentes. Mira el verbo: con **ver**, Elena es la persona vista (la); con **dar**, Elena recibe (le).' },
        ] },
        { title: 'Errores frecuentes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Estos errores son muy comunes.', blocks: [
          { kind: 'guide', text: { teacher: 'Pide al alumno que encuentre el error antes de mostrar la corrección. Pregunta: «¿Qué palabra sustituye el pronombre?».', self: 'Lee cada frase, busca el error y después toca para ver la corrección.' } },
          { kind: 'mistakes', title: '¿Dónde está el error?', items: [
            { wrong: 'Tengo las llaves. Tengo las.', right: 'Tengo las llaves. Las tengo.', why: 'El pronombre va delante del verbo.' },
            { wrong: 'Tengo las carpetas. Los llevo mañana.', right: 'Tengo las carpetas. Las llevo mañana.', why: '«Las carpetas» es femenino: las.' },
            { wrong: 'Veo a Elena. Le veo.', right: 'Veo a Elena. La veo.', why: 'Con «ver», Elena es la persona vista: la.' },
            { wrong: 'Doy un libro a Elena. La doy un libro.', right: 'Doy un libro a Elena. Le doy un libro.', why: 'Elena recibe el libro: le.' },
            { wrong: 'Mando una foto a Ana y Pablo. Le mando una foto.', right: 'Mando una foto a Ana y Pablo. Les mando una foto.', why: 'Reciben dos personas: les.' },
            { wrong: 'Doy dos libros a Elena. Les doy dos libros.', right: 'Doy dos libros a Elena. Le doy dos libros.', why: '«Les» cuenta personas, no cosas: Elena es una persona.' },
          ] },
          { kind: 'teacher', text: 'Pon tres objetos reales delante del alumno. Pregunta: «¿Tienes el lápiz?» → «Sí, lo tengo». Después: «¿Me das el lápiz?» → «Sí, te doy el lápiz».' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'Los pronombres en situaciones reales', coach: 'Toca los pronombres marcados.',
      steps: [
        { title: 'Un regalo para Elena', blocks: [
          { kind: 'guide', text: { teacher: 'Lean el diálogo con papeles. Después, el alumno toca cada pronombre y dice qué palabra sustituye.', self: 'Lee el diálogo. Después toca cada pronombre marcado para descubrir qué sustituye.' } },
          { kind: 'explore', title: 'En la oficina, por la mañana', setting: 'Ana tiene un libro para Elena, su compañera de trabajo. Habla con Pablo.', lines: [
            { who: 'Pablo', text: 'Ana, ¿tienes el libro para Elena?' },
            { who: 'Ana', text: 'Sí, [[lo|blue]] tengo aquí, en mi bolso.' },
            { who: 'Pablo', text: '¿Y cuándo [[le|orange]] das el libro?' },
            { who: 'Ana', text: 'Ahora. ¿Ves a Elena? ¿Dónde está?' },
            { who: 'Pablo', text: 'Sí, [[la|blue]] veo. Está en la cocina.' },
            { who: 'Ana', text: 'Perfecto. ¿Y las fotos de la fiesta? ¿[[Las|blue]] tienes?' },
            { who: 'Pablo', text: 'Sí. ¿[[Te|teal]] mando las fotos ahora?' },
            { who: 'Ana', text: 'Sí, y también a los compañeros. [[Les|orange]] mandas las fotos por el chat, ¿de acuerdo?' },
            { who: 'Pablo', text: 'Claro. ¿Y el mapa de la sala nueva? [[Lo|blue]] necesito.' },
            { who: 'Ana', text: 'Está en mi mesa. Ahora [[te|teal]] doy el mapa.' },
          ], notes: {
            'lo': '«Lo» = **el libro**. Masculino singular, delante del verbo «tengo».',
            'le': 'Elena **recibe** el libro: le. Con el verbo «dar».',
            'la': '«La» = **Elena**, la persona que Pablo ve. Con «ver» usamos lo / la.',
            'Las': '«Las» = **las fotos**. Femenino plural.',
            'Te': 'Pablo habla a Ana (tú): **te** mando = a ti.',
            'Les': 'Los compañeros **reciben** las fotos. Son varios: les.',
            'Lo': '«Lo» = **el mapa**. Masculino singular.',
            'te': 'Ana habla a Pablo (tú): Pablo recibe el mapa. **Te** doy = a ti.',
          } },
          { kind: 'choice', title: '¿Entendiste?', items: [
            { prompt: 'En «lo tengo aquí», ¿qué tiene Ana?', options: ['El libro.', 'El mapa.', 'Las fotos.'], answer: 0, why: 'Pablo pregunta por el libro: «Sí, lo tengo».' },
            { prompt: '¿Quién recibe las fotos por el chat?', options: ['Elena.', 'Los compañeros.', 'Pablo.'], answer: 1, why: '«Les mandas las fotos por el chat»: les = los compañeros.' },
            { prompt: '¿Qué necesita Pablo?', options: ['El libro.', 'El mapa de la sala.', 'Las fotos.'], answer: 1, why: '«¿Y el mapa de la sala nueva? Lo necesito.»' },
          ] },
        ] },
        { title: 'Antes de salir de casa', blocks: [
          { kind: 'explore', title: '¿Lo tienes todo?', setting: 'Elena sale de casa. Su hermano Sergio la ayuda.', lines: [
            { who: 'Sergio', text: 'Elena, ¿tienes las llaves?' },
            { who: 'Elena', text: 'Sí, [[las|blue]] tengo.' },
            { who: 'Sergio', text: '¿Y tus gafas? Las necesitas para leer.' },
            { who: 'Elena', text: 'Ay, no. ¿[[Las|blue]] ves?' },
            { who: 'Sergio', text: 'Sí, están en la mesa. Ahora [[te|teal]] doy las gafas.' },
            { who: 'Elena', text: 'Gracias. ¿Y el regalo de mamá? Hoy [[le|orange]] doy el regalo.' },
            { who: 'Sergio', text: '[[Lo|blue]] tengo yo. ¿[[Me|teal]] esperas un minuto?' },
            { who: 'Elena', text: 'Sí. Y mamá y papá llegan a las ocho. ¿[[Les|orange]] mandas un mensaje?' },
          ], notes: {
            'las': '«Las» = **las llaves**. Femenino plural.',
            'Las': '«Las» = **las gafas**. Femenino plural, con el verbo «ver».',
            'te': 'Sergio habla a Elena: ella recibe las gafas. **Te** = a ti.',
            'le': 'Mamá **recibe** el regalo: le.',
            'Lo': '«Lo» = **el regalo**. Masculino singular.',
            'Me': 'Elena espera a Sergio (yo): **me** esperas.',
            'Les': 'Mamá y papá **reciben** el mensaje. Son dos: les.',
          } },
          { kind: 'teacher', text: 'Pregunta: «¿Qué tienes en tu bolso o mochila ahora?». El alumno responde con pronombres: «El teléfono: lo tengo. Las llaves: las tengo».' },
        ] },
        { title: '¿La cosa o quien recibe?', blocks: [
          { kind: 'classify', title: 'Clasifica los pronombres de las dos conversaciones', categories: [
            { id: 'od', label: 'La cosa o la persona · lo, la, los, las', tone: 'blue' },
            { id: 'oi', label: 'Quien recibe · le, les', tone: 'orange' },
          ], items: [
            { text: 'Sí, lo tengo aquí. (el libro)', answer: 'od', why: '«Lo» sustituye la cosa: el libro.' },
            { text: '¿Cuándo le das el libro? (a Elena)', answer: 'oi', why: 'Elena recibe el libro.' },
            { text: 'Sí, la veo. (a Elena)', answer: 'od', why: 'Con «ver», Elena es la persona vista.' },
            { text: 'Les mandas las fotos. (a los compañeros)', answer: 'oi', why: 'Los compañeros reciben las fotos.' },
            { text: 'Sí, las tengo. (las llaves)', answer: 'od', why: '«Las» sustituye las llaves.' },
            { text: 'Hoy le doy el regalo. (a mamá)', answer: 'oi', why: 'Mamá recibe el regalo.' },
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
            { context: 'Tengo dos carpetas.', prompt: '___ llevo mañana.', options: ['Las', 'Les', 'La'], answer: 0, why: '«Las carpetas»: femenino plural, las.', en: 'I’ll take them tomorrow.' },
            { context: 'Doy dos libros a Elena.', prompt: '___ doy dos libros.', options: ['La', 'Les', 'Le'], answer: 2, why: 'Elena es una sola persona que recibe: le.' },
            { context: 'Mando una foto a Ana y Pablo.', prompt: '___ mando una foto.', options: ['Los', 'Le', 'Les'], answer: 2, why: 'Reciben dos personas: les.' },
            { context: '¿Dónde está el mapa?', prompt: 'No sé. No ___ veo.', options: ['lo', 'le', 'la'], answer: 0, why: '«El mapa»: masculino singular, lo.' },
            { context: 'Saludo a mis vecinas.', prompt: '___ saludo todos los días.', options: ['Las', 'Les', 'Los'], answer: 0, why: 'Con «saludar», las vecinas son las personas saludadas, femenino plural: las.' },
            { context: 'Tu amigo te pregunta: «¿Me escribes mañana?».', prompt: 'Sí, ___ escribo mañana.', options: ['te', 'le', 'me'], answer: 0, why: 'Respondes a tu amigo (tú): te escribo.' },
          ] },
        ] },
        { title: 'Compara los significados', blocks: [
          { kind: 'choice', items: [
            { prompt: 'Hablas de Elena. ¿Qué frase dice que **ves** a Elena?', options: ['La veo.', 'Le doy un libro.'], answer: 0, why: '«La veo»: Elena es la persona vista.' },
            { prompt: '¿Qué frase dice que Elena **recibe** algo?', options: ['La saludo.', 'Le mando una foto.'], answer: 1, why: '«Le mando una foto»: Elena recibe la foto.' },
            { prompt: '«Les doy las carpetas.» ¿Cuántas personas reciben?', options: ['Una.', 'Varias.'], answer: 1, why: '«Les» = varias personas.' },
            { prompt: '«Lo necesito.» Antes alguien dice…', options: ['¿Tienes la foto?', '¿Tienes el mapa?', '¿Tienes las llaves?'], answer: 1, why: '«Lo» es masculino singular: el mapa.' },
            { prompt: '«Te mando una foto.» ¿Quién recibe la foto?', options: ['Yo.', 'Tú.', 'Otra persona.'], answer: 1, why: '«Te» = a ti.' },
          ] },
        ] },
        { title: 'Completa la conversación', blocks: [
          { kind: 'chat-fill', title: 'Preparando una fiesta', lines: [
            { who: 'Marta', text: '¿Tienes los platos?' },
            { who: 'Luis', text: 'Sí, ___ tengo en la cocina.', options: ['los', 'las', 'les'], answer: 0, why: '«Los platos»: masculino plural, los.' },
            { who: 'Marta', text: '¿Y la tarta? ¿___ compras tú?', options: ['La', 'Le', 'Lo'], answer: 0, why: '«La tarta»: femenino singular, la.' },
            { who: 'Luis', text: 'Sí. ¿Y los invitados? ¿___ mandas la dirección?', options: ['Los', 'Les', 'Le'], answer: 1, why: 'Los invitados reciben la dirección: les.' },
            { who: 'Marta', text: 'Ya está. Y a la abuela ___ llevo flores.', options: ['la', 'le', 'les'], answer: 1, why: 'La abuela recibe las flores: le.' },
            { who: 'Luis', text: '¡Qué bien! ¿Y la música? ¿___ pones tú?', options: ['La', 'Le', 'Las'], answer: 0, why: '«La música»: femenino singular, la.' },
          ] },
        ] },
        { title: '¿Lo, la o le?', blocks: [
          { kind: 'classify', title: 'Elige el pronombre para la parte en negrita', categories: [
            { id: 'lo', label: 'lo', tone: 'blue' },
            { id: 'la', label: 'la', tone: 'blue' },
            { id: 'le', label: 'le', tone: 'orange' },
          ], items: [
            { text: 'Veo **a Pablo** en el parque.', answer: 'lo', why: 'Pablo es la persona vista, masculino: lo.' },
            { text: 'Doy un regalo **a Pablo**.', answer: 'le', why: 'Pablo recibe el regalo: le.' },
            { text: 'Leo **la revista**.', answer: 'la', why: '«La revista»: femenino singular.' },
            { text: 'Mando un mensaje **a mi madre**.', answer: 'le', why: 'Mi madre recibe el mensaje: le.' },
            { text: 'Necesito **el teléfono**.', answer: 'lo', why: '«El teléfono»: masculino singular.' },
            { text: 'Saludo **a la profesora**.', answer: 'la', why: 'Con «saludar», la profesora es la persona saludada: la.' },
          ] },
        ] },
        { title: 'Encuentra el error', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Tengo el mapa. Lo necesito.', ok: true, why: 'Correcta: «lo» = el mapa, delante del verbo.' },
            { sentence: 'Compro las flores y regalo las a Ana.', ok: false, options: ['Compro las flores y las regalo a Ana.', 'Compro las flores y les regalo a Ana.', 'Compro las flores y los regalo a Ana.'], answer: 0, why: 'El pronombre va delante del verbo: las regalo.' },
            { sentence: 'Veo a mis amigos y les saludo.', ok: false, options: ['Veo a mis amigos y los saludo.', 'Veo a mis amigos y le saludo.', 'Veo a mis amigos y saludo les.'], answer: 0, why: 'Con «saludar», los amigos son las personas saludadas: los.' },
            { sentence: 'Le doy un café a mi compañero.', ok: true, why: 'Correcta: mi compañero recibe el café.' },
            { sentence: 'Escribo a mis abuelos. Le escribo una carta.', ok: false, options: ['Les escribo una carta.', 'Los escribo una carta.', 'Lo escribo una carta.'], answer: 0, why: 'Reciben dos personas: les.' },
            { sentence: 'Tengo la llave. La tengo.', ok: true, why: 'Correcta: «la» = la llave.' },
          ] },
        ] },
        { title: 'Construye y reescribe', blocks: [
          { kind: 'build', title: 'Ordena las palabras', items: [
            { tiles: ['tengo', 'Las', 'en el bolso'], accept: ['Las tengo en el bolso'], en: 'I have them in my bag.' },
            { tiles: ['doy', 'Le', 'un libro'], accept: ['Le doy un libro'], en: 'I give him/her a book.' },
            { tiles: ['mando', 'Les', 'una foto', 'por la tarde'], accept: ['Les mando una foto por la tarde', 'Por la tarde les mando una foto'], en: 'I send them a photo in the afternoon.' },
            { tiles: ['veo', 'La', 'en la oficina'], accept: ['La veo en la oficina', 'En la oficina la veo'], en: 'I see her at the office.' },
          ] },
          { kind: 'rewrite', title: 'Escribe sin repetir', items: [
            { prompt: 'Tengo el mapa. Necesito el mapa.', instruction: 'Cambia el segundo «el mapa» por un pronombre.', accept: ['Tengo el mapa Lo necesito', 'Tengo el mapa y lo necesito'] },
            { prompt: 'Mando una carpeta a Elena.', instruction: 'Cambia «a Elena» por un pronombre.', accept: ['Le mando una carpeta'] },
            { prompt: 'Veo a Elena.', instruction: 'Cambia «a Elena» por un pronombre.', accept: ['La veo'] },
            { prompt: 'Doy las carpetas a mis compañeros.', instruction: 'Cambia «a mis compañeros» por un pronombre.', accept: ['Les doy las carpetas', 'Les doy las carpetas a mis compañeros'] },
          ] },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'La entrega en la oficina', coach: 'Primero escucha sin leer.',
      steps: [
        { title: 'La entrega en la oficina', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha con la idea general. En la segunda, el alumno anota qué cosas hay y quién las recibe antes de responder.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Puedes bajar la velocidad.' } },
          { kind: 'listen', title: 'Un compañero llama a Ana', channel: 'NOTA DE VOZ · PARA ANA', src: '/audio/grammar-classroom/106.mp3',
            before: 'Un compañero le deja una nota de voz a Ana. Tiene carpetas nuevas para la oficina. ¿Qué crees que va a hacer con ellas?',
            gist: { prompt: '¿De qué habla el mensaje?', options: ['De la entrega de las carpetas en la oficina.', 'De una fiesta en la oficina.', 'De un problema con el mapa.'], answer: 0, why: '«Tengo las carpetas nuevas y las llevo a la oficina.»' },
            details: [
              { prompt: '¿Quién recibe una carpeta esta tarde?', options: ['Ana.', 'Pablo.', 'Los otros compañeros.'], answer: 1, why: '«Veo a Pablo esta tarde y le doy una carpeta.»' },
              { prompt: '¿Cuándo reciben las carpetas los otros compañeros?', options: ['Esta tarde.', 'Mañana.', 'Hoy por la mañana.'], answer: 1, why: '«A los otros compañeros les doy las carpetas mañana.»' },
              { prompt: '¿Para qué necesita el mapa?', options: ['Para encontrar la mesa.', 'Para llevar las carpetas.', 'Para encontrar la oficina.'], answer: 0, why: '«Lo necesito para encontrar la mesa.»' },
              { prompt: '¿Qué le manda a Ana?', options: ['Una carpeta.', 'El mapa.', 'Una foto de la entrada.'], answer: 2, why: '«También te mando una foto de la entrada.»' },
              { prompt: 'En «las llevo a la oficina», ¿qué es «las»?', options: ['Las carpetas.', 'Las mesas.', 'Las compañeras.'], answer: 0, why: '«Tengo las carpetas nuevas y las llevo»: las = las carpetas.' },
            ],
            transcript: 'Hola, Ana. Tengo las carpetas nuevas y [[las|blue]] llevo a la oficina. Veo a Pablo esta tarde y [[le|orange]] doy una carpeta. A los otros compañeros [[les|orange]] doy las carpetas mañana. ¿Tienes el mapa de la sala? [[Lo|blue]] necesito para encontrar la mesa. También [[te|teal]] mando una foto de la entrada.',
            reply: { teacher: 'El alumno responde en voz alta como si fuera Ana: ¿tiene el mapa? ¿Se lo manda? Ayuda con «Sí, lo tengo» y «Te mando…».', self: 'Responde al mensaje como si fueras Ana. Di si tienes el mapa y qué le mandas. Usa «lo» y «te» al menos una vez.' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Cosas y personas de tu vida', coach: 'Una pregunta por vez. No repitas los nombres.',
      steps: [
        { title: 'Cosas y personas de tu vida', blocks: [
          { kind: 'guide', text: { teacher: 'No hace falta usar todas las preguntas. Haz preguntas con el nombre («¿Tienes el teléfono?») para que el alumno responda con el pronombre («Sí, lo tengo»).', self: 'Responde cada pregunta en voz alta. Intenta no repetir el nombre: usa lo, la, los, las, le o les.' } },
          { kind: 'talk', cards: [
            { q: '¿Qué cosas tienes ahora en tu bolso o mochila?', followUps: ['¿Tienes las llaves?', '¿Y el teléfono? ¿Dónde lo tienes?', '¿Qué cosa necesitas siempre?'], phrases: ['Sí, [[las|blue]] tengo.', 'No, no [[lo|blue]] tengo.', '[[Lo|blue]] necesito para…'], hint: 'Con «no», el pronombre va después de «no» y antes del verbo: «No lo tengo».', example: 'Tengo el teléfono, las llaves y un libro. El teléfono lo tengo siempre en la mano. Las gafas no las tengo: están en casa.', next: 'Ahora, las personas que ves.', teacher: 'Haz preguntas rápidas con objetos: «¿Y la cartera?», «¿Y los auriculares?».' },
            { q: '¿A quién ves todos los días?', followUps: ['¿Dónde lo ves o la ves?', '¿Cómo lo saludas o la saludas?', '¿A quién no ves desde hace mucho?'], phrases: ['Veo a mi… [[Lo|blue]] veo en…', '[[La|blue]] saludo con un beso.', '[[Los|blue]] veo los domingos.'], hint: 'Persona masculina: lo veo. Femenina: la veo. Varias: los o las veo.', example: 'Veo a mi compañera Rosa todos los días. La veo en la oficina. La saludo con un «¡Buenos días!».', next: 'Hablemos de regalos.' },
            { q: '¿Qué le regalas a tu mejor amigo o amiga en su cumpleaños?', followUps: ['¿Le compras algo o lo haces tú?', '¿Qué le regalas a tu familia?', '¿Te gusta recibir regalos?'], phrases: ['[[Le|orange]] regalo un libro.', '[[Les|orange]] compro flores.', '[[Me|teal]] regalan…'], hint: 'La persona que recibe el regalo: le (una) o les (varias).', example: 'A mi amiga Lucía le regalo libros porque lee mucho. A mis padres les compro flores o les preparo una cena.', next: 'Ahora, mensajes y fotos.' },
            { q: '¿A quién le mandas mensajes o fotos?', followUps: ['¿Qué fotos les mandas a tus amigos?', '¿Le escribes a tu familia todos los días?', '¿Quién te escribe más a ti?'], phrases: ['[[Le|orange]] mando fotos a…', '[[Les|orange]] escribo por la noche.', '[[Me|teal]] escribe mi…'], hint: 'Mandar y escribir: la persona que recibe va con le o les.', example: 'Le mando muchos mensajes a mi hermana. A mis amigos les mando fotos de mi perro. Mi madre me escribe todos los días.', next: 'Y en tu casa, ¿quién hace qué?' },
            { q: '¿Quién hace las tareas de la casa? ¿Quién lava los platos?', followUps: ['¿Quién hace las compras?', '¿Quién prepara la cena?', '¿Qué tarea no te gusta?'], phrases: ['[[Los|blue]] lavo yo.', '[[La|blue]] hace mi pareja.', 'No [[lo|blue]] hago nunca.'], hint: '«Los platos»: los lavo. «La cena»: la preparo.', example: 'Los platos los lavo yo. Las compras las hace mi pareja. La cena la preparamos juntos.', next: 'Para terminar, una despedida especial.' },
            { q: 'Un amigo se va a vivir a otro país. ¿Qué le das antes de irse?', followUps: ['¿Le escribes una carta?', '¿Lo vas a visitar?', '¿Qué le dices el último día?'], phrases: ['[[Le|orange]] doy…', '[[Lo|blue]] voy a visitar.', '[[Le|orange]] digo: «…».'], hint: 'Puedes usar «Le doy…» y «Le digo…» para la persona que recibe.', example: 'Le doy una foto de nuestro grupo y le escribo una carta. Le digo: «Te voy a visitar pronto».', teacher: 'Si el alumno usa «lo/la» con «dar», vuelve a la pregunta: «¿Quién recibe?».' },
          ], swap: { teacher: 'Al final, cambien los papeles: el alumno te pregunta «¿Tienes…?» y «¿Qué le regalas a…?».', self: 'Escribe tres preguntas con «¿Tienes…?» y «¿Qué le regalas a…?» y házselas a alguien esta semana.' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Una nota sobre dos entregas', coach: 'Primero el nombre, después el pronombre.',
      steps: [
        { title: 'Una nota sobre dos entregas', blocks: [
          { kind: 'guide', text: { teacher: 'Puede escribir en clase o como tarea. Usen la revisión automática y después revisen juntos que cada pronombre tenga un nombre claro antes.', self: 'Escribe tu nota y toca «Revisar mi texto». Comprueba que cada pronombre sustituye un nombre que ya está en el texto.' } },
          { kind: 'write', title: 'Cosas para entregar', situation: 'Mañana llevas cosas a tu trabajo o a tu clase. Escribe una nota a un compañero: qué tienes y a quién se lo das.', task: [
            'Presenta **dos cosas** con su nombre: el libro, las carpetas…',
            'Usa **lo, la, los o las** para no repetir las cosas.',
            'Di **a quién** das o mandas algo con **le** o **les**.',
            'Termina con algo para tu compañero: «Te mando…».',
          ], starters: ['Tengo… y lo / la llevo…', 'Veo a… y le doy…', 'A… les mando…', 'Te mando…'],
            words: ['tengo', 'llevo', 'necesito', 'doy', 'mando', 'mañana', 'por la tarde', 'una foto', 'las carpetas'],
            model: 'Tengo las carpetas y [[las|blue]] llevo mañana. Veo a Elena por la mañana y [[le|orange]] doy una carpeta. A Pablo y Ana [[les|orange]] mando una foto de la sala. Tengo también el mapa y [[lo|blue]] necesito para encontrar la mesa. [[Te|teal]] mando el mapa esta noche.',
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
            { tone: 'blue', label: 'LO · LA · LOS · LAS', formula: 'pronombre + verbo', example: 'Tengo el mapa: lo tengo. Veo a Elena: la veo.', caption: 'La cosa o la persona. Como el artículo.', en: 'it · him · her · them' },
            { tone: 'orange', label: 'LE · LES', formula: 'le / les + dar / mandar + algo', example: 'Le doy un libro a Elena.', caption: 'Quien recibe. Una persona o varias.', en: 'to him · to her · to them' },
            { tone: 'teal', label: 'ME · TE · NOS', formula: 'me / te / nos + verbo', example: 'Te mando una foto.', caption: 'Una sola forma para las dos funciones.', en: 'me · you · us' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'Mira el verbo', text: '¿Ves, tienes, llevas algo o a alguien? **Lo, la, los, las**. ¿Alguien **recibe** algo (dar, mandar)? **Le, les**. Y el pronombre va **delante del verbo**.' },
        ] },
        { title: 'Desafío final', blocks: [
          { kind: 'choice', title: 'Cuatro frases, sin ayuda', items: [
            { prompt: 'Tengo las entradas del cine. ___ tengo en el bolso.', options: ['Las', 'Les', 'Los'], answer: 0, why: '«Las entradas»: femenino plural.' },
            { prompt: 'Veo a mi abuelo los domingos. ___ veo en su casa.', options: ['Le', 'Lo', 'La'], answer: 1, why: 'Con «ver», el abuelo es la persona vista: lo.' },
            { prompt: 'Mando una postal a mis primos. ___ mando una postal.', options: ['Les', 'Los', 'Le'], answer: 0, why: 'Varios primos reciben: les.' },
            { prompt: 'Doy las llaves a Marta. ___ doy las llaves.', options: ['Las', 'Le', 'Les'], answer: 1, why: 'Marta recibe las llaves: le. Las llaves no cuentan.' },
          ] },
        ] },
        { title: 'Tus errores y repaso', blocks: [
          { kind: 'review' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: compara «la veo» y «le doy un libro» cuando hablas de Elena. «La» es la persona que veo; «le» es la persona que recibe el libro.' },
        ] },
      ],
    },
  ],
};
