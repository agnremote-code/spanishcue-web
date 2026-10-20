import type { LiveLesson } from '../types';

/**
 * Lesson 455 · B2 · Comparativas proporcionales: cuanto más, más (course unit G155).
 * Builds on G037/G068 (más… que, mejor, peor, mayor, menor), G098/G139 (cuando +
 * subjunctive for the future), G128/G130 (imperfect subjunctive, tense correlation)
 * and G141 (de lo que: not re-taught here). G154 covered tan / tanto… que (result).
 * Scene: Medellín (Colombia). Lucía Herrera is opening a small sourdough bakery with
 * her business partner Daniel Ospina and takes a workshop with Rosa Montoya, a master
 * baker. Explorar: Saturday workshop Rosa–Lucía. Escuchar: Rosa's voice note after
 * the first week (es-CO-SalomeNeural). Escribir: Lucía's email to Daniel.
 * Content: cuanto más / menos…, más / menos / mejor / peor…; no article and no que;
 * subject usually after the verb; cuanto invariable before verb, adjective or adverb,
 * agreeing with a noun (cuanto / cuanta / cuantos / cuantas más + noun); cuanto mayor,
 * cuanto antes (no más); fixed Cuanto antes, mejor / Cuantos más, mejor. Mood: indicative
 * for general, habitual or past facts (Cuanto más leo, más entiendo), present subjunctive
 * for the future or a hypothesis (Cuanto antes llegues, mejor), imperfect subjunctive in a
 * past frame. Variant: mientras más… (frequent in many Latin American countries, also
 * heard in parts of Spain; invariable). Related: cada vez más / menos / mejor (one variable
 * over time). Mistakes: *lo más / *el más… (calque of «the more»), *cuanto más clientes,
 * *cuanto más mayor, *cuanto antes llegarás, *cada vez más mejor. Ampliación: cuanto…,
 * tanto más (formal), tanto mejor, a medida que, C1 preview of tanto más… cuanto que.
 * Instructions use tú.
 */
