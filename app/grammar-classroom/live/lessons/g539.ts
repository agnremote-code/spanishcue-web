import type { LiveLesson } from '../types';

/**
 * Lesson 539 · B2 · Condiciones con otros nexos (course unit G239, coverage-audit extension
 * studied after G135). Builds on si + presente / si + imperfecto de subjuntivo (G102, G131),
 * the present and imperfect subjunctive (G088, G128), tense agreement (G130) and causal
 * como (G115).
 * One scene runs through the class: Clara Montes, a photographer in Querétaro, negotiates an
 * exhibition and a free youth workshop with Hugo Salinas, coordinator of the Centro Cultural
 * La Estación; Marcela Duarte is the director, Paula Ríos is Clara's assistant and Rebeca Lara,
 * a ceramicist, appears in Practicar. Hugo sends the voicemail (es-MX-JorgeNeural, tú).
 * Content: necessary condition (siempre que, siempre y cuando, con tal de que, a condición de
 * que); exception (a no ser que, a menos que, salvo que, excepto que = si no); foreseen case
 * (en caso de que) against por si + indicativo (precaution); como + subjuntivo (colloquial
 * warning) against causal como + indicativo; siempre que = cada vez que and salvo que = excepto
 * el hecho de que with the indicative; de + infinitivo (De ser así, De no recibir…) receptive
 * and light (G172 develops it at C1); con tal de / a condición de + infinitivo with the same
 * subject; tense agreement (present subjunctive after present/future/imperative, imperfect
 * after a conditional or a completed past); register (a condición de que formal, como + subj.
 * colloquial). Writing: a formal acceptance email with conditions, DELE B2 style.
 */
