import type { LiveLesson } from '../types';

/**
 * Lesson 384 · A2 · Expresar duración y frecuencia en pasado (course unit G084).
 * One scene runs through the class: Cartagena (Colombia), October 2026. Marta
 * Ruiz runs a small hotel, Casa Bahía, and interviews Julián Mora for a job at
 * reception. Julián worked five years in a hostel in Medellín (2019–2024), then
 * lived a year and a half in Toronto, and came back two months ago. In Practicar
 * Marta also interviews Daniela Soto. In the voice message Rosa Pineda, Julián's
 * former boss in Medellín (Colombian voice, usted with Marta), gives a reference.
 * Content: a finished, measured period → indefinido (estuve tres años, viví de
 * 2019 a 2024, durante dos meses, toda la tarde); a counted total → indefinido
 * (fui tres veces); a habit of a period → imperfecto (siempre, a menudo, cada
 * sábado, todos los días, dos veces por semana); hace + tiempo = ago, with the
 * verb in the past (volví hace dos meses; hace cinco años vivía en Medellín).
 * Builds on class 230 (desde / desde hace for situations that continue) without
 * repeating it: here the situation is over. Mistakes: *estaba tres años,
 * *iba tres veces (total), *viví desde hace, *dos días hace, *de 2019 hasta 2024.
 * Ampliación: hace … que + indefinido, and a habit inside a period with limits
 * (todos los veranos de 2010 a 2015 fuimos / iba). Instructions use tú; Marta
 * and the candidates use usted.
 */
