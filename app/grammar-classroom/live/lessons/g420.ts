import type { LiveLesson } from '../types';

/**
 * Lesson 420 · B1 · Estar + participio para estados resultantes (course unit G120).
 * Builds on G046 (regular and irregular participles), G082 (estar + participio
 * previewed at A2), G045/G087 (haber + participio: perfect and pluperfect), G041
 * (estar + gerundio) and G061 (quedarse + participio for people). G121 (ser +
 * participio vs estar + participio) follows: here ser + participio is only a pointer.
 * Scene: Irene Castillo leaves the flat she has rented for two years. On Saturday
 * at ten Mauricio Vega, from the letting agency, checks the flat with her against
 * the inventory list before she hands back the keys (they use usted). In the
 * afternoon she moves into her new flat with her brother Pablo; in the evening her
 * friend Sara phones. In the voicemail Mauricio (Colombian voice, usted) reports
 * to the owner, doña Beatriz Molina. The learner writes the email to the owner.
 * Content: estar + participio as the state that an action leaves (pintaron las
 * paredes → las paredes están pintadas), agreement in gender and number, estaba +
 * participio for a past state; irregular participles (abierto, roto, hecho,
 * escrito, puesto, vuelto/devuelto, muerto, dicho, cubierto); adjective for the
 * state with limpiar, llenar, vaciar, secar (está limpia, not «limpiada»); estar +
 * participio vs haber + participio (no agreement) vs estar + gerundio (process);
 * quedar(se) + participio (final state, often unplanned; «queda + participio» in
 * agreements); tener + participio agreeing with the object and llevar + amount +
 * participio (progress so far). Ampliación: dejar + participio, dar por +
 * participio, tener dicho (repetition, colloquial), recién + participio,
 * «estoy muerto/a» (colloquial). Anchor: La puerta está cerrada. Instructions use tú.
 */
