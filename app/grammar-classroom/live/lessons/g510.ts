import type { LiveLesson } from '../types';

/**
 * Lesson 510 · C2 · Subordinación múltiple sin pérdida de referentes (course unit G210).
 * Builds on G187 (lesson 487: este / aquel, el primero, este último, dicho, the DPD's advice
 * against «el mismo» as a pronoun), G195 (lesson 495: agreement with a distant head) and G203
 * (lesson 503: especificativas / explicativas, el cual, lo que / lo cual, cuyo). Those inventories
 * are not repeated; here they become tools for long sentences. C2 step: long sentences with
 * several levels of subordination (noun clauses, relatives, adverbials) in legal, academic and
 * journalistic prose that stay clear: finding the main verb and its subject; distance between
 * them (postposed subject: Llegó el informe que pidió quien dirige la comisión); ambiguous
 * referents (su, le, a tacit subject, «que» after de + noun: el abogado de la inquilina que…);
 * disambiguation tools (repeating the noun, este / esta, el primero / la segunda, el cual / la
 * cual chosen by gender and number, dicho, de + noun instead of su, direct speech, reordering);
 * «que» chains and how to lighten them (participle, de + noun, al + infinitive, splitting);
 * «lo que / lo cual» and nominal encapsulators (esta decisión, el fallo); the repeated «que»
 * after an aside; queísmo and dequeísmo per the DPD (Pienso de que: dequeísmo; Me alegro que:
 * queísmo, very frequent in speech, avoided in careful writing; Me alegra que is correct;
 * advertir / avisar / dudar admit both); splitting vs keeping a long sentence.
 * Ampliación: attraction agreement with a distant head, «su propio», el cual when both
 * candidates share gender, «lo cual» after a full stop.
 * Scene: the editorial office of the journal Cuadernos de Derecho y Sociedad. Leonor Ibarra
 * (editor-in-chief) and Ramiro Soto (copy editor) prepare a press release and an article by
 * Clara Méndez (civil law lecturer) on a ruling: a tenant, Marta Rey, wins back her deposit from
 * her landlady, Pilar Ochoa. Two women as parties, so gender cannot disambiguate «su».
 * Escuchar: Leonor's podcast slot «Minuto de estilo» (es-MX-DaliaNeural, ustedes).
 * Escribir: rewriting a convoluted court-news paragraph into clear complex prose.
 */
