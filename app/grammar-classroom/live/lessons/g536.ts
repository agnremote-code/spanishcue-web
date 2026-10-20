import type { LiveLesson } from '../types';

/**
 * Lesson 536 · C2 · Proyecto C2: mediación, síntesis y defensa de posturas (course unit G236).
 * The final class of the course: a project class. It does not teach a new structure; it puts
 * the C2 toolkit to work in one task cycle, with the CEFR Companion Volume (2020) mediation
 * activities as a reference only (relaying specific information, explaining data, processing
 * text, facilitating communication in delicate situations and disagreements; no certification
 * claim). Steps: (1) read three short invented sources with different positions on one public
 * issue; (2) mediate them for a specific audience (a citizens' panel of non-experts: ustedes,
 * plain equivalences for figures, axes instead of source-by-source summary); (3) write a
 * synthesis that keeps each source's commitment (G229: es probable que / todo apunta a que /
 * no es descartable que; attribution verbs by stance; no upgrading, no downgrading, conditions
 * kept; G208: a press report stays a rumour, a documented figure stays a fact); (4) defend an
 * own position orally with mitigation and strategic politeness (G222: No estaría de más…;
 * G224: dicho eso, si me permiten); (5) reflect on the whole course. Practicar recycles G207
 * (mood after negar / no descartar / de ahí que), G208, G209 (tense correlation in the
 * minutes), G215 (usted / ustedes in a formal panel), G221 and G230 (con todo, así y todo, si
 * bien, de ahí que, habida cuenta de que, máxime cuando, toda vez que). Anchor: «Se afirma
 * que…, pero los datos permiten matizarlo». Ampliación: the same content for the city council
 * (formal, impersonal) and for neighbours (plain language), without changing the commitment.
 * Scene: the invented city of Lomaverde faces a drought. Its Panel Ciudadano del Agua (thirty
 * residents chosen by lot) must recommend measures to the city council. Lucía Ferrer
 * facilitates; panel members Martín Ocaña (retired teacher) and Camila Rojas (six people at
 * home); guests Gonzalo Medina (engineer, Aguas de Lomaverde) and Rosario Benítez (Asociación
 * Vecinal Barrio Alto). Sources: the utility's technical report, economist Elena Carrasco's
 * column, the residents' association statement. Escuchar: Elena's radio segment «Cuentas
 * claras» (es-CL-CatalinaNeural, one voice). Escribir: the learner's synthesis-and-position
 * note for the panel. Cerrar: course finale, link back to the course page. Instructions use tú.
 */
