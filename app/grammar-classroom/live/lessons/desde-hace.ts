import type { LiveLesson } from '../types';

/**
 * Lesson 230 · A2 · Desde, desde hace y hace.
 * Classroom "now": October 2026. Every date in the class is computed from it,
 * and the same neighbourhood (Elena, Andrés, Pablo) runs through every section.
 */
export const desdeHace: LiveLesson = {
  id: 230,
  level: 'A2',
  title: 'Desde, desde hace y hace',
  subtitle: 'Decir cuándo empezó algo, cuánto tiempo dura y cuánto tiempo pasó desde un hecho.',
  now: 'octubre de 2026',
  legend: [
    { tone: 'blue', label: 'Desde · un momento' },
    { tone: 'teal', label: 'Desde hace / hace… que · una duración que sigue' },
    { tone: 'orange', label: 'Hace + pasado · un hecho terminado' },
  ],
  optionNotes: {
    desde: '«Desde» va con un momento: una fecha, un mes, un día. Aquí hay otra cosa.',
    Desde: '«Desde» va con un momento: una fecha, un mes, un día. Aquí hay otra cosa.',
    'desde hace': '«Desde hace» necesita una cantidad de tiempo y una situación que sigue hoy.',
    'Desde hace': '«Desde hace» necesita una cantidad de tiempo y una situación que sigue hoy.',
    hace: '«Hace» solo, con el verbo en pasado, cuenta el tiempo desde un hecho terminado.',
    Hace: '«Hace» solo, con el verbo en pasado, cuenta el tiempo desde un hecho terminado.',
    durante: '«Durante» mide un período cerrado, que ya terminó.',
    por: '«Por» no sirve para decir cuánto tiempo dura algo que sigue hoy.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Desde, desde hace y hace', coach: 'Una historia, tres formas de contarla.',
      steps: [
        { title: 'Tres frases, tres ideas', blocks: [
          { kind: 'lead', text: 'Hoy es octubre de 2026. Ana llegó a su casa en octubre de 2024 y **todavía vive allí**. Mira cómo cambia la información en cada frase.', en: 'Same story, different information: start point, duration, or time since an event.' },
          { kind: 'guide', text: { teacher: 'Toquen juntos cada frase. Antes de mostrar la explicación, pregunta: «¿Qué información nueva da esta frase?».', self: 'Toca cada frase y mira qué cambia en la línea del tiempo.' } },
          { kind: 'visual', visual: 'time-compare' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: '¿Qué frase dice **cuándo empezó** la situación?', options: ['Vivo acá desde octubre de 2024.', 'Vivo acá desde hace dos años.', 'Me mudé acá hace dos años.'], answer: 0, why: '«Desde octubre de 2024» marca el punto de inicio.' },
            { prompt: '¿Qué frase habla de **un hecho terminado**?', options: ['Hace dos años que vivo acá.', 'Me mudé acá hace dos años.', 'Vivo acá desde hace dos años.'], answer: 1, why: 'La mudanza pasó y terminó: verbo en pasado + hace.' },
          ] },
        ] },
        { title: 'Desde + un momento', mascot: '/brand/mascot/studying.webp', coach: 'Después de «desde» va un momento.', blocks: [
          { kind: 'concept', art: 'calendar-start', tone: 'blue', label: 'DESDE', question: '¿Desde cuándo?', en: 'since', formula: ['presente + desde + un momento'],
            meaning: 'Dice **cuándo empezó** algo que **todavía continúa**. Después de «desde» va un momento: una fecha, un año, un mes, un día o una hora.',
            examples: [
              { es: 'Vivo acá [[desde octubre de 2024|blue]].', en: 'I have lived here since October 2024.' },
              { es: 'Estudio español [[desde marzo|blue]].', en: 'I have been studying Spanish since March.' },
              { es: 'Trabajo [[desde las ocho|blue]] y todavía no almorcé.', en: 'I have been working since eight.' },
            ],
            note: 'Con un verbo: «Hablo inglés [[desde que era niño|blue]]».' },
          { kind: 'tip', icon: '!', title: 'Mira el verbo', text: 'El verbo va en **presente** porque la situación sigue hoy: «Viv**o** acá desde 2024». En inglés se usa otro tiempo verbal; en español, no.', en: 'English says “I have lived”; Spanish uses the present: vivo.' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'Trabajo en este hospital ___ enero.', options: ['desde', 'desde hace', 'hace'], answer: 0, why: 'Enero es un momento.' },
            { prompt: 'Mi hermano no come carne ___ el verano pasado.', options: ['hace', 'desde', 'desde hace'], answer: 1, why: '«El verano pasado» es un momento y mi hermano sigue sin comer carne.' },
          ] },
        ] },
        { title: 'Desde hace + una cantidad', mascot: '/brand/mascot/speaking.webp', coach: 'Si puedes contarlo, es una cantidad.', blocks: [
          { kind: 'concept', art: 'duration-clock', tone: 'teal', label: 'DESDE HACE · HACE… QUE', question: '¿Cuánto tiempo hace?', en: 'for', formula: ['presente + desde hace + cantidad de tiempo', 'hace + cantidad de tiempo + que + presente'],
            meaning: 'Dice **cuánto tiempo dura** una situación desde que empezó **hasta hoy**. La situación continúa. Las dos fórmulas significan lo mismo.',
            examples: [
              { es: 'Vivo acá [[desde hace dos años|teal]].', en: 'I have lived here for two years.' },
              { es: '[[Hace dos años que|teal]] vivo acá.', en: 'I have lived here for two years.' },
              { es: '[[Hace un mes que|teal]] no veo a mi familia.', en: 'I haven’t seen my family for a month.' },
            ] },
          { kind: 'tip', icon: '🔑', title: 'El truco', text: 'Después de **desde** va un **momento** (marzo, 2024, el lunes). Después de **desde hace** va una **cantidad** (tres días, dos años, mucho tiempo). Si puedes contarlo, es una cantidad.' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'Estudio piano ___ tres años.', options: ['desde', 'desde hace', 'hace'], answer: 1, why: 'Tres años es una cantidad y sigo estudiando.' },
            { prompt: '___ seis meses que trabajo en esta empresa.', options: ['Desde', 'Hace', 'Desde hace'], answer: 1, why: 'Hace + cantidad + que + presente: la situación sigue.' },
          ] },
        ] },
        { title: 'Hace + un hecho terminado', mascot: '/autoestudio/mascot/noting.webp', coach: 'Un hecho que pasó y terminó.', blocks: [
          { kind: 'concept', art: 'past-trip', tone: 'orange', label: 'HACE + PASADO', question: '¿Cuándo pasó?', en: 'ago', formula: ['verbo en pasado + hace + cantidad de tiempo'],
            meaning: 'Cuenta **cuánto tiempo pasó** desde un hecho que ocurrió y **terminó**. Contamos hacia atrás, desde hoy.',
            examples: [
              { es: 'Me mudé acá [[hace dos años|orange]].', en: 'I moved here two years ago.' },
              { es: '[[Hace dos semanas|orange]] cambié de trabajo.', en: 'I changed jobs two weeks ago.' },
              { es: 'Te llamé [[hace un rato|orange]].', en: 'I called you a little while ago.' },
            ] },
          { kind: 'compare', title: 'Atención: «hace» aparece en dos construcciones', columns: [
            { tone: 'teal', label: 'HACE … QUE + PRESENTE', sentence: '[[Hace dos años que|teal]] **vivo** acá.', idea: 'Una situación que sigue: dos años de vida acá, hasta hoy.', en: 'for' },
            { tone: 'orange', label: 'PASADO + HACE', sentence: '**Me mudé** acá [[hace dos años|orange]].', idea: 'Un hecho terminado: la mudanza pasó hace dos años.', en: 'ago' },
          ] },
          { kind: 'tip', icon: '👀', title: 'El verbo decide', text: 'Con «hace», mira el verbo: en **presente**, la situación sigue; en **pasado**, el hecho terminó.' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'Conocí a mi pareja ___ cinco años.', options: ['desde', 'desde hace', 'hace'], answer: 2, why: 'Conocer a alguien es un hecho terminado: pasado + hace.' },
            { prompt: '«Hace un año que trabajo acá.» ¿Sigo trabajando acá?', options: ['Sí, la situación sigue.', 'No, ya terminó.'], answer: 0, why: 'Hace + cantidad + que + presente: sigue hoy.' },
          ] },
        ] },
        { title: 'Cómo elegir', mascot: '/brand/mascot/seated.webp', coach: 'Dos preguntas y ya sabes cuál usar.', blocks: [
          { kind: 'decide', title: 'Piensa en una frase sobre tu vida y responde', steps: [
            { q: '¿La situación sigue hoy?', yes: 'next', no: 'Usa **verbo en pasado + hace + cantidad**: «Me mudé acá [[hace dos años|orange]]».' },
            { q: '¿Quieres decir el momento en que empezó (una fecha, un mes)?', yes: 'Usa **desde + momento**: «Vivo acá [[desde octubre de 2024|blue]]».', no: 'Usa **desde hace + cantidad** o **hace… que**: «Vivo acá [[desde hace dos años|teal]]» · «[[Hace dos años que|teal]] vivo acá».' },
          ] },
          { kind: 'tip', icon: '🌎', title: 'Vas a escuchar también', text: 'En muchos países de América Latina se dice «Vivo acá [[hace dos años|teal]]», sin «desde»: significa lo mismo que «desde hace dos años». Y «**Llevo** dos años acá» también expresa la duración. Para empezar, usa «desde hace»: es la forma más clara.' },
          { kind: 'tip', icon: '⏸', title: '¿Y «durante»?', text: '«Durante» mide un período que ya terminó: «Viví en Lima **durante** dos años». Para algo que sigue: «Vivo en Bogotá **desde hace** dos años».', en: 'durante = for a finished period' },
        ] },
        { title: 'Errores frecuentes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Estos errores son muy comunes.', blocks: [
          { kind: 'guide', text: { teacher: 'Pide al alumno que encuentre el error antes de mostrar la corrección.', self: 'Lee cada frase, busca el error y después toca para ver la corrección.' } },
          { kind: 'mistakes', title: '¿Dónde está el error?', items: [
            { wrong: 'Vivo acá por dos años.', right: 'Vivo acá desde hace dos años.', why: 'Es una traducción de «for». Para algo que sigue, usa «desde hace» o «hace… que».' },
            { wrong: 'Estudio español desde dos años.', right: 'Estudio español desde hace dos años.', why: '«Dos años» es una cantidad: necesita «desde hace».' },
            { wrong: 'Trabajo acá desde hace enero.', right: 'Trabajo acá desde enero.', why: '«Enero» es un momento: solo «desde».' },
            { wrong: 'Llegué desde hace un mes.', right: 'Llegué hace un mes.', why: 'Llegar es un hecho terminado: verbo en pasado + hace.' },
            { wrong: 'Viví acá desde 2024 (y sigo acá).', right: 'Vivo acá desde 2024.', why: 'Si la situación sigue, el verbo va en presente.' },
          ] },
          { kind: 'teacher', text: 'Pide dos frases verdaderas sobre la vida del alumno con estructuras distintas y pregunta: «¿Esto sigue o terminó?».' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'La gramática en situaciones reales', coach: 'Toca las expresiones marcadas.',
      steps: [
        { title: 'Vecinos nuevos', blocks: [
          { kind: 'guide', text: { teacher: 'Lean el diálogo con papeles. Después, el alumno toca cada expresión y explica por qué se usó.', self: 'Lee el diálogo. Después toca cada expresión marcada para descubrir por qué se usó.' } },
          { kind: 'explore', title: 'En la escalera del edificio', setting: 'Elena se encuentra con el vecino nuevo del tercer piso.', lines: [
            { who: 'Elena', text: '¡Hola! ¿Eres el vecino nuevo del tercero?' },
            { who: 'Andrés', text: 'Sí, soy Andrés. Me mudé [[hace dos semanas|orange]].' },
            { who: 'Elena', text: '¡Bienvenido! ¿Eres de esta ciudad?' },
            { who: 'Andrés', text: 'No, soy de Valparaíso, pero vivo en esta ciudad [[desde 2023|blue]]. Antes vivía en el centro.' },
            { who: 'Elena', text: 'Yo vivo en el barrio [[desde marzo|blue]] y me encanta.' },
            { who: 'Andrés', text: '¿Trabajas cerca?' },
            { who: 'Elena', text: 'Sí, en la biblioteca. Trabajo allí [[desde hace seis meses|teal]].' },
            { who: 'Andrés', text: 'Yo trabajo en casa. [[Hace un año que|teal]] no voy a una oficina.' },
            { who: 'Elena', text: '¿Y ya conoces a alguien en el barrio?' },
            { who: 'Andrés', text: 'Todavía no. Fui al café de la esquina [[hace tres días|orange]], pero no hablé con nadie.' },
            { who: 'Elena', text: 'El sábado hay un paseo del barrio. Pablo, el vecino del segundo, va [[desde hace tres semanas|teal]]. ¡Ven con nosotros!' },
          ], notes: {
            'hace dos semanas': '**Me mudé** está en pasado: la mudanza es un hecho terminado. «Hace dos semanas» cuenta el tiempo desde ese hecho.',
            'desde 2023': '2023 es un **momento**: el año en que empezó su vida en la ciudad. Andrés sigue viviendo allí (**vivo**, presente).',
            'desde marzo': 'Marzo es un **momento**. Elena sigue viviendo en el barrio: **vivo**, en presente.',
            'desde hace seis meses': 'Seis meses es una **cantidad**: de abril a octubre. Elena sigue trabajando en la biblioteca.',
            'Hace un año que': '**Hace + cantidad + que + presente**: la situación (no ir a una oficina) continúa hoy.',
            'hace tres días': '**Fui** está en pasado: ir al café es un hecho terminado.',
            'desde hace tres semanas': 'Tres semanas es una **cantidad** y Pablo sigue yendo a los paseos.',
          } },
          { kind: 'choice', title: '¿Entendiste?', items: [
            { prompt: '¿Qué hizo Andrés hace dos semanas?', options: ['Se mudó al edificio.', 'Empezó a trabajar en casa.', 'Fue al café de la esquina.'], answer: 0, why: '«Me mudé hace dos semanas».' },
            { prompt: '¿Elena sigue trabajando en la biblioteca?', options: ['Sí.', 'No.', 'No se sabe.'], answer: 0, why: '«Trabajo allí desde hace seis meses»: presente, la situación sigue.' },
          ] },
        ] },
        { title: 'En la consulta', blocks: [
          { kind: 'explore', title: 'Me duele la espalda', setting: 'Hoy es miércoles. Martín va al médico.', lines: [
            { who: 'Doctora Ruiz', text: 'Buenos días, Martín. ¿Qué le pasa?' },
            { who: 'Martín', text: 'Me duele mucho la espalda.' },
            { who: 'Doctora Ruiz', text: '¿[[Desde cuándo|blue]] le duele?' },
            { who: 'Martín', text: '[[Desde el sábado|blue]]. [[Hace cuatro días que|teal]] casi no duermo.' },
            { who: 'Doctora Ruiz', text: '¿Hizo algún esfuerzo especial?' },
            { who: 'Martín', text: 'Sí, me mudé [[hace una semana|orange]] y cargué muchas cajas.' },
            { who: 'Doctora Ruiz', text: '¿Toma algún medicamento?' },
            { who: 'Martín', text: 'Tomo ibuprofeno [[desde hace dos días|teal]], pero no me ayuda mucho.' },
          ], notes: {
            'Desde cuándo': 'La pregunta por el **momento de inicio**: «¿Desde cuándo?». La respuesta lleva «desde + momento».',
            'Desde el sábado': 'El sábado es un **momento**. El dolor empezó entonces y sigue hoy.',
            'Hace cuatro días que': 'Del sábado al miércoles: cuatro días. **Hace + cantidad + que + presente** (duermo): sigue.',
            'hace una semana': '**Me mudé**, en pasado: un hecho terminado hace una semana.',
            'desde hace dos días': 'Una **cantidad**: dos días. Martín sigue tomando el medicamento.',
          } },
          { kind: 'teacher', text: 'Pregunta: «Si fueras la doctora, ¿qué otra pregunta harías?». Respuesta posible: «¿Hace cuánto que trabaja sentado?».' },
        ] },
        { title: '¿Sigue o terminó?', blocks: [
          { kind: 'classify', title: 'Clasifica las expresiones de las dos conversaciones', categories: [
            { id: 'sigue', label: 'Sigue hoy', tone: 'teal' },
            { id: 'termino', label: 'Ya terminó', tone: 'orange' },
          ], items: [
            { text: 'Vivo en el barrio desde marzo.', answer: 'sigue', why: 'Presente + desde: Elena sigue viviendo en el barrio.' },
            { text: 'Me mudé hace dos semanas.', answer: 'termino', why: 'La mudanza ya pasó.' },
            { text: 'Hace un año que no voy a una oficina.', answer: 'sigue', why: 'Hace… que + presente: la situación continúa.' },
            { text: 'Fui al café hace tres días.', answer: 'termino', why: 'Fui: pasado, un hecho terminado.' },
            { text: 'Tomo ibuprofeno desde hace dos días.', answer: 'sigue', why: 'Presente + desde hace: lo sigue tomando.' },
            { text: 'Cargué muchas cajas.', answer: 'termino', why: 'Cargué: pasado, un hecho terminado.' },
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
            { context: 'Mariana llegó a Quito en 2020 y vive allí.', prompt: 'Mariana vive en Quito ___ 2020.', options: ['desde', 'desde hace', 'hace'], answer: 0, why: '2020 es el momento de inicio y Mariana sigue en Quito.' },
            { context: 'Empecé en este hospital hace tres años y sigo.', prompt: 'Trabajo en este hospital ___ tres años.', options: ['desde', 'desde hace', 'hace'], answer: 1, why: 'Tres años es una cantidad y la situación sigue.' },
            { context: 'Una fiesta, hace cinco años.', prompt: 'Conocí a mi pareja ___ cinco años, en una fiesta.', options: ['desde', 'desde hace', 'hace'], answer: 2, why: 'Conocí: un hecho terminado. Pasado + hace.' },
            { context: 'Dejé el café el lunes y no lo tomo más.', prompt: 'No tomo café ___ el lunes.', options: ['desde', 'desde hace', 'hace'], answer: 0, why: 'El lunes es un momento.' },
            { context: 'Pregunta en una entrevista de trabajo.', prompt: '¿___ trabaja usted en ventas?', options: ['Desde hace', 'Desde cuándo', 'Hace'], answer: 1, why: 'Para preguntar por el momento de inicio: ¿Desde cuándo…?' },
            { context: 'Tu amiga y tú no se ven desde hace mucho.', prompt: '¡___ siglos que no nos vemos!', options: ['Desde', 'Hace', 'Desde hace'], answer: 1, why: 'Hace + cantidad + que: la situación (no vernos) continúa. «Siglos» exagera: mucho tiempo.' },
          ] },
        ] },
        { title: 'Compara los significados', blocks: [
          { kind: 'choice', items: [
            { prompt: '¿Qué frase dice que Lucía **todavía** trabaja en el hotel?', options: ['Lucía empezó a trabajar en el hotel hace un año.', 'Lucía trabaja en el hotel desde hace un año.'], answer: 1, why: 'Presente + desde hace: sigue trabajando. La otra frase solo cuenta cuándo empezó.' },
            { prompt: '¿Qué frase da **el momento** en que empezó?', options: ['Juego al tenis desde junio.', 'Juego al tenis desde hace cuatro meses.'], answer: 0, why: 'Junio es un momento; cuatro meses es una cantidad.' },
            { prompt: '«Hace dos años que no fumo.» ¿Qué significa?', options: ['Dejé de fumar hace dos años y sigo sin fumar.', 'Fumé por última vez la semana pasada.', 'Fumo desde hace dos años.'], answer: 0, why: 'Hace… que + presente: la situación (no fumar) sigue desde hace dos años.' },
            { prompt: '¿Cuál de estas frases **no** es correcta?', options: ['Llegué a Lima hace un mes.', 'Vivo en Lima desde hace un mes.', 'Llegué a Lima desde hace un mes.'], answer: 2, why: 'Llegar es un hecho terminado: «Llegué hace un mes», sin «desde».' },
          ] },
        ] },
        { title: 'Completa la conversación', blocks: [
          { kind: 'chat-fill', title: 'En una entrevista de trabajo', lines: [
            { who: 'Entrevistadora', text: 'Cuénteme, ¿___ vive en esta ciudad?', options: ['desde cuándo', 'desde hace cuándo', 'hace cuándo que'], answer: 0, why: 'La pregunta por el momento de inicio: ¿desde cuándo?' },
            { who: 'Sergio', text: 'Vivo acá ___ 2022. Antes vivía en Córdoba.', options: ['hace', 'desde', 'desde hace'], answer: 1, why: '2022 es un momento.' },
            { who: 'Entrevistadora', text: '¿Y cuánto tiempo hace que trabaja en ventas?', },
            { who: 'Sergio', text: 'Trabajo en ventas ___ cinco años.', options: ['desde hace', 'desde', 'hace'], answer: 0, why: 'Cinco años es una cantidad y Sergio sigue trabajando en ventas.' },
            { who: 'Entrevistadora', text: '¿Por qué quiere cambiar de empresa?' },
            { who: 'Sergio', text: 'Mi empresa cerró la oficina de acá ___ dos meses.', options: ['desde hace', 'hace', 'desde'], answer: 1, why: 'Cerró: un hecho terminado. Pasado + hace.' },
            { who: 'Sergio', text: 'Y ___ un mes que busco trabajo.', options: ['desde', 'hace', 'desde hace'], answer: 1, why: 'Hace + cantidad + que + presente: sigue buscando.' },
          ] },
        ] },
        { title: 'Encuentra el error', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Estudio inglés desde tres años.', ok: false, options: ['Estudio inglés desde hace tres años.', 'Estudio inglés hace tres años.', 'Estudié inglés desde tres años.'], answer: 0, why: 'Una cantidad necesita «desde hace».' },
            { sentence: 'Me casé hace diez años.', ok: true, why: 'Correcta: casarse es un hecho terminado (pasado + hace).' },
            { sentence: 'Trabajo en esta escuela desde hace septiembre.', ok: false, options: ['Trabajo en esta escuela hace septiembre.', 'Trabajo en esta escuela desde septiembre.', 'Trabajé en esta escuela desde septiembre.'], answer: 1, why: 'Septiembre es un momento: solo «desde».' },
            { sentence: 'Hace dos meses que tengo perro.', ok: true, why: 'Correcta: hace + cantidad + que + presente.' },
            { sentence: 'Mi hermano vive en Canadá por cuatro años.', ok: false, options: ['Mi hermano vive en Canadá desde hace cuatro años.', 'Mi hermano vive en Canadá desde cuatro años.', 'Mi hermano vivió en Canadá desde hace cuatro años.'], answer: 0, why: 'Para algo que sigue, «desde hace», no «por».' },
          ] },
        ] },
        { title: 'Construye frases', blocks: [
          { kind: 'build', title: 'Ordena las palabras', items: [
            { tiles: ['vivo', 'Hace', 'tres años', 'en Lima', 'que'], accept: ['Hace tres años que vivo en Lima'], en: 'I have lived in Lima for three years.' },
            { tiles: ['hace', 'Empecé', 'a correr', 'un mes'], accept: ['Empecé a correr hace un mes', 'Hace un mes empecé a correr'], en: 'I started running a month ago.' },
            { tiles: ['tengo', 'No', 'vacaciones', 'desde', 'diciembre'], accept: ['No tengo vacaciones desde diciembre', 'Desde diciembre no tengo vacaciones'], en: 'I haven’t had a holiday since December.' },
          ] },
          { kind: 'rewrite', title: 'Escribe la misma idea de otra forma', items: [
            { prompt: 'Vivo en Bogotá desde hace siete años.', instruction: 'Empieza con «Hace…».', accept: ['Hace siete años que vivo en Bogotá', 'Hace 7 años que vivo en Bogotá'] },
            { prompt: 'Hoy es octubre de 2026. Trabajo aquí desde octubre de 2023.', instruction: 'Usa «desde hace».', accept: ['Trabajo aquí desde hace tres años', 'Trabajo aquí desde hace 3 años', 'Desde hace tres años trabajo aquí'] },
            { prompt: 'Hace un mes que no veo a mi familia.', instruction: 'Usa «desde hace».', accept: ['No veo a mi familia desde hace un mes', 'Desde hace un mes no veo a mi familia'] },
          ] },
        ] },
        { title: 'Misión en el barrio', mascot: '/brand/mascot/walking.webp', coach: 'Visita a los vecinos del barrio.', blocks: [
          { kind: 'guide', text: { teacher: 'Entren al barrio y visiten a los vecinos. El alumno lee la ficha en voz alta y elige la frase; pregunta por qué antes de confirmar.' } },
          { kind: 'visual', visual: 'barrio-mission' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Una nota de voz de Pablo', coach: 'Primero escucha sin leer.',
      steps: [
        { title: 'Una nota de voz de Pablo', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha con la idea general. En la segunda, el alumno anota fechas y duraciones antes de responder.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Puedes bajar la velocidad.' } },
          { kind: 'listen', title: 'Pablo, el vecino del segundo', channel: 'NOTA DE VOZ · PARA ELENA', src: '/audio/grammar-classroom/230.mp3',
            before: 'Pablo, el vecino del segundo, le deja una nota de voz a Elena sobre el paseo del barrio. ¿Qué crees que le propone?',
            gist: { prompt: '¿Para qué le escribe Pablo a Elena?', options: ['Para invitarla al café después del paseo.', 'Para decirle que se muda del edificio.', 'Para cancelar el grupo de paseos.'], answer: 0, why: 'Le propone encontrarse en el café a las once y media.' },
            details: [
              { prompt: '¿Desde cuándo vive Pablo en el edificio?', options: ['Desde septiembre.', 'Desde marzo.', 'Desde hace cinco días.'], answer: 0, why: '«Vivo en el edificio desde septiembre».' },
              { prompt: '¿Cuánto tiempo hace que Pablo va a los paseos?', options: ['Una semana.', 'Tres semanas.', 'Cinco días.'], answer: 1, why: '«Hace tres semanas que voy a los paseos del barrio».' },
              { prompt: '¿Qué le pasó a Pablo hace cinco días?', options: ['Se hizo daño en un pie.', 'Llegó al edificio.', 'Cambió el lugar del paseo.'], answer: 0, why: '«Hace cinco días me hice daño en un pie».' },
              { prompt: 'Desde el sábado pasado, ¿dónde se encuentra el grupo?', options: ['En la biblioteca.', 'En la plaza.', 'En el café.'], answer: 1, why: '«Desde el sábado pasado nos encontramos en la plaza».' },
              { prompt: '«Hace tres semanas que voy» y «hace cinco días me hice daño»: ¿cuál habla de algo que sigue?', options: ['La primera.', 'La segunda.', 'Las dos.'], answer: 0, why: 'Hace… que + presente (voy) sigue; me hice daño es un hecho terminado.' },
            ],
            transcript: 'Hola, Elena. Soy Pablo, tu vecino del segundo. Vivo en el edificio [[desde septiembre|blue]]. [[Hace tres semanas que|teal]] voy a los paseos del barrio. El grupo sale los sábados a las diez, pero [[desde el sábado pasado|blue]] nos encontramos en la plaza, no en la biblioteca. Yo no puedo caminar mucho: [[hace cinco días|orange]] me hice daño en un pie. Esta semana voy solamente al café después del paseo. ¿Quieres venir? Podemos encontrarnos allí a las once y media.',
            reply: { teacher: 'El alumno responde a Pablo en voz alta, como si fuera Elena: ¿va al café? ¿Desde cuándo conoce el barrio?', self: 'Responde a Pablo como si fueras Elena: ¿vas al café? Usa «desde» o «hace» al menos una vez.' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Hablemos de tu vida', coach: 'Una pregunta por vez. Cuenta tu historia.',
      steps: [
        { title: 'Hablemos de tu vida', blocks: [
          { kind: 'guide', text: { teacher: 'No hace falta usar todas las preguntas. Sigue lo que el alumno quiere contar, repregunta y comparte también tu experiencia.', self: 'Responde cada pregunta en voz alta, como en una conversación. Si quieres, escribe tu respuesta o díctala.' } },
          { kind: 'talk', cards: [
            { q: '¿Desde cuándo vives en tu ciudad?', followUps: ['¿Y en tu casa actual? ¿Desde cuándo vives ahí?', '¿Qué te gusta de tu barrio?', '¿Qué cambió en tu barrio desde que llegaste?'], phrases: ['Vivo en… [[desde|blue]] 2019.', 'Vivo aquí [[desde hace|teal]] cinco años.', '[[Hace|teal]] tres años [[que|teal]] vivo en…'], hint: 'Si no recuerdas la fecha exacta, usa una cantidad: «desde hace más o menos diez años».', example: 'Vivo en Monterrey desde 2015, pero vivo en este departamento desde hace dos años. Me gusta mi barrio porque es tranquilo.', next: 'Ahora pensemos en otros lugares donde viviste.', teacher: 'Si la respuesta es corta, pide un detalle concreto: el nombre del barrio, un lugar favorito.' },
            { q: '¿Viviste en otro lugar antes? ¿Qué extrañas de ese lugar?', followUps: ['¿Cuándo te mudaste?', '¿Hace cuánto que no vuelves?', '¿Qué es diferente en tu ciudad de ahora?'], phrases: ['Me mudé [[hace|orange]] cuatro años.', 'Viví en… durante… años.', 'No vuelvo [[desde hace|teal]] mucho tiempo.', 'Extraño…'], hint: 'Para la mudanza usa el pasado: «Me mudé hace…». Para lo que sigue: «No vuelvo desde hace…».', example: 'Sí, viví en Guadalajara durante cinco años. Me mudé hace tres años. Extraño la comida de mi abuela. Hace dos años que no vuelvo.', next: 'Hablemos de algo que empezaste: el español.' },
            { q: '¿Hace cuánto empezaste a estudiar español?', followUps: ['¿Por qué empezaste?', '¿Desde cuándo tienes clases con tu profesor actual?', '¿Qué fue lo más difícil al principio?'], phrases: ['Empecé a estudiar español [[hace|orange]] dos años.', 'Estudio español [[desde hace|teal]] dos años.', 'Tengo clases [[desde|blue]] enero.'], hint: 'Fíjate: «Empecé hace dos años» cuenta un hecho y «Estudio desde hace dos años» dice que sigue. Las dos son correctas.', example: 'Empecé a estudiar español hace dos años porque quería viajar a México. Tengo clases con mi profesora desde enero.', next: 'Y desde entonces, ¿qué cambió?' },
            { q: '¿Qué cosas cambiaron en tu vida desde entonces?', followUps: ['¿Qué haces ahora que antes no hacías?', '¿Hay algo que no haces desde hace mucho tiempo?', '¿Qué cambio te gusta más?'], phrases: ['[[Desde entonces|blue]]…', 'Ahora… [[desde hace|teal]]…', 'No… [[desde hace|teal]] mucho tiempo.'], hint: '«Desde entonces» significa desde ese momento hasta hoy. Después, usa el presente.', example: 'Desde entonces escucho pódcast en español todos los días. Y hace un año que no veo series en inglés.', next: 'Ahora, una pregunta más personal.' },
            { q: '¿Hay algo que no haces desde hace mucho tiempo y que quieres volver a hacer?', followUps: ['¿Por qué dejaste de hacerlo?', '¿Cuándo fue la última vez?', '¿Qué necesitas para volver a hacerlo?'], phrases: ['No juego al fútbol [[desde hace|teal]] años.', '[[Hace|teal]] mucho tiempo [[que|teal]] no…', 'La última vez fue [[hace|orange]]…'], hint: 'Con «no» la idea es la misma: la situación (no hacer algo) continúa hasta hoy.', example: 'Hace mucho tiempo que no bailo. La última vez fue hace tres años, en la boda de mi prima. Quiero volver a hacerlo.', next: 'Para terminar, imagina un viaje en el tiempo.' },
            { q: 'Si pudieras volver a donde estabas hace cinco años, ¿qué le dirías a tu versión de ese momento?', followUps: ['¿Dónde estabas hace cinco años?', '¿Qué hacías en esa época?', '¿Qué cosas son iguales desde entonces?'], phrases: ['[[Hace|orange]] cinco años yo vivía en…', 'Le diría: «…».', '[[Desde|blue]] ese año…'], hint: 'Puedes empezar con «Le diría:» y una frase simple: «Le diría: ¡No tengas miedo!».', example: 'Hace cinco años yo vivía con mis padres y trabajaba en una tienda. Le diría: «Empieza a estudiar español ya».', teacher: 'La pregunta usa el condicional («pudieras», «dirías») solo como fórmula. No hace falta explicarlo: da la estructura «Le diría…» si el alumno la necesita.' },
          ], swap: { teacher: 'Al final, cambien los papeles: el alumno le hace dos o tres de estas preguntas al profesor.', self: 'Escribe dos preguntas con «¿Desde cuándo…?» y «¿Hace cuánto…?» y házselas a alguien esta semana.' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Un mensaje para el grupo del barrio', coach: 'Escribe sobre tu vida real.',
      steps: [
        { title: 'Un mensaje para el grupo del barrio', blocks: [
          { kind: 'guide', text: { teacher: 'Puede escribir en clase o como tarea. Usen la revisión automática y después corrijan juntos lo que la revisión no ve.', self: 'Escribe tu mensaje y toca «Revisar mi texto». Corrige lo que te indique y vuelve a revisarlo.' } },
          { kind: 'write', title: 'Preséntate a tus vecinos', situation: 'Acabas de entrar al grupo de mensajes de tu barrio, como Andrés. Preséntate a los vecinos.', task: [
            'Di dónde vives y **desde cuándo**.',
            'Cuenta algo que haces **desde hace** un tiempo: un trabajo, un deporte, un curso.',
            'Cuenta algo que pasó **hace** poco: llegaste, empezaste, conociste…',
            'Termina con una pregunta para los vecinos.',
          ], starters: ['Hola a todos, me llamo…', 'Vivo en el barrio desde…', 'Hace… que…', 'Trabajo en… desde hace…', 'Llegué a… hace…', '¿Alguien sabe…?'],
            words: ['me mudé', 'llegué', 'empecé', 'conocí', 'todavía', 'desde entonces', 'un mes', 'dos semanas', 'mucho tiempo'],
            model: 'Hola a todos, me llamo Laura. Vivo en el edificio de la esquina [[desde septiembre|blue]]. Trabajo en una farmacia [[desde hace dos años|teal]] y [[hace tres meses que|teal]] estudio francés. Me mudé al barrio [[hace un mes|orange]] y todavía no conozco a nadie. ¿Alguien sabe dónde hay un buen gimnasio?',
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
            { tone: 'blue', label: 'DESDE', formula: 'presente + desde + momento', example: 'Vivo acá desde octubre de 2024.', caption: 'El punto de inicio. Sigue hoy.', en: 'since' },
            { tone: 'teal', label: 'DESDE HACE · HACE… QUE', formula: 'presente + desde hace + cantidad', example: 'Vivo acá desde hace dos años.', caption: 'La duración hasta hoy. Sigue.', en: 'for' },
            { tone: 'orange', label: 'HACE + PASADO', formula: 'pasado + hace + cantidad', example: 'Me mudé acá hace dos años.', caption: 'Un hecho terminado.', en: 'ago' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'Dos preguntas para elegir', text: '¿La situación **sigue**? Si no, usa **hace + pasado**. Si sigue: ¿dices un **momento**? Usa **desde**. ¿Una **cantidad**? Usa **desde hace** o **hace… que**.' },
        ] },
        { title: 'Desafío final', blocks: [
          { kind: 'choice', title: 'Cuatro frases, sin ayuda', items: [
            { prompt: 'Sofía tiene coche ___ el año pasado.', options: ['desde', 'desde hace', 'hace'], answer: 0, why: 'El año pasado es un momento.' },
            { prompt: 'Los abuelos de Raúl se conocieron ___ cincuenta años.', options: ['desde', 'desde hace', 'hace'], answer: 2, why: 'Se conocieron: un hecho terminado.' },
            { prompt: '___ mucho tiempo que no voy al cine.', options: ['Desde', 'Hace', 'Desde hace'], answer: 1, why: 'Hace + cantidad + que + presente.' },
            { prompt: 'Practico yoga ___ seis semanas.', options: ['desde', 'desde hace', 'hace'], answer: 1, why: 'Una cantidad y una actividad que sigue.' },
          ] },
        ] },
        { title: 'Tus errores y repaso', blocks: [
          { kind: 'review' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «Llegué hace un año» y «Vivo aquí desde hace un año»: ¿qué diferencia hay? La primera cuenta la llegada; la segunda, cuánto dura la vida aquí hasta hoy.' },
        ] },
      ],
    },
  ],
};
