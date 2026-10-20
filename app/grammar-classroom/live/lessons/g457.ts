import type { LiveLesson } from '../types';

/**
 * Lesson 457 · B2 · Participios y adjetivos resultativos (course unit G157).
 * Builds on G046 (lesson 346: regular and irregular participles with haber),
 * G120 (lesson 420: estar + participio, with a first look at tener / llevar /
 * quedarse and dejar in its Ampliación) and G121 (lesson 421: ser vs estar +
 * participio). Estar + participio is NOT retaught: this class covers fully the
 * resultative constructions beyond estar (the coverage audit marked tener /
 * llevar / dejar + participio as only partial).
 * Scene: Valparaíso, the Encuentro de Letras del Puerto (a small, fictional
 * literary festival on the docks). Marina Ocampo coordinates it; Hugo
 * Salvatierra runs logistics; Ignacio Fuentes is a new volunteer; Lorena Vidal,
 * the director, is in Santiago; Claudia Rey is the invited novelist. Explorar:
 * Thursday at the office, Marina and Hugo check what is done. Escuchar: Marina's
 * voicemail to Lorena (Chilean voice, tú). Escribir: Marina's handover email to
 * Ignacio.
 * Content: tener + participio agreeing with the object (tengo escritas tres
 * páginas; only with a direct object; the subject need not be the agent) and
 * the invariable fixed forms tengo pensado / tengo entendido / te tengo dicho;
 * llevar + participio + amount (so far, task still open) vs llevar + time +
 * gerundio; dejar + participio (dejó cerrada la puerta; lo dejé dicho); quedar
 * (things) / quedarse (people, often involuntary) + participio; ir / andar +
 * participio (va bien preparado, el café va incluido, anda preocupada); haber +
 * participio, invariable. Two participles (RAE: imprimir, freír, proveer, both
 * forms valid in compound tenses; the irregular one preferred as adjective) vs
 * adjective-only forms (despierto, suelto, electo); participle-adjectives with
 * a new, often active meaning (cansado, aburrido, callado, atrevido, leído,
 * bebido, entendido, agradecido). Anchor: La ventana quedó abierta.
 * Ampliación: declarative «queda + participio» and «una vez + participio».
 * Instructions use tú.
 */
