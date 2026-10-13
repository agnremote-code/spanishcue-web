import type { LiveLesson } from '../types';

/**
 * Lesson 230 · A2 · Desde, desde hace y hace.
 * Classroom "now": October 2026. Every date-based answer is computed from it.
 * Reading, audio and their questions keep the original class material.
 */
export const desdeHace: LiveLesson = {
  id: 230,
  level: 'A2',
  topic: 'Lugar y tiempo',
  title: 'Desde, desde hace y hace',
  subtitle: 'Contar cuándo empezó algo, cuánto tiempo lleva y hace cuánto pasó.',
  now: 'octubre de 2026',
  legend: [
    { tone: 'blue', label: 'desde · un momento' },
    { tone: 'teal', label: 'desde hace / hace… que · una duración' },
    { tone: 'orange', label: 'hace + pasado · un hecho' },
  ],
  stages: [
    {
      id: 'objetivo', label: 'Objetivo', icon: '◎', minutes: 4, mascot: '/brand/mascot/walking.webp',
      title: 'Hablar del tiempo en tu propia historia', coach: 'Primero, ¿para qué sirve?',
      steps: [
        { title: 'Para qué sirve', blocks: [
          { kind: 'lead', text: 'Hoy vas a aprender a decir **desde cuándo** pasa algo, **cuánto tiempo** lleva pasando y **hace cuánto** ocurrió algo.', en: 'Today you will learn to say since when something happens, for how long, and how long ago something happened.' },
          { kind: 'scenes', items: [
            { icon: '🩺', place: 'En el médico', line: '¿Desde cuándo le duele la cabeza?', en: 'Since when has your head been hurting?', why: 'El médico necesita saber cuándo empezó el problema.' },
            { icon: '💼', place: 'En una entrevista de trabajo', line: '¿Hace cuánto que trabaja en ventas?', en: 'How long have you been working in sales?', why: 'Tu experiencia se cuenta en años y meses.' },
            { icon: '🏠', place: 'Con un vecino nuevo', line: '¿Y tú? ¿Hace cuánto que vives aquí?', en: 'And you? How long have you lived here?', why: 'Para conocer a alguien, contamos nuestra historia.' },
            { icon: '☕', place: 'Con una amiga que no ves', line: '¡Hace siglos que no nos vemos!', en: 'We haven’t seen each other in ages!', why: 'Para ponerse al día después de mucho tiempo.' },
          ] },
          { kind: 'goals', title: 'Al terminar la clase vas a poder…', items: [
            { text: 'Decir **cuándo empezó** algo que continúa: «Vivo aquí [[desde marzo|blue]]».', en: 'Say when something that is still true started.' },
            { text: 'Decir **cuánto tiempo** lleva hasta hoy: «Vivo aquí [[desde hace seis meses|teal]]».', en: 'Say how long it has lasted until now.' },
            { text: 'Situar un **hecho terminado**: «Llegué [[hace seis meses|orange]]».', en: 'Place a finished event in the past.' },
            { text: 'Preguntar: **¿Desde cuándo…? ¿Hace cuánto…?**', en: 'Ask about time.' },
          ] },
        ] },
        { title: 'Para empezar a hablar', blocks: [
          { kind: 'prompts', title: 'Antes de la explicación, conversen', items: [
            '¿Dónde vives? ¿Desde cuándo vives allí?',
            '¿Hace cuánto que estudias español?',
            '¿Qué cosa nueva empezaste a hacer este año?',
            '¿Qué hiciste por primera vez hace poco?',
          ] },
          { kind: 'teacher', text: 'No corrijas todavía. Anota dos o tres frases del alumno con «desde» o «hace»: vas a volver a ellas en la explicación para que descubra la diferencia con sus propios ejemplos.' },
        ] },
      ],
    },
    {
      id: 'explicacion', label: 'Explicación', icon: '✎', minutes: 11, mascot: '/brand/mascot/pointing.webp',
      title: 'Un momento, una duración, un hecho', coach: 'Un concepto por vez.',
      steps: [
        { title: 'Desde: el momento de inicio', blocks: [
          { kind: 'concept', tone: 'blue', label: 'DESDE', question: '¿Desde cuándo?', en: 'since', formula: ['presente + desde + un momento'],
            meaning: 'Marca **el momento en que empezó** algo que **todavía continúa**. Después de «desde» va una fecha, un año, un mes, un día o una hora.',
            examples: [
              { es: 'Vivo en Bogotá [[desde 2019|blue]].', en: 'I have lived in Bogotá since 2019.' },
              { es: 'Estudio español [[desde marzo|blue]].', en: 'I have been studying Spanish since March.' },
              { es: 'No como carne [[desde el verano|blue]].', en: 'I haven’t eaten meat since the summer.' },
              { es: 'Trabajo [[desde las ocho|blue]] y todavía no almorcé.', en: 'I have been working since eight and haven’t had lunch yet.' },
            ],
            note: 'También puedes marcar el inicio con un verbo: «Hablo inglés [[desde que era niño|blue]]».' },
          { kind: 'visual', visual: 'time-axis-start' },
          { kind: 'tip', icon: '!', title: 'Mira el verbo', text: 'El verbo va en **presente** porque la situación sigue hoy: «Viv**o** en Bogotá desde 2019», no «Viví».', en: 'Spanish uses the present tense here, where English uses “have lived / have been living”.' },
        ] },
        { title: 'Desde hace: la duración hasta hoy', blocks: [
          { kind: 'concept', tone: 'teal', label: 'DESDE HACE', question: '¿Cuánto tiempo hace? ¿Hace cuánto?', en: 'for', formula: ['presente + desde hace + cantidad de tiempo', 'hace + cantidad de tiempo + que + presente'],
            meaning: 'Mide **cuánto tiempo pasó desde el inicio hasta hoy**. La situación **continúa**. Las dos fórmulas significan lo mismo.',
            examples: [
              { es: 'Vivo en Bogotá [[desde hace siete años|teal]].', en: 'I have lived in Bogotá for seven years.' },
              { es: '[[Hace siete años que|teal]] vivo en Bogotá.', en: 'I have lived in Bogotá for seven years.' },
              { es: '[[Hace un mes que|teal]] no veo a mi familia.', en: 'I haven’t seen my family for a month.' },
            ] },
          { kind: 'tip', icon: '🔑', title: 'El truco para elegir', text: 'Después de **desde** va un **momento**: marzo, 2019, el lunes. Después de **desde hace** va una **cantidad**: tres días, dos años, mucho tiempo. Si puedes contarlo, es una cantidad.', en: 'desde + a point in time · desde hace + an amount of time' },
          { kind: 'table', title: 'La misma historia: hoy es octubre de 2026 y Ana vive en Bogotá desde 2019', head: ['Pregunta', 'Respuesta', '¿Qué dice?'], rows: [
            ['¿Desde cuándo vive Ana en Bogotá?', 'Vive allí [[desde 2019|blue]].', 'El momento de inicio'],
            ['¿Hace cuánto que vive allí?', 'Vive allí [[desde hace siete años|teal]].', 'La duración hasta hoy'],
            ['¿Cuánto tiempo hace que vive allí?', '[[Hace siete años que|teal]] vive allí.', 'La duración hasta hoy'],
          ] },
        ] },
        { title: 'Hace + pasado: un hecho terminado', blocks: [
          { kind: 'concept', tone: 'orange', label: 'HACE + PASADO', question: '¿Cuándo pasó?', en: 'ago', formula: ['verbo en pasado + hace + cantidad de tiempo'],
            meaning: 'Sitúa **un hecho que ocurrió y terminó**. Cuenta el tiempo hacia atrás, desde hoy hasta ese momento.',
            examples: [
              { es: 'Llegué a Bogotá [[hace siete años|orange]].', en: 'I arrived in Bogotá seven years ago.' },
              { es: '[[Hace dos semanas|orange]] cambié de trabajo.', en: 'I changed jobs two weeks ago.' },
              { es: 'Te llamé [[hace un rato|orange]].', en: 'I called you a little while ago.' },
            ] },
          { kind: 'visual', visual: 'time-axis-event' },
          { kind: 'contrast', title: 'Un punto o una línea', items: [
            { tone: 'orange', shape: 'point', sentence: 'Llegué a Bogotá [[hace siete años|orange]].', en: 'I arrived seven years ago.', verdict: 'Un hecho: la llegada. Ocurrió una vez y terminó.' },
            { tone: 'teal', shape: 'line', sentence: 'Vivo en Bogotá [[desde hace siete años|teal]].', en: 'I have lived there for seven years.', verdict: 'Una situación: mi vida en Bogotá. Empezó y sigue hoy.' },
          ] },
        ] },
        { title: 'El verbo decide', blocks: [
          { kind: 'lead', text: 'Con **hace … que**, mira el verbo: en **presente**, la situación sigue; en **pasado**, el hecho terminó.' },
          { kind: 'table', title: 'La misma estructura, dos significados', head: ['Frase', 'Verbo', 'Significado'], rows: [
            ['[[Hace dos años que|teal]] **vivo** aquí.', 'presente', 'Sigo aquí: duración hasta hoy (for)'],
            ['[[Hace dos años que|orange]] **llegué**.', 'pasado', 'La llegada terminó = Llegué hace dos años (ago)'],
            ['[[Hace un mes que|teal]] **no veo** a mi familia.', 'presente', 'La ausencia continúa'],
            ['**Vi** a mi familia [[hace un mes|orange]].', 'pasado', 'Un encuentro terminado'],
          ] },
          { kind: 'tip', icon: '🌎', title: 'Así lo vas a escuchar en América Latina', text: 'Muchas personas dicen «Vivo aquí [[hace dos años|teal]]», sin «desde» y sin «que». Es correcto y significa lo mismo que «desde hace dos años». Para empezar, usa «desde hace»: es la forma más clara.', en: 'You will often hear “Vivo aquí hace dos años” = I have lived here for two years.' },
          { kind: 'tip', icon: '👂', title: 'Vas a escuchar también', text: '«**Llevo** dos años en Bogotá» = «Vivo en Bogotá desde hace dos años». Por ahora, solo reconócela: la vas a practicar en otra clase.' },
          { kind: 'teacher', text: 'Vuelve ahora a las frases que anotaste en el Objetivo. Pregunta: «¿Esto sigue o terminó?» y deja que el alumno elija la estructura y se corrija solo.' },
        ] },
        { title: 'Explora la línea del tiempo', blocks: [
          { kind: 'visual', visual: 'time-explorer' },
          { kind: 'visual', visual: 'barrio-3d' },
          { kind: 'teacher', text: 'Pide la frase antes de mostrarla. Cada vez que mueves la fecha hay una pregunta nueva: «¿Desde cuándo…?», «¿Hace cuánto…?», «¿Cuándo llegó?».' },
        ] },
        { title: 'No lo confundas', blocks: [
          { kind: 'mistakes', title: 'Errores frecuentes', reveal: true, items: [
            { wrong: 'Vivo aquí por dos años.', right: 'Vivo aquí desde hace dos años.', why: 'Es una traducción de «for». Para algo que sigue, usa «desde hace» o «hace… que».' },
            { wrong: 'Estudio español desde dos años.', right: 'Estudio español desde hace dos años.', why: '«Dos años» es una cantidad: necesita «desde hace».' },
            { wrong: 'Trabajo aquí desde hace enero.', right: 'Trabajo aquí desde enero.', why: '«Enero» es un momento: solo «desde».' },
            { wrong: 'Llegué desde hace un mes.', right: 'Llegué hace un mes.', why: 'Llegar es un hecho terminado: «hace» + pasado.' },
            { wrong: 'Viví aquí desde 2020 (y sigo aquí).', right: 'Vivo aquí desde 2020.', why: 'Si la situación sigue, el verbo va en presente.' },
          ] },
          { kind: 'tip', icon: '⏸', title: '¿Y «durante»?', text: '«Durante» mide un período **cerrado**, que ya terminó: «Viví en Lima **durante** dos años y después me mudé». Para algo que sigue hoy: «Vivo en Bogotá **desde hace** dos años».', en: 'durante = for a finished period' },
        ] },
      ],
    },
    {
      id: 'contexto', label: 'En contexto', icon: '☰', minutes: 8, mascot: '/brand/mascot/seated.webp',
      title: 'La gramática en conversaciones reales', coach: '¿Quién habla y qué necesita?',
      steps: [
        { title: 'En la consulta', blocks: [
          { kind: 'dialogue', title: 'Me duele la espalda', setting: 'Hoy es miércoles. Martín va al médico.', lines: [
            { who: 'Doctora Ruiz', text: 'Buenos días, Martín. ¿Qué le pasa?' },
            { who: 'Martín', text: 'Me duele mucho la espalda.' },
            { who: 'Doctora Ruiz', text: '¿[[Desde cuándo|blue]] le duele?', en: 'Since when has it been hurting?' },
            { who: 'Martín', text: '[[Desde el sábado|blue]]. [[Hace cuatro días que|teal]] casi no duermo.', en: 'Since Saturday. I have barely slept for four days.' },
            { who: 'Doctora Ruiz', text: '¿Hizo algún esfuerzo especial?' },
            { who: 'Martín', text: 'Sí, me mudé [[hace una semana|orange]] y cargué muchas cajas.', en: 'Yes, I moved a week ago and carried a lot of boxes.' },
            { who: 'Doctora Ruiz', text: '¿Toma algún medicamento?' },
            { who: 'Martín', text: 'Tomo ibuprofeno [[desde hace dos días|teal]], pero no me ayuda mucho.', en: 'I have been taking ibuprofen for two days.' },
            { who: 'Doctora Ruiz', text: '¿Y hace ejercicio?' },
            { who: 'Martín', text: 'Antes sí, pero [[hace meses que|teal]] no voy al gimnasio.', en: 'I haven’t been to the gym for months.' },
            { who: 'Doctora Ruiz', text: 'Bien. Le voy a dar unos ejercicios suaves. Si en una semana sigue igual, vuelva.' },
          ], questions: [
            { q: '¿Cuándo empezó el dolor de Martín?', answer: 'El sábado: hace cuatro días.' },
            { q: '¿Qué hizo Martín hace una semana? ¿Eso sigue o terminó?', answer: 'Se mudó. Es un hecho terminado: «me mudé hace una semana».' },
            { q: 'Mira las expresiones marcadas: ¿cuáles hablan de algo que sigue hoy?', answer: 'Desde el sábado, hace cuatro días que, desde hace dos días, hace meses que no voy.' },
            { q: 'Si fueras la doctora, ¿qué otra pregunta harías?', answer: 'Respuesta abierta. Por ejemplo: «¿Hace cuánto que trabaja sentado?»' },
          ] },
        ] },
        { title: 'Un mensaje en el barrio', blocks: [
          { kind: 'reading', title: 'Un nuevo horario en el barrio', from: 'Elena, en el grupo de vecinos',
            text: 'Hola, soy Elena. Vivo en este barrio [[desde marzo|blue]] y trabajo en la biblioteca [[desde hace seis meses|teal]]. Antes vivía lejos y llegaba a casa muy tarde. [[Hace dos semanas|orange]] cambié mi horario: ahora trabajo por la mañana. [[Desde entonces|blue]] tengo las tardes libres. Los martes estudio español con una vecina. [[Hace un mes que|teal]] estudiamos juntas y ya podemos hablar de nuestras rutinas. Todavía no conozco a muchas personas, pero [[desde el sábado|blue]] voy también al grupo de paseos del barrio. ¿Tú haces alguna actividad por aquí?',
            en: 'horario = schedule · desde entonces = since then · tardes libres = free afternoons · todavía = still',
            questions: [
              { q: '¿Por qué Elena puede hacer más actividades ahora?', answer: 'Porque cambió su horario de trabajo y tiene las tardes libres.' },
              { q: '¿Qué empezó hace un mes y qué empezó hace dos semanas?', answer: 'Hace un mes empezó a estudiar con una vecina; hace dos semanas cambió el horario.' },
              { q: 'Responde a Elena en voz alta: preséntate como un vecino nuevo.', answer: 'Respuesta abierta: «Hola, Elena. Soy… Vivo en el barrio desde… Hace… que…»' },
            ] },
        ] },
        { title: 'Una nota de voz', blocks: [
          { kind: 'audio', title: 'Nota de voz de Pablo, un vecino', src: '/audio/grammar-classroom/230.mp3',
            plan: ['Primera escucha: ¿qué propone Pablo?', 'Segunda escucha: anota las fechas y las duraciones.'],
            transcript: 'Hola, Elena. Soy Pablo, tu vecino del segundo. Vivo en el edificio [[desde septiembre|blue]]. [[Hace tres semanas que|teal]] voy a los paseos del barrio. El grupo sale los sábados a las diez, pero [[desde el sábado pasado|blue]] nos encontramos en la plaza, no en la biblioteca. Yo no puedo caminar mucho: [[hace cinco días|orange]] me hice daño en un pie. Esta semana voy solamente al café después del paseo. ¿Quieres venir? Podemos encontrarnos allí a las once y media.',
            questions: [
              { q: '¿Por qué Pablo propone ir al café y no hacer el paseo completo?', answer: 'Porque se hizo daño en un pie hace cinco días y no puede caminar mucho.' },
              { q: '¿Qué cambió el sábado pasado y dónde propone verse Pablo?', answer: 'El grupo ahora se encuentra en la plaza; Pablo propone verse en el café a las once y media.' },
              { q: '«Hace tres semanas que voy» y «hace cinco días me hice daño»: ¿qué diferencia hay?', answer: 'La primera es una actividad que sigue; la segunda, un hecho terminado.' },
            ] },
        ] },
      ],
    },
    {
      id: 'practica', label: 'Practiquemos', icon: '✦', minutes: 10, mascot: '/brand/mascot/kneeling.webp',
      title: 'Practiquemos juntos', coach: 'Primero en voz alta, después comprueba.',
      steps: [
        { title: 'Elige la estructura', blocks: [
          { kind: 'choice', title: 'Desde, desde hace o hace', hint: 'Piensa: ¿es un momento, una cantidad de tiempo o un hecho terminado?', items: [
            { prompt: 'Mariana vive en Quito ___ 2020.', options: ['desde', 'desde hace', 'hace'], answer: 0, explanation: '2020 es el momento de inicio y Mariana sigue en Quito.' },
            { prompt: 'Trabajo en este hospital ___ tres años.', options: ['desde', 'desde hace', 'hace'], answer: 1, explanation: '«Tres años» es una cantidad y la situación sigue.' },
            { prompt: 'Conocí a mi pareja ___ cinco años, en una fiesta.', options: ['desde', 'desde hace', 'hace'], answer: 2, explanation: '«Conocí» es un hecho terminado: hace + pasado.' },
            { prompt: 'No tomo café ___ el lunes.', options: ['desde', 'desde hace', 'hace'], answer: 0, explanation: '«El lunes» es un momento. Lo que sigue es no tomar café.' },
            { prompt: '___ diez minutos que te espero. ¿Dónde estás?', options: ['Desde', 'Desde hace', 'Hace'], answer: 2, explanation: 'Hace + tiempo + que + presente: todavía espero.' },
            { prompt: 'El tren salió ___ un rato.', options: ['desde', 'desde hace', 'hace'], answer: 2, explanation: 'La salida del tren es un hecho terminado.' },
            { prompt: 'Ana juega al tenis ___ que era niña.', options: ['desde', 'desde hace', 'hace'], answer: 0, explanation: '«Desde que» + verbo marca el inicio.' },
            { prompt: 'Mis abuelos están casados ___ cincuenta años.', options: ['desde', 'desde hace', 'hace'], answer: 1, explanation: 'Una cantidad de tiempo y una situación que continúa.' },
          ] },
          { kind: 'teacher', text: 'El alumno dice la frase completa en voz alta y explica su elección antes de comprobar. Si se equivoca, pregunta: «¿Es un momento o una cantidad? ¿Sigue o terminó?».' },
        ] },
        { title: '¿Sigue o terminó?', blocks: [
          { kind: 'classify', title: 'Interpreta cada frase', hint: 'Mira el tiempo del verbo.', categories: [
            { id: 'sigue', label: 'Sigue hoy', tone: 'teal' },
            { id: 'termino', label: 'Ya terminó', tone: 'orange' },
          ], items: [
            { text: 'Hace dos años que trabajo en un banco.', answer: 'sigue', explanation: 'Presente: sigue trabajando allí.' },
            { text: 'Hace dos años trabajé en un banco.', answer: 'termino', explanation: 'Pasado: fue hace dos años y terminó.' },
            { text: 'Trabajo en un banco hace dos años.', answer: 'sigue', explanation: 'Presente sin «que»: forma muy común en América Latina.' },
            { text: 'Hace una semana que no duermo bien.', answer: 'sigue', explanation: 'La situación de no dormir bien continúa.' },
            { text: 'Me mudé hace un mes.', answer: 'termino', explanation: 'La mudanza es un hecho terminado.' },
            { text: 'Hace tres días que llegó mi hermano.', answer: 'termino', explanation: '«Llegó» está en pasado: la llegada ocurrió hace tres días.' },
            { text: 'Desde que llegué, hablo más español.', answer: 'sigue', explanation: 'Hablar más español es una situación actual.' },
          ] },
          { kind: 'teacher', text: 'Pide una justificación: «¿Qué palabra te ayudó a decidir?». La respuesta casi siempre es el tiempo del verbo.' },
        ] },
        { title: 'Transforma la frase', blocks: [
          { kind: 'lead', text: 'Hoy es **octubre de 2026**. Di lo mismo con otra estructura.' },
          { kind: 'reveal', title: 'Mismo significado, otra forma', style: 'transform', items: [
            { prompt: 'Vivo en Lima desde 2021.', answer: 'Vivo en Lima desde hace cinco años. / Hace cinco años que vivo en Lima.' },
            { prompt: 'Hace tres meses que estudio portugués.', answer: 'Estudio portugués desde hace tres meses. / Estudio portugués desde julio.' },
            { prompt: 'Empecé a ir al gimnasio en agosto y sigo yendo.', answer: 'Voy al gimnasio desde agosto. / Voy al gimnasio desde hace dos meses.' },
            { prompt: 'Mi abuela se jubiló en 2016.', answer: 'Mi abuela se jubiló hace diez años. / Está jubilada desde 2016.', note: 'El hecho (se jubiló) va con «hace»; la situación (está jubilada), con «desde».' },
            { prompt: 'La última vez que vi a Pedro fue en abril.', answer: 'No veo a Pedro desde abril. / Hace seis meses que no veo a Pedro.' },
          ] },
        ] },
        { title: 'Corrige el error', blocks: [
          { kind: 'reveal', title: '¿Qué está mal? ¿Por qué?', style: 'fix', items: [
            { prompt: 'Mi hermano vive en Canadá por cuatro años.', answer: 'Mi hermano vive en Canadá desde hace cuatro años.', note: '«Por» es una traducción de «for».' },
            { prompt: 'Desde hace el lunes no tengo internet.', answer: 'Desde el lunes no tengo internet.', note: '«El lunes» es un momento.' },
            { prompt: 'Empecé a trabajar aquí desde hace un año.', answer: 'Empecé a trabajar aquí hace un año. / Trabajo aquí desde hace un año.', note: '«Empecé» es un hecho: hace + pasado.' },
            { prompt: 'Hace dos horas que te esperé. ¡Por fin llegas!', answer: 'Hace dos horas que te espero.', note: 'La espera sigue hasta ahora: presente.' },
            { prompt: 'Estudio francés desde tres meses.', answer: 'Estudio francés desde hace tres meses.', note: '«Tres meses» es una cantidad.' },
          ] },
        ] },
        { title: 'Ordena la historia', blocks: [
          { kind: 'order', title: 'La historia de Marcos: del más antiguo al más reciente', items: [
            'Hace doce años terminó la universidad en Cali.',
            'Hace ocho años se mudó a Quito.',
            'Desde hace cinco años trabaja en un hotel.',
            'Hace dos años conoció a Sofía.',
            'Desde marzo estudia inglés por las noches.',
            'Hace una semana le ofrecieron un trabajo en Canadá.',
          ], after: [
            { q: '¿Qué situaciones siguen hoy en la vida de Marcos?', answer: 'Trabaja en un hotel (desde hace cinco años) y estudia inglés (desde marzo).' },
            { q: '¿Qué crees que va a decidir Marcos? ¿Por qué?', answer: 'Respuesta abierta: el alumno justifica con la historia.' },
          ] },
        ] },
      ],
    },
    {
      id: 'situaciones', label: 'Situaciones reales', icon: '⚑', minutes: 8, mascot: '/brand/mascot/standing-crossed.webp',
      title: 'Usa la gramática para resolver algo', coach: 'Tu profesor tiene otro papel.',
      steps: [
        { title: 'Elige una situación', blocks: [
          { kind: 'roleplay', items: [
            { icon: '🩺', title: 'En el médico', student: 'Tienes un problema de salud: dolor de cabeza, de espalda o no duermes bien. Explica desde cuándo te pasa, qué hiciste y qué tomas.', teacher: 'Eres el médico. Pregunta «¿Desde cuándo…?», «¿Hace cuánto que…?» y «¿Le pasó algo antes?». Usa «usted».', twist: 'El médico duda: «Esto empezó antes, ¿no?». El paciente recuerda y corrige una fecha.', language: ['Me duele… desde…', 'Hace… días que no…', 'Hace una semana me caí…', 'Tomo… desde hace…'] },
            { icon: '📞', title: 'Llamada al servicio técnico', student: 'Tu internet funciona mal. Explica el problema: desde cuándo, cuántas veces llamaste y qué cambió.', teacher: 'Eres el operador. Pide datos exactos y propone una visita técnica para dentro de cinco días.', twist: 'El operador no encuentra ningún reclamo. El cliente explica cuándo llamó y pide una solución antes.', language: ['No tengo internet desde el martes.', 'Hace tres días que llamo.', 'Llamé hace dos días y…', '¿Hace cuánto que…?'] },
            { icon: '💼', title: 'Entrevista de trabajo', student: 'Quieres un puesto nuevo. Presenta tu experiencia: dónde trabajas, desde cuándo y qué cambios hiciste.', teacher: 'Eres el entrevistador. Pregunta por la experiencia, la ciudad y el último cambio. Usa «usted».', twist: 'El entrevistador ve un período sin trabajo en el currículum y pregunta qué hizo en ese tiempo.', language: ['Trabajo en… desde hace…', 'Hace dos años cambié de…', 'Vivo en esta ciudad desde…', 'Desde que empecé…'] },
            { icon: '☕', title: 'Un reencuentro', student: 'Te encuentras con un amigo que no ves hace años. Pónganse al día: qué cambió y qué sigue igual.', teacher: 'Eres el amigo. Reacciona con sorpresa y pide detalles de cada cambio.', twist: 'El amigo tiene una noticia grande: se casó, se mudó o tiene un hijo. El alumno pregunta hace cuánto y desde cuándo.', language: ['¡Hace siglos que no nos vemos!', '¿Desde cuándo vives…?', 'Me mudé hace…', '¿Todavía trabajas en…?'] },
          ] },
          { kind: 'teacher', text: 'Elijan una o dos situaciones. Primero sin la complicación; si sale bien, repite con ella. Corrige al final: anota dos frases y pide que el alumno las mejore.' },
        ] },
      ],
    },
    {
      id: 'conversacion', label: 'Conversación', icon: '☊', minutes: 10, mascot: '/brand/mascot/speaking.webp',
      title: 'Hablemos de tu vida', coach: 'Elige las preguntas que más interesan.',
      steps: [
        { title: 'Preguntas para conversar', blocks: [
          { kind: 'conversation', swap: 'Ahora el alumno pregunta al profesor: usa «¿Desde cuándo…?» y «¿Hace cuánto que…?» y compara sus respuestas.', groups: [
            { title: 'Tu vida ahora', icon: '🏠', questions: [
              { q: '¿Desde cuándo vives en tu casa? ¿Cómo la encontraste?', followUps: ['¿Qué cambió en tu barrio desde que llegaste?', '¿Qué es lo que más te gusta de vivir allí?'], deeper: '¿Cuánto tiempo necesitas vivir en un lugar para sentirlo tuyo?' },
              { q: '¿Qué haces todos los días desde hace mucho tiempo, casi sin pensar?', followUps: ['¿Cuándo empezaste a hacerlo?', '¿Por qué sigues?'], deeper: '¿Hay algún hábito que quieres dejar? ¿Desde cuándo lo piensas?' },
            ] },
            { title: 'Tu historia con el español', icon: '💬', questions: [
              { q: '¿Hace cuánto que estudias español? ¿Por qué empezaste?', followUps: ['¿Qué fue lo más difícil al principio?', '¿Qué puedes hacer ahora que no podías hacer hace un año?'], deeper: '¿Recuerdas la primera conversación real que tuviste en español? ¿Cuándo fue?' },
            ] },
            { title: 'Cambios', icon: '↻', questions: [
              { q: '¿Cuál es el cambio más importante que hiciste hace poco?', followUps: ['¿Cómo es tu vida desde ese cambio?', '¿Lo planeaste o pasó de repente?'], deeper: '¿Prefieres la estabilidad o los cambios? Da un ejemplo de tu vida.' },
              { q: '¿Hay algo que hacías antes y que no haces desde hace años?', followUps: ['¿Lo extrañas?', '¿Te gustaría volver a hacerlo?'] },
            ] },
            { title: 'Personas', icon: '👥', questions: [
              { q: '¿Cuál es tu amistad más antigua? ¿Hace cuánto que se conocen?', followUps: ['¿Dónde y cómo se conocieron?', '¿Qué cambió en su amistad con el tiempo?'] },
              { q: '¿Hay alguien que no ves desde hace mucho tiempo? ¿Por qué?', followUps: ['Si mañana lo encuentras, ¿qué le cuentas primero?', '¿Cuándo fue la última vez que hablaron?'] },
            ] },
          ] },
          { kind: 'teacher', text: 'No hace falta usar todas las preguntas. Sigue lo que el alumno quiere contar, repregunta y comparte tu propia experiencia. Si evita la estructura, pide el dato: «¿Y desde cuándo?».' },
        ] },
      ],
    },
    {
      id: 'desafio', label: 'Desafío final', icon: '★', minutes: 6, mascot: '/autoestudio/mascot/noting.webp',
      title: 'Tu historia en un minuto', coach: 'Una presentación de verdad.',
      steps: [
        { title: 'La misión', blocks: [
          { kind: 'task', purpose: 'Vas a presentarte en un grupo nuevo: un trabajo, un intercambio o un club. Tienes **un minuto** para contar quién eres hoy y cómo llegaste aquí.', steps: [
            'Marca en la línea cinco momentos de tu vida: tres hechos (llegué, empecé, conocí…) y dos situaciones que siguen hoy.',
            'Cuenta tu historia en orden, sin leer.',
            'Tu profesor hace tres preguntas. Responde con «desde», «desde hace» o «hace».',
          ], versions: [
            { label: 'Con apoyo', text: 'Usa la línea del tiempo y la ayuda de las fórmulas.' },
            { label: 'Sin apoyo', text: 'Oculta la línea y cuenta la historia de memoria.' },
            { label: 'Más difícil', text: 'Cuenta la historia de otra persona de tu familia, en tercera persona.' },
          ], success: [
            'Uso «desde» con un momento.',
            'Uso «desde hace» o «hace… que» con una cantidad de tiempo.',
            'Uso «hace» + pasado para los hechos terminados.',
            'Mi profesor entiende qué sigue hoy y qué terminó.',
          ] },
          { kind: 'visual', visual: 'life-line' },
          { kind: 'teacher', text: 'Preguntas para seguir: «¿Y desde entonces…?», «¿Qué cambió desde que…?», «¿Hace cuánto que no…?». Al final, devuelve una frase muy buena y una para mejorar.' },
        ] },
      ],
    },
    {
      id: 'cierre', label: 'Cierre', icon: '✓', minutes: 3, mascot: '/brand/mascot/standing.webp',
      title: 'Lo esencial en un vistazo', coach: '¿Qué te llevas hoy?',
      steps: [
        { title: 'Repaso', blocks: [
          { kind: 'recap', items: [
            { tone: 'blue', label: 'DESDE', formula: 'presente + desde + momento', example: 'Vivo aquí desde marzo.', caption: 'El momento de inicio', en: 'since' },
            { tone: 'teal', label: 'DESDE HACE · HACE… QUE', formula: 'presente + desde hace + cantidad', example: 'Vivo aquí desde hace seis meses.', caption: 'La duración hasta hoy', en: 'for' },
            { tone: 'orange', label: 'HACE + PASADO', formula: 'pasado + hace + cantidad', example: 'Llegué hace seis meses.', caption: 'Un hecho terminado', en: 'ago' },
          ] },
          { kind: 'mistakes', title: 'Cuidado con…', reveal: false, items: [
            { wrong: 'desde dos años', right: 'desde hace dos años', why: 'Una cantidad necesita «desde hace».' },
            { wrong: 'por dos años (algo que sigue)', right: 'desde hace dos años', why: '«Por» no expresa esta duración.' },
            { wrong: 'Llegué desde hace un mes.', right: 'Llegué hace un mes.', why: 'Un hecho terminado va con «hace».' },
          ] },
        ] },
        { title: 'Comprueba', blocks: [
          { kind: 'choice', title: 'Comprueba en un minuto', hint: 'Vuelve al repaso de arriba y prueba otra vez.', items: [
            { prompt: '¿Qué frase dice que la situación sigue hoy?', options: ['Me mudé a Chile hace tres años.', 'Vivo en Chile desde hace tres años.', 'Llegué a Chile hace tres años.'], answer: 1, explanation: 'Presente + desde hace: la situación continúa.' },
            { prompt: 'Completa: «No fumo ___ 2022».', options: ['desde', 'desde hace', 'hace'], answer: 0, explanation: '2022 es un momento de inicio.' },
            { prompt: '¿Qué pregunta pide una cantidad de tiempo?', options: ['¿Desde cuándo trabajas aquí?', '¿Hace cuánto que trabajas aquí?'], answer: 1, explanation: '«¿Hace cuánto…?» pide una duración; «¿Desde cuándo…?», un momento.' },
          ] },
          { kind: 'prompts', title: 'Para terminar, en voz alta', items: [
            'Di una frase verdadera con «desde», otra con «desde hace» y otra con «hace» + pasado.',
            'Explica la diferencia entre «Llegué hace un año» y «Vivo aquí desde hace un año».',
          ] },
          { kind: 'teacher', text: 'Respuesta posible: la primera frase cuenta la llegada, un hecho terminado; la segunda dice cuánto dura mi vida aquí hasta hoy.' },
        ] },
      ],
    },
  ],
};
