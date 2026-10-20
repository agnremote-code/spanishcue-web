import type { LiveLesson } from '../types';

/**
 * Lesson 452 · B2 · Oraciones sustantivas complejas: el hecho de que (course unit G152).
 * Builds on G092 (emotion + que + subjunctive), G093 and G110 (lesson 410: pienso que /
 * me di cuenta de que, dequeísmo and queísmo), G097 (perfect subjunctive), G128–G129
 * (lesson 429: imperfect subjunctive after past verbs; decir / escribir / insistir en que
 * + indicative or subjunctive in the past) and G146 (lesson 233: reported speech).
 * Scene: Guadalajara, Estudio Cobalto, a small architecture firm. The director, Irene
 * Garza, has turned down the biggest contract of the year (a hotel at Lake Chapala).
 * On Friday the architects Rodrigo Medina and Paula Ortiz comment on the news and the
 * rumours; Samuel is the intern. In the voice message (Mexican voice, ustedes) Irene
 * explains her decision and announces that the firm has won a public library competition.
 * Content: «el hecho de que» / «que» as the subject or topic at the start of a sentence,
 * normally + subjunctive (el hecho de que lo haya rechazado nos sorprende; que no lo sepas
 * es raro), singular agreement of the main verb; indicative possible when the speaker
 * asserts the fact as information (NGLE §25.13); «que + indicativo…, lo sabe todo el
 * mundo» with resumptive «lo»; noun + de que: posibilidad / riesgo / necesidad /
 * esperanza / miedo + subjunctive vs noticia / rumor / impresión / certeza + indicative,
 * «la idea de que» either; «lo de que», «eso de que» to take up a rumour or proposal;
 * «la noticia que leí» (relative) vs «la noticia de que ganamos» (content); dequeísmo and
 * queísmo reviewed and extended to nouns and adjectives. Audit fold-ins: verbs with two
 * values in the present (decir, insistir en, sentir, entender que) and the compound
 * infinitive and gerund (me alegro de haberte conocido, siento no haber llamado,
 * habiendo revisado…). Ampliación: «el que» at the start, «que…, lo» topicalisation,
 * indicative after «el hecho de que», compound gerund in reports. Instructions use tú.
 */
