import type { LiveLesson } from '../types';

/**
 * Lesson 481 · C1 · Pronombres átonos: leísmo, laísmo, loísmo y variedades (course unit G181).
 * Builds on G042 (lo, la, los, las), G063 (le, les), G064 (se lo), G122 (clitic order)
 * and G163 (lesson 463: doubling, «le» for «les», «se los» in much of Latin America).
 * C1 step: the case system behind the clitics and the norm on variation, following the
 * NGLE and the DPD. Etymological system (lo / la / los / las direct, le / les indirect,
 * lo neuter), the passive test; leísmo de persona masculino singular (Le vi ayer a Juan:
 * admitted, frequent in central and northern Spain), plural leísmo (not recommended),
 * feminine and «thing» leísmo (not accepted); «le» of courtesy with usted (¿Le acompaño,
 * señora?, Le saluda atentamente: very widespread, admitted); laísmo (*La dije que
 * viniera) and loísmo (*Lo di un golpe): not accepted, laísmo typical of central Castile
 * (Madrid included), loísmo rarer and strongly stigmatised. Verbs whose construction
 * alternates: llamar (by phone: la llamé; «to name»: la / le llamaban), avisar (la avisé
 * de que… / le avisé que…), molestar, asustar, preocupar (thing causing a state: le
 * molesta; person acting on purpose: la molestaba). Norm in narration vs a character's
 * voice in dialogue. Ampliación: impersonal «se le / se lo considera» (se le predominant
 * with masculine referents in Spain, se lo frequent in America, se la for feminine).
 * Scene: a Madrid publisher prepares two editions (Spain and Mexico) of «El invierno de
 * los Garrido», a novel by Gonzalo Arranz set in a Castilian village. Copy editor Carmen
 * Prieto (Madrid) and editor Paula Medina (Mexico City) review the pronouns. Escuchar:
 * Paula's voice note (es-MX-DaliaNeural). Escribir: Carmen's correction report to Gonzalo.
 */
