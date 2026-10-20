import type { LiveLesson } from '../types';

/**
 * Lesson 441 · B2 · Subordinadas modales y comparativas irreales (course unit G141).
 * Builds on G100 (relatives: known vs sought antecedent), G130 (tense correlation),
 * G133 (pluscuamperfecto de subjuntivo), G136 (como si: referenced, not re-taught)
 * and G140 (sin que). G037/G068 gave más… que, mejor, peor.
 * Scene: Querétaro (Mexico). Marina Robles is restoring her late grandmother's old
 * house in the historic centre; Rodrigo Paz runs the building work and Julia Ferrer,
 * the interior designer, chooses materials. Explorar: Saturday visit Marina–Rodrigo.
 * Escuchar: Rodrigo's voicemail to Marina (es-MX-JorgeNeural). Escribir: Marina's
 * email to her sister Clara, who co-owns the house and lives abroad.
 * Content: manner clauses with como / según / tal (y) como / de la manera que:
 * indicative for a known, real or habitual manner (lo hice como me dijiste, según me
 * contó), subjunctive for an open, future or any manner (hazlo como quieras, según te
 * parezca), imperfect subjunctive in a past frame (me dijo que lo hiciera como
 * quisiera); sin que (manner) + subjunctive. Comparatives whose second term is a
 * clause: más / menos / mejor / peor + de lo que + indicative (real expectation:
 * más caro de lo que pensaba) or subjunctive (open or imagined amount: de lo que
 * necesites, de lo que te puedas imaginar); del que / de la que / de los que / de las
 * que with nouns; de lo previsto; que (two terms) vs de lo que (a clause). Unreal
 * comparison: igual que si, lo mismo que si, tanto como si, más que si + imperfect or
 * pluperfect subjunctive. Ampliación: ni que fuera, cual si (literary), no más que vs
 * no más de, de lo que cabría esperar. Instructions use tú.
 */
