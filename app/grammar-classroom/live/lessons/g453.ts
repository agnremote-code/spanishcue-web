import type { LiveLesson } from '../types';

/**
 * Lesson 453 · B2 · Oraciones causales avanzadas: no porque + subjuntivo (course unit G153).
 * Builds on G026 (porque / para + infinitive), G115 (lesson 415: como, ya que, puesto que,
 * dado que, debido a, gracias a / por culpa de, es que; «no porque» only for recognition),
 * G117 (no… sino), G097 / G128 / G130 (perfect and imperfect subjunctive, sequence of tenses)
 * and G140 (imperative + que + subjunctive as purpose).
 * B2 content: the denied cause «no porque + subjuntivo…, sino porque + indicativo» (the action
 * is real, the reason is rejected), with present / perfect / imperfect subjunctive by frame
 * and «no por + noun / infinitive, sino por»; «no es que + subjuntivo, es que / sino que +
 * indicativo» to reject an interpretation and soften a refusal; scope of the negation:
 * «porque no + indicativo» (real negative cause), «no + verbo + porque + indicativo» (the
 * action does not happen), «…, pero no porque + subjuntivo» (it happens; the reason is
 * denied); only porque / por can be negated or focused; connectors by register and position:
 * como (only first), porque (usually after), ya que, puesto que, dado que, debido a (que),
 * a causa de, gracias a / por culpa de, colloquial que after an order (Abrígate, que hace
 * frío), por + simple or compound infinitive. Ampliación: no porque + pluperfect subjunctive,
 * en vista de que / habida cuenta de que (formal, receptive), como + subjunctive = condition
 * (receptive trap), porque sí.
 * Scene: the neighbourhood hiking club Los Alerces. Marina Robles, route coordinator for six
 * years, steps down at the end of the month; a rumour says it is because she argued with
 * Óscar Vela, the new president, about the membership fee. The real reason: her father lives
 * alone and she will spend weekends with him. Esteban Galindo (treasurer, friend) takes over;
 * Rocío and Pilar are members. Escuchar: Marina’s voice message to the club group
 * (es-CO-SalomeNeural, ustedes). Escribir: Marina’s message to all members.
 * Instructions use tú.
 */
