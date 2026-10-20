import type { LiveLesson } from '../types';

/**
 * Lesson 525 · C2 · Discursos académicos: cautela metodológica (course unit G225).
 * Builds on G198 (lesson 498: impersonal formal style, plural of modesty, «en base a»), G173
 * (lesson 473: certainty scale, evidentiality), G191 (lesson 491: softening opinions), G194
 * (lesson 494: mechanics and punctuation of quotation) and G188 (lesson 488: nominalisation);
 * in parallel with G221 (lesson 521: subtle modalisation). Those cores are NOT re-taught.
 * C2 step: the grammar of academic Spanish (abstracts, theses, articles). Content: authorial
 * presence (se + verb: pasiva refleja «se analizaron 240 encuestas» / impersonal «se encuestó a»;
 * plural of modesty «consideramos», «en este trabajo se propone», inanimate subject «este artículo
 * analiza»; first person singular increasingly accepted, practices vary by discipline and journal;
 * consistency); hedging claims to fit the data (los datos sugieren que + ind. vs sugerir que +
 * subj. = propose; parece indicar que, podría deberse a, cabe pensar que, en la medida en que,
 * con las debidas precauciones; anchor «Los resultados parecen sugerir una correlación» as a
 * deliberate double hedge, never a triple one; asociación ≠ causa); the limitations section
 * (cabe señalar que la muestra…, deben interpretarse con cautela, no permiten generalizar, futuras
 * investigaciones podrían…); citation verbs by stance (afirma, señala, sostiene, sugiere, plantea,
 * admite / reconoce, pone en duda / cuestiona / niega que + subj., muestra / demuestra = the writer
 * endorses) and tense (present for positions, preterite for a specific finding, perfect for a body
 * of research; practices vary); «Según X» (no commitment) vs «Como han mostrado X» (commitment);
 * nominalisations used well; academic connectors (no obstante, por consiguiente, en este sentido,
 * cabe añadir, asimismo); calques: «en base a» → sobre la base de / con base en; «jugar un rol» (≠ «jugar un papel», admitido) /
 * papel» → desempeñar un papel, cumplir una función; «evidencia» = 'prueba' (English-influenced,
 * very widespread; pruebas, indicios, datos are often more precise); «asumir» = 'suponer'.
 * Ampliación: answering peer reviewers (agradecemos…, coincidimos en que…; no obstante…, tal como
 * sugiere el evaluador, se ha añadido…).
 * Scene: Santiago de Chile, an urban studies research group at a university. Doctoral student
 * Ignacio Fuentes revises the article from his thesis (survey of 240 residents in three comunas:
 * proximity to green areas and perceived well-being) with his supervisor Carolina Vera and the
 * team statistician Paula Henríquez; a reviewer has asked for more caution and a limitations
 * section. Escuchar: Carolina opens the methods seminar (es-CL-CatalinaNeural). Escribir: the
 * limitations paragraph rewritten.
 */
