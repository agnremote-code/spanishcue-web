import type { LiveLesson } from '../types';

/**
 * Lesson 547 · C1 · Adjetivos de relación y adjetivos que funcionan como adverbios
 * (course unit G247, extension from the PCIC coverage review of 2026-11-11; studied
 * after G188). One scene: the newsroom of a regional newspaper on closing night.
 * Carmen (desk editor) reviews the headlines of Darío, an intern. In the audio Carmen
 * (Mexican voice) leaves him a voice note with feedback. Content: qualifying vs
 * relational adjectives (crisis grave / crisis económica = de la economía);
 * properties of relational adjectives: always after the noun, no degree (*muy
 * económica), not coordinated with a qualifying one (*grave y económica), order
 * noun + relational + qualifying (una crisis económica grave), stacking (política
 * económica europea); adjectives with both readings (familiar, teatral, diplomático,
 * musical). Adjectives used as adverbs: masculine singular, invariable, modifying the
 * verb (hablar claro, jugar limpio, trabajar duro, pisar fuerte, respirar hondo,
 * apuntar alto) vs agreeing predicative (llegaron cansadas). Mistakes: *la económica
 * crisis, *una reforma muy fiscal, *una medida urgente y sanitaria, *ellas trabajan
 * duras, *hablaron claros. Instructions use tú.
 */
