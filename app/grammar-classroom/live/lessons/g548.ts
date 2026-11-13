import type { LiveLesson } from '../types';

/**
 * Lesson 548 · C2 · Verbos defectivos: soler, atañer, concernir, abolir (course unit
 * G248, extension from the PCIC coverage review of 2026-11-11; studied after G214).
 * One scene: the style desk of a publishing house. Matilde, senior copy editor,
 * reviews with Iván the draft of an institutional report full of impossible verb
 * forms. In the audio Matilde (Spanish voice) records her weekly style note for the
 * team. Content: verbs with an incomplete paradigm and why: (1) soler: only
 * imperfective tenses (suelo, solía; suele haber), no future, conditional,
 * imperative or preterite; alternatives (acostumbrar a, normalmente + tense);
 * (2) third-person verbs by meaning: atañer, concernir, competer, incumbir (en lo que
 * atañe a; no me incumbe), acontecer, acaecer, ocurrir, suceder; agreement with a
 * plural subject; (3) weather verbs: unipersonal (llueve, nieva, amaneció) but with a
 * subject in figurative use (llueven las críticas; amanecí cansado); (4) abolir and
 * its family: traditionally only forms whose ending begins with -i- (abolimos,
 * abolió, abolía), full conjugation accepted today but still avoided in careful
 * prose (derogar, suprimir); balbucir → balbucear. Mistakes: *soleré, *solí,
 * *los cambios atañe, *yo ataño, *ha llovido críticas, *solería. Instructions use tú.
 */
