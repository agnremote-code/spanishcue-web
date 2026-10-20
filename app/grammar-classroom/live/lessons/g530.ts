import type { LiveLesson } from '../types';

/**
 * Lesson 530 · C2 · Conectores raros y valores específicos (course unit G230).
 * Builds on G156 (g456: sin embargo, no obstante, con todo, ahora bien), G165 (g465:
 * exposition and refutation), G189 (g489: es decir, en suma, en definitiva) and G190
 * (g490: sino, antes bien, salvo que, si acaso, de ahí que). Those are only recalled.
 * C2 content: low-frequency, high-register connectors and their exact value, with
 * register, frequency and risk of pedantry (Martín Zorraquino & Portolés as general
 * reference; DLE / DPD for norms): contrast (empero, mas without tilde; recall antes
 * bien, ahora bien; con todo y con eso, colloquial-emphatic); time and circumstance (no
 * bien = en cuanto, a la sazón = entonces, así las cosas); cause and reinforcement
 * (habida cuenta de (que), never *habida cuenta que; toda vez que = dado que, not «cada
 * vez que»; máxime cuando / si, not «como máximo»; amén de; a mayor abundamiento, legal);
 * condition, concession and closing (so pena de, a fuer de, siquiera sea + subj., por
 * ende, en suma, dicho lo cual, sea como fuere). False friends: eventualmente, actualmente,
 * en definitiva, en efecto. Ampliación (coverage-audit gap 35): sendos, stylistic adjective
 * position (un pobre hombre / un hombre pobre), temporal toda vez que in old legal texts.
 * Scene: the style studio «Palabra Justa». Inés Carranza, copy editor, revises the memoirs
 * of Federico Lanza, a retired judge who loves rare connectors («Cuarenta años de toga»).
 * Practicar: the memoir, a pretentious consultancy newsletter, a lawyer's brief (Lucía
 * Benavente). Escuchar: Inés's weekly radio slot «Palabras con historia»
 * (es-MX-DaliaNeural, one voice, ustedes). Escribir: a book-launch speech. Instructions use tú.
 */
