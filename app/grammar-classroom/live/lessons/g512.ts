import type { LiveLesson } from '../types';

/**
 * Lesson 512 · C2 · Elipsis compleja y recuperación inferencial (course unit G212).
 * Builds on G124 (lesson 114: la de Ana, el mío), G186 (lesson 118: two readings) and G187
 * (lesson 487: nominal ellipsis, también / tampoco / sí / no, the gapping comma, que sí, lo es,
 * hacerlo, este último). Those inventories are not repeated. C2 step: ellipsis whose content is
 * recovered by inference rather than copied from a visible antecedent. Content: the conditions of
 * gapping (coordination only, parallel structure, same tense and mood, person and number may
 * change, never a gap before the verb); sluicing (Alguien llamó, pero no sé quién; the remnant
 * keeps its preposition in careful usage: no sé con quién; implicit antecedents: no dice cuándo);
 * fragment answers that keep the marks of the question; situational ellipsis (¿Lo de siempre?,
 * ¿Mesa para dos?); headline and note style (Detenida la presunta autora…, Min. 24, igual);
 * elliptical answers that create an implicature (—¿Qué tal el examen? —Bueno, el profesor es
 * simpático) and how it can be cancelled; the limits: change of tense, gapping after porque,
 * negation without sí, doubtful polarity, headline agreement. Ampliación: stripping (Firmó Carmen,
 * no Joaquín), the elided verb of saying (Y él, que no) and proverbs.
 * Scene: Estudio Contraluz, a subtitling studio. Carmen Olmedo (head of revision) and Elena Prieto
 * (subtitler) subtitle «La última mesa», a documentary about the closing of Casa Ordóñez, a family
 * restaurant run by the siblings Ramón and Pilar Ordóñez; Joaquín Urrutia is the senior subtitler.
 * Escuchar: Carmen's voice note to Elena from a festival (es-CL-CatalinaNeural, tú).
 * Escribir: a revision note on Elena's second batch of subtitles.
 */
