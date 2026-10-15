import type { LiveLesson } from '../types';

/**
 * Lesson 141 · A2 · Pretérito perfecto (he hablado).
 * A small design course runs through the class: Ana, Leo and Marta prepare a
 * final presentation, take stock of what they have done and what is pending.
 */
export const lesson: LiveLesson = {
  id: 141,
  level: 'A2',
  title: 'Pretérito perfecto',
  subtitle: 'Contar novedades de hoy o de esta semana, hablar de tus experiencias y explicar resultados que se ven ahora.',
  legend: [
    { tone: 'blue', label: 'Un tiempo que no ha terminado · hoy, esta semana' },
    { tone: 'teal', label: 'Experiencia · alguna vez, nunca, ya, todavía no' },
    { tone: 'orange', label: 'Resultado que se ve ahora' },
  ],
  optionNotes: {
    'he dado': '«He dado»: haber + participio. Funciona con un tiempo que incluye el presente.',
    daba: '«Daba» es imperfecto: describe el pasado o un hábito del pasado, no un balance de esta semana.',
    'han llegado': '«Han llegado» es para ellos o ustedes. Con nosotros: hemos llegado.',
    'llegábamos': '«Llegábamos» es imperfecto: describe un hábito del pasado.',
    hacido: 'Hacer tiene participio irregular: **hecho**.',
    hago: '«Hago» es presente, no participio.',
    escribido: 'Escribir tiene participio irregular: **escrito**.',
    vido: 'Ver tiene participio irregular: **visto**.',
    volvido: 'Volver tiene participio irregular: **vuelto**.',
    abrido: 'Abrir tiene participio irregular: **abierto**.',
    ponido: 'Poner tiene participio irregular: **puesto**.',
    decido: 'Decir tiene participio irregular: **dicho**.',
    ha: '«Ha» es para él, ella o usted.',
    has: '«Has» es para tú.',
    he: '«He» es para yo.',
    hemos: '«Hemos» es para nosotros.',
    han: '«Han» es para ellos, ellas o ustedes.',
    'tengo terminado': 'En español, el perfecto se forma con **haber**, no con tener: he terminado.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'El pretérito perfecto', coach: 'Un pasado que todavía toca el presente.',
      steps: [
        { title: 'Haber + participio', blocks: [
          { kind: 'lead', text: 'Ana hace un curso de diseño. Hoy escribe a su equipo: «**He terminado** las diapositivas». La acción ya pasó, pero Ana la cuenta **desde hoy**: es una novedad.', en: 'Something already happened, but we tell it from the present.' },
          { kind: 'guide', text: { teacher: 'Lean juntos la tabla. Pregunta: «¿Qué parte cambia con la persona? ¿Qué parte no cambia?».', self: 'Mira la tabla. Fíjate en qué parte cambia con la persona y qué parte es siempre igual.' } },
          { kind: 'table', title: 'Presente de haber + participio', head: ['Persona', 'hablar', 'comer', 'vivir'], rows: [
            ['yo', '**he** hablado', '**he** comido', '**he** vivido'],
            ['tú', '**has** hablado', '**has** comido', '**has** vivido'],
            ['él / ella / usted', '**ha** hablado', '**ha** comido', '**ha** vivido'],
            ['nosotros / nosotras', '**hemos** hablado', '**hemos** comido', '**hemos** vivido'],
            ['vosotros / vosotras', '**habéis** hablado', '**habéis** comido', '**habéis** vivido'],
            ['ellos / ellas / ustedes', '**han** hablado', '**han** comido', '**han** vivido'],
          ], note: 'Participio regular: **-ar → -ado** (hablado), **-er / -ir → -ido** (comido, vivido). Vosotros se usa en España; en América Latina, ustedes.' },
          { kind: 'tip', icon: '🔒', title: 'El participio no cambia', text: 'Solo cambia **haber** (he, has, ha…). El participio es siempre igual: «Ana ha terminad**o**», «Las chicas han terminad**o**». Y no se separan: «**No** hemos terminado», nunca «hemos no terminado».', en: 'Only haber changes; the participle stays the same.' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'Hoy nosotros ___ tarde.', options: ['hemos llegado', 'han llegado', 'llegábamos'], answer: 0, why: 'Nosotros → hemos + llegado.' },
            { prompt: 'Mis compañeras ___ las fotos.', options: ['han elegidas', 'han elegido', 'ha elegido'], answer: 1, why: 'Ellas → han, y el participio no cambia: elegido.' },
          ] },
        ] },
        { title: 'Hoy, esta semana, este año', mascot: '/brand/mascot/studying.webp', coach: 'Si el tiempo no ha terminado, usa el perfecto.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'UN TIEMPO ABIERTO', question: '¿Qué has hecho hoy?', en: 'a time period that includes now', formula: ['hoy / esta mañana / esta semana / este mes / este año + he, has, ha… + participio'],
            meaning: 'Usamos el perfecto con un período que **incluye el presente**: el día, la semana o el año en que estamos. Contamos novedades.',
            examples: [
              { es: '[[Hoy he hablado|blue]] con el profesor.', en: 'I spoke to the teacher today.' },
              { es: '[[Esta semana hemos revisado|blue]] todas las fotos.', en: 'This week we have checked all the photos.' },
              { es: '[[Este mes he empezado|blue]] un curso de diseño.', en: 'This month I started a design course.' },
              { es: '¿[[Has comido|blue]] ya? Son las tres.', en: 'Have you eaten yet?' },
            ] },
          { kind: 'tip', icon: '🌎', title: 'Vas a escuchar también', text: 'En muchos países de América Latina, para algo de hoy se usa a menudo el indefinido: «Hoy **hablé** con el profesor». En España se prefiere «Hoy **he hablado**». Las dos formas se entienden; en esta clase practicamos el perfecto.' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'Esta semana ___ tres clases.', options: ['he dado', 'daba', 'doy mañana'], answer: 0, why: '«Esta semana» incluye el presente: he dado.' },
            { prompt: '¿Qué frase cuenta una novedad de **hoy**?', options: ['Esta mañana he enviado el proyecto.', 'Envío el proyecto todos los lunes.'], answer: 0, why: '«Esta mañana» es parte de hoy: he enviado. La otra frase es una rutina.' },
          ] },
        ] },
        { title: 'Experiencias: alguna vez, nunca, ya, todavía no', mascot: '/brand/mascot/speaking.webp', coach: 'Importa la experiencia, no la fecha.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'EXPERIENCIA', question: '¿Lo has hecho alguna vez?', en: 'life experience', formula: ['alguna vez / nunca / ya / todavía no + he, has, ha… + participio', 'una vez / dos veces / muchas veces'],
            meaning: 'Hablamos de **experiencias de la vida** sin decir cuándo pasaron. También de tareas que **ya** están hechas o que **todavía no** están hechas.',
            examples: [
              { es: '¿[[Alguna vez has viajado|teal]] solo?', en: 'Have you ever travelled alone?' },
              { es: '[[Nunca he probado|teal]] el sushi.', en: 'I have never tried sushi.' },
              { es: '[[He visitado|teal]] México tres veces.', en: 'I have visited Mexico three times.' },
              { es: '[[Ya he elegido|teal]] las fotos, pero [[todavía no he terminado|teal]] el proyecto.', en: 'I have already chosen the photos, but I haven’t finished the project yet.' },
            ] },
          { kind: 'compare', title: 'Ya o todavía no', columns: [
            { tone: 'teal', label: 'YA', sentence: '[[Ya he elegido|teal]] las fotos.', idea: 'La tarea está hecha.', en: 'already' },
            { tone: 'teal', label: 'TODAVÍA NO', sentence: '[[Todavía no he escrito|teal]] la introducción.', idea: 'La tarea está pendiente: la voy a hacer.', en: 'not yet' },
          ] },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'Nunca ___ en un barco.', options: ['he viajado', 'viajo ayer', 'viajaba nunca'], answer: 0, why: '«Nunca» + experiencia de la vida: he viajado.' },
            { prompt: '«Todavía no he escrito el correo.» ¿El correo está escrito?', options: ['Sí, ya está.', 'No, está pendiente.'], answer: 1, why: '«Todavía no» = la tarea no está hecha, pero la voy a hacer.' },
          ] },
        ] },
        { title: 'Resultado que se ve ahora', mascot: '/autoestudio/mascot/noting.webp', coach: 'Pasó antes y se nota ahora.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'RESULTADO AHORA', question: '¿Qué ha pasado?', en: 'a past action with a present result', formula: ['he, has, ha… + participio → consecuencia ahora'],
            meaning: 'La acción pasó antes, pero **su resultado se ve ahora**. Por eso la contamos con el perfecto.',
            examples: [
              { es: 'Marta [[ha perdido|orange]] la carpeta y ahora no puede enviar su parte.', en: 'Marta has lost the folder, so she can’t send her part.' },
              { es: '¡[[Se ha roto|orange]] la impresora!', en: 'The printer has broken!' },
              { es: 'Tienes cara de cansado. ¿Qué [[ha pasado|orange]]?', en: 'You look tired. What has happened?' },
            ] },
          { kind: 'table', title: 'Participios irregulares frecuentes', head: ['Infinitivo', 'Participio', 'Ejemplo'], rows: [
            ['hacer', '**hecho**', 'He [[hecho|teal]] presentaciones antes.'],
            ['escribir', '**escrito**', 'Todavía no he [[escrito|teal]] la introducción.'],
            ['ver', '**visto**', '¿Has [[visto|teal]] esta película?'],
            ['decir', '**dicho**', 'El profesor nos ha [[dicho|blue]] la fecha.'],
            ['poner', '**puesto**', 'Hemos [[puesto|blue]] las fotos en la carpeta.'],
            ['volver', '**vuelto**', 'Ana ya ha [[vuelto|orange]] de la reunión.'],
            ['abrir', '**abierto**', 'Han [[abierto|orange]] una cafetería nueva.'],
            ['romper', '**roto**', 'Se ha [[roto|orange]] la impresora.'],
          ], note: 'Primero aprende los regulares (-ado, -ido). Estos ocho irregulares son muy frecuentes: apréndelos de memoria.' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'El participio de **hacer** es…', options: ['hecho', 'hacido', 'hago'], answer: 0, why: 'Hacer → hecho (irregular).' },
            { prompt: '¿Has ___ el último mensaje de Leo?', options: ['vido', 'visto', 'veído'], answer: 1, why: 'Ver → visto (irregular).' },
          ] },
        ] },
        { title: 'Cómo elegir', mascot: '/brand/mascot/seated.webp', coach: 'Mira la palabra de tiempo.', blocks: [
          { kind: 'decide', title: 'Quieres contar algo pasado. Responde', steps: [
            { q: '¿Dices una fecha cerrada (ayer, el lunes pasado, en 2019)?', yes: 'No uses el perfecto: con ayer o en 2019 va el **indefinido** («Ayer **hablé** con Ana»). Lo vemos en otra clase.', no: 'next' },
            { q: '¿Hablas de hoy, esta semana o este año, de una experiencia de tu vida, o de un resultado que se ve ahora?', yes: 'Usa el **perfecto**: «[[Hoy he hablado|blue]] con Ana» · «[[Nunca he probado|teal]] el sushi» · «[[He perdido|orange]] las llaves».', no: 'Si es una rutina o algo de ahora, usa el **presente**: «Hablo con Ana todos los días».' },
          ] },
          { kind: 'tip', icon: '🧭', title: 'Palabras que ayudan', text: 'Con el perfecto: **hoy**, **esta mañana**, **esta semana**, **este año**, **alguna vez**, **nunca**, **ya**, **todavía no**, **dos veces**.' },
        ] },
        { title: 'Errores frecuentes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Haber, participio y nada en medio.', blocks: [
          { kind: 'guide', text: { teacher: 'Tu alumno busca el error antes de que muestres la corrección.', self: 'Lee cada frase, busca el error y después toca para ver la corrección.' } },
          { kind: 'mistakes', title: '¿Dónde está el error?', items: [
            { wrong: 'He escribido un correo.', right: 'He escrito un correo.', why: 'Escribir tiene participio irregular: escrito.' },
            { wrong: 'He no terminado el proyecto.', right: 'No he terminado el proyecto.', why: '«No» va antes de haber. Haber y el participio no se separan.' },
            { wrong: 'Las chicas han llegadas.', right: 'Las chicas han llegado.', why: 'El participio no cambia con haber: llegado.' },
            { wrong: 'Tengo terminado el curso.', right: 'He terminado el curso.', why: 'El perfecto se forma con haber, no con tener.' },
            { wrong: 'Yo ha trabajado mucho hoy.', right: 'Yo he trabajado mucho hoy.', why: 'Con yo, haber es «he».' },
            { wrong: 'Ayer he visto a Leo.', right: 'Ayer vi a Leo. / Hoy he visto a Leo.', why: '«Ayer» es un tiempo cerrado: con ayer se usa el indefinido.' },
          ] },
          { kind: 'teacher', text: 'Pide tres frases verdaderas: algo que el alumno ha hecho hoy, algo que nunca ha hecho y algo que todavía no ha hecho esta semana.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'El perfecto en situaciones reales', coach: 'Toca las expresiones marcadas.',
      steps: [
        { title: 'El balance del proyecto', blocks: [
          { kind: 'guide', text: { teacher: 'Lean el diálogo con papeles. Después, el alumno toca cada expresión y explica si es una novedad, una experiencia o un resultado.', self: 'Lee el diálogo. Después toca cada expresión marcada para descubrir por qué se usó.' } },
          { kind: 'explore', title: 'Reunión del equipo', setting: 'Viernes por la tarde. Ana, Leo y Marta se reúnen para preparar la presentación final del curso.', lines: [
            { who: 'Ana', text: 'Bueno, ¿cómo vamos? [[Esta semana hemos trabajado|blue]] mucho.' },
            { who: 'Leo', text: 'Sí. [[Hoy he terminado|blue]] las diapositivas de la segunda parte.' },
            { who: 'Ana', text: '¡Genial! Yo [[ya he elegido|teal]] las fotos. ¿Y tú, Marta?' },
            { who: 'Marta', text: 'Tengo un problema: [[he perdido|orange]] la carpeta de imágenes y no puedo enviar mi parte.' },
            { who: 'Leo', text: '¿La has buscado en el correo? A veces la guardamos ahí.' },
            { who: 'Marta', text: 'Sí, pero no está. [[Todavía no he hablado|teal]] con el profesor.' },
            { who: 'Ana', text: 'Yo [[he hablado con él esta mañana|blue]]. Dice que podemos hacer cambios hasta el viernes.' },
            { who: 'Leo', text: 'Perfecto. Oigan, ¿[[alguna vez han presentado|teal]] un trabajo juntas?' },
            { who: 'Ana', text: 'No, [[nunca hemos presentado|teal]] nada juntas. Por eso quiero practicar.' },
            { who: 'Marta', text: 'Yo [[he hecho|teal]] presentaciones antes, pero con este grupo es nuevo.' },
            { who: 'Leo', text: '¡Miren! [[Han abierto|orange]] la sala de reuniones. Podemos practicar ahora.' },
          ], notes: {
            'Esta semana hemos trabajado': '«Esta semana» **todavía no ha terminado**: es un balance de un tiempo abierto.',
            'Hoy he terminado': 'Una novedad de **hoy**. El día no ha terminado.',
            'ya he elegido': '«Ya» = la tarea está hecha. Ana hace un balance de lo que tiene listo.',
            'he perdido': 'Perder la carpeta pasó antes, pero el **resultado es ahora**: Marta no puede enviar su parte.',
            'Todavía no he hablado': '«Todavía no» = algo pendiente. Marta quiere hablar con el profesor, pero no lo ha hecho.',
            'he hablado con él esta mañana': '«Esta mañana» es parte de **hoy**: un tiempo que incluye el presente.',
            'alguna vez han presentado': 'Leo pregunta por una **experiencia** de Ana y Marta (ustedes → han). No importa cuándo: importa si lo han hecho.',
            'nunca hemos presentado': '«Nunca» + experiencia: no importa cuándo, importa que no lo han hecho.',
            'he hecho': 'Una **experiencia** de Marta, sin fecha. Hacer → hecho, participio irregular.',
            'Han abierto': 'Alguien abrió la sala y el **resultado se ve ahora**: la sala está abierta. Abrir → abierto.',
          } },
          { kind: 'choice', title: '¿Entendiste?', items: [
            { prompt: '¿Qué problema tiene Marta?', options: ['Ha perdido la carpeta de imágenes.', 'No ha elegido las fotos.', 'Ha llegado tarde.'], answer: 0, why: '«He perdido la carpeta de imágenes y no puedo enviar mi parte».' },
            { prompt: '¿Quién ha hablado hoy con el profesor?', options: ['Ana.', 'Marta.', 'Leo.'], answer: 0, why: 'Ana: «Yo he hablado con él esta mañana».' },
            { prompt: '¿Por qué quiere practicar Ana?', options: ['Porque nunca han presentado nada juntas.', 'Porque el profesor lo ha pedido.', 'Porque Marta ha perdido la carpeta.'], answer: 0, why: '«Nunca hemos presentado nada juntas. Por eso quiero practicar».' },
          ] },
        ] },
        { title: '¿Novedad, experiencia o resultado?', blocks: [
          { kind: 'classify', title: 'Clasifica las frases de la reunión', categories: [
            { id: 'abierto', label: 'Tiempo abierto', tone: 'blue' },
            { id: 'experiencia', label: 'Experiencia · ya / todavía no', tone: 'teal' },
            { id: 'resultado', label: 'Resultado ahora', tone: 'orange' },
          ], items: [
            { text: 'Hoy he terminado las diapositivas.', answer: 'abierto', why: '«Hoy»: un día que no ha terminado.' },
            { text: 'He perdido la carpeta y no puedo enviar mi parte.', answer: 'resultado', why: 'La consecuencia se ve ahora: no puede enviar.' },
            { text: 'Nunca hemos presentado nada juntas.', answer: 'experiencia', why: '«Nunca»: una experiencia de la vida.' },
            { text: 'Esta semana hemos trabajado mucho.', answer: 'abierto', why: '«Esta semana» incluye el presente.' },
            { text: 'Han abierto la sala: podemos practicar.', answer: 'resultado', why: 'La sala está abierta ahora.' },
            { text: 'Yo ya he elegido las fotos.', answer: 'experiencia', why: '«Ya»: una tarea hecha, sin fecha.' },
          ] },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Primero haber, después el participio.',
      steps: [
        { title: 'Elige según el contexto', blocks: [
          { kind: 'choice', items: [
            { context: 'Eres profesor y haces el balance de tu semana.', prompt: 'Esta semana ___ tres clases nuevas.', options: ['he dado', 'daba', 'han dado'], answer: 0, why: 'Yo + esta semana: he dado.' },
            { context: 'Nunca has comido comida japonesa.', prompt: 'Nunca ___ sushi.', options: ['he probado', 'probaba', 'ha probado'], answer: 0, why: '«Nunca» + experiencia, con yo: he probado.' },
            { context: 'Tu familia y tú, hoy por la mañana.', prompt: 'Hoy nosotros ___ tarde.', options: ['han llegado', 'hemos llegado', 'llegábamos'], answer: 1, why: 'Nosotros → hemos llegado.' },
            { context: 'Le preguntas a tu amiga por una película.', prompt: '¿___ la última película de Almodóvar?', options: ['Has visto', 'Has vido', 'He visto'], answer: 0, why: 'Tú → has + visto (irregular).' },
            { context: 'Tus compañeros acaban de entregar el trabajo.', prompt: 'Mis compañeros ya ___ el trabajo.', options: ['ha entregado', 'han entregado', 'hemos entregado'], answer: 1, why: 'Ellos → han entregado.' },
            { context: 'Todavía falta una parte del proyecto.', prompt: 'Todavía no ___ la introducción.', options: ['he escrito', 'he escribido', 'escribo ya'], answer: 0, why: 'Escribir → escrito (irregular).' },
          ] },
        ] },
        { title: 'Compara los significados', blocks: [
          { kind: 'choice', items: [
            { prompt: '¿Qué frase dice que la tarea **está hecha**?', options: ['Ya he enviado el correo.', 'Todavía no he enviado el correo.'], answer: 0, why: '«Ya» = hecho. «Todavía no» = pendiente.' },
            { prompt: '«He perdido las llaves.» ¿Qué pasa ahora?', options: ['No tengo las llaves.', 'Tengo las llaves.', 'Busco llaves nuevas todos los días.'], answer: 0, why: 'Resultado actual: las llaves no están.' },
            { prompt: '«¿Alguna vez has vivido en otro país?» ¿Qué pregunta?', options: ['Por una experiencia de tu vida.', 'Por tu casa de ahora.', 'Por una fecha exacta.'], answer: 0, why: '«Alguna vez» pregunta por la experiencia, no por la fecha.' },
            { prompt: '¿Qué frase habla de un **tiempo que no ha terminado**?', options: ['Este año he leído diez libros.', 'Leo un libro cada mes.'], answer: 0, why: '«Este año» incluye el presente: balance. La otra frase es una rutina.' },
          ] },
        ] },
        { title: 'Encuentra el error', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Hemos no terminado la presentación.', ok: false, options: ['No hemos terminado la presentación.', 'Hemos terminado no la presentación.', 'No terminado hemos la presentación.'], answer: 0, why: '«No» va antes de haber.' },
            { sentence: '¿Has visto mis llaves?', ok: true, why: 'Correcta: has + visto.' },
            { sentence: 'Mi hermana ha volvido de Chile.', ok: false, options: ['Mi hermana ha vuelto de Chile.', 'Mi hermana ha volvida de Chile.', 'Mi hermana han vuelto de Chile.'], answer: 0, why: 'Volver → vuelto (irregular).' },
            { sentence: 'Las chicas han salidas temprano.', ok: false, options: ['Las chicas han salido temprano.', 'Las chicas ha salido temprano.', 'Las chicas han salidos temprano.'], answer: 0, why: 'El participio no cambia: salido.' },
            { sentence: 'Nunca he estado en Cuba.', ok: true, why: 'Correcta: nunca + experiencia.' },
            { sentence: 'Tengo terminado el informe.', ok: false, options: ['He terminado el informe.', 'Tengo terminando el informe.', 'Ha terminado el informe yo.'], answer: 0, why: 'El perfecto se forma con haber.' },
          ] },
        ] },
        { title: 'Completa la conversación', blocks: [
          { kind: 'chat-fill', title: 'Mensajes del equipo', lines: [
            { who: 'Leo', text: 'Marta, ¿___ la carpeta?', options: ['has encontrado', 'he encontrado', 'han encontrado'], answer: 0, why: 'Leo pregunta a Marta: tú → has encontrado.' },
            { who: 'Marta', text: '¡Sí! La ___ en un correo antiguo.', options: ['he encontrado', 'has encontrado', 'ha encontrado'], answer: 0, why: 'Marta habla de ella: yo → he encontrado.' },
            { who: 'Leo', text: '¡Qué bien! ¿Ya ___ tu parte?', options: ['has enviado', 'ha enviado', 'enviabas'], answer: 0, why: 'Tú → has enviado.' },
            { who: 'Marta', text: 'Todavía no, pero esta tarde la envío.' },
            { who: 'Leo', text: 'Ana y yo ___ las fotos esta mañana.', options: ['hemos revisado', 'han revisado', 'he revisado'], answer: 0, why: 'Ana y yo = nosotros: hemos revisado.' },
            { who: 'Marta', text: '¿Y el profesor? ¿Les ___ algo de la fecha?', options: ['ha dicho', 'ha decido', 'han dicho'], answer: 0, why: 'El profesor = él: ha + dicho (irregular).' },
            { who: 'Leo', text: 'Sí: tenemos hasta el viernes.' },
          ] },
        ] },
        { title: 'Construye y transforma', blocks: [
          { kind: 'build', title: 'Ordena las palabras', items: [
            { tiles: ['he', 'Nunca', 'en Japón', 'estado'], accept: ['Nunca he estado en Japón'], en: 'I have never been to Japan.' },
            { tiles: ['hemos', 'Esta semana', 'mucho', 'trabajado'], accept: ['Esta semana hemos trabajado mucho', 'Hemos trabajado mucho esta semana'], en: 'We have worked a lot this week.' },
            { tiles: ['no', 'Todavía', 'escrito', 'he', 'la introducción'], accept: ['Todavía no he escrito la introducción', 'No he escrito la introducción todavía'], en: 'I haven’t written the introduction yet.' },
          ] },
          { kind: 'rewrite', title: 'Escribe la frase de otra forma', items: [
            { prompt: 'Esta mañana olvidé el pasaporte en casa.', instruction: 'Cuéntalo como algo de hoy, con el perfecto.', accept: ['Esta mañana he olvidado el pasaporte en casa', 'He olvidado el pasaporte en casa esta mañana'] },
            { prompt: 'Hemos terminado.', instruction: 'Escribe la frase en negativo.', accept: ['No hemos terminado', 'Todavía no hemos terminado'] },
            { prompt: 'Ana ha visitado Perú dos veces.', instruction: 'Escribe la frase con yo.', accept: ['He visitado Perú dos veces', 'Yo he visitado Perú dos veces'] },
            { prompt: 'Ya he hecho la tarea.', instruction: 'Escribe lo contrario con «todavía no».', accept: ['Todavía no he hecho la tarea', 'No he hecho la tarea todavía'] },
          ] },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Una actualización del proyecto', coach: 'Primero escucha sin leer.',
      steps: [
        { title: 'Una actualización del proyecto', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha con la idea general. En la segunda, el alumno hace dos listas: tareas hechas y tareas pendientes.', self: 'Escucha una vez para la idea general. En la segunda escucha, anota qué está hecho y qué está pendiente.' } },
          { kind: 'listen', title: 'Una actualización del proyecto', channel: 'NOTA DE VOZ · AL EQUIPO', src: '/audio/grammar-classroom/141.mp3',
            before: 'Marta deja una nota de voz al equipo sobre la presentación. ¿Qué crees que cuenta?',
            gist: { prompt: '¿Para qué deja Marta la nota de voz?', options: ['Para contar cómo va el proyecto.', 'Para cancelar la presentación.', 'Para pedir una carpeta nueva.'], answer: 0, why: 'Empieza: «Te cuento cómo vamos», y habla de lo hecho y lo pendiente.' },
            details: [
              { prompt: '¿Cuántas fotos han elegido?', options: ['Tres.', 'Seis.', 'Diez.'], answer: 1, why: '«Hoy hemos revisado las fotos y hemos elegido seis».' },
              { prompt: '¿Por qué puede enviar su parte esta tarde?', options: ['Porque ha encontrado la carpeta.', 'Porque ha hablado con el profesor.', 'Porque ha terminado la introducción.'], answer: 0, why: '«Ya he encontrado la carpeta que había perdido, así que puedo enviar mi parte esta tarde».' },
              { prompt: '¿Qué tarea está pendiente?', options: ['Revisar las fotos.', 'Escribir la introducción.', 'Encontrar la carpeta.'], answer: 1, why: '«Todavía no he escrito la introducción».' },
              { prompt: '¿Qué quiere preguntar al profesor?', options: ['Cuánto tiempo tienen para presentar.', 'Qué fotos elegir.', 'Dónde está la sala.'], answer: 0, why: '«Quiero preguntarle cuánto tiempo tenemos para presentar».' },
              { prompt: '¿Qué experiencia tiene Marta?', options: ['Ha hecho presentaciones antes.', 'Ha trabajado con este equipo muchas veces.', 'Nunca ha presentado nada.'], answer: 0, why: '«Yo he hecho presentaciones antes, pero nunca he trabajado con este equipo».' },
            ],
            transcript: 'Hola, te cuento cómo vamos. Hoy [[hemos revisado|blue]] las fotos y [[hemos elegido|blue]] seis. Ya [[he encontrado|orange]] la carpeta que había perdido, así que puedo enviar mi parte esta tarde. [[Todavía no he escrito|teal]] la introducción. ¿[[Has hablado|blue]] con el profesor esta semana? Quiero preguntarle cuánto tiempo tenemos para presentar. Yo [[he hecho|teal]] presentaciones antes, pero [[nunca he trabajado|teal]] con este equipo. Podemos practicar mañana y revisar lo que falta.',
            reply: { teacher: 'El alumno responde a Marta como si fuera Ana: si ha hablado con el profesor esta semana, qué ha hecho hoy y qué tarea va a hacer.', self: 'Responde a Marta en voz alta, como Ana: ¿has hablado con el profesor esta semana? Cuenta una cosa que ya has hecho y una que todavía no has hecho.' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Tus novedades y experiencias', coach: 'Cuenta lo que has vivido.',
      steps: [
        { title: 'Tus novedades y experiencias', blocks: [
          { kind: 'guide', text: { teacher: 'No hace falta usar todas las preguntas. Sigue lo que el alumno quiere contar, repregunta y comparte también tus experiencias.', self: 'Responde cada pregunta en voz alta, como en una conversación. Si quieres, escribe tus respuestas.' } },
          { kind: 'talk', cards: [
            { q: '¿Qué has hecho hoy hasta ahora?', followUps: ['¿Has comido ya?', '¿Con quién has hablado hoy?', '¿Ha pasado algo especial?'], phrases: ['Esta mañana [[he trabajado|blue]]…', 'Todavía no [[he comido|teal]].', 'Hoy [[he hablado|blue]] con…'], hint: 'Hoy y esta mañana son tiempos abiertos: he + participio.', example: 'Esta mañana he trabajado en casa y he ido al supermercado. Todavía no he comido.', next: 'Ahora piensa en toda la semana.' },
            { q: '¿Cómo ha sido tu semana? ¿Qué has terminado y qué está pendiente?', followUps: ['¿Qué ha sido lo mejor?', '¿Qué no has podido hacer?', '¿Qué vas a hacer el fin de semana?'], phrases: ['Esta semana [[he terminado|blue]]…', '[[Ya he|teal]]…', '[[Todavía no he|teal]]…'], hint: 'Haz un balance: dos cosas con «ya» y una con «todavía no».', example: 'Ha sido una semana intensa. Ya he terminado un informe y he ido al gimnasio dos veces. Todavía no he llamado a mi madre.', next: 'Hablemos de tus experiencias.' },
            { q: '¿Alguna vez has viajado solo o sola?', followUps: ['¿Adónde?', '¿Qué has aprendido de esa experiencia?', '¿Lo quieres repetir?'], phrases: ['Sí, [[he viajado|teal]] sola a…', 'No, [[nunca he viajado|teal]] solo.', 'He estado en… dos veces.'], hint: 'Con «alguna vez» no hace falta decir la fecha: importa la experiencia.', example: 'Sí, he viajado sola dos veces. He estado en Lisboa y en Oaxaca. He aprendido a organizarme mejor.', next: 'Ahora, algo que nunca has hecho.' },
            { q: '¿Qué cosa nunca has hecho y quieres probar?', followUps: ['¿Por qué no lo has hecho todavía?', '¿Conoces a alguien que lo ha hecho?', '¿Qué necesitas para hacerlo?'], phrases: ['[[Nunca he|teal]]…', 'Quiero probar…', 'Mi amiga [[ha hecho|teal]]…'], hint: 'Nunca + he + participio. Después: «Quiero…».', example: 'Nunca he hecho surf. Mi hermano lo ha probado y dice que es difícil, pero quiero intentarlo este verano.', next: 'Hablemos de tu español.' },
            { q: '¿Qué has aprendido en español este año?', followUps: ['¿Qué ha sido lo más difícil?', '¿Has hablado con hablantes nativos?', '¿Qué todavía no has aprendido?'], phrases: ['Este año [[he aprendido|blue]] a…', 'Lo más difícil [[ha sido|blue]]…', '[[Todavía no he|teal]]…'], hint: '«Este año» incluye el presente. Usa «he aprendido a + infinitivo».', example: 'Este año he aprendido a hablar del pasado. Lo más difícil ha sido la pronunciación. Todavía no he visto una película sin subtítulos.', next: 'Para terminar, un pequeño problema.' },
            { q: 'Piensa en un pequeño problema de esta semana. ¿Qué ha pasado y cómo estás ahora?', followUps: ['¿Lo has resuelto?', '¿Alguien te ha ayudado?', '¿Qué has aprendido?'], phrases: ['[[He perdido|orange]]… y ahora…', 'Se [[ha roto|orange]]…', 'Por suerte, [[he encontrado|orange]]…'], hint: 'Cuenta la acción con el perfecto y el resultado con el presente: «He perdido el teléfono y ahora no tengo los contactos».', example: 'Se ha roto mi teléfono y ahora uso el de mi hermana. Por suerte, no he perdido mis archivos.', teacher: 'Puedes cerrar con un balance oral: tres logros y dos tareas pendientes del alumno, como en la reunión de Ana y su equipo.' },
          ], swap: { teacher: 'Al final, cambien los papeles: el alumno te hace tres preguntas con «¿Alguna vez has…?» y «¿Ya has…?».', self: 'Escribe tres preguntas con «¿Alguna vez has…?» y házselas a alguien esta semana.' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Una actualización para tu equipo', coach: 'Cuenta lo hecho y lo pendiente.',
      steps: [
        { title: 'Una actualización para tu equipo', blocks: [
          { kind: 'guide', text: { teacher: 'Puede escribir en clase o como tarea. Revisen juntos los participios irregulares.', self: 'Escribe tu mensaje y toca «Revisar mi texto». Mira bien los participios: ¿hay alguno irregular?' } },
          { kind: 'write', title: 'Balance de la semana', situation: 'Trabajas en un proyecto con un equipo (del trabajo, de un curso o de tu casa). Escribe un mensaje para contar cómo va.', task: [
            'Cuenta dos cosas que **ya** has hecho esta semana.',
            'Explica un problema: algo que ha pasado y su **resultado** ahora.',
            'Di qué tarea **todavía no** has hecho.',
            'Propón el siguiente paso.',
          ], starters: ['Hola a todos:', 'Esta semana hemos…', 'Ya he…', 'Ha pasado algo:', 'Todavía no he…', 'Propongo…'],
            words: ['ya', 'todavía no', 'esta semana', 'hoy', 'nunca', 'he hecho', 'he escrito', 'hemos visto', 'así que', 'ahora'],
            model: '[[Esta semana hemos elegido|blue]] las fotos y [[he preparado|blue]] las diapositivas. [[Ya he encontrado|orange]] la carpeta, así que puedo enviar los archivos hoy. [[Todavía no he escrito|teal]] la introducción. [[Nunca hemos presentado|teal]] juntos y necesitamos practicar. Propongo reunirnos mañana para revisar lo que falta y repartir las últimas tareas.',
            minWords: 40 },
        ] },
      ],
    },
    {
      id: 'cerrar', label: 'Cerrar', icon: '✓', mascot: '/brand/mascot/standing.webp',
      title: 'Lo esencial', coach: '¿Qué te llevas hoy?',
      steps: [
        { title: 'Lo esencial', blocks: [
          { kind: 'recap', items: [
            { tone: 'blue', label: 'TIEMPO ABIERTO', formula: 'hoy / esta semana + he + participio', example: 'Hoy he hablado con el profesor.', caption: 'Novedades de un tiempo que no ha terminado.', en: 'today, this week' },
            { tone: 'teal', label: 'EXPERIENCIA', formula: 'alguna vez / nunca / ya / todavía no + he…', example: 'Nunca he probado el sushi.', caption: 'Lo que has vivido, sin fecha.', en: 'ever, never, already, not yet' },
            { tone: 'orange', label: 'RESULTADO AHORA', formula: 'he + participio → consecuencia', example: 'He perdido las llaves.', caption: 'Pasó antes y se nota ahora.', en: 'present result' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'Cómo se forma', text: '**he, has, ha, hemos, habéis, han** + participio (-ado, -ido). El participio no cambia y no se separa de haber. Irregulares: hecho, escrito, visto, dicho, puesto, vuelto, abierto, roto.' },
        ] },
        { title: 'Desafío final', blocks: [
          { kind: 'choice', title: 'Cuatro frases, sin ayuda', items: [
            { prompt: 'Esta mañana mis padres ___ al médico.', options: ['ha ido', 'han ido', 'hemos ido'], answer: 1, why: 'Mis padres = ellos: han ido.' },
            { prompt: '¿Alguna vez ___ una carta a mano?', options: ['has escrito', 'has escribido', 'he escrito'], answer: 0, why: 'Tú → has + escrito (irregular).' },
            { prompt: 'Todavía no ___ la cena.', options: ['he hecho', 'he hacido', 'hecho he'], answer: 0, why: 'Hacer → hecho, y haber va primero.' },
            { prompt: '«Se ha roto la ventana.» ¿Qué pasa ahora?', options: ['La ventana está rota.', 'La ventana está bien.', 'Alguien va a romper la ventana.'], answer: 0, why: 'Resultado actual: la ventana está rota.' },
          ] },
        ] },
        { title: 'Tus errores y repaso', blocks: [
          { kind: 'review' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «He perdido la carpeta» y «Todavía no he escrito la introducción»: ¿qué diferencia hay? La primera deja un problema ahora; la segunda es una tarea pendiente.' },
        ] },
      ],
    },
  ],
};