export const lesson: LiveLesson = {
  id: 530,
  level: 'C2',
  title: 'Conectores raros y valores específicos',
  subtitle: 'Usar con valor exacto conectores cultos y poco frecuentes, y decidir cuándo elevan el registro y cuándo suenan pedantes.',
  legend: [
    { tone: 'blue', label: 'CONTRASTE · empero, mas, antes bien, ahora bien, con todo y con eso' },
    { tone: 'teal', label: 'TIEMPO Y CIRCUNSTANCIA · no bien, a la sazón, así las cosas' },
    { tone: 'orange', label: 'CAUSA, REFUERZO Y CONDICIÓN · habida cuenta de que, toda vez que, máxime, amén de, a mayor abundamiento, so pena de, a fuer de, siquiera' },
    { tone: 'violet', label: 'CONSECUENCIA Y CIERRE · por ende, en suma, dicho lo cual, sea como fuere' },
  ],
  optionNotes: {
    'empero': '«Empero» es adversativo (= sin embargo) y muy literario: solo encaja si hay un contraste real y el texto admite un tono antiguo.',
    'eventualmente': '«Eventualmente» significa «posiblemente, si llega el caso» u «ocasionalmente». Para «al final» se dice «finalmente».',
    'actualmente': '«Actualmente» significa «en la actualidad, hoy». Para «actually» se dice «en realidad» o «de hecho».',
    'Habida cuenta': 'La locución completa lleva preposición: «habida cuenta de que» / «habida cuenta de» + nombre.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Joyas y bisutería', coach: 'Cada conector raro tiene un valor exacto. Every rare connector has one exact value.',
      steps: [
        { title: 'Unas memorias en revisión · Memoirs under revision', blocks: [
          { kind: 'lead', text: 'Inés Carranza, correctora de estilo, dirige el estudio «Palabra Justa». Su cliente de este mes es Federico Lanza, juez jubilado, que escribe sus memorias, «Cuarenta años de toga». Federico adora las palabras raras: «empero», «a la sazón», «a mayor abundamiento». Algunas embellecen su texto; otras lo vuelven pesado o dicen algo que él no quiere decir. Ya dominas los conectores de C1 (sin embargo, con todo, ahora bien, antes bien, en suma: clases 156, 189 y 190). Hoy trabajas con los **conectores de baja frecuencia y registro alto**: su **valor exacto**, su **registro** y el momento en que dejan de ser elegantes y se vuelven **pedantes**.', en: 'Inés, a copy editor, is revising the memoirs of a retired judge who loves rare words. Some of them enrich his text; others make it heavy or say something he doesn’t mean. You already know the C1 connectors; today you study low-frequency, high-register ones: their exact value, their register, and the point at which elegance turns into pedantry.' },
          { kind: 'guide', text: { teacher: 'Tú lees las tres versiones. Tu alumno dice qué cambia entre ellas: ¿el significado o solo el registro? ¿Dónde las encontraría?', self: 'Lee las tres versiones en voz alta. ¿Cambia el significado o solo el registro? ¿Dónde esperarías leer cada una? (Meaning or register?)' } },
          { kind: 'compare', title: 'Una idea, tres registros · One idea, three registers', columns: [
            { tone: 'neutral', label: 'NEUTRO', sentence: 'Pidió la palabra, pero el presidente se la negó.', idea: 'Vale para cualquier situación, oral o escrita.', en: 'Works anywhere, spoken or written.' },
            { tone: 'neutral', label: 'FORMAL', sentence: 'Pidió la palabra; sin embargo, el presidente se la negó.', idea: 'Informe, prensa, ensayo: formal, pero de uso corriente.', en: 'Reports, press, essays: formal, yet in everyday written use.' },
            { tone: 'blue', label: 'LITERARIO', sentence: 'Pidió la palabra, [[mas|blue]] el presidente se la negó.', idea: 'Mismo valor adversativo, pero con un aire antiguo: crónica, memoria, literatura.', en: 'Same contrast, but with an old-fashioned flavour: chronicle, memoir, fiction.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué aporta «mas» frente a «pero» en «Pidió la palabra, mas el presidente se la negó»?', options: ['Un valor de adición: «además».', 'Una contradicción más fuerte que «pero».', 'Un matiz de registro literario, con el mismo valor adversativo.'], answer: 2, why: '«Mas» (sin tilde) es adversativo como «pero»; lo que cambia es el registro, no la relación lógica.', en: 'What does “mas” add compared with “pero”? Only register: the logical relation is the same.' },
            { prompt: '¿En qué texto encaja mejor «Pidió la palabra, mas se la negaron»?', options: ['Unas memorias con tono literario.', 'Las instrucciones de una lavadora.', 'Un mensaje al grupo de la oficina.'], answer: 0, why: 'Un conector arcaizante solo se justifica cuando el género admite ese tono: memorias, crónica, literatura.', en: 'Where does the literary “mas” fit? In memoirs with a literary tone, not in everyday or technical texts.' },
          ] },
        ] },
        { title: 'Contraste: empero, mas · Literary contrast', mascot: '/brand/mascot/studying.webp', coach: 'Mismo valor, otro siglo. Same value, another century.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'CONTRASTE DE REGISTRO ALTO', question: '¿Quieres un contraste con «pero» o «sin embargo», pero en un tono literario o deliberadamente antiguo?', en: 'Empero means “however” and is literary and archaic; like sin embargo, it can open the second sentence or sit between commas inside it. Mas, without an accent, is an unstressed conjunction meaning “but”: it always opens the second clause and is never moved inside it. With an accent, más is the adverb “more”. Antes bien and ahora bien (classes 190 and 156) remain the current formal options; con todo y con eso is an emphatic, colloquial “even so”.', formula: ['A; empero, B · A. B, empero, … (= sin embargo; literario)', 'A, mas B (= pero; siempre al principio del segundo miembro, sin coma detrás)', 'repaso: no A; antes bien, B · A. Ahora bien, B', 'A; con todo y con eso, B (= aun así; coloquial y enfático)'],
            meaning: '**Empero** equivale a «sin embargo»: es literario y arcaizante, y puede abrir la segunda oración o ir entre comas dentro de ella. **Mas**, sin tilde, es una conjunción átona que equivale a «pero»: va siempre al principio del segundo miembro y no se desplaza. Con tilde, **más** es el adverbio de cantidad. **Antes bien** y **ahora bien** (clases 190 y 156) siguen siendo las opciones formales actuales; **con todo y con eso** es un «aun así» enfático y coloquial.',
            examples: [
              { es: 'El tribunal admitió la prueba; [[empero|blue]], no le concedió valor alguno.', en: 'The court admitted the evidence; however, it gave it no weight: literary, like an old ruling.' },
              { es: 'La defensa, [[empero|blue]], no se dio por vencida.', en: 'The defence, however, did not give up: empero can sit between commas.' },
              { es: 'Quiso explicarse, [[mas|blue]] nadie lo escuchó.', en: 'He tried to explain himself, but no one listened: mas opens the second clause.' },
              { es: 'Le dijeron que no tenía nada que hacer; [[con todo y con eso|blue]], recurrió la sentencia.', en: 'They told him he had no chance; even so, he appealed: emphatic and conversational.' },
            ] },
          { kind: 'table', title: 'Posición y registro · Position and register', head: ['Conector', 'Posición', 'Registro hoy'], rows: [
            ['[[empero|blue]]', 'inicio de la segunda oración o entre comas', 'arcaizante: literatura, pastiche, ironía'],
            ['[[mas|blue]] (sin tilde)', 'solo al inicio del segundo miembro', 'literario; casi inexistente en la lengua oral'],
            ['[[antes bien|blue]] · [[ahora bien|blue]]', 'inicio, tras punto o punto y coma', 'formal actual (repaso)'],
            ['[[con todo y con eso|blue]]', 'inicio, con coma detrás', 'coloquial enfático: no va en un informe'],
          ], note: 'Prueba rápida: si puedes poner «pero», el adversativo es **mas**; si puedes poner «más» (= more), lleva tilde.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Lo esperamos dos horas, ___ no apareció.', options: ['sino', 'más', 'mas'], answer: 2, why: 'Es la conjunción adversativa (= pero), átona y sin tilde: «mas». «Más» con tilde es el adverbio de cantidad; «sino» exigiría una negación delante.', en: 'We waited two hours for him, but he didn’t turn up: the conjunction mas, no accent.' },
            { prompt: '¿Qué frase coloca bien «empero»?', options: ['Llegó tarde, mas, empero, se disculpó.', 'Empero llegó tarde se disculpó.', 'Llegó tarde. Se disculpó, empero, con una elegancia que desarmó a todos.'], answer: 2, why: '«Empero» puede ir entre comas dentro de la segunda oración. Sumarlo a «mas» es redundante.', en: 'Which sentence places “empero” correctly? Between commas inside the second sentence.' },
            { context: 'Conversación entre amigos.', prompt: 'Le dije que el examen era imposible y, ___, se presentó.', options: ['empero', 'a mayor abundamiento', 'con todo y con eso'], answer: 2, why: 'En la conversación, el «aun así» enfático es «con todo y con eso». Los otros dos son de lengua escrita y muy formal.', en: 'I told him the exam was impossible and, even so, he sat it.' },
          ] },
        ] },
        { title: 'Tiempo y circunstancia: no bien, a la sazón, así las cosas · Time and circumstance', mascot: '/brand/mascot/speaking.webp', coach: '¿Cuándo? ¿En qué situación? When? In what situation?', blocks: [
          { kind: 'concept', tone: 'teal', label: 'TIEMPO Y CIRCUNSTANCIA', question: '¿Marcas que algo ocurre justo después de otra cosa, sitúas a una persona en aquel momento o resumes una situación para sacar una decisión?', en: 'No bien means “as soon as”, like en cuanto or apenas: indicative for past or habitual events, subjunctive for the future. A la sazón means “at that time, then”: it usually appears between commas after a name, giving the position someone held when the events happened; it does not mean “therefore”. Así las cosas (“things being so, with matters as they stood”) sums up a situation and introduces what was decided or follows; it is common in the press.', formula: ['No bien + indicativo (pasado), … (= en cuanto, apenas)', 'No bien + subjuntivo (futuro), … (= en cuanto llegue…)', 'Nombre, a la sazón + cargo, … (= que entonces era…)', 'Situación. Así las cosas, + decisión o consecuencia'],
            meaning: '**No bien** equivale a «en cuanto, apenas»: indicativo para hechos pasados o habituales, subjuntivo para el futuro. **A la sazón** significa «entonces, en aquel momento»: suele ir entre comas tras un nombre e indica el cargo que alguien tenía cuando ocurrieron los hechos; **no** significa «por lo tanto». **Así las cosas** («en esta situación, estando así las cosas») resume un estado de cosas y presenta lo que se decide o se sigue de él; es frecuente en la prensa.',
            examples: [
              { es: '[[No bien|teal]] se abrió la sesión, el abogado pidió un aplazamiento.', en: 'No sooner had the session opened than the lawyer asked for a postponement.' },
              { es: '[[No bien|teal]] tengas las conclusiones, mándamelas.', en: 'As soon as you have the conclusions, send them to me: future, so subjunctive.' },
              { es: 'Carmen Ollero, [[a la sazón|teal]] decana del Colegio de Abogados, firmó el manifiesto.', en: 'Carmen Ollero, then dean of the Bar Association, signed the manifesto: her position at that time.' },
              { es: 'Faltaban dos testigos y el perito estaba enfermo. [[Así las cosas|teal]], el juez suspendió la sesión.', en: 'Two witnesses were missing and the expert was ill. With matters as they stood, the judge adjourned.' },
            ] },
          { kind: 'tip', icon: '💡', title: '«No bien» y el pretérito anterior · A link to class 154', text: 'En textos antiguos verás «**No bien hubo llegado**, …» (pretérito anterior, clase 154). Hoy basta el indefinido: «**No bien llegó**, …».', en: 'In older texts you will see “no bien hubo llegado” (class 154). Today the simple past is enough: “no bien llegó”.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '___ firmó el contrato, se arrepintió.', options: ['No bien', 'A la sazón', 'Así las cosas'], answer: 0, why: 'Inmediatez entre dos hechos pasados: «no bien» (= en cuanto) + indicativo.', en: 'No sooner had he signed the contract than he regretted it.' },
            { prompt: 'El informe lo redactó Gabriel Sotillo, ___ jefe del departamento.', options: ['por ende', 'a la sazón', 'no bien'], answer: 1, why: 'Indica el cargo que tenía entonces: «a la sazón» (= que entonces era).', en: 'The report was written by Gabriel Sotillo, then head of the department.' },
            { prompt: 'No bien ___ el veredicto, avísame.', options: ['se conozca', 'se conoce', 'se conoció'], answer: 0, why: 'Referencia futura: como con «en cuanto», subjuntivo, «se conozca».', en: 'As soon as the verdict is known, let me know.' },
          ] },
        ] },
        { title: 'Causa y refuerzo: habida cuenta de que, toda vez que, máxime · Cause and reinforcement', mascot: '/autoestudio/mascot/noting.webp', coach: 'Razones con toga. Reasons in formal dress.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'CAUSA Y REFUERZO FORMALES', question: '¿Das una razón en un texto formal, refuerzas un argumento o añades uno más?', en: 'Habida cuenta de (que) means “given (that), considering”; the preposition de is required. Toda vez que is causal in current use (“since, given that”), with the indicative; it does not mean “every time”. Máxime (cuando / si) means “especially, all the more so since”; it never means “at most”. Amén de means “besides, apart from” and is literary, sometimes with a touch of irony. A mayor abundamiento belongs to legal writing: it adds a further argument to one that already suffices.', formula: ['habida cuenta de + nombre · habida cuenta de que + indicativo (= dado que)', 'toda vez que + indicativo (= puesto que; no «cada vez que»)', 'A, máxime cuando / máxime si / máxime + complemento (= sobre todo, con mayor razón)', 'amén de + nombre / infinitivo / adjetivo (= además de)', 'a mayor abundamiento, … (jurídico: «además, y por si no bastara»)'],
            meaning: '**Habida cuenta de (que)** = «dado que, teniendo en cuenta que»; la preposición **de** es obligatoria. **Toda vez que** es causal en el uso actual (= puesto que, dado que), con indicativo; no significa «cada vez que». **Máxime (cuando / si)** = «sobre todo, con mayor motivo»; nunca significa «como máximo». **Amén de** = «además de»: literario, a veces con un punto irónico. **A mayor abundamiento** es propio del lenguaje jurídico: añade un argumento más a otro que ya bastaba.',
            examples: [
              { es: '[[Habida cuenta de|orange]] la gravedad de los hechos, el tribunal rechazó la fianza.', en: 'Given the seriousness of the facts, the court refused bail: + noun.' },
              { es: '[[Toda vez que|orange]] el plazo ha vencido, la reclamación no puede admitirse.', en: 'Since the deadline has passed, the claim cannot be accepted: cause, indicative.' },
              { es: 'No firmes sin leer, [[máxime si|orange]] el contrato está en otro idioma.', en: 'Don’t sign without reading, especially if the contract is in another language.' },
              { es: '[[Amén de|orange]] su experiencia, la nueva jueza aporta una gran capacidad de escucha.', en: 'Besides her experience, the new judge brings a great ability to listen.' },
              { es: 'El demandante no acreditó el daño. [[A mayor abundamiento|orange]], presentó la demanda fuera de plazo.', en: 'The claimant did not prove the damage. Furthermore, he filed out of time: a legal formula.' },
            ] },
          { kind: 'table', title: 'Valor, registro y equivalente neutro · Value, register and plain equivalent', head: ['Conector', 'Valor', 'Registro', 'Equivalente neutro'], rows: [
            ['[[habida cuenta de que|orange]]', 'causa conocida que se tiene en cuenta', 'formal escrito', 'dado que, como'],
            ['[[toda vez que|orange]]', 'causa', 'formal, administrativo y jurídico', 'puesto que, ya que'],
            ['[[máxime cuando|orange]] / si', 'refuerzo de un argumento', 'formal', 'sobre todo cuando / si'],
            ['[[amén de|orange]]', 'adición', 'literario, a veces irónico', 'además de'],
            ['[[a mayor abundamiento|orange]]', 'argumento adicional', 'jurídico', 'además, por si fuera poco'],
          ], note: '**Amén**, solo, es la fórmula de las oraciones («así sea»); «decir amén a todo» es aceptarlo todo sin discutir. **Amén de** es otra cosa: «además de».' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '___ que el edificio está protegido, no se puede reformar la fachada.', options: ['Máxime', 'Habida cuenta de', 'Habida cuenta'], answer: 1, why: 'La locución completa es «habida cuenta de que». Sin «de» es incorrecta en la norma culta.', en: 'Given that the building is listed, the façade cannot be altered.' },
            { prompt: 'Es mejor aplazar el viaje, ___ cuando la previsión anuncia nieve.', options: ['amén', 'máxime', 'toda vez'], answer: 1, why: '«Máxime cuando» refuerza el argumento: «sobre todo cuando».', en: 'It’s better to postpone the trip, especially as snow is forecast.' },
            { prompt: '«Toda vez que el acusado ha reconocido los hechos, se rebaja la pena». ¿Qué significa «toda vez que»?', options: ['Aunque.', 'Cada vez que.', 'Dado que.'], answer: 2, why: 'En el uso actual, «toda vez que» es causal (= dado que, puesto que). No es «cada vez que».', en: 'What does “toda vez que” mean here? Since, given that.' },
          ] },
        ] },
        { title: 'Condición, concesión y cierre · Condition, concession and closing', mascot: '/brand/mascot/seated.webp', coach: 'Amenazas legales, sinceridad antigua y despedidas. Legal threats, old-style candour and exits.', blocks: [
          { kind: 'concept', tone: 'violet', label: 'CONDICIÓN, CONCESIÓN Y CIERRE', question: '¿Adviertes de una sanción, concedes un mínimo, sacas una consecuencia o cierras un tema para pasar a otro?', en: 'So pena de + infinitive or noun means “on pain of”: so is the old preposition “under” (also in so pretexto de); it belongs to legal and administrative texts. A fuer de + adjective or noun (“as the … person I am”) is very literary: a fuer de sincero = “to be honest”. Siquiera (sea) + subjunctive is a literary concessive, “even if only”. Por ende means “therefore” and sounds stiff in conversation. En suma (class 189) sums up. Dicho lo cual (“having said that”) closes one point and moves on; sea como fuere (“be that as it may”) sets aside an open question and returns to the main line.', formula: ['A, so pena de + infinitivo / nombre (= bajo amenaza de)', 'a fuer de + adjetivo / nombre (= como…, siendo…; muy literario)', 'siquiera (sea) + subjuntivo (= aunque solo sea)', 'A; por ende, B (= por tanto) · en suma, … (= en resumen)', 'Dicho lo cual, … (= dicho esto) · Sea como fuere, … (= sea como sea)'],
            meaning: '**So pena de** + infinitivo o nombre = «bajo la amenaza de»: «so» es la antigua preposición «bajo» (también en «so pretexto de»); es propio de textos legales y administrativos. **A fuer de** + adjetivo o nombre es muy literario: «a fuer de sincero» = «para ser sincero». **Siquiera (sea)** + subjuntivo es un concesivo literario: «aunque solo sea». **Por ende** = «por tanto»; en la conversación suena rígido. **En suma** (clase 189) recapitula. **Dicho lo cual** cierra un punto y pasa al siguiente; **sea como fuere** deja a un lado una cuestión abierta y vuelve a lo principal.',
            examples: [
              { es: 'Los inquilinos deberán retirar sus muebles antes del día 30, [[so pena de|orange]] perder la fianza.', en: 'Tenants must remove their furniture before the 30th or forfeit the deposit.' },
              { es: '[[A fuer de|orange]] sincero, le diré que el segundo capítulo me aburrió.', en: 'To be perfectly honest, I found the second chapter boring: very literary, agrees with the speaker (a fuer de sincera).' },
              { es: 'Quédate con nosotros, [[siquiera sea|orange]] una noche.', en: 'Stay with us, even if only for one night: literary concession with the subjunctive.' },
              { es: 'El contrato nunca se firmó; [[por ende|violet]], no obliga a ninguna de las partes.', en: 'The contract was never signed; therefore, it binds neither party.' },
              { es: 'No sabemos si el testigo mintió o se equivocó. [[Sea como fuere|violet]], su declaración no sirve. [[Dicho lo cual|violet]], pasemos al segundo punto.', en: 'We don’t know whether the witness lied or was mistaken. Be that as it may, his statement is useless. Having said that, let’s move on.' },
            ] },
          { kind: 'table', title: 'Frecuencia y riesgo de pedantería (orientativo) · Frequency and risk of pedantry (rough guide)', head: ['Grupo', 'Conectores', 'Dónde suenan naturales', 'Riesgo'], rows: [
            ['vivos en lo formal', 'ahora bien, en suma, por ende, así las cosas, dicho lo cual, sea como fuere, habida cuenta de que, toda vez que, máxime', 'prensa, informes, ensayo, discurso', 'bajo por escrito; «por ende», rígido en la conversación'],
            ['cultos', 'no bien, a la sazón, amén de, siquiera sea, antes bien', 'crónica, memorias, ensayo literario', 'medio: uno por párrafo, no tres'],
            ['especializados', 'so pena de, a mayor abundamiento', 'textos legales y administrativos', 'alto fuera del derecho'],
            ['arcaizantes', 'empero, mas, a fuer de', 'literatura, pastiche, ironía', 'alto: pedantes en un correo o un informe'],
            ['coloquial enfático', 'con todo y con eso', 'conversación', 'inadecuado en un texto formal'],
          ], note: 'La frecuencia es aproximada y varía según el género y la zona. La regla práctica: un conector raro debe **aportar** un valor o un tono que el texto necesita, nunca solo «sonar culto».' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'La matrícula debe pagarse antes del viernes, ___ perder la plaza.', options: ['a fuer de', 'so pena de', 'siquiera'], answer: 1, why: 'Advierte de una sanción: «so pena de» + infinitivo (= bajo la amenaza de).', en: 'The fee must be paid before Friday, or you will lose your place.' },
            { prompt: 'No sé si llegará a tiempo. ___, empezaremos a las nueve.', options: ['A la sazón', 'Por ende', 'Sea como fuere'], answer: 2, why: 'Se deja a un lado la duda y se vuelve a lo que se va a hacer: «sea como fuere».', en: 'I don’t know if she’ll arrive in time. Be that as it may, we’ll start at nine.' },
            { prompt: 'Concédeme cinco minutos, ___ sea para despedirme.', options: ['siquiera', 'so pena de', 'máxime'], answer: 0, why: '«Siquiera sea» + subjuntivo = «aunque solo sea»: concesivo literario.', en: 'Give me five minutes, if only to say goodbye.' },
          ] },
        ] },
        { title: 'Errores frecuentes y falsos amigos · Common mistakes and false friends', mascot: '/brand/mascot/standing-crossed.webp', coach: '¿Valor, forma o registro? Value, form or register?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees cada frase con el error y tu alumno explica qué falla antes de ver la corrección: ¿el valor del conector, su forma o el registro?', self: 'Lee cada frase y piensa qué falla: ¿el valor, la forma o el registro? Después toca para ver la corrección. (Value, form or register?)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Habida cuenta que no hay quórum, se levanta la sesión.', right: 'Habida cuenta de que no hay quórum, se levanta la sesión.', why: 'La locución lleva siempre «de»: «habida cuenta de que».' },
            { wrong: 'La sala admite máxime cincuenta personas.', right: 'La sala admite cincuenta personas como máximo.', why: '«Máxime» significa «sobre todo, con mayor razón», no «como máximo».' },
            { wrong: 'El cliente no pagó; a la sazón, rescindimos el contrato.', right: 'El cliente no pagó; por ende (por eso), rescindimos el contrato.', why: '«A la sazón» significa «entonces, en aquel momento», no «por lo tanto».' },
            { wrong: 'Toda vez que llueve, se inunda el sótano.', right: 'Cada vez que llueve, se inunda el sótano.', why: '«Toda vez que» es causal (= dado que). Para la repetición: «cada vez que».' },
            { wrong: 'Lo intentó, más no lo consiguió.', right: 'Lo intentó, mas no lo consiguió.', why: 'El adversativo «mas» (= pero) es átono y no lleva tilde. «Más» es el adverbio de cantidad.' },
            { wrong: 'Tras dos años de obras, eventualmente inauguraron el puente.', right: 'Tras dos años de obras, finalmente inauguraron el puente.', why: '«Eventualmente» es «posiblemente, si llega el caso». «Eventually» se traduce por «finalmente, al final».' },
            { wrong: 'Parece caro, pero actualmente es el más barato del mercado.', right: 'Parece caro, pero en realidad es el más barato del mercado.', why: 'Si quieres decir «actually», es «en realidad» o «de hecho». «Actualmente» significa «hoy, en la actualidad».' },
          ] },
          { kind: 'table', title: 'Falsos amigos · False friends', head: ['Palabra', 'Significa', 'No significa', 'Para el sentido inglés'], rows: [
            ['eventualmente', 'posiblemente, si llega el caso; ocasionalmente', 'eventually', 'finalmente, al final, con el tiempo'],
            ['actualmente', 'en la actualidad, hoy', 'actually', 'en realidad, de hecho'],
            ['en definitiva', 'en resumen, en conclusión', 'definitely', 'sin duda, desde luego'],
            ['en efecto', 'efectivamente, así es (confirma lo dicho)', 'in effect', 'en la práctica, de hecho'],
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Parece una oficina normal, pero ___ es un antiguo juzgado.', options: ['actualmente', 'en efecto', 'en realidad'], answer: 2, why: 'Corrige una apariencia («actually»): «en realidad». «Actualmente» significaría «hoy»; «en efecto» confirmaría algo ya dicho.', en: 'It looks like an ordinary office, but it’s actually a former courthouse.' },
            { prompt: '«Eventualmente, podríamos ampliar el plazo». ¿Qué quiere decir?', options: ['Ya hemos ampliado el plazo.', 'Al final ampliaremos el plazo.', 'Si llega el caso, podríamos ampliar el plazo.'], answer: 2, why: '«Eventualmente» = «si llega el caso, posiblemente». No anuncia un final seguro.', en: 'What does “eventualmente” mean here? If need be, possibly.' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno cuenta en tres frases un episodio de su vida laboral con «no bien», «a la sazón» y «así las cosas», y explica qué conector neutro sustituiría a cada uno.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'Las joyas del juez', coach: 'Toca cada conector marcado. Tap each marked connector.',
      steps: [
        { title: 'En el estudio «Palabra Justa» · At the style studio', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Federico y tu alumno es Inés. Después tu alumno toca cada expresión marcada y explica su valor y si encaja en unas memorias.', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada: ¿qué valor tiene y encaja en unas memorias? (Tap each phrase: value and fit.)' } },
          { kind: 'explore', title: 'Me está quitando mis joyas', setting: 'Estudio «Palabra Justa», martes por la tarde. Federico Lanza trae el capítulo tres de sus memorias; Inés lo ha leído con lápiz rojo. (Federico brings chapter three; Inés has marked it up.)', lines: [
            { who: 'Federico', text: 'Inés, le traigo el capítulo tres. Lo he pulido mucho: hay frases de las que estoy orgulloso.', en: 'Inés, here’s chapter three. I’ve polished it a lot: there are sentences I’m proud of.' },
            { who: 'Inés', text: 'Ya lo he leído, don Federico. La historia es buenísima; [[empero|blue]]… ¿lo oye? Así suena su texto: un «empero» cada dos líneas.', en: 'I’ve read it already. The story is excellent; however… do you hear it? That’s how your text sounds: an “empero” every other line.' },
            { who: 'Federico', text: 'Es que «sin embargo» me parece tan gris…', en: 'It’s just that “sin embargo” seems so dull to me…' },
            { who: 'Inés', text: 'Le dejo una sola frase antigua, la del juicio de 1987: «Pidió la palabra, [[mas|blue]] el presidente se la negó». Ahí el tono encaja. En el resto, «pero» o «sin embargo».', en: 'I’ll leave you one old-style sentence, the one about the 1987 trial: there the tone fits. Everywhere else, “pero” or “sin embargo”.' },
            { who: 'Federico', text: 'De acuerdo. ¿Y el comienzo? «[[No bien|teal]] tomé posesión de mi plaza en Ribalta, me cayó encima el expediente del molino».', en: 'All right. And the opening? “No sooner had I taken up my post in Ribalta than the mill case landed on my desk.”' },
            { who: 'Inés', text: 'Precioso: «no bien» es «en cuanto», y en unas memorias queda elegante. También me gusta «Julia Arce, [[a la sazón|teal]] secretaria del juzgado». Pero en la página doce usa «a la sazón» como si fuera «por lo tanto».', en: 'Lovely: “no bien” means “as soon as” and it’s elegant in memoirs. I also like “Julia Arce, then clerk of the court”. But on page twelve you use “a la sazón” as if it meant “therefore”.' },
            { who: 'Federico', text: '¿Ah, no sirve para sacar conclusiones?', en: 'Oh, can’t you use it to draw conclusions?' },
            { who: 'Inés', text: 'No: significa «en aquel momento». Para concluir tiene «[[por ende|violet]]» o, más sencillo, «por eso». En cambio, esta frase es impecable: «[[Habida cuenta de que|orange]] el archivo estaba incompleto, reconstruí el caso con mis notas».', en: 'No: it means “at that time”. To conclude you have “por ende” or, more simply, “por eso”. This sentence, on the other hand, is flawless: “Given that the archive was incomplete, I rebuilt the case from my notes.”' },
            { who: 'Federico', text: '¿Y «[[a mayor abundamiento|orange]]»? Lo he escrito en cientos de sentencias.', en: 'And “a mayor abundamiento”? I wrote it in hundreds of rulings.' },
            { who: 'Inés', text: 'En una sentencia, perfecto; en unas memorias para sus nietos, suena a toga. [[Amén de|orange]] eso, el capítulo ya tiene bastante solemnidad.', en: 'In a ruling, perfect; in memoirs for your grandchildren, it sounds like a judge’s robe. Besides, the chapter is solemn enough already.' },
            { who: 'Federico', text: 'Me está quitando todas mis joyas.', en: 'You’re taking away all my jewels.' },
            { who: 'Inés', text: 'Solo las que deslumbran sin alumbrar. [[Sea como fuere|violet]], el libro es suyo. Yo le propongo una regla: un arcaísmo por capítulo, como mucho, [[máxime|orange]] si quiere que lo lean sus nietos.', en: 'Only the ones that dazzle without shedding light. Be that as it may, the book is yours. I suggest a rule: one archaism per chapter at most, especially if you want your grandchildren to read it.' },
          ], notes: {
            'empero': 'Inés lo usa a propósito, con ironía, para que Federico oiga su propio estilo. Es adversativo (= sin embargo) y arcaizante: repetido, cansa.',
            'mas': 'Adversativo literario, sin tilde (= pero). Va al principio del segundo miembro. En el relato de un juicio antiguo, aporta un color que Inés decide conservar.',
            'No bien': 'Temporal de inmediatez (= en cuanto) con indicativo porque es pasado. Culto, pero natural en unas memorias.',
            'a la sazón': 'Entre comas tras el nombre: el cargo que Julia tenía entonces. Es su único valor: «en aquel momento».',
            'por ende': 'Consecutivo formal (= por tanto). Correcto por escrito; Inés prefiere «por eso» porque es más natural en un relato.',
            'Habida cuenta de que': 'Causa formal (= dado que), con «de» y con indicativo («estaba»). Encaja en el tono reflexivo de unas memorias.',
            'a mayor abundamiento': 'Fórmula jurídica que añade un argumento más. Fuera de una sentencia o un escrito legal, suena pedante.',
            'Amén de': '«Además de» en registro culto. Inés lo usa con cierto humor: ella misma eleva el tono para hablar con el juez.',
            'Sea como fuere': '«Sea como sea»: Inés deja a un lado la discusión y vuelve a lo esencial, que el libro es de Federico.',
            'máxime': '«Sobre todo, con mayor razón»: refuerza la regla con un argumento más fuerte (los nietos). Va seguido de «si».',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Qué le critica Inés al estilo de Federico?', options: ['Que sus frases son demasiado cortas.', 'Que no cita las fechas de los juicios.', 'Que usa «empero» constantemente.'], answer: 2, why: '«Así suena su texto: un “empero” cada dos líneas».', en: 'What does Inés criticise in Federico’s style? He uses “empero” constantly.' },
            { prompt: '¿En qué se equivoca Federico en la página doce?', options: ['Pone «no bien» con subjuntivo.', 'Usa «a la sazón» con el valor de «por lo tanto».', 'Escribe «mas» con tilde.'], answer: 1, why: '«Usa “a la sazón” como si fuera “por lo tanto”». Su valor es «en aquel momento».', en: 'What mistake does Federico make on page twelve?' },
            { prompt: '¿Por qué desaconseja Inés «a mayor abundamiento» en las memorias?', options: ['Porque es una fórmula jurídica que, en un libro para sus nietos, suena solemne.', 'Porque es incorrecto en cualquier texto.', 'Porque significa lo contrario de lo que Federico quiere decir.'], answer: 0, why: '«En una sentencia, perfecto; en unas memorias para sus nietos, suena a toga».', en: 'Why does Inés advise against it in the memoirs? It is a legal formula and sounds pompous there.' },
          ] },
        ] },
        { title: 'Las correcciones de Inés · Inés’s corrections', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'chat-fill', title: 'Inés le resume a Federico los cambios por correo · Inés emails Federico a summary', lines: [
            { who: 'Inés', text: 'Página 3: «___ llegué a Ribalta, me asignaron el caso del molino». Esa la dejamos.', options: ['No bien', 'Por ende', 'A la sazón'], answer: 0, why: 'Inmediatez en el pasado (= en cuanto llegué): «no bien» + indicativo.' },
            { who: 'Inés', text: 'Página 12: cambio «a la sazón» por «___», porque ahí usted saca una conclusión.', options: ['empero', 'por eso', 'en aquel momento'], answer: 1, why: 'Para una conclusión hace falta un consecutivo: «por eso». «En aquel momento» es justo el valor de «a la sazón», que ahí no encaja.' },
            { who: 'Inés', text: 'Página 15: «El archivo había ardido en 1979; ___, nadie conservaba las actas».', options: ['a fuer de', 'empero', 'por ende'], answer: 2, why: 'La segunda idea es consecuencia de la primera: «por ende» (= por tanto). «Empero» marcaría un contraste que no existe.' },
            { who: 'Federico', text: 'Acepto casi todo. Pero el capítulo de las sentencias lo dejo como está: ___ sea por unas páginas, déjeme ser juez otra vez.', options: ['Máxime', 'Siquiera', 'Así las cosas'], answer: 1, why: '«Siquiera sea» + complemento = «aunque solo sea»: Federico concede un mínimo.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: «¿Qué palabra rara te gusta de tu lengua materna y cuándo te parece pedante?». Tu alumno la compara con uno de los conectores del día.' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Valor exacto y registro justo. Exact value, right register.',
      steps: [
        { title: 'Las memorias, capítulo a capítulo · The memoirs, chapter by chapter', blocks: [
          { kind: 'choice', items: [
            { context: 'Capítulo 1, tono literario.', prompt: '___ me senté en el despacho, sonó el teléfono.', options: ['No bien', 'Así las cosas', 'Amén de'], answer: 0, why: 'Dos hechos pasados casi simultáneos: «no bien» (= en cuanto) + indicativo.', en: 'No sooner had I sat down in my office than the phone rang.' },
            { context: 'Capítulo 2.', prompt: 'Mi padre, ___ notario en Ribalta, nunca quiso que yo estudiara Derecho.', options: ['a la sazón', 'máxime', 'por ende'], answer: 0, why: 'Indica la profesión que tenía en aquel momento: «a la sazón».', en: 'My father, then a notary in Ribalta, never wanted me to study law.' },
            { context: 'Capítulo 4.', prompt: 'El testigo se contradijo tres veces; ___, el jurado dejó de creerle.', options: ['por ende', 'amén de', 'a fuer de'], answer: 0, why: 'La segunda idea es la consecuencia de la primera: «por ende».', en: 'The witness contradicted himself three times; consequently, the jury stopped believing him.' },
            { context: 'Capítulo 5.', prompt: 'Nunca me gustaron los juicios largos, ___ cuando los acusados eran casi unos niños.', options: ['a la sazón', 'máxime', 'empero'], answer: 1, why: 'Refuerza la idea con el caso más claro: «máxime cuando» (= sobre todo cuando).', en: 'I never liked long trials, especially when the defendants were little more than children.' },
            { context: 'Capítulo 7, tono literario.', prompt: 'Se jubiló sin hacer ruido, ___ sus compañeros le prepararon una despedida memorable.', options: ['mas', 'habida cuenta de', 'so pena de'], answer: 0, why: 'Contraste (quería irse sin ruido; hubo despedida) en registro literario: «mas» (= pero).', en: 'He retired quietly, but his colleagues threw him an unforgettable farewell.' },
          ] },
        ] },
        { title: 'Cada conector con su valor · Each connector with its value', blocks: [
          { kind: 'classify', title: 'Clasifica por valor · Sort by value', categories: [
            { id: 'contraste', label: 'CONTRASTE (= pero, sin embargo)', tone: 'blue' },
            { id: 'tiempo', label: 'TIEMPO (= en cuanto, entonces)', tone: 'teal' },
            { id: 'causa', label: 'CAUSA O CONDICIÓN (= dado que, bajo amenaza de)', tone: 'orange' },
            { id: 'suma', label: 'ADICIÓN O REFUERZO (= además, sobre todo)', tone: 'violet' },
          ], items: [
            { text: 'La sentencia fue dura; empero, nadie la recurrió.', answer: 'contraste', why: '«Empero» = sin embargo: opone la dureza a la falta de recurso.' },
            { text: 'No bien se leyó el fallo, la sala quedó en silencio.', answer: 'tiempo', why: '«No bien» = en cuanto: inmediatez temporal.' },
            { text: 'Toda vez que falta la firma, la solicitud se archiva.', answer: 'causa', why: '«Toda vez que» = dado que: causa, en registro administrativo.' },
            { text: 'Amén de juez, era un pianista notable.', answer: 'suma', why: '«Amén de» = además de: añade una cualidad.' },
            { text: 'Los vecinos deberán retirar los coches, so pena de multa.', answer: 'causa', why: '«So pena de» = bajo la amenaza de: condición con sanción.' },
            { text: 'Rosa Iturbe, a la sazón fiscal del caso, se negó a declarar.', answer: 'tiempo', why: '«A la sazón» = entonces: sitúa el cargo en aquel momento.' },
            { text: 'Es un error firmar con prisas, máxime si nadie ha revisado el texto.', answer: 'suma', why: '«Máxime si» = sobre todo si: refuerza el argumento.' },
          ] },
        ] },
        { title: 'El boletín pretencioso · The pretentious newsletter', blocks: [
          { kind: 'lead', text: 'Inés revisa el boletín de Horizonte Consultores, que quiere «sonar prestigioso». Detecta el uso incorrecto o forzado de cada conector.', en: 'Inés is revising a consultancy newsletter that wants to “sound prestigious”. Spot each connector that is wrong or forced.' },
          { kind: 'fix', items: [
            { sentence: 'Habida cuenta que los resultados han mejorado, ampliaremos el equipo.', ok: false, options: ['Habida cuenta de que los resultados han mejorado, ampliaremos el equipo.', 'Habida cuenta que los resultados han mejorado, por ende ampliaremos el equipo.', 'Habidas cuentas de que los resultados han mejorado, ampliaremos el equipo.'], answer: 0, why: 'La locución es invariable y lleva «de»: «habida cuenta de que».' },
            { sentence: 'La cena anual reunirá a máxime cuarenta personas.', ok: false, options: ['La cena anual reunirá a cuarenta personas, máxime cuando.', 'La cena anual reunirá a cuarenta personas como máximo.', 'La cena anual reunirá, máxime, a cuarenta personas.'], answer: 1, why: '«Máxime» significa «sobre todo», no «como máximo».' },
            { sentence: 'Eventualmente, si la demanda lo justifica, abriremos una segunda oficina.', ok: true, why: 'Correcta: aquí «eventualmente» significa «si llega el caso», su valor propio en español.' },
            { sentence: 'Tras tres años de pérdidas, eventualmente cerramos la sede de Valdemora en marzo.', ok: false, options: ['Tras tres años de pérdidas, a la sazón cerramos la sede de Valdemora en marzo.', 'Tras tres años de pérdidas, finalmente cerramos la sede de Valdemora en marzo.', 'Tras tres años de pérdidas, actualmente cerramos la sede de Valdemora en marzo.'], answer: 1, why: 'Es el desenlace de un proceso («eventually»): «finalmente». «Eventualmente» sugiere una posibilidad.' },
            { sentence: 'Hemos crecido un treinta por ciento; empero, abrimos dos oficinas nuevas.', ok: false, options: ['Hemos crecido un treinta por ciento, mas, abrimos dos oficinas nuevas.', 'Hemos crecido un treinta por ciento; empero, por ende, abrimos dos oficinas nuevas.', 'Hemos crecido un treinta por ciento; por ende, abrimos dos oficinas nuevas.'], answer: 2, why: 'No hay contraste, sino consecuencia: «por ende» (o, más natural, «por eso»). «Empero» solo adorna y, además, dice otra cosa.' },
            { sentence: 'Mas tarde publicaremos el informe completo.', ok: false, options: ['Empero tarde publicaremos el informe completo.', 'Mas, tarde, publicaremos el informe completo.', 'Más tarde publicaremos el informe completo.'], answer: 2, why: 'Aquí es el adverbio de cantidad («later»): «más», con tilde. «Mas» sin tilde es «pero».' },
          ] },
        ] },
        { title: 'El recurso de Lucía · Lucía’s legal brief', blocks: [
          { kind: 'chat-fill', title: 'Lucía Benavente, abogada, consulta a Inés · A lawyer checks her brief with Inés', lines: [
            { who: 'Lucía', text: 'En el recurso escribo: «El arrendatario no pagó en marzo. ___, tampoco pagó en abril». ¿Queda bien?', options: ['Con todo y con eso', 'No bien', 'A mayor abundamiento'], answer: 2, why: 'En un escrito judicial, «a mayor abundamiento» añade un argumento más a otro que ya bastaba. Es su terreno natural.' },
            { who: 'Inés', text: 'Sí, en un recurso es la fórmula habitual. Y en el requerimiento: «Deberá entregar las llaves antes del 30 de junio, ___ perder la fianza».', options: ['a fuer de', 'so pena de', 'amén de'], answer: 1, why: 'Advierte de una sanción: «so pena de» + infinitivo, propio de textos legales.' },
            { who: 'Lucía', text: 'Perfecto. Último párrafo: «___ el contrato venció en enero, no procede la prórroga».', options: ['Toda vez que', 'Máxime', 'No bien'], answer: 0, why: 'Causa formal con indicativo: «toda vez que» (= dado que).' },
            { who: 'Inés', text: 'Bien. Pero en el correo a tu cliente, nada de toga: «Te escribo hoy ___ el plazo termina el viernes».', options: ['por ende', 'so pena de', 'porque'], answer: 2, why: 'Un correo breve a un cliente pide registro neutro: «porque» (o «ya que»). Un conector raro ahí sonaría pedante.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['No', 'bien', 'terminó', 'la', 'sesión,', 'el', 'juez', 'se', 'marchó'], accept: ['No bien terminó la sesión, el juez se marchó', 'No bien terminó la sesión, se marchó el juez'], en: 'No sooner had the session ended than the judge left.' },
            { tiles: ['Amén', 'de', 'caro,', 'el', 'proyecto', 'es', 'innecesario'], accept: ['Amén de caro, el proyecto es innecesario'], en: 'Besides being expensive, the project is unnecessary.' },
            { tiles: ['Así', 'las', 'cosas,', 'el', 'tribunal', 'aplazó', 'la', 'decisión'], accept: ['Así las cosas, el tribunal aplazó la decisión'], en: 'With matters as they stood, the court postponed its decision.' },
          ] },
        ] },
        { title: 'Sube el registro · Raise the register', blocks: [
          { kind: 'rewrite', title: 'Del borrador al texto formal · From draft to formal text', items: [
            { prompt: 'Además de ser lento, el sistema es caro.', instruction: 'Usa «amén de».', accept: ['Amén de lento, el sistema es caro', 'Amén de ser lento, el sistema es caro', 'El sistema, amén de lento, es caro', 'El sistema, amén de ser lento, es caro'] },
            { prompt: 'Como el presupuesto es limitado, hay que elegir.', instruction: 'Usa «habida cuenta de que».', accept: ['Habida cuenta de que el presupuesto es limitado, hay que elegir', 'Hay que elegir, habida cuenta de que el presupuesto es limitado'] },
            { prompt: 'En cuanto llegó el informe, la directora convocó una reunión.', instruction: 'Usa «no bien».', accept: ['No bien llegó el informe, la directora convocó una reunión', 'La directora convocó una reunión no bien llegó el informe'] },
            { prompt: 'No conviene publicar todavía, sobre todo si los datos no están verificados.', instruction: 'Usa «máxime».', accept: ['No conviene publicar todavía, máxime si los datos no están verificados', 'No conviene publicar todavía, máxime cuando los datos no están verificados'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno toma un mensaje informal suyo (real o inventado) y lo sube de registro con dos conectores del día, sin pasar de uno culto por frase.' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Palabras con historia', coach: 'Escucha el valor y el tono. Listen for value and tone.',
      steps: [
        { title: 'El espacio de Inés en la radio · Inés’s radio slot', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la postura de Inés. Segunda escucha: tu alumno anota cada conector raro y su equivalente neutro. Después, las preguntas.', self: 'Escucha una vez para entender la postura de Inés y otra para anotar cada conector raro y su equivalente neutro. (Listen once for her position, once for each connector.)' } },
          { kind: 'listen', title: 'Palabras con historia', channel: 'RADIO RIBALTA · PALABRAS CON HISTORIA', src: '/audio/grammar-live/530.mp3',
            before: 'Inés Carranza tiene un espacio semanal en la radio local sobre el uso de las palabras. Hoy habla de los conectores raros. ¿Crees que los defenderá o los atacará? (Will she defend or attack rare connectors?)',
            gist: { prompt: '¿Cuál es el consejo de Inés? · What is Inés’s advice?', options: ['Usar los conectores raros con intención y medida, sin desterrarlos.', 'Usar conectores raros para dar prestigio a cualquier informe.', 'Eliminar todos los arcaísmos de los textos actuales.'], answer: 0, why: '«Usar estos conectores con intención…; no los destierren: siquiera sea de vez en cuando, dan al texto un color…».', en: 'Use them deliberately and sparingly, but don’t ban them.' },
            details: [
              { prompt: '¿Qué regla le propuso al juez?', options: ['Revisar cada capítulo con un abogado.', 'No usar nunca «empero».', 'Un arcaísmo por capítulo, como mucho.'], answer: 2, why: '«Le propuse una regla sencilla: un arcaísmo por capítulo, como mucho».', en: 'What rule did she suggest to the judge?' },
              { prompt: '¿Por qué funciona «no bien» en la frase del juez?', options: ['Porque son unas memorias y el tono admite cierta solemnidad.', 'Porque es la única forma correcta de decir «en cuanto».', 'Porque el juez es de otro país.'], answer: 0, why: '«Funciona, porque son unas memorias y el tono admite cierta solemnidad».', en: 'Why does “no bien” work in the judge’s sentence?' },
              { prompt: '¿Qué quería decir la consultora con «eventualmente»?', options: ['Al final.', 'Posiblemente.', 'De vez en cuando.'], answer: 0, why: '«Lo que quería decir era “al final”»: un calco del inglés «eventually».', en: 'What did the consultancy mean by “eventualmente”?' },
              { prompt: 'Según Inés, ¿qué hace el lector que tropieza con una palabra rara?', options: ['Busca la palabra en el diccionario.', 'Deja de seguir el argumento.', 'Admira más al autor.'], answer: 1, why: '«El lector que tropieza con una palabra rara deja de seguir el argumento».', en: 'According to Inés, what happens to a reader who stumbles on a rare word?' },
            ],
            transcript: 'Buenas tardes y bienvenidos a «Palabras con historia». Hoy les cuento un caso de mi taller. Hace unas semanas, un juez jubilado me trajo sus memorias. El texto era espléndido; [[empero|blue]], y perdonen la broma, estaba lleno de «empero». Le propuse una regla sencilla: un arcaísmo por capítulo, como mucho. Protestó, [[mas|blue]] acabó aceptando. Fíjense en esta frase suya: «[[No bien|teal]] llegué al juzgado, comprendí que el trabajo me desbordaría». Funciona, porque son unas memorias y el tono admite cierta solemnidad. O esta otra: «Mi mentor, [[a la sazón|teal]] presidente del tribunal, me dio un consejo». Perfecta: «a la sazón» significa «en aquel momento», no «por lo tanto». Otra cosa es el informe de una consultora que revisé este mes: anunciaba que la empresa cerraría una sede «eventualmente», cuando lo que quería decir era «al final». Mi consejo, por tanto, es usar estos conectores con intención, [[máxime cuando|orange]] escriban para un público amplio, [[habida cuenta de que|orange]] el lector que tropieza con una palabra rara deja de seguir el argumento. [[Sea como fuere|violet]], no los destierren: [[siquiera sea|orange]] de vez en cuando, dan al texto un color que ningún «sin embargo» le da. Hasta el próximo jueves.',
            reply: { teacher: 'Tú eres Inés y lees una frase pedante inventada. Tu alumno es un oyente que llama a la radio: explica qué conector sobra o falla y propone una versión con un solo conector culto bien elegido.', self: 'Eres un oyente que llama a la radio: responde en voz alta a Inés. ¿Estás de acuerdo con su regla? Usa «habida cuenta de que», «máxime cuando» o «sea como fuere». (Reply to Inés aloud.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'El tono justo en voz alta', coach: 'Eleva el registro sin perder naturalidad. Raise the register, stay natural.',
      steps: [
        { title: 'Situaciones con registro · Situations with register', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas. Tu alumno responde con al menos dos conectores del día, cada uno con su valor exacto. Si suena pedante o usa un falso amigo, tú repites la frase con una alternativa y sigue la conversación.', self: 'Responde en voz alta a cada pregunta con al menos dos conectores del día. Después pregúntate: ¿alguno sobraba? (Use two of today’s connectors; then ask yourself if one was too much.)' } },
          { kind: 'talk', cards: [
            { q: 'Cuenta, en tono de memoria, cómo empezó un trabajo o una etapa importante de tu vida. · Tell, memoir-style, how a job or stage of your life began.', followUps: ['¿Quién te ayudó entonces y qué cargo tenía?', '¿Qué decidiste después?'], phrases: ['[[No bien|teal]] + indicativo, …', 'X, [[a la sazón|teal]] + cargo, …', '[[Así las cosas|teal]], …'], hint: '«No bien» para la inmediatez, «a la sazón» para el cargo de entonces, «así las cosas» para la decisión.', example: 'No bien llegué a Lima, me di cuenta de que mi español de manual no bastaba. Mi primera jefa, Teresa Quispe, a la sazón directora de la escuela, me apuntó a un grupo de conversación. Así las cosas, me quedé dos años en lugar de seis meses.' },
            { q: 'Defiendes ante un comité una decisión impopular (cerrar un servicio, cambiar un horario…). · Defend an unpopular decision before a committee.', followUps: ['¿Qué responderías a quien dice que es injusto?', '¿Hay alguna excepción?'], phrases: ['[[Habida cuenta de que|orange]]…', '[[Toda vez que|orange]]…', '…, [[máxime cuando|orange]]…'], hint: 'Dos causas formales distintas y un refuerzo con «máxime cuando».', example: 'Habida cuenta de que la biblioteca abre solo tres horas por la tarde, proponemos unificar el horario. Toda vez que el presupuesto no permite contratar a nadie más, no hay otra opción, máxime cuando la sala de estudio se queda vacía casi todos los días.', next: 'Ahora, sube el registro.' },
            { q: 'Sube el registro de este mensaje para un informe: «Además de caro, el programa es lento, y encima ahora que no hay dinero. Total, que no lo compramos». · Rewrite this message for a formal report.', followUps: ['¿Qué conector culto descartarías aquí y por qué?', '¿Cómo lo dirías en una reunión, en voz alta?'], phrases: ['[[Amén de|orange]]…', '…, [[máxime|orange]]…', '[[Por ende|violet]], … · [[En suma|violet]], …'], hint: 'Adición con «amén de», refuerzo con «máxime» y conclusión con «por ende» o «en suma».', example: 'Amén de caro, el programa es lento, máxime en un momento de restricciones presupuestarias. Por ende, recomendamos no adquirirlo. En una reunión diría algo más sencillo: además de caro, es lento, sobre todo ahora; por eso no lo recomendamos.' },
            { q: 'Un compañero escribe al equipo: «Empero, a fuer de sincero, y a mayor abundamiento, el plan no prosperará». Comunícale tu opinión con tacto. · Give a colleague tactful feedback on a pompous email.', followUps: ['¿Qué conservarías de su frase?', '¿En qué tipo de texto sí encajarían esas palabras?'], phrases: ['[[Dicho lo cual|violet]], …', '[[Sea como fuere|violet]], …', '[[ahora bien|blue]]'], hint: 'Reconoce la intención, explica el problema de registro y propone una versión neutra.', example: 'Entiendo que quieras dar fuerza al mensaje. Ahora bien, tres fórmulas antiguas seguidas distraen del argumento; «a mayor abundamiento», además, es lenguaje de sentencia. Dicho lo cual, la idea es buena: yo pondría «Sinceramente, no creo que el plan prospere, y hay otro motivo».' },
            { q: 'Explica a un colega anglófono por qué «eventualmente» y «actualmente» le traicionan. · Explain these false friends to an English-speaking colleague.', followUps: ['¿Conoces otro falso amigo parecido?', '¿Cómo lo recordarías?'], phrases: ['«Eventualmente» no significa…, sino…', 'Para «actually», di «en realidad»…', '«En efecto» confirma…'], hint: 'Da el valor español, el sentido inglés y la alternativa correcta, con un ejemplo.', example: '«Eventualmente» no significa «al final», sino «si llega el caso»: «Eventualmente, podríamos contratar a alguien». Si quieres decir «eventually», di «finalmente». Y «actualmente» es «hoy»; para «actually», «en realidad». Lo mismo pasa con «en definitiva», que es «en resumen», no «definitely».', next: 'Para terminar, un debate.' },
            { q: 'Debate: «Las guías de estilo deberían desaconsejar los arcaísmos en la prensa». · Debate: should style guides discourage archaisms in the press?', followUps: ['¿Y en la literatura o en el humor?', '¿Cuál es tu conclusión?'], phrases: ['[[siquiera sea|orange]]…', '[[Con todo|blue]], …', '[[Sea como fuere|violet]], …', '[[so pena de|orange]]…'], hint: 'Concede, contrapón y cierra con una postura clara; un solo arcaísmo, si acaso, y con intención.', example: 'Entiendo el argumento: un periódico debe ser claro, so pena de perder lectores. Con todo, prohibirlos me parece excesivo: siquiera sea en una columna o en una crónica, una palabra antigua bien elegida da carácter. Sea como fuere, el criterio no debería ser «suena culto», sino «aporta algo».', teacher: 'Tú defiendes la postura contraria; tu alumno concede, contrapone y cierra sin repetir conectores.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno pregunta y tú respondes con algún error a propósito («habida cuenta que», «máxime veinte minutos», «a la sazón» como «por tanto», «eventualmente» como «al final»). Tu alumno lo detecta y lo corrige.', self: 'Ahora haz tú las preguntas en voz alta y respóndelas en un registro distinto: si antes fuiste formal, ahora sé neutro, y al revés. (Ask the questions and answer in a different register.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'La presentación del libro', coach: 'Elegancia con medida. Elegance in moderation.',
      steps: [
        { title: 'Presentar «Cuarenta años de toga» · Introducing the book', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos cada conector raro: ¿tiene su valor exacto? ¿Aporta algo o solo adorna? Después tu alumno lee el discurso en voz alta.', self: 'Escribe tu discurso y toca «Revisar mi texto». Después revisa cada conector raro: ¿valor exacto? ¿Aporta o solo adorna? (Check value and purpose of each rare connector.)' } },
          { kind: 'write', title: 'Mi discurso · My speech', situation: 'Las memorias de Federico Lanza se presentan en la biblioteca municipal de Ribalta. Te piden un discurso breve de presentación (como antigua colega, amigo o editora): presenta al autor y el libro ante un público variado y formal. (Write a short, formal launch speech for the memoirs.)', task: [
            'Sitúa al autor en el pasado con «a la sazón», «no bien» o «así las cosas». (Time and circumstance.)',
            'Justifica una idea con «habida cuenta de que», «toda vez que» o «máxime cuando». (A formal reason.)',
            'Añade o recapitula con «amén de», «por ende» o «en suma». (Add or sum up.)',
            'Cierra o cambia de tema con «dicho lo cual» o «sea como fuere». (Close.)',
            'Como mucho, un arcaísmo (empero, mas, a fuer de) y ningún falso amigo. (At most one archaism.)',
          ], starters: ['Buenas tardes a todos.', 'Es para mí un honor…', 'Conocí a…, a la sazón…,', 'No bien…,', 'Amén de…,', '…, máxime…', 'Habida cuenta de que…,', 'En suma,…', 'Dicho lo cual,…', 'Muchas gracias.'],
            words: ['no bien', 'a la sazón', 'así las cosas', 'habida cuenta de que', 'toda vez que', 'máxime', 'amén de', 'por ende', 'en suma', 'dicho lo cual', 'sea como fuere'],
            model: 'Buenas tardes a todos. Es para mí un honor presentar «Cuarenta años de toga», las memorias de Federico Lanza. Lo conocí en 1991. Yo era una estudiante en prácticas; él, [[a la sazón|teal]], el juez más joven de la provincia. [[No bien|teal]] crucé la puerta de su despacho, me puso delante un expediente de seiscientas páginas y me dijo: «Léalo entero; los resúmenes mienten». Este libro es fiel a esa lección. [[Amén de|orange]] contar casos memorables, explica cómo se llega a una decisión justa, y eso es valiosísimo, [[máxime|orange]] en una época en que tanta gente desconfía de los tribunales. [[Habida cuenta de que|orange]] el libro está pensado para lectores de todas las edades, el autor renunció a muchas fórmulas solemnes. Alguna sobrevive, [[mas|blue]] sobrevive con razón. [[En suma|violet]], es un libro escrito con rigor y con humor. [[Dicho lo cual|violet]], no quiero adelantarles más: la palabra es de Federico. Muchas gracias.',
            minWords: 150,
            checks: [
              { label: 'Tiempo o circunstancia (no bien, a la sazón, así las cosas)', pattern: '(?<!\\p{L})(?:no\\s+bien|a\\s+la\\s+sazón|así\\s+las\\s+cosas)(?!\\p{L})', tip: 'Sitúa al autor: «X, a la sazón…, …».' },
              { label: 'Causa o refuerzo formal (habida cuenta de, toda vez que, máxime)', pattern: '(?<!\\p{L})(?:habida\\s+cuenta\\s+de|toda\\s+vez\\s+que|máxime)(?!\\p{L})', tip: 'Da una razón formal: «Habida cuenta de que…».' },
              { label: 'Adición o recapitulación (amén de, por ende, en suma)', pattern: '(?<!\\p{L})(?:amén\\s+de|por\\s+ende|en\\s+suma)(?!\\p{L})', tip: 'Añade con «amén de» o resume con «en suma».' },
              { label: 'Cierre (dicho lo cual, dicho esto, sea como fuere)', pattern: '(?<!\\p{L})(?:dicho\\s+lo\\s+cual|dicho\\s+esto|sea\\s+como\\s+fuere)(?!\\p{L})', tip: 'Cierra con «Dicho lo cual, …».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})habida\\s+cuenta\\s+que(?!\\p{L})', why: 'La locución lleva preposición: **habida cuenta de que**.' },
              { pattern: '(?<!\\p{L})so\\s+pena\\s+que(?!\\p{L})', why: 'Se dice **so pena de** + infinitivo o nombre (o **so pena de que** + subjuntivo).' },
              { pattern: '(?<!\\p{L})máxime\\s+\\d', why: '**Máxime** significa «sobre todo». Para un límite, escribe «como máximo».' },
              { pattern: '(?<!\\p{L})(?:eventualmente|actualmente)(?!\\p{L})', why: 'Comprueba el sentido: **eventualmente** = «si llega el caso»; **actualmente** = «hoy». Para «eventually» y «actually», «finalmente» y «en realidad».' },
              { pattern: '(?<!\\p{L})(?:empero|a\\s+fuer\\s+de)(?!\\p{L})[\\s\\S]*(?<!\\p{L})(?:empero|a\\s+fuer\\s+de|mas)(?!\\p{L})', why: 'Parece que usas más de un arcaísmo. La tarea pide uno como mucho: prueba con «sin embargo» o «pero».' },
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
            { tone: 'blue', label: 'CONTRASTE', formula: 'empero (= sin embargo) · mas (= pero, sin tilde) · con todo y con eso (coloquial)', example: 'Pidió la palabra, mas se la negaron.', caption: 'literarios; «más» con tilde = more', en: 'literary contrast; with an accent, más means “more”' },
            { tone: 'teal', label: 'TIEMPO Y CIRCUNSTANCIA', formula: 'no bien (= en cuanto) · a la sazón (= entonces) · así las cosas', example: 'Ana Ruiz, a la sazón alcaldesa, inauguró el puente.', caption: '«a la sazón» nunca es «por tanto»', en: 'a la sazón means “then, at that time”, never “therefore”' },
            { tone: 'orange', label: 'CAUSA, REFUERZO, CONDICIÓN', formula: 'habida cuenta de que · toda vez que · máxime cuando · amén de · a mayor abundamiento · so pena de · siquiera sea', example: 'Habida cuenta de que no hay quórum, se aplaza la votación.', caption: 'con «de»; «toda vez que» ≠ cada vez que; «máxime» ≠ como máximo', en: 'keep the de; toda vez que is causal; máxime means “especially”' },
            { tone: 'violet', label: 'CONSECUENCIA Y CIERRE', formula: 'por ende · en suma · dicho lo cual · sea como fuere', example: 'Sea como fuere, el plazo no cambia.', caption: '«por ende», rígido en la conversación', en: 'por ende is fine in writing but stiff in conversation' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Un conector raro se elige por dos razones a la vez: su **valor exacto** (¿contraste, tiempo, causa, refuerzo, cierre?) y un **registro que el texto necesita**. Si solo «suena culto», sobra. Y vigila los falsos amigos: **eventualmente** no es «eventually», **actualmente** no es «actually».', en: 'Choose a rare connector for two reasons at once: its exact value and a register the text really needs. If it only “sounds learned”, cut it. And watch the false friends: eventualmente is not “eventually”, actualmente is not “actually”.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: '___ se abrió la puerta, los periodistas entraron en tropel.', options: ['A la sazón', 'Amén de', 'No bien'], answer: 2, why: 'Inmediatez entre dos hechos pasados: «no bien» + indicativo.', en: 'No sooner had the door opened than the reporters poured in.' },
            { prompt: 'Debe presentarse el formulario antes del día 15, ___ perder la plaza.', options: ['so pena de', 'por ende', 'máxime'], answer: 0, why: 'Advertencia de una sanción: «so pena de» + infinitivo.', en: 'The form must be submitted before the 15th, or you will lose your place.' },
            { prompt: 'Tras años de negociación, ___ firmaron el acuerdo.', options: ['finalmente', 'eventualmente', 'actualmente'], answer: 0, why: 'Desenlace de un proceso («eventually»): «finalmente».', en: 'After years of negotiation, they finally signed the agreement.' },
            { prompt: '___ la falta de pruebas, el juez archivó la causa.', options: ['Habida cuenta de', 'Toda vez que', 'Máxime'], answer: 0, why: 'Causa formal + nombre: «habida cuenta de». «Toda vez que» necesita una oración con verbo.', en: 'Given the lack of evidence, the judge dismissed the case.' },
            { context: 'Mensaje a un compañero de oficina.', prompt: 'Se ha acabado el café; ___ mañana traigo un paquete.', options: ['empero', 'a mayor abundamiento', 'así que'], answer: 2, why: 'Consecuencia en un mensaje informal: «así que». «Empero» es adversativo y arcaico; «a mayor abundamiento» es jurídico.', en: 'We’re out of coffee, so I’ll bring a pack tomorrow.' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Ahora, en una fundación cultural. Now, at a cultural foundation.', blocks: [
          { kind: 'lead', text: 'Noelia Saavedra redacta la memoria anual de una fundación cultural. Sus notas son correctas, pero demasiado coloquiales para el documento: tú las elevas de registro con el conector indicado.', en: 'Noelia is writing a cultural foundation’s annual report. Her notes are correct but too casual for the document: you raise their register with the connector given.' },
          { kind: 'rewrite', title: 'Las notas de Noelia · Noelia’s notes', items: [
            { prompt: 'Como la sala es pequeña, limitaremos el aforo.', instruction: 'Usa «toda vez que».', accept: ['Toda vez que la sala es pequeña, limitaremos el aforo', 'Limitaremos el aforo, toda vez que la sala es pequeña'] },
            { prompt: 'La exposición, además de bonita, es muy didáctica.', instruction: 'Usa «amén de».', accept: ['La exposición, amén de bonita, es muy didáctica', 'Amén de bonita, la exposición es muy didáctica'] },
            { prompt: 'Ramón Gil, que entonces era director de la fundación, inauguró la sala en 1998.', instruction: 'Usa «a la sazón».', accept: ['Ramón Gil, a la sazón director de la fundación, inauguró la sala en 1998'] },
          ] },
        ] },
        { title: 'Ampliación · Sendos, adjetivos y textos antiguos · Extension', mascot: '/brand/mascot/portrait.webp', coach: 'Opcional. Optional.', blocks: [
          { kind: 'lead', text: 'Para estudiantes fuertes o si queda tiempo. Tres matices cultos del grupo nominal y del texto antiguo. **Sendos, sendas** es distributivo: «uno para cada uno» («Los dos ministros pronunciaron **sendos** discursos» = cada uno, un discurso); no significa «ambos» ni «grandes» y no tiene singular. La **posición del adjetivo** cambia el matiz: antepuesto, valora o describe sin distinguir («la **espléndida** bahía», literario); algunos cambian de significado («un **pobre** hombre» = digno de lástima; «un hombre **pobre**» = sin dinero). Y en textos jurídicos antiguos, **toda vez que** puede ser temporal: «una vez que».', en: 'For strong students or spare time. Sendos is distributive, “one each”; it doesn’t mean “both” or “big” and has no singular. Adjective position changes nuance: placed before the noun it evaluates or describes without singling out (literary); some adjectives change meaning (un pobre hombre = a poor wretch; un hombre pobre = a man without money). In old legal texts, toda vez que can be temporal: “once”.' },
          { kind: 'choice', title: 'Matices cultos · Learned nuances', items: [
            { prompt: '«Las dos juezas firmaron sendos votos particulares». ¿Qué significa?', options: ['Firmaron un mismo voto particular entre las dos.', 'Cada una firmó un voto particular.', 'Firmaron votos particulares muy largos.'], answer: 1, why: '«Sendos» = uno cada una: hay dos votos, uno por jueza.', en: 'What does “sendos votos” mean? One dissenting opinion each.' },
            { prompt: '¿Qué frase usa bien «sendos»?', options: ['Las dos autoras recibieron sendos premios.', 'El autor recibió sendos premios.', 'Fue un sendo error.'], answer: 0, why: '«Sendos» necesita un grupo que se reparte (dos autoras, un premio cada una) y no tiene singular.', en: 'Which sentence uses “sendos” correctly?' },
            { prompt: '«Es un pobre hombre». ¿Qué significa?', options: ['Es un hombre sin dinero.', 'Es un hombre generoso.', 'Es una persona digna de lástima o de poco carácter.'], answer: 2, why: 'Antepuesto, «pobre» valora (= desdichado, infeliz). Pospuesto, «un hombre pobre», describe su situación económica.', en: 'What does “un pobre hombre” mean? A poor wretch, not a man without money.' },
            { context: 'Reglamento de 1890.', prompt: '«Toda vez que el reo hubiere cumplido la condena, será puesto en libertad». ¿Qué valor tiene aquí «toda vez que»?', options: ['Concesivo: «aunque».', 'Causal: «dado que».', 'Temporal: «una vez que».'], answer: 2, why: 'En textos jurídicos antiguos, «toda vez que» puede ser temporal: «una vez que haya cumplido». Hoy se usa sobre todo como causal.', en: 'In this old regulation, toda vez que means “once”.' },
          ] },
          { kind: 'teacher', text: 'Paso opcional: solo si queda tiempo o para estudiantes fuertes. Tu alumno escribe dos frases sobre una noticia reciente, una con «sendos» y otra con un adjetivo antepuesto que cambie de significado (pobre, viejo, gran).' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 231 · Puntuación avanzada: punto y coma, dos puntos e incisos', text: 'Ya sabes elegir conectores cultos por su valor y su registro. Muchos de ellos dependen de la puntuación: «empero» y «a la sazón» van entre comas, «por ende» y «así las cosas» suelen seguir a un punto y coma o a un punto. La clase 231 trabaja la puntuación avanzada: punto y coma, dos puntos e incisos. Es el paso natural: el conector exacto necesita la pausa exacta.', en: 'You can now choose learned connectors by value and register. Many of them depend on punctuation: some go between commas, others follow a semicolon or a full stop. Class 231 deals with advanced punctuation: semicolons, colons and parenthetical asides. It is the natural next step: the exact connector needs the exact pause.', href: '/gramatica/puntuacion-avanzada-punto-y-coma-dos', label: 'Ir a la clase 231' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Qué diferencia hay entre “Toda vez que llueve, se inunda el sótano” y “Toda vez que el plazo ha vencido, se archiva la solicitud”?». Respuesta esperada: la primera usa mal el conector (quiere decir «cada vez que»); la segunda es causal y correcta. Tarea: el discurso de Escribir.' },
        ] },
      ],
    },
  ],
};