export const lesson: LiveLesson = {
  id: 539,
  level: 'B2',
  title: 'Condiciones con otros nexos',
  subtitle: 'Negociar y poner condiciones con siempre que, a no ser que, en caso de que o con tal de que, eligiendo el matiz y el registro.',
  legend: [
    { tone: 'blue', label: 'CONDICIÓN NECESARIA · siempre que, siempre y cuando, con tal de que, a condición de que + subjuntivo' },
    { tone: 'orange', label: 'EXCEPCIÓN (= si no) · a no ser que, a menos que, salvo que, excepto que + subjuntivo' },
    { tone: 'teal', label: 'CASO PREVISTO Y AVISO · en caso de que, por si, como + subjuntivo, de + infinitivo' },
    { tone: 'neutral', label: 'NO ES CONDICIÓN · siempre que (= cada vez que), como (= porque), salvo que (= excepto el hecho de que) + indicativo' },
  ],
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Más allá de «si»', coach: '¿Qué tipo de condición es? What kind of condition is it?',
      steps: [
        { title: 'Una exposición con condiciones · An exhibition with strings attached', blocks: [
          { kind: 'lead', text: 'Clara Montes es fotógrafa en Querétaro. El Centro Cultural La Estación le propone exponer en marzo y dar un taller para jóvenes. Clara acepta, pero con condiciones, y Hugo Salinas, el coordinador, también pone las suyas. Ya sabes poner condiciones con **si** (si me pagan…, si me pagaran…). Hoy aprendes otros nexos que dicen **qué tipo** de condición es: un requisito, una excepción o un caso previsto. Casi todos llevan **subjuntivo**.', en: 'Clara, a photographer, is negotiating an exhibition and a workshop with a cultural centre. You can already set conditions with si; today you learn connectors that say what kind of condition it is: a requirement, an exception or a contingency. Almost all of them take the subjunctive, which si never does in the present.' },
          { kind: 'guide', text: { teacher: 'Tú lees cada frase y tu alumno explica con sus palabras qué condición pone Clara o Hugo: ¿un requisito, una excepción o un plan B?', self: 'Lee cada frase en voz alta y explica qué condición se pone: ¿un requisito, una excepción o un plan B? (Is it a requirement, an exception or a plan B?)' } },
          { kind: 'compare', title: 'La misma negociación, cuatro nexos · One negotiation, four connectors', columns: [
            { tone: 'neutral', label: 'SI · condición general', sentence: 'Si me pagan el viaje, expongo en marzo.', idea: 'Condición abierta. Tras «si» va indicativo (o imperfecto de subjuntivo), nunca presente de subjuntivo.', en: 'A plain open condition: si never takes the present subjunctive.' },
            { tone: 'blue', label: 'REQUISITO', sentence: 'Expongo en marzo [[siempre que me paguen|blue]] el viaje.', idea: 'Sin esa condición no hay acuerdo: «solo si».', en: 'Presents the condition as a requirement: “as long as”, “provided that”.' },
            { tone: 'orange', label: 'EXCEPCIÓN', sentence: 'Expongo en marzo [[a no ser que el festival ocupe|orange]] la sala.', idea: 'Es el único caso en que no se cumple: «si no».', en: 'Names the one case that would cancel the plan: “unless”.' },
            { tone: 'teal', label: 'CASO PREVISTO', sentence: '[[En caso de que llueva|teal]], la inauguración será en el vestíbulo.', idea: 'Una posibilidad prevista y lo que se hará entonces.', en: 'Plans for a possibility: “in case”, “should it rain”. Typical of notices and rules.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Hugo: «Te damos la sala pequeña, a no ser que la ___ el festival de cine».', options: ['necesite', 'necesita', 'necesitará'], answer: 0, why: '«A no ser que» introduce una excepción y siempre lleva subjuntivo: necesite.', en: 'Hugo: “You can have the small room, unless the film festival needs it.”' },
            { prompt: '¿Qué frase presenta la condición como un requisito?', options: ['Doy el taller siempre que sea gratuito.', 'Doy el taller a no ser que sea gratuito.', 'En caso de que sea gratuito, doy el taller.'], answer: 0, why: '«Siempre que» marca un requisito: solo con esa condición. «A no ser que» diría lo contrario (si no es gratuito) y «en caso de que» prevé una posibilidad.', en: 'Which sentence presents the condition as a requirement?' },
          ] },
        ] },
        { title: 'Condición necesaria · A necessary condition', mascot: '/brand/mascot/studying.webp', coach: 'Solo así hay trato. Only then is it a deal.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'REQUISITO · solo si…', question: '¿Pones un requisito sin el cual no aceptas?', en: 'These connectors make the condition a requirement: the deal holds only if it is met. They are typical of negotiations, rules and agreements, and they always take the subjunctive.', formula: ['siempre que · siempre y cuando · con tal de que · a condición de que', '+ subjuntivo (presente o imperfecto)'],
            meaning: 'La condición es **necesaria**: si no se cumple, no hay acuerdo. Equivalen a «solo si». Con este valor, **nunca** llevan indicativo ni futuro.',
            examples: [
              { es: 'Puedes usar el estudio [[siempre que lo dejes|blue]] ordenado.', en: 'You can use the studio as long as you leave it tidy.' },
              { es: 'Clara expone en la sala pequeña [[siempre y cuando tenga|blue]] buena luz.', en: 'Clara will show in the small room provided that it has good light: a firmer, more insistent condition.' },
              { es: 'Acepto cualquier fecha [[con tal de que me avisen|blue]] con un mes de antelación.', en: 'I’ll take any date so long as they give me a month’s notice: a minimal condition, flexible on the rest.' },
              { es: 'El centro cede el aula [[a condición de que el taller sea|blue]] gratuito.', en: 'The centre lends the room on condition that the workshop is free: an explicit, contract-like requirement.' },
            ],
            note: 'Con el **mismo sujeto**, «con tal de» y «a condición de» van con infinitivo: «Clara acepta cualquier horario **con tal de exponer** en La Estación». También es correcta la variante «con tal que».' },
          { kind: 'table', title: 'Matices y registro · Nuance and register', head: ['Nexo', 'Matiz', 'Registro'], rows: [
            ['**siempre que**', 'requisito; el más neutro', 'general'],
            ['**siempre y cuando**', 'requisito con más énfasis: «solo con esa condición»', 'general; frecuente al negociar'],
            ['**con tal de que**', 'condición mínima: lo demás no importa tanto', 'general; muy frecuente en la conversación'],
            ['**a condición de que**', 'requisito explícito, como en un contrato', 'formal'],
          ], note: 'Los cuatro van con subjuntivo cuando expresan condición. Elige por el matiz: «con tal de que» suele mostrar flexibilidad («me da igual, con tal de que…»); «a condición de que» suena a cláusula.' },
          { kind: 'compare', title: 'Siempre que: ¿cada vez o solo si? · Whenever, or only if?', columns: [
            { tone: 'neutral', label: 'CADA VEZ QUE · indicativo', sentence: '[[Siempre que expongo|neutral]] en La Estación, viene mucha gente.', idea: 'Habla de una costumbre real: = cada vez que.', en: 'Whenever: a real habit, so the indicative.' },
            { tone: 'blue', label: 'SOLO SI · subjuntivo', sentence: 'Expondré en La Estación [[siempre que me den|blue]] la sala grande.', idea: 'Pone un requisito: = con tal de que.', en: 'As long as: a requirement, so the subjunctive.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'El año pasado, ___ Clara exponía en La Estación, Hugo le reservaba la mejor pared.', options: ['con tal de que', 'siempre que', 'a condición de que'], answer: 1, why: 'Es una costumbre del pasado (exponía, reservaba): «siempre que» = cada vez que, con indicativo. Los otros dos nexos exigen subjuntivo y expresan requisito.', en: 'Last year, whenever Clara exhibited at La Estación, Hugo kept the best wall for her.' },
            { prompt: 'Hugo: «Te dejamos el aula del segundo piso a condición de que el taller ___ gratuito».', options: ['es', 'será', 'sea'], answer: 2, why: '«A condición de que» expresa un requisito: subjuntivo (sea). El indicativo y el futuro no van tras este nexo.', en: 'Hugo: “You can have the second-floor classroom on condition that the workshop is free.”' },
          ] },
        ] },
        { title: 'La excepción · The exception', mascot: '/brand/mascot/standing.webp', coach: 'Todo igual, salvo un caso. Everything holds, except one case.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'EXCEPCIÓN · si no…', question: '¿Afirmas algo y solo nombras el caso que lo impediría?', en: 'These connectors mean “unless”: the main statement holds in every case except the one you mention. They work like si no, but they present the plan as the default and the exception as the only thing that could change it.', formula: ['a no ser que · a menos que · salvo que · excepto que', '+ subjuntivo (presente o imperfecto)'],
            meaning: 'La oración principal se cumple **en todos los casos menos uno**: el que introduce el nexo. Equivalen a «si no». «Excepto que» es el menos frecuente de los cuatro.',
            examples: [
              { es: 'Las copias estarán listas el día catorce, [[a no ser que el laboratorio se retrase|orange]].', en: 'The prints will be ready on the 14th, unless the lab falls behind.' },
              { es: 'La exposición abre el 3 de marzo, [[a menos que Marcela decida|orange]] otra cosa.', en: 'The exhibition opens on 3 March, unless Marcela decides otherwise.' },
              { es: 'El taller es gratuito, [[salvo que lo encargue|orange]] una empresa privada.', en: 'The workshop is free, unless a private company commissions it.' },
            ],
            note: 'El nexo ya contiene la negación: «Iremos, a no ser que **llueva**» = «Iremos si **no** llueve». No añadas otro «no»: «a no ser que no llueva» diría lo contrario. Y la forma correcta es «a menos **que**», no «a menos de que».' },
          { kind: 'compare', title: 'Salvo que: ¿condición o hecho? · Unless, or except that?', columns: [
            { tone: 'orange', label: 'SALVO QUE + SUBJUNTIVO', sentence: 'Todo saldrá bien, [[salvo que el proyector falle|orange]].', idea: 'Una posibilidad que estropearía el plan: «unless».', en: 'Unless: a possible exception, so the subjunctive.' },
            { tone: 'neutral', label: 'SALVO QUE + INDICATIVO', sentence: 'Todo salió bien, [[salvo que el proyector falló|neutral]] dos veces.', idea: 'Un hecho real que fue la excepción: «except that».', en: 'Except that: a real fact, so the indicative. The same goes for excepto que.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Clara: «Mando las fotos el lunes, a menos que Paula no ___ terminar el retoque».', options: ['pueda', 'podrá', 'puede'], answer: 0, why: '«A menos que» va con subjuntivo: pueda. Aquí el «no» sí tiene sentido: la excepción es que Paula no termine.', en: 'Clara: “I’ll send the photos on Monday, unless Paula can’t finish the retouching.”' },
            { prompt: '«La inauguración fue un éxito, salvo que el vino se acabó a las ocho.» ¿Qué expresa «salvo que»?', options: ['Una condición para el futuro.', 'Un hecho real que fue la excepción.', 'Una advertencia.'], answer: 1, why: 'Con indicativo (se acabó), «salvo que» presenta un hecho real: = excepto que, «except that».', en: 'What does salvo que express in this sentence?' },
          ] },
        ] },
        { title: 'Plan B y avisos · Plan B and warnings', mascot: '/brand/mascot/speaking.webp', coach: '¿Prever, prevenir o avisar? Plan, prepare or warn?', blocks: [
          { kind: 'compare', title: 'Tres maneras de pensar en lo que puede pasar · Three ways to think ahead', columns: [
            { tone: 'teal', label: 'EN CASO DE QUE + SUBJUNTIVO', sentence: '[[En caso de que se inscriban|teal]] más de veinte personas, abrimos otro grupo.', idea: 'Prevé una posibilidad y dice qué se hará entonces. Frecuente en normas y avisos.', en: 'Contingency: should it happen, this is the plan. Common in rules, notices and formal emails.' },
            { tone: 'teal', label: 'POR SI + INDICATIVO', sentence: 'Reservo un aula extra [[por si hay|teal]] más demanda.', idea: 'Hago algo ahora como precaución: «just in case».', en: 'Precaution: I act now in case something happens. Present indicative, or imperfect subjunctive (por si hubiera), but not present subjunctive.' },
            { tone: 'neutral', label: 'SI + INDICATIVO', sentence: 'Si se inscriben más de veinte, abrimos otro grupo.', idea: 'Condición general, más neutra.', en: 'A plain condition, the most neutral option.' },
          ] },
          { kind: 'concept', tone: 'teal', label: 'COMO + SUBJUNTIVO · un aviso', question: '¿Adviertes o amenazas, medio en serio, con lo que pasará?', en: 'Como + subjunctive, usually at the start of the sentence, sets a condition that sounds like a warning or a playful threat. It is colloquial; how often you hear it varies from place to place. With the indicative, como means “since”.', formula: ['como + subjuntivo, al principio de la frase', '→ consecuencia (presente, futuro, ir a…)'],
            meaning: 'Es una condición con tono de **aviso** o **amenaza**, a menudo en broma. Es **coloquial** y su frecuencia varía según la zona; en un texto formal se usa «en caso de que» o «si». Con indicativo, «como» es **causal**: = porque, ya que.',
            examples: [
              { es: '[[Como vuelvan a poner|teal]] las etiquetas con faltas, las corrijo yo misma.', en: 'If they put up the captions with spelling mistakes again, I’ll correct them myself: a half-joking warning.' },
              { es: '[[Como no entregues|teal]] las copias el día quince, no habrá exposición en marzo.', en: 'If you don’t deliver the prints by the 15th, there won’t be an exhibition in March: a serious warning.' },
              { es: '[[Como te quejaste|neutral]] tanto, este año te mando las etiquetas antes.', en: 'Since you complained so much, this year I’ll send you the captions earlier: causal como, indicative.' },
            ] },
          { kind: 'tip', icon: '💡', title: 'Para reconocer: de + infinitivo · To recognise: de + infinitive', text: 'En textos cuidados aparece una condición compacta: **de + infinitivo**. «**De ser así**, te aviso» = si es así. «**De no recibir** respuesta, cancelaremos la reserva» = si no recibimos respuesta. Hoy solo tienes que entenderla; la clase 172 la trabaja a fondo.', en: 'Formal texts often use de + infinitive as a compact if-clause: de ser así (if so), de no recibir respuesta (if we receive no reply). Just recognise it today; class 172 covers it in depth.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Paula guarda las fotos en dos discos duros ___ uno se estropea.', options: ['a menos que', 'por si', 'en caso de que'], answer: 1, why: 'Es una precaución que toma ahora, y el verbo está en indicativo (se estropea): «por si». «En caso de que» y «a menos que» exigirían subjuntivo.', en: 'Paula keeps the photos on two hard drives in case one breaks.' },
            { prompt: '«Como no me mandes las fotos hoy, no llegamos a imprimirlas.» ¿Qué expresa?', options: ['Una costumbre.', 'Una causa: porque no me mandaste las fotos.', 'Un aviso: si no me las mandas, habrá un problema.'], answer: 2, why: '«Como» + subjuntivo (mandes) al principio de la frase es una condición con tono de aviso. Con indicativo («Como no me mandaste…») sería causal.', en: 'What does this sentence express?' },
          ] },
        ] },
        { title: 'Tiempos y registro · Tenses and register', mascot: '/brand/mascot/portrait.webp', coach: 'Mira el verbo principal. Look at the main verb.', blocks: [
          { kind: 'table', title: 'Concordancia temporal · Tense agreement', head: ['Verbo principal', 'Tras el nexo', 'Ejemplo'], rows: [
            ['presente, futuro o imperativo', 'presente de subjuntivo', 'Te **pagamos** la mitad [[siempre que mandes|blue]] la factura.'],
            ['condicional (oferta prudente, hipótesis)', 'imperfecto de subjuntivo', '**Aceptaría** la mitad [[con tal de que me pagaran|blue]] el resto en marzo.'],
            ['pasado ya cerrado', 'imperfecto de subjuntivo', 'El año pasado **aceptó** [[a condición de que le dejaran|blue]] elegir las fotos.'],
            ['discurso referido en pasado', 'imperfecto de subjuntivo', 'Hugo **dijo** que abrirían otro grupo [[en caso de que se llenara|teal]] el primero.'],
          ], note: 'Es la misma correlación que ya conoces (clase 130). Con un condicional que se refiere al futuro, a veces también se oye el presente («aceptaría siempre que me paguen»); en un texto formal, la opción más segura es el imperfecto.' },
          { kind: 'decide', title: '¿Indicativo o subjuntivo? ¿Qué tiempo? · Which mood, which tense?', steps: [
            { q: '¿El nexo presenta un hecho o una costumbre: siempre que = cada vez que, como = porque, salvo que = excepto el hecho de que, o por si?', yes: 'Indicativo: «Siempre que **expongo** aquí, viene mucha gente».', no: 'next' },
            { q: '¿Es una condición (requisito, excepción, caso previsto o aviso) y el verbo principal está en condicional o en un pasado cerrado?', yes: 'Imperfecto de subjuntivo: «Aceptaría con tal de que me **pagaran**».', no: 'Presente de subjuntivo: «Acepto con tal de que me **paguen**».' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'En 2025, Rebeca expuso en La Estación con tal de que le ___ la vitrina central.', options: ['dejaran', 'dejen', 'dejarían'], answer: 0, why: 'El verbo principal es un pasado cerrado (expuso): imperfecto de subjuntivo, dejaran. El condicional no va tras el nexo.', en: 'In 2025 Rebeca exhibited at La Estación provided they let her have the central display case.' },
            { prompt: '¿Qué frase es más adecuada para el reglamento escrito del centro?', options: ['Como un visitante toque las obras, se le pedirá que salga.', 'En caso de que un visitante toque las obras, se le pedirá que salga.', 'Como un visitante toca las obras, se le pedirá que salga.'], answer: 1, why: '«En caso de que» + subjuntivo es la opción formal. «Como + subjuntivo» es coloquial, y «como + indicativo» sería causal.', en: 'Which sentence suits the centre’s written rules?' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'El nexo decide el modo. The connector decides the mood.', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la frase con el error y tu alumno explica qué falla: el modo, el tiempo o el nexo. Después aparece la corrección.', self: 'Lee cada frase y piensa qué falla: ¿el modo, el tiempo o el nexo? Toca para ver la corrección. (Is it the mood, the tense or the connector?)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Expongo en marzo siempre que me pagan el viaje.', right: 'Expongo en marzo siempre que me paguen el viaje.', why: 'Es un requisito, no una costumbre: «siempre que» condicional lleva subjuntivo. Con indicativo significaría «cada vez que me pagan».' },
            { wrong: 'En caso de que llueve, la inauguración será en el vestíbulo.', right: 'En caso de que llueva, la inauguración será en el vestíbulo.', why: '«En caso de que» siempre lleva subjuntivo. No lo confundas con «si llueve».' },
            { wrong: 'Hablo con Marcela hoy, a menos de que esté de viaje.', right: 'Hablo con Marcela hoy, a menos que esté de viaje.', why: 'La forma correcta es «a menos que», sin «de».' },
            { wrong: 'El año pasado aceptó con tal de que le dejen elegir las fotos.', right: 'El año pasado aceptó con tal de que le dejaran elegir las fotos.', why: 'El verbo principal es un pasado cerrado (aceptó): imperfecto de subjuntivo.' },
            { wrong: 'Como no me llamas mañana, empiezo sin ti.', right: 'Como no me llames mañana, empiezo sin ti.', why: 'Para avisar de lo que pasará, «como» va con subjuntivo. Con indicativo, «como» es causal y no encaja con «mañana».' },
            { wrong: 'Llevo otra cámara por si falle la primera.', right: 'Llevo otra cámara por si falla la primera.', why: '«Por si» va con indicativo (o con imperfecto de subjuntivo: «por si fallara»), no con presente de subjuntivo.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Puedes traer a tu perro al taller siempre y cuando no ___ a nadie.', options: ['moleste', 'molesta', 'molestará'], answer: 0, why: '«Siempre y cuando» solo tiene valor condicional: siempre subjuntivo (moleste).', en: 'You can bring your dog to the workshop as long as it doesn’t bother anyone.' },
            { prompt: 'Iremos a la inauguración, a no ser que ___ un imprevisto.', options: ['no surja', 'surja', 'surge'], answer: 1, why: '«A no ser que» ya significa «si no»: a no ser que surja = si no surge. Añadir «no» invertiría el sentido.', en: 'We’ll go to the opening unless something unexpected comes up.' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno pone tres condiciones para aceptar un trabajo imaginario: un requisito (siempre que…), una excepción (a no ser que…) y un plan B (en caso de que…).' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'La negociación', coach: 'Toca cada nexo marcado. Tap each marked connector.',
      steps: [
        { title: 'En la cafetería del centro · At the centre’s café', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Hugo y tu alumno es Clara. Luego tu alumno toca cada nexo marcado y dice si pone un requisito, una excepción, un plan B, un aviso o si no es una condición.', self: 'Lee el diálogo en voz alta. Después toca cada nexo marcado: ¿requisito, excepción, plan B, aviso o no es condición? (Tap each connector and classify it.)' } },
          { kind: 'explore', title: 'Trato hecho', setting: 'Martes por la tarde, en la cafetería del Centro Cultural La Estación, en Querétaro. Hugo y Clara ya han trabajado juntos y se tratan de tú. (Tuesday afternoon at the cultural centre’s café. Hugo and Clara know each other well.)', lines: [
            { who: 'Hugo', text: '¡Clara! A Marcela le encantó tu propuesta. La exposición puede abrir en marzo, [[siempre que entregues|blue]] las copias antes del día quince.', en: 'Clara! Marcela loved your proposal. The exhibition can open in March, as long as you deliver the prints before the 15th.' },
            { who: 'Clara', text: 'Eso no es problema. Pero yo también tengo mis condiciones: participo [[siempre y cuando las fotos se cuelguen|blue]] en la sala grande.', en: 'That’s no problem. But I have my own conditions too: I’ll take part provided the photos are hung in the large room.' },
            { who: 'Hugo', text: 'Uy, la sala grande está reservada para el festival de cine, [[a no ser que cambien|orange]] las fechas, cosa que dudo.', en: 'Oh dear, the large room is booked for the film festival, unless they change the dates, which I doubt.' },
            { who: 'Clara', text: 'Entonces acepto la pequeña, [[con tal de que tenga|blue]] buena luz natural. Y me gustaría dar un taller para jóvenes.', en: 'Then I’ll take the small one, as long as it has good natural light. And I’d like to run a workshop for young people.' },
            { who: 'Hugo', text: 'Te dejamos el aula del segundo piso [[a condición de que el taller sea|blue]] gratuito: así lo exige la beca municipal.', en: 'We can give you the second-floor classroom on condition that the workshop is free: the city grant requires it.' },
            { who: 'Clara', text: 'De acuerdo. ¿Y qué hacemos [[en caso de que se inscriban|teal]] más de veinte personas?', en: 'Fine. And what do we do if more than twenty people sign up?' },
            { who: 'Hugo', text: 'Abrimos un segundo grupo. Yo siempre reservo un aula extra [[por si hay|teal]] más demanda: [[siempre que organizamos|neutral]] algo gratis, se llena en dos días.', en: 'We open a second group. I always book an extra room in case there’s more demand: whenever we organise something free, it fills up in two days.' },
            { who: 'Clara', text: 'Perfecto. Eso sí: [[como vuelvan a poner|teal]] las etiquetas con faltas de ortografía, las corrijo yo misma con un marcador.', en: 'Perfect. One thing, though: if they put up the captions with spelling mistakes again, I’ll correct them myself with a marker.' },
            { who: 'Hugo', text: 'Ja, ja. [[Como te quejaste|neutral]] tanto el año pasado, este año te las mando antes para que las revises.', en: 'Ha ha. Since you complained so much last year, this year I’ll send them to you first so you can check them.' },
            { who: 'Clara', text: 'Gracias. ¿Y el pago? Yo aceptaría la mitad por adelantado [[con tal de que me pagaran|blue]] el resto el día de la inauguración.', en: 'Thanks. And the payment? I’d accept half up front, provided you paid me the rest on opening day.' },
            { who: 'Hugo', text: 'Lo consulto con Marcela, pero no creo que haya problema, [[salvo que el presupuesto se retrase|orange]] otra vez. [[De ser así|teal]], te aviso enseguida.', en: 'I’ll check with Marcela, but I don’t think it’ll be a problem, unless the budget is delayed again. If so, I’ll let you know straight away.' },
            { who: 'Clara', text: 'Trato hecho. El año pasado todo salió bien, [[salvo que la inauguración empezó|neutral]] una hora tarde. ¡Este año, puntualidad!', en: 'Deal. Last year everything went well, except that the opening started an hour late. This year, let’s be on time!' },
          ], notes: {
            'siempre que entregues': 'Requisito: siempre que = solo si. Presente de subjuntivo porque el verbo principal (puede abrir) es presente con valor de futuro.',
            'siempre y cuando las fotos se cuelguen': 'Requisito enfático: Clara insiste en que es su condición. Siempre subjuntivo.',
            'a no ser que cambien': 'Excepción: la sala está reservada en todos los casos menos uno. = si no cambian las fechas.',
            'con tal de que tenga': 'Condición mínima: Clara cede en la sala y solo pide luz natural. Subjuntivo.',
            'a condición de que el taller sea': 'Requisito explícito, casi de contrato: lo exige la beca. Registro algo formal.',
            'en caso de que se inscriban': 'Caso previsto: una posibilidad para la que preparan un plan. Subjuntivo.',
            'por si hay': 'Precaución: Hugo reserva el aula ahora, por si acaso. «Por si» va con indicativo.',
            'siempre que organizamos': 'No es condición: = cada vez que organizamos. Es una costumbre real, por eso indicativo.',
            'como vuelvan a poner': 'Aviso medio en broma: como + subjuntivo al principio de la frase. Es coloquial.',
            'Como te quejaste': 'No es condición: «como» causal (= ya que) con indicativo.',
            'con tal de que me pagaran': 'Con «aceptaría» (un condicional que suaviza la oferta), lo normal es el imperfecto de subjuntivo.',
            'salvo que el presupuesto se retrase': 'Excepción con subjuntivo: = a no ser que el presupuesto se retrase.',
            'De ser así': 'De + infinitivo: forma compacta de «si es así». Frecuente en registro cuidado.',
            'salvo que la inauguración empezó': 'No es condición: salvo que + indicativo presenta un hecho real que fue la excepción (= excepto que, «except that»).',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Por qué no puede exponer Clara en la sala grande?', options: ['Porque no tiene buena luz.', 'Porque está reservada para el festival de cine.', 'Porque Marcela no quiere.'], answer: 1, why: '«La sala grande está reservada para el festival de cine, a no ser que cambien las fechas».', en: 'Why can’t Clara exhibit in the large room?' },
            { prompt: '¿Con qué condición le dejan el aula del segundo piso?', options: ['Que el taller sea gratuito.', 'Que haya más de veinte inscritos.', 'Que Clara corrija las etiquetas.'], answer: 0, why: '«A condición de que el taller sea gratuito: así lo exige la beca municipal».', en: 'On what condition can she use the second-floor classroom?' },
            { prompt: '¿Qué pasó el año pasado en la inauguración?', options: ['No vino nadie.', 'Empezó una hora tarde.', 'Se suspendió por la lluvia.'], answer: 1, why: '«Todo salió bien, salvo que la inauguración empezó una hora tarde»: un hecho real, con indicativo.', en: 'What happened at last year’s opening?' },
          ] },
        ] },
        { title: 'Después de la reunión · After the meeting', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'chat-fill', title: 'Clara le escribe a Paula, su asistente · Clara texts Paula, her assistant', lines: [
            { who: 'Clara', text: 'Paula, ¡trato hecho! Exponemos en marzo, siempre que ___ las copias antes del quince.', options: ['entregaremos', 'entregamos', 'entreguemos'], answer: 2, why: 'Requisito: «siempre que» condicional + presente de subjuntivo (entreguemos).' },
            { who: 'Paula', text: '¡Genial! Hablo hoy con el laboratorio, a menos que ___ cerrado por inventario.', options: ['está', 'estará', 'esté'], answer: 2, why: '«A menos que» introduce una excepción: subjuntivo (esté).' },
            { who: 'Clara', text: 'Y pide una copia de prueba ___ el color sale raro, como la última vez.', options: ['por si', 'a no ser que', 'en caso de que'], answer: 0, why: 'Es una precaución y el verbo va en indicativo (sale): «por si».' },
            { who: 'Paula', text: 'Hecho. Por cierto, Hugo dijo que nos darían más paredes en caso de que el festival ___ las fechas.', options: ['cambiara', 'cambiaría', 'cambie'], answer: 0, why: 'Discurso referido en pasado (dijo que… darían): imperfecto de subjuntivo, cambiara.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: «¿Con qué condición prestarías tu casa a un amigo durante un mes?». Tu alumno responde con un requisito y una excepción («Se la prestaría siempre que…, a no ser que…»).' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Primero el tipo de condición, después el modo. Kind of condition first, then the mood.',
      steps: [
        { title: 'La exposición de Rebeca · Rebeca’s exhibition', blocks: [
          { kind: 'choice', items: [
            { context: 'Rebeca Lara es ceramista y también expondrá en La Estación. (Rebeca is a ceramicist who will also exhibit.)', prompt: 'Rebeca trae sus piezas el lunes, siempre que alguien la ___ a descargarlas.', options: ['ayudará', 'ayuda', 'ayude'], answer: 2, why: '«Siempre que» pone aquí un requisito (solo si alguien la ayuda): presente de subjuntivo.', en: 'Rebeca will bring her pieces on Monday, as long as someone helps her unload them.' },
            { context: 'Hugo habla de las exposiciones anteriores de Rebeca. (Hugo talks about Rebeca’s past shows.)', prompt: 'Siempre que Rebeca ___ en La Estación, vende casi todas sus piezas.', options: ['expondrá', 'exponga', 'expone'], answer: 2, why: 'Es una costumbre comprobada: «siempre que» = cada vez que, con indicativo.', en: 'Whenever Rebeca exhibits at La Estación, she sells almost all her pieces.' },
            { context: 'Hugo explica las normas del taller. (Hugo explains the workshop rules.)', prompt: 'El taller empieza a las diez, ___ haya menos de cinco inscritos; en ese caso, se cancela.', options: ['a no ser que', 'siempre que', 'con tal de que'], answer: 0, why: 'Se nombra el único caso en que no empieza: excepción, «a no ser que». Con «siempre que» o «con tal de que» el sentido sería absurdo.', en: 'The workshop starts at ten, unless fewer than five people sign up; in that case, it’s cancelled.' },
            { context: 'Rebeca recuerda su primera exposición. (Rebeca remembers her first show.)', prompt: 'En 2024 el centro me dio una vitrina a condición de que ___ las piezas antes del día uno.', options: ['entregue', 'entregaba', 'entregara'], answer: 2, why: 'El verbo principal es un pasado cerrado (dio): imperfecto de subjuntivo, entregara.', en: 'In 2024 the centre gave me a display case on condition that I delivered the pieces before the 1st.' },
            { context: 'Paula prepara el montaje. (Paula prepares the installation.)', prompt: 'Paula lleva tornillos de sobra ___ falta alguno.', options: ['a menos que', 'por si', 'en caso de que'], answer: 1, why: 'Precaución con indicativo (falta): «por si». Los otros dos nexos exigen subjuntivo.', en: 'Paula brings spare screws in case one is missing.' },
          ] },
        ] },
        { title: '¿Qué tipo de condición? · What kind of condition?', blocks: [
          { kind: 'classify', title: 'Clasifica cada frase · Sort each sentence', categories: [
            { id: 'req', label: 'REQUISITO (solo si…)', tone: 'blue' },
            { id: 'exc', label: 'EXCEPCIÓN (si no…)', tone: 'orange' },
            { id: 'prev', label: 'CASO PREVISTO O AVISO', tone: 'teal' },
            { id: 'no', label: 'NO ES CONDICIÓN (hecho o costumbre)', tone: 'neutral' },
          ], items: [
            { text: 'La sala se queda abierta hasta las nueve siempre y cuando haya un vigilante.', answer: 'req', why: 'Sin vigilante no se queda abierta: requisito.' },
            { text: 'Clara no cobra el taller, salvo que lo pida una empresa privada.', answer: 'exc', why: 'Salvo que + subjuntivo: el único caso en que cobraría.' },
            { text: 'En caso de que se vaya la luz, el generador se enciende solo.', answer: 'prev', why: 'Una posibilidad prevista y lo que pasará entonces.' },
            { text: 'Siempre que viene Rebeca, trae pan dulce para todos.', answer: 'no', why: 'Siempre que + indicativo = cada vez que: una costumbre.' },
            { text: 'Paula acepta trabajar el domingo con tal de librar el lunes.', answer: 'req', why: 'Con tal de + infinitivo (mismo sujeto): su condición mínima.' },
            { text: 'Como no confirmen hoy, perdemos la sala.', answer: 'prev', why: 'Como + subjuntivo: un aviso sobre lo que pasará.' },
            { text: 'Todo salió perfecto, excepto que el proyector se apagó dos veces.', answer: 'no', why: 'Excepto que + indicativo: un hecho real que fue la excepción.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Hugo nos deja el aula a condición de que la dejamos limpia.', ok: false, options: ['Hugo nos deja el aula a condición de que la dejemos limpia.', 'Hugo nos deja el aula a condición de que la dejábamos limpia.', 'Hugo nos deja el aula a condición de que la dejaremos limpia.'], answer: 0, why: '«A condición de que» expresa un requisito: presente de subjuntivo, dejemos.' },
            { sentence: 'A menos que el laboratorio se retrase, las copias estarán listas el día catorce.', ok: true, why: 'Correcta: excepción con «a menos que» + subjuntivo; el nexo puede ir al principio.' },
            { sentence: 'Clara aceptó el encargo el año pasado con tal de que le dejen elegir las fotos.', ok: false, options: ['Clara aceptó el encargo el año pasado con tal de que le dejaban elegir las fotos.', 'Clara aceptó el encargo el año pasado con tal de que le dejarían elegir las fotos.', 'Clara aceptó el encargo el año pasado con tal de que le dejaran elegir las fotos.'], answer: 2, why: 'Pasado cerrado en la principal (aceptó): imperfecto de subjuntivo, dejaran.' },
            { sentence: 'Expondré en marzo a menos de que el festival necesite la sala.', ok: false, options: ['Expondré en marzo a menos que el festival necesite la sala.', 'Expondré en marzo a menos que el festival necesita la sala.', 'Expondré en marzo a menos de que el festival necesita la sala.'], answer: 0, why: 'La forma correcta es «a menos que», sin «de», y con subjuntivo.' },
            { sentence: 'Como no entregues las copias el día quince, no habrá exposición en marzo.', ok: true, why: 'Correcta: como + subjuntivo al principio de la frase, con valor de aviso.' },
            { sentence: 'Paula dice que, en caso de que el taller se llenará, abrirá otro grupo.', ok: false, options: ['Paula dice que, en caso de que el taller se llenaría, abrirá otro grupo.', 'Paula dice que, en caso de que el taller se llena, abrirá otro grupo.', 'Paula dice que, en caso de que el taller se llene, abrirá otro grupo.'], answer: 2, why: '«En caso de que» nunca lleva futuro ni indicativo: presente de subjuntivo, se llene (el verbo principal, «dice», está en presente).' },
          ] },
        ] },
        { title: 'Preparando la inauguración · Getting ready for the opening', blocks: [
          { kind: 'chat-fill', title: 'Paula y Clara por mensaje · Paula and Clara by text', lines: [
            { who: 'Paula', text: 'La imprenta hace los carteles el lunes, ___ les mandemos el diseño hoy.', options: ['por si', 'siempre que', 'a no ser que'], answer: 1, why: 'Mandar el diseño hoy es el requisito: «siempre que» + subjuntivo. «A no ser que» invertiría el sentido y «por si» no lleva presente de subjuntivo.' },
            { who: 'Clara', text: 'Perfecto. Mándalo ya y guarda una copia en la nube ___ se borra algo.', options: ['a menos que', 'por si', 'en caso de que'], answer: 1, why: 'Precaución con indicativo (se borra): «por si».' },
            { who: 'Paula', text: 'Hugo dice que podemos servir vino a condición de que no se lo ___ a menores.', options: ['servimos', 'sirvamos', 'serviremos'], answer: 1, why: 'Requisito con «a condición de que»: presente de subjuntivo, sirvamos.' },
            { who: 'Clara', text: 'Bien. ¿Y en caso de que ___ el alcalde? ¿Quién lo recibe?', options: ['viene', 'vendrá', 'venga'], answer: 2, why: '«En caso de que» + subjuntivo: venga.' },
            { who: 'Paula', text: 'Lo recibe Hugo, a menos que tú ___ hacerlo.', options: ['prefieres', 'preferirás', 'prefieras'], answer: 2, why: 'Excepción con «a menos que»: presente de subjuntivo, prefieras.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['Expongo', 'en', 'marzo', 'siempre', 'que', 'me', 'paguen', 'el', 'viaje'], accept: ['Expongo en marzo siempre que me paguen el viaje', 'Siempre que me paguen el viaje expongo en marzo'], en: 'I’ll exhibit in March as long as they pay for my trip.' },
            { tiles: ['La', 'inauguración', 'será', 'en', 'el', 'patio', 'a', 'no', 'ser', 'que', 'llueva'], accept: ['La inauguración será en el patio a no ser que llueva', 'A no ser que llueva la inauguración será en el patio'], en: 'The opening will be in the courtyard, unless it rains.' },
            { tiles: ['Como', 'no', 'me', 'mandes', 'las', 'fotos', 'hoy', 'no', 'llegamos', 'a', 'tiempo'], accept: ['Como no me mandes las fotos hoy no llegamos a tiempo'], en: 'If you don’t send me the photos today, we won’t make it in time.' },
          ] },
        ] },
        { title: 'Reformula las condiciones · Rephrase the conditions', blocks: [
          { kind: 'rewrite', title: 'Cambia el nexo · Change the connector', items: [
            { prompt: 'Si no llueve, la inauguración será en el patio.', instruction: 'Reescribe con «a no ser que». Empieza: «La inauguración será en el patio…».', accept: ['La inauguración será en el patio, a no ser que llueva', 'La inauguración será en el patio a no ser que llueva'] },
            { prompt: 'Clara da el taller gratis. Su condición: el centro paga los materiales.', instruction: 'Une las dos ideas con «a condición de que». Empieza: «Clara da el taller gratis…».', accept: ['Clara da el taller gratis a condición de que el centro pague los materiales', 'Clara da el taller gratis a condición de que el centro le pague los materiales', 'Clara da el taller gratis, a condición de que el centro pague los materiales'] },
            { prompt: 'Rebeca expondría en La Estación. Su única condición: tener la vitrina central para sus piezas.', instruction: 'Une con «con tal de que» o «con tal de». Empieza: «Rebeca expondría en La Estación…».', accept: ['Rebeca expondría en La Estación con tal de que le dieran la vitrina central', 'Rebeca expondría en La Estación con tal de que le dejaran la vitrina central', 'Rebeca expondría en La Estación con tal de que le dieran la vitrina central para sus piezas', 'Rebeca expondría en La Estación con tal de que le dejaran la vitrina central para sus piezas', 'Rebeca expondría en La Estación con tal de que le diesen la vitrina central', 'Rebeca expondría en La Estación con tal de que le dejasen la vitrina central', 'Rebeca expondría en La Estación con tal de tener la vitrina central', 'Rebeca expondría en La Estación con tal de tener la vitrina central para sus piezas'] },
            { prompt: 'Si hay un apagón durante la inauguración, encendemos las lámparas de emergencia.', instruction: 'Reescribe con «en caso de que». Empieza: «En caso de que…».', accept: ['En caso de que haya un apagón durante la inauguración, encendemos las lámparas de emergencia', 'En caso de que haya un apagón durante la inauguración, encenderemos las lámparas de emergencia', 'En caso de que haya un apagón durante la inauguración, se encienden las lámparas de emergencia'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno negocia contigo el precio de algo que vende (una bici, un sofá): pone un requisito, una excepción y un plan B con tres nexos distintos.' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'El mensaje de Hugo', coach: 'Primero la idea, después las condiciones. Gist first, then the conditions.',
      steps: [
        { title: 'Un mensaje de voz · A voicemail', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general. Segunda escucha: tu alumno anota cada condición y su nexo. Después, las preguntas.', self: 'Escucha una vez para la idea general y otra vez para anotar cada condición con su nexo. Hugo es mexicano y le habla de tú a Clara. (Note each condition and its connector.)' } },
          { kind: 'listen', title: 'El mensaje de Hugo', channel: 'MENSAJE DE VOZ · DE HUGO SALINAS PARA CLARA', src: '/audio/grammar-live/539.mp3',
            before: 'Hugo ya habló con Marcela, la directora, y le deja un mensaje de voz a Clara. ¿Qué crees que acepta el centro y qué condiciones pone? (What do you think the centre accepts, and what conditions does it set?)',
            gist: { prompt: '¿Cuál es la idea principal del mensaje? · What is the main idea?', options: ['El centro cancela la exposición por falta de presupuesto.', 'Hugo le pide a Clara que retrase la exposición.', 'El centro acepta casi todo lo que pidió Clara y pone algunas condiciones.'], answer: 2, why: '«Marcela… acepta casi todo», y después Hugo explica cada condición.', en: 'The centre agrees to nearly everything, with a few conditions of its own.' },
            details: [
              { prompt: '¿Qué tiene que hacer Clara para cobrar la mitad por adelantado?', options: ['Mandar la factura antes del viernes.', 'Firmar el contrato en persona.', 'Dar una charla el jueves.'], answer: 0, why: '«Te pagamos la mitad por adelantado, siempre que nos mandes la factura antes del viernes».', en: 'What must Clara do to get half the fee in advance?' },
              { prompt: '¿En qué caso no tendría Clara la sala pequeña?', options: ['Si el taller no fuera gratuito.', 'Si el festival de cine necesitara más espacio.', 'Si la factura llegara tarde.'], answer: 1, why: '«La sala pequeña es tuya, a no ser que el festival de cine necesite más espacio».', en: 'In what case would Clara not get the small room?' },
              { prompt: '¿Qué pasará si se llena el primer grupo del taller?', options: ['Se cancelará el taller.', 'Clara cobrará más.', 'Abrirán otro grupo el sábado por la mañana.'], answer: 2, why: '«En caso de que se llene el primer grupo, abrimos otro el sábado por la mañana».', en: 'What will happen if the first workshop group fills up?' },
              { prompt: '¿Con qué condición movería Marcela la inauguración al jueves?', options: ['Que Clara invitara al alcalde.', 'Que Clara diera una pequeña charla esa noche.', 'Que el festival terminara antes.'], answer: 1, why: '«Marcela me dijo que movería la inauguración al jueves a condición de que dieras una pequeña charla esa noche».', en: 'On what condition would Marcela move the opening to Thursday?' },
              { prompt: '¿Qué es «como vuelvas a mandar las fotos en el último minuto»?', options: ['Una causa: porque mandaste las fotos tarde.', 'Una comparación con el año pasado.', 'Un aviso en broma: si lo vuelves a hacer, habrá consecuencias.'], answer: 2, why: 'Como + subjuntivo (vuelvas) al principio de la frase: un aviso. Hugo aclara después: «Es broma».', en: 'What is “como vuelvas a mandar las fotos en el último minuto”?' },
            ],
            transcript: 'Hola, Clara, soy Hugo, de La Estación. Ya hablé con Marcela y te tengo buenas noticias: acepta casi todo. Te pagamos la mitad por adelantado, [[siempre que nos mandes|blue]] la factura antes del viernes; si llega más tarde, administración ya no la procesa este mes. La sala pequeña es tuya, [[a no ser que el festival de cine necesite|orange]] más espacio, cosa que dudo mucho. Con el taller no hay ningún problema, [[con tal de que sea|blue]] gratuito y para menores de veinticinco años, porque así lo pide la beca. [[En caso de que se llene|teal]] el primer grupo, abrimos otro el sábado por la mañana. Ah, y Marcela me dijo que movería la inauguración al jueves [[a condición de que dieras|blue]] una pequeña charla esa noche. Piénsalo. Y un aviso de amigo: [[como vuelvas a mandar|teal]] las fotos en el último minuto, como el año pasado, cuelgo yo las etiquetas al revés. Es broma. Llámame cuando puedas, [[salvo que estés|orange]] en plena sesión; en ese caso, mándame un mensaje y te llamo yo. Un abrazo.',
            reply: { teacher: 'Tú eres Hugo. Tu alumno es Clara y le responde con otro mensaje de voz: acepta dos condiciones, pone una condición propia y prevé un problema («en caso de que…»).', self: 'Responde a Hugo como Clara, en voz alta: acepta dos condiciones, añade una tuya y prevé un posible problema. (Reply to Hugo as Clara.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Negociar con condiciones', coach: 'Pon condiciones con el matiz justo. Set conditions with the right nuance.',
      steps: [
        { title: 'Requisitos, excepciones y planes B · Requirements, exceptions and plan Bs', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas y tu alumno responde con ejemplos reales o inventados. Si usa indicativo tras un nexo condicional, tú repites la frase con la forma correcta y sigues con la repregunta.', self: 'Lee cada pregunta y responde en voz alta. Antes de hablar, decide qué tipo de condición pones: requisito, excepción, caso previsto o aviso. (Decide the kind of condition first.)' } },
          { kind: 'talk', cards: [
            { q: '¿Con qué condiciones aceptarías un trabajo en otra ciudad? · On what conditions would you take a job in another city?', followUps: ['¿Qué no aceptarías nunca?', '¿En qué caso dirías que no aunque te pagaran más?'], phrases: ['Lo aceptaría [[siempre que pudiera|blue]]…', '…[[con tal de que me pagaran|blue]]…', '…[[a no ser que tuviera|orange]] que…'], hint: 'Con «aceptaría» (condicional), imperfecto de subjuntivo tras el nexo.', example: 'Lo aceptaría siempre que pudiera trabajar dos días desde casa, y con tal de que me pagaran la mudanza. Eso sí, diría que no a no ser que tuviera un contrato indefinido.', next: 'Ahora, algo tuyo que prestas.' },
            { q: 'Un amigo te pide tu casa (o tu coche) durante un mes. ¿Qué condiciones le pones? · A friend wants to borrow your home or car for a month. Your conditions?', followUps: ['¿Y si rompe algo?', '¿Hay algo que no puede hacer de ninguna manera?'], phrases: ['Te la dejo [[a condición de que|blue]]…', '[[En caso de que|teal]] se rompa algo, …', 'Puedes invitar a gente, [[salvo que|orange]]…'], hint: 'Verbo principal en presente o imperativo → presente de subjuntivo.', example: 'Te dejo mi casa a condición de que riegues las plantas. En caso de que se rompa algo, me avisas enseguida. Puedes invitar a amigos, salvo que sea entre semana y muy tarde: los vecinos madrugan.', next: 'Ahora, un evento al aire libre.' },
            { q: 'Organizas una fiesta o un evento al aire libre. ¿Qué prevés? · You are planning an outdoor event. What do you plan for?', followUps: ['¿Qué llevas «por si acaso»?', '¿Qué haces si viene menos gente?'], phrases: ['[[En caso de que llueva|teal]], …', 'Llevo… [[por si hace|teal]] frío.', 'Empezamos a las seis, [[a menos que|orange]]…'], hint: '«En caso de que» + subjuntivo prevé un caso; «por si» + indicativo es una precaución.', example: 'En caso de que llueva, la fiesta será en el garaje de mi hermano. Llevo mantas por si hace frío, y empezamos a las seis, a menos que el grupo de música llegue tarde.' },
            { q: 'Tus costumbres y sus excepciones: ¿qué haces siempre, salvo en un caso? · Your habits and their exceptions.', followUps: ['¿Y qué hacías siempre que podías de niño?', '¿Qué excepción te cuesta más?'], phrases: ['[[Siempre que puedo|neutral]], …', 'Voy en bici, [[a no ser que|orange]]…', 'Nunca trabajo los domingos, [[salvo que|orange]]…'], hint: 'Costumbre: siempre que + indicativo. Excepción: a no ser que / salvo que + subjuntivo.', example: 'Siempre que puedo, voy a la oficina en bici, a no ser que llueva mucho. Y nunca trabajo los domingos, salvo que haya una entrega urgente.' },
            { q: 'Avisa a un compañero de piso, medio en broma, y después escribe la misma norma para el reglamento de la casa. · Warn a flatmate jokingly, then write the same rule formally.', followUps: ['¿Qué palabra cambia en la versión formal?', '¿Cómo suena «como» en un reglamento?'], phrases: ['[[Como vuelvas a dejar|teal]]…, …', '[[En caso de que|teal]] un inquilino…, deberá…'], hint: '«Como + subjuntivo» es coloquial; en un texto formal, «en caso de que».', example: 'Al compañero: «Como vuelvas a dejar los platos sucios, te los pongo en la cama». En el reglamento: «En caso de que un inquilino deje platos sucios, deberá lavarlos antes de las diez de la noche».', teacher: 'Tú escuchas las dos versiones y dices qué cambia: el nexo, el sujeto y el tono.' },
            { q: 'Eres Clara y negocias con Hugo el precio de un segundo taller. · You are Clara: negotiate the price of a second workshop with Hugo.', followUps: ['¿Qué cedes tú?', '¿Qué pasa si Marcela dice que no?'], phrases: ['Lo doy [[siempre y cuando|blue]]…', 'Bajaría el precio [[con tal de que|blue]]…', '[[De no ser posible|teal]], …'], hint: 'Combina un requisito firme, una concesión con condicional e imperfecto de subjuntivo y un plan B.', example: 'Lo doy siempre y cuando sea el sábado por la mañana. Bajaría el precio con tal de que el centro pagara los materiales. De no ser posible, prefiero dejarlo para abril.', teacher: 'Tú eres Hugo y pones objeciones; tu alumno responde con un nexo distinto cada vez.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno hace las preguntas y tú respondes con algún error a propósito («siempre que me pagan», «en caso de que llueve», «a menos de que»). Tu alumno lo detecta y lo corrige.', self: 'Ahora haz tú las preguntas en voz alta y respóndelas pensando en otra persona: un compañero de trabajo, un familiar. (Now ask the questions and answer for someone else.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Acepto, con condiciones', coach: 'Un correo formal y claro. A clear, formal email.',
      steps: [
        { title: 'Respuesta a la directora · Reply to the director', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos cada nexo: ¿qué tipo de condición pone y qué tiempo del subjuntivo lleva? Después tu alumno lee el correo en voz alta.', self: 'Escribe el correo y toca «Revisar mi texto». Después repasa cada nexo: ¿qué condición pone y qué tiempo lleva? (Check each connector and its tense.)' } },
          { kind: 'write', title: 'Acepto, con condiciones · I accept, with conditions', situation: 'Marcela Duarte, directora del Centro Cultural La Estación, te ofrece exponer en marzo y dar un taller gratuito. Escríbele un correo formal (de usted) para aceptar la propuesta y dejar claras tus condiciones. (Write a formal email to the director accepting the offer and setting out your conditions.)', task: [
            'Agradece la propuesta y acepta con un requisito: siempre que, siempre y cuando o a condición de que.',
            'Pon una excepción con a no ser que, a menos que o salvo que.',
            'Prevé un problema con en caso de que y di qué harías.',
            'Haz una propuesta prudente con condicional + nexo + imperfecto de subjuntivo (aceptaría… con tal de que…).',
            'Usa un registro formal: nada de «como» + subjuntivo. (Keep it formal.)',
          ], starters: ['Estimada Marcela:', 'Le agradezco mucho…', 'Acepto con mucho gusto…, siempre que…', 'En cuanto al taller, …', 'En caso de que…,', 'Respecto al pago, aceptaría…', 'Quedo a la espera de su respuesta.', 'Un cordial saludo,'],
            words: ['siempre que', 'siempre y cuando', 'a condición de que', 'con tal de que', 'a no ser que', 'salvo que', 'en caso de que', 'de ser así', 'por adelantado', 'con antelación'],
            model: 'Estimada Marcela: Le agradezco mucho la propuesta de exponer en La Estación. Acepto con mucho gusto las fechas de marzo, [[siempre que las copias puedan|blue]] entregarse el día quince, ya que el laboratorio necesita dos semanas. En cuanto al taller, lo impartiré de forma gratuita, [[a condición de que el centro se encargue|blue]] de la difusión y de las inscripciones. [[En caso de que se inscriban|teal]] más de veinte personas, estaría dispuesta a abrir un segundo grupo el sábado. Respecto al pago, aceptaría recibir la mitad por adelantado [[con tal de que el resto se abonara|blue]] el día de la inauguración. Por último, le confirmo que asistiré a la reunión del día 3, [[a no ser que surja|orange]] algún imprevisto; [[de ser así|teal]], se lo comunicaré con antelación. Quedo a la espera de su respuesta. Un cordial saludo, Clara Montes',
            minWords: 120,
            checks: [
              { label: 'Un requisito: siempre que, siempre y cuando, con tal de que o a condición de que', pattern: '(?<!\\p{L})(?:siempre\\s+que|siempre\\s+y\\s+cuando|con\\s+tal\\s+(?:de\\s+)?que|a\\s+condición\\s+de\\s+que)(?!\\p{L})', tip: 'Acepta con un requisito: «Acepto las fechas de marzo, siempre que…».' },
              { label: 'Una excepción: a no ser que, a menos que, salvo que o excepto que', pattern: '(?<!\\p{L})(?:a\\s+no\\s+ser\\s+que|a\\s+menos\\s+que|salvo\\s+que|excepto\\s+que)(?!\\p{L})', tip: 'Nombra el caso que lo impediría: «…a no ser que surja algún imprevisto».' },
              { label: 'Un caso previsto: en caso de que', pattern: '(?<!\\p{L})en\\s+caso\\s+de\\s+que(?!\\p{L})', tip: 'Prevé un problema: «En caso de que se inscriban más de veinte personas…».' },
              { label: 'Condicional + nexo + imperfecto de subjuntivo', pattern: '(?<!\\p{L})\\p{L}+(?:ría|rías|ríamos|rían)(?!\\p{L})[^.;]*?(?<!\\p{L})(?:siempre\\s+que|siempre\\s+y\\s+cuando|con\\s+tal\\s+(?:de\\s+)?que|a\\s+condición\\s+de\\s+que|a\\s+no\\s+ser\\s+que|a\\s+menos\\s+que|salvo\\s+que|en\\s+caso\\s+de\\s+que)\\s+(?:\\p{L}+\\s+){0,4}?\\p{L}+(?:ara|aras|áramos|aran|iera|ieras|iéramos|ieran|ase|ases|asen|iese|ieses|iesen)(?!\\p{L})', tip: 'Haz una propuesta prudente: «Aceptaría… con tal de que el resto se abonara…».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})a\\s+menos\\s+de\\s+que(?!\\p{L})', why: 'La forma correcta es «a menos **que**», sin «de».' },
              { pattern: '(?<!\\p{L})en\\s+caso\\s+de\\s+que\\s+(?:\\p{L}+\\s+){0,2}?(?:hay|es|está|puede|tiene|son|están|pueden|tienen|habrá|será|podrá)(?!\\p{L})', why: '«En caso de que» va con subjuntivo: «en caso de que **haya**», «**sea**», «**pueda**».' },
              { pattern: '(?<!\\p{L})(?:siempre\\s+y\\s+cuando|con\\s+tal\\s+(?:de\\s+)?que|a\\s+condición\\s+de\\s+que|a\\s+no\\s+ser\\s+que|a\\s+menos\\s+que)\\s+(?:\\p{L}+\\s+){0,2}?\\p{L}+(?:ré|rás|rá|remos|rán)(?!\\p{L})', why: 'Tras estos nexos no va el futuro: «con tal de que **paguen**», no «pagarán».' },
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
            { tone: 'blue', label: 'REQUISITO', formula: 'siempre que · siempre y cuando · con tal de que · a condición de que + subjuntivo', example: 'Expongo en marzo siempre que me paguen el viaje.', caption: '= solo si; «a condición de que», formal', en: 'a necessary condition: as long as, provided that; a condición de que sounds contractual' },
            { tone: 'orange', label: 'EXCEPCIÓN', formula: 'a no ser que · a menos que · salvo que · excepto que + subjuntivo', example: 'Las copias estarán listas, a no ser que el laboratorio se retrase.', caption: '= si no; sin otro «no»; «a menos que», sin «de»', en: 'unless: the one case that would stop the plan; the negation is already inside the connector' },
            { tone: 'teal', label: 'CASO PREVISTO Y AVISO', formula: 'en caso de que + subjuntivo · por si + indicativo · como + subjuntivo', example: 'En caso de que llueva, la inauguración será en el vestíbulo.', caption: 'plan B · precaución · aviso coloquial', en: 'contingency, precaution, or a colloquial warning; de + infinitive is the compact formal option' },
            { tone: 'neutral', label: 'NO ES CONDICIÓN', formula: 'siempre que · como · salvo que + indicativo', example: 'Siempre que expongo aquí, viene mucha gente.', caption: 'cada vez que · porque · excepto el hecho de que', en: 'with the indicative these connectors state facts: whenever, since, except that' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Pregúntate primero **qué tipo de condición** pones: requisito, excepción, caso previsto o aviso. Con valor condicional, todos estos nexos llevan **subjuntivo**, nunca futuro ni condicional. Después mira el verbo principal: presente, futuro o imperativo → **presente de subjuntivo**; condicional o pasado cerrado → **imperfecto de subjuntivo**. Si el nexo cuenta un hecho (siempre que = cada vez que, como = porque, salvo que = excepto que), va en indicativo.', en: 'First decide what kind of condition it is. As conditions, all these connectors take the subjunctive, never the future or the conditional. Then check the main verb: present, future or imperative calls for the present subjunctive; a conditional or a completed past calls for the imperfect. When the connector states a fact, use the indicative.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'Te presto mi cámara ___ me la devuelvas el lunes.', options: ['a menos que', 'por si', 'siempre que'], answer: 2, why: 'Devolverla el lunes es el requisito: «siempre que» + subjuntivo.', en: 'I’ll lend you my camera as long as you give it back on Monday.' },
            { prompt: 'De niña, mi vecina me regaba las plantas siempre que ___ de vacaciones.', options: ['me vaya', 'me iré', 'me iba'], answer: 2, why: 'Costumbre pasada y real: «siempre que» = cada vez que, con indicativo (me iba).', en: 'When I was a child, my neighbour watered my plants whenever I went on holiday.' },
            { prompt: 'Me llevo el paraguas ___ llueve por la tarde.', options: ['por si', 'a condición de que', 'en caso de que'], answer: 0, why: 'Precaución con indicativo (llueve): «por si».', en: 'I’m taking my umbrella in case it rains in the afternoon.' },
            { prompt: 'Al final firmamos el contrato a condición de que nos ___ el precio un diez por ciento.', options: ['bajarían', 'bajen', 'bajaran'], answer: 2, why: 'Pasado cerrado en la principal (firmamos): imperfecto de subjuntivo, bajaran.', en: 'In the end we signed the contract on condition that they lowered the price by ten per cent.' },
            { prompt: '___ no apagues el móvil en el cine, te van a llamar la atención.', options: ['Siempre que', 'Como', 'Salvo que'], answer: 1, why: 'Un aviso al principio de la frase: «como» + subjuntivo (coloquial).', en: 'If you don’t switch off your phone in the cinema, someone’s going to tell you off.' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Ahora, otro acuerdo. Now, another agreement.', blocks: [
          { kind: 'lead', text: 'Sergio alquila una habitación de su casa a Marta, una estudiante de Medicina. Escribe las condiciones del acuerdo.', en: 'Sergio is renting a room in his flat to Marta, a medical student. Write the terms of their agreement.' },
          { kind: 'rewrite', title: 'Sergio y Marta · Sergio and Marta', items: [
            { prompt: 'Marta puede tener un gato. La condición: que el gato no salga al balcón.', instruction: 'Usa «siempre y cuando». Empieza: «Puedes tener un gato…».', accept: ['Puedes tener un gato siempre y cuando no salga al balcón', 'Puedes tener un gato siempre y cuando el gato no salga al balcón'] },
            { prompt: 'Si no avisas antes, no puedes traer invitados a dormir.', instruction: 'Reescribe con «a menos que». Empieza: «No puedes traer invitados a dormir…».', accept: ['No puedes traer invitados a dormir a menos que avises antes', 'No puedes traer invitados a dormir a menos que me avises antes', 'No puedes traer invitados a dormir a menos que avises con antelación', 'No puedes traer invitados a dormir a menos que me avises con antelación'] },
            { prompt: 'Sergio, el año pasado, a otra inquilina: «Te bajo el alquiler si te quedas todo el año».', instruction: 'Cuéntalo en pasado con «con tal de que». Empieza: «Sergio le bajó el alquiler…».', accept: ['Sergio le bajó el alquiler con tal de que se quedara todo el año', 'Sergio le bajó el alquiler con tal de que se quedase todo el año'] },
          ] },
        ] },
        { title: 'Ampliación · Registro formal y formas compactas · Formal register and compact forms', mascot: '/brand/mascot/portrait.webp', coach: 'Opcional. Optional.', blocks: [
          { kind: 'lead', text: 'Para estudiantes fuertes o si queda tiempo: elige la forma adecuada al registro y reconoce las condiciones compactas.', en: 'For strong students or spare time: choose the form that suits the register and recognise compact conditions.' },
          { kind: 'choice', title: '¿Qué forma encaja? · Which form fits?', items: [
            { prompt: 'Correo formal del centro: «___ recibir respuesta antes del viernes, entenderemos que no acepta las condiciones».', options: ['A no ser', 'Como no', 'De no'], answer: 2, why: 'De + infinitivo es una condición compacta y formal: de no recibir = si no recibimos. «Como no» pediría un verbo conjugado y sonaría coloquial.', en: 'Formal email: “Should we not receive a reply before Friday, we will assume you do not accept the terms.”' },
            { prompt: 'Un compañero de piso dice: «Como te comas mi yogur otra vez, cambio la cerradura». ¿Qué versión encaja en un reglamento escrito?', options: ['En caso de que un inquilino consuma alimentos ajenos, deberá reponerlos.', 'Como un inquilino se coma alimentos ajenos, se cambiará la cerradura.', 'Siempre que un inquilino consume alimentos ajenos, deberá reponerlos.'], answer: 0, why: '«En caso de que» + subjuntivo es la opción formal. «Como + subjuntivo» es coloquial, y «siempre que» + indicativo hablaría de una costumbre.', en: 'Which version suits written house rules?' },
            { prompt: 'Clara acepta cualquier horario ___ exponer en La Estación.', options: ['con tal de que', 'siempre que', 'con tal de'], answer: 2, why: 'El sujeto es el mismo (Clara acepta, Clara expone): «con tal de» + infinitivo.', en: 'Clara will accept any schedule so long as she gets to exhibit at La Estación.' },
            { prompt: '¿Qué frase cuenta un hecho y NO pone una condición?', options: ['Todo salió bien, salvo que el proyector falló.', 'Todo saldría bien, salvo que el proyector fallara.', 'Todo saldrá bien, salvo que el proyector falle.'], answer: 0, why: 'Salvo que + indicativo (falló) presenta un hecho real: = excepto que. Con subjuntivo es una excepción posible o hipotética.', en: 'Which sentence states a fact rather than a condition?' },
          ] },
          { kind: 'teacher', text: 'Paso opcional: solo si queda tiempo o para estudiantes fuertes. Tu alumno transforma un aviso coloquial («Como no me pagues…») en una cláusula formal («En caso de que no se abone…» o «De no abonarse…»).' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 136 · Como si + imperfecto / pluscuamperfecto subjuntivo', text: 'Ya pones condiciones con matiz: requisitos, excepciones y casos previstos, con el subjuntivo y la correlación temporal adecuados. En la clase 136 aparece otro nexo con subjuntivo, «como si», que compara con algo irreal: «Habla **como si fuera** el jefe». Es el paso natural: el mismo imperfecto y pluscuamperfecto de subjuntivo, ahora para comparar con lo que no es verdad.', en: 'You can now set conditions with nuance: requirements, exceptions and contingencies, with the right subjunctive and tense agreement. Class 136 brings another subjunctive connector, como si, which compares with something unreal: “He talks as if he were the boss.” It is the natural next step: the same imperfect and pluperfect subjunctive, now for comparisons with what is not true.', href: '/gramatica/como-si-imperfecto-pluscuamperfecto-subjuntivo', label: 'Ir a la clase 136' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Con qué condiciones cambiarías de trabajo, y en qué caso dirías que no?». Respuesta esperada: un requisito con imperfecto de subjuntivo y una excepción. Tarea: el correo de Escribir con condiciones reales.' },
        ] },
      ],
    },
  ],
};