export const lesson: LiveLesson = {
  id: 481,
  level: 'C1',
  title: 'Pronombres átonos: leísmo, laísmo, loísmo y variedades',
  subtitle: 'Reconocer el sistema etimológico, el leísmo admitido y los usos rechazados, y elegir el pronombre según la norma y la variedad.',
  legend: [
    { tone: 'blue', label: 'SISTEMA ETIMOLÓGICO · lo / la directo, le indirecto (la vi, le dije)' },
    { tone: 'teal', label: 'LEÍSMO ADMITIDO · le de persona masculino singular y le de cortesía (le vi a Juan; ¿le acompaño, señora?)' },
    { tone: 'orange', label: 'NO ACEPTADO O NO RECOMENDADO · laísmo, loísmo, leísmo femenino, plural o de cosa (*la dije)' },
    { tone: 'violet', label: 'VARÍA CON EL VERBO O LA ZONA · llamar, avisar, molestar; se le / se lo; se los' },
  ],
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: '¿Lo, la o le?', coach: 'Mismo pronombre, distinta norma. Same pronoun, different norms.',
      steps: [
        { title: 'Una novela, dos ediciones · One novel, two editions', blocks: [
          { kind: 'lead', text: 'Una editorial de Madrid prepara dos ediciones, una para España y otra para México, de «El invierno de los Garrido», una novela de Gonzalo Arranz ambientada en un pueblo de Castilla. Carmen Prieto, la correctora, y Paula Medina, la editora mexicana, repasan los pronombres: «A Gonzalo **le vi** ayer», dice Carmen; «Yo **lo vi** en Guadalajara», contesta Paula. Las dos hablan bien. Pero la abuela de la novela dice «**la dije** que no saliera», y eso es otra cosa. Hoy das el paso de C1: saber qué variación admite la norma, cuál rechaza y dónde se oye cada una.', en: 'A Madrid publisher is preparing two editions, one for Spain and one for Mexico, of a novel set in a Castilian village. The copy editor and the Mexican editor go over the pronouns. Carmen says “le vi” and Paula says “lo vi”: both are correct. But the grandmother in the novel says “la dije”, and that is a different matter. Today’s C1 step: knowing which variation the norm accepts, which it rejects and where each one is heard.' },
          { kind: 'guide', text: { teacher: 'Tú lees las tres frases. Tu alumno dice cuál ha oído o leído antes y cuál le parece rara, antes de leer la explicación.', self: 'Lee las tres frases en voz alta. ¿Cuál te suena normal, cuál rara? Después lee la explicación de cada una. (Which sounds normal to you, which odd?)' } },
          { kind: 'compare', title: 'Tres maneras de decirlo · Three ways of saying it', columns: [
            { tone: 'blue', label: 'SISTEMA ETIMOLÓGICO', sentence: '[[A Gonzalo lo vi|blue]] en la feria.', idea: '«Lo» = objeto directo masculino. Es la forma general en todo el mundo hispánico.', en: 'The etymological system: “lo” for a masculine direct object. Correct and usual everywhere.' },
            { tone: 'teal', label: 'LEÍSMO ADMITIDO', sentence: '[[A Gonzalo le vi|teal]] en la feria.', idea: '«Le» como directo de persona masculina en singular: frecuente en el centro y el norte de España. La RAE lo admite.', en: '“Le” for a male person as direct object, in the singular: common in central and northern Spain and accepted by the Academy.' },
            { tone: 'orange', label: 'LAÍSMO · NO ACEPTADO', sentence: '*[[A la editora la dije|orange]] que viniera.', idea: '«Decir» pide un indirecto: a la editora le dije. «La» por «le» es laísmo y la norma lo rechaza.', en: '“Decir” takes an indirect object, so it must be “le dije”. Using “la” here is laísmo, which the norm rejects.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«A Gonzalo le vi en la feria». Según la norma académica, esta frase…', options: ['solo es correcta en América.', 'es correcta: es el leísmo de persona masculino singular, que se admite.', 'es incorrecta: siempre hay que decir «lo».'], answer: 1, why: 'El leísmo de persona masculino singular está tan extendido, también entre hablantes cultos, que la norma lo admite.', en: 'According to the academic norm, this sentence is…' },
            { prompt: '¿Qué falla en «La dije a la editora que viniera»?', options: ['Nada: es la forma general.', 'Falta el pronombre «se».', '«Decir» pide un indirecto (a quién): le dije.'], answer: 2, why: 'Lo que se dice es el directo («que viniera»); la persona es indirecto: le.', en: 'What is wrong with this sentence?' },
          ] },
        ] },
        { title: 'El sistema etimológico · The etymological system', mascot: '/brand/mascot/studying.webp', coach: 'Primero, la función. Function first.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'LO / LA DIRECTO · LE INDIRECTO', question: '¿El pronombre es el objeto directo o el indirecto?', en: 'The pronouns keep the Latin case distinction: lo, la, los, las for the direct object (they also mark gender), le, les for the indirect object (no gender). Neuter “lo” refers to an idea or a whole clause. This system is the general one in the Spanish-speaking world and the one every editor applies in neutral texts. The key is the function, not whether the referent is a person or a thing.', formula: ['directo (a quién o qué se ve, se espera, se encuentra): lo, la, los, las', 'indirecto (a quién se da, se dice, se pide algo): le, les', 'neutro (eso, una idea, una oración): lo'],
            meaning: 'Los pronombres conservan la distinción de casos del latín: **lo, la, los, las** para el objeto **directo** (marcan género) y **le, les** para el **indirecto** (sin género). El neutro **lo** retoma una idea entera. Es el sistema general en el mundo hispánico. Lo que decide es la **función**, no que el referente sea persona o cosa.',
            examples: [
              { es: '[[A Rosario la esperaban|blue]] en la estación; [[a su hermano, lo|blue]] buscaron en el bar.', en: 'Direct objects: “la” for Rosario, “lo” for her brother.' },
              { es: '[[A la abuela le contaron|blue]] la noticia por la noche.', en: 'Indirect object: what they told is the news; the grandmother is the recipient, so “le”, whatever her gender.' },
              { es: 'Que el invierno iba a ser duro, [[ya lo sabía|blue]] todo el pueblo.', en: 'Neuter “lo” sums up a whole clause.' },
            ] },
          { kind: 'table', title: 'Función y forma · Function and form', head: ['', 'Masculino', 'Femenino'], rows: [
            ['Directo singular', 'A Juan **lo** vi.', 'A Ana **la** vi.'],
            ['Directo plural', 'A ellos **los** vi.', 'A ellas **las** vi.'],
            ['Indirecto singular', 'A Juan **le** di el libro.', 'A Ana **le** di el libro.'],
            ['Indirecto plural', 'A ellos **les** di el libro.', 'A ellas **les** di el libro.'],
            ['Neutro', 'Eso ya **lo** sé.', '—'],
          ], note: 'El indirecto no distingue género: «le» vale igual para Juan que para Ana. Justo ahí nacen el laísmo y el loísmo, que intentan marcar el género donde el sistema no lo marca.' },
          { kind: 'decide', title: '¿Directo o indirecto? · Direct or indirect?', steps: [
            { q: '¿Puedes poner la frase en pasiva? (Vieron a Juan → Juan fue visto)', yes: 'Es objeto directo: lo, la, los, las.', no: 'Sigue con la pregunta 2.' },
            { q: '¿Hay ya otra cosa que se da, se dice, se pide o se regala?', yes: 'La persona es objeto indirecto: le, les (masculino y femenino).', no: 'Sigue con la pregunta 3.' },
            { q: '¿Es «doler, gustar, preocupar, molestar» con una cosa como sujeto?', yes: 'La persona es indirecto: le duele, le preocupa.', no: 'Mira el verbo: algunos alternan (llamar, avisar), lo verás en el paso 5.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Sistema etimológico: «A Rosario ___ llamé ayer por teléfono».', options: ['la', 'lo', 'le'], answer: 0, why: 'Llamar por teléfono: Rosario es directo (Rosario fue llamada), femenino: la.', en: 'Etymological system: “I phoned Rosario yesterday.”' },
            { prompt: '«A mis tías ___ escribí una postal desde Segovia».', options: ['los', 'les', 'las'], answer: 1, why: 'Lo escrito es la postal (directo); las tías reciben: indirecto plural, les.', en: '“I wrote my aunts a postcard from Segovia.”' },
          ] },
        ] },
        { title: 'Leísmo: lo que admite la norma · Leísmo: what the norm accepts', mascot: '/brand/mascot/standing.webp', coach: 'Le vi a Juan, sí; le vi a Ana, no. Yes to one, no to the other.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'LEÍSMO', question: '¿Usas «le» donde el sistema etimológico pide «lo» o «la»?', en: 'Leísmo is using le(s) for a direct object. Only one kind is accepted by the norm: a male person in the singular (“A Juan le vi ayer”), very common in central and northern Spain, educated speech and literature included. The plural (“les vi”) is less widespread and not recommended; with women (“a Ana le vi”) or with things (“el libro no le encuentro”) it is not accepted. The courtesy “le” with usted, for men and women alike, is very widespread, even in areas without leísmo, and accepted.', formula: ['persona, masculino singular: Le vi ayer a Juan → admitido', 'masculino plural: Les vi → no recomendado (los vi)', 'femenino o cosa: Le vi a Ana, El libro no le encuentro → no aceptado', 'cortesía con usted: ¿Le acompaño, señora? → muy extendido y admitido'],
            meaning: '**Leísmo** es usar «le(s)» como objeto **directo**. La norma solo admite un tipo: el de **persona, masculino y singular**, muy frecuente en el centro y el norte de España, también en la lengua culta y en la literatura. El plural no se recomienda; con mujeres o con cosas no se acepta. El **le de cortesía** con usted, para hombres y mujeres, está muy extendido, incluso donde no hay leísmo, y se admite.',
            examples: [
              { es: '[[Al médico le esperamos|teal]] más de una hora.', en: 'Accepted leísmo: a man, singular. “Lo esperamos” is equally correct.' },
              { es: 'Señora Garrido, [[¿le acompaño|teal]] hasta el coche?', en: 'Courtesy “le” with usted: very widespread and accepted, also when talking to a woman.' },
              { es: 'Atentamente, [[le saluda|teal]] Carmen Prieto, correctora.', en: 'The classic letter closing: “le” of courtesy, whoever the reader is.' },
            ] },
          { kind: 'table', title: 'Tipos de leísmo · Kinds of leísmo', head: ['Tipo', 'Ejemplo', 'Norma'], rows: [
            ['Persona, masculino singular', 'A Juan **le** vi ayer.', '[[Admitido|teal]] (también: **lo** vi)'],
            ['Persona, masculino plural', 'A los niños **les** vi.', '[[No recomendado|orange]]: **los** vi'],
            ['Persona, femenino', 'A Ana **le** vi.', '[[No aceptado|orange]]: **la** vi'],
            ['Cosa', 'El libro no **le** encuentro.', '[[No aceptado|orange]]: no **lo** encuentro'],
            ['Cortesía (usted)', '¿**Le** acompaño, señora?', '[[Muy extendido y admitido|teal]]'],
          ], note: 'Con un indirecto, «le» no es leísmo: «Le regalé un libro a Ana» es sistema etimológico.' },
          { kind: 'tip', icon: '🌎', title: '¿Dónde se oye? · Where is it heard?', text: 'El leísmo de persona es **frecuente en el centro y el norte de España**. En **Andalucía, Canarias y casi toda América** predomina el sistema etimológico: «A Juan **lo** vi». Un lector mexicano entiende «le vi», pero le suena a España; un lector madrileño acepta «lo vi» sin pestañear. Por eso, en un texto para todo el mundo hispánico, **lo / la** es la opción más segura.', en: 'Person leísmo is common in central and northern Spain. Andalusia, the Canary Islands and almost all of Latin America mainly use the etymological system. A Mexican reader understands “le vi” but hears it as Spanish from Spain; a reader from Madrid accepts “lo vi” without blinking. So for a pan-Hispanic text, lo / la is the safest choice.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué frase NO acepta la norma?', options: ['A tu prima le vi en la boda.', 'A tu prima la vi en la boda.', 'A tu primo le vi en la boda.'], answer: 0, why: '«Le» como directo femenino es leísmo no aceptado: a tu prima la vi.', en: 'Which sentence does the norm NOT accept?' },
            { prompt: 'Un recepcionista a una clienta: «¿___ llevo las maletas a la habitación?». ¿Qué pronombre necesita?', options: ['Lo', 'La', 'Le'], answer: 2, why: 'Lo llevado son las maletas (directo); la clienta es el indirecto: le. No hay leísmo.', en: 'A receptionist to a guest: “Shall I take your bags up to the room?”' },
          ] },
        ] },
        { title: 'Laísmo y loísmo · Laísmo and loísmo', mascot: '/brand/mascot/speaking.webp', coach: 'Decir, dar, doler: siempre le. Always le.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'LAÍSMO Y LOÍSMO', question: '¿Usas «la» o «lo» para la persona que recibe algo?', en: 'Laísmo is using la(s) for a feminine indirect object (“*La dije que viniera”); loísmo is using lo(s) for a masculine one (“*Lo di un golpe”). Neither is accepted by the educated norm. Laísmo is typical of speech in central Castile, Madrid included, and is socially stigmatised; loísmo is much rarer and is perceived as rural or uneducated. With decir, dar, pedir, regalar, doler or gustar, the person is always “le”.', formula: ['laísmo: la / las por le / les → *La dije que viniera · Le dije', 'loísmo: lo / los por le / les → *Lo di un golpe · Le di', 'decir, dar, pedir, regalar, doler, gustar: la persona = le'],
            meaning: '**Laísmo**: «la(s)» como indirecto femenino. **Loísmo**: «lo(s)» como indirecto masculino. La norma culta **no acepta ninguno**. El laísmo es propio del habla de zonas del **centro de Castilla, Madrid incluida**, y está **socialmente estigmatizado**; el loísmo es **mucho menos frecuente** y se percibe como rural o popular.',
            examples: [
              { es: '*[[A mi hermana la regalé|orange]] un pañuelo → [[A mi hermana le regalé|blue]] un pañuelo.', en: 'Laísmo corrected: she receives the scarf, so “le”.' },
              { es: '*[[A Mario lo dolía|orange]] la rodilla → [[A Mario le dolía|blue]] la rodilla.', en: 'Loísmo corrected: with “doler” the person is always indirect.' },
              { es: '*[[A las vecinas las pidió|orange]] ayuda → [[A las vecinas les pidió|blue]] ayuda.', en: 'Plural laísmo: what she asked for is help; the neighbours are the indirect object.' },
            ] },
          { kind: 'compare', title: 'Narrador y personaje · Narrator and character', columns: [
            { tone: 'orange', label: 'EN BOCA DE UN PERSONAJE', sentence: '—[[La dije|orange]] que no saliera con esta helada.', idea: 'Es la voz de la abuela, de un pueblo de Castilla. El corrector lo respeta: caracteriza al personaje.', en: 'In a character’s mouth, laísmo is a deliberate portrait of how she speaks; editors normally keep it.' },
            { tone: 'blue', label: 'EN LA VOZ DEL NARRADOR', sentence: 'La abuela [[le dijo|blue]] a Rosario que no saliera.', idea: 'El narrador sigue la norma culta: aquí el laísmo se corrige.', en: 'The narrator follows the educated norm, so here laísmo is corrected.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'En la narración: «Al cartero ___ dieron una propina».', options: ['le', 'la', 'lo'], answer: 0, why: 'Lo dado es la propina; el cartero recibe: indirecto, le. «Lo» sería loísmo.', en: 'In the narration: “They gave the postman a tip.”' },
            { prompt: '¿Por qué Carmen no corrige «la dije» en un diálogo?', options: ['Porque es la voz del personaje, no del narrador.', 'Porque la RAE admite el laísmo en la literatura.', 'Porque en Castilla es correcto.'], answer: 0, why: 'El laísmo no es correcto en ninguna zona según la norma, pero un diálogo puede reproducir cómo habla un personaje.', en: 'Why doesn’t Carmen correct “la dije” in a dialogue?' },
          ] },
        ] },
        { title: 'Verbos que cambian · Verbs that change', mascot: '/autoestudio/mascot/noting.webp', coach: 'Mira el verbo y el sentido. Look at the verb and its meaning.', blocks: [
          { kind: 'concept', tone: 'violet', label: 'RÉGIMEN QUE ALTERNA', question: '¿El verbo admite dos construcciones con sentidos o estructuras distintos?', en: 'Some verbs allow both cases without any leísmo involved. Llamar by phone takes a direct object (la llamé); llamar meaning “to call someone a name” allows both (la / le llamaban “la Maestra”). Avisar a alguien de algo takes lo / la; avisar algo a alguien takes le. With feeling verbs (molestar, asustar, preocupar), a thing that causes a state usually goes with le (le molesta el ruido), while a person acting on purpose makes the verb fully transitive: lo / la.', formula: ['llamar por teléfono → la llamé · llamar «dar nombre» → la llamaban / le llamaban', 'avisar a alguien de algo → la avisé de que… · avisar algo a alguien → le avisé que…', 'molestar, asustar, preocupar: cosa que causa un estado → le; persona que actúa a propósito → lo / la'],
            meaning: 'Algunos verbos admiten los dos casos **sin que haya leísmo**. **Llamar** por teléfono pide directo; «llamar» en el sentido de **poner un nombre** admite los dos. **Avisar a alguien de algo** pide lo / la; **avisar algo a alguien**, le. Con **molestar, asustar, preocupar**, una cosa que causa un estado va normalmente con **le**; una persona que actúa **a propósito** pide **lo / la**.',
            examples: [
              { es: 'En el pueblo [[la llamaban|violet]] «la Maestra» · [[le llamaban|violet]] «la Maestra».', en: '“Llamar” meaning to give someone a name: both constructions are correct, even with a woman.' },
              { es: '[[La avisé de que|violet]] la reunión era a las diez · [[Le avisé que|violet]] la reunión era a las diez.', en: 'Avisar a alguien DE algo (la) / avisar algo A alguien (le): note the “de” goes with “la”.' },
              { es: '[[A Paula le molesta|violet]] el ruido de la imprenta, pero su compañero [[la molestaba|violet]] a propósito para hacerla reír.', en: 'A noise that bothers her: “le”. A colleague teasing her on purpose: “la”.' },
            ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Avisa a Paula de que la reunión es a las diez» → «___ de que la reunión es a las diez».', options: ['Avísala', 'Avísale', 'Avísalo'], answer: 0, why: 'Avisar a alguien DE algo: la persona es directo, femenino: avísala.', en: '“Let Paula know the meeting is at ten.”' },
            { prompt: '¿Qué forma es la más general? «A mi hermano ___ las tormentas».', options: ['los asustan', 'le asustan', 'lo asustan'], answer: 1, why: 'Una cosa (las tormentas) causa un estado: lo más general es el dativo, le.', en: '“Storms frighten my brother.”' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: '¿Directo o indirecto? Direct or indirect?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees cada frase con el error y tu alumno dice qué fenómeno es (laísmo, loísmo, leísmo no aceptado) antes de ver la corrección.', self: 'Lee cada frase: ¿laísmo, loísmo o leísmo no aceptado? Decide y después mira la corrección. (Name the phenomenon before looking.)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'A mi madre la duele la espalda.', right: 'A mi madre le duele la espalda.', why: 'Laísmo: con «doler», la persona es indirecto.' },
            { wrong: 'La dije a Rosario que llamara.', right: 'Le dije a Rosario que llamara.', why: 'Laísmo: lo dicho es el directo; Rosario es indirecto.' },
            { wrong: 'Lo di un golpe al coche sin querer.', right: 'Le di un golpe al coche sin querer.', why: 'Loísmo: el golpe es el directo; el coche lo recibe (indirecto, aunque sea una cosa).' },
            { wrong: 'A María le vi en el mercado.', right: 'A María la vi en el mercado.', why: 'Leísmo femenino: no aceptado. El directo femenino es «la».' },
            { wrong: 'Los libros les dejé en la mesa.', right: 'Los libros los dejé en la mesa.', why: 'Leísmo de cosa: no aceptado.' },
            { wrong: 'A los niños les llevé al parque.', right: 'A los niños los llevé al parque.', why: 'Leísmo plural: no se recomienda.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué frase sigue la norma culta?', options: ['A la vecina la pedí la escalera.', 'A la vecina le pedí la escalera.', 'A la vecina la pedí a ella la escalera.'], answer: 1, why: 'Lo pedido es la escalera; la vecina es indirecto: le pedí.', en: 'Which sentence follows the educated norm?' },
            { prompt: '«Lo» en «Lo pegaron una patada al balón» es…', options: ['leísmo admitido.', 'loísmo: debe ser «le pegaron».', 'correcto: el balón es masculino.'], answer: 1, why: 'La patada es el directo; el balón recibe la acción: indirecto, le. Que sea masculino no importa.', en: 'The “lo” in this sentence is…' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno dice qué forma usa él o ella con «ver a mi hermano» y con «decirle algo a mi hermana», y si en su zona ha oído otra.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'Revisando el manuscrito', coach: 'Toca cada expresión marcada. Tap each marked expression.',
      steps: [
        { title: 'Videollamada entre Madrid y México · A video call', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Carmen y tu alumno es Paula. Después tu alumno toca cada expresión marcada y dice si es sistema etimológico, leísmo admitido, uso no aceptado o un verbo que alterna.', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada y clasifícala. (Tap each marked expression and classify it.)' } },
          { kind: 'explore', title: 'Los pronombres de la abuela', setting: 'Martes, cinco de la tarde en Madrid, nueve de la mañana en Ciudad de México. Carmen y Paula repasan el manuscrito por videollamada. Se tratan de tú. (Carmen, in Madrid, and Paula, in Mexico City, review the manuscript.)', lines: [
            { who: 'Carmen', text: 'Hola, Paula. Ayer [[le vi|teal]] a Gonzalo en una presentación y me preguntó cómo van las dos ediciones.', en: 'Hi, Paula. I saw Gonzalo at a book launch yesterday and he asked me how the two editions are going.' },
            { who: 'Paula', text: '¡Qué bien! Yo [[lo vi|blue]] en la feria de Guadalajara. Oye, en el capítulo tres el narrador escribe que Rosario «[[la dio un beso a su madre|orange]]». ¿Eso lo corriges tú?', en: 'Great! I saw him at the Guadalajara book fair. Listen, in chapter three the narrator writes “la dio un beso a su madre”. Are you correcting that?' },
            { who: 'Carmen', text: 'Sí, en la narración va «[[le dio un beso|blue]]». Pero en los diálogos la abuela dice «[[la dije que no saliera|orange]]», y ahí no toco nada: así se habla en su pueblo.', en: 'Yes, in the narration it becomes “le dio un beso”. But in the dialogues the grandmother says “la dije que no saliera”, and I leave that alone: that’s how people talk in her village.' },
            { who: 'Paula', text: 'Claro, es la voz del personaje. ¿Y cuando el narrador escribe «[[a su hermano le esperaba|teal]] en la estación»?', en: 'Of course, it’s the character’s voice. And when the narrator writes “a su hermano le esperaba en la estación”?' },
            { who: 'Carmen', text: 'Es leísmo de persona, masculino y singular. La RAE lo admite y en Castilla es muy frecuente, así que en nuestra edición se queda.', en: 'That’s person leísmo, masculine singular. The Academy accepts it and it’s very common in Castile, so it stays in our edition.' },
            { who: 'Paula', text: 'En México, en cambio, suena muy de España. En la nuestra pondría «[[lo esperaba|blue]]».', en: 'In Mexico, though, it sounds very Spanish. In ours I’d put “lo esperaba”.' },
            { who: 'Carmen', text: 'Me parece bien. Lo que cambio en las dos es «[[a los nietos les despertaba|orange]]» y «[[el candil no le encontraba|orange]]».', en: 'Fine by me. What I’m changing in both is “a los nietos les despertaba” and “el candil no le encontraba”.' },
            { who: 'Paula', text: 'Sí, el plural y la cosa: «los despertaba», «no lo encontraba». ¿Y el cura? Le dice a la abuela «[[¿Le acompaño, señora?|teal]]».', en: 'Yes, the plural and the object: “los despertaba”, “no lo encontraba”. And the priest? He says to the grandmother, “¿Le acompaño, señora?”' },
            { who: 'Carmen', text: 'Ese se queda en las dos: es el le de cortesía con usted. Está muy extendido, incluso donde no hay leísmo, y la norma lo admite.', en: 'That one stays in both: it’s the courtesy “le” with usted. It’s very widespread, even where there is no leísmo, and the norm accepts it.' },
            { who: 'Paula', text: 'Perfecto. Última duda: «[[al abuelo le llamaban|violet]] el Sabio». Yo habría escrito «lo llamaban».', en: 'Perfect. Last question: “al abuelo le llamaban el Sabio”. I’d have written “lo llamaban”.' },
            { who: 'Carmen', text: 'Las dos valen: con «llamar» en el sentido de poner un nombre, alternan. Y «[[le molestaba el viento|violet]]» también queda igual.', en: 'Both are fine: with “llamar” meaning to give someone a name, they alternate. And “le molestaba el viento” stays as it is too.' },
            { who: 'Paula', text: 'Genial. Esta tarde te mando mis notas y también se las paso a Gonzalo.', en: 'Great. I’ll send you my notes this afternoon and pass them on to Gonzalo too.' },
          ], notes: {
            'le vi': '**Leísmo admitido**: «le» como directo de un hombre, en singular. Carmen es de Madrid y lo usa con naturalidad; «lo vi» sería igual de correcto.',
            'lo vi': '**Sistema etimológico**: «lo» directo masculino. Es lo general en México y en casi toda América.',
            'la dio un beso a su madre': '**Laísmo**: el beso es el directo y la madre lo recibe (indirecto). En la narración se corrige: «le dio un beso a su madre».',
            'le dio un beso': 'Corrección del narrador: «le», indirecto, para hombre o mujer.',
            'la dije que no saliera': '**Laísmo** en boca de un personaje. Lo dicho («que no saliera») es el directo; la persona, indirecto. Se respeta porque caracteriza el habla de la abuela.',
            'a su hermano le esperaba': '**Leísmo admitido** (persona, masculino, singular). En la edición española se mantiene; en la mexicana, Paula prefiere el sistema etimológico.',
            'lo esperaba': 'Sistema etimológico, el habitual para un lector mexicano.',
            'a los nietos les despertaba': '**Leísmo plural**: no se recomienda. Se cambia en las dos ediciones: «los despertaba».',
            'el candil no le encontraba': '**Leísmo de cosa**: no se acepta en ninguna variedad culta. «El candil no lo encontraba». (Un candil es una lámpara de aceite antigua.)',
            '¿Le acompaño, señora?': '**Le de cortesía** con usted, aquí dirigido a una mujer: muy extendido, incluso en zonas que no son leístas, y admitido.',
            'al abuelo le llamaban': '**Llamar** = poner un nombre o apodo: admite «lo» y «le». No es un caso de leísmo que haya que corregir.',
            'le molestaba el viento': '**Molestar** con una cosa como sujeto que causa un estado: lo general es el dativo «le», también en América.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Qué hace Carmen con los laísmos de la abuela?', options: ['Los cambia solo en la edición mexicana.', 'Los corrige en las dos ediciones.', 'Los respeta: son la voz del personaje.'], answer: 2, why: '«Ahí no toco nada: así se habla en su pueblo».', en: 'What does Carmen do with the grandmother’s laísmos?' },
            { prompt: '¿Qué cambia Paula solo en la edición mexicana?', options: ['«¿Le acompaño, señora?».', '«le molestaba el viento».', '«le esperaba» por «lo esperaba».'], answer: 2, why: 'El leísmo admitido se queda en España; en México prefieren el sistema etimológico.', en: 'What does Paula change only in the Mexican edition?' },
            { prompt: '¿Qué casos se corrigen en las dos ediciones?', options: ['El le de cortesía y «llamar».', 'El leísmo plural y el leísmo de cosa.', 'Todos los «le» del manuscrito.'], answer: 1, why: '«Lo que cambio en las dos es “les despertaba” y “no le encontraba”».', en: 'Which cases are corrected in both editions?' },
          ] },
        ] },
        { title: '¿Se queda o se cambia? · Keep or change?', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'classify', title: 'La edición española · The Spanish edition', categories: [
            { id: 'queda', label: 'SE QUEDA', tone: 'teal' },
            { id: 'cambia', label: 'SE CAMBIA', tone: 'orange' },
          ], items: [
            { text: 'Narrador: «Al cura le saludaron todos a la salida de misa».', answer: 'queda', why: 'Leísmo de persona, masculino singular: admitido en la edición española.' },
            { text: 'Narrador: «A la maestra la contaron lo que había pasado».', answer: 'cambia', why: 'Laísmo en la voz del narrador: «le contaron».' },
            { text: 'Diálogo de la abuela: «—A tu madre la dije que volvieras pronto».', answer: 'queda', why: 'Laísmo en boca del personaje: se respeta como rasgo de su habla.' },
            { text: 'Narrador: «Las cartas de su marido les guardaba en una caja».', answer: 'cambia', why: 'Leísmo de cosa (y plural): «las guardaba».' },
            { text: 'El médico: «—Siéntese, señora, que enseguida le atiendo».', answer: 'queda', why: 'Le de cortesía con usted: muy extendido y admitido.' },
            { text: 'Narrador: «Al perro lo dieron las sobras de la cena».', answer: 'cambia', why: 'Loísmo: las sobras son el directo; el perro, indirecto: «le dieron».' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: tu alumno explica a Paula, con sus palabras, por qué un mismo laísmo se corrige en el narrador y se respeta en un diálogo.' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Función primero, norma después. Function first, then the norm.',
      steps: [
        { title: 'La voz del narrador · The narrator’s voice', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees cada frase del narrador y tu alumno elige la forma que sirve en cualquier edición, la del sistema etimológico.', self: 'Elige la forma que vale en cualquier edición: la del sistema etimológico. (Choose the form valid in any edition.)' } },
          { kind: 'choice', items: [
            { prompt: 'A su tía Engracia ___ encontraron dormida junto a la estufa.', options: ['le', 'lo', 'la'], answer: 2, why: 'Directo femenino (Engracia fue encontrada): la. «Le» sería leísmo femenino.', en: 'They found her aunt Engracia asleep by the stove.' },
            { prompt: 'A la vecina ___ pidió sal y unas cerillas.', options: ['le', 'se', 'la'], answer: 0, why: 'Pedir algo a alguien: lo pedido es el directo; la vecina, indirecto. «La» sería laísmo.', en: 'She asked the neighbour for salt and some matches.' },
            { prompt: 'Los papeles del notario no ___ encontraba por ninguna parte.', options: ['le', 'les', 'los'], answer: 2, why: 'Directo plural de cosa: los. «Les» sería leísmo de cosa.', en: 'He couldn’t find the notary’s papers anywhere.' },
            { prompt: 'Al médico ___ contó la verdad sobre la herida.', options: ['le', 'la', 'lo'], answer: 0, why: 'Contar algo a alguien: el médico es indirecto. «Lo» sería loísmo.', en: 'She told the doctor the truth about the wound.' },
            { prompt: 'A sus nietos ___ despertaba siempre con una canción.', options: ['le', 'les', 'los'], answer: 2, why: 'Directo plural de persona: los. «Les» es leísmo plural, no recomendado.', en: 'She always woke her grandchildren with a song.' },
          ] },
        ] },
        { title: '¿Qué dice la norma? · What does the norm say?', blocks: [
          { kind: 'classify', title: 'Frases oídas en la editorial · Heard at the publisher’s', categories: [
            { id: 'general', label: 'SISTEMA ETIMOLÓGICO · válido en todas partes', tone: 'blue' },
            { id: 'admitido', label: 'LEÍSMO ADMITIDO', tone: 'teal' },
            { id: 'rechazado', label: 'NO ACEPTADO O NO RECOMENDADO', tone: 'orange' },
          ], items: [
            { text: 'A mi abuelo le vi muy cansado el domingo.', answer: 'admitido', why: 'Persona, masculino, singular: leísmo admitido.' },
            { text: '¿Le espero en la entrada, señora?', answer: 'admitido', why: 'Le de cortesía con usted: muy extendido y admitido.' },
            { text: 'La compré a mi hija una bicicleta.', answer: 'rechazado', why: 'Laísmo: la bicicleta es el directo; la hija, indirecto: le compré.' },
            { text: 'A Mario lo dieron un premio en el colegio.', answer: 'rechazado', why: 'Loísmo: el premio es el directo; Mario, indirecto: le dieron.' },
            { text: 'A tus hermanos les vi en el cine.', answer: 'rechazado', why: 'Leísmo plural: no recomendado. Mejor «los vi».' },
            { text: 'A la ilustradora le mandé las pruebas el lunes.', answer: 'general', why: 'Indirecto (lo mandado son las pruebas): «le» es la forma etimológica.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'A Carmen la dijeron que el libro salía en marzo.', ok: false, options: ['A Carmen le dijeron que el libro salía en marzo.', 'A Carmen lo dijeron que el libro salía en marzo.', 'A Carmen se la dijeron que el libro salía en marzo.'], answer: 0, why: 'Laísmo: lo dicho es el directo; Carmen, indirecto: le dijeron.' },
            { sentence: '¿Le llevo a casa, señor Arranz?', ok: true, why: 'Correcta: hombre, singular y usted. «¿Lo llevo a casa?» también es correcto.' },
            { sentence: 'A las editoras les vimos en la feria.', ok: false, options: ['A las editoras las vimos en la feria.', 'A las editoras le vimos en la feria.', 'A las editoras los vimos en la feria.'], answer: 0, why: 'Directo femenino plural: las. «Les» sería leísmo plural y femenino.' },
            { sentence: 'Al portero lo regalaron una cesta por Navidad.', ok: false, options: ['Al portero la regalaron una cesta por Navidad.', 'Al portero les regalaron una cesta por Navidad.', 'Al portero le regalaron una cesta por Navidad.'], answer: 2, why: 'Loísmo: la cesta es el directo; el portero, indirecto: le regalaron.' },
            { sentence: 'A mi hermana le preocupa la mudanza.', ok: true, why: 'Correcta: una cosa (la mudanza) causa un estado; lo general es «le».' },
            { sentence: 'Ese manuscrito ya le leí dos veces.', ok: false, options: ['Ese manuscrito ya la leí dos veces.', 'Ese manuscrito ya lo leí dos veces.', 'Ese manuscrito ya leí dos veces.'], answer: 1, why: 'Leísmo de cosa, no aceptado: lo leí. Sin pronombre no vale, porque el objeto definido va delante.' },
          ] },
        ] },
        { title: 'Mensajes de la editorial · Messages at the publisher’s', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'chat-fill', title: 'Paula y Carmen organizan la semana · Planning the week', lines: [
            { who: 'Paula', text: 'Carmen, ¿___ avisaste a la ilustradora de que el lunes hay reunión?', options: ['le', 'lo', 'la'], answer: 2, why: 'Avisar a alguien DE algo: la persona es directo, femenino: la.' },
            { who: 'Carmen', text: 'Sí, y ___ dije también que traiga las pruebas de la portada.', options: ['lo', 'la', 'le'], answer: 2, why: 'Decir algo a alguien: indirecto, le. «La dije» sería laísmo.' },
            { who: 'Paula', text: 'Perfecto. ¿Y a Gonzalo? Yo ___ llamé tres veces ayer y nada.', options: ['les', 'la', 'lo'], answer: 2, why: 'Llamar por teléfono: directo masculino, lo (en España también se oye «le llamé»).' },
            { who: 'Carmen', text: 'Tranquila, a él ___ preocupan mucho los plazos; seguro que contesta hoy.', options: ['le', 'la', 'lo'], answer: 0, why: 'Una cosa (los plazos) causa un estado: lo general es le preocupan.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['A', 'mi', 'abuela', 'le', 'dije', 'que', 'viniera.'], accept: ['A mi abuela le dije que viniera.', 'Le dije a mi abuela que viniera.'], en: 'I told my grandmother to come (indirect object: le).' },
            { tiles: ['¿Le', 'acompaño', 'hasta', 'la', 'puerta,', 'señora?'], accept: ['¿Le acompaño hasta la puerta, señora?'], en: 'Shall I walk you to the door, madam? (courtesy “le”).' },
            { tiles: ['Al', 'niño', 'le', 'asustan', 'las', 'tormentas.'], accept: ['Al niño le asustan las tormentas.'], en: 'Storms frighten the boy (a thing causing a state: le).' },
          ] },
        ] },
        { title: 'Pásalo a la norma · Bring it into line with the norm', mascot: '/autoestudio/mascot/noting.webp', blocks: [
          { kind: 'rewrite', title: 'Para la voz del narrador · For the narrator’s voice', items: [
            { prompt: 'La escribí a mi madre una carta muy larga.', instruction: 'Corrige el laísmo.', accept: ['Le escribí a mi madre una carta muy larga', 'Le escribí una carta muy larga a mi madre', 'A mi madre le escribí una carta muy larga'] },
            { prompt: 'A los alumnos les llevé al museo.', instruction: 'Corrige el leísmo plural.', accept: ['A los alumnos los llevé al museo', 'Los llevé al museo'] },
            { prompt: 'Lo dije a Pablo que no llegaba a tiempo.', instruction: 'Corrige el loísmo.', accept: ['Le dije a Pablo que no llegaba a tiempo', 'A Pablo le dije que no llegaba a tiempo'] },
            { prompt: 'Avisé a Marta de la reunión.', instruction: 'Sustituye «a Marta» por un pronombre.', accept: ['La avisé de la reunión'] },
            { prompt: 'Avisé a Marta la hora de la reunión.', instruction: 'Sustituye «a Marta» por un pronombre.', accept: ['Le avisé la hora de la reunión'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno inventa dos frases de la abuela con laísmo y las «traduce» a la voz del narrador.' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Un audio de Paula', coach: 'Primero la idea, después los detalles. Gist first, then details.',
      steps: [
        { title: 'Paula deja un audio · Paula sends a voice note', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general. Segunda escucha: tu alumno anota cada pronombre citado y dice qué decide Paula con él. Después, las preguntas.', self: 'Escucha una vez para la idea general y otra para los detalles: anota cada pronombre que cita Paula y qué decide. (Note each pronoun Paula quotes and her decision.)' } },
          { kind: 'listen', title: 'Un audio de Paula', channel: 'NOTA DE VOZ · DE PAULA PARA CARMEN', src: '/audio/grammar-live/481.mp3',
            before: 'Paula ha terminado de revisar el capítulo seis y le deja un audio a Carmen. ¿Qué crees que va a cambiar y qué va a respetar? (What do you think she will change and what will she keep?)',
            gist: { prompt: '¿Para qué deja Paula este audio? · Why does Paula send this voice note?', options: ['Para pedir más tiempo para la edición mexicana.', 'Para explicar sus cambios en el capítulo seis y hacer una consulta.', 'Para quejarse del estilo de Gonzalo.'], answer: 1, why: 'Explica qué cambia, qué respeta y pregunta por un caso para las dos ediciones.', en: 'She explains her changes, what she keeps and asks about one case.' },
            details: [
              { prompt: '¿Qué hace Paula con «a su hermano le esperaba»?', options: ['Lo cambia a «lo esperaba» en la edición mexicana.', 'Lo cambia en las dos ediciones.', 'No lo toca.'], answer: 0, why: '«En nuestra edición puse “lo esperaba”… en la tuya déjalo, si quieres».', en: 'What does Paula do with “a su hermano le esperaba”?' },
              { prompt: '¿Qué propone para los laísmos de la abuela?', options: ['Quitar esos diálogos.', 'Corregirlos todos.', 'No tocarlos y añadir una nota al final del libro.'], answer: 2, why: '«No lo toco… pero propongo una nota al final del libro».', en: 'What does she suggest for the grandmother’s laísmos?' },
              { prompt: '¿Por qué no cambia «¿Le acompaño, señora?»?', options: ['Porque el le de cortesía con usted también se oye en México.', 'Porque Carmen se lo pidió.', 'Porque es un laísmo del personaje.'], answer: 0, why: '«Ese le de cortesía con usted también se oye aquí».', en: 'Why doesn’t she change “¿Le acompaño, señora?”?' },
              { prompt: '¿Qué le consulta a Carmen?', options: ['Si Gonzalo ya vio el PDF.', 'Si cambian «les visitaba» por «los visitaba» en las dos ediciones.', 'Si el libro necesita un glosario.'], answer: 1, why: '«Yo lo pasaría a “los visitaba” en las dos ediciones… ¿Estás de acuerdo?».', en: 'What does she ask Carmen?' },
            ],
            transcript: 'Hola, Carmen, soy Paula. Ya terminé el capítulo seis, así que te cuento rápido antes de que se me olvide. Primero, el narrador: donde Gonzalo escribe «a su hermano le esperaba», en nuestra edición puse «[[lo esperaba|blue]]», porque el lector mexicano espera el «lo». Ya sé que en España ese [[le de persona|teal]] está admitido, así que en la tuya déjalo, si quieres. Segundo, la abuela. Dice «[[la dije|orange]] que no saliera» y «[[la regaló|orange]] un pañuelo a su nieta». No lo toco, porque es la voz del pueblo, pero propongo una nota al final del libro para que nadie piense que son erratas. Tercero, el cura: «¿[[Le acompaño|teal]], señora?». Ese le de cortesía con usted también se oye aquí, sobre todo en fórmulas como «le saluda atentamente», así que se queda igual. Y una pregunta: en la página noventa, el narrador dice que «[[a sus primos les visitaba|orange]] cada verano». Yo lo pasaría a «[[los visitaba|blue]]» en las dos ediciones, porque el leísmo en plural no se recomienda. ¿Estás de acuerdo? Ah, y el PDF con mis comentarios [[ya se los mandé|violet]] a ti y a Gonzalo. Me dices qué te parece. ¡Un abrazo!',
            reply: { teacher: 'Tú eres Carmen y le contestas a Paula con un audio. Tu alumno es Paula y defiende cada decisión cuando tú le preguntas por qué.', self: 'Contesta a Paula en voz alta como Carmen: di si estás de acuerdo con cada decisión y por qué. (Reply aloud as Carmen and justify each decision.)' } },
          { kind: 'tip', icon: '🇲🇽', title: '«Ya se los mandé» · se los with plural recipients', text: 'Paula habla de un solo PDF, pero dice «**se los** mandé a ti y a Gonzalo»: la **-s** marca que los destinatarios son varios. Lo viste en la clase 163: es muy frecuente en la conversación de México y de buena parte de América, pero en un texto formal se escribe «**se lo** mandé a los dos». Fíjate también en «la regaló un pañuelo **a su nieta**»: el laísmo de la abuela convive en la novela con la norma del narrador.', en: 'Paula means a single PDF but says “se los mandé”: the -s shows there are several recipients. As you saw in class 163, this is very common in conversation in Mexico and much of Latin America, but formal writing has “se lo mandé a los dos”.' },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Norma y variedad', coach: 'Describe la variación sin caricaturas. Describe variation fairly.',
      steps: [
        { title: 'Hablar de cómo hablamos · Talking about how we talk', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas y tu alumno responde con ejemplos propios. Si usa un pronombre no aceptado sin querer, tú repites la frase con la forma de la norma y sigues con la repregunta.', self: 'Lee cada pregunta y responde en voz alta con ejemplos. Revisa cada «le, la, lo» que digas. (Check every le, la, lo you say.)' } },
          { kind: 'talk', cards: [
            { q: '¿Cómo dices tú «Ayer vi a mi primo»: lo vi o le vi? ¿Dónde has oído la otra forma? · Lo vi or le vi? Where have you heard the other?', followUps: ['¿Y con tu prima?', '¿Te suena raro alguna de las dos?'], phrases: ['Yo digo [[lo vi|blue]]…', 'En… he oído [[le vi|teal]]…', 'Con una mujer, siempre [[la vi|blue]]…'], hint: 'Describe tu uso y el de otros sin juzgar: el leísmo de persona masculino singular es correcto.', example: 'Yo digo «lo vi», porque aprendí con profesores mexicanos. Pero mi compañera de piso es de Valladolid y dice «le vi», y es igual de correcto. Con mi prima, en cambio, las dos decimos «la vi».', next: 'Ahora, de corrector.' },
            { q: 'Eres corrector. Un autor escribe «la dije» y «lo di un golpe» en la voz del narrador. ¿Qué le explicas? · Explain to an author.', followUps: ['¿Y si lo dice un personaje?', '¿Cómo se lo dices sin ofenderlo?'], phrases: ['En la narración, [[le dije|blue]]…', 'Es un caso de [[laísmo|orange]]…', 'En los diálogos [[se puede respetar|violet]]…'], hint: 'Explica la función (directo o indirecto), nombra el fenómeno y distingue narrador y personaje.', example: 'En la narración te propongo «le dije» y «le di un golpe», porque la persona recibe algo y es indirecto. «La dije» es laísmo y «lo di» es loísmo; la norma no los acepta. Si los dice un personaje, en cambio, podemos respetarlos.' },
            { q: '¿Deberían las novelas reproducir el habla regional en los diálogos, con laísmos o voseo? · Should novels reproduce regional speech?', followUps: ['¿Pondrías una nota del editor?', '¿Qué pasa al traducir o adaptar?'], phrases: ['A mí me parece que…', 'Le da verdad al personaje…', 'El riesgo es que el lector…'], hint: 'Argumenta a favor y en contra; usa «le» con «dar verdad a alguien».', example: 'A mí me parece que sí: le da verdad al personaje. Si la abuela habla como en su pueblo, el lector la oye. El riesgo es que alguien lo tome por una errata, así que una nota breve del editor ayuda.', next: 'Ahora, con usted.' },
            { q: 'Trabajas en un hotel y atiendes a una clienta mayor. Ofrécele ayuda con usted: acompañarla, llamarla, avisarla. · Offer help politely.', followUps: ['¿Y si es un cliente?', '¿Cómo te despides por correo?'], phrases: ['[[¿Le acompaño|teal]] a…?', '[[La aviso|violet]] en cuanto…', '[[Le saluda atentamente|teal]]…'], hint: 'Con usted, el le de cortesía es muy natural; «la acompaño» también es correcto.', example: 'Buenas noches, señora. ¿Le acompaño a su habitación? Si quiere, la aviso en cuanto llegue su taxi, y mañana le llamo a las ocho para despertarla. Y si escribe a recepción, le contestamos enseguida.', teacher: 'Tú haces de clienta exigente y pides cosas. Tu alumno responde siempre de usted.' },
            { q: 'Cuenta un día complicado: a quién llamaste, a quién avisaste, qué te molestó. · Tell us about a difficult day.', followUps: ['¿A quién le pediste ayuda?', '¿Qué es lo que más te preocupa ahora?'], phrases: ['[[A mi jefa la llamé|blue]]…', '[[Le avisé que|violet]]… / [[La avisé de que|violet]]…', '[[Me molestó|violet]]…'], hint: 'Elige el pronombre por la función y por la construcción del verbo.', example: 'El lunes a mi jefa la llamé a las siete porque había huelga de metro. Le avisé que llegaría tarde, y a mi compañero lo avisé de que tenía que abrir él. Lo que más me molestó fue que nadie nos había informado.' },
            { q: 'Un amigo de Madrid dice «la dije que viniera». ¿Lo corriges? ¿Cuándo sí y cuándo no? · Would you correct a friend?', followUps: ['¿Y en un correo de trabajo?', '¿Qué otros rasgos regionales conoces?'], phrases: ['En la conversación, …', 'En un texto formal, [[le dije|blue]]…', 'Está [[estigmatizado|orange]]…'], hint: 'Distingue registro e información sobre la norma; usa los términos con precisión.', example: 'En una conversación entre amigos no lo corrijo: es su forma de hablar y lo entiendo perfectamente. Pero si me pide que le revise un correo de trabajo, le explico que la norma pide «le dije», porque el laísmo está bastante estigmatizado.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno pregunta y tú respondes con algún laísmo o loísmo a propósito. Tu alumno lo detecta, dice qué fenómeno es y lo corrige.', self: 'Ahora haz tú las preguntas en voz alta y respóndelas con otra situación. (Now ask the questions aloud and answer with a different situation.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'El informe de corrección', coach: 'Explica cada cambio con precisión. Justify every change.',
      steps: [
        { title: 'Carmen escribe a Gonzalo · Carmen writes to Gonzalo', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos cada pronombre del texto: ¿directo o indirecto? ¿Hay algún fenómeno citado sin nombrar? Después tu alumno lee el informe en voz alta.', self: 'Escribe tu informe y toca «Revisar mi texto». Después repasa cada «le, la, lo» que no esté entre comillas. (Check every pronoun outside the quotes.)' } },
          { kind: 'write', title: 'Informe de corrección · A correction report', situation: 'Eres Carmen (o eres tú, revisando un texto real). Escribes al autor para explicarle qué pronombres cambias en la narración, qué respetas en los diálogos y qué cambia en la otra edición. (Write to the author: what you change, what you keep and why.)', task: [
            'Saluda al autor y di para qué escribes.',
            'Cita entre comillas al menos dos casos y nombra el fenómeno (laísmo, loísmo, leísmo).',
            'Explica qué se corrige en el narrador y qué se respeta en los diálogos, y por qué.',
            'Menciona una diferencia entre la edición española y la mexicana.',
            'Termina con una pregunta y una despedida.',
          ], starters: ['Querido Gonzalo:', 'Te escribo para…', 'En la voz del narrador…', '«…» pasa a «…»', 'En los diálogos no toco…', 'Paula, en cambio,…', 'Una sola duda:…', 'Un abrazo,'],
            words: ['laísmo', 'loísmo', 'leísmo de persona', 'le de cortesía', 'la voz del personaje', 'la norma', 'admitir', 'mantener', 'corregir', 'una nota del editor'],
            model: 'Querido Gonzalo: Te escribo para contarte cómo va la corrección de «El invierno de los Garrido». En la voz del narrador he aplicado la norma: «la dio un beso a su madre» pasa a «[[le dio un beso|blue]] a su madre», y «el candil no le encontraba», a «[[no lo encontraba|blue]]», porque el leísmo de cosa no se acepta. Los casos de leísmo de persona, como «[[a su hermano le esperaba|teal]]», los mantengo en nuestra edición, ya que la RAE los admite; Paula, en cambio, los cambia a «lo» en la mexicana, que es lo que espera allí el lector. En los diálogos de la abuela no toco el laísmo: «[[la dije que no saliera|orange]]» es su manera de hablar y le da verdad al personaje. Eso sí, te propongo añadir una breve nota del editor para que nadie lo tome por una errata. El «¿Le acompaño, señora?» del cura se queda igual en las dos ediciones. Una sola duda: en tu pueblo, ¿al abuelo «lo llamaban» o «le llamaban» el Sabio? Las dos formas son correctas, así que elige tú. Un abrazo, Carmen',
            minWords: 130,
            checks: [
              { label: 'Nombras el fenómeno', pattern: '(?<!\\p{L})(?:laísmo|loísmo|leísmo)s?(?!\\p{L})', tip: 'Llama a cada caso por su nombre: «es laísmo», «el leísmo de persona se admite».' },
              { label: 'Citas los casos entre comillas', pattern: '«[^»]+»[^«]*«[^»]+»', tip: 'Cita al menos dos frases del manuscrito entre comillas: «la dije» pasa a «le dije».' },
              { label: 'Un «le» indirecto en tu propia prosa', pattern: '(?<![«\\p{L}])les?\\s+(?:da|doy|dio|di|digo|dije|dijo|propongo|pido|pidió|explico|expliqué|escribo|mando|envío|cuento|conté)(?!\\p{L})', tip: 'Usa tú también el indirecto: «le da verdad al personaje», «le propongo…».' },
            ],
            warnings: [
              { pattern: '(?<![«\\p{L}])(?<!se\\s)las?\\s+(?:dije|dijo|dijimos|dijeron|pedí|pidió|escribí|escribió|conté|contó)\\s+que(?!\\p{L})', why: 'Fuera de las citas, «la dije que…» es **laísmo**: en tu propia prosa escribe «**le** dije que…».' },
              { pattern: '(?<![«\\p{L}])(?<!se\\s)(?:la|lo)s?\\s+(?:di|dio|dimos|dieron|regalé|regaló|mandé|mandó)\\s+(?:un|una|unos|unas)(?!\\p{L})', why: 'Si la persona recibe algo, en tu prosa va «**le**»: «**le** dio un beso». Con «la» o «lo» sería laísmo o loísmo.' },
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
            { tone: 'blue', label: 'SISTEMA ETIMOLÓGICO', formula: 'directo: lo, la, los, las · indirecto: le, les', example: 'A Ana la vi. A Ana le dije que viniera.', caption: 'válido en todo el mundo hispánico', en: 'the general system: the function decides, and only the direct object marks gender' },
            { tone: 'teal', label: 'LEÍSMO ADMITIDO', formula: 'le = lo con persona, masculino singular · le de cortesía con usted', example: 'A Juan le vi ayer. ¿Le acompaño, señora?', caption: 'frecuente en el centro y norte de España', en: 'the only accepted leísmo, plus the very widespread courtesy le with usted' },
            { tone: 'orange', label: 'NO ACEPTADO O NO RECOMENDADO', formula: 'laísmo · loísmo · leísmo femenino, de cosa o plural', example: '*La dije · *Lo di un golpe · *Le vi a Ana · *El libro no le encuentro', caption: 'en un personaje, retrato de su habla', en: 'rejected by the educated norm; in a character’s dialogue it may be kept as a portrait of their speech' },
            { tone: 'violet', label: 'VARÍA CON EL VERBO', formula: 'llamar «dar nombre», avisar, molestar, asustar, preocupar', example: 'La avisé de que… / Le avisé que… · Le molesta el ruido.', caption: 'no es leísmo: cambia la construcción', en: 'some verbs genuinely allow both cases, depending on construction or meaning' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Pregúntate primero por la **función**: ¿directo o indirecto? Después, por la **norma**: el sistema etimológico vale en todas partes; el leísmo de persona masculino singular y el le de cortesía se admiten; el laísmo, el loísmo y el resto de leísmos, no. Por último, por el **contexto**: en un diálogo, la voz del personaje puede mandar.', en: 'First ask about function: direct or indirect? Then about the norm: the etymological system works everywhere; masculine singular person leísmo and courtesy le are accepted; laísmo, loísmo and other leísmos are not. Finally, about context: in a dialogue, the character’s voice may come first.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'A mi jefa ___ vi ayer en el metro.', options: ['la', 'lo', 'le'], answer: 0, why: 'Directo femenino: la. «Le» sería leísmo femenino, no aceptado.', en: 'I saw my boss (a woman) on the underground yesterday.' },
            { prompt: '«A mi jefe ___ vi ayer en el metro». ¿Qué formas acepta la norma?', options: ['Solo «lo».', '«Lo» y también «le».', 'Solo «le».'], answer: 1, why: 'Persona, masculino, singular: el leísmo se admite junto a «lo».', en: 'Which forms does the norm accept?' },
            { prompt: '—¿Qué ___ dijiste a tus padres? —La verdad.', options: ['las', 'les', 'los'], answer: 1, why: 'Lo dicho es «qué»; los padres, indirecto plural: les.', en: '“What did you tell your parents?” “The truth.”' },
            { prompt: 'En un hotel, a una clienta: «¿___ acompaño a su habitación, señora?». ¿Qué formas son correctas?', options: ['«La» y también «Le», el le de cortesía.', 'Solo «Lo».', 'Solo «La».'], answer: 0, why: 'El le de cortesía con usted está muy extendido y se admite; «la acompaño» también es correcto.', en: 'Which forms are correct?' },
            { prompt: 'A Pablo ___ duele la rodilla desde el partido.', options: ['le', 'la', 'lo'], answer: 0, why: 'Con «doler», la persona es indirecto: le. «Lo» sería loísmo.', en: 'Pablo’s knee has hurt since the match.' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Ahora, una oficina. Now, an office.', blocks: [
          { kind: 'lead', text: 'Elena trabaja en una academia de Valladolid y revisa los mensajes que un compañero va a mandar a la dirección. Pásalos a la norma culta.', en: 'Elena works at a language school in Valladolid and checks the messages a colleague is about to send to management. Rewrite them following the educated norm.' },
          { kind: 'rewrite', title: 'Los mensajes de Hugo · Hugo’s messages', items: [
            { prompt: 'La mandé a la directora el informe ayer.', instruction: 'Corrige el laísmo.', accept: ['Le mandé a la directora el informe ayer', 'Le mandé el informe a la directora ayer', 'A la directora le mandé el informe ayer', 'Ayer le mandé el informe a la directora', 'Ayer le mandé a la directora el informe'] },
            { prompt: 'A los alumnos nuevos les recibí por la mañana.', instruction: 'Corrige el leísmo plural.', accept: ['A los alumnos nuevos los recibí por la mañana'] },
            { prompt: 'Lo expliqué a Mario el problema de los horarios.', instruction: 'Corrige el loísmo.', accept: ['Le expliqué a Mario el problema de los horarios', 'Le expliqué el problema de los horarios a Mario', 'A Mario le expliqué el problema de los horarios'] },
          ] },
        ] },
        { title: 'Ampliación: el se impersonal · Extension: impersonal se', mascot: '/brand/mascot/portrait.webp', coach: 'Opcional. Optional.', blocks: [
          { kind: 'lead', text: 'Para estudiantes fuertes o si queda tiempo. En las oraciones **impersonales con se**, el objeto de persona también varía. Con referente masculino se usan las dos formas: «A Gonzalo **se le** considera un maestro del cuento» / «A Gonzalo **se lo** considera…»; en España predomina **se le**, y en buena parte de América es frecuente **se lo**. Con referente femenino, lo más general es **se la**: «A Rosario **se la** considera la mejor alumna del pueblo». Recuerda que en «se lo dije» el «se» es otra cosa: es «le» ante «lo», y en América se oye «se **los** dije» con varios destinatarios.', en: 'For strong students or spare time. In impersonal sentences with “se”, a person object varies too. With a male referent both forms are used: “se le considera” prevails in Spain, “se lo considera” is common in much of Latin America. With a female referent, “se la” is the most general choice. Remember that the “se” in “se lo dije” is a different one: it is “le” before “lo”.' },
          { kind: 'choice', title: 'Reconocer y adaptar · Recognise and adapt', items: [
            { prompt: '«A la nueva directora ___ considera muy exigente». Lo más general es…', options: ['se la', 'se lo', 'se les'], answer: 0, why: 'Referente femenino en una impersonal con «se»: lo más general es «se la».', en: '“The new head is considered very demanding.” The most general form is…' },
            { prompt: 'En un periódico de Madrid: «Al nuevo director ___ ve muy contento con el proyecto».', options: ['se le', 'se la', 'se les'], answer: 0, why: 'Referente masculino singular: en España predomina «se le» («se lo» también se usa).', en: 'In a Madrid newspaper: “The new director seems very pleased with the project.”' },
            { prompt: 'Paula lee: «A Gonzalo se lo considera un maestro del cuento». ¿Qué le dices?', options: ['Es correcto: «se lo» es frecuente en América; en España predomina «se le».', 'Es loísmo: hay que corregirlo.', 'Es incorrecto: «considerar» pide un indirecto.'], answer: 0, why: 'Las dos formas se usan; no es loísmo, porque Gonzalo es el objeto directo de «considerar».', en: 'What do you tell Paula?' },
          ] },
          { kind: 'teacher', text: 'Paso opcional, solo si queda tiempo o para estudiantes fuertes. Extra: tu alumno busca en un periódico de su país una impersonal con «se le» o «se lo» y explica qué forma usa y por qué.' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 182 · Se medio, se reflexivo, se dativo ético', text: 'Ya sabes elegir entre lo, la y le por la función, reconocer el leísmo admitido y explicar por qué el laísmo y el loísmo no se aceptan. En la clase 182 sigues con el pronombre más versátil del español, **se**: el se medio («se rompió el jarrón»), el reflexivo y el dativo ético («no te me pongas triste»), donde otra vez la función decide la forma.', en: 'You can now choose between lo, la and le by function, recognise accepted leísmo and explain why laísmo and loísmo are rejected. In class 182 you move on to the most versatile pronoun in Spanish, se: middle se, reflexive se and the ethical dative, where once again function decides the form.', href: '/gramatica/se-medio-se-reflexivo-se-dativo', label: 'Ir a la clase 182' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Por qué “le vi a Juan” es correcto y “le vi a Ana” no?». Respuesta esperada: la norma solo admite el leísmo de persona masculino singular; con mujeres, «la vi». Tarea: el informe de Escribir sobre un texto real que tu alumno haya leído.' },
        ] },
      ],
    },
  ],
};
