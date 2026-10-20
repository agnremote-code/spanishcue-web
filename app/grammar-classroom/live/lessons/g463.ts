import type { LiveLesson } from '../types';

/**
 * Lesson 463 · B2 · Pronombres: redundancia, duplicación y foco (course unit G163).
 * Builds on G042 (lo, la, los, las), G063 (le, les), G064 (se lo, me lo),
 * G065 (position), G033 (a mí, a ti) and above all G111 (lesson 411: topic
 * first + clitic, «a mí me», «lo es») and G122 (clitic order). Basic forms and
 * order are not retaught. B2 step: deciding when the clitic is OBLIGATORY
 * (definite object before the verb: Ese libro ya lo leí, *Ese libro ya leí;
 * tonic pronoun as object: Me lo dijo a mí, *Lo dijo a mí), RECOMMENDED (indirect
 * object after the verb: Le di el regalo a Juan; always with gustar-type verbs)
 * and ABSENT (focus fronting: ESO te dije yo, Eso mismo pensaba yo, Algo sabrá
 * Fernando, Tres años llevamos…, with stress and subject inversion; bare nouns).
 * Also contrastive topics with ellipsis (anchor: A Ana la llamé ayer; a Luis,
 * no), «a mí no me parece» (experiencer, contrast; *Yo me parece), «a mí me» is
 * not a vicious redundancy, «se» clarified by a ella / a usted. Norm and
 * variation: «le» for plural «les» (very frequent in speech, the norm
 * recommends «les», especially in writing); «se los dije» (= se lo dije a
 * ellos / ustedes), widespread in colloquial speech in much of Latin America,
 * not accepted by the RAE in formal writing. Leísmo / laísmo are left to C1 G181
 * and right dislocation to C1 G185 (preview in Ampliación, with «lo sé todo»).
 * Scene: Marta Ríos administers an apartment building; on Saturday a pipe burst
 * in Luis Paredes's flat (fifth floor, he was away) and water came into Ana
 * Beltrán's kitchen (fourth floor). Daniel Ferrer, the caretaker, handled it;
 * Fernando is the repair technician. Escuchar: Ana's voicemail to Marta
 * (es-CO-SalomeNeural, usted). Escribir: Marta's formal notice to the residents.
 */
