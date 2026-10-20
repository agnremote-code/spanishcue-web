import type { LiveLesson } from '../types';

/**
 * Lesson 358 · A2 · Imperativo afirmativo: tú, vos, usted (course unit G058).
 * One scene runs through the class: a Saturday cooking workshop at a
 * neighbourhood cultural centre. Rosa Medina, the cooking teacher, gives
 * instructions to Pablo, her young assistant (tú), and to don Ernesto, a
 * 72-year-old student (usted). Valeria, a student from Córdoba (Argentina),
 * uses vos. They make a vegetable soup. In the voice message Rosa (Mexican
 * voice, usted) gives don Ernesto the recipe and a reminder for next Saturday.
 * Content: affirmative imperative only. Tú = present of tú minus -s (corta,
 * come, abre; cierra, prueba, pide) plus eight irregulars (di, haz, ve, pon,
 * sal, sé, ten, ven). Vos = present of vos minus -s, stress on the end, no
 * stem change (cortá, comé, abrí, cerrá, probá; vení, decí, hacé; ir → andá),
 * taught as a legitimate variety; the learner's default is tú. Usted = yo
 * form minus -o plus the "other" vowel (corte, coma, haga, ponga, venga) with
 * vaya and sea. Ustedes (+n) and vosotros only in the Ampliación. Anchor: Ven
 * aquí; vení aquí; venga aquí. Mistakes: *Pablo, viene aquí; *Señora, pasa;
 * *vienga; *Haces la ensalada; *cierrá. The negative imperative and pronoun
 * position (dímelo, siéntese) are classes 059 and 065: not demanded here.
 */
