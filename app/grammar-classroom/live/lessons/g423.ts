import type { LiveLesson } from '../types';

/**
 * Lesson 423 · B1 · Concordancia compleja con colectivos y cantidades (course unit G123).
 * Builds on G005/G006/G015 (basic agreement in the noun phrase), G062 (gustar
 * agreement), G114 (ni… ni as a connector) and the B1 past and future tenses.
 * The C1 class on special agreement and postposed subjects (G195) comes later.
 * Scene: the residents of the Álamo 25 building have just voted on turning the
 * rooftop (la azotea) into a shared garden. Elena Robles, the president, and
 * Julián Méndez, the secretary, write the minutes (el acta); Rosa Ibarra and
 * Óscar Lugo are neighbours who worry about the noise and later volunteer.
 * In the voice message (Mexican voice, ustedes) Elena sums up the meeting for
 * the neighbours who could not come.
 * Content (RAE-ASALE norm): a collective noun alone takes a singular verb (la
 * gente dice, la comunidad decidió, la mayoría votó); collective / quantity
 * (la mayoría, la mitad, el 70 %, un tercio, un grupo, una serie, gran cantidad)
 * + de + plural noun admits singular or plural (both correct; plural frequent),
 * + de + singular noun takes singular; coordinated subjects take plural and the
 * person hierarchy (Elena y yo vamos; tú y Óscar vais in Spain / van in
 * America, Canarias and parts of Andalusia; usted y Rosa van everywhere);
 * ni… ni before the verb: plural is the normal choice; cada uno de + plural →
 * singular; uno de los que + plural (recommended); an adjective referring to
 * nouns of both genders → masculine plural; impersonal haber is invariable
 * (había treinta personas, hubo quejas, ha habido, va a haber), with the
 * regional plural «habían» described honestly as non-standard.
 * Ampliación: ser + plural attribute (eran propietarios), más de uno + singular,
 * el resto de + plural. Instructions use tú.
 */
