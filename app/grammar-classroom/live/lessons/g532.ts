import type { LiveLesson } from '../types';

/**
 * Lesson 532 · C2 · Ortografía académica y variación admisible (course unit G232).
 * PCIC «Ortografía» inventory (C1–C2), taught strictly per the RAE-ASALE Ortografía de la
 * lengua española (2010) and the RAE's later note on «solo» (2023). Builds on G023 (g323:
 * interrogatives with a written accent at A1). Scope: diacritic accents (tú/tu, él/el,
 * mí/mi, sí/si, té/te, dé/de, sé/se, más/mas) and aún/aun; «solo» and demonstratives
 * without accent (2010) and the 2023 note (accent allowed on the adverb when the writer
 * sees a real risk of ambiguity); orthographic monosyllables without accent (guion,
 * truhan, fie, hui, rio); interrogatives and exclamatives in indirect questions and
 * porque / por qué / porqué / por que; prefixes joined (exdirector, antivacunas),
 * separated before a multiword base (ex primer ministro), hyphenated before a capital or
 * a figure (sub-21); lower case for months, days and offices; thousands with a space
 * (12 500), decimal comma or point (both accepted), % with a space; e before /i/ (padre
 * e hijo) but y before hie- (agua y hielo), u before /o/; o between figures without
 * accent; admissible doublets (México recommended over Méjico; video/vídeo; periodo/
 * período; quizá/quizás; septiembre/setiembre) chosen and kept consistently. Distinguishes
 * norm, admissible variant and journal style sheet. Ampliación: que/qué with tener,
 * el porqué, aun cuando, capitals for academic subjects.
 * Scene: Lucía Ferrer, copy editor of the (fictional) Revista de Historia del Libro,
 * prepares the proofs of an article by the Mexican historian Mateo Rivas on nineteenth-
 * century printers in Veracruz. Escuchar: Mateo's voice message (es-MX-JorgeNeural).
 * Instructions use tú.
 */
