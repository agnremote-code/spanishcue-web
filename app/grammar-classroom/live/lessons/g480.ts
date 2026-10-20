import type { LiveLesson } from '../types';

/**
 * Lesson 480 · C1 · Queísmo y dequeísmo: régimen y norma (course unit G180).
 * Builds on G110 (lesson 410: verbs with a fixed preposition, first look at the «eso»
 * test), G151 (lesson 117: verbs that govern a preposition) and G152 (lesson 452: el hecho
 * de que, noun + de que, a short review of both phenomena). Here the topic is the norm
 * itself: why a «que» clause keeps the preposition of the word that governs it.
 * Scene: Bogotá, Cuaderno Urbano, a small digital local news outlet. Daniela Rojas, a young
 * reporter, has interviewed Teresa Pineda, founder of a community library in the San
 * Cristóbal neighbourhood. Lucía Arango, head of copy-editing, reviews the piece with her;
 * Óscar Beltrán is the editor. House rule: literal quotes keep the speaker's words; the
 * outlet's own voice follows the careful norm. In the audio (Colombian voice, ustedes to the
 * listeners) Lucía records the outlet's language capsule.
 * Content: dequeísmo (*pienso de que, *me dijo de que, *es seguro de que, *resulta de que
 * 'it turns out', *me alegra de que, *a no ser de que, *a medida de que, *una vez de que);
 * queísmo (*me acuerdo que, *estoy seguro que, *me alegro que, *insisto que, *a pesar que,
 * *no cabe duda que, *consciente que); the «eso» test and the question test; pairs with
 * one meaning and two constructions (recuerdo que / me acuerdo de que; olvidé que / me
 * olvidé de que / se me olvidó que; me alegra que / me alegro de que; es seguro que / estoy
 * seguro de que); verbs with two regimes: advertir (notar → que; avisar → (de) que),
 * avisar (de) que, dudar (de) que, informar de que (general) / informar que (also normal
 * in America, DPD), acordar que (decide) / acordarse de que (remember); antes (de) que and
 * después (de) que, both accepted. Nouns and adjectives: la idea / el hecho / la
 * posibilidad de que, convencido / consciente / seguro de que; darse cuenta de que,
 * tratarse de que, caber la posibilidad de que, ocuparse de que. Sociolinguistic status:
 * both are frequent in speech in Spain and America; only the careful norm is tested.
 * Ampliación: cabe destacar que vs cabe la posibilidad de que, relative «la idea que
 * propuso» vs content «la idea de que», resultar de ('derive from'), informar in Spain and
 * America. Instructions use tú.
 */