export const lesson: LiveLesson = {
  id: 512,
  level: 'C2',
  title: 'Elipsis compleja y recuperación inferencial',
  subtitle: 'Condensar sin perder sentido y recuperar lo que no se dice: Luis, Medicina; no sé quién; ¿Lo de siempre?; titulares; implicaturas.',
  legend: [
    { tone: 'orange', label: 'ELIPSIS ESTRUCTURAL · la sintaxis devuelve lo que falta (Luis, Medicina · no sé quién)' },
    { tone: 'blue', label: 'FRAGMENTO Y ELIPSIS SITUACIONAL · la situación o el género completan (¿Lo de siempre? · Detenido el…)' },
    { tone: 'violet', label: 'IMPLICATURA · lo que se da a entender sin decirlo' },
    { tone: 'teal', label: 'SUSTITUTOS DE POLARIDAD · sí, no, también, tampoco en lugar de una oración' },
  ],
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Lo que no está, pero se entiende', coach: 'El lector completa con la estructura, la situación o la inferencia. The reader fills the gap.',
      steps: [
        { title: 'Cuarenta caracteres por línea · Forty characters a line', blocks: [
          { kind: 'lead', text: 'En el **Estudio Contraluz** se subtitula «La última mesa», un documental sobre el cierre de Casa Ordóñez, el restaurante que los hermanos Ramón y Pilar Ordóñez llevaron durante sesenta años. El cliente ha fijado un límite de cuarenta caracteres por línea. Elena Prieto, la subtituladora más joven, lo completa todo «para que se entienda». Carmen Olmedo, la jefa de revisión, le devuelve los subtítulos con una idea: **el espectador no necesita que se lo digas todo; necesita poder recuperarlo**.', en: 'At Estudio Contraluz they are subtitling a documentary about the closing of a family restaurant. The client allows forty characters per line. Elena, the youngest subtitler, spells everything out “so it’s clear”. Carmen, the head of revision, sends the subtitles back with one principle: viewers don’t need to be told everything; they need to be able to recover it.' },
          { kind: 'compare', title: 'El mismo subtítulo, dos versiones · The same subtitle, two versions', columns: [
            { tone: 'neutral', label: 'VERSIÓN DE ELENA', sentence: 'Mi hermano quería seguir con el restaurante. Yo no quería seguir. Alguien nos hizo una oferta, pero no sé quién nos la hizo.', idea: 'Correcta, pero ocupa cuatro líneas y repite lo que el espectador ya tiene en la cabeza.', en: 'Correct, but it takes four lines and repeats what the viewer already has in mind.' },
            { tone: 'orange', label: 'VERSIÓN DE CARMEN', sentence: 'Mi hermano quería seguir; [[yo, no|teal]]. Alguien nos hizo una oferta, [[pero no sé quién|orange]].', idea: 'La coma y «no» sustituyen a «quería seguir»; «quién» basta para recuperar «nos la hizo».', en: 'The comma plus “no” stand for “quería seguir”, and the bare “quién” is enough to recover “nos la hizo”.' },
          ] },
          { kind: 'table', title: '¿De dónde sale lo que falta? · Where does the missing part come from?', head: ['Fuente · Source', 'Ejemplo', 'El lector recupera…'], rows: [
            ['La **estructura** de la frase', '[[Ana estudió Derecho; Luis, Medicina.|orange]]', '«estudió», copiado de la oración paralela'],
            ['La **situación**', '(En la barra) [[¿Un café?|blue]]', '«¿Quiere / Quieres un café?»: no hay antecedente en el texto'],
            ['Las convenciones del **género**', '[[Detenido el presunto autor del robo.|blue]]', '«Ha sido detenido…»: así se escriben los titulares'],
            ['La **inferencia** sobre la intención', '—¿Qué tal el examen? —[[Bueno, el profesor es simpático.|violet]]', 'algo que no se dice: el examen no fue bien'],
          ], note: 'En la clase 487 recuperabas lo que estaba a la vista («la de Ana», «Yo tampoco»). En C2 trabajas los casos en que hay que **reconstruir** el hueco, y los límites: cuándo la elipsis deja de ser gramatical o deja dos lecturas.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'En la versión de Carmen, ¿qué recupera el espectador después de «yo,»?', options: ['«no quería hacer una oferta»', '«no quería seguir con el restaurante»', '«no sé quién»'], answer: 1, why: 'La coma y «no» copian el verbo y el complemento de la oración anterior, con la polaridad cambiada.', en: 'In Carmen’s version, what does the viewer recover after “yo,”?' },
            { prompt: 'En «—¿Un café?», dicho en la barra, ¿de dónde sale el verbo que falta?', options: ['De una oración anterior del texto.', 'De la situación: quien sirve ofrece algo.', 'De un titular.'], answer: 1, why: 'No hay antecedente escrito: la situación (la barra, quien sirve) basta para entender «¿Quieres un café?».', en: 'In “¿Un café?” said at the bar, where does the missing verb come from?' },
          ] },
        ] },
        { title: 'El verbo copiado y la pregunta reducida · Gapping and sluicing', mascot: '/brand/mascot/studying.webp', coach: 'Un hueco con condiciones; una pregunta de una palabra. A gap with conditions; a one-word question.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'VERBO OMITIDO EN ORACIONES COORDINADAS', question: '¿Qué condiciones tiene que cumplir el hueco para que el lector copie el verbo sin dudar?', en: 'This kind of ellipsis, usually called gapping, removes the verb of the second clause, sometimes with more material, and leaves two remnants separated by a comma. It works in coordinated or juxtaposed clauses (y, ni, o, a semicolon) and in comparatives, with parallel structure. The copied verb keeps the same tense and mood, but it takes the person and number of its new subject: “Yo me ocupo de los diálogos; Joaquín y Elena, de las canciones” = se ocupan. The gap always comes second: the full verb has to appear first.', formula: ['oración completa ; / y + resto 1 , resto 2', 'el verbo copiado: mismo tiempo y modo · persona y número propios', 'solo en coordinación y comparativas · el hueco, siempre después'],
            meaning: 'La elipsis del verbo en la segunda oración (en la gramática se llama a veces **gapping**) deja dos restos separados por una coma. Funciona en oraciones **coordinadas o yuxtapuestas** (y, ni, o, punto y coma) y en comparativas, con **estructura paralela**. El verbo copiado conserva **el tiempo y el modo**, pero toma **la persona y el número** de su nuevo sujeto. El hueco va **siempre después**: primero tiene que aparecer el verbo completo.',
            examples: [
              { es: 'De los dos hijos de Ramón, [[uno defendía el cambio; el otro, la continuidad|orange]].', en: 'Of Ramón’s two sons, one argued for change; the other, for continuity. “Defendía” is copied.' },
              { es: 'Yo me ocupo de los diálogos; [[Joaquín y Elena, de las canciones|orange]].', en: 'The copied verb changes person: me ocupo → se ocupan.' },
              { es: 'Pilar abría el comedor a las siete; [[Ramón, la cocina a las nueve|orange]].', en: 'Three pieces stay (subject, object, time) and only the verb disappears.' },
            ] },
          { kind: 'concept', tone: 'orange', label: 'LA PREGUNTA REDUCIDA', question: '¿Qué queda cuando de una pregunta indirecta solo sobrevive el interrogativo?', en: 'In sluicing, an indirect question shrinks to its question word: “Alguien dejó flores, pero nadie sabe quién (las dejó)”. The antecedent is often an indefinite (alguien, algo, algún), but it can be implicit: “Dice que volverá, pero no dice cuándo” recovers “cuándo volverá” although no time was mentioned. If the verb needs a preposition, careful usage keeps it with the question word: “no recuerda con cuál”. Without it, “no sé quién” is understood as “who it was”, a looser, more colloquial option. The question word keeps its accent.', formula: ['algo / alguien + …, pero no sé + qué / quién', 'antecedente implícito: no dice cuándo · no explicó por qué', 'con preposición: no sé con quién · de qué · para qué'],
            meaning: 'En la pregunta reducida, una interrogativa indirecta se queda solo en el **interrogativo**: «Alguien dejó flores, pero nadie sabe quién (las dejó)». El antecedente suele ser un indefinido (alguien, algo, algún), pero puede ser **implícito**: en «Dice que volverá, pero no dice cuándo» nadie había mencionado un momento y aun así se recupera «cuándo volverá». Si el verbo pide preposición, en el uso cuidado **se conserva**: «no recuerda con cuál». Sin ella, «no sé quién» se entiende como «quién era», una opción más suelta y coloquial. El interrogativo lleva **tilde**.',
            examples: [
              { es: 'El último día alguien dejó flores en la puerta, [[pero nadie sabe quién|orange]].', en: 'Someone left flowers at the door on the last day, but nobody knows who.' },
              { es: 'Ramón dice que algún día volverá a cocinar, [[pero no dice dónde|orange]].', en: 'No place was mentioned, yet “dónde volverá a cocinar” is recovered: the antecedent is implicit.' },
              { es: 'Pilar llegó a un acuerdo con uno de los compradores, [[pero no dice con cuál|orange]].', en: 'Pilar reached an agreement with one of the buyers, but she won’t say which. The preposition stays.' },
            ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Ramón firmaba las facturas; sus hijos, los contratos». ¿Qué verbo se recupera después de «sus hijos»?', options: ['firmaban', 'firmaba', 'firman'], answer: 0, why: 'Mismo tiempo (imperfecto) que la primera oración, pero con la persona del nuevo sujeto: sus hijos firmaban.', en: 'Which verb is recovered after “sus hijos”?' },
            { prompt: 'Ramón se despidió de alguien en la puerta. ¿Qué versión recupera exactamente «se despidió de alguien»?', options: ['…pero no vi de quién.', '…pero no vi a quién.', '…pero no vi con quién.'], answer: 0, why: '«Despedirse» pide «de»; en el uso cuidado, la pregunta reducida conserva esa preposición. «A quién» y «con quién» cambian el verbo que se recupera.', en: 'Which version exactly recovers “he said goodbye to someone”?' },
          ] },
        ] },
        { title: 'Fragmentos, situaciones, titulares y notas · Fragments, situations, headlines and notes', mascot: '/brand/mascot/speaking.webp', coach: 'Sin antecedente escrito: manda el contexto. No written antecedent: context rules.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'FRAGMENTOS Y ELIPSIS SITUACIONAL', question: '¿Qué pasa cuando la respuesta es solo un trozo o cuando nadie ha dicho el verbo?', en: 'A fragment answer is a piece of a clause that the question completes. It keeps the marks it would have in the full sentence: the preposition (“¿Con quién cerraste la caja?” “Con Pilar”), the “a” of a person object, the agreement. Situational ellipsis has no antecedent at all: the setting supplies it (“¿Mesa para dos?”, “¿Lo de siempre?”, “¡Ni una palabra!”). It is normal in service encounters, at home and at work, and it relies on shared knowledge: outside that situation the same fragment can be opaque.', formula: ['pregunta + fragmento con sus marcas: —¿Con quién? —Con Pilar.', 'situación + fragmento: ¿Mesa para dos? · ¿Lo de siempre?', 'conocimiento compartido: fuera de contexto, opaco'],
            meaning: 'Una respuesta fragmentaria es un trozo de oración que completa la pregunta. Conserva **las marcas** que tendría en la oración completa: la preposición («—¿Con quién cerraste la caja? —Con Pilar»), la «a» de persona, la concordancia. La **elipsis situacional** no tiene antecedente: la situación lo pone todo («¿Mesa para dos?», «¿Lo de siempre?», «¡Ni una palabra!»). Es normal en el bar, en la tienda, en casa y en el trabajo, y depende del **conocimiento compartido**: fuera de esa situación, el mismo fragmento puede no entenderse.',
            examples: [
              { es: '—¿A quién le diste las llaves del local? —[[A la vecina del segundo|blue]].', en: 'The fragment keeps the “a” of the question: le di las llaves a la vecina.' },
              { es: 'En la puerta del comedor: —[[¿Mesa para dos?|blue]] —[[Para tres, si puede ser|blue]].', en: 'Nobody has said “¿Necesitan una mesa…?”: the setting supplies it.' },
              { es: 'Ramón, a la cámara, mientras cierra la persiana: «[[Sesenta años. Y ni un día sin abrir|blue]]».', en: 'Verbless sentences: the images and the moment complete them.' },
            ] },
          { kind: 'table', title: 'Titulares y notas: elipsis por convención · Headlines and notes: ellipsis by convention', head: ['Recurso', 'Ejemplo', 'Se entiende'], rows: [
            ['participio sin auxiliar (concuerda con el nombre)', '[[Cerrado tras sesenta años el comedor de los Ordóñez|blue]]', 'Ha sido cerrado / Ha cerrado…'],
            ['presente por pasado reciente', '[[Muere a los 90 años la fundadora de la casa|blue]]', 'Ha muerto…'],
            ['oración sin verbo', '[[Nuevo retraso en las obras del mercado|blue]]', 'Hay un nuevo retraso…'],
            ['infinitivo como instrucción', '[[Revisar el minuto doce.|blue]]', 'Hay que revisar / Revisa…'],
            ['dos puntos y coma en una nota', '[[Créditos: pendientes. Tráiler, igual.|blue]]', 'Los créditos están pendientes; el tráiler también.'],
          ], note: 'Los titulares de prensa y las notas internas omiten auxiliares, artículos y verbos copulativos. Son elipsis **por convención del género**: correctas en un titular o en una nota, extrañas en una carta o en un diálogo.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Detenida la presunta autora del robo del cuadro». ¿Qué se sobrentiende?', options: ['Ha sido detenida la presunta autora…', 'Ha detenido la presunta autora…', 'Detiene a la presunta autora…'], answer: 0, why: 'El participio sin auxiliar de los titulares equivale a una pasiva: ha sido detenida. Por eso concuerda con «autora».', en: 'What is understood in this headline?' },
            { prompt: '—¿A quién le has dejado las llaves? —___.', options: ['Con Ramón', 'A Ramón', 'Ramón'], answer: 1, why: 'El fragmento conserva la «a» que tendría en la oración completa: le he dejado las llaves a Ramón.', en: '“Who did you leave the keys with?” “With Ramón.” (In Spanish: “A Ramón”.)' },
          ] },
        ] },
        { title: 'Lo que se dice y lo que se da a entender · Said and implied', mascot: '/autoestudio/mascot/noting.webp', coach: 'La respuesta corta también comunica lo que calla. Short answers say things they don’t say.', blocks: [
          { kind: 'concept', tone: 'violet', label: 'IMPLICATURA', question: 'Si la respuesta no contesta lo que se pregunta, ¿qué concluye quien escucha?', en: 'An elliptical or sideways answer can carry a meaning nobody says: an implicature. The listener assumes the speaker is cooperating, so if the answer seems not to fit the question, they look for the reason: “¿Qué tal el examen?” “Bueno, el profesor es simpático” suggests the exam went badly. What is recovered from ellipsis is part of what was said; an implicature is inferred and can be cancelled without contradiction: “La fotografía, preciosa… y el guion, también” cancels the hint that the script was poor.', formula: ['respuesta que esquiva la pregunta → quien escucha busca la razón', 'lo recuperado por elipsis = dicho · lo inferido = implicado', 'la implicatura se puede cancelar sin contradicción'],
            meaning: 'Una respuesta elíptica o desviada puede transmitir algo que nadie dice: una **implicatura**. Quien escucha supone que el otro coopera; si la respuesta no parece encajar con la pregunta, busca el motivo: «—¿Qué tal el examen? —Bueno, el profesor es simpático» sugiere que el examen fue mal. Lo que se recupera por elipsis forma parte de **lo dicho**; la implicatura **se infiere** y se puede **cancelar** sin contradecirse: «La fotografía, preciosa… y el guion, también» anula la sospecha de que el guion era flojo.',
            examples: [
              { es: '—¿Te gustó la película? —[[La fotografía, preciosa|violet]].', en: 'Said: the photography was lovely. Implied: the rest, not so much.' },
              { es: '—¿Vienes a la última cena del restaurante? —[[Ese día trabajo hasta las doce|violet]].', en: 'Said: I work until midnight. Implied: I can’t come.' },
              { es: '[[Algunos subtítulos están bien|violet]]; de hecho, casi todos.', en: '“Algunos” suggests “not all”, but the speaker cancels it straight away.' },
            ] },
          { kind: 'compare', title: 'Tres capas de una respuesta · Three layers of an answer', columns: [
            { tone: 'neutral', label: 'LO QUE SE OYE', sentence: '—¿Te da pena cerrar? —Bueno, los nietos están contentos.', idea: 'Una frase sobre los nietos.', en: 'A sentence about the grandchildren.' },
            { tone: 'orange', label: 'LO QUE SE RECUPERA', sentence: 'Los nietos están contentos (con el cierre).', idea: 'El complemento omitido sale de la pregunta: es parte de lo dicho.', en: 'The missing complement comes from the question: it belongs to what was said.' },
            { tone: 'violet', label: 'LO QUE SE DA A ENTENDER', sentence: 'A mí sí me da pena, pero no quiero decirlo.', idea: 'Nadie lo dice. Si el subtítulo lo escribe, deja de ser una inferencia del espectador.', en: 'Nobody says it. If the subtitle spells it out, the viewer no longer gets to infer it.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '—¿Qué tal el piso nuevo? —Tiene mucha luz. ¿Qué parte es implicatura?', options: ['Que tiene mucha luz.', 'Que quizá tiene otros defectos.', 'Que es un piso.'], answer: 1, why: 'La luz es lo dicho. Responder con una sola virtud invita a pensar que el resto no convence, pero se podría cancelar: «…y además es barato».', en: '“How’s the new flat?” “It’s got lots of light.” Which part is implied?' },
            { prompt: '¿Qué continuación cancela la implicatura de «Algunos actores estuvieron bien»?', options: ['…pero no todos.', '…de hecho, todos.', '…los demás, flojos.'], answer: 1, why: '«Algunos» sugiere «no todos»; «de hecho, todos» lo anula sin contradicción. Las otras dos opciones confirman la implicatura.', en: 'Which continuation cancels the hint in “Some actors were good”?' },
          ] },
        ] },
        { title: 'Los límites: cuándo la elipsis falla · When ellipsis breaks down', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Si el hueco no se puede copiar, hay que escribirlo. If the gap can’t be copied, write it out.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'POLARIDAD Y LÍMITES', question: '¿Qué palabra sustituye a la oración cuando cambia o se mantiene el sí y el no?', en: 'When the polarity changes, a polarity word must stay: “Ramón no quería cerrar, pero Pilar sí”. A bare remnant (“*pero Pilar”) is not enough. Sí / no can also stand for a whole subordinate clause: “Dice que no le da pena, pero yo creo que sí”. Ellipsis also fails when the copied verb would need another tense, when the gap sits inside a subordinate clause (porque, aunque, cuando), when it comes before the verb, and when it leaves the polarity unclear.', formula: ['negación + pero + sujeto + sí · afirmación + sujeto, no', 'coincidencia: también / tampoco', 'oración entera: creo que sí · dice que no'],
            meaning: 'Cuando cambia la polaridad, tiene que quedar una palabra que la marque: «Ramón no quería cerrar, pero Pilar **sí**». Un resto sin marca («*pero Pilar») no basta. **Sí / no** pueden sustituir también a una subordinada entera: «Dice que no le da pena, pero yo creo **que sí**». La elipsis falla además cuando el verbo copiado necesitaría otro tiempo, cuando el hueco está dentro de una subordinada (porque, aunque, cuando), cuando va delante del verbo y cuando deja la polaridad en el aire.',
            examples: [
              { es: 'Ramón no quería vender el local, [[pero Pilar sí|teal]].', en: 'Ramón didn’t want to sell the premises, but Pilar did.' },
              { es: 'Pilar quería jubilarse; [[Ramón, no|teal]].', en: 'Pilar wanted to retire; Ramón didn’t.' },
              { es: 'Ramón dice que no le da pena cerrar, [[pero yo creo que sí|teal]].', en: 'Ramón says he isn’t sad about closing, but I think he is: “que sí” stands for a whole clause.' },
            ] },
          { kind: 'table', title: 'Cinco límites · Five limits', head: ['Problema', 'No funciona', 'Mejor así'], rows: [
            ['cambia el tiempo', '*Pilar cerró la caja ayer; Ramón, mañana.', 'Pilar cerró la caja ayer; Ramón **la cerrará** mañana.'],
            ['hueco en una subordinada', '*Pilar cocinaba porque Ramón, las cuentas.', 'Pilar cocinaba porque Ramón **llevaba** las cuentas.'],
            ['hueco antes del verbo', '*Pilar, la caja, y Ramón cerró la cocina.', 'Pilar cerró la caja y Ramón, la cocina.'],
            ['negación sin marca', '*Ramón no fue a la cena, pero Pilar.', 'Ramón no fue a la cena, pero Pilar [[sí|teal]].'],
            ['polaridad dudosa', 'Ramón no leyó el contrato; Pilar, el anexo. (¿lo leyó o no?)', 'Pilar [[sí|teal]] leyó el anexo. / Pilar [[tampoco|teal]] leyó el anexo.'],
          ], note: 'En la conversación espontánea se oyen huecos más libres, pero en un texto cuidado (y en un subtítulo, que se lee una sola vez) conviene respetar estos límites.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '—A Ramón no le gustó el montaje final. —A Pilar ___: dice que es justo lo que esperaba.', options: ['tampoco', 'también', 'sí'], answer: 2, why: 'Hay contraste con una negación: a Pilar sí (le gustó). «Tampoco» y «también» repetirían la negación y contradirían lo que sigue.', en: '“Ramón didn’t like the final cut.” “Pilar did: she says it’s just what she expected.”' },
            { prompt: '¿Qué frase respeta los límites de la elipsis?', options: ['Pilar se jubiló en mayo y Ramón, el año que viene.', 'Pilar se jubiló en mayo porque Ramón, en junio.', 'Pilar se jubiló en mayo y Ramón, en junio.'], answer: 2, why: 'Se copia «se jubiló» sin cambiar el tiempo y en coordinación. Con «el año que viene» haría falta un futuro; tras «porque» no cabe el hueco.', en: 'Which sentence respects the limits of ellipsis?' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/kneeling.webp', coach: 'Primero la regla, luego el reflejo. Rule first, then reflex.', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees cada frase con el error y tu alumno dice qué límite falla (tiempo, subordinada, polaridad, preposición, concordancia) antes de ver la corrección.', self: 'Lee cada frase y di qué límite falla antes de mirar la corrección. (Name the broken limit first.)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Joaquín revisó el tráiler el lunes; Elena, la semana que viene.', right: 'Joaquín revisó el tráiler el lunes; Elena lo revisará la semana que viene.', why: 'El verbo copiado sería «revisó»: si cambia el tiempo, hay que escribirlo.' },
            { wrong: 'A Carmen no le convenció el final, pero a Elena.', right: 'A Carmen no le convenció el final, pero a Elena sí.', why: 'Con cambio de polaridad tiene que quedar «sí»; con «convencer», además, se mantiene «a».' },
            { wrong: 'Detenido la presunta autora del robo.', right: 'Detenida la presunta autora del robo.', why: 'El participio del titular concuerda con el nombre: (ha sido) detenida.' },
            { wrong: 'Alguien ha cambiado el guion, pero no sé quien.', right: 'Alguien ha cambiado el guion, pero no sé quién.', why: 'Es un interrogativo indirecto: lleva tilde aunque esté solo.' },
            { wrong: 'Elena, los créditos, y Joaquín revisa el tráiler.', right: 'Elena revisa los créditos y Joaquín, el tráiler.', why: 'El hueco va después del verbo completo, nunca antes.' },
            { wrong: '—¿Vienen Ramón y Pilar al estreno? —Ramón no; Pilar, también.', right: '—¿Vienen Ramón y Pilar al estreno? —Ramón no; Pilar, sí.', why: '«También» coincide con un sí; tras un «no» y con contraste, «sí».' },
          ] },
          { kind: 'decide', title: '¿Omitir o escribir? · Drop it or write it?', steps: [
            { q: '¿El hueco está en una coordinación o yuxtaposición, después del verbo completo?', yes: 'next', no: 'Escribe el verbo: «porque Ramón **llevaba** las cuentas».' },
            { q: '¿El verbo copiado tendría el mismo tiempo y modo?', yes: 'next', no: 'Escribe el verbo: «Ramón **la cerrará** mañana».' },
            { q: '¿Cambia o se mantiene la polaridad de forma clara?', yes: 'Omite con la marca: «[[Pilar, sí|teal]]», «[[Ramón, tampoco|teal]]», «[[pero no sé quién|orange]]».', no: 'Añade «sí», «no», «también» o «tampoco», o repite el verbo.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué versión es correcta?', options: ['Ramón nunca quiso salir en el documental, pero Pilar sí.', 'Ramón nunca quiso salir en el documental, pero Pilar.', 'Ramón nunca quiso salir en el documental, pero Pilar también.'], answer: 0, why: '«Nunca» es negativo; Pilar contrasta: sí. Sin marca la frase queda incompleta.', en: 'Which version is correct?' },
            { prompt: 'Subtítulo: «Alguien ha pedido cambios, pero no sé ___».', options: ['quien', 'quiénes los', 'quién'], answer: 2, why: 'Interrogativo con tilde y solo: la pregunta reducida no repite el verbo ni sus pronombres.', en: 'Subtitle: “Someone has asked for changes, but I don’t know who.”' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno cuenta en cuatro frases quién hacía qué en su casa de pequeño, sin repetir ningún verbo, y añade una respuesta que dé a entender algo sin decirlo.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'La revisión de la primera tanda', coach: 'Toca cada expresión marcada. Tap each marked expression.',
      steps: [
        { title: 'Carmen y Elena, frente a la pantalla · Carmen and Elena at the screen', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Carmen y tu alumno es Elena. Después tu alumno toca cada expresión marcada y dice qué se recupera y de dónde: de la estructura, de la situación, del género o de una inferencia.', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada: ¿qué se recupera y de dónde? (What is recovered, and from where?)' } },
          { kind: 'explore', title: 'Sesenta años en cuarenta caracteres', setting: 'Martes por la tarde, sala de revisión del Estudio Contraluz. Carmen, la jefa de revisión, repasa con Elena la primera tanda de subtítulos de «La última mesa». Se tratan de tú. (Revising the first batch of subtitles together.)', lines: [
            { who: 'Carmen', text: 'He revisado tu primera tanda. Vas bien, pero te sobran palabras. En el minuto doce, Ramón dice «Mi padre llevaba la cocina; [[mi madre, las cuentas|orange]]», y tú has puesto «y mi madre llevaba las cuentas».', en: 'I’ve gone through your first batch. You’re doing fine, but you use too many words. At minute twelve Ramón says “My father ran the kitchen; my mother, the books”, and you’ve written it out in full.' },
            { who: 'Elena', text: 'Temía que no se entendiera: en ese plano solo se ve el comedor vacío.', en: 'I was afraid it wouldn’t be clear: that shot only shows the empty dining room.' },
            { who: 'Carmen', text: 'Se entiende sin problema: el verbo es el mismo y la estructura, paralela. Igual en el quince, cuando suena el teléfono: «Alguien ha reservado para el sábado, [[pero no sé quién|orange]]». Con eso basta.', en: 'It’s perfectly clear: same verb, parallel structure. Same at fifteen, when the phone rings: “Someone has booked for Saturday, but I don’t know who.” That’s enough.' },
            { who: 'Elena', text: 'Yo había puesto «no sé quién ha sido». Lo quito. ¿Y la escena del cliente de toda la vida?', en: 'I’d written “I don’t know who it was”. I’ll cut it. What about the scene with the lifelong regular?' },
            { who: 'Carmen', text: 'Esa no la toques. Pilar solo le pregunta «[[¿Lo de siempre?|blue]]», y él contesta «[[Hoy, sin azúcar|blue]]». El espectador ve la barra y la cafetera; no hace falta más.', en: 'Leave that one alone. Pilar just asks “The usual?” and he says “No sugar today.” The viewer can see the bar and the coffee machine; nothing else is needed.' },
            { who: 'Elena', text: 'Lo que me preocupa es el final. El periodista le pregunta a Ramón si le da pena cerrar y él contesta: «[[Bueno, los nietos están contentos|violet]]». Yo he subtitulado «No, no me da pena».', en: 'What worries me is the ending. The journalist asks Ramón if he’s sad to close and he says: “Well, the grandchildren are happy.” I subtitled it “No, I’m not sad”.' },
            { who: 'Carmen', text: 'Ahí sí hay un problema. Ramón no dice que no; no dice nada de sí mismo. [[Lo que calla|violet]] es justo lo que el espectador tiene que oír. Deja la frase tal cual.', en: 'That is a problem. Ramón doesn’t say no; he says nothing about himself. What he leaves unsaid is exactly what the viewer needs to hear. Keep the line as it is.' },
            { who: 'Elena', text: 'Tienes razón. ¿Y estas notas tuyas en el guion? Aquí pone «[[Min. 20: subtítulo largo. Min. 24, también|blue]]».', en: 'You’re right. And these notes of yours on the script? It says “Min. 20: subtitle too long. Min. 24, same.”' },
            { who: 'Carmen', text: 'Eso. En los dos hay más texto del que da tiempo a leer. ¿Has terminado los créditos?', en: 'Exactly. Both have more text than there’s time to read. Have you finished the credits?' },
            { who: 'Elena', text: '[[Los iniciales, sí; los finales, todavía no|teal]].', en: 'The opening ones, yes; the closing ones, not yet.' },
            { who: 'Carmen', text: 'Pues [[los finales, para mañana a primera hora|blue]]. ¿[[Un café|blue]] antes de seguir?', en: 'Then the closing credits first thing tomorrow. Coffee before we carry on?' },
            { who: 'Elena', text: '[[Si es rápido, sí|teal]]: me quedan veinte minutos de episodio.', en: 'If it’s a quick one, yes: I’ve got twenty minutes of the episode left.' },
          ], notes: {
            'mi madre, las cuentas': '**Verbo omitido en coordinación**: mi madre (llevaba) las cuentas. Mismo tiempo, estructura paralela, hueco después del verbo completo: el espectador lo copia sin esfuerzo.',
            'pero no sé quién': '**Pregunta reducida**: no sé quién (ha reservado). El antecedente es «alguien»; el interrogativo, con tilde, basta.',
            '¿Lo de siempre?': '**Elipsis situacional**: no hay antecedente en el diálogo. La barra y la costumbre del cliente completan «¿Te pongo lo de siempre?».',
            'Hoy, sin azúcar': '**Fragmento** que se apoya en la situación: (ponme lo de siempre, pero) hoy, sin azúcar. El espectador ve la taza.',
            'Bueno, los nietos están contentos': '**Implicatura**: la respuesta no contesta la pregunta. Al hablar solo de los nietos, Ramón da a entender que a él sí le da pena. «Bueno» anuncia que la respuesta no va a ser directa.',
            'Lo que calla': 'Carmen nombra la **implicatura**: lo que Ramón no dice. Si el subtítulo escribe «No, no me da pena», añade algo que él no dijo y borra lo que dejó entender.',
            'Min. 20: subtítulo largo. Min. 24, también': '**Elipsis de nota**: sin verbo ni artículos (en el min. 20 hay un subtítulo largo) y con «también» en lugar de repetir todo el comentario.',
            'Los iniciales, sí; los finales, todavía no': '**Sustitutos de polaridad**: los (créditos) iniciales, sí (los he terminado); los finales, todavía no. «Sí» y «todavía no» sustituyen a toda la oración.',
            'los finales, para mañana a primera hora': '**Fragmento directivo**: (termina) los finales para mañana. Entre compañeras, el verbo se deduce de la pregunta y del papel de Carmen.',
            'Un café': '**Elipsis situacional**: (¿Te apetece / Vamos a tomar) un café? La hora y la pausa del trabajo lo explican todo.',
            'Si es rápido, sí': '**Polaridad** dentro de una condición: si (el café) es rápido, sí (me apetece). «Sí» recupera la respuesta a la invitación.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Por qué Carmen quiere mantener la respuesta de Ramón tal cual?', options: ['Porque lo que Ramón da a entender es parte del sentido de la escena.', 'Porque es la frase más corta del documental.', 'Porque Ramón pidió no cambiar nada.'], answer: 0, why: '«Lo que calla es justo lo que el espectador tiene que oír»: el subtítulo no debe sustituir la implicatura por una afirmación.', en: 'Why does Carmen want to keep Ramón’s answer as it is?' },
            { prompt: '¿Qué ha terminado ya Elena?', options: ['Los créditos iniciales.', 'Todos los créditos.', 'El episodio completo.'], answer: 0, why: '«Los iniciales, sí; los finales, todavía no».', en: 'What has Elena already finished?' },
            { prompt: '¿Qué problema señalan las notas de Carmen en los minutos 20 y 24?', options: ['Que los subtítulos son demasiado largos.', 'Que faltan subtítulos.', 'Que hay errores de traducción.'], answer: 0, why: '«Min. 20: subtítulo largo. Min. 24, también»: «también» repite el comentario; Carmen lo confirma: «más texto del que da tiempo a leer».', en: 'What problem do Carmen’s notes for minutes 20 and 24 point out?' },
          ] },
        ] },
        { title: '¿De dónde sale lo que falta? · Where does the missing part come from?', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'classify', title: 'Más frases del documental y del estudio · More lines from the film and the studio', categories: [
            { id: 'estructura', label: 'ESTRUCTURA · se copia de la oración paralela o de la pregunta', tone: 'orange' },
            { id: 'situacion', label: 'SITUACIÓN · lo completa lo que se ve o se comparte', tone: 'blue' },
            { id: 'genero', label: 'GÉNERO · titular o nota, por convención', tone: 'neutral' },
            { id: 'inferencia', label: 'INFERENCIA · no está dicho, se da a entender', tone: 'violet' },
          ], items: [
            { text: 'Pilar servía los desayunos; su sobrina, las comidas.', answer: 'estructura', why: 'Su sobrina (servía) las comidas: el verbo se copia de la primera oración.' },
            { text: 'Rótulo en pantalla: «Reabierto el mercado tras la reforma».', answer: 'genero', why: 'Participio sin auxiliar: (ha sido) reabierto. Convención de titular.' },
            { text: 'El cliente, señalando la vitrina: «Dos de esos, por favor».', answer: 'situacion', why: 'Lo que señala completa el fragmento: nadie ha nombrado el producto.' },
            { text: '—¿Volvería a abrir? —Tengo setenta y ocho años.', answer: 'inferencia', why: 'No contesta sí ni no: da a entender que ya no tiene edad para volver a abrir.' },
            { text: 'La productora llamó, pero no dijo para qué.', answer: 'estructura', why: 'No dijo para qué (llamó): pregunta reducida con antecedente en la oración.' },
            { text: 'Nota de Joaquín: «Tráiler: revisado. Créditos, pendientes».', answer: 'genero', why: 'Estilo de nota: sin verbo copulativo ni artículos (el tráiler está revisado).' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: tu alumno elige la respuesta de Ramón o la de las rodillas y explica qué cambiaría si el subtítulo la «completara».' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: '¿Se puede recuperar? ¿Se dice o se da a entender? Can it be recovered? Said or implied?',
      steps: [
        { title: 'Decide la forma · Choose the form', blocks: [
          { kind: 'choice', items: [
            { prompt: 'Informe para la productora: «Se consultó a varios especialistas, pero el expediente no aclara ___».', options: ['cuáles', 'de cuáles', 'a cuáles'], answer: 2, why: '«Consultar a» alguien: en un informe cuidado, la pregunta reducida conserva la preposición. «Cuáles» se entendería como «cuáles eran» y suena más suelto; «de cuáles» recupera otro verbo.', en: 'Report: “Several experts were consulted, but the file doesn’t say which.”' },
            { prompt: 'Joaquín entregó los subtítulos ayer y Elena va a entregarlos mañana. ¿Qué versión une bien las dos ideas?', options: ['Joaquín entregó los subtítulos ayer y Elena los entregará mañana.', 'Joaquín entregó los subtítulos ayer; Elena, mañana.', 'Joaquín entregó los subtítulos ayer; Elena también mañana.'], answer: 0, why: 'El verbo copiado sería «entregó»; como cambia el tiempo, hay que escribirlo: los entregará.', en: 'Joaquín handed in the subtitles yesterday and Elena will do it tomorrow.' },
            { prompt: '¿Qué titular está bien formado?', options: ['Ampliadas hasta el lunes las inscripciones del festival.', 'Ampliado hasta el lunes las inscripciones del festival.', 'Ha ampliado hasta el lunes las inscripciones del festival.'], answer: 0, why: 'Participio sin auxiliar que concuerda con «las inscripciones»: (han sido) ampliadas.', en: 'Which headline is well formed?' },
            { prompt: '—¿Te ha gustado la versión final? —Los colores están muy logrados. ¿Qué se da a entender?', options: ['Que le ha gustado todo.', 'Que todavía no ha visto la versión final.', 'Que hay otras cosas que no le convencen tanto.'], answer: 2, why: 'Responder con un solo aspecto positivo sugiere reservas sobre el resto; es una implicatura, no algo dicho.', en: '“Did you like the final version?” “The colours are really well done.” What is implied?' },
            { prompt: 'Ramón nunca ha visto el documental completo y Pilar ___ lo ha visto: dice que le da miedo.', options: ['también', 'sí', 'tampoco'], answer: 2, why: 'Coincide con una negación («nunca») y lo que sigue confirma que no lo ha visto: tampoco.', en: 'Ramón has never watched the whole documentary and Pilar hasn’t either: she says it scares her.' },
          ] },
        ] },
        { title: '¿Dicho o implicado? · Said or implied?', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'guide', text: { teacher: 'Tu alumno lee cada intercambio y la interpretación entre comillas, y decide si se recupera de las palabras o si es una inferencia. Para cada implicatura, propone una continuación que la cancele.', self: 'Decide si la interpretación se recupera de las palabras o si se infiere. Para las implicaturas, piensa cómo se podrían cancelar. (Could you cancel it?)' } },
          { kind: 'classify', title: 'Lo dicho y lo implicado · What is said and what is implied', categories: [
            { id: 'dicho', label: 'SE RECUPERA · está en la estructura, la pregunta o el género', tone: 'orange' },
            { id: 'implicado', label: 'SE INFIERE · no está dicho, se da a entender', tone: 'violet' },
          ], items: [
            { text: '—¿Quién revisa el tráiler? —Joaquín. → «Joaquín revisa el tráiler».', answer: 'dicho', why: 'El fragmento completa la pregunta: el verbo se copia de ella.' },
            { text: '—¿Vienes al estreno? —Tengo el turno de noche. → «No voy a ir».', answer: 'implicado', why: 'Nadie dice «no»: se infiere del turno. Se podría cancelar: «…pero lo cambio».' },
            { text: 'Elena subtitula la serie; Joaquín, la película. → «Joaquín subtitula la película».', answer: 'dicho', why: 'Verbo omitido en coordinación: se copia de la oración paralela.' },
            { text: '—¿Es buena la nueva correctora? —Tiene una letra preciosa. → «Como correctora no destaca».', answer: 'implicado', why: 'Elogiar algo irrelevante sugiere una crítica; no está dicho.' },
            { text: 'Alguien ha cambiado el guion, pero no sé quién. → «No sé quién ha cambiado el guion».', answer: 'dicho', why: 'Pregunta reducida: el resto de la oración se copia.' },
            { text: '—¿Cenamos juntos hoy? —Mañana, si quieres. → «Hoy no puedo».', answer: 'implicado', why: 'Proponer otro día da a entender que hoy no; no lo dice.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Joaquín subtitula la serie; Elena y Carmen, el documental.', ok: true, why: 'Correcta: el verbo copiado cambia de persona (subtitulan) sin cambiar de tiempo.' },
            { sentence: 'Elena, los créditos, y Joaquín revisa el tráiler.', ok: false, options: ['Elena, los créditos y Joaquín, el tráiler.', 'Elena revisa los créditos y Joaquín, el tráiler.', 'Elena los créditos, y Joaquín revisa, el tráiler.'], answer: 1, why: 'El hueco va después del verbo completo, nunca antes; y sin ningún verbo no hay nada que copiar.' },
            { sentence: 'A Pilar le encantó la música, pero a su hermano.', ok: false, options: ['A Pilar le encantó la música, pero a su hermano tampoco.', 'A Pilar le encantó la música, pero a su hermano no.', 'A Pilar le encantó la música, pero su hermano no.'], answer: 1, why: 'Con cambio de polaridad tiene que quedar «no»; con «encantar» se mantiene la «a». «Tampoco» coincidiría con una negación que no existe.' },
            { sentence: 'Joaquín subtituló el primer episodio porque Elena, el segundo.', ok: false, options: ['Joaquín, el primer episodio, porque Elena subtituló el segundo.', 'Joaquín subtituló el primer episodio porque Elena ya había subtitulado el segundo.', 'Joaquín subtituló el primer episodio porque Elena, subtituló el segundo.'], answer: 1, why: 'Tras «porque» no cabe el hueco del verbo: en una subordinada hay que escribirlo.' },
            { sentence: 'Muere a los 92 años el último camarero de Casa Ordóñez.', ok: true, why: 'Correcta como titular: presente por pasado reciente (ha muerto), recurso habitual de la prensa.' },
            { sentence: 'Detenido la presunta autora del robo del cuadro.', ok: false, options: ['Detenidos la presunta autora del robo del cuadro.', 'Detener la presunta autora del robo del cuadro.', 'Detenida la presunta autora del robo del cuadro.'], answer: 2, why: 'El participio del titular concuerda con el nombre: (ha sido) detenida.' },
          ] },
        ] },
        { title: 'Mensajes entre Elena y Joaquín · Texts between Elena and Joaquín', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'chat-fill', title: 'Fin de jornada · End of the working day', lines: [
            { who: 'Joaquín', text: '¿Has subtitulado ya la entrevista del periodista?' },
            { who: 'Elena', text: 'La primera parte, ___; la segunda, no.', options: ['también', 'tampoco', 'sí'], answer: 2, why: 'Contraste con el «no» que sigue: la primera parte, sí (la he subtitulado).' },
            { who: 'Joaquín', text: 'Carmen dice que a la productora no le ha gustado tu versión del final.' },
            { who: 'Elena', text: 'Y a Carmen ___: dice que le quité todo el matiz. Ya lo he cambiado.', options: ['también', 'sí', 'tampoco'], answer: 2, why: 'Coincide con una negación (no le ha gustado): a Carmen tampoco. Lo que sigue confirma que no le gustó.' },
            { who: 'Joaquín', text: 'Por cierto, ha llegado un correo de la productora pidiendo cambios, pero sin firma.' },
            { who: 'Elena', text: 'Entonces lo ha escrito alguien de allí, pero no sabemos ___.', options: ['cuál', 'quién', 'quien'], answer: 1, why: 'Pregunta reducida: no sabemos quién (lo ha escrito). Interrogativo con tilde; «cuál» pediría elegir entre opciones ya dichas.' },
            { who: 'Joaquín', text: '¿Te apetece cenar con el equipo esta noche?' },
            { who: 'Elena', text: '___ Otro día me apunto.', options: ['Uf, mañana entrego los créditos a primera hora.', 'Sí, mañana entrego los créditos a primera hora.', 'Tampoco, mañana entrego los créditos.'], answer: 0, why: 'Elena rechaza sin decir «no»: la implicatura sale de la excusa. «Sí» contradice «otro día»; «tampoco» necesitaría una negación previa.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['Pilar', 'quería', 'vender;', 'Ramón,', 'no.'], accept: ['Pilar quería vender; Ramón, no.'], en: 'Pilar wanted to sell; Ramón didn’t.' },
            { tiles: ['Ha', 'llamado', 'alguien,', 'pero', 'no', 'sé', 'quién.'], accept: ['Ha llamado alguien, pero no sé quién.'], en: 'Someone has called, but I don’t know who.' },
            { tiles: ['Hablaron', 'de', 'algo', 'importante,', 'pero', 'no', 'sé', 'de', 'qué.'], accept: ['Hablaron de algo importante, pero no sé de qué.'], en: 'They talked about something important, but I don’t know what.' },
          ] },
        ] },
        { title: 'Condensa sin perder sentido · Condense without losing meaning', mascot: '/autoestudio/mascot/noting.webp', blocks: [
          { kind: 'guide', text: { teacher: 'Tu alumno condensa cada subtítulo y lo lee en voz alta. Tú compruebas que no se ha perdido información y que no ha aparecido una ambigüedad.', self: 'Condensa y relee: ¿se recupera todo lo que falta? (Can everything be recovered?)' } },
          { kind: 'rewrite', title: 'Subtítulos más cortos · Shorter subtitles', items: [
            { prompt: 'Mi hermano se quedó con el restaurante y mi hermana se quedó con la casa del pueblo.', instruction: 'Omite el verbo repetido.', accept: ['Mi hermano se quedó con el restaurante y mi hermana, con la casa del pueblo', 'Mi hermano se quedó con el restaurante; mi hermana, con la casa del pueblo'] },
            { prompt: 'Alguien me dejó una carta en la puerta, pero no sé quién me la dejó.', instruction: 'Reduce la segunda pregunta al interrogativo.', accept: ['Alguien me dejó una carta en la puerta, pero no sé quién'] },
            { prompt: 'Ramón no quería vender el local, pero Pilar quería venderlo.', instruction: 'Sustituye la segunda oración por una marca de polaridad.', accept: ['Ramón no quería vender el local, pero Pilar sí', 'Ramón no quería vender el local, pero Pilar sí quería', 'Ramón no quería vender el local; Pilar, sí'] },
            { prompt: 'El ayuntamiento ha cerrado el mercado de abastos por obras.', instruction: 'Conviértelo en titular con un participio sin auxiliar.', accept: ['Cerrado el mercado de abastos por obras', 'Cerrado por obras el mercado de abastos'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno toma un mensaje suyo real y lo condensa a la mitad de palabras sin que se pierda nada que el destinatario no pueda recuperar.' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Un audio de Carmen', coach: 'Primero la idea, después los detalles. Gist first, then details.',
      steps: [
        { title: 'Noticias desde el festival · News from the festival', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general. Segunda escucha: tu alumno anota cada verbo que Carmen omite y lo que da a entender sin decirlo. Después, las preguntas.', self: 'Escucha una vez para la idea general. En la segunda, anota cada hueco y cada cosa que Carmen da a entender. Vas a oír «la productora» (the production company) y «la proyección» (the screening).' } },
          { kind: 'listen', title: 'Un audio de Carmen', channel: 'NOTA DE VOZ · DE CARMEN A ELENA', src: '/audio/grammar-live/512.mp3',
            before: 'Carmen está en un festival donde se proyecta «La última mesa». Antes de entrar a la sala, le manda un audio a Elena. ¿Qué crees que le cuenta? (What do you think she tells her?)',
            gist: { prompt: '¿Para qué manda Carmen el audio? · Why does Carmen send the voice note?', options: ['Para anular la entrega de los créditos.', 'Para contarle la reacción de la productora y repartir el trabajo pendiente.', 'Para pedirle que cambie el final como quiere la productora.'], answer: 1, why: 'Cuenta qué opina la productora, por qué no acepta un cambio y quién hace qué.', en: 'She reports the production company’s reaction and shares out the remaining work.' },
            details: [
              { prompt: '¿Qué subtítulos no le han gustado a la productora?', options: ['Los créditos.', 'Los subtítulos en inglés.', 'El subtitulado para personas sordas.'], answer: 1, why: '«El subtitulado para personas sordas les ha encantado; los subtítulos en inglés, bastante menos».', en: 'Which subtitles didn’t the production company like?' },
              { prompt: '¿Qué sabe Carmen de quién pidió el cambio del final?', options: ['Que fue Ramón.', 'Nada: no le han dicho quién ni por qué.', 'Que fue el director.'], answer: 1, why: '«Alguien de la productora ha pedido cambios en el final, pero no me han dicho quién ni por qué».', en: 'What does Carmen know about who asked for the change?' },
              { prompt: '¿Qué hace Elena hoy?', options: ['El tráiler.', 'Nada: tiene el día libre.', 'Los créditos y el final.'], answer: 2, why: '«Joaquín se ocupa del tráiler; tú, de los créditos y del final».', en: 'What is Elena doing today?' },
              { prompt: '¿Qué da a entender Carmen con «Bueno, el plazo era muy corto»?', options: ['Que no está del todo satisfecha con el trabajo.', 'Que está encantada con el trabajo.', 'Que no sabe cuál era el plazo.'], answer: 0, why: 'No contesta si están contentas; habla del plazo. La productora entiende que el resultado podría haber sido mejor.', en: 'What is Carmen implying with “Well, the deadline was very tight”?' },
            ],
            transcript: 'Hola, Elena, soy Carmen. Te mando un audio porque estoy a punto de entrar en la proyección y no puedo llamarte. Ha llamado la productora del documental. Hay buenas noticias y alguna no tan buena. Las buenas: el subtitulado para personas sordas les ha encantado; [[los subtítulos en inglés, bastante menos|orange]]. Esos no son nuestros, así que tranquila. La no tan buena: alguien de la productora ha pedido cambios en el final, [[pero no me han dicho quién ni por qué|orange]]. Quieren que Ramón diga claramente que no le da pena cerrar. Yo les he dicho que no, que eso no es lo que dice él. ¿Que si se van a enfadar? [[Puede que sí|teal]]. Pero un subtítulo no es un comunicado de prensa. Otra cosa: en la nota que te dejé ayer ponía «[[Créditos: mañana|blue]]». Era para hoy a primera hora; si ya están, perfecto, y [[si no, antes de comer|teal]]. Joaquín se ocupa del tráiler; [[tú, de los créditos y del final|orange]]. Y una última cosa: me preguntaron si estábamos contentas con el trabajo. Les dije: «[[Bueno, el plazo era muy corto|violet]]». Creo que lo entendieron. Hablamos a la vuelta. Un abrazo.',
            reply: { teacher: 'Tú eres Carmen y le haces preguntas a tu alumno, que es Elena («¿Has terminado los créditos?», «¿Y el final?», «¿Te parece bien lo que dije a la productora?»). Tu alumno contesta con respuestas cortas y elípticas, y en una de ellas da a entender algo sin decirlo.', self: 'Responde a Carmen en voz alta como Elena: cuéntale qué has terminado y qué no, sin repetir verbos, y da a entender qué opinas de la productora sin decirlo. (Reply aloud without repeating verbs.)' } },
          { kind: 'tip', icon: '🔊', title: 'Una nota de voz real · A real voice note', text: 'Carmen habla rápido y omite mucho, pero nunca se pierde: el verbo copiado («los subtítulos en inglés, bastante menos»), la pregunta reducida («no me han dicho quién ni por qué»), la condición sin verbo («si no, antes de comer») y, al final, una implicatura que la productora entiende sin que nadie la diga.', en: 'Carmen speaks fast and leaves a lot out, yet you never get lost: a copied verb, a one-word question, a verbless condition and, at the end, an implicature the producers understand without anyone saying it.' },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Decir menos, comunicar más', coach: 'Fragmentos claros, silencios elocuentes. Clear fragments, telling silences.',
      steps: [
        { title: 'Huecos, fragmentos e implicaturas · Gaps, fragments and implicatures', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas y tu alumno responde con elipsis. Si un hueco no se puede recuperar, tú preguntas «¿quién?», «¿cuándo?» o «¿qué quieres decir?» y tu alumno lo aclara.', self: 'Responde en voz alta con elipsis, pero comprueba que alguien que te escuche podría recuperar cada hueco. (Could a listener recover every gap?)' } },
          { kind: 'talk', cards: [
            { q: '¿Tienes un sitio donde ya no necesitas pedir: un bar, una panadería, una peluquería? Representa el diálogo. · A place where you don’t even need to order?', followUps: ['¿Qué pasaría si fuera otra persona quien te atendiera?', '¿Cuánto tiempo tardaste en llegar a ese punto?'], phrases: ['[[¿Lo de siempre?|blue]]', '[[Hoy, sin…|blue]]', '[[¿Para llevar?|blue]]'], hint: 'Escribe solo fragmentos: la situación pone el verbo.', example: 'En la panadería de mi calle la dependienta me ve entrar y dice: «¿La integral?». Yo: «Y hoy, dos magdalenas». Ella: «¿Para llevar?». Yo: «Para llevar». Si viene una chica nueva, tengo que explicarlo todo.' },
            { q: 'Responde sin contestar del todo: ¿qué tal tu último viaje, tu último trabajo, la última película que viste? · Answer without quite answering.', followUps: ['¿Qué has dado a entender?', '¿Cómo lo cancelarías?'], phrases: ['[[Bueno, el hotel tenía piscina|violet]]…', '[[La música, estupenda|violet]].', '…de hecho, …'], hint: 'Elige un detalle lateral; después cancela o confirma lo que se entiende.', example: '¿El viaje? Bueno, el hotel tenía piscina. ¿La película? La música, estupenda. Lo que he dado a entender es que lo demás no estuvo a la altura. Aunque, de hecho, la película me gustó entera: era una broma.', next: 'Ahora, quién hacía qué.' },
            { q: '¿Cómo se repartían las tareas en tu casa cuando eras pequeño o pequeña? · Who did what at home?', followUps: ['¿Y ahora, en tu casa?', '¿Alguien no hacía nada?'], phrases: ['Mi padre cocinaba; [[mi madre, …|orange]]', '[[Mi hermano, no|teal]].', '[[Yo, tampoco|teal]].'], hint: 'Verbo completo en la primera oración; después solo restos con coma.', example: 'Mi madre cocinaba entre semana; mi padre, los domingos. Mi hermana lavaba los platos; yo, las ollas. Mi hermano pequeño no hacía nada, y yo, durante años, tampoco: hasta los doce, solo poníamos excusas.' },
            { q: 'Cuenta un pequeño misterio: algo que alguien hizo sin que sepas quién, cuándo o por qué. · A small mystery.', followUps: ['¿Lo descubriste al final?', '¿Tienes alguna sospecha?'], phrases: ['Alguien…, [[pero no sé quién|orange]].', '[[No sé con qué intención|orange]]…', '…[[ni cuándo|orange]].'], hint: 'Usa la pregunta reducida, con preposición cuando el verbo la pida.', example: 'Hace un mes alguien dejó una planta en mi puerta, pero no sé quién. Tampoco sé con qué intención: no había nota. Sospecho de mi vecina del cuarto, aunque no sé por qué lo haría.', teacher: 'Tú preguntas «¿Y no sabes de quién…?» o «¿con quién…?» y tu alumno responde con la pregunta reducida y su preposición.', next: 'Ahora, titulares.' },
            { q: 'Resume tu semana en tres titulares y después cuéntala con frases completas. · Your week in three headlines.', followUps: ['¿Qué has quitado en los titulares?', '¿Cuál suena más dramático?'], phrases: ['[[Aprobado…|blue]]', '[[Nuevo retraso en…|blue]]', '[[Suspendida…|blue]]'], hint: 'Participio sin auxiliar que concuerda, presente por pasado, oración sin verbo.', example: '«Aprobado por fin el presupuesto del proyecto». «Nuevo retraso en la entrega de las sillas». «Suspendida la cena del viernes por falta de quórum». Es decir: me aprobaron el presupuesto, las sillas siguen sin llegar y la cena se canceló porque nadie podía.' },
            { q: 'Eres Carmen: la productora quiere que el subtítulo diga lo que Ramón calla. Defiende tu postura. · Defend the subtitle.', followUps: ['¿Hay casos en que convenga explicitar?', '¿Qué pierde el espectador si se lo das todo hecho?'], phrases: ['Lo que Ramón [[da a entender|violet]]…', 'Si el subtítulo lo dice, …', 'Una cosa es condensar y otra…'], hint: 'Distingue lo dicho de lo implicado y explica por qué el subtítulo no debe convertir lo uno en lo otro.', example: 'Ramón no dice que no le dé pena: habla de sus nietos. Lo que da a entender es justo lo contrario, y ese silencio es la escena. Si el subtítulo escribe «No me da pena», le atribuimos una frase que no dijo. Condensar sí; inventar, no.', teacher: 'Tú haces de productora e insistes («El público no lo va a entender»). Tu alumno responde con argumentos.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno pregunta y tú respondes con algún error a propósito («pero Pilar.», «Elena, mañana» con otro tiempo, «no sé quien» sin tilde al escribir). Tu alumno lo detecta y lo corrige.', self: 'Graba tus respuestas a dos tarjetas y escúchalas: ¿se recupera cada hueco? ¿Has dejado alguna implicatura? (Can every gap be recovered?)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'La nota de revisión', coach: 'Breve, precisa y sin huecos imposibles. Brief, precise, no impossible gaps.',
      steps: [
        { title: 'Revisar la segunda tanda · Reviewing the second batch', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Después tu alumno lee la nota en voz alta y juntos comprueban que cada hueco se recupera y que la implicatura que hay que conservar está bien explicada.', self: 'Escribe tu nota y toca «Revisar mi texto». Después reléela como Elena: ¿sabes qué hacer en cada minuto? (Reread it as Elena.)' } },
          { kind: 'write', title: 'Nota de revisión · Revision note', situation: 'Eres Carmen (o eres tú, revisando un texto real de un compañero). Escribes a Elena una nota sobre su segunda tanda de subtítulos: qué está bien, qué sobra y qué respuesta de Pilar o de Ramón debe quedarse tal cual porque da a entender algo. (A revision note to a colleague: what works, what to cut, what to keep as it is.)', task: [
            'Incluye notas telegráficas por minuto (Min. 31: …; Min. 34, igual).',
            'Une al menos dos informaciones con un verbo omitido y su coma (Joaquín…; tú, …).',
            'Usa una marca de polaridad en lugar de una oración (…, sí · …, todavía no · tampoco).',
            'Incluye una pregunta reducida (no dice quién, no sabemos por qué…).',
            'Explica una implicatura que el subtítulo no debe convertir en afirmación.',
          ], starters: ['Elena: he revisado la segunda tanda.', 'En general, …; …, algo largas.', 'Min. 31: …', 'Min. 34, igual.', 'No lo cambies por…', '…, pero no dice quién.', 'Él ya ha terminado; tú, …'],
            words: ['Min. 31, igual', 'sobra / sobran', 'tal cual', 'da a entender', 'no dice quién', 'tú, todavía no', 'pero … sí', 'tampoco'],
            model: 'Elena: he revisado la segunda tanda. En general, muy bien: [[los diálogos de cocina, impecables; las entrevistas, algo largas|orange]]. Notas: [[Min. 31: dos líneas, sobra una. Min. 34, igual|blue]]. Min. 40: el «bueno» de Pilar, imprescindible. Cuando el periodista le pregunta si volvería a abrir, ella contesta: «Bueno, mis rodillas dicen que no». No lo cambies por un «no» seco: [[la respuesta da a entender que ganas no le faltan|violet]], pero que el cuerpo no da para más, y eso tiene que llegar al espectador. Min. 45: Ramón cuenta que alguien le escribió una carta, [[pero no dice quién|orange]]. Déjalo así; no añadas «un cliente», porque no lo sabemos. Joaquín ha revisado los créditos iniciales; [[tú, los finales|orange]]. Él ya ha terminado; [[tú, todavía no|teal]], así que eso, para mañana. ¿Dudas? Me llamas. Carmen',
            minWords: 110,
            checks: [
              { label: 'Una nota telegráfica por minuto (Min. 31: …)', pattern: '(?<!\\p{L})min(?:uto)?\\.?\\s*\\d+', tip: 'Organiza los comentarios por minuto, en estilo de nota: «Min. 31: sobra una línea».' },
              { label: 'Una pregunta reducida (no dice quién, no sé por qué…)', pattern: '(?<!\\p{L})no\\s+(?:sé|sabemos|saben|dice|dijo|dicen|ha\\s+dicho|aclara|explica|recuerda)\\s+(?:(?:a|con|de|para|por|en)\\s+)?(?:quién|quiénes|qué|cuándo|dónde|adónde|cómo|cuál|cuáles|por\\s+qué)\\s*[.,;:]', tip: 'Reduce una pregunta indirecta al interrogativo: «…, pero no dice quién».' },
              { label: 'Una marca de polaridad tras coma (…, sí · …, todavía no · …, tampoco)', pattern: ',\\s*(?:sí|no|también|tampoco|todavía\\s+no)\\s*[.,;:]', tip: 'Sustituye una oración entera por «sí», «no», «tampoco» o «todavía no»: «tú, todavía no».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})pero\\s+(?:a\\s+)?(?:él|ella|yo|tú|mí|ti|nosotros|nosotras|ellos|ellas|Pilar|Ramón|Joaquín|Elena)\\s*[.;]', why: 'Tras una negación o una afirmación, un sujeto solo no basta: añade «sí», «no», «también» o «tampoco» (pero Pilar **sí**).' },
              { pattern: '(?<!\\p{L})no\\s+(?:sé|sabemos|dice|dijo)\\s+quien\\s*[.,;:]', why: 'En la pregunta reducida, «quién» lleva tilde: no sé **quién**.' },
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
            { tone: 'orange', label: 'ELIPSIS ESTRUCTURAL', formula: 'resto, resto (verbo copiado) · pero no sé + interrogativo', example: 'Uno defendía el cambio; el otro, la continuidad. Alguien llamó, pero no sé quién.', caption: 'mismo tiempo · solo en coordinación · preposición conservada', en: 'The syntax hands back the missing verb or question: same tense, coordination only, keep the preposition' },
            { tone: 'blue', label: 'FRAGMENTO, SITUACIÓN Y GÉNERO', formula: 'fragmento con sus marcas · situación · titular o nota', example: '—¿Con quién? —Con Pilar. ¿Lo de siempre? Detenida la presunta autora…', caption: 'el participio del titular concuerda', en: 'Questions, settings and genre conventions supply what is missing; the headline participle agrees with its noun' },
            { tone: 'violet', label: 'IMPLICATURA', formula: 'respuesta que esquiva → inferencia · cancelable', example: '—¿Qué tal el examen? —Bueno, el profesor es simpático.', caption: 'no se recupera: se infiere', en: 'Not recovered but inferred, and it can be cancelled without contradiction' },
            { tone: 'teal', label: 'SUSTITUTOS DE POLARIDAD', formula: 'pero + sujeto + sí · sujeto, no · también / tampoco · creo que sí', example: 'Yo no fui, pero ella sí. Pilar quería jubilarse; Ramón, no.', caption: 'sin marca, la elipsis no funciona', en: 'When polarity changes or must be confirmed, a polarity word has to stay' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Antes de quitar algo, pregúntate **de dónde lo va a recuperar el lector**: de una estructura paralela, de la pregunta, de la situación o del género. Si no hay fuente clara, si cambia el tiempo o si la polaridad queda en el aire, **escríbelo**. Y si quieres que el lector concluya algo por su cuenta, **no lo digas**: deja la implicatura, que el lector la descubra solo.', en: 'Before you drop anything, ask where the reader will recover it from: a parallel structure, the question, the situation or the genre. If there is no clear source, the tense changes or the polarity is left hanging, write it out. And if you want the reader to draw a conclusion, don’t state it: leave the implicature for them to find.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'Los productores querían un final feliz; la directora, ___.', options: ['no', 'tampoco', 'sí'], answer: 0, why: 'Contraste con una afirmación: la directora, no (lo quería).', en: 'The producers wanted a happy ending; the director didn’t.' },
            { prompt: 'Yo trabajo de noche; mis compañeros, ___.', options: ['de día', 'trabajan de día', 'también de día'], answer: 0, why: 'Tras la coma solo queda el resto: el verbo (trabajan) se copia con la persona del nuevo sujeto.', en: 'I work nights; my colleagues, days.' },
            { prompt: 'Titular: «___ hasta el lunes el plazo de inscripción».', options: ['Ha ampliado', 'Ampliado', 'Ampliada'], answer: 1, why: 'El participio concuerda con «el plazo»: (ha sido) ampliado.', en: 'Headline: “Registration deadline extended until Monday”.' },
            { prompt: '—¿Qué tal tu nuevo jefe? —Bueno… es muy puntual. ¿Qué se entiende?', options: ['Que siempre llega tarde.', 'Que no hay mucho más que destacar de él.', 'Que es un jefe perfecto.'], answer: 1, why: 'Destacar solo la puntualidad, con «bueno…», sugiere reservas: es una implicatura.', en: '“How’s your new boss?” “Well… he’s very punctual.” What is understood?' },
            { prompt: 'Les pidieron ayuda a varios vecinos, pero no recuerdo ___.', options: ['con cuáles', 'a cuáles', 'de cuáles'], answer: 1, why: '«Pedir ayuda a» alguien: la pregunta reducida conserva esa preposición en el uso cuidado.', en: 'They asked several neighbours for help, but I can’t remember which.' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/walking.webp', coach: 'Ahora, un ensayo de teatro. Now, a theatre rehearsal.', blocks: [
          { kind: 'lead', text: 'Teresa es ayudante de dirección en una compañía de teatro. Tiene que pasar al equipo las notas del ensayo y su borrador es demasiado largo. Ayúdala a condensarlo sin perder información.', en: 'Teresa is an assistant director in a theatre company. She has to send the team the rehearsal notes, and her draft is far too long. Help her condense it without losing information.' },
          { kind: 'rewrite', title: 'Las notas de Teresa · Teresa’s notes', items: [
            { prompt: 'El director corrigió el primer acto y la ayudante corrigió el segundo acto.', instruction: 'Omite el verbo repetido.', accept: ['El director corrigió el primer acto y la ayudante, el segundo', 'El director corrigió el primer acto; la ayudante, el segundo', 'El director corrigió el primer acto y la ayudante, el segundo acto', 'El director corrigió el primer acto; la ayudante, el segundo acto'] },
            { prompt: 'Alguien ha movido la escenografía, pero nadie sabe quién ha movido la escenografía.', instruction: 'Reduce la pregunta al interrogativo.', accept: ['Alguien ha movido la escenografía, pero nadie sabe quién'] },
            { prompt: 'La escena tres está demasiado larga. La escena cinco también está demasiado larga.', instruction: 'Escríbelo como nota telegráfica de ensayo.', accept: ['Escena tres: demasiado larga. Escena cinco, también', 'Escena 3: demasiado larga. Escena 5, también', 'Escena tres, demasiado larga; escena cinco, también', 'Escena 3, demasiado larga; escena 5, también', 'Escenas tres y cinco: demasiado largas', 'Escenas 3 y 5: demasiado largas', 'Escena tres: demasiado larga. Escena cinco, igual', 'Escena 3: demasiado larga. Escena 5, igual'] },
          ] },
        ] },
        { title: 'Ampliación: más allá del hueco · Extension: beyond the gap', mascot: '/brand/mascot/portrait.webp', coach: 'Opcional. Optional.', blocks: [
          { kind: 'lead', text: 'Para estudiantes fuertes o si queda tiempo. **1.** Con una negación o un contraste, de toda la oración puede quedar un solo elemento: «Firmó el contrato Carmen, **no Joaquín**»; «Vino Elena, **pero no Joaquín**» (= Joaquín no vino). **2.** En la narración oral se omite con frecuencia el verbo de decir: «Le pregunté si venía y **él, que no**» (= él dijo que no). **3.** Muchos refranes son elípticos y se recuperan por costumbre: «A buen entendedor, pocas palabras (bastan)», «Ojos que no ven, corazón que no siente», «Cada loco con su tema».', en: 'For strong students or spare time. 1. With negation or contrast, a whole clause can shrink to one element: “Firmó Carmen, no Joaquín” (Joaquín didn’t sign). 2. Oral storytelling often drops the verb of saying: “y él, que no” = he said no. 3. Many proverbs are elliptical and recovered by habit: “A buen entendedor, pocas palabras (bastan)”.' },
          { kind: 'choice', title: 'Registro y matices · Register and nuance', items: [
            { prompt: '«A buen entendedor, pocas palabras». ¿Qué verbo se sobrentiende?', options: ['sobran', 'faltan', 'bastan'], answer: 2, why: 'La forma completa del refrán es «A buen entendedor, pocas palabras bastan»: quien entiende bien no necesita explicaciones largas.', en: 'Which verb is understood in this proverb?' },
            { prompt: 'Narración oral: «Le pregunté si venía y él, que no». ¿Qué se omite?', options: ['Un verbo de decir: él (dijo) que no.', 'Un verbo de deseo: él (quería) que no.', 'Nada: es una oración completa.'], answer: 0, why: 'En el relato oral, «que» + respuesta presupone un verbo de lengua: dijo, contestó.', en: 'Oral narrative: “I asked if he was coming and he said no.” What is left out?' },
            { prompt: '«Firmó el contrato Carmen, no Joaquín». ¿Qué se entiende?', options: ['Que Carmen no lo firmó.', 'Que Joaquín no firmó el contrato.', 'Que Joaquín firmó otro contrato.'], answer: 1, why: 'De la segunda oración solo queda «no Joaquín»: (no lo firmó) Joaquín.', en: '“Carmen signed the contract, not Joaquín.” What is understood?' },
            { prompt: '¿Dónde es adecuado el estilo «Revisado cap. 2. Pendiente cap. 3»?', options: ['En una carta de disculpa a un cliente.', 'En el subtítulo de un diálogo.', 'En una nota interna entre compañeros.'], answer: 2, why: 'Es elipsis por convención de la nota: eficaz entre quienes comparten el contexto, fría o extraña fuera de él.', en: 'Where is this telegraphic style appropriate?' },
          ] },
          { kind: 'teacher', text: 'Paso opcional, solo si queda tiempo o para estudiantes fuertes. Extra: tu alumno busca un titular de prensa con participio o sin verbo y lo reescribe como oración completa; después comenta qué se gana y qué se pierde.' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 213 · Ambigüedad intencional y ambigüedad accidental', text: 'Hoy has visto que omitir funciona mientras el lector pueda recuperar lo que falta, y que una respuesta elíptica puede dar a entender más de lo que dice. En la clase 213 trabajas el otro lado: frases que admiten dos lecturas, cuándo es un descuido que hay que reparar y cuándo un efecto buscado («La propuesta del director puede tener dos lecturas»).', en: 'Today you saw that leaving things out works as long as the reader can recover them, and that an elliptical answer can imply more than it says. In class 213 you work on the other side: sentences with two readings, when that is a slip to repair and when it is a deliberate effect.', href: '/gramatica/ambiguedad-intencional-y-ambiguedad-accidental', label: 'Ir a la clase 213' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Por qué no se puede decir “*Pilar cerró la caja ayer; Ramón, mañana”?». Respuesta esperada: el verbo copiado sería «cerró» y el tiempo cambia. Tarea: condensar un texto propio a la mitad sin crear huecos imposibles.' },
        ] },
      ],
    },
  ],
};
