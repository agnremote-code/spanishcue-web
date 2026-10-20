import type { LiveLesson } from '../types';

/**
 * Lesson 524 · C2 · Marcadores conversacionales de negociación fina (course unit G224).
 * Builds on G189 (g489: o sea, en fin, de todos modos as reformulation / recapitulation in
 * prose), G190 (g490: de todas formas, eso sí, lo que pasa es que in argument), G191
 * (attenuation) and G199 (g499: es que, o sea, pues nada in colloquial storytelling). Here
 * the same and new markers work live, in a meeting, to negotiate agreement and disagreement
 * (Martín Zorraquino & Portolés; Briz; the Diccionario de partículas discursivas del español
 * as general reference): «bueno» (partial acceptance that announces an objection, topic
 * change, closing), «hombre / mujer» (attenuation or reproach; very frequent in Spain, usage
 * varies elsewhere), «mira / oye» vs «mire / oiga» (attention, preface to a personal stance),
 * initial «pues» (contrary answer or obviousness), «a ver», «no sé» as attenuator, «ya»
 * (receipt, «ya, pero…», ironic «ya, ya»), agreement markers by variety and register («de
 * acuerdo» general; «vale» mainly Spain; «dale», «listo», «sale» regional and colloquial),
 * «claro / por supuesto», «eso sí» (condition after agreement), the consensus tag «¿no?»,
 * «o sea (que)» and «vamos (que)» (reformulating the other: cooperative or polemical),
 * «en fin», «de todas formas», and turn-taking with tú / usted / ustedes (Perdona que te
 * interrumpa + subjunctive, Si me permites…, Déjame terminar, Sigue, sigue). Intonation and
 * stacking (Bueno, vale…; Ya, pero…; Hombre, claro). Ampliación: formal negotiation
 * («Dicho eso, no deja de ser cierto que…», «ahora bien», «si se me permite»).
 * Scene: a video meeting of Ediciones Alféizar (Valencia) about the launch of «Mapas de
 * agua», an illustrated children's collection: Pilar Esteve (editorial director, Valencia)
 * chairs; Ignacio Robles (sales, Madrid) wants March and cuts; Valeria Ortiz (art
 * coordinator, Bogotá) defends the illustrators; Joaquín Barreiro (distributor,
 * Montevideo). Escuchar: Valeria's voice message to Pilar the next morning
 * (es-CO-SalomeNeural, one voice). Escribir: the script of the learner's turn at the next
 * meeting. Instructions use tú.
 */
