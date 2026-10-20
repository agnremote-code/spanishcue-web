import type { LiveLesson } from '../types';

/**
 * Lesson 490 · C1 · Conectores contraargumentativos y restrictivos (course unit G190).
 * Builds on G117 (g417: en cambio, mientras que, no… sino / sino que as a first
 * contact), G156 (g456: sin embargo, no obstante, aun así, con todo, así y todo, de
 * todas formas, ahora bien, eso sí, y eso que), G165 (g465: al contrario, más bien,
 * de ahí que + subjuntivo), G116 / G099 (de modo que + indicativo / + subjuntivo) and
 * G171 (g471: a no ser que, salvo que + subjuntivo as conditions). Those are not
 * re-taught: here come the finer C1 distinctions an op-ed writer needs.
 * Content: substituting vs contrasting (no A, sino B; no…, sino que + verbo; antes
 * bien, formal; no solo…, sino (que) también) vs en cambio / por el contrario /
 * mientras (que) / frente a + nombre; pero vs sino vs aunque, with correction; sino vs
 * si no; restricting (salvo que / excepto que + indicativo = exception of fact vs +
 * subjuntivo = condition; excepto / salvo / menos + yo, tú; solo que + indicativo; lo
 * que pasa es que; el caso es que; más que nada; si acaso ≠ por si acaso; en todo caso
 * with its two values); counter-argument scale recap (con todo, así y todo, de todas
 * formas); coverage-audit gap 34: formal consequence de ahí que + subjuntivo (recall)
 * and de modo / de manera que + indicativo (consequence) vs + subjuntivo (purpose).
 * Position and punctuation throughout. Ampliación: register shift (solo que → si
 * bien), no hacer sino + infinitivo, nadie sino…, contrastive vs temporal mientras.
 * Scene: Puerto Alto, a coastal city. Elena Robles, urban planner and columnist of the
 * local paper «El Faro», writes a column on holiday flats in the old town; Óscar Lema,
 * the opinion editor, edits it. Practicar: the column's paragraphs and the readers'
 * comments (Iván Soler, who lets one flat; Marisa Prieto, a neighbour). Escuchar: the
 * reply on local radio by the economist Lorena Fuentes (es-ES-ElviraNeural, one voice).
 * Escribir: a letter to the editor. Instructions use tú.
 */
