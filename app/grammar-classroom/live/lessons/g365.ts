import type { LiveLesson } from '../types';

/**
 * Lesson 365 · A2 · Posición de pronombres con infinitivo e imperativo (course unit G065).
 * One scene runs through the class: Irene Salas leaves tomorrow on a one-week
 * work trip. Her neighbour Mateo Ruiz looks after her apartment: the plants,
 * the cat Nube, the balcony window, the post. Irene gives him instructions the
 * evening before; later she phones him and sends a voice message from the hotel
 * (Mexican voice, tú). Content: pronoun after and attached with the affirmative
 * imperative (riégalas, llámame, dímelo, hazlo), before with «no» and a
 * conjugated verb (no las riegues, las riego), two correct positions with
 * periphrasis (las voy a regar = voy a regarlas; lo estoy buscando = estoy
 * buscándolo), attached to a lone infinitive (para regarlas), and the written
 * accent when the word becomes esdrújula (cómpralo, dímelo, haciéndolo, but
 * dime, ponlo, comprarlo). Irregular tú (di, haz, pon, ten, sal), usted
 * (dígamelo, póngalo) and, receptively, vosotros (sentaos, idos) and vos
 * (compralo). Mistakes: *no riégalas, *voy a lo comprar, *lo voy a comprarlo,
 * *haciendolo, *dimelo. Builds on G042, G063, G064 (pronouns) and G058/G059.
 */