export const lesson: LiveLesson = {
  id: 524,
  level: 'C2',
  title: 'Marcadores conversacionales de negociación fina',
  subtitle: 'Discrepar sin romper, aceptar con condiciones y defender tu turno en una reunión con bueno, mira, eso sí, o sea o déjame terminar.',
  legend: [
    { tone: 'orange', label: 'DISCREPAR CON TACTO · bueno, hombre, mira, pues, a ver, no sé, ya (softening or prefacing disagreement)' },
    { tone: 'blue', label: 'ACEPTAR Y CONDICIONAR · de acuerdo, vale, dale, claro, por supuesto, eso sí (agreeing, with or without conditions)' },
    { tone: 'teal', label: 'REFORMULAR Y CERRAR · o sea, vamos, en fin, de todas formas, bueno (rephrasing, concluding, moving on)' },
    { tone: 'violet', label: 'TURNO Y CONSENSO · perdona que te interrumpa, si me permites, déjame terminar, ¿no? (managing turns, seeking consensus)' },
  ],
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Lo que se negocia entre palabras', coach: 'Una palabra pequeña cambia el tono de toda la reunión. One small word changes the tone of the whole meeting.',
      steps: [
        { title: 'Una reunión que se tuerce · A meeting going wrong', blocks: [
          { kind: 'lead', text: 'Videollamada de **Ediciones Alféizar**, una editorial pequeña de Valencia. Se decide cuándo sale **«Mapas de agua»**, una colección ilustrada para niños. **Ignacio Robles** (ventas, Madrid) quiere marzo, para la feria, y recortar en ilustración. **Valeria Ortiz** (dirección de arte, Bogotá) sabe que marzo no llega. **Pilar Esteve**, la directora, tiene que lograr un acuerdo sin que nadie salga herido. Hoy estudias las piezas más pequeñas de esa negociación: los **marcadores conversacionales**. No cambian lo que se dice; cambian **cómo se recibe**: si una objeción suena a ataque o a colaboración, si un «sí» es pleno o lleva condiciones, si alguien te quita la palabra o te la pide.', en: 'A video call at a small publisher in Valencia: when should an illustrated children’s collection come out? Sales wants March and cuts; the art coordinator knows March is unrealistic; the director has to broker a deal. Today you study the smallest pieces of that negotiation, conversational markers. They don’t change the content of what is said; they change how it lands: whether an objection sounds like an attack or like cooperation, whether a yes is full or conditional, whether someone takes the floor from you or asks for it.' },
          { kind: 'compare', title: 'La misma postura, dos maneras · The same position, two ways', columns: [
            { tone: 'neutral', label: 'SIN MARCADORES', sentence: 'Marzo es imposible. Si recortamos en ilustración, el libro pierde calidad. Tu propuesta no funciona.', idea: 'Todo es verdad, pero suena a enfrentamiento: no deja espacio al otro.', en: 'Every statement may be true, but the bare sequence sounds confrontational: it leaves the other person no room to save face.' },
            { tone: 'orange', label: 'CON MARCADORES', sentence: '[[Bueno|orange]], [[no sé|orange]], marzo lo veo muy justo, [[¿no?|violet]] [[Mira|orange]], lo de la feria lo entiendo; [[eso sí|blue]], si recortamos en ilustración, el libro pierde.', idea: 'La misma postura, pero rebajada, compartida y con una condición clara.', en: 'The same position, but softened (bueno, no sé), offered for agreement (¿no?), framed as personal (mira) and with the non-negotiable point flagged (eso sí).' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué cambia entre las dos versiones?', options: ['La información: la segunda dice cosas nuevas.', 'La relación: la segunda dice lo mismo, pero protege la imagen del otro y busca el acuerdo.', 'El registro: la segunda es más formal.'], answer: 1, why: 'Los marcadores no añaden contenido: gestionan cómo se recibe la discrepancia.', en: 'Markers add no new information: they manage how the disagreement is received.' },
            { prompt: 'En la segunda versión, «eso sí» sirve para…', options: ['marcar el punto que no está dispuesta a ceder.', 'cambiar de tema.', 'repetir que está de acuerdo con todo.'], answer: 0, why: 'Tras una concesión, «eso sí» introduce la condición o reserva importante (clase 156).', en: 'After a concession, eso sí flags the condition or reservation that really matters.' },
          ] },
        ] },
        { title: 'Discrepar con tacto · Disagreeing with tact', mascot: '/brand/mascot/studying.webp', coach: '¿Cómo empiezas un «no» sin que suene a portazo? How do you start a no without slamming the door?', blocks: [
          { kind: 'concept', tone: 'orange', label: 'BUENO · HOMBRE / MUJER · MIRA / OYE · PUES · A VER · NO SÉ', question: '¿Vas a llevar la contraria y quieres que el otro no se sienta atacado?', en: 'These markers open a turn and announce how to take what follows. Bueno with a hanging intonation accepts only part of what was said and signals an objection; hombre (and mujer, to a woman) softens a disagreement or a reproach and is very common in Spain; mira and oye catch attention and frame what follows as your personal stance, and with usted they become mire and oiga; an initial pues in a reply introduces an answer that goes against what the other person expected, or one that is obvious (¡Pues claro!); a ver asks for order before explaining, though it can sound impatient; no sé, said before an opinion, lowers its force rather than expressing real ignorance.', formula: ['bueno (entonación suspendida) + acuerdo parcial + objeción: Bueno… el título sí.', 'hombre / mujer + desacuerdo rebajado: Hombre, tanto como «siempre»…', 'mira / oye (tú) · mire / oiga (usted) + postura propia', 'pues + respuesta contraria u obvia · a ver + reordenar · no sé + opinión suavizada'],
            meaning: 'Son marcadores que **abren** una intervención y dicen cómo tomar lo que viene. **Bueno**, con entonación suspendida, acepta **solo una parte** y anuncia una objeción: «—¿Te convence la portada? —**Bueno**… los colores sí». **Hombre** (y **mujer**, ante una mujer) **atenúa** un desacuerdo o un reproche: «**Hombre**, tanto como imposible…». **Mira** y **oye** llaman la atención y presentan lo que sigue como **postura personal**; con usted, **mire** y **oiga**. **Pues** al comienzo de una respuesta introduce algo **contrario a lo esperado** («**Pues** yo no lo veo así») o **obvio** («¡**Pues** claro!»). **A ver** pide orden antes de explicar. **No sé**, delante de una opinión, no expresa ignorancia: **rebaja** su fuerza (clase 191).',
            examples: [
              { es: '—Podemos recortar un 20 % en ilustración. —[[Bueno|orange]]… un 20 % me parece mucho.', en: 'Bueno with a pause: “well…”, I accept the idea of saving, not the figure.' },
              { es: '[[Hombre|orange]], Ignacio, decir que siempre retrasamos es un poco injusto.', en: 'Hombre softens a reproach to a colleague; it is typical of Spain, and many speakers there use it to men and women alike.' },
              { es: '[[Mira|orange]], yo entiendo lo de la feria, pero sin ilustraciones buenas no hay colección.', en: 'Mira prepares the listener for a personal, slightly delicate point.' },
              { es: '—Marzo es una fecha cómoda. —[[Pues|orange]] a mí me parece muy justa. · —¿Vienes a la presentación? —¡[[Pues|orange]] claro!', en: 'Initial pues in a reply: first an answer that runs against the other’s expectation, then an obvious one.' },
              { es: '[[A ver|orange]], vamos por partes: primero el calendario y luego el dinero. · [[No sé|orange]], yo esperaría a mayo.', en: 'A ver puts order into a heated exchange; no sé makes a proposal sound tentative and easier to accept.' },
            ] },
          { kind: 'table', title: 'Cuándo y cómo · When and how', head: ['Marcador', 'Lo que hace', 'Ojo · Note'], rows: [
            ['**bueno**', 'acepta a medias y anuncia una objeción; también abre, cambia de tema o cierra', 'la entonación decide: suspendida (bueno…) = reticencia'],
            ['**hombre / mujer**', 'atenúa un desacuerdo o un reproche; refuerza un acuerdo (¡Hombre, claro!)', 'muy frecuente en España; en otras zonas su uso varía; «mujer», solo ante una mujer'],
            ['**mira / oye**', 'llama la atención y prepara una postura personal o una propuesta', 'de usted: mire, oiga; «oiga» puede sonar brusco según el tono: en una reunión formal, mejor «perdone»'],
            ['**pues** (inicial)', 'respuesta contraria a lo esperado, o evidente', 'aquí no es causal: «Pues yo no lo veo así»'],
            ['**a ver**', 'pide orden o calma antes de explicar o de objetar', 'repetido o con tono seco, suena a impaciencia'],
            ['**no sé**', 'rebaja la fuerza de una opinión o propuesta', 'no indica ignorancia real; abusar de él resta autoridad'],
          ], note: 'Se combinan: «Bueno, mira, no sé…» acumula atenuación. Con prudencia: tres marcadores seguidos ante algo pequeño pueden sonar a inseguridad.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '—«¿Te gusta el título?» —«Bueno… el subtítulo sí». ¿Qué comunica «bueno»?', options: ['Que cambia de tema.', 'Entusiasmo total.', 'Que acepta una parte y tiene reservas sobre la otra.'], answer: 2, why: '«Bueno» suspendido acepta a medias: el título no le convence.', en: 'A hanging bueno accepts only part: the subtitle yes, the title not really.' },
            { prompt: 'Le hablas de usted al director de la distribuidora. ¿Qué forma encaja?', options: ['Oye, señor Barreiro, yo lo veo de otra manera.', 'Mira, señor Barreiro, yo lo veo de otra manera.', 'Mire, señor Barreiro, yo lo veo de otra manera.'], answer: 2, why: 'Con usted, el marcador concuerda: «mire»; «mira» y «oye» son de tú.', en: 'Mira and oye are tú imperatives turned markers; with usted they become mire and oiga.' },
          ] },
        ] },
        { title: 'Aceptar, pero con matices · Agreeing, with strings attached', mascot: '/brand/mascot/speaking.webp', coach: 'No todos los «sí» son iguales. Not every yes is the same yes.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'DE ACUERDO · VALE · DALE · CLARO · POR SUPUESTO · YA · ESO SÍ', question: '¿Aceptas del todo, aceptas con condiciones o solo dices que has entendido?', en: 'De acuerdo is the general, neutral way to agree, also in writing. Vale is typical of Spain; dale is very common in the River Plate region and in other parts of Latin America; all of these are understood widely, but they sound local. Claro agrees and suggests the point was evident; por supuesto is more emphatic. Ya on its own usually means “I hear you” rather than “I agree”: ya, pero… acknowledges and then objects, and ya, ya with a falling tone usually signals ironic disbelief. Eso sí, after an acceptance, adds the condition you will not give up.', formula: ['acuerdo pleno: de acuerdo · vale · claro · por supuesto', 'acuerdo con condición: De acuerdo; eso sí, + condición', 'recibir sin aceptar: Ya, pero… · incredulidad: Ya, ya (entonación descendente)'],
            meaning: '**De acuerdo** es la forma **general** y neutra; sirve también por escrito. **Vale** es característico de **España**; **dale** es muy frecuente en el **Río de la Plata** y en otras zonas de América. **Claro** acepta y presenta la idea como evidente; **por supuesto**, con más énfasis. **Ya** suele significar «te escucho, lo entiendo», **no** «estoy de acuerdo»: «**Ya, pero** el plazo sigue siendo corto» recibe y objeta. Repetido y con entonación descendente, «**ya, ya**» suele leerse como **incredulidad irónica**. **Eso sí**, tras un acuerdo, marca la **condición** que no se negocia (clases 156 y 190).',
            examples: [
              { es: '[[De acuerdo|blue]], lo presentamos en la feria. [[Eso sí|blue]], solo con los dos primeros títulos.', en: 'Agreement plus the non-negotiable condition.' },
              { es: '—¿Te mando el contrato esta tarde? —[[Vale|blue]], perfecto. · —[[Dale|blue]], genial.', en: 'The same easy yes, as you might hear it in Madrid and in Montevideo.' },
              { es: '[[Ya|orange]], pero con dos ilustradoras de baja no llegamos.', en: 'Ya receives the argument without accepting it; pero brings the objection.' },
              { es: '—Esta vez el informe llega el lunes, seguro. —[[Ya, ya|orange]]…', en: 'With a falling tone: “sure, sure”; the speaker does not believe it. Risky in a negotiation.' },
            ] },
          { kind: 'table', title: 'Decir que sí en distintas variedades · Saying yes across varieties', head: ['Marcador', 'Dónde se oye', 'Registro'], rows: [
            ['**de acuerdo**', 'en todo el mundo hispanohablante', 'neutro; también en correos formales'],
            ['**vale**', 'sobre todo en España; en América se entiende y su uso varía', 'coloquial y semiformal'],
            ['**dale**', 'muy frecuente en el Río de la Plata y en otras zonas de América', 'coloquial'],
            ['**listo**', 'frecuente en Colombia y en otras zonas de América', 'coloquial: «listo, lo hago»'],
            ['**sale**', 'México', 'coloquial, entre personas de confianza'],
            ['**ya**', 'en zonas como Chile o Perú, también «de acuerdo»', 'coloquial; en otras zonas, solo «te escucho»'],
          ], note: 'Si no conoces la variedad de tu interlocutor o el registro es formal, «de acuerdo», «claro» o «perfecto» no fallan.' },
          { kind: 'tip', icon: '🌎', title: 'El consenso también se pide · Consensus is something you ask for', text: 'La coletilla **¿no?** al final convierte una afirmación en una propuesta que el otro puede confirmar: «Es lo más razonable, **¿no?**». También **¿verdad?**, general. Úsala para **buscar consenso**, no para presionar: repetida en cada frase («¿no?, ¿no?») suena a que no admites otra respuesta.', en: 'A tag ¿no? at the end turns a statement into a proposal the other person can confirm; ¿verdad? works everywhere too. Use it to invite agreement, not to corner people: tagged onto every sentence, it suggests you will accept only one answer.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '—«Te lo apruebo; eso sí, ___». ¿Qué completa bien la frase?', options: ['me parece una idea estupenda.', 'quiero ver las cuentas antes del viernes.', 'gracias por venir.'], answer: 1, why: '«Eso sí» introduce una condición o reserva, no otro elogio.', en: 'Eso sí introduces a condition, not more praise.' },
            { prompt: 'Valeria, en la reunión: «Ya, pero las ilustradoras no llegan». ¿Qué hace «ya»?', options: ['Indica que tiene prisa.', 'Acepta la propuesta de Ignacio.', 'Muestra que ha oído el argumento antes de objetar.'], answer: 2, why: '«Ya, pero…» = te he entendido, pero hay un problema.', en: 'Ya, pero means “I take your point, but…”.' },
          ] },
        ] },
        { title: 'Reformular al otro y cerrar · Rephrasing the other side and moving on', mascot: '/autoestudio/mascot/noting.webp', coach: '¿Resumes para entender o para ganar? Are you summing up to understand, or to win?', blocks: [
          { kind: 'concept', tone: 'teal', label: 'O SEA (QUE) · VAMOS (QUE) · EN FIN · DE TODAS FORMAS · BUENO', question: '¿Quieres comprobar lo que ha dicho el otro, sacar tu conclusión o pasar página?', en: 'O sea (que) and vamos (que) restate what has just been said. Reformulating the other person is a delicate move: it can check understanding (¿O sea que podríamos en abril?), or it can exaggerate their position to make it look weak (O sea, que la mitad llega tarde). Vamos tends to present the conclusion more bluntly and is very frequent in Spain. En fin closes a topic, sums up or signals resignation; de todas formas says that whatever was just said does not change the main point; bueno at the start of a turn can change the topic or close one.', formula: ['¿O sea que…? → comprobar (cooperativo)', 'O sea, que… / Vamos, que… → conclusión propia (puede exagerar)', 'En fin… → cerrar, resumir, resignarse · De todas formas… → lo esencial sigue en pie', 'Bueno, + nuevo tema → cambiar de tema o abrir'],
            meaning: '**O sea (que)** y **vamos (que)** reformulan lo que se acaba de decir (clase 189). En una negociación, reformular al otro es un movimiento **delicado**: puede servir para **comprobar** («**¿O sea que** podríamos en abril?», con entonación de pregunta) o para **exagerar** su postura y debilitarla («**O sea, que** la mitad de la colección llega tarde»). **Vamos** suele presentar la conclusión con más rotundidad y es muy frecuente en España: «**Vamos, que** no hay presupuesto». **En fin** cierra, resume o expresa resignación. **De todas formas** indica que lo dicho no cambia lo esencial. Y **bueno**, al comienzo, puede **cambiar de tema** o **cerrar** uno: «**Bueno**, pasamos al presupuesto».',
            examples: [
              { es: '[[¿O sea que|teal]] si dividimos la colección, las ilustradoras llegan?', en: 'A genuine check: the speaker restates the proposal as a question.' },
              { es: '[[Vamos, que|teal]] nos jugamos el año en una feria.', en: 'Blunt conclusion; vamos que is very common in colloquial Spanish from Spain.' },
              { es: '[[En fin|teal]], no vamos a resolverlo hoy. · [[De todas formas|teal]], la feria no es la única ventana de venta.', en: 'En fin closes with some resignation; de todas formas keeps the main point standing whatever was said before.' },
              { es: '[[Bueno|teal]], si os parece, pasamos al presupuesto.', en: 'Bueno as a topic changer, typical of whoever chairs the meeting; os is the vosotros form used in Spain.' },
            ] },
          { kind: 'compare', title: 'Reformular: ¿para entender o para ganar? · Rephrasing: to understand or to win?', columns: [
            { tone: 'teal', label: 'COOPERATIVO', sentence: '[[¿O sea que|teal]] lo que propones es sacar dos títulos en marzo y uno en mayo?', idea: 'Pregunta, recoge bien la propuesta y deja que el otro confirme.', en: 'A cooperative restatement: rising intonation, faithful content, and the other person gets the last word.' },
            { tone: 'orange', label: 'POLÉMICO', sentence: '[[O sea, que|teal]] la mitad de la colección llega tarde.', idea: 'Afirma, exagera lo negativo y pone al otro a la defensiva.', en: 'A polemical restatement: falling intonation, the negative side magnified, and the other person forced to defend themselves.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Ignacio dice: «Vamos, que no queréis recortar nada». ¿Qué está haciendo?', options: ['Sacar una conclusión rotunda que simplifica la postura de los otros.', 'Cerrar la reunión.', 'Comprobar con cuidado lo que ha entendido.'], answer: 0, why: '«Vamos, que» + afirmación: conclusión propia, aquí exagerada.', en: 'He restates bluntly and simplifies the others’ position: a polemical move.' },
            { prompt: '«Hemos dado muchas vueltas. ___, la decisión la tomamos el lunes». ¿Qué marcador encaja para cerrar?', options: ['Ya, ya', 'En fin', 'Eso sí'], answer: 1, why: '«En fin» cierra el tema y pasa a la conclusión.', en: 'En fin closes the discussion and moves to the outcome.' },
          ] },
        ] },
        { title: 'El turno de palabra · Taking, holding and giving the floor', mascot: '/brand/mascot/seated.webp', coach: 'Interrumpir también tiene gramática. Interrupting has grammar too.', blocks: [
          { kind: 'concept', tone: 'violet', label: 'PERDONA QUE TE INTERRUMPA · SI ME PERMITES · DÉJAME TERMINAR · SIGUE, SIGUE', question: '¿Quieres tomar la palabra, conservarla o devolverla?', en: 'To take the floor politely, apologise in advance: perdona que te interrumpa, with the subjunctive, because perdonar que, like other verbs of emotion and evaluation, takes it. Si me permites (un apunte) asks permission and leaves the sentence open. To hold the floor, say déjame terminar or un momento, que no he terminado: firm, but not hostile if your tone is calm. To give it back, sigue, sigue or te escucho. All of these change with tú, usted and ustedes.', formula: ['tomar: Perdona que te interrumpa (+ subjuntivo), pero… · Si me permites un apunte…', 'conservar: Déjame terminar · Un momento, que no he terminado', 'ceder: Sigue, sigue · Te escucho · Termina, termina'],
            meaning: 'Para **tomar** la palabra con cortesía, pide perdón de antemano: «**Perdona que te interrumpa**, pero…», con **subjuntivo**, porque «perdonar que» lo exige, como otros verbos de sentimiento y valoración. **Si me permites** (un apunte, una cosa…) pide permiso y deja la frase abierta. Para **conservarla**: «**Déjame terminar**» o «**Un momento, que no he terminado**»: firme, pero no hostil si el tono es tranquilo. Para **devolverla**: «**Sigue, sigue**», «**Te escucho**». Todo cambia con **tú**, **usted** y **ustedes**.',
            examples: [
              { es: '[[Perdona que te interrumpa|violet]], Ignacio, pero ese dato es del año pasado.', en: 'An apology that buys the right to interrupt; the subjunctive is required.' },
              { es: '[[Si me permites|violet]] un apunte sobre la distribución…', en: 'Asking for the floor; the request itself is the polite move.' },
              { es: '[[Déjame terminar|violet]], que enseguida te escucho.', en: 'Holding the floor and promising to give it back, which keeps the move friendly.' },
            ] },
          { kind: 'table', title: 'Tú, usted, ustedes · Three forms of address', head: ['Para…', 'tú', 'usted', 'ustedes'], rows: [
            ['interrumpir', 'Perdona que te interrumpa', 'Perdone que lo / la interrumpa', 'Perdonen que los interrumpa'],
            ['pedir la palabra', 'Si me permites…', 'Si me permite…', 'Si me permiten…'],
            ['conservar el turno', 'Déjame terminar', 'Déjeme terminar', 'Déjenme terminar'],
            ['ceder el turno', 'Sigue, sigue · Te escucho', 'Siga, siga · Lo / la escucho', 'Sigan, sigan · Los escucho'],
          ], note: 'En España es muy frecuente «le» con usted masculino («Perdone que le interrumpa»); la norma lo admite. «Disculpa / disculpe» funciona igual que «perdona / perdone».' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Perdona que te ___, pero no es exactamente así».', options: ['interrumpo', 'interrumpa', 'interrumpiré'], answer: 1, why: '«Perdonar que» + subjuntivo: interrumpa.', en: 'Perdonar que takes the subjunctive.' },
            { prompt: 'Joaquín quiere hablar en una reunión con varias personas a las que trata de usted. ¿Qué dice?', options: ['Si me permitís una cosa…', 'Si me permites una cosa…', 'Si me permiten una cosa…'], answer: 2, why: 'Se dirige a un grupo de usted: ustedes → «permiten».', en: 'Addressing a group formally: ustedes, so permiten. Permitís is the vosotros form used in Spain.' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/kneeling.webp', coach: 'Un marcador mal puesto dice más de lo que quieres. A misplaced marker says more than you mean.', blocks: [
          { kind: 'mistakes', title: '¿Qué falla? · What goes wrong?', items: [
            { wrong: 'Perdona que te interrumpo, pero la cifra no es esa.', right: 'Perdona que te interrumpa, pero la cifra no es esa.', why: '«Perdonar que» va con subjuntivo.' },
            { wrong: '—¿Firmamos? —Vale; eso sí, me parece perfecto.', right: '—¿Firmamos? —Vale; eso sí, antes quiero ver la última versión.', why: '«Eso sí» introduce una condición o reserva, no repite el acuerdo.' },
            { wrong: 'Ya, ya, tienes toda la razón. (para mostrar acuerdo sincero)', right: 'Sí, sí, tienes toda la razón. / Claro, tienes toda la razón.', why: '«Ya, ya» con entonación descendente suele leerse como incredulidad: el otro oye ironía.' },
            { wrong: 'Oye, señora Esteve, ¿me deja terminar?', right: 'Perdone, señora Esteve, ¿me deja terminar?', why: 'Con usted, el marcador también concuerda: «perdone», «mire», «oiga», no «oye».' },
            { wrong: 'Correo a una distribuidora que no conoces: «Dale, le envío el contrato».', right: '«De acuerdo, le envío el contrato».', why: '«Dale» es coloquial y regional: en un correo formal, «de acuerdo».' },
            { wrong: 'O sea, que no quieres trabajar. (para comprobar si has entendido)', right: '¿O sea que prefieres esperar a mayo?', why: 'Para comprobar, se pregunta y se recoge bien la propuesta; afirmar y exagerar suena a acusación.' },
          ] },
          { kind: 'decide', title: 'Antes de tomar la palabra · Before you speak', steps: [
            { q: '¿Estás de acuerdo del todo? (Do you fully agree?)', yes: 'De acuerdo, vale, claro, por supuesto; si hay una condición, añade «eso sí».', no: 'Pasa a la siguiente pregunta.' },
            { q: '¿Vas a discrepar? (Are you going to disagree?)', yes: 'Prepara el terreno: bueno, mira, hombre (España), no sé; o recibe con «ya, pero…». Cierra buscando consenso con «¿no?».', no: 'Pasa a la siguiente pregunta.' },
            { q: '¿Necesitas el turno o defenderlo? (Do you need the floor?)', yes: 'Perdona que te interrumpa, si me permites; déjame terminar. Ajusta tú / usted / ustedes.', no: 'Escucha y cede: «Sigue, sigue».' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué intervención negocia mejor un desacuerdo con un compañero?', options: ['Ya, ya. Eso no va a funcionar.', 'Bueno, no sé, yo lo veo arriesgado. ¿Y si lo probamos solo con un título?', 'Vamos, que quieres arruinar la colección.'], answer: 1, why: 'Atenúa (bueno, no sé), presenta la opinión como propia y ofrece una salida.', en: 'It softens, frames the view as personal and offers a way out.' },
            { prompt: 'Una colega de Madrid te propone una hora. ¿Qué respuesta suena más natural en su variedad, entre colegas?', options: ['Por supuesto que no, a las cinco me viene bien.', 'Vale, a las cinco me viene bien.', 'Sale, a las cinco me viene bien.'], answer: 1, why: '«Vale» es el acuerdo coloquial típico de España; «sale» es de México.', en: 'Vale is the everyday yes in Spain; sale belongs to Mexican colloquial speech.' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno contesta en voz alta a tres propuestas tuyas (cambiar la fecha de una reunión, recortar un presupuesto, añadir una tarea): una con acuerdo pleno, otra con «eso sí» y otra con un desacuerdo atenuado.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'La reunión del calendario', coach: 'Toca cada marcador y fíjate en qué negocia. Tap each marker and notice what it negotiates.',
      steps: [
        { title: 'Videollamada de Alféizar · The Alféizar video call', blocks: [
          { kind: 'guide', text: { teacher: 'Leen la reunión con papeles: tú eres Ignacio y Joaquín; tu alumno es Pilar y Valeria. Después tu alumno toca cada marcador y explica qué negocia: acuerdo, desacuerdo, turno o cierre.', self: 'Lee la reunión en voz alta, cuidando la entonación de cada marcador. Después toca cada uno y explica qué negocia: acuerdo, desacuerdo, turno o cierre.' } },
          { kind: 'explore', title: '«Mapas de agua» · Reunión de calendario', setting: 'Videollamada, martes a las 16:00 en Valencia. Pilar Esteve dirige la reunión; Ignacio Robles se conecta desde Madrid, Valeria Ortiz desde Bogotá y Joaquín Barreiro desde Montevideo.', lines: [
            { who: 'Pilar', text: '[[Bueno|teal]], pasamos al calendario. Ignacio, ¿empiezas tú?', en: 'Right, let’s move on to the schedule. Ignacio, would you like to start?' },
            { who: 'Ignacio', text: 'Yo lo tengo clarísimo: o salimos en marzo, para la feria, o perdemos la temporada.', en: 'It’s crystal clear to me: either we come out in March, for the book fair, or we lose the season.' },
            { who: 'Valeria', text: '[[Perdona que te interrumpa|violet]], Ignacio, pero con dos ilustradoras de baja, marzo… [[no sé|orange]], lo veo muy justo.', en: 'Sorry to cut in, Ignacio, but with two illustrators on leave, March… I don’t know, it looks very tight to me.' },
            { who: 'Ignacio', text: '[[Ya, ya|orange]]. Siempre hay un motivo para retrasar.', en: 'Sure, sure. There’s always a reason to delay.' },
            { who: 'Pilar', text: '[[Hombre|orange]], Ignacio, tanto como «siempre»… Valeria tiene parte de razón, [[¿no?|violet]]', en: 'Come on, Ignacio, “always” is a bit much… Valeria has a point, doesn’t she?' },
            { who: 'Ignacio', text: '[[Pues|orange]] yo no lo veo así. [[Mira|orange]], sin la feria vendemos la mitad. [[Vamos, que|teal]] nos jugamos el año.', en: 'Well, I don’t see it that way. Look, without the fair we sell half as much. In other words, the whole year is at stake.' },
            { who: 'Joaquín', text: '[[Si me permiten|violet]] una cosa desde Montevideo: para nosotros, abril también sirve.', en: 'If I may add something from Montevideo: April works for us too.' },
            { who: 'Valeria', text: '[[Ya|orange]], pero abril sin recortes tampoco llega. [[A ver|orange]], ¿y si sacamos en marzo los dos primeros títulos y en mayo el tercero?', en: 'Right, but April without cuts won’t work either. Let’s see: what if we bring out the first two titles in March and the third in May?' },
            { who: 'Ignacio', text: '[[O sea, que|teal]] la mitad de la colección llega tarde.', en: 'So half the collection arrives late.' },
            { who: 'Pilar', text: '[[De todas formas|teal]], la feria es para presentar, no solo para vender. Yo apoyo la propuesta de Valeria; [[eso sí|blue]], con fechas cerradas.', en: 'Anyway, the fair is for presenting, not just for selling. I back Valeria’s proposal; on one condition, though: fixed dates.' },
            { who: 'Ignacio', text: '[[En fin|teal]]… [[De acuerdo|blue]]. Si las fechas son firmes, me apaño con la feria.', en: 'Oh well… Fine. If the dates are firm, I’ll make do at the fair.' },
            { who: 'Joaquín', text: '[[Dale|blue]], entonces lo anunciamos así en el catálogo.', en: 'Great, then we’ll announce it that way in the catalogue.' },
          ], notes: {
            'Bueno': '**Bueno** inicial en boca de quien dirige: **cambia de tema** y abre el punto siguiente del orden del día.',
            'Perdona que te interrumpa': '**Perdona que** + subjuntivo: Valeria pide perdón de antemano y así gana el derecho a interrumpir.',
            'no sé': '**No sé** atenuador: Valeria no duda de verdad; rebaja la fuerza de su objeción para que no suene a ataque.',
            'Ya, ya': '**Ya, ya** con entonación descendente: incredulidad irónica. Ignacio insinúa que la excusa no es sincera; es el momento en que la reunión se tensa.',
            'Hombre': '**Hombre** (muy frecuente en España): Pilar reprocha suavemente a Ignacio su exageración sin humillarlo.',
            '¿no?': '**¿no?** final: Pilar convierte su opinión en una propuesta de consenso que Ignacio puede confirmar.',
            'Pues': '**Pues** inicial: anuncia una respuesta contraria a lo que Pilar esperaba.',
            'Mira': '**Mira**: prepara un argumento personal; Ignacio pide atención para su razón principal.',
            'Vamos, que': '**Vamos, que**: Ignacio reformula su propio argumento como conclusión rotunda (muy frecuente en España).',
            'Si me permiten': '**Si me permiten** (ustedes): Joaquín, que es externo, pide la palabra con cortesía antes de intervenir.',
            'Ya': '**Ya, pero**: Valeria recibe el dato de Joaquín sin aceptarlo como solución y objeta.',
            'A ver': '**A ver**: reordena la discusión antes de lanzar una propuesta nueva.',
            'O sea, que': '**O sea, que** afirmativo: reformulación **polémica**; Ignacio resume la propuesta por su lado negativo.',
            'De todas formas': '**De todas formas**: Pilar indica que la objeción de Ignacio no cambia lo esencial.',
            'eso sí': '**Eso sí**: tras apoyar la propuesta, Pilar fija la condición que no se negocia.',
            'En fin': '**En fin** con pausa: resignación; Ignacio cede sin entusiasmo.',
            'De acuerdo': '**De acuerdo**: acuerdo neutro, válido en cualquier variedad y registro.',
            'Dale': '**Dale**: acuerdo coloquial muy frecuente en el Río de la Plata y en otras zonas de América. Joaquín habla en su variedad.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Por qué quiere Ignacio salir en marzo?', options: ['Porque es cuando se celebra la feria y sin ella cree que se vende la mitad.', 'Porque la distribuidora de Montevideo lo exige.', 'Porque las ilustradoras ya han terminado.'], answer: 0, why: '«O salimos en marzo, para la feria, o perdemos la temporada… sin la feria vendemos la mitad».', en: 'Why does Ignacio want a March release?' },
            { prompt: '¿Qué propone Valeria?', options: ['Sacar dos títulos en marzo y el tercero en mayo.', 'Retrasar toda la colección hasta mayo.', 'Recortar en ilustración para llegar a abril.'], answer: 0, why: '«¿Y si sacamos en marzo los dos primeros títulos y en mayo el tercero?».', en: 'What does Valeria propose?' },
            { prompt: '¿Con qué condición apoya Pilar la propuesta?', options: ['Con fechas cerradas.', 'Con un recorte del presupuesto.', 'Con la aprobación de Joaquín.'], answer: 0, why: '«Eso sí, con fechas cerradas».', en: 'On what condition does Pilar back the plan?' },
          ] },
        ] },
        { title: 'Después de la reunión · After the meeting', mascot: '/brand/mascot/seated.webp', coach: 'Pilar y Valeria, por mensajes. Pilar and Valeria, texting.', blocks: [
          { kind: 'chat-fill', title: 'Mensajes entre Pilar y Valeria · Pilar and Valeria’s chat', lines: [
            { who: 'Valeria', text: 'Pilar, gracias por lo de antes. Cuando Ignacio dijo «ya, ya», me sentó fatal.' },
            { who: 'Pilar', text: '___, es su manera de hablar… pero tienes razón: sonó a que no te creía.', options: ['Eso sí', 'Bueno', 'Dale'], answer: 1, why: '«Bueno» acepta a medias: disculpa a Ignacio y, a la vez, da la razón a Valeria.' },
            { who: 'Valeria', text: 'Si la próxima vez me corta, le digo con calma: «___ terminar, que luego te escucho».', options: ['Déjame', 'Dejando', 'Déjeme'], answer: 0, why: 'Ignacio y Valeria se tutean: «déjame».' },
            { who: 'Pilar', text: 'Perfecto. Y reconócele lo de la feria, que en eso tiene razón. Así baja la guardia, ___', options: ['¿no?', '¿vamos?', '¿en fin?'], answer: 0, why: '«¿No?» final busca la confirmación de Valeria.' },
            { who: 'Valeria', text: '___, lo hago así. Mañana te mando un audio con lo que me digan las ilustradoras.', options: ['O sea', 'Ya, ya', 'Listo'], answer: 2, why: '«Listo» = de acuerdo, frecuente en Colombia; «ya, ya» sonaría irónico.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: tu alumno explica qué habría pasado en la reunión si Ignacio, en lugar de «ya, ya», hubiera dicho «ya, pero…». No hay una única respuesta.' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Interpretar, elegir, corregir, negociar. Interpret, choose, correct, negotiate.',
      steps: [
        { title: '¿Qué hace el marcador? · What is the marker doing?', blocks: [
          { kind: 'classify', title: 'Fragmentos de la reunión de diseño · Lines from the design meeting', categories: [
            { id: 'desacuerdo', label: 'Discrepa con tacto (softened disagreement)', tone: 'orange' },
            { id: 'acuerdo', label: 'Acepta con una condición (agreement with a condition)', tone: 'blue' },
            { id: 'reformular', label: 'Reformula o cierra (rephrases or closes)', tone: 'teal' },
            { id: 'turno', label: 'Gestiona el turno (manages the floor)', tone: 'violet' },
          ], items: [
            { text: '—¿La hacemos en tapa dura? —Pues yo la haría en rústica, la verdad.', answer: 'desacuerdo', why: '«Pues» inicial anuncia una respuesta contraria a la propuesta.' },
            { text: 'Vale, en rústica; eso sí, con solapas.', answer: 'acuerdo', why: 'Acepta y fija la condición con «eso sí».' },
            { text: 'Un momento, que no he terminado.', answer: 'turno', why: 'Conserva el turno de palabra.' },
            { text: 'Vamos, que no hay presupuesto para tapa dura.', answer: 'reformular', why: '«Vamos, que» saca la conclusión de lo dicho.' },
            { text: 'Hombre, tanto como fea no es la portada…', answer: 'desacuerdo', why: '«Hombre» atenúa el desacuerdo con una valoración exagerada.' },
            { text: 'Si me permites un apunte sobre el papel…', answer: 'turno', why: 'Pide la palabra con cortesía.' },
          ] },
        ] },
        { title: 'Interpreta y elige · Interpret and choose', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'choice', items: [
            { prompt: 'Pilar, al empezar la reunión: «Bueno, si os parece, empezamos». ¿Qué hace «bueno»?', options: ['Expresa una reserva.', 'Abre la reunión y organiza el discurso.', 'Acepta una propuesta de Ignacio.'], answer: 1, why: '«Bueno» inicial de quien dirige: abre o cambia de tema, sin reticencia.', en: 'Here bueno simply opens the meeting; os is Pilar’s vosotros, normal in Spain.' },
            { prompt: '—«Esta vez entrego el viernes sin falta». —«Ya, ya». ¿Qué entiende quien lo dijo primero?', options: ['Que el otro no se lo cree del todo.', 'Que tiene que entregarlo ya.', 'Que se lo cree y se alegra.'], answer: 0, why: '«Ya, ya» con entonación descendente: incredulidad irónica.', en: 'With a falling tone, ya, ya means “sure, sure”.' },
            { prompt: '—«¿Vienes a la presentación del libro?» —«¡Pues claro!». ¿Qué valor tiene «pues»?', options: ['Contradice la pregunta.', 'Presenta la respuesta como evidente.', 'Introduce una causa.'], answer: 1, why: '«Pues» inicial + «claro»: la respuesta es obvia.', en: 'Of course! Pues frames the answer as obvious.' },
            { prompt: 'Valeria: «No sé, a mí la tipografía me parece un poco infantil». ¿Para qué usa «no sé»?', options: ['Para que su crítica suene menos tajante.', 'Para cambiar de tema.', 'Porque no tiene opinión.'], answer: 0, why: '«No sé» atenúa: la opinión sigue ahí, pero rebajada.', en: 'No sé makes the criticism sound tentative, not that she has no view.' },
            { prompt: 'Joaquín, desde Montevideo, cierra la llamada: «___, mañana te mando el contrato».', options: ['Eso sí', 'Vamos', 'Dale'], answer: 2, why: '«Dale» = de acuerdo, coloquial, muy frecuente en el Río de la Plata.', en: 'Dale is the everyday “OK” in the River Plate region.' },
            { prompt: 'Escribes un correo formal a una distribuidora de México que no conoces. ¿Qué acuerdo es más seguro?', options: ['Vale, guay.', 'De acuerdo, quedo a la espera de su confirmación.', 'Sale, sin problema.'], answer: 1, why: '«De acuerdo» es general y neutro; «sale» y «vale, guay» son coloquiales y regionales.', en: 'In a formal email to someone you don’t know, de acuerdo is the safe choice.' },
          ] },
        ] },
        { title: 'Corrige · Fix it', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Perdona que te interrumpo, pero esa cifra es del año pasado.', ok: false, options: ['Perdona que te interrumpiré, pero esa cifra es del año pasado.', 'Perdona de interrumpirte, pero esa cifra es del año pasado.', 'Perdona que te interrumpa, pero esa cifra es del año pasado.'], answer: 2, why: '«Perdonar que» + subjuntivo: interrumpa.' },
            { sentence: 'Oye, señora Esteve, ¿podría repetir la fecha?', ok: false, options: ['Oyes, señora Esteve, ¿podría repetir la fecha?', 'Perdone, señora Esteve, ¿podría repetir la fecha?', 'Mira, señora Esteve, ¿podría repetir la fecha?'], answer: 1, why: 'Con usted, el marcador concuerda; «perdone» es más cortés que «oiga» en una reunión.' },
            { sentence: 'De acuerdo; eso sí, me parece una idea excelente.', ok: false, options: ['De acuerdo; eso sí, necesito el presupuesto antes del viernes.', 'De acuerdo; eso sí, de acuerdo.', 'De acuerdo; eso sí, también me parece excelente.'], answer: 0, why: '«Eso sí» introduce una condición o una reserva, no más acuerdo.' },
            { sentence: 'Ya, pero el problema sigue siendo el plazo.', ok: true, why: 'Correcta: «ya» recibe el argumento y «pero» introduce la objeción con cortesía.' },
          ] },
        ] },
        { title: 'La reunión del presupuesto · The budget meeting', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'chat-fill', title: 'Segunda reunión · Second meeting', lines: [
            { who: 'Pilar', text: '___, empezamos. Hoy toca el presupuesto de ilustración.', options: ['Bueno', 'Eso sí', 'Ya, ya'], answer: 0, why: '«Bueno» abre la reunión y organiza el discurso.' },
            { who: 'Ignacio', text: 'Yo propongo recortar un 20 %. Es lo razonable, ___', options: ['en fin', '¿no?', 'vamos'], answer: 1, why: '«¿No?» final busca el consenso de los demás.' },
            { who: 'Valeria', text: '___, Ignacio, yo lo veo distinto: con un 20 % menos, las mejores ilustradoras se van.', options: ['Mira', 'Por supuesto', 'Dale'], answer: 0, why: '«Mira» prepara una postura personal contraria.' },
            { who: 'Ignacio', text: '___, que no quieres recortar nada.', options: ['Eso sí', 'Por supuesto', 'Vamos'], answer: 2, why: '«Vamos, que» reformula como conclusión rotunda.' },
            { who: 'Pilar', text: 'Yo propongo un 10 %; ___, revisamos en septiembre con las ventas reales.', options: ['eso sí', 'ya, ya', 'pues'], answer: 0, why: '«Eso sí» añade la condición que acompaña a la propuesta.' },
            { who: 'Ignacio', text: '___. Un 10 % y lo revisamos en septiembre.', options: ['O sea', 'De acuerdo', 'A ver'], answer: 1, why: '«De acuerdo» cierra con un acuerdo neutro.' },
          ] },
        ] },
        { title: 'Construye · Build', mascot: '/autoestudio/mascot/noting.webp', blocks: [
          { kind: 'build', items: [
            { tiles: ['Perdona', 'que', 'te', 'interrumpa,', 'pero', 'ese', 'dato', 'no', 'es', 'exacto.'], accept: ['Perdona que te interrumpa, pero ese dato no es exacto.'], en: 'Sorry to interrupt, but that figure isn’t accurate.' },
            { tiles: ['Vale,', 'lo', 'firmo;', 'eso', 'sí,', 'con', 'fechas', 'cerradas.'], accept: ['Vale, lo firmo; eso sí, con fechas cerradas.'], en: 'OK, I’ll sign; but only with fixed dates.' },
            { tiles: ['Bueno,', 'no', 'sé,', 'yo', 'esperaría', 'a', 'mayo,', '¿no?'], accept: ['Bueno, no sé, yo esperaría a mayo, ¿no?'], en: 'Well, I don’t know, I’d wait until May, wouldn’t you?' },
          ] },
        ] },
        { title: 'Negociar con más delicadeza · Negotiating more gently', blocks: [
          { kind: 'rewrite', title: 'Reescribe la intervención · Rewrite the turn', items: [
            { prompt: 'Marzo es imposible.', instruction: 'Atenúa: empieza con «Bueno, no sé,» y cambia «es imposible» por «lo veo muy justo».', accept: ['Bueno, no sé, marzo lo veo muy justo.', 'Bueno, no sé, yo marzo lo veo muy justo.'] },
            { prompt: 'Cállate, que estoy hablando.', instruction: 'Defiende tu turno con cortesía: «Déjame terminar» + «que enseguida te escucho».', accept: ['Déjame terminar, que enseguida te escucho.', 'Déjame terminar que enseguida te escucho.'] },
            { prompt: 'Tu cifra está mal.', instruction: 'Interrumpe con «Perdona que te interrumpa, pero» y di que «esa cifra no me cuadra».', accept: ['Perdona que te interrumpa, pero esa cifra no me cuadra.'] },
            { prompt: 'Acepto, pero quiero el contrato por escrito.', instruction: 'Cambia «Acepto, pero» por «De acuerdo; eso sí,».', accept: ['De acuerdo; eso sí, quiero el contrato por escrito.'] },
          ] },
          { kind: 'teacher', text: 'Si sobra tiempo: tu alumno toma una de las frases tajantes y la dice en voz alta en tres versiones, cada vez más suave; tú dices cuál usarías con un cliente y cuál con un compañero.' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/standing.webp',
      title: 'El audio de Valeria', coach: 'Primero la idea general, luego los detalles. First the gist, then the details.',
      steps: [
        { title: 'Preparar la próxima reunión · Getting ready for the next meeting', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: la idea general. Segunda escucha: tu alumno anota cada marcador y su función (atenuar, condicionar, reformular, cerrar, gestionar el turno). Después, las preguntas.', self: 'Escucha una vez para la idea general y otra para los detalles. Anota cada marcador que oigas y para qué lo usa Valeria.' } },
          { kind: 'listen', title: 'Audio de Valeria para Pilar', channel: 'MENSAJE DE VOZ · VALERIA ORTIZ · 8:05 (BOGOTÁ)', src: '/audio/grammar-live/524.mp3',
            before: 'A la mañana siguiente, Valeria le manda un audio a Pilar antes de la próxima reunión con Ignacio. ¿Qué crees que le va a proponer? (The next morning Valeria sends Pilar a voice message before the next meeting with Ignacio. What do you think she will suggest?)',
            gist: { prompt: '¿Para qué le manda Valeria este audio a Pilar?', options: ['Para contarle la respuesta de las ilustradoras y proponer cómo llevar la próxima reunión.', 'Para anunciar que el tercer título se retrasa.', 'Para quejarse de Ignacio y pedir que no venga a la reunión.'], answer: 0, why: 'Cuenta lo que dicen las ilustradoras y propone un reparto de papeles para la reunión.', en: 'Why does Valeria send Pilar this message?' },
            details: [
              { prompt: '¿Qué condición ponen las ilustradoras?', options: ['Que la colección salga entera en abril.', 'Que el tercer título no se mueva de mayo.', 'Que se les pague un 10 % más.'], answer: 1, why: '«Eso sí, con una condición: que el tercer título no se mueva de mayo ni un día».', en: 'What condition do the illustrators set?' },
              { prompt: '¿Cómo vivió Valeria el «ya, ya» de Ignacio?', options: ['Le hizo gracia.', 'Se sintió un poco atacada, aunque quizá fue solo el tono.', 'No lo oyó.'], answer: 1, why: '«Me sentí un poco atacada, no sé, a lo mejor fue solo el tono».', en: 'How did Valeria take Ignacio’s “ya, ya”?' },
              { prompt: '¿Qué hará Valeria si Ignacio la interrumpe?', options: ['Pedirle a Pilar que lo calle.', 'Decirle con calma que la deje terminar y que luego lo escucha.', 'Dejar de hablar.'], answer: 1, why: '«Le digo con calma: “Déjame terminar y luego te escucho”».', en: 'What will she do if Ignacio interrupts her?' },
              { prompt: '¿Qué quiere reconocerle Valeria a Ignacio?', options: ['Que el recorte es necesario.', 'Que el calendario es suyo.', 'Que tiene razón con la feria.'], answer: 2, why: '«Le reconocemos lo de la feria, que en eso tiene razón, ¿no?».', en: 'What point does she want to grant Ignacio?' },
            ],
            transcript: 'Pilar, buenos días, te habla Valeria. [[Mira|orange]], estuve pensando en la reunión de ayer y te quiero proponer algo antes de volver a hablar con Ignacio. [[Bueno|teal]], primero lo bueno: las ilustradoras aceptan el calendario partido; [[eso sí|blue]], con una condición: que el tercer título no se mueva de mayo ni un día. [[O sea|teal]], que lo que acordamos se puede cumplir. Ahora, lo delicado. Cuando Ignacio dijo «ya, ya», yo me sentí un poco atacada; [[no sé|orange]], a lo mejor fue solo el tono. [[De todas formas|teal]], no quiero llegar a la próxima reunión a la defensiva. [[A ver|orange]] qué te parece esto: tú abres con el calendario, yo explico lo de las ilustradoras y, si él me interrumpe, le digo con calma: «[[Déjame terminar|violet]] y luego te escucho». Y [[por supuesto|blue]] le reconocemos lo de la feria, que en eso tiene razón, [[¿no?|violet]] Así es más fácil que acepte lo demás. [[En fin|teal]], llámame cuando puedas, que aquí todavía es temprano y tengo la mañana libre. [[Listo|blue]], eso era todo. Un abrazo.',
            reply: { teacher: 'Tú eres Valeria. Tu alumno, como Pilar, contesta con un audio breve: acepta el plan con un «de acuerdo» o un «vale», añade una condición con «eso sí» y propone una frase para responder si Ignacio vuelve a decir «ya, ya».', self: 'Contesta a Valeria con un audio de 40 segundos, como si fueras Pilar: acepta su plan, añade una condición con «eso sí» y propón qué decir si Ignacio vuelve a contestar «ya, ya».' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Negociar en voz alta', coach: 'Firme en el fondo, suave en la forma. Firm on substance, gentle in form.',
      steps: [
        { title: 'Tu turno · Your turn', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces de Ignacio o de la persona de cada tarjeta y presionas un poco: interrumpes, exageras, dices «ya, ya». Tu alumno negocia con los marcadores de hoy sin perder la calma.', self: 'Lee la situación y responde en voz alta, como en una reunión real. Usa al menos tres marcadores distintos por respuesta y fíjate en tu entonación.' } },
          { kind: 'talk', cards: [
            { q: 'Un compañero propone recortar el presupuesto de tu proyecto un 30 %. Discrepa sin atacarlo y ofrece una alternativa. · Disagree with a 30 % cut without attacking your colleague, and offer an alternative.', followUps: ['¿Y de dónde sacamos el dinero, entonces? (Where do we find the money, then?)', '¿Un 20 % te parece bien? (Would 20 % be OK?)'], phrases: ['[[Bueno|orange]]… [[no sé|orange]], un 30 % lo veo mucho.', '[[Mira|orange]], yo lo veo de otra manera…', '¿Y si…? Es más razonable, [[¿no?|violet]]'], hint: 'Atenúa al empezar, da una razón y termina con una propuesta y un «¿no?».', example: 'Bueno… no sé, un 30 % lo veo mucho. Mira, si recortamos tanto, perdemos a las mejores ilustradoras. ¿Y si recortamos un 10 % ahora y lo revisamos en septiembre con las ventas reales? Es más razonable, ¿no?' },
            { q: 'Te piden que entregues un informe una semana antes. Acepta, pero pon una condición clara. · Accept an earlier deadline, but set a clear condition.', followUps: ['¿Y si no te dan esos datos? (What if you don’t get that data?)', '¿Lo pones por escrito? (Will you put it in writing?)'], phrases: ['[[De acuerdo|blue]]; [[eso sí|blue]], …', '[[Claro|blue]], pero…', '[[Por supuesto|blue]], siempre que…'], hint: 'Primero el sí, después «eso sí» + la condición concreta.', example: 'De acuerdo, lo adelanto al día 10. Eso sí, necesito los datos de ventas el lunes como muy tarde. Si llegan después, por supuesto lo entrego igual, pero sin el análisis completo.' },
            { q: 'En una reunión, alguien habla sin parar y tú tienes un dato importante; después, esa persona te interrumpe a ti. Toma y defiende tu turno. · Take the floor politely, then hold it when you are interrupted.', followUps: ['—Ya, pero déjame acabar a mí… (—Yes, but let me finish…)', '—Eso ya lo hemos hablado. (—We’ve already discussed that.)', '—¿Y cuál es el dato? (—So what’s the figure?)'], phrases: ['[[Perdona que te interrumpa|violet]], pero…', '[[Si me permites|violet]] un apunte…', '[[Déjame terminar|violet]], que enseguida te escucho.'], hint: 'Pide perdón al entrar; al defender el turno, promete devolverlo.', example: 'Perdona que te interrumpa, pero el dato de ventas es del año pasado. Si me permites un apunte: este año la feria ha bajado un 15 %. —Ya, pero… —Déjame terminar, que enseguida te escucho: por eso creo que mayo no es tan mala idea.', teacher: 'Aquí interrumpes de verdad, a mitad de frase, para que tu alumno practique la defensa del turno con naturalidad.' },
            { q: 'Tu interlocutor resume tu postura de forma injusta: «O sea, que no quieres trabajar más». Recupera tu propuesta y busca el consenso. · Someone twists your position; put it back in fair terms and look for consensus.', followUps: ['—Vamos, que te da igual la feria. (—So you don’t care about the fair.)', '—En fin, como quieras. (—Oh well, whatever you want.)'], phrases: ['[[Hombre|orange]], tanto como eso… (España)', 'No exactamente. [[¿O sea que|teal]]…?', '[[De todas formas|teal]], lo importante es…', '[[En fin|teal]], …'], hint: 'Rechaza la exageración sin ofenderte, reformula tú bien y vuelve a lo esencial.', example: 'Hombre, tanto como eso… No exactamente: lo que digo es que prefiero trabajar bien que deprisa. ¿O sea que tu preocupación es la feria? De todas formas, podemos presentar allí dos títulos. En fin, creo que así ganamos todos, ¿no?' },
            { q: 'Cierras el mismo acuerdo con socios de distintas variedades: una colega de Madrid, un distribuidor de Montevideo, una ilustradora de Bogotá y un cliente de Ciudad de México al que tratas de usted. ¿Cómo dices «sí»? · Agree with partners from four varieties.', followUps: ['¿Cuál te sale más natural a ti? (Which feels most natural to you?)', '¿Cuál usarías por escrito? (Which would you write?)', '¿Has oído otros? (Have you heard others?)'], phrases: ['A Madrid: [[Vale|blue]], …', 'A Montevideo: [[Dale|blue]], …', 'A Bogotá: [[Listo|blue]], …', 'Al cliente: [[De acuerdo|blue]], le envío…'], hint: 'Reconoce cada variedad, pero usa la tuya o la neutra: «de acuerdo» siempre funciona.', example: 'A mi colega de Madrid le diría: «Vale, te lo mando hoy». Al distribuidor de Montevideo le oigo «dale» todo el rato, y entre colegas también lo uso. A la ilustradora de Bogotá: «Listo, quedamos así». Y al cliente de México, de usted: «De acuerdo, le envío el contrato esta tarde».', next: 'En la clase 225 verás la otra cara de esta prudencia: cómo matiza un texto académico sin perder rigor.' },
          ], swap: { teacher: 'Al final cambian los papeles: tu alumno hace de Ignacio, con «ya, ya» y «vamos, que» incluidos, y tú negocias como Valeria.', self: 'Ahora eres Ignacio: escribe tres intervenciones tajantes sobre el calendario y después reescríbelas en voz alta como las diría Pilar, con un marcador distinto en cada una.' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Tu intervención', coach: 'Escribir lo que vas a decir, como lo dirías. Write what you will say, the way you will say it.',
      steps: [
        { title: 'El guion de tu turno · The script of your turn', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Después tu alumno lo dice en voz alta y tú lo interrumpes una vez a propósito; comentan juntos si los marcadores suenan naturales o excesivos.', self: 'Escribe tu intervención y toca «Revisar mi texto». Después dila en voz alta como en la reunión: ¿suena natural?, ¿sobra algún marcador?' } },
          { kind: 'write', title: 'Lo que dirás en la reunión del presupuesto · What you will say at the budget meeting', situation: 'Eres Valeria (o tú mismo, en tu trabajo). Mañana hay reunión con Ignacio, que quiere recortar un 20 % el presupuesto de ilustración. Escribe el guion de tu intervención, tal como lo dirías en voz alta: tuteas a Ignacio y quieres llegar a un acuerdo sin ceder en lo esencial. (Script your spoken turn for tomorrow’s meeting: you use tú with Ignacio and want a deal without giving up what matters.)', task: [
            'Reconoce en qué tiene razón el otro con un marcador de acuerdo (claro, por supuesto, de acuerdo, tienes razón). (Grant a point.)',
            'Discrepa con atenuación: bueno, mira, no sé o a ver. (Disagree gently.)',
            'Haz una propuesta con una condición introducida por «eso sí». (Propose, with a condition.)',
            'Incluye una fórmula de turno (déjame terminar, si me permites, perdona que te interrumpa) y busca el consenso con «¿no?». (Manage the floor and seek consensus.)',
            'Evita las fórmulas tajantes o irónicas («no tiene sentido», «ya, ya»). (No blunt or ironic moves.)',
          ], starters: ['Bueno, si me permites, empiezo por…', 'En eso tienes toda la razón…', 'Mira, lo que me preocupa es…', 'Eso sí, …', 'Es razonable, ¿no?'], words: ['bueno', 'mira', 'no sé', 'a ver', 'claro', 'por supuesto', 'de acuerdo', 'eso sí', 'o sea', 'de todas formas', 'en fin', 'déjame terminar', 'si me permites', '¿no?'],
            model: 'Bueno, si me permites, Ignacio, empiezo por lo que nos une: la feria es importante, y en eso tienes toda la razón. Por eso las ilustradoras se han comprometido a entregar los dos primeros títulos el 15 de febrero. Ahora, lo del recorte, no sé, lo veo más complicado. Mira, si pagamos menos por ilustración, las mejores se nos van a otras editoriales, y entonces el problema ya no es de un mes, sino de toda la colección. Perdona, déjame terminar, que enseguida te escucho. Mi propuesta es mantener las tarifas este año y revisar los números en septiembre, con las ventas reales delante. Eso sí, me comprometo a que en mayo no haya ni un día de retraso: si lo hay, lo asumo yo. O sea, que no te pido un cheque en blanco; te pido seis meses. De todas formas, si la feria sale mal, lo volvemos a hablar sin problema. Es una solución razonable para todos, ¿no?',
            minWords: 140,
            checks: [
              { label: 'Un marcador de acuerdo o concesión', pattern: '(?<!\\p{L})(?:claro|por\\s+supuesto|de\\s+acuerdo|vale|tienes\\s+(?:toda\\s+la\\s+)?razón|ya,?\\s+pero)(?!\\p{L})', tip: 'Concede algo: «En eso tienes toda la razón», «Claro, la feria importa».' },
              { label: 'Un marcador de desacuerdo atenuado', pattern: '(?<!\\p{L})(?:bueno|mira|no\\s+sé|a\\s+ver|hombre)(?!\\p{L})', tip: 'Suaviza la objeción: «Mira, lo veo distinto», «No sé, me parece arriesgado».' },
              { label: 'Una condición con «eso sí»', pattern: '(?<!\\p{L})eso\\s+sí(?!\\p{L})', tip: 'Escribe, por ejemplo: «Eso sí, con fechas cerradas».' },
              { label: 'Una fórmula de turno de palabra', pattern: '(?<!\\p{L})(?:d[ée]jame\\s+terminar|si\\s+me\\s+permites|perdona\\s+que\\s+te\\s+interrumpa|un\\s+momento,?\\s+que)(?!\\p{L})', tip: 'Escribe, por ejemplo: «Déjame terminar, que enseguida te escucho».' },
              { label: 'Una búsqueda de consenso con «¿no?»', pattern: '(?<!\\p{L})no\\?', tip: 'Termina una propuesta con «¿no?»: «Es razonable, ¿no?».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})perdon[ae]\\s+que\\s+(?:te|lo|la|le)\\s+interrumpo(?!\\p{L})', why: '«Perdonar que» va con subjuntivo: «perdona que te interrumpa».' },
              { pattern: '(?<!\\p{L})ya,?\\s+ya(?!\\p{L})', why: '«Ya, ya» suele sonar a incredulidad irónica: en una negociación, mejor «ya, pero…».' },
              { pattern: '(?<!\\p{L})(?:no\\s+tiene\\s+(?:ningún\\s+)?sentido|estás\\s+equivocad[oa]|eso\\s+es\\s+absurdo)(?!\\p{L})', why: 'Sin atenuación suena a ataque personal: prueba con «no sé, lo veo de otra manera».' },
              { pattern: '(?<!\\p{L})(?:oiga|mire|perdone|déjeme)(?!\\p{L})', why: 'Tuteas a Ignacio: usa «oye», «mira», «perdona», «déjame».' },
            ] },
        ] },
      ],
    },
    {
      id: 'cerrar', label: 'Cerrar', icon: '✓', mascot: '/brand/mascot/standing-crossed.webp',
      title: 'Lo esencial', coach: '¿Qué te llevas hoy? What do you take with you?',
      steps: [
        { title: 'Lo esencial · The essentials', blocks: [
          { kind: 'recap', items: [
            { tone: 'orange', label: 'DISCREPAR CON TACTO', formula: 'bueno… · hombre / mujer (España) · mira / mire · pues + respuesta contraria · a ver · no sé · ya, pero…', example: 'Bueno, no sé, mayo me parece más realista.', caption: 'preparar la objeción para que no suene a ataque', en: 'These openers soften disagreement and frame it as a personal view; ya, ya with a falling tone is the exception: it sounds like disbelief.' },
            { tone: 'blue', label: 'ACEPTAR Y CONDICIONAR', formula: 'de acuerdo (general) · vale (España) · dale, listo, sale (regionales) · claro · por supuesto · eso sí + condición', example: 'De acuerdo; eso sí, con fechas cerradas.', caption: 'el grado del sí y la condición que no se negocia', en: 'Choose the yes that fits the variety and the register, and use eso sí to flag your condition.' },
            { tone: 'teal', label: 'REFORMULAR Y CERRAR', formula: '¿O sea que…? (comprobar) · o sea, que / vamos, que (concluir) · en fin · de todas formas · bueno (cambio de tema)', example: '¿O sea que podríamos en abril? · En fin, lo decidimos el lunes.', caption: 'resumir al otro con justicia y pasar página', en: 'Restating the other side can be cooperative (a question) or polemical (an exaggerated statement); en fin and de todas formas close or keep the main point.' },
            { tone: 'violet', label: 'TURNO Y CONSENSO', formula: 'perdona que te interrumpa (+ subj.) · si me permites · déjame terminar · sigue, sigue · ¿no? · tú / usted / ustedes', example: 'Perdone que lo interrumpa, pero… · Es razonable, ¿no?', caption: 'tomar, conservar y ceder la palabra; pedir el acuerdo', en: 'Turn-taking formulas agree with the form of address; ¿no? turns a statement into an invitation to agree.' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Los marcadores no deciden **qué** negocias, sino **cómo se recibe**. Antes de hablar, tres preguntas: **¿acepto del todo o con condiciones?**, **¿cómo hago que mi «no» no suene a ataque?** y **¿con quién hablo?** (tú o usted, qué variedad, qué registro). Y una alerta: la **entonación** cambia el marcador: «bueno» suspendido es reticencia; «ya, ya» descendente es ironía.', en: 'Markers don’t decide what you negotiate, but how it is received. Ask yourself whether you agree fully or conditionally, how to make your no sound cooperative, and who you are talking to. And remember that intonation changes the marker: a hanging bueno signals reluctance, a falling ya, ya signals irony.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/portrait.webp', blocks: [
          { kind: 'choice', title: 'Cinco intervenciones, sin ayuda · Five turns, no help', items: [
            { prompt: '—«¿Te parece bien el lunes?» —«___ el lunes no puedo. ¿Qué tal el martes?»', options: ['Dale', 'Pues', 'Eso sí'], answer: 1, why: '«Pues» inicial introduce una respuesta contraria a lo esperado.', en: 'Well, I can’t on Monday: pues opens an unexpected answer.' },
            { prompt: '«Te lo apruebo; ___, quiero el informe el viernes».', options: ['ya, ya', 'vamos', 'eso sí'], answer: 2, why: '«Eso sí» introduce la condición del acuerdo.', en: 'Eso sí introduces the condition attached to the approval.' },
            { prompt: 'Interrumpes a tu directora, a la que tratas de usted: «___ que la interrumpa, pero la cifra es de 2024».', options: ['Perdonando', 'Perdone', 'Perdona'], answer: 1, why: 'Con usted: «perdone» + subjuntivo.', en: 'Formal address: perdone, followed by the subjunctive.' },
            { prompt: '—«Lo tendré mañana, te lo prometo». —«Ya, ya». ¿Qué significa?', options: ['Que lo quiere inmediatamente.', 'Que lo cree y se alegra.', 'Que no se lo cree del todo.'], answer: 2, why: '«Ya, ya» con entonación descendente expresa incredulidad irónica.', en: 'Sure, sure: the speaker doubts the promise.' },
            { prompt: 'Para comprobar, sin acusar, lo que propone tu compañera:', options: ['¿O sea que prefieres esperar a mayo?', 'O sea, que no quieres trabajar.', 'Vamos, que te da igual todo.'], answer: 0, why: 'Pregunta y recoge bien la propuesta: reformulación cooperativa.', en: 'A question that restates fairly is a cooperative check.' },
          ] },
        ] },
        { title: 'Otra reunión · A different meeting', mascot: '/autoestudio/mascot/noting.webp', blocks: [
          { kind: 'lead', text: 'Guadalajara, México. **Rosa Quiroga** preside la asamblea de su cooperativa de vivienda. Ahí todos se tratan de **usted** y uno de los socios, don Ernesto, habla sin parar. Ayúdala a pasar sus frases de tú a usted sin perder la cortesía.', en: 'Guadalajara, Mexico. Rosa chairs her housing cooperative’s assembly, where everyone uses usted and one member, don Ernesto, will not stop talking. Help her move her turns from tú to usted while keeping them courteous.' },
          { kind: 'rewrite', title: 'De tú a usted · From tú to usted', items: [
            { prompt: 'Perdona que te interrumpa, don Ernesto.', instruction: 'Pásalo a usted.', accept: ['Perdone que lo interrumpa, don Ernesto.', 'Perdone que le interrumpa, don Ernesto.', 'Disculpe que lo interrumpa, don Ernesto.'] },
            { prompt: 'Déjame terminar, por favor.', instruction: 'Pásalo a usted.', accept: ['Déjeme terminar, por favor.'] },
            { prompt: 'Mira, yo lo veo de otra manera.', instruction: 'Pásalo a usted.', accept: ['Mire, yo lo veo de otra manera.'] },
          ] },
        ] },
        { title: 'Ampliación: negociar en registro formal · Extension: negotiating formally', mascot: '/brand/mascot/studying.webp', coach: 'Opcional: la misma negociación, en un consejo o por escrito. Optional: the same moves in a board meeting or in writing.', blocks: [
          { kind: 'lead', text: 'En un consejo de administración, una mesa de negociación o un correo, los marcadores coloquiales ceden el paso a fórmulas más elaboradas que hacen lo mismo: **conceder y objetar** («**Dicho eso, no deja de ser cierto que**…», «Comparto su planteamiento; **ahora bien**,…»), **condicionar** («**siempre que**», «**con la condición de que**» + subjuntivo), **pedir la palabra** («**Si se me permite** una observación…»), **atenuar** («**Me permito discrepar**», «**Quizá convendría**…») y **cerrar** («**Con todo**», «**En cualquier caso**»).', en: 'In a board meeting, a formal negotiation or an email, colloquial markers give way to more elaborate formulas that do the same jobs: conceding then objecting (dicho eso, no deja de ser cierto que…; ahora bien), setting conditions (siempre que, con la condición de que + subjunctive), asking for the floor (si se me permite), softening (me permito discrepar; quizá convendría) and closing (con todo; en cualquier caso).' },
          { kind: 'choice', title: 'Elige la versión formal · Choose the formal version', items: [
            { prompt: 'Coloquial: «Vale, lo firmamos; eso sí, con fechas cerradas».', options: ['Dale, lo firmamos con fechas cerradas.', 'Estamos dispuestos a firmar, siempre que las fechas queden cerradas.', 'Vamos, que firmamos si hay fechas.'], answer: 1, why: '«Siempre que» + subjuntivo es la condición en registro formal.', en: 'We are prepared to sign, provided the dates are fixed.' },
            { prompt: 'Coloquial: «Ya, pero la feria no lo es todo».', options: ['Pues la feria no lo es todo.', 'Entiendo la importancia de la feria. Dicho eso, no deja de ser cierto que no es nuestra única ventana de venta.', 'Ya, ya, la feria no lo es todo.'], answer: 1, why: 'Concede primero y objeta después con «dicho eso, no deja de ser cierto que…».', en: 'Concede, then object: “That said, it remains true that…”.' },
            { prompt: 'Coloquial: «Perdona que te interrumpa, pero ese dato está mal».', options: ['Oiga, ese dato está mal.', 'Ese dato está mal, perdona.', 'Si se me permite una precisión, ese dato corresponde al ejercicio anterior.'], answer: 2, why: '«Si se me permite» pide la palabra de forma impersonal y «una precisión» rebaja la corrección.', en: 'If I may make one clarification, that figure refers to the previous financial year.' },
            { prompt: 'Coloquial: «En fin, no lo vamos a resolver hoy».', options: ['Bueno, pues nada.', 'En fin, que no hay manera.', 'Con todo, propongo que retomemos la cuestión en la próxima sesión.'], answer: 2, why: '«Con todo» cierra en registro formal y la propuesta sustituye a la resignación.', en: 'Even so, I propose we return to this at the next session.' },
          ] },
          { kind: 'teacher', text: 'Paso opcional, para alumnos fuertes o si sobra tiempo. Extra: tu alumno reescribe en registro formal la intervención de Pilar en la reunión («De todas formas, la feria es para presentar… eso sí, con fechas cerradas») como si fuera un acta del consejo.' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 225 · Discursos académicos: cautela metodológica', text: 'Hoy has negociado en voz alta: atenuar con «no sé», condicionar con «eso sí», conceder antes de objetar. El paso natural es llevar esa prudencia al texto académico, donde no se negocia con un compañero sino con el lector y con los datos: «**los resultados sugieren**», «**cabe la posibilidad de que**», «**con las debidas reservas**». Es la misma cautela, en el registro más exigente.', en: 'Today you negotiated out loud: softening, setting conditions, conceding before objecting. The natural next step is to carry that caution into academic writing, where you negotiate not with a colleague but with the reader and the data (“the results suggest”, “it is possible that”, “with due reservations”). It is the same caution, in the most demanding register.', href: '/gramatica/discursos-academicos-cautela-metodologica', label: 'Ir a la clase 225' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Qué habría cambiado en la reunión si Ignacio hubiera dicho “ya, pero…” en lugar de “ya, ya”, y por qué Valeria dice “perdona que te interrumpa” y no “que te interrumpo”?». Respuesta esperada: «ya, pero» recibe y objeta sin ironía; «perdonar que» exige subjuntivo.' },
        ] },
      ],
    },
  ],
};