export const lesson: LiveLesson = {
  id: 463,
  level: 'B2',
  title: 'Pronombres: redundancia, duplicación y foco',
  subtitle: 'Decidir cuándo el pronombre es obligatorio, recomendable o imposible: A Ana la llamé; le di la llave a Luis; ESO te dije.',
  legend: [
    { tone: 'blue', label: 'TEMA DELANTE · el objeto va primero y un pronombre lo retoma (A Ana la llamé)' },
    { tone: 'teal', label: 'INDIRECTO DUPLICADO · le / les / se + a alguien detrás del verbo (le di la llave a Luis)' },
    { tone: 'violet', label: 'TÓNICO + ÁTONO · a mí me, me lo dijo a mí, se la di a ella' },
    { tone: 'orange', label: 'FOCO SIN PRONOMBRE · ESO te dije, algo sabrá, tres años llevamos' },
  ],
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: '¿Pronombre sí o no?', coach: 'Decir dos veces no siempre sobra. Saying it twice isn’t always redundant.',
      steps: [
        { title: 'Lunes en el edificio · Monday at the building', blocks: [
          { kind: 'lead', text: 'Marta Ríos administra un edificio de viviendas. El sábado se rompió una tubería en el quinto piso, en casa de Luis, que estaba de viaje, y el agua entró en la cocina de Ana, la vecina del cuarto. El lunes, Daniel Ferrer, el conserje, se lo cuenta todo: «**A Ana la llamé** enseguida; **a Luis, no**». En B1 ya pusiste el tema delante. Hoy das el paso de B2: decidir cuándo el pronombre es **obligatorio**, cuándo es **recomendable** y cuándo **no aparece**.', en: 'Marta Ríos manages an apartment building. On Saturday a pipe burst on the fifth floor, in the flat of Luis, who was away, and the water got into the kitchen of Ana, the fourth-floor neighbour. On Monday Daniel Ferrer, the caretaker, tells Marta everything. At B1 you already put the topic first. Today’s B2 step: deciding when the pronoun is compulsory, when it is advisable and when it does not appear at all.' },
          { kind: 'guide', text: { teacher: 'Tú lees las tres frases con la entonación natural. Tu alumno dice qué palabra se destaca en cada una y si hay un pronombre que la repite.', self: 'Lee las tres frases en voz alta. ¿Qué se destaca en cada una? ¿Hay un pronombre que repite el objeto? (What stands out in each sentence?)' } },
          { kind: 'compare', title: 'Tres maneras de ordenar · Three ways to order', columns: [
            { tone: 'neutral', label: 'ORDEN NEUTRO', sentence: 'Daniel llamó a Ana el sábado.', idea: 'El objeto va detrás del verbo: no se repite.', en: 'Neutral order: the object follows the verb and is not repeated.' },
            { tone: 'blue', label: 'TEMA DELANTE', sentence: '[[A Ana la llamé|blue]] el sábado; a Luis, no.', idea: 'Ana es el tema, algo ya conocido que se contrasta con Luis. El pronombre «la» la retoma.', en: 'Ana is the topic, something already known and contrasted with Luis; the pronoun picks her up again.' },
            { tone: 'orange', label: 'FOCO DELANTE', sentence: '[[Eso mismo le dije yo|orange]] al técnico.', idea: '«Eso mismo» no es el tema: es lo que Daniel destaca con énfasis. No lleva pronombre.', en: '“Eso mismo” is not the topic but what Daniel stresses (“that’s exactly what I told him”). No pronoun.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«A Ana la llamé; a Luis, no». ¿Llamó Daniel a Luis?', options: ['No: «a Luis, no» niega la misma acción.', 'Sí, después de llamar a Ana.', 'No se sabe.'], answer: 0, why: 'La segunda parte repite el esquema sin verbo (elipsis): a Luis no lo llamé.', en: 'Did Daniel call Luis?' },
            { prompt: '¿Por qué no hay «lo» en «Eso mismo le dije yo al técnico»?', options: ['Porque «eso mismo» es femenino.', 'Porque «eso mismo» es el foco destacado, no el tema.', 'Porque es un error frecuente.'], answer: 1, why: 'Cuando lo que va delante es el foco, con énfasis, no se repite con pronombre.', en: 'Why is there no “lo”?' },
          ] },
        ] },
        { title: 'Tema delante: el pronombre es obligatorio · Topic first: the pronoun is a must', mascot: '/brand/mascot/studying.webp', coach: 'Delante y conocido: con pronombre. Before the verb and known: pronoun.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'DUPLICACIÓN OBLIGATORIA', question: '¿Pones delante un objeto que ya es tema de la conversación?', en: 'When a definite direct object (with an article, a demonstrative, a possessive or a name) comes before the verb as the topic, a clitic must pick it up: “Ese libro ya lo leí”; “*Ese libro ya leí” is not normal Spanish. A fronted indirect object almost always takes le / les too. When you contrast two topics, the second one often goes without the verb: “a Luis, no”.', formula: ['objeto directo definido delante → lo / la / los / las (obligatorio)', 'objeto indirecto delante → le / les (lo normal)', 'tema 1 + pronombre + verbo; tema 2, no / también (elipsis)'],
            meaning: 'Si el objeto directo **definido** (con artículo, demostrativo, posesivo o nombre propio) va **delante** como tema, el pronombre es **obligatorio**: «Ese libro ya **lo** leí», nunca «*Ese libro ya leí». El indirecto delante lleva casi siempre **le / les**. Para contrastar dos temas, el segundo suele ir sin verbo.',
            examples: [
              { es: '[[El presupuesto del técnico ya lo firmé|blue]]; el de la pintura, todavía no.', en: 'I’ve already signed the technician’s quote; the painting one, not yet (two contrasted topics).' },
              { es: '[[A los vecinos del tercero les dejé|blue]] una nota en el buzón.', en: 'I left the third-floor neighbours a note in their mailbox (fronted indirect object).' },
              { es: '[[El agua la cortamos|blue]] a las diez; la luz, no.', en: 'We cut off the water at ten; the electricity, no.' },
            ],
            note: 'Recuerda la excepción de B1: con un nombre **sin artículo** delante no hay pronombre: «Llaves de repuesto no tengo».' },
          { kind: 'table', title: 'Detrás o delante · After or before the verb', head: ['Objeto', 'Detrás del verbo', 'Delante (tema)'], rows: [
            ['directo, cosa', 'Firmé el presupuesto.', 'El presupuesto **lo** firmé.'],
            ['directo, persona', 'Llamé a Ana.', 'A Ana **la** llamé.'],
            ['indirecto', '(**Le**) di la llave a Daniel.', 'A Daniel **le** di la llave.'],
            ['directo sin artículo', 'No tengo llaves de repuesto.', 'Llaves de repuesto no tengo. (sin pronombre)'],
          ], note: 'Detrás del verbo, el objeto directo no se repite en la norma general: «*Lo firmé el presupuesto» es un error.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Las fotos de los daños ya ___ al seguro.', options: ['las mandé', 'les mandé', 'mandé'], answer: 0, why: 'Objeto directo definido delante (las fotos): pronombre obligatorio, femenino plural.', en: 'I’ve already sent the photos of the damage to the insurer.' },
            { prompt: '—¿Avisaste a la presidenta y al técnico? —A la presidenta, sí; ___.', options: ['al técnico no avisé', 'no al técnico lo', 'al técnico, no'], answer: 2, why: 'El segundo tema contrastado va con elipsis: «al técnico, no».', en: '“Did you let the chairwoman and the technician know?” “The chairwoman, yes; the technician, no.”' },
          ] },
        ] },
        { title: 'Le… a Juan: el indirecto duplicado · Doubling the indirect object', mascot: '/brand/mascot/standing.webp', coach: 'Le di el regalo a Juan: lo más natural. The most natural option.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'DUPLICACIÓN RECOMENDADA', question: '¿El indirecto (a + persona) va detrás del verbo?', en: 'With the indirect object after the verb, adding le / les is grammatically optional but extremely frequent, and it is the advisable choice in speech: “Le di el regalo a Juan”. With gustar-type verbs (gustar, doler, parecer, pasar, quedar) it is always there. Leaving it out sounds more formal or written: “Entregó el premio al ganador”.', formula: ['le / les + verbo + objeto + a + persona', 'Le di el regalo a Juan · Les mandé un aviso a los vecinos', 'gustar, doler, parecer, pasar, quedar: le / les siempre'],
            meaning: 'Detrás del verbo, «le / les» con el indirecto es **opcional**, pero **muy frecuente** y lo más natural en la lengua hablada: «**Le** di el regalo a Juan». Con verbos como **gustar, doler, parecer, pasar o quedar**, está **siempre**. Sin «le», la frase suena más formal o escrita: «Entregó el premio al ganador».',
            examples: [
              { es: '[[Le di el teléfono del seguro a Ana|teal]] el mismo sábado.', en: 'I gave Ana the insurance phone number that very Saturday (le + a Ana: the usual pattern).' },
              { es: '[[Les pedimos paciencia a los vecinos|teal]] durante las obras.', en: 'We asked the neighbours for patience during the work (plural: les).' },
              { es: 'A Luis [[le pasa|teal]] siempre lo mismo: se va de viaje y algo se rompe.', en: 'The same thing always happens to Luis (pasar: the pronoun is always there).' },
            ] },
          { kind: 'tip', icon: '⚠', title: 'Le di las llaves a mis vecinos · le for les', text: 'En la conversación, en España y en América, es **muy frecuente** usar «le» con un indirecto plural: «**Le** di las llaves a mis vecinos». La norma recomienda la concordancia, sobre todo por escrito: «**Les** di las llaves a mis vecinos». En un correo formal o un acta, usa siempre **les**.', en: 'In conversation, both in Spain and Latin America, people very often use “le” with a plural indirect object. The norm recommends agreement, especially in writing: “Les di las llaves a mis vecinos”. In a formal email or minutes, always use “les”.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'En un comunicado formal: «___ recordamos a todos los propietarios que la reunión es el martes».', options: ['Le', 'Los', 'Les'], answer: 2, why: 'Indirecto plural (a todos los propietarios): en un texto formal, «les».', en: 'In a formal notice: “We remind all owners that the meeting is on Tuesday.”' },
            { prompt: '¿Qué frase es la más natural en una conversación?', options: ['Duele la espalda a Daniel.', 'A Daniel le duele la espalda.', 'A Daniel duele la espalda.'], answer: 1, why: 'Con «doler», el pronombre está siempre: le duele.', en: 'Which sentence is the most natural in conversation?' },
          ] },
        ] },
        { title: 'A mí me…: tónico y contraste · Tonic pronouns and contrast', mascot: '/brand/mascot/speaking.webp', coach: 'A mí, nunca solo. “A mí” never goes alone.', blocks: [
          { kind: 'concept', tone: 'violet', label: 'TÓNICO + ÁTONO', question: '¿Quieres contrastar a una persona o aclarar a quién se refiere «se»?', en: 'A tonic pronoun (a mí, a ti, a ella, a usted…) as an object never appears on its own: the clitic is compulsory. “Me lo dijo a mí” is right; “*Lo dijo a mí” is not. It adds contrast (to me, not to others) or makes “le / se” clear (a ella, a usted). This is not a faulty redundancy: “a mí me” is perfectly correct Spanish.', formula: ['me… a mí · te… a ti · le / se… a él, a ella, a usted', 'Me lo dijo a mí ✓ · *Lo dijo a mí ✗', 'A mí no me parece justo (contraste)'],
            meaning: 'Un pronombre tónico como objeto (**a mí, a ti, a ella, a usted…**) **nunca va solo**: el átono es obligatorio. Sirve para **contrastar** (a mí, no a otros) o para **aclarar** a quién se refiere «le / se». No es una redundancia incorrecta: «a mí me» es español impecable.',
            examples: [
              { es: 'El técnico [[me lo explicó a mí|violet]], no a Daniel.', en: 'The technician explained it to me, not to Daniel (contrast).' },
              { es: 'La copia era de su hermana, así que [[se la devolví a ella|violet]].', en: 'The spare key belonged to his sister, so I gave it back to her (“a ella” makes “se” clear).' },
              { es: 'Dicen que la obra es cara, pero [[a mí no me parece|violet]] cara.', en: 'People say the work is expensive, but I don’t think so (contrast with what others say).' },
            ] },
          { kind: 'compare', title: 'Opinar: yo o a mí · Giving an opinion', columns: [
            { tone: 'neutral', label: 'SUJETO: YO', sentence: 'Yo creo que hay que cambiar la tubería.', idea: '«Creer, pensar, opinar»: la persona es el sujeto.', en: 'With creer, pensar or opinar, the person is the subject: “yo”.' },
            { tone: 'violet', label: 'A QUIEN LE AFECTA: A MÍ', sentence: '[[A mí me parece|violet]] que hay que cambiar la tubería.', idea: '«Parecer» funciona como «gustar»: a mí + me. Nunca «*Yo me parece».', en: '“Parecer” works like “gustar”: “a mí me parece”. Never “*Yo me parece”.' },
          ] },
          { kind: 'tip', icon: '🌎', title: 'Se lo dije a ellos · «se los dije»', text: 'Con varios destinatarios, «se» no cambia y «lo» concuerda con la cosa: «**Se lo** dije a ellos» (lo = lo que dije). En el habla coloquial de muchas zonas de América es muy frecuente «Ya **se los** dije», con la -s para indicar que son varias personas. Es un uso muy extendido, pero la RAE no lo acepta en la escritura formal: en un texto cuidado, «**se lo** dije a ustedes».', en: 'With several recipients, “se” stays the same and “lo” agrees with the thing: “Se lo dije a ellos”. In colloquial speech across much of Latin America, “Ya se los dije” is very common, with the -s marking several people. It is widespread, but the RAE does not accept it in formal writing: there, write “se lo dije a ustedes”.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Daniel insiste: «El técnico no habló con Ana: ___».', options: ['dijo a mí', 'lo dijo a mí', 'me lo dijo a mí'], answer: 2, why: 'El tónico «a mí» exige el átono «me»: me lo dijo a mí.', en: '“The technician didn’t talk to Ana: he told me.”' },
            { prompt: 'Marta escribe un acta: «El acuerdo ___ comunicamos a los propietarios el lunes».', options: ['se lo', 'les lo', 'se los'], answer: 0, why: '«Lo» = el acuerdo (singular). En un texto formal, «se lo», aunque los destinatarios sean varios.', en: '“We informed the owners of the agreement on Monday.”' },
          ] },
        ] },
        { title: 'Tema o foco · Topic or focus', mascot: '/autoestudio/mascot/noting.webp', coach: '¿Conocido o destacado? Known or highlighted?', blocks: [
          { kind: 'concept', tone: 'orange', label: 'FOCO DELANTE: SIN PRONOMBRE', question: '¿Lo que va delante es información conocida o lo que quieres destacar, corregir o subrayar?', en: 'Not everything placed before the verb is a topic. When the fronted element is the focus (the part you stress, correct or insist on), it carries the main stress, the verb follows straight away, the subject goes after the verb, and there is no clitic: “ESO te dije yo” (that is exactly what I told you). Typical focus words: eso, eso mismo, algo, nada, poco, and amounts of time.', formula: ['TEMA: Eso te lo dije ayer. (conocido, pausa, con pronombre)', 'FOCO: ESO te dije yo. (destacado, con énfasis, sin pronombre)', 'foco frecuente: eso (mismo), algo, nada, poco, cantidades'],
            meaning: 'No todo lo que va delante es tema. Si es el **foco** (lo que destacas, corriges o subrayas), lleva el **acento principal**, el verbo va justo detrás, el sujeto se coloca **después del verbo** y **no hay pronombre**: «ESO te dije yo» = eso exactamente, no otra cosa.',
            examples: [
              { es: '[[Eso mismo pensaba yo|orange]]: la tubería tenía cuarenta años.', en: 'That’s exactly what I was thinking: the pipe was forty years old.' },
              { es: '[[Algo sabrá Fernando|orange]]: vino a revisarla dos veces.', en: 'Fernando must know something: he came to check it twice (indefinite focus + future of probability).' },
              { es: '[[Tres años llevamos|orange]] pidiendo una tubería nueva.', en: 'We’ve been asking for a new pipe for three whole years (the amount is stressed).' },
            ] },
          { kind: 'decide', title: '¿Hace falta el pronombre? · Do you need the pronoun?', steps: [
            { q: '¿El objeto va delante del verbo?', yes: 'Sigue con la pregunta 2.', no: 'Directo: sin pronombre (Firmé el presupuesto). Indirecto: «le / les» recomendable (Le di la llave a Daniel).' },
            { q: '¿Es información ya conocida, el tema, a menudo seguida de una pausa?', yes: 'Pronombre obligatorio: Esa tubería la cambiaron en 2010.', no: 'Sigue con la pregunta 3.' },
            { q: '¿Lo destacas con énfasis (eso, algo, nada, una cantidad, una corrección)?', yes: 'Foco: sin pronombre y con el sujeto detrás (ESO te dije yo).', no: 'Revisa la frase: un objeto definido delante casi siempre es tema y necesita pronombre.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { context: 'Ana había avisado de que la tubería estaba vieja. Ahora se ha roto.', prompt: '«¿Lo ves, Marta? ___»', options: ['ESO le dije yo a Daniel.', 'Eso dije a Daniel yo.', 'Yo eso lo dije le a Daniel.'], answer: 0, why: 'Foco de insistencia: «eso» con énfasis, sin «lo», y el sujeto «yo» detrás del verbo.', en: '“See, Marta? That’s exactly what I told Daniel.”' },
            { prompt: '¿En qué frase es «eso» un tema y no un foco?', options: ['Eso mismo pensaba yo.', 'Eso ya te lo expliqué ayer.', 'ESO te dije.'], answer: 1, why: 'Con «lo», «eso» es algo conocido de lo que se habla (tema). Las otras dos lo destacan.', en: 'In which sentence is “eso” a topic, not a focus?' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: '¿Falta o sobra el pronombre? Missing or extra pronoun?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees cada frase con el error y tu alumno dice si falta o sobra un pronombre antes de ver la corrección.', self: 'Lee cada frase: ¿falta o sobra un pronombre? Decide y después mira la corrección. (Is a pronoun missing or extra?)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Ese informe ya terminé.', right: 'Ese informe ya lo terminé.', why: 'Objeto directo definido delante como tema: el pronombre es obligatorio.' },
            { wrong: 'Lo dijo a mí, no a Daniel.', right: 'Me lo dijo a mí, no a Daniel.', why: 'El tónico «a mí» nunca va solo: exige «me».' },
            { wrong: 'A mí no parece justo.', right: 'A mí no me parece justo.', why: '«Parecer» funciona como «gustar»: a mí + me.' },
            { wrong: 'Yo me parece que es caro.', right: 'A mí me parece que es caro. / Yo creo que es caro.', why: 'Con «parecer» la persona va con «a»: a mí me parece. Con «yo», usa «creo» o «pienso».' },
            { wrong: 'Lo cambiaron la tubería el martes.', right: 'Cambiaron la tubería el martes.', why: 'Detrás del verbo, el objeto directo no se duplica en la norma general.' },
            { wrong: 'Les lo expliqué a ellos.', right: 'Se lo expliqué a ellos.', why: 'Delante de lo / la / los / las, le y les cambian a «se».' },
            { wrong: '(En un correo formal) Le enviamos el acta a todos los vecinos.', right: 'Les enviamos el acta a todos los vecinos.', why: '«Le» con plural es muy frecuente al hablar, pero la norma recomienda «les», sobre todo por escrito.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'La llave de repuesto ___ a la hermana de Luis.', options: ['devolví', 'le la devolví', 'se la devolví'], answer: 2, why: 'Tema delante (la llave) → la; a la hermana (le) → se: se la devolví.', en: 'I gave the spare key back to Luis’s sister.' },
            { prompt: '¿Qué frase es correcta?', options: ['A ti te lo conté primero.', 'A ti lo conté primero.', 'Te lo conté primero a tú.'], answer: 0, why: '«A ti» va con «te»; «a tú» no existe.', en: 'Which sentence is correct?' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno cuenta a quién llamó o escribió esta semana y a quién no, con el esquema «A X lo / la llamé; a Y, no».' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'Lo que pasó el sábado', coach: 'Toca cada expresión marcada. Tap each marked expression.',
      steps: [
        { title: 'En la oficina del edificio · At the building office', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Daniel y tu alumno es Marta. Después tu alumno toca cada expresión marcada y dice si es tema, indirecto duplicado, tónico o foco.', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada: ¿tema, indirecto duplicado, tónico o foco? (Tap each marked expression and name its type.)' } },
          { kind: 'explore', title: '¿Quién avisó a quién?', setting: 'Lunes, nueve de la mañana. Marta, la administradora, repasa con Daniel, el conserje, lo que pasó el sábado. Se tratan de tú. (Monday, 9 a.m.: the manager and the caretaker go over Saturday’s leak.)', lines: [
            { who: 'Marta', text: 'Buenos días, Daniel. ¿Qué pasó el sábado? [[A mí nadie me avisó|violet]] hasta anoche.', en: 'Morning, Daniel. What happened on Saturday? Nobody told me until last night.' },
            { who: 'Daniel', text: 'Perdona, Marta, fue todo muy rápido. La fuga venía del quinto, de casa de Luis. [[A Ana la llamé|blue]] enseguida, porque le caía agua en la cocina; [[a Luis, no|blue]]: estaba de viaje.', en: 'Sorry, Marta, it all happened very fast. The leak came from the fifth floor, from Luis’s place. Ana I called straight away, because water was dripping into her kitchen; Luis, no: he was away.' },
            { who: 'Marta', text: '¿Y cómo entraron en su casa? ¿Quién tenía llave?', en: 'And how did you get into his flat? Who had a key?' },
            { who: 'Daniel', text: 'Su hermana tiene una copia, así que [[se la pedí a ella|violet]] y en veinte minutos estaba aquí.', en: 'His sister has a spare, so I asked her for it and she was here in twenty minutes.' },
            { who: 'Marta', text: 'Bien hecho. ¿Y [[le diste el teléfono del seguro a Ana|teal]]?', en: 'Well done. And did you give Ana the insurance phone number?' },
            { who: 'Daniel', text: 'Sí, [[se lo di a los dos|teal]], a ella y a su marido. Y [[a los del tercero les dejé|blue]] una nota en el buzón.', en: 'Yes, I gave it to both of them, her and her husband. And I left the third-floor people a note in their mailbox.' },
            { who: 'Marta', text: 'Perfecto. Lo que no entiendo es por qué nadie revisó esa tubería antes.', en: 'Great. What I don’t understand is why nobody checked that pipe earlier.' },
            { who: 'Daniel', text: '[[Eso mismo le dije yo|orange]] al técnico en marzo: que estaba vieja.', en: 'That’s exactly what I told the technician in March: that it was old.' },
            { who: 'Marta', text: 'Pues [[a mí no me consta|violet]]. ¿Lo dejaste por escrito?', en: 'Well, I have no record of that. Did you put it in writing?' },
            { who: 'Daniel', text: 'No, se lo comenté de palabra. Pero [[algo sabrá Fernando|orange]]: vino a mirarla dos veces.', en: 'No, I only mentioned it to him. But Fernando must know something: he came to look at it twice.' },
            { who: 'Marta', text: 'Vale. [[A los vecinos les escribo|blue]] yo hoy un comunicado, y [[el informe para el seguro lo preparas|blue]] tú, ¿de acuerdo?', en: 'OK. I’ll write the residents a notice today, and you prepare the insurance report, all right?' },
            { who: 'Daniel', text: 'De acuerdo. ¿Y a Luis quién se lo cuenta? Todavía no sabe nada.', en: 'Agreed. And who’s going to tell Luis? He still doesn’t know anything.' },
          ], notes: {
            'A mí nadie me avisó': '**Tónico + átono**: «a mí» nunca va solo, siempre con «me». Marta se contrapone a los demás: otros lo sabían, ella no.',
            'A Ana la llamé': '**Tema delante**: Ana ya es tema de la conversación. «Llamar a alguien» lleva objeto directo, así que el pronombre obligatorio es «la».',
            'a Luis, no': 'Segundo tema en **contraste**, con elipsis: no se repiten el verbo ni el pronombre (= a Luis no lo llamé). La coma marca la pausa.',
            'se la pedí a ella': '«se» = a su hermana (le → se ante «la»), «la» = la copia. «A ella» aclara a quién se refiere «se»; con el tónico, el átono es obligatorio.',
            'le diste el teléfono del seguro a Ana': '**Indirecto duplicado** detrás del verbo: «le… a Ana». Sin «le» sería gramatical, pero mucho menos natural al hablar.',
            'se lo di a los dos': '«se» = les (a Ana y a su marido); «lo» = el teléfono, en singular. En muchas zonas de América se oye «se los di» en la conversación; en un texto formal, «se lo».',
            'a los del tercero les dejé': '**Indirecto delante** como tema: lleva «les», en plural porque son varios vecinos.',
            'Eso mismo le dije yo': '**Foco**: «eso mismo» se destaca con énfasis, por eso no hay «lo». El sujeto «yo» va detrás del verbo. «le… al técnico» es un indirecto duplicado.',
            'a mí no me consta': '«No me consta» = no tengo constancia, no lo sé de manera segura. «A mí» marca el contraste con lo que dice Daniel.',
            'algo sabrá Fernando': '**Foco** con un indefinido: «algo» delante, sin pronombre y con el sujeto detrás. «Sabrá» es futuro de probabilidad (clase 161).',
            'A los vecinos les escribo': '**Indirecto delante**: «les» retoma «a los vecinos». Marta lo pone primero para repartir las tareas: los vecinos, para ella.',
            'el informe para el seguro lo preparas': '**Tema delante**: objeto directo definido, pronombre obligatorio «lo». Contrasta con la tarea anterior: el informe, para Daniel.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Por qué no llamó Daniel a Luis?', options: ['Porque Ana ya lo había llamado.', 'Porque estaba de viaje.', 'Porque no tenía su número.'], answer: 1, why: '«A Luis, no: estaba de viaje».', en: 'Why didn’t Daniel call Luis?' },
            { prompt: '¿Quién tiene una copia de la llave de Luis?', options: ['Su hermana.', 'El técnico.', 'Ana.'], answer: 0, why: '«Su hermana tiene una copia, así que se la pedí a ella».', en: 'Who has a spare key to Luis’s flat?' },
            { prompt: '¿Cómo se reparten las tareas?', options: ['Marta escribe a los vecinos y Daniel hace el informe.', 'Fernando se encarga de todo.', 'Daniel escribe a los vecinos y Marta hace el informe.'], answer: 0, why: '«A los vecinos les escribo yo… el informe lo preparas tú».', en: 'How do they share out the tasks?' },
          ] },
        ] },
        { title: 'Marta escribe a Luis · Marta texts Luis', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'chat-fill', title: 'Mensajes del lunes · Monday’s texts', lines: [
            { who: 'Marta', text: 'Hola, Luis. El sábado hubo una fuga en tu baño. Tranquilo: la tubería ya ___ el técnico.', options: ['la cambió', 'cambió', 'le cambió'], answer: 0, why: 'Tema delante (la tubería): pronombre obligatorio, femenino singular.' },
            { who: 'Luis', text: '¡Qué desastre! ¿Y cómo entraron? La única copia de la llave ___ mi hermana.', options: ['le tiene', 'tiene', 'la tiene'], answer: 2, why: 'Objeto directo definido delante: «la copia… la tiene».' },
            { who: 'Marta', text: 'Lo sabemos. Daniel ___ y vino enseguida.', options: ['la pidió a ella', 'se la pidió a ella', 'le la pidió a ella'], answer: 1, why: 'Con «a ella», el átono es obligatorio; le + la → se la.' },
            { who: 'Luis', text: 'Menos mal. ¿Y a Ana ___ mucha agua en casa?', options: ['le entró', 'la entró', 'entró'], answer: 0, why: 'Indirecto delante (a Ana): «le». «Entrarle agua a alguien».' },
            { who: 'Luis', text: 'Pues ___ la llamo yo esta tarde para pedirle perdón.', options: ['ella', 'a ella', 'la'], answer: 1, why: 'Tónico como objeto de persona: «a ella», siempre con el átono «la».' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: tu alumno resume qué hizo Daniel el sábado empezando cada frase por la persona o la cosa: «A Ana…», «La llave…», «A los del tercero…».' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: '¿Tema, foco o detrás del verbo? Topic, focus or after the verb?',
      steps: [
        { title: 'La semana después de la fuga · The week after the leak', blocks: [
          { kind: 'choice', items: [
            { context: 'Marta repasa su lista de tareas.', prompt: 'La factura del técnico ya ___.', options: ['pagué', 'le pagué', 'la pagué'], answer: 2, why: 'Tema delante (la factura): «la» obligatorio. «Le» sería un indirecto.', en: 'I’ve already paid the technician’s invoice.' },
            { prompt: 'A la presidenta ___ el informe ayer.', options: ['mandé', 'le mandé', 'la mandé'], answer: 1, why: 'Indirecto delante (a la presidenta): «le». «La» sería objeto directo.', en: 'I sent the chairwoman the report yesterday.' },
            { context: 'Ana aclara quién recibió el presupuesto.', prompt: 'No se lo dieron a mi marido: ___.', options: ['dieron a mí', 'lo dieron a mí', 'me lo dieron a mí'], answer: 2, why: 'Con «a mí», el átono «me» es obligatorio.', en: 'They didn’t give it to my husband: they gave it to me.' },
            { context: 'Marta pregunta desde cuándo piden una tubería nueva.', prompt: 'Ana: «___ pidiéndola, Marta».', options: ['Tres años los llevamos', 'Tres años llevamos', 'Tres años lo llevamos'], answer: 1, why: 'Una cantidad destacada (foco): sin pronombre.', en: '“We’ve been asking for it for three years, Marta.”' },
            { prompt: 'A mí ___ caro el presupuesto, pero a Luis no.', options: ['me parezco', 'parece', 'me parece'], answer: 2, why: '«Parecer» como «gustar»: a mí me parece; el sujeto es «el presupuesto».', en: 'I think the quote is expensive, but Luis doesn’t.' },
          ] },
        ] },
        { title: '¿Tema o foco? · Topic or focus?', blocks: [
          { kind: 'classify', title: 'Frases de la semana · Sentences from the week', categories: [
            { id: 'tema', label: 'TEMA · con pronombre', tone: 'blue' },
            { id: 'foco', label: 'FOCO · sin pronombre', tone: 'orange' },
          ], items: [
            { text: 'Las facturas las guarda Daniel en la oficina.', answer: 'tema', why: 'Las facturas son algo conocido; «las» las retoma.' },
            { text: 'Eso mismo nos dijo el técnico.', answer: 'foco', why: '«Eso mismo» se destaca; sin pronombre y con el sujeto detrás.' },
            { text: 'A los del tercero les mandamos flores.', answer: 'tema', why: 'Indirecto delante como tema: «les».' },
            { text: 'Algo habrá oído la vecina del segundo.', answer: 'foco', why: 'Un indefinido delante: foco, sin pronombre.' },
            { text: 'La tubería vieja la quitaron el martes.', answer: 'tema', why: 'Objeto definido conocido: «la» obligatorio.' },
            { text: 'Mucho trabajo nos ha dado esta avería.', answer: 'foco', why: 'Una cantidad destacada («mucho trabajo»): sin pronombre, sujeto detrás.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'La pintura del techo ya elegimos.', ok: false, options: ['La pintura del techo ya lo elegimos.', 'La pintura del techo ya la elegimos.', 'La pintura del techo ya le elegimos.'], answer: 1, why: 'Tema delante, femenino singular: «la» obligatorio.' },
            { sentence: 'Se lo expliqué a ellos el lunes.', ok: true, why: 'Correcta: «se» = les, «lo» = lo explicado; «a ellos» aclara y lleva su átono.' },
            { sentence: 'Lo contaron a ella primero.', ok: false, options: ['Le lo contaron a ella primero.', 'Se lo contaron a ella primero.', 'La contaron a ella primero.'], answer: 1, why: 'Con «a ella», el átono es obligatorio; le + lo → se lo.' },
            { sentence: 'A nosotros parece bien el presupuesto.', ok: false, options: ['A nosotros les parece bien el presupuesto.', 'A nosotros nos parece bien el presupuesto.', 'Nosotros nos parece bien el presupuesto.'], answer: 1, why: '«Parecer» exige el átono: a nosotros nos parece.' },
            { sentence: 'Eso mismo te dije yo.', ok: true, why: 'Correcta: foco con énfasis, sin pronombre y con el sujeto detrás.' },
            { sentence: 'Lo arreglaron el ascensor ayer.', ok: false, options: ['Lo arreglaron ascensor ayer.', 'Arreglaron el ascensor ayer.', 'El ascensor arreglaron ayer.'], answer: 1, why: 'Objeto detrás del verbo: sin pronombre. Delante, sería «El ascensor lo arreglaron ayer».' },
          ] },
        ] },
        { title: 'Mensajes con Ana · Texts with Ana', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'chat-fill', title: 'Ana y Marta hablan de la reunión · Ana and Marta discuss the meeting', lines: [
            { who: 'Ana', text: 'Marta, ¿el presupuesto de la pintura ___ ya?', options: ['tiene', 'le tiene', 'lo tiene'], answer: 2, why: 'Tema delante (el presupuesto): «lo» obligatorio. Ana trata a Marta de usted.' },
            { who: 'Marta', text: 'Sí, ___ esta mañana a su esposo, porque usted no contestaba.', options: ['le lo mandé', 'se lo mandé', 'se la mandé'], answer: 1, why: 'le + lo → se lo; «lo» = el presupuesto (masculino).' },
            { who: 'Ana', text: 'Gracias, pero la próxima vez, ___, que él nunca mira el correo.', options: ['me mándelo a mí', 'mándemelo a mí', 'mándelo a mí'], answer: 1, why: 'Imperativo afirmativo de usted: pronombres pegados (me + lo). «A mí» exige «me».' },
            { who: 'Marta', text: 'Entendido. ¿Y a los vecinos del tercero ___ la fecha de la reunión?', options: ['les dijo', 'los dijo', 'dijo'], answer: 0, why: 'Indirecto delante (a los vecinos): «les». «Los» sería objeto directo.' },
            { who: 'Ana', text: 'Sí. ___ me parece bien el martes, pero a ellos no.', options: ['Yo', 'A mí', 'Mí'], answer: 1, why: 'Con «parecer», la persona va con «a»: a mí me parece.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['El', 'ascensor', 'lo', 'revisaron', 'ayer;', 'la', 'puerta,', 'no.'], accept: ['El ascensor lo revisaron ayer; la puerta, no.'], en: 'They checked the lift yesterday; the door, they didn’t.' },
            { tiles: ['Me', 'lo', 'explicó', 'a', 'mí,', 'no', 'a', 'Daniel.'], accept: ['Me lo explicó a mí, no a Daniel.'], en: 'She explained it to me, not to Daniel.' },
            { tiles: ['Eso', 'mismo', 'le', 'dije', 'yo', 'a', 'la', 'presidenta.'], accept: ['Eso mismo le dije yo a la presidenta.'], en: 'That’s exactly what I told the chairwoman.' },
          ] },
        ] },
        { title: 'Transforma · Transform', mascot: '/autoestudio/mascot/noting.webp', blocks: [
          { kind: 'rewrite', title: 'Tema delante y norma · Topic first and the norm', items: [
            { prompt: 'Daniel guardó las llaves de repuesto en la oficina.', instruction: 'Empieza con «Las llaves de repuesto».', accept: ['Las llaves de repuesto las guardó Daniel en la oficina', 'Las llaves de repuesto Daniel las guardó en la oficina', 'Las llaves de repuesto las guardó en la oficina Daniel'] },
            { prompt: 'Ana le escribió a Marta, pero no le escribió a Luis.', instruction: 'Pon a las personas delante y usa elipsis: «A Marta…; a Luis, no».', accept: ['A Marta le escribió Ana; a Luis, no', 'A Marta Ana le escribió; a Luis, no', 'A Marta le escribió; a Luis, no'] },
            { prompt: 'Le di el número del seguro a los dos vecinos.', instruction: 'Corrígelo para un correo formal: el pronombre debe concordar.', accept: ['Les di el número del seguro a los dos vecinos'] },
            { prompt: 'Se los dije a ustedes ayer: la reunión es el martes.', instruction: 'Escríbelo como en un texto formal: lo que dije es una sola cosa.', accept: ['Se lo dije a ustedes ayer: la reunión es el martes', 'Se lo dije ayer a ustedes: la reunión es el martes'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno reparte tres tareas de su casa o su trabajo poniendo el tema delante: «La compra la hago yo; a tu madre la llamas tú…».' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Un mensaje de Ana', coach: 'Primero la idea, después los detalles. Gist first, then details.',
      steps: [
        { title: 'Ana deja un mensaje de voz · Ana leaves a voicemail', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general. Segunda escucha: tu alumno anota cada objeto que va delante y dice si tiene pronombre o no. Después, las preguntas.', self: 'Escucha una vez para la idea general y otra para los detalles. Anota cada objeto que va delante del verbo: ¿lleva pronombre? (Listen for the gist, then for fronted objects.)' } },
          { kind: 'listen', title: 'Un mensaje de Ana', channel: 'BUZÓN DE VOZ · DE ANA PARA MARTA', src: '/audio/grammar-live/463.mp3',
            before: 'El lunes por la tarde, Ana, la vecina del cuarto, le deja un mensaje de voz a Marta. ¿Qué crees que le va a pedir? (What do you think Ana is going to ask Marta for?)',
            gist: { prompt: '¿Para qué llama Ana a Marta? · Why does Ana call Marta?', options: ['Para quejarse del trabajo de Daniel.', 'Para avisar de que su esposo vuelve hoy.', 'Para darle las gracias, pedirle el presupuesto y proponer un tema para la reunión.'], answer: 2, why: 'Agradece, pide que le manden el presupuesto a ella y propone hablar de la tubería en la reunión.', en: 'She thanks her, asks for the quote and suggests a topic for the meeting.' },
            details: [
              { prompt: '¿A quién le dio el técnico el presupuesto?', options: ['A Ana.', 'Al esposo de Ana.', 'A Daniel.'], answer: 1, why: '«El técnico le dio el presupuesto a mi esposo, no a mí».', en: 'Who did the technician give the quote to?' },
              { prompt: '¿Qué le pide Ana a Marta?', options: ['Que le mande el presupuesto a ella por correo.', 'Que Daniel le pinte el techo.', 'Que llame a su esposo.'], answer: 0, why: '«¿Me lo podría mandar a mí por correo?».', en: 'What does Ana ask Marta to do?' },
              { prompt: '¿Qué pasó con los vecinos del tercero?', options: ['Recibieron la nota tarde.', 'No les llegó ninguna nota.', 'Llamaron ellos al seguro.'], answer: 1, why: '«A los del tercero no les llegó ninguna nota».', en: 'What happened with the third-floor neighbours?' },
              { prompt: '¿Cómo está la cocina de Ana?', options: ['Seca, aunque hay que pintar el techo.', 'Todavía mojada.', 'Recién pintada.'], answer: 0, why: '«La cocina ya la tenemos seca… aunque el techo hay que pintarlo».', en: 'What state is Ana’s kitchen in?' },
              { prompt: '¿Desde cuándo piden los vecinos cambiar la tubería?', options: ['Desde hace tres años.', 'Desde marzo.', 'Desde el sábado.'], answer: 0, why: '«Tres años llevamos pidiendo que la cambien».', en: 'How long have the residents been asking for the pipe to be replaced?' },
            ],
            transcript: 'Buenas tardes, Marta, habla Ana Beltrán, la del cuarto piso. Le dejo este mensaje porque no la he podido localizar en la oficina. Primero, gracias por todo: [[a Daniel ya le di las gracias|blue]] el sábado, pero quería [[agradecérselo también a usted|violet]]. [[La cocina ya la tenemos|blue]] seca, gracias a Dios, aunque el techo hay que pintarlo. Ahora, un favor: el técnico [[le dio el presupuesto a mi esposo|teal]], no a mí, y él está de viaje hasta el jueves. ¿[[Me lo podría mandar a mí|violet]] por correo? Así lo reviso yo. Otra cosa: [[a los del tercero no les llegó|blue]] ninguna nota; me lo dijeron esta mañana en el ascensor. Y lo de la tubería no es ninguna sorpresa, ¿eh? [[Tres años llevamos|orange]] pidiendo que la cambien. Por eso [[a mí me parece|violet]] que tenemos que hablarlo en la próxima reunión. Bueno, muchas gracias, Marta. Que tenga buena tarde.',
            reply: { teacher: 'Tú eres Marta y le devuelves la llamada a Ana. Tu alumno es Ana y responde a tus preguntas («¿A quién le dio el presupuesto?», «¿A los del tercero quién los avisó?») poniendo la persona o la cosa delante.', self: 'Responde a Ana en voz alta como Marta: dile qué vas a hacer con el presupuesto, con los vecinos del tercero y con la reunión, poniendo cada tema delante. (Reply aloud as Marta, topic first.)' } },
          { kind: 'tip', icon: '🇨🇴', title: 'Ana trata de usted · Ana uses usted', text: 'En Colombia el **usted** es muy frecuente, también entre vecinos que se conocen bien. Fíjate: «no **la** he podido localizar» (la = a usted, Marta), «agradecér**selo** también **a usted**» (se = le = a usted) y «¿**Me** lo podría mandar **a mí**?». El tónico aclara y contrasta, siempre con su átono.', en: 'In Colombia “usted” is very common, even between neighbours who know each other well. Notice “la” (= you, Marta), “agradecérselo también a usted” and “¿Me lo podría mandar a mí?”: the tonic pronoun clarifies and contrasts, always with its clitic.' },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Quién, qué y a quién', coach: 'Ordena para destacar. Order your words to highlight.',
      steps: [
        { title: 'Organizar y contrastar · Organising and contrasting', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas y tu alumno responde poniendo el tema delante cuando contrasta. Si olvida un pronombre obligatorio, tú repites la frase corregida y sigues con la repregunta.', self: 'Lee cada pregunta y responde en voz alta. En cada respuesta, pon al menos un tema delante con su pronombre. (Put at least one topic first, with its pronoun.)' } },
          { kind: 'talk', cards: [
            { q: 'Piensa en tu semana. ¿A quién llamaste o escribiste y a quién no? · Who did you call or write to this week, and who not?', followUps: ['¿A quién le debes una llamada?', '¿Y los mensajes pendientes, cuándo los contestas?'], phrases: ['[[A mi hermana la llamé|blue]]…; a…, no.', '[[A mis padres les mandé|blue]]…', '[[Los correos del trabajo los contesto|blue]]…'], hint: 'Pon a las personas delante y contrasta: tema + pronombre; el segundo tema, con elipsis.', example: 'A mi hermana la llamé el martes; a mi hermano, no, y ya me ha escrito dos veces. A mis padres les mandé unas fotos del fin de semana. Los correos del trabajo los contesto siempre por la mañana.', next: 'Ahora, opiniones.' },
            { q: 'Tu compañero dice que trabajar desde casa es mejor. ¿Y a ti qué te parece? · Your colleague says remote work is better. What do you think?', followUps: ['¿Y a tu jefe o a tu familia?', '¿Qué es lo que más te cuesta?'], phrases: ['[[A mí me parece|violet]] que…', '[[A ti te|violet]] gusta…, pero [[a mí|violet]]…', '[[A mi jefe no le|violet]]…'], hint: 'Contrasta personas con «a mí me, a ti te, a él le». Con «yo», usa «creo» o «pienso».', example: 'A ti te encanta trabajar en casa, pero a mí me parece un poco solitario. Yo creo que lo ideal es mezclar. A mi jefe no le importa, mientras entreguemos todo a tiempo.' },
            { q: 'Has repartido regalos o recuerdos de un viaje. ¿Qué le diste a quién? · You handed out souvenirs: who got what?', followUps: ['¿A quién no le compraste nada?', '¿Alguien te devolvió el favor?'], phrases: ['[[Le di|teal]]… [[a mi madre|teal]].', '[[A mis compañeros les|blue]] traje…', '[[Se lo regalé a ella|violet]], no a…'], hint: 'Indirecto duplicado: «le… a mi madre». En plural, «les».', example: 'A mis compañeros les traje chocolate. Le di un pañuelo de seda a mi madre y a mi sobrino una camiseta. El libro de fotos se lo regalé a mi pareja, no a mi hermana, aunque ella lo quería.', next: 'Ahora, tener razón.' },
            { q: 'Avisaste de un problema y nadie te escuchó. Ahora ha pasado. ¿Qué dices? · You warned about a problem and nobody listened.', followUps: ['¿Cuánto tiempo lo estuviste diciendo?', '¿Qué haces la próxima vez?'], phrases: ['[[Eso mismo|orange]] dije yo…', '[[Dos semanas|orange]] llevo diciéndolo.', '[[Algo|orange]] sabría…'], hint: 'Destaca con foco: «eso mismo», una cantidad o «algo» delante, sin pronombre y con el sujeto detrás.', example: '¿Ves? Eso mismo dije yo en la reunión de enero: que el servidor se iba a caer. Dos meses llevo diciéndolo. Algo sabría también el informático, porque compró piezas nuevas en febrero.' },
            { q: 'Eres Marta. Llamas a Luis para contarle lo que pasó: quién entró, quién tiene la llave, a quién avisaron. · You are Marta: phone Luis.', followUps: ['¿Y qué le dices del seguro?', '¿Qué tiene que hacer él ahora?'], phrases: ['[[A tu hermana la llamó|blue]] Daniel…', '[[La llave se la devolvimos|blue]]…', '[[A Ana le|blue]]…'], hint: 'Organiza el relato por temas: cada persona o cosa delante, con su pronombre.', example: 'Luis, tranquilo, ya está todo controlado. A tu hermana la llamó Daniel y vino con la copia. La llave se la devolvimos esa misma tarde. A Ana le entró agua en la cocina, pero el seguro lo cubre todo. El informe lo está preparando Daniel.', teacher: 'Tú haces de Luis y preguntas con nerviosismo. Tu alumno responde con calma, tema por tema.' },
            { q: '¿Cómo lo dices con amigos y cómo en un correo formal? «Le di las llaves a mis vecinos», «Ya se los dije». · Casual or formal?', followUps: ['¿Qué formas oyes más donde vives?', '¿Cuál usarías en un correo a tu jefe?'], phrases: ['Con amigos se oye…', 'En un texto formal escribo [[les|teal]]…', 'En un texto formal, [[se lo|teal]]…'], hint: 'Describe la variación sin llamarla «error»: frecuente al hablar, no recomendada por escrito.', example: 'Con amigos oigo mucho «le di las llaves a mis vecinos», y a mis amigos mexicanos les oigo «ya se los dije». En un correo formal escribiría «les di las llaves» y «ya se lo dije a ustedes».' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno pregunta y tú respondes con algún error a propósito («Ese libro ya leí», «Lo dijo a mí»). Tu alumno lo detecta y lo corrige.', self: 'Ahora haz tú las preguntas en voz alta y respóndelas con otra situación. (Now ask the questions aloud and answer with a different situation.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Un comunicado a los vecinos', coach: 'Tema delante, «les» y «se lo». Topic first, “les” and “se lo”.',
      steps: [
        { title: 'Lo que pasó y lo que viene · What happened and what’s next', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos cada objeto que va delante: ¿lleva su pronombre? ¿Los plurales llevan «les»? Después tu alumno lee el comunicado en voz alta.', self: 'Escribe tu comunicado y toca «Revisar mi texto». Después repasa cada objeto delante del verbo y cada «le / les». (Check every fronted object and every le / les.)' } },
          { kind: 'write', title: 'Comunicado de la administración · A notice from the building manager', situation: 'Eres Marta (o eres tú, en tu trabajo o tu comunidad). Escribes un comunicado formal a los vecinos: explicas un problema que hubo, quién se encarga de qué y qué se propone ahora. (Write a formal notice to residents about an incident: who does what, and what comes next.)', task: [
            'Explica qué pasó y a quién afectó.',
            'Reparte al menos tres tareas o hechos poniendo el tema delante con su pronombre (El informe lo prepara…).',
            'Usa «les» con destinatarios plurales y «se lo» en lugar de «se los» cuando lo dicho es una sola cosa.',
            'Incluye un tónico con su átono (a usted, a ustedes, a mí) y, si encaja, un foco («eso mismo…»).',
            'Termina con una propuesta y una despedida formal.',
          ], starters: ['Estimados vecinos:', 'Como saben,…', 'Les escribo para…', 'La avería ya la…', 'A los vecinos del… les…', 'Eso mismo…', 'Se lo propondremos a ustedes…', 'Atentamente,'],
            words: ['les', 'se lo', 'a ustedes', 'la avería', 'el informe', 'la tubería', 'eso mismo', 'agradecer', 'proponer', 'pedir disculpas'],
            model: 'Estimados vecinos: Como saben, el sábado hubo una fuga de agua en el quinto piso que afectó a la vivienda del cuarto. Les escribo para informarles de lo ocurrido y de los próximos pasos. [[La avería ya la ha reparado|blue]] el técnico, y [[el informe para el seguro lo está preparando|blue]] nuestro conserje, Daniel Ferrer. [[A los vecinos del tercero les pedimos|blue]] disculpas, porque la nota no les llegó a tiempo. [[A Daniel le agradecemos|blue]] su rapidez: sin él, los daños habrían sido mucho mayores. La tubería general tiene más de cuarenta años; [[eso mismo nos advirtió|orange]] el técnico en marzo. Por eso, a la junta le parece necesario cambiarla este año, y [[se lo propondremos a todos ustedes|violet]] en la próxima reunión, el martes 14 a las siete. Si alguien tiene dudas, puede escribirme a mí directamente. Atentamente, Marta Ríos, administradora.',
            minWords: 110,
            checks: [
              { label: 'Un indirecto con «a + persona» y le / les', pattern: '(?<!\\p{L})a\\s+(?:\\p{L}+\\s+){1,4}?(?:le|les)\\s+\\p{L}+', tip: 'Pon a una persona delante y retómala: «A los vecinos del tercero les pedimos disculpas».' },
              { label: '«Les» para varios destinatarios', pattern: '(?<!\\p{L})les(?!\\p{L})', tip: 'Dirígete a los vecinos con «les»: «Les escribo para informarles…».' },
              { label: 'Un tónico con su átono (se lo… a ustedes, me… a mí)', pattern: '(?<!\\p{L})(?:me|te|le|les|se|nos)\\s+(?:(?:lo|la|los|las)\\s+)?(?:\\p{L}+\\s+){1,2}?a\\s+(?:mí|ti|él|ella|usted|ustedes|ellos|ellas|todos\\s+ustedes)(?!\\p{L})', tip: 'Aclara o contrasta: «se lo propondremos a todos ustedes».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})se\\s+los\\s+(?:\\p{L}+\\s+){1,2}?a\\s+(?:ustedes|ellos|ellas|todos)(?!\\p{L})', why: 'Si lo que comunicas es **una sola cosa**, en un texto formal escribe «**se lo** … a ustedes». «Se los» solo si «los» se refiere a varias cosas (los presupuestos, los recibos).' },
              { pattern: '(?<!\\p{L})le\\s+(?:\\p{L}+\\s+){1,4}?a\\s+(?:los\\s+vecinos|las\\s+vecinas|los\\s+propietarios|todos)(?!\\p{L})', why: 'Con un destinatario plural, en un texto formal usa **les**: «**Les** pedimos disculpas a los vecinos».' },
              { pattern: '(?<!(?:me|te)\\s+(?:(?:lo|la|los|las)\\s+)?)(?<!\\p{L})(?:dijo|dije|dio|di|explicó|expliqué|pidió|contó|conté)\\s+a\\s+(?:mí|ti)(?!\\p{L})', why: 'Con «a mí / a ti», el átono es obligatorio: «**me** lo dijo a mí».' },
            ] },
        ] },
      ],
    },
    {
      id: 'cerrar', label: 'Cerrar', icon: '✓', mascot: '/brand/mascot/standing.webp',
      title: 'Lo esencial', coach: '¿Qué te llevas hoy? What do you take away?',
      steps: [
        { title: 'Lo esencial · The essentials', blocks: [
          { kind: 'recap', items: [
            { tone: 'blue', label: 'OBLIGATORIO · TEMA DELANTE', formula: 'objeto definido delante → lo / la / los / las; indirecto delante → le / les', example: 'Ese libro ya lo leí. A Ana la llamé; a Luis, no.', caption: 'nunca «*Ese libro ya leí»', en: 'a known object placed first must be picked up by a clitic; a second contrasted topic can drop the verb' },
            { tone: 'violet', label: 'OBLIGATORIO · TÓNICO', formula: 'a mí → me · a ti → te · a ella / a usted → la, le, se', example: 'Me lo dijo a mí. A mí no me parece justo.', caption: 'nunca «*Lo dijo a mí» ni «*Yo me parece»', en: 'a tonic pronoun as an object always comes with its clitic: contrast or clarity, not faulty redundancy' },
            { tone: 'teal', label: 'RECOMENDABLE · INDIRECTO DETRÁS', formula: 'le / les + verbo + … + a + persona', example: 'Le di el regalo a Juan. Les mandé un aviso a los vecinos.', caption: 'con gustar, doler, parecer: siempre', en: 'optional in theory, but the natural choice in speech; in writing, make it agree: les' },
            { tone: 'orange', label: 'SIN PRONOMBRE · FOCO', formula: 'FOCO + verbo + sujeto', example: 'ESO te dije yo. Tres años llevamos así.', caption: 'eso (mismo), algo, nada, cantidades', en: 'a stressed, highlighted element in front takes no clitic, and the subject follows the verb' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Pregúntate qué va delante. Si es un **tema** conocido, el pronombre es obligatorio: «Ese libro ya **lo** leí». Si es un **foco** destacado, no hay pronombre: «ESO te dije yo». Detrás del verbo, el indirecto lleva casi siempre **le / les**, y los tónicos **siempre** su átono. Al escribir: **les** con plural y **se lo** a ustedes.', en: 'Ask yourself what comes first. A known topic needs its pronoun; a stressed focus takes none. After the verb, the indirect object almost always takes le / les, and tonic pronouns always take their clitic. In writing: “les” for plurals and “se lo… a ustedes”.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'Esa película ya ___ dos veces.', options: ['vi', 'la vi', 'le vi'], answer: 1, why: 'Objeto directo definido delante: «la» obligatorio.', en: 'I’ve already seen that film twice.' },
            { prompt: '—¿Y las entradas? —___ a mi hermana.', options: ['Se las di', 'Le las di', 'Se los di'], answer: 0, why: 'le + las → se las; «las» concuerda con las entradas.', en: '“And the tickets?” “I gave them to my sister.”' },
            { prompt: '—¿Te gustó el concierto? —___, sí; a mi pareja, no tanto.', options: ['Yo', 'A mí', 'Mí'], answer: 1, why: 'Con «gustar», la persona va con «a»; segundo tema con elipsis.', en: '“Did you enjoy the concert?” “I did; my partner, not so much.”' },
            { context: 'Tu amigo no se llevó paraguas y volvió empapado.', prompt: '«¿Ves? ___ te dije yo esta mañana».', options: ['Lo mismo lo', 'Eso mismo', 'Eso mismo lo'], answer: 1, why: 'Foco de insistencia: sin pronombre y con el sujeto detrás.', en: '“See? That’s exactly what I told you this morning.”' },
            { prompt: 'En un acta formal: «___ explicamos el problema a los vecinos el lunes».', options: ['Le', 'Les', 'Se los'], answer: 1, why: 'Indirecto plural en un texto formal: «les».', en: 'In formal minutes: “We explained the problem to the residents on Monday.”' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Ahora, una boda. Now, a wedding.', blocks: [
          { kind: 'lead', text: 'Irene se casa en junio y repasa con su madre lo que ya está hecho. Transforma sus frases.', en: 'Irene is getting married in June and goes over what’s already done with her mother. Transform her sentences.' },
          { kind: 'rewrite', title: 'Los preparativos de Irene · Irene’s wedding plans', items: [
            { prompt: 'Irene compró los anillos en enero.', instruction: 'Empieza con «Los anillos».', accept: ['Los anillos los compró Irene en enero', 'Los anillos Irene los compró en enero', 'Los anillos los compró en enero Irene'] },
            { prompt: 'Irene invitó a su jefa, pero no invitó a sus compañeros.', instruction: 'Pon a las personas delante: «A su jefa…; a sus compañeros, no».', accept: ['A su jefa la invitó Irene; a sus compañeros, no', 'A su jefa Irene la invitó; a sus compañeros, no', 'A su jefa la invitó; a sus compañeros, no'] },
            { prompt: 'Le explicó el menú a ella, no a su novio.', instruction: 'Sustituye «el menú» por un pronombre.', accept: ['Se lo explicó a ella, no a su novio'] },
          ] },
        ] },
        { title: 'Ampliación: registro y casos especiales · Extension: register and special cases', mascot: '/brand/mascot/portrait.webp', coach: 'Opcional. Optional.', blocks: [
          { kind: 'lead', text: 'Para estudiantes fuertes o si queda tiempo. **1.** Con «**todo**» como objeto, lo más natural es duplicar: «Mi abuela **lo** sabe **todo**», «Se **lo** comió **todo**»; delante, «**Todo lo** sabe». **2.** El tema también puede ir **al final**, separado por una pausa, como aclaración: «Ya **lo** leí, **ese libro**». El pronombre lo anticipa (lo verás a fondo en C1). **3.** Registro: en la conversación oirás «le» con plural y, en muchas zonas de América, «se los dije»; en un texto formal, «les» y «se lo».', en: 'For strong students or spare time. 1. With “todo” as the object, doubling is the most natural choice: “Lo sabe todo”, “Se lo comió todo”; fronted, “Todo lo sabe”. 2. The topic can also come at the end, after a pause, as an afterthought: “Ya lo leí, ese libro”; the pronoun anticipates it (more on this at C1). 3. Register: in conversation you will hear “le” for plurals and, in much of Latin America, “se los dije”; in formal writing, “les” and “se lo”.' },
          { kind: 'choice', title: 'Reconocer y adaptar · Recognise and adapt', items: [
            { prompt: '«Mi abuela ___: quién se casa, quién se muda, quién busca trabajo».', options: ['le sabe todo', 'lo sabe todo', 'la sabe toda'], answer: 1, why: 'Con «todo» como objeto, lo natural es duplicar con «lo» (neutro, invariable).', en: '“My grandmother knows everything: who’s getting married, who’s moving, who’s job-hunting.”' },
            { prompt: '«Ya lo leí, ese libro». ¿Qué hace el hablante?', options: ['Añade el tema al final como aclaración; «lo» lo anticipa.', 'Hay un error: sobra «lo».', 'Pone el foco en «ese libro».'], answer: 0, why: 'Tema desplazado a la derecha, tras una pausa: el pronombre es obligatorio.', en: 'What is the speaker doing?' },
            { context: 'Un mensaje entre amigos en México: «Ya se los dije: la fiesta es el sábado».', prompt: 'En un correo formal escribirías…', options: ['Ya se lo dije a ustedes: la fiesta es el sábado.', 'Ya les lo dije: la fiesta es el sábado.', 'Ya se los dije a ustedes: la fiesta es el sábado.'], answer: 0, why: '«Lo» = lo que dije (una cosa); «se» ya vale para varios destinatarios.', en: 'In a formal email you would write…' },
            { prompt: 'En el acta de la reunión de vecinos, ¿qué frase sigue la norma?', options: ['Les comunicamos el acuerdo a todos los propietarios.', 'Se los comunicamos el acuerdo a todos los propietarios.', 'Le comunicamos el acuerdo a todos los propietarios.'], answer: 0, why: 'Indirecto plural: «les». La tercera repite el objeto dos veces.', en: 'In the residents’ meeting minutes, which sentence follows the norm?' },
          ] },
          { kind: 'teacher', text: 'Paso opcional, solo si queda tiempo o para estudiantes fuertes. Extra: tu alumno reescribe un mensaje informal suyo en registro formal y explica cada cambio de pronombre.' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 164 · Registro: cortesía, distancia y mandato', text: 'Ya decides cuándo el pronombre es obligatorio, recomendable o imposible, y sabes adaptarlo al registro: «les» y «se lo» en un comunicado, «le» y «se los» en la conversación de muchas zonas. En la clase 164 sigues con el **registro**: cómo pedir, ordenar y guardar distancia con cortesía («¿Me lo podría mandar?», «Les rogamos que…»), justo lo que necesitan textos como el comunicado de Marta.', en: 'You can now decide when the pronoun is compulsory, advisable or impossible, and adapt it to register: “les” and “se lo” in a notice, “le” and “se los” in casual speech in many places. In class 164 you keep working on register: how to request, instruct and keep a polite distance (“Could you send it to me?”, “We kindly ask you to…”), exactly what texts like Marta’s notice need.', href: '/gramatica/registro-cortesia-distancia-y-mandato', label: 'Ir a la clase 164' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Por qué decimos “Ese libro ya lo leí” pero “ESO te dije”?». Respuesta esperada: «ese libro» es un tema conocido y pide pronombre; «eso», con énfasis, es foco y no lo lleva. Tarea: el comunicado de Escribir sobre un problema real de su edificio o su trabajo.' },
        ] },
      ],
    },
  ],
};