export const lesson: LiveLesson = {
  id: 365,
  level: 'A2',
  title: 'Posición de pronombres con infinitivo e imperativo',
  subtitle: 'Dar instrucciones y hablar de planes con pronombres en su sitio: riégalas, no las riegues, las voy a regar o voy a regarlas.',
  legend: [
    { tone: 'blue', label: 'ANTES · separado: no las riegues, las riego (before the verb)' },
    { tone: 'orange', label: 'PEGADO · detrás: riégalas, llámame, para regarlas (attached at the end)' },
    { tone: 'teal', label: 'LAS DOS · perífrasis: las voy a regar = voy a regarlas (both positions)' },
  ],
  optionNotes: {
    'Voy a lo comprar.': 'Nunca en el medio de la perífrasis: **lo voy a comprar** o **voy a comprarlo**.',
    'Lo voy a comprarlo.': 'Un solo pronombre, una sola vez: **lo voy a comprar** o **voy a comprarlo**.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: '¿Dónde va el pronombre?', coach: 'Antes, pegado o las dos. Before, attached, or both.',
      steps: [
        { title: 'Las llaves de Irene · Irene’s keys', blocks: [
          { kind: 'lead', text: 'Irene Salas se va mañana una semana de viaje de trabajo. Su vecino, Mateo Ruiz, va a cuidar su apartamento: las plantas, la gata Nube y el correo. Esta noche Irene le da instrucciones. Hoy aprendes **dónde va el pronombre** (lo, la, las, me, te…) con el imperativo, el infinitivo y el gerundio.', en: 'Irene Salas is leaving tomorrow on a one-week work trip. Her neighbour, Mateo Ruiz, is going to look after her apartment: the plants, Nube the cat and the post. Tonight Irene gives him instructions. Today you learn where the pronoun goes with the imperative, the infinitive and the gerund.' },
          { kind: 'guide', text: { teacher: 'Tú lees las tres frases de Irene y tu alumno repite. Después tu alumno dice dónde está «las» en cada frase: ¿antes o detrás del verbo?', self: 'Lee las tres frases en voz alta. ¿Dónde está «las» en cada una: antes o detrás del verbo? (Where is “las”: before or after the verb?)' } },
          { kind: 'compare', title: 'Las plantas: tres frases · The plants: three sentences', columns: [
            { tone: 'orange', label: 'ORDEN AFIRMATIVA · pegado', sentence: '[[Riégalas|orange]] cada dos días.', idea: 'Imperativo afirmativo: el pronombre va detrás, pegado. Una sola palabra.', en: 'Water them every two days.' },
            { tone: 'blue', label: 'ORDEN NEGATIVA · antes', sentence: '[[No las riegues|blue]] mucho.', idea: 'Con «no», el pronombre va antes del verbo, separado.', en: 'Don’t water them too much.' },
            { tone: 'teal', label: 'PERÍFRASIS · las dos', sentence: '[[Las tienes que regar|teal]] = [[Tienes que regarlas|teal]].', idea: 'Dos verbos juntos: antes del primero o pegado al infinitivo.', en: 'You have to water them (both orders are correct).' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'En «Riégalas», el pronombre «las» va…', options: ['en el medio de la palabra.', 'detrás del verbo, pegado.', 'antes del verbo, separado.'], answer: 1, why: 'Con el imperativo afirmativo el pronombre se pega al final: riega + las → riégalas.', en: 'In “Riégalas”, the pronoun “las” goes…' },
            { prompt: 'Irene no quiere mucha agua en las plantas. Dice: «___ mucho».', options: ['No riégalas', 'Riégalas no', 'No las riegues'], answer: 2, why: 'Orden negativa: no + pronombre + imperativo negativo (riegues).', en: 'Irene doesn’t want much water on the plants. She says: “Don’t water them too much.”' },
          ] },
        ] },
        { title: 'Antes o pegado · Before or attached', mascot: '/brand/mascot/studying.webp', coach: '¿Hay «no»? ¿Es una orden? Is there “no”? Is it a command?', blocks: [
          { kind: 'concept', tone: 'blue', label: 'ANTES · SEPARADO', question: '¿Dónde va con un verbo conjugado y con «no»?', en: 'Where does it go with a conjugated verb and with “no”?', formula: ['pronombre + verbo conjugado: las riego · lo compré', 'no + pronombre + imperativo negativo: no las riegues'],
            meaning: 'Con un verbo conjugado (presente, pasado, futuro) el pronombre va **antes**, separado: ya lo usas así desde la clase 042 («Lo tengo»). Con el **imperativo negativo** (clase 059) también: el orden es fijo, **no + pronombre + verbo**.',
            examples: [
              { es: 'Mateo [[las riega|blue]] los lunes.', en: 'Mateo waters them on Mondays.' },
              { es: '[[No la abras|blue]] por la noche.', en: 'Don’t open it at night.' },
              { es: '[[No me llames|blue]] antes de las nueve.', en: 'Don’t call me before nine.' },
            ] },
          { kind: 'concept', tone: 'orange', label: 'PEGADO · DETRÁS', question: '¿Dónde va con una orden afirmativa y con un infinitivo solo?', en: 'Where does it go with an affirmative command and with a lone infinitive?', formula: ['imperativo afirmativo + pronombre: llámame · ciérrala', 'para / sin / antes de + infinitivo + pronombre: para regarlas'],
            meaning: 'Con el **imperativo afirmativo** el pronombre va **detrás** y pegado: forma una sola palabra. También se pega al **infinitivo** cuando está solo, por ejemplo después de para, sin, antes de, después de.',
            examples: [
              { es: '[[Llámame|orange]] esta noche.', en: 'Call me tonight.' },
              { es: '[[Ciérrala|orange]] antes de salir.', en: 'Close it before you go out.' },
              { es: 'Necesito un vaso [[para regarlas|orange]].', en: 'I need a glass to water them.' },
            ],
            note: 'Con dos pronombres (clase 064) el orden interno no cambia: primero me / te / se, después lo / la. **Dámelo** · **no me lo des** · **se lo doy**.' },
          { kind: 'table', title: 'Dónde va el pronombre · Where the pronoun goes', head: ['Forma del verbo', 'Posición', 'Ejemplo'], rows: [
            ['Presente o pasado (I water, I bought)', 'antes, separado', '[[Las riego|blue]] · [[Lo compré|blue]]'],
            ['Imperativo negativo (don’t…)', 'antes, separado', '[[No las riegues|blue]]'],
            ['Imperativo afirmativo (do…!)', 'detrás, pegado', '[[Riégalas|orange]] · [[Llámame|orange]]'],
            ['Infinitivo solo (to…, without…ing)', 'detrás, pegado', '[[para regarlas|orange]] · [[sin abrirla|orange]]'],
            ['Perífrasis (going to, have to, -ing)', 'antes o pegado', '[[Las voy a regar|teal]] = [[Voy a regarlas|teal]]'],
          ], note: 'Compara: «Mateo **las riega**» (una información) y «Mateo, **riégalas**» (una orden). El pronombre cambia de sitio porque cambia la forma del verbo.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'La ventana: «___ antes de salir, por favor».', options: ['La cierra', 'Cierra la', 'Ciérrala'], answer: 2, why: 'Una petición con imperativo afirmativo: pronombre detrás y pegado, ciérrala.', en: 'The window: “Close it before you go out, please.”' },
            { prompt: 'Las cartas: «Mateo ___ cada tarde en el buzón».', options: ['busca las', 'búscalas', 'las busca'], answer: 2, why: 'Es una información con un verbo conjugado (busca): el pronombre va antes.', en: 'The letters: “Mateo looks for them in the mailbox every afternoon.”' },
            { prompt: 'Uso un vaso pequeño ___.', options: ['para las regar', 'para regar las', 'para regarlas'], answer: 2, why: 'Infinitivo solo después de «para»: pronombre pegado, para regarlas.', en: 'I use a small glass to water them.' },
          ] },
        ] },
        { title: 'Dos verbos, dos posiciones · Two verbs, two positions', mascot: '/brand/mascot/standing.webp', coach: 'Antes del primero o al final. Before the first, or at the end.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'LAS DOS · PERÍFRASIS', question: '¿Y con dos verbos juntos?', en: 'And with two verbs together?', formula: ['pronombre + voy a / tengo que / puedo / quiero + infinitivo', 'voy a / tengo que / puedo / quiero + infinitivo + pronombre', 'pronombre + estoy + gerundio = estoy + gerundio + pronombre'],
            meaning: 'Con una perífrasis (ir a, tener que, poder, querer + infinitivo; estar + gerundio) hay **dos posiciones correctas**, con el mismo significado: **antes del primer verbo**, separado, o **pegado al final**. Nunca en el medio y nunca dos veces.',
            examples: [
              { es: '[[Te voy a llamar|teal]] mañana. = [[Voy a llamarte|teal]] mañana.', en: 'I’m going to call you tomorrow.' },
              { es: '¿[[La puedo abrir|teal]]? = ¿[[Puedo abrirla|teal]]?', en: 'Can I open it?' },
              { es: '[[Lo estoy buscando|teal]]. = [[Estoy buscándolo|teal]].', en: 'I’m looking for it.' },
            ],
            note: 'Elige una posición, no las dos: «Lo voy a ver» o «Voy a verlo», nunca «Lo voy a verlo». Con dos pronombres, siempre juntos: **te lo voy a dar** o **voy a dártelo**.' },
          { kind: 'table', title: 'Las dos posiciones · Both positions', head: ['Perífrasis', 'Antes del primer verbo', 'Pegado al final'], rows: [
            ['ir a + infinitivo (going to)', '[[la voy a llamar|teal]]', '[[voy a llamarla|teal]]'],
            ['tener que + infinitivo (have to)', '[[los tengo que traer|teal]]', '[[tengo que traerlos|teal]]'],
            ['poder + infinitivo (can)', '[[me puedes ayudar|teal]]', '[[puedes ayudarme|teal]]'],
            ['querer + infinitivo (want)', '[[te quiero invitar|teal]]', '[[quiero invitarte|teal]]'],
            ['estar + gerundio (…ing)', '[[la estoy haciendo|teal]]', '[[estoy haciéndola|teal]]'],
          ], note: 'Las dos columnas son igual de correctas y frecuentes, en España y en América.' },
          { kind: 'decide', title: '¿Antes o pegado? · Before or attached?', steps: [
            { q: '¿Es una orden afirmativa (imperativo sin «no»)?', yes: 'Pegado detrás: **cómpralo**, **llámame**.', no: 'next' },
            { q: '¿Hay «no» + imperativo, o un solo verbo conjugado?', yes: 'Antes, separado: **no lo compres**, **lo compro**.', no: 'next' },
            { q: '¿Hay dos verbos juntos (voy a, tengo que, puedo, quiero + infinitivo; estoy + gerundio)?', yes: 'Las dos posiciones: **lo voy a comprar** o **voy a comprarlo**. Nunca en el medio.', no: 'Infinitivo solo (para, sin, antes de…): pegado, **para comprarlo**.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué frase es correcta? (I have to call him.)', options: ['Tengo que lo llamar.', 'Lo tengo que llamar.', 'Tengo lo que llamar.'], answer: 1, why: 'Con tener que + infinitivo: antes del primer verbo (lo tengo que llamar) o pegado (tengo que llamarlo).', en: 'Which sentence is correct?' },
            { prompt: '«Voy a verla» significa lo mismo que…', options: ['Voy a la ver.', 'La voy a verla.', 'La voy a ver.'], answer: 2, why: 'Las dos posiciones de la perífrasis: la voy a ver = voy a verla.', en: '“Voy a verla” means the same as…' },
            { prompt: 'Mateo prepara la cena ahora mismo: «___».', options: ['La estoy preparando.', 'Estoy preparando la.', 'Estoy la preparando.'], answer: 0, why: 'Estar + gerundio: antes de «estoy» o pegado al gerundio (estoy preparándola). Nunca en el medio.', en: 'Mateo is making dinner right now: “I’m making it.”' },
          ] },
        ] },
        { title: 'La tilde · The written accent', mascot: '/brand/mascot/speaking.webp', coach: 'Cuenta desde el final. Count from the end.', blocks: [
          { kind: 'table', title: 'La palabra crece · The word gets longer', head: ['Verbo', '+ pronombre', 'Sílaba fuerte', '¿Tilde?'], rows: [
            ['compra', '**cómpralo**', 'CÓM-pra-lo', 'sí (esdrújula)'],
            ['riega', '**riégalas**', 'RIÉ-ga-las', 'sí'],
            ['llama', '**llámame**', 'LLÁ-ma-me', 'sí'],
            ['regar', '**regarlas** → **regártelas**', 're-GAR-las → re-GÁR-te-las', 'un pronombre: no; dos: sí'],
            ['buscando', '**buscándolo**', 'bus-CÁN-do-lo', 'sí, siempre'],
          ], note: 'El acento no se mueve: está en la misma sílaba del verbo. Pero la palabra crece, y si la sílaba fuerte queda en la antepenúltima posición (o antes), la palabra es esdrújula: lleva tilde siempre.' },
          { kind: 'tip', icon: '💡', title: 'Cuenta desde el final · Count from the end', text: 'Pega el pronombre y cuenta las sílabas desde el final. Si la sílaba fuerte es la **tercera** o la **cuarta**, escribe tilde: LLÁ-ma-me → **llámame**, es-CRÍ-be-me → **escríbeme**, ha-CIÉN-do-lo → **haciéndolo**. Si es la **segunda**, no hay tilde: VER-la → **verla**, com-PRAR-lo → **comprarlo**, DI-me → **dime**.', en: 'Attach the pronoun and count the syllables from the end. If the stressed syllable is the third or fourth from the end, write an accent: llámame, escríbeme, haciéndolo. If it is the second, no accent: verla, comprarlo, dime.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'La puerta: ¿cuál está bien escrita?', options: ['Cierrala.', 'Ciérrala.', 'Cierrála.'], answer: 1, why: 'CIÉ-rra-la: la sílaba fuerte es la tercera desde el final, esdrújula: ciérrala.', en: 'The door: which one is spelled correctly? (Close it.)' },
            { prompt: 'Quiero ___ antes del viaje.', options: ['vérla', 'ver la', 'verla'], answer: 2, why: 'VER-la: llana, sin tilde; y pegado al infinitivo.', en: 'I want to see her before the trip.' },
            { prompt: 'Estoy ___ ahora. (the cake)', options: ['comiendólo', 'comiendolo', 'comiéndolo'], answer: 2, why: 'Gerundio + pronombre: co-MIÉN-do-lo, esdrújula, siempre con tilde.', en: 'I’m eating it now.' },
          ] },
        ] },
        { title: 'Irregulares, usted y vosotros · Irregulars, usted and vosotros', mascot: '/autoestudio/mascot/noting.webp', coach: 'Di → dime → dímelo.', blocks: [
          { kind: 'table', title: 'Imperativos cortos (tú) y de usted · Short tú commands and usted', head: ['Imperativo', '+ un pronombre', '+ dos pronombres'], rows: [
            ['di (decir)', '**dime** (DI-me, sin tilde)', '**dímelo** (DÍ-me-lo)'],
            ['haz (hacer)', '**hazlo**', '**házmelo**'],
            ['pon (poner)', '**ponlo**', '**pónmelo**'],
            ['ten (tener)', '**tenlo** a mano', '**ténmelo** listo'],
            ['usted: diga · ponga', '**dígame** · **póngalo**', '**dígamelo** · **póngamelo**'],
            ['usted: siéntese · ustedes: siéntense', 'siéntese aquí', 'díganmelo (ustedes)'],
          ], note: 'Imperativo de una sílaba + un pronombre: dos sílabas, sin tilde (dime, hazlo, ponlo). Con dos pronombres: esdrújula, con tilde (dímelo, házmelo). Las formas de usted ya son llanas (diga, ponga): con un pronombre, tilde (dígame, póngalo).' },
          { kind: 'tip', icon: '🇪🇸', title: 'Para reconocer: vosotros · To recognise: vosotros', text: 'En España, para varias personas de confianza se usa vosotros. Con «os» la -d final desaparece: sentad → **sentaos**, levantad → **levantaos**. Excepción: id → **idos**. Con otros pronombres, la -d se queda: **decídmelo**, **hacedlo**. En América se usa ustedes: **siéntense**, **váyanse**.', en: 'In Spain, vosotros is used for several people you know well. Before “os” the final -d drops: sentaos (sit down), levantaos. Exception: idos (go away). With other pronouns the -d stays: decídmelo, hacedlo. In Latin America ustedes is used: siéntense, váyanse. You only need to recognise these.' },
          { kind: 'tip', icon: '🇦🇷', title: 'Para reconocer: vos · To recognise: vos', text: 'Con vos (clase 058) la sílaba fuerte del imperativo es otra: comprá → **compralo** (com-PRA-lo), sin tilde. Con tú: **cómpralo**. Las dos formas son correctas, cada una en su variedad.', en: 'With vos the stress of the command falls on another syllable: comprá → compralo, no accent mark. With tú: cómpralo. Both are correct, each in its own variety.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Sabes dónde está mi cargador? ¡___, por favor!', options: ['Me lo di', 'Dímelo', 'Dimelo'], answer: 1, why: 'Di + me + lo: DÍ-me-lo, esdrújula, con tilde. Pegado porque es una orden afirmativa.', en: 'Do you know where my charger is? Tell me, please!' },
            { prompt: 'El ejercicio de mañana: ___ hoy.', options: ['lo haz', 'házlo', 'hazlo'], answer: 2, why: 'Haz + lo: HAZ-lo, dos sílabas, llana: sin tilde.', en: 'Tomorrow’s exercise: do it today.' },
            { prompt: 'Con usted, a la señora del tercero: «Las llaves, ___ aquí, por favor».', options: ['las ponga', 'póngalas', 'pongalas'], answer: 1, why: 'Usted, orden afirmativa: ponga + las → PÓN-ga-las, pegado y con tilde.', en: 'With usted, to the lady on the third floor: “The keys, put them here, please.”' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: '¿Antes, pegado o las dos? Before, attached or both?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la frase con el error y tu alumno explica qué falla: ¿posición del pronombre o tilde? Después aparece la corrección.', self: 'Lee cada frase y piensa: ¿falla la posición del pronombre o la tilde? Toca para ver la corrección. (Is it the position or the accent?)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Mateo, me llama esta noche, por favor.', right: 'Mateo, llámame esta noche, por favor.', why: 'Es una petición a Mateo (tú): imperativo afirmativo, pronombre detrás y pegado. «Me llama» es una información (he calls me), no una orden.' },
            { wrong: 'No riégalas hoy.', right: 'No las riegues hoy.', why: 'Con «no», el imperativo cambia (riegues) y el pronombre va antes. (Negative: no + pronoun + verb.)' },
            { wrong: 'Voy a lo comprar mañana.', right: 'Lo voy a comprar mañana. / Voy a comprarlo mañana.', why: 'Nunca en el medio: antes del primer verbo o pegado al infinitivo.' },
            { wrong: 'La tengo que llamarla.', right: 'La tengo que llamar. / Tengo que llamarla.', why: 'Un pronombre, una sola vez: elige una de las dos posiciones.' },
            { wrong: 'Estoy haciendolo ahora.', right: 'Estoy haciéndolo ahora.', why: 'Gerundio + pronombre: ha-CIÉN-do-lo, esdrújula, tilde siempre.' },
            { wrong: 'Dimelo, por favor.', right: 'Dímelo, por favor.', why: 'Dime no lleva tilde, pero con dos pronombres sí: DÍ-me-lo.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Las fotos de Nube: «___ esta noche».', options: ['Te voy a las mandar', 'Voy a te las mandar', 'Te las voy a mandar'], answer: 2, why: 'Dos pronombres juntos antes de «voy a» (o pegados al final: voy a mandártelas).', en: 'Nube’s photos: “I’m going to send them to you tonight.”' },
            { prompt: 'El paquete: «___ todavía, es una sorpresa».', options: ['No ábrelo', 'No lo abras', 'No abras lo'], answer: 1, why: 'Orden negativa: no + pronombre + imperativo negativo (abras).', en: 'The parcel: “Don’t open it yet, it’s a surprise.”' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno dice una orden sobre un objeto de la clase en tres versiones: afirmativa («Ábrela»), negativa («No la abras») y con perífrasis («La tienes que abrir / Tienes que abrirla»).' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'La noche antes del viaje', coach: 'Toca las palabras marcadas. Tap the marked words.',
      steps: [
        { title: 'En casa de Irene · At Irene’s place', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Irene y tu alumno es Mateo. Después tu alumno toca cada expresión marcada y dice si el pronombre va antes, pegado o en una perífrasis.', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada: ¿antes, pegado o perífrasis? (Before, attached or periphrasis?)' } },
          { kind: 'explore', title: 'Guárdalas bien', setting: 'Jueves, nueve de la noche, en el apartamento de Irene. Mañana a las seis sale su vuelo. Irene y Mateo son vecinos y se tratan de tú. (Thursday, 9 p.m., in Irene’s apartment. Her flight leaves tomorrow at six. Irene and Mateo are neighbours and use tú.)', lines: [
            { who: 'Irene', text: 'Gracias por venir, Mateo. Mira, estas son las llaves del apartamento. [[Guárdalas|orange]] bien, ¿eh?', en: 'Thanks for coming, Mateo. Look, these are the keys to the apartment. Keep them safe, okay?' },
            { who: 'Mateo', text: 'Claro, [[las voy a poner|teal]] con las mías. ¿Qué hago con las plantas?', en: 'Sure, I’m going to put them with mine. What do I do with the plants?' },
            { who: 'Irene', text: '[[Riégalas|orange]] cada dos días, pero [[no las riegues|blue]] mucho: solo un vaso de agua.', en: 'Water them every two days, but don’t water them too much: just one glass of water.' },
            { who: 'Mateo', text: 'Muy bien. ¿Y la gata? ¿Qué come Nube?', en: 'Okay. And the cat? What does Nube eat?' },
            { who: 'Irene', text: 'Su comida está en el armario de la cocina. [[Ponle|orange]] un poco por la mañana y otro poco por la noche.', en: 'Her food is in the kitchen cupboard. Give her a little in the morning and a little at night.' },
            { who: 'Mateo', text: '¿Y la ventana del balcón? ¿[[Puedo abrirla|teal]] para ventilar?', en: 'And the balcony window? Can I open it to let some air in?' },
            { who: 'Irene', text: 'Sí, pero [[no la dejes|blue]] abierta: a Nube le encanta salir al balcón.', en: 'Yes, but don’t leave it open: Nube loves going out onto the balcony.' },
            { who: 'Mateo', text: 'Entendido. Oye, ¿qué buscas?', en: 'Got it. Hey, what are you looking for?' },
            { who: 'Irene', text: 'El cargador del teléfono. [[Estoy buscándolo|teal]] desde hace diez minutos.', en: 'My phone charger. I’ve been looking for it for ten minutes.' },
            { who: 'Mateo', text: '¡Aquí está, en el sofá! [[Tómalo|orange]].', en: 'Here it is, on the sofa! Take it.' },
            { who: 'Irene', text: '¡Gracias! Y si hay algún problema, [[llámame|orange]] o [[escríbeme|orange]]. [[No me mandes|blue]] correos: de viaje no [[los leo|blue]].', en: 'Thanks! And if there’s any problem, call me or text me. Don’t send me emails: I don’t read them when I travel.' },
            { who: 'Mateo', text: 'Tranquila. [[Te voy a mandar|teal]] una foto de Nube todos los días.', en: 'Don’t worry. I’m going to send you a photo of Nube every day.' },
          ], notes: {
            'Guárdalas': 'Guarda + las (las llaves). Orden afirmativa: pegado. GUÁR-da-las es esdrújula: tilde.',
            'las voy a poner': 'Ir a + infinitivo: pronombre antes del primer verbo. También correcto: **voy a ponerlas**.',
            'Riégalas': 'Riega + las (las plantas): imperativo afirmativo, pegado y con tilde (RIÉ-ga-las).',
            'no las riegues': 'Orden negativa: no + pronombre + imperativo negativo. Nunca «no riégalas».',
            'Ponle': 'Pon + le (a Nube, objeto indirecto, clase 063). Pon es de una sílaba: PON-le, sin tilde.',
            'Puedo abrirla': 'Poder + infinitivo: pronombre pegado al final. También correcto: **¿la puedo abrir?**',
            'no la dejes': 'No + la (la ventana) + dejes. En negativo, siempre antes del verbo.',
            'Estoy buscándolo': 'Estar + gerundio: pegado y con tilde (bus-CÁN-do-lo). También: **lo estoy buscando**.',
            'Tómalo': 'Toma + lo (el cargador): orden afirmativa, pegado. TÓ-ma-lo: tilde.',
            'llámame': 'Llama + me: pegado. LLÁ-ma-me es esdrújula: tilde.',
            'escríbeme': 'Escribe + me: pegado y con tilde (es-CRÍ-be-me).',
            'No me mandes': 'No + me + mandes: en negativo el pronombre va antes. Compara: **mándame** un mensaje.',
            'los leo': 'Un verbo conjugado (leo): el pronombre va antes. «Los» son los correos.',
            'Te voy a mandar': 'Ir a + infinitivo: pronombre antes. También correcto: **voy a mandarte**.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Cómo tiene que regar Mateo las plantas?', options: ['Cada dos días, con poca agua.', 'Todos los días, con mucha agua.', 'Solo el lunes, con dos vasos.'], answer: 0, why: '«Riégalas cada dos días, pero no las riegues mucho: solo un vaso de agua».', en: 'How does Mateo have to water the plants?' },
            { prompt: '¿Por qué no debe dejar abierta la ventana del balcón?', options: ['Porque hace mucho frío.', 'Porque hay mucho ruido en la calle.', 'Porque a la gata le encanta salir al balcón.'], answer: 2, why: '«No la dejes abierta: a Nube le encanta salir al balcón».', en: 'Why shouldn’t he leave the balcony window open?' },
            { prompt: '¿Cómo quiere Irene recibir noticias?', options: ['Por teléfono o por mensaje.', 'Con una carta.', 'Por correo electrónico.'], answer: 0, why: '«Llámame o escríbeme. No me mandes correos».', en: 'How does Irene want to get news?' },
          ] },
        ] },
        { title: 'En la puerta · At the door', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'guide', text: { teacher: 'Viernes, cinco de la mañana. Irene sale para el aeropuerto. Tu alumno completa la conversación y lee en voz alta la frase completa.', self: 'Viernes, cinco de la mañana: Irene sale para el aeropuerto. Completa la conversación. (Friday, 5 a.m.: Irene leaves for the airport.)' } },
          { kind: 'chat-fill', title: 'Últimas instrucciones · Last instructions', lines: [
            { who: 'Irene', text: 'Mateo, ¿tienes las llaves?' },
            { who: 'Mateo', text: 'Sí, ___ en el bolsillo.', options: ['téngolas', 'las tengo', 'tengo las'], answer: 1, why: 'Un verbo conjugado (tengo): el pronombre va antes, separado.' },
            { who: 'Irene', text: 'Perfecto. El número de la veterinaria está en la nota de la cocina. ___ en tu teléfono, por favor.', options: ['Guárdalo', 'Guardo lo', 'Lo guarda'], answer: 0, why: 'Una petición a Mateo: imperativo afirmativo, pegado y con tilde (GUÁR-da-lo).' },
            { who: 'Mateo', text: 'Ya ___ anoche.', options: ['lo guardé', 'guardé lo', 'guardélo'], answer: 0, why: 'Pasado, un verbo conjugado (guardé): el pronombre va antes.' },
            { who: 'Irene', text: 'Genial. Ah, y la planta grande del salón: ___ al sol, que se seca.', options: ['no ponla', 'no pónla', 'no la pongas'], answer: 2, why: 'Orden negativa: no + la + pongas. «Ponla» es la forma afirmativa.' },
            { who: 'Mateo', text: '¿Me vas a mandar una foto del hotel?' },
            { who: 'Irene', text: 'Sí, ___ esta noche.', options: ['te la voy a mandar', 'voy a te la mandar', 'te voy a mandarla'], answer: 0, why: 'Dos pronombres, siempre juntos: te la voy a mandar (o voy a mandártela).' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: «¿Qué cosas de tu casa necesitan instrucciones cuando no estás?». Tu alumno responde con una orden afirmativa y una negativa: «Las plantas: riégalas, pero no las riegues mucho».' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Una semana con Nube', coach: 'Orden: pegado. No: antes. Two verbs: both.',
      steps: [
        { title: 'Los primeros días · The first days', blocks: [
          { kind: 'choice', items: [
            { context: 'Sábado. Mateo habla con Nube, la gata. (Saturday. Mateo talks to Nube.)', prompt: 'Nube, tu comida está aquí. ¡___!', options: ['Come la', 'Cómela', 'La come'], answer: 1, why: 'Una orden afirmativa (a la gata, tú): pegado y con tilde, CÓ-me-la.', en: 'Nube, your food is here. Eat it!' },
            { context: 'Mateo escribe a Irene. (Mateo texts Irene.)', prompt: 'La puerta del balcón hace ruido. ¿___ mañana?', options: ['La puedo arreglar', 'Puedo la arreglar', 'Puedo arreglar la'], answer: 0, why: 'Poder + infinitivo: antes del primer verbo (la puedo arreglar) o pegado (puedo arreglarla).', en: 'The balcony door makes a noise. Can I fix it tomorrow?' },
            { context: 'Irene responde. (Irene answers.)', prompt: 'Sí, gracias. Pero ___ con aceite de cocina.', options: ['no la arregles', 'no arréglala', 'la no arregles'], answer: 0, why: 'Orden negativa: no + pronombre + arregles.', en: 'Yes, thanks. But don’t fix it with cooking oil.' },
            { context: 'Mateo no encuentra la comida de la gata. (Mateo can’t find the cat food.)', prompt: 'Irene, ¿dónde está la bolsa nueva? ___ y no la encuentro.', options: ['Estoy la buscando', 'Estoy buscándola', 'Estoy buscandola'], answer: 1, why: 'Estar + gerundio + pronombre: pegado y con tilde (bus-CÁN-do-la).', en: 'Irene, where is the new bag? I’m looking for it and I can’t find it.' },
            { context: 'Irene. (Irene.)', prompt: 'Está en el armario de arriba. ___ y llámame si no está.', options: ['Lo abre', 'Ábrelo', 'Abrelo'], answer: 1, why: 'Orden afirmativa: pegado; Á-bre-lo es esdrújula, con tilde.', en: 'It’s in the top cupboard. Open it and call me if it isn’t there.' },
          ] },
        ] },
        { title: '¿Antes, pegado o las dos? · Before, attached or both?', blocks: [
          { kind: 'classify', title: 'Las plantas otra vez · The plants again', categories: [
            { id: 'antes', label: 'ANTES · separado', tone: 'blue' },
            { id: 'pegado', label: 'PEGADO · detrás', tone: 'orange' },
            { id: 'dos', label: 'LAS DOS · antes o pegado', tone: 'teal' },
          ], items: [
            { text: 'Una orden a Mateo: riega + las', answer: 'pegado', why: 'Imperativo afirmativo: riégalas.' },
            { text: 'Una prohibición: no + riegues + las', answer: 'antes', why: 'Imperativo negativo: no las riegues.' },
            { text: 'Un plan: voy a + regar + las', answer: 'dos', why: 'Perífrasis: las voy a regar = voy a regarlas.' },
            { text: 'Ahora mismo: estoy + regando + las', answer: 'dos', why: 'Estar + gerundio: las estoy regando = estoy regándolas.' },
            { text: 'Un hábito: riego + las los lunes', answer: 'antes', why: 'Un verbo conjugado: las riego los lunes.' },
            { text: 'Una finalidad: para + regar + las', answer: 'pegado', why: 'Infinitivo solo: para regarlas.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Irene, no te preocupes: la gata está bien.', ok: true, why: 'Correcta: con «no», el pronombre va antes (no te preocupes).' },
            { sentence: 'Tengo que lo sacar de la caja.', ok: false, options: ['Tengo lo que sacar de la caja.', 'Lo tengo que sacarlo de la caja.', 'Lo tengo que sacar de la caja.'], answer: 2, why: 'Tener que + infinitivo: antes del primer verbo o pegado (tengo que sacarlo). Nunca en el medio ni dos veces.' },
            { sentence: 'No ábrela por la noche.', ok: false, options: ['No abras la por la noche.', 'No la abras por la noche.', 'No la abre por la noche.'], answer: 1, why: 'Orden negativa con tú: no + la + abras.' },
            { sentence: 'Mateo, ciérrala bien antes de salir.', ok: true, why: 'Correcta: orden afirmativa, pegado y con tilde (CIÉ-rra-la).' },
            { sentence: 'Para regárlas, uso un vaso.', ok: false, options: ['Para las regar, uso un vaso.', 'Para régarlas, uso un vaso.', 'Para regarlas, uso un vaso.'], answer: 2, why: 'Infinitivo solo: pegado. Re-GAR-las es llana: sin tilde.' },
          ] },
        ] },
        { title: 'Una llamada de Irene · A call from Irene', blocks: [
          { kind: 'chat-fill', title: 'Martes por la tarde · Tuesday afternoon', lines: [
            { who: 'Irene', text: 'Hola, Mateo. ¿Qué tal todo?' },
            { who: 'Mateo', text: 'Bien. Ahora mismo estoy regando las plantas.' },
            { who: 'Irene', text: '¡Genial! ¿___ todos los días?', options: ['Riégalas', 'Las riegas', 'Riegas las'], answer: 1, why: 'Es una pregunta en presente (un verbo conjugado): el pronombre va antes.' },
            { who: 'Mateo', text: 'No, cada dos días, como me dijiste. Oye, llegó una carta del banco para ti.' },
            { who: 'Irene', text: '¿___ una foto de la carta?', options: ['Me puedes mandarme', 'Me puedes mandar', 'Puedes me mandar'], answer: 1, why: 'Poder + infinitivo: pronombre antes (me puedes mandar) o pegado (puedes mandarme), una sola vez.' },
            { who: 'Mateo', text: 'Claro. ___ ahora mismo.', options: ['Te la mando', 'Te mando la', 'Mándotela'], answer: 0, why: 'Presente (mando), dos pronombres: los dos antes, te la mando.' },
            { who: 'Irene', text: 'Gracias. Y después, ___ en mi mesa, por favor.', options: ['déjela', 'déjala', 'la deja'], answer: 1, why: 'Orden afirmativa a Mateo (tú): déjala. «Déjela» es de usted.' },
            { who: 'Mateo', text: 'Vale. ¿Cuándo vuelves?' },
            { who: 'Irene', text: 'El domingo por la tarde. ¿___ al aeropuerto?', options: ['Puedes me llevar', 'Puedes llevárme', 'Puedes llevarme'], answer: 2, why: 'Pegado al infinitivo: lle-VAR-me, llana, sin tilde. (También: ¿me puedes llevar?)' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['Voy', 'a', 'llamarte', 'esta', 'noche'], accept: ['Voy a llamarte esta noche', 'Esta noche voy a llamarte'], en: 'I’m going to call you tonight.' },
            { tiles: ['No', 'las', 'riegues', 'hoy'], accept: ['No las riegues hoy', 'Hoy no las riegues'], en: 'Don’t water them today.' },
            { tiles: ['La', 'tengo', 'que', 'sacar', 'hoy'], accept: ['La tengo que sacar hoy', 'Hoy la tengo que sacar'], en: 'I have to take it out today. (the rubbish)' },
            { tiles: ['Se', 'la', 'estoy', 'dando', 'ahora'], accept: ['Se la estoy dando ahora', 'Ahora se la estoy dando'], en: 'I’m giving it to her now. (the food, to Nube)' },
          ] },
        ] },
        { title: 'Transforma · Transform', blocks: [
          { kind: 'rewrite', title: 'Cambia el nombre por un pronombre · Replace the noun with a pronoun', items: [
            { prompt: 'Voy a cerrar la ventana.', instruction: 'Cambia «la ventana» por un pronombre.', accept: ['Voy a cerrarla', 'La voy a cerrar'] },
            { prompt: 'Saca la basura, por favor.', instruction: 'Cambia «la basura» por un pronombre.', accept: ['Sácala, por favor', 'Sácala por favor', 'Sácala'] },
            { prompt: 'Llama a Irene.', instruction: 'Escribe la orden en negativo con un pronombre (no + …).', accept: ['No la llames'] },
            { prompt: 'Estoy limpiando la cocina.', instruction: 'Cambia «la cocina» por un pronombre.', accept: ['Estoy limpiándola', 'La estoy limpiando'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno dice tres instrucciones reales para su casa: una afirmativa con pronombre, una negativa y un plan con «voy a».' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Un audio desde el hotel', coach: 'Primero escucha sin leer. Listen first, read later.',
      steps: [
        { title: 'Tres favores · Three favours', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general (¿qué necesita Irene?). Segunda escucha: tu alumno levanta la mano con cada pronombre pegado (riégalas…) y da una palmada con cada pronombre antes (no las riegues…). Después, las preguntas.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Fíjate en los pronombres: ¿antes o pegados? (Listen once for the gist, once for the details.)' } },
          { kind: 'listen', title: 'Un audio de Irene', channel: 'MENSAJE DE VOZ · DE IRENE PARA MATEO', src: '/audio/grammar-live/365.mp3',
            before: 'Irene ya está en el hotel y le manda un audio a Mateo. ¿Qué crees que le pide: algo de las plantas, de la gata, del correo…? (Irene sends Mateo a voice message from the hotel. What do you think she asks him?)',
            gist: { prompt: '¿Cuál es la idea general? · What is the main idea?', options: ['Irene cuenta cómo es su hotel.', 'Irene pide tres favores: las plantas, un paquete y una llave.', 'Irene dice que vuelve antes del viaje.'], answer: 1, why: '«Te mando este audio por tres cosas»: las plantas, el paquete y la llave del buzón.', en: 'What is the main idea?' },
            details: [
              { prompt: '¿Cómo tiene que regar Mateo las plantas?', options: ['Mañana por la mañana, con poca agua.', 'Por la noche, con mucha agua.', 'Todos los días, porque hace calor.'], answer: 0, why: '«Riégalas mañana por la mañana, pero no las riegues mucho».', en: 'How does Mateo have to water the plants?' },
              { prompt: '¿Dónde puede recoger Mateo el paquete?', options: ['En el hotel de Irene.', 'En la recepción del edificio.', 'En la oficina de correos.'], answer: 1, why: '«¿Lo puedes recoger en la recepción del edificio?».', en: 'Where can Mateo pick up the parcel?' },
              { prompt: '¿Qué pasa si Mateo no puede recogerlo?', options: ['Irene lo recoge el lunes.', 'El paquete vuelve a la tienda.', 'La recepción se lo lleva a Mateo.'], answer: 0, why: '«Si no puedes, no pasa nada: voy a recogerlo yo el lunes».', en: 'What happens if Mateo can’t pick it up?' },
              { prompt: '¿Qué tiene que hacer Mateo con la llave del buzón?', options: ['Mirar en la mesa de la entrada y escribir a Irene.', 'Llevarla al hotel.', 'Buscarla en el bolso de Irene.'], answer: 0, why: '«Creo que está en la mesa de la entrada. Mírala, por favor, y escríbeme».', en: 'What does Mateo have to do about the mailbox key?' },
            ],
            transcript: 'Hola, Mateo, soy Irene. Ya estoy en el hotel, todo bien por aquí. Te mando este audio por tres cosas. Primero, las plantas: [[riégalas|orange]] mañana por la mañana, pero [[no las riegues|blue]] mucho, que en el salón no hace calor. Segundo, mañana llega un paquete para mí. ¿[[Lo puedes recoger|teal]] en la recepción del edificio? Si no puedes, no pasa nada: [[voy a recogerlo|teal]] yo el lunes. Y tercero, la llave del buzón. [[Estoy buscándola|teal]] en mi bolso y no está. Creo que está en la mesa de la entrada. [[Mírala|orange]], por favor, y [[escríbeme|orange]] un mensaje. Y un beso grande para Nube. ¡Mil gracias, de verdad!',
            reply: { teacher: 'Tú eres Irene. Tu alumno es Mateo y responde al audio con tres frases, una para cada favor y con pronombre: «Las riego mañana…», «Lo voy a recoger…», «La estoy buscando…».', self: 'Responde a Irene en voz alta como Mateo: una frase para cada favor, con pronombre. (Answer each favour aloud with a pronoun.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Tu casa, tus instrucciones', coach: 'Da instrucciones con pronombres. Give instructions with pronouns.',
      steps: [
        { title: '¿Me cuidas la casa? · Can you look after my place?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú eres el amigo o la amiga que cuida la casa y haces las preguntas. Tu alumno responde con instrucciones reales. Tú repites su frase con el pronombre en su sitio y sigues con la repregunta.', self: 'Imagina que te vas una semana. Lee la pregunta, responde en voz alta y, si quieres, escribe tu respuesta. (Imagine you are going away for a week and answer aloud.)' } },
          { kind: 'talk', cards: [
            { q: '¿Alguna vez cuidaste la casa, las plantas o el animal de otra persona? ¿Qué te pidió? · Have you ever looked after someone’s home, plants or pet? What did they ask you to do?', followUps: ['¿Qué tenías que hacer cada día? (What did you have to do every day?)', '¿Lo hiciste todo bien? (Did you do everything right?)'], phrases: ['Una vez cuidé el perro de… y [[lo tenía que sacar|teal]]…', 'Me dijo: «[[Ciérrala|orange]] bien».', 'Me dijo: «[[No le des|blue]] chocolate».'], hint: 'Cuenta la situación en pasado y repite sus instrucciones con el imperativo: «Me dijo: “Sácalo dos veces”».', example: 'Una vez cuidé el perro de mi hermana. Lo tenía que sacar dos veces al día. Me dijo: «Sácalo por la mañana y por la noche, y no le des chocolate».', next: 'Ahora te vas tú.', teacher: 'Cuenta tú también una experiencia corta con una instrucción: «Mi vecina me dijo: “Riégalas los lunes”».' },
            { q: 'Ahora te vas tú de viaje. Un amigo cuida tu casa. Da tres instrucciones con pronombre. · Now you are going away. A friend looks after your home. Give three instructions with a pronoun.', followUps: ['¿Y las plantas? ¿Cada cuánto? (How often?)', '¿Y el correo? (And the post?)'], phrases: ['Las plantas: [[riégalas|orange]] cada…', 'La ventana: [[ábrela|orange]] por la mañana.', 'Las cartas: [[guárdalas|orange]] en…'], hint: 'Orden afirmativa: pronombre pegado y, casi siempre, tilde.', example: 'Las plantas: riégalas los lunes y los jueves. La ventana de la cocina: ábrela por la mañana. Y las cartas: guárdalas en el cajón de la entrada.', next: 'Ahora, lo que no debe hacer.' },
            { q: '¿Y qué no debe hacer tu amigo? Da tres prohibiciones. · And what shouldn’t your friend do? Give three “don’ts”.', followUps: ['¿Por qué no? (Why not?)', '¿Y la calefacción? (And the heating?)'], phrases: ['[[No la abras|blue]], porque…', '[[No los toques|blue]]: …', '[[No me llames|blue]] por la mañana: …'], hint: 'Con «no», el pronombre va antes y el verbo cambia: no la abras, no los toques.', example: 'La ventana del baño: no la abras, porque no cierra bien. Mis libros: no los toques, por favor. Y no me llames por la mañana: tengo reuniones.', next: 'Ahora, tus planes.' },
            { q: 'Tu amigo pregunta: «¿Me vas a llamar? ¿Me vas a traer algo?». Responde con planes. · Your friend asks if you will call and bring something back. Answer with plans.', followUps: ['¿Me vas a mandar fotos? (Will you send me photos?)', '¿Cuándo me vas a devolver las llaves? (When will you give me back the keys?)'], phrases: ['[[Te voy a llamar|teal]] el… / [[Voy a llamarte|teal]]…', '[[Te voy a traer|teal]]…', '[[Te las voy a mandar|teal]]…'], hint: 'Con «voy a» tienes dos posiciones: te voy a llamar = voy a llamarte. Elige una.', example: 'Sí, te voy a llamar el miércoles. Y voy a traerte algo típico, una sorpresa. Las fotos te las voy a mandar todas las noches.', next: 'Ahora, una llamada.' },
            { q: 'Tu amigo te llama, pero estás muy ocupado o muy ocupada. ¿Qué estás haciendo? · Your friend calls but you are very busy. What are you doing?', followUps: ['¿Y la maleta? (And the suitcase?)', '¿Puedes llamarme después? (Can you call me later?)'], phrases: ['[[La estoy haciendo|teal]] / [[Estoy haciéndola|teal]]', '[[Te llamo|blue]] en diez minutos.', '[[Estoy buscándolo|teal]]…'], hint: 'Estar + gerundio: la estoy haciendo = estoy haciéndola (con tilde).', example: 'Ahora no puedo hablar: estoy haciendo la maleta. Bueno, la estoy terminando. Y el pasaporte… estoy buscándolo. Te llamo en diez minutos, ¿vale?' },
            { q: 'Ahora tú eres Irene. Mateo pregunta: «¿Qué hago con las plantas, la gata y la ventana?». Responde con órdenes afirmativas y negativas. · Now you are Irene. Answer Mateo with “do” and “don’t” instructions.', followUps: ['¿Y si hay un problema? (What if there’s a problem?)', '¿Te puedo mandar fotos? (Can I send you photos?)'], phrases: ['[[Riégalas|orange]]…, pero [[no las riegues|blue]]…', '[[Ponle|orange]] comida…', 'Si hay un problema, [[llámame|orange]].'], hint: 'Una orden afirmativa y una negativa para cada cosa.', example: 'Las plantas: riégalas cada dos días, pero no las riegues mucho. A Nube, ponle comida dos veces al día. La ventana: ábrela, pero no la dejes abierta. Si hay un problema, llámame.', teacher: 'Tú eres Mateo y te equivocas a propósito: «¿Riego las plantas todos los días?». Tu alumno corrige con una orden negativa: «No, no las riegues todos los días».' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno cuida tu casa y hace las preguntas («¿Qué hago con las plantas?», «¿Puedo abrir la ventana?») y tú respondes con instrucciones.', self: 'Ahora tú eres Mateo: haz las preguntas en voz alta («¿Puedo abrirla?», «¿Las riego hoy?») y responde como Irene. (Now ask the questions as Mateo and answer as Irene.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Una nota en la mesa', coach: 'Haz esto, no hagas esto. Do this, don’t do that.',
      steps: [
        { title: 'Instrucciones para tu casa · Instructions for your home', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos cada pronombre: ¿antes o pegado? ¿Lleva tilde? Después, tu alumno lee su nota en voz alta.', self: 'Escribe tu nota y toca «Revisar mi texto». Después mira cada pronombre: ¿antes o pegado? ¿Lleva tilde? (Write your note and tap “Revisar mi texto”.)' } },
          { kind: 'write', title: 'Una nota para quien cuida tu casa · A note for your house-sitter', situation: 'Te vas una semana de viaje. Un amigo, una amiga o un vecino va a cuidar tu casa. Escribe una nota y déjala en la mesa de la cocina: qué tiene que hacer y qué no debe hacer. (You are going away for a week. A friend or neighbour is going to look after your home. Write a note and leave it on the kitchen table: what they have to do and what they shouldn’t do.)', task: [
            'Saluda y da las gracias. (Say hello and thank them.)',
            'Escribe tres instrucciones afirmativas con pronombre pegado: riégalas, sácala… (Three affirmative instructions with an attached pronoun.)',
            'Escribe dos instrucciones negativas con el pronombre antes: no la abras… (Two negative instructions with the pronoun before the verb.)',
            'Usa una perífrasis con pronombre: te voy a llamar, tienes que sacarla… (One periphrasis with a pronoun.)',
            'Despídete. (Say goodbye.)',
          ], starters: ['Hola, …:', 'Muchas gracias por cuidar mi casa.', 'Las plantas: …', 'La basura: …', 'No …', 'Te voy a…', 'Un abrazo,'],
            words: ['riégalas', 'sácala', 'ábrela', 'ciérrala', 'guárdalas', 'llámame', 'escríbeme', 'no la abras', 'no los toques', 'te voy a llamar', 'tienes que sacarla'],
            model: 'Hola, Mateo: Muchas gracias por cuidar mi casa esta semana. Las plantas del balcón: [[riégalas|orange]] los lunes y los jueves, pero [[no las riegues|blue]] mucho. La basura: [[sácala|orange]] el martes por la noche. Las cartas: [[guárdalas|orange]] en el cajón de la entrada. La ventana del baño no cierra bien: [[no la abras|blue]], por favor. Si hay algún problema, [[llámame|orange]] a cualquier hora. [[Te voy a mandar|teal]] un mensaje el miércoles para saber qué tal todo. Un abrazo, Irene.',
            minWords: 50,
            checks: [
              { label: 'Una orden afirmativa con pronombre pegado y tilde: riégalas, sácala… (an affirmative command with an attached pronoun)', pattern: '(?<!\\p{L})\\p{L}*[áéíóú]\\p{L}*(?:me|te|nos|lo|la|los|las|le|les)(?!\\p{L})', tip: 'Da una orden con el pronombre pegado: «Las plantas: riégalas», «La basura: sácala».' },
              { label: 'Una orden negativa: no + pronombre + verbo (a negative instruction)', pattern: '(?<!\\p{L})no\\s+(?:me|te|nos|lo|la|los|las|le|les|se)\\s+(?:(?:lo|la|los|las)\\s+)?\\p{L}+(?:es|as)(?!\\p{L})', tip: 'Escribe una prohibición con el pronombre antes: «No la abras», «No los toques».' },
              { label: 'Una perífrasis con pronombre: te voy a llamar, tienes que sacarla… (a periphrasis with a pronoun)', pattern: '(?<!\\p{L})(?:(?:me|te|nos|lo|la|los|las|le|les|se)\\s+(?:(?:lo|la|los|las)\\s+)?(?:voy|tengo|tienes|puedo|puedes|quiero|estoy)|(?:voy\\s+a|vas\\s+a|tengo\\s+que|tienes\\s+que|puedo|puedes|quiero)\\s+\\p{L}+[aeiáéí]r(?:me|te|nos|lo|la|los|las|le|les|se)(?:lo|la|los|las)?|(?:estoy|estás|está)\\s+\\p{L}+(?:ándo|iéndo|yéndo)(?:me|te|nos|lo|la|los|las|le|les|se))(?!\\p{L})', tip: 'Añade un plan o una obligación con pronombre: «Te voy a llamar» o «Tienes que sacarla».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})no\\s+\\p{L}*[áéíóú]\\p{L}*(?:me|te|nos|lo|la|los|las)(?!\\p{L})', why: 'Con «no», el pronombre va antes y el verbo cambia: **no la abras**, no «no ábrela».' },
              { pattern: '(?<!\\p{L})(?:voy|vas|va|vamos|van)\\s+a\\s+(?:me|te|nos|lo|la|los|las)\\s+\\p{L}+r(?!\\p{L})', why: 'Nunca en el medio de la perífrasis: **lo voy a ver** o **voy a verlo**.' },
              { pattern: '(?<!\\p{L})(?:riegalas|riegalos|riegala|riegalo|abrela|abrelo|abrelas|cierrala|cierralo|dimelo|damelo|damela|escribeme|haciendolo|haciendola|buscandolo|buscandola)(?!\\p{L})', why: 'Falta la tilde: con el pronombre, la palabra es esdrújula: **riégalas**, **ábrela**, **dímelo**, **haciéndolo**.' },
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
            { tone: 'blue', label: 'ANTES · SEPARADO', formula: 'no + pronombre + imperativo · pronombre + verbo conjugado', example: 'No las riegues mucho. Las riego los lunes.', caption: 'con «no» y con un solo verbo conjugado', en: 'with “no” and with a single conjugated verb' },
            { tone: 'orange', label: 'PEGADO · DETRÁS', formula: 'imperativo afirmativo + pronombre · para / sin + infinitivo + pronombre', example: 'Riégalas. Dímelo. Hazlo. Uso un vaso para regarlas.', caption: 'orden afirmativa e infinitivo solo; mira la tilde', en: 'affirmative commands and a lone infinitive; watch the accent mark' },
            { tone: 'teal', label: 'LAS DOS · PERÍFRASIS', formula: 'lo voy a ver = voy a verlo · lo estoy haciendo = estoy haciéndolo', example: 'Te voy a llamar. = Voy a llamarte.', caption: 'antes del primer verbo o pegado al final; nunca en el medio', en: 'before the first verb or attached at the end; never in the middle' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Orden afirmativa: **pegado** (riégalas, dímelo). Con «no»: **antes** (no las riegues). Con dos verbos: **las dos posiciones** (las voy a regar = voy a regarlas). Y la tilde: si la palabra crece y la sílaba fuerte queda en la tercera desde el final, **tilde** (cómpralo, haciéndolo); dime, hazlo y comprarlo no la llevan.', en: 'Affirmative command: attached (riégalas, dímelo). With “no”: before (no las riegues). With two verbs: either position (las voy a regar = voy a regarlas). And the accent: if the word grows and the stress ends up third from the end, write it (cómpralo, haciéndolo); dime, hazlo and comprarlo don’t need one.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'Las llaves están en la mesa. «___ antes de salir».', options: ['Las lleva', 'Lleva las', 'Llévalas'], answer: 2, why: 'Orden afirmativa a tú: pegado y con tilde (LLÉ-va-las).', en: 'The keys are on the table. “Take them before you go out.”' },
            { prompt: 'El pastel es para la cena. «___ todavía, por favor».', options: ['No lo comas', 'No cómelo', 'No lo comes'], answer: 0, why: 'Orden negativa: no + lo + comas. «No lo comes» es presente: una información.', en: 'The cake is for dinner. “Don’t eat it yet, please.”' },
            { prompt: '¿Me ayudas con la maleta? — Sí, ___ después de comer.', options: ['te puedo ayudarte', 'te puedo ayudar', 'puedo te ayudar'], answer: 1, why: 'Poder + infinitivo: te puedo ayudar o puedo ayudarte, una sola vez.', en: 'Can you help me with the suitcase? — Yes, I can help you after lunch.' },
            { prompt: '¿Y la cena? — Estoy ___. Está casi lista.', options: ['haciendola', 'haciéndola', 'la haciendo'], answer: 1, why: 'Gerundio + pronombre: pegado y con tilde (ha-CIÉN-do-la). También: la estoy haciendo.', en: 'And dinner? — I’m making it. It’s almost ready.' },
            { prompt: 'El libro: «___ aquí, en la mesa».', options: ['Pónlo', 'Ponlo', 'Pon lo'], answer: 1, why: 'Pon + lo: PON-lo, dos sílabas, llana: sin tilde y pegado.', en: 'The book: “Put it here, on the table.”' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Ahora, el perro de Mateo.', blocks: [
          { kind: 'lead', text: 'Un mes después, Mateo se va de viaje y ahora Irene cuida a su perro, Rulo. Mateo le deja instrucciones. Cambia el nombre por un pronombre.', en: 'A month later, Mateo goes away and now Irene looks after his dog, Rulo. Mateo leaves her instructions. Replace the noun with a pronoun.' },
          { kind: 'rewrite', title: 'El perro de Mateo · Mateo’s dog', items: [
            { prompt: 'Saca a Rulo dos veces al día.', instruction: 'Cambia «a Rulo» por un pronombre.', accept: ['Sácalo dos veces al día'] },
            { prompt: 'Voy a llevar a Rulo al parque.', instruction: 'Cambia «a Rulo» por un pronombre. Escribe una de las dos posiciones.', accept: ['Voy a llevarlo al parque', 'Lo voy a llevar al parque'] },
            { prompt: 'No bañes a Rulo en invierno.', instruction: 'Cambia «a Rulo» por un pronombre.', accept: ['No lo bañes en invierno'] },
          ] },
        ] },
        { title: 'Ampliación: usted, ustedes y hay que · Extension', mascot: '/brand/mascot/portrait.webp', coach: 'Opcional. Optional.', blocks: [
          { kind: 'lead', text: 'Para ir más lejos: el mismo sistema con usted y ustedes, dos pronombres con perífrasis y la expresión «hay que».', en: 'To go further: the same system with usted and ustedes, two pronouns with a periphrasis, and the expression “hay que”.' },
          { kind: 'choice', title: 'Casos más difíciles · Harder cases', items: [
            { prompt: 'Irene, a la señora Lidia, la vecina mayor (usted): «Mis cartas, ___ a Mateo, por favor».', options: ['se las dé', 'déselas', 'dáselas'], answer: 1, why: 'Usted, orden afirmativa: dé + se + las → DÉ-se-las, pegado y con tilde. «Dáselas» es de tú.', en: 'Irene to Mrs Lidia, the older neighbour: “My letters, please give them to Mateo.”' },
            { prompt: 'A la señora Lidia (usted): «La puerta de la calle, ___ abierta, por favor».', options: ['no la dejes', 'no déjela', 'no la deje'], answer: 2, why: 'Usted, orden negativa: no + la + deje. «No la dejes» es de tú.', en: 'To Mrs Lidia: “The street door, please don’t leave it open.”' },
            { prompt: 'Mateo a dos vecinos (ustedes): «La reunión es aquí. ___, por favor».', options: ['Siéntensen', 'Se sienten', 'Siéntense'], answer: 2, why: 'Ustedes, orden afirmativa: sienten + se → SIÉN-ten-se, con tilde. «Se sienten» es una información.', en: 'Mateo to two neighbours: “The meeting is here. Sit down, please.”' },
            { prompt: 'Las llaves de Irene: «___ el domingo».', options: ['Voy a te las dar', 'Te voy a darlas', 'Te las voy a dar'], answer: 2, why: 'Dos pronombres siempre juntos: te las voy a dar o voy a dártelas.', en: 'Irene’s keys: “I’m going to give them to you on Sunday.”' },
            { prompt: '«Hay que regar las plantas» con pronombre:', options: ['Hay que las regar.', 'Las hay que regar.', 'Hay que regarlas.'], answer: 2, why: 'Con «hay que» + infinitivo, en la lengua general el pronombre va pegado: hay que regarlas. «Hay que» no funciona como «tener que».', en: '“The plants need watering” with a pronoun:' },
          ] },
          { kind: 'teacher', text: 'Paso opcional: para alumnos rápidos o si sobra tiempo. Si no hay tiempo, se puede saltar sin problema.' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 066 · Relativas especificativas con que', text: 'Ya pones los pronombres en su sitio: «Riégalas», «No las riegues», «Las voy a regar». En la clase 066 aprendes otra forma de no repetir palabras: unir dos frases con **que**. «Busco a la mujer. La mujer vive aquí» → «Busco a la mujer **que** vive aquí». Es el paso natural: después de sustituir nombres con pronombres, aprendes a describir personas y cosas dentro de la misma frase.', en: 'You can now put pronouns in the right place: “Riégalas”, “No las riegues”, “Las voy a regar”. In class 066 you learn another way to avoid repeating words: joining two sentences with “que”. It is the natural next step: after replacing nouns with pronouns, you learn to describe people and things inside the same sentence.', href: '/gramatica/relativas-especificativas-con-que', label: 'Ir a la clase 066' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «Tu mejor amigo te deja su coche una semana. ¿Qué te dice?». Respuesta esperada: una orden afirmativa con pronombre, una negativa y un plan: «Lávalo, no lo dejes en la calle, lo voy a necesitar el lunes». Tarea: la nota de Escribir sobre la casa real de tu alumno.' },
        ] },
      ],
    },
  ],
};
