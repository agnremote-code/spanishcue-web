import type { LiveLesson } from '../types';

/**
 * Lesson 509 · C2 · Correlaciones temporales complejas y cambios de plano (course unit G209).
 * Builds on G130 (lesson 430: basic correlation, quiero que venga / quería que viniera, and the
 * present subjunctive after a past verb for a pending request), G087 (pluperfect), G133
 * (pluperfect subjunctive), G146 (lesson 233: reported speech), G194 (lesson 494: quoting in
 * texts, free indirect style receptively) and G206 (lesson 506: historical tenses). Their
 * inventories are not repeated. C2 step, following the Nueva gramática (RAE-ASALE, ch. 24):
 * the two anchors of a subordinate tense, the reported event or the moment of speech
 * (dijo que vendría / vendrá; pidió que lo llamara / llame: both accepted when the content is
 * still valid, only the past correlation when it is not); chains of subordinates where each verb
 * is measured from the one that governs it (Me aseguró que, cuando llegara, ya habría terminado;
 * Quería que lo hubieran revisado antes de que llegase); shifts of plane in narrative (preterite
 * narrative → historical present → back; free indirect style); deliberate shifts vs accidental
 * inconsistency; pluperfect for anteriority (Cuando llegué, ya se había ido is the norm; «ya se
 * fue» in that sense is colloquial, non-standard). Ampliación: imperfecto narrativo (de ruptura)
 * and futuro histórico in biographies and the press.
 * Scene: the oral history archive «Voces de La Alameda» at a municipal library. Coordinator
 * Lucía Arrieta edits volunteer Fernando Quiroga's chronicle about Amparo Ledesma, who sold
 * tickets at the Cine Alameda from 1961 until it closed in 1987; the owner, don Ernesto Salas,
 * gave her the key and asked her to keep it until someone reopened the cinema. It reopens as a
 * cultural centre on Saturday. Escuchar: Lucía's podcast intro (es-CO-SalomeNeural, ustedes).
 * Escribir: the chronicle of the reopening, written a week later from the library's press note.
 */
