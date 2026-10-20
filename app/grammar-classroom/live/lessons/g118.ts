import type { LiveLesson } from '../types';

/**
 * Lesson 118 · C1 · Ambigüedad gramatical.
 * An editor (Carmen) and an author (Lucía) revise a review of a photography
 * exhibition; the director, the photographer and two reports run through
 * every section.
 */
export const lesson: LiveLesson = {
  id: 118,
  level: 'C1',
  title: 'Ambigüedad gramatical',
  subtitle: 'Detectar cuándo una frase admite dos lecturas plausibles y reformularla: núcleos omitidos, papeles con «de» y sujetos implícitos.',
  legend: [
    { tone: 'blue', label: 'Elipsis · ¿qué núcleo se recupera?' },
    { tone: 'violet', label: 'Nombre + de · ¿quién hace y quién recibe?' },
    { tone: 'orange', label: 'Infinitivo · sujeto implícito' },
    { tone: 'teal', label: 'Que + oración · sujeto explícito' },
  ],
  optionNotes: {
    'Agente': 'El agente realiza la acción que expresa el nombre: quien critica, quien elige, quien evalúa.',
    'Paciente': 'El paciente recibe la acción: quien es criticado, elegido o evaluado.',
    'Clara': 'Clara: el contexto deja una sola lectura plausible.',
    'Ambigua': 'Ambigua: hay dos lecturas plausibles y relevantes para el lector.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Cuando una frase significa dos cosas', coach: 'La ambigüedad no está en la frase: está en la frase y su contexto.',
      steps: [
        { title: 'La elipsis con varios candidatos · Ellipsis with several candidates', blocks: [
          { kind: 'lead', text: 'Carmen, editora de una revista cultural, recibe la reseña de una exposición fotográfica: «**La crítica de la directora** fue decisiva. **El breve y el de ayer** coinciden en la conclusión. **El deseo de volver** explica la elección de las imágenes». Tres frases correctas. Tres dudas: ¿quién critica a quién?, ¿qué documentos se comparan?, ¿quién desea volver?', en: 'Carmen, an editor at a cultural magazine, receives a review of a photography exhibition. All three sentences are grammatically correct, yet each raises a doubt: who criticises whom, which documents are being compared, and who wants to go back? This class is about spotting when a sentence allows two plausible readings, and rewording it.' },
          { kind: 'guide', text: { teacher: 'Antes de la teoría, tu alumno formula las dos lecturas posibles de cada frase y dice qué información le falta para elegir.', self: 'Antes de seguir, intenta formular las dos lecturas posibles de cada frase. ¿Qué información te falta para elegir?' } },
          { kind: 'concept', tone: 'blue', label: 'ELIPSIS Y CANDIDATOS', question: '¿Cuántos núcleos compiten?', en: 'When a noun is left out (el breve, el de ayer), ask how many nouns in the text could fill the gap. Gender and number filter the candidates and proximity points the way, but if two compatible nouns are still available, the shortcut stops being elegant and becomes ambiguous.',
            formula: ['determinante + Ø + modificador', 'pregunta clave: ¿cuántos candidatos deja el discurso?'],
            meaning: 'En C1, la pregunta no es si se puede omitir un sustantivo, sino **cuántos candidatos** deja el contexto. El género y el número filtran; la proximidad orienta; pero si **dos núcleos compatibles** siguen disponibles, la elipsis deja de ser elegante y empieza a ser ambigua.',
            examples: [
              { es: 'Revisé la propuesta inicial y [[la corregida|blue]].', en: 'I reviewed the original proposal and the corrected one. (Only one noun fits: clear.)' },
              { es: 'Entre el informe técnico y [[el de ventas|blue]], prefiero el primero.', en: 'Between the technical report and the sales one, I prefer the first.' },
              { es: 'Mencionamos un informe breve y un resumen breve. → El informe breve y [[el informe de ayer|blue]] coinciden.', en: 'A short report and a short summary have been mentioned, so the noun is repeated to show which document is meant.' },
            ],
            note: 'El antecedente no tiene que estar en la frase anterior: puede estar en el párrafo anterior. Por eso una elipsis clara al escribir puede ser ambigua al leer.' },
          { kind: 'table', title: 'Recursos para resolver una elipsis ambigua · Ways to resolve an ambiguous ellipsis', head: ['Recurso', 'Ejemplo', 'Cuándo conviene'], rows: [
            ['Repetir el núcleo', 'el informe breve y **el informe** de ayer', 'Dos candidatos del mismo género y número.'],
            ['Sinónimo o hiperónimo', 'el informe breve y **el documento** de ayer', 'Para evitar repetición, si no crea otro candidato.'],
            ['Anáfora ordinal', '**el primero**, **el segundo**, **este último**', 'Cuando los dos candidatos acaban de aparecer juntos.'],
            ['Reordenar el párrafo', 'Mencionar el resumen después de la comparación', 'Cuando el candidato que estorba puede moverse.'],
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Se mencionan un informe breve y un resumen breve. Después aparece «el breve y el de ayer». ¿Qué ayuda?', options: ['Repetir el nombre que se quiere decir.', 'Eliminar «de ayer», porque toda elipsis es clara.', 'Interpretar «el de ayer» como una persona.'], answer: 0, why: 'Dos núcleos plausibles compiten: repetir «informe» o «resumen» aclara cuál se recupera.', en: 'A short report and a short summary are mentioned. Then «el breve y el de ayer» appears. What helps the reader?' },
            { prompt: '«Revisé la propuesta inicial y la corregida.» ¿Es ambigua?', options: ['No: solo «propuesta» encaja.', 'Sí: podría ser otro documento.'], answer: 0, why: 'Un único candidato compatible y muy próximo.', en: '«I reviewed the initial proposal and the corrected one.» Is it ambiguous?' },
          ] },
        ] },
        { title: 'Nombre + «de»: ¿quién hace qué? · Noun + de: who does what?', mascot: '/brand/mascot/studying.webp', coach: 'Detrás de muchos nombres hay un verbo escondido.', blocks: [
          { kind: 'concept', tone: 'violet', label: 'NOMBRE DE EVENTO + DE', question: '¿Agente o paciente?', en: 'Nouns built from verbs (criticism, election, description, translation) keep the participants of the verb, but «de» does not say whether that person performs the action or receives it. English «the director’s criticism» has exactly the same problem.',
            formula: ['crítica ← criticar · elección ← elegir · evaluación ← evaluar', 'nombre + de + participante → ¿quien hace o quien recibe?'],
            meaning: 'Los nombres que proceden de un verbo (**crítica**, **elección**, **descripción**, **traducción**) conservan sus participantes, pero «de» no siempre dice qué papel tienen. En «la crítica **de la directora**», ella puede **emitir** la crítica (agente) o **recibirla** (paciente).',
            examples: [
              { es: '[[La crítica de la directora|violet]] fue decisiva. (¿Ella critica o la critican?)', en: 'The director’s criticism was decisive. (Did she criticise, or was she criticised?)' },
              { es: '[[La elección del presidente|violet]] sorprendió a todos. (¿Lo eligieron o eligió él?)', en: 'The president’s election surprised everyone. (Was he elected, or did he do the choosing?)' },
              { es: '[[La evaluación que hizo la directora|violet]] fue decisiva. (Ella evalúa.)', en: 'The assessment the director made was decisive. (She is the one assessing.)' },
              { es: '[[La crítica de la directora a la exposición|violet]] fue dura. (Ella critica; la exposición recibe.)', en: 'The director’s criticism of the exhibition was harsh. (She criticises; the exhibition receives it.)' },
            ],
            note: 'Cuando aparecen los dos participantes, el reparto se aclara: **de** + agente, **a** + paciente: «la crítica **de** la prensa **a** la directora».' },
          { kind: 'table', title: 'Del nombre ambiguo a la versión explícita · From the ambiguous noun to the explicit version', head: ['Expresión', 'Lectura agente', 'Lectura paciente'], rows: [
            ['la crítica de la directora', 'la crítica **que hizo** la directora', 'la crítica **a** la directora · la crítica **que recibió**'],
            ['la elección del presidente', 'la elección **que hizo** el presidente', 'la elección **de** Gómez **como** presidente'],
            ['la descripción del testigo', 'la descripción **que dio** el testigo', 'la descripción **que se hizo del** testigo'],
            ['la traducción de Borges', 'la traducción **hecha por** Borges', 'la traducción **de la obra de** Borges'],
          ], note: '**Por parte de** también marca al agente en registros formales: «las críticas **por parte de** la prensa».' },
          { kind: 'tip', icon: '⚖', title: 'Plausible no es lo mismo que posible · Plausible is not the same as possible', text: '«El asesino de Juan» es teóricamente ambiguo, pero la lectura normal presenta a Juan como **víctima**; para presentarlo como asesino diríamos «Juan, el asesino». No toda lectura imaginable tiene el mismo peso: revisa solo las que son **plausibles en ese contexto** y **relevantes para ese lector**.', en: 'In theory «el asesino de Juan» is ambiguous, but the normal reading makes Juan the victim. Not every imaginable reading carries the same weight: revise only the ones that are plausible in that context and relevant to that reader.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Sin más contexto, «la crítica de la directora» presenta a la directora como…', options: ['solo autora de la crítica.', 'autora o persona criticada.', 'solo receptora de un informe.'], answer: 1, why: 'Nombre de evento + de puede dejar el papel abierto.', en: 'Without more context, «la crítica de la directora» presents the director as…' },
            { prompt: 'La directora evaluó la exposición. ¿Qué reformulación conserva su papel?', options: ['La crítica dirigida a la directora.', 'La crítica que recibió la directora.', 'La evaluación que hizo la directora.'], answer: 2, why: '«Hizo la evaluación» la identifica como agente.', en: 'The director assessed the exhibition. Which rewording keeps her role?' },
          ] },
        ] },
        { title: 'El sujeto implícito · The implicit subject', mascot: '/brand/mascot/speaking.webp', coach: '¿Quién desea, quién teme, quién vuelve?', blocks: [
          { kind: 'concept', tone: 'orange', label: 'NOMBRE + INFINITIVO', question: '¿Quién vuelve?', en: 'With noun + infinitive (the wish to return, the fear of losing), no subject is named: the reader recovers it from the text, and it is usually the person who feels the wish or the fear. It is compact and fluent, but it only works if the reader knows who that person is.',
            formula: ['el deseo de + infinitivo', 'el temor a + infinitivo', 'la posibilidad de + infinitivo'],
            meaning: 'Con el infinitivo, el sujeto de la acción **no se nombra**: se recupera del discurso, normalmente es quien siente el deseo o el temor. Es compacto y fluido, pero solo funciona si el lector sabe **quién** es ese sujeto.',
            examples: [
              { es: 'La fotógrafa siente [[el deseo de volver|orange]] al barrio. (Ella vuelve.)', en: 'The photographer feels the desire to return to the neighbourhood. (She is the one returning.)' },
              { es: '[[El temor a perder|orange]] el empleo paraliza a muchos trabajadores. (Ellos lo pierden.)', en: 'The fear of losing their jobs paralyses many workers. (They are the ones who might lose them.)' },
              { es: 'Me ofrecieron [[la posibilidad de cambiar|orange]] de equipo. (Yo cambio.)', en: 'They offered me the chance to change teams. (I would be the one changing.)' },
            ] },
          { kind: 'concept', tone: 'teal', label: 'NOMBRE + QUE + SUBJUNTIVO', question: '¿Y si vuelve otra persona?', en: 'With «que» + a clause, the subject is stated and is usually someone other than the person who wishes or fears. The subjunctive presents the action as wished for, feared or possible, not as a fact.',
            formula: ['el deseo de que + subjuntivo', 'el temor a que / de que + subjuntivo', 'la posibilidad de que + subjuntivo'],
            meaning: 'Con **que + oración**, el sujeto aparece **explícito** y suele ser **distinto** de quien desea o teme. El subjuntivo presenta la acción como deseada, temida o posible, no como un hecho.',
            examples: [
              { es: 'Tengo [[el deseo de que vuelvas|teal]]. (Yo deseo; tú vuelves.)', en: 'I wish you would come back. (I do the wishing; you do the returning.)' },
              { es: '[[El temor a que cierren|teal]] la fábrica preocupa al pueblo.', en: 'The fear that they will close the factory worries the town.' },
              { es: 'Existe [[la posibilidad de que la fotógrafa vuelva|teal]] en primavera.', en: 'There is a chance that the photographer will come back in spring.' },
            ],
            note: 'Con el mismo sujeto, la oración suena anómala: «Tengo miedo de que **yo** me equivoque» → «Tengo miedo **de equivocarme**».' },
          { kind: 'compare', title: 'Dos formas, dos repartos · Two forms, two ways of assigning roles', columns: [
            { tone: 'orange', label: 'INFINITIVO', sentence: '[[El deseo de volver|orange]] explica la elección de las imágenes.', idea: 'El sujeto se recupera del texto. Si la fotógrafa no se ha mencionado, el lector puede pensar en la autora.', en: 'Infinitive: the subject is recovered from the text. If the photographer has not been mentioned, the reader may think the wish is the author’s.' },
            { tone: 'teal', label: 'ORACIÓN EXPLÍCITA', sentence: '[[El deseo de que la fotógrafa vuelva|teal]] explica la elección.', idea: 'El sujeto aparece, pero el deseo ya no es de ella: es de otra persona que quiere que vuelva.', en: 'Explicit clause: the subject is named, but the wish now belongs to someone else, a person who wants her to come back.' },
          ] },
          { kind: 'tip', icon: '💡', title: 'Nombrar antes, compactar después · Name first, compress afterwards', text: 'Para atribuir el deseo a la fotógrafa sin perder fluidez, **nómbrala antes** y mantén el infinitivo: «**La fotógrafa** desea volver al barrio retratado, y **ese deseo de volver** explica la elección de las imágenes». También: «el deseo **de la fotógrafa** de volver».', en: 'To attribute the wish to the photographer without losing fluency, mention her first and then keep the infinitive. Another option is «el deseo de la fotógrafa de volver».' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'La fotógrafa desea regresar y el contexto la identifica. ¿Qué comparación es adecuada?', options: ['«El deseo de volver» recupera su sujeto; «el deseo de que la fotógrafa vuelva» lo atribuye a otra persona que desea.', '«Volver» identifica por sí solo al editor como sujeto.', '«Que la fotógrafa vuelva» afirma que ya regresó.'], answer: 0, why: 'El infinitivo deja el sujeto recuperable; la oración nombra a otro sujeto. Ninguna forma afirma un regreso realizado.', en: 'The photographer wants to return and the context identifies her. Which comparison is accurate?' },
            { prompt: '¿Qué frase es natural si quien teme y quien se equivoca es la misma persona?', options: ['Tengo miedo de que me equivoque.', 'Tengo miedo de equivocarme.'], answer: 1, why: 'Mismo sujeto: infinitivo.', en: 'Which sentence sounds natural if the person who is afraid and the person who might be wrong are the same?' },
          ] },
        ] },
        { title: 'Cómo elegir · How to choose', mascot: '/brand/mascot/seated.webp', coach: 'Revisa lo plausible, no lo imaginable.', blocks: [
          { kind: 'decide', title: 'Ante una expresión breve, pregúntate · Ask yourself', steps: [
            { q: '¿Hay una omisión con más de un núcleo compatible en el discurso?', yes: '**Repite** o **especifica** el núcleo: «el informe breve y [[el informe de ayer|blue]]».', no: 'next' },
            { q: '¿Hay un nombre de evento + de cuyo participante podría hacer o recibir la acción?', yes: '**Explicita el papel**: «[[la evaluación que hizo la directora|violet]]» o «[[la crítica a la directora|violet]]».', no: 'next' },
            { q: '¿Hay un infinitivo cuyo sujeto el lector no puede recuperar con seguridad?', yes: '**Nombra antes** al sujeto o usa una forma explícita: «el deseo [[de la fotógrafa de volver|orange]]».', no: 'La expresión breve funciona: **consérvala**. La precisión no es expandirlo todo.' },
          ] },
          { kind: 'tip', icon: '📏', title: 'Tres comprobaciones · Three checks', text: 'Antes de ampliar una expresión: 1) ¿cuántos **candidatos** tiene el núcleo?, 2) ¿qué **papeles** pueden tener los participantes?, 3) ¿el **contexto inmediato** favorece una sola lectura? Si la respuesta a la tercera es sí, déjala breve.', en: 'Before expanding a phrase, ask: 1) how many candidates could the missing noun be? 2) what roles could the participants have? 3) does the immediate context favour one reading? If the answer to the third question is yes, keep it short.' },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Ambigüedades que pasan desapercibidas al escribir.', blocks: [
          { kind: 'guide', text: { teacher: 'Tu alumno formula las dos lecturas antes de que muestres la corrección y dice cuál era la intención probable.', self: 'Lee cada frase, formula las dos lecturas posibles y después toca para ver la corrección.' } },
          { kind: 'mistakes', title: '¿Dónde está la ambigüedad? · Where is the ambiguity?', items: [
            { wrong: 'Mencionamos un informe y un resumen. El breve y el de ayer coinciden.', right: 'Mencionamos un informe y un resumen. El informe breve y el informe de ayer coinciden.', why: 'Dos núcleos masculinos singulares compiten: hay que repetir el nombre.' },
            { wrong: 'La crítica de la directora fue injusta. (Quería decir: la criticaron.)', right: 'Las críticas a la directora fueron injustas.', why: '«A» marca a la directora como quien recibe la crítica.' },
            { wrong: 'Tengo miedo de que yo me equivoque.', right: 'Tengo miedo de equivocarme.', why: 'Con el mismo sujeto, se usa el infinitivo.' },
            { wrong: 'El temor a que pierden el empleo es real.', right: 'El temor a que pierdan el empleo es real.', why: 'Después de «temor a que» va subjuntivo.' },
            { wrong: 'El deseo de volver explica las imágenes. (La fotógrafa no se ha mencionado.)', right: 'El deseo de la fotógrafa de volver al barrio explica las imágenes.', why: 'Sin antecedente, el lector no sabe quién desea volver: hay que nombrarla.' },
            { wrong: 'La elección del presidente fue polémica. (Quería decir: el presidente eligió a un ministro.)', right: 'La elección que hizo el presidente fue polémica.', why: 'Sin contexto, lo normal es entender que eligieron al presidente.' },
          ] },
          { kind: 'teacher', text: 'Pide al alumno que traiga un titular de prensa con nombre + de y que explique qué lectura es plausible y por qué.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'Ambigüedad en textos reales', coach: 'Toca las expresiones marcadas.',
      steps: [
        { title: 'Una reseña que deja dudas · A review that raises doubts', blocks: [
          { kind: 'guide', text: { teacher: 'Lean el diálogo con papeles. Después, el alumno toca cada expresión y explica qué ambigüedad resuelve o por qué la conserva.', self: 'Lee el diálogo. Después toca cada expresión marcada para descubrir por qué se usó.' } },
          { kind: 'explore', title: 'Antes de publicar la reseña · Before publishing the review', setting: 'Carmen, editora, llama a Lucía, autora de la reseña de una exposición fotográfica. (An editor calls the author of a review of a photography exhibition.)', lines: [
            { who: 'Carmen', text: 'Lucía, la reseña es excelente, pero tengo tres preguntas antes de publicarla.', en: 'Lucía, the review is excellent, but I have three questions before we publish it.' },
            { who: 'Lucía', text: 'Claro, dime.', en: 'Sure, go ahead.' },
            { who: 'Carmen', text: 'Escribes «la crítica de la directora fue decisiva». ¿Ella criticó la exposición o la criticaron a ella?', en: 'You write «the director’s criticism was decisive». Did she criticise the exhibition, or was she the one criticised?' },
            { who: 'Lucía', text: 'Ella la evaluó. Entonces quizá mejor «[[la evaluación que hizo la directora|violet]]».', en: 'She assessed it. So maybe «la evaluación que hizo la directora» would be better.' },
            { who: 'Carmen', text: 'Perfecto. Segunda: «el breve y el de ayer coinciden». En el párrafo anterior mencionas un resumen breve.', en: 'Perfect. Second: «el breve y el de ayer coinciden». In the previous paragraph you mention a short summary.' },
            { who: 'Lucía', text: 'Tienes razón, comparo dos informes. Escribo «el informe breve y [[el informe de ayer|blue]]».', en: 'You’re right, I’m comparing two reports. I’ll write «el informe breve y el informe de ayer».' },
            { who: 'Carmen', text: 'Y la tercera: «el deseo de volver». ¿De quién? Leyéndolo, pensé que era tuyo.', en: 'And the third: «el deseo de volver». Whose wish is it? When I read it, I thought it was yours.' },
            { who: 'Lucía', text: 'No, es de la fotógrafa. Quiere regresar al barrio donde hizo las fotos.', en: 'No, it’s the photographer’s. She wants to go back to the neighbourhood where she took the photos.' },
            { who: 'Carmen', text: 'Entonces nómbrala antes: «La fotógrafa desea volver al barrio, y [[ese deseo de volver|orange]] explica las imágenes».', en: 'Then mention her first: «The photographer wants to return to the neighbourhood, and that wish to return explains the images».' },
            { who: 'Lucía', text: 'Me gusta. ¿Y «la propuesta inicial y [[la corregida|blue]]», en la conclusión?', en: 'I like it. And «the initial proposal and the corrected one», in the conclusion?' },
            { who: 'Carmen', text: 'Esa no la toques: solo hay una propuesta en todo el texto.', en: 'Leave that one alone: there is only one proposal in the whole text.' },
            { who: 'Lucía', text: 'Bien. No quiero que la reseña pierda fluidez [[por miedo a que alguien la malinterprete|teal]].', en: 'Good. I don’t want the review to lose its flow for fear that someone might misread it.' },
          ], notes: {
            'la evaluación que hizo la directora': 'La relativa con «hizo» marca a la directora como **agente**. «La crítica de la directora» dejaba abierto si ella criticaba o era criticada.',
            'el informe de ayer': 'Lucía **repite el núcleo** porque «el de ayer» tenía dos candidatos: el informe y el resumen.',
            'ese deseo de volver': 'Carmen **nombra antes** a la fotógrafa; después, el infinitivo recupera su sujeto sin dudas.',
            'la corregida': 'Elipsis **clara**: un único candidato («propuesta») en todo el texto. Carmen no la amplía.',
            'por miedo a que alguien la malinterprete': '**Que + subjuntivo**: Lucía teme, pero quien podría malinterpretar es otra persona («alguien»). Sujeto explícito y distinto.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Por qué Carmen no corrige «la corregida»?', options: ['Porque solo hay una propuesta en el texto.', 'Porque es una cita.', 'Porque es la conclusión.'], answer: 0, why: '«Solo hay una propuesta en todo el texto»: un único candidato.', en: 'Why doesn’t Carmen correct «la corregida»?' },
            { prompt: '¿Cómo resuelve Carmen el sujeto de «el deseo de volver»?', options: ['Nombra a la fotógrafa antes y conserva el infinitivo.', 'Elimina la frase.', 'Usa «el deseo de que vuelva».'], answer: 0, why: '«Nómbrala antes… y ese deseo de volver explica las imágenes».', en: 'How does Carmen make the subject of «el deseo de volver» clear?' },
          ] },
        ] },
        { title: 'La reunión de titulares · The headline meeting', mascot: '/brand/mascot/standing.webp', blocks: [
          { kind: 'explore', title: 'Redacción del periódico, 18:00 · Newsroom, 6 p.m.', setting: 'Andrés y Marina, periodistas, revisan los titulares de mañana. (Two journalists review tomorrow’s headlines.)', lines: [
            { who: 'Andrés', text: 'Primer titular: «[[La denuncia del alcalde|violet]] llega al juzgado».', en: 'First headline: «The mayor’s complaint reaches the court».' },
            { who: 'Marina', text: '¿El alcalde denunció a alguien o lo denunciaron a él?', en: 'Did the mayor report someone, or was he the one reported?' },
            { who: 'Andrés', text: 'Lo denunciaron los vecinos.', en: 'The residents reported him.' },
            { who: 'Marina', text: 'Entonces: «[[La denuncia de los vecinos contra el alcalde|violet]] llega al juzgado».', en: 'Then: «The residents’ complaint against the mayor reaches the court».' },
            { who: 'Andrés', text: 'Más largo, pero claro. Segundo: «[[El miedo a perder|orange]] el empleo crece entre los jóvenes».', en: 'Longer, but clear. Second: «Fear of losing their jobs is growing among young people».' },
            { who: 'Marina', text: 'Ese está bien: los que temen y los que pueden perder el empleo son los mismos.', en: 'That one is fine: the people who are afraid and the people who might lose their jobs are the same.' },
            { who: 'Andrés', text: 'Tercero: «Crece [[el temor a que cierren|teal]] la fábrica».', en: 'Third: «Fear is growing that they will close the factory».' },
            { who: 'Marina', text: 'Bien también: el pueblo teme, y quien cerraría es la empresa.', en: 'That’s fine too: the town is afraid, and the one who would close it is the company.' },
            { who: 'Andrés', text: 'Último: «Hoy se presentan el plan de vivienda y [[el de transporte|blue]]».', en: 'Last one: «Today the housing plan and the transport one are presented».' },
            { who: 'Marina', text: 'Claro: dos planes, sin otros candidatos. Lo dejamos así.', en: 'Clear: two plans and no other candidates. We leave it as it is.' },
          ], notes: {
            'La denuncia del alcalde': 'Nombre de evento + de: el alcalde puede ser **denunciante** o **denunciado**. Ambas lecturas son plausibles en una noticia.',
            'La denuncia de los vecinos contra el alcalde': '**De** + agente (los vecinos), **contra** + paciente (el alcalde). El reparto queda explícito.',
            'El miedo a perder': '**Infinitivo** con el mismo sujeto: los jóvenes temen y los jóvenes podrían perder el empleo.',
            'el temor a que cierren': '**Que + subjuntivo**: el sujeto de «cerrar» es distinto de quien teme.',
            'el de transporte': '**Elipsis clara**: el único candidato es «plan».',
          } },
          { kind: 'teacher', text: 'Pide al alumno que proponga un titular ambiguo real o inventado y que lo reescriba de dos formas: una para cada lectura.' },
        ] },
        { title: '¿Clara o ambigua? · Clear or ambiguous?', blocks: [
          { kind: 'classify', title: 'Clasifica cada expresión en su contexto · Classify each expression in its context', categories: [
            { id: 'clara', label: 'Clara en su contexto', tone: 'blue' },
            { id: 'ambigua', label: 'Ambigua: hay que reformular', tone: 'violet' },
          ], items: [
            { text: 'La denuncia del alcalde llega al juzgado.', answer: 'ambigua', why: 'Denunciante o denunciado: las dos lecturas son plausibles.' },
            { text: 'El miedo a perder el empleo crece entre los jóvenes.', answer: 'clara', why: 'El sujeto de «perder» se recupera: los jóvenes.' },
            { text: 'Hoy se presentan el plan de vivienda y el de transporte.', answer: 'clara', why: 'Un único candidato: plan.' },
            { text: 'La crítica de la directora fue decisiva.', answer: 'ambigua', why: 'Sin contexto, ella puede criticar o ser criticada.' },
            { text: 'Revisé la propuesta inicial y la corregida.', answer: 'clara', why: 'Un único candidato muy próximo.' },
            { text: 'Mencionamos un informe y un resumen. El breve coincide con el de ayer.', answer: 'ambigua', why: 'Dos núcleos compatibles compiten.' },
          ] },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Si te equivocas, lee la pista y prueba otra vez.',
      steps: [
        { title: 'Elige según el contexto · Choose according to the context', blocks: [
          { kind: 'choice', items: [
            { context: 'La prensa criticó duramente a la ministra.', prompt: '¿Qué titular lo dice sin ambigüedad?', options: ['La crítica de la ministra.', 'Las críticas de la prensa a la ministra.', 'La crítica de la ministra a la prensa.'], answer: 1, why: '«De» + agente (la prensa), «a» + paciente (la ministra).', en: 'The press harshly criticised the minister. Which headline says so without ambiguity?' },
            { context: 'El jurado eligió la novela de Ana. Ana no forma parte del jurado.', prompt: '¿Qué expresión es precisa?', options: ['La elección de Ana.', 'La elección de la novela de Ana por parte del jurado.'], answer: 1, why: '«Por parte del jurado» marca al agente; la novela es lo elegido.', en: 'The jury chose Ana’s novel; Ana is not on the jury. Which expression is precise?' },
            { context: 'Quieres que tu hermano vuelva a casa.', prompt: '¿Qué frase lo expresa?', options: ['Tengo el deseo de volver a casa.', 'Tengo el deseo de que vuelvas a casa.'], answer: 1, why: 'Otro sujeto (tu hermano): que + subjuntivo.', en: 'You want your brother to come home. Which sentence expresses that?' },
            { context: 'Los empleados temen que ellos mismos pierdan el trabajo.', prompt: '¿Qué frase es más natural?', options: ['Los empleados tienen miedo de perder el trabajo.', 'Los empleados tienen miedo de que pierdan el trabajo.'], answer: 0, why: 'Mismo sujeto: infinitivo. La segunda sugiere que pierden el trabajo otras personas.', en: 'The employees are afraid that they themselves will lose their jobs. Which sentence sounds more natural?' },
            { context: 'Se mencionan un contrato y un acuerdo, ambos firmados en marzo.', prompt: '¿Qué instrucción es precisa?', options: ['Revisa el de marzo.', 'Revisa el contrato de marzo.'], answer: 1, why: 'Dos candidatos masculinos singulares: hay que nombrar el núcleo.', en: 'A contract and an agreement are mentioned, both signed in March. Which instruction is precise?' },
            { context: 'Borges tradujo un cuento de Kafka.', prompt: '¿Qué expresión no deja dudas?', options: ['La traducción de Borges.', 'La traducción de Kafka hecha por Borges.', 'La traducción de Borges de Kafka.'], answer: 1, why: '«De Kafka» = obra traducida; «hecha por Borges» = traductor.', en: 'Borges translated a story by Kafka. Which expression leaves no doubt?' },
          ] },
        ] },
        { title: 'Compara los significados · Compare the meanings', blocks: [
          { kind: 'choice', items: [
            { prompt: '«El deseo de volver» y «el deseo de que vuelvas». ¿Qué cambia?', options: ['Quién vuelve.', 'Nada.', 'El tiempo del deseo.'], answer: 0, why: 'En la primera vuelve quien desea; en la segunda, «tú».', en: 'What changes between the two phrases?' },
            { prompt: '«El asesino de Juan.» ¿Qué lectura es la plausible?', options: ['Juan es la víctima.', 'Juan es el asesino.', 'Las dos tienen el mismo peso.'], answer: 0, why: 'La lectura normal presenta a Juan como víctima; para lo otro se dice «Juan, el asesino».', en: 'Which reading of «el asesino de Juan» is the plausible one?' },
            { prompt: '«La crítica de la prensa a la directora.» ¿Quién critica?', options: ['La prensa.', 'La directora.', 'No se sabe.'], answer: 0, why: '«De» + agente; «a» + paciente.', en: 'In this phrase, who is doing the criticising?' },
            { prompt: '«Existe la posibilidad de que cambie de equipo.» ¿Quién cambia?', options: ['Una tercera persona (o yo, según el contexto).', 'Siempre quien habla.', 'Nadie: es un hecho pasado.'], answer: 0, why: 'La oración con «que» tiene su propio sujeto, que el contexto identifica.', en: 'In this sentence, who is the one changing teams?' },
          ] },
        ] },
        { title: 'Completa la conversación · Complete the conversation', blocks: [
          { kind: 'chat-fill', title: 'Revisión por chat · Review by chat', lines: [
            { who: 'Carmen', text: 'Lucía, «la crítica de la directora» puede leerse de dos maneras.' },
            { who: 'Lucía', text: 'Ella evaluó la exposición. Pongamos «la evaluación ___ la directora».', options: ['que hizo', 'que recibió', 'a'], answer: 0, why: '«Que hizo» la marca como agente.' },
            { who: 'Carmen', text: 'Y en «el breve y el de ayer», hay un resumen en el párrafo anterior.' },
            { who: 'Lucía', text: 'Entonces: «el informe breve y ___ de ayer».', options: ['el informe', 'el', 'lo'], answer: 0, why: 'Dos candidatos: se repite el núcleo.' },
            { who: 'Carmen', text: '¿Y el deseo de volver? ¿Es tuyo?' },
            { who: 'Lucía', text: 'No, es de la fotógrafa. Escribamos «el deseo ___ de volver al barrio».', options: ['de la fotógrafa', 'de que la fotógrafa', 'a la fotógrafa'], answer: 0, why: '«De la fotógrafa» identifica a quien desea, y el infinitivo recupera su sujeto.' },
            { who: 'Carmen', text: 'Perfecto. Solo me preocupa el temor a que los lectores ___ la reseña demasiado larga.', options: ['encuentren', 'encuentran', 'encontrar'], answer: 0, why: 'Temor a que + subjuntivo, con otro sujeto (los lectores).' },
          ] },
        ] },
        { title: 'Encuentra el problema · Find the problem', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Tengo miedo de que yo no llegue a tiempo.', ok: false, options: ['Tengo miedo de no llegar a tiempo.', 'Tengo miedo a que no llego a tiempo.', 'Tengo miedo de que no llegar a tiempo.'], answer: 0, why: 'Mismo sujeto: infinitivo.' },
            { sentence: 'Revisé la propuesta inicial y la corregida.', ok: true, why: 'Correcta: un solo candidato.' },
            { sentence: 'El temor a que suben los precios frena el consumo.', ok: false, options: ['El temor a que suban los precios frena el consumo.', 'El temor a subir los precios frena el consumo.', 'El temor que suben los precios frena el consumo.'], answer: 0, why: '«Temor a que» + subjuntivo. La segunda cambia el sentido: alguien teme subirlos.' },
            { sentence: 'Las críticas de la prensa a la directora fueron duras.', ok: true, why: 'Correcta: «de» agente, «a» paciente.' },
            { sentence: 'Hay un informe y un resumen. Archiva el breve y el de ayer.', ok: false, options: ['Hay un informe y un resumen. Archiva el informe breve y el informe de ayer.', 'Hay un informe y un resumen. Archiva los breves de ayer.', 'Hay un informe y un resumen. Archiva lo breve y lo de ayer.'], answer: 0, why: 'Dos candidatos: hay que repetir el núcleo.' },
            { sentence: 'El deseo de la fotógrafa de volver al barrio explica las imágenes.', ok: true, why: 'Correcta: el poseedor del deseo está nombrado y el infinitivo recupera su sujeto.' },
          ] },
        ] },
        { title: 'Construye frases · Build sentences', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['La', 'evaluación', 'que', 'hizo', 'la', 'directora', 'fue', 'decisiva'], accept: ['La evaluación que hizo la directora fue decisiva'], en: 'The assessment the director made was decisive.' },
            { tiles: ['El', 'informe', 'breve', 'y', 'el', 'informe', 'de', 'ayer', 'coinciden'], accept: ['El informe breve y el informe de ayer coinciden', 'El informe de ayer y el informe breve coinciden'], en: 'The short report and yesterday’s report agree.' },
            { tiles: ['Tengo', 'miedo', 'de', 'equivocarme'], accept: ['Tengo miedo de equivocarme'], en: 'I’m afraid of making a mistake.' },
            { tiles: ['Las', 'críticas', 'de', 'la', 'prensa', 'a', 'la', 'directora', 'fueron', 'duras'], accept: ['Las críticas de la prensa a la directora fueron duras'], en: 'The press’s criticism of the director was harsh.' },
          ] },
        ] },
        { title: 'Reescribe con precisión · Rewrite precisely', blocks: [
          { kind: 'rewrite', items: [
            { prompt: 'La directora emitió la crítica. «La crítica de la directora fue decisiva.»', instruction: 'Aclara que ella es la autora de la crítica.', accept: ['La crítica que hizo la directora fue decisiva', 'La evaluación que hizo la directora fue decisiva', 'La crítica realizada por la directora fue decisiva', 'La crítica hecha por la directora fue decisiva'] },
            { prompt: 'La prensa criticó a la directora. «La crítica de la directora fue injusta.»', instruction: 'Aclara que ella recibió la crítica.', accept: ['La crítica a la directora fue injusta', 'Las críticas a la directora fueron injustas', 'La crítica que recibió la directora fue injusta'] },
            { prompt: 'Tengo miedo de que yo pierda el tren.', instruction: 'Corrige: el sujeto es el mismo.', accept: ['Tengo miedo de perder el tren'] },
            { prompt: 'Insisto: quiero que vuelvas. «Tengo el deseo de volver.»', instruction: 'Haz explícito que quien vuelve es «tú».', accept: ['Tengo el deseo de que vuelvas'] },
            { prompt: 'Se mencionan un acta y una nota. «Firma la de ayer.» (Se refiere al acta.)', instruction: 'Aclara la instrucción.', accept: ['Firma el acta de ayer'] },
          ] },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'La autora explica su intención', coach: 'Primero escucha sin leer.',
      steps: [
        { title: 'La autora explica su intención · The author explains her intention', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha para la idea general. En la segunda, el alumno anota las tres ambigüedades, la intención de la autora y el criterio general de revisión.', self: 'Escucha una vez para la idea general. En la segunda, anota las tres ambigüedades y la solución de cada una. Puedes bajar la velocidad.' } },
          { kind: 'listen', title: 'Lucía responde a Carmen · Lucía replies to Carmen', channel: 'NOTA DE VOZ · REVISTA CULTURAL', src: '/audio/grammar-classroom/118.mp3',
            before: 'Lucía, la autora de la reseña, responde a las dudas de la editora. ¿Crees que va a defender su texto o a aceptar los cambios? (The author of the review answers the editor’s doubts. Do you think she will defend her text or accept the changes?)',
            gist: { prompt: '¿Cuál es el criterio general de Lucía?', options: ['Mantener breve lo que se entiende por el contexto y explicar lo que obligaría a adivinar.', 'Expandir todas las expresiones breves.', 'No cambiar nada para conservar la fluidez.'], answer: 0, why: '«Si una relación se entiende por el contexto inmediato, la dejaremos breve. Si necesita una adivinación, la explicaremos».', en: 'What is Lucía’s general criterion?' },
            details: [
              { prompt: '¿Qué quería decir con «la crítica de la directora»?', options: ['Que la directora evaluó la exposición.', 'Que alguien criticó a la directora.', 'Que la directora criticó a la fotógrafa.'], answer: 0, why: '«Quería decir que ella evaluó la exposición, no que alguien la criticó».', en: 'What did she mean by «la crítica de la directora»?' },
              { prompt: '¿Por qué prefiere repetir el nombre «informe»?', options: ['Porque había mencionado un resumen y la elipsis deja dos candidatos.', 'Porque el informe es muy largo.', 'Porque la editora lo exige.'], answer: 0, why: '«Había mencionado un resumen y entiendo que la elipsis deje dos candidatos. Prefiero repetir el nombre».', en: 'Why does she prefer to repeat the noun «informe»?' },
              { prompt: '¿De quién es el deseo de volver?', options: ['De la autora.', 'De la fotógrafa.', 'De la directora.'], answer: 1, why: '«El deseo de volver es de la fotógrafa».', en: 'Whose wish to return is it?' },
              { prompt: '¿Cómo propone mantener el infinitivo?', options: ['Nombrando a la fotógrafa antes.', 'Usando «que» + subjuntivo.', 'Eliminando la frase.'], answer: 0, why: '«Podemos nombrarla antes y después mantener el infinitivo».', en: 'How does she suggest keeping the infinitive?' },
              { prompt: '¿Qué quiere revisar también?', options: ['El párrafo anterior.', 'El título.', 'Las fotos.'], answer: 0, why: '«Revisemos también el párrafo anterior, porque quizá allí empezó la confusión».', en: 'What else does she want to revise?' },
            ],
            transcript: 'Hola, gracias por señalar las dudas. Con «[[la crítica de la directora|violet]]» quería decir que ella evaluó la exposición, no que alguien la criticó. Podemos escribir «[[la evaluación que hizo la directora|violet]]» si esa relación no queda clara en el párrafo. Sobre los documentos, comparo el informe breve con [[el informe de ayer|blue]]. Había mencionado un resumen y entiendo que la elipsis deje dos candidatos. Prefiero repetir el nombre. [[El deseo de volver|orange]] es de la fotógrafa: quiere regresar al barrio donde hizo las imágenes. No quería sugerir que el deseo fuera mío. Podemos nombrarla antes y después mantener el infinitivo. Me interesa conservar una reseña fluida, pero no a costa de [[que el lector reparta mal las acciones|teal]]. Si una relación se entiende por el contexto inmediato, la dejaremos breve. Si necesita una adivinación, la explicaremos. Revisemos también el párrafo anterior, porque quizá allí empezó la confusión. Eso también importa.',
            reply: { teacher: 'El alumno responde como Carmen: acepta las tres soluciones, propone una redacción final para la frase del deseo y señala una expresión que conservaría breve, justificándolo.', self: 'Responde a Lucía como si fueras Carmen: propone la redacción final de las tres frases y explica en una línea por qué conservas breve otra expresión.' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Leer entre líneas', coach: '¿Qué lectura es plausible para este lector?',
      steps: [
        { title: 'Leer entre líneas · Reading between the lines', blocks: [
          { kind: 'guide', text: { teacher: 'No hace falta usar todas las preguntas. Cuando el alumno use un nombre + de o un infinitivo, propón deliberadamente la otra lectura para que la evalúe y la descarte o la aclare.', self: 'Responde cada pregunta en voz alta, como en una conversación. Después revisa tus respuestas: ¿alguna frase admitía dos lecturas plausibles?' } },
          { kind: 'talk', cards: [
            { q: '¿Qué información necesitas antes de interpretar «la crítica de la directora»? · What do you need to know before interpreting «la crítica de la directora»?', followUps: ['¿Qué lectura te parece más probable sin contexto?', '¿Cómo lo resolverías en un titular de seis palabras?', '¿Conoces casos parecidos en tu lengua?'], phrases: ['Puede ser [[autora o destinataria|violet]] de la crítica.', 'Aquí el contexto favorece…', 'Yo escribiría «[[la crítica a|violet]]…»'], hint: 'Distingue lo posible de lo plausible: qué lectura activa el contexto.', example: 'Necesito saber qué pasó antes: si la directora presentó un informe, es probable que ella critique. Si hubo un escándalo, seguramente la criticaron. En un titular escribiría «Críticas a la directora tras el cierre».', next: 'Pasemos a tus propios textos.' },
            { q: 'Cuéntame un mensaje ambiguo que hayas recibido o enviado. ¿Qué parte se entendió mal? · An ambiguous message you sent or received: which part was misunderstood?', followUps: ['¿Era una omisión, un «de» o un sujeto implícito?', '¿Cómo se aclaró?', '¿Qué parte podía quedar implícita sin riesgo?'], phrases: ['El nombre omitido era…', 'Quien deseaba… era…', 'Habría bastado con [[repetir|blue]]…'], hint: 'Identifica agentes y referentes: quién hacía qué y de qué documento se hablaba.', example: 'Un compañero escribió «mándame la de Pérez». Pérez había hecho una presentación y también había recibido una evaluación. Le mandé la evaluación, pero quería la presentación que hizo Pérez.', next: 'Ahora, los deseos y los temores.', teacher: 'Pregunta qué parte del mensaje podía quedar breve sin riesgo: el objetivo no es expandirlo todo.' },
            { q: '¿Qué deseo o temor tienes ahora mismo? ¿Depende de ti o de otra persona? · A wish or fear you have right now: does it depend on you or on someone else?', followUps: ['¿Cómo lo dirías con infinitivo?', '¿Y con «que» + subjuntivo?', '¿Qué cambia entre las dos versiones?'], phrases: ['Tengo [[el deseo de|orange]] cambiar…', 'Me preocupa [[la posibilidad de que|teal]]…', 'Tengo miedo [[de|orange]]… / [[de que|teal]]…'], hint: 'Si el deseo depende de ti, infinitivo. Si depende de otra persona, que + subjuntivo.', example: 'Tengo el deseo de vivir un año en el extranjero, pero me preocupa la posibilidad de que mi empresa no me dé permiso. También tengo miedo de perder el contacto con mis amigos.', next: 'Hablemos de la prensa.' },
            { q: '¿Te fijas en cómo están escritos los titulares? ¿Recuerdas alguno que se prestara a dos lecturas? · Do you remember a headline that allowed two readings?', followUps: ['¿Era intencionado?', '¿Qué efecto produce la ambigüedad en un titular?', '¿Cómo lo reescribirías?'], phrases: ['El titular decía «[[la denuncia de|violet]]…»', 'Se podía entender como…', 'Creo que fue deliberado porque…'], hint: 'Valora si la ambigüedad es un descuido o una estrategia para atraer lectores.', example: 'Leí «La detención del periodista indigna a la redacción». Al principio pensé que el periodista había detenido a alguien. Creo que fue un descuido, porque era una noticia seria.', next: 'Ahora, sobre la brevedad.' },
            { q: '¿Crees que un buen texto debe evitar toda ambigüedad? · Should a good text avoid all ambiguity?', followUps: ['¿Y la literatura?', '¿Y los textos legales?', '¿Dónde está el límite entre precisión y pesadez?'], phrases: ['Depende del destinatario…', 'En un contrato, cualquier [[lectura plausible|violet]]…', 'En un poema, la ambigüedad…'], hint: 'Relaciona el grado de precisión con el tipo de texto y el lector.', example: 'No creo. En un contrato, cualquier lectura plausible puede acabar en un juicio, así que hay que eliminarla. En un poema, en cambio, la ambigüedad puede ser lo más interesante. El límite lo marca el lector.', next: 'Para terminar, tu estilo.' },
            { q: 'Si revisaras un texto tuyo de hace unos años, ¿qué crees que corregirías? · Rereading a text you wrote years ago, what would you correct?', followUps: ['¿Escribías más largo o más corto?', '¿Qué hábito quieres mantener?', '¿Qué aprendiste hoy que aplicarás?'], phrases: ['Repetiría [[el núcleo|blue]] cuando…', 'Nombraría antes [[al sujeto|orange]]…', 'Conservaría breve…'], hint: 'Usa las tres comprobaciones: candidatos, papeles y contexto.', example: 'Creo que abusaba de las elipsis: escribía «la de ayer» o «el otro» y daba por hecho que el lector me seguía. Hoy repetiría el núcleo cuando hay dos candidatos, pero conservaría breve lo que el contexto deja claro.' },
          ], swap: { teacher: 'Al final, cambien los papeles: el profesor lee frases con nombre + de o con infinitivo, y el alumno formula las dos lecturas y decide cuál es plausible.', self: 'Busca un titular de hoy con «nombre + de» y escribe sus dos lecturas posibles. ¿Cuál es plausible?' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Una nota de edición', coach: 'Aclara lo plausible; conserva lo claro.',
      steps: [
        { title: 'Una nota de edición · An editing note', blocks: [
          { kind: 'guide', text: { teacher: 'Puede escribir en clase o como tarea. Usen la revisión automática y después discutan si cada ambigüedad señalada es realmente plausible para el lector previsto.', self: 'Escribe tu nota y toca «Revisar mi texto». Después comprueba que cada ambigüedad que señalas sea plausible, no solo posible.' } },
          { kind: 'write', title: 'Nota para la autora de una reseña · Note to the author of a review', situation: 'Eres editor de una revista. Recibes una reseña (de una exposición, un libro, un restaurante o un concierto) con expresiones ambiguas y escribes una nota a la autora. (You are a magazine editor. Write a note to the author of a review that contains ambiguous expressions.)', task: [
            'Explica **una ambigüedad de papeles** con nombre + de y propón una reformulación.',
            'Explica **una elipsis con dos candidatos** y propón repetir o especificar el núcleo.',
            'Comenta **un sujeto implícito** de infinitivo: ¿se recupera o hay que nombrarlo?',
            'Justifica **una expresión que conservarías breve** porque el contexto la aclara.',
          ], starters: ['En «…» conviene indicar si…', 'La autora confirma…, así que propongo…', 'También repetiría…, porque…', 'El deseo de… corresponde a…', 'Conservaría «…», porque…'],
            words: ['lectura plausible', 'agente', 'paciente', 'antecedente', 'candidato', 'núcleo', 'sujeto implícito', 'contexto inmediato'],
            model: 'En «[[la crítica de la directora|violet]]» conviene indicar si ella emitió la crítica o la recibió. La autora confirma la primera lectura, así que propongo «[[la evaluación que hizo la directora|violet]]». También repetiría «[[informe de ayer|blue]]», porque el párrafo anterior menciona un resumen y la elipsis deja dos candidatos. [[El deseo de volver|orange]] corresponde a la fotógrafa. Podemos nombrarla antes y conservar el infinitivo después; no hace falta repetir su nombre en cada frase. Estas correcciones aclaran participantes y documentos sin convertir la reseña en una explicación de todas las lecturas imaginables. Conservaría «[[la corregida|blue]]» en la conclusión, porque solo hay una propuesta en el texto. Revisaría además el párrafo anterior para asegurar que los antecedentes estén disponibles para el lector.',
            minWords: 130 },
        ] },
      ],
    },
    {
      id: 'cerrar', label: 'Cerrar', icon: '✓', mascot: '/brand/mascot/standing.webp',
      title: 'Lo esencial', coach: '¿Qué te llevas hoy?',
      steps: [
        { title: 'Lo esencial · The essentials', blocks: [
          { kind: 'recap', items: [
            { tone: 'blue', label: 'ELIPSIS', formula: 'determinante + Ø + modificador', example: 'el informe breve y el informe de ayer', caption: 'Si dos núcleos compiten, repite.', en: 'Ellipsis: if two nouns could fill the gap, repeat the one you mean.' },
            { tone: 'violet', label: 'NOMBRE + DE', formula: 'de + agente · a / contra + paciente', example: 'las críticas de la prensa a la directora', caption: 'Explicita quién hace y quién recibe.', en: 'Noun + de: make clear who acts (de) and who receives the action (a / contra).' },
            { tone: 'orange', label: 'INFINITIVO', formula: 'el deseo de volver', example: 'La fotógrafa desea volver; ese deseo…', caption: 'Sujeto implícito: nómbralo antes.', en: 'Infinitive: the subject is implicit, so mention that person beforehand.' },
            { tone: 'teal', label: 'QUE + SUBJUNTIVO', formula: 'el deseo de que vuelvas', example: 'el temor a que cierren la fábrica', caption: 'Sujeto explícito y distinto.', en: 'Que + subjunctive: the subject is stated and is a different person.' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'Tres comprobaciones antes de ampliar · Three checks before expanding', text: '**Candidatos** del núcleo omitido, **papeles** de los participantes y **contexto** que favorece una lectura. Amplía solo lo que obligaría al lector a adivinar.', en: 'Check the candidates for the missing noun, the roles of the participants and the context that favours one reading. Expand only what would force the reader to guess.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'choice', title: 'Cuatro frases, sin ayuda · Four sentences, no help', items: [
            { prompt: 'El comité eligió a la nueva rectora. ¿Qué expresión es precisa?', options: ['La elección de la rectora por parte del comité.', 'La elección de la rectora.', 'La elección del comité de la rectora.'], answer: 0, why: '«Por parte de» marca al agente; «de la rectora», a quien eligen.', en: 'The committee chose the new rector. Which expression is precise?' },
            { prompt: 'Quien teme y quien puede fracasar es la misma persona.', options: ['Tiene miedo de que fracase.', 'Tiene miedo de fracasar.'], answer: 1, why: 'Mismo sujeto: infinitivo.', en: 'The person who is afraid and the person who might fail are the same.' },
            { prompt: 'Se mencionan una carta y una nota del lunes. ¿Qué instrucción es clara?', options: ['Responde a la del lunes.', 'Responde a la carta del lunes.'], answer: 1, why: 'Dos candidatos femeninos singulares: repite el núcleo.', en: 'A letter and a note from Monday are mentioned. Which instruction is clear?' },
            { prompt: 'Crece el temor a que los precios ___.', options: ['suben', 'suban', 'subir'], answer: 1, why: '«Temor a que» + subjuntivo.', en: 'Fear is growing that prices will rise.' },
          ] },
        ] },
        { title: 'Tus errores y repaso · Your mistakes and review', blocks: [
          { kind: 'review' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Qué tres cosas compruebas antes de ampliar una expresión ambigua?». Respuesta esperada: los candidatos del núcleo, los papeles de los participantes y el contexto que favorece una lectura. Pide un ejemplo de cada una.' },
        ] },
      ],
    },
  ],
};