export const lesson: LiveLesson = {
  id: 420,
  level: 'B1',
  title: 'Estar + participio para estados resultantes',
  subtitle: 'Describir cómo queda algo después de una acción: la puerta está cerrada, las maletas están hechas y la persiana quedó atascada.',
  legend: [
    { tone: 'blue', label: 'ESTAR + PARTICIPIO · el estado que deja una acción; concuerda (is closed, is done)' },
    { tone: 'orange', label: 'HABER + PARTICIPIO · la acción; el participio no cambia (have closed)' },
    { tone: 'teal', label: 'QUEDAR(SE) + PARTICIPIO · el estado final, a menudo sin querer (ended up / stayed)' },
    { tone: 'violet', label: 'TENER / LLEVAR + PARTICIPIO · lo que ya tienes hecho (have got it done / so far)' },
  ],
  optionNotes: {
    'rompido': 'El participio de romper es irregular: **roto**, rota, rotos, rotas.',
    'están rompidos': 'El participio de romper es irregular: **roto**. Con estar concuerda: están **rotos**.',
    'está escribido': 'El participio de escribir es irregular: **escrito**. «Está escrito».',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: '¿Cómo queda después?', coach: 'Primero la acción, después el estado. First the action, then the state.',
      steps: [
        { title: 'La entrega de llaves · Handing back the keys', blocks: [
          { kind: 'lead', text: 'Irene Castillo deja el apartamento donde ha vivido dos años de alquiler. Hoy, sábado, a las diez, Mauricio Vega, de la inmobiliaria, lo revisa con ella antes de la entrega de llaves. Mauricio lee su lista: «¿Han pintado las paredes? ¿Han cerrado las ventanas?». Irene responde con el resultado: «Sí, las paredes **están pintadas** y las ventanas **están cerradas**». Hoy aprendes a describir el estado que deja una acción con **estar + participio**.', en: 'Irene Castillo is leaving the flat she has rented for two years. Today, Saturday, at ten, Mauricio Vega from the letting agency checks it with her before she hands back the keys. Mauricio reads his list: “Have the walls been painted? Have the windows been closed?” Irene answers with the result: “Yes, the walls are painted and the windows are closed.” Today you learn to describe the state an action leaves behind with estar + past participle.' },
          { kind: 'guide', text: { teacher: 'Tú lees las preguntas de Mauricio y tu alumno responde como Irene, con el resultado: «Sí, las paredes están pintadas». Después dice qué palabra cambia: pintado → pintadas.', self: 'Lee las preguntas de Mauricio y responde en voz alta como Irene, con el resultado. ¿Qué letra cambia en «pintadas»? (Answer as Irene. Which ending changes?)' } },
          { kind: 'compare', title: 'La acción, el proceso y el resultado · Action, process and result', columns: [
            { tone: 'orange', label: 'LA ACCIÓN · haber + participio', sentence: 'Irene y su hermano [[han pintado|orange]] las paredes.', idea: 'Lo que hicieron. El participio no cambia: siempre -o.', en: 'Irene and her brother have painted the walls. (what they did)' },
            { tone: 'neutral', label: 'EL PROCESO · estar + gerundio', sentence: 'Pablo está pintando el pasillo.', idea: 'La acción está en marcha: todavía no ha terminado.', en: 'Pablo is painting the hall. (still in progress)' },
            { tone: 'blue', label: 'EL RESULTADO · estar + participio', sentence: 'Las paredes [[están pintadas|blue]].', idea: 'Cómo están ahora, después de la acción. Concuerda con «las paredes».', en: 'The walls are painted. (the state now)' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Las ventanas están cerradas» habla de…', options: ['una acción que está en marcha.', 'el estado de las ventanas ahora.', 'quién cerró las ventanas.'], answer: 1, why: 'Estar + participio describe el resultado: cómo están ahora. No dice quién las cerró.', en: '“Las ventanas están cerradas” is about…' },
            { prompt: 'Cerraron la puerta del balcón. Ahora la puerta del balcón ___.', options: ['está cerrando', 'está cerrada', 'está cerrado'], answer: 1, why: 'El resultado de «cerrar»: estar + participio, que concuerda con «la puerta» (femenino): cerrada.', en: 'They closed the balcony door. Now the balcony door is closed.' },
            { prompt: '¿Qué frase dice que la acción todavía no ha terminado?', options: ['Pablo ha pintado el pasillo.', 'El pasillo está pintado.', 'Pablo está pintando el pasillo.'], answer: 2, why: 'Estar + gerundio: la acción en marcha. Los otros dos hablan de algo terminado.', en: 'Which sentence says the action has not finished yet?' },
          ] },
        ] },
        { title: 'Concuerda como un adjetivo · It agrees like an adjective', mascot: '/brand/mascot/studying.webp', coach: 'Cerrado, cerrada, cerrados, cerradas.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'ESTAR + PARTICIPIO', question: '¿Cómo está algo (o alguien) después de una acción?', en: 'What state is something (or someone) in after an action?', formula: ['cerraron la puerta → la puerta está cerrada', 'estar + participio (-ado / -ido) = el estado resultante', 'concuerda: cerrado · cerrada · cerrados · cerradas'],
            meaning: 'Con **estar + participio** no cuentas la acción: describes el **estado** que deja. El participio funciona como un **adjetivo**: concuerda en género y número con la cosa o la persona de la que hablas. La frase no dice quién hizo la acción ni cuándo; solo cómo está algo ahora. También sirve para personas: estoy cansado, está preocupada, están sentados.',
            examples: [
              { es: 'El horno [[está desenchufado|blue]] y la nevera [[está apagada|blue]].', en: 'The oven is unplugged and the fridge is switched off.' },
              { es: 'Los muebles del salón [[están vendidos|blue]].', en: 'The living-room furniture is sold.' },
              { es: 'Irene [[está cansada|blue]], pero contenta.', en: 'Irene is tired, but happy.' },
            ], note: 'Para un estado en el pasado, usa el **imperfecto**: «Cuando entré hace dos años, el azulejo ya **estaba roto**».' },
          { kind: 'table', title: 'Participios irregulares en la mudanza · Irregular participles on moving day', head: ['Infinitivo', 'Participio', 'El estado'], rows: [
            ['abrir', '**abierto**', 'Las ventanas **están abiertas**.'],
            ['romper', '**roto**', 'Un azulejo del baño **está roto**.'],
            ['hacer (deshacer)', '**hecho** (deshecho)', 'Las maletas **están hechas**.'],
            ['escribir', '**escrito**', 'La dirección nueva **está escrita** en cada caja.'],
            ['poner', '**puesto**', 'Las cortinas nuevas ya **están puestas**.'],
            ['volver (devolver)', '**vuelto** (devuelto)', 'Las llaves **están devueltas**.'],
            ['morir', '**muerto**', 'Las plantas del balcón **están muertas**: nadie las regó.'],
            ['decir', '**dicho**', 'Lo importante ya **está dicho**: firmamos el lunes.'],
            ['cubrir', '**cubierto**', 'Los muebles **están cubiertos** con plásticos.'],
          ], note: 'Los verbos compuestos hacen el participio igual: deshacer → deshecho, devolver → devuelto, descubrir → descubierto, resolver → resuelto. Con estar, todos concuerdan: la cama está deshecha, los problemas están resueltos.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Las cajas de la cocina ya ___.', options: ['están abiertas', 'están abridas', 'están abierto'], answer: 0, why: 'Abrir tiene participio irregular, abierto, y concuerda con «las cajas»: abiertas.', en: 'The kitchen boxes are already open.' },
            { prompt: 'Cuidado: el espejo del baño ___.', options: ['está rota', 'está rompido', 'está roto'], answer: 2, why: 'Romper → roto (irregular). «El espejo» es masculino singular: roto.', en: 'Careful: the bathroom mirror is broken.' },
            { prompt: 'Cuando Irene entró hace dos años, la cocina ya ___ pintada.', options: ['había', 'estaba', 'está'], answer: 1, why: 'Un estado en el pasado: imperfecto, estaba + participio. «Había pintada» no existe.', en: 'When Irene moved in two years ago, the kitchen was already painted.' },
          ] },
        ] },
        { title: 'Estado o acción · State or action', mascot: '/brand/mascot/standing.webp', coach: '¿Concuerda o no? Does it agree or not?', blocks: [
          { kind: 'compare', title: 'He cerrado / Está cerrada · Two different questions', columns: [
            { tone: 'orange', label: 'HABER + PARTICIPIO · ¿qué ha hecho alguien?', sentence: 'Irene [[ha cerrado|orange]] las ventanas.', idea: 'La acción y quién la hace. El participio es invariable: ha cerrado, hemos cerrado, han cerrado.', en: 'Irene has closed the windows. (the action; the participle never changes)' },
            { tone: 'blue', label: 'ESTAR + PARTICIPIO · ¿cómo está algo?', sentence: 'Las ventanas [[están cerradas|blue]].', idea: 'El estado ahora. El participio concuerda con el sujeto: las ventanas → cerradas.', en: 'The windows are closed. (the state; the participle agrees)' },
          ] },
          { kind: 'decide', title: '¿Qué estructura uso? · Which structure?', steps: [
            { q: '¿Cuentas lo que alguien ha hecho (la acción)?', yes: '**Haber + participio** en -o, sin concordancia: «He vaciado los armarios».', no: 'next' },
            { q: '¿Describes cómo está algo ahora, como resultado?', yes: '**Estar + participio**, que concuerda: «Las cajas están cerradas». Con limpiar, llenar o vaciar, un adjetivo: «Los armarios están **vacíos**» (mira el consejo).', no: 'next' },
            { q: '¿La acción está en marcha y no ha terminado?', yes: '**Estar + gerundio**: «Pablo está vaciando los armarios».', no: 'Quizá no necesitas participio: «El apartamento es grande».' },
          ] },
          { kind: 'tip', icon: '💡', title: 'Limpia, no «limpiada» · Clean, not “cleaned”', text: 'Con algunos verbos, para el **estado** se usa normalmente un **adjetivo**: limpiar → la cocina está **limpia**; llenar → **lleno**; vaciar → **vacío**; secar → **seco**; despertar → **despierto**. Con haber va el participio regular: **he limpiado**, he vaciado, se ha despertado. «La cocina está limpiada» suena muy raro.', en: 'With some verbs, the state is normally expressed with an adjective: limpiar → la cocina está limpia (the kitchen is clean); llenar → lleno (full); vaciar → vacío (empty); secar → seco (dry); despertar → despierto (awake). With haber you use the regular participle: he limpiado, he vaciado, se ha despertado. “La cocina está limpiada” sounds very odd.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Ya ___ los armarios: no queda nada dentro.', options: ['estoy vaciado', 'he vaciado', 'he vaciados'], answer: 1, why: 'Cuentas tu acción: haber + participio, siempre en -o.', en: 'I’ve already emptied the wardrobes: there’s nothing left inside.' },
            { prompt: 'Mauricio abre los armarios: ___.', options: ['están vacíos', 'han vacíos', 'están vaciado'], answer: 0, why: 'El estado: estar + el adjetivo vacío, que concuerda con «los armarios».', en: 'Mauricio opens the wardrobes: they’re empty.' },
            { prompt: '—¿Y el horno? —___ esta mañana.', options: ['Lo he limpiado', 'Lo está limpio', 'Lo he limpio'], answer: 0, why: 'La acción, con objeto (lo): haber + participio, he limpiado. El adjetivo limpio va con estar: está limpio.', en: '—And the oven? —I cleaned it this morning.' },
          ] },
        ] },
        { title: 'Quedar, tener y llevar + participio · Other ways to show a result', mascot: '/brand/mascot/speaking.webp', coach: 'Cómo acabó y cuánto tienes hecho. How it ended and how much is done.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'QUEDAR(SE) + PARTICIPIO', question: '¿En qué estado acabó algo después de un hecho o de un proceso?', en: 'What state did something end up in after an event or a process?', formula: ['quedar + participio → la persiana quedó atascada', 'quedarse + participio → la ventana se quedó abierta toda la noche', 'queda + participio (acuerdos, avisos) → el apartamento queda entregado'],
            meaning: '**Quedar** + participio presenta el estado **final**, cómo acabó algo: «La persiana quedó atascada a media altura». **Quedarse** subraya muchas veces que el estado **no estaba previsto** o que **continuó**: «La ventana se quedó abierta toda la noche» (nadie la cerró). En presente, «queda» + participio es frecuente en acuerdos y avisos: «El contrato queda firmado». El participio también concuerda.',
            examples: [
              { es: 'Con el golpe, la puerta del armario [[quedó torcida|teal]].', en: 'After the knock, the wardrobe door ended up crooked.' },
              { es: 'Con las prisas, la luz del garaje [[se quedó encendida|teal]].', en: 'In the rush, the garage light was left on.' },
              { es: 'Firmamos el acta y el apartamento [[queda entregado|teal]].', en: 'We sign the handover report and the flat is officially handed back.' },
            ] },
          { kind: 'concept', tone: 'violet', label: 'TENER · LLEVAR + PARTICIPIO', question: '¿Qué tienes ya hecho? ¿Cuánto llevas hecho hasta ahora?', en: 'What have you got done already? How much have you done so far?', formula: ['tener + participio (concuerda con el objeto) → tengo hechas las maletas · tengo las maletas hechas', 'llevar + cantidad + participio → llevo cerradas veinte cajas (y sigo)'],
            meaning: '**Tener** + participio presenta un resultado que ya tienes conseguido, listo: «Tengo hechas las maletas». El participio concuerda con el **objeto** (las maletas → hechas), no con la persona. **Llevar** + participio cuenta lo hecho **hasta ahora** en una tarea que continúa, normalmente con una cantidad: «Llevo cerradas veinte cajas» (y faltan más). Con haber, en cambio, nada concuerda: he hecho las maletas.',
            examples: [
              { es: 'Pablo ya [[tiene desmontada|violet]] la cama.', en: 'Pablo already has the bed taken apart.' },
              { es: 'Irene [[lleva escritas|violet]] doce etiquetas; le faltan ocho.', en: 'Irene has written twelve labels so far; she has eight to go.' },
            ] },
          { kind: 'table', title: 'Cinco maneras de hablar de las maletas · Five ways to talk about the suitcases', head: ['Frase', '¿Qué dice?', '¿Concuerda?'], rows: [
            ['[[He hecho|orange]] las maletas.', 'la acción que hice', 'no: siempre -o'],
            ['Las maletas [[están hechas|blue]].', 'el estado de las maletas', 'sí, con las maletas'],
            ['[[Tengo hechas|violet]] las maletas.', 'lo tengo listo, conseguido', 'sí, con el objeto'],
            ['[[Llevo hechas|violet]] dos maletas (de tres).', 'lo hecho hasta ahora; sigo', 'sí, con el objeto'],
            ['Al final, una maleta [[se quedó abierta|teal]].', 'el estado final, sin querer', 'sí, con la maleta'],
          ], note: 'Tener + participio no es igual que haber + participio: «tengo hechas las maletas» subraya el resultado (they are ready); «he hecho las maletas», la acción.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Nadie apagó la calefacción: ___ encendida todo el fin de semana.', options: ['se puso', 'se quedó', 'tuvo'], answer: 1, why: 'Un estado que continuó sin querer: quedarse + participio, se quedó encendida.', en: 'Nobody switched the heating off: it stayed on all weekend.' },
            { prompt: 'Ya ___ las cajas de la cocina.', options: ['he cerradas', 'tengo cerradas', 'tengo cerrado'], answer: 1, why: 'Tener + participio: concuerda con el objeto, «las cajas» → cerradas. Con haber sería «he cerrado».', en: 'I’ve already got the kitchen boxes closed.' },
            { prompt: 'De los treinta libros, Pablo ___ guardados quince.', options: ['lleva', 'ha', 'está'], answer: 0, why: 'Lo hecho hasta ahora, con una cantidad, en una tarea que continúa: llevar + participio.', en: 'Of the thirty books, Pablo has packed fifteen so far.' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: '¿Estar o haber? ¿Concuerda? Estar or haber? Does it agree?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la frase con el error y tu alumno explica qué falla: ¿la concordancia, el participio irregular o el verbo (estar, haber, ser)? Después aparece la corrección.', self: 'Lee cada frase y piensa qué falla: ¿la concordancia, el participio o el verbo? Toca para ver la corrección. (Agreement, participle or verb?)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'La puerta del balcón está cerrado.', right: 'La puerta del balcón está cerrada.', why: 'Con estar, el participio concuerda: la puerta (femenino) → cerrada.' },
            { wrong: 'Hemos pintadas todas las paredes.', right: 'Hemos pintado todas las paredes.', why: 'Con haber, el participio no cambia nunca: hemos pintado.' },
            { wrong: 'La ventana del baño está rompida.', right: 'La ventana del baño está rota.', why: 'Romper tiene participio irregular: roto, rota.' },
            { wrong: 'Tengo hecho las maletas.', right: 'Tengo hechas las maletas.', why: 'Con tener, el participio concuerda con el objeto: las maletas → hechas.' },
            { wrong: 'La cocina está limpiada.', right: 'La cocina está limpia.', why: 'Para el estado, con limpiar se usa el adjetivo: limpia. «Limpiado» va con haber: he limpiado.' },
            { wrong: 'Las luces del pasillo están apagando.', right: 'Las luces del pasillo están apagadas.', why: 'El estado es participio: apagadas. «Están apagando» significa que alguien las apaga en este momento.' },
            { wrong: 'Lo siento, la tienda es cerrada.', right: 'Lo siento, la tienda está cerrada.', why: 'Para el estado de ahora, estar. Ser + participio es otra estructura (la pasiva): la ves en la clase 121.' },
          ] },
          { kind: 'tip', icon: '💡', title: 'Ser + participio, en la clase 121 · Ser + participle, in class 121', text: 'Vas a oír también frases como «El edificio **fue construido** en 1980». Es **ser + participio**, la voz pasiva: habla de la **acción** (y a veces de quién la hizo), no del estado. Hoy solo la reconoces; en la clase 121 la comparas con estar + participio.', en: 'You will also hear sentences like “El edificio fue construido en 1980” (The building was built in 1980). That is ser + participle, the passive: it is about the action (and sometimes who did it), not the state. Today you only recognise it; in class 121 you compare it with estar + participle.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Las plantas del balcón ___: nadie las regó en agosto.', options: ['están muertas', 'han muertas', 'están morido'], answer: 0, why: 'Morir → muerto (irregular), y con estar concuerda con «las plantas»: muertas.', en: 'The plants on the balcony are dead: nobody watered them in August.' },
            { prompt: 'Pablo ___ las cortinas del dormitorio.', options: ['ha quitado', 'ha quitadas', 'está quitadas'], answer: 0, why: 'La acción con su objeto: haber + participio, sin concordancia.', en: 'Pablo has taken down the bedroom curtains.' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno describe tres cosas de su casa con estar + participio, una con «tengo» + participio y una con «se quedó» + participio. Tú preguntas: «¿Quién lo hizo?», y tu alumno responde con haber + participio.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'La revisión del apartamento', coach: 'Toca las palabras marcadas. Tap the marked words.',
      steps: [
        { title: 'Sábado, diez de la mañana · Saturday, ten a.m.', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Mauricio y tu alumno es Irene. Después tu alumno toca cada expresión marcada y dice si habla del estado, de la acción, del estado final o de lo que ya tiene hecho.', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada: ¿estado, acción, estado final o algo que ya tiene hecho? (State, action, final state or something already done?)' } },
          { kind: 'explore', title: 'Con la lista en la mano', setting: 'Sábado, diez de la mañana. Mauricio Vega, de la inmobiliaria, revisa el apartamento con Irene Castillo antes de la entrega de llaves. Se tratan de usted. (Saturday, 10 a.m. The agent checks the flat with the tenant before she hands back the keys.)', lines: [
            { who: 'Mauricio', text: 'Buenos días, señora Castillo. Tengo aquí el inventario. ¿Empezamos por la cocina?', en: 'Good morning, Ms Castillo. I have the inventory here. Shall we start with the kitchen?' },
            { who: 'Irene', text: 'Claro. Como ve, la cocina [[está limpia|blue]] y el horno [[está desenchufado|blue]].', en: 'Of course. As you can see, the kitchen is clean and the oven is unplugged.' },
            { who: 'Mauricio', text: 'Muy bien. Según la lista, la nevera tiene que [[quedar vacía|teal]] y con la puerta abierta.', en: 'Very good. According to the list, the fridge has to be left empty with the door open.' },
            { who: 'Irene', text: 'Ya la [[he vaciado|orange]] esta mañana. Mire, la puerta [[está abierta|blue]] para que no huela.', en: 'I emptied it this morning. Look, the door is open so it doesn’t smell.' },
            { who: 'Mauricio', text: 'Perfecto. Pasamos al salón. Las paredes [[están pintadas|blue]], ¿verdad? Huele a pintura.', en: 'Perfect. Let’s go to the living room. The walls are painted, aren’t they? It smells of paint.' },
            { who: 'Irene', text: 'Sí, mi hermano y yo las [[hemos pintado|orange]] esta semana. El jueves ya [[teníamos pintado|violet]] todo menos el pasillo.', en: 'Yes, my brother and I painted them this week. By Thursday we had everything painted except the hall.' },
            { who: 'Mauricio', text: 'Vamos al baño… Aquí hay un azulejo que [[está roto|blue]].', en: 'Let’s go to the bathroom… There’s a tile here that is broken.' },
            { who: 'Irene', text: 'Ya [[estaba roto|blue]] cuando entré hace dos años. [[Está escrito|blue]] en el inventario: mire la página tres.', en: 'It was already broken when I moved in two years ago. It’s written in the inventory: look at page three.' },
            { who: 'Mauricio', text: 'Tiene razón, aquí lo pone. ¿Y la persiana del dormitorio? No baja.', en: 'You’re right, it says so here. And the bedroom blind? It won’t come down.' },
            { who: 'Irene', text: 'Ayer [[se quedó atascada|teal]] a media altura. Lo siento, no sé qué pasó.', en: 'Yesterday it got stuck halfway. I’m sorry, I don’t know what happened.' },
            { who: 'Mauricio', text: 'No se preocupe, lo anoto. ¿Y cómo va la mudanza?', en: 'Don’t worry, I’ll make a note of it. And how’s the move going?' },
            { who: 'Irene', text: 'Bien: [[tengo hechas|violet]] las maletas y [[llevo cerradas|violet]] veinte cajas. Solo me faltan los libros.', en: 'Fine: I’ve got the suitcases packed and I’ve closed twenty boxes so far. I only have the books left.' },
          ], notes: {
            'está limpia': 'Estado con el adjetivo «limpio», no «limpiada»: así se dice el resultado de limpiar. Concuerda con «la cocina».',
            'está desenchufado': 'Estar + participio (desenchufar → desenchufado, unplugged). Concuerda con «el horno» (masculino).',
            'quedar vacía': 'Quedar + adjetivo o participio: el estado en que debe acabar la nevera. Concuerda con «la nevera».',
            'he vaciado': 'Haber + participio: la acción de Irene. El participio no cambia, aunque «la» (la nevera) es femenino.',
            'está abierta': 'Abrir → abierto (irregular). Concuerda con «la puerta»: abierta.',
            'están pintadas': 'Estar + participio: el resultado de pintar. Concuerda con «las paredes» (femenino plural).',
            'hemos pintado': 'Haber + participio: la acción. Aunque «las» (las paredes) es femenino plural, el participio va en -o.',
            'teníamos pintado': 'Tener (imperfecto) + participio: el jueves el resultado ya estaba conseguido. Concuerda con «todo» (masculino singular).',
            'está roto': 'Romper → roto (irregular). Concuerda con «un azulejo» (masculino).',
            'estaba roto': 'Estado en el pasado: imperfecto de estar + participio. Así estaba el azulejo hace dos años.',
            'Está escrito': 'Escribir → escrito (irregular). Aquí el sujeto es la información sobre el azulejo: «(eso) está escrito».',
            'se quedó atascada': 'Quedarse + participio (atascar → atascado, stuck): el estado final, no previsto. Concuerda con «la persiana».',
            'tengo hechas': 'Tener + participio: las maletas ya están listas. El participio concuerda con el objeto, «las maletas».',
            'llevo cerradas': 'Llevar + participio: lo hecho hasta ahora (veinte cajas), en una tarea que continúa: faltan los libros.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Por qué está abierta la puerta de la nevera?', options: ['Porque está rota.', 'Porque Irene la está limpiando.', 'Para que no huela.'], answer: 2, why: '«La puerta está abierta para que no huela». Además, lo pide la lista.', en: 'Why is the fridge door open?' },
            { prompt: '¿Qué dice Irene del azulejo roto?', options: ['Que lo va a cambiar mañana.', 'Que lo rompió su hermano.', 'Que ya estaba roto cuando entró.'], answer: 2, why: '«Ya estaba roto cuando entré hace dos años. Está escrito en el inventario».', en: 'What does Irene say about the broken tile?' },
            { prompt: '¿Qué le falta todavía a Irene para la mudanza?', options: ['Las maletas.', 'Pintar el salón.', 'Los libros.'], answer: 2, why: '«Tengo hechas las maletas y llevo cerradas veinte cajas. Solo me faltan los libros».', en: 'What does Irene still have left to do for the move?' },
          ] },
        ] },
        { title: 'Lo que Mauricio anota · What Mauricio notes down', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'classify', title: '¿Qué dice cada frase? · What does each sentence express?', categories: [
            { id: 'estado', label: 'ESTADO · estar + participio', tone: 'blue' },
            { id: 'accion', label: 'ACCIÓN · haber + participio', tone: 'orange' },
            { id: 'final', label: 'ESTADO FINAL · quedar(se) + participio', tone: 'teal' },
            { id: 'hecho', label: 'YA HECHO · tener / llevar + participio', tone: 'violet' },
          ], items: [
            { text: 'Los enchufes del salón están tapados.', answer: 'estado', why: 'Cómo están ahora: estar + participio que concuerda.' },
            { text: 'Irene ha devuelto el mando del garaje.', answer: 'accion', why: 'La acción de Irene: haber + participio en -o.' },
            { text: 'La puerta del armario quedó un poco torcida.', answer: 'final', why: 'Cómo acabó la puerta: quedar + participio.' },
            { text: 'Mauricio ya tiene revisadas cinco habitaciones.', answer: 'hecho', why: 'Un resultado conseguido: tener + participio, concuerda con «habitaciones».' },
            { text: 'La luz del trastero se quedó encendida toda la semana.', answer: 'final', why: 'Un estado que continuó sin querer: quedarse + participio.' },
            { text: 'Las llaves del buzón están perdidas.', answer: 'estado', why: 'El estado actual de las llaves: están perdidas.' },
            { text: 'Pablo lleva bajadas doce cajas al camión.', answer: 'hecho', why: 'Lo hecho hasta ahora, con cantidad: llevar + participio.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: «¿Cómo estaba el azulejo hace dos años? ¿Qué tiene hecho Irene?». Tu alumno responde con estaba + participio y con tengo / tiene + participio.' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Primero decide: ¿estado o acción? Then check the agreement.',
      steps: [
        { title: 'El apartamento nuevo · The new flat', blocks: [
          { kind: 'choice', items: [
            { context: 'En el apartamento nuevo, a las cinco. (In the new flat, at five.)', prompt: 'Hace frío aquí: la puerta del balcón ___.', options: ['está abierta', 'ha abierta', 'está abierto'], answer: 0, why: 'Un estado: estar + participio irregular (abierto), que concuerda con «la puerta».', en: 'It’s cold in here: the balcony door is open.' },
            { context: 'Irene habla con su hermano. (Irene talks to her brother.)', prompt: 'Pablo, ¿___ ya las camas?', options: ['has montadas', 'has montado', 'estás montado'], answer: 1, why: 'Preguntas por una acción con objeto: haber + participio en -o.', en: 'Pablo, have you put the beds together yet?' },
            { context: 'Pablo abre una caja. (Pablo opens a box.)', prompt: 'Mala suerte: dos platos ___.', options: ['están rompidos', 'están rotos', 'han rotos'], answer: 1, why: 'Romper → roto (irregular), y con estar concuerda con «dos platos»: rotos.', en: 'Bad luck: two plates are broken.' },
            { context: 'La primera noche. (The first night.)', prompt: 'Con las prisas, la ventana del dormitorio ___ abierta toda la noche.', options: ['se quedó', 'estuvo quedada', 'ha quedada'], answer: 0, why: 'Un estado que continuó sin querer: quedarse + participio.', en: 'In the rush, the bedroom window stayed open all night.' },
            { context: 'Domingo por la noche. (Sunday evening.)', prompt: 'A las ocho, Irene ya ___ colocados todos los libros.', options: ['tenía', 'estaba', 'había'], answer: 0, why: 'Tener + participio que concuerda con «los libros». Con haber, el participio no concordaría: había colocado.', en: 'By eight, Irene already had all the books in place.' },
          ] },
        ] },
        { title: '¿Proceso, resultado o acción? · Process, result or action?', blocks: [
          { kind: 'classify', title: 'Tres maneras de mirar el mismo verbo · Three ways to look at the same verb', categories: [
            { id: 'proceso', label: 'EN MARCHA · estar + gerundio', tone: 'neutral' },
            { id: 'resultado', label: 'RESULTADO · estar + participio', tone: 'blue' },
            { id: 'accion', label: 'ACCIÓN · haber + participio', tone: 'orange' },
          ], items: [
            { text: 'Pablo está montando la cama.', answer: 'proceso', why: 'La acción no ha terminado: estar + gerundio.' },
            { text: 'La cama ya está montada.', answer: 'resultado', why: 'Cómo está la cama: estar + participio, concuerda (montada).' },
            { text: 'Pablo ha montado la cama en diez minutos.', answer: 'accion', why: 'La acción terminada, con quién la hizo: haber + participio.' },
            { text: 'Las cortinas están puestas desde las seis.', answer: 'resultado', why: 'Un estado: poner → puestas, concuerda con «las cortinas».' },
            { text: 'Irene está colgando los cuadros.', answer: 'proceso', why: 'En marcha: estar + gerundio.' },
            { text: 'Hemos colgado tres cuadros en el salón.', answer: 'accion', why: 'La acción: haber + participio, sin concordancia.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Las cajas de la cocina ya están vacías.', ok: true, why: 'Correcta: estado con el adjetivo vacío, que concuerda con «las cajas».' },
            { sentence: 'Irene ha puestas las cortinas del salón.', ok: false, options: ['Irene está puestas las cortinas del salón.', 'Irene ha puesto las cortinas del salón.', 'Irene ha ponido las cortinas del salón.'], answer: 1, why: 'Con haber, el participio no concuerda; y el de poner es irregular: ha puesto.' },
            { sentence: 'La lámpara del pasillo está rompida.', ok: false, options: ['La lámpara del pasillo está roto.', 'La lámpara del pasillo ha rota.', 'La lámpara del pasillo está rota.'], answer: 2, why: 'Romper → roto, y concuerda con «la lámpara»: rota.' },
            { sentence: 'Ya tengo escritas las etiquetas de todas las cajas.', ok: true, why: 'Correcta: tener + participio que concuerda con el objeto, «las etiquetas».' },
            { sentence: 'Cuando llegamos, la puerta del edificio estaba abierto.', ok: false, options: ['Cuando llegamos, la puerta del edificio estaba abierta.', 'Cuando llegamos, la puerta del edificio era abierta.', 'Cuando llegamos, la puerta del edificio estaba abriendo.'], answer: 0, why: 'Estado en el pasado: estaba + participio, que concuerda con «la puerta»: abierta.' },
          ] },
        ] },
        { title: 'La llamada de Sara · Sara’s call', blocks: [
          { kind: 'chat-fill', title: 'Sábado por la noche: Sara llama a Irene · Saturday night: Sara calls Irene', lines: [
            { who: 'Sara', text: '¡Hola, Irene! ¿Qué tal el día? ¿Ya entregaste el apartamento viejo?' },
            { who: 'Irene', text: 'Sí. El apartamento viejo ya ___ entregado: firmamos a las once.', options: ['está', 'es', 'ha'], answer: 0, why: 'El resultado: estar + participio, está entregado. «Ha entregado» necesita a alguien que entrega algo; «es entregado» es la pasiva (clase 121).' },
            { who: 'Sara', text: '¿Y la revisión? ¿Todo bien?' },
            { who: 'Irene', text: 'Casi. Un azulejo del baño estaba ___, pero ya estaba así cuando entré.', options: ['rompido', 'rota', 'roto'], answer: 2, why: 'Romper → roto, en masculino singular: «un azulejo».' },
            { who: 'Sara', text: '¿Y el apartamento nuevo? ¿Todo en cajas?' },
            { who: 'Irene', text: 'No, ya ___ montadas las camas y la mesa.', options: ['hemos', 'estamos', 'tenemos'], answer: 2, why: 'Tener + participio que concuerda con el objeto (las camas y la mesa → montadas). Con haber sería «hemos montado».' },
            { who: 'Irene', text: 'Los libros van despacio: llevo ___ solo cinco cajas de veinte.', options: ['abriendo', 'abiertas', 'abierto'], answer: 1, why: 'Llevar + cantidad + participio: concuerda con «cajas» → abiertas.' },
            { who: 'Sara', text: '¡Ánimo! ¿Y Pablo? ¿Sigue ahí?' },
            { who: 'Irene', text: 'Sí, pero ___ dormido en el sofá a las nueve.', options: ['se quedó', 'se puso', 'estuvo'], answer: 0, why: 'Quedarse + participio: el estado en que acabó (clase 061, se quedó dormido).' },
            { who: 'Sara', text: '¡Pobre! Mañana voy y te ayudo con los libros.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['Las', 'ventanas', 'del', 'salón', 'están', 'abiertas'], accept: ['Las ventanas del salón están abiertas', 'Están abiertas las ventanas del salón'], en: 'The living-room windows are open.' },
            { tiles: ['Ya', 'tengo', 'hechas', 'las', 'maletas'], accept: ['Ya tengo hechas las maletas', 'Ya tengo las maletas hechas', 'Tengo ya hechas las maletas', 'Tengo hechas ya las maletas'], en: 'I’ve already got the suitcases packed.' },
            { tiles: ['La', 'persiana', 'se', 'quedó', 'atascada', 'otra', 'vez'], accept: ['La persiana se quedó atascada otra vez', 'Otra vez se quedó atascada la persiana', 'La persiana otra vez se quedó atascada'], en: 'The blind got stuck again.' },
          ] },
        ] },
        { title: 'Transforma · Transform', blocks: [
          { kind: 'rewrite', title: 'De la acción al resultado · From the action to the result', items: [
            { prompt: 'Pablo ha desmontado las camas.', instruction: 'Di el resultado con estar + participio. Empieza con «Las camas». (Say the result.)', accept: ['Las camas están desmontadas', 'Las camas ya están desmontadas'] },
            { prompt: 'Alguien ha roto dos vasos.', instruction: 'Di el resultado con estar + participio. Empieza con «Dos vasos».', accept: ['Dos vasos están rotos'] },
            { prompt: 'Irene ha escrito la nueva dirección en todas las cajas.', instruction: 'Di el resultado con estar + participio. Empieza con «La nueva dirección».', accept: ['La nueva dirección está escrita en todas las cajas', 'La nueva dirección ya está escrita en todas las cajas'] },
            { prompt: 'He hecho las maletas.', instruction: 'Usa tener + participio. Empieza con «Ya tengo». (Use tener + participle.)', accept: ['Ya tengo hechas las maletas', 'Ya tengo las maletas hechas'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno cuenta cómo está ahora su casa o su lugar de trabajo: dos cosas con está / están + participio, una con «tengo» + participio y una que «se quedó» abierta, encendida o rota alguna vez.' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'El mensaje de Mauricio', coach: 'Primero escucha sin leer. Listen first, read later.',
      steps: [
        { title: 'Un mensaje para la dueña · A message for the owner', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: la idea general. Segunda escucha: tu alumno levanta la mano cada vez que oye estar, quedar o tener + participio. Después, las preguntas.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Busca las formas: están pintadas, está roto, quedó…, tengo hechas… (Listen once for the gist, once for details.)' } },
          { kind: 'listen', title: 'El informe de la revisión', channel: 'BUZÓN DE VOZ · MAURICIO VEGA, INMOBILIARIA', src: '/audio/grammar-live/420.mp3',
            before: 'Mauricio llama a doña Beatriz, la dueña del apartamento, después de la revisión. ¿Qué crees que le cuenta: qué está bien y qué problemas hay? (What do you think Mauricio tells the owner after the inspection?)',
            gist: { prompt: '¿Para qué llama Mauricio?', options: ['Para contarle a la dueña cómo está el apartamento después de la revisión.', 'Para pedirle a la dueña que pinte el apartamento.', 'Para alquilar el apartamento a una nueva inquilina.'], answer: 0, why: 'Cuenta el resultado de la revisión: qué está bien, los dos detalles y los pasos siguientes.', en: 'Why is Mauricio calling?' },
            details: [
              { prompt: '¿Cómo están los armarios?', options: ['Abiertos.', 'Vacíos.', 'Rotos.'], answer: 1, why: '«La cocina está limpia y los armarios están vacíos».', en: 'What state are the wardrobes in?' },
              { prompt: '¿Qué dice Mauricio del azulejo roto?', options: ['Que ya está arreglado.', 'Que ya estaba roto cuando la señora Castillo entró.', 'Que lo rompió la señora Castillo ayer.'], answer: 1, why: '«Ya estaba roto cuando la señora Castillo entró: está escrito en el inventario».', en: 'What does Mauricio say about the broken tile?' },
              { prompt: '¿Qué problema tiene la persiana del dormitorio?', options: ['Está abierta y no cierra.', 'Quedó atascada a media altura.', 'Está rota y hay que cambiarla.'], answer: 1, why: '«La persiana del dormitorio quedó atascada a media altura; hay que llamar a un técnico».', en: 'What is wrong with the bedroom blind?' },
              { prompt: '¿Qué va a enviar Mauricio esta tarde?', options: ['Las fotos de todas las habitaciones.', 'Las llaves del apartamento.', 'El inventario de hace dos años.'], answer: 0, why: '«Tengo hechas las fotos de todas las habitaciones y se las envío por correo esta tarde».', en: 'What is Mauricio going to send this afternoon?' },
            ],
            transcript: 'Buenos días, doña Beatriz. Le habla Mauricio Vega, de la inmobiliaria. Acabo de terminar la revisión del apartamento de la calle Olivo con la señora Castillo. En general, todo está en orden. Las paredes [[están pintadas|blue]], la cocina está limpia y los armarios están vacíos. Las llaves [[están devueltas|blue]]: tengo las tres copias aquí, en la oficina. Hay dos detalles. Uno de los azulejos del baño [[está roto|blue]], pero ya [[estaba roto|blue]] cuando la señora Castillo entró: [[está escrito|blue]] en el inventario de hace dos años. Y la persiana del dormitorio [[quedó atascada|teal]] a media altura; hay que llamar a un técnico. Por lo demás, [[tengo hechas|violet]] las fotos de todas las habitaciones y se las envío por correo esta tarde. Si a usted le parece bien, el lunes firmamos el acta de entrega, el contrato [[queda cerrado|teal]] y le devolvemos el depósito a la señora Castillo. Llámeme cuando pueda. Que tenga un buen día.',
            reply: { teacher: 'Tú eres Mauricio. Tu alumno es doña Beatriz y le devuelve la llamada con tres frases: una pregunta con «¿está…?» + participio, una frase con «quedó» o «se quedó» y una con haber + participio («he visto…», «he llamado…»).', self: 'Responde a Mauricio en voz alta como doña Beatriz: pregunta por el estado de algo («¿Está cerrada la llave del gas?»), comenta la persiana y di qué has hecho tú. (Answer as the owner.)' } },
          { kind: 'tip', icon: '🌎', title: 'Depósito, fianza; apartamento, piso · Regional words', text: 'Mauricio habla de **depósito**: es la palabra frecuente en gran parte de América. En España se dice sobre todo **fianza**. Y lo que en muchos países es un **apartamento**, en España suele ser un **piso**. La gramática de hoy es igual en todas partes: el depósito **está devuelto**, la fianza **está devuelta**.', en: 'Mauricio talks about the “depósito” (deposit): that is the common word in much of Latin America. In Spain people mostly say “fianza”. And what in many countries is an “apartamento” (flat) is usually a “piso” in Spain. Today’s grammar is the same everywhere: el depósito está devuelto, la fianza está devuelta.' },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Cómo está todo', coach: 'Describe estados y resultados. Describe states and results.',
      steps: [
        { title: 'Revisiones, mudanzas y sorpresas · Inspections, moves and surprises', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas y tu alumno responde con situaciones reales o inventadas. Si un participio no concuerda, tú repites la frase con la forma correcta y sigues con la repregunta.', self: 'Lee la pregunta, responde en voz alta con una situación real o inventada y, si quieres, escribe tu respuesta. Mira cada participio: ¿concuerda? (Answer aloud; check the agreement.)' } },
          { kind: 'talk', cards: [
            { q: 'Mira a tu alrededor: ¿cómo está tu habitación, tu casa o tu oficina ahora mismo? Describe cinco cosas. · Look around: describe five things in your room, home or office right now.', followUps: ['¿Qué está abierto y qué está cerrado? (What is open and what is closed?)', '¿Hay algo roto o desordenado? (Is anything broken or messy?)'], phrases: ['La ventana [[está abierta|blue]]…', 'Las luces [[están encendidas|blue]] / [[apagadas|blue]]…', 'La cama no [[está hecha|blue]]…'], hint: 'El participio concuerda: la ventana abierta, los libros ordenados, las luces encendidas.', example: 'Ahora la ventana de mi habitación está abierta y las luces están apagadas. La cama no está hecha, ¡lo siento! Los libros están ordenados en la estantería, pero la mesa está cubierta de papeles.', next: 'Ahora, una mudanza.' },
            { q: 'Imagina que te mudas mañana. Un amigo te pregunta: «¿Cómo lo llevas?». ¿Qué tienes hecho ya y qué te falta? · You are moving tomorrow: what have you got done and what is left?', followUps: ['¿Cuántas cajas llevas cerradas? (How many boxes have you closed so far?)', '¿Qué te falta todavía? (What is still left?)'], phrases: ['Ya [[tengo hechas|violet]] las maletas…', '[[Llevo cerradas|violet]] diez cajas…', 'Todavía me falta(n)…'], hint: 'Tener + participio concuerda con el objeto: tengo hechas las maletas, tengo desmontada la cama.', example: 'Bastante bien. Ya tengo hechas las maletas y tengo desmontada la cama. Llevo cerradas quince cajas, pero todavía me faltan los libros y la cocina. Mañana a las nueve viene el camión.', next: 'Ahora, la revisión.' },
            { q: 'Tú eres Mauricio. Revisas el apartamento de un inquilino con la lista: pregunta y comenta el estado de cada cosa. · You are Mauricio: go through the flat with the list.', followUps: ['¿Y el baño? (And the bathroom?)', '¿Están todas las llaves? (Are all the keys here?)'], phrases: ['¿Los armarios [[están vacíos|blue]]?', '¿Quién [[ha pintado|orange]] las paredes?', 'Aquí veo que el espejo [[está roto|blue]]…'], hint: 'Para el estado, estar + participio; para preguntar por la acción, haber + participio.', example: 'Bueno, empezamos por la cocina. La nevera está vacía y desenchufada: perfecto. Las paredes del salón están pintadas: ¿las ha pintado usted? En el baño veo que el espejo está roto. ¿Estaba roto cuando entró?', next: 'Ahora, algo que se quedó así.', teacher: 'Tú eres el inquilino y respondes; a veces dices que algo ya estaba así cuando entraste. Después cambian los papeles.' },
            { q: '¿Alguna vez algo se quedó abierto, encendido o roto mientras no estabas en casa? ¿Qué pasó? · Did something ever stay open, on or broken while you were away?', followUps: ['¿Cómo lo descubriste? (How did you find out?)', '¿Qué hiciste después? (What did you do next?)'], phrases: ['La ventana [[se quedó abierta|teal]] toda la noche…', 'El horno [[se quedó encendido|teal]]…', 'Cuando volví, el suelo [[estaba mojado|blue]]…'], hint: 'Quedarse + participio: el estado que continuó, muchas veces sin querer. Para describir lo que encontraste: estaba + participio.', example: 'Una vez me fui de viaje y la ventana de la cocina se quedó abierta. Llovió tres días. Cuando volví, el suelo estaba mojado y dos libros estaban estropeados.', next: 'Ahora, antes de un viaje.' },
            { q: 'Antes de un viaje largo, ¿qué compruebas en casa? Haz tu lista en voz alta. · Before a long trip, what do you check at home? Make your list aloud.', followUps: ['¿Te ha pasado alguna vez olvidar algo? (Have you ever forgotten something?)', '¿Quién tiene una copia de tus llaves? (Who has a copy of your keys?)'], phrases: ['¿La llave del gas [[está cerrada|blue]]?', 'Las ventanas tienen que [[quedar cerradas|teal]].', 'Ya [[tengo hecha|violet]] la maleta…'], hint: 'Pregunta con «¿Está…?» y concuerda: ¿Está cerrada la puerta? ¿Están apagadas las luces?', example: 'Primero compruebo que la llave del gas está cerrada y que las luces están apagadas. Las ventanas tienen que quedar bien cerradas y la nevera, casi vacía. Ya tengo hecha la maleta, y mi vecina tiene una copia de las llaves.', next: 'Para terminar, un recuerdo.' },
            { q: 'Piensa en un día que llegaste a un sitio (tu casa nueva, una oficina, un hotel) y lo encontraste en un estado sorprendente. ¿Cómo estaba? · Think of a day you arrived somewhere and found it in a surprising state.', followUps: ['¿Quién lo había dejado así? (Who had left it like that?)', '¿Qué hiciste? (What did you do?)'], phrases: ['Cuando llegué, la puerta [[estaba abierta|blue]]…', 'Alguien [[había roto|orange]]…', 'Todo [[estaba cubierto|blue]] de…'], hint: 'En una historia pasada, estaba + participio describe el estado; había + participio cuenta la acción anterior, sin concordancia.', example: 'Cuando llegué a mi apartamento nuevo, la puerta estaba abierta y las luces estaban encendidas. Los muebles estaban cubiertos de polvo. Los antiguos inquilinos se habían ido sin limpiar nada.', teacher: 'Tú preguntas: «¿Y qué dijo el dueño?». Tu alumno responde con dos frases más.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno hace las preguntas («¿Cómo está tu casa ahora?», «¿Qué tienes hecho ya?») y tú respondes con tus propias situaciones.', self: 'Ahora haz tú las preguntas en voz alta («¿Cómo está…?», «¿Qué tienes hecho ya?») y respóndelas con otra situación. (Now ask the questions and answer with another situation.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Un correo a la dueña', coach: 'Cómo está, qué has hecho y qué tienes listo. State, action and what is ready.',
      steps: [
        { title: 'El estado del apartamento · The state of the flat', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos cada participio: ¿va con estar, haber, quedar o tener? ¿Concuerda cuando tiene que concordar? Después, tu alumno lee su correo en voz alta.', self: 'Escribe tu correo y toca «Revisar mi texto». Después, mira cada participio: ¿va con estar, haber, quedar o tener? ¿Concuerda? (Write your email and tap “Revisar mi texto”.)' } },
          { kind: 'write', title: 'Antes de devolver las llaves · Before handing back the keys', situation: 'Dejas un apartamento o una oficina de alquiler (real o inventado). Ayer hiciste la revisión con la inmobiliaria. Escribe un correo a la dueña o al dueño: cómo está todo, qué has hecho, qué problemas hay y qué tienes listo. (You are leaving a rented flat or office. Write an email to the owner about its state.)', task: [
            'Describe el estado de tres o más cosas con estar + participio, con la concordancia correcta. (Three states, with agreement.)',
            'Di qué has hecho tú antes de irte con haber + participio. (What you have done.)',
            'Explica un problema con quedar(se) + participio o con estaba + participio. (A problem: how it ended up or how it was.)',
            'Di qué tienes ya listo con tener + participio. (What you already have ready.)',
          ], starters: ['Estimada señora…:', 'Le escribo después de la revisión de…', 'Antes de irme he…', 'Ahora el apartamento está…', 'Las ventanas están…', 'Ya estaba… cuando entré', 'La persiana se quedó…', 'Ya tengo hechas…', 'Un saludo cordial,'],
            words: ['está cerrado/a', 'están pintados/as', 'abierto', 'roto', 'hecho', 'escrito', 'puesto', 'devuelto', 'limpio', 'vacío', 'quedó', 'se quedó', 'tengo hechas', 'llevo + cantidad'],
            model: 'Estimada doña Beatriz: Le escribo después de la revisión de ayer con el señor Vega. Antes de irme [[he pintado|orange]] las paredes del salón y [[he limpiado|orange]] a fondo la cocina y el baño. Ahora el apartamento está limpio, los armarios están vacíos y todas las ventanas [[están cerradas|blue]]. Las plantas del balcón [[están regadas|blue]] y la llave del gas también [[está cerrada|blue]]. Hay dos problemas: un azulejo del baño está roto, pero ya [[estaba roto|blue]] cuando entré, y la persiana del dormitorio [[se quedó atascada|teal]] el viernes. Ya [[tengo hechas|violet]] las fotos de cada habitación y se las envío con este correo. Las llaves [[quedan entregadas|teal]] en la oficina de la inmobiliaria. Muchas gracias por estos dos años. Un saludo cordial, Irene Castillo',
            minWords: 90,
            checks: [
              { label: 'Estar + participio (a resulting state)', pattern: '(?<!\\p{L})(?:estoy|estás|está|estamos|están|estaba|estaban)\\s+(?:\\p{L}+\\s+)?(?:\\p{L}+(?:ad|id)[oa]s?|abiert[oa]s?|puest[oa]s?|hech[oa]s?|escrit[oa]s?|rot[oa]s?|muert[oa]s?|devuelt[oa]s?|cubiert[oa]s?)(?!\\p{L})', tip: 'Describe el estado: «Las ventanas están cerradas», «Un azulejo está roto».' },
              { label: 'Haber + participio (your action)', pattern: '(?<!\\p{L})(?:he|has|ha|hemos|han)\\s+(?:\\p{L}+(?:ado|ido)|abierto|puesto|hecho|escrito|roto|devuelto|dicho|visto|vuelto)(?!\\p{L})', tip: 'Di qué has hecho tú: «He pintado las paredes», «He devuelto las llaves».' },
              { label: 'Quedar(se) + participio (how it ended up)', pattern: '(?<!\\p{L})qued\\p{L}*\\s+(?:\\p{L}+(?:ad|id)[oa]s?|abiert[oa]s?|puest[oa]s?|hech[oa]s?|rot[oa]s?)(?!\\p{L})', tip: 'Explica un problema o un acuerdo: «La persiana se quedó atascada», «Las llaves quedan entregadas».' },
              { label: 'Tener / llevar + participio (already done)', pattern: '(?<!\\p{L})(?:teng\\p{L}*|tien\\p{L}*|tenemos|tenía\\p{L}*|llev\\p{L}*)\\s+(?:\\p{L}+(?:ad|id)[oa]s?|hech[oa]s?|escrit[oa]s?|puest[oa]s?|abiert[oa]s?)(?!\\p{L})', tip: 'Di qué tienes listo: «Ya tengo hechas las fotos».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})(?:he|has|ha|hemos|han)\\s+(?!(?:nada|cada)(?!\\p{L}))\\p{L}+(?:ad|id)(?:a|os|as)(?!\\p{L})', why: 'Con haber, el participio no concuerda: **he pintado** las paredes, no «he pintadas».' },
              { pattern: '(?<!\\p{L})(?:abrid|rompid|escribid|ponid|hacid|volvid|devolvid|morid)[oa]s?(?!\\p{L})', why: 'Cuidado con los participios irregulares: **abierto**, **roto**, **escrito**, **puesto**, **hecho**, **devuelto**, **muerto**.' },
              { pattern: '(?<!\\p{L})(?:la|una)\\s+(?:puerta|ventana|cocina|persiana|cama|nevera|lámpara|habitación)\\s+(?:está|estaba|quedó)\\s+(?:\\p{L}+(?:ado|ido)|abierto|roto|puesto|hecho|escrito)(?!\\p{L})', why: 'Con estar y quedar, el participio concuerda: **la puerta está cerrada**, **la ventana está rota**.' },
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
            { tone: 'blue', label: 'ESTAR + PARTICIPIO', formula: 'está cerrado · cerrada · cerrados · cerradas', example: 'La puerta está cerrada. Un azulejo estaba roto.', caption: 'el estado que deja una acción; concuerda (abierto, roto, hecho, escrito, puesto…)', en: 'the state an action leaves; it agrees (abierto, roto, hecho, escrito, puesto…)' },
            { tone: 'orange', label: 'HABER + PARTICIPIO', formula: 'he / ha / hemos / han + participio en -o', example: 'He cerrado la puerta. Hemos pintado las paredes.', caption: 'la acción y quién la hace; nunca concuerda', en: 'the action and who does it; it never agrees' },
            { tone: 'teal', label: 'QUEDAR(SE) + PARTICIPIO', formula: 'quedó · se quedó · queda + participio', example: 'La persiana quedó atascada. La luz se quedó encendida.', caption: 'el estado final; con «se», muchas veces sin querer', en: 'the final state; with “se”, often unintended' },
            { tone: 'violet', label: 'TENER · LLEVAR + PARTICIPIO', formula: 'tengo hechas las maletas · llevo cerradas veinte cajas', example: 'Ya tengo escritas las etiquetas.', caption: 'lo que ya tienes listo; lo hecho hasta ahora; concuerda con el objeto', en: 'what you already have ready; what is done so far; it agrees with the object' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Pregúntate: ¿hablo de la **acción** o del **estado**? Para la acción, **haber + participio** en -o: «He cerrado las ventanas». Para el estado, **estar + participio** que concuerda: «Las ventanas están cerradas». Con **quedar** dices cómo acabó algo, y con **tener** lo que ya tienes listo: «Tengo hechas las maletas». Y para limpiar, llenar o vaciar, el adjetivo: está limpio, lleno, vacío.', en: 'Ask yourself: am I talking about the action or the state? For the action, haber + participle in -o: “He cerrado las ventanas.” For the state, estar + participle, which agrees: “Las ventanas están cerradas.” With quedar you say how something ended up, and with tener what you already have ready: “Tengo hechas las maletas.” And for limpiar, llenar or vaciar, use the adjective: está limpio, lleno, vacío.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'Lo siento, la farmacia ya ___.', options: ['está cerrado', 'ha cerrada', 'está cerrada'], answer: 2, why: 'El estado: estar + participio que concuerda con «la farmacia».', en: 'Sorry, the pharmacy is already closed.' },
            { prompt: 'El técnico ___ la lavadora: ya funciona.', options: ['ha arreglado', 'está arreglado', 'ha arreglada'], answer: 0, why: 'La acción del técnico, con objeto: haber + participio en -o.', en: 'The technician has fixed the washing machine: it works now.' },
            { prompt: '—¿Y el informe? —Ya ___: te lo mando ahora.', options: ['está escribido', 'está escrito', 'ha escrito'], answer: 1, why: 'El estado del informe: estar + escrito (participio irregular).', en: '—And the report? —It’s written: I’ll send it to you now.' },
            { prompt: 'Nadie cerró el grifo y la bañera ___ llena toda la mañana.', options: ['estuvo quedada', 'tuvo', 'se quedó'], answer: 2, why: 'Un estado que continuó sin querer: quedarse + adjetivo o participio.', en: 'Nobody turned off the tap and the bath stayed full all morning.' },
            { prompt: 'De los cuarenta exámenes, ___ corregidos treinta; me faltan diez.', options: ['he', 'llevo', 'estoy'], answer: 1, why: 'Lo hecho hasta ahora, con cantidad, en una tarea que continúa: llevar + participio.', en: 'Of the forty exams, I’ve marked thirty so far; I have ten left.' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Antes de las vacaciones. Before the holidays.', blocks: [
          { kind: 'lead', text: 'Lorena cierra la oficina de una pequeña empresa antes de las vacaciones de agosto. Transforma sus frases para describir cómo queda todo.', en: 'Lorena is closing a small company’s office before the August holidays. Transform her sentences to describe how everything is left.' },
          { kind: 'rewrite', title: 'La oficina en agosto · The office in August', items: [
            { prompt: 'Hemos apagado todos los ordenadores.', instruction: 'Di el resultado con estar + participio. Empieza con «Todos los ordenadores».', accept: ['Todos los ordenadores están apagados'] },
            { prompt: 'Alguien abrió la ventana de la sala y nadie la cerró en todo el fin de semana.', instruction: 'Usa quedarse + participio. Empieza con «La ventana de la sala».', accept: ['La ventana de la sala se quedó abierta', 'La ventana de la sala se quedó abierta todo el fin de semana'] },
            { prompt: 'He escrito el aviso para los clientes.', instruction: 'Usa tener + participio. Empieza con «Ya tengo».', accept: ['Ya tengo escrito el aviso para los clientes', 'Ya tengo el aviso para los clientes escrito', 'Ya tengo escrito el aviso'] },
          ] },
        ] },
        { title: 'Ampliación: dejar, dar por, tener dicho y recién · Extension: more result structures', mascot: '/autoestudio/mascot/noting.webp', coach: 'Opcional: más matices. Optional: more nuance.', blocks: [
          { kind: 'lead', text: 'Otros verbos también presentan un resultado con participio, que concuerda. **Dejar** + participio: cómo dejas algo al irte («Dejé **preparadas** las cajas»). **Dar por** + participio: declarar algo terminado o aceptado («Damos por **terminada** la revisión»). **Tener dicho** (coloquial) indica repetición: «Te **tengo dicho** que cierres con llave» = te lo he dicho muchas veces. **Recién** + participio = hace muy poco: «Cuidado: **recién pintado**». Y en el habla informal, «**Estoy muerto** / **muerta**» significa estoy agotado.', en: 'Other verbs also present a result with a participle that agrees. Dejar + participle: how you leave something when you go (“I left the boxes ready”). Dar por + participle: to declare something finished or accepted (“We consider the inspection finished”). Tener dicho (colloquial) shows repetition: “Te tengo dicho que cierres con llave” = I’ve told you many times to lock the door. Recién + participle = very recently: “Careful: wet paint.” And in informal speech, “Estoy muerto / muerta” means I’m exhausted.' },
          { kind: 'choice', title: 'Más estructuras de resultado · More result structures', items: [
            { context: 'Irene se va del apartamento. (Irene leaves the flat.)', prompt: 'Antes de irse, Irene ___ cerradas todas las ventanas.', options: ['quedó', 'hubo', 'dejó'], answer: 2, why: 'Dejar + participio (concuerda con «las ventanas»): cómo deja algo quien se va.', en: 'Before leaving, Irene left all the windows closed.' },
            { context: 'Al final de una reunión formal. (At the end of a formal meeting.)', prompt: '«Bueno, señores, ___ terminada la reunión».', options: ['quedamos de', 'estamos por', 'damos por'], answer: 2, why: 'Dar por + participio: declarar algo terminado. Es frecuente en registro formal.', en: '“Well, everyone, I declare the meeting closed.”' },
            { context: 'Una madre, un poco enfadada. (A slightly annoyed mother.)', prompt: '«¡Te tengo dicho que cierres la puerta con llave!» significa…', options: ['Te lo digo por primera vez.', 'Tengo una nota escrita para ti.', 'Te lo he dicho muchas veces.'], answer: 2, why: 'Tener dicho (coloquial): insistir en algo que ya se ha dicho muchas veces.', en: '“I’ve told you again and again to lock the door!” means…' },
            { context: 'Un cartel en la escalera. (A sign on the stairs.)', prompt: '«Cuidado: ___».', options: ['recién pintado', 'recientemente pintando', 'está pintando'], answer: 0, why: 'Recién + participio: la acción terminó hace muy poco. Es la fórmula típica de estos carteles.', en: '“Careful: wet paint.”' },
            { context: 'Irene, a las once de la noche. (Irene, at eleven at night.)', prompt: '«Hoy no salgo: ___».', options: ['estoy muerta', 'estoy morida', 'estoy muriendo'], answer: 0, why: 'Estar muerto/a, coloquial: muy cansado. Morir → muerto (irregular), y concuerda con Irene.', en: '“I’m not going out tonight: I’m exhausted.”' },
          ] },
          { kind: 'teacher', text: 'Paso opcional, para alumnos fuertes o si sobra tiempo. Extra: tu alumno cuenta cómo dejó su casa la última vez que se fue de viaje, con «dejé» + participio (dejé cerradas…, dejé apagado…).' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 121 · Diferencia entre ser + participio y estar + participio', text: 'Ya describes el estado que deja una acción con estar + participio, y lo distingues de la acción con haber. En la clase 121 comparas estar + participio con **ser + participio**, la voz pasiva: «El cuadro **fue pintado** en 1950; ahora **está terminado**». Es el paso natural: del estado de algo a cómo y por quién se hizo.', en: 'You can now describe the state an action leaves with estar + participle and tell it apart from the action with haber. In class 121 you compare estar + participle with ser + participle, the passive: “The painting was painted in 1950; now it is finished.” It is the natural next step: from the state of something to how and by whom it was done.', href: '/gramatica/diferencia-entre-ser-participio-y-estar', label: 'Ir a la clase 121' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Cómo está tu casa ahora mismo y qué has hecho hoy en ella?». Respuesta esperada: estar + participio que concuerda y haber + participio en -o. Tarea: escribir el correo de Escribir sobre un lugar real.' },
        ] },
      ],
    },
  ],
};