export const lesson: LiveLesson = {
  id: 490,
  level: 'C1',
  title: 'Conectores contraargumentativos y restrictivos',
  subtitle: 'Sustituir, contraponer y restringir ideas con precisión en un texto de opinión, y sacar consecuencias con el modo adecuado.',
  legend: [
    { tone: 'blue', label: 'SUSTITUIR · no A, sino B · no…, sino que · antes bien' },
    { tone: 'teal', label: 'CONTRAPONER · en cambio, por el contrario, mientras que, frente a · con todo (repaso)' },
    { tone: 'orange', label: 'RESTRINGIR · salvo que, excepto, solo que, el caso es que, más que nada, si acaso, en todo caso' },
    { tone: 'violet', label: 'CONSECUENCIA FORMAL · de ahí que + subj. · de modo que + ind. (resultado) / + subj. (finalidad)' },
  ],
  optionNotes: {
    'por si acaso': '«Por si acaso» significa «como precaución» (just in case). Para rebajar una propuesta («como mucho, lo único que haría…») se dice «si acaso».',
    'si no': '«Si no», separado, es una condición («si no hay control…»). Para sustituir una idea negada se escribe junto: «sino».',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Matizar sin perder fuerza', coach: '¿Sustituyes, contrapones o restringes? Replace, contrast or restrict?',
      steps: [
        { title: 'Una columna en revisión · A column under revision', blocks: [
          { kind: 'lead', text: 'Elena Robles, urbanista, escribe cada miércoles una columna en «El Faro», el periódico de Puerto Alto. Esta semana trata de los pisos turísticos del casco antiguo. Óscar Lema, el editor de Opinión, le devuelve el borrador con una nota: «Tus argumentos son buenos, pero tus conectores no dicen lo que piensas». Ya sabes conceder (sin embargo, aun así, ahora bien: clase 156) y refutar (al contrario, más bien, de ahí que: clase 165). Hoy afinas cuatro operaciones: **sustituir** una idea por otra, **contraponer** dos realidades, **restringir** lo que acabas de afirmar y sacar una **consecuencia formal** con el modo adecuado.', en: 'Elena writes a weekly column in the local paper; this week it is about holiday flats in the old town. Her editor says her arguments are good but her connectors don’t say what she means. You already know how to concede and refute; today you fine-tune four moves: replacing one idea with another, contrasting two realities, restricting what you have just said, and drawing a formal consequence in the right mood.' },
          { kind: 'guide', text: { teacher: 'Tú lees las tres versiones. Tu alumno explica qué relación hay entre las dos ideas en cada una: ¿se mantienen las dos, una sustituye a la otra o una se concede?', self: 'Lee las tres versiones en voz alta y piensa qué pasa con la primera idea en cada una: ¿se mantiene, se sustituye o se concede? (What happens to the first idea in each version?)' } },
          { kind: 'compare', title: 'Pero, sino, aunque · Three different moves', columns: [
            { tone: 'orange', label: 'PERO · LIMITA', sentence: 'La prohibición no es ilegal, pero es injusta.', idea: 'Las dos ideas se mantienen: no es ilegal y, además, es injusta. «Pero» limita el alcance de la primera.', en: 'Both ideas stand: it is legal, and still unfair. “Pero” limits how far the first idea goes.' },
            { tone: 'blue', label: 'SINO · SUSTITUYE', sentence: 'La prohibición no es una solución, [[sino|blue]] un parche.', idea: 'Se niega una idea y otra ocupa su lugar. «Sino» necesita una negación delante.', en: 'One idea is denied and another takes its place. “Sino” needs a negation before it.' },
            { tone: 'teal', label: 'AUNQUE · CONCEDE', sentence: 'Aunque la prohibición es legal, es injusta.', idea: 'Se reconoce un hecho que no impide la afirmación principal.', en: 'A fact is acknowledged, but it doesn’t stop the main claim from standing.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'No queremos menos turistas, ___ turistas que convivan con los vecinos.', options: ['pero', 'aunque', 'sino'], answer: 2, why: 'Se niega una idea («menos turistas») y se pone otra en su lugar: «sino».', en: 'We don’t want fewer tourists, but tourists who live alongside the residents: replacement.' },
            { prompt: 'No me gusta la medida, ___ la voy a votar.', options: ['pero', 'sino que', 'sino'], answer: 0, why: 'Las dos ideas se mantienen: no te gusta y, a pesar de ello, la votas. «Sino (que)» exigiría que la segunda idea sustituyera a la primera.', en: 'I don’t like the measure, but I’ll vote for it: both ideas stand, so “pero”.' },
          ] },
        ] },
        { title: 'Sustituir: sino, sino que, antes bien · Replacing', mascot: '/brand/mascot/studying.webp', coach: 'Niega y pon otra idea en su lugar. Deny and replace.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'SUSTITUIR UNA IDEA NEGADA', question: '¿Niegas una idea para poner otra, más exacta, en su lugar?', en: 'Sino always follows a negation and replaces the denied element with the right one: a noun, adjective, adverb or infinitive. When the replacement is a whole clause with a conjugated verb, use sino que. Antes bien is formal and mostly written: after a negated statement, it introduces the idea that is actually true, often the opposite of what was expected. No solo… sino (que) también adds rather than replaces.', formula: ['no + A, sino + B (nombre, adjetivo, adverbio, infinitivo…)', 'no + verbo…, sino que + verbo conjugado', 'idea negada; antes bien, + idea verdadera (formal, escrito)', 'no solo A, sino (que) también B (suma, no sustituye)'],
            meaning: '**Sino** va siempre después de una **negación** y sustituye el elemento negado por el correcto. Si lo que sustituye es una oración con **verbo conjugado**, se usa **sino que**. **Antes bien** es formal y sobre todo escrito: tras una afirmación negada, presenta lo que de verdad ocurre, a menudo lo contrario de lo esperado. **No solo… sino (que) también** no sustituye: suma.',
            examples: [
              { es: 'El problema no son los turistas, [[sino|blue]] la falta de reglas.', en: 'The problem isn’t the tourists but the lack of rules: one noun phrase replaces another.' },
              { es: 'El ayuntamiento no limita los pisos turísticos, [[sino que|blue]] los prohíbe.', en: 'The council doesn’t restrict holiday flats; it bans them: a conjugated verb, so sino que.' },
              { es: 'La norma no frena la economía del barrio; [[antes bien|blue]], la protege.', en: 'The rule doesn’t slow down the local economy; on the contrary, it protects it: formal, written.' },
              { es: 'No solo suben los alquileres, [[sino que|blue]] también cierran las tiendas de siempre.', en: 'Not only are rents going up, but the old shops are closing too: here the second idea adds.' },
            ] },
          { kind: 'table', title: 'Posición y puntuación · Position and punctuation', head: ['Conector', 'Dónde va', 'Puntuación'], rows: [
            ['[[sino|blue]] · [[sino que|blue]]', 'dentro de la misma oración, tras la negación', 'normalmente con coma delante: «no A, sino B»'],
            ['[[antes bien|blue]]', 'abre la segunda oración, tras una idea negada', 'punto y coma o punto delante, coma detrás'],
            ['no solo…, [[sino|blue]] también', 'en la misma oración', 'coma delante de «sino»'],
          ], note: 'No confundas **sino** con **si no** (condición: «**Si no** hay control, la norma no sirve»). Truco: si puedes poner «en caso de que no», se escribe separado.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'La tasa no la pagan los turistas, ___ los propietarios.', options: ['sino que', 'pero', 'sino'], answer: 2, why: 'Se sustituye un sujeto («los turistas») por otro («los propietarios»), sin verbo nuevo: «sino».', en: 'The tax isn’t paid by the tourists but by the owners.' },
            { prompt: 'El ayuntamiento no ha retirado la propuesta, ___ la ha ampliado.', options: ['sino', 'sino que', 'en cambio'], answer: 1, why: 'Lo que sustituye es una oración con verbo conjugado («la ha ampliado»): «sino que».', en: 'The council hasn’t withdrawn the proposal; it has extended it.' },
            { context: 'Columna de opinión, registro formal.', prompt: 'La medida no expulsa a los visitantes; ___, ordena su llegada.', options: ['salvo que', 'antes bien', 'si no'], answer: 1, why: 'Tras una idea negada, en un texto formal, «antes bien» presenta lo que de verdad hace la medida.', en: 'The measure doesn’t drive visitors away; rather, it regulates how they arrive.' },
          ] },
        ] },
        { title: 'Contraponer: en cambio, mientras que, frente a · Contrasting', mascot: '/brand/mascot/speaking.webp', coach: 'Dos realidades, cara a cara. Two realities, side by side.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'CONTRAPONER DOS REALIDADES', question: '¿Pones dos hechos verdaderos uno frente al otro, sin negar ninguno?', en: 'En cambio contrasts two realities that are both true (hotels pay, flats don’t); unlike sino, it needs no negation. Por el contrario does the same in a more formal tone, and after a negation it can also correct, like al contrario. Mientras que joins the two realities in one sentence; mientras on its own can also be contrastive, but it may be read as “while (at the same time)”, so in writing mientras que is clearer. Frente a + noun means “as opposed to, compared with”.', formula: ['A …; B, en cambio, … (dos sujetos o dos situaciones)', 'A …; por el contrario, B … (más formal)', 'A …, mientras que B … · Mientras que A …, B …', 'frente a + nombre, … (= en contraste con, comparado con)'],
            meaning: '**En cambio** contrapone dos realidades que son verdad a la vez; a diferencia de **sino**, no necesita negación. **Por el contrario** hace lo mismo con un tono más formal y, tras una negación, también puede corregir, como «al contrario». **Mientras que** une las dos realidades en una sola oración; **mientras** solo también puede ser contrastivo, pero puede leerse como tiempo, así que por escrito «mientras que» es más claro. **Frente a** + nombre: «en contraste con, comparado con».',
            examples: [
              { es: 'Los hoteles pagan una tasa por cada huésped; los pisos turísticos, [[en cambio|teal]], no pagan nada.', en: 'Hotels pay a tax per guest; holiday flats, on the other hand, pay nothing.' },
              { es: 'En el centro, los alquileres han subido un cuarenta por ciento, [[mientras que|teal]] en la periferia apenas han cambiado.', en: 'In the centre rents have risen forty per cent, whereas on the outskirts they have barely changed.' },
              { es: '[[Frente a|teal]] los mil pisos turísticos de hace diez años, hoy hay más de cuatro mil.', en: 'Compared with the thousand holiday flats of ten years ago, there are now over four thousand.' },
              { es: 'La regulación no ha fracasado; [[por el contrario|teal]], las quejas vecinales han bajado a la mitad.', en: 'Regulation hasn’t failed; on the contrary, residents’ complaints have halved: here it corrects.' },
            ] },
          { kind: 'compare', title: '¿Sino o en cambio? · Replace or contrast?', columns: [
            { tone: 'blue', label: 'SINO', sentence: 'No la pagan los turistas, [[sino|blue]] los vecinos.', idea: 'Un solo hecho, corregido: la primera versión es falsa.', en: 'One fact, corrected: the first version is false.' },
            { tone: 'teal', label: 'EN CAMBIO', sentence: 'Los turistas pagan la tasa; los vecinos, [[en cambio|teal]], no.', idea: 'Dos hechos verdaderos que se oponen.', en: 'Two true facts set against each other.' },
          ] },
          { kind: 'tip', icon: '💡', title: 'Repaso: la escala contraargumentativa · Recap from class 156', text: '**Con todo**, **así y todo** y **de todas formas** reconocen lo dicho y mantienen la conclusión: «La tasa es impopular. [[Con todo|teal]], la defiendo». No contraponen dos realidades: dicen que el argumento anterior **no basta** para cambiar tu postura.', en: 'Con todo, así y todo and de todas formas acknowledge the previous point and keep your conclusion: “Even so, I support it.” They don’t set two realities side by side; they say the previous argument is not enough to change your position.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'En el casco antiguo quedan tres mil vecinos, ___ hace veinte años eran nueve mil.', options: ['mientras que', 'sino que', 'antes bien'], answer: 0, why: 'Dos realidades verdaderas comparadas en una sola oración, sin negación: «mientras que».', en: 'There are three thousand residents left in the old town, whereas twenty years ago there were nine thousand.' },
            { prompt: '___ las ciudades que ya han regulado, Puerto Alto sigue sin normas.', options: ['Frente a', 'Mientras que', 'Sino'], answer: 0, why: 'Delante de un nombre («las ciudades»), para contraponer: «frente a». «Mientras que» necesita una oración con verbo.', en: 'Unlike the cities that have already regulated, Puerto Alto still has no rules.' },
            { prompt: 'Reconozco que la tasa es impopular. ___, la defiendo.', options: ['Sino', 'En cambio', 'Con todo'], answer: 2, why: 'Concedes un argumento y mantienes tu postura: «con todo». «En cambio» contrapondría dos realidades distintas.', en: 'I admit the tax is unpopular. Even so, I support it.' },
          ] },
        ] },
        { title: 'Restringir: salvo que, solo que, si acaso · Restricting', mascot: '/autoestudio/mascot/noting.webp', coach: 'Sí, pero solo hasta aquí. Yes, but only this far.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'RESTRINGIR LO QUE DICES', question: '¿Quieres marcar una excepción, una pega o el límite de lo que propones?', en: 'Salvo que / excepto que + indicative introduce the one exception to what you have just stated, as a fact. With the subjunctive, salvo que (like a no ser que, class 171) sets a condition: “unless”. Excepto, salvo and menos + noun work like prepositions, but take yo and tú. Solo que adds a snag to something you value (colloquial). Lo que pasa es que and el caso es que bring in the real problem. Más que nada points to the main reason. Si acaso and en todo caso scale a proposal down: “at most, if anything”.', formula: ['A, salvo que / excepto que + indicativo (una excepción real)', 'A, salvo que / a no ser que + subjuntivo (una condición: «si no»)', 'todos, excepto / salvo / menos + nombre · excepto yo, salvo tú', 'A, solo que + indicativo · lo que pasa es que… · el caso es que…', 'más que nada (= sobre todo) · si acaso / en todo caso (= como mucho)'],
            meaning: '**Salvo que / excepto que** + **indicativo** presentan la única excepción a lo que acabas de afirmar, como un hecho. Con **subjuntivo**, **salvo que** (como «a no ser que», clase 171) pone una **condición**. **Excepto, salvo, menos** + nombre funcionan como preposiciones, pero llevan **yo, tú**. **Solo que** añade una pega a algo que valoras (coloquial). **Lo que pasa es que** y **el caso es que** presentan el problema real. **Más que nada** señala la razón principal. **Si acaso** y **en todo caso** rebajan una propuesta: «como mucho, lo único aceptable sería…».',
            examples: [
              { es: 'El plan es razonable, [[salvo que|orange]] no dice nada de quien alquila una sola vivienda.', en: 'The plan is reasonable, except that it says nothing about people who let a single flat: a fact, indicative.' },
              { es: 'Votaremos a favor, [[salvo que|orange]] el texto final cambie.', en: 'We’ll vote in favour unless the final text changes: a condition, subjunctive.' },
              { es: 'La propuesta me gusta, [[solo que|orange]] llega tarde: el barrio ya ha cambiado.', en: 'I like the proposal; it’s just that it comes too late: the neighbourhood has already changed.' },
              { es: 'No hace falta prohibir; [[si acaso|orange]], limitar las licencias nuevas.', en: 'There’s no need for a ban; at most, limit new licences.' },
              { es: 'Escribo esta columna [[más que nada|orange]] por mis vecinos mayores.', en: 'I’m writing this column mainly for my elderly neighbours.' },
            ] },
          { kind: 'table', title: 'Función y registro · Function and register', head: ['Expresión', 'Qué hace', 'Registro'], rows: [
            ['[[salvo que|orange]] / excepto que + ind.', 'presenta la única excepción a lo dicho', 'neutro, también escrito'],
            ['salvo que / a no ser que + subj.', 'pone una condición (= si no)', 'neutro'],
            ['[[solo que|orange]] + ind.', 'añade una pega a lo que valoras', 'coloquial'],
            ['[[lo que pasa es que|orange]] · [[el caso es que|orange]]', 'presenta el problema real o el hecho que lo cambia todo', 'coloquial · neutro'],
            ['[[más que nada|orange]]', 'señala la razón principal', 'coloquial y neutro'],
            ['[[si acaso|orange]] · [[en todo caso|orange]]', 'rebaja: «como mucho»', 'neutro; «en todo caso», también formal'],
          ], note: '**En todo caso** tiene un segundo valor: «de todas formas» («**En todo caso**, te escribo mañana»). Y **si acaso** no es **por si acaso** (= como precaución, just in case).' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'La reunión fue útil, salvo que nadie ___ cifras concretas.', options: ['trajo', 'trajera', 'traiga'], answer: 0, why: 'Es la excepción a un hecho ya ocurrido: «salvo que» + indicativo, «trajo».', en: 'The meeting was useful, except that nobody brought concrete figures.' },
            { prompt: 'Firmaré el manifiesto, salvo que ___ el texto.', options: ['cambiaron', 'cambian', 'cambien'], answer: 2, why: 'Aquí «salvo que» pone una condición (= si no cambian): subjuntivo, «cambien».', en: 'I’ll sign the manifesto unless they change the text.' },
            { prompt: 'No pido que cierren los pisos turísticos; ___, que paguen lo mismo que un hotel.', options: ['si acaso', 'excepto', 'por si acaso'], answer: 0, why: 'Rebajas tu petición: «como mucho, pido que…». Eso es «si acaso». «Por si acaso» es «como precaución».', en: 'I’m not asking for the holiday flats to close; at most, that they pay the same as a hotel.' },
          ] },
        ] },
        { title: 'Consecuencia formal: de ahí que, de modo que · Formal consequence', mascot: '/brand/mascot/seated.webp', coach: '¿Resultado o finalidad? Result or purpose?', blocks: [
          { kind: 'concept', tone: 'violet', label: 'CONSECUENCIA Y FINALIDAD', question: '¿Lo que sigue es un resultado que ya se da, o el objetivo que buscas?', en: 'De ahí que (class 165) presents a consequence as explained by what came before and takes the subjunctive in careful Spanish: present in a present frame, imperfect in a past one. De modo que / de manera que / de forma que with the indicative state a real result; with the subjunctive they state a purpose, like para que. The mood alone changes the meaning, so in an op-ed it matters.', formula: ['causa; de ahí que + subjuntivo (presente o imperfecto según el marco)', 'causa, de modo / de manera que + indicativo → resultado', 'acción de modo / de manera que + subjuntivo → finalidad (= para que)'],
            meaning: '**De ahí que** (clase 165) presenta la consecuencia como explicada por lo anterior y va con **subjuntivo**. **De modo que / de manera que / de forma que** con **indicativo** dicen un **resultado** real; con **subjuntivo**, una **finalidad**, como «para que». El modo cambia el significado: en una columna, eso importa.',
            examples: [
              { es: 'Los alquileres se han duplicado; [[de ahí que|violet]] tantas familias jóvenes se vayan del centro.', en: 'Rents have doubled, which is why so many young families are leaving the centre.' },
              { es: 'Los alquileres se duplicaron, [[de modo que|violet]] muchas familias se fueron.', en: 'Rents doubled, so many families left: a real result, indicative.' },
              { es: 'Hay que repartir las licencias [[de modo que|violet]] ningún edificio tenga más de dos pisos turísticos.', en: 'Licences must be shared out so that no building has more than two holiday flats: a purpose, subjunctive.' },
            ] },
          { kind: 'decide', title: '¿Qué modo? · Which mood?', steps: [
            { q: '¿Lo que sigue es un resultado que ya se da o ya se dio?', yes: 'de modo que + indicativo · o, más formal, de ahí que + subjuntivo.', no: 'Pasa a la siguiente pregunta.' },
            { q: '¿Es el objetivo que se busca con la acción?', yes: 'de modo que / de manera que + subjuntivo (= para que).', no: 'Quizá no necesitas un conector de consecuencia: revisa la relación entre las ideas.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'El registro es obligatorio desde enero, de modo que ya ___ datos fiables.', options: ['tenemos', 'tuviéramos', 'tengamos'], answer: 0, why: 'Resultado real: «de modo que» + indicativo, «tenemos».', en: 'Registration has been compulsory since January, so we now have reliable data.' },
            { prompt: 'Hay que publicar el registro de modo que cualquier vecino ___ consultarlo.', options: ['puede', 'podrá', 'pueda'], answer: 2, why: 'Es el objetivo de la acción (= para que): subjuntivo, «pueda».', en: 'The register must be published so that any resident can check it.' },
            { prompt: 'El año pasado se concedieron cien licencias nuevas; de ahí que el problema ___.', options: ['se agrava', 'se agravó', 'se agravara'], answer: 2, why: '«De ahí que» + subjuntivo; el marco es pasado («se concedieron»): imperfecto, «se agravara».', en: 'Last year a hundred new licences were granted, hence the problem got worse.' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: '¿Conector, modo o forma? Connector, mood or form?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees cada frase con el error y tu alumno explica qué falla antes de ver la corrección: ¿el conector, el modo, la forma o la ortografía?', self: 'Lee cada frase y piensa qué falla: ¿el conector, el modo, la forma o la ortografía? Después toca para ver la corrección. (What’s wrong in each sentence?)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'No es una medida barata, pero carísima.', right: 'No es una medida barata, sino carísima.', why: 'La segunda idea sustituye a la negada: «sino». «Pero» mantendría las dos.' },
            { wrong: 'El ayuntamiento no regula los pisos, sino los prohíbe.', right: 'El ayuntamiento no regula los pisos, sino que los prohíbe.', why: 'Si sustituyes con un verbo conjugado, «sino que».' },
            { wrong: 'Los hoteles pagan la tasa, sino los pisos turísticos no.', right: 'Los hoteles pagan la tasa; los pisos turísticos, en cambio, no.', why: '«Sino» necesita una negación delante. Para oponer dos hechos verdaderos: «en cambio» o «mientras que».' },
            { wrong: 'No es un capricho, si no una necesidad.', right: 'No es un capricho, sino una necesidad.', why: 'Sustitución, no condición: se escribe junto, «sino».' },
            { wrong: 'Todos firmaron, excepto mí.', right: 'Todos firmaron, excepto yo.', why: '«Excepto», «salvo» y «menos» van con «yo, tú»: excepto yo, salvo tú.' },
            { wrong: 'En contraste a los hoteles, los pisos no pagan.', right: 'Frente a los hoteles, los pisos no pagan.', why: 'Se dice «en contraste con» o, más breve, «frente a».' },
            { wrong: 'Los alquileres subieron, de modo que muchas familias tuvieran que irse.', right: 'Los alquileres subieron, de modo que muchas familias tuvieron que irse.', why: 'Es un resultado real: «de modo que» + indicativo. El subjuntivo lo convertiría en finalidad.' },
            { wrong: 'No hay que prohibir nada; por si acaso, limitar las licencias.', right: 'No hay que prohibir nada; si acaso, limitar las licencias.', why: 'Para rebajar una propuesta («como mucho»): «si acaso». «Por si acaso» = como precaución.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'El informe no culpa a los turistas, ___ a la falta de control.', options: ['sino que', 'sino', 'si no'], answer: 1, why: 'Se sustituye un complemento («a los turistas») por otro, sin verbo: «sino», junto.', en: 'The report doesn’t blame the tourists but the lack of control.' },
            { prompt: 'Todos los vecinos del portal votaron a favor, menos ___.', options: ['me', 'mí', 'yo'], answer: 2, why: '«Menos», «excepto» y «salvo» llevan las formas «yo, tú».', en: 'Everyone in the building voted in favour except me.' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno opina en tres frases sobre un cambio en su ciudad, con un «sino», un «mientras que» y un «salvo que» + indicativo.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'La reunión de edición', coach: 'Toca cada conector marcado. Tap each marked connector.',
      steps: [
        { title: 'Lunes, redacción de «El Faro» · Monday, in the newsroom', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Óscar y tu alumno es Elena. Después tu alumno toca cada expresión marcada y explica qué operación hace: sustituir, contraponer, restringir o sacar una consecuencia.', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada: ¿sustituye, contrapone, restringe o saca una consecuencia? (Tap each marked phrase and name its function.)' } },
          { kind: 'explore', title: 'Te sobran doscientas palabras', setting: 'Redacción de «El Faro», lunes por la mañana. Óscar tiene el borrador de Elena lleno de notas en rojo. (The newsroom on Monday: Óscar has marked up Elena’s draft.)', lines: [
            { who: 'Óscar', text: 'Elena, el primer párrafo dice lo contrario de lo que piensas. Escribes: «No es un problema de turismo, pero de vivienda».', en: 'Elena, your first paragraph says the opposite of what you think. You wrote “No es un problema de turismo, pero de vivienda”: that “pero” doesn’t work.' },
            { who: 'Elena', text: 'Tienes razón: ahí no añado nada, sustituyo. «No es un problema de turismo, [[sino|blue]] de vivienda».', en: 'You’re right: I’m not adding anything there, I’m replacing. “Not a tourism problem but a housing problem.”' },
            { who: 'Óscar', text: 'Y en el segundo pones que el ayuntamiento no ha hecho nada. Ya no es verdad.', en: 'And in the second you say the council has done nothing. That’s no longer true.' },
            { who: 'Elena', text: 'Cierto. «El ayuntamiento no se ha quedado quieto, [[sino que|blue]] ha encargado un estudio». Y añado un dato: «[[Frente a|teal]] los mil pisos turísticos de hace diez años, hoy hay más de cuatro mil».', en: 'True. “The council hasn’t stood still; it has commissioned a study.” And I’ll add a figure: compared with a thousand flats ten years ago, there are now over four thousand.' },
            { who: 'Óscar', text: 'Bien. ¿Y lo de los hoteles?', en: 'Good. And the bit about the hotels?' },
            { who: 'Elena', text: 'Los hoteles pagan una tasa por cada huésped; los pisos turísticos, [[en cambio|teal]], no pagan nada. [[De ahí que|violet]] el ayuntamiento no tenga dinero para inspectores.', en: 'Hotels pay a tax per guest; holiday flats, on the other hand, pay nothing. That’s why the council has no money for inspectors.' },
            { who: 'Óscar', text: 'Aquí te veo muy dura. ¿De verdad pides prohibirlos todos?', en: 'You come across as very harsh here. Are you really calling for a ban on all of them?' },
            { who: 'Elena', text: 'No. [[Si acaso|orange]], prohibir los nuevos en el casco antiguo. Los que ya existen pueden seguir, [[salvo que|orange]] incumplan las normas.', en: 'No. At most, ban new ones in the old town. The existing ones can carry on unless they break the rules.' },
            { who: 'Óscar', text: 'Pues dilo así. ¿Por qué te importa tanto este tema?', en: 'Then say it like that. Why does this issue matter so much to you?' },
            { who: 'Elena', text: '[[Más que nada|orange]] por la señora Prieto, la del tercero: lleva cuarenta años en el barrio y ya no puede pagar el alquiler. Cierro así: «Regular no es frenar la economía; [[antes bien|blue]], es repartir sus beneficios [[de modo que|violet]] los vecinos puedan quedarse».', en: 'Mainly because of Mrs Prieto on the third floor: she’s lived in the area for forty years and can no longer afford the rent. I’ll end like this: “Regulating isn’t holding back the economy; rather, it’s sharing out its benefits so that residents can stay.”' },
            { who: 'Óscar', text: 'Perfecto, [[solo que|orange]] te sobran doscientas palabras. Y [[el caso es que|orange]] el miércoles cerramos la página a las seis.', en: 'Perfect, except that you’re two hundred words over. And the thing is, on Wednesday we close the page at six.' },
            { who: 'Elena', text: 'Doscientas… Bueno, [[en todo caso|orange]], te la mando esta noche.', en: 'Two hundred… Well, in any case, I’ll send it to you tonight.' },
          ], notes: {
            'sino': 'Sustituye: niega «turismo» y pone «vivienda» en su lugar. «Pero» habría mantenido las dos ideas, que es justo lo que Elena no quiere decir.',
            'sino que': 'La sustitución es una oración con verbo conjugado («ha encargado»): por eso «sino que».',
            'Frente a': '«Frente a» + nombre contrapone dos cifras: las de hace diez años y las de hoy. Muy frecuente en prensa.',
            'en cambio': 'Contrapone dos realidades verdaderas (los hoteles pagan; los pisos, no). Va entre comas, detrás del segundo sujeto.',
            'De ahí que': 'Consecuencia presentada como explicada por lo anterior. Va con subjuntivo: «no tenga».',
            'Si acaso': 'Rebaja la propuesta: «como mucho, lo que pido es…». No confundir con «por si acaso».',
            'salvo que': 'Aquí pone una condición (= si no las incumplen): por eso va con subjuntivo, «incumplan».',
            'Más que nada': 'Señala la razón principal («sobre todo por…»). Registro neutro y coloquial: Elena habla con su editor.',
            'antes bien': 'Formal y escrito: tras una idea negada («no es frenar la economía»), presenta lo que de verdad es regular. Perfecto para el cierre de una columna.',
            'de modo que': 'Con subjuntivo («puedan») expresa finalidad: es el objetivo de repartir los beneficios (= para que).',
            'solo que': 'Añade una pega a algo que Óscar valora («perfecto»). Coloquial; va con indicativo.',
            'el caso es que': 'Presenta el hecho que condiciona todo lo demás: la hora de cierre. Neutro y muy frecuente en la conversación.',
            'en todo caso': 'Aquí tiene su segundo valor: «de todas formas». Elena acepta el problema y mantiene lo que va a hacer.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Qué problema tenía el primer párrafo de Elena?', options: ['Usaba «pero» donde quería sustituir una idea por otra.', 'Daba una cifra falsa sobre los hoteles.', 'Era demasiado corto.'], answer: 0, why: '«Ahí no añado nada, sustituyo»: necesitaba «sino», no «pero».', en: 'What was wrong with Elena’s first paragraph?' },
            { prompt: '¿Qué propone finalmente Elena sobre los pisos turísticos?', options: ['Cobrarles la misma tasa que a los hoteles y nada más.', 'Prohibirlos todos de inmediato.', 'Prohibir solo los nuevos en el casco antiguo.'], answer: 2, why: '«Si acaso, prohibir los nuevos en el casco antiguo. Los que ya existen pueden seguir».', en: 'What does Elena finally propose about holiday flats?' },
            { prompt: '¿Por qué le importa tanto el tema a Elena?', options: ['Porque tiene un piso turístico.', 'Porque trabaja para el ayuntamiento.', 'Sobre todo por una vecina mayor que ya no puede pagar el alquiler.'], answer: 2, why: '«Más que nada por la señora Prieto, la del tercero».', en: 'Why does the issue matter so much to Elena?' },
          ] },
        ] },
        { title: 'La versión final · The final version', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'chat-fill', title: 'Elena le manda a Óscar los cambios por mensaje · Elena texts Óscar her changes', lines: [
            { who: 'Elena', text: 'Párrafo 1: «Los vecinos no se van por gusto, ___ porque no pueden pagar».', options: ['sino', 'pero', 'en cambio'], answer: 0, why: 'Se niega una causa y se pone otra en su lugar: «sino».' },
            { who: 'Elena', text: 'Párrafo 2: «En la Ribera hay un piso turístico por cada veinte viviendas, ___ en el casco antiguo hay uno por cada tres».', options: ['sino que', 'mientras que', 'antes bien'], answer: 1, why: 'Dos realidades verdaderas comparadas, sin negación: «mientras que».' },
            { who: 'Óscar', text: 'Bien. ¿Y la propuesta de los inspectores?' },
            { who: 'Elena', text: '«Hay que contratar inspectores, de modo que las normas se ___ de verdad».', options: ['cumplieron', 'cumplan', 'cumplen'], answer: 1, why: 'Es el objetivo de contratar inspectores (= para que): subjuntivo, «cumplan».' },
            { who: 'Óscar', text: 'Me encanta. Todo perfecto, ___ el título, que todavía no me convence.', options: ['excepto', 'sino', 'mientras que'], answer: 0, why: '«Excepto» + nombre marca la única excepción a «todo perfecto».' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: «¿Hay en tu ciudad un problema que la gente explica mal?». Tu alumno lo corrige con «no es…, sino…» y añade una restricción con «si acaso» o «salvo que».' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Elige por la función, no por el sonido. Choose by function, not by sound.',
      steps: [
        { title: 'La columna, párrafo a párrafo · The column, paragraph by paragraph', blocks: [
          { kind: 'choice', items: [
            { context: 'Columna de Elena, párrafo 3.', prompt: 'Muchos propietarios no son grandes empresas, ___ familias que alquilan una segunda vivienda.', options: ['en cambio', 'sino', 'sino que'], answer: 1, why: 'Sustituye un grupo nominal por otro, sin verbo nuevo: «sino».', en: 'Many owners aren’t big companies but families letting a second home.' },
            { context: 'Columna de Elena, párrafo 4.', prompt: 'En los barrios nuevos se construyen viviendas, ___ en el centro se convierten en apartamentos turísticos.', options: ['salvo que', 'antes bien', 'mientras que'], answer: 2, why: 'Dos procesos verdaderos y simultáneos, contrapuestos: «mientras que».', en: 'In the new districts homes are being built, whereas in the centre they are being turned into tourist apartments.' },
            { context: 'Columna de Elena, párrafo 5, registro formal.', prompt: 'La tasa turística no ahuyenta a los visitantes; ___, financia los servicios que ellos mismos usan.', options: ['mientras que', 'antes bien', 'si no'], answer: 1, why: 'Tras una idea negada, en un texto formal: «antes bien» presenta lo que de verdad ocurre.', en: 'The tourist tax doesn’t drive visitors away; rather, it funds the services they use themselves.' },
            { context: 'Crónica del pleno municipal.', prompt: 'Todos los grupos municipales apoyan la norma, ___ uno, que pide más tiempo.', options: ['excepto', 'mientras que', 'sino'], answer: 0, why: '«Excepto» + nombre marca la única excepción a «todos».', en: 'Every group on the council supports the rule except one, which wants more time.' },
            { context: 'Propuesta final de la columna.', prompt: 'Las licencias se concederán por sorteo, ___ ningún propietario tenga ventaja.', options: ['salvo que', 'sino que', 'de modo que'], answer: 2, why: 'Finalidad (= para que), con subjuntivo «tenga»: «de modo que».', en: 'Licences will be granted by lottery so that no owner has an advantage.' },
          ] },
        ] },
        { title: '¿Qué hace cada frase? · What does each sentence do?', blocks: [
          { kind: 'classify', title: 'Clasifica por función argumentativa · Sort by argumentative function', categories: [
            { id: 'sust', label: 'SUSTITUIR', tone: 'blue' },
            { id: 'contra', label: 'CONTRAPONER', tone: 'teal' },
            { id: 'restr', label: 'RESTRINGIR', tone: 'orange' },
            { id: 'cons', label: 'CONSECUENCIA', tone: 'violet' },
          ], items: [
            { text: 'No pedimos caridad, sino reglas.', answer: 'sust', why: 'Niega una idea y pone otra en su lugar: «sino».' },
            { text: 'Los vecinos se van, mientras que los inversores llegan.', answer: 'contra', why: 'Dos realidades verdaderas, cara a cara: «mientras que».' },
            { text: 'El plan es bueno, solo que llega tarde.', answer: 'restr', why: '«Solo que» añade una pega a algo que se valora.' },
            { text: 'No es un ataque al turismo; antes bien, una forma de cuidarlo.', answer: 'sust', why: 'Tras la negación, «antes bien» presenta la idea verdadera (formal).' },
            { text: 'El registro es público, de modo que cualquiera puede consultarlo.', answer: 'cons', why: '«De modo que» + indicativo: un resultado real.' },
            { text: 'Frente a la prohibición, otras ciudades eligen límites por edificio.', answer: 'contra', why: '«Frente a» + nombre contrapone dos opciones.' },
            { text: 'Lo digo más que nada por los comercios de siempre.', answer: 'restr', why: '«Más que nada» concreta la razón principal.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'El ayuntamiento no ha cerrado ningún piso, sino ha multado a cuatro propietarios.', ok: false, options: ['El ayuntamiento no ha cerrado ningún piso, pero que ha multado a cuatro propietarios.', 'El ayuntamiento no ha cerrado ningún piso, si no ha multado a cuatro propietarios.', 'El ayuntamiento no ha cerrado ningún piso, sino que ha multado a cuatro propietarios.'], answer: 2, why: 'La sustitución lleva un verbo conjugado («ha multado»): «sino que».' },
            { sentence: 'Los hoteles cumplen la norma; los pisos turísticos, en cambio, la ignoran.', ok: true, why: 'Correcta: «en cambio» contrapone dos realidades, entre comas, detrás del segundo sujeto.' },
            { sentence: 'La tasa subió en enero, de manera que los ingresos municipales aumentaran.', ok: false, options: ['La tasa subió en enero; de ahí que los ingresos municipales aumentaron.', 'La tasa subió en enero, de manera que los ingresos municipales aumentarán.', 'La tasa subió en enero, de manera que los ingresos municipales aumentaron.'], answer: 2, why: 'Es un resultado ya ocurrido: «de manera que» + indicativo, «aumentaron». Con «de ahí que» haría falta subjuntivo.' },
            { sentence: 'Todos votaron a favor, salvo tú y yo.', ok: true, why: 'Correcta: «salvo» lleva las formas «tú, yo».' },
            { sentence: 'No es un problema de dinero, si no de voluntad.', ok: false, options: ['No es un problema de dinero, sino de voluntad.', 'No es un problema de dinero, sino que de voluntad.', 'No es un problema de dinero, en cambio de voluntad.'], answer: 0, why: 'Sustitución sin verbo: «sino», junto. «Si no» es una condición.' },
            { sentence: 'Los pisos actuales podrán seguir abiertos, a no ser que carecen de licencia.', ok: false, options: ['Los pisos actuales podrán seguir abiertos, a no ser de que carezcan de licencia.', 'Los pisos actuales podrán seguir abiertos, a no ser que carezcan de licencia.', 'Los pisos actuales podrán seguir abiertos, a no ser que carecerán de licencia.'], answer: 1, why: '«A no ser que» pone siempre una condición: subjuntivo, «carezcan». Y sin «de».' },
          ] },
        ] },
        { title: 'Los comentarios de los lectores · Readers’ comments', blocks: [
          { kind: 'chat-fill', title: 'Debajo de la columna, en la web de «El Faro» · Under the column online', lines: [
            { who: 'Iván Soler', text: 'Tengo un piso turístico y pago todos mis impuestos. No soy un especulador, ___ un jubilado que completa su pensión.', options: ['sino que', 'pero', 'sino'], answer: 2, why: 'Niega una identidad y pone otra en su lugar, sin verbo nuevo: «sino».' },
            { who: 'Marisa Prieto', text: 'Te entiendo, Iván. ___ en mi portal ya hay cinco pisos turísticos y solo quedamos dos vecinos.', options: ['Antes bien', 'Frente a', 'Lo que pasa es que'], answer: 2, why: 'Marisa acepta lo que dice Iván y presenta el problema real: «lo que pasa es que» (coloquial, adecuado en un comentario).' },
            { who: 'Iván Soler', text: 'Yo no tengo nada contra la norma, ___ me parece que llega tarde.', options: ['solo que', 'sino que', 'de modo que'], answer: 0, why: 'Valora la norma y le pone una pega: «solo que» + indicativo.' },
            { who: 'Elena Robles', text: 'Gracias a los dos. Nadie pide cerrar tu piso, Iván; ___, que se registre y pague como un hotel.', options: ['mientras que', 'por si acaso', 'si acaso'], answer: 2, why: 'Elena rebaja la petición: «como mucho, pedimos que…». Es «si acaso».' },
            { who: 'Marisa Prieto', text: 'Un hotel paga una tasa por cada huésped; un piso turístico, ___, no paga nada. Eso no es justo.', options: ['sino', 'en cambio', 'salvo que'], answer: 1, why: 'Dos realidades verdaderas contrapuestas, sin negación previa: «en cambio».' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['No', 'es', 'un', 'problema', 'de', 'turismo,', 'sino', 'de', 'vivienda'], accept: ['No es un problema de turismo, sino de vivienda'], en: 'It isn’t a tourism problem but a housing problem.' },
            { tiles: ['Los', 'hoteles', 'pagan', 'la', 'tasa,', 'mientras', 'que', 'los', 'pisos', 'no'], accept: ['Los hoteles pagan la tasa, mientras que los pisos no'], en: 'Hotels pay the tax, whereas the flats don’t.' },
            { tiles: ['Hay', 'que', 'regular', 'de', 'modo', 'que', 'los', 'vecinos', 'puedan', 'quedarse'], accept: ['Hay que regular de modo que los vecinos puedan quedarse'], en: 'We need to regulate so that residents can stay.' },
          ] },
        ] },
        { title: 'Del borrador al texto publicado · From draft to print', blocks: [
          { kind: 'rewrite', title: 'Óscar corrige las notas · Óscar edits the notes', items: [
            { prompt: 'El ayuntamiento no ha prohibido los pisos. Los ha limitado.', instruction: 'Una sola oración con «sino que».', accept: ['El ayuntamiento no ha prohibido los pisos, sino que los ha limitado'] },
            { prompt: 'En el centro los alquileres suben. En la periferia bajan.', instruction: 'Una sola oración con «mientras que».', accept: ['En el centro los alquileres suben, mientras que en la periferia bajan', 'Mientras que en el centro los alquileres suben, en la periferia bajan'] },
            { prompt: 'Los alquileres se triplicaron, así que muchos vecinos se marcharon.', instruction: 'Usa «de ahí que» (cuidado con el modo y el tiempo).', accept: ['Los alquileres se triplicaron; de ahí que muchos vecinos se marcharan', 'Los alquileres se triplicaron; de ahí que muchos vecinos se marchasen'] },
            { prompt: 'La medida no perjudica al turismo. Lo hace más sostenible.', instruction: 'Registro formal: una oración con «antes bien».', accept: ['La medida no perjudica al turismo; antes bien, lo hace más sostenible'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno resume la postura de Elena en cuatro frases: una sustitución («sino»), una contraposición («mientras que» o «frente a»), una restricción («si acaso» o «salvo que») y una consecuencia («de ahí que»).' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'La réplica en la radio', coach: 'Escucha qué sustituye, qué contrapone y qué restringe. Listen for each move.',
      steps: [
        { title: 'La tribuna de los jueves · The Thursday opinion slot', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la postura de Lorena. Segunda escucha: tu alumno anota cada conector y su función (sustituir, contraponer, restringir, consecuencia). Después, las preguntas.', self: 'Escucha una vez para entender la postura de Lorena y otra para anotar cada conector y su función. (Listen once for her position and once to note each connector.)' } },
          { kind: 'listen', title: 'Tribuna de opinión', channel: 'RADIO PUERTO ALTO · LA TRIBUNA DE LOS JUEVES', src: '/audio/grammar-live/490.mp3',
            before: 'Lorena Fuentes, economista, responde en la radio a la columna de Elena. ¿Crees que estará de acuerdo con prohibir los pisos turísticos nuevos? (Do you think she will agree with the ban?)',
            gist: { prompt: '¿Cuál es la postura de Lorena? · What is Lorena’s position?', options: ['Prefiere regular y controlar los pisos antes que prohibirlos.', 'Está de acuerdo con prohibir todos los pisos turísticos.', 'Cree que no existe ningún problema de vivienda.'], answer: 0, why: '«Comparto su diagnóstico, pero no su receta»: propone registro, límites y tasa, y más inspectores en lugar de prohibiciones.', en: 'She shares the diagnosis but prefers regulation and enforcement to a ban.' },
            details: [
              { prompt: 'Según Lorena, ¿qué provoca una prohibición?', options: ['Que bajen los alquileres.', 'Que los turistas dejen de venir.', 'Que la actividad pase a la economía sumergida.'], answer: 2, why: '«Una prohibición no hace desaparecer la demanda; antes bien, la empuja a la economía sumergida».', en: 'According to Lorena, what does a ban lead to?' },
              { prompt: '¿Adónde debería ir el dinero de la tasa?', options: ['A bajar los impuestos de los hoteles.', 'A un fondo de vivienda para el barrio.', 'A promocionar la ciudad.'], answer: 1, why: '«Esa tasa debería ir a un fondo de vivienda, de manera que el dinero del turismo vuelva al barrio».', en: 'Where should the tax money go?' },
              { prompt: '¿Por qué el registro es lo más urgente?', options: ['Porque es la medida más barata.', 'Porque hoy nadie sabe cuántos pisos turísticos hay.', 'Porque lo exige la ley europea.'], answer: 1, why: '«El caso es que hoy nadie sabe cuántos pisos turísticos hay; de ahí que el registro sea lo más urgente».', en: 'Why is the register the most urgent measure?' },
              { prompt: '¿Por dónde empezaría Lorena?', options: ['Por subir la tasa.', 'Por contratar inspectores.', 'Por cerrar los pisos ilegales.'], answer: 1, why: '«Si acaso, yo empezaría por contratar inspectores, no por escribir prohibiciones».', en: 'Where would Lorena start?' },
            ],
            transcript: 'Buenos días. El miércoles, Elena Robles pedía en «El Faro» prohibir los pisos turísticos nuevos en el casco antiguo. Comparto su diagnóstico, pero no su receta. El problema no son los visitantes, [[sino|blue]] la falta de reglas. Una prohibición no hace desaparecer la demanda; [[antes bien|blue]], la empuja a la economía sumergida. [[Frente a|teal]] la prohibición, propongo tres medidas: un registro obligatorio, un límite de pisos por edificio y una tasa por noche. [[Mientras que|teal]] un hotel declara cada habitación que alquila, muchos pisos no declaran ni un euro, [[de modo que|violet]] el ayuntamiento pierde ingresos que necesita. Esa tasa debería ir a un fondo de vivienda, [[de manera que|violet]] el dinero del turismo vuelva al barrio. ¿Que es una propuesta tímida? [[En todo caso|orange]], es una propuesta realista. [[Con todo|teal]], reconozco que la situación es grave. [[El caso es que|orange]] hoy nadie sabe cuántos pisos turísticos hay; [[de ahí que|violet]] el registro sea lo más urgente. Y una advertencia: ninguna norma funciona, [[salvo que|orange]] alguien la haga cumplir. [[Si acaso|orange]], yo empezaría por contratar inspectores, no por escribir prohibiciones. Les habló Lorena Fuentes. Hasta el próximo jueves.',
            reply: { teacher: 'Tú eres Lorena y repites uno de sus argumentos. Tu alumno es Elena y le responde en antena: corrige con «no…, sino…», contrapone con «frente a» o «mientras que» y restringe con «si acaso» o «salvo que».', self: 'Eres Elena: responde en voz alta a uno de los argumentos de Lorena. Corrige con «no…, sino…», contrapone con «mientras que» y restringe con «si acaso». (Answer Lorena aloud as Elena.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Matizar en voz alta', coach: 'Sustituye, contrapón y restringe. Replace, contrast, restrict.',
      steps: [
        { title: 'Opiniones con matices · Opinions with nuance', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas y a veces exageras una postura para provocar. Tu alumno responde con al menos tres conectores de funciones distintas. Si confunde «pero» y «sino», o el modo tras «de modo que», tú repites la frase corregida y sigues.', self: 'Responde en voz alta a cada pregunta con al menos tres conectores de funciones distintas: sustituir, contraponer, restringir o sacar una consecuencia. (Use at least three different moves in each answer.)' } },
          { kind: 'talk', cards: [
            { q: 'Elige un tópico sobre tu ciudad o tu profesión y corrígelo. · Pick a cliché about your city or job and correct it.', followUps: ['¿De dónde crees que viene esa idea?', '¿Hay algo de verdad en ella?'], phrases: ['No es…, [[sino|blue]]…', 'No…, [[sino que|blue]]…', '[[Lo que pasa es que|orange]]…'], hint: 'Niega el tópico y sustitúyelo con «sino» o «sino que». Después explica el origen con «lo que pasa es que».', example: 'Dicen que los informáticos trabajamos solos. No es verdad: no pasamos el día delante de la pantalla, sino que hablamos con clientes casi todo el tiempo. Lo que pasa es que esas reuniones no se ven desde fuera.' },
            { q: 'Compara tu barrio de hoy con el de hace diez años. · Compare your neighbourhood now and ten years ago.', followUps: ['¿Qué ha mejorado?', '¿Qué echas de menos?'], phrases: ['[[Frente a|teal]] + nombre, …', '…, [[mientras que|teal]]…', '…; [[en cambio|teal]], …'], hint: 'Contrapón dos realidades verdaderas: «frente a» + nombre, «mientras que» + oración, «en cambio» entre comas.', example: 'Frente a las tiendas de barrio de antes, ahora hay sobre todo cafeterías. Hace diez años todos nos conocíamos, mientras que ahora apenas saludo a los vecinos nuevos. El transporte, en cambio, ha mejorado mucho.', next: 'Ahora, a poner pegas.' },
            { q: 'Tu empresa o tu centro de estudios propone un cambio que te parece bien, pero con pegas. Valóralo. · Assess a proposal you like, with reservations.', followUps: ['¿Qué cambiarías?', '¿Lo votarías?'], phrases: ['…, [[salvo que|orange]] + indicativo', '…, [[solo que|orange]]…', '[[Más que nada|orange]]…'], hint: '«Salvo que» + indicativo para una excepción real; «solo que» para la pega, en registro coloquial.', example: 'La jornada intensiva me parece una buena idea, salvo que no dice nada de quienes atienden al público por la tarde. Yo la votaría, solo que pediría un periodo de prueba. Lo digo más que nada por los compañeros con hijos pequeños.' },
            { q: 'Un amigo propone prohibir los coches en todo el centro de tu ciudad. Rebaja la propuesta. · Scale down a friend’s extreme proposal.', followUps: ['¿Qué alternativa propones?', '¿En qué caso aceptarías prohibirlos?'], phrases: ['No hace falta…; [[si acaso|orange]], …', '[[En todo caso|orange]], …', '…, [[salvo que|orange]] + subjuntivo'], hint: 'Rebaja con «si acaso» o «en todo caso» y pon una condición con «salvo que» + subjuntivo.', example: 'No hace falta prohibirlos en todo el centro; si acaso, en las calles del casco antiguo. En todo caso, yo empezaría por mejorar el autobús. No aceptaría una prohibición total, salvo que el transporte público funcionara de verdad.', next: 'Ahora, en registro formal.' },
            { q: 'Eres Elena y respondes a Lorena en la radio. · You are Elena: reply to Lorena on air.', followUps: ['¿Y si Lorena insiste en que prohibir no funciona?', '¿Qué dato usarías para cerrar?'], phrases: ['…; [[antes bien|blue]], …', '…; [[de ahí que|violet]] + subjuntivo', '…, [[de modo que|violet]] + subjuntivo'], hint: 'Registro formal: «antes bien» tras una idea negada, una consecuencia con «de ahí que» y una finalidad con «de modo que» + subjuntivo.', example: 'Agradezco la réplica de la señora Fuentes, pero mi propuesta no busca castigar a nadie; antes bien, intenta proteger a los vecinos. El registro llegará tarde; de ahí que pida congelar ya las licencias nuevas, de modo que el barrio no siga perdiendo viviendas mientras se hacen los estudios.', teacher: 'Tú eres Lorena y respondes con un argumento nuevo; tu alumno contesta sin repetir el mismo conector.' },
            { q: 'Debate: «Las ciudades deberían limitar el número de turistas». · Debate a full position.', followUps: ['¿Qué responderías a quien dice que el turismo da trabajo?', '¿Cuál es tu conclusión?'], phrases: ['No se trata de…, [[sino|blue]] de…', '[[Mientras que|teal]]…', '[[Con todo|teal]], …', '[[si acaso|orange]]'], hint: 'Sustituye la idea simple por la exacta, contrapón dos realidades, concede con «con todo» y termina con una propuesta restringida.', example: 'No se trata de cerrar la puerta a los turistas, sino de ordenar su llegada. Mientras que algunas zonas están saturadas, otras apenas reciben visitantes. Es cierto que el turismo da trabajo. Con todo, ese trabajo suele ser precario. Yo no limitaría el número total; si acaso, el de grupos grandes en el centro histórico.', teacher: 'Tú defiendes la postura contraria; tu alumno sustituye, contrapone y restringe sin repetir conectores.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno pregunta y tú respondes con algún error a propósito («no es caro, pero carísimo», «excepto mí», «por si acaso» en lugar de «si acaso»). Tu alumno lo detecta y lo corrige.', self: 'Ahora haz tú las preguntas en voz alta y respóndelas defendiendo la postura contraria. (Now ask the questions aloud and argue the opposite side.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Una carta al director', coach: 'Sustituye, contrapón, restringe y concluye. Replace, contrast, restrict, conclude.',
      steps: [
        { title: 'Cartas al director de «El Faro» · Letters to the editor', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos cada conector: ¿sustituye, contrapone, restringe o saca una consecuencia? ¿El modo es el adecuado? Después tu alumno lee la carta en voz alta.', self: 'Escribe tu carta y toca «Revisar mi texto». Después revisa cada conector: ¿qué función tiene y el modo es el adecuado? (Check the function and mood of each connector.)' } },
          { kind: 'write', title: 'Mi carta · My letter', situation: 'Después de la columna de Elena y la réplica de Lorena, «El Faro» abre su sección de cartas al director. Escribe una carta para los lectores del periódico: toma postura sobre los pisos turísticos o sobre otro cambio que afecte a tu barrio. (Write a letter to the editor taking a position on holiday flats or another change in your neighbourhood.)', task: [
            'Corrige una idea frecuente con «no…, sino…» o «no…, sino que…». (Replace a common idea.)',
            'Contrapón dos realidades con «mientras que», «en cambio» o «frente a». (Contrast two realities.)',
            'Restringe tu postura con «salvo que», «excepto», «si acaso» o «en todo caso». (Restrict or scale down.)',
            'Saca una consecuencia con «de ahí que» + subjuntivo o «de modo que» + indicativo, y expresa un objetivo con «de modo que» + subjuntivo. (Consequence and purpose.)',
            'Mantén un registro formal: «antes bien» o «por el contrario» en lugar de «lo que pasa es que» o «solo que». (Keep it formal.)',
          ], starters: ['Señor director:', 'No se trata de…, sino de…', 'Frente a…,', '…, mientras que…', '…; de ahí que…', 'No pido…; si acaso,…', '…, salvo que…', '…; antes bien,…', '…, de modo que…', 'Atentamente,'],
            words: ['sino', 'sino que', 'antes bien', 'en cambio', 'mientras que', 'frente a', 'salvo que', 'si acaso', 'de ahí que', 'de modo que'],
            model: 'Señor director: Sigo con interés el debate entre Elena Robles y Lorena Fuentes sobre los pisos turísticos. Vivo en el casco antiguo desde hace cuarenta años y quiero aportar la mirada de una vecina. El problema no son los turistas, [[sino|blue]] la desaparición de la vida del barrio. Hace diez años, en mi portal vivían doce familias, [[mientras que|teal]] hoy quedamos dos. [[Frente a|teal]] los alquileres de entonces, los actuales son imposibles para una pareja joven; [[de ahí que|violet]] ya casi no haya niños en la plaza. La señora Fuentes propone una tasa, y me parece razonable, [[salvo que|orange]] olvida un detalle: ese dinero llegará cuando los vecinos ya se hayan ido. No pido prohibirlo todo; [[si acaso|orange]], congelar las licencias nuevas mientras se elabora el registro. Regular no es atacar el turismo; [[antes bien|blue]], es ordenarlo [[de modo que|violet]] el barrio siga teniendo vecinos. Atentamente, Marisa Prieto.',
            minWords: 140,
            checks: [
              { label: 'Una sustitución (sino, sino que, antes bien)', pattern: '(?<!\\p{L})(?:sino|antes\\s+bien)(?!\\p{L})', tip: 'Corrige una idea: «No es…, sino…».' },
              { label: 'Una contraposición (mientras que, en cambio, por el contrario, frente a)', pattern: '(?<!\\p{L})(?:mientras\\s+que|en\\s+cambio|por\\s+el\\s+contrario|frente\\s+a)(?!\\p{L})', tip: 'Pon dos realidades cara a cara: «…, mientras que…».' },
              { label: 'Una restricción (salvo, excepto, si acaso, en todo caso, más que nada)', pattern: '(?<!\\p{L})(?:salvo|excepto|si\\s+acaso|en\\s+todo\\s+caso|más\\s+que\\s+nada)(?!\\p{L})', tip: 'Limita tu postura: «No pido…; si acaso,…».' },
              { label: 'Una consecuencia o finalidad (de ahí que, de modo que, de manera que)', pattern: '(?<!\\p{L})(?:de\\s+ahí\\s+que|de\\s+(?:modo|manera|forma)\\s+que)(?!\\p{L})', tip: 'Saca una consecuencia: «…; de ahí que + subjuntivo».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})de\\s+ahí\\s+que\\s+(?:\\p{L}+\\s+){0,3}?(?:es|son|está|están|hay|tiene|tienen|puede|pueden|va|van)(?!\\p{L})', why: 'Después de **de ahí que** parece haber un indicativo. En registro cuidado, usa subjuntivo: «de ahí que **sea**, **haya**, **puedan**…».' },
              { pattern: '(?<!\\p{L})(?:excepto|salvo|menos)\\s+mí(?!\\p{L})', why: 'Detrás de **excepto**, **salvo** y **menos** van **yo** y **tú**: «excepto yo».' },
              { pattern: '(?<!\\p{L})en\\s+contraste\\s+a(?!\\p{L})', why: 'Escribe **en contraste con** o, más breve, **frente a**.' },
              { pattern: '(?<!\\p{L})(?:lo\\s+que\\s+pasa\\s+es\\s+que|solo\\s+que)(?!\\p{L})', why: '«Lo que pasa es que» y «solo que» son coloquiales. En una carta al director, prueba **salvo que** + indicativo, **antes bien** o **ahora bien**.' },
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
            { tone: 'blue', label: 'SUSTITUIR', formula: 'no A, sino B · no…, sino que + verbo · …; antes bien, …', example: 'No es un problema de turismo, sino de vivienda.', caption: '«sino» exige negación; «si no» es condición', en: 'sino needs a negation and replaces; si no is a condition' },
            { tone: 'teal', label: 'CONTRAPONER', formula: 'en cambio · por el contrario · mientras que · frente a + nombre', example: 'Los hoteles pagan; los pisos, en cambio, no.', caption: 'dos realidades verdaderas; «con todo» mantiene la conclusión', en: 'two true realities side by side; con todo keeps your conclusion' },
            { tone: 'orange', label: 'RESTRINGIR', formula: 'salvo que + ind. (excepción) / + subj. (condición) · solo que · si acaso · en todo caso', example: 'El plan es bueno, salvo que llega tarde.', caption: '«excepto yo»; «si acaso» ≠ «por si acaso»', en: 'excepto yo; si acaso (at most) is not por si acaso (just in case)' },
            { tone: 'violet', label: 'CONSECUENCIA FORMAL', formula: 'de ahí que + subj. · de modo que + ind. / + subj.', example: 'Subieron los alquileres, de modo que muchos se fueron.', caption: 'indicativo = resultado; subjuntivo = finalidad', en: 'indicative = result; subjunctive = purpose' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Antes de elegir el conector, pregúntate qué haces con la idea anterior: ¿la **niegas y la sustituyes** (sino), la **pones frente a otra** (en cambio, mientras que), la **limitas** (salvo que, si acaso) o **sacas una consecuencia** (de ahí que, de modo que)? Y vigila el modo: **salvo que** y **de modo que** cambian de significado con el subjuntivo.', en: 'Before choosing a connector, ask what you are doing with the previous idea: denying and replacing it, setting it against another, limiting it, or drawing a consequence. And watch the mood: salvo que and de modo que change meaning with the subjunctive.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'El problema del restaurante no es el precio, ___ la calidad.', options: ['sino que', 'si no', 'sino'], answer: 2, why: 'Sustituye un nombre por otro tras una negación: «sino», junto.', en: 'The restaurant’s problem isn’t the price but the quality.' },
            { prompt: 'Mi hermana vive en el centro, ___ yo vivo en un pueblo.', options: ['mientras que', 'sino que', 'antes bien'], answer: 0, why: 'Dos realidades verdaderas contrapuestas: «mientras que».', en: 'My sister lives in the centre, whereas I live in a village.' },
            { prompt: 'El viaje salió bien, salvo que el tren ___ con retraso.', options: ['llegue', 'llegara', 'llegó'], answer: 2, why: 'Excepción a un hecho ocurrido: «salvo que» + indicativo, «llegó».', en: 'The trip went well, except that the train arrived late.' },
            { prompt: 'Coloca las sillas de modo que todos ___ la pantalla.', options: ['vean', 'ven', 'verán'], answer: 0, why: 'Es el objetivo de colocar las sillas (= para que): subjuntivo, «vean».', en: 'Arrange the chairs so that everyone can see the screen.' },
            { prompt: 'No te digo que dejes el trabajo; ___, que pidas menos horas.', options: ['si acaso', 'por si acaso', 'frente a'], answer: 0, why: 'Rebajas el consejo: «como mucho, te digo que…». Es «si acaso».', en: 'I’m not telling you to quit your job; at most, to ask for fewer hours.' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Ahora, en una academia. Now, at a language school.', blocks: [
          { kind: 'lead', text: 'Rocío Varela coordina una academia de idiomas con dos sedes y prepara un informe para la dirección sobre la semana de cuatro días. Sus notas son correctas, pero planas: tú las conviertes en frases de informe.', en: 'Rocío coordinates a language school with two branches and is writing a report for management on a four-day week. Her notes are correct but flat: you turn them into report sentences.' },
          { kind: 'rewrite', title: 'Las notas de Rocío · Rocío’s notes', items: [
            { prompt: 'No queremos trabajar menos. Queremos trabajar mejor.', instruction: 'Una sola oración con «sino».', accept: ['No queremos trabajar menos, sino trabajar mejor', 'No queremos trabajar menos, sino mejor'] },
            { prompt: 'En la sede del centro las matrículas han subido. En la del puerto han bajado.', instruction: 'Una sola oración con «mientras que».', accept: ['En la sede del centro las matrículas han subido, mientras que en la del puerto han bajado', 'Mientras que en la sede del centro las matrículas han subido, en la del puerto han bajado'] },
            { prompt: 'Organizaremos los horarios para que ningún grupo pierda clases.', instruction: 'Cambia «para que» por «de modo que».', accept: ['Organizaremos los horarios de modo que ningún grupo pierda clases'] },
          ] },
        ] },
        { title: 'Ampliación · Del comentario al editorial · Extension', mascot: '/brand/mascot/portrait.webp', coach: 'Opcional. Optional.', blocks: [
          { kind: 'lead', text: 'Para estudiantes fuertes o si queda tiempo. En un texto formal, la pega coloquial («solo que», «lo que pasa es que») se convierte en **si bien** o **ahora bien**. Y dos usos cultos de **sino**: **no hacer sino** + infinitivo (= solo hacer: «Prohibir no haría sino trasladar el problema») y **nadie / nada sino** (= nadie más que: «Nadie sino ella defendió la propuesta»). Por último, **mientras** solo puede ser temporal o contrastivo: el contexto decide.', en: 'For strong students or spare time. In formal writing, the colloquial snag becomes si bien or ahora bien. Two literary uses of sino: no hacer sino + infinitive means “to do nothing but” (“a ban would only shift the problem”), and nadie sino means “no one but”. Finally, mientras on its own can be temporal or contrastive: context decides.' },
          { kind: 'choice', title: 'Registro y usos cultos · Register and formal uses', items: [
            { prompt: 'Pasa a un editorial: «El plan está bien, solo que es caro».', options: ['El plan es acertado, si bien su coste es elevado.', 'El plan está bien, lo que pasa es que es caro.', 'El plan está bien, sino que es caro.'], answer: 0, why: '«Si bien» introduce la pega en registro formal. «Lo que pasa es que» es coloquial; «sino que» exige una negación.', en: 'Make it suitable for an editorial.' },
            { prompt: '«Prohibir no haría sino trasladar el problema». ¿Qué significa?', options: ['Prohibir trasladaría el problema, si no se hace bien.', 'Lo único que conseguiría prohibir es trasladar el problema.', 'Prohibir no trasladaría el problema.'], answer: 1, why: '«No hacer sino» + infinitivo = «solo hacer»: la frase es afirmativa, aunque lleve «no».', en: 'What does “no haría sino trasladar” mean? (would do nothing but shift the problem)' },
            { prompt: '«Nadie sino ella defendió la propuesta». ¿Qué significa?', options: ['Nadie defendió la propuesta, ni siquiera ella.', 'Ella atacó la propuesta.', 'Solo ella defendió la propuesta.'], answer: 2, why: '«Nadie sino ella» = nadie más que ella: ella fue la única.', en: 'What does “nadie sino ella” mean? (no one but her)' },
            { prompt: '¿En qué frase tiene «mientras» un valor contrastivo, no temporal?', options: ['Mientras dure la obra, la calle estará cortada.', 'Mientras esperaba, leí la columna.', 'Mientras los hoteles pagan la tasa, los pisos no pagan nada.'], answer: 2, why: 'Contrapone dos realidades (hoteles / pisos). En las otras, «mientras» indica tiempo (= durante).', en: 'In which sentence is “mientras” contrastive rather than temporal?' },
          ] },
          { kind: 'teacher', text: 'Paso opcional: solo si queda tiempo o para estudiantes fuertes. Tu alumno escribe dos frases sobre un tema de actualidad, una con «no hacer sino» + infinitivo y otra con «si bien».' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 191 · Atenuación: en cierto modo, hasta cierto punto', text: 'Ya sabes sustituir, contraponer y restringir una idea con precisión: «no…, sino…», «mientras que», «salvo que», «si acaso». La clase 191 te enseña a atenuar: a suavizar una afirmación sin renunciar a ella con «en cierto modo», «hasta cierto punto» o «en cierta medida». Es el paso natural: después de matizar con firmeza, aprendes a matizar con prudencia.', en: 'You can now replace, contrast and restrict ideas precisely. Class 191 teaches hedging: softening a claim without giving it up, with expressions like “to some extent”. It is the natural next step: after qualifying firmly, you learn to qualify cautiously.', href: '/gramatica/atenuacion-en-cierto-modo-hasta-cierto', label: 'Ir a la clase 191' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Qué diferencia hay entre “Los alquileres subieron, de modo que muchas familias se fueron” y “Hay que regular de modo que las familias puedan quedarse”?». Respuesta esperada: con indicativo, «de modo que» dice un resultado; con subjuntivo, una finalidad. Tarea: la carta al director de Escribir.' },
        ] },
      ],
    },
  ],
};