export const lesson: LiveLesson = {
  id: 525,
  level: 'C2',
  title: 'Discursos académicos: cautela metodológica',
  subtitle: 'Redactar resúmenes, discusiones y limitaciones con la cautela justa: presencia del autor, atenuación, verbos de cita y léxico cuidado.',
  legend: [
    { tone: 'blue', label: 'PRESENCIA DEL AUTOR · se analizaron, en este trabajo se propone, consideramos (who speaks in the text)' },
    { tone: 'teal', label: 'CAUTELA · los datos sugieren que, podría deberse a, en la medida en que, con las debidas precauciones (claims sized to the data)' },
    { tone: 'orange', label: 'CITA Y POSTURA · sostiene, admite, pone en duda, como han mostrado (reporting others with a stance)' },
    { tone: 'violet', label: 'REGISTRO CUIDADO · lo que se evita (demuestra sin pruebas, juega un rol, en base a) y su alternativa (what to avoid and what to write)' },
  ],
  optionNotes: {
    'juega': '«Jugar un papel / un rol» es un calco (del francés y del inglés) muy extendido; en un texto académico cuidado se prefiere «desempeñar un papel» o «cumplir una función».',
    'demuestran': '«Demostrar» no admite grados: presenta la conclusión como probada. Con una muestra pequeña o un diseño transversal, «sugieren» o «indican» se ajustan mejor a los datos.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Afirmar lo que los datos permiten', coach: 'Ni más ni menos de lo que dicen los datos. No more, no less than the data say.',
      steps: [
        { title: 'Un resumen demasiado seguro · An overconfident abstract', blocks: [
          { kind: 'lead', text: 'Santiago de Chile. **Ignacio Fuentes**, doctorando en estudios urbanos, encuestó a 240 vecinos de tres comunas (municipios) para estudiar si vivir cerca de un área verde se relaciona con el bienestar. Envió su artículo a una revista y un evaluador anónimo lo devolvió con una nota: «Las conclusiones exceden lo que permiten los datos». Su directora de tesis, **Carolina Vera**, y la estadística del equipo, **Paula Henríquez**, lo ayudan a revisarlo. Ya sabes escribir con estilo formal y graduar la certeza; hoy aprendes la **gramática de la prudencia académica**: quién habla en el texto, cuánto se afirma y cómo se cita a otros.', en: 'Santiago, Chile. A doctoral student surveyed 240 residents to see whether living near green areas is linked to well-being. A reviewer sent his article back: the conclusions go beyond what the data allow. You already master formal style and degrees of certainty; today you learn the grammar of academic caution: who speaks in the text, how much is claimed, and how other researchers are reported.' },
          { kind: 'guide', text: { teacher: 'Tú lees el borrador de Ignacio; tu alumno lee la versión revisada. Después tu alumno señala tres cambios y explica qué afirmación exagerada corrige cada uno.', self: 'Lee las dos versiones en voz alta y localiza tres cambios. ¿Qué exageración corrige cada uno? (Find three changes and say what overstatement each one fixes.)' } },
          { kind: 'compare', title: 'La misma conclusión, dos versiones · The same conclusion, two versions', columns: [
            { tone: 'violet', label: 'BORRADOR DE IGNACIO', sentence: 'Este estudio [[demuestra|violet]] que las áreas verdes mejoran el bienestar. Las áreas verdes [[juegan un rol clave|violet]] y, [[en base a|violet]] la evidencia, los resultados valen para toda la ciudad.', idea: 'Causa donde solo hay asociación, generalización sin muestra representativa y dos calcos.', en: 'It turns a correlation into a cause, extends the result to the whole city without a representative sample, and uses two calques. Every sentence promises more than a cross-sectional survey can deliver.' },
            { tone: 'teal', label: 'VERSIÓN REVISADA', sentence: 'Los resultados [[parecen sugerir|teal]] una asociación entre la cercanía a áreas verdes y el bienestar percibido, que [[podría deberse|teal]] en parte al ingreso. [[Sobre la base de|violet]] estos datos, [[no es posible|teal]] generalizar a toda la ciudad.', idea: 'Asociación, una causa alternativa posible y el límite de la generalización.', en: 'It reports an association, names a possible alternative cause and marks the limit of generalisation. The claim is smaller, but a reviewer can now trust it.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Por qué el evaluador rechaza «Este estudio demuestra que las áreas verdes mejoran el bienestar»?', options: ['Porque una encuesta en un solo momento muestra asociación, no causa.', 'Porque falta el nombre del autor del estudio.', 'Porque «demostrar» es un verbo informal.'], answer: 0, why: 'Con un diseño transversal se observa que dos variables van juntas; «mejoran» afirma una causa que los datos no prueban.', en: 'A one-off survey shows that two variables go together; “improve” claims a cause the data cannot prove.' },
            { prompt: '¿Qué hace «que podría deberse en parte al ingreso»?', options: ['Propone una explicación alternativa sin afirmarla.', 'Contradice la conclusión principal.', 'Pide al lector que no crea los resultados.'], answer: 0, why: 'El condicional de «poder» + «deberse a» presenta una posibilidad: el ingreso podría explicar parte de la asociación.', en: 'Podría + deberse a raises a possible alternative explanation without asserting it.' },
          ] },
        ] },
        { title: '¿Quién habla en el texto? · Who is speaking in the text?', mascot: '/brand/mascot/studying.webp', coach: 'Elige una voz y mantenla. Choose a voice and keep it.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'PRESENCIA DEL AUTOR', question: '¿Cuánto se ve a quien investiga y qué espera la disciplina?', en: 'Academic Spanish has several ways of presenting the researcher. Se constructions (pasiva refleja, impersonal se) foreground the procedure; the plural of modesty (consideramos, proponemos) presents the work as shared, even with one author; an inanimate subject (este artículo analiza) lets the text speak. First person singular is increasingly accepted, especially in the humanities and some social sciences, but conventions vary by discipline and journal. The real rule is consistency.', formula: ['se + verbo: se analizaron 240 encuestas · se encuestó a 240 vecinos', 'plural de modestia: consideramos, proponemos, en este trabajo analizamos', 'sujeto inanimado: este artículo analiza, el estudio examina, los datos indican', 'primera persona singular: argumento, propongo (según la disciplina)'],
            meaning: 'Con **se** el foco está en el procedimiento: **se analizaron** (pasiva refleja: concuerda con «las encuestas») o **se encuestó a** 240 vecinos (impersonal: con «a» + personas, el verbo va en singular). El **plural de modestia** («**consideramos** que…») presenta el trabajo como compartido aunque firme una sola persona. El **sujeto inanimado** («**este artículo analiza**…») deja hablar al texto. La **primera persona del singular** se acepta cada vez más, sobre todo en humanidades y en parte de las ciencias sociales, pero las prácticas **varían según la disciplina y la revista**. Lo que no varía: **la coherencia**.',
            examples: [
              { es: '[[Se analizaron|blue]] 240 encuestas aplicadas en tres comunas de Santiago.', en: 'Pasiva refleja: the verb agrees with the plural subject “encuestas”.' },
              { es: '[[Se encuestó a|blue]] 240 vecinos mayores de dieciocho años.', en: 'Impersonal se with “a” + people: the verb stays singular.' },
              { es: '[[En este trabajo se propone|blue]] un modelo exploratorio de la relación.', en: 'A classic formula of abstracts: the proposal belongs to the work, not to an “I”.' },
              { es: '[[Consideramos|blue]] que la cercanía, más que la superficie, es la variable relevante.', en: 'Plural of modesty: one author, a shared and modest voice.' },
            ] },
          { kind: 'table', title: 'Cuatro voces · Four voices', head: ['Recurso', 'Qué destaca', 'Ejemplo'], rows: [
            ['**se** + verbo', 'el procedimiento', '[[Se aplicó|blue]] un cuestionario de 30 preguntas.'],
            ['plural de modestia', 'un trabajo compartido, voz modesta', '[[Aplicamos|blue]] un cuestionario de 30 preguntas.'],
            ['sujeto inanimado', 'el texto o los datos', '[[Este artículo examina|blue]] la relación entre…'],
            ['primera persona singular', 'la responsabilidad individual del argumento', '[[Sostengo|blue]] que la cercanía es decisiva. (según la disciplina)'],
          ], note: 'No se mezclan sin motivo: «Apliqué un cuestionario… Consideramos que…» desconcierta al lector. Antes de escribir, conviene mirar las normas de la revista y artículos recientes de la misma disciplina.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Métodos: «___ las entrevistas con un programa de análisis cualitativo».', options: ['Se analizaron', 'Se analizaba a', 'Se analizó'], answer: 0, why: 'Pasiva refleja: el verbo concuerda con «las entrevistas» (plural). «Se analizó» no concuerda con el plural, y «se analizaba a» exige un complemento de persona y cambia el tiempo.', en: 'With a plural thing as subject, the se verb is plural.' },
            { prompt: '¿Qué fragmento mantiene una voz coherente?', options: ['Se aplicó el cuestionario en marzo y yo creo que la muestra es suficiente.', 'Aplicamos el cuestionario en marzo y consideramos que la muestra es suficiente.', 'Apliqué el cuestionario en marzo y consideramos que la muestra es suficiente.'], answer: 1, why: 'Plural de modestia de principio a fin. Las otras dos mezclan voces sin motivo.', en: 'The plural of modesty is kept throughout; the others switch voice for no reason.' },
          ] },
        ] },
        { title: 'Afirmar con cautela · Hedging claims', mascot: '/brand/mascot/speaking.webp', coach: '¿Cuánto permiten afirmar los datos? How much do the data allow?', blocks: [
          { kind: 'concept', tone: 'teal', label: 'LA CAUTELA ACADÉMICA', question: '¿La afirmación tiene el tamaño de los datos?', en: 'Hedging is not weakness: it sizes a claim to its evidence. Spanish uses reporting verbs whose subject is the data (sugieren, indican, apuntan a), parecer + infinitive, modal conditionals (podría deberse a, cabría pensar que), and limiting phrases (en la medida en que, al menos en esta muestra, con las debidas precauciones). One or two well-placed hedges convince; three in a row make the writer sound unsure of everything.', formula: ['los datos sugieren / indican / apuntan a que + INDICATIVO', 'parece indicar que + ind. · cabe pensar que + ind. · es posible que + SUBJUNTIVO', 'podría deberse a · cabría pensar que · podría desempeñar un papel', 'en la medida en que · al menos en esta muestra · con las debidas precauciones'],
            meaning: 'La cautela **ajusta la afirmación a los datos**. El sujeto de la afirmación pasa a ser el dato («**los resultados sugieren que** existe…», con **indicativo**: se informa de una inferencia), y el verbo se modaliza: **parecer** + infinitivo, **poder** en condicional («**podría deberse a**»), **cabe / cabría pensar que**. Las expresiones **limitadoras** fijan el alcance: **en la medida en que** («solo es generalizable **en la medida en que** la muestra **sea** representativa»), **al menos en esta muestra**, **con las debidas precauciones**. La frase ancla, «Los resultados **parecen sugerir** una correlación», es una **doble cautela**: algunos manuales la consideran redundante, pero es legítima si se quiere marcar una prudencia mayor. Una tercera capa ya sobra.',
            examples: [
              { es: 'Los resultados [[parecen sugerir|teal]] una correlación.', en: 'The anchor: a deliberate double hedge for a modest, exploratory result.' },
              { es: 'Los datos [[sugieren que|teal]] la cercanía influye más que la superficie del parque.', en: 'Sugerir = point to: the data suggest something is the case, so the indicative follows.' },
              { es: 'La diferencia entre comunas [[podría deberse a|teal]] factores socioeconómicos.', en: 'A possible cause offered without asserting it.' },
              { es: 'Los hallazgos son extrapolables solo [[en la medida en que|teal]] la muestra sea representativa.', en: 'A limiting condition: subjunctive, because representativeness is not established.' },
            ] },
          { kind: 'compare', title: '«Sugerir que»: dos verbos en uno · Two verbs in one', columns: [
            { tone: 'teal', label: 'SUGERIR = INDICAR (inferencia)', sentence: 'Los datos [[sugieren que|teal]] existe una asociación moderada.', idea: 'Sujeto: un dato. Se informa de lo que parece ser cierto → indicativo.', en: 'When the subject is evidence, sugerir means “point to”: it reports a likely fact, so the indicative follows.' },
            { tone: 'orange', label: 'SUGERIR = PROPONER (influencia)', sentence: 'El evaluador [[sugiere que|orange]] se amplíe la muestra.', idea: 'Sujeto: una persona que recomienda. Se pide algo → subjuntivo.', en: 'When a person suggests that something be done, it is a request, so the subjunctive follows.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Los resultados sugieren que el ruido ___ en la percepción del barrio».', options: ['influye', 'influyera', 'influya'], answer: 0, why: 'El sujeto es un dato y «sugerir» equivale a «indicar»: se informa de una inferencia, con indicativo.', en: 'Evidence + sugerir = indicate: indicative.' },
            { prompt: '¿Qué versión dosifica mejor la cautela?', options: ['Los datos sugieren una relación moderada.', 'Los datos podrían quizá parecer sugerir una posible relación.', 'Los datos demuestran una relación.'], answer: 0, why: 'Una sola marca de cautela (sugieren) y un dato concreto (moderada). «Podrían quizá parecer sugerir una posible» acumula cuatro atenuadores; «demuestran» afirma una prueba que no existe.', en: 'One hedge and one concrete qualifier; the over-hedged version piles up four softeners, and “demuestran” overclaims.' },
          ] },
        ] },
        { title: 'Citar con postura · Reporting with a stance', mascot: '/autoestudio/mascot/noting.webp', coach: 'El verbo de cita también opina. The reporting verb takes a position too.', blocks: [
          { kind: 'table', title: 'Verbos de cita y lo que dicen de ti · Reporting verbs and what they say about you', head: ['Verbo', 'Postura', 'Modo', 'Ejemplo'], rows: [
            ['afirma, señala, indica, observa', 'neutra: informa de lo que dice el autor', 'indicativo', 'López (2019) [[señala|orange]] que el uso de las plazas aumenta en verano.'],
            ['sostiene, defiende, argumenta', 'el autor defiende una tesis discutible', 'indicativo', 'Saavedra (2020) [[sostiene|orange]] que los parques reducen el estrés.'],
            ['sugiere, plantea, propone (como hipótesis)', 'tentativa: el autor no lo da por probado', 'ind. (inferencia) / subj. (propuesta)', 'López (2019) [[plantea|orange]] la posibilidad de que el efecto dependa del tamaño.'],
            ['admite, reconoce', 'concesión: algo en contra de su propia tesis', 'indicativo', 'Ruiz y Ortega (2021) [[admiten|orange]] que su muestra excluye zonas rurales.'],
            ['pone en duda, cuestiona, niega', 'el autor rechaza o duda', '**subjuntivo**', 'Morales (2018) [[pone en duda que|orange]] la relación sea causal.'],
            ['muestra, demuestra, pone de manifiesto', 'quien escribe asume la conclusión como cierta', 'indicativo', 'Ruiz y Ortega (2021) [[muestran|orange]] que el ruido afecta al sueño.'],
          ], note: '«Plantear la posibilidad de que» va con subjuntivo porque presenta algo no afirmado. Con «niega que», el subjuntivo es lo habitual. Elegir «demuestra» en lugar de «sostiene» no es un cambio de estilo: compromete a quien escribe.' },
          { kind: 'concept', tone: 'orange', label: 'TIEMPO Y FÓRMULA DE LA CITA', question: '¿Presentas una postura, un hallazgo concreto o una línea de investigación?', en: 'Tense in reporting follows what you present: the present for an author’s position, still part of the debate (sostiene); the preterite for what a particular study did or found (encontró); the present perfect for a body of research up to now (han mostrado). Conventions vary by discipline and style guide, so stay consistent. Según X attributes without committing you; como + verb (como han mostrado…) presents the content as accepted, so you share the responsibility.', formula: ['presente: López (2019) sostiene que… · Según López (2019), …', 'pretérito: Saavedra (2020) encontró que… (un estudio concreto)', 'perfecto: Como han mostrado diversos estudios (Ruiz y Ortega, 2021; Saavedra, 2020), …', 'según X = atribución sin compromiso · como + verbo = lo asumes'],
            meaning: 'El **presente** presenta la postura de un autor como parte viva del debate («López (2019) **sostiene**…»); el **pretérito** cuenta lo que hizo o encontró un estudio concreto («Saavedra (2020) **encontró** que…»); el **perfecto** resume una línea de investigación hasta hoy («**Como han mostrado** diversos estudios…»). Las prácticas varían según la disciplina y el manual de estilo: lo importante es ser coherente. Además, **según X** atribuye sin comprometerte, mientras que **como** + verbo presenta el contenido como aceptado: quien escribe lo hace suyo.',
            examples: [
              { es: '[[Según|orange]] López (2019), el uso de las plazas depende de la iluminación.', en: 'Attribution only: you neither accept nor reject the claim.' },
              { es: '[[Como han mostrado|orange]] diversos estudios, la exposición al ruido afecta al descanso.', en: 'You present the finding as established and take it on board.' },
              { es: 'Saavedra (2020) [[encontró|orange]] una relación débil en una muestra de cuarenta personas.', en: 'Preterite for what one specific study found.' },
            ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Quieres citar a Saavedra sin hacer tuya su conclusión. ¿Qué escribes?', options: ['Saavedra (2020) sostiene que los parques reducen el estrés.', 'Como ha mostrado Saavedra (2020), los parques reducen el estrés.', 'Como demuestra Saavedra (2020), los parques reducen el estrés.'], answer: 0, why: '«Sostiene» atribuye la tesis al autor. Con «como demuestra / como ha mostrado», quien escribe asume la conclusión.', en: 'Sostiene attributes the thesis; “como + demuestra / ha mostrado” makes you endorse it.' },
            { prompt: '«Morales (2018) cuestiona que el efecto ___ independiente del ingreso».', options: ['será', 'es', 'sea'], answer: 2, why: '«Cuestionar que», como «poner en duda que», presenta el contenido como no aceptado: subjuntivo.', en: 'Verbs of doubt or rejection take the subjunctive.' },
          ] },
        ] },
        { title: 'Limitaciones, conectores y nominalización · Limitations, connectors, nominalisation', mascot: '/brand/mascot/seated.webp', coach: 'Reconocer límites da credibilidad. Admitting limits builds trust.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'LA SECCIÓN DE LIMITACIONES', question: '¿Qué no permiten afirmar tus datos, y por qué?', en: 'A limitations section is not a confession: it tells readers exactly how far the findings go. It names each limitation (sample, design, measurement), states its consequence (cannot be generalised, cannot establish causality) and closes by pointing to future work in the conditional. Academic connectors organise it: por consiguiente for consequences, no obstante to recover what remains valid, asimismo or cabe añadir que to add a point.', formula: ['nombrar: cabe señalar que la muestra… · una limitación de este estudio es…', 'consecuencia: por consiguiente, los resultados no pueden generalizarse…', 'recuperar: no obstante, la coincidencia con estudios previos…', 'abrir: futuras investigaciones podrían incorporar…'],
            meaning: 'La sección de limitaciones dice **hasta dónde llegan** los resultados. Se **nombra** cada límite («**Cabe señalar que** la muestra se obtuvo por conveniencia»), se dice su **consecuencia** («**por consiguiente**, los resultados no pueden generalizarse») y se cierra con lo que sigue siendo válido («**No obstante**, …») y una propuesta en condicional («**Futuras investigaciones podrían**…»). **En este sentido** retoma la idea anterior para precisarla; **asimismo** y **cabe añadir que** suman un punto. La **nominalización** bien usada condensa sin vaciar: «**El aumento de la cobertura vegetal** se asocia con una menor percepción de estrés» es denso y preciso; «se procedió a la realización del análisis» solo alarga.',
            examples: [
              { es: '[[Cabe señalar que|teal]] la muestra se obtuvo por conveniencia en tres comunas.', en: 'Naming the limitation with an impersonal formula and the indicative.' },
              { es: '[[Por consiguiente|teal]], los resultados no pueden generalizarse a toda la ciudad.', en: 'The consequence, introduced by a formal consequence connector.' },
              { es: '[[No obstante|teal]], la coincidencia con estudios previos refuerza la plausibilidad de la asociación.', en: 'Recovering what remains valid, with a nominalisation that carries real content.' },
            ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«La muestra no es aleatoria; ___, los resultados deben considerarse exploratorios».', options: ['en cambio', 'no obstante', 'por consiguiente'], answer: 2, why: 'Lo segundo es consecuencia de lo primero: «por consiguiente». «No obstante» y «en cambio» oponen ideas.', en: 'A consequence connector is needed.' },
            { prompt: '¿Qué nominalización condensa información útil?', options: ['Se procedió a la realización de una medición.', 'La realización de la medición fue realizada.', 'La reducción del ruido nocturno se asocia con un mejor descanso.'], answer: 2, why: 'El sustantivo «reducción» lleva contenido (qué se reduce y cuándo). Las otras dos son relleno.', en: 'The noun carries content; the others pad the sentence.' },
          ] },
        ] },
        { title: 'Calcos y errores frecuentes · Calques and frequent mistakes', mascot: '/brand/mascot/kneeling.webp', coach: 'Revisa antes de enviar. Check before you submit.', blocks: [
          { kind: 'table', title: 'Calcos frecuentes en textos académicos · Frequent calques in academic writing', head: ['Calco', 'En un texto cuidado', 'Comentario'], rows: [
            ['**en base a**', '[[sobre la base de|violet]], [[con base en|violet]], a partir de, según', 'El DPD (RAE) lo desaconseja; ya lo viste en la clase 198.'],
            ['**jugar un rol**', '[[desempeñar un papel|violet]], cumplir una función', 'Calco muy extendido; los manuales de estilo recomiendan la alternativa. «Jugar un papel» está asentado y se admite, aunque en textos académicos se prefiere «desempeñar».'],
            ['**evidencia** = prueba', '[[pruebas|violet]], indicios, datos', 'Sentido influido por el inglés «evidence», hoy muy extendido. En español, «evidencia» es sobre todo certeza clara: «evidencias débiles» suena contradictorio.'],
            ['**asumir** = suponer', '[[suponer|violet]], partir del supuesto de que', 'El DPD lo considera calco del inglés. «Asumir» = hacerse cargo, aceptar es correcto.'],
          ], note: 'Son usos muy frecuentes, también entre especialistas; no hacen incomprensible un texto, pero un evaluador atento los nota. La opción cuidada suele ser además más precisa.' },
          { kind: 'mistakes', title: '¿Qué falla? · What goes wrong?', items: [
            { wrong: 'Los resultados demuestran que los parques mejoran el bienestar.', right: 'Los resultados sugieren una asociación entre la cercanía a parques y el bienestar.', why: 'Un estudio transversal no demuestra causas: hay que ajustar el verbo y la relación.' },
            { wrong: 'Los datos sugieren que exista una relación moderada.', right: 'Los datos sugieren que existe una relación moderada.', why: 'Con un dato como sujeto, «sugerir» = indicar: indicativo.' },
            { wrong: 'Morales (2018) pone en duda que la relación es causal.', right: 'Morales (2018) pone en duda que la relación sea causal.', why: '«Poner en duda que» presenta el contenido como no aceptado: subjuntivo.' },
            { wrong: 'Este estudio podría quizás posiblemente sugerir una relación.', right: 'Este estudio sugiere una posible relación.', why: 'Acumular cautelas no da rigor: da inseguridad. Una o dos bastan.' },
            { wrong: 'La diferencia podría deber al ingreso.', right: 'La diferencia podría deberse al ingreso.', why: '«Deberse a» = tener por causa. «Deber a» es «tener una deuda con».' },
            { wrong: 'Apliqué el cuestionario y consideramos que la muestra es suficiente.', right: 'Aplicamos el cuestionario y consideramos que la muestra es suficiente.', why: 'Mezcla de primera persona singular y plural de modestia sin motivo.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué frase evita los dos calcos?', options: ['En base a las entrevistas, la plaza juega un rol central.', 'Sobre la base de las entrevistas, la plaza parece desempeñar un papel central.', 'En base a las entrevistas, la plaza parece desempeñar un papel central.'], answer: 1, why: '«Sobre la base de» y «desempeñar un papel»; además, «parece» ajusta la afirmación a unas entrevistas.', en: 'Both calques replaced, and the claim is hedged.' },
            { prompt: '«Partimos del supuesto de que los participantes respondieron con sinceridad». ¿Qué calco evita?', options: ['«Jugar un papel».', '«Asumimos que» con el sentido de «suponemos».', '«En base a».'], answer: 1, why: '«Asumir» con el sentido de «suponer» es un calco del inglés que el DPD desaconseja.', en: 'It avoids asumir in the English sense of “assume”.' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno toma un texto académico que conozca (un resumen, un informe, un trabajo de clase) y busca una afirmación que podría atenuarse y un verbo de cita que revele una postura.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'La revisión del artículo', coach: 'Toca las expresiones marcadas. Tap the marked expressions.',
      steps: [
        { title: 'Antes de reenviar · Before resubmitting', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Carolina y Paula; tu alumno es Ignacio. Después tu alumno toca cada expresión marcada y explica qué afirma, qué atenúa o qué postura revela.', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada y explica qué afirma, qué atenúa o qué postura revela.' } },
          { kind: 'explore', title: 'Las observaciones del evaluador', setting: 'Jueves por la tarde, en la sala del núcleo de investigación. Carolina, Paula e Ignacio revisan el artículo con las observaciones del evaluador impresas sobre la mesa.', lines: [
            { who: 'Carolina', text: 'Ignacio, la primera frase del resumen ya me preocupa: «Este estudio [[demuestra|violet]] que las áreas verdes mejoran el bienestar».', en: 'Ignacio, the first sentence of the abstract already worries me: “This study proves that green areas improve well-being.”' },
            { who: 'Ignacio', text: 'Pero es lo que salió, profesora. La correlación es clarísima.', en: 'But that’s what we found. The correlation is crystal clear.' },
            { who: 'Carolina', text: 'Es clara en tu muestra. Con una encuesta transversal no puedes hablar de causa. Yo escribiría: «Los resultados [[parecen sugerir|teal]] una asociación entre la cercanía a áreas verdes y el bienestar percibido».', en: 'It’s clear in your sample. With a cross-sectional survey you can’t talk about causes. I’d write that the results seem to suggest an association.' },
            { who: 'Ignacio', text: '¿«Parecen sugerir»? ¿No queda demasiado tímido?', en: '“Seem to suggest”? Isn’t that too timid?' },
            { who: 'Carolina', text: 'Es una doble cautela, y aquí está justificada: el estudio es exploratorio. Lo que no haría es añadir una tercera.', en: 'It’s a double hedge, and here it’s justified: the study is exploratory. What I wouldn’t do is add a third one.' },
            { who: 'Paula', text: 'En métodos pusiste «yo apliqué el cuestionario». En esta revista [[se suele escribir|blue]] «[[se aplicó|blue]] un cuestionario» o «[[aplicamos|blue]]».', en: 'In the methods section you wrote “I administered the questionnaire”. This journal usually expects an impersonal se or “we”.' },
            { who: 'Ignacio', text: 'Pero lo apliqué yo solo, puerta por puerta.', en: 'But I administered it myself, door to door.' },
            { who: 'Carolina', text: 'Nadie lo duda. El [[plural de modestia|blue]] no engaña: es una convención. En otras disciplinas la primera persona se acepta cada vez más; mira las normas de la revista y sé coherente.', en: 'Nobody doubts it. The plural of modesty isn’t a lie; it’s a convention. Other fields increasingly accept “I”; check the journal’s guidelines and be consistent.' },
            { who: 'Ignacio', text: 'De acuerdo. ¿Y la discusión? Puse que Saavedra (2020) demuestra lo mismo que yo.', en: 'OK. And the discussion? I wrote that Saavedra (2020) proves the same as I do.' },
            { who: 'Paula', text: '¿Lo demuestra o lo [[sostiene|orange]]? Su muestra era de cuarenta personas. Si escribes que lo demuestra, haces tuya su conclusión. Y fíjate en que [[admite|orange]] que no controló el ingreso.', en: 'Does he prove it or argue it? His sample was forty people. If you write “proves”, you take his conclusion on as your own. And notice he admits he didn’t control for income.' },
            { who: 'Carolina', text: 'Tampoco me convence «las áreas verdes [[juegan un rol clave|violet]] [[en base a la evidencia|violet]]». Prueba con «[[podrían desempeñar un papel|violet]] relevante» y «[[sobre la base de estos datos|violet]]».', en: 'Nor am I keen on “green areas play a key role based on the evidence”. Try “could play a relevant role” and “on the basis of these data”.' },
            { who: 'Ignacio', text: 'Entonces, en limitaciones: «[[En la medida en que|teal]] la muestra no es aleatoria, estos resultados [[deben interpretarse con cautela|teal]]».', en: 'So, in the limitations section: “Since the sample is not random, these results should be interpreted with caution.”' },
          ], notes: {
            'demuestra': '**Afirmación excesiva**: «demostrar» presenta una causa como probada. Una encuesta transversal solo permite hablar de asociación.',
            'parecen sugerir': '**Doble cautela** (la frase ancla): «parecer» + «sugerir». Legítima en un estudio exploratorio; una tercera capa ya sería excesiva.',
            'se suele escribir': '**Convención de la revista**, dicha con un impersonal: no es una regla de la lengua, sino del género y de la publicación.',
            'se aplicó': '**Pasiva refleja**: el foco está en el procedimiento (un cuestionario), no en quien lo aplicó.',
            'aplicamos': '**Plural de modestia**: una sola persona, voz compartida y modesta. Alternativa a «se aplicó».',
            'plural de modestia': '**Término técnico**: el «nosotros» de un autor que escribe solo. Es una convención, no una mentira; las prácticas varían por disciplina.',
            'sostiene': '**Verbo de cita con distancia**: atribuye la tesis a Saavedra sin que Ignacio la haga suya. Va con indicativo.',
            'admite': '**Verbo de concesión**: Saavedra reconoce una debilidad de su propio estudio. Va con indicativo (no controló).',
            'juegan un rol clave': '**Calco** muy extendido («to play a role», «jouer un rôle») y además una afirmación fuerte («clave»).',
            'en base a la evidencia': '**Dos calcos**: «en base a» (desaconsejado por el DPD) y «evidencia» con el sentido de «prueba», influido por el inglés.',
            'podrían desempeñar un papel': '**Alternativa cuidada y atenuada**: «desempeñar un papel» en lugar del calco, y el condicional de «poder» para ajustar la afirmación.',
            'sobre la base de estos datos': '**Alternativa recomendada** a «en base a»; además, «estos datos» es más preciso que «la evidencia».',
            'En la medida en que': '**Locución limitadora**: aquí con valor causal (= puesto que), con indicativo porque el hecho es seguro. Con un supuesto no confirmado iría con subjuntivo.',
            'deben interpretarse con cautela': '**Fórmula de limitaciones**: impersonal con «se» (interpretarse) y una advertencia explícita al lector.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Por qué acepta Carolina «parecen sugerir»?', options: ['Porque el estudio es exploratorio y la doble cautela está justificada.', 'Porque el evaluador se lo exigió literalmente.', 'Porque es la única forma correcta de escribir un resumen.'], answer: 0, why: '«Es una doble cautela, y aquí está justificada: el estudio es exploratorio». Pero no admitiría una tercera.', en: 'Why does Carolina accept the double hedge? Because the study is exploratory.' },
            { prompt: '¿Qué problema ve Paula en «Saavedra (2020) demuestra»?', options: ['Que el año de la cita está mal.', 'Que Saavedra no estudió áreas verdes.', 'Que Ignacio haría suya una conclusión basada en cuarenta personas.'], answer: 2, why: '«Si escribes que lo demuestra, haces tuya su conclusión», y la muestra era pequeña.', en: 'Choosing “demuestra” would make Ignacio endorse a conclusion drawn from a small sample.' },
            { prompt: '¿Qué dice Carolina sobre la primera persona del singular?', options: ['Que es obligatoria cuando el autor trabaja solo.', 'Que se acepta cada vez más en otras disciplinas, y que hay que seguir las normas de la revista.', 'Que es siempre incorrecta en textos académicos.'], answer: 1, why: 'Las prácticas varían por disciplina; lo decisivo es la revista y la coherencia.', en: 'Practices vary by field; what matters is the journal’s guidelines and consistency.' },
          ] },
        ] },
        { title: 'El resto del resumen · The rest of the abstract', mascot: '/brand/mascot/seated.webp', coach: '¿Prudente o excesiva? Measured or overstated?', blocks: [
          { kind: 'classify', title: 'Frases del artículo de Ignacio · Sentences from Ignacio’s article', categories: [
            { id: 'ok', label: 'Afirmación ajustada a los datos', tone: 'teal' },
            { id: 'fix', label: 'Afirma más de lo que puede (o usa un calco)', tone: 'violet' },
          ], items: [
            { text: 'Se encuestó a 240 vecinos de tres comunas de Santiago.', answer: 'ok', why: 'Describe el procedimiento con un impersonal y datos concretos.' },
            { text: 'Los resultados prueban que el bienestar depende de los parques.', answer: 'fix', why: '«Prueban» y «depende» afirman una causa: el diseño solo permite hablar de asociación.' },
            { text: 'La asociación podría deberse, al menos en parte, al ingreso de los hogares.', answer: 'ok', why: 'Explicación alternativa en condicional y limitada con «al menos en parte».' },
            { text: 'Estos hallazgos son válidos para cualquier ciudad latinoamericana.', answer: 'fix', why: 'Generalización sin base: la muestra es de tres comunas y no es aleatoria.' },
            { text: 'Ruiz y Ortega (2021) reconocen que su muestra excluye las zonas rurales.', answer: 'ok', why: 'Verbo de concesión bien elegido: los autores admiten un límite propio.' },
            { text: 'Las evidencias juegan un rol fundamental en esta discusión.', answer: 'fix', why: 'Dos calcos: «evidencias» por «datos / pruebas» y «jugar un rol» por «desempeñar un papel».' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: tu alumno compara cómo se escribe un resumen en su campo de estudio o de trabajo (¿primera persona?, ¿impersonal?, ¿cuánta cautela?) con lo que propone la revista de Ignacio.' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Voz, cautela, postura y léxico. Voice, caution, stance, vocabulary.',
      steps: [
        { title: 'Elige el verbo de cita · Choose the reporting verb', blocks: [
          { kind: 'choice', items: [
            { context: 'Estado de la cuestión. Saavedra defiende una tesis que otros discuten. (Literature review.)', prompt: '«Saavedra (2020) ___ que los parques reducen el estrés, aunque su muestra es reducida».', options: ['sostiene', 'demuestra', 'pone en duda'], answer: 0, why: '«Sostiene» atribuye una tesis discutible sin que quien escribe la asuma; «demuestra» la haría suya, y «pone en duda» invierte la postura.', en: 'Sostiene reports a debatable thesis without endorsing it.' },
            { context: 'Los autores señalan un límite de su propio trabajo. (The authors flag a weakness of their own study.)', prompt: '«Ruiz y Ortega (2021) ___ que su muestra no incluye zonas rurales».', options: ['demuestran', 'admiten', 'ponen en duda'], answer: 1, why: 'Reconocer una debilidad propia es una concesión: «admiten» o «reconocen».', en: 'Acknowledging a weakness in one’s own work calls for a concessive verb.' },
            { context: 'Morales discute la tesis causal. (Morales disputes the causal claim.)', prompt: '«Morales (2018) ___ que la relación sea causal: a su juicio, el ingreso explica ambas variables».', options: ['pone en duda', 'afirma', 'demuestra'], answer: 0, why: 'El subjuntivo «sea» y el contexto («a su juicio, el ingreso explica…») piden un verbo de duda: «pone en duda que».', en: 'The subjunctive and the context call for a verb of doubt.' },
            { context: 'Quien escribe asume el hallazgo como establecido. (You accept the finding.)', prompt: '«Como ___ varios estudios longitudinales, la exposición al ruido afecta al sueño».', options: ['ponen en duda', 'han mostrado', 'niegan'], answer: 1, why: '«Como han mostrado» presenta el contenido como aceptado; con «niegan» o «ponen en duda» la frase se contradice.', en: 'Como + factive verb presents the finding as established.' },
            { context: 'López deja una hipótesis abierta. (López leaves a hypothesis open.)', prompt: '«López (2019) ___ que la relación podría depender del tamaño del parque, y deja la cuestión abierta».', options: ['demuestra', 'sugiere', 'admite'], answer: 1, why: '«Sugiere» es tentativo, coherente con «podría» y «deja la cuestión abierta». «Admite» implicaría una concesión.', en: 'A tentative verb for a hypothesis left open.' },
          ] },
        ] },
        { title: '¿Indicativo o subjuntivo? · Indicative or subjunctive?', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'classify', title: '¿Qué modo pide el hueco? · Which mood does the gap need?', categories: [
            { id: 'ind', label: 'Indicativo: se informa o se infiere', tone: 'teal' },
            { id: 'subj', label: 'Subjuntivo: se propone, se duda o se presenta como posible', tone: 'orange' },
          ], items: [
            { text: 'Los datos sugieren que la cercanía … (influir) en el bienestar.', answer: 'ind', why: 'Dato como sujeto: «sugerir» = indicar → influye.' },
            { text: 'El evaluador sugiere que … (ampliarse) la muestra.', answer: 'subj', why: 'Una persona propone algo: «sugerir» = proponer → se amplíe.' },
            { text: 'Morales pone en duda que el efecto … (ser) causal.', answer: 'subj', why: 'Verbo de duda → sea.' },
            { text: 'Saavedra sostiene que los parques … (reducir) el estrés.', answer: 'ind', why: '«Sostener» transmite una afirmación → reducen.' },
            { text: 'Es posible que el ingreso … (explicar) parte de la asociación.', answer: 'subj', why: '«Es posible que» presenta algo como posible → explique.' },
            { text: 'Los resultados parecen indicar que la relación … (existir).', answer: 'ind', why: '«Parece indicar que» informa de una inferencia → existe.' },
          ] },
        ] },
        { title: 'Revisa el manuscrito · Check the manuscript', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Los resultados demuestran que los parques mejoran el bienestar.', ok: false, options: ['Los resultados sugieren una asociación entre la cercanía a parques y el bienestar.', 'Los resultados demuestran sin duda que los parques mejoran el bienestar.', 'Los resultados podrían quizás posiblemente sugerir algo.'], answer: 0, why: 'Asociación, no causa, y una sola cautela. «Demuestran sin duda» refuerza el exceso; «podrían quizás posiblemente sugerir algo» se vuelve vacía.' },
            { sentence: 'La cercanía a áreas verdes juega un rol clave en el bienestar.', ok: false, options: ['La cercanía a áreas verdes podría desempeñar un papel relevante en el bienestar.', 'La cercanía a áreas verdes hace un rol clave en el bienestar.', 'La cercanía a áreas verdes juega un papel clave en el bienestar.'], answer: 0, why: '«Desempeñar un papel» evita el calco, y «podría… relevante» ajusta la fuerza. «Juega un papel» mantiene el calco.' },
            { sentence: 'En base a estos datos, se propone un modelo explicativo.', ok: false, options: ['En base de estos datos, se propone un modelo explicativo.', 'Sobre la base de estos datos, se propone un modelo explicativo.', 'A base a estos datos, se propone un modelo explicativo.'], answer: 1, why: 'El DPD desaconseja «en base a»; «sobre la base de» o «con base en» son las alternativas.' },
            { sentence: 'Cabe señalar que la muestra no es representativa de toda la ciudad.', ok: true, why: 'Correcta: fórmula impersonal de limitación con indicativo, porque se afirma un hecho.' },
            { sentence: 'Asumimos que los participantes respondieron con sinceridad.', ok: false, options: ['Asumimos de que los participantes respondieron con sinceridad.', 'Partimos del supuesto de que los participantes respondieron con sinceridad.', 'Asumimos que los participantes respondieran con sinceridad.'], answer: 1, why: '«Asumir» con el sentido de «suponer» es un calco del inglés; «partir del supuesto de que» o «suponemos que» lo evitan. «Asumimos de que» añade dequeísmo.' },
            { sentence: 'Hay evidencias débiles de que el ruido influye en el bienestar.', ok: false, options: ['Hay indicios débiles de que el ruido influye en el bienestar.', 'Hay evidencias débiles que el ruido influye en el bienestar.', 'Hay evidencias débiles en que el ruido influye en el bienestar.'], answer: 0, why: '«Evidencia» es sobre todo certeza clara, así que «evidencias débiles» choca; «indicios» es preciso. Las otras dos opciones rompen el régimen «de que».' },
          ] },
        ] },
        { title: 'La sección de limitaciones · The limitations section', blocks: [
          { kind: 'chat-fill', title: 'Carolina e Ignacio redactan juntos · Carolina and Ignacio draft together', lines: [
            { who: 'Ignacio', text: 'Empiezo con el muestreo: «___ que la muestra se obtuvo por conveniencia en tres comunas».', options: ['Cabe señalar de', 'Se demuestra', 'Cabe señalar'], answer: 2, why: '«Cabe señalar que» + indicativo nombra un límite. «Cabe señalar de que» sería dequeísmo.' },
            { who: 'Carolina', text: 'Bien. Ahora la consecuencia: «___, los resultados no pueden generalizarse a toda la ciudad».', options: ['Asimismo', 'Por consiguiente', 'No obstante'], answer: 1, why: 'La imposibilidad de generalizar se sigue del muestreo: conector de consecuencia.' },
            { who: 'Ignacio', text: 'Y la causa alternativa: «La asociación ___ al nivel de ingreso de los hogares».', options: ['podría deber', 'podría deberse', 'se debe seguramente sin duda'], answer: 1, why: '«Deberse a» = tener por causa, en condicional para atenuar. «Deber a» significa tener una deuda; «seguramente sin duda» mezcla probabilidad y certeza y no atenúa nada.' },
            { who: 'Carolina', text: 'Ahora recupera lo que sí vale: «___, la coincidencia con estudios previos refuerza la plausibilidad de la asociación».', options: ['Por consiguiente', 'No obstante', 'En suma'], answer: 1, why: 'Se opone a las limitaciones anteriores: conector contraargumentativo.' },
            { who: 'Ignacio', text: 'Y cierro: «Futuras investigaciones ___ incorporar un diseño longitudinal».', options: ['demostrarán', 'deben de', 'podrían'], answer: 2, why: 'Propuesta modesta en condicional. «Deben de» expresa probabilidad, no recomendación; «demostrarán» promete un resultado.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['Los', 'resultados', 'parecen', 'sugerir', 'una', 'asociación', 'moderada.'], accept: ['Los resultados parecen sugerir una asociación moderada.'], en: 'The results seem to suggest a moderate association: the anchor’s double hedge.' },
            { tiles: ['En', 'este', 'trabajo', 'se', 'propone', 'un', 'modelo', 'exploratorio.'], accept: ['En este trabajo se propone un modelo exploratorio.', 'Se propone en este trabajo un modelo exploratorio.'], en: 'This paper proposes an exploratory model: the classic impersonal formula of abstracts.' },
            { tiles: ['Estos', 'datos', 'deben', 'interpretarse', 'con', 'las', 'debidas', 'precauciones.'], accept: ['Estos datos deben interpretarse con las debidas precauciones.'], en: 'These data should be interpreted with due caution.' },
          ] },
        ] },
        { title: 'Atenúa el resumen · Hedge the abstract', blocks: [
          { kind: 'rewrite', title: 'Del exceso a la cautela · From overstatement to caution', items: [
            { prompt: 'Los parques mejoran el bienestar de los vecinos.', instruction: 'Empieza con «Los resultados sugieren que» y cambia «mejoran el» por «se asocian con un mayor». (Hedge and turn the cause into an association.)', accept: ['Los resultados sugieren que los parques se asocian con un mayor bienestar de los vecinos.', 'Los resultados sugieren que los parques se asocian con un mayor bienestar entre los vecinos.'] },
            { prompt: 'La diferencia se debe al ingreso de los hogares.', instruction: 'Usa el condicional de «poder» con «deberse». (Use podría + deberse.)', accept: ['La diferencia podría deberse al ingreso de los hogares.', 'La diferencia se podría deber al ingreso de los hogares.', 'La diferencia podría deberse en parte al ingreso de los hogares.'] },
            { prompt: 'Saavedra (2020) demuestra que el ruido aumenta el estrés.', instruction: 'Toma distancia: cambia el verbo de cita por «sostiene». (Report without endorsing.)', accept: ['Saavedra (2020) sostiene que el ruido aumenta el estrés.'] },
            { prompt: 'Estos resultados se pueden generalizar a toda la ciudad.', instruction: 'Limítalo con «solo en la medida en que la muestra sea representativa». (Add the limiting condition.)', accept: ['Estos resultados solo se pueden generalizar a toda la ciudad en la medida en que la muestra sea representativa.', 'Estos resultados se pueden generalizar a toda la ciudad solo en la medida en que la muestra sea representativa.', 'Estos resultados solo pueden generalizarse a toda la ciudad en la medida en que la muestra sea representativa.', 'Estos resultados pueden generalizarse a toda la ciudad solo en la medida en que la muestra sea representativa.'] },
            { prompt: 'Yo analicé las entrevistas con un programa de análisis cualitativo.', instruction: 'Pásalo a pasiva refleja con «se». (Use the se passive.)', accept: ['Se analizaron las entrevistas con un programa de análisis cualitativo.', 'Las entrevistas se analizaron con un programa de análisis cualitativo.'] },
          ] },
          { kind: 'teacher', text: 'Si sobra tiempo: tu alumno escribe en una sola frase el resultado principal de un estudio real o imaginado de su campo y lo formula tres veces: con exceso de seguridad, con la cautela justa y con exceso de cautela.' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'El seminario de metodología', coach: 'Primero la idea general, luego los matices. First the gist, then the nuances.',
      steps: [
        { title: 'Lo que permiten afirmar los datos · What the data allow you to claim', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: la idea general. Segunda escucha: tu alumno anota cada expresión con la que Carolina atenúa una afirmación o marca una postura al citar. Después, las preguntas.', self: 'Escucha una vez para la idea general y otra para los matices. Anota cada expresión con la que Carolina atenúa una afirmación o marca una postura al citar.' } },
          { kind: 'listen', title: 'Apertura del seminario de metodología', channel: 'NÚCLEO DE ESTUDIOS URBANOS · SEMINARIO DE METODOLOGÍA · CAROLINA VERA', src: '/audio/grammar-live/525.mp3',
            before: 'Carolina abre el seminario de metodología de los doctorandos con el caso del artículo de Ignacio. ¿Qué crees que va a criticar y qué va a recomendar? (Carolina opens the doctoral methods seminar with Ignacio’s article. What do you think she will criticise and recommend?)',
            gist: { prompt: '¿Cuál es la idea central de la intervención?', options: ['Que las afirmaciones deben ajustarse a lo que permiten los datos, también al citar y al reconocer límites.', 'Que Ignacio debe repetir la encuesta antes de publicar.', 'Que los estudios transversales no tienen valor científico.'], answer: 0, why: 'Critica el «demuestran», explica qué permite el diseño, cómo citar y para qué sirve la sección de limitaciones.', en: 'What is the central idea of her talk?' },
            details: [
              { prompt: '¿Por qué los datos de Ignacio no prueban una causa?', options: ['Porque los vecinos no respondieron con sinceridad.', 'Porque el diseño es transversal y la muestra no es aleatoria.', 'Porque la encuesta tenía demasiadas preguntas.'], answer: 1, why: '«El diseño es transversal y la muestra no es aleatoria».', en: 'Why can’t Ignacio’s data prove a cause?' },
              { prompt: '¿Qué factor alternativo menciona Carolina?', options: ['El tamaño de los parques.', 'El ingreso de los hogares.', 'La edad de los vecinos.'], answer: 1, why: '«La asociación podría deberse a otros factores, como el ingreso de los hogares».', en: 'Which alternative factor does she mention?' },
              { prompt: 'Según Carolina, ¿qué cambia si escribes que Saavedra «demuestra» en vez de «sostiene»?', options: ['Quien firma el artículo asume esa conclusión como propia.', 'La cita deja de necesitar el año.', 'Nada: son sinónimos en un artículo.'], answer: 0, why: '«En el segundo caso, quien firma el artículo asume esa conclusión como propia».', en: 'What changes with “demuestra” instead of “sostiene”?' },
              { prompt: '¿Cómo define Carolina la sección de limitaciones?', options: ['Como un apartado opcional que los evaluadores no leen.', 'Como el lugar donde se explica qué permiten afirmar los datos y qué no.', 'Como una confesión de los errores del autor.'], answer: 1, why: '«No es una confesión. Es el lugar donde se explica qué permiten afirmar los datos y qué no».', en: 'How does she define the limitations section?' },
            ],
            transcript: 'Buenos días a todos. Hoy quiero dedicar la sesión a una frase que aparece en casi todos los borradores que recibo: «los resultados demuestran que…». Pensemos en el artículo de Ignacio, que varios de ustedes ya leyeron. [[Se encuestó a|blue]] doscientos cuarenta vecinos de tres comunas, y los datos [[sugieren que|teal]] quienes viven cerca de un área verde declaran un mayor bienestar. ¿Demuestran que el parque causa ese bienestar? No. El diseño es transversal y la muestra no es aleatoria, de modo que la asociación [[podría deberse a|teal]] otros factores, como el ingreso de los hogares. Eso no le resta valor al trabajo: [[en la medida en que|teal]] los resultados coinciden con los de estudios anteriores, [[cabe pensar que|teal]] la relación existe, pero hay que formularla [[con las debidas precauciones|teal]]. Fíjense, además, en cómo citamos. No es lo mismo escribir que Saavedra [[sostiene|orange]] que los parques reducen el estrés que escribir que lo [[demuestra|orange]]: en el segundo caso, quien firma el artículo asume esa conclusión como propia. Y una última observación: la sección de limitaciones no es una confesión. Es el lugar donde [[se explica|blue]] qué permiten afirmar los datos y qué no. Un evaluador confía más en un artículo que reconoce sus límites que en uno que lo promete todo. Nos vemos el jueves.',
            reply: { teacher: 'Tú eres un doctorando que llegó tarde al seminario. Tu alumno te resume en cuatro o cinco frases lo que dijo Carolina, con al menos una expresión de cautela y un verbo de cita bien elegido.', self: 'Resume la intervención en cuatro o cinco frases para un compañero que llegó tarde: usa al menos una expresión de cautela y un verbo de cita bien elegido.' } },
          { kind: 'tip', icon: '🔊', title: 'Asumir, en su sentido propio · “Asumir” in its own sense', text: 'Carolina dice que quien firma «**asume** esa conclusión como propia»: aquí «asumir» significa **hacerse cargo, aceptar**, su sentido tradicional en español, y es perfectamente correcto. Lo que el DPD desaconseja es «asumir» con el sentido de **suponer** («Asumimos que los datos son fiables»).', en: 'Here asumir means “to take on, to accept responsibility for”, its traditional Spanish sense, and it is perfectly correct. What the Academy’s guide advises against is asumir meaning “to suppose”, a calque of English “assume”.' },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Defender un trabajo con prudencia', coach: '¿Qué permiten afirmar tus datos? What do your data let you claim?',
      steps: [
        { title: 'Ante el tribunal y entre colegas · Before the panel and among colleagues', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas y las de seguimiento. Si tu alumno afirma más de lo que puede, tú preguntas «¿lo demuestran o lo sugieren?»; si acumula cautelas, «¿qué afirmas exactamente?». Tu alumno reformula.', self: 'Lee la situación y responde en voz alta. Antes de hablar, decide: ¿qué afirmo, con qué grado de cautela y con qué verbo cito a otros?' } },
          { kind: 'talk', cards: [
            { q: 'Presentas ante un tribunal el resultado principal de un estudio (tuyo, real o imaginado) en tres frases: resultado, alcance y una limitación. · Present a study’s main finding, its scope and one limitation.', followUps: ['¿Tus datos permiten hablar de causa? (Can you talk about causes?)', '¿A quién no se pueden generalizar los resultados? (Who can’t you generalise to?)', '¿Qué haría falta para confirmarlo? (What would confirm it?)'], phrases: ['[[Los resultados sugieren que|teal]]…', '[[En este trabajo se propone|blue]]…', '[[Cabe señalar que|teal]] la muestra…', '[[con las debidas precauciones|teal]]'], hint: 'Resultado con una cautela, alcance limitado y una limitación con su consecuencia.', example: 'En este trabajo se analizan las opiniones de 120 docentes de secundaria sobre la evaluación por proyectos. Los resultados sugieren que quienes recibieron formación específica la valoran más positivamente. Cabe señalar, sin embargo, que la muestra procede de una sola región, por lo que estos datos deben interpretarse con las debidas precauciones.' },
            { q: 'Eres evaluador o evaluadora. Un colega escribe «los datos demuestran que el teletrabajo aumenta la productividad», con una encuesta a 60 personas. Formula tu observación con cortesía. · Give a peer reviewer’s comment on an overclaim.', followUps: ['¿Qué verbo le propones? (Which verb do you suggest?)', '¿Qué causa alternativa podría haber? (Alternative cause?)', '¿Qué le pides que añada? (What should be added?)'], phrases: ['[[Se sugiere que|orange]] el autor…', 'La afirmación [[excede|violet]] lo que permiten los datos…', '[[podría deberse a|teal]]…', 'Convendría añadir…'], hint: 'Sugerir = proponer → subjuntivo. Nombra la causa alternativa con condicional.', example: 'La conclusión excede lo que permiten los datos: una encuesta a sesenta personas no permite establecer una relación causal. La mayor productividad declarada podría deberse, por ejemplo, al tipo de tarea. Se sugiere que el autor sustituya «demuestran» por «sugieren» y que añada un párrafo sobre las limitaciones de la muestra.' },
            { q: 'Resume lo que dicen dos autores sobre un tema que conozcas: uno con el que estás de acuerdo y otro de cuya tesis dudas. · Report two authors: one you endorse, one you keep at a distance.', followUps: ['¿Qué verbo usas para el que te convence? (For the one you endorse?)', '¿Y para el que no? (For the one you doubt?)', '¿Alguno admite una debilidad? (Does anyone concede a weakness?)'], phrases: ['[[Como ha mostrado|orange]]…', '[[Según|orange]]…', '… [[sostiene|orange]] que…, aunque [[admite|orange]] que…', '… [[pone en duda que|orange]] + subjuntivo'], hint: '«Como ha mostrado» = lo asumes; «sostiene» o «según» = atribuyes; «pone en duda que» + subjuntivo.', example: 'Como ha mostrado Gómez (2018), el aprendizaje de vocabulario mejora con la repetición espaciada. Herrera (2021), en cambio, sostiene que el factor decisivo es la motivación, aunque admite que su estudio incluyó solo a estudiantes universitarios. Yo pondría en duda que la motivación explique por sí sola los resultados.' },
            { q: 'Eres Carolina. Ignacio te pregunta por qué aceptas «parecen sugerir» pero no «podría quizás parecer sugerir», y si puede escribir en primera persona del singular. Explícaselo. · Explain the right dose of hedging and the choice of voice.', followUps: ['¿Cuándo está justificada una doble cautela? (When is a double hedge justified?)', '¿Qué efecto produce el exceso de cautela? (Effect of over-hedging?)', '¿Qué se usa en tu disciplina? (What is used in your field?)'], phrases: ['Una doble cautela [[está justificada|teal]] cuando…', 'El exceso de cautela…', 'Depende de la disciplina y de [[las normas de la revista|blue]]…', 'Lo importante es ser coherente…'], hint: 'Una o dos cautelas ajustan; tres diluyen. La voz depende de la disciplina; la coherencia, no.', example: 'Una doble cautela está justificada cuando el estudio es exploratorio y quieres dejar claro que no afirmas una causa. Pero si añades «podría» y «quizás», el lector ya no sabe qué piensas. Sobre la primera persona: en humanidades es cada vez más frecuente; en tu revista se prefiere el impersonal o el plural. Elige una voz y mantenla.' },
            { q: '¿Cómo se escribe un texto académico en tu lengua? Compáralo con el español: voz del autor, cautela, verbos de cita, calcos. · Compare academic writing in your language with Spanish.', followUps: ['¿Se usa «yo» o «nosotros»? (I or we?)', '¿Qué calco del inglés oyes en tu entorno? (Which calques from English do you hear?)', '¿Qué te parece más difícil del español académico? (What is hardest?)'], phrases: ['En mi lengua [[se suele|blue]]…', 'En español académico, en cambio…', 'Un calco frecuente es…', 'Me cuesta elegir entre…'], hint: 'Compara con ejemplos concretos; usa al menos un impersonal y una cautela.', example: 'En inglés académico, en muchas disciplinas, se usa «we» incluso con un solo autor, y la cautela es muy frecuente: «may», «suggest». En español académico, en cambio, se suele preferir el impersonal con «se» en métodos. Un calco frecuente es «jugar un rol»; me cuesta, además, no traducir «evidence» siempre como «evidencia».', next: 'En la clase 226 pasarás a otro discurso especializado: la sintaxis densa de los textos jurídicos y administrativos.' },
          ], swap: { teacher: 'Al final cambian los papeles: tu alumno es Carolina y tú eres Ignacio. Tú lees tres frases exageradas o con calcos; tu alumno las reformula con la cautela justa y explica cada cambio.', self: 'Ahora eres Carolina: escribe tres frases exageradas o con calcos y reformúlalas en voz alta con la cautela justa, explicando cada cambio.' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Reescribir las limitaciones', coach: 'Nombra el límite, di su consecuencia, recupera lo que vale. Name it, give its consequence, keep what holds.',
      steps: [
        { title: 'Tu párrafo de limitaciones · Your limitations paragraph', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos: ¿cada limitación tiene su consecuencia? ¿La conclusión está atenuada sin exceso? ¿Queda algún calco? Después tu alumno lee el párrafo como si fuera el evaluador.', self: 'Escribe tu párrafo y toca «Revisar mi texto». Después repásalo: ¿cada limitación tiene su consecuencia? ¿La conclusión está atenuada sin exceso? ¿Queda algún calco?' } },
          { kind: 'write', title: 'Limitaciones del estudio · Limitations of the study', situation: 'El evaluador pide a Ignacio «una sección de limitaciones honesta y una conclusión más prudente». Este es su borrador: «Este estudio demuestra claramente que las áreas verdes juegan un rol clave en el bienestar. Yo hice la encuesta en tres comunas y, en base a la evidencia, se puede decir que los resultados valen para todo Santiago. Puede haber algún problema con la muestra, pero no importa mucho». Reescríbelo para la versión final del artículo. (Rewrite Ignacio’s limitations paragraph for the reviewer: honest about limits, cautious in its conclusion.)', task: [
            'Mantén una voz coherente: impersonal con «se» o plural de modestia, sin «yo». (Consistent voice, as the journal expects.)',
            'Nombra al menos dos limitaciones (muestra, diseño, medición) y di la consecuencia de cada una. (Two limitations and their consequences.)',
            'Atenúa la conclusión principal: sugieren, podría, en la medida en que, con las debidas precauciones… (Hedge the main claim, without over-hedging.)',
            'Usa al menos dos conectores académicos: por consiguiente, no obstante, en este sentido, cabe añadir, asimismo. (Two academic connectors.)',
            'Sustituye los calcos («juegan un rol», «en base a», «evidencia») y termina con una propuesta para futuras investigaciones. (Replace calques; close with future research.)',
          ], starters: ['Los resultados de este trabajo deben interpretarse…', 'En primer lugar, cabe señalar que…', 'Por consiguiente, …', 'No obstante, en la medida en que…', 'Futuras investigaciones podrían…'], words: ['muestra por conveniencia', 'diseño transversal', 'relación causal', 'autoinforme', 'sesgo', 'generalizarse', 'bienestar percibido', 'desempeñar un papel', 'sobre la base de', 'diseño longitudinal'],
            model: 'Los resultados de este trabajo deben interpretarse con las debidas precauciones. En primer lugar, cabe señalar que la muestra se obtuvo por conveniencia en tres comunas de Santiago y no es representativa de la población de la ciudad. Por consiguiente, los hallazgos no pueden generalizarse sin más a otros contextos urbanos. En segundo lugar, el diseño transversal no permite establecer relaciones causales: la asociación observada entre la cercanía a áreas verdes y el bienestar percibido podría deberse, al menos en parte, a otros factores, como el ingreso de los hogares. Cabe añadir que el bienestar se midió mediante autoinforme, lo que introduce un posible sesgo de deseabilidad social. No obstante, en la medida en que estos resultados coinciden con los de estudios previos, sugieren que la cercanía a áreas verdes podría desempeñar un papel relevante en el bienestar de los vecinos. Futuras investigaciones podrían incorporar un diseño longitudinal y una muestra probabilística.',
            minWords: 120,
            checks: [
              { label: 'Una limitación nombrada (cabe señalar que, una limitación, la muestra…)', pattern: '(?<!\\p{L})(?:cabe\\s+(?:señalar|mencionar|destacar|reconocer)|limitaci[óo]n(?:es)?|la\\s+muestra)(?!\\p{L})', tip: 'Escribe, por ejemplo: «Cabe señalar que la muestra se obtuvo por conveniencia».' },
              { label: 'Una marca de cautela (sugieren, podría, con las debidas precauciones…)', pattern: '(?<!\\p{L})(?:sugier\\p{L}*|podr[íi]an?|cabr[íi]a|parece[n]?\\s+indicar|apunta[n]?\\s+a|con\\s+(?:las\\s+debidas\\s+)?(?:precauciones|cautela))(?!\\p{L})', tip: 'Escribe, por ejemplo: «Los resultados sugieren que…» o «podría deberse a…».' },
              { label: 'Un conector académico (por consiguiente, no obstante, en este sentido, cabe añadir, asimismo)', pattern: '(?<!\\p{L})(?:por\\s+consiguiente|no\\s+obstante|en\\s+este\\s+sentido|cabe\\s+añadir|asimismo|por\\s+tanto|sin\\s+embargo)(?!\\p{L})', tip: 'Escribe, por ejemplo: «Por consiguiente, los hallazgos no pueden generalizarse».' },
              { label: 'Una propuesta para futuras investigaciones', pattern: '(?<!\\p{L})(?:futur[oa]s\\s+(?:investigaciones|estudios|trabajos)|en\\s+el\\s+futuro|investigaciones\\s+posteriores)(?!\\p{L})', tip: 'Escribe, por ejemplo: «Futuras investigaciones podrían incorporar un diseño longitudinal».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})demuestra(?:n)?(?!\\p{L})', why: '¿Tus datos lo demuestran? Con este diseño, «sugieren» o «indican» se ajustan mejor.' },
              { pattern: '(?<!\\p{L})(?:juega[n]?|jugar)\\s+un\\s+(?:rol|papel)(?!\\p{L})', why: 'Calco: en un texto académico cuidado, «desempeñar un papel» o «cumplir una función».' },
              { pattern: '(?<!\\p{L})en\\s+base\\s+a(?!\\p{L})', why: 'El DPD desaconseja «en base a»: usa «sobre la base de» o «con base en».' },
              { pattern: '(?<!\\p{L})evidencias?(?!\\p{L})', why: '¿«Evidencia» con el sentido de «prueba»? En un texto cuidado, «pruebas», «indicios» o «datos» suelen ser más precisos.' },
              { pattern: '(?<!\\p{L})yo(?!\\p{L})', why: 'Esta revista prefiere el impersonal o el plural de modestia: mantén una sola voz.' },
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
            { tone: 'blue', label: 'PRESENCIA DEL AUTOR', formula: 'se analizaron · se encuestó a · consideramos · este artículo examina · (yo, según la disciplina)', example: 'Se encuestó a 240 vecinos. · En este trabajo se propone un modelo exploratorio.', caption: 'una voz, de principio a fin', en: 'Se constructions, the plural of modesty or an inanimate subject; first person singular where the field accepts it. Whatever you choose, keep it.' },
            { tone: 'teal', label: 'CAUTELA', formula: 'los datos sugieren que + ind. · podría deberse a · en la medida en que · con las debidas precauciones', example: 'Los resultados parecen sugerir una correlación que podría deberse en parte al ingreso.', caption: 'el tamaño justo de la afirmación', en: 'Size each claim to its evidence: association rather than cause, one or two hedges rather than none or four.' },
            { tone: 'orange', label: 'CITA Y POSTURA', formula: 'afirma / sostiene / admite que + ind. · pone en duda que + subj. · según X ≠ como ha mostrado X', example: 'Saavedra (2020) sostiene que…, aunque admite que… · Morales (2018) pone en duda que sea causal.', caption: 'el verbo de cita también opina', en: 'Reporting verbs carry stance: sostiene attributes, admite concedes, pone en duda rejects (with subjunctive), and demuestra or como ha mostrado commit you.' },
            { tone: 'violet', label: 'REGISTRO CUIDADO', formula: 'en base a → sobre la base de · jugar un rol → desempeñar un papel · evidencia → pruebas, indicios · asumir → suponer', example: 'Sobre la base de estos datos, la cercanía podría desempeñar un papel relevante.', caption: 'calcos fuera', en: 'Widespread calques are understood, but careful academic Spanish replaces them, and the alternative is usually more precise.' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Antes de enviar un texto académico, tres preguntas: **¿quién habla?** (una voz coherente); **¿cuánto permiten afirmar mis datos?** (asociación o causa, alcance de la muestra, una o dos cautelas bien puestas); **¿qué postura tomo al citar?** (sostiene, admite, pone en duda o como ha mostrado). Reconocer límites no debilita un trabajo: lo hace creíble.', en: 'Three questions before submitting: who is speaking (one consistent voice)? How much do my data allow me to claim (association or cause, sample scope, one or two well-placed hedges)? What stance am I taking when I cite? Acknowledging limits does not weaken a paper; it makes it credible.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/portrait.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: '«Los datos ___ que existe una relación moderada entre ambas variables».', options: ['sugieren', 'sugieran', 'demuestren'], answer: 0, why: 'Un dato como sujeto: «sugerir» = indicar, en indicativo.', en: '“The data suggest there is a moderate relationship.”' },
            { prompt: '«El comité editorial sugiere que el autor ___ la discusión».', options: ['reduzca', 'reduciría', 'reduce'], answer: 0, why: 'Una persona propone algo: «sugerir» = proponer, con subjuntivo.', en: '“The editorial board suggests that the author shorten the discussion.”' },
            { prompt: 'Quieres presentar el hallazgo de Ruiz (2021) como establecido y hacerlo tuyo. ¿Qué escribes?', options: ['Ruiz (2021) pone en duda que el ruido afecte al sueño.', 'Como ha mostrado Ruiz (2021), el ruido afecta al sueño.', 'Según Ruiz (2021), el ruido afecta al sueño.'], answer: 1, why: '«Como ha mostrado» compromete a quien escribe; «según» solo atribuye.', en: '“As Ruiz (2021) has shown…”: you endorse the finding.' },
            { prompt: '«La cercanía al metro ___ un papel importante en la elección de vivienda».', options: ['desempeña', 'hace', 'juega'], answer: 0, why: '«Desempeñar un papel» es la opción cuidada; «jugar un papel» es un calco extendido y «hacer un papel» significa otra cosa.', en: '“Plays an important role”, in careful academic Spanish.' },
            { prompt: '«La muestra es pequeña; ___, los resultados deben considerarse exploratorios».', options: ['en cambio', 'por consiguiente', 'no obstante'], answer: 1, why: 'Consecuencia de lo anterior: «por consiguiente».', en: '“The sample is small; consequently, the results should be considered exploratory.”' },
          ] },
        ] },
        { title: 'Otra situación · A new situation', mascot: '/autoestudio/mascot/noting.webp', blocks: [
          { kind: 'lead', text: 'Madrid, España. **Lucía Arranz**, profesora de didáctica, revisa el resumen que un estudiante de máster quiere enviar a un congreso de educación. Las mismas decisiones, en otra disciplina.', en: 'Madrid, Spain. A teacher-education lecturer checks the abstract a master’s student wants to send to an education conference. The same decisions, in another field.' },
          { kind: 'rewrite', title: 'El resumen del congreso · The conference abstract', items: [
            { prompt: 'Los resultados demuestran que el método mejora la comprensión lectora.', instruction: 'Atenúa con «sugieren que» y el condicional de «poder». (Hedge with sugieren que + podría.)', accept: ['Los resultados sugieren que el método podría mejorar la comprensión lectora.'] },
            { prompt: 'García (2017) duda de la utilidad de los deberes.', instruction: 'Usa «pone en duda que» + subjuntivo de «ser útiles». (Use pone en duda que + subjunctive.)', accept: ['García (2017) pone en duda que los deberes sean útiles.'] },
            { prompt: 'En base a las entrevistas, se concluye que el tutor juega un rol central.', instruction: 'Corrige los dos calcos con «sobre la base de» y «desempeña un papel». (Fix both calques.)', accept: ['Sobre la base de las entrevistas, se concluye que el tutor desempeña un papel central.'] },
          ] },
        ] },
        { title: 'Ampliación: responder a los evaluadores · Extension: replying to reviewers', mascot: '/brand/mascot/studying.webp', coach: 'Opcional: otro género académico. Optional: another academic genre.', blocks: [
          { kind: 'lead', text: 'Cuando un artículo vuelve con observaciones, se responde en una **carta a los evaluadores**: se agradece cada observación («**Agradecemos** al evaluador esta observación»), se informa de lo cambiado con impersonal y perfecto («**Se ha añadido** un párrafo sobre…») y, si no se está de acuerdo, se concede antes de discrepar («**Coincidimos con** el evaluador **en que** la muestra es limitada; **no obstante**, consideramos que…»). La cautela aquí protege la relación tanto como la afirmación.', en: 'When an article comes back with comments, authors reply in a letter to the reviewers: thank each comment, report each change with an impersonal se and the present perfect, and concede before disagreeing. Here caution protects the relationship as much as the claim.' },
          { kind: 'choice', title: 'Elige la forma · Choose the form', items: [
            { prompt: 'Observación del evaluador 2: «Se sugiere que se ___ el ingreso como variable de control».', options: ['incluirá', 'incluye', 'incluya'], answer: 2, why: 'El evaluador propone un cambio: «sugerir» = proponer, con subjuntivo.', en: 'A reviewer’s proposal takes the subjunctive.' },
            { prompt: 'Respuesta: «Coincidimos con el evaluador en que la muestra es limitada; ___, consideramos que permite explorar la asociación».', options: ['por consiguiente', 'en suma', 'no obstante'], answer: 2, why: 'Se concede y luego se discrepa: conector contraargumentativo.', en: 'Concede, then disagree politely.' },
            { prompt: 'Respuesta: «Tal como sugiere el evaluador, ___ un párrafo sobre las limitaciones del muestreo».', options: ['se añada', 'se hayan añadido', 'se ha añadido'], answer: 2, why: 'Se informa de un cambio ya hecho en la nueva versión: impersonal en perfecto, indicativo.', en: 'Reporting a change already made: se + present perfect.' },
          ] },
          { kind: 'teacher', text: 'Paso opcional, para alumnos fuertes o si sobra tiempo. Extra: tu alumno redacta la respuesta a una observación real o inventada sobre un trabajo suyo, en tres frases: agradece, concede y explica qué se ha cambiado o por qué no.' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 226 · Discursos jurídicos y administrativos: sintaxis densa', text: 'Hoy has ajustado cada afirmación a sus datos y cada cita a tu postura. El paso natural es **otro discurso especializado** con una gramática propia: el jurídico y administrativo, donde la precisión no se consigue atenuando sino encadenando condiciones, remisiones y fórmulas fijas («De conformidad con lo dispuesto en la cláusula…»).', en: 'Today you sized each claim to its data and each citation to your stance. The natural next step is another specialised discourse with its own grammar: legal and administrative Spanish, where precision comes not from hedging but from chaining conditions, cross-references and fixed formulas.', href: '/gramatica/discursos-juridicos-y-administrativos-sintaxis-densa', label: 'Ir a la clase 226' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Por qué Carolina acepta “parecen sugerir” pero rechaza “demuestra”?». Respuesta esperada: la doble cautela se ajusta a un estudio exploratorio y transversal; «demuestra» afirma una causa que esos datos no pueden probar.' },
        ] },
      ],
    },
  ],
};
