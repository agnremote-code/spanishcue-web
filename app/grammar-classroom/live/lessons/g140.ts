import type { LiveLesson } from '../types';

/**
 * Lesson 140 · A1 · Presente de indicativo.
 * Nora, who works in a bookshop, runs through every section: her routine,
 * what she is doing now, and simple general facts.
 */
export const lesson: LiveLesson = {
  id: 140,
  level: 'A1',
  title: 'Presente de indicativo',
  subtitle: 'Hablar de tu rutina, de lo que haces ahora y de cosas que son siempre así.',
  legend: [
    { tone: 'blue', label: 'Rutina · lo que haces normalmente' },
    { tone: 'teal', label: 'Ahora · lo que pasa en este momento' },
    { tone: 'violet', label: 'Siempre es así · un hecho general' },
  ],
  optionNotes: {
    'salió': '«Salió» es pasado. Aquí hablamos de una rutina: presente.',
    'saldrá': '«Saldrá» es futuro. Aquí hablamos de una rutina: presente.',
    toman: '«Toman» es para ellos, ellas o ustedes.',
    tomemos: '«Tomemos» no es presente de indicativo. Con nosotros: tomamos.',
    trabaja: '«Trabaja» es para él, ella o usted.',
    trabajamos: '«Trabajamos» es para nosotros.',
    trabajas: '«Trabajas» es para tú.',
    viven: '«Viven» es para ellos, ellas o ustedes.',
    vivimos: '«Vivimos» es para nosotros.',
    vivo: '«Vivo» es para yo.',
    vive: '«Vive» es para él, ella o usted.',
    comes: '«Comes» es para tú.',
    come: '«Come» es para él, ella o usted.',
    comen: '«Comen» es para ellos, ellas o ustedes.',
    hablo: '«Hablo» es para yo.',
    habla: '«Habla» es para él, ella o usted.',
    hablan: '«Hablan» es para ellos, ellas o ustedes.',
    salo: 'Salir es especial en la forma de yo: salgo.',
    haco: 'Hacer es especial en la forma de yo: hago.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'El presente', coach: 'Un tiempo verbal para tu día a día.',
      steps: [
        { title: 'La rutina de Nora', blocks: [
          { kind: 'lead', text: 'Nora trabaja en una librería. **Todos los días** abre la tienda a las nueve. Para hablar de lo que hacemos normalmente, usamos el **presente**.', en: 'We use the present tense for routines.' },
          { kind: 'guide', text: { teacher: 'Lean los ejemplos y pregunta: «¿Esto pasa una vez o muchas veces?». Tu alumno da un ejemplo de su rutina.', self: 'Lee los ejemplos. Fíjate en las palabras que dicen «muchas veces»: todos los días, los lunes, normalmente.' } },
          { kind: 'concept', tone: 'blue', label: 'RUTINA', question: '¿Qué haces normalmente?', en: 'habits and routines', formula: ['verbo en presente + todos los días / los lunes / normalmente / siempre'],
            meaning: 'El presente cuenta **lo que hacemos normalmente**: hábitos, horarios y costumbres.',
            examples: [
              { es: 'Nora [[abre|blue]] la tienda a las nueve.', en: 'Nora opens the shop at nine.' },
              { es: '[[Como|blue]] con una compañera a la una.', en: 'I have lunch with a colleague at one.' },
              { es: 'Los sábados [[visito|blue]] a mi familia.', en: 'On Saturdays I visit my family.' },
              { es: 'Normalmente [[estudias|blue]] por la noche.', en: 'You usually study at night.' },
            ],
            note: 'Palabras útiles: **todos los días**, **los lunes**, **siempre**, **normalmente**, **a veces**, **nunca**.' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: '«Nora abre la tienda a las nueve.» ¿Qué expresa?', options: ['Una rutina: lo hace todos los días.', 'Algo que pasó ayer.', 'Un plan para el año que viene.'], answer: 0, why: 'Abrir la tienda a las nueve es su horario normal: una rutina.' },
            { prompt: '¿Qué palabra dice que algo es una rutina?', options: ['ayer', 'todos los días', 'mañana'], answer: 1, why: '«Todos los días» indica un hábito.' },
          ] },
        ] },
        { title: 'Cómo se forma', mascot: '/brand/mascot/studying.webp', coach: 'Raíz + terminación.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'RAÍZ + TERMINACIÓN', question: '¿Cómo se forma?', en: 'stem + ending', formula: ['infinitivo − ar / er / ir = raíz', 'raíz + terminación de la persona'],
            meaning: 'Quita **-ar**, **-er** o **-ir** del infinitivo. Después agrega la terminación de la persona: yo, tú, él…',
            examples: [
              { es: 'habl**ar** → yo habl**o**', en: 'speak → I speak' },
              { es: 'com**er** → tú com**es**', en: 'eat → you eat' },
              { es: 'viv**ir** → nosotros viv**imos**', en: 'live → we live' },
            ] },
          { kind: 'table', title: 'Presente regular', head: ['Persona', 'hablar', 'comer', 'vivir'], rows: [
            ['yo', 'habl**o**', 'com**o**', 'viv**o**'],
            ['tú', 'habl**as**', 'com**es**', 'viv**es**'],
            ['él / ella / usted', 'habl**a**', 'com**e**', 'viv**e**'],
            ['nosotros / nosotras', 'habl**amos**', 'com**emos**', 'viv**imos**'],
            ['vosotros / vosotras', 'habl**áis**', 'com**éis**', 'viv**ís**'],
            ['ellos / ellas / ustedes', 'habl**an**', 'com**en**', 'viv**en**'],
          ], note: '**Vosotros** se usa en España. En América Latina, para varias personas, se usa **ustedes**: «Ustedes hablan».' },
          { kind: 'tip', icon: '🔑', title: '-er y -ir son casi iguales', text: 'Comer y vivir tienen las mismas terminaciones, menos con **nosotros** (com**emos** / viv**imos**) y **vosotros** (com**éis** / viv**ís**).', en: '-er and -ir verbs share most endings.' },
          { kind: 'tip', icon: '❓', title: 'Negar y preguntar', text: 'Para negar, pon **no** antes del verbo: «**No** trabajo aquí». Para preguntar, usa los signos ¿? y sube la voz al final: «¿Vives en Madrid?».', en: 'No before the verb; questions with ¿? and rising intonation.' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'Nosotros ___ café por la mañana.', options: ['tomamos', 'toman', 'tomemos'], answer: 0, why: 'Tomar, con nosotros: tom + amos.' },
            { prompt: 'Tú ___ cerca del centro.', options: ['viven', 'vives', 'vivimos'], answer: 1, why: 'Vivir, con tú: viv + es.' },
            { prompt: 'Mis padres ___ inglés y español.', options: ['hablan', 'habla', 'hablo'], answer: 0, why: 'Mis padres = ellos: habl + an.' },
          ] },
        ] },
        { title: 'Ahora y siempre', mascot: '/brand/mascot/speaking.webp', coach: 'El presente también dice «ahora».', blocks: [
          { kind: 'concept', tone: 'teal', label: 'AHORA', question: '¿Qué haces en este momento?', en: 'right now', formula: ['ahora / en este momento + verbo en presente'],
            meaning: 'El presente también cuenta **lo que pasa ahora**, en este momento o en este período.',
            examples: [
              { es: 'Ahora Nora [[escribe|teal]] un mensaje a un cliente.', en: 'Nora is writing a message to a customer now.' },
              { es: '¿Dónde [[estás|teal]]? —[[Estoy|teal]] en casa.', en: 'Where are you? —I’m at home.' },
              { es: 'Este mes [[trabajo|teal]] por la tarde.', en: 'This month I’m working afternoons.' },
            ] },
          { kind: 'concept', tone: 'violet', label: 'SIEMPRE ES ASÍ', question: '¿Es verdad siempre?', en: 'general facts', formula: ['verbo en presente para hechos generales'],
            meaning: 'El presente dice cosas que **son verdad siempre** o en general.',
            examples: [
              { es: 'El agua [[hierve|violet]] a cien grados.', en: 'Water boils at a hundred degrees.' },
              { es: 'En Chile [[hablan|violet]] español.', en: 'In Chile they speak Spanish.' },
              { es: 'Las librerías [[venden|violet]] libros y revistas.', en: 'Bookshops sell books and magazines.' },
            ] },
          { kind: 'compare', title: 'El mismo verbo, dos ideas', columns: [
            { tone: 'blue', label: 'RUTINA', sentence: 'Los lunes [[escribo|blue]] notas en español.', idea: 'Lo hago muchas veces: es un hábito.', en: 'habit' },
            { tone: 'teal', label: 'AHORA', sentence: 'Ahora [[escribo|teal]] un mensaje.', idea: 'Lo hago en este momento.', en: 'right now' },
          ] },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: '«Ahora escribo un mensaje.» ¿Qué expresa?', options: ['Una acción de este momento.', 'Un hábito.', 'Un hecho general.'], answer: 0, why: '«Ahora» marca el momento actual.' },
            { prompt: '«El sol sale por el este.» ¿Qué expresa?', options: ['Una rutina personal.', 'Un hecho general.', 'Una acción de ahora.'], answer: 1, why: 'Es verdad siempre: un hecho general.' },
          ] },
        ] },
        { title: 'Verbos especiales con yo', mascot: '/autoestudio/mascot/noting.webp', coach: 'Unos pocos verbos cambian con yo.', blocks: [
          { kind: 'lead', text: 'Los verbos regulares siguen la tabla. Algunos verbos muy frecuentes son **diferentes en la forma de yo**. Las otras personas son casi regulares.', en: 'Some very common verbs are irregular in the “yo” form.' },
          { kind: 'table', title: 'Diferentes con yo', head: ['Infinitivo', 'yo', 'tú', 'él / ella'], rows: [
            ['hacer', '**hago**', 'haces', 'hace'],
            ['salir', '**salgo**', 'sales', 'sale'],
            ['tener', '**tengo**', 'tienes', 'tiene'],
            ['ser', '**soy**', 'eres', 'es'],
            ['estar', '**estoy**', 'estás', 'está'],
            ['ir', '**voy**', 'vas', 'va'],
          ], note: 'Hoy solo necesitas reconocerlos y usar la forma de **yo** en tu rutina: «**Salgo** de casa a las ocho».' },
          { kind: 'tip', icon: '👀', title: 'Para más adelante', text: 'Otros verbos cambian la vocal de la raíz: c**ie**rro, emp**ie**zo, p**ue**do. Los vas a ver en el audio de hoy, pero los estudiamos en otra clase.', en: 'Stem-changing verbs come later.' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'Todos los días yo ___ de casa a las siete.', options: ['salgo', 'salo', 'sale'], answer: 0, why: 'Salir es especial con yo: salgo.' },
            { prompt: 'Los domingos ___ la comida para toda la semana.', options: ['haco', 'hago', 'hace'], answer: 1, why: 'Hacer es especial con yo: hago.' },
          ] },
        ] },
        { title: 'Cómo elegir', mascot: '/brand/mascot/seated.webp', coach: 'Primero la persona, después la idea.', blocks: [
          { kind: 'decide', title: 'Para cada frase en presente, responde', steps: [
            { q: '¿Sabes quién hace la acción (yo, tú, ella, nosotros…)?', yes: 'next', no: 'Busca el sujeto. La terminación depende de la persona: habl**o**, habl**as**, habl**a**…' },
            { q: '¿La acción pasa muchas veces?', yes: 'Es una **rutina**: «Los sábados [[visito|blue]] a mi familia».', no: 'Si pasa en este momento, es **ahora**: «Ahora [[escribo|teal]] un mensaje». Si es verdad siempre, es un **hecho general**: «El agua [[hierve|violet]] a cien grados».' },
          ] },
          { kind: 'tip', icon: '✋', title: 'Sin pronombre', text: 'En español el pronombre no es obligatorio: la terminación ya dice la persona. «**Trabajo** en una tienda» = «Yo trabajo en una tienda».', en: 'The ending shows the person, so “yo” is optional.' },
        ] },
        { title: 'Errores frecuentes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Mira la terminación.', blocks: [
          { kind: 'guide', text: { teacher: 'Tu alumno busca el error antes de que muestres la corrección.', self: 'Lee cada frase, busca el error y después toca para ver la corrección.' } },
          { kind: 'mistakes', title: '¿Dónde está el error?', items: [
            { wrong: 'Yo trabaja en una oficina.', right: 'Yo trabajo en una oficina.', why: 'Con yo, la terminación es -o.' },
            { wrong: 'Nosotros vivemos en el centro.', right: 'Nosotros vivimos en el centro.', why: 'Vivir es -ir: con nosotros, -imos.' },
            { wrong: 'Ella comes a la una.', right: 'Ella come a la una.', why: '«Comes» es para tú. Con ella: come.' },
            { wrong: 'Yo salo a las ocho.', right: 'Yo salgo a las ocho.', why: 'Salir es especial con yo: salgo.' },
            { wrong: 'Trabajo no los domingos.', right: 'No trabajo los domingos.', why: '«No» va antes del verbo.' },
            { wrong: 'Yo estoy trabajo aquí todos los días.', right: 'Yo trabajo aquí todos los días.', why: 'Para una rutina basta el verbo en presente: trabajo.' },
          ] },
          { kind: 'teacher', text: 'Pide tres frases verdaderas: una rutina, una acción de ahora y un hecho general. Pregunta: «¿Muchas veces, ahora o siempre?».' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'El presente en situaciones reales', coach: 'Toca los verbos marcados.',
      steps: [
        { title: 'En la librería', blocks: [
          { kind: 'guide', text: { teacher: 'Lean el diálogo con papeles. Después, el alumno toca cada verbo marcado y dice si es rutina, ahora o hecho general.', self: 'Lee el diálogo. Después toca cada verbo marcado para descubrir por qué se usó.' } },
          { kind: 'explore', title: 'Una clienta nueva', setting: 'Una mañana en la librería. Una turista habla con Nora.', lines: [
            { who: 'Clienta', text: 'Buenos días. ¿[[Venden|violet]] libros en inglés?', en: 'Do you sell books in English?' },
            { who: 'Nora', text: 'Sí, claro. Están en esa mesa. ¿[[Busca|teal]] algo especial?' },
            { who: 'Clienta', text: 'Sí, un libro de viajes. [[Viajo|blue]] mucho por mi trabajo.' },
            { who: 'Nora', text: '¡Qué bien! ¿Y habla español?' },
            { who: 'Clienta', text: 'Un poco. [[Estudio|blue]] español los martes y los jueves.' },
            { who: 'Nora', text: 'Yo también [[aprendo|blue]] idiomas. Ahora [[estudio|teal]] inglés para hablar con los turistas.' },
            { who: 'Clienta', text: '¿A qué hora [[abren|blue]] los sábados?' },
            { who: 'Nora', text: 'Los sábados [[abrimos|blue]] a las diez y [[cerramos|blue]] a las dos.' },
            { who: 'Clienta', text: 'Perfecto. ¿Y aceptan tarjeta?' },
            { who: 'Nora', text: 'Sí. Un momento, por favor: ahora [[preparo|teal]] su bolsa.' },
            { who: 'Clienta', text: 'Gracias. ¡Los libros siempre [[ayudan|violet]] a aprender!' },
          ], notes: {
            'Venden': 'Una pregunta general sobre la tienda: qué cosas venden. Es verdad siempre, no solo hoy.',
            'Busca': 'Nora pregunta por **este momento**: ¿qué busca ahora? Forma de **usted**: busca.',
            'Viajo': 'Una costumbre de la clienta: **viaja muchas veces** por su trabajo. Yo: viaj + o.',
            'Estudio': '«**Los martes y los jueves**» indica una rutina. Yo: estudi + o.',
            'aprendo': 'Aprender es -er. Con yo: aprend + o. Habla de un hábito: a Nora le gustan los idiomas.',
            'estudio': '«**Ahora**» indica este período. El mismo verbo, otra idea: lo que hace en este momento de su vida.',
            'abren': 'Una pregunta por el **horario**: algo que pasa todos los sábados. Ellos / ustedes: abr + en.',
            'abrimos': 'Nora habla de su equipo: **nosotros**. Abrir es -ir: abr + imos.',
            'cerramos': 'También horario, con nosotros. Cerrar cambia con yo (cierro), pero con nosotros es regular: cerramos.',
            'preparo': '«**Ahora**»: Nora prepara la bolsa en este momento.',
            'ayudan': 'Una idea general, verdad para todos: los libros ayudan a aprender.',
          } },
          { kind: 'choice', title: '¿Entendiste?', items: [
            { prompt: '¿Cuándo estudia español la clienta?', options: ['Los martes y los jueves.', 'Todos los días.', 'Los sábados.'], answer: 0, why: '«Estudio español los martes y los jueves».' },
            { prompt: '¿A qué hora cierra la librería los sábados?', options: ['A las diez.', 'A las dos.', 'A las nueve.'], answer: 1, why: '«Los sábados abrimos a las diez y cerramos a las dos».' },
            { prompt: '¿Qué hace Nora al final del diálogo?', options: ['Prepara la bolsa.', 'Cierra la tienda.', 'Estudia inglés.'], answer: 0, why: '«Ahora preparo su bolsa».' },
          ] },
        ] },
        { title: '¿Rutina, ahora o siempre?', blocks: [
          { kind: 'classify', title: 'Clasifica las frases', categories: [
            { id: 'rutina', label: 'Rutina', tone: 'blue' },
            { id: 'ahora', label: 'Ahora', tone: 'teal' },
            { id: 'general', label: 'Siempre es así', tone: 'violet' },
          ], items: [
            { text: 'Estudio español los martes y los jueves.', answer: 'rutina', why: '«Los martes y los jueves»: muchas veces.' },
            { text: 'Ahora preparo su bolsa.', answer: 'ahora', why: '«Ahora»: en este momento.' },
            { text: 'Los libros ayudan a aprender.', answer: 'general', why: 'Es verdad en general.' },
            { text: 'Los sábados abrimos a las diez.', answer: 'rutina', why: 'Un horario: pasa todos los sábados.' },
            { text: 'En este momento Nora habla con una clienta.', answer: 'ahora', why: '«En este momento»: ahora.' },
            { text: 'En Argentina hablan español.', answer: 'general', why: 'Un hecho general sobre un país.' },
          ] },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Primero busca la persona.',
      steps: [
        { title: 'Elige según el contexto', blocks: [
          { kind: 'choice', items: [
            { context: 'Es la rutina de Ana.', prompt: 'Todos los días Ana ___ a las siete.', options: ['sale', 'salió', 'saldrá'], answer: 0, why: '«Todos los días» indica una rutina: presente. Ella: sale.' },
            { context: 'Tú y tu familia, cada mañana.', prompt: 'Nosotros ___ café por la mañana.', options: ['tomamos', 'toman', 'tomemos'], answer: 0, why: 'Nosotros: tom + amos.' },
            { context: 'Hablas de tu trabajo.', prompt: 'Yo ___ en una oficina todos los días.', options: ['trabajo', 'trabaja', 'trabajamos'], answer: 0, why: 'Yo: trabaj + o.' },
            { context: 'Preguntas a un amigo.', prompt: '¿Tú ___ cerca del centro?', options: ['viven', 'vives', 'vivimos'], answer: 1, why: 'Tú: viv + es.' },
            { context: 'Tus padres y el idioma.', prompt: 'Mis padres ___ portugués en casa.', options: ['hablan', 'hablo', 'habla'], answer: 0, why: 'Mis padres = ellos: habl + an.' },
            { context: 'Tu hermano, en este momento.', prompt: 'Ahora mi hermano ___ en la cocina.', options: ['comes', 'come', 'comen'], answer: 1, why: 'Mi hermano = él: com + e.' },
          ] },
        ] },
        { title: 'Compara los significados', blocks: [
          { kind: 'choice', items: [
            { prompt: '¿Qué frase habla de **este momento**?', options: ['Leo novelas en mi tiempo libre.', 'Ahora leo una novela de Isabel Allende.'], answer: 1, why: '«Ahora» marca el momento actual. La otra frase es un hábito.' },
            { prompt: '¿Qué frase es un **hecho general**?', options: ['Los gatos duermen mucho.', 'Mi gato duerme ahora en el sofá.'], answer: 0, why: 'Es verdad para todos los gatos, siempre.' },
            { prompt: '«Trabajo» y «trabaja». ¿Qué cambia?', options: ['La persona: yo / él o ella.', 'El tiempo: presente / pasado.', 'Nada, es lo mismo.'], answer: 0, why: 'Las dos son presente; cambia la persona.' },
            { prompt: '«Los lunes como con mi abuela.» ¿Cuántas veces pasa?', options: ['Una vez.', 'Todos los lunes.', 'Nunca.'], answer: 1, why: '«Los lunes» = todos los lunes: una rutina.' },
          ] },
        ] },
        { title: 'Encuentra el error', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Mi hermana vive en Lima.', ok: true, why: 'Correcta: ella → vive.' },
            { sentence: 'Nosotros comemos a las dos.', ok: true, why: 'Correcta: comer, nosotros → comemos.' },
            { sentence: 'Yo estudias español.', ok: false, options: ['Yo estudio español.', 'Yo estudia español.', 'Yo estudian español.'], answer: 0, why: 'Con yo: estudi + o.' },
            { sentence: 'Ellos vivimos cerca del parque.', ok: false, options: ['Ellos viven cerca del parque.', 'Ellos vive cerca del parque.', 'Ellos vives cerca del parque.'], answer: 0, why: 'Ellos: viv + en.' },
            { sentence: 'Trabajo no los sábados.', ok: false, options: ['No trabajo los sábados.', 'Trabajo los sábados no.', 'Trabajo no sábados.'], answer: 0, why: '«No» va antes del verbo.' },
            { sentence: 'Tú escribe muchos mensajes.', ok: false, options: ['Tú escribes muchos mensajes.', 'Tú escribo muchos mensajes.', 'Tú escriben muchos mensajes.'], answer: 0, why: 'Con tú: escrib + es.' },
          ] },
        ] },
        { title: 'Completa la conversación', blocks: [
          { kind: 'chat-fill', title: 'Una llamada a la hora de la comida', lines: [
            { who: 'Pablo', text: 'Hola, Nora. ¿Qué haces?' },
            { who: 'Nora', text: 'Hola. Ahora ___ con una compañera.', options: ['como', 'come', 'comes'], answer: 0, why: 'Nora habla de ella: yo como.' },
            { who: 'Pablo', text: '¿Siempre ___ a la una?', options: ['comes', 'como', 'comen'], answer: 0, why: 'Pablo pregunta a Nora: tú comes.' },
            { who: 'Nora', text: 'Sí, de lunes a viernes. La tienda no ___ de una a dos.', options: ['abren', 'abre', 'abro'], answer: 1, why: 'La tienda = ella: abre.' },
            { who: 'Pablo', text: 'Mis compañeros y yo ___ a las dos.', options: ['comen', 'comemos', 'como'], answer: 1, why: 'Mis compañeros y yo = nosotros: comemos.' },
            { who: 'Nora', text: '¿Y los fines de semana? ¿___?', options: ['Trabajas', 'Trabajo', 'Trabajan'], answer: 0, why: 'Nora pregunta a Pablo: tú trabajas.' },
            { who: 'Pablo', text: 'No, los fines de semana ___ a mis padres.', options: ['visito', 'visita', 'visitas'], answer: 0, why: 'Pablo habla de él: yo visito.' },
          ] },
        ] },
        { title: 'Construye frases', blocks: [
          { kind: 'build', title: 'Ordena las palabras', items: [
            { tiles: ['abre', 'Nora', 'a las nueve', 'la tienda'], accept: ['Nora abre la tienda a las nueve'], en: 'Nora opens the shop at nine.' },
            { tiles: ['visito', 'Los sábados', 'a mi familia'], accept: ['Los sábados visito a mi familia', 'Visito a mi familia los sábados'], en: 'I visit my family on Saturdays.' },
            { tiles: ['No', 'los domingos', 'trabajamos'], accept: ['No trabajamos los domingos', 'Los domingos no trabajamos'], en: 'We don’t work on Sundays.' },
            { tiles: ['escribe', 'Ahora', 'un mensaje', 'Nora'], accept: ['Ahora Nora escribe un mensaje', 'Nora ahora escribe un mensaje', 'Ahora escribe Nora un mensaje'], en: 'Nora is writing a message now.' },
          ] },
        ] },
        { title: 'Transforma la frase', blocks: [
          { kind: 'rewrite', items: [
            { prompt: 'Trabajo aquí.', instruction: 'Escribe la frase en negativo.', accept: ['No trabajo aquí', 'Yo no trabajo aquí'] },
            { prompt: 'Vives en Madrid.', instruction: 'Escribe la frase como pregunta.', accept: ['¿Vives en Madrid?', '¿Tú vives en Madrid?', '¿Vives tú en Madrid?'] },
            { prompt: 'Nora aprende español.', instruction: 'Escribe la frase con tú.', accept: ['Tú aprendes español', 'Aprendes español'] },
            { prompt: 'Yo como en casa.', instruction: 'Escribe la frase con nosotros.', accept: ['Nosotros comemos en casa', 'Comemos en casa', 'Nosotras comemos en casa'] },
            { prompt: 'Ellos leen novelas.', instruction: 'Escribe la frase con yo.', accept: ['Yo leo novelas', 'Leo novelas'] },
          ] },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Una pausa en la tienda', coach: 'Primero escucha sin leer.',
      steps: [
        { title: 'Una pausa en la tienda', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha con la idea general. En la segunda, el alumno anota quién abre, quién cierra y qué lee la persona que habla.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Puedes bajar la velocidad.' } },
          { kind: 'listen', title: 'Una pausa en la tienda', channel: 'AUDIO · EN LA LIBRERÍA', src: '/audio/grammar-classroom/140.mp3',
            before: 'Una vendedora de una librería habla de su trabajo. ¿Qué crees que hace todos los días?',
            gist: { prompt: '¿De qué habla la vendedora?', options: ['De su trabajo y su tiempo libre.', 'De un viaje que va a hacer.', 'De un problema con un cliente.'], answer: 0, why: 'Habla de su horario en la tienda y dice: «En mi tiempo libre leo novelas».' },
            details: [
              { prompt: '¿Qué hace ahora?', options: ['Prepara los libros nuevos.', 'Cierra la tienda.', 'Come cerca de la tienda.'], answer: 0, why: '«Ahora preparo los libros nuevos».' },
              { prompt: '¿Qué días trabaja?', options: ['De lunes a viernes.', 'Los sábados.', 'Todos los días.'], answer: 0, why: '«Trabajo aquí de lunes a viernes».' },
              { prompt: '¿Quién abre la tienda por la mañana?', options: ['Ella.', 'Su compañera.', 'Un cliente.'], answer: 1, why: '«Mi compañera abre por la mañana; yo cierro por la tarde».' },
              { prompt: '¿Por qué libros preguntan mucho los clientes?', options: ['Por novelas.', 'Por libros de viajes.', 'Por libros de cocina.'], answer: 1, why: '«Los clientes preguntan mucho por libros de viajes».' },
              { prompt: '¿Qué hace en su tiempo libre?', options: ['Viaja y cocina.', 'Lee novelas y escribe notas en español.', 'Trabaja en la tienda.'], answer: 1, why: '«En mi tiempo libre leo novelas y escribo notas en español».' },
            ],
            transcript: 'Hola. Ahora [[preparo|teal]] los libros nuevos. [[Trabajo|blue]] aquí de lunes a viernes y [[como|blue]] cerca de la tienda. Mi compañera [[abre|blue]] por la mañana; yo [[cierro|blue]] por la tarde. Los clientes [[preguntan|blue]] mucho por libros de viajes. ¿Tú [[lees|blue]] ese tipo de libros? En mi tiempo libre [[leo|blue]] novelas y [[escribo|blue]] notas en español.',
            reply: { teacher: 'El alumno responde a la pregunta del audio: «¿Tú lees ese tipo de libros?». Después cuenta qué hace en su tiempo libre.', self: 'Responde en voz alta a la pregunta del audio: «¿Tú lees ese tipo de libros?». Después di dos cosas que haces en tu tiempo libre.' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Tu día a día', coach: 'Habla de tu semana real.',
      steps: [
        { title: 'Tu día a día', blocks: [
          { kind: 'guide', text: { teacher: 'No hace falta usar todas las preguntas. Sigue lo que el alumno quiere contar, repregunta y comparte también tu rutina.', self: 'Responde cada pregunta en voz alta, con frases completas. Si quieres, escribe tus respuestas.' } },
          { kind: 'talk', cards: [
            { q: '¿Qué haces un día normal por la mañana?', followUps: ['¿A qué hora te levantas?', '¿Qué desayunas?', '¿Cómo vas al trabajo o a clase?'], phrases: ['Normalmente [[desayuno|blue]] a las…', '[[Salgo|blue]] de casa a las…', '[[Voy|blue]] en autobús / a pie.'], hint: 'Usa la forma de yo: desayuno, salgo, voy. Agrega una hora: «a las ocho».', example: 'Normalmente me levanto a las siete. Desayuno café y pan. Salgo de casa a las ocho y voy en autobús.', next: 'Ahora hablemos de tu trabajo o tus estudios.' },
            { q: '¿Trabajas o estudias? ¿Qué horario tienes?', followUps: ['¿Qué días trabajas o estudias?', '¿Comes en casa o fuera?', '¿Te gusta tu horario?'], phrases: ['[[Trabajo|blue]] de lunes a viernes.', '[[Estudio|blue]] por la tarde.', '[[Como|blue]] a la una.'], hint: 'Para el horario: «de lunes a viernes», «de nueve a cinco», «por la mañana».', example: 'Trabajo en una oficina de lunes a viernes, de nueve a cinco. Como a la una cerca del trabajo.', next: 'Y fuera del trabajo, ¿qué haces?' },
            { q: '¿Qué haces en tu tiempo libre?', followUps: ['¿Lees? ¿Qué lees?', '¿Haces deporte?', '¿Qué haces los fines de semana?'], phrases: ['En mi tiempo libre [[leo|blue]]…', 'Los sábados [[visito|blue]]…', 'A veces [[camino|blue]] en el parque.'], hint: 'Usa palabras de frecuencia: siempre, a veces, nunca, los sábados.', example: 'En mi tiempo libre leo novelas. Los sábados visito a mi familia y a veces cocino con mi hermano.', next: 'Ahora piensa en este momento.' },
            { q: '¿Y ahora? ¿Dónde estás y qué haces en este momento?', followUps: ['¿Qué hacen las personas de tu casa ahora?', '¿Qué estudias este mes?', '¿Qué lees estos días?'], phrases: ['Ahora [[estoy|teal]] en…', 'En este momento [[estudio|teal]]…', 'Este mes [[trabajo|teal]]…'], hint: 'Con «ahora» o «este mes», el presente habla del momento actual.', example: 'Ahora estoy en casa. Estudio español en línea. Mi hermana trabaja en su habitación.', next: 'Hablemos del español en tu vida.' },
            { q: '¿Cuándo practicas español durante la semana?', followUps: ['¿Con quién hablas español?', '¿Escuchas música o pódcast en español?', '¿Qué actividad te ayuda más?'], phrases: ['[[Practico|blue]] español los…', '[[Hablo|blue]] con…', '[[Escucho|blue]] música en español.'], hint: 'Cuenta dos actividades y di cuándo las haces.', example: 'Practico español los martes y los jueves. Hablo con mi profesora y escucho música en español en el autobús.', next: 'Para terminar, compara tu rutina con la de Nora.' },
            { q: 'Nora trabaja en una librería y lee novelas. ¿Qué haces igual que Nora y qué haces diferente?', followUps: ['¿Qué actividad compartes con ella?', '¿Qué haces tú y ella no?', '¿Te gusta su rutina?'], phrases: ['Nora [[trabaja|blue]]…; yo [[trabajo|blue]]…', 'Las dos / Los dos [[leemos|blue]]…', 'Yo también… / Yo no…'], hint: 'Usa ella para Nora (trabaja) y yo para ti (trabajo).', example: 'Nora trabaja en una librería; yo trabajo en un hospital. Las dos leemos novelas. Yo no estudio inglés, estudio español.', teacher: 'Si el alumno lo pide, propón un horario de estudio de tres días y negocien los días: «Los lunes no puedo, trabajo hasta tarde».' },
          ], swap: { teacher: 'Al final, cambien los papeles: el alumno te hace tres preguntas sobre tu rutina.', self: 'Escribe tres preguntas con tú sobre la rutina de otra persona («¿A qué hora comes?») y házselas a alguien esta semana.' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Preséntate a tu compañera', coach: 'Escribe sobre tu semana real.',
      steps: [
        { title: 'Preséntate a tu compañera', blocks: [
          { kind: 'guide', text: { teacher: 'Puede escribir en clase o como tarea. Revisen juntos las terminaciones de cada persona.', self: 'Escribe tu mensaje y toca «Revisar mi texto». Mira bien la terminación de cada verbo.' } },
          { kind: 'write', title: 'Mi semana', situation: 'Tienes una compañera nueva en la clase de español. Escríbele un mensaje para presentarte.', task: [
            'Cuenta dónde trabajas o estudias y tu **horario**.',
            'Cuenta una actividad de tu **tiempo libre**.',
            'Di qué haces **ahora**, en este momento.',
            'Termina con una pregunta para ella.',
          ], starters: ['Hola, me llamo…', 'Trabajo en… de… a…', 'Como a…', 'Los sábados…', 'En mi tiempo libre…', 'Ahora…', '¿Y tú…?'],
            words: ['trabajo', 'estudio', 'como', 'vivo', 'leo', 'visito', 'todos los días', 'los sábados', 'normalmente', 'ahora'],
            model: 'Hola, me llamo Daniel. [[Trabajo|blue]] en una oficina de lunes a viernes. [[Como|blue]] a la una y [[estudio|blue]] español por la tarde. Los sábados [[visito|blue]] a mi familia. En mi tiempo libre [[leo|blue]] novelas. Ahora [[escribo|teal]] este mensaje para ti. ¿Y tú? ¿Qué haces los fines de semana?',
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
            { tone: 'blue', label: 'RUTINA', formula: 'presente + los lunes / todos los días', example: 'Aprendo español los lunes.', caption: 'Lo que haces normalmente.', en: 'habits' },
            { tone: 'teal', label: 'AHORA', formula: 'ahora + presente', example: 'Ahora escribo un mensaje.', caption: 'Lo que pasa en este momento.', en: 'now' },
            { tone: 'violet', label: 'SIEMPRE ES ASÍ', formula: 'presente para hechos generales', example: 'El agua hierve a cien grados.', caption: 'Verdad en general.', en: 'facts' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'Raíz + terminación', text: 'Quita -ar, -er, -ir y agrega la terminación de la persona: habl**o**, com**es**, viv**e**, habl**amos**, com**en**. Algunos verbos son especiales con yo: **hago**, **salgo**, **tengo**.' },
        ] },
        { title: 'Desafío final', blocks: [
          { kind: 'choice', title: 'Cuatro frases, sin ayuda', items: [
            { prompt: 'Mi hermano ___ en un hospital.', options: ['trabaja', 'trabajo', 'trabajan'], answer: 0, why: 'Mi hermano = él: trabaja.' },
            { prompt: 'Nosotros ___ en un apartamento pequeño.', options: ['viven', 'vivimos', 'vivemos'], answer: 1, why: 'Vivir, nosotros: vivimos.' },
            { prompt: 'Los domingos yo ___ la comida.', options: ['hago', 'haco', 'hace'], answer: 0, why: 'Hacer es especial con yo: hago.' },
            { prompt: '«Ahora escribo un mensaje.» ¿Qué expresa?', options: ['Un hábito.', 'Una acción de este momento.', 'Un hecho general.'], answer: 1, why: '«Ahora» marca el momento actual.' },
          ] },
        ] },
        { title: 'Tus errores y repaso', blocks: [
          { kind: 'review' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «Di una rutina con aprender y una acción actual con escribir». Respuesta posible: «Aprendo español los lunes. Ahora escribo un mensaje».' },
        ] },
      ],
    },
  ],
};
