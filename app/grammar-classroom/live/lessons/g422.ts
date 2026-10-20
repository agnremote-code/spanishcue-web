import type { LiveLesson } from '../types';

/**
 * Lesson 422 · B1 · Orden de pronombres y clíticos más complejo (course unit G122).
 * Spiral unit: builds on G064 (se lo, me lo, te la), G065 (position with
 * infinitive, gerund and imperative; written accent), G059 / G096 (negative
 * imperative with subjunctive), G103 (conditional simple) and G111 (topic
 * first, «lo» attribute). Here everything works together at B1 speed: fixed
 * order se → te / os → me / nos → lo / la / los / las; le / les → se; «a +
 * persona» to say who «se» is; two pronouns before a conjugated verb in any
 * tense (se lo di, se lo he dado — never between haber and the participle —,
 * te lo diría), after «no» in negative commands (no se lo digas), attached to
 * affirmative commands, infinitives and gerunds (dámelo, dárselo, dándoselo)
 * with an obligatory written accent, both positions with periphrasis (se lo voy
 * a dar = voy a dárselo), never in the middle and never twice; «se» always
 * first with me / te / le (se me olvidó: order only; its meaning is class 150,
 * B2) and reflexive verbs with a direct object (se lo puso, póntela).
 * Anchor: Te lo diría, pero es un secreto (conditional simple, no compound
 * conditional anywhere). Scene: Clara Ibarra marries Daniel Soto on Saturday
 * at a country house; her sister Noelia organizes, Daniel’s best friend Bruno
 * Vega helps, Óscar is the photographer. Voice message: Clara from the airport
 * the day after (Colombian voice, tú). Ampliación: American «se los dije» (=
 * se lo dije a ellos), «hay que decírselo» (only attached), nosotros commands
 * (démoselo) and «lo» attribute with periphrasis (no va a serlo), audit fold.
 */