export const lesson: LiveLesson = {
  id: 536,
  level: 'C2',
  title: 'Proyecto C2: mediación, síntesis y defensa de posturas',
  subtitle: 'Leer tres fuentes enfrentadas, mediarlas para un público, sintetizarlas sin traicionarlas y defender tu postura con tacto.',
  legend: [
    { tone: 'blue', label: 'COMPROMISO DE LA FUENTE · es probable que, todo apunta a que, no es descartable que, habría + participio (how strongly each source commits)' },
    { tone: 'teal', label: 'MEDIAR Y ATRIBUIR · según, sostiene, reconoce, se afirma que, es decir, en otras palabras (relaying and attributing)' },
    { tone: 'orange', label: 'DEFENDER CON TACTO · entiendo su preocupación, dicho eso, si me permiten, no estaría de más (mitigation and politeness)' },
    { tone: 'violet', label: 'CONECTORES DE PRECISIÓN · con todo, así y todo, si bien, de ahí que, máxime cuando (fine-grained connectors)' },
  ],
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Un proyecto, cuatro operaciones', coach: 'La última clase no añade una regla: las pone todas a trabajar. The last class adds no new rule: it puts them all to work.',
      steps: [
        { title: 'Lomaverde tiene sed · Lomaverde is running dry', blocks: [
          { kind: 'lead', text: '**Lomaverde**, una ciudad mediana, atraviesa una sequía. El ayuntamiento ha creado un **Panel Ciudadano del Agua**: treinta vecinos elegidos por sorteo, sin formación técnica, que deben recomendar medidas al pleno municipal. Sobre la mesa hay **tres fuentes** con posturas distintas: el informe técnico de la empresa de aguas, la columna de una economista y el comunicado de una asociación vecinal. **Lucía Ferrer**, la facilitadora, tiene que contárselas al panel sin inclinar la balanza. Hoy haces tú ese trabajo, en cuatro operaciones: **comprender** las fuentes, **mediarlas** para un público concreto, **sintetizarlas** sin cambiar lo que afirma cada una y **defender** después tu propia postura en el debate.', en: 'A mid-sized city in a drought has set up a citizens’ panel of thirty residents chosen by lot, with no technical background, who must recommend measures to the council. Three sources take different positions: the water company’s report, an economist’s column and a residents’ association statement. The facilitator must relay them without tipping the scales. Today you do that job in four moves: understand the sources, mediate them for a specific audience, synthesise them without changing what each one claims, and then defend your own position in the debate.' },
          { kind: 'compare', title: 'Contar una fuente: dos maneras · Relaying a source: two ways', columns: [
            { tone: 'neutral', label: 'TRAICIONA LA FUENTE', sentence: 'El informe dice que en septiembre habrá cortes de agua.', idea: 'Convierte una probabilidad en un hecho y borra la condición: el panel votará asustado.', en: 'It turns a probability into a certainty and drops the condition: the panel will vote out of fear, on something the report never said.' },
            { tone: 'blue', label: 'RESPETA LA FUENTE', sentence: 'El informe advierte de que, si no ahorramos un 15 %, [[es probable que|blue]] haya cortes en septiembre.', idea: 'Mismo contenido, mismo grado de certeza, misma condición.', en: 'Same content, same degree of certainty, same condition: the panel can weigh the real risk.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué falla en la primera versión?', options: ['El compromiso: afirma con certeza lo que la fuente solo considera probable, y omite la condición.', 'La gramática: «habrá» es incorrecto después de «dice que».', 'El registro: es demasiado coloquial para un panel.'], answer: 0, why: 'Es gramatical, pero infiel: sube el compromiso y elimina la condición del 15 %.', en: 'The sentence is grammatical but unfaithful: it upgrades the claim and deletes the condition.' },
          ] },
        ] },
        { title: 'Mediar: pensar en quien escucha · Mediating: think of your audience', mascot: '/brand/mascot/studying.webp', coach: '¿Para quién hablas? Who are you speaking for?', blocks: [
          { kind: 'concept', tone: 'teal', label: 'MEDIAR UN TEXTO PARA UN PÚBLICO', question: '¿Tu público necesita entender, decidir o solo enterarse?', en: 'The CEFR Companion Volume, used here only as a reference, describes mediation as making a text or a conversation accessible to someone else: relaying specific information, explaining data, summarising a text, and facilitating communication when people disagree. Mediating is not translating word for word: you select what the audience needs, reorganise it, explain technical terms with everyday equivalents and keep the figures, conditions and certainty of the original. Your opinion stays out of it, or is clearly labelled as yours.', formula: ['seleccionar lo que el público necesita para decidir', 'reorganizar por ejes (diagnóstico, remedio, riesgos), no fuente por fuente', 'explicar: tecnicismo → equivalencia cotidiana, con la misma cifra', 'conservar: condiciones, certeza y autoría de cada dato'],
            meaning: 'El Volumen complementario del **MCER** (2020), que aquí usamos solo como referencia, describe la **mediación** como hacer accesible un texto o una conversación a otra persona: **transmitir información concreta**, **explicar datos**, **resumir** un texto y **facilitar la comunicación** cuando hay desacuerdo. Mediar **no es traducir palabra por palabra**: se **selecciona** lo que el público necesita, se **reorganiza**, se **explica** («pérdidas en la red del 38 %» → «casi cuatro de cada diez litros se pierden antes de llegar al grifo») y se **conserva** lo que no se puede tocar: cifras, condiciones, grado de certeza y quién dice qué. Tu opinión, fuera; o, si entra, **señalada como tuya** (clase 228).',
            examples: [
              { es: 'Técnico: «Las reservas se sitúan en el 31 % de su capacidad». → Panel: «[[Es decir|teal]], los embalses tienen algo menos de un tercio del agua que les cabe: lo más bajo en quince años».', en: 'The figure is translated into an everyday equivalent (less than a third) and given context, without being rounded into something more dramatic.' },
              { es: '[[En pocas palabras|teal]]: las tres fuentes coinciden en el diagnóstico y discrepan en el remedio.', en: 'Organising by axes (diagnosis, remedy) instead of source by source is what turns a list into a synthesis.' },
            ] },
          { kind: 'table', title: 'El mismo contenido, cuatro públicos · Same content, four audiences', head: ['Público', 'Qué necesita', 'Decisiones de lengua'], rows: [
            ['**Panel ciudadano** (no expertos)', 'entender opciones y riesgos para votar', 'ustedes; cifras con equivalencia («casi cuatro de cada diez»); ejes claros; nada de siglas'],
            ['**Pleno municipal**', 'una recomendación justificada, por escrito', 'impersonal («se recomienda»); conectores formales: habida cuenta de que, toda vez que'],
            ['**Una vecina mayor** en el centro cívico', 'qué le afecta y qué puede hacer', 'usted; frases cortas; un ejemplo cercano; «fugas en las tuberías», no «pérdidas en la red»'],
            ['**La prensa**', 'una frase citable y exacta', 'atribución explícita (según el panel…); sin ironía ni adjetivos de más'],
          ], note: 'En todos los casos se mantiene el compromiso de cada fuente: cambia la forma, no el grado de certeza.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Explicas el informe a una vecina de 80 años en la puerta del centro cívico. ¿Qué versión media mejor?', options: ['«La red está hecha un desastre y nos roban el agua».', '«Se estiman unas pérdidas del 38 % en la red de distribución».', '«Mire, de cada diez litros, casi cuatro se pierden por fugas antes de llegar a su grifo».'], answer: 2, why: 'Usted, imagen concreta y la misma cifra; la versión del «desastre» añade una acusación que la fuente no hace.', en: 'Formal address, a concrete picture and the same figure; the “desastre” option adds an accusation the source never makes.' },
          ] },
        ] },
        { title: 'Sintetizar sin traicionar · Synthesising without betraying', mascot: '/autoestudio/mascot/noting.webp', coach: 'Ni más seguro ni menos seguro que la fuente. No more and no less certain than the source.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'CONSERVAR EL COMPROMISO DE CADA FUENTE', question: '¿Tu síntesis dice con la misma fuerza lo que dice la fuente?', en: 'In a synthesis, every claim keeps its owner and its strength. Probability stays probability, a presumption stays a presumption, a demand stays a demand, and a conditional rumour stays a rumour, while a documented figure is reported as a fact. Choose the reporting verb by the stance the source really takes: sostiene and considera for positions, advierte for warnings, reconoce or admite when a source concedes something against its own interest, exige for demands. The verb carries its own mood: no descartar que, negar que and exigir que take the subjunctive.', formula: ['probabilidad → considera probable que / es probable que + subjuntivo', 'presunción → según X, todo apunta a que + indicativo', 'posibilidad → no descarta que + subjuntivo', 'exigencia → exige que + subjuntivo · rumor → según la prensa, habría + participio'],
            meaning: 'En una síntesis, cada afirmación conserva **su dueño** y **su fuerza** (clase 229). Lo probable sigue siendo probable; lo presunto, presunto; una exigencia, exigencia; un rumor, rumor (**condicional de rumor**, clase 208); y un dato documentado se da como **hecho**. El **verbo de atribución** se elige por la postura real de la fuente: **sostiene** o **considera** (posiciones), **advierte** (avisos), **reconoce** o **admite** (lo que la fuente concede en su contra), **exige** (demandas), **niega**. Y cada verbo trae su modo (clase 207): **no descarta que**, **niega que**, **exige que** + subjuntivo; **sostiene que**, **advierte de que** + indicativo.',
            examples: [
              { es: 'La economista [[sostiene|teal]] que [[todo apunta a que|blue]] la tarifa por tramos reduce el consumo.', en: 'A position presented with a strong but not absolute commitment: todo apunta a que is kept, not turned into demuestra.' },
              { es: 'La asociación [[exige|teal]] que se reparen las fugas antes de subir las tarifas.', en: 'A demand stays a demand: rewriting it as sugiere tímidamente would weaken the source.' },
              { es: '[[Según|teal]] la prensa local, la empresa [[habría aplazado|blue]] dos veces la renovación de tuberías; la empresa lo niega.', en: 'An unconfirmed report keeps its rumour conditional and its source, and the denial is recorded too.' },
            ] },
          { kind: 'table', title: 'Fiel o infiel · Faithful or not', head: ['La fuente dice…', 'Síntesis fiel', 'Síntesis infiel'], rows: [
            ['Es probable que haya cortes si no se ahorra un 15 %.', 'El informe considera probable que haya cortes si no se ahorra un 15 %.', '«Habrá cortes» (sube y borra la condición)'],
            ['Todo apunta a que la tarifa reduce el consumo.', 'Según la economista, todo apunta a que la tarifa reduce el consumo.', '«Demuestra que…» (sube)'],
            ['No es descartable que perjudique a las familias numerosas.', 'No descarta que perjudique a las familias numerosas.', '«Reconoce que perjudicará» (sube) · omitirlo (borra)'],
            ['Exigimos que se reparen las fugas.', 'La asociación exige que se reparen las fugas.', '«Sugiere que quizá…» (baja)'],
            ['Según la prensa, la empresa habría aplazado las obras.', 'La asociación recoge una información de prensa no confirmada.', '«La empresa aplazó las obras» (rumor → hecho)'],
          ], note: 'Los verbos valorativos (denuncia, admite, confiesa, insinúa) añaden tu lectura de la postura: úsalos solo si la fuente la expresa así.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Fuente: «No es descartable que la tarifa perjudique a las familias numerosas». ¿Qué síntesis es fiel?', options: ['La economista asegura que la tarifa no perjudica a nadie.', 'La economista reconoce que la tarifa perjudicará a las familias numerosas.', 'La economista no descarta que la tarifa perjudique a las familias numerosas.'], answer: 2, why: 'Mismo grado (posibilidad) y mismo modo: no descartar que + subjuntivo.', en: 'Same degree of commitment (a possibility) and the same mood: no descartar que takes the subjunctive.' },
          ] },
        ] },
        { title: 'Síntesis, resumen y opinión · Synthesis, summary and opinion', mascot: '/brand/mascot/seated.webp', coach: 'Una síntesis no es una lista ni un editorial. A synthesis is neither a list nor an editorial.', blocks: [
          { kind: 'compare', title: 'Tres textos sobre las mismas fuentes · Three texts on the same sources', columns: [
            { tone: 'neutral', label: 'RESUMEN EN CADENA', sentence: 'El informe dice esto. La economista dice esto otro. La asociación dice otra cosa.', idea: 'Fiel, pero el lector tiene que hacer solo el trabajo de comparar.', en: 'Faithful, but the reader is left to do all the comparing alone.' },
            { tone: 'teal', label: 'SÍNTESIS POR EJES', sentence: 'Las tres fuentes [[coinciden en|teal]] que hay que actuar este verano; [[discrepan en|teal]] cómo: tarifa, restricciones o reparaciones.', idea: 'Organiza por coincidencias y diferencias, con cada postura atribuida.', en: 'Organised by agreements and disagreements, with every position still attributed to its source.' },
            { tone: 'orange', label: 'OPINIÓN DISFRAZADA', sentence: 'Como bien demuestra la asociación, la empresa gestiona fatal y la tarifa es un abuso.', idea: 'Mezcla tu voz con la de la fuente y sube su compromiso.', en: 'Your own voice slips into the source’s mouth, and its claim gets inflated.' },
          ] },
          { kind: 'concept', tone: 'teal', label: 'MATIZAR UNA AFIRMACIÓN: SE AFIRMA QUE…, PERO LOS DATOS PERMITEN MATIZARLO', question: '¿Quieres corregir una idea sin decir que es falsa?', en: 'Matizar means qualifying a claim, not refuting it: you accept part of it and show where the data limit it. The impersonal se afirma que avoids pointing at a person, which protects everyone’s face in a public debate; the data then do the work of the objection. Keep your qualification clearly separate from the synthesis, as your own reading.', formula: ['Se afirma (a menudo) que + idea, pero los datos permiten matizarlo: + dato', 'matizar ≠ refutar: se acepta una parte y se acota el resto'],
            meaning: '**Matizar** no es desmentir: aceptas una parte de la idea y muestras **dónde la acotan los datos**. «**Se afirma que** el problema son las fugas y no los hogares, **pero los datos permiten matizarlo**: las reparaciones son imprescindibles, **si bien** llevarán años, y el riesgo de cortes es de este verano». El impersonal **se afirma** no señala a nadie (cortesía, clase 222) y deja que hablen los datos. En tu texto, este movimiento va **después** de la síntesis, como lectura propia.',
            examples: [
              { es: '[[Se afirma que|teal]] los hogares derrochan, pero los datos permiten matizarlo: el consumo por persona ha bajado un 8 % en cinco años.', en: 'The claim is not called false; a figure shows where it needs qualifying.' },
            ] },
          { kind: 'decide', title: 'Antes de escribir la síntesis · Before writing the synthesis', steps: [
            { q: '¿Has identificado en qué coinciden y en qué discrepan las fuentes? (Have you found the agreements and disagreements?)', yes: 'Organiza por esos ejes.', no: 'Vuelve a las fuentes y subraya diagnóstico, remedio y riesgos.' },
            { q: '¿Cada afirmación conserva su fuente, su condición y su grado de certeza? (Does each claim keep its owner, condition and certainty?)', yes: 'Revisa los verbos de atribución y el modo.', no: 'Corrige: ni «habrá» por «es probable», ni «aplazó» por «habría aplazado».' },
            { q: '¿Has incluido tu opinión? (Have you included your opinion?)', yes: 'Sepárala y señálala: «Mi postura…», «A mi juicio…».', no: 'Perfecto para una síntesis neutral; tu postura irá en el debate.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Como bien demuestra la asociación, la empresa gestiona fatal». ¿Por qué no sirve en una síntesis neutral?', options: ['Porque «demostrar» exige subjuntivo.', 'Porque atribuye a la fuente una valoración que es del autor y sube su compromiso.', 'Porque no se puede citar a una asociación.'], answer: 1, why: '«Como bien demuestra» y «fatal» son la voz del autor, no la de la fuente.', en: 'Como bien demuestra and fatal belong to the writer, not to the source: that is an editorial in disguise.' },
          ] },
        ] },
        { title: 'Defender tu postura · Defending your position', mascot: '/brand/mascot/speaking.webp', coach: 'Firme en el fondo, cuidadoso en la forma. Firm on substance, careful in form.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'CONCEDER · OBJETAR · PROPONER · CALIBRAR', question: '¿Cómo defiendes una postura sin que el otro pierda la cara?', en: 'In the debate you use what you learned in classes 221, 222 and 224. Concede first (entiendo su preocupación, tiene razón en que…), then object with a connector (dicho eso, con todo, si bien), then make a proposal with a mitigated form (no estaría de más…, quizá convendría…, ¿y si…?), and calibrate your own certainty (todo indica que, no es descartable que). If you have to correct someone, take the blame for the misunderstanding yourself (quizá no me he explicado bien) rather than accusing them of not understanding.', formula: ['conceder: Entiendo su preocupación · Tiene razón en que + indicativo', 'objetar: Dicho eso, … · Con todo, … · Si bien + indicativo, …', 'proponer: No estaría de más + infinitivo · Quizá convendría + infinitivo · ¿Y si…?', 'calibrar: todo indica que (+ ind.) · no es descartable que (+ subj.)'],
            meaning: 'En el debate recuperas lo que viste en las clases 221, 222 y 224. Primero **concedes** («Entiendo su preocupación», «Tiene razón en que…»); después **objetas** con un conector («**Dicho eso**», «**Con todo**», «**Si bien**…»); luego **propones** con una forma atenuada («**No estaría de más** + infinitivo», «**Quizá convendría**…», «¿Y si…?»); y **calibras** tu certeza («todo indica que», «no es descartable que»). Si tienes que corregir, asumes tú el malentendido («**Quizá no me he explicado bien**») en lugar de acusar al otro de no entender.',
            examples: [
              { es: '[[Entiendo su preocupación|orange]], Martín. [[Dicho eso|orange]], las obras llevarán años, y el verano es ahora.', en: 'Concession, then the objection: the other person’s concern is acknowledged before it is answered.' },
              { es: '[[No estaría de más|orange]] que los tramos altos financiaran las reparaciones, ¿no creen?', en: 'A conditional proposal followed by a question to the group: firm content, open form. Note the correlation: estaría + imperfect subjunctive.' },
            ] },
          { kind: 'table', title: 'Conectores de precisión · Precision connectors (clase 230)', head: ['Conector', 'Valor', 'Construcción y registro'], rows: [
            ['**con todo** · **así y todo**', 'objeción tras una concesión: ‘a pesar de ello’', 'con todo, más formal; así y todo, también oral'],
            ['**si bien**', 'concesión: ‘aunque’', '+ indicativo; culto: «Si bien la red falla, el consumo también cuenta»'],
            ['**de ahí que**', 'consecuencia de lo dicho', '+ subjuntivo: «de ahí que proponga…»'],
            ['**habida cuenta de que**', 'causa que se tiene en cuenta', '+ indicativo; formal, escrito'],
            ['**máxime cuando**', 'refuerza: ‘y más aún porque’', '+ indicativo: «máxime cuando la empresa ya lo ha anunciado»'],
            ['**toda vez que**', 'causa: ‘dado que, puesto que’', '+ indicativo; muy formal, jurídico y administrativo'],
          ], note: 'Uno o dos por intervención bastan: acumularlos suena a discurso aprendido, no a argumento.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Las reparaciones son urgentes. ___, no evitarán los cortes de este verano».', options: ['De ahí que', 'Con todo', 'Toda vez que'], answer: 1, why: '«Con todo» introduce una objeción tras conceder lo anterior.', en: 'Con todo introduces an objection after conceding the previous point: “even so”.' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/kneeling.webp', coach: 'Los errores de C2 rara vez son de forma: son de fidelidad y de tono. C2 mistakes are rarely about form: they are about faithfulness and tone.', blocks: [
          { kind: 'mistakes', title: '¿Qué falla? · What goes wrong?', items: [
            { wrong: 'Según el informe, en septiembre habrá cortes.', right: 'Según el informe, es probable que haya cortes en septiembre si no se reduce el consumo un 15 %.', why: 'Sube el compromiso (probable → seguro) y borra la condición.' },
            { wrong: 'La asociación niega que los hogares son los responsables.', right: 'La asociación niega que los hogares sean los responsables.', why: '«Negar que» rige subjuntivo (clase 207).' },
            { wrong: 'La asociación denuncia que la empresa aplazó dos veces las obras.', right: 'La asociación recoge una información de prensa: la empresa habría aplazado dos veces las obras; la empresa lo niega.', why: 'Convierte un rumor en hecho y atribuye a la asociación una acusación que solo cita.' },
            { wrong: 'De ahí que proponemos una tarifa por persona.', right: 'De ahí que propongamos una tarifa por persona.', why: '«De ahí que» va con subjuntivo.' },
            { wrong: 'Como demuestra la economista, la tarifa por tramos es la solución.', right: 'La economista sostiene que todo apunta a que la tarifa por tramos reduce el consumo.', why: 'Ella no demuestra ni habla de «la solución»: presume un efecto.' },
            { wrong: 'Usted no ha entendido nada: no es un impuesto.', right: 'Quizá no me he explicado bien: yo no lo plantearía como un impuesto, sino como…', why: 'Amenaza la imagen del otro; asumir el malentendido corrige sin humillar (clase 222).' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué frase es fiel y correcta?', options: ['El informe demuestra que habrá cortes.', 'La empresa reconoce en su informe unas pérdidas del 38 % en la red.', 'La empresa habría reconocido en su informe unas pérdidas del 38 %.'], answer: 1, why: 'Es un dato publicado por la propia empresa: indicativo; el condicional de rumor lo rebajaría sin motivo.', en: 'It is a figure the company itself published, so it is reported as a fact; the rumour conditional would weaken it for no reason.' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno elige una de las tres fuentes y la cuenta en voz alta en dos versiones, una fiel y otra infiel a propósito; tú dices cuál es cuál y por qué.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'Las fuentes y la sesión', coach: 'Primero lo que dicen las fuentes; después, lo que el panel hace con ellas. First what the sources say, then what the panel does with them.',
      steps: [
        { title: 'Las tres fuentes · The three sources', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees las tres fuentes en voz alta; tu alumno toca cada expresión marcada y dice con qué fuerza se compromete cada fuente.', self: 'Lee las tres fuentes con calma. Toca cada expresión marcada y decide con qué fuerza se compromete cada una: dato, probabilidad, posibilidad, exigencia o rumor.' } },
          { kind: 'explore', title: 'Dosier del panel · The panel’s dossier', setting: 'Lo que cada miembro del panel recibió por correo antes de la sesión: tres extractos breves.', lines: [
            { who: 'Informe técnico · Aguas de Lomaverde', text: 'Las reservas se sitúan en el 31 % de su capacidad, el nivel más bajo en quince años. [[Si el consumo doméstico no se reduce|blue]] al menos un 15 % antes de agosto, [[es probable que|blue]] haya que aplicar cortes nocturnos en septiembre. Las pérdidas en la red [[se estiman en|blue]] un 38 %; reducirlas requerirá inversiones durante varios años.', en: 'Reserves stand at 31 % of capacity, the lowest level in fifteen years. If household consumption does not fall by at least 15 % before August, night-time cuts will probably be needed in September. Losses in the network are estimated at 38 %; reducing them will take several years of investment.' },
            { who: 'Columna · Elena Carrasco, economista', text: '[[Todo apunta a que|blue]] una tarifa por tramos, barata para el consumo básico y cara a partir de cierto volumen, reduce el consumo sin castigar a quien gasta poco. [[No es descartable|blue]], [[con todo|violet]], que perjudique a las familias numerosas si el tramo se calcula por vivienda y no por persona. Las restricciones generales, en cambio, reparten el sacrificio a ciegas.', en: 'Everything suggests that a tiered tariff, cheap for basic use and expensive above a certain volume, cuts consumption without penalising light users. Even so, it may well hurt large families if the tier is set per household rather than per person. Blanket restrictions, by contrast, share out the sacrifice blindly.' },
            { who: 'Comunicado · Asociación Vecinal Barrio Alto', text: '[[Se afirma que|teal]] los hogares derrochan, pero el propio informe de la empresa [[reconoce|teal]] que casi cuatro de cada diez litros se pierden antes de llegar a los grifos. [[Exigimos|blue]] que se reparen las fugas antes de subir las tarifas. [[Según ha publicado la prensa local|teal]], la empresa [[habría aplazado|blue]] dos veces el plan de renovación de tuberías.', en: 'People say households waste water, but the company’s own report admits that almost four in ten litres are lost before reaching the tap. We demand that leaks be repaired before tariffs go up. According to the local press, the company has reportedly postponed its pipe renewal plan twice.' },
          ], notes: {
            'Si el consumo doméstico no se reduce': 'La **condición** forma parte de la afirmación: una síntesis que la borre cambia el mensaje del informe.',
            'es probable que': '**Es probable que** + subjuntivo: compromiso medio-alto, no certeza. En la síntesis: «considera probable que…».',
            'se estiman en': '**Se estiman en**: cifra técnica calculada, presentada como dato del propio informe. Se recoge en indicativo.',
            'Todo apunta a que': '**Todo apunta a que** + indicativo: presunción fuerte basada en indicios, sin llegar a «demuestra».',
            'No es descartable': '**No es descartable que** + subjuntivo: doble negación que presenta una **posibilidad** real, pero no la afirma.',
            'con todo': '**Con todo**, en inciso: la economista objeta a su propia propuesta tras defenderla. Es una concesión honesta que la síntesis debe conservar.',
            'Se afirma que': '**Se afirma que**: impersonal que presenta una idea ajena sin señalar a nadie, para matizarla después.',
            'reconoce': '**Reconoce**: verbo que presenta el dato como algo que la empresa admite en su contra. Aquí está justificado: el dato sale de su propio informe.',
            'Exigimos': '**Exigimos que** + subjuntivo: una **exigencia**, compromiso máximo. En la síntesis: «exige que…», nunca «sugiere».',
            'Según ha publicado la prensa local': '**Según** + fuente: la asociación no afirma el dato; lo atribuye a la prensa.',
            'habría aplazado': '**Condicional de rumor** (clase 208): información no confirmada. En la síntesis sigue siendo rumor, con su fuente.',
          } },
          { kind: 'choice', title: '¿Con qué fuerza? · How strongly?', items: [
            { prompt: '¿Qué fuente presenta su idea como una exigencia?', options: ['El comunicado de la asociación vecinal.', 'El informe técnico.', 'La columna de la economista.'], answer: 0, why: '«Exigimos que se reparen las fugas»: compromiso máximo.', en: 'Which source frames its idea as a demand?' },
            { prompt: '¿Qué dato de las fuentes es una información no confirmada?', options: ['El doble aplazamiento del plan de tuberías.', 'Las reservas al 31 %.', 'Las pérdidas del 38 % en la red.'], answer: 0, why: 'Va en condicional de rumor y se atribuye a la prensa; las otras cifras son del informe.', en: 'Which piece of information is unconfirmed?' },
          ] },
        ] },
        { title: 'La sesión del panel · The panel session', mascot: '/brand/mascot/seated.webp', coach: 'Fíjate en cómo Lucía media, corrige y recoge. Notice how Lucía mediates, corrects and records.', blocks: [
          { kind: 'guide', text: { teacher: 'Leen la sesión con papeles: tú eres Martín, Gonzalo y Rosario; tu alumno es Lucía y Camila. Después tu alumno toca cada expresión marcada y explica qué hace: mediar, conservar el compromiso, mitigar o precisar.', self: 'Lee la sesión en voz alta. Después toca cada expresión marcada y explica qué hace: mediar, conservar el compromiso, mitigar o precisar.' } },
          { kind: 'explore', title: 'Panel Ciudadano del Agua · Tercera sesión', setting: 'Salón de actos del centro cívico, martes a las 19:00. Lucía Ferrer facilita; en el panel, Martín Ocaña y Camila Rojas; invitados, Gonzalo Medina (Aguas de Lomaverde) y Rosario Benítez (Asociación Vecinal Barrio Alto). En el panel todos se tratan de usted.', lines: [
            { who: 'Lucía', text: 'Buenas tardes. Antes de debatir, les resumo las fuentes. [[En pocas palabras|teal]], las tres coinciden en el diagnóstico y discrepan en el remedio.', en: 'Good evening. Before we debate, let me sum up the sources. In short, all three agree on the diagnosis and disagree on the remedy.' },
            { who: 'Lucía', text: 'El informe no dice que vaya a haber cortes: dice que [[es probable que|blue]] los haya si no ahorramos un 15 %. [[Es decir|teal]], es un aviso, no una sentencia.', en: 'The report doesn’t say there will be cuts: it says there probably will be if we don’t save 15 %. In other words, it is a warning, not a verdict.' },
            { who: 'Martín', text: 'Ya, pero la asociación dice que la empresa escondió que pierde el 38 % del agua.', en: 'Right, but the association says the company hid the fact that it loses 38 % of its water.' },
            { who: 'Lucía', text: '[[Perdone que lo corrija|orange]], Martín: ese dato lo da el propio informe. Lo que la asociación recoge es que, [[según|teal]] la prensa local, la empresa [[habría aplazado|blue]] dos veces las obras. Eso no está confirmado.', en: 'Let me correct you there, Martín: that figure comes from the report itself. What the association passes on is that, according to the local press, the company has reportedly postponed the works twice. That has not been confirmed.' },
            { who: 'Camila', text: 'A mí me preocupa la tarifa. En casa somos seis: si el tramo se calcula por vivienda, pagamos el precio caro aunque no derrochamos nada.', en: 'What worries me is the tariff. There are six of us at home: if the tier is per household, we pay the high rate even though we don’t waste anything.' },
            { who: 'Gonzalo', text: '[[Si me permiten|orange]] un apunte técnico: el tramo puede calcularse por persona. Y reparar las fugas es imprescindible, [[si bien|violet]] no resuelve este verano: renovar tuberías lleva años.', en: 'If I may add a technical point: the tier can be calculated per person. And repairing the leaks is essential, although it won’t solve this summer: renewing pipes takes years.' },
            { who: 'Martín', text: '[[Así y todo|violet]], no me parece justo que paguemos los vecinos la mala gestión.', en: 'Even so, I don’t think it’s fair for residents to pay for poor management.' },
            { who: 'Lucía', text: '[[Entiendo su preocupación|orange]]. [[Dicho eso|orange]], la economista [[no descarta que|blue]] su tarifa perjudique a algunas familias: depende de si el tramo se calcula por vivienda o por persona.', en: 'I understand your concern. That said, the economist herself allows that her tariff might hurt some families: it depends on whether the tier is set per household or per person.' },
            { who: 'Rosario', text: 'Entonces [[no estaría de más|orange]] combinar las dos cosas: tarifa por persona ya y un calendario público de reparaciones, [[máxime cuando|violet]] la empresa ya ha aplazado las obras dos veces.', en: 'Then it wouldn’t hurt to combine both: a per-person tariff now and a public repair schedule, all the more so since the company has already postponed the works twice.' },
            { who: 'Gonzalo', text: 'Eso no es exacto: el plan se ha reprogramado, no aplazado. Pero lo del calendario me parece razonable.', en: 'That isn’t accurate: the plan was rescheduled, not postponed. But the schedule idea seems reasonable to me.' },
            { who: 'Lucía', text: 'Tomo nota. Para el acta: el aplazamiento lo publica la prensa y la empresa lo niega. [[Con todo|violet]], la propuesta queda recogida: [[en otras palabras|teal]], tarifa por persona y reparaciones con fechas.', en: 'Noted. For the minutes: the postponement is reported by the press and denied by the company. Even so, the proposal is on record: in other words, a per-person tariff and repairs with dates.' },
            { who: 'Martín', text: 'Así planteado, lo veo bastante más razonable.', en: 'Put like that, it seems a lot more reasonable to me.' },
          ], notes: {
            'En pocas palabras': '**En pocas palabras**: Lucía anuncia una síntesis por ejes (coincidencia y discrepancia), no un resumen fuente por fuente.',
            'es probable que': 'Lucía conserva el compromiso del informe: probabilidad, no certeza; y repite la condición del 15 %. Fíjate también en «no dice que **vaya** a haber»: con «no decir que», el subjuntivo muestra que ella no asume el contenido (clase 207).',
            'Es decir': '**Es decir**: reformulación para un público no experto; Lucía traduce el matiz técnico a una imagen clara (aviso / sentencia).',
            'Perdone que lo corrija': '**Perdone que lo corrija** (usted + subjuntivo): corrección cortés de un dato mal atribuido, sin quitarle la cara a Martín.',
            'según': '**Según** + fuente: Lucía deja claro de quién es la información.',
            'habría aplazado': '**Condicional de rumor**: Lucía mantiene la reserva de la fuente y añade que no está confirmado.',
            'Si me permiten': '**Si me permiten** (ustedes): Gonzalo, invitado, pide la palabra al grupo con cortesía.',
            'si bien': '**Si bien** + indicativo: concesión culta; Gonzalo apoya la reparación y, a la vez, limita su alcance.',
            'Así y todo': '**Así y todo**: Martín acepta el argumento técnico y mantiene su objeción. Detrás, «no me parece justo que **paguemos**»: valoración + subjuntivo.',
            'Entiendo su preocupación': '**Entiendo su preocupación**: concesión que protege la imagen de Martín antes de objetar.',
            'Dicho eso': '**Dicho eso**: marca el paso de la concesión a la objeción (clase 224).',
            'no descarta que': '**No descarta que** + subjuntivo: Lucía resume la columna sin subir ni bajar su compromiso.',
            'no estaría de más': '**No estaría de más** + infinitivo: propuesta atenuada con condicional (clase 222).',
            'máxime cuando': '**Máxime cuando**: refuerza el argumento con una razón más. Pero Rosario presenta como hecho un dato que la fuente solo da como rumor: Lucía lo corregirá en el acta.',
            'Con todo': '**Con todo**: tras precisar el dato, Lucía mantiene la propuesta: la corrección no la invalida.',
            'en otras palabras': '**En otras palabras**: reformulación final para que todo el panel sepa qué se ha recogido.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Qué error de Martín corrige Lucía?', options: ['Cree que la tarifa por tramos ya está aprobada.', 'Atribuye a una ocultación un dato que la empresa publica en su propio informe.', 'Dice que el informe es falso.'], answer: 1, why: '«Ese dato lo da el propio informe».', en: 'Which mistake of Martín’s does Lucía correct?' },
            { prompt: '¿Por qué le preocupa la tarifa a Camila?', options: ['Porque en su casa son seis y, con un tramo por vivienda, pagaría la tarifa cara.', 'Porque gasta mucha agua en el jardín.', 'Porque cree que las restricciones son mejores.'], answer: 0, why: '«En casa somos seis: si el tramo se calcula por vivienda, pagamos el precio caro».', en: 'Why is Camila worried about the tariff?' },
            { prompt: '¿Qué propuesta queda recogida en el acta?', options: ['Subir la tarifa a todos por igual.', 'Restricciones generales a partir de agosto.', 'Tarifa por persona y un calendario público de reparaciones.'], answer: 2, why: '«Tarifa por persona y reparaciones con fechas».', en: 'Which proposal goes into the minutes?' },
          ] },
        ] },
        { title: 'El borrador del acta · Drafting the minutes', mascot: '/autoestudio/mascot/writing.webp', coach: 'Lucía revisa el acta con Gonzalo, por mensajes. Lucía checks the minutes with Gonzalo, by text.', blocks: [
          { kind: 'chat-fill', title: 'Mensajes entre Lucía y Gonzalo · Lucía and Gonzalo’s chat', lines: [
            { who: 'Lucía', text: 'Gonzalo, te paso el borrador del acta. ¿Recojo bien tu informe?' },
            { who: 'Lucía', text: '«El informe advierte de que, sin un ahorro del 15 %, ___ cortes nocturnos en septiembre».', options: ['podría ser que quizá hubiera', 'habrá', 'es probable que haya'], answer: 2, why: 'El informe dice «es probable»: ni más (habrá) ni menos (acumular podría y quizá diluye el aviso).' },
            { who: 'Gonzalo', text: 'Perfecto. Lo de las pérdidas ponlo tal cual: es un dato nuestro.' },
            { who: 'Lucía', text: '«El propio informe ___ unas pérdidas del 38 % en la red».', options: ['insinúa', 'habría reconocido', 'reconoce'], answer: 2, why: 'Dato publicado por la empresa: indicativo; el condicional lo convertiría en rumor e «insinúa» en sospecha.' },
            { who: 'Gonzalo', text: '¿Y lo de las obras? Que conste que no es cierto.' },
            { who: 'Lucía', text: 'Lo dejo como información no confirmada: «Según la prensa local, la empresa ___ dos veces la renovación».', options: ['aplazó', 'habría aplazado', 'ha aplazado sin duda'], answer: 1, why: 'Condicional de rumor: el acta recoge la información sin hacerla suya.' },
            { who: 'Lucía', text: 'Y añado tu postura: «La empresa niega que ___ retrasos en el plan».', options: ['haya habido', 'habrá', 'ha habido'], answer: 0, why: '«Negar que» + subjuntivo: haya habido.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: tu alumno explica qué cambiaría en la votación si el acta dijera «habrá cortes» y «la empresa aplazó las obras». No hay una única respuesta.' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Calibrar, corregir, debatir, reescribir. Calibrate, correct, debate, rewrite.',
      steps: [
        { title: '¿Fiel a la fuente? · Faithful to the source?', blocks: [
          { kind: 'classify', title: 'Frases de distintos borradores de síntesis · Lines from different synthesis drafts', categories: [
            { id: 'fiel', label: 'Fiel (faithful)', tone: 'teal' },
            { id: 'sube', label: 'Sube el compromiso (overstates)', tone: 'orange' },
            { id: 'baja', label: 'Rebaja el compromiso (understates)', tone: 'blue' },
            { id: 'atribuye', label: 'Atribuye mal o mezcla voces (misattributes)', tone: 'violet' },
          ], items: [
            { text: 'El informe advierte de que, si el consumo no baja un 15 %, es probable que haya cortes.', answer: 'fiel', why: 'Conserva la condición y el grado de probabilidad.' },
            { text: 'La economista demuestra que la tarifa por tramos reduce el consumo.', answer: 'sube', why: '«Todo apunta a que» se convierte en «demuestra».' },
            { text: 'La asociación sugiere, de pasada, que tal vez convendría revisar las tuberías.', answer: 'baja', why: 'Una exigencia («exigimos») pasa a ser una sugerencia tímida.' },
            { text: 'El informe menciona que las reservas están algo bajas.', answer: 'baja', why: '«El nivel más bajo en quince años» no es «algo bajas».' },
            { text: 'El informe técnico propone una tarifa por tramos.', answer: 'atribuye', why: 'La tarifa la propone la economista, no el informe.' },
            { text: 'La economista reconoce que su tarifa perjudicará a las familias numerosas.', answer: 'sube', why: 'Una posibilidad condicionada («no es descartable… si») pasa a ser una certeza.' },
            { text: 'Como bien dice la asociación, la empresa ha gestionado fatal la red.', answer: 'atribuye', why: '«Como bien dice» y «fatal» son la voz del autor, no de la asociación.' },
          ] },
        ] },
        { title: 'Elige con precisión · Choose precisely', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'choice', items: [
            { prompt: 'Para el acta: «La economista no descarta que la tarifa ___ a las familias numerosas».', options: ['perjudique', 'perjudicará', 'perjudica'], answer: 0, why: '«No descartar que» presenta una posibilidad: subjuntivo (clases 207 y 221).', en: 'No descartar que presents a possibility, so it takes the subjunctive.' },
            { prompt: '«Varias familias quedarían en el tramo caro; de ahí que la economista ___ calcularlo por persona».', options: ['propondría', 'propone', 'proponga'], answer: 2, why: '«De ahí que» introduce una consecuencia con subjuntivo.', en: 'De ahí que introduces a consequence and takes the subjunctive.' },
            { prompt: 'Una información que solo publicó la prensa. ¿Qué frase la recoge sin que el panel la haga suya?', options: ['Según la prensa local, la empresa habría aplazado dos veces la renovación; la empresa lo niega.', 'La empresa aplazó dos veces la renovación de tuberías.', 'Está demostrado que la empresa aplazó la renovación.'], answer: 0, why: 'Condicional de rumor + fuente + desmentido: nadie afirma lo que no está confirmado (clase 208).', en: 'Rumour conditional, source and denial: nobody asserts what has not been confirmed.' },
            { prompt: 'En el acta, en pasado: «Gonzalo explicó que renovar las tuberías ___ años».', options: ['llevara', 'hubiera llevado', 'llevaría'], answer: 2, why: 'Futuro visto desde un pasado: condicional (clase 209). «Llevará» también sería posible, porque sigue siendo válido.', en: 'A future seen from a past reporting verb takes the conditional; llevará would also work, since it is still true.' },
            { prompt: '«Las reservas están al 31 %, ___ el verano no ha hecho más que empezar». ¿Qué conector refuerza el argumento?', options: ['máxime cuando', 'si bien', 'con todo'], answer: 0, why: '«Máxime cuando» añade una razón que refuerza la anterior: ‘y más aún porque’.', en: 'Máxime cuando adds a reason that makes the point even stronger.' },
          ] },
        ] },
        { title: 'Corrige · Fix it', blocks: [
          { kind: 'fix', items: [
            { sentence: 'La asociación niega que los hogares son los responsables del problema.', ok: false, options: ['La asociación niega de que los hogares sean los responsables del problema.', 'La asociación niega que los hogares serían los responsables del problema.', 'La asociación niega que los hogares sean los responsables del problema.'], answer: 2, why: '«Negar que» rige subjuntivo; «negar de que» es dequeísmo.' },
            { sentence: 'Es probable que haya cortes; de ahí que el panel debe votar hoy.', ok: false, options: ['Es probable que haya cortes; de ahí que el panel deba votar hoy.', 'Es probable que haya cortes; de ahí que el panel debería votar hoy.', 'Es probable que haya cortes; de ahí que el panel deberá votar hoy.'], answer: 0, why: '«De ahí que» + subjuntivo: deba.' },
            { sentence: 'Según Gonzalo, la empresa habría reconocido en su informe unas pérdidas del 38 %.', ok: false, options: ['La empresa reconocería en su informe unas pérdidas del 38 %.', 'Al parecer, la empresa habría reconocido unas pérdidas del 38 %.', 'El propio informe de la empresa reconoce unas pérdidas del 38 %.'], answer: 2, why: 'Es un dato documentado: va en indicativo; el condicional de rumor lo rebaja sin motivo.' },
            { sentence: 'Habida cuenta de que las reservas están al 31 %, no estaría de más adelantar la votación.', ok: true, why: 'Correcta: «habida cuenta de que» + indicativo y propuesta atenuada con condicional.' },
          ] },
        ] },
        { title: 'El debate · The debate', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'chat-fill', title: 'Cuarta sesión: Martín y Camila discrepan · Fourth session: Martín and Camila disagree', lines: [
            { who: 'Martín', text: 'Lo de la tarifa por tramos es un impuesto encubierto, digan lo que digan.' },
            { who: 'Camila', text: '___, Martín, pero yo no lo llamaría así: el consumo básico seguiría siendo barato.', options: ['Eso es absurdo', 'Entiendo lo que dice', 'Ya, ya'], answer: 1, why: 'Concede antes de objetar; las otras dos amenazan la imagen de Martín.' },
            { who: 'Martín', text: 'Pues yo sigo pensando que primero hay que arreglar las fugas.' },
            { who: 'Camila', text: 'Y tiene razón en que son urgentes. ___, las obras llevarán años y el verano es ahora.', options: ['Con todo', 'De ahí que', 'Toda vez que'], answer: 0, why: '«Con todo» objeta tras la concesión («tiene razón en que…»).' },
            { who: 'Lucía', text: '___ un apunte: ustedes dos están proponiendo cosas compatibles.', options: ['Si me permites', 'Si me permiten', 'Déjenme terminar'], answer: 1, why: 'Lucía se dirige a los dos, de usted: «si me permiten».' },
            { who: 'Lucía', text: '___ si los tramos altos podrían financiar las reparaciones, ¿no creen?', options: ['Está demostrado', 'Es obligatorio estudiar', 'No estaría de más estudiar'], answer: 2, why: 'Propuesta atenuada con condicional, que deja la decisión al panel.' },
            { who: 'Martín', text: 'Así planteado, lo veo más razonable, ___ pagaría más quien más gasta.', options: ['máxime cuando', 'si bien', 'de ahí que'], answer: 0, why: '«Máxime cuando» añade una razón que refuerza su nueva postura.' },
          ] },
        ] },
        { title: 'Construye · Build', mascot: '/autoestudio/mascot/noting.webp', blocks: [
          { kind: 'build', items: [
            { tiles: ['Se', 'afirma', 'que', 'los', 'hogares', 'derrochan,', 'pero', 'los', 'datos', 'permiten', 'matizarlo.'], accept: ['Se afirma que los hogares derrochan, pero los datos permiten matizarlo.'], en: 'People say households waste water, but the data allow us to qualify that.' },
            { tiles: ['La', 'economista', 'no', 'descarta', 'que', 'la', 'tarifa', 'perjudique', 'a', 'las', 'familias', 'numerosas.'], accept: ['La economista no descarta que la tarifa perjudique a las familias numerosas.'], en: 'The economist does not rule out that the tariff might hurt large families.' },
            { tiles: ['Entiendo', 'su', 'preocupación;', 'dicho', 'eso,', 'no', 'estaría', 'de', 'más', 'empezar', 'a', 'ahorrar', 'ya.'], accept: ['Entiendo su preocupación; dicho eso, no estaría de más empezar a ahorrar ya.'], en: 'I understand your concern; that said, it wouldn’t hurt to start saving now.' },
          ] },
        ] },
        { title: 'Reescribe para el acta y el debate · Rewrite for the minutes and the debate', blocks: [
          { kind: 'rewrite', title: 'Reescribe · Rewrite', items: [
            { prompt: 'Gonzalo, en la sesión: «Las obras llevarán años y no resolverán este verano».', instruction: 'Recógelo en el acta, en estilo indirecto: empieza con «Gonzalo explicó que».', accept: ['Gonzalo explicó que las obras llevarían años y no resolverían este verano.', 'Gonzalo explicó que las obras llevarán años y no resolverán este verano.'] },
            { prompt: 'Martín, perdona que te corrija: el dato es del propio informe.', instruction: 'En el panel, Lucía trata de usted a Martín: pásalo a usted.', accept: ['Martín, perdone que lo corrija: el dato es del propio informe.', 'Martín, perdone que le corrija: el dato es del propio informe.'] },
            { prompt: 'La empresa aplazó dos veces la renovación de tuberías.', instruction: 'Es un dato de prensa no confirmado: empieza con «Según la prensa local,» y usa el condicional de rumor.', accept: ['Según la prensa local, la empresa habría aplazado dos veces la renovación de tuberías.', 'Según la prensa local, la empresa habría aplazado la renovación de tuberías dos veces.'] },
            { prompt: 'Hay que votar la tarifa hoy.', instruction: 'Atenúa la propuesta con «No estaría de más» + infinitivo.', accept: ['No estaría de más votar la tarifa hoy.', 'No estaría de más votar hoy la tarifa.'] },
          ] },
          { kind: 'teacher', text: 'Si sobra tiempo: tu alumno elige dos frases del classify que suben o bajan el compromiso y las dice en voz alta en versión fiel; tú haces de miembro del panel y preguntas «¿eso es seguro o probable?».' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/standing.webp',
      title: '«Cuentas claras»', coach: 'Escucha cómo una fuente se precisa a sí misma. Listen to a source clarifying its own claims.',
      steps: [
        { title: 'La economista en la radio · The economist on the radio', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: la idea general. Segunda escucha: tu alumno anota cada expresión de compromiso (todo apunta a que, no es descartable que, es probable que, habría…) y cada conector de precisión. Después, las preguntas.', self: 'Escucha una vez para la idea general y otra para los detalles. Anota cómo de segura está Elena en cada afirmación y qué conectores usa.' } },
          { kind: 'listen', title: 'Elena Carrasco en «Cuentas claras»', channel: 'RADIO LOMAVERDE · «CUENTAS CLARAS» · MIÉRCOLES, 8:40', src: '/audio/grammar-live/536.mp3',
            before: 'Al día siguiente de la sesión, Elena Carrasco, la autora de la columna, habla en su sección de la radio local. ¿Crees que va a rectificar, a matizar o a reafirmar lo que escribió? (The day after the session, the columnist speaks on her local radio slot. Will she retract, qualify or reaffirm what she wrote?)',
            gist: { prompt: '¿Para qué interviene Elena en la radio?', options: ['Para confirmar que la empresa aplazó las obras.', 'Para retirar su propuesta de tarifa por tramos.', 'Para precisar qué afirmó y qué no en su columna, y dar su postura sobre las fugas.'], answer: 2, why: '«Quiero precisar lo que dije y lo que no dije»; después habla de las fugas.', en: 'Why does Elena speak on the radio?' },
            details: [
              { prompt: 'Según Elena, ¿qué dijo en su columna sobre la tarifa?', options: ['Que todo apunta a que reduce el consumo sin castigar a quien gasta poco.', 'Que es la única solución posible.', 'Que no reduce el consumo.'], answer: 0, why: '«No dije que la tarifa sea la solución. Dije que todo apunta a que reduce el consumo».', en: 'What does she say her column claimed?' },
              { prompt: '¿Qué propone para no perjudicar a los hogares numerosos?', options: ['Aplicar restricciones generales.', 'Calcular el tramo por persona.', 'Eliminar los tramos.'], answer: 1, why: '«De ahí que proponga calcularlo por persona».', en: 'What does she propose for large households?' },
              { prompt: '¿A qué podría destinarse el dinero de los tramos altos?', options: ['A reparar la red.', 'A nuevos embalses.', 'A bajar la tarifa básica.'], answer: 0, why: '«El dinero de los tramos altos podría destinarse precisamente a eso»: a empezar las reparaciones.', en: 'What could the money from the top tiers pay for?' },
              { prompt: '¿Qué hace Elena con la información sobre el aplazamiento de las obras?', options: ['La confirma con datos propios.', 'La niega en nombre de la empresa.', 'La recoge como no confirmada y dice que no la va a afirmar.'], answer: 2, why: '«Yo no tengo datos para confirmarlo, así que no lo voy a afirmar».', en: 'How does she handle the report about the postponement?' },
            ],
            transcript: 'Buenos días y bienvenidos a «Cuentas claras». Ayer el panel ciudadano debatió mi última columna y, como varios oyentes me han escrito, quiero precisar lo que dije y lo que no dije. [[No dije que|teal]] la tarifa por tramos sea la solución. Dije que [[todo apunta a que|blue]] reduce el consumo sin castigar a quien gasta poco, que no es lo mismo. También escribí, y lo mantengo, que [[no es descartable que|blue]] perjudique a los hogares numerosos si el tramo se calcula por vivienda; [[de ahí que|violet]] proponga calcularlo por persona. Por otra parte, muchos me preguntan por las fugas. La asociación vecinal tiene razón en lo esencial: perder casi cuatro de cada diez litros es difícil de justificar. [[Si bien|violet]] renovar la red llevará años, nada impide empezar ya, [[máxime cuando|violet]] el dinero de los tramos altos podría destinarse precisamente a eso. Sobre el supuesto aplazamiento de las obras: [[según la prensa local|teal]], se [[habrían retrasado|blue]] dos veces, algo que la empresa niega. Yo no tengo datos para confirmarlo, así que no lo voy a afirmar. [[Con todo|violet]], hay algo en lo que coinciden todas las fuentes: este verano no nos queda más remedio que ahorrar. Que nadie se llame a engaño: [[es probable que|blue]], sin ese ahorro, en septiembre haya cortes. Hasta la semana que viene.',
            reply: { teacher: 'Tú eres Elena. Tu alumno, como miembro del panel, la llama al programa: le agradece la precisión, recoge una de sus afirmaciones con el mismo grado de compromiso y le plantea una objeción atenuada («Entiendo su postura; dicho eso…»).', self: 'Graba un mensaje de 45 segundos para el programa, como miembro del panel: agradece la precisión, resume una afirmación de Elena sin cambiar su compromiso y plantea una objeción atenuada.' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Mediar y defender en voz alta', coach: 'Ahora el panel eres tú. Now you are the panel.',
      steps: [
        { title: 'Tu turno en el panel · Your turn on the panel', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces de Martín, de Rosario o de la persona de cada tarjeta: presionas, exageras un dato o mezclas un rumor con un hecho. Tu alumno media, corrige con tacto y defiende su postura.', self: 'Lee cada situación y responde en voz alta durante uno o dos minutos. Antes de hablar, decide: ¿estás mediando (neutral) o defendiendo tu postura (señalada como tuya)?' } },
          { kind: 'talk', cards: [
            { q: 'Dispones de dos minutos para defender tu postura ante el panel: ¿tarifa por tramos, restricciones, reparaciones o una combinación? · Defend your own position to the panel in two minutes.', followUps: ['¿Y qué pasa con las familias que viven de alquiler? (What about families who rent?)', '¿Con qué grado de seguridad lo afirma? (How sure are you?)', '¿Qué fuente respalda su postura? (Which source backs you?)'], phrases: ['A mi juicio, …; [[si bien|violet]] …', '[[Todo indica que|blue]] … · [[no es descartable que|blue]] …', '[[De ahí que|violet]] proponga …', '[[No estaría de más|orange]] …'], hint: 'Postura clara, compromiso calibrado, una concesión y una propuesta concreta.', example: 'A mi juicio, la tarifa por persona es la medida más justa para este verano. Si bien las reparaciones son imprescindibles, llevarán años, y todo indica que el riesgo de cortes es inmediato. No es descartable que algunos hogares salgan perjudicados; de ahí que proponga revisar los tramos en otoño. Y no estaría de más que los ingresos de los tramos altos financiaran un calendario público de obras.' },
            { q: 'Martín te dice: «Eso que usted propone es un impuesto encubierto, y punto». Responde sin perder la calma ni hacerle perder la cara. · Answer a blunt objection without escalating.', followUps: ['—Usted no paga las facturas de mi casa. (—You don’t pay my bills.)', '—Ya, ya, eso dicen todos. (—Sure, that’s what they all say.)'], phrases: ['[[Entiendo su preocupación|orange]]; [[dicho eso|orange]], …', 'Quizá no me he explicado bien: …', 'Tiene razón en que …; [[con todo|violet]], …'], hint: 'Concede algo real, asume el malentendido y vuelve a los datos.', example: 'Entiendo su preocupación, Martín, y tiene razón en que nadie quiere pagar más. Quizá no me he explicado bien: con una tarifa por persona, el consumo básico sigue siendo barato; solo pagaría más quien gasta mucho más de lo necesario. Con todo, si usted cree que el umbral es bajo, podemos proponer que se revise. ¿Le parecería razonable?', teacher: 'Aquí presionas de verdad, con un tono algo seco, para que tu alumno practique la cortesía estratégica bajo tensión.' },
            { q: 'Como facilitador o facilitadora, media entre Martín (primero las fugas) y Camila (tarifa por persona ya). Resume las dos posturas con justicia y busca lo que tienen en común. · Mediate between two members: sum up both positions fairly and find common ground.', followUps: ['—Usted está del lado de Camila. (—You’re on Camila’s side.)', '—¿Y si no hay acuerdo? (—And if there is no agreement?)'], phrases: ['[[Si me permiten|orange]], resumo: …', '[[En otras palabras|teal]], …', 'Los dos [[coinciden en|teal]] … y [[discrepan en|teal]] …'], hint: 'Reformula cada postura de forma que su autor la reconozca; no elijas un bando.', example: 'Si me permiten, resumo: Martín sostiene que lo primero es reparar las fugas, porque no le parece justo pagar la mala gestión; Camila defiende una tarifa por persona inmediata, porque la sequía es de este verano. Los dos coinciden en que hay que actuar ya y discrepan en el orden. En otras palabras, quizá no sean propuestas incompatibles: ¿les parece que estudiemos las dos juntas?' },
            { q: 'Una vecina mayor, que no ha leído nada, te pregunta en la puerta del centro cívico: «¿Nos van a cortar el agua o no?». Explícaselo con claridad y sin alarmar ni minimizar. · Explain the situation to an elderly neighbour without alarming her or playing it down.', followUps: ['—¿Y yo qué puedo hacer? (—And what can I do?)', '—Mi vecino dice que la empresa roba el agua. (—My neighbour says the company is stealing water.)'], phrases: ['Mire, de momento no es seguro; [[es probable que|blue]] …, si …', '[[Es decir|teal]], …', 'Eso lo ha publicado la prensa, pero no está confirmado.'], hint: 'Usted, frases cortas, la condición clara y un consejo práctico.', example: 'Mire, de momento no es seguro. La empresa dice que es probable que haya cortes por la noche en septiembre si no ahorramos entre todos. Es decir, todavía estamos a tiempo. Usted puede ayudar con cosas sencillas: duchas cortas y la lavadora llena. Y lo de que la empresa roba el agua, no: lo que hay son muchas fugas en las tuberías, y eso sí hay que arreglarlo.' },
            { q: 'Rosario afirma ante el panel: «La empresa aplazó dos veces las obras, eso lo sabe todo el mundo». Corrige el dato con tacto sin desautorizar su propuesta. · Correct a rumour presented as fact, tactfully, without dismissing the proposal.', followUps: ['—¿Me está llamando mentirosa? (—Are you calling me a liar?)', '—Entonces, ¿no se puede decir nada? (—So we can’t say anything?)'], phrases: ['[[Perdone que la corrija|orange]], Rosario: …', '[[Según|teal]] la prensa, la empresa [[habría|blue]] …; la empresa lo niega.', '[[Con todo|violet]], su propuesta …'], hint: 'Separa el dato de la persona y salva la propuesta.', example: 'Perdone que la corrija, Rosario, solo para que el acta sea exacta: según la prensa local, la empresa habría aplazado las obras dos veces, y la empresa lo niega. No digo que no sea cierto; digo que no está confirmado. Con todo, su propuesta de un calendario público de reparaciones no depende de ese dato, y me parece muy razonable.' },
            { q: 'Mirada atrás: es la última clase del curso. ¿Qué podías hacer en español al empezar y qué puedes hacer hoy? ¿Qué estructura te costó más y cuál usas ya sin pensar? · Looking back on the whole course: what has changed?', followUps: ['¿Qué clase recuerdas mejor y por qué? (Which class do you remember best, and why?)', '¿Qué vas a seguir practicando? (What will you keep practising?)', '¿Cómo vas a mantener tu español a partir de ahora? (How will you keep your Spanish up?)'], phrases: ['Al principio solo podía …; ahora …', 'Lo que más me costó fue …, [[si bien|violet]] …', 'Todavía no domino del todo …; [[de ahí que|violet]] quiera …'], hint: 'Usa pasados variados, una concesión y un plan concreto.', example: 'Al principio solo podía presentarme y decir de dónde era. Lo que más me costó fue el subjuntivo, si bien ahora lo uso casi sin pensar después de «es probable que» o «no creo que». Todavía no domino del todo los conectores más cultos, de ahí que quiera seguir leyendo prensa y escuchando radio en español. Y lo que más me ha cambiado no es la gramática en sí, sino saber elegir el tono.', teacher: 'Tarjeta de cierre del curso: no se corrige la forma; se escucha. Si tu alumno quiere, cuenta también qué le gustaría aprender a partir de ahora.' },
          ], swap: { teacher: 'Al final cambian los papeles: tu alumno facilita el panel y tú defiendes una postura exagerada y mezclas rumores con hechos; tu alumno media, corrige y recoge la propuesta en una frase final.', self: 'Ahora eres la facilitadora: graba un minuto de cierre de la sesión que resuma las posturas con justicia, corrija un rumor presentado como hecho y recoja la propuesta final.' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Tu nota para el panel', coach: 'Primero lo que dicen ellos; después lo que piensas tú. First what they say, then what you think.',
      steps: [
        { title: 'Síntesis y postura · Synthesis and position', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Después tu alumno lee en voz alta solo la síntesis y tú dices, para cada fuente, si su compromiso ha subido, bajado o se ha mantenido; luego lee su postura y tú le planteas una objeción.', self: 'Escribe tu nota y toca «Revisar mi texto». Después relee la síntesis con una sola pregunta: ¿cada fuente dice lo mismo, con la misma fuerza, que en el dosier?' } },
          { kind: 'write', title: 'Nota de síntesis y postura para el Panel Ciudadano del Agua · Synthesis and position note for the panel', situation: 'Eres miembro del Panel Ciudadano del Agua de Lomaverde. Antes de la votación, cada miembro entrega una nota de una página para el resto del panel (vecinos no expertos): primero, una síntesis neutral de las tres fuentes; después, en un párrafo aparte, tu postura personal. (Write a one-page note for the other panel members: a neutral synthesis of the three sources, then your own position in a separate paragraph.)', task: [
            'Organiza la síntesis por ejes (en qué coinciden y en qué discrepan las fuentes), no fuente por fuente. (Organise by agreements and disagreements.)',
            'Atribuye cada idea con un verbo adecuado y conserva el compromiso de cada fuente (es probable que, todo apunta a que, no descarta que, habría + participio). (Attribute and keep each source’s commitment.)',
            'Explica al menos una cifra con una equivalencia cotidiana para un público no experto. (Explain a figure in everyday terms.)',
            'En un párrafo aparte, señalado como tuyo, matiza una afirmación («Se afirma que…, pero los datos permiten matizarlo») y defiende tu postura con un conector de precisión y una propuesta atenuada. (Qualify a claim and defend your view.)',
          ], starters: ['Las tres fuentes coinciden en que…', 'Discrepan, en cambio, en…', 'El informe advierte de que…', 'Según la economista, todo apunta a que…', 'Mi postura. Se afirma que…, pero los datos permiten matizarlo:'], words: ['sostiene', 'advierte de que', 'reconoce', 'exige que', 'no descarta que', 'según', 'habría + participio', 'es decir', 'coinciden en', 'discrepan en', 'con todo', 'si bien', 'de ahí que', 'máxime cuando', 'no estaría de más'],
            model: 'Las tres fuentes coinciden en el diagnóstico: el agua escasea y hay que actuar este verano. Discrepan, en cambio, en el remedio. El informe de Aguas de Lomaverde sitúa las reservas en el 31 %, es decir, por debajo de un tercio y en el nivel más bajo de los últimos quince años, y advierte de que, si el consumo doméstico no baja un 15 % antes de agosto, es probable que haya cortes nocturnos en septiembre. El mismo informe estima en un 38 % las pérdidas de la red: casi cuatro de cada diez litros se pierden antes de llegar al grifo. La economista Elena Carrasco sostiene que todo apunta a que una tarifa por tramos reduce el consumo sin castigar a quien gasta poco; con todo, no descarta que perjudique a las familias numerosas si el tramo se calcula por vivienda. La Asociación Vecinal Barrio Alto exige que se reparen las fugas antes de subir las tarifas y recoge una información de la prensa local según la cual la empresa habría aplazado dos veces la renovación de tuberías; la empresa lo niega. Mi postura. Se afirma a menudo que el problema son las fugas y no los hogares, pero los datos permiten matizarlo: si bien reparar la red es imprescindible, las obras llevarán años, y el riesgo de cortes es de este verano. De ahí que me incline por una tarifa calculada por persona, cuyos tramos altos financien un calendario público de reparaciones. Entiendo a quienes temen pagar la mala gestión; precisamente por eso, no estaría de más que el panel exigiera ese calendario por escrito.',
            minWords: 200,
            checks: [
              { label: 'Verbos de atribución', pattern: '(?<!\\p{L})(?:sostiene|sostienen|advierte|advierten|exige|exigen|estima|reconoce|recoge|niega|considera|señala|afirma|no\\s+descarta)(?!\\p{L})', tip: 'Atribuye cada idea: «El informe advierte de que…», «La economista sostiene que…».' },
              { label: 'Compromiso de la fuente conservado', pattern: '(?<!\\p{L})(?:es\\s+probable\\s+que|todo\\s+apunta\\s+a\\s+que|no\\s+(?:es\\s+)?descart\\p{L}*|habría\\s+\\p{L}+(?:ado|ido))(?!\\p{L})', tip: 'Recoge el grado de certeza: «es probable que haya…», «no descarta que…», «habría aplazado…».' },
              { label: 'Síntesis por ejes', pattern: '(?<!\\p{L})(?:coincid\\p{L}+|discrep\\p{L}+)(?!\\p{L})', tip: 'Di en qué coinciden y en qué discrepan las fuentes.' },
              { label: 'Un matiz con los datos', pattern: '(?<!\\p{L})matiz\\p{L}*(?!\\p{L})', tip: 'Escribe, por ejemplo: «Se afirma que…, pero los datos permiten matizarlo».' },
              { label: 'Un conector de precisión', pattern: '(?<!\\p{L})(?:con\\s+todo|así\\s+y\\s+todo|si\\s+bien|de\\s+ahí\\s+que|habida\\s+cuenta\\s+de\\s+que|máxime\\s+cuando|toda\\s+vez\\s+que)(?!\\p{L})', tip: 'Usa uno o dos: «con todo», «si bien», «de ahí que» + subjuntivo.' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})(?:está\\s+demostrado|es\\s+seguro\\s+que|demuestra\\s+que|sin\\s+ninguna\\s+duda)(?!\\p{L})', why: 'Ninguna fuente afirma con certeza absoluta: revisa si has subido el compromiso.' },
              { pattern: '(?<!\\p{L})de\\s+ahí\\s+que\\s+(?:no\\s+)?(?:es|son|hay|está|están|tiene|tienen|debe|deben|puede|pueden|propongo|proponemos)(?!\\p{L})', why: '«De ahí que» va con subjuntivo: «de ahí que sea», «de ahí que proponga».' },
              { pattern: '(?<!\\p{L})niega\\s+que\\s+(?:ha|han)\\s+habido(?!\\p{L})', why: '«Negar que» rige subjuntivo: «niega que haya habido».' },
              { pattern: '(?<!\\p{L})en\\s+base\\s+a(?!\\p{L})', why: 'En un texto cuidado, mejor «sobre la base de» o «a partir de».' },
            ] },
        ] },
      ],
    },
    {
      id: 'cerrar', label: 'Cerrar', icon: '✓', mascot: '/brand/mascot/standing-crossed.webp',
      title: 'Lo esencial', coach: 'La última vuelta del curso. The last lap of the course.',
      steps: [
        { title: 'Lo esencial · The essentials', blocks: [
          { kind: 'recap', items: [
            { tone: 'teal', label: 'MEDIAR', formula: 'seleccionar · reorganizar por ejes · explicar (es decir, en otras palabras) · adaptar el registro (usted / ustedes, impersonal)', example: 'Es decir, casi cuatro de cada diez litros se pierden antes de llegar al grifo.', caption: 'hacer accesible una fuente a un público concreto', en: 'Mediation selects, reorganises and explains for a specific audience, while figures and conditions stay intact.' },
            { tone: 'blue', label: 'SINTETIZAR CON FIDELIDAD', formula: 'verbo de atribución + compromiso de la fuente: es probable que, todo apunta a que, no descarta que + subj., habría + participio', example: 'La economista no descarta que la tarifa perjudique a las familias numerosas.', caption: 'ni subir ni bajar lo que afirma cada fuente', en: 'Each claim keeps its owner, its condition and its strength; a rumour stays a rumour, a documented figure stays a fact.' },
            { tone: 'orange', label: 'DEFENDER CON TACTO', formula: 'conceder (entiendo su preocupación) + objetar (dicho eso) + proponer (no estaría de más…)', example: 'Entiendo su preocupación; dicho eso, no estaría de más empezar a ahorrar ya.', caption: 'firmeza en el fondo, cortesía en la forma', en: 'Concede, object, propose: you defend your position without making the other person lose face.' },
            { tone: 'violet', label: 'PRECISAR', formula: 'con todo · así y todo · si bien (+ ind.) · de ahí que (+ subj.) · habida cuenta de que · máxime cuando · toda vez que', example: 'Si bien reparar la red es imprescindible, las obras llevarán años.', caption: 'conectores que dicen exactamente la relación', en: 'Fine-grained connectors state the exact logical relation; one or two per paragraph is enough.' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Antes de entregar una síntesis, tres preguntas: **¿de quién es cada idea?**, **¿con qué fuerza la afirma?** y **¿para quién escribo?** Y una regla de oro: tu opinión puede aparecer, pero **separada y con tu nombre**: «Mi postura…», «A mi juicio…». Se afirma que mediar es resumir, pero los datos permiten matizarlo: mediar es resumir **sin cambiar el compromiso de nadie**.', en: 'Before handing in a synthesis, ask whose idea each one is, how strongly it is claimed and who you are writing for. Your opinion may appear, but separately and under your own name. Mediating is summarising without changing anyone’s level of commitment.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/portrait.webp', blocks: [
          { kind: 'choice', title: 'Cinco decisiones, sin ayuda · Five decisions, no help', items: [
            { prompt: '«La asociación exige que ___ las fugas».', options: ['se reparan', 'se reparen', 'se repararán'], answer: 1, why: '«Exigir que» + subjuntivo.', en: 'Exigir que takes the subjunctive.' },
            { prompt: 'Fuente: «Es posible que suba el precio». ¿Síntesis fiel?', options: ['La fuente contempla la posibilidad de que suba el precio.', 'La fuente asegura que el precio subirá.', 'La fuente descarta que suba el precio.'], answer: 0, why: 'Mismo grado: posibilidad, con subjuntivo.', en: 'Same degree of commitment: a possibility.' },
            { prompt: 'Un dato no confirmado, en un acta: «Según una fuente anónima, el gerente ___ su dimisión».', options: ['ha presentado sin duda', 'habría presentado', 'presentó'], answer: 1, why: 'Condicional de rumor: el acta no hace suyo el dato.', en: 'The rumour conditional keeps the information at arm’s length.' },
            { prompt: '«Reparar la red es urgente; ___, no basta para este verano».', options: ['habida cuenta de que', 'con todo', 'de ahí que'], answer: 1, why: '«Con todo» objeta tras una concesión.', en: 'Con todo: even so.' },
            { prompt: '¿Qué intervención defiende una postura y protege la imagen del otro?', options: ['Ya, ya; usted siempre exagera.', 'Lo que usted dice no tiene ningún sentido.', 'Entiendo su preocupación; dicho eso, quizá convendría separar las dos cosas.'], answer: 2, why: 'Concesión, objeción con «dicho eso» y propuesta atenuada.', en: 'Concession, objection and a softened proposal.' },
          ] },
        ] },
        { title: 'Otro municipio, otro debate · Another town, another debate', mascot: '/autoestudio/mascot/noting.webp', blocks: [
          { kind: 'lead', text: '**Puerto Albar**, un pueblo costero inventado, debate si limitar los pisos turísticos. Tres fuentes, tres compromisos distintos. Recógelos en la síntesis para el ayuntamiento sin subirlos ni bajarlos.', en: 'An invented coastal town is debating limits on holiday rentals. Three sources, three different levels of commitment: report them for the town council without inflating or deflating any of them.' },
          { kind: 'rewrite', title: 'Síntesis fiel · Faithful synthesis', items: [
            { prompt: 'Estudio de la universidad: «Es probable que los pisos turísticos hayan encarecido el alquiler».', instruction: 'Empieza con «El estudio considera probable que».', accept: ['El estudio considera probable que los pisos turísticos hayan encarecido el alquiler.'] },
            { prompt: 'Asociación de hosteleros: «No es cierto que el turismo expulse a los vecinos».', instruction: 'Empieza con «La asociación de hosteleros niega que».', accept: ['La asociación de hosteleros niega que el turismo expulse a los vecinos.'] },
            { prompt: 'Un vecino en la radio: «Dicen que el ayuntamiento ha concedido licencias sin control».', instruction: 'Es un rumor: empieza con «Según un vecino en la radio,» y usa el condicional de rumor.', accept: ['Según un vecino en la radio, el ayuntamiento habría concedido licencias sin control.'] },
          ] },
        ] },
        { title: 'Ampliación: el mismo contenido para el pleno y para los vecinos · Extension: one content, two audiences', mascot: '/brand/mascot/studying.webp', coach: 'Opcional: cambia el registro, no el compromiso. Optional: change the register, not the commitment.', blocks: [
          { kind: 'lead', text: 'El panel aprueba su recomendación y Lucía tiene que contarla dos veces: en un **informe escrito para el pleno municipal** (impersonal, conectores formales como **habida cuenta de que** o **toda vez que**) y en un **cartel para los vecinos** (frases cortas, cercanía, cifras con equivalencia). El registro cambia por completo; el **grado de certeza**, no.', en: 'The panel approves its recommendation and the facilitator has to relay it twice: in a written report for the city council (impersonal, formal connectors) and on a poster for residents (short sentences, a closer tone, figures with everyday equivalents). The register changes completely; the degree of certainty does not.' },
          { kind: 'choice', title: '¿Qué versión encaja? · Which version fits?', items: [
            { prompt: 'Informe para el pleno municipal:', options: ['Como el agua está fatal, hay que ahorrar ya, ¿vale?', 'Toda vez que las reservas se sitúan en el 31 %, el panel recomienda adoptar medidas de ahorro inmediatas.', 'Las reservas están al 31 % y eso, pues, mal.'], answer: 1, why: '«Toda vez que» (causal formal) + voz institucional («el panel recomienda»); las otras son coloquiales.', en: 'Formal causal connector and an institutional voice for a written report to the council.' },
            { prompt: 'Cartel en el centro de salud, para los vecinos:', options: ['Se ha constatado una minoración hídrica significativa.', 'El agua escasea: si ahorramos ahora, es probable que evitemos cortes en septiembre.', 'Habida cuenta de la merma de las reservas, procede la contención del consumo.'], answer: 1, why: 'Lenguaje claro y el mismo compromiso («es probable»), con la condición.', en: 'Plain language that keeps the same probability and the condition.' },
            { prompt: 'Mensaje al grupo de vecinos de la escalera:', options: ['Les cuento lo del panel: no es seguro que haya cortes, pero es probable si no ahorramos.', 'Les cuento: habrá cortes sí o sí.', 'Se les informa de que el panel ha emitido dictamen.'], answer: 0, why: 'Cercano y fiel: «no es seguro que» + subjuntivo, «es probable si…».', en: 'Friendly and faithful: neither alarmist nor bureaucratic.' },
            { prompt: 'Frase de cierre del informe para el pleno:', options: ['En fin, ya veremos qué pasa con las tuberías.', 'Con todo, las tuberías, un desastre.', 'Con todo, el panel considera imprescindible acompañar la tarifa de un calendario público de reparaciones.'], answer: 2, why: '«Con todo» formal y una recomendación concreta, sin valoraciones coloquiales.', en: 'A formal connector and a concrete recommendation, no colloquial judgement.' },
          ] },
          { kind: 'teacher', text: 'Paso opcional, para alumnos fuertes o si sobra tiempo. Extra: tu alumno redacta la recomendación final del panel en dos versiones de tres líneas, una para el pleno y otra para el grupo de vecinos, y comprueba que el grado de certeza es el mismo en las dos.' },
        ] },
        { title: 'Fin del curso · End of the course', blocks: [
          { kind: 'review' },
          { kind: 'lead', text: 'Empezaste este curso con **tu primer «hola»**. Por el camino han pasado el presente, ser y estar, los pasados, el subjuntivo, el estilo indirecto, los registros y la cortesía. Hoy has leído tres fuentes enfrentadas, las has contado a un público concreto sin traicionarlas y has defendido tu postura con tacto. La gramática no termina aquí: se sigue afinando cada vez que lees, escuchas y hablas.', en: 'You began this course with your first “hola”. Along the way came the present tense, ser and estar, the past tenses, the subjunctive, reported speech, register and politeness. Today you read three conflicting sources, relayed them to a specific audience without betraying them and defended your own position with tact. Grammar does not end here: it keeps sharpening every time you read, listen and speak.' },
          { kind: 'link', title: 'Fin del curso · Course complete', text: 'Has terminado el curso de gramática A0–C2', en: 'You have completed the A0–C2 grammar course.', href: '/spanish-grammar-lessons', label: 'Volver al curso' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre del curso: «Si tuvieras que explicar a alguien que empieza qué es lo más importante que has aprendido, ¿qué le dirías, y con qué grado de seguridad?». No hay respuesta esperada: se escucha.' },
        ] },
      ],
    },
  ],
};
