import type { LiveLesson } from '../types';

/**
 * Lesson 470 · C1 · Alternancias en concesivas con valor pragmático (course unit G170).
 * Builds on G101 (g401: aunque + indicativo), G137 (lesson 220: aunque + ind. /
 * subj., three intentions), G138 (g438: a pesar de que, por mucho / muy… que, si
 * bien, aun cuando, aun + gerundio, así + subj. as a preview) and G156 (g456:
 * connectors, y eso que). G145 (g445) introduced pase lo que pase. Here the focus
 * is pragmatic: what the speaker DOES with the concession in an argument.
 * One scene runs through the class: Inés Valdés directs a small theatre company
 * about to open «La fábrica», a play about the closure of the city's old textile
 * mill. The municipal Culture office offers the Teatro Principal for the opening
 * on condition that they cut the final monologue (Carmen, an old mill worker,
 * accuses the authorities of the time). Julián Ortega, the producer, needs that
 * theatre to close the tour; Sonia Paredes is the Culture director (usted).
 * Explorar: Inés and Julián in the rehearsal room. Escuchar: a radio theatre
 * critic, Rebeca Lozano (es-MX-DaliaNeural, one voice), reviews the opening held
 * in the old mill. Escribir: Inés's open letter to the audience.
 * Content: aunque + indicativo (informing) vs aunque + subjuntivo with a known
 * fact (polemical: granting it to dismiss its relevance); the tense ladder:
 * present subj. (possible / known), imperfect subj. (unlikely or unreal in the
 * present), pluperfect subj. (counterfactual past), with matching main clauses;
 * incluso si / aun si follow the tenses of «si» (never present subjunctive);
 * reduplicated concessives (digan lo que digan, pase lo que pase, quieras o no,
 * sea como sea, hagas lo que hagas; past dijeran lo que dijeran) and «como sea»;
 * por + adjetivo / adverbio + que (por incómoda que sea); por más que + indicative
 * for a real past fact; aun + gerundio; así + subjuntivo (emphatic, frequent in
 * parts of Latin America, literary elsewhere); si bien and y eso que reviewed.
 * Ampliación: concessives in reported speech (correlación temporal) and the
 * polemical subjunctive in the past.
 */
