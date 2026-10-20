import type { LiveLesson } from '../types';

/**
 * Lesson 398 · B1 · Temporales futuras: cuando, en cuanto, hasta que (course unit G098).
 * Builds on lesson 213 (G054: cuando + presente for routines, antes de / después
 * de + infinitive), lesson 148 (G088: forms of the present subjunctive) and the
 * imperative (G058, G096). Here: «cuando» + present subjunctive when the time
 * is still future (cuando llegues, te llamo / te llamaré / llámame) vs indicative
 * for habits and the past (cuando llego, ceno; cuando llegué, cenamos); «en
 * cuanto», «hasta que», «mientras» with the same split; «antes de que» +
 * subjunctive always; «después de que» + subjunctive for the future; same
 * subject → antes de / después de / hasta + infinitive; questions «¿cuándo
 * vuelves?» with indicative. Typical mistake: *cuando llegarás.
 * Scene: Gabriel goes to Lima for ten days for work; his neighbour Nuria looks
 * after his dog Tula and his plants. Voice message: Gabriel from the airport
 * (Mexican voice, tú). The imperfect subjunctive (cuando llegara) appears only
 * receptively in the Ampliación; productive demand is present subjunctive only.
 */
export const lesson: LiveLesson = {
  id: 398,
  level: 'B1',
  title: 'Temporales futuras: cuando, en cuanto, hasta que',
  subtitle: 'Dar instrucciones y hacer planes para un momento futuro: «cuando llegues», «en cuanto sepa», «hasta que vuelvas», «antes de que llueva».',
  legend: [
    { tone: 'blue', label: 'FUTURO · cuando / en cuanto / hasta que / mientras + subjuntivo (not real yet)' },
    { tone: 'teal', label: 'COSTUMBRE, PASADO O PREGUNTA · + indicativo (habit, past, question)' },
    { tone: 'orange', label: 'ANTES DE QUE · siempre subjuntivo; DESPUÉS DE QUE (futuro) + subjuntivo' },
    { tone: 'violet', label: 'MISMO SUJETO · antes de / después de / hasta + infinitivo (same subject)' },
  ],
  optionNotes: {
    volverás: 'Después de «en cuanto» o «cuando» no se usa el futuro: «en cuanto **vuelvas**».',
    terminará: 'Después de «hasta que» no se usa el futuro: «hasta que **termine**».',
    llegaré: 'Después de «cuando» no se usa el futuro: «cuando **llegue**».',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: '¿Ya pasa o todavía no?', coach: '¿Es real o todavía no? Is it real yet, or not?',
      steps: [
        { title: 'Las llaves de Gabriel · Gabriel’s keys', blocks: [
          { kind: 'lead', text: 'Gabriel se va diez días a Lima por trabajo. Su vecina Nuria va a cuidar a su perra, Tula, y sus plantas. Es domingo por la tarde y Gabriel le da las llaves y le explica todo. En la clase 213 usaste **cuando + presente** para tu rutina; en la clase 088 aprendiste el presente de subjuntivo. Hoy unes las dos cosas para hablar del **futuro**.', en: 'Gabriel is going to Lima for ten days for work. His neighbour Nuria is going to look after his dog, Tula, and his plants. It’s Sunday afternoon and Gabriel gives her the keys and explains everything. In lesson 213 you used cuando + present for your routine; in lesson 088 you learned the present subjunctive. Today you put the two together to talk about the future.' },
          { kind: 'guide', text: { teacher: 'Tú lees las tres frases y tu alumno dice cuál habla de algo que todavía no pasa.', self: 'Lee las tres frases en voz alta. ¿Cuál habla de algo que todavía no es real? (Which one is about something that hasn’t happened yet?)' } },
          { kind: 'compare', title: 'Tres veces «cuando» · Three times “cuando”', columns: [
            { tone: 'teal', label: 'COSTUMBRE · INDICATIVO', sentence: '[[Cuando llego|teal]] a casa, Tula me espera en la puerta.', idea: 'Pasa siempre: presente de indicativo.', en: 'When I get home, Tula waits for me at the door. (every day)' },
            { tone: 'teal', label: 'PASADO · INDICATIVO', sentence: '[[Cuando llegué|teal]] ayer, Tula estaba dormida.', idea: 'Ya pasó: pasado de indicativo.', en: 'When I got home yesterday, Tula was asleep. (it happened)' },
            { tone: 'blue', label: 'FUTURO · SUBJUNTIVO', sentence: '[[Cuando llegues|blue]] mañana, Tula te va a saludar.', idea: 'Todavía no es real: presente de subjuntivo.', en: 'When you arrive tomorrow, Tula will say hello. (not real yet)' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Cuando llegues mañana, Tula te va a saludar.» ¿Nuria ya está en casa de Gabriel?', options: ['Sí: es su costumbre.', 'Sí: llegó ayer.', 'No: habla de mañana, todavía no es real.'], answer: 2, why: '«Llegues» es subjuntivo: la llegada es futura, todavía no pasa.', en: '“When you arrive tomorrow, Tula will greet you.” Is Nuria already at Gabriel’s place?' },
            { prompt: '¿Qué frase habla de una costumbre?', options: ['Cuando salgo, siempre cierro con llave.', 'Cuando salí, cerré con llave.', 'Cuando vuelvas, me cuentas.'], answer: 0, why: '«Siempre» y el presente de indicativo «salgo»: es algo que pasa cada vez.', en: 'Which sentence is about a habit?' },
          ] },
        ] },
        { title: 'Cuando + futuro · When + future', mascot: '/brand/mascot/studying.webp', coach: 'Futuro con «cuando»: subjuntivo. Future with cuando: subjunctive.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'CUANDO + SUBJUNTIVO', question: '¿Qué pasa en un momento futuro?', en: 'What happens at a future moment?', formula: ['cuando + presente de subjuntivo, …', '… presente / futuro / ir a + infinitivo / imperativo'],
            meaning: 'Si «cuando» señala un momento **futuro**, que todavía no es real, su verbo va en **presente de subjuntivo**, nunca en futuro. El otro verbo de la frase sí habla del futuro con normalidad: presente, futuro, «ir a» o una orden (imperativo).',
            examples: [
              { es: '[[Cuando llegues|blue]] a Lima, escríbeme.', en: 'When you get to Lima, text me.' },
              { es: '[[Cuando vuelva|blue]], te invito a cenar.', en: 'When I get back, I’ll take you out for dinner.' },
              { es: '[[Cuando tengas|blue]] tiempo, ¿me mandas una foto de Tula?', en: 'When you have time, will you send me a photo of Tula?' },
              { es: '[[Cuando Gabriel vuelva|blue]], Nuria le devolverá las llaves.', en: 'When Gabriel gets back, Nuria will give him the keys back.' },
            ] },
          { kind: 'table', title: 'El mismo «cuando», tres momentos · The same cuando, three moments', head: ['Momento (time)', 'Verbo con «cuando»', 'Ejemplo (example)'], rows: [
            ['costumbre (habit)', 'presente de indicativo', 'Cuando **viajo**, Nuria cuida a Tula.'],
            ['pasado (past)', 'indefinido / imperfecto', 'Cuando **viajé** a Bogotá, Nuria cuidó a Tula.'],
            ['futuro (future)', 'presente de subjuntivo', 'Cuando **viaje** a Lima, Nuria cuidará a Tula.'],
          ], note: 'Las formas son las de la clase 088: llegar → llegue, volver → vuelva, tener → tenga, saber → sepa, ir → vaya, estar → esté.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Mañana, cuando ___ al aeropuerto, te mando un mensaje.', options: ['llegue', 'llegaré', 'llego'], answer: 0, why: 'Es el viaje de mañana: un momento futuro. Cuando + subjuntivo: llegue. No el futuro.', en: 'Tomorrow, when I get to the airport, I’ll send you a message.' },
            { prompt: 'Normalmente, cuando ___ a Tula al parque, juega con otros perros.', options: ['saco', 'sacaré', 'saque'], answer: 0, why: '«Normalmente»: es una costumbre. Cuando + presente de indicativo: saco.', en: 'Usually, when I take Tula to the park, she plays with other dogs.' },
          ] },
        ] },
        { title: 'En cuanto, hasta que, mientras · As soon as, until, while', mascot: '/brand/mascot/speaking.webp', coach: 'Misma regla, otros conectores. Same rule, other connectors.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'EN CUANTO · HASTA QUE · MIENTRAS', question: '¿Funcionan igual que «cuando»?', en: 'Do they work like cuando?', formula: ['en cuanto + subjuntivo (futuro) = justo después', 'hasta que + subjuntivo (futuro) = el final de la acción', 'mientras + subjuntivo (futuro) = durante ese tiempo'],
            meaning: 'Sí: con un momento **futuro** van con **subjuntivo**; con costumbres o con el pasado, con **indicativo**. **En cuanto** = inmediatamente después. **Hasta que** marca el final: «No te vayas hasta que…». **Mientras** = durante el mismo tiempo.',
            examples: [
              { es: 'Te escribo [[en cuanto sepa|blue]] la hora del vuelo.', en: 'I’ll write to you as soon as I know the flight time.' },
              { es: 'Quédate en casa [[hasta que llegue|blue]] el técnico.', en: 'Stay at home until the technician arrives.' },
              { es: '[[Mientras estés|blue]] fuera, yo riego las plantas.', en: 'While you’re away, I’ll water the plants.' },
              { es: '[[En cuanto llego|teal]] a casa, Tula se pone a saltar.', en: 'As soon as I get home, Tula starts jumping. (every day)' },
            ] },
          { kind: 'table', title: 'Futuro o no · Future or not', head: ['Conector', 'Futuro → subjuntivo', 'Costumbre o pasado → indicativo'], rows: [
            ['en cuanto (as soon as)', 'En cuanto **llegue**, te llamo.', 'En cuanto **llego**, me ducho. / En cuanto **llegué**, te llamé.'],
            ['hasta que (until)', 'Espera hasta que **vuelva**.', 'Siempre espero hasta que **vuelve**. / Esperé hasta que **volvió**.'],
            ['mientras (while)', 'Mientras **estés** fuera, cuido a Tula.', 'Mientras **trabajo**, Tula duerme. / Mientras **trabajaba**, Tula dormía.'],
          ], note: '«Mientras» + subjuntivo también puede significar una condición: «Mientras tenga agua, Tula está bien» (as long as). Lo ves con más detalle en B2.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'No le quites la correa a Tula hasta que ___ dentro del parque.', options: ['estás', 'estarás', 'estés'], answer: 2, why: 'Es una instrucción para mañana: hasta que + subjuntivo. Estar → estés.', en: 'Don’t take Tula off the lead until you’re inside the park.' },
            { prompt: 'Ayer, en cuanto Nuria ___ la puerta, Tula corrió hacia ella.', options: ['abrió', 'abrirá', 'abra'], answer: 0, why: '«Ayer»: ya pasó. En cuanto + indefinido: abrió.', en: 'Yesterday, as soon as Nuria opened the door, Tula ran towards her.' },
            { prompt: 'La semana que viene, mientras Gabriel ___ en Lima, Nuria va a recoger su correo.', options: ['estuvo', 'estará', 'esté'], answer: 2, why: 'Es el tiempo futuro del viaje: mientras + subjuntivo, esté.', en: 'Next week, while Gabriel is in Lima, Nuria is going to collect his post.' },
          ] },
        ] },
        { title: 'Antes de que, después de que · Before, after', mascot: '/brand/mascot/standing.webp', coach: 'Antes de que: siempre subjuntivo. Antes de que: always subjunctive.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'ANTES DE QUE · DESPUÉS DE QUE', question: '¿Y si hay dos personas?', en: 'What if there are two different people?', formula: ['antes de que + subjuntivo (siempre)', 'después de que + subjuntivo (futuro)', 'mismo sujeto → antes de / después de + infinitivo'],
            meaning: '**Antes de que** va **siempre** con subjuntivo, también en las costumbres: lo que pasa después todavía no es real. **Después de que** con un momento futuro también lleva subjuntivo. Pero si el sujeto es **el mismo**, usas el **infinitivo**, como en la clase 213: «Antes de salir, cierro la ventana».',
            examples: [
              { es: 'Riega las plantas [[antes de que haga|orange]] calor.', en: 'Water the plants before it gets hot.' },
              { es: 'Siempre saco a Tula [[antes de que empiece|orange]] a llover.', en: 'I always take Tula out before it starts to rain. (a habit, but still subjunctive)' },
              { es: '[[Después de que|orange]] el técnico se [[vaya|orange]], cierra la llave del gas.', en: 'After the technician leaves, turn off the gas.' },
              { es: '[[Antes de salir|violet]], cierra la ventana del baño.', en: 'Before you go out, close the bathroom window. (you go out, you close it)' },
            ] },
          { kind: 'compare', title: 'Una persona o dos · One person or two', columns: [
            { tone: 'violet', label: 'MISMO SUJETO · INFINITIVO', sentence: '[[Antes de irme|violet]], te dejo las llaves.', idea: 'Yo me voy y yo te dejo las llaves.', en: 'Before I leave, I’ll leave you the keys.' },
            { tone: 'orange', label: 'OTRO SUJETO · QUE + SUBJUNTIVO', sentence: '[[Antes de que te vayas|orange]], te doy un café.', idea: 'Tú te vas; yo te doy el café.', en: 'Before you leave, I’ll make you a coffee.' },
          ] },
          { kind: 'tip', icon: '💡', title: 'Hasta: las dos formas · Hasta: both forms', text: 'Con **hasta** y el mismo sujeto, las dos formas son correctas: «No salgo **hasta terminar**» y «No salgo **hasta que termine**». Con **antes de** y **después de**, si el sujeto es el mismo, lo normal es el infinitivo.', en: 'With hasta and the same subject, both forms are correct. With antes de and después de, if the subject is the same, the infinitive is the normal choice.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Gabriel quiere hablar con Nuria antes de que ella ___ las llaves.', options: ['recoge', 'recoja', 'recoger'], answer: 1, why: 'Dos personas (Gabriel habla, Nuria recoge): antes de que + subjuntivo. Recoger → recojo → recoja.', en: 'Gabriel wants to talk to Nuria before she picks up the keys.' },
            { prompt: 'Antes de ___, Gabriel apaga todas las luces.', options: ['que sale', 'que salga', 'salir'], answer: 2, why: 'Gabriel sale y Gabriel apaga: el mismo sujeto, infinitivo.', en: 'Before leaving, Gabriel turns off all the lights.' },
          ] },
        ] },
        { title: 'Cómo elegir · How to choose', mascot: '/autoestudio/mascot/noting.webp', coach: 'Cuatro preguntas. Four questions.', blocks: [
          { kind: 'decide', title: 'Piensa en tu frase · Think about your sentence', steps: [
            { q: '¿Es una pregunta con «¿cuándo?»? (Is it a question with cuándo?)', yes: 'Indicativo: «[[¿Cuándo vuelves?|teal]]», «¿Cuándo volverás?». No es un conector, es una pregunta.', no: 'next' },
            { q: '¿Usas «antes de» o «después de» con el mismo sujeto? (Same subject?)', yes: 'Infinitivo: «[[Antes de salir|violet]], cierro la ventana».', no: 'next' },
            { q: '¿Es «antes de que»? (Is it antes de que?)', yes: 'Subjuntivo, siempre: «[[antes de que llueva|orange]]».', no: 'next' },
            { q: '¿El momento es futuro, todavía no es real? (Is it a future moment?)', yes: 'Subjuntivo: «[[cuando llegues|blue]]», «[[en cuanto sepa|blue]]», «[[hasta que vuelvas|blue]]».', no: 'Indicativo (costumbre o pasado): «[[cuando llego|teal]]», «[[cuando llegué|teal]]».' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'Cuando o cuándo · When or when?', text: '«Avísame **cuando vuelvas**» = avísame en el momento de volver (subjuntivo). «Avísame **cuándo vuelves**» = dime la fecha (pregunta indirecta, con tilde e indicativo). La tilde cambia el sentido.', en: '“Avísame cuando vuelvas” means let me know when you get back (at that moment). “Avísame cuándo vuelves” means tell me the date you’re coming back: an indirect question, with an accent and the indicative. The accent changes the meaning.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Nuria pregunta: «¿Cuándo ___ de Lima?»', options: ['vuelves', 'que vuelvas', 'vuelvas'], answer: 0, why: 'Es una pregunta con «¿cuándo?»: indicativo. «¿Cuándo vuelves?».', en: 'Nuria asks: “When are you coming back from Lima?”' },
            { prompt: 'Riega las plantas por la mañana, antes de que ___ el sol.', options: ['suba', 'sube', 'subirá'], answer: 0, why: '«Antes de que» siempre lleva subjuntivo: subir → suba.', en: 'Water the plants in the morning, before the sun gets high.' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Cuidado con el futuro después de «cuando». Watch out for the future after cuando.', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la frase con el error y tu alumno dice qué falla antes de ver la corrección: ¿es futuro, costumbre o pasado? ¿Una persona o dos?', self: 'Lee cada frase y busca el error: ¿es futuro, costumbre o pasado? ¿Una persona o dos? Después toca para ver la corrección.' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Cuando llegarás a Lima, escríbeme.', right: 'Cuando llegues a Lima, escríbeme.', why: 'Después de «cuando» no va el futuro, aunque hables del futuro: subjuntivo. (Never the future tense after cuando.)' },
            { wrong: 'En cuanto sabes la hora, avísame.', right: 'En cuanto sepas la hora, avísame.', why: 'Es un momento futuro: en cuanto + subjuntivo. Saber → sepa. (Future moment: subjunctive.)' },
            { wrong: 'Siempre salgo antes de que llega el tráfico.', right: 'Siempre salgo antes de que llegue el tráfico.', why: '«Antes de que» lleva subjuntivo siempre, también en una costumbre. (Antes de que: always subjunctive.)' },
            { wrong: 'Antes de que yo salga, cierro la ventana.', right: 'Antes de salir, cierro la ventana.', why: 'Yo salgo y yo cierro: con el mismo sujeto, lo natural es el infinitivo. (Same subject: use the infinitive.)' },
            { wrong: 'Ayer, cuando llegue a casa, cené.', right: 'Ayer, cuando llegué a casa, cené.', why: 'Es pasado: «cuando» + indefinido. El subjuntivo es solo para el futuro. (Past: indicative.)' },
            { wrong: '¿Cuándo vuelvas de tu viaje?', right: '¿Cuándo vuelves de tu viaje?', why: 'Una pregunta con «¿cuándo?» va en indicativo. (Questions with cuándo take the indicative.)' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Te devuelvo el libro en cuanto lo ___.', options: ['termino', 'termine', 'terminaré'], answer: 1, why: 'Es un momento futuro: en cuanto + subjuntivo. Terminar → termine.', en: 'I’ll give you the book back as soon as I finish it.' },
            { prompt: 'Después de ___, Nuria lava los platos de Tula.', options: ['que come', 'que coma', 'comer'], answer: 2, why: 'Nuria come y Nuria lava los platos: el mismo sujeto, infinitivo.', en: 'After eating, Nuria washes Tula’s bowls.' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno dice tres frases sobre esta tarde: una costumbre («Cuando llego a casa, …»), un plan («Hoy, cuando llegue a casa, …») y una con «antes de que».' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'Instrucciones en la puerta', coach: 'Toca las expresiones marcadas. Tap the marked expressions.',
      steps: [
        { title: 'En el rellano · On the landing', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Gabriel y tu alumno es Nuria. Después tu alumno toca cada expresión marcada y dice si habla del futuro, de una costumbre, del pasado o es una pregunta.', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada: ¿futuro, costumbre, pasado o pregunta? (Future, habit, past or question?)' } },
          { kind: 'explore', title: 'Las instrucciones de Gabriel', setting: 'Domingo, siete de la tarde, en el rellano del edificio. Gabriel sale mañana muy temprano y le da las llaves a Nuria. (Sunday evening on the landing. Gabriel leaves early tomorrow and gives Nuria the keys.)', lines: [
            { who: 'Gabriel', text: 'Gracias por venir, Nuria. Toma, estas son las llaves. [[Cuando llegues|blue]] mañana, Tula va a estar en la cocina.', en: 'Thanks for coming, Nuria. Here, these are the keys. When you arrive tomorrow, Tula will be in the kitchen.' },
            { who: 'Nuria', text: 'Perfecto. ¿Y a qué hora come?', en: 'Perfect. And what time does she eat?' },
            { who: 'Gabriel', text: 'A las ocho de la mañana y a las siete de la tarde. Yo, [[cuando llego|teal]] a casa, primero le pongo agua fresca y después la comida.', en: 'At eight in the morning and seven in the evening. When I get home, I first give her fresh water and then her food.' },
            { who: 'Nuria', text: 'Muy bien. ¿Y los paseos?', en: 'Great. And the walks?' },
            { who: 'Gabriel', text: 'Dos al día. Pero ojo: no la sueltes [[hasta que estés|blue]] dentro del parque. Le encanta correr detrás de las bicis.', en: 'Two a day. But careful: don’t let her off the lead until you’re inside the park. She loves running after bikes.' },
            { who: 'Nuria', text: 'Entendido. Oye, ¿[[cuándo vuelves|teal]] exactamente?', en: 'Got it. Hey, when exactly are you coming back?' },
            { who: 'Gabriel', text: 'El miércoles de la semana que viene, por la noche. Te escribo [[en cuanto sepa|blue]] la hora del vuelo.', en: 'Wednesday next week, at night. I’ll text you as soon as I know the flight time.' },
            { who: 'Nuria', text: '¿Y las plantas? La otra vez, [[cuando te fuiste|teal]] en marzo, casi se secan.', en: 'And the plants? Last time, when you went away in March, they nearly dried out.' },
            { who: 'Gabriel', text: 'Ja, ja, es verdad. Riégalas dos veces por semana, por la mañana, [[antes de que haga|orange]] calor.', en: 'Ha ha, that’s true. Water them twice a week, in the morning, before it gets hot.' },
            { who: 'Nuria', text: 'De acuerdo. Y [[mientras estés|blue]] fuera, ¿puedo traer a mi sobrino a jugar con Tula?', en: 'OK. And while you’re away, can I bring my nephew over to play with Tula?' },
            { who: 'Gabriel', text: '¡Claro! Le encanta. Ah, y [[antes de salir|violet]], cierra bien la ventana del baño, que se abre sola.', en: 'Of course! She loves it. Oh, and before you leave, close the bathroom window properly, because it opens by itself.' },
            { who: 'Nuria', text: 'Tranquilo. ¡Que tengas buen viaje! Y [[cuando vuelvas|blue]], me cuentas todo.', en: 'Don’t worry. Have a good trip! And when you get back, you tell me everything.' },
          ], notes: {
            'Cuando llegues': 'Mañana: un momento **futuro**. Cuando + subjuntivo (llegar → llegue). La otra parte va con «ir a»: «va a estar».',
            'cuando llego': '**Costumbre** de Gabriel: lo hace cada día. Cuando + presente de indicativo.',
            'hasta que estés': 'Marca el final de una acción futura: hasta que + subjuntivo. Con el mismo sujeto también es posible «hasta estar dentro».',
            'cuándo vuelves': 'Es una **pregunta** con tilde: «¿cuándo?» va con indicativo.',
            'en cuanto sepa': '«En cuanto» = justo después. Futuro → subjuntivo de **saber**: sepa (irregular).',
            'cuando te fuiste': 'Ya pasó (en marzo): cuando + indefinido. **Irse** → me fui, te fuiste.',
            'antes de que haga': '«Antes de que» va siempre con subjuntivo: hacer → hago → haga. «Hacer calor» = to be hot (weather).',
            'mientras estés': 'Durante todo el tiempo futuro del viaje: mientras + subjuntivo. Estar → esté, estés.',
            'antes de salir': 'Nuria sale y Nuria cierra: **el mismo sujeto**, antes de + infinitivo.',
            'cuando vuelvas': 'Futuro: cuando + subjuntivo. La otra parte va en presente con valor de futuro: «me cuentas».',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Qué hace Gabriel cuando llega a casa?', options: ['Le pone agua fresca a Tula y después la comida.', 'Riega las plantas.', 'Saca a Tula al parque.'], answer: 0, why: '«Cuando llego a casa, primero le pongo agua fresca y después la comida».', en: 'What does Gabriel do when he gets home?' },
            { prompt: '¿Cuándo va a escribir Gabriel a Nuria?', options: ['En cuanto sepa la hora del vuelo.', 'Cuando llegue a Lima.', 'El miércoles por la noche.'], answer: 0, why: '«Te escribo en cuanto sepa la hora del vuelo».', en: 'When is Gabriel going to write to Nuria?' },
            { prompt: '¿Qué pasó en marzo?', options: ['Nuria perdió las llaves.', 'Las plantas casi se secan.', 'Tula se escapó del parque.'], answer: 1, why: '«La otra vez, cuando te fuiste en marzo, casi se secan».', en: 'What happened in March?' },
          ] },
        ] },
        { title: '¿Futuro o no? · Future or not?', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'classify', title: 'Frases de la conversación · Sentences from the conversation', categories: [
            { id: 'fut', label: 'FUTURO · subjuntivo', tone: 'blue' },
            { id: 'ind', label: 'COSTUMBRE, PASADO O PREGUNTA · indicativo', tone: 'teal' },
            { id: 'inf', label: 'MISMO SUJETO · infinitivo', tone: 'violet' },
          ], items: [
            { text: 'Cuando llegues mañana, Tula va a estar en la cocina.', answer: 'fut', why: '«Mañana»: futuro, subjuntivo «llegues».' },
            { text: 'Cuando llego a casa, le pongo agua fresca.', answer: 'ind', why: 'Costumbre: presente de indicativo «llego».' },
            { text: 'Cuando te fuiste en marzo, casi se secan.', answer: 'ind', why: 'Pasado: indefinido «te fuiste».' },
            { text: 'Te escribo en cuanto sepa la hora del vuelo.', answer: 'fut', why: 'Futuro: en cuanto + subjuntivo «sepa».' },
            { text: 'Antes de salir, cierra la ventana del baño.', answer: 'inf', why: 'Nuria sale y Nuria cierra: infinitivo.' },
            { text: '¿Cuándo vuelves exactamente?', answer: 'ind', why: 'Pregunta con «¿cuándo?»: indicativo.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: «¿Qué va a hacer Nuria mañana cuando llegue a casa de Gabriel?». Tu alumno responde con tres frases con «cuando llegue», «en cuanto» y «antes de que».' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: '¿Futuro, costumbre o pasado? Future, habit or past?',
      steps: [
        { title: 'La nota de la nevera · The note on the fridge', blocks: [
          { kind: 'choice', items: [
            { context: 'Gabriel describe a Tula. (Gabriel describes Tula.)', prompt: 'Cuando Tula ___ la correa, se pone muy contenta.', options: ['vea', 'verá', 've'], answer: 2, why: 'Es una costumbre: pasa cada vez. Cuando + presente de indicativo: ve.', en: 'When Tula sees the lead, she gets really happy.' },
            { context: 'Una instrucción para mañana. (An instruction for tomorrow.)', prompt: 'En cuanto ___ del paseo, límpiale las patas a Tula.', options: ['vuelvas', 'vuelves', 'volverás'], answer: 0, why: 'Futuro: en cuanto + subjuntivo. Volver → vuelva → vuelvas.', en: 'As soon as you get back from the walk, wipe Tula’s paws.' },
            { context: 'La costumbre de Gabriel. (Gabriel’s habit.)', prompt: 'Gabriel siempre sale a correr antes de que ___ el tráfico.', options: ['empezar', 'empieza', 'empiece'], answer: 2, why: '«Antes de que» lleva subjuntivo siempre, también en una costumbre: empiece.', en: 'Gabriel always goes running before the traffic starts.' },
            { context: 'Nuria cuenta lo que pasó ayer. (Nuria tells what happened yesterday.)', prompt: 'Ayer, cuando ___ la puerta, Tula se escondió debajo del sofá.', options: ['abra', 'abrí', 'abriré'], answer: 1, why: 'Pasado: cuando + indefinido, abrí.', en: 'Yesterday, when I opened the door, Tula hid under the sofa.' },
            { context: 'Otra instrucción. (Another instruction.)', prompt: 'Deja la luz del pasillo encendida hasta que ___ de noche.', options: ['será', 'es', 'sea'], answer: 2, why: 'Futuro: hasta que + subjuntivo. Ser → sea.', en: 'Leave the hall light on until it gets dark.' },
          ] },
        ] },
        { title: '¿Subjuntivo o indicativo? · Subjunctive or indicative?', blocks: [
          { kind: 'classify', title: '¿Qué forma necesita el verbo? · Which form does the verb need?', categories: [
            { id: 'subj', label: 'FUTURO → subjuntivo', tone: 'blue' },
            { id: 'ind', label: 'COSTUMBRE O PASADO → indicativo', tone: 'teal' },
          ], items: [
            { text: 'Cuando Gabriel ___ (volver) el miércoles, cenarán juntos.', answer: 'subj', why: 'Futuro: «cuando Gabriel vuelva».' },
            { text: 'Cuando Gabriel ___ (viajar), siempre deja a Tula con Nuria.', answer: 'ind', why: 'Costumbre: «cuando viaja».' },
            { text: 'La semana que viene, mientras Gabriel ___ (estar) en Lima, Nuria cuidará a Tula.', answer: 'subj', why: 'Futuro: «mientras esté en Lima».' },
            { text: 'Tula siempre ladra hasta que alguien le ___ (abrir) la puerta.', answer: 'ind', why: 'Costumbre: «hasta que alguien le abre».' },
            { text: 'Gabriel no va a estar tranquilo hasta que Nuria le ___ (mandar) una foto de Tula.', answer: 'subj', why: 'Futuro: «hasta que le mande una foto».' },
            { text: 'El año pasado, cuando Gabriel ___ (irse) a Bogotá, las plantas casi se secaron.', answer: 'ind', why: 'Pasado: «cuando se fue».' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Cuando llegarás a Lima, escríbeme un mensaje.', ok: false, options: ['Cuando llegas a Lima, escríbeme un mensaje.', 'Cuando llegar a Lima, escríbeme un mensaje.', 'Cuando llegues a Lima, escríbeme un mensaje.'], answer: 2, why: 'Momento futuro: cuando + subjuntivo (llegues). Nunca el futuro después de «cuando».' },
            { sentence: 'Te devuelvo las llaves en cuanto vuelvas.', ok: true, why: 'Correcta: futuro, en cuanto + subjuntivo (vuelvas).' },
            { sentence: 'Riega las plantas antes de que hace calor.', ok: false, options: ['Riega las plantas antes de que haga calor.', 'Riega las plantas antes de que hará calor.', 'Riega las plantas antes de hace calor.'], answer: 0, why: '«Antes de que» siempre lleva subjuntivo: haga.' },
            { sentence: 'Antes de que yo salga de casa, yo cierro la ventana.', ok: false, options: ['Antes de saliendo de casa, cierro la ventana.', 'Antes de salir de casa, cierro la ventana.', 'Antes de que salgo de casa, cierro la ventana.'], answer: 1, why: 'El mismo sujeto (yo salgo, yo cierro): lo natural es antes de + infinitivo, sin repetir «yo».' },
            { sentence: '¿Cuándo vuelvas de Lima?', ok: false, options: ['¿Cuándo que vuelvas de Lima?', '¿Cuándo que vuelves de Lima?', '¿Cuándo vuelves de Lima?'], answer: 2, why: 'Pregunta con «¿cuándo?»: indicativo, vuelves.' },
          ] },
        ] },
        { title: 'Mensajes desde Lima · Messages from Lima', blocks: [
          { kind: 'chat-fill', title: 'Nuria y Gabriel, el martes · Nuria and Gabriel on Tuesday', lines: [
            { who: 'Nuria', text: '¡Hola! Todo bien. Tula ya come normal: cuando le ___ la comida, mueve la cola sin parar.', options: ['pondré', 'pongo', 'ponga'], answer: 1, why: 'Describe lo que pasa cada vez estos días: costumbre, indicativo (pongo).' },
            { who: 'Gabriel', text: '¡Qué bien! Te mando una foto de Lima en cuanto ___ del congreso.', options: ['salgo', 'salga', 'saldré'], answer: 1, why: 'Futuro: en cuanto + subjuntivo. Salir → salgo → salga.' },
            { who: 'Nuria', text: 'Genial. Oye, el técnico del gas viene el jueves. ¿Me quedo hasta que ___?', options: ['termine', 'termina', 'terminará'], answer: 0, why: 'Futuro: hasta que + subjuntivo, termine.' },
            { who: 'Gabriel', text: 'Sí, por favor. Y antes de que ___, pídele el papel de la revisión.', options: ['se irá', 'se vaya', 'se va'], answer: 1, why: 'El técnico se va; tú le pides el papel: antes de que + subjuntivo, siempre. Ir → vaya. Ni presente ni futuro.' },
            { who: 'Nuria', text: '¡Hecho! ¿Ya sabes ___ vuelves exactamente?', options: ['cuándo', 'en cuanto', 'cuando'], answer: 0, why: 'Es una pregunta indirecta (¿qué día?): «cuándo», con tilde e indicativo.' },
            { who: 'Gabriel', text: 'El miércoles por la noche. Cuando ___ al aeropuerto, te aviso.', options: ['llegue', 'llegaré', 'llego'], answer: 0, why: 'Futuro: cuando + subjuntivo, llegue. No el futuro «llegaré».' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['Cuando', 'llegues', 'a', 'casa,', 'escríbeme'], accept: ['Cuando llegues a casa, escríbeme'], en: 'When you get home, text me.' },
            { tiles: ['Te', 'llamo', 'en', 'cuanto', 'sepa', 'algo'], accept: ['Te llamo en cuanto sepa algo', 'En cuanto sepa algo te llamo'], en: 'I’ll call you as soon as I know something.' },
            { tiles: ['No', 'me', 'voy', 'hasta', 'que', 'vuelvas'], accept: ['No me voy hasta que vuelvas'], en: 'I’m not leaving until you get back.' },
            { tiles: ['Saca', 'a', 'Tula', 'antes', 'de', 'que', 'llueva'], accept: ['Saca a Tula antes de que llueva', 'Antes de que llueva saca a Tula'], en: 'Take Tula out before it rains.' },
          ] },
        ] },
        { title: 'Transforma · Transform', blocks: [
          { kind: 'rewrite', title: 'Del plan a la frase · From the plan to the sentence', items: [
            { prompt: 'Gabriel vuelve el miércoles. Después, Nuria le devuelve las llaves.', instruction: 'Une las dos ideas. Empieza con «Cuando Gabriel…».', accept: ['Cuando Gabriel vuelva, Nuria le devuelve las llaves', 'Cuando Gabriel vuelva el miércoles, Nuria le devuelve las llaves', 'Cuando Gabriel vuelva, Nuria le devolverá las llaves', 'Cuando Gabriel vuelva el miércoles, Nuria le devolverá las llaves', 'Cuando Gabriel vuelva, Nuria le va a devolver las llaves', 'Cuando Gabriel vuelva el miércoles, Nuria le va a devolver las llaves'] },
            { prompt: 'Cuando llego a casa, saco a Tula. (costumbre)', instruction: 'Cámbialo a un plan para mañana. Empieza con «Mañana, cuando…».', accept: ['Mañana, cuando llegue a casa, saco a Tula', 'Mañana, cuando llegue a casa, sacaré a Tula', 'Mañana, cuando llegue a casa, voy a sacar a Tula'] },
            { prompt: 'Nuria va a salir. Antes, va a cerrar la ventana.', instruction: 'Une las ideas con «antes de» (el mismo sujeto).', accept: ['Antes de salir, Nuria va a cerrar la ventana', 'Antes de salir, Nuria cerrará la ventana', 'Nuria va a cerrar la ventana antes de salir', 'Nuria cerrará la ventana antes de salir', 'Antes de salir, Nuria cierra la ventana', 'Nuria cierra la ventana antes de salir'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno da tres instrucciones reales a alguien que va a cuidar su casa: una con «cuando», una con «en cuanto» y una con «antes de que».' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Un audio desde el aeropuerto', coach: 'Primero escucha sin leer. Listen first, read later.',
      steps: [
        { title: 'Últimas instrucciones · Last instructions', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general. Segunda escucha: tu alumno levanta la mano cada vez que oye «cuando», «en cuanto», «hasta que», «mientras» o «antes de que» y repite el verbo. Después, las preguntas.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Anota cada verbo después de «cuando», «en cuanto», «hasta que», «mientras» y «antes de que». (Note each verb after these connectors.)' } },
          { kind: 'listen', title: 'Un audio de Gabriel', channel: 'MENSAJE DE VOZ · DE GABRIEL PARA NURIA', src: '/audio/grammar-live/398.mp3',
            before: 'Gabriel está en el aeropuerto y le manda un audio a Nuria. ¿Qué crees que olvidó decirle? (Gabriel is at the airport and sends Nuria a voice message. What do you think he forgot to tell her?)',
            gist: { prompt: '¿Cuál es la idea general? · What is the main idea?', options: ['Gabriel le da a Nuria unas instrucciones que olvidó decirle.', 'Gabriel le pide a Nuria que lo lleve al aeropuerto.', 'Gabriel cancela el viaje y vuelve a casa.'], answer: 0, why: '«Te dejo unas cosas que se me olvidaron ayer», y después explica qué hacer con Tula, el parque y el técnico.', en: 'What is the main idea?' },
            details: [
              { prompt: '¿Qué va a hacer Tula en cuanto vea a Nuria?', options: ['Va a saltar mucho.', 'Va a ladrar a la puerta.', 'Va a esconderse.'], answer: 0, why: '«En cuanto Tula te vea, va a saltar como loca».', en: 'What will Tula do as soon as she sees Nuria?' },
              { prompt: '¿Cuándo tiene que sacar Nuria a Tula por la noche?', options: ['Después de cenar.', 'Cuando llegue Gabriel.', 'Antes de que cierren el parque.'], answer: 2, why: '«Sácala antes de que cierren el parque, a las diez».', en: 'When does Nuria have to take Tula out at night?' },
              { prompt: '¿Qué no debe hacer Nuria mientras Gabriel está fuera?', options: ['Darle a Tula comida de la mesa.', 'Abrir las ventanas.', 'Traer a su sobrino.'], answer: 0, why: '«Mientras yo esté fuera, no le des comida de la mesa».', en: 'What shouldn’t Nuria do while Gabriel is away?' },
              { prompt: '¿Hasta cuándo tiene que quedarse Nuria en casa el jueves?', options: ['Hasta que llame Gabriel.', 'Hasta las diez de la noche.', 'Hasta que el técnico termine la revisión.'], answer: 2, why: '«Quédate en casa hasta que el técnico termine la revisión».', en: 'Until when does Nuria have to stay at the flat on Thursday?' },
            ],
            transcript: 'Hola, Nuria, soy Gabriel. Ya estoy en el aeropuerto; el vuelo sale en una hora. Te dejo unas cosas que se me olvidaron ayer. [[Cuando abras|blue]] la puerta, no te preocupes por la alarma: la desconecté. [[En cuanto|blue]] Tula te [[vea|blue]], va a saltar como loca. Es normal: déjala un minuto y se tranquiliza. Por la noche, sácala [[antes de que cierren|orange]] el parque, a las diez, porque después la calle está muy oscura. Y otra cosa: [[mientras|blue]] yo [[esté|blue]] fuera, no le des comida de la mesa, por favor, que luego le duele la barriga. Ah, el jueves por la mañana viene el técnico del gas. Quédate en casa [[hasta que|blue]] el técnico [[termine|blue]] la revisión; solo tarda media hora. Yo te escribo [[cuando llegue|blue]] al hotel, pero seguramente será muy tarde. Y [[cuando vuelva|blue]], te invito a cenar, ¿de acuerdo? Mil gracias, de verdad. ¡Un abrazo!',
            reply: { teacher: 'Tú eres Gabriel. Tu alumno es Nuria y responde al audio con tres frases: dice que todo está claro, explica qué va a hacer mañana cuando llegue a la casa y pide algo para cuando Gabriel llegue al hotel.', self: 'Responde a Gabriel en voz alta como Nuria: di que todo está claro, explica qué vas a hacer mañana cuando llegues a su casa y pídele algo para cuando llegue al hotel. (Answer Gabriel as Nuria.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Planes, costumbres e instrucciones', coach: '¿Ya es real o todavía no? Real yet, or not?',
      steps: [
        { title: 'Hablamos del futuro · Let’s talk about the future', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas y tu alumno responde con frases completas. Si dice «cuando llegaré» o «antes de que sale», tú repites la frase correcta y sigues con la repregunta.', self: 'Lee cada pregunta y responde en voz alta con frases completas. Antes de hablar, piensa: ¿futuro, costumbre o pasado? (Before you speak: future, habit or past?)' } },
          { kind: 'talk', cards: [
            { q: '¿Qué haces normalmente cuando llegas a casa? ¿Y qué vas a hacer hoy cuando llegues? · What do you usually do when you get home? And today?', followUps: ['¿Y ayer, qué hiciste cuando llegaste? (And yesterday?)', '¿Qué haces en cuanto entras por la puerta? (As soon as you walk in?)'], phrases: ['Normalmente, [[cuando llego|teal]]…', 'Hoy, [[cuando llegue|blue]]…', 'Ayer, [[cuando llegué|teal]]…'], hint: 'Tres momentos, tres formas: llego (costumbre), llegué (pasado), llegue (futuro).', example: 'Normalmente, cuando llego a casa, me cambio de ropa y preparo un té. Hoy, cuando llegue, voy a llamar a mi madre. Ayer, cuando llegué, me dormí en el sofá.' },
            { q: 'Piensa en tu próximo viaje o en tus próximas vacaciones. ¿Qué vas a hacer en cuanto llegues? · Your next trip: what will you do as soon as you arrive?', followUps: ['¿Qué tienes que hacer antes de irte? (What do you have to do before you leave?)', '¿Quién cuida tu casa mientras estés fuera? (Who looks after your place while you’re away?)'], phrases: ['[[En cuanto llegue|blue]]…', '[[Antes de irme|violet]]…', '[[Mientras esté|blue]] fuera…'], hint: 'Futuro → subjuntivo: en cuanto llegue. Mismo sujeto con «antes de» → infinitivo: antes de irme.', example: 'En cuanto llegue a la playa, voy a nadar. Antes de irme, tengo que regar las plantas. Mientras esté fuera, mi hermana va a recoger el correo.' },
            { q: 'Alguien va a cuidar tu casa (o tu mascota, o tus plantas). Dale tres instrucciones. · Someone is looking after your home: give three instructions.', followUps: ['¿Qué tiene que hacer antes de salir? (Before leaving?)', '¿Qué no debe hacer mientras estés fuera? (What shouldn’t they do?)'], phrases: ['[[Cuando llegues|blue]], …', '[[En cuanto|blue]] [[entres|blue]], …', 'No… [[hasta que|blue]]…'], hint: 'Instrucciones: subjuntivo después del conector e imperativo en la otra parte: «Cuando llegues, abre la ventana».', example: 'Cuando llegues, abre las ventanas un rato. En cuanto entres, dale agua al gato. Y si está nervioso, quédate un rato con él hasta que se tranquilice.' },
            { q: '¿Qué quieres hacer antes de que termine este año? · What do you want to do before this year ends?', followUps: ['¿Y antes de que empiece el verano? (And before summer starts?)', '¿Qué no vas a hacer hasta que tengas más tiempo? (What won’t you do until you have more time?)'], phrases: ['[[Antes de que termine|orange]] el año, quiero…', '[[Antes de que empiece|orange]]…', 'No voy a… [[hasta que tenga|blue]]…'], hint: '«Antes de que» siempre con subjuntivo: termine, empiece, llegue.', example: 'Antes de que termine el año, quiero visitar a mis abuelos. Antes de que empiece el verano, voy a buscar un curso de natación. Y no voy a cambiar de coche hasta que tenga más dinero ahorrado.' },
            { q: 'Piensa en una persona que espera algo importante: un trabajo, un bebé, un examen. ¿Qué va a hacer cuando eso pase? · Someone waiting for something important: what will they do when it happens?', followUps: ['¿Qué hace mientras espera? (What does she or he do while waiting?)', '¿Qué va a cambiar después de que pase? (What will change afterwards?)'], phrases: ['[[Cuando tenga|blue]] el trabajo…', '[[En cuanto nazca|blue]] el bebé…', '[[Hasta que sepa|blue]] el resultado…'], hint: 'Si habla del futuro, el verbo después de «cuando», «en cuanto» o «hasta que» va en subjuntivo.', example: 'Mi prima espera un bebé. En cuanto nazca, va a dejar de trabajar unos meses. Cuando el bebé tenga un año, quiere volver a la oficina.' },
            { q: 'Ahora eres Nuria. Gabriel te llama desde Lima. Cuéntale cómo está Tula y hablen de su vuelta. · You are Nuria. Gabriel calls from Lima.', followUps: ['¿Cuándo vuelves exactamente? (Ask when he’s coming back.)', '¿Qué hacemos cuando llegues? (What shall we do when he gets back?)'], phrases: ['[[¿Cuándo vuelves?|teal]]', '[[Cuando vuelvas|blue]], …', '[[En cuanto|blue]] [[llegues|blue]] al aeropuerto, …'], hint: 'La pregunta con «¿cuándo?» va en indicativo; la respuesta con «cuando» + futuro, en subjuntivo.', example: 'Tula está muy bien: cuando la saco, corre muchísimo. ¿Cuándo vuelves exactamente? En cuanto llegues al aeropuerto, mándame un mensaje. Y cuando vuelvas, me cuentas todo del congreso.', teacher: 'Tú eres Gabriel y respondes a las preguntas de Nuria con «cuando», «en cuanto» y «hasta que».' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno hace las preguntas y tú respondes. Tu alumno escucha y dice si cada frase habla del futuro, de una costumbre o del pasado.', self: 'Ahora haz tú las preguntas en voz alta y respóndelas como Gabriel. (Now ask the questions yourself and answer as Gabriel.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Una nota para quien cuida tu casa', coach: 'Instrucciones claras por escrito. Clear instructions in writing.',
      steps: [
        { title: 'La nota de la nevera · The note on the fridge', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Después revisan juntos cada conector: ¿la acción es futura? ¿Va en subjuntivo? Tu alumno lee su nota en voz alta, como Gabriel.', self: 'Escribe tu nota y toca «Revisar mi texto». Después mira cada conector: ¿futuro → subjuntivo? (Write your note and tap “Revisar mi texto”.)' } },
          { kind: 'write', title: 'Instrucciones para una semana · Instructions for a week', situation: 'Te vas de viaje una semana y una amiga va a cuidar tu casa (tu perro, tu gato o tus plantas). Escríbele una nota para dejar en la nevera. · You’re going away for a week and a friend is looking after your home. Write her a note to leave on the fridge.', task: [
            'Saluda y da las gracias. (Greet her and say thank you.)',
            'Explica qué hacer al llegar, con «cuando» o «en cuanto» + subjuntivo. (What to do when she arrives.)',
            'Da una instrucción con «antes de que» y otra con «hasta que» o «mientras». (One instruction with antes de que, another with hasta que or mientras.)',
            'Describe una costumbre de tu mascota o de tu casa con «cuando» + presente de indicativo. (A habit, with the indicative.)',
            'Despídete con un plan para cuando vuelvas. (Close with a plan for when you get back.)',
          ], starters: ['¡Hola, …! Mil gracias por…', 'Cuando llegues, …', 'En cuanto entres, …', 'Antes de que…', 'Mientras esté fuera, …', 'Cuando vuelva, te invito a…', 'Un abrazo,'],
            words: ['cuando llegues', 'en cuanto', 'hasta que', 'mientras', 'antes de que', 'después de que', 'antes de salir', 'riega', 'saca', 'cierra', 'cuando vuelva'],
            model: '¡Hola, Marta! Mil gracias por cuidar a Lucas, mi gato, esta semana. [[Cuando llegues|blue]], seguramente va a estar en la ventana: [[cuando oye|teal]] las llaves, siempre corre hacia la puerta. [[En cuanto|blue]] [[entres|blue]], ponle comida y agua fresca. Riega las plantas del balcón por la mañana, [[antes de que haga|orange]] calor, y [[mientras|blue]] yo [[esté|blue]] fuera, no lo dejes salir al balcón: le encanta subirse a la barandilla. Si se esconde debajo de la cama, no te preocupes: espera tranquila [[hasta que|blue]] [[salga|blue]] solo. [[Antes de salir|violet]], cierra bien la ventana de la cocina. [[Cuando vuelva|blue]], te invito a cenar a tu restaurante favorito. ¡Un abrazo! Sergio',
            minWords: 80,
            checks: [
              { label: 'Un momento futuro con cuando / en cuanto (a future moment)', pattern: '(?<!\\p{L})(?:cuando|en\\s+cuanto)\\s+(?:\\p{L}+\\s+)?(?:llegues|entres|abras|vuelva|vuelvas|tengas|veas|termines|salgas|estés|sepas|llegue|salga|vea)(?!\\p{L})', tip: 'Explica qué hacer al llegar: «Cuando llegues, …», «En cuanto entres, …».' },
              { label: 'Una instrucción con antes de que (before + another person)', pattern: '(?<!\\p{L})antes\\s+de\\s+que(?!\\p{L})', tip: 'Añade una instrucción con «antes de que» + subjuntivo: «antes de que haga calor».' },
              { label: 'Hasta que o mientras (until / while)', pattern: '(?<!\\p{L})(?:hasta\\s+que|mientras)(?!\\p{L})', tip: 'Usa «hasta que» o «mientras»: «Mientras esté fuera, …».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})(?:cuando|en\\s+cuanto|hasta\\s+que|mientras|antes\\s+de\\s+que|después\\s+de\\s+que)\\s+(?:\\p{L}+\\s+)?\\p{L}+(?:rás|rá|rán|remos|ré)(?!\\p{L})', why: 'Después de «cuando», «en cuanto» o «hasta que» no va el futuro: **cuando llegues**, no «cuando llegarás».' },
              { pattern: '(?<!\\p{L})antes\\s+de\\s+que\\s+(?:\\p{L}+\\s+)?(?:hace|llega|sale|empieza|cierran|viene|vuelve|termina|llueve|está)(?!\\p{L})', why: '«Antes de que» lleva siempre subjuntivo: **antes de que haga calor**, no «antes de que hace».' },
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
            { tone: 'blue', label: 'FUTURO', formula: 'cuando / en cuanto / hasta que / mientras + subjuntivo', example: 'Cuando llegues, te llamo. · Espera hasta que vuelva.', caption: 'todavía no es real; nunca futuro después del conector', en: 'not real yet; never the future tense after the connector' },
            { tone: 'teal', label: 'COSTUMBRE, PASADO, PREGUNTA', formula: 'cuando + indicativo · ¿cuándo? + indicativo', example: 'Cuando llego, ceno. · Cuando llegué, cenamos. · ¿Cuándo vuelves?', caption: 'pasa siempre, ya pasó o es una pregunta', en: 'it always happens, it already happened, or it’s a question' },
            { tone: 'orange', label: 'ANTES DE QUE · DESPUÉS DE QUE', formula: 'antes de que + subjuntivo (siempre) · después de que + subjuntivo (futuro)', example: 'Sal antes de que llueva. · Después de que se vaya, cierra.', caption: 'dos sujetos distintos', en: 'two different subjects' },
            { tone: 'violet', label: 'MISMO SUJETO', formula: 'antes de / después de / hasta + infinitivo', example: 'Antes de salir, cierra la ventana.', caption: 'una sola persona hace las dos acciones', en: 'one person does both actions' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Pregunta siempre: **¿ya es real o todavía no?** Si todavía no es real (futuro): subjuntivo, «cuando **llegues**». Si pasa siempre o ya pasó: indicativo, «cuando **llego**», «cuando **llegué**». Y nunca «cuando llegarás».', en: 'Always ask: is it real yet? If not (future): subjunctive. If it always happens or already happened: indicative. And never the future tense after cuando.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'Te devuelvo la maleta cuando ___ de vacaciones.', options: ['vuelvas', 'vuelves', 'volverás'], answer: 0, why: 'Momento futuro: cuando + subjuntivo, vuelvas. Nunca el futuro después de «cuando».', en: 'I’ll give you your suitcase back when you get back from your holiday.' },
            { prompt: 'De niño, cuando ___ a casa de mis abuelos, siempre comíamos paella.', options: ['iremos', 'íbamos', 'vayamos'], answer: 1, why: 'Costumbre en el pasado: cuando + imperfecto de indicativo, íbamos.', en: 'As a child, when we went to my grandparents’ house, we always ate paella.' },
            { prompt: 'Termina el informe antes de que ___ la reunión.', options: ['empezar', 'empiece', 'empieza'], answer: 1, why: '«Antes de que» siempre lleva subjuntivo: empiece.', en: 'Finish the report before the meeting starts.' },
            { prompt: '—¿Cuándo ___ tus padres? —El sábado.', options: ['llegan', 'que llegan', 'lleguen'], answer: 0, why: 'Pregunta con «¿cuándo?»: indicativo, llegan.', en: '“When are your parents arriving?” “On Saturday.”' },
            { prompt: 'No voy a estar tranquila hasta que el médico me ___ los resultados.', options: ['da', 'dé', 'dará'], answer: 1, why: 'Futuro: hasta que + subjuntivo. Dar → dé, con tilde.', en: 'I won’t be at ease until the doctor gives me the results.' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Ahora, un primer día de trabajo. Now, a first day at work.', blocks: [
          { kind: 'lead', text: 'Óscar empieza mañana en una agencia de viajes. Su compañera Alba le explica cómo va a ser su primer día. Elige la forma correcta.', en: 'Óscar starts at a travel agency tomorrow. His colleague Alba explains what his first day will be like. Choose the right form.' },
          { kind: 'choice', title: 'El primer día de Óscar · Óscar’s first day', items: [
            { prompt: 'Alba: «Cuando ___ a la oficina, pregunta por mí en recepción».', options: ['llegar', 'llegas', 'llegues'], answer: 2, why: 'Instrucción para mañana: cuando + subjuntivo, llegues.', en: 'Alba: “When you get to the office, ask for me at reception.”' },
            { prompt: 'Alba: «En cuanto ___ tu contraseña, puedes abrir el correo».', options: ['tengas', 'tendrás', 'tienes'], answer: 0, why: 'Futuro: en cuanto + subjuntivo, tengas.', en: 'Alba: “As soon as you have your password, you can open your email.”' },
            { prompt: 'Alba: «Yo siempre reviso las reservas antes de ___ los correos».', options: ['contestar', 'que conteste', 'que contesto'], answer: 0, why: 'Alba revisa y Alba contesta: el mismo sujeto, antes de + infinitivo.', en: 'Alba: “I always check the bookings before answering the emails.”' },
            { prompt: 'Alba: «Vas a trabajar conmigo hasta que ___ a usar el programa».', options: ['aprenderás', 'aprendes', 'aprendas'], answer: 2, why: 'Es el final de un tiempo futuro: hasta que + subjuntivo, aprendas.', en: 'Alba: “You’ll work with me until you learn to use the software.”' },
          ] },
        ] },
        { title: 'Ampliación: del futuro al pasado · Extension: from future to past', mascot: '/brand/mascot/portrait.webp', coach: 'Solo para reconocer. Just to recognise.', blocks: [
          { kind: 'tip', icon: '🔭', title: 'Cuando llegara · When he arrived (later)', text: 'Si cuentas en pasado un plan que era futuro en ese momento, el subjuntivo cambia a **imperfecto de subjuntivo**: «Te escribo cuando **llegue**» → «Gabriel dijo que le escribiría cuando **llegara**». Lo estudias en B2; hoy solo tienes que reconocerlo. Y dos conectores más formales que funcionan como «en cuanto»: **tan pronto como** y **una vez que** + subjuntivo para el futuro: «Tan pronto como sepa algo, le aviso».', en: 'When you report in the past a plan that was in the future at that moment, the subjunctive changes to the imperfect subjunctive (llegara). You will study it at B2; for now, just recognise it. Two more formal connectors work like en cuanto: tan pronto como (as soon as) and una vez que (once).' },
          { kind: 'choice', title: 'Reconoce el sentido · Recognise the meaning', items: [
            { prompt: '«Nuria le prometió a Gabriel que lo llamaría en cuanto llegara el técnico.» ¿Cuándo iba a llamar Nuria?', options: ['Justo después de la llegada del técnico.', 'Antes de la llegada del técnico.', 'Todos los días.'], answer: 0, why: '«En cuanto llegara» = justo después de llegar: el futuro visto desde el pasado.', en: '“Nuria promised Gabriel she would call him as soon as the technician arrived.” When was Nuria going to call?' },
            { prompt: '«Gabriel le pidió que no soltara a Tula hasta que estuviera en el parque.» ¿Qué tenía que hacer Nuria?', options: ['Llevar a Tula con correa hasta el parque.', 'No ir al parque.', 'Soltar a Tula en la calle.'], answer: 0, why: '«Hasta que estuviera en el parque»: la correa termina dentro del parque.', en: '“Gabriel asked her not to let Tula off the lead until she was in the park.” What did Nuria have to do?' },
          ] },
          { kind: 'rewrite', title: 'Un registro más formal · A more formal register', items: [
            { prompt: 'En cuanto tengamos los billetes, se los enviamos. (una agencia, a un cliente)', instruction: 'Cambia «en cuanto» por «tan pronto como».', accept: ['Tan pronto como tengamos los billetes, se los enviamos'] },
            { prompt: 'Cuando reciba la confirmación, puede pasar a recoger las llaves. (un hotel, a un cliente)', instruction: 'Cambia «cuando» por «una vez que».', accept: ['Una vez que reciba la confirmación, puede pasar a recoger las llaves'] },
          ] },
          { kind: 'teacher', text: 'Paso opcional: para estudiantes rápidos o si hay tiempo extra. Basta con entender «llegara», «estuviera»; la producción del imperfecto de subjuntivo llega en B2.' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 099 · Finales: para que, a fin de que', text: 'Ya sabes hablar de momentos futuros: «cuando llegues», «en cuanto sepa», «antes de que llueva». En la clase 099 usas la misma lógica para la finalidad: con el mismo sujeto, «para + infinitivo»; con otra persona, «para que + subjuntivo»: «Te dejo las llaves para que entres». Es el paso natural: el objetivo, como el futuro, todavía no es real.', en: 'You can now talk about future moments. In lesson 099 you use the same logic for purpose: same subject, para + infinitive; another person, para que + subjunctive. It is the natural next step: a goal, like a future moment, is not real yet.', href: '/gramatica/finales-para-que-a-fin-de', label: 'Ir a la clase 099' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Qué vas a hacer cuando termine esta clase? ¿Y antes de que termine la semana?». Respuesta esperada: «cuando termine» + plan y «antes de que termine» + plan. Tarea: escribir la nota de la nevera para una persona real.' },
        ] },
      ],
    },
  ],
};
