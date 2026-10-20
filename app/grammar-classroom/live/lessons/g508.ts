import type { LiveLesson } from '../types';

/**
 * Lesson 508 · C2 · Valores discursivos del condicional de rumor (course unit G208).
 * Builds on G161 (lesson 461: conditional of probability), G173 (lesson 473: the conditional
 * of rumour introduced, habría dimitido / estaría cerrado), G174 (lesson 474: habría + participio
 * as conjecture and hypothesis), G193 (lesson 493: según, supuestamente, presunto, reporting
 * verbs) and G194 (lesson 494: quoting in texts). Those inventories are not repeated.
 * C2 step: what the form DOES in discourse and who answers for it. Content: simple conditional
 * for unconfirmed present or future (sería, estaría negociando, viajaría mañana) vs compound for
 * past (habría rechazado, habría sido detenido), with or without an explicit source; the
 * conditional says that someone says it, not who; the same form with other values (probability
 * in the past: serían las diez = probablemente eran; ya habría salido as own inference;
 * politeness and attenuation: ¿podría…?, yo diría que; hypothesis; possibility with podría);
 * the debate, stated as the sources state it: the Nueva gramática describes it as a frequent
 * journalistic use; style guides such as El País's and the Fundéu advise against it as a calque
 * of French; explicit alternatives (según + ind., fuentes de X aseguran que, al parecer,
 * la fiscalía investiga si…); presumption of innocence, presunto / presuntamente, stacking;
 * how headlines manage certainty. Ampliación: ambiguity after dijo que, interrogative headlines,
 * quotation headlines. Scene: Radio Ciudad. Olga Barrientos (listeners' ombudswoman) answers a
 * complaint from listener Mercedes Ochoa about the headline «El secretario de Obras habría ocultado
 * un informe sobre sobrecostes» (the water treatment plant case: secretary Arturo Medina, a detained
 * businessman). Rodrigo Valcárcel is head of news; Lidia Font, a trainee. Escuchar: Gerardo Luna's
 * 8 a.m. bulletin (es-MX-JorgeNeural). Escribir: Olga's column «La defensora responde».
 */
