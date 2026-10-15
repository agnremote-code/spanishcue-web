import type { LiveLesson } from '../types';

/**
 * Lesson 150 · B2 · Pretérito imperfecto de subjuntivo.
 * Core: the imperfect subjunctive after a past (or conditional) request or wish;
 * present hypotheses with «si» and distant wishes with «ojalá» as contrast;
 * «quisiera» and the -se forms as extension. One story runs through the class:
 * Elena's proposal to change how her team prepares its meetings.
 */
export const lesson: LiveLesson = {
  id: 150,
  level: 'B2',
  title: 'Imperfecto de subjuntivo',
  subtitle: 'Contar lo que alguien pidió o quería que pasara, plantear hipótesis sobre el presente y expresar deseos difíciles de cumplir.',
  legend: [
    { tone: 'blue', label: 'Petición o deseo en pasado (o condicional) + que' },
    { tone: 'teal', label: 'Hipótesis: si + imperfecto de subjuntivo' },
    { tone: 'orange', label: 'Deseo difícil: ojalá' },
    { tone: 'violet', label: 'Cortesía: quisiera' },
  ],
  optionNotes: {
    vengas: '«Vengas» es presente de subjuntivo. Si el verbo principal está en pasado («quería»), la concordancia pide el imperfecto: «vinieras».',
    pruebe: '«Pruebe» es presente de subjuntivo. Con «pidió», la concordancia pide «probara».',
    envíe: '«Envíe» es presente de subjuntivo. Con un verbo principal en pasado, se usa «enviara».',
    vendrías: 'El condicional no va después de «que» en una petición; se usa el imperfecto de subjuntivo.',
    tendría: 'El condicional va en la consecuencia, no después de «si»: «Si tuviera…, haría…».',
    tendrías: 'El condicional va en la consecuencia, no después de «si»: «Si tuvieras…».',
    tengo: 'Con el presente, «si» plantea una condición real o probable. Para una hipótesis alejada, imperfecto de subjuntivo.',
    sería: 'Después de «ojalá» no se usa el condicional. Para un deseo difícil: «ojalá fuera».',
    podieran: 'La raíz irregular del indefinido se mantiene: pudieron → pudiera.',
    tenieran: 'La raíz irregular del indefinido se mantiene: tuvieron → tuvieran.',
    hacieran: 'La raíz irregular del indefinido se mantiene: hicieron → hicieran.',
    decieran: 'La raíz irregular del indefinido se mantiene: dijeron → dijeran.',
    estaría: 'Después de «si» hipotético no va el condicional, sino el imperfecto de subjuntivo.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'El imperfecto de subjuntivo', coach: 'Una petición del pasado, una hipótesis, un deseo lejano.',
      steps: [
        { title: 'Cuando la perspectiva está en el pasado', blocks: [
          { kind: 'lead', text: 'En la última reunión, Elena propuso un cambio a su equipo. Si hoy contamos **lo que pidió** o **lo que quería**, el verbo que depende de esa petición pasa del presente al **imperfecto de subjuntivo**.' },
          { kind: 'guide', text: { teacher: 'Lean las dos columnas; tu alumno identifica qué verbo cambia y por qué cambia el otro.', self: 'Lee las dos columnas. ¿Qué verbo cambia primero? ¿Y cuál cambia como consecuencia?' } },
          { kind: 'compare', title: 'Hoy y en la reunión pasada', columns: [
            { tone: 'neutral', label: 'PERSPECTIVA PRESENTE', sentence: 'Elena **pide** que el equipo **pruebe** otra forma de organizarse.', idea: 'Petición actual → presente de subjuntivo.' },
            { tone: 'blue', label: 'PERSPECTIVA PASADA', sentence: 'Elena [[pidió que|blue]] el equipo [[probara|blue]] otra forma de organizarse.', idea: 'Petición en pasado → imperfecto de subjuntivo. La acción pedida se mira desde ese momento.' },
          ] },
          { kind: 'tip', icon: '🔗', title: 'Los tiempos se acompañan', text: 'El subjuntivo «sigue» al verbo principal: **pide → pruebe**; **pidió, pedía, había pedido, pediría → probara**. Esta correspondencia se llama **concordancia de tiempos**.' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'Elena **quería** que cada persona ___ un resumen.', options: ['envíe', 'enviara', 'envía'], answer: 1, why: '«Quería» está en pasado: la acción que depende de ese deseo va en imperfecto de subjuntivo.' },
            { prompt: 'Elena **quiere** que cada persona ___ un resumen.', options: ['envíe', 'enviara'], answer: 0, why: 'Con «quiere» en presente, se usa el presente de subjuntivo.' },
          ] },
        ] },
        { title: 'Cómo se forma', mascot: '/brand/mascot/studying.webp', coach: 'Todo sale de «ellos» del indefinido.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'FORMACIÓN', question: '¿De dónde sale la forma?', formula: ['ellos del indefinido − ron + ra / ras / ra / ramos / rais / ran', 'variante: − ron + se / ses / se / semos / seis / sen'],
            meaning: 'Se toma la tercera persona del plural del **indefinido**, se quita **-ron** y se añaden las terminaciones. Si el indefinido es irregular, el imperfecto de subjuntivo **hereda** esa irregularidad.',
            examples: [
              { es: 'hablaron → habla- → [[hablara|blue]]' },
              { es: 'tuvieron → tuvie- → [[tuviera|blue]]' },
              { es: 'fueron → fue- → [[fuera|blue]] (ser e ir)' },
              { es: 'pidieron → pidie- → [[pidiera|blue]]' },
            ] },
          { kind: 'table', title: 'Formas regulares', head: ['', 'hablar', 'comer', 'vivir'], rows: [
            ['yo', 'habla**ra** / habla**se**', 'comie**ra** / comie**se**', 'vivie**ra** / vivie**se**'],
            ['tú', 'habla**ras** / habla**ses**', 'comie**ras** / comie**ses**', 'vivie**ras** / vivie**ses**'],
            ['él / ella / usted', 'habla**ra** / habla**se**', 'comie**ra** / comie**se**', 'vivie**ra** / vivie**se**'],
            ['nosotros / nosotras', 'habl**áramos** / habl**ásemos**', 'comié**ramos** / comié**semos**', 'vivié**ramos** / vivié**semos**'],
            ['vosotros / vosotras', 'habla**rais** / habla**seis**', 'comie**rais** / comie**seis**', 'vivie**rais** / vivie**seis**'],
            ['ellos / ellas / ustedes', 'habla**ran** / habla**sen**', 'comie**ran** / comie**sen**', 'vivie**ran** / vivie**sen**'],
          ], note: 'La forma de «nosotros» lleva tilde: **habláramos, comiéramos**. Las formas en **-ra** y en **-se** son variantes del mismo tiempo; en la conversación, sobre todo en América, la forma en -ra es la más frecuente.' },
          { kind: 'table', title: 'Irregulares: la raíz del indefinido', head: ['ellos (indefinido)', 'imperfecto de subjuntivo'], rows: [
            ['tuvieron · estuvieron · pudieron', '**tuviera · estuviera · pudiera**'],
            ['hicieron · quisieron · vinieron', '**hiciera · quisiera · viniera**'],
            ['dijeron · trajeron · condujeron', '**dijera · trajera · condujera**'],
            ['fueron (ser / ir) · dieron · supieron', '**fuera · diera · supiera**'],
            ['pidieron · durmieron · siguieron', '**pidiera · durmiera · siguiera**'],
            ['leyeron · oyeron · hubo → hubieron', '**leyera · oyera · hubiera**'],
          ], note: 'Si conoces bien el indefinido, ya conoces el imperfecto de subjuntivo.' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'La base de «pudiera» viene de…', options: ['pudieron', 'pueden', 'podrían'], answer: 0, why: 'Ellos «pudieron» − ron → «pudie-» + ra.' },
            { prompt: 'Me pidieron que ___ la verdad.', options: ['decieran', 'dijera', 'diga'], answer: 1, why: 'Dijeron → dije- → «dijera». Y «pidieron», en pasado, pide imperfecto de subjuntivo.' },
          ] },
        ] },
        { title: 'Peticiones y deseos en pasado', mascot: '/brand/mascot/speaking.webp', coach: 'Lo que alguien quería que pasara.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'CONCORDANCIA CON EL PASADO', question: '¿Qué pidió? ¿Qué quería que pasara?', formula: ['pidió / quería / prefería / esperaba / era importante + que + imperfecto de subjuntivo', 'me gustaría / preferiría + que + imperfecto de subjuntivo'],
            meaning: 'Cuando el verbo de **deseo, petición, valoración o duda** está en **pasado** (o en condicional), la acción que depende de él va en imperfecto de subjuntivo. Lo mismo ocurre con **para que**, **sin que** o **antes de que** en un relato pasado.',
            examples: [
              { es: 'Elena [[pidió que|blue]] el equipo [[probara|blue]] una nueva forma de organizar las entregas.' },
              { es: 'Algunos compañeros [[dudaban de que|blue]] el cambio [[fuera|blue]] útil.' },
              { es: 'Lo explicó con calma [[para que|blue]] nadie lo [[interpretara|blue]] como una exigencia.' },
              { es: '[[Me gustaría que|blue]] una persona [[reuniera|blue]] las preguntas antes de la llamada.' },
            ],
            note: 'Con el **condicional** («me gustaría», «preferiría») también se usa el imperfecto de subjuntivo, aunque la petición mire al presente o al futuro.' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'Quería que tú ___ a la cena, pero no pudiste.', options: ['vinieras', 'vengas', 'vendrías'], answer: 0, why: 'Verbo principal en pasado + que: imperfecto de subjuntivo.' },
            { prompt: 'Me encantaría que mis padres ___ a visitarme.', options: ['vengan', 'vinieran', 'vendrían'], answer: 1, why: 'Con un condicional («me encantaría») se usa el imperfecto de subjuntivo.' },
          ] },
        ] },
        { title: 'Hipótesis sobre el presente', mascot: '/autoestudio/mascot/noting.webp', coach: 'Si las cosas fueran distintas…', blocks: [
          { kind: 'concept', tone: 'teal', label: 'HIPÓTESIS', question: '¿Qué pasaría si…?', formula: ['si + imperfecto de subjuntivo, + condicional'],
            meaning: 'Plantea una situación **poco probable o contraria a la realidad actual** y su consecuencia. Ojo: aunque se llame «imperfecto», aquí **no habla del pasado**, sino del presente o del futuro.',
            examples: [
              { es: '[[Si tuviéramos|teal]] los resúmenes antes, [[dedicaríamos|teal]] más tiempo a decidir.' },
              { es: '[[Si todos siguiéramos|teal]] ese formato, [[leeríamos|teal]] menos.' },
              { es: '[[Si supieras|teal]] la verdad, [[cambiarías|teal]] de opinión.' },
              { es: '[[Si yo fuera|teal]] tú, lo [[hablaría|teal]] con ella.' },
            ] },
          { kind: 'compare', title: 'Probable o alejado de la realidad', columns: [
            { tone: 'neutral', label: 'CONDICIÓN REAL', sentence: 'Si **tengo** tiempo esta tarde, **reviso** los resúmenes.', idea: 'Es probable: tal vez tenga tiempo.' },
            { tone: 'teal', label: 'HIPÓTESIS', sentence: '[[Si tuviera|teal]] tiempo, [[revisaría|teal]] todos los resúmenes.', idea: 'Es poco probable o no es así: no tengo tiempo.' },
          ] },
          { kind: 'tip', icon: '⚠️', title: 'Nunca condicional después de «si»', text: '«Si **tendría** tiempo» es un error muy común. El condicional va en la **consecuencia**: «Si **tuviera** tiempo, **viajaría**».' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'Si yo ___ más tiempo, aprendería a tocar el piano.', options: ['tuviera', 'tendría', 'tengo'], answer: 0, why: 'Después de «si» hipotético: imperfecto de subjuntivo.' },
            { prompt: '«Si viviera cerca del mar, nadaría todos los días.» ¿Vive cerca del mar?', options: ['No.', 'Sí.', 'Vivía antes.'], answer: 0, why: 'La hipótesis es contraria a la realidad actual: no vive cerca del mar.' },
          ] },
        ] },
        { title: 'Deseos difíciles y cortesía', mascot: '/brand/mascot/seated.webp', coach: 'Ojalá fuera tan fácil.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'DESEO DIFÍCIL', question: '¿Qué te gustaría que fuera distinto?', formula: ['ojalá + imperfecto de subjuntivo'],
            meaning: 'Expresa un deseo **difícil, poco probable o imposible** en el presente. Con presente de subjuntivo, el deseo se ve como **posible**.',
            examples: [
              { es: '[[Ojalá fueran|orange]] más concretas las respuestas.' },
              { es: '[[Ojalá tuviéramos|orange]] una confirmación simple de recepción.' },
              { es: '[[Ojalá pudiera|orange]] tomarme un mes de vacaciones.' },
            ] },
          { kind: 'compare', title: 'Posible o difícil', columns: [
            { tone: 'neutral', label: 'OJALÁ + PRESENTE', sentence: 'Ojalá **llegue** a tiempo.', idea: 'Es posible: todavía puede pasar.' },
            { tone: 'orange', label: 'OJALÁ + IMPERFECTO', sentence: '[[Ojalá llegara|orange]] a tiempo.', idea: 'Lo veo difícil o improbable.' },
          ] },
          { kind: 'tip', icon: '🎩', title: 'Quisiera: una cortesía especial', text: '«[[Quisiera|violet]]» es una forma muy educada de pedir algo: «[[Quisiera|violet]] hablar con la directora, por favor». Funciona como «querría» o «me gustaría».' },
          { kind: 'choice', title: 'Comprueba', items: [
            { prompt: 'Trabajo los sábados. ¡Ojalá ___ libre el fin de semana!', options: ['tuviera', 'tendría', 'tengo'], answer: 0, why: 'Un deseo difícil en el presente: ojalá + imperfecto de subjuntivo.' },
            { prompt: 'En una tienda, muy educadamente: «___ probarme este abrigo, por favor».', options: ['Quisiera', 'Quise', 'Quiera'], answer: 0, why: '«Quisiera» es una fórmula de cortesía.' },
          ] },
        ] },
        { title: 'Cómo elegir', mascot: '/brand/mascot/kneeling.webp', coach: 'Petición pasada, hipótesis o deseo.', blocks: [
          { kind: 'decide', title: 'Piensa en tu frase y responde', steps: [
            { q: '¿Hay un verbo de petición, deseo, valoración o duda en pasado o en condicional + que?', yes: 'Usa el **imperfecto de subjuntivo**: «[[Pidió que|blue]] [[enviáramos|blue]]…» · «[[Me gustaría que|blue]] [[vinieras|blue]]».', no: 'next' },
            { q: '¿Planteas una situación poco probable o contraria a la realidad con «si»?', yes: 'Usa **si + imperfecto de subjuntivo** y el condicional: «[[Si tuviera|teal]] tiempo, [[viajaría|teal]]».', no: 'next' },
            { q: '¿Expresas con «ojalá» un deseo que ves difícil?', yes: 'Usa **ojalá + imperfecto de subjuntivo**: «[[Ojalá fuera|orange]] más fácil».', no: 'Probablemente necesitas el **presente de subjuntivo** («Quiero que vengas») o el **indicativo** («Si tengo tiempo, voy»).' },
          ] },
          { kind: 'table', title: 'Tres frases con «enviaran»', head: ['frase', 'idea'], rows: [
            ['Elena [[quería que|blue]] [[enviaran|blue]] el texto el jueves.', 'Una petición del pasado.'],
            ['[[Si enviaran|teal]] el texto antes, la reunión [[sería|teal]] más corta.', 'Una hipótesis sobre el presente.'],
            ['[[Ojalá enviaran|orange]] el texto a tiempo.', 'Un deseo que se ve difícil.'],
          ] },
        ] },
        { title: 'Errores frecuentes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Estos errores son muy comunes en B2.', blocks: [
          { kind: 'guide', text: { teacher: 'Tu alumno busca el error y justifica la corrección con el verbo principal o con «si / ojalá».', self: 'Lee cada frase, busca el error y localiza el verbo que lo decide. Después toca para ver la corrección.' } },
          { kind: 'mistakes', title: '¿Dónde está el error?', items: [
            { wrong: 'Si tendría dinero, viajaría por Asia.', right: 'Si tuviera dinero, viajaría por Asia.', why: 'Después de «si» hipotético no va el condicional.' },
            { wrong: 'Mi jefe me pidió que llegue temprano ayer.', right: 'Mi jefe me pidió que llegara temprano ayer.', why: 'Petición en pasado sobre una acción ya pasada: imperfecto de subjuntivo.' },
            { wrong: 'Quería que tú vienes conmigo.', right: 'Quería que tú vinieras conmigo.', why: 'Deseo en pasado + que + otro sujeto: imperfecto de subjuntivo.' },
            { wrong: 'Ojalá sería verano.', right: 'Ojalá fuera verano.', why: 'Después de «ojalá» no se usa el condicional.' },
            { wrong: 'Si yo podiera, te ayudaría.', right: 'Si yo pudiera, te ayudaría.', why: 'La raíz sale del indefinido: pudieron → pudiera.' },
            { wrong: 'Me gustaría que me llames mañana.', right: 'Me gustaría que me llamaras mañana.', why: 'Con un condicional («me gustaría»), imperfecto de subjuntivo.' },
          ] },
          { kind: 'teacher', text: 'Pide al alumno tres frases sobre su vida: algo que sus padres querían que hiciera, algo que haría si tuviera más tiempo y un deseo difícil con «ojalá».' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'El imperfecto de subjuntivo en situaciones reales', coach: 'Toca las formas marcadas.',
      steps: [
        { title: 'Revisar una propuesta', blocks: [
          { kind: 'guide', text: { teacher: 'Lean el diálogo con papeles. Después, el alumno toca cada forma marcada y explica qué la provoca: un verbo en pasado, «si» o «ojalá».', self: 'Lee el diálogo. Después toca cada forma marcada para descubrir por qué se usó.' } },
          { kind: 'explore', title: 'Dos semanas después', setting: 'Elena, Joaquín y Sara revisan el sistema de resúmenes que el equipo probó durante dos semanas.', lines: [
            { who: 'Elena', text: 'Bueno, ya probamos el sistema. Les recuerdo que en la última reunión [[propuse que|blue]] cada persona [[enviara|blue]] un resumen breve antes de la llamada.' },
            { who: 'Joaquín', text: 'Sí, y te confieso que al principio [[dudaba de que|blue]] [[sirviera|blue]] para algo.' },
            { who: 'Sara', text: 'Yo también. [[Prefería que|blue]] [[discutiéramos|blue]] todo en directo.' },
            { who: 'Elena', text: 'Lo entiendo, pero nunca [[quise que|blue]] [[dejáramos|blue]] de conversar. Solo quería preparar mejor la conversación.' },
            { who: 'Joaquín', text: 'Ahora lo veo. El problema es que algunos resúmenes son larguísimos.' },
            { who: 'Elena', text: 'Lo sé. [[Ojalá fueran|orange]] más concretos, pero es cuestión de práctica.' },
            { who: 'Sara', text: '[[Si todos usáramos|teal]] el mismo formato, [[sería|teal]] mucho más fácil leerlos.' },
            { who: 'Elena', text: 'Esa es mi idea: un ejemplo con tres puntos. Avance, dificultad y decisión pendiente.' },
            { who: 'Joaquín', text: 'Perfecto. Y [[me gustaría que|blue]] alguien [[reuniera|blue]] las preguntas antes de cada llamada.' },
            { who: 'Sara', text: 'Me ofrezco yo. [[Si tuviera|teal]] las preguntas el miércoles, las [[ordenaría|teal]] por temas.' },
            { who: 'Elena', text: '[[Quisiera|violet]] agradecerles a los dos la paciencia. Lo probamos dos semanas más y lo revisamos.' },
          ], notes: {
            'propuse que': 'Elena recuerda **una propuesta del pasado**: el verbo principal está en indefinido.',
            enviara: 'La acción pedida, vista desde esa reunión: imperfecto de subjuntivo.',
            'dudaba de que': 'Una **duda** en pasado: «dudar de que» también pide subjuntivo.',
            sirviera: 'servir → sirvieron → **sirviera**.',
            'Prefería que': 'Una **preferencia** en pasado sobre lo que hacía el grupo.',
            discutiéramos: '«Nosotros» lleva tilde: **discutiéramos**.',
            'quise que': 'Querer en indefinido + que: la concordancia pide imperfecto de subjuntivo.',
            dejáramos: 'dejar → dejaron → **dejáramos**.',
            'Ojalá fueran': 'Un **deseo** que Elena ve **difícil** por ahora.',
            'Si todos usáramos': 'Una **hipótesis**: hoy no todos usan el mismo formato.',
            sería: 'La **consecuencia** de la hipótesis va en condicional.',
            'me gustaría que': 'Con el **condicional**, imperfecto de subjuntivo, aunque la petición mire al futuro.',
            reuniera: 'reunir → reunieron → **reuniera**.',
            'Si tuviera': 'Sara imagina una situación **todavía no real**: tener las preguntas el miércoles.',
            ordenaría: 'La consecuencia, en condicional.',
            Quisiera: 'Una fórmula **muy cortés**: Elena agradece con formalidad.',
          } },
          { kind: 'choice', title: '¿Entendiste?', items: [
            { prompt: '¿Qué pidió Elena en la reunión anterior?', options: ['Que cada persona enviara un resumen antes de la llamada.', 'Que el equipo dejara de reunirse.', 'Que Sara reuniera las preguntas.'], answer: 0, why: '«Propuse que cada persona enviara un resumen breve antes de la llamada».' },
            { prompt: '¿Qué haría Sara con las preguntas el miércoles?', options: ['Las ordenaría por temas.', 'Las enviaría a Elena.', 'Las contestaría ella sola.'], answer: 0, why: '«Si tuviera las preguntas el miércoles, las ordenaría por temas».' },
          ] },
        ] },
        { title: 'Lo que esperaban de mí', blocks: [
          { kind: 'explore', title: 'Una charla en la sobremesa', setting: 'Después de una comida familiar, Marina habla con su tío Rafael sobre las decisiones de su juventud.', lines: [
            { who: 'Rafael', text: '¿Sabes que tu abuela [[quería que|blue]] yo [[estudiara|blue]] Medicina?' },
            { who: 'Marina', text: '¿En serio? ¡Pero si te desmayas al ver sangre!' },
            { who: 'Rafael', text: 'Por eso. Le rogué que me [[dejara|blue]] intentar con la música, y aceptó.' },
            { who: 'Marina', text: 'A mí mis padres me aconsejaron que [[eligiera|blue]] algo «seguro».' },
            { who: 'Rafael', text: '¿Y estás contenta con lo que haces?' },
            { who: 'Marina', text: 'Sí, pero a veces pienso: [[si pudiera|teal]] empezar de nuevo, [[estudiaría|teal]] Arquitectura.' },
            { who: 'Rafael', text: 'Nunca es tarde. [[Si yo fuera|teal]] tú, [[haría|teal]] un curso de diseño los fines de semana.' },
            { who: 'Marina', text: '[[Ojalá tuviera|orange]] tiempo para eso. Con el trabajo y los niños, imposible.' },
            { who: 'Rafael', text: 'Bueno, [[me encantaría que|blue]] [[vinieras|blue]] a mi concierto el viernes. Eso sí puedes.' },
            { who: 'Marina', text: '¡Hecho!' },
          ], notes: {
            'quería que': 'Un **deseo del pasado** de la abuela sobre otra persona.',
            estudiara: 'La acción deseada, vista desde el pasado.',
            dejara: '«Le rogué que» → imperfecto de subjuntivo: dejar → dejaron → **dejara**.',
            eligiera: '«Me aconsejaron que» (pasado): elegir → eligieron → **eligiera**.',
            'si pudiera': 'Una **hipótesis** imposible: ya no puede empezar de nuevo.',
            estudiaría: 'La consecuencia imaginada, en condicional.',
            'Si yo fuera': 'Fórmula típica para **aconsejar**: «Si yo fuera tú…».',
            haría: 'El consejo, en condicional.',
            'Ojalá tuviera': 'Un **deseo** que Marina ve **casi imposible** ahora.',
            'me encantaría que': '**Condicional** + que: imperfecto de subjuntivo.',
            vinieras: 'venir → vinieron → **vinieras**.',
          } },
          { kind: 'teacher', text: 'Pregunta al alumno: «¿Qué querían tus padres que estudiaras?» y «Si pudieras empezar de nuevo, ¿qué harías?».' },
        ] },
        { title: 'Petición, hipótesis o deseo', blocks: [
          { kind: 'classify', title: 'Clasifica las frases de las dos conversaciones', categories: [
            { id: 'pasado', label: 'Petición o deseo en pasado', tone: 'blue' },
            { id: 'hipotesis', label: 'Hipótesis', tone: 'teal' },
            { id: 'deseo', label: 'Deseo difícil', tone: 'orange' },
          ], items: [
            { text: 'Propuse que cada persona enviara un resumen.', answer: 'pasado', why: '«Propuse que»: una propuesta en pasado.' },
            { text: 'Si todos usáramos el mismo formato, sería más fácil.', answer: 'hipotesis', why: '«Si» + imperfecto de subjuntivo + condicional.' },
            { text: 'Ojalá fueran más concretos.', answer: 'deseo', why: '«Ojalá» + imperfecto: un deseo que se ve difícil.' },
            { text: 'Tu abuela quería que estudiara Medicina.', answer: 'pasado', why: '«Quería que»: un deseo del pasado.' },
            { text: 'Si pudiera empezar de nuevo, estudiaría Arquitectura.', answer: 'hipotesis', why: 'Una situación imposible y su consecuencia.' },
            { text: 'Ojalá tuviera tiempo para eso.', answer: 'deseo', why: '«Ojalá» + imperfecto de subjuntivo.' },
          ] },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Busca lo que decide: un verbo en pasado, «si» u «ojalá».',
      steps: [
        { title: 'Elige según el contexto', blocks: [
          { kind: 'choice', items: [
            { context: 'La tarea era para la clase de ayer.', prompt: 'La profesora nos pidió que ___ el capítulo cinco para ayer.', options: ['leyéramos', 'leamos', 'leeríamos'], answer: 0, why: 'Petición en pasado: imperfecto de subjuntivo. leyeron → leyéramos.' },
            { context: 'No tienes coche y vives lejos del trabajo.', prompt: 'Si ___ coche, llegaría en veinte minutos.', options: ['tuviera', 'tendría', 'tengo'], answer: 0, why: 'Una hipótesis contraria a la realidad: si + imperfecto de subjuntivo.' },
            { context: 'Llueve desde hace una semana.', prompt: 'Ojalá ___ el sol mañana, aunque no lo creo.', options: ['saliera', 'saldría', 'sale'], answer: 0, why: '«Aunque no lo creo»: un deseo difícil, ojalá + imperfecto.' },
            { context: 'Le escribes a una amiga.', prompt: 'Me encantaría que ___ a mi boda.', options: ['vinieras', 'vienes', 'vendrías'], answer: 0, why: 'Condicional + que: imperfecto de subjuntivo.' },
            { context: 'Recuerdas tu infancia.', prompt: 'Mi madre no permitía que ___ dulces antes de cenar.', options: ['comiéramos', 'comamos', 'comíamos'], answer: 0, why: '«Permitía» en pasado: imperfecto de subjuntivo, con tilde en «nosotros».' },
            { context: 'Un amigo duda entre dos trabajos.', prompt: 'Si yo ___ tú, aceptaría el de Barcelona.', options: ['fuera', 'sería', 'soy'], answer: 0, why: 'La fórmula de consejo «si yo fuera tú».' },
          ] },
        ] },
        { title: 'Compara los significados', blocks: [
          { kind: 'choice', items: [
            { prompt: '¿Qué frase cuenta **una petición pasada**?', options: ['Quería que enviaran el texto el jueves.', 'Si enviaran el texto el jueves, todo sería más fácil.'], answer: 0, why: '«Quería que» recuerda una petición; la otra frase plantea una hipótesis.' },
            { prompt: '¿En qué frase el deseo parece **más difícil**?', options: ['Ojalá apruebe el examen.', 'Ojalá aprobara el examen.'], answer: 1, why: 'Con imperfecto de subjuntivo, el deseo se ve menos probable.' },
            { prompt: '«Si tuviera tiempo, te ayudaría.» ¿Cuándo es la situación?', options: ['Ahora: no tengo tiempo.', 'En el pasado: no tuve tiempo.'], answer: 0, why: 'Aunque se llame «imperfecto», en la hipótesis habla del presente.' },
            { prompt: '¿Qué frase es una forma **muy cortés** de pedir?', options: ['Quisiera una mesa para dos.', 'Quise una mesa para dos.', 'Quiero que me des una mesa.'], answer: 0, why: '«Quisiera» suaviza la petición al máximo.' },
          ] },
        ] },
        { title: 'Completa la conversación', blocks: [
          { kind: 'chat-fill', title: 'Un proyecto que salió regular', lines: [
            { who: 'Ana', text: '¿Qué tal fue la presentación con el cliente?' },
            { who: 'Íñigo', text: 'Regular. El cliente pidió que ___ el presupuesto a última hora.', options: ['cambiáramos', 'cambiemos', 'cambiaríamos'], answer: 0, why: '«Pidió» en pasado: imperfecto de subjuntivo.' },
            { who: 'Ana', text: '¿Y no lo podían rechazar?' },
            { who: 'Íñigo', text: 'Mi jefe no quería que ___ el contrato.', options: ['perdiéramos', 'perdamos', 'perderíamos'], answer: 0, why: '«No quería» en pasado + otro sujeto: imperfecto de subjuntivo.' },
            { who: 'Ana', text: 'Entiendo. Si ___ más tiempo, ¿qué harían diferente?', options: ['tuvieran', 'tendrían', 'tienen'], answer: 0, why: 'Hipótesis: si + imperfecto de subjuntivo.' },
            { who: 'Íñigo', text: 'Prepararíamos dos versiones. Ojalá el cliente ___ más claro desde el principio.', options: ['fuera', 'sería', 'es'], answer: 0, why: 'Ojalá + imperfecto: un deseo difícil.' },
            { who: 'Ana', text: 'Bueno, me gustaría que me ___ cómo termina.', options: ['contaras', 'cuentas', 'contarías'], answer: 0, why: 'Condicional + que: imperfecto de subjuntivo.' },
          ] },
        ] },
        { title: 'Encuentra el error', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Si estaría más cerca, iría caminando.', ok: false, options: ['Si estuviera más cerca, iría caminando.', 'Si estaría más cerca, fuera caminando.', 'Si esté más cerca, iría caminando.'], answer: 0, why: 'Después de «si» hipotético: imperfecto de subjuntivo.' },
            { sentence: 'Me pidió que le trajera un libro de la biblioteca.', ok: true, why: 'Correcta: petición en pasado + traer → trajeron → trajera.' },
            { sentence: 'Quería que me ayudas con la mudanza.', ok: false, options: ['Quería que me ayudaras con la mudanza.', 'Quería que me ayudes con la mudanza.', 'Quería que me ayudarías con la mudanza.'], answer: 0, why: 'Deseo en pasado: imperfecto de subjuntivo.' },
            { sentence: 'Ojalá tuviéramos más vacaciones.', ok: true, why: 'Correcta: ojalá + imperfecto de subjuntivo, con tilde en «nosotros».' },
            { sentence: 'Me gustaría que hacieran menos ruido.', ok: false, options: ['Me gustaría que hicieran menos ruido.', 'Me gustaría que hagan menos ruido.', 'Me gustaría que harían menos ruido.'], answer: 0, why: 'hicieron → hicieran: la raíz irregular del indefinido se mantiene.' },
            { sentence: 'Si sabría su número, lo llamaría.', ok: false, options: ['Si supiera su número, lo llamaría.', 'Si sabía su número, lo llamaría.', 'Si sepa su número, lo llamaría.'], answer: 0, why: 'Hipótesis: si + imperfecto de subjuntivo. supieron → supiera.' },
          ] },
        ] },
        { title: 'Construye frases', blocks: [
          { kind: 'build', title: 'Ordena las palabras', items: [
            { tiles: ['Quería', 'que', 'vinieras', 'a', 'la', 'fiesta'], accept: ['Quería que vinieras a la fiesta'] },
            { tiles: ['Si', 'tuviera', 'tiempo', 'viajaría', 'más'], accept: ['Si tuviera tiempo viajaría más', 'Viajaría más si tuviera tiempo'] },
            { tiles: ['Ojalá', 'fuera', 'más', 'fácil'], accept: ['Ojalá fuera más fácil'] },
            { tiles: ['Nos', 'pidió', 'que', 'llegáramos', 'temprano'], accept: ['Nos pidió que llegáramos temprano'] },
          ] },
        ] },
        { title: 'Transforma las frases', blocks: [
          { kind: 'rewrite', title: 'Escribe la frase con el imperfecto de subjuntivo', items: [
            { prompt: 'Quiero que venga.', instruction: 'Pasa la frase al pasado: «Quería que…».', accept: ['Quería que viniera'] },
            { prompt: 'Si tengo dinero, viajo.', instruction: 'Conviértela en una hipótesis poco probable.', accept: ['Si tuviera dinero, viajaría', 'Si tuviera dinero viajaría'] },
            { prompt: 'La directora pide que entreguemos el informe.', instruction: 'Empieza con «La directora pidió que…».', accept: ['La directora pidió que entregáramos el informe', 'La directora pidió que entregásemos el informe'] },
            { prompt: 'Ojalá haga buen tiempo. (Lo veo difícil.)', instruction: 'Expresa el deseo como algo difícil.', accept: ['Ojalá hiciera buen tiempo', 'Ojalá hiciese buen tiempo'] },
            { prompt: 'Me gusta que me llames.', instruction: 'Hazlo más suave con «Me gustaría que…».', accept: ['Me gustaría que me llamaras', 'Me gustaría que me llamases'] },
          ] },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'La respuesta de un compañero', coach: 'Primero escucha sin leer.',
      steps: [
        { title: 'La respuesta de un compañero', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha para la idea general. En la segunda, el alumno separa lo que el compañero pidió en el pasado, lo que imagina y lo que desea.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Puedes bajar la velocidad y leer la transcripción al final.' } },
          { kind: 'listen', title: 'Un compañero del equipo', channel: 'NOTA DE VOZ · PARA ELENA', src: '/audio/grammar-classroom/150.mp3',
            before: 'Un compañero responde a Elena sobre el sistema de resúmenes. ¿Crees que está a favor o en contra?',
            gist: { prompt: '¿Cuál es la postura del compañero?', options: ['Apoya el sistema y propone mejoras concretas.', 'Quiere eliminar los resúmenes.', 'Se queja de sus compañeros.'], answer: 0, why: 'Cree que el ejemplo de tres puntos puede ayudar y propone reunir preguntas y confirmar la recepción.' },
            details: [
              { prompt: '¿Qué comentó ayer?', options: ['Que prefería resúmenes más cortos sin dejar de hablar de los problemas importantes.', 'Que no quería resúmenes.', 'Que los resúmenes eran demasiado cortos.'], answer: 0, why: '«Ayer comenté que prefería que los resúmenes fueran más cortos, pero no quería que dejáramos de hablar de los problemas importantes».' },
              { prompt: '¿Qué pasaría si todos siguieran el formato de tres puntos?', options: ['Leerían menos y tendrían más tiempo para decidir.', 'Las reuniones serían más largas.', 'No harían falta reuniones.'], answer: 0, why: '«Si todos siguiéramos ese formato, leeríamos menos y tendríamos más tiempo para decidir».' },
              { prompt: '¿Qué le gustaría que hiciera una persona?', options: ['Reunir las preguntas antes de la llamada.', 'Escribir todos los resúmenes.', 'Llamar a los compañeros que llegan tarde.'], answer: 0, why: '«Me gustaría que una persona reuniera las preguntas antes de la llamada».' },
              { prompt: '¿Qué pasó con la entrega del jueves?', options: ['Dos compañeros mandaron su texto después.', 'Nadie envió nada.', 'Todos la entregaron a tiempo.'], answer: 0, why: '«Pedimos que cada compañero enviara su texto el jueves, pero dos lo mandaron después».' },
              { prompt: '¿Qué desea tener el equipo?', options: ['Una confirmación simple de recepción.', 'Más reuniones.', 'Un plazo más largo.'], answer: 0, why: '«Ojalá tuviéramos una confirmación simple de recepción».' },
            ],
            transcript: 'Hola, Elena. Ayer comenté que [[prefería que|blue]] los resúmenes [[fueran|blue]] más cortos, pero [[no quería que|blue]] [[dejáramos|blue]] de hablar de los problemas importantes. Creo que el ejemplo de tres puntos puede ayudar. [[Si todos siguiéramos|teal]] ese formato, [[leeríamos|teal]] menos y [[tendríamos|teal]] más tiempo para decidir. También [[me gustaría que|blue]] una persona [[reuniera|blue]] las preguntas antes de la llamada. En la reunión anterior [[pedimos que|blue]] cada compañero [[enviara|blue]] su texto el jueves, pero dos lo mandaron después. No lo menciono para culparlos: quizá el plazo no estaba claro. [[Ojalá tuviéramos|orange]] una confirmación simple de recepción. Podemos probarla esta semana y revisar el resultado antes de ampliar el sistema a otros equipos.',
            reply: { teacher: 'El alumno responde al compañero en voz alta, como si fuera Elena: recuerda lo que pidió en la reunión, reacciona a sus propuestas y plantea una hipótesis («Si…, …»).', self: 'Responde al compañero como si fueras Elena: recuerda lo que propusiste («Propuse que…»), acepta una propuesta y plantea una hipótesis con «Si…».' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Expectativas, hipótesis y deseos', coach: 'Del pasado a lo imaginado.',
      steps: [
        { title: 'Expectativas, hipótesis y deseos', blocks: [
          { kind: 'guide', text: { teacher: 'No hace falta usar todas las preguntas. Sigue lo que el alumno quiere contar, repregunta y comparte también tus experiencias. Anima a desarrollar las respuestas con matices.', self: 'Responde cada pregunta en voz alta, como en una conversación, y desarrolla cada respuesta con dos o tres frases. Si quieres, escríbela antes.' } },
          { kind: 'talk', cards: [
            { q: '¿Qué esperaban tus padres o tus profesores que hicieras cuando eras adolescente?', followUps: ['¿Les hiciste caso?', '¿Qué te pedían que no hicieras?', '¿Era justo lo que esperaban de ti?'], phrases: ['Mis padres [[querían que|blue]]…', 'Me [[pedían que|blue]] no…', '[[Esperaban que|blue]]…'], hint: 'Verbo en pasado + que + imperfecto de subjuntivo.', example: 'Mis padres querían que estudiara Derecho, como mi abuelo. Me pedían que no saliera entre semana. Al final estudié Biología y creo que lo entendieron.', next: 'Ahora, una petición que no salió como esperabas.' },
            { q: 'Cuéntame una ocasión en la que pediste algo y no salió como esperabas.', followUps: ['¿Qué pediste exactamente?', '¿Qué pasó en realidad?', '¿Qué cambiarías si se repitiera la situación?'], phrases: ['[[Les dije que|blue]] no…, pero…', 'Yo [[esperaba que|blue]]…', '[[Si volviera|teal]] a pasar, [[haría|teal]]…'], hint: 'Distingue lo que pediste (imperfecto de subjuntivo) de lo que ocurrió (indefinido).', example: 'Para mi cumpleaños les dije a todos que no me regalaran nada, pero mis amigos me organizaron una fiesta enorme. Si volviera a pasar, lo diría con más claridad… o no, ¡fue precioso!', next: 'Hablemos de tu trabajo o tus estudios.', teacher: 'Interpreta mal su intención («Entonces no querías ver a tus amigos») para que el alumno la aclare: «No es que no quisiera…, sino que…».' },
            { q: 'Si pudieras cambiar una cosa de tu trabajo o de tus estudios, ¿qué cambiarías?', followUps: ['¿Qué pasaría si lo cambiaras?', '¿A quién le pedirías ayuda?', '¿Crees que es realista?'], phrases: ['[[Si pudiera|teal]], [[cambiaría|teal]]…', '[[Me gustaría que|blue]] mi jefe…', 'Así [[tendríamos|teal]]…'], hint: 'Hipótesis con si + imperfecto de subjuntivo y consecuencia en condicional.', example: 'Si pudiera, cambiaría el horario de las reuniones. Me gustaría que fueran por la mañana: así tendríamos la tarde libre para concentrarnos.', next: 'Y si fueras otra persona…' },
            { q: 'Si fueras alcalde o alcaldesa de tu ciudad durante un año, ¿qué harías?', followUps: ['¿Qué sería lo primero?', '¿Qué pedirías a los vecinos?', '¿Qué no cambiarías nunca?'], phrases: ['[[Si fuera|teal]] alcaldesa, lo primero que [[haría|teal]]…', '[[Pediría que|blue]] los vecinos…', 'No [[permitiría que|blue]]…'], hint: 'Con «pediría que» o «permitiría que» (condicional), el segundo verbo va en imperfecto de subjuntivo.', example: 'Si fuera alcaldesa, lo primero que haría sería ampliar los carriles para bicicletas. Pediría que los vecinos propusieran ideas cada mes y no permitiría que se cerraran más bibliotecas.', next: 'Ahora, deseos difíciles.' },
            { q: '¿Qué cosa de tu vida te gustaría que fuera diferente, aunque sabes que es difícil?', followUps: ['¿Por qué es difícil?', '¿Hay algo pequeño que puedas hacer?', '¿Qué deseo ves más posible?'], phrases: ['[[Ojalá|orange]] [[tuviera|orange]]…', '[[Ojalá|orange]] mi familia [[viviera|orange]]…', 'En cambio, ojalá **pueda**…'], hint: 'Ojalá + imperfecto para lo difícil; ojalá + presente para lo posible.', example: 'Ojalá mi familia viviera más cerca. Están a diez horas de avión. En cambio, ojalá pueda visitarlos en diciembre: eso sí es posible.', next: 'Para terminar, una mirada atrás y adelante.' },
            { q: 'Si pudieras darle un consejo a la persona que eras hace diez años, ¿qué le dirías?', followUps: ['¿Qué te habría gustado que te dijeran?', '¿Qué le pedirías que no hiciera?', '¿Crees que te habría hecho caso?'], phrases: ['Le [[diría|teal]] que…', 'Le [[pediría que|blue]] no…', '[[Si yo fuera|teal]] él / ella…'], hint: '«Le diría que + indicativo» (informar); «le pediría que + imperfecto de subjuntivo» (pedir).', example: 'Le diría que no tiene que demostrar nada a nadie. Le pediría que no dejara de tocar la guitarra y que viajara más. Si yo fuera ella, ahorraría un poco menos y viviría un poco más.', teacher: 'Cierra con una pregunta de reflexión: «¿Qué uso del imperfecto de subjuntivo te resulta más natural? ¿Y cuál te cuesta más?».' },
          ], swap: { teacher: 'Al final, cambien los papeles: el alumno le hace al profesor dos preguntas con «Si pudieras…» y una con «¿Qué querían tus padres que…?».', self: 'Escribe tres preguntas con «Si pudieras…», «¿Qué querían que…?» y «¿Qué te gustaría que…?» y házselas a alguien esta semana.' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Evaluar una propuesta', coach: 'Lo que pediste, lo que pasó y lo que propones.',
      steps: [
        { title: 'Evaluar una propuesta', blocks: [
          { kind: 'guide', text: { teacher: 'Puede escribir en clase o como tarea. Usen la revisión automática y después revisen juntos que cada imperfecto de subjuntivo tenga su «motivo»: un verbo en pasado, «si» u «ojalá».', self: 'Escribe tu texto y toca «Revisar mi texto». Después subraya cada imperfecto de subjuntivo y busca qué lo provoca.' } },
          { kind: 'write', title: 'Un cambio que propusiste', situation: 'Hace unas semanas propusiste un cambio en tu trabajo, en tu clase, en tu casa o en un grupo (un horario, una forma de organizarse, una norma). Escribe una evaluación para las personas implicadas.', task: [
            'Recuerda **qué propusiste y para qué**: propuse que / quería que / para que + imperfecto de subjuntivo.',
            'Explica **una dificultad** que apareció y sus posibles causas.',
            'Plantea **una hipótesis** para mejorar: si + imperfecto de subjuntivo + condicional.',
            'Expresa **un deseo** (ojalá) y una propuesta concreta para el próximo paso, con «me gustaría que…».',
          ], starters: ['Hace dos semanas propuse que…', 'Quería que…, para que…', 'Sin embargo, …', 'No creo que el problema sea…', 'Si todos…, …', 'Ojalá…', 'Me gustaría que…'],
            words: ['propuse que', 'quería que', 'esperaba que', 'para que', 'si', 'ojalá', 'me gustaría que', 'sin embargo', 'por eso', 'propongo'],
            model: 'Hace dos semanas [[propuse que|blue]] cada compañero [[enviara|blue]] un resumen breve antes del jueves. [[Quería que|blue]] la llamada se [[centrara|blue]] en las decisiones y no en repetir información. Sin embargo, algunos textos fueron demasiado largos y dos llegaron tarde. No creo que el problema sea la falta de interés: quizá el formato y el plazo no estaban claros. [[Si todos usáramos|teal]] tres puntos (avance, dificultad y decisión pendiente), [[leeríamos|teal]] menos y [[tendríamos|teal]] más tiempo para conversar. [[Ojalá fuera|orange]] posible confirmar la recepción de forma automática. Mientras tanto, [[me gustaría que|blue]] una persona [[reuniera|blue]] las preguntas el miércoles. Propongo probar este cambio dos semanas más y evaluarlo juntos.',
            minWords: 100 },
        ] },
      ],
    },
    {
      id: 'cerrar', label: 'Cerrar', icon: '✓', mascot: '/brand/mascot/standing.webp',
      title: 'Lo esencial', coach: '¿Qué te llevas hoy?',
      steps: [
        { title: 'Lo esencial', blocks: [
          { kind: 'recap', items: [
            { tone: 'blue', label: 'PETICIÓN EN PASADO', formula: 'pidió / quería / me gustaría + que + imperfecto de subjuntivo', example: 'Elena pidió que enviáramos un resumen.', caption: 'La concordancia con un verbo en pasado o en condicional.' },
            { tone: 'teal', label: 'HIPÓTESIS', formula: 'si + imperfecto de subjuntivo, + condicional', example: 'Si tuviera tiempo, viajaría.', caption: 'Una situación poco probable o irreal ahora.' },
            { tone: 'orange', label: 'DESEO DIFÍCIL', formula: 'ojalá + imperfecto de subjuntivo', example: 'Ojalá fuera más fácil.', caption: 'Un deseo que se ve lejano.' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La forma', text: '**ellos del indefinido − ron + ra**: tuvieron → tuviera, fueron → fuera, pidieron → pidiera. «Nosotros» lleva tilde: **tuviéramos**. Y nunca condicional después de «si».' },
        ] },
        { title: 'Desafío final', blocks: [
          { kind: 'choice', title: 'Cuatro frases, sin ayuda', items: [
            { prompt: 'El sábado pasado mi jefe quería que ___, pero le dije que no.', options: ['trabajara', 'trabaje', 'trabajaría'], answer: 0, why: 'Un deseo en pasado sobre una acción ya pasada: imperfecto de subjuntivo.' },
            { prompt: 'Si ___ hablar chino, trabajaría en Shanghái.', options: ['supiera', 'sabría', 'sé'], answer: 0, why: 'Hipótesis: si + imperfecto de subjuntivo. supieron → supiera.' },
            { prompt: 'Ojalá mis abuelos ___ conocer a mi hija.', options: ['pudieran', 'podieran', 'podrían'], answer: 0, why: 'Un deseo difícil: pudieron → pudieran.' },
            { prompt: 'Preferiría que no ___ de eso en la reunión.', options: ['habláramos', 'hablemos', 'hablaríamos'], answer: 0, why: 'Condicional + que: imperfecto de subjuntivo.' },
          ] },
        ] },
        { title: 'Tus errores y repaso', blocks: [
          { kind: 'review' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: ¿cómo distingues «Quería que enviaran el texto» de «Si enviaran el texto…»? La primera recuerda una petición pasada; la segunda plantea una hipótesis sobre el presente.' },
        ] },
      ],
    },
  ],
};