export const lesson: LiveLesson = {
  id: 457,
  level: 'B2',
  title: 'Participios y adjetivos resultativos',
  subtitle: 'Contar qué tienes hecho, cuánto llevas, cómo dejaste las cosas y cómo quedaron, con el participio que concuerda cuando debe.',
  legend: [
    { tone: 'violet', label: 'TENER · LLEVAR · DEJAR + participio · concuerda con el objeto (tengo escritas tres páginas)' },
    { tone: 'teal', label: 'QUEDAR(SE) · IR · ANDAR + participio · concuerda con el sujeto (la ventana quedó abierta)' },
    { tone: 'orange', label: 'HABER + participio · no concuerda nunca (hemos vendido cuatrocientas)' },
    { tone: 'blue', label: 'ADJETIVO · forma irregular o sentido nuevo (impreso, frito, leído, atrevido)' },
  ],
  optionNotes: {
    'escribidas': 'Escribir tiene participio irregular: **escrito**, escrita, escritos, escritas. «Escribido» no existe.',
    'freídas': 'Después de haber, el participio no concuerda: «ha **frito**» o «ha **freído**». Como adjetivo se dice «fritas».',
    'imprimidos': 'Después de haber, el participio no concuerda: «nos ha **impreso**» o «nos ha **imprimido**», nunca en plural.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Más allá de estar', coach: '¿Acción o resultado? Action or result?',
      steps: [
        { title: 'Dos días antes del festival · Two days before the festival', blocks: [
          { kind: 'lead', text: 'Faltan dos días para el **Encuentro de Letras del Puerto**, un pequeño festival literario en Valparaíso. Marina Ocampo, la coordinadora, llega a la oficina el jueves y ve que la ventana de la sala [[quedó abierta|teal]] toda la noche: hay papeles por el suelo. Por suerte, el discurso de bienvenida está en su portátil: [[tiene escritas|violet]] tres páginas y solo le falta el final.', en: 'You already know estar + participle for states (la ventana está abierta). Spanish has other verbs that present an action through its result: quedar tells how a situation ended up, tener presents the result as something you now have ready. Today you learn the whole family and when the participle agrees.' },
          { kind: 'compare', title: 'El mismo participio, tres miradas', columns: [
            { tone: 'orange', label: 'HABER + PARTICIPIO', sentence: 'Marina [[ha escrito|orange]] tres páginas.', idea: 'La acción realizada. El participio no cambia: escrito.', en: 'The action itself, as a perfect tense. The participle never agrees after haber.' },
            { tone: 'violet', label: 'TENER + PARTICIPIO', sentence: 'Marina [[tiene escritas|violet]] tres páginas.', idea: 'El resultado que Marina tiene ahora, listo para usar. Concuerda con «páginas».', en: 'The result as something Marina now has in hand, ready to use; the participle agrees with the object, like an adjective.' },
            { tone: 'teal', label: 'QUEDAR + PARTICIPIO', sentence: 'La ventana [[quedó abierta|teal]] toda la noche.', idea: 'Cómo terminó una situación, muchas veces sin que nadie lo quisiera. Concuerda con «la ventana».', en: 'How a situation ended up, often without anyone intending it; the participle agrees with the subject.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Por qué «tiene escritas» y no «tiene escrito»?', options: ['Porque Marina es una mujer.', 'Porque tener siempre lleva el participio en femenino plural.', 'Porque con tener el participio concuerda con el objeto: tres páginas → escritas.'], answer: 2, why: 'Con tener, el participio funciona como un adjetivo del objeto: concuerda con «tres páginas», no con el sujeto.', en: 'Why “tiene escritas” and not “tiene escrito”?' },
            { prompt: '¿Qué frase cuenta solo la acción, sin presentar un resultado disponible?', options: ['Marina ha escrito tres páginas.', 'La ventana quedó abierta.', 'Marina tiene escritas tres páginas.'], answer: 0, why: 'Haber + participio es un tiempo compuesto: cuenta la acción, y el participio no concuerda.', en: 'Which sentence simply reports the action?' },
          ] },
        ] },
        { title: 'Tener y llevar + participio · What you have done so far', mascot: '/brand/mascot/studying.webp', coach: 'Lo que tienes listo y lo que llevas. What is ready, what is done so far.', blocks: [
          { kind: 'concept', tone: 'violet', label: 'TENER + PARTICIPIO', question: '¿Qué tienes ya hecho, listo para usar?', en: 'What have you already got done and ready?', formula: ['tener + participio + objeto → tengo escritas tres páginas', 'tener + objeto + participio → tengo las sillas alquiladas', 'tengo pensado / tengo entendido / te tengo dicho + infinitivo o que… → invariable'],
            meaning: 'Presenta el resultado de una acción como algo que el sujeto **tiene** ahora. Solo funciona con verbos que llevan **objeto directo** (no con *llegar*, *ir*, *dormir*), y el participio **concuerda con ese objeto**. No siempre lo hizo el sujeto: «Tengo el coche arreglado» puede significar que te lo arregló el mecánico. Cuando el objeto es un infinitivo o una oración, el participio queda en masculino singular: **tengo pensado**, **tengo entendido**, y **te tengo dicho** (un reproche: «ya te lo he dicho muchas veces»).',
            examples: [
              { es: 'Hugo tiene [[reservadas|violet]] las mesas del restaurante para la cena de autores.', en: 'The booking is done and secured: tener presents it as a result Hugo has in hand.' },
              { es: 'Tengo el coche [[arreglado|violet]]: me lo dejó listo el mecánico ayer.', en: 'The subject of tener does not have to be the one who did the job.' },
              { es: '[[Tengo pensado|violet]] invitar a una poeta joven. [[Tengo entendido|violet]] que la alcaldesa vendrá.', en: 'Tengo pensado = I’m planning to; tengo entendido = I understand / I’ve heard. Both are fixed and invariable.' },
              { es: 'Te [[tengo dicho|violet]] que no dejes cajas en la entrada.', en: 'A reproach: “I’ve told you again and again”. It sounds annoyed, so use it with care.' },
            ] },
          { kind: 'concept', tone: 'violet', label: 'LLEVAR + PARTICIPIO', question: '¿Cuánto llevas hecho hasta ahora?', en: 'How much have you done so far?', formula: ['llevar + participio + cantidad → llevo leídos cinco libros', 'llevar + tiempo + gerundio → llevo dos horas leyendo (clase 055)'],
            meaning: 'Cuenta lo hecho **hasta ahora** en una tarea que **sigue abierta**, casi siempre con una cantidad: cinco libros, la mitad, doscientos kilómetros. El participio concuerda con el objeto. No lo confundas con **llevar + gerundio**, que mide el **tiempo** que dura la actividad.',
            examples: [
              { es: 'Llevo [[leídos|violet]] cinco de los ocho libros finalistas.', en: 'Five read so far, three to go: the task is not finished.' },
              { es: 'Llevamos [[vendidas|violet]] casi quinientas entradas.', en: 'The count so far; sales are still open.' },
              { es: 'Llevo dos horas revisando horarios. ≠ Llevo [[revisados|violet]] veinte horarios.', en: 'Time + gerund measures how long; participle + amount measures how much is done.' },
            ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { context: 'La venta de entradas sigue abierta.', prompt: '___ vendidas trescientas entradas.', options: ['Hemos', 'Estamos', 'Llevamos'], answer: 2, why: 'Una cantidad hasta ahora en una tarea que continúa: llevar + participio, que concuerda con «entradas». «Hemos vendidas» es imposible.', en: 'We’ve sold three hundred tickets so far.' },
            { prompt: 'Tengo ___ ir a Santiago el lunes.', options: ['pensado', 'pensando', 'pensada'], answer: 0, why: 'Con un infinitivo como objeto, el participio queda invariable: tengo pensado.', en: 'I’m planning to go to Santiago on Monday.' },
          ] },
        ] },
        { title: 'Dejar, quedar(se), ir y andar · Left, ended up, going around', mascot: '/brand/mascot/standing.webp', coach: '¿Concuerda con el objeto o con el sujeto? Object or subject?', blocks: [
          { kind: 'table', title: 'Otros verbos que presentan un resultado · Other result verbs', head: ['Estructura', 'Concuerda con', 'Qué expresa', 'Ejemplo'], rows: [
            ['**dejar** + participio', 'el objeto', 'cómo deja algo quien se va o termina; un aviso que queda para otros (left)', 'Dejó [[cerrada|violet]] la puerta. · Lo [[dejé dicho|violet]] en recepción.'],
            ['**quedar** + participio', 'el sujeto', 'cómo terminó algo: el estado final (ended up)', 'La sala [[quedó preparada|teal]] a las nueve. · [[Quedó claro|teal]] que…'],
            ['**quedarse** + participio', 'el sujeto', 'un cambio de estado, a menudo involuntario (fell asleep, was left speechless)', 'Me [[quedé dormida|teal]]. · Se [[quedó callado|teal]].'],
            ['**ir** + participio', 'el sujeto', 'cómo va alguien o algo (goes, comes)', 'Va bien [[preparado|teal]]. · El café [[va incluido|teal]].'],
            ['**andar** + participio', 'el sujeto', 'un estado que dura un tiempo; coloquial (has been… lately)', 'Anda [[preocupada|teal]] por el sonido.'],
          ], note: '«Dejar dicho» y «dejar escrito» admiten una oración: «Dejé dicho que me llamaran». Entonces el participio no cambia. Con cosas se usan quedar y quedarse: «La ventana quedó / se quedó abierta»; con personas, lo normal es quedarse: «Me quedé dormida».' },
          { kind: 'tip', icon: '💡', title: 'Dejar mira a la persona; quedar, a la cosa · Dejar looks at the person, quedar at the thing', text: '«Hugo **dejó** la carpa montada» dice qué hizo Hugo y cómo dejó la carpa. «La carpa **quedó** torcida» solo describe el resultado, sin decir quién ni si fue a propósito. Por eso quedar es útil para hablar de problemas sin culpar a nadie.', en: 'With dejar, someone leaves something in a state; with quedar, the thing simply ends up that way, with no one in the picture. That makes quedar a tactful way to report a problem without blaming anyone.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Antes de irse, Ignacio ___ apagadas todas las luces del escenario.', options: ['llevó', 'quedó', 'dejó'], answer: 2, why: 'Una persona deja algo en un estado: dejar + participio, que concuerda con «las luces».', en: 'Before leaving, Ignacio left all the stage lights switched off.' },
            { prompt: 'Después de la pregunta del público, la autora se ___ callada un momento.', options: ['dejó', 'anduvo', 'quedó'], answer: 2, why: 'Un cambio de estado de una persona, sin querer: quedarse + participio.', en: 'After the audience’s question, the author fell silent for a moment.' },
          ] },
        ] },
        { title: '¿Haber o un verbo de resultado? · Haber or a result verb?', mascot: '/brand/mascot/seated.webp', coach: 'Haber nunca concuerda. Haber never agrees.', blocks: [
          { kind: 'decide', title: 'Antes de elegir, pregúntate', steps: [
            { q: '¿Cuentas solo la acción realizada (una noticia, una experiencia)?', yes: 'Haber + participio invariable: «Hemos [[vendido|orange]] cuatrocientas entradas».', no: 'next' },
            { q: '¿Presentas un resultado que tienes listo, o lo hecho hasta ahora en una tarea que sigue?', yes: 'Tener (listo) o llevar (hasta ahora, con cantidad), que concuerdan con el objeto: «Tengo [[firmados|violet]] los contratos», «Llevo [[firmados|violet]] diez».', no: 'next' },
            { q: '¿Dices cómo dejó algo una persona, cómo terminó una situación o cómo va alguien?', yes: 'Dejar (concuerda con el objeto); quedar(se), ir, andar (concuerdan con el sujeto).', no: 'Para describir el estado sin más, estar + participio: «La sala está [[preparada|teal]]».' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'Tener no sustituye a haber · Tener is not another haber', text: '«**He leído** el contrato» cuenta la acción. «**Tengo leído** el contrato» presenta el resultado: lo conozco y puedo opinar. Y con verbos sin objeto directo, tener no funciona: «**He llegado**», nunca «*tengo llegado». En el español general, los tiempos compuestos se forman siempre con haber.', en: 'He leído reports the action; tengo leído presents the result you can use now (you know the contract). Tener also needs a direct object: with llegar, ir or dormir only haber is possible. Compound tenses in general Spanish are always built with haber.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'La directora ya ___ al hotel.', options: ['tiene llegado', 'ha llegado', 'lleva llegada'], answer: 1, why: 'Llegar no tiene objeto directo: solo haber + participio invariable.', en: 'The director has already arrived at the hotel.' },
            { prompt: 'Hemos ___ cuatrocientas sillas para el público.', options: ['alquiladas', 'alquilado', 'alquilados'], answer: 1, why: 'Después de haber, el participio no concuerda nunca: hemos alquilado.', en: 'We have rented four hundred chairs for the audience.' },
          ] },
        ] },
        { title: 'Dos participios y adjetivos con otro sentido · Two participles, new meanings', mascot: '/autoestudio/mascot/noting.webp', coach: 'Verbo o adjetivo. Verb or adjective.', blocks: [
          { kind: 'table', title: 'Tiempos compuestos y adjetivos · Compound tenses and adjectives', head: ['Verbo', 'Con haber', 'Como adjetivo'], rows: [
            ['imprimir', 'he imprimido · he impreso', 'el programa [[impreso|blue]]'],
            ['freír', 'he freído · he frito', 'las papas [[fritas|blue]] (patatas en España)'],
            ['proveer', 'han proveído · han provisto', 'un almacén bien [[provisto|blue]]'],
            ['despertar', 'me he despertado (solo esta)', 'estoy [[despierto|blue]]'],
            ['soltar', 'ha soltado (solo esta)', 'el pelo [[suelto|blue]]'],
            ['elegir', 'han elegido (solo esta)', 'la presidenta [[electa|blue]] (aún no ha tomado posesión)'],
          ], note: 'Según la RAE, **imprimir, freír y proveer** tienen dos participios válidos en los tiempos compuestos; como adjetivo se prefiere la forma irregular. «Frito» es la forma más usada, también con haber; con imprimir, las dos («he imprimido», «he impreso») se oyen y la preferencia cambia según la zona. **Despierto, suelto, electo** son solo adjetivos: «*me he despierto» es un error.' },
          { kind: 'concept', tone: 'blue', label: 'PARTICIPIOS CON SENTIDO NUEVO', question: '¿Describe a quien recibe la acción o a quien la hace?', en: 'Does the adjective describe someone affected by the action, or someone who does it?', formula: ['estar cansado (tired) · ser cansado (tiring)', 'estar aburrido (bored) · ser aburrido (boring)', 'leído, atrevido, callado, entendido, agradecido: rasgos de la persona'],
            meaning: 'Algunos participios se han hecho adjetivos con un sentido **activo**: describen a quien hace algo o lo provoca. Una persona **leída** ha leído mucho; una **atrevida** se atreve; una **callada** habla poco; una **entendida** sabe mucho de un tema; una **agradecida** da las gracias. Un viaje **cansado** cansa. Y **estar bebido** significa estar borracho, no «haber sido bebido».',
            examples: [
              { es: 'Claudia Rey es muy [[leída|blue]]: cita a autores de todas las épocas.', en: 'Leída describes a well-read person; un libro muy leído is a widely read book.' },
              { es: 'Su novela es la más [[atrevida|blue]] de la selección.', en: 'Atrevido means bold or daring: it describes the one who dares, not something dared.' },
              { es: 'Ignacio es [[callado|blue]], pero en la reunión no estuvo [[callado|blue]] ni un minuto.', en: 'Ser callado is a personality trait (quiet); estar callado describes the moment (silent).' },
              { es: 'Es un trabajo muy [[cansado|blue]]: al final del día estamos todos [[cansados|blue]].', en: 'Ser cansado = tiring; estar cansado = tired.' },
            ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Esta mañana me he ___ a las cinco por el ruido del puerto.', options: ['despiertado', 'despierto', 'despertado'], answer: 2, why: 'Con haber, solo «despertado». «Despierto» es un adjetivo: estoy despierto.', en: 'This morning I woke up at five because of the noise from the port.' },
            { prompt: 'Hugo sabe muchísimo de sonido: es muy ___ en el tema.', options: ['entendedor', 'entendido', 'entendiendo'], answer: 1, why: 'Entendido, como adjetivo, significa experto: «es muy entendido en vinos, en sonido…».', en: 'Hugo knows a great deal about sound: he is quite an expert.' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Mira qué verbo va delante. Look at the verb in front.', blocks: [
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Hemos vendidas cuatrocientas entradas.', right: 'Hemos vendido cuatrocientas entradas. · Llevamos vendidas cuatrocientas entradas.', why: 'Con haber, el participio no concuerda. Si quieres concordancia, cambia de verbo: llevar.' },
            { wrong: 'Tengo escrito tres páginas.', right: 'Tengo escritas tres páginas.', why: 'Con tener, el participio concuerda con el objeto: tres páginas → escritas.' },
            { wrong: 'Tengo pensada ir a Santiago.', right: 'Tengo pensado ir a Santiago.', why: 'El objeto es un infinitivo: el participio queda en masculino singular, sea quien sea el sujeto.' },
            { wrong: 'Me he despierto a las seis.', right: 'Me he despertado a las seis.', why: '«Despierto» es solo adjetivo (estoy despierto). Con haber: despertado.' },
            { wrong: 'La directora tiene llegado al hotel.', right: 'La directora ha llegado al hotel.', why: 'Llegar no tiene objeto directo: tener + participio no es posible.' },
            { wrong: 'Llevo dos horas corregidas.', right: 'Llevo dos horas corrigiendo. · Llevo corregidos veinte textos.', why: 'El tiempo va con gerundio; la cantidad de cosas hechas, con participio.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué frase es correcta?', options: ['Tengo revisadas las fichas de los autores.', 'Tengo revisado las fichas de los autores.', 'He revisadas las fichas de los autores.'], answer: 0, why: 'Tener + participio concuerda con el objeto (las fichas → revisadas); haber no concuerda nunca.', en: 'I’ve got the author files checked.' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tú dices una acción en perfecto («He preparado las bolsas para los autores») y tu alumno la transforma tres veces: con tener (las tengo preparadas), con dejar (las dejé preparadas en la mesa) y con quedar (quedaron preparadas a las ocho).' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'Jueves en la oficina', coach: 'Toca las expresiones marcadas. Tap the marked expressions.',
      steps: [
        { title: '¿Cómo vamos? · How are we doing?', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Hugo y tu alumno es Marina. Después tu alumno toca cada expresión marcada y dice con qué palabra concuerda el participio.', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada y busca con qué palabra concuerda el participio, si concuerda.' } },
          { kind: 'explore', title: 'Todo casi listo', setting: 'Jueves por la tarde, en la oficina del festival, en Valparaíso. Marina y Hugo repasan qué está hecho antes del fin de semana. (Thursday afternoon at the festival office: Marina and Hugo go over what is done.)', lines: [
            { who: 'Hugo', text: '¿Cómo vamos, Marina? [[Me tienes preocupado|violet]] con tanto silencio.', en: 'How are we doing, Marina? You’ve got me worried with all this silence.' },
            { who: 'Marina', text: 'Mejor de lo que parece. [[Tengo cerradas|violet]] casi todas las entrevistas y [[llevamos vendidas|violet]] trescientas entradas.', en: 'Better than it looks. I’ve got almost all the interviews lined up, and we’ve sold three hundred tickets so far.' },
            { who: 'Hugo', text: '¿Trescientas ya? ¿Y los programas? ¿Los [[han imprimido|orange]]?', en: 'Three hundred already? And the programmes? Have they printed them?' },
            { who: 'Marina', text: 'Sí, ya están [[impresos|blue]]. Los recogí esta mañana y los [[dejé guardados|violet]] en el almacén.', en: 'Yes, they’re printed. I picked them up this morning and left them stored in the storeroom.' },
            { who: 'Hugo', text: 'Perfecto. Yo [[tengo montada|violet]] la carpa grande, pero la pequeña [[quedó torcida|teal]] con el viento.', en: 'Great. I’ve got the big tent up, but the small one ended up crooked in the wind.' },
            { who: 'Marina', text: 'Mañana la arreglamos. Oye, ¿hablaste con Claudia Rey?', en: 'We’ll fix it tomorrow. Listen, did you talk to Claudia Rey?' },
            { who: 'Hugo', text: 'Sí. Llega el sábado, no el viernes. Ya [[lo dejé dicho|violet]] en el hotel.', en: 'Yes. She’s arriving on Saturday, not Friday. I’ve already left word at the hotel.' },
            { who: 'Marina', text: 'Menos mal. [[Tengo pensado|violet]] abrir el encuentro con su novela. Es [[atrevida|blue]], pero está muy bien escrita.', en: 'Thank goodness. I’m planning to open the festival with her novel. It’s daring, but it’s very well written.' },
            { who: 'Hugo', text: 'Ella es muy [[leída|blue]]; la charla va a salir genial. ¿Y tú? Te veo [[cansada|blue]].', en: 'She’s very well read; the talk is going to be great. And you? You look tired.' },
            { who: 'Marina', text: 'Agotada. Anoche [[me quedé dormida|teal]] en la oficina con el portátil encima.', en: 'Exhausted. Last night I fell asleep in the office with my laptop on top of me.' },
            { who: 'Hugo', text: 'Pues el sábado [[vas bien preparada|teal]]: lo tienes todo hecho. Vete a casa temprano.', en: 'Well, you’ll be well prepared on Saturday: you’ve got everything done. Go home early.' },
            { who: 'Marina', text: '[[Tengo entendido|violet]] que tú tampoco has dormido mucho esta semana, ¿eh?', en: 'I hear you haven’t slept much this week either, have you?' },
          ], notes: {
            'Me tienes preocupado': 'Tener + objeto + participio: «me» es Hugo, por eso **preocupado** en masculino. Significa «me preocupas»: tú me has puesto en ese estado.',
            'Tengo cerradas': 'Tener + participio: el resultado que Marina tiene ya conseguido. Concuerda con **las entrevistas** (cerradas = acordadas).',
            'llevamos vendidas': 'Llevar + participio + cantidad: lo vendido **hasta ahora**; la venta continúa. Concuerda con **entradas**.',
            'han imprimido': 'Haber + participio: la acción, sin concordancia. Imprimir tiene dos participios válidos aquí: **han imprimido** o **han impreso**.',
            'impresos': 'Como adjetivo (con estar) se prefiere la forma irregular: **impresos**, que concuerda con «los programas».',
            'dejé guardados': 'Dejar + participio: cómo dejó Marina los programas. Concuerda con el objeto «los» (los programas).',
            'tengo montada': 'Tener + participio: concuerda con **la carpa grande**. La carpa ya está lista.',
            'quedó torcida': 'Quedar + participio: cómo terminó la carpa pequeña, sin que nadie lo quisiera. Concuerda con el sujeto, **la pequeña** (la carpa).',
            'lo dejé dicho': 'Dejar dicho: dejar un aviso para que otros lo sepan. Con un pronombre neutro («lo» = que llega el sábado), el participio es **dicho**.',
            'Tengo pensado': 'Fórmula invariable con infinitivo: **tengo pensado** + infinitivo = tengo el plan de…',
            'atrevida': 'Participio convertido en adjetivo con sentido activo: una novela **atrevida** se atreve, es audaz.',
            'leída': 'Una persona **leída** ha leído mucho: es culta. (Un libro «muy leído» es un libro que lee mucha gente.)',
            'cansada': '«Te veo **cansada**» equivale a «pareces cansada»: el estado después del esfuerzo. Concuerda con Marina.',
            'me quedé dormida': 'Quedarse + participio: un cambio de estado involuntario. **Dormida** concuerda con Marina.',
            'vas bien preparada': 'Ir + participio: cómo va alguien a una situación. **Preparada** concuerda con el sujeto (tú, Marina).',
            'Tengo entendido': 'Fórmula invariable: **tengo entendido que…** = me han dicho que…, según sé. Suaviza una información que no has comprobado.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Se ha terminado la venta de entradas?', options: ['No han empezado a venderlas.', 'No: llevan trescientas vendidas y la venta continúa.', 'Sí: ya no quedan entradas.'], answer: 1, why: '«Llevamos vendidas trescientas»: llevar + participio presenta lo hecho hasta ahora en una tarea abierta.', en: 'Are ticket sales over?' },
            { prompt: '¿Qué problema hay con las carpas?', options: ['La grande se rompió.', 'Hugo no ha montado ninguna.', 'La pequeña quedó torcida por el viento.'], answer: 2, why: '«Tengo montada la carpa grande, pero la pequeña quedó torcida con el viento».', en: 'What is the problem with the tents?' },
            { prompt: '¿Qué quiere decir Hugo con «es muy leída»?', options: ['Que Claudia lee en voz alta en sus charlas.', 'Que mucha gente lee a Claudia Rey.', 'Que Claudia ha leído mucho y es culta.'], answer: 2, why: 'Referido a una persona, «leído» tiene sentido activo: que ha leído mucho.', en: 'What does Hugo mean by “es muy leída”?' },
          ] },
        ] },
        { title: '¿Qué dice cada verbo? · What does each verb say?', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'classify', title: 'Clasifica las frases del festival', categories: [
            { id: 'tener', label: 'TENER · lo que ya tengo listo', tone: 'violet' },
            { id: 'llevar', label: 'LLEVAR · lo hecho hasta ahora', tone: 'violet' },
            { id: 'dejar', label: 'DEJAR · cómo dejó algo alguien', tone: 'violet' },
            { id: 'quedar', label: 'QUEDAR(SE) · cómo terminó', tone: 'teal' },
          ], items: [
            { text: 'Marina tiene cerradas casi todas las entrevistas.', answer: 'tener', why: 'Un resultado conseguido y disponible: tener + participio.' },
            { text: 'Llevan vendidas trescientas entradas, y siguen.', answer: 'llevar', why: 'Cantidad hasta ahora en una tarea abierta: llevar.' },
            { text: 'Marina dejó los programas guardados en el almacén.', answer: 'dejar', why: 'Una persona deja algo en un estado: dejar.' },
            { text: 'La carpa pequeña quedó torcida con el viento.', answer: 'quedar', why: 'El estado final, sin que nadie lo quisiera: quedar.' },
            { text: 'Hugo lo dejó dicho en el hotel.', answer: 'dejar', why: 'Dejar dicho: un aviso que queda para otros.' },
            { text: 'Marina se quedó dormida en la oficina.', answer: 'quedar', why: 'Un cambio de estado involuntario de una persona: quedarse.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: «¿Qué diferencia hay entre “Marina ha cerrado las entrevistas” y “Marina tiene cerradas las entrevistas”?». Respuesta esperada: la primera cuenta la acción; la segunda presenta el resultado que tiene listo.' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: '¿Qué verbo va delante? Which verb comes first?',
      steps: [
        { title: 'Elige la forma · Choose the form', blocks: [
          { kind: 'choice', items: [
            { context: 'Ignacio corrige las pruebas del catálogo: son doce capítulos y va por el octavo.', prompt: '___ revisados siete capítulos; me quedan cinco.', options: ['Llevo', 'He', 'Estoy'], answer: 0, why: 'Una cantidad hasta ahora en una tarea que sigue: llevar + participio, que concuerda. «He revisados» es imposible.', en: 'I’ve checked seven chapters so far; I have five left.' },
            { prompt: 'Antes de irse a Santiago, Lorena dejó ___ las instrucciones en la mesa.', options: ['escrito', 'escribidas', 'escritas'], answer: 2, why: 'Dejar + participio concuerda con el objeto: las instrucciones → escritas (participio irregular).', en: 'Before leaving for Santiago, Lorena left the instructions written down on the table.' },
            { prompt: 'Las voluntarias han ___ todos los carteles por el barrio.', options: ['repartidas', 'repartidos', 'repartido'], answer: 2, why: 'Después de haber, el participio no concuerda ni con el sujeto ni con el objeto.', en: 'The volunteers have handed out all the posters around the neighbourhood.' },
            { prompt: 'Tengo ___ que la alcaldesa vendrá a la inauguración, pero no está confirmado.', options: ['entendiendo', 'entendida', 'entendido'], answer: 2, why: 'Fórmula invariable con una oración (que…): tengo entendido.', en: 'I understand the mayor will come to the opening, but it isn’t confirmed.' },
            { prompt: 'Para el cóctel, la cocinera ya ha ___ doscientas empanadas.', options: ['freídas', 'frito', 'fritas'], answer: 1, why: 'Con haber, el participio no concuerda. «Ha frito» y «ha freído» son correctos; «frito» es el más usado.', en: 'For the cocktail party, the cook has already fried two hundred empanadas.' },
            { prompt: 'Los voluntarios ___ muy bien preparados: hicieron un curso el mes pasado.', options: ['van', 'llevan', 'tienen'], answer: 0, why: 'Cómo van las personas a una situación: ir + participio, que concuerda con el sujeto.', en: 'The volunteers are going in very well prepared: they took a course last month.' },
          ] },
        ] },
        { title: '¿Con qué concuerda? · What does it agree with?', blocks: [
          { kind: 'classify', title: 'Lee la frase y decide', categories: [
            { id: 'objeto', label: 'Con el objeto · tener, llevar, dejar', tone: 'violet' },
            { id: 'sujeto', label: 'Con el sujeto · quedar(se), ir, andar', tone: 'teal' },
            { id: 'invariable', label: 'No concuerda · haber', tone: 'orange' },
          ], items: [
            { text: 'Ignacio dejó apagadas las luces del escenario.', answer: 'objeto', why: 'Apagadas concuerda con «las luces», el objeto de dejar.' },
            { text: 'La autora se quedó muy sorprendida con las preguntas.', answer: 'sujeto', why: 'Sorprendida concuerda con «la autora», el sujeto de quedarse.' },
            { text: 'Las voluntarias han preparado las bolsas de bienvenida.', answer: 'invariable', why: 'Con haber, preparado no cambia aunque el sujeto y el objeto sean femeninos plurales.' },
            { text: 'Hugo tiene reservadas tres mesas en el restaurante.', answer: 'objeto', why: 'Reservadas concuerda con «tres mesas».' },
            { text: 'Las entradas van numeradas por filas.', answer: 'sujeto', why: 'Ir + participio: numeradas concuerda con el sujeto, «las entradas».' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Llevamos recibidos más de doscientos correos de lectores.', ok: true, why: 'Correcta: llevar + participio + cantidad; recibidos concuerda con «correos».' },
            { sentence: 'Ya hemos impresos los carteles.', ok: false, options: ['Ya hemos impresas los carteles.', 'Ya tenemos impreso los carteles.', 'Ya hemos impreso los carteles.'], answer: 2, why: 'Con haber, el participio no concuerda: hemos impreso (o imprimido). Con tener sería «tenemos impresos».' },
            { sentence: 'Esta mañana Hugo se ha despierto antes que nadie.', ok: false, options: ['Esta mañana Hugo está despierto antes que nadie.', 'Esta mañana Hugo se ha despertado antes que nadie.', 'Esta mañana Hugo se ha despiertado antes que nadie.'], answer: 1, why: 'Despierto es solo adjetivo. En el tiempo compuesto: se ha despertado.' },
            { sentence: 'La novelista tiene llegado al muelle.', ok: false, options: ['La novelista lleva llegada al muelle.', 'La novelista ha llegado al muelle.', 'La novelista tiene llegada al muelle.'], answer: 1, why: 'Llegar no tiene objeto directo: no admite tener + participio. Solo haber.' },
            { sentence: 'Tengo escrito las preguntas para la autora.', ok: false, options: ['Tengo escrita las preguntas para la autora.', 'He escritas las preguntas para la autora.', 'Tengo escritas las preguntas para la autora.'], answer: 2, why: 'Tener + participio concuerda con el objeto: las preguntas → escritas.' },
            { sentence: 'Mi abuela es muy leída: tiene la casa llena de libros.', ok: true, why: 'Correcta: «leída» describe a una persona que ha leído mucho.' },
          ] },
        ] },
        { title: 'Viernes en el muelle · Friday on the dock', blocks: [
          { kind: 'chat-fill', title: 'Hugo e Ignacio preparan el espacio', lines: [
            { who: 'Ignacio', text: '¿Está todo listo para mañana?' },
            { who: 'Hugo', text: 'Casi. ___ montadas las dos carpas, pero falta el sonido.', options: ['He', 'Tengo', 'Estoy'], answer: 1, why: 'Un resultado listo: tener + participio, que concuerda con «las dos carpas». «He montadas» es imposible.' },
            { who: 'Ignacio', text: '¿Y las sillas?' },
            { who: 'Hugo', text: '___ colocadas ciento veinte de doscientas. ¿Me ayudas con el resto?', options: ['Llevo', 'He', 'Estoy'], answer: 0, why: 'Lo hecho hasta ahora, con cantidad, en una tarea que sigue: llevar + participio.' },
            { who: 'Ignacio', text: '¿Y Marina? No contesta al teléfono.' },
            { who: 'Hugo', text: 'Anoche se ___ dormida en la oficina, y hoy se ha ido a casa a descansar.', options: ['dejó', 'tuvo', 'quedó'], answer: 2, why: 'Cambio de estado involuntario de una persona: quedarse + participio.' },
            { who: 'Ignacio', text: '¿Dejó algo para nosotros?' },
            { who: 'Hugo', text: 'Sí: dejó ___ en la puerta la lista de tareas.', options: ['pegado', 'pegando', 'pegada'], answer: 2, why: 'Dejar + participio concuerda con el objeto, «la lista».' },
            { who: 'Ignacio', text: 'Perfecto. Mañana estoy aquí a las ocho.' },
            { who: 'Hugo', text: 'Trae chaqueta: aquí en el muelle hay que ir bien ___.', options: ['abrigando', 'abrigado', 'abrigarse'], answer: 1, why: 'Ir + participio: cómo va una persona. Sin sujeto concreto, en masculino singular.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['Llevamos', 'vendidas', 'casi', 'quinientas', 'entradas'], accept: ['Llevamos vendidas casi quinientas entradas', 'Llevamos casi quinientas entradas vendidas'], en: 'We’ve sold almost five hundred tickets so far.' },
            { tiles: ['Lo', 'dejé', 'dicho', 'en', 'la', 'recepción', 'del', 'hotel'], accept: ['Lo dejé dicho en la recepción del hotel'], en: 'I left word at the hotel reception.' },
            { tiles: ['La', 'autora', 'se', 'quedó', 'callada', 'un', 'momento'], accept: ['La autora se quedó callada un momento', 'La autora se quedó un momento callada'], en: 'The author fell silent for a moment.' },
          ] },
        ] },
        { title: 'Transforma · Transform', blocks: [
          { kind: 'rewrite', title: 'Del perfecto al resultado', items: [
            { prompt: 'He leído cinco de los ocho libros finalistas y sigo leyendo.', instruction: 'Usa llevar + participio. Empieza con «Llevo».', accept: ['Llevo leídos cinco de los ocho libros finalistas', 'Llevo leídos cinco de los ocho libros finalistas y sigo leyendo', 'Llevo cinco de los ocho libros finalistas leídos', 'Llevo cinco de los ocho libros finalistas leídos y sigo leyendo'] },
            { prompt: 'Hugo ha reservado las mesas del restaurante: ya están listas.', instruction: 'Usa tener + participio. Empieza con «Hugo ya tiene».', accept: ['Hugo ya tiene reservadas las mesas del restaurante', 'Hugo ya tiene las mesas del restaurante reservadas'] },
            { prompt: 'Al salir, Ignacio cerró con llave la puerta del almacén.', instruction: 'Di cómo quedó la puerta con dejar + participio. Empieza con «Al salir, Ignacio dejó».', accept: ['Al salir Ignacio dejó cerrada con llave la puerta del almacén', 'Al salir Ignacio dejó la puerta del almacén cerrada con llave', 'Al salir Ignacio dejó cerrada la puerta del almacén con llave', 'Al salir Ignacio dejó la puerta del almacén cerrada'] },
            { prompt: 'Terminaron el escenario a las nueve de la noche.', instruction: 'Usa quedar + participio. Empieza con «El escenario».', accept: ['El escenario quedó terminado a las nueve de la noche', 'El escenario quedó terminado a las 9 de la noche'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno habla de una tarea real que tiene a medias (un curso, una mudanza, un informe): qué tiene hecho, cuánto lleva y cómo lo dejó ayer. Tú anotas cada participio y comprueban juntos la concordancia.' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Un mensaje para Lorena', coach: 'Primero escucha sin leer. Listen first, read later.',
      steps: [
        { title: 'El buzón de voz · The voicemail', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: la idea general. Segunda escucha: tu alumno anota cada verbo + participio que oye (tener, llevar, dejar, quedar, andar) y dice con qué palabra concuerda. Después, las preguntas.', self: 'Escucha una vez para la idea general y otra para los detalles. Anota cada verbo + participio y piensa con qué palabra concuerda.' } },
          { kind: 'listen', title: 'Marina le deja un mensaje a la directora', channel: 'BUZÓN DE VOZ · VIERNES POR LA TARDE · DE MARINA PARA LORENA', src: '/audio/grammar-live/457.mp3',
            before: 'Lorena Vidal, la directora del festival, está en Santiago y vuelve mañana. Marina le deja un mensaje con el estado de todo. ¿Qué crees que le cuenta? ¿Habrá algún problema? (What do you think Marina reports? Will there be a problem?)',
            gist: { prompt: '¿Para qué deja Marina el mensaje?', options: ['Para quejarse de la imprenta.', 'Para pedirle a Lorena que cancele una entrevista.', 'Para contarle a Lorena cómo está todo antes de que vuelva.'], answer: 2, why: 'Repasa programas, entradas, carpas, autores y su propio cansancio, para que Lorena llegue tranquila.', en: 'Why does Marina leave the message?' },
            details: [
              { prompt: '¿Cuántas entradas se han vendido?', options: ['Menos que el año pasado.', 'Casi quinientas, y la venta sigue.', 'Exactamente quinientas: ya no quedan.'], answer: 1, why: '«Llevamos vendidas casi quinientas entradas»: llevar = hasta ahora.', en: 'How many tickets have been sold?' },
              { prompt: '¿Qué problema hay con las carpas?', options: ['La del escenario quedó un poco torcida por el viento.', 'Hugo todavía no las ha montado.', 'Se rompieron con la lluvia.'], answer: 0, why: '«La del escenario quedó un poco torcida con el viento; mañana temprano la arreglan».', en: 'What is the problem with the tents?' },
              { prompt: '¿Qué hizo Marina por el cambio de fecha de Claudia Rey?', options: ['Dejó dicho en el hotel que le guarden la habitación.', 'Le pidió a Lorena que llamara al hotel.', 'Canceló su entrevista.'], answer: 0, why: '«Ya dejé dicho en el hotel que le guarden la habitación».', en: 'What did Marina do about Claudia Rey’s change of date?' },
              { prompt: '¿Por qué anda cansada Marina?', options: ['Porque viajó a Santiago.', 'Porque montó las carpas con Hugo.', 'Porque anoche se quedó dormida en la oficina revisando horarios.'], answer: 2, why: '«Anoche me quedé dormida en la oficina revisando horarios, así que hoy ando bastante cansada».', en: 'Why is Marina feeling tired?' },
            ],
            transcript: 'Hola, Lorena, soy Marina. Sé que mañana vuelves de Santiago y quiero que llegues tranquila, así que te resumo cómo va todo. Primero, las buenas noticias: los programas ya están [[impresos|blue]]; la imprenta los entregó esta tarde y quedaron preciosos. [[Llevamos vendidas|violet]] casi quinientas entradas, bastante más que el año pasado. Hugo [[tiene montadas|violet]] las dos carpas del muelle, aunque la del escenario [[quedó un poco torcida|teal]] con el viento; mañana temprano la arreglan. Con los autores, [[tengo confirmadas|violet]] todas las entrevistas menos una: Claudia Rey llega el sábado, no el viernes, pero ya [[dejé dicho|violet]] en el hotel que le guarden la habitación. Por cierto, [[tengo pensado|violet]] abrir el encuentro con su novela; es la más [[atrevida|blue]] de la selección y creo que va a provocar un buen debate. Lo único malo: anoche [[me quedé dormida|teal]] en la oficina revisando horarios, así que hoy [[ando bastante cansada|teal]]. Si necesitas algo, llámame cuando quieras. Un abrazo.',
            reply: { teacher: 'Tú eres Marina. Tu alumno es Lorena y responde con un audio: dice qué tiene hecho ella en Santiago, cuánto lleva de su parte y cómo dejó las cosas antes de salir.', self: 'Responde a Marina como si fueras Lorena: di qué tienes hecho en Santiago, cuánto llevas de tu trabajo y cómo dejaste las cosas antes de salir.' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Lo hecho, lo que llevas, lo que quedó', coach: 'Habla de resultados, no solo de acciones. Talk about results.',
      steps: [
        { title: 'Tus resultados · Your results', blocks: [
          { kind: 'guide', text: { teacher: 'No hace falta usar todas las tarjetas. Tu alumno responde y tú preguntas a veces «¿Y cuánto llevas?» o «¿Cómo lo dejaste?» para provocar el verbo de resultado. Al final, repasan juntos la concordancia.', self: 'Responde cada tarjeta en voz alta. Después repite tu respuesta y comprueba con qué palabra concuerda cada participio.' } },
          { kind: 'talk', cards: [
            { q: 'Piensa en un proyecto que tienes en marcha. ¿Qué tienes ya hecho y cuánto llevas? · A project in progress: what is done, how far are you?', followUps: ['¿Qué te falta todavía?', '¿Cuánto tiempo llevas con él?', '¿Qué tienes pensado hacer después?'], phrases: ['Ya [[tengo hechos|violet]] / [[tengo escritas|violet]]…', '[[Llevo terminados|violet]]… de…', '[[Tengo pensado|violet]] + infinitivo'], hint: 'Tener para lo que está listo; llevar + cantidad para lo hecho hasta ahora. Concuerda con el objeto.', example: 'Estoy escribiendo una guía de senderismo. Tengo escritas las rutas de la costa y llevo terminados doce capítulos de veinte. Llevo seis meses con ella y tengo pensado publicarla en primavera.', next: 'Ahora, antes de un viaje.', teacher: 'Pregunta extra: «¿Y cuánto tiempo llevas escribiendo?». Así contrastas llevar + gerundio y llevar + participio.' },
            { q: 'Antes de irte de viaje, ¿cómo dejas tu casa o tu trabajo? · How do you leave things before a trip?', followUps: ['¿Qué dejas apagado o desenchufado?', '¿Dejas algo dicho o escrito a alguien?', '¿Alguna vez dejaste algo mal sin querer?'], phrases: ['Dejo [[cerradas|violet]] / [[apagadas|violet]]…', 'Le [[dejo dicho|violet]] a… que…', 'Una vez [[se quedó abierta|teal]]…'], hint: 'Dejar concuerda con el objeto: dejo cerradas las ventanas, dejo apagado el gas.', example: 'Siempre dejo cerradas las ventanas y apagado el calentador. A mi vecina le dejo dicho que riegue las plantas. Una vez se me olvidó la llave del agua y la cocina quedó inundada.', next: 'Ahora, un momento incómodo.' },
            { q: '¿Alguna vez te quedaste dormido o dormida en un momento importante? ¿O te quedaste sin palabras? · Fell asleep or speechless at a bad moment?', followUps: ['¿Dónde estabas?', '¿Cómo reaccionó la gente?', '¿Cómo quedó la situación al final?'], phrases: ['Me [[quedé dormido / dormida|teal]]…', 'Me [[quedé callado / callada|teal]]…', 'Al final todo [[quedó aclarado|teal]]…'], hint: 'Quedarse + participio para cambios de estado sin querer; concuerda contigo.', example: 'En mi primera entrevista de trabajo me quedé callada cuando me preguntaron por mis defectos. Me quedé en blanco unos segundos, pero al final todo quedó aclarado y me dieron el puesto.', next: 'Ahora, planes y rumores.' },
            { q: '¿Qué tienes pensado hacer el próximo verano? ¿Y qué tienes entendido sobre ese lugar o esa actividad? · Plans, and what you have heard.', followUps: ['¿Lo tienes ya reservado?', '¿Quién te lo ha contado?', '¿Vas bien preparado o preparada?'], phrases: ['[[Tengo pensado|violet]] + infinitivo', '[[Tengo entendido|violet]] que…', 'Ya [[tengo reservado|violet]]…'], hint: 'Tengo pensado / tengo entendido no cambian: el objeto es un infinitivo o una oración.', example: 'Tengo pensado hacer el Camino de Santiago en agosto. Tengo entendido que en verano hay muchísima gente, así que ya tengo reservados los albergues de las primeras etapas. Quiero ir bien preparada: llevo caminados ochenta kilómetros este mes.', next: 'Ahora, retratos.' },
            { q: 'Describe a dos personas que conoces bien: ¿son calladas, atrevidas, muy leídas, entendidas en algo? · Describe two people you know.', followUps: ['¿En qué se nota?', '¿Siempre son así o solo a veces?', '¿Y tú? ¿Eres más callado o más atrevido?'], phrases: ['Es muy [[leído / leída|blue]]…', 'Es muy [[entendido|blue]] en…', 'Es [[callada|blue]], pero hoy no está [[callada|blue]]…'], hint: 'Con ser, un rasgo de la persona; con estar, un estado del momento.', example: 'Mi tío es muy leído y muy entendido en historia: te explica cualquier batalla con fechas. Mi hermana, en cambio, es callada, pero cuando habla de cine no está callada ni un minuto. Las dos son atrevidas a su manera.', next: 'Ahora tú eres Marina.' },
            { q: 'Eres Marina. Es sábado por la mañana: Lorena acaba de llegar y te pregunta cómo está todo. · You are Marina: brief the director.', followUps: ['¿Cuántas entradas llevan vendidas?', '¿Cómo quedó la carpa del escenario?', '¿Qué dejaste dicho en el hotel?'], phrases: ['[[Tenemos montadas|violet]]…', '[[Llevamos vendidas|violet]]…', 'La carpa [[quedó|teal]]… · Dejé [[preparadas|violet]]…'], hint: 'Haber para contar acciones; tener, llevar, dejar y quedar para presentar resultados.', example: 'Todo va bien. Tenemos montadas las dos carpas y la del escenario quedó perfecta: Hugo la arregló a las siete. Llevamos vendidas quinientas veinte entradas. Dejé preparadas las bolsas de los autores y Claudia ya ha llegado al hotel.', teacher: 'Haz de Lorena e interrumpe: «¿Y eso quién lo hizo?». Tu alumno pasa de quedar (sin culpable) a dejar o haber (con persona).' },
          ], swap: { teacher: 'Al final, cambian los papeles: tú cuentas un proyecto tuyo con tener, llevar y dejar, y tu alumno detecta cada participio y dice si concuerda y con qué.', self: 'Esta semana, cuando alguien te pregunte cómo va un trabajo, responde con «tengo hecho…» y «llevo… de…», y fíjate en la concordancia.' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'El correo de traspaso', coach: 'Que Ignacio sepa qué está hecho y qué falta. Make clear what is done and what is not.',
      steps: [
        { title: 'Un correo para Ignacio · An email for Ignacio', blocks: [
          { kind: 'guide', text: { teacher: 'Puede escribir en clase o como tarea. Después revisan juntos cada participio: ¿qué verbo lleva delante? ¿Concuerda con el objeto, con el sujeto o con nada?', self: 'Escribe tu correo y toca «Revisar mi texto». Después mira cada participio: ¿qué verbo lleva delante y con qué palabra concuerda?' } },
          { kind: 'write', title: 'Lo que dejo hecho', situation: 'Es sábado por la noche. Mañana Marina acompaña a Claudia Rey a una entrevista en la radio y no estará en el muelle. Eres Marina: escribe un correo a Ignacio Fuentes, el voluntario que coordina la mañana del domingo, con todo lo que está hecho, lo que lleváis y lo que falta. (O escribe sobre un proyecto tuyo a alguien que te sustituye.) · Write a handover email: what is done, how far you are, what is left.', task: [
              'Di dos cosas que tienes listas con tener + participio (con concordancia).',
              'Cuenta el avance con llevar + participio + cantidad.',
              'Explica cómo dejaste algo o qué dejaste dicho, con dejar + participio.',
              'Cuenta cómo quedó algo o cómo te quedaste tú, con quedar(se) + participio.',
              'Usa haber + participio al menos una vez para una acción, sin concordancia.',
            ], starters: ['Hola, Ignacio:', 'Te dejo todo listo para mañana.', 'Ya tengo…', 'Llevamos… de…', 'Te dejé… en…', 'Ayer… quedó…', 'Si surge algo, …'],
            words: ['tengo preparadas', 'tenemos montadas', 'llevamos vendidas', 'dejé dicho', 'dejé guardados', 'quedó terminado', 'me quedé dormida', 'van incluidos', 'impresos', 'hemos repartido'],
            model: 'Hola, Ignacio: Te dejo todo listo para mañana, porque estaré en la radio con Claudia hasta las doce. Ya [[tengo preparadas|violet]] las bolsas para los autores y [[tenemos montadas|violet]] las dos carpas; la del escenario [[quedó perfecta|teal]] después del arreglo de Hugo. [[Llevamos vendidas|violet]] seiscientas diez entradas para el domingo, así que esperamos mucho público. Los programas están [[impresos|blue]] y sobraron muchos: te los [[dejé guardados|violet]] en el almacén, en la caja azul. Esta tarde [[hemos repartido|orange]] los carteles por el barrio. En recepción [[dejé dicho|violet]] que te den las llaves a las ocho. Los cafés de los autores [[van incluidos|teal]] en la factura del hotel, así que no tienes que pagar nada. Si surge algo, llámame al salir de la entrevista. ¡Gracias por cubrirme! Un abrazo, Marina',
            minWords: 110,
            checks: [
              { label: 'Tener + participio (what you have ready)', pattern: '(?<!\\p{L})(?:tengo|tenemos|tienes|tiene|tienen)\\s+(?:\\p{L}+\\s+){0,3}?\\p{L}+(?:ad|id|ert|ech|it|uest|elt|ich|res)[oa]s?(?!\\p{L})', tip: 'Presenta lo que está listo: «Ya tengo preparadas las bolsas».' },
              { label: 'Llevar + participio (so far)', pattern: '(?<!\\p{L})(?:llevo|llevamos|lleva|llevan)\\s+\\p{L}+(?:ad|id|ert|ech|it|uest|ich|res)[oa]s?(?!\\p{L})', tip: 'Cuenta el avance con una cantidad: «Llevamos vendidas seiscientas entradas».' },
              { label: 'Dejar + participio (how you left things)', pattern: '(?<!\\p{L})(?:dejé|deje|dejamos|dejó|dejaron)\\s+(?:\\p{L}+\\s+){0,3}?\\p{L}+(?:ad|id|ert|ech|it|uest|ich|res)[oa]s?(?!\\p{L})', tip: 'Di cómo dejaste algo: «Te dejé guardados los programas», «Dejé dicho que…».' },
              { label: 'Quedar(se) + participio o adjetivo (how it ended up)', pattern: '(?<!\\p{L})(?:quedó|quedaron|quedé|quede|quedamos)\\s+\\p{L}+', tip: 'Cuenta cómo terminó algo: «La carpa quedó perfecta», «Me quedé dormida».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})(?:he|has|ha|hemos|habéis|han|había|habían)\\s+\\p{L}+(?:ad|id)(?:a|os|as)(?!\\p{L})', why: 'Después de haber, el participio no concuerda: «hemos repartido los carteles», no «hemos repartidos».' },
              { pattern: '(?<!\\p{L})(?:he|has|ha|hemos|han)\\s+despiert', why: '«Despierto» es solo adjetivo. Con haber: «me he despertado».' },
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
            { tone: 'violet', label: 'TENER · LLEVAR · DEJAR', formula: 'tengo escritas · llevo leídos cinco · dejé cerrada', example: 'Tengo escritas tres páginas; llevo leídos cinco libros; dejó cerrada la puerta.', caption: 'Lo que tienes listo, lo hecho hasta ahora, cómo dejaste algo. Concuerda con el objeto.', en: 'What you have ready, what you have done so far, how you left something. The participle agrees with the object.' },
            { tone: 'teal', label: 'QUEDAR(SE) · IR · ANDAR', formula: 'quedó abierta · me quedé dormida · va preparado · anda preocupada', example: 'La ventana quedó abierta toda la noche.', caption: 'Cómo terminó algo o cómo está alguien. Concuerda con el sujeto.', en: 'How something ended up, or how someone is. The participle agrees with the subject.' },
            { tone: 'orange', label: 'HABER', formula: 'he / hemos / han + participio en -o', example: 'Hemos vendido cuatrocientas entradas.', caption: 'La acción. No concuerda nunca. Tener no lo sustituye: «he llegado».', en: 'The action. Never agrees. Tener cannot replace it: he llegado, never tengo llegado.' },
            { tone: 'blue', label: 'ADJETIVOS', formula: 'impreso, frito, provisto · despierto, suelto, electo · leído, atrevido, callado', example: 'Los programas ya están impresos; Claudia es muy leída.', caption: 'Dos participios válidos con haber solo en imprimir, freír y proveer; algunos adjetivos cambian de sentido.', en: 'Only imprimir, freír and proveer have two participles valid with haber; some participle-adjectives take on a new, active meaning.' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Mira el verbo que va delante. Con **haber**, participio en -o y punto. Con **tener, llevar, dejar**, el participio es un adjetivo del **objeto**. Con **quedar(se), ir, andar** (y estar), es un adjetivo del **sujeto**. Y pregúntate qué quieres decir: ¿la acción, el resultado que tienes, lo que llevas, cómo lo dejaste o cómo quedó?', en: 'Look at the verb in front. After haber, the participle ends in -o, full stop. After tener, llevar and dejar, it behaves like an adjective of the object; after quedar(se), ir and andar (and estar), like an adjective of the subject. Then choose by meaning: the action, the result you hold, progress so far, how you left it, or how it ended up.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'La imprenta nos ha ___ los diplomas con un día de retraso.', options: ['impreso', 'impresos', 'imprimidos'], answer: 0, why: 'Con haber, el participio no concuerda: ha impreso (o imprimido).', en: 'The printer has printed the certificates for us a day late.' },
            { prompt: 'Alguien ___ abierta la puerta del almacén toda la noche.', options: ['dejó', 'hubo', 'quedó'], answer: 0, why: 'Una persona (alguien) deja algo en un estado: dejar + participio.', en: 'Someone left the storeroom door open all night.' },
            { prompt: 'De los veinte autores invitados, ya ___ confirmados dieciocho.', options: ['hemos', 'estamos', 'tenemos'], answer: 2, why: 'Tener + participio que concuerda con «dieciocho» (autores). «Hemos confirmados» es imposible.', en: 'Of the twenty invited authors, we’ve already got eighteen confirmed.' },
            { prompt: 'Mi abuela es muy ___: ha leído a casi todos los clásicos.', options: ['leyendo', 'leído', 'leída'], answer: 2, why: 'Adjetivo con sentido activo («que ha leído mucho»), concuerda con «mi abuela».', en: 'My grandmother is very well read: she has read almost all the classics.' },
            { prompt: 'Para la entrevista en la radio, Ignacio iba ___ de traje.', options: ['vestirse', 'vestido', 'vistiendo'], answer: 1, why: 'Ir + participio: cómo iba Ignacio. Concuerda con el sujeto.', en: 'For the radio interview, Ignacio was wearing a suit.' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Ahora, una tesis doctoral.', blocks: [
          { kind: 'lead', text: 'Tu amigo Gonzalo está terminando su tesis doctoral. Su directora le pregunta por correo cómo va. Ayúdalo a responder con verbos de resultado.', en: 'Your friend Gonzalo is finishing his PhD thesis and his supervisor asks how it is going. Rewrite his notes with result verbs: llevar for progress, tener for what is ready, quedarse for what happened to him.' },
          { kind: 'rewrite', title: 'Las notas de Gonzalo · Gonzalo’s notes', items: [
            { prompt: 'He escrito cuatro de los seis capítulos y sigo escribiendo.', instruction: 'Usa llevar. Empieza con «Llevo».', accept: ['Llevo escritos cuatro de los seis capítulos', 'Llevo cuatro de los seis capítulos escritos', 'Llevo escritos cuatro de los seis capítulos y sigo escribiendo', 'Llevo cuatro de los seis capítulos escritos y sigo escribiendo'] },
            { prompt: 'Ya he corregido la bibliografía; está lista.', instruction: 'Usa tener. Empieza con «Ya tengo».', accept: ['Ya tengo corregida la bibliografía', 'Ya tengo la bibliografía corregida'] },
            { prompt: 'Anoche me dormí delante del portátil sin querer.', instruction: 'Usa quedarse. Empieza con «Anoche».', accept: ['Anoche me quedé dormido delante del portátil', 'Anoche me quedé dormido delante del portátil sin querer', 'Anoche me quedé dormido delante del portatil'] },
          ] },
        ] },
        { title: 'Ampliación · Resultados en textos formales · Extension: formal register', mascot: '/brand/mascot/portrait.webp', coach: 'Opcional: actos, carteles y crónicas. Optional: ceremonies, signs and reports.', blocks: [
          { kind: 'lead', text: 'En los actos oficiales, **queda + participio** declara algo en el mismo momento de decirlo: «**Queda inaugurado** el festival», «**Queda abierta** la sesión». En carteles y normas: «**Queda prohibido** el paso». Y en crónicas e informes, **una vez + participio** (o el participio solo) presenta una acción terminada antes de otra: «**Una vez terminada** la charla, la autora firmó libros», «**Terminada** la charla, …». El participio concuerda con el sustantivo.', en: 'In ceremonies, queda + participle performs the act as it is said (“I hereby declare the festival open”). Signs and rules use it too. In reports, una vez + participle, or the participle alone, presents one action as completed before the next; it agrees with its noun. This is formal, mostly written Spanish.' },
          { kind: 'choice', title: 'Elige · Choose', items: [
            { prompt: 'La alcaldesa, al empezar el acto: «___ inaugurado el Encuentro de Letras del Puerto».', options: ['Ha', 'Queda', 'Está'], answer: 1, why: 'Fórmula declarativa: el festival se inaugura en el momento de decirlo. «Está inaugurado» solo describe un estado.', en: 'The mayor, opening the event: “I declare the festival open.”' },
            { prompt: 'Cartel en el muelle: «___ prohibido el paso de vehículos durante el festival».', options: ['Queda', 'Lleva', 'Tiene'], answer: 0, why: 'Queda + participio en normas y avisos formales; concuerda con «el paso».', en: 'Sign on the dock: “Vehicles are not allowed during the festival.”' },
          ] },
          { kind: 'rewrite', title: 'De la conversación a la crónica · From speech to report', items: [
            { prompt: 'Cuando terminó la última charla, recogimos las carpas.', instruction: 'Empieza con «Una vez terminada».', accept: ['Una vez terminada la última charla recogimos las carpas', 'Una vez terminada la última charla se recogieron las carpas'] },
            { prompt: 'Cuando imprimieron los diplomas, la directora los firmó.', instruction: 'Empieza con «Una vez impresos».', accept: ['Una vez impresos los diplomas la directora los firmó', 'Una vez impresos los diplomas los firmó la directora'] },
          ] },
          { kind: 'teacher', text: 'Paso opcional, para alumnos que van rápido o si sobra tiempo. Estas fórmulas son propias de actos, normas e informes; en la conversación basta con «cuando terminó la charla…». Extra: tu alumno inaugura y clausura un acto imaginario con «Queda inaugurado / Queda clausurado».' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 158 · Perífrasis de obligación e inferencia', text: 'Ya combinas tener, llevar, dejar y quedar con un participio para presentar resultados: «tengo escritas tres páginas», «quedó abierta». En la clase 158 pasas a las perífrasis con **infinitivo**, que expresan obligación y deducción: **tener que**, **deber**, **deber de**, **haber que** («Debe de estar cansada»; «Debe entregar el informe»). Es el paso natural: el mismo verbo tener cambia de sentido según lo que lleva detrás: «tengo escritas» (resultado) frente a «tengo que escribir» (obligación).', en: 'You can now present results with tener, llevar, dejar and quedar plus a participle. Class 158 moves on to infinitive periphrases for obligation and inference: tener que, deber, deber de, haber que (“she must be tired”, “she must hand in the report”). It is the natural next step, because the same verb changes meaning with what follows it: tengo escritas (a result) versus tengo que escribir (an obligation).', href: '/gramatica/perifrasis-de-obligacion-e-inferencia', label: 'Ir a la clase 158' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Por qué se dice “hemos vendido” pero “llevamos vendidas”?». Respuesta esperada: haber forma un tiempo compuesto y su participio no concuerda; con llevar, el participio es un adjetivo del objeto. Tarea: escribir el correo de Escribir sobre un proyecto real y marcar cada participio.' },
        ] },
      ],
    },
  ],
};
