import type { LiveLesson } from '../types';

/**
 * Lesson 527 · C2 · Discursos periodísticos: atribución y precisión (course unit G227).
 * Builds on G193 (lesson 493: según, supuestamente, stance of reporting verbs), G194 (lesson 494:
 * direct, indirect and integrated quotation, period after the closing quote) and G208 (lesson 508:
 * conditional of rumour, presunto). Their cores are not repeated: here they become newsroom craft.
 * Content: journalistic genres and their grammar (noticia, crónica, entrevista, opinión: person,
 * tenses, evaluative language); the lead and the six questions (qué, quién, cuándo, dónde, cómo,
 * por qué); headline grammar (present for recent past events, participle headlines without the
 * verb, nominal headlines, article ellipsis, infinitive only in service headlines, colon + quote:
 * Pérez: «No dimitiré», no final period); attribution verbs and neutrality (dijo, afirmó, explicó,
 * señaló vs admitió, reconoció, denunció, alegó, cedió); quotation in the press (comillas + coma +
 * verbo, raya for the reporter’s inciso inside a quote, quote headlines); precision with numbers,
 * dates and quantities (más de / cerca de / casi, %, percentage points, billion = mil millones,
 * decimal comma or point, lower-case months); presunto vs supuesto; agency and sourcing formulas
 * (según ha podido saber este diario, fuentes consultadas por, fuentes de + entidad, en un
 * comunicado); vague sources (anchor: «Fuentes cercanas aseguraron que se habría pactado»).
 * Documented errors (DPD / Fundéu): a nivel de, en base a, detentar vs ostentar, infligir vs
 * infringir, transitive dimitir, «infinitivo radiofónico», anaphoric «el mismo».
 * Scene: the night desk of the regional digital paper «Diario del Valle». Beatriz Ocampo (desk
 * editor, keeper of the style guide) edits Julián Paredes’s story on the bus drivers’ strike:
 * the city bus company and the drivers’ committee (spokesman Raúl Montero) sign a pre-agreement
 * at the regional transport department (consejera Rosa Pérez). Sofía Almagro is a trainee.
 * Escuchar: Julián’s audio note dictating the story from the street (es-ES-AlvaroNeural).
 * Escribir: the news item itself, neutral and precise.
 */