export const lesson: LiveLesson = {
  id: 455,
  level: 'B2',
  title: 'Comparativas proporcionales: cuanto más, más',
  subtitle: 'Decir que dos cosas cambian juntas (cuanto más practicas, más aprendes) y elegir el modo: algo general o algo futuro.',
  legend: [
    { tone: 'blue', label: 'GENERAL O HABITUAL · cuanto más… + indicativo (cuanto más practico, mejor me sale)' },
    { tone: 'orange', label: 'FUTURO O HIPÓTESIS · cuanto… + subjuntivo (cuanto antes llegues, mejor)' },
    { tone: 'teal', label: 'CON NOMBRE · cuanto concuerda (cuantas más horas, cuantos más clientes)' },
    { tone: 'violet', label: 'VARIANTE Y PROGRESIÓN · mientras más…, cada vez más' },
  ],
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Dos cosas que cambian juntas', coach: '¿Una cosa crece con la otra? Does one thing grow with the other?',
      steps: [
        { title: 'La panadería de Lucía · Lucía’s bakery', blocks: [
          { kind: 'lead', text: 'Lucía Herrera dejó su trabajo en una oficina de Medellín para abrir una panadería de masa madre con su socio, Daniel Ospina. Antes de la apertura hace un taller con Rosa Montoya, una maestra panadera con treinta años de oficio. Rosa lo explica casi todo con proporciones: **cuanto más** fermenta la masa, **más** sabor tiene; **cuanto antes** abran, **mejor**. Hoy aprendes a decir que dos cosas aumentan o disminuyen a la vez.', en: 'Lucía Herrera left her office job in Medellín to open a sourdough bakery with her business partner, Daniel Ospina. Before the opening she is doing a workshop with Rosa Montoya, a master baker with thirty years in the trade. Rosa explains almost everything in proportions: the longer the dough ferments, the more flavour it has; the sooner they open, the better. Today you learn to say that two things rise or fall together.' },
          { kind: 'guide', text: { teacher: 'Tú lees las dos frases y tu alumno explica qué dice la segunda que no dice la primera.', self: 'Lee las dos frases en voz alta. ¿Qué dice la segunda que no dice la primera? (What does the second sentence say that the first one doesn’t?)' } },
          { kind: 'compare', title: 'Condición o proporción · Condition or proportion', columns: [
            { tone: 'neutral', label: 'CONDICIÓN · si', sentence: 'Si la masa fermenta más tiempo, tiene más sabor.', idea: 'Es correcta, pero solo une una condición y un resultado.', en: 'Correct, but it simply links a condition to a result.' },
            { tone: 'blue', label: 'PROPORCIÓN · cuanto más…, más…', sentence: '[[Cuanto más fermenta|blue]] la masa, [[más sabor tiene|blue]].', idea: 'Las dos cosas crecen juntas, paso a paso: es una escala.', en: 'Both things grow together, step by step, on a sliding scale, like English “the longer…, the more…”.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Rosa: «___ hidratas la masa, más abierta queda la miga».', options: ['Cuanto más', 'Lo más', 'Mientras que'], answer: 0, why: 'Proporción entre dos cosas: cuanto más…, más… «Lo más» es un calco del inglés «the more»; «mientras que» marca contraste.', en: 'The more water you put in the dough, the more open the crumb.' },
            { prompt: 'Cuanto más amasas, ___ elástica se vuelve la masa.', options: ['lo más', 'más', 'tan'], answer: 1, why: 'El segundo miembro empieza por más / menos, sin artículo: más elástica.', en: 'The more you knead, the more elastic the dough becomes.' },
          ] },
        ] },
        { title: 'La estructura · The structure', mascot: '/brand/mascot/studying.webp', coach: 'Sin artículo y sin que. No article, no que.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'CUANTO MÁS / MENOS…, MÁS / MENOS…', question: '¿Dos cosas aumentan o disminuyen a la vez, en proporción?', en: 'Use cuanto más / menos…, más / menos… when one quantity changes in step with another, like English “the more…, the more…”. Neither part takes an article, nothing links them but a comma, and the subject normally follows the verb.', formula: ['Cuanto + más / menos + verbo (o adjetivo, adverbio)', ', más / menos / mejor / peor + verbo'],
            meaning: 'El primer miembro, con **cuanto**, presenta lo que cambia; el segundo, con **más**, **menos**, **mejor** o **peor**, dice cómo cambia lo otro. Ninguno lleva artículo, no hay «que» entre los dos y el sujeto suele ir **detrás del verbo**: «cuanto más fermenta **la masa**».',
            examples: [
              { es: '[[Cuanto más amasa|blue]] Lucía, [[más lisa queda|blue]] la masa.', en: 'The more Lucía kneads, the smoother the dough gets.' },
              { es: '[[Cuanto más fría está|blue]] la cocina, [[más despacio sube|blue]] el pan.', en: 'The colder the kitchen, the more slowly the bread rises.' },
              { es: '[[Cuanto menos se toca|blue]] la masa durante el reposo, [[mejor fermenta|blue]].', en: 'The less the dough is handled while it rests, the better it ferments.' },
              { es: '[[Cuanto menos duerme|blue]] Daniel, [[peor hace|blue]] las cuentas.', en: 'The less Daniel sleeps, the worse he does the accounts.' },
            ],
            note: 'Con adjetivos y adverbios el orden es **cuanto más + adjetivo + verbo**: «cuanto más fría está la cocina». El segundo miembro puede empezar también por **antes**, **después**, **mayor** o **menor**: «cuanto más lejos vive, antes sale de casa».' },
          { kind: 'table', title: 'Las piezas · The pieces', head: ['Primer miembro', 'Segundo miembro', 'Relación'], rows: [
            ['Cuanto **más** practicas,', '**más** confianza tienes.', 'las dos suben'],
            ['Cuanto **más** trabaja,', '**menos** duerme.', 'una sube, la otra baja'],
            ['Cuanto **menos** amasas,', '**menos** elástica queda.', 'las dos bajan'],
            ['Cuanto **más** temprano llegas,', '**mejor** pan encuentras.', 'más + mejor / peor'],
            ['Cuanto **antes** sale de casa,', '**antes** llega a la panadería.', 'tiempo: antes + antes'],
          ], note: 'En el segundo miembro no se repite «cuanto»: «cuanto más practicas, **más** aprendes».' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué orden es el más natural?', options: ['Cuanto más fermenta la masa, más sabor tiene.', 'Cuanto más la masa fermenta, la masa tiene más sabor.', 'Cuanto la masa fermenta más, más sabor tiene.'], answer: 0, why: '«Cuanto más» va pegado al verbo y el sujeto suele ir detrás: «cuanto más fermenta la masa». En el segundo miembro, más + nombre o adjetivo va delante del verbo.', en: 'The longer the dough ferments, the more flavour it has.' },
            { prompt: 'Cuanto más ocupado está Daniel, ___ contesta los mensajes.', options: ['tan tarde', 'más tarde', 'lo más tarde'], answer: 1, why: 'Segundo miembro: más + adverbio, sin artículo. «Tan» no expresa proporción.', en: 'The busier Daniel is, the later he answers his messages.' },
          ] },
        ] },
        { title: 'Cuanto con nombres · Cuanto with nouns', mascot: '/brand/mascot/standing.webp', coach: 'Cuanto, cuanta, cuantos, cuantas.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'CUANTO + MÁS / MENOS + NOMBRE', question: '¿Después de más o menos viene un nombre?', en: 'When más or menos is followed by a noun, cuanto agrees with that noun in gender and number: cuanto, cuanta, cuantos, cuantas. Before a verb, an adjective or an adverb, cuanto never changes.', formula: ['cuanto · cuanta · cuantos · cuantas', '+ más / menos + NOMBRE'],
            meaning: '**Cuanto** concuerda con el nombre que va después de más o menos: **cuanta** más agua, **cuantos** más clientes, **cuantas** más horas. En el segundo miembro, en cambio, solo hay **más / menos + nombre**, sin cuanto.',
            examples: [
              { es: '[[Cuantas más horas|teal]] fermenta la masa, más ácido sabe el pan.', en: 'The more hours the dough ferments, the tangier the bread tastes.' },
              { es: '[[Cuanta más agua|teal]] lleva la masa, más difícil es darle forma.', en: 'The more water the dough has, the harder it is to shape.' },
              { es: '[[Cuantos más clientes|teal]] entran, más pan tenemos que hornear.', en: 'The more customers come in, the more bread we have to bake.' },
              { es: '[[Cuanto menos tiempo|teal]] descansa la masa, más compacta sale la miga.', en: 'The less time the dough rests, the denser the crumb.' },
            ],
            note: '«Agua» lleva «el» delante, pero es femenina: **cuanta** más agua, **mucha** agua. En la conversación a veces se oye «cuanto más gente», pero la norma culta pide la concordancia: «**cuanta** más gente».' },
          { kind: 'table', title: 'Concordancia · Agreement', head: ['', 'Singular', 'Plural'], rows: [
            ['Masculino', '**cuanto** más pan', '**cuantos** más clientes'],
            ['Femenino', '**cuanta** más harina', '**cuantas** más horas'],
            ['Verbo, adjetivo, adverbio', '**cuanto** más amasas · **cuanto** más fría · **cuanto** más despacio', 'no cambia'],
          ], note: 'Con **mayor, menor, mejor, peor** y **antes** no se usa «más»: «cuanto **mayor** es el horno», «cuanto **antes**». Dos fórmulas fijas, sin verbo: «**Cuanto antes, mejor**» (the sooner, the better) y «**Cuantos más, mejor**» (the more, the merrier).' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Daniel: «___ más pedidos recibimos por internet, más harina necesitamos».', options: ['Cuanto', 'Cuantos', 'Cuantas'], answer: 1, why: '«Pedidos» es masculino plural: cuantos más pedidos.', en: 'The more online orders we get, the more flour we need.' },
            { prompt: 'Rosa: «Cuanto ___ es el horno, más pan cabe en cada tanda».', options: ['mayor', 'lo mayor', 'más mayor'], answer: 0, why: '«Mayor» ya es comparativo: nunca «más mayor». También vale «cuanto más grande».', en: 'The bigger the oven, the more bread fits in each batch.' },
            { prompt: '___ más levadura le pones, más rápido sube la masa.', options: ['Cuanto', 'Cuanta', 'Cuantas'], answer: 1, why: '«Levadura» es femenino singular: cuanta más levadura.', en: 'The more yeast you add, the faster the dough rises.' },
          ] },
        ] },
        { title: '¿Indicativo o subjuntivo? · Indicative or subjunctive?', mascot: '/brand/mascot/speaking.webp', coach: '¿Ya pasa o todavía no? Already true, or not yet?', blocks: [
          { kind: 'compare', title: 'El modo del primer miembro · The mood of the first part', columns: [
            { tone: 'blue', label: 'GENERAL O HABITUAL · indicativo', sentence: '[[Cuanto más practico|blue]], mejor me salen las hogazas.', idea: 'Es algo que pasa siempre o que ya has comprobado: indicativo.', en: 'Something generally true or already experienced: indicative.' },
            { tone: 'orange', label: 'FUTURO O HIPÓTESIS · subjuntivo', sentence: '[[Cuanto antes abramos|orange]], antes recuperaremos la inversión.', idea: 'Se refiere a algo futuro, todavía no realizado: presente de subjuntivo, igual que después de «cuando» (clase 98).', en: 'It refers to something future and not yet real: present subjunctive, exactly as after cuando.' },
          ] },
          { kind: 'concept', tone: 'orange', label: 'CUANTO + SUBJUNTIVO', question: '¿El primer miembro habla del futuro o de una hipótesis?', en: 'The cuanto clause behaves like a time clause with cuando: when it points to the future, it takes the subjunctive, never the future tense. The second part usually goes in the future, in the present, or is simply mejor / peor.', formula: ['Cuanto más / menos / antes + PRESENTE DE SUBJUNTIVO', ', más / mejor + futuro o presente'],
            meaning: 'Si el primer miembro mira al **futuro** o plantea una **hipótesis**, va en **subjuntivo**, nunca en futuro: «cuanto antes **llegues**», no «cuanto antes llegarás». El segundo miembro suele ir en futuro o en presente.',
            examples: [
              { es: '[[Cuanto antes llegues|orange]] mañana, mejor: el horno tarda una hora en calentarse.', en: 'The earlier you get here tomorrow, the better: the oven takes an hour to heat up.' },
              { es: '[[Cuantos más vecinos vengan|orange]] a la inauguración, más pan regalaremos.', en: 'The more neighbours come to the opening, the more bread we’ll give away.' },
              { es: '[[Cuanto menos toques|orange]] la masa esta noche, mejor fermentará.', en: 'The less you touch the dough tonight, the better it will ferment.' },
              { es: '[[Cuanto más practiques|orange]] el formado, más rápido te saldrá.', en: 'The more you practise shaping the loaves, the faster you’ll get.' },
            ],
            note: 'En un marco pasado el subjuntivo pasa al imperfecto (clase 130): «Rosa nos dijo que cuanto antes **empezáramos**, mejor». Para hábitos del pasado, indicativo: «cuanto más **amasaba**, más se cansaba».' },
          { kind: 'decide', title: '¿Qué modo en el primer miembro?', steps: [
            { q: '¿Hablas de algo general, habitual o ya ocurrido?', yes: '**Indicativo**: «cuanto más **leo**, más entiendo»; «cuanto más **amasaba**, más se cansaba».', no: 'next' },
            { q: '¿Hablas de algo futuro o hipotético desde ahora?', yes: '**Presente de subjuntivo**: «cuanto antes **llegues**, mejor».', no: 'Si el marco es pasado (dijo que…, pensaba que…): **imperfecto de subjuntivo**: «dijo que cuanto antes **llegara**, mejor».' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Mañana es la inauguración. Rosa: «Cuanto más temprano ___ el horno, menos estrés tendrás».', options: ['enciendes', 'enciendas', 'encenderás'], answer: 1, why: 'Habla de mañana: futuro → presente de subjuntivo. Nunca futuro después de «cuanto».', en: 'The earlier you light the oven, the less stressed you’ll be.' },
            { prompt: 'En general, cuantas más horas ___ la masa en la nevera, más sabor tiene.', options: ['pasa', 'pase', 'pasará'], answer: 0, why: '«En general»: una regla que siempre se cumple → indicativo, pasa.', en: 'As a rule, the more hours the dough spends in the fridge, the more flavour it has.' },
            { prompt: 'El año pasado, cuanto más ___ Lucía en la oficina, menos le gustaba.', options: ['trabajara', 'trabajaba', 'trabaje'], answer: 1, why: 'Hábito real del pasado → imperfecto de indicativo, trabajaba.', en: 'Last year, the more Lucía worked at the office, the less she liked it.' },
          ] },
        ] },
        { title: 'Variantes, progresión y errores · Variants, progression and mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: '¿Dos variables o una? Two variables or one?', blocks: [
          { kind: 'tip', icon: '🌎', title: 'Mientras más…, más…', text: 'En muchos países de América, sobre todo en la lengua hablada, es muy frecuente **mientras más…, más…**: «Mientras más practicas, más aprendes». También se oye en algunas zonas de España, aunque menos. Es una variante extendida y legítima; fíjate en que **mientras no cambia**: «mientras más clientes», «mientras más horas». En textos formales se prefiere **cuanto más**.', en: 'In many Latin American countries, especially in speech, mientras más…, más… is very common; it is also heard in some parts of Spain, though less. It is a widespread, legitimate variant, but mientras never agrees with the noun, and formal writing prefers cuanto más.' },
          { kind: 'compare', title: 'Proporción o progresión · Proportion or progression', columns: [
            { tone: 'teal', label: 'PROPORCIÓN · dos cosas', sentence: '[[Cuantos más clientes|teal]] vienen, más pan hacemos.', idea: 'Una cosa cambia porque cambia la otra.', en: 'One thing changes because the other one does: two linked variables.' },
            { tone: 'violet', label: 'PROGRESIÓN · una cosa en el tiempo', sentence: 'Vienen [[cada vez más|violet]] clientes.', idea: 'Una sola cosa aumenta o disminuye con el tiempo: cada vez más, cada vez menos, cada vez mejor.', en: 'A single thing keeps rising or falling over time: more and more, fewer and fewer, better and better.' },
          ] },
          { kind: 'mistakes', title: 'Errores frecuentes · Common mistakes', items: [
            { wrong: 'Cuanto más practicas, lo más aprendes.', right: 'Cuanto más practicas, más aprendes.', why: 'El segundo miembro no lleva artículo. (No article: «the more» is never «lo más» here.)' },
            { wrong: 'El más amasas, el más elástica queda.', right: 'Cuanto más amasas, más elástica queda.', why: 'Calco palabra por palabra de «the more…, the more…». En español: cuanto más…, más… (A word-for-word calque of English.)' },
            { wrong: 'Cuanto más clientes vienen, más pan necesitamos.', right: 'Cuantos más clientes vienen, más pan necesitamos.', why: 'Con un nombre, cuanto concuerda: cuantos más clientes. (Cuanto agrees with the noun.)' },
            { wrong: 'Cuanto antes llegarás, mejor.', right: 'Cuanto antes llegues, mejor.', why: 'Si el primer miembro habla del futuro, va en subjuntivo, como después de «cuando». (Future reference: subjunctive, not future.)' },
            { wrong: 'Cuanto más mejor es la harina, más caro es el pan.', right: 'Cuanto mejor es la harina, más caro es el pan.', why: '«Mejor» ya es comparativo: no lleva «más». (Mejor, peor, mayor and menor never take más.)' },
            { wrong: 'El pan me sale cada vez más mejor.', right: 'El pan me sale cada vez mejor.', why: 'Tampoco con cada vez: cada vez mejor, cada vez peor. (Better and better: cada vez mejor.)' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Desde que abrieron, ___ vienen más clientes por la mañana.', options: ['cada vez', 'mientras', 'cuanto'], answer: 0, why: 'Una sola cosa (los clientes) aumenta con el tiempo: cada vez más.', en: 'Since they opened, more and more customers have been coming in the morning.' },
            { prompt: 'Daniel, en una conversación informal. ¿Qué frase es correcta?', options: ['Mientras más pedidos tenemos, más contentos estamos.', 'Mientras que más pedidos tenemos, más contentos estamos.', 'Mientras más pedidos tenemos, lo más contentos estamos.'], answer: 0, why: 'Variante muy frecuente en América: mientras más…, más…, sin artículo y sin «que». «Mientras que» expresa contraste.', en: 'The more orders we have, the happier we are.' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno dice una cosa que, cuanto más hace, mejor le sale; una cosa que conviene hacer «cuanto antes»; y algo que en su vida pasa «cada vez más».' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'El taller de Rosa', coach: 'Toca cada expresión marcada. Tap each marked expression.',
      steps: [
        { title: 'Sábado en el taller · Saturday at the workshop', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Rosa y tu alumno es Lucía. Después tu alumno toca cada expresión marcada y explica la forma de «cuanto» y el modo del verbo.', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada: ¿cuanto concuerda con un nombre? ¿Indicativo o subjuntivo? (Agreement? Mood?)' } },
          { kind: 'explore', title: 'Cuantas más horas, más sabor', setting: 'Sábado, seis de la mañana. Lucía está en la panadería de Rosa, en Medellín, en la segunda clase del taller. Se tratan de tú. (Saturday, 6 a.m.: Lucía is at Rosa’s bakery for the second workshop session.)', lines: [
            { who: 'Rosa', text: 'Buenos días, Lucía. Toca esta masa: lleva dieciocho horas en la nevera. [[Cuantas más horas fermenta|teal]], más ácido y más profundo es el sabor.', en: 'Morning, Lucía. Feel this dough: it’s been in the fridge for eighteen hours. The more hours it ferments, the tangier and deeper the flavour.' },
            { who: 'Lucía', text: 'Huele increíble. Pero en mi casa la masa casi no sube. ¿Será la temperatura?', en: 'It smells amazing. But at home my dough barely rises. Could it be the temperature?' },
            { who: 'Rosa', text: 'Seguro. [[Cuanto más fría está la cocina|blue]], [[más despacio trabaja|blue]] la masa madre. No es malo: solo tienes que darle más tiempo.', en: 'Definitely. The colder the kitchen, the more slowly the starter works. That’s not bad: you just have to give it more time.' },
            { who: 'Lucía', text: 'Ya. Y cuando amaso a mano, [[cada vez se me pega más|violet]] a los dedos.', en: 'Right. And when I knead by hand, it sticks to my fingers more and more.' },
            { who: 'Rosa', text: 'Porque la tocas demasiado. [[Cuanto menos la toques|orange]] al principio, mejor. Mójate las manos y ten paciencia.', en: 'Because you handle it too much. The less you touch it at the start, the better. Wet your hands and be patient.' },
            { who: 'Lucía', text: 'Lo intentaré. Otra cosa: Daniel quiere abrir en tres semanas. Dice que [[cuanto antes abramos|orange]], antes recuperaremos lo que invertimos.', en: 'I’ll try. Another thing: Daniel wants to open in three weeks. He says the sooner we open, the sooner we’ll get back what we’ve invested.' },
            { who: 'Rosa', text: 'Tiene razón, pero no corras. [[Cuantos más panes hornees|teal]] ahora, en las pruebas, más segura te vas a sentir el primer día.', en: 'He’s right, but don’t rush. The more loaves you bake now, in the trial runs, the more confident you’ll feel on day one.' },
            { who: 'Lucía', text: 'Eso dice mi mamá: «[[Mientras más practicas|violet]], más aprendes».', en: 'That’s what my mum says: “The more you practise, the more you learn.”' },
            { who: 'Rosa', text: 'Así lo decimos aquí, sí. Y no hagas veinte tipos de pan: [[cuanto más sencilla sea|orange]] la carta al principio, menos pan se tira.', en: 'That’s how we say it here, yes. And don’t make twenty kinds of bread: the simpler the menu at the start, the less bread gets thrown away.' },
            { who: 'Lucía', text: 'Entonces, tres panes y nada más. ¿Y si viene muchísima gente el primer día?', en: 'So, three breads and nothing else. And what if loads of people come on the first day?' },
            { who: 'Rosa', text: '¡[[Cuantos más, mejor|teal]]! Y si el pan se acaba antes del mediodía, tranquila: la gente vuelve [[cada vez más temprano|violet]].', en: 'The more the merrier! And if the bread runs out before noon, don’t worry: people come back earlier and earlier.' },
          ], notes: {
            'Cuantas más horas fermenta': '«Horas» es femenino plural: cuantas más horas. Es una regla general del oficio → indicativo (fermenta).',
            'Cuanto más fría está la cocina': 'Cuanto + más + adjetivo: «cuanto» no cambia. Hecho general → indicativo. El sujeto (la cocina) va detrás del verbo.',
            'más despacio trabaja': 'Segundo miembro: más + adverbio + verbo, sin artículo. El sujeto, «la masa madre», va al final.',
            'cada vez se me pega más': 'Progresión de una sola cosa con el tiempo: cada vez… más. Aquí «más» va después del verbo; también se diría «se me pega cada vez más».',
            'Cuanto menos la toques': 'Consejo para la práctica futura de Lucía → subjuntivo. Como regla general también sería posible «cuanto menos la tocas, mejor».',
            'cuanto antes abramos': 'La apertura es futura: cuanto antes + presente de subjuntivo. El segundo miembro, en futuro (recuperaremos).',
            'Cuantos más panes hornees': '«Panes», masculino plural → cuantos. Las pruebas todavía están por hacer → subjuntivo.',
            'Mientras más practicas': 'Variante muy frecuente en Colombia y en otros países de América: «mientras» no concuerda y no lleva artículo. Refrán general → indicativo.',
            'cuanto más sencilla sea': 'Cuanto + más + adjetivo (invariable). La carta todavía no existe: hipótesis → subjuntivo (sea).',
            'Cuantos más, mejor': 'Fórmula fija sin verbo: «the more, the merrier». Cuantos concuerda con la gente que viene (plural).',
            'cada vez más temprano': 'Progresión en el tiempo: cada vez + más + adverbio.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Por qué la masa de Lucía sube poco en su casa?', options: ['Porque amasa muy poco.', 'Porque usa poca agua.', 'Porque su cocina está fría.'], answer: 2, why: '«Cuanto más fría está la cocina, más despacio trabaja la masa madre».', en: 'Why does Lucía’s dough hardly rise at home?' },
            { prompt: '¿Qué opina Rosa de abrir pronto?', options: ['Que Daniel tiene razón, pero antes Lucía debe hacer muchas pruebas.', 'Que Daniel se equivoca por completo.', 'Que es mejor abrir mañana mismo.'], answer: 0, why: '«Tiene razón, pero no corras. Cuantos más panes hornees ahora, en las pruebas…».', en: 'What does Rosa think about opening soon?' },
            { prompt: '¿Qué le aconseja Rosa sobre la carta?', options: ['Copiar su propia carta.', 'Empezar con pocos panes.', 'Ofrecer veinte tipos de pan.'], answer: 1, why: '«No hagas veinte tipos de pan: cuanto más sencilla sea la carta…, menos pan se tira».', en: 'What does Rosa advise about the menu?' },
          ] },
        ] },
        { title: 'Lucía llama a Daniel · Lucía calls Daniel', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'chat-fill', title: 'Esa noche · That night', lines: [
            { who: 'Lucía', text: 'Daniel, Rosa dice que ___ pruebas hagamos antes de abrir, mejor.', options: ['lo más', 'cuanto más', 'cuantas más'], answer: 2, why: '«Pruebas» es femenino plural: cuantas más pruebas.' },
            { who: 'Daniel', text: 'Sí, pero cuanto más ___ la apertura, más alquiler pagaremos sin vender nada.', options: ['retrasaríamos', 'retrasaremos', 'retrasemos'], answer: 2, why: 'Habla del futuro: subjuntivo en el primer miembro, nunca futuro ni condicional.' },
            { who: 'Lucía', text: 'Lo sé. Por cierto, la masa ya me sale ___: hoy hice tres hogazas perfectas.', options: ['cuanto mejor', 'cada vez mejor', 'cada vez más mejor'], answer: 1, why: 'Progresión en el tiempo: cada vez mejor. «Más mejor» no existe.' },
            { who: 'Daniel', text: '¡Qué bien! ¿Y cuántos tipos de pan vamos a vender?' },
            { who: 'Lucía', text: 'Tres. Rosa dice que cuanto más sencilla sea la carta, ___ pan se tira.', options: ['menos', 'cuanto menos', 'lo menos'], answer: 0, why: 'Segundo miembro: menos + nombre, sin artículo y sin repetir «cuanto».' },
            { who: 'Daniel', text: 'Perfecto. Y ___ más amigos traigamos a la inauguración, mejor, ¿no?', options: ['cuanto', 'cuantas', 'cuantos'], answer: 2, why: '«Amigos», masculino plural: cuantos más amigos.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: «¿Qué cosa haces cada vez mejor desde que empezaste?». Tu alumno responde con «cada vez» y añade una relación con «cuanto más…, más…».' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Concordancia y modo. Agreement and mood.',
      steps: [
        { title: 'La primera semana · The first week', blocks: [
          { kind: 'choice', items: [
            { context: 'Cartel en la panadería. (A sign in the bakery.)', prompt: '«Pan de masa madre: ___ más lento es el proceso, más fácil es de digerir».', options: ['cuanto', 'lo', 'mientras que'], answer: 0, why: 'Cuanto + más + adjetivo (lento): cuanto no cambia. «Lo» es el calco del inglés; «mientras que» contrasta.', en: 'Sourdough bread: the slower the process, the easier it is to digest.' },
            { context: 'Rosa, por teléfono, la noche antes de la primera hornada. (The night before the first bake.)', prompt: 'Cuanto antes ___ la masa en la nevera esta noche, más tiempo tendrá para fermentar.', options: ['meterás', 'metas', 'metes'], answer: 1, why: '«Esta noche» todavía no ha pasado: futuro → presente de subjuntivo, metas.', en: 'The sooner you put the dough in the fridge tonight, the more time it’ll have to ferment.' },
            { context: 'Daniel revisa las ventas. (Daniel goes over the sales.)', prompt: '___ más almojábanas vendemos, menos pan blanco nos piden.', options: ['Cuanto', 'Cuantas', 'Cuantos'], answer: 1, why: '«Almojábanas» es femenino plural: cuantas más almojábanas.', en: 'The more almojábanas (Colombian cheese rolls) we sell, the less white bread people ask for.' },
            { context: 'Lucía, al final de un día largo. (At the end of a long day.)', prompt: 'Cuanto más cansada ___, peor formo las hogazas.', options: ['estoy', 'estaré', 'esté'], answer: 0, why: 'Lucía describe lo que le pasa siempre: hecho habitual → indicativo, estoy.', en: 'The more tired I am, the worse I shape the loaves.' },
            { context: 'Rosa recuerda sus comienzos. (Rosa remembers her early days.)', prompt: 'Cuando empecé, cuantos más panes ___, más errores descubría.', options: ['hiciera', 'hago', 'hacía'], answer: 2, why: 'Hábito real del pasado → imperfecto de indicativo, hacía.', en: 'When I started out, the more loaves I made, the more mistakes I discovered.' },
          ] },
        ] },
        { title: '¿Qué modo pide? · Which mood?', blocks: [
          { kind: 'classify', title: 'Piensa en la forma que falta · Think of the missing form', categories: [
            { id: 'ind', label: 'INDICATIVO · general o habitual (cuanto más leo)', tone: 'blue' },
            { id: 'pres', label: 'PRESENTE DE SUBJUNTIVO · futuro o hipótesis (cuanto antes llegues)', tone: 'orange' },
            { id: 'imp', label: 'IMPERFECTO DE SUBJUNTIVO · futuro visto desde el pasado (dijo que cuanto antes llegara)', tone: 'violet' },
          ], items: [
            { text: 'Normalmente, cuanto más… (hacer calor), más rápido sube la masa.', answer: 'ind', why: 'Regla general: cuanto más calor hace.' },
            { text: 'La semana que viene, cuantos más pedidos… (llegar), más horas trabajaremos.', answer: 'pres', why: 'Futuro: cuantos más pedidos lleguen.' },
            { text: 'Rosa nos dijo que cuanto antes… (abrir nosotros), mejor.', answer: 'imp', why: 'Consejo futuro dentro de un marco pasado: cuanto antes abriéramos.' },
            { text: 'De niña, cuanto más… (leer Lucía), más quería aprender.', answer: 'ind', why: 'Hábito real del pasado: cuanto más leía.' },
            { text: 'Mañana, cuanto menos… (tocar tú) la masa, mejor quedará.', answer: 'pres', why: 'Futuro: cuanto menos la toques.' },
            { text: 'Daniel pensaba que cuantos más clientes… (venir), más ganarían.', answer: 'imp', why: 'Futuro visto desde el pasado (ganarían): cuantos más clientes vinieran.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Cuanto más gente viene los sábados, más pan horneamos.', ok: false, options: ['Cuantas más gente viene los sábados, más pan horneamos.', 'Cuanta más gente viene los sábados, más pan horneamos.', 'Cuanto más gente vienen los sábados, más pan horneamos.'], answer: 1, why: '«Gente» es femenino singular: cuanta más gente, y el verbo en singular (viene).' },
            { sentence: 'Cuanto antes nos digas cuántas hogazas quieres, antes te las preparamos.', ok: true, why: 'Correcta: petición futura → subjuntivo (digas); el presente «preparamos» tiene aquí valor de futuro.' },
            { sentence: 'Cuanto más temprano abriremos, más clientes tendremos.', ok: false, options: ['Cuanto más temprano abramos, más clientes tendremos.', 'Cuanto más temprano abriríamos, más clientes tendremos.', 'Cuanto más temprano abrimos, lo más clientes tendremos.'], answer: 0, why: 'Primer miembro con valor futuro: presente de subjuntivo, abramos. Nunca futuro ni condicional.' },
            { sentence: 'El más hidratada está la masa, el más grandes salen los alveolos.', ok: false, options: ['Cuanto más hidratada está la masa, los más grandes salen los alveolos.', 'Cuanto más hidratada está la masa, más grandes salen los alveolos.', 'Lo más hidratada está la masa, lo más grandes salen los alveolos.'], answer: 1, why: 'Calco del inglés «the more…, the more…»: cuanto más…, más…, sin artículos.' },
            { sentence: 'Desde que bajamos los precios, vienen cada vez más estudiantes.', ok: true, why: 'Correcta: una sola cosa aumenta con el tiempo → cada vez más.' },
            { sentence: 'Cuanto más mayor es la pieza, más tarda en hornearse.', ok: false, options: ['Cuanta mayor es la pieza, más tarda en hornearse.', 'Cuanto mayor es la pieza, más tarda en hornearse.', 'Cuanto más mayor es la pieza, lo más tarda en hornearse.'], answer: 1, why: '«Mayor» ya es comparativo: cuanto mayor (o cuanto más grande). Con adjetivo, cuanto no concuerda.' },
          ] },
        ] },
        { title: 'Mensajes antes de abrir · Messages before opening', blocks: [
          { kind: 'chat-fill', title: 'Lucía y Rosa, la víspera · The night before', lines: [
            { who: 'Lucía', text: 'Rosa, mañana abrimos. Estoy nerviosa: cuanto más lo ___, peor.', options: ['pensaré', 'piense', 'pienso'], answer: 2, why: 'Lucía describe lo que le pasa ahora mismo, siempre que lo piensa: indicativo, pienso.' },
            { who: 'Rosa', text: 'Es normal. Pero ___ duermas esta noche, mejor estarás mañana.', options: ['cuanto más', 'lo más', 'mientras que'], answer: 0, why: 'Proporción con un verbo: cuanto más + subjuntivo (futuro).' },
            { who: 'Lucía', text: 'Sí. ¿Y a qué hora enciendo el horno? ¿A las cuatro?' },
            { who: 'Rosa', text: 'A las cuatro está bien. Cuanto antes ___ caliente, más hornadas podrás hacer.', options: ['esté', 'está', 'estará'], answer: 0, why: 'Mañana todavía no ha llegado: futuro → presente de subjuntivo, esté.' },
            { who: 'Lucía', text: 'Daniel ha invitado a medio barrio. ¿Hago más pan, por si acaso?' },
            { who: 'Rosa', text: 'Claro. ___ más vecinos vengan, más pan vas a necesitar.', options: ['Lo', 'Cuantos', 'Cuanto'], answer: 1, why: '«Vecinos», masculino plural: cuantos más vecinos.' },
            { who: 'Lucía', text: 'Gracias. Esta semana, la verdad, la masa me sale ___.', options: ['cada vez mejor', 'cuanto mejor', 'cada vez más mejor'], answer: 0, why: 'Progresión en el tiempo: cada vez mejor, sin «más».' },
            { who: 'Rosa', text: 'Se nota. Y si algo sale mal, tranquila: ___ errores cometas al principio, más aprenderás.', options: ['cuantas más', 'cuantos más', 'cuanto más'], answer: 1, why: '«Errores», masculino plural: cuantos más errores.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['Cuanto', 'más', 'practicas,', 'mejor', 'te', 'sale', 'el', 'pan'], accept: ['Cuanto más practicas, mejor te sale el pan', 'Cuanto más practicas, el pan te sale mejor'], en: 'The more you practise, the better your bread turns out.' },
            { tiles: ['Cuantas', 'más', 'horas', 'fermenta,', 'más', 'sabor', 'tiene'], accept: ['Cuantas más horas fermenta, más sabor tiene'], en: 'The more hours it ferments, the more flavour it has.' },
            { tiles: ['Cuanto', 'antes', 'lleguen', 'los', 'pedidos,', 'mejor'], accept: ['Cuanto antes lleguen los pedidos, mejor'], en: 'The sooner the orders arrive, the better.' },
          ] },
        ] },
        { title: 'Reformula · Rephrase', blocks: [
          { kind: 'rewrite', title: 'Con otra estructura · With another structure', items: [
            { prompt: 'Rosa: «Si practicas mucho, aprendes mucho. Si practicas poco, aprendes poco».', instruction: 'Une las dos ideas como regla general. Empieza: «Cuanto más…».', accept: ['Cuanto más practicas, más aprendes', 'Cuanto más practicas tú, más aprendes'] },
            { prompt: 'Daniel: «Si llegan muchos pedidos, vamos a necesitar mucha harina. Si llegan pocos, poca».', instruction: 'Une las ideas hablando del futuro. Empieza: «Cuantos más pedidos…».', accept: ['Cuantos más pedidos lleguen, más harina necesitaremos', 'Cuantos más pedidos lleguen, más harina vamos a necesitar', 'Cuantos más pedidos nos lleguen, más harina necesitaremos', 'Cuantos más pedidos nos lleguen, más harina vamos a necesitar', 'Cuantos más pedidos lleguen, más harina necesitamos'] },
            { prompt: 'Lucía: «Cada día que pasa, la masa me sale mejor».', instruction: 'Dilo con «cada vez». Empieza: «La masa me sale…».', accept: ['La masa me sale cada vez mejor'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno cuenta algo de su semana con «cuanto más…, más…» y un plan con «cuanto antes…, mejor».' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Un audio de Rosa', coach: 'Primero la idea, después los detalles. Gist first, then details.',
      steps: [
        { title: 'Nota de voz de Rosa · Rosa’s voice note', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general. Segunda escucha: tu alumno anota cada «cuanto», «mientras más» y «cada vez» con el verbo que los sigue. Después, las preguntas.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Anota cada «cuanto», «mientras más» y «cada vez» con su verbo. (Listen once for the gist and once for the details.)' } },
          { kind: 'listen', title: 'Un audio de Rosa', channel: 'NOTA DE VOZ · DE ROSA PARA LUCÍA', src: '/audio/grammar-live/455.mp3',
            before: 'Lucía ya lleva una semana abierta y le mandó a Rosa un audio con dos problemas: el pan sale muy ácido y se acaba antes de las once. ¿Qué crees que le aconseja Rosa? (After the first week, Lucía has told Rosa about two problems. What do you think Rosa advises?)',
            gist: { prompt: '¿Para qué manda Rosa este audio? · Why does Rosa send this voice note?', options: ['Para responder a las dudas de Lucía sobre la primera semana.', 'Para invitar a Lucía a trabajar en su panadería.', 'Para quejarse del pan de Lucía.'], answer: 0, why: 'Contesta a los dos problemas (pan ácido, pan que se acaba) y añade un consejo y una petición.', en: 'She answers Lucía’s questions about the first week.' },
            details: [
              { prompt: '¿Por qué sale tan ácido el pan de Lucía?', options: ['Porque el horno está muy caliente.', 'Porque usa demasiada harina.', 'Porque la masa pasa demasiadas horas en la nevera.'], answer: 2, why: '«Cuantas más horas pasa la masa en frío, más ácido sale».', en: 'Why is Lucía’s bread so sour?' },
              { prompt: '¿Qué pasaba en la panadería de Rosa cuando el pan se acababa pronto?', options: ['Los clientes se enojaban y no volvían.', 'Rosa cerraba más temprano.', 'Más gente volvía al día siguiente.'], answer: 2, why: '«Cuanto antes se acababa el pan, más gente volvía al día siguiente».', en: 'What used to happen at Rosa’s bakery when the bread sold out early?' },
              { prompt: '¿Qué le aconseja sobre la producción?', options: ['No cambiar nada.', 'Aumentarla poco a poco.', 'Hacer el doble de pan desde mañana.'], answer: 1, why: '«No hagas el doble de golpe. Sube poquito a poco».', en: 'What does she advise about production?' },
              { prompt: '¿Para qué quiere Rosa saber cuántos clientes tuvo Lucía el sábado?', options: ['Para ayudarla con los números de diciembre.', 'Para publicarlo en internet.', 'Para compararlos con los suyos.'], answer: 0, why: '«Cuanto antes la tenga, antes te ayudo con los números para diciembre».', en: 'Why does Rosa want to know how many customers Lucía had on Saturday?' },
            ],
            transcript: 'Hola, Lucía, soy Rosa. Acabo de oír tu audio y te contesto rapidito antes de volver al horno. Primero, lo del pan tan ácido: es por la nevera. [[Cuantas más horas pasa|teal]] la masa en frío, más ácido sale; prueba con doce horas en lugar de veinte. Segundo, lo de que se te acaba todo antes de las once: eso es buena señal. Cuando yo empecé me pasaba igual, y [[cuanto antes se acababa|blue]] el pan, más gente volvía al día siguiente, porque ya sabían que tenían que madrugar. Eso sí, no hagas el doble de golpe. Sube poquito a poco: [[cuanto más estable sea|orange]] la producción, menos pan vas a tirar. Y tercero, descansa. Ya sé que [[cada vez tienes más trabajo|violet]], pero como dice mi mamá, [[mientras más cansada estés|violet]], más errores vas a cometer. Ah, y mándame la cuenta de los clientes del sábado: [[cuanto antes la tenga|orange]], antes te ayudo con los números para diciembre. Un abrazo, y felicitaciones: ¡en el barrio ya hablan de tu pan!',
            reply: { teacher: 'Tú eres Rosa. Tu alumno es Lucía y le contesta con otro audio: dice qué va a cambiar con la nevera y con la producción, y le promete la cuenta del sábado con «cuanto antes…».', self: 'Contesta a Rosa como Lucía, en voz alta: qué vas a cambiar, cómo vas a organizar la producción y cuándo le mandas la cuenta. Usa «cuanto más…» y «cuanto antes…». (Reply to Rosa as Lucía.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Cuanto más, mejor', coach: 'Relaciona y explica. Link two changes and explain.',
      steps: [
        { title: 'Causas y proporciones · Causes and proportions', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas y tu alumno habla de su vida real. Si dice «lo más», olvida la concordancia o usa futuro después de «cuanto», tú repites la frase con la forma correcta y sigues con la repregunta.', self: 'Lee cada pregunta y responde en voz alta con ejemplos reales. Antes de cada verbo piensa: ¿algo general o algo futuro? (Answer aloud; general fact or future?)' } },
          { kind: 'talk', cards: [
            { q: 'Algo que, cuanto más haces, mejor te sale: un deporte, cocinar, un idioma. · Something you get better at the more you do it.', followUps: ['¿Desde cuándo lo haces?', '¿Hay algo que, cuanto más practicas, peor te sale? (Anything that gets worse with practice?)'], phrases: ['[[Cuanto más lo practico|blue]], mejor…', '[[Cuantas más horas|teal]] le dedico…', 'Me sale [[cada vez mejor|violet]]…'], hint: 'Algo general o habitual → indicativo: cuanto más practico.', example: 'Cuanto más cocino, mejor me salen las salsas. Al principio todo se me quemaba, pero ahora me sale cada vez mejor. Eso sí, cuantas más personas invito, más nervioso me pongo.', next: 'Ahora, tus planes.' },
            { q: 'Algo que tienes que hacer pronto: cuanto antes, mejor. · Something you should do as soon as possible.', followUps: ['¿Por qué no lo has hecho todavía?', '¿Qué pasará si lo dejas para más tarde?'], phrases: ['[[Cuanto antes lo haga|orange]], mejor…', '[[Cuanto más lo retrase|orange]], más difícil será…', 'Me dijeron que [[cuanto antes empezara|orange]]…'], hint: 'Futuro → subjuntivo en el primer miembro: cuanto antes empiece.', example: 'Tengo que renovar el pasaporte. Cuanto antes lo haga, mejor, porque en verano hay muchísima gente. Y cuanto más lo retrase, más difícil será conseguir cita.', next: 'Ahora, tu ciudad.' },
            { q: 'Tu ciudad o tu trabajo: ¿qué cambia cada vez más? · What keeps changing in your city or at work?', followUps: ['¿Es un cambio bueno o malo?', '¿Qué lo causa? Busca un «cuanto más…, más…». (Find a proportional cause.)'], phrases: ['Hay [[cada vez más|violet]]…', 'Hay [[cada vez menos|violet]]…', '[[Cuantos más turistas|teal]] vienen, más…'], hint: 'Una cosa en el tiempo: cada vez más. Dos cosas unidas: cuanto más…, más…', example: 'En mi barrio hay cada vez más cafés y cada vez menos tiendas de toda la vida. Cuantos más turistas vienen, más suben los alquileres, y muchos vecinos se van.' },
            { q: 'Eres Rosa. Lucía te pide tres consejos para la primera semana. · You are Rosa: give Lucía three tips.', followUps: ['¿Y si se le acaba el pan muy pronto?', '¿Y si necesita contratar a alguien?'], phrases: ['[[Cuanto menos te preocupes|orange]], mejor…', '[[Cuantos más clientes|teal]] vengan, más…', '[[Cuanto más sencilla sea|orange]] la carta…'], hint: 'Consejos para el futuro: cuanto + subjuntivo; el segundo miembro en futuro o «mejor».', example: 'Lucía, cuanto menos te preocupes, mejor vas a trabajar. Cuantos más clientes vengan, más tendrás que organizarte, así que prepara las masas la noche anterior. Y cuanto más sencilla sea la carta, menos pan tirarás.', teacher: 'Tú haces de Lucía y preguntas detalles: «¿Y si me equivoco con la temperatura?». Tu alumno responde como Rosa con «cuanto» + subjuntivo.' },
            { q: 'Un refrán o una frase de tu familia con «cuanto más» o «mientras más». · A saying from your family.', followUps: ['¿Estás de acuerdo?', '¿Hay un refrán parecido en tu idioma? (A similar saying in your language?)'], phrases: ['Mi abuela decía que [[cuanto más tienes|blue]]…', 'En mi país se dice «[[mientras más|violet]]…»', '«[[Cuantos más, mejor|teal]]»'], hint: 'Un refrán es una verdad general: indicativo, aunque lo cuentes en pasado («decía que cuanto más tienes, más quieres»).', example: 'Mi abuelo decía que cuanto más tienes, más quieres, y creo que tenía razón. En inglés se dice «the more, the merrier», que en español sería «cuantos más, mejor».' },
            { q: 'Algo que, cuanto más lo intentas, peor sale. · Something that gets worse the harder you try.', followUps: ['¿Por qué crees que pasa?', '¿Qué haces ahora de otra manera?'], phrases: ['[[Cuanto más lo intento|blue]], peor…', '[[Cuanto menos lo pienso|blue]], mejor…', '[[Cuanto más nervioso estoy|blue]]…'], hint: 'Hecho habitual → indicativo; combina más con peor, menos con mejor.', example: 'Con el sueño me pasa: cuanto más intento dormirme, más despierto estoy. Ahora leo un rato y, cuanto menos lo pienso, antes me duermo.' },
          ], swap: { teacher: 'Al final cambian los papeles: tu alumno hace las preguntas y tú respondes con algún error a propósito («Cuanto más practico, lo más aprendo», «Cuanto antes llegarás, mejor»). Tu alumno lo detecta y lo corrige.', self: 'Ahora haz tú las preguntas en voz alta y respóndelas con otra experiencia. (Now ask the questions aloud and answer with a different experience.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Un correo a Daniel', coach: 'Explica, propone y pide. Explain, propose, request.',
      steps: [
        { title: 'Lo que me enseñó Rosa · What Rosa taught me', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos cada «cuanto»: ¿concuerda con un nombre? ¿El verbo va en indicativo o en subjuntivo? Después tu alumno lee el correo en voz alta.', self: 'Escribe tu correo y toca «Revisar mi texto». Después repasa cada «cuanto»: ¿concuerda con el nombre? ¿General (indicativo) o futuro (subjuntivo)? (Check agreement and mood.)' } },
          { kind: 'write', title: 'Nuestro plan para el primer mes · Our plan for the first month', situation: 'Eres Lucía (o eres tú, con un proyecto o un hábito real). Le escribes a Daniel, que está en Bogotá viendo hornos para la panadería, para resumirle lo que aprendiste con Rosa y proponerle un plan para el primer mes. (You are Lucía, or yourself with a real project. Write to Daniel, who is in Bogotá looking at ovens, to sum up what you learned from Rosa and propose a plan for the first month.)', task: [
              'Explica dos relaciones generales con cuanto más / menos…, más / menos… en indicativo. (Two general proportional relationships.)',
              'Usa al menos una vez cuanto con un nombre y la concordancia correcta: cuantos más clientes, cuantas más horas… (Agreement with a noun.)',
              'Propón algo para el futuro con cuanto + subjuntivo: cuanto antes…, mejor. (A proposal with the subjunctive.)',
              'Describe un cambio con cada vez más / menos / mejor. (A change over time.)',
              'Cierra con una petición concreta. (Close with a concrete request.)',
            ], starters: ['Hola, Daniel:', 'Te escribo para contarte…', 'Lo primero es…', 'Cuanto más… , más…', 'Cuantas más horas…', 'Mi propuesta es…', 'Cuanto antes…, mejor', 'Cada vez…', '¿Me mandas…?'],
            words: ['cuanto más', 'cuanto menos', 'cuantos más', 'cuantas más', 'cuanto antes', 'cuanto mayor', 'mejor', 'peor', 'cada vez más', 'cada vez mejor', 'mientras más'],
            model: 'Hola, Daniel: Te escribo para contarte lo que me enseñó Rosa esta semana, porque cambia bastante nuestro plan. Lo primero es la temperatura: [[cuanto más fría está|blue]] la cocina, más despacio trabaja la masa madre, así que en el local vamos a necesitar una cámara de fermentación. Lo segundo es el tiempo: [[cuantas más horas pasa|teal]] la masa en la nevera, más ácido sale el pan, y a la gente del barrio le gusta suave. La buena noticia es que el pan me sale [[cada vez mejor|violet]]: esta semana no se me quemó ni una hogaza. Mi propuesta para el primer mes es sencilla: tres panes y nada más, porque [[cuanto más sencilla sea|orange]] la carta, menos pan tiraremos. Y [[cuanto antes compres|orange]] el horno, antes podremos hacer pruebas en el local. ¿Me mandas fotos de los dos modelos que viste antes del viernes? Un abrazo, Lucía.',
            minWords: 130,
            checks: [
              { label: 'Una comparativa proporcional (cuanto más…, cuanto antes…, mientras más…)', pattern: '(?<!\\p{L})(?:cuant[oa]s?|mientras)\\s+(?:más|menos|antes|mejor|peor|mayor|menor)(?!\\p{L})', tip: 'Relaciona dos cambios: «cuanto más fría está la cocina, más despacio sube la masa».' },
              { label: 'Un cambio en el tiempo (cada vez más, cada vez mejor…)', pattern: '(?<!\\p{L})cada\\s+vez\\s+(?:más|menos|mejor|peor)(?!\\p{L})', tip: 'Describe una progresión: «el pan me sale cada vez mejor».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})cuant[oa]s?\\s+(?:más|menos)[^.,;:]*,\\s*(?:lo|el|la|los|las)\\s+(?:más|menos)(?!\\p{L})', why: 'El segundo miembro no lleva artículo: «cuanto más practicas, **más** aprendes».' },
              { pattern: '(?<!\\p{L})cuanto\\s+(?:más|menos)\\s+(?:clientes|panes|horas|personas|pedidos|cosas|veces|gente|harina|agua|vecinos|pruebas)(?!\\p{L})', why: 'Con un nombre, cuanto concuerda: «cuant**os** más clientes», «cuant**as** más horas», «cuant**a** más gente».' },
              { pattern: '(?<!\\p{L})cuant[oa]s?\\s+(?:más|menos|antes)\\s+(?:\\p{L}+\\s+){0,2}?\\p{L}+(?:ré|rás|rá|remos|réis|rán)(?!\\p{L})', why: 'Si el primer miembro habla del futuro, usa subjuntivo: «cuanto antes **compres**», no «cuanto antes comprarás».' },
              { pattern: '(?<!\\p{L})(?:más\\s+mejor|más\\s+peor|más\\s+mayor|más\\s+menor)(?!\\p{L})', why: '«Mejor», «peor», «mayor» y «menor» ya son comparativos: «cuanto **mejor**», «cada vez **mejor**».' },
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
            { tone: 'blue', label: 'GENERAL O HABITUAL', formula: 'cuanto más / menos + indicativo, más / menos / mejor / peor…', example: 'Cuanto más practico, mejor me sale.', caption: 'sin artículo, sin «que»', en: 'a general or habitual link between two changes: indicative; no article, no que' },
            { tone: 'orange', label: 'FUTURO O HIPÓTESIS', formula: 'cuanto antes / más + presente de subjuntivo', example: 'Cuanto antes llegues, mejor.', caption: 'como tras «cuando»; en marco pasado, imperfecto', en: 'future or hypothetical: present subjunctive, never the future tense; imperfect subjunctive in a past frame' },
            { tone: 'teal', label: 'CON NOMBRE', formula: 'cuanto · cuanta · cuantos · cuantas + más / menos + nombre', example: 'Cuantas más horas fermenta, más sabor tiene.', caption: 'con verbo o adjetivo, cuanto no cambia', en: 'cuanto agrees with a following noun; before a verb, adjective or adverb it is invariable; cuanto mayor, cuanto antes (no más)' },
            { tone: 'violet', label: 'VARIANTE Y PROGRESIÓN', formula: 'mientras más…, más… · cada vez más / menos / mejor', example: 'Vienen cada vez más clientes.', caption: 'mientras no concuerda; cada vez = una sola cosa en el tiempo', en: 'mientras más is a widespread Latin American variant (invariable); cada vez más describes one thing changing over time' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: '«The more…, the more…» nunca es «lo más…, lo más…» ni «el más…, el más…»: es **cuanto más…, más…**. Si después de más o menos hay un nombre, **cuanto concuerda** (cuantas más horas). Y mira el tiempo: algo general o pasado → **indicativo** (cuanto más leo); algo futuro → **subjuntivo** (cuanto antes llegues).', en: '“The more…, the more…” is never lo más or el más in Spanish: it is cuanto más…, más… If a noun follows más or menos, cuanto agrees with it. And check the time reference: general or past, indicative; future, subjunctive.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'Cuanto ___ es el riesgo, mayor puede ser la ganancia.', options: ['más mayor', 'el mayor', 'mayor'], answer: 2, why: '«Mayor» ya es comparativo y no lleva artículo: cuanto mayor.', en: 'The greater the risk, the bigger the potential gain.' },
            { prompt: '___ más personas firmen la carta, más fuerza tendrá.', options: ['Cuanto', 'Cuantas', 'Cuantos'], answer: 1, why: '«Personas», femenino plural: cuantas más personas. Futuro → subjuntivo (firmen).', en: 'The more people sign the letter, the more weight it will carry.' },
            { prompt: 'Cuanto antes me ___ la respuesta, antes podré reservar.', options: ['des', 'das', 'darás'], answer: 0, why: 'La respuesta es futura: presente de subjuntivo, des.', en: 'The sooner you give me an answer, the sooner I can book.' },
            { prompt: 'Cuanto más leo sobre el tema, ___ entiendo.', options: ['menos', 'lo menos', 'el menos'], answer: 0, why: 'Segundo miembro sin artículo: menos entiendo.', en: 'The more I read about the subject, the less I understand.' },
            { prompt: 'Con los años, mi abuela oye ___.', options: ['mientras menos', 'cuanto menos', 'cada vez menos'], answer: 2, why: 'Una sola cosa que disminuye con el tiempo: cada vez menos.', en: 'As the years go by, my grandmother hears less and less.' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Ahora, un coro. Now, a choir.', blocks: [
          { kind: 'lead', text: 'Elena Ruiz dirige un coro de vecinos y prepara el concierto de Navidad. Transforma lo que dice con la estructura que pide cada frase.', en: 'Elena Ruiz conducts a neighbourhood choir and is preparing the Christmas concert. Transform what she says using the structure each sentence asks for.' },
          { kind: 'rewrite', title: 'El coro de Elena · Elena’s choir', items: [
            { prompt: 'Elena: «Si ensayamos mucho estas semanas, cantaremos bien en el concierto. Si ensayamos poco, cantaremos mal».', instruction: 'Únelo hablando del futuro. Empieza: «Cuanto más…».', accept: ['Cuanto más ensayemos, mejor cantaremos', 'Cuanto más ensayemos, mejor vamos a cantar', 'Cuanto más ensayemos estas semanas, mejor cantaremos', 'Cuanto más ensayemos, mejor cantaremos en el concierto', 'Cuanto más ensayemos estas semanas, mejor cantaremos en el concierto'] },
            { prompt: 'Elena: «Necesito saber pronto quién viene al concierto. Es importante».', instruction: 'Dilo con «cuanto antes…, mejor» y el verbo saber. Empieza: «Cuanto antes…».', accept: ['Cuanto antes lo sepa, mejor', 'Cuanto antes sepa quién viene, mejor', 'Cuanto antes sepa quién viene al concierto, mejor', 'Cuanto antes lo sepa yo, mejor'] },
            { prompt: 'Mes a mes, el coro tiene más miembros.', instruction: 'Dilo con «cada vez». Empieza: «El coro tiene…».', accept: ['El coro tiene cada vez más miembros'] },
          ] },
        ] },
        { title: 'Ampliación · Registro formal y matices · Extension: formal register', mascot: '/brand/mascot/portrait.webp', coach: 'Opcional. Optional.', blocks: [
          { kind: 'lead', text: 'Para estudiantes fuertes o si queda tiempo: variantes formales de la estructura y una vista previa de C1.', en: 'For strong students or spare time: formal variants of the structure and a preview of C1.' },
          { kind: 'choice', title: 'Matices y registro · Nuance and register', items: [
            { prompt: '«Cuanto más se acerca la fecha, tanto más nervioso está el director.» ¿Qué aporta «tanto»?', options: ['Es una variante formal o enfática del segundo miembro; el sentido no cambia.', 'Cambia el sentido: ya no hay proporción.', 'Es un error: sobra «tanto».'], answer: 0, why: '«Cuanto…, tanto más…» es correcta y más formal o enfática que «cuanto…, más…».', en: 'Tanto más in the second part is a formal, emphatic option; the meaning stays the same.' },
            { prompt: 'Vista previa de C1: «La decisión es tanto más grave cuanto que afecta a todos los vecinos». ¿Qué significa?', options: ['Es aún más grave, precisamente porque afecta a todos.', 'Es grave solo si afecta a todos.', 'Es menos grave de lo que parece.'], answer: 0, why: '«Tanto más… cuanto que» = «aún más…, porque…»: une intensidad y causa. Es propio del registro formal escrito.', en: 'Tanto más… cuanto que means “all the more… because / since”: formal written register.' },
            { prompt: '«A medida que avanza la noche, baja la temperatura.» ¿En qué se diferencia de «cuanto más…, más…»?', options: ['Solo se usa en pasado.', 'Presenta dos procesos que avanzan en paralelo, sin comparar grados con más o menos.', 'Es incorrecta: hay que decir «cuanto más avanza».'], answer: 1, why: '«A medida que» une dos procesos simultáneos (as…); con futuro también pide subjuntivo: «a medida que lleguen».', en: 'A medida que links two processes developing side by side, like English “as”.' },
            { prompt: '«Si al final viene también tu hermana, tanto mejor.» ¿Qué significa «tanto mejor»?', options: ['Mucho peor.', 'Mejor todavía.', 'Igual de bien.'], answer: 1, why: '«Tanto mejor» = así es aún mejor (so much the better). Su contrario es «tanto peor».', en: 'Tanto mejor means “so much the better”.' },
          ] },
          { kind: 'teacher', text: 'Paso opcional: solo si queda tiempo o para estudiantes fuertes. Tu alumno escribe una frase formal con «cuanto…, tanto más…» sobre un tema de actualidad y la reformula en registro coloquial con «mientras más…» o «cuanto más…».' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 156 · Conectores de concesión y objeción', text: 'Ya relacionas dos cambios con «cuanto más…, más…», haces la concordancia con los nombres y eliges el modo según hables de algo general o futuro. En la clase 156 trabajas los conectores de concesión y objeción, como «no obstante»: es el paso natural, porque al argumentar no basta con decir que una cosa crece con otra; también hay que reconocer un problema y mantener tu postura a pesar de él.', en: 'You can now link two changes with cuanto más…, más…, make cuanto agree with nouns and choose the mood for general or future situations. Class 156 covers connectors of concession and objection, such as no obstante: the natural next step, because arguing well means not only showing how one thing grows with another, but also acknowledging a problem and holding your position despite it.', href: '/gramatica/conectores-de-concesion-y-objecion', label: 'Ir a la clase 156' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Por qué decimos “cuantas más horas” pero “cuanto más fría”, y “cuanto más leo” pero “cuanto antes llegues”?». Respuesta esperada: concordancia solo con nombres; indicativo para lo general, subjuntivo para lo futuro. Tarea: el correo de Escribir sobre un proyecto real.' },
        ] },
      ],
    },
  ],
};
