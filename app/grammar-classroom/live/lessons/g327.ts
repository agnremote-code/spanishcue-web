import type { LiveLesson } from '../types';

/**
 * Lesson 327 · A1 · Preposiciones básicas a, de, en, con, sin (course unit G027).
 * One scene runs through the class: a courier company in Córdoba. Mateo Ruiz,
 * a courier, has to take a package for la señora Molina from the Centro branch
 * to another branch, with Carla Vidal, a new colleague. Lucía Ortega is the
 * coordinator at the office; Raquel works at the reception of the Norte branch.
 * Content: a (destination, with ir / llegar / venir), en (location, with estar /
 * vivir / trabajar), de (origin with venir / salir / ser, and possession: el
 * paquete de Lucía), con (company, things you carry) and sin (absence).
 * Key contrast: Voy a Córdoba / Estoy en Córdoba. «En + transporte» appears as
 * a side note only. Contractions al / del belong to the next class (028), so
 * this class never puts «a» or «de» before «el». The voice message is from
 * Lucía (one speaker). Neutral tú; Raquel speaks to the couriers with ustedes.
 */
export const lesson: LiveLesson = {
  id: 327,
  level: 'A1',
  title: 'Preposiciones básicas a, de, en, con, sin',
  subtitle: 'Decir a dónde vas, de dónde vienes, dónde estás, con quién vas y qué no tienes, en un día de reparto por la ciudad.',
  legend: [
    { tone: 'blue', label: 'A · destino, a dónde vas (to)' },
    { tone: 'orange', label: 'EN · lugar, dónde está algo (in / at / on)' },
    { tone: 'teal', label: 'DE · origen y posesión (from / of / ’s)' },
    { tone: 'violet', label: 'CON · SIN · compañía o ausencia (with / without)' },
  ],
  optionNotes: {
    a: '«A» marca el destino: a dónde vas o llegas (to). Para decir dónde está algo o alguien, sin movimiento, usa «en».',
    en: '«En» dice dónde está algo o alguien (in / at / on), sin movimiento. Si vas o llegas a un lugar, el destino lleva «a».',
    de: '«De» dice el origen (vengo de…, salgo de…, soy de…) o de quién es algo (el paquete de Lucía).',
    con: '«Con» significa «with»: una persona que va contigo o una cosa que tienes.',
    sin: '«Sin» significa «without»: algo o alguien que no está, que no tienes.',
    De: '«De» dice el origen (¿de dónde vienes?) o de quién es algo (¿de quién es?).',
    A: '«A» marca el destino: ¿a dónde vas? (to).',
    En: '«En» dice dónde está algo o alguien, sin movimiento (in / at / on).',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Un paquete por la ciudad', coach: 'Palabras pequeñas, trabajo grande. Small words, big job.',
      steps: [
        { title: 'El mensajero · The courier', blocks: [
          { kind: 'lead', text: 'Mateo Ruiz es **mensajero** en Córdoba. Hoy tiene un paquete importante: sale de la sucursal Centro y va a la sucursal Norte, con Carla, una compañera nueva. Para contar su día necesita cinco palabras pequeñas: **a, de, en, con, sin**. Son las **preposiciones**.', en: 'Mateo Ruiz is a courier in Córdoba. Today he has an important package: he leaves the Centro branch and goes to the Norte branch with Carla, a new colleague. To tell his day he needs five small words: a, de, en, con, sin. They are prepositions.' },
          { kind: 'guide', text: { teacher: 'Tú lees las cuatro frases en voz alta y tu alumno las repite. Después, tu alumno dice en inglés qué palabra corresponde a la palabra marcada.', self: 'Lee las cuatro frases en voz alta. Mira la palabra marcada: ¿qué significa en inglés? (Read the four sentences aloud. What does the marked word mean in English?)' } },
          { kind: 'compare', title: 'El día de Mateo · Mateo’s day', columns: [
            { tone: 'orange', label: 'EN · where he is', sentence: 'Mateo está [[en|orange]] la sucursal Centro.', idea: 'Un lugar, sin movimiento.', en: 'Mateo is at the Centro branch.' },
            { tone: 'blue', label: 'A · where he goes', sentence: 'Va [[a|blue]] la sucursal Norte.', idea: 'El destino: a dónde va.', en: 'He is going to the Norte branch.' },
            { tone: 'teal', label: 'DE · from / whose', sentence: 'Es el paquete [[de|teal]] la señora Molina.', idea: 'De quién es el paquete.', en: 'It is Mrs Molina’s package.' },
            { tone: 'violet', label: 'CON · with', sentence: 'Va [[con|violet]] Carla.', idea: 'La persona que va con él.', en: 'He is going with Carla.' },
          ] },
          { kind: 'tip', icon: '💡', title: 'Primero la preposición · Preposition first', text: 'La preposición va **delante** de un lugar o de una persona: **a** Córdoba, **en** casa, **con** Carla. Es una palabra corta, pero cambia todo: «Voy **a** Córdoba» no es «Estoy **en** Córdoba».', en: 'The preposition goes before the place or the person: a Córdoba, en casa, con Carla. It is a short word, but it changes everything: “I am going to Córdoba” is not “I am in Córdoba”.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Va a la sucursal Norte»: ¿qué dice «a»?', options: ['Con quién va.', 'El destino: a dónde va.', 'Dónde está ahora.'], answer: 1, why: '«A» + lugar = destino (to).', en: '“Va a la sucursal Norte”: what does “a” say?' },
            { prompt: '«Está en la sucursal Centro»: ¿qué dice «en»?', options: ['De quién es.', 'Dónde está.', 'A dónde va.'], answer: 1, why: '«En» + lugar = dónde está (at / in).', en: '“Está en la sucursal Centro”: what does “en” say?' },
            { prompt: '«Va con Carla» significa…', options: ['He goes to Carla.', 'He goes without Carla.', 'He goes with Carla.'], answer: 2, why: 'Con = with.', en: '“Va con Carla” means…' },
          ] },
        ] },
        { title: 'A o en · Going or being', mascot: '/brand/mascot/studying.webp', coach: '¿Hay movimiento? Is there movement?', blocks: [
          { kind: 'lead', text: 'La primera decisión es fácil si miras el verbo. Con **movimiento hacia un lugar** (ir, llegar, venir), el lugar lleva **a**. **Sin movimiento** (estar, vivir, trabajar), el lugar lleva **en**.', en: 'The first decision is easy if you look at the verb. With movement towards a place (ir, llegar, venir), the place takes “a”. Without movement (estar, vivir, trabajar), the place takes “en”.' },
          { kind: 'concept', tone: 'blue', label: 'A · DESTINO', question: '¿A dónde vas?', en: 'Where are you going? (to)', formula: ['ir · llegar · venir + a + lugar', 'Voy a Córdoba. Llego a la oficina.'],
            meaning: 'Con **a** dices el **destino**: el lugar donde termina el viaje.',
            examples: [
              { es: 'Mateo va [[a|blue]] la sucursal Norte.', en: 'Mateo is going to the Norte branch.' },
              { es: 'Llegamos [[a|blue]] Córdoba en tren.', en: 'We arrive in Córdoba by train.' },
              { es: 'Por la noche, Carla va [[a|blue]] casa.', en: 'At night, Carla goes home.' },
            ],
            note: 'Ojo: en inglés «arrive **in**», pero en español «llegar **a**»: llegar también es movimiento hacia un destino.' },
          { kind: 'concept', tone: 'orange', label: 'EN · LUGAR', question: '¿Dónde estás?', en: 'Where are you? (in / at / on)', formula: ['estar · vivir · trabajar + en + lugar', 'Estoy en Córdoba. Trabajo en la oficina.'],
            meaning: 'Con **en** dices **dónde está** algo o alguien. No hay viaje: es el lugar donde estás.',
            examples: [
              { es: 'Lucía trabaja [[en|orange]] la oficina.', en: 'Lucía works at the office.' },
              { es: 'El paquete está [[en|orange]] la mesa.', en: 'The package is on the table.' },
              { es: 'Carla vive [[en|orange]] Córdoba.', en: 'Carla lives in Córdoba.' },
            ] },
          { kind: 'compare', title: 'Par clave · Key pair', columns: [
            { tone: 'blue', label: 'A · movimiento', sentence: 'Voy [[a|blue]] Córdoba.', idea: 'Viajo hacia Córdoba.', en: 'I am going to Córdoba.' },
            { tone: 'orange', label: 'EN · sin movimiento', sentence: 'Estoy [[en|orange]] Córdoba.', idea: 'Ya estoy allí.', en: 'I am in Córdoba.' },
          ] },
          { kind: 'decide', title: '¿A o en? Responde · A or en? Answer', steps: [
            { q: '¿Hay movimiento hacia un lugar? (ir, llegar, venir) · Moving towards a place?', yes: 'Usa **a**: «Voy a la sucursal», «Llego a Córdoba».', no: 'next' },
            { q: '¿Dices dónde está algo o alguien, sin movimiento? (estar, vivir, trabajar) · Saying where something is?', yes: 'Usa **en**: «Estoy en la oficina», «Vivo en Córdoba».', no: 'Mira las otras preposiciones: de, con, sin.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Mateo ___ Córdoba ahora. (He is there.)', options: ['está en', 'va en', 'está a'], answer: 0, why: 'Sin movimiento: estar en.', en: 'Mateo is in Córdoba now.' },
            { prompt: 'Carla llega ___ la oficina.', options: ['de', 'a', 'en'], answer: 1, why: 'Llegar = movimiento hacia un destino: a.', en: 'Carla arrives at the office.' },
            { prompt: 'Lucía trabaja ___ la sucursal Centro.', options: ['a', 'con', 'en'], answer: 2, why: 'Trabajar en + lugar: no hay viaje.', en: 'Lucía works at the Centro branch.' },
          ] },
        ] },
        { title: 'De · From and whose', mascot: '/brand/mascot/standing.webp', coach: 'De: el origen y el dueño.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'DE · ORIGEN Y POSESIÓN', question: '¿De dónde vienes? ¿De quién es?', en: 'Where are you coming from? Whose is it?', formula: ['venir · salir · ser + de + lugar', 'cosa + de + persona: el paquete de Lucía'],
            meaning: '**De** tiene dos trabajos muy frecuentes: dice el **origen** (el lugar donde empieza el viaje, o tu ciudad) y dice **de quién es** una cosa.',
            examples: [
              { es: 'Mateo sale [[de|teal]] la sucursal Centro.', en: 'Mateo leaves the Centro branch.' },
              { es: 'Vengo [[de|teal]] casa.', en: 'I am coming from home.' },
              { es: 'Carla es [[de|teal]] Málaga.', en: 'Carla is from Málaga.' },
              { es: 'Es la moto [[de|teal]] Carla.', en: 'It is Carla’s motorbike.' },
            ],
            note: 'Español no tiene «’s». Para la posesión, primero la cosa y después **de** + persona: «la moto **de** Carla» (Carla’s motorbike).' },
          { kind: 'compare', title: 'Origen y destino · Start and end of the trip', columns: [
            { tone: 'teal', label: 'DE · origen', sentence: 'Vengo [[de|teal]] la oficina.', idea: 'El lugar donde empieza el viaje.', en: 'I am coming from the office.' },
            { tone: 'blue', label: 'A · destino', sentence: 'Voy [[a|blue]] la oficina.', idea: 'El lugar donde termina el viaje.', en: 'I am going to the office.' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'De… a… · From… to…', text: 'Un viaje completo tiene las dos: «Mateo va **de** la sucursal Centro **a** la sucursal Norte». Primero el origen con **de**, después el destino con **a**.', en: 'A full trip has both: “Mateo goes from the Centro branch to the Norte branch”. First the origin with “de”, then the destination with “a”.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Mrs Molina’s package = el paquete ___', options: ['con la señora Molina', 'de la señora Molina', 'la señora Molina'], answer: 1, why: 'Posesión: cosa + de + persona.', en: 'Mrs Molina’s package' },
            { prompt: 'Carla viene ___ Málaga.', options: ['de', 'a', 'en'], answer: 0, why: 'Venir de = el origen (from).', en: 'Carla comes from Málaga.' },
            { prompt: 'Mateo sale ___ la oficina a las nueve.', options: ['de', 'en', 'con'], answer: 0, why: 'Salir de + lugar: el punto de partida.', en: 'Mateo leaves the office at nine.' },
          ] },
        ] },
        { title: 'Con y sin · With and without', mascot: '/brand/mascot/speaking.webp', coach: 'Con o sin: ¿está o no está?', blocks: [
          { kind: 'concept', tone: 'violet', label: 'CON · SIN', question: '¿Con quién vas? ¿Qué no tienes?', en: 'Who are you going with? What don’t you have?', formula: ['con + persona o cosa', 'sin + persona o cosa'],
            meaning: '**Con** dice la compañía (una persona que va contigo) o una cosa que tienes. **Sin** es lo contrario: algo o alguien que **no** está.',
            examples: [
              { es: 'Mateo va [[con|violet]] Carla.', en: 'Mateo goes with Carla.' },
              { es: 'El paquete va [[con|violet]] el recibo.', en: 'The package goes with the receipt.' },
              { es: 'Carla no puede ir en moto [[sin|violet]] casco.', en: 'Carla can’t ride a motorbike without a helmet.' },
              { es: 'Hoy Lucía trabaja [[sin|violet]] ayuda.', en: 'Today Lucía works without help.' },
            ],
            note: 'Después de **sin**, muchas veces el nombre va sin artículo: «sin casco», «sin dinero».' },
          { kind: 'compare', title: 'Par clave · Key pair', columns: [
            { tone: 'violet', label: 'CON · with', sentence: 'Carla va [[con|violet]] casco.', idea: 'Tiene casco.', en: 'Carla rides with a helmet.' },
            { tone: 'violet', label: 'SIN · without', sentence: 'Carla va [[sin|violet]] casco.', idea: 'No tiene casco: ¡peligro!', en: 'Carla rides without a helmet.' },
          ] },
          { kind: 'table', title: 'Las cinco preposiciones · The five prepositions', head: ['Preposición', 'Pregunta', 'Relación', 'Ejemplo', 'English'], rows: [
            ['[[a|blue]]', '¿A dónde?', 'destino', 'Voy a la sucursal Norte.', 'to'],
            ['[[en|orange]]', '¿Dónde?', 'lugar', 'Estoy en la oficina.', 'in / at / on'],
            ['[[de|teal]]', '¿De dónde? · ¿De quién?', 'origen · posesión', 'Vengo de casa. Es el paquete de Lucía.', 'from · of / ’s'],
            ['[[con|violet]]', '¿Con quién? · ¿Con qué?', 'compañía', 'Voy con Carla.', 'with'],
            ['[[sin|violet]]', '¿Sin qué?', 'ausencia', 'No salgo sin el recibo.', 'without'],
          ], note: 'En la pregunta, la preposición va **delante** de la palabra interrogativa: ¿**A** dónde vas? ¿**De** dónde vienes? ¿**Con** quién vas?' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿___ quién vas? —Con Carla.', options: ['Con', 'Sin', 'En'], answer: 0, why: 'La respuesta es «con Carla»: la pregunta también lleva «con».', en: 'Who are you going with? —With Carla.' },
            { prompt: 'No tengo el recibo: voy ___ recibo.', options: ['con', 'de', 'sin'], answer: 2, why: 'No lo tienes: sin (without).', en: 'I don’t have the receipt: I am going without it.' },
            { prompt: 'El paquete va ___ una nota para la señora Molina.', options: ['con', 'sin', 'en'], answer: 0, why: 'La nota va junto con el paquete: con.', en: 'The package goes with a note for Mrs Molina.' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Primero el verbo, después la preposición.', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la frase con el error y preguntas: «¿Hay movimiento? ¿Es origen, lugar o compañía?». Tu alumno responde y después aparece la corrección.', self: 'Lee cada frase, busca el error y toca para ver la corrección. Pregúntate: ¿hay movimiento? (Is there movement?)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Voy en Córdoba.', right: 'Voy a Córdoba.', why: 'Ir = movimiento hacia un destino: a. «En» es para dónde estás. (Going to a place: a.)' },
            { wrong: 'Estoy a la oficina.', right: 'Estoy en la oficina.', why: 'Estar = sin movimiento: en. (Being in a place: en.)' },
            { wrong: 'Llego en la sucursal Norte.', right: 'Llego a la sucursal Norte.', why: 'En inglés «arrive in / at», pero llegar es movimiento: llegar a.' },
            { wrong: 'Vengo en la oficina.', right: 'Vengo de la oficina.', why: 'El origen: venir de. (Coming from: de.)' },
            { wrong: 'Es Lucía paquete.', right: 'Es el paquete de Lucía.', why: 'Español no tiene «’s»: la cosa + de + persona.' },
            { wrong: 'Voy con no casco.', right: 'Voy sin casco.', why: '«Con no» no existe. Without = sin.' },
          ] },
          { kind: 'tip', icon: '💡', title: 'Voy a Córdoba en tren', text: '**En** también dice el **transporte**: en tren, en moto, en bici, en coche. Mira: «Voy **a** Córdoba **en** tren»: **a** es el destino, **en** es cómo viajas. Por eso «Voy en Córdoba» está mal: Córdoba no es un transporte.', en: '“En” also says the means of transport: by train, by motorbike, by bike, by car. Look: “Voy a Córdoba en tren”: “a” is the destination, “en” is how you travel. That is why “Voy en Córdoba” is wrong: Córdoba is not a vehicle.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué frase está bien?', options: ['Mateo va en la sucursal en moto.', 'Mateo va a la sucursal en moto.', 'Mateo va en la sucursal a moto.'], answer: 1, why: 'Destino con a (a la sucursal), transporte con en (en moto).', en: 'Which sentence is correct?' },
            { prompt: 'Lucía’s office = ___', options: ['Lucía oficina', 'la oficina con Lucía', 'la oficina de Lucía'], answer: 2, why: 'Posesión: la cosa + de + persona.', en: 'Lucía’s office' },
            { prompt: '¿Qué frase está bien?', options: ['Carla está en casa.', 'Carla está a casa.', 'Carla está de casa.'], answer: 0, why: 'Estar = sin movimiento: en casa.', en: 'Which sentence is correct?' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno dice tres frases reales sobre hoy: «Vengo de…», «Estoy en…», «Después voy a…». Tú repites cada frase con la preposición marcada en voz más fuerte.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'Un paquete especial', coach: 'Toca las palabras marcadas. Tap the marked words.',
      steps: [
        { title: 'En la oficina · At the office', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Lucía y tu alumno es Mateo. Después, tu alumno toca cada expresión marcada y dice qué relación tiene: destino, lugar, origen, posesión, compañía o ausencia.', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada para ver por qué se usa esa preposición. (Tap each marked expression.)' } },
          { kind: 'explore', title: 'El paquete de la señora Molina', setting: 'Lunes, nueve y media de la mañana. Mateo llega a la sucursal Centro de la empresa de mensajería. Lucía, la coordinadora, tiene un trabajo especial para él. (Monday morning. Mateo arrives at the courier company. Lucía, the coordinator, has a special job for him.)', lines: [
            { who: 'Lucía', text: 'Buenos días, Mateo. ¿Ya estás [[en la oficina|orange]]?', en: 'Good morning, Mateo. Are you at the office already?' },
            { who: 'Mateo', text: 'Sí, ya estoy aquí. [[Vengo de casa|teal]] [[en bici|orange]].', en: 'Yes, I am here. I am coming from home by bike.' },
            { who: 'Lucía', text: 'Perfecto. Hoy tienes un paquete especial: es el paquete [[de la señora Molina|teal]].', en: 'Perfect. Today you have a special package: it is Mrs Molina’s package.' },
            { who: 'Mateo', text: '¿Y [[a dónde|blue]] va?', en: 'And where is it going?' },
            { who: 'Lucía', text: '[[A la sucursal Norte|blue]]. Está [[en la avenida Colón|orange]].', en: 'To the Norte branch. It is on Colón Avenue.' },
            { who: 'Mateo', text: '¿Voy solo?', en: 'Am I going alone?' },
            { who: 'Lucía', text: 'No, vas [[con Carla|violet]]. Es su primer día.', en: 'No, you are going with Carla. It is her first day.' },
            { who: 'Mateo', text: 'Muy bien. ¿Y dónde está el paquete?', en: 'Very good. And where is the package?' },
            { who: 'Lucía', text: 'Está [[en la mesa|orange]], [[con el recibo|violet]]. Importante: [[sin el recibo|violet]], no hay entrega.', en: 'It is on the table, with the receipt. Important: without the receipt, there is no delivery.' },
            { who: 'Mateo', text: 'Entendido. Carla y yo [[salimos de la sucursal|teal]] ahora mismo. ¡Hasta luego!', en: 'Understood. Carla and I are leaving the branch right now. See you later!' },
          ], notes: {
            'en la oficina': 'Lucía pregunta dónde está Mateo: **estar en** + lugar. No hay movimiento.',
            'Vengo de casa': '**Venir de** + lugar: el origen, el lugar donde empieza el viaje. Con «casa» no hay artículo: de casa, a casa, en casa.',
            'en bici': '**En** + transporte: cómo viaja Mateo. Igual: en moto, en tren, en coche.',
            'de la señora Molina': 'Posesión: el paquete **de** la señora Molina (Mrs Molina’s package). Primero la cosa, después de + persona.',
            'a dónde': 'Pregunta por el destino: ¿**a** dónde va? La preposición va delante de «dónde». También se escribe «adónde».',
            'A la sucursal Norte': 'La respuesta: el destino con **a**. El paquete va hacia la sucursal Norte.',
            'en la avenida Colón': 'Dónde está la sucursal: **en** + lugar. Es una dirección, sin movimiento.',
            'con Carla': 'Compañía: Mateo no va solo, va **con** Carla.',
            'en la mesa': 'Dónde está el paquete: **en** la mesa (on the table). En español, «en» sirve para in, at y on.',
            'con el recibo': 'Una cosa que va junto con el paquete: **con** el recibo.',
            'sin el recibo': 'Lo contrario de con: **sin** el recibo, el recibo no está. Entonces no hay entrega.',
            'salimos de la sucursal': '**Salir de** + lugar: el punto de partida. Salir siempre mira hacia el origen: de.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Cómo viene Mateo a la oficina?', options: ['Con Carla.', 'En bici.', 'En moto.'], answer: 1, why: '«Vengo de casa en bici».', en: 'How does Mateo come to the office?' },
            { prompt: '¿A dónde va el paquete?', options: ['A casa de Lucía.', 'A la sucursal Centro.', 'A la sucursal Norte.'], answer: 2, why: '«A la sucursal Norte. Está en la avenida Colón».', en: 'Where is the package going?' },
            { prompt: '¿Qué es importante para la entrega?', options: ['El recibo.', 'La bici.', 'La mesa.'], answer: 0, why: '«Sin el recibo, no hay entrega».', en: 'What is important for the delivery?' },
          ] },
        ] },
        { title: '¿Qué relación? · Which relation?', blocks: [
          { kind: 'guide', text: { teacher: 'Tu alumno lee cada frase con la preposición y la clasifica. Tú preguntas cada vez: «¿Por qué?».', self: 'Lee cada frase de la historia y decide qué dice la preposición. (Read each sentence and decide what the preposition says.)' } },
          { kind: 'classify', title: 'La historia de Mateo · Mateo’s story', categories: [
            { id: 'a', label: 'A · destino', tone: 'blue' },
            { id: 'en', label: 'EN · lugar o transporte', tone: 'orange' },
            { id: 'de', label: 'DE · origen o posesión', tone: 'teal' },
            { id: 'consin', label: 'CON · SIN', tone: 'violet' },
          ], items: [
            { text: 'Mateo va … la sucursal Norte.', answer: 'a', why: 'Ir + destino: a la sucursal Norte.' },
            { text: 'El paquete está … la mesa.', answer: 'en', why: 'Estar + lugar: en la mesa.' },
            { text: 'Es el paquete … la señora Molina.', answer: 'de', why: 'Posesión: de la señora Molina.' },
            { text: 'Mateo va … Carla.', answer: 'consin', why: 'Compañía: con Carla.' },
            { text: 'Mateo viene … casa.', answer: 'de', why: 'Venir + origen: de casa.' },
            { text: 'No hay entrega … el recibo.', answer: 'consin', why: 'Ausencia: sin el recibo.' },
            { text: 'Mateo viene … bici.', answer: 'en', why: 'Transporte: en bici.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: «¿De dónde a dónde va Mateo?». Respuesta esperada: «De la sucursal Centro a la sucursal Norte». Así aparece el par de… a… en una sola frase.' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: '¿Destino, lugar, origen o compañía?',
      steps: [
        { title: 'Elige la preposición · Choose', blocks: [
          { kind: 'choice', items: [
            { context: 'Carla es nueva en la empresa. (Carla is new.)', prompt: 'Hoy Carla trabaja ___ la sucursal Centro.', options: ['en', 'a', 'de'], answer: 0, why: 'Trabajar + lugar, sin movimiento: en.', en: 'Today Carla works at the Centro branch.' },
            { context: 'Carla habla de su ciudad. (Carla talks about her city.)', prompt: 'Soy ___ Málaga, pero vivo en Córdoba.', options: ['de', 'en', 'a'], answer: 0, why: 'Ser de + ciudad: el origen.', en: 'I am from Málaga, but I live in Córdoba.' },
            { context: 'Mateo y Carla salen. (They leave.)', prompt: 'Van ___ la sucursal Norte en moto.', options: ['de', 'a', 'en'], answer: 1, why: 'Ir + destino: a. «En moto» ya es el transporte.', en: 'They are going to the Norte branch by motorbike.' },
            { context: 'Carla busca su casco: no está. (Her helmet is missing.)', prompt: 'No puedo ir en moto ___ casco.', options: ['con', 'de', 'sin'], answer: 2, why: 'El casco no está: sin.', en: 'I can’t ride a motorbike without a helmet.' },
            { context: 'Hay una mochila en la mesa. (There is a backpack on the table.)', prompt: '¿Es la mochila ___ Mateo? —Sí, es su mochila.', options: ['a', 'de', 'con'], answer: 1, why: 'De quién es una cosa: la mochila de Mateo.', en: 'Is it Mateo’s backpack? —Yes, it is his backpack.' },
          ] },
        ] },
        { title: '¿A o en? · Movement or place?', blocks: [
          { kind: 'classify', title: '¿Hay movimiento? · Is there movement?', categories: [
            { id: 'a', label: 'A · voy, llego (movimiento)', tone: 'blue' },
            { id: 'en', label: 'EN · estoy, vivo, trabajo (lugar)', tone: 'orange' },
          ], items: [
            { text: 'Mateo llega … Córdoba.', answer: 'a', why: 'Llegar es movimiento: llega a Córdoba.' },
            { text: 'Carla vive … Córdoba.', answer: 'en', why: 'Vivir + lugar, sin viaje: en Córdoba.' },
            { text: 'El recibo está … la mochila.', answer: 'en', why: 'Estar + lugar: en la mochila.' },
            { text: 'Por la noche, Lucía va … casa.', answer: 'a', why: 'Ir + destino: a casa.' },
            { text: 'La señora Molina trabaja … la sucursal Norte.', answer: 'en', why: 'Trabajar + lugar: en la sucursal Norte.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Mateo va en la sucursal Norte.', ok: false, options: ['Mateo está a la sucursal Norte.', 'Mateo va a la sucursal Norte.', 'Mateo va de la sucursal Norte.'], answer: 1, why: 'Ir = destino: a. «Está a» también está mal: estar va con en.' },
            { sentence: 'Carla está en la oficina con Lucía.', ok: true, why: 'Correcta: estar en + lugar, con + persona.' },
            { sentence: 'La moto es Carla.', ok: false, options: ['La moto es con Carla.', 'La moto es en Carla.', 'La moto es de Carla.'], answer: 2, why: 'De quién es: ser de + persona.' },
            { sentence: 'Salgo en la sucursal Centro ahora.', ok: false, options: ['Salgo con la sucursal Centro ahora.', 'Salgo de la sucursal Centro ahora.', 'Salgo a la sucursal Centro ahora.'], answer: 1, why: 'Salir mira hacia el origen: salir de.' },
            { sentence: 'Hoy Carla trabaja con no uniforme.', ok: false, options: ['Hoy Carla no trabaja en uniforme.', 'Hoy Carla trabaja sin uniforme.', 'Hoy Carla trabaja de uniforme no.'], answer: 1, why: '«Con no» no existe: sin = without.' },
          ] },
        ] },
        { title: 'En la sucursal Norte · At the Norte branch', blocks: [
          { kind: 'chat-fill', title: 'La entrega · The delivery', lines: [
            { who: 'Raquel', text: 'Buenos días. ¿___ dónde vienen ustedes?', options: ['En', 'De', 'A'], answer: 1, why: 'Raquel pregunta por el origen: ¿de dónde vienen?' },
            { who: 'Mateo', text: 'Venimos ___ la sucursal Centro.', options: ['de', 'a', 'en'], answer: 0, why: 'Venir de + lugar: el origen.' },
            { who: 'Carla', text: 'Tenemos un paquete ___ la señora Molina.', options: ['con', 'en', 'de'], answer: 2, why: 'De quién es el paquete: de la señora Molina.' },
            { who: 'Raquel', text: 'Muy bien. La señora Molina está ___ la sala dos.', options: ['en', 'a', 'de'], answer: 0, why: 'Estar + lugar: en la sala dos.' },
            { who: 'Raquel', text: '¿Tienen el recibo? No puedo firmar ___ el recibo.', options: ['en', 'sin', 'con'], answer: 1, why: 'Si el recibo no está, no hay firma: sin.' },
            { who: 'Mateo', text: 'Sí, aquí está, con el paquete. Gracias.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['sucursal', 'Vengo', 'la', 'de', 'Centro'], accept: ['Vengo de la sucursal Centro'], en: 'I am coming from the Centro branch.' },
            { tiles: ['con', 'Voy', 'casa', 'a', 'Carla'], accept: ['Voy a casa con Carla', 'Voy con Carla a casa'], en: 'I am going home with Carla.' },
            { tiles: ['está', 'El', 'de', 'casco', 'la', 'Mateo', 'en', 'moto'], accept: ['El casco de Mateo está en la moto'], en: 'Mateo’s helmet is on the motorbike.' },
          ] },
        ] },
        { title: 'Escríbelo en español · Write it in Spanish', blocks: [
          { kind: 'rewrite', title: 'En español · In Spanish', items: [
            { prompt: 'I am going to Córdoba.', instruction: 'Escribe la frase en español.', accept: ['Voy a Córdoba', 'Yo voy a Córdoba'] },
            { prompt: 'I am coming from home.', instruction: 'Escribe la frase en español. (home = casa)', accept: ['Vengo de casa', 'Yo vengo de casa'] },
            { prompt: 'Carla goes without a helmet.', instruction: 'Escribe la frase en español. (helmet = casco)', accept: ['Carla va sin casco', 'Carla va sin un casco', 'Carla va sin el casco'] },
            { prompt: 'It is Lucía’s package.', instruction: 'Escribe la frase en español. (package = paquete)', accept: ['Es el paquete de Lucía', 'Es un paquete de Lucía'] },
          ] },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Un mensaje de voz de Lucía', coach: 'Primero escucha sin leer. Listen first, read later.',
      steps: [
        { title: 'Un cambio de plan · A change of plan', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general (¿por qué llama Lucía?). Segunda escucha: tu alumno levanta la mano cada vez que oye a, de, en, con o sin. Después, las preguntas.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Cuenta las preposiciones que oyes. (Listen once for the gist, once for the details.)' } },
          { kind: 'listen', title: 'Mensaje de voz de Lucía', channel: 'MENSAJE DE VOZ · DE LUCÍA, LA COORDINADORA', src: '/audio/grammar-live/327.mp3',
            before: 'Mateo y Carla están en la moto. Lucía, la coordinadora, le deja un mensaje de voz a Mateo. ¿Qué crees que pasa? (Mateo and Carla are on the motorbike. Lucía leaves Mateo a voice message. What do you think has happened?)',
            gist: { prompt: '¿Por qué llama Lucía? · Why is Lucía calling?', options: ['El paquete tiene otro destino.', 'Mateo no tiene el paquete.', 'Carla está enferma.'], answer: 0, why: '«Hay un cambio importante. El paquete no va a la sucursal Norte: va a la sucursal Sur».', en: 'Why is Lucía calling?' },
            details: [
              { prompt: '¿A dónde va el paquete ahora? · Where does the package go now?', options: ['A la sucursal Norte.', 'A la oficina de Lucía.', 'A la sucursal Sur.'], answer: 2, why: '«No va a la sucursal Norte: va a la sucursal Sur».', en: 'Where does the package go now?' },
              { prompt: '¿Por qué? · Why?', options: ['Carla no tiene casco.', 'Hoy la sucursal Norte está cerrada.', 'La señora Molina está en casa.'], answer: 1, why: '«Hoy la sucursal Norte está cerrada».', en: 'Why?' },
              { prompt: '¿Dónde está la señora Molina hasta las dos? · Where is Mrs Molina until two?', options: ['En la sucursal Sur.', 'En la sucursal Norte.', 'En la avenida Colón.'], answer: 0, why: '«La señora Molina está en la sucursal Sur hasta las dos».', en: 'Where is Mrs Molina until two?' },
              { prompt: '¿Qué no puede hacer Mateo? · What can’t Mateo do?', options: ['Abrir la puerta.', 'Entregar el paquete sin el recibo.', 'Ir con Carla.'], answer: 1, why: '«No puedes entregar el paquete sin el recibo».', en: 'What can’t Mateo do?' },
              { prompt: '¿Dónde está el recibo? · Where is the receipt?', options: ['En la mochila de Mateo.', 'En la mesa de la oficina.', 'Con Carla.'], answer: 0, why: '«El recibo está en tu mochila».', en: 'Where is the receipt?' },
            ],
            transcript: 'Hola, Mateo. Soy Lucía, la coordinadora. Hay un cambio importante. El paquete [[de la señora Molina|teal]] no va [[a la sucursal Norte|blue]]: va [[a la sucursal Sur|blue]]. Hoy la sucursal Norte está cerrada. La señora Molina está [[en la sucursal Sur|orange]] hasta las dos. Tú vas [[con Carla|violet]], como antes. Ella tiene la llave [[de la puerta|teal]]. Y una cosa más: no puedes entregar el paquete [[sin el recibo|violet]]. El recibo está [[en tu mochila|orange]]. Gracias, Mateo. Hasta luego.',
            reply: { teacher: 'Tú eres Lucía. Tu alumno es Mateo y te responde con un mensaje de voz: dónde está ahora, a dónde va y con quién, y si tiene el recibo.', self: 'Responde a Lucía en voz alta: «Hola, Lucía. Estoy en… Voy a… con… Tengo el recibo en…». (Answer Lucía aloud: where you are, where you are going, with whom, and where the receipt is.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Tus trayectos', coach: 'Habla de ti. Talk about yourself.',
      steps: [
        { title: 'De dónde, a dónde, con quién · From where, to where, with whom', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces la pregunta de la tarjeta y tu alumno responde con frases completas. Tú repites su frase con la preposición correcta y haces una repregunta.', self: 'Lee la pregunta, responde en voz alta con frases completas y, si quieres, escribe tu respuesta. (Read the question and answer aloud in full sentences.)' } },
          { kind: 'talk', cards: [
            { q: '¿De dónde eres? ¿Dónde vives ahora? · Where are you from? Where do you live now?', followUps: ['¿Y tu familia, dónde vive? (And your family?)', '¿Vives en el centro o lejos? (In the centre or far away?)'], phrases: ['Soy [[de|teal]] …', 'Vivo [[en|orange]] …', 'Mi familia vive [[en|orange]] …'], hint: 'Origen: soy de. Lugar: vivo en.', example: 'Soy de Toronto, pero vivo en Madrid. Mi familia vive en Canadá.', next: 'Ahora, tus viajes de cada día.', teacher: 'Responde tú también con información real: «Yo soy de… y vivo en…».' },
            { q: '¿Cómo vas a clase o a tu trabajo? · How do you get to class or to work?', followUps: ['¿En bici, en metro, en coche? (By bike, metro, car?)', '¿Sales de casa temprano? (Do you leave home early?)'], phrases: ['Voy [[a|blue]] la oficina [[en|orange]] metro.', 'Salgo [[de|teal]] casa a las ocho.', 'Llego [[a|blue]] clase …'], hint: 'Destino con a, transporte con en, origen con de.', example: 'Salgo de casa a las ocho. Voy a la oficina en metro y llego a las nueve.', next: 'Ahora, con quién.' },
            { q: '¿Con quién vas normalmente? ¿Vas solo o sola? · Who do you usually go with? Alone?', followUps: ['¿Con quién vas a la playa o a una fiesta? (To the beach or a party?)', '¿Prefieres viajar solo o con amigos? (Alone or with friends?)'], phrases: ['Voy [[con|violet]] mi compañera …', 'Voy solo / sola.', 'Prefiero ir [[con|violet]] …'], hint: 'Compañía: con + persona. Si no hay nadie: solo / sola.', example: 'Normalmente voy sola en bici. Los sábados voy a la playa con mis amigos.', next: 'Ahora, qué llevas siempre.' },
            { q: '¿Qué llevas siempre? ¿Sales de casa sin móvil? · What do you always carry? Do you leave home without your phone?', followUps: ['¿Y sin llaves? ¿Y sin dinero? (Without keys? Without money?)', '¿Qué hay en tu mochila? (What is in your backpack?)'], phrases: ['No salgo [[sin|violet]] …', 'Siempre voy [[con|violet]] …', 'En mi mochila hay …'], hint: 'Con = lo tienes. Sin = no lo tienes. Después de sin, muchas veces no hay artículo.', example: 'No salgo sin móvil y sin llaves. Siempre voy con una botella de agua. En mi mochila hay un libro.', next: 'Ahora, las cosas de la clase.' },
            { q: '¿De quién es? Mira tres cosas a tu alrededor. · Whose is it? Look at three things around you.', followUps: ['¿Y el libro? ¿Y el bolígrafo? (And the book? And the pen?)', '¿Dónde está tu mochila? (Where is your backpack?)'], phrases: ['Es el libro [[de|teal]] …', 'Es la mesa [[de|teal]] mi profesora.', 'Mi mochila está [[en|orange]] …'], hint: 'Posesión: la cosa + de + persona. Lugar: está en.', example: 'Es el libro de Ana. Es la mesa de mi profesora. Mi mochila está en la silla.', next: 'Para terminar, eres Mateo.' },
            { q: 'Eres Mateo: llamas a Lucía desde la calle. · You are Mateo: you call Lucía from the street.', followUps: ['¿Dónde estás ahora? (Where are you now?)', '¿Tienes el recibo? (Do you have the receipt?)', '¿A qué hora llegas? (What time do you arrive?)'], phrases: ['Estoy [[en|orange]] la avenida …', 'Voy [[a|blue]] la sucursal Sur [[con|violet]] Carla.', 'Tengo el recibo [[en|orange]] la mochila.'], hint: 'Cuatro datos: dónde estás (en), a dónde vas (a), con quién (con), y el recibo.', example: 'Hola, Lucía. Soy Mateo. Estoy en la avenida Colón, en la moto. Voy a la sucursal Sur con Carla. Tengo el recibo en la mochila. Llego a las doce.', teacher: 'Responde como Lucía y añade un problema: «¡La puerta está cerrada!». Tu alumno reacciona: «Carla tiene la llave de la puerta».' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno hace las preguntas («¿De dónde eres?», «¿Con quién vas?», «¿De quién es…?») y tú respondes.', self: 'Ahora haz tú las preguntas en voz alta («¿De dónde vienes?», «¿A dónde vas?», «¿Con quién vas?») y respóndelas como Carla. (Now ask the questions aloud and answer as Carla.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Un mensaje para la clienta', coach: 'Claro y corto. Clear and short.',
      steps: [
        { title: 'Mensaje para la señora Molina · A message to Mrs Molina', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos cada preposición: ¿destino, lugar, origen, compañía o ausencia? Después, tu alumno lee su mensaje en voz alta.', self: 'Escribe tu mensaje y toca «Revisar mi texto». Mira bien cada preposición. (Write your message and tap “Revisar mi texto”.)' } },
          { kind: 'write', title: 'Mensaje para la señora Molina · A message to Mrs Molina', situation: 'Eres Mateo. Escribe un mensaje de texto a la señora Molina, la clienta: está en la sucursal Sur y espera su paquete. (You are Mateo. Write a text message to Mrs Molina, the client: she is at the Sur branch, waiting for her package.)', task: [
            'Saluda y di quién eres. (Say hello and who you are.)',
            'Di dónde estás ahora y de dónde sales. (Where you are now and where you are leaving from: en, de.)',
            'Di a dónde vas y con quién. (Where you are going and who with: a, con.)',
            'Di qué llevas con «con» y usa «sin» una vez: sin problemas, sin retraso. (What you carry, and one “sin”.)',
          ], starters: ['Hola, señora Molina. Soy Mateo, el mensajero.', 'Ahora estoy en …', 'Salgo de …', 'Voy a la sucursal Sur con …', 'Tengo su paquete con …', 'Llego a …'],
            words: ['a', 'de', 'en', 'con', 'sin', 'la sucursal Sur', 'la oficina', 'el paquete', 'el recibo', 'en moto', 'mi compañera', 'problemas'],
            model: 'Hola, señora Molina. Soy Mateo, el mensajero. Ahora [[estoy en|orange]] la sucursal Centro. [[Salgo de|teal]] la oficina en cinco minutos con su paquete. [[Voy a|blue]] la sucursal Sur en moto, [[con|violet]] mi compañera Carla. Tengo el recibo [[en|orange]] la mochila. Todo bien, [[sin|violet]] problemas. ¿Usted está en la sucursal Sur hasta las dos? Gracias.',
            minWords: 30,
            checks: [
              { label: 'Un lugar con «en» (where you are)', pattern: '(?<!\\p{L})en(?!\\p{L})', tip: 'Di dónde estás: «Estoy en la sucursal Centro».' },
              { label: 'Un origen con «de» (where you leave from)', pattern: '(?<!\\p{L})(?:salgo|vengo|salimos|venimos)\\s+de(?!\\p{L})', tip: 'Di de dónde sales: «Salgo de la oficina».' },
              { label: 'Un destino con «a» (where you are going)', pattern: '(?<!\\p{L})(?:voy|vamos|llego|llegamos)\\s+a(?!\\p{L})', tip: 'Di a dónde vas: «Voy a la sucursal Sur».' },
              { label: 'Compañía con «con» (who with)', pattern: '(?<!\\p{L})con(?!\\p{L})', tip: 'Di con quién vas: «con mi compañera Carla».' },
              { label: 'Algo que no hay con «sin» (without)', pattern: '(?<!\\p{L})sin(?!\\p{L})', tip: 'Usa «sin» una vez: «sin problemas», «sin retraso».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})(?:voy|vas|va|vamos|van|llego|llegas|llega|llegamos|llegan)\\s+en\\s+(?:la\\s+(?:sucursal|oficina)|casa(?!\\p{L})|c[oó]rdoba)', why: 'Ir y llegar marcan un destino: «voy a la sucursal», «llego a casa». «En» es para dónde estás o para el transporte.' },
              { pattern: '(?<!\\p{L})(?:estoy|est[aá]s|est[aá]|estamos|est[aá]n)\\s+a\\s+(?:la\\s+(?:sucursal|oficina)|casa(?!\\p{L}))', why: 'Estar no es movimiento: «estoy en la sucursal», «estoy en casa».' },
              { pattern: '(?<!\\p{L})(?:salgo|sale|salimos|vengo|viene|venimos)\\s+en\\s+(?:la\\s+(?:sucursal|oficina)|casa(?!\\p{L}))', why: 'Salir y venir miran hacia el origen: «salgo de la oficina», «vengo de casa».' },
              { pattern: '(?<!\\p{L})(?:a|de)\\s+el(?!\\p{L})', why: '«A el» y «de el» no se escriben: se unen en «al» y «del» (la próxima clase). Hoy puedes usar «la sucursal», «la oficina»…' },
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
            { tone: 'blue', label: 'A', formula: 'ir · llegar · venir + a + lugar', example: 'Voy a la sucursal Norte.', caption: 'destino: a dónde', en: 'to (destination)' },
            { tone: 'orange', label: 'EN', formula: 'estar · vivir · trabajar + en + lugar', example: 'Estoy en Córdoba.', caption: 'lugar: dónde (y transporte)', en: 'in / at / on (place)' },
            { tone: 'teal', label: 'DE', formula: 'venir · salir · ser + de · cosa + de + persona', example: 'Vengo de casa. El paquete de Lucía.', caption: 'origen y posesión', en: 'from · of / ’s' },
            { tone: 'violet', label: 'CON · SIN', formula: 'con / sin + persona o cosa', example: 'Voy con Carla. No voy sin casco.', caption: 'compañía o ausencia', en: 'with · without' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Mira el verbo primero. **Ir** y **llegar** buscan un destino: **a**. **Estar** dice un lugar: **en**. **Venir** y **salir** miran hacia el origen: **de**. Y para la posesión, nunca «’s»: el paquete **de** Lucía.', en: 'Look at the verb first. Ir and llegar look for a destination: a. Estar says a place: en. Venir and salir look back to the origin: de. And for possession, never “’s”: el paquete de Lucía.' },
        ] },
        { title: 'Desafío final · Final challenge', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'El sábado, Mateo va ___ Sevilla en tren.', options: ['de', 'a', 'en'], answer: 1, why: 'Ir + destino: a Sevilla. «En tren» es el transporte.', en: 'On Saturday, Mateo goes to Seville by train.' },
            { prompt: 'Sus padres viven ___ Sevilla.', options: ['a', 'con', 'en'], answer: 2, why: 'Vivir + lugar: en.', en: 'His parents live in Seville.' },
            { prompt: 'Mateo es ___ Córdoba, pero sus padres son de Sevilla.', options: ['de', 'en', 'a'], answer: 0, why: 'Ser de + ciudad: el origen.', en: 'Mateo is from Córdoba, but his parents are from Seville.' },
            { prompt: 'Va ___ Carla: ella también tiene familia en Sevilla.', options: ['de', 'con', 'sin'], answer: 1, why: 'Compañía: con Carla.', en: 'He goes with Carla: she also has family in Seville.' },
            { prompt: 'No puede viajar ___ su billete: lo necesita para el tren.', options: ['en', 'sin', 'con'], answer: 1, why: 'Necesita el billete: sin billete, no hay viaje.', en: 'He can’t travel without his ticket: he needs it for the train.' },
          ] },
        ] },
        { title: 'Tu viaje · Your trip', mascot: '/autoestudio/mascot/noting.webp', coach: 'Una situación nueva. A new situation.', blocks: [
          { kind: 'guide', text: { teacher: 'Situación nueva: un viaje de fin de semana. Tu alumno escribe cada frase y la lee en voz alta.', self: 'Situación nueva: un viaje de fin de semana. Escribe cada frase con la preposición correcta. (A weekend trip: write each sentence.)' } },
          { kind: 'rewrite', title: 'Un fin de semana · A weekend', items: [
            { prompt: 'yo / ir / Madrid / mi hermana', instruction: 'Escribe una frase con «voy» y dos preposiciones.', accept: ['Voy a Madrid con mi hermana', 'Voy con mi hermana a Madrid', 'Yo voy a Madrid con mi hermana', 'Yo voy con mi hermana a Madrid'] },
            { prompt: 'mi hermana / vivir / Madrid', instruction: 'Escribe una frase con «vive».', accept: ['Mi hermana vive en Madrid'] },
            { prompt: 'nosotros / salir / Granada / maleta (we have no suitcase)', instruction: 'Escribe una frase con «salimos» y dos preposiciones.', accept: ['Salimos de Granada sin maleta', 'Nosotros salimos de Granada sin maleta', 'Salimos sin maleta de Granada'] },
          ] },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 028 · Contracciones al y del', text: 'Hoy siempre dijiste «a **la** sucursal» y «de **la** oficina». Pero ¿qué pasa con un nombre masculino, como «el hotel» o «el centro»? **A + el** se une en **al**, y **de + el** se une en **del**: «Voy **al** centro», «Vengo **del** mercado». Es el paso natural después de hoy.', en: 'Today you always said “a la sucursal” and “de la oficina”. But what happens with a masculine noun, like “el hotel” or “el centro”? A + el joins into “al”, and de + el joins into “del”: “Voy al centro”, “Vengo del mercado”. It is the natural next step after today.', href: '/gramatica/contracciones-al-y-del', label: 'Ir a la clase 028' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿De dónde vienes hoy, dónde estás y a dónde vas después?». Respuesta esperada: tres frases con de, en y a. Tarea: escribir el trayecto de un día real, con «con» y «sin» una vez cada una.' },
        ] },
      ],
    },
  ],
};