export const lesson: LiveLesson = {
  id: 441,
  level: 'B2',
  title: 'Subordinadas modales y comparativas irreales',
  subtitle: 'Decir cómo se hace algo (como me dijiste / como quieras) y comparar con lo esperado o lo imaginado: más de lo que pensaba, igual que si fuera.',
  legend: [
    { tone: 'blue', label: 'MANERA CONOCIDA · como, según, tal como + indicativo (como me dijiste)' },
    { tone: 'orange', label: 'MANERA ABIERTA · como, según, de la manera que + subjuntivo (como quieras), sin que' },
    { tone: 'teal', label: 'COMPARATIVA CON ORACIÓN · más / menos / mejor + de lo que, del que' },
    { tone: 'violet', label: 'COMPARACIÓN IRREAL · como si, igual que si, tanto como si + imperfecto o pluscuamperfecto de subjuntivo' },
  ],
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Cómo se hace y cuánto se esperaba', coach: '¿La manera ya existe o está abierta? Does the manner already exist, or is it open?',
      steps: [
        { title: 'La casa de la abuela · Grandma’s house', blocks: [
          { kind: 'lead', text: 'Marina Robles está restaurando la casa antigua de su abuela, en el centro de Querétaro. Rodrigo Paz dirige la obra y Julia Ferrer, la diseñadora, elige colores y materiales. Algunas cosas se hacen **como Marina dijo**, otras se harán **como ella quiera**, y casi todo cuesta **más de lo que pensaba**. Hoy aprendes a decir de qué manera se hace algo y a comparar la realidad con lo que esperabas, lo que imaginas o lo que no es real.', en: 'Marina Robles is restoring her grandmother’s old house in the centre of Querétaro. Rodrigo Paz runs the building work and Julia Ferrer, the designer, chooses colours and materials. Some things are done the way Marina said, others will be done however she likes, and almost everything costs more than she thought. Today you learn to say how something is done and to compare reality with what you expected, what you imagine or what is not real.' },
          { kind: 'guide', text: { teacher: 'Tú lees las dos frases y tu alumno explica la diferencia: ¿Marina ya dio la instrucción o todavía no ha decidido?', self: 'Lee las dos frases en voz alta. ¿Marina ya dio la instrucción o todavía no ha decidido? (Has Marina already given the instruction, or is it still undecided?)' } },
          { kind: 'compare', title: 'Misma palabra, dos modos · Same word, two moods', columns: [
            { tone: 'blue', label: 'MANERA CONOCIDA · indicativo', sentence: 'Rodrigo pintó la fachada [[como le dijo|blue]] Marina.', idea: 'La instrucción ya existe y se conoce: indicativo.', en: 'Rodrigo painted the front the way Marina told him: the manner is a real, known instruction, so the indicative.' },
            { tone: 'orange', label: 'MANERA ABIERTA · subjuntivo', sentence: 'Marina, los azulejos los ponemos [[como tú quieras|orange]].', idea: 'La manera todavía no está decidida: cualquier manera que Marina elija. Subjuntivo.', en: 'We’ll lay the tiles however you like: the manner is still open, any way Marina chooses, so the subjunctive.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'La semana pasada, los albañiles colocaron el piso tal como ___ el plano.', options: ['indicara', 'indique', 'indicaba'], answer: 2, why: 'El plano existía y decía algo concreto: manera conocida, en pasado → indicativo, indicaba.', en: 'Last week the builders laid the floor exactly as the plan showed.' },
            { prompt: 'Rodrigo: «Marina, los muebles de la sala colócalos como te ___ más cómodo».', options: ['resulte', 'resultara', 'resulta'], answer: 0, why: 'Instrucción abierta hacia el futuro: cualquier manera cómoda → presente de subjuntivo, resulte.', en: 'Arrange the living-room furniture whatever way suits you best.' },
          ] },
        ] },
        { title: 'Las oraciones de modo · Manner clauses', mascot: '/brand/mascot/studying.webp', coach: 'Como, según, tal como. How, according to, exactly as.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'MANERA CONOCIDA · INDICATIVO', question: '¿La manera ya existe, se conoce o es habitual?', en: 'Use the indicative when the manner is real and identifiable: an instruction already given, a method you know, the way something usually happens.', formula: ['como · según · tal como · tal y como · de la manera que', '+ INDICATIVO'],
            meaning: 'Si hablas de una manera **concreta y conocida** (una instrucción que ya se dio, un método que existe, una costumbre), el verbo va en **indicativo**.',
            examples: [
              { es: 'Restauramos las vigas [[como nos explicó|blue]] el carpintero.', en: 'We restored the beams the way the carpenter explained to us.' },
              { es: '[[Según me dijo|blue]] Rodrigo, la cocina estará lista en mayo.', en: 'According to what Rodrigo told me, the kitchen will be ready in May.' },
              { es: 'Dejaron el patio [[tal y como estaba|blue]] en tiempos de la abuela.', en: 'They left the courtyard exactly as it was in Grandma’s day.' },
              { es: 'Siempre preparo el café [[como lo hacía|blue]] mi abuela.', en: 'I always make coffee the way my grandmother did.' },
            ] },
          { kind: 'concept', tone: 'orange', label: 'MANERA ABIERTA · SUBJUNTIVO', question: '¿La manera todavía no se conoce, es futura o vale cualquiera?', en: 'Use the subjunctive when the manner is not yet known or is left open: “whatever way…”, “depending on what…”. It is the same logic as relative clauses with an unknown antecedent.', formula: ['como · según · tal como · de la manera que', '+ SUBJUNTIVO'],
            meaning: 'Si la manera es **futura, no decidida o cualquiera**, el verbo va en **subjuntivo**. Es la misma lógica que en las relativas: «la casa que tengo» / «una casa que tenga» (clase 100).',
            examples: [
              { es: 'Organiza la cocina [[como quieras|orange]].', en: 'Arrange the kitchen however you like.' },
              { es: 'Cambiaremos el diseño [[según nos diga|orange]] la arquitecta.', en: 'We’ll change the design depending on what the architect tells us.' },
              { es: 'Haremos el baño [[tal como lo dibuje|orange]] Julia.', en: 'We’ll do the bathroom exactly as Julia draws it (she hasn’t drawn it yet).' },
              { es: 'Coloquen los cuadros [[de la manera que les parezca|orange]] más bonita.', en: 'Hang the pictures whichever way you think looks best.' },
            ],
            note: 'En un marco pasado, el subjuntivo pasa al imperfecto (clase 130): «Rodrigo le dijo que pintara la puerta **como quisiera**».' },
          { kind: 'table', title: 'Conectores de modo · Manner connectors', head: ['Conector', 'Indicativo · manera conocida', 'Subjuntivo · manera abierta'], rows: [
            ['como', 'Lo hice **como me dijiste**.', 'Hazlo **como quieras**.'],
            ['según', '**Según me contó** Julia, el azulejo viene de Puebla.', 'Pinta el patio **según te parezca** mejor.'],
            ['tal como · tal y como', 'Lo dejaron **tal y como estaba**.', 'Lo haremos **tal como tú digas**.'],
            ['de la manera que · del modo que · de la forma que', 'Lo resolvió **de la manera que pudo**.', 'Resuélvelo **de la manera que puedas**.'],
            ['sin que (solo subjuntivo)', '—', 'Cambiaron la tubería **sin que** los vecinos **se enteraran**.'],
          ], note: '«Según» + indicativo suele presentar la fuente de una información (according to); «según» + subjuntivo significa «dependiendo de lo que…». «Sin que» ya lo viste en la clase 140: aquí dice cómo ocurre algo, siempre lleva subjuntivo y tiene otro sujeto; con el mismo sujeto, «sin» + infinitivo («la cambiaron sin cortar el agua»).' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Rodrigo: «El color de las ventanas lo eliges tú. Las pintamos como ___».', options: ['dices', 'digas', 'dirías'], answer: 1, why: 'Marina todavía no ha decidido: manera abierta y futura → presente de subjuntivo, digas.', en: 'You choose the window colour. We’ll paint them however you say.' },
            { prompt: 'Ayer Julia montó la lámpara tal y como ___ las instrucciones.', options: ['dijeran', 'decían', 'digan'], answer: 1, why: 'Las instrucciones existían y Julia las siguió: manera conocida → indicativo, decían.', en: 'Yesterday Julia put the lamp together exactly as the instructions said.' },
            { prompt: 'Rodrigo le pidió a Marina que distribuyera los muebles como ___.', options: ['prefiere', 'prefiriera', 'prefiera'], answer: 1, why: 'Manera abierta dentro de un marco pasado («le pidió»): imperfecto de subjuntivo, prefiriera.', en: 'Rodrigo asked Marina to arrange the furniture however she preferred.' },
          ] },
        ] },
        { title: 'Comparar con una idea · Comparing with an idea', mascot: '/brand/mascot/standing.webp', coach: 'Que o de lo que. Que or de lo que.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'COMPARATIVA CON ORACIÓN', question: '¿Comparas con lo que alguien pensaba, esperaba o dijo?', en: 'When the second part of a comparison is a clause with a verb (what you thought, expected, were told), Spanish uses de lo que, not que. Indicative for a real expectation or amount; subjunctive for an open or imagined one.', formula: ['más / menos + adjetivo, adverbio o nombre', 'mejor · peor · mayor · menor', '+ DE LO QUE + verbo'],
            meaning: 'Cuando el segundo término es una **oración** (lo que pensabas, lo que te dijeron), no usas «que» sino **de lo que**. **Indicativo** si hablas de una expectativa o una cantidad real; **subjuntivo** si la cantidad es abierta, futura o imaginada.',
            examples: [
              { es: 'La cocina es [[más cara de lo que pensaba|teal]].', en: 'The kitchen is more expensive than I thought.' },
              { es: 'Los albañiles trabajan [[mejor de lo que esperaba|teal]].', en: 'The builders work better than I expected.' },
              { es: 'No compres [[más pintura de la que necesites|teal]].', en: 'Don’t buy more paint than you need (the amount isn’t known yet).' },
              { es: 'Va a quedar [[más bonita de lo que te puedas imaginar|teal]].', en: 'It’s going to look lovelier than you could ever imagine.' },
            ],
            note: 'Con un **nombre**, el artículo concuerda con él: «más dinero **del que** pensaba», «más horas **de las que** calculamos», «menos gente **de la que** esperábamos». También se oye «más problemas de lo que creía» (se compara la cantidad en general), pero la concordancia es la opción más clara.' },
          { kind: 'compare', title: '¿Que o de lo que? · Que or de lo que?', columns: [
            { tone: 'blue', label: 'DOS ELEMENTOS · que', sentence: 'Esta casa es más grande **que** la mía.', idea: 'Comparas dos cosas, dos personas o dos datos: más… que.', en: 'Two things are compared directly (this house, mine): más… que.' },
            { tone: 'teal', label: 'UNA IDEA CON VERBO · de lo que', sentence: 'Esta casa es más grande [[de lo que parecía|teal]].', idea: 'Comparas con lo que alguien pensaba, decía o veía: más… de lo que + verbo.', en: 'The comparison is with an idea expressed by a verb (how it looked): más… de lo que.' },
            { tone: 'teal', label: 'FORMA REDUCIDA · de lo + participio', sentence: 'La obra se alargó [[más de lo previsto|teal]].', idea: 'Muy frecuente en registro formal: de lo previsto, de lo esperado, de lo necesario.', en: 'A compact, slightly formal option: more than planned, than expected, than necessary.' },
          ] },
          { kind: 'table', title: 'Indicativo o subjuntivo tras de lo que · Mood after de lo que', head: ['Expectativa o cantidad real · indicativo', 'Cantidad abierta o imaginada · subjuntivo'], rows: [
            ['Pagamos menos **de lo que nos pidieron**.', 'No pagues más **de lo que te pidan**.'],
            ['Compró más madera **de la que necesitaba**.', 'Te daré más tiempo **del que necesites**.'],
            ['Es más difícil **de lo que parece**.', 'Es más difícil **de lo que pueda parecer**.'],
          ], note: 'En la última fila las dos son correctas: el subjuntivo generaliza («de lo que a cualquiera le pueda parecer») y es típico del registro cuidado.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'El presupuesto final fue mucho más alto ___ calculamos en enero.', options: ['de lo que', 'del que', 'que'], answer: 0, why: 'El segundo término es una oración («calculamos») y comparas un adjetivo (alto): de lo que. «Del que» solo concuerda con un nombre.', en: 'The final budget was much higher than we calculated in January.' },
            { prompt: 'Rodrigo tiene más paciencia ___ su socio.', options: ['que', 'del que', 'de lo que'], answer: 0, why: 'Comparas dos personas (Rodrigo y su socio), sin verbo: más… que.', en: 'Rodrigo is more patient than his business partner.' },
            { prompt: 'Todavía no han medido el baño. Julia: «No pidas más azulejos de los que ___».', options: ['necesites', 'necesitas', 'necesitaste'], answer: 0, why: 'La cantidad todavía no se conoce: cantidad abierta → subjuntivo, necesites.', en: 'They haven’t measured the bathroom yet: don’t order more tiles than you’ll need.' },
          ] },
        ] },
        { title: 'Comparar con lo irreal · Comparing with the unreal', mascot: '/brand/mascot/speaking.webp', coach: 'Igual que si, tanto como si. Just as if, as much as if.', blocks: [
          { kind: 'lead', text: 'En la clase 136 viste «como si» + imperfecto o pluscuamperfecto de subjuntivo: «Lo hizo como si no hubiera pasado nada». Hoy amplías esa idea: la comparación con algo que no es real también se hace con **igual que si**, **lo mismo que si**, **tanto como si** o **más que si**, y siempre con el mismo subjuntivo.', en: 'In class 136 you saw como si with the imperfect or pluperfect subjunctive. Today you extend the idea: a comparison with something unreal can also use igual que si, lo mismo que si, tanto como si or más que si, always with the same subjunctive tenses.' },
          { kind: 'concept', tone: 'violet', label: 'COMPARACIÓN IRREAL', question: '¿Comparas con una situación imaginaria, contraria a la realidad?', en: 'The second term is a supposition that is not true. Imperfect subjunctive for a situation imagined at the same time; pluperfect subjunctive for one imagined before.', formula: ['como si · igual que si · lo mismo que si', 'tanto como si · tan… como si · más que si', '+ IMPERFECTO o PLUSCUAMPERFECTO DE SUBJUNTIVO'],
            meaning: 'El segundo término es **irreal**: algo que no pasa o no pasó. **Imperfecto** si lo imaginado es simultáneo; **pluscuamperfecto** si es anterior. Nunca indicativo ni condicional.',
            examples: [
              { es: 'Rodrigo cuida la casa [[igual que si fuera|violet]] suya.', en: 'Rodrigo looks after the house just as if it were his own.' },
              { es: 'Después de sacar todos los muebles viejos, Marina estaba [[tan cansada como si hubiera corrido|violet]] una maratón.', en: 'After carrying out all the old furniture, Marina was as tired as if she had run a marathon.' },
              { es: 'Al ver la cocina terminada, se emocionó [[más que si le hubieran regalado|violet]] un coche.', en: 'When she saw the finished kitchen, she was more moved than if someone had given her a car.' },
              { es: 'Rodrigo le contó lo de la tubería rota [[como si no hubiera pasado|violet]] nada.', en: 'Rodrigo told her about the burst pipe as if nothing had happened.' },
            ] },
          { kind: 'decide', title: 'Manera, cantidad o irrealidad: ¿qué modo?', steps: [
            { q: '¿Comparas con una situación imaginaria (como si, igual que si, tanto como si)?', yes: 'Imperfecto o pluscuamperfecto de subjuntivo: «igual que si **fuera** suya», «como si no **hubiera pasado** nada».', no: 'next' },
            { q: '¿La manera o la cantidad ya existe, se conoce o se pensó (como me dijiste, de lo que pensaba)?', yes: '**Indicativo**: «tal como **estaba**», «más caro **de lo que pensaba**».', no: '**Subjuntivo**: manera o cantidad abierta, futura o cualquiera: «como **quieras**», «más **de lo que necesites**».' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'La vecina da órdenes a los albañiles igual que si ___ la dueña.', options: ['fuera', 'sería', 'es'], answer: 0, why: 'Comparación irreal (no es la dueña), simultánea: imperfecto de subjuntivo, fuera.', en: 'The neighbour gives the builders orders just as if she were the owner.' },
            { prompt: 'Marina se alegró tanto como si le ___ la lotería.', options: ['habría tocado', 'hubiera tocado', 'había tocado'], answer: 1, why: 'Irreal y anterior a la alegría: pluscuamperfecto de subjuntivo. El indicativo y el condicional no van tras «como si».', en: 'Marina was as happy as if she had won the lottery.' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: '¿Conocida, abierta o irreal? Known, open or unreal?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la frase con el error y tu alumno explica qué falla: el modo, el conector o el tiempo. Después aparece la corrección.', self: 'Lee cada frase y piensa qué falla: el modo, el conector o el tiempo. Toca para ver la corrección. (What is wrong: the mood, the connector or the tense?)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Elige el color como quieres, a mí me da igual.', right: 'Elige el color como quieras, a mí me da igual.', why: 'La manera queda abierta («me da igual»): subjuntivo. (An open choice takes the subjunctive.)' },
            { wrong: 'La cocina nueva es más cara que pensábamos.', right: 'La cocina nueva es más cara de lo que pensábamos.', why: 'El segundo término tiene verbo (pensábamos): de lo que, no que. (A clause after a comparative needs de lo que.)' },
            { wrong: 'Habla de la casa igual que si sería suya.', right: 'Habla de la casa igual que si fuera suya.', why: 'Comparación irreal: imperfecto de subjuntivo, nunca condicional. (Unreal comparison: imperfect subjunctive.)' },
            { wrong: 'Ayer dejaron la sala tal como estuviera.', right: 'Ayer dejaron la sala tal como estaba.', why: 'Es un estado real y conocido: indicativo. (A real, known state: indicative.)' },
            { wrong: 'Tengo más trabajo de lo que tú.', right: 'Tengo más trabajo que tú.', why: 'Comparas dos personas, sin verbo: que. «De lo que» solo va delante de una oración. (Two people compared directly: que.)' },
            { wrong: 'Cambiaron la tubería sin que nadie se enteró.', right: 'Cambiaron la tubería sin que nadie se enterara.', why: '«Sin que» siempre lleva subjuntivo; en pasado, imperfecto. (Sin que always takes the subjunctive.)' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Al final, la pintura costó menos ___ previsto.', options: ['que lo', 'de lo', 'del'], answer: 1, why: 'Forma reducida con participio: menos de lo previsto (= menos de lo que estaba previsto).', en: 'In the end, the paint cost less than planned.' },
            { prompt: 'Julia le dijo a Rodrigo: «Coloca las lámparas según ___ la luz de cada habitación».', options: ['es', 'fuera', 'sea'], answer: 2, why: '«Según» = dependiendo de; la luz de cada cuarto todavía no se ha valorado y la instrucción mira al futuro: presente de subjuntivo, sea.', en: 'Place the lamps depending on what the light in each room is like.' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno dice algo que hace como le enseñó otra persona, algo que deja que otros hagan «como quieran» y algo que le costó más de lo que pensaba.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'Visita de obra', coach: 'Toca cada expresión marcada. Tap each marked expression.',
      steps: [
        { title: 'Sábado en la obra · Saturday at the site', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Rodrigo y tu alumno es Marina. Después tu alumno toca cada expresión marcada y dice si la manera o la cantidad es conocida, abierta o irreal.', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada: ¿manera o cantidad conocida, abierta o irreal? (Known, open or unreal?)' } },
          { kind: 'explore', title: 'Más de lo que calculamos', setting: 'Sábado por la mañana. Marina visita la casa de su abuela con Rodrigo, el jefe de obra. Se tratan de tú. (Saturday morning: Marina visits the house with Rodrigo, who runs the building work.)', lines: [
            { who: 'Rodrigo', text: 'Pasa, Marina. Mira las vigas: las limpiamos y las dejamos [[tal como estaban|blue]].', en: 'Come in, Marina. Look at the beams: we cleaned them and left them exactly as they were.' },
            { who: 'Marina', text: '¡Qué bonitas! Se ven [[mejor de lo que esperaba|teal]]. ¿Y la cocina?', en: 'How lovely! They look better than I expected. And the kitchen?' },
            { who: 'Rodrigo', text: 'Ahí viene lo difícil. Al abrir la pared encontramos una tubería vieja, así que la cocina va a salir [[más cara de lo que calculamos|teal]] en enero.', en: 'That’s the tricky part. When we opened the wall we found an old pipe, so the kitchen is going to cost more than we worked out in January.' },
            { who: 'Marina', text: '¿Cuánto más? No quiero gastar [[más dinero del que tengo|teal]].', en: 'How much more? I don’t want to spend more money than I have.' },
            { who: 'Rodrigo', text: 'Unos veinte mil pesos. Eso sí, la cambiamos en un solo día, [[sin que los vecinos se quedaran|orange]] sin agua.', en: 'About twenty thousand pesos. Still, we changed it in a single day, without the neighbours being left without water.' },
            { who: 'Marina', text: 'Menos mal. ¿Y las ventanas? Todavía no sé de qué color pintarlas.', en: 'Thank goodness. And the windows? I still don’t know what colour to paint them.' },
            { who: 'Rodrigo', text: 'Las pintamos [[como prefieras|orange]]. Y el piso del patio lo pondremos [[según decida|orange]] Julia: ella tiene las muestras.', en: 'We’ll paint them however you prefer. And we’ll lay the courtyard floor according to what Julia decides: she has the samples.' },
            { who: 'Marina', text: '[[Según me contó|blue]] mi madre, antes las ventanas eran verdes. Me gustaría que quedaran [[igual que si nunca las hubieran tocado|violet]].', en: 'According to my mother, the windows used to be green. I’d like them to look just as if nobody had ever touched them.' },
            { who: 'Rodrigo', text: 'Verde antiguo, entonces. Y no te preocupes por el polvo: lo limpiamos todo [[de la manera que nos indicó|blue]] la restauradora.', en: 'Old green, then. And don’t worry about the dust: we clean everything the way the restorer showed us.' },
            { who: 'Marina', text: 'Gracias, Rodrigo. Cuidas esta casa [[como si fuera|violet]] tuya.', en: 'Thank you, Rodrigo. You look after this house as if it were yours.' },
            { who: 'Rodrigo', text: 'Es que me recuerda a la de mis abuelos. Ya verás: va a quedar [[más bonita de lo que te puedas imaginar|teal]].', en: 'It reminds me of my grandparents’ house. You’ll see: it’s going to look lovelier than you can possibly imagine.' },
          ], notes: {
            'tal como estaban': 'Manera conocida: el estado real de las vigas antes de la obra → indicativo. «Tal como» insiste en que no cambió nada.',
            'mejor de lo que esperaba': 'Comparativa con oración: el segundo término es una expectativa real del pasado → de lo que + indicativo.',
            'más cara de lo que calculamos': 'Se compara un adjetivo (cara) con un cálculo real que hicieron en enero: de lo que + indicativo.',
            'más dinero del que tengo': 'Con un nombre (dinero, masculino singular) el artículo concuerda: del que. La cantidad es real y conocida: indicativo.',
            'sin que los vecinos se quedaran': '«Sin que» (clase 140) dice cómo se hizo: siempre subjuntivo, y con otro sujeto (los vecinos). Marco pasado («cambiamos») → imperfecto.',
            'como prefieras': 'Manera abierta: Marina todavía no ha decidido. Presente de subjuntivo.',
            'según decida': '«Según» = dependiendo de lo que Julia decida; la decisión es futura → subjuntivo.',
            'Según me contó': '«Según» + indicativo presenta la fuente de una información real (according to my mother).',
            'igual que si nunca las hubieran tocado': 'Comparación irreal: alguien sí tocó las ventanas. Lo imaginado es anterior → pluscuamperfecto de subjuntivo.',
            'de la manera que nos indicó': 'Manera conocida: la restauradora ya dio el método → indicativo.',
            'como si fuera': '«Como si» (clase 136) + imperfecto de subjuntivo: la casa no es de Rodrigo.',
            'más bonita de lo que te puedas imaginar': 'Cantidad imaginada, sin límite concreto → de lo que + subjuntivo. Es enfático y muy frecuente: «de lo que te puedas imaginar».',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Por qué la cocina va a costar más?', options: ['Porque Julia eligió materiales caros.', 'Porque Marina cambió de idea.', 'Porque encontraron una tubería vieja.'], answer: 2, why: '«Al abrir la pared encontramos una tubería vieja».', en: 'Why is the kitchen going to cost more?' },
            { prompt: '¿Quién decide el piso del patio?', options: ['La madre de Marina.', 'Julia, la diseñadora.', 'Rodrigo.'], answer: 1, why: '«Lo pondremos según decida Julia: ella tiene las muestras».', en: 'Who decides on the courtyard floor?' },
            { prompt: '¿Cómo quiere Marina que queden las ventanas?', options: ['Modernas y blancas.', 'Como Rodrigo prefiera.', 'Verdes, como si nadie las hubiera tocado.'], answer: 2, why: '«Antes eran verdes. Me gustaría que quedaran igual que si nunca las hubieran tocado».', en: 'How does Marina want the windows to look?' },
          ] },
        ] },
        { title: 'Marina llama a Julia · Marina calls Julia', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'chat-fill', title: 'Por la tarde · In the afternoon', lines: [
            { who: 'Marina', text: 'Julia, ya vi la obra. Las vigas quedaron ___ esperaba: preciosas.', options: ['más mejor de lo que', 'mejor que', 'mejor de lo que'], answer: 2, why: 'Segundo término con verbo (esperaba): mejor de lo que. «Más mejor» no existe.' },
            { who: 'Julia', text: '¡Qué bien! Y el piso del patio, ¿lo ponemos como te ___ a ti o como lo dibujé yo?', options: ['guste', 'gustara', 'gusta'], answer: 0, why: 'Una manera todavía abierta y futura: presente de subjuntivo, guste.' },
            { who: 'Marina', text: 'Hazlo tal como lo ___ en el plano; me encantó.', options: ['dibujaste', 'dibujes', 'dibujaras'], answer: 0, why: 'El dibujo ya existe y Marina lo conoce: manera conocida → indicativo, dibujaste.' },
            { who: 'Julia', text: 'Perfecto. Eso sí, la piedra cuesta más ___ pensábamos.', options: ['de lo que', 'que', 'del que'], answer: 0, why: 'Comparas con una idea con verbo (pensábamos) y no hay nombre delante: de lo que.' },
            { who: 'Marina', text: 'No importa. Rodrigo trabaja con tanto cuidado como si ___ su propia casa; confío en él.', options: ['fuera', 'sería', 'es'], answer: 0, why: 'Comparación irreal con «tanto… como si»: no es su casa. Imperfecto de subjuntivo, fuera.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: «¿Qué cosa de tu casa dejarías tal como está y qué cosa cambiarías como quisieras?». Tu alumno responde con las dos estructuras.' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Conocida, abierta o irreal. Known, open or unreal.',
      steps: [
        { title: 'Notas de la obra · Site notes', blocks: [
          { kind: 'choice', items: [
            { context: 'Nota de Rodrigo a los albañiles. (Rodrigo’s note to the builders.)', prompt: 'Pongan las lámparas tal como ___ el plano que les dejé en la mesa.', options: ['indicara', 'indique', 'indica'], answer: 2, why: 'El plano ya existe y está en la mesa: manera conocida → indicativo, indica.', en: 'Put the lamps in exactly as the plan I left on the table shows.' },
            { context: 'Mensaje de Marina a Julia. (Marina’s message to Julia.)', prompt: 'Para el baño, elige el lavabo como te ___: confío en tu gusto.', options: ['parezca', 'pareciera', 'parece'], answer: 0, why: 'Marina deja la elección abierta a Julia: presente de subjuntivo, parezca.', en: 'For the bathroom, choose the washbasin however you see fit: I trust your taste.' },
            { context: 'Rodrigo, al final del día. (Rodrigo at the end of the day.)', prompt: 'Hoy terminamos el tejado antes ___ previsto.', options: ['del', 'de lo', 'que lo'], answer: 1, why: 'Forma reducida: antes de lo previsto. «Del previsto» exigiría un nombre masculino («antes del día previsto»).', en: 'Today we finished the roof earlier than planned.' },
            { context: 'Marina sobre la vecina. (Marina about the neighbour.)', prompt: 'La vecina habla de la obra ___ ella pagara las facturas.', options: ['como', 'igual que', 'como si'], answer: 2, why: 'Comparación irreal (ella no paga): «como si» + imperfecto de subjuntivo. «Como» e «igual que» no introducen una suposición.', en: 'The neighbour talks about the work as if she were paying the bills.' },
            { context: 'Marina recuerda la primera reunión. Era decisión suya. (It was her decision.)', prompt: 'Rodrigo le había dicho a Marina que distribuyera los muebles como ___.', options: ['quería', 'quisiera', 'quiera'], answer: 1, why: 'Manera abierta en un marco pasado («le había dicho»): imperfecto de subjuntivo, quisiera.', en: 'Rodrigo had told Marina to arrange the furniture however she wanted.' },
          ] },
        ] },
        { title: '¿Qué modo pide? · Which mood?', blocks: [
          { kind: 'classify', title: 'Piensa en la forma que falta · Think of the missing form', categories: [
            { id: 'ind', label: 'INDICATIVO (como dijo, de lo que pensaba)', tone: 'blue' },
            { id: 'pres', label: 'PRESENTE DE SUBJUNTIVO (como quieras)', tone: 'orange' },
            { id: 'imp', label: 'IMPERFECTO O PLUSCUAMPERFECTO DE SUBJUNTIVO (como si fuera)', tone: 'violet' },
          ], items: [
            { text: 'Ayer pintaron la puerta tal como… (pedir Marina)', answer: 'ind', why: 'Petición real y ya hecha: tal como pidió Marina.' },
            { text: 'Mañana, pinta la puerta como… (querer tú)', answer: 'pres', why: 'Manera abierta y futura: como quieras.' },
            { text: 'Trabajaron toda la noche igual que si… (ser una emergencia)', answer: 'imp', why: 'Comparación irreal: igual que si fuera una emergencia.' },
            { text: 'El patio quedó más grande de lo que… (parecer en el plano)', answer: 'ind', why: 'Impresión real del pasado: de lo que parecía.' },
            { text: 'No pidas más material del que… (necesitar; aún no lo sabes)', answer: 'pres', why: 'Cantidad abierta: del que necesites.' },
            { text: 'Abrieron la pared sin que… (despertarse el vecino)', answer: 'imp', why: '«Sin que» siempre pide subjuntivo; en pasado: sin que se despertara el vecino.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'La explicación de Rodrigo fue más clara que esperábamos.', ok: false, options: ['La explicación de Rodrigo fue más clara del que esperábamos.', 'La explicación de Rodrigo fue más clara como esperábamos.', 'La explicación de Rodrigo fue más clara de lo que esperábamos.'], answer: 2, why: 'Adjetivo + segundo término con verbo: de lo que. «Del que» exige un nombre masculino.' },
            { sentence: 'Haz el cambio como te parezca mejor; yo no entiendo de colores.', ok: true, why: 'Correcta: manera abierta que decide la otra persona → subjuntivo.' },
            { sentence: 'Mañana colocaremos los cuadros como Julia nos dirá.', ok: false, options: ['Mañana colocaremos los cuadros como Julia nos dijera.', 'Mañana colocaremos los cuadros como Julia nos diría.', 'Mañana colocaremos los cuadros como Julia nos diga.'], answer: 2, why: 'Manera futura que todavía no se conoce: presente de subjuntivo, diga. Funciona como «cuando»: no «cuando Julia nos dirá», sino «cuando nos diga».' },
            { sentence: 'Rodrigo reaccionó igual que si alguien habría roto la ventana.', ok: false, options: ['Rodrigo reaccionó igual que si alguien rompería la ventana.', 'Rodrigo reaccionó igual que si alguien hubiera roto la ventana.', 'Rodrigo reaccionó igual que si alguien había roto la ventana.'], answer: 1, why: 'Comparación irreal y anterior: pluscuamperfecto de subjuntivo, hubiera roto.' },
            { sentence: 'Al final tardamos menos tiempo del que pensábamos en la cocina.', ok: true, why: 'Correcta: con un nombre masculino (tiempo), «del que»; expectativa real → indicativo.' },
            { sentence: 'Lo dejaron todo tal y como lo encontraran.', ok: false, options: ['Lo dejaron todo tal y como lo encontrarían.', 'Lo dejaron todo tal y como lo encontraron.', 'Lo dejaron todo tal y como lo encuentren.'], answer: 1, why: 'Estado real y conocido del pasado: indicativo, encontraron.' },
          ] },
        ] },
        { title: 'Chat de la obra · Site chat', blocks: [
          { kind: 'chat-fill', title: 'Rodrigo y Felipe, el albañil · Rodrigo and Felipe, the builder', lines: [
            { who: 'Felipe', text: 'Rodrigo, ¿el baño lo pinto ___ dijo Julia ayer?', options: ['tanto como', 'tal que', 'tal como'], answer: 2, why: '«Tal como» introduce la manera: exactamente como dijo Julia. «Tanto como» compara cantidades.' },
            { who: 'Rodrigo', text: 'Sí, pero si Marina cambia de idea, lo haces como ella te ___.', options: ['dice', 'diga', 'dijera'], answer: 1, why: 'Instrucción futura que todavía no existe: presente de subjuntivo, diga.' },
            { who: 'Felipe', text: 'De acuerdo. Oye, la tubería nueva tardó en llegar más ___ nos dijeron.', options: ['que', 'de la que', 'de lo que'], answer: 2, why: 'Segundo término con verbo (nos dijeron), sin nombre delante: de lo que.' },
            { who: 'Rodrigo', text: 'Ya. Y el presupuesto de esa empresa era más alto ___ el de la otra.', options: ['de lo que', 'del que', 'que'], answer: 2, why: 'Comparas dos presupuestos, sin verbo en el segundo término: más… que.' },
            { who: 'Felipe', text: 'Por cierto, la vecina entró a mirar ___ nadie la viera.', options: ['sin', 'como', 'sin que'], answer: 2, why: 'Con un verbo conjugado y otro sujeto (nadie), «sin que» + subjuntivo. «Sin» solo va con infinitivo.' },
            { who: 'Rodrigo', text: 'Esa señora revisa la obra como si ___ la arquitecta.', options: ['es', 'sería', 'fuera'], answer: 2, why: '«Como si» + imperfecto de subjuntivo: no es la arquitecta.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['Hazlo', 'como', 'te', 'parezca', 'mejor'], accept: ['Hazlo como te parezca mejor', 'Hazlo como mejor te parezca'], en: 'Do it however you think best.' },
            { tiles: ['La', 'obra', 'es', 'más', 'cara', 'de', 'lo', 'que', 'pensaba'], accept: ['La obra es más cara de lo que pensaba'], en: 'The building work is more expensive than I thought.' },
            { tiles: ['Lo', 'dejaron', 'tal', 'y', 'como', 'estaba'], accept: ['Lo dejaron tal y como estaba'], en: 'They left it exactly as it was.' },
          ] },
        ] },
        { title: 'Reformula · Rephrase', blocks: [
          { kind: 'rewrite', title: 'Con otra estructura · With another structure', items: [
            { prompt: 'Marina pensaba que la obra costaría 200 000 pesos. Ha costado 250 000.', instruction: 'Habla como Marina, con «pensaba». Empieza: «La obra ha costado más…».', accept: ['La obra ha costado más de lo que pensaba', 'La obra ha costado más de lo que yo pensaba', 'La obra ha costado más dinero del que pensaba', 'La obra ha costado más dinero del que yo pensaba'] },
            { prompt: 'Rodrigo: «Puedes pintar las ventanas de cualquier manera; tú decides».', instruction: 'Dilo con «como» + querer. Empieza: «Pinta las ventanas…».', accept: ['Pinta las ventanas como quieras', 'Pinta las ventanas como tú quieras'] },
            { prompt: 'Rodrigo, la semana pasada: «Pinta las ventanas como quieras».', instruction: 'Eres Marina y lo cuentas hoy. Empieza: «Rodrigo me dijo que…».', accept: ['Rodrigo me dijo que pintara las ventanas como quisiera', 'Rodrigo me dijo que pintase las ventanas como quisiese', 'Rodrigo me dijo que pintara las ventanas como quisiese', 'Rodrigo me dijo que pintase las ventanas como quisiera'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno cuenta algo que salió mejor o peor de lo que esperaba esta semana y algo que alguien le dejó hacer «como quisiera».' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Un mensaje de Rodrigo', coach: 'Primero la idea, después los detalles. Gist first, then details.',
      steps: [
        { title: 'El buzón de voz de Marina · Marina’s voicemail', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general. Segunda escucha: tu alumno anota cada «como», «según», «de lo que» y «como si» con el verbo que los sigue. Después, las preguntas.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Anota cada «como», «según», «de lo que» y «como si» con su verbo. (Listen once for the gist and once for the details.)' } },
          { kind: 'listen', title: 'Un mensaje de Rodrigo', channel: 'BUZÓN DE VOZ · DE RODRIGO PARA MARINA', src: '/audio/grammar-live/441.mp3',
            before: 'Es viernes por la tarde y Rodrigo le deja un mensaje a Marina sobre la semana de obra. ¿Qué crees que le cuenta: buenas noticias, retrasos, decisiones pendientes? (Rodrigo leaves Marina a voicemail about the week’s work. What do you think he tells her?)',
            gist: { prompt: '¿Para qué llama Rodrigo? · Why does Rodrigo call?', options: ['Para cancelar la obra por falta de dinero.', 'Para contarle cómo fue la semana y qué tiene que decidir ella.', 'Para quejarse de Julia.'], answer: 1, why: 'Cuenta el piso del patio, el retraso de la madera, el color y el corte de agua.', en: 'He reports on the week and leaves her a decision to make.' },
            details: [
              { prompt: '¿Cómo quedó el piso del patio?', options: ['Igual que antes de la obra.', 'Mejor de lo que esperaban, como lo dibujó Julia.', 'Peor de lo que esperaban.'], answer: 1, why: '«Tal y como lo dibujó Julia, y queda mejor de lo que esperábamos».', en: 'How did the courtyard floor turn out?' },
              { prompt: '¿Por qué van a terminar más tarde?', options: ['Porque llovió toda la semana.', 'Porque la vecina paró la obra.', 'Porque la madera de las ventanas llegó tarde.'], answer: 2, why: '«La madera para las ventanas llegó tarde».', en: 'Why are they going to finish later?' },
              { prompt: '¿Qué dice Rodrigo sobre el color de las ventanas?', options: ['Que ya lo eligió Julia.', 'Que Marina lo decide como prefiera.', 'Que tiene que ser blanco.'], answer: 1, why: '«Para el color, haz como prefieras».', en: 'What does Rodrigo say about the window colour?' },
              { prompt: '¿Cómo se comporta la vecina, según Rodrigo?', options: ['Ayuda a los albañiles.', 'No quiere hablar con nadie.', 'Da órdenes como si fuera la jefa de obra.'], answer: 2, why: '«Vino otra vez a dar órdenes, como si fuera la jefa de obra».', en: 'How does the neighbour behave, according to Rodrigo?' },
            ],
            transcript: 'Hola, Marina, soy Rodrigo. Te llamo para contarte cómo va la semana. La buena noticia: el piso del patio ya está puesto, [[tal y como lo dibujó|blue]] Julia, y queda [[mejor de lo que esperábamos|teal]]. La no tan buena: la madera para las ventanas llegó tarde, así que vamos a terminar unos días [[más tarde de lo previsto|teal]]. Del costo no te preocupes: [[según me dijo|blue]] el proveedor, no nos va a cobrar el envío. Para el color, haz [[como prefieras|orange]]: si quieres el verde antiguo, lo preparamos aquí; si no, compra la pintura que más te guste. Otra cosa: el lunes tenemos que cortar el agua dos horas, pero lo haremos muy temprano, [[sin que los vecinos lo noten|orange]]. Ah, y la vecina vino otra vez a dar órdenes, [[como si fuera|violet]] la jefa de obra. Yo la escucho con paciencia y sigo trabajando [[como me pediste|blue]]: con calma y sin discutir. Llámame cuando puedas, ¿sí? Un saludo.',
            reply: { teacher: 'Tú eres Rodrigo. Tu alumno es Marina y le devuelve la llamada: dice qué le pareció el patio comparado con lo que esperaba, elige el color de las ventanas y comenta lo de la vecina con «como si».', self: 'Devuelve la llamada como Marina, en voz alta: compara el patio con lo que esperabas, decide el color y comenta lo de la vecina con «como si». (Call Rodrigo back as Marina.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Expectativas y maneras', coach: 'Compara y explica cómo. Compare and explain how.',
      steps: [
        { title: 'Lo esperado y lo real · Expected and real', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas y tu alumno habla de experiencias reales. Si usa «que» donde va «de lo que», o indicativo donde la manera está abierta, tú repites la frase con la forma correcta y sigues con la repregunta.', self: 'Lee cada pregunta y responde en voz alta con ejemplos reales. Antes de cada verbo, piensa: ¿manera conocida, abierta o irreal? (Answer aloud with real examples.)' } },
          { kind: 'talk', cards: [
            { q: 'Algo que te costó más (o menos) de lo que pensabas: una mudanza, una reforma, un viaje, un curso. · Something that cost more or less than you expected.', followUps: ['¿Cuánto tiempo o dinero calculabas?', '¿Qué harías distinto ahora? (What would you do differently?)'], phrases: ['Me costó [[más de lo que pensaba|teal]]…', 'Tardé [[menos tiempo del que|teal]] calculaba…', 'Al final salió [[mejor de lo que esperaba|teal]]…'], hint: 'Segundo término con verbo → de lo que; con un nombre → del que, de la que…', example: 'Mi mudanza a Monterrey me costó mucho más de lo que pensaba: necesité más cajas de las que había comprado y tardé el doble del tiempo previsto. Pero el barrio es mejor de lo que esperaba.', next: 'Ahora, las instrucciones.' },
            { q: 'Cuenta una vez que hiciste algo exactamente como te dijeron… o justo al revés. · A time you followed instructions to the letter, or didn’t.', followUps: ['¿Quién te dio las instrucciones?', '¿Cómo salió?'], phrases: ['Lo hice [[tal como me explicaron|blue]]…', '[[Según me dijeron|blue]]…', 'Lo resolví [[de la manera que pude|blue]]…'], hint: 'Manera conocida, ya dada: indicativo.', example: 'Cuando monté mi primera estantería, no lo hice como decían las instrucciones, sino como me pareció lógico. Al final me sobraron cuatro tornillos y tuve que desmontarla.', next: 'Ahora, tus preferencias.' },
            { q: '¿Prefieres instrucciones exactas o que te digan «hazlo como quieras»? · Exact instructions, or “do it your way”?', followUps: ['¿Y cuando tú das instrucciones?', '¿En qué situaciones es mejor dejar libertad?'], phrases: ['Cuando me dicen [[«como quieras»|orange]]…', 'Prefiero que cada uno trabaje [[según le parezca|orange]]…', 'Me gusta que me lo expliquen [[tal como lo quieren|blue]]…'], hint: 'Manera abierta → subjuntivo; manera ya decidida → indicativo.', example: 'En el trabajo prefiero que me digan las cosas tal como las quieren, porque si me dicen «hazlo como quieras», luego nunca les gusta. Con mis amigos es distinto: cada uno organiza el viaje según le parezca.' },
            { q: 'Eres Marina. Es la última semana de obra: explícale a Rodrigo qué tiene que quedar como estaba y qué puede hacer como quiera. · You are Marina: give Rodrigo instructions for the last week.', followUps: ['¿Y si algo cuesta más de lo previsto?', '¿Qué le dices de la vecina?'], phrases: ['Deja la escalera [[tal como está|blue]]…', 'Las lámparas ponlas [[como te parezca|orange]]…', 'Termina el patio [[sin que|orange]]…'], hint: 'Lo que ya existe → indicativo; lo que él decide → subjuntivo.', example: 'Rodrigo, deja la escalera tal como está, con la madera original. Las lámparas ponlas como te parezca mejor; confío en ti. Y si algo va a costar más de lo que calculamos, avísame antes, por favor.', teacher: 'Haz tú de Rodrigo y pregunta detalles: «¿Y el baño? ¿Y los muebles de tu abuela?». Tu alumno responde con «como quieras», «según…» o «tal como…».' },
            { q: 'Alguien que actúa como si…: un vecino, un compañero, un familiar. · Someone who acts as if…', followUps: ['¿Cómo reaccionas tú?', '¿Alguna vez actuaste tú igual que si fueras otra persona?'], phrases: ['Habla de… [[como si fuera|violet]]…', 'Me trató [[igual que si|violet]] nunca nos [[hubiéramos visto|violet]]…', 'Se puso tan contento [[como si le hubiera tocado|violet]] la lotería.'], hint: 'Comparación irreal: imperfecto o pluscuamperfecto de subjuntivo.', example: 'Mi cuñado habla de cocina como si fuera chef, aunque solo sabe hacer arroz. Y cuando le salió bien una paella, se puso tan contento como si le hubieran dado un premio.' },
            { q: 'Un lugar (una casa, una ciudad, un restaurante) que te sorprendió: ¿era mejor o peor de lo que imaginabas? · A place that surprised you.', followUps: ['¿Qué esperabas antes de ir?', '¿Volverías?'], phrases: ['Era [[más pequeño de lo que|teal]] parecía en las fotos…', 'La comida estaba [[mejor de lo que me habían dicho|teal]]…', 'Lo conservan [[tal y como estaba|blue]]…'], hint: 'Expectativa real → de lo que + indicativo.', example: 'Fui a un pueblo que en las fotos parecía enorme, pero era mucho más pequeño de lo que pensaba. En cambio, el centro histórico lo conservan tal y como estaba hace dos siglos, y fue más bonito de lo que imaginaba.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno hace las preguntas y tú respondes con algún error a propósito («Me costó más que pensaba», «Hazlo como quieres»). Tu alumno lo detecta y lo corrige.', self: 'Ahora haz tú las preguntas en voz alta y respóndelas con otra experiencia distinta. (Now ask the questions aloud and answer with a different experience.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Un correo a Clara', coach: 'Cuenta cómo va y compara. Report and compare.',
      steps: [
        { title: 'Noticias de la obra · News from the building work', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos cada «como», «según», «de lo que» y «como si»: ¿manera conocida, abierta o irreal? Después tu alumno lee el correo en voz alta.', self: 'Escribe tu correo y toca «Revisar mi texto». Después repasa cada «como», «según», «de lo que» y «como si»: ¿qué modo pide? (Check the mood after each one.)' } },
          { kind: 'write', title: 'Así va la casa · How the house is going', situation: 'Eres Marina (o eres tú, con una reforma, una mudanza o un proyecto real). Escribes a tu hermana Clara, que vive en el extranjero y es copropietaria de la casa: le cuentas cómo va la obra comparada con lo que esperaban, qué se hizo como acordaron y qué decisiones le dejas a ella. (You are Marina, or yourself with a real project. Write to your sister, who co-owns the house: how the work compares with what you expected, what was done as agreed, and which decisions you leave to her.)', task: [
              'Compara dos cosas con lo que esperabas: más / mejor / menos… de lo que, del que… (Compare two things with your expectations.)',
              'Cuenta algo que se hizo como se acordó: tal como, como me dijo, según me explicó. (Something done as agreed.)',
              'Deja una o dos decisiones abiertas: como quieras, según te parezca. (Leave one or two decisions open.)',
              'Incluye una comparación irreal: como si, igual que si… (Include one unreal comparison.)',
              'Cierra con un plan o una petición. (Close with a plan or a request.)',
            ], starters: ['Querida Clara:', 'Te escribo para contarte cómo va…', 'La buena noticia es que…', 'La mala es que…', 'Según me explicó…', 'Lo dejaron tal como…', 'Eso lo decidimos como tú…', 'Rodrigo trabaja como si…', 'Te mando fotos…'],
            words: ['de lo que', 'del que', 'de lo previsto', 'tal como', 'tal y como', 'según', 'como quieras', 'según te parezca', 'sin que', 'como si', 'igual que si'],
            model: 'Querida Clara: Te escribo para contarte cómo va la obra de la casa de la abuela. La buena noticia es que las vigas quedaron [[mejor de lo que esperaba|teal]]: Rodrigo las limpió y las dejó [[tal como estaban|blue]]. La mala es que todo va a costar [[más de lo que calculamos|teal]] en enero, unos veinte mil pesos más, porque había una tubería vieja que nadie conocía. [[Según me explicó|blue]] Rodrigo, la cambiaron en un solo día, [[sin que hubiera|orange]] que cortar el agua a los vecinos. Rodrigo cuida cada detalle [[como si fuera|violet]] su propia casa, y eso me tranquiliza mucho. Ahora necesito tu opinión: el color de las ventanas lo elegimos [[como tú quieras|orange]], y los muebles de la abuela los colocaremos [[según te parezca|orange]] cuando vengas en diciembre. Eso sí, no quiero gastar [[más dinero del que tenemos|teal]]. Mañana te mando fotos. Un abrazo, Marina.',
            minWords: 110,
            checks: [
              { label: 'Una comparativa con oración (de lo que, del que, de lo previsto…)', pattern: '(?<!\\p{L})(?:más|menos|mejor|peor|mayor|menor|antes|después)\\s+(?:\\p{L}+\\s+){0,2}?(?:de\\s+lo|del|de\\s+la|de\\s+los|de\\s+las)\\s+(?:que|previsto|esperado|necesario)(?!\\p{L})', tip: 'Compara con lo que esperabas: «mejor de lo que esperaba», «más dinero del que tenemos».' },
              { label: 'Una manera abierta con subjuntivo (como quieras, según te parezca…)', pattern: '(?<!\\p{L})(?:como|según)\\s+(?:\\p{L}+\\s+)?(?:quieras|quieran|queramos|prefieras|prefieran|prefiramos|parezca|parezcan|decidas|decidan|digas|digan|veas|vean)(?!\\p{L})', tip: 'Deja una decisión abierta: «como tú quieras», «según te parezca».' },
              { label: 'Una comparación irreal (como si, igual que si…)', pattern: '(?<!\\p{L})(?:como|que)\\s+si(?!\\p{L})', tip: 'Añade una comparación irreal: «trabaja como si fuera su casa».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})(?:como|que)\\s+si\\s+(?:\\p{L}+\\s+)?(?:es|era|fue|será|sería|habría|está|estaba|tiene|tenía)(?!\\p{L})', why: 'Tras **como si** / **igual que si**, usa imperfecto o pluscuamperfecto de subjuntivo: «como si **fuera**», «como si **hubiera estado**».' },
              { pattern: '(?<!\\p{L})(?:más|menos|mejor|peor)\\s+(?:\\p{L}+\\s+)?que\\s+(?:pensaba|pensábamos|esperaba|esperábamos|creía|creíamos|imaginaba|imaginábamos|calculamos|calculábamos)(?!\\p{L})', why: 'Si el segundo término tiene verbo, usa **de lo que**: «más caro **de lo que** pensaba».' },
              { pattern: '(?<!\\p{L})como\\s+(?:tú\\s+)?(?:quieres|prefieres)(?!\\p{L})', why: 'Si dejas la decisión abierta, usa subjuntivo: «como **quieras**», «como **prefieras**».' },
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
            { tone: 'blue', label: 'MANERA CONOCIDA', formula: 'como · según · tal (y) como · de la manera que + indicativo', example: 'Las dejamos tal como estaban.', caption: 'la manera ya existe o se conoce', en: 'a real, known manner or source of information: indicative' },
            { tone: 'orange', label: 'MANERA ABIERTA', formula: 'como · según · de la manera que + subjuntivo · sin que', example: 'Píntalas como prefieras.', caption: 'futura, no decidida o cualquiera', en: 'an open, future or “any” manner: subjunctive (imperfect in a past frame); sin que always subjunctive' },
            { tone: 'teal', label: 'COMPARATIVA CON ORACIÓN', formula: 'más / mejor… de lo que · del que · de lo previsto', example: 'Es más cara de lo que calculamos.', caption: 'que con dos elementos; de lo que con un verbo', en: 'de lo que before a clause; indicative for a real expectation, subjunctive for an open or imagined amount' },
            { tone: 'violet', label: 'COMPARACIÓN IRREAL', formula: 'como si · igual que si · tanto como si + imperfecto / pluscuamperfecto de subjuntivo', example: 'La cuida igual que si fuera suya.', caption: 'se compara con algo que no es real', en: 'comparison with something untrue: imperfect or pluperfect subjunctive, never indicative or conditional' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Pregúntate si la manera o la cantidad **ya existe**: «como me dijiste», «de lo que pensaba» → **indicativo**. Si está **abierta** o es imaginada: «como quieras», «de lo que necesites» → **subjuntivo**. Si comparas con algo **irreal**: «igual que si fuera» → **imperfecto o pluscuamperfecto de subjuntivo**. Y antes de un verbo, nunca «más que pensaba»: **más de lo que pensaba**.', en: 'Ask whether the manner or amount already exists: then the indicative. If it is open or imagined: the subjunctive. If you compare with something unreal: imperfect or pluperfect subjunctive. And before a verb, never “más que pensaba”: always más de lo que pensaba.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'Puedes pagar como te ___ más cómodo: con tarjeta o en efectivo.', options: ['resulta', 'resultaría', 'resulte'], answer: 2, why: 'Manera abierta, la elige la otra persona: presente de subjuntivo.', en: 'You can pay whichever way is easiest for you: by card or in cash.' },
            { prompt: 'El examen fue mucho más fácil ___ nos habían dicho.', options: ['de lo que', 'que', 'del que'], answer: 0, why: 'Adjetivo + segundo término con verbo: de lo que.', en: 'The exam was much easier than we had been told.' },
            { prompt: 'Mi hermano me abrazó igual que si no me ___ en años.', options: ['habría visto', 'había visto', 'hubiera visto'], answer: 2, why: 'Comparación irreal y anterior: pluscuamperfecto de subjuntivo.', en: 'My brother hugged me as if he hadn’t seen me for years.' },
            { prompt: 'Preparé la sopa tal como me ___ mi madre por teléfono.', options: ['explicara', 'explique', 'explicó'], answer: 2, why: 'Instrucción real y ya dada: indicativo, explicó.', en: 'I made the soup exactly as my mother explained on the phone.' },
            { prompt: 'Mi hija ya lee más rápido ___ yo.', options: ['que', 'de lo que', 'del que'], answer: 0, why: 'Dos personas comparadas, sin verbo: que.', en: 'My daughter already reads faster than I do.' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Ahora, una boda. Now, a wedding.', blocks: [
          { kind: 'lead', text: 'Teresa y Hugo organizaron una boda pequeña en el jardín de unos amigos. Ahora Teresa cuenta cómo salió. Usa la estructura que pide cada frase.', en: 'Teresa and Hugo held a small wedding in some friends’ garden. Now Teresa says how it went. Use the structure each sentence asks for.' },
          { kind: 'rewrite', title: 'La boda de Teresa · Teresa’s wedding', items: [
            { prompt: 'Teresa esperaba 40 invitados. Vinieron 60.', instruction: 'Habla como Teresa, con «esperaba». Empieza: «Vinieron más invitados…».', accept: ['Vinieron más invitados de los que esperaba', 'Vinieron más invitados de lo que esperaba', 'Vinieron más invitados de los que yo esperaba', 'Vinieron más invitados de lo que yo esperaba'] },
            { prompt: 'Teresa al fotógrafo: «Puedes hacer las fotos de cualquier manera; confío en ti».', instruction: 'Dilo con «como» + preferir. Empieza: «Haz las fotos…».', accept: ['Haz las fotos como prefieras', 'Haz las fotos como tú prefieras'] },
            { prompt: 'La madre de Teresa no organizaba nada, pero daba órdenes a todos. (como si · ser la organizadora)', instruction: 'Empieza: «La madre de Teresa daba órdenes…».', accept: ['La madre de Teresa daba órdenes como si fuera la organizadora', 'La madre de Teresa daba órdenes como si fuese la organizadora', 'La madre de Teresa daba órdenes a todos como si fuera la organizadora', 'La madre de Teresa daba órdenes a todos como si fuese la organizadora'] },
          ] },
        ] },
        { title: 'Ampliación · Coloquial, literario y formal · Extension: register', mascot: '/brand/mascot/portrait.webp', coach: 'Opcional. Optional.', blocks: [
          { kind: 'lead', text: 'Para estudiantes fuertes o si queda tiempo: otras formas de comparar con lo irreal según el registro, y dos matices de las comparativas con cantidades.', en: 'For strong students or spare time: other ways to compare with the unreal depending on register, and two nuances of comparatives with amounts.' },
          { kind: 'choice', title: 'Matices y registro · Nuance and register', items: [
            { prompt: 'Una amiga se queja de las normas de su compañero de casa: «¡Ni que esto fuera un hotel!». ¿Qué quiere decir?', options: ['Que la casa es un hotel.', 'Que nunca ha estado en un hotel.', 'Que él exige demasiado, como si la casa fuera un hotel.'], answer: 2, why: '«Ni que» + imperfecto o pluscuamperfecto de subjuntivo: exclamación coloquial equivalente a «como si…», con queja o ironía.', en: 'A colloquial exclamation: “Anyone would think this was a hotel!”' },
            { prompt: '«Avanzaba despacio, cual si temiera despertar a alguien.» ¿Dónde esperas encontrar «cual si»?', options: ['Solo en el español de México.', 'En un mensaje informal.', 'En un texto literario o muy formal.'], answer: 2, why: '«Cual si» equivale a «como si», pero es literario; en la conversación se usa «como si».', en: 'Cual si is a literary equivalent of como si.' },
            { prompt: '«No gastamos más que 500 pesos.» ¿Qué significa?', options: ['Gastamos más de 500 pesos.', 'Solo gastamos 500 pesos.', 'Gastamos 500 pesos o menos, como límite.'], answer: 1, why: '«No… más que» = solo. Con «de» («no gastamos más de 500») se marca un límite: 500 o menos.', en: 'No… más que means “only”; no… más de sets an upper limit.' },
            { prompt: 'Informe técnico: «La reparación resultó más compleja de lo que cabría esperar». ¿Qué aporta «cabría»?', options: ['Una expectativa hipotética y formal: lo que sería razonable esperar.', 'Una acción futura segura.', 'Es un error: debe ser «cabe».'], answer: 0, why: 'El condicional «cabría esperar» presenta una expectativa general e hipotética; es típico del registro formal escrito.', en: 'A formal, hypothetical expectation: “than one might expect”.' },
          ] },
          { kind: 'teacher', text: 'Paso opcional: solo si queda tiempo o para estudiantes fuertes. Tu alumno inventa una queja con «¡Ni que…!» sobre una situación real y la reformula con «como si».' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 142 · Relativos con preposición: de quien, a quien, con el que', text: 'Ya dices de qué manera se hace algo («como me dijiste», «como quieras») y comparas con lo esperado o lo imaginado («más de lo que pensaba», «igual que si fuera»). En la clase 142 vuelves a los relativos, ahora con una preposición delante: «la arquitecta **de quien** te hablé», «el albañil **con el que** trabajo». Es el paso natural: «de lo que» y «del que» ya son relativos dentro de una comparación; ahora aprendes a unir ideas con preposición y relativo con precisión.', en: 'You can now say how something is done and compare with what you expected or imagined. In class 142 you return to relative clauses, now with a preposition in front: “the architect I told you about”, “the builder I work with”. It is the natural next step: de lo que and del que are already relatives inside a comparison; now you learn to link ideas precisely with preposition + relative.', href: '/gramatica/relativos-con-preposicion', label: 'Ir a la clase 142' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Qué diferencia hay entre “hazlo como te dije” y “hazlo como quieras”, y entre “más que tú” y “más de lo que pensabas”?». Respuesta esperada: manera conocida frente a abierta; dos elementos frente a una oración. Tarea: el correo de Escribir sobre un proyecto real.' },
        ] },
      ],
    },
  ],
};
