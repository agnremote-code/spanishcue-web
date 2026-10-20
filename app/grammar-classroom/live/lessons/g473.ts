import type { LiveLesson } from '../types';

/**
 * Lesson 473 · C1 · Modalidad epistémica: evidencialidad y grados de certeza (course unit G173).
 * Builds on G094 (lesson 394: the B1 scale seguro que / a lo mejor / quizás / dudo que),
 * G158 (lesson 458: deber de / tener que for inference) and G161 (lesson 461: future and
 * conditional of probability). C1 step: two questions behind every statement, HOW SURE
 * am I and WHERE does the information come from. Content: a four-step scale with its
 * moods (certainty: sin duda, seguro que, está claro que, no cabe duda de que + ind.;
 * high: seguramente, probablemente, lo más probable es que + subj., debe de / tiene que
 * + inf., future; medium: quizá(s), tal vez, posiblemente + ind./subj., puede que + subj.,
 * a lo mejor + ind.; low: dudo que, no creo que, es poco probable que + subj., difícilmente
 * + ind.); the paradox that a bare statement is more certain than «seguro que…»;
 * evidentiality: own inference (se ve que, por lo que veo, a juzgar por, parece que + ind.),
 * reported information (al parecer, por lo visto, según parece, parece ser que, dicen que,
 * se dice que, se supone que), limits of one's knowledge (que yo sepa, a lo que parece);
 * parece que + ind. vs no parece que / parece mentira que + subj.; the journalistic
 * conditional of rumour (habría dimitido, estaría cerrado) vs the conditional of
 * probability, with an accurate register note. Ampliación: supuestamente / presuntamente,
 * dizque (colloquial, many American countries).
 * Scene: the newsroom of a local digital paper, «Noticias del Valle». Editor Lucía Ferrer
 * and reporter Gabriel Ortega check a rumour that the hundred-year-old Teatro Olimpia will
 * close and be sold to a hotel group; councillor Elena Ibarra does not answer. Escuchar:
 * Marina Duque's evening bulletin on Radio Valle (es-CO-SalomeNeural). Escribir: the news item.
 */