export const lesson: LiveLesson = {
  id: 384,
  level: 'A2',
  title: 'Expresar duración y frecuencia en pasado',
  subtitle: 'Contar tu experiencia: cuánto tiempo duró algo, con qué frecuencia lo hacías, cuántas veces pasó y cuándo, con hace.',
  now: 'octubre de 2026',
  legend: [
    { tone: 'orange', label: 'CUÁNTO TIEMPO · indefinido + período cerrado (for how long: estuve tres años)' },
    { tone: 'blue', label: 'CON QUÉ FRECUENCIA · imperfecto de hábito (how often: iba cada verano)' },
    { tone: 'violet', label: 'CUÁNTAS VECES · indefinido + veces en total (how many times: fui tres veces)' },
    { tone: 'teal', label: 'CUÁNDO · hace + tiempo (ago: hace dos días)' },
  ],
  optionNotes: {
    'desde hace': '«Desde hace» es para algo que **sigue hoy** (clase 230): «Vivo aquí desde hace dos años». Aquí la situación ya terminó o hablas de cuándo pasó algo.',
    'Desde hace': '«Desde hace» es para algo que **sigue hoy** (clase 230): «Vivo aquí desde hace dos años». Aquí la situación ya terminó o hablas de cuándo pasó algo.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Cuánto tiempo, con qué frecuencia, cuándo', coach: 'Tres preguntas sobre el pasado. Three questions about the past.',
      steps: [
        { title: 'Una entrevista de trabajo · A job interview', blocks: [
          { kind: 'lead', text: 'Marta Ruiz tiene un hotel pequeño en Cartagena, Colombia. Necesita un recepcionista. Hoy entrevista a Julián Mora. Julián cuenta su experiencia: **cuánto tiempo** trabajó en cada sitio, **qué hacía** siempre y **cuándo** volvió a Colombia.', en: 'Marta Ruiz runs a small hotel in Cartagena, Colombia. She needs a receptionist. Today she is interviewing Julián Mora. Julián talks about his experience: how long he worked in each place, what he always did and when he came back to Colombia.' },
          { kind: 'guide', text: { teacher: 'Tú lees cada frase de Julián y tu alumno repite. Después tu alumno dice qué pregunta responde cada frase: ¿cuánto tiempo?, ¿con qué frecuencia? o ¿cuándo?', self: 'Lee las tres frases de Julián en voz alta. ¿Qué pregunta responde cada una? (Which question does each sentence answer?)' } },
          { kind: 'compare', title: 'Tres frases de Julián · Three sentences from Julián', columns: [
            { tone: 'orange', label: '¿CUÁNTO TIEMPO? · indefinido', sentence: '[[Trabajé|orange]] en un hostal [[cinco años|orange]].', idea: 'Un período con principio y final. Ya terminó.', en: 'I worked in a hostel for five years. (a finished period)' },
            { tone: 'blue', label: '¿CON QUÉ FRECUENCIA? · imperfecto', sentence: '[[Cada sábado|blue]] [[organizaba|blue]] un paseo.', idea: 'Una costumbre de esa época: se repetía.', en: 'Every Saturday I organised a walk. (a habit of that time)' },
            { tone: 'teal', label: '¿CUÁNDO? · hace + tiempo', sentence: 'Volví a Colombia [[hace dos meses|teal]].', idea: 'Cuánto tiempo pasó desde ese hecho hasta hoy.', en: 'I came back to Colombia two months ago.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Trabajé en un hostal cinco años». ¿Julián trabaja allí ahora?', options: ['Sí, todavía trabaja allí.', 'No, ese período ya terminó.', 'No se sabe.'], answer: 1, why: '«Trabajé» (indefinido) + «cinco años»: un período cerrado, ya terminó.', en: '“I worked in a hostel for five years.” Does Julián work there now?' },
            { prompt: '«Cada sábado organizaba un paseo» habla de…', options: ['un plan para el futuro.', 'una costumbre de esa época.', 'un sábado concreto.'], answer: 1, why: '«Cada sábado» + imperfecto (organizaba): algo que se repetía.', en: '“Every Saturday I organised a walk” is about…' },
            { prompt: '«Volví hace dos meses». ¿Cuándo volvió Julián?', options: ['Dentro de dos meses.', 'Durante dos meses.', 'Dos meses antes de hoy.'], answer: 2, why: '«Hace dos meses» = two months ago: cuentas hacia atrás desde hoy.', en: '“I came back two months ago.” When did Julián come back?' },
          ] },
        ] },
        { title: 'Un período cerrado · A finished period', mascot: '/brand/mascot/studying.webp', coach: 'Con principio y final: indefinido. With a start and an end.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'CUÁNTO TIEMPO · INDEFINIDO', question: '¿Cuánto tiempo estuviste / trabajaste / viviste allí?', en: 'How long were you / did you work / did you live there?', formula: ['indefinido + cantidad de tiempo (tres días, cinco años)', 'indefinido + de 2019 a 2024 · desde 2019 hasta 2024 · durante dos meses · toda la tarde'],
            meaning: 'Para decir **cuánto duró** algo que ya terminó, usas el **indefinido**. No importa si el período es corto o largo (una hora, cinco años): tiene principio y final.',
            examples: [
              { es: 'El verano pasado [[estuve|orange]] en Santa Marta [[tres días|orange]].', en: 'Last summer I was in Santa Marta for three days.' },
              { es: 'Marta [[vivió|orange]] en Bogotá [[de 2010 a 2015|orange]].', en: 'Marta lived in Bogotá from 2010 to 2015.' },
              { es: '[[Durante dos meses|orange]] [[trabajé|orange]] de noche.', en: 'For two months I worked nights.' },
              { es: 'Ayer [[estudiamos|orange]] [[toda la tarde|orange]].', en: 'Yesterday we studied all afternoon.' },
            ],
            note: 'Con una cantidad, «durante» es opcional: «Estuve tres días» = «Estuve durante tres días». También es muy útil **pasar**: «Pasé dos semanas en Lima» (I spent two weeks in Lima).' },
          { kind: 'table', title: 'Para medir un período terminado · Measuring a finished period', head: ['Expresión · Expression', 'Ejemplo con indefinido · Example'], rows: [
            ['cantidad · amount: **tres días, un año y medio**', '[[Viví|orange]] en Toronto [[un año y medio|orange]].'],
            ['**de** … **a** … · from … to …', '[[Trabajé|orange]] allí [[de 2019 a 2024|orange]].'],
            ['**desde** … **hasta** … · from … until …', '[[Estuve|orange]] en la oficina [[desde las ocho hasta las tres|orange]].'],
            ['**durante** + tiempo · for, during', '[[Durante el verano|orange]] [[trabajé|orange]] en un restaurante.'],
            ['**todo el / toda la** … · all …', '[[Llovió|orange]] [[todo el fin de semana|orange]].'],
            ['**hasta** + momento · until', 'Ayer [[esperé|orange]] el autobús [[hasta las diez|orange]].'],
          ], note: 'Fíjate en las parejas: **de … a** o **desde … hasta**. Se oye «de 2019 hasta 2024», pero en un texto cuidado se combinan así.' },
          { kind: 'tip', icon: '💡', title: 'Ya terminó o sigue hoy · Finished or still going', text: 'En la clase 230 viste: «**Vivo** aquí **desde hace** dos años» (sigue hoy). Hoy la situación **terminó**: «**Viví** allí dos años». Presente + desde hace: sigue. Indefinido + cantidad: terminó.', en: 'In class 230 you saw “Vivo aquí desde hace dos años” (it is still going on). Today the situation is over: “Viví allí dos años”. Present + desde hace: still going. Indefinido + amount of time: finished.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'El año pasado Julián ___ seis meses sin trabajo.', options: ['estaba', 'está', 'estuvo'], answer: 2, why: '«Seis meses» mide un período terminado: indefinido, estuvo.', en: 'Last year Julián was out of work for six months.' },
            { prompt: 'Marta trabajó en un banco ___ 2008 a 2010.', options: ['hace', 'de', 'desde hace'], answer: 1, why: 'La pareja es «de … a»: de 2008 a 2010.', en: 'Marta worked in a bank from 2008 to 2010.' },
            { prompt: 'Mi hermana vivió en Quito ___. Ahora vive en Cali.', options: ['desde hace tres años', 'tres años', 'hace tres años que'], answer: 1, why: 'Ya no vive en Quito: indefinido + cantidad, «vivió tres años». «Desde hace» es para algo que sigue.', en: 'My sister lived in Quito for three years. Now she lives in Cali.' },
          ] },
        ] },
        { title: 'Hábitos y veces · Habits and times', mascot: '/brand/mascot/speaking.webp', coach: '¿Cada sábado o tres veces? Every Saturday or three times?', blocks: [
          { kind: 'concept', tone: 'blue', label: 'CON QUÉ FRECUENCIA · IMPERFECTO', question: '¿Con qué frecuencia lo hacías? ¿Qué hacías siempre?', en: 'How often did you do it? What did you always do?', formula: ['imperfecto + siempre · a menudo · a veces · casi nunca · normalmente', 'imperfecto + cada sábado · todos los días · dos veces por semana'],
            meaning: 'Para contar una **costumbre** de una época del pasado, usas el **imperfecto** (clase 049). No cuentas cuántas veces en total: dices que se repetía.',
            examples: [
              { es: 'En el hostal, Julián [[siempre|blue]] [[empezaba|blue]] a las seis.', en: 'At the hostel, Julián always started at six.' },
              { es: 'En Toronto [[hablaba|blue]] inglés [[todos los días|blue]].', en: 'In Toronto he spoke English every day.' },
              { es: 'De niña, Marta [[iba|blue]] a la playa [[cada domingo|blue]].', en: 'As a girl, Marta went to the beach every Sunday.' },
            ] },
          { kind: 'concept', tone: 'violet', label: 'CUÁNTAS VECES · INDEFINIDO', question: '¿Cuántas veces fuiste? ¿Cuántas veces pasó?', en: 'How many times did you go? How many times did it happen?', formula: ['indefinido + una vez · dos veces · tres veces (en total)'],
            meaning: 'Si **cuentas** las veces, el total es un dato cerrado: usas el **indefinido**.',
            examples: [
              { es: 'Antes de vivir aquí, Julián [[estuvo|violet]] en Cartagena [[tres veces|violet]].', en: 'Before living here, Julián had been to Cartagena three times.' },
              { es: 'Marta [[fue|violet]] a Lisboa [[una vez|violet]], en 2018.', en: 'Marta went to Lisbon once, in 2018.' },
            ] },
          { kind: 'table', title: '«Veces»: el total o la frecuencia · “Times”: the total or the rate', head: ['TOTAL · indefinido', 'FRECUENCIA · imperfecto'], rows: [
            ['[[Fui|violet]] al gimnasio [[tres veces|violet]]. (I went three times, in total.)', '[[Iba|blue]] al gimnasio [[tres veces por semana|blue]]. (I went three times a week.)'],
            ['[[Llamé|violet]] a mi madre [[dos veces|violet]] ese día. (I called twice that day.)', '[[Llamaba|blue]] a mi madre [[dos veces al día|blue]]. (I used to call twice a day.)'],
          ], note: '«Tres veces» → un total: indefinido. «Tres veces **por** semana / **al** día / **al** mes» → una frecuencia, un hábito: imperfecto.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'En Toronto, Julián ___ en bicicleta casi todos los días.', options: ['va', 'iba', 'fue'], answer: 1, why: '«Casi todos los días»: un hábito de esa época. Imperfecto: iba.', en: 'In Toronto, Julián rode his bike almost every day.' },
            { prompt: 'Marta ___ a Lisboa dos veces en su vida.', options: ['fue', 'iba', 'va'], answer: 0, why: '«Dos veces en su vida»: un total contado. Indefinido: fue.', en: 'Marta went to Lisbon twice in her life.' },
            { prompt: 'De estudiante, yo ___ a mis abuelos dos veces al mes.', options: ['visité', 'visitaba', 'visito'], answer: 1, why: '«Dos veces al mes» es una frecuencia, un hábito de esa época: visitaba.', en: 'As a student, I visited my grandparents twice a month.' },
          ] },
        ] },
        { title: 'Hace + tiempo · Ago', mascot: '/autoestudio/mascot/noting.webp', coach: 'Hace dos días = two days ago.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'CUÁNDO · HACE + TIEMPO', question: '¿Cuándo pasó? ¿Cuándo fue?', en: 'When did it happen? When was it?', formula: ['verbo en pasado + hace + cantidad de tiempo', 'hace + cantidad de tiempo, + verbo en pasado'],
            meaning: '**Hace + tiempo** dice cuánto tiempo pasó **desde ese momento hasta hoy** (= ago). «Hace» va **delante** de la cantidad: hace dos días, nunca «dos días hace».',
            examples: [
              { es: 'Lo vi [[hace dos días|teal]].', en: 'I saw him two days ago.' },
              { es: 'Julián volvió de Canadá [[hace dos meses|teal]].', en: 'Julián came back from Canada two months ago.' },
              { es: '[[Hace cinco años|teal]], Julián [[vivía|blue]] en Medellín.', en: 'Five years ago, Julián lived in Medellín.' },
            ],
            note: '«Hace» solo dice **cuándo**. El verbo elige su forma: un hecho → indefinido («volvió hace dos meses»); cómo era tu vida en esa época → imperfecto («hace cinco años vivía en Medellín»). **Vi** es el indefinido de ver (I saw).' },
          { kind: 'compare', title: 'Cuidado: dos preguntas distintas · Careful: two different questions', columns: [
            { tone: 'orange', label: '¿CUÁNTO TIEMPO?', sentence: '[[Estuve|orange]] en Medellín [[tres días|orange]].', idea: 'La visita duró tres días.', en: 'I was in Medellín for three days. (how long it lasted)' },
            { tone: 'teal', label: '¿CUÁNDO?', sentence: '[[Estuve|orange]] en Medellín [[hace tres días|teal]].', idea: 'La visita fue tres días antes de hoy.', en: 'I was in Medellín three days ago. (when it was)' },
          ] },
          { kind: 'decide', title: '¿Qué forma necesitas? · Which form do you need?', steps: [
            { q: '¿Dices cuándo pasó algo, contando hacia atrás desde hoy? (When? — ago)', yes: 'Usa **hace + tiempo**: «Volví [[hace dos meses|teal]]».', no: 'next' },
            { q: '¿Dices cuánto duró algo que ya terminó, o cuántas veces pasó en total?', yes: 'Usa el **indefinido**: «[[Trabajé|orange]] allí [[cinco años|orange]]», «[[Fui|violet]] [[tres veces|violet]]».', no: 'next' },
            { q: '¿Describes una costumbre de una época? (siempre, a menudo, cada…, todos los…, dos veces por semana)', yes: 'Usa el **imperfecto**: «[[Cada sábado|blue]] [[organizaba|blue]] un paseo».', no: '¿La situación sigue hoy? Entonces usa presente + **desde hace** (clase 230): «Vivo aquí desde hace dos meses».' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Conocí a Marta ___.', options: ['dos años hace', 'hace dos años', 'desde hace dos años'], answer: 1, why: 'Conocer a alguien es un hecho terminado: verbo en pasado + hace dos años. «Hace» va delante.', en: 'I met Marta two years ago.' },
            { prompt: '«Estuve en Bogotá hace una semana» significa…', options: ['La visita duró una semana.', 'Estoy en Bogotá desde hace una semana.', 'La visita fue una semana antes de hoy.'], answer: 2, why: '«Hace una semana» dice cuándo, no cuánto duró.', en: '“Estuve en Bogotá hace una semana” means…' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: '¿Duración, total, hábito o cuándo?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la frase con el error y tu alumno dice qué pregunta responde (¿cuánto tiempo?, ¿cuántas veces?, ¿con qué frecuencia?, ¿cuándo?). Después aparece la corrección.', self: 'Lee cada frase y piensa qué pregunta responde. Toca para ver la corrección. (Which question does it answer?)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Estaba tres años en Medellín.', right: 'Estuve tres años en Medellín.', why: '«Tres años» mide un período terminado: indefinido, estuve. «Estaba» describe una situación sin medirla. (A measured, finished period: estuve.)' },
            { wrong: 'Antes de vivir aquí, iba a Cartagena tres veces.', right: 'Antes de vivir aquí, fui a Cartagena tres veces.', why: '«Tres veces» es un total contado: indefinido. Con «tres veces al año» sería un hábito: iba. (A counted total: fui.)' },
            { wrong: 'Viví en Toronto desde hace un año y medio.', right: 'Viví en Toronto un año y medio.', why: '«Desde hace» es para algo que sigue hoy (clase 230). Si ya terminó: indefinido + cantidad. (Finished: viví + amount of time.)' },
            { wrong: 'Lo vi dos días hace.', right: 'Lo vi hace dos días.', why: 'En español «hace» va delante: hace dos días. (Spanish puts “hace” first: hace dos días = two days ago.)' },
            { wrong: 'Trabajé allí de 2019 hasta 2024.', right: 'Trabajé allí de 2019 a 2024.', why: 'Las parejas son «de … a» o «desde … hasta». Mezclarlas se oye, pero no es correcto en un texto cuidado. (de … a / desde … hasta.)' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'El año pasado Marta ___ dos semanas en el hospital.', options: ['está', 'estaba', 'estuvo'], answer: 2, why: '«Dos semanas»: un período medido y terminado. Estuvo.', en: 'Last year Marta was in hospital for two weeks.' },
            { prompt: 'En la universidad, yo ___ a la biblioteca a menudo.', options: ['fui', 'voy', 'iba'], answer: 2, why: '«A menudo»: un hábito de esa época. Imperfecto: iba.', en: 'At university I often went to the library.' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno dice tres frases reales sobre su vida: una con «cuánto tiempo» («Viví … años en …»), una con un hábito («De niño, siempre…») y una con «hace» («Empecé a estudiar español hace…»).' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'La entrevista de Julián', coach: 'Toca las palabras marcadas. Tap the marked words.',
      steps: [
        { title: 'En el hotel Casa Bahía · At the Casa Bahía hotel', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Marta y tu alumno es Julián. Después tu alumno toca cada expresión marcada y dice qué pregunta responde: ¿cuánto tiempo?, ¿con qué frecuencia?, ¿cuántas veces? o ¿cuándo?', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada: ¿cuánto tiempo, con qué frecuencia, cuántas veces o cuándo?' } },
          { kind: 'explore', title: 'Hábleme de su experiencia', setting: 'Cartagena, en la oficina del hotel Casa Bahía. Marta Ruiz, la directora, entrevista a Julián Mora para el puesto de recepcionista. Los dos usan usted. (Cartagena, in the office of the Casa Bahía hotel. Marta, the manager, interviews Julián for the receptionist job.)', lines: [
            { who: 'Marta', text: 'Buenos días, Julián. Siéntese, por favor. En su currículum veo un hostal en Medellín. ¿[[Cuánto tiempo|orange]] trabajó allí?', en: 'Good morning, Julián. Please sit down. I see a hostel in Medellín on your CV. How long did you work there?' },
            { who: 'Julián', text: '[[Trabajé|orange]] allí [[cinco años|orange]], [[de 2019 a 2024|orange]]. Era recepcionista.', en: 'I worked there for five years, from 2019 to 2024. I was a receptionist.' },
            { who: 'Marta', text: '¿Y cómo era un día normal en el hostal?', en: 'And what was a normal day like at the hostel?' },
            { who: 'Julián', text: '[[Siempre|blue]] [[empezaba|blue]] a las seis de la mañana. Y [[cada sábado|blue]] [[organizaba|blue]] un paseo por el centro con los clientes.', en: 'I always started at six in the morning. And every Saturday I organised a walk around the centre with the guests.' },
            { who: 'Marta', text: '¿Hablaba inglés en el trabajo?', en: 'Did you speak English at work?' },
            { who: 'Julián', text: 'Sí, [[a menudo|blue]]. Y después [[viví|orange]] [[un año y medio|orange]] en Toronto. Allí [[hablaba|blue]] inglés [[todos los días|blue]].', en: 'Yes, often. And then I lived in Toronto for a year and a half. There I spoke English every day.' },
            { who: 'Marta', text: '¿Conoce bien Cartagena?', en: 'Do you know Cartagena well?' },
            { who: 'Julián', text: 'Bastante. Antes de vivir aquí, [[estuve|violet]] en Cartagena [[tres veces|violet]] de vacaciones.', en: 'Quite well. Before living here, I was in Cartagena three times on holiday.' },
            { who: 'Marta', text: '¿Y cuándo volvió de Canadá?', en: 'And when did you come back from Canada?' },
            { who: 'Julián', text: 'Volví [[hace dos meses|teal]]. ¿Sabe? Ya conozco este hotel: me alojé aquí [[una vez|violet]], [[hace cinco años|teal]].', en: 'I came back two months ago. You know what? I already know this hotel: I stayed here once, five years ago.' },
            { who: 'Marta', text: '¡Qué bien! ¿Y cuánto tiempo se quedó?', en: 'How nice! And how long did you stay?' },
            { who: 'Julián', text: 'Me [[quedé|orange]] [[una semana|orange]], con mi familia. [[Todas las tardes|blue]] [[íbamos|blue]] a la playa.', en: 'I stayed for a week, with my family. Every afternoon we went to the beach.' },
          ], notes: {
            'Cuánto tiempo': 'La pregunta por la duración: **¿cuánto tiempo** trabajó? La respuesta lleva indefinido + un período.',
            'Trabajé': 'Indefinido: Julián ya no trabaja en el hostal. El período terminó.',
            'cinco años': 'Una cantidad de tiempo: mide el período cerrado. Sin preposición (o «durante cinco años»).',
            'de 2019 a 2024': 'Principio y final del período: **de … a**. También «desde 2019 hasta 2024».',
            'Siempre': 'Siempre + imperfecto: una costumbre de esa época.',
            'empezaba': 'Imperfecto de empezar: lo que hacía todos los días, el hábito.',
            'cada sábado': 'Cada + día: algo que se repetía. Por eso el verbo va en imperfecto.',
            'organizaba': 'Imperfecto: un hábito de los sábados, no un sábado concreto.',
            'a menudo': 'Often. Una frecuencia: va con el imperfecto para hablar de costumbres.',
            'viví': 'Indefinido: un período terminado. Ya no vive en Toronto.',
            'un año y medio': 'A year and a half: la duración del período cerrado.',
            'hablaba': 'Imperfecto: una costumbre de su vida en Toronto.',
            'todos los días': 'Todos los + días / veranos / lunes: un hábito. Imperfecto.',
            'estuve': 'Indefinido de estar: aquí, con un número de veces. Un total contado.',
            'tres veces': 'Un total: tres veces en toda su vida. Por eso «estuve», no «estaba».',
            'hace dos meses': 'Ago: dos meses antes de hoy. «Hace» va delante de la cantidad.',
            'una vez': 'Once: un total de una vez. Va con indefinido (me alojé).',
            'hace cinco años': 'Ago: dice cuándo fue la visita, no cuánto duró.',
            'quedé': 'Quedarse en indefinido: me quedé. La estancia terminó.',
            'una semana': 'La duración de la estancia: una semana, un período cerrado.',
            'Todas las tardes': 'Todas las + tardes: un hábito dentro de esa semana.',
            'íbamos': 'Imperfecto de ir, nosotros: lo que hacían cada tarde. Una costumbre.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Cuánto tiempo vivió Julián en Toronto?', options: ['Dos meses.', 'Cinco años.', 'Un año y medio.'], answer: 2, why: '«Viví un año y medio en Toronto». Cinco años trabajó en Medellín.', en: 'How long did Julián live in Toronto?' },
            { prompt: '¿Qué hacía Julián cada sábado en el hostal?', options: ['Iba a la playa.', 'Empezaba a las seis.', 'Organizaba un paseo por el centro.'], answer: 2, why: '«Cada sábado organizaba un paseo por el centro con los clientes».', en: 'What did Julián do every Saturday at the hostel?' },
            { prompt: '¿Cuándo estuvo Julián en el hotel Casa Bahía?', options: ['De 2019 a 2024.', 'Hace cinco años.', 'Hace dos meses.'], answer: 1, why: '«Me alojé aquí una vez, hace cinco años». Hace dos meses volvió de Canadá.', en: 'When was Julián at the Casa Bahía hotel?' },
          ] },
        ] },
        { title: '¿Qué pregunta responde? · Which question does it answer?', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'classify', title: 'Las respuestas de Julián · Julián’s answers', categories: [
            { id: 'duracion', label: '¿CUÁNTO TIEMPO? · indefinido', tone: 'orange' },
            { id: 'frecuencia', label: '¿CON QUÉ FRECUENCIA? · imperfecto', tone: 'blue' },
            { id: 'veces', label: '¿CUÁNTAS VECES? · indefinido', tone: 'violet' },
            { id: 'cuando', label: '¿CUÁNDO? · hace', tone: 'teal' },
          ], items: [
            { text: 'Trabajé allí de 2019 a 2024.', answer: 'duracion', why: 'Principio y final del período: de … a.' },
            { text: 'Hablaba inglés todos los días.', answer: 'frecuencia', why: 'Todos los días + imperfecto: un hábito.' },
            { text: 'Estuve en Cartagena tres veces.', answer: 'veces', why: 'Un total contado: tres veces.' },
            { text: 'Volví hace dos meses.', answer: 'cuando', why: 'Hace + tiempo: dos meses antes de hoy.' },
            { text: 'Me quedé una semana.', answer: 'duracion', why: 'Una semana mide la estancia.' },
            { text: 'Cada sábado organizaba un paseo.', answer: 'frecuencia', why: 'Cada + día: algo que se repetía.' },
            { text: 'Me alojé aquí una vez.', answer: 'veces', why: 'Una vez: un total.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: «¿Y usted, cuánto tiempo estuvo en su último trabajo? ¿Qué hacía siempre allí?». Tu alumno responde con una frase de duración y una de hábito.' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Período o total: indefinido. Hábito: imperfecto.',
      steps: [
        { title: 'Las notas de Marta · Marta’s notes', blocks: [
          { kind: 'choice', items: [
            { context: 'Marta escribe sus notas sobre Julián. (Marta writes her notes.)', prompt: 'Julián ___ cinco años en un hostal de Medellín.', options: ['trabaja', 'trabajaba', 'trabajó'], answer: 2, why: '«Cinco años» mide un período que ya terminó: trabajó.', en: 'Julián worked in a hostel in Medellín for five years.' },
            { context: 'Marta escribe sus notas sobre Julián. (Marta writes her notes.)', prompt: 'En el hostal, ___ con los clientes extranjeros a menudo.', options: ['hablaba', 'habló', 'habla'], answer: 0, why: '«A menudo»: una costumbre de esa época. Imperfecto: hablaba.', en: 'At the hostel, he often spoke with foreign guests.' },
            { context: 'Marta escribe sus notas sobre Julián. (Marta writes her notes.)', prompt: 'Volvió a Colombia ___ dos meses.', options: ['desde hace', 'durante', 'hace'], answer: 2, why: 'Cuándo volvió: hace + tiempo = ago. «Volver» es un hecho de un momento.', en: 'He came back to Colombia two months ago.' },
            { context: 'Marta habla de su vida antes del hotel. (Marta talks about her life before the hotel.)', prompt: 'En Bogotá, yo ___ al teatro dos veces al mes.', options: ['fui', 'iba', 'voy'], answer: 1, why: '«Dos veces al mes» es una frecuencia, no un total: imperfecto, iba.', en: 'In Bogotá, I went to the theatre twice a month.' },
            { context: 'Marta habla de su vida antes del hotel. (Marta talks about her life before the hotel.)', prompt: 'En 2012 ___ una semana en Lisboa con mi madre.', options: ['pasé', 'pasaba', 'paso'], answer: 0, why: '«Una semana» en 2012: un período cerrado. Pasé (I spent).', en: 'In 2012 I spent a week in Lisbon with my mother.' },
            { context: 'Marta habla de su vida antes del hotel. (Marta talks about her life before the hotel.)', prompt: 'En toda mi vida, ___ a Europa solo dos veces.', options: ['viajaba', 'viajo', 'viajé'], answer: 2, why: '«Solo dos veces» en toda la vida: un total contado. Viajé.', en: 'In my whole life, I have travelled to Europe only twice.' },
          ] },
        ] },
        { title: '¿Total o frecuencia? · Total or rate?', blocks: [
          { kind: 'classify', title: '¿Qué tiempo pide la expresión? · Which tense does it call for?', categories: [
            { id: 'indef', label: 'INDEFINIDO · período cerrado o total (estuve, fui)', tone: 'orange' },
            { id: 'imperf', label: 'IMPERFECTO · hábito (estaba, iba)', tone: 'blue' },
          ], items: [
            { text: 'dos veces en total', answer: 'indef', why: 'Un total contado: indefinido («fui dos veces»).' },
            { text: 'dos veces por semana', answer: 'imperf', why: 'Una frecuencia, un ritmo: imperfecto («iba dos veces por semana»).' },
            { text: 'toda la noche', answer: 'indef', why: 'Un período con principio y final: indefinido («trabajé toda la noche»).' },
            { text: 'cada domingo de mi infancia', answer: 'imperf', why: 'Algo que se repetía en una época: imperfecto («cada domingo iba…»).' },
            { text: 'de 2015 a 2018', answer: 'indef', why: 'Los límites del período: indefinido («viví allí de 2015 a 2018»).' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Estaba tres semanas en Canadá el año pasado.', ok: false, options: ['Estoy tres semanas en Canadá el año pasado.', 'Estuve tres semanas en Canadá el año pasado.', 'Estaba desde hace tres semanas en Canadá el año pasado.'], answer: 1, why: '«Tres semanas» mide una estancia terminada: estuve.' },
            { sentence: 'Julián vivió en Toronto desde hace un año y medio.', ok: false, options: ['Julián vivió en Toronto desde un año y medio.', 'Julián vivía en Toronto desde hace un año y medio.', 'Julián vivió en Toronto un año y medio.'], answer: 2, why: 'Ya no vive allí: indefinido + cantidad. «Desde hace» es para algo que sigue hoy.' },
            { sentence: 'En el hostal, Julián siempre empezaba a las seis.', ok: true, why: 'Correcta: «siempre» + imperfecto para una costumbre de esa época.' },
            { sentence: 'Marta iba a Madrid dos veces en su vida.', ok: false, options: ['Marta fue a Madrid dos veces en su vida.', 'Marta va a Madrid dos veces en su vida.', 'Marta iba a Madrid dos veces por su vida.'], answer: 0, why: '«Dos veces en su vida» es un total: indefinido, fue.' },
            { sentence: 'Llegué a Cartagena dos meses hace.', ok: false, options: ['Llegaba a Cartagena dos meses hace.', 'Llegué a Cartagena hace dos meses.', 'Llegué a Cartagena desde hace dos meses.'], answer: 1, why: '«Hace» va delante de la cantidad, y llegar es un hecho terminado: llegué hace dos meses.' },
            { sentence: 'Trabajé en el hostal de 2019 hasta 2024.', ok: false, options: ['Trabajaba en el hostal de 2019 hasta 2024.', 'Trabajé en el hostal desde 2019 a 2024.', 'Trabajé en el hostal de 2019 a 2024.'], answer: 2, why: 'Las parejas son «de … a» o «desde … hasta»: de 2019 a 2024.' },
          ] },
        ] },
        { title: 'Otra candidata · Another candidate', blocks: [
          { kind: 'chat-fill', title: 'Marta entrevista a Daniela Soto · Marta interviews Daniela Soto', lines: [
            { who: 'Marta', text: 'Daniela, ¿cuánto tiempo ___ en su último trabajo?', options: ['estuvo', 'estaba', 'está'], answer: 0, why: 'Pregunta por la duración de un trabajo terminado: estuvo.' },
            { who: 'Daniela', text: 'Dos años. ___ en un hotel de Panamá de 2023 a 2025.', options: ['Trabajo', 'Trabajaba', 'Trabajé'], answer: 2, why: '«De 2023 a 2025»: los límites del período. Indefinido: trabajé.' },
            { who: 'Marta', text: '¿Y qué hacía allí normalmente?' },
            { who: 'Daniela', text: 'Normalmente ___ en la recepción, pero los fines de semana ___ en el restaurante.', options: ['estaba · ayudaba', 'estoy · ayudo', 'estuve · ayudé'], answer: 0, why: '«Normalmente» y «los fines de semana»: costumbres de esa época. Imperfecto: estaba · ayudaba.' },
            { who: 'Marta', text: '¿Tuvo problemas con algún cliente?' },
            { who: 'Daniela', text: 'Solo ___, en 2024: un señor perdió su pasaporte y lo buscamos juntos.', options: ['una vez', 'a menudo', 'cada semana'], answer: 0, why: 'Daniela cuenta un caso concreto: «una vez» (un total) va con indefinido (perdió, buscamos).' },
            { who: 'Marta', text: '¿Y qué hizo después de Panamá?' },
            { who: 'Daniela', text: '___ un curso de francés durante seis meses. Terminé ___ un mes.', options: ['Hice · hace', 'Hacía · desde hace', 'Hice · desde hace'], answer: 0, why: '«Durante seis meses»: un período cerrado, hice. Cuándo terminó: hace un mes (ago).' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['vivió', 'Julián', 'un', 'año', 'y', 'medio', 'en', 'Toronto'], accept: ['Julián vivió un año y medio en Toronto', 'Julián vivió en Toronto un año y medio'], en: 'Julián lived in Toronto for a year and a half.' },
            { tiles: ['organizaba', 'Cada', 'sábado', 'un', 'paseo'], accept: ['Cada sábado organizaba un paseo', 'Organizaba un paseo cada sábado'], en: 'Every Saturday he organised a walk.' },
            { tiles: ['hace', 'Volví', 'a', 'Cartagena', 'dos', 'meses'], accept: ['Volví a Cartagena hace dos meses', 'Hace dos meses volví a Cartagena'], en: 'I came back to Cartagena two months ago.' },
            { tiles: ['fue', 'Marta', 'a', 'Lisboa', 'dos', 'veces'], accept: ['Marta fue a Lisboa dos veces', 'Marta fue dos veces a Lisboa'], en: 'Marta went to Lisbon twice.' },
          ] },
        ] },
        { title: 'Transforma · Transform', blocks: [
          { kind: 'rewrite', title: 'Del presente al pasado · From present to past', items: [
            { prompt: 'Julián, en 2023: «Trabajo en un hostal desde hace cuatro años». (Hoy ya no trabaja allí y en total fueron cinco años.)', instruction: 'Escribe la frase de hoy: un período terminado de cinco años. Empieza con «Trabajé».', accept: ['Trabajé en un hostal cinco años', 'Trabajé cinco años en un hostal', 'Trabajé en un hostal durante cinco años', 'Trabajé durante cinco años en un hostal'] },
            { prompt: 'En Toronto · yo · hablar inglés · todos los días', instruction: 'Escribe un hábito de esa época. Empieza con «En Toronto».', accept: ['En Toronto hablaba inglés todos los días', 'En Toronto yo hablaba inglés todos los días', 'En Toronto todos los días hablaba inglés', 'En Toronto todos los días yo hablaba inglés'] },
            { prompt: 'Daniela terminó el curso en septiembre. Hoy es octubre.', instruction: 'Di cuándo terminó con «hace». Empieza con «Daniela».', accept: ['Daniela terminó el curso hace un mes', 'Daniela terminó hace un mes el curso', 'Daniela terminó hace un mes'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno cuenta su último trabajo, curso o viaje en tres frases: cuánto tiempo duró, qué hacía siempre y cuándo terminó (con «hace»).' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Una referencia por teléfono', coach: 'Primero escucha sin leer. Listen first, read later.',
      steps: [
        { title: 'La antigua jefa de Julián · Julián’s former boss', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general (¿qué opina Rosa de Julián?). Segunda escucha: tu alumno levanta la mano con cada duración (cinco años…) y da una palmada con cada hábito (siempre llegaba…). Después, las preguntas.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Fíjate en las duraciones, los hábitos y la expresión con «hace». (Listen once for the gist, once for the details.)' } },
          { kind: 'listen', title: 'Mensaje de voz de Rosa Pineda', channel: 'MENSAJE DE VOZ · DE ROSA PINEDA (MEDELLÍN) PARA MARTA RUIZ', src: '/audio/grammar-live/384.mp3',
            before: 'Marta llamó a la antigua jefa de Julián, en Medellín, para pedir una referencia. Rosa le deja un mensaje de voz. ¿Qué crees que cuenta: cuánto tiempo trabajó Julián allí, cómo trabajaba, si es responsable…? (Marta called Julián’s former boss for a reference. What do you think she says?)',
            gist: { prompt: '¿Cuál es la idea general? · What is the main idea?', options: ['Rosa habla muy bien de Julián y de su trabajo en el hostal.', 'Rosa quiere contratar otra vez a Julián.', 'Rosa no recuerda bien a Julián.'], answer: 0, why: 'Rosa cuenta su experiencia con Julián y dice: «Es una persona muy responsable».', en: 'What is the main idea?' },
            details: [
              { prompt: '¿Cuánto tiempo trabajó Julián en el hostal?', options: ['Cinco años.', 'Dos años.', 'Tres meses.'], answer: 0, why: '«Trabajó con nosotros cinco años, de 2019 a 2024».', en: 'How long did Julián work at the hostel?' },
              { prompt: '¿Qué hacía Julián cada sábado?', options: ['Organizaba un paseo por el centro.', 'Trabajaba en la cocina.', 'Llegaba tarde.'], answer: 0, why: '«Cada sábado organizaba un paseo por el centro con los huéspedes».', en: 'What did Julián do every Saturday?' },
              { prompt: '¿Por qué estuvo Julián tres meses de encargado?', options: ['Porque Rosa estuvo enferma.', 'Porque Rosa estaba de vacaciones.', 'Porque el encargado se fue a Canadá.'], answer: 0, why: '«Estuvo tres meses de encargado, cuando yo estuve enferma».', en: 'Why was Julián the manager for three months?' },
              { prompt: '¿Cuándo habló Rosa con Julián por última vez?', options: ['Hace una semana.', 'Hace un año.', 'Ayer.'], answer: 0, why: '«Hablé con él hace una semana».', en: 'When did Rosa last talk to Julián?' },
            ],
            transcript: 'Buenas tardes, señora Ruiz. Le habla Rosa Pineda, del hostal Las Palmas, en Medellín. Recibí su mensaje sobre Julián Mora y con mucho gusto le cuento. Julián [[trabajó|orange]] con nosotros [[cinco años|orange]], [[de 2019 a 2024|orange]]. [[Siempre|blue]] [[llegaba|blue]] puntual, y [[cada sábado|blue]] [[organizaba|blue]] un paseo por el centro con los huéspedes. A los clientes les encantaba. En 2022 [[estuvo|orange]] [[tres meses|orange]] de encargado, cuando yo [[estuve|orange]] enferma, y no tuvimos ni un problema. Ah, y [[ganó|violet]] el premio al mejor empleado del año [[dos veces|violet]]. Hablé con él [[hace una semana|teal]] y me contó lo de la entrevista. Es una persona muy responsable. Si necesita más información, llámeme a este número. Un saludo.',
            reply: { teacher: 'Tú eres Rosa. Tu alumno es Marta y te devuelve la llamada: da las gracias y hace dos preguntas más sobre Julián («¿Con qué frecuencia…?», «¿Cuánto tiempo…?»). Tú respondes.', self: 'Responde a Rosa en voz alta como Marta: da las gracias y haz dos preguntas más sobre Julián, una con «¿Con qué frecuencia…?» y otra con «¿Cuánto tiempo…?». (Answer as Marta and ask two more questions.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Tu experiencia', coach: 'Cuánto tiempo, con qué frecuencia, cuándo. How long, how often, when.',
      steps: [
        { title: 'Tu vida en el pasado · Your life in the past', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas y tu alumno habla de su vida real (o inventa una). Tú repites su frase con la forma correcta y sigues con la repregunta. En la última tarjeta, tú eres Marta y haces una entrevista.', self: 'Lee la pregunta y responde en voz alta sobre tu vida (o inventa). Si quieres, escribe tu respuesta. (Answer aloud about your own life.)' } },
          { kind: 'talk', cards: [
            { q: '¿En qué ciudades o casas viviste antes? ¿Cuánto tiempo viviste en cada una? · Where did you live before? How long did you live in each place?', followUps: ['¿De qué año a qué año? (From which year to which year?)', '¿Dónde viviste más tiempo? (Where did you live longest?)'], phrases: ['[[Viví|orange]] en … [[tres años|orange]].', '[[Viví|orange]] allí [[de 2015 a 2019|orange]].', 'Después [[pasé|orange]] [[un año|orange]] en …'], hint: 'Si ya no vives allí: indefinido + cantidad o «de … a». Si todavía vives allí: «Vivo aquí desde hace…».', example: 'Viví en Puebla de 2012 a 2018. Después pasé un año en Monterrey. Ahora vivo en Ciudad de México desde hace siete años.', next: 'Ahora, el trabajo o los estudios.', teacher: 'Cuenta tú también dónde viviste y cuánto tiempo. Así tu alumno oye otra vez «viví … años».' },
            { q: '¿Qué trabajos o estudios hiciste? ¿Cuánto tiempo duró cada uno? · What jobs or studies did you do? How long did each one last?', followUps: ['¿Cuál fue tu primer trabajo? (What was your first job?)', '¿Estuviste mucho tiempo allí? (Were you there long?)'], phrases: ['[[Trabajé|orange]] en … [[dos años|orange]].', '[[Estudié|orange]] … [[de 2010 a 2014|orange]].', '[[Estuve|orange]] [[seis meses|orange]] en …'], hint: 'Cada trabajo terminado es un período cerrado: indefinido + duración.', example: 'Mi primer trabajo fue en una tienda de ropa. Trabajé allí dos años, de 2010 a 2012. Después estudié Turismo cuatro años.', next: 'Ahora, las costumbres de esa época.' },
            { q: '¿Cómo era un día normal en ese trabajo o en la universidad? ¿Qué hacías siempre? · What was a normal day like? What did you always do?', followUps: ['¿A qué hora empezabas? (What time did you start?)', '¿Qué hacías los fines de semana? (What did you do at weekends?)'], phrases: ['[[Siempre|blue]] [[empezaba|blue]] a las …', '[[Cada lunes|blue]] / [[Todos los viernes|blue]] …', '[[A menudo|blue]] / [[A veces|blue]] [[comía|blue]] con …'], hint: 'Las costumbres de una época van en imperfecto: empezaba, comía, iba.', example: 'Siempre empezaba a las nueve. A menudo comía con mis compañeros y todos los viernes íbamos a bailar.', next: 'Ahora, cuántas veces.' },
            { q: '¿Hay un lugar que visitaste varias veces? ¿Cuántas veces fuiste? · Is there a place you visited several times? How many times did you go?', followUps: ['¿Cuál fue la última vez? (When was the last time?)', '¿Ibas allí con frecuencia de niño? (Did you go there often as a child?)'], phrases: ['[[Fui|violet]] a … [[tres veces|violet]].', '[[Estuve|violet]] allí [[una vez|violet]], en …', 'De niño [[iba|blue]] [[cada verano|blue]].'], hint: 'Un total (tres veces) → indefinido. Una costumbre (cada verano) → imperfecto.', example: 'Fui a Cusco tres veces. De niña iba cada verano a la casa de mis abuelos en la costa.', next: 'Ahora, cuándo fue la última vez.', teacher: 'Pregunta: «¿Y cuántas veces por año ibas?». Tu alumno ve la diferencia entre «fui tres veces» e «iba tres veces por año».' },
            { q: '¿Cuándo fue la última vez que viajaste, que fuiste a un concierto o que hablaste español con alguien nuevo? · When was the last time you travelled, went to a concert or spoke Spanish with someone new?', followUps: ['¿Cuánto tiempo estuviste allí? (How long were you there?)', '¿Con quién fuiste? (Who did you go with?)'], phrases: ['[[Hace dos semanas|teal]] fui a …', '[[Viajé|orange]] a … [[hace un año|teal]].', '[[Estuve|orange]] allí [[cuatro días|orange]].'], hint: 'Cuándo: hace + tiempo, delante de la cantidad. Cuánto duró: indefinido + duración.', example: 'Hace dos semanas fui a un concierto en el centro. Viajé a Oaxaca hace un año y estuve allí cuatro días.', next: 'Ahora, la entrevista.' },
            { q: 'Ahora estás en la entrevista. Marta dice: «Hábleme de su experiencia». Responde en seis frases. · Now you are in the interview. Talk about your experience in six sentences.', followUps: ['¿Y qué hacía allí normalmente? (And what did you usually do there?)', '¿Cuándo terminó ese trabajo? (When did that job end?)'], phrases: ['[[Trabajé|orange]] en … [[de 2016 a 2020|orange]].', '[[Siempre|blue]] / [[Cada|blue]] … + imperfecto', 'Terminé [[hace|teal]] …'], hint: 'Dos duraciones (indefinido), dos hábitos (imperfecto), un total (… veces) y un «hace».', example: 'Trabajé en una agencia de viajes de 2016 a 2020. Allí siempre atendía a los clientes y a menudo organizaba excursiones. Después estudié inglés un año. Fui a Londres dos veces. Terminé mi último trabajo hace tres meses.', teacher: 'Tú eres Marta y reaccionas: «¿Cuánto tiempo exactamente?», «¿Y con qué frecuencia…?». Después cambian los papeles.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno es Marta y hace la entrevista («¿Cuánto tiempo trabajó…?», «¿Qué hacía siempre?», «¿Cuándo terminó?») y tú respondes.', self: 'Ahora tú eres Marta: haz las preguntas en voz alta («¿Cuánto tiempo trabajó…?», «¿Con qué frecuencia…?», «¿Cuándo…?») y responde como Julián. (Now ask the questions as Marta.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Tu experiencia por escrito', coach: 'Duración, hábito, hace. Duration, habit, ago.',
      steps: [
        { title: 'Un correo para Marta · An email to Marta', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos cada verbo: ¿período cerrado o total (indefinido) o hábito (imperfecto)? Después, tu alumno lee su correo en voz alta.', self: 'Escribe tu correo y toca «Revisar mi texto». Después, mira cada verbo: ¿período cerrado, total o hábito? (Write your email and tap “Revisar mi texto”.)' } },
          { kind: 'write', title: 'Mi experiencia · My experience', situation: 'Marta pide a los candidatos un correo corto con su experiencia. Escríbele sobre tu experiencia real (o eres Julián o Daniela). (Marta asks the candidates for a short email about their experience. Write about your real experience, or be Julián or Daniela.)', task: [
            'Saluda y di para qué puesto escribes. (Say hello and which job you are writing about.)',
            'Cuenta dos trabajos, estudios o lugares con su duración: indefinido + «… años», «de … a …» o «durante». (Two finished periods with their length.)',
            'Describe una costumbre de esa época con el imperfecto y «siempre», «a menudo», «cada…» o «todos los…». (A habit with the imperfect.)',
            'Di cuándo pasó algo con «hace»: volví, terminé, empecé… (Say when something happened with “hace”.)',
            'Despídete con cortesía. (Say goodbye politely.)',
          ], starters: ['Estimada señora Ruiz:', 'Le escribo por el puesto de…', 'Trabajé en … de … a …', 'Viví … años en…', 'Allí siempre…', 'Todos los días…', 'Terminé / Volví hace…', 'Atentamente,'],
            words: ['trabajé', 'viví', 'estuve', 'pasé', 'estudié', 'de … a', 'durante', 'siempre', 'a menudo', 'cada', 'todos los días', 'empezaba', 'hablaba', 'organizaba', 'hace'],
            model: 'Estimada señora Ruiz: Le escribo por el puesto de recepcionista. [[Trabajé|orange]] en un hostal de Medellín [[de 2019 a 2024|orange]]. Allí [[siempre|blue]] [[empezaba|blue]] a las seis y [[cada sábado|blue]] [[organizaba|blue]] un paseo por el centro con los clientes. Después [[viví|orange]] [[un año y medio|orange]] en Toronto. Trabajaba en una cafetería y [[hablaba|blue]] inglés [[todos los días|blue]]. Conozco bien Cartagena: [[estuve|violet]] aquí [[tres veces|violet]] de vacaciones. Volví a Colombia [[hace dos meses|teal]] y ahora busco trabajo en un hotel. Muchas gracias por su tiempo. Atentamente, Julián Mora.',
            minWords: 70,
            checks: [
              { label: 'Una duración: tres años, de … a …, durante… (a length of time)', pattern: '(?<!\\p{L})(?:de\\s+\\d{4}\\s+a\\s+\\d{4}|desde\\s+\\d{4}\\s+hasta\\s+\\d{4}|durante|todo\\s+el|toda\\s+la|(?<!hace\\s+)(?:un|una|dos|tres|cuatro|cinco|seis|siete|ocho|nueve|diez|\\d+)\\s+(?:años?|meses|mes|semanas?|días?))(?!\\p{L})', tip: 'Mide un período terminado: «Trabajé allí cinco años», «Viví en … de 2015 a 2019».' },
              { label: 'Una frecuencia: siempre, a menudo, cada… (how often)', pattern: '(?<!\\p{L})(?:siempre|a\\s+menudo|a\\s+veces|normalmente|casi\\s+nunca|cada|todos\\s+los|todas\\s+las|veces\\s+(?:por|al))(?!\\p{L})', tip: 'Cuenta una costumbre: «Allí siempre empezaba a las seis», «Cada sábado organizaba…».' },
              { label: 'Un verbo en imperfecto para el hábito (an imperfect verb)', pattern: '(?<!\\p{L})(?:era|iba|íbamos|\\p{L}{2,}aba|\\p{L}{2,}ábamos|\\p{L}{2,}aban|tenía|hacía|vivía|comía|salía|había|podía|quería|escribía|tenían|hacían|vivían|comían|salían)(?!\\p{L})', tip: 'El hábito va en imperfecto: empezaba, hablaba, iba, comía.' },
              { label: 'Hace + tiempo (ago)', pattern: '(?<!\\p{L})hace\\s+(?:un|una|dos|tres|cuatro|cinco|seis|siete|ocho|nueve|diez|\\d+|unos|unas|mucho|poco)(?!\\p{L})', tip: 'Di cuándo pasó algo: «Volví hace dos meses», «Terminé el curso hace un año».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})estaba\\s+(?:un|una|dos|tres|cuatro|cinco|seis|siete|ocho|nueve|diez|\\d+)\\s+(?:años?|meses|mes|semanas?|días?|horas?)(?!\\p{L})', why: 'Para medir un período terminado, usa el indefinido: **estuve** tres años, no «estaba tres años».' },
              { pattern: '(?<!\\p{L})de\\s+\\d{4}\\s+hasta(?!\\p{L})', why: 'Las parejas son **de 2019 a 2024** o **desde 2019 hasta 2024**.' },
              { pattern: '(?<!\\p{L})(?:viví|trabajé|estuve|estudié|pasé)\\s+(?:\\p{L}+\\s+){0,4}desde\\s+hace(?!\\p{L})', why: '«Desde hace» es para algo que sigue hoy. Si ya terminó: **viví allí tres años**.' },
              { pattern: '(?<!\\p{L})(?:\\d+|un|una|dos|tres|cuatro|cinco|seis|siete|ocho|nueve|diez)\\s+(?:años?|meses|mes|semanas?|días?)\\s+hace(?!\\p{L})', why: '«Hace» va delante de la cantidad: **hace dos meses**.' },
            ] },
        ] },
      ],
    },
    {
      id: 'cerrar', label: 'Cerrar', icon: '✓', mascot: '/brand/mascot/standing.webp',
      title: 'Lo esencial', coach: '¿Qué te llevas hoy? What do you take with you?',
      steps: [
        { title: 'Lo esencial · The essentials', blocks: [
          { kind: 'recap', items: [
            { tone: 'orange', label: 'CUÁNTO TIEMPO · INDEFINIDO', formula: 'estuve / viví / trabajé + tres años · de 2019 a 2024 · durante · toda la tarde', example: 'Trabajé en un hostal cinco años.', caption: 'un período con principio y final, corto o largo', en: 'a period with a start and an end, short or long' },
            { tone: 'violet', label: 'CUÁNTAS VECES · INDEFINIDO', formula: 'fui / estuve + una vez · dos veces · tres veces', example: 'Estuve en Cartagena tres veces.', caption: 'un total contado', en: 'a counted total' },
            { tone: 'blue', label: 'CON QUÉ FRECUENCIA · IMPERFECTO', formula: 'siempre · a menudo · cada sábado · todos los días · dos veces por semana', example: 'Cada sábado organizaba un paseo.', caption: 'una costumbre de esa época', en: 'a habit of that time' },
            { tone: 'teal', label: 'CUÁNDO · HACE', formula: 'verbo en pasado + hace + tiempo', example: 'Volví hace dos meses.', caption: 'ago: «hace» siempre delante', en: 'ago: “hace” always goes first' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Pregúntate qué quieres decir. **¿Cuánto duró?** o **¿cuántas veces en total?** → indefinido: «estuve tres años», «fui dos veces». **¿Con qué frecuencia lo hacías?** → imperfecto: «iba cada verano», «iba dos veces por semana». **¿Cuándo?** → hace + tiempo: «lo vi hace dos días». Y si la situación sigue hoy, presente + desde hace (clase 230).', en: 'Ask yourself what you want to say. How long did it last? or How many times in total? → indefinido: “estuve tres años”, “fui dos veces”. How often did you do it? → imperfect: “iba cada verano”, “iba dos veces por semana”. When? → hace + time: “lo vi hace dos días”. And if the situation is still going on, present + desde hace (class 230).' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'Anoche ___ en la oficina hasta las once.', options: ['estaba', 'estuve', 'estoy'], answer: 1, why: '«Hasta las once»: un período con final. Estuve.', en: 'Last night I was at the office until eleven.' },
            { prompt: 'De niño, mi padre me ___ un cuento todas las noches.', options: ['leía', 'leyó', 'lee'], answer: 0, why: '«Todas las noches» en una época: un hábito. Leía.', en: 'When I was a child, my father read me a story every night.' },
            { prompt: 'Empecé a estudiar español ___ un año.', options: ['desde hace', 'durante', 'hace'], answer: 2, why: 'Cuándo empecé: verbo en pasado + hace un año (ago).', en: 'I started studying Spanish a year ago.' },
            { prompt: 'El mes pasado ___ al médico tres veces.', options: ['voy', 'fui', 'iba'], answer: 1, why: '«Tres veces» en un mes concreto: un total contado. Fui.', en: 'Last month I went to the doctor three times.' },
            { prompt: 'Mi abuela ___ en Mendoza cuarenta años. Ahora vive con nosotros.', options: ['vivió', 'vivía desde hace', 'vive'], answer: 0, why: 'Ya no vive en Mendoza: un período terminado, vivió cuarenta años.', en: 'My grandmother lived in Mendoza for forty years. Now she lives with us.' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Ahora, la vida de Marta.', blocks: [
          { kind: 'lead', text: 'Julián consiguió el trabajo. En su primer día, Marta le cuenta su vida antes del hotel. Escribe sus frases con la forma correcta.', en: 'Julián got the job. On his first day, Marta tells him about her life before the hotel. Write her sentences with the right form.' },
          { kind: 'rewrite', title: 'La vida de Marta · Marta’s life', items: [
            { prompt: 'yo · vivir en Madrid · de 2008 a 2012', instruction: 'Escribe la frase de Marta en pasado. Empieza con «Viví».', accept: ['Viví en Madrid de 2008 a 2012'] },
            { prompt: 'en Madrid · yo · ir al parque · todos los domingos', instruction: 'Es una costumbre de esa época. Empieza con «En Madrid».', accept: ['En Madrid iba al parque todos los domingos', 'En Madrid yo iba al parque todos los domingos', 'En Madrid todos los domingos iba al parque', 'En Madrid todos los domingos yo iba al parque'] },
            { prompt: 'yo · abrir el hotel · diez años antes de hoy', instruction: 'Di cuándo con «hace». Empieza con «Abrí».', accept: ['Abrí el hotel hace diez años'] },
          ] },
        ] },
        { title: 'Ampliación · Hace … que y hábitos con límites', mascot: '/autoestudio/mascot/noting.webp', coach: 'Opcional: un paso más. Optional: one step further.', blocks: [
          { kind: 'lead', text: 'Dos detalles para estudiantes rápidos. Primero: «Volví hace dos meses» también se dice «**Hace dos meses que volví**». Segundo: una costumbre normalmente va en imperfecto, pero si das los **límites** de toda la serie, también puedes usar el indefinido: así la presentas como un período cerrado.', en: 'Two details for fast learners. First: “Volví hace dos meses” can also be said “Hace dos meses que volví”. Second: a habit normally goes in the imperfect, but if you give the limits of the whole series, you can also use the indefinido: that way you present it as a closed period.' },
          { kind: 'compare', title: 'Un hábito, dos miradas · One habit, two views', columns: [
            { tone: 'blue', label: 'DESCRIBES LA ÉPOCA', sentence: 'De niña, Marta [[iba|blue]] a Santa Marta [[todos los veranos|blue]].', idea: 'Cómo era su vida entonces: imperfecto.', en: 'As a girl, Marta went to Santa Marta every summer. (describing that time)' },
            { tone: 'orange', label: 'CIERRAS EL PERÍODO', sentence: '[[De 2010 a 2015|orange]], Marta [[fue|orange]] a Santa Marta [[todos los veranos|blue]].', idea: 'Un período con límites, ya cerrado: indefinido también es correcto.', en: 'From 2010 to 2015, Marta went to Santa Marta every summer. (a closed, dated period)' },
          ] },
          { kind: 'choice', title: 'Para estudiantes rápidos · For fast learners', items: [
            { prompt: '«Hace un año que terminé la carrera» significa…', options: ['Estudié la carrera durante un año.', 'Terminé la carrera hace un año.', 'Estudio la carrera desde hace un año.'], answer: 1, why: 'Hace + tiempo + que + indefinido = indefinido + hace + tiempo: cuándo pasó.', en: '“Hace un año que terminé la carrera” means…' },
            { prompt: '«De 2016 a 2019 trabajé todos los sábados» y «De estudiante, trabajaba todos los sábados». ¿Son correctas?', options: ['Solo la segunda.', 'Solo la primera.', 'Sí, las dos: la primera cierra un período con límites; la segunda describe la época.'], answer: 2, why: 'Con los límites del período (de 2016 a 2019), el indefinido es correcto. Sin límites, para describir la época, el imperfecto.', en: 'Are both sentences correct?' },
          ] },
          { kind: 'rewrite', title: 'Otra forma · Another way', items: [
            { prompt: 'Conocí a Marta hace cinco años.', instruction: 'Escribe la misma idea con «Hace … que».', accept: ['Hace cinco años que conocí a Marta'] },
          ] },
          { kind: 'teacher', text: 'Este paso es opcional: para estudiantes rápidos o si sobra tiempo. Lo importante de la clase es: período o total → indefinido; hábito → imperfecto; cuándo → hace.' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 085 · Revisión narrativa A2 y mensajes prácticos', text: 'Ya dices cuánto duró algo («Estuve tres años»), con qué frecuencia lo hacías («Iba cada verano»), cuántas veces pasó («Fui dos veces») y cuándo («Lo vi hace dos días»). En la clase 085 juntas todo lo que sabes del pasado para contar historias completas y escribir mensajes prácticos: «Ayer llegué tarde porque había tráfico». Es el paso natural: ahora que mides el tiempo con precisión, cuentas historias enteras.', en: 'You can now say how long something lasted (“Estuve tres años”), how often you did it (“Iba cada verano”), how many times it happened (“Fui dos veces”) and when (“Lo vi hace dos días”). In class 085 you put together everything you know about the past to tell complete stories and write practical messages: “Ayer llegué tarde porque había tráfico”. It is the natural next step: now that you measure time precisely, you tell whole stories.', href: '/gramatica/revision-narrativa-a2-y-mensajes-practicos', label: 'Ir a la clase 085' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Cuánto tiempo estudiaste en el colegio o en la universidad, qué hacías siempre allí y cuándo terminaste?». Respuesta esperada: una duración, un hábito y un «hace». Tarea: escribir el correo de Escribir sobre su experiencia real.' },
        ] },
      ],
    },
  ],
};
