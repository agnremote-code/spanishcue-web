import type { LiveLesson } from '../types';

/**
 * Lesson 521 · C2 · Modalización sutil: certeza, reserva e insinuación (course unit G221).
 * Builds on G158 (lesson 458: deber / deber de), G173 (lesson 473: the certainty scale and
 * evidentiality), G191 (lesson 491: attenuation), G211 (lesson 511: «que yo sepa» as a comment
 * clause) and G218 (lesson 518: irony). Those are not retaught. C2 step: calibrating exactly
 * how much you commit to a claim, and saying things without asserting them. Content: (1) a
 * fine scale of commitment with its moods (es indudable que / no cabe duda de que + ind.;
 * todo indica que, cabe pensar que + ind.; es posible que, no es descartable que, no cabe
 * excluir que + subj.; the double negation no es imposible que + subj.; negation flips the
 * mood: nada indica que, no está claro que + subj.); (2) limits and reserve: que yo sepa,
 * en principio (≠ en un principio), a priori, presumiblemente (≠ presuntamente), a todas
 * luces; deber + inf. (obligation) / deber de + inf. (probability), as the DPD states it
 * (deber alone for probability is also accepted; deber de for obligation is discouraged),
 * and the ambiguity of «debía conocer»; (3) insinuation and implicature: No digo que +
 * subj., pero…; Habría que ver si / qué / quién…; Me limito a constatar que…; (4) preterition
 * (No voy a hablar de…, ni a mencionar…; por no hablar de; no entraré en) and irony through
 * overstatement. Practice: rank statements by commitment, rewrite to insinuate, spot
 * preterition. Ampliación: implicatures can be cancelled, assertions cannot; scientific
 * reserve. Scene: the olive-oil cooperative Sierra Clara elects its board. Challenger
 * Mercedes Aranda rehearses her speech with her adviser Daniel Robles; president Rodrigo
 * Salcedo and treasurer Luis Montero are in office; member Pilar Cuesta asks questions.
 * Escuchar: Mercedes's speech at the assembly (es-MX-DaliaNeural). Escribir: her open letter.
 */
