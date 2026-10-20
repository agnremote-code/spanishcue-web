import type { LiveLesson } from '../types';

/**
 * Lesson 391 · B1 · Valoraciones: es importante que, es bueno que (course unit G091).
 * Builds on G088 (present subjunctive forms), G089 (wishes) and G090
 * (recommendations). Content: ser / estar / parecer + adjective or noun + que
 * + present subjunctive to judge a plan or a fact (es importante que, es
 * necesario que, es mejor que, es normal que, es una pena que, está bien que,
 * me parece bien / genial que, hace falta que); the same expressions + infinitive
 * for general statements with no specific person (es importante dormir); and
 * the contrast with certainty expressions + indicative (es verdad que, está
 * claro que, es obvio que, es evidente que), plus me parece que (opinion,
 * indicative) vs me parece bien que (judgement, subjunctive). Negated
 * certainty and doubt (no es verdad que, es posible que) are left for G093–G094;
 * emotions (me alegra que) for G092.
 * Scene: the hiking club «Pasos Largos» prepares the Cascades route on Saturday.
 * Lorena Vidal, the coordinator, talks to Óscar, a new member (tú). In the
 * voice message Lorena (Colombian voice, ustedes) briefs the whole group.
 * Instructions use tú.
 */
export const lesson: LiveLesson = {
  id: 391,
  level: 'B1',
  title: 'Valoraciones: es importante que, es bueno que',
  subtitle: 'Valorar planes y hechos con «es importante que» + subjuntivo, hablar en general con infinitivo y afirmar con «está claro que».',
  legend: [
    { tone: 'teal', label: 'VALORACIÓN · es importante / mejor / una pena que + subjuntivo (you judge it)' },
    { tone: 'violet', label: 'EN GENERAL · es importante + infinitivo (no specific person)' },
    { tone: 'orange', label: 'CERTEZA · es verdad / está claro que + indicativo (you state a fact)' },
  ],
  optionNotes: {
    'a caminar': 'Después de «es necesario» el infinitivo va directo, sin preposición: es necesario caminar.',
    'de llevar': 'Después de «es importante» el infinitivo va directo, sin «de»: es importante llevar.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Valorar o afirmar', coach: '¿Valoras o afirmas? Are you judging or stating?',
      steps: [
        { title: 'La primera ruta · The first route', blocks: [
          { kind: 'lead', text: 'Lorena Vidal coordina el club de senderismo Pasos Largos. El sábado hacen la Ruta de las Cascadas, y Óscar, un socio nuevo, va por primera vez. Lorena da consejos y opina: «**Es importante que lleves** botas de montaña». También afirma hechos: «**Es verdad que** la ruta **es** larga». Hoy aprendes a valorar y a afirmar, y a elegir el modo correcto.', en: 'Lorena Vidal runs the Pasos Largos hiking club. On Saturday they are doing the Cascades route, and Óscar, a new member, is going for the first time. Lorena gives advice and gives her view: “It’s important that you wear hiking boots.” She also states facts: “It’s true that the route is long.” Today you learn to judge and to state, and to choose the right mood.' },
          { kind: 'guide', text: { teacher: 'Tú lees las dos frases de Lorena y tu alumno repite. Después tu alumno dice en cuál Lorena da su valoración y en cuál dice algo que es un hecho.', self: 'Lee las dos frases en voz alta. ¿En cuál Lorena valora? ¿En cuál afirma un hecho? (Which one judges, which one states a fact?)' } },
          { kind: 'compare', title: 'Dos frases de Lorena · Two sentences from Lorena', columns: [
            { tone: 'teal', label: 'VALORACIÓN + subjuntivo', sentence: '[[Es importante que lleves|teal]] botas de montaña.', idea: 'Lorena no informa: dice qué le parece importante. Después de «que», subjuntivo.', en: 'It’s important that you wear hiking boots. (her judgement)' },
            { tone: 'orange', label: 'CERTEZA + indicativo', sentence: '[[Es verdad que la ruta es|orange]] larga.', idea: 'Lorena afirma un hecho: la ruta es larga. Después de «que», indicativo.', en: 'It’s true that the route is long. (a fact she states)' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'En «Es importante que lleves botas», Lorena…', options: ['pregunta si Óscar tiene botas.', 'informa de que Óscar ya lleva botas.', 'valora: le parece importante.'], answer: 2, why: '«Es importante que» valora una acción. Por eso «lleves» va en subjuntivo.', en: 'In “Es importante que lleves botas”, Lorena…' },
            { prompt: 'En «Es verdad que la ruta es larga», el verbo «es» está en…', options: ['subjuntivo, porque hay «que».', 'infinitivo.', 'indicativo, porque Lorena afirma un hecho.'], answer: 2, why: '«Es verdad que» presenta algo como cierto: indicativo. La palabra «que» no decide el modo.', en: 'In “Es verdad que la ruta es larga”, the verb “es” is in…' },
          ] },
        ] },
        { title: 'Valorar: que + subjuntivo · Judging: que + subjunctive', mascot: '/brand/mascot/studying.webp', coach: 'Valoras, no informas. You judge, you don’t report.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'VALORACIÓN + QUE + SUBJUNTIVO', question: '¿Qué te parece? ¿Es importante, mejor, normal, una pena?', en: 'What do you think of it? Is it important, better, normal, a shame?', formula: ['es + importante / necesario / mejor / bueno / normal + que + subjuntivo', 'es + una pena / una buena idea + que + subjuntivo', 'está bien / me parece bien / me parece genial + que + subjuntivo'],
            meaning: 'Con estas expresiones das tu **valoración** sobre una acción de otra persona o del grupo. El verbo que va después de «que» está en **presente de subjuntivo** (las formas de la clase 088). Ojo: también cuando la acción es real. «Es una pena que Nuria no pueda venir»: es un hecho, pero tú lo valoras.',
            examples: [
              { es: '[[Es necesario que todos traigan|teal]] un impermeable.', en: 'Everyone needs to bring a raincoat.' },
              { es: '[[Es mejor que salgamos|teal]] a las siete.', en: 'It’s better if we leave at seven.' },
              { es: '[[Es una pena que Nuria no pueda|teal]] venir el sábado.', en: 'It’s a shame that Nuria can’t come on Saturday.' },
              { es: '[[Me parece bien que vengas|teal]] con nosotros.', en: 'I think it’s good that you’re coming with us.' },
            ],
            note: '**Hace falta que** = es necesario que: «Hace falta que alguien lleve el botiquín» (someone needs to bring the first-aid kit).' },
          { kind: 'table', title: 'Recuerda las formas · Remember the forms (clase 088)', head: ['Infinitivo', 'tú', 'él / ella / usted', 'nosotros', 'ellos / ustedes'], rows: [
            ['llevar', 'lleves', 'lleve', 'llevemos', '**lleven**'],
            ['traer (traigo)', 'traigas', 'traiga', 'traigamos', '**traigan**'],
            ['salir (salgo)', 'salgas', 'salga', '**salgamos**', 'salgan'],
            ['venir (vengo)', '**vengas**', 'venga', 'vengamos', 'vengan'],
            ['poder', 'puedas', '**pueda**', 'podamos', 'puedan'],
            ['ser · estar · ir', 'seas · estés · vayas', 'sea · esté · vaya', 'seamos · estemos · vayamos', 'sean · estén · vayan'],
          ], note: 'La raíz sale de la forma «yo» del presente: traigo → traig- → traigan; salgo → salg- → salgamos.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Es necesario que todos ___ agua.', options: ['llevar', 'llevan', 'lleven'], answer: 2, why: '«Es necesario que» + otra persona concreta (todos): subjuntivo, lleven.', en: 'Everyone needs to bring water.' },
            { prompt: 'Es una pena que Nuria no ___ venir.', options: ['pueda', 'puede', 'poder'], answer: 0, why: 'Es un hecho real, pero Lorena lo valora («es una pena»): subjuntivo, pueda.', en: 'It’s a shame that Nuria can’t come.' },
            { prompt: 'Me parece genial que Óscar ___ al club.', options: ['viene', 'vendrá', 'venga'], answer: 2, why: '«Me parece genial que» es una valoración: subjuntivo, venga.', en: 'I think it’s great that Óscar is coming to the club.' },
          ] },
        ] },
        { title: 'En general: infinitivo · In general: infinitive', mascot: '/brand/mascot/standing.webp', coach: '¿Para todos o para alguien? For everyone or for someone?', blocks: [
          { kind: 'concept', tone: 'violet', label: 'EN GENERAL · INFINITIVO', question: '¿Hablas de cualquier persona, en general?', en: 'Are you talking about anyone, in general?', formula: ['es importante / necesario / mejor / bueno + infinitivo', 'sin «que», sin «de», sin «a»'],
            meaning: 'Si no hablas de una persona concreta sino de lo que vale **para todo el mundo**, usa la misma expresión + **infinitivo**. Cuando aparece una persona concreta (tú, Óscar, todos, nosotros), usa **que + subjuntivo**.',
            examples: [
              { es: 'En la montaña [[es importante beber|violet]] mucha agua.', en: 'In the mountains it’s important to drink plenty of water.' },
              { es: '[[Es mejor no caminar|violet]] solo por la noche.', en: 'It’s better not to walk alone at night.' },
              { es: '[[Es necesario mirar|violet]] el tiempo antes de salir.', en: 'You need to check the weather before setting off.' },
            ] },
          { kind: 'table', title: 'General o concreto · General or specific', head: ['EN GENERAL (infinitivo)', 'PERSONA CONCRETA (que + subjuntivo)'], rows: [
            ['[[Es importante dormir|violet]] bien antes de una ruta. (It’s important to sleep well.)', '[[Es importante que duermas|teal]] bien el viernes. (It’s important that you sleep well on Friday.)'],
            ['[[Es mejor salir|violet]] temprano en verano. (It’s better to leave early in summer.)', '[[Es mejor que salgamos|teal]] a las siete. (It’s better if we leave at seven.)'],
            ['[[Es necesario llevar|violet]] botas. (You need boots.)', '[[Es necesario que Óscar lleve|teal]] botas. (Óscar needs to wear boots.)'],
          ], note: 'En la clase 095 ves el mismo contraste con verbos como querer: «quiero salir» / «quiero que salgas».' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Regla del club: «En una ruta larga, es bueno ___ cada dos horas».', options: ['que descansamos', 'descansar', 'a descansar'], answer: 1, why: 'Es una regla general, para cualquier persona: infinitivo, sin preposición.', en: 'Club rule: “On a long route, it’s good to rest every two hours.”' },
            { prompt: 'Lorena a Óscar: «Es importante que ___ bien el viernes».', options: ['dormir', 'duermes', 'duermas'], answer: 2, why: 'Hay una persona concreta (tú, Óscar): que + subjuntivo, duermas.', en: 'Lorena to Óscar: “It’s important that you sleep well on Friday.”' },
          ] },
        ] },
        { title: 'Valorar o afirmar · Judging or stating', mascot: '/brand/mascot/speaking.webp', coach: 'Verdad, claro, obvio: indicativo.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'CERTEZA + QUE + INDICATIVO', question: '¿Dices que algo es cierto?', en: 'Are you saying something is true?', formula: ['es verdad / es cierto / es obvio / es evidente + que + indicativo', 'está claro + que + indicativo'],
            meaning: 'Estas expresiones no valoran: **afirman** que algo es verdad. Por eso el verbo va en **indicativo**, como en una frase normal.',
            examples: [
              { es: '[[Está claro que el tiempo cambia|orange]] rápido en la montaña.', en: 'Clearly the weather changes fast in the mountains.' },
              { es: '[[Es obvio que Lorena sabe|orange]] mucho de rutas.', en: 'It’s obvious that Lorena knows a lot about routes.' },
              { es: '[[Es cierto que la subida es|orange]] dura.', en: 'It’s true that the climb is hard.' },
            ] },
          { kind: 'decide', title: '¿Infinitivo, subjuntivo o indicativo?', steps: [
            { q: '¿Hablas en general, sin una persona concreta? (Es importante… beber agua)', yes: 'Usa el **infinitivo**: «Es importante beber agua».', no: 'next' },
            { q: '¿Valoras algo: importante, necesario, mejor, normal, una pena, bien? (También cuando es real.)', yes: 'Usa **que + subjuntivo**: «Es una pena que llueva».', no: 'next' },
            { q: '¿Afirmas que algo es verdad: es verdad, está claro, es obvio, es evidente?', yes: 'Usa **que + indicativo**: «Está claro que llueve».', no: 'Lee la frase otra vez: ¿valoras o afirmas?' },
          ] },
          { kind: 'tip', icon: '💡', title: '«Me parece que» y «me parece bien que»', text: '«**Me parece que** Óscar **viene**» es una opinión sobre un hecho (I think Óscar is coming): indicativo. «**Me parece bien que** Óscar **venga**» es una valoración (I think it’s good that he’s coming): subjuntivo. Una palabra cambia todo: **bien**, **mal**, **genial**, **normal**.', en: '“Me parece que” = I think (an opinion about a fact): indicative. “Me parece bien que” = I think it’s good that (a judgement): subjunctive.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Está claro que la ruta ___ preciosa.', options: ['es', 'ser', 'sea'], answer: 0, why: '«Está claro que» afirma un hecho: indicativo, es.', en: 'Clearly the route is beautiful.' },
            { prompt: 'Es normal que Óscar ___ un poco nervioso.', options: ['esté', 'estar', 'está'], answer: 0, why: '«Es normal que» valora: subjuntivo, esté.', en: 'It’s normal for Óscar to be a little nervous.' },
            { prompt: 'Me parece que el autobús ___ a las siete.', options: ['salir', 'sale', 'salga'], answer: 1, why: '«Me parece que» (sin bien/mal) es una opinión sobre un hecho: indicativo, sale.', en: 'I think the bus leaves at seven.' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: '¿Valoras, afirmas o hablas en general?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la frase con el error y tu alumno explica qué falla: ¿es una valoración, una certeza o algo general? Después aparece la corrección.', self: 'Lee cada frase y piensa: ¿valoración, certeza o algo general? Toca para ver la corrección. (Judgement, certainty or general?)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Es importante que todos llevan agua.', right: 'Es importante que todos lleven agua.', why: '«Es importante que» valora: el verbo va en subjuntivo, lleven. (A judgement needs the subjunctive.)' },
            { wrong: 'Es verdad que la ruta sea larga.', right: 'Es verdad que la ruta es larga.', why: '«Es verdad que» afirma: indicativo, es. (Stating a fact: indicative.)' },
            { wrong: 'Es necesario que llevar botas.', right: 'Es necesario llevar botas. / Es necesario que lleves botas.', why: 'O infinitivo sin «que» (en general) o «que» + subjuntivo (persona concreta). Nunca «que» + infinitivo.' },
            { wrong: 'Es importante de dormir bien.', right: 'Es importante dormir bien.', why: 'El infinitivo va directo, sin «de» ni «a». (No preposition: «It’s important to» = es importante + infinitive.)' },
            { wrong: 'Me parece bien que vienes.', right: 'Me parece bien que vengas.', why: 'Con «bien» es una valoración: subjuntivo. Sin «bien» («me parece que vienes») es una opinión: indicativo.' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'Con «no», más adelante · With “no”, later on', text: 'Hoy usas estas expresiones en **afirmativo**. Frases como «no es verdad que…» o «es posible que…» funcionan de otra manera: las ves en las clases 093 y 094.', en: 'Today you use these expressions in the affirmative. Sentences like “no es verdad que…” or “es posible que…” work differently: you will see them in classes 093 and 094.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Es obvio que Óscar ___ ganas de ir.', options: ['tener', 'tiene', 'tenga'], answer: 1, why: '«Es obvio que» afirma un hecho: indicativo, tiene.', en: 'It’s obvious that Óscar is keen to go.' },
            { prompt: 'Es mejor que ___ juntos desde la plaza.', options: ['salgamos', 'salir', 'salimos'], answer: 0, why: '«Es mejor que» valora el plan del grupo (nosotros): subjuntivo, salgamos.', en: 'It’s better if we leave together from the square.' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno dice tres frases sobre su próximo fin de semana: una valoración («Es importante que…»), una regla general («Es bueno + infinitivo») y una certeza («Está claro que…»).' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'Óscar prepara su primera ruta', coach: 'Toca las expresiones marcadas. Tap the marked expressions.',
      steps: [
        { title: 'En el club · At the club', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Lorena y tu alumno es Óscar. Después tu alumno toca cada expresión marcada y dice: ¿valoración, certeza o algo general?', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada y di: ¿valoración, certeza o algo general? (Judgement, certainty or general?)' } },
          { kind: 'explore', title: 'Mi primera ruta', setting: 'Jueves por la tarde, en el local del club Pasos Largos. Óscar, socio nuevo, habla con Lorena, la coordinadora. Se tratan de tú. (Thursday evening at the hiking club. Óscar, a new member, talks to Lorena, the coordinator.)', lines: [
            { who: 'Óscar', text: 'Hola, Lorena. Soy Óscar, el nuevo. Quiero hacer la ruta del sábado, pero es mi primera vez en la montaña.', en: 'Hi, Lorena. I’m Óscar, the new member. I want to do Saturday’s route, but it’s my first time in the mountains.' },
            { who: 'Lorena', text: '¡Bienvenido! [[Me parece genial que vengas|teal]]. Pero [[es verdad que la ruta es|orange]] un poco dura: son doce kilómetros.', en: 'Welcome! I think it’s great that you’re coming. But it’s true that the route is a bit hard: it’s twelve kilometres.' },
            { who: 'Óscar', text: '¿Doce? Uf. ¿Y qué necesito? ¿[[Es necesario comprar|violet]] botas nuevas?', en: 'Twelve? Phew. And what do I need? Do you have to buy new boots?' },
            { who: 'Lorena', text: '[[No hace falta que sean|teal]] nuevas, pero [[es importante que lleves|teal]] botas de montaña. Con zapatillas, en las piedras mojadas, es fácil resbalar.', en: 'They don’t need to be new, but it’s important that you wear hiking boots. In trainers, on wet stones, it’s easy to slip.' },
            { who: 'Óscar', text: 'Vale. ¿Y la comida? ¿Paramos en algún restaurante?', en: 'OK. And food? Do we stop at a restaurant?' },
            { who: 'Lorena', text: 'No, en el camino no hay nada. [[Es mejor que traigas|teal]] tu comida y dos litros de agua.', en: 'No, there’s nothing on the way. It’s better if you bring your own food and two litres of water.' },
            { who: 'Óscar', text: 'Entendido. ¿A qué hora salimos? ¿A las nueve?', en: 'Got it. What time do we leave? At nine?' },
            { who: 'Lorena', text: 'No, a las siete. Ya sé que es temprano, pero en verano [[es mejor salir|violet]] pronto, antes del calor.', en: 'No, at seven. I know it’s early, but in summer it’s better to leave early, before the heat.' },
            { who: 'Óscar', text: '¿Y si llueve? El pronóstico no está muy claro.', en: 'And what if it rains? The forecast isn’t very clear.' },
            { who: 'Lorena', text: 'Mira, [[está claro que el tiempo cambia|orange]] muy rápido allí arriba. Por eso [[es necesario que todos lleven|teal]] un impermeable.', en: 'Look, clearly the weather changes very fast up there. That’s why everyone needs to bring a raincoat.' },
            { who: 'Óscar', text: 'Una última cosa: no conozco a nadie del grupo. ¿Es un problema?', en: 'One last thing: I don’t know anyone in the group. Is that a problem?' },
            { who: 'Lorena', text: '¡Para nada! [[Es normal que no conozcas|teal]] a nadie el primer día. Y [[es obvio que el grupo es|orange]] muy simpático: ya lo vas a ver.', en: 'Not at all! It’s normal not to know anyone on the first day. And the group is obviously very friendly: you’ll see.' },
          ], notes: {
            'Me parece genial que vengas': 'Valoración con **parecer**: me parece genial / bien que + subjuntivo. Venir → vengas.',
            'es verdad que la ruta es': 'Certeza: Lorena afirma un hecho. **Es verdad que** + indicativo: es.',
            'Es necesario comprar': 'Pregunta general (¿hay que comprar?), sin persona concreta: **es necesario + infinitivo**.',
            'No hace falta que sean': '**Hacer falta** = ser necesario. Con «que» + subjuntivo: sean (ser). También en negativo.',
            'es importante que lleves': 'Valoración para una persona concreta (tú): **que + subjuntivo**, lleves.',
            'Es mejor que traigas': 'Valoración: **es mejor que** + subjuntivo. Traer → traigo → traigas.',
            'es mejor salir': 'Regla general para el verano, para cualquier persona: **infinitivo**.',
            'está claro que el tiempo cambia': 'Certeza: **está claro que** + indicativo. Lorena no valora, afirma algo que sabe.',
            'es necesario que todos lleven': 'Valoración para todo el grupo: **que + subjuntivo**, lleven.',
            'Es normal que no conozcas': 'Valoración: **es normal que** + subjuntivo. Conocer → conozco → conozcas.',
            'es obvio que el grupo es': 'Certeza: **es obvio que** + indicativo, es. Compara: «es bueno que el grupo sea simpático» (valoración).',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Óscar tiene que comprar botas nuevas?', options: ['No, puede ir con zapatillas.', 'Sí, es obligatorio.', 'No, pero necesita botas de montaña.'], answer: 2, why: '«No hace falta que sean nuevas, pero es importante que lleves botas de montaña».', en: 'Does Óscar have to buy new boots?' },
            { prompt: '¿Por qué salen a las siete?', options: ['Porque llueve por la tarde.', 'Porque el autobús sale a esa hora.', 'Porque en verano es mejor salir antes del calor.'], answer: 2, why: '«En verano es mejor salir pronto, antes del calor».', en: 'Why are they leaving at seven?' },
            { prompt: '¿Qué preocupa a Óscar al final?', options: ['No conoce a nadie del grupo.', 'No tiene impermeable.', 'La ruta es muy cara.'], answer: 0, why: '«No conozco a nadie del grupo. ¿Es un problema?».', en: 'What worries Óscar at the end?' },
          ] },
        ] },
        { title: '¿Valoración, certeza o en general? · Judgement, certainty or general?', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'classify', title: 'Las frases de Lorena · Lorena’s sentences', categories: [
            { id: 'valoracion', label: 'VALORACIÓN · que + subjuntivo', tone: 'teal' },
            { id: 'certeza', label: 'CERTEZA · que + indicativo', tone: 'orange' },
            { id: 'general', label: 'EN GENERAL · infinitivo', tone: 'violet' },
          ], items: [
            { text: 'Es importante que lleves botas de montaña.', answer: 'valoracion', why: 'Lorena valora una acción de Óscar: lleves.' },
            { text: 'Está claro que el tiempo cambia muy rápido.', answer: 'certeza', why: 'Lorena afirma algo que sabe: cambia.' },
            { text: 'En verano es mejor salir pronto.', answer: 'general', why: 'Una regla para cualquier persona: salir.' },
            { text: 'Es normal que no conozcas a nadie.', answer: 'valoracion', why: '«Es normal que» valora: conozcas.' },
            { text: 'Es verdad que la ruta es un poco dura.', answer: 'certeza', why: '«Es verdad que» afirma un hecho: es.' },
            { text: 'Es fácil resbalar en las piedras mojadas.', answer: 'general', why: 'Vale para todo el mundo: infinitivo, resbalar (to slip).' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: «¿Qué es importante que lleve Óscar? ¿Qué es verdad sobre la ruta?». Tu alumno responde con una valoración y una certeza, sin mirar el diálogo.' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Valoras: subjuntivo. Afirmas: indicativo. En general: infinitivo.',
      steps: [
        { title: 'Antes de la ruta · Before the route', blocks: [
          { kind: 'choice', items: [
            { context: 'Viernes, Lorena escribe al grupo. (Friday, Lorena writes to the group.)', prompt: 'Es buena idea que Óscar ___ un poco con las botas antes del sábado.', options: ['camine', 'caminar', 'camina'], answer: 0, why: '«Es buena idea que» + una persona concreta (Óscar): subjuntivo, camine.', en: 'It’s a good idea for Óscar to walk around in the boots a bit before Saturday.' },
            { context: 'Lorena describe el camino. (Lorena describes the path.)', prompt: 'Es verdad que el camino ___ muchas piedras.', options: ['tenga', 'tener', 'tiene'], answer: 2, why: '«Es verdad que» afirma un hecho: indicativo, tiene.', en: 'It’s true that the path has a lot of stones.' },
            { context: 'Las normas del club. (The club rules.)', prompt: 'En la montaña es necesario ___ con cuidado.', options: ['a caminar', 'caminar', 'caminamos'], answer: 1, why: 'Regla general, para cualquier persona: infinitivo directo, caminar.', en: 'In the mountains you need to walk carefully.' },
            { context: 'Nuria pregunta si puede llevar a su perro. (Nuria asks if she can bring her dog.)', prompt: 'Lorena: «Me parece bien que ___ a Lúa, pero con correa».', options: ['traes', 'traer', 'traigas'], answer: 2, why: '«Me parece bien que» valora: subjuntivo, traigas.', en: 'Lorena: “I’m fine with you bringing Lúa, but on a lead.”' },
            { context: 'Óscar habla de Lorena con un amigo. (Óscar talks about Lorena with a friend.)', prompt: 'Es evidente que Lorena ___ mucho de montaña.', options: ['sepa', 'sabe', 'saber'], answer: 1, why: '«Es evidente que» afirma: indicativo, sabe.', en: 'It’s clear that Lorena knows a lot about the mountains.' },
          ] },
        ] },
        { title: '¿Qué forma va después? · Which form comes next?', blocks: [
          { kind: 'classify', title: 'Decide el modo · Decide the mood', categories: [
            { id: 'subj', label: 'que + SUBJUNTIVO', tone: 'teal' },
            { id: 'ind', label: 'que + INDICATIVO', tone: 'orange' },
            { id: 'inf', label: 'INFINITIVO', tone: 'violet' },
          ], items: [
            { text: 'Es una pena que el refugio ___ cerrado. (estar)', answer: 'subj', why: 'Es un hecho, pero lo valoras: esté.' },
            { text: 'Es obvio que el autobús ___ tarde. (llegar)', answer: 'ind', why: '«Es obvio que» afirma: llega.' },
            { text: 'Antes de una ruta, es bueno ___ temprano. (acostarse)', answer: 'inf', why: 'Consejo general, para todos: acostarse.' },
            { text: 'Hace falta que alguien ___ el botiquín. (llevar)', answer: 'subj', why: '«Hace falta que» = es necesario que: lleve.' },
            { text: 'Está claro que Héctor ___ en forma. (estar)', answer: 'ind', why: '«Está claro que» afirma un hecho: está.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Es importante que todos traen su comida.', ok: false, options: ['Es importante que todos traer su comida.', 'Es importante de traer su comida.', 'Es importante que todos traigan su comida.'], answer: 2, why: 'Valoración para personas concretas (todos): que + subjuntivo, traigan.' },
            { sentence: 'Está claro que el grupo es muy simpático.', ok: true, why: 'Correcta: «está claro que» afirma un hecho, con indicativo.' },
            { sentence: 'Es cierto que la subida sea muy dura.', ok: false, options: ['Es cierto que la subida ser muy dura.', 'Es cierto la subida es muy dura.', 'Es cierto que la subida es muy dura.'], answer: 2, why: '«Es cierto que» afirma: indicativo, es. Y «que» no se puede quitar.' },
            { sentence: 'Es mejor no beber agua de los ríos.', ok: true, why: 'Correcta: un consejo general con infinitivo, en negativo: es mejor no + infinitivo.' },
            { sentence: 'Me parece mal que Héctor no viene a las reuniones.', ok: false, options: ['Me parece mal Héctor no viene a las reuniones.', 'Me parece mal que Héctor no venir a las reuniones.', 'Me parece mal que Héctor no venga a las reuniones.'], answer: 2, why: '«Me parece mal que» es una valoración: subjuntivo, venga.' },
          ] },
        ] },
        { title: 'El grupo de mensajes · The group chat', blocks: [
          { kind: 'chat-fill', title: 'Viernes por la noche, en el chat del club · Friday night, in the club chat', lines: [
            { who: 'Héctor', text: 'Chicos, el pronóstico dice lluvia por la tarde. ¿Cancelamos?' },
            { who: 'Lorena', text: 'No hace falta. Pero es mejor que ___ a las siete en punto.', options: ['salgamos', 'salir', 'salimos'], answer: 0, why: '«Es mejor que» + nosotros: subjuntivo, salgamos.' },
            { who: 'Nuria', text: 'Yo no puedo ir, tengo que trabajar.' },
            { who: 'Lorena', text: '¡Qué pena que no ___ venir, Nuria! La próxima vez.', options: ['puedas', 'puedes', 'poder'], answer: 0, why: '«Qué pena que» valora un hecho real: subjuntivo, puedas.' },
            { who: 'Óscar', text: 'Una pregunta: ¿es necesario ___ bastones?', options: ['que llevar', 'de llevar', 'llevar'], answer: 2, why: 'Pregunta general, sin persona concreta: infinitivo directo, llevar.' },
            { who: 'Lorena', text: 'No es obligatorio, pero es verdad que ___ mucho en las bajadas.', options: ['ayudar', 'ayudan', 'ayuden'], answer: 1, why: '«Es verdad que» afirma: indicativo, ayudan.' },
            { who: 'Héctor', text: 'Y es importante que todos ___ el móvil cargado, por si acaso.', options: ['tengan', 'tienen', 'tener'], answer: 0, why: '«Es importante que todos»: valoración para personas concretas, tengan.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['Es', 'importante', 'que', 'todos', 'lleven', 'un', 'gorro'], accept: ['Es importante que todos lleven un gorro'], en: 'It’s important that everyone wears a hat.' },
            { tiles: ['Está', 'claro', 'que', 'el', 'camino', 'es', 'difícil'], accept: ['Está claro que el camino es difícil'], en: 'Clearly the path is difficult.' },
            { tiles: ['Es', 'mejor', 'no', 'caminar', 'de', 'noche'], accept: ['Es mejor no caminar de noche', 'De noche es mejor no caminar'], en: 'It’s better not to walk at night.' },
            { tiles: ['Me', 'parece', 'bien', 'que', 'Nuria', 'venga', 'con', 'nosotros'], accept: ['Me parece bien que Nuria venga con nosotros', 'Me parece bien que venga Nuria con nosotros'], en: 'I think it’s good that Nuria is coming with us.' },
          ] },
        ] },
        { title: 'Transforma · Transform', blocks: [
          { kind: 'rewrite', title: 'Valora o afirma · Judge or state', items: [
            { prompt: 'Es importante llevar un impermeable. (→ todos)', instruction: 'Habla de personas concretas: usa «que» + subjuntivo. Empieza con «Es importante que todos».', accept: ['Es importante que todos lleven un impermeable', 'Es importante que todos lleven impermeable'] },
            { prompt: 'Nuria tiene que trabajar el sábado. (→ Es una pena)', instruction: 'Valora el hecho. Empieza con «Es una pena que».', accept: ['Es una pena que Nuria tenga que trabajar el sábado'] },
            { prompt: 'La subida es dura. (→ Es verdad)', instruction: 'Afirma el hecho. Empieza con «Es verdad que».', accept: ['Es verdad que la subida es dura'] },
            { prompt: 'Comemos junto a la cascada. (→ Es mejor)', instruction: 'Valora el plan del grupo (nosotros). Empieza con «Es mejor que».', accept: ['Es mejor que comamos junto a la cascada'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno valora tres planes reales de su semana: uno con «es importante que», uno con «es una pena que» y uno con «está claro que».' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Un audio de Lorena', coach: 'Primero escucha sin leer. Listen first, read later.',
      steps: [
        { title: 'Lorena habla al grupo · Lorena talks to the group', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general. Segunda escucha: tu alumno levanta la mano con cada valoración (es importante que…) y da una palmada con cada certeza (es verdad que…). Después, las preguntas.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Separa las valoraciones (es importante que…) y las certezas (es verdad que…). Lorena es colombiana y habla a todo el grupo con «ustedes». (Listen once for the gist, once for the details.)' } },
          { kind: 'listen', title: 'Un audio de Lorena', channel: 'MENSAJE DE VOZ · CHAT DEL CLUB PASOS LARGOS', src: '/audio/grammar-live/391.mp3',
            before: 'Es viernes. Lorena manda un audio a todo el club sobre la ruta del sábado. ¿Qué crees que dice: la hora, qué llevar, quién viene…? (Lorena sends a voice message to the whole club. What do you think she says?)',
            gist: { prompt: '¿Para qué manda Lorena el audio?', options: ['Para dar la información y los consejos de la salida.', 'Para presentar a un nuevo coordinador.', 'Para cancelar la ruta por la lluvia.'], answer: 0, why: 'Dice la hora, el lugar, qué llevar y quién viene: «Les cuento cómo va la salida del sábado».', en: 'Why does Lorena send the voice message?' },
            details: [
              { prompt: '¿Dónde y a qué hora quedan?', options: ['A las siete en la estación.', 'A las siete en la plaza del mercado.', 'A las nueve en el local del club.'], answer: 1, why: '«Nos vemos a las siete en la plaza del mercado».', en: 'Where and what time are they meeting?' },
              { prompt: '¿Por qué es importante llevar comida?', options: ['Porque los restaurantes son caros.', 'Porque en el camino no hay ninguna tienda.', 'Porque la ruta dura dos días.'], answer: 1, why: '«…algo de comer, porque en el camino no hay ninguna tienda».', en: 'Why is it important to bring food?' },
              { prompt: '¿Qué dice Lorena de las zapatillas de ciudad?', options: ['Que no hay problema si son nuevas.', 'Que son mejores para la subida.', 'Que con ellas es muy fácil resbalar en las piedras mojadas.'], answer: 2, why: '«Con zapatillas de ciudad, en las piedras mojadas, es muy fácil resbalar».', en: 'What does Lorena say about city trainers?' },
              { prompt: '¿Quién no puede ir y por qué?', options: ['Nuria, porque tiene que trabajar.', 'Óscar, porque está enfermo.', 'Héctor, porque tiene otro plan.'], answer: 0, why: '«Es una pena que Nuria no pueda venir, porque tiene que trabajar».', en: 'Who can’t go, and why?' },
            ],
            transcript: 'Hola a todos, soy Lorena. Les cuento cómo va la salida del sábado a la Ruta de las Cascadas. ¡Ya somos catorce personas! [[Es verdad que la ruta es|orange]] un poco larga: son doce kilómetros, con una subida fuerte al principio. Por eso [[es mejor que salgamos|teal]] temprano: nos vemos a las siete en la plaza del mercado. [[Es importante que todos lleven|teal]] dos litros de agua y algo de comer, porque en el camino no hay ninguna tienda. También [[es necesario que usen|teal]] botas de montaña: con zapatillas de ciudad, en las piedras mojadas, [[es muy fácil resbalar|violet]]. [[Está claro que va|orange]] a hacer frío por la mañana, así que [[es buena idea llevar|violet]] una chaqueta. Ah, y una cosa: [[es una pena que Nuria no pueda|teal]] venir, porque tiene que trabajar, pero [[me parece genial que Óscar venga|teal]] con nosotros por primera vez. Cualquier duda, me escriben. ¡Un abrazo!',
            reply: { teacher: 'Tú eres Lorena. Tu alumno es Óscar y responde al audio con tres frases: una certeza («Es verdad que…»), una valoración («Me parece bien que…») y una pregunta general («¿Es necesario…?»).', self: 'Responde a Lorena en voz alta como Óscar: una certeza, una valoración y una pregunta general. (Answer as Óscar: one fact, one judgement, one general question.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Tu opinión cuenta', coach: 'Valora, afirma, generaliza. Judge, state, generalise.',
      steps: [
        { title: '¿Qué te parece? · What do you think?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas y tu alumno responde con su experiencia real. Cuando falla el modo, tú repites su frase con la forma correcta y sigues con la repregunta.', self: 'Lee la pregunta, responde en voz alta y, si quieres, escribe tu respuesta. Usa las frases de apoyo. (Read, answer aloud, use the support phrases.)' } },
          { kind: 'talk', cards: [
            { q: '¿Haces actividades en grupo (deporte, excursiones, un coro, un club)? ¿Qué es importante que haga cada persona? · Do you do group activities? What is it important for each person to do?', followUps: ['¿Qué es mejor que no haga nadie? (What is it better for nobody to do?)', '¿Qué norma te parece más importante? (Which rule do you find most important?)'], phrases: ['[[Es importante que todos|teal]] lleguen / traigan…', '[[Es mejor que nadie|teal]]…', '[[Hace falta que alguien|teal]]…'], hint: 'Personas concretas (todos, cada persona, alguien): que + subjuntivo.', example: 'Juego al voleibol los martes. Es importante que todos lleguen a las ocho, porque tenemos la pista solo una hora. Y es mejor que nadie traiga comida a la pista.', next: 'Ahora, en general.' },
            { q: '¿Qué es importante para estar bien en general? ¿Y qué es importante que hagas tú esta semana? · What is important to feel good in general? And what is it important for you to do this week?', followUps: ['¿Es fácil dormir ocho horas? (Is it easy to sleep eight hours?)', '¿Qué es mejor no hacer por la noche? (What is it better not to do at night?)'], phrases: ['En general, [[es bueno|violet]] + infinitivo…', '[[Es mejor no|violet]] + infinitivo…', 'Esta semana [[es importante que yo|teal]]…'], hint: 'En general: infinitivo. Tú, esta semana: que + subjuntivo.', example: 'En general, es bueno caminar todos los días y es mejor no mirar el móvil en la cama. Esta semana es importante que yo duerma más, porque tengo un examen.', next: 'Ahora, hechos claros.' },
            { q: 'Di dos cosas que son verdad sobre tu ciudad y una cosa que es una pena. · Say two things that are true about your city and one thing that is a shame.', followUps: ['¿Qué está claro para todo el mundo? (What is clear to everyone?)', '¿Qué te parece bien que haga el ayuntamiento? (What do you think the city council does well?)'], phrases: ['[[Es verdad que|orange]] mi ciudad tiene / es…', '[[Está claro que|orange]]…', '[[Es una pena que|teal]] no haya / no tenga…'], hint: 'Certeza: indicativo (tiene, es). Valoración: subjuntivo (haya, tenga).', example: 'Es verdad que mi ciudad es pequeña, pero está claro que tiene muy buena comida. Es una pena que no haya más parques en el centro.', next: 'Ahora, una situación.' },
            { q: 'Una amiga quiere hacer una ruta de veinte kilómetros. No tiene experiencia y quiere ir sola. ¿Qué le dices? · A friend wants to hike twenty kilometres alone with no experience. What do you tell her?', followUps: ['¿Qué es necesario que lleve? (What does she need to take?)', '¿Te parece bien que vaya sola? (Do you think it’s OK for her to go alone?)'], phrases: ['[[Me parece bien que|teal]] quieras…, pero…', '[[Es mejor que|teal]] vayas con…', '[[Es necesario que|teal]] lleves…'], hint: 'Le hablas a ella (tú): que + subjuntivo en segunda persona: quieras, vayas, lleves.', example: 'Me parece bien que quieras hacer la ruta, pero es mejor que no vayas sola la primera vez. Es necesario que lleves mucha agua y que mires el tiempo.', teacher: 'Tú eres la amiga y respondes con dudas («Pero yo estoy en forma…»). Tu alumno insiste con otra valoración.' },
            { q: 'Piensa en tu trabajo o en tus estudios. ¿Qué es normal que pase el primer día? ¿Qué es verdad sobre los primeros meses? · Think of your job or studies. What is normal on the first day? What is true about the first months?', followUps: ['¿Es normal que una persona nueva esté nerviosa? (Is it normal for a new person to be nervous?)', '¿Qué es bueno que hagan los compañeros? (What is it good for colleagues to do?)'], phrases: ['[[Es normal que|teal]] una persona nueva…', '[[Es bueno que|teal]] los compañeros…', '[[Es obvio que|orange]] los primeros meses son…'], hint: 'Normal, bueno: valoración (subjuntivo). Obvio, verdad: certeza (indicativo).', example: 'Es normal que una persona nueva no conozca a nadie. Es bueno que los compañeros la ayuden. Es obvio que los primeros meses son difíciles.' },
            { q: 'Ahora tú eres Lorena. Óscar te escribe: «Tengo miedo de no poder terminar la ruta». ¿Qué le respondes? · Now you are Lorena. Óscar is afraid he won’t finish the route. What do you answer?', followUps: ['¿Qué es mejor que haga si se cansa? (What is better for him to do if he gets tired?)', '¿Qué es verdad sobre el grupo? (What is true about the group?)'], phrases: ['[[Es normal que|teal]] tengas…', '[[Es verdad que|orange]] la ruta es…, pero…', '[[Es mejor que|teal]] camines con…'], hint: 'Mezcla las tres: valoración, certeza y un consejo general.', example: 'Es normal que tengas un poco de miedo. Es verdad que la ruta es larga, pero el grupo va despacio. Es mejor que camines conmigo al principio, y en la montaña siempre es bueno descansar un poco.', teacher: 'Después, cambian los papeles: tú eres Lorena y tu alumno es Óscar.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno hace las preguntas («¿Qué es importante que…?», «¿Qué es verdad sobre…?») y tú respondes. Tu alumno escucha si usas el modo correcto.', self: 'Ahora haz tú las preguntas en voz alta («¿Qué es importante que haga…?») y responde como otra persona. (Now ask the questions aloud and answer as someone else.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Bienvenida al club', coach: 'Valora, afirma y aconseja. Judge, state and advise.',
      steps: [
        { title: 'Un mensaje para los socios nuevos · A message for new members', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos cada expresión: ¿valoración (subjuntivo), certeza (indicativo) o algo general (infinitivo)? Después, tu alumno lee su mensaje en voz alta.', self: 'Escribe tu mensaje y toca «Revisar mi texto». Después, mira cada expresión: ¿valoración, certeza o algo general? (Write your message and tap “Revisar mi texto”.)' } },
          { kind: 'write', title: 'Bienvenida a una actividad de grupo · Welcome to a group activity', situation: 'Eres Lorena (o el organizador de otra actividad de grupo que conoces: un coro, un equipo, un club de lectura). Escribe un mensaje de bienvenida a los socios nuevos antes de la primera actividad: qué hay que saber y qué te parece importante. (You are Lorena, or the organiser of another group activity you know. Write a welcome message to new members before the first activity.)', task: [
            'Saluda y di qué actividad es y cuándo. (Greet them and say what the activity is and when.)',
            'Escribe tres valoraciones con «que» + subjuntivo: es importante que, es mejor que, me parece genial que… (Three judgements with que + subjunctive.)',
            'Escribe un consejo general con infinitivo: es bueno / necesario + infinitivo. (One general piece of advice with an infinitive.)',
            'Afirma un hecho con «es verdad que» o «está claro que» + indicativo. (State one fact with indicative.)',
            'Despídete. (Say goodbye.)',
          ], starters: ['Hola a todos:', '¡Bienvenidos a…!', 'Es verdad que…, pero…', 'Es importante que todos…', 'Es mejor que…', 'En general, es bueno…', 'Me parece genial que…', 'Un abrazo,'],
            words: ['es importante que', 'es necesario que', 'es mejor que', 'es normal que', 'es una pena que', 'me parece genial que', 'hace falta que', 'es verdad que', 'está claro que', 'es obvio que', 'es bueno + infinitivo'],
            model: 'Hola a todos: ¡Bienvenidos al club Pasos Largos! El sábado hacemos nuestra primera ruta juntos, la Ruta de las Cascadas. [[Es verdad que es|orange]] una ruta larga, pero el paisaje es precioso. Les doy algunos consejos. [[Es importante que todos lleven|teal]] botas de montaña y un impermeable. [[Es mejor que traigan|teal]] su comida, porque en el camino no hay tiendas. En la montaña [[es necesario beber|violet]] agua a menudo, también cuando no hace calor. [[Está claro que el tiempo cambia|orange]] rápido allí arriba, así que [[es buena idea que miren|teal]] el pronóstico el viernes. [[Me parece genial que vengan|teal]] tantas personas nuevas. ¡Nos vemos a las siete en la plaza del mercado! Un abrazo, Lorena.',
            minWords: 70,
            checks: [
              { label: 'Una valoración + que (judgement + que)', pattern: '(?<!\\p{L})(?:es|está|me\\s+parece|hace)\\s+(?:muy\\s+)?(?:importante|necesario|mejor|bueno|buena\\s+idea|normal|lógico|bien|mal|genial|una\\s+pena|una\\s+lástima|falta)\\s+que(?!\\p{L})', tip: 'Valora algo: «Es importante que todos lleven agua», «Me parece genial que vengan».' },
              { label: 'Una certeza + que (certainty + que)', pattern: '(?<!\\p{L})(?:es\\s+verdad|es\\s+cierto|es\\s+obvio|es\\s+evidente|está\\s+claro)\\s+que(?!\\p{L})', tip: 'Afirma un hecho: «Es verdad que la ruta es larga», «Está claro que el tiempo cambia».' },
              { label: 'Un consejo general con infinitivo (general advice + infinitive)', pattern: '(?<!\\p{L})(?:importante|necesario|mejor|bueno|buena\\s+idea|fácil)\\s+(?:no\\s+)?\\p{L}+(?:ar|er|ir)(?:se)?(?!\\p{L})', tip: 'Da un consejo para todos: «Es bueno beber agua», «Es mejor no caminar de noche».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})(?:importante|necesario|bueno)\\s+(?:de|a)\\s+\\p{L}+(?:ar|er|ir)(?!\\p{L})', why: 'Después de «es importante / necesario / bueno», el infinitivo va directo: **es importante llevar**, sin «de» ni «a».' },
              { pattern: '(?<!\\p{L})(?:importante|necesario|bueno|normal)\\s+que\\s+(?:llevar|traer|salir|tener|hacer|ir|ser|estar|venir|beber|dormir|mirar)(?!\\p{L})', why: 'Después de «que» no va el infinitivo: **es importante que lleven** (personas concretas) o **es importante llevar** (en general).' },
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
            { tone: 'teal', label: 'VALORACIÓN · QUE + SUBJUNTIVO', formula: 'es importante / necesario / mejor / normal / una pena · me parece bien + que + subjuntivo', example: 'Es mejor que salgamos a las siete.', caption: 'tú valoras una acción, también cuando es real', en: 'you judge an action, even a real one' },
            { tone: 'violet', label: 'EN GENERAL · INFINITIVO', formula: 'es importante / bueno / mejor + infinitivo', example: 'En la montaña es importante beber agua.', caption: 'para cualquier persona, sin «que» ni «de»', en: 'for anyone, with no “que” and no “de”' },
            { tone: 'orange', label: 'CERTEZA · QUE + INDICATIVO', formula: 'es verdad / es cierto / es obvio / está claro + que + indicativo', example: 'Está claro que el tiempo cambia rápido.', caption: 'tú afirmas que algo es cierto', en: 'you state that something is true' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Pregúntate: ¿**valoro** o **afirmo**? «Es una pena que **llueva**»: valoras (subjuntivo), aunque llueve de verdad. «Está claro que **llueve**»: afirmas (indicativo). Y si hablas para todo el mundo, sin persona concreta: «Es importante **llevar** paraguas».', en: 'Ask yourself: am I judging or stating? “Es una pena que llueva”: you judge (subjunctive), even though it really is raining. “Está claro que llueve”: you state (indicative). And if you speak about everyone, with no specific person: “Es importante llevar paraguas.”' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'Es una lástima que el museo ___ los lunes.', options: ['cierra', 'cierre', 'cerrar'], answer: 1, why: '«Es una lástima» (= es una pena) valora un hecho: subjuntivo, cierre.', en: 'It’s a pity that the museum closes on Mondays.' },
            { prompt: 'Es evidente que Marta ___ cansada hoy.', options: ['está', 'esté', 'estar'], answer: 0, why: '«Es evidente que» afirma: indicativo, está.', en: 'Marta is obviously tired today.' },
            { prompt: 'Para aprender un idioma, es necesario ___ todos los días.', options: ['practicar', 'practique', 'que practicas'], answer: 0, why: 'Regla general, sin persona concreta: infinitivo, practicar.', en: 'To learn a language, you need to practise every day.' },
            { prompt: 'Me parece que el tren ___ a las diez.', options: ['salga', 'salir', 'sale'], answer: 2, why: '«Me parece que» (sin bien/mal) es una opinión sobre un hecho: indicativo, sale.', en: 'I think the train leaves at ten.' },
            { prompt: 'Me parece bien que tus hijos ___ deporte.', options: ['hacer', 'hacen', 'hagan'], answer: 2, why: '«Me parece bien que» valora: subjuntivo, hagan.', en: 'I think it’s good that your children do sport.' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Ahora, el banco de alimentos.', blocks: [
          { kind: 'lead', text: 'Héctor, del club, también es voluntario en el banco de alimentos del barrio. El sábado empieza un voluntario nuevo. Transforma las frases de la coordinadora.', en: 'Héctor, from the club, also volunteers at the neighbourhood food bank. On Saturday a new volunteer starts. Transform the coordinator’s sentences.' },
          { kind: 'rewrite', title: 'En el banco de alimentos · At the food bank', items: [
            { prompt: 'Los voluntarios llegan a las nueve. (→ Es importante)', instruction: 'Valora la acción. Empieza con «Es importante que».', accept: ['Es importante que los voluntarios lleguen a las nueve'] },
            { prompt: 'Hay mucho trabajo los sábados. (→ Es verdad)', instruction: 'Afirma el hecho. Empieza con «Es verdad que».', accept: ['Es verdad que hay mucho trabajo los sábados', 'Es verdad que los sábados hay mucho trabajo'] },
            { prompt: 'El voluntario nuevo no tiene experiencia. (→ Es normal)', instruction: 'Valora el hecho. Empieza con «Es normal que».', accept: ['Es normal que el voluntario nuevo no tenga experiencia'] },
          ] },
        ] },
        { title: 'Ampliación · Registro formal (opcional)', mascot: '/autoestudio/mascot/noting.webp', coach: 'Para ir más lejos. To go further.', blocks: [
          { kind: 'lead', text: 'En los carteles y textos oficiales, las valoraciones son más formales: **es imprescindible que** (it is essential that), **es fundamental que**, **conviene que** (it is advisable that), **resulta evidente que**. La regla es la misma: valoración + subjuntivo, certeza + indicativo, en general + infinitivo.', en: 'On signs and in official texts, judgements are more formal: es imprescindible que, es fundamental que, conviene que, resulta evidente que. The rule is the same: judgement + subjunctive, certainty + indicative, general + infinitive.' },
          { kind: 'choice', title: 'Normas del parque natural · Rules of the nature park', items: [
            { prompt: 'Es imprescindible que los visitantes ___ por los caminos señalizados.', options: ['vayan', 'ir', 'van'], answer: 0, why: '«Es imprescindible que» valora (= es muy necesario): subjuntivo, vayan.', en: 'It is essential that visitors keep to the marked paths.' },
            { prompt: 'Conviene ___ la previsión del tiempo antes de salir.', options: ['que consultar', 'consulte', 'consultar'], answer: 2, why: 'Recomendación general, sin persona concreta: conviene + infinitivo.', en: 'It is advisable to check the weather forecast before setting off.' },
            { prompt: 'Resulta evidente que el número de visitantes ___ cada año.', options: ['aumentar', 'aumenta', 'aumente'], answer: 1, why: '«Resulta evidente que» afirma: indicativo, aumenta.', en: 'It is evident that the number of visitors increases every year.' },
          ] },
          { kind: 'teacher', text: 'Paso opcional, para alumnos rápidos o si sobra tiempo. Extra: tu alumno escribe dos normas para un cartel del club con «es imprescindible que» y «conviene + infinitivo».' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 092 · Emociones y reacciones con que + subjuntivo', text: 'Ya valoras planes y hechos: «Es una pena que Nuria no pueda venir», «Es importante que todos lleven agua». En la clase 092 das un paso más: expresas lo que **sientes** ante lo que hacen otros: «Me alegra que estés aquí», «Me molesta que llegues tarde». Es el paso natural: la misma estructura con «que» + subjuntivo, ahora para reaccionar con emociones.', en: 'You can now judge plans and facts: “Es una pena que Nuria no pueda venir”, “Es importante que todos lleven agua”. In class 092 you go one step further: you express how you feel about what others do: “Me alegra que estés aquí”, “Me molesta que llegues tarde”. It is the natural next step: the same structure with “que” + subjunctive, now to react with emotions.', href: '/gramatica/emociones-y-reacciones-con-que-subjuntivo', label: 'Ir a la clase 092' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Qué es importante que pase en tu próxima clase de español? ¿Y qué es verdad sobre tu español ahora?». Respuesta esperada: una valoración con subjuntivo y una certeza con indicativo. Tarea: escribir el mensaje de Escribir para una actividad real.' },
        ] },
      ],
    },
  ],
};