export const lesson: LiveLesson = {
  id: 527,
  level: 'C2',
  title: 'Discursos periodísticos: atribución y precisión',
  subtitle: 'Redactar una noticia neutral y exacta: titular, entradilla, citas bien puntuadas, verbos de atribución justos y cifras precisas.',
  legend: [
    { tone: 'teal', label: 'ATRIBUCIÓN NEUTRA · dijo, afirmó, según fuentes del comité (the source is named, the outlet stays neutral)' },
    { tone: 'orange', label: 'CARGA O VAGUEDAD · admitió, denunció, ceden, fuentes cercanas (the outlet tilts or blurs)' },
    { tone: 'blue', label: 'PRECISIÓN · más de cuatro millones, el 3,5 %, el 5 de marzo (exact figures and dates)' },
    { tone: 'violet', label: 'TITULAR Y CITA · Firman un preacuerdo · Pérez: «No dimitiré» (headline and quote grammar)' },
  ],
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: '¿Qué ha pasado y quién lo dice?', coach: 'Cada dato, con su dueño y su cifra exacta. Every fact with its owner and its exact figure.',
      steps: [
        { title: 'El cierre de la edición · Closing the edition', blocks: [
          { kind: 'lead', text: '«Diario del Valle», jueves, once de la noche. Beatriz Ocampo, editora de mesa y guardiana del libro de estilo, abre la pieza que Julián Paredes ha enviado sobre la huelga de autobuses. La entradilla dice: «Los conductores ceden por fin. [[Fuentes cercanas aseguraron que se habría pactado|orange]] una subida para el segundo año, de cerca de cinco millones». Beatriz suspira: en dos frases hay una opinión disfrazada de hecho, una fuente que no se sabe de dónde es, una doble cautela y una cifra que no es la que dio nadie. Hoy aprendes a detectarlo y a escribirlo bien.', en: 'A regional digital paper, late on a Thursday. The desk editor reads a reporter’s draft on a bus strike: in two sentences there is opinion posing as fact, a source nobody can locate, a double hedge (“sources assured” plus a conditional of rumour) and a figure nobody actually gave. Today you learn to spot all of that and to write it properly.' },
          { kind: 'guide', text: { teacher: 'Tú lees las dos versiones en voz alta. Tu alumno señala cada cambio y dice qué problema resuelve: ¿opinión, fuente, cautela o cifra?', self: 'Lee las dos versiones y busca cada cambio: ¿qué problema resuelve? (Opinion, source, hedging or figure?)' } },
          { kind: 'compare', title: 'La misma entradilla, dos versiones · The same lead, two versions', columns: [
            { tone: 'orange', label: 'BORRADOR', sentence: 'Los conductores [[ceden|orange]] por fin. [[Fuentes cercanas aseguraron que se habría pactado|orange]] una subida para el segundo año, de [[cerca de cinco millones|orange]].', idea: '«Ceden» juzga; «cercanas» no dice a qué; «aseguraron» y «habría» se contradicen; la cifra es inventada.', en: 'The verb passes judgement, the source cannot be located, the reporting verb asserts while the conditional distances, and “close to five million” is nobody’s figure.' },
            { tone: 'teal', label: 'VERSIÓN EDITADA', sentence: 'Empresa y comité [[firmaron|teal]] un preacuerdo que desconvoca la huelga. [[Según fuentes del comité|teal]], la subida del segundo año rondará el 2 %. El acuerdo costará [[algo más de cuatro millones de euros|blue]] al año, según la consejería.', idea: 'Hechos en indicativo, cada dato con su fuente concreta y la cifra tal como se dio.', en: 'Facts in the indicative, each claim tied to a specific source, and the figure exactly as it was given. The reader can judge for themselves.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué problema tiene «Fuentes cercanas aseguraron que se habría pactado»?', options: ['La fuente no se puede localizar y «aseguraron» choca con la distancia de «habría».', 'Que «aseguraron» debería ir en subjuntivo.', 'Ninguno: es la fórmula habitual de las agencias.'], answer: 0, why: '«Cercanas» exige un complemento (¿cercanas a qué?), y si la fuente lo asegura, el condicional de rumor añade una segunda cautela que deja el dato en el aire.', en: 'A vague source plus a double hedge: the reader cannot tell who claims it or how firmly.' },
            { prompt: '¿Por qué «Los conductores ceden» no vale en una noticia?', options: ['Porque falta el artículo.', 'Porque es una interpretación del periodista, no un hecho.', 'Porque el presente no se usa en prensa.'], answer: 1, why: '«Ceder» valora el resultado (alguien perdió el pulso). En la noticia se cuenta lo que pasó: firmaron un preacuerdo.', en: 'Interpretation belongs in a chronicle or a column, not in a straight news item.' },
          ] },
        ] },
        { title: 'Géneros y entradilla · Genres and the lead', mascot: '/brand/mascot/studying.webp', coach: 'Cada género tiene su gramática. Each genre has its own grammar.', blocks: [
          { kind: 'table', title: 'Cuatro géneros, cuatro gramáticas · Four genres, four grammars', head: ['Género', 'Quién habla', 'Tiempos y rasgos', 'Ejemplo'], rows: [
            ['**Noticia** · news item', 'el medio, en tercera persona; el periodista no opina', 'pasado o presente de hechos; cifras; atribución en cada dato; pirámide invertida (lo más importante, primero)', 'Empresa y comité [[firmaron|teal]] un preacuerdo tras once horas de reunión.'],
            ['**Crónica** · chronicle', 'un periodista que estuvo allí; firma y estilo propio', 'relato cronológico, descripción, adjetivos valorativos, a veces primera persona', 'A las siete, con el café ya frío, Montero salió sin ganas de celebrar nada.'],
            ['**Entrevista** · interview', 'el entrevistado, citado literalmente', 'pregunta-respuesta o citas entre comillas; usted o tú según el medio y la persona', '—¿Está satisfecho? —No es el acuerdo que queríamos.'],
            ['**Opinión** · column, editorial', 'el autor (columna) o el medio (editorial)', 'primera persona, valoración, argumentación, modalidad: creo, debería, es inaceptable', 'La consejería ha llegado tarde a un conflicto que se veía venir.'],
          ], note: 'En la noticia, el tiempo para lo ocurrido hoy varía: en la prensa de España es frecuente el pretérito perfecto («ha firmado esta tarde»); en buena parte de América se prefiere el indefinido («firmó esta tarde»). Las dos opciones son correctas en su norma.' },
          { kind: 'concept', tone: 'blue', label: 'LA ENTRADILLA · The lead', question: '¿Responde el primer párrafo a lo esencial?', en: 'The lead (entradilla) is the first paragraph of a news item. It answers the core questions, usually in the order of importance: what happened, who did it, when and where, and how or why. Everything else goes further down, so the story can be cut from the bottom without losing the news.', formula: ['qué + quién → cuándo + dónde → cómo / por qué', 'una o dos oraciones; sin opinión; con la fuente del dato principal'],
            meaning: 'La entradilla condensa la noticia: **qué** pasó, **quién** lo hizo, **cuándo** y **dónde**, y **cómo** o **por qué**. Si el lector deja de leer ahí, ya sabe lo importante.',
            examples: [
              { es: 'La empresa de autobuses y el comité de conductores [[firmaron el jueves 5 de marzo|blue]], en la Consejería de Movilidad, un preacuerdo que desconvoca la huelga del lunes, tras once horas de negociación.', en: 'What, who, when, where and how in one sentence: the shape most news leads take.' },
              { es: 'La subida salarial pactada, del 3,5 % este año, es la razón principal de que el comité haya retirado la convocatoria.', en: 'The “why”, often placed in the second sentence of the lead.' },
            ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Con el café ya frío y la corbata aflojada, Montero salió sin ganas de celebrar nada». ¿Qué género es?', options: ['Crónica.', 'Editorial.', 'Noticia.'], answer: 0, why: 'Descripción, detalle sensorial y una interpretación del periodista que estuvo allí: rasgos de la crónica.', en: 'Description and the reporter’s own reading of the scene: a chronicle.' },
            { prompt: '¿Qué pregunta de la entradilla falta en «Empresa y comité firman un preacuerdo que desconvoca la huelga»?', options: ['Cuándo y dónde.', 'Qué.', 'Quién.'], answer: 0, why: 'Dice qué y quién, pero no cuándo ni dónde: el titular puede prescindir de ellos; la entradilla, no.', en: 'What and who are there; when and where are missing.' },
          ] },
        ] },
        { title: 'La gramática del titular · Headline grammar', mascot: '/brand/mascot/speaking.webp', coach: 'Pocas palabras, ninguna ambigua. Few words, none ambiguous.', blocks: [
          { kind: 'table', title: 'Cinco moldes de titular · Five headline patterns', head: ['Molde', 'Ejemplo', 'Qué hay que saber'], rows: [
            ['**presente** para un hecho reciente', '[[Dimite|violet]] la directora del Museo Provincial', 'El presente acerca el hecho, aunque ya ha ocurrido; también anuncia lo programado: «El comité vota el martes».'],
            ['**participio** sin verbo auxiliar', '[[Desconvocada|violet]] la huelga de autobuses del lunes', 'Se omite «ha sido» / «queda»: el participio concuerda con el sujeto.'],
            ['**nominal**', '[[Subida|violet]] del 3,5 % para los conductores', 'Sin verbo conjugado: el sustantivo resume el hecho.'],
            ['**infinitivo** de servicio', '[[Cómo moverse|violet]] por la ciudad si hay huelga', 'Solo en titulares prácticos («cómo», «claves para»); no para informar de un hecho.'],
            ['**dos puntos + cita**', '[[Pérez: «No dimitiré»|violet]]', 'Nombre, dos puntos y la cita literal con mayúscula, entre comillas.'],
          ], note: 'Los titulares omiten a menudo el artículo («Empresa y comité firman…»), siempre que el sentido siga claro. Y no llevan **punto final**, como los títulos en general.' },
          { kind: 'tip', icon: '💡', title: 'El titular de cita · The quote headline', text: 'En el titular Pérez: «No dimitiré», las comillas son imprescindibles: sin ellas, el diario parece afirmar algo por su cuenta. Si dentro de la cita hay otra, se usan las comillas inglesas: «Pérez: “No dimitiré”» cuando todo el titular va citado en otro texto. El orden recomendado por la Ortografía es « », luego “ ” y por último ‘ ’.', en: 'In a quote headline the quotation marks are what tell the reader the outlet is reporting, not asserting. Spanish orthography recommends angle quotes first, then double, then single quotes for nested quotations.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué titular está bien construido y puntuado?', options: ['Desconvocada la huelga de autobuses del lunes', 'Desconvocada la huelga de autobuses del lunes.', 'Desconvocado la huelga de autobuses del lunes.'], answer: 0, why: 'El participio concuerda con «la huelga» (femenino) y el titular no lleva punto final.', en: 'Participle agreement and no final period.' },
            { prompt: 'La consejera ha dicho: «No voy a dimitir». ¿Qué titular la cita bien?', options: ['Pérez: no voy a dimitir', 'Pérez, que no dimitirá.', 'Pérez: «No voy a dimitir»'], answer: 2, why: 'Dos puntos, cita literal entre comillas con mayúscula, sin punto final. Sin comillas, «no voy a dimitir» parece una frase del diario.', en: 'Colon, the exact words in quotation marks, capital letter, no period.' },
          ] },
        ] },
        { title: 'Atribuir sin juzgar · Attributing without judging', mascot: '/brand/mascot/seated.webp', coach: 'El verbo también informa. The verb is information too.', blocks: [
          { kind: 'compare', title: 'Neutros y cargados · Neutral and loaded', columns: [
            { tone: 'teal', label: 'NEUTROS', sentence: 'Montero [[dijo|teal]] / [[afirmó|teal]] / [[explicó|teal]] / [[señaló|teal]] que el acuerdo no era el que querían.', idea: 'Informan de que alguien habló; no valoran lo dicho.', en: 'They only report that someone said something. “Dijo” is the most neutral; repeating it is better than reaching for a verb that adds judgement.' },
            { tone: 'orange', label: 'CARGADOS', sentence: 'Montero [[admitió|orange]] / [[reconoció|orange]] / [[alegó|orange]] que el acuerdo no era el que querían.', idea: 'Añaden una interpretación: concesión, culpa o excusa.', en: '“Admitió” and “reconoció” imply he is conceding something unfavourable; “alegó” frames it as an excuse. They are correct only when that is literally what happened.' },
          ] },
          { kind: 'table', title: 'Qué añade cada verbo · What each verb adds', head: ['Verbo', 'Qué presupone', 'Cuándo procede'], rows: [
            ['**admitir · reconocer**', 'que lo dicho es cierto y le perjudica o lo había negado', 'si hay concesión real: «reconoció que había firmado sin leer el anexo»'],
            ['**denunciar**', 'que hay una irregularidad o un abuso', 'si presenta una denuncia o una queja formal: «el comité denunció ante Inspección…»'],
            ['**alegar**', 'que es una justificación o una defensa', 'en contextos jurídicos o de defensa explícita'],
            ['**confesar · desvelar**', 'que había algo oculto', 'casi nunca en una noticia neutral'],
            ['**asegurar · sostener · insistir en**', 'firmeza del hablante, sin juicio del medio', 'cuando la fuente se compromete con fuerza'],
          ], note: 'No hay verbos prohibidos: hay verbos que **deben corresponder a lo que pasó**. Si el portavoz solo habló, «dijo» o «afirmó».' },
          { kind: 'concept', tone: 'violet', label: 'CITAR EN PRENSA · Quoting in the press', question: '¿Reproduces las palabras exactas o su contenido?', en: 'Direct quotes reproduce the exact words in quotation marks; indirect quotes report the content without them. In the press, the reporting verb usually follows the quote after a comma. If the reporter’s comment interrupts the quote, it goes between dashes and the quotation marks are not closed and reopened. The final period always goes after the closing quotation mark.', formula: ['«cita», + verbo + fuente.', 'Fuente + verbo: «Cita».', '«Cita —verbo + fuente—. Sigue la cita».', 'Fuente + verbo + que + contenido (sin comillas)'],
            meaning: 'La **cita directa** reproduce palabras exactas entre comillas; la **indirecta** cuenta el contenido. Si el periodista intercala su comentario dentro de la cita, va entre **rayas**, sin cerrar las comillas.',
            examples: [
              { es: '«No es el acuerdo que queríamos», [[dijo Montero|teal]].', en: 'Comma after the closing quotation mark, then the verb and the speaker, then the period.' },
              { es: '«No es el acuerdo que queríamos [[—dijo Montero—|violet]]. Pero es el que se podía firmar».', en: 'The reporter’s inciso goes between dashes inside the quotation, which stays open.' },
              { es: 'Montero [[afirmó|teal]] que el preacuerdo se votará en asamblea el martes.', en: 'Indirect quote: no quotation marks, the content adapted to the reporter’s sentence.' },
            ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'El portavoz solo dijo: «La subida es insuficiente». ¿Qué verbo es neutral?', options: ['denunció que la subida era insuficiente', 'afirmó que la subida era insuficiente', 'admitió que la subida era insuficiente'], answer: 1, why: '«Afirmó» informa sin interpretar. «Denunció» presenta una irregularidad; «admitió», una concesión que no hubo.', en: 'He just said it: which verb adds nothing?' },
            { prompt: '¿Qué cita está bien puntuada?', options: ['«Seguiremos negociando» aseguró Pérez.', '«Seguiremos negociando», aseguró Pérez.', '«Seguiremos negociando.», aseguró Pérez.'], answer: 1, why: 'Tras las comillas de cierre va la coma; dentro no se pone punto. Sin coma, la frase queda pegada.', en: 'Comma after the closing quote, no period inside.' },
          ] },
        ] },
        { title: 'Precisión: cifras, fechas, fuentes · Precision', mascot: '/autoestudio/mascot/noting.webp', coach: 'Ni más ni menos de lo que dicen los datos. No more and no less than the data say.', blocks: [
          { kind: 'table', title: 'Cifras exactas · Exact figures', head: ['Dato real', 'Bien', 'Mal', 'Por qué'], rows: [
            ['1240 conductores', '[[más de 1200|blue]] conductores', 'cerca de 1300', '«más de» = por encima; «cerca de» y «casi» sugieren que la cifra real queda un poco por debajo'],
            ['4,2 millones', '[[algo más de cuatro millones|blue]]', 'cerca de cinco millones', 'redondear sí, desplazar el dato no'],
            ['2 billion dollars (inglés)', '[[2000 millones de dólares|blue]]', '2 billones de dólares', 'en español, un billón es un millón de millones'],
            ['puntualidad: del 80 % al 88 %', 'sube [[ocho puntos|blue]] (un 10 % más)', 'sube un 8 %', 'puntos porcentuales ≠ porcentaje de aumento'],
            ['jueves, 5 de marzo', 'el [[5 de marzo|blue]]', 'el 5 de Marzo · «ayer» en una web', 'meses en minúscula; en digital, mejor la fecha que «ayer»'],
          ], note: 'La Ortografía escribe el símbolo separado de la cifra (**3,5 %**). El decimal se marca con coma o con punto según el país; las dos opciones se admiten.' },
          { kind: 'table', title: 'Fuentes: de la más clara a la más vaga · Sources, from clearest to vaguest', head: ['Fórmula', 'Qué dice al lector'], rows: [
            ['[[Rosa Pérez, consejera de Movilidad, afirmó|teal]]…', 'fuente con nombre y cargo: la más sólida'],
            ['[[en un comunicado|teal]] · [[en declaraciones a este diario|teal]]', 'el canal por el que se obtuvo el dato'],
            ['[[según fuentes del comité|teal]] · fuentes de la consejería', 'fuente anónima, pero localizable: se sabe de qué entidad es'],
            ['[[según ha podido saber este diario|teal]]', 'el medio se hace responsable de una información propia, sin revelar la fuente'],
            ['[[fuentes cercanas|orange]] · fuentes solventes · fuentes bien informadas', 'vaguedad: ¿cercanas a qué? Necesita complemento: «cercanas a la negociación»'],
          ], note: '**Presunto** se reserva para quien está acusado de un delito y no ha sido condenado («el presunto autor»). **Supuesto** marca la duda sobre algo en general: «el supuesto acuerdo secreto», «la supuesta dimisión».' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Siguieron la huelga 812 de 1240 conductores, según el comité. ¿Qué frase es exacta?', options: ['Cerca del 80 % de los conductores siguió la huelga.', 'Cerca de dos tercios de los conductores siguieron la huelga, según el comité.', 'Casi el 70 % de los conductores siguió la huelga, según el comité.'], answer: 1, why: '812 / 1240 ≈ 65,5 %, un poco por debajo de dos tercios (66,7 %): «cerca de dos tercios» es exacto y lleva fuente. «Casi el 70 %» exagera; «cerca del 80 %» es falso y no tiene fuente.', en: 'About 65.5%: which wording is both accurate and attributed?' },
            { prompt: 'Un despacho en inglés dice «the company lost $1.5 billion». ¿Cómo lo traduces?', options: ['la empresa perdió 15 millones de dólares', 'la empresa perdió 1,5 billones de dólares', 'la empresa perdió 1500 millones de dólares'], answer: 2, why: 'El «billion» inglés equivale a mil millones: 1,5 billion = 1500 millones. Un billón español es un millón de millones.', en: 'English “billion” = Spanish “mil millones”.' },
          ] },
        ] },
        { title: 'Errores documentados · Documented errors', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Lo que señalan el DPD y la Fundéu. What the DPD and Fundéu flag.', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees cada frase errónea. Tu alumno explica qué falla antes de ver la corrección.', self: 'Lee cada frase errónea y piensa qué falla antes de ver la corrección. (Think first, then reveal.)' } },
          { kind: 'mistakes', title: 'Errores frecuentes en prensa · Common press errors', items: [
            { wrong: 'El acuerdo es positivo a nivel de empleo.', right: 'El acuerdo es positivo para el empleo / en cuanto al empleo.', why: 'El DPD admite «a nivel de» cuando hay niveles o alturas reales («a nivel del mar», «una reunión a nivel de ministros»), no como comodín por «en cuanto a» o «en el ámbito de».' },
            { wrong: 'La empresa calculó la subida en base a la inflación.', right: 'La empresa calculó la subida sobre la base de / a partir de la inflación.', why: 'El DPD recomienda sustituir «en base a» por «sobre la base de», «basándose en», «según», «a partir de».' },
            { wrong: 'Pérez, que detenta la consejería desde 2023, firmó el acta.', right: 'Pérez, que ocupa (u ostenta) la consejería desde 2023, firmó el acta.', why: '«Detentar» significa retener o ejercer ilegítimamente un poder o un cargo. Para un cargo legítimo: ocupar, desempeñar, ostentar.' },
            { wrong: 'La empresa infligió el convenio colectivo.', right: 'La empresa infringió el convenio colectivo.', why: 'Se «infringe» una norma (se incumple); se «inflige» un castigo, un daño o una derrota.' },
            { wrong: 'El presidente dimitió al director de la empresa.', right: 'El presidente destituyó al director de la empresa. / El director dimitió.', why: '«Dimitir» es intransitivo: dimite quien renuncia a su cargo. Si otro lo aparta, lo destituye.' },
            { wrong: 'Por último, señalar que el servicio será normal el lunes.', right: 'Por último, hay que señalar que el servicio será normal el lunes.', why: 'El DPD rechaza el infinitivo como verbo principal de una oración independiente («infinitivo radiofónico»): falta un verbo conjugado.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué frase es correcta?', options: ['El dictador que detentó el poder durante veinte años.', 'La alcaldesa, que detenta el cargo desde las elecciones de 2023.', 'El sindicato que detenta la presidencia del comité por votación.'], answer: 0, why: '«Detentar» implica ilegitimidad: encaja con un poder usurpado, no con un cargo obtenido en unas elecciones o por votación.', en: '“Detentar” means holding power illegitimately.' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno busca una noticia de hoy y subraya los verbos de atribución y las cifras. ¿Algún verbo cargado sin motivo? ¿Alguna cifra sin fuente?' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'La mesa de edición', coach: 'Toca cada marca: ¿neutral, cargada o precisa? Tap each mark.',
      steps: [
        { title: 'Beatriz edita a Julián · Beatriz edits Julián', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Beatriz y tu alumno es Julián. Después tu alumno toca cada expresión marcada y explica qué problema tiene o resuelve.', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada: ¿qué problema tiene o qué resuelve? (What does each mark fix or break?)' } },
          { kind: 'explore', title: '«¿Quién dice que ceden?»', setting: 'Jueves, once y cuarto de la noche. Julián Paredes ha vuelto a la redacción de «Diario del Valle». Beatriz Ocampo tiene su pieza abierta en la pantalla y quedan veinte minutos para el cierre.', lines: [
            { who: 'Beatriz', text: 'Julián, empiezo por el titular: «Los conductores [[ceden|orange]] y aceptan la subida de la empresa». ¿Quién dice que ceden?', en: 'Let’s start with the headline: “Drivers give in and accept the company’s raise.” Who says they gave in?' },
            { who: 'Julián', text: 'Hombre, pedían un cinco por ciento y firman un tres y medio. Blanco y en botella.', en: 'Come on, they asked for five per cent and signed for three and a half. It’s obvious.' },
            { who: 'Beatriz', text: 'Es una lectura, y cabe en tu crónica de mañana, no en la noticia. Pon lo que ha pasado: «[[Empresa y comité firman un preacuerdo y desconvocan la huelga|violet]]».', en: 'That’s an interpretation; it fits in your chronicle tomorrow, not in the news item. Say what happened.' },
            { who: 'Julián', text: 'Vale. ¿Y la entradilla? He puesto que el portavoz [[admitió|orange]] que no era el acuerdo que querían.', en: 'Fine. And the lead? I’ve put that the spokesman admitted it wasn’t the deal they wanted.' },
            { who: 'Beatriz', text: '¿Lo admitió o lo dijo? Si nadie se lo arrancó, [[dijo|teal]] o [[afirmó|teal]]. Y la frase es buena: cítala literal.', en: 'Did he admit it or say it? If nobody dragged it out of him, “said” or “stated”. And it’s a good line: quote it word for word.' },
            { who: 'Julián', text: 'Literal: «No es el acuerdo que queríamos, pero es el que se podía firmar», [[dijo Montero|teal]].', en: 'Word for word: “It’s not the deal we wanted, but it’s the one we could sign,” Montero said.' },
            { who: 'Beatriz', text: 'Eso. Y ahora la cifra: tienes «cerca de cinco millones». ¿De dónde sale?', en: 'Exactly. Now the figure: you have “close to five million”. Where does that come from?' },
            { who: 'Julián', text: 'La consejera dijo [[algo más de cuatro|blue]]. Lo redondeé.', en: 'The regional minister said a little over four. I rounded it.' },
            { who: 'Beatriz', text: 'Hacia arriba y casi un millón. Pon [[más de cuatro millones de euros|blue]] y atribúyelo a ella. ¿Y esto de que [[fuentes cercanas aseguraron que se habría pactado|orange]] el segundo año?', en: 'Upwards, and by almost a million. Write “over four million euros” and attribute it to her. And what about “close sources assured that it would reportedly have been agreed”?' },
            { who: 'Julián', text: 'Me lo contó alguien del comité, pero no quiere salir con nombre. Y la empresa no lo confirma.', en: 'Someone on the committee told me, but they don’t want to be named. And the company won’t confirm it.' },
            { who: 'Beatriz', text: 'Pues dilo así: «[[Según fuentes del comité|teal]], la subida del segundo año rondará el 2 %, una cifra que la empresa [[no confirma|teal]]». Una fuente localizable, una sola cautela y el lector sabe a qué atenerse.', en: 'Then say exactly that. A source the reader can place, a single hedge, and the reader knows where they stand.' },
          ], notes: {
            'ceden': 'Verbo valorativo: interpreta el resultado como una derrota de los conductores. En una noticia, el hecho es que firmaron un preacuerdo.',
            'Empresa y comité firman un preacuerdo y desconvocan la huelga': 'Titular informativo: presente para un hecho de hoy, sin artículos («Empresa y comité») y sin punto final. Dice qué pasó, no qué significa.',
            'admitió': '«Admitir» presupone una concesión, algo que le cuesta reconocer. Si el portavoz simplemente lo dijo, el verbo añade un juicio del periodista.',
            'dijo': 'El verbo de atribución más neutro. Repetirlo es mejor que buscar un sinónimo que valore.',
            'afirmó': 'Neutral, algo más formal que «dijo»: presenta lo dicho como aseveración de la fuente, sin juicio del medio.',
            'dijo Montero': 'Cita directa con la atribución detrás: comillas de cierre, coma, verbo y fuente, y el punto al final.',
            'algo más de cuatro': 'La cifra tal como la dio la fuente. El redondeo tiene que respetar el sentido: «algo más de cuatro» no es «cerca de cinco».',
            'más de cuatro millones de euros': '«Más de» indica que la cifra real está por encima: exacto y legible. Con la unidad completa («de euros»).',
            'fuentes cercanas aseguraron que se habría pactado': 'Tres problemas: «cercanas» sin complemento, un verbo de certeza («aseguraron») y un condicional de rumor («habría») a la vez. El dato no tiene dueño ni grado claro de certeza.',
            'Según fuentes del comité': 'Fuente anónima pero localizable: el lector sabe de qué parte procede el dato y puede valorarlo.',
            'no confirma': 'Informa de un hecho comprobable (la empresa no lo confirma) en lugar de insinuar. Equilibra la versión de una sola parte.',
          } },
        ] },
        { title: '¿Has entendido? · Did you understand?', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'choice', title: 'Comprensión · Comprehension', items: [
            { prompt: '¿Dónde dice Beatriz que cabe «los conductores ceden»?', options: ['En la crónica que Julián escribirá al día siguiente.', 'En ninguna parte del periódico.', 'En el titular, si va entre comillas.'], answer: 0, why: '«Cabe en tu crónica de mañana, no en la noticia»: la interpretación es legítima en la crónica, firmada y con voz propia.', en: 'Interpretation has a place, just not in the news item.' },
            { prompt: '¿Por qué corrige Beatriz «cerca de cinco millones»?', options: ['Porque en prensa no se redondea nunca.', 'Porque falta el símbolo del euro.', 'Porque la consejera dio otra cifra y el redondeo la desplaza casi un millón.'], answer: 2, why: 'La fuente dijo «algo más de cuatro»; redondear hacia arriba hasta cinco cambia el dato.', en: 'Rounding is fine; moving the figure is not.' },
            { prompt: '¿Qué solución propone para el dato del segundo año?', options: ['Atribuirlo a fuentes del comité y decir que la empresa no lo confirma.', 'Mantener «habría pactado» para cubrirse.', 'Quitarlo porque no tiene nombre.'], answer: 0, why: 'Una fuente localizable y un hecho verificable (la empresa no lo confirma) sustituyen a la doble cautela.', en: 'A source the reader can place, plus a checkable fact.' },
          ] },
        ] },
        { title: 'Clasifica las frases de Julián · Sort Julián’s sentences', mascot: '/brand/mascot/portrait.webp', blocks: [
          { kind: 'guide', text: { teacher: 'Son frases del borrador de Julián. Tu alumno decide si cada una atribuye bien, si carga o es vaga, o si tiene un problema de precisión.', self: 'Son frases del borrador de Julián. Decide qué les pasa. (Neutral, loaded or vague, or imprecise?)' } },
          { kind: 'classify', title: '¿Qué le pasa a cada frase? · What is wrong with each?', categories: [
            { id: 'neutra', label: 'Atribución neutra', tone: 'teal' },
            { id: 'cargada', label: 'Carga o vaguedad', tone: 'orange' },
            { id: 'imprecisa', label: 'Problema de precisión', tone: 'blue' },
          ], items: [
            { text: 'El director de la empresa se jactó de haber evitado la huelga.', answer: 'cargada', why: '«Jactarse» ridiculiza al hablante; si solo lo dijo, «afirmó».' },
            { text: 'Fuentes de la consejería indicaron que el servicio será normal el lunes.', answer: 'neutra', why: 'Fuente localizable y verbo neutro.' },
            { text: 'La huelga habría afectado a casi 100 000 viajeros diarios (la empresa calcula 72 000).', answer: 'imprecisa', why: '72 000 no es «casi 100 000»: el redondeo desplaza el dato casi un 40 %.' },
            { text: 'Según fuentes solventes, la consejera estaría molesta con el comité.', answer: 'cargada', why: '«Fuentes solventes» no dice quiénes son, y el condicional añade rumor a una vaguedad.' },
            { text: '«Firmamos por responsabilidad», explicó Montero.', answer: 'neutra', why: 'Cita literal, bien puntuada, con un verbo que no juzga.' },
            { text: 'La reunión acabó el pasado 5 de Marzo a las siete y pico.', answer: 'imprecisa', why: 'Meses en minúscula y hora exacta: «el 5 de marzo, a las 19:15».' },
          ] },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'En la mesa de cierre', coach: 'Decide como una editora. Decide like an editor.',
      steps: [
        { title: 'El verbo justo · The right verb', blocks: [
          { kind: 'guide', text: { teacher: 'Tu alumno lee el contexto y elige el verbo que corresponde a lo que pasó, ni más ni menos. Después explica qué añadirían los otros.', self: 'Lee el contexto y elige el verbo que corresponde a lo que pasó. (Match the verb to what actually happened.)' } },
          { kind: 'choice', title: 'Verbos de atribución · Reporting verbs', items: [
            { prompt: 'Durante semanas, el director negó cualquier subida. Hoy, preguntado por un periodista, dice: «Sí, habrá subida». El director ___ que habrá subida.', options: ['alegó', 'reconoció', 'denunció'], answer: 1, why: 'Hay una concesión real: lo había negado. «Reconocer» corresponde a lo que pasó.', en: 'He had denied it before: here the loaded verb is accurate.' },
            { prompt: 'El comité presenta un escrito ante la Inspección de Trabajo por servicios mínimos abusivos. El comité ___ ante la Inspección unos servicios mínimos abusivos.', options: ['confesó', 'admitió', 'denunció'], answer: 2, why: 'Hay una denuncia formal: «denunciar» es literal, no una valoración del periodista.', en: 'There is a formal complaint, so the verb is literal.' },
            { prompt: 'La consejera, en rueda de prensa: «El servicio será normal el lunes». La consejera ___ que el servicio será normal el lunes.', options: ['se jactó de', 'afirmó', 'confesó'], answer: 1, why: 'Una declaración sin más: verbo neutro. «Confesar» y «jactarse» añaden un juicio.', en: 'A plain statement at a press conference.' },
            { prompt: 'Ante el juez, el conductor expedientado dice que no oyó la alarma. Su abogado ___ que su cliente no oyó la alarma.', options: ['admitió', 'desveló', 'alegó'], answer: 2, why: 'En un contexto de defensa jurídica, «alegar» es el verbo propio: presenta un argumento a su favor.', en: 'A legal defence: the verb that fits that context.' },
            { prompt: 'Montero añade un matiz a su primera respuesta: «Bueno, insuficiente para este año; el segundo es otra cosa». Montero ___ que la subida era insuficiente para este año.', options: ['matizó', 'denunció', 'confesó'], answer: 0, why: '«Matizar» describe lo que hizo: precisar o limitar lo dicho antes. No hay irregularidad ni secreto.', en: 'He qualified his earlier statement.' },
          ] },
        ] },
        { title: '¿Qué género es? · Which genre?', mascot: '/brand/mascot/pointing.webp', blocks: [
          { kind: 'guide', text: { teacher: 'Son fragmentos de la edición del viernes. Tu alumno los clasifica por género y señala la marca gramatical que lo delata.', self: 'Clasifica cada fragmento de la edición del viernes y busca la marca que lo delata. (Which grammatical clue gives it away?)' } },
          { kind: 'classify', title: 'La edición del viernes · Friday’s edition', categories: [
            { id: 'noticia', label: 'Noticia', tone: 'teal' },
            { id: 'cronica', label: 'Crónica', tone: 'blue' },
            { id: 'entrevista', label: 'Entrevista', tone: 'violet' },
            { id: 'opinion', label: 'Opinión', tone: 'orange' },
          ], items: [
            { text: 'Los conductores votarán el preacuerdo en asamblea el martes 10 de marzo.', answer: 'noticia', why: 'Tercera persona, dato y fecha exactos, sin valoración.' },
            { text: 'Eran casi las siete cuando se abrió la puerta y nadie, ni siquiera Montero, se atrevió a sonreír.', answer: 'cronica', why: 'Relato, ambiente y una interpretación del testigo.' },
            { text: '—¿Volvería a convocar la huelga? —Sin dudarlo, si la empresa incumple.', answer: 'entrevista', why: 'Formato pregunta-respuesta con rayas y usted.' },
            { text: 'Once horas para firmar lo que podía haberse firmado en enero dicen mucho de cómo se gestiona esta consejería.', answer: 'opinion', why: 'Valoración explícita y argumento: columna o editorial.' },
            { text: 'La empresa calcula que la huelga habría afectado a 72 000 viajeros diarios.', answer: 'noticia', why: 'Dato atribuido a su fuente; el condicional aquí es hipotético: la huelga no llegó a hacerse.' },
            { text: 'Ya es hora de que alguien piense en quienes esperan el autobús a las seis de la mañana.', answer: 'opinion', why: '«Ya es hora de que» + subjuntivo: exhortación del autor.' },
          ] },
        ] },
        { title: 'Titulares y citas: ¿están bien? · Headlines and quotes', mascot: '/brand/mascot/standing.webp', blocks: [
          { kind: 'guide', text: { teacher: 'Son titulares y citas de la edición. Tu alumno decide si están bien y, si no, elige la corrección y explica la regla.', self: 'Decide si cada titular o cita está bien. Si no, elige la corrección. (Right or wrong? Then pick the fix.)' } },
          { kind: 'fix', title: '¿Está bien? · Is it right?', items: [
            { sentence: 'Desconvocados los paros previstos para el lunes y el martes', ok: true, why: 'Titular de participio: concuerda con «los paros» (masculino plural) y no lleva punto final.' },
            { sentence: 'Montero: No firmaremos nada sin asamblea.', ok: false, options: ['Montero, «no firmaremos nada sin asamblea».', 'Montero: no firmaremos nada sin asamblea', 'Montero: «No firmaremos nada sin asamblea»'], answer: 2, why: 'Titular de cita: dos puntos, comillas, mayúscula inicial y sin punto final. Sin comillas parece que lo afirma el diario.' },
            { sentence: '«Seguiremos vigilando —advirtió Montero—». Que la empresa cumpla.', ok: false, options: ['«Seguiremos vigilando», advirtió Montero, «que la empresa cumpla».', '«Seguiremos vigilando —advirtió Montero—. Que la empresa cumpla».', '«Seguiremos vigilando» —advirtió Montero—. «Que la empresa cumpla.»'], answer: 1, why: 'El inciso del periodista va entre rayas dentro de la cita, sin cerrar las comillas; el punto final, fuera.' },
            { sentence: 'La consejera aseguró que «el servicio será normal el lunes».', ok: true, why: 'Cita integrada: tras «que», minúscula y punto después de las comillas.' },
            { sentence: 'Una multinacional del transporte perdió 2 billones de dólares el año pasado. (El despacho en inglés decía «$2 billion».)', ok: false, options: ['Una multinacional del transporte perdió 2000 millones de dólares el año pasado.', 'Una multinacional del transporte perdió 2 millones de dólares el año pasado.', 'Una multinacional del transporte perdió 2 billion de dólares el año pasado.'], answer: 0, why: 'El «billion» inglés son mil millones; un billón español es un millón de millones. La traducción literal multiplica la cifra por mil.' },
            { sentence: 'El acuerdo se votará en asamblea el 10 de Marzo.', ok: false, options: ['El acuerdo se votará en asamblea el día 10 de Marzo.', 'El acuerdo se votará en asamblea el diez de Marzo.', 'El acuerdo se votará en asamblea el 10 de marzo.'], answer: 2, why: 'Los meses se escriben con minúscula.' },
          ] },
        ] },
        { title: 'Beatriz y la becaria · Beatriz and the trainee', mascot: '/brand/mascot/speaking.webp', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees el papel de Sofía y tu alumno el de Beatriz; en cada hueco, tu alumno elige y justifica.', self: 'Completa la conversación entre Beatriz y Sofía, la becaria. En cada hueco, justifica tu elección. (Justify each choice.)' } },
          { kind: 'chat-fill', title: 'La primera noticia de Sofía · Sofía’s first story', lines: [
            { who: 'Sofía', text: 'Beatriz, he escrito: «El acuerdo es un avance ___ calidad del servicio». ¿Suena bien?', options: ['en base a la', 'a nivel de', 'en cuanto a la'], answer: 2, why: '«A nivel de» no indica aquí niveles reales y «en base a» no tiene ese sentido: «en cuanto a la calidad del servicio».' },
            { who: 'Beatriz', text: 'Mejor. ¿Y el titular? «Pérez ___ la gestión del conflicto».', options: ['confiesa', 'defiende', 'se jacta de'], answer: 1, why: 'Si la consejera defendió su gestión en rueda de prensa, «defiende» describe lo que hizo sin ridiculizarla ni insinuar culpa.' },
            { who: 'Sofía', text: 'Vale. En la entradilla pongo que el seguimiento de la huelga del mes pasado fue del 78 %.' },
            { who: 'Beatriz', text: '¿Según quién? La empresa dio un 41 %. Escribe: «___».', options: ['Cerca del 60 %, más o menos', 'Un 78 % de los conductores secundó el paro', 'Un 78 % según el comité, un 41 % según la empresa'], answer: 2, why: 'Si las fuentes discrepan, se dan las dos cifras con su fuente. Hacer la media inventa un dato; dar solo una toma partido.' },
            { who: 'Sofía', text: 'Y al final: «Por último, ___ que habrá servicios mínimos del 30 %».', options: ['recordando', 'recordar', 'cabe recordar'], answer: 2, why: 'El infinitivo solo («recordar que…») no puede ser el verbo principal; «cabe recordar» o «hay que recordar» lo arreglan.' },
          ] },
        ] },
        { title: 'Construye la frase · Build the sentence', mascot: '/autoestudio/mascot/noting.webp', blocks: [
          { kind: 'guide', text: { teacher: 'Tu alumno ordena las piezas y lee la frase con la entonación de un locutor. Fíjense en dónde va la atribución.', self: 'Ordena las piezas. Fíjate en la posición de la atribución y en la puntuación pegada a cada pieza. (Watch the attribution and the punctuation.)' } },
          { kind: 'build', title: 'Ordena · Put in order', items: [
            { tiles: ['Según', 'fuentes', 'del', 'comité,', 'la', 'empresa', 'aceptará', 'la', 'revisión.'], accept: ['Según fuentes del comité, la empresa aceptará la revisión.'], en: 'According to committee sources, the company will accept the review.' },
            { tiles: ['«Firmamos', 'por', 'responsabilidad»,', 'explicó', 'el', 'portavoz.'], accept: ['«Firmamos por responsabilidad», explicó el portavoz.'], en: '“We signed out of responsibility,” the spokesman explained.' },
            { tiles: ['La', 'empresa', 'no', 'ha', 'confirmado', 'la', 'cifra', 'del', 'segundo', 'año.'], accept: ['La empresa no ha confirmado la cifra del segundo año.'], en: 'The company has not confirmed the figure for the second year.' },
          ] },
        ] },
        { title: 'Reescribe con neutralidad · Rewrite neutrally', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'guide', text: { teacher: 'Son frases de una web que cubre la misma huelga con poco cuidado. Tu alumno las reescribe según la instrucción y lee en voz alta las dos versiones.', self: 'Son frases de otra web sobre la misma huelga. Reescríbelas según la instrucción. (Rewrite following the instruction.)' } },
          { kind: 'rewrite', title: 'Sin carga, con fuente · No spin, with a source', items: [
            { prompt: 'El sindicato admitió que la subida era insuficiente.', instruction: 'El portavoz solo lo dijo. Cambia el verbo por «afirmó».', accept: ['El sindicato afirmó que la subida era insuficiente'] },
            { prompt: 'Los conductores claudican ante la empresa', instruction: 'Escribe un titular informativo en presente: «Empresa y comité firman un preacuerdo».', accept: ['Empresa y comité firman un preacuerdo', 'La empresa y el comité firman un preacuerdo'] },
            { prompt: 'Fuentes cercanas aseguran que la consejera habría presionado a la empresa.', instruction: 'Haz localizable la fuente («fuentes del comité») y quita el condicional: usa «presionó».', accept: ['Fuentes del comité aseguran que la consejera presionó a la empresa', 'Según fuentes del comité, la consejera presionó a la empresa'] },
            { prompt: 'Montero dijo que no es el acuerdo que querían.', instruction: 'Conviértelo en cita directa con sus palabras exactas: «No es el acuerdo que queríamos», y la atribución detrás.', accept: ['«No es el acuerdo que queríamos», dijo Montero', 'No es el acuerdo que queríamos, dijo Montero'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno elige una noticia real y reescribe su titular con otro molde (participio, nominal o cita) sin cambiar los hechos.' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Julián dicta desde la calle', coach: 'Separa lo comprobado de lo atribuido. Checked facts apart from claims.',
      steps: [
        { title: 'Nota de voz para la mesa · Voice note for the desk', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general. Segunda escucha: tu alumno anota cada dato y dice si está comprobado o atribuido, y a quién.', self: 'Escucha una vez para la idea general. En la segunda, anota cada dato: ¿comprobado o atribuido, y a quién? Vas a oír «preacuerdo» (pre-agreement) y «abro comillas… cierro comillas» (quote… unquote).' } },
          { kind: 'listen', title: 'Nota de voz de Julián Paredes', channel: 'DIARIO DEL VALLE · NOTA DE VOZ · 19:40', src: '/audio/grammar-live/527.mp3',
            before: 'Julián acaba de salir de la negociación y le manda a Beatriz los datos por audio. ¿Qué crees que dará como seguro y qué no? (What will he treat as certain, and what not?)',
            gist: { prompt: '¿Qué hace Julián en el audio? · What does Julián do?', options: ['Dicta los datos de la noticia separando lo comprobado de lo atribuido y avisa de lo que no debe publicarse.', 'Cuenta que la huelga se mantiene el lunes.', 'Pide a Beatriz que escriba que el director dimite.'], answer: 0, why: 'Da el hecho y la cifra comprobados, atribuye lo demás, dicta una cita literal y descarta un rumor.', en: 'He dictates the story, keeping checked facts apart from sourced claims, and flags what must not run.' },
            details: [
              { prompt: '¿Qué dato ha comprobado Julián personalmente?', options: ['La subida del 3,5 % de este año: ha visto el documento.', 'La dimisión del director.', 'La subida del 2 % del segundo año.'], answer: 0, why: '«Lo que está confirmado, porque he visto el documento, es una subida salarial del tres coma cinco por ciento este año».', en: 'What has he seen with his own eyes?' },
              { prompt: '¿Cómo presenta la cifra del segundo año?', options: ['Como un hecho firmado.', 'Como una opinión suya.', 'Como un dato del comité que la empresa no confirma.'], answer: 2, why: '«Según fuentes del comité, rondaría el dos por ciento, pero la empresa no lo confirma».', en: 'Who is the source of the second-year figure?' },
              { prompt: '¿Qué le pide a Beatriz sobre la frase de Montero?', options: ['Que la resuma en estilo indirecto.', 'Que no la use porque es off the record.', 'Que no le ponga «admitió», porque solo lo dijo.'], answer: 2, why: '«No lo ha admitido como una derrota, solo lo ha dicho; no le pongas un verbo que no usó».', en: 'Which verb does he warn against?' },
              { prompt: '¿Por qué insiste en «más de cuatro millones»?', options: ['Porque es la cifra que dio la consejera y la ha preguntado dos veces.', 'Porque prefiere redondear hacia abajo.', 'Porque la empresa dio cinco.'], answer: 0, why: '«Más de cuatro, no cerca de cinco: lo he preguntado dos veces».', en: 'Why that exact wording?' },
              { prompt: '¿Qué pasa con el rumor sobre el director?', options: ['Entra con condicional de rumor.', 'No entra: nadie lo ha confirmado.', 'Entra atribuido a fuentes cercanas.'], answer: 1, why: '«Nadie me lo ha confirmado, así que eso no entra».', en: 'Does the rumour go in the story?' },
            ],
            transcript: 'Beatriz, soy Julián. Te mando esto desde la puerta de la consejería, que acaban de salir ahora mismo. Te dicto lo básico y luego lo pulimos. Empresa y comité [[han firmado esta tarde, a las siete y cuarto|blue]], un preacuerdo que desconvoca la huelga del lunes. Lo que está confirmado, porque [[he visto el documento|teal]], es una subida salarial del [[tres coma cinco por ciento|blue]] este año. Para el segundo año no hay cifra cerrada: [[según fuentes del comité|teal]], rondaría el dos por ciento, pero [[la empresa no lo confirma|teal]]. Raúl Montero, el portavoz, ha dicho, abro comillas: «No es el acuerdo que queríamos, pero es el que se podía firmar». Cierro comillas. Ojo, que no lo ha [[admitido|orange]] como una derrota, solo lo ha dicho; no le pongas un verbo que no usó. La consejera, Rosa Pérez, [[ha afirmado|teal]] que el acuerdo costará [[algo más de cuatro millones de euros al año|blue]]. Más de cuatro, no cerca de cinco: lo he preguntado dos veces. Y lo de que el director se va, nada. Lo comentaban en la puerta, pero nadie me lo ha confirmado, así que eso no entra. Te mando las fotos en cinco minutos.',
            reply: { teacher: 'Tú eres Beatriz y llamas a Julián. Tu alumno es Julián y te dicta la entradilla definitiva en una o dos oraciones, con las seis preguntas y cada dato con su fuente.', self: 'Escribe en voz alta la entradilla a partir del audio: qué, quién, cuándo, dónde y por qué, con cada dato atribuido. (Dictate the lead from the voice note.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Debates de redacción', coach: 'Argumenta con precisión. Argue precisely.',
      steps: [
        { title: 'Neutralidad, fuentes y cifras · Neutrality, sources and figures', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas y tu alumno responde con argumentos. Si usa un verbo cargado o una cifra vaga, tú preguntas «¿Eso pasó así?» y tu alumno reformula.', self: 'Lee cada pregunta y responde en voz alta uno o dos minutos. Vigila tus verbos de atribución y tus cifras. (Watch your reporting verbs and figures.)' } },
          { kind: 'talk', cards: [
            { q: '¿Puede una noticia ser del todo neutral? Toma partido y concede algo al otro lado. · Can a news item ever be fully neutral?', followUps: ['¿Elegir qué se cuenta primero ya es opinar?', '¿Qué diferencia hay entre neutralidad y equidistancia?', '¿Dónde cabe la interpretación del periodista?'], phrases: ['Es cierto que…, pero…', 'Una cosa es [[dijo|teal]] y otra [[admitió|orange]]…', 'En una crónica sí cabe…', 'Lo verificable es…'], hint: 'Distingue la selección de los hechos, inevitable, de la valoración explícita, que tiene su sitio en la crónica y la opinión.', example: 'Del todo neutral, no: elegir qué va en el titular ya es una decisión. Pero hay una diferencia enorme entre decidir el orden y meter un juicio en el verbo. Si escribo que el portavoz «admitió» algo que solo dijo, estoy opinando sin decirlo. La interpretación es legítima, pero en una crónica firmada o en una columna, no en la noticia.' },
            { q: 'Eres Beatriz: explícale a Sofía cuándo «reconoció» o «denunció» son correctos y cuándo no. · Coach the trainee.', followUps: ['¿Qué ejemplo le pondrías de cada uno?', '¿Qué hace si duda entre dos verbos?'], phrases: ['[[reconoció|orange]] solo si…', '[[denunció|orange]] cuando hay…', 'Ante la duda, [[dijo|teal]]…', 'El verbo tiene que corresponder a lo que pasó.'], hint: 'Organiza la explicación por presuposiciones: concesión, irregularidad, excusa. Y da la regla de seguridad.', example: 'Mira, Sofía: «reconoció» solo cuando hay una concesión real, por ejemplo si el director había negado la subida y hoy dice que la habrá. «Denunció», cuando hay una denuncia o una queja formal, como el escrito del comité ante la Inspección. Si dudas, «dijo» o «afirmó»: repetir un verbo neutro nunca es un error; regalar un juicio, sí.' },
            { q: 'Una fuente del comité te da un dato, pero no quiere salir con nombre. ¿Lo publicas? ¿Cómo? · An anonymous source: publish or not?', followUps: ['¿Qué haces si solo tienes una fuente?', '¿«Según ha podido saber este diario» compromete al medio?'], phrases: ['[[según fuentes del comité|teal]]…', '[[según ha podido saber este diario|teal]]…', 'una cifra que la empresa [[no confirma|teal]]…', 'Antes de publicarlo, contrastaría…'], hint: 'Habla de fuentes localizables, de contrastar con la otra parte y de lo que asume el medio con cada fórmula.', example: 'Lo publicaría si puedo contrastarlo, y de forma que el lector sepa de qué lado viene: «según fuentes del comité». Además, preguntaría a la empresa y diría si lo confirma o no. «Según ha podido saber este diario» es otra cosa: el medio se hace responsable del dato, así que solo la usaría si lo tengo confirmado por más de una vía.' },
            { q: 'Compara estos dos titulares: Pérez: «No dimitiré» / Pérez no dimitirá. ¿Qué afirma el diario en cada uno? · Quote headline vs plain headline.', followUps: ['¿Qué pasa si se cae la cita?', '¿Cuándo prefieres el titular de cita?'], phrases: ['[[Pérez: «No dimitiré»|violet]]…', 'Con comillas, el diario…', 'Sin comillas, el diario afirma…'], hint: 'Fíjate en quién responde del contenido: la consejera, en el primero; el diario, en el segundo.', example: 'En el primero, el diario solo informa de lo que ha dicho la consejera: si mañana dimite, la cita sigue siendo verdad. En el segundo, el diario afirma un hecho futuro por su cuenta. Por eso, cuando lo importante es la declaración, el titular de cita es más honesto.' },
            { q: 'Cuenta una noticia reciente de tu ciudad o de tu trabajo con cifras: primero como un locutor, luego como se la contarías a un amigo. · Tell a story twice, with figures.', followUps: ['¿Qué cifras redondeas con un amigo?', '¿Dónde pones la fuente en cada versión?'], phrases: ['[[más de|blue]]… / [[cerca de|blue]]…', '[[según|teal]]…', 'puntos porcentuales…', 'Por lo visto…'], hint: 'En la versión formal: entradilla, fuente y cifra exacta. Con el amigo puedes redondear, pero sin cambiar el sentido.', example: 'Locutor: «El ayuntamiento ha aprobado este martes un plan de 3,2 millones de euros para renovar más de cuarenta parques, según ha informado en un comunicado». Con un amigo: «Por lo visto van a arreglar un montón de parques, unos cuarenta, y se gastan algo más de tres millones».' },
            { q: 'Eres Julián y entrevistas a Raúl Montero. Haz tres preguntas con usted, y luego cuenta su respuesta en estilo indirecto. · Interview, then report.', followUps: ['¿Qué pregunta evitarías por tendenciosa?', '¿Qué verbo usas para contar su respuesta?'], phrases: ['¿Podría explicarnos…?', '¿Qué responde a quienes dicen que…?', 'Montero [[explicó|teal]] que…', '«…», [[dijo Montero|teal]].'], hint: 'Preguntas abiertas y sin presuponer culpa; después, verbo neutro y puntuación correcta.', example: '«¿Podría explicarnos por qué han firmado ahora?», «¿Qué responde a quienes dicen que el acuerdo se queda corto?», «¿Qué pasará si la asamblea lo rechaza?». Montero explicó que firmaron porque la empresa mejoró la oferta en la última hora y añadió: «Si la asamblea dice que no, volveremos a la mesa».' },
          ], swap: { teacher: 'Al final cambian los papeles: tú cuentas una noticia con verbos cargados y cifras vagas, y tu alumno te corrige como editor: «¿Eso pasó así? ¿Según quién?».', self: 'Graba tu respuesta a dos tarjetas y escúchala: ¿algún verbo cargado sin motivo? ¿alguna cifra sin fuente? (Any loaded verb or unsourced figure?)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'La noticia de la huelga', coach: 'Hechos, fuentes y cifras exactas. Facts, sources and exact figures.',
      steps: [
        { title: 'Tu noticia para la web · Your story for the website', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Después revisan juntos: ¿la entradilla responde a las seis preguntas? ¿Cada dato tiene fuente? ¿Algún verbo cargado?', self: 'Escribe la noticia y toca «Revisar mi texto». Después comprueba la entradilla, las fuentes y los verbos. (Check the lead, the sources and the verbs.)' } },
          { kind: 'write', title: 'Noticia para la edición digital · A news item for the website', situation: 'Eres Julián Paredes. Con los datos de la nota de voz, escribes la noticia definitiva para la web de «Diario del Valle», que leerán miles de vecinos esta noche y mañana. (Write the final news item for the paper’s website from the voice-note facts. You may also cover a real event you know.)', task: [
            'Escribe un titular informativo, sin opinión y sin punto final.',
            'Abre con una entradilla que responda a qué, quién, cuándo, dónde y por qué.',
            'Incluye una cita directa bien puntuada y una cita indirecta, con verbos neutros.',
            'Da las cifras con precisión y atribuye cada dato que no hayas comprobado tú.',
            'Termina con lo que va a pasar después (próximos pasos, fechas).',
          ], starters: ['Empresa y comité firman…', 'La empresa de autobuses y el comité de conductores firmaron…', 'El texto, al que ha tenido acceso este diario,…', 'Según fuentes del comité,…', '«…», dijo…', 'Los conductores votarán…'],
            words: ['preacuerdo', 'desconvocar', 'entradilla', 'según fuentes de', 'afirmó', 'explicó', 'más de', 'puntos porcentuales', 'no confirma', 'asamblea'],
            model: 'Empresa y comité firman un preacuerdo y desconvocan la huelga de autobuses del lunes\n\nLa empresa municipal de autobuses y el comité de sus 1240 conductores firmaron el jueves 5 de marzo, en la Consejería de Movilidad, un preacuerdo que desconvoca la huelga prevista para el lunes 9. El texto, al que ha tenido acceso este diario, fija una subida salarial del 3,5 % para este año, tras once horas de negociación.\n\nPara el segundo año no hay cifra cerrada. Según fuentes del comité, la subida rondará el 2 %, un dato que la empresa no confirma. «No es el acuerdo que queríamos, pero es el que se podía firmar», dijo el portavoz del comité, Raúl Montero, cuyo sindicato pedía al comienzo de la negociación una subida del 5 %.\n\nLa consejera de Movilidad, Rosa Pérez, afirmó que el acuerdo costará a la empresa algo más de cuatro millones de euros al año y explicó que el servicio será normal el lunes. Los conductores votarán el preacuerdo en asamblea el martes 10 de marzo. Si lo rechazan, el comité tendrá que decidir si convoca una nueva huelga.',
            minWords: 170,
            checks: [
              { label: 'Una cita directa entre comillas', pattern: '«[^»]{8,}»', tip: 'Cita literal: «No es el acuerdo que queríamos…», dijo Montero.' },
              { label: 'Un verbo de atribución neutro (dijo, afirmó, explicó, señaló…)', pattern: '(?<!\\p{L})(?:dijo|afirmó|explicó|señaló|indicó|añadió|aseguró|ha\\s+dicho|ha\\s+afirmado)(?!\\p{L})', tip: 'Usa un verbo que no juzgue: «afirmó», «explicó».' },
              { label: 'Una fuente localizable (según…, fuentes de…, ha tenido acceso…)', pattern: '(?<!\\p{L})(?:según|fuentes\\s+de(?:l)?|tenido\\s+acceso|en\\s+un\\s+comunicado)(?!\\p{L})', tip: 'Atribuye lo que no has comprobado: «Según fuentes del comité…».' },
              { label: 'Al menos una cifra', pattern: '\\d', tip: 'Da los datos: la subida, el coste, la fecha.' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})(?:a\\s+nivel\\s+de|en\\s+base\\s+a)(?!\\p{L})', why: '«A nivel de» y «en base a»: el DPD recomienda otras fórmulas (en cuanto a, sobre la base de).' },
              { pattern: '(?<!\\p{L})fuentes\\s+(?:cercanas|próximas)(?!\\s+a)(?!\\p{L})', why: '«Fuentes cercanas» necesita complemento: ¿cercanas a qué?' },
              { pattern: '(?<!\\p{L})(?:admitió|confesó|se\\s+jactó|claudic\\p{L}*|ceden)(?!\\p{L})', why: 'Verbo cargado: úsalo solo si corresponde exactamente a lo que pasó.' },
              { pattern: '(?<!\\p{L})detent\\p{L}+', why: '«Detentar» significa ejercer un cargo ilegítimamente; para un cargo legítimo, «ocupar» u «ostentar».' },
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
            { tone: 'violet', label: 'TITULAR Y CITA', formula: 'presente · participio sin verbo · nominal · Nombre: «Cita» · sin punto final', example: 'Desconvocada la huelga · Pérez: «No dimitiré»', caption: 'Informa del hecho; las comillas dicen que habla otro.', en: 'Headlines report the event in compact forms; quotation marks show that someone else is speaking, not the paper.' },
            { tone: 'teal', label: 'ATRIBUCIÓN NEUTRA', formula: 'dijo · afirmó · explicó · señaló · según fuentes de + entidad', example: '«No es el acuerdo que queríamos», dijo Montero.', caption: 'Cada dato con su dueño; el verbo no juzga.', en: 'Every claim has an owner, and the reporting verb adds no judgement of its own.' },
            { tone: 'orange', label: 'CARGA O VAGUEDAD', formula: 'admitió · reconoció · denunció · alegó · fuentes cercanas', example: 'El director reconoció que habrá subida (la había negado).', caption: 'Solo si corresponde a lo que pasó.', en: 'Loaded verbs are correct only when they literally describe what happened; vague sources need a complement.' },
            { tone: 'blue', label: 'PRECISIÓN', formula: 'más de / cerca de / casi · 3,5 % · puntos ≠ % · mil millones = billion · 5 de marzo', example: 'El acuerdo costará algo más de cuatro millones de euros.', caption: 'Redondea sin desplazar el dato.', en: 'Round figures without moving them, keep percentage points apart from percentages, and translate “billion” as “mil millones”.' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'Las tres preguntas del editor · The editor’s three questions', text: 'Ante cada frase: **¿pasó así?** (el verbo), **¿según quién?** (la fuente) y **¿cuánto exactamente?** (la cifra). Si las tres tienen respuesta en el texto, la noticia es neutral y precisa.', en: 'Ask three things of every sentence: did it happen that way, according to whom, and exactly how much. If the text answers all three, the item is both neutral and precise.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/portrait.webp', coach: 'Sin ayuda. No help.', blocks: [
          { kind: 'choice', title: 'Cinco decisiones · Five decisions', items: [
            { prompt: 'El alcalde dice en un pleno: «El presupuesto está equilibrado». Ninguna concesión. El alcalde ___ que el presupuesto estaba equilibrado.', options: ['alegó', 'reconoció', 'afirmó'], answer: 2, why: 'Una declaración sin concesión ni defensa: verbo neutro.', en: 'A plain statement in a council meeting.' },
            { prompt: '¿Qué titular está bien?', options: ['Aprobado el nuevo horario de las bibliotecas', 'Aprobada el nuevo horario de las bibliotecas', 'Aprobado el nuevo horario de las bibliotecas.'], answer: 0, why: 'Participio concordado con «el nuevo horario» y sin punto final.', en: 'Agreement and no final period.' },
            { prompt: 'Asistieron 4870 personas. ¿Qué frase es exacta?', options: ['Cerca de 5000 personas asistieron al concierto.', 'Más de 5000 personas asistieron al concierto.', 'Unas 4000 personas asistieron al concierto.'], answer: 0, why: '4870 queda un poco por debajo de 5000: «cerca de» es exacto. «Más de 5000» es falso; «unas 4000» se queda corto.', en: 'Here “cerca de” is the honest rounding.' },
            { prompt: '¿Qué frase es correcta?', options: ['El club infligió una dura derrota al líder.', 'El club detentó una dura derrota al líder.', 'El club infringió una dura derrota al líder.'], answer: 0, why: 'Se inflige una derrota o un castigo; se infringe una norma.', en: 'Infligir a defeat, infringir a rule.' },
            { prompt: '¿Qué cita está bien puntuada?', options: ['«Volveremos a la mesa», añadió Montero.', '«Volveremos a la mesa.» añadió Montero.', '«Volveremos a la mesa», Añadió Montero.'], answer: 0, why: 'Coma tras las comillas de cierre, verbo en minúscula y punto al final.', en: 'Comma after the quote, lower-case verb, final period.' },
          ] },
        ] },
        { title: 'Transferencia · Transfer', mascot: '/brand/mascot/walking.webp', coach: 'Otra sección, la misma regla. Another section, the same rule.', blocks: [
          { kind: 'guide', text: { teacher: 'Una situación nueva: la sección de cultura cubre el cierre de un teatro. Tu alumno reescribe cada frase y explica qué ha cambiado.', self: 'Ahora, en la sección de cultura: reescribe cada frase según la instrucción. (A theatre closure in the culture section.)' } },
          { kind: 'rewrite', title: 'El cierre del teatro · The theatre closure', items: [
            { prompt: 'La directora del teatro confesó que la sala cerrará en junio.', instruction: 'Lo anunció en rueda de prensa, sin secreto: usa «anunció».', accept: ['La directora del teatro anunció que la sala cerrará en junio'] },
            { prompt: 'Cerca de 2 millones de euros de deuda (la cifra oficial es 1,43 millones).', instruction: 'Escribe una frase precisa que empiece por «La sala acumula una deuda de» y termine en «de euros», con «más de» y la cifra en millones con un decimal.', accept: ['La sala acumula una deuda de más de 1,4 millones de euros', 'La sala acumula una deuda de más de 1.4 millones de euros'] },
            { prompt: 'La directora: el teatro no se vende', instruction: 'Corrige el titular de cita. Sus palabras exactas fueron «El teatro no se vende».', accept: ['La directora: «El teatro no se vende»'] },
          ] },
        ] },
        { title: 'Ampliación · Entrevistas, «el mismo» y titulares que insinúan', mascot: '/brand/mascot/kneeling.webp', coach: 'Opcional. Optional.', blocks: [
          { kind: 'lead', text: 'Para estudiantes fuertes o si queda tiempo. Tres matices. **1.** En la **entrevista** en formato pregunta-respuesta, las preguntas suelen ir destacadas (en negrita o con la inicial del medio) y las respuestas, sin comillas: el formato ya indica que habla el entrevistado. **2.** El DPD desaconseja usar **el mismo / la misma** como simple pronombre: «Se detuvo el autobús y se desalojó a los pasajeros del mismo» → «a sus pasajeros». **3.** Un titular puede ser verdadero y aun así insinuar: «La consejera cobró dietas mientras duraba la huelga» es exacto si las cobró, pero sugiere una relación que nadie ha probado.', en: 'Optional extension: interview transcripts mark the questions typographically, so the answers need no quotation marks; the DPD advises against “el mismo” used as a plain pronoun; and a headline can be literally true yet insinuate a connection nobody has established.' },
          { kind: 'choice', title: 'Matices · Nuances', items: [
            { prompt: '¿Qué versión evita el «mismo» pronominal?', options: ['El comité revisó el acta y firmó dicha misma.', 'El comité revisó el acta y firmó la misma.', 'El comité revisó el acta y la firmó.'], answer: 2, why: 'Basta el pronombre átono: «la firmó». «La misma» como pronombre es el uso que el DPD desaconseja.', en: 'A plain clitic pronoun does the job.' },
            { prompt: '«Montero, que pedía un 5 %, firma un 3,5 %». ¿Qué hace este titular?', options: ['Es exacto, pero el contraste sugiere una derrota sin decirlo.', 'Es falso.', 'Solo da cifras, sin ningún efecto.'], answer: 0, why: 'Los datos son ciertos; la yuxtaposición construye la lectura de «cesión». Es legítimo en un análisis, discutible en el titular de una noticia.', en: 'True figures, framed to imply a defeat.' },
            { prompt: 'En una entrevista pregunta-respuesta, ¿cómo van las respuestas?', options: ['Sin comillas: el formato ya indica quién habla.', 'Siempre entre comillas.', 'En cursiva y con raya de cierre.'], answer: 0, why: 'La estructura pregunta-respuesta atribuye por sí misma; las comillas sobran.', en: 'The Q&A layout already tells the reader who is speaking.' },
          ] },
          { kind: 'teacher', text: 'Paso opcional: solo si queda tiempo o para estudiantes fuertes. Tu alumno compara dos titulares reales sobre el mismo hecho, de dos medios distintos, y explica qué verbo, qué molde y qué cifra cambian la lectura.' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 228 · Reformulación entre registro técnico y cotidiano', text: 'Hoy has trabajado la precisión del lenguaje periodístico: decir lo que pasó, quién lo dice y cuánto exactamente. En la clase 228 das el paso siguiente: pasar de un registro técnico o administrativo («Se procedió a la evacuación») a uno cotidiano («Evacuaron el edificio») sin perder exactitud, algo que un periodista hace cada vez que traduce un comunicado oficial.', en: 'Today you worked on precision in news writing: what happened, who says so, and exactly how much. Class 228 is the natural next step: turning technical or bureaucratic wording into everyday language without losing accuracy, which is what a reporter does every time they translate an official statement for readers.', href: '/gramatica/reformulacion-entre-registro-tecnico-y-cotidiano', label: 'Ir a la clase 228' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Qué diferencia hay entre “Montero dijo que el acuerdo es insuficiente”, “Montero admitió que el acuerdo es insuficiente” y “Montero denunció que el acuerdo es insuficiente”?». Respuesta esperada: declaración neutra; concesión presupuesta; irregularidad presupuesta. Tarea: la noticia de Escribir sobre un hecho real de la semana.' },
        ] },
      ],
    },
  ],
};
