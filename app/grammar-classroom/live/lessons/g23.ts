import type { LiveLesson } from '../types';

/**
 * Lesson 23 · B2 · Condicionales del pasado.
 * A photography team (Julia, Martín) reviews a past decision: an unreal past
 * condition with a past result and with a present result.
 */
export const lesson: LiveLesson = {
  id: 23,
  level: 'B2',
  title: 'Condicionales del pasado',
  subtitle: 'Imaginar otros resultados para decisiones pasadas y separar lo que habría pasado entonces de lo que sería distinto hoy.',
  legend: [
    { tone: 'violet', label: 'Condición irreal pasada: si + hubiera + participio' },
    { tone: 'blue', label: 'Resultado en el pasado: habría + participio' },
    { tone: 'teal', label: 'Resultado en el presente: condicional simple' },
    { tone: 'orange', label: 'Ancla temporal: ayer, entonces, hoy, ahora' },
  ],
  optionNotes: {
    'habríamos revisado': 'Después de «si» no va el condicional: la condición pasada se expresa con «hubiera / hubiese + participio».',
    'habría estudiado': 'Después de «si» no va el condicional: la condición pasada se expresa con «hubiera / hubiese + participio».',
    'revisaríamos': 'El condicional no va en la condición. Además, la condición es pasada: «hubiéramos revisado».',
    'habíamos detectado': 'El pluscuamperfecto de indicativo cuenta algo que sí pasó. Aquí el resultado es imaginado: «habríamos detectado».',
    'detectaríamos': 'El condicional simple sitúa el resultado en el presente. Con «ayer», el resultado es pasado: «habríamos detectado».',
    'habríamos necesitado': 'El condicional compuesto sitúa el resultado en el pasado. Con «ahora» u «hoy», el resultado es presente: «necesitaríamos».',
    'necesitábamos': 'El imperfecto de indicativo describe un hecho real. El resultado imaginado va en condicional.',
    'hubiéramos probado': 'Esta forma pertenece a la condición, no al resultado. En el resultado va «habríamos + participio» o el condicional simple.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Otra decisión, otro resultado', coach: 'El pasado no cambia, pero podemos imaginarlo distinto.',
      steps: [
        { title: 'La condición irreal pasada', blocks: [
          { kind: 'lead', text: 'El equipo de Julia eligió un programa para organizar fotos **sin probarlo**. En la exposición, dos compañeros no pudieron abrir los archivos. Ahora revisan la decisión: ¿qué habría pasado si la hubieran tomado de otra manera?' },
          { kind: 'guide', text: { teacher: 'Lean la tabla. Después tu alumno forma una condición sobre algo que no hizo la semana pasada.', self: 'Lee la tabla. Después piensa en algo que no hiciste la semana pasada y empieza una frase con «Si hubiera…».' } },
          { kind: 'table', title: 'Las dos piezas de la frase', head: ['Persona', 'Condición: hubiera / hubiese + participio', 'Resultado: habría + participio'], rows: [
            ['yo', 'si **hubiera** (hubiese) probado', '**habría** detectado'],
            ['tú', 'si **hubieras** (hubieses) probado', '**habrías** detectado'],
            ['él / ella / usted', 'si **hubiera** (hubiese) probado', '**habría** detectado'],
            ['nosotros / nosotras', 'si **hubiéramos** (hubiésemos) probado', '**habríamos** detectado'],
            ['vosotros / vosotras', 'si **hubierais** (hubieseis) probado', '**habríais** detectado'],
            ['ellos / ellas / ustedes', 'si **hubieran** (hubiesen) probado', '**habrían** detectado'],
          ], note: '«Hubiera» y «hubiese» son equivalentes; «hubiera» es más frecuente en América. El participio no cambia y mantiene sus irregulares: hecho, dicho, visto, puesto, vuelto, escrito.' },
          { kind: 'concept', tone: 'violet', label: 'CONDICIÓN IRREAL PASADA', question: '¿Qué no pasó?', formula: ['si + hubiera / hubiese + participio'],
            meaning: 'Imagina una condición **contraria a lo que pasó**. Todos saben que no ocurrió: no probamos el programa, no salimos antes, no estudiamos más.',
            examples: [
              { es: '[[Si hubiéramos probado|violet]] el programa… (no lo probamos)' },
              { es: '[[Si hubieras salido|violet]] antes… (saliste tarde)' },
              { es: '[[Si no hubiera llovido|violet]]… (llovió)' },
            ] },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: '«Si hubiéramos probado el programa…» ¿Lo probaron?', options: ['No.', 'Sí.', 'No se sabe.'], answer: 0, why: 'La condición irreal pasada es contraria a lo que ocurrió.' },
            { prompt: 'Si ___ los archivos antes, habríamos empezado a tiempo.', options: ['revisaríamos', 'habríamos revisado', 'hubiéramos revisado'], answer: 2, why: 'La condición usa el pluscuamperfecto de subjuntivo.' },
          ] },
        ] },
        { title: 'Resultado en el pasado', mascot: '/brand/mascot/studying.webp', coach: 'Un final distinto para algo que ya terminó.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'PASADO → PASADO', question: '¿Qué habría pasado entonces?', formula: ['si + hubiera + participio, habría + participio'],
            meaning: 'La condición y el resultado son **pasados y cerrados**. Imaginamos un final diferente para un hecho que ya terminó.',
            examples: [
              { es: '[[Si hubiéramos probado|violet]] el programa, [[habríamos detectado|blue]] el problema.' },
              { es: 'La exposición [[habría empezado|blue]] con menos retraso [[si hubiéramos revisado|violet]] el acceso.' },
              { es: '[[Si hubieras llamado|violet]], te [[habría ido|blue]] a buscar al aeropuerto.' },
              { es: '[[Si no hubiera llovido|violet]], [[habríamos cenado|blue]] en la terraza.' },
            ],
            note: 'El orden puede cambiar: el resultado puede ir primero. Si la condición va primero, suele llevar coma.' },
          { kind: 'tip', icon: '🔁', title: 'Otras formas que vas a oír', text: 'En el resultado también es correcto «**hubiera** + participio»: «Si lo hubiera sabido, te lo **hubiera dicho**». Lo que nunca va es el condicional después de «si»: «si habría sabido» es incorrecto.' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'Si hubiéramos probado el programa, ayer ___ el error.', options: ['detectaríamos', 'habríamos detectado', 'habíamos detectado'], answer: 1, why: '«Ayer» sitúa el resultado imaginado en el pasado.' },
            { prompt: 'Si hubieras estudiado, ___ el examen.', options: ['habrías aprobado', 'hubieras aprobado', 'Las dos son correctas.'], answer: 2, why: 'En el resultado se aceptan «habría» y «hubiera» + participio.' },
          ] },
        ] },
        { title: 'Resultado en el presente', mascot: '/autoestudio/mascot/noting.webp', coach: 'Una decisión pasada que todavía pesa.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'PASADO → PRESENTE', question: '¿Qué sería distinto hoy?', formula: ['si + hubiera + participio, (hoy / ahora) + condicional simple'],
            meaning: 'La condición es pasada, pero el resultado imaginado es **actual**: una situación que hoy sería diferente. Es el **condicional mixto**.',
            examples: [
              { es: '[[Si hubiéramos elegido|violet]] una herramienta más sencilla, [[ahora|orange]] [[tendríamos|teal]] menos dificultades.' },
              { es: '[[Si hubiera estudiado|violet]] medicina, [[hoy|orange]] [[sería|teal]] médica.' },
              { es: '[[Si no te hubieras mudado|violet]], [[ahora|orange]] [[viviríamos|teal]] cerca.' },
              { es: '[[Hoy|orange]] [[necesitaríamos|teal]] menos ayuda [[si hubiéramos hecho|violet]] una prueba.' },
            ] },
          { kind: 'compare', title: 'La misma condición, dos resultados', columns: [
            { tone: 'blue', label: 'RESULTADO PASADO', sentence: '[[Si hubiera practicado|violet]], [[ayer|orange]] [[habría presentado|blue]] mejor.', idea: 'La presentación ya pasó: imaginamos otro final.' },
            { tone: 'teal', label: 'RESULTADO PRESENTE', sentence: '[[Si hubiera practicado|violet]], [[hoy|orange]] [[estaría|teal]] más tranquilo.', idea: 'El efecto sería actual: mi estado de hoy.' },
          ] },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'Si hubiéramos elegido otra herramienta, ahora ___ menos ayuda.', options: ['necesitaríamos', 'habríamos necesitado', 'necesitábamos'], answer: 0, why: '«Ahora» exige un resultado imaginado actual.' },
            { prompt: '¿Qué frase presenta un resultado en el presente?', options: ['Si hubiéramos practicado, ayer habríamos terminado.', 'Si hubiéramos practicado, hoy estaríamos más tranquilos.'], answer: 1, why: 'Condición pasada, resultado actual («hoy estaríamos»).' },
          ] },
        ] },
        { title: 'Cómo elegir', mascot: '/brand/mascot/seated.webp', coach: 'Mira dónde está el resultado: ¿ayer o hoy?', blocks: [
          { kind: 'decide', title: 'Piensa en una decisión pasada y en su resultado imaginado', steps: [
            { q: '¿La condición imaginada es pasada y no ocurrió?', yes: 'next', no: 'Si la condición es presente o general, usa otra estructura: «Si tuviera tiempo, iría» o «Si tengo tiempo, iré».' },
            { q: '¿El resultado imaginado está también en el pasado (ayer, entonces, aquel día)?', yes: 'Usa **habría + participio**: «[[Si hubiera salido|violet]] antes, [[habría llegado|blue]] a tiempo».', no: 'Si el resultado es una situación de hoy, usa el **condicional simple**: «[[Si hubiera ahorrado|violet]], [[ahora|orange]] [[tendría|teal]] un coche».' },
          ] },
          { kind: 'tip', icon: '⚓', title: 'Ancla el tiempo', text: 'Las palabras **ayer, entonces, aquel día** empujan el resultado al pasado; **hoy, ahora, todavía, ya no** lo traen al presente. Úsalas para que tu interlocutor no dude.' },
          { kind: 'tip', icon: '📌', title: 'Como referencia', text: 'Existe también la combinación inversa: una condición **presente** con un resultado **pasado**: «Si **fuera** más organizado, no **habría olvidado** la reunión» (soy desorganizado, y por eso la olvidé). Hoy nos centramos en la condición pasada.' },
        ] },
        { title: 'Errores frecuentes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Estos errores son muy comunes en B2.', blocks: [
          { kind: 'guide', text: { teacher: 'Tu alumno corrige en voz alta y dice si el resultado debería ser pasado o presente.', self: 'Lee cada frase, encuentra el error y di la versión correcta antes de tocar.' } },
          { kind: 'mistakes', title: '¿Dónde está el error?', items: [
            { wrong: 'Si habríamos probado el programa, habríamos detectado el error.', right: 'Si hubiéramos probado el programa, habríamos detectado el error.', why: 'Después de «si» nunca va el condicional.' },
            { wrong: 'Si hubiera estudiado medicina, hoy habría sido médica.', right: 'Si hubiera estudiado medicina, hoy sería médica.', why: 'Con «hoy», el resultado es una situación actual: condicional simple.' },
            { wrong: 'Si hubiéramos salido antes, ayer llegaríamos a tiempo.', right: 'Si hubiéramos salido antes, ayer habríamos llegado a tiempo.', why: 'Con «ayer», el resultado es pasado: condicional compuesto.' },
            { wrong: 'Si tendría más tiempo ayer, te habría ayudado.', right: 'Si hubiera tenido más tiempo ayer, te habría ayudado.', why: 'La condición es pasada: «hubiera + participio».' },
            { wrong: 'Si hubieras venido, te habríamos esperados.', right: 'Si hubieras venido, te habríamos esperado.', why: 'El participio con «haber» es invariable.' },
            { wrong: 'Si hubiéramos probado el programa, ningún problema habría existido.', right: 'Si hubiéramos probado el programa, habríamos evitado el problema de acceso.', why: 'La hipótesis debe ser razonable: una condición no borra todas las causas.' },
          ] },
          { kind: 'teacher', text: 'Pide al alumno una decisión real de su vida y dos consecuencias imaginadas: una con «ayer / entonces» y otra con «hoy / ahora».' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'Los condicionales del pasado en situaciones reales', coach: 'Toca las expresiones marcadas.',
      steps: [
        { title: 'La revisión del equipo', blocks: [
          { kind: 'guide', text: { teacher: 'Lean la reunión con papeles. Después, el alumno toca cada expresión y dice si el resultado es pasado o presente.', self: 'Lee la reunión. Antes de tocar cada expresión, decide si habla del pasado o del presente.' } },
          { kind: 'explore', title: 'Después de la exposición', setting: 'Julia y Martín revisan cómo salió la última exposición de fotografía del grupo.', lines: [
            { who: 'Julia', text: 'Bueno, la exposición salió, pero empezamos con media hora de retraso.' },
            { who: 'Martín', text: 'Dos compañeros no pudieron abrir los archivos. [[Si hubiéramos probado|violet]] el programa con todos, [[habríamos detectado|blue]] el problema.' },
            { who: 'Julia', text: 'Y la inauguración [[habría empezado|blue]] a su hora.' },
            { who: 'Martín', text: 'Además, el programa es complicado. [[Si hubiéramos elegido|violet]] una herramienta más sencilla, [[ahora|orange]] [[tendríamos|teal]] menos dificultades para preparar la próxima.' },
            { who: 'Julia', text: 'Es verdad. [[Hoy|orange]] no [[dependeríamos|teal]] tanto de la ayuda técnica.' },
            { who: 'Martín', text: 'Pero no todo fue culpa del programa. Algunos archivos tenían nombres confusos.' },
            { who: 'Julia', text: 'Cierto. [[Si los hubiéramos nombrado|violet]] bien, [[entonces|orange]] [[habríamos encontrado|blue]] las fotos en un minuto.' },
            { who: 'Martín', text: 'El programa ya está elegido. Lo que sí podemos cambiar es cómo compartimos el material.' },
            { who: 'Julia', text: 'Propongo una copia accesible y una prueba con cada participante antes de la próxima exposición.' },
          ], notes: {
            'Si hubiéramos probado': '**Condición irreal pasada**: no probaron el programa con todos.',
            'habríamos detectado': '**Resultado pasado**: el problema se habría visto antes de la exposición, que ya terminó.',
            'habría empezado': 'Otro **resultado pasado** de la misma condición: la inauguración ya ocurrió.',
            'Si hubiéramos elegido': '**Condición irreal pasada**: eligieron un programa complicado.',
            'ahora': '**Ancla temporal**: el resultado se sitúa en el presente.',
            'tendríamos': '**Resultado presente**: la situación de hoy sería distinta. Condicional simple.',
            'Hoy': '**Ancla temporal** que confirma que hablamos de la situación actual.',
            'dependeríamos': '**Resultado presente**: condición pasada implícita (si hubiéramos elegido otra herramienta).',
            'Si los hubiéramos nombrado': '**Condición irreal pasada**: los archivos tenían nombres confusos.',
            'entonces': '**Ancla temporal** que lleva el resultado al día de la exposición.',
            'habríamos encontrado': '**Resultado pasado**: durante la exposición, no después.',
          } },
          { kind: 'choice', title: '¿Entendiste?', items: [
            { prompt: '¿Qué habría pasado con una prueba previa?', options: ['Habrían detectado el problema y empezado a su hora.', 'Tendrían otro programa.', 'No habría exposición.'], answer: 0, why: '«Habríamos detectado el problema» y «la inauguración habría empezado a su hora».' },
            { prompt: '¿Qué sería distinto hoy con una herramienta más sencilla?', options: ['Tendrían menos dificultades y dependerían menos de la ayuda técnica.', 'La exposición habría empezado antes.', 'Los archivos tendrían otros nombres.'], answer: 0, why: '«Ahora tendríamos menos dificultades… Hoy no dependeríamos tanto de la ayuda técnica».' },
            { prompt: '¿Qué otra causa reconocen?', options: ['Nombres de archivo confusos.', 'Falta de público.', 'Un corte de luz.'], answer: 0, why: '«Algunos archivos tenían nombres confusos».' },
          ] },
        ] },
        { title: 'Otros caminos', blocks: [
          { kind: 'explore', title: 'En una cafetería', setting: 'Carmen y su amigo Óscar, compañeros de colegio, se encuentran veinte años después.', lines: [
            { who: 'Óscar', text: '¡Carmen! ¿Al final no estudiaste medicina?' },
            { who: 'Carmen', text: 'No, me pasé a diseño en el último momento. [[Si hubiera estudiado|violet]] medicina, [[hoy|orange]] [[sería|teal]] pediatra, como mi madre.' },
            { who: 'Óscar', text: '¿Te arrepientes?' },
            { who: 'Carmen', text: 'A veces. [[Si hubiera seguido|violet]] ese camino, [[habría tenido|blue]] un trabajo más estable al principio.' },
            { who: 'Óscar', text: 'Pero ahora tienes tu propio estudio, ¿no?' },
            { who: 'Carmen', text: 'Sí. Y [[si no me hubiera arriesgado|violet]], no [[conocería|teal]] a la mitad de las personas que quiero.' },
            { who: 'Óscar', text: 'Yo, en cambio, [[si no hubiera aceptado|violet]] aquel trabajo en Lima, [[ahora|orange]] [[viviría|teal]] aquí, en el barrio.' },
            { who: 'Carmen', text: '¿Y lo cambiarías?' },
            { who: 'Óscar', text: 'No. Aunque [[aquel año|orange]] [[habría preferido|blue]] estar más cerca de mi familia.' },
          ], notes: {
            'Si hubiera estudiado': '**Condición irreal pasada**: Carmen no estudió medicina.',
            'hoy': '**Ancla temporal**: el resultado es la situación actual.',
            'sería': '**Resultado presente**: su profesión actual sería otra.',
            'Si hubiera seguido': 'Otra **condición irreal pasada** sobre la misma decisión.',
            'habría tenido': '**Resultado pasado**: «al principio» sitúa la consecuencia en aquellos años.',
            'si no me hubiera arriesgado': '**Condición irreal pasada** en negativo: sí se arriesgó.',
            'conocería': '**Resultado presente**: sus relaciones de hoy serían distintas.',
            'si no hubiera aceptado': '**Condición irreal pasada**: Óscar sí aceptó el trabajo.',
            'ahora': '**Ancla temporal** del presente.',
            'viviría': '**Resultado presente**: dónde viviría hoy.',
            'aquel año': '**Ancla temporal** del pasado.',
            'habría preferido': '**Resultado pasado**: lo que habría preferido entonces.',
          } },
          { kind: 'teacher', text: 'Pregunta: «¿Hay alguna decisión de tus estudios que cambiaría tu vida de hoy?». El alumno responde con un resultado presente.' },
        ] },
        { title: '¿Entonces o ahora?', blocks: [
          { kind: 'classify', title: 'Clasifica los resultados de las dos conversaciones', categories: [
            { id: 'pasado', label: 'Resultado en el pasado', tone: 'blue' },
            { id: 'presente', label: 'Resultado en el presente', tone: 'teal' },
          ], items: [
            { text: '…habríamos detectado el problema.', answer: 'pasado', why: 'El problema se habría visto antes de la exposición.' },
            { text: '…ahora tendríamos menos dificultades.', answer: 'presente', why: '«Ahora» + condicional simple.' },
            { text: '…hoy sería pediatra.', answer: 'presente', why: 'Su profesión actual.' },
            { text: '…habría tenido un trabajo más estable al principio.', answer: 'pasado', why: '«Al principio»: aquellos años.' },
            { text: '…ahora viviría aquí, en el barrio.', answer: 'presente', why: 'Dónde viviría hoy.' },
            { text: '…la inauguración habría empezado a su hora.', answer: 'pasado', why: 'La inauguración ya pasó.' },
          ] },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Busca el ancla temporal antes de elegir.',
      steps: [
        { title: 'Elige según el contexto', blocks: [
          { kind: 'choice', items: [
            { context: 'No salimos a tiempo y perdimos el tren de las ocho.', prompt: 'Si hubiéramos salido antes, ___ el tren.', options: ['habríamos tomado', 'tomaríamos', 'habíamos tomado'], answer: 0, why: 'El tren ya salió: resultado pasado.' },
            { context: 'Nunca aprendiste a nadar y hoy te da miedo el mar.', prompt: 'Si hubiera aprendido de niño, ahora no me ___ miedo el mar.', options: ['daría', 'habría dado', 'daba'], answer: 0, why: '«Ahora» + situación actual: condicional simple.' },
            { context: 'No compré entradas y el concierto se agotó.', prompt: 'Si ___ las entradas en junio, habría ido al concierto.', options: ['hubiera comprado', 'habría comprado', 'compraría'], answer: 0, why: 'La condición pasada va con «hubiera + participio».' },
            { context: 'Ana dejó la carrera de Derecho hace diez años.', prompt: 'Si hubiera terminado Derecho, hoy ___ abogada.', options: ['sería', 'habría sido', 'era'], answer: 0, why: 'Su situación actual: condicional simple.' },
            { context: 'Ayer olvidaste el paraguas y llegaste empapado.', prompt: 'Si no lo hubiera olvidado, no ___ empapado.', options: ['habría llegado', 'llegaría', 'hubiera llegados'], answer: 0, why: 'La llegada fue ayer: resultado pasado.' },
            { context: 'Hace dos años no aceptaste un trabajo en otra ciudad.', prompt: 'Si lo hubiera aceptado, ahora ___ en Monterrey.', options: ['viviría', 'habría vivido', 'vivía'], answer: 0, why: '«Ahora»: dónde vivirías hoy.' },
          ] },
        ] },
        { title: 'Compara los significados', blocks: [
          { kind: 'choice', items: [
            { prompt: '¿Qué frase habla de la situación **actual**?', options: ['Si hubiera ahorrado, ahora tendría un coche.', 'Si hubiera ahorrado, habría comprado un coche el año pasado.'], answer: 0, why: '«Ahora tendría»: resultado presente.' },
            { prompt: '«Si me hubieras avisado, te habría esperado.» ¿Qué pasó en realidad?', options: ['No me avisaste y no te esperé.', 'Me avisaste y te esperé.', 'Me avisaste, pero no te esperé.'], answer: 0, why: 'Condición y resultado son contrarios a lo que pasó.' },
            { prompt: '¿Qué diferencia hay entre «Si hubiera estudiado, habría aprobado» y «Si hubiera estudiado, ahora estaría tranquilo»?', options: ['La primera imagina un resultado pasado; la segunda, un estado presente.', 'Ninguna.', 'La primera es incorrecta.'], answer: 0, why: 'La misma condición pasada, dos planos temporales en el resultado.' },
            { prompt: '¿Cuál es una condición **real** (posible), no irreal?', options: ['Si practicamos, terminaremos a tiempo.', 'Si hubiéramos practicado, habríamos terminado a tiempo.'], answer: 0, why: '«Si + presente, futuro» habla de algo posible.' },
            { prompt: '«Si no te hubieras mudado, ahora viviríamos cerca.» ¿Te mudaste?', options: ['Sí, y por eso hoy vivimos lejos.', 'No.', 'No se sabe.'], answer: 0, why: 'La condición en negativo es contraria a lo que pasó: sí te mudaste.' },
          ] },
        ] },
        { title: 'Completa la conversación', blocks: [
          { kind: 'chat-fill', title: 'Un mensaje a Julia', lines: [
            { who: 'Martín', text: 'Hola, Julia. Sigo pensando en la exposición.' },
            { who: 'Martín', text: 'Si ___ una prueba con todo el grupo, habríamos visto el problema.', options: ['hubiéramos hecho', 'habríamos hecho', 'haríamos'], answer: 0, why: 'Condición pasada: «hubiera + participio».' },
            { who: 'Julia', text: 'Sí, y el inicio ___ más tranquilo.', options: ['habría sido', 'sería', 'había sido'], answer: 0, why: 'El inicio de la exposición ya pasó: resultado pasado.' },
            { who: 'Martín', text: 'Y con una herramienta más sencilla, hoy ___ con menos ayuda externa.', options: ['trabajaríamos', 'habríamos trabajado', 'trabajábamos'], answer: 0, why: '«Hoy»: resultado presente.' },
            { who: 'Julia', text: 'De acuerdo, pero el programa ya está elegido. ¿Qué podemos hacer ahora?' },
            { who: 'Martín', text: 'Si ___ los archivos con nombres claros, no habríamos perdido tanto tiempo. Empecemos por ahí.', options: ['hubiéramos guardado', 'guardaríamos', 'habríamos guardado'], answer: 0, why: 'Condición pasada que no se cumplió.' },
          ] },
        ] },
        { title: 'Encuentra el error', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Si habría sabido la verdad, te lo habría dicho.', ok: false, options: ['Si hubiera sabido la verdad, te lo habría dicho.', 'Si sabría la verdad, te lo habría dicho.', 'Si habría sabido la verdad, te lo diría.'], answer: 0, why: 'Después de «si», «hubiera + participio».' },
            { sentence: 'Si hubiera estudiado más, hoy tendría un trabajo mejor.', ok: true, why: 'Correcta: condición pasada y resultado presente.' },
            { sentence: 'Si hubiéramos salido antes, ayer llegaríamos a tiempo.', ok: false, options: ['Si hubiéramos salido antes, ayer habríamos llegado a tiempo.', 'Si saldríamos antes, ayer habríamos llegado a tiempo.', 'Si hubiéramos salido antes, ayer llegábamos a tiempo.'], answer: 0, why: '«Ayer»: resultado pasado con «habría + participio».' },
            { sentence: 'Si me hubieras escuchado, no habríamos tenido este problema.', ok: true, why: 'Correcta: condición y resultado pasados.' },
            { sentence: 'Si hubiera aceptado aquel trabajo, ahora habría vivido en Lima.', ok: false, options: ['Si hubiera aceptado aquel trabajo, ahora viviría en Lima.', 'Si habría aceptado aquel trabajo, ahora viviría en Lima.', 'Si aceptara aquel trabajo, ahora habría vivido en Lima.'], answer: 0, why: '«Ahora»: el resultado es presente, condicional simple.' },
            { sentence: 'Si hubiéramos revisado los archivos, no habríamos perdidos tiempo.', ok: false, options: ['Si hubiéramos revisado los archivos, no habríamos perdido tiempo.', 'Si hubiéramos revisados los archivos, no habríamos perdido tiempo.', 'Si revisaríamos los archivos, no habríamos perdido tiempo.'], answer: 0, why: 'El participio es invariable.' },
          ] },
        ] },
        { title: 'Construye y transforma', blocks: [
          { kind: 'build', title: 'Ordena las palabras', items: [
            { tiles: ['Si', 'hubiéramos', 'probado', 'el', 'programa', 'habríamos', 'detectado', 'el', 'error'], accept: ['Si hubiéramos probado el programa habríamos detectado el error', 'Habríamos detectado el error si hubiéramos probado el programa'] },
            { tiles: ['Si', 'hubiera', 'estudiado', 'medicina', 'hoy', 'sería', 'médica'], accept: ['Si hubiera estudiado medicina hoy sería médica', 'Hoy sería médica si hubiera estudiado medicina'] },
            { tiles: ['ahora', 'Si', 'hubiera', 'ahorrado', 'tendría', 'un', 'coche'], accept: ['Si hubiera ahorrado ahora tendría un coche', 'Ahora tendría un coche si hubiera ahorrado'] },
          ] },
          { kind: 'rewrite', title: 'Imagina otro resultado', items: [
            { prompt: 'No revisamos el acceso y la exposición empezó tarde.', instruction: 'Empieza con «Si hubiéramos revisado el acceso…».', accept: ['Si hubiéramos revisado el acceso, la exposición habría empezado a tiempo', 'Si hubiéramos revisado el acceso la exposición habría empezado a tiempo', 'Si hubiéramos revisado el acceso, la exposición no habría empezado tarde', 'Si hubiéramos revisado el acceso la exposición no habría empezado tarde', 'Si hubiéramos revisado el acceso, la exposición hubiera empezado a tiempo'] },
            { prompt: 'Si hubiéramos elegido otro programa, ayer habríamos trabajado con menos ayuda.', instruction: 'Cambia solo el resultado al presente con «ahora».', accept: ['Si hubiéramos elegido otro programa, ahora trabajaríamos con menos ayuda', 'Si hubiéramos elegido otro programa ahora trabajaríamos con menos ayuda'] },
            { prompt: 'No estudié inglés de niño. Hoy no puedo trabajar en el extranjero.', instruction: 'Une las ideas: «Si hubiera estudiado…».', accept: ['Si hubiera estudiado inglés de niño, hoy podría trabajar en el extranjero', 'Si hubiera estudiado inglés de niño hoy podría trabajar en el extranjero', 'Si hubiera estudiado inglés de niño, ahora podría trabajar en el extranjero'] },
            { prompt: 'No me llamaste, así que no fui a buscarte.', instruction: 'Empieza con «Si me hubieras llamado…».', accept: ['Si me hubieras llamado, habría ido a buscarte', 'Si me hubieras llamado habría ido a buscarte', 'Si me hubieras llamado, te habría ido a buscar', 'Si me hubieras llamado, hubiera ido a buscarte'] },
          ] },
        ] },
        { title: 'Clasifica por el sentido', blocks: [
          { kind: 'classify', title: '¿De qué tipo es cada frase?', categories: [
            { id: 'pasado', label: 'Pasado → pasado', tone: 'blue' },
            { id: 'presente', label: 'Pasado → presente', tone: 'teal' },
            { id: 'real', label: 'Condición posible', tone: 'neutral' },
          ], items: [
            { text: 'Si hubiera hecho la reserva, habríamos cenado en ese restaurante.', answer: 'pasado', why: 'La cena ya pasó.' },
            { text: 'Si hubiera hecho la reserva, ahora estaríamos cenando allí.', answer: 'presente', why: '«Ahora estaríamos»: situación actual.' },
            { text: 'Si hacemos la reserva, cenaremos allí.', answer: 'real', why: 'Si + presente, futuro: algo posible.' },
            { text: 'Si no hubiera dejado el piano, hoy tocaría bien.', answer: 'presente', why: 'Su habilidad de hoy.' },
            { text: 'Si me hubieras avisado, te habría esperado.', answer: 'pasado', why: 'La espera habría ocurrido entonces.' },
            { text: 'Si llueve mañana, nos quedamos en casa.', answer: 'real', why: 'Condición posible en el futuro.' },
          ] },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'La propuesta después del problema', coach: 'Primero escucha sin leer.',
      steps: [
        { title: 'La propuesta después del problema', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha para la idea general. En la segunda, el alumno anota cada condición y decide si su resultado es pasado o presente.', self: 'Escucha una vez para la idea general. En la segunda, anota cada «si hubiéramos…» y su resultado. Puedes bajar la velocidad.' } },
          { kind: 'listen', title: 'Martín le escribe a Julia', channel: 'NOTA DE VOZ · PARA JULIA', src: '/audio/grammar-classroom/23.mp3',
            before: 'Después de la exposición con retraso, Martín le deja un mensaje a Julia. ¿Qué crees que propone?',
            gist: { prompt: '¿Cuál es el objetivo del mensaje?', options: ['Aprender del error y proponer cambios para la próxima actividad.', 'Culpar al programa de todos los problemas.', 'Cancelar la próxima exposición.'], answer: 0, why: '«Así podemos aprender de la condición pasada sin convertir la revisión en una lista de reproches».' },
            details: [
              { prompt: '¿Qué habrían descubierto con una prueba con todo el grupo?', options: ['Que dos personas no podían abrir los archivos.', 'Que el programa era caro.', 'Que faltaban fotos.'], answer: 0, why: '«Habríamos descubierto que dos personas no podían abrir los archivos».' },
              { prompt: 'Con una herramienta más sencilla, ¿qué sería distinto hoy?', options: ['Trabajarían con menos ayuda externa.', 'La exposición habría empezado antes.', 'Tendrían más fotos.'], answer: 0, why: '«Hoy trabajaríamos con menos ayuda externa».' },
              { prompt: '¿Qué otra causa menciona?', options: ['Los nombres confusos de los archivos.', 'La falta de tiempo.', 'Un error de la impresora.'], answer: 0, why: '«Los nombres de los archivos también eran confusos».' },
              { prompt: '¿Qué propone para la próxima actividad?', options: ['Una copia accesible y una prueba breve por participante.', 'Cambiar de programa inmediatamente.', 'Contratar a un técnico.'], answer: 0, why: '«Propongo una copia accesible y una prueba breve por participante».' },
              { prompt: '¿Qué todavía pueden cambiar?', options: ['La forma de compartir el material.', 'El programa elegido.', 'El retraso de la exposición.'], answer: 0, why: '«Todavía podemos cambiar la forma de compartir el material».' },
            ],
            transcript: 'Hola, Julia. [[Si hubiéramos hecho|violet]] una prueba con todo el grupo, [[habríamos descubierto|blue]] que dos personas no podían abrir los archivos. El inicio de la exposición [[habría sido|blue]] más tranquilo. Pero quiero separar ese retraso de la situación actual. [[Si hubiéramos elegido|violet]] una herramienta más sencilla, [[hoy|orange]] [[trabajaríamos|teal]] con menos ayuda externa. No significa que todos los errores desaparecieran: los nombres de los archivos también eran confusos. Para la próxima actividad propongo una copia accesible y una prueba breve por participante. Así podemos aprender de la condición pasada sin convertir la revisión en una lista de reproches. El programa ya está elegido, pero todavía podemos cambiar la forma de compartir el material. Esa parte sí depende de lo que hagamos ahora.',
            reply: { teacher: 'El alumno responde en voz alta como Julia: acepta la propuesta, añade una condición pasada propia y una mejora concreta.', self: 'Responde como Julia en un mensaje breve: añade una condición pasada con su resultado y una mejora para la próxima vez.' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Decisiones y caminos', coach: 'Una pregunta por vez. Separa entonces y ahora.',
      steps: [
        { title: 'Decisiones y caminos', blocks: [
          { kind: 'guide', text: { teacher: 'No hace falta usar todas las preguntas. Escucha, repregunta con «¿y hoy?» o «¿y entonces?» y comparte también alguna decisión tuya.', self: 'Responde cada pregunta en voz alta. Para cada decisión, di qué habría pasado entonces y qué sería distinto hoy.' } },
          { kind: 'talk', cards: [
            { q: '¿Qué decisión de tus estudios cambió el rumbo de tu vida?', followUps: ['¿Qué otra opción tenías?', '¿Qué habría pasado si hubieras elegido la otra?', '¿Qué serías hoy?'], phrases: ['[[Si hubiera estudiado|violet]]…, [[hoy|orange]] [[sería|teal]]…', '[[Si no hubiera elegido|violet]]…', 'En aquel momento…'], hint: 'Primero cuenta la decisión real; después imagina la alternativa.', example: 'Dudé entre Arquitectura y Comunicación. Si hubiera estudiado Arquitectura, hoy sería arquitecta y probablemente viviría en otra ciudad.', next: 'Ahora una decisión más pequeña.', teacher: 'Si el alumno prefiere no hablar de estudios, sirve un trabajo, una mudanza o un deporte.' },
            { q: 'Cuéntame un pequeño error reciente. ¿Qué habría pasado si lo hubieras evitado?', followUps: ['¿Cómo te diste cuenta?', '¿Qué hiciste después?', '¿Lo has vuelto a repetir?'], phrases: ['[[Si hubiera revisado|violet]]…, no [[habría…|blue]]', '[[Si me hubiera acordado|violet]]…', '[[Entonces|orange]]…'], hint: 'Un ejemplo sencillo sirve: llaves, una reunión, un tren.', example: 'La semana pasada olvidé las llaves dentro de casa. Si las hubiera revisado al salir, no habría esperado una hora al cerrajero.', next: 'Pasemos a una decisión que todavía pesa.' },
            { q: '¿Hay una decisión pasada que todavía influye en tu día a día?', followUps: ['¿Cómo sería tu rutina sin ella?', '¿Fue una buena decisión?', '¿La volverías a tomar?'], phrases: ['[[Si no hubiera…|violet]], [[ahora|orange]] [[tendría|teal]]…', '[[Hoy|orange]] no [[podría|teal]]…', 'Todavía…'], hint: 'Usa un ancla del presente: «ahora», «hoy», «todavía».', example: 'Adoptar un perro. Si no lo hubiera adoptado, ahora no saldría a caminar todas las mañanas y probablemente estaría menos en forma.', next: 'Hablemos de trabajo en equipo.' },
            { q: 'Piensa en un proyecto en grupo que salió regular. ¿Qué habría cambiado el resultado?', followUps: ['¿Fue una sola causa o varias?', '¿Qué dependía de ti?', '¿Qué harían distinto ahora?'], phrases: ['[[Si hubiéramos…|violet]], [[habríamos…|blue]]', 'No todo fue por…', 'Para la próxima vez…'], hint: 'Evita culpar a una sola causa: propón dos hipótesis y una mejora concreta.', example: 'Si nos hubiéramos repartido las tareas desde el principio, habríamos terminado antes. Pero no todo fue por la organización: el cliente cambió de idea dos veces.', next: 'Ahora, el azar.' },
            { q: '¿Hubo algún encuentro casual que cambió tu vida?', followUps: ['¿Dónde ocurrió?', '¿Qué no tendrías hoy sin ese encuentro?', '¿Crees en la casualidad?'], phrases: ['[[Si no hubiera ido|violet]] a…, no [[conocería|teal]] a…', '[[Si aquel día|orange]]…', 'Fue pura casualidad…'], hint: 'Mezcla un resultado pasado («no habría conocido») con uno presente («no tendría»).', example: 'Si no hubiera ido a aquella fiesta, no habría conocido a mi mejor amiga y hoy no trabajaríamos juntas.', next: 'Para terminar, una mirada amplia.' },
            { q: 'Si pudieras cambiar una sola decisión de tu pasado, ¿la cambiarías? ¿Qué sería distinto hoy?', followUps: ['¿Qué perderías?', '¿Qué ganarías?', '¿Qué consejo le darías a tu yo de entonces?'], phrases: ['Cambiaría…', '[[Si hubiera…|violet]], [[hoy|orange]] [[estaría|teal]]…', 'Pero perdería…'], hint: 'Termina con una acción actual: lo que sí puedes hacer hoy.', example: 'No cambiaría nada grande. Quizá habría empezado a estudiar español antes: si lo hubiera hecho, hoy lo hablaría con más fluidez. Pero ahora puedo practicar todos los días.', teacher: 'Cierra con una pregunta hacia el futuro: «¿Qué puedes hacer hoy, que no depende de cambiar el pasado?».' },
          ], swap: { teacher: 'Al final, cambien los papeles: el alumno le pregunta al profesor «¿Qué sería distinto hoy si…?».', self: 'Escribe dos preguntas con «¿Qué habría pasado si…?» y «¿Qué sería distinto hoy si…?» y házselas a alguien esta semana.' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Revisar una decisión', coach: 'Entonces, ahora y lo que viene.',
      steps: [
        { title: 'Revisar una decisión', blocks: [
          { kind: 'guide', text: { teacher: 'Puede escribirse en clase o como tarea. Usen la revisión automática y después comprueben que cada resultado tiene su ancla temporal.', self: 'Escribe tu texto y toca «Revisar mi texto». Comprueba que cada resultado está claramente en el pasado o en el presente.' } },
          { kind: 'write', title: 'Una decisión que revisamos', situation: 'Piensa en una decisión pasada, tuya o de un grupo al que perteneces, que no salió del todo bien. Escribe una breve revisión constructiva.', task: [
            'Cuenta la decisión y qué pasó.',
            'Imagina una alternativa con un **resultado pasado** (si hubiera…, habría…).',
            'Imagina otra con un **resultado presente** (si hubiera…, hoy / ahora…).',
            'Reconoce otra causa posible y termina con una **mejora concreta** para el futuro.',
          ], starters: ['El año pasado decidimos…', 'Si hubiéramos…, habríamos…', 'Entonces…', 'Si hubiera…, hoy…', 'Sin embargo, no todo se debió a…', 'Para la próxima vez propongo…'],
            words: ['decisión', 'alternativa', 'retraso', 'consecuencia', 'en cambio', 'sin embargo', 'todavía', 'a partir de ahora'],
            model: 'El equipo eligió un programa para organizar las fotos sin probarlo con todos. [[Si hubiéramos probado|violet]] el programa, [[habríamos detectado|blue]] los problemas de acceso y la exposición [[habría empezado|blue]] con menos retraso. Además, [[si hubiéramos elegido|violet]] una herramienta más sencilla, [[ahora|orange]] [[necesitaríamos|teal]] menos ayuda externa. Sin embargo, no toda la dificultad vino del programa: algunos archivos tenían nombres confusos. Propongo conservar una copia accesible y comprobar el acceso con cada participante antes de la próxima actividad. El pasado no puede cambiar, pero sí podemos mejorar la forma de compartir el material.',
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
            { tone: 'violet', label: 'CONDICIÓN', formula: 'si + hubiera / hubiese + participio', example: 'Si hubiéramos probado el programa…', caption: 'Algo que no pasó.' },
            { tone: 'blue', label: 'RESULTADO PASADO', formula: 'habría + participio', example: '…habríamos detectado el error.', caption: 'Otro final para algo que ya terminó.' },
            { tone: 'teal', label: 'RESULTADO PRESENTE', formula: '(hoy / ahora) + condicional simple', example: '…ahora tendríamos menos dificultades.', caption: 'Una situación actual distinta.' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'Dos comprobaciones', text: 'Después de «si», **nunca** el condicional: «si hubiera», no «si habría». Y para el resultado, mira el ancla: **ayer / entonces** → habría + participio; **hoy / ahora** → condicional simple.' },
        ] },
        { title: 'Desafío final', blocks: [
          { kind: 'choice', title: 'Cuatro frases, sin ayuda', items: [
            { prompt: 'Si ___ el mapa, no nos habríamos perdido.', options: ['hubiéramos mirado', 'habríamos mirado', 'miraríamos'], answer: 0, why: 'Condición pasada: «hubiera + participio».' },
            { prompt: 'Si hubiera aceptado la beca, hoy ___ en Madrid.', options: ['estaría', 'habría estado', 'estaba'], answer: 0, why: '«Hoy»: resultado presente.' },
            { prompt: 'Si me hubieras avisado, ayer te ___ en la estación.', options: ['esperaría', 'habría esperado', 'esperaba'], answer: 1, why: '«Ayer»: resultado pasado.' },
            { prompt: '¿Qué frase es correcta?', options: ['Si hubiera sabido, habría venido.', 'Si habría sabido, hubiera venido.', 'Si sabría, habría venido.'], answer: 0, why: 'Condición con «hubiera», resultado con «habría».' },
          ] },
        ] },
        { title: 'Tus errores y repaso', blocks: [
          { kind: 'review' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «Con la misma condición, da un resultado de ayer y otro de hoy». Modelo: «Si hubiera practicado, ayer habría presentado mejor y hoy estaría más tranquilo».' },
        ] },
      ],
    },
  ],
};
