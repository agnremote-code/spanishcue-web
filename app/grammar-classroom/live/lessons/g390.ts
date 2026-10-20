import type { LiveLesson } from '../types';

/**
 * Lesson 390 · B1 · Recomendaciones: sugerir que, aconsejar que (course unit G090).
 * Builds on G088 (present subjunctive forms) and G089 (querer que, esperar que).
 * Scene: Rafael Ortega, from Bogotá, moves to Santiago de Chile in March for a
 * new job. His Chilean friend Carolina Fuentes gives him advice by video call
 * and in a voice message (Chilean voice, tú); his sister Lucía, in Bogotá,
 * asks what everyone says; his new boss gives instructions.
 * Content: (me / te / le / nos / os / les) + recomendar · aconsejar · sugerir ·
 * pedir · decir + que + subjunctive; recomendar / aconsejar / sugerir +
 * infinitive as an alternative (not with querer, not with decir as an order);
 * recomendar + noun; «decir que» + indicative (information) vs + subjunctive
 * (order, advice); pedir (request) vs preguntar (question). Valuations (es
 * importante que) are left for G091; past reports (dijo que + imperfect
 * subjunctive) do not appear. Ampliación: formal and plural notices (les
 * pedimos que, se recomienda + infinitive), vosotros (os aconsejo que) and
 * insistir en que.
 */