export const lesson: LiveLesson = {
  id: 453,
  level: 'B2',
  title: 'Oraciones causales avanzadas: no porque + subjuntivo',
  subtitle: 'Desmentir una causa falsa y dar la verdadera, suavizar una negativa con «no es que» y elegir el conector causal según el registro.',
  legend: [
    { tone: 'orange', label: 'CAUSA NEGADA · no porque, no es que + subjuntivo (not because…)' },
    { tone: 'teal', label: 'CAUSA REAL · sino porque, es que, sino que + indicativo (the real reason)' },
    { tone: 'blue', label: 'CONECTORES POR REGISTRO · como, ya que, puesto que, dado que, que' },
    { tone: 'violet', label: 'POR + NOMBRE O INFINITIVO · por, debido a, gracias a, por culpa de' },
  ],
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'No porque…, sino porque…', coach: '¿Ocurre la acción? ¿Qué causa niegas? Does it happen? Which reason do you reject?',
      steps: [
        { title: 'Marina deja la coordinación · Marina steps down', blocks: [
          { kind: 'lead', text: 'Marina Robles coordina las rutas del club de senderismo Los Alerces desde hace seis años. El domingo, al final de una salida, anunció que deja el cargo a fin de mes. Desde entonces circula un rumor: «Lo deja porque se peleó con Óscar, el nuevo presidente». Marina quiere aclararlo: «Lo dejo, sí, pero **no porque me haya peleado** con nadie, **sino porque** mi padre **necesita** compañía los fines de semana». Hoy aprendes a **negar una causa falsa** y dar la verdadera, a rechazar una interpretación con «**no es que…, es que…**» y a elegir el conector causal según el registro y la posición.', en: 'Marina Robles has coordinated the routes of the Los Alerces hiking club for six years. On Sunday she announced she is stepping down at the end of the month, and a rumour is going round that she argued with Óscar, the new president. She wants to set the record straight: she is leaving, but not because of a fight; the real reason is her father. Today you learn to reject a false reason and give the true one, to rule out an interpretation with «no es que…, es que…», and to pick a causal connector that fits the register and the position in the sentence.' },
          { kind: 'guide', text: { teacher: 'Tú lees las dos frases y tu alumno dice si Marina hace la acción o no, y qué forma lleva el verbo después de «porque».', self: 'Lee las dos frases en voz alta. ¿Marina hace la acción o no? ¿Qué forma lleva el verbo después de «porque»? (Does the action happen? Which form follows «porque»?)' } },
          { kind: 'compare', title: 'Dónde está el «no» · Where the «no» goes', columns: [
            { tone: 'teal', label: 'NO HAY ACCIÓN · no + verbo + porque + indicativo', sentence: 'Marina **no** viene a la reunión [[porque está|teal]] con su padre.', idea: 'No viene. ¿Por qué? Porque está con su padre: una causa real, en indicativo.', en: 'The «no» denies the action: she is not coming, and the indicative gives the real reason.' },
            { tone: 'orange', label: 'HAY ACCIÓN · …, pero no porque + subjuntivo', sentence: 'Marina deja el cargo, pero [[no porque esté|orange]] enfadada.', idea: 'Sí lo deja. Lo que se niega es la causa: el enfado no es el motivo.', en: 'The «no» denies only the reason: she is leaving, but anger is not why. The rejected reason takes the subjunctive.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Marina deja el cargo, pero no porque ___ problemas con Óscar.', options: ['tenga', 'tendrá', 'tiene'], answer: 0, why: 'Marina sí deja el cargo; lo que rechaza es la causa: no porque + subjuntivo, tenga.', en: 'Marina is stepping down, but not because she has problems with Óscar.' },
            { prompt: '«No voy a la salida del sábado porque tengo que trabajar.» ¿Va Marina a la salida?', options: ['Sí, pero por otro motivo.', 'No: tiene que trabajar.', 'No se sabe.'], answer: 1, why: 'Con indicativo, el «no» niega la acción (no va) y «porque tengo que trabajar» da la causa real.', en: '“I’m not going on Saturday’s hike because I have to work.” Is Marina going?' },
          ] },
        ] },
        { title: 'Negar la causa falsa · Rejecting the wrong reason', mascot: '/brand/mascot/studying.webp', coach: 'Causa falsa: subjuntivo. Causa real: indicativo.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'NO PORQUE + SUBJUNTIVO, SINO PORQUE + INDICATIVO', question: '¿La acción es real, pero alguien imagina una causa equivocada?', en: 'Is the action real, but someone has the wrong idea about why? Reject that reason with «no porque» + subjunctive and give the true one with «sino porque» + indicative. The subjunctive signals that you do not assert the rejected reason.', formula: ['acción + no porque + subjuntivo (causa negada)', '+ sino porque + indicativo (causa real)', 'marco presente: no porque esté / haya estado · marco pasado: no porque estuviera', 'con nombre o infinitivo: no por miedo, sino por respeto'],
            meaning: 'La causa que niegas no es un hecho para ti: por eso va en **subjuntivo**, y sigue la correlación temporal de la clase 130: marco presente → **esté, haya pasado**; marco pasado → **estuviera**. La causa verdadera sí es un hecho: **indicativo**. Recuerda (clase 117): **sino** corrige después de una negación. Con un nombre o un infinitivo basta **por**: «no por miedo, sino por respeto».',
            examples: [
              { es: 'Lo dejo [[no porque me obliguen|orange]], [[sino porque quiero|teal]].', en: 'I’m stepping down not because anyone is making me, but because I want to.' },
              { es: 'En la asamblea me callé. No lo hice [[porque tuviera miedo|orange]], [[sino por respeto|teal]].', en: 'I kept quiet at the meeting. I didn’t do it out of fear, but out of respect: she did keep quiet; fear is the rejected reason (past frame, so tuviera).' },
              { es: 'Dejo el cargo [[no por cansancio|orange]], [[sino por mi familia|teal]].', en: 'I’m leaving the post not out of tiredness, but for my family’s sake: with nouns, «no por…, sino por…».' },
            ] },
          { kind: 'table', title: 'Una causa negada en cada marco · One rejected reason in each frame', head: ['Marco', 'Causa negada', 'Causa real'], rows: [
            ['Presente', 'Lo dejo, pero **no porque esté** cansada,', '**sino porque** mi padre me **necesita**.'],
            ['Pasado con resultado ahora', 'Lo dejo, pero **no porque haya tenido** problemas,', '**sino porque** ya **es** hora de cambiar.'],
            ['Pasado cerrado', 'Lo dejé, pero **no porque estuviera** cansada,', '**sino porque** mi padre me **necesitaba**.'],
            ['Nombre / infinitivo', 'Lo dejo, **no por** cansancio / **no por** estar cansada,', '**sino por** mi padre.'],
          ], note: 'La coma o la pausa antes de «no porque» ayuda: la acción se afirma y solo se discute la causa.' },
          { kind: 'tip', icon: '💡', title: 'Subjuntivo: la opción clara · Subjunctive: the clear choice', text: 'En la conversación a veces se oye «no porque **está** cansada, sino porque…», con indicativo. La forma recomendada, sobre todo por escrito, es el **subjuntivo**: deja claro que esa causa no se afirma y que la acción sí ocurre.', en: 'In speech you will sometimes hear the indicative after «no porque» when «sino porque» follows. The subjunctive is the recommended form, especially in writing: it makes it clear that you are not asserting that reason and that the action did happen.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Esteban sigue de tesorero, pero no porque le ___ los números, sino porque nadie más quiere hacerlo.', options: ['gustaría', 'guste', 'gustan'], answer: 1, why: 'Esteban sí sigue; se niega la causa en un marco presente: no porque + presente de subjuntivo, guste.', en: 'Esteban stays on as treasurer, not because he likes numbers, but because nobody else wants the job.' },
            { prompt: 'El año pasado Marina organizó la ruta de los lagos, no porque se lo ___ Óscar, sino porque le hacía ilusión.', options: ['pidiera', 'pidió', 'pida'], answer: 0, why: 'Causa negada en un marco pasado («organizó»): imperfecto de subjuntivo, pidiera.', en: 'Last year Marina organised the lakes route, not because Óscar asked her to, but because she was excited about it.' },
            { prompt: 'Me callé en la asamblea, no por miedo, sino ___ respeto.', options: ['porque', 'por', 'para'], answer: 1, why: 'Con un nombre (respeto), la causa real va con «por»: no por…, sino por…', en: 'I kept quiet at the meeting, not out of fear, but out of respect.' },
          ] },
        ] },
        { title: 'No es que…, es que… · It’s not that…, it’s just that…', mascot: '/brand/mascot/standing.webp', coach: 'Rechazas una interpretación. You rule out an interpretation.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'NO ES QUE + SUBJUNTIVO', question: '¿Quieres rechazar lo que el otro puede pensar de lo que dices o haces?', en: 'Do you want to rule out what the other person might think? «No es que» rejects an interpretation, so it always takes the subjunctive; then give the real explanation with «es que» (colloquial) or «sino que» (more careful). It is also a very common way to soften a refusal.', formula: ['no es que + subjuntivo, es que + indicativo', 'no es que + subjuntivo, sino que + indicativo', 'en pasado: no es que no quisiera, es que no podía'],
            meaning: '«No es que» no niega un hecho concreto: rechaza la **explicación** que el otro imagina, y por eso lleva siempre **subjuntivo**. Después das la explicación real con **es que** (coloquial; la excusa de la clase 115) o con **sino que** (más cuidado). Sirve mucho para suavizar una negativa: «**No es que no** me **guste** la idea, **es que** no **tengo** tiempo».',
            examples: [
              { es: '[[No es que no quiera|orange]] seguir, [[es que no puedo|teal]].', en: 'It’s not that I don’t want to carry on; I just can’t.' },
              { es: '[[No es que esté enfadada|orange]] con Óscar, [[sino que|teal]] necesito tiempo para mi padre.', en: 'It’s not that I’m angry with Óscar; the thing is, I need time for my father («sino que» is a little more careful than «es que»).' },
              { es: 'Pilar, [[no es que no te creyera|orange]], [[es que me extrañó|teal]] la historia.', en: 'Pilar, it’s not that I didn’t believe you, it’s just that the story struck me as odd (past frame: creyera).' },
            ] },
          { kind: 'compare', title: '«Es que» y «no es que» · Two different tools', columns: [
            { tone: 'teal', label: 'ES QUE + INDICATIVO · la explicación', sentence: 'No puedo ir el sábado. [[Es que tengo|teal]] que trabajar.', idea: 'Das la razón de algo en tono coloquial, como excusa.', en: 'You give a reason or an excuse, in a conversational tone.' },
            { tone: 'orange', label: 'NO ES QUE + SUBJUNTIVO · la idea que rechazas', sentence: '[[No es que no tenga|orange]] ganas; es que trabajo el sábado.', idea: 'Primero rechazas lo que el otro puede pensar; después explicas.', en: 'First you rule out what the other person might think, then you explain.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'No es que la ruta ___ difícil, es que es muy larga.', options: ['será', 'es', 'sea'], answer: 2, why: '«No es que» rechaza una interpretación: siempre subjuntivo, sea.', en: 'It’s not that the route is difficult; it’s just very long.' },
            { prompt: '—Marina, ¿estás enfadada? —No, no es que ___ enfadada, es que estoy cansada.', options: ['estuviera', 'estoy', 'esté'], answer: 2, why: 'Marco presente: no es que + presente de subjuntivo, esté.', en: '“Marina, are you angry?” “No, it’s not that I’m angry; I’m just tired.”' },
            { prompt: 'No es que no ___ ir a la cena del sábado pasado, es que tenía otro compromiso.', options: ['quisiera', 'quiero', 'quise'], answer: 0, why: 'Marco pasado («tenía»): no es que + imperfecto de subjuntivo, quisiera.', en: 'It’s not that I didn’t want to go to last Saturday’s dinner; I already had plans.' },
          ] },
        ] },
        { title: 'El alcance del «no» · What the «no» denies', mascot: '/brand/mascot/speaking.webp', coach: 'Mismas palabras, otro sentido. Same words, different meaning.', blocks: [
          { kind: 'table', title: 'Tres frases, tres sentidos · Three sentences, three meanings', head: ['Frase', '¿Ocurre la acción?', '¿Qué dice de la causa?'], rows: [
            ['Marina deja el club **porque no tiene** tiempo.', 'Sí: lo deja.', 'Causa real, y negativa: no tiene tiempo.'],
            ['Marina **no** deja el club **porque tiene** amigos allí.', 'No: se queda.', 'Causa real de quedarse.'],
            ['Marina deja el club, pero **no porque tenga** problemas.', 'Sí: lo deja.', 'Causa negada: los problemas no son el motivo.'],
          ], note: 'Con «no» delante del verbo y «porque» + indicativo, lo normal es entender que la acción **no** ocurre. Para negar solo la causa, usa el subjuntivo y, mejor aún, sepáralo: «…, pero no porque…».' },
          { kind: 'tip', icon: '🔑', title: 'Solo «porque» se puede negar · Only porque can be denied', text: 'Solo **porque** (y **por**) admite la negación y el foco: **no porque**, **solo porque**, **precisamente porque**, **sobre todo porque**. Con «como», «ya que» o «puesto que» no se puede: *«Lo hago no ya que me obliguen» es imposible.', en: 'Only porque (and por) can be negated or put in focus: not because, only because, precisely because, above all because. Como, ya que and puesto que present a reason as a given, so they cannot be denied or highlighted this way.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Óscar no cambió la cuota porque los socios votaron en contra.» ¿Cambió la cuota?', options: ['Sí, pero por otro motivo.', 'No: los socios votaron en contra.', 'Sí, porque votaron en contra.'], answer: 1, why: '«No» delante del verbo + porque + indicativo: la acción no ocurrió y se da su causa real.', en: '“Óscar didn’t change the fee because the members voted against it.” Did he change it?' },
            { prompt: '«Óscar cambió la cuota, pero no porque los socios se quejaran.» ¿Cambió la cuota?', options: ['No se sabe.', 'Sí, pero las quejas no fueron el motivo.', 'No: los socios se quejaron.'], answer: 1, why: '«…, pero no porque + subjuntivo»: la acción ocurrió y se rechaza esa causa.', en: '“Óscar changed the fee, but not because the members complained.” Did he change it?' },
            { prompt: 'Marina deja la coordinación ___ tiene tiempo libre los fines de semana.', options: ['no es que', 'no porque', 'porque no'], answer: 2, why: 'Es una causa real y negativa (no tiene tiempo): porque no + indicativo.', en: 'Marina is giving up the coordination because she has no free time at weekends.' },
          ] },
        ] },
        { title: 'Conectores, registro y posición · Register and position', mascot: '/brand/mascot/portrait.webp', coach: '¿Delante o detrás? ¿Hablas o escribes? Before or after? Speaking or writing?', blocks: [
          { kind: 'table', title: 'Los conectores causales · Causal connectors', head: ['Conector', 'Posición', 'Registro', 'Ejemplo'], rows: [
            ['**como**', 'solo delante', 'neutro', '**Como** llovía, suspendimos la salida.'],
            ['**porque**', 'normalmente detrás', 'neutro', 'Suspendimos la salida **porque** llovía.'],
            ['**ya que · puesto que**', 'delante o detrás (con coma)', 'cuidado', 'Suspendimos la salida, **puesto que** llovía.'],
            ['**dado que**', 'delante o detrás', 'formal, escrito', '**Dado que** se prevén tormentas, se suspende la salida.'],
            ['**debido a · a causa de** + nombre', 'delante o detrás', 'formal', 'Se suspende la salida **debido al** mal tiempo.'],
            ['**debido a que** + verbo', 'delante o detrás', 'formal', '**Debido a que** el refugio está cerrado, cambiamos la ruta.'],
            ['**gracias a · por culpa de**', 'delante o detrás', 'valoran: + / −', 'Llegamos **gracias al** GPS. Nos perdimos **por culpa del** mapa.'],
            ['**por** + nombre / infinitivo', 'normalmente detrás', 'neutro', 'Le llamaron la atención **por llegar** tarde.'],
            ['**que** + indicativo', 'detrás de una orden o exclamación', 'coloquial, oral', 'Abrígate, **que** hace frío.'],
          ], note: '«Como» delante y «porque» detrás son el patrón básico. «Porque» abre la frase sobre todo cuando respondes a «¿por qué?».' },
          { kind: 'concept', tone: 'blue', label: 'QUE COLOQUIAL · POR + INFINITIVO', question: '¿Das una orden o un consejo y añades la razón, en una conversación?', en: 'Adding the reason for an order or a piece of advice in conversation? Use «que» + indicative after it. With the subjunctive, «que» would express purpose instead (class 140). And when the subject is the same, por + infinitive gives the cause; the compound infinitive stresses that the cause came first.', formula: ['orden / exclamación + que + indicativo = porque (oral)', 'que + subjuntivo tras una orden = para que (clase 140)', 'por + infinitivo simple o compuesto: por llegar / por haber llegado'],
            meaning: 'En la conversación, tras un imperativo o una exclamación, **que + indicativo** da la causa: «Date prisa, **que** cierran». Va siempre **detrás**. Con subjuntivo cambia el sentido: «Ven, **que te vea**» es finalidad. **Por + infinitivo** da la causa con el mismo sujeto: «Me multaron **por aparcar** mal»; el **infinitivo compuesto** subraya que la causa es anterior: «Gracias **por haber venido**».',
            examples: [
              { es: 'Llévate el impermeable, [[que va a llover|blue]].', en: 'Take your raincoat, it’s going to rain: a reason added to advice, typical of everyday speech.' },
              { es: '¡Qué cansada estoy, [[que llevo|blue]] seis horas caminando!', en: 'I’m so tired, I’ve been walking for six hours! «Que» can also explain an exclamation.' },
              { es: 'A Esteban lo felicitaron [[por haber encontrado|violet]] el atajo.', en: 'They congratulated Esteban for having found the shortcut: same subject, cause before the result.' },
            ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '___ el refugio estaba cerrado, dormimos en el pueblo.', options: ['Porque', 'Como', 'Que'], answer: 1, why: 'Causa delante, en una frase neutra: «Como». «Porque» al principio suena a respuesta a «¿por qué?»; el «que» causal nunca abre la frase.', en: 'As the mountain hut was closed, we slept in the village.' },
            { prompt: 'Comunicado del club: «___ las previsiones de tormenta, se suspende la salida del domingo».', options: ['Como', 'Debido a', 'Debido a que'], answer: 1, why: 'Registro formal y un nombre (las previsiones): «debido a». «Debido a que» necesita un verbo conjugado.', en: 'Club notice: owing to the storm forecast, Sunday’s hike is cancelled.' },
            { prompt: 'Lleva agua de sobra, ___ arriba no hay fuentes.', options: ['como', 'sino', 'que'], answer: 2, why: 'Razón de un consejo en la lengua hablada: que + indicativo, detrás. «Como» causal no va detrás.', en: 'Take plenty of water, there are no fountains up there.' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: '¿Qué niegas? ¿Dónde va el conector?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la frase con el error y tu alumno explica qué falla: ¿se niega la acción o la causa? ¿qué conector va en esa posición? Después aparece la corrección.', self: 'Lee cada frase y piensa: ¿se niega la acción o la causa? ¿qué conector va en esa posición? Toca para ver la corrección. (Is the action or the reason denied? Which connector fits that position?)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'No es que no quiero ir, es que estoy cansada.', right: 'No es que no quiera ir, es que estoy cansada.', why: '«No es que» rechaza una interpretación: siempre subjuntivo. La explicación real («es que…») va en indicativo.' },
            { wrong: 'Lo dejo no porque esté enfadada, pero porque mi padre me necesita.', right: 'Lo dejo no porque esté enfadada, sino porque mi padre me necesita.', why: 'Después de una negación, la causa correcta se introduce con «sino» (clase 117), no con «pero».' },
            { wrong: 'Suspendimos la salida como llovía.', right: 'Como llovía, suspendimos la salida. / Suspendimos la salida porque llovía.', why: '«Como» causal solo va delante. Detrás, usa «porque», «ya que» o «puesto que».' },
            { wrong: 'Lo hago no ya que me obliguen, sino ya que quiero.', right: 'Lo hago no porque me obliguen, sino porque quiero.', why: 'Solo «porque» se puede negar y corregir con «sino». «Ya que» presenta una causa ya sabida.' },
            { wrong: 'Abrígate, que haga frío.', right: 'Abrígate, que hace frío.', why: 'El «que» que da la causa lleva indicativo. Con subjuntivo, «que» tras una orden expresa finalidad.' },
            { wrong: 'Debido a el refugio estaba cerrado, cambiamos la ruta.', right: 'Debido a que el refugio estaba cerrado, cambiamos la ruta.', why: '«Debido a» va con un nombre (debido al cierre); con un verbo conjugado, «debido a que».' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Pilar se apuntó a la ruta larga, no porque ___ en forma, sino por acompañar a su hermana.', options: ['estuviera', 'esté', 'estaba'], answer: 0, why: 'Causa negada en un marco pasado («se apuntó»): imperfecto de subjuntivo, estuviera.', en: 'Pilar signed up for the long route, not because she was fit, but to keep her sister company.' },
            { prompt: '___ ya conocía el camino, Esteban fue delante.', options: ['Sino', 'Como', 'Porque'], answer: 1, why: 'Causa delante de la consecuencia: «Como» + indicativo.', en: 'As he already knew the path, Esteban led the way.' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno cuenta una decisión suya que la gente interpretó mal, con una frase con «no porque…, sino porque…» y otra con «no es que…, es que…».' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'Lo que dicen y lo que pasó', coach: 'Toca las expresiones marcadas. Tap the marked expressions.',
      steps: [
        { title: 'Lunes, en el local del club · Monday at the clubhouse', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Esteban y tu alumno es Marina. Después tu alumno toca cada expresión marcada y explica: ¿causa negada o real? ¿qué registro tiene el conector?', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada: ¿causa negada o causa real? ¿qué registro tiene el conector? (Rejected or real reason? Which register?)' } },
          { kind: 'explore', title: 'Rumores en el club', setting: 'Lunes por la tarde en el local del club Los Alerces. Esteban, el tesorero y amigo de Marina, ha oído el rumor y quiere hablar con ella. Se tratan de tú. (Monday evening at the clubhouse. Esteban has heard the rumour and wants to talk to Marina.)', lines: [
            { who: 'Esteban', text: 'Marina, ¿tienes un momento? Me han contado una cosa y no termino de creérmela.', en: 'Marina, have you got a minute? Someone told me something and I can’t quite believe it.' },
            { who: 'Marina', text: '¿Lo de Óscar? Me lo imagino. Pilar va diciendo que dejo la coordinación porque me peleé con él en la asamblea.', en: 'The Óscar thing? I can imagine. Pilar is telling everyone I’m quitting as coordinator because I had a row with him at the meeting.' },
            { who: 'Esteban', text: '¿Y es verdad? Aquel día te vi muy seria.', en: 'And is it true? You looked very serious that day.' },
            { who: 'Marina', text: 'Mira, en lo de la cuota no pienso como él, no te voy a mentir. Pero no me peleé con nadie. Me callé, sí, pero [[no porque tuviera miedo|orange]], [[sino por respeto|teal]].', en: 'Look, I don’t agree with him about the fee, I won’t lie to you. But I didn’t argue with anyone. I kept quiet, yes, but not out of fear; out of respect.' },
            { who: 'Esteban', text: 'Entonces, ¿por qué lo dejas? ¿Estás cansada del club?', en: 'So why are you stepping down? Are you tired of the club?' },
            { who: 'Marina', text: '[[No es que esté cansada|orange]], al contrario. [[Es que no llego|teal]] a todo. [[Como mi padre vive solo|blue]] desde marzo, a partir de noviembre voy a pasar los fines de semana con él.', en: 'It’s not that I’m tired of it, quite the opposite. I just can’t do everything. As my father has been living alone since March, from November I’m going to spend weekends with him.' },
            { who: 'Esteban', text: 'Vaya, no sabía nada. ¿Y por qué no lo contaste el domingo?', en: 'Oh, I had no idea. And why didn’t you say so on Sunday?' },
            { who: 'Marina', text: 'Porque no quería convertir la salida en un drama. Además, [[puesto que|blue]] me eligió la asamblea, lo justo es explicárselo a todos a la vez, por escrito.', en: 'Because I didn’t want to turn the hike into a drama. Besides, since it was the members’ meeting that elected me, the fair thing is to explain it to everyone at once, in writing.' },
            { who: 'Esteban', text: 'Me parece bien. Oye, y lo de la ruta de los lagos… Dicen que la cancelaste [[por no haber reservado|violet]] el refugio.', en: 'Sounds right. Oh, and the lakes route… People say you cancelled it because you hadn’t booked the mountain hut.' },
            { who: 'Marina', text: '¡Qué va! La cancelé [[debido a|violet]] las tormentas; el refugio estaba reservado desde enero. Y si la del domingo salió bien, fue [[gracias a|violet]] ti, que trajiste el GPS.', en: 'Not at all! I cancelled it because of the storms; the hut had been booked since January. And if Sunday’s hike went well, it was thanks to you and your GPS.' },
            { who: 'Esteban', text: 'Bueno, bueno… Pues escribe ese mensaje pronto, [[que la gente ya está hablando|blue]].', en: 'All right, all right… Then write that message soon, because people are already talking.' },
            { who: 'Marina', text: 'Esta noche lo escribo. Dejo la coordinación, pero [[no porque no me guste|orange]] el club, [[sino porque|teal]] ahora mi padre es lo primero.', en: 'I’ll write it tonight. I’m giving up the coordination, but not because I don’t like the club; it’s because my father comes first now.' },
          ], notes: {
            'no porque tuviera miedo': 'Marina sí se calló; lo que niega es la causa. Marco pasado («me callé») → imperfecto de subjuntivo.',
            'sino por respeto': 'La causa real, con un nombre: sino por + nombre.',
            'No es que esté cansada': 'Rechaza la interpretación de Esteban («¿estás cansada?»): no es que + presente de subjuntivo.',
            'Es que no llego': 'La explicación real, en indicativo y en tono coloquial. «No llegar a todo» = no tener tiempo para todo.',
            'Como mi padre vive solo': '«Como» causal va delante de la consecuencia y lleva indicativo. Registro neutro.',
            'puesto que': 'Causa conocida, en un registro algo más cuidado; aquí va delante.',
            'por no haber reservado': 'Por + infinitivo compuesto: la causa (supuesta) es anterior a la cancelación. Mismo sujeto: tú.',
            'debido a': 'Debido a + nombre (las tormentas): conector más formal que «por».',
            'gracias a': 'Causa con un resultado positivo. Para un resultado negativo se diría «por culpa de».',
            'que la gente ya está hablando': '«Que» coloquial tras una orden («escribe»): da la razón, con indicativo. Equivale a «porque».',
            'no porque no me guste': 'Causa negada que además es negativa: «no porque no» + subjuntivo. La acción (dejar la coordinación) sí ocurre.',
            'sino porque': 'Corrige la causa negada y da la verdadera, en indicativo: «mi padre es lo primero».',
          } },
        ] },
        { title: '¿Qué entendiste? · What did you understand?', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'choice', items: [
            { prompt: '¿Por qué se calló Marina en la asamblea?', options: ['Por respeto.', 'Porque estaba de acuerdo con la cuota.', 'Por miedo a Óscar.'], answer: 0, why: '«Me callé, sí, pero no porque tuviera miedo, sino por respeto».', en: 'Why did Marina keep quiet at the meeting?' },
            { prompt: '¿Por qué deja Marina la coordinación?', options: ['Porque está cansada del club.', 'Porque se peleó con Óscar.', 'Porque va a pasar los fines de semana con su padre.'], answer: 2, why: '«Como mi padre vive solo desde marzo, voy a pasar los fines de semana con él».', en: 'Why is Marina stepping down as coordinator?' },
            { prompt: '¿Por qué se canceló la ruta de los lagos?', options: ['Porque Marina estaba enferma.', 'Por las tormentas.', 'Porque no reservaron el refugio.'], answer: 1, why: '«La cancelé debido a las tormentas; el refugio estaba reservado desde enero».', en: 'Why was the lakes route cancelled?' },
          ] },
        ] },
        { title: '¿Rumor o verdad? · Rumour or truth?', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'classify', title: 'Clasifica las causas · Sort the reasons', categories: [
            { id: 'rumor', label: 'CAUSA QUE MARINA NIEGA · no porque…', tone: 'orange' },
            { id: 'verdad', label: 'CAUSA REAL · sino porque…', tone: 'teal' },
          ], items: [
            { text: 'Se peleó con Óscar en la asamblea.', answer: 'rumor', why: '«No me peleé con nadie».' },
            { text: 'Su padre vive solo desde marzo.', answer: 'verdad', why: 'Es el motivo real de su decisión.' },
            { text: 'Está cansada del club.', answer: 'rumor', why: '«No es que esté cansada, al contrario».' },
            { text: 'Se calló por respeto.', answer: 'verdad', why: '«…sino por respeto».' },
            { text: 'Canceló la ruta por no haber reservado el refugio.', answer: 'rumor', why: 'El refugio estaba reservado desde enero.' },
            { text: 'Canceló la ruta por las tormentas.', answer: 'verdad', why: '«La cancelé debido a las tormentas».' },
          ] },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: '¿Acción o causa? ¿Hecho o idea rechazada? Action or reason? Fact or rejected idea?',
      steps: [
        { title: 'Causas en el club · Reasons at the club', blocks: [
          { kind: 'choice', items: [
            { context: 'Marina, en un mensaje a Esteban. (Marina, texting Esteban.)', prompt: 'Sigo en el grupo de WhatsApp, pero no porque ___ seguir organizando nada.', options: ['quiero', 'querría', 'quiera'], answer: 2, why: 'Sigue en el grupo; rechaza esa causa en un marco presente: no porque + presente de subjuntivo.', en: 'I’m staying in the WhatsApp group, but not because I want to keep organising things.' },
            { context: 'Óscar, en la asamblea. (Óscar, at the members’ meeting.)', prompt: 'Proponemos subir la cuota no porque ___ ganar dinero, sino porque el seguro ha subido.', options: ['queremos', 'queramos', 'quisimos'], answer: 1, why: 'Causa negada en un marco presente: queramos. La causa real va en indicativo: ha subido.', en: 'We are proposing a higher fee not because we want to make money, but because the insurance has gone up.' },
            { context: 'Pilar se disculpa con Marina. (Pilar apologises to Marina.)', prompt: 'Cuando lo conté, no es que ___ mala intención; es que me lo contaron así.', options: ['tuviera', 'tenía', 'tendría'], answer: 0, why: '«No es que» siempre con subjuntivo; marco pasado («cuando lo conté») → tuviera.', en: 'When I told people, it’s not that I meant any harm; that’s just how it was told to me.' },
            { context: 'Esteban organiza la próxima salida. (Esteban plans the next hike.)', prompt: '___ el autobús sale a las siete, quedamos a las seis y media en la plaza.', options: ['Porque', 'Como', 'Que'], answer: 1, why: 'La causa va delante: «Como». Ni «porque» (neutro, detrás) ni el «que» coloquial abren la frase.', en: 'As the bus leaves at seven, we’re meeting in the square at half past six.' },
            { context: 'Comunicado de la junta. (Notice from the board.)', prompt: 'La salida al pico Mirador se aplaza ___ el mal estado del sendero.', options: ['debido a que', 'como', 'debido a'], answer: 2, why: 'Texto formal y un nombre (el mal estado): «debido a».', en: 'The hike up Mirador peak is postponed owing to the poor condition of the trail.' },
          ] },
        ] },
        { title: '¿Pasó o no pasó? · Did it happen?', blocks: [
          { kind: 'classify', title: 'Mira el «no» y el modo · Look at the «no» and the mood', categories: [
            { id: 'si', label: 'LA ACCIÓN OCURRE · se rechaza una causa', tone: 'orange' },
            { id: 'no', label: 'LA ACCIÓN NO OCURRE · se da la causa', tone: 'teal' },
          ], items: [
            { text: 'Pilar no vino a la salida porque estaba enferma.', answer: 'no', why: '«No» + verbo + porque + indicativo: no vino, y esa es la causa real.' },
            { text: 'Óscar vino a la salida, pero no porque le gustara caminar.', answer: 'si', why: 'Vino; se rechaza una causa, con subjuntivo (gustara).' },
            { text: 'Marina no contestó porque no había visto el mensaje.', answer: 'no', why: 'No contestó: la causa real va en indicativo.' },
            { text: 'Esteban aceptó el cargo, no porque tuviera tiempo, sino porque nadie más quería.', answer: 'si', why: 'Aceptó; «no porque tuviera» es la causa rechazada.' },
            { text: 'Rocío se apuntó a la ruta larga, y no precisamente porque estuviera en forma.', answer: 'si', why: 'Se apuntó; «no precisamente porque» rechaza esa causa con ironía.' },
            { text: 'El club no subió la cuota porque los socios votaron en contra.', answer: 'no', why: 'No la subió: indicativo, causa real.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'fix', items: [
            { sentence: 'No es que no me guste la montaña, es que hoy me duele la rodilla.', ok: true, why: 'Correcta: «no es que» + subjuntivo (guste) y la explicación real en indicativo (duele).' },
            { sentence: 'Marina deja el cargo no porque esté enfadada, pero porque su padre la necesita.', ok: false, options: ['Marina deja el cargo no porque esté enfadada, sino porque su padre la necesita.', 'Marina deja el cargo no porque está enfadada, pero porque su padre la necesita.', 'Marina deja el cargo no porque esté enfadada, sino que su padre la necesite.'], answer: 0, why: 'Tras la causa negada, la verdadera se introduce con «sino porque» + indicativo, no con «pero».' },
            { sentence: 'Como llegamos tarde al refugio, ya no quedaban camas.', ok: true, why: 'Correcta: «como» causal delante, con indicativo.' },
            { sentence: 'Lo hicimos no ya que nos lo pidieran, sino porque nos parecía justo.', ok: false, options: ['Lo hicimos no porque nos lo pidieran, sino porque nos parecía justo.', 'Lo hicimos no ya que nos lo pidieron, sino porque nos parecía justo.', 'Lo hicimos no como nos lo pidieran, sino porque nos parecía justo.'], answer: 0, why: 'Solo «porque» se puede negar: no porque + subjuntivo.' },
            { sentence: 'Llévate agua, que haga mucho calor arriba.', ok: false, options: ['Llévate agua, que hace mucho calor arriba.', 'Llévate agua, que hacía mucho calor arriba.', 'Llévate agua, como hace mucho calor arriba.'], answer: 0, why: 'El «que» causal tras una orden lleva indicativo y habla del presente: hace. «Como» no va detrás.' },
            { sentence: 'No es que el sendero estaba mal, es que llovía demasiado.', ok: false, options: ['No es que el sendero estaría mal, es que llovía demasiado.', 'No es que el sendero estuviera mal, es que llovía demasiado.', 'No es que el sendero está mal, es que llovía demasiado.'], answer: 1, why: '«No es que» + subjuntivo; marco pasado → estuviera.' },
          ] },
        ] },
        { title: 'Mensajes con Rocío · Messages with Rocío', blocks: [
          { kind: 'chat-fill', title: 'Chat de Rocío y Marina · Rocío and Marina’s chat', lines: [
            { who: 'Rocío', text: 'Marina, me acabo de enterar. ¿Es verdad que dejas la coordinación?' },
            { who: 'Marina', text: 'Sí, a fin de mes. Pero no porque ___ problemas con nadie, de verdad.', options: ['tengo', 'tenga', 'tendría'], answer: 1, why: 'Ella sí deja el cargo y rechaza esa causa: no porque + presente de subjuntivo.' },
            { who: 'Rocío', text: '¡Ya lo sé! No es que me ___ el rumor, es que quería oírlo de ti.', options: ['creyera', 'creí', 'creería'], answer: 0, why: '«No es que» + subjuntivo; marco pasado («quería») → creyera.' },
            { who: 'Marina', text: 'Te entiendo. ___ mi padre vive solo, voy a pasar los fines de semana con él.', options: ['Como', 'Porque', 'Que'], answer: 0, why: 'Causa delante de la consecuencia: «Como».' },
            { who: 'Rocío', text: 'Claro. ¿Y la ruta del sábado? ¿Vienes?' },
            { who: 'Marina', text: 'No, esta vez no puedo, ___ la rodilla: me sigue doliendo.', options: ['por culpa de', 'debido que', 'gracias a'], answer: 0, why: 'Causa de algo negativo, en tono coloquial: «por culpa de». «Gracias a» es para resultados positivos.' },
            { who: 'Rocío', text: 'Uf. Bueno, cuídate. Y escríbenos ese mensaje pronto, ___ aquí todo el mundo pregunta.', options: ['como', 'que', 'sino'], answer: 1, why: 'Razón de una petición en la lengua hablada: «que» + indicativo, detrás.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['No', 'es', 'que', 'no', 'quiera,', 'es', 'que', 'no', 'puedo'], accept: ['No es que no quiera, es que no puedo'], en: 'It’s not that I don’t want to; I just can’t.' },
            { tiles: ['Me', 'callé,', 'pero', 'no', 'porque', 'tuviera', 'miedo'], accept: ['Me callé, pero no porque tuviera miedo'], en: 'I kept quiet, but not because I was afraid.' },
            { tiles: ['Abrígate,', 'que', 'arriba', 'hace', 'frío'], accept: ['Abrígate, que arriba hace frío', 'Abrígate, que hace frío arriba'], en: 'Wrap up warm, it’s cold up there.' },
          ] },
        ] },
        { title: 'Transforma · Transform', blocks: [
          { kind: 'rewrite', title: 'Niega la causa o cambia el conector · Deny the reason or change the connector', items: [
            { prompt: 'Marina deja el cargo. ¿Está enfadada con Óscar? No. ¿Su padre la necesita? Sí.', instruction: 'Une las ideas con «no porque…, sino porque…». Empieza: «Marina deja el cargo…».', accept: ['Marina deja el cargo no porque esté enfadada con Óscar sino porque su padre la necesita', 'Marina deja el cargo pero no porque esté enfadada con Óscar sino porque su padre la necesita', 'Marina deja el cargo y no porque esté enfadada con Óscar sino porque su padre la necesita'] },
            { prompt: 'Marina: «Pilar piensa que no quiero seguir. No es eso: no puedo».', instruction: 'Reformula con «No es que…, es que…» (o «sino que»).', accept: ['No es que no quiera seguir es que no puedo', 'No es que no quiera seguir sino que no puedo'] },
            { prompt: 'Suspendimos la salida porque el refugio estaba cerrado.', instruction: 'Pon la causa delante con «como».', accept: ['Como el refugio estaba cerrado suspendimos la salida'] },
            { prompt: 'Óscar, el año pasado: «Acepto la presidencia, pero no porque me guste mandar».', instruction: 'Cuéntalo en pasado. Empieza: «Óscar aceptó la presidencia…».', accept: ['Óscar aceptó la presidencia pero no porque le gustara mandar', 'Óscar aceptó la presidencia pero no porque le gustase mandar', 'Óscar aceptó la presidencia no porque le gustara mandar', 'Óscar aceptó la presidencia no porque le gustase mandar'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno explica una costumbre suya que otros interpretan mal: qué hace, por qué no lo hace («no porque…») y por qué sí lo hace («sino porque…»).' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Un audio de Marina', coach: 'Primero la idea, después los detalles. Gist first, then details.',
      steps: [
        { title: 'Para todo el club · For the whole club', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general. Segunda escucha: tu alumno anota cada causa que Marina niega y cada causa real. Después, las preguntas.', self: 'Escucha una vez para la idea general y otra para los detalles. Anota cada causa que Marina niega y cada causa real. (Note each rejected reason and each real one.)' } },
          { kind: 'listen', title: 'Un audio de Marina', channel: 'NOTA DE VOZ · GRUPO DEL CLUB LOS ALERCES', src: '/audio/grammar-live/453.mp3',
            before: 'Es lunes por la noche. Marina graba un audio para el grupo del club. ¿Qué crees que va a aclarar? (Marina records a voice message for the club group. What do you think she will clear up?)',
            gist: { prompt: '¿Para qué manda Marina el audio?', options: ['Para proponer una nueva ruta.', 'Para explicar por qué deja la coordinación y desmentir los rumores.', 'Para quejarse de la nueva cuota.'], answer: 1, why: 'Lo dice al principio: prefiere que lo sepan por ella y no por los rumores.', en: 'Why does Marina send the voice message?' },
            details: [
              { prompt: '¿Por qué se calló en la asamblea?', options: ['Porque estaba de acuerdo con Óscar.', 'Porque tenía miedo.', 'Porque no era el momento.'], answer: 2, why: '«Me callé, pero no porque tuviera miedo, sino porque no era el momento».', en: 'Why did she keep quiet at the meeting?' },
              { prompt: '¿Le gusta organizar las salidas?', options: ['Ya no.', 'Solo las rutas cortas.', 'Sí, le encanta.'], answer: 2, why: '«No es que no me guste organizar las salidas; al contrario, me encanta».', en: 'Does she enjoy organising the hikes?' },
              { prompt: '¿Por qué se queda Esteban con la coordinación?', options: ['Porque es el que mejor conoce los caminos.', 'Porque nadie más quería.', 'Porque se lo pidió Óscar.'], answer: 0, why: '«No porque nadie más quisiera, sino porque es el que mejor conoce los caminos».', en: 'Why is Esteban taking over as coordinator?' },
              { prompt: '¿Qué recomienda Marina para el sábado?', options: ['Salir más temprano.', 'Llevar el GPS.', 'Llevar ropa de abrigo.'], answer: 2, why: '«Abríguense el sábado, que va a hacer frío».', en: 'What does Marina recommend for Saturday?' },
            ],
            transcript: 'Hola a todos, soy Marina. Les mando este audio [[porque|blue]] prefiero que lo sepan por mí y no por los rumores. Sí, dejo la coordinación de rutas a fin de mes. Pero no la dejo [[porque me haya peleado|orange]] con Óscar, ni con nadie. En la asamblea me callé, es verdad, pero [[no porque tuviera miedo|orange]], [[sino porque|teal]] no era el momento. [[No es que no me guste|orange]] organizar las salidas; al contrario, me encanta. [[Es que|teal]] mi padre vive solo desde marzo y, [[como|blue]] está en otra ciudad, quiero pasar los fines de semana con él. Y otra cosa: no cancelé la ruta de los lagos [[por no haber reservado|violet]] el refugio, sino por las tormentas. Esteban se queda con la coordinación, y [[no porque nadie más quisiera|orange]], ¿eh?, sino porque es el que mejor conoce los caminos. [[Gracias a|violet]] ustedes, estos seis años han sido increíbles. Y no me despido: cuando pueda, salgo con ustedes. Abríguense el sábado, [[que|blue]] va a hacer frío. Un abrazo.',
            reply: { teacher: 'Tú eres Marina. Tu alumno es Esteban o Rocío y responde con otro audio: reacciona, rechaza alguna interpretación con «no es que…» y cuenta por qué él o ella sigue en el club («no porque…, sino porque…»).', self: 'Responde como Esteban o Rocío, en voz alta: reacciona, rechaza alguna interpretación con «no es que…» y di por qué sigues en el club («no porque…, sino porque…»). (Reply as a club member.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Motivos reales y motivos supuestos', coach: '¿Qué piensa la gente? ¿Cuál es la razón de verdad? What do people think? What is the real reason?',
      steps: [
        { title: 'Aclara tus motivos · Set the record straight', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas y tu alumno habla de experiencias reales. Si aparece «no porque» o «no es que» con indicativo, tú repites la frase con subjuntivo y sigues con la repregunta.', self: 'Lee cada pregunta y responde en voz alta con ejemplos reales. Antes de hablar, piensa: ¿qué causa niego? ¿cuál es la real? (Answer aloud with real examples.)' } },
          { kind: 'talk', cards: [
            { q: '¿Alguna vez alguien se inventó la razón de algo que hiciste? ¿Cómo lo aclaraste? · Has anyone ever made up the reason for something you did?', followUps: ['¿Te molestó el malentendido?', '¿Qué dijo la otra persona cuando supo la verdad?'], phrases: ['Lo hice, sí, pero [[no porque|orange]]…', '…, [[sino porque|teal]]…', '[[No es que|orange]]…; [[es que|teal]]…'], hint: 'Pasado cerrado: no porque + imperfecto de subjuntivo; la causa real, en indicativo.', example: 'Cuando cambié de trabajo, mis compañeros pensaron que me iba por el sueldo. Me fui, sí, pero no porque me pagaran poco, sino porque quería trabajar más cerca de casa.', next: '¿Y tú? ¿Alguna vez pensaste algo equivocado de otra persona?' },
            { q: 'Un amigo te invita a algo que no puedes o no te apetece hacer. ¿Cómo le dices que no sin ofenderlo? · How do you turn down an invitation without hurting feelings?', followUps: ['¿Dices siempre la verdad en estos casos?', '¿Qué excusa te parece poco creíble?'], phrases: ['[[No es que no quiera|orange]], [[es que|teal]]…', '[[Como|blue]] este mes tengo…, …', 'Otro día, ¿eh? [[No es que|orange]]…'], hint: '«No es que» + subjuntivo suaviza la negativa; después, la razón en indicativo.', example: 'No es que no quiera ir a tu cumpleaños, de verdad; es que ese fin de semana tengo una boda en otra ciudad. Como vuelvo el domingo por la noche, ¿te parece si quedamos el martes?' },
            { q: 'Piensa en algo que haces y que la gente interpreta mal: madrugar, no comer carne, ir siempre a pie… ¿Por qué lo haces de verdad? · Something you do that people misread: what is the real reason?', followUps: ['¿Qué te dicen los demás?', '¿Siempre lo has hecho así?'], phrases: ['…, pero [[no porque|orange]] me guste…', '[[sino porque|teal]]…', '[[No es que|orange]] sea…'], hint: 'Marco presente: no porque + presente de subjuntivo.', example: 'Me levanto a las seis, pero no porque me guste madrugar, sino porque es el único momento tranquilo del día. No es que sea muy disciplinada: es que a esa hora nadie me escribe.' },
            { q: 'Cuenta una decisión importante del pasado: mudarte, dejar unos estudios, cambiar de trabajo. ¿Qué pensó la gente y cuál fue el motivo real? · A past decision: what did people assume, and what was the real reason?', followUps: ['¿Te arrepientes?', '¿Lo volverías a hacer?'], phrases: ['Lo dejé [[no porque fuera|orange]]…', '[[sino porque|teal]]…', '[[No es que|orange]] me rindiera…'], hint: 'Marco pasado: no porque / no es que + imperfecto de subjuntivo.', example: 'Dejé la carrera de Derecho en segundo, no porque fuera difícil, sino porque no me veía de abogada. Mi familia pensó que me había rendido, pero no es que me rindiera: es que quería estudiar otra cosa.', teacher: 'Tú haces de familiar que no entendió la decisión («¿Lo dejaste porque era difícil?»); tu alumno lo desmiente con «no porque…, sino porque…».' },
            { q: 'Eres Óscar, el presidente. Explicas en la asamblea por qué sube la cuota, y después se lo cuentas a un amigo. · The same reasons in two registers.', followUps: ['¿Qué cambia entre las dos versiones?', '¿Qué conector no usarías en la asamblea?'], phrases: ['[[Dado que|blue]]…', '[[debido a|violet]]…', '[[Como|blue]]…', '…, [[que|blue]]…'], hint: 'Asamblea: dado que, puesto que, debido a. Amigo: como, porque, que.', example: 'En la asamblea: «Dado que el seguro ha subido un veinte por ciento, y debido a los nuevos gastos del refugio, proponemos subir la cuota». A un amigo: «Como el seguro está carísimo, hay que subir la cuota. Y no me mires así, que no es culpa mía».', teacher: 'Tú eres un socio que protesta en la asamblea; tu alumno responde primero en registro formal y luego, en el bar, en registro coloquial.' },
            { q: 'Estás en una salida con el club. Das consejos rápidos al grupo y dices por qué. · On the hike: quick advice to the group, with a reason.', followUps: ['¿Y si alguien no te hace caso?', '¿Qué dices al final del día?'], phrases: ['Abríguense, [[que|blue]]…', 'Llenen las botellas aquí, [[que|blue]]…', 'Gracias [[por haber venido|violet]]…'], hint: 'Orden + que + indicativo = porque. Por + infinitivo compuesto para agradecer algo ya hecho.', example: 'Abríguense, que arriba hace viento. Llenen las botellas aquí, que en el camino no hay fuentes. Y gracias por haber venido tan temprano.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno hace las preguntas y tú respondes con algún error a propósito («No es que no quiero…», «Lo dejé no porque estaba cansado…»). Tu alumno lo detecta y lo corrige.', self: 'Ahora haz tú las preguntas en voz alta y respóndelas con otra experiencia distinta. (Now ask the questions aloud and answer with a different experience.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Un mensaje para aclararlo todo', coach: 'Niega la causa falsa y da la verdadera. Reject the false reason, give the real one.',
      steps: [
        { title: 'El mensaje de Marina · Marina’s message', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos cada causa: ¿negada o real? ¿subjuntivo o indicativo? ¿el conector encaja en ese registro? Después tu alumno lee el mensaje en voz alta.', self: 'Escribe tu mensaje y toca «Revisar mi texto». Después repasa cada causa: ¿negada o real? ¿subjuntivo o indicativo? (Check every reason and its mood.)' } },
          { kind: 'write', title: 'Mensaje a los socios · Message to the members', situation: 'Eres Marina (o eres tú, si dejas un cargo, un grupo o una actividad). Escribes a todos los socios del club para anunciar que dejas la coordinación, desmentir los rumores y explicar el motivo real. Registro cuidado pero cercano. (You are Marina, or yourself leaving a role or a group. Write to all the members: announce it, deny the rumours and give the real reason. Careful but friendly register.)', task: [
            'Anuncia la decisión y desde cuándo es efectiva. (Announce the decision and when it takes effect.)',
            'Desmiente al menos una causa falsa con «no porque + subjuntivo…, sino porque + indicativo».',
            'Rechaza una interpretación con «no es que + subjuntivo», seguido de «es que» o «sino que».',
            'Usa «como» al principio de una frase y un conector cuidado (puesto que, ya que, dado que, debido a).',
            'Cierra con un agradecimiento (gracias a… / gracias por + infinitivo). (Close by thanking the members.)',
          ], starters: ['Les escribo para contarles que…', 'Dejo el cargo, no porque…, sino porque…', 'No es que…; es que…', 'Como…', 'Puesto que…', 'Gracias a todos ustedes…'],
            words: ['no porque', 'sino porque', 'no es que', 'es que', 'sino que', 'como', 'puesto que', 'dado que', 'debido a', 'gracias a'],
            model: 'Queridos socios: Les escribo para contarles que, a partir del 1 de noviembre, dejo la coordinación de rutas del club. Sé que en los últimos días han circulado algunas explicaciones, así que prefiero aclararlo yo misma. Dejo el cargo [[no porque haya tenido|orange]] problemas con la junta, [[sino porque|teal]] mi padre vive solo desde marzo y necesita compañía los fines de semana. [[No es que|orange]] haya perdido la ilusión por la montaña; [[es que|teal]] ahora mi familia es lo primero. [[Puesto que|blue]] Esteban Galindo conoce los caminos mejor que nadie, la junta le ha propuesto sustituirme, y él ha aceptado. [[Como|blue]] el cambio coincide con el inicio del invierno, durante noviembre prepararemos juntos el nuevo calendario. Por otra parte, quiero aclarar que la ruta de los lagos se canceló [[debido a|violet]] las tormentas, y no por un problema con el refugio. Seguiré saliendo con ustedes siempre que pueda. [[Gracias a|violet]] todos ustedes, estos seis años han sido inolvidables. Un abrazo, Marina Robles',
            minWords: 140,
            checks: [
              { label: 'Una causa negada con «no porque»', pattern: '(?<!\\p{L})no\\s+porque(?!\\p{L})', tip: 'Desmiente una causa falsa: «Dejo el cargo no porque haya tenido problemas…».' },
              { label: 'La causa real con «sino porque» o «sino por»', pattern: '(?<!\\p{L})sino\\s+(?:porque|por)(?!\\p{L})', tip: 'Después de la causa negada, da la verdadera: «…, sino porque mi padre me necesita».' },
              { label: 'Una frase con «no es que»', pattern: '(?<!\\p{L})no\\s+es\\s+que(?!\\p{L})', tip: 'Rechaza una interpretación: «No es que haya perdido la ilusión; es que…».' },
              { label: 'Un conector cuidado (puesto que, ya que, dado que, debido a, a causa de)', pattern: '(?<!\\p{L})(?:puesto\\s+que|ya\\s+que|dado\\s+que|debido\\s+a|a\\s+causa\\s+de)(?!\\p{L})', tip: 'Sube el registro: «Puesto que Esteban conoce los caminos…», «debido a las tormentas».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})no\\s+porque[^.;]{1,80}?(?<!\\p{L})pero\\s+porque(?!\\p{L})', why: 'Después de «no porque…», la causa verdadera va con **sino porque**, no con «pero porque».' },
              { pattern: '(?<!\\p{L})no\\s+es\\s+que\\s+(?:no\\s+)?(?:quiero|puedo|tengo|estoy|es|soy|me\\s+gusta|quería|podía|tenía|estaba|era)(?!\\p{L})', why: 'Después de **no es que** va siempre el subjuntivo: «no es que no **quiera**», «no es que **estuviera**…».' },
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
            { tone: 'orange', label: 'CAUSA NEGADA', formula: 'acción + no porque + subjuntivo · no por + nombre', example: 'Me callé, pero no porque tuviera miedo.', caption: 'la acción ocurre; esa causa no', en: 'the action happens; you reject the reason, in the subjunctive (present or past by frame)' },
            { tone: 'teal', label: 'CAUSA REAL', formula: 'sino porque + indicativo · sino por + nombre', example: '…, sino porque mi padre me necesita.', caption: 'sino corrige tras la negación', en: 'the true reason, introduced with sino after the denial' },
            { tone: 'orange', label: 'INTERPRETACIÓN RECHAZADA', formula: 'no es que + subjuntivo, es que / sino que + indicativo', example: 'No es que no quiera, es que no puedo.', caption: 'también suaviza una negativa', en: 'rule out what others might think, then explain; also softens a refusal' },
            { tone: 'blue', label: 'REGISTRO Y POSICIÓN', formula: 'como (delante) · porque (detrás) · ya que, puesto que, dado que · debido a · que (oral)', example: 'Como llovía, suspendimos la salida. / Abrígate, que hace frío.', caption: 'solo porque se puede negar', en: 'como goes first; ya que and dado que are more careful; que after an order is spoken Spanish' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Pregúntate: ¿**ocurre la acción**? Si ocurre y rechazas un motivo → **no porque + subjuntivo, sino porque + indicativo**. Si la acción no ocurre → **no + verbo + porque + indicativo**. Si rechazas lo que el otro piensa → **no es que + subjuntivo**. Y antes de elegir el conector: ¿delante o detrás? ¿hablas o escribes?', en: 'Ask yourself: does the action happen? If it does and you reject a reason, use no porque + subjunctive, then sino porque + indicative. If the action does not happen, use no + verb + porque + indicative. To rule out an interpretation, use no es que + subjunctive. Then choose the connector by position and register.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'Me mudé al campo, pero no porque ___ la ciudad, sino porque necesitaba silencio.', options: ['odie', 'odiaba', 'odiara'], answer: 2, why: 'Causa negada en un marco pasado («me mudé»): imperfecto de subjuntivo.', en: 'I moved to the countryside, not because I hated the city, but because I needed silence.' },
            { prompt: 'No es que el restaurante ___ malo, es que nos queda demasiado lejos.', options: ['es', 'fuera', 'sea'], answer: 2, why: '«No es que» + subjuntivo; marco presente: sea.', en: 'It’s not that the restaurant is bad; it’s just too far from where we live.' },
            { prompt: '___ no quedaban entradas, nos quedamos en casa.', options: ['Porque', 'Como', 'Que'], answer: 1, why: 'Causa delante: «Como» + indicativo.', en: 'As there were no tickets left, we stayed at home.' },
            { prompt: 'El vuelo se retrasó ___ la niebla.', options: ['como', 'debido a', 'debido a que'], answer: 1, why: 'Con un nombre (la niebla): «debido a». «Debido a que» pide un verbo.', en: 'The flight was delayed owing to fog.' },
            { prompt: 'Llama a tu madre, ___ lleva toda la tarde esperando.', options: ['sino', 'que', 'como'], answer: 1, why: 'Razón de una orden, en la lengua hablada: que + indicativo.', en: 'Call your mother, she’s been waiting all afternoon.' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Ahora, otra decisión. Now, another decision.', blocks: [
          { kind: 'lead', text: 'Daniel cierra el restaurante que abrió hace quince años en su barrio, y los vecinos hacen sus propias teorías. Ayúdalo a explicarse.', en: 'Daniel is closing the restaurant he opened in his neighbourhood fifteen years ago, and the neighbours have their own theories. Help him explain himself.' },
          { kind: 'rewrite', title: 'El restaurante de Daniel · Daniel’s restaurant', items: [
            { prompt: 'Daniel cierra su restaurante. ¿No tiene clientes? Falso. ¿Está cansado? Verdad.', instruction: 'Une las ideas con «no porque…, sino porque…». Empieza: «Daniel cierra su restaurante…».', accept: ['Daniel cierra su restaurante no porque no tenga clientes sino porque está cansado', 'Daniel cierra su restaurante pero no porque no tenga clientes sino porque está cansado', 'Daniel cierra su restaurante y no porque no tenga clientes sino porque está cansado'] },
            { prompt: 'Daniel, a una clienta: «¿Que quiero cerrar? No es eso. Necesito descansar».', instruction: 'Reformula con «No es que…, es que…» (o «sino que»).', accept: ['No es que quiera cerrar es que necesito descansar', 'No es que quiera cerrar sino que necesito descansar'] },
            { prompt: 'Daniel, hace un año: «Vendo el local, pero no porque necesite dinero».', instruction: 'Cuéntalo en pasado. Empieza: «Daniel vendió el local…».', accept: ['Daniel vendió el local pero no porque necesitara dinero', 'Daniel vendió el local pero no porque necesitase dinero', 'Daniel vendió el local no porque necesitara dinero', 'Daniel vendió el local no porque necesitase dinero'] },
          ] },
        ] },
        { title: 'Ampliación · Causas anteriores, registro formal y trampas (opcional)', mascot: '/brand/mascot/portrait.webp', coach: 'Opcional. Optional.', blocks: [
          { kind: 'lead', text: 'Para estudiantes fuertes o si queda tiempo: si la causa negada es **anterior** a un pasado, usa el **pluscuamperfecto de subjuntivo** (no porque lo **hubieran criticado**). En textos muy formales aparecen **en vista de que** y **habida cuenta de que** (= dado que). Y cuidado: **como + subjuntivo** no es causal, es una condición («Como no **llegues** a las siete, salimos sin ti» = si no llegas). Por último, «**porque sí**» significa «sin dar razones».', en: 'For strong students or spare time: a rejected reason that happened before a past event takes the pluperfect subjunctive. Very formal texts use «en vista de que» and «habida cuenta de que», close to «dado que». Watch out: «como» + subjunctive is not causal but conditional, often a warning. And «porque sí» means “just because”, refusing to give a reason.' },
          { kind: 'choice', title: 'Un paso más · One step further', items: [
            { prompt: 'Óscar dimitió en junio, pero no porque lo ___ criticado en la asamblea, sino porque se mudaba a otra ciudad.', options: ['habían', 'hubieran', 'hayan'], answer: 1, why: 'La crítica (negada) es anterior a la dimisión, en un marco pasado: pluscuamperfecto de subjuntivo, hubieran criticado.', en: 'Óscar resigned in June, not because he had been criticised at the meeting, but because he was moving to another city.' },
            { prompt: 'Informe de la junta: «___ el número de socios ha crecido, se ampliará la póliza del seguro».', options: ['Que', 'No porque', 'Habida cuenta de que'], answer: 2, why: '«Habida cuenta de que» es un conector causal muy formal, propio de informes y actas; va delante, como «dado que».', en: 'Board report: in view of the fact that membership has grown, the insurance policy will be extended.' },
            { prompt: '«Como no llegues a las siete, salimos sin ti.» ¿Qué significa «como» aquí?', options: ['Si no llegas a las siete…', 'Porque no llegas a las siete…', 'Aunque no llegues a las siete…'], answer: 0, why: 'Como + subjuntivo expresa una condición, a menudo una advertencia. El «como» causal lleva indicativo.', en: '“If you’re not here by seven, we’re leaving without you.” What does «como» mean here?' },
            { prompt: '—¿Por qué has cambiado la ruta? —Porque sí. ¿Qué quiere decir la respuesta?', options: ['Que la persona no quiere dar ninguna razón.', 'Que alguien le dijo que sí.', 'Que el cambio era obligatorio.'], answer: 0, why: '«Porque sí» rechaza dar explicaciones; puede sonar seco o tajante.', en: '“Why did you change the route?” “Just because.” What does the answer mean?' },
          ] },
          { kind: 'teacher', text: 'Paso opcional: solo si queda tiempo o para estudiantes fuertes. Extra: tu alumno redacta dos líneas del acta de la junta con «habida cuenta de que» o «en vista de que», y cuenta una dimisión pasada con «no porque + pluscuamperfecto de subjuntivo».' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 154 · Consecutivas de intensidad: tan, tanto, tal… que', text: 'Ya niegas una causa falsa y das la verdadera: «Lo dejo, no porque esté enfadada, sino porque mi padre me necesita». En la clase 154 miras la relación desde el otro lado: la **consecuencia**, sobre todo cuando nace de algo muy intenso: «Llovía **tanto que** cancelamos la ruta», «El sendero estaba **tan** mal **que** nos volvimos». Es el paso natural: de la causa a la consecuencia.', en: 'You can now reject a false reason and give the real one. Class 154 looks at the relationship from the other side: the consequence, especially when it comes from something intense, as in “it rained so much that we cancelled the route”. It is the natural next step: from cause to consequence.', href: '/gramatica/consecuencias-tan-tanto', label: 'Ir a la clase 154' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Qué hiciste el año pasado por un motivo que la gente no entendió?». Respuesta esperada: una frase con «no porque + imperfecto de subjuntivo, sino porque + indicativo» y otra con «no es que…, es que…». Tarea: el mensaje de Escribir sobre una decisión real.' },
        ] },
      ],
    },
  ],
};