export const lesson: LiveLesson = {
  id: 532,
  level: 'C2',
  title: 'Ortografía académica y variación admisible',
  subtitle: 'Corregir un texto académico según la Ortografía de 2010 y elegir con coherencia entre las variantes que la norma admite.',
  legend: [
    { tone: 'blue', label: 'TILDE QUE DISTINGUE · diacrítica, interrogativos y exclamativos' },
    { tone: 'teal', label: 'NORMA ACTUAL · Ortografía de 2010 y notas posteriores de la RAE' },
    { tone: 'orange', label: 'FORMA ANTIGUA O ERRÓNEA · lo que hoy se corrige' },
    { tone: 'violet', label: 'VARIANTE ADMISIBLE · las dos valen: elige y sé coherente' },
  ],
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Norma, variante y estilo', coach: 'No todo cambio es una corrección. Not every change is a correction.',
      steps: [
        { title: 'Las segundas pruebas · The second proofs', blocks: [
          { kind: 'lead', text: 'Lucía Ferrer es correctora de la **Revista de Historia del Libro**. Esta semana revisa las pruebas de un artículo del historiador mexicano Mateo Rivas sobre los impresores de Veracruz en el siglo XIX. En la clase 23 aprendiste que los interrogativos llevan tilde. Hoy trabajas a nivel de corrector profesional: aplicas la **Ortografía de la lengua española** (RAE y ASALE, 2010) y distingues tres cosas que no son lo mismo: **lo que la norma exige**, **lo que la norma admite** (dos formas válidas) y **lo que decide la hoja de estilo** de una publicación.', en: 'Lucía is the copy editor of a history journal, working on the proofs of an article by a Mexican historian. Back in class 23 you learnt that question words take an accent; today you work like a professional proofreader, applying the 2010 Ortografía and telling apart three things: what the norm requires, what it allows (two valid forms) and what a publication’s house style decides.' },
          { kind: 'guide', text: { teacher: 'Tú lees la frase original y las tres columnas. Tu alumno dice qué columna es un error, cuál una variante válida y cuál una decisión de la revista.', self: 'Lee las tres columnas. ¿Cuál es un error, cuál una variante admitida y cuál una decisión de estilo? (Error, valid variant or house style?)' } },
          { kind: 'compare', title: 'Tres tipos de cambio · Three kinds of change', columns: [
            { tone: 'orange', label: 'ERROR', sentence: 'El [[guión|orange]] del taller se conserva → el [[guion|teal]] del taller se conserva.', idea: 'Desde 2010, «guion» es monosílabo ortográfico: la tilde es hoy una falta.', en: 'Since 2010 guion counts as a monosyllable for spelling purposes, so the accent is now simply wrong and must be corrected.' },
            { tone: 'violet', label: 'VARIANTE ADMISIBLE', sentence: 'un [[video|violet]] del archivo · un [[vídeo|violet]] del archivo', idea: 'Las dos formas son correctas: el corrector no la cambia, solo vigila la coherencia.', en: 'Both spellings are correct; a proofreader leaves the author’s choice alone and only checks it is used consistently.' },
            { tone: 'neutral', label: 'HOJA DE ESTILO', sentence: '[[3.5 %|violet]] → [[3,5 %|violet]]', idea: 'Coma y punto decimales son válidos; la revista usa la coma en todos sus artículos.', en: 'Decimal point and comma are both valid; the journal standardises on the comma, which is an editorial decision, not a correction of an error.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Lucía cambia «3.5 %» por «3,5 %». ¿Qué tipo de cambio es?', options: ['Una decisión de la hoja de estilo de la revista.', 'Una variante dialectal incorrecta.', 'La corrección de un error.'], answer: 0, why: 'La Ortografía admite el punto y la coma como signo decimal; unificar es una decisión editorial, no una corrección.', en: 'Both decimal signs are valid; unifying them is house style.' },
            { prompt: 'Mateo escribe «video» y Lucía no lo toca. ¿Por qué?', options: ['Porque «video» y «vídeo» son correctas las dos.', 'Porque la tilde es opcional en todas las palabras.', 'Porque en un texto académico se puede escribir sin tildes.'], answer: 0, why: 'Es un doblete admitido: «vídeo» es lo habitual en España y «video» en América. Solo hay que mantener la misma forma en todo el texto.', en: 'An accepted doublet: keep the author’s form, consistently.' },
          ] },
        ] },
        { title: 'La tilde diacrítica · The diacritic accent', mascot: '/brand/mascot/studying.webp', coach: 'Una tilde, dos palabras. One accent, two words.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'MONOSÍLABOS CON TILDE DIACRÍTICA', question: '¿Por qué lleva tilde «él» y no «el»?', en: 'As a rule, monosyllables never take a written accent. The diacritic accent is the exception: it tells apart two words spelt the same, one usually stressed and one usually unstressed. The list is closed, so you do not extend it to other monosyllables: ti, fue, dio, vio, fe and pie never take an accent. The same logic separates aún (todavía, stressed) from aun (incluso, hasta, siquiera, unstressed).', formula: ['tú / tu · él / el · mí / mi · sí / si', 'té / te · dé / de · sé / se · más / mas', 'aún (= todavía) / aun (= incluso, hasta, siquiera)'],
            meaning: 'Por regla general, **los monosílabos no llevan tilde**. La **tilde diacrítica** es la excepción: distingue dos palabras que se escriben igual, una normalmente tónica y otra normalmente átona. La lista es **cerrada**: no se extiende a otros monosílabos, así que **ti, fue, dio, vio, fe** o **pie** nunca llevan tilde. Con la misma lógica se distinguen **aún** (= todavía, tónico) y **aun** (= incluso, hasta, siquiera, átono).',
            examples: [
              { es: 'Pide que [[dé|blue]] a la biblioteca el manuscrito [[de|blue]] 1857.', en: 'dé is the subjunctive of dar; de is the preposition.' },
              { es: '[[Sé|blue]] que el impresor no [[se|blue]] fiaba de nadie.', en: 'sé is “I know” (saber); se is the pronoun.' },
              { es: 'Lo intentó, [[mas|blue]] no obtuvo la licencia.', en: 'mas without an accent means pero; it belongs to formal, literary prose.' },
              { es: '[[Aún|blue]] no se ha encontrado el contrato; [[aun así|blue]], sabemos la fecha.', en: 'aún = todavía (still/yet); in aun así, aun means incluso (even so).' },
            ] },
          { kind: 'table', title: 'Las parejas · The pairs', head: ['Con tilde', 'Sin tilde'], rows: [
            ['**tú** (pronombre): Tú lo firmaste.', '**tu** (posesivo): tu artículo'],
            ['**él** (pronombre): Lo escribió él.', '**el** (artículo): el taller'],
            ['**mí** (pronombre tras preposición): para mí', '**mi** (posesivo; nota musical): mi tesis'],
            ['**sí** (afirmación; pronombre: «para sí»; sustantivo: «dio el sí»)', '**si** (conjunción; nota musical): si llega a tiempo'],
            ['**té** (bebida)', '**te** (pronombre; nombre de la letra)'],
            ['**dé** (verbo dar)', '**de** (preposición; nombre de la letra)'],
            ['**sé** (verbo saber o ser)', '**se** (pronombre)'],
            ['**más** (cantidad; también en sumas: dos más dos)', '**mas** (= pero, uso literario)'],
            ['**aún** (= todavía)', '**aun** (= incluso, hasta, siquiera) · aun así · aun cuando'],
          ], note: 'Las mayúsculas también llevan tilde: «Él», «ÉPOCA», «Álvaro». Quitarla en las mayúsculas es un error frecuente.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Nadie pensaba en ___; ni siquiera en el impresor.»', options: ['tí', 'ti'], answer: 1, why: '«Ti» es monosílabo y no tiene pareja átona: nunca lleva tilde. «Tí» es un error muy frecuente por analogía con «mí».', en: 'ti never takes an accent: there is no unstressed twin.' },
            { prompt: '«___ los especialistas desconocían ese taller.»', options: ['Aún', 'Aun'], answer: 1, why: 'Equivale a «incluso los especialistas»: es átono y va sin tilde.', en: 'Here aun means “even”, so no accent.' },
          ] },
        ] },
        { title: 'Preguntas que no lo parecen · Questions in disguise', mascot: '/brand/mascot/speaking.webp', coach: 'Pregunta indirecta, tilde directa. Indirect question, accent all the same.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'INTERROGATIVOS Y EXCLAMATIVOS INDIRECTOS', question: '¿Lleva tilde «qué» en «No sé qué hacer»?', en: 'Question and exclamation words keep their accent without question marks too, when they introduce an indirect question or exclamation after verbs such as saber, preguntar, explicar, depender or ignorar. The test: if you can turn the clause into a direct question, it takes the accent. Relatives and conjunctions (que, donde, cuando, como) are unstressed and carry none. Watch the four forms of porque: the conjunction of cause, the question por qué, the noun el porqué (the reason) and por + que (preposition plus relative or conjunction).', formula: ['verbo + qué / quién / cuál / cuándo / dónde / cómo / cuánto + oración', 'porque (causa) · por qué (pregunta) · el porqué (= el motivo) · por que (por + que)'],
            meaning: 'Los interrogativos y exclamativos **conservan la tilde sin signos de interrogación** cuando introducen una pregunta o exclamación **indirecta**, tras verbos como saber, preguntar, explicar, ignorar o depender. Prueba: si puedes convertir la oración en una pregunta directa, lleva tilde. Los relativos y las conjunciones (**que, donde, cuando, como**) son átonos y no la llevan. Y atención a las cuatro formas de **porque**: la conjunción causal, el interrogativo **por qué**, el sustantivo **el porqué** y la secuencia **por que** (preposición + relativo o conjunción).',
            examples: [
              { es: 'Nadie sabe [[cuándo|blue]] cerró el taller ni [[quién|blue]] lo compró.', en: 'Two indirect questions: ¿Cuándo cerró? ¿Quién lo compró?' },
              { es: 'Me sorprende [[qué|blue]] poco se ha estudiado.', en: 'An indirect exclamation (¡Qué poco se ha estudiado!) keeps the accent.' },
              { es: 'Firmaba con iniciales [[porque|blue]] temía la censura; ese es [[el porqué|blue]] del anonimato.', en: 'porque gives the cause; el porqué is a noun meaning “the reason”.' },
              { es: 'Esa es la razón [[por que|blue]] lo detuvieron. · Optaron [[por que|blue]] firmara su hijo.', en: 'por + relative que (= por la que), and por + conjunction que after optar por.' },
            ] },
          { kind: 'decide', title: '¿Porque, por qué, porqué o por que? · Which one?', steps: [
            { q: '¿Lleva artículo o determinante delante (el, un, su) y equivale a «motivo»?', yes: '**porqué**, sustantivo: «el porqué de su silencio».', no: 'Sigue.' },
            { q: '¿Es una pregunta, directa o indirecta?', yes: '**por qué**: «No explicó por qué se fue».', no: 'Sigue.' },
            { q: '¿Puedes poner «por el que / por la que», o lo pide el verbo (optar por, abogar por)?', yes: '**por que**: «la causa por que luchaba».', no: '**porque**, causal: «Se fue porque no le pagaban».' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«El artículo no aclara ___ dejó de firmar sus impresos.»', options: ['porqué', 'porque', 'por qué'], answer: 2, why: 'Es una pregunta indirecta: «¿Por qué dejó de firmar?». Dos palabras y tilde.', en: 'Indirect question: por qué.' },
            { prompt: '«Todavía ignoramos ___ de esa decisión.»', options: ['el porqué', 'el por qué', 'el porque'], answer: 0, why: 'Con artículo y con el sentido de «el motivo», es el sustantivo «porqué», una palabra con tilde.', en: 'With an article, meaning “the reason”: el porqué.' },
          ] },
        ] },
        { title: 'Lo que cambió en 2010 · What changed in 2010', mascot: '/autoestudio/mascot/noting.webp', coach: 'Lo que aprendiste antes puede haber cambiado. What you learnt may have changed.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'CINCO CAMBIOS QUE UN CORRECTOR APLICA', question: '¿Qué normas antiguas ya no valen?', en: 'Five changes from the 2010 Ortografía. (1) The adverb solo and the demonstratives are written without an accent, even when a sentence could be read two ways; the RAE’s 2023 note added that a writer who sees a real risk of ambiguity may put the accent on the adverb, but the general rule is no accent. (2) Words like guion, truhan, fie, hui or rio count as monosyllables for spelling and take no accent, however you pronounce them. (3) o between figures has no accent: 3 o 4. (4) Prefixes such as ex- are joined to the base: exdirector. (5) Long numbers group thousands with a space: 12 500.', formula: ['solo · este, ese, aquel (y sus formas) → sin tilde; tilde en el adverbio solo si quien escribe ve riesgo de ambigüedad (nota de la RAE, 2023)', 'guion, truhan, fie, hui, rio, lie, Sion → monosílabos ortográficos, sin tilde', 'entre cifras: 3 o 4 (antes, 3 ó 4)', 'ex director → exdirector · ex alumna → exalumna'],
            meaning: '**1.** El adverbio **solo** y los **demostrativos** (este, ese, aquel y sus formas) se escriben **sin tilde**, incluso cuando hay doble interpretación (hasta 2010 la tilde era obligatoria en caso de ambigüedad). En 2023 la RAE precisó que, si quien escribe percibe un **riesgo real de ambigüedad**, puede tildar el adverbio; sin ese riesgo, la tilde no se justifica. Para los demostrativos, la regla general es también escribirlos sin tilde. Lo más elegante suele ser **reformular**. **2.** Palabras como **guion, truhan, fie, hui, rio** se consideran **monosílabos ortográficos** y no llevan tilde, aunque alguien las pronuncie en dos sílabas (antes eso permitía escribir «guión»). **3.** La **o** entre cifras ya no lleva tilde: «3 o 4». **4.** Los **prefijos** se escriben unidos a la base: «exdirector». **5.** Los miles se separan con **espacio**: «12 500».',
            examples: [
              { es: 'El impresor trabajaba [[solo|teal]] de noche. → [[Solo trabajaba de noche|teal]].', en: 'Ambiguous: “only at night” or “alone at night”? Reordering removes the doubt without any accent.' },
              { es: 'Se [[rio|teal]] del censor junto al [[río|teal]].', en: 'rio (he laughed) is an orthographic monosyllable; río (river) has two syllables in hiatus and needs the accent.' },
              { es: 'Huyeron del puerto: «Yo también [[hui|teal]]», escribió.', en: 'hui, like fui, has no accent.' },
            ] },
          { kind: 'table', title: 'Los prefijos · Prefixes', head: ['Caso', 'Se escribe', 'Ejemplos'], rows: [
            ['base de una palabra', '**unido**', '[[exdirector|teal]] · [[antivacunas|teal]] · [[proeuropeo|teal]] · [[vicerrectora|teal]]'],
            ['base de varias palabras', '**separado**', '[[ex primer ministro|teal]] · [[pro derechos humanos|teal]] · [[ex alto cargo|teal]]'],
            ['base con mayúscula o cifra', '**con guion**', '[[anti-OTAN|teal]] · [[sub-21|teal]] · [[pre-1850|teal]]'],
          ], note: 'Antes de 2010 se recomendaba separar «ex» («ex director»). Hoy funciona como los demás prefijos.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué frase es correcta según la norma actual?', options: ['Las dos, según cómo se pronuncie.', '«Lo supimos por el guión de la obra.»', '«Lo supimos por el guion de la obra.»'], answer: 2, why: 'Desde 2010, «guion» se escribe siempre sin tilde, se pronuncie en una sílaba o en dos.', en: 'guion: no accent, whatever your pronunciation.' },
            { prompt: '«La ___ del taller declaró ante el juez.»', options: ['ex-propietaria', 'ex propietaria', 'expropietaria'], answer: 2, why: 'Base de una sola palabra: el prefijo va unido, sin espacio ni guion.', en: 'One-word base: prefix joined.' },
          ] },
        ] },
        { title: 'Mayúsculas, cifras y conjunciones · Capitals, figures and conjunctions', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Los detalles que delatan un texto descuidado. The details that give a careless text away.', blocks: [
          { kind: 'table', title: 'Reglas que se revisan en todo texto académico · Rules checked in every academic text', head: ['Punto', 'Norma', 'Ejemplo'], rows: [
            ['meses, días, estaciones', 'minúscula (salvo en nombres propios)', '[[el lunes 3 de septiembre de 1857|teal]]'],
            ['títulos y cargos', 'minúscula', '[[el presidente|teal]] · [[el gobernador|teal]] · [[la rectora|teal]] · [[el doctor Rivas|teal]]'],
            ['instituciones', 'mayúscula en el nombre propio', 'la [[Universidad de Valdeoro|teal]] · pero: «una universidad pública»'],
            ['títulos de obras', 'mayúscula solo en la primera palabra (y nombres propios)', '[[El arte de imprimir en América|teal]]'],
            ['números largos', 'espacio cada tres cifras; cuatro cifras sin separar', '[[12 500 ejemplares|teal]] · [[4500 pliegos|teal]] · el año [[1857|teal]]'],
            ['signo decimal', 'coma o punto: los dos son válidos', '[[3,5|violet]] · [[3.5|violet]]'],
            ['porcentaje', 'el signo % separado por un espacio', '[[el 40 %|teal]]'],
            ['y / e · o / u', 'e ante /i/ (i-, hi-); y ante hie- · u ante /o/ (o-, ho-)', '[[padre e hijo|teal]] · [[agua y hielo|teal]] · [[siete u ocho|teal]]'],
          ], note: 'La coma decimal es la tradicional en España y en buena parte de América; el punto es el habitual en México y en otros países de su entorno. La Ortografía de 2010 admite los dos. Lo que no se recomienda es separar los miles con punto o coma (12.500, 12,500): con dos sistemas decimales en uso, cualquiera de los dos se puede confundir con un decimal.' },
          { kind: 'tip', icon: '💡', title: '«Agua y hielo», pero «geografía e historia» · Why the difference?', text: 'La regla depende del **sonido**, no de la letra. «Historia» empieza por el sonido vocálico /i/: «geografía **e** historia». «Hielo» empieza por un diptongo cuyo primer sonido funciona como consonante: «agua **y** hielo». Por eso tampoco cambia «y» al principio de una pregunta: «¿**Y** Isabel?».', en: 'The rule follows sound, not spelling: historia starts with the vowel sound /i/, so e; hielo starts with a diphthong whose first sound behaves like a consonant, so y. And a question opening with y keeps it: ¿Y Isabel?' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué versión es correcta?', options: ['«El martes 4 de marzo, el gobernador visitó la imprenta.»', '«El martes 4 de Marzo, el Gobernador visitó la imprenta.»', '«El Martes 4 de Marzo, el Gobernador visitó la imprenta.»'], answer: 0, why: 'Días, meses y cargos van en minúscula. Ponerles mayúscula es uno de los errores más frecuentes en textos formales.', en: 'Days, months and offices: lower case.' },
            { prompt: 'La imprenta tiró «___ ejemplares».', options: ['12500,00', '12.500', '12 500'], answer: 2, why: 'Más de cuatro cifras: grupos de tres separados por un espacio, sin punto.', en: 'Group thousands with a space.' },
          ] },
        ] },
        { title: 'Dobletes y errores frecuentes · Doublets and frequent mistakes', mascot: '/brand/mascot/kneeling.webp', coach: 'Las dos valen; mezclarlas, no. Both are fine; mixing them is not.', blocks: [
          { kind: 'table', title: 'Variación admisible · Accepted variants', head: ['Pareja', 'Qué dice la norma'], rows: [
            ['[[México|teal]] / Méjico', 'las dos son correctas, pero se **recomienda «México»** (y mexicano), la grafía del propio país; la x se pronuncia como j'],
            ['[[video|violet]] / [[vídeo|violet]]', 'las dos: «vídeo» es lo habitual en España; «video», en América'],
            ['[[periodo|violet]] / [[período|violet]]', 'las dos'],
            ['[[quizá|violet]] / [[quizás|violet]]', 'las dos'],
            ['[[septiembre|violet]] / [[setiembre|violet]]', 'las dos'],
          ], note: 'Ante dos variantes válidas, el corrector respeta la elección del autor y solo exige **coherencia** dentro del texto. La hoja de estilo de una revista puede unificar, pero eso no convierte la otra forma en un error.' },
          { kind: 'mistakes', title: 'Lo que Lucía corrige siempre · What Lucía always corrects', items: [
            { wrong: 'El impresor fué detenido y dió su versión.', right: 'El impresor fue detenido y dio su versión.', why: '«Fue», «dio», «vio» y «fui» son monosílabos sin pareja diacrítica: nunca llevan tilde.' },
            { wrong: 'Sólo conocemos dos ejemplares.', right: 'Solo conocemos dos ejemplares.', why: 'No hay ambigüedad posible: la tilde no se justifica ni con la nota de 2023.' },
            { wrong: 'El ex director del archivo lo confirmó.', right: 'El exdirector del archivo lo confirmó.', why: 'Base de una palabra: el prefijo se une (norma de 2010).' },
            { wrong: 'Se imprimieron 3 ó 4 ediciones.', right: 'Se imprimieron 3 o 4 ediciones.', why: 'La tilde de «o» entre cifras se suprimió en 2010.' },
            { wrong: 'No sabemos donde se instaló la prensa.', right: 'No sabemos dónde se instaló la prensa.', why: 'Pregunta indirecta («¿Dónde se instaló?»): el interrogativo conserva la tilde.' },
            { wrong: '«…el vídeo del archivo…» y, dos páginas después, «…el video de la entrevista…».', right: '«Vídeo» en todo el texto, o «video» en todo el texto.', why: 'Las dos formas son válidas; mezclarlas en el mismo texto, no.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Un autor colombiano escribe «setiembre» en todo el artículo. ¿Qué hace la correctora?', options: ['Lo cambia por «septiembre»: «setiembre» es un error.', 'Lo respeta: es una variante admitida y el texto es coherente.', 'Lo pone en cursiva por ser un regionalismo.'], answer: 1, why: '«Setiembre» es una grafía válida. Si el autor la usa siempre, no hay nada que corregir (salvo que la hoja de estilo diga otra cosa).', en: 'An accepted variant, used consistently: leave it.' },
            { prompt: '¿Qué afirmación sobre «México» y «Méjico» es exacta?', options: ['Las dos son válidas y se recomienda «México».', 'Se recomienda «Méjico» en España.', '«Méjico» es incorrecta.'], answer: 0, why: 'La norma considera correctas las dos, pero recomienda la grafía con x, que es la del propio país.', en: 'Both valid; México is the recommended one.' },
          ] },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'La llamada sobre las pruebas', coach: 'Toca lo marcado. Tap the marked forms.',
      steps: [
        { title: 'Videollamada entre Valencia y Veracruz · A video call', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Mateo y tu alumno es Lucía. Después tu alumno toca cada forma marcada y dice si es norma, variante admitida o decisión de la revista.', self: 'Lee el diálogo en voz alta y toca cada forma marcada. ¿Norma, variante o estilo? (Norm, variant or house style?)' } },
          { kind: 'explore', title: 'Lucía y Mateo repasan las correcciones', setting: 'Martes, por la tarde en Valencia y por la mañana en Veracruz. Lucía Ferrer comparte en pantalla las segundas pruebas del artículo de Mateo Rivas.', lines: [
            { who: 'Lucía', text: 'Mateo, casi todos mis cambios son ortográficos, no de estilo. Empiezo por el más visible: te he quitado la tilde de «[[guion|teal]]» en todo el artículo.', en: 'She separates spelling corrections from style changes before going into detail.' },
            { who: 'Mateo', text: 'Ya lo vi. Yo siempre lo pronuncio en dos sílabas, gui-ón, y por eso le ponía tilde.', en: 'He explains his old habit: the pre-2010 rule let speakers who pronounced a hiatus write the accent.' },
            { who: 'Lucía', text: 'Antes era válido, pero desde 2010 «guion», «truhan» o «[[hui|teal]]» son monosílabos a efectos ortográficos, se pronuncien como se pronuncien.', en: 'The criterion is now conventional, not based on each speaker’s pronunciation.' },
            { who: 'Mateo', text: 'De acuerdo. ¿Y en la página cuatro? Puse «El impresor trabajaba [[sólo|orange]] de noche».', en: 'He points to a sentence where he used the accent on solo.' },
            { who: 'Lucía', text: 'Ahí hay un [[riesgo real de ambigüedad|violet]]: puede ser «únicamente de noche» o «sin ayuda». La nota de la RAE de 2023 te permitiría la tilde, pero te propongo reordenar: «[[Solo trabajaba de noche|teal]]».', en: 'She recognises the ambiguity and the 2023 allowance, but prefers a rewording that makes the accent unnecessary.' },
            { who: 'Mateo', text: 'Mejor así. Otra cosa: corregiste «[[ex director|orange]]» por «exdirector», pero dejaste «[[ex primer ministro|teal]]» separado. ¿No es incoherente?', en: 'He suspects inconsistency between two prefix decisions.' },
            { who: 'Lucía', text: 'No: el prefijo se une a una base de una palabra, pero se separa cuando afecta a varias, como «primer ministro».', en: 'She explains that the two spellings follow the same rule applied to different bases.' },
            { who: 'Mateo', text: '¿Y las cifras? Puse «[[12,500 ejemplares|orange]]» y «[[3.5 %|violet]]», como escribimos en México.', en: 'He asks about number formats that are habitual in his country.' },
            { who: 'Lucía', text: 'Los miles van con un [[espacio|teal]], sin coma: «12 500». El punto decimal es correcto, pero la revista usa la coma en todos sus artículos; es una [[decisión de la hoja de estilo|violet]], no un error tuyo.', en: 'She separates a norm (thousands with a space) from a house-style choice (decimal comma).' },
            { who: 'Mateo', text: '¿Y vas a cambiarme «[[video|violet]]» por «vídeo», o «México» por «Méjico»?', en: 'He worries that a Spanish editor will impose Spain’s spellings.' },
            { who: 'Lucía', text: 'Para nada. «Video» es tan correcta como «vídeo»; solo vigilo que no las mezcles. Y «[[México|teal]]» es la grafía recomendada.', en: 'She respects his variety and only asks for consistency.' },
            { who: 'Mateo', text: 'Perfecto. Te mando hoy la versión final, con los meses y los cargos en [[minúscula|teal]], como me marcaste.', en: 'He accepts the remaining corrections on capitalisation.' },
          ], notes: {
            'guion': 'Monosílabo ortográfico desde 2010: sin tilde. La tilde de «guión» es hoy una falta.',
            'hui': 'Como «fui»: monosílabo ortográfico, sin tilde.',
            'sólo': 'Tilde que el autor puso por costumbre. Aquí sí hay ambigüedad, así que la nota de 2023 la permitiría; aun así, se puede evitar reformulando.',
            'riesgo real de ambigüedad': 'La condición que fija la nota de la RAE de 2023 para admitir la tilde en el adverbio «solo». Sin ese riesgo, no se escribe.',
            'Solo trabajaba de noche': 'Con «solo» delante del verbo, la lectura natural es «únicamente»: ya no hace falta la tilde.',
            'ex director': 'Forma anterior a 2010. Hoy: «exdirector», unido.',
            'ex primer ministro': 'Correcto separado: el prefijo afecta a la base de dos palabras «primer ministro».',
            '12,500 ejemplares': 'La coma (o el punto) para los miles no se recomienda: con dos sistemas decimales en uso, se confunde con un decimal. Norma: «12 500».',
            '3.5 %': 'Punto decimal: válido, habitual en México. La revista lo cambia por coma solo por unificar.',
            'espacio': 'La Ortografía de 2010 recomienda agrupar las cifras de tres en tres con un espacio, no con punto ni coma.',
            'decisión de la hoja de estilo': 'Una revista puede elegir entre dos opciones válidas para todos sus textos. No es una corrección de un error.',
            'video': 'Variante válida, habitual en América; «vídeo» es lo habitual en España. Lo importante es la coherencia.',
            'México': 'Grafía recomendada (también «mexicano»). «Méjico» es correcta, pero no es la recomendada.',
            'minúscula': 'Meses, días y cargos (el gobernador, el presidente) se escriben con minúscula.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Por qué ponía Mateo tilde en «guión»?', options: ['Porque en México la norma es distinta.', 'Porque la revista se lo pidió.', 'Porque lo pronuncia en dos sílabas, algo que antes permitía la tilde.'], answer: 2, why: 'Lo dice él: «lo pronuncio en dos sílabas». Antes de 2010 eso justificaba la tilde; hoy la norma es común para todos.', en: 'Why did Mateo write guión with an accent?' },
            { prompt: '¿Cómo resuelve Lucía la frase de «solo»?', options: ['Pone la tilde, como permite la nota de 2023.', 'Reordena la frase para que no haya ambigüedad.', 'Sustituye «solo» por «solitario».'], answer: 1, why: 'Reconoce que la tilde sería admisible, pero prefiere «Solo trabajaba de noche», que no necesita tilde.', en: 'How does Lucía fix the solo sentence?' },
            { prompt: '¿Qué cambia Lucía por decisión de la revista y no por norma?', options: ['La tilde de «guión».', 'La coma de «12,500».', 'El punto decimal de «3.5 %».'], answer: 2, why: 'El punto decimal es válido; la coma es la opción de la revista. Las otras dos son correcciones de norma.', en: 'Which change is house style, not a correction?' },
          ] },
        ] },
        { title: 'El resto de las pruebas · The rest of the proofs', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'classify', title: '¿Corregir o respetar? · Correct or keep?', categories: [
            { id: 'corregir', label: 'Corregir: va contra la norma', tone: 'orange' },
            { id: 'respetar', label: 'Respetar: variante válida', tone: 'violet' },
          ], items: [
            { text: '«…durante el periodo colonial…» (y así en todo el artículo)', answer: 'respetar', why: '«Periodo» y «período» son válidas; el autor es coherente.' },
            { text: '«…el Gobernador del estado firmó la licencia…»', answer: 'corregir', why: 'Los cargos se escriben con minúscula: «el gobernador».' },
            { text: '«…quizás por miedo a la censura…»', answer: 'respetar', why: '«Quizá» y «quizás» son igualmente correctas.' },
            { text: '«…un truhán que falsificaba sellos…»', answer: 'corregir', why: '«Truhan» es monosílabo ortográfico desde 2010: sin tilde.' },
            { text: '«…el taller se trasladó en 1861…»', answer: 'respetar', why: 'Los años no llevan punto ni espacio: está bien escrito.' },
            { text: '«…éstos impresores trabajaban de noche…»', answer: 'corregir', why: 'Determinante demostrativo: nunca llevó tilde. Y como pronombre, tampoco hoy en la regla general.' },
          ] },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Corregir como un profesional', coach: 'Primero la norma, después el estilo. Norm first, then style.',
      steps: [
        { title: 'La tilde que decide · The accent that decides', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la frase del artículo con el hueco. Tu alumno elige la forma y explica la decisión con la palabra técnica (diacrítica, interrogativo indirecto, monosílabo ortográfico).', self: 'Elige la forma y explica en voz alta qué regla aplicas. (Name the rule you apply.)' } },
          { kind: 'choice', items: [
            { prompt: '«El censor quería la imprenta para ___.»', options: ['sí', 'si'], answer: 0, why: '«Para sí» es el pronombre reflexivo tónico: lleva tilde diacrítica.', en: 'sí as a reflexive pronoun after a preposition takes the accent.' },
            { prompt: '«Ignoramos ___ ejemplares sobrevivieron al incendio.»', options: ['cuantos', 'cuántos', 'cuánto'], answer: 1, why: 'Pregunta indirecta de cantidad («¿Cuántos sobrevivieron?»), en masculino plural, concordando con «ejemplares».', en: 'Indirect question about quantity, agreeing with ejemplares.' },
            { prompt: '«Los registros ___ no se han digitalizado.»', options: ['aun', 'aún'], answer: 1, why: 'Equivale a «todavía no se han digitalizado»: «aún», con tilde.', en: 'aún = todavía here.' },
            { prompt: '«Es necesario que el gobernador ___ su permiso.»', options: ['dé', 'dió', 'de'], answer: 0, why: 'Subjuntivo de «dar»: «dé». Sin tilde sería la preposición. «Dió» es un error (y otro tiempo).', en: 'Subjunctive of dar needs the diacritic accent.' },
            { prompt: '«Escribió a su hermano: “No sé ___ me pasa con este oficio”.»', options: ['qué', 'porqué', 'que'], answer: 0, why: 'Pregunta indirecta tras «no sé»: «¿Qué me pasa?». Lleva tilde.', en: 'After no sé, an indirect question: qué.' },
          ] },
        ] },
        { title: '¿Qué regla se aplica? · Which rule applies?', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'classify', title: 'Las notas al margen de Lucía · Lucía’s margin notes', categories: [
            { id: 'diacritica', label: 'Tilde diacrítica o interrogativo', tone: 'blue' },
            { id: 'cambio2010', label: 'Norma de 2010 (sin tilde, prefijos, cifras)', tone: 'teal' },
            { id: 'variante', label: 'Variante admitida: no se toca', tone: 'violet' },
          ], items: [
            { text: '«fie» sin tilde en «Nunca me fie de él».', answer: 'cambio2010', why: '«Fie» es monosílabo ortográfico: la norma de 2010 elimina la tilde.' },
            { text: '«Explicó cómo funcionaba la prensa».', answer: 'diacritica', why: 'Interrogativo en pregunta indirecta: «¿Cómo funcionaba?».' },
            { text: '«quizá» en lugar de «quizás».', answer: 'variante', why: 'Las dos formas son válidas.' },
            { text: '«antiesclavista», en una palabra.', answer: 'cambio2010', why: 'Prefijo unido a una base de una sola palabra.' },
            { text: '«Él lo sabía; el editor, no».', answer: 'diacritica', why: 'Pronombre «él» frente al artículo «el».' },
            { text: '«vídeo» en un artículo de una autora española.', answer: 'variante', why: 'Doblete admitido: ella elige «vídeo», como es habitual en España.' },
          ] },
        ] },
        { title: 'Frases del artículo · Sentences from the article', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'fix', title: '¿Está bien escrita? · Is it spelt correctly?', items: [
            { sentence: 'El 2 de Febrero de 1858, el Presidente visitó el taller.', ok: false, options: ['El 2 de Febrero de 1858, el presidente visitó el taller.', 'El 2 de febrero de 1858, el presidente visitó el taller.', 'El 2 de febrero de 1.858, el presidente visitó el taller.'], answer: 1, why: 'Meses y cargos con minúscula; el año se escribe sin punto.' },
            { sentence: 'El inventario registra 12 250 tipos de plomo y 4500 pliegos.', ok: true, why: 'Correcto: «12 250», de más de cuatro cifras, con espacio; «4500», de cuatro cifras, sin separar.' },
            { sentence: 'El taller tenía tinta, papel y hilo para encuadernar.', ok: false, options: ['El taller tenía tinta, papel u hilo para encuadernar.', 'El taller tenía tinta, papel e hilo para encuadernar.', 'El taller tenía tinta, papel, y hilo para encuadernar.'], answer: 1, why: '«Hilo» empieza por el sonido /i/: la conjunción pasa a «e». «U» solo sustituye a «o» ante /o/.' },
            { sentence: 'Se publicaron entre 30 ó 40 folletos anónimos.', ok: false, options: ['Se publicaron entre 30 y 40 folletos anónimos.', 'Se publicaron entre 30 o 40 folletos anónimos.', 'Se publicaron entre 30 ú 40 folletos anónimos.'], answer: 0, why: 'Dos errores: «entre» pide «y» («entre 30 y 40»), y en todo caso la «o» entre cifras ya no lleva tilde.' },
            { sentence: 'El ex alcalde del puerto financió la segunda edición.', ok: false, options: ['El ex-alcalde del puerto financió la segunda edición.', 'El Ex alcalde del puerto financió la segunda edición.', 'El exalcalde del puerto financió la segunda edición.'], answer: 2, why: 'Base de una palabra («alcalde»): el prefijo se une. El guion solo se usa ante mayúscula o cifra.' },
          ] },
        ] },
        { title: 'Mensajes con Mateo · Messages with Mateo', blocks: [
          { kind: 'chat-fill', title: 'Mateo le escribe a Lucía la noche antes de la entrega · The night before the deadline', lines: [
            { who: 'Mateo', text: 'Lucía, una duda rápida sobre el título del tercer capítulo.' },
            { who: 'Lucía', text: 'Dime.' },
            { who: 'Mateo', text: '«Impresores, censores ___ historiadores». ¿Cuál va?', options: ['e', 'y', 'u'], answer: 0, why: '«Historiadores» empieza por el sonido /i/: la conjunción pasa a «e».' },
            { who: 'Lucía', text: 'Exacto. Y en la nota 12 escribiste «prensas de madera y hierro». Ahí se mantiene «y», porque «hierro» empieza por diptongo.' },
            { who: 'Mateo', text: 'Entendido. ¿Y en la conclusión? «Todavía no sabemos ___ el taller cerró en 1862.»', options: ['porqué', 'porque', 'por qué'], answer: 2, why: 'Pregunta indirecta tras «no sabemos»: «¿Por qué cerró?». Dos palabras, con tilde.' },
            { who: 'Lucía', text: 'Exacto, y es una pregunta indirecta aunque no lleve signos.' },
            { who: 'Mateo', text: 'En la frase anterior puse: «Él mismo lo admitió en una carta a ___ hermano».', options: ['sú', 'su'], answer: 1, why: 'Posesivo átono: «su», sin tilde. La lista de diacríticas no incluye «su».' },
            { who: 'Lucía', text: 'Perfecto, así está bien.' },
            { who: 'Mateo', text: 'Última: «según el ___ director general del archivo».', options: ['ex', 'ex-', 'exdirector'], answer: 0, why: 'La base son dos palabras («director general»): el prefijo va separado, como en «ex primer ministro». «Exdirector general» uniría el prefijo solo a «director».' },
          ] },
        ] },
        { title: 'Construye frases correctas · Build correct sentences', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'build', title: 'Ordena las piezas · Put the pieces in order', items: [
            { tiles: ['Nadie', 'sabe', 'por qué', 'firmaba', 'solo', 'con iniciales.'], accept: ['Nadie sabe por qué firmaba solo con iniciales.', 'Nadie sabe por qué solo firmaba con iniciales.'], en: 'Nobody knows why he signed only with his initials: indirect question plus solo without an accent.' },
            { tiles: ['El', 'ex primer ministro', 'visitó', 'la imprenta', 'en septiembre.'], accept: ['El ex primer ministro visitó la imprenta en septiembre.'], en: 'The former prime minister visited the press in September: prefix separated before a two-word base, month in lower case.' },
            { tiles: ['Aun así,', 'el taller', 'imprimió', '12 500', 'ejemplares.'], accept: ['Aun así, el taller imprimió 12 500 ejemplares.'], en: 'Even so, the workshop printed 12,500 copies: aun = incluso, thousands with a space.' },
          ] },
        ] },
        { title: 'Reescribe con la norma actual · Rewrite to the current norm', blocks: [
          { kind: 'rewrite', title: 'Actualiza la ortografía · Update the spelling', items: [
            { prompt: 'El ex propietario vendió la prensa.', instruction: 'Escribe el prefijo según la norma de 2010.', accept: ['El expropietario vendió la prensa'] },
            { prompt: 'La colección reúne 18.400 impresos.', instruction: 'Separa los miles como recomienda la Ortografía.', accept: ['La colección reúne 18 400 impresos'] },
            { prompt: 'Tipógrafos / impresores · literatura / historia', instruction: 'Une cada pareja con la conjunción correcta, en este formato: «tipógrafos … impresores; literatura … historia».', accept: ['Tipógrafos e impresores; literatura e historia', 'Tipógrafos e impresores literatura e historia'] },
            { prompt: 'El impresor trabajaba solo de noche.', instruction: 'Reformula para que solo signifique «únicamente», sin usar tilde: empieza por «Solo» o usa «únicamente».', accept: ['Solo trabajaba de noche el impresor', 'El impresor solo trabajaba de noche', 'El impresor trabajaba únicamente de noche', 'El impresor únicamente trabajaba de noche', 'Solo de noche trabajaba el impresor', 'Únicamente de noche trabajaba el impresor'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno revisa un texto suyo antiguo (un correo, un trabajo) y busca al menos tres formas que hoy corregiría: una tilde de «solo», un «ex» separado, un mes con mayúscula, unos miles con punto…' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'La respuesta de Mateo', coach: 'Escucha qué acepta y qué defiende. Listen to what he accepts and what he defends.',
      steps: [
        { title: 'El mensaje de voz · The voice message', blocks: [
          { kind: 'guide', text: { teacher: 'Escuchan el audio una vez para la idea general y otra para los detalles. Tu alumno separa en dos columnas lo que Mateo acepta como norma y lo que defiende como variante suya.', self: 'Escucha una vez para la idea general y otra para los detalles. Haz dos columnas: lo que acepta y lo que defiende. (What he accepts vs what he defends.)' } },
          { kind: 'listen', title: 'Mateo responde a las correcciones', channel: 'MENSAJE DE VOZ · MATEO RIVAS', src: '/audio/grammar-live/532.mp3',
            before: 'Mateo ha revisado las correcciones de Lucía. ¿Qué crees que aceptará y qué querrá mantener? (What will he accept, and what will he keep?)',
            gist: { prompt: '¿Qué hace Mateo en el mensaje? · What does Mateo do in the message?', options: ['Rechaza todas las correcciones porque escribe como en México.', 'Acepta las correcciones de norma, pide mantener sus variantes válidas y consulta una duda.', 'Pide a Lucía que reescriba la conclusión.'], answer: 1, why: 'Acepta «guion», «solo» y los miles con espacio, defiende «video» y «México», acepta la coma de la revista y pregunta por «por qué».', en: 'He accepts the norm, keeps his valid variants and checks one doubt.' },
            details: [
              { prompt: '¿Por qué acepta «guion» sin tilde?', options: ['Porque desde 2010 se considera monosílabo, como «hui».', 'Porque la revista lo exige por estilo.', 'Porque ahora lo pronuncia en una sílaba.'], answer: 0, why: '«Desde 2010 se considera monosílabo, igual que hui».', en: 'Why does he accept guion without an accent?' },
              { prompt: '¿Cómo ha resuelto la frase del impresor?', options: ['Quitando la palabra «solo».', 'Con tilde en «sólo».', 'Reordenándola: «solo trabajaba de noche».'], answer: 2, why: '«Reordené la frase del impresor para que quede “solo trabajaba de noche”, sin tilde y sin ambigüedad».', en: 'How did he fix the sentence about the printer?' },
              { prompt: '¿Qué dice sobre el signo decimal?', options: ['Que quiere usar las dos formas.', 'Que el punto es un error y lo corrige.', 'Que en México usan el punto, pero acepta la coma de la revista.'], answer: 2, why: '«Aunque en México usamos el punto decimal, entiendo que la revista prefiere la coma».', en: 'What does he say about the decimal sign?' },
              { prompt: '¿Por qué cree que «por qué» va separado y con tilde?', options: ['Porque es una pregunta indirecta.', 'Porque expresa causa.', 'Porque va después de una coma.'], answer: 0, why: 'Lo dice él: «porque es una pregunta indirecta» («¿Por qué dejaron de firmar?»).', en: 'Why does he think por qué is two words with an accent?' },
            ],
            transcript: 'Lucía, buenas tardes, habla Mateo Rivas. Ya revisé las segundas pruebas y te confirmo los cambios. Acepto [[guion|teal]] sin tilde: tienes razón, desde 2010 se considera monosílabo, igual que [[hui|teal]], y yo seguía con la norma de cuando estudiaba. En la página cuatro reordené la frase del impresor para que quede «[[solo trabajaba de noche|teal]]», sin tilde y sin ambigüedad; me gusta más así que con la tilde. Los miles, como dices, [[con un espacio|teal]]: doce mil quinientos ejemplares, sin coma. Y aunque en México usamos el [[punto decimal|violet]], entiendo que la revista prefiere la coma en todos los artículos, así que no hay problema. Lo que sí te pido es que mantengas [[video|violet]], sin tilde, en todo el texto, porque es la forma que uso yo y es igual de correcta, y que no cambies [[México|teal]] en ningún caso. Ah, y una duda que [[aún|blue]] tengo: en la conclusión puse «no sé [[por qué|blue]] los impresores dejaron de firmar». ¿Ese «por qué» va separado y con tilde? Yo creo que sí, porque es una pregunta indirecta. Si me lo confirmas, te mando hoy mismo la versión definitiva. Gracias, y un abrazo a todo el equipo.',
            reply: { teacher: 'Tu alumno responde en voz alta como Lucía a la duda de Mateo; tú compruebas que la explicación de «por qué» es exacta y le preguntas qué cambiaría si la frase fuera «Dejaron de firmar porque temían la censura».', self: 'Responde en voz alta a la duda de Mateo como si fueras Lucía: ¿tiene razón con «por qué»? Explica la regla en una o dos frases. (Answer his doubt and explain the rule.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Defender una corrección', coach: 'Explica la norma sin imponer tu variedad. Explain the norm without imposing your variety.',
      steps: [
        { title: 'Situaciones de corrector · Proofreading situations', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces de autor que defiende sus formas y a veces se equivoca a propósito. Tu alumno argumenta como corrector: distingue norma, variante y hoja de estilo, y cita el cambio de 2010 cuando corresponde.', self: 'Responde cada tarjeta en voz alta. Después comprueba: ¿has distinguido lo que es error de lo que es elección? (Did you separate errors from choices?)' } },
          { kind: 'talk', cards: [
            { q: 'Un autor veterano insiste: «Yo escribo sólo con tilde siempre, como me enseñaron». ¿Qué le dices? · An older author insists on always writing sólo.', followUps: ['¿Y si la frase es realmente ambigua?', '¿Qué ganarías reformulando?'], phrases: ['[[desde 2010|teal]], …', 'la nota de 2023 [[solo la admite si|violet]]…', 'te propongo reformular: …'], hint: 'Regla general sin tilde; tilde posible solo con riesgo de ambigüedad; mejor aún, reordenar.', example: 'Entiendo la costumbre, pero desde 2010 la regla general es escribirlo sin tilde. La nota de la RAE de 2023 admite la tilde solo si quien escribe ve un riesgo real de ambigüedad, y en «Solo conocemos dos ejemplares» no lo hay. Cuando sí lo haya, te propongo reordenar la frase: queda más claro que con la tilde.' },
            { q: 'Una autora de Argentina escribe «3,5 %» y otro de México «3.5 %» en el mismo número de la revista. ¿Cómo lo resuelves? · Two authors, two decimal signs, one issue.', followUps: ['¿Alguno de los dos está mal?', '¿Quién decide la forma final?'], phrases: ['[[las dos son válidas|violet]]…', '[[la hoja de estilo|violet]] fija…', 'para que el número sea coherente…'], hint: 'Ninguno se equivoca: la Ortografía admite los dos signos; la revista elige uno por coherencia.', example: 'Ninguno de los dos está mal: la Ortografía admite la coma y el punto decimales. Pero en un mismo número conviene unificar, así que aplico la hoja de estilo de la revista, que fija la coma, y se lo explico al autor mexicano para que no lo tome como una corrección.' },
            { q: 'Explica a un colega por qué «guion», «truhan» o «hui» ya no llevan tilde, aunque él las pronuncie en dos sílabas. · Explain the 2010 rule on orthographic monosyllables.', followUps: ['¿Qué ventaja tiene una regla común para todos?', '¿Por qué «río» sí lleva tilde y «rio» no?'], phrases: ['[[a efectos ortográficos|teal]], …', '[[se pronuncie como se pronuncie|teal]]', 'en cambio, «río»…'], hint: 'La convención trata como diptongo ciertas combinaciones de vocales, sin depender de cada hablante.', example: 'Porque desde 2010 se consideran monosílabos a efectos ortográficos, se pronuncien como se pronuncien. Antes cada uno decidía según su pronunciación, y un mismo texto podía tener «guion» y «guión». En cambio, «río» lleva tilde porque la tilde marca el hiato de la í tónica.' },
            { q: 'Un estudiante te entrega: «El Lunes 5 de Octubre el Rector y la Decana presentaron el libro». Corrígelo y explícaselo. · Correct and explain capitalisation.', followUps: ['¿Cuándo llevaría mayúscula «Universidad»?', '¿Y el título del libro?'], phrases: ['[[van en minúscula|teal]]…', '[[en cambio|teal]], el nombre de la institución…'], hint: 'Días, meses y cargos en minúscula; nombres propios de instituciones con mayúscula; en los títulos de obras, solo la primera palabra.', example: 'Quedaría así: «El lunes 5 de octubre, el rector y la decana presentaron el libro». Los días, los meses y los cargos van en minúscula. En cambio, «Universidad» llevaría mayúscula en un nombre propio, como «Universidad de Valdeoro», y en el título del libro solo la primera palabra.' },
            { q: '¿Qué cambio de la Ortografía de 2010 te parece más útil y cuál más discutible? Argumenta. · Which 2010 change do you find most useful, and which most debatable?', followUps: ['¿Te costó adaptarte a alguno?', '¿Crees que la nota de 2023 sobre «solo» fue un acierto?'], phrases: ['[[me parece un acierto que|teal]]…', '[[lo que me resulta más discutible es|violet]]…', 'aun así, …'], hint: 'Da tu opinión con argumentos: claridad, coherencia, costumbre, ambigüedad.', example: 'Me parece un acierto que el «ex» se escriba unido, porque funciona igual que «anti» o «pre». Lo que me resulta más discutible es la tilde de «solo»: mucha gente la seguía usando, y la nota de 2023 reconoce que en algunos casos ayuda. Aun así, casi siempre basta con reordenar la frase.' },
            { q: 'Tu empresa publica un manual para España y América. ¿Qué variantes eliges y cómo garantizas la coherencia? · Choose variants for a pan-Hispanic manual.', followUps: ['¿«Video» o «vídeo»?', '¿Qué harías con los números?'], phrases: ['[[elegimos|violet]]… [[y la mantenemos|violet]]…', 'para un público mixto, …'], hint: 'Decide una forma por pareja, regístrala en una hoja de estilo y aplícala siempre.', example: 'Elegimos «video», que es la forma habitual en América y se entiende sin problema en España, y la mantenemos en todo el manual. Para los números, miles con espacio, que sirve en todos los países, y un solo signo decimal, fijado en la hoja de estilo.' },
          ], swap: { teacher: 'Al final cambian los papeles: tu alumno escribe tres frases con errores ortográficos escondidos y una variante válida; tú corriges en voz alta y tu alumno comprueba si has distinguido el error de la variante.', self: 'Escribe tres frases con un error escondido y una con una variante válida. Mañana, corrígelas sin mirar la clase. (Write traps for yourself and correct them tomorrow.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'La hoja de estilo', coach: 'Norma clara, opciones explícitas. Clear norm, explicit options.',
      steps: [
        { title: 'Criterios ortográficos para autores · Spelling guidelines for authors', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Después comparan el texto con la clase: ¿cada criterio separa lo que es norma de lo que es una opción de la revista?', self: 'Escribe tus criterios y toca «Revisar mi texto». Después comprueba que distingues norma, variante y estilo. (Separate norm, variant and style.)' } },
          { kind: 'write', title: 'Criterios ortográficos del próximo número · Guidelines for the next issue', situation: 'Lucía te pide que redactes la sección «Criterios ortográficos» de la hoja de estilo de la Revista de Historia del Libro, que recibirán todos los autores del próximo número, de España y de América. (Write the spelling section of the journal’s style sheet for authors from Spain and Latin America.)', task: [
            'Cita la referencia: la Ortografía de 2010 y la nota de la RAE sobre «solo». (Name the reference works.)',
            'Explica al menos tres normas de 2010 con un ejemplo cada una: tildes, prefijos, cifras… (At least three rules with examples.)',
            'Indica las mayúsculas y minúsculas de meses y cargos. (Capitalisation of months and offices.)',
            'Separa claramente lo que es norma de lo que es una opción de la revista o una variante admitida. (Norm vs option.)',
            'Escribe tú mismo el texto sin errores: será el modelo para los autores. (It must be error-free.)',
          ], starters: ['La revista sigue la Ortografía de la lengua española (2010)…', 'Se escriben sin tilde…', 'Los prefijos…', 'Los números de más de cuatro cifras…', 'Son válidas las dos formas de…', 'Por coherencia, la revista…'],
            words: ['sin tilde', 'monosílabo', 'riesgo de ambigüedad', 'unido a la base', 'separado', 'minúscula', 'espacio', 'signo decimal', 'variante admitida', 'coherencia'],
            model: 'Criterios ortográficos. La revista sigue la Ortografía de la lengua española (2010) y la nota de la RAE de 2023 sobre «solo». En consecuencia, «guion», «truhan» o «hui» se escriben sin tilde, porque se consideran monosílabos. El adverbio «solo» y los demostrativos también van sin tilde; si una frase con «solo» resulta ambigua, preferimos reformularla, aunque la tilde se admite cuando el autor ve un riesgo real de ambigüedad. Los prefijos se escriben unidos a la base (exdirector, antiesclavista), pero separados ante una base de varias palabras (ex primer ministro). Los meses, los días y los cargos van en minúscula: «el 3 de septiembre», «el presidente», «la rectora». Los números de más de cuatro cifras se separan con un espacio (12 500), y la «o» entre cifras no lleva tilde (3 o 4). Por coherencia entre artículos, el signo decimal de la revista es la coma (3,5 %), aunque el punto también es correcto. Por último, respetamos las variantes admitidas, como «video» o «vídeo» y «periodo» o «período»: cada autor elige una y la mantiene en todo su texto. Para el país, recomendamos «México».',
            minWords: 120,
            checks: [
              { label: 'La referencia a la Ortografía de 2010', pattern: '(?<!\\p{L})ortograf[íi]a(?!\\p{L})[\\s\\S]{0,60}2010', tip: 'Cita la obra de referencia: «la Ortografía de la lengua española (2010)».' },
              { label: 'Una regla sobre lo que va «sin tilde»', pattern: '(?<!\\p{L})sin\\s+tilde(?!\\p{L})', tip: 'Explica qué palabras se escriben sin tilde desde 2010 (guion, solo…).' },
              { label: 'Una cifra con los miles separados por espacio', pattern: '(?<![\\d.,])\\d{1,3}\\s\\d{3}(?![\\d.,])', tip: 'Da un ejemplo de número con espacio: «12 500».' },
              { label: 'Mención de la minúscula', pattern: '(?<!\\p{L})min[úu]scula', tip: 'Indica qué va en minúscula (meses, días, cargos).' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})(?:fué|dió|vió|tí|fuí)(?!\\p{L})', why: 'Estos monosílabos nunca llevan tilde: **fue**, **dio**, **vio**, **ti**, **fui**.' },
              { pattern: '(?<!\\p{L})(?:guión|truhán)(?!\\p{L})', why: 'Desde 2010 se escriben sin tilde: **guion**, **truhan**. Si la citas como forma antigua, ignora este aviso.' },
              { pattern: '(?<!\\p{L})ex\\s+(?:director|directora|jefe|jefa|presidente|presidenta|alumno|alumna|alcalde|alcaldesa|rector|rectora|ministro|ministra)(?!\\p{L})', why: 'Con base de una palabra, el prefijo va unido: **exdirector**, **exministra**.' },
              { pattern: '(?<![\\d.,])\\d{1,3}\\.\\d{3}(?![\\d.,])', why: 'Los miles no se separan con punto: escribe **12 500**. (Si es un decimal con punto, ignora este aviso.)' },
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
            { tone: 'blue', label: 'TILDE QUE DISTINGUE', formula: 'tú/tu · él/el · mí/mi · sí/si · té/te · dé/de · sé/se · más/mas · aún/aun · qué, cómo, por qué en preguntas indirectas', example: 'Él no sabe qué quieres que te dé.', caption: 'lista cerrada: ti, fue, dio, vio, nunca', en: 'a closed list of pairs; other monosyllables never take an accent' },
            { tone: 'teal', label: 'NORMA DE 2010', formula: 'solo y demostrativos sin tilde · guion, truhan, hui sin tilde · 3 o 4 · exdirector / ex primer ministro · 12 500', example: 'El exdirector solo conservó el guion.', caption: 'tilde en «solo» únicamente con riesgo real de ambigüedad (RAE, 2023)', en: 'the 2023 note allows the accent on solo only when the writer sees real ambiguity' },
            { tone: 'orange', label: 'MAYÚSCULAS Y CONJUNCIONES', formula: 'meses, días y cargos en minúscula · e ante /i/ · y ante hie- · u ante /o/', example: 'En marzo llegaron al puerto padre e hijo.', caption: 'las mayúsculas también llevan tilde', en: 'capitals keep their accents too' },
            { tone: 'violet', label: 'VARIACIÓN ADMISIBLE', formula: 'video/vídeo · periodo/período · quizá/quizás · septiembre/setiembre · coma/punto decimal · México (recomendada)', example: 'Un video del periodo colonial, siempre así.', caption: 'se elige una y se mantiene', en: 'choose one form and keep it throughout' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Ante cada cambio, pregúntate: ¿es **norma** (se corrige siempre), **variante admitida** (se respeta y solo se exige coherencia) o **hoja de estilo** (se unifica, pero no es un error)? Un buen corrector aplica la norma con rigor y no confunde su propia variedad con la norma.', en: 'For every change ask: is it the norm (always correct it), an accepted variant (respect it, demand consistency) or house style (unify it, but it is not an error)? A good editor applies the norm strictly and never mistakes their own variety for the standard.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco casos, sin ayuda · Five cases, no help', items: [
            { prompt: '¿Qué frase está bien escrita?', options: ['«Le pide que le dé el té a el.»', '«Le pide que le dé el té a él.»', '«Le pide que le de el te a él.»'], answer: 1, why: '«Dé» (verbo), «té» (bebida) y «él» (pronombre) llevan tilde diacrítica.', en: 'Three diacritic accents: dé, té, él.' },
            { prompt: '«No explicó ___ se negó a firmar.»', options: ['por qué', 'por que', 'porque'], answer: 0, why: 'Pregunta indirecta: «¿Por qué se negó?».', en: 'Indirect question: por qué.' },
            { prompt: '¿Cuál sigue la norma actual?', options: ['«Se rió del ex alcalde.»', '«Se rio del exalcalde.»', '«Se rio del ex-alcalde.»'], answer: 1, why: '«Rio» es monosílabo ortográfico y el prefijo va unido a una base de una palabra.', en: 'rio without an accent; prefix joined.' },
            { prompt: '¿Qué afirmación sobre la nota de la RAE de 2023 es exacta?', options: ['Vuelve a hacer obligatoria la tilde en «sólo».', 'Permite tildar el adverbio «solo» cuando quien escribe ve riesgo de ambigüedad.', 'Prohíbe la tilde en cualquier caso.'], answer: 1, why: 'La regla general sigue siendo sin tilde; la nota admite la tilde solo ante un riesgo real de ambigüedad.', en: 'The 2023 note: optional accent only with real ambiguity.' },
            { prompt: 'Un autor peruano escribe «setiembre» y «quizás» en todo su texto. ¿Qué haces?', options: ['Las respetas: son variantes válidas y es coherente.', 'Corriges las dos formas.', 'Corriges solo «setiembre».'], answer: 0, why: 'Las dos son formas admitidas; el texto es coherente. Solo la hoja de estilo podría unificarlas.', en: 'Accepted variants, used consistently.' },
          ] },
        ] },
        { title: 'Un texto nuevo · A new text', mascot: '/brand/mascot/kneeling.webp', coach: 'Ahora, la cartela de un museo. Now, a museum label.', blocks: [
          { kind: 'lead', text: 'Rocío Medina prepara las cartelas de una exposición sobre la imprenta en un museo universitario. Te pasa tres frases que vienen de un catálogo antiguo para que las actualices.', en: 'Rocío is preparing the labels for an exhibition on printing at a university museum, and asks you to update three sentences taken from an old catalogue.' },
          { kind: 'rewrite', title: 'Las cartelas · The labels', items: [
            { prompt: 'Prensa donada por el ex rector de la universidad.', instruction: 'Actualiza el prefijo según la norma de 2010.', accept: ['Prensa donada por el exrector de la universidad'] },
            { prompt: 'Tirada aproximada: 25.000 ejemplares.', instruction: 'Separa los miles como recomienda la Ortografía.', accept: ['Tirada aproximada 25 000 ejemplares'] },
            { prompt: 'Tinta y hierro · grabados y ilustraciones', instruction: 'Escribe las dos parejas con la conjunción correcta, en este formato: «tinta … hierro; grabados … ilustraciones».', accept: ['Tinta y hierro; grabados e ilustraciones', 'Tinta y hierro grabados e ilustraciones'] },
          ] },
        ] },
        { title: 'Ampliación · Casos finos de la tilde y la mayúscula · Extension', mascot: '/brand/mascot/portrait.webp', coach: 'Opcional. Optional.', blocks: [
          { kind: 'lead', text: 'Para estudiantes fuertes o si queda tiempo. La tilde puede cambiar el significado de toda la oración: «**No tengo qué** comer» (no tengo nada que comer) frente a «**No tengo que** comer» (no estoy obligado). **Aun cuando** equivale a «aunque» y no lleva tilde. Y los nombres de disciplinas van en minúscula en el uso general («la historia del libro me apasiona»), pero con mayúscula cuando nombran una asignatura, una cátedra o una facultad en un contexto académico («me matriculé en Historia del Libro»).', en: 'For strong students or spare time. An accent can change the meaning of a whole sentence: no tengo qué comer (I have nothing to eat) vs no tengo que comer (I don’t have to eat). Aun cuando means aunque and has no accent. Academic disciplines are lower case in general use but capitalised as the names of courses, chairs or faculties.' },
          { kind: 'choice', title: 'Casos más finos · Finer cases', items: [
            { prompt: 'En una carta de 1860, un impresor arruinado escribe que su familia no tiene nada para comer. ¿Cómo debe transcribirse?', options: ['«No tenemos que comer.»', '«No tenemos porqué comer.»', '«No tenemos qué comer.»'], answer: 2, why: '«Qué» es aquí un interrogativo indirecto (= nada que comer). Sin tilde significaría «no estamos obligados a comer».', en: 'With qué: nothing to eat; without it: no obligation to eat.' },
            { prompt: '«___ hubiera tenido licencia, la censura lo habría vigilado.»', options: ['Aun cuando', 'Aún', 'Aún cuando'], answer: 0, why: '«Aun cuando» equivale a «aunque»: el «aun» es átono y va sin tilde.', en: 'aun cuando = aunque: no accent.' },
            { prompt: '¿Qué frase sigue la norma de las mayúsculas?', options: ['«Imparte historia del libro en la Facultad de Letras.»', '«Imparte Historia del Libro en la facultad de Letras.»', '«Imparte Historia del Libro en la Facultad de Letras.»'], answer: 2, why: 'La asignatura y el nombre propio de la facultad llevan mayúscula en este contexto académico.', en: 'Course name and faculty name are capitalised here.' },
          ] },
          { kind: 'teacher', text: 'Paso opcional: solo si queda tiempo o para estudiantes fuertes. Tu alumno busca en un texto antiguo (un libro o un periódico de antes de 2010) tres formas que hoy se escribirían de otra manera y explica qué norma cambió.' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 233 · Sintaxis textual: cohesión anafórica de largo alcance', text: 'Hoy has revisado la corrección de la palabra y la coherencia de las variantes dentro de un texto. En la clase 233 subes al nivel del texto completo: cómo se retoma una idea muchos párrafos después («esa objeción, expuesta antes, reaparece al final») sin que el lector se pierda.', en: 'Today you checked the correctness of words and the consistency of variants across a text. Class 233 moves up to the whole text: how to pick up an idea many paragraphs later without losing the reader.', href: '/gramatica/sintaxis-textual-cohesion-anaforica-de-largo', label: 'Ir a la clase 233' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Qué diferencia hay entre corregir “guión” y cambiar “3.5” por “3,5”?». Respuesta esperada: lo primero es una norma (desde 2010, sin tilde); lo segundo, una decisión de la hoja de estilo entre dos formas válidas. Tarea: los criterios ortográficos de Escribir.' },
        ] },
      ],
    },
  ],
};
