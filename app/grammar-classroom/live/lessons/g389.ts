import type { LiveLesson } from '../types';

/**
 * Lesson 389 · B1 · Deseos: querer que, esperar que, ojalá (course unit G089).
 * Builds on lesson 148 (G088), where the learner met the forms of the present
 * subjunctive and a first look at wishes. Here the focus is wishes only:
 * same subject → infinitive (quiero ir, espero verte) vs different subject →
 * que + subjuntivo (quiero que vengas, espero que te guste); ojalá (que) +
 * subjuntivo, always, even for one's own wishes (ojalá apruebe, never
 * *ojalá aprobar) and ¡Ojalá! as a short answer; farewell and good-wish
 * formulas with ¡Que + subjuntivo! (que te vaya bien, que descanses, que te
 * mejores). Typical mistakes: *espero que te gustará, *quiero que yo hable,
 * *ojalá encuentras. Scene: Daniel is moving to Montreal for a job in a lab;
 * his friend Valeria organises a farewell party. Voice message: his sister
 * Paula (Colombian voice, tú). Recommendations (G090) and valuations (G091)
 * are not demanded productively. Ampliación: formal wishes with usted/ustedes
 * and a receptive glimpse of «ojalá + imperfecto de subjuntivo» (B2).
 */
export const lesson: LiveLesson = {
  id: 389,
  level: 'B1',
  title: 'Deseos: querer que, esperar que, ojalá',
  subtitle: 'Expresar deseos para ti y para otras personas, y despedirte con buenos deseos: «quiero ir», «quiero que vengas», «ojalá llegues bien».',
  legend: [
    { tone: 'blue', label: 'OTRO SUJETO · querer / esperar / desear que + subjuntivo (wishes for someone else)' },
    { tone: 'violet', label: 'MISMO SUJETO · querer / esperar / desear + infinitivo (wishes for yourself)' },
    { tone: 'orange', label: 'OJALÁ (QUE) + subjuntivo · siempre (always subjunctive)' },
    { tone: 'teal', label: '¡QUE + subjuntivo! · deseos de despedida (good wishes when saying goodbye)' },
  ],
  optionNotes: {
    'que visite': 'Si la persona que desea y la que hace la acción es la misma, se usa el infinitivo: «quiero visitar», «espero ver».',
    'que te visite': 'La misma persona quiere y visita: infinitivo, «quiero visitarte».',
    'que vea': 'Daniel espera y Daniel ve: el mismo sujeto. Infinitivo: «espera ver».',
    'que elija': 'Hugo quiere y Hugo elige: el mismo sujeto. Infinitivo: «quiere elegir».',
    'que tomemos': 'Nosotros esperamos y nosotros tomamos el tren: infinitivo, «esperamos tomar».',
    'lo pasarán': 'Después de «espero que» no se usa el futuro: el deseo va en subjuntivo, «lo pasen».',
    vendrás: 'Después de «espero que» no se usa el futuro: el deseo va en subjuntivo, «vengas».',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Deseos para ti y para los demás', coach: '¿Quién desea y quién hace la acción? Who wishes, and who acts?',
      steps: [
        { title: 'Una despedida · A farewell', blocks: [
          { kind: 'lead', text: 'Daniel se va a vivir a Montreal: en tres semanas empieza a trabajar en un laboratorio. Su amiga Valeria le organiza una fiesta de despedida y todos hablan de **deseos**: lo que quieren, lo que esperan, lo que le desean a Daniel. En la clase 088 aprendiste las formas del presente de subjuntivo; hoy las usas para desear.', en: 'Daniel is moving to Montreal: in three weeks he starts working in a lab. His friend Valeria is organising a farewell party, and everybody talks about wishes: what they want, what they hope, what they wish for Daniel. In lesson 088 you learned the forms of the present subjunctive; today you use them to make wishes.' },
          { kind: 'guide', text: { teacher: 'Tú lees las tres frases y tu alumno dice en cuál sabemos que Daniel ya tiene piso.', self: 'Lee las tres frases en voz alta. ¿En cuál sabemos que Daniel ya tiene piso? (In which one do we know he already has a flat?)' } },
          { kind: 'compare', title: 'Un hecho y dos deseos · One fact, two wishes', columns: [
            { tone: 'neutral', label: 'INDICATIVO · UN HECHO', sentence: 'Daniel **encuentra** piso cerca del laboratorio.', idea: 'Informa: la frase dice que pasa.', en: 'Daniel finds a flat near the lab. (a fact)' },
            { tone: 'blue', label: 'ESPERAR QUE + SUBJUNTIVO', sentence: 'Valeria [[espera que|blue]] Daniel [[encuentre|blue]] piso.', idea: 'Un deseo de Valeria sobre otra persona: todavía no es un hecho.', en: 'Valeria hopes Daniel finds a flat.' },
            { tone: 'orange', label: 'OJALÁ + SUBJUNTIVO', sentence: '[[Ojalá|orange]] Daniel [[encuentre|orange]] piso.', idea: 'Un deseo fuerte, sin verbo principal.', en: 'I really hope Daniel finds a flat. / Let’s hope he does.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Valeria espera que Daniel encuentre piso.» ¿Daniel ya tiene piso?', options: ['No lo sabemos: es un deseo.', 'Sí, es un hecho.', 'No, y no lo va a tener.'], answer: 0, why: 'Después de «espera que» la acción es un deseo, no una información: por eso «encuentre», en subjuntivo.', en: '“Valeria hopes Daniel finds a flat.” Does Daniel already have a flat?' },
            { prompt: '¿Qué frase informa de un hecho?', options: ['Su jefa quiere que Daniel empiece pronto.', 'Daniel empieza en el laboratorio el día 3.', 'Ojalá Daniel empiece pronto.'], answer: 1, why: '«Empieza» es indicativo: informa. Las otras dos frases expresan deseos con subjuntivo («empiece»).', en: 'Which sentence states a fact?' },
          ] },
        ] },
        { title: 'Una persona o dos · One person or two', mascot: '/brand/mascot/studying.webp', coach: 'Mismo sujeto: infinitivo. Same subject: infinitive.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'QUERER · ESPERAR · DESEAR', question: '¿Quién desea y quién hace la acción?', en: 'Who has the wish, and who does the action?', formula: ['mismo sujeto → querer / esperar / desear + infinitivo', 'otro sujeto → querer / esperar / desear + que + subjuntivo'],
            meaning: 'Si **la misma persona** desea y hace la acción, usas el **infinitivo**: «Quiero ir». Si **otra persona** (o una cosa) hace la acción, usas **que + subjuntivo**: «Quiero que vengas». **Desear** es más formal o más intenso que querer y esperar.',
            examples: [
              { es: 'Yo [[quiero ir|violet]] a la fiesta. / Yo [[quiero que|blue]] tú [[vengas|blue]] a la fiesta.', en: 'I want to go to the party. / I want you to come to the party.' },
              { es: 'Daniel [[espera encontrar|violet]] piso pronto. / Su madre [[espera que|blue]] la [[llame|blue]] los domingos.', en: 'Daniel hopes to find a flat soon. / His mother hopes he calls her on Sundays.' },
              { es: '[[Deseamos verte|violet]] pronto. / [[Deseamos que|blue]] [[seas|blue]] muy feliz allí.', en: 'We hope to see you soon. / We wish you every happiness there.' },
            ] },
          { kind: 'table', title: '¿Quién desea? ¿Quién lo hace? · Who wishes? Who does it?', head: ['Desea (wishes)', 'Lo hace (does it)', 'Frase (sentence)'], rows: [
            ['yo', 'yo', 'Quiero **ir** a la despedida.'],
            ['yo', 'tú', 'Quiero que **vengas** a la despedida.'],
            ['Daniel', 'Daniel', 'Daniel espera **aprender** francés rápido.'],
            ['su jefa', 'Daniel', 'Su jefa espera que **hable** francés en las reuniones.'],
            ['nosotros', 'el vuelo', 'Esperamos que el vuelo **salga** a su hora.'],
          ], note: 'Con una cosa también hay otro sujeto: «Espero que **te guste** la ciudad» (lo que gusta es la ciudad). Recuerda las formas de la clase 088: tengo → tenga, vengo → venga, ir → vaya, ser → sea, estar → esté.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Valeria quiere ___ una fiesta en su casa.', options: ['que hace', 'hacer', 'que haga'], answer: 1, why: 'Valeria quiere y Valeria hace la fiesta: el mismo sujeto, infinitivo.', en: 'Valeria wants to have a party at her place.' },
            { prompt: 'Valeria quiere que Daniel ___ a sus compañeros del laboratorio.', options: ['invitar', 'invita', 'invite'], answer: 2, why: 'Valeria quiere, Daniel invita: dos sujetos, que + subjuntivo. Invitar → invite.', en: 'Valeria wants Daniel to invite his colleagues from the lab.' },
            { prompt: 'Esperamos que la nueva ciudad te ___.', options: ['guste', 'gusta', 'gustará'], answer: 0, why: 'Esperamos nosotros; lo que gusta es la ciudad: otro sujeto, subjuntivo «guste».', en: 'We hope you like the new city.' },
          ] },
        ] },
        { title: 'Ojalá · I really hope', mascot: '/brand/mascot/speaking.webp', coach: 'Ojalá no cambia. Ojalá never changes.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'OJALÁ', question: '¿Cómo expresas un deseo fuerte?', en: 'How do you express a strong wish?', formula: ['ojalá + subjuntivo', 'ojalá que + subjuntivo', '—¿…? —¡Ojalá! (respuesta corta)'],
            meaning: '**Ojalá** no es un verbo: no tiene persona y no cambia. Siempre va con **subjuntivo**, también cuando el deseo es para ti mismo: «Ojalá **apruebe**». Con «que» o sin «que», las dos formas son correctas. Sola, es una respuesta muy natural.',
            examples: [
              { es: '[[Ojalá|orange]] [[encuentres|orange]] un piso bonito.', en: 'I really hope you find a nice flat.' },
              { es: '[[Ojalá que|orange]] no [[llueva|orange]] el sábado.', en: 'Let’s hope it doesn’t rain on Saturday.' },
              { es: 'Mañana tengo el examen de francés. [[Ojalá|orange]] [[apruebe|orange]].', en: 'Tomorrow I have my French exam. I really hope I pass.' },
              { es: '—¿Crees que vas a tener vacaciones en diciembre? —[[¡Ojalá!|orange]]', en: '“Do you think you’ll have holidays in December?” “I hope so!”' },
            ],
            note: '«Ojalá» viene del árabe hispánico y significaba algo como «si Dios quiere». Hoy es una palabra de uso general, sin sentido religioso.' },
          { kind: 'compare', title: 'El mismo deseo, dos formas · The same wish, two ways', columns: [
            { tone: 'violet', label: 'QUERER + INFINITIVO', sentence: 'Yo [[quiero aprobar|violet]] el examen.', idea: 'Hay un verbo principal (quiero) con el mismo sujeto: infinitivo.', en: 'I want to pass the exam.' },
            { tone: 'orange', label: 'OJALÁ + SUBJUNTIVO', sentence: '[[Ojalá|orange]] [[apruebe|orange]] el examen.', idea: 'No hay verbo principal: el verbo va en subjuntivo, con su persona (yo).', en: 'I really hope I pass the exam.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Ojalá ___ tiempo para despedirme de todos.', options: ['tenga', 'tener', 'tengo'], answer: 0, why: '«Ojalá» siempre pide subjuntivo, también para ti: tengo → teng- → tenga.', en: 'I really hope I have time to say goodbye to everyone.' },
            { prompt: '—¿Vas a venir a verme a Montreal? —___', options: ['¡Ojalá!', '¡Ojalá ir!', '¡Ojalá voy!'], answer: 0, why: '«¡Ojalá!» sola es una respuesta completa. «Ojalá» no va con infinitivo ni con indicativo.', en: '“Are you going to come and see me in Montreal?” “I hope so!”' },
          ] },
        ] },
        { title: '¡Que te vaya bien! · All the best!', mascot: '/brand/mascot/standing.webp', coach: 'Deseos cortos para despedirte. Short wishes to say goodbye.', blocks: [
          { kind: 'concept', tone: 'teal', label: '¡QUE + SUBJUNTIVO!', question: '¿Qué le dices a alguien que se va?', en: 'What do you say to someone who is leaving?', formula: ['(Espero / Deseo) que + subjuntivo', '→ ¡Que + subjuntivo!'],
            meaning: 'Para despedirte con un buen deseo, el español usa frases cortas con **que + subjuntivo**. Es la segunda parte de «Espero que…» o «Deseo que…»: el primer verbo no se dice.',
            examples: [
              { es: '[[¡Que te vaya bien!|teal]]', en: 'All the best! / Good luck! (literally: may it go well for you)' },
              { es: '[[¡Que tengas buen viaje!|teal]]', en: 'Have a good trip!' },
              { es: '[[¡Que descanses!|teal]]', en: 'Have a good rest! / Sleep well!' },
            ] },
          { kind: 'table', title: 'Deseos para cada situación · A wish for every situation', head: ['Situación (situation)', 'Deseo (wish)', 'En inglés'], rows: [
            ['alguien se va de viaje', '¡Que tengas buen viaje!', 'Have a good trip!'],
            ['alguien empieza algo nuevo', '¡Que te vaya bien! / ¡Que tengas suerte!', 'All the best! / Good luck!'],
            ['alguien se va a dormir', '¡Que descanses! / ¡Que duermas bien!', 'Sleep well!'],
            ['alguien está enfermo', '¡Que te mejores!', 'Get well soon!'],
            ['alguien va a una fiesta', '¡Que te diviertas! / ¡Que lo pases bien!', 'Have fun!'],
            ['es su cumpleaños', '¡Que cumplas muchos más!', 'Many happy returns!'],
          ], note: 'Con usted: ¡Que le vaya bien!, ¡Que se mejore!, ¡Que tenga buen viaje! Para varias personas: ¡Que les vaya bien! (ustedes) · ¡Que os vaya bien! (vosotros, en España).' },
          { kind: 'tip', icon: '🌎', title: 'En la mesa · At the table', text: 'Antes de comer, en España es muy frecuente **¡Que aproveche!**; en muchos países de América se dice **¡Buen provecho!** Las dos fórmulas se entienden en todas partes.', en: 'Before a meal, in Spain people very often say “¡Que aproveche!”; in many Latin American countries they say “¡Buen provecho!” (Enjoy your meal!). Both are understood everywhere.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Tu compañera tiene gripe y se va a casa. Le dices: «¡Que te ___!»', options: ['mejoras', 'mejores', 'mejorar'], answer: 1, why: 'Es un deseo: que + subjuntivo. Mejorar → mejore → «¡Que te mejores!».', en: 'Your colleague has the flu and is going home. You say: “Get well soon!”' },
            { prompt: 'Tus amigos se van de vacaciones. Les dices (ustedes): «¡Que les ___ muy bien!»', options: ['va', 'vaya', 'vayan'], answer: 1, why: 'El sujeto de «ir» es la situación (singular): «que les vaya bien». «Ir» → vaya.', en: 'Your friends are going on holiday. You say: “Have a great time!”' },
          ] },
        ] },
        { title: 'Cómo elegir · How to choose', mascot: '/autoestudio/mascot/noting.webp', coach: 'Tres preguntas. Three questions.', blocks: [
          { kind: 'decide', title: 'Piensa en tu deseo y responde · Think about your wish', steps: [
            { q: '¿Empiezas con «ojalá»? (Do you start with ojalá?)', yes: 'Subjuntivo, siempre: «[[Ojalá|orange]] [[encuentres|orange]] piso», «[[Ojalá|orange]] [[apruebe|orange]]».', no: 'next' },
            { q: '¿Es un deseo corto de despedida con «que» al principio? (A short goodbye wish?)', yes: 'Subjuntivo: «[[¡Que te vaya bien!|teal]]», «[[¡Que descanses!|teal]]».', no: 'next' },
            { q: '¿La persona que desea es la misma que hace la acción? (Same person?)', yes: 'Infinitivo: «[[Quiero ir|violet]]», «[[Espero verte|violet]]».', no: 'Que + subjuntivo: «[[Quiero que|blue]] [[vengas|blue]]», «[[Espero que|blue]] te [[guste|blue]]».' },
          ] },
          { kind: 'tip', icon: '💡', title: 'Esperar: dos significados · Esperar: two meanings', text: '«**Te espero** en la puerta» = te espero allí, sin moverme. «**Espero que** llegues bien» = deseo que llegues bien. Con el significado de desear, «esperar que» siempre lleva subjuntivo, nunca futuro: «Espero que **llegues**», no «espero que llegarás».', en: '“Te espero en la puerta” means I’ll wait for you at the door. “Espero que llegues bien” means I hope you arrive safely. When esperar means hope, esperar que takes the subjunctive, never the future.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Espero que mi hermana ___ a verme en diciembre.', options: ['vendrá', 'venga', 'viene'], answer: 1, why: 'Esperar que + otro sujeto (mi hermana): subjuntivo. No el futuro. Venir → vengo → venga.', en: 'I hope my sister comes to see me in December.' },
            { prompt: 'Daniel espera ___ a todos sus amigos antes del viaje.', options: ['ver', 'que ve', 'que vea'], answer: 0, why: 'Daniel espera y Daniel ve a sus amigos: el mismo sujeto, infinitivo.', en: 'Daniel hopes to see all his friends before the trip.' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: '¿Una persona o dos? One person or two?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la frase con el error y tu alumno dice qué falla antes de ver la corrección: ¿cuántas personas hay?, ¿hay «ojalá»?', self: 'Lee cada frase y busca el error: ¿cuántas personas hay?, ¿hay «ojalá»? Después toca para ver la corrección.' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Ojalá encuentras piso pronto.', right: 'Ojalá encuentres piso pronto.', why: '«Ojalá» siempre va con subjuntivo: encontrar → encuentro → encuentres. (Ojalá is always followed by the subjunctive.)' },
            { wrong: 'Ojalá aprobar el examen.', right: 'Ojalá apruebe el examen.', why: '«Ojalá» no es un verbo: no puede ir con infinitivo, ni siquiera para ti. (Never ojalá + infinitive.)' },
            { wrong: 'Quiero que yo hable mejor francés.', right: 'Quiero hablar mejor francés.', why: 'La misma persona quiere y habla: infinitivo. (Same subject: infinitive.)' },
            { wrong: 'Espero que te gustará la fiesta.', right: 'Espero que te guste la fiesta.', why: 'Después de «espero que» va el subjuntivo, no el futuro. (Hope that + subjunctive, not the future.)' },
            { wrong: 'Quiero que me llamas mañana.', right: 'Quiero que me llames mañana.', why: 'Yo quiero, tú llamas: dos personas, que + subjuntivo. (Two people: que + subjunctive.)' },
            { wrong: '¡Que tienes un buen viaje!', right: '¡Que tengas un buen viaje!', why: 'Los deseos con «¡Que…!» van en subjuntivo: tengo → tengas. (Goodbye wishes take the subjunctive.)' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Ojalá mis padres ___ a Montreal en verano.', options: ['vengan', 'venir', 'vienen'], answer: 0, why: '«Ojalá» + subjuntivo: vengo → veng- → vengan.', en: 'I really hope my parents come to Montreal in the summer.' },
            { prompt: 'Yo quiero ___ un curso intensivo de francés.', options: ['hacer', 'que haga', 'que hago'], answer: 0, why: 'Yo quiero, yo hago el curso: el mismo sujeto, infinitivo.', en: 'I want to do an intensive French course.' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno dice tres deseos reales para esta semana: uno para sí mismo con infinitivo («Quiero…»), uno para otra persona («Espero que…») y uno con «ojalá».' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'Planes para la despedida', coach: 'Toca las expresiones marcadas. Tap the marked expressions.',
      steps: [
        { title: 'En la cafetería · At the café', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Valeria y tu alumno es Daniel. Después tu alumno toca cada expresión marcada y dice quién desea y quién hace la acción.', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada: ¿quién desea y quién hace la acción? (Who wishes and who acts?)' } },
          { kind: 'explore', title: 'Una fiesta, pero tranquila', setting: 'Un martes a las ocho de la tarde, en una cafetería. Valeria y Daniel hablan de la fiesta de despedida del sábado. (Tuesday evening at a café. Valeria and Daniel talk about Saturday’s farewell party.)', lines: [
            { who: 'Valeria', text: 'Bueno, Daniel, ya está decidido: el sábado hacemos tu despedida en mi casa. [[Quiero que|blue]] [[vengan|blue]] todos tus amigos del laboratorio.', en: 'Right, Daniel, it’s decided: on Saturday we’re having your farewell party at my place. I want all your friends from the lab to come.' },
            { who: 'Daniel', text: 'Gracias, Vale. Pero yo solo [[quiero pasar|violet]] una tarde tranquila con ustedes.', en: 'Thanks, Vale. But I just want to spend a quiet afternoon with you all.' },
            { who: 'Valeria', text: 'Tranquila, sí, pero con música. Oye, ¿ya tienes piso en Montreal?', en: 'Quiet, yes, but with music. Hey, have you got a flat in Montreal yet?' },
            { who: 'Daniel', text: 'Todavía no. La semana que viene tengo dos visitas por videollamada. [[Ojalá|orange]] [[encuentre|orange]] algo cerca del laboratorio.', en: 'Not yet. Next week I have two viewings by video call. I really hope I find something near the lab.' },
            { who: 'Valeria', text: '[[Ojalá que sí|orange]]. ¿Y el francés? ¿Cómo vas?', en: 'Let’s hope so. And your French? How’s it going?' },
            { who: 'Daniel', text: 'Más o menos. Mi jefa [[espera que|blue]] [[hable|blue]] un poco en las reuniones desde el primer mes.', en: 'So-so. My boss expects me to speak a bit in meetings from the first month.' },
            { who: 'Valeria', text: '¡Vas a aprender rapidísimo! Y yo [[espero visitarte|violet]] en primavera, ¿eh?', en: 'You’re going to learn really fast! And I hope to visit you in spring, OK?' },
            { who: 'Daniel', text: 'Claro. Y [[quiero que|blue]] me [[traigas|blue]] un buen café de aquí.', en: 'Of course. And I want you to bring me some good coffee from here.' },
            { who: 'Valeria', text: 'Hecho. Ah, Irene no puede venir el sábado: tiene turno en el hospital. Pero te manda un mensaje: [[¡Que te vaya muy bien!|teal]]', en: 'Done. Oh, Irene can’t come on Saturday: she’s on shift at the hospital. But she sends you a message: All the very best!' },
            { who: 'Daniel', text: '¡Qué amable! Dile que yo también [[espero que|blue]] le [[vaya|blue]] bien con el turno.', en: 'How kind! Tell her I hope her shift goes well too.' },
            { who: 'Valeria', text: 'Se lo digo. Bueno, me voy a casa. Nos vemos el sábado. [[¡Que descanses!|teal]]', en: 'I’ll tell her. Well, I’m off home. See you on Saturday. Have a good rest!' },
            { who: 'Daniel', text: 'Igualmente. Y gracias por todo, de verdad.', en: 'You too. And thanks for everything, really.' },
          ], notes: {
            'Quiero que': 'Valeria quiere; los amigos vienen: **dos sujetos**, que + subjuntivo.',
            vengan: 'Subjuntivo de **venir** (vengo → veng-), con «ellos»: los amigos del laboratorio.',
            'quiero pasar': '**Mismo sujeto**: Daniel quiere y Daniel pasa la tarde. Por eso, infinitivo.',
            Ojalá: '**Ojalá** + subjuntivo, aunque el deseo es para él mismo: «Ojalá (yo) encuentre».',
            encuentre: 'Encontrar → encuentro → encuentre: el cambio o → ue sigue en el subjuntivo.',
            'Ojalá que sí': 'Respuesta corta muy frecuente: «ojalá que sí» (let’s hope so) o «ojalá que no» (let’s hope not).',
            'espera que': 'La jefa espera; Daniel habla: dos sujetos. Aquí «esperar» se acerca a «contar con» (to expect).',
            hable: 'Subjuntivo de **hablar** con «yo»: «que (yo) hable». Es igual que la forma de «él / ella».',
            'espero visitarte': '**Mismo sujeto**: Valeria espera y Valeria visita. Infinitivo con el pronombre al final: visitar + te.',
            'quiero que': 'Daniel quiere; Valeria trae el café: dos sujetos, que + subjuntivo.',
            traigas: 'Traer → traigo → traig-: «que traigas».',
            '¡Que te vaya muy bien!': 'Deseo de despedida: es la segunda parte de «Espero que te vaya muy bien». «Ir» → vaya.',
            'espero que': 'Daniel espera; a Irene le va bien: otro sujeto, que + subjuntivo.',
            vaya: 'Subjuntivo de **ir**: «que le vaya bien» (that things go well for her).',
            '¡Que descanses!': 'Una despedida típica por la noche: «(Espero) que descanses».',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Qué tipo de fiesta quiere Daniel?', options: ['No quiere ninguna fiesta.', 'Una tarde tranquila con sus amigos.', 'Una fiesta muy grande en un bar.'], answer: 1, why: '«Yo solo quiero pasar una tarde tranquila con ustedes».', en: 'What kind of party does Daniel want?' },
            { prompt: '¿Qué espera la jefa de Daniel?', options: ['Que Daniel encuentre piso cerca del laboratorio.', 'Que Daniel llegue en primavera.', 'Que Daniel hable un poco de francés en las reuniones.'], answer: 2, why: '«Mi jefa espera que hable un poco en las reuniones desde el primer mes».', en: 'What does Daniel’s boss expect?' },
            { prompt: '¿Por qué no va Irene a la fiesta?', options: ['Porque está enferma.', 'Porque se va de viaje.', 'Porque tiene turno en el hospital.'], answer: 2, why: '«Irene no puede venir el sábado: tiene turno en el hospital».', en: 'Why isn’t Irene going to the party?' },
          ] },
        ] },
        { title: '¿Para quién es el deseo? · Who is the wish for?', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'classify', title: 'Frases de la conversación · Sentences from the conversation', categories: [
            { id: 'mismo', label: 'MISMO SUJETO · infinitivo', tone: 'violet' },
            { id: 'otro', label: 'OTRO SUJETO · que + subjuntivo', tone: 'blue' },
            { id: 'ojala', label: 'OJALÁ / ¡QUE…! · subjuntivo sin verbo principal', tone: 'orange' },
          ], items: [
            { text: 'Yo solo quiero pasar una tarde tranquila.', answer: 'mismo', why: 'Daniel quiere y Daniel pasa la tarde: infinitivo.' },
            { text: 'Quiero que vengan todos tus amigos.', answer: 'otro', why: 'Valeria quiere; vienen los amigos: que + subjuntivo.' },
            { text: 'Ojalá encuentre algo cerca del laboratorio.', answer: 'ojala', why: '«Ojalá» no es verbo: subjuntivo directo.' },
            { text: 'Yo espero visitarte en primavera.', answer: 'mismo', why: 'Valeria espera y Valeria visita: infinitivo.' },
            { text: 'Mi jefa espera que hable un poco en las reuniones.', answer: 'otro', why: 'La jefa espera; habla Daniel: que + subjuntivo.' },
            { text: '¡Que te vaya muy bien!', answer: 'ojala', why: 'Deseo de despedida sin verbo principal: «¡Que…!» + subjuntivo.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: «¿Qué quiere hacer Daniel en Montreal? ¿Y qué quieren sus amigos que haga?». Tu alumno responde con una frase de cada tipo: «Quiere aprender francés» / «Quieren que les mande fotos».' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: '¿Una persona o dos? One person or two?',
      steps: [
        { title: 'La lista de Valeria · Valeria’s list', blocks: [
          { kind: 'choice', items: [
            { context: 'Valeria escribe al grupo de la fiesta. (Valeria writes to the party group chat.)', prompt: 'Quiero que todos ___ algo para comer.', options: ['traigan', 'traen', 'traer'], answer: 0, why: 'Valeria quiere; los invitados traen: dos sujetos, que + subjuntivo. Traer → traigo → traigan.', en: 'I want everyone to bring something to eat.' },
            { context: 'Hugo se ofrece para la música. (Hugo offers to do the music.)', prompt: 'Hugo quiere ___ la música de la fiesta.', options: ['elegir', 'que elija', 'que elige'], answer: 0, why: 'Hugo quiere y Hugo elige: el mismo sujeto, infinitivo.', en: 'Hugo wants to choose the music for the party.' },
            { context: 'La fiesta es en la terraza. (The party is on the terrace.)', prompt: 'Ojalá no ___ el sábado.', options: ['llover', 'llueva', 'llueve'], answer: 1, why: '«Ojalá» + subjuntivo: llover → llueva (o → ue).', en: 'Let’s hope it doesn’t rain on Saturday.' },
            { context: 'Valeria piensa en Daniel. (Valeria thinks about Daniel.)', prompt: 'Espero que Daniel no ___ triste en la fiesta.', options: ['esté', 'estar', 'está'], answer: 0, why: 'Valeria espera; Daniel está: otro sujeto. Estar → esté, con tilde.', en: 'I hope Daniel isn’t sad at the party.' },
            { context: 'Un regalo para Daniel. (A present for Daniel.)', prompt: 'Queremos regalarle un abrigo. Esperamos que le ___ bien.', options: ['queda', 'quede', 'quedará'], answer: 1, why: 'Esperamos nosotros; el abrigo queda bien: otro sujeto, subjuntivo. No futuro.', en: 'We want to give him a coat. We hope it fits him well.' },
          ] },
        ] },
        { title: '¿Infinitivo o que + subjuntivo? · Infinitive or que + subjunctive?', blocks: [
          { kind: 'classify', title: '¿Una persona o dos? · One person or two?', categories: [
            { id: 'mismo', label: 'MISMO SUJETO → infinitivo', tone: 'violet' },
            { id: 'otro', label: 'OTRO SUJETO → que + subjuntivo', tone: 'blue' },
          ], items: [
            { text: 'Irene quiere… → Irene llega pronto a la fiesta.', answer: 'mismo', why: 'Es la misma persona: «Irene quiere llegar pronto».' },
            { text: 'Daniel quiere… → sus amigos lo visitan.', answer: 'otro', why: 'Dos sujetos: «Daniel quiere que sus amigos lo visiten».' },
            { text: 'Yo espero… → yo tengo tiempo para ir.', answer: 'mismo', why: 'La misma persona: «Espero tener tiempo para ir».' },
            { text: 'Esperamos… → el vuelo sale a su hora.', answer: 'otro', why: 'Otro sujeto (el vuelo): «Esperamos que el vuelo salga a su hora».' },
            { text: 'La madre de Daniel quiere… → Daniel la llama los domingos.', answer: 'otro', why: 'Dos personas: «Quiere que Daniel la llame los domingos».' },
            { text: 'Hugo desea… → Hugo conoce Canadá algún día.', answer: 'mismo', why: 'La misma persona: «Hugo desea conocer Canadá algún día».' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Ojalá que el apartamento tiene calefacción.', ok: false, options: ['Ojalá que el apartamento tener calefacción.', 'Ojalá el apartamento tiene calefacción.', 'Ojalá que el apartamento tenga calefacción.'], answer: 2, why: '«Ojalá (que)» siempre pide subjuntivo: tener → tenga. Sin «que», el error sigue.' },
            { sentence: 'Espero verte pronto en Montreal.', ok: true, why: 'Correcta: yo espero y yo te veo. El mismo sujeto: infinitivo.' },
            { sentence: 'Quiero que tú me escribes cada semana.', ok: false, options: ['Quiero que tú me escribas cada semana.', 'Quiero que tú me escribir cada semana.', 'Quiero tú me escribas cada semana.'], answer: 0, why: 'Yo quiero, tú escribes: dos sujetos. «Que» + subjuntivo: escribas.' },
            { sentence: 'Espero que el vuelo no se retrasará.', ok: false, options: ['Espero que el vuelo no se retrasa.', 'Espero el vuelo no se retrase.', 'Espero que el vuelo no se retrase.'], answer: 2, why: 'Después de «espero que» va el subjuntivo, no el futuro: «no se retrase».' },
            { sentence: '¡Que te vaya muy bien en el nuevo trabajo!', ok: true, why: 'Correcta: un deseo de despedida con «¡Que…!» + subjuntivo (ir → vaya).' },
          ] },
        ] },
        { title: 'La noche de la fiesta · The night of the party', blocks: [
          { kind: 'chat-fill', title: 'Hugo se despide de Daniel · Hugo says goodbye to Daniel', lines: [
            { who: 'Hugo', text: 'Daniel, ¡felicidades por el trabajo! Ojalá te ___ mucho Montreal.', options: ['guste', 'gustar', 'gusta'], answer: 0, why: '«Ojalá» + subjuntivo: «te guste» (lo que gusta es Montreal).' },
            { who: 'Daniel', text: 'Gracias, Hugo. Yo también ___ adaptarme rápido.', options: ['ojalá', 'espero', 'espero que'], answer: 1, why: 'Daniel espera y Daniel se adapta: infinitivo. «Ojalá» no va con infinitivo.' },
            { who: 'Hugo', text: '¿Y tu familia qué dice?' },
            { who: 'Daniel', text: 'Mi madre quiere que la llame todos los domingos. Y mi hermana espera que no me olvide del español.' },
            { who: 'Hugo', text: '¡Normal! Oye, yo quiero ___ en verano. ¿Tienes un sofá para mí?', options: ['que te visite', 'visitarte', 'que te visito'], answer: 1, why: 'Hugo quiere y Hugo visita: el mismo sujeto, infinitivo.' },
            { who: 'Daniel', text: '¡Claro! Y espero que ___ con Valeria.', options: ['vienes', 'vendrás', 'vengas'], answer: 2, why: 'Daniel espera; viene Hugo: otro sujeto, subjuntivo. Venir → vengo → vengas.' },
            { who: 'Hugo', text: 'Bueno, me voy ya, que mañana trabajo temprano. ¡Que te ___ muy bien!', options: ['vaya', 'va', 'ir'], answer: 0, why: 'Deseo de despedida: «¡Que te vaya bien!», subjuntivo de ir.' },
            { who: 'Daniel', text: '¡Gracias! Y tú, ¡que ___!', options: ['descansar', 'descanses', 'descansas'], answer: 1, why: 'Otro deseo de despedida: «¡Que descanses!», subjuntivo.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['que', 'Quiero', 'me', 'escribas', 'desde', 'Montreal'], accept: ['Quiero que me escribas desde Montreal'], en: 'I want you to write to me from Montreal.' },
            { tiles: ['encuentres', 'Ojalá', 'un', 'piso', 'bonito'], accept: ['Ojalá encuentres un piso bonito'], en: 'I really hope you find a nice flat.' },
            { tiles: ['verte', 'Espero', 'en', 'verano'], accept: ['Espero verte en verano', 'En verano espero verte'], en: 'I hope to see you in the summer.' },
            { tiles: ['padres', 'Mis', 'esperan', 'que', 'los', 'visite', 'pronto'], accept: ['Mis padres esperan que los visite pronto'], en: 'My parents hope I visit them soon.' },
          ] },
        ] },
        { title: 'Transforma · Transform', blocks: [
          { kind: 'rewrite', title: 'El mismo deseo, otra forma · The same wish, another way', items: [
            { prompt: 'Daniel piensa: «Mis amigos me visitan en Montreal».', instruction: 'Escribe el deseo de Daniel con «quiere que». Empieza con «Daniel».', accept: ['Daniel quiere que sus amigos lo visiten en Montreal', 'Daniel quiere que lo visiten sus amigos en Montreal', 'Daniel quiere que sus amigos le visiten en Montreal', 'Daniel quiere que sus amigos lo visiten'] },
            { prompt: 'Espero que el vuelo salga a su hora.', instruction: 'Expresa el mismo deseo con «ojalá».', accept: ['Ojalá el vuelo salga a su hora', 'Ojalá que el vuelo salga a su hora'] },
            { prompt: 'Tu compañero está enfermo. Piensas: «Espero que te mejores pronto».', instruction: 'Di el deseo corto, sin «espero». Empieza con «Que».', accept: ['Que te mejores pronto', 'Que te mejores'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno piensa en una persona real que empieza algo nuevo (un trabajo, un viaje, un examen) y le dice tres deseos: uno con «espero que», uno con «ojalá» y uno corto con «¡Que…!».' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Un audio de Paula', coach: 'Primero escucha sin leer. Listen first, read later.',
      steps: [
        { title: 'La hermana de Daniel · Daniel’s sister', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general. Segunda escucha: tu alumno levanta la mano con cada deseo para Daniel y dice si es «quiero que», «espero que», «ojalá» o «¡que…!». Después, las preguntas.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Cuenta los deseos de Paula: ¿con «quiero que», «espero que», «ojalá» o «¡que…!»? (Count Paula’s wishes.)' } },
          { kind: 'listen', title: 'Un audio de Paula para la fiesta', channel: 'MENSAJE DE VOZ · DE PAULA PARA DANIEL', src: '/audio/grammar-free/389.mp3',
            before: 'Paula, la hermana de Daniel, vive en Cali y no puede ir a la fiesta. Manda un audio para Daniel. ¿Qué crees que le desea? (Paula can’t come to the party, so she sends Daniel a voice message. What do you think she wishes him?)',
            gist: { prompt: '¿Cuál es la idea general? · What is the main idea?', options: ['Paula quiere que Daniel no se vaya a Montreal.', 'Paula no puede ir a la fiesta y le manda a Daniel buenos deseos para su nueva vida.', 'Paula le pide a Daniel dinero para el viaje.'], answer: 1, why: '«Como yo no puedo ir, te mando este audio», y después le desea muchas cosas para el viaje y la nueva vida.', en: 'What is the main idea?' },
            details: [
              { prompt: '¿Qué espera la madre de Daniel?', options: ['Que Daniel vuelva en diciembre.', 'Que Daniel aprenda francés rápido.', 'Que Daniel la llame todos los domingos.'], answer: 2, why: '«Mamá espera que la llames todos los domingos».', en: 'What does Daniel’s mother hope?' },
              { prompt: '¿Cuándo quiere ir Paula a ver a Daniel?', options: ['El mes que viene.', 'En diciembre.', 'En primavera.'], answer: 1, why: '«Yo quiero ir a verte en diciembre, así que prepara el sofá».', en: 'When does Paula want to go and see Daniel?' },
              { prompt: '¿Qué desea Paula sobre el apartamento?', options: ['Que el apartamento esté cerca del aeropuerto.', 'Que Daniel encuentre pronto uno bonito.', 'Que el apartamento tenga un sofá grande.'], answer: 1, why: '«Ojalá encuentres pronto un apartamento bonito».', en: 'What does Paula wish about the flat?' },
              { prompt: '¿Qué espera Paula sobre el español?', options: ['Que Daniel enseñe español en Montreal.', 'Que Daniel le escriba en español.', 'Que Daniel no se olvide del español con tanto francés.'], answer: 2, why: '«Espero que no te olvides del español con tanto francés».', en: 'What does Paula hope about Spanish?' },
            ],
            transcript: '¡Hola, Dani! Soy Paula. Valeria me contó que hoy es tu despedida y, como yo no puedo ir, te mando este audio. Primero, [[quiero que|blue]] [[disfrutes|blue]] mucho esta noche con tus amigos, que te lo mereces. Ya sé que estás un poco nervioso por el viaje, pero tranquilo: [[ojalá|orange]] el vuelo no se [[retrase|orange]] y [[ojalá|orange]] [[encuentres|orange]] pronto un apartamento bonito. Mamá [[espera que|blue]] la [[llames|blue]] todos los domingos, ya sabes cómo es. Y yo [[quiero ir|violet]] a verte en diciembre, así que prepara el sofá. Ah, y una cosa más: [[espero que|blue]] no te [[olvides|blue]] del español con tanto francés, ¿eh? Bueno, hermanito, te quiero mucho. [[¡Que te vaya súper bien|teal]] en el laboratorio y [[que tengas|teal]] un buen viaje. ¡Un abrazo enorme!',
            reply: { teacher: 'Tú eres Paula. Tu alumno es Daniel y responde al audio con tres frases: da las gracias, expresa un deseo para Paula («Espero que…», «Ojalá…») y dice qué quiere que ella traiga o haga en diciembre.', self: 'Responde a Paula en voz alta como Daniel: da las gracias, dile un deseo («Espero que…», «Ojalá…») y di qué quieres que haga en diciembre. (Answer Paula as Daniel.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Deseos de verdad', coach: 'Para ti, para otros, para despedirte. For you, for others, for goodbyes.',
      steps: [
        { title: 'Hablamos de deseos · Let’s talk about wishes', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas y tu alumno responde con deseos reales. Si dice «quiero que» con la misma persona, o «ojalá» con infinitivo, tú repites la frase correcta y sigues con la repregunta.', self: 'Lee cada pregunta y responde en voz alta con frases completas. Antes de hablar, piensa: ¿una persona o dos? (Before you speak: one person or two?)' } },
          { kind: 'talk', cards: [
            { q: 'Una amiga se va a vivir a otro país. ¿Qué le deseas? · A friend is moving abroad. What do you wish her?', followUps: ['¿Qué esperas de ella? ¿Que te escriba, que te visite? (What do you hope she does?)', '¿Qué quieres hacer tú antes de su viaje? (What do you want to do before she leaves?)'], phrases: ['[[Espero que|blue]] te [[guste|blue]]…', '[[Ojalá|orange]] [[encuentres|orange]]…', '[[Quiero que|blue]] me [[mandes|blue]]…'], hint: 'Los deseos para ella van con que + subjuntivo; los tuyos, con infinitivo.', example: 'Espero que te guste mucho la ciudad y ojalá encuentres amigos pronto. Quiero que me mandes fotos. Antes del viaje, quiero invitarte a cenar.' },
            { q: 'Imagina que te vas un año a otro país. ¿Qué quieres hacer allí? ¿Y qué quieres que hagan tu familia y tus amigos? · You move abroad for a year. What do you want to do? What do you want your family and friends to do?', followUps: ['¿Qué esperas aprender? (What do you hope to learn?)', '¿Quién quieres que te visite? (Who do you want to visit you?)'], phrases: ['[[Quiero conocer|violet]]… / [[Espero aprender|violet]]…', '[[Quiero que|blue]] mi familia me [[visite|blue]]…', '[[Espero que|blue]] mis amigos me [[escriban|blue]]…'], hint: 'Haz pares: «Quiero viajar» (yo) / «Quiero que mis padres viajen conmigo» (ellos).', example: 'Quiero conocer el país y espero aprender a cocinar platos típicos. Quiero que mi hermano me visite en verano y espero que mis amigos me escriban.' },
            { q: 'Piensa en este mes. Di tres deseos con «ojalá»: para ti, para alguien de tu familia y para tu ciudad. · Think about this month: three wishes with ojalá.', followUps: ['¿Por qué es importante para ti? (Why does it matter to you?)', '¿Y algo que no quieres que pase? (And something you don’t want to happen?)'], phrases: ['[[Ojalá|orange]] [[tenga|orange]] tiempo para…', '[[Ojalá que|orange]] mi madre [[pueda|orange]]…', '[[Ojalá|orange]] no [[haya|orange]]…'], hint: 'Ojalá + subjuntivo, también para ti: «Ojalá apruebe», no «ojalá aprobar».', example: 'Ojalá tenga tiempo para ir al gimnasio. Ojalá que mi madre pueda tomar vacaciones. Y ojalá no haya tanto tráfico en mi barrio.' },
            { q: '¿Qué dices en cada situación? Tu compañero está enfermo; tu vecina se va de vacaciones; tu hermano tiene un examen; es el cumpleaños de tu amiga. · What do you say in each situation?', followUps: ['¿Y si hablas con tu jefe, de usted? (And to your boss, with usted?)', '¿Y a un grupo de personas? (And to a group?)'], phrases: ['[[¡Que te mejores!|teal]]', '[[¡Que lo pases bien!|teal]]', '[[¡Que tengas suerte!|teal]]', '[[¡Que cumplas muchos más!|teal]]'], hint: '¡Que + subjuntivo! Con usted: «¡Que se mejore!». Con ustedes: «¡Que les vaya bien!».', example: 'A mi compañero: «¡Que te mejores!». A mi vecina: «¡Que lo pases muy bien!». A mi hermano: «¡Que tengas suerte!». A mi amiga: «¡Feliz cumpleaños! ¡Que cumplas muchos más!».' },
            { q: '¿Qué esperas de las personas con las que vives o trabajas? · What do you expect from the people you live or work with?', followUps: ['¿Y qué esperan ellos de ti? (And what do they expect from you?)', '¿Hay algo que quieres cambiar? (Is there something you want to change?)'], phrases: ['[[Espero que|blue]] mis compañeros [[sean|blue]]…', '[[Quiero que|blue]] mi jefa me [[dé|blue]]…', 'Ellos [[esperan que|blue]] yo [[llegue|blue]]…'], hint: 'Con «esperar que» el verbo va en subjuntivo, nunca en futuro: «espero que sean», no «serán».', example: 'Espero que mis compañeros de piso sean ordenados. Quiero que mi jefa me dé más tiempo para los proyectos. Y ellos esperan que yo llegue puntual.' },
            { q: 'Ahora eres Valeria. Al final de la fiesta, haces un brindis por Daniel. Di cuatro o cinco deseos. · Now you are Valeria. Make a toast to Daniel with four or five wishes.', followUps: ['¿Qué quieres que Daniel no olvide? (What do you want him not to forget?)', '¿Cuándo esperas verlo otra vez? (When do you hope to see him again?)'], phrases: ['Brindo por Daniel. [[Quiero que|blue]]…', '[[Ojalá|orange]]…', '[[Espero verte|violet]]…', '[[¡Que te vaya muy bien!|teal]]'], hint: 'Mezcla las cuatro formas: quiero que + subjuntivo, ojalá, espero + infinitivo y ¡que…!', example: 'Brindo por Daniel. Quiero que disfrutes de esta aventura y ojalá encuentres un piso bonito pronto. Espero verte en primavera. ¡Que te vaya muy bien y que tengas un buen viaje!', teacher: 'Al terminar el brindis, tú levantas la copa (o el vaso de agua) y respondes como Daniel con un deseo para el grupo: «¡Que les vaya muy bien a todos!».' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno hace las preguntas y tú respondes. Tu alumno escucha y dice si cada deseo es para la misma persona o para otra.', self: 'Ahora haz tú las preguntas en voz alta y respóndelas como Daniel. (Now ask the questions yourself and answer as Daniel.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'El libro de despedida', coach: 'Deseos por escrito. Wishes in writing.',
      steps: [
        { title: 'Un mensaje para Daniel · A message for Daniel', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Después revisan juntos cada deseo: ¿quién desea y quién hace la acción? Tu alumno lee su mensaje en voz alta, como en la fiesta.', self: 'Escribe tu mensaje y toca «Revisar mi texto». Después mira cada deseo: ¿una persona o dos? (Write your message and tap “Revisar mi texto”.)' } },
          { kind: 'write', title: 'Una página del libro de despedida · A page of the farewell book', situation: 'Valeria prepara un libro de despedida para Daniel: cada amigo escribe una página. Escribe la tuya para Daniel (o para una persona real que se va a otra ciudad o a otro país). · Valeria is making a farewell book for Daniel: each friend writes a page. Write yours for Daniel, or for a real person who is moving away.', task: [
            'Saluda y di algo bonito sobre el tiempo juntos. (Greet and say something nice about your time together.)',
            'Escribe dos deseos con «espero que» o «quiero que» + subjuntivo. (Two wishes with espero que / quiero que.)',
            'Escribe un deseo con «ojalá». (One wish with ojalá.)',
            'Di algo que quieres hacer tú, con infinitivo: «quiero visitarte», «espero verte». (Something you want to do yourself.)',
            'Despídete con un deseo corto: «¡Que te vaya bien!», «¡Que tengas buen viaje!». (Close with a short wish.)',
          ], starters: ['Querido Daniel:', 'Estos años contigo…', 'Espero que…', 'Quiero que…', 'Ojalá…', 'Yo quiero… / Espero…', '¡Que te vaya muy bien!', 'Un abrazo muy fuerte,'],
            words: ['espero que', 'quiero que', 'deseo que', 'ojalá', 'te guste', 'encuentres', 'tengas', 'disfrutes', 'nos escribas', 'visitarte', 'verte', 'que te vaya bien', 'que tengas buen viaje'],
            model: 'Querido Daniel: Estos dos años contigo en el laboratorio fueron geniales y te vamos a extrañar mucho. [[Espero que|blue]] Montreal te [[guste|blue]] tanto como esta ciudad y [[ojalá|orange]] [[encuentres|orange]] pronto un apartamento bonito y amigos nuevos. Te pido una cosa: [[quiero que|blue]] nos [[mandes|blue]] fotos de la nieve y que me [[cuentes|blue]] cómo es tu nuevo trabajo. Yo [[quiero visitarte|violet]] el próximo verano, así que prepara un buen plan. [[¡Que te vaya muy bien|teal]] y [[que tengas|teal]] un buen viaje! Un abrazo muy fuerte, Irene',
            minWords: 70,
            checks: [
              { label: 'Un deseo para otra persona: espero que / quiero que… (a wish for someone else)', pattern: '(?<!\\p{L})(?:quiero|queremos|espero|esperamos|deseo|deseamos)\\s+que(?!\\p{L})', tip: 'Escribe un deseo para Daniel: «Espero que te guste la ciudad», «Quiero que nos escribas».' },
              { label: 'Un deseo con ojalá (a wish with ojalá)', pattern: '(?<!\\p{L})ojal[aá](?!\\p{L})', tip: 'Añade un deseo fuerte: «Ojalá encuentres un piso bonito».' },
              { label: 'Algo que quieres hacer tú: quiero / espero + infinitivo (your own plan)', pattern: '(?<!\\p{L})(?:quiero|queremos|espero|esperamos|deseo|deseamos)\\s+\\p{L}+(?:ar|er|ir)(?:te|lo|la|nos|me)?(?!\\p{L})', tip: 'Di algo que quieres hacer tú: «Quiero visitarte», «Espero verte pronto».' },
              { label: 'Un deseo corto de despedida (a short goodbye wish)', pattern: '(?<!\\p{L})que\\s+(?:te\\s+vaya|tengas|disfrutes|descanses|te\\s+diviertas|lo\\s+pases|seas)(?!\\p{L})', tip: 'Despídete con «¡Que te vaya muy bien!» o «¡Que tengas un buen viaje!».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})ojal[aá]\\s+(?:que\\s+)?\\p{L}+(?:ar|er|ir)(?!\\p{L})', why: '«Ojalá» no va con infinitivo: **ojalá apruebe**, no «ojalá aprobar».' },
              { pattern: '(?<!\\p{L})(?:espero|esperamos|quiero|queremos|ojal[aá])\\s+que\\s+(?:\\p{L}+\\s+)?\\p{L}+(?:rás|rá|rán|remos|réis)(?!\\p{L})', why: 'Después de «espero que» o «quiero que» no va el futuro: **espero que te guste**, no «te gustará».' },
              { pattern: '(?<!\\p{L})(?:quiero|espero)\\s+que\\s+yo(?!\\p{L})', why: 'Si eres tú quien hace la acción, usa el infinitivo: **quiero visitarte**, no «quiero que yo te visite».' },
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
            { tone: 'violet', label: 'MISMO SUJETO', formula: 'quiero / espero / deseo + infinitivo', example: 'Quiero ir a la fiesta. · Espero verte pronto.', caption: 'tu deseo para ti: una sola persona', en: 'your wish for yourself: one person' },
            { tone: 'blue', label: 'OTRO SUJETO', formula: 'quiero / espero / deseo + que + subjuntivo', example: 'Quiero que vengas. · Espero que te guste.', caption: 'tu deseo para otra persona o cosa; nunca futuro', en: 'your wish for someone or something else; never the future' },
            { tone: 'orange', label: 'OJALÁ', formula: 'ojalá (que) + subjuntivo · ¡Ojalá!', example: 'Ojalá llegues pronto. · Ojalá apruebe.', caption: 'siempre subjuntivo, también para ti', en: 'always subjunctive, even for yourself' },
            { tone: 'teal', label: '¡QUE…!', formula: '¡Que + subjuntivo!', example: '¡Que te vaya bien! · ¡Que descanses!', caption: 'deseos cortos de despedida', en: 'short goodbye wishes' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Pregunta siempre: **¿una persona o dos?** Una: «Quiero **ir**». Dos: «Quiero que **vengas**». Y dos atajos: **ojalá** y **¡que…!** van siempre con subjuntivo.', en: 'Always ask: one person or two? One: infinitive. Two: que + subjunctive. And two shortcuts: ojalá and ¡que…! always take the subjunctive.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'Mis compañeros quieren que ___ una presentación el lunes.', options: ['doy', 'dar', 'dé'], answer: 2, why: 'Ellos quieren; la presentación la doy yo: que + subjuntivo. Dar → dé, con tilde.', en: 'My colleagues want me to give a presentation on Monday.' },
            { prompt: 'Ojalá ___ sol el día de la excursión.', options: ['hace', 'haga', 'hacer'], answer: 1, why: '«Ojalá» + subjuntivo: hacer → hago → haga.', en: 'Let’s hope it’s sunny on the day of the trip.' },
            { prompt: 'Esperamos ___ el tren de las ocho.', options: ['tomar', 'que tomamos', 'que tomemos'], answer: 0, why: 'Nosotros esperamos y nosotros tomamos el tren: infinitivo.', en: 'We hope to catch the eight o’clock train.' },
            { prompt: 'Tu amiga tiene una entrevista mañana. Le dices: «¡Que ___ mucha suerte!»', options: ['tienes', 'tener', 'tengas'], answer: 2, why: 'Deseo con «¡Que…!»: subjuntivo, tengo → tengas.', en: 'Your friend has an interview tomorrow. You say: “Good luck!”' },
            { prompt: 'Espero que mis hijos ___ bien en el campamento.', options: ['lo pasan', 'lo pasarán', 'lo pasen'], answer: 2, why: 'Espero yo; lo pasan ellos: subjuntivo, no futuro.', en: 'I hope my children have a good time at camp.' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Ahora, una jubilación. Now, a retirement.', blocks: [
          { kind: 'lead', text: 'Marta, la vecina de Valeria, se jubila después de treinta años como profesora. Sus compañeros le hacen una comida. Elige la forma correcta para cada deseo.', en: 'Marta, Valeria’s neighbour, is retiring after thirty years as a teacher. Her colleagues have a lunch for her. Choose the right form for each wish.' },
          { kind: 'choice', title: 'La jubilación de Marta · Marta’s retirement', items: [
            { prompt: 'Sus compañeros: «Esperamos que ___ mucho de tu tiempo libre».', options: ['disfrutes', 'disfrutar', 'disfrutas'], answer: 0, why: 'Esperan ellos; disfruta Marta: que + subjuntivo.', en: 'Her colleagues: “We hope you enjoy your free time a lot.”' },
            { prompt: 'Marta: «Yo quiero ___ a mi hermana en Chile».', options: ['visitar', 'que visite', 'que visito'], answer: 0, why: 'Marta quiere y Marta visita: el mismo sujeto, infinitivo.', en: 'Marta: “I want to visit my sister in Chile.”' },
            { prompt: 'Su nieto: «¡Ojalá ___ más tiempo para jugar conmigo!»', options: ['tener', 'tienes', 'tengas'], answer: 2, why: '«Ojalá» + subjuntivo: tengas.', en: 'Her grandson: “I really hope you’ll have more time to play with me!”' },
            { prompt: 'Al final, Marta se despide de todos: «¡Que les ___ muy bien, chicos!»', options: ['vaya', 'va', 'ir'], answer: 0, why: 'Deseo de despedida para un grupo (ustedes): «¡Que les vaya bien!».', en: 'At the end, Marta says goodbye to everyone: “All the best, everyone!”' },
          ] },
        ] },
        { title: 'Ampliación: deseos formales · Extension: formal wishes', mascot: '/brand/mascot/portrait.webp', coach: 'Para hoteles, empresas y tarjetas. For hotels, companies and cards.', blocks: [
          { kind: 'tip', icon: '✍', title: 'Deseos con usted y ustedes · Wishes with usted and ustedes', text: 'En mensajes formales (un hotel, una empresa, una tarjeta para un cliente) se usan **desear** y **esperar** con usted o ustedes: «**Le deseamos que tenga** un buen viaje», «**Esperamos que disfruten** de su estancia», «**Deseamos que se recupere** pronto». También vas a oír «**Ojalá estuvieras** aquí» (I wish you were here): es otra forma, el imperfecto de subjuntivo, para deseos imposibles o poco probables. La estudias en B2; hoy solo tienes que entenderla.', en: 'In formal messages (a hotel, a company, a card for a client), desear and esperar are used with usted or ustedes. You will also hear “Ojalá estuvieras aquí” (I wish you were here): that is another form, the imperfect subjunctive, for impossible or unlikely wishes. You will study it at B2; for now, just recognise it.' },
          { kind: 'rewrite', title: 'De tú a usted · From tú to usted', items: [
            { prompt: '¡Que tengas un buen viaje! (a un cliente, usted)', instruction: 'Escribe el deseo formal. Empieza con «Le deseamos que».', accept: ['Le deseamos que tenga un buen viaje'] },
            { prompt: 'Espero que te mejores pronto. (a tu jefa, usted)', instruction: 'Cambia a usted.', accept: ['Espero que se mejore pronto'] },
            { prompt: '¡Que disfrutes de la ciudad! (a un grupo de turistas, ustedes)', instruction: 'Escribe el deseo con «Esperamos que» y ustedes.', accept: ['Esperamos que disfruten de la ciudad', 'Esperamos que ustedes disfruten de la ciudad'] },
          ] },
          { kind: 'teacher', text: 'Paso opcional: para estudiantes rápidos o si hay tiempo extra. Basta con reconocer «ojalá estuvieras»; la producción del imperfecto de subjuntivo llega en B2.' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 090 · Recomendaciones: sugerir que, aconsejar que', text: 'Ya expresas deseos para ti y para los demás: «Quiero que vengas», «Ojalá llegues pronto», «¡Que te vaya bien!». En la clase 090 usas la misma estructura (verbo + que + subjuntivo) con otra intención: influir en lo que hacen otros con consejos y sugerencias: «Te aconsejo que descanses», «Te sugiero que llames antes». Es el paso natural: del deseo al consejo.', en: 'You can now express wishes for yourself and for others. In lesson 090 you use the same structure (verb + que + subjunctive) with a different purpose: influencing what others do with advice and suggestions. It is the natural next step: from wishing to advising.', href: '/gramatica/recomendaciones-sugerir-que-aconsejar-que', label: 'Ir a la clase 090' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Quién empieza algo nuevo en tu vida esta semana? ¿Qué le deseas?». Respuesta esperada: un deseo con «espero que», uno con «ojalá» y uno corto con «¡Que…!». Tarea: escribir la página del libro de despedida para una persona real.' },
        ] },
      ],
    },
  ],
};