export const lesson: LiveLesson = {
  id: 480,
  level: 'C1',
  title: 'Queísmo y dequeísmo: régimen y norma',
  subtitle: 'Decidir con criterio si un «que» necesita «de» (o «en») en un texto cuidado: pienso que, me acuerdo de que, insisto en que.',
  legend: [
    { tone: 'blue', label: 'Preposición necesaria · me acuerdo de que, insisto en que, consciente de que' },
    { tone: 'orange', label: 'Sin preposición · pienso que, me dijo que, es seguro que' },
    { tone: 'teal', label: 'Las dos construcciones valen · avisar (de) que, dudar (de) que, antes (de) que' },
    { tone: 'neutral', label: 'Forma que se evita en el registro cuidado' },
  ],
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: '¿Lleva «de» o no?', coach: 'El «que» hereda la preposición de su verbo. «Que» inherits its verb’s preposition.',
      steps: [
        { title: 'Una entrevista para revisar · An interview to proofread', blocks: [
          { kind: 'lead', text: 'Bogotá, **Cuaderno Urbano**, un pequeño medio digital de noticias locales. La periodista **Daniela Rojas** ha entrevistado a **Teresa Pineda**, fundadora de una biblioteca comunitaria en el barrio San Cristóbal. Antes de publicar, la jefa de corrección, **Lucía Arango**, revisa el texto con ella. El problema son unos cuantos «que»: a algunos les falta un «de» y a otros les sobra.', en: 'Bogotá, Cuaderno Urbano, a small local news site. Daniela has interviewed the founder of a community library, and before publication the head of copy-editing goes through the piece with her. The trouble is a handful of «que»: some are missing a «de», others have one too many.' },
          { kind: 'guide', text: { teacher: 'Tú lees cada frase y tu alumno explica por qué una lleva «de» y la otra no. Después tu alumno propone otro verbo para cada columna.', self: 'Lee las tres frases en voz alta. ¿Por qué una lleva «de», otra no y en la tercera da igual? (Why does one take «de», one not, and in the third it doesn’t matter?)' } },
          { kind: 'compare', title: 'Tres frases de la entrevista · Three sentences from the interview', columns: [
            { tone: 'orange', label: 'SIN PREPOSICIÓN', sentence: 'Teresa [[piensa que|orange]] la biblioteca seguirá creciendo.', idea: 'Se piensa algo: «piensa eso». El verbo no pide preposición.', en: '«Pensar» meaning «to hold an opinion» takes a direct object: no preposition.' },
            { tone: 'blue', label: 'CON PREPOSICIÓN', sentence: 'Teresa [[se acuerda de que|blue]] todo empezó en un garaje.', idea: 'Uno se acuerda de algo: «se acuerda de eso». La preposición se mantiene delante de «que».', en: '«Acordarse» is always followed by «de» (acordarse de algo), and that «de» stays in front of «que».' },
            { tone: 'teal', label: 'LAS DOS VALEN', sentence: 'Teresa nos [[avisó (de) que|teal]] llegaría tarde.', idea: '«Avisar algo» y «avisar de algo» son correctas: con «que», también las dos.', en: 'Some verbs accept both constructions, so both are correct with «que» too.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Teresa se acuerda ___ el primer libro lo donó una vecina.', options: ['en que', 'que', 'de que'], answer: 2, why: '«Acordarse de algo» → se acuerda de eso → de que.', en: 'Teresa remembers that the first book was donated by a neighbour.' },
            { prompt: 'Teresa piensa ___ el barrio necesita más espacios culturales.', options: ['en que', 'que', 'de que'], answer: 1, why: '«Pensar algo» (opinar) → piensa eso → que, sin preposición.', en: 'Teresa thinks the neighbourhood needs more cultural spaces.' },
          ] },
        ] },
        { title: 'La regla y dos pruebas · The rule and two tests', mascot: '/brand/mascot/studying.webp', coach: 'Cambia la oración por «eso». Swap the clause for «eso».', blocks: [
          { kind: 'concept', tone: 'blue', label: 'RÉGIMEN + QUE', question: '¿Cuándo va una preposición delante de «que»?', en: 'A «que» clause fills the slot of a noun phrase. If the verb, adjective or noun that governs it needs a preposition before a noun («me acuerdo de la fecha»), it needs the same preposition before «que». If it doesn’t, adding one is wrong.', formula: ['verbo / adjetivo / sustantivo + preposición + que + oración → me acuerdo de que…, insisto en que…, consciente de que…', 'verbo o expresión sin preposición + que + oración → pienso que…, me dijo que…, es seguro que…'],
            meaning: 'La oración con «que» ocupa el lugar de un sustantivo o de «eso». Por eso conserva la preposición que pide la palabra de la que depende: si dices «me acuerdo **de** la fecha», dices «me acuerdo **de que** era martes». Añadir un «de» que el verbo no pide es **dequeísmo**; quitar el que sí pide es **queísmo**.',
            examples: [
              { es: 'Me acuerdo [[de la fecha|blue]] → Me acuerdo [[de que|blue]] era martes.', en: 'Same preposition with a noun and with a clause.' },
              { es: 'Insisto [[en la idea|blue]] → Insisto [[en que|blue]] hay que pedir ayuda.', en: '«Insistir» takes «en», so the clause keeps «en».' },
              { es: 'Opino [[eso|orange]] → Opino [[que|orange]] tiene razón.', en: '«Opinar» takes a direct object: no preposition.' },
            ],
            note: 'No solo los verbos: también adjetivos (**seguro de**, **consciente de**) y sustantivos (**la idea de**, **el hecho de**) transmiten su preposición al «que».' },
          { kind: 'table', title: 'Dos pruebas rápidas · Two quick tests', head: ['Frase', 'Prueba de «eso»', 'Pregunta', 'Resultado'], rows: [
            ['Pienso … vendrá.', 'Pienso **eso**.', '¿**Qué** piensas?', '[[que|orange]]'],
            ['Me di cuenta … faltaba una cita.', 'Me di cuenta **de eso**.', '¿**De qué** te diste cuenta?', '[[de que|blue]]'],
            ['Confían … el barrio responda.', 'Confían **en eso**.', '¿**En qué** confían?', '[[en que|blue]]'],
            ['Es seguro … abrirán en marzo.', '**Eso** es seguro.', '¿**Qué** es seguro?', '[[que|orange]]'],
          ], note: 'Si la pregunta natural empieza por **de qué** o **en qué**, la preposición va también delante de «que». Las pruebas fallan solo con los verbos que admiten dos construcciones (lo verás en el paso 5).' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Daniela se dio cuenta ___ la grabadora no funcionaba.', options: ['en que', 'de que', 'que'], answer: 1, why: '¿De qué se dio cuenta? → de eso → de que.', en: 'Daniela realised the recorder wasn’t working.' },
            { prompt: 'Es evidente ___ los vecinos quieren la biblioteca.', options: ['de que', 'que', 'en que'], answer: 1, why: '«Eso es evidente»: la oración es el sujeto y no lleva preposición.', en: 'It’s obvious that the residents want the library.' },
            { prompt: 'Los voluntarios confían ___ la alcaldía local renueve el convenio.', options: ['que', 'de que', 'en que'], answer: 2, why: '¿En qué confían? → confiar en eso → en que.', en: 'The volunteers trust the local council will renew the agreement.' },
          ] },
        ] },
        { title: 'Dequeísmo: un «de» que sobra · An unwanted «de»', mascot: '/brand/mascot/standing.webp', coach: 'Si «eso» va sin «de», el «que» también. If «eso» needs no «de», neither does «que».', blocks: [
          { kind: 'table', title: 'Dónde aparece el dequeísmo · Where the extra «de» creeps in', head: ['Tipo', 'Se evita', 'Forma cuidada'], rows: [
            ['Verbos de pensar y decir', '[[pienso de que|neutral]] · [[me dijo de que|neutral]] · [[opino de que|neutral]]', '[[pienso que|orange]] · [[me dijo que|orange]] · [[opino que|orange]]'],
            ['La oración es el sujeto', '[[es seguro de que|neutral]] · [[es posible de que|neutral]] · [[me alegra de que|neutral]]', '[[es seguro que|orange]] · [[es posible que|orange]] · [[me alegra que|orange]]'],
            ['«Resultar» = ocurrir, «parecer»', '[[resulta de que|neutral]] no vino · [[parece de que|neutral]] llueve', '[[resulta que|orange]] no vino · [[parece que|orange]] llueve'],
            ['Conectores fijos', '[[a no ser de que|neutral]] · [[a medida de que|neutral]] · [[una vez de que|neutral]]', '[[a no ser que|orange]] · [[a medida que|orange]] · [[una vez que|orange]]'],
          ], note: 'Ojo con los pares: «**me alegra que** vengas» (sujeto: «que vengas» me alegra) frente a «**me alegro de que** vengas» (yo me alegro de algo). Los dos son correctos; lo incorrecto es mezclarlos.' },
          { kind: 'tip', icon: '💡', title: 'La oración sujeto nunca lleva «de» · A subject clause never takes «de»', text: 'Con **es seguro, es posible, es necesario, está claro, me alegra, me preocupa, me consta** la oración con «que» es el **sujeto**. Un sujeto no lleva preposición: «**Que vengas** es seguro» → «Es seguro **que** vengas».', en: 'With these expressions the «que» clause is the grammatical subject, and subjects never take a preposition. Turning the sentence round makes this easy to see.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué frase sigue la norma culta?', options: ['Me comentó en que la entrevista salía el lunes.', 'Me comentó de que la entrevista salía el lunes.', 'Me comentó que la entrevista salía el lunes.'], answer: 2, why: '«Comentar algo» → me comentó eso → que.', en: 'Which sentence follows the careful norm? «Comentar» takes a direct object.' },
            { prompt: '___ los lectores conozcan el proyecto, llegarán más donaciones.', options: ['A medida en que', 'A medida de que', 'A medida que'], answer: 2, why: 'El conector es «a medida que», sin «de».', en: 'As readers get to know the project, more donations will arrive.' },
            { prompt: 'Me preocupa ___ el local sea tan pequeño.', options: ['de que', 'en que', 'que'], answer: 2, why: '«Que el local sea tan pequeño» es el sujeto de «preocupa»: sin preposición.', en: 'It worries me that the premises are so small: the clause is the subject.' },
          ] },
        ] },
        { title: 'Queísmo: un «de» que falta · A missing «de»', mascot: '/brand/mascot/kneeling.webp', coach: 'Si «eso» lleva «de», el «que» también. If «eso» needs «de», so does «que».', blocks: [
          { kind: 'table', title: 'Dónde aparece el queísmo · Where a needed preposition gets dropped', head: ['Tipo', 'Se evita en un texto cuidado', 'Forma cuidada'], rows: [
            ['Verbos pronominales con «de»', '[[me acuerdo que|neutral]] · [[me alegro que|neutral]] · [[me enteré que|neutral]]', '[[me acuerdo de que|blue]] · [[me alegro de que|blue]] · [[me enteré de que|blue]]'],
            ['Verbos con «en» o «de»', '[[insisto que|neutral]] · [[confío que|neutral]] · [[se trata que|neutral]]', '[[insisto en que|blue]] · [[confío en que|blue]] · [[se trata de que|blue]]'],
            ['Adjetivos', '[[estoy seguro que|neutral]] · [[consciente que|neutral]]', '[[estoy seguro de que|blue]] · [[consciente de que|blue]] · [[convencida de que|blue]]'],
            ['Sustantivos y expresiones', '[[no cabe duda que|neutral]] · [[el hecho que|neutral]]', '[[no cabe duda de que|blue]] · [[el hecho de que|blue]] · [[cabe la posibilidad de que|blue]]'],
            ['Conectores', '[[a pesar que|neutral]] · [[a fin que|neutral]]', '[[a pesar de que|blue]] · [[a fin de que|blue]]'],
          ], note: 'Los pronominales engañan: **recordar** y **olvidar** van sin «de» (recuerdo que, olvidé que), pero **acordarse** y **olvidarse** lo piden (me acuerdo de que, me olvidé de que).' },
          { kind: 'compare', title: 'Mismo sentido, distinta construcción · Same meaning, different pattern', columns: [
            { tone: 'orange', label: 'SIN «DE»', sentence: '[[Recuerdo que|orange]] llovía. · [[Me alegra que|orange]] vengas. · [[Es seguro que|orange]] abren.', idea: 'Recordar algo; «que vengas» es el sujeto de «alegra»; «eso es seguro».', en: 'A direct object or a subject clause: no preposition.' },
            { tone: 'blue', label: 'CON «DE»', sentence: '[[Me acuerdo de que|blue]] llovía. · [[Me alegro de que|blue]] vengas. · [[Estoy seguro de que|blue]] abren.', idea: 'Acordarse de algo, alegrarse de algo, estar seguro de algo.', en: 'The pronominal verb or the adjective governs «de», and the clause keeps it.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Teresa está convencida ___ el barrio defenderá la biblioteca.', options: ['que', 'en que', 'de que'], answer: 2, why: 'Convencida de eso → de que.', en: 'Teresa is convinced the neighbourhood will stand up for the library.' },
            { prompt: '___ llovía, vinieron más de cien vecinos a la inauguración.', options: ['A pesar de que', 'A pesar que', 'A pesar en que'], answer: 0, why: 'La locución es «a pesar de»: a pesar de la lluvia → a pesar de que llovía.', en: 'Even though it was raining, over a hundred residents came to the opening.' },
            { prompt: 'Teresa insistió ___ la biblioteca no es solo para niños.', options: ['de que', 'que', 'en que'], answer: 2, why: '¿En qué insistió? → insistir en eso → en que.', en: 'Teresa stressed that the library isn’t only for children.' },
          ] },
        ] },
        { title: 'Dos construcciones válidas · When both are right', mascot: '/brand/mascot/speaking.webp', coach: 'A veces las dos valen; a veces cambia el sentido. Sometimes both work; sometimes the meaning changes.', blocks: [
          { kind: 'table', title: 'Verbos y conectores con dos opciones · Verbs and connectors with two options', head: ['Forma', 'Qué dice la norma', 'Ejemplo'], rows: [
            ['**avisar (de) que**', 'Las dos son correctas.', 'Nos [[avisó que|teal]] / [[avisó de que|teal]] cerraban a las seis.'],
            ['**dudar (de) que**', 'Las dos son correctas.', '[[Dudo que|teal]] / [[Dudo de que|teal]] lleguen los libros a tiempo.'],
            ['**advertir** = avisar', '(de) que: las dos son correctas.', 'Le [[advirtió que|teal]] / [[advirtió de que|teal]] el plazo vencía.'],
            ['**advertir** = notar', 'Solo **que**: es transitivo.', '[[Advirtió que|orange]] faltaba una página. (no «advirtió de que»)'],
            ['**informar**', '**informar de que** es la forma general; en América también es normal y correcto **informar que**.', 'Le [[informamos de que|blue]] / [[informamos que|teal]] el acto empieza a las cinco.'],
            ['**acordar** / **acordarse**', 'Dos verbos: decidir (sin «de») y recordar (con «de»).', 'La junta [[acordó que|orange]] abrirían los sábados. · Me [[acordé de que|blue]] era sábado.'],
            ['**antes (de) que** · **después (de) que**', 'Las dos son correctas.', '[[Antes de que|teal]] / [[Antes que|teal]] cierre el año. · [[Después de que|teal]] / [[Después que|teal]] se fue.'],
          ], note: 'Con estos casos, no corrijas lo que está bien: «nos avisó que…» o «después que se fue» no son queísmo.' },
          { kind: 'tip', icon: '🌎', title: 'Norma y uso · Norm and real usage', text: 'Los dos fenómenos se oyen en la conversación en España y en América, también entre personas cultas. El **queísmo** está muy extendido y apenas se nota en el habla; el **dequeísmo** suele estar más censurado socialmente. La norma académica (RAE-ASALE) recomienda evitar ambos en el **uso cuidado**: textos escritos, discursos, entrevistas formales. En esta clase solo se evalúa esa norma cuidada.', en: 'Both are heard in everyday speech across Spain and Latin America, including among educated speakers. Dropping the preposition is widespread and barely noticed in speech; adding an extra «de» tends to be more stigmatised. The academies recommend avoiding both in careful usage, and that is the only standard tested here.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«La organización nos avisó que el acto se aplazaba». ¿Es correcta?', options: ['No: tiene que ser «avisó en que».', 'No: tiene que ser «avisó de que».', 'Sí: «avisar (de) que» admite las dos construcciones.'], answer: 2, why: '«Avisar algo» y «avisar de algo» son correctas.', en: 'Is it correct? «Avisar» accepts both patterns.' },
            { prompt: 'Al releer el texto, Lucía ___ faltaba el nombre del fotógrafo.', options: ['advirtió de que', 'advirtió que', 'advirtió en que'], answer: 1, why: 'Aquí «advertir» significa notar, darse cuenta: es transitivo, sin «de».', en: 'Rereading the text, Lucía noticed the photographer’s name was missing.' },
            { prompt: 'Los vecinos ___ pintarían el local en junio.', options: ['acordaron de que', 'acordaron que', 'se acordaron de que'], answer: 1, why: '«Acordar» (decidir juntos) es transitivo: acordaron eso → que.', en: 'The residents agreed they would paint the premises in June.' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Lee, corrige y explica. Read, correct, explain.', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la frase con el error. Tu alumno dice la versión cuidada y la prueba que usa (eso o la pregunta). Después aparece la corrección.', self: 'Lee cada frase, dila en versión cuidada y nombra la prueba que te ayuda. Después toca para ver la corrección. (Say the careful version and name the test.)' } },
          { kind: 'mistakes', title: '¿Qué se corrige en un texto cuidado? · What gets corrected in careful writing?', items: [
            { wrong: 'Pienso de que la biblioteca necesita más voluntarios.', right: 'Pienso que la biblioteca necesita más voluntarios.', why: 'Dequeísmo: «pienso eso», no «pienso de eso».' },
            { wrong: 'Es seguro de que el acto empieza a las cinco.', right: 'Es seguro que el acto empieza a las cinco.', why: 'Dequeísmo: la oración es el sujeto (eso es seguro).' },
            { wrong: 'Resulta de que la grabación se perdió.', right: 'Resulta que la grabación se perdió.', why: '«Resulta que» (= ocurre que) no lleva «de».' },
            { wrong: 'Me alegro que hayas publicado la entrevista.', right: 'Me alegro de que hayas publicado la entrevista.', why: 'Queísmo: alegrarse de algo. (También vale «Me alegra que…».)' },
            { wrong: 'No me acordaba que hoy era festivo.', right: 'No me acordaba de que hoy era festivo.', why: 'Queísmo: acordarse de eso. (O «No recordaba que…».)' },
            { wrong: 'Somos conscientes que el local es pequeño.', right: 'Somos conscientes de que el local es pequeño.', why: 'Queísmo: el adjetivo «consciente» pide «de».' },
            { wrong: 'Se me olvidó de que tenía la reunión.', right: 'Se me olvidó que tenía la reunión.', why: 'Dequeísmo: con «se me olvidó», la oración es el sujeto. (O «Me olvidé de que…».)' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué frase sigue la norma culta?', options: ['Estoy segura de que lo publicarán.', 'Es segura de que lo publicarán.', 'Estoy segura que lo publicarán.'], answer: 0, why: 'Estar segura de algo → de que.', en: 'Which sentence follows the careful norm? I’m sure they will publish it.' },
            { prompt: '¿Qué frase sigue la norma culta?', options: ['Nos dijo que no podía venir.', 'Nos dijo de que no podía venir.', 'Nos dijo en que no podía venir.'], answer: 0, why: 'Decir algo → que, sin preposición.', en: 'Which sentence follows the careful norm? She told us she couldn’t come.' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno dice cuatro frases sobre su semana con «me acordé de que», «me di cuenta de que», «pienso que» y «estoy seguro de que», y aplica en voz alta la prueba de «eso» a cada una.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'Corrección antes de publicar', coach: 'Toca las expresiones marcadas. Tap the marked expressions.',
      steps: [
        { title: 'Lucía y Daniela · Lucía and Daniela', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Lucía, tu alumno es Daniela. Después tu alumno toca cada expresión marcada y explica si lleva preposición, si no la lleva o si da igual.', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada y explica: ¿preposición necesaria, sin preposición o las dos valen? (Explain each marked form.)' } },
          { kind: 'explore', title: 'Martes, diez de la mañana', setting: 'La redacción de Cuaderno Urbano, en Bogotá. Lucía y Daniela revisan en pantalla la entrevista con Teresa Pineda. (The Cuaderno Urbano newsroom. Lucía and Daniela go through the interview on screen.)', lines: [
            { who: 'Lucía', text: 'Daniela, ya leí la entrevista con Teresa. Me encanta, pero [[me di cuenta de que|blue]] hay unos cuantos «que» que conviene revisar antes de publicar.', en: 'Daniela, I’ve read the interview with Teresa. I love it, but I noticed a few «que» we should check before it goes out.' },
            { who: 'Daniela', text: '¿En las citas de Teresa? Yo [[pienso que|orange]] hay que respetar cómo habla ella.', en: 'In Teresa’s quotes? I think we should respect the way she speaks.' },
            { who: 'Lucía', text: 'En las citas textuales, sí. Si ella dijo «[[me acuerdo que|neutral]] la biblioteca era un garaje», lo dejamos así: es su voz.', en: 'In the direct quotes, yes. If she said it that way, we leave it: it’s her voice.' },
            { who: 'Daniela', text: '¿Entonces el problema está en mi parte del texto?', en: 'So the problem is in the part I wrote?' },
            { who: 'Lucía', text: 'Exacto. Escribiste «la líder vecinal [[insistió que|neutral]] faltan fondos». En la voz del medio, [[insistió en que|blue]].', en: 'Exactly. In the outlet’s own voice, «insistir» needs «en».' },
            { who: 'Daniela', text: 'Uy, es verdad. ¿Y «[[estaba segura que|neutral]] la alcaldía local la apoyaría»?', en: 'Oops, that’s true. And «she was sure the local council would back her»?' },
            { who: 'Lucía', text: 'Lo mismo: [[estaba segura de que|blue]]. Segura de eso, no «segura eso». En cambio, en el titular pusiste «[[Es seguro de que|neutral]] la biblioteca se amplía»…', en: 'Same thing: «sure of that». But in the headline you wrote «es seguro de que»…' },
            { who: 'Daniela', text: '¡Ahí sobra el «de»! [[Es seguro que|orange]]: «eso es seguro».', en: 'There the «de» is extra! «That is certain»: no preposition.' },
            { who: 'Lucía', text: 'Perfecto. Lo demás está bien. «Teresa [[avisó a la junta que|teal]] no habría fondos» es correcto con «de» o sin él, y «[[antes de que|teal]] termine el año» podría ir también sin «de».', en: 'Perfect. The rest is fine: «avisar» works with or without «de», and so does «antes (de) que».' },
            { who: 'Daniela', text: 'Qué alivio. [[Me alegro de que|blue]] lo hayas visto tú y no los lectores.', en: 'What a relief. I’m glad you spotted it and not the readers.' },
            { who: 'Lucía', text: 'Tranquila: [[no cabe duda de que|blue]] es tu mejor entrevista. Y [[el hecho de que|blue]] Teresa hable como habla les da fuerza a las citas.', en: 'Don’t worry: it’s clearly your best interview. And the fact that Teresa speaks the way she does gives the quotes real force.' },
            { who: 'Daniela', text: 'Entonces corrijo mi parte y [[me ocupo de que|blue]] Óscar reciba la versión final antes del mediodía.', en: 'Then I’ll fix my part and make sure Óscar gets the final version before noon.' },
          ], notes: {
            'me di cuenta de que': '«Darse cuenta **de** algo» → me di cuenta de eso → de que. Sin «de» sería queísmo.',
            'pienso que': '«Pensar» con el sentido de opinar es transitivo: pienso eso → que. «Pienso de que» sería dequeísmo.',
            'me acuerdo que': 'Queísmo frecuente en el habla. En una **cita textual** se respeta; en la voz del medio se escribiría «me acuerdo de que» o «recuerdo que».',
            'insistió que': 'Queísmo: falta la preposición que pide «insistir». Se evita en un texto cuidado.',
            'insistió en que': '«Insistir **en** algo» → en que. La pregunta lo confirma: ¿en qué insistió?',
            'estaba segura que': 'Queísmo: el adjetivo «seguro» pide «de».',
            'estaba segura de que': '«Estar segura **de** algo» → de que.',
            'Es seguro de que': 'Dequeísmo: «que la biblioteca se amplía» es el sujeto de «es seguro», y un sujeto no lleva preposición.',
            'Es seguro que': 'Forma cuidada: eso es seguro → es seguro que. Compárala con «estoy seguro de que».',
            'avisó a la junta que': '«Avisar» admite «avisar algo a alguien» y «avisar a alguien de algo»: «avisó a la junta (de) que» es correcto de las dos maneras.',
            'antes de que': '«Antes de que» y «antes que» son correctas. Lo mismo ocurre con «después (de) que».',
            'Me alegro de que': '«Alegrarse **de** algo» → me alegro de que (+ subjuntivo). También sería correcto «me alegra que».',
            'no cabe duda de que': '«Duda» pide «de»: no cabe duda de eso → no cabe duda de que. «No cabe duda que» es queísmo.',
            'el hecho de que': 'El sustantivo «hecho» pide «de» delante de la oración. «El hecho que» es queísmo.',
            'me ocupo de que': '«Ocuparse **de** algo» → me ocupo de que (+ subjuntivo): asegurarse de que algo ocurra.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Qué hacen con las citas textuales de Teresa?', options: ['Las corrigen todas.', 'Las respetan tal como las dijo.', 'Las quitan del texto.'], answer: 1, why: '«En las citas textuales, sí… lo dejamos así: es su voz».', en: 'What do they do with Teresa’s direct quotes?' },
            { prompt: '¿Dónde tiene Daniela un «de» que sobra?', options: ['En el titular.', 'En la cita de Teresa.', 'En la frase sobre la junta.'], answer: 0, why: 'El titular decía «Es seguro de que»: dequeísmo.', en: 'Where does Daniela have an extra «de»?' },
            { prompt: '¿Por qué Lucía no corrige «avisó a la junta que»?', options: ['Porque en Colombia se dice así.', 'Porque es una cita textual.', 'Porque «avisar (de) que» admite las dos construcciones.'], answer: 2, why: 'Con «avisar», las dos formas son correctas en cualquier variedad.', en: 'Why doesn’t Lucía correct it?' },
          ] },
        ] },
        { title: 'El borrador del artículo · The article draft', mascot: '/autoestudio/mascot/noting.webp', blocks: [
          { kind: 'lead', text: 'Estas frases son de la parte de Daniela, la voz del medio. Clasifícalas: ¿falta una preposición, sobra un «de» o la frase ya está bien?', en: 'These sentences come from Daniela’s own part of the article, the outlet’s voice. Sort them: is a preposition missing, is there an extra «de», or is the sentence already fine?' },
          { kind: 'classify', title: 'Clasifica las frases · Sort the sentences', categories: [
            { id: 'falta', label: 'FALTA PREPOSICIÓN · queísmo', tone: 'blue' },
            { id: 'sobra', label: 'SOBRA «DE» · dequeísmo', tone: 'orange' },
            { id: 'bien', label: 'CORRECTA', tone: 'teal' },
          ], items: [
            { text: 'Los vecinos se enteraron que el local estaba en venta.', answer: 'falta', why: 'Enterarse de eso → se enteraron de que.' },
            { text: 'Teresa opina de que la cultura no debe depender de un presupuesto.', answer: 'sobra', why: 'Opinar eso → opina que.' },
            { text: 'Nadie duda de que el barrio ha cambiado.', answer: 'bien', why: '«Dudar (de) que»: las dos construcciones son correctas.' },
            { text: 'Es necesario de que alguien abra los sábados.', answer: 'sobra', why: 'La oración es el sujeto: es necesario eso → que.' },
            { text: 'Los voluntarios son conscientes que el proyecto depende de ellos.', answer: 'falta', why: 'Consciente de eso → conscientes de que.' },
            { text: 'Recuerda que al principio solo tenían doscientos libros.', answer: 'bien', why: '«Recordar» es transitivo: recuerda eso → que.' },
          ] },
          { kind: 'teacher', text: 'Pregunta útil antes de cada frase: «¿Cómo sería con “eso”?». Si sale «de eso» o «en eso», la preposición se queda; si sale «eso» solo, no hay preposición.' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: '¿Eso, de eso o en eso? Eso, de eso or en eso?',
      steps: [
        { title: 'Elige la forma · Choose the form', blocks: [
          { kind: 'choice', items: [
            { context: 'Daniela redacta el primer párrafo. (Daniela drafts the first paragraph.)', prompt: '«La fundadora se mostró convencida ___ el proyecto saldrá adelante».', options: ['en que', 'que', 'de que'], answer: 2, why: 'Convencida de eso → de que. Sin «de» sería queísmo.', en: 'The founder said she was convinced the project would succeed.' },
            { context: 'Una frase de la entrevista. (A line from the interview.)', prompt: '«Teresa nos comentó ___ los niños vienen todas las tardes».', options: ['de que', 'que', 'en que'], answer: 1, why: 'Comentar algo → nos comentó eso → que.', en: 'Teresa told us the children come every afternoon.' },
            { context: 'El párrafo sobre el dinero. (The paragraph about money.)', prompt: '«___ los fondos llegan tarde, la biblioteca nunca ha cerrado».', options: ['A pesar que', 'A pesar de que', 'Pese de que'], answer: 1, why: 'La locución es «a pesar de que». «Pese a que» también existe, pero «pese de que» no.', en: 'Even though the funds arrive late, the library has never closed.' },
            { context: 'Óscar revisa la maqueta. (Óscar checks the layout.)', prompt: '«Al ver la portada, Óscar ___ la foto estaba al revés».', options: ['advirtió de que', 'advirtió que', 'advirtió en que'], answer: 1, why: 'Aquí «advertir» significa notar: es transitivo, sin «de».', en: 'Looking at the front page, Óscar noticed the photo was upside down.' },
            { context: 'Lucía escribe al equipo: «Les aviso ___ la reunión se adelanta a las nueve».', prompt: '¿Qué formas son correctas en el hueco?', options: ['Las dos: «avisar (de) que».', 'Solo «de que».', 'Solo «que».'], answer: 0, why: '«Avisar algo» y «avisar de algo» son correctas, y con «que» también.', en: 'Which forms are correct? «Avisar» accepts both.' },
          ] },
        ] },
        { title: '¿Con preposición o sin ella? · With or without a preposition?', blocks: [
          { kind: 'classify', title: 'Usa las pruebas · Use the tests', categories: [
            { id: 'prep', label: 'PREPOSICIÓN NECESARIA · de que, en que', tone: 'blue' },
            { id: 'que', label: 'SOLO QUE', tone: 'orange' },
            { id: 'ambas', label: 'LAS DOS VALEN', tone: 'teal' },
          ], items: [
            { text: 'Teresa se enteró … la alcaldía local recortaba el presupuesto.', answer: 'prep', why: '¿De qué se enteró? → de que.' },
            { text: 'Parece … los vecinos están contentos con el cambio.', answer: 'que', why: '«Parecer» no lleva preposición: parece que.' },
            { text: 'Dudo … lleguen los libros antes de marzo.', answer: 'ambas', why: '«Dudar (de) que»: las dos construcciones son correctas.' },
            { text: 'La junta acordó … la biblioteca abriría los sábados.', answer: 'que', why: '«Acordar» = decidir: acordó eso → que.' },
            { text: 'Los voluntarios confían … el barrio los apoye.', answer: 'prep', why: '¿En qué confían? → en que.' },
            { text: 'Recogieron las sillas antes … empezara a llover.', answer: 'ambas', why: '«Antes (de) que»: las dos son correctas.' },
          ] },
        ] },
        { title: 'Corrige las frases · Correct the sentences', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Se me olvidó de que hoy cerrábamos antes.', ok: false, options: ['Se me olvidó en que hoy cerrábamos antes.', 'Se me olvidó que hoy cerrábamos antes.', 'Me olvidé que hoy cerrábamos antes.'], answer: 1, why: 'Con «se me olvidó» la oración es el sujeto: se me olvidó eso → que. «Me olvidé que» sería queísmo (me olvidé de que).' },
            { sentence: 'No cabe duda que la biblioteca ha cambiado el barrio.', ok: false, options: ['No cabe duda en que la biblioteca ha cambiado el barrio.', 'No cabe de duda que la biblioteca ha cambiado el barrio.', 'No cabe duda de que la biblioteca ha cambiado el barrio.'], answer: 2, why: 'Queísmo: no cabe duda de eso → de que.' },
            { sentence: 'Resulta que la biblioteca empezó en un garaje.', ok: true, why: 'Correcta: «resulta que» (= ocurre que) no lleva preposición.' },
            { sentence: 'Es necesario de que la alcaldía renueve el convenio.', ok: false, options: ['Es necesario en que la alcaldía renueve el convenio.', 'Es necesario que la alcaldía renueve el convenio.', 'Es necesaria de que la alcaldía renueve el convenio.'], answer: 1, why: 'Dequeísmo: la oración es el sujeto de «es necesario», sin preposición.' },
            { sentence: 'Los organizadores son conscientes que el local es pequeño.', ok: false, options: ['Los organizadores son conscientes en que el local es pequeño.', 'Los organizadores son conscientes de que el local es pequeño.', 'Los organizadores son conscientes de que el local sea pequeño.'], answer: 1, why: 'Queísmo: consciente de eso → de que, con indicativo porque se afirma un hecho.' },
            { sentence: 'Teresa nos advirtió de que el local podía cerrar.', ok: true, why: 'Correcta: «advertir» = avisar admite las dos construcciones, con «de» o sin él.' },
          ] },
        ] },
        { title: 'Daniela y Óscar · Daniela and Óscar', blocks: [
          { kind: 'chat-fill', title: 'Mensajes antes de publicar · Messages before publishing', lines: [
            { who: 'Óscar', text: 'Daniela, ¿ya está la entrevista? Me fijé ___ cambiaste el titular.', options: ['de que', 'que', 'en que'], answer: 2, why: '«Fijarse en algo» → me fijé en que.' },
            { who: 'Daniela', text: 'Sí. Lucía me hizo ver ___ «es seguro de que» era dequeísmo.', options: ['de que', 'que', 'en que'], answer: 1, why: '«Hacer ver algo a alguien» → me hizo ver eso → que.' },
            { who: 'Óscar', text: '¿Y Teresa ya lo leyó?' },
            { who: 'Daniela', text: 'Sí: ___ le mandé el texto, me contestó que le encantaba.', options: ['después de que', 'después de', 'después en que'], answer: 0, why: 'Ante una oración con verbo conjugado: «después de que» (o «después que»). «Después de» solo va con infinitivo o sustantivo.' },
            { who: 'Óscar', text: 'Perfecto. Solo una cosa: encárgate ___ salga antes de las doce.', options: ['en que', 'que', 'de que'], answer: 2, why: '«Encargarse de algo» → encárgate de que (+ subjuntivo).' },
            { who: 'Daniela', text: 'Tranquilo. Te aseguro ___ a las once estará publicada.', options: ['de que', 'que', 'en que'], answer: 1, why: '«Asegurar algo a alguien» → te aseguro que. Ojo: «asegurarse de que» (comprobar) sí lleva «de».' },
            { who: 'Óscar', text: '¡Genial! Así no hay riesgo de que otro medio se nos adelante.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['No', 'cabe', 'duda', 'de', 'que', 'tienes', 'razón.'], accept: ['No cabe duda de que tienes razón.'], en: 'There’s no doubt you’re right.' },
            { tiles: ['Me', 'alegra', 'que', 'hayas', 'venido.'], accept: ['Me alegra que hayas venido.'], en: 'I’m glad you came: the clause is the subject, so no «de».' },
            { tiles: ['Se', 'trata', 'de', 'que', 'todos', 'participen.'], accept: ['Se trata de que todos participen.'], en: 'The point is for everyone to take part.' },
          ] },
        ] },
        { title: 'Transforma · Transform', blocks: [
          { kind: 'rewrite', title: 'Misma idea, otra construcción · Same idea, another pattern', items: [
            { prompt: 'Me acuerdo de que la biblioteca era un garaje.', instruction: 'Usa «recordar». (Use «recordar».)', accept: ['Recuerdo que la biblioteca era un garaje.'] },
            { prompt: 'Me alegra que vengas a la inauguración.', instruction: 'Usa «alegrarse» con «yo» como sujeto. (Make «yo» the subject.)', accept: ['Me alegro de que vengas a la inauguración.', 'Yo me alegro de que vengas a la inauguración.'] },
            { prompt: 'La biblioteca seguirá abierta. Estoy segura de eso.', instruction: 'Une las ideas: «Estoy segura…». (Join the ideas.)', accept: ['Estoy segura de que la biblioteca seguirá abierta.'] },
            { prompt: 'Es posible que cierren el local.', instruction: 'Usa «Cabe la posibilidad…». (Use «caber la posibilidad».)', accept: ['Cabe la posibilidad de que cierren el local.'] },
            { prompt: 'Me olvidé de que hoy era festivo.', instruction: 'Usa «se me olvidó». (Use «se me olvidó».)', accept: ['Se me olvidó que hoy era festivo.'] },
          ] },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'La cápsula de la lengua', coach: 'Primero escucha sin leer. Listen first, read later.',
      steps: [
        { title: 'Un minuto con la lengua · A minute on language', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: la idea general. Segunda escucha: tu alumno apunta qué truco da Lucía, qué casos admiten las dos formas y qué dice sobre la conversación. Después, las preguntas.', self: 'Escucha una vez para la idea general y otra para los detalles: el truco, los casos dobles y lo que dice del habla. (Listen once for the gist, once for the details.)' } },
          { kind: 'listen', title: 'La cápsula de la lengua', channel: 'PÓDCAST DE CUADERNO URBANO · LUCÍA ARANGO', src: '/audio/grammar-live/480.mp3',
            before: 'Lucía graba cada semana una cápsula de un minuto sobre el idioma para el pódcast del medio. Después de la entrevista de Daniela, ¿de qué crees que habla esta vez? (What do you think this week’s capsule is about?)',
            gist: { prompt: '¿Cuál es el mensaje principal de la cápsula?', options: ['Que en los textos cuidados conviene revisar los «de que», sin juzgar a nadie por cómo habla.', 'Que «de que» siempre es incorrecto.', 'Que en Colombia no hay que preocuparse por estas formas.'], answer: 0, why: 'Explica los dos errores, da un truco, aclara que se oyen en todas partes y recomienda revisarlos al escribir para publicar.', en: 'What is the main message of the capsule?' },
            details: [
              { prompt: '¿Qué ocurrió en la redacción esta semana?', options: ['Un lector se quejó de un artículo.', 'Lucía encontró errores de este tipo al revisar una entrevista.', 'Óscar cambió las normas del medio.'], answer: 1, why: '«Revisando una entrevista, me di cuenta de que hasta en nuestra redacción se nos escapan los “de que”».', en: 'What happened in the newsroom this week?' },
              { prompt: '¿Qué truco propone Lucía?', options: ['Cambiar la oración por «eso» o hacer la pregunta.', 'Usar siempre «de que» en caso de duda.', 'Leer la frase en voz alta.'], answer: 0, why: '«Cambien la oración por “eso”, o hagan la pregunta».', en: 'What trick does Lucía suggest?' },
              { prompt: '¿Con qué casos no hace falta obsesionarse?', options: ['Con «avisar», «dudar» y «antes (de) que».', 'Con «pensar» y «decir».', 'Con «acordarse» y «estar seguro».'], answer: 0, why: 'Con ellos las dos formas son correctas.', en: 'Which cases are not worth worrying about?' },
              { prompt: '¿Qué dice sobre la conversación?', options: ['Que son típicos de una sola región.', 'Que estos usos se oyen en todo el mundo hispánico, también entre personas cultas.', 'Que solo los usan los jóvenes.'], answer: 1, why: '«En la conversación, estos usos se oyen en todo el mundo hispánico, también entre personas cultas».', en: 'What does she say about everyday speech?' },
            ],
            transcript: 'Bienvenidos a la cápsula de la lengua de Cuaderno Urbano. Hoy empiezo con una confesión: esta semana, revisando una entrevista, [[me di cuenta de que|blue]] hasta en nuestra redacción se nos escapan los «de que». Empecemos por el exceso. Si alguien escribe «pienso de que» o «me dijo de que», sobra la preposición: uno piensa algo, no piensa de algo. Lo cuidado es [[pienso que|orange]] y [[me dijo que|orange]]. Ahora, el caso contrario, que se oye todavía más: «me acuerdo que», «estoy seguro que». Aquí falta algo, porque uno se acuerda de algo y está seguro de algo. Lo cuidado es [[me acuerdo de que|blue]] y [[estoy seguro de que|blue]]. ¿Un truco? Cambien la oración por «eso», o hagan la pregunta: ¿de qué estoy seguro? Si la pregunta lleva «de», la respuesta también. Eso sí, no se obsesionen: con «avisar» o con «dudar» las dos formas son correctas, y [[antes de que|teal]] o «antes que», también. Y una aclaración importante: en la conversación, estos usos se oyen en todo el mundo hispánico, también entre personas cultas. Nadie habla mal por eso. Pero cuando escribimos para publicar, [[no cabe duda de que|blue]] vale la pena revisarlos. [[Me alegro de que|blue]] nos hayan acompañado. Hasta la próxima cápsula.',
            reply: { teacher: 'Tú eres un oyente que no entendió la cápsula. Tu alumno te explica con sus palabras el truco de «eso» y te da dos ejemplos propios, uno con «de que» y otro sin preposición.', self: 'Explica en voz alta, con tus palabras, el truco de Lucía y da dos ejemplos tuyos: uno con «de que» y otro sin preposición. (Explain the trick aloud with two examples of your own.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Recuerdos, certezas y avisos', coach: 'Habla de ti y cuida cada «que». Talk about yourself and watch every «que».',
      steps: [
        { title: 'Habla con precisión · Speak with precision', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas y las de seguimiento. Si falta o sobra un «de», tú repites la frase en versión cuidada y siguen.', self: 'Lee la situación y responde en voz alta. Antes de cada «que», haz la prueba de «eso». (Answer aloud; test each «que» first.)' } },
          { kind: 'talk', cards: [
            { q: 'Un recuerdo de tu barrio o de tu escuela cuando eras niño o niña. · A memory of your neighbourhood or school as a child.', followUps: ['¿Qué ha cambiado desde entonces? (What has changed since then?)', '¿Hay algo que se te había olvidado por completo? (Anything you had completely forgotten?)'], phrases: ['[[Me acuerdo de que|blue]]…', '[[Recuerdo que|orange]]…', '[[Se me había olvidado que|orange]]…'], hint: 'Recordar algo (sin «de»), acordarse de algo (con «de»); con «se me olvidó», sin «de».', example: 'Me acuerdo de que en mi barrio había una panadería que abría a las cinco de la mañana. Recuerdo que el olor llegaba hasta mi ventana. Se me había olvidado que la dueña nos regalaba pan los domingos; me lo recordó mi hermana hace poco.', next: 'Ahora, un descubrimiento.' },
            { q: 'Algo de lo que te diste cuenta tarde: en un viaje, en un trabajo, en una relación. · Something you realised too late.', followUps: ['¿Cómo te enteraste? (How did you find out?)', '¿Qué hiciste después? (What did you do next?)'], phrases: ['[[Me di cuenta de que|blue]]…', '[[Me enteré de que|blue]]…', '[[Advertí que|orange]]… (= noté)'], hint: '«Darse cuenta» y «enterarse» piden «de»; «advertir» con el sentido de notar va sin «de».', example: 'En mi primer viaje a Lima me di cuenta de que había reservado el hotel para el mes equivocado. Me enteré de que no había habitaciones libres cuando ya estaba en la recepción. Por suerte, la recepcionista advirtió que yo estaba a punto de llorar y me buscó otro sitio.', next: 'Ahora, tus certezas.' },
            { q: 'Una opinión que tienes clarísima y otra de la que no estás tan seguro. · One firm opinion and one you are less sure about.', followUps: ['¿Siempre has pensado así? (Have you always thought that?)', '¿Qué te haría cambiar de opinión? (What would change your mind?)'], phrases: ['[[Estoy convencida de que|blue]]…', '[[No cabe duda de que|blue]]…', '[[Pienso que|orange]]…, pero [[dudo (de) que|teal]]…'], hint: 'Convencido / seguro de que; pienso que sin «de»; con «dudar», las dos valen.', example: 'Estoy convencida de que aprender idiomas cambia la forma de pensar; de eso no cabe duda. En cambio, pienso que las aplicaciones ayudan, pero dudo de que basten para hablar con fluidez.', next: 'Ahora, un proyecto.' },
            { q: 'Un proyecto en tu trabajo, tu barrio o tu familia que defiendes. ¿Qué pides y en qué confías? · A project you defend: what do you ask for and what do you trust will happen?', followUps: ['¿Quién se opone y por qué? (Who is against it?)', '¿Cuál es el siguiente paso? (What is the next step?)'], phrases: ['[[Insisto en que|blue]]…', '[[Confío en que|blue]]…', '[[No se trata de que|blue]]…, [[sino de que|blue]]…'], hint: 'Insistir en, confiar en, tratarse de: la preposición se queda delante de «que».', example: 'En mi oficina defiendo que tengamos un día de teletrabajo. Insisto en que no se trata de que trabajemos menos, sino de que perdamos menos horas en el tráfico. Confío en que la dirección lo pruebe al menos tres meses.', next: 'Ahora, un aviso formal.' },
            { q: 'Juego de rol: eres editor o editora y tienes que dar una mala noticia a un autor (su texto se retrasa o se acorta). · Role-play: give an author bad news formally.', followUps: ['¿Cómo suavizas la noticia? (How do you soften it?)', '¿Qué alternativa le ofreces? (What alternative do you offer?)'], phrases: ['[[Le informo de que|blue]]…', '[[Le aviso (de) que|teal]]…', '[[Soy consciente de que|blue]]…'], hint: 'Informar de que (en América también «informar que»); avisar con o sin «de»; consciente de que.', example: 'Buenos días, señor Molina. Le informo de que su artículo no saldrá esta semana. Soy consciente de que lo esperaba con ganas, pero le aviso de que el próximo número tendrá más páginas y le hemos reservado un espacio. Me ocupo de que tenga la prueba el lunes.', next: 'Para terminar, un debate.', teacher: 'Tú eres el autor y te muestras molesto. Tu alumno mantiene el registro formal y usa al menos tres expresiones con preposición + que.' },
            { q: 'Debate: ¿hay que corregir a alguien que dice «pienso de que» o «me acuerdo que»? ¿Y en una cita de periódico? · Should we correct people? And in a newspaper quote?', followUps: ['¿Hay diferencia entre hablar y escribir? (Is speaking different from writing?)', '¿Quién decide qué es correcto? (Who decides what is correct?)'], phrases: ['[[Soy consciente de que|blue]]…', '[[El hecho de que|blue]]… no significa que…', '[[Estoy de acuerdo en que|blue]]…'], hint: 'Distingue el habla espontánea del texto cuidado; cuida tus propios «de que» mientras argumentas.', example: 'Soy consciente de que mucha gente culta dice «me acuerdo que», y el hecho de que sea frecuente no significa que esté mal en una charla. Estoy de acuerdo en que en un artículo hay que revisarlo, pero pienso que las citas deben respetar cómo habla cada persona.', teacher: 'Tú defiendes que hay que corregir siempre. Tu alumno argumenta lo contrario y distingue entre habla, texto propio y cita textual.' },
          ], swap: { teacher: 'Al final cambian los papeles: tu alumno te hace dos de las preguntas y tú respondes con algún queísmo o dequeísmo a propósito; tu alumno lo detecta y lo dice en versión cuidada.', self: 'Ahora graba o di en voz alta un minuto sobre tu semana con cinco «que» distintos (de que, en que, que) y revisa cada uno con la prueba de «eso». (Speak for a minute and check each «que».)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Una nota breve para el medio', coach: 'Escribe en la voz del medio: norma cuidada. Write in the outlet’s voice: careful norm.',
      steps: [
        { title: 'La nota de Daniela · Daniela’s news brief', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Después tu alumno lee el texto en voz alta y los dos revisan cada «que» con la prueba de «eso».', self: 'Escribe tu nota y toca «Revisar mi texto». Después revisa tú cada «que» con la prueba de «eso». (Write, then test each «que».)' } },
          { kind: 'write', title: 'Nota breve · News brief', situation: 'Eres Daniela. Óscar te pide una nota breve para la portada de Cuaderno Urbano sobre los diez años de la biblioteca de Teresa Pineda, en estilo indirecto y en la voz del medio. También puedes escribir sobre una iniciativa real de tu barrio o de tu ciudad. (You are Daniela: write a short news piece in reported speech, in the outlet’s careful voice, or about a real local initiative.)', task: [
              'Cuenta lo que dijo la persona entrevistada con al menos cuatro verbos de régimen: insistió en que, recordó que, se mostró convencida de que, advirtió (de) que… (Four reporting verbs.)',
              'Usa un adjetivo o un sustantivo + de que: consciente, seguro, la posibilidad, el hecho… (One adjective or noun + de que.)',
              'Incluye una cita textual entre comillas. (One direct quote.)',
              'Escribe sin queísmo ni dequeísmo en la voz del medio. (Careful norm in your own voice.)',
            ], starters: ['La biblioteca comunitaria de…', 'Su fundadora recordó que…', 'Durante la entrevista, insistió en que…', 'Se mostró convencida de que…', 'Los voluntarios confían en que…'],
            words: ['recordó que', 'insistió en que', 'convencida de que', 'consciente de que', 'advirtió que', 'aseguró que', 'confían en que', 'la posibilidad de', 'antes de que', 'se trata de que'],
            model: 'La biblioteca comunitaria de San Cristóbal cumple diez años. Su fundadora, Teresa Pineda, recordó que el proyecto empezó en un garaje con doscientos libros donados por los vecinos. Durante la entrevista, insistió en que la biblioteca no es solo un lugar para leer: allí los niños hacen las tareas y los mayores aprenden a usar internet. Pineda se mostró convencida de que el barrio seguirá apoyando la iniciativa, aunque advirtió que el local se ha quedado pequeño. También aseguró que la alcaldía local estudia la posibilidad de ceder un edificio cercano, pero reconoció que todavía no hay nada firmado. «Me alegro de que la gente joven quiera participar; no se trata de que vengan a ayudarnos, sino de que sientan que esto es suyo», dijo. Los voluntarios, conscientes de que el proyecto depende de ellos, confían en que el nuevo espacio esté listo antes de que termine el año. Quien quiera colaborar puede acercarse cualquier tarde.',
            minWords: 120,
            checks: [
              { label: 'Un verbo con «en que» (insistir, confiar…)', pattern: '(?<!\\p{L})(?:insist|conf[ií])\\p{L}*\\s+en\\s+que(?!\\p{L})', tip: 'Escribe, por ejemplo: «Insistió en que la biblioteca no es solo un lugar para leer».' },
              { label: 'Un adjetivo o sustantivo + de que', pattern: '(?<!\\p{L})(?:segur[oa]s?|convencid[oa]s?|conscientes?|posibilidad|hecho|idea|duda)\\s+de\\s+que(?!\\p{L})', tip: 'Escribe, por ejemplo: «Se mostró convencida de que el barrio la apoyará».' },
              { label: 'Una cita textual entre comillas', pattern: '[«"“][^»"”]{10,}[»"”]', tip: 'Añade una frase literal de la persona entrevistada entre comillas: «…».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})(?:pienso|piensa|creo|cree|opino|opina|dijo|comentó|aseguró|explicó|es\\s+seguro|es\\s+posible|es\\s+necesario|parece|me\\s+alegra|se\\s+me\\s+olvidó)\\s+de\\s+que(?!\\p{L})', why: 'Posible dequeísmo: «pienso que», «dijo que», «es seguro que», sin «de».' },
              { pattern: '(?<!\\p{L})(?:segur[oa]s?|convencid[oa]s?|conscientes?|me\\s+alegro|se\\s+alegra|insisti\\p{L}*|insiste|me\\s+acuerdo|se\\s+acuerda|se\\s+dio\\s+cuenta|me\\s+di\\s+cuenta|a\\s+pesar|no\\s+cabe\\s+duda)\\s+que(?!\\p{L})', why: 'Posible queísmo: «convencida de que», «insistió en que», «a pesar de que».' },
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
            { tone: 'blue', label: 'PREPOSICIÓN NECESARIA', formula: 'acordarse / darse cuenta / seguro / consciente / el hecho + de que · insistir / confiar + en que', example: 'Me acuerdo de que llovía. Insisto en que hay que pedir ayuda.', caption: 'queísmo si falta', en: 'When the governing word takes a preposition, the «que» clause keeps it; dropping it is «queísmo»' },
            { tone: 'orange', label: 'SIN PREPOSICIÓN', formula: 'pensar / decir / opinar / recordar que · es seguro / me alegra / parece / resulta que', example: 'Pienso que vendrá. Es seguro que abren en marzo.', caption: 'dequeísmo si sobra', en: 'Verbs with a direct object and subject clauses take no preposition; adding «de» is «dequeísmo»' },
            { tone: 'teal', label: 'LAS DOS VALEN', formula: 'avisar / dudar / advertir (= avisar) (de) que · antes / después (de) que', example: 'Nos avisó (de) que llegaría tarde.', caption: 'no corregir lo correcto', en: 'A few verbs and connectors accept both; don’t correct them' },
            { tone: 'orange', label: 'CAMBIA EL SENTIDO', formula: 'advertir que (notar) · acordar que (decidir) / acordarse de que (recordar)', example: 'La junta acordó que abrirían los sábados.', caption: 'el significado decide', en: 'When the meaning changes, so does the construction' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Antes de cada «que», cámbialo por **eso** o haz la **pregunta**: si sale «de eso / en eso» o «¿de qué? / ¿en qué?», la preposición se queda. Si sale «eso» solo, no hay preposición. Y recuerda: en la conversación ambos fenómenos son frecuentes; la norma cuidada es para lo que se escribe o se dice en público.', en: 'Before each «que», swap it for «eso» or ask the question. If you get «de eso / en eso» or «¿de qué? / ¿en qué?», keep the preposition; if you get plain «eso», there is none. Both phenomena are common in conversation; the careful norm is for writing and public speaking.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/portrait.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'Me alegro ___ hayas encontrado trabajo.', options: ['en que', 'que', 'de que'], answer: 2, why: 'Alegrarse de algo → me alegro de que.', en: 'I’m glad you’ve found a job.' },
            { prompt: 'Es probable ___ el tren llegue con retraso.', options: ['en que', 'que', 'de que'], answer: 1, why: 'La oración es el sujeto: es probable eso → que.', en: 'The train will probably be late.' },
            { prompt: 'Al entrar, ___ alguien había movido los muebles.', options: ['advertí de que', 'advertí que', 'advertí en que'], answer: 1, why: '«Advertir» = notar: transitivo, sin «de».', en: 'When I went in, I noticed someone had moved the furniture.' },
            { prompt: 'Lo importante ahora es ___ todos estemos de acuerdo.', options: ['de que', 'que', 'en que'], answer: 1, why: '«Lo importante es eso» → que, sin preposición.', en: 'The important thing now is that we all agree.' },
            { prompt: 'Somos conscientes ___ queda mucho por hacer.', options: ['en que', 'de que', 'que'], answer: 1, why: 'Consciente de eso → de que.', en: 'We are aware that there is a lot left to do.' },
          ] },
        ] },
        { title: 'Otra situación · A new situation', mascot: '/autoestudio/mascot/noting.webp', blocks: [
          { kind: 'lead', text: 'Sevilla, España. **Marina**, secretaria de una asociación de vecinos, pasa a limpio el acta de la última reunión. Sus notas están escritas deprisa, tal como se habló.', en: 'Seville, Spain. Marina, secretary of a residents’ association, is writing up the minutes of the last meeting. Her notes were jotted down quickly, the way people spoke.' },
          { kind: 'rewrite', title: 'Del apunte al acta · From notes to minutes', items: [
            { prompt: 'El presidente insistió que hay que arreglar el ascensor.', instruction: 'Escribe la frase en versión cuidada. (Write the careful version.)', accept: ['El presidente insistió en que hay que arreglar el ascensor.', 'El presidente insistió en que había que arreglar el ascensor.'] },
            { prompt: 'La administradora dijo de que el presupuesto no alcanza.', instruction: 'Escribe la frase en versión cuidada. (Write the careful version.)', accept: ['La administradora dijo que el presupuesto no alcanza.', 'La administradora dijo que el presupuesto no alcanzaba.'] },
            { prompt: 'Los vecinos del tercero se quejan. A pesar de eso, la obra empezará en mayo.', instruction: 'Une las ideas con «A pesar de que…». (Join with «a pesar de que».)', accept: ['A pesar de que los vecinos del tercero se quejan, la obra empezará en mayo.'] },
          ] },
        ] },
        { title: 'Ampliación: casos finos · Extension: tricky cases', mascot: '/brand/mascot/studying.webp', coach: 'Opcional: para ir más lejos. Optional: going further.', blocks: [
          { kind: 'lead', text: 'Cuatro casos que confunden incluso a hablantes cultos. **Cabe destacar que** (destacar algo) frente a **cabe la posibilidad de que** (la posibilidad de algo). **La idea que propuso** (relativo: propuso la idea) frente a **la idea de que** + contenido. **Resultar de** existe con el sentido de «derivarse»: «El retraso **resulta de que** nadie revisó los datos». Y **informar**: en España se prefiere «informar de que»; en América también es normal y correcto «informar que».', en: 'Four cases that trip up even educated speakers: «cabe destacar que» vs «cabe la posibilidad de que»; a relative «que» after a noun vs a content clause; «resultar de» meaning «to stem from», which is correct; and «informar», where Latin American usage also accepts the form without «de».' },
          { kind: 'choice', title: 'Casos finos · Tricky cases', items: [
            { prompt: 'Informe anual: «Cabe destacar ___ las visitas se duplicaron».', options: ['de que', 'que', 'en que'], answer: 1, why: '«Destacar algo» → cabe destacar eso → que. Compáralo con «cabe la posibilidad de que».', en: 'It is worth noting that visits doubled.' },
            { prompt: '¿Qué frase está bien?', options: ['La idea en que propuso Teresa gustó a todos.', 'La idea de que propuso Teresa gustó a todos.', 'La idea que propuso Teresa gustó a todos.'], answer: 2, why: 'Es un relativo: Teresa propuso la idea. Sin «de». Con contenido sería «la idea de que la biblioteca abra los domingos».', en: 'Which sentence is right? A relative clause, not a content clause.' },
            { prompt: '«El déficit resulta de que nadie actualizó las cuotas». ¿Es correcta?', options: ['Sí: «resultar de» significa aquí «derivarse de».', 'No: es dequeísmo, como «resulta de que no vino».', 'No: tiene que ser «resulta en que».'], answer: 0, why: 'Con el sentido de «derivarse», «resultar» pide «de». El dequeísmo es «resulta de que» con el sentido de «ocurre que».', en: 'Is it correct? Here «resultar de» means «to stem from».' },
            { prompt: 'Un aviso oficial en Bogotá dice: «Se informa a los usuarios que el servicio se suspende el lunes». ¿Qué dice la norma?', options: ['Es incorrecto en cualquier país.', 'Es correcto: en América es normal «informar que»; «informar de que» también valdría.', 'Solo es correcto en España.'], answer: 1, why: 'El DPD acepta «informar que» en el uso americano; «informar de que» es la forma general.', en: 'What does the norm say about this official notice?' },
          ] },
          { kind: 'teacher', text: 'Paso opcional, para alumnos fuertes o si sobra tiempo. Extra: tu alumno busca en un periódico digital dos frases con «de que» y comprueba con la prueba de «eso» si siguen la norma cuidada.' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 181 · Pronombres átonos: leísmo, laísmo, loísmo y variedades', text: 'Hoy has visto cómo el régimen del verbo decide si aparece una preposición delante de «que», y cómo se separa el habla espontánea de la norma cuidada. La clase 181 aplica la misma mirada a los pronombres: el verbo decide si el complemento es directo o indirecto (lo, la o le), y también allí conviven variedades legítimas con usos que se evitan en un texto cuidado.', en: 'Today you saw how the verb’s pattern decides whether a preposition comes before «que», and how spontaneous speech differs from the careful norm. Class 181 applies the same approach to object pronouns: the verb decides whether the object is direct or indirect (lo, la or le), and there too legitimate regional varieties coexist with uses avoided in careful writing.', href: '/gramatica/pronombres-atonos-leismo-laismo-loismo-y', label: 'Ir a la clase 181' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Por qué es correcto “es seguro que” y también “estoy seguro de que”? ¿Y por qué no se corrige “nos avisó que”?». Respuesta esperada: en la primera, la oración es el sujeto; en la segunda, el adjetivo pide «de»; «avisar» admite las dos construcciones. Tarea: revisar un correo propio y comprobar cada «que» con la prueba de «eso».' },
        ] },
      ],
    },
  ],
};