export const lesson: LiveLesson = {
  id: 358,
  level: 'A2',
  title: 'Imperativo afirmativo: tú, vos, usted',
  subtitle: 'Dar instrucciones y pedir cosas con tú y con usted («ven», «venga»), y entender el imperativo de vos («vení»).',
  legend: [
    { tone: 'blue', label: 'TÚ · ven, haz, corta (con amigos, familia, compañeros)' },
    { tone: 'teal', label: 'VOS · vení, hacé, cortá (Argentina, Uruguay, Paraguay, Centroamérica…)' },
    { tone: 'orange', label: 'USTED · venga, haga, corte (respeto, distancia, clientes)' },
  ],
  optionNotes: {
    'Viene': '«Viene» es presente: él, ella o usted viene. Para una instrucción con tú: **ven**; con usted: **venga**.',
    'Vienga': 'No existe. Usted sale de «yo **veng**o»: **venga**.',
    'Haces': '«Haces» es presente: describe. El imperativo de hacer con tú es irregular: **haz**.',
    'Pones': '«Pones» es presente: describe. El imperativo de poner con tú es irregular: **pon**.',
    'cierrá': 'Con vos no hay cambio de vocal: cerrás → **cerrá** (como en el presente de vos).',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Ven, vení, venga', coach: 'Una instrucción, tres formas. One instruction, three forms.',
      steps: [
        { title: 'El taller de cocina · The cooking workshop', blocks: [
          { kind: 'lead', text: 'Es sábado por la mañana en el centro cultural del barrio. Rosa Medina da un **taller de cocina**: hoy preparan una sopa de verduras. Rosa habla de **tú** con Pablo, su ayudante, y de **usted** con don Ernesto, un alumno de setenta y dos años. Valeria, una alumna de Córdoba (Argentina), usa **vos**. Para dar instrucciones, todos usan el **imperativo**.', en: 'It is Saturday morning at the neighbourhood cultural centre. Rosa Medina runs a cooking workshop: today they are making a vegetable soup. Rosa uses tú with Pablo, her assistant, and usted with don Ernesto, a 72-year-old student. Valeria, a student from Córdoba (Argentina), uses vos. To give instructions, they all use the imperative.' },
          { kind: 'guide', text: { teacher: 'Tú lees la frase de Rosa a Pablo y tu alumno lee la frase a don Ernesto. Después tu alumno dice qué cambia y por qué.', self: 'Lee las tres frases en voz alta. ¿Qué cambia? ¿Por qué? (What changes? Why?)' } },
          { kind: 'compare', title: 'La misma instrucción · The same instruction', columns: [
            { tone: 'blue', label: 'TÚ · Rosa a Pablo', sentence: 'Pablo, [[ven|blue]] aquí, por favor.', idea: 'Con un compañero, un amigo, la familia. Es la forma que tú usas.', en: 'Pablo, come here, please.' },
            { tone: 'teal', label: 'VOS · Valeria a Pablo', sentence: 'Pablo, [[vení|teal]] aquí, por favor.', idea: 'La misma confianza que tú, en Argentina y otras zonas. Acento al final.', en: 'Pablo, come here, please. (Argentina)' },
            { tone: 'orange', label: 'USTED · Rosa a don Ernesto', sentence: 'Don Ernesto, [[venga|orange]] aquí, por favor.', idea: 'Con respeto o distancia: una persona mayor, un cliente.', en: 'Don Ernesto, come here, please.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Rosa habla con don Ernesto: «Don Ernesto, ___ a esta mesa».', options: ['viene', 'venga', 'ven'], answer: 1, why: 'Con don Ernesto, Rosa usa usted: venga.', en: 'Don Ernesto, come to this table.' },
            { prompt: 'Rosa habla con Pablo: «Pablo, ___ las verduras».', options: ['lavas', 'lave', 'lava'], answer: 2, why: 'Con Pablo, Rosa usa tú. Instrucción con tú: lava. «Lavas» es presente.', en: 'Pablo, wash the vegetables.' },
            { prompt: '«Vení» es…', options: ['la forma de vos: una variedad correcta', 'un error de Valeria', 'un verbo en pasado'], answer: 0, why: 'Es el imperativo de vos, normal en Argentina, Uruguay, Paraguay y otras zonas.', en: '“Vení” is…' },
          ] },
        ] },
        { title: 'Tú y vos: presente − s · Tú and vos: present minus -s', mascot: '/brand/mascot/studying.webp', coach: 'Quita la -s. Drop the -s.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'TÚ · REGULAR', question: '¿Qué hago?', en: 'Tú commands: take the tú present and drop the -s.', formula: ['presente de tú − s', 'cortas → corta · comes → come · abres → abre'],
            meaning: 'Para dar una instrucción con **tú**, toma el presente de tú y quita la **-s**. Si el verbo cambia la vocal en presente (cierras, pruebas, pides), el imperativo también: **cierra**, **prueba**, **pide**.',
            examples: [
              { es: '[[Corta|blue]] el pan en rebanadas.', en: 'Cut the bread into slices.' },
              { es: '[[Abre|blue]] la ventana, por favor.', en: 'Open the window, please.' },
              { es: '[[Prueba|blue]] el caldo antes de servir.', en: 'Taste the broth before serving.' },
            ] },
          { kind: 'concept', tone: 'teal', label: 'VOS · REGULAR', question: '¿Y con vos?', en: 'Vos commands: take the vos present and drop the -s. The stress stays at the end.', formula: ['presente de vos − s', 'cortás → cortá · comés → comé · abrís → abrí'],
            meaning: 'Con **vos** es la misma idea: el presente de vos sin la **-s**. El acento va al final y lleva tilde. No hay cambio de vocal, como en el presente de vos (clase 021): cerrás → **cerrá**, probás → **probá**.',
            examples: [
              { es: '[[Cortá|teal]] el pan en rebanadas.', en: 'Cut the bread into slices. (vos)' },
              { es: '[[Probá|teal]] el caldo antes de servir.', en: 'Taste the broth before serving. (vos)' },
            ],
            note: 'Tú no necesitas producir vos: es para **entender** a personas de esas zonas. Si vives allí, ¡úsalo!' },
          { kind: 'table', title: 'Regulares y con cambio de vocal · Regular and stem-changing', head: ['Infinitivo', 'Presente tú → TÚ', 'Presente vos → VOS'], rows: [
            ['cortar (to cut)', 'cortas → **corta**', 'cortás → **cortá**'],
            ['comer (to eat)', 'comes → **come**', 'comés → **comé**'],
            ['abrir (to open)', 'abres → **abre**', 'abrís → **abrí**'],
            ['cerrar (to close)', 'cierras → **cierra**', 'cerrás → **cerrá**'],
            ['probar (to taste, try)', 'pruebas → **prueba**', 'probás → **probá**'],
            ['pedir (to ask for)', 'pides → **pide**', 'pedís → **pedí**'],
          ], note: '«Corta» se parece a «él corta»: es normal. El contexto (Pablo, por favor…) dice que es una instrucción.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Encender (enciendes) → con tú: «___ el fuego».', options: ['Encende', 'Enciendes', 'Enciende'], answer: 2, why: 'Enciendes − s = enciende. El cambio e → ie se queda.', en: 'Turn on the heat.' },
            { prompt: 'Valeria, con vos: «___ la puerta, por favor».', options: ['cierrá', 'Cierras', 'Cerrá'], answer: 2, why: 'Vos: cerrás − s = cerrá. Sin cambio de vocal y con tilde.', en: 'Close the door, please. (vos)' },
          ] },
        ] },
        { title: 'Ocho formas cortas · Eight short forms', mascot: '/brand/mascot/speaking.webp', coach: 'Cortas y muy frecuentes. Short and very common.', blocks: [
          { kind: 'lead', text: 'Ocho verbos muy frecuentes tienen un imperativo de tú **irregular** y corto. Con vos, en cambio, casi todos son regulares: el infinitivo sin la -r y con tilde (vení, poné).', en: 'Eight very common verbs have an irregular, short tú command. With vos, almost all of them are regular: the infinitive without the -r, with an accent (vení, poné).' },
          { kind: 'table', title: 'Imperativo irregular · Irregular commands', head: ['Infinitivo', 'TÚ', 'VOS', 'Ejemplo (tú)'], rows: [
            ['decir (to say, tell)', '**di**', 'decí', '[[Di|blue]] tu nombre en voz alta.'],
            ['hacer (to do, make)', '**haz**', 'hacé', '[[Haz|blue]] una lista de ingredientes.'],
            ['ir (to go)', '**ve**', 'andá *', '[[Ve|blue]] a la tienda de la esquina.'],
            ['poner (to put)', '**pon**', 'poné', '[[Pon|blue]] la olla en el fuego.'],
            ['salir (to go out)', '**sal**', 'salí', '[[Sal|blue]] un momento, por favor.'],
            ['ser (to be)', '**sé**', 'sé', '[[Sé|blue]] paciente con el arroz.'],
            ['tener (to have, hold)', '**ten**', 'tené', '[[Ten|blue]] cuidado con el cuchillo.'],
            ['venir (to come)', '**ven**', 'vení', '[[Ven|blue]] a la cocina.'],
          ], note: '* Con vos, para «ir» casi siempre se usa **andá** (de andar). **Sé** (ser) lleva tilde: «se» sin tilde es otra palabra.' },
          { kind: 'tip', icon: '💡', title: 'Sal y sal · Two meanings', text: '«**Sal** un momento» es salir (go out). «Pon **sal** en la sopa» es el nombre (salt). El contexto decide.', en: '“Sal un momento” is the verb salir (go out). “Pon sal en la sopa” is the noun (salt). Context decides.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Rosa a Pablo: «___ el agua en la olla grande».', options: ['Pones', 'Pone', 'Pon'], answer: 2, why: 'Poner es irregular con tú: pon. «Pones» y «pone» son presente.', en: 'Put the water in the big pot.' },
            { prompt: 'Rosa a Pablo: «___ la verdad: ¿te gusta la sopa?».', options: ['Di', 'Dices', 'Dice'], answer: 0, why: 'Decir es irregular con tú: di.', en: 'Tell the truth: do you like the soup?' },
            { prompt: 'Valeria, con vos: «Pablo, ___ una foto de la sopa».', options: ['sacá', 'sacás', 'saca'], answer: 0, why: 'Vos: sacás − s = sacá. Con tú sería «saca».', en: 'Pablo, take a picture of the soup. (vos)' },
          ] },
        ] },
        { title: 'Usted: la vocal contraria · Usted: the other vowel', mascot: '/autoestudio/mascot/noting.webp', coach: 'Empieza en «yo». Start from “yo”.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'USTED', question: '¿Qué hago? (con respeto)', en: 'Usted commands: take the yo present, drop the -o and add the “other” vowel: -ar verbs take -e, -er/-ir verbs take -a.', formula: ['yo (presente) − o + vocal contraria', '-ar → -e · -er / -ir → -a'],
            meaning: 'Para **usted**, empieza en la forma de **yo** del presente. Quita la -o y pon la vocal «contraria»: los verbos en -ar toman **-e** y los verbos en -er / -ir toman **-a**. Así, las irregularidades de yo pasan a usted: hago → **haga**, vengo → **venga**.',
            examples: [
              { es: 'Señora, [[corte|orange]] el pan, por favor.', en: 'Madam, cut the bread, please. (corto → corte)' },
              { es: '[[Haga|orange]] la ensalada en esta mesa.', en: 'Make the salad at this table. (hago → haga)' },
              { es: '[[Vaya|orange]] a la cocina y [[pida|orange]] un plato.', en: 'Go to the kitchen and ask for a plate. (ir → vaya · pido → pida)' },
            ] },
          { kind: 'table', title: 'De yo a usted · From yo to usted', head: ['Infinitivo', 'yo', 'USTED'], rows: [
            ['cortar · comer · abrir', 'corto · como · abro', '**corte** · **coma** · **abra**'],
            ['cerrar · probar · pedir', 'cierro · pruebo · pido', '**cierre** · **pruebe** · **pida**'],
            ['hacer · poner · salir', 'hago · pongo · salgo', '**haga** · **ponga** · **salga**'],
            ['tener · venir · decir', 'tengo · vengo · digo', '**tenga** · **venga** · **diga**'],
            ['traer · oír', 'traigo · oigo', '**traiga** · **oiga**'],
            ['ir · ser (excepciones)', 'voy · soy', '**vaya** · **sea**'],
          ], note: 'Cambios de letra para mantener el sonido: sacar → sa**que**, llegar → lle**gue**, empezar → empie**ce**.' },
          { kind: 'tip', icon: '🔑', title: 'Recuerda esta vocal · Remember this vowel', text: 'Esta vocal contraria (corte, coma) es muy importante: en la clase 059 vuelve para el negativo de tú: «no cortes», «no comas».', en: 'This “other” vowel (corte, coma) is very important: in class 059 it comes back for negative tú commands: “no cortes”, “no comas”.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Poner (yo pongo) → usted: «___ la mesa, por favor».', options: ['Pone', 'Ponga', 'Pona'], answer: 1, why: 'Pong-o → ponga. La g de «yo» se queda.', en: 'Set the table, please.' },
            { prompt: 'Comer (yo como) → usted: «___ un poco más, don Ernesto».', options: ['Comas', 'Coma', 'Come'], answer: 1, why: '-er → -a: coma. «Come» es tú; «comas» es para el negativo de tú (clase 059).', en: 'Eat a little more, don Ernesto.' },
            { prompt: 'Ir → usted: «___ a la sala dos, por favor».', options: ['Ve', 'Vaya', 'Va'], answer: 1, why: 'Ir es una excepción: vaya. «Va» es presente; «ve» es tú.', en: 'Go to room two, please.' },
          ] },
        ] },
        { title: '¿Tú, vos o usted? · Which one?', mascot: '/brand/mascot/seated.webp', coach: '¿Con quién hablas? Who are you talking to?', blocks: [
          { kind: 'decide', title: 'Vas a dar una instrucción. Responde · You are going to give an instruction', steps: [
            { q: '¿Hablas con alguien con respeto o distancia? (una persona mayor que no conoces bien, un cliente, un médico)', yes: 'Usa **usted**: «Venga», «Haga», «Corte».', no: 'next' },
            { q: '¿Vives en una zona de vos, o la otra persona y tú usan vos?', yes: 'Puedes usar **vos**: «Vení», «Hacé», «Cortá».', no: 'next' },
            { q: '¿Hablas con un amigo, un compañero, la familia?', yes: 'Usa **tú**: «Ven», «Haz», «Corta».', no: 'Si dudas, empieza con usted: la otra persona te dice si prefiere tú.' },
          ] },
          { kind: 'tip', icon: '🌎', title: 'Variedades · Varieties', text: 'El **voseo** es normal en Argentina, Uruguay y Paraguay, y en muchas zonas de Centroamérica. En algunas zonas, por ejemplo en partes de Colombia y en Costa Rica, mucha gente usa **usted** también con amigos y familia. Las tres formas son correctas.', en: 'Voseo is normal in Argentina, Uruguay and Paraguay, and in many parts of Central America. In some areas, for example parts of Colombia and Costa Rica, many people use usted with friends and family too. All three forms are correct.' },
          { kind: 'table', title: 'Otras variedades: vos, ustedes, vosotros · Other varieties', head: ['Infinitivo', 'VOS (Río de la Plata, Centroamérica…)', 'USTEDES (América: todos · España: respeto)', 'VOSOTROS (España, con confianza)'], rows: [
            ['hablar', 'hablá', 'hablen', 'hablad'],
            ['comer', 'comé', 'coman', 'comed'],
            ['venir', 'vení', 'vengan', 'venid'],
            ['hacer', 'hacé', 'hagan', 'haced'],
            ['ir', 'andá', 'vayan', 'id'],
          ], note: 'Ustedes = usted + **-n**. Vosotros = infinitivo con **-d** en lugar de -r. En la conversación de España se oye mucho el infinitivo («¡Venir aquí!»), pero la norma es **venid**: escribe siempre la forma con -d. Tu forma por defecto es **tú**; estas columnas son para reconocer.' },
          { kind: 'tip', icon: '💬', title: 'Imperativo y cortesía · Commands and politeness', text: 'En español, el imperativo es muy normal para pedir cosas, sobre todo con **por favor** y un tono amable: «Pase, por favor». No es maleducado.', en: 'In Spanish, the imperative is very normal for asking for things, especially with “por favor” and a friendly tone: “Pase, por favor”. It is not rude.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'En una tienda, a un cliente que no conoces: «___ por aquí, por favor».', options: ['Pasa', 'Pasas', 'Pase'], answer: 2, why: 'Con un cliente: usted. Pasar (paso) → pase.', en: 'Come this way, please.' },
            { prompt: 'A tu hermano: «___ a cenar, la sopa está lista».', options: ['Venga', 'Vienes', 'Ven'], answer: 2, why: 'Con la familia: tú. Venir → ven.', en: 'Come and eat, the soup is ready.' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: '¿Presente o instrucción? Present or command?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la frase con el error y tu alumno dice qué falla antes de ver la corrección.', self: 'Lee cada frase, busca el error y después toca para ver la corrección. (Find the mistake, then tap.)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Pablo, viene aquí, por favor.', right: 'Pablo, ven aquí, por favor.', why: '«Viene» es presente (él, usted). Con tú, venir es irregular: ven. (Come here: ven.)' },
            { wrong: 'Don Ernesto, pasa por aquí.', right: 'Don Ernesto, pase por aquí.', why: 'Con usted, -ar toma -e: paso → pase. «Pasa» es la forma de tú. (Usted: pase.)' },
            { wrong: 'Señora, vienga el sábado.', right: 'Señora, venga el sábado.', why: 'Usted sale de «yo vengo»: venga. «Vienga» no existe. (From vengo: venga.)' },
            { wrong: 'Haces la ensalada, por favor.', right: 'Haz la ensalada, por favor.', why: '«Haces» es presente: describe. La instrucción con tú es irregular: haz. (Make: haz.)' },
            { wrong: 'Valeria: «Pablo, cierrá la puerta».', right: 'Valeria: «Pablo, cerrá la puerta».', why: 'Con vos no hay cambio de vocal: cerrás → cerrá. (Vos keeps the infinitive vowel.)' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Rosa a Pablo: «___ cuidado, la olla está caliente».', options: ['Ten', 'Tienes', 'Tenga'], answer: 0, why: 'Con Pablo, tú. Tener es irregular: ten.', en: 'Be careful, the pot is hot.' },
            { prompt: 'Rosa a una señora nueva: «___ su nombre en esta lista».', options: ['Escriba', 'Escribe', 'Escribes'], answer: 0, why: 'Con usted, -ir toma -a: escribo → escriba. Fíjate también en «su».', en: 'Write your name on this list.' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno da dos instrucciones para preparar un café en su casa, una a un amigo (tú) y otra a una vecina mayor (usted): «Pon el agua», «Ponga el agua».' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'La sopa de verduras', coach: 'Toca las palabras marcadas. Tap the marked words.',
      steps: [
        { title: 'En la cocina del taller · In the workshop kitchen', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Rosa y Valeria; tu alumno es Pablo y don Ernesto. Después tu alumno toca cada forma marcada y dice si es tú, vos o usted.', self: 'Lee el diálogo en voz alta. Después toca cada palabra marcada y di: ¿tú, vos o usted? (Tú, vos or usted?)' } },
          { kind: 'explore', title: '¡Manos a la obra!', setting: 'El sábado, en la cocina del centro cultural. Rosa da la clase. Habla de tú con Pablo y de usted con don Ernesto. Valeria, de Córdoba, habla de vos con Pablo. (Saturday, in the kitchen of the cultural centre.)', lines: [
            { who: 'Rosa', text: 'Buenos días. Hoy hacemos una sopa de verduras. Pablo, [[ven|blue]] aquí y [[trae|blue]] las zanahorias, por favor.', en: 'Good morning. Today we are making a vegetable soup. Pablo, come here and bring the carrots, please.' },
            { who: 'Pablo', text: 'Aquí están. ¿Qué hago ahora?', en: 'Here they are. What do I do now?' },
            { who: 'Rosa', text: '[[Lava|blue]] las zanahorias y [[pon|blue]] agua en la olla grande.', en: 'Wash the carrots and put water in the big pot.' },
            { who: 'Don Ernesto', text: '[[Perdone|orange]], Rosa. ¿Y yo qué hago?', en: 'Excuse me, Rosa. And what do I do?' },
            { who: 'Rosa', text: 'Don Ernesto, [[venga|orange]] a esta mesa. [[Tenga|orange]], aquí tiene un cuchillo. [[Corte|orange]] la cebolla en trozos pequeños.', en: 'Don Ernesto, come to this table. Here you are, here’s a knife. Cut the onion into small pieces.' },
            { who: 'Valeria', text: 'Pablo, [[vení|teal]] un momento. [[Probá|teal]] el caldo. ¿Tiene bastante sal?', en: 'Pablo, come here a moment. Taste the broth. Does it have enough salt?' },
            { who: 'Pablo', text: 'Mmm… le falta un poco, ¿no?', en: 'Mmm… it needs a bit more, doesn’t it?' },
            { who: 'Valeria', text: 'Sí. [[Traé|teal]] la sal, por favor. Está en tu mesa.', en: 'Yes. Bring the salt, please. It’s on your table.' },
            { who: 'Rosa', text: 'Don Ernesto, ahora [[caliente|orange]] un poco de aceite y [[eche|orange]] la cebolla en la olla.', en: 'Don Ernesto, now heat a little oil and put the onion in the pot.' },
            { who: 'Don Ernesto', text: '¿Toda la cebolla? ¿Ahora?', en: 'All the onion? Now?' },
            { who: 'Rosa', text: 'Sí, toda. Y Pablo, [[sal|blue]] un momento y [[ve|blue]] a comprar más tomates. [[Ten|blue]], aquí tienes dinero.', en: 'Yes, all of it. And Pablo, pop out for a moment and go and buy more tomatoes. Here, here’s some money.' },
            { who: 'Pablo', text: '¡Voy! Ahora vuelvo.', en: 'On my way! I’ll be right back.' },
          ], notes: {
            'ven': 'Venir con tú: **ven** (irregular). Con usted, Rosa dice «venga».',
            'trae': 'Traer con tú: traes − s = **trae**. Es regular con tú.',
            'Lava': 'Lavar con tú: lavas − s = **lava**. Parece el presente de él, pero aquí es una instrucción.',
            'pon': 'Poner con tú: **pon** (irregular). No «pones».',
            'Perdone': 'Perdonar con usted: perdono → **perdone**. Don Ernesto usa usted con la profesora. Con tú: «perdona».',
            'venga': 'Venir con usted: vengo → **venga**. Es la instrucción de la frase ancla: ven / vení / venga.',
            'Tenga': '**Tenga** (usted) o **ten** (tú): lo decimos cuando damos algo a otra persona (here you are).',
            'Corte': 'Cortar con usted: corto → **corte**. Los verbos en -ar toman -e.',
            'vení': 'Venir con vos: venís − s = **vení**. Valeria es de Córdoba, Argentina: con vos, el acento va al final.',
            'Probá': 'Probar con vos: probás − s = **probá**. Con vos no hay cambio de vocal. Con tú: «prueba».',
            'Traé': 'Traer con vos: traés − s = **traé**. Con tú: «trae»; con usted: «traiga».',
            'caliente': 'Calentar con usted: caliento → **caliente**. Aquí no es el adjetivo (hot): es una instrucción.',
            'eche': 'Echar (to put in, to add) con usted: echo → **eche**.',
            'sal': 'Salir con tú: **sal** (irregular). Aquí no es la sal (salt): es «go out».',
            've': 'Ir con tú: **ve**. «Ve a comprar»: go and buy. Con usted: «vaya».',
            'Ten': 'Tener con tú: **ten**. Rosa da el dinero a Pablo: here you are.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Qué hace don Ernesto primero?', options: ['Prueba el caldo.', 'Lava las zanahorias.', 'Corta la cebolla.'], answer: 2, why: 'Rosa le dice: «Corte la cebolla en trozos pequeños».', en: 'What does don Ernesto do first?' },
            { prompt: '¿Qué quiere Valeria?', options: ['Un cuchillo para la cebolla.', 'La sal, porque al caldo le falta un poco.', 'Más tomates para la sopa.'], answer: 1, why: '«Traé la sal, por favor». Pablo prueba el caldo y le falta sal.', en: 'What does Valeria want?' },
            { prompt: '¿Adónde va Pablo al final?', options: ['A comprar más tomates.', 'A la mesa de don Ernesto.', 'A su casa.'], answer: 0, why: '«Sal un momento y ve a comprar más tomates».', en: 'Where does Pablo go at the end?' },
          ] },
        ] },
        { title: '¿Tú, vos o usted? · Tú, vos or usted?', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'classify', title: 'Instrucciones en la cocina · Instructions in the kitchen', categories: [
            { id: 'tu', label: 'TÚ', tone: 'blue' },
            { id: 'vos', label: 'VOS', tone: 'teal' },
            { id: 'usted', label: 'USTED', tone: 'orange' },
          ], items: [
            { text: 'Poné la mesa.', answer: 'vos', why: 'Ponés − s = poné: vos, con tilde al final.' },
            { text: 'Ponga la mesa.', answer: 'usted', why: 'Pongo → ponga: usted.' },
            { text: 'Pon la mesa.', answer: 'tu', why: 'Poner, irregular con tú: pon.' },
            { text: 'Lavá los platos.', answer: 'vos', why: 'Lavás − s = lavá: vos.' },
            { text: 'Lave los platos.', answer: 'usted', why: 'Lavo → lave: usted, -ar toma -e.' },
            { text: 'Haz la ensalada.', answer: 'tu', why: 'Hacer, irregular con tú: haz.' },
            { text: 'Salga por esta puerta.', answer: 'usted', why: 'Salgo → salga: usted.' },
            { text: 'Sal por esta puerta.', answer: 'tu', why: 'Salir, irregular con tú: sal.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: tú dices una forma de vos del diálogo («vení», «probá», «traé») y tu alumno dice la misma instrucción con tú («ven», «prueba», «trae»).' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Primero: ¿con quién hablas? First: who are you talking to?',
      steps: [
        { title: 'El siguiente sábado · The next Saturday', blocks: [
          { kind: 'choice', items: [
            { context: 'Rosa a Pablo, después de la clase. (Rosa to Pablo, after class.)', prompt: '___ los platos limpios en el armario, por favor.', options: ['Pon', 'Pones', 'Ponga'], answer: 0, why: 'Con Pablo, tú. Poner es irregular: pon.', en: 'Put the clean plates in the cupboard, please.' },
            { context: 'Llega una alumna nueva, la señora Luisa. (A new student arrives.)', prompt: 'Señora Luisa, ___ su abrigo aquí, por favor.', options: ['deja', 'dejas', 'deje'], answer: 2, why: 'Con una alumna nueva y mayor, usted. Dejo → deje.', en: 'Mrs Luisa, leave your coat here, please.' },
            { context: 'Valeria a Pablo, con vos. (Valeria to Pablo, with vos.)', prompt: 'Pablo, ___ la ventana, que hace frío.', options: ['cierrá', 'cerrás', 'cerrá'], answer: 2, why: 'Vos: cerrás − s = cerrá. Sin cambio de vocal. «Cerrás» es presente.', en: 'Pablo, close the window, it’s cold.' },
            { context: 'Rosa a don Ernesto, que prueba la sopa. (Don Ernesto tastes the soup.)', prompt: 'Don Ernesto, ___ la verdad: ¿está rica?', options: ['di', 'dice', 'diga'], answer: 2, why: 'Con usted: digo → diga. «Di» es tú.', en: 'Don Ernesto, tell me the truth: is it good?' },
            { context: 'Falta pan. Rosa a Pablo. (There is no bread left.)', prompt: 'Pablo, ___ a la panadería y compra pan para todos.', options: ['vaya', 've', 'va'], answer: 1, why: 'Ir con tú: ve. Mira el segundo verbo: «compra» también es tú.', en: 'Pablo, go to the bakery and buy bread for everyone.' },
          ] },
        ] },
        { title: '¿Para Pablo o para don Ernesto? · For Pablo or for don Ernesto?', blocks: [
          { kind: 'classify', title: 'Rosa da instrucciones · Rosa gives instructions', categories: [
            { id: 'pablo', label: 'Para Pablo (tú)', tone: 'blue' },
            { id: 'ernesto', label: 'Para don Ernesto (usted)', tone: 'orange' },
          ], items: [
            { text: 'Saque el pan del horno.', answer: 'ernesto', why: 'Saco → saque (c → qu): usted.' },
            { text: 'Sirve la sopa en los platos.', answer: 'pablo', why: 'Sirves − s = sirve: tú.' },
            { text: 'Traiga una silla, por favor.', answer: 'ernesto', why: 'Traigo → traiga: usted.' },
            { text: 'Enciende la luz de la cocina.', answer: 'pablo', why: 'Enciendes − s = enciende: tú.' },
            { text: 'Tome asiento aquí.', answer: 'ernesto', why: 'Tomo → tome: usted.' },
            { text: 'Ten la puerta abierta un momento.', answer: 'pablo', why: 'Tener, irregular con tú: ten.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Pablo, haces la ensalada de tomate ahora.', ok: false, options: ['Pablo, hace la ensalada de tomate ahora.', 'Pablo, haga la ensalada de tomate ahora.', 'Pablo, haz la ensalada de tomate ahora.'], answer: 2, why: 'Para Pablo (tú), hacer es irregular: haz. «Haces» describe; «haga» es usted.' },
            { sentence: 'Don Ernesto, ponga la mesa con Pablo, por favor.', ok: true, why: 'Correcta: con usted, pongo → ponga.' },
            { sentence: 'Señora Luisa, sale por esta puerta, por favor.', ok: false, options: ['Señora Luisa, salga por esta puerta, por favor.', 'Señora Luisa, sal por esta puerta, por favor.', 'Señora Luisa, salgue por esta puerta, por favor.'], answer: 0, why: 'Con usted: salgo → salga. «Sale» es presente; «sal» es tú.' },
            { sentence: 'Valeria: «Tené cuidado, la olla está caliente».', ok: true, why: 'Correcta: con vos, tenés − s = tené.' },
            { sentence: 'Pablo, pide más pan en la panadería.', ok: true, why: 'Correcta: pides − s = pide. El cambio e → i se queda con tú.' },
            { sentence: 'Don Ernesto, vuelve el sábado a las diez.', ok: false, options: ['Don Ernesto, volvé el sábado a las diez.', 'Don Ernesto, vuelva el sábado a las diez.', 'Don Ernesto, volva el sábado a las diez.'], answer: 1, why: 'Usted sale de «yo vuelvo»: vuelva. «Vuelve» es tú; «volvé» es vos.' },
          ] },
        ] },
        { title: 'Al final de la clase · At the end of the class', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'chat-fill', title: 'A recoger la cocina · Tidying up the kitchen', lines: [
            { who: 'Rosa', text: '¡Muy bien, todos! Pablo, ___ los platos sucios a la cocina.', options: ['lleve', 'lleva', 'llevas'], answer: 1, why: 'Con Pablo, tú: llevas − s = lleva.' },
            { who: 'Pablo', text: 'Muy bien. ¿Y las ollas?' },
            { who: 'Rosa', text: '___ las ollas aquí y ___ la ventana, que hace calor.', options: ['Pones · abres', 'Ponga · abra', 'Pon · abre'], answer: 2, why: 'Dos instrucciones a Pablo con tú: pon (irregular) y abre.' },
            { who: 'Don Ernesto', text: 'Rosa, ¿puedo ayudar con algo?' },
            { who: 'Rosa', text: 'Sí, gracias. ___ las sillas junto a la pared, por favor.', options: ['Ponga', 'Pon', 'Pone'], answer: 0, why: 'A don Ernesto, usted: pongo → ponga.' },
            { who: 'Don Ernesto', text: '¿Y el sábado a qué hora vengo?' },
            { who: 'Rosa', text: '___ a las diez menos cuarto y ___ un delantal, por favor.', options: ['Viene · trae', 'Venga · traiga', 'Ven · trae'], answer: 1, why: 'Usted: vengo → venga; traigo → traiga.' },
            { who: 'Valeria', text: 'Pablo, ___ con nosotras al café de la esquina.', options: ['venís', 'vienes', 'vení'], answer: 2, why: 'Valeria usa vos: venís − s = vení. «Venís» es el presente de vos.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['a', 'Venga', 'la', 'cocina', 'conmigo'], accept: ['Venga a la cocina conmigo', 'Venga conmigo a la cocina'], en: 'Come to the kitchen with me. (usted)' },
            { tiles: ['la', 'Pon', 'sal', 'y', 'el', 'aceite', 'en', 'la', 'mesa'], accept: ['Pon la sal y el aceite en la mesa', 'Pon el aceite y la sal en la mesa', 'Pon en la mesa la sal y el aceite', 'Pon en la mesa el aceite y la sal'], en: 'Put the salt and the oil on the table. (tú)' },
            { tiles: ['una', 'Haz', 'lista', 'de', 'compras', 'para', 'el', 'sábado'], accept: ['Haz una lista de compras para el sábado', 'Para el sábado haz una lista de compras'], en: 'Make a shopping list for Saturday. (tú)' },
            { tiles: ['esta', 'Probá', 'sopa', 'de', 'tomate'], accept: ['Probá esta sopa de tomate'], en: 'Try this tomato soup. (vos)' },
          ] },
        ] },
        { title: 'Cambia la persona · Change the person', blocks: [
          { kind: 'rewrite', title: 'Tú, vos, usted', items: [
            { prompt: 'Pablo, ven a la mesa y prueba la sopa.', instruction: 'Rosa dice lo mismo a don Ernesto, con usted. Empieza con «Don Ernesto». (Same instruction, with usted.)', accept: ['Don Ernesto, venga a la mesa y pruebe la sopa'] },
            { prompt: 'Pon tu nombre en la lista.', instruction: 'Cambia a usted. Cuidado también con «tu». (Change to usted; watch “tu”.)', accept: ['Ponga su nombre en la lista'] },
            { prompt: 'Valeria: «Pablo, salí un momento y traé más pan».', instruction: 'Rosa dice lo mismo con tú. Empieza con «Pablo». (Rosa says it with tú.)', accept: ['Pablo, sal un momento y trae más pan'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno explica cómo se prepara su bebida favorita con tres instrucciones con tú; después las repite con usted para una persona mayor.' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'La receta de Rosa', coach: 'Primero escucha sin leer. Listen first, read later.',
      steps: [
        { title: 'Un mensaje para don Ernesto · A message for don Ernesto', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general. Segunda escucha: tu alumno anota los pasos de la receta en orden, con el verbo que oye (lave, corte…). Después, las preguntas.', self: 'Escucha una vez para la idea general. En la segunda escucha, anota los pasos de la receta en orden. (Listen once for the gist, then note the steps in order.)' } },
          { kind: 'listen', title: 'La receta de Rosa', channel: 'MENSAJE DE VOZ · DE ROSA PARA DON ERNESTO', src: '/audio/grammar-live/358.mp3',
            before: 'Don Ernesto quiere hacer la sopa en casa con su nieta. Rosa le manda un mensaje de voz. ¿Qué formas vas a oír: de tú o de usted? ¿Qué pasos crees que da? (Will you hear tú or usted forms? Which steps do you expect?)',
            gist: { prompt: '¿Cuál es la idea general? · What is the main idea?', options: ['Rosa explica la receta de la sopa y le recuerda algo para el sábado.', 'Rosa cancela el taller del sábado.', 'Rosa pide a don Ernesto una receta de pan.'], answer: 0, why: 'Da los pasos de la sopa y dice: «el sábado venga un poco antes».', en: 'What is the main idea?' },
            details: [
              { prompt: '¿Qué tiene que hacer primero don Ernesto?', options: ['Calentar el aceite.', 'Comprar pan.', 'Lavar bien las verduras.'], answer: 2, why: '«Primero, lave bien las verduras».', en: 'What does don Ernesto have to do first?' },
              { prompt: '¿Cuánto tiempo necesita la sopa?', options: ['Una hora.', 'Unos treinta minutos.', 'Cinco minutos.'], answer: 1, why: '«La sopa necesita unos treinta minutos a fuego medio». Cinco minutos es para la cebolla.', en: 'How long does the soup need?' },
              { prompt: '¿Qué hace al final, si hace falta?', options: ['Echa más cebolla.', 'Añade un poco de sal.', 'Pone más agua.'], answer: 1, why: '«Pruebe el caldo y, si hace falta, añada un poco de sal».', en: 'What does he do at the end, if needed?' },
              { prompt: '¿Por qué tiene que llegar antes el sábado?', options: ['Porque Rosa no puede ir.', 'Porque hay una alumna nueva.', 'Porque van a hacer pan.'], answer: 2, why: '«Venga un poco antes, a las diez menos cuarto, porque vamos a hacer pan».', en: 'Why does he have to arrive early on Saturday?' },
            ],
            transcript: 'Hola, don Ernesto, buenas tardes. Soy Rosa, la profesora del taller de cocina. Usted quiere hacer la sopa en casa con su nieta, ¿verdad? Pues aquí tiene la receta. Primero, [[lave|orange]] bien las verduras: dos zanahorias, una cebolla, dos tomates y una papa. [[Corte|orange]] todo en trozos pequeños, como hoy en clase. Después, [[caliente|orange]] un poco de aceite en una olla y [[eche|orange]] la cebolla. A los cinco minutos, [[ponga|orange]] el resto de las verduras y un litro de agua. La sopa necesita unos treinta minutos a fuego medio. Al final, [[pruebe|orange]] el caldo y, si hace falta, [[añada|orange]] un poco de sal. Ah, y el sábado [[venga|orange]] un poco antes, a las diez menos cuarto, porque vamos a hacer pan. ¡Hasta el sábado!',
            reply: { teacher: 'Tú eres Rosa. Tu alumno es don Ernesto y responde al mensaje con usted: da las gracias, repite dos pasos de la receta y hace una pregunta («¿Traigo algo para el pan?»).', self: 'Responde a Rosa en voz alta como don Ernesto: da las gracias, repite dos pasos y haz una pregunta para el sábado. (Answer as don Ernesto: thank her, repeat two steps, ask a question.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Tú das las instrucciones', coach: 'Claro y amable. Clear and friendly.',
      steps: [
        { title: 'En la cocina y fuera · In the kitchen and beyond', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces de Pablo, de don Ernesto o de un amigo. Tu alumno da las instrucciones y tú las sigues (o haces como que las sigues). A veces te equivocas a propósito y tu alumno repite la instrucción.', self: 'Lee la situación y da las instrucciones en voz alta. Si puedes, haz los gestos. Mira bien: ¿tú o usted? (Give the instructions aloud: tú or usted?)' } },
          { kind: 'talk', cards: [
            { q: 'Tú eres Rosa. Pablo llega temprano. Dile cómo preparar las mesas del taller. · You are Rosa. Tell Pablo how to set up the tables.', followUps: ['¿Y los cuchillos? (And the knives?)', '¿Qué hago con las sillas? (What do I do with the chairs?)'], phrases: ['[[Pon|blue]] los platos en…', '[[Trae|blue]] las ollas de…', '[[Abre|blue]] la ventana, por favor.'], hint: 'Pablo es tu compañero: tú. Usa pon, trae, abre, lava…', example: 'Pablo, abre la ventana, por favor. Pon una olla en cada mesa y trae los cuchillos del armario. Después, lava las verduras.', next: 'Ahora, con usted.' },
            { q: 'Tú eres Rosa. Don Ernesto pregunta: «¿Qué hago ahora?». Dale tres pasos de la receta. · Give don Ernesto three steps.', followUps: ['¿Corto también el tomate? (Do I cut the tomato too?)', '¿Cuánta sal echo? (How much salt do I add?)'], phrases: ['[[Corte|orange]]… en trozos pequeños.', '[[Ponga|orange]]… en la olla.', '[[Pruebe|orange]] el caldo.'], hint: 'Con usted: corte, ponga, eche, pruebe. Empieza en «yo»: pongo → ponga.', example: 'Don Ernesto, corte los tomates en trozos pequeños. Después, ponga los tomates en la olla y pruebe el caldo.', teacher: 'Si tu alumno dice «póngalos», está muy bien, pero no es necesario: el pronombre pegado al imperativo es de la clase 065.', next: 'Ahora, tu receta.' },
            { q: '¿Cuál es tu plato o tu bebida favorita? Explica a un amigo cómo se prepara, en cuatro pasos. · Explain to a friend how to make your favourite dish or drink.', followUps: ['¿Qué necesito? (What do I need?)', '¿Y después? (And then?)'], phrases: ['Primero, [[compra|blue]]…', 'Después, [[pon|blue]]… / [[haz|blue]]…', 'Al final, [[prueba|blue]]…'], hint: 'Con un amigo: tú. Ordena los pasos: primero, después, al final.', example: 'Primero, compra tres limones. Después, pon el jugo en una jarra con agua y azúcar. Mezcla todo bien. Al final, prueba y pon hielo.', next: 'Ahora, una visita.' },
            { q: 'Una vecina mayor visita tu casa por primera vez. Recíbela con tres instrucciones amables. · An older neighbour visits: welcome her politely.', followUps: ['¿Dónde dejo el abrigo? (Where do I leave my coat?)', '¿Quiere un café o un té? (Coffee or tea?)'], phrases: ['[[Pase|orange]], por favor.', '[[Deje|orange]] el abrigo aquí.', '[[Tome|orange]] un café con nosotros.'], hint: 'Con una vecina mayor que no conoces bien: usted. Pase, deje, tome, venga.', example: 'Buenas tardes, señora. Pase, por favor. Deje el abrigo aquí y venga a la sala. Tome un café con nosotros.', next: 'Ahora, una amiga de Buenos Aires.' },
            { q: 'Valeria te dice: «Vení a casa el domingo y traé algo de postre». ¿Qué te pide? Responde y pídele tú dos cosas, con tú. · What does Valeria ask? Answer and ask her two things.', followUps: ['¿A qué hora voy? (What time shall I go?)', '¿Qué postre llevo? (Which dessert shall I take?)'], phrases: ['Valeria me pide: [[ven|blue]] a casa y [[trae|blue]]…', '¡Claro! [[Di|blue]] a qué hora…', '[[Escribe|blue]] la dirección, por favor.'], hint: 'Valeria usa vos (vení, traé). Tú puedes responder con tú: ven, trae, di, escribe.', example: 'Valeria me pide ir a su casa el domingo y llevar un postre. ¡Claro! Escribe la dirección en un mensaje, por favor, y di a qué hora voy.', teacher: 'Aquí tu alumno solo necesita entender el vos. Si vive en una zona de voseo, puede responder con vos.' },
            { q: 'Un señor en la calle pregunta cómo llegar al centro cultural. Dale las indicaciones con usted. · Give a man directions, with usted.', followUps: ['¿Está lejos? (Is it far?)', '¿Y después del parque? (And after the park?)'], phrases: ['[[Siga|orange]] todo recto…', '[[Gire|orange]] a la derecha / a la izquierda…', '[[Cruce|orange]] la calle y…'], hint: 'Seguir: sigo → siga. Girar: giro → gire. Cruzar: cruzo → cruce (z → c).', example: 'Siga todo recto dos calles. En el parque, gire a la izquierda. Cruce la calle y allí está el centro cultural.', teacher: 'Cambien después a tú: tu alumno da las mismas indicaciones a un amigo (sigue, gira, cruza).' },
          ], swap: { teacher: 'Al final, cambian los papeles: tú eres Rosa y das instrucciones a tu alumno, con tú y con usted, y a veces con un error («Don Ernesto, ven aquí»). Tu alumno las sigue y corrige los errores.', self: 'Ahora al revés: lee las frases de ejemplo en voz alta y cambia cada una de tú a usted, o de usted a tú. (Change each example from tú to usted or the other way.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Rosa no puede ir', coach: 'Instrucciones claras, con el tono justo. Clear instructions, the right tone.',
      steps: [
        { title: 'Dos mensajes · Two messages', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Después revisan juntos cada imperativo: ¿es para Pablo (tú) o para don Ernesto (usted)?', self: 'Escribe tus dos mensajes y toca «Revisar mi texto». Después mira cada verbo: ¿tú o usted? (Check each verb: tú or usted?)' } },
          { kind: 'write', title: 'Instrucciones para el sábado · Instructions for Saturday', situation: 'Eres Rosa. Estás enferma y el sábado no puedes ir al taller. Escribe un mensaje a Pablo (tú) con instrucciones para dar la clase, y un mensaje corto a don Ernesto (usted). (You are Rosa. You are ill and can’t go to the workshop on Saturday. Write a message to Pablo with instructions to run the class, and a short message to don Ernesto.)', task: [
            'En el mensaje a Pablo, da cuatro instrucciones con tú. (Four instructions to Pablo, with tú.)',
            'Usa por lo menos un imperativo irregular: ven, pon, haz, sal, ten, ve… (At least one irregular tú form.)',
            'En el mensaje a don Ernesto, da dos instrucciones con usted. (Two instructions to don Ernesto, with usted.)',
            'Usa «por favor» una vez. (Use “por favor” once.)',
            'Saluda y despídete en cada mensaje. (Greet and sign off in each message.)',
          ], starters: ['Hola, Pablo:', 'El sábado no puedo ir al taller.', 'Por favor, ven a las…', 'Estimado don Ernesto:', 'Venga a las… y traiga…', 'Un saludo, Rosa'],
            words: ['ven', 'pon', 'haz', 'abre', 'prueba', 'lava', 'venga', 'traiga', 'ponga', 'por favor', 'como siempre'],
            model: 'Hola, Pablo: Estoy enferma y el sábado no puedo ir al taller. Por favor, [[ven|blue]] a las nueve y media, [[abre|blue]] la cocina y [[pon|blue]] las mesas. [[Haz|blue]] la sopa de verduras con el grupo y [[prueba|blue]] el caldo antes de servir. ¡Gracias! Rosa. Estimado don Ernesto: El sábado no voy a estar en el taller, pero Pablo va a dar la clase. [[Venga|orange]] a las diez, como siempre, y [[traiga|orange]] su delantal. Un saludo, Rosa.',
            minWords: 50,
            checks: [
              { label: 'Un imperativo irregular de tú: ven, pon, haz… (an irregular tú command)', pattern: '(?<!\\p{L})(?:ven|pon|haz|sal|ten|di|ve)(?!\\p{L})', tip: 'Pablo es tu compañero: «Ven a las nueve», «Pon las mesas», «Haz la sopa».' },
              { label: 'Un imperativo de usted: venga, traiga, ponga… (an usted command)', pattern: '(?<!\\p{L})(?:venga|traiga|ponga|haga|tenga|diga|salga|vaya|traiga|lleve|deje|tome|corte|lave|pruebe|llegue|compre|prepare|escriba|llame|espere|pregunte)(?!\\p{L})', tip: 'Don Ernesto: usted. «Venga a las diez», «Traiga su delantal».' },
              { label: 'Por favor', pattern: '(?<!\\p{L})por\\s+favor(?!\\p{L})', tip: 'Añade «por favor»: «Por favor, ven a las nueve».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})(?:vienga|pona|tena|haca|salgue|veng)(?!\\p{L})', why: 'Usted sale de la forma de yo: vengo → **venga**, pongo → **ponga**, tengo → **tenga**, hago → **haga**, salgo → **salga**.' },
              { pattern: '(?<!\\p{L})(?:haces|pones|vienes)\\s+(?:la|el|las|los|una|un)(?!\\p{L})', why: '¿Es una instrucción? Con tú, hacer, poner y venir son irregulares: **haz**, **pon**, **ven**.' },
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
            { tone: 'blue', label: 'TÚ', formula: 'presente de tú − s · di, haz, ve, pon, sal, sé, ten, ven', example: 'Pablo, lava las zanahorias y ven aquí.', caption: 'con amigos, familia, compañeros', en: 'tú present minus -s, plus eight short irregular forms' },
            { tone: 'teal', label: 'VOS', formula: 'presente de vos − s · acento al final', example: 'Pablo, lavá las zanahorias y vení aquí.', caption: 'Argentina, Uruguay, Paraguay, Centroamérica: para entender', en: 'vos present minus -s, stress at the end, no vowel change' },
            { tone: 'orange', label: 'USTED', formula: 'yo − o + vocal contraria · vaya, sea', example: 'Don Ernesto, lave las zanahorias y venga aquí.', caption: 'respeto, distancia, clientes', en: 'yo form minus -o, plus -e (-ar) or -a (-er/-ir)' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Primero decide **con quién hablas**. Con tú: el presente sin -s (corta, cierra) y ocho formas cortas (ven, pon, haz…). Con usted: empieza en «yo» y cambia la vocal (vengo → venga, corto → corte). Con vos: el presente de vos sin -s (vení, cortá).', en: 'First decide who you are talking to. With tú: the present without -s (corta, cierra) and eight short forms (ven, pon, haz…). With usted: start from “yo” and change the vowel (vengo → venga, corto → corte). With vos: the vos present without -s (vení, cortá).' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'Un camarero a un cliente: «Señor, ___ asiento aquí, por favor».', options: ['toma', 'tomas', 'tome'], answer: 2, why: 'Con un cliente, usted: tomo → tome.', en: 'A waiter to a customer: “Sir, take a seat here, please.”' },
            { prompt: 'A tu hermana: «___ la verdad: ¿te gusta mi sopa?».', options: ['Dice', 'Diga', 'Di'], answer: 2, why: 'Con la familia, tú: decir → di.', en: 'To your sister: “Tell the truth: do you like my soup?”' },
            { prompt: 'A un amigo: «___ temprano mañana: salimos a las siete».', options: ['Venga', 'Ven', 'Vienes'], answer: 1, why: 'Con un amigo, tú: venir → ven.', en: 'To a friend: “Come early tomorrow: we leave at seven.”' },
            { prompt: 'En un hotel, a una clienta: «Señora, ___ al segundo piso, por favor».', options: ['va', 've', 'vaya'], answer: 2, why: 'Con usted, ir es una excepción: vaya.', en: 'At a hotel, to a guest: “Madam, go to the second floor, please.”' },
            { prompt: 'En Buenos Aires, una amiga te dice: «Poné música». ¿Cómo lo dices con tú?', options: ['Ponga música.', 'Pon música.', 'Pone música.'], answer: 1, why: '«Poné» es vos. Con tú, poner es irregular: pon.', en: 'In Buenos Aires a friend says “Poné música”. How do you say it with tú?' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Ahora, en un hotel. Now, at a hotel.', blocks: [
          { kind: 'lead', text: 'Lucía trabaja en la recepción de un hotel. A su compañero le explica el camino con tú; a un cliente, con usted. Cambia sus frases a usted.', en: 'Lucía works at a hotel reception. She explains the way to her colleague with tú; to a guest, with usted. Change her sentences to usted.' },
          { kind: 'rewrite', title: 'En la recepción · At the reception desk', items: [
            { prompt: 'Sube al tercer piso.', instruction: 'Cambia a usted. (Change to usted.)', accept: ['Suba al tercer piso'] },
            { prompt: 'Sigue por el pasillo y gira a la derecha.', instruction: 'Cambia a usted. Seguir: yo sigo. (Change to usted.)', accept: ['Siga por el pasillo y gire a la derecha'] },
            { prompt: 'Ten la llave. Es la habitación 305.', instruction: 'Cambia a usted. (Change to usted.)', accept: ['Tenga la llave. Es la habitación 305', 'Tenga la llave, es la habitación 305'] },
          ] },
        ] },
        { title: 'Ampliación: ustedes y vosotros · Extension: ustedes and vosotros', mascot: '/brand/mascot/portrait.webp', coach: 'Para todo el grupo. For the whole group.', blocks: [
          { kind: 'tip', icon: '👥', title: 'Para varias personas · For several people', text: 'Con **ustedes**, añade **-n** a la forma de usted: venga → **vengan**, corte → **corten**, haga → **hagan**. En América, ustedes sirve para todos (amigos o no). En gran parte de España, con amigos se usa **vosotros**: el infinitivo con **-d** (venid, cortad, haced).', en: 'For ustedes, add -n to the usted form: venga → vengan, corte → corten, haga → hagan. In Latin America, ustedes works for everyone (friends or not). In most of Spain, with friends people use vosotros: the infinitive with -d (venid, cortad, haced).' },
          { kind: 'rewrite', title: 'Rosa habla con todo el grupo · Rosa talks to the whole group', items: [
            { prompt: 'Venga a las diez.', instruction: 'Cambia a ustedes. (Change to ustedes.)', accept: ['Vengan a las diez'] },
            { prompt: 'Traiga un delantal.', instruction: 'Cambia a ustedes. (Change to ustedes.)', accept: ['Traigan un delantal'] },
            { prompt: 'Corte el pan y ponga la mesa.', instruction: 'Cambia a ustedes. (Change to ustedes.)', accept: ['Corten el pan y pongan la mesa'] },
          ] },
          { kind: 'teacher', text: 'Paso opcional: para estudiantes rápidos o si hay tiempo extra. El vosotros es solo para reconocer.' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 059 · Imperativo negativo con subjuntivo de forma guiada', text: 'Ya das instrucciones con tú y con usted, y entiendes el vos: «ven», «venga», «vení». Ahora falta decir lo que **no** hay que hacer. En la clase 059 vuelve la vocal contraria de usted (corte, coma): «no **cortes**», «no **comas**». Es el paso natural: ya conoces la forma, ahora la usas para prohibir y avisar.', en: 'You can now give instructions with tú and usted, and you understand vos: “ven”, “venga”, “vení”. Next comes saying what not to do. In class 059 the “other” vowel of usted (corte, coma) comes back: “no cortes”, “no comas”. It is the natural next step: you already know the form, now you use it to forbid and warn.', href: '/sistema-verbal/imperativo', label: 'Ir a la clase 059' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «Pide a un amigo y después a tu jefe que vengan a tu casa a las ocho». Respuesta: «Ven a mi casa a las ocho» / «Venga a mi casa a las ocho». Tarea: escribir los dos mensajes de Escribir con una receta real.' },
        ] },
      ],
    },
  ],
};