export const lesson: LiveLesson = {
  id: 548,
  level: 'C2',
  title: 'Verbos defectivos: soler, atañer, concernir, abolir',
  subtitle: 'Reconocer los verbos de conjugación incompleta y saber qué decir cuando la forma que buscas no existe o no conviene.',
  legend: [
    { tone: 'teal', label: 'SOLER · solo tiempos imperfectivos: suelo, solía (habit, no future)' },
    { tone: 'orange', label: 'SOLO TERCERA PERSONA · atañe, concierne, incumbe, acaeció (3rd person only)' },
    { tone: 'violet', label: 'METEOROLÓGICOS · llueve, nieva, amanece; llueven críticas (weather verbs)' },
    { tone: 'blue', label: 'ABOLIR Y AFINES · abolió, abolimos; mejor derogar (avoided forms)' },
  ],
  optionNotes: {
    'soleré': '**Soler** no tiene futuro: «normalmente llegaré» o «acostumbraré a llegar».',
    'atañe': 'Con sujeto plural, el verbo va en plural: los cambios **atañen**.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Cuando falta una forma', coach: 'No todos los verbos se conjugan enteros.',
      steps: [
        { title: 'El borrador de Iván · Iván’s draft', blocks: [
          { kind: 'lead', text: 'En el departamento de estilo de una editorial, Matilde revisa un informe institucional que ha corregido Iván. Subraya tres frases: «El comité **soleré** reunirse cada trimestre», «Yo no me **concierno** con esos datos» y «Ayer **llovió** las críticas». Iván se defiende: «Son verbos normales, ¿no?». Matilde sonríe: «Son verbos con **huecos**. Unos no tienen ciertos tiempos; otros, ciertas personas. Y lo interesante es por qué». A un verbo así se le llama **defectivo**.', en: 'At the style desk of a publishing house, Matilde reviews an institutional report that Iván has edited. She underlines three sentences with impossible verb forms. Iván defends himself: “They’re ordinary verbs, aren’t they?”. Matilde smiles: “They’re verbs with gaps. Some lack certain tenses; others, certain persons. And the interesting thing is why”. Such a verb is called defective.' },
          { kind: 'compare', title: 'Tres huecos, tres razones · Three gaps, three reasons', columns: [
            { tone: 'teal', label: 'FALTAN TIEMPOS', sentence: 'El comité [[suele|teal]] reunirse cada trimestre.', idea: 'Soler expresa hábito: no tiene futuro ni formas perfectivas.', en: 'The committee usually meets every quarter.' },
            { tone: 'orange', label: 'FALTAN PERSONAS', sentence: 'Esos datos no me [[conciernen|orange]].', idea: 'El sujeto es siempre una cosa o un asunto: solo tercera persona.', en: 'That data does not concern me.' },
            { tone: 'violet', label: 'SUJETO INESPERADO', sentence: 'Ayer [[llovieron|violet]] las críticas.', idea: 'Llover no tiene sujeto… salvo en sentido figurado, y entonces concuerda.', en: 'Yesterday criticism rained down.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Por qué no existe «yo concierno» en el uso normal?', options: ['Porque es un verbo irregular.', 'Porque por su significado el sujeto es un asunto, no una persona.', 'Porque es un verbo arcaico.'], answer: 1, why: 'Un asunto concierne a alguien: el sujeto es de tercera persona.', en: 'Why is there no “yo concierno” in normal usage?' },
            { prompt: '¿Cómo se corrige «El comité soleré reunirse»?', options: ['El comité solerá reunirse.', 'El comité se reunirá normalmente. / El comité suele reunirse.', 'El comité solió reunirse.'], answer: 1, why: 'Soler no tiene futuro: se cambia de tiempo o de recurso.', en: 'How do you correct “El comité soleré reunirse”?' },
          ] },
        ] },
        { title: 'Soler · Soler', mascot: '/brand/mascot/studying.webp', coach: 'Suelo, solía… y poco más.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'SOLER', question: '¿Qué formas tiene «soler»?', en: 'Which forms does “soler” have?', formula: ['presente: suelo, sueles, suele… · subjuntivo: suela', 'imperfecto: solía, solías…', 'pretérito perfecto compuesto (raro): ha solido', 'no: futuro, condicional, imperativo, pretérito indefinido'],
            meaning: '**Soler + infinitivo** expresa una acción **habitual**. Un hábito se presenta como algo **abierto, sin límites**, y por eso el verbo solo aparece en tiempos **imperfectivos**: presente e imperfecto, sobre todo. No se usa en futuro ni condicional (no se predice un hábito con *soler*), ni en indefinido (que cerraría la acción), ni en imperativo. Para esos huecos hay alternativas: **acostumbrar (a)**, **tener (por) costumbre**, o un adverbio como **normalmente, habitualmente, por lo general** con el tiempo que haga falta.',
            examples: [
              { es: 'La autora [[suele|teal]] entregar los capítulos con retraso.', en: 'The author usually delivers the chapters late.' },
              { es: 'Antes [[solíamos|teal]] imprimir todas las pruebas.', en: 'We used to print all the proofs.' },
              { es: 'En estos informes [[suele|teal]] haber erratas en las tablas.', en: 'In these reports there tend to be misprints in the tables.' },
            ],
            note: 'Con sujeto de cosa, *soler* indica **frecuencia**, no costumbre voluntaria: «Aquí suele llover en abril».' },
          { kind: 'table', title: 'El hueco y su alternativa · The gap and its alternative', head: ['Quieres decir…', 'No', 'Sí'], rows: [
            ['futuro', '*soleré llegar pronto', '[[normalmente|teal]] llegaré pronto · acostumbraré a llegar pronto'],
            ['condicional', '*solería revisarlo dos veces', '[[por lo general|teal]] lo revisaría dos veces'],
            ['pasado cerrado', '*solí trabajar allí dos años', 'trabajé allí dos años · [[solía|teal]] trabajar allí'],
            ['orden', '*¡suele llegar a tiempo!', '[[acostumbra a|teal]] llegar a tiempo · llega siempre a tiempo'],
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Cuando me jubile, ___ levantarme tarde.', options: ['soleré', 'acostumbraré a', 'solería'], answer: 1, why: 'Futuro: soler no lo tiene.', en: 'When I retire, I will make a habit of getting up late.' },
            { prompt: 'De joven, mi abuelo ___ leer el diccionario por placer.', options: ['solía', 'solió', 'soleaba'], answer: 0, why: 'Hábito en el pasado: imperfecto.', en: 'As a young man, my grandfather used to read the dictionary for pleasure.' },
          ] },
        ] },
        { title: 'Solo tercera persona · Third person only', mascot: '/brand/mascot/speaking.webp', coach: 'Atañe, concierne, incumbe, compete.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'ASUNTOS QUE AFECTAN', question: '¿Cómo se usan atañer, concernir, incumbir y competer?', en: 'How are atañer, concernir, incumbir and competer used?', formula: ['asunto (sujeto) + atañe / concierne / incumbe / compete + a alguien', 'singular o plural según el sujeto: atañe · atañen', 'fórmulas: en lo que atañe a… · por lo que concierne a… · en lo concerniente a…'],
            meaning: 'Estos verbos dicen que **un asunto afecta o corresponde a alguien**. El sujeto es el asunto, así que solo se usan en **tercera persona** (y en formas no personales: *atañer, concerniente, incumbiendo*). **Atañer** y **concernir**: afectar, tener relación. **Incumbir**: ser responsabilidad u obligación de alguien. **Competer**: pertenecer a la competencia o atribución de alguien (no confundir con *competir*). Son propios del registro **formal**, sobre todo jurídico y administrativo.',
            examples: [
              { es: 'La cláusula tercera no [[atañe|orange]] a los traductores.', en: 'The third clause does not concern the translators.' },
              { es: 'Estas decisiones [[competen|orange]] exclusivamente al consejo editorial.', en: 'These decisions fall exclusively within the remit of the editorial board.' },
              { es: 'No me [[incumbe|orange]] juzgar el estilo del autor.', en: 'It is not my place to judge the author’s style.' },
            ],
            note: 'Ortografía: **atañe, atañó, atañera** (sin i tras la ñ); **concierne, concernió**, subjuntivo **concierna**.' },
          { kind: 'concept', tone: 'orange', label: 'SUCESOS', question: '¿Y acontecer, acaecer, ocurrir, suceder?', en: 'And acontecer, acaecer, ocurrir, suceder?', formula: ['suceso (sujeto) + ocurrió / sucedió / aconteció / acaeció', 'solo tercera persona; acaecer y acontecer, muy formales'],
            meaning: 'Los verbos de **suceso** tienen por sujeto un hecho, de modo que tampoco se conjugan en primera ni segunda persona con ese sentido. **Ocurrir** y **suceder** son generales; **acontecer** y **acaecer** pertenecen al registro narrativo, histórico o jurídico. (*Suceder* sí tiene todas las personas cuando significa «ocupar el lugar de alguien»: «Sucedí a mi padre en la empresa».)',
            examples: [
              { es: 'Los hechos [[acaecieron|orange]] la noche del 3 de marzo.', en: 'The events took place on the night of 3 March.' },
              { es: 'Lo que [[aconteció|orange]] después no figura en el informe.', en: 'What happened afterwards does not appear in the report.' },
            ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Los cambios de calendario ___ a toda la plantilla.', options: ['atañe', 'atañen', 'atañemos'], answer: 1, why: 'Sujeto plural: atañen.', en: 'The calendar changes affect the whole staff.' },
            { prompt: 'Resolver ese conflicto ___ al director, no a mí.', options: ['compete', 'compite', 'competo'], answer: 0, why: 'Competer (corresponder), no competir.', en: 'Resolving that conflict is the director’s responsibility, not mine.' },
          ] },
        ] },
        { title: 'Llover y abolir · Llover and abolir', mascot: '/brand/mascot/portrait.webp', coach: 'Llueve. Llueven críticas. Abolió.', blocks: [
          { kind: 'concept', tone: 'violet', label: 'VERBOS METEOROLÓGICOS', question: '¿«Llover» puede tener sujeto?', en: 'Can “llover” have a subject?', formula: ['sentido propio: sin sujeto, 3.ª singular: llueve, nevó, amanecía', 'sentido figurado: con sujeto, y concuerda: llueven críticas', 'amanecer / anochecer + persona: amanecí cansado'],
            meaning: 'En sentido propio, **llover, nevar, granizar, tronar, amanecer, anochecer** son **unipersonales**: no tienen sujeto y van en tercera persona del singular. Pero en usos **figurados** admiten sujeto y **concuerdan** con él: «Le **llovieron** las ofertas», «Me **llueven** los correos». **Amanecer** y **anochecer** se conjugan en todas las personas cuando significan «estar en cierto lugar o estado al empezar el día o la noche»: «**Amanecimos** en la frontera».',
            examples: [
              { es: 'Tras la reseña, [[llovieron|violet]] los pedidos.', en: 'After the review, orders poured in.' },
              { es: 'Hoy [[amanecí|violet]] con cuarenta correos sin leer.', en: 'Today I woke up to forty unread emails.' },
            ] },
          { kind: 'concept', tone: 'blue', label: 'ABOLIR Y AFINES', question: '¿Se puede decir «abolo»?', en: 'Can you say “abolo”?', formula: ['tradición: solo formas cuya desinencia empieza por -i-: abolimos, abolió, abolía, aboliré, abolido', 'hoy: conjugación completa admitida (abolo, abole, abola)', 'en prosa cuidada: derogar, suprimir, anular'],
            meaning: '**Abolir** fue durante siglos el ejemplo clásico de verbo defectivo **por razones de forma**: solo se usaban las formas con **-i-** en la desinencia. Las academias admiten hoy la **conjugación completa** (*abolo, aboles, abola*), pero esas formas siguen sonando extrañas a muchos hablantes, y en textos cuidados se suelen **evitar** con sinónimos: *derogar* (una ley), *suprimir*, *anular*. Algo parecido ocurrió con **agredir** y **transgredir**, que ya se conjugan sin reparos (*agredo, transgrede*). **Balbucir** carece de las formas con -zc- (no «balbuzco»): se suple con **balbucear**.',
            examples: [
              { es: 'El país [[abolió|blue]] la censura previa en 1978.', en: 'The country abolished prior censorship in 1978.' },
              { es: 'El nuevo reglamento [[deroga|blue]] la norma anterior.', en: 'The new regulations repeal the previous rule.' },
            ] },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'El año que viene soleré viajar menos.', right: 'El año que viene viajaré menos, por lo general.', why: 'Soler no tiene futuro.' },
            { wrong: 'Solí vivir allí tres años.', right: 'Viví allí tres años. / Solía vivir allí.', why: 'Soler no se usa en indefinido.' },
            { wrong: 'Las nuevas normas atañe a todos.', right: 'Las nuevas normas atañen a todos.', why: 'Concuerda con el sujeto plural.' },
            { wrong: 'Ese asunto no te compite.', right: 'Ese asunto no te compete.', why: 'Competer, no competir.' },
            { wrong: 'Ayer llovió felicitaciones.', right: 'Ayer llovieron felicitaciones.', why: 'Uso figurado con sujeto: concuerda.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Tras el premio, a la editorial le ___ los manuscritos.', options: ['llovió', 'llovieron', 'llovimos'], answer: 1, why: 'Sujeto figurado plural: llovieron.', en: 'After the prize, manuscripts poured into the publishing house.' },
            { prompt: 'En un informe jurídico cuidado, ¿qué forma conviene?', options: ['El decreto abole la tasa.', 'El decreto deroga la tasa.', 'El decreto abuele la tasa.'], answer: 1, why: '«Abole» se admite hoy, pero se suele evitar; «abuele» no existe.', en: 'In a careful legal report, which form is advisable?' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno explica con sus palabras la diferencia entre un verbo defectivo «por significado» (concernir, llover) y uno «por forma» (abolir), y da la alternativa para tres huecos.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'La revisión', coach: 'Toca las formas marcadas.',
      steps: [
        { title: 'En el departamento de estilo', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles. Después tu alumno toca cada forma marcada y explica por qué es posible, o qué hueco evita.', self: 'Lee el diálogo en voz alta. Toca cada forma marcada: ¿por qué es posible?, ¿qué hueco evita?' } },
          { kind: 'explore', title: 'Informe anual, tercera lectura', setting: 'Una mesa larga, pruebas impresas, lápices rojos. Matilde lleva treinta años corrigiendo; Iván, tres meses.', lines: [
            { who: 'Matilde', text: 'Página cuatro. «El comité [[suele|teal]] reunirse cada trimestre». Así, sí.', en: 'Page four. “The committee usually meets every quarter”. That works.' },
            { who: 'Iván', text: 'Pero el párrafo habla del año próximo. Necesito un futuro.', en: 'But the paragraph is about next year. I need a future.' },
            { who: 'Matilde', text: 'Entonces: «[[se reunirá, por lo general,|teal]] cada trimestre». *Soler* no te lo da.', en: 'Then: “it will, as a rule, meet every quarter”. Soler won’t give you that.' },
            { who: 'Iván', text: 'Página nueve: «En lo que [[atañe|orange]] a los presupuestos…».', en: 'Page nine: “As regards the budgets…”.' },
            { who: 'Matilde', text: 'Correcto. Pero dos líneas después: «las medidas que [[atañen|orange]] a los socios», en plural.', en: 'Correct. But two lines later: “the measures that concern the partners”, in the plural.' },
            { who: 'Iván', text: 'Anotado. ¿Y «al consejo le [[compete|orange]] aprobar las cuentas»?', en: 'Noted. And “it falls to the board to approve the accounts”?' },
            { who: 'Matilde', text: 'Perfecto. *Compete*, de competer. Si pones «compite», el consejo se echa una carrera.', en: 'Perfect. Compete, from competer. If you write “compite”, the board is running a race.' },
            { who: 'Iván', text: 'La parte histórica: «los hechos que [[acaecieron|orange]] en 1998».', en: 'The historical section: “the events that took place in 1998”.' },
            { who: 'Matilde', text: 'Muy solemne, pero vale. Y aquí, ¿«la junta abole el artículo sexto»?', en: 'Very solemn, but fine. And here, “la junta abole el artículo sexto”?' },
            { who: 'Iván', text: 'El diccionario lo admite.', en: 'The dictionary allows it.' },
            { who: 'Matilde', text: 'Lo admite. Y el lector tropieza. Pon «[[deroga|blue]]»; o, en pasado, «[[abolió|blue]]», que no molesta a nadie.', en: 'It does. And the reader stumbles. Write “deroga”; or, in the past, “abolió”, which bothers nobody.' },
            { who: 'Iván', text: 'Última: «tras la presentación, [[llovieron|violet]] las solicitudes».', en: 'Last one: “after the presentation, applications poured in”.' },
            { who: 'Matilde', text: 'Bien concordado. Hoy [[amaneciste|violet]] fino, Iván.', en: 'Agreement spot on. You woke up sharp today, Iván.' },
          ], notes: {
            'suele': 'Presente de **soler**: hábito abierto. Una de las pocas formas del verbo.',
            'se reunirá, por lo general,': 'El hueco del futuro se cubre con **adverbio + futuro** del verbo principal.',
            'atañe': 'Fórmula **en lo que atañe a**: tercera persona del singular (sujeto implícito: «lo que»).',
            'atañen': 'Sujeto «las medidas»: **plural**.',
            'compete': 'De **competer**: corresponder por atribución. Solo tercera persona.',
            'acaecieron': '**Acaecer**: verbo de suceso, muy formal. Sujeto: «los hechos».',
            'deroga': 'Alternativa a «abole»: evita una forma admitida pero poco aceptada.',
            'abolió': 'Forma con **-i-** en la desinencia: siempre fue normal.',
            'llovieron': 'Uso **figurado** de llover: tiene sujeto («las solicitudes») y concuerda.',
            'amaneciste': '**Amanecer** con sujeto de persona: estar de cierta manera al empezar el día.',
          } },
          { kind: 'choice', title: '¿Entendiste?', items: [
            { prompt: '¿Por qué Matilde cambia «suele» en la frase sobre el año próximo?', options: ['Porque suena informal.', 'Porque hace falta un futuro y soler no lo tiene.', 'Porque el comité no se reúne.'], answer: 1, why: 'Hueco de futuro.', en: 'Why does Matilde change “suele” in the sentence about next year?' },
            { prompt: '¿Qué opina Matilde de «abole»?', options: ['Que es incorrecto.', 'Que está admitido, pero conviene evitarlo.', 'Que es la mejor opción.'], answer: 1, why: '«Lo admite. Y el lector tropieza».', en: 'What does Matilde think of “abole”?' },
            { prompt: '¿Qué pasaría con «compite»?', options: ['Cambiaría el significado: competir.', 'Sería más formal.', 'Nada.'], answer: 0, why: 'Competer ≠ competir.', en: 'What would happen with “compite”?' },
          ] },
        ] },
        { title: '¿Qué tipo de hueco? · What kind of gap?', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'classify', title: 'Clasifica el verbo', categories: [
            { id: 'soler', label: 'SOLO TIEMPOS IMPERFECTIVOS', tone: 'teal' },
            { id: 'tercera', label: 'SOLO TERCERA PERSONA', tone: 'orange' },
            { id: 'tiempo', label: 'METEOROLÓGICO', tone: 'violet' },
            { id: 'forma', label: 'FORMAS EVITADAS', tone: 'blue' },
          ], items: [
            { text: 'Suele haber retrasos.', answer: 'soler', why: 'Soler.' },
            { text: 'No me incumbe.', answer: 'tercera', why: 'Incumbir: el sujeto es el asunto.' },
            { text: 'Granizó toda la tarde.', answer: 'tiempo', why: 'Unipersonal.' },
            { text: 'Se abolió la norma.', answer: 'forma', why: 'Abolir: forma tradicional con -i-.' },
            { text: 'Acaeció un hecho insólito.', answer: 'tercera', why: 'Verbo de suceso.' },
            { text: 'Solían cenar tarde.', answer: 'soler', why: 'Imperfecto de soler.' },
            { text: 'Anocheció antes de llegar.', answer: 'tiempo', why: 'Unipersonal.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: «¿Qué asuntos de tu trabajo te competen a ti y cuáles no te incumben?».' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Si falta la forma, busca la alternativa.',
      steps: [
        { title: 'La forma que sí existe · The form that does exist', blocks: [
          { kind: 'choice', items: [
            { prompt: 'Por lo que ___ a los plazos, no hay novedades.', options: ['concierne', 'conciernen', 'concierno'], answer: 0, why: 'Sujeto «lo que»: singular.', en: 'As far as deadlines are concerned, there is no news.' },
            { prompt: 'Si me dieran ese puesto, ___ revisar cada texto dos veces.', options: ['solería', 'tendría por costumbre', 'solí'], answer: 1, why: 'Condicional: soler no lo tiene.', en: 'If I were given that post, I would make a point of reviewing each text twice.' },
            { prompt: 'Las cuestiones fiscales ___ al departamento financiero.', options: ['incumbe', 'incumben', 'incumbimos'], answer: 1, why: 'Sujeto plural.', en: 'Tax matters are the responsibility of the finance department.' },
            { prompt: 'Con la polémica, a la autora le ___ entrevistas.', options: ['llovió', 'llovieron', 'lluvieron'], answer: 1, why: 'Uso figurado con sujeto plural; pretérito regular en la raíz: llovieron.', en: 'With the controversy, interview requests rained down on the author.' },
            { prompt: 'En aquella época ___ muchos privilegios.', options: ['se abolieron', 'se abolaron', 'se abuelen'], answer: 0, why: 'Forma regular con -i-: abolieron.', en: 'At that time many privileges were abolished.' },
            { prompt: 'Salimos de noche y ___ en la costa.', options: ['amaneció', 'amanecimos', 'amanecemos'], answer: 1, why: 'Amanecer con sujeto de persona se conjuga en todas las personas.', en: 'We left at night and were on the coast by dawn.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'A partir de enero soleremos publicar dos títulos al mes.', ok: false, options: ['A partir de enero publicaremos, por lo general, dos títulos al mes.', 'A partir de enero solimos publicar dos títulos al mes.', 'A partir de enero solerían publicar dos títulos al mes.'], answer: 0, why: 'Futuro: adverbio + futuro del verbo principal.' },
            { sentence: 'En lo que atañe a las ilustraciones, el contrato es claro.', ok: true, why: 'Correcta: fórmula en tercera persona del singular.' },
            { sentence: 'Los derechos de traducción no me concierne.', ok: false, options: ['Los derechos de traducción no me conciernen.', 'Los derechos de traducción no me concierno.', 'Los derechos de traducción no me concernimos.'], answer: 0, why: 'Sujeto plural.' },
            { sentence: 'Suele haber dos rondas de corrección.', ok: true, why: 'Correcta: soler + haber impersonal, en singular.' },
            { sentence: 'Decidir la portada compite al departamento de arte.', ok: false, options: ['Decidir la portada compete al departamento de arte.', 'Decidir la portada competa al departamento de arte.', 'Decidir la portada compiten al departamento de arte.'], answer: 0, why: 'Competer.' },
          ] },
        ] },
        { title: 'Correos de la editorial · Emails at the publisher', blocks: [
          { kind: 'chat-fill', title: 'Hilo interno', lines: [
            { who: 'Iván', text: 'Matilde, ¿quién aprueba el cambio de título?' },
            { who: 'Matilde', text: 'Eso le ___ a dirección. A nosotros no nos ___.', options: ['compete / incumbe', 'compite / incumbimos', 'competen / incumben'], answer: 0, why: 'Sujeto «eso»: singular en ambos.' },
            { who: 'Iván', text: 'Entendido. ¿Y los plazos de imprenta?' },
            { who: 'Matilde', text: '___ ser de tres semanas, aunque en diciembre se alargan.', options: ['Suelen', 'Solerán', 'Solieron'], answer: 0, why: 'Hábito actual: presente.' },
            { who: 'Iván', text: 'En el prólogo dice «los sucesos que ___ aquel invierno». ¿Lo dejo?', options: ['acaecieron', 'acaecimos', 'acaeció'], answer: 0, why: 'Sujeto «los sucesos»: plural.' },
            { who: 'Matilde', text: 'Déjalo. Y prepárate: desde que salió la reseña, nos ___ los encargos.', options: ['llueven', 'llueve', 'llovemos'], answer: 0, why: 'Figurado, sujeto plural.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras', items: [
            { tiles: ['me', 'Eso', 'incumbe', 'no'], accept: ['Eso no me incumbe'], en: 'That is none of my business.' },
            { tiles: ['haber', 'Suele', 'erratas', 'tablas', 'las', 'en'], accept: ['Suele haber erratas en las tablas', 'En las tablas suele haber erratas'], en: 'There tend to be misprints in the tables.' },
            { tiles: ['las', 'Llovieron', 'críticas'], accept: ['Llovieron las críticas'], en: 'Criticism rained down.' },
            { tiles: ['todos', 'normas', 'a', 'Las', 'atañen'], accept: ['Las normas atañen a todos'], en: 'The rules concern everyone.' },
          ] },
        ] },
        { title: 'Transforma · Transform', blocks: [
          { kind: 'rewrite', title: 'Cubre el hueco', items: [
            { prompt: 'Suelo entregar a tiempo. (el año que viene)', instruction: 'Pásalo al futuro con «normalmente». Empieza con «El año que viene…».', accept: ['El año que viene normalmente entregaré a tiempo', 'El año que viene entregaré a tiempo normalmente', 'El año que viene, normalmente entregaré a tiempo', 'El año que viene, normalmente, entregaré a tiempo'] },
            { prompt: 'Esto es responsabilidad del consejo.', instruction: 'Usa «incumbir». Empieza con «Esto…».', accept: ['Esto incumbe al consejo', 'Esto le incumbe al consejo'] },
            { prompt: 'Recibimos muchísimas quejas.', instruction: 'Usa «llover» en sentido figurado. Empieza con «Nos…».', accept: ['Nos llovieron las quejas', 'Nos llovieron quejas'] },
            { prompt: 'La junta abole el artículo sexto.', instruction: 'Sustituye la forma poco aceptada por «derogar».', accept: ['La junta deroga el artículo sexto'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno dice tres hábitos suyos con «soler» y los proyecta al futuro sin usar ese verbo.' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'La nota de estilo de Matilde', coach: 'Primero escucha sin leer.',
      steps: [
        { title: 'Nota de la semana', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: tema y tono. Segunda escucha: tu alumno anota cada verbo comentado y la solución que propone Matilde.', self: 'Escucha una vez para el tema y el tono. Escucha otra vez y anota cada verbo comentado y la solución propuesta.' } },
          { kind: 'listen', title: 'Verbos con huecos', channel: 'EDITORIAL · NOTA DE ESTILO SEMANAL', src: '/audio/grammar-live/548.mp3',
            before: 'Cada viernes, Matilde graba una nota de voz para todo el equipo de corrección con los errores de la semana. ¿Qué verbos crees que comentará?',
            gist: { prompt: '¿De qué trata la nota?', options: ['De verbos que no tienen todas sus formas y cómo resolverlo.', 'De los plazos de entrega.', 'De ortografía de mayúsculas.'], answer: 0, why: '«Esta semana, verbos con huecos».', en: 'What is the note about?' },
            details: [
              { prompt: '¿Qué dice de «soleremos»?', options: ['Que no existe: adverbio más futuro.', 'Que es correcto pero feo.', 'Que solo se usa en América.'], answer: 0, why: '«No existe. “Normalmente publicaremos”».', en: 'What does she say about “soleremos”?' },
              { prompt: '¿Qué pide con «atañer» y «concernir»?', options: ['Vigilar la concordancia en plural.', 'No usarlos nunca.', 'Usarlos en primera persona.'], answer: 0, why: '«Si el sujeto es plural, el verbo también».', en: 'What does she ask for with “atañer” and “concernir”?' },
              { prompt: '¿Qué recomienda para «abolir» en presente?', options: ['Usar «abole» sin miedo.', 'Preferir «derogar» o «suprimir».', 'Escribir «abuele».'], answer: 1, why: '«Está admitido; aun así, prefiero “deroga”».', en: 'What does she recommend for “abolir” in the present?' },
              { prompt: '¿Qué ejemplo da de «llover»?', options: ['«Llovieron las reclamaciones».', '«Llovió las reclamaciones».', '«Llovimos reclamaciones».'], answer: 0, why: 'Figurado, con concordancia.', en: 'What example does she give of “llover”?' },
            ],
            transcript: 'Buenas tardes, equipo. Esta semana, verbos con huecos. Primero, soler. He visto «soleremos» en dos informes. No existe. Un hábito no se anuncia con soler: escriban «normalmente publicaremos» o «[[acostumbraremos a|teal]] publicar». En presente y en imperfecto, sin problema: «[[suele|teal]] haber», «[[solíamos|teal]] revisar». Segundo: atañer y concernir. Solo tercera persona, y ojo con el plural: «las cláusulas que [[atañen|orange]] al autor», no «que atañe». Si el sujeto es plural, el verbo también. Lo mismo con «[[incumben|orange]]» y «[[competen|orange]]». Tercero: abolir. «Abole» está admitido; aun así, prefiero «[[deroga|blue]]» o «[[suprime|blue]]». En pasado, «[[abolió|blue]]», tranquilamente. Y cuarto: cuando llover es figurado, concuerda: «[[llovieron|violet]] las reclamaciones». Buen fin de semana.',
            reply: { teacher: 'Tu alumno resume la nota para un compañero que no la oyó: cuatro verbos, cuatro soluciones.', self: 'Resume la nota en voz alta para un compañero que no la oyó: cuatro verbos, cuatro soluciones.' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Lo que te atañe y lo que no', coach: 'Registro formal, con soltura.',
      steps: [
        { title: 'Hábitos, competencias y sucesos', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas; pide a tu alumno que alterne registro neutro y formal, y que cubra los huecos de soler cuando hable del futuro.', self: 'Responde en voz alta. Alterna registro neutro y formal, y cubre los huecos de soler cuando hables del futuro.' } },
          { kind: 'talk', cards: [
            { q: '¿Qué solías hacer hace diez años que ya no haces? ¿Y qué crees que harás habitualmente dentro de diez?', followUps: ['¿Qué echas de menos?', '¿Qué costumbre te gustaría adquirir?'], phrases: ['Antes [[solía|teal]]…', 'Ahora [[suelo|teal]]…', 'Dentro de diez años, [[normalmente|teal]]…'], hint: 'Pasado y presente con soler; futuro con adverbio + futuro.', example: 'Antes solía leer en papel y en el metro. Ahora suelo leer en pantalla y de noche. Dentro de diez años, normalmente leeré menos y escucharé más.', next: 'Ahora, competencias.' },
            { q: 'En tu trabajo o en tu comunidad, ¿qué decisiones te competen a ti y cuáles no te incumben?', followUps: ['¿Quién decide lo demás?', '¿Te gustaría que te competiera algo más?'], phrases: ['A mí me [[compete|orange]]…', 'No me [[incumbe|orange]]…', 'En lo que [[atañe|orange]] a…'], hint: 'El sujeto es el asunto: tercera persona.', example: 'A mí me compete aprobar los presupuestos pequeños. Las contrataciones no me incumben. En lo que atañe a los horarios, decide cada equipo.', next: 'Ahora, sucesos.' },
            { q: 'Cuenta en registro formal, como en un informe, algo que ocurrió en tu ciudad.', followUps: ['¿Cuándo acaeció?', '¿Qué aconteció después?'], phrases: ['Los hechos [[acaecieron|orange]]…', 'Lo que [[aconteció|orange]] después…', 'Según consta, …'], hint: 'Acaecer y acontecer: registro narrativo formal.', example: 'Los hechos acaecieron en la madrugada del sábado. Un fallo eléctrico dejó sin luz tres barrios. Lo que aconteció después fue ejemplar: los vecinos organizaron turnos de ayuda.', next: 'Ahora, en figurado.' },
            { q: '¿Qué te «llueve» últimamente: trabajo, mensajes, invitaciones, críticas?', followUps: ['¿Cómo lo gestionas?', '¿Cómo amaneciste hoy?'], phrases: ['Me [[llueven|violet]]…', 'Hoy [[amanecí|violet]]…', 'Nos [[llovieron|violet]]…'], hint: 'Figurado: sujeto y concordancia.', example: 'Me llueven los mensajes desde que cambié de puesto. Hoy amanecí con treinta sin leer. La semana pasada nos llovieron las felicitaciones.', teacher: 'Comenta el par compitiera / competiera: compitiera es de competir; competiera, de competer.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno hace de corrector y tú dices frases con formas imposibles para que las arregle.', self: 'Ahora inventa cuatro frases con formas imposibles (soleré, concierno…) y corrígelas en voz alta.' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Una circular interna', coach: 'Formal, claro y sin formas imposibles.',
      steps: [
        { title: 'Comunicado a la plantilla', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos cada verbo de la lección: persona, número y tiempo.', self: 'Escribe tu circular y toca «Revisar mi texto». Después revisa cada verbo de la lección: persona, número y tiempo.' } },
          { kind: 'write', title: 'Cambios en la organización', situation: 'Eres responsable de comunicación de una organización (empresa, asociación, centro educativo). Redacta una circular interna que anuncia cambios para el año próximo.', task: [
            'Describe una práctica habitual actual con «soler».',
            'Anuncia cómo será esa práctica el año próximo, sin «soler».',
            'Delimita responsabilidades con «competer» o «incumbir».',
            'Usa «en lo que atañe a» o «por lo que concierne a», y un sujeto plural con «atañen» o «conciernen».',
            'Anuncia la supresión de una norma con «derogar», «suprimir» o «abolir» en una forma segura.',
          ], starters: ['Estimados compañeros:', 'Hasta ahora, las reuniones suelen…', 'A partir de enero, se celebrarán, por lo general, …', 'En lo que atañe a…', 'Corresponde y compete a…', 'Queda derogada…'],
            words: ['suele', 'solían', 'por lo general', 'habitualmente', 'atañe', 'atañen', 'concierne', 'compete', 'incumbe', 'deroga', 'se suprimió', 'abolió'],
            model: 'Estimados compañeros: Hasta ahora, las reuniones de coordinación [[suelen|teal]] celebrarse los lunes a primera hora. A partir de enero [[se celebrarán, por lo general,|teal]] los miércoles. En lo que [[atañe|orange]] a los horarios de verano, no habrá cambios. Las nuevas normas de teletrabajo [[conciernen|orange]] a toda la plantilla; su aplicación [[compete|orange]] a cada jefatura de área, y no [[incumbe|orange]] a recursos humanos resolver los casos particulares. Por último, queda [[derogada|blue]] la obligación de fichar en papel, que ya se [[suprimió|blue]] en otras sedes. Un saludo cordial.',
            minWords: 80,
            checks: [
              { label: 'Un verbo de asunto en tercera persona: atañe(n), concierne(n), compete(n), incumbe(n)', pattern: '(?:^|[^\\p{L}])(?:atañen?|conciernen?|competen?|incumben?)(?![\\p{L}])', tip: 'Por ejemplo: «Su aplicación compete a cada jefatura».' },
              { label: 'Una forma de soler en presente o imperfecto', pattern: '(?:^|[^\\p{L}])(?:suel(?:o|es|e|en)|solemos|sol(?:ía|ías|íamos|ían))(?![\\p{L}])', tip: 'Por ejemplo: «Las reuniones suelen celebrarse los lunes».' },
            ],
            warnings: [
              { pattern: '(?:^|[^\\p{L}])soler(?:é|ás|á|emos|án|ía|ías|íamos|ían)(?![\\p{L}])', why: '**Soler** no tiene futuro ni condicional: usa «normalmente» o «por lo general» + el tiempo que necesites.' },
              { pattern: '(?:^|[^\\p{L}])(?:sol[íi]|soliste|solió|solimos|solieron)(?![\\p{L}])', why: '**Soler** no se usa en indefinido: «solía» o el verbo principal en pasado.' },
              { pattern: '(?:^|[^\\p{L}])(?:compite|compiten)\\s+a(?![\\p{L}])', why: '¿Quieres decir «corresponder»? Entonces es **compete / competen** (de competer).' },
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
            { tone: 'teal', label: 'SOLER', formula: 'suelo · solía (+ infinitivo)', example: 'Suele haber erratas. Solíamos imprimirlo todo.', caption: 'sin futuro, condicional, indefinido ni imperativo', en: 'no future, conditional, preterite or imperative' },
            { tone: 'orange', label: 'SOLO TERCERA PERSONA', formula: 'atañe(n) · concierne(n) · incumbe(n) · compete(n) · acaeció', example: 'Las normas atañen a todos. No me incumbe.', caption: 'el sujeto es un asunto o un suceso; ojo al plural', en: 'the subject is a matter or an event; watch the plural' },
            { tone: 'violet', label: 'METEOROLÓGICOS', formula: 'llueve (sin sujeto) · llueven críticas (figurado)', example: 'Llovieron los pedidos. Amanecí cansado.', caption: 'en figurado, sujeto y concordancia', en: 'figurative use takes a subject and agrees' },
            { tone: 'blue', label: 'ABOLIR Y AFINES', formula: 'abolió, abolimos, abolía · deroga, suprime', example: 'El reglamento deroga la norma anterior.', caption: '«abole» se admite, pero se evita en prosa cuidada', en: '“abole” is accepted but avoided in careful prose' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Un verbo es defectivo por **significado** (un hábito no se cierra ni se predice con *soler*; un asunto concierne, no «yo concierno»; llover no tiene quien lo haga) o por **forma** (ciertas terminaciones de *abolir* no cuajaron). En los dos casos la solución es la misma: no fuerces la forma; **cambia de recurso**: un adverbio, un sinónimo, otra construcción.', en: 'A verb is defective because of its meaning or because of its form. In both cases the solution is the same: do not force the form; switch to another resource: an adverb, a synonym, a different construction.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda', items: [
            { prompt: 'Cuando vivía en el campo, ___ acostarme a las diez.', options: ['solía', 'solí', 'solería'], answer: 0, why: 'Hábito pasado: imperfecto.', en: 'When I lived in the country, I used to go to bed at ten.' },
            { prompt: 'Las reformas ___ a todos los departamentos.', options: ['concierne', 'conciernen', 'concernimos'], answer: 1, why: 'Sujeto plural.', en: 'The reforms concern all departments.' },
            { prompt: 'Eso no te ___: es asunto mío.', options: ['incumbe', 'incumbes', 'incumbo'], answer: 0, why: 'Sujeto «eso».', en: 'That is none of your business: it is my affair.' },
            { prompt: 'Tras el anuncio, ___ las llamadas.', options: ['llovió', 'llovieron', 'lloviste'], answer: 1, why: 'Figurado, plural.', en: 'After the announcement, the calls poured in.' },
            { prompt: 'Si fuera ministra, ___ visitar una escuela cada semana.', options: ['solería', 'tendría por costumbre', 'soleré'], answer: 1, why: 'Condicional: alternativa a soler.', en: 'If I were a minister, I would make a habit of visiting a school every week.' },
          ] },
        ] },
        { title: 'Ampliación · Rarezas de diccionario', mascot: '/autoestudio/mascot/noting.webp', coach: 'Opcional: un paso más.', blocks: [
          { kind: 'lead', text: 'Para curiosos. **Usucapir** (adquirir un bien por posesión prolongada) vive casi solo en infinitivo, gerundio y participio: «bienes usucapidos». **Adir** (aceptar una herencia) solo se usa en la fórmula «adir la herencia». **Desabrir** apenas sobrevive en el participio «desabrido». **Aterir** se conserva en «aterido de frío». Y hay defectivos sintácticos: **obstar** solo se usa en tercera persona y en negativo («Ello no obsta para que…»), igual que **holgar** en «huelga decir». Son piezas de museo, pero aparecen en textos jurídicos y literarios, y conviene reconocerlas.', en: 'For the curious. Usucapir survives almost only in the infinitive, gerund and participle. Adir is only used in the formula “adir la herencia”. Desabrir barely survives in the participle “desabrido”. Aterir remains in “aterido de frío”. And there are syntactic defectives: obstar is only used in the third person and in the negative, like holgar in “huelga decir”. They are museum pieces, but they turn up in legal and literary texts.' },
          { kind: 'choice', title: 'Para estudiantes rápidos', items: [
            { prompt: '«Huelga decir que el plazo es improrrogable» significa…', options: ['No hace falta decirlo, es evidente.', 'Hay una huelga.', 'Es obligatorio decirlo.'], answer: 0, why: 'Holgar = sobrar; «huelga decir» = sobra decir.', en: '“Huelga decir que…” means…' },
            { prompt: '«Ello no obsta para que se presente un recurso» significa…', options: ['Eso no impide presentar un recurso.', 'Eso obliga a presentar un recurso.', 'Eso prohíbe el recurso.'], answer: 0, why: 'No obstar = no impedir.', en: '“Ello no obsta para que…” means…' },
          ] },
          { kind: 'teacher', text: 'Este paso es opcional. Tu alumno redacta una frase formal con «huelga decir» y otra con «no obsta para que» + subjuntivo.' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 215 · Voseo, tuteo y ustedeo: cambios pragmáticos de registro', text: 'Ya reconoces los verbos con huecos y sabes cubrirlos con otro recurso. La clase 215 retoma la ruta del curso: «Voseo, tuteo y ustedeo: cambios pragmáticos de registro».', en: 'You can now recognize verbs with gaps and know how to cover them with another resource. Class 215 returns to the main route of the course: “Voseo, tuteo y ustedeo: cambios pragmáticos de registro”.', href: '/gramatica/voseo-tuteo-y-ustedeo-cambios-pragmaticos', label: 'Ir a la clase 215' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: tu alumno resume en tres frases lo que se lleva de la clase y da un ejemplo propio de cada punto. Tarea: terminar o reescribir el texto de Escribir.' },
        ] },
      ],
    },
  ],
};
