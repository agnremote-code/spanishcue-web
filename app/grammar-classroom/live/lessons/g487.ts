import type { LiveLesson } from '../types';

/**
 * Lesson 487 · C1 · Elipsis verbal, nominal y anafórica avanzadas (course unit G187).
 * Builds on G124 (lesson 114: la verde, la de Ana, la que…, el mío) and G186 (lesson 118:
 * ambiguity when an ellipsis has several candidates). C1 step: nominal ellipsis with the
 * determiners that change form (uno nuevo, alguno, el tercero, el mío) and «el agua fría →
 * la fría»; verbal ellipsis and its polarity markers (también, tampoco, sí, no, sí que, a mí
 * también), gapping with the comma that marks the missing verb (Yo acepto la segunda; ella,
 * la primera), modal ellipsis (Puedo, pero…) and the absence of an English-style «do»;
 * clausal answers (Creo que sí, Espero que no, Parece que no, Dijo que sí); pro-forms «lo»
 * with ser / estar / parecer (Lo es, lo estoy: invariable) and «hacerlo» for actions only;
 * textual anaphora (este / aquel, el primero, este último, dicho, tal, respectivamente) and
 * the DPD's advice against «el mismo» as a mere pronoun; ambiguity created by ellipsis
 * (más que Irene / más que a Irene) and how to repair it. Ampliación: sendos, hacer lo
 * propio, ello.
 * Scene: the translation cooperative Tres Orillas. Irene Ferrer (coordinator), Gonzalo Ruiz
 * (editor, writes the minutes), Nuria Paz (translator) and Hugo Benítez (layout) split two
 * commissions: essays for a publisher in Quito and a catalogue for a museum in Valparaíso.
 * Escuchar: Nuria's voice note to Gonzalo (es-CO-SalomeNeural, tú).
 * Escribir: the minutes of the meeting, without repetition and without losing clarity.
 */