export const lesson: LiveLesson = {
  id: 390,
  level: 'B1',
  title: 'Recomendaciones: sugerir que, aconsejar que',
  subtitle: 'Dar consejos y hacer peticiones con «te recomiendo que…», «te pido que…» y contar lo que otra persona dice que hagas.',
  legend: [
    { tone: 'blue', label: 'Consejo o petición + que · te recomiendo que, te pido que (advice, request)' },
    { tone: 'orange', label: 'Subjuntivo · busques, llegues (subjunctive)' },
    { tone: 'teal', label: 'Consejo + infinitivo · te aconsejo traer (infinitive option)' },
    { tone: 'violet', label: 'Información · dice que + indicativo (information)' },
  ],
  optionNotes: {
    'de llevar': '«Recomendar», «aconsejar» y «sugerir» van sin preposición: «te aconsejo llevar» o «te aconsejo que lleves». Nunca «de».',
    pregunto: '«Preguntar» es hacer una pregunta (preguntar si…, preguntar dónde…). Para que otra persona haga algo usamos **pedir**: te pido que…',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Te recomiendo que…', coach: 'Un consejo para otra persona: que + subjuntivo. Advice for someone else.',
      steps: [
        { title: 'Una mudanza a Santiago · A move to Santiago', blocks: [
          { kind: 'lead', text: 'Rafael Ortega vive en Bogotá. En marzo empieza un trabajo nuevo en **Santiago de Chile** y tiene mil preguntas: dónde vivir, qué ropa llevar, cómo es su nueva jefa. Su amiga chilena **Carolina Fuentes** le da consejos. Hoy aprendes a dar consejos y a pedir cosas con **te recomiendo que…**, **te sugiero que…**, **te pido que…**, y a contar lo que otra persona dice.', en: 'Rafael Ortega lives in Bogotá. In March he starts a new job in Santiago, Chile, and he has a thousand questions: where to live, what clothes to take, what his new boss is like. His Chilean friend Carolina Fuentes gives him advice. Today you learn to give advice and make requests with “te recomiendo que…”, “te sugiero que…”, “te pido que…”, and to report what another person says.' },
          { kind: 'guide', text: { teacher: 'Tú lees las tres frases en voz alta y tu alumno dice cuál es una orden directa, cuál es un consejo más suave y cuál solo da información.', self: 'Lee las tres frases en voz alta. ¿Cuál es una orden directa? ¿Cuál es un consejo? ¿Cuál solo informa? (Which is a direct instruction, which is advice, which is information?)' } },
          { kind: 'compare', title: 'Tres frases sobre el departamento · Three sentences about the flat', columns: [
            { tone: 'neutral', label: 'DIRECTO · imperativo', sentence: 'Busca departamento cerca del metro.', idea: 'Una instrucción directa, como en la clase 058.', en: 'Look for a flat near the metro. (direct)' },
            { tone: 'blue', label: 'CONSEJO · que + subjuntivo', sentence: '[[Te recomiendo que|blue]] [[busques|orange]] departamento cerca del metro.', idea: 'Un consejo personal: tú recomiendas, Rafael busca.', en: 'I recommend (that) you look for a flat near the metro.' },
            { tone: 'violet', label: 'INFORMACIÓN · indicativo', sentence: 'Mi hermano [[dice que|violet]] en marzo [[hay|violet]] departamentos libres.', idea: 'Cuenta un hecho. No es un consejo.', en: 'My brother says there are free flats in March.' },
          ] },
          { kind: 'tip', icon: '🌎', title: 'Departamento, piso, apartamento', text: 'En Chile, Argentina o México se dice **departamento**; en España, **piso**; en Colombia, **apartamento**. Carolina es chilena: dice «departamento».', en: 'A flat is “departamento” in Chile, Argentina or Mexico, “piso” in Spain and “apartamento” in Colombia. Carolina is Chilean, so she says “departamento”.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Te recomiendo que busques departamento cerca del metro». ¿Quién va a buscar?', options: ['El hermano de Carolina.', 'Rafael (tú).', 'Carolina (yo).'], answer: 1, why: 'Carolina recomienda; la persona que busca es Rafael: «(tú) busques».', en: 'Who is going to look for a flat?' },
            { prompt: '«Mi hermano dice que en marzo hay departamentos libres». Esta frase…', options: ['hace una petición.', 'da una información.', 'da un consejo.'], answer: 1, why: '«Dice que hay»: cuenta un hecho, en indicativo.', en: 'This sentence…' },
            { prompt: '¿Por qué «busques» y no «buscas»?', options: ['Porque es pasado.', 'Porque «buscas» no existe.', 'Porque la acción es un consejo: todavía no es un hecho.'], answer: 2, why: 'Después de «te recomiendo que» la acción es lo que tú quieres que haga otra persona: subjuntivo.', en: 'Why “busques” and not “buscas”?' },
          ] },
        ] },
        { title: 'La fórmula · The formula', mascot: '/brand/mascot/studying.webp', coach: 'Primer verbo: el consejo. Segundo verbo: en subjuntivo.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'CONSEJO Y PETICIÓN', question: '¿Qué quieres que haga otra persona?', en: 'Advice and requests: what you want another person to do', formula: ['(me · te · le · nos · os · les) + recomendar · aconsejar · sugerir · pedir · decir + que + subjuntivo', 'Te recomiendo que busques… · Le pido que llegue…'],
            meaning: 'El primer verbo dice **qué haces tú**: recomiendas, aconsejas, sugieres, pides o mandas. El segundo verbo es **lo que tiene que hacer la otra persona**: todavía no es un hecho, por eso va en **subjuntivo**. Es la misma lógica de «quiero que vengas» (clase 089).',
            examples: [
              { es: '[[Te recomiendo que|blue]] [[busques|orange]] cerca del metro.', en: 'I recommend you look near the metro.' },
              { es: '[[Te aconsejo que|blue]] [[traigas|orange]] una chaqueta.', en: 'I advise you to bring a jacket.' },
              { es: '[[Te sugiero que|blue]] [[mires|orange]] también otros barrios.', en: 'I suggest you look at other neighbourhoods too.' },
              { es: 'La empresa me [[pide que|blue]] [[mande|orange]] una copia del pasaporte.', en: 'The company asks me to send a copy of my passport.' },
              { es: 'Mi jefa me [[dice que|blue]] [[llegue|orange]] a las nueve.', en: 'My boss tells me to arrive at nine.' },
            ],
            note: 'En inglés decimos «I advise you **to bring**»; en español, con dos personas, lo normal es **que + subjuntivo**: te aconsejo que **traigas**.' },
          { kind: 'table', title: 'Cinco verbos, cinco matices · Five verbs, five nuances', head: ['Verbo', 'Yo', 'Matiz (nuance)', 'Ejemplo'], rows: [
            ['recomendar', 'recom**ie**ndo', 'consejo, muchas veces por experiencia (advice)', 'Te recomiendo que reserves con tiempo.'],
            ['aconsejar', 'aconsejo', 'consejo personal, a veces más serio (advice)', 'Te aconsejo que no firmes nada sin leerlo.'],
            ['sugerir', 'sug**ie**ro', 'una idea suave, una propuesta (suggestion)', 'Te sugiero que mires otro barrio.'],
            ['pedir', 'p**i**do', 'una petición: quieres que lo haga (request)', 'Te pido que me mandes la fecha.'],
            ['decir', 'digo', 'una orden o una instrucción (tell someone to)', 'La jefa me dice que llegue a las nueve.'],
          ], note: 'Cambios en el presente: recomendar y sugerir e → ie; pedir e → i; decir → digo. En el subjuntivo: sugiera, pida, diga.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Te sugiero que ___ el autobús de la noche.', options: ['tomes', 'tomas', 'tomar'], answer: 0, why: 'Después de «te sugiero que»: subjuntivo. Tomar → tomes.', en: 'I suggest you take the night bus.' },
            { prompt: 'Yo te ___ que me llames el domingo.', options: ['pido', 'pide', 'pida'], answer: 0, why: 'Pedir cambia e → i: yo pido. El primer verbo va en indicativo; «pida» es subjuntivo y «pide» es él o ella.', en: 'I ask you to call me on Sunday.' },
            { prompt: 'Carolina le aconseja que ___ una cuenta en un banco chileno.', options: ['abra', 'abre', 'abrir'], answer: 0, why: 'Le aconseja que + subjuntivo: (él) abra.', en: 'Carolina advises him to open an account in a Chilean bank.' },
          ] },
        ] },
        { title: '¿A quién? El pronombre · Who gets the advice?', mascot: '/brand/mascot/standing.webp', coach: 'Me, te, le… dicen quién recibe el consejo.', blocks: [
          { kind: 'lead', text: 'Delante del verbo va casi siempre un pronombre de objeto indirecto (clase 063): dice **a quién** das el consejo. Esa persona es también la que hace la acción en subjuntivo.', en: 'Before the verb there is almost always an indirect object pronoun (class 063): it says who gets the advice. That person is also the one who does the action in the subjunctive.' },
          { kind: 'table', title: 'Pronombre y persona del subjuntivo · Pronoun and person', head: ['Pronombre', 'Ejemplo', 'Quién hace la acción'], rows: [
            ['**me**', 'Carolina **me** recomienda que [[busque|orange]] cerca del metro.', 'yo (I)'],
            ['**te**', '**Te** aconsejo que [[traigas|orange]] una chaqueta.', 'tú (you)'],
            ['**le**', '**Le** sugiero que [[llegue|orange]] temprano, señor Ortega.', 'usted, él, ella'],
            ['**nos**', 'La jefa **nos** pide que [[lleguemos|orange]] a las nueve.', 'nosotros (we)'],
            ['**os**', '**Os** recomiendo que [[probéis|orange]] las empanadas.', 'vosotros (España)'],
            ['**les**', '**Les** recomiendo que [[reserven|orange]] mesa.', 'ustedes, ellos, ellas'],
          ], note: 'Con «a + persona», el pronombre se repite, y es lo más natural: «**Le** recomiendo **a Rafael** que viva cerca del metro».' },
          { kind: 'tip', icon: '💡', title: 'Dónde va el pronombre · Where the pronoun goes', text: 'Delante del verbo conjugado: **te recomiendo**, nunca «recomiendo te». Con infinitivo, detrás y unido: «Quiero **recomendarte** que…» (clase 065).', en: 'Before the conjugated verb: “te recomiendo”, never “recomiendo te”. With an infinitive, after it and joined: “Quiero recomendarte que…” (class 065).' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'La jefa ___ pide que lleguemos puntuales.', options: ['les', 'te', 'nos'], answer: 2, why: '«Lleguemos» es nosotros: la jefa nos pide.', en: 'The boss asks us to arrive on time.' },
            { prompt: 'Señora, ___ recomiendo que pruebe el pastel de choclo.', options: ['le', 'te', 'me'], answer: 0, why: 'Usted (señora, pruebe) → le recomiendo.', en: 'Madam, I recommend you try the pastel de choclo (corn pie).' },
            { prompt: '¿Cuál es correcta? · Which is correct?', options: ['Aconsejo te que descanses.', 'Te aconsejo que te descansas.', 'Te aconsejo que descanses.'], answer: 2, why: 'El pronombre va delante del verbo conjugado, y después de «que», subjuntivo.', en: 'I advise you to rest.' },
          ] },
        ] },
        { title: 'Otra opción: el infinitivo · Another option: the infinitive', mascot: '/brand/mascot/kneeling.webp', coach: 'Recomendar, aconsejar, sugerir: también con infinitivo.', blocks: [
          { kind: 'compare', title: 'El mismo consejo, dos formas · Same advice, two forms', columns: [
            { tone: 'blue', label: 'QUE + SUBJUNTIVO', sentence: '[[Te aconsejo que|blue]] [[traigas|orange]] una chaqueta.', idea: 'La forma más frecuente con todos los verbos.', en: 'I advise you to bring a jacket.' },
            { tone: 'teal', label: 'INFINITIVO', sentence: '[[Te aconsejo traer|teal]] una chaqueta.', idea: 'El mismo significado: el pronombre ya dice quién hace la acción.', en: 'I advise you to bring a jacket.' },
          ] },
          { kind: 'concept', tone: 'teal', label: 'CONSEJO + INFINITIVO', question: '¿Cuándo puedo usar el infinitivo?', en: 'When can I use the infinitive?', formula: ['te · le… + recomendar · aconsejar · sugerir + infinitivo', 'recomendar + infinitivo en general: Recomiendo reservar con tiempo.', 'recomendar + cosa: Te recomiendo este barrio.'],
            meaning: 'Con **recomendar**, **aconsejar** y **sugerir** el infinitivo es posible aunque hay dos personas, porque la persona que recibe el consejo es la que lo hace. **Ojo**: con **querer** no (Quiero **que vengas**, nunca «quiero tú venir»), y con **decir** como orden tampoco (Te digo **que vengas**).',
            examples: [
              { es: '[[Te recomiendo llevar|teal]] efectivo para el primer día.', en: 'I recommend you take cash for the first day.' },
              { es: '[[Le sugiero visitar|teal]] Valparaíso un fin de semana.', en: 'I suggest you visit Valparaíso one weekend.' },
              { es: 'Te recomiendo **este barrio**: es tranquilo y tiene parques.', en: 'I recommend this neighbourhood: it’s quiet and has parks.' },
            ],
            note: 'Con **pedir**, el infinitivo aparece sobre todo en textos formales («Les pedimos guardar silencio»). En la conversación, lo normal es **que + subjuntivo**: te pido que me llames.' },
          { kind: 'tip', icon: '🔑', title: 'Sin «de» · No “de”', text: 'Te recomiendo **llevar** efectivo, te aconsejo **que lleves** efectivo. Nunca «te aconsejo **de** llevar».', en: 'No preposition between the verb and the infinitive or “que”: never “te aconsejo de llevar”.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué frase NO es correcta? · Which sentence is NOT correct?', options: ['Te digo traer el pasaporte.', 'Te recomiendo traer el pasaporte.', 'Te recomiendo que traigas el pasaporte.'], answer: 0, why: 'Con «decir» como orden no hay infinitivo: te digo que traigas el pasaporte.', en: 'Which sentence is NOT correct?' },
            { prompt: 'Carolina quiere que Rafael la ___ en abril.', options: ['visita', 'visite', 'visitar'], answer: 1, why: 'Con «querer» y dos personas, solo que + subjuntivo (clase 089).', en: 'Carolina wants Rafael to visit her in April.' },
            { prompt: 'Te sugiero ___ el abrigo grande en Bogotá.', options: ['de dejar', 'que dejar', 'dejar'], answer: 2, why: 'Sugerir + infinitivo, sin preposición: te sugiero dejar.', en: 'I suggest you leave the big coat in Bogotá.' },
          ] },
        ] },
        { title: 'Decir que: ¿información u orden? · Information or instruction?', mascot: '/brand/mascot/speaking.webp', coach: '¿Cuenta un hecho o transmite un consejo?', blocks: [
          { kind: 'compare', title: 'Dos veces «dice que» · “Dice que” twice', columns: [
            { tone: 'violet', label: 'INFORMACIÓN · indicativo', sentence: 'Carolina [[dice que|violet]] el metro [[es|violet]] rápido.', idea: 'Carolina dijo: «El metro es rápido». Es un hecho.', en: 'Carolina says (that) the metro is fast.' },
            { tone: 'blue', label: 'ORDEN O CONSEJO · subjuntivo', sentence: 'Carolina [[dice que|blue]] [[compre|orange]] una tarjeta de transporte.', idea: 'Carolina dijo: «Compra una tarjeta». Es una instrucción.', en: 'Carolina says I should buy a transport card. / Carolina tells me to buy one.' },
          ] },
          { kind: 'table', title: 'Lo que dice Carolina → lo que cuenta Rafael · What Carolina says → what Rafael reports', head: ['Carolina', 'Rafael a su hermana Lucía'], rows: [
            ['«En marzo hace calor».', 'Carolina dice que en marzo [[hace|violet]] calor.'],
            ['«Trae una chaqueta».', 'Carolina dice que [[traiga|orange]] una chaqueta.'],
            ['«No cambies dinero en el aeropuerto».', 'Carolina dice que no [[cambie|orange]] dinero en el aeropuerto.'],
            ['«Tu jefa es muy puntual».', 'Carolina dice que mi jefa [[es|violet]] muy puntual.'],
          ], note: 'Si la frase original es un **imperativo** (trae, no cambies), al contarla usamos **subjuntivo**. Si es una **información**, indicativo.' },
          { kind: 'decide', title: 'Piensa en una frase con «dice que» · Think of a sentence with “dice que”', steps: [
            { q: '¿Cuenta un hecho, una opinión o una noticia? (Is it a fact or news?)', yes: 'Indicativo: «dice que el metro **es** rápido».', no: 'next' },
            { q: '¿Transmite lo que alguien tiene que hacer: un consejo, una orden, una petición? (Is it what someone should do?)', yes: 'Subjuntivo: «dice que **compre** una tarjeta».', no: 'Revisa la frase: con «decir que» siempre es una de las dos cosas.' },
          ] },
          { kind: 'tip', icon: '💡', title: 'Pedir o preguntar · “Ask” has two verbs', text: '**Pedir** = quieres que alguien haga algo: «Le **pido** que me ayude». **Preguntar** = quieres una información: «Le **pregunto** si hay metro». En inglés las dos son «ask».', en: '“Pedir” = ask someone to do something. “Preguntar” = ask a question. In English both are “ask”.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Lucía: «¿Qué dice Carolina del clima?» Rafael: «Dice que en la noche ___ frío».', options: ['hacer', 'hace', 'haga'], answer: 1, why: 'Es una información sobre el clima: indicativo, hace.', en: '“She says it’s cold at night.”' },
            { prompt: 'Rafael: «Carolina dice que ___ una chaqueta ligera».', options: ['llevo', 'llevar', 'lleve'], answer: 2, why: 'Carolina le dijo «Lleva una chaqueta»: es un consejo, subjuntivo.', en: '“Carolina says I should take a light jacket.”' },
            { prompt: 'Rafael ___ a Carolina si el metro abre los domingos.', options: ['le dice', 'le pregunta', 'le pide'], answer: 1, why: 'Quiere una información («si…»): preguntar.', en: 'Rafael asks Carolina if the metro opens on Sundays.' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: '¿Consejo o información? ¿Que o infinitivo?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la frase con el error. Tu alumno dice dónde está el problema y la dice bien. Después aparece la corrección.', self: 'Lee cada frase, busca el error y dila bien en voz alta. Después toca para ver la corrección.' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Te recomiendo que buscas departamento cerca del metro.', right: 'Te recomiendo que busques departamento cerca del metro.', why: 'Es un consejo: después de «te recomiendo que», subjuntivo. (Subjunctive after advice + que.)' },
            { wrong: 'Te aconsejo de traer una chaqueta.', right: 'Te aconsejo traer una chaqueta. / Te aconsejo que traigas una chaqueta.', why: 'Sin «de»: infinitivo directo o que + subjuntivo. (No “de”.)' },
            { wrong: 'La jefa me dice llegar a las nueve.', right: 'La jefa me dice que llegue a las nueve.', why: '«Decir» como orden no lleva infinitivo: que + subjuntivo. (Decir needs que.)' },
            { wrong: 'Carolina dice que el metro sea muy rápido.', right: 'Carolina dice que el metro es muy rápido.', why: 'Es una información, no un consejo: indicativo. (Information → indicative.)' },
            { wrong: 'Le pregunto a Carolina que me ayude con el contrato.', right: 'Le pido a Carolina que me ayude con el contrato.', why: 'Quieres una acción, no una respuesta: pedir. (Request → pedir.)' },
            { wrong: 'Te sugero que mires Ñuñoa.', right: 'Te sugiero que mires Ñuñoa.', why: 'Sugerir cambia e → ie: sugiero. (Stem change.)' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué frase es correcta? · Which sentence is correct?', options: ['Te pregunto que me esperes en la salida.', 'Te pido que me esperas en la salida.', 'Te pido que me esperes en la salida.'], answer: 2, why: 'Una petición: pedir + que + subjuntivo (esperes).', en: 'I’m asking you to wait for me at the exit.' },
            { prompt: '¿Qué frase es correcta? · Which sentence is correct?', options: ['Mi hermano dice los alquileres subir en marzo.', 'Mi hermano dice que los alquileres suben en marzo.', 'Mi hermano dice que los alquileres suban en marzo.'], answer: 1, why: 'Información sobre los precios: indicativo.', en: 'My brother says rents go up in March.' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno da dos consejos a Rafael (uno con «que» y otro con infinitivo) y cuenta una información con «Carolina dice que…».' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'Una videollamada', coach: 'Toca las expresiones marcadas. Tap the marked expressions.',
      steps: [
        { title: 'Rafael llama a Carolina · Rafael calls Carolina', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Carolina. Después tu alumno toca cada expresión marcada y explica si es un consejo, una petición o una información.', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada: ¿consejo, petición o información?' } },
          { kind: 'explore', title: 'Consejos para Santiago', setting: 'Domingo por la tarde. Rafael, en Bogotá, hace una videollamada a Carolina, en Santiago. Faltan tres semanas para la mudanza. (Sunday afternoon. Rafael, in Bogotá, video-calls Carolina in Santiago. The move is three weeks away.)', lines: [
            { who: 'Rafael', text: '¡Carolina, gracias por llamar! Tengo mil preguntas. Primero: ¿dónde busco departamento?', en: 'Carolina, thanks for calling! I have a thousand questions. First: where should I look for a flat?' },
            { who: 'Carolina', text: '[[Te recomiendo que|blue]] [[busques|orange]] cerca del metro. Así no pierdes horas en el tráfico.', en: 'I recommend you look near the metro. That way you don’t lose hours in traffic.' },
            { who: 'Rafael', text: 'Perfecto. Mi nueva jefa [[dice que|violet]] el barrio de Providencia [[es|violet]] muy tranquilo.', en: 'Perfect. My new boss says the Providencia area is very quiet.' },
            { who: 'Carolina', text: 'Sí, es tranquilo, pero caro. [[Te sugiero mirar|teal]] también Ñuñoa: es más barato y tiene muchos parques.', en: 'Yes, it’s quiet, but expensive. I suggest you also look at Ñuñoa: it’s cheaper and has lots of parks.' },
            { who: 'Rafael', text: '¿Y el clima en marzo? ¿Llevo ropa de invierno?', en: 'And the weather in March? Should I take winter clothes?' },
            { who: 'Carolina', text: 'No, todavía hace calor. Pero [[te aconsejo que|blue]] [[traigas|orange]] una chaqueta: en la noche refresca.', en: 'No, it’s still hot. But I advise you to bring a jacket: it gets cool at night.' },
            { who: 'Rafael', text: 'Anotado. La empresa me [[pide que|blue]] [[mande|orange]] una copia del pasaporte esta semana. ¿Es normal?', en: 'Noted. The company is asking me to send a copy of my passport this week. Is that normal?' },
            { who: 'Carolina', text: 'Sí, es normal. Y otra cosa: tu jefa es muy puntual. [[Te recomiendo llegar|teal]] temprano el primer día.', en: 'Yes, it’s normal. And another thing: your boss is very punctual. I recommend you arrive early on the first day.' },
            { who: 'Rafael', text: 'Uf, gracias. Por cierto, mi mamá [[me dice que|blue]] te [[lleve|orange]] un regalo de Colombia. ¿Qué te gusta?', en: 'Phew, thanks. By the way, my mum is telling me to bring you a present from Colombia. What do you like?' },
            { who: 'Carolina', text: '¡Qué amable! Café, por supuesto. Y ahora [[te pido una cosa: que|blue]] me [[escribas|orange]] la fecha del vuelo. ¡Quiero ir a buscarte al aeropuerto!', en: 'How kind! Coffee, of course. And now I’m asking you for one thing: write me the date of your flight. I want to pick you up at the airport!' },
          ], notes: {
            'Te recomiendo que': 'Un **consejo** de Carolina para Rafael: te (a ti) + recomiendo + que.',
            busques: 'Subjuntivo de **buscar**: c → qu delante de e (busque, busques).',
            'dice que': '**Información**: la jefa cuenta cómo es el barrio. Por eso, indicativo.',
            es: 'Indicativo: describe un hecho, no es un consejo.',
            'Te sugiero mirar': 'Sugerir + **infinitivo**: es igual que «te sugiero que mires». Sugerir: e → ie, sugiero.',
            'te aconsejo que': 'Consejo personal: aconsejar + que + subjuntivo.',
            traigas: 'Subjuntivo de **traer**: traigo → traig- → traigas.',
            'pide que': 'Una **petición** de la empresa: pedir (e → i) + que + subjuntivo.',
            mande: 'Subjuntivo de **mandar** para yo: (que yo) mande.',
            'Te recomiendo llegar': 'Recomendar + **infinitivo**: el mismo consejo que «te recomiendo que llegues».',
            'me dice que': 'Aquí «decir» es una **orden** o un encargo de la mamá: por eso, subjuntivo. Compara con «dice que el barrio es tranquilo».',
            lleve: 'Subjuntivo de **llevar** para yo: mi mamá me dice que (yo) lleve.',
            'te pido una cosa: que': 'Una **petición** en dos partes, muy frecuente en la conversación: «te pido una cosa: que me escribas…». Después de «que», subjuntivo.',
            escribas: 'Subjuntivo de **escribir**: escriba, escribas.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Qué barrio le sugiere Carolina?', options: ['Providencia, porque es tranquilo.', 'El centro, porque está cerca del trabajo.', 'Ñuñoa, porque es más barato y tiene parques.'], answer: 2, why: '«Te sugiero mirar también Ñuñoa: es más barato y tiene muchos parques».', en: 'Which area does Carolina suggest?' },
            { prompt: '¿Qué le pide la empresa a Rafael?', options: ['Una copia del pasaporte.', 'Llegar el lunes a las ocho.', 'Un regalo de Colombia.'], answer: 0, why: '«La empresa me pide que mande una copia del pasaporte».', en: 'What does the company ask Rafael for?' },
            { prompt: '«Mi mamá me dice que te lleve un regalo». ¿Es información o un encargo?', options: ['Una información sobre la mamá.', 'Una pregunta.', 'Un encargo: la mamá quiere que Rafael lo haga.'], answer: 2, why: 'Subjuntivo (lleve): es lo que Rafael tiene que hacer.', en: 'Is it information or an errand Rafael must do?' },
          ] },
        ] },
        { title: 'Las notas de Rafael · Rafael’s notes', mascot: '/autoestudio/mascot/noting.webp', blocks: [
          { kind: 'lead', text: 'Después de la llamada, Rafael escribe notas en su teléfono. ¿Cada nota es un consejo con «que», un consejo con infinitivo o una información?', en: 'After the call, Rafael writes notes on his phone. Is each note advice with “que”, advice with an infinitive or information?' },
          { kind: 'classify', title: 'Clasifica las notas · Sort the notes', categories: [
            { id: 'que', label: 'CONSEJO · que + subjuntivo', tone: 'blue' },
            { id: 'inf', label: 'CONSEJO · infinitivo', tone: 'teal' },
            { id: 'info', label: 'INFORMACIÓN · indicativo', tone: 'violet' },
          ], items: [
            { text: 'Carolina me sugiere que abra una cuenta en un banco chileno.', answer: 'que', why: 'Sugiere que + subjuntivo (abra).' },
            { text: 'Carolina me recomienda probar las empanadas de queso.', answer: 'inf', why: 'Recomienda + infinitivo (probar).' },
            { text: 'Carolina dice que el metro es rápido y barato.', answer: 'info', why: 'Un hecho sobre el metro: indicativo.' },
            { text: 'Me aconseja no cambiar dinero en el aeropuerto.', answer: 'inf', why: 'Aconseja + infinitivo negativo (no cambiar).' },
            { text: 'Mamá me pide que la llame todos los domingos.', answer: 'que', why: 'Una petición: pide que + subjuntivo (llame).' },
            { text: 'La jefa dice que el equipo tiene ocho personas.', answer: 'info', why: 'Información sobre el equipo: indicativo.' },
          ] },
          { kind: 'teacher', text: 'Pregunta útil: «¿Alguien tiene que hacer algo?». Si sí, consejo (que + subjuntivo o infinitivo). Si no, información.' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: '¿Consejo, petición o información? Advice, request or information?',
      steps: [
        { title: 'Elige la forma · Choose the form', blocks: [
          { kind: 'choice', items: [
            { context: 'Rafael pregunta por el supermercado. (Rafael asks about the supermarket.)', prompt: 'Carolina: «Te recomiendo que ___ los sábados temprano: hay menos gente».', options: ['vayas', 'vas', 'ir'], answer: 0, why: 'Después de «te recomiendo que»: subjuntivo de ir, vayas. Sin «que» sería «te recomiendo ir».', en: '“I recommend you go early on Saturdays: there are fewer people.”' },
            { context: 'Un correo de la empresa. (An email from the company.)', prompt: 'La empresa le pide a Rafael que ___ el contrato antes del lunes.', options: ['firma', 'firmar', 'firme'], answer: 2, why: 'Pedir que + subjuntivo: firme.', en: 'The company asks Rafael to sign the contract before Monday.' },
            { context: 'Rafael habla con su hermana Lucía. (Rafael talks to his sister Lucía.)', prompt: '«Carolina dice que en Santiago ___ muchos parques».', options: ['haber', 'hay', 'haya'], answer: 1, why: 'Es una información sobre la ciudad: indicativo, hay.', en: '“Carolina says there are lots of parks in Santiago.”' },
            { context: 'Un plan para el primer fin de semana. (A plan for the first weekend.)', prompt: 'Carolina le sugiere que ___ el barrio en bicicleta.', options: ['conocer', 'conozca', 'conoce'], answer: 1, why: 'Sugiere que + subjuntivo: conozco → conozc- → conozca.', en: 'Carolina suggests he get to know the area by bike.' },
            { context: 'La jefa habla con el equipo nuevo. (The boss talks to the new team.)', prompt: '«___ que lleguen a las nueve en punto».', options: ['Les pregunto', 'Les pregunta', 'Les pido'], answer: 2, why: 'Quiere una acción, no una respuesta: pedir.', en: '“I’m asking you to arrive at nine sharp.”' },
            { context: 'La maleta de Rafael. (Rafael’s suitcase.)', prompt: 'Carolina: «Te aconsejo ___ el abrigo grande en Bogotá».', options: ['que dejas', 'de dejar', 'dejar'], answer: 2, why: 'Aconsejar + infinitivo, sin preposición. Con «que» sería «que dejes».', en: '“I advise you to leave the big coat in Bogotá.”' },
          ] },
        ] },
        { title: '¿Información u orden? · Information or instruction?', blocks: [
          { kind: 'classify', title: 'Rafael cuenta lo que dicen todos · Rafael reports what everyone says', categories: [
            { id: 'info', label: 'INFORMACIÓN · dice que + indicativo', tone: 'violet' },
            { id: 'orden', label: 'CONSEJO U ORDEN · dice que + subjuntivo', tone: 'blue' },
          ], items: [
            { text: 'Carolina dice que no cambie dinero en el aeropuerto.', answer: 'orden', why: 'Carolina dijo «No cambies dinero»: un consejo (cambie).' },
            { text: 'La jefa dice que empiezo el 3 de marzo.', answer: 'info', why: 'Una fecha, un hecho: indicativo (empiezo).' },
            { text: 'La jefa dice que traiga mi título original.', answer: 'orden', why: 'Una instrucción: subjuntivo (traiga).' },
            { text: 'El hermano de Carolina dice que los alquileres suben en marzo.', answer: 'info', why: 'Información sobre los precios: indicativo (suben).' },
            { text: 'Mamá dice que llame a la abuela antes del viaje.', answer: 'orden', why: 'Un encargo de mamá: subjuntivo (llame).' },
          ] },
        ] },
        { title: 'Corrige las frases · Correct the sentences', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Te recomiendo que pruebes las empanadas de queso.', ok: true, why: 'Correcta: te recomiendo que + subjuntivo (pruebes).' },
            { sentence: 'Carolina me aconseja que compro una tarjeta de transporte.', ok: false, options: ['Carolina me aconseja que compre una tarjeta de transporte.', 'Carolina me aconseja que comprar una tarjeta de transporte.', 'Carolina me aconseja de comprar una tarjeta de transporte.'], answer: 0, why: 'Es un consejo: aconseja que + subjuntivo (compre).' },
            { sentence: 'La jefa nos dice llegar temprano el lunes.', ok: false, options: ['La jefa nos dice que llegar temprano el lunes.', 'La jefa nos dice llegamos temprano el lunes.', 'La jefa nos dice que lleguemos temprano el lunes.'], answer: 2, why: '«Decir» como orden: que + subjuntivo (lleguemos). Sin infinitivo.' },
            { sentence: 'Mi hermano dice que Santiago es una ciudad cara.', ok: true, why: 'Correcta: es una información, indicativo (es).' },
            { sentence: 'Le pregunto a Carolina que me recomiende un barrio.', ok: false, options: ['Le pido a Carolina que me recomiende un barrio.', 'Le pido a Carolina que me recomienda un barrio.', 'Le pregunto a Carolina que me recomienda un barrio.'], answer: 0, why: 'Quiere una acción de Carolina: pedir + que + subjuntivo (recomiende).' },
          ] },
        ] },
        { title: 'Rafael y Lucía · Rafael and Lucía', blocks: [
          { kind: 'chat-fill', title: 'Lucía pregunta por los consejos · Lucía asks about the advice', lines: [
            { who: 'Lucía', text: '¿Y qué te dijo Carolina? ¡Cuéntame todo!' },
            { who: 'Rafael', text: 'Muchas cosas. Primero, me recomienda que ___ un departamento cerca del metro.', options: ['busco', 'buscar', 'busque'], answer: 2, why: 'Me recomienda que + subjuntivo para yo: busque.' },
            { who: 'Lucía', text: '¿Y el clima? ¿Qué dice?' },
            { who: 'Rafael', text: 'Dice que en marzo todavía ___ calor.', options: ['hacer', 'hace', 'haga'], answer: 1, why: 'Información sobre el clima: indicativo (hace).' },
            { who: 'Lucía', text: 'Entonces no necesitas el abrigo grande.' },
            { who: 'Rafael', text: 'No, pero me aconseja ___ una chaqueta para la noche.', options: ['llevar', 'que llevo', 'de llevar'], answer: 0, why: 'Aconsejar + infinitivo, sin «de». Con «que» sería «que lleve».' },
            { who: 'Lucía', text: '¿Y mamá? Ya sabes que siempre tiene opiniones.' },
            { who: 'Rafael', text: 'Mamá me pide que la ___ todos los domingos.', options: ['llame', 'llamo', 'llamar'], answer: 0, why: 'Una petición: pide que + subjuntivo (llame).' },
            { who: 'Lucía', text: 'Y yo te pido que me ___ fotos de las montañas.', options: ['mandes', 'mandas', 'mandar'], answer: 0, why: 'Te pido que + subjuntivo para tú: mandes.' },
            { who: 'Rafael', text: '¡Prometido!' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['recomiendo', 'reserves', 'Te', 'tiempo.', 'que', 'con'], accept: ['Te recomiendo que reserves con tiempo.'], en: 'I recommend you book in good time.' },
            { tiles: ['sugiere', 'Valparaíso.', 'Carolina', 'visitar', 'me'], accept: ['Carolina me sugiere visitar Valparaíso.'], en: 'Carolina suggests I visit Valparaíso.' },
            { tiles: ['nos', 'que', 'La', 'lleguemos', 'jefa', 'puntuales.', 'pide'], accept: ['La jefa nos pide que lleguemos puntuales.', 'Nos pide la jefa que lleguemos puntuales.'], en: 'The boss asks us to arrive on time.' },
          ] },
        ] },
        { title: 'Transforma · Transform', blocks: [
          { kind: 'rewrite', title: 'Del imperativo al consejo y al relato · From instruction to advice and report', items: [
            { prompt: 'Carolina: «Compra una tarjeta de transporte en el aeropuerto».', instruction: 'Empieza con «Te recomiendo que…». (Start with “Te recomiendo que…”.)', accept: ['Te recomiendo que compres una tarjeta de transporte en el aeropuerto.'] },
            { prompt: 'La jefa a Rafael: «Trae tu pasaporte el primer día».', instruction: 'Rafael se lo cuenta a Lucía: «La jefa me dice que…». (Rafael reports it to Lucía.)', accept: ['La jefa me dice que traiga mi pasaporte el primer día.', 'La jefa me dice que traiga el pasaporte el primer día.'] },
            { prompt: 'Te recomiendo que pruebes el pastel de choclo.', instruction: 'Di lo mismo con infinitivo. (Say the same with the infinitive.)', accept: ['Te recomiendo probar el pastel de choclo.'] },
            { prompt: 'Carolina: «En marzo hace calor».', instruction: 'Rafael se lo cuenta a Lucía: «Carolina dice que…». (Rafael reports it.)', accept: ['Carolina dice que en marzo hace calor.', 'Carolina dice que hace calor en marzo.'] },
            { prompt: 'Rafael a Carolina: «¿Me ayudas con el contrato, por favor?».', instruction: 'Cuéntalo con «Rafael le pide a Carolina que…». (Report the request.)', accept: ['Rafael le pide a Carolina que lo ayude con el contrato.', 'Rafael le pide a Carolina que le ayude con el contrato.'] },
          ] },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Un audio de Carolina', coach: 'Primero escucha sin leer. Listen first, read later.',
      steps: [
        { title: 'Carolina manda un mensaje de voz · Carolina sends a voice message', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: la idea general. Segunda escucha: tu alumno levanta la mano cada vez que oye un consejo o una petición. Después, las preguntas.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Cuenta los consejos y las peticiones. (Listen once for the gist, once for the details.)' } },
          { kind: 'listen', title: 'Un audio de Carolina', channel: 'MENSAJE DE VOZ · CAROLINA, DESDE SANTIAGO', src: '/audio/grammar-live/390.mp3',
            before: 'Carolina responde a las preguntas de Rafael con un mensaje de voz. ¿Sobre qué temas crees que da consejos? (Carolina answers Rafael’s questions in a voice message. What topics do you think she gives advice on?)',
            gist: { prompt: '¿Para qué manda Carolina el audio?', options: ['Para decir que no puede ir al aeropuerto.', 'Para dar consejos sobre la mudanza y hacer una petición.', 'Para contar su fin de semana.'], answer: 1, why: 'Habla del departamento, del clima y del trabajo, y le pide la fecha del vuelo.', en: 'Why does Carolina send the message?' },
            details: [
              { prompt: '¿Por qué le recomienda vivir cerca del metro?', options: ['Por el tráfico de la tarde.', 'Porque los departamentos son más baratos.', 'Porque la jefa vive allí.'], answer: 0, why: '«…porque por la tarde el tráfico es terrible».', en: 'Why does she recommend living near the metro?' },
              { prompt: '¿Qué dice el hermano de Carolina?', options: ['Que en marzo hay muchos departamentos libres.', 'Que Rafael busque departamento en abril.', 'Que los departamentos son muy caros.'], answer: 0, why: '«Mi hermano dice que en marzo hay muchos departamentos libres»: una información.', en: 'What does Carolina’s brother say?' },
              { prompt: '¿Qué ropa le aconseja traer?', options: ['Una chaqueta ligera.', 'El abrigo grande.', 'Ropa de invierno.'], answer: 0, why: '«Te aconsejo traer una chaqueta ligera, no el abrigo grande».', en: 'What clothes does she advise him to bring?' },
              { prompt: '¿Qué le pide Carolina a Rafael?', options: ['Que le lleve café.', 'Que le mande la fecha del vuelo.', 'Que llegue temprano al aeropuerto.'], answer: 1, why: '«Te pido una cosa: que me mandes la fecha del vuelo esta semana».', en: 'What does Carolina ask Rafael to do?' },
              { prompt: '«Mi mamá dice que vengas a almorzar». La mamá…', options: ['invita a Rafael: quiere que vaya.', 'informa de que Rafael va a almorzar.', 'pregunta si Rafael almuerza.'], answer: 0, why: 'Subjuntivo (vengas): es una invitación, algo que Rafael tiene que hacer.', en: '“My mum says you should come for lunch.” The mum…' },
            ],
            transcript: 'Hola, Rafa, soy Carolina. Ya pensé en tus preguntas, así que te mando un audio con todo. Primero, el departamento: [[te recomiendo que|blue]] [[busques|orange]] algo cerca de una estación de metro, porque por la tarde el tráfico es terrible. Mi hermano [[dice que|violet]] en marzo [[hay|violet]] muchos departamentos libres, así que tranquilo. Segundo, el clima: en marzo todavía hace calor de día, pero en la noche refresca bastante. [[Te aconsejo traer|teal]] una chaqueta ligera, no el abrigo grande. Tercero, el trabajo: tu nueva jefa es muy puntual, así que [[te sugiero que|blue]] [[llegues|orange]] un poco antes el primer día. Y [[te pido una cosa: que|blue]] me [[mandes|orange]] la fecha del vuelo esta semana. ¡Quiero ir a buscarte al aeropuerto! Ah, y mi mamá [[dice que|blue]] [[vengas|orange]] a almorzar a la casa el primer domingo. No le puedes decir que no. ¡Un abrazo!',
            reply: { teacher: 'Tú eres Carolina. Tu alumno responde como Rafael: da las gracias, cuenta qué consejo va a seguir y le pide algo a Carolina con «te pido que…».', self: 'Responde a Carolina en voz alta como Rafael: «Gracias, Carolina. Voy a… Te pido que…». (Answer Carolina aloud as Rafael.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Consejos para llegar bien', coach: 'Da consejos a otra persona. Give someone advice.',
      steps: [
        { title: 'Un amigo viene a tu ciudad · A friend is coming to your city', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces de amigo que se muda a la ciudad de tu alumno y haces las preguntas. Tu alumno da consejos con verbos distintos. Si falta el subjuntivo, tú repites la frase bien y siguen.', self: 'Lee la pregunta y responde en voz alta. Usa verbos distintos: recomendar, aconsejar, sugerir, pedir. (Read the question and answer aloud.)' } },
          { kind: 'talk', cards: [
            { q: 'Un amigo se muda a tu ciudad. ¿Dónde le recomiendas vivir? · A friend is moving to your city. Where do you recommend he lives?', followUps: ['¿Por qué ese barrio? (Why that area?)', '¿Qué barrio no le recomiendas? (Which area don’t you recommend?)'], phrases: ['[[Te recomiendo que|blue]] [[vivas|orange]] en…', '[[Te sugiero mirar|teal]] también…', 'Te recomiendo **ese barrio** porque…'], hint: 'Un consejo con «que» + subjuntivo y otro con infinitivo.', example: 'Te recomiendo que vivas en el centro, porque todo está cerca. También te sugiero mirar los barrios del norte: son más tranquilos.', next: 'Ahora, la ropa.' },
            { q: '¿Qué ropa le aconsejas traer? Depende de la estación · What clothes do you advise him to bring?', followUps: ['¿Y si llega en invierno? (And if he arrives in winter?)', '¿Necesita paraguas? (Does he need an umbrella?)'], phrases: ['[[Te aconsejo que|blue]] [[traigas|orange]]…', '[[Te aconsejo traer|teal]]…', 'En verano hace… / En invierno hace…'], hint: 'Mezcla información (hace frío) y consejo (te aconsejo que traigas…).', example: 'En invierno hace mucho frío, así que te aconsejo que traigas un buen abrigo. En verano llueve mucho: te aconsejo traer un paraguas.', next: 'Ahora, la comida.' },
            { q: '¿Qué platos le recomiendas probar y dónde? · Which dishes do you recommend he tries, and where?', followUps: ['¿Y para un café? (And for a coffee?)', '¿Hay algo que no le recomiendas? (Anything you don’t recommend?)'], phrases: ['Te recomiendo **el / la…**', '[[Te recomiendo probar|teal]]…', '[[Te sugiero que|blue]] [[vayas|orange]] al mercado…'], hint: 'Recomendar + cosa, + infinitivo o + que: usa las tres formas.', example: 'Te recomiendo la sopa de la casa. También te recomiendo probar el pan del mercado, y te sugiero que vayas temprano, porque a mediodía hay mucha gente.', next: 'Ahora, el trabajo.' },
            { q: 'Su primer día de trabajo: ¿qué le sugieres? · His first day at work: what do you suggest?', followUps: ['¿A qué hora le aconsejas salir de casa? (When should he leave home?)', '¿Qué le sugieres preguntar? (What should he ask?)'], phrases: ['[[Te sugiero que|blue]] [[llegues|orange]]…', '[[Te aconsejo que|blue]] no…', 'Te recomiendo **preguntar**…'], hint: 'Un consejo negativo también: «te aconsejo que no…».', example: 'Te sugiero que llegues diez minutos antes. Te aconsejo que no tomes el autobús de las ocho, porque siempre va lleno. Y te recomiendo preguntar mucho la primera semana.', next: 'Ahora, lo que dicen otras personas.' },
            { q: 'Cuando viajas, ¿qué te dice tu familia? ¿Y qué información te dan? · When you travel, what does your family tell you?', followUps: ['¿Quién te da más consejos? (Who gives you more advice?)', '¿Sigues sus consejos? (Do you follow it?)'], phrases: ['Mi madre [[me dice que|blue]] [[llame|orange]]…', 'Mi padre [[dice que|violet]] el viaje [[es|violet]]…', 'Mi hermana me pide que…'], hint: 'Una orden (dice que + subjuntivo) y una información (dice que + indicativo).', example: 'Mi madre me dice que la llame todos los días. Mi padre dice que la comida del aeropuerto es muy cara y me pide que lleve algo de comer.', next: 'Para terminar, tus peticiones.' },
            { q: 'Tú también necesitas algo de tu amigo. ¿Qué le pides? · You need something from your friend too. What do you ask?', followUps: ['¿Y si no puede? (And if he can’t?)', '¿Qué le preguntas? (What do you ask him?)'], phrases: ['[[Te pido que|blue]] me [[mandes|orange]]…', 'Te pido una cosa: que…', 'Te pregunto si…'], hint: 'Una petición con «pedir» y una pregunta con «preguntar si…».', example: 'Te pido que me mandes la fecha de tu vuelo. Y te pregunto una cosa: ¿te quedas en mi casa la primera semana?', teacher: 'Cuando tu alumno usa «pedir» y «preguntar» bien, tú das una petición tuya y tu alumno responde.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno se muda a tu ciudad y tú le das consejos. Tu alumno los cuenta después con «Me recomiendas que…», «Me dices que…».', self: 'Ahora imagina que tú te mudas a otra ciudad. Escribe tres consejos que te da un amigo y cuéntalos: «Mi amigo me recomienda que…». (Now you are moving: report three pieces of advice.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Un correo con consejos', coach: 'Consejos claros y variados. Clear, varied advice.',
      steps: [
        { title: 'Un correo para Marcos · An email for Marcos', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos cada consejo: ¿hay «que» + subjuntivo, infinitivo o información? Después, tu alumno lee el correo en voz alta.', self: 'Escribe tu correo y toca «Revisar mi texto». Mira cada consejo: ¿subjuntivo después de «que»? (Write your email and tap “Revisar mi texto”.)' } },
          { kind: 'write', title: 'Consejos para un amigo · Advice for a friend', situation: 'Eres Rafael y ya vives en Santiago. Tu amigo Marcos, de Bogotá, viene a trabajar a Santiago en julio, en invierno. Escríbele un correo con consejos. También puedes escribir sobre tu ciudad a un amigo que va a vivir allí. (You are Rafael, now living in Santiago. Your friend Marcos is moving there in July, in winter. Write him an email with advice, or write about your own city.)', task: [
            'Saluda y explica por qué escribes. (Greet him and say why you are writing.)',
            'Da tres consejos con verbos distintos: te recomiendo que, te aconsejo que, te sugiero que… (Three pieces of advice, different verbs.)',
            'Da un consejo con infinitivo: te recomiendo probar… (One with the infinitive.)',
            'Cuenta lo que dice otra persona: una información o un consejo con «dice que». (Report what someone else says.)',
            'Termina con una petición: te pido que… (End with a request.)',
          ], starters: ['Hola, Marcos:', 'Te escribo unos consejos para…', 'Primero, te recomiendo que…', 'Te aconsejo traer…', 'En el trabajo, te sugiero que…', '… dice que…', 'Y te pido una cosa:', 'Un abrazo,'],
            words: ['te recomiendo que', 'te aconsejo que', 'te sugiero que', 'te pido que', 'dice que', 'busques', 'traigas', 'llegues', 'pruebes', 'mandes', 'vayas', 'tengas'],
            model: 'Hola, Marcos: ¡Qué buena noticia! Te escribo unos consejos para tu llegada. Primero, te recomiendo que busques departamento cerca del metro, porque por la tarde el tráfico es terrible. En julio es invierno y por la mañana hace mucho frío, así que te aconsejo traer un buen abrigo. En el trabajo, te sugiero que llegues temprano la primera semana: aquí la gente es muy puntual. Carolina dice que el mercado del centro es muy bonito y dice que pruebes el pastel de choclo. Y te pido una cosa: que me mandes la fecha de tu vuelo, porque quiero ir a buscarte al aeropuerto. Un abrazo, Rafael',
            minWords: 80,
            checks: [
              { label: 'Un consejo con «que» (te recomiendo que, te aconsejo que, te sugiero que…)', pattern: '(?<!\\p{L})(?:recomiendo|aconsejo|sugiero|recomienda|aconseja|sugiere)\\s+que(?!\\p{L})', tip: 'Escribe, por ejemplo: «te recomiendo que busques departamento cerca del metro».' },
              { label: 'Un consejo con infinitivo (te aconsejo traer…)', pattern: '(?<!\\p{L})(?:recomiendo|aconsejo|sugiero)\\s+(?:no\\s+)?\\p{L}+(?:ar|er|ir)(?!\\p{L})', tip: 'Escribe, por ejemplo: «te aconsejo traer un buen abrigo».' },
              { label: 'Lo que dice otra persona (dice que…)', pattern: '(?<!\\p{L})dice\\s+que(?!\\p{L})', tip: 'Escribe, por ejemplo: «Carolina dice que el mercado es muy bonito».' },
              { label: 'Una petición con «pido» (te pido que, te pido una cosa…)', pattern: '(?<!\\p{L})pido(?!\\p{L})', tip: 'Escribe, por ejemplo: «te pido que me mandes la fecha de tu vuelo».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})(?:recomiendo|aconsejo|sugiero|recomienda|aconseja|sugiere)\\s+de\\s', why: 'Sin «de»: «te aconsejo traer» o «te aconsejo que traigas».' },
              { pattern: '(?<!\\p{L})sugero(?!\\p{L})', why: 'Sugerir cambia e → ie: «sugiero».' },
              { pattern: '(?<!\\p{L})(?:recomiendo|aconsejo|sugiero|pido)\\s+que\\s+(?:buscas|traes|llegas|pruebas|mandas|vas|tienes|vives|compras|llevas)(?!\\p{L})', why: 'Después de «te recomiendo / aconsejo / sugiero / pido que», el verbo va en subjuntivo: busques, traigas, llegues, pruebes, mandes…' },
              { pattern: '(?<!\\p{L})(?:pregunto|pregunta)\\s+que(?!\\p{L})', why: 'Para pedir una acción se usa «pedir»: «te pido que…». «Preguntar» es para preguntas: «te pregunto si…».' },
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
            { tone: 'blue', label: 'CONSEJO · PETICIÓN', formula: 'te / le… + recomendar · aconsejar · sugerir · pedir + que + subjuntivo', example: 'Te recomiendo que busques cerca del metro.', caption: 'otra persona hace la acción', en: 'Advice or request + que + subjunctive' },
            { tone: 'teal', label: 'CON INFINITIVO', formula: 'te recomiendo · te aconsejo · te sugiero + infinitivo', example: 'Te aconsejo traer una chaqueta.', caption: 'mismo significado; no con querer ni con decir', en: 'Same advice with the infinitive (not with querer or decir)' },
            { tone: 'blue', label: 'DECIR QUE · ORDEN', formula: 'dice que + subjuntivo', example: 'La jefa me dice que llegue a las nueve.', caption: 'alguien tiene que hacer algo', en: 'Decir que + subjunctive: an instruction' },
            { tone: 'violet', label: 'DECIR QUE · INFORMACIÓN', formula: 'dice que + indicativo', example: 'Carolina dice que el metro es rápido.', caption: 'un hecho, una noticia', en: 'Decir que + indicative: information' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Pregúntate: **¿alguien tiene que hacer algo?** Si sí, consejo o petición: **que + subjuntivo** (o infinitivo con recomendar, aconsejar, sugerir). Si no, información: **indicativo**. Y para pedir una acción, **pedir**, no «preguntar».', en: 'Ask yourself: does someone have to do something? If yes, advice or request: que + subjunctive (or the infinitive with recomendar, aconsejar, sugerir). If not, information: indicative. And to ask for an action, use “pedir”, not “preguntar”.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/portrait.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'Te sugiero que ___ el metro, no el taxi.', options: ['tomes', 'tomas', 'tomar'], answer: 0, why: 'Sugiero que + subjuntivo: tomes.' },
            { prompt: 'Mi hermano dice que el museo ___ gratis los domingos.', options: ['sea', 'ser', 'es'], answer: 2, why: 'Una información: indicativo.' },
            { prompt: 'El médico le aconseja ___ más agua.', options: ['que bebe', 'de beber', 'beber'], answer: 2, why: 'Aconsejar + infinitivo, sin «de».' },
            { prompt: 'A mis amigos les ___ que me ayuden con la mudanza.', options: ['pida', 'pido', 'pregunto'], answer: 1, why: 'Una petición: pido (e → i), en indicativo como primer verbo.' },
            { prompt: 'Mi jefa me pide que ___ el informe hoy.', options: ['termine', 'termino', 'terminar'], answer: 0, why: 'Pide que + subjuntivo: termine.' },
          ] },
        ] },
        { title: 'Otra situación · A new situation', mascot: '/autoestudio/mascot/noting.webp', blocks: [
          { kind: 'lead', text: 'Rafael ya vive en Santiago y va a un curso de cocina chilena. La profesora, Ximena, da instrucciones al grupo. Después, Rafael se las cuenta a Lucía por teléfono.', en: 'Rafael now lives in Santiago and takes a Chilean cooking class. The teacher, Ximena, gives the group instructions. Later Rafael tells Lucía about them on the phone.' },
          { kind: 'rewrite', title: 'Rafael cuenta la clase · Rafael reports the class', items: [
            { prompt: 'Ximena: «Laven bien las verduras».', instruction: 'Empieza con «La profesora nos dice que…». (Start with “La profesora nos dice que…”.)', accept: ['La profesora nos dice que lavemos bien las verduras.'] },
            { prompt: 'Ximena: «El horno está muy caliente».', instruction: 'Empieza con «La profesora nos dice que…». (Information or instruction?)', accept: ['La profesora nos dice que el horno está muy caliente.'] },
            { prompt: 'Ximena: «No abran el horno antes de veinte minutos».', instruction: 'Empieza con «La profesora nos dice que…».', accept: ['La profesora nos dice que no abramos el horno antes de veinte minutos.', 'La profesora nos dice que no abramos el horno antes de 20 minutos.'] },
          ] },
        ] },
        { title: 'Ampliación: avisos formales y otras variedades · Extension: formal notices and varieties', mascot: '/brand/mascot/studying.webp', coach: 'Opcional: el registro formal y vosotros.', blocks: [
          { kind: 'lead', text: 'En avisos, correos formales y carteles, los consejos usan **ustedes** (les pedimos que…), **nosotros** (la empresa: les recomendamos que…) o **se + infinitivo** (se recomienda llegar…). En España, con amigos, también **vosotros**: os aconsejo que vayáis. Y **insistir en que** es un consejo o una petición muy fuerte: lleva «en».', en: 'In notices, formal emails and signs, advice uses ustedes (les pedimos que…), the company “we” (les recomendamos que…) or se + infinitive (se recomienda llegar…). In Spain, with friends, also vosotros: os aconsejo que vayáis. And “insistir en que” is very strong advice or a strong request: it takes “en”.' },
          { kind: 'choice', title: 'Registro y variedades · Register and varieties', items: [
            { context: 'Aviso en el aeropuerto. (Airport notice.)', prompt: '«___ a los pasajeros que tengan el pasaporte en la mano».', options: ['Les pedimos de', 'Les pedimos', 'Les preguntamos'], answer: 1, why: 'Una petición formal: les pedimos que + subjuntivo, sin «de».', en: '“We ask passengers to have their passport in their hand.”' },
            { context: 'Correo de una agencia a una clienta. (Agency email to a client.)', prompt: '«Le ___ que revise el contrato antes de firmarlo».', options: ['recomendemos', 'recomendamos', 'recomiendamos'], answer: 1, why: 'Con nosotros no hay cambio e → ie: recomendamos. «Recomendemos» es subjuntivo.', en: '“We recommend you check the contract before signing it.”' },
            { context: 'Una guía de Madrid con un grupo de amigos. (A guide in Madrid with friends.)', prompt: '«Os aconsejo que ___ el museo por la mañana».', options: ['visitar', 'visitéis', 'visitáis'], answer: 1, why: 'Vosotros, en España: os aconsejo que + subjuntivo, visitéis.', en: '“I advise you all to visit the museum in the morning.”' },
            { context: 'Cartel en un hotel. (A hotel sign.)', prompt: '«Se recomienda ___ el desayuno antes de las diez».', options: ['tomen', 'tomar', 'que toma'], answer: 1, why: 'Recomendación general, sin persona concreta: se recomienda + infinitivo.', en: '“It is recommended to have breakfast before ten.”' },
            { context: 'La mamá de Carolina por teléfono. (Carolina’s mum on the phone.)', prompt: '«Rafael, insisto en que ___ a almorzar el domingo».', options: ['vengas', 'vienes', 'venir'], answer: 0, why: 'Insistir en que + subjuntivo: una petición muy fuerte.', en: '“Rafael, I insist that you come for lunch on Sunday.”' },
          ] },
          { kind: 'teacher', text: 'Paso opcional, para alumnos fuertes o si sobra tiempo. Extra: tu alumno escribe un cartel para la oficina con «Les pedimos que…» y «Se recomienda…».' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 091 · Valoraciones: es importante que, es bueno que', text: 'Ya das consejos con **te recomiendo que…** y cuentas lo que dicen otros. El paso natural: dar tu valoración de una acción con **es importante que**, **es bueno que**, **es mejor que** + subjuntivo, otra forma muy frecuente de aconsejar sin «te recomiendo».', en: 'You can now give advice with “te recomiendo que…” and report what others say. The natural next step: evaluating an action with “es importante que”, “es bueno que”, “es mejor que” + subjunctive, another very common way to give advice without “te recomiendo”.', href: '/gramatica/valoraciones-es-importante-que-es-bueno', label: 'Ir a la clase 091' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Cuál es la diferencia entre “dice que vienes” y “dice que vengas”?». Respuesta esperada: la primera informa; la segunda es una orden o una invitación. Tarea: cinco consejos para una persona que empieza a estudiar español, con cinco verbos distintos.' },
        ] },
      ],
    },
  ],
};