export const lesson: LiveLesson = {
  id: 521,
  level: 'C2',
  title: 'Modalización sutil: certeza, reserva e insinuación',
  subtitle: 'Graduar con precisión cuánto te comprometes con lo que dices y sugerir sin afirmar: reservas, insinuaciones, pretericiones e ironía.',
  legend: [
    { tone: 'blue', label: 'ESCALA DE COMPROMISO · es indudable que, todo indica que, cabe pensar que, no es descartable que (how far you commit)' },
    { tone: 'teal', label: 'LÍMITES Y RESERVA · que yo sepa, en principio, a priori, presumiblemente, deber de (fencing the claim)' },
    { tone: 'violet', label: 'INSINUACIÓN · no digo que…, pero; habría que ver; me limito a constatar (implying without asserting)' },
    { tone: 'orange', label: 'PRETERICIÓN E IRONÍA · no voy a hablar de…, por no hablar de, elogio exagerado (saying by not saying)' },
  ],
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: '¿Cuánto te comprometes con lo que dices?', coach: 'Cada palabra tiene un precio. Every word commits you to something.',
      steps: [
        { title: 'La víspera de la asamblea · The night before the vote', blocks: [
          { kind: 'lead', text: 'Cooperativa del aceite Sierra Clara, víspera de la asamblea anual. Mercedes Aranda se presenta contra el presidente, Rodrigo Salcedo. Tiene datos firmes (la auditoría llegó con cuatro meses de retraso), sospechas razonables (la junta lo sabía desde marzo) y rumores sin papeles (la venta barata de una parcela). Su asesor, Daniel Robles, le repite una idea: **cada fórmula te compromete con una cantidad exacta de verdad**. Hoy vas a afinar esa escala y a ver cómo se **sugiere sin afirmar**: reservas, insinuaciones, pretericiones e ironía.', en: 'An olive-oil cooperative on the eve of its annual election. The challenger has hard facts, reasonable suspicions and unbacked rumours, and each needs a different level of commitment. Today you fine-tune that scale and learn how Spanish suggests things without asserting them.' },
          { kind: 'guide', text: { teacher: 'Tú lees las tres versiones en voz alta y tu alumno dice cuál podría defender Mercedes ante un juez, cuál ante un periodista y cuál solo en una asamblea.', self: 'Lee las tres versiones: ¿cuál podrías defender si te piden pruebas? (Which one could you defend if asked for proof?)' } },
          { kind: 'compare', title: 'Un mismo asunto, tres compromisos · One issue, three levels of commitment', columns: [
            { tone: 'neutral', label: 'AFIRMAR', sentence: 'La junta ocultó la auditoría a los socios.', idea: 'Compromiso total: si no puedes probarlo, te expones.', en: 'Full commitment: a flat accusation that must be proven.' },
            { tone: 'blue', label: 'GRADUAR', sentence: '[[Todo indica que|blue]] la junta conocía el retraso desde marzo.', idea: 'Inferencia sólida apoyada en un indicio, sin presentarla como prueba.', en: 'A strong inference based on evidence, presented as an inference, not a proven fact.' },
            { tone: 'violet', label: 'INSINUAR', sentence: '[[No digo que|violet]] nadie ocultara nada, pero [[habría que ver|violet]] por qué no nos avisaron.', idea: 'No afirma nada; deja que el oyente saque la conclusión.', en: 'Asserts nothing, yet leads listeners to the conclusion and leaves the speaker room to deny it.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué versión obliga a Mercedes a aportar pruebas?', options: ['Todo indica que la junta conocía el retraso.', 'No digo que nadie ocultara nada, pero habría que ver…', 'La junta ocultó la auditoría a los socios.'], answer: 2, why: 'La afirmación categórica compromete por completo. «Todo indica que» se presenta como inferencia y la insinuación no afirma nada.', en: 'Only the flat assertion commits her fully to the claim.' },
            { prompt: '¿Por qué le interesa a Mercedes la tercera versión?', options: ['Porque afirma con más fuerza.', 'Porque es más corta.', 'Porque sugiere la sospecha y le permite negar que haya acusado.'], answer: 2, why: 'La insinuación transmite la sospecha como implicatura: el oyente la infiere, pero Mercedes no la ha dicho.', en: 'An insinuation gets the suspicion across while leaving room for denial.' },
          ] },
        ] },
        { title: 'La escala de compromiso · The commitment scale', mascot: '/brand/mascot/studying.webp', coach: 'Del «es indudable» al «no es imposible». From certain to barely possible.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'ESCALA FINA DE COMPROMISO', question: '¿Lo sabes, lo deduces, lo consideras razonable o solo no puedes descartarlo?', en: 'You already know the basic certainty scale. At C2 the choice is finer, and mood follows commitment. Expressions that assert (es indudable que, no cabe duda de que) or present a conclusion as well founded (todo indica que, cabe pensar que) take the indicative. Expressions that only open a possibility take the subjunctive: es posible que, no es descartable que (“it can’t be ruled out”), no cabe excluir que (formal), and the double negative no es imposible que, which grants the bare minimum: the door is not quite closed.', formula: ['certeza: es indudable que · no cabe duda de que + indicativo', 'inferencia sólida: todo indica que · todo apunta a que + indicativo', 'hipótesis razonable: cabe pensar que · cabe suponer que + indicativo', 'posibilidad abierta: es posible que · no es descartable que · no cabe excluir que + subjuntivo', 'posibilidad mínima: no es imposible que + subjuntivo'],
            meaning: 'El **modo** acompaña al compromiso: con lo que se **afirma** o se **concluye**, indicativo; con lo que solo se **deja abierto**, subjuntivo. Si niegas una fórmula de certeza o de inferencia, el modo cambia: **nada indica que** haya habido fraude; **no está claro que** lo supieran.',
            examples: [
              { es: '[[Es indudable que|blue]] la cooperativa ha crecido: las cifras están publicadas.', en: 'Certain and verifiable: the figures are public, so the indicative.' },
              { es: '[[Cabe pensar que|blue]] el retraso se debió a la falta de personal.', en: 'A reasonable hypothesis, offered as one: “it is reasonable to think that…”.' },
              { es: '[[No es descartable que|blue]] haya más facturas sin justificar.', en: 'A possibility the speaker cannot rule out, without claiming it is likely.' },
              { es: '[[No es imposible que|blue]] la junta adelante la asamblea, pero sería muy raro.', en: 'The double negative grants the bare minimum: it could happen, but don’t count on it.' },
            ],
            note: 'La escala es **orientativa**: el contexto, la entonación y lo que se añade («pero sería muy raro») también pesan. **No cabe excluir que** suena formal (informes, juzgados, ciencia); en conversación es más frecuente **no se puede descartar que**.' },
          { kind: 'table', title: 'Grado y modo · Degree and mood', head: ['Fórmula', 'Compromiso', 'Modo'], rows: [
            ['**Es indudable que** / **No cabe duda de que**', 'certeza', 'indicativo: ha crecido'],
            ['**Todo indica que** / **Todo apunta a que**', 'inferencia sólida', 'indicativo: lo sabían'],
            ['**Cabe pensar que** / **Cabe suponer que**', 'hipótesis razonable', 'indicativo: se debió a…'],
            ['**No es descartable que** / **No cabe excluir que**', 'posibilidad abierta', 'subjuntivo: haya, hubiera'],
            ['**No es imposible que**', 'posibilidad mínima', 'subjuntivo: adelante'],
            ['**Nada indica que** / **No está claro que**', 'negación de la inferencia', 'subjuntivo: haya habido'],
          ], note: 'Con el verbo principal en presente y un hecho pasado, el subjuntivo puede ir en pretérito perfecto o imperfecto: «No es descartable que **haya sido** / **fuera** un despiste».' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Todo indica que el auditor ___ el informe en marzo.', options: ['entregó', 'entregue', 'entregara'], answer: 0, why: '«Todo indica que» presenta una conclusión bien fundada: indicativo. Si dijeras «nada indica que», pasarías al subjuntivo.', en: 'Everything suggests the auditor delivered the report in March.' },
            { prompt: '¿Qué frase compromete menos a quien habla?', options: ['No es imposible que haya habido un error.', 'Todo apunta a que hubo un error.', 'Cabe pensar que hubo un error.'], answer: 0, why: 'La doble negación «no es imposible que» solo concede que la posibilidad existe: es el peldaño más bajo de la escala.', en: 'Which one commits the speaker least?' },
          ] },
        ] },
        { title: 'Límites y reserva · Fencing the claim', mascot: '/autoestudio/mascot/noting.webp', coach: 'Hasta donde sé, y ni un paso más. As far as I know, and no further.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'QUE YO SEPA · EN PRINCIPIO · A PRIORI · PRESUMIBLEMENTE · A TODAS LUCES', question: '¿Quieres limitar lo que afirmas a lo que sabes, a lo previsto o a lo que se ve a primera vista?', en: '“Que yo sepa” (fixed, always subjunctive) limits the claim to what you know; “que yo recuerde” to what you remember. “En principio” makes a statement provisional, unless something changes; do not confuse it with “en un principio” (at first). “A priori” means before looking into it, at first sight. “Presumiblemente” is an inference, “presumably”; it is not “presuntamente” (allegedly), which attributes a charge to others, typically in legal or crime reporting. “A todas luces” works the other way: maximum commitment, “quite clearly”, often with an evaluative adjective.', formula: ['que yo sepa · que yo recuerde (fijas, en subjuntivo): el límite de mi conocimiento', 'en principio: provisional, salvo cambios (≠ en un principio: al comienzo)', 'a priori: antes de examinarlo, a primera vista', 'presumiblemente: es de suponer (≠ presuntamente: se le atribuye un delito)', 'a todas luces: con toda evidencia; compromiso máximo y valorativo'],
            meaning: 'Estas expresiones no cambian el contenido, sino la **garantía** que das: hasta dónde llega tu conocimiento, si lo que dices puede cambiar o si lo das por evidente.',
            examples: [
              { es: '[[Que yo sepa|teal]], ningún socio ha visto el contrato completo.', en: 'Limits the claim to the speaker’s knowledge: someone may have seen it without her knowing.' },
              { es: '[[En principio|teal]], la asamblea se celebrará el día 12.', en: 'Provisional: that is the plan, unless something changes.' },
              { es: '[[A priori|teal]], la oferta no parece mala; habrá que leer la letra pequeña.', en: 'At first sight, before examining it properly.' },
              { es: 'El informe llegará, [[presumiblemente|teal]], a finales de mes.', en: 'Presumably: a formal inference from what is known.' },
              { es: 'El plazo de quince días era, [[a todas luces|teal]], insuficiente.', en: 'Quite clearly: the speaker presents the judgement as obvious to anyone.' },
            ] },
          { kind: 'table', title: 'Deber y deber de · Duty or supposition', head: ['Forma', 'Sentido', 'Norma (DPD)'], rows: [
            ['**deber** + infinitivo', 'obligación: «Los socios **deben votar** en persona».', 'forma recomendada'],
            ['**deber de** + infinitivo', 'suposición: «**Debe de haber** un error en el acta».', 'forma recomendada'],
            ['**deber** + infinitivo', 'suposición: «**Debe haber** un error en el acta».', 'también se acepta'],
            ['**deber de** + infinitivo', 'obligación: «Los socios deben de votar» (mejor: **deben votar**).', 'se desaconseja'],
          ], note: 'Como **deber** sin «de» también se usa para suponer, «Luis **debía conocer** las cuentas» admite dos lecturas: «era su obligación conocerlas» o «probablemente las conocía». Si quieres que se entienda la suposición sin ambigüedad, usa **deber de**: «Luis **debía de conocerlas**».' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«___, la cosecha empezará el lunes; depende del tiempo».', options: ['En un principio', 'A todas luces', 'En principio'], answer: 2, why: '«En principio» presenta lo dicho como provisional. «En un principio» significa ‘al comienzo’ y «a todas luces» daría certeza máxima, que choca con «depende del tiempo».', en: 'In principle the harvest starts on Monday; it depends on the weather.' },
            { prompt: 'Quieres decir que el tesorero probablemente lo sabía, sin que se entienda como obligación.', options: ['El tesorero debía saberlo.', 'El tesorero tenía el deber de saberlo.', 'El tesorero debía de saberlo.'], answer: 2, why: '«Deber de» + infinitivo expresa suposición sin ambigüedad. «Debía saberlo» admite también la lectura de obligación.', en: 'Unambiguous supposition: “the treasurer must have known”.' },
          ] },
        ] },
        { title: 'Insinuar sin afirmar · Implying without saying', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Lo que no dices también comunica. What you leave unsaid still speaks.', blocks: [
          { kind: 'concept', tone: 'violet', label: 'NO DIGO QUE… · HABRÍA QUE VER · ME LIMITO A CONSTATAR', question: '¿Quieres que el oyente llegue a una conclusión que tú no vas a formular?', en: 'An implicature is what the listener infers beyond the literal words. “No digo que + subjunctive, pero…” formally denies the accusation, and the “pero” brings it back as a suspicion. “Habría que ver si / qué / quién + indicative” raises a question that sounds like a doubt about someone. “Me limito a constatar que…” (“I am simply stating that…”) presents bare facts and leaves the conclusion to the audience. The speaker keeps deniability: “I never said that.”', formula: ['No digo que + subjuntivo, pero…: niega la acusación y la deja flotando', 'Habría que ver si / qué / quién / por qué + indicativo: una pregunta que siembra la duda', 'Me limito a constatar que + indicativo: solo hechos; la conclusión es del oyente', 'Saquen ustedes sus conclusiones · Ustedes sabrán: la inferencia se delega'],
            meaning: 'La insinuación **comunica sin afirmar**: el contenido sospechoso no está en las palabras, sino en lo que el oyente **infiere**. Por eso quien insinúa puede decir después «yo no he dicho eso». Es un recurso eficaz y también arriesgado: si se usa sin indicios, es una acusación encubierta.',
            examples: [
              { es: '[[No digo que|violet]] el presidente haya mentido, pero [[habría que ver|violet]] quién negoció ese precio.', en: 'Denies accusing him, then points the audience straight at him.' },
              { es: '[[Me limito a constatar|violet]] que el contrato se firmó un domingo.', en: 'Only a fact, but chosen so that it suggests something irregular.' },
              { es: 'La junta conocía el informe desde marzo y nos lo dio en julio. Saquen ustedes sus conclusiones.', en: 'Two facts side by side; the conclusion is handed over to the audience.' },
            ],
            note: 'Tras **no digo que** lo habitual es el **subjuntivo** (haya mentido, mintiera). Tras **habría que ver si** va el indicativo: es una interrogativa indirecta («habría que ver si lo sabían»).' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Me limito a constatar que el tesorero es cuñado del comprador». ¿Qué hace quien habla?', options: ['Da un dato cierto y deja que el oyente infiera un posible favoritismo.', 'Afirma que hubo fraude.', 'Da un dato aislado sin intención.'], answer: 0, why: 'El dato es verificable, pero se elige para que el oyente deduzca algo que no se dice: es una implicatura.', en: 'A true fact, chosen to suggest favouritism without saying it.' },
            { prompt: 'No digo que la junta ___ mala fe, pero nadie nos avisó.', options: ['tuviera', 'tendría', 'tuvo'], answer: 0, why: 'Tras «no digo que» lo habitual es el subjuntivo: la acusación se niega formalmente. Aquí, imperfecto de subjuntivo para un hecho pasado.', en: 'I’m not saying the board acted in bad faith, but…' },
          ] },
        ] },
        { title: 'Preterición e ironía por exceso · Saying by not saying', mascot: '/brand/mascot/speaking.webp', coach: 'Lo nombras al decir que no lo nombras. You mention it by refusing to.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'PRETERICIÓN · ELOGIO EXAGERADO', question: '¿Dices que no vas a hablar de algo… y así lo pones sobre la mesa?', en: 'Preterition (paralipsis) is the rhetorical move of mentioning something by announcing that you will not mention it: “I won’t talk about the sale of the plot, or mention the price.” It brings up a topic while avoiding responsibility for developing it, and is common in speeches and debates. Irony through overstatement does the opposite: excessive praise or certainty (“A flawless management, no doubt”) that clashes with the facts the audience knows, so the real meaning is the reverse.', formula: ['No voy a hablar de…, ni a mencionar…', 'Por no hablar de… · Y eso sin mencionar…', 'No entraré en… · Paso por alto…', 'ironía por exceso: elogio o certeza máxima + un hecho que la contradice'],
            meaning: 'La **preterición** introduce un tema fingiendo que se omite: el oyente lo recibe igual, y quien habla evita desarrollarlo o probarlo. La **ironía por exceso** exagera el elogio o la certeza («sin duda», «impecable», «todo un ejemplo») hasta que choca con lo que todos saben.',
            examples: [
              { es: '[[No voy a hablar|orange]] de la venta de la parcela, ni a mencionar el precio.', en: 'The topic is now on the table, and the speaker has “said nothing”.' },
              { es: 'La junta tardó cuatro meses en dar las cuentas, [[por no hablar de|orange]] las actas, que siguen sin firmar.', en: '“Not to mention”: adds a point while pretending to skip it.' },
              { es: 'Una gestión [[impecable, sin duda|orange]]: solo hemos esperado cuatro meses para leer nuestras cuentas.', en: 'Exaggerated praise followed by the fact that cancels it: irony.' },
            ] },
          { kind: 'decide', title: '¿Preterición, insinuación o ironía? · Which device is it?', steps: [
            { q: '¿Anuncia que no va a hablar de algo, pero lo nombra?', yes: '**Preterición**: el tema ya está dicho.', no: 'Sigue con la siguiente pregunta.' },
            { q: '¿Niega una acusación o se limita a datos, pero orienta la conclusión del oyente?', yes: '**Insinuación**: busca la implicatura.', no: 'Sigue.' },
            { q: '¿Exagera el elogio o la certeza frente a hechos que lo contradicen?', yes: '**Ironía por exceso**: entiende lo contrario.', no: 'Probablemente es una **afirmación literal**.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«No entraré en si el contrato se firmó un domingo». ¿Qué recurso es?', options: ['Una preterición: dice el dato al anunciar que no lo tratará.', 'Una afirmación neutra.', 'Una insinuación con «no digo que».'], answer: 0, why: 'Anuncia que omite el asunto y, al hacerlo, lo nombra: preterición.', en: 'She mentions the Sunday signing by saying she won’t go into it.' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/kneeling.webp', coach: '¿Modo, forma o compromiso? Mood, form or commitment?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees cada frase con el error y tu alumno explica qué falla antes de ver la corrección: el modo, la forma fija o el grado de compromiso.', self: 'Lee cada frase y decide qué falla: ¿el modo, la forma fija o el grado de compromiso? Después mira la corrección. (Mood, fixed form or degree of commitment?)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Es indudable que la cooperativa haya crecido.', right: 'Es indudable que la cooperativa ha crecido.', why: 'Las fórmulas de certeza afirman: piden indicativo.' },
            { wrong: 'No es descartable que el informe llega tarde.', right: 'No es descartable que el informe llegue tarde.', why: '«No es descartable que» solo abre una posibilidad: subjuntivo.' },
            { wrong: 'Que yo sé, nadie ha firmado el acta.', right: 'Que yo sepa, nadie ha firmado el acta.', why: 'La fórmula es fija y va en subjuntivo: «que yo sepa», «que yo recuerde».' },
            { wrong: 'En un principio, la auditoría estará lista en enero.', right: 'En principio, la auditoría estará lista en enero.', why: '«En un principio» significa ‘al comienzo’ y mira al pasado. Para lo provisional, «en principio».' },
            { wrong: 'Los socios deben de presentar la documentación antes del viernes.', right: 'Los socios deben presentar la documentación antes del viernes.', why: 'Es una obligación: la norma recomienda «deber» sin «de». «Deber de» se reserva para la suposición.' },
            { wrong: 'El tesorero, presuntamente, llegará tarde: siempre se retrasa.', right: 'El tesorero, presumiblemente, llegará tarde: siempre se retrasa.', why: '«Presuntamente» atribuye a alguien un delito o un hecho que otros le imputan. Para una suposición, «presumiblemente».' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Mercedes quiere decir con certeza algo que todos pueden comprobar en el acta. ¿Qué frase elige?', options: ['Cabe pensar que la junta aprobó la venta en mayo.', 'No cabe duda de que la junta aprobó la venta en mayo.', 'No es imposible que la junta aprobara la venta en mayo.'], answer: 1, why: 'Un hecho comprobable se afirma con certeza. Rebajarlo a hipótesis o a posibilidad mínima debilita sin motivo su argumento.', en: 'A verifiable fact deserves full commitment.' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno dice tres cosas sobre su ciudad o su trabajo: una que sabe, una que deduce y una que no puede descartar. Tú preguntas «¿Cómo lo sabes?» después de cada una.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'El ensayo del discurso', coach: 'Toca cada marca: ¿cuánto se compromete? Tap each mark: how much does it commit to?',
      steps: [
        { title: 'Mercedes ensaya con Daniel · Rehearsing the speech', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Daniel y tu alumno es Mercedes. Después tu alumno toca cada expresión marcada y explica cuánto compromete a quien la dice.', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada: ¿certeza, reserva, insinuación o preterición? (How much does each one commit the speaker to?)' } },
          { kind: 'explore', title: '«Ahí te pasas»', setting: 'Oficina de la cooperativa, nueve de la noche. Mercedes Aranda lee en voz alta el borrador de su discurso. Daniel Robles, su asesor, lo escucha con el informe de auditoría en la mano.', lines: [
            { who: 'Daniel', text: 'Léelo otra vez desde el principio. Quiero oír cuánto te comprometes en cada frase.', en: 'Read it again from the top. I want to hear how much you commit to in each sentence.' },
            { who: 'Mercedes', text: '«La auditoría llegó tarde. [[Es indudable que|blue]] la junta lo sabía».', en: '“The audit came in late. There is no doubt the board knew.”' },
            { who: 'Daniel', text: 'Ahí te pasas. Que llegó tarde lo prueba la fecha del sello; que lo sabían, no. Di «[[todo indica que|blue]] lo sabían», o incluso «[[cabe pensar que|blue]] lo sabían».', en: 'That’s going too far. The date stamp proves it was late; it doesn’t prove they knew. Say “everything suggests they knew”, or even “it’s reasonable to think they knew”.' },
            { who: 'Mercedes', text: 'Pero «cabe pensar» suena flojísimo. Parece que no estoy segura de nada.', en: 'But “it’s reasonable to think” sounds so weak. It sounds as if I’m not sure of anything.' },
            { who: 'Daniel', text: 'Es que de eso no estás segura. Y con la parcela, ni lo intentes: no tenemos papeles. Como mucho, «[[no es descartable que|blue]] el precio estuviera por debajo del mercado».', en: 'Well, on that point you aren’t. And don’t even try with the plot: we have no documents. At most, “it can’t be ruled out that the price was below market value”.' },
            { who: 'Mercedes', text: '¿Y si no lo digo, pero lo digo? «[[No voy a hablar|orange]] de la venta de la parcela, ni a mencionar el precio».', en: 'And what if I say it without saying it? “I won’t talk about the sale of the plot, or mention the price.”' },
            { who: 'Daniel', text: 'Eso es una preterición: la nombras justo al decir que no la nombras. Funciona, pero Rodrigo la va a captar. Y [[que yo sepa|teal]], nadie ha visto el contrato completo.', en: 'That’s preterition: you bring it up precisely by saying you won’t. It works, but Rodrigo will catch it. And as far as I know, nobody has seen the full contract.' },
            { who: 'Mercedes', text: 'Entonces: «[[No digo que|violet]] Rodrigo haya actuado de mala fe, pero [[habría que ver|violet]] quién negoció ese precio».', en: 'Then: “I’m not saying Rodrigo acted in bad faith, but one might ask who negotiated that price.”' },
            { who: 'Daniel', text: 'Mejor. Y otra cosa: si dices «Luis [[debía conocer|teal]] las cuentas», ¿afirmas que era su obligación o que las conocía?', en: 'Better. And another thing: if you say “Luis debía conocer the accounts”, are you saying it was his duty, or that he knew them?' },
            { who: 'Mercedes', text: 'Las dos cosas, ¿no? Por eso me gusta.', en: 'Both, right? That’s why I like it.' },
            { who: 'Daniel', text: 'Por eso mismo, cuidado: la mitad de la sala oirá una acusación. Si quieres decir que probablemente las conocía, di «[[debía de conocerlas|teal]]». Y el final, «una gestión [[impecable, sin duda|orange]]», mantenlo: con el retraso a la vista, nadie lo tomará al pie de la letra.', en: 'That’s exactly why you should be careful: half the room will hear an accusation. If you mean he probably knew, say “debía de conocerlas”. And keep the ending, “flawless management, no doubt”: with the delay in plain sight, nobody will take it literally.' },
            { who: 'Mercedes', text: 'De acuerdo. [[Me limito a constatar|violet]] los hechos y que ellos saquen sus conclusiones.', en: 'All right. I’ll simply state the facts and let them draw their own conclusions.' },
          ], notes: {
            'Es indudable que': '**Certeza total** + indicativo. Daniel la rechaza: Mercedes no puede probar que la junta lo supiera, y una afirmación así la obliga a demostrarlo.',
            'todo indica que': '**Inferencia sólida** + indicativo: hay un indicio (la fecha del informe), pero se presenta como conclusión, no como prueba.',
            'cabe pensar que': '**Hipótesis razonable** + indicativo: un peldaño por debajo de «todo indica que». Suena prudente, no débil.',
            'no es descartable que': '**Posibilidad abierta** + subjuntivo (estuviera): Mercedes no afirma que el precio fuera bajo; solo que no puede excluirse.',
            'No voy a hablar': '**Preterición**: anuncia que omite el tema y, al hacerlo, lo pone sobre la mesa.',
            'que yo sepa': 'Fórmula fija en **subjuntivo**: limita la afirmación a lo que sabe Daniel. Puede que alguien haya visto el contrato sin que él lo sepa.',
            'No digo que': '**No digo que + subjuntivo** (haya actuado): niega formalmente la acusación… y el «pero» la recupera como sospecha.',
            'habría que ver': '**Habría que ver + interrogativa indirecta** (quién negoció): una pregunta que orienta la sospecha sin formularla.',
            'debía conocer': '**Deber + infinitivo**: admite dos lecturas, obligación («era su deber») o suposición («probablemente las conocía»). La ambigüedad puede sonar a acusación.',
            'debía de conocerlas': '**Deber de + infinitivo**: suposición sin ambigüedad, como recomienda la norma.',
            'impecable, sin duda': '**Ironía por exceso**: el elogio y el «sin duda» chocan con un retraso que todos conocen, y la sala entiende lo contrario.',
            'Me limito a constatar': '**Me limito a constatar** + hechos: Mercedes se presenta como simple testigo y deja la conclusión al público.',
          } },
          { kind: 'choice', title: '¿Has entendido? · Did you understand?', items: [
            { prompt: '¿Por qué rechaza Daniel «es indudable que la junta lo sabía»?', options: ['Porque es incorrecta gramaticalmente.', 'Porque la junta no lo sabía.', 'Porque Mercedes solo puede probar el retraso, no que la junta lo supiera.'], answer: 2, why: '«Que llegó tarde lo prueba la fecha del sello; que lo sabían, no». La certeza debe reservarse para lo comprobable.', en: 'She can prove the delay, not what the board knew.' },
            { prompt: '¿Qué le preocupa a Daniel de «Luis debía conocer las cuentas»?', options: ['Que suena demasiado formal.', 'Que puede entenderse como acusación, porque admite dos lecturas.', 'Que es un error de concordancia.'], answer: 1, why: '«Deber + infinitivo» puede leerse como obligación o como suposición; con «deber de» solo queda la suposición.', en: 'The sentence is ambiguous between duty and supposition.' },
            { prompt: '¿Por qué mantiene Daniel la frase «una gestión impecable, sin duda»?', options: ['Porque es un elogio sincero a Rodrigo.', 'Porque es una preterición.', 'Porque el contexto hace evidente que es irónica.'], answer: 2, why: '«Con el retraso a la vista, nadie lo tomará al pie de la letra»: la exageración choca con los hechos.', en: 'The overstatement is clearly ironic in context.' },
          ] },
        ] },
        { title: 'En el molino · At the oil mill', mascot: '/brand/mascot/seated.webp', coach: 'Elige el compromiso justo. Pick the right level of commitment.', blocks: [
          { kind: 'guide', text: { teacher: 'Tú eres Pilar, socia de la cooperativa, y tu alumno es Mercedes. En cada hueco, tu alumno elige y explica cuánto se compromete Mercedes.', self: 'Completa la conversación. En cada hueco, piensa qué puede probar Mercedes y qué no. (What can she prove, and what can’t she?)' } },
          { kind: 'chat-fill', title: 'Pilar pregunta · Pilar asks', lines: [
            { who: 'Pilar', text: 'Mercedes, dicen que la junta sabía lo de la auditoría desde marzo. ¿Es seguro?' },
            { who: 'Mercedes', text: 'Seguro, no. Pero ___ lo sabían: el informe del auditor lleva fecha de marzo.', options: ['es indudable que', 'todo indica que', 'no es imposible que'], answer: 1, why: 'Hay un indicio sólido, no una prueba: inferencia fuerte con indicativo. «Es indudable» exagera y «no es imposible» lo rebaja demasiado (y pediría subjuntivo).' },
            { who: 'Pilar', text: '¿Y la parcela? ¿La vendieron barata?' },
            { who: 'Mercedes', text: 'No tengo papeles. Como mucho, ___ el precio fuera bajo.', options: ['todo indica que', 'es indudable que', 'no es descartable que'], answer: 2, why: 'Sin documentos solo cabe dejar abierta la posibilidad; además, «fuera» (subjuntivo) solo encaja con «no es descartable que».' },
            { who: 'Pilar', text: '¿Y vas a decirlo en la asamblea?' },
            { who: 'Mercedes', text: 'Diré: «___ de la venta de la parcela, ni a mencionar el precio».', options: ['No voy a hablar', 'No he hablado', 'Hablaré'], answer: 0, why: 'Es una preterición: anuncia que no tratará el tema y así lo nombra. «No he hablado» narra un hecho y «Hablaré» lo anuncia de verdad.' },
            { who: 'Pilar', text: '¿Y de Rodrigo qué vas a decir?' },
            { who: 'Mercedes', text: '«No digo que ___ de mala fe, pero habría que ver quién negoció ese precio».', options: ['actuaba', 'haya actuado', 'actuó'], answer: 1, why: 'Tras «no digo que» se usa el subjuntivo: la acusación se niega formalmente y la insinuación queda en el «pero».' },
            { who: 'Pilar', text: 'Pues el folleto de la junta dice que su gestión ha sido «ejemplar».' },
            { who: 'Mercedes', text: 'Ejemplar, ___: cuatro meses para enseñarnos nuestras propias cuentas.', options: ['a priori', 'sin duda', 'que yo sepa'], answer: 1, why: 'La certeza exagerada («sin duda») choca con el retraso: ironía por exceso. «Que yo sepa» y «a priori» limitarían la afirmación en vez de exagerarla.' },
          ] },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Medir, reservar e insinuar', coach: 'Ni más ni menos de lo que puedes sostener. No more, no less than you can back up.',
      steps: [
        { title: 'Ordena por compromiso · Rank by commitment', blocks: [
          { kind: 'guide', text: { teacher: 'Tu alumno lee cada frase y la coloca en la escala. Tú preguntas: «¿Podrías defenderla si te piden pruebas?».', self: 'Lee cada frase y colócala en la escala: ¿certeza, inferencia o solo posibilidad? (Certainty, inference or mere possibility?)' } },
          { kind: 'classify', title: 'Tres peldaños · Three rungs', categories: [
            { id: 'certeza', label: 'CERTEZA', tone: 'blue' },
            { id: 'inferencia', label: 'INFERENCIA', tone: 'teal' },
            { id: 'posibilidad', label: 'POSIBILIDAD ABIERTA', tone: 'violet' },
          ], items: [
            { text: 'Es indudable que las ventas han subido este año.', answer: 'certeza', why: '«Es indudable que» + indicativo: compromiso total.' },
            { text: 'El plazo era, a todas luces, insuficiente.', answer: 'certeza', why: '«A todas luces» presenta el juicio como evidente para cualquiera.' },
            { text: 'Presumiblemente, el auditor revisará también las actas.', answer: 'inferencia', why: '«Presumiblemente»: es de suponer, a partir de lo que se sabe.' },
            { text: 'El tesorero debió de enterarse en marzo.', answer: 'inferencia', why: '«Deber de» + infinitivo: suposición fundada.' },
            { text: 'No cabe excluir que aparezcan más facturas.', answer: 'posibilidad', why: '«No cabe excluir que» + subjuntivo: la posibilidad queda abierta, sin más.' },
            { text: 'No es imposible que la junta adelante la votación.', answer: 'posibilidad', why: 'Doble negación: el peldaño más bajo; solo se concede que puede pasar.' },
          ] },
        ] },
        { title: 'Modo y forma · Mood and form', mascot: '/brand/mascot/speaking.webp', blocks: [
          { kind: 'choice', title: 'Elige · Choose', items: [
            { prompt: 'Nada indica que la junta ___ las cuentas.', options: ['manipulara', 'manipulaba', 'manipuló'], answer: 0, why: 'Al negar la inferencia («nada indica que»), el modo pasa al subjuntivo.', en: 'Nothing suggests the board tampered with the accounts.' },
            { prompt: 'Cabe suponer que el auditor ___ la parcela en su informe.', options: ['incluya', 'incluyó', 'incluyera'], answer: 1, why: '«Cabe suponer que» presenta una hipótesis razonable como conclusión: indicativo.', en: 'It is reasonable to assume the auditor included the plot in his report.' },
            { prompt: 'Los socios ___ votar en persona: lo dicen los estatutos.', options: ['deben de', 'deberían de', 'deben'], answer: 2, why: 'Es una obligación: «deber» sin «de», como recomienda la norma. «Deber de» se reserva para la suposición.', en: 'Members must vote in person: it is in the statutes.' },
            { prompt: '«___, la propuesta parece razonable; habrá que ver los números».', options: ['A priori', 'A todas luces', 'Que yo sepa'], answer: 0, why: '«A priori» = a primera vista, antes de examinarla. «A todas luces» choca con «habrá que ver»; «que yo sepa» limita un conocimiento, no una primera impresión.', en: 'At first sight the proposal looks reasonable; we’ll need to see the figures.' },
          ] },
        ] },
        { title: 'Revisa el folleto · Check the leaflet', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'guide', text: { teacher: 'Son frases de los folletos de campaña. Tu alumno decide si cada una está bien y, si no, elige la corrección y explica por qué.', self: 'Son frases de los folletos de campaña. ¿Están bien? Si no, elige la corrección. (Is each sentence right? If not, pick the fix.)' } },
          { kind: 'fix', title: '¿Está bien? · Is it right?', items: [
            { sentence: 'No cabe duda de que la cosecha haya sido excelente.', ok: false, options: ['No cabe duda de que la cosecha fuera excelente.', 'No cabe duda de que la cosecha ha sido excelente.', 'No cabe duda que la cosecha haya sido excelente.'], answer: 1, why: 'La fórmula de certeza afirma: indicativo. Las otras dos opciones mantienen el subjuntivo.' },
            { sentence: 'No cabe excluir que el informe contenga errores.', ok: true, why: 'Correcta: «no cabe excluir que» abre una posibilidad, con subjuntivo.' },
            { sentence: 'No digo que el presidente haya mentido, pero habría que ver por qué calló.', ok: true, why: 'Correcta: «no digo que» + subjuntivo y «habría que ver por qué» + indicativo.' },
            { sentence: 'En un principio, la nueva junta publicará las cuentas cada trimestre.', ok: false, options: ['En un principio, la nueva junta publicaría las cuentas cada trimestre.', 'A priori, la nueva junta publicará las cuentas cada trimestre.', 'En principio, la nueva junta publicará las cuentas cada trimestre.'], answer: 2, why: 'Para un plan provisional, «en principio». «En un principio» significa ‘al comienzo’; «a priori» se refiere a una primera impresión, no a un plan.' },
            { sentence: 'Que yo sé, nadie ha pedido las actas.', ok: false, options: ['Que yo sepa, nadie ha pedido las actas.', 'Que sé yo, nadie ha pedido las actas.', 'Que yo sabía, nadie ha pedido las actas.'], answer: 0, why: 'Fórmula fija en subjuntivo: «que yo sepa».' },
          ] },
        ] },
        { title: 'En el pasillo · In the corridor', mascot: '/autoestudio/mascot/noting.webp', blocks: [
          { kind: 'chat-fill', title: 'Rodrigo y Luis antes de la asamblea · Before the assembly', lines: [
            { who: 'Rodrigo', text: 'Luis, ¿qué va a decir Mercedes de la parcela?' },
            { who: 'Luis', text: 'Nada directo, ya verás. ___ dirá algo como «no voy a hablar de la parcela».', options: ['Presuntamente', 'Presumiblemente', 'Indudablemente'], answer: 1, why: '«Presumiblemente» expresa una suposición. «Presuntamente» atribuye un hecho imputado por otros; «indudablemente» sería certeza, y Luis solo lo supone.' },
            { who: 'Rodrigo', text: 'O sea, una preterición. ¿Y del informe?' },
            { who: 'Luis', text: 'Dirá que ___ lo sabíamos desde marzo. Y no le falta base: la fecha está ahí.', options: ['no es imposible que', 'todo indica que', 'no es descartable que'], answer: 1, why: '«Lo sabíamos» va en indicativo, y la fecha es un indicio sólido: «todo indica que». Las otras dos pedirían subjuntivo.' },
            { who: 'Rodrigo', text: 'Pues contesta con datos. ¿Cuándo estará la próxima auditoría?' },
            { who: 'Luis', text: '___, en enero, si el auditor cumple.', options: ['En un principio', 'A todas luces', 'En principio'], answer: 2, why: 'Un plan que depende de una condición: «en principio», provisional.' },
          ] },
        ] },
        { title: 'Construye · Build', mascot: '/brand/mascot/standing.webp', blocks: [
          { kind: 'build', title: 'Ordena · Put in order', items: [
            { tiles: ['No', 'es', 'descartable', 'que', 'el', 'informe', 'llegue', 'tarde.'], accept: ['No es descartable que el informe llegue tarde.'], en: 'It can’t be ruled out that the report will arrive late.' },
            { tiles: ['No', 'digo', 'que', 'mienta,', 'pero', 'habría', 'que', 'ver', 'sus', 'cuentas.'], accept: ['No digo que mienta, pero habría que ver sus cuentas.'], en: 'I’m not saying he’s lying, but his accounts deserve a closer look.' },
            { tiles: ['Que', 'yo', 'sepa,', 'nadie', 'ha', 'visto', 'el', 'contrato.'], accept: ['Que yo sepa, nadie ha visto el contrato.'], en: 'As far as I know, nobody has seen the contract.' },
          ] },
        ] },
        { title: 'Insinúa, no afirmes · Imply, don’t assert', mascot: '/autoestudio/mascot/writing.webp', blocks: [
          { kind: 'guide', text: { teacher: 'Tu alumno reescribe cada frase según la instrucción y lee las dos versiones en voz alta: ¿qué compromiso ha desaparecido y qué sigue llegando al oyente?', self: 'Reescribe cada frase según la instrucción y compara las dos versiones: ¿qué sigue entendiendo el oyente aunque ya no lo afirmes? (What does the listener still get?)' } },
          { kind: 'rewrite', title: 'De la acusación a la insinuación · From accusation to insinuation', items: [
            { prompt: 'El presidente mintió sobre la parcela.', instruction: 'Insinúa sin afirmar: empieza por «No digo que el presidente» y termina con «pero habría que ver qué pasó con la parcela».', accept: ['No digo que el presidente haya mentido, pero habría que ver qué pasó con la parcela', 'No digo que el presidente mintiera, pero habría que ver qué pasó con la parcela', 'No digo que el presidente mintiese, pero habría que ver qué pasó con la parcela'] },
            { prompt: 'La junta ocultó la auditoría: llegó con cuatro meses de retraso.', instruction: 'Quédate solo con el hecho comprobable: empieza por «Me limito a constatar que».', accept: ['Me limito a constatar que la auditoría llegó con cuatro meses de retraso'] },
            { prompt: 'Ahora voy a hablar de la venta de la parcela y del precio.', instruction: 'Conviértelo en preterición: «No voy a hablar de…, ni a mencionar…».', accept: ['No voy a hablar de la venta de la parcela ni a mencionar el precio', 'No voy a hablar de la venta de la parcela, ni a mencionar el precio', 'No voy a hablar de la venta de la parcela ni mencionar el precio'] },
            { prompt: 'Es seguro que el tesorero conocía las cuentas.', instruction: 'Rebájalo a suposición sin ambigüedad, con «deber de» en imperfecto.', accept: ['El tesorero debía de conocer las cuentas', 'El tesorero debía de conocerlas'] },
          ] },
        ] },
        { title: '¿Hay preterición? · Spot the preterition', mascot: '/brand/mascot/pointing.webp', blocks: [
          { kind: 'choice', title: 'Fragmentos de discursos · Speech excerpts', items: [
            { prompt: '¿Qué fragmento es una preterición?', options: ['No hablaré de la deuda con el banco, que todos ustedes conocen.', 'Hablaré después de la deuda con el banco.', 'No sé nada de la deuda con el banco.'], answer: 0, why: 'Anuncia que omite la deuda y la nombra, e incluso la da por conocida. Las otras dos son literales.', en: 'Which excerpt mentions the debt by claiming to skip it?' },
            { prompt: '«Hemos perdido dos clientes, por no hablar de los viajes de la junta». ¿Qué hace «por no hablar de»?', options: ['Añade los viajes como argumento mientras finge no detenerse en ellos.', 'Pide no hablar de los viajes.', 'Cambia de tema.'], answer: 0, why: '«Por no hablar de» es una preterición: suma un punto más, a menudo el más fuerte, sin desarrollarlo.', en: '“Not to mention”: an extra point slipped in.' },
            { prompt: 'Un candidato dice: «Paso por alto que el acta no está firmada». ¿Qué consigue?', options: ['Que el dato llegue al público sin tener que argumentarlo.', 'Que el público olvide el acta.', 'Reconocer que el acta no importa.'], answer: 0, why: 'La preterición transmite el dato y evita la responsabilidad de desarrollarlo o probarlo.', en: 'The fact gets across without having to be argued.' },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno elige una noticia de esta semana y la cuenta tres veces: afirmando, con reserva y con una insinuación. Tú dices cuál de las tres podría defender ante un periodista.' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'El discurso en la asamblea', coach: 'Escucha lo que dice y lo que da a entender. Hear what is said and what is implied.',
      steps: [
        { title: 'Mercedes ante los socios · Mercedes addresses the members', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: la idea general y la estrategia. Segunda escucha: tu alumno anota cada frase según lo que afirma, lo que reserva y lo que solo insinúa.', self: 'Escucha una vez para la idea general. En la segunda, separa lo que Mercedes afirma, lo que reserva y lo que solo insinúa. Vas a oír «la parcela del molino» (the plot by the mill) y «falta de previsión» (poor planning).' } },
          { kind: 'listen', title: 'Discurso de Mercedes Aranda', channel: 'COOPERATIVA SIERRA CLARA · ASAMBLEA ANUAL', src: '/audio/grammar-live/521.mp3',
            before: 'Mercedes tiene datos, sospechas y rumores. ¿Qué crees que afirmará con certeza y qué dejará solo en el aire? (What will she state firmly, and what will she leave hanging?)',
            gist: { prompt: '¿Qué estrategia sigue Mercedes? · What is her strategy?', options: ['Defiende la gestión de la junta.', 'Acusa directamente a la junta de fraude.', 'Afirma lo comprobable, gradúa lo que deduce e insinúa lo que no puede probar.'], answer: 2, why: 'Usa «es indudable que» para el crecimiento, «todo indica que» para lo que deduce, y preterición e insinuación para la parcela.', en: 'She matches her commitment to her evidence.' },
            details: [
              { prompt: '¿Qué afirma Mercedes con total certeza?', options: ['Que la parcela se vendió barata.', 'Que la junta mintió.', 'Que la cooperativa ha crecido.'], answer: 2, why: '«Es indudable que esta cooperativa ha crecido: lo dicen las cifras».', en: 'What does she state as beyond doubt?' },
              { prompt: '¿En qué se apoya para decir que la junta lo sabía desde marzo?', options: ['En la fecha del informe del auditor.', 'En lo que le contó un socio.', 'En una carta del presidente.'], answer: 0, why: '«Todo indica que la junta lo sabía desde marzo, porque el informe del auditor lleva esa fecha».', en: 'What is her inference based on?' },
              { prompt: '¿Qué hace con la venta de la parcela?', options: ['Explica el precio exacto.', 'Dice que fue legal.', 'La menciona diciendo que no va a hablar de ella.'], answer: 2, why: '«No voy a hablar de la venta de la parcela del molino, ni a mencionar el precio»: preterición.', en: 'How does she handle the sale of the plot?' },
              { prompt: '¿Por qué rechaza el «en principio» de la junta?', options: ['Porque prefiere no dar ninguna fecha.', 'Porque la auditoría ya está hecha.', 'Porque quiere comprometerse con una fecha firme.'], answer: 2, why: '«Si me eligen, no habrá “en principio”: estará en enero». Convierte una previsión provisional en compromiso.', en: 'She turns a provisional plan into a firm promise.' },
            ],
            transcript: 'Buenas tardes, compañeras y compañeros. Seré breve, porque mañana empieza la cosecha y hay que madrugar. [[Es indudable que|blue]] esta cooperativa ha crecido: lo dicen las cifras y nadie lo discute. También es un hecho que la auditoría llegó con cuatro meses de retraso, y [[todo indica que|blue]] la junta lo sabía desde marzo, porque el informe del auditor lleva esa fecha. ¿Un simple despiste? [[No es descartable que|blue]] lo haya sido. ¿Falta de previsión? [[Cabe pensar que|blue]] sí. [[Que yo sepa|teal]], ningún socio recibió una copia antes de esta asamblea. [[No voy a hablar|orange]] de la venta de la parcela del molino, ni a mencionar el precio, que ustedes conocen tan bien como yo. [[No digo que|violet]] nadie haya actuado de mala fe, pero [[habría que ver|violet]] por qué una decisión así no pasó por esta sala. Yo [[me limito a constatar|violet]] los hechos; las conclusiones son suyas. Una gestión [[impecable, sin duda|orange]]: solo hemos tenido que esperar cuatro meses para leer nuestras propias cuentas. La junta dice que la próxima auditoría estará lista, [[en principio|teal]], en enero. Si me eligen, no habrá «en principio»: estará en enero, y al día siguiente en la web de la cooperativa. Muchas gracias.',
            reply: { teacher: 'Tú eres Rodrigo Salcedo y tomas la palabra después de Mercedes. Le pides que afirme o retire lo que ha insinuado. Tu alumno es Mercedes y responde sin afirmar más de lo que puede probar.', self: 'Resume el discurso en tres frases: lo que Mercedes afirma, lo que deduce y lo que solo insinúa. Después di si te parece un discurso justo y por qué. (Was it a fair speech?)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Decir exactamente lo que puedes sostener', coach: 'Gradúa, reserva, insinúa… o atrévete a afirmar. Calibrate, hedge, imply, or dare to assert.',
      steps: [
        { title: 'Situaciones con riesgo · Situations with something at stake', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas y tu alumno responde durante uno o dos minutos. Si tu alumno afirma algo que no puede probar, tú preguntas «¿Y cómo lo sabes?» y lo reformula con el grado justo.', self: 'Responde a cada tarjeta en voz alta durante uno o dos minutos. Antes de cada afirmación, pregúntate: ¿lo sé, lo deduzco o solo no puedo descartarlo? (Do I know it, infer it, or just can’t rule it out?)' } },
          { kind: 'talk', cards: [
            { q: 'En tu trabajo corre el rumor de que van a cerrar una sede. Cuéntaselo a un compañero: lo que sabes, lo que deduces y lo que no puedes descartar. · Pass on a workplace rumour with the right commitment.', followUps: ['¿Qué indicio tienes?', '¿Qué dirías si tu jefe te pregunta de dónde lo has sacado?'], phrases: ['[[Es indudable que|blue]]…', '[[Todo indica que|blue]]…', '[[No es descartable que|blue]] + subjuntivo…', '[[Que yo sepa|teal]]…'], hint: 'Separa tres niveles: un hecho, una inferencia con su indicio y una posibilidad que no puedes cerrar.', example: 'Es indudable que este año hemos perdido clientes en la sede del norte: las cifras están en el informe. Todo indica que la dirección está estudiando cambios, porque han pedido un análisis de costes. No es descartable que cierren la sede, pero, que yo sepa, nadie ha dicho nada oficialmente.' },
            { q: 'Eres Mercedes: una socia te pregunta delante de todos si Rodrigo se ha quedado con dinero. Responde sin acusar ni negar lo que sospechas. · Answer a loaded question without accusing.', followUps: ['¿Qué datos puedes dar?', '¿Qué pedirías a la junta?'], phrases: ['[[No digo que|violet]] + subjuntivo, pero…', '[[Me limito a constatar|violet]] que…', '[[Habría que ver|violet]]…', '[[Nada indica que|blue]] + subjuntivo…'], hint: 'Rechaza la acusación directa, da solo hechos comprobables y propón una forma de aclararlo.', example: 'No tengo ninguna prueba de eso, y no voy a acusar a nadie sin pruebas. Me limito a constatar que la parcela se vendió sin pasar por la asamblea. Nada indica que alguien se haya quedado con dinero, pero habría que ver el contrato, y por eso pido que se publique entero.' },
            { q: 'Eres Rodrigo: responde a las insinuaciones de Mercedes y pídele que afirme o retire lo que ha dicho. · Push back against an insinuation.', followUps: ['¿Qué reconoces?', '¿Cómo lo dices sin sonar ofendido?'], phrases: ['La candidata [[no dice que|violet]]…, pero lo da a entender', 'O lo afirma o lo retira', '[[Es indudable que|blue]]…', '[[En principio|teal]]…'], hint: 'Haz explícita la implicatura de tu rival, reconoce lo que sea cierto y aporta datos.', example: 'La candidata no dice que yo haya actuado de mala fe, pero lo da a entender, y eso es más cómodo que decirlo. O lo afirma y lo prueba, o lo retira. Es indudable que la auditoría llegó tarde, y lo lamento. El contrato de la parcela estará a disposición de los socios a partir del lunes.', teacher: 'Tú eres Mercedes y respondes a Rodrigo sin afirmar más de lo que puedes probar. Tu alumno es Rodrigo.' },
            { q: '¿Es la insinuación más prudente o más deshonesta que la acusación directa? · Is insinuation prudent or dishonest?', followUps: ['¿Cuándo es legítimo insinuar?', '¿Has visto usar esta estrategia en política o en el trabajo?'], phrases: ['[[Cabe pensar que|blue]]…', '[[A priori|teal]]…', 'Una cosa es… y otra…', '[[No es imposible que|blue]]…, pero…'], hint: 'Toma partido, pero distingue entre insinuar con indicios y sembrar sospechas sin base.', example: 'A priori, insinuar parece más prudente, porque no acusas a nadie. Pero cabe pensar que a veces es más deshonesto: lanzas la sospecha y no te haces responsable de ella. Una cosa es señalar un hecho que merece explicación y otra, muy distinta, sembrar dudas que no puedes sostener.' },
            { q: 'Haz un brindis por un compañero que se jubila usando la preterición con humor. · Give a toast using preterition humorously.', followUps: ['¿Qué anécdota «no vas a mencionar»?', '¿Cómo cierras con un elogio sincero?'], phrases: ['[[No voy a hablar|orange]] de…, ni a mencionar…', '[[Por no hablar de|orange]]…', 'Paso por alto…'], hint: 'La preterición sirve también para el humor: «olvidas» en voz alta las anécdotas que todos recuerdan.', example: 'No voy a hablar de aquella vez que Julián se dejó las llaves dentro de la furgoneta, ni a mencionar la cena de Navidad del año pasado. Paso por alto, por respeto, su forma de cantar. Solo diré que en treinta años nadie ha cuidado esta cooperativa como él.' },
            { q: 'Describe un servicio que te falló con un elogio exagerado, y después dilo en serio. · Use ironic overstatement, then say it straight.', followUps: ['¿Cómo sabe el oyente que es ironía?', '¿En qué situaciones evitarías la ironía?'], phrases: ['[[Impecable, sin duda|orange]]…', 'Todo un ejemplo de…', '[[A todas luces|teal]]…'], hint: 'Exagera el elogio y pon detrás el hecho que lo contradice. Luego reformula de forma literal.', example: 'Una atención impecable, sin duda: solo tardaron tres semanas en contestar a mi correo. En serio: el servicio fue, a todas luces, insuficiente, y presentaré una reclamación.', next: 'Ahora, el cambio de papeles.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tú haces afirmaciones demasiado rotundas sobre un tema de actualidad y tu alumno te pregunta «¿Cómo lo sabes?» y te propone una versión con el grado justo.', self: 'Graba tu respuesta a dos tarjetas y escúchala: ¿has afirmado algo que no podrías sostener? Si es así, regrábala con el grado justo. (Did you claim more than you could back up?)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Carta abierta a los socios', coach: 'Firme en los hechos, prudente en lo demás. Firm on facts, careful with the rest.',
      steps: [
        { title: 'La carta de Mercedes · Mercedes’s letter', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Después tu alumno lee la carta en voz alta y tú señalas cada frase donde afirma más, o menos, de lo que puede sostener.', self: 'Escribe la carta y toca «Revisar mi texto». Después reléela: ¿cada frase se compromete exactamente con lo que puedes probar? (Does each sentence commit to exactly what you can prove?)' } },
          { kind: 'write', title: 'Carta abierta · Open letter', situation: 'Eres Mercedes Aranda. Dos días antes de la votación, escribes una carta abierta que se enviará por correo a todos los socios de la cooperativa Sierra Clara y se publicará en su web. La leerán también Rodrigo Salcedo y Luis Montero. (Write an open letter to the members two days before the vote.)', task: [
            'Separa lo comprobado (es indudable que, no cabe duda de que + indicativo) de lo que deduces (todo indica que, cabe pensar que).',
            'Incluye al menos una reserva con «no es descartable que» o «no cabe excluir que» + subjuntivo.',
            'Limita tu conocimiento o tu compromiso con «que yo sepa», «en principio» o «a priori».',
            'Usa una preterición o una insinuación (no digo que…, pero; habría que ver) sin acusar sin pruebas.',
            'Cierra con una propuesta concreta y firme.',
          ], starters: ['Queridas socias y queridos socios:', 'Es indudable que…', 'Todo indica que…', 'Que yo sepa,…', 'No voy a hablar hoy de…', 'Mi propuesta es sencilla:'],
            words: ['es indudable que', 'no cabe duda de que', 'todo indica que', 'cabe pensar que', 'no es descartable que', 'no cabe excluir que', 'que yo sepa', 'en principio', 'a priori', 'no digo que', 'habría que ver', 'me limito a constatar'],
            model: 'Queridas socias y queridos socios: El domingo votamos, y quiero que lo hagan con los datos sobre la mesa. Es indudable que la cooperativa ha crecido: hemos vendido un veinte por ciento más de aceite que hace tres años, y eso es mérito de todos. También es un hecho que la auditoría llegó con cuatro meses de retraso. Todo indica que la junta lo sabía desde marzo, porque el informe del auditor lleva esa fecha. No cabe excluir que hubiera razones técnicas, pero nadie nos las ha explicado, y, que yo sepa, ningún socio recibió una copia antes de la asamblea. No voy a hablar hoy de la venta de la parcela del molino: prefiero esperar a que la junta publique el contrato, como ya le hemos pedido por escrito. No digo que haya habido mala fe, pero habría que ver por qué una decisión así no pasó por la asamblea. Mi propuesta es sencilla: si me eligen, cada auditoría se publicará en la web la semana en que llegue, y cualquier venta de terrenos se votará en asamblea. Un abrazo, Mercedes Aranda',
            minWords: 150,
            checks: [
              { label: 'Una certeza (es indudable que, no cabe duda de que, a todas luces)', pattern: '(?<!\\p{L})(?:es\\s+indudable\\s+que|no\\s+cabe\\s+(?:ninguna\\s+)?duda\\s+de\\s+que|a\\s+todas\\s+luces)(?!\\p{L})', tip: 'Afirma con certeza lo que todos pueden comprobar: «Es indudable que la cooperativa ha crecido».' },
              { label: 'Una inferencia (todo indica que, cabe pensar que, deber de…)', pattern: '(?<!\\p{L})(?:todo\\s+(?:indica|apunta\\s+a)\\s+que|cabe\\s+(?:pensar|suponer)\\s+que|presumiblemente|(?:debe|deben|debía|debían|debió|debieron)\\s+de)(?!\\p{L})', tip: 'Presenta lo que deduces como deducción: «Todo indica que la junta lo sabía».' },
              { label: 'Una reserva (no es descartable que, no cabe excluir que…)', pattern: '(?<!\\p{L})no\\s+(?:es\\s+descartable|cabe\\s+(?:excluir|descartar)|se\\s+puede\\s+descartar|es\\s+imposible)\\s+que(?!\\p{L})', tip: 'Deja abierta una posibilidad: «No cabe excluir que hubiera razones técnicas».' },
              { label: 'Un límite (que yo sepa, que yo recuerde, en principio, a priori)', pattern: '(?<!\\p{L})(?:que\\s+yo\\s+(?:sepa|recuerde)|en\\s+principio|a\\s+priori)(?!\\p{L})', tip: 'Limita lo que afirmas: «Que yo sepa, ningún socio recibió una copia».' },
              { label: 'Una insinuación o una preterición', pattern: '(?<!\\p{L})(?:no\\s+digo\\s+que|habría\\s+que\\s+ver|me\\s+limito\\s+a|no\\s+voy\\s+a\\s+(?:hablar|mencionar|entrar)|por\\s+no\\s+hablar\\s+de|paso\\s+por\\s+alto|no\\s+entraré\\s+en|no\\s+mencionaré)(?!\\p{L})', tip: 'Sugiere sin afirmar: «No digo que haya habido mala fe, pero habría que ver…».' },
            ],
            warnings: [
              { pattern: '(?:^|[.;:]\\s*)que\\s+yo\\s+sé(?!\\p{L})', why: 'La fórmula fija es «que yo sepa», en subjuntivo.' },
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
            { tone: 'blue', label: 'ESCALA DE COMPROMISO', formula: 'es indudable que · todo indica que · cabe pensar que + ind. → no es descartable que · no es imposible que + subj.', example: 'Todo indica que lo sabían; no es descartable que fuera un despiste.', caption: 'Afirmar y concluir, indicativo; dejar abierto, subjuntivo. Negar la inferencia también pide subjuntivo.', en: 'Assert or conclude with the indicative; merely leave a possibility open with the subjunctive.' },
            { tone: 'teal', label: 'LÍMITES Y RESERVA', formula: 'que yo sepa · en principio (≠ en un principio) · a priori · presumiblemente (≠ presuntamente) · a todas luces · deber / deber de', example: 'Que yo sepa, nadie ha visto el contrato; Luis debía de conocerlo.', caption: 'Fijan hasta dónde llega tu garantía; «deber de» deshace la ambigüedad de la suposición.', en: 'They set the limits of your guarantee; “deber de” makes a supposition unambiguous.' },
            { tone: 'violet', label: 'INSINUACIÓN', formula: 'no digo que + subj., pero · habría que ver si / quién + ind. · me limito a constatar que', example: 'No digo que haya mentido, pero habría que ver quién negoció el precio.', caption: 'El oyente infiere lo que no se dice; quien habla conserva la posibilidad de negarlo.', en: 'The listener infers what is left unsaid, and the speaker can still deny it.' },
            { tone: 'orange', label: 'PRETERICIÓN E IRONÍA', formula: 'no voy a hablar de…, ni a mencionar… · por no hablar de · elogio exagerado + hecho contrario', example: 'Una gestión impecable, sin duda: cuatro meses de retraso.', caption: 'Nombrar algo fingiendo omitirlo; exagerar hasta que se entienda lo contrario.', en: 'Mention by pretending to omit; overstate until the opposite comes across.' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La pregunta clave · The key question', text: 'Antes de cada frase, pregúntate: **¿lo sé, lo deduzco o solo no puedo descartarlo?** Elige la fórmula y el modo que corresponden. Y si vas a insinuar, recuerda que el oyente entenderá lo mismo que si lo afirmaras: **insinúa solo lo que tendrías el valor de sostener**.', en: 'Before each sentence, ask yourself: do I know it, infer it, or simply can’t rule it out? Choose the formula and the mood to match. And if you insinuate, remember the listener hears it as clearly as an assertion: only imply what you would be prepared to stand behind.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/portrait.webp', coach: 'Sin ayuda. No help.', blocks: [
          { kind: 'choice', title: 'Cinco decisiones · Five decisions', items: [
            { prompt: 'Es indudable que el plazo ___ demasiado corto.', options: ['fuera', 'era', 'sea'], answer: 1, why: 'Fórmula de certeza: indicativo.', en: 'There is no doubt the deadline was too short.' },
            { prompt: 'No cabe excluir que ___ nuevos gastos.', options: ['aparecerán', 'aparezcan', 'aparecen'], answer: 1, why: '«No cabe excluir que» abre una posibilidad: subjuntivo.', en: 'New expenses may still turn up.' },
            { prompt: '«No mencionaré los viajes de la junta». ¿Qué recurso es?', options: ['Una promesa de silencio.', 'Una cita literal.', 'Una preterición.'], answer: 2, why: 'Nombra los viajes al anunciar que no los mencionará.', en: 'Naming something by saying you won’t.' },
            { prompt: '«El tesorero debía de saberlo». ¿Qué significa?', options: ['Probablemente lo sabía.', 'Era su obligación saberlo.', 'Lo supo más tarde.'], answer: 0, why: '«Deber de» + infinitivo expresa suposición.', en: 'The treasurer must have known.' },
            { prompt: '«Una gestión impecable, sin duda», tras cuatro meses de retraso. ¿Qué es?', options: ['Una duda.', 'Ironía por exceso.', 'Un elogio sincero.'], answer: 1, why: 'El elogio exagerado choca con los hechos y se entiende lo contrario.', en: 'Overstatement that means the opposite.' },
          ] },
        ] },
        { title: 'Transferencia · Transfer', mascot: '/brand/mascot/walking.webp', coach: 'Otro escenario, la misma escala. New setting, same scale.', blocks: [
          { kind: 'guide', text: { teacher: 'Una situación nueva: tu alumno revisa un artículo científico para una revista. Reescribe cada frase del informe según la instrucción y explica qué compromiso ha cambiado.', self: 'Ahora eres revisor de un artículo científico. Reescribe cada frase de tu informe según la instrucción. (You are peer-reviewing a paper.)' } },
          { kind: 'rewrite', title: 'Informe de revisión · Peer review', items: [
            { prompt: 'Los datos tienen errores.', instruction: 'Rebájalo a una posibilidad abierta: empieza por «No es descartable que los datos».', accept: ['No es descartable que los datos tengan errores', 'No es descartable que los datos contengan errores'] },
            { prompt: 'El autor conocía el otro estudio y lo ocultó.', instruction: 'Insinúa sin afirmar: empieza por «Habría que ver si el autor».', accept: ['Habría que ver si el autor conocía el otro estudio'] },
            { prompt: 'La muestra es claramente insuficiente.', instruction: 'Mantén la certeza máxima con «a todas luces».', accept: ['La muestra es a todas luces insuficiente', 'A todas luces la muestra es insuficiente', 'La muestra es, a todas luces, insuficiente'] },
          ] },
        ] },
        { title: 'Ampliación · Cancelar una implicatura y la reserva científica', mascot: '/brand/mascot/kneeling.webp', coach: 'Opcional. Optional.', blocks: [
          { kind: 'lead', text: 'Para estudiantes fuertes o si queda tiempo. **1.** Una implicatura se puede **cancelar** sin contradicción: «No digo que mienta; de hecho, creo que dice la verdad». Una afirmación, no: «Es indudable que mintió… pero no digo que mintiera» es incoherente. Por eso la insinuación permite retirarse. **2.** En la escritura científica y jurídica, **no cabe excluir que** y **no puede descartarse que** no expresan sospecha, sino honestidad metodológica: los datos no permiten cerrar una posibilidad. **3.** La lítote **no sin** + sustantivo afirma atenuando: «La junta aceptó la propuesta **no sin reticencias**» = con bastantes reticencias.', en: 'For strong students or spare time. An implicature can be cancelled without contradiction (“I’m not saying he’s lying; in fact, I think he’s telling the truth”); an assertion cannot. That is what makes insinuation deniable. In scientific and legal writing, “no cabe excluir que” signals methodological caution, not suspicion. And the litotes “no sin + noun” affirms through understatement: “not without reservations” means with quite a few.' },
          { kind: 'choice', title: 'Matices · Nuances', items: [
            { prompt: '«No digo que el auditor se equivocara; de hecho, creo que acertó». ¿Es coherente?', options: ['Solo si se usa el indicativo.', 'No: se contradice.', 'Sí: cancela la implicatura de sospecha sin contradecirse.'], answer: 2, why: 'Lo insinuado no forma parte de lo dicho y puede cancelarse; lo afirmado, no.', en: 'An implicature can be cancelled; an assertion cannot.' },
            { prompt: 'Un informe médico: «No cabe excluir que el fármaco tenga efectos a largo plazo». ¿A qué se compromete el autor?', options: ['A que el fármaco tiene esos efectos.', 'A que sospecha de la empresa.', 'A que los datos no permiten cerrar esa posibilidad.'], answer: 2, why: 'En registro científico, la fórmula expresa prudencia metodológica, no acusación.', en: 'Methodological caution, not an accusation.' },
            { prompt: '«Aceptó el cargo no sin dudas». ¿Qué significa?', options: ['No lo aceptó.', 'Lo aceptó, y con bastantes dudas.', 'Lo aceptó sin dudar.'], answer: 1, why: '«No sin» niega la ausencia: afirma, atenuando, que hubo dudas.', en: 'He accepted it, though with quite a few doubts.' },
          ] },
          { kind: 'teacher', text: 'Paso opcional: solo si queda tiempo o para estudiantes fuertes. Tu alumno busca un discurso político o un editorial real, subraya una preterición o una insinuación y la reescribe como afirmación directa. Después comentan cuál de las dos versiones es más justa.' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 222 · Cortesía estratégica y amenaza a la imagen', text: 'Hoy has graduado el compromiso y has visto cómo se sugiere sin afirmar. En la clase 222 das el paso siguiente: cómo se protege, o se pone en riesgo, la **imagen** del interlocutor cuando criticas, rechazas o corriges, y cómo la cortesía funciona como **estrategia**. Las insinuaciones de Mercedes y la respuesta de Rodrigo son, en el fondo, un juego de imagen.', en: 'Today you calibrated commitment and saw how to suggest without asserting. Class 222 takes the next step: how criticism, refusals and corrections protect or threaten the other person’s face, and how politeness works as strategy. Mercedes’s insinuations and Rodrigo’s reply were, at heart, a game of face.', href: '/gramatica/cortesia-estrategica-y-amenaza-a-la', label: 'Ir a la clase 222' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Qué diferencia hay entre “La junta lo sabía”, “Todo indica que la junta lo sabía” y “No digo que la junta lo supiera, pero…”?». Respuesta esperada: afirmación que hay que probar; inferencia presentada con su indicio; insinuación que deja la conclusión al oyente y se puede negar. Tarea: la carta de Escribir.' },
        ] },
      ],
    },
  ],
};