export const lesson: LiveLesson = {
  id: 509,
  level: 'C2',
  title: 'Correlaciones temporales complejas y cambios de plano',
  subtitle: 'Encadenar subordinadas con tiempos coherentes, elegir el ancla temporal y cambiar de plano en un relato solo cuando lo decides tú.',
  legend: [
    { tone: 'blue', label: 'ANCLA EN EL HECHO · dijo que vendría, pidió que guardara (measured from the past event)' },
    { tone: 'teal', label: 'ANCLA EN EL AHORA · dijo que vendrá, pidió que guarde (still valid when you speak)' },
    { tone: 'orange', label: 'ANTERIORIDAD Y CADENAS · había cerrado, hubieran revisado, habría terminado' },
    { tone: 'violet', label: 'CAMBIO DE PLANO · presente histórico, estilo indirecto libre, saltos' },
  ],
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: '¿Desde dónde se mide el tiempo?', coach: 'Cada verbo tiene un punto de mira. Every verb has a vantage point.',
      steps: [
        { title: 'La llave del Cine Alameda · The Cine Alameda key', blocks: [
          { kind: 'lead', text: 'Biblioteca municipal de La Alameda, martes. Lucía Arrieta coordina «Voces de La Alameda», un archivo de testimonios del barrio. Fernando Quiroga, voluntario, ha escrito una crónica sobre Amparo Ledesma, que vendió entradas en el Cine Alameda desde 1961 hasta su cierre en 1987. Aquella última noche, el dueño, don Ernesto, le dio la llave y le pidió que la guardara hasta que alguien volviera a abrir el cine. **Este sábado se reabre.** La crónica mezcla tres tiempos: 1987, los años de espera y hoy. Ya dominas la correlación básica; hoy trabajas **desde dónde** se mide cada tiempo.', en: 'An oral history archive. A volunteer has written a chronicle about a woman who sold cinema tickets until it closed in 1987; the owner gave her the key and asked her to keep it until someone reopened the place, which happens this Saturday. The text moves between 1987, the years in between and today. You know basic tense sequencing; today is about where each tense is measured from.' },
          { kind: 'guide', text: { teacher: 'Tú lees las tres frases. Tu alumno dice en cada una desde qué momento se mide el verbo subordinado: desde que se dijo o desde ahora.', self: 'Lee las tres frases en voz alta y decide desde qué momento se mide el verbo marcado: ¿desde que se dijo o desde ahora? (Measured from when it was said, or from now?)' } },
          { kind: 'compare', title: 'Un futuro, dos anclas · One future, two anchors', columns: [
            { tone: 'blue', label: 'ANCLA EN EL HECHO', sentence: 'Ayer Amparo me dijo que [[estaría|blue]] allí el sábado.', idea: 'El futuro se mide desde el momento en que ella lo dijo. Siempre es posible.', en: 'The future is measured from the moment she said it. This option is always available.' },
            { tone: 'teal', label: 'ANCLA EN EL AHORA', sentence: 'Ayer Amparo me dijo que [[estará|teal]] allí el sábado.', idea: 'El sábado sigue por delante cuando hablo: lo puedo medir desde hoy.', en: 'Saturday is still ahead as I speak, so I can measure it from today and present the plan as still on.' },
            { tone: 'neutral', label: 'UNA SOLA ANCLA', sentence: 'En 1987, don Ernesto anunció que el cine [[cerraría|blue]] el 2 de mayo.', idea: 'El cierre ya pasó: «cerrará» es imposible.', en: 'The closure is long past, so only the past-anchored form works.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Hoy es martes. Ayer Amparo dijo: «Estaré allí el sábado». ¿Qué versiones son correctas?', options: ['Solo «Me dijo que estará allí el sábado».', 'Las dos: «estaría» y «estará», porque el sábado aún no ha llegado.', 'Solo «Me dijo que estaría allí el sábado».'], answer: 1, why: 'La correlación con el pasado siempre es posible; la del presente también, porque el sábado sigue siendo futuro al hablar.', en: 'Saturday is still in the future at the moment of speaking.' },
            { prompt: 'En 1987, don Ernesto anunció: «El cine cerrará el 2 de mayo». ¿Cómo lo cuentas hoy?', options: ['Anunció que el cine cerrara el 2 de mayo.', 'Anunció que el cine cerraría el 2 de mayo.', 'Anunció que el cine cerrará el 2 de mayo.'], answer: 1, why: 'El cierre ya no es futuro desde hoy: solo cabe el condicional, futuro visto desde el pasado.', en: 'The closure is no longer in the future from today’s vantage point.' },
          ] },
        ] },
        { title: 'Dos anclas · Two anchors', mascot: '/brand/mascot/studying.webp', coach: '¿Sigue vigente al hablar? Still valid as you speak?', blocks: [
          { kind: 'concept', tone: 'blue', label: 'LA CORRELACIÓN Y SUS DOS ANCLAS', question: '¿Desde dónde mides el tiempo de la subordinada?', en: 'After a past main verb, the subordinate tense is normally measured from that past event: estaba, vendría, había venido, viniera. When the content is still true or still pending at the moment of speaking, Spanish also lets you measure it from now: está, vendrá, venga. The Nueva gramática calls this “double access”. The past-anchored option is always possible; the present-anchored one only when the speaker takes the content as still valid.', formula: ['verbo principal en pasado → subordinada anclada en el hecho: dijo que estaba · que vendría · que había venido · pidió que viniera', 'contenido aún vigente al hablar → también anclada en el ahora: dijo que está · que vendrá · pidió que venga', 'contenido ya no vigente → solo la correlación con el pasado'],
            meaning: 'La gramática académica llama a la segunda opción **doble acceso**: el verbo subordinado se interpreta desde el hecho referido **y** desde el momento en que hablas. No es un error ni una relajación: es una **decisión** que dice que el contenido sigue en pie.',
            examples: [
              { es: 'Don Ernesto le pidió que [[guardara|blue]] la llave hasta que alguien [[volviera|blue]] a abrir el cine.', en: 'Neutral narrative: the request is measured from 1987.' },
              { es: 'Don Ernesto le pidió que [[guarde|teal]] la llave hasta que alguien [[vuelva|teal]] a abrir el cine.', en: 'Also correct: the reopening is still pending today, so the request is presented as still in force.' },
              { es: 'Amparo contó que la taquilla [[está|teal]] a la izquierda de la entrada.', en: 'The ticket booth is still there, so the present is possible; “estaba” would be equally correct.' },
              { es: 'Hace diez años me pidió que la [[llamara|blue]] aquel verano.', en: 'That summer is over: the request is no longer pending, so only the imperfect subjunctive works.' },
            ] },
          { kind: 'table', title: 'De las palabras al relato · From the words to the report', head: ['Lo que se dijo', 'Ancla en el hecho', 'Ancla en el ahora (si sigue vigente)'], rows: [
            ['«Estoy cansada».', 'Dijo que [[estaba|blue]] cansada.', 'Dijo que [[está|teal]] cansada (si lo sigue estando).'],
            ['«Estaré allí el sábado».', 'Dijo que [[estaría|blue]] allí el sábado.', 'Dijo que [[estará|teal]] allí el sábado (si el sábado no ha llegado).'],
            ['«Llámame el viernes».', 'Me pidió que la [[llamara|blue]] el viernes.', 'Me pidió que la [[llame|teal]] el viernes (si la llamada sigue pendiente).'],
            ['«El cine cerrará el 2 de mayo» (1987).', 'Anunció que [[cerraría|blue]] el 2 de mayo.', '— imposible: el hecho ya pasó'],
          ], note: 'La correlación con el pasado **siempre** es posible. La del ahora es una opción cuando quien habla asume que el contenido sigue vigente; si ya no lo está, suena a error.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'El lunes Fernando le dijo a Lucía: «Revisa la crónica antes del jueves». Hoy es martes y Lucía aún no la ha revisado. ¿Qué es posible?', options: ['Las dos: el encargo sigue pendiente.', 'Solo «Me pidió que la revisara».', 'Solo «Me pidió que la revise».'], answer: 0, why: 'El imperfecto de subjuntivo siempre vale; el presente, porque el encargo sigue en pie al hablar.', en: 'The task is still pending today.' },
            { prompt: 'Amparo, en 2010: «Estoy harta de esperar». Hoy ya no lo está, porque el cine reabre. ¿Cómo lo cuentas?', options: ['Dijo que está harta de esperar.', 'Dijo que estaba harta de esperar.', 'Dijo que estuviera harta de esperar.'], answer: 1, why: 'El estado ya no es vigente: solo la correlación con el pasado. El subjuntivo no tiene sentido tras «dijo» informativo.', en: 'Her feeling no longer holds today.' },
          ] },
        ] },
        { title: 'Subordinada dentro de subordinada · A clause inside a clause', mascot: '/brand/mascot/speaking.webp', coach: 'Mira al verbo que manda. Look at the governing verb.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'CADENAS DE CORRELACIÓN', question: '¿Qué verbo rige a cada verbo?', en: 'In a chain of clauses, each verb takes its time from the verb that governs it, not just from the main verb. A future seen from a past becomes a conditional; something completed before that future point becomes habría + participle, or the pluperfect subjunctive where the subjunctive is required (antes de que, querer que); a time or purpose clause pointing forward from a past takes the imperfect subjunctive.', formula: ['cada verbo se mide desde el que lo rige', 'futuro visto desde un pasado → condicional: aseguró que terminaría', 'acabado antes de ese futuro → habría + participio · si pide subjuntivo, hubiera + participio', 'cuando, en cuanto, hasta que, para que con valor futuro desde un pasado → imperfecto de subjuntivo'],
            meaning: 'En «Me aseguró que, cuando llegara, ya **habría terminado**», «aseguró» es pasado; «terminar» es futuro desde ese pasado, pero **anterior** a otro momento futuro, «cuando llegara». Por eso, condicional **compuesto**. La cadena no admite mezclar anclas a mitad de camino.',
            examples: [
              { es: 'Me aseguró que, [[cuando llegara|blue]], ya [[habría terminado|orange]].', en: 'He assured me that by the time I arrived he would already have finished.' },
              { es: 'Quería que lo [[hubieran revisado|orange]] antes de que [[llegase|blue]].', en: 'She wanted it to have been checked before she arrived: the checking had to precede a future-in-the-past arrival.' },
              { es: 'Me dijo que le [[habían pedido|orange]] que no lo [[contara|blue]] hasta que se [[hubiera firmado|orange]] el acuerdo.', en: 'Three layers: the asking came first; the silence would last until the agreement had been signed.' },
            ] },
          { kind: 'table', title: 'La misma cadena desde dos anclas · The same chain from two anchors', head: ['Desde el presente', 'Desde el pasado'], rows: [
            ['Me asegura que, cuando **llegue**, ya **habrá terminado**.', 'Me aseguró que, cuando **llegara**, ya **habría terminado**.'],
            ['Quiere que lo **hayan revisado** antes de que **llegue**.', 'Quería que lo **hubieran revisado** antes de que **llegase**.'],
            ['Dice que le **han pedido** que no lo **cuente** hasta que se **firme**.', 'Dijo que le **habían pedido** que no lo **contara** hasta que se **firmara**.'],
          ], note: '«Llegara» y «llegase» son equivalentes en la correlación. Si el contenido sigue vigente, la cadena entera puede anclarse en el ahora; lo que no funciona es empezar en un plano y terminar en otro.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'En 1987, don Ernesto le prometió que, en cuanto ___ el local, le pagaría el último mes.', options: ['vendería', 'vendiera', 'venda'], answer: 1, why: '«En cuanto» con valor futuro desde un pasado pide imperfecto de subjuntivo. «Venda» anclaría en hoy algo ya cerrado; el condicional no va tras «en cuanto».', en: 'A time clause pointing forward from 1987.' },
            { prompt: 'La alcaldesa quería que los vecinos ___ las fotos antes de que empezara el acto.', options: ['hayan traído', 'hubieran traído', 'habrían traído'], answer: 1, why: '«Querer que» pide subjuntivo; el pasado y la anterioridad a «empezara» piden pluscuamperfecto de subjuntivo.', en: 'Past wish, completed before another future-in-the-past point.' },
          ] },
        ] },
        { title: 'Cambios de plano en el relato · Shifts of plane in a narrative', mascot: '/autoestudio/mascot/noting.webp', coach: '¿Lo decides tú o se te escapa? Your choice, or a slip?', blocks: [
          { kind: 'compare', title: 'Tres maneras de moverse en el tiempo · Three ways of moving in time', columns: [
            { tone: 'violet', label: 'PRESENTE HISTÓRICO', sentence: 'Aquella noche Amparo cerró la caja. [[Es la última sesión. Baja a la sala y se sienta|violet]] en la fila siete. Al día siguiente, el cartel ya no estaba.', idea: 'El narrador acerca el momento clave al lector y luego vuelve al pasado, con fronteras claras.', en: 'The narrator brings the key moment closer, then returns to the past at a clear boundary (“Al día siguiente”).' },
            { tone: 'violet', label: 'ESTILO INDIRECTO LIBRE', sentence: 'Amparo apretó la llave. [[¿Y si nadie volvía a abrirlo? Mañana sería otro día.|violet]]', idea: 'Oímos lo que piensa ella, sin «pensó que», con los tiempos del narrador y los deícticos de ella («mañana»).', en: 'We hear her thoughts without a reporting verb: the narrator’s past tenses with her own time words.' },
            { tone: 'neutral', label: 'SALTO INVOLUNTARIO', sentence: 'Don Ernesto [[entra en la taquilla y le dio|violet]] la llave.', idea: 'Dos planos en la misma oración, sin motivo: el lector se pierde.', en: 'Two time planes within one sentence for no reason: the reader loses their footing.' },
          ] },
          { kind: 'decide', title: '¿Deliberado o despiste? · Deliberate or a slip?', steps: [
            { q: '¿El cambio coincide con un momento clave y empieza en una frontera clara (párrafo, frase nueva, «De pronto», «Es la última noche»)?', yes: 'Puede ser un recurso: sigue.', no: 'Probablemente es un despiste: unifica el plano.' },
            { q: '¿El nuevo plano se mantiene en todo el pasaje, también en las subordinadas?', yes: 'Sigue.', no: 'Corrige las formas que se escapan: «entra y le **da**», no «entra y le dio».' },
            { q: '¿La vuelta al pasado está marcada («Al día siguiente», «Años después»)?', yes: 'Es un **cambio de plano deliberado**.', no: 'Marca la vuelta o el lector no sabrá dónde está.' },
          ] },
          { kind: 'tip', icon: '💡', title: 'Subordinadas dentro del presente histórico · Clauses inside the historical present', text: 'Dentro de un pasaje en presente histórico, lo coherente es seguir en presente: «Don Ernesto le **pide** que **espere**». También se documenta «le pide que esperara», porque el hecho es pasado; pero si eliges el presente para acercar la escena, mantenerlo evita saltos.', en: 'Inside a historical-present passage, keeping the present in subordinate clauses (le pide que espere) is the consistent choice. The imperfect subjunctive is also attested because the event is past, but sticking to one plane avoids jolts.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Amparo baja a la sala y se sienta en la fila siete. La película termina.» ¿Qué recurso es?', options: ['Estilo indirecto libre.', 'Presente histórico: el narrador acerca el pasado.', 'Un salto involuntario.'], answer: 1, why: 'Hechos de 1987 contados en presente, de forma coherente en todo el pasaje.', en: 'Past events told in the present, consistently.' },
            { prompt: '«Amparo guardó la llave. ¿Quién iba a acordarse de aquel cine dentro de diez años?» ¿Qué es la pregunta?', options: ['Una pregunta del narrador al lector.', 'Un error: falta «pensó que».', 'Estilo indirecto libre: el pensamiento de Amparo con los tiempos del narrador.'], answer: 2, why: 'La duda es de Amparo («dentro de diez años» desde su momento), pero va en pasado y sin verbo introductor.', en: 'Her doubt, in the narrator’s past tense, with no reporting verb.' },
          ] },
        ] },
        { title: 'Anterioridad y errores frecuentes · Anteriority and common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Antes de un pasado, «había». Before a past, «había».', blocks: [
          { kind: 'tip', icon: '🔑', title: 'Pluscuamperfecto e indefinido · Pluperfect and preterite', text: 'Si una acción es anterior a otra pasada y lo subrayas con «ya», la norma es el pluscuamperfecto: «Cuando llegué, ya **se había ido**». En la lengua oral se oye «Cuando llegué, ya se fue», pero no es la forma estándar: en la lengua cuidada se usa el pluscuamperfecto. Si las acciones son **sucesivas**, el indefinido basta: «Cuando llegué, se fue» (llegué y entonces se fue). En estilo indirecto también se usa el indefinido cuando la fecha lo aclara («Me contó que empezó en 1961»), pero el pluscuamperfecto marca la anterioridad sin ambigüedad.', en: 'For an action completed before another past one, especially with “ya”, standard Spanish uses the pluperfect. The preterite in that sense is heard in speech but is not standard. For actions in sequence, the preterite is fine. In reported speech the preterite also appears when a date makes the order clear, but the pluperfect is the unambiguous choice.' },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'En 1987 anunció que el cine cerrará a final de mes.', right: 'En 1987 anunció que el cine cerraría a final de mes.', why: 'El cierre ya pasó: el ancla en el ahora es imposible.' },
            { wrong: 'Cuando volvimos, el camión ya se llevó las butacas.', right: 'Cuando volvimos, el camión ya se había llevado las butacas.', why: 'Anterioridad con «ya»: la norma es el pluscuamperfecto.' },
            { wrong: 'Me aseguró que, cuando llegara, ya habrá terminado.', right: 'Me aseguró que, cuando llegara, ya habría terminado.', why: 'La cadena empieza en el pasado y salta al presente a mitad de camino.' },
            { wrong: 'Abre la puerta, enciende la luz y vio que no había nadie.', right: 'Abre la puerta, enciende la luz y ve que no hay nadie. (O todo en pasado.)', why: 'Salto involuntario de plano dentro de una misma oración.' },
            { wrong: 'Hace diez años me pidió que la llame aquel verano.', right: 'Hace diez años me pidió que la llamara aquel verano.', why: 'La petición ya no está pendiente: el presente de subjuntivo no tiene ancla posible.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Cuando Fernando llegó a la biblioteca, Lucía ya ___ la crónica.', options: ['leyó', 'había leído', 'leyera'], answer: 1, why: 'Lectura terminada antes de la llegada, con «ya»: pluscuamperfecto.', en: 'She had finished reading before he arrived.' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno cuenta en tres frases una promesa que le hicieron hace tiempo y decide, en voz alta, si puede anclarla en el ahora o solo en el pasado.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'La crónica de Fernando', coach: 'Toca cada marca: ¿recurso o despiste? Tap each mark.',
      steps: [
        { title: 'Revisión en la biblioteca · Editing session at the library', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Fernando y tu alumno es Lucía. Después tu alumno toca cada marca y explica desde dónde se mide el tiempo o por qué cambia el plano.', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada: ¿desde dónde se mide el tiempo? ¿Es un recurso o un despiste? (Where is the tense anchored? Choice or slip?)' } },
          { kind: 'explore', title: '«La última sesión»', setting: 'Martes por la tarde, sala de trabajo de la biblioteca. Lucía Arrieta tiene impresa la crónica de Fernando Quiroga, llena de anotaciones en lápiz.', lines: [
            { who: 'Lucía', text: 'Fernando, ya la he leído. El arranque funciona, pero a mitad del segundo párrafo saltas al presente: «Es la última noche del cine y Amparo [[cuenta las entradas|violet]] una por una».', en: 'I’ve read it. The opening works, but halfway through the second paragraph you jump into the present: “It’s the cinema’s last night and Amparo counts the tickets one by one.”' },
            { who: 'Fernando', text: 'Lo hice a propósito. Quería que el lector [[se sentara|blue]] con ella en la taquilla y viviera esa noche en directo.', en: 'I did it on purpose. I wanted readers to sit with her in the booth and live that night as it happened.' },
            { who: 'Lucía', text: 'Y funciona. El problema viene tres líneas después: «Don Ernesto [[entra en la taquilla y le dio|violet]] la llave». Ahí el lector ya no sabe dónde está.', en: 'And it works. The problem comes three lines later: “Don Ernesto comes into the booth and gave her the key.” At that point readers lose their bearings.' },
            { who: 'Fernando', text: 'Tienes razón, eso es un despiste. O «entra y le da», o todo el pasaje en pasado.', en: 'You’re right, that’s a slip. Either “comes in and gives”, or the whole passage in the past.' },
            { who: 'Lucía', text: 'Eso. Luego está la cita: «Le pidió que [[guarde la llave|teal]] hasta que alguien vuelva a abrir el cine». ¿Lo dejas así adrede?', en: 'Exactly. Then there’s the quote: “He asked her to keep the key until someone reopens the cinema.” Is that deliberate?' },
            { who: 'Fernando', text: 'Sí, el encargo sigue en pie: el sábado, por fin, se reabre. Pero si te suena raro, pongo «[[guardara|blue]]».', en: 'Yes, the request still stands: on Saturday it finally reopens. But if it sounds odd to you, I’ll put “guardara”.' },
            { who: 'Lucía', text: 'Las dos son correctas; la tuya subraya que la promesa llega hasta hoy. Lo que sí cambiaría es esto: «Cuando Amparo volvió, el proyector [[ya se lo llevaron|orange]]».', en: 'Both are correct; yours stresses that the promise reaches all the way to today. What I would change is this: “When Amparo came back, they already took the projector.”' },
            { who: 'Fernando', text: 'Es como lo dice ella, pero en la crónica va «[[ya se lo habían llevado|orange]]». De acuerdo.', en: 'That’s how she says it, but in the chronicle it should be “they had already taken it”. Agreed.' },
            { who: 'Lucía', text: 'Y esta frase no la toques: «Le aseguró que, [[cuando lo reabrieran|blue]], él ya [[se habría jubilado|orange]]». Cada verbo mira al que lo rige.', en: 'And don’t touch this sentence: “He assured her that by the time they reopened it, he would already have retired.” Each verb looks to the one that governs it.' },
            { who: 'Fernando', text: '¿Y el final? «Amparo apretó la llave en el bolsillo. [[¿Y si nadie volvía a abrirlo?|violet]] Bueno, [[mañana sería otro día|violet]]».', en: 'And the ending? “Amparo squeezed the key in her pocket. What if no one ever opened it again? Well, tomorrow would be another day.”' },
            { who: 'Lucía', text: 'Precioso: oímos lo que piensa ella sin un «pensó que». Y avísala, porque ayer me dijo que [[vendrá|teal]] el sábado con la llave en el bolso.', en: 'Beautiful: we hear what she’s thinking without a “she thought that”. And let her know, because yesterday she told me she’ll come on Saturday with the key in her bag.' },
          ], notes: {
            'cuenta las entradas': '**Presente histórico**: un hecho de 1987 contado en presente para acercar el momento clave. Empieza en una frontera clara: «Es la última noche».',
            'se sentara': 'Correlación básica: «quería» (pasado) + imperfecto de subjuntivo. El deseo de Fernando se mide desde el momento en que escribía.',
            'entra en la taquilla y le dio': '**Salto involuntario**: presente y pasado en la misma oración, sin motivo. O «entra y le da», o «entró y le dio».',
            'guarde la llave': '**Ancla en el ahora**: tras «pidió», presente de subjuntivo porque el encargo sigue vigente hoy (el cine aún no ha reabierto). Correcto, y con un matiz expresivo.',
            'guardara': '**Ancla en el hecho**: la correlación con el pasado, siempre posible. Neutra.',
            'ya se lo llevaron': 'Indefinido con valor de anterioridad tras «ya»: se oye en la lengua oral, pero no es la forma estándar.',
            'ya se lo habían llevado': '**Pluscuamperfecto**: la norma para una acción terminada antes de otra pasada («cuando Amparo volvió»).',
            'cuando lo reabrieran': 'Temporal con valor futuro desde un pasado («aseguró»): imperfecto de subjuntivo.',
            'se habría jubilado': '**Condicional compuesto**: futuro desde «aseguró», pero anterior a otro momento futuro, «cuando lo reabrieran».',
            '¿Y si nadie volvía a abrirlo?': '**Estilo indirecto libre**: la duda de Amparo, en imperfecto (el tiempo del narrador) y sin verbo introductor.',
            'mañana sería otro día': 'Estilo indirecto libre: «mañana» es el deíctico de Amparo; el futuro de su pensamiento («será») pasa a condicional.',
            'vendrá': '**Ancla en el ahora**: el sábado sigue siendo futuro cuando Lucía habla. «Vendría» también sería correcto.',
          } },
          { kind: 'choice', title: '¿Has entendido? · Did you understand?', items: [
            { prompt: '¿Por qué pasa Fernando al presente en el segundo párrafo?', options: ['Para que el lector viva la última noche como si estuviera allí.', 'Porque Amparo se lo pidió.', 'Porque no sabe usar el indefinido.'], answer: 0, why: '«Quería que el lector se sentara con ella en la taquilla»: es un cambio de plano deliberado.', en: 'Why does Fernando switch to the present?' },
            { prompt: '¿Qué critica Lucía en «Don Ernesto entra en la taquilla y le dio la llave»?', options: ['Que el presente histórico no se puede usar en una crónica.', 'Que falta el pluscuamperfecto.', 'Que mezcla dos planos en la misma oración sin motivo.'], answer: 2, why: 'El problema no es el presente, sino el salto involuntario: «entra… y le dio».', en: 'What is the problem in that sentence?' },
            { prompt: '¿Por qué acepta Lucía «Le pidió que guarde la llave hasta que alguien vuelva a abrir el cine»?', options: ['Porque en una crónica todo vale.', 'Porque «guardara» sería incorrecto.', 'Porque el encargo sigue vigente: el cine aún no ha reabierto.'], answer: 2, why: 'El presente de subjuntivo tras un pasado es posible cuando el contenido sigue pendiente al hablar; «guardara» también es correcto.', en: 'Why is the present subjunctive acceptable here?' },
          ] },
        ] },
        { title: 'El párrafo corregido · The revised paragraph', mascot: '/brand/mascot/kneeling.webp', coach: 'Elige con la cadena entera a la vista. Keep the whole chain in view.', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees el papel de Lucía y tu alumno el de Fernando; en cada hueco, tu alumno elige y dice qué verbo manda.', self: 'Completa la conversación. En cada hueco, busca el verbo que manda y el plano del pasaje. (Find the governing verb and the plane.)' } },
          { kind: 'chat-fill', title: 'Fernando lee la versión nueva · Fernando reads the new version', lines: [
            { who: 'Fernando', text: '«Cuando Amparo volvió a subir, don Ernesto ya ___ las luces del vestíbulo».', options: ['apagó', 'había apagado', 'apagara'], answer: 1, why: 'Acción terminada antes de «volvió», con «ya»: pluscuamperfecto.' },
            { who: 'Lucía', text: 'Bien. ¿Y lo que le dijo al darle la llave?' },
            { who: 'Fernando', text: '«Le pidió que no le ___ nada a nadie hasta el lunes siguiente».', options: ['contara', 'contaría', 'cuente'], answer: 0, why: '«El lunes siguiente» de 1987 ya pasó: solo cabe la correlación con el pasado. El condicional no va en una petición.' },
            { who: 'Lucía', text: 'Perfecto. ¿Y el pensamiento de Amparo al salir?' },
            { who: 'Fernando', text: '«Miró la pantalla vacía. ¿Quién ___ ahora los sábados por la tarde?».', options: ['vendrá', 'viniera', 'vendría'], answer: 2, why: 'Estilo indirecto libre en un pasaje en pasado: el futuro del pensamiento pasa a condicional; «ahora» es el deíctico de ella.' },
          ] },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Anclas, cadenas y planos', coach: 'Cada verbo, su punto de mira. Every verb, its vantage point.',
      steps: [
        { title: '¿Desde dónde se mide? · Where is it measured from?', blocks: [
          { kind: 'guide', text: { teacher: 'Tu alumno lee cada frase y la clasifica. Tú preguntas: «¿Sigue vigente hoy?».', self: 'Lee cada frase y clasifícala. Pregúntate si el contenido sigue vigente hoy o si hay un cambio de plano. (Still valid today, or a shift of plane?)' } },
          { kind: 'classify', title: 'Tres casos · Three cases', categories: [
            { id: 'hecho', label: 'ANCLA EN EL HECHO', tone: 'blue' },
            { id: 'ahora', label: 'ANCLA EN EL AHORA', tone: 'teal' },
            { id: 'plano', label: 'CAMBIO DE PLANO', tone: 'violet' },
          ], items: [
            { text: 'En 1987, don Ernesto anunció que el cine cerraría a final de mes.', answer: 'hecho', why: 'Futuro medido desde 1987; desde hoy ya es pasado.' },
            { text: 'La semana pasada la alcaldesa dijo que la sala tendrá ciento veinte butacas.', answer: 'ahora', why: 'La sala aún no ha abierto: el futuro se mide desde hoy.' },
            { text: 'Amparo me pidió ayer que la llame el viernes.', answer: 'ahora', why: 'El viernes no ha llegado y la llamada sigue pendiente.' },
            { text: 'Aquel lunes, Amparo le preguntó a don Ernesto si volvería alguna vez.', answer: 'hecho', why: 'Pregunta medida desde aquel lunes de 1987.' },
            { text: 'Es el 2 de mayo de 1987. Termina la película, se encienden las luces y nadie se levanta.', answer: 'plano', why: 'Presente histórico: un hecho pasado contado en presente.' },
            { text: 'Amparo dejó la llave en el cajón. ¿Para qué la quería ya, si nadie iba a volver?', answer: 'plano', why: 'Estilo indirecto libre: el pensamiento de Amparo sin verbo introductor.' },
          ] },
        ] },
        { title: 'Cadenas · Chains', mascot: '/brand/mascot/speaking.webp', blocks: [
          { kind: 'choice', title: 'Elige · Choose', items: [
            { prompt: 'La coordinadora quería que los voluntarios ___ las sillas antes de que abrieran las puertas.', options: ['hubieran colocado', 'hayan colocado', 'habrían colocado'], answer: 0, why: '«Quería que» pide subjuntivo en pasado; colocar es anterior a «abrieran»: pluscuamperfecto de subjuntivo.', en: 'A past wish about something to be completed before another point.' },
            { prompt: 'Me prometió que, cuando yo volviera de vacaciones, ella ya ___ el archivo.', options: ['habría digitalizado', 'haya digitalizado', 'había digitalizado'], answer: 0, why: 'Futuro desde «prometió» y anterior a «cuando volviera»: condicional compuesto. «Había digitalizado» sería anterior a la promesa.', en: 'Completed before a future point seen from the past.' },
            { prompt: 'Esta mañana Lucía me ha dicho que, cuando ___ la crónica, se la mande.', options: ['termine', 'terminara', 'terminaré'], answer: 0, why: '«Ha dicho» y «mande» sitúan la cadena en el presente: temporal futura con presente de subjuntivo. «Terminaré» no va tras «cuando» futuro.', en: 'The chain is anchored in the present (“se la mande”).' },
            { prompt: 'Al llegar a la estación, Amparo vio que el último tren ya ___.', options: ['había salido', 'salió', 'saliera'], answer: 0, why: 'Salida anterior a «vio», con «ya»: pluscuamperfecto. «Salió» aquí es coloquial y no estándar.', en: 'The train left before she saw it was gone.' },
            { prompt: 'Le dijeron que no podría entrar hasta que ___ la última sesión.', options: ['terminara', 'termine', 'terminaría'], answer: 0, why: '«Hasta que» con valor futuro desde un pasado: imperfecto de subjuntivo. La sesión de entonces ya no está pendiente.', en: 'A time limit pointing forward from a past moment.' },
          ] },
        ] },
        { title: 'El borrador de Fernando · Fernando’s draft', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'guide', text: { teacher: 'Son frases seguidas del borrador. Tu alumno decide si cada una es coherente y, si no, elige la corrección y explica qué ancla o qué plano falla.', self: 'Son frases seguidas del borrador de Fernando. ¿Son coherentes? Si no, elige la corrección. (Consistent? If not, pick the fix.)' } },
          { kind: 'fix', title: 'Párrafo a párrafo · Paragraph by paragraph', items: [
            { sentence: 'Amparo empezó a trabajar en la taquilla en 1961; antes, había cosido en el taller de su tía.', ok: true, why: 'Pluscuamperfecto para una etapa anterior a otra pasada: coherente.' },
            { sentence: 'Durante veintiséis años vendió entradas, y cada sábado don Ernesto le pide que le guarde dos butacas de la fila siete.', ok: false, options: ['…y cada sábado don Ernesto le pidiera que le guardara dos butacas…', '…y cada sábado don Ernesto le pedía que le guardara dos butacas…', '…y cada sábado don Ernesto le pedía que le guardaría dos butacas…'], answer: 1, why: 'Un hábito del pasado dentro de un relato en pasado: imperfecto y, tras «pedía que», imperfecto de subjuntivo. El salto al presente no está motivado.' },
            { sentence: 'En la primavera de 1987, don Ernesto anunció que el cine cerrará el 2 de mayo.', ok: false, options: ['…anunció que el cine había cerrado el 2 de mayo.', '…anunció que el cine cerraría el 2 de mayo.', '…anunció que el cine cerrara el 2 de mayo.'], answer: 1, why: 'El cierre ya es pasado: futuro visto desde 1987, condicional. «Había cerrado» lo haría anterior al anuncio.' },
            { sentence: 'Es la última noche. Amparo cuenta las entradas, cierra la caja y baja a la sala.', ok: true, why: 'Cambio de plano deliberado: empieza en una frontera clara y se mantiene en todo el pasaje.' },
            { sentence: 'Al día siguiente, cuando Amparo volvió, alguien ya descolgó el cartel de la fachada.', ok: false, options: ['…alguien ya descolgara el cartel de la fachada.', '…alguien ya había descolgado el cartel de la fachada.', '…alguien ya descolgaba el cartel de la fachada.'], answer: 1, why: '«Al día siguiente» marca bien la vuelta al pasado; la acción anterior a «volvió» va en pluscuamperfecto.' },
            { sentence: 'Don Ernesto le había pedido que guardara la llave hasta que alguien volviera a abrir el cine.', ok: true, why: 'Correlación con el pasado, siempre posible. «Que guarde… vuelva» también sería correcto, porque el encargo sigue vigente.' },
            { sentence: 'Le aseguró que, cuando lo reabrieran, él ya se habrá jubilado.', ok: false, options: ['…él ya se habría jubilado.', '…él ya se había jubilado.', '…él ya se jubila.'], answer: 0, why: 'La cadena está en pasado («aseguró», «reabrieran»): el futuro anterior pasa a condicional compuesto. «Se había jubilado» sería anterior a la promesa.' },
          ] },
        ] },
        { title: 'Lucía llama a Amparo · Lucía calls Amparo', mascot: '/autoestudio/mascot/noting.webp', blocks: [
          { kind: 'chat-fill', title: 'Una llamada antes del sábado · A call before Saturday', lines: [
            { who: 'Lucía', text: 'Amparo, la crónica ya está. Fernando me dijo ayer que se la ___ a usted antes del viernes.', options: ['llevara', 'lleve', 'llevará'], answer: 2, why: '«Dijo que» informa, no pide: indicativo. El viernes aún no ha llegado, así que el futuro es posible («llevaría» también lo sería).' },
            { who: 'Amparo', text: 'Qué bien. Mire, cuando don Ernesto me dio la llave, me pidió que no se la ___ a nadie que no fuera del barrio.', options: ['había dado', 'diera', 'daría'], answer: 1, why: 'Petición en pasado con «fuera» ya fijado: imperfecto de subjuntivo, coherente con la cadena.' },
            { who: 'Lucía', text: '¿Y qué encontró usted a la mañana siguiente?' },
            { who: 'Amparo', text: 'Cuando llegué, el camión ya se ___ el proyector. Ni siquiera pude despedirme de él.', options: ['había llevado', 'llevara', 'llevó'], answer: 0, why: 'Anterior a «llegué», con «ya»: pluscuamperfecto. «Se llevó» es oral y no estándar en este sentido.' },
            { who: 'Lucía', text: 'La alcaldesa me ha pedido que, cuando usted ___ al escenario, le entregue la llave delante de todos.', options: ['subirá', 'suba', 'subiera'], answer: 1, why: '«Ha pedido» y «entregue» anclan la cadena en el presente: temporal futura con presente de subjuntivo.' },
          ] },
        ] },
        { title: 'Construye · Build', mascot: '/brand/mascot/standing.webp', blocks: [
          { kind: 'build', title: 'Ordena · Put in order', items: [
            { tiles: ['Le', 'prometió', 'que,', 'cuando', 'volviera,', 'ya', 'habrían', 'reparado', 'el', 'tejado.'], accept: ['Le prometió que, cuando volviera, ya habrían reparado el tejado.'], en: 'He promised her that by the time she came back, the roof would have been repaired.' },
            { tiles: ['Cuando', 'llegamos', 'al', 'cine,', 'la', 'película', 'ya', 'había', 'empezado.'], accept: ['Cuando llegamos al cine, la película ya había empezado.'], en: 'When we got to the cinema, the film had already started.' },
            { tiles: ['Me', 'pidió', 'que', 'la', 'llamara', 'en', 'cuanto', 'hubiera', 'leído', 'la', 'crónica.'], accept: ['Me pidió que la llamara en cuanto hubiera leído la crónica.'], en: 'She asked me to call her as soon as I had read the chronicle.' },
          ] },
        ] },
        { title: 'La nota de prensa, una semana después · The press note, a week later', mascot: '/autoestudio/mascot/writing.webp', blocks: [
          { kind: 'guide', text: { teacher: 'Es la nota de prensa del lunes. Tu alumno la reescribe para la crónica publicada una semana después, cuando todo ya ha ocurrido, y lee en voz alta cada versión.', self: 'Es la nota de prensa del lunes. Reescríbela para la crónica de la semana siguiente, cuando todo ya ha pasado. (Rewrite it from a week later.)' } },
          { kind: 'rewrite', title: 'Cambia el ancla · Change the anchor', items: [
            { prompt: 'La biblioteca anuncia: «El centro cultural abrirá sus puertas este sábado».', instruction: 'Una semana después: empieza por «La biblioteca anunció que» y adapta también «este sábado».', accept: ['La biblioteca anunció que el centro cultural abriría sus puertas el sábado', 'La biblioteca anunció que el centro cultural abriría sus puertas aquel sábado', 'La biblioteca anunció que el centro cultural abriría sus puertas ese sábado', 'La biblioteca anunció que el centro cultural abriría sus puertas el sábado siguiente', 'La biblioteca anunció que el centro cultural abriría sus puertas el sábado 24 de octubre'] },
            { prompt: 'La alcaldesa: «Quiero que la sala lleve el nombre de Amparo».', instruction: 'Una semana después, en estilo indirecto: empieza por «La alcaldesa dijo que».', accept: ['La alcaldesa dijo que quería que la sala llevara el nombre de Amparo', 'La alcaldesa dijo que quería que la sala llevase el nombre de Amparo'] },
            { prompt: 'Amparo: «Cuando entregue la llave, habré cumplido mi promesa».', instruction: 'Una semana después: empieza por «Amparo dijo que, cuando».', accept: ['Amparo dijo que, cuando entregara la llave, habría cumplido su promesa', 'Amparo dijo que, cuando entregase la llave, habría cumplido su promesa'] },
            { prompt: 'Los organizadores: «Hemos pedido a los vecinos que traigan fotos antiguas».', instruction: 'Una semana después: empieza por «Los organizadores explicaron que».', accept: ['Los organizadores explicaron que habían pedido a los vecinos que trajeran fotos antiguas', 'Los organizadores explicaron que habían pedido a los vecinos que trajesen fotos antiguas'] },
            { prompt: 'El sábado, a las seis, Amparo sube al escenario y entrega la llave.', instruction: 'Vuelve del presente histórico al plano del pasado, con pretérito indefinido.', accept: ['El sábado, a las seis, Amparo subió al escenario y entregó la llave'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno elige una noticia de hoy y la cuenta oralmente como si fuera dentro de un mes: qué se anunció, qué se pidió y qué había pasado antes.' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'El pódcast del archivo', coach: 'Sigue el viaje en el tiempo. Follow the time travel.',
      steps: [
        { title: '«Voces de La Alameda» · The archive podcast', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general. Segunda escucha: tu alumno levanta la mano cada vez que Lucía cambia de plano y anota qué futuros mide desde hoy.', self: 'Escucha una vez para la idea general. En la segunda, anota dónde cambia Lucía de plano y qué futuros mide desde hoy. Vas a oír «taquilla» (ticket booth) y «cajón» (drawer).' } },
          { kind: 'listen', title: 'Voces de La Alameda', channel: 'PÓDCAST · VOCES DE LA ALAMEDA · EPISODIO 12', src: '/audio/grammar-live/509.mp3',
            before: 'Lucía presenta la historia de Amparo días antes de la reapertura. ¿Crees que contará la noche del cierre todo en pasado o acercará el momento clave? (All in the past, or will she bring the key moment closer?)',
            gist: { prompt: '¿Qué hace Lucía en el episodio? · What does Lucía do in the episode?', options: ['Cuenta la historia de la llave, revive la noche del cierre en presente y anuncia la reapertura.', 'Entrevista a don Ernesto sobre el cierre del cine.', 'Explica por qué el cine no volverá a abrir.'], answer: 0, why: 'Narra en pasado, salta al presente en «es el 2 de mayo de 1987» y termina con el anuncio del sábado.', en: 'She tells the story, relives the closing night in the present, and announces the reopening.' },
            details: [
              { prompt: '¿Qué había hecho ya Amparo cuando Lucía la conoció?', options: ['Había devuelto la llave.', 'Había escrito una crónica.', 'Había donado sus fotos al archivo.'], answer: 2, why: '«Cuando la conocí, en marzo, Amparo ya había donado sus fotos al archivo».', en: 'What had Amparo already done?' },
              { prompt: '¿Por qué pasa Lucía al presente en «es el 2 de mayo de 1987»?', options: ['Para que los oyentes vivan el momento clave como si estuvieran allí.', 'Porque cita las palabras exactas de Amparo.', 'Porque se equivoca de tiempo.'], answer: 0, why: 'Es un cambio de plano deliberado: lo anuncia con «Escuchen» y vuelve al pasado con «Aquella noche».', en: 'Why the switch to the present?' },
              { prompt: '¿Qué le pidió don Ernesto a Amparo?', options: ['Que se jubilara con él.', 'Que vendiera el cine.', 'Que guardara la llave hasta que alguien volviera a abrir el cine.'], answer: 2, why: '«Le pidió que la guardara hasta que alguien volviera a abrir el cine».', en: 'What was don Ernesto’s request?' },
              { prompt: '¿Por qué dice Lucía que el centro cultural «abrirá» y no «abriría»?', options: ['Porque el ayuntamiento lo dijo en presente.', 'Porque el sábado sigue siendo futuro cuando ella habla.', 'Porque «abriría» es incorrecto después de «ha anunciado».'], answer: 1, why: 'Ancla en el ahora: el sábado aún no ha llegado. Además, «ha anunciado» pertenece al ámbito del presente.', en: 'Why “abrirá”?' },
            ],
            transcript: 'Hola, les habla Lucía Arrieta y esto es «Voces de La Alameda», el pódcast del archivo de la biblioteca. Hoy les traigo la historia de Amparo Ledesma, que vendió entradas en el Cine Alameda durante veintiséis años. Cuando la conocí, en marzo, Amparo ya [[había donado|orange]] sus fotos al archivo, pero lo mejor lo guardaba para el final. Escuchen: es el 2 de mayo de 1987, termina la última película, [[se encienden las luces|violet]] y nadie se levanta. Don Ernesto, el dueño, [[cruza|violet]] la sala despacio y le pone una llave en la mano. Aquella noche le pidió que la [[guardara|blue]] hasta que alguien [[volviera|blue]] a abrir el cine, y le aseguró que, para entonces, él ya [[se habría jubilado|orange]]. Amparo cumplió. Durante treinta y nueve años tuvo la llave en un cajón de la cocina. ¿Y si nadie volvía nunca? A veces lo pensaba, me confesó, pero nunca se le ocurrió tirarla. Pues bien: el ayuntamiento ha anunciado que el centro cultural [[abrirá|teal]] sus puertas este sábado, y Amparo me dijo ayer que [[estará|teal]] allí, en primera fila, con la llave en el bolso. Ojalá nos veamos todos allí.',
            reply: { teacher: 'Tú eres Fernando y no has oído el pódcast. Tu alumno te lo cuenta: qué pasó la noche del cierre, qué le pidió don Ernesto a Amparo y qué hará ella el sábado, eligiendo en cada caso el ancla temporal.', self: 'Resume el episodio en voz alta en cuatro frases: una en pasado, una en presente histórico, una petición en estilo indirecto y una con ancla en el ahora. (Past, historical present, a reported request, a still-valid future.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Contar con dominio del tiempo', coach: 'Decide tú el plano. You choose the plane.',
      steps: [
        { title: 'Historias, promesas y noticias · Stories, promises and news', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas y tu alumno responde con un relato. Si se le escapa un salto de plano, tú dices «¿Dónde estamos?» y tu alumno lo corrige.', self: 'Lee cada pregunta y responde en voz alta durante uno o dos minutos. Antes de cambiar de plano, decide dónde empieza y dónde termina. (Decide where each shift begins and ends.)' } },
          { kind: 'talk', cards: [
            { q: 'Cuenta un lugar de tu vida que cerró o cambió: empieza en pasado, pasa al presente histórico en el momento clave y vuelve. · Tell the story of a place that closed or changed.', followUps: ['¿Dónde empieza exactamente el presente? ¿Por qué ahí?', '¿Cómo marcas la vuelta al pasado?', '¿Qué había pasado antes de ese momento?'], phrases: ['Aquel día…', '[[Es la última…|violet]] / [[De pronto, entra…|violet]]', '[[Al día siguiente|violet]]…', 'ya [[había|orange]] + participio'], hint: 'Una frontera clara para entrar en el presente y otra para salir.', example: 'La librería de mi barrio cerró en 2015. Yo había comprado allí casi todos mis libros del colegio. El último día fui a despedirme. Es sábado, la tienda está medio vacía y el dueño me regala un libro sin decir nada. Salgo con un nudo en la garganta. Al día siguiente ya habían quitado el letrero, y unos meses después abrieron una tienda de teléfonos.' },
            { q: 'Cuenta una promesa o un encargo que te hicieron hace tiempo. ¿Sigue vigente? Elige el ancla y justifícala. · Report an old promise or request: is it still valid?', followUps: ['¿Podrías decirlo también con la otra correlación?', '¿Qué matiz añade el presente de subjuntivo?'], phrases: ['Me pidió que [[guardara|blue]] / [[guarde|teal]]…', 'Me prometió que [[volvería|blue]] / [[volverá|teal]]…', 'El encargo sigue en pie…', 'Eso ya no tiene sentido porque…'], hint: 'Si sigue pendiente, puedes anclarlo en el ahora; si no, solo en el pasado.', example: 'Hace años, mi abuela me pidió que cuide su huerto cuando ella ya no pueda, y ese encargo sigue en pie: por eso lo digo así. En cambio, un amigo me prometió que vendría a mi boda, y no vino: ahí solo puedo decir «vendría».' },
            { q: 'Eres Lucía: explícale a una voluntaria nueva por qué «le pidió que guarde la llave» no es un error. · Explain the double-access present to a new volunteer.', followUps: ['¿Cuándo sí sería un error?', '¿Qué forma es siempre segura?'], phrases: ['[[Doble acceso|teal]]…', 'siempre es posible…', 'solo si sigue vigente…', 'en cambio, si ya pasó…'], hint: 'Da la regla, un ejemplo correcto y un contraejemplo.', example: 'Mira, tras un verbo en pasado lo normal es el imperfecto de subjuntivo, y eso nunca falla. Pero si el encargo sigue pendiente cuando hablas, puedes usar el presente: «le pidió que guarde la llave hasta que vuelvan a abrir». El cine abre el sábado, así que es correcto. Lo que no podrías decir es «en 1987 le pidió que venda las entradas aquella noche»: eso ya pasó.' },
            { q: '¿El presente histórico es un recurso legítimo o un truco para dar emoción? Piensa en crónicas, libros de historia y titulares. · Is the historical present a legitimate device or a trick?', followUps: ['¿Dónde te parece más útil y dónde molesta?', '¿Qué pasa si un texto entero salta sin parar de un plano a otro?'], phrases: ['Yo diría que…', 'Es cierto que…, pero…', 'Cuando está bien marcado…', 'Lo que molesta es…'], hint: 'Distingue el cambio deliberado del despiste, con ejemplos.', example: 'Yo diría que es un recurso legítimo cuando está bien marcado: en una crónica, acercar un momento clave funciona muy bien. Es cierto que en los libros de historia es muy frecuente: «La ciudad se funda en 1542 y crece muy deprisa». Lo que molesta es el salto sin motivo, cuando el autor ya no sabe en qué plano está y el lector tampoco.' },
            { q: 'Cuenta una noticia de esta semana como si la contaras dentro de un año: qué se anunció, qué se pidió y qué había pasado antes. · Retell this week’s news from a year later.', followUps: ['¿Qué deícticos has tenido que cambiar?', '¿Qué parte podrías anclar todavía en el ahora?'], phrases: ['Aquella semana…', 'anunció que [[abriría|blue]]…', 'pidió que [[se tomaran|blue]]…', '[[había|orange]] + participio…', 'al día siguiente / la semana anterior'], hint: 'Cambia «hoy», «mañana» y «este» por «aquel día», «al día siguiente» y «aquel».', example: 'Aquella semana, el ayuntamiento anunció que el centro cultural abriría el sábado siguiente. Los organizadores explicaron que habían pedido a los vecinos que trajeran fotos antiguas, y la alcaldesa dijo que quería que la sala llevara el nombre de Amparo, que había guardado la llave durante treinta y nueve años.', teacher: 'Tú vas diciendo «hoy», «mañana», «esta semana» y tu alumno los transforma sin pararse.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tú cuentas una anécdota con dos saltos de plano involuntarios y uno deliberado, y tu alumno los detecta y los explica.', self: 'Graba tu respuesta a dos tarjetas y escúchala: ¿cada cambio de plano tiene principio y final claros? (Does every shift have a clear start and end?)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'La crónica de la reapertura', coach: 'Una semana después, todo es pasado. A week later, it is all past.',
      steps: [
        { title: 'Crónica para el folleto del archivo · Chronicle for the archive booklet', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Después revisan juntos el texto: ¿cada verbo subordinado tiene su ancla? ¿El cambio de plano entra y sale con claridad?', self: 'Escribe la crónica y toca «Revisar mi texto». Después comprueba tú cada cadena de verbos y cada cambio de plano. (Check every chain and every shift yourself.)' } },
          { kind: 'write', title: 'La reapertura del Cine Alameda · The reopening', situation: 'Ha pasado una semana desde la reapertura. Escribes la crónica para el folleto de «Voces de La Alameda» a partir de la nota de prensa del lunes anterior: «El centro cultural Cine Alameda abrirá sus puertas este sábado a las seis. La alcaldesa ha anunciado que la sala principal llevará el nombre de Amparo Ledesma, que entregará en el escenario la llave que guarda desde 1987. Pedimos a los vecinos que traigan fotos antiguas del cine». (Write the chronicle a week later, using Monday’s press note.)', task: [
            'Pasa la información de la nota al pasado, con estilo indirecto y deícticos adaptados («aquel sábado», «al día siguiente»).',
            'Incluye al menos una cadena de dos subordinadas (por ejemplo, «dijo que, cuando…, ya habría…»).',
            'Usa el pluscuamperfecto para algo anterior a otro hecho pasado.',
            'Cuenta el momento de la llave en presente histórico y vuelve al pasado con una frontera clara.',
            'Si quieres, añade una línea en estilo indirecto libre.',
          ], starters: ['El sábado 24 de octubre, a las seis de la tarde…', 'Unos días antes, la biblioteca había pedido…', 'La alcaldesa explicó que…', 'Entonces llega el momento…', 'Después contó que don Ernesto le había pedido…'],
            words: ['aquel sábado', 'al día siguiente', 'unos días antes', 'había pedido', 'explicó que', 'aseguró que', 'cuando volvieran', 'ya habría', 'entonces', 'treinta y nueve años después'],
            model: 'El sábado 24 de octubre, a las seis de la tarde, el Cine Alameda volvió a abrir sus puertas, treinta y nueve años después de su cierre. Unos días antes, la biblioteca había pedido a los vecinos que trajeran fotos antiguas, y el vestíbulo estaba lleno de ellas. La alcaldesa explicó que la sala principal llevaría el nombre de Amparo Ledesma, que había vendido entradas allí desde 1961 hasta la última noche. Entonces llega el momento que todos esperaban. Amparo sube al escenario despacio, saca la llave del bolso y la levanta para que todos la vean. Nadie habla. Cuando volvió el murmullo, contó que don Ernesto le había pedido que la guardara hasta que alguien volviera a abrir el cine, y que le había asegurado que, cuando eso ocurriera, él ya se habría jubilado. «No se equivocó», dijo entre risas. ¿Cuántas veces había pensado en tirar aquella llave? Ninguna, confesó. Al terminar el acto, varios vecinos se acercaron a contarle que habían visto allí su primera película. Amparo prometió que volvería el sábado siguiente, esta vez con entrada.',
            minWords: 150,
            checks: [
              { label: 'Estilo indirecto con un verbo de lengua en pasado (explicó que, dijo que…)', pattern: '(?<!\\p{L})(?:dijo|explicó|anunció|aseguró|contó|prometió|confesó|pidió)\\s+que(?!\\p{L})', tip: 'Transmite lo que se dijo: «La alcaldesa explicó que la sala llevaría…».' },
              { label: 'Pluscuamperfecto para la anterioridad (había + participio)', pattern: '(?<!\\p{L})(?:había|habían|hubiera|hubieran)\\s+\\p{L}+(?:ado|ido|to|cho|so)(?!\\p{L})', tip: 'Marca lo anterior: «Unos días antes, la biblioteca había pedido…».' },
              { label: 'Un futuro visto desde el pasado (condicional)', pattern: '(?<!\\p{L})(?:habría|habrían|sería|serían|llevaría|volvería|abriría|entregaría|estaría)(?!\\p{L})', tip: 'Usa el condicional para lo que entonces era futuro: «llevaría», «volvería», «ya habría…».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})(?:abrirá|llevará|entregará)(?!\\p{L})', why: 'Una semana después, la apertura y la entrega ya han ocurrido: el futuro se mide desde el pasado («abriría», «llevaría», «entregaría»), o cuéntalo directamente en indefinido.' },
              { pattern: '(?<!\\p{L})este\\s+sábado(?!\\p{L})', why: 'Desde una semana después, «este sábado» ya no sirve: «aquel sábado», «el sábado» o la fecha.' },
            ] },
        ] },
      ],
    },
    {
      id: 'cerrar', label: 'Cerrar', icon: '✓', mascot: '/brand/mascot/standing.webp',
      title: 'Lo esencial', coach: '¿Qué te llevas hoy? What do you take away?',
      steps: [
        { title: 'Lo esencial · The essentials', blocks: [
          { kind: 'recap', items: [
            { tone: 'blue', label: 'ANCLA EN EL HECHO', formula: 'pasado → estaba · vendría · había venido · que viniera', example: 'En 1987 anunció que el cine cerraría y le pidió que guardara la llave.', caption: 'Siempre posible tras un verbo en pasado.', en: 'Measuring from the past event is always available after a past main verb.' },
            { tone: 'teal', label: 'ANCLA EN EL AHORA', formula: 'contenido aún vigente → está · vendrá · que venga', example: 'Ayer me dijo que vendrá el sábado y me pidió que la llame.', caption: 'Doble acceso: solo si sigue vigente al hablar.', en: 'Double access: only when the content still holds as you speak; it presents it as still on.' },
            { tone: 'orange', label: 'CADENAS Y ANTERIORIDAD', formula: 'cada verbo mira al que lo rige · ya + había + participio', example: 'Me aseguró que, cuando llegara, ya habría terminado. Cuando llegué, ya se había ido.', caption: 'No cambies de ancla a mitad de la cadena.', en: 'Each verb takes its time from its governing verb; for prior completion, the pluperfect is the norm.' },
            { tone: 'violet', label: 'CAMBIOS DE PLANO', formula: 'presente histórico con entrada y salida claras · estilo indirecto libre', example: 'Es la última noche. Amparo cuenta las entradas… Al día siguiente, el cartel ya no estaba.', caption: 'Un recurso cuando lo decides; un despiste cuando se escapa.', en: 'A device when you choose it and mark it; a slip when it happens inside a sentence for no reason.' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'Las dos preguntas · The two questions', text: 'Ante cada subordinada: **¿qué verbo la rige?** y **¿sigue vigente al hablar?** Si sigue vigente, puedes elegir el ahora; si no, solo el pasado. Ante cada cambio de plano: **¿dónde empieza y dónde termina?**', en: 'For every subordinate clause, ask which verb governs it and whether the content is still valid now. For every shift of plane, ask where it starts and where it ends.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/portrait.webp', coach: 'Sin ayuda. No help.', blocks: [
          { kind: 'choice', title: 'Cinco decisiones · Five decisions', items: [
            { prompt: 'En 2015, el ayuntamiento prometió que el cine ___ en dos años.', options: ['reabrirá', 'reabriera', 'reabriría'], answer: 2, why: 'El plazo venció en 2017: solo el futuro visto desde el pasado.', en: 'A deadline that has already passed.' },
            { prompt: 'Ayer la alcaldesa me pidió que ___ la crónica en el folleto del sábado. (El folleto aún no se ha impreso.)', options: ['Solo «incluya».', '«Incluyera» o «incluya»: las dos son posibles.', 'Solo «incluyera».'], answer: 1, why: 'El encargo sigue pendiente: doble acceso. El imperfecto de subjuntivo es siempre posible.', en: 'The request is still pending.' },
            { prompt: 'Le aseguró que, cuando ___ de viaje, ya habría firmado el contrato.', options: ['volviera', 'vuelve', 'volvería'], answer: 0, why: 'Temporal con valor futuro desde un pasado: imperfecto de subjuntivo.', en: 'A time clause inside a past-anchored chain.' },
            { prompt: 'Cuando llegamos al cine, la sesión ya ___.', options: ['empezara', 'había empezado', 'empezó'], answer: 1, why: 'Anterioridad con «ya»: pluscuamperfecto, la forma estándar.', en: 'It started before we arrived.' },
            { prompt: 'Entra en la sala, se sienta en la fila siete y ___ que alguien la llama.', options: ['oye', 'oyera', 'oyó'], answer: 0, why: 'Pasaje en presente histórico: mantener el plano evita el salto.', en: 'Stay in the plane you chose.' },
          ] },
        ] },
        { title: 'Transferencia · Transfer', mascot: '/brand/mascot/walking.webp', coach: 'Otro terreno, la misma lógica. New setting, same logic.', blocks: [
          { kind: 'guide', text: { teacher: 'Una situación nueva: mensajes de trabajo. Tu alumno reescribe cada frase y explica qué ancla ha elegido.', self: 'Ahora, en el trabajo: reescribe cada frase según la instrucción. (Work messages: rewrite each one.)' } },
          { kind: 'rewrite', title: 'En la oficina · At the office', items: [
            { prompt: 'La directora me dijo el lunes: «Mándame el informe cuando lo termines».', instruction: 'Es viernes y aún no lo has terminado. Empieza por «La directora me pidió que».', accept: ['La directora me pidió que le mandara el informe cuando lo terminara', 'La directora me pidió que le mandase el informe cuando lo terminase', 'La directora me pidió que le mande el informe cuando lo termine'] },
            { prompt: 'En 2019 el equipo anunció: «Lanzaremos la aplicación el año que viene».', instruction: 'Cuéntalo hoy: empieza por «En 2019 el equipo anunció que».', accept: ['En 2019 el equipo anunció que lanzaría la aplicación al año siguiente', 'En 2019 el equipo anunció que lanzaría la aplicación el año siguiente'] },
            { prompt: 'Cuando llegué a la reunión, ya se fueron todos.', instruction: 'Corrígelo según la norma.', accept: ['Cuando llegué a la reunión, ya se habían ido todos', 'Cuando llegué a la reunión, ya se habían marchado todos', 'Cuando llegué a la reunión, todos se habían ido ya'] },
          ] },
        ] },
        { title: 'Ampliación · Imperfecto narrativo y futuro histórico', mascot: '/brand/mascot/kneeling.webp', coach: 'Opcional. Optional.', blocks: [
          { kind: 'lead', text: 'Para estudiantes fuertes o si queda tiempo. Dos cambios de plano propios de la prensa y de las biografías. **1. Imperfecto narrativo** (o de ruptura): un hecho puntual contado en imperfecto para darle relieve: «Dos días después del cierre, don Ernesto **vendía** el proyector a un coleccionista» (= lo vendió). **2. Futuro histórico**: dentro de un relato en presente histórico, el futuro anticipa lo que vendrá después: «Amparo nace en 1944; diecisiete años más tarde, **empezará** a vender entradas en el Alameda». Los dos son deliberados y propios de la escritura cuidada; en la conversación, lo normal es el indefinido.', en: 'For strong students or spare time. Two plane shifts typical of journalism and biography. The narrative imperfect presents a one-off event in the imperfect for emphasis. The historical future, inside a historical-present narrative, looks ahead to later events. Both are deliberate written devices; in conversation, the preterite is the normal choice.' },
          { kind: 'choice', title: 'Matices · Nuances', items: [
            { prompt: '«Dos días después del cierre, don Ernesto vendía el proyector a un coleccionista». ¿Qué expresa «vendía»?', options: ['Un hecho puntual, contado en imperfecto para darle relieve.', 'Una acción que no llegó a ocurrir.', 'Una costumbre: lo vendía a menudo.'], answer: 0, why: 'Imperfecto narrativo: equivale a «vendió», con un efecto de escena.', en: 'A narrative imperfect: a single event, highlighted.' },
            { prompt: '«Amparo nace en 1944; diecisiete años más tarde, empezará a vender entradas». ¿Por qué «empezará»?', options: ['Es futuro histórico: anticipa un hecho posterior dentro del presente histórico.', 'Es un error: debería ser «empezó».', 'Porque todavía no ha empezado.'], answer: 0, why: 'El futuro se mide desde el presente histórico («nace»), no desde hoy.', en: 'A historical future, measured from the historical present.' },
            { prompt: 'Quieres contar lo mismo en una conversación informal. ¿Qué versión es la más natural?', options: ['Dos días después del cierre, don Ernesto vendió el proyector.', 'Dos días después del cierre, don Ernesto vendía el proyector.', 'Dos días después del cierre, don Ernesto venderá el proyector.'], answer: 0, why: 'En la lengua oral corriente, el indefinido; los otros dos son recursos de escritura.', en: 'In everyday speech, the preterite.' },
          ] },
          { kind: 'teacher', text: 'Paso opcional: solo si queda tiempo o para estudiantes fuertes. Tu alumno escribe una minibiografía de cuatro frases en presente histórico con un futuro histórico, y la reescribe después en pasado.' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 210 · Subordinación múltiple sin pérdida de referentes', text: 'Hoy has encadenado subordinadas sin perder el hilo del tiempo. En la clase 210 das el paso complementario: encadenar varias subordinadas sin perder de vista **a quién o a qué** se refiere cada pronombre, cada relativo y cada sujeto implícito.', en: 'Today you chained clauses without losing track of time. Class 210 takes the complementary step: chaining several clauses without losing track of who or what each pronoun, relative and implicit subject refers to.', href: '/gramatica/subordinacion-multiple-sin-perdida-de-referentes', label: 'Ir a la clase 210' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Qué diferencia hay entre “Me dijo que vendría el sábado” y “Me dijo que vendrá el sábado”, y cuándo solo vale la primera?». Respuesta esperada: la primera mide el futuro desde que se dijo; la segunda, desde ahora, y solo vale si el sábado sigue por delante. Tarea: la crónica de Escribir sobre un acto real.' },
        ] },
      ],
    },
  ],
};