export const lesson: LiveLesson = {
  id: 422,
  level: 'B1',
  title: 'Orden de pronombres y clíticos más complejo',
  subtitle: 'Combinar dos pronombres en su orden y en su sitio con cualquier forma verbal: te lo diría, no se lo digas, voy a dárselo.',
  legend: [
    { tone: 'blue', label: 'ANTES · verbo conjugado y «no» (te lo diría, se lo he dado, no se lo digas)' },
    { tone: 'orange', label: 'PEGADOS · imperativo, infinitivo, gerundio, con tilde (dámelo, dárselo, dándoselo)' },
    { tone: 'violet', label: 'SE PRIMERO · se + me / te / le (se me olvidó: always “se” first)' },
    { tone: 'teal', label: 'A + PERSONA · aclara quién es «se» (a él, a ella, a ellos)' },
  ],
  optionNotes: {
    'le lo': '«Le lo» no existe: delante de lo, la, los, las, **le** y **les** cambian a **se**: se lo.',
    'Me se': 'El orden es al revés: **se** va siempre primero: se me.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Dos pronombres, un orden', coach: 'Orden fijo, posición según el verbo. Fixed order, position depends on the verb.',
      steps: [
        { title: 'La boda de Clara · Clara’s wedding', blocks: [
          { kind: 'lead', text: 'Clara Ibarra y Daniel Soto se casan el sábado en una finca. Noelia, la hermana de Clara, lo organiza todo, y Bruno Vega, el mejor amigo de Daniel, la ayuda. Bruno quiere saber qué canción van a bailar los novios, pero es un secreto. Noelia sonríe y le dice: «**Te lo diría**, pero es un secreto». Hoy combinas dos pronombres con cualquier forma del verbo: el condicional, el perfecto, las órdenes, el infinitivo y el gerundio.', en: 'Clara Ibarra and Daniel Soto are getting married on Saturday at a country house. Noelia, Clara’s sister, is organizing everything, and Bruno Vega, Daniel’s best friend, is helping her. Bruno wants to know which song the couple will dance to, but it is a secret. Noelia smiles and says: “I’d tell you, but it’s a secret.” Today you combine two pronouns with any verb form: the conditional, the present perfect, commands, the infinitive and the gerund.' },
          { kind: 'guide', text: { teacher: 'Tú lees la frase larga y tu alumno lee la frase corta. Después tu alumno dice qué sustituye «te» y qué sustituye «lo».', self: 'Lee las dos frases en voz alta. ¿Qué es «te»? ¿Qué es «lo»? (What does each pronoun stand for?)' } },
          { kind: 'compare', title: 'La misma frase, más corta · The same sentence, shorter', columns: [
            { tone: 'neutral', label: 'CON NOMBRES · with nouns', sentence: 'Te diría el nombre de la canción, pero es un secreto.', idea: 'La cosa (el nombre de la canción) aparece completa: suena largo si ya sabemos de qué hablamos.', en: 'I’d tell you the name of the song, but it’s a secret.' },
            { tone: 'blue', label: 'CON DOS PRONOMBRES · with two pronouns', sentence: '[[Te lo diría|blue]], pero es un secreto.', idea: '**te** = a ti (la persona) · **lo** = el nombre de la canción (la cosa). Los dos van antes del verbo conjugado «diría».', en: 'I’d tell you, but it’s a secret.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'En «Te lo diría», ¿qué es «lo»?', options: ['Bruno.', 'Noelia.', 'El nombre de la canción.'], answer: 2, why: '«Lo» es la cosa: lo que Noelia no dice (el nombre de la canción).', en: 'In “Te lo diría”, what is “lo”?' },
            { prompt: 'En «Te lo diría», ¿por qué los pronombres van antes de «diría»?', options: ['Porque hay dos pronombres.', 'Porque es una orden.', 'Porque «diría» es un verbo conjugado.'], answer: 2, why: 'Con un verbo conjugado (presente, pasado, futuro, condicional), los pronombres van antes.', en: 'Why do the pronouns come before “diría”?' },
            { prompt: '—¿Me dices la hora de la ceremonia? —Claro, ___ ahora mismo.', options: ['te lo digo', 'te la digo', 'la te digo'], answer: 1, why: 'Primero la persona (te), después la cosa: la hora → la.', en: '“Can you tell me the time of the ceremony?” “Sure, I’ll tell you right now.”' },
          ] },
        ] },
        { title: 'El orden fijo · The fixed order', mascot: '/brand/mascot/studying.webp', coach: 'Se, persona, cosa. Se, person, thing.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'EL ORDEN · SE › PERSONA › COSA', question: '¿Hay dos pronombres juntos?', en: 'Are there two pronouns together? The order never changes: “se” first, then the person, then the thing.', formula: ['se  →  te · os  →  me · nos  →  lo · la · los · las', 'le / les + lo · la · los · las  →  se lo · se la · se los · se las'],
            meaning: 'El orden de dos pronombres es **fijo**: si hay **se**, va primero; después la persona (te, os, me, nos); al final la cosa (**lo, la, los, las**). **Le** y **les** no pueden ir delante de lo, la, los, las: cambian a **se**. Y lo, la, los, las concuerdan con **la cosa**, no con la persona: «el discurso → **se lo** enseñé a Clara».',
            examples: [
              { es: 'Las invitaciones [[nos las|blue]] mandó Clara en junio.', en: 'Clara sent us the invitations in June.' },
              { es: 'El discurso es para Clara, pero todavía no [[se lo|blue]] he enseñado.', en: 'The speech is for Clara, but I haven’t shown it to her yet.' },
              { es: '¿La lista de fotos? Óscar [[me la|blue]] dio ayer.', en: 'The photo list? Óscar gave it to me yesterday.' },
            ], note: 'Nunca «le lo», «les la» ni «lo me». Con «se», nada va delante: se me, se te, se lo.' },
          { kind: 'tip', icon: '💡', title: '¿Quién es «se»? · Who is “se”?', text: '«**Se lo** di» puede ser a él, a ella, a usted, a ellos, a ellas o a ustedes. Si no está claro, añade la persona al final: «Se lo di [[a ella|teal]]», «Se las mandé [[a ellos|teal]]». Con dos pronombres, «se» se queda aunque digas el nombre: «Se lo di a Clara».', en: '“Se lo di” can mean to him, to her, to you (usted), or to them. If it is not clear, add the person at the end: “Se lo di a ella”. With two pronouns, “se” stays even when you name the person: “Se lo di a Clara”.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Daniel necesita los anillos. Bruno ___ da mañana.', options: ['le los', 'los se', 'se los'], answer: 2, why: 'Le (a Daniel) + los (los anillos) → se los.', en: 'Daniel needs the rings. Bruno is giving them to him tomorrow.' },
            { prompt: 'El ramo es para Clara. Noelia ___ lleva a la habitación.', options: ['le lo', 'se la', 'se lo'], answer: 2, why: '«Lo» concuerda con la cosa (el ramo, masculino), no con Clara: se lo.', en: 'The bouquet is for Clara. Noelia takes it to her room.' },
            { prompt: '—¿Quién les mandó las flores a ustedes? —___ mandó la abuela.', options: ['Nos les', 'Las nos', 'Nos las'], answer: 2, why: 'Persona antes que cosa: nos (a nosotros) + las (las flores).', en: '“Who sent you the flowers?” “Grandma sent them to us.”' },
          ] },
        ] },
        { title: '¿Antes o pegados? · Before or attached?', mascot: '/brand/mascot/standing.webp', coach: 'Mira la forma del verbo. Look at the verb form.', blocks: [
          { kind: 'table', title: 'Dónde van los dos pronombres · Where the two pronouns go', head: ['Forma del verbo · Verb form', 'Posición · Position', 'Ejemplo · Example'], rows: [
            ['Verbo conjugado: presente, pasado, futuro, condicional', 'antes del verbo', '[[Se lo di|blue]]. [[Te lo diría|blue]].'],
            ['Tiempo compuesto: haber + participio', 'antes de «haber», nunca en medio', '[[Se lo he dado|blue]].'],
            ['Imperativo negativo: no + subjuntivo', 'entre «no» y el verbo', '[[No se lo digas|blue]].'],
            ['Imperativo afirmativo', 'pegados detrás', '[[Díselo|orange]]. [[Dámelos|orange]].'],
            ['Infinitivo o gerundio solos', 'pegados detrás', 'para [[dárselo|orange]] · [[dándoselo|orange]]'],
            ['Perífrasis: ir a, tener que, poder, estar + gerundio…', 'antes del primer verbo o pegados al final', '[[Se lo voy a dar|blue]] = [[voy a dárselo|orange]].'],
          ], note: 'Los dos pronombres van siempre **juntos** y **una sola vez**: nunca «voy a se lo dar» ni «se lo voy a dárselo».' },
          { kind: 'decide', title: '¿Antes o pegados? · Before or attached?', steps: [
            { q: '¿Es una orden afirmativa (dile, dame, pon)?', yes: 'Pegados detrás, con tilde: **díselo, dámelo, pónselo**.', no: 'next' },
            { q: '¿Hay un verbo conjugado + infinitivo o gerundio (voy a dar, estoy explicando)?', yes: 'Dos posiciones: antes del primer verbo (**se lo voy a dar**) o pegados al final (**voy a dárselo**).', no: 'next' },
            { q: '¿Hay un verbo conjugado solo, con haber o con «no» (di, he dado, diría, no digas)?', yes: 'Antes: **se lo di, se lo he dado, te lo diría, no se lo digas**.', no: 'Infinitivo o gerundio solos: pegados (**para dárselo, dándoselo**).' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Los anillos ya ___ a Daniel.', options: ['he se los dado', 'se los he dado', 'los he dádoselos'], answer: 1, why: 'Con haber + participio, los pronombres van antes de «haber».', en: 'I have already given the rings to Daniel.' },
            { prompt: '¿Qué frase NO es correcta?', options: ['Tengo que decírselo.', 'Tengo que se lo decir.', 'Se lo tengo que decir.'], answer: 1, why: 'Con perífrasis: antes del primer verbo o pegados al final, nunca en medio.', en: 'Which sentence is NOT correct?' },
            { prompt: 'Es una orden negativa: no ___ a Clara.', options: ['le lo enseñes', 'se lo enseñes', 'enséñaselo'], answer: 1, why: 'Con «no», los pronombres van antes del verbo en subjuntivo: no se lo enseñes.', en: 'It’s a negative command: don’t show it to Clara.' },
          ] },
        ] },
        { title: 'La tilde · The written accent', mascot: '/brand/mascot/speaking.webp', coach: 'Dos pegados: siempre tilde. Two attached: always an accent.', blocks: [
          { kind: 'table', title: 'La palabra crece · The word gets longer', head: ['Verbo', '+ dos pronombres', 'Sílaba fuerte', '¿Tilde?'], rows: [
            ['da', '**dámelo**', 'DÁ-me-lo', 'sí'],
            ['di', '**díselo**', 'DÍ-se-lo', 'sí'],
            ['pon', '**pónmela**', 'PÓN-me-la', 'sí'],
            ['dar', '**dárselo**', 'DAR-se-lo', 'sí'],
            ['explicar', '**explicárselo**', 'ex-pli-CAR-se-lo', 'sí'],
            ['dando', '**dándoselo**', 'DAN-do-se-lo', 'sí'],
            ['diga (usted)', '**dígaselo**', 'DÍ-ga-se-lo', 'sí'],
          ], note: 'Con un solo pronombre, a veces no hay tilde: **dame, dile, darle, decirlo**. Con dos, la sílaba fuerte queda la tercera o la cuarta desde el final: siempre tilde.' },
          { kind: 'tip', icon: '🔑', title: 'Cuenta desde el final · Count from the end', text: 'Pega los dos pronombres y busca la sílaba fuerte del verbo: no se mueve. Como añades dos sílabas detrás, la palabra lleva tilde: dar → **dárselo**, decir → **decírmelo**, trae → **tráemela**. Compara: «Dime la verdad» / «**Dímelo**».', en: 'Attach both pronouns and find the stressed syllable of the verb: it does not move. Because you add two syllables after it, the word takes a written accent: dárselo, decírmelo, tráemela. Compare “Dime” and “Dímelo”.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Cuál está bien escrita?', options: ['explicarselo', 'explicárselo', 'explícarselo'], answer: 1, why: 'La sílaba fuerte es CAR, y queda la tercera desde el final: explicárselo.', en: 'Which one is spelled correctly?' },
            { prompt: '¿Cuál está bien escrita?', options: ['Damelos', 'Dámelos', 'Dámélos'], answer: 1, why: 'DÁ-me-los: la sílaba fuerte es la tercera desde el final. Una sola tilde.', en: 'Which one is spelled correctly?' },
            { prompt: '¿Qué palabra NO necesita tilde?', options: ['dime', 'dímelo', 'dándoselo'], answer: 0, why: '«Dime» tiene la sílaba fuerte en la segunda desde el final: sin tilde. Con dos pronombres sí: dímelo.', en: 'Which word does NOT need an accent?' },
          ] },
        ] },
        { title: 'Se va primero · “Se” always goes first', mascot: '/autoestudio/mascot/noting.webp', coach: 'Se me, nunca me se. Se me, never me se.', blocks: [
          { kind: 'concept', tone: 'violet', label: 'SE + ME / TE / LE', question: '¿Hay un «se» y otro pronombre de persona?', en: 'Is there a “se” and another person pronoun? “Se” always goes first: se me olvidó, never “me se”.', formula: ['se + me · te · le · nos · os · les + verbo', 'se me olvidó · se te cayó · se le rompió'],
            meaning: 'Con verbos como **olvidarse, caerse, romperse o perderse**, el español dice muchas veces «**se** + la persona a la que le pasa algo»: «**Se me** olvidaron las llaves». Hoy solo importa el **orden**: **se** siempre delante. En la clase 150 (B2) estudias qué significa exactamente. Lo mismo pasa con los verbos reflexivos y una cosa: Clara se pone el vestido → «Clara **se lo** pone». Y en la orden afirmativa: ponte la chaqueta → **póntela**.',
            examples: [
              { es: 'Ay, [[se me olvidaron|violet]] las llaves en el coche.', en: 'Oh, I left the keys in the car (I forgot them).' },
              { es: 'A Daniel [[se le cayó|violet]] un anillo, pero lo encontró enseguida.', en: 'Daniel dropped a ring, but he found it right away.' },
              { es: 'El vestido le encanta: [[se lo|blue]] probó tres veces.', en: 'She loves the dress: she tried it on three times.' },
            ], note: 'Con un reflexivo, «se» es la misma persona: «se lo probó» = Clara se probó el vestido (a sí misma).' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¡Ay! ___ olvidó el regalo en casa.', options: ['Me lo', 'Me se', 'Se me'], answer: 2, why: '«Se» siempre va primero: se me olvidó.', en: 'Oh no! I forgot the present at home.' },
            { prompt: 'Hace frío, Bruno. La chaqueta, ___.', options: ['pónmela', 'póntela', 'pontela'], answer: 1, why: 'Ponerse la chaqueta (tú) → ponte + la → póntela, con tilde.', en: 'It’s cold, Bruno. Your jacket: put it on.' },
            { prompt: 'Clara se quitó los zapatos a medianoche: ___ quitó porque le dolían los pies.', options: ['se los', 'se les', 'los se'], answer: 0, why: 'Reflexivo «se» (Clara a sí misma) + los (los zapatos): se los quitó.', en: 'Clara took her shoes off at midnight because her feet hurt.' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Orden, sitio, tilde. Order, place, accent.', blocks: [
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Le lo di a Clara.', right: 'Se lo di a Clara.', why: 'Le / les + lo, la, los, las → se. «Le lo» no existe.' },
            { wrong: 'Me se olvidó el móvil.', right: 'Se me olvidó el móvil.', why: '«Se» va siempre primero.' },
            { wrong: 'He se lo dado.', right: 'Se lo he dado.', why: 'Con haber + participio, los pronombres van antes de «haber», nunca en medio ni detrás del participio.' },
            { wrong: 'No díselo a nadie.', right: 'No se lo digas a nadie.', why: 'La orden negativa usa el subjuntivo y los pronombres van antes del verbo.' },
            { wrong: 'Se lo voy a dárselo mañana.', right: 'Se lo voy a dar mañana. / Voy a dárselo mañana.', why: 'Una posición o la otra, pero los pronombres van una sola vez.' },
            { wrong: 'El discurso es para Clara: se la enseño mañana.', right: 'El discurso es para Clara: se lo enseño mañana.', why: 'Lo, la, los, las concuerdan con la cosa (el discurso), no con la persona.' },
            { wrong: 'Tienes que darselo hoy.', right: 'Tienes que dárselo hoy.', why: 'Con dos pronombres pegados, siempre tilde.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Las fotos ya ___ a los abuelos.', options: ['he mandádoselas', 'se las he mandado', 'les las he mandado'], answer: 1, why: 'Les → se; antes de «haber»: se las he mandado.', en: 'I have already sent the photos to my grandparents.' },
            { prompt: 'La sorpresa, ___ a Daniel, por favor.', options: ['no le la cuentes', 'no se la cuentes', 'no cuéntasela'], answer: 1, why: 'Orden negativa: no + se la + subjuntivo.', en: 'The surprise: please don’t tell Daniel about it.' },
            { prompt: 'El plan de la cena, Bruno ___ ahora a los camareros.', options: ['está explicándoselo', 'está se lo explicando', 'se lo está explicándolo'], answer: 0, why: 'Con estar + gerundio: pegados al gerundio (o «se lo está explicando»), nunca en medio ni dos veces.', en: 'Bruno is explaining the dinner plan to the waiters now.' },
          ] },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'La víspera de la boda', coach: 'Toca las expresiones marcadas. Tap the marked expressions.',
      steps: [
        { title: 'En la finca · At the country house', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Noelia y tu alumno es Bruno. Después tu alumno toca tres expresiones marcadas y explica dónde van los pronombres.', self: 'Lee el diálogo en voz alta. Toca las expresiones marcadas para ver por qué los pronombres van antes o pegados. (Tap the marked expressions.)' } },
          { kind: 'explore', title: 'Dámelos a mí', setting: 'Viernes, ocho de la tarde, en la finca. Mañana es la boda. Noelia y Bruno preparan las mesas y repasan la lista de tareas. Se tratan de tú. (Friday, 8 p.m., at the country house, the evening before the wedding. Noelia and Bruno use tú.)', lines: [
            { who: 'Noelia', text: 'Bruno, ¿tienes los anillos? Daniel me dijo que [[te los dio|blue]] ayer.', en: 'Bruno, have you got the rings? Daniel told me he gave them to you yesterday.' },
            { who: 'Bruno', text: 'Sí, aquí están. Mañana [[se los doy|blue]] [[a él|teal]] justo antes de la ceremonia.', en: 'Yes, here they are. Tomorrow I’ll give them to him just before the ceremony.' },
            { who: 'Noelia', text: 'No, mejor [[dámelos|orange]] a mí, que mañana vas a estar muy nervioso.', en: 'No, better give them to me: you’ll be really nervous tomorrow.' },
            { who: 'Bruno', text: 'Vale, toma. Oye, ¿y tu discurso para Clara? ¿Ya [[se lo has enseñado|blue]]?', en: 'OK, here you go. Hey, what about your speech for Clara? Have you shown it to her yet?' },
            { who: 'Noelia', text: '¡Qué va! [[No se lo voy a enseñar|blue]]: es una sorpresa. Y tú [[no se lo digas|blue]], ¿eh?', en: 'No way! I’m not going to show it to her: it’s a surprise. And don’t you tell her, OK?' },
            { who: 'Bruno', text: 'Tranquila. Por cierto, ¿qué canción van a bailar?', en: 'Don’t worry. By the way, which song are they going to dance to?' },
            { who: 'Noelia', text: '[[Te lo diría|blue]], pero le prometí a Clara no [[decírselo|orange]] a nadie.', en: 'I’d tell you, but I promised Clara I wouldn’t tell anyone.' },
            { who: 'Bruno', text: 'Bueno, bueno. ¿Y las llaves de la finca? El dueño quiere que [[se las devolvamos|blue]] el domingo.', en: 'Fine, fine. And the keys to the house? The owner wants us to give them back to him on Sunday.' },
            { who: 'Noelia', text: 'Ay, las llaves… ¡[[Se me olvidaron|violet]] en el coche!', en: 'Oh, the keys… I left them in the car!' },
            { who: 'Bruno', text: 'Quédate, voy yo. Mira, ahí está la abuela de Daniel con el reloj del abuelo. ¡[[Está dándoselo|orange]] ahora!', en: 'Stay here, I’ll go. Look, there’s Daniel’s grandmother with his grandfather’s watch. She’s giving it to him now!' },
            { who: 'Noelia', text: '¡Qué bonito! Lo va a llevar mañana. Oye, ¿y a los músicos? ¿Les dijiste la hora?', en: 'How lovely! He’s going to wear it tomorrow. Hey, and the musicians? Did you tell them the time?' },
            { who: 'Bruno', text: 'Sí, [[se la dije|blue]] [[a ellos|teal]] esta mañana, y esta noche [[voy a mandársela|orange]] por escrito.', en: 'Yes, I told them this morning, and tonight I’m going to send it to them in writing.' },
          ], notes: {
            'te los dio': 'Te (a ti, Bruno) + los (los anillos), antes del verbo conjugado «dio».',
            'se los doy': 'Le (a Daniel) + los → se los. Antes del verbo conjugado.',
            'a él': '«A él» aclara quién es «se». No sustituye a «se»: los dos van juntos.',
            'dámelos': 'Imperativo afirmativo: me + los pegados detrás. DÁ-me-los: tilde.',
            'se lo has enseñado': 'Pretérito perfecto: los pronombres van antes de «haber». «Lo» = el discurso.',
            'No se lo voy a enseñar': 'Perífrasis ir a + infinitivo: antes del primer verbo. También: «No voy a enseñárselo».',
            'no se lo digas': 'Imperativo negativo (subjuntivo): entre «no» y el verbo.',
            'Te lo diría': 'Condicional (clase 103): verbo conjugado, pronombres antes. «Lo» = qué canción van a bailar.',
            'decírselo': 'Infinitivo solo, después de «no»: pronombres pegados. de-CIR-se-lo: tilde.',
            'se las devolvamos': 'Querer que + subjuntivo, verbo conjugado: se (al dueño) + las (las llaves) antes.',
            'Se me olvidaron': '«Se» primero, después «me»: se me olvidaron. Algo que pasa sin querer (clase 150).',
            'Está dándoselo': 'Estar + gerundio: pegados al gerundio. También: «Se lo está dando». DAN-do-se-lo: tilde.',
            'se la dije': 'Les (a los músicos) + la (la hora) → se la. Antes del verbo conjugado.',
            'a ellos': '«A ellos» aclara que «se» es plural: los músicos.',
            'voy a mandársela': 'Ir a + infinitivo, pegados al final. También: «se la voy a mandar».',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Por qué Noelia quiere los anillos?', options: ['Porque Bruno los perdió.', 'Porque Daniel se los pidió a ella.', 'Porque Bruno va a estar nervioso mañana.'], answer: 2, why: '«Dámelos a mí, que mañana vas a estar muy nervioso».', en: 'Why does Noelia want the rings?' },
            { prompt: '¿Qué sabe Clara del discurso?', options: ['Nada: es una sorpresa.', 'Lo leyó ayer.', 'Bruno se lo enseñó.'], answer: 0, why: '«No se lo voy a enseñar: es una sorpresa».', en: 'What does Clara know about the speech?' },
            { prompt: '¿Dónde están las llaves de la finca?', options: ['Las tiene el dueño.', 'Se las dio a Bruno.', 'En el coche de Noelia.'], answer: 2, why: '«¡Se me olvidaron en el coche!».', en: 'Where are the keys to the house?' },
          ] },
        ] },
        { title: '¿Una posición o dos? · One position or two?', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'classify', title: 'Más frases de la víspera · More sentences from the evening', categories: [
            { id: 'antes', label: 'SOLO ANTES · conjugado, haber, no', tone: 'blue' },
            { id: 'pegado', label: 'SOLO PEGADOS · orden afirmativa, infinitivo o gerundio solos', tone: 'orange' },
            { id: 'dos', label: 'LAS DOS POSICIONES · perífrasis', tone: 'neutral' },
          ], items: [
            { text: 'No se lo enseñes a Clara.', answer: 'antes', why: 'Orden negativa: solo antes del verbo.' },
            { text: 'La flor es para Daniel: pónsela en la chaqueta.', answer: 'pegado', why: 'Orden afirmativa: solo pegados.' },
            { text: 'Se lo voy a dar después de la ceremonia.', answer: 'dos', why: 'Ir a + infinitivo: también «Voy a dárselo».' },
            { text: 'Las llaves ya se las he devuelto.', answer: 'antes', why: 'Haber + participio: solo antes de «haber».' },
            { text: 'Estoy explicándoselo a los camareros.', answer: 'dos', why: 'Estar + gerundio: también «Se lo estoy explicando».' },
            { text: 'Salí temprano para comprárselas.', answer: 'pegado', why: 'Infinitivo solo, después de «para»: solo pegados.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: «¿Qué hace Bruno con la hora de los músicos?». Tu alumno responde de las dos formas: «Se la va a mandar» y «Va a mandársela».' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'El día de la boda', coach: '¿Qué orden? ¿Qué sitio? Which order? Which place?',
      steps: [
        { title: 'Sábado por la mañana · Saturday morning', blocks: [
          { kind: 'choice', items: [
            { context: 'Sábado, diez de la mañana. Clara se viste en el hotel. (Clara is getting dressed.)', prompt: 'Clara necesita el vestido. Noelia ___ lleva a la habitación ahora.', options: ['le lo', 'se la', 'se lo'], answer: 2, why: 'Le (a Clara) → se; lo = el vestido, masculino, aunque Clara es mujer.', en: 'Clara needs the dress. Noelia is taking it to her room now.' },
            { context: 'En la puerta del hotel hace mucho sol. (It’s very sunny.)', prompt: '—Bruno, ¿me dejas tus gafas de sol? —Sí, claro, ___.', options: ['te los dejo', 'te las dejo', 'las te dejo'], answer: 1, why: 'Persona antes que cosa: te + las (las gafas, femenino plural).', en: '“Bruno, can I borrow your sunglasses?” “Sure, here you are.”' },
            { context: 'Los músicos esperan la lista de canciones. (The musicians are waiting.)', prompt: '—¿Cuándo les das la lista? —___ a las doce.', options: ['Voy a darles la', 'Voy a se la dar', 'Voy a dársela'], answer: 2, why: 'Ir a + infinitivo: pegados al final (o «Se la voy a dar»). Les + la → se la.', en: '“When are you giving them the list?” “I’m going to give it to them at twelve.”' },
            { context: 'Daniel está nervioso y pregunta por los anillos. (Daniel is nervous.)', prompt: 'Noelia: «Tranquilo, ___ dentro de un momento».', options: ['te les doy', 'dote los', 'te los doy'], answer: 2, why: 'Verbo conjugado: antes. Te + los (los anillos).', en: '“Relax, I’ll give them to you in a moment.”' },
            { context: 'La abuela le habla a Bruno. Se tratan de tú. (Grandma talks to Bruno.)', prompt: '«El reloj es para Daniel. ___ antes de la ceremonia, por favor».', options: ['Dale lo', 'Le lo da', 'Dáselo'], answer: 2, why: 'Orden afirmativa: pegados, le → se, con tilde: dáselo.', en: '“The watch is for Daniel. Give it to him before the ceremony, please.”' },
          ] },
        ] },
        { title: '¿Qué «se» es? · Which “se” is it?', blocks: [
          { kind: 'classify', title: 'Tres tipos de «se» · Three kinds of “se”', categories: [
            { id: 'le', label: 'LE / LES → SE · otra persona recibe la cosa', tone: 'blue' },
            { id: 'refl', label: 'SE REFLEXIVO · la persona lo hace en sí misma', tone: 'neutral' },
            { id: 'acc', label: 'SE + ME / TE / LE · algo pasa sin querer', tone: 'violet' },
          ], items: [
            { text: 'El vestido es precioso: Clara se lo puso a las once.', answer: 'refl', why: 'Clara se pone el vestido a sí misma: «se» reflexivo + lo.' },
            { text: 'El ramo es para Clara: Noelia se lo da en la puerta.', answer: 'le', why: 'Le (a Clara) + lo (el ramo) → se lo.' },
            { text: 'A Daniel se le cayó un anillo al suelo.', answer: 'acc', why: 'Se + le: algo pasa sin querer. «Se» va primero.' },
            { text: 'Hace frío y Bruno se pone la chaqueta.', answer: 'refl', why: 'Bruno se pone la chaqueta a sí mismo: reflexivo.' },
            { text: 'Los músicos pidieron la lista y Bruno se la mandó.', answer: 'le', why: 'Les (a los músicos) + la (la lista) → se la.' },
            { text: 'A la abuela se le olvidaron las gafas en casa.', answer: 'acc', why: 'Se + le: un olvido sin querer.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'El fotógrafo quiere la lista de fotos. ¿Le la mandas tú?', ok: false, options: ['¿Se le mandas tú?', '¿Se la mandas tú?', '¿La le mandas tú?'], answer: 1, why: 'Le + la → se la. La cosa (la lista) va después.' },
            { sentence: '¿Los anillos? Ya se los he dado a Daniel.', ok: true, why: 'Correcta: se (a Daniel) + los, antes de «haber».' },
            { sentence: 'Me se olvidó el móvil en el hotel.', ok: false, options: ['Se me olvidó el móvil en el hotel.', 'Se olvidó me el móvil en el hotel.', 'Me olvidó el móvil en el hotel.'], answer: 0, why: '«Se» siempre primero: se me olvidó.' },
            { sentence: 'Señora, no dígaselo a la novia, por favor.', ok: false, options: ['Señora, no le lo diga a la novia, por favor.', 'Señora, no se lo diga a la novia, por favor.', 'Señora, no se lo dice a la novia, por favor.'], answer: 1, why: 'Orden negativa (usted): no + se lo + subjuntivo «diga».' },
            { sentence: 'Tengo el regalo y se lo voy a dárselo esta noche.', ok: false, options: ['Tengo el regalo y se lo voy a dar esta noche.', 'Tengo el regalo y voy a se lo dar esta noche.', 'Tengo el regalo y se voy a darlo esta noche.'], answer: 0, why: 'Una posición, una sola vez: se lo voy a dar (o voy a dárselo).' },
            { sentence: 'Noelia, el discurso es precioso. ¿Puedes leermelo otra vez?', ok: false, options: ['¿Puedes leerlo me otra vez?', '¿Puedes me lo leer otra vez?', '¿Puedes leérmelo otra vez?'], answer: 2, why: 'Dos pronombres pegados: le-ER-me-lo, tilde. (O «¿Me lo puedes leer?».)' },
          ] },
        ] },
        { title: 'Clara y Noelia · Clara and Noelia', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'chat-fill', title: 'En la habitación del hotel · In the hotel room', lines: [
            { who: 'Clara', text: 'Noelia, ¿tienes tú mis pendientes? Ayer mamá ___ dio para la boda.', options: ['te los', 'los te', 'te les'], answer: 0, why: 'Te (a ti) + los (los pendientes), antes del verbo conjugado.' },
            { who: 'Noelia', text: 'Sí, los tengo yo. ¿___ subo ahora?', options: ['Te los', 'Se los', 'Te lo'], answer: 0, why: 'A ti (te) + los pendientes (los).' },
            { who: 'Clara', text: 'Sí, ___, por favor. Y trae también el ramo.', options: ['súbeme los', 'súbemelos', 'me los sube'], answer: 1, why: 'Orden afirmativa (tú): pegados, con tilde: súbemelos.' },
            { who: 'Noelia', text: 'El ramo lo tiene la florista: está ___ ahora mismo.', options: ['preparándotelo', 'preparandotelo', 'te preparándolo'], answer: 0, why: 'Estar + gerundio: pegados al gerundio, con tilde.' },
            { who: 'Clara', text: 'Vale. Oye, a Daniel no ___ que estoy nerviosa, ¿eh?', options: ['se lo digas', 'le lo digas', 'díselo'], answer: 0, why: 'Orden negativa: no + se lo + subjuntivo.' },
            { who: 'Noelia', text: 'Tranquila. ___ diría, pero él también está nerviosísimo.', options: ['Lo se', 'Se lo', 'Le lo'], answer: 1, why: 'Condicional: verbo conjugado, pronombres antes. Le → se: se lo diría.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['Se', 'lo', 'diría', 'pero', 'no', 'quiero', 'preocuparla'], accept: ['Se lo diría pero no quiero preocuparla'], en: 'I’d tell her, but I don’t want to worry her.' },
            { tiles: ['No', 'se', 'las', 'des', 'todavía'], accept: ['No se las des todavía', 'Todavía no se las des'], en: 'Don’t give them to him yet.' },
            { tiles: ['Voy', 'a', 'explicárselo', 'esta', 'tarde'], accept: ['Voy a explicárselo esta tarde', 'Esta tarde voy a explicárselo'], en: 'I’m going to explain it to her this afternoon.' },
          ] },
        ] },
        { title: 'Transforma · Transform', mascot: '/autoestudio/mascot/noting.webp', blocks: [
          { kind: 'rewrite', title: 'Dos pronombres · Two pronouns', items: [
            { prompt: 'Bruno le dio los anillos a Noelia.', instruction: 'Cambia «los anillos» por un pronombre. Empieza con «Bruno». (Use two pronouns.)', accept: ['Bruno se los dio', 'Bruno se los dio a Noelia'] },
            { prompt: 'Tienes que decirle la hora a Óscar.', instruction: 'Cambia «la hora» por un pronombre y pon los dos pronombres antes de «tienes». (Both pronouns first.)', accept: ['Se la tienes que decir', 'Se la tienes que decir a Óscar'] },
            { prompt: 'Dale el ramo a Clara.', instruction: 'Haz la orden negativa con dos pronombres. Empieza con «No». (Negative command.)', accept: ['No se lo des', 'No se lo des a Clara'] },
            { prompt: 'Clara se está poniendo los zapatos.', instruction: 'Cambia «los zapatos» por un pronombre y pega los pronombres al gerundio. (Attach them to the gerund.)', accept: ['Clara está poniéndoselos'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tú dices cinco frases con nombres («Le doy el regalo a Clara», «Voy a mandarles las fotos a mis tíos»…) y tu alumno las repite rápido con dos pronombres, de las dos formas cuando se puede.' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Un audio de Clara', coach: 'Primero escucha sin leer. Listen first, read later.',
      steps: [
        { title: 'Desde el aeropuerto · From the airport', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: la idea general. Segunda escucha: tu alumno levanta la mano cada vez que oye dos pronombres juntos y dice si van antes o pegados. Después, las preguntas.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Fíjate en los pronombres: ¿antes o pegados? (Listen for gist, then details.)' } },
          { kind: 'listen', title: 'Unos favores', channel: 'MENSAJE DE VOZ · DE CLARA PARA NOELIA', src: '/audio/grammar-live/422.mp3',
            before: 'Es domingo por la mañana. Clara y Daniel se van de luna de miel y Clara le manda un audio a su hermana. ¿Qué crees que le dice? ¿Le pide algo? (What do you think she says? Does she ask for anything?)',
            gist: { prompt: '¿Cuál es la idea general? · What is the main idea?', options: ['Clara da las gracias y le pide a Noelia varios favores.', 'Clara cuenta que perdieron el vuelo.', 'Clara se queja de la organización de la boda.'], answer: 0, why: 'Dice que la boda fue perfecta y le deja tareas: las llaves, el vestido, los regalos y un mensaje para Bruno.', en: 'What is the main idea?' },
            details: [
              { prompt: '¿Qué tiene que hacer Noelia con las llaves?', options: ['Guardarlas en su casa.', 'Devolvérselas al dueño antes de las doce.', 'Dárselas a mamá.'], answer: 1, why: '«Devuélveselas antes de las doce, por favor».', en: 'What does Noelia have to do with the keys?' },
              { prompt: '¿Para qué quiere la madre el vestido?', options: ['Para llevarlo a la tintorería.', 'Para guardarlo en una caja.', 'Para prestárselo a una amiga.'], answer: 0, why: '«Dáselo a mamá, que se lo quiere llevar a la tintorería».', en: 'Why does their mother want the dress?' },
              { prompt: '¿Qué pasa con los regalos?', options: ['Noelia puede abrirlos.', 'Mamá se los lleva a su casa.', 'Nadie los abre: los novios quieren abrirlos juntos.'], answer: 2, why: '«No se los des a nadie, ni siquiera a mamá: queremos abrirlos juntos».', en: 'What happens to the presents?' },
              { prompt: '¿Qué puede decirle Noelia a Bruno ahora?', options: ['Dónde están las fotos.', 'La hora del vuelo.', 'Qué canción bailaron los novios.'], answer: 2, why: '«Bruno quería saber qué canción bailamos. Ahora ya se lo puedes decir».', en: 'What can Noelia tell Bruno now?' },
            ],
            transcript: 'Hola, Noe, soy Clara. Ya estamos en el aeropuerto, el vuelo sale en una hora. Primero, gracias por todo: la boda fue perfecta. Te pido unos favores, porque con tantos nervios [[se me olvidaron|violet]] ayer. Las llaves de la finca: el dueño las necesita hoy, así que [[devuélveselas|orange]] antes de las doce, por favor. El vestido está en la habitación del hotel; [[dáselo|orange]] a mamá, que [[se lo quiere llevar|blue]] a la tintorería el lunes. Los regalos guárdalos en tu casa y [[no se los des|blue]] a nadie, ni siquiera a mamá: queremos abrirlos juntos. Ah, y la abuela de Daniel pregunta por las fotos. Óscar dice que [[está preparándoselas|orange]] y que [[nos las manda|blue]] el martes. Y una cosa más: Bruno quería saber qué canción bailamos. Ahora ya [[se lo puedes decir|blue]]: era la canción de los abuelos. ¡Un beso enorme, hermanita!',
            reply: { teacher: 'Tú eres Clara. Tu alumno es Noelia y responde al audio con tres frases: qué hizo ya, qué va a hacer y una pregunta para Clara. Con dos pronombres en cada frase cuando se pueda.', self: 'Responde a Clara en voz alta como Noelia: qué hiciste ya, qué vas a hacer y una pregunta. Usa dos pronombres: «Las llaves ya se las devolví…». (Answer Clara as Noelia.)' } },
          { kind: 'tip', icon: '🎧', title: 'Se lo quiere llevar · Two pronouns, two places', text: 'Clara dice «**se lo quiere llevar** a la tintorería»: con querer + infinitivo, los pronombres van antes del primer verbo. Igual de correcto: «quiere **llevárselo**». Aquí «se» es reflexivo (llevarse algo: take it away with her) y «lo» es el vestido.', en: 'Clara says “se lo quiere llevar”: with querer + infinitive, the pronouns go before the first verb. Just as correct: “quiere llevárselo”. Here “se” is reflexive (llevarse: to take something away with you) and “lo” is the dress.' },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Favores, secretos y olvidos', coach: 'Habla con dos pronombres. Speak with two pronouns.',
      steps: [
        { title: '¿A quién se lo das? · Who do you give it to?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas y tu alumno responde con dos pronombres juntos. Si los pone en otro orden o en otro sitio, tú repites la frase bien y sigues con la repregunta.', self: 'Lee la pregunta y responde en voz alta con dos pronombres. Después, si quieres, escribe tu respuesta. (Answer aloud with two pronouns.)' } },
          { kind: 'talk', cards: [
            { q: '¿Prestas tus cosas? ¿A quién le prestas tu coche, tus libros o tu ropa? · Do you lend your things? Who to?', followUps: ['¿Alguien te devolvió algo roto? (Did anyone give something back broken?)', '¿Qué no le prestas nunca a nadie? (What do you never lend?)'], phrases: ['El coche [[se lo|blue]] presto a…', 'Mis libros [[no se los|blue]] dejo a nadie.', 'Mi hermana [[me la|blue]] devolvió…'], hint: 'La cosa delante y dos pronombres: «El coche se lo presto a mi hermano».', example: 'El coche solo se lo presto a mi hermano, porque conduce bien. Mis libros no se los dejo a nadie: una vez se los dejé a un amigo y no me los devolvió. La ropa sí se la presto a mi hermana.', next: 'Ahora, un secreto.' },
            { q: 'Alguien te cuenta una sorpresa. ¿A quién se lo cuentas? ¿A quién no? · Someone tells you about a surprise. Who do you tell?', followUps: ['¿Qué le dices a alguien que quiere saberlo? (What do you say to someone who wants to know?)', '¿Te han contado un secreto alguna vez y se te escapó? (Did a secret ever slip out?)'], phrases: ['[[Te lo diría|blue]], pero…', '[[No se lo digas|blue]] a…', '[[Se lo puedo contar|blue]] a… / [[puedo contárselo|orange]] a…'], hint: 'Condicional y orden negativa: los pronombres van antes.', example: 'Si es una sorpresa, no se lo cuento a nadie, solo a mi pareja. Si alguien me pregunta, le digo: «Te lo diría, pero no puedo». Y a mi amiga le digo: «No se lo digas a nadie, ¿eh?».', next: 'Ahora, instrucciones.' },
            { q: 'Organizas una fiesta y un amigo te ayuda. Dale instrucciones sobre el regalo, las llaves y las bebidas. · Give a friend instructions for a party.', followUps: ['¿Y qué no tiene que hacer? (And what mustn’t he do?)', '¿Cuándo vas a dárselo tú? (When are you going to give it?)'], phrases: ['El regalo, [[dáselo|orange]] a…', 'Las llaves, [[no se las des|blue]] a…', 'Las bebidas, [[pónmelas|orange]] en…'], hint: 'Orden afirmativa: pegados y con tilde. Orden negativa: antes.', example: 'El regalo, dáselo a Marta cuando llegue. Las llaves no se las des a nadie: guárdalas tú. Las bebidas, pónmelas en la nevera, por favor. Las velas se las voy a poner yo a la tarta a las doce.', next: 'Ahora, cosas que se te olvidan.' },
            { q: '¿Qué se te olvida a menudo? ¿Se te ha perdido o roto algo importante? · What do you often forget? Have you lost or broken something important?', followUps: ['¿Quién te lo recuerda? (Who reminds you?)', '¿Qué hiciste después? (What did you do next?)'], phrases: ['[[Se me olvidan|violet]] las llaves…', '[[Se me rompió|violet]] el móvil…', 'Mi madre [[me lo|blue]] recuerda…'], hint: '«Se» siempre primero: se me olvida, se me olvidan, se me rompió.', example: 'Se me olvidan mucho las llaves: por eso mi vecina tiene otras. El año pasado se me rompió el móvil en un viaje y mi hermano me prestó el suyo. Se lo devolví una semana después.', next: 'Para terminar, tú eres Noelia.' },
            { q: 'Ahora tú eres Noelia. Es lunes y Bruno te pregunta qué hiciste con las llaves, el vestido, los regalos y las fotos. · Now you are Noelia: answer Bruno.', followUps: ['¿Y la canción? ¿Ya me lo puedes decir? (And the song?)', '¿Necesitas ayuda con algo? (Do you need help?)'], phrases: ['Las llaves [[se las devolví|blue]] al dueño…', 'El vestido [[se lo di|blue]] a mamá…', 'Las fotos, Óscar [[está preparándoselas|orange]]…'], hint: 'La cosa delante y dos pronombres en cada respuesta.', example: 'Las llaves se las devolví al dueño el domingo. El vestido se lo di a mamá, y se lo llevó a la tintorería. Los regalos los tengo en casa: no se los voy a dar a nadie. Y la canción… ¡ya te lo puedo decir!', teacher: 'Tú eres Bruno y preguntas por cada cosa: «¿Y las llaves?», «¿Y el vestido?». Después, cambian los papeles.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno te pregunta por tus cosas («¿Prestas tu coche?», «¿Qué se te olvida?») y tú respondes con dos pronombres.', self: 'Ahora haz tú las preguntas en voz alta y respóndelas con otra situación de tu vida. (Now ask and answer with another situation.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Un mensaje con las últimas tareas', coach: 'Antes, pegados, con tilde. Before, attached, accent.',
      steps: [
        { title: 'Te dejo las tareas · I’m leaving you the jobs', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos cada par de pronombres: ¿orden? ¿sitio? ¿tilde? Después, tu alumno lee el mensaje en voz alta.', self: 'Escribe tu mensaje y toca «Revisar mi texto». Después, mira cada par de pronombres: ¿orden, sitio y tilde? (Check order, position and accent.)' } },
          { kind: 'write', title: 'Las últimas tareas · The last jobs', situation: 'Eres Noelia (o eres tú, después de una fiesta o un evento tuyo). Mañana te vas de viaje y un amigo termina las tareas. Escríbele un mensaje: qué hiciste ya y qué tiene que hacer él. (You are leaving tomorrow: write to a friend who will finish the jobs.)', task: [
            'Cuenta dos cosas que ya hiciste con dos pronombres antes del verbo: «Las llaves ya se las devolví…». (Two things already done.)',
            'Da una orden afirmativa con pronombres pegados y tilde: «dáselo», «mándamelas». (One affirmative command.)',
            'Da una orden negativa: «no se lo digas», «no se las des». (One negative command.)',
            'Cuenta un plan con una perífrasis: «voy a pedírselas» o «se lo tengo que decir». (A plan with ir a / tener que.)',
          ], starters: ['Hola, …:', 'Mañana me voy temprano, así que te dejo…', '… ya se las devolví…', '… te la mandé…', '…, dáselo…', '… no se los des a nadie…', 'Voy a pedírselas…', 'Ah, se me olvidó una cosa:', 'Un abrazo,'],
            words: ['se lo', 'se la', 'te la', 'me los', 'dáselo', 'dámelo', 'no se lo digas', 'voy a dárselo', 'se lo tengo que', 'se me olvidó'],
            model: 'Hola, Bruno: Mañana me voy temprano, así que te dejo las últimas tareas de la boda. Las llaves de la finca ya [[se las devolví|blue]] al dueño esta mañana, y la lista de los músicos [[te la mandé|blue]] por correo. El regalo de la abuela está en mi coche: [[dáselo|orange]] el lunes, cuando la veas. Las fotos de Óscar todavía no han llegado; [[voy a pedírselas|orange]] otra vez esta noche. Los regalos de los novios, [[no se los des|blue]] a nadie: Clara quiere abrirlos con Daniel. Ah, [[se me olvidó|violet]] una cosa: Clara ya me dio permiso, así que [[te lo puedo decir|blue]]: la canción del baile era la de sus abuelos. ¡Gracias por todo! Un abrazo, Noelia.',
            minWords: 80,
            checks: [
              { label: 'Dos pronombres antes del verbo (before the verb)', pattern: '(?<!\\p{L})(?:se|me|te|nos|os)\\s+(?:lo|la|los|las)\\s+\\p{L}+', tip: 'Escribe dos pronombres juntos antes de un verbo conjugado: «Las llaves ya se las devolví».' },
              { label: 'Dos pronombres pegados (attached)', pattern: '\\p{L}+(?:me|te|se|nos)(?:lo|la|los|las)(?!\\p{L})', tip: 'Pega dos pronombres a una orden o a un infinitivo: «dáselo», «voy a pedírselas».' },
              { label: '«No» + dos pronombres (no + two pronouns)', pattern: '(?<!\\p{L})no\\s+(?:se|me|te|nos)\\s+(?:lo|la|los|las)\\s+\\p{L}+', tip: 'Escribe una orden negativa: «No se lo digas a nadie».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})(?:le|les)\\s+(?:lo|la|los|las)(?!\\p{L})', why: 'Delante de lo, la, los, las, **le** y **les** cambian a **se**: se lo, se las.' },
              { pattern: '(?<!\\p{L})(?:me|te|nos|os|le|les)\\s+se(?!\\p{L})', why: '«Se» va siempre primero: **se me** olvidó, **se te** cayó.' },
              { pattern: '(?<!\\p{L})(?:(?:da|di|pon|haz|trae|deja|manda|devuelve|lleva|pide)|\\p{L}+(?:ar|er|ir))(?:me|te|se|nos)(?:lo|la|los|las)(?!\\p{L})', why: 'Con dos pronombres pegados, la palabra lleva tilde: **dámelo, dárselo, devuélveselas**.' },
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
            { tone: 'blue', label: 'ORDEN Y ANTES', formula: 'se › te · os › me · nos › lo · la · los · las + verbo conjugado', example: 'Te lo diría. Se lo he dado. No se lo digas.', caption: 'le / les → se; antes de haber; entre «no» y el verbo', en: 'le / les become se; before haber; between “no” and the verb' },
            { tone: 'orange', label: 'PEGADOS', formula: 'orden afirmativa · infinitivo · gerundio + dos pronombres', example: 'Dámelo. Para dárselo. Dándoselo.', caption: 'siempre con tilde', en: 'always with a written accent' },
            { tone: 'neutral', label: 'PERÍFRASIS', formula: 'se lo voy a dar = voy a dárselo', example: 'Se la tengo que decir. = Tengo que decírsela.', caption: 'antes del primero o al final; nunca en medio ni dos veces', en: 'before the first verb or at the end; never in the middle or twice' },
            { tone: 'violet', label: 'SE PRIMERO', formula: 'se + me · te · le + verbo', example: 'Se me olvidaron las llaves.', caption: 'nunca «me se»; el significado, en la clase 150', en: 'never “me se”; the meaning comes in class 150' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Dos preguntas: **¿qué orden?** Se primero, después la persona, al final la cosa (le / les → se). **¿Qué sitio?** Mira el verbo: conjugado o con «no» → antes; orden afirmativa, infinitivo o gerundio → pegados con tilde; perífrasis → las dos posiciones. Los dos pronombres, siempre juntos y una sola vez.', en: 'Two questions. Which order? Se first, then the person, then the thing (le / les become se). Which place? Look at the verb: conjugated or with “no” → before; affirmative command, infinitive or gerund → attached, with an accent; periphrasis → either position. The two pronouns always stay together, and appear only once.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: '—¿Le has dado las gracias a tu jefa? —Sí, ya ___.', options: ['he dádoselas', 'se las he dado', 'le las he dado'], answer: 1, why: 'Le → se; antes de «haber».', en: '“Have you thanked your boss?” “Yes, I already have.”' },
            { context: 'Preparan una fiesta sorpresa para Lucía. (A surprise party for Lucía.)', prompt: 'Tu amigo les dice a todos: «___ a Lucía, ¿eh?».', options: ['No le lo digan', 'No se lo digan', 'No díganselo'], answer: 1, why: 'Orden negativa (ustedes): no + se lo + subjuntivo.', en: 'Your friend tells everyone: “Don’t tell Lucía, OK?” (ustedes)' },
            { prompt: '¿Qué frase es correcta?', options: ['Necesito tu libro: préstamelo.', 'Necesito tu libro: prestamelo.', 'Necesito tu libro: me lo presta.'], answer: 0, why: 'Orden afirmativa (tú): pegados, con tilde: préstamelo.', en: 'Which sentence is correct?' },
            { prompt: '¡Uy! ___ cayó el café en la camisa.', options: ['Me lo', 'Me se', 'Se me'], answer: 2, why: '«Se» va siempre primero: se me cayó.', en: 'Oops! I spilled coffee on my shirt.' },
            { prompt: '¿Qué frase NO es correcta?', options: ['Podría explicártelo mañana.', 'Podría te lo explicar mañana.', 'Te lo podría explicar mañana.'], answer: 1, why: 'Con poder + infinitivo: antes del primer verbo o pegados al final, nunca en medio.', en: 'Which sentence is NOT correct?' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Ahora, un cambio de trabajo. Now, a job change.', blocks: [
          { kind: 'lead', text: 'Rocío deja su trabajo en una biblioteca y le pasa sus tareas a su compañero Hugo. Transforma sus frases con dos pronombres.', en: 'Rocío is leaving her job at a library and handing her tasks over to her colleague Hugo. Transform her sentences with two pronouns.' },
          { kind: 'rewrite', title: 'Las tareas de Rocío · Rocío’s tasks', items: [
            { prompt: 'Ya le he dado las llaves del archivo a la directora.', instruction: 'Cambia «las llaves del archivo» por un pronombre. Empieza con «Ya». (Two pronouns before haber.)', accept: ['Ya se las he dado', 'Ya se las he dado a la directora'] },
            { prompt: 'Hugo, mándales los horarios a los voluntarios.', instruction: 'Cambia «los horarios» por un pronombre. Empieza con «Hugo». (Affirmative command.)', accept: ['Hugo, mándaselos', 'Hugo, mándaselos a los voluntarios'] },
            { prompt: 'Voy a explicarte el programa nuevo el lunes.', instruction: 'Cambia «el programa nuevo» por un pronombre y pon los pronombres antes de «voy». (Both pronouns first.)', accept: ['Te lo voy a explicar el lunes'] },
          ] },
        ] },
        { title: 'Ampliación: variedades y casos especiales · Extension: varieties and special cases', mascot: '/autoestudio/mascot/noting.webp', coach: 'Opcional: regiones y matices. Optional: regions and nuances.', blocks: [
          { kind: 'lead', text: 'Cuatro casos para ir más lejos. **1.** En el habla de muchos países de América, cuando la persona es plural y la cosa singular, el plural pasa a la cosa: «—¿Les dijiste la noticia a tus padres? —Sí, **se los** dije» (= se lo dije a ellos). Es muy frecuente en la conversación; en la escritura formal se prefiere «**se lo** dije (a ellos)». **2.** Con «**hay que**», los pronombres van solo pegados: «Hay que **decírselo**» (no «se lo hay que decir»). **3.** Imperativo de nosotros: la -s final de «demos» desaparece delante de «se»: **démoselo**, **digámoselo**. **4.** «Lo» atributo (clase 111) también va antes o pegado en una perífrasis: «Parece fácil, pero no **lo va a ser**» = «no va a **serlo**».', en: 'Four cases to go further. 1. In everyday speech in many Latin American countries, when the receiver is plural and the thing singular, the plural moves onto the thing: “se los dije” (= I told it to them). It is very common in conversation; formal writing prefers “se lo dije (a ellos)”. 2. With “hay que”, pronouns can only be attached: “hay que decírselo”. 3. Nosotros commands drop the final -s of “demos” before “se”: démoselo, digámoselo. 4. Attribute “lo” also goes before or attached in a periphrasis: “no lo va a ser” = “no va a serlo”.' },
          { kind: 'tip', icon: '🌎', title: 'Se los dije · A Latin American plural', text: 'Si oyes en muchos países de América (México, Colombia, Argentina…) «Ya **se los** expliqué» hablando de **una** cosa y **varias** personas, entiende: «Ya se lo expliqué a ustedes / a ellos». No es un error de comprensión: es una variedad. Tú puedes usar siempre «se lo», correcto en todas partes.', en: 'If you hear “Ya se los expliqué” about one thing and several people, understand “I already explained it to you all / to them”. It is a regional variety. You can always use “se lo”, which is correct everywhere.' },
          { kind: 'choice', title: 'Variedades y casos especiales · Varieties and special cases', items: [
            { context: 'Una conversación en México. (A conversation in Mexico.)', prompt: '«Chicos, la respuesta ya se los dije ayer». En la norma general, sería…', options: ['La respuesta ya los dije ayer.', 'La respuesta ya les la dije ayer.', 'La respuesta ya se la dije ayer.'], answer: 2, why: 'Una cosa (la respuesta → la) y varias personas (les → se): se la dije. «Se los» con ese sentido es frecuente en América.', en: '“Guys, I already told you the answer yesterday.” In the general norm it would be…' },
            { context: 'Dos amigos y un cumpleaños. (Two friends and a birthday.)', prompt: 'El regalo es para Ana. ___ esta noche, ¿vale?', options: ['Démosselo', 'Se lo demos', 'Démoselo'], answer: 2, why: 'Demos + se lo → démoselo: la -s desaparece y la palabra lleva tilde.', en: 'The present is for Ana. Let’s give it to her tonight, OK?' },
            { context: 'En una oficina. (In an office.)', prompt: '¿Qué frase es correcta?', options: ['Hay que se lo decir al jefe.', 'Se lo hay que decir al jefe.', 'Hay que decírselo al jefe.'], answer: 2, why: 'Con «hay que», los pronombres solo van pegados al infinitivo.', en: 'Which sentence is correct?' },
            { context: 'Antes de un examen. (Before an exam.)', prompt: 'El examen parece fácil, pero no ___.', options: ['lo va a serlo', 'va a serlo', 'va a lo ser'], answer: 1, why: '«Lo» atributo en una perífrasis: pegado al final (o «no lo va a ser»), nunca en medio ni dos veces.', en: 'The exam looks easy, but it isn’t going to be.' },
          ] },
          { kind: 'teacher', text: 'Paso opcional, para alumnos fuertes o si sobra tiempo. Extra: tu alumno propone tres planes con «démoselo / digámoselo» para una fiesta sorpresa y dice una frase con «hay que + infinitivo + dos pronombres».' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 123 · Concordancia compleja con colectivos y cantidades', text: 'Ya combinas dos pronombres en su orden y en su sitio con cualquier forma del verbo: «Te lo diría», «No se lo digas», «Voy a dárselo». Los pronombres concuerdan con lo que sustituyen; en la clase 123 trabajas otra concordancia difícil: el verbo con colectivos y cantidades («**La gente** está contenta», «**La mitad** de los invitados…»). Es el paso natural: de concordar pronombres a concordar sujeto y verbo cuando la forma engaña.', en: 'You can now combine two pronouns in the right order and place with any verb form. Pronouns agree with what they replace; in class 123 you work on another tricky agreement: the verb with collective nouns and quantities (“La gente está contenta”, “La mitad de los invitados…”). It is the natural next step: from pronoun agreement to subject-verb agreement when the form is misleading.', href: '/gramatica/concordancia-compleja-con-colectivos-y-cantidades', label: 'Ir a la clase 123' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Qué le regalaste a tu mejor amigo en su último cumpleaños? ¿Cuándo se lo diste?». Respuesta esperada: «Le regalé un libro y se lo di en la cena». Tarea: escribir el mensaje de Escribir con una situación real.' },
        ] },
      ],
    },
  ],
};