export const lesson: LiveLesson = {
  id: 547,
  level: 'C1',
  title: 'Adjetivos de relación y adjetivos que funcionan como adverbios',
  subtitle: 'Escribir con precisión: crisis económica grave (no «grave y económica») y hablar claro, jugar limpio, pisar fuerte.',
  legend: [
    { tone: 'teal', label: 'CALIFICATIVO · cualidad, admite grados: grave, muy grave (quality, gradable)' },
    { tone: 'orange', label: 'RELACIONAL · ámbito, «de + nombre»: económico, municipal (domain, not gradable)' },
    { tone: 'violet', label: 'ADJETIVO ADVERBIAL · modifica al verbo, invariable: hablar claro (adverbial use)' },
    { tone: 'blue', label: 'PREDICATIVO · describe al sujeto y concuerda: llegaron cansadas (agrees with subject)' },
  ],
  optionNotes: {
    'la económica crisis': 'El adjetivo relacional va siempre **después** del nombre: la crisis económica.',
    'duras': 'Cuando modifica al verbo, el adjetivo es **invariable**: trabajan duro.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Dos clases de adjetivos', coach: '¿Cualidad o ámbito?',
      steps: [
        { title: 'Noche de cierre · Closing night', blocks: [
          { kind: 'lead', text: 'Son las once de la noche en la redacción de un diario regional. Darío, becario, entrega su titular: «Una grave y económica crisis amenaza al sector». Carmen, la jefa de sección, lo tacha: «Es **una crisis económica grave**. “Económica” dice **de qué tipo** es la crisis; “grave” dice **cómo** es. No se mezclan. Y otra cosa: aquí hay que **hablar claro** y **escribir corto**». En dos minutos, Carmen ha dado dos lecciones: los adjetivos de relación y los adjetivos que hacen de adverbio.', en: 'It is eleven at night in the newsroom of a regional daily. Darío, an intern, hands in his headline. Carmen, the desk editor, crosses it out: “It’s una crisis económica grave. ‘Económica’ says what type of crisis it is; ‘grave’ says what it is like. They don’t mix. And another thing: here you have to speak plainly and write short”. In two minutes Carmen has given two lessons: relational adjectives and adjectives that act as adverbs.' },
          { kind: 'compare', title: 'Cualidad o ámbito · Quality or domain', columns: [
            { tone: 'teal', label: 'CALIFICATIVO', sentence: 'una crisis [[grave|teal]]', idea: 'Expresa una cualidad. Admite grados: muy grave, gravísima.', en: 'a serious crisis' },
            { tone: 'orange', label: 'RELACIONAL', sentence: 'una crisis [[económica|orange]]', idea: 'Clasifica: «de la economía». No admite grados.', en: 'an economic crisis' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué adjetivo es relacional?', options: ['una decisión difícil', 'una decisión judicial', 'una decisión rápida'], answer: 1, why: 'Judicial = de los jueces: clasifica, no gradúa.', en: 'Which adjective is relational?' },
            { prompt: '¿Cuál de estas expresiones no es posible?', options: ['una reforma muy necesaria', 'una reforma muy fiscal', 'una reforma fiscal muy necesaria'], answer: 1, why: 'Un relacional no admite «muy».', en: 'Which of these is not possible?' },
          ] },
        ] },
        { title: 'Cómo se comporta el relacional · How relational adjectives behave', mascot: '/brand/mascot/studying.webp', coach: 'Detrás, sin grados, pegado al nombre.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'ADJETIVO RELACIONAL', question: '¿Cómo reconozco un adjetivo de relación?', en: 'How do I recognize a relational adjective?', formula: ['equivale a «de + nombre»: política económica = de la economía', 'siempre pospuesto: la crisis económica', 'sin grados: ni «muy» ni «-ísimo»', 'pegado al nombre: nombre + relacional + calificativo'],
            meaning: 'El adjetivo relacional **clasifica**: indica el ámbito o el tipo (económico, municipal, sanitario, judicial, solar, lácteo). Por eso **no admite grados**, va **siempre detrás** del nombre y **no se coordina** con un calificativo: no se dice «una crisis grave y económica». Si hay los dos, el relacional va **pegado al nombre** y el calificativo, fuera: «una crisis **económica** grave» o «una grave crisis **económica**».',
            examples: [
              { es: 'El pleno aprobó una reforma [[fiscal|orange]] [[ambiciosa|teal]].', en: 'The council approved an ambitious tax reform.' },
              { es: 'Una [[nueva|teal]] ola [[migratoria|orange]] preocupa a la región.', en: 'A new wave of migration is worrying the region.' },
              { es: 'La política [[económica|orange]] [[europea|orange]] cambió de rumbo.', en: 'European economic policy changed course.' },
            ],
            note: 'Dos relacionales pueden acumularse: el segundo clasifica al conjunto. «Política económica europea» = la política económica de Europa.' },
          { kind: 'table', title: 'Pruebas rápidas · Quick tests', head: ['Prueba', 'Calificativo', 'Relacional'], rows: [
            ['¿Admite «muy»?', 'una crisis [[muy grave|teal]]', '*una crisis muy económica'],
            ['¿Puede ir delante?', 'una [[grave|teal]] crisis', '*una económica crisis'],
            ['¿Se parafrasea con «de + nombre»?', 'no', 'crisis [[económica|orange]] = de la economía'],
            ['¿Se coordinan entre sí?', 'grave y profunda', 'económica y social (dos relacionales, sí)'],
            ['¿Uno de cada tipo con «y»?', '—', '*grave y económica'],
          ], note: 'El asterisco (*) marca una secuencia que no es posible.' },
          { kind: 'concept', tone: 'teal', label: 'DOBLE LECTURA', question: '¿Un mismo adjetivo puede ser de los dos tipos?', en: 'Can the same adjective be of both types?', formula: ['relacional: un problema familiar (de la familia)', 'calificativo: una cara muy familiar (conocida)'],
            meaning: 'Sí. Muchos relacionales desarrollan un sentido **calificativo**, y entonces admiten grados y cambian de significado: una obra **teatral** (de teatro) / un gesto **muy teatral** (exagerado); el cuerpo **diplomático** / una respuesta **muy diplomática** (hábil, prudente); una empresa **familiar** / un trato **muy familiar** (cercano).',
            examples: [
              { es: 'El conflicto [[diplomático|orange]] se resolvió con una nota [[muy diplomática|teal]].', en: 'The diplomatic conflict was resolved with a very tactful note.' },
              { es: 'Tiene una voz [[muy musical|teal]], aunque no tiene formación [[musical|orange]].', en: 'She has a very melodious voice, although she has no musical training.' },
            ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'El titular correcto es:', options: ['Una urgente y sanitaria medida', 'Una medida sanitaria urgente', 'Una medida urgente sanitaria'], answer: 1, why: 'Nombre + relacional + calificativo.', en: 'The correct headline is:' },
            { prompt: 'En «un gesto muy teatral», «teatral» es…', options: ['relacional: del teatro.', 'calificativo: exagerado.', 'un adverbio.'], answer: 1, why: 'Con «muy» solo cabe la lectura calificativa.', en: 'In “un gesto muy teatral”, “teatral” is…' },
          ] },
        ] },
        { title: 'Adjetivos que hacen de adverbio · Adjectives acting as adverbs', mascot: '/brand/mascot/speaking.webp', coach: 'Hablar claro, jugar limpio.', blocks: [
          { kind: 'concept', tone: 'violet', label: 'ADJETIVO ADVERBIAL', question: '¿Por qué «hablan claro» y no «hablan claros»?', en: 'Why “hablan claro” and not “hablan claros”?', formula: ['verbo + adjetivo en masculino singular, invariable', 'hablar claro / alto / bajo · jugar limpio / sucio · trabajar duro', 'pisar fuerte · respirar hondo · apuntar alto · comer sano · ir directo'],
            meaning: 'Algunos adjetivos se usan como **adverbios**: modifican al **verbo**, no al sujeto, y por eso quedan en **masculino singular**, sea quien sea el sujeto: «Ellas **hablan claro**». Equivalen a un adverbio en -mente o a «de manera + adjetivo» (hablar claro = hablar claramente), pero suelen ser más **directos y expresivos**, y forman combinaciones bastante fijas con ciertos verbos.',
            examples: [
              { es: 'Las portavoces [[hablaron claro|violet]]: no habrá recortes.', en: 'The spokeswomen spoke plainly: there will be no cuts.' },
              { es: 'En este periódico se [[juega limpio|violet]].', en: 'At this newspaper we play fair.' },
              { es: 'La nueva directora viene [[pisando fuerte|violet]].', en: 'The new director is making a strong start.' },
            ] },
          { kind: 'concept', tone: 'blue', label: 'PREDICATIVO', question: '¿Y «llegaron cansadas»?', en: 'And “llegaron cansadas”?', formula: ['verbo + adjetivo que describe al sujeto (o al objeto) → concuerda', 'Llegaron cansadas. · Viven tranquilos. · La encontré preocupada.'],
            meaning: 'Si el adjetivo describe **cómo está el sujeto** mientras ocurre la acción, es un **complemento predicativo** y **concuerda**: «Las reporteras llegaron **cansadas**». La diferencia se ve en pares: «Las niñas hablan **alto**» (el volumen de hablar) frente a «Las niñas son **altas**» o «crecen **altas**». A veces caben las dos lecturas: «Viven **tranquilos**» (ellos están tranquilos) / «Respira **tranquilo**» (dicho a un hombre) / «Respiren **hondo**» (manera de respirar, invariable).',
            examples: [
              { es: 'Las reporteras volvieron [[agotadas|blue]], pero escribieron [[rápido|violet]].', en: 'The reporters came back exhausted, but they wrote fast.' },
              { es: 'Los lectores esperan [[impacientes|blue]] la edición de mañana.', en: 'Readers are impatiently awaiting tomorrow’s edition.' },
            ] },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'La económica situación empeora.', right: 'La situación económica empeora.', why: 'El relacional va siempre pospuesto.' },
            { wrong: 'Es un problema grave y municipal.', right: 'Es un problema municipal grave. / Es un grave problema municipal.', why: 'Calificativo y relacional no se coordinan.' },
            { wrong: 'Aprobaron una ley muy educativa. (= de educación)', right: 'Aprobaron una ley educativa muy importante.', why: 'El relacional no admite grados; gradúa otro adjetivo.' },
            { wrong: 'Las dos candidatas trabajan duras.', right: 'Las dos candidatas trabajan duro.', why: 'Modifica al verbo: invariable.' },
            { wrong: 'Los jugadores llegaron agotado al final.', right: 'Los jugadores llegaron agotados al final.', why: 'Describe al sujeto: concuerda.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Las directoras del proyecto apuntan ___.', options: ['altas', 'alto', 'altamente'], answer: 1, why: 'Apuntar alto: adjetivo adverbial, invariable.', en: 'The project’s directors are aiming high.' },
            { prompt: 'Las corresponsales regresaron ___ del viaje.', options: ['exhausto', 'exhaustas', 'exhaustamente'], answer: 1, why: 'Describe al sujeto: predicativo, concuerda.', en: 'The correspondents returned exhausted from the trip.' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: dicta cinco nombres (medida, política, acuerdo, sector, campaña) y tu alumno forma con cada uno un grupo con un relacional y un calificativo en el orden correcto.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'Corrigiendo titulares', coach: 'Toca los adjetivos marcados.',
      steps: [
        { title: 'La mesa de edición', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles. Después tu alumno toca cada adjetivo marcado y aplica una prueba: ¿admite «muy»?, ¿equivale a «de + nombre»?, ¿concuerda?', self: 'Lee el diálogo en voz alta. Toca cada adjetivo marcado y aplica una prueba: ¿admite «muy»?, ¿equivale a «de + nombre»?, ¿concuerda?' } },
          { kind: 'explore', title: 'Once y veinte de la noche', setting: 'Redacción casi vacía. Carmen revisa en pantalla las páginas de Darío. Faltan cuarenta minutos para el cierre.', lines: [
            { who: 'Carmen', text: 'Página doce. «El gobierno [[regional|orange]] anuncia una reforma [[educativa|orange]] [[profunda|teal]]». Bien.', en: 'Page twelve. “The regional government announces a far-reaching education reform”. Good.' },
            { who: 'Darío', text: 'Había puesto «una profunda y educativa reforma», pero me sonó raro.', en: 'I had written “una profunda y educativa reforma”, but it sounded odd to me.' },
            { who: 'Carmen', text: 'Y con razón. Siguiente: «El sector [[lácteo|orange]] atraviesa un momento [[delicado|teal]]». Correcto.', en: 'Rightly so. Next: “The dairy sector is going through a delicate moment”. Correct.' },
            { who: 'Darío', text: 'En deportes escribí: «Las jugadoras [[jugaron limpio|violet]] y salieron [[satisfechas|blue]]».', en: 'In sports I wrote: “The players played fair and left satisfied”.' },
            { who: 'Carmen', text: 'Perfecto: «limpio» va con «jugar»; «satisfechas», con ellas. ¿Y esto? «Una respuesta muy [[diplomática|teal]] del alcalde».', en: 'Perfect: “limpio” goes with “jugar”; “satisfechas”, with them. And this? “A very diplomatic response from the mayor”.' },
            { who: 'Darío', text: 'Quise decir prudente, no del cuerpo diplomático.', en: 'I meant tactful, not from the diplomatic corps.' },
            { who: 'Carmen', text: 'Entonces vale. Pero aquí no: «las elecciones muy [[municipales|orange]]». Eso no existe.', en: 'Then it’s fine. But not here: “las elecciones muy municipales”. That doesn’t exist.' },
            { who: 'Darío', text: 'Error de copia. Quería decir «unas elecciones municipales muy [[reñidas|teal]]».', en: 'A copying error. I meant “a very closely fought municipal election”.' },
            { who: 'Carmen', text: 'Eso sí. Mira, Darío: [[apuntas alto|violet]] y [[trabajas duro|violet]]. Solo te falta [[escribir corto|violet]].', en: 'That’s right. Look, Darío: you aim high and you work hard. You just need to write short.' },
            { who: 'Darío', text: 'Tomo nota. ¿Cierro la página?', en: 'Noted. Shall I close the page?' },
            { who: 'Carmen', text: 'Ciérrala. Y [[respira hondo|violet]]: mañana hay pleno [[municipal|orange]].', en: 'Close it. And take a deep breath: there’s a council meeting tomorrow.' },
          ], notes: {
            'regional': 'Relacional: **de la región**. No admite «muy».',
            'educativa': 'Relacional: **de la educación**. Va pegado al nombre.',
            'profunda': 'Calificativo: admite grados (muy profunda). Va después del relacional.',
            'lácteo': 'Relacional: **de la leche**. A veces la raíz es culta y distinta del nombre.',
            'delicado': 'Calificativo: muy delicado.',
            'jugaron limpio': 'Adjetivo adverbial: modifica a «jugar». **Invariable**, aunque el sujeto sea femenino plural.',
            'satisfechas': 'Predicativo: describe a las jugadoras. **Concuerda**.',
            'diplomática': 'Aquí es **calificativo** (prudente, hábil): por eso admite «muy».',
            'municipales': 'Relacional: del municipio. «Muy municipales» no es posible.',
            'reñidas': 'Calificativo: muy reñidas. Fuera del bloque nombre + relacional.',
            'apuntas alto': 'Adjetivo adverbial: tener grandes ambiciones.',
            'trabajas duro': 'Adjetivo adverbial: con mucho esfuerzo.',
            'escribir corto': 'Adjetivo adverbial: de manera breve.',
            'respira hondo': 'Adjetivo adverbial: profundamente.',
            'municipal': 'Relacional: el pleno **del municipio**.',
          } },
          { kind: 'choice', title: '¿Entendiste?', items: [
            { prompt: '¿Por qué «una profunda y educativa reforma» sonaba raro?', options: ['Porque coordina un calificativo con un relacional y antepone el relacional.', 'Porque «reforma» es masculino.', 'Porque falta el artículo.'], answer: 0, why: 'El relacional no se antepone ni se coordina con un calificativo.', en: 'Why did “una profunda y educativa reforma” sound odd?' },
            { prompt: '¿Qué quería decir Darío con «diplomática»?', options: ['Del cuerpo diplomático.', 'Prudente.', 'Oficial.'], answer: 1, why: 'Lectura calificativa.', en: 'What did Darío mean by “diplomática”?' },
            { prompt: '¿Qué le falta a Darío, según Carmen?', options: ['Trabajar más.', 'Escribir corto.', 'Hablar claro.'], answer: 1, why: '«Solo te falta escribir corto».', en: 'What does Darío still need, according to Carmen?' },
          ] },
        ] },
        { title: '¿Qué tipo es? · Which type is it?', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'classify', title: 'Cuatro funciones', categories: [
            { id: 'calificativo', label: 'CALIFICATIVO', tone: 'teal' },
            { id: 'relacional', label: 'RELACIONAL', tone: 'orange' },
            { id: 'adverbial', label: 'ADJETIVO ADVERBIAL', tone: 'violet' },
            { id: 'predicativo', label: 'PREDICATIVO', tone: 'blue' },
          ], items: [
            { text: 'energía SOLAR', answer: 'relacional', why: 'Del sol.' },
            { text: 'Hablen más BAJO, por favor.', answer: 'adverbial', why: 'Modifica a «hablar»; invariable.' },
            { text: 'un día muy SOLEADO', answer: 'calificativo', why: 'Admite grados.' },
            { text: 'Las testigos declararon NERVIOSAS.', answer: 'predicativo', why: 'Describe a las testigos; concuerda.' },
            { text: 'el transporte FERROVIARIO', answer: 'relacional', why: 'Del ferrocarril.' },
            { text: 'Aquí se come SANO.', answer: 'adverbial', why: 'Modifica a «comer».' },
            { text: 'una propuesta ARRIESGADA', answer: 'calificativo', why: 'Muy arriesgada.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: tu alumno busca tres titulares reales de hoy y localiza un adjetivo relacional en cada uno.' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Orden, grado y concordancia.',
      steps: [
        { title: 'Elige el titular · Choose the headline', blocks: [
          { kind: 'choice', items: [
            { prompt: 'El consejo aprueba ___.', options: ['un ambicioso plan energético', 'un energético plan ambicioso', 'un plan ambicioso y energético'], answer: 0, why: 'Calificativo antepuesto + nombre + relacional.', en: 'The board approves an ambitious energy plan.' },
            { prompt: 'Crece ___ en la provincia.', options: ['el turismo muy rural', 'el turismo rural', 'el rural turismo'], answer: 1, why: 'Relacional: pospuesto y sin grado.', en: 'Rural tourism is growing in the province.' },
            { prompt: 'Las sindicalistas ___: no firmarán.', options: ['hablaron claras', 'hablaron claro', 'hablaron clara'], answer: 1, why: 'Adjetivo adverbial: invariable.', en: 'The union representatives spoke plainly: they will not sign.' },
            { prompt: 'Las vecinas afectadas esperan ___ una respuesta.', options: ['inquieto', 'inquietas', 'inquietamente'], answer: 1, why: 'Predicativo: concuerda con «las vecinas».', en: 'The affected residents are anxiously awaiting a response.' },
            { prompt: 'Preocupa ___.', options: ['la grave situación hospitalaria', 'la hospitalaria situación grave', 'la situación grave y hospitalaria'], answer: 0, why: 'El relacional queda pegado al nombre.', en: 'The serious situation in hospitals is causing concern.' },
            { prompt: 'La nueva alcaldesa llega ___.', options: ['pisando fuertes', 'pisando fuerte', 'pisada fuerte'], answer: 1, why: 'Pisar fuerte: invariable.', en: 'The new mayor arrives making her presence felt.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'La policial investigación continúa.', ok: false, options: ['La investigación policial continúa.', 'La investigación muy policial continúa.', 'La policial y larga investigación continúa.'], answer: 0, why: 'Relacional pospuesto.' },
            { sentence: 'Fue una decisión judicial muy polémica.', ok: true, why: 'Correcta: relacional + calificativo graduado.' },
            { sentence: 'Las atletas entrenaron duras toda la semana.', ok: false, options: ['Las atletas entrenaron duro toda la semana.', 'Las atletas entrenaron dura toda la semana.', 'Las atletas entrenaron duros toda la semana.'], answer: 0, why: 'Modifica al verbo: invariable.' },
            { sentence: 'Presentaron un informe técnico y larguísimo.', ok: false, options: ['Presentaron un informe técnico larguísimo.', 'Presentaron un larguísimo y técnico informe.', 'Presentaron un técnico informe larguísimo.'], answer: 0, why: 'Relacional y calificativo no se coordinan.' },
            { sentence: 'Los niños llegaron contentos y comieron rápido.', ok: true, why: 'Correcta: predicativo que concuerda + adjetivo adverbial.' },
          ] },
        ] },
        { title: 'Últimos retoques · Final touches', blocks: [
          { kind: 'chat-fill', title: 'A diez minutos del cierre', lines: [
            { who: 'Darío', text: 'Carmen, última duda: ¿«la industria ___ local» está bien?', options: ['pesquera', 'muy pesquera', 'pesqueramente'], answer: 0, why: 'Relacional sin grado; «local» clasifica al conjunto.' },
            { who: 'Carmen', text: 'Sí. ¿Y el pie de foto?' },
            { who: 'Darío', text: '«Las ganadoras celebran ___ el triunfo».', options: ['emocionadas', 'emocionado', 'emocionadamente'], answer: 0, why: 'Predicativo: concuerda con «las ganadoras».' },
            { who: 'Carmen', text: 'Bien. En la entrevista, la ministra ___, ¿no?', options: ['habló claro', 'habló clara', 'habló claros'], answer: 0, why: 'Hablar claro: invariable.' },
            { who: 'Darío', text: 'Sí. Anunció ___.', options: ['una subida salarial importante', 'una importante y salarial subida', 'una subida importante salarial'], answer: 0, why: 'Nombre + relacional + calificativo.' },
            { who: 'Carmen', text: 'Pues a imprenta. Hoy sí ___, Darío.', options: ['afinaste fino', 'hilaste fino', 'hilaste finos'], answer: 1, why: 'Hilar fino = trabajar con precisión; invariable.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras', items: [
            { tiles: ['grave', 'Es', 'crisis', 'una', 'económica'], accept: ['Es una crisis económica grave', 'Es una grave crisis económica'], en: 'It is a serious economic crisis.' },
            { tiles: ['claro', 'portavoces', 'Las', 'hablaron'], accept: ['Las portavoces hablaron claro'], en: 'The spokeswomen spoke plainly.' },
            { tiles: ['juega', 'se', 'Aquí', 'limpio'], accept: ['Aquí se juega limpio'], en: 'We play fair here.' },
            { tiles: ['llegaron', 'reporteras', 'Las', 'agotadas'], accept: ['Las reporteras llegaron agotadas'], en: 'The reporters arrived exhausted.' },
          ] },
        ] },
        { title: 'Transforma · Transform', blocks: [
          { kind: 'rewrite', title: 'Con precisión', items: [
            { prompt: 'una política de la economía que es nueva', instruction: 'Resume con un adjetivo relacional y «nueva» antepuesto.', accept: ['una nueva política económica'] },
            { prompt: 'Las diputadas hablaron claramente.', instruction: 'Cambia el adverbio en -mente por un adjetivo adverbial.', accept: ['Las diputadas hablaron claro'] },
            { prompt: 'un problema grave del ayuntamiento', instruction: 'Cambia «del ayuntamiento» por un adjetivo relacional.', accept: ['un problema municipal grave', 'un grave problema municipal'] },
            { prompt: 'Respiren profundamente.', instruction: 'Cambia el adverbio por un adjetivo adverbial.', accept: ['Respiren hondo', 'Respiren profundo'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno redacta en voz alta tres titulares sobre su ciudad con el esquema calificativo + nombre + relacional.' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'La nota de voz de Carmen', coach: 'Primero escucha sin leer.',
      steps: [
        { title: 'Balance de la semana', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: ¿está contenta Carmen? Segunda escucha: tu alumno anota los grupos nombre + adjetivo(s) que oye y los clasifica.', self: 'Escucha una vez: ¿está contenta Carmen? Escucha otra vez y anota los grupos nombre + adjetivo(s).' } },
          { kind: 'listen', title: 'Carmen a Darío, viernes por la noche', channel: 'NOTA DE VOZ · DE CARMEN PARA DARÍO', src: '/audio/grammar-live/547.mp3',
            before: 'Termina la primera semana de Darío en la sección. Carmen le manda una nota de voz con su balance. ¿Qué crees que destacará?',
            gist: { prompt: '¿Cuál es el balance?', options: ['Positivo, con dos consejos de estilo.', 'Negativo: no seguirá en la sección.', 'Neutro: no opina.'], answer: 0, why: 'Lo felicita y le da dos consejos.', en: 'What is her assessment?' },
            details: [
              { prompt: '¿Qué pieza le gustó más?', options: ['La de la reforma educativa.', 'La del sector pesquero.', 'La entrevista a la ministra.'], answer: 1, why: '«Tu pieza sobre el sector pesquero fue la mejor».', en: 'Which piece did she like best?' },
              { prompt: '¿Qué error repite Darío?', options: ['Anteponer o graduar adjetivos de relación.', 'Escribir sin tildes.', 'Entregar tarde.'], answer: 0, why: '«No existe “una muy presupuestaria decisión”».', en: 'What mistake does Darío keep making?' },
              { prompt: '¿Qué le pide para la semana próxima?', options: ['Escribir más largo.', 'Escribir corto y hablar claro en las reuniones.', 'Cambiar de sección.'], answer: 1, why: '«Escribe corto» y «habla claro».', en: 'What does she ask of him for next week?' },
              { prompt: '¿Qué cubre Darío el lunes?', options: ['El pleno municipal.', 'Un partido.', 'Una huelga sanitaria.'], answer: 0, why: '«El lunes te toca el pleno municipal».', en: 'What is Darío covering on Monday?' },
            ],
            transcript: 'Darío, soy Carmen. Balance rápido de tu primera semana. Tu pieza sobre el sector [[pesquero|orange]] fue la mejor: datos [[sólidos|teal]], un arranque [[limpio|teal]] y ni una palabra de más. En la de la reforma [[educativa|orange]] te enredaste: no existe «una muy presupuestaria decisión»; es «una decisión [[presupuestaria|orange]] muy [[discutida|teal]]». El adjetivo de relación, detrás y sin «muy». Dos consejos: [[escribe corto|violet]], que el papel es caro, y en las reuniones [[habla claro|violet]]; tienes buenas ideas y las dices bajito. Las compañeras de cierre dicen que [[trabajas duro|violet]], y es verdad. El lunes te toca el pleno [[municipal|orange]]; ven [[descansado|blue]]. Buen fin de semana.',
            reply: { teacher: 'Tu alumno responde como Darío: agradece, reformula el error con un ejemplo correcto y promete dos cosas con adjetivos adverbiales.', self: 'Responde en voz alta como Darío: agradece, corrige tu error con un ejemplo y promete dos cosas con adjetivos adverbiales.' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Hablar claro y con precisión', coach: 'Clasifica, valora, matiza.',
      steps: [
        { title: 'Actualidad y estilo', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas; pide a tu alumno grupos nominales con relacional + calificativo y combinaciones de verbo + adjetivo adverbial.', self: 'Responde en voz alta. Intenta usar grupos con relacional + calificativo y verbos con adjetivo adverbial.' } },
          { kind: 'talk', cards: [
            { q: 'Resume dos noticias recientes de tu país o tu ciudad como si fueran titulares.', followUps: ['¿Cuál te preocupa más?', '¿Cómo lo titularías tú?'], phrases: ['Una [[grave|teal]] crisis [[sanitaria|orange]]…', 'Una reforma [[laboral|orange]] [[polémica|teal]]…', 'El sector [[turístico|orange]]…'], hint: 'Calificativo + nombre + relacional, o nombre + relacional + calificativo.', example: 'Una fuerte subida fiscal divide al gobierno. Y el sector turístico vive un verano excepcional, con una ocupación hotelera altísima.', next: 'Ahora, tu trabajo.' },
            { q: '¿En tu trabajo o tus estudios se habla claro? ¿Se juega limpio?', followUps: ['¿Quién pisa fuerte?', '¿Cuándo conviene hablar bajo?'], phrases: ['Mi jefa [[habla claro|violet]]…', 'No siempre se [[juega limpio|violet]]…', 'Hay que [[hilar fino|violet]] cuando…'], hint: 'Verbo + adjetivo en masculino singular.', example: 'Mi jefa habla claro, y lo agradezco. Entre departamentos no siempre se juega limpio. Y con los clientes hay que hilar fino.', next: 'Ahora, dobles lecturas.' },
            { q: 'Explica la diferencia: una empresa familiar / un ambiente muy familiar; una obra teatral / un gesto muy teatral.', followUps: ['¿Se te ocurre otro par?', '¿Cuál usas más?'], phrases: ['En el primero, [[familiar|orange]] significa «de la familia»…', 'En el segundo es [[calificativo|teal]]…', 'Otro ejemplo: [[musical|orange]]…'], hint: 'Relacional = de + nombre; calificativo = cualidad graduable.', example: 'Una empresa familiar pertenece a una familia; un ambiente muy familiar es cercano y cálido. Otro par: una crítica musical y una voz muy musical.', next: 'Ahora, tus hábitos.' },
            { q: '¿Comes sano? ¿Trabajas duro? ¿Apuntas alto?', followUps: ['¿En qué te gustaría mejorar?', '¿Quién de tu entorno pisa fuerte?'], phrases: ['Intento [[comer sano|violet]], pero…', '[[Trabajo duro|violet]] cuando…', 'Prefiero [[ir directo|violet]] a…'], hint: 'El adjetivo no cambia aunque hable una mujer: «Trabajo duro».', example: 'Intento comer sano entre semana. Trabajo duro cuando el proyecto me importa. Y sí, apunto alto, aunque a veces vuelo bajo.', teacher: 'Si tu alumna dice «trabajo dura», reformula: «trabajas duro», y explica por qué.' },
          ], swap: { teacher: 'Al final, tu alumno hace de jefe de sección y te corrige tres titulares mal construidos que tú inventas.', self: 'Ahora inventa tres titulares mal construidos y corrígelos en voz alta, explicando la regla.' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Una noticia breve', coach: 'Corto, claro y preciso.',
      steps: [
        { title: 'Titular y entradilla', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos cada grupo nominal: ¿dónde está el relacional?, ¿se gradúa algo que no debe?', self: 'Escribe tu noticia y toca «Revisar mi texto». Después revisa cada grupo nominal: ¿dónde está el relacional?, ¿gradúas algo que no debes?' } },
          { kind: 'write', title: 'Noticia local en ochenta palabras', situation: 'Escribes para la sección local de un diario. Redacta un titular y una entradilla sobre una noticia real o inventada de tu ciudad: una obra, una medida, un acuerdo, un problema.', task: [
            'Titular con un grupo nombre + adjetivo relacional + calificativo (o calificativo + nombre + relacional).',
            'Dos adjetivos relacionales más en la entradilla.',
            'Una cita de alguien que «habló claro» u otra combinación de verbo + adjetivo adverbial.',
            'Un adjetivo predicativo que concuerde con el sujeto.',
            'Nada de «muy» delante de un adjetivo relacional.',
          ], starters: ['El ayuntamiento aprueba…', 'La medida, de carácter…, afecta a…', 'Según fuentes municipales, …', '«…», dijo la portavoz, que habló claro.', 'Los vecinos esperan… la decisión.'],
            words: ['municipal', 'sanitario', 'educativo', 'presupuestario', 'vecinal', 'urbano', 'hablar claro', 'jugar limpio', 'trabajar duro', 'pisar fuerte', 'expectantes', 'satisfechos'],
            model: 'Un [[ambicioso|teal]] plan [[urbanístico|orange]] transformará el barrio del puerto. El pleno [[municipal|orange]] aprobó anoche el proyecto, que incluye una [[nueva|teal]] red [[ciclista|orange]] y la reforma del mercado. La partida [[presupuestaria|orange]] supera los doce millones. «No habrá expropiaciones», afirmó la concejala, que [[habló claro|violet]] ante las asociaciones [[vecinales|orange]]. Los comerciantes, que llevan años reclamando la obra, siguieron la votación [[expectantes|blue]] y salieron [[satisfechos|blue]]. Las obras empezarán en otoño.',
            minWords: 60,
            checks: [
              { label: 'Dos adjetivos de relación (municipal, sanitario, educativo, urbano…)', pattern: '\\p{L}+(?:al|ales|ari[oa]s?|iv[oa]s?|ístic[oa]s?|ic[oa]s?|an[oa]s?|er[oa]s?)(?![\\p{L}])[\\s\\S]+\\p{L}+(?:al|ales|ari[oa]s?|iv[oa]s?|ístic[oa]s?|ic[oa]s?|an[oa]s?|er[oa]s?)(?![\\p{L}])', tip: 'Por ejemplo: «el pleno municipal», «la partida presupuestaria».' },
              { label: 'Un verbo + adjetivo adverbial: hablar claro, jugar limpio, trabajar duro…', pattern: '(?:^|[^\\p{L}])(?:habl\\p{L}+\\s+(?:claro|alto|bajo)|jug\\p{L}+\\s+(?:limpio|sucio)|trabaj\\p{L}+\\s+duro|pis\\p{L}+\\s+fuerte|apunt\\p{L}+\\s+alto|respir\\p{L}+\\s+hondo|hil\\p{L}+\\s+fino)(?![\\p{L}])', tip: 'Por ejemplo: «la concejala habló claro».' },
            ],
            warnings: [
              { pattern: '(?:^|[^\\p{L}])muy\\s+(?:municipal(?:es)?|sanitari[oa]s?|educativ[oa]s?|presupuestari[oa]s?|económic[oa]s?|fiscal(?:es)?|judicial(?:es)?|urban[oa]s?)(?![\\p{L}])', why: 'Un adjetivo **relacional** no admite «muy»: gradúa otro adjetivo (una medida sanitaria muy necesaria).' },
              { pattern: '(?:^|[^\\p{L}])(?:hablaron|hablan|trabajan|trabajaron|jugaron|juegan)\\s+(?:clar[oa]s|dur[oa]s|limpi[oa]s)(?![\\p{L}])', why: 'Cuando modifica al verbo, el adjetivo es **invariable**: hablaron claro, trabajan duro.' },
            ] },
        ] },
      ],
    },
    {
      id: 'cerrar', label: 'Cerrar', icon: '✓', mascot: '/brand/mascot/standing.webp',
      title: 'Lo esencial', coach: '¿Qué te llevas hoy?',
      steps: [
        { title: 'Lo esencial · The essentials', blocks: [
          { kind: 'recap', items: [
            { tone: 'teal', label: 'CALIFICATIVO', formula: 'cualidad · admite grados · antes o después', example: 'una crisis muy grave · una grave crisis', caption: 'dice cómo es', en: 'says what it is like' },
            { tone: 'orange', label: 'RELACIONAL', formula: '= de + nombre · pospuesto · sin grados', example: 'una crisis económica grave', caption: 'dice de qué tipo es; va pegado al nombre', en: 'says what type it is; sits next to the noun' },
            { tone: 'violet', label: 'ADJETIVO ADVERBIAL', formula: 'verbo + adjetivo masculino singular', example: 'Ellas hablan claro y trabajan duro.', caption: 'modifica al verbo; invariable', en: 'modifies the verb; invariable' },
            { tone: 'blue', label: 'PREDICATIVO', formula: 'verbo + adjetivo que concuerda', example: 'Llegaron cansadas.', caption: 'describe al sujeto durante la acción', en: 'describes the subject during the action' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Dos preguntas resuelven casi todo. Ante un adjetivo junto a un nombre: **¿puedo decir «muy»?** Si no, es relacional: detrás, pegado al nombre y sin coordinar con un calificativo. Ante un adjetivo junto a un verbo: **¿describe la acción o al sujeto?** Si describe la acción, no cambia (hablan claro); si describe al sujeto, concuerda (llegaron cansadas).', en: 'Two questions solve almost everything. For an adjective next to a noun: can I say “muy”? If not, it is relational. For an adjective next to a verb: does it describe the action or the subject? If the action, it does not change; if the subject, it agrees.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda', items: [
            { prompt: 'El gobierno anuncia ___.', options: ['una reforma laboral profunda', 'una laboral reforma profunda', 'una reforma profunda y laboral'], answer: 0, why: 'Nombre + relacional + calificativo.', en: 'The government announces a far-reaching labour reform.' },
            { prompt: 'Las árbitras pidieron a los equipos que jugaran ___.', options: ['limpios', 'limpio', 'limpias'], answer: 1, why: 'Jugar limpio: invariable.', en: 'The referees asked the teams to play fair.' },
            { prompt: 'Es un actor de formación ___, con gestos ___.', options: ['teatral / muy teatrales', 'muy teatral / teatral', 'teatralmente / teatral'], answer: 0, why: 'Primero relacional (de teatro); después calificativo graduado (exagerados).', en: 'He is an actor with theatre training, with very theatrical gestures.' },
            { prompt: 'Las delegadas salieron ___ de la reunión.', options: ['decepcionado', 'decepcionadas', 'decepcionadamente'], answer: 1, why: 'Predicativo: concuerda.', en: 'The delegates left the meeting disappointed.' },
            { prompt: '¿Qué secuencia es imposible?', options: ['el transporte público urbano', 'el muy urbano transporte', 'un transporte urbano eficaz'], answer: 1, why: 'Relacional graduado y antepuesto: imposible.', en: 'Which sequence is impossible?' },
          ] },
        ] },
        { title: 'Ampliación · Gentilicios, anteposición y locuciones', mascot: '/autoestudio/mascot/noting.webp', coach: 'Opcional: un paso más.', blocks: [
          { kind: 'lead', text: 'Tres notas finales. Los **gentilicios** se comportan como relacionales («la prensa francesa», no «la francesa prensa»), salvo en lecturas calificativas («una solución muy francesa»). En prensa, el relacional sustituye a menudo a un complemento con *de*, a veces con abuso: «la visita papal», «el discurso presidencial»; conviene no encadenar más de dos. Y varios adjetivos adverbiales viven en **locuciones fijas**: *hilar fino*, *pisar fuerte*, *jugar sucio*, *caer bajo*, *tirar largo*, *quedarse corto*.', en: 'Three final notes. Demonyms behave like relational adjectives, except in qualifying readings. In the press, relational adjectives often replace a de-phrase, sometimes excessively; avoid chaining more than two. And several adverbial adjectives live in set phrases.' },
          { kind: 'choice', title: 'Para estudiantes rápidos', items: [
            { prompt: '«Con esa crítica te quedaste corto» significa que…', options: ['la crítica fue demasiado suave o insuficiente.', 'la crítica fue breve y perfecta.', 'eres bajo.'], answer: 0, why: 'Quedarse corto = no llegar a lo necesario.', en: '“Con esa crítica te quedaste corto” means that…' },
            { prompt: '¿Qué grupo es más natural?', options: ['la política exterior alemana', 'la alemana política exterior', 'la política muy exterior alemana'], answer: 0, why: 'Dos relacionales pospuestos; el gentilicio clasifica al conjunto.', en: 'Which phrase is most natural?' },
          ] },
          { kind: 'teacher', text: 'Este paso es opcional. Tu alumno explica con sus palabras «caer bajo», «tirar largo» y «jugar sucio», y da una situación para cada una.' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 189 · Conectores de reformulación: es decir, a saber, mejor dicho', text: 'Ya ordenas bien los adjetivos de relación y distingues «hablan claro» de «llegaron cansadas». La clase 189 retoma la ruta del curso: «Conectores de reformulación: es decir, a saber, mejor dicho».', en: 'You can now order relational adjectives correctly and tell “hablan claro” from “llegaron cansadas”. Class 189 returns to the main route of the course: “Conectores de reformulación: es decir, a saber, mejor dicho”.', href: '/gramatica/conectores-de-reformulacion-es-decir-a', label: 'Ir a la clase 189' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: tu alumno resume en tres frases lo que se lleva de la clase y da un ejemplo propio de cada punto. Tarea: terminar o reescribir el texto de Escribir.' },
        ] },
      ],
    },
  ],
};