export const lesson: LiveLesson = {
  id: 473,
  level: 'C1',
  title: 'Modalidad epistémica: evidencialidad y grados de certeza',
  subtitle: 'Graduar la certeza y señalar la fuente de lo que dices: lo sé, lo deduzco o me lo han contado, en la conversación y en la prensa.',
  legend: [
    { tone: 'orange', label: 'GRADO DE CERTEZA · no cabe duda de que, debe de, lo más probable es que, dudo que (how sure)' },
    { tone: 'teal', label: 'FUENTE PROPIA · se ve que, por lo que veo, que yo sepa (I infer it / as far as I know)' },
    { tone: 'blue', label: 'FUENTE AJENA · al parecer, por lo visto, dicen que, se supone que (I was told)' },
    { tone: 'violet', label: 'CONDICIONAL DE RUMOR · habría dimitido, estaría cerrado (unconfirmed news)' },
  ],
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: '¿Cuánto sabes y cómo lo sabes?', coach: 'Certeza y fuente. How sure, and how do you know?',
      steps: [
        { title: 'Un rumor en la redacción · A rumour in the newsroom', blocks: [
          { kind: 'lead', text: 'Lunes, nueve de la mañana, en la redacción de «Noticias del Valle», un diario digital local. Desde el fin de semana circula un rumor: el Teatro Olimpia, con cien años de historia, cerraría y el edificio se vendería a un grupo hotelero. La jefa de redacción, Lucía Ferrer, le hace a Gabriel Ortega las dos preguntas que hoy vas a aprender a responder con la gramática: **¿qué grado de certeza tienes?** y **¿de dónde sale la información?**', en: 'Monday, 9 a.m., in the newsroom of a local online paper. Since the weekend a rumour has been going round: the hundred-year-old Teatro Olimpia is said to be closing and the building being sold to a hotel group. The editor asks the reporter the two questions this class teaches you to answer through grammar: how sure are you, and where does the information come from?' },
          { kind: 'guide', text: { teacher: 'Tú lees las tres columnas. Tu alumno dice en cuál Gabriel lo ha comprobado, en cuál lo deduce y en cuál se lo han contado.', self: 'Lee las tres frases en voz alta y decide: ¿lo ha comprobado, lo deduce o se lo han contado? (Checked, inferred or heard?)' } },
          { kind: 'compare', title: 'Tres maneras de saber · Three ways of knowing', columns: [
            { tone: 'neutral', label: 'LO HA COMPROBADO', sentence: 'La web del teatro no tiene funciones después de diciembre.', idea: 'Gabriel lo ha visto con sus ojos: afirma sin marcas.', en: 'A checked fact: no marker at all. Plain indicative is the strongest statement Spanish has.' },
            { tone: 'teal', label: 'LO DEDUCE', sentence: '[[Se ve que|teal]] no piensan renovar la temporada.', idea: 'Saca una conclusión a partir de una pista que tiene delante.', en: 'An inference drawn from visible evidence: “it’s clear they aren’t planning…”, “they obviously aren’t…”.' },
            { tone: 'blue', label: 'SE LO HAN CONTADO', sentence: '[[Al parecer|blue]], el edificio se vende a un grupo hotelero.', idea: 'Transmite lo que dice otra persona, sin hacerse responsable.', en: 'Reported information: “apparently”, “reportedly”. The speaker passes it on without vouching for it.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«La concejala no está en su despacho: debe de haber salido; al parecer, se fue a una reunión». ¿Qué sabe Gabriel con seguridad?', options: ['Que la concejala se fue a casa.', 'Que la concejala no está en el despacho.', 'Que la concejala ha salido a una reunión.'], answer: 1, why: 'Lo único afirmado sin marca es que no está. «Debe de haber salido» es una deducción; «al parecer, se fue a una reunión», algo que le han dicho.', en: 'Only the bare statement is certain: the rest is an inference and a piece of hearsay.' },
            { prompt: '¿Qué frase transmite algo que otra persona ha dicho?', options: ['Por lo que veo, el teatro está vacío.', 'Por lo visto, el director ya lo sabía.', 'Tiene que haber un error en la web.'], answer: 1, why: '«Por lo visto», en el uso actual, presenta sobre todo información oída. «Por lo que veo» y «tiene que» son deducciones propias.', en: 'Which sentence passes on what someone else said?' },
          ] },
        ] },
        { title: 'La escala de la certeza · The certainty scale', mascot: '/brand/mascot/studying.webp', coach: 'Cada grado, su modo. Each step has its mood.', blocks: [
          { kind: 'table', title: 'Cuatro grados y su gramática · Four steps and their grammar', head: ['Grado', 'Marcadores', 'Modo', 'Ejemplo'], rows: [
            ['**Certeza**', 'sin duda · seguro que · está claro que · no cabe duda de que', 'indicativo', '[[No cabe duda de que|orange]] el edificio **necesita** una reforma.'],
            ['**Probabilidad alta**', 'seguramente · probablemente · debe de / tiene que + inf. · futuro · lo más probable es que', 'indicativo (probablemente, delante del verbo, admite también subjuntivo); subjuntivo tras «lo más probable es que»', '[[Lo más probable es que|orange]] el pleno **vote** en noviembre.'],
            ['**Probabilidad media**', 'quizá(s) · tal vez · posiblemente · puede que · a lo mejor', 'quizás, tal vez, posiblemente: ind. o subj.; puede que: subj.; a lo mejor: ind.', '[[Tal vez|orange]] la concejala **llame** / **llama** hoy.'],
            ['**Probabilidad baja**', 'dudo que · no creo que · es poco probable que · difícilmente', 'subjuntivo; difícilmente + indicativo', '[[Es poco probable que|orange]] **haya** una decisión este año.'],
          ], note: 'La escala es orientativa: la entonación y el contexto también gradúan. Recuerda de B1 que **quizás / tal vez / posiblemente / probablemente** admiten los dos modos cuando van **delante** del verbo (el subjuntivo suele sonar más dudoso) y solo indicativo cuando van detrás: «Llama hoy, tal vez».' },
          { kind: 'tip', icon: '💡', title: 'La paradoja de «seguro que» · The “seguro que” paradox', text: 'La afirmación desnuda es la más segura: «El teatro **cierra** en enero». En cuanto añades «**seguro que**» o «**sin duda**», muestras que es **tu conclusión**, no un dato comprobado: «Seguro que cierra en enero» = estoy convencido, pero no lo he visto escrito. Y recuerda: **seguramente** no significa ‘seguro’, sino ‘probablemente’.', en: 'A bare statement is the most certain one. Adding “seguro que” or “sin duda” reveals that this is your own conclusion, however firm, not a checked fact. And “seguramente” means “probably”, not “surely / certainly”.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Gabriel tiene la carta oficial en la mano. ¿Qué frase refleja mejor lo que sabe?', options: ['Seguro que el teatro cierra el 15 de enero.', 'El teatro cierra el 15 de enero.', 'Seguramente el teatro cierra el 15 de enero.'], answer: 1, why: 'Con un documento comprobado, la afirmación sin marcas es la más fuerte. «Seguro que» presenta una conclusión propia y «seguramente» rebaja a ‘probablemente’.', en: 'Gabriel is holding the official letter. Which sentence best reflects what he knows?' },
            { prompt: 'Dudo que la concejala ___ algo antes del pleno.', options: ['confirme', 'confirmará', 'confirma'], answer: 0, why: '«Dudo que» está en el grado bajo de la escala y pide subjuntivo.', en: 'I doubt the councillor will confirm anything before the council meeting.' },
          ] },
        ] },
        { title: 'Lo deduzco · I infer it', mascot: '/brand/mascot/speaking.webp', coach: 'Una pista y una conclusión. A clue and a conclusion.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'FUENTE PROPIA: LA INFERENCIA', question: '¿Tu información sale de algo que ves, oyes o sabes tú?', en: 'Spanish has several ways of saying that information comes from your own inference. “Tener que + infinitive” is the most confident deduction (“it has to be”), “deber de + infinitive” a solid one, the future a conjecture. “Se ve que”, “por lo que veo” and “a juzgar por…” explicitly point to the evidence; “parece que” works both for inference and for hearsay.', formula: ['tiene que + inf. (casi seguro) · debe de + inf. (deducción) · futuro (conjetura)', 'se ve que / por lo que veo / a juzgar por… + indicativo', 'parece que + indicativo (por lo que veo o por lo que dicen)'],
            meaning: 'Estas formas dicen **de dónde sale** tu conclusión: de una pista que tienes delante. Con **se ve que** y **por lo que veo** la pista es visible; con **tener que** la prueba es tan clara que casi no dudas.',
            examples: [
              { es: 'Hay dos arquitectos midiendo el vestíbulo: [[se ve que|teal]] preparan una reforma.', en: 'Two architects are measuring the foyer: they’re obviously planning a refit.' },
              { es: '[[Por lo que veo|teal]], nadie ha actualizado la web desde octubre.', en: 'From what I can see, nobody has updated the website since October.' },
              { es: 'La puerta del despacho está cerrada con llave: la concejala [[debe de haber salido|orange]].', en: 'Her office door is locked: the councillor must have gone out.' },
              { es: 'Solo el director tiene esa llave. [[Tiene que haber sido|orange]] él.', en: 'Only the director has that key. It has to have been him.' },
            ] },
          { kind: 'compare', title: 'Tres deducciones, tres grados · Three inferences, three degrees', columns: [
            { tone: 'orange', label: 'CASI SEGURO', sentence: 'Hay luz en la sala: [[tiene que haber|orange]] alguien dentro.', idea: 'La prueba no deja alternativa razonable.', en: '“There has to be someone inside”: the evidence leaves no sensible alternative.' },
            { tone: 'orange', label: 'DEDUCCIÓN', sentence: 'Hay luz en la sala: [[debe de haber|orange]] alguien dentro.', idea: 'Conclusión sólida, pero abierta a otra explicación.', en: '“There must be someone inside”: a solid conclusion, still open to another explanation.' },
            { tone: 'teal', label: 'CONCLUSIÓN A LA VISTA', sentence: 'Hay luz en la sala: [[se ve que|teal]] están ensayando.', idea: 'Presenta la conclusión como evidente por lo que se ve.', en: '“They’re clearly rehearsing”: the conclusion is presented as obvious from what can be seen.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Gabriel ve cajas de vestuario en la puerta del teatro. ¿Qué frase marca que lo deduce de lo que ve?', options: ['Dicen que se llevan el vestuario.', 'Por lo que veo, se están llevando el vestuario.', 'Que yo sepa, el vestuario es de la compañía.'], answer: 1, why: '«Por lo que veo» señala una fuente propia y visible. «Dicen que» es fuente ajena; «que yo sepa» limita lo que sabes, no presenta una pista.', en: 'Gabriel sees costume boxes at the theatre door. Which sentence signals that he infers it from what he sees?' },
            { context: 'Gabriel ve el coche oficial de la concejala en el aparcamiento.', prompt: '«Tiene que estar en el ayuntamiento». ¿Qué expresa aquí «tener que»?', options: ['Una obligación de estar allí.', 'Una deducción casi segura.', 'Una información que le han contado.'], answer: 1, why: 'El coche es la pista: «tener que» + infinitivo expresa aquí la deducción más firme (clase 158), no una obligación.', en: 'What does “tener que” express here?' },
          ] },
        ] },
        { title: 'Me lo han contado · I was told', mascot: '/autoestudio/mascot/noting.webp', coach: 'Transmites, no garantizas. You pass it on, you don’t vouch for it.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'FUENTE AJENA: LO REPORTADO', question: '¿Transmites algo que has oído o leído sin haberlo comprobado?', en: 'Reportative markers pass information on while making clear that you are not its source: “al parecer”, “según parece”, “parece ser que” (apparently, reportedly), “por lo visto” (from what I hear), “dicen que / se dice que / se comenta que” (people say). “Se supone que” presents what is said or expected, and often hints that reality may not match. All take the indicative.', formula: ['al parecer · según parece · parece ser que · por lo visto + indicativo', 'dicen que · se dice que · se comenta que · según + fuente + indicativo', 'se supone que + indicativo (lo dicho o lo previsto… ¿pero es así?)'],
            meaning: 'El hablante **transmite** una información y deja claro que **no responde de ella**. Todos estos marcadores van con **indicativo**: el modo no cambia, cambia la fuente.',
            examples: [
              { es: '[[Por lo visto|blue]], los actores se enteraron por un mensaje del sindicato.', en: 'Apparently the actors found out from a union message.' },
              { es: '[[Parece ser que|blue]] la oferta llegó en septiembre.', en: 'It seems the offer came in September.' },
              { es: '[[Se supone que|blue]] el teatro reabría en septiembre, pero sigue cerrado.', en: 'The theatre was supposed to reopen in September, but it’s still closed.' },
              { es: '[[Que yo sepa|teal]], nadie ha firmado nada. · [[A lo que parece|blue]], tampoco hay prisa.', en: 'As far as I know, nobody has signed anything. · By all appearances, there’s no hurry either.' },
            ],
            note: '**Que yo sepa** (‘as far as I know’) lleva siempre subjuntivo y limita tu propio conocimiento: «que sepamos», «que yo recuerde» funcionan igual.' },
          { kind: 'table', title: '«Parecer»: tres construcciones · Three “parecer” patterns', head: ['Construcción', 'Valor', 'Ejemplo'], rows: [
            ['**parece que** + indicativo', 'inferencia o información oída', '[[Parece que|blue]] la concejala **está** de viaje.'],
            ['**no parece que** + subjuntivo', 'la negación rebaja la certeza', 'No parece que **tenga** prisa por contestar.'],
            ['**parece mentira que** + subjuntivo', 'valoración: sorpresa o indignación, no fuente', 'Parece mentira que un teatro centenario **cierre** así.'],
          ], note: '«Parece mentira que» no informa de dónde sale el dato: lo da por cierto y lo **valora**, como «es increíble que». Por eso va con subjuntivo.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Parece mentira que nadie ___ a la compañía de teatro.', options: ['ha avisado', 'haya avisado', 'habría avisado'], answer: 1, why: '«Parece mentira que» valora un hecho (sorpresa, indignación) y pide subjuntivo.', en: 'It’s hard to believe nobody has told the theatre company.' },
            { prompt: '«Se supone que la obra empezaba en octubre». ¿Qué da a entender?', options: ['Que la obra empezó en octubre, sin duda.', 'Que eso era lo previsto, y probablemente no se ha cumplido.', 'Que el hablante lo deduce de una pista.'], answer: 1, why: '«Se supone que» presenta lo dicho o previsto; con imperfecto suele insinuar que la realidad ha sido otra.', en: 'What does it imply?' },
          ] },
        ] },
        { title: 'El condicional de rumor · The conditional of rumour', mascot: '/brand/mascot/seated.webp', coach: 'Prensa: lo atribuye, no lo afirma. The press attributes it.', blocks: [
          { kind: 'concept', tone: 'violet', label: 'CONDICIONAL PERIODÍSTICO', question: '¿Una noticia no confirmada, atribuida a una fuente?', en: 'In news writing the conditional marks information the paper has not confirmed and attributes to a source: “El ministro habría dimitido” = reportedly, the minister has resigned. The simple conditional covers present facts (estaría negociando), the compound one past facts (habría dimitido). It is not the writer’s guess, unlike the conditional of probability from class 161 (“serían las ocho”), and it is not a hypothesis (“would have resigned if…”).', formula: ['según + fuente, + condicional simple → hecho presente no confirmado', 'según + fuente, + condicional compuesto → hecho pasado no confirmado'],
            meaning: 'El periodista ni afirma ni supone: **atribuye** el dato a otra fuente y avisa de que **no está confirmado**. Casi siempre aparece con la fuente: «según fuentes de…», «según la prensa local».',
            examples: [
              { es: 'Según fuentes del partido, el ministro [[habría dimitido|violet]] esta mañana.', en: 'According to party sources, the minister resigned this morning (unconfirmed).' },
              { es: 'Según la prensa regional, el acuerdo [[estaría cerrado|violet]] desde el viernes.', en: 'According to the regional press, the deal has reportedly been closed since Friday.' },
              { es: 'El grupo hotelero [[habría ofrecido|violet]] unos tres millones, según la misma fuente.', en: 'The hotel group is said to have offered about three million, according to the same source.' },
            ] },
          { kind: 'compare', title: 'El mismo tiempo, tres usos · One tense, three uses', columns: [
            { tone: 'violet', label: 'RUMOR (PRENSA)', sentence: 'Según fuentes municipales, la venta [[habría sido|violet]] aprobada en secreto.', idea: 'Información de otros, no confirmada.', en: 'Someone else’s unconfirmed claim: “has reportedly been approved”.' },
            { tone: 'orange', label: 'PROBABILIDAD (CLASE 161)', sentence: 'Cuando llegó Gabriel, serían las nueve.', idea: 'El propio hablante calcula: ‘probablemente eran’.', en: 'The speaker’s own estimate: “it must have been about nine”.' },
            { tone: 'neutral', label: 'HIPÓTESIS', sentence: 'Con más público, el teatro no habría cerrado.', idea: 'Una situación irreal.', en: 'An unreal situation: “it wouldn’t have closed”.' },
          ] },
          { kind: 'tip', icon: '🌎', title: 'Registro y polémica · Register and controversy', text: 'Es muy frecuente en la prensa de España y de América. La gramática académica lo describe como condicional de rumor o de información no asegurada, pero varios libros de estilo periodístico lo **desaconsejan**: lo consideran un galicismo y señalan que deja en el aire quién responde del dato. Alternativa más clara: atribuir y usar indicativo («Fuentes municipales **aseguran** que la venta **está** cerrada»). En la conversación es mucho más normal decir «**al parecer**, ha dimitido».', en: 'Very common in the press on both sides of the Atlantic. Academic grammar describes it as the conditional of rumour or unconfirmed information, but several newspaper style guides advise against it as a gallicism that leaves unclear who stands behind the claim. A clearer option is to attribute and use the indicative. In conversation, “al parecer, ha dimitido” is far more natural.' },
          { kind: 'decide', title: '¿Cómo lo presentas? · How do you present it?', steps: [
            { q: '¿Lo has comprobado tú (documento, declaración oficial, lo has visto)?', yes: 'Afírmalo en **indicativo**, sin marcas: «El teatro **cierra** el 15 de enero».', no: 'next' },
            { q: '¿Lo deduces de una pista?', yes: 'Usa **se ve que**, **por lo que veo**, **debe de** o **tiene que**: «[[Se ve que|teal]] preparan una reforma».', no: 'next' },
            { q: '¿Te lo ha contado alguien?', yes: 'En la conversación: **al parecer**, **por lo visto**, **dicen que** + indicativo. En la prensa: fuente + indicativo, o fuente + **condicional de rumor**: «Según fuentes municipales, la venta [[estaría cerrada|violet]]».', no: 'Si solo lo imaginas, gradúa: **a lo mejor**, **puede que**, **dudo que**…' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Titular: «El alcalde habría aceptado la oferta». ¿Qué significa?', options: ['El periodista calcula que el alcalde la aceptó.', 'El alcalde la aceptaría si se la mejoraran.', 'Según alguna fuente, el alcalde la ha aceptado, pero no está confirmado.'], answer: 2, why: 'Condicional de rumor: información atribuida y no confirmada. No es hipótesis ni cálculo propio.', en: 'Headline: “The mayor has reportedly accepted the offer.” What does it mean?' },
            { prompt: 'Según una fuente anónima, el grupo hotelero ___ ya los planos del nuevo hotel.', options: ['tenga', 'tendría', 'tuviera'], answer: 1, why: 'Información atribuida y no confirmada sobre el presente: condicional simple de rumor.', en: 'According to an anonymous source, the hotel group already has the plans for the new hotel (unconfirmed).' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: '¿El marcador pide indicativo o subjuntivo? Which mood?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees cada frase con el error y tu alumno explica qué falla antes de ver la corrección: ¿el modo, la forma del marcador o la manera de presentar la fuente?', self: 'Lee cada frase y decide qué falla: ¿el modo, la forma del marcador o la fuente? Después toca para ver la corrección. (Is the problem the mood, the marker or the source?)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Lo más probable es que el ayuntamiento vende el edificio.', right: 'Lo más probable es que el ayuntamiento venda el edificio.', why: '«Lo más probable es que» pide subjuntivo, aunque la probabilidad sea alta. Compara: «Seguramente lo vende» (adverbio + indicativo).' },
            { wrong: 'A lo mejor el pleno lo apruebe en diciembre.', right: 'A lo mejor el pleno lo aprueba en diciembre.', why: '«A lo mejor» va con indicativo en la norma general.' },
            { wrong: 'Que yo sé, la venta no está firmada.', right: 'Que yo sepa, la venta no está firmada.', why: 'La fórmula es fija y lleva subjuntivo: «que yo sepa», «que sepamos».' },
            { wrong: 'Parece mentira que el teatro cierra después de cien años.', right: 'Parece mentira que el teatro cierre después de cien años.', why: '«Parece mentira que» valora un hecho y pide subjuntivo; solo «parece que», sin negación ni valoración, va con indicativo.' },
            { wrong: 'Se ve que los vecinos estén preocupados: han recogido mil firmas.', right: 'Se ve que los vecinos están preocupados: han recogido mil firmas.', why: '«Se ve que» presenta una conclusión evidente y va con indicativo.' },
            { wrong: 'Debe que haber un error en la web.', right: 'Debe de haber un error en la web.', why: '«Deber» nunca lleva «que» delante del infinitivo: «debe de haber» o, también aceptado, «debe haber».' },
            { wrong: 'Tenemos la carta oficial: el teatro cerraría el 15 de enero.', right: 'Tenemos la carta oficial: el teatro cierra (o cerrará) el 15 de enero.', why: 'No es un error de forma, sino de postura: si el dato está comprobado, el condicional de rumor crea una duda que no existe.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'No creo que la concejala ___ toda la información.', options: ['tenga', 'tendrá', 'tiene'], answer: 0, why: '«No creo que» está en el grado bajo y pide subjuntivo.', en: 'I don’t think the councillor has all the information.' },
            { prompt: '¿Qué frase es correcta?', options: ['Por lo visto, el contrato tiene una cláusula secreta.', 'Por lo visto el contrato tenga una cláusula secreta.', 'Por lo visto que el contrato tiene una cláusula secreta.'], answer: 0, why: '«Por lo visto» es un adverbio de frase: no lleva «que» y va con indicativo.', en: 'Which sentence is correct?' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno cuenta una noticia reciente de su ciudad en tres frases: una comprobada, una deducida y una oída, cada una con su marcador.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'Lo que sabemos y lo que nos cuentan', coach: 'Toca cada marca: ¿certeza o fuente? Tap each mark.',
      steps: [
        { title: 'Reunión de las nueve · The nine o’clock meeting', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Lucía y tu alumno es Gabriel. Después tu alumno toca cada expresión marcada y dice si gradúa la certeza o indica la fuente.', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada: ¿gradúa la certeza o indica la fuente? (Does it grade certainty or show the source?)' } },
          { kind: 'explore', title: '¿Qué tenemos del Olimpia?', setting: 'Redacción de «Noticias del Valle», lunes a las nueve. Lucía, la jefa de redacción, repasa con Gabriel el rumor del Teatro Olimpia. (The editor goes over the theatre rumour with the reporter.)', lines: [
            { who: 'Lucía', text: 'Gabriel, lo del Olimpia ya está en todos los grupos de mensajes. ¿Qué tenemos?', en: 'Gabriel, the Olimpia story is already in every messaging group. What have we got?' },
            { who: 'Gabriel', text: 'Comprobado, poca cosa. [[Por lo visto|blue]], el ayuntamiento quiere vender el edificio a un grupo hotelero.', en: 'Not much that’s confirmed. Apparently the council wants to sell the building to a hotel group.' },
            { who: 'Lucía', text: '«Por lo visto» no es una fuente. ¿Quién lo dice?', en: '“Apparently” isn’t a source. Who says so?' },
            { who: 'Gabriel', text: 'Un técnico de sonido del teatro. Y, según alguien del ayuntamiento, la venta [[estaría cerrada|violet]], pero no quiere dar su nombre.', en: 'A sound technician at the theatre. And according to someone at the council, the sale has reportedly been closed, but they won’t give their name.' },
            { who: 'Lucía', text: 'O sea, de momento es un rumor. ¿Y la concejala de Cultura?', en: 'So for now it’s a rumour. And the culture councillor?' },
            { who: 'Gabriel', text: 'No contesta. Fui a su despacho y estaba cerrado: [[debe de haber salido|orange]]; [[al parecer|blue]], se fue a una reunión fuera.', en: 'She isn’t answering. I went to her office and it was locked: she must have gone out; apparently she went to a meeting elsewhere.' },
            { who: 'Lucía', text: '¿Y algo que hayas visto tú?', en: 'And anything you’ve seen yourself?' },
            { who: 'Gabriel', text: 'Sí: la web no tiene funciones después de diciembre y esta mañana había dos arquitectos midiendo el vestíbulo. [[Se ve que|teal]] algo están preparando.', en: 'Yes: the website has no shows after December, and this morning two architects were measuring the foyer. They’re clearly preparing something.' },
            { who: 'Lucía', text: 'Eso ya es otra cosa. [[Tiene que haber|orange]] algún expediente en el registro. [[Que yo sepa|teal]], una venta así tiene que pasar por el pleno.', en: 'Now that’s something. There has to be a file in the register. As far as I know, a sale like that has to go through the full council.' },
            { who: 'Gabriel', text: '[[Lo más probable es que|orange]] la lleven al pleno de diciembre.', en: 'Most likely they’ll take it to the December meeting.' },
            { who: 'Lucía', text: 'Puede ser, pero [[dudo que|orange]] la concejala nos lo confirme antes. Así que con cuidado: lo comprobado, en indicativo; lo que nos cuentan, con su fuente.', en: 'Maybe, but I doubt the councillor will confirm it before then. So carefully: what we’ve checked, in the indicative; what we’re told, with its source.' },
            { who: 'Gabriel', text: '¿Y titulamos «El Olimpia [[cerraría|violet]] en enero»?', en: 'And do we run “Olimpia reportedly to close in January” as the headline?' },
          ], notes: {
            'Por lo visto': '**Fuente ajena**: Gabriel transmite algo que ha oído, sin responder de ello. Por eso Lucía pregunta enseguida quién lo dice.',
            'estaría cerrada': '**Condicional de rumor** en boca de un periodista: información atribuida a una fuente anónima y no confirmada (= dice que la venta está cerrada).',
            'debe de haber salido': '**Deducción** con «deber de» + infinitivo compuesto: la pista es la puerta cerrada. Grado alto, pero no seguro.',
            'al parecer': '**Fuente ajena**: alguien le ha dicho adónde fue. Fíjate en el contraste con la deducción anterior: lo deduce / se lo han dicho.',
            'Se ve que': '**Fuente propia y visible**: los arquitectos y la web son la pista. Va con indicativo (están preparando).',
            'Tiene que haber': '**Deducción casi segura**: Lucía razona a partir de cómo funciona el ayuntamiento. No es una obligación.',
            'Que yo sepa': '**Límite del propio conocimiento**: ‘as far as I know’. Fórmula fija con subjuntivo.',
            'Lo más probable es que': '**Probabilidad alta** con subjuntivo (lleven): aunque Gabriel lo ve muy probable, la construcción exige subjuntivo.',
            'dudo que': '**Probabilidad baja** + subjuntivo (confirme): Lucía cree que no lo confirmará.',
            'cerraría': '**Condicional de rumor** en un titular. Gabriel lo propone, pero es arriesgado: muchos lectores solo leen el titular y se quedan con el rumor como si fuera un hecho.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Qué ha comprobado Gabriel personalmente?', options: ['Que el edificio está vendido.', 'Que la web no tiene funciones después de diciembre.', 'Que la concejala está en una reunión.'], answer: 1, why: 'Lo dice sin marcas porque lo ha visto: «la web no tiene funciones después de diciembre».', en: 'What has Gabriel checked himself?' },
            { prompt: '¿Por qué no le basta a Lucía «por lo visto»?', options: ['Porque va con subjuntivo.', 'Porque es una expresión vulgar.', 'Porque no dice quién es la fuente.'], answer: 2, why: '«Por lo visto» marca que la información es oída, pero no la atribuye a nadie concreto.', en: 'Why isn’t “por lo visto” enough for Lucía?' },
            { prompt: '¿Qué cree Lucía que va a hacer la concejala?', options: ['Dimitir antes de diciembre.', 'Confirmar la venta hoy mismo.', 'Probablemente no confirmar nada antes del pleno.'], answer: 2, why: '«Dudo que la concejala nos lo confirme antes»: grado bajo de probabilidad.', en: 'What does Lucía think the councillor will do?' },
          ] },
        ] },
        { title: '¿De dónde sale cada dato? · Where does each piece come from?', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'classify', title: 'Clasifica la fuente · Classify the source', categories: [
            { id: 'comprobado', label: 'COMPROBADO · sin marcas', tone: 'neutral' },
            { id: 'deducido', label: 'DEDUCIDO · fuente propia', tone: 'teal' },
            { id: 'oido', label: 'OÍDO · fuente ajena', tone: 'blue' },
          ], items: [
            { text: 'La compañía estable ha ensayado hoy, como cada lunes.', answer: 'comprobado', why: 'Afirmación sin marcas: el hablante lo presenta como un hecho.' },
            { text: 'Por lo que veo, ya han retirado los carteles de la fachada.', answer: 'deducido', why: '«Por lo que veo»: conclusión a partir de lo que tiene delante.' },
            { text: 'Se comenta que el director se jubila en primavera.', answer: 'oido', why: '«Se comenta que»: información que circula, sin fuente concreta.' },
            { text: 'La taquilla está cerrada: deben de haber suspendido la venta.', answer: 'deducido', why: '«Deben de haber suspendido»: deducción a partir de una pista.' },
            { text: 'Según el sindicato, la plantilla no sabía nada.', answer: 'oido', why: '«Según el sindicato»: la información se atribuye a otra fuente.' },
            { text: 'Parece ser que la oferta incluía conservar la fachada.', answer: 'oido', why: '«Parece ser que» funciona como «al parecer»: información oída o leída.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: «¿Qué titularías tú hoy?». Tu alumno propone un titular solo con datos comprobados y explica por qué no usa el condicional de rumor.' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: '¿Cuánto lo sabes y de dónde viene? How sure, and from where?',
      steps: [
        { title: 'Elige la forma · Choose the form', blocks: [
          { kind: 'choice', items: [
            { prompt: 'Lo más probable es que la concejala ___ mañana en rueda de prensa.', options: ['comparezca', 'comparece', 'comparecería'], answer: 0, why: '«Lo más probable es que» pide subjuntivo aunque exprese probabilidad alta.', en: 'Most likely the councillor will appear at a press conference tomorrow.' },
            { prompt: '___ el edificio necesita una reforma: el techo del vestíbulo tiene goteras desde hace años.', options: ['Puede que', 'No cabe duda de que', 'Dudo que'], answer: 1, why: '«Necesita» está en indicativo y la prueba es clara: certeza. «Dudo que» y «puede que» pedirían «necesite».', en: 'There’s no doubt the building needs refurbishing: the foyer ceiling has been leaking for years.' },
            { prompt: '___, la venta todavía no se ha aprobado: no aparece en ninguna acta.', options: ['Que yo sé', 'Que yo sepa', 'Lo que yo sepa'], answer: 1, why: 'Fórmula fija con subjuntivo: «que yo sepa» = as far as I know.', en: 'As far as I know, the sale hasn’t been approved yet: it isn’t in any minutes.' },
            { prompt: 'Las luces del escenario siguen encendidas a medianoche: ___ ensayando alguna compañía.', options: ['dudo que esté', 'debe de estar', 'a lo mejor esté'], answer: 1, why: 'Deducción a partir de una pista: «debe de» + infinitivo. «Dudo que» contradice la pista; «a lo mejor» va con indicativo.', en: 'The stage lights are still on at midnight: some company must be rehearsing.' },
            { context: 'Un vecino le cuenta algo a Gabriel en la calle.', prompt: '«___, el grupo hotelero ya ha comprado el bar de al lado».', options: ['Por lo que veo', 'Al parecer', 'No cabe duda de que'], answer: 1, why: 'El vecino transmite algo que ha oído: fuente ajena, «al parecer». «Por lo que veo» exigiría una pista a la vista.', en: '“Apparently the hotel group has already bought the bar next door.”' },
          ] },
        ] },
        { title: '¿Qué grado de certeza? · How certain?', blocks: [
          { kind: 'classify', title: 'Clasifica en la escala · Place on the scale', categories: [
            { id: 'cierta', label: 'CERTEZA', tone: 'orange' },
            { id: 'alta', label: 'PROBABILIDAD ALTA', tone: 'teal' },
            { id: 'media', label: 'PROBABILIDAD MEDIA', tone: 'blue' },
            { id: 'baja', label: 'PROBABILIDAD BAJA', tone: 'violet' },
          ], items: [
            { text: 'Está claro que el edificio tiene un gran valor histórico.', answer: 'cierta', why: '«Está claro que» + indicativo: el hablante no deja lugar a la duda.' },
            { text: 'El concejal de Urbanismo tiene que saberlo: firmó el informe.', answer: 'alta', why: '«Tener que» + infinitivo: deducción casi segura a partir de una prueba.' },
            { text: 'A lo mejor el grupo hotelero retira la oferta.', answer: 'media', why: '«A lo mejor»: posibilidad abierta, con indicativo.' },
            { text: 'Difícilmente aprobarán la venta antes de las elecciones.', answer: 'baja', why: '«Difícilmente» + indicativo: el hablante lo ve muy poco probable.' },
            { text: 'Puede que el teatro siga abierto hasta el verano.', answer: 'media', why: '«Puede que» + subjuntivo: posibilidad media.' },
            { text: 'Es poco probable que el pleno vote este mes.', answer: 'baja', why: '«Es poco probable que» + subjuntivo: grado bajo.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Es poco probable que el grupo hotelero mantiene la sala principal.', ok: false, options: ['Es poco probable que el grupo hotelero mantenía la sala principal.', 'Es poco probable que el grupo hotelero mantenga la sala principal.', 'Es poco probable que el grupo hotelero mantendría la sala principal.'], answer: 1, why: '«Es poco probable que» pide subjuntivo: mantenga.' },
            { sentence: 'Parece mentira que nadie haya protestado antes.', ok: true, why: 'Correcta: «parece mentira que» valora un hecho y lleva subjuntivo.' },
            { sentence: 'Según fuentes municipales, el edificio se vendería por tres millones.', ok: true, why: 'Correcta en registro periodístico: información atribuida y no confirmada.' },
            { sentence: 'No parece que el director está preocupado.', ok: false, options: ['No parece que el director estará preocupado.', 'No parece que el director estaría preocupado.', 'No parece que el director esté preocupado.'], answer: 2, why: 'Con negación, «parecer que» pasa a subjuntivo: no parece que esté.' },
            { sentence: 'Se supone que la reforma terminaba en marzo, pero no han empezado.', ok: true, why: 'Correcta: «se supone que» + imperfecto presenta lo previsto, que no se ha cumplido.' },
            { sentence: 'Seguramente que la concejala lo sepa desde hace semanas.', ok: false, options: ['Seguramente que la concejala lo supiera desde hace semanas.', 'Seguramente la concejala lo sabría desde hace semanas.', 'Seguramente la concejala lo sabe desde hace semanas.'], answer: 2, why: '«Seguramente» va con indicativo, y la variante coloquial «seguramente que» no cambia el modo. Aquí nada pide subjuntivo, y el condicional trasladaría la suposición al pasado.' },
          ] },
        ] },
        { title: 'Mensajes de la tarde · Evening messages', blocks: [
          { kind: 'chat-fill', title: 'Gabriel escribe a Lucía · Gabriel texts Lucía', lines: [
            { who: 'Gabriel', text: 'He vuelto a hablar con el técnico de sonido. ___, les han dicho que busquen otro trabajo para febrero.', options: ['Por lo que veo', 'No cabe duda de que', 'Por lo visto'], answer: 2, why: 'Transmite lo que le han contado: fuente ajena. «Por lo que veo» indicaría una pista visible.' },
            { who: 'Lucía', text: '¿Lo tienen por escrito? Si no hay papel, ___ que podamos publicarlo.', options: ['no cabe duda de', 'está claro', 'dudo'], answer: 2, why: 'Lucía lo ve poco probable y «podamos» es subjuntivo: «dudo que». Los otros dos pedirían indicativo.' },
            { who: 'Gabriel', text: 'Sí: me ha enviado la carta de la empresa, con sello y firma. ___ es auténtica.', options: ['Es poco probable que', 'No cabe duda de que', 'Puede que'], answer: 1, why: 'Sello y firma: certeza, con indicativo («es»).' },
            { who: 'Lucía', text: 'Entonces ya podemos afirmarlo sin rodeos: «El Olimpia ___ el 15 de enero».', options: ['cerraría', 'cierre', 'cerrará'], answer: 2, why: 'Dato comprobado: indicativo. El condicional de rumor solo cabe para lo no confirmado.' },
            { who: 'Gabriel', text: '¿Y lo del hotel? Solo lo tengo de la fuente anónima: «Según una fuente municipal, el comprador ___ un grupo hotelero».', options: ['sería', 'fuera', 'sea'], answer: 0, why: 'Información atribuida y no confirmada: condicional de rumor. Nada pide subjuntivo.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['Que', 'yo', 'sepa,', 'nadie', 'ha', 'firmado', 'nada', 'todavía'], accept: ['Que yo sepa, nadie ha firmado nada todavía', 'Que yo sepa, todavía nadie ha firmado nada'], en: 'As far as I know, nobody has signed anything yet.' },
            { tiles: ['Se', 've', 'que', 'el', 'teatro', 'ya', 'no', 'vende', 'entradas'], accept: ['Se ve que el teatro ya no vende entradas'], en: 'The theatre obviously isn’t selling tickets any more.' },
            { tiles: ['Según', 'fuentes', 'sindicales,', 'la', 'plantilla', 'habría', 'recibido', 'una', 'oferta'], accept: ['Según fuentes sindicales, la plantilla habría recibido una oferta'], en: 'According to union sources, the staff have reportedly received an offer.' },
          ] },
        ] },
        { title: 'Reformula · Rephrase', blocks: [
          { kind: 'rewrite', title: 'Cambia la certeza o la fuente · Change the certainty or the source', items: [
            { prompt: 'Seguramente el comprador quiere conservar la fachada.', instruction: 'Misma probabilidad, otra construcción: empieza con «Lo más probable es que…».', accept: ['Lo más probable es que el comprador quiera conservar la fachada'] },
            { prompt: 'Me han dicho que el director ha renunciado.', instruction: 'Sin «me han dicho»: empieza con «Al parecer,».', accept: ['Al parecer, el director ha renunciado', 'Al parecer, el director renunció'] },
            { prompt: 'Según fuentes municipales, el ayuntamiento ha vendido el edificio.', instruction: 'Para la prensa: marca que no está confirmado con el condicional compuesto.', accept: ['Según fuentes municipales, el ayuntamiento habría vendido el edificio', 'El ayuntamiento habría vendido el edificio, según fuentes municipales'] },
            { prompt: 'Por lo que yo sé, no hay ningún contrato firmado.', instruction: 'Usa la fórmula fija con subjuntivo.', accept: ['Que yo sepa, no hay ningún contrato firmado', 'No hay ningún contrato firmado, que yo sepa'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno cuenta un rumor que ha oído esta semana dos veces: primero como en una conversación (al parecer, por lo visto) y después como en un periódico (según…, + condicional).' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'El informativo de la tarde', coach: 'Primero la idea, después las fuentes. Gist first, then sources.',
      steps: [
        { title: 'Radio Valle, a las siete · Radio Valle at seven', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general. Segunda escucha: tu alumno anota qué presenta la locutora como hecho, qué atribuye a otras fuentes y qué valora como probable. Después, las preguntas.', self: 'Escucha una vez para la idea general y otra para separar hechos, fuentes y probabilidades. Vas a oír «a la que ha tenido acceso esta emisora» (which this station has seen) y «orden del día» (agenda). (Listen once for the gist, then sort facts, sources and likelihoods.)' } },
          { kind: 'listen', title: 'Informativo de Radio Valle', channel: 'RADIO VALLE · INFORMATIVO DE LAS SIETE', src: '/audio/grammar-live/473.mp3',
            before: 'Esa tarde, la radio local abre su informativo con el Teatro Olimpia. ¿Qué crees que presentará como hecho y qué como rumor? (What will the bulletin present as fact, and what as rumour?)',
            gist: { prompt: '¿Qué hace la locutora con la noticia? · What does the presenter do with the story?', options: ['Separa lo confirmado (el cierre) de lo que aún es rumor (la venta).', 'Anuncia que el edificio ya está vendido.', 'Desmiente que el teatro vaya a cerrar.'], answer: 0, why: 'Da el cierre como hecho, con su fuente, y presenta la venta con condicional de rumor y marcadores de fuente ajena.', en: 'She keeps the confirmed closure apart from the unconfirmed sale.' },
            details: [
              { prompt: '¿Qué está confirmado, según la emisora?', options: ['Que el teatro cierra el 15 de enero.', 'Que el grupo hotelero ha comprado el edificio.', 'Que la concejala ha dimitido.'], answer: 0, why: '«El teatro cerrará sus puertas el 15 de enero», según una carta a la que ha tenido acceso la emisora.', en: 'What is confirmed, according to the station?' },
              { prompt: '¿Cómo presenta la oferta del grupo hotelero?', options: ['Como una suposición de la locutora.', 'Como un hecho comprobado.', 'Como información de fuentes municipales, no confirmada.'], answer: 2, why: '«Según fuentes municipales, el ayuntamiento estaría negociando… y habría recibido ya una primera oferta».', en: 'How does she present the hotel group’s offer?' },
              { prompt: '¿Qué ha hecho la concejala Ibarra?', options: ['No ha querido hacer declaraciones.', 'Ha convocado a los vecinos.', 'Ha confirmado la venta.'], answer: 0, why: '«La concejala de Cultura, Elena Ibarra, no ha querido hacer declaraciones».', en: 'What has councillor Ibarra done?' },
              { prompt: '¿Qué ve poco probable la locutora?', options: ['Que haya una decisión antes de fin de año.', 'Que haya protestas el sábado.', 'Que el tema llegue al pleno.'], answer: 0, why: '«Es poco probable que haya una decisión antes de fin de año».', en: 'What does she consider unlikely?' },
            ],
            transcript: 'Buenas tardes, son las siete y les habla Marina Duque. Abrimos el informativo con el Teatro Olimpia. Según una carta de la empresa que lo gestiona, a la que ha tenido acceso esta emisora, el teatro cerrará sus puertas el próximo 15 de enero. Hasta aquí, los hechos. Lo que todavía no está confirmado es el futuro del edificio. Según fuentes municipales, el ayuntamiento [[estaría negociando|violet]] su venta con un grupo hotelero, que [[habría presentado|violet]] ya una primera oferta. [[Al parecer|blue]], los compradores quieren conservar la fachada y convertir la sala principal en un salón de congresos. [[Por lo visto|blue]], algunos actores de la compañía estable ya han empezado a buscar otros escenarios. La concejala de Cultura, Elena Ibarra, no ha querido hacer declaraciones y, [[que sepamos|teal]], el asunto no figura en el orden del día del próximo pleno. Los vecinos, por su parte, ya han recogido más de dos mil firmas, y [[se ve que|teal]] la protesta va en serio: para este sábado han convocado una concentración frente al teatro. [[Lo más probable es que|orange]] el tema llegue al pleno de diciembre, aunque [[es poco probable que|orange]] haya una decisión antes de fin de año. Seguiremos informando.',
            reply: { teacher: 'Tú eres Lucía y llamas a la radio para comentar la noticia. Tu alumno es Gabriel y te resume en tres frases qué está confirmado, qué es rumor y qué ve probable.', self: 'Resume la noticia en voz alta en tres frases: un hecho comprobado, un rumor con su fuente y una valoración de probabilidad. (Summarise aloud: one fact, one rumour with its source, one likelihood.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Hablar con matices', coach: 'Gradúa y cita la fuente. Hedge and name your source.',
      steps: [
        { title: 'Rumores, pistas y certezas · Rumours, clues and certainties', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas y tu alumno responde marcando el grado de certeza y la fuente. Si afirma como hecho algo que solo ha oído, tú preguntas «¿Y eso cómo lo sabes?» y tu alumno reformula.', self: 'Lee cada pregunta y responde en voz alta. En cada respuesta usa al menos un marcador de certeza y uno de fuente. (Use at least one certainty marker and one source marker in each answer.)' } },
          { kind: 'talk', cards: [
            { q: 'Cuenta un rumor que circula en tu trabajo, tu edificio o tu barrio. ¿Te lo crees? · Tell a rumour from your work or neighbourhood.', followUps: ['¿Quién lo cuenta y por qué?', '¿Qué tendría que pasar para que te lo creyeras?', '¿Lo contarías tú a otras personas?'], phrases: ['[[Por lo visto|blue]]…', '[[Se comenta que|blue]]…', '[[Que yo sepa|teal]], …', '[[Dudo que|orange]] + subjuntivo…'], hint: 'Primero transmite (fuente ajena + indicativo); después da tu opinión con un grado de certeza.', example: 'Por lo visto, en mi empresa van a cambiar de oficina el año que viene. Se comenta que han alquilado una planta en el centro, pero que yo sepa, nadie ha visto el contrato. Dudo que sea tan pronto: la mudanza anterior tardó dos años.' },
            { q: 'Has visto una noticia viral sorprendente. ¿Cómo decides si es verdad? · How do you decide whether a viral story is true?', followUps: ['¿Qué fuentes consultas?', '¿Te ha engañado alguna vez una noticia falsa?'], phrases: ['[[No cabe duda de que|orange]] + indicativo…', '[[Lo más probable es que|orange]] + subjuntivo…', '[[Parece ser que|blue]]…', '**Parece mentira que** + subjuntivo…'], hint: 'Distingue lo que dice la noticia (fuente ajena) de lo que tú concluyes (grado de certeza).', example: 'Hace poco vi que, al parecer, iban a prohibir los patinetes en mi ciudad. Lo más probable es que fuera un malentendido, porque no aparecía en ningún medio serio. Parece mentira que tanta gente lo compartiera sin comprobarlo.', next: 'Ahora, a deducir.' },
            { q: 'Llegas a casa y encuentras pistas: luz encendida, café caliente, una chaqueta que no es tuya. ¿Qué deduces? · You find clues at home: what do you infer?', followUps: ['¿Qué es lo más probable?', '¿Y lo menos probable?'], phrases: ['[[Tiene que|orange]] + inf.…', '[[Debe de|orange]] + inf.…', '[[Se ve que|teal]]…', '[[Por lo que veo|teal]], …'], hint: 'Ordena tus deducciones de más a menos seguras.', example: 'Por lo que veo, alguien ha estado aquí hace muy poco: el café todavía está caliente. Tiene que ser mi hermana, porque es la única que tiene llave. Se ve que ha venido a buscar algo y se ha dejado la chaqueta. Es poco probable que haya sido un vecino.' },
            { q: 'Eres periodista: tienes un dato confirmado y un rumor. Dicta la noticia en tres frases. · You have one fact and one rumour: dictate the news.', followUps: ['¿Usarías el condicional de rumor en el titular?', '¿Cómo nombrarías a una fuente que no quiere dar su nombre?'], phrases: ['Según fuentes de…, el proyecto [[estaría|violet]]…', '[[Al parecer|blue]]…', '…no ha querido confirmar…'], hint: 'El dato, en indicativo; el rumor, con su fuente y en condicional o con «al parecer».', example: 'El mercado municipal cerrará por obras en marzo, según ha confirmado el ayuntamiento. Según fuentes del gremio, las obras durarían más de un año. El alcalde no ha querido confirmar esa fecha.', teacher: 'Tú le das a tu alumno un dato y un rumor sobre su ciudad; tu alumno los dicta como un locutor.' },
            { q: '¿Te parece bien que la prensa use el condicional de rumor? · Should newspapers use the conditional of rumour?', followUps: ['¿Qué ventajas tiene?', '¿Y qué peligros?', '¿Cómo lo dirías tú en una conversación?'], phrases: ['[[Está claro que|orange]]…', '[[No creo que|orange]] + subjuntivo…', '[[Se supone que|blue]] un periódico…'], hint: 'Argumenta con grados de certeza: concede algo y defiende tu postura.', example: 'Está claro que a veces es útil, porque avisa de que el dato no está confirmado. Pero no creo que deba ir en un titular: mucha gente solo lee el titular y se queda con el rumor como si fuera un hecho. Se supone que un periódico informa de lo que ha comprobado.' },
            { q: 'Eres Gabriel: llamas a la concejala Ibarra para contrastar la información (usted). · You are Gabriel: call the councillor to check the story.', followUps: ['¿Y si no quiere responder?', '¿Cómo cerrarías la llamada?'], phrases: ['Según nuestras fuentes, el ayuntamiento [[estaría|violet]]…', '¿Puede confirmarnos si…?', '[[Que nosotros sepamos|teal]], …'], hint: 'Presenta el rumor con su fuente y pregunta con cortesía; no afirmes lo que no has comprobado.', example: 'Buenos días, concejala. Soy Gabriel Ortega, de «Noticias del Valle». Según nuestras fuentes, el ayuntamiento estaría negociando la venta del Olimpia. ¿Puede confirmarnos si existe una oferta? Que nosotros sepamos, el asunto no figura en el orden del día del pleno.', teacher: 'Tú haces de concejala Ibarra: respondes con evasivas («No puedo confirmar ni desmentir…»). Tu alumno insiste con cortesía.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tú cuentas un rumor afirmándolo como un hecho y tu alumno te pregunta por la fuente y reformula tu frase con el marcador adecuado.', self: 'Ahora elige una noticia real de esta semana y cuéntala en voz alta separando hechos, deducciones y rumores. (Now retell a real story from this week, separating facts, inferences and rumours.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'La noticia', coach: 'Hechos, fuentes, probabilidades. Facts, sources, likelihoods.',
      steps: [
        { title: 'Una nota informativa · A news item', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Después revisan juntos cada frase: ¿está comprobada, deducida u oída? ¿El marcador y el modo corresponden?', self: 'Escribe la noticia y toca «Revisar mi texto». Después repasa cada frase: ¿hecho, deducción o rumor? ¿Lo marca la gramática? (Check that grammar signals each sentence’s status.)' } },
          { kind: 'write', title: 'El futuro del Olimpia · The future of the Olimpia', situation: 'Eres Gabriel (o un periodista de tu ciudad, con una noticia local). Escribes la nota para la web de «Noticias del Valle». Los lectores deben distinguir sin esfuerzo qué está confirmado, qué se dice y qué es probable. (Write the news item so that readers can tell facts, claims and likelihoods apart.)', task: [
            'Un titular solo con lo confirmado, sin condicional de rumor.',
            'Un párrafo con los hechos comprobados y su fuente, en indicativo.',
            'Al menos dos informaciones no confirmadas, atribuidas: «según…» + condicional de rumor, o «al parecer», «por lo visto».',
            'Una valoración de probabilidad con «lo más probable es que» o «es poco probable que» + subjuntivo.',
            'Un cierre con lo que aún no se sabe: «que sepamos», «no ha querido confirmar».',
          ], starters: ['La empresa que gestiona… ha comunicado que…', 'Este diario ha podido consultar…', 'Lo que no está confirmado es…', 'Según fuentes…, + condicional', 'Al parecer, …', 'Que sepamos, …', 'Lo más probable es que…'],
            words: ['según fuentes', 'estaría', 'habría', 'al parecer', 'por lo visto', 'que sepamos', 'lo más probable es que', 'es poco probable que', 'no ha querido confirmar', 'desmentir'],
            model: 'El Teatro Olimpia cerrará el 15 de enero. La empresa que gestiona el teatro ha comunicado por carta a sus trabajadores que la sala cerrará sus puertas el próximo 15 de enero. Este diario ha podido consultar el documento, firmado por el director general. Lo que no está confirmado es qué pasará después con el edificio. Según fuentes municipales, el ayuntamiento [[estaría negociando|violet]] su venta con un grupo hotelero, que [[habría ofrecido|violet]] unos tres millones de euros. [[Al parecer|blue]], el comprador quiere conservar la fachada y convertir la sala principal en un salón de congresos. La concejala de Cultura, Elena Ibarra, no ha querido confirmar ni desmentir esta información y, [[que sepamos|teal]], la venta no figura todavía en el orden del día del pleno. Los vecinos han recogido más de dos mil firmas para pedir que el teatro siga siendo un espacio cultural. [[Lo más probable es que|orange]] el asunto llegue al pleno de diciembre, aunque [[es poco probable que|orange]] haya una decisión antes de fin de año.',
            minWords: 140,
            checks: [
              { label: 'Una información atribuida a otra fuente (según…, al parecer, por lo visto…)', pattern: '(?<!\\p{L})(?:según|al\\s+parecer|por\\s+lo\\s+visto|parece\\s+ser\\s+que|se\\s+dice\\s+que|se\\s+comenta\\s+que|dicen\\s+que)(?!\\p{L})', tip: 'Atribuye lo que no has comprobado: «Según fuentes municipales, …», «Al parecer, …».' },
              { label: 'Un verbo en condicional (para el rumor: estaría, habría…)', pattern: '(?<!\\p{L})\\p{L}+(?:ría|rían)(?!\\p{L})', tip: 'Marca un dato no confirmado: «el ayuntamiento estaría negociando», «habría ofrecido».' },
              { label: 'Una valoración de probabilidad que pide subjuntivo', pattern: '(?<!\\p{L})(?:lo\\s+más\\s+probable\\s+es\\s+que|es\\s+(?:poco\\s+)?probable\\s+que|puede\\s+que|dudo\\s+que|no\\s+creo\\s+que)(?!\\p{L})', tip: 'Valora: «Lo más probable es que el asunto **llegue** al pleno».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})a\\s+lo\\s+mejor\\s+(?:\\p{L}+\\s+){0,2}?(?:esté|estén|sea|sean|tenga|tengan|haya|hayan|llegue|lleguen|cierre|vaya|vayan)(?!\\p{L})', why: '**A lo mejor** va con indicativo: «a lo mejor **cierra** en enero».' },
              { pattern: '(?:^|[.;:,]\\s*)que\\s+(?:yo\\s+|nosotros\\s+)?(?:sé|sabemos)\\s*,', why: 'La fórmula lleva subjuntivo: «que yo **sepa**», «que **sepamos**».' },
              { pattern: '(?<!\\p{L})puede\\s+que\\s+(?:\\p{L}+\\s+)?(?:está|están|es|son|tiene|tienen|hay|va|van|cierra)(?!\\p{L})', why: '**Puede que** pide subjuntivo: «puede que **cierre**», «puede que **haya**».' },
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
            { tone: 'orange', label: 'GRADO DE CERTEZA', formula: 'certeza / alta + indicativo · lo más probable es que, puede que, dudo que + subjuntivo', example: 'No cabe duda de que lo sabe. Dudo que lo confirme.', caption: 'a lo mejor + ind.; quizás, tal vez: los dos modos', en: 'how sure you are: each step of the scale has its mood' },
            { tone: 'teal', label: 'FUENTE PROPIA', formula: 'se ve que, por lo que veo + ind. · debe de / tiene que + inf. · que yo sepa', example: 'Se ve que preparan una reforma.', caption: 'una pista o tu propio conocimiento', en: 'your own inference from a clue, or the limits of what you know' },
            { tone: 'blue', label: 'FUENTE AJENA', formula: 'al parecer, por lo visto, parece ser que, dicen que, se supone que + indicativo', example: 'Al parecer, la oferta llegó en septiembre.', caption: 'transmites sin responder del dato', en: 'you pass the information on without vouching for it' },
            { tone: 'violet', label: 'CONDICIONAL DE RUMOR', formula: 'según + fuente, + estaría / habría + participio', example: 'Según fuentes municipales, la venta estaría cerrada.', caption: 'prensa; discutido por los libros de estilo', en: 'news register for unconfirmed, attributed facts; style guides often advise against it' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Antes de hablar, hazte dos preguntas: **¿cuánto lo sé?** (y elige el grado: afirmación desnuda, debe de, puede que, dudo que…) y **¿cómo lo sé?** (lo he visto, lo deduzco, me lo han contado). El modo depende del marcador, no de lo seguro que estés: «lo más probable es que» pide subjuntivo; «seguramente», indicativo.', en: 'Ask yourself two questions: how much do I know, and how do I know it? Then pick the marker. The mood depends on the marker, not on how sure you feel: “lo más probable es que” takes the subjunctive, “seguramente” the indicative.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'Es poco probable que el museo ___ los domingos por la tarde.', options: ['abriría', 'abre', 'abra'], answer: 2, why: '«Es poco probable que» pide subjuntivo.', en: 'The museum is unlikely to open on Sunday afternoons.' },
            { prompt: '___, el vuelo sale con dos horas de retraso: me lo ha dicho una pasajera en la cola.', options: ['Dudo que', 'Por lo que veo', 'Por lo visto'], answer: 2, why: 'Información oída a otra persona: fuente ajena + indicativo. «Por lo que veo» exigiría una pista a la vista; «dudo que» pediría subjuntivo.', en: 'Apparently the flight is two hours late: a passenger in the queue told me.' },
            { prompt: 'El suelo está mojado y huele a lejía: ___ que han limpiado hace poco.', options: ['parece mentira', 'dudo', 'se ve'], answer: 2, why: 'Conclusión a partir de pistas visibles, con indicativo: «se ve que han limpiado».', en: 'The floor is wet and smells of bleach: they’ve obviously just cleaned.' },
            { prompt: 'Titular: «La empresa ___ doscientos empleos, según el sindicato».', options: ['recorte', 'recortara', 'recortaría'], answer: 2, why: 'Dato atribuido y no confirmado: condicional de rumor.', en: 'Headline: “Company reportedly to cut two hundred jobs, according to the union.”' },
            { prompt: 'Parece mentira que todavía ___ gente que no recicla.', options: ['hay', 'haya', 'habría'], answer: 1, why: '«Parece mentira que» valora y pide subjuntivo.', en: 'It’s hard to believe there are still people who don’t recycle.' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Ahora, en una empresa. Now, at a company.', blocks: [
          { kind: 'lead', text: 'En una empresa de software circula el rumor de una fusión. Natalia, del departamento de comunicación, revisa el borrador del boletín interno: hay que separar mejor lo confirmado de lo que se dice. Transforma sus frases.', en: 'At a software company there are rumours of a merger. Natalia, from the communications team, is revising the internal newsletter draft so that confirmed facts and hearsay are clearly separated. Transform her sentences.' },
          { kind: 'rewrite', title: 'El boletín interno · The internal newsletter', items: [
            { prompt: 'Dicen que la empresa negocia una fusión con un competidor.', instruction: 'Estilo periodístico: empieza con «Según fuentes internas,» y usa el condicional de rumor.', accept: ['Según fuentes internas, la empresa negociaría una fusión con un competidor', 'Según fuentes internas, la empresa estaría negociando una fusión con un competidor'] },
            { prompt: 'Probablemente la decisión se anuncia en enero.', instruction: 'Empieza con «Lo más probable es que…».', accept: ['Lo más probable es que la decisión se anuncie en enero'] },
            { prompt: 'Por lo que nosotros sabemos, no habrá despidos.', instruction: 'Usa la fórmula fija con subjuntivo en primera persona del plural.', accept: ['Que sepamos, no habrá despidos', 'Que nosotros sepamos, no habrá despidos', 'No habrá despidos, que sepamos'] },
          ] },
        ] },
        { title: 'Ampliación · Supuestamente, presuntamente, dizque · Extension', mascot: '/brand/mascot/portrait.webp', coach: 'Opcional. Optional.', blocks: [
          { kind: 'lead', text: 'Para estudiantes fuertes o si queda tiempo. Tres marcadores más de fuente ajena. **Supuestamente** distancia al hablante y a menudo insinúa duda: «Supuestamente, la obra estaba terminada». **Presuntamente** y **presunto** son propios del lenguaje jurídico y periodístico: se usan para no dar por probado lo que un tribunal aún no ha decidido («el presunto responsable del fraude»). Y en el habla coloquial de muchos países americanos, como México o Colombia, **dizque** significa ‘según dicen’, a menudo con duda o ironía: «Dizque iban a arreglar la calle este mes».', en: 'For strong students or spare time. Three more reportative markers. “Supuestamente” distances the speaker and often hints at doubt. “Presuntamente / presunto” belong to legal and news language: they avoid treating as proven what no court has yet decided. And in informal speech in many Latin American countries, such as Mexico or Colombia, “dizque” means “so they say”, often with doubt or irony.' },
          { kind: 'choice', title: 'Reconocer · Recognise', items: [
            { prompt: '«El presunto autor de la estafa ha sido detenido». ¿Por qué «presunto»?', options: ['Porque la policía no está segura de haberlo detenido.', 'Porque el periodista cree que es inocente.', 'Porque todavía no hay una sentencia que lo declare culpable.'], answer: 2, why: '«Presunto» respeta la presunción de inocencia: no da por probado lo que no ha decidido un tribunal.', en: 'Why “presunto” (alleged)?' },
            { prompt: '«Dizque iban a arreglar la calle este mes». ¿Qué expresa el hablante?', options: ['Que lo ha oído y, probablemente, no se lo cree del todo.', 'Que lo deduce de una pista.', 'Que lo sabe con certeza.'], answer: 0, why: '«Dizque» es reportativo (‘según dicen’) y en este contexto añade escepticismo.', en: 'What does the speaker express?' },
            { prompt: '¿Qué frase marca más distancia del hablante con respecto al dato?', options: ['Supuestamente, la obra estaba terminada.', 'No cabe duda de que la obra estaba terminada.', 'La obra estaba terminada.'], answer: 0, why: '«Supuestamente» atribuye el dato a otros y deja ver la duda del hablante.', en: 'Which sentence puts most distance between the speaker and the claim?' },
          ] },
          { kind: 'teacher', text: 'Paso opcional: solo si queda tiempo o para estudiantes fuertes. Tu alumno busca un titular real con condicional de rumor o con «presunto» y lo reescribe en registro coloquial con «al parecer» o «dicen que».' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 174 · Probabilidad retrospectiva y condicional compuesto', text: 'Ya sabes graduar la certeza y señalar la fuente, y has visto que «habría dimitido» puede ser un rumor de prensa. En la clase 174 te centras en el **condicional compuesto** para suponer sobre el pasado anterior a otro pasado («Cuando llegamos, ya habría empezado»), para calcular («Habría unas veinte personas») y para distinguir esa conjetura de la hipótesis y del rumor.', en: 'You can now grade certainty and signal your source, and you have seen that “habría dimitido” can be a press rumour. In class 174 you focus on the conditional perfect to guess about events before another past moment, to estimate (“there must have been about twenty people”), and to tell that guess apart from hypotheses and rumours.', href: '/gramatica/probabilidad-retrospectiva-y-condicional-compuesto', label: 'Ir a la clase 174' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Qué diferencia hay entre “El ministro dimitió”, “Al parecer, el ministro dimitió” y “El ministro habría dimitido”?». Respuesta esperada: hecho afirmado; información oída en registro general; información atribuida y no confirmada en registro periodístico. Tarea: la noticia de Escribir con un rumor real de su ciudad.' },
        ] },
      ],
    },
  ],
};