export const lesson: LiveLesson = {
  id: 510,
  level: 'C2',
  title: 'Subordinación múltiple sin pérdida de referentes',
  subtitle: 'Escribir oraciones largas con varias subordinadas sin que el lector pierda el sujeto, el verbo ni a quién se refiere cada pronombre.',
  legend: [
    { tone: 'blue', label: 'NÚCLEO · sujeto y verbo principal (the backbone the reader looks for)' },
    { tone: 'orange', label: 'RIESGO · su, le, sujeto tácito, cadenas de «que» (two possible referents)' },
    { tone: 'teal', label: 'SOLUCIÓN · repetir el nombre, esta, la primera, el cual, la preposición correcta' },
    { tone: 'violet', label: 'ENCAPSULADOR · lo que, lo cual, esta decisión, el fallo (sums up an idea)' },
  ],
  optionNotes: {
    'la misma': 'El Diccionario panhispánico de dudas desaconseja «el mismo / la misma» como simple sustituto de un pronombre o de un posesivo. Usa «esta», «esta última», el nombre o «su» cuando no haya duda.',
    'La misma': 'El Diccionario panhispánico de dudas desaconseja «el mismo / la misma» como simple sustituto de un pronombre. Tras punto, usa un encapsulador nominal: «Esta decisión», «Dicha medida».',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Largas, pero claras', coach: 'Una oración larga no es un problema; perder al lector, sí. Long is fine; losing the reader is not.',
      steps: [
        { title: 'Una frase de siete líneas · A seven-line sentence', blocks: [
          { kind: 'lead', text: 'Redacción de Cuadernos de Derecho y Sociedad, una revista jurídica. Leonor Ibarra, la editora, recibe el borrador de una nota de prensa sobre una sentencia: una inquilina, Marta Rey, ha recuperado la fianza que le reclamaba a su arrendadora, Pilar Ochoa. La primera frase dice así: «La sentencia que dictó el tribunal que revisó el recurso que había presentado la inquilina contra la arrendadora, a la que reclamaba la fianza que le había entregado cuando firmó el contrato, establece que debe devolvérsela en treinta días, lo que, según su abogada, sienta un precedente».', en: 'The sentence is grammatical, and nothing in it is false. But the main verb (establece) arrives after half a dozen subordinate clauses, and several words (le, firmó, su, lo que) could point to either woman or to more than one idea. This class is about keeping long, layered sentences readable in legal, academic and news writing.' },
          { kind: 'compare', title: 'Lo mismo, dicho de dos maneras · The same content, two ways', columns: [
            { tone: 'orange', label: 'TODO EN UNA CADENA', sentence: '[[La sentencia|blue]] que dictó el tribunal que revisó el recurso que había presentado la inquilina… [[establece|blue]] que [[debe devolvérsela|orange]]…, lo que, según [[su|orange]] abogada, sienta un precedente.', idea: 'Cinco «que» con funciones distintas; el verbo principal llega tarde; «debe», «su» y «lo que» admiten varias lecturas.', en: 'A chain of «que» clauses delays the main verb; the reader has to hold everything in memory and still cannot be sure who must pay or whose lawyer is speaking.' },
            { tone: 'teal', label: 'COMPLEJA, PERO CLARA', sentence: 'El tribunal ha dado la razón a la inquilina: [[la arrendadora|teal]] deberá devolverle en treinta días la fianza que [[la inquilina|teal]] le entregó al firmar el contrato. Según [[la abogada de la inquilina|teal]], [[el fallo|violet]] sienta un precedente.', idea: 'Sigue habiendo subordinación (que…, al firmar…), pero cada verbo tiene un sujeto visible y cada pronombre, un solo candidato.', en: 'Still complex prose, not a list of short sentences: but each verb has a visible subject and each pronoun has only one possible antecedent.' },
          ] },
          { kind: 'guide', text: { teacher: 'Tú lees en voz alta la versión en cadena, sin pausas. Tu alumno dice cuál es el verbo principal y quién debe devolver la fianza. Después leen la versión clara.', self: 'Lee en voz alta la versión en cadena. ¿Cuál es el verbo principal? ¿Quién debe devolver la fianza? Después lee la versión clara. (Find the main verb, then check who must pay.)' } },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'En la versión en cadena, ¿cuál es el verbo principal?', options: ['había presentado', 'establece', 'revisó'], answer: 1, why: 'El sujeto es «La sentencia» y su verbo es «establece». Todo lo que hay entre los dos son subordinadas que el lector debe sostener en la memoria.', en: 'The subject is «la sentencia»; everything between it and «establece» is subordinate material.' },
            { prompt: '¿Por qué es dudoso «según su abogada»?', options: ['Porque «según» exige un nombre propio.', 'Porque una abogada no puede opinar sobre una sentencia.', 'Porque «su» puede referirse a la inquilina, a la arrendadora o a otra persona.'], answer: 2, why: '«Su» no marca el género ni el número del poseedor: cualquier referente singular anterior es candidato. Con dos mujeres como partes, ni siquiera el contexto lo resuelve.', en: '«Su» says nothing about the owner’s gender or number, so every singular noun before it is a candidate.' },
          ] },
        ] },
        { title: 'Las capas de la oración · The layers of a sentence', mascot: '/brand/mascot/studying.webp', coach: 'Primero el esqueleto: sujeto y verbo. Skeleton first: subject and verb.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'TRES TIPOS DE SUBORDINADA', question: '¿Qué hace cada «que», cada «cuando», cada «aunque»?', en: 'A noun clause works as a subject or object (Establece que…); a relative clause modifies a noun (el recurso que presentó); an adverbial clause adds time, cause, condition, concession or purpose (cuando firmó, aunque recurra, para que conste). Long sentences stay readable when the reader always knows which layer they are in and can find the main verb quickly.', formula: ['SUSTANTIVA: verbo + que / si + oración (funciona como sujeto o complemento)', 'RELATIVA: nombre + que / el cual / donde / cuyo + oración (modifica al nombre)', 'ADVERBIAL: cuando, aunque, porque, si, para que, al + infinitivo… (tiempo, causa, condición, finalidad)'],
            meaning: 'Una oración compleja se lee bien cuando el lector encuentra pronto el **sujeto** y el **verbo principal** y sabe en cada momento de qué capa viene cada dato. Se lee mal cuando entre el sujeto y su verbo se acumulan relativas, o cuando no está claro si un «que» es relativo o conjunción.',
            examples: [
              { es: '[[El tribunal|blue]] [[considera|blue]] que la fianza debe devolverse porque la arrendadora no justificó los daños que alegaba.', en: 'Main clause first; then a noun clause (que…), an adverbial of cause (porque…) and a relative (que alegaba). The reader always knows where they are.' },
              { es: '[[Llegó|blue]] por fin [[el informe|blue]] que pidió quien dirige la comisión.', en: 'Spanish allows the subject after the verb: the long subject goes last, so the main verb is not lost at the end.' },
              { es: 'Aunque la arrendadora alegó desperfectos, [[la jueza|blue]] [[estimó|blue]] el recurso porque no se aportaron pruebas.', en: 'A short adverbial before the main clause works well; a long one delays the backbone, so keep fronted clauses brief.' },
            ] },
          { kind: 'table', title: 'Una oración, capa a capa · One sentence, layer by layer', head: ['Capa', 'Fragmento', 'Función'], rows: [
            ['principal', '**La sentencia … establece**', 'sujeto + verbo principal'],
            ['relativa 1', 'que dictó el tribunal', 'modifica a «sentencia»'],
            ['relativa 2', 'que revisó el recurso', 'modifica a «tribunal»'],
            ['relativa 3', 'que había presentado la inquilina', 'modifica a «recurso»'],
            ['adverbial', 'cuando firmó el contrato', 'tiempo: ¿quién firmó? [[sujeto tácito|orange]]'],
            ['sustantiva', 'que debe devolvérsela…', 'complemento de «establece»'],
          ], note: 'Las relativas encadenadas forman una escalera: cada una cuelga del último nombre. Tres peldaños ya cansan. Para aligerar: convierte una relativa en participio o en «de + nombre» (el recurso **de la inquilina**), pospón el sujeto largo (Llegó el informe que…) o divide la oración.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«El informe que pidió quien dirige la comisión llegó». ¿Qué versión es más fácil de leer, sin perder nada?', options: ['El informe, que pidió quien dirige la comisión, llegó.', 'Llegó el informe que pidió quien dirige la comisión.', 'El informe que pidió quien dirige la comisión, llegó.'], answer: 1, why: 'Con el sujeto pospuesto, el verbo principal aparece al principio. Las dos comas del inciso cambian el sentido, y una sola coma entre el sujeto y el verbo es incorrecta.', en: 'Postposing the long subject puts the main verb first; a comma between subject and verb is never right.' },
            { prompt: 'En «Dijo que el recurso que presentó llegó tarde», ¿qué es «que presentó»?', options: ['Una sustantiva, complemento de «dijo».', 'Una adverbial de tiempo.', 'Una relativa que modifica a «recurso».'], answer: 2, why: 'El primer «que» introduce lo dicho (sustantiva); el segundo va detrás de un nombre y lo modifica (relativa). Dos «que» con funciones distintas en tres palabras: ahí empieza el riesgo.', en: 'Two «que» with different jobs: the first introduces what was said, the second modifies «recurso».' },
          ] },
        ] },
        { title: '¿De quién es «su»? · Whose is «su»?', mascot: '/brand/mascot/speaking.webp', coach: 'Si caben dos personas, el lector elige… y puede equivocarse. Two candidates? The reader guesses.', blocks: [
          { kind: 'compare', title: 'Tres puntos de riesgo · Three danger points', columns: [
            { tone: 'orange', label: 'SU / SUYO', sentence: 'Ana le dijo a Marta que [[su|orange]] informe tenía errores.', idea: '¿El informe de Ana, el de Marta o el de otra persona? «Su» no distingue poseedores.', en: 'Whose report? «Su» can point to Ana, to Marta or to someone else (even «usted»).' },
            { tone: 'orange', label: 'SUJETO TÁCITO', sentence: 'Cuando la jueza recibió a la fiscal, [[estaba|orange]] agotada.', idea: '¿Quién estaba agotada? El verbo no lleva sujeto y hay dos candidatas del mismo género.', en: 'Spanish drops subjects freely; with two candidates of the same gender, the reader cannot tell who was exhausted.' },
            { tone: 'orange', label: 'QUE TRAS «DE + NOMBRE»', sentence: 'El abogado de la inquilina [[que firmó el acuerdo|orange]]…', idea: '¿Firmó el abogado o la inquilina? «Que» no tiene género y puede ir con cualquiera de los dos nombres.', en: 'After «noun + de + noun», a «que» clause can attach to either noun.' },
          ] },
          { kind: 'table', title: 'Herramientas para desambiguar · Disambiguation tools', head: ['Herramienta', 'Ejemplo', 'Cuándo conviene'], rows: [
            ['repetir el nombre', 'que el informe **de Marta** tenía errores', 'siempre funciona; en textos jurídicos es lo habitual'],
            ['de + este / esta', 'que el informe **de esta** tenía errores', '«esta» = el último nombre femenino mencionado (Marta)'],
            ['el primero / la segunda / este último', 'Habló con Ana y con Marta; **la segunda**…', 'cuando los candidatos acaban de aparecer juntos'],
            ['el cual / la cual (con comas)', 'el abogado de la inquilina, **la cual** firmó…', 'solo si los candidatos tienen distinto género o número'],
            ['dicho / dicha + nombre', '**dicho** informe, **dicha** cláusula', 'registro administrativo, jurídico o académico'],
            ['estilo directo', 'Ana le dijo a Marta: «**Tu** informe tiene errores».', 'en narración y en prensa, cuando hay un diálogo'],
            ['reordenar o cambiar el sujeto', 'Cuando la fiscal llegó, **la jueza** estaba agotada.', 'cuando basta con poner el sujeto delante del verbo'],
          ], note: 'No hay una herramienta mejor que las demás: elige la que deja **un solo candidato** con menos peso. «El mismo / la misma» como pronombre no es una solución: el DPD lo desaconseja.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Ana quiere decir que el informe con errores es el de Marta. ¿Qué versión no deja dudas?', options: ['Ana le dijo a Marta que el informe de esta tenía errores.', 'Ana le dijo a Marta que el informe de la misma tenía errores.', 'Ana le dijo a Marta que su informe tenía errores.'], answer: 0, why: '«Esta» señala al último nombre femenino mencionado: Marta. «Su» deja la duda y «de la misma» se desaconseja como pronombre.', en: '«Esta» points to the nearest feminine noun, so the report is Marta’s.' },
            { prompt: '«Hablé con la hermana del notario, el cual me confirmó la fecha». ¿Quién confirmó la fecha?', options: ['No se puede saber.', 'El notario.', 'La hermana.'], answer: 1, why: '«El cual» es masculino singular: solo puede retomar a «notario». Con «la cual» habría sido la hermana.', en: 'Masculine «el cual» can only refer back to the notary.' },
          ] },
        ] },
        { title: 'Encapsular y no encadenar · Sum up, don’t chain', mascot: '/brand/mascot/standing.webp', coach: 'Lo que, esta decisión, el fallo: una idea entera en dos palabras. A whole idea in two words.', blocks: [
          { kind: 'concept', tone: 'violet', label: 'ENCAPSULADORES', question: '¿Qué idea retomo exactamente?', en: '«Lo que / lo cual» after a comma sum up the whole previous clause; a demonstrative + noun (esta decisión, dicho fallo, tal circunstancia) does the same job across a full stop and names the idea at the same time, which makes it more precise.', formula: ['oración, + lo que / lo cual + verbo', 'oración. + Esta decisión / Dicho fallo / Tal circunstancia + verbo'],
            meaning: '«Lo que» y «lo cual» retoman toda la oración anterior y van tras coma, dentro de la misma oración. Un **encapsulador nominal** (este + nombre) retoma la idea y además la **nombra**: así el lector sabe qué se retoma. Si «lo que» llega después de varias subordinadas, puede retomar cualquiera de ellas: entonces conviene el nombre.',
            examples: [
              { es: 'La arrendadora no presentó fotografías de los daños, [[lo cual|violet]] debilitó su posición.', en: '«Lo cual» sums up the whole previous clause (not presenting photos). «Su» is safe here: only one person is mentioned.' },
              { es: 'El tribunal ordenó devolver la fianza íntegra. [[Esta decisión|violet]] contradice la de primera instancia.', en: 'After a full stop, a demonstrative + noun picks up the idea and names it: “this decision”.' },
              { es: 'La jueza anuló la cláusula de penalización. [[Dicha cláusula|violet]] figuraba en letra pequeña.', en: '«Dicha» + noun belongs to legal and administrative prose; it points back to something just named.' },
            ] },
          { kind: 'tip', icon: '🔑', title: 'Queísmo y dequeísmo, según el DPD · What the DPD says', text: '**Dequeísmo**: poner «de» donde el verbo no lo pide: «*Pienso de que*», «*Me dijeron de que*», «*Es seguro de que*» son incorrectos. **Queísmo**: quitar la preposición que el verbo sí pide: «me di cuenta **de** que», «insistió **en** que», «estoy seguro **de** que». «Me alegro que» es queísmo y es muy frecuente en el habla; en un texto cuidado, «me alegro **de** que» (o «me alegra que», que es otra construcción y es correcta). Algunos verbos admiten las dos: «advertir (de) que», «avisar (de) que», «dudar (de) que». Prueba rápida: cambia la oración por «eso»: «pienso eso» → que; «me alegro de eso» → de que.', en: 'The Diccionario panhispánico de dudas calls an unwanted «de» dequeísmo and a missing required preposition queísmo. «Me alegro que» is very common in speech but careful writing uses «me alegro de que»; «me alegra que» is a different, correct construction. Swap the clause for «eso» to test.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'En un texto cuidado: «La abogada insistió ___ el plazo había vencido».', options: ['que', 'en que', 'de que'], answer: 1, why: 'Insistir **en** algo → insistió en eso → «en que». Sin preposición sería queísmo.', en: 'The lawyer insisted that the deadline had passed.' },
            { prompt: '«La arrendadora alegó daños en la cocina y en el baño, que no se probaron en el juicio, que duró dos días, lo que sorprendió a todos». ¿Qué retoma «lo que»?', options: ['No está claro: puede retomar la falta de pruebas, la duración del juicio o todo lo anterior.', 'Solo la palabra «baño».', 'Solo que el juicio durara dos días.'], answer: 0, why: 'Tras varias subordinadas, «lo que» puede retomar más de una oración. Un encapsulador nominal lo aclara: «Esta falta de pruebas sorprendió a todos».', en: 'After several clauses, «lo que» can pick up more than one of them; a noun (esta falta de pruebas) settles it.' },
          ] },
        ] },
        { title: 'Errores frecuentes y cuándo cortar · Common mistakes and when to split', mascot: '/brand/mascot/standing-crossed.webp', coach: '¿Cortar o mantener? Depende de la lógica. Split or keep? Follow the logic.', blocks: [
          { kind: 'mistakes', title: '¿Dónde está el problema? · Where is the problem?', items: [
            { wrong: 'La arrendadora llamó a la inquilina porque su hermano había dejado el piso abierto.', right: 'La arrendadora llamó a la inquilina porque el hermano de esta había dejado el piso abierto.', why: '«Su» puede ser de cualquiera de las dos. «De esta» señala a la última mencionada: la inquilina. (Pin «su» down.)' },
            { wrong: 'El abogado dijo que, si la jueza lo permite, que presentará nuevas pruebas.', right: 'El abogado dijo que, si la jueza lo permite, presentará nuevas pruebas.', why: 'Tras un inciso, la conjunción «que» no se repite. Al hablar es frecuente, pero en un texto cuidado sobra. (Don’t repeat «que» after an aside.)' },
            { wrong: 'Los vecinos opinan de que la obra fue defectuosa.', right: 'Los vecinos opinan que la obra fue defectuosa.', why: 'Dequeísmo: «opinan eso», sin «de». (No «de» here.)' },
            { wrong: 'Habló con el socio de la notaria, el cual había firmado el acta. (Firmó la notaria.)', right: 'Habló con el socio de la notaria, la cual había firmado el acta.', why: 'El relativo concuerda con su antecedente: si firmó la notaria, «la cual». «El cual» señala al socio. (Gender chooses the antecedent.)' },
            { wrong: 'El cumplimiento de las normas que aprobaron los dos ayuntamientos no fueron revisados.', right: 'El cumplimiento de las normas que aprobaron los dos ayuntamientos no fue revisado.', why: 'El núcleo del sujeto es «cumplimiento» (singular). En oraciones largas, el verbo tiende a concordar con el nombre más cercano: es un error. (Agree with the head noun.)' },
          ] },
          { kind: 'decide', title: '¿Cortar o mantener? · Split or keep?', steps: [
            { q: '¿Encuentra el lector el sujeto y el verbo principal en la primera lectura?', yes: 'next', no: 'Pospón el sujeto largo, convierte alguna relativa en participio o en «de + nombre», o divide.' },
            { q: '¿Cada pronombre, posesivo o verbo sin sujeto tiene un solo candidato?', yes: 'next', no: 'Repite el nombre, usa «esta», «la primera», «el cual» o cambia el orden.' },
            { q: '¿Las ideas están unidas por una relación lógica (causa, condición, concesión, consecuencia)?', yes: 'Mantén la oración larga: la subordinación expresa esa relación mejor que dos frases sueltas.', no: 'Divide: son afirmaciones independientes. Une las nuevas oraciones con un encapsulador («Esta decisión…»).' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«La jueza estimó el recurso porque la arrendadora no probó los daños, aunque esta había aportado un presupuesto de reparación». ¿Conviene dividirla?', options: ['Sí: «aunque» siempre debe empezar una oración nueva.', 'No: el verbo principal está al principio, «esta» tiene un solo candidato y la causa y la concesión dependen de la decisión.', 'Sí: ninguna oración debe tener más de dos verbos.'], answer: 1, why: 'La longitud no es el problema. Aquí la subordinación expresa la lógica del fallo y cada referente está claro.', en: 'Length is not the issue: the clauses express the logic of the ruling and every referent is clear.' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno cuenta, en una sola oración, una situación de su trabajo en la que intervienen dos personas del mismo género. Después comprueban juntos si cada pronombre tiene un solo candidato.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'La nota de prensa', coach: 'Toca las expresiones marcadas. Tap the marked expressions.',
      steps: [
        { title: 'En la redacción · In the editorial office', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Leonor y tu alumno es Ramiro. Después tu alumno toca cada expresión marcada y explica si es un riesgo, una solución, un núcleo o un encapsulador.', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada: ¿es un riesgo, una solución, el núcleo de la oración o un encapsulador? (Risk, fix, backbone or summing-up word?)' } },
          { kind: 'explore', title: '¿La abogada de quién?', setting: 'Jueves por la tarde, en la redacción de Cuadernos de Derecho y Sociedad. Leonor Ibarra, la editora, y Ramiro Soto, el corrector, revisan la nota de prensa sobre la sentencia de la fianza y el artículo de la profesora Clara Méndez. (Leonor, the editor-in-chief, and Ramiro, the copy editor, go over the press release and Clara Méndez’s article.)', lines: [
            { who: 'Leonor', text: 'Ramiro, la nota de prensa sale mañana a primera hora. ¿Has podido leerla?', en: 'Ramiro, the press release goes out first thing tomorrow. Have you managed to read it?' },
            { who: 'Ramiro', text: 'Sí, y la primera frase ocupa siete líneas: «[[La sentencia|blue]] que dictó el tribunal que revisó el recurso…» y el verbo, «[[establece|blue]]», aparece al final. Cuando llega, el lector ya se ha perdido.', en: 'Yes, and the first sentence runs to seven lines: “The ruling handed down by the court that reviewed the appeal…”, and the verb only turns up at the end. By then the reader is lost.' },
            { who: 'Leonor', text: 'Clara quería meterlo todo en una sola oración, [[lo cual|violet]], en un artículo académico, se entiende.', en: 'Clara wanted to fit everything into one sentence, which is understandable in an academic article.' },
            { who: 'Ramiro', text: 'En el artículo, puede ser; en una nota de prensa, no. Y hay algo peor: «La arrendadora le comunicó a la inquilina que [[su|orange]] abogada recurriría». ¿La abogada de quién?', en: 'In the article, maybe; in a press release, no. And there’s something worse: “The landlady told the tenant that her lawyer would appeal.” Whose lawyer?' },
            { who: 'Leonor', text: 'De la arrendadora, obviamente… Bueno, obvio para mí, que he leído la sentencia entera.', en: 'The landlady’s, obviously… Well, obvious to me, because I’ve read the whole ruling.' },
            { who: 'Ramiro', text: 'Justamente. Podríamos poner «que [[la abogada de la primera|teal]] recurriría», pero en prensa queda frío. Yo repetiría el nombre: «[[la abogada de la arrendadora|teal]]».', en: 'Exactly. We could write “the former’s lawyer”, but it sounds stiff in a press release. I’d repeat the noun: “the landlady’s lawyer”.' },
            { who: 'Leonor', text: 'De acuerdo: claridad antes que elegancia. ¿Qué más has encontrado?', en: 'Agreed: clarity before elegance. What else have you found?' },
            { who: 'Ramiro', text: '«Declaró el hijo de la vecina, [[la cual|teal]] había presenciado la firma». Esto sí funciona: el femenino señala a la vecina y no al hijo.', en: '“The neighbour’s son testified; she (the neighbour) had witnessed the signing.” This one works: the feminine form points to the neighbour, not to her son.' },
            { who: 'Leonor', text: 'Bien visto. ¿Y el final? «…, [[lo que|orange]], según su abogada, sienta un precedente».', en: 'Good catch. And the ending? “…, which, according to her lawyer, sets a precedent.”' },
            { who: 'Ramiro', text: 'Ese «lo que» puede retomar tres oraciones distintas. Propongo cerrar la frase y empezar otra: «Según la abogada de la inquilina, [[el fallo|violet]] sienta un precedente».', en: 'That «lo que» could refer back to three different clauses. I suggest closing the sentence and starting a new one: “According to the tenant’s lawyer, the ruling sets a precedent.”' },
            { who: 'Leonor', text: 'Perfecto. Por cierto, en el artículo Clara había escrito «la abogada insistió que el plazo había vencido», y ya lo ha cambiado por «[[insistió en que|teal]]».', en: 'Perfect. By the way, in the article Clara had written “the lawyer insisted that the deadline had passed” without «en», and she’s already corrected it.' },
            { who: 'Ramiro', text: '[[Me alegro de que|teal]] lo haya visto ella. Mañana repasamos el artículo frase por frase, buscando primero el verbo principal.', en: 'I’m glad she spotted it herself. Tomorrow we’ll go through the article sentence by sentence, looking for the main verb first.' },
          ], notes: {
            'La sentencia': 'Núcleo del sujeto. Entre «La sentencia» y su verbo hay media docena de subordinadas: el lector tiene que guardarlo todo en la memoria.',
            'establece': 'Verbo principal. Llega tan tarde que el lector ya no recuerda el sujeto. Solución: posponer el sujeto o dividir.',
            'lo cual': 'Retoma toda la oración anterior («quería meterlo todo en una sola oración»). Aquí no hay duda: solo hay una idea antes.',
            'su': 'Riesgo: «su» puede ser de la arrendadora, de la inquilina o de otra persona. El contexto no ayuda porque las dos partes son mujeres.',
            'la abogada de la primera': '«La primera» = la arrendadora, que se mencionó antes. Es correcto, pero suena administrativo; en prensa se prefiere repetir el nombre.',
            'la abogada de la arrendadora': 'Repetir el nombre siempre deshace la ambigüedad. En textos jurídicos y en prensa, la claridad pesa más que evitar repeticiones.',
            'la cual': 'El relativo «la cual» concuerda en género y número con su antecedente: solo puede ser «la vecina». Con «que», la duda seguiría.',
            'lo que': 'Riesgo: tras varias subordinadas, «lo que» puede retomar cualquiera de ellas. Un encapsulador nominal («el fallo», «esta decisión») lo aclara.',
            'el fallo': 'Encapsulador nominal: retoma la decisión del tribunal y la nombra. Permite cerrar la oración larga y empezar otra sin perder el hilo.',
            'insistió en que': 'Insistir **en** algo → «insistió en que». «Insistió que» es queísmo: frecuente al hablar, evitado en un texto cuidado.',
            'Me alegro de que': 'Alegrarse **de** algo → «me alegro de que». «Me alegro que» es queísmo según el DPD, aunque es muy frecuente en el habla. «Me alegra que» también es correcto.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Por qué le preocupa a Ramiro la primera frase de la nota?', options: ['Porque no menciona el tribunal.', 'Porque el verbo principal aparece al final, después de muchas subordinadas.', 'Porque tiene faltas de ortografía.'], answer: 1, why: 'Ramiro: «el verbo aparece al final. Cuando llega, el lector ya se ha perdido».', en: 'What worries Ramiro about the first sentence?' },
            { prompt: '¿Por qué prefiere Ramiro «la abogada de la arrendadora» a «la abogada de la primera»?', options: ['Porque «la primera» es incorrecto.', 'Porque las dos son correctas, pero repetir el nombre es más natural en prensa.', 'Porque «la primera» señalaría a la inquilina.'], answer: 1, why: 'Ramiro dice que «la primera» queda frío en prensa; prefiere repetir el nombre.', en: 'Why does Ramiro prefer repeating the noun?' },
            { prompt: '¿Por qué acepta Ramiro «el hijo de la vecina, la cual había presenciado la firma»?', options: ['Porque el femenino de «la cual» solo encaja con «la vecina».', 'Porque «la cual» siempre se refiere al primer nombre.', 'Porque es una frase corta.'], answer: 0, why: 'El género del relativo elige el antecedente: «la cual» no puede ser «el hijo».', en: 'Why is «la cual» clear here?' },
          ] },
        ] },
        { title: '¿Ambigua o clara? · Ambiguous or clear?', mascot: '/brand/mascot/kneeling.webp', coach: '¿Cuántos candidatos hay? How many candidates?', blocks: [
          { kind: 'lead', text: 'Ramiro ha subrayado varias frases del artículo de Clara. Decide si cada una deja un solo referente posible o si admite dos lecturas.', en: 'Ramiro has underlined several sentences in Clara’s article. Decide whether each one leaves only one possible referent or allows two readings.' },
          { kind: 'classify', title: 'Frases del artículo · Sentences from the article', categories: [
            { id: 'amb', label: 'AMBIGUA · dos lecturas', tone: 'orange' },
            { id: 'clara', label: 'CLARA · un solo referente', tone: 'teal' },
          ], items: [
            { text: 'Clara entrevistó a la jueza y a su secretaria.', answer: 'amb', why: '«Su secretaria» puede ser la de Clara o la de la jueza.' },
            { text: 'Clara entrevistó a la jueza y al secretario de esta.', answer: 'clara', why: '«Esta» señala al último nombre femenino: la jueza.' },
            { text: 'El abogado del vecino, el cual declaró ayer, pidió calma.', answer: 'amb', why: 'Los dos nombres son masculinos singulares: «el cual» no puede elegir. Hay que repetir el nombre o reordenar.' },
            { text: 'La hija del notario, el cual declaró ayer, pidió calma.', answer: 'clara', why: '«El cual» es masculino: solo puede ser el notario.' },
            { text: 'Cuando la arrendadora llamó a la inquilina, esta ya había dejado el piso.', answer: 'clara', why: '«Esta» retoma a la última mencionada: la inquilina.' },
            { text: 'La jueza le dijo a la fiscal que estaba de acuerdo con ella.', answer: 'amb', why: '¿Quién estaba de acuerdo con quién? El sujeto tácito de «estaba» y el pronombre «ella» admiten las dos lecturas.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: tu alumno corrige en voz alta las tres frases ambiguas, cada una con una herramienta distinta.' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Un sujeto visible, un verbo a la vista, un solo candidato. One subject, one verb, one candidate.',
      steps: [
        { title: 'Diagnostica · Diagnose', blocks: [
          { kind: 'choice', items: [
            { context: 'Acta de una reunión. (Meeting minutes.)', prompt: '«Pilar le explicó a Marta que su abogada no podría asistir a la vista». ¿Dónde está la ambigüedad?', options: ['En «vista», que tiene dos sentidos.', 'En «le … a Marta»: no se pueden usar los dos.', 'En «su»: puede ser la abogada de Pilar, la de Marta o la de otra persona.'], answer: 2, why: '«Le» junto a «a Marta» es la construcción normal. El problema es «su», que no distingue poseedores.', en: 'Doubling «le» with «a Marta» is standard Spanish; the trouble is «su».' },
            { context: 'Crónica judicial. (Court report.)', prompt: '«El abogado de la inquilina que firmó el acuerdo pidió un aplazamiento». ¿Quién firmó el acuerdo?', options: ['Solo puede ser la inquilina.', 'Cualquiera de los dos: la relativa sin comas puede ir con los dos nombres.', 'Solo puede ser el abogado.'], answer: 1, why: '«Que» no tiene género. Para aclararlo: «el abogado de la inquilina, la cual firmó…» o «el abogado que firmó el acuerdo en nombre de la inquilina».', en: 'A «que» clause after «noun + de + noun» can attach to either noun.' },
            { context: 'Novela judicial. (A courtroom novel.)', prompt: '«Cuando la jueza recibió a la fiscal, le dijo que estaba cansada». ¿Qué se puede afirmar?', options: ['Habló la jueza y la cansada era la fiscal.', 'Habló la fiscal y la cansada era la jueza.', 'No se sabe con certeza quién habló ni quién estaba cansada.'], answer: 2, why: 'Los dos verbos (dijo, estaba) tienen sujeto tácito y hay dos candidatas del mismo género. La continuidad sugiere a la jueza, pero no lo garantiza.', en: 'Both verbs have dropped subjects and there are two feminine candidates.' },
            { context: 'Informe interno. (Internal report.)', prompt: '«El informe que encargó el director al equipo que coordina la investigadora que se jubila en marzo llegó ayer». ¿Sujeto y verbo principal?', options: ['«el informe» + «llegó»', '«la investigadora» + «se jubila»', '«el director» + «encargó»'], answer: 0, why: 'Las otras dos son relativas encadenadas. Versión más legible: «Ayer llegó el informe que el director encargó al equipo de la investigadora que se jubila en marzo».', en: 'The main clause is «El informe… llegó»; the rest are stacked relative clauses.' },
            { context: 'El equipo es del alcalde. (The team is the mayor’s.)', prompt: '¿Qué versión lo deja claro?', options: ['La consejera se reunió con el alcalde y con el equipo de este.', 'La consejera se reunió con el alcalde y con el equipo del mismo.', 'La consejera se reunió con el alcalde y con su equipo.'], answer: 0, why: '«Este» señala al último nombre masculino: el alcalde. «Su» es ambiguo y «del mismo» se desaconseja como pronombre.', en: 'The councillor met the mayor and the mayor’s team.' },
          ] },
        ] },
        { title: '¿Queísmo, dequeísmo o correcta? · Missing or extra «de»?', blocks: [
          { kind: 'classify', title: 'Frases de las alegaciones · Sentences from the pleadings', categories: [
            { id: 'ok', label: 'CORRECTA', tone: 'teal' },
            { id: 'queismo', label: 'QUEÍSMO · falta la preposición', tone: 'orange' },
            { id: 'dequeismo', label: 'DEQUEÍSMO · sobra «de»', tone: 'neutral' },
          ], items: [
            { text: 'El tribunal se dio cuenta de que faltaba un documento.', answer: 'ok', why: 'Darse cuenta **de** algo → «de que».' },
            { text: 'La abogada insistió que el plazo había vencido.', answer: 'queismo', why: 'Insistir **en** algo → «insistió en que».' },
            { text: 'Los vecinos opinan de que la obra fue defectuosa.', answer: 'dequeismo', why: 'Opinar algo → «opinan eso» → «opinan que».' },
            { text: 'Me alegro que hayan llegado a un acuerdo.', answer: 'queismo', why: 'Alegrarse **de** algo → «me alegro de que». Muy frecuente al hablar, pero el DPD lo considera queísmo.' },
            { text: 'Me alegra que hayan llegado a un acuerdo.', answer: 'ok', why: 'Otra construcción: el acuerdo me alegra. Sin «de», y es correcta.' },
            { text: 'El perito advirtió de que las grietas crecerían.', answer: 'ok', why: '«Advertir» en el sentido de «avisar» admite las dos construcciones: «advirtió que» y «advirtió de que».' },
            { text: 'Es seguro de que recurrirán la sentencia.', answer: 'dequeismo', why: '«Es seguro eso» → «es seguro que». Distinto de «estoy seguro de que», que sí lleva «de».' },
          ] },
        ] },
        { title: 'Corrige la oración · Fix the sentence', blocks: [
          { kind: 'fix', items: [
            { sentence: 'La revisión de los contratos que firmaron los dos socios fueron muy lentas.', ok: false, options: ['La revisión de los contratos, que firmaron los dos socios, fueron muy lentas.', 'La revisión de los contratos que firmaron los dos socios fue muy lenta.', 'La revisión de los contratos que firmaron los dos socios fueron muy lentos.'], answer: 1, why: 'El núcleo del sujeto es «revisión»: singular y femenino. El verbo no concuerda con el nombre más cercano.' },
            { sentence: 'Hablé con la hermana del notario, el cual me confirmó la fecha.', ok: true, why: 'Correcta y clara: «el cual» es masculino y solo puede retomar a «notario». Si hubiera sido la hermana, «la cual».' },
            { sentence: 'El fiscal dijo que, como el testigo no se presentó, que pediría un aplazamiento.', ok: false, options: ['El fiscal dijo de que, como el testigo no se presentó, pediría un aplazamiento.', 'El fiscal dijo que como el testigo no se presentó que pediría un aplazamiento.', 'El fiscal dijo que, como el testigo no se presentó, pediría un aplazamiento.'], answer: 2, why: 'Tras el inciso adverbial no se repite «que». «Dijo de que» añadiría además un dequeísmo.' },
            { sentence: 'Ana le dijo a Marta que el informe de Marta tenía errores.', ok: true, why: 'Correcta. Repetir el nombre puede sonar insistente, pero deja un solo referente. En un texto jurídico es la opción más segura.' },
            { sentence: 'Estamos seguros que la sentencia se recurrirá.', ok: false, options: ['Estamos seguros de que la sentencia se recurrirá.', 'Estamos seguros en que la sentencia se recurrirá.', 'Estamos seguros, que la sentencia se recurrirá.'], answer: 0, why: 'Estar seguro **de** algo → «estamos seguros de que». Sin «de» es queísmo.' },
          ] },
        ] },
        { title: 'La nota, por chat · The release, by chat', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'chat-fill', title: 'Leonor y Ramiro corrigen la nota · Leonor and Ramiro fix the release', lines: [
            { who: 'Ramiro', text: '«La jueza escuchó a la arquitecta y a la abogada; ___ confirmó el dato». (Lo confirmó la abogada.)', options: ['aquella', 'la misma', 'esta última'], answer: 2, why: '«Esta última» = la última mencionada: la abogada. «Aquella» señalaría a la arquitecta.' },
            { who: 'Leonor', text: '«La comisión aprobó el plan de la rectora, ___ había defendido el decano». (El decano defendió el plan.)', options: ['lo cual', 'la cual', 'el cual'], answer: 2, why: '«El cual» es masculino: retoma «el plan». «La cual» señalaría a la rectora o a la comisión; «lo cual», a toda la aprobación.' },
            { who: 'Ramiro', text: '«Los vecinos se quejaron ___ la obra no cumplía la normativa».', options: ['que', 'en que', 'de que'], answer: 2, why: 'Quejarse **de** algo → «se quejaron de que». Sin «de», queísmo.' },
            { who: 'Leonor', text: 'Última frase, después de un punto: «El tribunal anuló la multa. ___ ha sorprendido a los expertos».', options: ['La misma', 'Lo cual', 'Esta decisión'], answer: 2, why: 'Tras punto, un encapsulador nominal retoma y nombra la idea. En un texto cuidado, «lo cual» va unido a la oración anterior, tras coma.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['Llegó', 'el', 'informe', 'que', 'pidió', 'la', 'presidenta', 'de', 'la', 'comisión'], accept: ['Llegó el informe que pidió la presidenta de la comisión', 'Llegó el informe que la presidenta de la comisión pidió'], en: 'The report the committee chair asked for has arrived. Start with the main verb.' },
            { tiles: ['Declaró', 'el', 'socio', 'de', 'la', 'notaria,', 'la', 'cual', 'había', 'redactado', 'el', 'acta'], accept: ['Declaró el socio de la notaria, la cual había redactado el acta'], en: 'The notary’s partner testified; she (the notary) had drawn up the record.' },
            { tiles: ['Se', 'aplazó', 'la', 'vista,', 'lo', 'que', 'retrasó', 'la', 'sentencia'], accept: ['Se aplazó la vista, lo que retrasó la sentencia'], en: 'The hearing was postponed, which delayed the ruling.' },
          ] },
        ] },
        { title: 'Reescribe con claridad · Rewrite clearly', mascot: '/autoestudio/mascot/noting.webp', blocks: [
          { kind: 'rewrite', title: 'Sin perder información · Without losing information', items: [
            { prompt: 'La jueza llamó a la fiscal cuando volvió del congreso. (Volvió la fiscal.)', instruction: 'Deshaz la ambigüedad sin cambiar el orden de los nombres; por ejemplo, con «esta».', accept: ['La jueza llamó a la fiscal cuando esta volvió del congreso', 'La jueza llamó a la fiscal cuando la fiscal volvió del congreso', 'La jueza llamó a la fiscal cuando esta última volvió del congreso'] },
            { prompt: 'El acusado que los testigos que citó la policía reconocieron negó los hechos.', instruction: 'Acerca el verbo principal al sujeto: empieza con «El acusado, al que» y convierte «que citó la policía» en un participio.', accept: ['El acusado, al que reconocieron los testigos citados por la policía, negó los hechos', 'El acusado, al que los testigos citados por la policía reconocieron, negó los hechos'] },
            { prompt: 'Me alegro que el tribunal haya aceptado el recurso.', instruction: 'Escríbela en registro formal, sin queísmo y manteniendo «me alegro».', accept: ['Me alegro de que el tribunal haya aceptado el recurso'] },
            { prompt: 'La arrendadora llamó a la inquilina y le dijo que su hermano había ocupado el piso. (El hermano es de la inquilina.)', instruction: 'Sustituye «su hermano» por «el hermano de» + un pronombre o un nombre.', accept: ['La arrendadora llamó a la inquilina y le dijo que el hermano de esta había ocupado el piso', 'La arrendadora llamó a la inquilina y le dijo que el hermano de la inquilina había ocupado el piso', 'La arrendadora llamó a la inquilina y le dijo que el hermano de esta última había ocupado el piso'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno elige una frase larga de un texto real (un contrato, una noticia, un correo de trabajo) y la reescribe en voz alta con el verbo principal a la vista y un solo candidato para cada pronombre.' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Minuto de estilo', coach: 'Escucha cómo se rescata a un lector perdido. Listen to how a lost reader gets rescued.',
      steps: [
        { title: 'El pódcast de la revista · The journal’s podcast', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: la idea general. Segunda escucha: tu alumno anota cada herramienta para desambiguar que menciona Leonor. Después, las preguntas.', self: 'Escucha una vez para la idea general y otra para anotar cada herramienta que menciona Leonor. (Note down every disambiguation tool she mentions.)' } },
          { kind: 'listen', title: 'Minuto de estilo', channel: 'PÓDCAST · CUADERNOS DE DERECHO Y SOCIEDAD · MINUTO DE ESTILO', src: '/audio/grammar-live/510.mp3',
            before: 'Leonor Ibarra graba su sección semanal sobre redacción. Hoy habla de una frase con «su». ¿Qué problema crees que va a señalar y qué soluciones propondrá? (What problem will she point out, and what fixes will she suggest?)',
            gist: { prompt: '¿Cuál es la idea general? · What is the main idea?', options: ['Leonor explica que las oraciones largas son siempre un error.', 'Leonor muestra por qué una frase es ambigua y ofrece varias formas de aclararla.', 'Leonor comenta una sentencia sobre una fianza.'], answer: 1, why: 'Parte de una frase con «su» y repasa herramientas: repetir el nombre, «la primera / la segunda», «el cual», reordenar, buscar el verbo principal.', en: 'She diagnoses an ambiguous sentence and runs through several ways to fix it.' },
            details: [
              { prompt: '¿Por qué no basta el género para aclarar «su abogado»?', options: ['Porque «su» siempre se refiere al sujeto.', 'Porque «abogado» es masculino.', 'Porque las dos personas son mujeres.'], answer: 2, why: '«Las dos son mujeres, así que el género no nos ayuda».', en: 'Why doesn’t gender help here?' },
              { prompt: '¿Cuándo sirven «la primera» y «la segunda»?', options: ['Cuando las dos personas acaban de aparecer juntas.', 'Solo en textos orales.', 'Cuando las personas tienen distinto género.'], answer: 0, why: '«Si las dos acaban de aparecer juntas, sirven “la primera” y “la segunda”».', en: 'When do “the former” and “the latter” work?' },
              { prompt: '¿Qué ejemplo da Leonor con «la cual»?', options: ['«la abogada, la cual llamó a la jueza».', '«el hermano de la arrendadora, la cual vivía en el piso».', '«la sentencia, la cual fue recurrida».'], answer: 1, why: '«La cual» solo puede ser la arrendadora: el hermano es masculino.', en: 'Which example does she give with «la cual»?' },
              { prompt: '¿Qué aconseja si hay tres o cuatro «que» seguidos?', options: ['Sustituirlos todos por «el cual».', 'Buscar el verbo principal y, si cuesta encontrarlo, dividir o usar un participio.', 'Añadir comas entre todos.'], answer: 1, why: '«Si tienen que releer para encontrarlo, dividan la oración o conviertan alguna relativa en un participio».', en: 'What does she advise for chains of «que»?' },
            ],
            transcript: 'Bienvenidos a «Minuto de estilo», la sección de Cuadernos de Derecho y Sociedad sobre escritura clara. Hoy les traigo una frase que nos llegó esta semana: «La arrendadora le comunicó a la inquilina que [[su|orange]] abogado recurriría». ¿El abogado de quién? Las dos son mujeres, así que el género no nos ayuda. Tenemos varias herramientas. La más sencilla es [[repetir el nombre|teal]]: «el abogado de la arrendadora». Si las dos acaban de aparecer juntas, sirven «[[la primera|teal]]» y «[[la segunda|teal]]», aunque suenan algo administrativas. Cuando los candidatos tienen distinto género, el relativo elige por nosotros: «el hermano de la arrendadora, [[la cual|teal]] vivía en el piso», y queda claro que quien vivía allí era ella. Y, a veces, lo mejor es reordenar y poner el sujeto delante del verbo. Un último consejo: cuando una frase encadena tres o cuatro «que», busquen [[el verbo principal|blue]]. Si tienen que releer para encontrarlo, dividan la oración o conviertan alguna relativa en un participio, [[lo cual|violet]] suele bastar. Y no tengan miedo de las oraciones largas: el problema nunca es la longitud, sino el lector que se pierde. Hasta la semana que viene.',
            reply: { teacher: 'Tú eres Leonor. Tu alumno es un oyente que le escribe al pódcast: cuenta una frase ambigua que encontró en su trabajo y propone cómo aclararla, con al menos dos herramientas distintas.', self: 'Responde a Leonor en voz alta como oyente: cuenta una frase ambigua que hayas leído y propón dos formas de aclararla. (Reply aloud with an ambiguous sentence and two fixes.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Hablar en oraciones largas', coach: 'Encadena ideas sin soltar el hilo. Link ideas without losing the thread.',
      steps: [
        { title: 'Tu experiencia · Your experience', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas. Cuando tu alumno use «su», «le» o un verbo sin sujeto con dos candidatos posibles, le preguntas «¿quién?» o «¿de quién?» para que lo aclare.', self: 'Lee cada pregunta y responde en voz alta. Después escucha tu respuesta: ¿cada «su» y cada «le» tienen un solo candidato? (Check every «su» and «le».)' } },
          { kind: 'talk', cards: [
            { q: 'Cuenta un malentendido en el que intervinieron dos personas del mismo género: quién dijo qué a quién. · Tell a misunderstanding involving two people of the same gender: who said what to whom.', followUps: ['¿En qué momento se confundieron los papeles? (When did the roles get mixed up?)', '¿Cómo lo contarías para que nadie dudara? (How would you tell it unambiguously?)'], phrases: ['Mi compañera le dijo a mi jefa que [[el proyecto de esta|teal]]…', '[[La primera|teal]]… [[la segunda|teal]]…', 'Lo que pasó fue que… [[lo cual|violet]]…'], hint: 'Cada vez que digas «su» o «le», pregúntate si hay dos candidatas.', example: 'Mi compañera Rosa le dijo a nuestra jefa: «Tu informe tiene un error», pero la jefa entendió que Rosa hablaba de su propio informe, lo cual provocó una discusión bastante absurda.', teacher: 'Si tu alumno usa «su» con dos candidatos, le preguntas «¿de quién?» y repite la frase con otra herramienta.' },
            { q: 'Explica en una sola oración, larga pero clara, un procedimiento de tu trabajo o de tus estudios. · Explain a procedure from your work or studies in one long but clear sentence.', followUps: ['¿Dónde está el verbo principal? (Where is the main verb?)', '¿Podrías decirlo en dos oraciones? ¿Ganas o pierdes algo? (Would two sentences be better?)'], phrases: ['Cuando…, [[el departamento|blue]] [[revisa|blue]]… que…', '…, [[lo cual|violet]] permite…', 'Si…, se envía…, para que…'], hint: 'Empieza por el sujeto y el verbo principal; añade las subordinadas después.', example: 'Cuando llega una solicitud, el departamento comprueba que el cliente ha firmado el contrato que le enviamos, lo cual nos permite activar el servicio en dos días.' },
            { q: 'Resume una noticia reciente con al menos tres personas o instituciones. · Summarise a recent news item involving at least three people or institutions.', followUps: ['¿Quién hizo qué exactamente? (Who did what exactly?)', '¿Qué ha cambiado después? (What changed afterwards?)'], phrases: ['[[Esta decisión|violet]] / [[Dicha medida|violet]]…', '…, el cual / la cual…', 'Según [[el portavoz de esta|teal]]…'], hint: 'Si nombras a dos instituciones del mismo género, repite el nombre en vez de usar «su».', example: 'El ayuntamiento aprobó un plan de vivienda que la asociación de vecinos había pedido durante años. Esta decisión obliga a la consejería, la cual tenía otro proyecto, a revisar el presupuesto que había previsto.', next: 'Ahora, al revés: ¿cuándo conviene cortar?' },
            { q: '¿Prefieres textos con oraciones largas o cortas? ¿Depende del género (contrato, noticia, ensayo, correo)? · Do you prefer long or short sentences? Does it depend on the genre?', followUps: ['¿Qué texto de tu vida real te costó entender por su sintaxis? (Which real text was hard to follow?)', '¿Qué harías para mejorarlo? (How would you fix it?)'], phrases: ['Depende de si las ideas están relacionadas…', 'En un contrato, [[repetir el nombre|teal]]…', 'Una oración larga funciona cuando…'], hint: 'Defiende tu postura con una oración compleja que se entienda a la primera.', example: 'Creo que depende del género: en un ensayo, una oración larga funciona cuando expresa una relación de causa o de concesión, mientras que en una noticia, que se lee deprisa, prefiero dividirla.' },
            { q: 'Cuenta algo que te alegró, algo de lo que te diste cuenta tarde y algo de lo que estás seguro o segura. · Talk about something that made you glad, something you realised late and something you are sure of.', followUps: ['¿Y algo en lo que insististe aunque nadie te creía? (Something you insisted on?)', '¿Te quejaste de algo recientemente? (Did you complain about something?)'], phrases: ['[[Me alegro de que|teal]] / Me alegra que…', '[[Me di cuenta de que|teal]]…', '[[Estoy seguro de que|teal]] / [[He insistido en que|teal]]…'], hint: 'Comprueba la preposición con «eso»: me alegro de eso → me alegro de que.', example: 'Me alegro de que mi hermana haya vuelto a la ciudad. Me di cuenta demasiado tarde de que había olvidado su cumpleaños, y estoy segura de que todavía no me lo ha perdonado.', teacher: 'Si tu alumno dice «me alegro que», le repites la frase con «de» sin interrumpir; los dos registros existen, pero el escrito cuidado pide «de».' },
            { q: 'Describe a alguien de tu familia o de tu trabajo con tres datos encadenados: quién es, qué hace y por qué es importante para ti. · Describe someone with three linked facts.', followUps: ['¿Hay otra persona del mismo género en la historia? (Is there another person of the same gender?)', '¿Cómo evitarías la confusión? (How would you avoid confusion?)'], phrases: ['…, [[quien|teal]] / [[la cual|teal]]…', '…, cuya…', '…, [[lo que|violet]] significa que…'], hint: 'Usa relativas explicativas con comas y un encapsulador al final.', example: 'Mi tía Elena, que es hermana de mi madre, dirige una escuela de música en la que estudié diez años, lo que significa que buena parte de lo que sé se lo debo a ella.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno hace las preguntas y tú respondes con alguna ambigüedad a propósito. Tu alumno la detecta y propone cómo aclararla.', self: 'Ahora responde otra vez a dos tarjetas, pero en registro escrito formal, como en un informe: usa «dicho / dicha», «esta última» y un encapsulador nominal. (Answer two cards again in a formal written register.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Reescribir sin perder nada', coach: 'Todos los datos, ninguna duda. Every fact, no doubts.',
      steps: [
        { title: 'La segunda nota de prensa · The second press release', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Después tu alumno lee su versión en voz alta y juntos comprueban que no falta ningún dato del original y que cada pronombre tiene un solo candidato.', self: 'Escribe tu versión y toca «Revisar mi texto». Después compárala con el original: ¿están todos los datos? ¿Cada «su», «le» y «que» tiene un solo candidato? (Check every fact and every referent.)' } },
          { kind: 'write', title: 'Reescribe la nota sobre la constructora · Rewrite the release about the building firm', situation: 'Eres Ramiro. Leonor te pasa esta nota para que la reescribas antes de enviarla a los medios: «El juzgado que resolvió la demanda que la comunidad de vecinos había interpuesto contra la constructora que levantó el edificio en el que residen desde 2015 condenó a esta a reparar las grietas que su perito detectó en la fachada, que, según el informe que presentó, que la empresa no rebatió, se deben a defectos de la obra, lo que obliga a la empresa a asumir un gasto que su gerente cifró en 200 000 euros, aunque dijo que recurrirá». Datos: el perito y el informe son de la comunidad; quien cifró el gasto y anunció el recurso es el gerente de la constructora. (Rewrite this press release clearly for the media, keeping every fact. The expert and the report belong to the residents’ association; the manager belongs to the building firm.)', task: [
            'Conserva todos los datos del original. (Keep every fact.)',
            'Pon el sujeto y el verbo principal de cada oración a la vista. (Make each main subject and verb easy to find.)',
            'Deshaz cada «su» y cada «que» ambiguos con una herramienta adecuada: el nombre, «esta», «dicho», «el cual / la cual». (Fix every ambiguous «su» and «que».)',
            'Usa al menos un encapsulador: «lo cual / lo que» tras coma o «este / dicho» + nombre. (Use at least one summing-up device.)',
            'Mantén la subordinación donde exprese causa, concesión o consecuencia; divide donde haya ideas independientes. (Keep subordination where it carries logic; split elsewhere.)',
          ], starters: ['El juzgado ha dado la razón a…', 'La sentencia condena a…', 'Según el informe de dicho perito, …', '…, lo cual obliga a…', 'El gerente de la constructora, quien…'],
            words: ['dicho', 'dicha', 'esta', 'este último', 'la cual', 'el cual', 'quien', 'lo cual', 'lo que', 'esta decisión', 'el fallo', 'la sentencia'],
            model: '[[El juzgado|blue]] ha dado la razón a la comunidad de vecinos, que había demandado a la constructora que levantó el edificio en el que los vecinos residen desde 2015. [[La sentencia|blue]] [[condena|blue]] a la empresa a reparar las grietas que [[el perito de la comunidad|teal]] detectó en la fachada. [[Dicho perito|teal]] concluyó en su informe, que la constructora no rebatió, que las grietas se deben a defectos de la obra, [[lo cual|violet]] obliga a la empresa a asumir un gasto que [[el gerente de la constructora|teal]] cifró en 200 000 euros. [[Dicho gerente|teal]] anunció, no obstante, que la empresa recurrirá [[el fallo|violet]].',
            minWords: 80,
            checks: [
              { label: 'Un encapsulador · a summing-up device', pattern: '(?<!\\p{L})(?:lo\\s+(?:que|cual)|(?:esta|este|dicha|dicho|tal)\\s+(?:decisión|fallo|sentencia|resolución|condena|circunstancia|gasto|informe))(?!\\p{L})', tip: 'Retoma una idea entera: «…, lo cual obliga a la empresa…» o «Esta decisión…».' },
              { label: 'Una herramienta de referencia · a referent marker', pattern: '(?<!\\p{L})(?:dich[oa]s?|est[ea]\\s+últim[oa]|(?:el|la)\\s+(?:primer[oa]?|segund[oa])|(?:el|la|los|las)\\s+cual(?:es)?|(?:el|la)\\s+(?:perito|gerente)\\s+de\\s+la\\s+(?:comunidad|constructora|empresa))(?!\\p{L})', tip: 'Deja un solo candidato: «el perito de la comunidad», «dicho perito», «la cual»…' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})(?:pienso|piensa|creo|cree|opina|opinan|dijo|afirmó|aseguró|considera|consideró)\\s+de\\s+que(?!\\p{L})', why: 'Dequeísmo: con «decir», «pensar», «opinar» o «afirmar», sin «de»: «dijo **que** recurrirá».' },
              { pattern: '(?<!\\p{L})(?:se\\s+alegr(?:a|ó|an|aron)|se\\s+dio\\s+cuenta|insisti(?:ó|eron)|est(?:á|án|aba|aban)\\s+segur[oa]s?)\\s+que(?!\\p{L})', why: 'Queísmo: alegrarse **de**, darse cuenta **de**, insistir **en**, estar seguro **de** + que.' },
              { pattern: '(?<!\\p{L})(?:del|al|de\\s+la|a\\s+la)\\s+mism[oa]s?(?=\\s*[,.;:]|\\s*$)', why: '«Del mismo / de la misma» como pronombre se desaconseja (DPD): usa el nombre, «dicho» o «de este / de esta».' },
            ] },
        ] },
      ],
    },
    {
      id: 'cerrar', label: 'Cerrar', icon: '✓', mascot: '/brand/mascot/standing.webp',
      title: 'Lo esencial', coach: '¿Qué te llevas hoy? What are you taking away today?',
      steps: [
        { title: 'Lo esencial · The essentials', blocks: [
          { kind: 'recap', items: [
            { tone: 'blue', label: 'NÚCLEO A LA VISTA', formula: 'sujeto + verbo principal pronto · sujeto largo → detrás del verbo', example: 'Llegó el informe que pidió quien dirige la comisión.', caption: 'el lector busca primero el esqueleto', en: 'readers look for the backbone first; a long subject can follow the verb' },
            { tone: 'orange', label: 'RIESGOS', formula: 'su · le · sujeto tácito · de + nombre + que · lo que tardío', example: 'Ana le dijo a Marta que su informe tenía errores.', caption: 'dos candidatos posibles = ambigüedad', en: 'any word with two possible referents makes the sentence ambiguous' },
            { tone: 'teal', label: 'SOLUCIONES', formula: 'nombre · de esta · la primera / esta última · el cual (otro género) · dicho · estilo directo · reordenar', example: 'Ana le dijo a Marta que el informe de esta tenía errores.', caption: 'deja un solo candidato con el menor peso', en: 'pick the tool that leaves a single candidate with the least clutter' },
            { tone: 'violet', label: 'ENCAPSULAR Y PREPOSICIÓN', formula: ', lo que / lo cual · Esta decisión… · me alegro de que · pienso que', example: 'El tribunal anuló la multa. Esta decisión sorprendió a todos.', caption: 'nombra la idea retomada; ni queísmo ni dequeísmo', en: 'name the idea you pick up; keep the verb’s own preposition, no more and no less' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Una oración larga es buena cuando el lector **encuentra el verbo principal** a la primera y **cada pronombre tiene un solo candidato**. Si no, no la acortes por acortar: primero aclara los referentes; después decide si la lógica (causa, concesión, consecuencia) pide mantenerla unida o si son ideas independientes que conviene separar.', en: 'A long sentence works when the reader finds the main verb straight away and every pronoun has only one candidate. Don’t shorten for the sake of it: fix the referents first, then let the logic decide whether to keep it together or split it.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { context: 'La llave era de la vecina. (The key was the neighbour’s.)', prompt: '¿Qué versión lo dice sin ambigüedad?', options: ['La portera le devolvió a la vecina la llave de esta.', 'La portera le devolvió a la vecina la llave de la misma.', 'La portera le devolvió a la vecina su llave.'], answer: 0, why: '«De esta» señala a la última mencionada: la vecina. «Su» es ambiguo y «de la misma» se desaconseja.', en: 'The caretaker gave the neighbour back her (the neighbour’s) key.' },
            { prompt: 'En un texto cuidado: «Nos dimos cuenta ___ faltaba una firma».', options: ['en que', 'de que', 'que'], answer: 1, why: 'Darse cuenta **de** algo → «de que».', en: 'We realised a signature was missing.' },
            { prompt: '«Entrevistamos al director de la fundación, ___ celebra este año su aniversario». (Celebra la fundación.)', options: ['que', 'la cual', 'el cual'], answer: 1, why: '«La cual» concuerda con «fundación». «Que» dejaría la duda; «el cual» señalaría al director.', en: 'We interviewed the director of the foundation, which is celebrating its anniversary this year.' },
            { prompt: '«La aplicación de las medidas que propusieron los expertos ___ más lenta de lo previsto».', options: ['fueran', 'fueron', 'fue'], answer: 2, why: 'El núcleo del sujeto es «aplicación», singular. «Expertos» y «medidas» están dentro de subordinadas o complementos.', en: 'Implementing the measures the experts proposed was slower than expected.' },
            { prompt: '¿Qué versión es más fácil de leer, sin perder datos?', options: ['La propuesta, que presentó el grupo, que dirige la profesora, que llegó en enero, fue aprobada.', 'La propuesta que presentó el grupo que dirige la profesora que llegó en enero fue aprobada.', 'Fue aprobada la propuesta que presentó el grupo de la profesora que llegó en enero.'], answer: 2, why: 'El verbo principal va delante y una relativa se convierte en «de + nombre». La versión con comas llena la frase de incisos que cambian el sentido.', en: 'Main verb first, and one relative clause becomes «de la profesora».' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Ahora, un resumen académico. Now, an academic abstract.', blocks: [
          { kind: 'lead', text: 'Clara Méndez prepara el resumen de un artículo para un congreso. Aplica lo que has aprendido a un registro académico.', en: 'Clara Méndez is drafting a conference abstract. Apply the class to an academic register.' },
          { kind: 'rewrite', title: 'El resumen · The abstract', items: [
            { prompt: 'El estudio compara la doctrina del Tribunal Supremo con la de la Audiencia y concluye que su criterio es más flexible. (El criterio más flexible es el de la Audiencia.)', instruction: 'Sustituye «su criterio» por una expresión con «esta» o «este último / esta última».', accept: ['El estudio compara la doctrina del Tribunal Supremo con la de la Audiencia y concluye que el criterio de esta es más flexible', 'El estudio compara la doctrina del Tribunal Supremo con la de la Audiencia y concluye que el criterio de esta última es más flexible'] },
            { prompt: 'Se analizan cuarenta sentencias. Se dictaron entre 2015 y 2024. Las sentencias revelan una tendencia clara.', instruction: 'Únelas en una sola oración con el verbo principal «revelan» y un participio. Empieza con «Las cuarenta sentencias».', accept: ['Las cuarenta sentencias analizadas, dictadas entre 2015 y 2024, revelan una tendencia clara', 'Las cuarenta sentencias dictadas entre 2015 y 2024 y analizadas en el estudio revelan una tendencia clara'] },
            { prompt: 'Los tribunales aceptan cada vez más la prueba digital. Lo cual obliga a revisar los manuales.', instruction: 'Sustituye «Lo cual» después del punto por un encapsulador nominal con «esta».', accept: ['Los tribunales aceptan cada vez más la prueba digital. Esta tendencia obliga a revisar los manuales', 'Los tribunales aceptan cada vez más la prueba digital. Esta aceptación obliga a revisar los manuales', 'Los tribunales aceptan cada vez más la prueba digital. Esta evolución obliga a revisar los manuales'] },
          ] },
        ] },
        { title: 'Ampliación · Casos más finos', mascot: '/brand/mascot/portrait.webp', coach: 'Opcional: los casos que engañan. Optional: the tricky cases.', blocks: [
          { kind: 'teacher', text: 'Paso opcional, para alumnos que quieren ir más allá o si sobra tiempo. Se puede saltar sin perder nada esencial.' },
          { kind: 'choice', title: 'Casos más finos · Finer cases', items: [
            { prompt: '«El abogado del acusado, el cual había recurrido dos veces, pidió la palabra». ¿Sirve aquí «el cual» para aclarar quién recurrió?', options: ['Sí: «el cual» siempre retoma el primer nombre.', 'No: los dos nombres son masculinos singulares. Hay que repetir el nombre o reordenar.', 'Sí: «el cual» siempre retoma el nombre más cercano.'], answer: 1, why: '«El cual» solo desambigua por género y número. Con dos masculinos, reordena: «El abogado, que ya había recurrido dos veces en nombre del acusado, pidió la palabra».', en: '«El cual» only helps when the candidates differ in gender or number.' },
            { prompt: '«Marta le enseñó a Pilar su propio contrato». ¿Qué hace «propio»?', options: ['Refuerza la lectura del poseedor más destacado (normalmente Marta, el sujeto), pero no siempre elimina la duda.', 'Garantiza que el contrato es de Pilar.', 'No cambia nada: es un error.'], answer: 0, why: '«Propio» refuerza la referencia, pero no la garantiza. En un texto jurídico, mejor «el contrato de Marta».', en: '«Propio» strengthens one reading (usually the subject) but is not a guarantee; in legal prose, name the owner.' },
            { prompt: '«Habló con el portavoz del sindicato, ___ había convocado la huelga». (La convocó el portavoz.) ¿Qué relativo deja un solo candidato?', options: ['quien', 'el cual', 'que'], answer: 0, why: '«Quien» se refiere a personas: solo puede ser el portavoz, no el sindicato. «Que» y «el cual» admiten los dos nombres, porque ambos son masculinos singulares.', en: '«Quien» refers to people, so it rules out «el sindicato»; «que» and «el cual» fit both nouns.' },
            { prompt: '¿Cuál es el uso más cuidado de «lo cual»?', options: ['La jueza aplazó la vista. Lo cual molestó a las dos partes.', 'La jueza aplazó la vista, la cual molestó a las dos partes.', 'La jueza aplazó la vista, lo cual molestó a las dos partes.'], answer: 2, why: '«Lo cual» es un relativo: va unido a su antecedente, tras coma. Tras punto, mejor «Este aplazamiento…». «La cual» retomaría solo «la vista».', en: '«Lo cual» belongs in the same sentence as what it refers to; after a full stop, use a noun such as «Este aplazamiento».' },
          ] },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 211 · Construcciones parentéticas y anacolutos controlados', text: 'Ya construyes oraciones largas en las que el lector encuentra el verbo principal y cada pronombre tiene un solo candidato. En la clase 211 trabajas con lo que interrumpe esa línea: los incisos y paréntesis que añaden un comentario, y los anacolutos, esas rupturas de la construcción que, bien controladas, dan naturalidad a un texto. Es el paso natural: para romper la sintaxis a propósito, primero hay que dominarla.', en: 'You can now write long sentences in which the reader finds the main verb and every pronoun has a single candidate. Class 211 deals with what interrupts that line: parenthetical asides and anacoluthon, the deliberate breaks in construction that, when controlled, make a text sound natural. It is the natural next step: to break syntax on purpose, you first need to master it.', href: '/gramatica/construcciones-parenteticas-y-anacolutos-controlados', label: 'Ir a la clase 211' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Qué texto de tu trabajo o de tus estudios tiene una frase en la que alguien podría entender otra persona?». Tu alumno la dice de dos maneras. Tarea: tomar un párrafo real (un contrato, una noticia, un correo) y reescribirlo con el verbo principal a la vista y un solo candidato para cada pronombre.' },
        ] },
      ],
    },
  ],
};