export const lesson: LiveLesson = {
  id: 487,
  level: 'C1',
  title: 'Elipsis verbal, nominal y anafórica avanzadas',
  subtitle: 'Evitar repeticiones sin perder claridad: el de Ana, uno nuevo, Yo tampoco, Creo que sí, Lo es, hacerlo, respectivamente.',
  legend: [
    { tone: 'blue', label: 'ELIPSIS NOMINAL · falta un nombre (el de Ana · la que te dije · uno nuevo)' },
    { tone: 'orange', label: 'ELIPSIS VERBAL · falta un verbo o una oración (Yo tampoco · Ana, Medicina · Creo que sí)' },
    { tone: 'violet', label: 'PROFORMAS · lo y hacerlo (Lo es · lo estoy · lo hará)' },
    { tone: 'teal', label: 'ANÁFORA TEXTUAL · este, aquel, el primero, este último, dicho, tal, respectivamente' },
  ],
  optionNotes: {
    'Yo también': '«También» confirma una afirmación. Si la frase anterior es negativa y coincides con ella, se dice «tampoco».',
    'Creo sí': 'Con «creer», «esperar», «parecer» o «decir», la respuesta corta necesita «que»: Creo que sí.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Decir lo justo sin perder al lector', coach: 'Lo que ya se dijo no se repite: se recupera. What was said is recovered, not repeated.',
      steps: [
        { title: 'Un acta que nadie quiere leer · Minutes nobody wants to read', blocks: [
          { kind: 'lead', text: 'Irene Ferrer coordina **Tres Orillas**, una cooperativa de traducción. Ayer el equipo estudió dos encargos: el de una editorial de Quito (cinco ensayos) y el de un museo de Valparaíso (el catálogo y las audioguías de una exposición). Gonzalo, el editor, redactó el acta. Es correcta, pero repite cada nombre y cada verbo. Irene la reescribe con una sola idea: **lo que ya se ha dicho se recupera, no se repite**, siempre que el lector sepa qué se recupera.', en: 'Irene Ferrer runs Tres Orillas, a translation cooperative. Yesterday the team discussed two commissions: one from a publisher in Quito and one from a museum in Valparaíso. Gonzalo, the editor, wrote the minutes. They are correct, but every noun and every verb is repeated. Irene rewrites them on one principle: what has already been said is recovered, not repeated, as long as the reader knows what is being recovered.' },
          { kind: 'guide', text: { teacher: 'Tu alumno lee las dos versiones en voz alta y señala cada palabra que desaparece en la segunda. Después explica cómo sabe el lector qué falta.', self: 'Lee las dos versiones y marca qué desaparece en la segunda. ¿Cómo sabe el lector qué falta? (Find what disappears and how the reader still understands it.)' } },
          { kind: 'compare', title: 'Dos versiones del acta · Two versions of the minutes', columns: [
            { tone: 'neutral', label: 'CON REPETICIONES', sentence: 'La editorial propone traducir cinco ensayos. El museo propone traducir un catálogo. Irene acepta la propuesta del museo. Nuria acepta la propuesta de la editorial. Hugo no puede maquetar en marzo. Gonzalo no puede maquetar en marzo.', idea: 'Todo está claro, pero el texto pesa: «propone», «propuesta» y «maquetar» se repiten sin necesidad.', en: 'Everything is clear, but the text is heavy: the same verbs and nouns come back again and again for no reason.' },
            { tone: 'blue', label: 'SIN REPETICIONES', sentence: 'La editorial propone traducir cinco ensayos; [[el museo, un catálogo|orange]]. Irene acepta [[la segunda|teal]] propuesta; [[Nuria, la primera|orange]]. Hugo no puede maquetar en marzo, y Gonzalo [[tampoco|orange]].', idea: 'Las comas marcan verbos omitidos; «la segunda» y «la primera» ordenan las propuestas; «tampoco» recupera toda una oración negativa.', en: 'The commas stand for missing verbs, “la segunda / la primera” point back to the proposals in order, and “tampoco” recovers a whole negative clause.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'En «Irene acepta la segunda propuesta; Nuria, la primera», ¿qué indica la coma después de «Nuria»?', options: ['Una simple pausa para respirar, sin valor gramatical.', 'Que falta el verbo «acepta», que se recupera de la oración anterior.', 'Que «Nuria» es una aposición explicativa.'], answer: 1, why: 'Es la coma que marca un verbo omitido: Nuria (acepta) la primera.', en: 'In “Irene takes the second proposal; Nuria, the first”, what does the comma after “Nuria” signal?' },
            { prompt: '«La segunda» propuesta es…', options: ['la del museo de Valparaíso.', 'la de la editorial de Quito.', 'una tercera propuesta que no se menciona.'], answer: 0, why: 'Las propuestas se mencionan en orden: primero la editorial y después el museo.', en: '“The second” proposal is…' },
          ] },
        ] },
        { title: 'Elipsis nominal: el nombre que falta · Nominal ellipsis', mascot: '/brand/mascot/studying.webp', coach: 'Queda el determinante; el nombre se sobrentiende. The determiner stays; the noun is understood.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'DETERMINANTE + Ø + MODIFICADOR', question: '¿Qué queda cuando el nombre desaparece, y qué cambia?', en: 'You already drop a noun after an article plus an adjective, “de” or “que” (lesson 124: la verde, la de Ana, el mío). At C1, watch the words that change shape once the noun is gone: un, algún, ningún become uno, alguno, ninguno; primer and tercer become primero and tercero; short possessives become long ones with the article; and the “el” of “el agua” goes back to “la”. Demonstratives, numerals and “otro” stay as they are.', formula: ['el de Ana · la que te dije · los otros dos', 'un → uno · algún → alguno · ningún → ninguno: uno nuevo', 'primer → primero · tercer → tercero · mi → el mío', 'el agua fría → la fría · el aula grande → la grande'],
            meaning: 'Ya omites el nombre con artículo + adjetivo, «de» o «que» (clase 124: la verde, la de Ana, el mío). En C1 importa lo que **cambia de forma** al desaparecer el nombre: **un, algún, ningún** pasan a **uno, alguno, ninguno**; **primer, tercer**, a **primero, tercero**; los posesivos breves, a la forma larga con artículo. Y el «el» de «el agua» vuelve a ser «**la**». Los demostrativos, los numerales y «otro» no cambian.',
            examples: [
              { es: 'Este glosario está anticuado; necesitamos [[uno nuevo|blue]].', en: 'This glossary is out of date; we need a new one. (“un nuevo” is not possible without the noun.)' },
              { es: 'De los cinco ensayos, Nuria ya ha traducido tres; [[los otros dos|blue]] llegan en abril.', en: 'Of the five essays, Nuria has translated three; the other two arrive in April. Order: otros + numeral.' },
              { es: '—¿Qué diccionario uso? —[[El que te dije|blue]]: el de términos de arte.', en: '“Which dictionary should I use?” “The one I told you about: the art-terms one.”' },
              { es: 'El primer capítulo está listo; [[el tercero|blue]], todavía no.', en: 'The first chapter is ready; the third one isn’t yet.' },
            ] },
          { kind: 'table', title: 'Cuando el nombre desaparece · When the noun disappears', head: ['Con nombre', 'Sin nombre', 'Qué cambia'], rows: [
            ['un glosario nuevo', '[[uno nuevo|blue]]', 'un → **uno**'],
            ['algún error grave · ningún error', '[[alguno grave|blue]] · [[ninguno|blue]]', 'algún, ningún → **alguno, ninguno**'],
            ['el primer capítulo · el tercer capítulo', '[[el primero|blue]] · [[el tercero|blue]]', 'primer, tercer → **primero, tercero**'],
            ['mi borrador · tu versión', '[[el mío|blue]] · [[la tuya|blue]]', 'posesivo breve → **largo con artículo**'],
            ['el agua fría · un aula grande', '[[la fría|blue]] · [[una grande|blue]]', 'el, un (ante /a/ tónica) → **la, una**'],
            ['este informe · los otros dos informes', '[[este|blue]] · [[los otros dos|blue]]', 'no cambia'],
          ], note: '«El» y «un» delante de «agua», «aula», «área», «acta»… son formas del artículo femenino que solo aparecen justo delante de un nombre que empieza por /a/ tónica. Los adjetivos siguen en femenino (el agua fría) y, si el nombre desaparece, vuelven «la» y «una»: «el área de ventas y **la** de producción».' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Este diccionario no me sirve. ¿Tienes ___?', options: ['alguno mejor', 'algún mejor', 'alguien mejor'], answer: 0, why: 'Sin nombre, «algún» recupera su forma plena: alguno. «Alguien» es para personas.', en: 'This dictionary is no use to me. Have you got a better one?' },
            { prompt: 'El área de traducción está en la planta baja; ___ de maquetación, en la primera.', options: ['el', 'lo', 'la'], answer: 2, why: '«Área» es femenino. «El» solo va pegado al nombre; sin él, vuelve «la».', en: 'The translation area is on the ground floor; the layout one, on the first.' },
          ] },
        ] },
        { title: 'Elipsis verbal: también, tampoco, sí, no · Verbal ellipsis', mascot: '/brand/mascot/speaking.webp', coach: 'Basta el sujeto y la polaridad. The subject and yes / no are enough.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'ELIPSIS VERBAL', question: '¿Se repite el mismo verbo? ¿Basta con decir quién y si es sí o no?', en: 'When two clauses share the verb, the second can shrink to the subject plus a polarity word: también (agreeing with a positive), tampoco (agreeing with a negative), sí / no (contrast). “Sí que” adds emphasis to a contrastive yes. If more than one element is left and only the verb is missing, a comma marks the gap: “Ana estudia Derecho y Pablo, Medicina”. The missing verb is recovered with its own agreement (acepto → acepta). After modal verbs like poder or querer you can drop the infinitive, but Spanish has no all-purpose “do” and never stops at “haber”: “Have you finished?” is answered “Sí (ya he terminado)”, not “*Sí, he”.', formula: ['afirmación + también · negación + tampoco', 'contraste: … sí / … no · sí que (enfático)', 'sujeto + coma + complemento: Ana estudia Derecho y Pablo, Medicina', 'modal + Ø: Puedo, pero… · nunca «*Sí, he» ni «*Yo hago»'],
            meaning: 'Cuando dos oraciones comparten el verbo, la segunda puede quedarse en el sujeto y una palabra de polaridad: **también** (coincide con una afirmación), **tampoco** (coincide con una negación), **sí / no** (contrasta). **Sí que** refuerza un «sí» de contraste. Si quedan dos elementos y solo falta el verbo, una **coma** marca el hueco: «Ana estudia Derecho y Pablo, Medicina». El verbo se recupera con su propia concordancia: «Yo acepto la segunda; ella (acepta), la primera». Tras **poder** o **querer** se puede omitir el infinitivo, pero el español no tiene un «do» comodín ni se detiene en «haber»: «—¿Has terminado? —Sí (ya he terminado)», nunca «*Sí, he».',
            examples: [
              { es: 'Irene traduce del portugués; [[Nuria, del inglés|orange]].', en: 'Irene translates from Portuguese; Nuria, from English. The comma stands for “traduce”.' },
              { es: 'Hugo no ha leído el contrato, pero Nuria [[sí que|orange]] lo ha leído.', en: 'Hugo hasn’t read the contract, but Nuria certainly has: “sí que” stresses the contrast.' },
              { es: '—¿Puedes revisar el catálogo hoy? —[[Puedo|orange]], pero preferiría mañana.', en: '“Can you check the catalogue today?” “I can, but I’d rather do it tomorrow.” The infinitive is understood.' },
              { es: '—Me encanta el diseño de la portada. —[[A mí también|orange]].', en: '“I love the cover design.” “So do I.” With gustar-type verbs the person goes with “a”.' },
            ] },
          { kind: 'table', title: 'Coincidir o contrastar · Agreeing or contrasting', head: ['Primera frase', 'Coincide', 'Contrasta'], rows: [
            ['Yo voy a la feria.', '[[Yo también.|orange]]', '[[Yo no.|orange]]'],
            ['Yo no voy a la feria.', '[[Yo tampoco.|orange]]', '[[Yo sí.|orange]]'],
            ['Me gusta el plan.', '[[A mí también.|orange]]', '[[A mí no.|orange]]'],
            ['No me convence el plazo.', '[[A mí tampoco.|orange]]', '[[A mí sí.|orange]]'],
          ], note: 'Con «gustar», «encantar», «convencer», «interesar»… la respuesta lleva «a»: «A mí también», no «Yo también». Para coincidir con una negación: «Yo tampoco» (en la conversación también «Ni yo»).' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '—No he tenido tiempo de leer el contrato. —___. Lo leemos juntas mañana.', options: ['Yo tampoco', 'Yo también', 'Yo sí'], answer: 0, why: 'Coincides con una negación: tampoco. «Yo sí» sería contraste: tú sí lo has leído.', en: '“I haven’t had time to read the contract.” “Neither have I. Let’s read it together tomorrow.”' },
            { prompt: '¿Qué frase está bien puntuada?', options: ['Hugo revisa los ensayos y Gonzalo, el catálogo.', 'Hugo revisa los ensayos y, Gonzalo el catálogo.', 'Hugo revisa los ensayos y Gonzalo el, catálogo.'], answer: 0, why: 'La coma va donde estaría el verbo omitido: Gonzalo (revisa) el catálogo.', en: 'Which sentence is punctuated correctly?' },
          ] },
        ] },
        { title: 'Respuestas cortas y proformas · Short answers and pro-forms', mascot: '/autoestudio/mascot/noting.webp', coach: 'Que sí, lo es, hacerlo: lo dicho cabe en una palabra. What was said fits in one word.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'QUE SÍ · QUE NO', question: '¿Respondes con tu opinión, un deseo o lo que dijo otra persona?', en: '“Que sí” and “que no” stand for a whole clause that has just been said. They follow verbs of opinion (creer, pensar, suponer), hope and fear (esperar, temer), appearance (parecer) and saying (decir, contestar): “Will the museum sign?” “Creo que sí” = I think it will. Without “que” you can only use an adverb: “Quizá sí”, “A lo mejor no”. “No creo” is also a very common short answer.', formula: ['verbo de opinión, deseo o lengua + que sí / que no', 'Creo que sí · Espero que no · Parece que no · Dijo que sí', 'sin «que» solo con adverbios: Quizá sí · A lo mejor no'],
            meaning: '«Que sí» y «que no» sustituyen a una oración completa que acaba de aparecer. Van con verbos de **opinión** (creer, pensar, suponer), de **deseo** y **temor** (esperar, temer), de **apariencia** (parecer) y de **lengua** (decir, contestar): «—¿Firmará el museo? —Creo que sí» (= creo que firmará). Sin «que», solo con adverbios: «Quizá sí», «A lo mejor no». También es muy frecuente «No creo».',
            examples: [
              { es: '—¿Llegará a tiempo la editorial? —[[Parece que no|orange]]: aún no ha enviado los textos.', en: '“Will the publisher be on time?” “It looks like it won’t: they still haven’t sent the texts.”' },
              { es: '—¿Hugo tiene marzo libre? —[[Me dijo que sí|orange]].', en: '“Is Hugo free in March?” “He told me he was.”' },
              { es: '—¿Habrá que rehacer el glosario? —[[Me temo que sí|orange]].', en: '“Will we have to redo the glossary?” “I’m afraid so.”' },
            ] },
          { kind: 'concept', tone: 'violet', label: 'LO Y HACERLO', question: '¿Recuperas una cualidad (ser, estar, parecer) o una acción?', en: '“Lo” can replace the complement of ser, estar and parecer: an adjective, a noun or a phrase. It is neuter and never changes, even when the complement is feminine or plural: “¿Estás cansada? Sí, lo estoy”. It sounds emphatic or somewhat formal; in conversation people also just say “Sí, mucho”. “Hacerlo” replaces an action already mentioned (a verb with its complements), especially in writing, conditionals and contrasts: “Quien quiera participar puede hacerlo hasta el lunes”. It only works for deliberate actions, not for states or verbs like saber, ser or gustar.', formula: ['ser / estar / parecer + lo: —¿Es cara? —Lo es.', '«lo» no cambia: —¿Están listas? —Lo están.', 'acción → hacerlo: Si no lo ha hecho ya, lo hará.', 'no con estados: *Nuria sabe portugués y Hugo también lo hace'],
            meaning: '**Lo** puede sustituir al atributo de **ser, estar y parecer**: un adjetivo, un nombre o una expresión. Es **neutro e invariable**, aunque el atributo sea femenino o plural: «—¿Estás cansada? —Sí, **lo** estoy». Suena enfático o algo formal; en la conversación también se responde «Sí, mucho». **Hacerlo** sustituye a una **acción** ya mencionada (el verbo con sus complementos), sobre todo en textos, en condicionales y en contrastes: «Quien quiera inscribirse puede **hacerlo** hasta el lunes». Solo sirve para acciones voluntarias, no para estados ni para verbos como saber, ser o gustar.',
            examples: [
              { es: '—¿Es realista el plazo de marzo? —[[Lo es|violet]], si empezamos esta semana.', en: '“Is the March deadline realistic?” “It is, if we start this week.”' },
              { es: '—¿Parece fiable esa traducción automática? —[[Lo parece|violet]], pero hay que revisarla.', en: '“Does that machine translation look reliable?” “It looks it, but it needs checking.”' },
              { es: 'Hugo tenía que confirmar por escrito. [[Si no lo ha hecho ya, lo hará|violet]] hoy.', en: 'Hugo had to confirm in writing. If he hasn’t done so already, he will today.' },
            ] },
          { kind: 'tip', icon: '💡', title: '«I did» no es «Lo hice» · “I did” is not “Lo hice”', text: 'En una respuesta corta, el español repite el verbo o se queda en «sí»: «—¿Enviaste el acta? —Sí, ya **la envié**» o «Sí, ya». «Sí, lo hice» es posible, pero suena traducido del inglés. «Hacerlo» brilla en otros contextos: «Si no lo ha hecho ya, lo hará», «Quien quiera participar puede hacerlo».', en: 'In a short answer Spanish repeats the verb or just says “sí”: “Did you send the minutes?” “Sí, ya la envié.” “Sí, lo hice” is possible but sounds translated from English. “Hacerlo” shines elsewhere: in conditionals, contrasts and formal instructions.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '—¿Están preparadas para la reunión? —Sí, ___.', options: ['estamos lo', 'lo estamos', 'las estamos'], answer: 1, why: 'El atributo se sustituye por «lo», invariable aunque se hable de mujeres en plural.', en: '“Are you ready for the meeting?” “Yes, we are.”' },
            { prompt: 'Nuria sabe portugués y Hugo ___.', options: ['lo hace también', 'también', 'también lo hace'], answer: 1, why: '«Saber» es un estado, no una acción: no admite «hacerlo». Basta «también» (o «también lo sabe»).', en: 'Nuria knows Portuguese and so does Hugo.' },
            { prompt: '—¿Va a venir Hugo a la cena? —Me ha dicho ___.', options: ['sí', 'lo sí', 'que sí'], answer: 2, why: 'Con «decir», la oración se resume en «que sí».', en: '“Is Hugo coming to the dinner?” “He’s told me he is.”' },
          ] },
        ] },
        { title: 'Anáfora en el texto · Pointing back in a text', mascot: '/brand/mascot/standing.webp', coach: 'Este, el primero, dicho, respectivamente: señales para el lector. Signposts for the reader.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'RETOMAR EN UN TEXTO', question: '¿Cómo retomo algo ya mencionado sin repetirlo y sin que el lector dude?', en: 'In writing, “este / esta” points to the last thing mentioned (the nearest), “aquel / aquella” to the earlier one (further back); demonstratives are normally written without an accent. “El primero”, “el segundo”, “este último” are clearer than este / aquel when there are several candidates. “Dicho / dicha” (without an article) and “tal” + noun belong to administrative, legal and academic texts. “Respectivamente” pairs two parallel lists in order.', formula: ['este (lo último) / aquel (lo anterior)', 'el primero · el segundo · este último', 'dicho, dicha + nombre · tal + nombre (registro formal)', 'A y B … X e Y, respectivamente'],
            meaning: 'En un texto, **este / esta** señala lo **último** mencionado, lo más cercano; **aquel / aquella**, lo mencionado **antes**, más lejos (los demostrativos se escriben normalmente sin tilde). **El primero**, **el segundo**, **este último** son más claros que «este / aquel» cuando hay varios candidatos. **Dicho / dicha** (sin artículo) y **tal** + nombre son propios de textos administrativos, jurídicos y académicos. **Respectivamente** empareja en orden dos listas paralelas.',
            examples: [
              { es: 'La editorial de Quito y el museo de Valparaíso ya han respondido: [[este|teal]] acepta el plazo; [[aquella|teal]] pide una rebaja.', en: '“Este” = the museum (last mentioned); “aquella” = the publisher (mentioned first). Gender helps too.' },
              { es: 'Gonzalo propuso dos fechas, una en marzo y otra en mayo; [[la segunda|teal]] es más realista.', en: 'Gonzalo suggested two dates, one in March and one in May; the second is more realistic.' },
              { es: 'La editorial pide una rebaja del 20 %. [[Tal petición|teal]] nos obliga a revisar el presupuesto.', en: 'The publisher is asking for a 20 % discount. Such a request forces us to revise the budget (formal).' },
              { es: 'Irene y Nuria coordinarán el catálogo y los ensayos, [[respectivamente|teal]].', en: 'Irene will coordinate the catalogue and Nuria the essays: “respectivamente” pairs the lists in order.' },
            ] },
          { kind: 'tip', icon: '⚠', title: '«El mismo» no es un pronombre · “El mismo” is not a pronoun', text: 'El *Diccionario panhispánico de dudas* desaconseja usar **el mismo, la misma** como simple sustituto de un pronombre, un posesivo o un demostrativo, un uso frecuente en el lenguaje administrativo y periodístico: «Se aprobó el presupuesto y la publicación **del mismo**» → «y **su** publicación»; «Leímos el contrato antes de firmar **el mismo**» → «antes de firmar**lo**». «Mismo» es normal cuando expresa identidad: «Trabajamos en el mismo proyecto».', en: 'The Diccionario panhispánico de dudas advises against using “el mismo / la misma” as a mere stand-in for a pronoun, possessive or demonstrative, a habit of bureaucratic and journalistic prose. Use su, lo, él, este instead. “Mismo” is fine when it means “the same”: “We work on the same project”.' },
          { kind: 'decide', title: '¿Omitir, retomar o repetir? · Drop, point back or repeat?', steps: [
            { q: '¿Hay un solo candidato posible (por género, número y sentido)?', yes: 'Omite o retoma: «[[la de Quito|blue]]», «[[este|teal]]», «[[lo|violet]]».', no: 'next' },
            { q: '¿Los candidatos acaban de aparecer juntos y en orden?', yes: 'Usa «[[el primero|teal]]», «[[el segundo|teal]]», «[[este último|teal]]» o «[[respectivamente|teal]]».', no: 'next' },
            { q: '¿La elipsis admite dos lecturas (por ejemplo, en una comparación)?', yes: 'Añade la marca que falta: «más que [[a Irene|orange]]» o «más de lo que la aprecia Irene».', no: 'Repite el nombre: la claridad va antes que la elegancia.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Hugo y Gonzalo maquetarán los ensayos y el catálogo, respectivamente». ¿Quién maqueta el catálogo?', options: ['Los dos.', 'Gonzalo.', 'Hugo.'], answer: 1, why: '«Respectivamente» empareja en orden: Hugo → los ensayos; Gonzalo → el catálogo.', en: 'Who is laying out the catalogue?' },
            { prompt: 'En un acta formal, ¿qué versión es mejor?', options: ['Se firmó el contrato y se envió una copia a la editorial.', 'Se firmó el contrato y se envió una copia del mismo a la editorial.', 'Se firmó el contrato y se envió una copia de lo mismo a la editorial.'], answer: 0, why: 'El DPD desaconseja «del mismo» como pronombre; aquí ni siquiera hace falta: está claro de qué es la copia.', en: 'In formal minutes, which version is better?' },
          ] },
        ] },
        { title: 'Ambigüedad y errores frecuentes · Ambiguity and common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Si caben dos lecturas, la elipsis ya no ayuda. Two readings? Then the ellipsis has failed.', blocks: [
          { kind: 'compare', title: 'Una frase, dos lecturas · One sentence, two readings', columns: [
            { tone: 'neutral', label: 'AMBIGUA', sentence: 'Gonzalo aprecia a Nuria más que Irene.', idea: '¿Más de lo que Irene aprecia a Nuria? ¿O más de lo que Gonzalo aprecia a Irene? La elipsis deja dos huecos posibles.', en: 'Does Gonzalo appreciate Nuria more than Irene does, or more than he appreciates Irene? The ellipsis leaves two possible gaps.' },
            { tone: 'orange', label: 'IRENE ES EL OBJETO', sentence: 'Gonzalo aprecia a Nuria más que [[a Irene|orange]].', idea: 'La «a» deja claro que Irene es la persona apreciada.', en: 'The “a” makes Irene the person being appreciated.' },
            { tone: 'orange', label: 'IRENE ES EL SUJETO', sentence: 'Gonzalo aprecia a Nuria más [[de lo que la aprecia Irene|orange]].', idea: 'Se recupera el verbo: no queda ninguna duda.', en: 'The verb is restored, so there is no doubt left.' },
          ] },
          { kind: 'guide', text: { teacher: 'Tú lees cada frase con el error y tu alumno dice qué falla (forma sin nombre, polaridad, proforma o anáfora) antes de ver la corrección.', self: 'Lee cada frase: ¿falla la forma sin nombre, la polaridad, la proforma o la anáfora? Decide y después mira la corrección. (What exactly is wrong?)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Este glosario está anticuado; hay que hacer un nuevo.', right: 'Este glosario está anticuado; hay que hacer uno nuevo.', why: 'Sin nombre, «un» recupera su forma plena: uno.' },
            { wrong: 'El agua del grifo no; prefiero el embotellada.', right: 'El agua del grifo no; prefiero la embotellada.', why: '«Agua» es femenino; «el» solo va pegado al nombre. Sin él, «la».' },
            { wrong: '—Me encanta la propuesta del museo. —Yo también.', right: '—Me encanta la propuesta del museo. —A mí también.', why: 'Con «encantar», la persona va con «a»: a mí también.' },
            { wrong: '—No he leído el contrato. —Yo también.', right: '—No he leído el contrato. —Yo tampoco.', why: 'Coincidir con una negación exige «tampoco».' },
            { wrong: '—¿Has enviado el acta? —Sí, he.', right: '—¿Has enviado el acta? —Sí, ya la he enviado. / —Sí, ya.', why: 'El español no se detiene en «haber»: se repite el verbo o basta «sí».' },
            { wrong: '—¿Están listas las pruebas? —Sí, las están.', right: '—¿Están listas las pruebas? —Sí, lo están.', why: 'El atributo de «estar» se sustituye por «lo», invariable.' },
            { wrong: 'Nuria es muy rigurosa y Hugo también lo hace.', right: 'Nuria es muy rigurosa y Hugo también (lo es).', why: '«Hacerlo» solo sustituye acciones; «ser riguroso» es una cualidad.' },
            { wrong: 'Revisamos el contrato y firmamos el mismo.', right: 'Revisamos el contrato y lo firmamos.', why: 'El DPD desaconseja «el mismo» como pronombre: basta «lo».' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Hugo llamó a Gonzalo cuando volvió de la feria». ¿Qué versión deja claro que quien volvió fue Gonzalo?', options: ['Hugo llamó a Gonzalo cuando volvió de la feria.', 'Hugo llamó a Gonzalo cuando el mismo volvió de la feria.', 'Hugo llamó a Gonzalo cuando este volvió de la feria.'], answer: 2, why: '«Este» señala al último mencionado: Gonzalo. «El mismo» como pronombre se desaconseja.', en: 'Which version makes it clear that it was Gonzalo who came back?' },
            { prompt: 'Irene quiere decir que habló de la propuesta de Nuria. ¿Qué versión no deja dudas?', options: ['Irene habló con Nuria de su propuesta.', 'Irene habló con Nuria de la suya.', 'Irene habló con Nuria de la propuesta de Nuria.'], answer: 2, why: '«Su» y «la suya» pueden ser de Irene o de Nuria. Repetir el nombre es la opción clara.', en: 'Irene means she talked about Nuria’s proposal. Which version leaves no doubt?' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno compara dos cosas de su vida (dos trabajos, dos ciudades, dos móviles) en cuatro frases sin repetir ningún nombre ni ningún verbo.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'La reunión del reparto', coach: 'Toca cada expresión marcada. Tap each marked expression.',
      steps: [
        { title: 'Dos encargos y tres agendas · Two commissions and three diaries', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Irene y tu alumno es Gonzalo y Nuria. Después tu alumno toca cada expresión marcada y dice qué palabra o qué oración se recupera.', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada: ¿qué nombre, qué verbo o qué oración se recupera? (Tap each marked expression: what is being recovered?)' } },
          { kind: 'explore', title: 'Quito, Valparaíso y el acta', setting: 'Lunes por la mañana, sala de reuniones de Tres Orillas. Irene, la coordinadora, Gonzalo, el editor, y Nuria, la traductora, se reparten dos encargos. Se tratan de tú. (Monday morning: the coordinator, the editor and a translator split two new commissions.)', lines: [
            { who: 'Irene', text: 'Tenemos dos propuestas: la de la editorial de Quito, cinco ensayos para marzo, y [[la del museo de Valparaíso|blue]], el catálogo y las audioguías de una exposición.', en: 'We have two proposals: the publisher in Quito’s, five essays for March, and the Valparaíso museum’s, the catalogue and audio guides for an exhibition.' },
            { who: 'Gonzalo', text: 'Yo empezaría por [[la primera|teal]]: es [[la que tiene el plazo más corto|blue]].', en: 'I’d start with the first one: it’s the one with the tightest deadline.' },
            { who: 'Nuria', text: '¿Y es realista? Marzo está a la vuelta de la esquina.', en: 'And is it realistic? March is just around the corner.' },
            { who: 'Gonzalo', text: '[[Lo es|violet]], si empezamos esta semana. Eso sí, en marzo yo no puedo revisar nada: tengo la feria del libro.', en: 'It is, if we start this week. Mind you, I can’t check anything in March: I’ve got the book fair.' },
            { who: 'Nuria', text: '[[Yo tampoco|orange]], al menos la primera quincena. Pero [[Hugo sí|orange]]: tiene el mes libre.', en: 'Neither can I, at least for the first fortnight. But Hugo can: he has the whole month free.' },
            { who: 'Irene', text: '¿Ha confirmado Hugo que tiene marzo libre?', en: 'Has Hugo confirmed that he’s free in March?' },
            { who: 'Gonzalo', text: '[[Dijo que sí|orange]], aunque no por escrito. [[Si no lo ha hecho ya, lo hará|violet]] hoy.', en: 'He said he was, though not in writing. If he hasn’t already, he will today.' },
            { who: 'Irene', text: 'Perfecto. Pues reparto hecho. Gonzalo, apúntalo así: [[yo acepto la segunda; ella, la primera|orange]].', en: 'Perfect. That settles who does what. Gonzalo, put it down like this: I take the second one; she takes the first.' },
            { who: 'Nuria', text: 'Me parece bien. Pero el glosario de la editorial es de hace diez años; necesitamos [[uno nuevo|blue]].', en: 'Fine by me. But the publisher’s glossary is ten years old; we need a new one.' },
            { who: 'Irene', text: '[[El que hicimos para la exposición de cerámica|blue]] te puede servir de base.', en: 'The one we made for the ceramics exhibition could be a starting point.' },
            { who: 'Gonzalo', text: 'Y para el acta: la editorial paga a treinta días; [[el museo, a sesenta|orange]]. Y [[este último|teal]] no admite adelantos.', en: 'And for the minutes: the publisher pays at thirty days; the museum, at sixty. And the latter doesn’t pay anything in advance.' },
            { who: 'Irene', text: 'Que conste todo, pero sin tantas repeticiones como [[la del mes pasado|blue]], que no había quien la leyera.', en: 'Put it all in, but without as much repetition as last month’s, which nobody could get through.' },
          ], notes: {
            'la del museo de Valparaíso': '**Elipsis nominal** con «de»: la (propuesta) del museo. El artículo femenino señala el nombre que falta.',
            'la primera': '**Anáfora ordinal**: «la primera» es la propuesta mencionada en primer lugar, la de Quito.',
            'la que tiene el plazo más corto': '**Elipsis nominal** con «que»: la (propuesta) que tiene el plazo más corto.',
            'Lo es': '**Proforma «lo»**: sustituye al atributo «realista». Es invariable y suena firme, algo enfático.',
            'Yo tampoco': '**Elipsis verbal** con polaridad negativa: Nuria coincide con una negación (yo no puedo revisar nada → yo tampoco).',
            'Hugo sí': '**Elipsis verbal** de contraste: Hugo sí (puede). «Sí» se opone a las dos negaciones anteriores.',
            'Dijo que sí': '**«Que sí»** resume toda una oración: dijo que tiene marzo libre.',
            'Si no lo ha hecho ya, lo hará': '**Hacerlo** sustituye a una acción ya dicha: confirmarlo por escrito. Es una acción voluntaria, por eso admite «hacer».',
            'yo acepto la segunda; ella, la primera': '**Elipsis verbal** con coma: ella (acepta) la primera. El verbo se recupera con su propia persona (acepto → acepta). Además, «la segunda» y «la primera» omiten «propuesta».',
            'uno nuevo': '**Elipsis nominal**: un (glosario) nuevo → uno nuevo. Sin el nombre, «un» recupera la forma plena.',
            'El que hicimos para la exposición de cerámica': '**Elipsis nominal** con relativa: el (glosario) que hicimos…',
            'el museo, a sesenta': '**Elipsis verbal** con coma: el museo (paga) a sesenta (días). Se omiten el verbo y el nombre repetido.',
            'este último': '**Anáfora**: «este último» señala lo último mencionado, el museo. Más claro que «este» solo cuando hay dos candidatos.',
            'la del mes pasado': '**Elipsis nominal** con un nombre que empieza por /a/ tónica: el acta → la (acta) del mes pasado. Sin el nombre, vuelve «la».',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Quién se encarga de los ensayos de Quito?', options: ['Irene.', 'Gonzalo.', 'Nuria.'], answer: 2, why: '«Yo acepto la segunda; ella, la primera»: la primera propuesta, la de Quito, es para Nuria.', en: 'Who is taking on the Quito essays?' },
            { prompt: '¿Quién puede trabajar en marzo?', options: ['Gonzalo.', 'Nuria.', 'Hugo.'], answer: 2, why: '«Yo tampoco… Pero Hugo sí: tiene el mes libre».', en: 'Who can work in March?' },
            { prompt: '¿Qué le preocupa a Irene del acta?', options: ['Que vuelva a tener demasiadas repeticiones.', 'Que no incluya los plazos de pago.', 'Que la escriba Nuria.'], answer: 0, why: '«Sin tantas repeticiones como la del mes pasado».', en: 'What worries Irene about the minutes?' },
          ] },
        ] },
        { title: '¿Qué se recupera? · What is being recovered?', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'classify', title: 'Más frases de la cooperativa · More lines from the cooperative', categories: [
            { id: 'nominal', label: 'ELIPSIS NOMINAL · falta un nombre', tone: 'blue' },
            { id: 'verbal', label: 'ELIPSIS VERBAL · falta un verbo o una oración', tone: 'orange' },
            { id: 'proforma', label: 'PROFORMA · lo, hacerlo', tone: 'violet' },
            { id: 'anafora', label: 'ANÁFORA TEXTUAL · ordinal, demostrativo, respectivamente', tone: 'teal' },
          ], items: [
            { text: 'Las audioguías de este museo son cortas; las de la exposición anterior eran larguísimas.', answer: 'nominal', why: 'Las (audioguías) de la exposición anterior.' },
            { text: '—¿Llega a tiempo la editorial? —Parece que no.', answer: 'verbal', why: '«Que no» resume toda la oración: parece que no llega a tiempo.' },
            { text: '—¿Están cerradas las tarifas? —Lo están.', answer: 'proforma', why: '«Lo» sustituye al atributo «cerradas», invariable.' },
            { text: 'Hugo y Gonzalo revisarán las pruebas y el contrato, respectivamente.', answer: 'anafora', why: '«Respectivamente» empareja las dos listas en orden.' },
            { text: 'Quien quiera revisar el glosario puede hacerlo hasta el viernes.', answer: 'proforma', why: '«Hacerlo» = revisar el glosario: una acción voluntaria.' },
            { text: 'Nuria traduce del inglés; Irene, del portugués.', answer: 'verbal', why: 'La coma marca el verbo omitido: Irene (traduce) del portugués.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: tu alumno resume la reunión en tres frases para alguien que no estuvo, sin repetir «propuesta», «glosario» ni «paga».' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: '¿Qué se omite, qué se retoma y qué conviene repetir? What do you drop, point back to or repeat?',
      steps: [
        { title: 'Sin el nombre · Without the noun', blocks: [
          { kind: 'choice', items: [
            { prompt: 'Necesitamos un diccionario de términos jurídicos. ¿Conoces ___ bueno?', options: ['alguno', 'algún', 'alguien'], answer: 0, why: 'Sin nombre, «algún» se convierte en «alguno». «Alguien» solo se refiere a personas.', en: 'We need a dictionary of legal terms. Do you know a good one?' },
            { prompt: 'El aula 3 está ocupada; usamos ___ del fondo.', options: ['el', 'lo', 'la'], answer: 2, why: '«Aula» es femenino: el aula → la del fondo. «El» solo va pegado a un nombre con /a/ tónica.', en: 'Room 3 is taken; we’ll use the one at the back.' },
            { prompt: 'De los cinco ensayos, el primero es breve; ___ son larguísimos.', options: ['los cuatro otros', 'otros los cuatro', 'los otros cuatro'], answer: 2, why: 'El orden es artículo + otros + numeral: los otros cuatro.', en: 'Of the five essays, the first is short; the other four are very long.' },
            { prompt: '—¿Qué contrato firmo? —___ te mandé ayer, no el del lunes.', options: ['Lo que', 'El que', 'El cual'], answer: 1, why: '«El cual» necesita un antecedente expreso; sin nombre se usa «el que». «Lo que» es neutro y no recupera «contrato».', en: '“Which contract do I sign?” “The one I sent you yesterday, not Monday’s.”' },
            { prompt: 'Este capítulo no tiene notas; ___ tiene más de cuarenta.', options: ['el tercer', 'la tercera', 'el tercero'], answer: 2, why: 'Sin nombre, «tercer» recupera su forma plena: el tercero (capítulo, masculino).', en: 'This chapter has no notes; the third one has over forty.' },
          ] },
        ] },
        { title: '¿Coincide o contrasta? · Agreeing or contrasting?', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'guide', text: { teacher: 'Tu alumno decide qué respuesta corta corresponde y la dice en voz alta completa: «Hugo también», «A Nuria también»…', self: 'Decide la respuesta corta y dila en voz alta completa, con «a» cuando haga falta. (Say the full short answer aloud.)' } },
          { kind: 'classify', title: 'Responde con una palabra · Answer with one word', categories: [
            { id: 'tambien', label: 'TAMBIÉN · coincide con un sí', tone: 'orange' },
            { id: 'tampoco', label: 'TAMPOCO · coincide con un no', tone: 'orange' },
            { id: 'si', label: 'SÍ · contrasta con un no', tone: 'neutral' },
            { id: 'no', label: 'NO · contrasta con un sí', tone: 'neutral' },
          ], items: [
            { text: 'Gonzalo irá a la feria de Guadalajara. Hugo también irá. → Hugo, ___.', answer: 'tambien', why: 'Dos afirmaciones que coinciden: Hugo también.' },
            { text: 'Nuria no ha cobrado la factura de enero. Hugo no la ha cobrado. → Hugo ___.', answer: 'tampoco', why: 'Dos negaciones que coinciden: Hugo tampoco.' },
            { text: 'A Irene no le convence el plazo. A Gonzalo sí le convence. → A Gonzalo ___.', answer: 'si', why: 'Contraste con una negación: a Gonzalo sí (con «a», por «convencer»).' },
            { text: 'A Hugo le encanta la portada. A Nuria le encanta. → A Nuria ___.', answer: 'tambien', why: 'Coinciden en afirmativo; con «encantar», «a Nuria también».' },
            { text: 'Irene trabaja los sábados. Nuria no trabaja los sábados. → Nuria ___.', answer: 'no', why: 'Contraste con una afirmación: Nuria no.' },
            { text: 'El museo no exige exclusividad. La editorial no la exige. → La editorial ___.', answer: 'tampoco', why: 'Dos negaciones que coinciden: la editorial tampoco.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'El área de diseño y la de traducción comparten despacho.', ok: true, why: 'Correcta: «el área», pero sin el nombre, «la de traducción».' },
            { sentence: 'El glosario de la editorial está anticuado; hay que preparar un nuevo.', ok: false, options: ['El glosario de la editorial está anticuado; hay que preparar nuevo.', 'El glosario de la editorial está anticuado; hay que preparar el uno nuevo.', 'El glosario de la editorial está anticuado; hay que preparar uno nuevo.'], answer: 2, why: 'Sin nombre, «un» pasa a «uno»: uno nuevo.' },
            { sentence: '—¿Están cansadas? —Sí, las estamos.', ok: false, options: ['—¿Están cansadas? —Sí, estamos las.', '—¿Están cansadas? —Sí, las somos.', '—¿Están cansadas? —Sí, lo estamos.'], answer: 2, why: 'El atributo de «estar» se sustituye por «lo», invariable en género y número.' },
            { sentence: 'Nuria es muy meticulosa y Gonzalo también lo hace.', ok: false, options: ['Nuria es muy meticulosa y Gonzalo también hace.', 'Nuria es muy meticulosa y Gonzalo lo hace también.', 'Nuria es muy meticulosa y Gonzalo también lo es.'], answer: 2, why: '«Hacerlo» solo recupera acciones; una cualidad con «ser» se recupera con «lo es» o con «también».' },
            { sentence: 'Se revisó el presupuesto y se aprobó la versión final del mismo.', ok: false, options: ['Se revisó el presupuesto y se aprobó la versión final de ello.', 'Se revisó el presupuesto y se aprobó la versión final del cual.', 'Se revisó el presupuesto y se aprobó su versión final.'], answer: 2, why: 'El DPD desaconseja «del mismo» como pronombre: el posesivo «su» basta. «Ello» se refiere a ideas, no a un objeto concreto.' },
            { sentence: '—¿Viene Hugo a la cena? —Creo sí.', ok: false, options: ['—¿Viene Hugo a la cena? —Creo que sí.', '—¿Viene Hugo a la cena? —Lo creo sí.', '—¿Viene Hugo a la cena? —Creo lo.'], answer: 0, why: 'Con «creer», la respuesta corta necesita «que»: creo que sí.' },
          ] },
        ] },
        { title: 'Mensajes entre Irene y Hugo · Texts between Irene and Hugo', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'chat-fill', title: 'El reparto, por chat · Sorting out the work by chat', lines: [
            { who: 'Irene', text: 'Hugo, el lunes empezamos los ensayos. ¿Tienes marzo libre? Gonzalo cree ___.', options: ['lo', 'que sí', 'sí'], answer: 1, why: 'Con «creer», la oración se resume con «que sí».' },
            { who: 'Hugo', text: 'Sí, del todo. Lo que no tengo es el glosario: el de la editorial es de 2014. ¿Hacemos ___?', options: ['uno nuevo', 'un nuevo', 'el nuevo uno'], answer: 0, why: 'Sin el nombre: uno nuevo.' },
            { who: 'Irene', text: 'Nuria ya está con él. Por cierto, el museo aún no ha firmado, pero si no ___ hoy, lo hará mañana.', options: ['hace', 'lo es', 'lo hace'], answer: 2, why: '«Hacerlo» recupera la acción de firmar; necesita el pronombre «lo».' },
            { who: 'Hugo', text: 'Vale. Yo no puedo ir a la firma del jueves.' },
            { who: 'Irene', text: '___: tengo médico. Que vaya Gonzalo.', options: ['Yo tampoco', 'Yo también', 'Yo no tampoco'], answer: 0, why: 'Coincides con una negación: yo tampoco.' },
            { who: 'Hugo', text: '¿Y Nuria? ¿Está contenta con el reparto?' },
            { who: 'Irene', text: 'Sí, ___. Prefería los ensayos.', options: ['lo está', 'la está', 'está lo'], answer: 0, why: '«Lo» sustituye a «contenta» y no cambia: lo está.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['Irene', 'acepta', 'la', 'segunda;', 'Nuria,', 'la', 'primera.'], accept: ['Irene acepta la segunda; Nuria, la primera.'], en: 'Irene takes the second one; Nuria, the first.' },
            { tiles: ['Si', 'no', 'lo', 'ha', 'hecho', 'ya,', 'lo', 'hará', 'mañana.'], accept: ['Si no lo ha hecho ya, lo hará mañana.'], en: 'If he hasn’t done it already, he’ll do it tomorrow.' },
            { tiles: ['Los', 'ensayos', 'y', 'el', 'catálogo', 'se', 'entregarán', 'en', 'marzo', 'y', 'en', 'mayo,', 'respectivamente.'], accept: ['Los ensayos y el catálogo se entregarán en marzo y en mayo, respectivamente.'], en: 'The essays and the catalogue will be delivered in March and May respectively.' },
          ] },
        ] },
        { title: 'Edita el acta · Edit the minutes', mascot: '/autoestudio/mascot/noting.webp', blocks: [
          { kind: 'guide', text: { teacher: 'Tu alumno reescribe cada fragmento y lo lee en voz alta. Tú compruebas que no se ha perdido información ni ha aparecido una ambigüedad.', self: 'Reescribe y relee: ¿sigue estando claro quién hace qué? (Is it still clear who does what?)' } },
          { kind: 'rewrite', title: 'Menos repeticiones, la misma claridad · Less repetition, same clarity', items: [
            { prompt: 'Hugo maqueta los ensayos. Gonzalo maqueta el catálogo.', instruction: 'Únelas en una sola oración sin repetir el verbo.', accept: ['Hugo maqueta los ensayos y Gonzalo, el catálogo', 'Hugo maqueta los ensayos; Gonzalo, el catálogo', 'Hugo y Gonzalo maquetan los ensayos y el catálogo, respectivamente'] },
            { prompt: 'Nuria no ha leído el contrato. Hugo no ha leído el contrato.', instruction: 'Únelas con «y» y una palabra de polaridad.', accept: ['Nuria no ha leído el contrato y Hugo tampoco', 'Nuria no ha leído el contrato, y Hugo tampoco', 'Nuria no ha leído el contrato y tampoco Hugo'] },
            { prompt: 'La editorial pide una rebaja. La rebaja que pide la editorial nos obliga a revisar el presupuesto.', instruction: 'Reescribe solo la segunda frase en registro formal, con «tal» o «dicha».', accept: ['Tal rebaja nos obliga a revisar el presupuesto', 'Dicha rebaja nos obliga a revisar el presupuesto', 'Tal petición nos obliga a revisar el presupuesto', 'Dicha petición nos obliga a revisar el presupuesto', 'Tal rebaja obliga a revisar el presupuesto', 'Dicha rebaja obliga a revisar el presupuesto'] },
            { prompt: 'Se firmó el contrato y se envió una copia del mismo a la editorial.', instruction: 'Elimina «del mismo», como recomienda el DPD, sin perder información.', accept: ['Se firmó el contrato y se envió una copia a la editorial', 'Se firmó el contrato y se le envió una copia a la editorial', 'Se firmó el contrato y se envió copia a la editorial', 'Se firmó el contrato y se envió una copia de él a la editorial'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno toma un correo suyo real (o un texto de trabajo) y busca dos repeticiones que pueda eliminar sin crear dudas.' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Un audio de Nuria', coach: 'Primero la idea, después los detalles. Gist first, then details.',
      steps: [
        { title: 'Noticias de Quito y de Valparaíso · News from Quito and Valparaíso', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general. Segunda escucha: tu alumno anota cada vez que Nuria omite un nombre o un verbo, o lo recupera con «lo». Después, las preguntas.', self: 'Escucha una vez para la idea general y otra para los detalles. Anota cada nombre o verbo que Nuria omite y cómo lo recupera. (Note every dropped noun or verb.)' } },
          { kind: 'listen', title: 'Un audio de Nuria', channel: 'NOTA DE VOZ · DE NURIA A GONZALO', src: '/audio/grammar-live/487.mp3',
            before: 'Gonzalo está en la feria del libro. Nuria le manda una nota de voz después de hablar con la editorial y con el museo. ¿Qué noticias crees que le da? (What news do you think she gives him?)',
            gist: { prompt: '¿Para qué manda Nuria el audio? · Why does Nuria send the voice note?', options: ['Para poner al día a Gonzalo sobre los encargos y darle indicaciones para el acta.', 'Para quejarse del reparto de tareas.', 'Para anular la reunión del lunes.'], answer: 0, why: 'Cuenta qué han respondido la editorial y el museo, qué pasa con el glosario y con Hugo, y le pide algo para el acta.', en: 'She updates him on both commissions, the glossary and Hugo, and asks for something in the minutes.' },
            details: [
              { prompt: '¿Qué plazo acepta el museo?', options: ['El de marzo.', 'El de abril.', 'El de mayo.'], answer: 2, why: '«La editorial acepta el plazo de marzo y el museo, el de mayo»: la coma marca el verbo omitido.', en: 'Which deadline does the museum accept?' },
              { prompt: '¿De qué glosario partirá Nuria?', options: ['De uno que le enviará Hugo.', 'Del que hicieron para la exposición de cerámica.', 'Del de la editorial.'], answer: 1, why: '«Voy a preparar uno nuevo a partir del que hicimos para la exposición de cerámica».', en: 'Which glossary will Nuria start from?' },
              { prompt: '¿En qué no están de acuerdo Irene y Nuria?', options: ['En si cobrar a sesenta días será un problema.', 'En el reparto de los encargos.', 'En la fecha de la próxima reunión.'], answer: 0, why: '«Ella dice que las cuentas aguantan; yo, que en abril vamos a estar justos».', en: 'What do Irene and Nuria disagree about?' },
              { prompt: '¿Qué le pide Nuria a Gonzalo para el acta?', options: ['Que escriba «el mismo» para no repetir.', 'Que la mande directamente a la editorial.', 'Que no use «el mismo» ni «la misma» como pronombres.'], answer: 2, why: '«En el acta, por favor, nada de “el mismo” ni “la misma” cada dos líneas».', en: 'What does Nuria ask Gonzalo to do in the minutes?' },
            ],
            transcript: 'Hola, Gonzalo, soy Nuria. Te mando un audio porque sé que estás en la feria y no quiero llenarte el correo. Acabo de hablar con la editorial y con el museo. La editorial acepta el plazo de marzo y [[el museo, el de mayo|orange]], así que el reparto queda como lo dejamos: Irene, con el catálogo; yo, con los ensayos. Sobre el glosario: el de la editorial no sirve, tiene más de diez años, así que voy a preparar [[uno nuevo|blue]] a partir [[del que hicimos para la exposición de cerámica|blue]]. A Hugo le pregunté si tenía marzo libre y [[me dijo que sí|orange]]; [[si no te ha escrito ya, lo hará|violet]] esta tarde. Ahora, lo que me preocupa: el museo paga a sesenta días. ¿Es un problema? Irene [[cree que no|orange]]. Ella dice que las cuentas aguantan; [[yo, que en abril vamos a estar justos|orange]]. Lo hablamos el lunes con calma. ¿Que si estoy cansada? [[Lo estoy|violet]], pero contenta, la verdad: es el encargo que queríamos. Ah, y una última cosa: en el acta, por favor, nada de «el mismo» ni «la misma» cada dos líneas. Un abrazo.',
            reply: { teacher: 'Tú eres Gonzalo y respondes al audio de Nuria con preguntas («¿Qué plazo acepta el museo?», «¿Ha escrito ya Hugo?», «¿Tú qué crees de los pagos?»). Tu alumno es Nuria y contesta con respuestas cortas: el de mayo, creo que no, lo estoy…', self: 'Responde a Nuria en voz alta como Gonzalo: dile qué opinas del pago a sesenta días, quién se ocupa de qué y qué vas a poner en el acta, sin repetir nombres ni verbos. (Reply aloud as Gonzalo, without repeating nouns or verbs.)' } },
          { kind: 'tip', icon: '🇨🇴', title: 'Una nota de voz real · A real voice note', text: 'Fíjate en cómo habla Nuria: no repite «plazo», «glosario» ni «dice». Usa la elipsis verbal para contrastar opiniones («Ella dice que las cuentas aguantan; yo, que…») y una pregunta eco para anticiparse a Gonzalo: «¿Que si estoy cansada? Lo estoy». En la conversación, la coma de la elipsis se convierte en una pequeña pausa.', en: 'Notice how Nuria speaks: she never repeats “plazo”, “glosario” or “dice”. She uses verbal ellipsis to contrast opinions and an echo question to get ahead of Gonzalo: “Am I tired? I am.” In speech, the ellipsis comma becomes a short pause.' },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Decirlo todo sin repetir nada', coach: 'Respuestas cortas, comparaciones claras. Short answers, clear comparisons.',
      steps: [
        { title: 'Coincidir, elegir y repartir · Agreeing, choosing and sharing out', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas y tu alumno responde sin repetir nombres ni verbos. Si una elipsis crea dudas, tú preguntas «¿cuál?» o «¿quién?» y tu alumno lo aclara.', self: 'Lee cada pregunta y responde en voz alta. Evita repetir, pero comprueba que se entiende de quién y de qué hablas. (Avoid repetition, but stay clear.)' } },
          { kind: 'talk', cards: [
            { q: '¿En qué te pareces y en qué no a un compañero de trabajo, de estudios o de piso? · How are you like a colleague or flatmate, and how not?', followUps: ['¿Y en los horarios?', '¿Y en los planes de fin de semana?'], phrases: ['[[Yo también|orange]]… / [[Yo tampoco|orange]]…', '[[Ella no; yo sí|orange]].', '[[A mí también|orange]] me…'], hint: 'Contrasta con «sí / no» y coincide con «también / tampoco»; con «gustar», «a mí».', example: 'Mi compañera Rosa empieza a las siete; yo, a las nueve. Ella no toma café; yo sí, y mucho. A las dos nos gusta trabajar con música, aunque a ella le gusta el jazz y a mí, la radio. Ninguna de las dos soporta las reuniones largas.', next: 'Ahora, respuestas cortas.' },
            { q: '¿Cómo crees que será tu próximo año? Responde corto y después matiza. · Answer briefly, then add nuance.', followUps: ['¿Tendrás más trabajo?', '¿Cambiarás de casa o de trabajo?', '¿Estás satisfecho o satisfecha con tu rutina?'], phrases: ['[[Creo que sí|orange]], porque…', '[[Espero que no|orange]]…', '[[Lo estoy|violet]], aunque…'], hint: '«Que sí / que no» resumen la pregunta; «lo» recupera el adjetivo.', example: '¿Más trabajo? Me temo que sí: entran dos proyectos nuevos. ¿Cambiar de casa? Espero que no, estoy muy a gusto. ¿Satisfecha con mi rutina? Lo estoy, aunque me gustaría tener las tardes de los viernes libres.' },
            { q: 'Tienes que elegir entre dos ofertas, dos pisos o dos cursos. Compáralos sin repetir los nombres. · Compare two options without repeating the nouns.', followUps: ['¿Cuál elegiste al final?', '¿Qué habría pasado con el otro?'], phrases: ['[[el de|blue]]… / [[la que|blue]]…', '[[la primera|teal]]… [[la segunda|teal]]…', '[[uno más grande|blue]]…'], hint: 'Determinante + Ø + modificador; ordinales si son dos.', example: 'Tenía dos ofertas: la de una agencia pequeña y la de una consultora grande. La primera pagaba menos, pero el ambiente era mejor; la segunda ofrecía un buen sueldo y muchos viajes. Me quedé con la que me dejaba tiempo libre: la pequeña.', next: 'Ahora, en el papel de Irene.' },
            { q: 'Eres Irene. Repartes en voz alta las tareas de la semana entre Nuria, Hugo y Gonzalo. · You are Irene: share out the week’s tasks.', followUps: ['¿Y si alguien no puede?', '¿Quién revisa el trabajo de quién?'], phrases: ['Nuria traduce…; [[Hugo, …|orange]]', '…, [[respectivamente|teal]].', 'Si no [[lo has hecho|violet]] ya, …'], hint: 'Usa la coma de la elipsis y «respectivamente»; «hacerlo» para una acción ya dicha.', example: 'Nuria traduce los ensayos; yo, el catálogo. Hugo maqueta los dos libros: el primero en marzo; el segundo, en mayo. Gonzalo y yo revisaremos las pruebas y el contrato, respectivamente. Y Gonzalo, el acta: si no la has enviado ya, hazlo hoy, por favor.', teacher: 'Tú haces de Hugo y pones pegas («Yo en marzo no puedo»). Tu alumno reorganiza el reparto sin repetir verbos.' },
            { q: '¿Crees que dentro de diez años las máquinas traducirán todos los textos? · Will machines translate everything in ten years?', followUps: ['¿Y la literatura?', '¿Te preocupa?', '¿Qué textos seguirá traduciendo una persona?'], phrases: ['[[Creo que no|orange]]…', '[[Los técnicos, sí; los literarios, no|orange]].', '[[los que|blue]]…'], hint: 'Opina con «que sí / que no» y contrasta con la elipsis verbal.', example: '¿Todos? Creo que no. Los manuales técnicos, seguramente sí; las novelas, no tanto. ¿Me preocupa? Un poco, lo admito. Seguirá haciendo falta alguien que revise los que se publican.', next: 'Ahora, un malentendido.' },
            { q: 'Cuenta un malentendido que tuviste porque alguien no dejó claro de quién o de qué hablaba. · Tell about a misunderstanding caused by an unclear reference.', followUps: ['¿Cómo se resolvió?', '¿Qué tendría que haber dicho?'], phrases: ['Yo pensaba que hablaba [[del de|blue]]…', 'Dijo «[[el suyo|blue]]», pero…', 'Habría bastado con…'], hint: 'Explica qué candidato entendiste tú y cuál quería decir la otra persona.', example: 'Mi jefa me dijo: «Tengo el contrato de Pablo y el de Rosa. Manda el suyo hoy». Yo mandé el de Pablo, pero ella quería decir el de Rosa, que era la que esperaba. Habría bastado con decir «el de Rosa».', teacher: 'Tú preguntas «¿Y cómo lo habrías dicho tú?» y tu alumno propone una versión sin ambigüedad.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno pregunta y tú respondes con algún error a propósito («—No me gusta. —Yo tampoco», «Sí, he», «Sí, las estoy»). Tu alumno lo detecta y lo corrige.', self: 'Ahora haz tú las preguntas en voz alta y respóndelas como otra persona: un compañero, tu pareja o un amigo. (Now ask the questions aloud and answer as someone else.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'El acta sin repeticiones', coach: 'Breve, preciso y sin dudas. Brief, precise and unambiguous.',
      steps: [
        { title: 'El acta de la reunión · The minutes of the meeting', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Después tu alumno lee el texto en voz alta y juntos comprueban que no sobra ninguna repetición y que no falta ninguna referencia.', self: 'Escribe tu texto y toca «Revisar mi texto». Después reléelo como lo haría alguien que no estuvo en la reunión: ¿lo entiende todo? (Reread it as someone who wasn’t there.)' } },
          { kind: 'write', title: 'Acta de la reunión · Minutes', situation: 'Eres Gonzalo (o eres tú, con una reunión real de tu trabajo o de tu comunidad de vecinos). Escribes el acta para el equipo y para quien no pudo asistir: qué se decidió, quién hace qué y qué queda pendiente. (Write the minutes for the team and anyone who missed the meeting.)', task: [
            'Presenta las opciones o propuestas y retómalas sin repetir el nombre (la de…, la que…, uno nuevo…).',
            'Une al menos dos informaciones con un verbo omitido y la coma correspondiente (Irene…; Nuria, …).',
            'Retoma algo con un recurso textual: el primero, este último, dicho, tal o respectivamente.',
            'Usa una proforma: «lo» con ser / estar o «hacerlo» con una acción.',
            'No uses «el mismo» como pronombre; si dos candidatos compiten, repite el nombre.',
          ], starters: ['Se estudiaron dos propuestas: la de…', 'Se acuerda que…', '… coordinará la primera; …, la segunda.', 'Si no lo ha hecho ya, …', 'Este último…', 'Dicho contrato…', '…, respectivamente.'],
            words: ['la de / la que', 'uno nuevo', 'el primero / el segundo', 'este último', 'dicho, dicha', 'tal', 'respectivamente', 'hacerlo', 'lo es / lo está', 'que sí / que no'],
            model: 'Acta de la reunión del 14 de enero. Asistentes: Irene Ferrer, Nuria Paz y Gonzalo Ruiz. 1. Se estudiaron dos propuestas: [[la de la editorial de Quito|blue]] (cinco ensayos, entrega en marzo) y [[la del museo de Valparaíso|blue]] (catálogo y audioguías, entrega en mayo). Ambas se aceptan. Irene coordinará la segunda; [[Nuria, la primera|orange]]. 2. El glosario de la editorial está anticuado. Nuria preparará [[uno nuevo|blue]] a partir [[del que hicimos para la exposición de cerámica|blue]]. 3. Hugo maquetará los dos proyectos. Ha confirmado de palabra que tiene marzo libre y, [[si no lo ha hecho ya por escrito, lo hará|violet]] esta semana. 4. La editorial paga a treinta días; [[el museo, a sesenta|orange]]. [[Este último|teal]] plazo puede tensar las cuentas en abril: Irene cree que no será un problema; [[Nuria, que sí|orange]]. Se revisará en la próxima reunión. 5. Irene y Gonzalo revisarán las pruebas y los contratos, [[respectivamente|teal]]. [[Dichos contratos|teal]] se firmarán antes del día 30.',
            minWords: 110,
            checks: [
              { label: 'Una elipsis nominal (la de…, el que…, uno nuevo…)', pattern: '(?<!\\p{L})(?:el|la|los|las)\\s+(?:de|del|que)(?!\\p{L})|(?<!\\p{L})del\\s+que(?!\\p{L})|(?<!\\p{L})(?:uno|una|alguno|alguna|ninguno|ninguna)\\s+(?:nuevo|nueva|mejor|parecido|parecida|igual|distinto|distinta|más)(?!\\p{L})', tip: 'Retoma una propuesta o un documento sin repetir el nombre: «la de la editorial», «uno nuevo».' },
              { label: 'Un recurso de anáfora textual (el primero, este último, dicho, respectivamente…)', pattern: '(?<!\\p{L})(?:respectivamente|dich[oa]s?|est[ea]\\s+últim[oa]|(?:el|la)\\s+(?:primer[oa]|segund[oa]))(?!\\p{L})', tip: 'Retoma algo ya mencionado con «este último», «dicho…» o «respectivamente».' },
              { label: 'Una proforma (lo es, lo está, hacerlo, lo hará…)', pattern: '(?<!\\p{L})(?:hacerlo|lo\\s+(?:ha|he|has|hemos|han|había)\\s+hecho|lo\\s+har(?:á|é|án|emos)|lo\\s+(?:hizo|hice|hace|hago)|lo\\s+(?:es|son|era|está|están|estaba|estoy|estamos|parece))(?!\\p{L})', tip: 'Recupera una acción con «hacerlo» o una cualidad con «lo es / lo está».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})(?:del|al|el|la|los|las|de\\s+la|de\\s+los|de\\s+las|a\\s+la|en\\s+el|en\\s+la)\\s+mism[oa]s?\\s*[.,;:)]', why: 'El DPD desaconseja «el mismo» como pronombre: usa «su», «lo», «él» o «este».' },
              { pattern: '(?<!\\p{L})(?:un|algún|ningún)\\s+(?:nuevo|parecido|igual|mejor|distinto)\\s*[.,;:]', why: 'Sin nombre, la forma es plena: «**uno** nuevo», «**alguno** mejor».' },
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
            { tone: 'blue', label: 'ELIPSIS NOMINAL', formula: 'determinante + Ø + de / que / adjetivo', example: 'la de Quito · el que te dije · uno nuevo · los otros dos · la fría (el agua)', caption: 'un → uno, primer → primero, el (agua) → la', en: 'The determiner stays and the noun is understood; shortened forms recover their full shape' },
            { tone: 'orange', label: 'ELIPSIS VERBAL', formula: 'también / tampoco / sí / no · sujeto, complemento · que sí / que no', example: 'Yo tampoco. Yo acepto la segunda; ella, la primera. Creo que sí.', caption: '«a mí también» con gustar · la coma marca el verbo', en: 'Polarity words and a comma stand for the missing verb; “que sí / que no” stand for a whole clause' },
            { tone: 'violet', label: 'PROFORMAS', formula: 'ser / estar / parecer + lo · hacerlo (acciones)', example: '—¿Estás cansada? —Lo estoy. Si no lo ha hecho ya, lo hará.', caption: '«lo» invariable · nunca «*Sí, he»', en: '“Lo” replaces a quality and never changes; “hacerlo” replaces deliberate actions only' },
            { tone: 'teal', label: 'ANÁFORA TEXTUAL', formula: 'este / aquel · el primero · este último · dicho · tal · respectivamente', example: 'Irene y Nuria llevan el catálogo y los ensayos, respectivamente.', caption: '«el mismo» como pronombre: mejor evitarlo', en: 'Signposts that point back in a text; avoid “el mismo” as a mere pronoun' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Omitir es eficaz cuando el lector **recupera sin esfuerzo** lo que falta. Antes de quitar algo, pregúntate: ¿cuántos candidatos hay? Si hay **uno**, omite o retoma («la de Quito», «lo es», «tampoco»). Si hay **varios en orden**, usa «el primero», «este último» o «respectivamente». Si caben **dos lecturas**, añade la marca que falta o **repite el nombre**.', en: 'Leaving things out works when the reader can recover them effortlessly. Before you drop something, ask how many candidates there are. One: drop it or point back. Several in order: use “el primero”, “este último” or “respectivamente”. Two possible readings: add the missing marker or repeat the noun.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'Esta silla es muy incómoda. ¿No hay ___ mejor?', options: ['alguna', 'algún', 'alguno'], answer: 0, why: '«Silla» es femenino: alguna (silla) mejor.', en: 'This chair is really uncomfortable. Isn’t there a better one?' },
            { prompt: '—No pienso ir a la cena de empresa. —___. Prefiero quedarme en casa.', options: ['Yo tampoco', 'Yo también', 'Yo sí'], answer: 0, why: 'Coincides con una negación: yo tampoco.', en: '“I’m not going to the work dinner.” “Neither am I. I’d rather stay at home.”' },
            { prompt: '—¿Es difícil el examen? —___, pero se puede aprobar.', options: ['La es', 'Es lo', 'Lo es'], answer: 2, why: '«Lo» sustituye al atributo «difícil» y va delante del verbo.', en: '“Is the exam hard?” “It is, but you can pass it.”' },
            { prompt: 'Mi hermana vive en Lima y mi hermano, ___ Montevideo.', options: ['lo', 'en', 'que'], answer: 1, why: 'Se omite solo el verbo; la preposición se mantiene: mi hermano (vive) en Montevideo.', en: 'My sister lives in Lima and my brother in Montevideo.' },
            { prompt: '¿Qué versión prefiere el DPD?', options: ['Se presentó el informe y se debatieron las conclusiones de lo mismo.', 'Se presentó el informe y se debatieron sus conclusiones.', 'Se presentó el informe y se debatieron las conclusiones del mismo.'], answer: 1, why: '«Del mismo» como pronombre se desaconseja; el posesivo es más claro y más breve.', en: 'Which version does the DPD prefer?' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Ahora, una comunidad de vecinos. Now, a residents’ meeting.', blocks: [
          { kind: 'lead', text: 'Lola redacta el resumen de la reunión de vecinos de su edificio. Su borrador repite demasiado. Ayúdala a editarlo sin perder información.', en: 'Lola is writing up the residents’ meeting of her building. Her draft repeats far too much. Help her edit it without losing information.' },
          { kind: 'rewrite', title: 'El resumen de Lola · Lola’s summary', items: [
            { prompt: 'Marta pagará la pintura. Luis pagará las lámparas.', instruction: 'Únelas sin repetir el verbo.', accept: ['Marta pagará la pintura y Luis, las lámparas', 'Marta pagará la pintura; Luis, las lámparas', 'Marta y Luis pagarán la pintura y las lámparas, respectivamente'] },
            { prompt: '—¿Está cerrada la puerta del garaje? —Sí, la puerta del garaje está cerrada.', instruction: 'Reescribe la respuesta con una proforma.', accept: ['Sí, lo está', 'Lo está', 'Sí, ya lo está'] },
            { prompt: 'Hay dos presupuestos: el presupuesto de la empresa Ortega y el presupuesto de una empresa nueva. Votaremos el presupuesto de la empresa nueva.', instruction: 'Reescribe solo la segunda frase sin repetir «presupuesto».', accept: ['Votaremos el de la empresa nueva', 'Votaremos el segundo', 'Votaremos este último', 'Votaremos el de la nueva'] },
          ] },
        ] },
        { title: 'Ampliación: registro formal · Extension: formal register', mascot: '/brand/mascot/portrait.webp', coach: 'Opcional. Optional.', blocks: [
          { kind: 'lead', text: 'Para estudiantes fuertes o si queda tiempo. **1.** «**Sendos, sendas**» significa «uno para cada uno»: «Irene y Nuria firmaron **sendos** contratos» = cada una firmó uno. No significa «ambos» ni «los dos». **2.** «**Hacer lo propio**» equivale a «hacer lo mismo» y es propio de la prensa y los textos formales: «La editorial firmó el lunes y el museo **hizo lo propio** el martes». **3.** «**Ello**» retoma una idea o una situación completa, nunca una persona ni un objeto concreto: «El museo paga a sesenta días; **por ello**, hay que prever los gastos de abril».', en: 'For strong students or spare time. 1. “Sendos, sendas” means “one each”: “Irene y Nuria firmaron sendos contratos” = each signed one. It does not mean “both”. 2. “Hacer lo propio” means “to do the same” and belongs to journalism and formal writing. 3. “Ello” picks up a whole idea or situation, never a person or a concrete object: “por ello”, “de ello”.' },
          { kind: 'choice', title: 'Registro y matices · Register and nuance', items: [
            { prompt: '«Las dos traductoras recibieron sendos premios». ¿Qué significa?', options: ['Que cada una recibió un premio.', 'Que las dos recibieron los dos premios juntos.', 'Que recibieron premios muy importantes.'], answer: 0, why: '«Sendos» = uno para cada una: dos premios en total, uno por persona.', en: 'What does “sendos premios” mean here?' },
            { prompt: 'En una nota de prensa: «La editorial aceptó el plazo y el museo ___».', options: ['hizo el mismo', 'hizo lo propio', 'lo hizo propio'], answer: 1, why: '«Hacer lo propio» = hacer lo mismo, en registro formal. «Lo hizo propio» significa otra cosa (lo adoptó como suyo).', en: 'In a press release: “The publisher accepted the deadline and the museum did likewise.”' },
            { prompt: '¿En qué frase está bien usado «ello»?', options: ['He leído el contrato y he firmado ello.', 'Hablé con Hugo y le di ello.', 'Faltan dos contratos por firmar; por ello, la entrega se retrasa.'], answer: 2, why: '«Ello» retoma una situación entera (que falten contratos), no un objeto concreto: para eso, «lo».', en: 'In which sentence is “ello” used correctly?' },
            { prompt: 'Informe formal: «Se reunieron con el editor Paredes y con el editor Gil. ___ propuso aplazar la firma». Quieres decir que fue Gil.', options: ['Aquel', 'El mismo', 'Este último'], answer: 2, why: '«Este último» señala al último mencionado, Gil. «Aquel» señalaría a Paredes, y «el mismo» como pronombre se desaconseja y aquí ni siquiera aclara a quién se refiere.', en: 'Formal report: two editors are mentioned and you mean the second one: “The latter proposed postponing the signing.”' },
          ] },
          { kind: 'teacher', text: 'Paso opcional, solo si queda tiempo o para estudiantes fuertes. Extra: tu alumno busca en una noticia o en un documento oficial un «del mismo» o «de la misma» y lo reescribe con un posesivo o un pronombre.' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 188 · Nominalizaciones evaluativas y densidad informativa', text: 'Ya sabes omitir lo que el lector recupera y retomar lo dicho con «lo», «hacerlo», «este último» o «tal petición». En la clase 188 das el paso siguiente: condensar ideas enteras en un nombre que además evalúa («**La falta de coordinación** provocó retrasos»; «**Esta decisión**…»), el recurso clave de los textos densos y formales.', en: 'You can now leave out what the reader can recover and point back with lo, hacerlo, este último or “tal petición”. In class 188 you take the next step: packing whole ideas into a noun that also evaluates them (“The lack of coordination caused delays”; “This decision…”), the key tool of dense, formal writing.', href: '/gramatica/nominalizaciones-evaluativas-y-densidad-informativa', label: 'Ir a la clase 188' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Por qué se dice “—No me gusta. —A mí tampoco” y no “Yo tampoco”?». Respuesta esperada: con «gustar» la persona va con «a». Tarea: el acta de una reunión real, sin repeticiones y sin ambigüedades.' },
        ] },
      ],
    },
  ],
};