export const lesson: LiveLesson = {
  id: 470,
  level: 'C1',
  title: 'Alternancias en concesivas con valor pragmático',
  subtitle: 'Discutir con concesivas: informar, quitar peso a un dato conocido, imaginar lo improbable o rehacer el pasado sin ceder.',
  legend: [
    { tone: 'blue', label: 'INFORMAR · indicativo: un dato que comunicas o afirmas (aunque el teatro es municipal, por más que lo intentamos)' },
    { tone: 'orange', label: 'QUITAR PESO · subjuntivo con un dato conocido: «sí, ¿y qué?» (aunque sea el municipio quien paga)' },
    { tone: 'violet', label: 'SUPONER · poco probable o contrario a la realidad (aunque nos lo pidieran, aunque lo hubiera leído, incluso si…)' },
    { tone: 'teal', label: 'DA IGUAL · digan lo que digan, quieras o no, por incómoda que sea, aun sabiéndolo, así me paguen' },
  ],
  optionNotes: {
    'aún': '«Aún» con tilde significa «todavía». Con el sentido de «incluso», delante de un gerundio, se escribe sin tilde: «aun sabiéndolo».',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Conceder para ganar la discusión', coach: 'El modo dice qué haces con el dato. Mood shows what you do with the fact.',
      steps: [
        { title: 'Un monólogo incómodo · An awkward monologue', blocks: [
          { kind: 'lead', text: 'Inés Valdés dirige una pequeña compañía de teatro que va a estrenar «La fábrica», una obra sobre el cierre de la antigua fábrica textil de la ciudad. La Dirección de Cultura del municipio le ofrece el Teatro Principal para el estreno… si corta el monólogo final, en el que Carmen, una vieja obrera, acusa a las autoridades de entonces. Julián Ortega, el productor, le recuerda que el teatro lo paga el municipio. Inés contesta: «**Aunque sea el municipio quien paga**, el texto no se toca». En las clases 137, 138 y 156 elegiste el modo según informaras o hablaras de una posibilidad. Hoy el modo y el tiempo verbal se convierten en **herramientas de discusión**.', en: 'Inés Valdés runs a small theatre company about to open “La fábrica”, a play about the closure of the city’s old textile mill. The council’s Culture office offers the main theatre for the opening on one condition: cut the final monologue, in which an old mill worker accuses the authorities of the time. When the producer reminds her that the council is paying, Inés replies with a subjunctive: she grants the fact and denies it any weight. Today mood and tense become tools for arguing.' },
          { kind: 'guide', text: { teacher: 'Tú lees las cuatro frases. Tu alumno dice, para cada una, si Inés informa, si quita peso a algo que ya se sabe, si imagina algo poco probable o si rehace el pasado.', self: 'Lee las cuatro frases en voz alta. ¿Inés informa, quita peso a algo sabido, imagina algo improbable o rehace el pasado? (Does she inform, dismiss a known fact, imagine something unlikely or rewrite the past?)' } },
          { kind: 'compare', title: 'Un mismo «aunque», cuatro gestos · One aunque, four moves', columns: [
            { tone: 'blue', label: 'INFORMO', sentence: '[[Aunque el municipio nos cede el teatro|blue]], la producción la pagamos nosotros.', idea: 'Inés se lo explica a una periodista que no conoce el acuerdo: los dos datos son información nueva.', en: 'The indicative presents the concession as news: the journalist did not know the council lends the theatre.' },
            { tone: 'orange', label: 'LO SÉ, ¿Y QUÉ?', sentence: '[[Aunque sea el municipio quien paga|orange]], el texto no se toca.', idea: 'Julián acaba de decirlo. Inés no lo discute: lo da por sabido y le quita toda relevancia.', en: 'The subjunctive takes up a fact already on the table and dismisses it: “fine, so what?”. It sounds like a comeback.' },
            { tone: 'violet', label: 'NI EN HIPÓTESIS', sentence: '[[Aunque nos lo pidieran por escrito|violet]], no cortaríamos el monólogo.', idea: 'Inés lo ve poco probable; aun en ese caso, no cedería.', en: 'The imperfect subjunctive pushes the case into the unlikely; the main clause goes into the conditional.' },
            { tone: 'violet', label: 'NI EN OTRO PASADO', sentence: '[[Aunque nos lo hubieran pedido hace un año|violet]], habríamos dicho que no.', idea: 'Nadie se lo pidió entonces: Inés imagina un pasado distinto con el mismo final.', en: 'The pluperfect subjunctive rewrites the past: it did not happen, and even if it had, the outcome would be the same.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Aunque sea el municipio quien paga, el texto no se toca». ¿Qué hace Inés con el dato?', options: ['Duda de que sea verdad.', 'Lo acepta, pero le niega importancia en la discusión.', 'Lo anuncia porque Julián no lo sabía.'], answer: 1, why: 'Julián acaba de decirlo: el subjuntivo retoma un dato conocido y lo descarta como argumento. No expresa duda.', en: 'She accepts the fact but refuses to let it count in the argument; the subjunctive here is not doubt.' },
            { prompt: '¿Qué frase habla de algo que no ocurrió?', options: ['Aunque el municipio nos cede el teatro, la producción la pagamos nosotros.', 'Aunque nos lo pidieran por escrito, no cortaríamos el monólogo.', 'Aunque nos lo hubieran pedido hace un año, habríamos dicho que no.'], answer: 2, why: 'El pluscuamperfecto de subjuntivo presenta un pasado contrario a la realidad: nadie se lo pidió hace un año.', en: 'Which sentence talks about something that did not happen?' },
          ] },
        ] },
        { title: 'El subjuntivo polémico · Granting a fact to dismiss it', mascot: '/brand/mascot/studying.webp', coach: 'Sí, es verdad. ¿Y qué? Yes, it’s true. So what?', blocks: [
          { kind: 'concept', tone: 'orange', label: 'AUNQUE + SUBJUNTIVO CON UN HECHO CONOCIDO', question: '¿El dato ya está sobre la mesa y quieres que deje de contar?', en: 'Grammars call this the “polemical” subjunctive. The fact is true and both speakers know it, so the subjunctive is not about doubt: it signals that you are not offering information but picking up the other person’s argument in order to discard it. With the indicative the same fact is asserted or brought to the listener’s attention. Both are correct; what changes is the move you make.', formula: ['dato que el otro acaba de dar o que todos saben → aunque + subjuntivo', '= «sí, es así; ¿y qué?»: el argumento queda fuera de la discusión'],
            meaning: 'Con el subjuntivo el hablante **no informa**: retoma un dato que el otro acaba de usar o que todos conocen, lo admite y le niega relevancia. Por eso suena a réplica, a veces tensa. Con el **indicativo**, el mismo dato se **afirma** o se **recuerda** como información. Las dos frases son correctas: cambia lo que haces con el dato.',
            examples: [
              { es: '—Es el municipio quien paga. —Ya, [[aunque sea el municipio quien paga|orange]], la obra es nuestra.', en: 'Julián’s argument is repeated almost word for word and set aside: a typical polemical subjunctive.' },
              { es: '—La escena dura solo cuatro minutos. —[[Aunque dure cuatro minutos|orange]], es el corazón de la obra.', en: 'Inés grants the length the director mentioned and denies that it matters.' },
              { es: '[[Aunque es una escena corta|blue]], los ensayos nos llevaron un mes.', en: 'Said to someone who has not seen the play: the shortness of the scene is presented as information.' },
            ],
            note: 'Pista práctica: si delante cabe «ya lo sé», «de acuerdo» o «sí, ¿y qué?», el subjuntivo polémico encaja. Si estás dando la noticia, lo natural es el indicativo: con un dato que el oyente no conoce, el subjuntivo sonaría extraño, porque daría por sabido algo nuevo.' },
          { kind: 'compare', title: 'Mismo dato, dos gestos · Same fact, two moves', columns: [
            { tone: 'blue', label: 'AFIRMO O RECUERDO', sentence: '[[Aunque es tu jefe|blue]], no tiene derecho a gritarte.', idea: 'Pones el dato en primer plano: «es tu jefe, sí, te lo recuerdo», y aun así no tiene derecho.', en: 'The fact is asserted: you put it in the foreground and still draw the line.' },
            { tone: 'orange', label: 'CONCEDO Y DESCARTO', sentence: '[[Aunque sea tu jefe|orange]], no tiene derecho a gritarte.', idea: 'Tu amiga usa «es mi jefe» como excusa; tú la aceptas y la desactivas.', en: 'Your friend offers “he’s my boss” as an excuse; you accept it and take its force away.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { context: 'Julián: «La directora de Cultura conoce a medio teatro de la ciudad». Inés no lo niega, pero no piensa dejarse impresionar.', prompt: 'Aunque ___ a medio teatro de la ciudad, no va a decidir nuestro texto.', options: ['conoció', 'conocería', 'conozca'], answer: 2, why: 'Inés retoma el dato que acaba de dar Julián para quitarle peso: subjuntivo polémico. El condicional y el indefinido cambian el sentido.', en: 'Even if she does know half the city’s theatre people, she is not going to decide our script.' },
            { context: 'Inés habla con un periodista que no sabe nada del ensayo general.', prompt: 'Aunque el ensayo general ___ a puerta cerrada, usted puede venir.', options: ['es', 'sea', 'fuera'], answer: 0, why: 'Es información nueva para el periodista: Inés la comunica con indicativo. El subjuntivo daría por sabido algo que él no conoce.', en: 'Although the dress rehearsal is closed to the public, you are welcome to come.' },
          ] },
        ] },
        { title: 'La escalera de tiempos · The tense ladder', mascot: '/brand/mascot/seated.webp', coach: '¿Posible, improbable o ya imposible? Possible, unlikely or impossible now?', blocks: [
          { kind: 'concept', tone: 'violet', label: 'TIEMPO DEL SUBJUNTIVO = GRADO DE REALIDAD', question: '¿Lo que concedes puede pasar, es poco probable o ya no puede pasar?', en: 'The further you move down the ladder, the further from reality the concession is. The present subjunctive covers what may happen (or a known fact you dismiss); the imperfect subjunctive, what you see as unlikely or what is unreal now, with a conditional in the main clause; the pluperfect subjunctive, a past that did not happen, with a conditional perfect (or a simple conditional for a present effect).', formula: ['aunque + presente de subjuntivo → presente / futuro / imperativo', 'aunque + imperfecto de subjuntivo → condicional', 'aunque + pluscuamperfecto de subjuntivo → condicional compuesto (o simple, si el efecto es presente)'],
            meaning: 'Cuanto más bajas en la escalera, más te alejas de la realidad. El **imperfecto de subjuntivo** presenta lo **poco probable** o lo **irreal en el presente**; el **pluscuamperfecto**, un **pasado que no ocurrió**. La oración principal acompaña: condicional o condicional compuesto.',
            examples: [
              { es: '[[Aunque nos ofrecieran el doble|violet]], no cortaríamos ni una línea.', en: 'An unlikely offer: even then, not a single line would go.' },
              { es: '[[Aunque tuviéramos un teatro propio|violet]], seguiríamos haciendo gira.', en: 'Unreal in the present: they do not have a theatre of their own.' },
              { es: '[[Aunque hubiéramos aceptado|violet]], la obra no habría sido la misma.', en: 'A past that did not happen: they refused, and accepting would not have helped.' },
              { es: '[[Aunque lo hubiéramos firmado entonces|violet]], hoy no estaríamos tranquilos.', en: 'Past condition, present effect: the main clause can use the simple conditional.' },
            ],
            note: 'En la oración principal también es correcto el pluscuamperfecto de subjuntivo: «no hubiera sido la misma» = «no habría sido la misma». Ojo: «Aunque fuera su jefe, no tenía derecho a gritarle» puede ser un dato pasado conocido al que se quita peso, no una hipótesis. El contexto decide.' },
          { kind: 'table', title: 'La escalera completa · The full ladder', head: ['Concesiva', 'Qué presenta', 'Oración principal'], rows: [
            ['aunque + indicativo: [[aunque llueve, aunque llovió|blue]]', 'un hecho que se afirma o se anuncia', 'cualquier tiempo'],
            ['aunque + presente de subjuntivo: [[aunque llueva|orange]]', 'algo posible, o un dato conocido sin peso', 'estrenamos, estrenaremos, ¡estrenemos!'],
            ['aunque + imperfecto de subjuntivo: [[aunque lloviera|violet]]', 'poco probable o irreal ahora', 'estrenaríamos'],
            ['aunque + pluscuamperfecto de subjuntivo: [[aunque hubiera llovido|violet]]', 'pasado contrario a la realidad', 'habríamos (hubiéramos) estrenado'],
          ], note: 'Las formas en -se son igual de correctas: aunque lloviese, aunque hubiese llovido. Son más frecuentes por escrito y en España.' },
          { kind: 'tip', icon: '💡', title: 'Incluso si, aun si: los tiempos de «si» · The tenses of “si”', text: '**Incluso si** y **aun si** (menos frecuente) son condicionales concesivas: aunque se cumpla la condición, el resultado no cambia. Siguen las reglas de **si**: presente de indicativo para lo abierto («incluso si llueve, estrenamos»), imperfecto o pluscuamperfecto de subjuntivo para lo hipotético («incluso si lloviera…», «incluso si hubiera llovido…»). Nunca presente de subjuntivo: *incluso si llueva.', en: '“Incluso si” and the less frequent “aun si” mean “even if”. They take the tenses of “si”: present indicative for an open case, imperfect or pluperfect subjunctive for a hypothetical one, and never the present subjunctive.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { context: 'Nadie le ha ofrecido a la compañía una gira internacional, y no parece probable.', prompt: 'Aunque nos ___ una gira por diez países, no cambiaríamos el final.', options: ['ofrecieran', 'ofrecerían', 'ofrezcan'], answer: 0, why: 'Hipótesis poco probable + condicional en la principal: imperfecto de subjuntivo. «Ofrezcan» no casa con «cambiaríamos», y el condicional no va tras «aunque» para una hipótesis.', en: 'Even if we were offered a ten-country tour, we would not change the ending.' },
            { context: 'Es posible que el informe del seguro se retrase.', prompt: 'Incluso si el informe del seguro ___ tarde, ensayaremos en la fábrica.', options: ['llegará', 'llega', 'llegue'], answer: 1, why: '«Incluso si» sigue las reglas de «si»: presente de indicativo para un caso abierto. Nunca presente de subjuntivo ni futuro.', en: 'Even if the insurance report arrives late, we will rehearse at the mill.' },
          ] },
        ] },
        { title: 'Da igual qué, da igual cuánto · Whatever, however', mascot: '/brand/mascot/speaking.webp', coach: 'Ninguna opción cambia el resultado. No option changes the outcome.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'CONCESIVAS QUE CIERRAN LA DISCUSIÓN', question: '¿Quieres decir que ninguna opción, cantidad o grado cambia tu decisión?', en: 'Reduplicated concessives repeat the same subjunctive verb (“digan lo que digan”, whatever they say) or add “o no” (“quieras o no”, like it or not). In the past the verb moves to the imperfect subjunctive. “Por + adjective + que” without “muy” is a more polished variant of “por muy… que”. And “por más que” takes the indicative when you report something that really happened.', formula: ['subjuntivo + lo que / donde / como / cuando + el mismo verbo: digan lo que digan', 'subjuntivo + o no: quieras o no, guste o no', 'por + adjetivo / adverbio + que + subjuntivo: por incómoda que sea', 'por más que + indicativo: un hecho real (por más que lo intentamos)'],
            meaning: 'Ya conoces «pase lo que pase» (clase 145) y «por muy… que» (clase 138). En C1 los usas para **cerrar** una discusión. **Por + adjetivo + que**, sin «muy», suena más cuidado. En pasado, el verbo va en imperfecto de subjuntivo: «**dijeran lo que dijeran**, estrenamos». Y si cuentas un hecho real, «por más que» admite indicativo.',
            examples: [
              { es: '[[Digan lo que digan en el municipio|teal]], el monólogo se queda.', en: 'Whatever they say at the council, the monologue stays.' },
              { es: '[[Quieras o no|teal]], el estreno es el día 14.', en: 'Like it or not, the opening is on the 14th.' },
              { es: '[[Por incómoda que resulte la escena|teal]], es necesaria.', en: 'Uncomfortable as the scene may be, it is necessary: more polished than “por muy incómoda”.' },
              { es: 'Lo estrenamos [[como sea|teal]]: en un teatro, en una plaza o en la calle.', en: 'After the verb, “como sea” means “one way or another, at any cost”.' },
              { es: '[[Por más que lo intentamos|blue]], no conseguimos otra fecha en el Principal.', en: 'Try as we might (and we really did), we could not get another date at the main theatre: a real past fact in the indicative.' },
            ],
            note: '«Sea como sea» resume la discusión y pasa a otra cosa (= en cualquier caso). Con un hecho pasado, «por más que insistiera» también es correcto: el subjuntivo le quita peso al hecho en vez de contarlo.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'La compañía estrenó en mayo, ___ lo que dijeran los críticos.', options: ['dijeran', 'dicen', 'digan'], answer: 0, why: 'En pasado, la reduplicación pasa al imperfecto de subjuntivo y repite el mismo verbo: dijeran lo que dijeran.', en: 'The company opened in May, whatever the critics said.' },
            { prompt: 'Por ___ que vivas, tienes que venir al estreno.', options: ['lejos', 'tan lejos', 'mucho lejos'], answer: 0, why: 'Por + adverbio + que, sin «muy»: «por lejos que vivas». «Por muy lejos» también sería correcto; «mucho» no va con un adverbio.', en: 'However far away you live, you have to come to the opening.' },
          ] },
        ] },
        { title: 'Formas compactas y de registro · Compact and register forms', mascot: '/autoestudio/mascot/noting.webp', coach: 'Cada forma, su registro. Each form has its register.', blocks: [
          { kind: 'table', title: 'Repaso y novedades · Review and new forms', head: ['Forma', 'Ejemplo', 'Modo y registro'], rows: [
            ['aun + gerundio', '[[Aun sabiéndolo|teal]], la directora se calló.', '= aunque lo sabía; registro cuidado, frecuente por escrito'],
            ['…, así + subjuntivo', 'No lo corto, [[así me paguen el triple|teal]].', 'enfático; frecuente en partes de América Latina, literario en otras zonas'],
            ['si bien + indicativo', '[[Si bien el teatro es municipal|blue]], la obra es nuestra.', 'formal; solo indicativo'],
            ['…, y eso que + indicativo', 'No vino nadie del municipio, [[y eso que los invitamos|blue]].', 'coloquial; siempre detrás'],
            ['incluso si / aun si', '[[Incluso si nos quitan la ayuda|violet]], seguimos.', 'tiempos de «si»'],
          ], note: '«Aun» sin tilde = incluso (aun sabiéndolo, aun si). «Aún» con tilde = todavía.' },
          { kind: 'tip', icon: '🌎', title: '«Así» concesivo · Concessive “así”', text: '**Así + subjuntivo** equivale a «aunque, por mucho que»: «No lo corto, así me paguen el triple». Es una construcción enfática, frecuente en la conversación en partes de América Latina y propia de la lengua literaria en otras zonas. Con indicativo, «así» vuelve a ser «de esta manera»: «¡Y así me pagan!» (= esta es la forma en que me tratan).', en: '“Así + subjunctive” means “even if”: “I won’t cut it, even if they pay me three times as much”. It is emphatic, common in everyday speech in parts of Latin America and literary elsewhere. With the indicative, “así” goes back to meaning “this way”: “¡Y así me pagan!” is “and this is how they repay me!”.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«No subo al escenario sin ensayar, así me lo pida el público». ¿Qué significa «así»?', options: ['De esta manera me lo pide el público.', 'Incluso si me lo pide el público.', 'Porque me lo pide el público.'], answer: 1, why: '«Así» + subjuntivo es concesivo: aunque me lo pida el público.', en: 'What does “así” mean here?' },
            { prompt: 'Carmen, ___ sabiendo que la despedirían, habló en la asamblea.', options: ['aún', 'aunque', 'aun'], answer: 2, why: 'Aun + gerundio = incluso sabiendo. Sin tilde. «Aunque» necesita un verbo conjugado.', en: 'Carmen spoke at the meeting even though she knew she would be fired.' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: '¿El tiempo encaja con el gesto? Does the tense fit the move?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees cada frase con el error y tu alumno explica qué falla antes de ver la corrección: ¿el tiempo, el modo o la forma?', self: 'Lee cada frase y piensa qué falla: ¿el tiempo, el modo o la forma? Después toca para ver la corrección. (Tense, mood or form?)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Incluso si nos lo pidan, no cortaremos la escena.', right: 'Incluso si nos lo piden, no cortaremos la escena.', why: '«Incluso si» sigue las reglas de «si»: nunca presente de subjuntivo. Para una hipótesis: «incluso si nos lo pidieran, no la cortaríamos». (Never present subjunctive after si.)' },
            { wrong: 'Digan lo que dicen, el monólogo se queda.', right: 'Digan lo que digan, el monólogo se queda.', why: 'La reduplicación repite el mismo verbo en el mismo tiempo del subjuntivo.' },
            { wrong: 'Por más que insista ayer, no le hicimos caso.', right: 'Por más que insistió (o insistiera) ayer, no le hicimos caso.', why: 'Es un hecho pasado: indicativo si lo cuentas, imperfecto de subjuntivo si le quitas peso. El presente de subjuntivo no encaja con «ayer».' },
            { wrong: 'Si bien sea el municipio quien paga, la obra es nuestra.', right: 'Si bien es el municipio quien paga, la obra es nuestra.', why: '«Si bien» solo admite indicativo. Para quitar peso con subjuntivo, usa «aunque sea».' },
            { wrong: 'No vino nadie, y eso que los invitáramos.', right: 'No vino nadie, y eso que los invitamos.', why: '«Y eso que» presenta un hecho real: siempre indicativo.' },
            { wrong: 'No lo corto, así me pagan el triple.', right: 'No lo corto, así me paguen el triple.', why: 'Con indicativo, «así» significa «de esta manera»; el valor concesivo pide subjuntivo.' },
            { wrong: 'Aún sabiéndolo, se calló.', right: 'Aun sabiéndolo, se calló.', why: '«Aun» = incluso, sin tilde.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { context: 'La compañía no pidió ayuda a otro teatro. Julián cree que no habría servido de nada.', prompt: 'Aunque ___ ayuda al Teatro del Puerto, no habríamos llegado a tiempo.', options: ['hubiéramos pedido', 'pidamos', 'habíamos pedido'], answer: 0, why: 'Pasado contrario a la realidad (no la pidieron) + condicional compuesto: pluscuamperfecto de subjuntivo.', en: 'Even if we had asked the Teatro del Puerto for help, we would not have made it in time.' },
            { prompt: '___ lo que ___, Inés no corta el monólogo.', options: ['Hagan… hagan', 'Hacen… hagan', 'Hagan… hacen'], answer: 0, why: 'El mismo verbo en el mismo tiempo del subjuntivo, dos veces: hagan lo que hagan.', en: 'Whatever they do, Inés is not cutting the monologue.' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno cuenta una excusa que oye a menudo («es que es mi jefe», «es que es tarde») y la desactiva con «aunque» + subjuntivo; después, una cosa que no haría aunque se la pidieran.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'En la sala de ensayo', coach: 'Toca cada concesiva marcada. Tap each marked concession.',
      steps: [
        { title: 'Después de la reunión · After the meeting', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Julián y tu alumno es Inés. Después tu alumno toca cada expresión marcada y explica qué hace el hablante con la concesión.', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada y piensa: ¿informa, quita peso, supone o dice «da igual»? (Tap each marked phrase and decide what the speaker is doing.)' } },
          { kind: 'explore', title: 'El monólogo se queda', setting: 'Sala de ensayo de la compañía, ocho de la tarde. Julián vuelve de reunirse con Sonia Paredes, directora de Cultura del municipio. Inés y él trabajan juntos desde hace diez años y se tratan de tú. (The rehearsal room, 8 p.m.: the producer is back from meeting the council’s Culture director.)', lines: [
            { who: 'Julián', text: 'Vengo de hablar con Sonia Paredes. No se mueve: si queremos el Teatro Principal, hay que cortar el monólogo de Carmen.', en: 'I’ve just talked to Sonia Paredes. She won’t budge: if we want the main theatre, Carmen’s monologue has to go.' },
            { who: 'Inés', text: 'Ya. Pues [[aunque sea el único teatro grande de la ciudad|orange]], no pienso cortarlo.', en: 'Right. Well, it may be the only big theatre in town, but I’m not cutting it.' },
            { who: 'Julián', text: 'Espera, hay algo que no sabes: [[aunque la gira está casi cerrada|blue]], tres teatros solo la confirman si estrenamos en el Principal.', en: 'Wait, there’s something you don’t know: although the tour is almost settled, three theatres will only confirm it if we open at the main theatre.' },
            { who: 'Inés', text: '¿En serio? No lo sabía. Aun así, [[por necesaria que sea la gira|teal]], la obra sin ese monólogo es otra obra.', en: 'Seriously? I didn’t know that. Even so, however much we need the tour, without that monologue it’s a different play.' },
            { who: 'Julián', text: 'Lo sé, y [[aun sabiéndolo|teal]], tenía que contártelo. Además, [[por más que se lo expliqué|blue]], Paredes no quiso leer el texto completo.', en: 'I know, and even knowing that, I had to tell you. Besides, however hard I tried to explain, Paredes wouldn’t read the whole script.' },
            { who: 'Inés', text: 'Claro: [[aunque lo hubiera leído|violet]], habría pedido lo mismo. No le molesta la escena; le molesta lo que dice.', en: 'Of course: even if she’d read it, she’d have asked for the same thing. It’s not the scene that bothers her; it’s what it says.' },
            { who: 'Julián', text: '¿Y si nos ofrecieran otra sala municipal? [[Aunque fuera más pequeña|violet]], nos salvaría la gira.', en: 'And what if they offered us another council venue? Even if it were smaller, it would save the tour.' },
            { who: 'Inés', text: 'Mira, [[digan lo que digan en el municipio|teal]], el monólogo se queda. No lo corto, [[así me ofrezcan el Principal gratis todo el año|teal]].', en: 'Look, whatever the council says, the monologue stays. I’m not cutting it, not even if they offer me the main theatre free for a whole year.' },
            { who: 'Julián', text: 'Vale, vale. ¿Y si estrenamos en la antigua fábrica? [[Si bien el edificio no tiene butacas|blue]], tiene una acústica estupenda.', en: 'OK, OK. What if we open in the old mill? The building has no seats, but the acoustics are superb.' },
            { who: 'Inés', text: '¡Me encanta! Es el lugar donde pasó todo. Y [[incluso si llueve|violet]], podemos actuar en la nave central.', en: 'I love it! It’s where it all happened. And even if it rains, we can perform in the main hall.' },
            { who: 'Julián', text: '[[Quieras o no|teal]], habrá que avisar a la prensa. Y a Paredes.', en: 'Like it or not, we’ll have to tell the press. And Paredes.' },
            { who: 'Inés', text: 'Invítala a la primera fila. Que escuche el monólogo entero, [[le guste o no|teal]].', en: 'Invite her to the front row. Let her hear the whole monologue, whether she likes it or not.' },
          ], notes: {
            'aunque sea el único teatro grande de la ciudad': 'Subjuntivo polémico: los dos saben que es el único teatro grande. Inés no informa: concede el dato y le quita todo valor como argumento.',
            'aunque la gira está casi cerrada': 'Indicativo para informar: Julián anuncia algo que Inés no sabe («hay algo que no sabes»). Con «esté» daría el dato por conocido.',
            'por necesaria que sea la gira': 'Por + adjetivo + que + subjuntivo, sin «muy»: variante cuidada de «por muy necesaria que sea». El adjetivo concuerda con «la gira».',
            'aun sabiéndolo': 'Aun + gerundio con pronombre enclítico: «aunque lo sabía». «Aun» sin tilde porque significa «incluso».',
            'por más que se lo expliqué': 'Indicativo tras «por más que»: Julián cuenta un hecho real; se lo explicó de verdad, varias veces. Con «explicara» le quitaría peso en vez de contarlo.',
            'aunque lo hubiera leído': 'Pluscuamperfecto de subjuntivo + condicional compuesto: pasado contrario a la realidad. Paredes no leyó el texto, y leerlo no habría cambiado nada.',
            'Aunque fuera más pequeña': 'Imperfecto de subjuntivo + condicional: una hipótesis que todavía no existe (otra sala) y que Julián ve poco segura.',
            'digan lo que digan en el municipio': 'Concesiva reduplicada: el mismo verbo en subjuntivo dos veces. Ninguna opinión del municipio cambia la decisión.',
            'así me ofrezcan el Principal gratis todo el año': '«Así» + subjuntivo = aunque, por mucho que. Enfático: frecuente en la conversación en partes de América Latina y literario en otras zonas.',
            'Si bien el edificio no tiene butacas': '«Si bien» + indicativo: Julián concede un inconveniente real antes de dar su argumento. Algo más cuidado que «aunque».',
            'incluso si llueve': '«Incluso si» sigue las reglas de «si»: presente de indicativo para un caso abierto. Nunca «incluso si llueva».',
            'Quieras o no': 'Fórmula disyuntiva con subjuntivo: da igual lo que prefiera Inés. Muy frecuente en la conversación.',
            'le guste o no': 'La misma fórmula con «gustar»: el pronombre «le» se refiere a Paredes.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Qué dato nuevo le da Julián a Inés?', options: ['Que tres teatros solo confirman la gira si estrenan en el Principal.', 'Que el municipio ofrece otra sala más pequeña.', 'Que Paredes ha leído el texto y no le gusta.'], answer: 0, why: '«Hay algo que no sabes: aunque la gira está casi cerrada, tres teatros solo la confirman si estrenamos en el Principal».', en: 'What new information does Julián give Inés?' },
            { prompt: 'Según Inés, ¿qué le molesta de verdad a la directora de Cultura?', options: ['Que la compañía no le enviara el texto.', 'Lo que dice el monólogo.', 'La duración de la escena.'], answer: 1, why: '«No le molesta la escena; le molesta lo que dice».', en: 'According to Inés, what really bothers the Culture director?' },
            { prompt: '¿Qué deciden al final?', options: ['Estrenar en la antigua fábrica e invitar a Paredes.', 'Cortar el monólogo para salvar la gira.', 'Buscar otra sala municipal.'], answer: 0, why: 'Julián propone la antigua fábrica, a Inés le encanta y decide invitar a Paredes a la primera fila.', en: 'What do they decide in the end?' },
          ] },
        ] },
        { title: 'Inés escribe a Marta · Inés texts Marta', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'chat-fill', title: 'Chat con la actriz · Chat with the lead actress', lines: [
            { who: 'Inés', text: 'Marta, estrenamos en la antigua fábrica. El Principal, ni hablar: ___ lo que ___, el monólogo no se toca.', options: ['digan… dirán', 'digan… digan', 'dicen… digan'], answer: 1, why: 'Reduplicación: el mismo verbo en presente de subjuntivo, dos veces.' },
            { who: 'Marta', text: '¡Bien! Aunque la fábrica ___ fría, para Carmen es el sitio perfecto.', options: ['sea', 'fue', 'sería'], answer: 0, why: 'Las dos saben que la fábrica es fría: Marta concede el dato y le quita peso con subjuntivo. «Fue» lo situaría en el pasado y «sería» no va tras «aunque» aquí.' },
            { who: 'Inés', text: 'Eso pienso yo. Y aunque nos ___ el Principal mañana, ya no volveríamos atrás.', options: ['ofrecieran', 'ofrecen', 'ofrecerán'], answer: 0, why: 'Hipótesis poco probable con condicional en la principal («volveríamos»): imperfecto de subjuntivo.' },
            { who: 'Marta', text: 'Por más que lo ___ el año pasado, nunca me salió tan bien como ahora.', options: ['ensayaré', 'ensayé', 'ensaye'], answer: 1, why: 'Un hecho real del pasado que Marta cuenta: por más que + indicativo (ensayé).' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: «¿Qué dato te dan a menudo como excusa y no te convence?». Tu alumno responde con «Ya, aunque sea…, …» y una razón.' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Primero el gesto, después el tiempo. First the move, then the tense.',
      steps: [
        { title: 'En los ensayos · In rehearsal', blocks: [
          { kind: 'choice', items: [
            { context: 'Marta le explica a un periodista algo que él no sabe.', prompt: 'Aunque la obra ___ sobre una fábrica, en realidad habla de una familia.', options: ['tratara', 'trata', 'trate'], answer: 1, why: 'Es información nueva para el periodista: indicativo. «Trate» daría el tema por sabido y lo descartaría; «tratara» lo convertiría en hipótesis.', en: 'Although the play is about a mill, it is really about a family.' },
            { context: 'Julián: «La escena es muy dura». Inés retoma el dato para quitarle toda importancia.', prompt: '—Ya, aunque ___ dura, es la mejor de la obra.', options: ['fuera', 'sea', 'sería'], answer: 1, why: 'Subjuntivo polémico en presente: concede lo que acaba de decir Julián y lo descarta. «Fuera» y «sería» no encajan con «es la mejor».', en: 'Sure, it may be harsh, but it is the best scene in the play.' },
            { context: 'Inés ve muy improbable que alguien compre los derechos.', prompt: 'Aunque nos ___ el triple, no venderíamos los derechos de la obra.', options: ['ofrezcan', 'ofrecerían', 'ofrecieran'], answer: 2, why: 'Hipótesis poco probable + «venderíamos»: imperfecto de subjuntivo. El condicional no va en la concesiva de hipótesis.', en: 'Even if they offered us three times as much, we would not sell the rights to the play.' },
            { context: 'La directora de Cultura nunca leyó el texto.', prompt: 'Aunque ___ el texto, habría pedido el corte igualmente.', options: ['había leído', 'hubiera leído', 'haya leído'], answer: 1, why: 'Pasado contrario a la realidad + condicional compuesto: pluscuamperfecto de subjuntivo.', en: 'Even if she had read the script, she would have asked for the cut anyway.' },
            { context: 'Es posible: la decisión sobre la ayuda sale la semana que viene.', prompt: 'Incluso si nos ___ la ayuda, estrenaremos en mayo.', options: ['quitarán', 'quitan', 'quiten'], answer: 1, why: 'Caso abierto con «incluso si»: presente de indicativo, como con «si». Ni presente de subjuntivo ni futuro.', en: 'Even if they take away our funding, we will open in May.' },
            { prompt: 'Por ___ que parezca, el monólogo dura solo cuatro minutos.', options: ['largo', 'tan largo', 'mucho largo'], answer: 0, why: 'Por + adjetivo + que, sin «muy»: «por largo que parezca». «Mucho» no va con adjetivos y «tan» no forma esta estructura.', en: 'Long as it may seem, the monologue lasts only four minutes.' },
          ] },
        ] },
        { title: '¿Qué hace la concesiva? · What does the concession do?', blocks: [
          { kind: 'classify', title: 'Clasifica cada frase · Sort each sentence', categories: [
            { id: 'informa', label: 'Informa de un hecho', tone: 'blue' },
            { id: 'quita', label: 'Quita peso a un dato conocido', tone: 'orange' },
            { id: 'supone', label: 'Supone: improbable o irreal', tone: 'violet' },
            { id: 'igual', label: 'Da igual: nada cambia el resultado', tone: 'teal' },
          ], items: [
            { text: '—Es tardísimo. —Ya, aunque sea tarde, repetimos el final.', answer: 'quita', why: 'Retoma «es tardísimo» y lo descarta: subjuntivo polémico.' },
            { text: 'Aunque el estreno es el día 14, la prensa verá un ensayo el 12.', answer: 'informa', why: 'Comunica dos datos nuevos: indicativo.' },
            { text: 'Aunque me lo pidiera la propia directora, no lo cortaría.', answer: 'supone', why: 'Hipótesis poco probable: imperfecto de subjuntivo + condicional.' },
            { text: 'Aunque hubiéramos tenido más tiempo, no habríamos cambiado el final.', answer: 'supone', why: 'Pasado contrario a la realidad: pluscuamperfecto de subjuntivo.' },
            { text: 'Pase lo que pase con la ayuda, estrenamos.', answer: 'igual', why: 'Reduplicación: ninguna opción cambia el resultado.' },
            { text: 'Aunque llevamos un año ensayando, todavía descubrimos cosas.', answer: 'informa', why: 'El hablante afirma un hecho real: indicativo.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', title: '¿Está bien o mal? · Right or wrong?', items: [
            { sentence: 'Incluso si la directora venga al estreno, no cambiaremos nada.', ok: false, options: ['Incluso si la directora viene al estreno, no cambiaremos nada.', 'Incluso si la directora vendrá al estreno, no cambiaremos nada.', 'Incluso si la directora venía al estreno, no cambiaremos nada.'], answer: 0, why: '«Incluso si» + presente de indicativo para un caso abierto. Nunca presente de subjuntivo.' },
            { sentence: 'Digan lo que digan los críticos, la obra se queda como está.', ok: true, why: 'Reduplicación correcta: el mismo verbo en presente de subjuntivo dos veces.' },
            { sentence: 'Aunque lo hubiéramos sabido antes, habríamos estrenado igual en la fábrica.', ok: true, why: 'Pluscuamperfecto de subjuntivo + condicional compuesto: pasado contrario a la realidad.' },
            { sentence: 'Por más que lo intentemos el mes pasado, no conseguimos otra sala.', ok: false, options: ['Por más que lo intentamos el mes pasado, no conseguimos otra sala.', 'Por más que lo intentaríamos el mes pasado, no conseguimos otra sala.', 'Por más que lo intentaremos el mes pasado, no conseguimos otra sala.'], answer: 0, why: 'Un hecho real del pasado: por más que + indicativo pasado. El presente de subjuntivo no encaja con «el mes pasado».' },
            { sentence: 'No vendimos ni una entrada más, y eso que la obra saliera en el periódico.', ok: false, options: ['No vendimos ni una entrada más, y eso que la obra saldría en el periódico.', 'No vendimos ni una entrada más, y eso que la obra salió en el periódico.', 'No vendimos ni una entrada más, y eso que la obra salga en el periódico.'], answer: 1, why: '«Y eso que» presenta un hecho real: indicativo.' },
            { sentence: 'No subo al escenario sin ensayar, así me lo pidan de rodillas.', ok: true, why: '«Así» + subjuntivo = aunque. Enfático: frecuente en partes de América Latina y en la lengua literaria. Es correcto.' },
          ] },
        ] },
        { title: 'Correos con el municipio · Emails with the council', blocks: [
          { kind: 'chat-fill', title: 'Paredes y Julián, de usted · Formal exchange', lines: [
            { who: 'Sonia Paredes', text: 'Señor Ortega, ___ la obra sea de su compañía, el teatro es municipal y tiene sus normas.', options: ['aunque', 'y eso que', 'incluso si'], answer: 0, why: 'Paredes concede un dato conocido (la obra es de ellos) y le quita peso: aunque + subjuntivo. «Incluso si» no admite presente de subjuntivo y «y eso que» va detrás, con indicativo.' },
            { who: 'Julián', text: 'Lo entendemos. Si bien el teatro ___ municipal, el contrato no dice nada sobre el contenido.', options: ['fuera', 'sea', 'es'], answer: 2, why: '«Si bien» solo admite indicativo.' },
            { who: 'Sonia Paredes', text: 'Le insisto: aunque ustedes nos ___ el texto hace meses, la decisión habría sido la misma.', options: ['enviarían', 'hubieran enviado', 'envíen'], answer: 1, why: 'No lo enviaron: pasado contrario a la realidad + «habría sido»: pluscuamperfecto de subjuntivo.' },
            { who: 'Julián', text: 'Entonces estrenaremos en la antigua fábrica, ___.', options: ['pasa lo que pasa', 'pase lo que pase', 'pase lo que pasa'], answer: 1, why: 'Fórmula fija: el mismo verbo en subjuntivo dos veces.' },
            { who: 'Sonia Paredes', text: 'Como quieran. Por ___ que me parezca la decisión, la respeto.', options: ['mucho equivocada', 'muy equivocado', 'equivocada'], answer: 2, why: 'Por + adjetivo + que; el adjetivo concuerda con «la decisión»: equivocada.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['Digan', 'lo', 'que', 'digan,', 'el', 'monólogo', 'se', 'queda'], accept: ['Digan lo que digan, el monólogo se queda'], en: 'Whatever they say, the monologue stays.' },
            { tiles: ['Aun', 'sabiéndolo,', 'la', 'directora', 'se', 'calló'], accept: ['Aun sabiéndolo, la directora se calló'], en: 'Even though she knew, the director kept quiet.' },
            { tiles: ['Aunque', 'nos', 'lo', 'hubieran', 'pedido,', 'no', 'habríamos', 'cortado', 'nada'], accept: ['Aunque nos lo hubieran pedido, no habríamos cortado nada'], en: 'Even if they had asked us, we would not have cut anything.' },
          ] },
        ] },
        { title: 'Reformula · Rephrase', blocks: [
          { kind: 'rewrite', title: 'Cambia la estructura · Change the structure', items: [
            { prompt: 'Me da igual lo que digan los críticos: no cambio el final.', instruction: 'Empieza con «Digan lo que digan…».', accept: ['Digan lo que digan los críticos, no cambio el final', 'Digan lo que digan, no cambio el final', 'Digan lo que digan los críticos, no voy a cambiar el final', 'Digan lo que digan los críticos, no cambiaré el final'] },
            { prompt: 'No teníamos dinero para el Principal. Si lo hubiéramos tenido, tampoco habríamos estrenado allí.', instruction: 'Una sola frase con «Aunque» + pluscuamperfecto de subjuntivo.', accept: ['Aunque hubiéramos tenido dinero para el Principal, no habríamos estrenado allí', 'Aunque hubiéramos tenido dinero para el Principal, tampoco habríamos estrenado allí', 'Aunque hubiéramos tenido dinero, no habríamos estrenado en el Principal', 'Aunque hubiésemos tenido dinero para el Principal, no habríamos estrenado allí', 'Aunque hubiéramos tenido dinero para el Principal, no hubiéramos estrenado allí', 'Aunque hubiéramos tenido dinero para el Principal, no habríamos estrenado ahí'] },
            { prompt: 'La escena es incómoda, pero es necesaria.', instruction: 'Empieza con «Por incómoda…».', accept: ['Por incómoda que sea la escena, es necesaria', 'Por incómoda que resulte la escena, es necesaria', 'Por incómoda que sea, la escena es necesaria', 'Por incómoda que resulte, la escena es necesaria', 'Por incómoda que parezca la escena, es necesaria'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno cuenta algo que no haría aunque se lo pidieran y una decisión pasada que repetiría aunque hubiera sabido lo que pasó después.' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'La crítica en la radio', coach: 'Primero la idea, después los detalles. Gist first, then details.',
      steps: [
        { title: '«Telón abierto» · The theatre slot', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la opinión general de la crítica. Segunda escucha: tu alumno anota cada concesiva y dice si informa, quita peso, supone o dice «da igual». Después, las preguntas.', self: 'Escucha una vez para la opinión general y otra para los detalles. Anota cada concesiva: ¿informa, quita peso, supone o «da igual»? Vas a oír «celular» (mobile phone, the usual word in much of Latin America). (Listen once for the gist and once for the details.)' } },
          { kind: 'listen', title: 'La crónica de Rebeca Lozano', channel: 'RADIO · «TELÓN ABIERTO» · REBECA LOZANO', src: '/audio/grammar-live/470.mp3',
            before: 'Una semana después, la crítica de teatro Rebeca Lozano habla del estreno en la antigua fábrica en su sección de radio. ¿Crees que le gustó? ¿Qué puede criticar de la obra o del lugar? (A week later, a theatre critic reviews the opening on the radio. Did she like it? What might she criticise?)',
            gist: { prompt: '¿Cuál es la opinión general de Rebeca Lozano? · What is her overall view?', options: ['Que el monólogo debería haberse cortado.', 'Que el estreno fue un error y la compañía debería volver al Principal.', 'Que la obra no es perfecta, pero es el estreno más importante de la temporada.'], answer: 2, why: 'Critica la primera media hora, pero dice: «digan lo que digan desde el municipio, este es el estreno de la temporada».', en: 'She has reservations about the play, yet calls it the opening of the season.' },
            details: [
              { prompt: '¿Quiénes estaban entre el público?', options: ['Muchas antiguas trabajadoras de la fábrica.', 'Solo críticos y periodistas.', 'Sobre todo concejales del municipio.'], answer: 0, why: '«Vinieron más de trescientas personas, muchas de ellas antiguas trabajadoras de la fábrica».', en: 'Who was in the audience?' },
              { prompt: '¿Qué le sorprendió durante el monólogo?', options: ['El silencio absoluto del público.', 'Que se fuera la luz.', 'Los aplausos en mitad de la escena.'], answer: 0, why: '«No imaginaba el silencio que se hizo durante esos cuatro minutos… nadie tosió, nadie miró el celular».', en: 'What surprised her during the monologue?' },
              { prompt: '¿Qué defecto le encuentra a la obra?', options: ['El monólogo es demasiado largo.', 'La acústica de la fábrica es mala.', 'La primera media hora es lenta.'], answer: 2, why: '«Por intensa que sea la última escena, la primera media hora es lenta».', en: 'What weakness does she find in the play?' },
              { prompt: '¿Qué consejo da a los oyentes?', options: ['Esperar a la gira.', 'Llevar abrigo, porque hay funciones llueva o no.', 'Comprar las entradas en el Teatro Principal.'], answer: 1, why: '«Hay funciones hasta el día treinta, llueva o no. Lleven abrigo».', en: 'What advice does she give listeners?' },
            ],
            transcript: 'Buenas noches y bienvenidos a «Telón abierto». Hoy les debo una crónica distinta. El sábado, la compañía de Inés Valdés estrenó «La fábrica» en la antigua fábrica textil, y no en el Teatro Principal. Ya conocen la historia: el municipio pedía cortar el monólogo final. Pues bien, [[aunque sea el municipio quien cede los teatros|orange]], un texto no se negocia línea por línea, y la compañía lo dejó claro. [[Aunque el edificio no tiene calefacción|blue]], vinieron más de trescientas personas, muchas de ellas antiguas trabajadoras de la fábrica. Yo llegué con dudas, lo confieso. [[Por más que me habían hablado del monólogo|blue]], no imaginaba el silencio que se hizo durante esos cuatro minutos. [[Aunque me lo hubieran contado|violet]], no lo habría creído: nadie tosió, nadie miró el celular. ¿Es una obra perfecta? No. [[Por intensa que sea la última escena|teal]], la primera media hora es lenta y se nota. Pero [[digan lo que digan desde el municipio|teal]], este es el estreno de la temporada. Y una cosa más: [[aunque mañana les ofrecieran el Principal|violet]], yo no cambiaría esa fábrica por ningún teatro. Hay funciones hasta el día treinta, [[llueva o no|teal]]. Lleven abrigo. Nos escuchamos la semana que viene.',
            reply: { teacher: 'Tú eres Rebeca Lozano. Tu alumno es Inés y llama a la radio: concede la crítica a la primera media hora con «aunque» + subjuntivo, informa de algo nuevo con indicativo y cierra con una concesiva que diga «da igual».', self: 'Llama a la radio como Inés, en voz alta: concede la crítica con «aunque» + subjuntivo, informa de algo nuevo con indicativo y cierra con «pase lo que pase» o «digan lo que digan». (Call the show as Inés and answer the critic.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Discutir sin ceder', coach: 'Concede el dato y desactívalo. Grant the point and defuse it.',
      steps: [
        { title: 'Réplicas, hipótesis y decisiones · Comebacks, hypotheses and decisions', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas y defiendes la postura contraria con datos que tu alumno conoce. Tu alumno concede cada dato con la forma que corresponde y mantiene su postura. Si elige un tiempo que no encaja, tú repites la frase corregida y sigues.', self: 'Lee cada pregunta y responde en voz alta con ejemplos reales. En cada respuesta, usa al menos dos concesivas con funciones distintas. (Answer aloud, using at least two concessions with different functions.)' } },
          { kind: 'talk', cards: [
            { q: 'Alguien justifica algo injusto con un dato que todos conocen («es que es el jefe», «es que es mi hermano»). Respóndele. · Someone excuses something unfair with a fact everyone knows: answer them.', followUps: ['¿Y si te dice que siempre ha sido así?', '¿Qué le propondrías?'], phrases: ['Ya, [[aunque sea|orange]] …, no tiene derecho a…', 'Sí, [[aunque tenga|orange]] …, eso no justifica…', '[[Por importante que sea|teal]] …, …'], hint: 'El dato ya está sobre la mesa: aunque + subjuntivo para concederlo y quitarle peso.', example: '—Es que es el jefe. —Ya, aunque sea el jefe, no puede hablarte así delante de todos. Por importante que sea su cargo, el respeto es para todos. Yo se lo diría con calma, a solas.', next: 'Ahora, información nueva.' },
            { q: 'Cuéntale a alguien que no te conoce un dato sorprendente de tu trabajo, tu ciudad o tu familia. · Tell a stranger something surprising about your work, town or family.', followUps: ['¿Por qué crees que pasa eso?', '¿A ti te parece bien?'], phrases: ['[[Aunque es|blue]] …, …', '[[Si bien|blue]] …, …', '…, [[y eso que|blue]] …'], hint: 'Es información nueva para el otro: indicativo.', example: 'Aunque mi ciudad es pequeña, tiene tres teatros y un festival de cine. Si bien casi nadie la conoce fuera del país, en verano se llena de turistas, y eso que no tiene playa.' },
            { q: '¿Qué no harías aunque te lo pidieran o te pagaran muchísimo? · What would you never do, even if asked or paid a fortune?', followUps: ['¿Y si te lo pidiera alguien a quien quieres?', '¿Ha cambiado tu respuesta con los años?'], phrases: ['[[Aunque me pagaran|violet]] …, no…', '[[Incluso si me lo pidiera|violet]] …, …', 'No lo haría, [[así me ofrecieran|teal]] …'], hint: 'Hipótesis poco probable: imperfecto de subjuntivo + condicional.', example: 'Aunque me pagaran el doble, no trabajaría en una empresa que contamina el río de mi pueblo. Incluso si me lo pidiera mi mejor amigo, le diría que no.' },
            { q: 'Piensa en una decisión del pasado que volverías a tomar aunque hubieras sabido lo que pasó después. · A past decision you would make again, knowing what came next.', followUps: ['¿Qué te costó esa decisión?', '¿Hay algo que sí cambiarías?'], phrases: ['[[Aunque hubiera sabido|violet]] …, habría…', '[[Por más que me insistieron|blue]], …', '[[Aun sabiéndolo|teal]], …'], hint: 'Pasado que no fue así: pluscuamperfecto de subjuntivo + condicional compuesto. Lo que pasó de verdad: indicativo.', example: 'Hace cinco años dejé un trabajo estable para estudiar música. Aunque hubiera sabido lo difícil que iba a ser, habría hecho lo mismo. Por más que me insistieron mis padres, no cambié de idea.' },
            { q: 'Tu equipo duda de un proyecto en el que crees. Defiéndelo hasta el final. · Your team doubts a project you believe in: defend it.', followUps: ['¿Y si se retrasa seis meses?', '¿Qué harías si se acaba el dinero?'], phrases: ['[[Pase lo que pase|teal]], …', '[[Quieran o no|teal]], …', '[[Por difícil que sea|teal]], …', 'Lo terminamos [[como sea|teal]].'], hint: 'Reduplicación y «por + adjetivo + que»: ninguna opción cambia el resultado.', example: 'Pase lo que pase con el presupuesto, el proyecto sigue. Por difícil que sea, el barrio necesita esta biblioteca. Quieran o no algunos, ya hay doscientas familias inscritas. Lo terminamos como sea.', next: 'Por último, un papel.' },
            { q: 'Eres Inés. Sonia Paredes te llama con una última oferta: el Principal, si suavizas dos frases del monólogo. Responde de usted. · You are Inés: answer the Culture director’s last offer.', followUps: ['¿Y si la ayuda del año que viene depende de esto?', '¿Qué le ofrecerías a cambio?'], phrases: ['[[Aunque sea|orange]] …, …', '[[Si bien|blue]] entiendo que…, …', '[[Aunque nos ofrecieran|violet]] …, …'], hint: 'Registro formal: nada de «quieras o no». Concede su argumento y mantén tu postura.', example: 'Señora Paredes, aunque sean solo dos frases, son las que explican la obra. Si bien entiendo que el municipio tenga sus normas, no podemos cambiar el texto. Aunque nos ofrecieran el teatro todo el año, la respuesta sería la misma. Eso sí, estaremos encantados de verla en la fábrica.', teacher: 'Tú eres Sonia Paredes e insistes con datos nuevos («la ayuda del año que viene», «la prensa local»). Tu alumno concede cada uno con una forma distinta.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno pregunta y tú respondes con algún error a propósito («incluso si me lo pidan», «digan lo que dicen»). Tu alumno lo detecta y lo corrige.', self: 'Ahora haz tú las preguntas en voz alta y respóndelas defendiendo la postura contraria. (Now ask the questions aloud and argue the opposite side.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Una carta abierta', coach: 'Concede, informa, supón y mantén. Grant, inform, suppose, stand firm.',
      steps: [
        { title: 'Por qué estrenamos en la fábrica · Why we opened in the mill', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos cada concesiva: ¿qué hace el autor con el dato y por qué ese tiempo? Después tu alumno lee la carta en voz alta.', self: 'Escribe tu carta y toca «Revisar mi texto». La revisión solo busca formas, no juzga el sentido: repasa tú cada concesiva. ¿Informa, quita peso, supone o dice «da igual»? (The review only looks for forms; check the meaning yourself.)' } },
          { kind: 'write', title: 'Carta abierta · Open letter', situation: 'Eres Inés (o eres tú, ante una decisión que tomaste contra la opinión de otros: dejar un trabajo, rechazar una condición, defender un proyecto). Escribe una carta abierta para el público o la prensa: explica la decisión, concede los argumentos contrarios y mantén tu postura. (You are Inés, or yourself: write an open letter explaining a controversial decision, granting the other side’s arguments and standing firm.)', task: [
            'Concede un dato que todos conocen y quítale peso con «aunque» + presente de subjuntivo (aunque sea…).',
            'Informa de un hecho con «aunque» + indicativo o con «si bien».',
            'Imagina un caso poco probable (aunque nos ofrecieran…) y un pasado distinto (aunque hubiéramos sabido…).',
            'Cierra con una concesiva que diga «da igual»: pase lo que pase, digan lo que digan o por + adjetivo + que.',
          ], starters: ['Querido público:', 'Muchos nos han preguntado…', 'Aunque sea…,', 'Si bien…,', 'Aunque nos ofrecieran…,', 'Aunque hubiéramos sabido…,', 'Por modesta que sea…,', 'Pase lo que pase…,'],
            words: ['aunque sea', 'si bien', 'aunque nos ofrecieran', 'aunque hubiéramos sabido', 'digan lo que digan', 'pase lo que pase', 'por… que sea', 'aun sabiendo', 'decisión', 'condición'],
            model: 'Querido público: Muchos nos han preguntado por qué estrenamos «La fábrica» en la antigua fábrica textil y no en el Teatro Principal. La respuesta es sencilla. [[Aunque sea el municipio quien gestiona los grandes teatros|orange]], el contenido de una obra lo deciden quienes la escriben y la interpretan. Se nos pidió cortar el monólogo final, y dijimos que no. [[Si bien el Principal es la mejor sala de la ciudad|blue]], la fábrica tiene algo que ningún teatro puede ofrecer: es el lugar donde ocurrió esta historia. [[Aunque nos ofrecieran mañana el Principal sin condiciones|violet]], seguiríamos aquí hasta el final de la temporada. Y, mirando atrás, [[aunque hubiéramos sabido lo difícil que sería|violet]] actuar en un edificio sin calefacción, habríamos tomado la misma decisión. Gracias a quienes vinieron con abrigo, a las antiguas trabajadoras que nos prestaron sus recuerdos y a quienes nos criticaron con respeto. [[Por modesta que sea esta sala|teal]], ahora es nuestra casa. [[Pase lo que pase|teal]] con la gira, el monólogo se queda. Hasta la próxima función, Inés Valdés.',
            minWords: 150,
            checks: [
              { label: 'Aunque + presente de subjuntivo (aunque sea, aunque tenga, aunque parezca…)', pattern: '(?<!\\p{L})aunque\\s+(?:\\p{L}+\\s+){0,3}?(?:sea|sean|tenga|tengan|haya|hayan|pueda|puedan|parezca|parezcan|diga|digan|cueste|cuesten|esté|estén|resulte|resulten)(?!\\p{L})', tip: 'Concede un dato conocido y quítale peso: «Aunque sea el municipio quien…».' },
              { label: 'Una forma en -ra o -se tras «aunque» o «incluso si» (hipótesis)', pattern: '(?<!\\p{L})(?:aunque|incluso\\s+si|aun\\s+si)\\s+(?:\\p{L}+\\s+){0,3}?(?:\\p{L}+(?:ara|aran|áramos|iera|ieran|iéramos|ase|asen|ásemos|iese|iesen|iésemos)|fuera|fueran|fuéramos|fuese|fuesen|dijera|dijeran|trajera|trajeran)(?!\\p{L})', tip: 'Imagina un caso poco probable: «Aunque nos ofrecieran…, seguiríamos…».' },
              { label: 'Pluscuamperfecto de subjuntivo (hubiera / hubiese + participio)', pattern: '(?<!\\p{L})(?:hubiera|hubieras|hubiéramos|hubieran|hubiese|hubieses|hubiésemos|hubiesen)\\s+\\p{L}+(?:ado|ido|to|cho)(?!\\p{L})', tip: 'Rehace el pasado: «Aunque hubiéramos sabido…, habríamos…».' },
              { label: 'Una concesiva de «da igual» (pase lo que pase, digan lo que digan, por… que)', pattern: '(?<!\\p{L})(?:pase\\s+lo\\s+que\\s+pase|digan?\\s+lo\\s+que\\s+digan?|sea\\s+como\\s+sea|quieran?\\s+o\\s+no|guste\\s+o\\s+no|hagan?\\s+lo\\s+que\\s+hagan?|por\\s+(?:muy\\s+|más\\s+)?\\p{L}{4,}\\s+que)(?!\\p{L})', tip: 'Cierra con «Pase lo que pase…», «Digan lo que digan…» o «Por modesta que sea…».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})(?:incluso|aun)\\s+si\\s+(?:\\p{L}+\\s+){0,2}?(?:sea|sean|haya|hayan|tenga|tengan|pida|pidan|quiera|quieran|pueda|puedan|esté|estén)(?!\\p{L})', why: '**Incluso si** sigue las reglas de «si»: presente de indicativo («incluso si llueve») o imperfecto de subjuntivo («incluso si lloviera»), nunca presente de subjuntivo.' },
              { pattern: '(?<!\\p{L})si\\s+bien\\s+(?:\\p{L}+\\s+){0,3}?(?:sea|sean|haya|hayan|tenga|tengan|esté|estén|pueda|puedan)(?!\\p{L})', why: '**Si bien** va con indicativo: «si bien el teatro **es** municipal».' },
              { pattern: '(?<!\\p{L})y\\s+eso\\s+que\\s+(?:\\p{L}+\\s+){0,3}?(?:\\p{L}+(?:ara|aran|áramos|iera|ieran|iéramos)|sea|sean|haya|hayan)(?!\\p{L})', why: '**Y eso que** presenta un hecho real: indicativo («y eso que los invitamos»).' },
              { pattern: '(?<!\\p{L})aún\\s+\\p{L}+(?:ando|iendo|yendo)(?!\\p{L})', why: 'Con el sentido de «incluso», escribe **aun** sin tilde: «aun sabiendo».' },
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
            { tone: 'blue', label: 'INFORMAR', formula: 'aunque / si bien / por más que + indicativo', example: 'Aunque la gira está casi cerrada, falta el Principal.', caption: 'el dato es nuevo o lo afirmas', en: 'the indicative presents the concession as information; “y eso que” works the same way, after the main clause' },
            { tone: 'orange', label: 'QUITAR PESO', formula: 'aunque + subjuntivo con un dato conocido', example: '—Es el municipio quien paga. —Ya, aunque sea el municipio…', caption: '«sí, ¿y qué?»: concedes y descartas', en: 'the polemical subjunctive: you grant a fact both speakers know and deny it any weight in the argument' },
            { tone: 'violet', label: 'SUPONER', formula: 'aunque + imperfecto → condicional · aunque + pluscuamperfecto → condicional compuesto', example: 'Aunque lo hubiera leído, habría pedido lo mismo.', caption: 'improbable o contrario a la realidad; incluso si sigue a «si»', en: 'the further from reality, the further down the tense ladder; “incluso si” never takes the present subjunctive' },
            { tone: 'teal', label: 'DA IGUAL', formula: 'digan lo que digan · quieras o no · por + adjetivo + que · aun + gerundio · así + subj.', example: 'Digan lo que digan, el monólogo se queda.', caption: 'ninguna opción cambia el resultado', en: 'closing formulas: no option, amount or degree changes the outcome; concessive “así” is emphatic and partly regional' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Antes de elegir el modo, pregúntate **qué haces con el dato**. ¿Lo comunicas? Indicativo. ¿Lo retomas para descartarlo? Presente de subjuntivo. ¿Lo imaginas improbable o irreal? Imperfecto de subjuntivo. ¿Rehaces el pasado? Pluscuamperfecto. Y recuerda: «aunque es» y «aunque sea» pueden ser correctas con el mismo hecho; lo que cambia es el gesto.', en: 'Before choosing the mood, ask yourself what you are doing with the fact. Reporting it: indicative. Picking it up to dismiss it: present subjunctive. Imagining it as unlikely or unreal: imperfect subjunctive. Rewriting the past: pluperfect. “Aunque es” and “aunque sea” can both be right about the same fact; what changes is the move you make.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { context: '—Es que es mi hermano. —Ya…', prompt: 'Aunque ___ tu hermano, no puede usar tu coche sin preguntar.', options: ['fuera', 'sea', 'sería'], answer: 1, why: 'Retoma el dato que acaban de darle y lo descarta: presente de subjuntivo polémico, con «puede» en la principal.', en: 'He may be your brother, but he can’t use your car without asking.' },
            { prompt: 'Aunque me ___ el doble, no trabajaría los domingos.', options: ['pagaran', 'paguen', 'pagarían'], answer: 0, why: 'Hipótesis con condicional en la principal: imperfecto de subjuntivo.', en: 'Even if they paid me double, I would not work on Sundays.' },
            { context: 'No se sabe qué tiempo hará.', prompt: 'Incluso si ___ mañana, el partido se juega.', options: ['lloverá', 'llueve', 'llueva'], answer: 1, why: '«Incluso si» + presente de indicativo para un caso abierto.', en: 'Even if it rains tomorrow, the match will go ahead.' },
            { prompt: 'Digan lo que ___, no pienso mudarme.', options: ['dirán', 'digan', 'dicen'], answer: 1, why: 'Reduplicación: el mismo verbo en presente de subjuntivo.', en: 'Whatever they say, I am not moving.' },
            { context: 'No lo sabía.', prompt: 'Aunque ___ antes, no habría podido ayudarte.', options: ['lo sabría', 'lo hubiera sabido', 'lo haya sabido'], answer: 1, why: 'Pasado contrario a la realidad + condicional compuesto: pluscuamperfecto de subjuntivo.', en: 'Even if I had known earlier, I could not have helped you.' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Ahora, un equipo de barrio. Now, a local team.', blocks: [
          { kind: 'lead', text: 'Rocío entrena a un equipo de fútbol de barrio. Después de una temporada difícil, habla con sus jugadores. Reformula sus frases con las estructuras de hoy.', en: 'Rocío coaches a local football team. After a tough season she talks to her players. Rephrase what she says with today’s structures.' },
          { kind: 'rewrite', title: 'El equipo de Rocío · Rocío’s team', items: [
            { prompt: 'Ya sé que eres el capitán, pero no decides la alineación.', instruction: 'Una frase con «Aunque» que conceda el dato y le quite peso.', accept: ['Aunque seas el capitán, no decides la alineación', 'Aunque seas el capitán, tú no decides la alineación'] },
            { prompt: 'Me da igual lo que pase el domingo: seguimos entrenando los martes.', instruction: 'Empieza con «Pase lo que pase…».', accept: ['Pase lo que pase el domingo, seguimos entrenando los martes', 'Pase lo que pase el domingo, seguiremos entrenando los martes'] },
            { prompt: 'No fichamos al delantero. Si lo hubiéramos fichado, tampoco habríamos ganado la liga.', instruction: 'Una sola frase con «Aunque».', accept: ['Aunque hubiéramos fichado al delantero, no habríamos ganado la liga', 'Aunque hubiéramos fichado al delantero, tampoco habríamos ganado la liga', 'Aunque hubiésemos fichado al delantero, no habríamos ganado la liga', 'Aunque hubiéramos fichado al delantero, no hubiéramos ganado la liga'] },
          ] },
        ] },
        { title: 'Ampliación · Concesivas en estilo indirecto · Extension', mascot: '/brand/mascot/portrait.webp', coach: 'Opcional. Optional.', blocks: [
          { kind: 'lead', text: 'Para estudiantes fuertes o si queda tiempo. Cuando cuentas en pasado lo que alguien dijo, la concesiva sigue la **correlación de tiempos**: «Aunque llueva, estrenaremos» → Inés dijo que, **aunque lloviera**, **estrenarían**. Aquí el imperfecto de subjuntivo no presenta algo improbable: es el presente de subjuntivo trasladado al pasado. Lo mismo pasa con el subjuntivo polémico: «Aunque sea la directora, no tiene derecho» → Dijo que, **aunque fuera** la directora, **no tenía** derecho. Y la reduplicación: «Digan lo que digan…» → Aseguró que, **dijeran lo que dijeran**, el monólogo se quedaba.', en: 'For strong students or spare time. When you report in the past what someone said, the concession follows the sequence of tenses: the present subjunctive becomes imperfect subjunctive. Here “aunque lloviera” is not an unlikely case, just the reported version of “aunque llueva”. The same shift applies to the polemical subjunctive and to reduplicated concessives.' },
          { kind: 'choice', title: 'Del directo al indirecto · From direct to reported speech', items: [
            { context: 'Julián: «Aunque nos quiten la ayuda, haremos la gira».', prompt: 'Julián aseguró que, aunque les ___ la ayuda, harían la gira.', options: ['hubieran quitado', 'quitaran', 'quiten'], answer: 1, why: 'Correlación de tiempos: presente de subjuntivo en directo → imperfecto de subjuntivo en el relato en pasado, con «harían».', en: 'Julián said that even if they lost the funding, they would do the tour.' },
            { context: 'Inés: «Aunque sea la directora, no puede censurar un texto».', prompt: 'Inés dijo que, aunque Paredes ___ la directora, no podía censurar un texto.', options: ['fuera', 'sería', 'era'], answer: 0, why: 'Para transmitir lo que dijo Inés («sea»), el subjuntivo polémico se mantiene y pasa al imperfecto: aunque fuera la directora. «Era» sería correcto en otra frase, pero cambiaría su gesto: informaría del cargo en vez de quitarle peso.', en: 'Inés said that, director or not, Paredes could not censor a script.' },
            { context: 'Marta: «Digan lo que digan, yo hago el monólogo».', prompt: 'Marta repitió que, ___ lo que ___, ella hacía el monólogo.', options: ['dijeran… dijeran', 'digan… dijeran', 'dijeron… dijeran'], answer: 0, why: 'La reduplicación pasa entera al imperfecto de subjuntivo: dijeran lo que dijeran.', en: 'Marta repeated that, whatever they said, she would do the monologue.' },
          ] },
          { kind: 'teacher', text: 'Paso opcional: solo si queda tiempo o para estudiantes fuertes. Tu alumno cuenta en pasado una discusión real en la que alguien dijo «aunque sea…» o «pase lo que pase», con la correlación de tiempos.' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 171 · Hipótesis remotas y contrafactualidad retórica', text: 'Ya usas el imperfecto y el pluscuamperfecto de subjuntivo para decir que nada cambiaría el resultado: «aunque me lo hubieran contado, no lo habría creído». En la clase 171 llevas esa misma escalera a las hipótesis: «**si por casualidad** te llamaran», «**de haberlo sabido**», «**¡quién lo hubiera dicho!**». Es el paso natural: de la concesión que imagina otro mundo a la hipótesis que lo usa para convencer.', en: 'You can now use the imperfect and pluperfect subjunctive to say that nothing would change the outcome. In class 171 you take the same tense ladder into hypotheses: remote conditions, counterfactual pasts and rhetorical “who would have thought!”. It is the natural next step: from a concession that imagines another world to a hypothesis that uses it to persuade.', href: '/gramatica/hipotesis-remotas-y-contrafactualidad-retorica', label: 'Ir a la clase 171' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Qué diferencia hay entre “Aunque es tu jefe…” y “Aunque sea tu jefe…”?». Respuesta esperada: las dos son correctas; con indicativo se afirma o recuerda el dato, con subjuntivo se concede un dato conocido para quitarle peso. Tarea: la carta abierta de Escribir sobre una decisión real.' },
        ] },
      ],
    },
  ],
};