export const lesson: LiveLesson = {
  id: 423,
  level: 'B1',
  title: 'Concordancia compleja con colectivos y cantidades',
  subtitle: 'Informar de una votación o una reunión con la concordancia correcta: «la gente dice», «la mitad votó/votaron», «Elena y yo vamos».',
  legend: [
    { tone: 'blue', label: 'SINGULAR · colectivo solo, cantidad + de + singular, cada uno (la gente dice, la mayoría votó)' },
    { tone: 'teal', label: 'SINGULAR O PLURAL · cantidad + de + plural (la mitad de los vecinos votó / votaron)' },
    { tone: 'orange', label: 'PLURAL · sujetos coordinados, ni… ni, uno de los que (Elena y yo vamos)' },
    { tone: 'violet', label: 'OJO · haber invariable y masculino plural (había treinta personas; están preocupados)' },
  ],
  optionNotes: {
    'habían': 'Haber impersonal («there was / there were») no tiene plural en la norma: **había** treinta personas, **había** muchas cajas.',
    'hubieron': 'Haber impersonal va siempre en singular: **hubo** quejas, **hubo** dos votaciones.',
    'habemos': '«Habemos» se oye en algunas zonas, pero no es la forma normativa. Con haber impersonal: **hay**, **había**, **hubo**.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Muchas personas, ¿verbo en singular o en plural?', coach: 'Mira el núcleo del sujeto. Look at the head of the subject.',
      steps: [
        { title: 'La asamblea del martes · Tuesday’s residents’ meeting', blocks: [
          { kind: 'lead', text: 'Edificio Álamo 25, miércoles por la mañana. Ayer hubo asamblea de vecinos: votaron un proyecto para convertir la azotea en un jardín común. **Elena Robles**, la presidenta, y **Julián Méndez**, el secretario, escriben el acta. En un acta hablas de grupos y cantidades: «la gente», «la mayoría», «la mitad», «el 70 %». Hoy aprendes cuándo el verbo va en **singular**, cuándo en **plural** y cuándo valen **las dos** formas.', en: 'The Álamo 25 building, Wednesday morning. Yesterday there was a residents’ meeting: they voted on a plan to turn the rooftop into a shared garden. Elena Robles, the president, and Julián Méndez, the secretary, are writing the minutes. In minutes you talk about groups and amounts: “people”, “the majority”, “half”, “70 %”. Today you learn when the verb is singular, when it is plural and when both forms are fine.' },
          { kind: 'guide', text: { teacher: 'Tú lees las tres frases del acta y tu alumno repite. Después tu alumno dice cuál es el sujeto de cada frase y si el verbo está en singular o en plural.', self: 'Lee las tres frases en voz alta. ¿Cuál es el sujeto? ¿El verbo está en singular o en plural? (What is the subject? Is the verb singular or plural?)' } },
          { kind: 'compare', title: 'Tres frases del acta · Three sentences from the minutes', columns: [
            { tone: 'blue', label: 'COLECTIVO SOLO · singular', sentence: '[[La gente quiere|blue]] un jardín.', idea: '«Gente» significa muchas personas, pero es un nombre singular: el verbo va en singular.', en: 'People want a garden. (In Spanish “gente” is grammatically singular.)' },
            { tone: 'teal', label: 'CANTIDAD + DE + PLURAL · las dos', sentence: '[[La mayoría de los vecinos votó|teal]] a favor. / [[La mayoría de los vecinos votaron|teal]] a favor.', idea: 'El verbo puede concordar con «mayoría» (singular) o con «los vecinos» (plural). Las dos son correctas.', en: 'Most of the residents voted in favour. (Both verb forms are correct.)' },
            { tone: 'orange', label: 'DOS SUJETOS · plural', sentence: '[[Elena y Julián preparan|orange]] el acta.', idea: 'Dos personas unidas con «y»: el verbo va en plural.', en: 'Elena and Julián are preparing the minutes.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'La gente del edificio ___ contenta con el proyecto.', options: ['está', 'están', 'estamos'], answer: 0, why: '«La gente» es singular: está. Y el adjetivo también: contenta.', en: 'The people in the building are happy with the plan.' },
            { prompt: 'Elena y Julián ___ el acta el viernes.', options: ['envía', 'enviarán', 'enviará'], answer: 1, why: 'Dos sujetos unidos con «y»: plural, enviarán.', en: 'Elena and Julián will send the minutes on Friday.' },
          ] },
        ] },
        { title: 'Un colectivo solo: singular · A collective noun alone', mascot: '/brand/mascot/studying.webp', coach: 'Un nombre singular, un verbo singular. Singular noun, singular verb.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'COLECTIVO SOLO → SINGULAR', question: '¿Cómo concuerda un nombre que significa «un grupo de personas»?', en: 'How does a noun that means “a group of people” agree?', formula: ['la gente · el público · la comunidad · la asamblea · el equipo · la familia · la policía', 'la mayoría · la mitad (sin «de» + plural) → verbo en singular'],
            meaning: 'Un **nombre colectivo** (collective noun) habla de muchas personas, pero su forma es **singular**. Por eso el verbo y los adjetivos van en singular: «la gente **está contenta**», no «la gente están contentos». Lo mismo con «la mayoría» o «la mitad» cuando van solas: «la mayoría **votó**».',
            examples: [
              { es: '[[La gente dice|blue]] que la azotea está abandonada.', en: 'People say the rooftop has been neglected.' },
              { es: '[[La comunidad decidió|blue]] arreglar la azotea.', en: 'The residents’ association decided to fix the rooftop.' },
              { es: 'Al final, [[la mayoría votó|blue]] a favor.', en: 'In the end, the majority voted in favour.' },
              { es: '[[La mayoría de la gente piensa|blue]] que es una buena idea.', en: 'Most people think it is a good idea.' },
            ],
            note: 'En «la mayoría de la gente» el complemento (la gente) también es singular: no hay ningún plural en el sujeto, así que el verbo va en singular.' },
          { kind: 'tip', icon: '💡', title: '«People» es plural, «la gente» no · “People” is plural, “la gente” is not', text: 'En inglés dices «people **are**», pero en español «la gente **es**», «la gente **está**», «la gente **dice**». Los adjetivos también van en femenino singular: «la gente está **cansada**».', en: 'In English you say “people are”, but in Spanish “la gente es”, “la gente está”, “la gente dice”. Adjectives are feminine singular too: “la gente está cansada”.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'El público ___ mucho al final de la presentación.', options: ['aplaudieron', 'aplaudimos', 'aplaudió'], answer: 2, why: '«El público» es un colectivo solo: singular, aplaudió.', en: 'The audience clapped a lot at the end of the presentation.' },
            { prompt: 'La mayoría de la gente ___ plantas fáciles de cuidar.', options: ['prefieren', 'prefiere', 'preferimos'], answer: 1, why: '«De la gente» es singular: no hay plural en el sujeto. Prefiere.', en: 'Most people prefer plants that are easy to look after.' },
          ] },
        ] },
        { title: 'Cantidad + de + plural: las dos formas · Amount + de + plural: both forms', mascot: '/brand/mascot/standing.webp', coach: 'Núcleo o complemento: tú eliges. Head or complement: you choose.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'CANTIDAD + DE + PLURAL → SINGULAR O PLURAL', question: '¿Y si después viene «de los vecinos», «de los propietarios»?', en: 'And if “de los vecinos”, “de los propietarios” comes after it?', formula: ['la mayoría · la mitad · un tercio · el 70 % · un grupo · una serie · (una) gran cantidad', '+ de + nombre en plural → verbo en singular o en plural'],
            meaning: 'Cuando un colectivo o una cantidad lleva **de + un nombre en plural**, la norma acepta **las dos concordancias**: en singular, con el núcleo (mayoría, mitad, grupo); en plural, con el significado (los vecinos). El plural es muy frecuente. Si el complemento es **singular** (de la gente, del dinero), el verbo va en singular.',
            examples: [
              { es: '[[La mitad de los asistentes llegó|teal]] tarde. / [[La mitad de los asistentes llegaron|teal]] tarde.', en: 'Half of the people at the meeting arrived late.' },
              { es: '[[El 70 % de los propietarios aprobó|teal]] el proyecto. / …[[aprobaron|teal]] el proyecto.', en: '70 % of the owners approved the plan.' },
              { es: '[[La mitad del dinero sale|blue]] del fondo de la comunidad.', en: 'Half of the money comes from the association’s fund.' },
            ] },
          { kind: 'table', title: 'Las dos concordancias · Both kinds of agreement', head: ['Sujeto (subject)', 'Singular', 'Plural', '¿Correcto?'], rows: [
            ['la mayoría de los vecinos', 'votó', 'votaron', 'las dos'],
            ['un tercio de los pisos', 'tiene terraza', 'tienen terraza', 'las dos'],
            ['el 40 % de los propietarios', 'vive aquí', 'viven aquí', 'las dos'],
            ['un grupo de vecinos', 'protestó', 'protestaron', 'las dos'],
            ['una serie de problemas', 'retrasó la obra', 'retrasaron la obra', 'las dos'],
            ['gran cantidad de vecinos', 'participó', 'participaron', 'las dos'],
            ['la mitad **del** dinero (de + singular)', 'sale del fondo', '—', 'solo singular'],
          ], note: 'Con porcentajes se dice «el 70 %» o «un 70 %», y se escribe con un espacio antes de %. Con «ser» o «estar» + un adjetivo o un nombre en plural, lo normal es el plural: «La mayoría de los vecinos **estaban** contentos».' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«El 40 % de los vecinos ___ en el edificio desde hace más de diez años». ¿Qué forma es correcta?', options: ['Solo «viven».', 'Las dos: «vive» y «viven».', 'Solo «vive».'], answer: 1, why: 'Porcentaje + de + nombre en plural: la norma acepta singular y plural.', en: '40 % of the residents have lived in the building for more than ten years. Which form is correct?' },
            { prompt: 'La mitad del presupuesto ___ para las plantas.', options: ['es', 'somos', 'son'], answer: 0, why: '«Del presupuesto» es singular: no hay plural en el sujeto. Es.', en: 'Half of the budget is for the plants.' },
          ] },
        ] },
        { title: 'Varios sujetos: plural · Several subjects: plural', mascot: '/brand/mascot/speaking.webp', coach: 'Con «yo» en el grupo, nosotros. With “yo” in the group, use “we”.', blocks: [
          { kind: 'table', title: 'Sujetos coordinados · Coordinated subjects', head: ['Sujeto (subject)', 'Persona del verbo (verb person)', 'Ejemplo'], rows: [
            ['Elena **y yo** · tú y yo · usted y yo', 'nosotros / nosotras', 'Elena y yo **vamos** a la azotea.'],
            ['tú **y** Óscar', 'vosotros (España) · ustedes (América, Canarias y partes de Andalucía)', 'Tú y Óscar **vais** a regar. / Tú y Óscar **van** a regar.'],
            ['usted **y** Rosa', 'ustedes (en todas partes)', 'Usted y Rosa **firman** el acta.'],
            ['Rosa **y** Óscar', 'ellos / ellas', 'Rosa y Óscar **viven** en el primero.'],
            ['**ni** Rosa **ni** Óscar (delante del verbo)', 'plural (lo normal)', 'Ni Rosa ni Óscar **votaron** en contra.'],
            ['**ni** tú **ni** yo', 'nosotros / nosotras', 'Ni tú ni yo **sabíamos** el precio.'],
          ], note: 'Si hay un «yo» en el grupo, el verbo va en «nosotros»; si hay un «tú» (y no hay «yo»), va en «vosotros» o «ustedes». Cuando «ni… ni» va detrás del verbo, se usan las dos: «No vino ni el administrador ni la tesorera» / «No vinieron ni el administrador ni la tesorera».' },
          { kind: 'tip', icon: '🌎', title: 'Tú y él: vais o van · “You and he”: vais or van', text: 'En España, «tú y Óscar» es «vosotros»: «Tú y Óscar **vais**». En América, en Canarias y en partes de Andalucía, el plural de «tú» es «ustedes»: «Tú y Óscar **van**». Las dos formas son correctas en su variedad. Con «usted y Rosa», todo el mundo usa «ustedes»: «Usted y Rosa **van**».', en: 'In Spain, “tú y Óscar” is “vosotros”: “Tú y Óscar vais”. In Latin America, the Canary Islands and parts of Andalusia, the plural of “tú” is “ustedes”: “Tú y Óscar van”. Both are correct in their variety. With “usted y Rosa”, everyone uses “ustedes”.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Julián y yo ___ con el arquitecto el lunes.', options: ['hablarán', 'hablará', 'hablaremos'], answer: 2, why: 'Hay un «yo» en el sujeto: nosotros, hablaremos.', en: 'Julián and I will talk to the architect on Monday.' },
            { prompt: 'Ni el administrador ni la tesorera ___ a la asamblea.', options: ['vino', 'vinimos', 'vinieron'], answer: 2, why: '«Ni… ni» delante del verbo: lo normal es el plural, vinieron.', en: 'Neither the property manager nor the treasurer came to the meeting.' },
          ] },
        ] },
        { title: 'Cuatro casos fijos · Four fixed cases', mascot: '/autoestudio/mascot/noting.webp', coach: 'Cada uno, uno de los que, adjetivos y haber. Each one, one of those who, adjectives and haber.', blocks: [
          { kind: 'table', title: 'Casos que no cambian · Cases that do not change', head: ['Caso (case)', 'Concordancia (agreement)', 'Ejemplo'], rows: [
            ['cada uno de + plural', 'singular: concuerda con «uno»', '[[Cada uno de los vecinos tiene|blue]] una llave.'],
            ['uno de los que + verbo', 'plural (lo recomendado)', 'Óscar es [[uno de los que más ayudan|orange]].'],
            ['un adjetivo para nombres de los dos géneros', 'masculino plural', 'La puerta y el techo están [[pintados|violet]].'],
            ['haber impersonal: hay, había, hubo, ha habido, va a haber', 'siempre singular', '[[Había|violet]] treinta personas. [[Hubo|violet]] dos votaciones.'],
          ], note: 'En «uno de los que más ayudan», «que» se refiere a «los» (las personas que más ayudan): por eso el plural. En el habla también se oye el singular («uno de los que más ayuda»), pero la norma recomienda el plural.' },
          { kind: 'compare', title: 'Haber impersonal · Impersonal haber (there is / there are)', columns: [
            { tone: 'violet', label: 'NORMA · singular', sentence: '[[Había|violet]] muchas quejas. [[Ha habido|violet]] dos reuniones. [[Va a haber|violet]] cambios.', idea: 'Haber impersonal no tiene sujeto: «muchas quejas» es el complemento. Por eso no concuerda.', en: 'There were a lot of complaints. There have been two meetings. There are going to be changes.' },
            { tone: 'neutral', label: 'USO REGIONAL · no normativo', sentence: '«Habían muchas quejas». «Han habido dos reuniones».', idea: 'Se oye mucho en muchos países de América y en algunas zonas de España, pero la norma culta recomienda el singular.', en: 'You will hear this plural in many places, but standard Spanish uses the singular.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Cada uno de los propietarios ___ una cuota extra en enero.', options: ['pagará', 'pagaremos', 'pagarán'], answer: 0, why: '«Cada uno» es el núcleo: singular, pagará.', en: 'Each of the owners will pay an extra fee in January.' },
            { prompt: 'Rosa y Óscar estaban ___ por el ruido de las obras.', options: ['preocupados', 'preocupadas', 'preocupado'], answer: 0, why: 'Una mujer y un hombre: masculino plural, preocupados.', en: 'Rosa and Óscar were worried about the noise of the building work.' },
            { prompt: 'En la asamblea ___ más gente que el año pasado.', options: ['hubieron', 'había', 'habían'], answer: 1, why: 'Haber impersonal: siempre singular, había.', en: 'There were more people at the meeting than last year.' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: '¿Cuál es el núcleo? What is the head?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la frase con el error y tu alumno explica qué falla: ¿cuál es el núcleo del sujeto? Después aparece la corrección.', self: 'Lee cada frase y busca el núcleo del sujeto. Toca para ver la corrección. (Find the head of the subject.)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'La gente están muy contentos con el jardín.', right: 'La gente está muy contenta con el jardín.', why: '«La gente» es singular y femenino: está contenta. (“La gente” is singular.)' },
            { wrong: 'Habían treinta y dos personas en la asamblea.', right: 'Había treinta y dos personas en la asamblea.', why: 'Haber impersonal no concuerda: había. «Treinta y dos personas» no es el sujeto. (Impersonal haber stays singular.)' },
            { wrong: 'Cada uno de los vecinos tienen su llave.', right: 'Cada uno de los vecinos tiene su llave.', why: 'El núcleo es «uno», no «vecinos»: tiene. (The head is “uno”.)' },
            { wrong: 'Elena y yo van a hablar con el administrador.', right: 'Elena y yo vamos a hablar con el administrador.', why: 'Con «yo» en el sujeto, el verbo va en «nosotros»: vamos. (With “yo”, use the “we” form.)' },
            { wrong: 'La puerta y el techo están pintadas.', right: 'La puerta y el techo están pintados.', why: 'Nombres de los dos géneros: masculino plural. (Mixed genders: masculine plural.)' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué frase es correcta?', options: ['La familia del tercero se mudaron en junio.', 'La familia del tercero se mudó en junio.', 'La familia del tercero nos mudamos en junio.'], answer: 1, why: '«La familia» es un colectivo solo: singular, se mudó.', en: 'Which sentence is correct? (The family on the third floor moved in June.)' },
            { prompt: '¿Qué frase es correcta?', options: ['Ayer hubo dos votaciones.', 'Ayer hubieron dos votaciones.', 'Ayer habían dos votaciones.'], answer: 0, why: 'Haber impersonal, un hecho del pasado: hubo, en singular.', en: 'Which sentence is correct? (Yesterday there were two votes.)' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno describe su edificio, su oficina o su clase con tres frases: una con «la gente», una con «la mayoría de…» y una con «había». Tú preguntas: «¿Cuál es el núcleo del sujeto?».' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'El acta de la asamblea', coach: 'Toca las expresiones marcadas. Tap the marked expressions.',
      steps: [
        { title: 'Escribiendo el acta · Writing the minutes', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Elena y tu alumno es Julián. Después tu alumno toca cada expresión marcada y dice si el verbo va en singular, en plural o si valen las dos formas.', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada: ¿singular, plural o las dos? (Singular, plural or both?)' } },
          { kind: 'explore', title: '¿Qué pongo en el acta?', setting: 'Miércoles, en el portal del edificio Álamo 25. Julián, el secretario, escribe el acta en su portátil. Elena, la presidenta, lo ayuda. Se tutean. (Wednesday, in the lobby of the building. Julián is writing the minutes; Elena helps him. They use tú.)', lines: [
            { who: 'Julián', text: 'Elena, estoy con el acta de ayer. ¿Cuántas personas vinieron al final?', en: 'Elena, I’m working on yesterday’s minutes. How many people came in the end?' },
            { who: 'Elena', text: '[[Había|violet]] treinta y dos personas, casi todos los propietarios. Y [[la gente estaba|blue]] muy animada.', en: 'There were thirty-two people, nearly all the owners. And people were in very good spirits.' },
            { who: 'Julián', text: '¿Y cómo fue la votación del jardín en la azotea?', en: 'And how did the vote on the rooftop garden go?' },
            { who: 'Elena', text: 'Muy clara. [[La mayoría votó|blue]] a favor: [[el 70 % de los propietarios dijeron|teal]] que sí.', en: 'Very clear. The majority voted in favour: 70 % of the owners said yes.' },
            { who: 'Julián', text: '¿Y los demás? Me pareció que [[un grupo de vecinos se quejó|teal]] del precio.', en: 'And the rest? I had the impression that a group of residents complained about the cost.' },
            { who: 'Elena', text: 'Del precio y del ruido. [[Rosa y Óscar estaban|orange]] [[preocupados|violet]] por las obras.', en: 'About the cost and the noise. Rosa and Óscar were worried about the building work.' },
            { who: 'Julián', text: 'Normal: Óscar es [[uno de los que más trabajan|orange]] desde casa. ¿Y el presupuesto?', en: 'Understandable: Óscar is one of the people who work from home the most. And the budget?' },
            { who: 'Elena', text: 'Ese es el problema: [[ni el administrador ni la tesorera trajeron|orange]] las cifras finales.', en: 'That’s the problem: neither the property manager nor the treasurer brought the final figures.' },
            { who: 'Julián', text: 'Vaya. Entonces, ¿qué pongo sobre el dinero?', en: 'Oh dear. So what do I put about the money?' },
            { who: 'Elena', text: 'Pon que [[cada uno de los propietarios pagará|blue]] una cuota extra y que [[la mitad del dinero sale|blue]] del fondo de la comunidad.', en: 'Put that each owner will pay an extra fee and that half of the money comes from the association’s fund.' },
            { who: 'Julián', text: 'Perfecto. [[Tú y yo revisamos|orange]] el acta el viernes y la mandamos a todos, ¿te parece?', en: 'Perfect. You and I check the minutes on Friday and send them to everyone, OK?' },
            { who: 'Elena', text: 'Sí. Y escribe que [[va a haber|violet]] otra reunión en febrero: [[la gente quiere|blue]] ver los planos.', en: 'Yes. And write that there’s going to be another meeting in February: people want to see the plans.' },
          ], notes: {
            'Había': 'Haber impersonal: **había** treinta y dos personas, en singular. No «habían».',
            'la gente estaba': '«La gente» es singular: **estaba**, y el adjetivo también, animada.',
            'La mayoría votó': '«La mayoría» sin «de» + plural: verbo en singular, **votó**.',
            'el 70 % de los propietarios dijeron': 'Porcentaje + de + plural: Elena usa el plural (dijeron), pero «dijo» también es correcto.',
            'un grupo de vecinos se quejó': 'Grupo + de + plural: aquí en singular (se quejó); «se quejaron» también es correcto.',
            'Rosa y Óscar estaban': 'Dos sujetos unidos con «y»: plural, **estaban**.',
            'preocupados': 'Una mujer y un hombre: el adjetivo va en **masculino plural**.',
            'uno de los que más trabajan': '«Los que» = las personas que: plural, **trabajan** (lo recomendado). En el habla también se oye «trabaja».',
            'ni el administrador ni la tesorera trajeron': '«Ni… ni» delante del verbo: lo normal es el plural, **trajeron**.',
            'cada uno de los propietarios pagará': 'El núcleo es «uno»: singular, **pagará**, aunque «propietarios» está en plural.',
            'la mitad del dinero sale': '«Del dinero» es singular: el verbo solo puede ir en singular, **sale**.',
            'Tú y yo revisamos': 'Hay un «yo» en el sujeto: el verbo va en «nosotros», **revisamos**.',
            'va a haber': 'Haber impersonal con «ir a»: **va a haber**, siempre en singular. No «van a haber».',
            'la gente quiere': 'Colectivo solo: singular, **quiere**.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Cuántas personas vinieron a la asamblea?', options: ['Treinta y dos.', 'Setenta.', 'Solo la mitad de los propietarios.'], answer: 0, why: '«Había treinta y dos personas, casi todos los propietarios».', en: 'How many people came to the meeting?' },
            { prompt: '¿Por qué estaban preocupados Rosa y Óscar?', options: ['Por la fecha de la reunión.', 'Por el ruido de las obras.', 'Porque no les gustan las plantas.'], answer: 1, why: '«Rosa y Óscar estaban preocupados por las obras»; Óscar trabaja mucho desde casa.', en: 'Why were Rosa and Óscar worried?' },
            { prompt: '¿Qué problema hay con el presupuesto?', options: ['La asamblea votó en contra.', 'Nadie trajo las cifras finales.', 'Es demasiado caro para la comunidad.'], answer: 1, why: '«Ni el administrador ni la tesorera trajeron las cifras finales».', en: 'What is the problem with the budget?' },
          ] },
        ] },
        { title: '¿Singular, plural o las dos? · Singular, plural or both?', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'classify', title: 'Frases del acta · Sentences from the minutes', categories: [
            { id: 'sing', label: 'SOLO SINGULAR', tone: 'blue' },
            { id: 'dos', label: 'SINGULAR O PLURAL', tone: 'teal' },
            { id: 'plu', label: 'SOLO PLURAL', tone: 'orange' },
          ], items: [
            { text: 'La gente ___ ver los planos. (querer)', answer: 'sing', why: 'Colectivo solo: quiere.' },
            { text: 'El 70 % de los propietarios ___ que sí. (decir)', answer: 'dos', why: 'Porcentaje + de + plural: dijo o dijeron.' },
            { text: 'Rosa y Óscar ___ preocupados. (estar)', answer: 'plu', why: 'Dos sujetos con «y»: estaban.' },
            { text: 'Cada uno de los propietarios ___ una cuota. (pagar)', answer: 'sing', why: 'El núcleo es «uno»: pagará.' },
            { text: 'Un grupo de vecinos ___ del precio. (quejarse)', answer: 'dos', why: 'Grupo + de + plural: se quejó o se quejaron.' },
            { text: 'Tú y yo ___ el acta el viernes. (revisar)', answer: 'plu', why: 'Con «yo» en el sujeto: revisamos.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: «¿Y cómo dirías “un grupo de vecinos se quejó” en plural? ¿Cambia el significado?». Respuesta: «se quejaron»; el significado es el mismo.' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Busca el núcleo del sujeto. Find the head of the subject.',
      steps: [
        { title: 'Las semanas después · The weeks after', blocks: [
          { kind: 'choice', items: [
            { context: 'Julián corrige el acta. (Julián corrects the minutes.)', prompt: 'La asamblea ___ el proyecto por mayoría.', options: ['aprobamos', 'aprobó', 'aprobaron'], answer: 1, why: '«La asamblea» es un colectivo sin complemento: singular, aprobó.', en: 'The meeting approved the plan by a majority.' },
            { context: 'El plano del arquitecto. (The architect’s plan.)', prompt: 'La mitad de la azotea ___ plantas aromáticas: romero, menta, albahaca.', options: ['tendrán', 'tendremos', 'tendrá'], answer: 2, why: '«De la azotea» es singular: no hay ningún plural en el sujeto. Tendrá.', en: 'Half of the rooftop will have herbs: rosemary, mint, basil.' },
            { context: 'Elena avisa a Julián. (Elena lets Julián know.)', prompt: 'Ni Rosa ni Óscar ___ venir a la reunión de febrero: están de viaje.', options: ['podrá', 'podrán', 'podremos'], answer: 1, why: '«Ni… ni» delante del verbo: lo normal es el plural, podrán.', en: 'Neither Rosa nor Óscar will be able to come to the February meeting: they are away.' },
            { context: 'Elena habla con el arquitecto. (Elena talks to the architect.)', prompt: 'El sábado, Julián y yo ___ la azotea con usted.', options: ['visitaremos', 'visitará', 'visitarán'], answer: 0, why: 'Con «yo» en el sujeto: nosotros, visitaremos.', en: 'On Saturday, Julián and I will visit the rooftop with you.' },
            { context: 'Antes de las obras. (Before the work starts.)', prompt: 'En la azotea ___ muchas cajas viejas que había que tirar.', options: ['hubieron', 'habían', 'había'], answer: 2, why: 'Haber impersonal: siempre singular, había.', en: 'On the rooftop there were lots of old boxes that had to be thrown away.' },
          ] },
        ] },
        { title: '¿Singular, plural o las dos? · Singular, plural or both?', blocks: [
          { kind: 'classify', title: 'El tablón de anuncios · The noticeboard', categories: [
            { id: 'sing', label: 'SOLO SINGULAR', tone: 'blue' },
            { id: 'dos', label: 'SINGULAR O PLURAL', tone: 'teal' },
            { id: 'plu', label: 'SOLO PLURAL', tone: 'orange' },
          ], items: [
            { text: 'La mitad de los vecinos ___ por correo. (votar)', answer: 'dos', why: 'Mitad + de + plural: votó o votaron.' },
            { text: 'El vecindario ___ contento con la idea. (estar)', answer: 'sing', why: '«El vecindario» es un colectivo solo: está.' },
            { text: 'Usted y Rosa ___ las llaves de la azotea. (tener)', answer: 'plu', why: 'Dos sujetos: ustedes, tienen.' },
            { text: 'Un tercio de los pisos ___ vistas al parque. (tener)', answer: 'dos', why: 'Tercio + de + plural: tiene o tienen.' },
            { text: 'Cada uno de los voluntarios ___ una planta. (traer)', answer: 'sing', why: 'El núcleo es «uno»: trae.' },
            { text: 'El portero y su mujer ___ en el bajo. (vivir)', answer: 'plu', why: 'Dos sujetos con «y»: viven.' },
            { text: 'La mitad del jardín ___ sombra por la tarde. (tener)', answer: 'sing', why: '«Del jardín» es singular: tiene.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'La gente del edificio están muy ilusionados con el jardín.', ok: false, options: ['La gente del edificio está muy ilusionada con el jardín.', 'La gente del edificio están muy ilusionadas con el jardín.', 'La gente del edificio es muy ilusionados con el jardín.'], answer: 0, why: '«La gente» es singular y femenino: está ilusionada.' },
            { sentence: 'La mitad de los voluntarios llegaron tarde el primer sábado.', ok: true, why: 'Correcta: mitad + de + plural acepta el plural. «Llegó tarde» también es correcto.' },
            { sentence: 'Habían más de cuarenta macetas en el patio.', ok: false, options: ['Hubieron más de cuarenta macetas en el patio.', 'Habíamos más de cuarenta macetas en el patio.', 'Había más de cuarenta macetas en el patio.'], answer: 2, why: 'Haber impersonal no concuerda con «macetas»: había.' },
            { sentence: 'Cada uno de los vecinos tienen una copia del acta.', ok: false, options: ['Cada uno de los vecinos tenían una copia del acta.', 'Cada uno de los vecinos tiene una copia del acta.', 'Cada uno de los vecinos tengan una copia del acta.'], answer: 1, why: 'El núcleo es «uno»: tiene, en singular.' },
            { sentence: 'La barandilla y el suelo de la azotea ya están pintados.', ok: true, why: 'Correcta: un nombre femenino y uno masculino llevan el adjetivo en masculino plural.' },
            { sentence: 'Tú y Óscar podéis regar las plantas los lunes.', ok: true, why: 'Correcta en España (vosotros). En América diríamos «Tú y Óscar pueden regar…», también correcta.' },
          ] },
        ] },
        { title: 'Los voluntarios · The volunteers', blocks: [
          { kind: 'chat-fill', title: 'Elena y Óscar organizan el jardín · Elena and Óscar organise the garden', lines: [
            { who: 'Óscar', text: 'Elena, ¿cuántos voluntarios ___ en la lista?', options: ['hayan', 'habemos', 'hay'], answer: 2, why: 'Haber impersonal en presente: hay, siempre en singular.' },
            { who: 'Elena', text: 'Doce. Y la mayoría ___ trabajar los sábados por la mañana.', options: ['prefiero', 'preferimos', 'prefiere'], answer: 2, why: '«La mayoría» sola, sin «de» + plural: singular, prefiere.' },
            { who: 'Óscar', text: 'Rosa y yo ___ venir también los domingos, si quieres.', options: ['pueden', 'podemos', 'puede'], answer: 1, why: 'Con «yo» en el sujeto: nosotros, podemos.' },
            { who: 'Elena', text: '¡Genial! ¿Y tú y Rosa ___ guantes y herramientas?', options: ['tenemos', 'tienen', 'tiene'], answer: 1, why: '«Tú y Rosa» = ustedes (en España, vosotros: tenéis). Tienen.' },
            { who: 'Óscar', text: 'Sí. Y las semillas y el abono ya están ___.', options: ['compradas', 'comprado', 'comprados'], answer: 2, why: 'Un nombre femenino (semillas) y uno masculino (abono): masculino plural, comprados.' },
            { who: 'Elena', text: 'Perfecto. Entonces el sábado empezamos.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['La', 'comunidad', 'votó', 'a', 'favor'], accept: ['La comunidad votó a favor'], en: 'The residents’ association voted in favour.' },
            { tiles: ['Ni', 'Elena', 'ni', 'Julián', 'tenían', 'las', 'llaves'], accept: ['Ni Elena ni Julián tenían las llaves', 'Ni Julián ni Elena tenían las llaves'], en: 'Neither Elena nor Julián had the keys.' },
            { tiles: ['Había', 'pocas', 'sillas', 'en', 'la', 'sala'], accept: ['Había pocas sillas en la sala', 'En la sala había pocas sillas'], en: 'There were few chairs in the room.' },
            { tiles: ['El', 'portero', 'y', 'la', 'vecina', 'están', 'contentos'], accept: ['El portero y la vecina están contentos', 'La vecina y el portero están contentos'], en: 'The caretaker and the neighbour are happy.' },
          ] },
        ] },
        { title: 'Transforma las frases · Transform the sentences', blocks: [
          { kind: 'rewrite', title: 'Cambia el sujeto · Change the subject', items: [
            { prompt: 'Los vecinos dicen que el jardín es una buena idea.', instruction: 'Empieza con «La gente». Cambia el verbo si hace falta.', accept: ['La gente dice que el jardín es una buena idea'] },
            { prompt: 'Rosa riega las plantas. Yo también riego las plantas.', instruction: 'Une las dos frases en una. Empieza con «Rosa y yo».', accept: ['Rosa y yo regamos las plantas'] },
            { prompt: 'Hay varias quejas por el ruido. (→ ayer, un hecho)', instruction: 'Pon «hay» en indefinido. Empieza con «Ayer».', accept: ['Ayer hubo varias quejas por el ruido'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno cuenta una reunión real (de trabajo, de su clase, de su familia) en tres frases: una con un colectivo, una con un porcentaje o una fracción y una con «había» o «hubo».' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'El resumen de Elena', coach: 'Primero la idea general, después los detalles. Gist first, then details.',
      steps: [
        { title: 'Un mensaje para todos los vecinos · A message for all the residents', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general (¿para quién es el mensaje?). Segunda escucha: tu alumno levanta la mano con cada sujeto de grupo o de cantidad (la mayoría, un grupo de…) y dice si el verbo está en singular o en plural. Después, las preguntas.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Fíjate en los sujetos de grupo o de cantidad y en su verbo: ¿singular o plural? (Listen once for the gist, once for the details.)' } },
          { kind: 'listen', title: 'Resumen de la asamblea', channel: 'MENSAJE DE VOZ · DE ELENA PARA EL GRUPO DE VECINOS', src: '/audio/grammar-live/423.mp3',
            before: 'Elena manda un mensaje de voz al grupo de vecinos del edificio. ¿Qué crees que cuenta: cuánta gente vino, qué votaron, qué problemas hay…? (Elena sends a voice message to the residents’ group. What do you think she talks about?)',
            gist: { prompt: '¿Cuál es la idea general? · What is the main idea?', options: ['Elena pide dinero a los vecinos para las plantas.', 'Elena resume la asamblea para los vecinos que no vinieron.', 'Elena convoca una asamblea urgente por un problema.'], answer: 1, why: '«Les mando un resumen rápido de la asamblea para los que no pudieron venir».', en: 'What is the main idea?' },
            details: [
              { prompt: '¿Qué pidió un grupo de vecinos del primer piso?', options: ['Un jardín más pequeño.', 'Votar otra vez.', 'Obras solo por la mañana.'], answer: 2, why: '«Un grupo de vecinos del primer piso pidió obras solo por la mañana, por el ruido».', en: 'What did a group of residents from the first floor ask for?' },
              { prompt: '¿Por qué no hay todavía presupuesto final?', options: ['Porque la asamblea no lo aprobó.', 'Porque el arquitecto está de viaje.', 'Porque ni el administrador ni la tesorera lo tenían.'], answer: 2, why: '«Ni el administrador ni la tesorera tenían todavía el presupuesto final».', en: 'Why is there no final budget yet?' },
              { prompt: '¿Cuándo van a recibir el acta los vecinos?', options: ['Mañana.', 'En febrero.', 'El viernes, por correo.'], answer: 2, why: '«Cada uno de ustedes recibirá el acta por correo el viernes».', en: 'When will the residents get the minutes?' },
              { prompt: '¿Cuál es la buena noticia del final?', options: ['La mitad del jardín ya está terminada.', 'Rosa y Óscar se apuntaron como voluntarios.', 'La obra va a ser gratis.'], answer: 1, why: '«Rosa y Óscar ya están apuntados como voluntarios para las plantas».', en: 'What is the good news at the end?' },
            ],
            transcript: 'Buenas noches, vecinos. Les habla Elena, la presidenta. Les mando un resumen rápido de la asamblea para los que no pudieron venir. [[Había|violet]] treinta y dos personas, más que nunca. [[La mayoría votó|blue]] a favor del jardín en la azotea: en total, [[el setenta por ciento de los propietarios dijeron|teal]] que sí. [[Un grupo de vecinos del primer piso pidió|teal]] obras solo por la mañana, por el ruido, y [[la asamblea aceptó|blue]] la propuesta. Sobre el dinero: [[ni el administrador ni la tesorera tenían|orange]] todavía el presupuesto final, así que [[Julián y yo vamos|orange]] a hablar con ellos esta semana. [[Cada uno de ustedes recibirá|blue]] el acta por correo el viernes. Ah, y una buena noticia: Rosa y Óscar ya están [[apuntados|violet]] como voluntarios para las plantas. ¿Alguien más se anima? Buenas noches a todos.',
            reply: { teacher: 'Tú eres Elena. Tu alumno es un vecino que no fue a la asamblea y responde al mensaje con tres frases: qué le parece el resultado, si se apunta como voluntario y una pregunta sobre el dinero.', self: 'Responde a Elena en voz alta como un vecino que no fue: qué te parece el resultado, si te apuntas como voluntario y una pregunta sobre el dinero. (Answer as a resident who missed the meeting.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Grupos, votos y cantidades', coach: 'Habla de grupos con la concordancia correcta. Talk about groups with the right agreement.',
      steps: [
        { title: '¿Qué piensa la mayoría? · What does the majority think?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas. Tu alumno habla de su edificio, su trabajo, su clase o su familia. Si el verbo no concuerda, tú repites la frase con la forma correcta y sigues con la repregunta.', self: 'Lee la pregunta y responde en voz alta. Antes de cada verbo, piensa: ¿cuál es el núcleo del sujeto? (Before each verb, think: what is the head of the subject?)' } },
          { kind: 'talk', cards: [
            { q: '¿Cómo se toman las decisiones en tu edificio, tu trabajo o tu clase? · How are decisions made in your building, your job or your class?', followUps: ['¿Qué prefiere normalmente la mayoría? (What does the majority usually prefer?)', '¿La gente participa mucho? (Do people take part a lot?)'], phrases: ['En mi trabajo, [[la mayoría decide|blue]]…', '[[La gente suele|blue]]…', '[[Un grupo de compañeros organiza|teal]] / [[organizan|teal]]…'], hint: 'Colectivo solo → singular. Colectivo + de + plural → las dos formas.', example: 'En mi trabajo, la mayoría decide por correo. La gente no participa mucho en las reuniones, pero un grupo de compañeros organiza siempre las comidas.', next: 'Ahora, con números.', teacher: 'Cuenta tú también cómo se decide algo en tu entorno: «En mi edificio, la gente…».' },
            { q: 'Imagina una encuesta en tu barrio sobre un jardín común. Inventa los resultados con porcentajes y fracciones. · Imagine a survey in your neighbourhood. Invent the results.', followUps: ['¿Qué opinó la mitad de los vecinos? (What did half of the residents think?)', '¿Y el resto? (And the rest?)'], phrases: ['[[El 60 % de los vecinos quiere|teal]] / [[quieren|teal]]…', '[[La mitad de los encuestados dijo|teal]] / [[dijeron|teal]]…', '[[Un tercio de las familias prefiere|teal]]…'], hint: 'Porcentaje o fracción + de + plural: singular o plural. Elige una y sé coherente en la frase.', example: 'El 60 % de los vecinos quieren un jardín. La mitad de los encuestados dijo que puede ayudar los fines de semana, y un tercio de las familias prefiere un parque infantil.', next: 'Ahora, a repartir tareas.' },
            { q: 'Organizas la fiesta de inauguración del jardín. ¿Quién hace qué? · You’re organising the garden’s opening party. Who does what?', followUps: ['¿Qué trae cada uno? (What does each person bring?)', '¿Y tú con quién vas a trabajar? (Who are you going to work with?)'], phrases: ['[[Rosa y yo vamos|orange]] a…', '[[Tú y Óscar podéis|orange]] / [[pueden|orange]]…', '[[Cada uno de los voluntarios trae|blue]]…'], hint: 'Con «yo» en el sujeto: nosotros. Con «tú y…»: vosotros (España) o ustedes (América). Cada uno: singular.', example: 'Rosa y yo vamos a preparar la comida. Tú y Óscar pueden poner la música. Cada uno de los voluntarios trae una bebida.', next: 'Ahora, un evento.' },
            { q: 'Cuenta un evento al que fuiste: un concierto, una boda, un partido. · Tell me about an event you went to.', followUps: ['¿Cuánta gente había? (How many people were there?)', '¿Cómo reaccionó el público? (How did the audience react?)'], phrases: ['[[Había|violet]] más de… personas.', '[[El público aplaudió|blue]] / [[cantó|blue]]…', '[[Hubo|violet]] un problema con…'], hint: 'Haber impersonal siempre en singular: había, hubo. El público: singular.', example: 'El año pasado fui a un concierto en un parque. Había más de cinco mil personas. Hubo un problema con el sonido, pero el público cantó todas las canciones.', next: 'Ahora, una persona.' },
            { q: 'Habla de dos personas de tu entorno: ¿quién ayuda más, quién no participa nunca? · Talk about two people around you.', followUps: ['¿Es uno de los que más trabajan? (Is he one of those who work the most?)', '¿Están contentos con su trabajo? (Are they happy with their job?)'], phrases: ['Mi compañero es [[uno de los que más ayudan|orange]].', '[[Ni mi jefe ni mi jefa saben|orange]]…', 'Mi hermano y mi cuñada están [[contentos|violet]]…'], hint: 'Uno de los que + plural. Ni… ni delante del verbo: plural. Un hombre y una mujer: masculino plural.', example: 'Mi compañera Lucía es una de las que más ayudan en la oficina. Ni mi jefe ni mi jefa saben todo lo que hace. Mi hermano y mi cuñada también están contentos con ella.', teacher: 'Si tu alumno dice «uno de los que más ayuda», tú respondes con el plural: «Ah, uno de los que más ayudan». Es frecuente, pero la norma recomienda el plural.' },
            { q: 'Ahora tú eres Elena. Un vecino que no fue a la asamblea te pregunta: «¿Qué pasó ayer?». Cuéntaselo en seis frases. · Now you are Elena. Tell a neighbour what happened.', followUps: ['¿Y quién va a hablar con el administrador? (And who is going to talk to the property manager?)', '¿Cuánto va a pagar cada uno? (How much will each person pay?)'], phrases: ['[[Había|violet]]… [[La mayoría votó|blue]]…', '[[El 70 % de los propietarios dijo|teal]] / [[dijeron|teal]]…', '[[Julián y yo vamos|orange]] a…'], hint: 'Mezcla los cinco casos: colectivo, cantidad + de, sujetos coordinados, cada uno y haber.', example: 'Había treinta y dos personas. La mayoría votó a favor del jardín: el 70 % de los propietarios dijo que sí. Un grupo de vecinos se quejó del ruido. Ni el administrador ni la tesorera trajeron el presupuesto. Julián y yo vamos a hablar con ellos. Cada uno de los propietarios pagará una cuota extra.', teacher: 'Tú eres el vecino y reaccionas: «¿Y cuántos votaron en contra?», «¿Quién va a hablar con el administrador?». Después, cambian los papeles.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno hace las preguntas («¿Cuánta gente había?», «¿Qué votó la mayoría?») y tú cuentas una reunión de tu vida real.', self: 'Ahora haz tú las preguntas en voz alta («¿Cuánta gente había?», «¿Qué votó la mayoría?») y responde con una reunión de tu vida. (Now ask the questions aloud and answer them.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Un aviso para el tablón', coach: 'Grupos, cifras y nombres: cada uno con su verbo. Groups, figures and names: each with its verb.',
      steps: [
        { title: 'El resumen de la asamblea · The summary of the meeting', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Después revisan juntos cada sujeto: ¿cuál es el núcleo? ¿El verbo va en singular, en plural o valen las dos formas? Tu alumno lee su aviso en voz alta.', self: 'Escribe tu aviso y toca «Revisar mi texto». Después, mira cada sujeto: ¿cuál es el núcleo? (Write your notice and tap “Revisar mi texto”. Then check the head of each subject.)' } },
          { kind: 'write', title: 'Aviso para los vecinos · Notice for the residents', situation: 'Eres Julián, el secretario (o tú, en una reunión de tu trabajo, tu clase o tu club). Escribe un aviso breve para el tablón: resume la reunión para las personas que no fueron. (You are Julián, the secretary, or yourself after a meeting at work, school or a club. Write a short notice for the noticeboard summarising the meeting for those who missed it.)', task: [
            'Di qué reunión fue, cuándo y cuánta gente había. (Say which meeting, when, and how many people there were.)',
            'Da el resultado con un colectivo o una cantidad: la mayoría, la mitad, el 70 %… (Give the result with a group word or an amount.)',
            'Explica un problema con «ni… ni» o con un grupo de personas. (Explain a problem with “ni… ni” or a group.)',
            'Di qué vas a hacer tú con otra persona: «Elena y yo…». (Say what you and someone else are going to do.)',
            'Termina con lo que hace o recibe cada uno. (End with what each person does or receives.)',
          ], starters: ['Aviso a los vecinos:', 'El martes hubo…', 'Había…', 'La mayoría…', 'El … % de los propietarios…', 'Ni… ni…', '… y yo vamos a…', 'Cada uno de…'],
            words: ['había', 'hubo', 'la gente', 'la mayoría', 'la mitad', 'un grupo de', 'el 70 %', 'ni… ni', 'cada uno de', 'y yo', 'contentos', 'preocupados'],
            model: 'Aviso a los vecinos: el martes [[hubo|violet]] asamblea en el portal. [[Había|violet]] treinta y dos personas. [[La mayoría votó|blue]] a favor del jardín en la azotea: [[el 70 % de los propietarios dijeron|teal]] que sí. [[Un grupo de vecinos del primer piso se quejó|teal]] del ruido, así que las obras serán solo por la mañana. Todavía no tenemos el presupuesto final, porque [[ni el administrador ni la tesorera lo trajeron|orange]]. [[Elena y yo vamos|orange]] a hablar con ellos esta semana. [[Cada uno de los propietarios recibirá|blue]] el acta por correo el viernes. Gracias a todos. Julián Méndez, secretario.',
            minWords: 70,
            checks: [
              { label: 'Haber impersonal: había o hubo (impersonal haber)', pattern: '(?<!\\p{L})(?:había|habia|hubo|hay|ha\\s+habido|va\\s+a\\s+haber)(?!\\p{L})', tip: 'Di cuánta gente había: «Había treinta personas», «Hubo asamblea».' },
              { label: 'Un colectivo o una cantidad (a group word or an amount)', pattern: '(?<!\\p{L})(?:la\\s+gente|la\\s+mayoría|la\\s+mayoria|la\\s+mitad|un\\s+tercio|un\\s+grupo\\s+de|el\\s+\\d+\\s?%|un\\s+\\d+\\s?%|\\p{L}+\\s+por\\s+ciento)(?!\\p{L})', tip: 'Da el resultado: «La mayoría votó a favor», «El 70 % de los propietarios dijo / dijeron que sí».' },
              { label: 'Tú y otra persona: «… y yo» + nosotros (you and someone else)', pattern: '(?<!\\p{L})y\\s+yo\\s+\\p{L}+(?:amos|emos|imos)(?!\\p{L})', tip: 'Con «yo» en el sujeto, el verbo va en «nosotros»: «Elena y yo vamos a…».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})la\\s+gente\\s+(?:no\\s+)?(?:dicen|piensan|quieren|están|estan|estaban|son|eran|van|tienen|prefieren|votaron|dijeron)(?!\\p{L})', why: '«La gente» es singular: **la gente dice, está, quiere, votó**.' },
              { pattern: '(?<!\\p{L})(?:habían|habian|hubieron)\\s+(?:muchos|muchas|varios|varias|pocos|pocas|unos|unas|más|mas|\\d+|dos|tres|cuatro|cinco|veinte|treinta|cuarenta)(?!\\p{L})', why: 'Haber impersonal va en singular: **había** treinta personas, **hubo** varias quejas.' },
              { pattern: '(?<!\\p{L})cada\\s+uno\\s+de\\s+(?:los|las|nosotros|nosotras|ustedes|ellos|ellas)\\s+(?:\\p{L}+\\s+)?(?:tienen|pagan|pagarán|reciben|recibirán|van|deben|pueden|traen)(?!\\p{L})', why: 'Con «cada uno de…», el verbo concuerda con «uno»: **cada uno de los propietarios recibirá**.' },
            ] },
        ] },
      ],
    },
    {
      id: 'cerrar', label: 'Cerrar', icon: '✓', mascot: '/brand/mascot/standing.webp',
      title: 'Lo esencial', coach: '¿Qué te llevas hoy? What do you take away today?',
      steps: [
        { title: 'Lo esencial · The essentials', blocks: [
          { kind: 'recap', items: [
            { tone: 'blue', label: 'SOLO SINGULAR', formula: 'colectivo solo · cantidad + de + singular · cada uno de', example: 'La gente dice… · La mitad del dinero sale… · Cada uno de los vecinos tiene…', caption: 'el núcleo es singular y no hay plural que mande', en: 'the head is singular and there is no plural to agree with' },
            { tone: 'teal', label: 'SINGULAR O PLURAL', formula: 'la mayoría · la mitad · el 70 % · un grupo + de + plural', example: 'La mayoría de los vecinos votó / votaron a favor.', caption: 'las dos son correctas; el plural es muy frecuente', en: 'both are correct; the plural is very common' },
            { tone: 'orange', label: 'SOLO PLURAL', formula: 'A y B · ni A ni B (delante) · uno de los que', example: 'Elena y yo vamos. · Tú y Óscar vais / van. · Es uno de los que más ayudan.', caption: 'con «yo» → nosotros; con «tú» → vosotros o ustedes', en: 'with “yo” → we; with “tú” → vosotros or ustedes' },
            { tone: 'violet', label: 'OJO', formula: 'haber impersonal · masculino plural', example: 'Había treinta personas. · La puerta y el techo están pintados.', caption: 'haber no concuerda; los dos géneros → masculino plural', en: 'haber does not agree; mixed genders → masculine plural' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Antes de conjugar, busca el **núcleo del sujeto**. Si es un colectivo solo («la gente», «la asamblea»), singular. Si es una cantidad + **de + plural** («la mitad de los vecinos»), puedes elegir. Si hay **dos sujetos**, plural, y «yo» manda sobre «tú». Y haber impersonal nunca concuerda: «**había** treinta personas».', en: 'Before you conjugate, find the head of the subject. A collective noun alone (“la gente”, “la asamblea”): singular. An amount + de + plural (“la mitad de los vecinos”): you can choose. Two subjects: plural, and “yo” beats “tú”. And impersonal haber never agrees: “había treinta personas”.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'El público ___ de pie al final del concierto.', options: ['aplaudieron', 'aplaudimos', 'aplaudió'], answer: 2, why: '«El público» es un colectivo solo: singular, aplaudió.', en: 'The audience gave a standing ovation at the end of the concert.' },
            { prompt: 'En la oficina ___ dos reuniones esta mañana.', options: ['han habido', 'ha habido', 'hemos habido'], answer: 1, why: 'Haber impersonal, también en perfecto: ha habido, en singular.', en: 'There have been two meetings at the office this morning.' },
            { prompt: 'Mi hermano y yo ___ en el mismo equipo de baloncesto.', options: ['juegan', 'juega', 'jugamos'], answer: 2, why: 'Con «yo» en el sujeto: nosotros, jugamos.', en: 'My brother and I play in the same basketball team.' },
            { prompt: '«La mitad de los estudiantes ___ el examen». ¿Qué es correcto?', options: ['«Aprobó» y «aprobaron».', 'Solo «aprobaron».', 'Solo «aprobó».'], answer: 0, why: 'Mitad + de + plural: las dos concordancias son correctas.', en: 'Half of the students passed the exam. What is correct?' },
            { prompt: 'Mi abuela y mi abuelo están muy ___ con su nuevo piso.', options: ['contentos', 'contentas', 'contento'], answer: 0, why: 'Una mujer y un hombre: masculino plural, contentos.', en: 'My grandmother and grandfather are very happy with their new flat.' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Ahora, en una empresa. Now, at a company.', blocks: [
          { kind: 'lead', text: 'Una empresa hace una encuesta sobre la cafetería. Lucía, de recursos humanos, escribe el informe. Corrige sus notas: cambia el sujeto o el tiempo y adapta el verbo.', en: 'A company runs a survey about its canteen. Lucía, from HR, writes the report. Correct her notes: change the subject or the tense and adapt the verb.' },
          { kind: 'rewrite', title: 'La encuesta · The survey', items: [
            { prompt: 'Muchas personas de la oficina piensan que la cafetería es cara.', instruction: 'Empieza con «La gente de la oficina».', accept: ['La gente de la oficina piensa que la cafetería es cara'] },
            { prompt: 'Marta va a la reunión con la empresa de la cafetería. Yo también voy.', instruction: 'Une las dos frases en una. Empieza con «Marta y yo».', accept: ['Marta y yo vamos a la reunión con la empresa de la cafetería'] },
            { prompt: 'Hay muchas sugerencias en el buzón. (→ el mes pasado, descripción)', instruction: 'Pon «hay» en imperfecto. Empieza con «El mes pasado».', accept: ['El mes pasado había muchas sugerencias en el buzón'] },
          ] },
        ] },
        { title: 'Ampliación · Extension: casos más finos', mascot: '/autoestudio/mascot/noting.webp', coach: 'Para ir más lejos. To go further.', blocks: [
          { kind: 'lead', text: 'Tres casos más para alumnos que quieren precisión: **ser + atributo en plural** (lo normal es el plural), **más de uno** (singular) y **el resto de + plural** (las dos formas).', en: 'Three more cases for learners who want precision: ser + a plural complement (the plural is normal), más de uno (singular) and el resto de + plural (both forms).' },
          { kind: 'choice', title: 'Casos finos · Finer points', items: [
            { prompt: 'La mayoría de los asistentes ___ propietarios; solo había cuatro inquilinos.', options: ['eran', 'fue', 'éramos'], answer: 0, why: 'Con «ser» y un atributo en plural (propietarios), lo normal es el plural: eran.', en: 'Most of the people present were owners; there were only four tenants.' },
            { prompt: 'Más de un vecino ___ del olor del abono.', options: ['se quejó', 'nos quejamos', 'se quejaron'], answer: 0, why: '«Más de un vecino» concuerda con «un vecino»: singular, se quejó, aunque signifique varias personas.', en: 'More than one resident complained about the smell of the fertiliser.' },
            { prompt: '«El resto de los vecinos ___ por correo». ¿Qué es correcto?', options: ['Solo «votaron».', '«Votó» y «votaron».', 'Solo «votó».'], answer: 1, why: '«El resto» + de + plural funciona como «la mayoría de»: las dos concordancias son correctas.', en: 'The rest of the residents voted by post. What is correct?' },
            { prompt: 'Los voluntarios, cada uno con su regadera, ___ a las nueve.', options: ['llegamos', 'llegó', 'llegaron'], answer: 2, why: 'Aquí el sujeto es «los voluntarios»; «cada uno con su regadera» es un inciso. Plural: llegaron.', en: 'The volunteers, each with their watering can, arrived at nine.' },
          ] },
          { kind: 'teacher', text: 'Paso opcional: para alumnos con buen nivel o si sobra tiempo. Si no hay tiempo, pasan directamente al siguiente paso.' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 124 · Elipsis y reformulación: evitar repeticiones', text: 'Ya informas de grupos y cantidades con la concordancia correcta: «la mayoría votó», «Elena y yo vamos», «había treinta personas». En la clase 124 aprendes a no repetir esos sujetos: «La mayoría votó a favor; el resto, en contra», «Rosa quiere menta y Óscar, romero». Es el paso natural: cuando sabes con qué concuerda cada verbo, puedes quitar palabras sin perder el sentido.', en: 'You can now report on groups and amounts with the right agreement: “la mayoría votó”, “Elena y yo vamos”, “había treinta personas”. In class 124 you learn not to repeat those subjects: “La mayoría votó a favor; el resto, en contra”. It is the natural next step: once you know what each verb agrees with, you can leave words out without losing the meaning.', href: '/decir-mas-sin-repetir', label: 'Ir a la clase 124' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Qué piensa la gente de tu ciudad sobre el transporte público? ¿Y la mayoría de tus amigos?». Respuesta esperada: «La gente piensa…», «La mayoría de mis amigos usa / usan…». Tarea: escribir el aviso de Escribir sobre una reunión real.' },
        ] },
      ],
    },
  ],
};
