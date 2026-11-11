import type { LiveLesson } from '../types';

/**
 * Lesson 545 · C1 · Resultar, quedar, seguir: verbos casi copulativos (course unit
 * G245, extension from the PCIC coverage review of 2026-11-11; studied after G176).
 * One scene: the premiere of a play, «La casa de enfrente», at a small theatre, and
 * its aftermath. Irene (director), Samuel (lead actor) and Olga (critic). In the
 * audio Olga (Spanish voice) records her radio review. Content: verbs that link a
 * subject with an attribute and add a nuance that ser / estar do not: outcome
 * (resultar, salir, quedar), persistence (seguir, continuar, permanecer, mantenerse),
 * appearance and attitude (parecer, mostrarse, verse, hacerse el + adj.), state after
 * an event (quedarse, acabar, terminar), habitual state (andar, ir). Agreement of the
 * attribute with the subject; contrast with the adverb (resultó bien / resultó
 * buena). Mistakes: *resultó ser muy bien, *permanecieron callado, *se quedó
 * sorprendidamente, *sigue siendo cerrado (→ sigue cerrado), *resultó como difícil.
 * Instructions use tú.
 */
export const lesson: LiveLesson = {
  id: 545,
  level: 'C1',
  title: 'Resultar, quedar, seguir: verbos casi copulativos',
  subtitle: 'Matizar lo que «ser» y «estar» dejan plano: resultó decepcionante, permaneció callado, se mostró encantada, anda preocupado.',
  legend: [
    { tone: 'teal', label: 'RESULTADO · resultar, salir, quedar (how it turned out)' },
    { tone: 'orange', label: 'PERMANENCIA · seguir, continuar, permanecer, mantenerse (still)' },
    { tone: 'violet', label: 'APARIENCIA Y ACTITUD · parecer, mostrarse, verse, hacerse el… (seems, acts)' },
    { tone: 'blue', label: 'ESTADO FINAL O HABITUAL · quedarse, acabar, andar, ir (ended up, goes around)' },
  ],
  optionNotes: {
    'callado': 'El atributo concuerda con el sujeto: los actores → **callados**.',
    'sorprendidamente': 'Después de estos verbos va un **adjetivo** que describe al sujeto, no un adverbio en -mente.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Más que «ser» y «estar»', coach: 'El verbo añade el matiz.',
      steps: [
        { title: 'Noche de estreno · Opening night', blocks: [
          { kind: 'lead', text: 'Anoche se estrenó «La casa de enfrente» en un teatro pequeño. Esta mañana, la directora, Irene, resume: «El primer acto **resultó** lento, pero el público **permaneció** atento. Samuel **se mostró** seguro y el final **quedó** redondo. Yo **sigo** nerviosa: la crítica de Olga sale hoy». Podría haber dicho «fue lento», «estuvo atento», «estuvo seguro». Pero cada verbo añade algo: un resultado, una duración, una actitud. De eso trata esta clase.', en: 'Last night “La casa de enfrente” opened at a small theatre. This morning the director, Irene, sums up: “The first act turned out slow, but the audience remained attentive. Samuel came across as confident and the ending worked out perfectly. I’m still nervous: Olga’s review comes out today”. She could have said “was slow”, “was attentive”. But each verb adds something: an outcome, a duration, an attitude. That is what this class is about.' },
          { kind: 'compare', title: 'Lo que añade el verbo · What the verb adds', columns: [
            { tone: 'neutral', label: 'ESTAR', sentence: 'El público estuvo atento.', idea: 'Describe un estado, sin más.', en: 'The audience was attentive.' },
            { tone: 'orange', label: 'PERMANECER', sentence: 'El público [[permaneció|orange]] atento.', idea: 'El estado se mantuvo todo el tiempo, sin cambios.', en: 'The audience remained attentive.' },
            { tone: 'teal', label: 'RESULTAR', sentence: 'El primer acto [[resultó|teal]] lento.', idea: 'Así fue al final, tras verlo: a veces contra lo esperado.', en: 'The first act turned out slow.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«La obra resultó más corta de lo previsto». ¿Qué añade «resultó» frente a «fue»?', options: ['Que es una opinión de otra persona.', 'Que es la conclusión tras el proceso, quizá inesperada.', 'Que la obra todavía no ha terminado.'], answer: 1, why: 'Resultar presenta la cualidad como desenlace o comprobación.', en: 'What does “resultó” add compared with “fue”?' },
            { prompt: '«Irene sigue nerviosa» implica que…', options: ['antes ya estaba nerviosa.', 'acaba de ponerse nerviosa.', 'ya no está nerviosa.'], answer: 0, why: 'Seguir: el estado anterior continúa.', en: '“Irene sigue nerviosa” implies that…' },
          ] },
        ] },
        { title: 'Resultado y permanencia · Outcome and persistence', mascot: '/brand/mascot/studying.webp', coach: 'Resultó, quedó, salió. Sigue, permanece.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'RESULTADO', question: '¿Cómo digo cómo acabó siendo algo?', en: 'How do I say how something turned out?', formula: ['resultar + adjetivo / participio / nombre', 'salir + adjetivo (coloquial; a menudo con dativo: me salió caro)', 'quedar + adjetivo / participio / bien, mal'],
            meaning: '**Resultar** presenta la cualidad como **desenlace** o constatación, y es frecuente en registro cuidado: «La reunión resultó inútil», «Resultaron heridas dos personas». **Salir** es su equivalente coloquial y habla del resultado de un proceso o producto: «La foto salió movida». **Quedar** describe el **estado final** en que algo se deja o permanece tras un proceso: «El decorado quedó precioso», «Quedó claro que…».',
            examples: [
              { es: 'El experimento con la música en directo [[resultó|teal]] arriesgado, pero eficaz.', en: 'The experiment with live music proved risky but effective.' },
              { es: 'Las entradas nos [[salieron|teal]] carísimas.', en: 'The tickets worked out really expensive for us.' },
              { es: 'Tras los recortes, el segundo acto [[quedó|teal]] reducido a veinte minutos.', en: 'After the cuts, the second act was reduced to twenty minutes.' },
            ],
            note: '**Resultar** admite también «resultar ser + nombre»: «El desconocido resultó ser su hermano». Con adjetivo, lo normal es omitir *ser*: «resultó difícil».' },
          { kind: 'concept', tone: 'orange', label: 'PERMANENCIA', question: '¿Cómo digo que un estado no cambia?', en: 'How do I say that a state does not change?', formula: ['seguir / continuar + adjetivo, participio', 'permanecer + adjetivo, participio (formal)', 'mantenerse + adjetivo (con esfuerzo o voluntad)'],
            meaning: '**Seguir** y **continuar** indican que un estado **anterior persiste**: «El teatro sigue cerrado». Se construyen directamente con el adjetivo o participio, sin *estar* ni *siendo* cuando hablamos de estados: «sigue cerrado» (no «sigue siendo cerrado»). **Permanecer** es más formal y subraya la **inmovilidad**. **Mantenerse** añade la idea de **esfuerzo**: «Se mantuvo firme».',
            examples: [
              { es: 'La sala [[permaneció|orange]] a oscuras durante un minuto entero.', en: 'The auditorium remained in darkness for a whole minute.' },
              { es: 'A sus setenta años, la actriz [[se mantiene|orange]] activa.', en: 'At seventy, the actress stays active.' },
              { es: 'La pregunta [[sigue|orange]] abierta.', en: 'The question remains open.' },
            ],
            note: 'Sí se dice «sigue siendo» con cualidades propias de *ser*: «Sigue siendo el mejor teatro de la ciudad».' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'A pesar de las protestas, la directora ___ firme en su decisión.', options: ['se mantuvo', 'salió', 'anduvo'], answer: 0, why: 'Mantenerse: persistencia con voluntad.', en: 'Despite the protests, the director stood firm in her decision.' },
            { prompt: 'Dos espectadores ___ heridos leves al caer un foco.', options: ['resultaron', 'siguieron', 'se mostraron'], answer: 0, why: 'Resultar + herido: desenlace de un accidente (registro periodístico).', en: 'Two spectators were slightly injured when a spotlight fell.' },
          ] },
        ] },
        { title: 'Apariencia, actitud y estado final · Appearance, attitude and end state', mascot: '/brand/mascot/speaking.webp', coach: 'Se mostró, se hizo el…, acabó, anda.', blocks: [
          { kind: 'concept', tone: 'violet', label: 'APARIENCIA Y ACTITUD', question: '¿Cómo describo la impresión que alguien da?', en: 'How do I describe the impression someone gives?', formula: ['parecer + adjetivo', 'mostrarse + adjetivo (actitud visible; formal)', 'verse + adjetivo (aspecto; frecuente en América)', 'hacerse el / la + adjetivo (fingir)'],
            meaning: '**Mostrarse** describe la **actitud que alguien deja ver**, sin afirmar lo que siente por dentro; es habitual en prensa: «El ministro se mostró optimista». **Verse** habla del **aspecto**: «Te ves cansado». **Hacerse el/la + adjetivo** es **fingir**: «Se hizo el sorprendido» = fingió sorpresa.',
            examples: [
              { es: 'La crítica [[se mostró|violet]] entusiasmada con el reparto.', en: 'The critics were (openly) enthusiastic about the cast.' },
              { es: 'Cuando le preguntaron por el error, Samuel [[se hizo el distraído|violet]].', en: 'When they asked him about the mistake, Samuel pretended not to notice.' },
            ] },
          { kind: 'concept', tone: 'blue', label: 'ESTADO FINAL O HABITUAL', question: '¿Y para el estado en que alguien acaba o suele estar?', en: 'And for the state someone ends up in or is usually in?', formula: ['quedarse + adjetivo / participio (reacción o estado tras algo)', 'acabar / terminar + adjetivo / participio', 'andar / ir + adjetivo / participio (estado habitual o prolongado; coloquial)'],
            meaning: '**Quedarse** expresa el **estado resultante**, a menudo una reacción repentina: «Se quedó helada», «Nos quedamos sin palabras». **Acabar** y **terminar** miran al **final de un proceso**: «Acabamos agotados». **Andar** e **ir** describen cómo está alguien **últimamente o de forma habitual**: «Anda preocupado», «Va siempre despeinado».',
            examples: [
              { es: 'Al ver la sala llena, Irene [[se quedó|blue]] muda.', en: 'On seeing the full house, Irene was left speechless.' },
              { es: 'Después de tres funciones seguidas, [[acabaron|blue]] rendidos.', en: 'After three performances in a row, they ended up exhausted.' },
              { es: 'Samuel [[anda|blue]] distraído desde el estreno.', en: 'Samuel has been distracted since opening night.' },
            ] },
          { kind: 'table', title: 'Adjetivo, no adverbio · Adjective, not adverb', head: ['Con estos verbos', 'Ejemplo', 'Observa'], rows: [
            ['adjetivo que **concuerda** con el sujeto', 'Las actrices [[permanecieron|orange]] **calladas**.', 'femenino plural, como «las actrices»'],
            ['**bien / mal** sí son posibles con quedar, salir, resultar', 'El ensayo [[salió|teal]] **bien**.', 'valoración global del resultado'],
            ['pero no adverbios en -mente como atributo', 'Se quedó **sorprendida** (no «sorprendidamente»).', 'se describe al sujeto, no la acción'],
          ] },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Los actores permanecieron callado.', right: 'Los actores permanecieron callados.', why: 'El atributo concuerda con el sujeto.' },
            { wrong: 'La taquilla sigue siendo cerrada.', right: 'La taquilla sigue cerrada.', why: 'Estado: seguir + participio, sin «siendo».' },
            { wrong: 'Olga se quedó sorprendidamente.', right: 'Olga se quedó sorprendida.', why: 'Adjetivo referido al sujeto, no adverbio.' },
            { wrong: 'La obra resultó ser muy bien.', right: 'La obra resultó muy bien. / La obra resultó muy buena.', why: '«Resultar ser» pide un nombre o adjetivo; con *bien* no lleva *ser*.' },
            { wrong: 'Samuel se hizo sorprendido. (= fingió)', right: 'Samuel se hizo el sorprendido.', why: 'Fingir: hacerse **el / la** + adjetivo.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Cuando anunciaron el premio, las dos autoras ___ boquiabiertas.', options: ['se quedaron', 'se mantuvieron', 'salieron'], answer: 0, why: 'Reacción repentina: quedarse.', en: 'When the prize was announced, the two authors were left open-mouthed.' },
            { prompt: 'Sabía perfectamente quién era, pero ___.', options: ['se hizo la despistada', 'resultó despistada', 'permaneció la despistada'], answer: 0, why: 'Fingir: hacerse la + adjetivo.', en: 'She knew perfectly well who he was, but she played dumb.' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: di frases planas con ser o estar («La reunión fue inútil», «Mi jefe está preocupado», «La tienda está cerrada») y tu alumno las matiza con otro verbo y explica qué añade.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'La mañana después', coach: 'Toca los verbos marcados.',
      steps: [
        { title: 'Café y periódicos', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles. Después tu alumno toca cada verbo marcado, lo sustituye por ser o estar y explica qué se pierde.', self: 'Lee el diálogo en voz alta. Toca cada verbo marcado, sustitúyelo por ser o estar y piensa qué matiz se pierde.' } },
          { kind: 'explore', title: 'En el bar del teatro', setting: 'Once de la mañana. Irene y Samuel repasan el estreno mientras esperan la crítica de Olga.', lines: [
            { who: 'Samuel', text: 'Apenas he dormido. [[Sigo|orange]] acelerado.', en: 'I’ve hardly slept. I’m still wired.' },
            { who: 'Irene', text: 'Es normal. A mí el primer acto me [[resultó|teal]] eterno desde la cabina.', en: 'That’s normal. From the booth, the first act felt endless to me.' },
            { who: 'Samuel', text: 'Fue culpa mía: [[me quedé|blue]] en blanco en la escena de la carta.', en: 'It was my fault: my mind went blank in the letter scene.' },
            { who: 'Irene', text: 'Nadie lo notó. [[Te mostraste|violet]] tan seguro que [[pareció|violet]] una pausa buscada.', en: 'Nobody noticed. You came across as so confident that it looked like a deliberate pause.' },
            { who: 'Samuel', text: '¿Y Olga? La vi en la fila tres. [[Permaneció|orange]] inmóvil toda la función.', en: 'And Olga? I saw her in row three. She stayed motionless for the whole show.' },
            { who: 'Irene', text: 'Siempre [[se hace la indiferente|violet]]. Luego escribe maravillas o te hunde.', en: 'She always pretends to be indifferent. Then she writes wonders or sinks you.' },
            { who: 'Samuel', text: 'El final, en cambio, [[quedó|teal]] perfecto. La gente [[salió|teal]] emocionada.', en: 'The ending, on the other hand, came out perfect. People left moved.' },
            { who: 'Irene', text: 'Sí. Y el técnico de luces [[acabó|blue]] exhausto, pobre.', en: 'Yes. And the lighting technician ended up exhausted, poor thing.' },
            { who: 'Samuel', text: 'Tú también [[andas|blue]] agotada. ¿Por qué no descansas hoy?', en: 'You’ve been worn out too. Why don’t you rest today?' },
            { who: 'Irene', text: 'Cuando lea la crítica. Hasta entonces, [[me mantengo|orange]] despierta a base de café.', en: 'Once I’ve read the review. Until then, I’m keeping myself awake on coffee.' },
          ], notes: {
            'Sigo': 'Seguir + participio: el estado de anoche **continúa**.',
            'resultó': 'Resultar con dativo («me resultó»): así lo percibió ella; valoración como desenlace.',
            'me quedé': 'Quedarse en blanco: **estado repentino** tras un suceso.',
            'Te mostraste': 'Mostrarse: la **actitud visible**, no lo que Samuel sentía.',
            'pareció': 'Parecer: impresión, apariencia.',
            'Permaneció': 'Permanecer: sin cambio durante todo el tiempo; registro más formal.',
            'se hace la indiferente': 'Hacerse la + adjetivo: **finge** indiferencia.',
            'quedó': 'Quedar: **estado final** tras el trabajo de los ensayos.',
            'salió': 'Salir + participio: aquí conserva el movimiento (salir del teatro) y describe **cómo** salió la gente.',
            'acabó': 'Acabar + adjetivo: estado al **final del proceso**.',
            'andas': 'Andar + adjetivo: estado **de estos días**, coloquial.',
            'me mantengo': 'Mantenerse: persistencia **con esfuerzo**.',
          } },
          { kind: 'choice', title: '¿Entendiste?', items: [
            { prompt: '¿Qué le pasó a Samuel en la escena de la carta?', options: ['Olvidó el texto un momento.', 'Se cayó.', 'Hizo una pausa planeada.'], answer: 0, why: '«Me quedé en blanco».', en: 'What happened to Samuel in the letter scene?' },
            { prompt: '¿Está Olga realmente indiferente, según Irene?', options: ['Sí.', 'No: lo finge.', 'No se sabe; no fue.'], answer: 1, why: '«Se hace la indiferente» = finge.', en: 'Is Olga really indifferent, according to Irene?' },
            { prompt: '¿Cómo salió el final?', options: ['Lento.', 'Perfecto.', 'Confuso.'], answer: 1, why: '«Quedó perfecto».', en: 'How did the ending turn out?' },
          ] },
        ] },
        { title: '¿Qué matiz añade? · What nuance does it add?', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'classify', title: 'Cuatro matices', categories: [
            { id: 'resultado', label: 'RESULTADO', tone: 'teal' },
            { id: 'permanencia', label: 'PERMANENCIA', tone: 'orange' },
            { id: 'apariencia', label: 'APARIENCIA O ACTITUD', tone: 'violet' },
            { id: 'final', label: 'ESTADO FINAL O HABITUAL', tone: 'blue' },
          ], items: [
            { text: 'La negociación resultó inútil.', answer: 'resultado', why: 'Desenlace.' },
            { text: 'El museo continúa cerrado.', answer: 'permanencia', why: 'El estado persiste.' },
            { text: 'El portavoz se mostró prudente.', answer: 'apariencia', why: 'Actitud visible.' },
            { text: 'Nos quedamos atónitos.', answer: 'final', why: 'Reacción tras el suceso.' },
            { text: 'Últimamente anda muy callada.', answer: 'final', why: 'Estado habitual de estos días.' },
            { text: 'La tarta me salió salada.', answer: 'resultado', why: 'Resultado de un proceso.' },
            { text: 'Se hizo el dormido.', answer: 'apariencia', why: 'Fingió.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: «¿Cómo te quedaste la última vez que te dieron una noticia inesperada?».' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Elige el verbo que matiza.',
      steps: [
        { title: 'El verbo justo · The right verb', blocks: [
          { kind: 'choice', items: [
            { prompt: 'Tras la tormenta, varias calles ___ inundadas.', options: ['quedaron', 'se mostraron', 'se hicieron las'], answer: 0, why: 'Estado final tras un suceso: quedar.', en: 'After the storm, several streets were left flooded.' },
            { prompt: 'En la rueda de prensa, la autora ___ dispuesta a responder a todo.', options: ['se mostró', 'salió', 'acabó'], answer: 0, why: 'Actitud visible: mostrarse.', en: 'At the press conference, the author appeared willing to answer everything.' },
            { prompt: 'Lleva una semana rara: ___ de mal humor.', options: ['anda', 'resulta', 'permanece el'], answer: 0, why: 'Estado de estos días: andar.', en: 'She’s had an odd week: she’s been in a bad mood.' },
            { prompt: 'El supuesto experto ___ un impostor.', options: ['resultó ser', 'siguió ser', 'se quedó ser'], answer: 0, why: 'Descubrimiento: resultar ser + nombre.', en: 'The supposed expert turned out to be an impostor.' },
            { prompt: 'Pese al cansancio, ___ concentrados hasta el final.', options: ['se mantuvieron', 'salieron', 'se hicieron'], answer: 0, why: 'Persistencia con esfuerzo: mantenerse.', en: 'Despite their tiredness, they stayed focused to the end.' },
            { prompt: 'Empezamos discutiendo de teatro y ___ enfadados.', options: ['acabamos', 'permanecimos', 'nos mostramos'], answer: 0, why: 'Final de un proceso: acabar.', en: 'We started out arguing about theatre and ended up angry.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Las puertas permanecieron cerrado durante el ensayo.', ok: false, options: ['Las puertas permanecieron cerradas durante el ensayo.', 'Las puertas permanecieron cerradamente durante el ensayo.', 'Las puertas permaneció cerradas durante el ensayo.'], answer: 0, why: 'Concordancia con «las puertas».' },
            { sentence: 'El estreno resultó un éxito rotundo.', ok: true, why: 'Correcta: resultar + nombre.' },
            { sentence: 'Me quedé muy sorprendidamente con el final.', ok: false, options: ['Me quedé muy sorprendido con el final.', 'Me quedé muy sorprendente con el final.', 'Me quedé muy sorpresa con el final.'], answer: 0, why: 'Adjetivo referido al sujeto.' },
            { sentence: 'El problema sigue sin resolver.', ok: true, why: 'Correcta: seguir + sin + infinitivo expresa que algo continúa pendiente.' },
            { sentence: 'Cuando lo saludé, se hizo distraído.', ok: false, options: ['Cuando lo saludé, se hizo el distraído.', 'Cuando lo saludé, se hizo distraídamente.', 'Cuando lo saludé, se resultó distraído.'], answer: 0, why: 'Fingir: hacerse el + adjetivo.' },
          ] },
        ] },
        { title: 'En la redacción · In the newsroom', blocks: [
          { kind: 'chat-fill', title: 'Olga y su editor', lines: [
            { who: 'Editor', text: 'Olga, ¿qué tal anoche? ¿Vale la pena?' },
            { who: 'Olga', text: 'Sí. El texto ___ más profundo de lo que esperaba.', options: ['resultó', 'anduvo', 'se hizo el'], answer: 0, why: 'Constatación contra lo esperado: resultar.' },
            { who: 'Editor', text: '¿Y el protagonista?' },
            { who: 'Olga', text: 'Al principio ___ algo rígido, pero fue creciendo.', options: ['se mostró', 'quedó sin', 'acabó de'], answer: 0, why: 'Actitud visible en escena: mostrarse.' },
            { who: 'Editor', text: '¿El público?' },
            { who: 'Olga', text: '___ en silencio absoluto durante la última escena.', options: ['Permaneció', 'Salió', 'Resultó ser'], answer: 0, why: 'Estado sin cambio: permanecer.' },
            { who: 'Editor', text: '¿Algún fallo?' },
            { who: 'Olga', text: 'La iluminación ___ pobre en el segundo acto. Pero yo ___ con ganas de volver.', options: ['quedó / me quedé', 'se hizo / me mostré', 'anduvo / resulté'], answer: 0, why: 'Quedar: resultado final; quedarse con ganas: estado tras la función.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras', items: [
            { tiles: ['resultó', 'La', 'inútil', 'reunión'], accept: ['La reunión resultó inútil'], en: 'The meeting proved useless.' },
            { tiles: ['sin', 'quedamos', 'Nos', 'palabras'], accept: ['Nos quedamos sin palabras'], en: 'We were left speechless.' },
            { tiles: ['sigue', 'El', 'cerrado', 'teatro'], accept: ['El teatro sigue cerrado'], en: 'The theatre is still closed.' },
            { tiles: ['el', 'hizo', 'Se', 'sorprendido'], accept: ['Se hizo el sorprendido'], en: 'He pretended to be surprised.' },
          ] },
        ] },
        { title: 'Transforma · Transform', blocks: [
          { kind: 'rewrite', title: 'Matiza la frase', items: [
            { prompt: 'La sala estaba vacía antes y está vacía ahora.', instruction: 'Resume con «seguir». Empieza con «La sala…».', accept: ['La sala sigue vacía'] },
            { prompt: 'Fingió que estaba enfermo.', instruction: 'Usa «hacerse el» + adjetivo.', accept: ['Se hizo el enfermo'] },
            { prompt: 'Al final del proceso, el contrato fue ventajoso para todos.', instruction: 'Cambia «fue» por «resultar». Empieza con «El contrato…».', accept: ['El contrato resultó ventajoso para todos'] },
            { prompt: 'Cuando oyó la noticia, estuvo pálida de repente.', instruction: 'Usa «quedarse». Empieza con «Cuando oyó la noticia,…».', accept: ['Cuando oyó la noticia, se quedó pálida'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno resume una película o serie reciente con cinco de estos verbos: cómo resultó, cómo se mostraron los actores, cómo se quedó él.' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'La crítica de Olga', coach: 'Primero escucha sin leer.',
      steps: [
        { title: 'En la radio · On the radio', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: ¿crítica positiva o negativa? Segunda escucha: tu alumno anota los verbos que matizan cada valoración.', self: 'Escucha una vez: ¿crítica positiva o negativa? Escucha otra vez y anota los verbos que matizan cada valoración.' } },
          { kind: 'listen', title: '«La casa de enfrente», por Olga Ferrer', channel: 'RADIO · CRÍTICA DE TEATRO', src: '/audio/grammar-live/545.mp3',
            before: 'Olga graba su crítica para el programa cultural de la radio. Irene y Samuel la escuchan en el bar. ¿Qué crees que dirá del primer acto? ¿Y del final?',
            gist: { prompt: '¿Cuál es la valoración general?', options: ['Positiva, con reservas sobre el primer acto y la iluminación.', 'Muy negativa.', 'Entusiasta, sin ninguna crítica.'], answer: 0, why: 'Elogia el conjunto y señala dos defectos.', en: 'What is the overall assessment?' },
            details: [
              { prompt: '¿Cómo resultó el primer acto?', options: ['Algo premioso.', 'Brillante.', 'Demasiado corto.'], answer: 0, why: '«El primer acto resulta algo premioso».', en: 'How did the first act turn out?' },
              { prompt: '¿Cómo se mostró el protagonista?', options: ['Inseguro toda la obra.', 'Contenido al principio y luego deslumbrante.', 'Indiferente.'], answer: 1, why: '«Se muestra contenido… y acaba deslumbrante».', en: 'How did the lead come across?' },
              { prompt: '¿Qué pasó con el público en la última escena?', options: ['Se rio.', 'Permaneció en silencio.', 'Salió antes de tiempo.'], answer: 1, why: '«El público permaneció en silencio».', en: 'What did the audience do in the last scene?' },
              { prompt: '¿Cómo se quedó Olga?', options: ['Con ganas de volver a verla.', 'Decepcionada.', 'Dormida.'], answer: 0, why: '«Me quedé con ganas de volver».', en: 'How was Olga left feeling?' },
            ],
            transcript: 'Anoche se estrenó «La casa de enfrente» y conviene decirlo pronto: la apuesta [[resulta|teal]] valiente. El primer acto [[resulta|teal]] algo premioso, y la iluminación [[queda|teal]] pobre en varios momentos. Pero el texto [[se mantiene|orange]] firme, y el protagonista, que al principio [[se muestra|violet]] contenido, casi tímido, [[acaba|blue]] deslumbrante en el monólogo final. Durante esa última escena, el público [[permaneció|orange]] en silencio, sin una tos. Hay quien [[se hace el entendido|violet]] y pide más ritmo; yo creo que la lentitud es parte de la propuesta. Salí del teatro tarde y [[me quedé|blue]] con ganas de volver. La obra [[sigue|orange]] en cartel hasta final de mes. Vayan.',
            reply: { teacher: 'Tu alumno hace de Irene y reacciona a la crítica: qué le resultó justo, qué no, y cómo se quedó.', self: 'Reacciona en voz alta como Irene: qué te resultó justo de la crítica, qué no, y cómo te quedaste.' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Valorar con matices', coach: 'No todo «fue» o «estuvo».',
      steps: [
        { title: 'Opiniones matizadas', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas; cuando tu alumno use ser o estar, pídele el mismo contenido con un verbo que matice.', self: 'Responde en voz alta. Cada vez que uses ser o estar, repite la frase con un verbo que matice.' } },
          { kind: 'talk', cards: [
            { q: 'Habla de algo que resultó muy distinto de lo que esperabas: un viaje, un trabajo, una película.', followUps: ['¿Qué esperabas?', '¿Cómo te quedaste?'], phrases: ['[[Resultó|teal]] mucho más… de lo que…', '[[Me quedé|blue]]…', 'Al final [[salió|teal]]…'], hint: 'Resultar para el desenlace; quedarse para tu reacción.', example: 'El curso de cerámica resultó mucho más exigente de lo que pensaba. Me quedé sorprendida de lo difícil que es centrar el barro, pero la primera pieza me salió bastante digna.', next: 'Ahora, lo que no cambia.' },
            { q: '¿Qué sigue igual en tu vida o en tu ciudad desde hace años?', followUps: ['¿Te gusta que siga así?', '¿Qué se mantiene pese a todo?'], phrases: ['[[Sigue|orange]]…', '[[Permanece|orange]]…', '[[Se mantiene|orange]]…'], hint: 'Seguir, continuar, permanecer, mantenerse.', example: 'El mercado de mi barrio sigue abierto, y eso que casi todas las tiendas pequeñas cerraron. La librería se mantiene viva gracias a los vecinos.', next: 'Ahora, actitudes.' },
            { q: 'Describe cómo se mostró alguien en una situación tensa: una entrevista, una discusión, una mala noticia.', followUps: ['¿Era lo que sentía de verdad?', '¿Alguien fingió?'], phrases: ['[[Se mostró|violet]]…', '[[Parecía|violet]]…, pero…', '[[Se hizo el / la|violet]]…'], hint: 'Mostrarse, parecer, hacerse el.', example: 'En la reunión, mi jefa se mostró tranquila, aunque por dentro estaba furiosa. Un compañero se hizo el sorprendido, y eso que lo sabía todo.', next: 'Ahora, tú estos días.' },
            { q: '¿Cómo andas últimamente? ¿Cómo acabas la semana?', followUps: ['¿Por qué?', '¿Qué te ayuda?'], phrases: ['[[Ando|blue]] un poco…', 'Los viernes [[acabo|blue]]…', '[[Voy|blue]] siempre…'], hint: 'Andar, ir, acabar + adjetivo.', example: 'Ando algo disperso, con demasiados proyectos. Los viernes acabo rendido, pero satisfecho. Y voy siempre apurado de tiempo.', teacher: 'Responde tú también, para que tu alumno oiga los verbos en un contexto natural.' },
          ], swap: { teacher: 'Al final, tu alumno hace de crítico: valora en un minuto un restaurante, un libro o una serie con al menos cinco verbos de hoy.', self: 'Ahora haz de crítico: valora en un minuto un restaurante, un libro o una serie con al menos cinco verbos de hoy.' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Una reseña', coach: 'Valora con precisión.',
      steps: [
        { title: 'Tu crítica', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos cada verbo: ¿qué añade frente a ser o estar? ¿Concuerda el atributo?', self: 'Escribe tu reseña y toca «Revisar mi texto». Después revisa cada verbo: ¿qué añade frente a ser o estar? ¿Concuerda el atributo?' } },
          { kind: 'write', title: 'Reseña de un espectáculo, un libro o una película', situation: 'Una revista cultural en línea publica reseñas de sus lectores. Escribe la tuya sobre una obra que hayas visto o leído hace poco.', task: [
            'Presenta la obra y tu expectativa previa.',
            'Valora dos aspectos con verbos de resultado (resultar, quedar, salir).',
            'Describe la actitud o la interpretación de alguien (mostrarse, parecer).',
            'Indica algo que se mantiene o sigue a lo largo de la obra.',
            'Cierra con tu reacción (quedarse, acabar) y una recomendación.',
          ], starters: ['Fui a ver… con la idea de que…', 'La primera parte resulta…', 'El protagonista se muestra…', 'El ritmo se mantiene…', 'Salí… / Me quedé…', 'En definitiva, …'],
            words: ['resultar', 'quedar', 'salir', 'seguir', 'permanecer', 'mantenerse', 'mostrarse', 'parecer', 'quedarse', 'acabar'],
            model: 'Fui a ver «Los días azules» con la idea de que sería otra comedia amable, y [[resultó|teal]] bastante más amarga. La primera mitad [[resulta|teal]] irregular y algunos diálogos [[quedan|teal]] forzados. Sin embargo, la protagonista [[se muestra|violet]] contenida y precisa, y su personaje [[permanece|orange]] en la memoria. El tono [[se mantiene|orange]] sobrio hasta el final, sin música que subraye las emociones. [[Me quedé|blue]] un rato sentado mientras pasaban los créditos, y [[acabé|blue]] conmovido. En definitiva, una película imperfecta que [[sigue|orange]] creciendo después de verla. Muy recomendable.',
            minWords: 90,
            checks: [
              { label: 'Un verbo de resultado: resultar, quedar, salir + atributo', pattern: '(?:^|[^\\p{L}])(?:result(?:a|an|ó|aron|aba)|qued(?:a|an|ó|aron)|sal(?:e|en|ió|ieron))\\s+(?:\\p{L}+\\s+)?\\p{L}+[oaes](?![\\p{L}])', tip: 'Por ejemplo: «La primera parte resulta irregular».' },
              { label: 'Un verbo de permanencia o de actitud: seguir, permanecer, mantenerse, mostrarse', pattern: '(?:^|[^\\p{L}])(?:sig(?:ue|uen|uió)|permane(?:ce|cen|ció|cieron)|se\\s+mant(?:iene|ienen|uvo)|se\\s+m(?:ue|o)str(?:a|an|ó|aron))(?![\\p{L}])', tip: 'Por ejemplo: «El tono se mantiene sobrio».' },
            ],
            warnings: [
              { pattern: '(?:^|[^\\p{L}])sig(?:ue|uen)\\s+siendo\\s+(?:cerrad|abiert|vací|llen)[oa]s?', why: 'Con estados: **sigue cerrado**, sin «siendo».' },
              { pattern: '(?:^|[^\\p{L}])(?:qued[óé]|quedaron|quedamos)\\s+(?:muy\\s+)?\\p{L}+damente(?![\\p{L}])', why: 'Tras *quedarse* va un **adjetivo** que concuerda con el sujeto, no un adverbio.' },
            ] },
        ] },
      ],
    },
    {
      id: 'cerrar', label: 'Cerrar', icon: '✓', mascot: '/brand/mascot/standing.webp',
      title: 'Lo esencial', coach: '¿Qué te llevas hoy?',
      steps: [
        { title: 'Lo esencial · The essentials', blocks: [
          { kind: 'recap', items: [
            { tone: 'teal', label: 'RESULTADO', formula: 'resultar · salir · quedar + atributo', example: 'El primer acto resultó lento; el final quedó redondo.', caption: 'la cualidad como desenlace', en: 'the quality as an outcome' },
            { tone: 'orange', label: 'PERMANENCIA', formula: 'seguir · continuar · permanecer · mantenerse', example: 'El público permaneció atento.', caption: 'el estado no cambia; «sigue cerrado», sin «siendo»', en: 'the state does not change' },
            { tone: 'violet', label: 'APARIENCIA Y ACTITUD', formula: 'parecer · mostrarse · verse · hacerse el', example: 'Se mostró segura. Se hizo el sorprendido.', caption: 'lo que se deja ver, o se finge', en: 'what is shown, or faked' },
            { tone: 'blue', label: 'ESTADO FINAL O HABITUAL', formula: 'quedarse · acabar · andar · ir', example: 'Se quedó muda. Anda preocupado.', caption: 'reacción, final de proceso, estado de estos días', en: 'reaction, end of a process, how someone has been lately' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Antes de escribir «fue» o «estuvo», pregúntate si quieres decir algo más: ¿es un **desenlace**? ¿Un estado que **persiste**? ¿Una **actitud** que se deja ver? ¿Una **reacción**? Si la respuesta es sí, hay un verbo que lo dice por ti. Y el atributo siempre concuerda con el sujeto.', en: 'Before writing “fue” or “estuvo”, ask yourself whether you mean something more: an outcome? A state that persists? An attitude on display? A reaction? If so, there is a verb that says it for you. And the attribute always agrees with the subject.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda', items: [
            { prompt: 'Las medidas ___ insuficientes para frenar la crisis.', options: ['resultaron', 'se hicieron las', 'anduvieron'], answer: 0, why: 'Desenlace constatado.', en: 'The measures proved insufficient to halt the crisis.' },
            { prompt: 'Los testigos ___ callados durante todo el interrogatorio.', options: ['permanecieron', 'salieron', 'resultaron ser'], answer: 0, why: 'Estado sin cambio; atributo en plural.', en: 'The witnesses remained silent throughout the questioning.' },
            { prompt: 'Sabía la respuesta, pero ___ para no comprometerse.', options: ['se hizo el tonto', 'se mostró tonto', 'quedó el tonto'], answer: 0, why: 'Fingir: hacerse el + adjetivo.', en: 'He knew the answer, but he played dumb so as not to commit himself.' },
            { prompt: 'Con la noticia, mi madre ___ de piedra.', options: ['se quedó', 'siguió', 'se mantuvo en'], answer: 0, why: 'Reacción repentina: quedarse de piedra.', en: 'At the news, my mother was stunned.' },
            { prompt: 'Veinte años después, la novela ___ vigente.', options: ['se mantiene', 'acaba', 'sale'], answer: 0, why: 'Persistencia: mantenerse.', en: 'Twenty years on, the novel remains relevant.' },
          ] },
        ] },
        { title: 'Ampliación · Venir, caer y otras extensiones', mascot: '/autoestudio/mascot/noting.webp', coach: 'Opcional: un paso más.', blocks: [
          { kind: 'lead', text: 'El grupo es abierto. **Venir** + adjetivo o participio describe cómo llega algo o alguien: «Viene cansada», «El informe viene firmado». **Caer** + adjetivo expresa un cambio brusco: «Cayó enfermo», «Cayó rendido». **Verse** + participio equivale a una pasiva de situación: «Se vio obligado a dimitir». Y **hallarse / encontrarse** son variantes formales de *estar*: «Se halla cerrado por reformas».', en: 'The group is open-ended. Venir + adjective or participle describes how something or someone arrives. Caer + adjective expresses a sudden change. Verse + participle works like a situational passive: “He was forced to resign”. And hallarse / encontrarse are formal variants of estar.' },
          { kind: 'choice', title: 'Para estudiantes rápidos', items: [
            { prompt: 'Ante el escándalo, el director ___ obligado a dimitir.', options: ['se vio', 'se hizo el', 'anduvo'], answer: 0, why: 'Verse + participio: pasiva de situación.', en: 'In the face of the scandal, the director was forced to resign.' },
            { prompt: 'Tras semanas de giras, la actriz ___ enferma.', options: ['cayó', 'vino', 'resultó ser'], answer: 0, why: 'Caer enfermo: cambio brusco.', en: 'After weeks of touring, the actress fell ill.' },
          ] },
          { kind: 'teacher', text: 'Este paso es opcional. Tu alumno busca en un titular de prensa real dos de estos verbos y explica qué matiz aportan.' },
        ] },
      ],
    },
  ],
};