export const lesson: LiveLesson = {
  id: 508,
  level: 'C2',
  title: 'Valores discursivos del condicional de rumor',
  subtitle: 'Reconocer y evaluar el condicional de rumor, distinguirlo de otros condicionales y atribuir la información con responsabilidad.',
  legend: [
    { tone: 'violet', label: 'CONDICIONAL DE RUMOR · habría rechazado, sería (unconfirmed, someone else’s)' },
    { tone: 'teal', label: 'ATRIBUCIÓN EXPLÍCITA · según, fuentes de X aseguran que (the source is named)' },
    { tone: 'orange', label: 'GARANTÍA JURÍDICA · presunto, presuntamente (no conviction yet)' },
    { tone: 'blue', label: 'OTROS CONDICIONALES · probabilidad, cortesía, posibilidad (other values)' },
  ],
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: '¿Quién responde de lo que dice el condicional?', coach: 'Alguien lo dice, pero ¿quién? Someone says it, but who?',
      steps: [
        { title: 'El titular de las ocho · The 8 a.m. headline', blocks: [
          { kind: 'lead', text: 'Radio Ciudad, lunes por la mañana. Olga Barrientos, defensora de la audiencia, abre el correo de una oyente, Mercedes Ochoa: «El viernes abrieron el informativo con este titular: “El secretario de Obras **habría ocultado** un informe sobre sobrecostes”. Me quedé con que lo había ocultado. ¿Lo ocultó o no?». El condicional de rumor ya lo conoces. Hoy vas un paso más allá: **qué hace en el discurso**, qué deja sin decir y qué alternativas tiene.', en: 'A public radio station. The listeners’ ombudswoman reads a complaint: the Friday headline said the public works secretary “had reportedly hidden” a report on cost overruns, and the listener only kept “hidden”. You already know the conditional of rumour; today you look at what it does in discourse, what it leaves unsaid, and what the alternatives are.' },
          { kind: 'guide', text: { teacher: 'Tú lees los tres titulares. Tu alumno dice en cada uno quién responde del dato: la emisora, una fuente con nombre o «alguien».', self: 'Lee los tres titulares en voz alta y decide quién responde del dato en cada uno: la emisora, una fuente concreta o «alguien». (Who answers for the claim in each one?)' } },
          { kind: 'compare', title: 'Una noticia, tres titulares · One story, three headlines', columns: [
            { tone: 'violet', label: 'CONDICIONAL DE RUMOR', sentence: 'El secretario de Obras [[habría ocultado|violet]] un informe sobre sobrecostes.', idea: 'La información viene de otros y no está confirmada, pero no se dice de quién.', en: 'The conditional signals second-hand, unconfirmed information, roughly “reportedly”, without naming the source.' },
            { tone: 'teal', label: 'ATRIBUCIÓN EXPLÍCITA', sentence: '[[Fuentes de la investigación aseguran que|teal]] Obras ocultó un informe sobre sobrecostes.', idea: 'El dato va en indicativo, pero tiene dueño: quien lo asegura son las fuentes.', en: 'The claim is in the indicative, but it clearly belongs to the named source, not to the station.' },
            { tone: 'neutral', label: 'HECHO VERIFICADO', sentence: 'Un informe interno advertía en marzo de un sobrecoste del 40 %.', idea: 'La emisora tiene el documento y responde del dato.', en: 'The station has seen the document and vouches for the fact itself.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué informa exactamente el titular «El secretario de Obras habría ocultado un informe»?', options: ['Que lo habría ocultado si hubiera podido.', 'Que alguien afirma que lo ocultó y que la emisora no lo ha confirmado.', 'Que la emisora cree que probablemente lo ocultó.'], answer: 1, why: 'Es condicional de rumor: información ajena y no asegurada. No es un cálculo de la emisora ni una hipótesis.', en: 'The conditional of rumour reports someone else’s unconfirmed claim; it is neither the station’s own guess nor a hypothesis.' },
            { prompt: '¿Qué titular nombra a quien responde del dato?', options: ['Obras ocultaría un informe sobre sobrecostes.', 'Obras habría ocultado un informe sobre sobrecostes.', 'Fuentes de la investigación aseguran que Obras ocultó un informe.'], answer: 2, why: 'Solo la atribución explícita dice quién lo afirma. El condicional dice que «alguien» lo dice.', en: 'Only explicit attribution tells the audience who is making the claim.' },
          ] },
        ] },
        { title: 'Forma y tiempo · Form and time', mascot: '/brand/mascot/studying.webp', coach: 'Simple para el presente, compuesto para el pasado. Simple for now, compound for the past.', blocks: [
          { kind: 'concept', tone: 'violet', label: 'CONDICIONAL DE RUMOR', question: '¿El hecho es presente, futuro o pasado?', en: 'The simple conditional reports an unconfirmed present state or a planned future event (sería, estaría negociando, viajaría mañana). The compound conditional reports an unconfirmed past event (habría rechazado) and covers what the indicative splits into rechazó, ha rechazado and había rechazado. The source may be named (según…) or left implicit: the conditional alone already tells you the information is second-hand.', formula: ['condicional simple → presente o futuro no confirmado: sería · estaría negociando · viajaría mañana', 'condicional compuesto → pasado no confirmado: habría rechazado · habría sido detenido', 'con fuente («según fuentes policiales, …») o sin ella'],
            meaning: 'El condicional de rumor es un **marcador de información ajena**: dice que el dato procede de otros y que quien habla **no lo garantiza**. Lo que no dice es **quién** lo afirma ni **cómo** lo sabe.',
            examples: [
              { es: 'El ministro [[habría rechazado|violet]] la propuesta en la reunión del jueves.', en: 'The minister reportedly turned the proposal down at Thursday’s meeting.' },
              { es: 'Según fuentes policiales, el detenido [[sería|violet]] el administrador de la constructora.', en: 'According to police sources, the detainee is the construction firm’s manager (not yet confirmed).' },
              { es: 'La alcaldía [[estaría negociando|violet]] un nuevo contrato con otra empresa.', en: 'The city government is said to be negotiating a new contract with another company.' },
              { es: 'El secretario [[comparecería|violet]] el martes ante la comisión, según su equipo.', en: 'The secretary is expected to appear before the committee on Tuesday, according to his team: a plan, not a fact.' },
            ] },
          { kind: 'table', title: 'De lo que dice la fuente al titular · From the source’s words to the headline', head: ['La fuente dice', 'La prensa lo transmite', 'Tiempo del hecho'], rows: [
            ['«El detenido **es** el administrador».', 'El detenido [[sería|violet]] el administrador.', 'presente'],
            ['«**Está negociando** su salida».', '[[Estaría negociando|violet]] su salida.', 'presente en curso'],
            ['«**Comparecerá** el martes».', '[[Comparecería|violet]] el martes.', 'futuro'],
            ['«**Rechazó** / **ha rechazado** la propuesta».', '[[Habría rechazado|violet]] la propuesta.', 'pasado'],
            ['«**Había firmado** antes del concurso».', '[[Habría firmado|violet]] antes del concurso.', 'pasado anterior'],
            ['«**Fue detenido** en su casa».', '[[Habría sido detenido|violet]] en su casa.', 'pasado, en pasiva'],
          ], note: 'El compuesto **neutraliza** las distinciones del pasado: «habría rechazado» puede corresponder a «rechazó», «ha rechazado» o «había rechazado». Para un hecho pasado no confirmado, el simple no sirve: «Según la fiscalía, firmaría el contrato en 2023» se entiende como ‘iba a firmarlo’.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Según fuentes sindicales, la empresa ___ ayer a cuarenta trabajadores.', options: ['despediría', 'habría despedido', 'despidiera'], answer: 1, why: 'Hecho pasado («ayer») y no confirmado: condicional compuesto. «Despediría ayer» no expresa un pasado de rumor.', en: 'A past event, unconfirmed: which form?' },
            { prompt: 'El exalcalde ___ dispuesto a declarar ante el juez, según su abogado.', options: ['estuviera', 'estaría', 'habría estado'], answer: 1, why: 'Disposición actual y no confirmada: condicional simple de rumor.', en: 'A present attitude, reported by his lawyer: which form?' },
          ] },
        ] },
        { title: 'Una forma, varios valores · One form, several values', mascot: '/brand/mascot/speaking.webp', coach: '¿De dónde sale el dato? Where does the information come from?', blocks: [
          { kind: 'compare', title: 'El mismo condicional, cuatro trabajos · The same conditional, four jobs', columns: [
            { tone: 'violet', label: 'RUMOR', sentence: 'Según los vecinos, el empresario [[habría salido|violet]] de madrugada.', idea: 'Dato ajeno, no confirmado.', en: 'Someone else’s claim: “reportedly left before dawn”.' },
            { tone: 'blue', label: 'PROBABILIDAD EN EL PASADO', sentence: 'Cuando llegó la policía, [[serían|blue]] las diez.', idea: 'Cálculo propio: ‘probablemente eran las diez’.', en: 'The speaker’s own estimate: “it must have been about ten”.' },
            { tone: 'blue', label: 'CORTESÍA Y ATENUACIÓN', sentence: '[[¿Podría|blue]] confirmarnos la cifra? [[Yo diría|blue]] que no es exacta.', idea: 'Suaviza una petición o una opinión.', en: 'Softens a request or an opinion: “Could you…? I’d say…”.' },
            { tone: 'neutral', label: 'HIPÓTESIS', sentence: 'Con un control externo, el sobrecoste no [[habría pasado|blue]] inadvertido.', idea: 'Situación irreal.', en: 'An unreal situation: “would not have gone unnoticed”.' },
          ] },
          { kind: 'decide', title: '¿Qué valor tiene? · Which value is it?', steps: [
            { q: '¿El dato procede de otros y quien habla no lo garantiza?', yes: '**Rumor**: se puede añadir «según…» sin cambiar el sentido.', no: 'Sigue con la siguiente pregunta.' },
            { q: '¿Es un cálculo de quien habla sobre el pasado?', yes: '**Probabilidad**: equivale a «probablemente» + imperfecto o pluscuamperfecto (serían = probablemente eran).', no: 'Sigue.' },
            { q: '¿Suaviza una petición, un deseo o una opinión?', yes: '**Cortesía o atenuación**: ¿podría…?, me gustaría, yo diría que.', no: 'Probablemente es **hipótesis** (una condición irreal, expresa o implícita) o **futuro del pasado** («dijo que vendría»).' },
          ] },
          { kind: 'tip', icon: '💡', title: 'La trampa de «habría» · The «habría» trap', text: '«Cuando llegaron los agentes, el empresario ya **habría salido**» es una **inferencia propia** (= probablemente ya había salido). «Según los vecinos, el empresario **habría salido** de madrugada» es **rumor**. La forma es idéntica: decide **la fuente** del dato.', en: 'Same form, two values: with “cuando llegaron, ya habría salido” the speaker is inferring; with “según los vecinos, habría salido” the speaker is relaying an unconfirmed report. The source of the information decides.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«El testigo tendría unos sesenta años». La periodista lo ha visto, pero no sabe su edad. ¿Qué valor tiene?', options: ['Cortesía: suaviza la afirmación.', 'Rumor: otra persona lo afirma.', 'Probabilidad: es su propio cálculo.'], answer: 2, why: 'Es una estimación propia sobre el pasado: ‘probablemente tenía unos sesenta años’.', en: 'She is estimating the witness’s age herself.' },
            { prompt: '«¿Podría decirnos de dónde sale esa cifra?». ¿Qué valor tiene «podría»?', options: ['Rumor: alguien lo dice.', 'Hipótesis: depende de una condición.', 'Cortesía: suaviza la petición.'], answer: 2, why: 'El condicional de cortesía hace la pregunta más amable; no hay información ajena.', en: 'A politeness conditional in a request.' },
          ] },
        ] },
        { title: 'Un uso discutido · A disputed usage', mascot: '/autoestudio/mascot/noting.webp', coach: 'Lo que dicen las fuentes, ni más ni menos. What the sources say, no more.', blocks: [
          { kind: 'lead', text: 'Aquí conviene ser preciso. La **Nueva gramática** (RAE-ASALE) describe este condicional como un uso frecuente del lenguaje periodístico, que presenta una información como procedente de otros y no asegurada. Varios **libros de estilo**, como el de «El País», y la **Fundéu** recomiendan evitarlo: lo consideran un calco del francés y advierten que deja en el aire quién responde del dato. Y, a la vez, es muy habitual en la prensa de España y de América. Ni es un error gramatical ni es neutro: es una **elección de estilo con consecuencias**.', en: 'Be precise here. The academic grammar describes it as a frequent journalistic use that presents information as second-hand and unconfirmed. Several style guides, such as El País’s, and the Fundéu advise against it as a calque of French that blurs who answers for the claim. It is nonetheless very common in the press of Spain and Latin America. It is not a grammatical error, nor a neutral choice: it is a stylistic decision with consequences.' },
          { kind: 'table', title: 'Alternativas que hacen explícita la atribución · Alternatives that make attribution explicit', head: ['Recurso', 'Qué deja claro', 'Ejemplo'], rows: [
            ['**según** + fuente + indicativo', 'de quién es el dato', '[[Según la fiscalía|teal]], la empresa **cobró** dos veces la misma obra.'],
            ['**fuentes de X aseguran / indican que** + indicativo', 'quién lo afirma y con qué fuerza', '[[Fuentes de la alcaldía aseguran que|teal]] el contrato **está** anulado.'],
            ['**al parecer · por lo visto** + indicativo', 'que es información oída (registro general y oral)', '[[Al parecer|teal]], el secretario **ha pedido** una baja.'],
            ['**X investiga si…** · **X no ha confirmado…**', 'el hecho verificable: hay una investigación o un silencio', 'La fiscalía investiga si Obras **ocultó** el informe.'],
            ['**supuestamente**', 'que quien escribe duda', '[[Supuestamente|teal]], el informe nunca llegó al pleno.'],
            ['**presunto · presuntamente**', 'que nadie ha sido condenado (registro jurídico)', 'el [[presunto|orange]] autor de la falsificación'],
          ], note: 'Con una fuente explícita, el **indicativo** ya transmite que el dato es de otro: «Según la fiscalía, cobró…». La combinación «según…, + condicional» es muy frecuente en la prensa; los libros de estilo citados prefieren la versión con indicativo.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué afirmación sobre el condicional de rumor se ajusta a las fuentes?', options: ['Es incorrecto según la gramática académica.', 'Es habitual en la prensa, aunque varios libros de estilo y la Fundéu recomiendan evitarlo.', 'Solo se usa en la prensa de España.'], answer: 1, why: 'La gramática lo describe como uso periodístico frecuente; las recomendaciones en contra vienen de libros de estilo y de la Fundéu. Se usa a los dos lados del Atlántico.', en: 'Which statement matches what the sources actually say?' },
            { prompt: 'Lo único verificable es que existe una investigación. ¿Qué titular lo refleja mejor?', options: ['Obras habría ocultado un informe.', 'Obras ocultó un informe.', 'La fiscalía investiga si Obras ocultó un informe.'], answer: 2, why: 'El hecho comprobado es la investigación; «investiga si…» informa de él sin dar la acusación por cierta.', en: 'Only the investigation itself is verified.' },
          ] },
        ] },
        { title: 'Presunción de inocencia · Presumption of innocence', mascot: '/brand/mascot/seated.webp', coach: 'Una duda también puede acusar. Doubt can accuse too.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'PRESUNTO · PRESUNTAMENTE', question: '¿Hablas de alguien acusado de un delito y todavía no condenado?', en: 'Under the presumption of innocence, nobody is guilty until a final judgment. “Presunto” (alleged) goes before the noun and protects a person who has not been convicted; it can also qualify the offence when it is not established that a crime took place. “Presuntamente” is the adverb. The conditional of rumour is no legal shield: an unconfirmed accusation is still an accusation, and many journalism handbooks warn against using it to insinuate.', formula: ['el / la presunto/a + nombre de persona: el presunto autor, la presunta responsable', 'presunto + delito, si no consta que se haya cometido: un presunto fraude', 'presuntamente + verbo en indicativo: presuntamente falsificó'],
            meaning: '**Presunto** no expresa la duda del periodista: es una **garantía** para quien no ha sido juzgado. Cuando hay **sentencia firme**, ya no procede: «el condenado», «el autor del fraude».',
            examples: [
              { es: 'Detenido el [[presunto|orange]] autor de la falsificación de las facturas.', en: 'The alleged forger of the invoices has been arrested.' },
              { es: 'La empresa [[presuntamente|orange]] cobró dos veces la misma obra.', en: 'The company allegedly charged twice for the same work.' },
              { es: 'El exdirector, condenado en firme por fraude, cumple condena desde enero.', en: 'Once there is a final conviction, “presunto” no longer applies.' },
            ],
            note: 'Evita acumular marcas: «Presuntamente, el detenido habría supuestamente desviado fondos» dice tres veces lo mismo y no protege más. Una sola marca bien elegida basta.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'El empresario está detenido, pero no ha sido juzgado. ¿Cómo lo presentas?', options: ['el estafador de la depuradora', 'el presunto responsable de la falsedad documental', 'el que habría sido estafador'], answer: 1, why: '«Presunto» respeta la presunción de inocencia. «El estafador» lo da por condenado; la tercera es confusa.', en: 'He has been arrested but not tried.' },
            { prompt: '«El presunto autor del fraude, condenado en firme hace un año, sale hoy de prisión». ¿Qué falla?', options: ['Nada: «presunto» siempre protege.', '«Condenado» debería ir en condicional.', 'Con sentencia firme, «presunto» ya no procede.'], answer: 2, why: '«Presunto» protege a quien no ha sido condenado; tras una condena firme, se dice «el autor» o «el condenado».', en: 'He has a final conviction: is “presunto” still appropriate?' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: '¿Forma, valor o responsabilidad? Form, value or responsibility?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees cada frase con el error y tu alumno explica qué falla antes de ver la corrección: ¿la forma, el valor del condicional o la responsabilidad periodística?', self: 'Lee cada frase y decide qué falla: ¿la forma, el valor o la responsabilidad? Después toca para ver la corrección. (Form, value or responsibility?)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'El tribunal ha leído la sentencia: el exsecretario habría sido condenado a tres años.', right: 'El tribunal ha leído la sentencia: el exsecretario ha sido condenado a tres años.', why: 'El dato está confirmado. El condicional crea una duda que no existe.' },
            { wrong: 'Según fuentes policiales, el detenido fuera el cabecilla de la red.', right: 'Según fuentes policiales, el detenido sería (o es) el cabecilla de la red.', why: 'El rumor se expresa con condicional o, con la fuente explícita, con indicativo. El subjuntivo no tiene aquí ese valor.' },
            { wrong: 'Según la fiscalía, el empresario firmaría el contrato en 2023 sin concurso.', right: 'Según la fiscalía, el empresario habría firmado (o firmó) el contrato en 2023 sin concurso.', why: 'Para un pasado no confirmado se usa el compuesto; el simple se lee como ‘iba a firmarlo’.' },
            { wrong: 'Presuntamente, el detenido habría supuestamente desviado fondos, según la policía.', right: 'Según la policía, el detenido desvió fondos (o: El detenido habría desviado fondos, según la policía).', why: 'Acumular marcas no añade rigor: una atribución clara basta.' },
            { wrong: 'El presunto estafador, condenado en firme el año pasado, sale hoy de prisión.', right: 'El estafador, condenado en firme el año pasado, sale hoy de prisión.', why: 'Con sentencia firme, «presunto» ya no procede.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'La emisora ha visto el acta del pleno. ¿Cómo lo cuenta?', options: ['Al parecer, el informe llegaría al pleno el 12 de marzo.', 'El informe habría llegado al pleno el 12 de marzo.', 'El acta confirma que el informe llegó al pleno el 12 de marzo.'], answer: 2, why: 'Hay documento: la emisora responde del dato, en indicativo. El condicional sembraría una duda que ya no existe.', en: 'The station has the minutes in hand.' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno busca un titular de esta semana con condicional de rumor y explica qué fuente habría podido nombrarse y qué es lo único verificable.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'La queja de la oyente', coach: 'Toca cada marca: ¿quién responde? Tap each mark.',
      steps: [
        { title: 'En el despacho de la defensora · In the ombudswoman’s office', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Rodrigo y tu alumno es Olga. Después tu alumno toca cada expresión marcada y explica qué valor tiene y quién responde del dato.', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada: ¿qué valor tiene y quién responde del dato? (What value, and who answers for it?)' } },
          { kind: 'explore', title: '«Nadie oye el condicional»', setting: 'Lunes, diez de la mañana. Olga Barrientos, defensora de la audiencia de Radio Ciudad, recibe a Rodrigo Valcárcel, jefe de informativos, con la queja de Mercedes Ochoa impresa sobre la mesa.', lines: [
            { who: 'Olga', text: 'Rodrigo, gracias por venir. Es por el titular del viernes: «El secretario de Obras [[habría ocultado|violet]] un informe sobre sobrecostes».', en: 'Thanks for coming. It’s about Friday’s headline: “Public works secretary reportedly hid a report on cost overruns.”' },
            { who: 'Rodrigo', text: 'Ya me lo imaginaba. Pero el condicional estaba ahí precisamente para no afirmarlo: es lo que dicen nuestras fuentes, no una acusación nuestra.', en: 'I guessed as much. But the conditional was there precisely so as not to assert it: it’s what our sources say, not our accusation.' },
            { who: 'Olga', text: 'Eso es lo que discute la oyente. Dice que nadie oye el matiz del condicional; lo que se queda es «ocultado». Y en el titular nadie decía [[según quién|teal]].', en: 'That’s exactly her point. Nobody hears the nuance of the conditional; what sticks is “hidden”. And the headline never said according to whom.' },
            { who: 'Rodrigo', text: 'La fuente iba en el cuerpo de la noticia: [[fuentes de la investigación consultadas por esta emisora|teal]]. En ocho segundos de titular no cabe todo.', en: 'The source was in the body of the story: “investigation sources consulted by this station”. You can’t fit everything into an eight-second headline.' },
            { who: 'Olga', text: 'Cabe, si quieres: «[[Fuentes de la investigación aseguran que|teal]] Obras ocultó un informe». Es casi igual de corto y deja claro quién responde.', en: 'It fits if you want it to: “Investigation sources claim Public Works hid a report.” Almost as short, and it makes clear who answers for it.' },
            { who: 'Rodrigo', text: 'Ya, pero con «ocultó» en indicativo suena más categórico. Parece que lo confirmamos nosotros.', en: 'Sure, but with “hid” in the indicative it sounds more categorical, as if we were confirming it.' },
            { who: 'Olga', text: 'No, porque el verbo [[aseguran|teal]] es de ellos. El condicional solo dice que alguien lo dice; no dice quién. La atribución, sí.', en: 'No, because “claim” is their verb. The conditional only says that somebody says it, not who. Attribution does.' },
            { who: 'Rodrigo', text: 'En eso te doy la razón. ¿Y lo del empresario? Dijimos que [[sería|violet]] el administrador de la constructora.', en: 'I’ll grant you that. And the businessman? We said he was reportedly the construction firm’s manager.' },
            { who: 'Olga', text: 'Eso es menos grave: identificar a alguien no es acusarlo. Lo delicado fue llamarlo «el autor de la falsedad». Sin sentencia, como mínimo, [[presunto|orange]] autor.', en: 'That’s less serious: identifying someone isn’t accusing them. The delicate part was calling him “the forger”. With no ruling, at the very least “alleged”.' },
            { who: 'Rodrigo', text: 'Tienes razón. Con las prisas del cierre, [[serían|blue]] las nueve y media cuando lo grabamos, y nadie lo revisó.', en: 'You’re right. In the rush before the deadline, it must have been half past nine when we recorded it, and nobody checked it.' },
            { who: 'Olga', text: 'Lo entiendo. [[¿Podrías|blue]] mandarme el guion de hoy antes de emitirlo? A Mercedes le contesto yo en mi espacio del viernes.', en: 'I understand. Could you send me today’s script before it airs? I’ll answer Mercedes myself in my Friday slot.' },
          ], notes: {
            'habría ocultado': '**Condicional de rumor** compuesto: un hecho pasado presentado como información ajena y no confirmada. En el titular no aparece la fuente.',
            'según quién': 'La pregunta clave de la oyente: el condicional indica que el dato es ajeno, pero no nombra a la fuente.',
            'fuentes de la investigación consultadas por esta emisora': 'Atribución explícita, aunque genérica: no da nombres, pero dice de qué ámbito sale el dato y que la emisora lo ha consultado.',
            'Fuentes de la investigación aseguran que': 'Alternativa que proponen los libros de estilo: la fuente como sujeto de un verbo de lengua y el dato en **indicativo** («ocultó»).',
            'aseguran': 'El verbo introductor pertenece a la fuente: la emisora transmite lo que otros aseguran sin hacerlo suyo. Aquí el indicativo no compromete a la emisora.',
            'sería': '**Condicional de rumor** simple: identificación actual no confirmada (= según las fuentes, es el administrador).',
            'presunto': '«Presunto» delante del nombre: garantía de la **presunción de inocencia** para quien no ha sido juzgado. No expresa duda del periodista.',
            'serían': '**Condicional de probabilidad**, no de rumor: Rodrigo calcula la hora él mismo (= probablemente eran las nueve y media).',
            '¿Podrías': '**Condicional de cortesía**: suaviza la petición. No hay información ajena.',
          } },
          { kind: 'choice', title: '¿Has entendido? · Did you understand?', items: [
            { prompt: '¿Qué critica la oyente del titular?', options: ['Que la noticia era falsa.', 'Que usara una forma verbal incorrecta.', 'Que el condicional no nombraba la fuente y el público se quedó con la acusación.'], answer: 2, why: 'Olga lo resume: «nadie oye el matiz del condicional» y el titular no decía «según quién».', en: 'What is the listener’s complaint?' },
            { prompt: '¿Por qué cree Olga que «Fuentes de la investigación aseguran que Obras ocultó…» no compromete a la emisora?', options: ['Porque el titular es más largo.', 'Porque el verbo introductor «aseguran» atribuye el dato a la fuente.', 'Porque el indicativo expresa duda.'], answer: 1, why: 'El indicativo depende de «aseguran», un verbo de las fuentes: el dato queda atribuido.', en: 'Why doesn’t the indicative commit the station here?' },
            { prompt: '¿Qué valor tiene «serían» en la frase de Rodrigo?', options: ['Rumor: alguien le dijo la hora.', 'Cortesía: suaviza lo que dice.', 'Probabilidad: es su propio cálculo de la hora.'], answer: 2, why: 'Rodrigo estima la hora él mismo: ‘probablemente eran las nueve y media’.', en: 'What does Rodrigo’s “serían” express?' },
          ] },
        ] },
        { title: 'El guion de hoy · Today’s script', mascot: '/brand/mascot/kneeling.webp', coach: 'Verificado, atribuido o protegido. Verified, attributed or protected.', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees el papel de Olga y tu alumno el de Rodrigo; en cada hueco, tu alumno elige y explica quién responde del dato.', self: 'Completa la conversación. En cada hueco, piensa: ¿está verificado, es de una fuente o hay que proteger a alguien? (Verified, sourced, or someone to protect?)' } },
          { kind: 'chat-fill', title: 'Rodrigo lee el nuevo titular · Rodrigo reads the new headline', lines: [
            { who: 'Rodrigo', text: 'Empiezo con lo que dijo Medina en rueda de prensa: «El secretario de Obras ___ que el informe llegó al pleno a su debido tiempo».', options: ['habría asegurado', 'aseguraría', 'asegura'], answer: 2, why: 'Lo dijo en público y lo grabamos: que lo asegura es un hecho, en indicativo.' },
            { who: 'Olga', text: 'Bien: que él lo diga está comprobado. ¿Y la versión de las fuentes?' },
            { who: 'Rodrigo', text: '«Fuentes de la investigación ___ que lo archivó sin enviarlo al pleno».', options: ['sostengan', 'sostienen', 'sostendrían'], answer: 1, why: 'Atribución explícita: el verbo de la fuente en indicativo. No hace falta el condicional.' },
            { who: 'Olga', text: '¿Y el empresario detenido?' },
            { who: 'Rodrigo', text: '«El ___ autor de la falsedad documental pasará hoy a disposición judicial».', options: ['presunto', 'supuestamente', 'llamado'], answer: 0, why: 'No hay sentencia: «presunto» delante del nombre. «Supuestamente» es un adverbio y «llamado» se usa para nombres o apodos.' },
            { who: 'Olga', text: 'Perfecto. ¿Y lo que publicaron otros medios sobre la huida?' },
            { who: 'Rodrigo', text: 'Lo hemos comprobado, así que lo decimos claro: «No ___ huir: lo detuvieron en su domicilio».', options: ['intentó', 'habría intentado', 'intentara'], answer: 0, why: 'La emisora lo ha verificado: indicativo. El condicional mantendría viva una versión que ya sabemos falsa.' },
          ] },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Leer, elegir y reformular', coach: 'Cada forma, su fuente. Every form, its source.',
      steps: [
        { title: '¿Qué valor tiene? · Which value?', blocks: [
          { kind: 'guide', text: { teacher: 'Tu alumno lee cada frase y decide qué valor tiene el condicional. Tú preguntas: «¿De dónde sale el dato?».', self: 'Lee cada frase y clasifica el condicional. Pregúntate de dónde sale el dato. (Where does the information come from?)' } },
          { kind: 'classify', title: 'Cuatro valores · Four values', categories: [
            { id: 'rumor', label: 'RUMOR', tone: 'violet' },
            { id: 'prob', label: 'PROBABILIDAD', tone: 'blue' },
            { id: 'cortesia', label: 'CORTESÍA', tone: 'teal' },
            { id: 'hipo', label: 'HIPÓTESIS', tone: 'neutral' },
          ], items: [
            { text: 'Según el sindicato, la empresa cerraría la planta en enero.', answer: 'rumor', why: 'Dato atribuido al sindicato y no confirmado.' },
            { text: 'Cuando salió del juzgado, serían las once de la noche.', answer: 'prob', why: 'Cálculo de quien habla: ‘probablemente eran las once’.' },
            { text: '¿Le importaría repetir la cifra para nuestros oyentes?', answer: 'cortesia', why: 'Petición suavizada.' },
            { text: 'Con un control externo, nadie habría podido archivar el informe.', answer: 'hipo', why: 'Situación irreal: no hubo control externo.' },
            { text: 'El detenido habría intentado destruir documentos, según la policía.', answer: 'rumor', why: 'Hecho pasado no confirmado, atribuido a la policía.' },
            { text: 'Yo diría que la emisora actuó con prisa, no con mala fe.', answer: 'cortesia', why: 'Atenuación de una opinión propia.' },
            { text: 'El hombre que declaró ayer tendría unos sesenta años.', answer: 'prob', why: 'Estimación propia sobre el pasado.' },
          ] },
        ] },
        { title: 'Forma y responsabilidad · Form and responsibility', mascot: '/brand/mascot/speaking.webp', blocks: [
          { kind: 'choice', title: 'Elige · Choose', items: [
            { prompt: 'Según fuentes judiciales, el empresario ___ el contrato antes de que se publicara el concurso.', options: ['firmaría', 'habría firmado', 'firmara'], answer: 1, why: 'Pasado no confirmado: compuesto. «Firmaría» se leería como ‘iba a firmarlo’.', en: 'A past event reported by judicial sources.' },
            { prompt: 'El secretario ___ mañana su dimisión, según fuentes de la alcaldía.', options: ['presentara', 'presentaría', 'habría presentado'], answer: 1, why: 'Hecho futuro no confirmado: condicional simple de rumor.', en: 'An unconfirmed future event.' },
            { prompt: 'Solo hay una denuncia de la oposición. ¿Qué titular es más responsable?', options: ['Obras ocultó un informe de sobrecostes.', 'Obras habría ocultado un informe de sobrecostes.', 'La oposición denuncia que Obras ocultó un informe de sobrecostes.'], answer: 2, why: 'Nombra a quien acusa y lo verificable (la denuncia). El condicional insinúa sin decir quién; el indicativo solo lo afirma.', en: 'Which headline handles an unverified accusation most responsibly?' },
            { prompt: 'El empresario fue absuelto ayer. ¿Cómo lo nombras hoy?', options: ['el empresario absuelto ayer', 'el empresario, que habría sido absuelto', 'el presunto estafador'], answer: 0, why: 'La absolución es un hecho: ni «presunto estafador» (sería insinuar) ni condicional (no hay duda).', en: 'He was acquitted yesterday.' },
            { prompt: '«Según el informe de la auditoría municipal, la empresa ___ las facturas». La emisora tiene el informe publicado.', options: ['infló', 'habría inflado', 'inflara'], answer: 0, why: 'Con fuente explícita y documento publicado, el indicativo basta: el dato es del informe.', en: 'The audit report is published and the source is named.' },
          ] },
        ] },
        { title: 'Revisa el guion · Check the script', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'guide', text: { teacher: 'Son frases de guiones de la semana. Tu alumno decide si cada una está bien y, si no, elige la corrección y explica por qué.', self: 'Son frases de guiones de la semana. ¿Están bien? Si no, elige la corrección. (Is each sentence right? If not, pick the fix.)' } },
          { kind: 'fix', title: '¿Está bien? · Is it right?', items: [
            { sentence: 'El juzgado ha confirmado la detención: el empresario habría sido detenido ayer en su domicilio.', ok: false, options: ['El juzgado ha confirmado la detención: el empresario sería detenido ayer en su domicilio.', 'El juzgado ha confirmado la detención: el empresario fuera detenido ayer en su domicilio.', 'El juzgado ha confirmado la detención: el empresario fue detenido ayer en su domicilio.'], answer: 2, why: 'La detención está confirmada: indicativo. El condicional contradice «ha confirmado».' },
            { sentence: 'Según fuentes de la investigación, el empresario habría ocultado facturas.', ok: true, why: 'Es un uso periodístico frecuente y gramatical. Los libros de estilo citados preferirían «Según fuentes de la investigación, el empresario ocultó facturas».' },
            { sentence: 'Según la policía, el detenido fuera el cabecilla de la red.', ok: false, options: ['Según la policía, el detenido fuese el cabecilla de la red.', 'Según la policía, el detenido sería el cabecilla de la red.', 'Según la policía, el detenido haya sido el cabecilla de la red.'], answer: 1, why: 'Información ajena sobre el presente: condicional simple (o «es», con la fuente explícita). El subjuntivo no expresa rumor.' },
            { sentence: 'Presuntamente, la empresa habría supuestamente cobrado dos veces, según la fiscalía.', ok: false, options: ['La empresa cobraría presuntamente dos veces.', 'Según la fiscalía, la empresa cobró dos veces la misma obra.', 'Supuestamente, la empresa presuntamente cobró dos veces.'], answer: 1, why: 'Tres marcas para lo mismo: basta con atribuir con claridad.' },
            { sentence: 'Cuando llegaron los agentes, el empresario ya habría salido de casa (la periodista lo deduce porque el coche no estaba).', ok: true, why: 'Es un condicional de probabilidad: inferencia propia, ‘probablemente ya había salido’. No es rumor.' },
          ] },
        ] },
        { title: 'La becaria pregunta · The trainee asks', mascot: '/autoestudio/mascot/noting.webp', blocks: [
          { kind: 'chat-fill', title: 'Rodrigo revisa el guion de Lidia · Rodrigo checks Lidia’s script', lines: [
            { who: 'Lidia', text: 'Para la noticia de los autobuses pongo: «La empresa concesionaria ___ las facturas del último año, según la auditoría municipal».', options: ['inflaría', 'habría inflado', 'inflara'], answer: 1, why: 'Hecho pasado presentado como no confirmado: condicional compuesto.' },
            { who: 'Rodrigo', text: 'La forma es correcta, pero la auditoría municipal ha publicado su informe. ¿Necesitas el condicional?' },
            { who: 'Lidia', text: 'Entonces: «Un informe de la auditoría municipal ___ que la empresa infló las facturas».', options: ['concluiría', 'concluyera', 'concluye'], answer: 2, why: 'El informe existe y está publicado: lo que concluye es un hecho, en indicativo.' },
            { who: 'Rodrigo', text: 'Mejor. ¿Y la directora de la empresa?' },
            { who: 'Lidia', text: 'El informe la señala, pero no hay juicio: «La directora, ___ responsable de las irregularidades, no ha hecho declaraciones».', options: ['presunta', 'supuestamente', 'culpable'], answer: 0, why: 'Sin sentencia, «presunta» delante del nombre. «Culpable» la condena; «supuestamente» es un adverbio.' },
            { who: 'Rodrigo', text: 'Bien. ¿Y a qué hora nos llegó el informe? ¿Lo sabes?' },
            { who: 'Lidia', text: 'No exactamente: ___ las seis cuando lo recibimos.', options: ['habrían sido', 'serían', 'fueran'], answer: 1, why: 'Cálculo propio sobre el pasado: condicional simple de probabilidad (= probablemente eran las seis).' },
          ] },
        ] },
        { title: 'Construye · Build', mascot: '/brand/mascot/standing.webp', blocks: [
          { kind: 'build', title: 'Ordena · Put in order', items: [
            { tiles: ['Según', 'fuentes', 'judiciales,', 'el', 'empresario', 'habría', 'destruido', 'varios', 'documentos.'], accept: ['Según fuentes judiciales, el empresario habría destruido varios documentos.'], en: 'According to judicial sources, the businessman reportedly destroyed several documents.' },
            { tiles: ['La', 'fiscalía', 'investiga', 'si', 'el', 'secretario', 'ocultó', 'el', 'informe.'], accept: ['La fiscalía investiga si el secretario ocultó el informe.'], en: 'Prosecutors are investigating whether the secretary hid the report.' },
            { tiles: ['Fuentes', 'de', 'la', 'alcaldía', 'aseguran', 'que', 'el', 'contrato', 'está', 'anulado.'], accept: ['Fuentes de la alcaldía aseguran que el contrato está anulado.'], en: 'City hall sources say the contract has been cancelled.' },
          ] },
        ] },
        { title: 'Del rumor a la atribución, y al revés · From rumour to attribution, and back', mascot: '/autoestudio/mascot/writing.webp', blocks: [
          { kind: 'guide', text: { teacher: 'Tu alumno reescribe cada titular según la instrucción y lee en voz alta las dos versiones: ¿quién responde ahora del dato?', self: 'Reescribe cada titular según la instrucción y compara: ¿quién responde ahora del dato? (Who answers for it now?)' } },
          { kind: 'rewrite', title: 'Reescribe el titular · Rewrite the headline', items: [
            { prompt: 'El secretario de Obras habría ocultado un informe. (Fuente: fuentes de la investigación.)', instruction: 'Haz explícita la atribución con indicativo: empieza por «Fuentes de la investigación aseguran que».', accept: ['Fuentes de la investigación aseguran que el secretario de Obras ocultó un informe', 'Fuentes de la investigación aseguran que el secretario de Obras ha ocultado un informe'] },
            { prompt: 'Según la policía, el detenido es el administrador de la constructora.', instruction: 'Conviértelo en condicional de rumor y conserva la fuente.', accept: ['Según la policía, el detenido sería el administrador de la constructora', 'El detenido sería el administrador de la constructora, según la policía'] },
            { prompt: 'La empresa habría pagado comisiones a dos funcionarios.', instruction: 'Registro jurídico: usa «presuntamente» con indicativo.', accept: ['Presuntamente, la empresa pagó comisiones a dos funcionarios', 'La empresa pagó presuntamente comisiones a dos funcionarios', 'La empresa presuntamente pagó comisiones a dos funcionarios', 'Presuntamente, la empresa ha pagado comisiones a dos funcionarios', 'La empresa presuntamente ha pagado comisiones a dos funcionarios'] },
            { prompt: 'El alcalde estaría negociando su salida.', instruction: 'Cuéntaselo a un amigo, en registro general: empieza por «Al parecer,».', accept: ['Al parecer, el alcalde está negociando su salida', 'Al parecer, el alcalde negocia su salida'] },
            { prompt: 'Según el sindicato, la empresa despidió a treinta trabajadores.', instruction: 'Conviértelo en condicional de rumor y conserva la fuente.', accept: ['Según el sindicato, la empresa habría despedido a treinta trabajadores', 'La empresa habría despedido a treinta trabajadores, según el sindicato'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno toma un titular real con condicional de rumor y lo reescribe dos veces: con la fuente explícita y con lo único verificable («X investiga si…», «X no ha confirmado…»).' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'El informativo de las ocho', coach: 'Separa lo confirmado de lo atribuido. Facts apart from claims.',
      steps: [
        { title: 'Radio Ciudad, 8:00 · The 8 a.m. bulletin', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general. Segunda escucha: tu alumno anota cada condicional y decide si es rumor u otro valor, y qué datos da la emisora por confirmados.', self: 'Escucha una vez para la idea general. En la segunda, anota cada condicional y decide su valor. Vas a oír «sobrecoste» (cost overrun), «el pleno» (the full council) y «falsedad documental» (document forgery).' } },
          { kind: 'listen', title: 'Informativo de Radio Ciudad', channel: 'RADIO CIUDAD · INFORMATIVO DE LAS 8:00', src: '/audio/grammar-live/508.mp3',
            before: 'Es el informativo del lunes, ya con los nuevos criterios. ¿Qué crees que dará por confirmado y qué presentará como información ajena? (What will be stated as fact, and what attributed?)',
            gist: { prompt: '¿Qué hace el locutor? · What does the newsreader do?', options: ['Separa los hechos confirmados de lo que dicen las fuentes y corrige una información de otros medios.', 'Anuncia que el empresario ha sido condenado.', 'Afirma que el secretario ocultó el informe.'], answer: 0, why: 'Da como hechos la detención y la comprobación de la emisora; atribuye a las fuentes lo no confirmado; desmiente la huida.', en: 'He keeps confirmed facts apart from sourced claims and corrects other outlets.' },
            details: [
              { prompt: '¿Qué responde Arturo Medina?', options: ['Que no conoce el informe.', 'Que dimitirá esta semana.', 'Que el informe llegó al pleno a su debido tiempo.'], answer: 2, why: '«Medina lo niega: asegura que el documento llegó al pleno a su debido tiempo».', en: 'What is Medina’s answer?' },
              { prompt: '¿Qué está confirmado?', options: ['Que el empresario intentó huir.', 'Que Medina archivó el informe.', 'La detención de un empresario de cincuenta y dos años.'], answer: 2, why: '«Lo que sí está confirmado es la detención…».', en: 'Which fact is confirmed?' },
              { prompt: '¿Qué ha comprobado la emisora sobre la supuesta huida?', options: ['Que es cierta, pero no saben adónde fue.', 'Que todavía no se puede saber.', 'Que no es cierta: lo detuvieron en su domicilio.'], answer: 2, why: '«Esta emisora ha comprobado que no es así: los agentes lo detuvieron en su domicilio».', en: 'What has the station checked about the alleged escape?' },
              { prompt: '«Podría quedar en libertad esta misma tarde». ¿Qué valor tiene «podría»?', options: ['Rumor sobre un hecho pasado.', 'Una posibilidad que anuncian fuentes judiciales.', 'Cortesía hacia los oyentes.'], answer: 1, why: '«Poder» en condicional expresa una posibilidad; la fuente está explícita: «fuentes judiciales indican que…».', en: 'What does “podría” express here?' },
              { prompt: '¿Por qué recuerda el locutor la presunción de inocencia?', options: ['Porque Medina lo ha pedido.', 'Porque no hay sentencia firme y nadie es culpable hasta que la haya.', 'Porque el empresario ha sido absuelto.'], answer: 1, why: '«Mientras no haya una sentencia firme, rige la presunción de inocencia».', en: 'Why does he mention the presumption of innocence?' },
            ],
            transcript: 'Buenos días. Son las ocho y les habla Gerardo Luna con el informativo de Radio Ciudad. Abrimos con el caso de la planta depuradora. [[Según fuentes de la investigación|teal]] consultadas por esta emisora, el secretario de Obras Públicas, Arturo Medina, [[habría recibido|violet]] en marzo un informe interno que advertía de un sobrecoste del cuarenta por ciento, y lo [[habría archivado|violet]] sin enviarlo al pleno. Medina lo niega: asegura que el documento llegó al pleno a su debido tiempo y anuncia que hoy mismo presentará las actas. Lo que sí está confirmado es la detención, ayer por la tarde, de un empresario de cincuenta y dos años, al que la policía atribuye un [[presunto|orange]] delito de falsedad documental. El juzgado no ha facilitado su nombre, pero, según las mismas fuentes, [[sería|violet]] el administrador de la constructora adjudicataria y [[estaría colaborando|violet]] con los investigadores. Un matiz importante: anoche varios medios publicaron que el empresario [[habría intentado|violet]] huir al extranjero. [[Esta emisora ha comprobado|teal]] que no es así: los agentes lo detuvieron en su domicilio. Fuentes judiciales indican que [[podría|blue]] quedar en libertad esta misma tarde. Recordamos que, mientras no haya una sentencia firme, rige la presunción de inocencia. Seguiremos informando.',
            reply: { teacher: 'Tú eres Mercedes Ochoa y llamas a la emisora. Tu alumno es Olga y te explica qué ha cambiado en el informativo: qué se da por confirmado, qué se atribuye y cómo se protege al detenido.', self: 'Resume el informativo en voz alta en tres frases: un hecho confirmado, una información atribuida (con su fuente) y una corrección. (One fact, one attributed claim, one correction.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Debatir la responsabilidad', coach: 'Argumenta con matices. Argue with nuance.',
      steps: [
        { title: 'Titulares, fuentes y garantías · Headlines, sources and safeguards', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas y tu alumno responde con argumentos. Si presenta como hecho algo que solo ha oído, tú preguntas «¿Según quién?» y tu alumno reformula.', self: 'Lee cada pregunta y responde en voz alta durante uno o dos minutos. Distingue siempre lo que sabes de lo que te han contado. (Keep what you know apart from what you’ve been told.)' } },
          { kind: 'talk', cards: [
            { q: '¿Defenderías el condicional de rumor en un titular? Toma partido y concede algo al otro lado. · Would you defend it in a headline?', followUps: ['¿Qué ganaría la emisora con la atribución explícita?', '¿Hay casos en que el condicional sea la opción más honesta?', '¿Qué haces si la fuente no quiere ser identificada?'], phrases: ['[[Yo diría que|blue]]…', 'Es cierto que…, pero…', '[[Según|teal]] los libros de estilo…', 'Lo único verificable es…'], hint: 'Presenta las dos posturas con lo que dicen las fuentes, sin exagerarlas; después da la tuya.', example: 'Es cierto que el condicional avisa de que el dato no está confirmado, y en un boletín rápido eso tiene valor. Pero yo diría que en un titular confunde: el público retiene el verbo, no el matiz. Según los libros de estilo, es mejor decir quién lo afirma, y estoy de acuerdo. Si la fuente es anónima, se puede decir de qué ámbito procede: «fuentes de la investigación aseguran que…».' },
            { q: 'Eres Rodrigo: explícale a Lidia, la becaria, cuándo usar «sería», «habría + participio» y el indicativo con fuente. · Coach the trainee.', followUps: ['¿Qué ejemplo le pondrías para el pasado?', '¿Cómo sabe si un «habría» es rumor o deducción propia?'], phrases: ['[[sería|violet]] / [[estaría|violet]] + gerundio…', '[[habría|violet]] + participio…', '[[Fuentes de… aseguran que|teal]]…', '[[serían|blue]] las…'], hint: 'Organiza la explicación por tiempo del hecho y por fuente del dato.', example: 'Mira, si el hecho es actual o futuro y no está confirmado, usamos el simple: «el detenido sería el administrador». Si es pasado, el compuesto: «habría recibido el informe». Pero antes de usarlo, pregúntate si puedes nombrar la fuente; si puedes, mejor «fuentes de la investigación aseguran que lo recibió». Y ojo: «serían las seis» en tu boca es un cálculo tuyo, no un rumor.' },
            { q: '¿Deberían los medios publicar el nombre de una persona detenida antes del juicio? · Should the media name detainees?', followUps: ['¿Basta con escribir «presunto»?', '¿Qué pasa con su reputación si después la absuelven?', '¿Es distinto si es un cargo público?'], phrases: ['[[presunto|orange]] / [[presuntamente|orange]]…', 'la presunción de inocencia…', 'Una cosa es identificar y otra acusar…'], hint: 'Distingue entre interés público y daño a la persona; usa «presunto» con precisión.', example: 'Depende. Si es un cargo público y el caso afecta al dinero de todos, creo que hay interés público. Pero «presunto» no lo arregla todo: si su nombre aparece cien veces junto a la palabra «fraude» y luego lo absuelven, el daño ya está hecho. Una cosa es identificar a alguien y otra muy distinta acusarlo.' },
            { q: 'Te han contado un rumor sobre tu empresa o tu barrio. Cuéntalo dos veces: como un locutor de radio y como se lo contarías a un amigo. · Tell a rumour twice.', followUps: ['¿Qué cambia en la gramática?', '¿Qué versión compromete más a quien habla?'], phrases: ['[[Según|teal]] fuentes de…, [[estaría|violet]]…', '[[Al parecer|teal]]…', 'Por lo visto…', 'No está confirmado, pero…'], hint: 'En la radio, fuente y condicional o indicativo atribuido; con un amigo, «al parecer» o «por lo visto» con indicativo.', example: 'Como locutor: «Según fuentes de la empresa, la dirección estaría estudiando cerrar la sede del centro». Con un amigo: «Oye, por lo visto van a cerrar la oficina del centro; al parecer, lo están estudiando desde enero, pero nadie lo ha confirmado».' },
            { q: 'Compara: «Detenido el presunto autor de la falsificación» y «¿Falsificó el empresario las facturas de la depuradora?». ¿Cuál insinúa más? · Which headline insinuates more?', followUps: ['¿Qué efecto tiene una pregunta en un titular?', '¿Cómo lo titularías tú?'], phrases: ['El titular sugiere que…', 'Lo único verificable es…', 'Yo lo titularía así:…'], hint: 'Fíjate en lo que el titular afirma, lo que pregunta y lo que deja que el oyente concluya.', example: 'El primero informa de un hecho, la detención, y protege al detenido con «presunto». El segundo no afirma nada, pero planta la sospecha: una pregunta en un titular hace que el oyente complete la respuesta. Yo lo titularía así: «La policía detiene a un empresario por un presunto delito de falsedad en las obras de la depuradora».', next: 'Ahora, la cortesía.' },
            { q: 'Eres Olga: llamas a Arturo Medina para pedirle su versión, con usted y con toda la cortesía posible. · Call the secretary politely.', followUps: ['¿Cómo le presentas lo que dicen las fuentes sin acusarlo?', '¿Y si no quiere responder?'], phrases: ['[[¿Podría|blue]]…?', '[[Me gustaría|blue]]…', '[[Según|teal]] algunas informaciones…', '¿Le parecería bien…?'], hint: 'Combina el condicional de cortesía con la atribución: no afirmes lo que no has comprobado.', example: 'Buenos días, señor Medina. Soy Olga Barrientos, de Radio Ciudad. Me gustaría conocer su versión. Según algunas informaciones, usted habría recibido el informe en marzo. ¿Podría decirnos cuándo lo envió al pleno? ¿Le parecería bien que leyéramos las actas en antena?', teacher: 'Tú haces de Medina y respondes con evasivas. Tu alumno insiste con cortesía y sin dar nada por probado.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tú cuentas una noticia mezclando hechos y rumores sin marcarlos, y tu alumno te pregunta «¿Según quién?» y reformula cada frase.', self: 'Graba tu respuesta a dos tarjetas y escúchala: ¿has separado lo que sabes de lo que te han contado? (Did you separate facts from hearsay?)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'La defensora responde', coach: 'Explica, reconoce y propone. Explain, acknowledge, propose.',
      steps: [
        { title: 'Columna de la defensora · The ombudswoman’s column', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Después revisan juntos el texto: ¿se presenta el debate con lo que dicen las fuentes? ¿Cada dato tiene su responsable?', self: 'Escribe la columna y toca «Revisar mi texto». Después comprueba que presentas el debate con honestidad y que cada dato tiene responsable. (Check that every claim has an owner.)' } },
          { kind: 'write', title: 'Respuesta a una oyente · Reply to a listener', situation: 'Eres Olga Barrientos (o la persona que defiende a la audiencia en un medio que conozcas). Respondes por escrito a la queja de Mercedes Ochoa en la columna semanal de la web de la emisora, que leen todos los oyentes. (Answer the complaint publicly, in the station’s weekly column.)', task: [
            'Resume la queja y el titular discutido, citándolo.',
            'Explica qué indica el condicional de rumor y por qué puede confundir, con un ejemplo («habría…», «sería…»).',
            'Presenta el debate con honestidad: uso extendido en la prensa y recomendaciones de los libros de estilo.',
            'Propón una versión del titular con atribución explícita y, si hace falta, «presunto».',
            'Termina con un criterio para el futuro.',
          ], starters: ['La oyente Mercedes Ochoa nos escribe…', 'El titular decía…', 'El condicional de rumor indica que…', 'Es un uso muy extendido, pero…', 'Una versión más clara habría sido…', 'A partir de ahora…'],
            words: ['condicional de rumor', 'atribución', 'fuentes de la investigación', 'según', 'aseguran que', 'presunto', 'presunción de inocencia', 'libro de estilo', 'verificar', 'lo único confirmado'],
            model: 'La oyente Mercedes Ochoa nos escribe molesta por el titular que abrió el informativo del viernes: «El secretario de Obras habría ocultado un informe sobre sobrecostes». Tiene razón en lo esencial. El condicional de rumor indica que un dato procede de otros y que la emisora no lo ha confirmado, pero no dice quién lo afirma. En un titular de radio, además, el matiz se pierde: lo que queda es «ocultado». Es un uso muy extendido en la prensa de España y de América, y la gramática académica lo describe como propio del lenguaje periodístico; sin embargo, varios libros de estilo y la Fundéu recomiendan evitarlo porque deja en el aire la responsabilidad. Una versión más clara habría sido: «Fuentes de la investigación aseguran que Obras archivó un informe sobre sobrecostes; el secretario lo niega». También fue un error llamar al detenido «el autor de la falsedad»: sin sentencia, es el presunto autor, y la presunción de inocencia no es una formalidad. A partir de ahora, el equipo de informativos se ha comprometido a nombrar siempre el origen de los datos no confirmados y a separar en cada noticia lo verificado de lo atribuido. Gracias, Mercedes, por ayudarnos a informar mejor.',
            minWords: 160,
            checks: [
              { label: 'Un ejemplo de condicional de rumor (habría + participio, sería, estaría…)', pattern: '(?<!\\p{L})(?:habrían?\\s+\\p{L}+(?:ado|ido|to|cho|so)|serían?|estarían?)(?!\\p{L})', tip: 'Cita o crea un ejemplo: «habría ocultado», «sería el administrador».' },
              { label: 'Una atribución explícita (según, fuentes de…, aseguran que…)', pattern: '(?<!\\p{L})(?:según|fuentes\\s+de|aseguran?\\s+que|indican?\\s+que|sostienen?\\s+que)(?!\\p{L})', tip: 'Propón la versión con la fuente nombrada: «Fuentes de la investigación aseguran que…».' },
              { label: '«Presunto» o «presunción de inocencia»', pattern: '(?<!\\p{L})(?:presunt[oa]s?|presuntamente|presunción)(?!\\p{L})', tip: 'Protege a quien no ha sido juzgado: «el presunto autor».' },
              { label: 'Una mención al debate de estilo', pattern: '(?<!\\p{L})(?:libros?\\s+de\\s+estilo|Fundéu|galicismo|calco)(?!\\p{L})', tip: 'Explica que varios libros de estilo recomiendan evitarlo.' },
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
            { tone: 'violet', label: 'CONDICIONAL DE RUMOR', formula: 'sería · estaría + gerundio (presente o futuro) · habría + participio (pasado)', example: 'Según fuentes policiales, el detenido sería el administrador y habría firmado antes del concurso.', caption: 'Dice que el dato es ajeno y no está asegurado, no quién lo afirma.', en: 'It marks information as second-hand and unconfirmed, but it does not name the source.' },
            { tone: 'teal', label: 'ATRIBUCIÓN EXPLÍCITA', formula: 'según + fuente + indicativo · fuentes de X aseguran que · X investiga si…', example: 'Fuentes de la investigación aseguran que Obras archivó el informe.', caption: 'La alternativa que prefieren los libros de estilo: el dato tiene dueño.', en: 'The option style guides prefer: the claim has an owner, and the indicative does not commit the outlet.' },
            { tone: 'orange', label: 'GARANTÍA JURÍDICA', formula: 'el presunto + persona · presuntamente + indicativo', example: 'Detenido el presunto autor de la falsificación.', caption: 'Presunción de inocencia; con sentencia firme, ya no procede.', en: 'A safeguard for people not yet convicted, not a sign of the journalist’s doubt; drop it after a final conviction.' },
            { tone: 'blue', label: 'OTROS VALORES', formula: 'serían las diez (probabilidad) · ¿podría…? (cortesía) · no habría pasado (hipótesis)', example: 'Cuando llegó la policía, serían las diez.', caption: 'Misma forma: decide la fuente del dato.', en: 'Same form, other jobs: the source of the information tells you which value it has.' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La pregunta clave · The key question', text: 'Ante cada condicional, pregunta **¿según quién?** Si la respuesta es «yo lo calculo», es probabilidad. Si es «alguien que no nombro», es rumor, y conviene preguntarse si se puede nombrar. Y si la noticia acusa a alguien sin sentencia, **presunto**.', en: 'Ask “according to whom?” of every conditional. If the answer is “my own estimate”, it is probability; if it is “someone I don’t name”, it is rumour, and it is worth asking whether you could name them. If the story accuses someone without a ruling, use “presunto”.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/portrait.webp', coach: 'Sin ayuda. No help.', blocks: [
          { kind: 'choice', title: 'Cinco decisiones · Five decisions', items: [
            { prompt: 'Según fuentes del partido, la candidata ___ su renuncia anoche.', options: ['presentaría', 'habría presentado', 'presentara'], answer: 1, why: 'Pasado no confirmado: condicional compuesto.', en: 'The candidate reportedly submitted her resignation last night.' },
            { prompt: 'Cuando terminó la reunión, ___ las doce. (Lo calculas tú.)', options: ['serían', 'habrían sido', 'fueran'], answer: 0, why: 'Probabilidad sobre el pasado: ‘probablemente eran las doce’.', en: 'Your own estimate of the time.' },
            { prompt: '¿Qué titular respeta la presunción de inocencia?', options: ['Detenido el estafador de la cooperativa.', 'Detenido el presunto autor de la estafa a la cooperativa.', '¿Es el detenido el estafador de la cooperativa?'], answer: 1, why: '«Presunto» protege a quien no ha sido juzgado; la pregunta insinúa la culpa.', en: 'Which headline respects the presumption of innocence?' },
            { prompt: 'El tribunal ya ha dictado sentencia: la empresa ___ que devolver el dinero.', options: ['tuviera', 'tendría', 'tendrá'], answer: 2, why: 'Hecho confirmado por una sentencia: indicativo.', en: 'The court has ruled.' },
            { prompt: '«El exalcalde estaría dispuesto a declarar, según su abogado». ¿Qué valor tiene «estaría»?', options: ['Cortesía hacia el exalcalde.', 'Rumor: dato atribuido y no confirmado.', 'Probabilidad: cálculo del periodista.'], answer: 1, why: 'La información procede del abogado y la emisora no la garantiza.', en: 'What does “estaría” express?' },
          ] },
        ] },
        { title: 'Transferencia · Transfer', mascot: '/brand/mascot/walking.webp', coach: 'Otro terreno, la misma regla. New field, same rule.', blocks: [
          { kind: 'guide', text: { teacher: 'Una situación nueva: la prensa deportiva, donde el condicional de rumor abunda en los fichajes. Tu alumno reescribe cada frase y explica qué ha cambiado.', self: 'Ahora, en la prensa deportiva: reescribe cada frase según la instrucción. (Sports news: transfer rumours.)' } },
          { kind: 'rewrite', title: 'Rumores de fichajes · Transfer rumours', items: [
            { prompt: 'El club ha ofrecido veinte millones por el delantero. (Lo dice un diario deportivo y no está confirmado.)', instruction: 'Usa el condicional de rumor y la fuente: «según un diario deportivo».', accept: ['Según un diario deportivo, el club habría ofrecido veinte millones por el delantero', 'El club habría ofrecido veinte millones por el delantero, según un diario deportivo'] },
            { prompt: 'El entrenador estaría negociando su renovación.', instruction: 'Haz explícita la atribución con indicativo: empieza por «Fuentes del club aseguran que».', accept: ['Fuentes del club aseguran que el entrenador está negociando su renovación', 'Fuentes del club aseguran que el entrenador negocia su renovación'] },
            { prompt: 'El jugador sería baja para el próximo partido.', instruction: 'Ahora el cuerpo médico lo ha confirmado: «El cuerpo médico ha confirmado que…», con indicativo.', accept: ['El cuerpo médico ha confirmado que el jugador será baja para el próximo partido', 'El cuerpo médico ha confirmado que el jugador es baja para el próximo partido'] },
          ] },
        ] },
        { title: 'Ampliación · Ambigüedades y titulares que insinúan', mascot: '/brand/mascot/kneeling.webp', coach: 'Opcional. Optional.', blocks: [
          { kind: 'lead', text: 'Para estudiantes fuertes o si queda tiempo. Tres matices. **1.** Tras un verbo de lengua en pasado, «habría + participio» puede ser ambiguo: «El portavoz dijo que el informe **habría llegado** tarde» puede transmitir una conjetura del portavoz («**Habrá llegado** tarde» → ‘probablemente llegó tarde’) o un rumor que él mismo repite. Solo el contexto decide. **2.** El **titular interrogativo** («¿Ocultó Obras el informe?») no afirma nada, pero instala la sospecha. **3.** El **titular entre comillas** («“Obras ocultó el informe”, según la oposición») atribuye literalmente, pero si la atribución se pierde, el oyente solo recuerda la frase entrecomillada.', en: 'For strong students or spare time. After a past reporting verb, “habría + participle” can be ambiguous: a transposed conjecture (“habrá llegado tarde”, it probably arrived late) or a relayed rumour. Interrogative headlines assert nothing yet plant suspicion. Quotation headlines attribute word for word, but once the attribution is lost, only the quoted words remain.' },
          { kind: 'choice', title: 'Matices · Nuances', items: [
            { prompt: '«El portavoz dijo que el informe habría llegado tarde». El portavoz había dicho: «Habrá llegado tarde, supongo». ¿Qué es aquí «habría llegado»?', options: ['La conjetura del portavoz, trasladada al pasado.', 'Una hipótesis irreal.', 'Un rumor periodístico.'], answer: 0, why: 'En estilo indirecto, el futuro compuesto de conjetura («habrá llegado») pasa a condicional compuesto. No es rumor.', en: 'In reported speech, a conjecture with “habrá” becomes “habría”.' },
            { prompt: '¿Qué hace el titular «¿Ocultó Obras el informe?»?', options: ['No afirma nada, pero sugiere la sospecha sin que nadie responda de ella.', 'Informa de un hecho comprobado.', 'Atribuye la acusación a una fuente.'], answer: 0, why: 'La pregunta deja la conclusión al oyente y nadie responde de la acusación.', en: 'What does an interrogative headline do?' },
            { prompt: '«“Obras ocultó el informe”, según la oposición». ¿Qué riesgo tiene en la radio?', options: ['Que «según» no admita una cita entre comillas.', 'Que el oyente retenga la frase y olvide de quién era.', 'Que el indicativo sea incorrecto.'], answer: 1, why: 'La atribución va al final y en voz baja: lo que se recuerda es la acusación literal.', en: 'What is the risk of a quotation headline on air?' },
          ] },
          { kind: 'teacher', text: 'Paso opcional: solo si queda tiempo o para estudiantes fuertes. Tu alumno trae dos titulares reales sobre el mismo hecho, uno con condicional de rumor y otro interrogativo o entre comillas, y explica cuál compromete más al medio.' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 209 · Correlaciones temporales complejas y cambios de plano', text: 'Hoy has visto cómo un mismo condicional cambia de valor según el plano del discurso: lo que dice la fuente, lo que calcula quien habla, lo que se transmite en estilo indirecto. En la clase 209 trabajas esa arquitectura temporal en oraciones complejas: correlaciones como «Quería que lo hubieran revisado antes de que llegase» y los cambios de plano dentro de un mismo texto.', en: 'Today you saw how one conditional changes value depending on the discourse level: the source’s claim, the speaker’s estimate, reported speech. Class 209 works on that temporal architecture in complex sentences: sequences such as “Quería que lo hubieran revisado antes de que llegase” and shifts between time planes within a text.', href: '/gramatica/correlaciones-temporales-complejas-y-cambios-de', label: 'Ir a la clase 209' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Qué diferencia hay entre “El ministro rechazó la propuesta”, “El ministro habría rechazado la propuesta” y “Fuentes del ministerio aseguran que el ministro rechazó la propuesta”?». Respuesta esperada: hecho asumido por el medio; dato ajeno no confirmado sin fuente; dato atribuido a una fuente concreta. Tarea: la columna de Escribir sobre un titular real.' },
        ] },
      ],
    },
  ],
};
