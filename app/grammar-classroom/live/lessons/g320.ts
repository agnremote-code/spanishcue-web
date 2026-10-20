import type { LiveLesson } from '../types';

/**
 * Lesson 320 · A1 · Presente con cambio vocálico: querer, poder, pedir (course unit G020).
 * One trip runs through the class: Clara and Diego travel together on the coast
 * of Ecuador (Puerto López) and every day decide three things: what to eat,
 * what to do and how much money they can spend (they have 100 dollars).
 * Content: the stem changes e → ie (querer), o → ue (poder) and e → i (pedir)
 * in the «boot» pattern: yo, tú, él / ella / usted, ellos / ellas / ustedes
 * change; nosotros and vosotros do not (queremos, podemos, pedimos).
 * Querer / poder + infinitive appear as useful chunks (the modal class comes later);
 * pedir = to order / to ask for (no «por»). Clara, Diego, their friend Rosa and
 * the waitress speak with tú / ustedes; vosotros is Spain only, and vos
 * (querés, podés, pedís) appears only in one variety note that prepares class 021.
 */
export const lesson: LiveLesson = {
  id: 320,
  level: 'A1',
  title: 'Presente con cambio vocálico: querer, poder, pedir',
  subtitle: 'Decir qué quieres, qué puedes pagar y qué pides en un viaje, con quiero, puedo, pido y queremos, podemos, pedimos.',
  legend: [
    { tone: 'orange', label: 'QUERER · e → ie (quiero, quieres…)' },
    { tone: 'teal', label: 'PODER · o → ue (puedo, puedes…)' },
    { tone: 'violet', label: 'PEDIR · e → i (pido, pides…)' },
    { tone: 'blue', label: 'NOSOTROS · sin cambio (queremos, podemos, pedimos)' },
  ],
  optionNotes: {
    quero: '«Quero» no existe. Con yo, la e de querer cambia a ie: **quiero**.',
    queres: '«Queres» sin cambio no es la forma de tú. Con tú, la e cambia a ie: **quieres**.',
    queren: '«Queren» no existe. Con ellos, ellas o ustedes, la e cambia a ie: **quieren**.',
    quieremos: '«Quieremos» no existe. Con nosotros, la raíz no cambia: **queremos**.',
    podo: '«Podo» no es una forma de poder. Con yo, la o cambia a ue: **puedo**.',
    pode: '«Pode» no existe. Con él, ella o usted, la o cambia a ue: **puede**.',
    poden: '«Poden» no existe. Con ellos, ellas o ustedes, la o cambia a ue: **pueden**.',
    puedemos: '«Puedemos» no existe. Con nosotros, la raíz no cambia: **podemos**.',
    Puedemos: '«Puedemos» no existe. Con nosotros, la raíz no cambia: **podemos**.',
    pede: '«Pede» no existe. Con él, ella o usted, la e de pedir cambia a i: **pide**.',
    peden: '«Peden» no existe. Con ellos, ellas o ustedes, la e de pedir cambia a i: **piden**.',
    pidimos: '«Pidimos» no existe. Con nosotros, la raíz de pedir no cambia: **pedimos**.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Comida, plan y dinero', coach: 'Quiero, puedo, pido. I want, I can, I order.',
      steps: [
        { title: 'Dos viajeros · Two travellers', blocks: [
          { kind: 'lead', text: 'Clara y Diego viajan juntos por la costa de Ecuador. Están en Puerto López, un pueblo de pescadores. Cada mañana deciden tres cosas: **qué comer**, **qué hacer** y **cuánto dinero gastar**. Tienen cien dólares para dos días.', en: 'Clara and Diego are travelling together along the coast of Ecuador. They are in Puerto López, a fishing town. Every morning they decide three things: what to eat, what to do and how much money to spend. They have 100 dollars for two days.' },
          { kind: 'guide', text: { teacher: 'Tú lees las tres frases y tu alumno repite. Después, tu alumno dice qué frase habla de un deseo, cuál de dinero y cuál de un restaurante.', self: 'Lee las tres frases en voz alta. Busca cuál dice lo que Clara quiere, cuál habla de dinero y cuál pasa en un restaurante.' } },
          { kind: 'compare', title: 'Tres frases del viaje · Three sentences from the trip', columns: [
            { tone: 'orange', label: 'QUERER · want', sentence: 'Clara: «[[Quiero|orange]] un café y fruta».', idea: 'Un deseo: lo que Clara quiere.', en: 'Clara: “I want a coffee and some fruit.”' },
            { tone: 'teal', label: 'PODER · can', sentence: 'Clara: «No [[puedo|teal]] pagar mucho».', idea: 'Una posibilidad: lo que Clara puede pagar.', en: 'Clara: “I can’t pay much.”' },
            { tone: 'violet', label: 'PEDIR · order', sentence: 'Diego [[pide|violet]] huevos con pan.', idea: 'En el restaurante: lo que Diego pide al camarero.', en: 'Diego orders eggs with bread.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Quiero un café» dice…', options: ['lo que Clara quiere (want).', 'lo que Clara puede pagar (can).', 'lo que Clara pide al camarero (order).'], answer: 0, why: 'Querer = want: quiero un café.', en: '“Quiero un café” tells you…' },
            { prompt: '«No puedo pagar mucho» habla de…', options: ['el dinero de Clara.', 'la comida de Diego.', 'el pueblo de Puerto López.'], answer: 0, why: 'Poder = can: lo que Clara puede pagar.', en: '“No puedo pagar mucho” is about…' },
            { prompt: 'En un restaurante, «pido una sopa» significa…', options: ['I order a soup.', 'I can have a soup.', 'I want a soup.'], answer: 0, why: 'Pedir en un restaurante = to order.', en: 'In a restaurant, “pido una sopa” means…' },
          ] },
        ] },
        { title: 'La bota · The boot', mascot: '/brand/mascot/studying.webp', coach: 'Cuatro personas cambian, dos no. Four change, two don’t.', blocks: [
          { kind: 'lead', text: 'Querer, poder y pedir tienen las terminaciones regulares de la clase 017. Lo especial está en la **raíz**: cuando el golpe de voz cae en la raíz, la vocal cambia. **QUIE**-ro, **PUE**-do, **PI**-do. En nosotros y vosotros, el golpe de voz va al final (que-**RE**-mos) y la raíz no cambia.', en: 'Querer, poder and pedir have the regular endings from class 017. The special part is the stem: when the stress falls on the stem, its vowel changes. QUIE-ro, PUE-do, PI-do. In nosotros and vosotros the stress moves to the ending (que-RE-mos), so the stem does not change.' },
          { kind: 'table', title: 'Presente · querer, poder, pedir', head: ['Persona', 'querer (e → ie)', 'poder (o → ue)', 'pedir (e → i)'], rows: [
            ['yo', '[[quiero|orange]]', '[[puedo|teal]]', '[[pido|violet]]'],
            ['tú', '[[quieres|orange]]', '[[puedes|teal]]', '[[pides|violet]]'],
            ['él · ella · usted', '[[quiere|orange]]', '[[puede|teal]]', '[[pide|violet]]'],
            ['nosotros · nosotras', '[[queremos|blue]]', '[[podemos|blue]]', '[[pedimos|blue]]'],
            ['vosotros · vosotras (España)', '[[queréis|blue]]', '[[podéis|blue]]', '[[pedís|blue]]'],
            ['ellos · ellas · ustedes', '[[quieren|orange]]', '[[pueden|teal]]', '[[piden|violet]]'],
          ], note: 'Dibuja una línea alrededor de las formas con cambio: tiene forma de **bota** (a boot). Nosotros y vosotros quedan fuera.' },
          { kind: 'tip', icon: '🌎', title: 'Vosotros y vos: fuera de la bota', text: 'En España, **vosotros** no cambia: queréis, podéis, pedís. En Argentina, Uruguay y partes de Centroamérica se usa **vos**, y con vos la raíz tampoco cambia: **querés, podés, pedís**. Hoy solo lo reconoces; en la clase 021 ves tú, vos, usted, ustedes y vosotros.', en: 'In Spain, vosotros does not change: queréis, podéis, pedís. In Argentina, Uruguay and parts of Central America people use vos, and with vos the stem does not change either: querés, podés, pedís. Today you only recognise it; class 021 covers tú, vos, usted, ustedes and vosotros.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Yo ___ ver el mar.', options: ['quero', 'queremos', 'quiero'], answer: 2, why: 'Yo está dentro de la bota: la e cambia a ie, quiero.', en: 'I want to see the sea.' },
            { prompt: 'Nosotros ___ pagar cien dólares.', options: ['pueden', 'podemos', 'puedemos'], answer: 1, why: 'Nosotros está fuera de la bota: podemos.', en: 'We can pay 100 dollars.' },
            { prompt: 'Ellos ___ sopa de pescado.', options: ['pedimos', 'piden', 'peden'], answer: 1, why: 'Ellos está dentro de la bota: la e cambia a i, piden.', en: 'They order fish soup.' },
            { prompt: '¿Por qué «queremos» no cambia?', options: ['Porque el golpe de voz está en la terminación: que-RE-mos.', 'Porque es plural.', 'Porque querer es regular.'], answer: 0, why: 'Ellos quieren también es plural y cambia. La clave es el golpe de voz.', en: 'Why does “queremos” not change?' },
          ] },
        ] },
        { title: 'Tres verbos útiles · Three useful verbs', mascot: '/brand/mascot/standing.webp', coach: 'Quiero ir, puedo pagar, pido un jugo.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'QUERER · e → ie', question: '¿Qué quieres?', en: 'to want', formula: ['quiero + cosa: Quiero un café.', 'quiero + infinitivo: Quiero ver las ballenas.'],
            meaning: 'Con **querer** dices un deseo. Después va una cosa o un **infinitivo** (-ar, -er, -ir), nunca otro verbo conjugado.',
            examples: [
              { es: '[[Quiero|orange]] un café con leche.', en: 'I want a white coffee.' },
              { es: 'Diego [[quiere|orange]] ver las ballenas.', en: 'Diego wants to see the whales.' },
              { es: '¿[[Quieres|orange]] comer en el mercado?', en: 'Do you want to eat at the market?' },
            ] },
          { kind: 'concept', tone: 'teal', label: 'PODER · o → ue', question: '¿Qué puedes hacer?', en: 'can / to be able to', formula: ['puedo + infinitivo: Puedo pagar el tour.', 'no puedo + infinitivo: No puedo pagar más.'],
            meaning: 'Con **poder** dices qué es posible para ti: tiempo, dinero, permiso. Casi siempre va con un infinitivo.',
            examples: [
              { es: '[[Puedo|teal]] pagar cuarenta dólares.', en: 'I can pay 40 dollars.' },
              { es: '[[Quiero|orange]] un café, pero no [[puedo|teal]] quedarme mucho: el tour sale a las nueve.', en: 'I want a coffee, but I can’t stay long: the tour leaves at nine.' },
              { es: '¿[[Puedes|teal]] reservar el hotel?', en: 'Can you book the hotel?' },
            ],
            note: '**Querer y poder + infinitivo** son hoy frases útiles. Más adelante, en otra clase, los ves con más detalle.' },
          { kind: 'concept', tone: 'violet', label: 'PEDIR · e → i', question: '¿Qué pides?', en: 'to order / to ask for', formula: ['pido + cosa: Pido un jugo de mango.', 'pedir la cuenta · pedir ayuda'],
            meaning: 'Con **pedir** dices qué quieres recibir: en un restaurante, en una tienda, de un amigo. Va **sin «por»**: pido un jugo (I ask for a juice).',
            examples: [
              { es: '[[Pido|violet]] un jugo de mango, por favor.', en: 'I’ll have a mango juice, please.' },
              { es: 'Clara siempre [[pide|violet]] la comida típica.', en: 'Clara always orders the local food.' },
              { es: 'Al final, [[pedimos|blue]] la cuenta.', en: 'At the end, we ask for the bill.' },
            ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Quiero ___ en el mercado.', options: ['como', 'come', 'comer'], answer: 2, why: 'Después de querer va el infinitivo: quiero comer.', en: 'I want to eat at the market.' },
            { prompt: '¿Puedes ___ el tour?', options: ['reservar', 'reservas', 'reserva'], answer: 0, why: 'Después de poder va el infinitivo: puedes reservar.', en: 'Can you book the tour?' },
            { prompt: 'Diego ___ la cuenta.', options: ['pide', 'pide por', 'puede'], answer: 0, why: 'Pedir algo, sin «por»: pide la cuenta.', en: 'Diego asks for the bill.' },
          ] },
        ] },
        { title: '¿Quiero o queremos? · Inside or outside the boot', mascot: '/brand/mascot/portrait.webp', coach: '¿Quién? Primero mira la persona. Look at the person first.', blocks: [
          { kind: 'compare', title: 'Mismo verbo, otra persona · Same verb, another person', columns: [
            { tone: 'orange', label: 'YO · dentro de la bota', sentence: '[[Quiero|orange]] pedir ceviche.', idea: 'Golpe de voz en la raíz: QUIE-ro. Cambia.', en: 'I want to order ceviche.' },
            { tone: 'blue', label: 'NOSOTROS · fuera de la bota', sentence: '[[Queremos|blue]] pedir ceviche.', idea: 'Golpe de voz al final: que-RE-mos. No cambia.', en: 'We want to order ceviche.' },
          ] },
          { kind: 'table', title: 'Tres pares mínimos · Three minimal pairs', head: ['Con cambio', 'Sin cambio', 'English'], rows: [
            ['Yo [[quiero|orange]] ir.', 'Nosotros [[queremos|blue]] ir.', 'I want / we want to go.'],
            ['Diego [[puede|teal]] pagar.', 'Diego y yo [[podemos|blue]] pagar.', 'Diego can / Diego and I can pay.'],
            ['Ellos [[piden|violet]] pescado.', 'Nosotras [[pedimos|blue]] pescado.', 'They order / we order fish.'],
          ], note: 'El infinitivo no cambia nunca: quiero **pedir**, puedo **pedir**, queremos **pedir**.' },
          { kind: 'decide', title: 'Antes de conjugar, piensa · Before you conjugate', steps: [
            { q: '¿El sujeto es nosotros / nosotras o vosotros / vosotras? (we / you all in Spain)', yes: 'La raíz **no cambia**: queremos, podemos, pedimos.', no: 'next' },
            { q: '¿Es yo, tú, él, ella, usted, ellos, ellas o ustedes?', yes: 'La raíz **cambia**: quiero, puedes, pide, quieren…', no: 'Mira otra vez quién hace la acción: siempre es una de estas personas.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Clara y yo ___ ver las ballenas.', options: ['quieremos', 'quieren', 'queremos'], answer: 2, why: 'Clara y yo = nosotros: fuera de la bota, queremos.', en: 'Clara and I want to see the whales.' },
            { prompt: 'Diego ___ pagar el tour.', options: ['puede', 'pode', 'podemos'], answer: 0, why: 'Él: dentro de la bota, puede.', en: 'Diego can pay for the tour.' },
            { prompt: 'Rosa y su novio ___ arroz con pescado.', options: ['peden', 'piden', 'pedimos'], answer: 1, why: 'Ellos: dentro de la bota, piden.', en: 'Rosa and her boyfriend order rice with fish.' },
            { prompt: 'Tú ___ pagar con tarjeta.', options: ['podemos', 'puedo', 'puedes'], answer: 2, why: 'Tú: puedes.', en: 'You can pay by card.' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: '¿Dentro o fuera de la bota? Inside or outside?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la frase con el error y preguntas: «¿Dentro o fuera de la bota?». Tu alumno responde y después aparece la corrección.', self: 'Lee cada frase, busca el error y toca para ver la corrección.' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Nosotros quieremos comer pescado.', right: 'Nosotros queremos comer pescado.', why: 'Nosotros está fuera de la bota: el golpe de voz va en -RE-, la raíz no cambia. (Nosotros: no stem change.)' },
            { wrong: 'Yo no podo pagar el tour.', right: 'Yo no puedo pagar el tour.', why: 'Yo está dentro de la bota: la o cambia a ue, puedo. (Yo: o → ue.)' },
            { wrong: 'Los turistas peden ceviche.', right: 'Los turistas piden ceviche.', why: 'Ellos está dentro de la bota: la e de pedir cambia a i, piden. (Ellos: e → i.)' },
            { wrong: '¿Quieres comes en el mercado?', right: '¿Quieres comer en el mercado?', why: 'Después de querer o poder, el segundo verbo va en infinitivo. (Querer + infinitive.)' },
            { wrong: 'Clara pide por un jugo.', right: 'Clara pide un jugo.', why: 'Pedir ya significa «ask for»: no lleva «por». (No “por” after pedir.)' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Cuál es correcta?', options: ['Podemos ir mañana.', 'Puedemos ir mañana.', 'Podemos vamos mañana.'], answer: 0, why: 'Nosotros: podemos, sin cambio, + infinitivo: ir.', en: 'Which one is correct?' },
            { prompt: '¿Cuál es correcta?', options: ['Diego pide la cuenta.', 'Diego pide por la cuenta.', 'Diego pede la cuenta.'], answer: 0, why: 'Él: pide (e → i), sin «por».', en: 'Which one is correct?' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno dice tres frases reales de un viaje: qué quiere comer, qué puede pagar y qué pide en un restaurante. Tú repites cada frase bien y tu alumno la repite.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'El desayuno en Puerto López', coach: 'Toca las palabras marcadas. Tap the marked words.',
      steps: [
        { title: 'Clara y Diego deciden · Clara and Diego decide', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Diego. Después, tu alumno toca cada palabra marcada y dice si está dentro o fuera de la bota.', self: 'Lee el diálogo en voz alta. Después toca cada palabra marcada para ver por qué se usa.' } },
          { kind: 'explore', title: '¿Qué hacemos hoy?', setting: 'Sábado, ocho de la mañana. Clara y Diego desayunan en un café cerca de la playa y deciden el plan del día. (Saturday, 8 a.m. Clara and Diego have breakfast in a café near the beach and plan their day.)', lines: [
            { who: 'Diego', text: 'Buenos días. Tengo hambre. ¿Qué [[quieres|orange]] desayunar?', en: 'Good morning. I’m hungry. What do you want for breakfast?' },
            { who: 'Clara', text: '[[Quiero|orange]] un café y fruta. Y tú, ¿qué [[pides|violet]]?', en: 'I want a coffee and some fruit. And you, what are you ordering?' },
            { who: 'Diego', text: 'Yo [[pido|violet]] huevos con pan. Oye, hoy hay un tour para ver ballenas. ¿[[Quieres ir|orange]]?', en: 'I’m having eggs with bread. Hey, there is a whale-watching tour today. Do you want to go?' },
            { who: 'Clara', text: '¡Sí! [[Queremos|blue]] ver ballenas los dos. Pero ¿cuánto cuesta?', en: 'Yes! We both want to see whales. But how much is it?' },
            { who: 'Diego', text: 'Cuarenta dólares por persona. Tenemos cien dólares para hoy y mañana.', en: 'Forty dollars each. We have 100 dollars for today and tomorrow.' },
            { who: 'Clara', text: 'Uf. Entonces [[no puedo pagar|teal]] el tour y un restaurante caro.', en: 'Phew. Then I can’t pay for the tour and an expensive restaurant.' },
            { who: 'Diego', text: 'Tranquila. Después del tour, [[podemos|blue]] comer en el mercado. Es barato.', en: 'Don’t worry. After the tour, we can eat at the market. It’s cheap.' },
            { who: 'Clara', text: 'Buena idea. En el mercado la gente [[pide|violet]] ceviche, ¿no?', en: 'Good idea. At the market people order ceviche, right?' },
            { who: 'Diego', text: 'Sí, y los turistas [[piden|violet]] encocado: pescado con coco. ¿[[Puedes|teal]] reservar el tour?', en: 'Yes, and tourists order encocado: fish in coconut sauce. Can you book the tour?' },
            { who: 'Clara', text: 'Sí, [[puedo|teal]] reservar ahora. Mi amiga Rosa y su novio también [[quieren|orange]] venir.', en: 'Yes, I can book now. My friend Rosa and her boyfriend want to come too.' },
            { who: 'Diego', text: 'Perfecto. Entonces [[pedimos|blue]] el tour para cuatro personas.', en: 'Perfect. Then we’ll ask for the tour for four people.' },
          ], notes: {
            'quieres': 'Diego habla con Clara (tú): **quieres**. Dentro de la bota: e → ie. Después, un infinitivo: desayunar.',
            'Quiero': 'Clara habla de ella (yo): **quiero** + cosas. Dentro de la bota: e → ie.',
            'pides': 'Pedir con tú: **pides**. La e de la raíz cambia a i.',
            'pido': 'Diego (yo) en el café: **pido** huevos. Pedir = to order. Sin «por».',
            'Quieres ir': '**Quieres + infinitivo**: una invitación. «Do you want to go?».',
            'Queremos': 'Clara y Diego = nosotros: **queremos**. Fuera de la bota: la raíz no cambia.',
            'no puedo pagar': '**No puedo + infinitivo**: Clara dice qué no es posible con su dinero. Yo: o → ue.',
            'podemos': 'Nosotros: **podemos**, sin cambio. Una propuesta: «we can…».',
            'pide': '«La gente» es singular, como él o ella: **pide**. Dentro de la bota: e → i.',
            'piden': 'Los turistas = ellos: **piden**. Dentro de la bota: e → i.',
            'Puedes': 'Diego pide un favor a Clara (tú): **¿puedes** + infinitivo?',
            'puedo': 'Clara responde con yo: **puedo** reservar. Una pregunta con tú, una respuesta con yo.',
            'quieren': 'Rosa y su novio = ellos: **quieren**. Dentro de la bota: e → ie.',
            'pedimos': 'Nosotros: **pedimos**, sin cambio. Aquí pedir = ask for (el tour, en la agencia).',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Cuánto cuesta el tour?', options: ['Cuarenta dólares para los dos.', 'Cuarenta dólares por persona.', 'Cien dólares por persona.'], answer: 1, why: '«Cuarenta dólares por persona».', en: 'How much is the tour?' },
            { prompt: '¿Dónde quieren comer después del tour?', options: ['En el hotel.', 'En el mercado, porque es barato.', 'En un restaurante caro.'], answer: 1, why: '«Podemos comer en el mercado. Es barato».', en: 'Where do they want to eat after the tour?' },
            { prompt: '¿Para cuántas personas es el tour?', options: ['Para cuatro: Clara, Diego, Rosa y su novio.', 'Para dos.', 'Para tres.'], answer: 0, why: 'Rosa y su novio también quieren venir: cuatro personas.', en: 'How many people is the tour for?' },
          ] },
        ] },
        { title: 'Ordena las formas · Sort the forms', mascot: '/autoestudio/mascot/noting.webp', blocks: [
          { kind: 'classify', title: '¿Qué cambio? · Which change?', categories: [
            { id: 'ie', label: 'e → ie (querer)', tone: 'orange' },
            { id: 'ue', label: 'o → ue (poder)', tone: 'teal' },
            { id: 'i', label: 'e → i (pedir)', tone: 'violet' },
            { id: 'no', label: 'sin cambio (nosotros)', tone: 'blue' },
          ], items: [
            { text: 'quieres', answer: 'ie', why: 'Tú, de querer: qu**ie**res.' },
            { text: 'pido', answer: 'i', why: 'Yo, de pedir: p**i**do.' },
            { text: 'podemos', answer: 'no', why: 'Nosotros: podemos, sin cambio.' },
            { text: 'puedes', answer: 'ue', why: 'Tú, de poder: p**ue**des.' },
            { text: 'piden', answer: 'i', why: 'Ellos, de pedir: p**i**den.' },
            { text: 'queremos', answer: 'no', why: 'Nosotros: queremos, sin cambio.' },
            { text: 'puedo', answer: 'ue', why: 'Yo, de poder: p**ue**do.' },
            { text: 'quieren', answer: 'ie', why: 'Ellos, de querer: qu**ie**ren.' },
            { text: 'pedimos', answer: 'no', why: 'Nosotros: pedimos, sin cambio.' },
          ] },
          { kind: 'teacher', text: 'Pregunta útil: «¿Por qué Clara dice "quiero" y después "queremos"?». Respuesta esperada: primero habla de ella (yo), después de los dos (nosotros).' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: '¿Quién? ¿Dentro o fuera? Who? Inside or outside?',
      steps: [
        { title: 'La forma correcta · The right form', blocks: [
          { kind: 'choice', items: [
            { context: 'Diego habla de él y de Clara. (Diego and Clara.)', prompt: 'Clara y yo ___ ir a la playa mañana.', options: ['quieremos', 'quieren', 'queremos'], answer: 2, why: 'Clara y yo = nosotros: fuera de la bota, queremos.', en: 'Clara and I want to go to the beach tomorrow.' },
            { context: 'Diego pregunta al camarero. (Diego asks the waiter.)', prompt: '¿___ pagar con tarjeta aquí?', options: ['Puedemos', 'Puedo', 'Podo'], answer: 1, why: 'Yo: la o cambia a ue, puedo.', en: 'Can I pay by card here?' },
            { context: 'En el mercado. (At the market.)', prompt: 'Rosa siempre ___ jugo de mango.', options: ['pide', 'pede', 'pido'], answer: 0, why: 'Ella: la e cambia a i, pide.', en: 'Rosa always orders mango juice.' },
            { context: 'Unos amigos de Diego trabajan hoy. (Diego’s friends work today.)', prompt: 'Mis amigos no ___ venir hoy.', options: ['pueden', 'poden', 'podemos'], answer: 0, why: 'Ellos: la o cambia a ue, pueden.', en: 'My friends can’t come today.' },
            { context: 'Clara pregunta a Diego. (Clara asks Diego.)', prompt: 'Diego, ¿qué ___ hacer esta tarde?', options: ['queres', 'quiere', 'quieres'], answer: 2, why: 'Tú: la e cambia a ie, quieres.', en: 'Diego, what do you want to do this afternoon?' },
            { context: 'Clara habla de los dos. (Clara talks about both of them.)', prompt: 'Nosotros siempre ___ la cuenta al final.', options: ['piden', 'pedimos', 'pidimos'], answer: 1, why: 'Nosotros: fuera de la bota, pedimos.', en: 'We always ask for the bill at the end.' },
          ] },
        ] },
        { title: '¿Cambia o no? · Does it change?', blocks: [
          { kind: 'classify', title: 'Persona + verbo · Person + verb', categories: [
            { id: 'si', label: 'Cambia la raíz (dentro de la bota)', tone: 'orange' },
            { id: 'no', label: 'No cambia (fuera de la bota)', tone: 'blue' },
          ], items: [
            { text: 'yo + poder', answer: 'si', why: 'Yo está dentro: puedo.' },
            { text: 'nosotras + pedir', answer: 'no', why: 'Nosotras está fuera: pedimos.' },
            { text: 'ellas + querer', answer: 'si', why: 'Ellas está dentro: quieren.' },
            { text: 'vosotros + poder (España)', answer: 'no', why: 'Vosotros está fuera: podéis.' },
            { text: 'usted + pedir', answer: 'si', why: 'Usted está dentro: pide.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Nosotros quieremos ver las ballenas.', ok: false, options: ['Nosotros queremos ver las ballenas.', 'Nosotros quieren ver las ballenas.', 'Nosotros quiero ver las ballenas.'], answer: 0, why: 'Nosotros, fuera de la bota: queremos.' },
            { sentence: 'Yo pido un jugo de naranja.', ok: true, why: 'Correcta: yo + pedir, e → i, pido.' },
            { sentence: 'Rosa no pode pagar cuarenta dólares.', ok: false, options: ['Rosa no puede pagar cuarenta dólares.', 'Rosa no podemos pagar cuarenta dólares.', 'Rosa no puedo pagar cuarenta dólares.'], answer: 0, why: 'Ella: la o cambia a ue, puede.' },
            { sentence: 'Los turistas peden pescado con coco.', ok: false, options: ['Los turistas piden pescado con coco.', 'Los turistas pedimos pescado con coco.', 'Los turistas pide pescado con coco.'], answer: 0, why: 'Ellos: la e de pedir cambia a i, piden.' },
            { sentence: '¿Puedes reservar una mesa para cuatro?', ok: true, why: 'Correcta: tú + poder, puedes, + infinitivo.' },
            { sentence: 'Clara quiere come en el mercado.', ok: false, options: ['Clara quiere comer en el mercado.', 'Clara quiere comemos en el mercado.', 'Clara quere comer en el mercado.'], answer: 0, why: 'Después de quiere, el infinitivo: comer.' },
          ] },
        ] },
        { title: 'En el mercado · At the market', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'chat-fill', title: 'La comida después del tour · Lunch after the tour', lines: [
            { who: 'Camarera', text: 'Buenas tardes. ¿Qué ___ tomar ustedes?', options: ['queren', 'quieren', 'queremos'], answer: 1, why: 'Ustedes: dentro de la bota, quieren.' },
            { who: 'Clara', text: 'Yo ___ un jugo de mora, por favor.', options: ['pide', 'pedimos', 'pido'], answer: 2, why: 'Yo: la e cambia a i, pido.' },
            { who: 'Diego', text: 'Y Rosa y yo ___ ceviche.', options: ['piden', 'pedimos', 'pidimos'], answer: 1, why: 'Rosa y yo = nosotros: pedimos, sin cambio.' },
            { who: 'Camarera', text: 'Muy bien. ¿Algo más?' },
            { who: 'Rosa', text: 'No, gracias. ¿___ pagar con tarjeta?', options: ['Podemos', 'Puedemos', 'Pueden'], answer: 0, why: 'Rosa habla del grupo (nosotros): podemos.' },
            { who: 'Camarera', text: 'Sí, ustedes ___ pagar con tarjeta o en efectivo.', options: ['pueden', 'poden', 'podemos'], answer: 0, why: 'Ustedes: la o cambia a ue, pueden.' },
            { who: 'Diego', text: 'Perfecto. Entonces pago yo con tarjeta.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['ver', 'Queremos', 'ballenas', 'las'], accept: ['Queremos ver las ballenas'], en: 'We want to see the whales.' },
            { tiles: ['pagar', 'No', 'mucho', 'puedo'], accept: ['No puedo pagar mucho'], en: 'I can’t pay much.' },
            { tiles: ['siempre', 'Clara', 'un', 'pide', 'café'], accept: ['Clara siempre pide un café', 'Clara pide siempre un café'], en: 'Clara always orders a coffee.' },
          ] },
        ] },
        { title: 'Cambia la persona · Change the person', mascot: '/autoestudio/mascot/writing.webp', blocks: [
          { kind: 'rewrite', title: 'Escribe la frase con otra persona · Write it with another person', items: [
            { prompt: 'Quiero comer en el mercado.', instruction: 'Escribe la frase con nosotros. (we)', accept: ['Queremos comer en el mercado', 'Nosotros queremos comer en el mercado', 'Nosotras queremos comer en el mercado'] },
            { prompt: 'Podemos pagar el tour.', instruction: 'Escribe la frase con yo. (I)', accept: ['Puedo pagar el tour', 'Yo puedo pagar el tour'] },
            { prompt: 'Pedimos sopa de pescado.', instruction: 'Escribe la frase con ellos. (they)', accept: ['Piden sopa de pescado', 'Ellos piden sopa de pescado'] },
          ] },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Un mensaje de voz de Diego', coach: 'Primero escucha sin leer. Listen first, read later.',
      steps: [
        { title: 'Un plan para mañana · A plan for tomorrow', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general. Segunda escucha: tu alumno levanta la mano cada vez que oye una forma de querer, poder o pedir. Después, las preguntas.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Cuenta las formas de querer, poder y pedir que oyes. (Listen once for the gist, then for details.)' } },
          { kind: 'listen', title: 'Un mensaje de voz de Diego', channel: 'MENSAJE DE VOZ · DE DIEGO, DESDE EL PUERTO', src: '/audio/grammar-live/320.mp3',
            before: 'Sábado por la noche, después del tour de las ballenas. Clara está en el hostal y Diego está en el puerto. Diego le deja un mensaje de voz con una idea para mañana. ¿Qué crees que propone? (Diego leaves Clara a voice message with an idea for tomorrow. What do you think he suggests?)',
            gist: { prompt: '¿De qué habla Diego? · What is Diego talking about?', options: ['De un problema con el hostal.', 'De un restaurante caro en el pueblo.', 'De un plan para mañana: un tour en barco a una isla.'], answer: 2, why: '«Tengo una idea para mañana. Hay un tour en barco a la Isla de la Plata».', en: 'What is Diego talking about?' },
            details: [
              { prompt: '¿Cuánto cuesta el tour?', options: ['Cuarenta dólares por persona.', 'Cien dólares.', 'Cuarenta dólares para los dos.'], answer: 0, why: '«Cuesta cuarenta dólares por persona».', en: 'How much is the tour?' },
              { prompt: '¿Qué pide la gente en la playa de la isla?', options: ['Huevos con pan.', 'Jugo de mango.', 'Pescado con arroz.'], answer: 2, why: '«Allí la gente pide pescado con arroz, y no es caro».', en: 'What do people order on the island’s beach?' },
              { prompt: '¿A qué hora quiere Diego ver a Clara en el puerto?', options: ['A las ocho y media.', 'A las nueve.', 'A las ocho.'], answer: 0, why: '«El barco sale a las nueve. ¿Puedes estar aquí a las ocho y media?».', en: 'What time does Diego want to meet Clara at the port?' },
              { prompt: '¿Quién quiere venir también?', options: ['Rosa y su novio.', 'Los amigos de Diego.', 'La camarera del mercado.'], answer: 0, why: '«Rosa y su novio también quieren venir».', en: 'Who else wants to come?' },
            ],
            transcript: 'Hola, Clara. Soy Diego. Estoy en el puerto. Tengo una idea para mañana. Hay un tour en barco a la Isla de la Plata: cuesta cuarenta dólares por persona. ¿[[Quieres|orange]] ir? Yo [[quiero|orange]] ir, pero no [[puedo|teal]] pagar más de cuarenta. En la isla [[podemos|blue]] comer en la playa. Allí la gente [[pide|violet]] pescado con arroz, y no es caro. El barco sale a las nueve. ¿[[Puedes|teal]] estar aquí a las ocho y media? Ah, Rosa y su novio también [[quieren|orange]] venir otra vez. ¿[[Pueden|teal]] venir con nosotros? Bueno, espero tu mensaje. Un abrazo.',
            reply: { teacher: 'Tú eres Diego. Tu alumno es Clara y responde al mensaje: si quiere ir, si puede pagar cuarenta dólares, si puede estar en el puerto a las ocho y media y si Rosa y su novio pueden venir.', self: 'Eres Clara. Responde a Diego en voz alta: «Hola, Diego. Sí, quiero ir… Puedo pagar… Puedo estar… Rosa y su novio pueden…». (Answer as Clara: do you want to go, can you pay, can you be there, can the others come?)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Tu viaje, tus planes', coach: 'Quiero, puedo, pido… ¡y tú? Your plans.',
      steps: [
        { title: 'Planear un viaje · Planning a trip', blocks: [
          { kind: 'guide', text: { teacher: 'Tú eres el compañero o la compañera de viaje y preguntas con tú. Tu alumno responde con frases reales con quiero, puedo y pido. Tú repites su frase bien dicha y sigues con las repreguntas.', self: 'Imagina que planeas un viaje con un amigo. Lee la pregunta, responde en voz alta y después compara con el ejemplo. (Answer aloud, then compare.)' } },
          { kind: 'talk', cards: [
            { q: '¿Qué quieres desayunar en un viaje? · What do you want for breakfast on a trip?', followUps: ['¿Y qué pides en un café? (And what do you order in a café?)', '¿Quieres algo dulce o salado? (Something sweet or savoury?)'], phrases: ['[[Quiero|orange]] … (un café, fruta, pan)', 'En un café, [[pido|violet]] …', 'No [[quiero|orange]] …'], hint: '«Quiero» + cosa. En el café o el restaurante: «pido».', example: 'Quiero un café con leche y fruta. En un café siempre pido pan con queso. No quiero nada dulce.', next: 'Ahora, el restaurante.' },
            { q: 'En un viaje, ¿qué pides en un restaurante? · On a trip, what do you order in a restaurant?', followUps: ['¿Y tu compañero o tu compañera de viaje? (And your travel partner?)', '¿Piden la comida típica? (Do you order the local food?)'], phrases: ['Normalmente [[pido|violet]] …', 'Mi amiga [[pide|violet]] …', 'Al final, [[pedimos|blue]] la cuenta.'], hint: 'Yo pido, él / ella pide, nosotros pedimos (sin cambio).', example: 'Normalmente pido pescado o la comida típica. Mi amiga Ana pide pasta. Al final, pedimos la cuenta.', next: 'Ahora, el plan del día.' },
            { q: 'Mañana es un día libre. ¿Qué quieres hacer? · Tomorrow is a free day. What do you want to do?', followUps: ['¿Qué podemos hacer los dos? (What can we both do?)', '¿Qué no quieres hacer? (What don’t you want to do?)'], phrases: ['[[Quiero|orange]] ir a / ver / visitar …', '[[Podemos|blue]] …', 'No [[quiero|orange]] …'], hint: 'Querer / poder + infinitivo: quiero ver, podemos ir.', example: 'Quiero ver las ballenas. Después podemos comer en el mercado. No quiero estar en el hotel todo el día.', next: 'Ahora, el dinero.' },
            { q: 'Tienes cien dólares para dos días. ¿Qué puedes pagar? · You have 100 dollars for two days. What can you pay for?', followUps: ['¿Puedes pagar un tour de cuarenta dólares? (Can you pay for a 40-dollar tour?)', '¿Qué no puedes pagar? (What can’t you pay for?)'], phrases: ['[[Puedo|teal]] pagar …', 'No [[puedo|teal]] pagar …', '[[Podemos|blue]] comer en …'], hint: 'Puedo (yo), puedes (tú), podemos (nosotros).', example: 'Puedo pagar el tour, pero no puedo pagar un restaurante caro. Podemos comer en el mercado: es barato.', next: 'Ahora, tus amigos.', teacher: 'Este es el punto de la clase: si tu alumno dice «puedemos», tú repites la frase bien: «Ah, ¿podemos comer en el mercado?».' },
            { q: 'Dos amigos también vienen al viaje. ¿Qué quieren hacer ellos? · Two friends are coming on the trip too. What do they want to do?', followUps: ['¿Pueden venir al tour? (Can they come on the tour?)', '¿Qué piden en el restaurante? (What do they order?)'], phrases: ['Mis amigos [[quieren|orange]] …', '[[Pueden|teal]] venir el sábado.', 'Siempre [[piden|violet]] …'], hint: 'Ellos: quieren, pueden, piden. La raíz cambia.', example: 'Mis amigos quieren ir a la playa. Pueden venir el sábado, no el viernes. Siempre piden ceviche.', next: 'Para terminar, el plan completo.' },
            { q: 'Ahora, el plan con tu compañero de viaje: comida, actividad y dinero. · Now make the plan with your travel partner: food, activity and money.', followUps: ['¿Quieres venir tú también? (Do you want to come too?)', '¿Puedes reservar? (Can you book?)', '¿Qué pedimos? (What shall we order?)'], phrases: ['[[Quiero|orange]] … ¿Y tú? ¿[[Quieres|orange]] …?', '[[Podemos|blue]] …', '[[Pedimos|blue]] …'], hint: 'Una propuesta, una pregunta, un precio: quiero, ¿quieres?, podemos, pedimos.', example: 'Quiero ir a la isla mañana. ¿Quieres venir? El tour cuesta cuarenta dólares: puedo pagar eso. Después podemos comer en la playa y pedimos pescado con arroz.', teacher: 'Responde una vez con «no puedo», para que tu alumno proponga otra cosa. Después, cambian los papeles.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno hace las preguntas con «¿Quieres…?», «¿Puedes…?» y «¿Qué pides?», y tú respondes.', self: 'Ahora haz tú las preguntas en voz alta («¿Quieres…?», «¿Puedes…?», «¿Qué pides?») y responde como tu compañero de viaje. (Now ask the questions and answer as your travel partner.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Un mensaje con tu plan', coach: 'Comida, plan, dinero y una pregunta.',
      steps: [
        { title: 'Tu mensaje · Your message', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos las formas con cambio (quiero, puedo, pido) y sin cambio (queremos, podemos, pedimos). Después, tu alumno lee su mensaje en voz alta.', self: 'Escribe tu mensaje y toca «Revisar mi texto». Mira bien quién habla: ¿dentro o fuera de la bota? (Write your message and tap “Revisar mi texto”.)' } },
          { kind: 'write', title: 'Un plan para el fin de semana · A weekend plan', situation: 'Viajas con un amigo o una amiga. Esta noche escribes un mensaje de texto con tu plan para mañana: qué quieres hacer, qué pueden comer y cuánto dinero puedes gastar. (You are travelling with a friend. Tonight you text them your plan for tomorrow: what you want to do, what you can eat and how much you can spend.)', task: [
            'Propón una actividad con «quiero» o «podemos» + infinitivo. (Suggest an activity.)',
            'Di qué comida pides tú o qué piden los dos: «pido», «pedimos». (Say what you order.)',
            'Di cuánto dinero puedes pagar: «puedo pagar…», «no puedo pagar…». (Say what you can pay.)',
            'Haz una pregunta a tu amigo con «¿Quieres…?» o «¿Puedes…?». (Ask your friend.)',
          ], starters: ['Hola, …', 'Tengo un plan para mañana.', 'Quiero ir a …', 'Podemos …', 'Allí la gente pide …', 'Yo puedo pagar …, pero no …', '¿Quieres venir?', '¿Puedes …?', 'Un abrazo.'],
            words: ['quiero', 'quieres', 'podemos', 'puedo', 'puedes', 'pido', 'pedimos', 'pagar', 'barato / caro', 'el tour', 'la playa', 'el mercado', 'dólares'],
            model: 'Hola, Sara. Tengo un plan para mañana. [[Quiero|orange]] ir al mercado de la costa: allí la gente [[pide|violet]] pescado con coco y no es caro. Después [[podemos|blue]] ver las ballenas. El tour cuesta cuarenta dólares. Yo [[puedo|teal]] pagar cuarenta, pero no más. Por la noche [[pedimos|blue]] una pizza grande para los dos. ¿[[Quieres|orange]] venir? ¿[[Puedes|teal]] estar en la estación a las ocho? Un abrazo, Alex.',
            minWords: 35,
            checks: [
              { label: 'Querer: quiero, quieres, queremos… (want)', pattern: '(?<!\\p{L})(?:quiero|quieres|quiere|queremos|quieren)(?!\\p{L})', tip: 'Di qué quieres: «Quiero ir a la playa».' },
              { label: 'Poder: puedo, puedes, podemos… (can)', pattern: '(?<!\\p{L})(?:puedo|puedes|puede|podemos|pueden)(?!\\p{L})', tip: 'Di qué puedes pagar o hacer: «Puedo pagar cuarenta dólares», «Podemos comer en el mercado».' },
              { label: 'Pedir: pido, pide, pedimos… (order)', pattern: '(?<!\\p{L})(?:pido|pides|pide|pedimos|piden)(?!\\p{L})', tip: 'Di qué comida pides: «Pido pescado», «Pedimos una pizza».' },
              { label: 'Una pregunta con ¿quieres…? o ¿puedes…? (ask your friend)', pattern: '(?<!\\p{L})(?:quieres|puedes)(?!\\p{L})', tip: 'Pregunta a tu amigo: «¿Quieres venir?», «¿Puedes reservar?».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})(?:quero|quere|queren|quieremos|podo|pode|poden|puedemos|pedo|pede|peden|pidimos)(?!\\p{L})', why: 'Revisa la raíz: con yo, tú, él y ellos cambia (quiero, puede, piden); con nosotros, no (queremos, podemos, pedimos).' },
              { pattern: '(?<!\\p{L})(?:quiero|quieres|quiere|queremos|quieren|puedo|puedes|puede|podemos|pueden)\\s+(?:voy|vas|vamos|van|pago|pagas|paga|pagamos|pagan|comemos|comen)(?!\\p{L})', why: 'Después de querer o poder va el infinitivo: «quiero ir», «podemos pagar», «queremos comer».' },
              { pattern: '(?<!\\p{L})(?:pido|pides|pide|pedimos|piden)\\s+por(?!\\p{L})', why: 'Pedir no lleva «por»: «pido un café» (I ask for a coffee).' },
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
            { tone: 'orange', label: 'QUERER · e → ie', formula: 'quiero · quieres · quiere · quieren + cosa o infinitivo', example: 'Quiero un café. Rosa quiere venir.', caption: 'lo que quieres', en: 'what you want' },
            { tone: 'teal', label: 'PODER · o → ue', formula: 'puedo · puedes · puede · pueden + infinitivo', example: 'No puedo pagar más de cuarenta.', caption: 'lo que es posible', en: 'what you can do' },
            { tone: 'violet', label: 'PEDIR · e → i', formula: 'pido · pides · pide · piden + cosa (sin «por»)', example: 'Los turistas piden encocado.', caption: 'lo que pides en un restaurante', en: 'what you order or ask for' },
            { tone: 'blue', label: 'NOSOTROS · sin cambio', formula: 'queremos · podemos · pedimos (y vosotros, en España)', example: 'Queremos pedir ceviche.', caption: 'fuera de la bota', en: 'outside the boot: no change' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Primero mira **quién**. Yo, tú, él, ella, usted, ellos y ustedes: la raíz cambia (**quiero, puedes, piden**). Nosotros y vosotros: no cambia (**queremos, podemos, pedimos**). Y después de querer o poder, el infinitivo: **quiero pedir**.', en: 'First look at who. Yo, tú, él, ella, usted, ellos and ustedes: the stem changes (quiero, puedes, piden). Nosotros and vosotros: no change (queremos, podemos, pedimos). And after querer or poder, the infinitive: quiero pedir.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'Rosa y yo ___ ir a la isla.', options: ['quieremos', 'quieren', 'queremos'], answer: 2, why: 'Rosa y yo = nosotros: queremos.', en: 'Rosa and I want to go to the island.' },
            { prompt: 'Lo siento, hoy no ___ salir: estoy cansado.', options: ['podemos', 'puedo', 'podo'], answer: 1, why: 'Yo: o → ue, puedo.', en: 'Sorry, I can’t go out today: I’m tired.' },
            { prompt: 'En el café, Diego siempre ___ huevos.', options: ['pede', 'pedimos', 'pide'], answer: 2, why: 'Él: e → i, pide.', en: 'In the café, Diego always orders eggs.' },
            { prompt: '¿Ustedes ___ pagar en efectivo?', options: ['puedemos', 'pueden', 'poden'], answer: 1, why: 'Ustedes: o → ue, pueden.', en: 'Can you (all) pay in cash?' },
            { prompt: 'Nosotras ___ la cuenta, por favor.', options: ['piden', 'pedimos', 'pidimos'], answer: 1, why: 'Nosotras: sin cambio, pedimos.', en: 'We’d like the bill, please.' },
          ] },
        ] },
        { title: 'Otro viaje · Another trip', mascot: '/brand/mascot/speaking.webp', blocks: [
          { kind: 'rewrite', title: 'Una situación nueva · A new situation', items: [
            { prompt: 'We want to order two coffees.', instruction: 'Escribe la frase en español. (two coffees = dos cafés)', accept: ['Queremos pedir dos cafés', 'Nosotros queremos pedir dos cafés', 'Nosotras queremos pedir dos cafés'] },
            { prompt: 'Can you book the hotel? (tú)', instruction: 'Escribe la pregunta en español, con tú. (to book = reservar)', accept: ['¿Puedes reservar el hotel?', 'Tú puedes reservar el hotel', '¿Tú puedes reservar el hotel?'] },
            { prompt: 'My friends always order fish.', instruction: 'Escribe la frase en español. (fish = pescado)', accept: ['Mis amigos siempre piden pescado', 'Mis amigos piden siempre pescado', 'Mis amigos piden pescado siempre', 'Mis amigas siempre piden pescado', 'Mis amigas piden siempre pescado', 'Mis amigas piden pescado siempre'] },
          ] },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 021 · Variantes tú, vos, usted, ustedes y vosotros', text: 'Ya sabes decir qué quieres, qué puedes y qué pides, y viste que vosotros y vos no cambian la raíz. En la clase 021 ves cuándo se usa tú, vos, usted, ustedes o vosotros, y cómo cambia el verbo con cada uno.', en: 'You can now say what you want, what you can do and what you order, and you saw that vosotros and vos keep the stem. In class 021 you see when to use tú, vos, usted, ustedes or vosotros, and how the verb changes with each one.', href: '/clase/3', label: 'Ir a la clase 021' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Qué quieres hacer este fin de semana, qué puedes pagar y qué pides en tu restaurante favorito?». Respuesta esperada con quiero, puedo y pido, y una frase con nosotros (queremos, podemos o pedimos). Tarea: mandar el mensaje de Escribir a una persona real.' },
        ] },
      ],
    },
  ],
};