export const lesson: LiveLesson = {
  id: 452,
  level: 'B2',
  title: 'Oraciones sustantivas complejas: el hecho de que',
  subtitle: 'Comentar un hecho al principio de la frase y usar bien «de que»: «El hecho de que no llamara me preocupa», «la noticia de que ganamos».',
  legend: [
    { tone: 'blue', label: 'Enlace de la sustantiva · el hecho de que, que (al inicio), lo de que, la posibilidad de que' },
    { tone: 'orange', label: 'Subjuntivo · el hecho se comenta, se valora o es solo posible' },
    { tone: 'teal', label: 'Indicativo · el hecho se afirma o se cuenta como noticia' },
    { tone: 'violet', label: 'Infinitivo y gerundio compuestos · haber dicho, habiendo firmado' },
  ],
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Comentar un hecho', coach: 'Primero el hecho, después lo que piensas de él. First the fact, then your comment on it.',
      steps: [
        { title: 'Una decisión inesperada · An unexpected decision', blocks: [
          { kind: 'lead', text: 'Guadalajara, **Estudio Cobalto**, un pequeño estudio de arquitectura. Su directora, **Irene Garza**, acaba de rechazar el contrato más grande del año: un hotel junto al lago de Chapala. El viernes, los arquitectos **Rodrigo Medina** y **Paula Ortiz** no hablan de otra cosa. Hoy aprendes a poner un hecho al principio de la frase para comentarlo: «**El hecho de que** Irene lo **haya rechazado** nos sorprende».', en: 'Guadalajara, Estudio Cobalto, a small architecture firm. Its director, Irene Garza, has just turned down the biggest contract of the year: a hotel by Lake Chapala. On Friday the architects Rodrigo and Paula talk about nothing else. Today you learn to put a fact at the start of a sentence in order to comment on it.' },
          { kind: 'guide', text: { teacher: 'Tú lees la primera columna y tu alumno lee las otras dos. Tu alumno explica qué cambia: ¿se da una noticia o se comenta una que ya se conoce?', self: 'Lee las tres columnas en voz alta. ¿En cuál se da la noticia y en cuáles se comenta? (Which one gives the news, and which ones comment on it?)' } },
          { kind: 'compare', title: 'Dar el dato o comentarlo · Giving the fact or commenting on it', columns: [
            { tone: 'neutral', label: 'EL DATO', sentence: 'Irene [[rechazó|teal]] el contrato del hotel.', idea: 'Información nueva: indicativo.', en: 'New information, simply stated: indicative.' },
            { tone: 'blue', label: 'EL HECHO COMO TEMA', sentence: '[[El hecho de que|blue]] Irene lo [[haya rechazado|orange]] nos sorprende.', idea: 'Todos conocen ya el dato; ahora se comenta. Toda la parte con «el hecho de que» es el sujeto de «sorprende».', en: 'Everyone already knows; now the fact is the subject of a comment, so it goes into the subjunctive.' },
            { tone: 'orange', label: '«QUE» AL PRINCIPIO', sentence: '[[Que|blue]] Irene [[diga|orange]] que no a un cliente así es rarísimo.', idea: '«Que» solo también puede abrir la frase. «El hecho de que» subraya que se habla de un hecho real.', en: 'A bare «que» can also open the sentence; «el hecho de que» stresses that we are talking about something that really happened.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'En «El hecho de que Irene lo haya rechazado nos sorprende», ¿qué nos sorprende?', options: ['El contrato.', 'El hecho de que Irene lo haya rechazado.', 'Irene.'], answer: 1, why: 'El sujeto de «sorprende» es toda la oración: el hecho de que Irene lo haya rechazado.', en: 'The whole clause is the subject of the verb.' },
            { prompt: '¿Qué frase da la noticia a alguien que no sabe nada?', options: ['Irene rechazó el contrato del hotel.', 'El hecho de que Irene lo haya rechazado nos sorprende.', 'Que Irene rechace un contrato es raro.'], answer: 0, why: 'La frase simple con indicativo informa. Las otras dos comentan algo que ya se sabe.', en: 'Plain indicative informs; the other two comment on something already known.' },
          ] },
        ] },
        { title: 'El hecho de que / que + subjuntivo · The fact that + subjunctive', mascot: '/brand/mascot/studying.webp', coach: 'Lo conoces, ahora va delante. You know it; now it goes first.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'EL HECHO DE QUE / QUE + SUBJUNTIVO + COMENTARIO', question: '¿Cómo pongo un hecho al principio para valorarlo?', en: 'When a clause with «el hecho de que» or «que» opens the sentence, it presents a known fact that the rest of the sentence comments on. The normal mood is the subjunctive, in the tense that matches the main verb.', formula: ['El hecho de que + subjuntivo + me sorprende / nos preocupa / demuestra / no significa…', 'Que + subjuntivo + es raro / me molesta / no tiene sentido…'],
            meaning: 'Ya sabes decir «Me sorprende **que** + subjuntivo» (clase 092). Ahora el orden cambia: el hecho va **primero**, como tema, y el comentario después. Lo normal es el **subjuntivo**, también con verbos como **demostrar**, **explicar** o **significar**. El tiempo depende del verbo principal: presente (**me preocupa** que no llame), perfecto (**nos sorprende** que lo haya rechazado) o imperfecto (**me preocupó** que no llamara).',
            examples: [
              { es: '[[El hecho de que|blue]] el cliente no [[conteste|orange]] los correos me preocupa.', en: 'The fact that the client isn’t answering emails worries me: a present fact, commented on.' },
              { es: '[[Que|blue]] no lo [[sepas|orange]] todavía es raro: lo anunciaron ayer.', en: 'It’s strange that you don’t know yet: a bare «que» opening the sentence.' },
              { es: '[[El hecho de que|blue]] Samuel se [[quedara|orange]] hasta las diez demuestra su compromiso.', en: 'Samuel staying until ten shows his commitment: even «demostrar» takes the subjunctive here.' },
              { es: '[[Que|blue]] un proyecto [[sea|orange]] caro no significa que [[sea|orange]] bueno.', en: 'A project being expensive doesn’t mean it is good: «no significa que» also takes the subjunctive.' },
            ],
            note: 'El verbo principal va en **singular**, porque su sujeto es toda la oración: «El hecho de que tus padres vengan me **alegra**», no «me alegran».' },
          { kind: 'compare', title: '¿Subjuntivo o indicativo? · Subjunctive or indicative?', columns: [
            { tone: 'orange', label: 'LO NORMAL: SUBJUNTIVO', sentence: '[[El hecho de que|blue]] [[sea|orange]] la mejor arquitecta de la ciudad no la hace infalible.', idea: 'El hecho se presenta como tema conocido y se comenta. Con valoraciones y emociones (me molesta, es raro) es la opción esperada.', en: 'The fact is a known topic under comment. After evaluations and emotions this is the expected choice: use it when in doubt.' },
            { tone: 'teal', label: 'POSIBLE: INDICATIVO', sentence: '[[El hecho de que|blue]] [[es|teal]] la mejor arquitecta de la ciudad no se discute.', idea: 'Quien habla afirma el hecho como información verdadera. Es menos frecuente y nunca obligatorio.', en: 'The speaker asserts the fact as true information. Less frequent, never compulsory: the subjunctive would also be correct.' },
          ] },
          { kind: 'tip', icon: '💡', title: '«Que…, lo sabe todo el mundo»', text: 'Con verbos de saber o de certeza, una oración con «que» al principio puede llevar **indicativo**, y el verbo la retoma con **lo**: «Que Irene **tiene** criterio, **lo** sabe todo el estudio». Aquí «que…» no se valora: se da por cierto.', en: 'With verbs of knowing or certainty, a fronted «que» clause can be in the indicative, and «lo» picks it up again after it. The fact is not being evaluated, just taken as true.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '___ el cliente cambie los planos cada semana es agotador.', options: ['Lo que', 'Que', 'De que'], answer: 1, why: 'Una oración sustantiva sujeto empieza con «que» (o «el hecho de que»), sin preposición.', en: 'It’s exhausting that the client changes the plans every week.' },
            { prompt: 'El hecho de que nadie nos ___ me molestó.', options: ['avisara', 'avisaría', 'avisó'], answer: 0, why: 'El hecho se comenta con una emoción en pasado (me molestó): imperfecto de subjuntivo.', en: 'It annoyed me that nobody warned us.' },
            { prompt: 'El hecho de que los vecinos se quejen ___ que el proyecto sea malo.', options: ['no significa', 'no signifique', 'no significan'], answer: 0, why: 'El sujeto es toda la oración: verbo en singular, «no significa» (y después, subjuntivo: «sea»).', en: 'Neighbours complaining doesn’t mean the project is bad.' },
          ] },
        ] },
        { title: 'Sustantivo + de que · Noun + de que', mascot: '/brand/mascot/standing.webp', coach: 'El sustantivo decide el modo. The noun decides the mood.', blocks: [
          { kind: 'table', title: '¿Qué modo pide el sustantivo? · Which mood does the noun take?', head: ['Sustantivo + de que', 'Modo', 'Ejemplo'], rows: [
            ['la **posibilidad**, el **riesgo**, la **necesidad** de que', 'subjuntivo', 'Existe [[la posibilidad de que|blue]] nos [[multen|orange]].'],
            ['la **esperanza**, el **miedo** de que (o a que)', 'subjuntivo', 'Tengo [[la esperanza de que|blue]] el cliente [[cambie|orange]] de idea.'],
            ['la **noticia**, el **rumor**, la **impresión**, la **certeza** de que', 'indicativo', 'Nos llegó [[la noticia de que|blue]] [[somos|teal]] finalistas.'],
            ['la **idea** de que', 'depende', 'Me gusta [[la idea de que|blue]] [[trabajemos|orange]] juntos (propuesta). · Defiende [[la idea de que|blue]] la ciudad [[necesita|teal]] árboles (opinión).'],
          ], note: 'Un sustantivo que habla de algo **posible, deseado o temido** pide subjuntivo; uno que **transmite un contenido** (una noticia, una impresión) pide indicativo. Manda el sustantivo: «Me alegró **la noticia de que** te **casabas**».' },
          { kind: 'concept', tone: 'blue', label: 'LO DE QUE · ESO DE QUE', question: '¿Cómo retomo un rumor o una propuesta en la conversación?', en: '«Lo de que» and «eso de que» pick up something that has been said. If it is a piece of news or a rumour, the indicative; if it is a proposal (something someone wants to happen), the subjunctive.', formula: ['lo de que / eso de que + indicativo → una noticia o un rumor', 'lo de que + subjuntivo → una propuesta'],
            meaning: '**Lo de que** y **eso de que** son muy frecuentes en la conversación para retomar algo que se dijo. «Eso de que» suele mostrar distancia o duda.',
            examples: [
              { es: '¿Es verdad [[lo de que|blue]] [[cierran|teal]] la oficina de Monterrey?', en: 'Is it true they’re closing the Monterrey office? A rumour, taken up as information.' },
              { es: '[[Eso de que|blue]] los arquitectos no [[duermen|teal]] es un mito.', en: 'That idea that architects never sleep is a myth: «eso de que» shows some distance.' },
              { es: '[[Lo de que|blue]] [[trabajemos|orange]] desde casa los viernes ya está aprobado.', en: 'The proposal for us to work from home on Fridays has been approved: a proposal, so subjunctive.' },
            ] },
          { kind: 'compare', title: '¿«Que» o «de que» detrás de un sustantivo? · Relative or content?', columns: [
            { tone: 'neutral', label: 'RELATIVO', sentence: 'Es [[la noticia que|blue]] leí esta mañana.', idea: '«Que» sustituye a «la noticia»: leí la noticia. No hay «de».', en: '«Que» stands for the noun itself (I read the news): a relative clause, no «de».' },
            { tone: 'blue', label: 'CONTENIDO', sentence: 'Es [[la noticia de que|blue]] [[ganamos|teal]] el concurso.', idea: 'La oración dice cuál es la noticia: hace falta «de». Sin «de» sería queísmo.', en: 'The clause says what the news is: «de» is required. Leaving it out is «queísmo».' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Corremos el riesgo de que el proyecto ___ un año.', options: ['se retrasa', 'se retrase', 'se retrasará'], answer: 1, why: '«Riesgo» habla de algo temido y posible: subjuntivo.', en: 'We run the risk of the project being delayed by a year.' },
            { prompt: 'Tengo la impresión de que el cliente no ___ el informe.', options: ['leyó', 'leyera', 'haya leído'], answer: 0, why: '«La impresión de que» transmite lo que pienso: indicativo.', en: 'I get the feeling the client didn’t read the report.' },
            { prompt: '¿Es verdad lo de que Paula se ___ a Mérida?', options: ['mudar', 'mude', 'muda'], answer: 2, why: 'Se retoma un rumor como información: indicativo.', en: 'Is it true that Paula is moving to Mérida?' },
          ] },
        ] },
        { title: '¿«Que» o «de que»? · Too much or too little «de»', mascot: '/brand/mascot/kneeling.webp', coach: 'Repasa el truco de «eso». Review the «eso» trick.', blocks: [
          { kind: 'table', title: 'Con «de» o sin «de» · With or without «de»', head: ['Sin «de»', 'Con «de» (o con otra preposición)'], rows: [
            ['**pienso / creo / opino que**', 'estoy **seguro de** que · estoy **convencida de** que'],
            ['**me dijo / me explicó que**', 'me **di cuenta de** que · me **acordé de** que'],
            ['**es posible / es seguro / es probable que**', 'me **alegro de** que · tengo **ganas de** que'],
            ['**me alegra / me preocupa que**', 'la **noticia de** que · con la **condición de** que'],
            ['**recuerdo que**', 'insisto **en** que · confío **en** que'],
          ], note: 'Truco de la clase 110: cambia la oración por **eso**. «Pienso **eso**» → que. «Estoy seguro **de eso**» → de que. «Es seguro **eso**» → es seguro que.' },
          { kind: 'tip', icon: '🌎', title: 'Dequeísmo y queísmo · How careful speakers treat them', text: 'El **dequeísmo** («pienso de que», «me dijo de que») se evita en la lengua cuidada en todo el mundo hispánico. El **queísmo** («estoy seguro que», «me di cuenta que») es muy frecuente en la conversación de muchas zonas, pero en un texto cuidado se mantiene la preposición. Algunos verbos admiten las dos opciones: **avisar (de) que**, **advertir (de) que**, **dudar (de) que**.', en: 'Adding an unnecessary «de» is avoided in careful Spanish everywhere. Dropping a required one is very common in everyday speech in many regions, but careful writing keeps it. A few verbs accept both: avisar, advertir, dudar.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Estoy convencida ___ Irene tiene razón.', options: ['en que', 'que', 'de que'], answer: 2, why: 'Estoy convencida **de** eso → de que.', en: 'I’m convinced Irene is right.' },
            { prompt: 'Es probable ___ el cliente vuelva el año que viene.', options: ['de que', 'que', 'a que'], answer: 1, why: 'Es probable eso → que, sin preposición.', en: 'The client will probably come back next year.' },
            { prompt: 'Nos explicó ___ el plazo era imposible.', options: ['de que', 'en que', 'que'], answer: 2, why: 'Nos explicó eso → que. «Explicó de que» es dequeísmo.', en: 'She explained to us that the deadline was impossible.' },
          ] },
        ] },
        { title: 'Doble valor y tiempos compuestos · Two meanings; compound forms', mascot: '/brand/mascot/speaking.webp', coach: '¿Informa o pide? ¿Antes o a la vez? Inform or ask? Before or at the same time?', blocks: [
          { kind: 'table', title: 'Verbos de doble valor · Verbs with two meanings', head: ['Verbo', 'Indicativo: informa o percibe', 'Subjuntivo: pide, lamenta o acepta'], rows: [
            ['**decir que**', 'Irene dice que el plazo **es** imposible.', 'Irene dice que [[revisemos|orange]] los planos.'],
            ['**insistir en que**', 'Insiste en que el error **fue** del cliente.', 'Insiste en que lo [[revisemos|orange]] todo otra vez.'],
            ['**sentir que**', 'Siento que el equipo **está** cansado. (lo noto)', 'Siento que [[estés|orange]] cansada. (lo lamento)'],
            ['**entender que**', 'Entiendo que la reunión **es** a las cinco. (eso me dijeron)', 'Entiendo que [[estés|orange]] molesto. (me parece normal)'],
          ], note: 'En la clase 129 lo viste en pasado con decir, escribir e insistir. Lo nuevo: **sentir** y **entender** también cambian de significado según el modo.' },
          { kind: 'concept', tone: 'violet', label: 'HABER + PARTICIPIO · INFINITIVO COMPUESTO', question: '¿Cómo hablo de algo anterior con el mismo sujeto?', en: 'With the same subject, use the infinitive instead of «que» + subjunctive. If the action happened before the main verb, use the compound infinitive: haber + past participle. Pronouns attach to «haber».', formula: ['mismo sujeto, acción a la vez: me alegro de verte', 'mismo sujeto, acción anterior: me alegro de haberte visto · siento no haber llamado'],
            meaning: 'Con el mismo sujeto no se usa «que» (clase 095). Si la acción es **anterior** al verbo principal, el infinitivo es **compuesto**: **haber + participio**. Los pronombres van detrás de «haber»: haber**te** conocido, haber**lo** dicho.',
            examples: [
              { es: 'Me alegro de [[haberte conocido|violet]] en el congreso.', en: 'I’m glad I met you at the conference: I am glad now, we met before.' },
              { es: 'Siento [[no haber llamado|violet]] antes. · Siento que no te [[hayan llamado|orange]].', en: 'I’m sorry I didn’t call earlier (same subject) · I’m sorry they didn’t call you (different subject).' },
            ] },
          { kind: 'tip', icon: '✍', title: 'Habiendo + participio · Compound gerund', text: '**Habiendo terminado** el informe, Irene se fue a casa. El gerundio compuesto presenta una acción **anterior** y aparece sobre todo en textos formales. En la conversación se dice «Después de terminar…» o «Cuando terminó…».', en: 'The compound gerund presents an earlier action and belongs mainly to formal writing. In conversation people say «después de terminar» or «cuando terminó».' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Rodrigo lleva una semana con gripe. Paula: «Siento que ___ enfermo».', options: ['estás', 'estés', 'estar'], answer: 1, why: '«Sentir» aquí es lamentar: subjuntivo.', en: 'I’m sorry you’re ill.' },
            { prompt: 'Me alegro de ___ ese curso el año pasado.', options: ['hacer', 'haber hecho', 'que haya hecho'], answer: 1, why: 'Mismo sujeto y acción anterior (el año pasado): infinitivo compuesto.', en: 'I’m glad I did that course last year.' },
            { prompt: 'Samuel no dice nada, pero siento que ___ preocupado.', options: ['está', 'esté', 'estar'], answer: 0, why: 'Aquí «sentir» es percibir, notar: indicativo.', en: 'Samuel says nothing, but I sense he is worried.' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Lee, corrige y explica. Read, correct, explain.', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la frase con el error. Tu alumno dice dónde está el problema y la dice bien. Después aparece la corrección.', self: 'Lee cada frase, busca el error y dila bien en voz alta. Después toca para ver la corrección.' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Que no lo sabes es raro.', right: 'Que no lo sepas es raro.', why: 'Una oración con «que» que se valora (es raro) va en subjuntivo.' },
            { wrong: 'El hecho de que los clientes cambien de idea me molestan.', right: 'El hecho de que los clientes cambien de idea me molesta.', why: 'El sujeto es toda la oración, no «los clientes»: verbo en singular.' },
            { wrong: 'Me preocupa la posibilidad de que el cliente cancela el proyecto.', right: 'Me preocupa la posibilidad de que el cliente cancele el proyecto.', why: '«La posibilidad de que» siempre pide subjuntivo.' },
            { wrong: 'Pienso de que Irene tiene razón.', right: 'Pienso que Irene tiene razón.', why: 'Dequeísmo: pienso eso → que.' },
            { wrong: 'Me di cuenta que faltaba un plano.', right: 'Me di cuenta de que faltaba un plano.', why: 'Queísmo: me di cuenta de eso → de que.' },
            { wrong: 'Siento que no he llamado antes.', right: 'Siento no haber llamado antes.', why: 'Mismo sujeto (yo siento, yo no llamé): infinitivo compuesto, sin «que».' },
            { wrong: 'Insiste en que lo revisamos todo otra vez. (= es una orden)', right: 'Insiste en que lo revisemos todo otra vez.', why: 'Si «insistir en que» transmite una petición, subjuntivo.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué frase es correcta? · Which sentence is correct?', options: ['El hecho de que no me avisaras me dolieron.', 'De que no me avisaras me dolió.', 'El hecho de que no me avisaras me dolió.'], answer: 2, why: '«El hecho de que» + subjuntivo y verbo principal en singular.', en: 'It hurt me that you didn’t let me know.' },
            { prompt: '¿Qué frase es correcta? · Which sentence is correct?', options: ['Me alegro haberlo intentado.', 'Me alegro de haberlo intentado.', 'Me alegro de que lo he intentado.'], answer: 1, why: 'Mismo sujeto y acción anterior: «alegrarse de» + infinitivo compuesto.', en: 'I’m glad I tried.' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno comenta tres hechos reales de su semana empezando por «El hecho de que…», «Que…» y «Lo de que…».' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'Viernes en el estudio', coach: 'Toca las expresiones marcadas. Tap the marked expressions.',
      steps: [
        { title: 'Rodrigo y Paula · Rodrigo and Paula', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Rodrigo, tu alumno es Paula. Después tu alumno toca cada expresión marcada y explica el modo.', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada y explica por qué va en subjuntivo, en indicativo o en infinitivo. (Explain each marked form.)' } },
          { kind: 'explore', title: 'Viernes, cinco de la tarde', setting: 'La cocina de Estudio Cobalto, en Guadalajara. Paula y Rodrigo preparan café después de enterarse de la decisión de Irene. (The kitchen at Estudio Cobalto. Paula and Rodrigo make coffee after hearing about Irene’s decision.)', lines: [
            { who: 'Paula', text: '¿Ya te enteraste? Irene rechazó el contrato del hotel de Chapala.', en: 'Have you heard? Irene turned down the Chapala hotel contract.' },
            { who: 'Rodrigo', text: 'Sí, me lo contó Samuel. [[El hecho de que|blue]] lo [[haya rechazado|orange]] me sorprende muchísimo: era el proyecto del año.', en: 'Yes, Samuel told me. The fact that she turned it down really surprises me: it was the project of the year.' },
            { who: 'Paula', text: 'A mí también. [[Que|blue]] Irene le [[diga|orange]] que no a un cliente así es rarísimo.', en: 'Me too. Irene saying no to a client like that is really unusual.' },
            { who: 'Rodrigo', text: '¿Y es verdad [[lo de que|blue]] el cliente [[quería|teal]] construir sobre una parte del humedal?', en: 'And is it true the client wanted to build on part of the wetland?' },
            { who: 'Paula', text: 'Eso parece. ¿Y oíste [[eso de que|blue]] el estudio [[tiene|teal]] problemas de dinero?', en: 'So it seems. And did you hear that story about the firm having money problems?' },
            { who: 'Rodrigo', text: 'Sí, pero no me lo creo. [[Estoy seguro de que|blue]] Irene lo [[pensó|teal]] muy bien.', en: 'Yes, but I don’t believe it. I’m sure Irene thought it through.' },
            { who: 'Paula', text: 'Yo también. Pero [[siento que|blue]] el equipo [[está|teal]] nervioso. Samuel ni siquiera comió hoy.', en: 'Me too. But I sense the team is nervous. Samuel didn’t even have lunch today.' },
            { who: 'Rodrigo', text: 'Es normal. Es practicante y le preocupa [[la posibilidad de que|blue]] no le [[renueven|orange]] el contrato.', en: 'That’s understandable. He’s an intern and he’s worried they might not renew his contract.' },
            { who: 'Paula', text: 'Pobre. [[Siento no haberle dicho|violet]] nada esta mañana; lo vi muy serio.', en: 'Poor guy. I’m sorry I didn’t say anything to him this morning; he looked very serious.' },
            { who: 'Rodrigo', text: 'Oye, ¿y [[la noticia de que|blue]] [[estamos|teal]] entre los finalistas de la biblioteca? Eso es bueno, ¿no?', en: 'Hey, and the news that we’re among the finalists for the library? That’s good, isn’t it?' },
            { who: 'Paula', text: '¡Buenísimo! Aunque Irene [[insiste en que|blue]] no [[digamos|orange]] nada todavía.', en: 'Great! Although Irene insists we don’t say anything yet.' },
            { who: 'Rodrigo', text: 'Tiene sentido. Y, la verdad, [[me alegro de haber elegido|violet]] este estudio: aquí nadie hace cualquier cosa por dinero.', en: 'Makes sense. And honestly, I’m glad I chose this firm: nobody here will do just anything for money.' },
          ], notes: {
            'El hecho de que': 'Abre la frase y presenta un hecho que todos conocen. Toda la oración es el sujeto de «me sorprende».',
            'haya rechazado': 'Perfecto de subjuntivo: el hecho es pasado y reciente, y se comenta desde ahora (me sorprende).',
            Que: '«Que» solo al principio de la frase, sin «el hecho de». La oración es el sujeto de «es rarísimo».',
            diga: 'Una valoración (es rarísimo) sobre un hecho: subjuntivo.',
            'lo de que': 'Retoma un rumor que circula por el estudio. Es muy frecuente en la conversación.',
            quería: 'Indicativo: el rumor se retoma como información, verdadera o no.',
            'eso de que': '«Eso de que» marca distancia: Paula cuenta un rumor en el que no confía del todo.',
            tiene: 'Indicativo: es el contenido del rumor.',
            'Estoy seguro de que': '«Estar seguro» lleva **de**: estoy seguro de eso → de que. Sin «de» sería queísmo.',
            pensó: 'Con certeza (estoy seguro de que), indicativo.',
            'siento que': 'Aquí «sentir» significa **percibir, notar**: por eso va con indicativo.',
            está: 'Indicativo: Paula describe lo que nota. «Siento que estés nervioso» significaría «lo lamento».',
            'la posibilidad de que': '«Posibilidad» habla de algo que todavía no es real: siempre pide subjuntivo.',
            renueven: 'Presente de subjuntivo de **renovar** (o → ue). Sujeto impersonal: «ellos», el estudio.',
            'Siento no haberle dicho': 'Mismo sujeto (Paula siente, Paula no dijo) y acción anterior: **infinitivo compuesto**. El pronombre «le» va detrás de «haber».',
            'la noticia de que': '«Noticia» transmite un contenido: pide **de que** e indicativo.',
            estamos: 'Indicativo: es el contenido de la noticia.',
            'insiste en que': '«Insistir en que» con valor de **petición**: Irene quiere que no lo cuenten.',
            digamos: 'Subjuntivo porque es una petición. Con información diría «insiste en que el proyecto es bueno».',
            'me alegro de haber elegido': '«Alegrarse **de**» + infinitivo compuesto: Rodrigo se alegra ahora de una elección anterior.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Por qué le sorprende a Rodrigo la decisión de Irene?', options: ['Porque era el proyecto más importante del año.', 'Porque Irene nunca habla con los clientes.', 'Porque el hotel ya estaba construido.'], answer: 0, why: '«Era el proyecto del año».', en: 'Why is Rodrigo surprised by Irene’s decision?' },
            { prompt: '¿Qué piensa Rodrigo del rumor sobre los problemas de dinero?', options: ['Que es verdad.', 'Que no se lo cree.', 'Que se lo contó Irene.'], answer: 1, why: '«Sí, pero no me lo creo».', en: 'What does Rodrigo think of the rumour about money problems?' },
            { prompt: '¿Por qué Paula dice «siento que el equipo está nervioso» y no «esté»?', options: ['Porque es una petición.', 'Porque describe lo que nota.', 'Porque lamenta algo.'], answer: 1, why: '«Sentir que» + indicativo = percibir. Con subjuntivo sería lamentar.', en: 'Why the indicative after «siento que»?' },
          ] },
        ] },
        { title: 'Los mensajes del grupo · The group chat', mascot: '/autoestudio/mascot/noting.webp', blocks: [
          { kind: 'lead', text: 'Esa noche, el grupo de mensajes del estudio está lleno de comentarios. ¿Qué modo pide cada frase: **subjuntivo** (se valora, es posible o se pide) o **indicativo** (se afirma, se percibe o es una noticia)?', en: 'That night the firm’s group chat is full of comments. Which mood does each sentence need: subjunctive (evaluated, possible or requested) or indicative (asserted, perceived or reported as news)?' },
          { kind: 'classify', title: 'Clasifica las frases · Sort the sentences', categories: [
            { id: 'subj', label: 'SUBJUNTIVO · valoración, posibilidad, petición', tone: 'orange' },
            { id: 'ind', label: 'INDICATIVO · noticia, certeza, percepción', tone: 'teal' },
          ], items: [
            { text: 'Que Irene no nos ___ (explicar) nada todavía me pone nerviosa.', answer: 'subj', why: '«Que» al principio + valoración (me pone nerviosa): explique / haya explicado.' },
            { text: 'Me llegó el rumor de que el cliente ___ (buscar) otro estudio.', answer: 'ind', why: '«El rumor de que» transmite un contenido: busca.' },
            { text: 'Existe el riesgo de que la prensa ___ (enterarse) antes del lunes.', answer: 'subj', why: '«Riesgo»: algo temido y posible. Se entere.' },
            { text: 'Estoy convencido de que Irene ___ (tener) sus motivos.', answer: 'ind', why: 'Certeza: tiene.' },
            { text: 'Siento que hoy ___ (haber) mucha tensión en la oficina.', answer: 'ind', why: '«Sentir» = notar: hay.' },
            { text: 'Irene insiste en que nadie ___ (hablar) con el cliente.', answer: 'subj', why: 'Petición: hable.' },
            { text: 'Tengo la esperanza de que Samuel ___ (quedarse) con nosotros.', answer: 'subj', why: '«Esperanza»: un deseo. Se quede.' },
            { text: 'Me alegró la noticia de que ___ (ser) finalistas.', answer: 'ind', why: 'Manda «la noticia»: somos (o éramos).' },
          ] },
          { kind: 'teacher', text: 'Pregunta útil: «¿Se afirma o se cuenta algo como dato, o se valora, se desea o se pide?». Dato → indicativo; valoración, posibilidad o petición → subjuntivo.' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: '¿Se afirma o se comenta? Asserted or commented on?',
      steps: [
        { title: 'Elige la forma · Choose the form', blocks: [
          { kind: 'choice', items: [
            { context: 'Rodrigo explica un retraso de la primavera. (Rodrigo explains a delay last spring.)', prompt: '«El hecho de que el cliente no ___ los planos a tiempo retrasó toda la obra».', options: ['enviar', 'enviara', 'enviaría'], answer: 1, why: '«El hecho de que» al principio, comentado en pasado (retrasó): imperfecto de subjuntivo. El condicional no va aquí.', en: '“The client not sending the plans on time delayed the whole job.”' },
            { context: 'Samuel escucha algo en el pasillo. (Samuel overhears something.)', prompt: '«Oí el rumor de que Irene ___ el estudio».', options: ['iba a vender', 'vender', 'fuera a vender'], answer: 0, why: '«El rumor de que» transmite un contenido: indicativo.', en: '“I heard a rumour that Irene was going to sell the firm.”' },
            { context: 'Paula habla del practicante. (Paula talks about the intern.)', prompt: '«Que Samuel ___ tan pronto no es normal; trabaja demasiado».', options: ['se cansa', 'cansarse', 'se canse'], answer: 2, why: '«Que» al principio + valoración (no es normal): subjuntivo.', en: '“It’s not normal for Samuel to get tired so quickly; he works too much.”' },
            { context: 'Paula no fue a la presentación de Rodrigo porque tenía cita con el médico. (Paula missed Rodrigo’s presentation.)', prompt: '«Siento ___ a tu presentación».', options: ['que no haya ido', 'no ir', 'no haber ido'], answer: 2, why: 'Paula siente y Paula no fue: mismo sujeto, acción anterior → infinitivo compuesto.', en: '“I’m sorry I didn’t go to your presentation.”' },
            { context: 'Hablan de un error en el presupuesto. (A mistake in the budget.)', prompt: '«Rodrigo insiste en que el error ___ del cliente, no nuestro».', options: ['fuera', 'sería', 'fue'], answer: 2, why: 'Rodrigo afirma un dato, no pide nada: insistir en que + indicativo.', en: '“Rodrigo insists the mistake was the client’s, not ours.”' },
          ] },
        ] },
        { title: '¿Con «de» o sin «de»? · With or without «de»?', blocks: [
          { kind: 'classify', title: 'Usa el truco de «eso» · Use the «eso» trick', categories: [
            { id: 'de', label: 'DE QUE', tone: 'blue' },
            { id: 'que', label: 'QUE (sin preposición)', tone: 'neutral' },
          ], items: [
            { text: 'Me di cuenta … faltaba un plano.', answer: 'de', why: 'Me di cuenta de eso → de que.' },
            { text: 'Irene cree … el proyecto no era viable.', answer: 'que', why: 'Cree eso → que.' },
            { text: 'Tengo la impresión … el cliente no lo entendió.', answer: 'de', why: 'Sustantivo + contenido: la impresión de que.' },
            { text: 'Es probable … lleguen tarde.', answer: 'que', why: 'Es probable eso → que.' },
            { text: 'No me acordaba … la reunión era hoy.', answer: 'de', why: 'Acordarse de eso → de que. (Con «recordar»: no recordaba que.)' },
            { text: 'Nos comentó … estaba agotada.', answer: 'que', why: 'Nos comentó eso → que.' },
          ] },
        ] },
        { title: 'Corrige las frases · Correct the sentences', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Pienso de que Irene tomó la decisión correcta.', ok: false, options: ['Pienso de que Irene tomara la decisión correcta.', 'Pienso en que Irene tomó la decisión correcta.', 'Pienso que Irene tomó la decisión correcta.'], answer: 2, why: 'Dequeísmo: pienso eso → pienso que.' },
            { sentence: 'Estoy segura que el cliente volverá.', ok: false, options: ['Estoy segura de que el cliente vuelva.', 'Estoy segura en que el cliente volverá.', 'Estoy segura de que el cliente volverá.'], answer: 2, why: 'Estoy segura de eso → de que, con indicativo (certeza).' },
            { sentence: 'El hecho de que nadie nos avisara nos molestó mucho.', ok: true, why: 'Correcta: «el hecho de que» + imperfecto de subjuntivo y verbo principal en singular.' },
            { sentence: 'Nos preocupa la posibilidad de que perdemos el concurso.', ok: false, options: ['Nos preocupa la posibilidad que perdamos el concurso.', 'Nos preocupa la posibilidad de que perderemos el concurso.', 'Nos preocupa la posibilidad de que perdamos el concurso.'], answer: 2, why: '«La posibilidad de que» siempre pide subjuntivo, y el «de» es necesario.' },
            { sentence: 'Me alegro de haberte conocido en el congreso de Monterrey.', ok: true, why: 'Correcta: mismo sujeto, acción anterior, infinitivo compuesto con el pronombre detrás de «haber».' },
            { sentence: 'Siento que no he contestado tu mensaje.', ok: false, options: ['Siento no haber contestado tu mensaje.', 'Siento de no haber contestado tu mensaje.', 'Siento no contestado tu mensaje.'], answer: 0, why: 'Yo siento y yo no contesté: mismo sujeto → infinitivo compuesto. «Sentir» no lleva «de».' },
          ] },
        ] },
        { title: 'Samuel y Paula · Samuel and Paula', blocks: [
          { kind: 'chat-fill', title: 'Viernes, siete de la tarde · Friday, 7 p.m.', lines: [
            { who: 'Samuel', text: 'Paula, ¿es verdad lo de que ___ despidos?', options: ['va a haber', 'haber', 'vaya a haber'], answer: 0, why: 'Samuel retoma un rumor como información: lo de que + indicativo.' },
            { who: 'Paula', text: 'No. Irene me dijo ayer que no ___ caso a los rumores.', options: ['hiciéramos', 'hacíamos', 'haremos'], answer: 0, why: '«Decir que» con valor de petición, en pasado: imperfecto de subjuntivo.' },
            { who: 'Samuel', text: 'Es que me da miedo la posibilidad de que no me ___ el contrato.', options: ['renovarán', 'renueven', 'renuevan'], answer: 1, why: '«La posibilidad de que» pide subjuntivo.' },
            { who: 'Paula', text: 'Te entiendo. Pero el hecho de que Irene te ___ en el equipo del concurso dice mucho de ti.', options: ['incluir', 'incluiría', 'haya incluido'], answer: 2, why: 'Un hecho reciente comentado desde ahora (dice mucho): perfecto de subjuntivo.' },
            { who: 'Samuel', text: 'Tienes razón. Y yo me alegro mucho ___ en este estudio.', options: ['haber entrado', 'de haber entrado', 'que haya entrado'], answer: 1, why: '«Alegrarse de» + infinitivo compuesto: mismo sujeto, acción anterior.' },
            { who: 'Paula', text: '¡Y nosotros de que estés aquí!' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['El', 'hecho', 'de', 'que', 'no', 'llamara', 'me', 'preocupó.'], accept: ['El hecho de que no llamara me preocupó.'], en: 'The fact that she didn’t call worried me.' },
            { tiles: ['Estoy', 'seguro', 'de', 'que', 'lo', 'conseguiremos.'], accept: ['Estoy seguro de que lo conseguiremos.'], en: 'I’m sure we’ll manage it.' },
            { tiles: ['Siento', 'no', 'haberte', 'avisado', 'antes.'], accept: ['Siento no haberte avisado antes.'], en: 'I’m sorry I didn’t let you know earlier.' },
          ] },
        ] },
        { title: 'Transforma · Transform', blocks: [
          { kind: 'rewrite', title: 'Una frase, otra estructura · Same idea, new structure', items: [
            { prompt: 'Irene no contestó el correo. Eso nos pareció extraño.', instruction: 'Une las ideas: «El hecho de que…». (Join the two ideas.)', accept: ['El hecho de que Irene no contestara el correo nos pareció extraño.', 'El hecho de que Irene no contestase el correo nos pareció extraño.'] },
            { prompt: '«Pienso de que el plazo es demasiado corto».', instruction: 'Corrige el dequeísmo. (Correct the extra «de».)', accept: ['Pienso que el plazo es demasiado corto.'] },
            { prompt: 'No llamé a Samuel. Lo siento.', instruction: 'Una frase con infinitivo compuesto: «Siento…». (Use haber + participle.)', accept: ['Siento no haber llamado a Samuel.', 'Siento no haberlo llamado.', 'Siento no haberle llamado.'] },
            { prompt: 'Es posible que el cliente nos demande.', instruction: 'Usa un sustantivo: «Existe la posibilidad…». (Use a noun.)', accept: ['Existe la posibilidad de que el cliente nos demande.'] },
            { prompt: 'Revisamos los números y después rechazamos la oferta.', instruction: 'Registro formal: «Habiendo…». (Formal register.)', accept: ['Habiendo revisado los números, rechazamos la oferta.'] },
          ] },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Un audio de Irene', coach: 'Primero escucha sin leer. Listen first, read later.',
      steps: [
        { title: 'La directora explica su decisión · The director explains', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: la idea general. Segunda escucha: tu alumno apunta qué rumor desmiente Irene, por qué rechazó el hotel y qué noticia da. Después, las preguntas.', self: 'Escucha una vez para la idea general y otra para los detalles: el rumor, los motivos y la noticia. (Listen once for the gist, once for the details.)' } },
          { kind: 'listen', title: 'Un audio de Irene', channel: 'NOTA DE VOZ · IRENE GARZA, AL GRUPO DEL ESTUDIO', src: '/audio/grammar-live/452.mp3',
            before: 'Es domingo por la noche. Irene manda un audio al equipo antes de volver a la oficina. ¿Qué crees que va a explicar? (What do you think she is going to explain?)',
            gist: { prompt: '¿Para qué manda Irene el audio?', options: ['Para desmentir un rumor, explicar su decisión y dar una buena noticia.', 'Para pedir al equipo que trabaje el fin de semana.', 'Para anunciar que el estudio va a cerrar.'], answer: 0, why: 'Desmiente lo de los problemas económicos, explica lo del hotel y anuncia el concurso.', en: 'Why does Irene send the message?' },
            details: [
              { prompt: '¿Qué dice Irene sobre los problemas económicos del estudio?', options: ['Que no son verdad.', 'Que los explicará el lunes.', 'Que son graves.'], answer: 0, why: '«Lo de que el estudio tiene problemas económicos no es verdad».', en: 'What does Irene say about the firm’s money problems?' },
              { prompt: '¿Qué le pareció inaceptable?', options: ['Que el cliente pagara poco.', 'Que el plazo fuera corto.', 'Que el cliente quisiera construir sobre una parte del humedal.'], answer: 2, why: '«El hecho de que el cliente quisiera construir sobre una parte del humedal me pareció inaceptable».', en: 'What did she find unacceptable?' },
              { prompt: '¿Por qué no lo explicó antes?', options: ['Porque estaba de viaje.', 'Porque no quería preocupar a Samuel.', 'Porque había firmado un acuerdo de confidencialidad.'], answer: 2, why: '«Habiendo firmado un acuerdo de confidencialidad, no podía hablar hasta hoy».', en: 'Why didn’t she explain earlier?' },
              { prompt: '¿Qué le pide al equipo?', options: ['Que nadie hable con la prensa hasta el lunes.', 'Que lleguen a las ocho.', 'Que llamen al cliente.'], answer: 0, why: '«Solo les pido una cosa: que nadie hable con la prensa hasta el lunes».', en: 'What does she ask the team to do?' },
            ],
            transcript: 'Hola, equipo, habla Irene. Les mando este audio porque sé que el viernes corrieron muchos rumores. Primero, [[lo de que|blue]] el estudio [[tiene|teal]] problemas económicos no es verdad: estamos bien, de verdad. Ahora, el hotel de Chapala. [[Entiendo que|blue]] les [[sorprenda|orange]] que haya dicho que no; era el contrato más grande del año. Pero [[el hecho de que|blue]] el cliente [[quisiera|orange]] construir sobre una parte del humedal me pareció inaceptable. Y había otra cosa: [[la posibilidad de que|blue]] nos [[multaran|orange]] a nosotros también, como responsables del diseño. [[Siento no habérselo explicado|violet]] antes. [[Habiendo firmado|violet]] un acuerdo de confidencialidad, no podía hablar hasta hoy. Y ahora, lo mejor: esta mañana recibimos [[la noticia de que|blue]] [[ganamos|teal]] el concurso de la biblioteca de Zapopan. [[Que|blue]] un estudio tan pequeño [[gane|orange]] un concurso así no pasa todos los días. Solo les pido una cosa: que nadie hable con la prensa hasta el lunes. [[Me alegro mucho de haber formado|violet]] este equipo con ustedes. Nos vemos el lunes a las nueve.',
            reply: { teacher: 'Tú eres Samuel, que no escuchó el audio. Tu alumno, como Paula, te cuenta lo esencial: «Lo de que…», «El hecho de que…», «Recibimos la noticia de que…».', self: 'Eres Paula. Cuéntale a Samuel en voz alta tres cosas del audio con «lo de que», «el hecho de que» y «la noticia de que». (Report three things aloud.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Hechos, rumores y posibilidades', coach: 'Comenta hechos reales de tu vida. Comment on real facts from your life.',
      steps: [
        { title: 'Opina sobre los hechos · Give your view on the facts', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas y las preguntas de seguimiento. Si una forma falla, tú repites la frase bien y siguen.', self: 'Lee la situación y responde en voz alta. Antes de hablar, piensa: ¿comento un hecho, cuento una noticia o hablo de algo solo posible? (Read the situation and answer aloud.)' } },
          { kind: 'talk', cards: [
            { q: 'Una decisión de otra persona que te sorprendió: en el trabajo, en tu familia, en tu ciudad. · A decision by someone else that surprised you.', followUps: ['¿Lo entendiste después? (Did you understand it later?)', '¿Tú habrías hecho lo mismo? (Would you have done the same?)'], phrases: ['[[El hecho de que|blue]]… [[decidiera|orange]]… me sorprendió.', '[[Que|blue]] no nos [[avisara|orange]]…', 'Ahora [[entiendo que|blue]]…'], hint: 'Pon el hecho al principio y coméntalo después: «El hecho de que + subjuntivo + me sorprendió».', example: 'El año pasado mi hermana dejó un trabajo fijo en un banco para abrir una panadería. El hecho de que lo decidiera en una semana nos sorprendió a todos, y que no nos pidiera opinión molestó un poco a mis padres. Ahora entiendo que lo necesitaba: es feliz y le va bien.', next: 'Ahora, un rumor.' },
            { q: 'Un rumor que oíste en tu trabajo, tu escuela o tu barrio. ¿Era verdad? · A rumour you heard at work, school or in your neighbourhood. Was it true?', followUps: ['¿Quién lo contó? (Who spread it?)', '¿Cómo reaccionó la gente? (How did people react?)'], phrases: ['[[Lo de que|blue]]… [[era|teal]] mentira.', '[[Eso de que|blue]]…', '[[El rumor de que|blue]]…'], hint: 'Un rumor o una noticia se retoma con indicativo: «lo de que cierran la fábrica».', example: 'En mi oficina corrió el rumor de que iban a trasladar a todo el equipo a otra ciudad. Al final, lo de que nos mudábamos era mentira: solo cambiaban dos departamentos. Eso de que «las noticias malas siempre son verdad» no siempre se cumple.', next: 'Ahora, costumbres.' },
            { q: 'Una costumbre de tu país o de otro país que te parece curiosa, lógica o rara. · A custom that seems curious, logical or strange to you.', followUps: ['¿De dónde crees que viene? (Where do you think it comes from?)', '¿Te costó acostumbrarte? (Was it hard to get used to?)'], phrases: ['[[Que|blue]] la gente [[cene|orange]] tan tarde me parece…', '[[El hecho de que|blue]]… no significa que…', 'Me llama la atención…'], hint: '«Que» al principio + subjuntivo + valoración. Y «no significa que» + subjuntivo.', example: 'Que en algunos países la gente cenara a las diez de la noche me pareció rarísimo al principio. Ahora lo entiendo: el hecho de que haga tanto calor por la tarde lo explica en parte. Y que algo sea diferente no significa que sea peor.', next: 'Ahora, posibilidades.' },
            { q: 'Un cambio que estás pensando: mudarte, cambiar de trabajo, estudiar algo nuevo. ¿Qué posibilidades y miedos ves? · A change you are considering: what possibilities and fears do you see?', followUps: ['¿Qué te anima a hacerlo? (What encourages you?)', '¿Qué necesitarías para decidirte? (What would you need to decide?)'], phrases: ['Existe [[la posibilidad de que|blue]]…', 'Me da miedo [[el riesgo de que|blue]]…', 'Tengo [[la esperanza de que|blue]]…'], hint: 'Posibilidad, riesgo, miedo y esperanza + de que + subjuntivo.', example: 'Estoy pensando en estudiar un máster en Barcelona. Existe la posibilidad de que la empresa me dé un año libre, pero me da miedo el riesgo de que mi puesto ya no exista cuando vuelva. Tengo la esperanza de que todo salga bien.', next: 'Ahora, lo que lamentas y lo que celebras.' },
            { q: 'Algo que lamentas no haber hecho y algo de lo que te alegras de haber hecho. · Something you regret not doing and something you are glad you did.', followUps: ['¿Todavía puedes hacerlo? (Can you still do it?)', '¿Qué aprendiste? (What did you learn?)'], phrases: ['[[Siento no haber|violet]]…', '[[Me alegro de haber|violet]]…', '[[Me arrepiento de no haber|violet]]…'], hint: 'Mismo sujeto y acción anterior: haber + participio. Con otro sujeto: «siento que no hayas…».', example: 'Siento no haber aprendido a tocar un instrumento de niño; ahora me cuesta mucho. En cambio, me alegro de haber vivido un año en el extranjero: tuve que arreglármelas solo y conocí a gente maravillosa.', next: 'Para terminar, un debate.' },
            { q: 'Debate: ¿está bien rechazar un contrato importante por principios, como hizo Irene? · Is it right to turn down an important contract on principle?', followUps: ['¿Y si hay empleos en juego? (And if jobs are at stake?)', '¿Conoces algún caso real? (Do you know of a real case?)'], phrases: ['[[Estoy convencido de que|blue]]…', '[[El hecho de que|blue]]… no significa que…', '[[Entiendo que|blue]]…, pero…'], hint: 'Cuidado con «de que»: estoy convencido de que, pero pienso que y creo que.', example: 'Estoy convencida de que Irene hizo bien. El hecho de que un contrato sea grande no significa que convenga a cualquier precio. Entiendo que el equipo se preocupara, pero pienso que la reputación de un estudio vale más que un hotel.', teacher: 'Tú defiendes la postura contraria. Tu alumno responde usando al menos una vez «el hecho de que… no significa que…».' },
          ], swap: { teacher: 'Al final cambian los papeles: tu alumno te pregunta por un rumor, una decisión sorprendente y algo que lamentas; tú respondes y tu alumno revisa tus «de que» y tus subjuntivos.', self: 'Ahora comenta en voz alta tres hechos de tu semana: uno con «el hecho de que», otro con «lo de que» y otro con «me alegro de haber…». (Comment on three facts aloud.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Un correo a la directora', coach: 'Reacciona a una decisión con argumentos. React to a decision with reasons.',
      steps: [
        { title: 'Después del audio · After the voice message', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos cada «que»: ¿lleva «de»? ¿Se afirma o se comenta? Después tu alumno lee el correo en voz alta.', self: 'Escribe tu correo y toca «Revisar mi texto». En cada «que», pregúntate: ¿lleva «de»? ¿Se afirma o se comenta? (Write your email and tap “Revisar mi texto”.)' } },
          { kind: 'write', title: 'Correo a Irene · Email to Irene', situation: 'Eres Paula. Después de escuchar el audio, le escribes un correo a Irene para reaccionar a su decisión, comentar la noticia del concurso y proponer algo para el lunes. También puedes escribir a tu jefe o jefa sobre una decisión real de tu trabajo. (You are Paula. Write to Irene reacting to her decision, commenting on the news and proposing something for Monday, or write about a real decision at your own workplace.)', task: [
            'Comenta dos hechos con «el hecho de que» o «que» al principio + subjuntivo. (Two facts, placed first.)',
            'Usa un sustantivo + de que: la posibilidad, el riesgo, la noticia… (One noun + de que.)',
            'Escribe una frase con infinitivo compuesto: siento no haber…, me alegro de haber… (Compound infinitive.)',
            'Cuida «de que»: estoy seguro de que, pero pienso que. (Watch your «de que».)',
            'Termina con una propuesta concreta para el lunes. (End with a proposal.)',
          ], starters: ['Te escribo después de…', 'El hecho de que…', 'Que nadie…', 'Estoy segura de que…', 'Siento no haber…', 'Te propongo que…'],
            words: ['el hecho de que', 'que (al inicio)', 'la noticia de que', 'el riesgo de que', 'la posibilidad de que', 'estoy segura de que', 'siento no haber', 'me alegro de haber', 'rechazaras', 'explicara'],
            model: 'Hola, Irene: Te escribo después de escuchar tu audio. Te confieso que el viernes me sorprendió el hecho de que rechazaras un contrato tan grande, y que nadie nos explicara nada nos puso a todos un poco nerviosos. Ahora entiendo tus razones y estoy segura de que tomaste la decisión correcta: el riesgo de que el proyecto dañara el humedal era demasiado alto. Siento no haberte preguntado directamente en lugar de escuchar rumores. Y me alegro mucho de haber estado en el equipo del concurso: la noticia de que ganamos la biblioteca es la mejor manera de empezar la semana. Te propongo que el lunes hagamos una reunión corta para explicarle al equipo cómo vamos a organizar el nuevo proyecto. Creo que eso nos tranquilizaría a todos, sobre todo a Samuel. Un abrazo, Paula',
            minWords: 120,
            checks: [
              { label: 'Un hecho comentado con «el hecho de que»', pattern: '(?<!\\p{L})el\\s+hecho\\s+de\\s+que(?!\\p{L})', tip: 'Escribe, por ejemplo: «Me sorprendió el hecho de que rechazaras el contrato».' },
              { label: 'Un sustantivo + de que (la posibilidad, el riesgo, la noticia…)', pattern: '(?<!\\p{L})(?:posibilidad|riesgo|noticia|necesidad|esperanza|miedo|impresión|idea|rumor)\\s+de\\s+que(?!\\p{L})', tip: 'Escribe, por ejemplo: «El riesgo de que el proyecto dañara el humedal era alto».' },
              { label: 'Un infinitivo compuesto (haber + participio)', pattern: '(?<!\\p{L})haber(?:me|te|le|lo|la|nos|les|los|las|se)*\\s+\\p{L}+(?:ado|ido|to|cho)(?!\\p{L})', tip: 'Escribe, por ejemplo: «Siento no haberte preguntado antes».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})(?:pienso|piensa|creo|cree|opino|opina|considero|me\\s+dijo|nos\\s+dijo|me\\s+explicó|nos\\s+explicó)\\s+de\\s+que(?!\\p{L})', why: 'Dequeísmo: «pienso que», «creo que», «me dijo que», sin «de».' },
              { pattern: '(?<!\\p{L})(?:(?:estoy|estás|está|estamos|están|estaba)\\s+(?:segur|convencid)[oa]s?|me\\s+alegro|me\\s+di\\s+cuenta|me\\s+acuerdo)\\s+que(?!\\p{L})', why: 'Queísmo: «estoy segura de que», «me alegro de que», «me di cuenta de que».' },
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
            { tone: 'blue', label: 'EL HECHO COMO TEMA', formula: 'el hecho de que / que + subjuntivo + comentario', example: 'El hecho de que no llamara me preocupó. Que no lo sepas es raro.', caption: 'verbo principal en singular', en: 'A fact placed first and commented on: normally subjunctive; the main verb agrees in the singular' },
            { tone: 'teal', label: 'SE AFIRMA O ES NOTICIA', formula: 'la noticia / el rumor / la impresión de que + indicativo · lo de que + dato', example: 'Recibimos la noticia de que ganamos el concurso.', caption: 'se transmite un contenido', en: 'When content is reported or asserted (news, rumours, impressions), the indicative' },
            { tone: 'orange', label: 'POSIBLE, TEMIDO, DESEADO', formula: 'la posibilidad / el riesgo / la esperanza de que + subjuntivo', example: 'Existe el riesgo de que la prensa se entere.', caption: 'todavía no es real', en: 'Nouns of possibility, risk, fear and hope take the subjunctive' },
            { tone: 'blue', label: 'NI DE MÁS NI DE MENOS', formula: 'pienso que · estoy seguro de que · la noticia de que', example: 'Me di cuenta de que faltaba un plano.', caption: 'el truco de «eso»', en: 'No «de» where the verb doesn’t take it; keep it where the verb, adjective or noun requires it' },
            { tone: 'violet', label: 'DOBLE VALOR Y FORMAS COMPUESTAS', formula: 'siento que está (noto) / esté (lamento) · siento no haber llamado', example: 'Me alegro de haberte conocido.', caption: 'mismo sujeto y acción anterior', en: 'Sentir, entender, decir, insistir change meaning with the mood; haber + participle for an earlier action with the same subject' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Pregúntate: **¿afirmo o cuento un dato?** (indicativo) **¿O lo comento, lo valoro, lo deseo o lo veo solo posible?** (subjuntivo). Y antes de escribir «que», haz la prueba de **eso**: ¿hace falta «de»?', en: 'Ask yourself: am I asserting or reporting a fact (indicative), or commenting on it, evaluating it, wishing for it or seeing it as only possible (subjunctive)? And before writing «que», try the «eso» test: is «de» needed?' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/portrait.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'Que tu hermano no ___ a la boda es una pena.', options: ['venir', 'viene', 'venga'], answer: 2, why: '«Que» al principio + valoración: subjuntivo.', en: 'It’s a shame your brother isn’t coming to the wedding.' },
            { prompt: 'En el aeropuerto recibimos la noticia de que el vuelo ___ cancelado.', options: ['estuviera', 'estar', 'estaba'], answer: 2, why: '«La noticia de que» transmite un contenido: indicativo.', en: 'At the airport we got the news that the flight was cancelled.' },
            { prompt: 'Estoy convencida ___ podemos hacerlo.', options: ['en que', 'que', 'de que'], answer: 2, why: 'Convencida de eso → de que.', en: 'I’m convinced we can do it.' },
            { prompt: 'Siento mucho que ___ que cancelar tu viaje.', options: ['tener', 'tuvieras', 'tuviste'], answer: 1, why: '«Sentir» = lamentar, con otro sujeto y en pasado: imperfecto de subjuntivo.', en: 'I’m so sorry you had to cancel your trip.' },
            { prompt: 'Me alegro de ___ este curso: me sirvió muchísimo.', options: ['haber hecho', 'que haya hecho', 'hacer'], answer: 0, why: 'Mismo sujeto y acción anterior: infinitivo compuesto.', en: 'I’m glad I took this course: it was really useful.' },
          ] },
        ] },
        { title: 'Otra situación · A new situation', mascot: '/autoestudio/mascot/noting.webp', blocks: [
          { kind: 'lead', text: 'Valparaíso, Chile. La municipalidad cerró al tráfico la calle principal de un barrio los domingos. **Carmen**, que tiene una librería en esa calle, lo comenta con sus vecinos.', en: 'Valparaíso, Chile. The council has closed a neighbourhood’s main street to traffic on Sundays. Carmen, who runs a bookshop there, talks it over with her neighbours.' },
          { kind: 'rewrite', title: 'Carmen comenta los hechos · Carmen comments on the facts', items: [
            { prompt: 'La municipalidad cerró la calle sin consultar. A los comerciantes les molestó.', instruction: 'Une las ideas: «A los comerciantes les molestó el hecho de que…». (Join the ideas.)', accept: ['A los comerciantes les molestó el hecho de que la municipalidad cerrara la calle sin consultar.', 'A los comerciantes les molestó el hecho de que la municipalidad cerrase la calle sin consultar.'] },
            { prompt: 'Un vecino dice: «Van a cerrar también los sábados». Carmen no sabe si es verdad.', instruction: 'Pregunta con «¿Es verdad lo de que…?». (Ask about the rumour.)', accept: ['¿Es verdad lo de que van a cerrar también los sábados?', '¿Es verdad lo de que también van a cerrar los sábados?', '¿Es verdad lo de que van a cerrar la calle también los sábados?'] },
            { prompt: 'Carmen no fue a la reunión de vecinos. Lo lamenta.', instruction: 'Escribe la frase de Carmen: «Siento…». (Same subject, earlier action.)', accept: ['Siento no haber ido a la reunión de vecinos.', 'Siento no haber ido a la reunión.'] },
          ] },
        ] },
        { title: 'Ampliación: matices y registro formal · Extension: nuance and formal register', mascot: '/brand/mascot/studying.webp', coach: 'Opcional: para ir más lejos. Optional: going further.', blocks: [
          { kind: 'lead', text: 'Tres matices para alumnos avanzados. **El que** puede sustituir a «el hecho de que» al principio de la frase: «**El que** no respondiera fue extraño». Con verbos de saber o demostrar, la oración con «que» puede ir delante en indicativo y el verbo la retoma con **lo**. Y en informes y actas aparece el gerundio compuesto: «**Habiendo revisado** los documentos, la comisión aprobó…».', en: 'Three finer points. «El que» can replace «el hecho de que» at the start of a sentence. With verbs of knowing or proving, a fronted «que» clause can be in the indicative and is picked up again by «lo». And reports and minutes use the compound gerund.' },
          { kind: 'choice', title: 'Matices · Finer points', items: [
            { prompt: 'Informe: «___ revisado los documentos, la comisión aprobó el proyecto».', options: ['Habiéndose', 'Haber', 'Habiendo'], answer: 2, why: 'Gerundio compuesto: una acción anterior, en registro formal.', en: 'Report: having reviewed the documents, the committee approved the project.' },
            { prompt: '«El hecho de que el estudio ___ ganado tres concursos en un año demuestra su calidad». ¿Qué formas son posibles?', options: ['«Haya» y también «ha», si quien habla quiere afirmar el dato.', 'Solo «ha».', 'Solo «haya».'], answer: 0, why: 'El subjuntivo es lo normal; el indicativo es posible cuando se presenta el hecho como información afirmada.', en: 'Which forms are possible?' },
            { prompt: '¿Qué frase significa lo mismo que «El hecho de que no respondiera fue extraño»?', options: ['De que no respondiera fue extraño.', 'El que no respondiera fue extraño.', 'Lo que no respondiera fue extraño.'], answer: 1, why: '«El que» + subjuntivo equivale a «el hecho de que» al principio de la frase.', en: 'Which sentence means the same?' },
            { prompt: '«Que el proyecto es viable, ___ demostraron los ingenieros».', options: ['se', 'le', 'lo'], answer: 2, why: 'La oración con «que» va delante y el verbo la retoma con «lo», como un complemento directo.', en: 'That the project is viable, the engineers proved it.' },
          ] },
          { kind: 'teacher', text: 'Paso opcional, para alumnos fuertes o si sobra tiempo. Extra: tu alumno reescribe en tono de acta dos frases del audio de Irene con «habiendo + participio» y «el hecho de que».' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 153 · Oraciones causales avanzadas: no porque + subjuntivo', text: 'Hoy has visto que el subjuntivo aparece cuando un hecho no se afirma, sino que se comenta o se presenta como tema. La clase 153 aplica la misma lógica a las causas: cuando niegas una causa para dar la verdadera, va en subjuntivo: «No lo rechazó porque **fuera** poco dinero, sino porque dañaba el humedal».', en: 'Today you saw that the subjunctive appears when a fact is not asserted but commented on or treated as the topic. Class 153 applies the same logic to causes: when you deny one cause in order to give the real one, it takes the subjunctive.', href: '/gramatica/oraciones-causales-avanzadas-no-porque-subjuntivo', label: 'Ir a la clase 153' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Qué diferencia hay entre “la noticia de que ganamos” y “la posibilidad de que ganemos”, y entre “siento que estás cansado” y “siento que estés cansado”?». Respuesta esperada: contenido afirmado frente a algo posible; percibir frente a lamentar. Tarea: comentar por escrito tres noticias de la semana empezando por «El hecho de que…».' },
        ] },
      ],
    },
  ],
};
