import type { LiveLesson } from '../types';

/**
 * Lesson 456 · B2 · Conectores de concesión y objeción (course unit G156).
 * Builds on G101 (g401: aunque + indicativo; pero / sin embargo / aun así as a
 * preview), G137 (lesson 220: aunque + indicativo / subjuntivo) and G138 (g438:
 * a pesar de que, por mucho que, si bien, aun cuando). Here the focus moves to
 * the discourse level: connectors that link sentences and paragraphs, and the
 * formulas people use to object in a debate.
 * One scene runs through the class: the neighbourhood association of La Alameda
 * debates the council's plan to close calle del Mercado to traffic for a one-year
 * trial. Adela Cruz (president) chairs; Lucía Varela (a teacher) is in favour;
 * Hugo Medina (owner of the hardware shop) has doubts about deliveries and
 * customers who come by car. Explorar: the assembly. Practicar: the group chat,
 * Hugo and his daughter Nuria three months later. Escuchar: the local radio
 * host's weekly round-up (es-MX-JorgeNeural, one voice). Escribir: a formal
 * contribution to the council's public consultation.
 * Content: sin embargo, no obstante (contrast; punctuation: full stop or
 * semicolon before, comma after; mid-position between commas; *pero sin embargo);
 * aun así, con todo, así y todo (the result stands); de todas formas / de todos
 * modos / de todas maneras (whatever the previous point, this holds); ahora bien
 * and eso sí (accept and qualify: objection or condition); aunque = pero
 * (rectifying, + indicativo, always after); si bien and aun cuando reviewed; pese
 * a + noun / infinitive and pese a que (formal); y eso que + indicativo
 * (colloquial, after the main clause). Debate formulas: Ya, pero…; Sí, de
 * acuerdo, pero…; Puede que sí / Puede que tengas razón, pero…; Tienes razón en
 * que + indicativo, pero…; No digo que no + subjuntivo, pero…; Es cierto que…;
 * ahora bien… Register: written / formal vs spoken / colloquial, stated only
 * where well established. Ampliación: register shift (bar → report) and the
 * concessive future («Será práctico, pero…») receptively, glossed (G161 later).
 */
export const lesson: LiveLesson = {
  id: 456,
  level: 'B2',
  title: 'Conectores de concesión y objeción',
  subtitle: 'Conceder y objetar en un debate o en un texto formal con sin embargo, no obstante, aun así, ahora bien, eso sí y y eso que.',
  legend: [
    { tone: 'blue', label: 'CONTRASTE · sin embargo, no obstante: une dos oraciones (however)' },
    { tone: 'teal', label: 'A PESAR DE ESO · aun así, con todo, así y todo, de todas formas: lo que sigue se mantiene' },
    { tone: 'orange', label: 'RESERVA Y OBJECIÓN · ahora bien, eso sí, aunque (= pero), ya, pero…: aceptas y matizas' },
    { tone: 'violet', label: 'DENTRO DE LA ORACIÓN · si bien, pese a (que), aun cuando, y eso que' },
  ],
  optionNotes: {
    'pero sin embargo': '«Pero» y «sin embargo» expresan el mismo contraste: usar los dos juntos es redundante y la norma recomienda evitarlo. Elige uno.',
    'sin embargo que': '«Sin embargo» es un conector, no una conjunción: no lleva «que» ni introduce una oración que dependa de otra.',
    'De todas las formas': 'La expresión fija es «de todas formas», sin artículo (igual que «de todos modos», «de todas maneras»).',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Conceder, objetar, conectar', coach: 'Acepto tu argumento y añado el mío. I grant your point and add mine.',
      steps: [
        { title: 'Una calle sin coches · A street without cars', blocks: [
          { kind: 'lead', text: 'La asociación vecinal del barrio de La Alameda se reúne esta tarde. El municipio propone cerrar al tráfico la calle del Mercado durante un año de prueba. Adela Cruz, la presidenta, modera el debate; Lucía Varela, maestra, está a favor; Hugo Medina, dueño de la ferretería, tiene dudas. En las clases 101, 137 y 138 concediste **dentro de una oración** («aunque», «por mucho que», «si bien»). Hoy das un paso más: unes **oraciones y párrafos** con sin embargo, no obstante, aun así, ahora bien o eso sí, y aprendes a **objetar** en un debate sin cortar la conversación.', en: 'The La Alameda neighbourhood association meets this evening. The council wants to close calle del Mercado to traffic for a one-year trial. Adela chairs, Lucía is in favour and Hugo, who owns the hardware shop, has doubts. So far you have conceded inside one sentence; today you link whole sentences and paragraphs, and learn to object in a debate without shutting the conversation down.' },
          { kind: 'guide', text: { teacher: 'Tú lees las tres frases de la asamblea. Tu alumno dice cuál une dos oraciones separadas por un punto, cuál acepta una idea y pone una condición y cuál es una sola oración.', self: 'Lee las tres frases en voz alta. ¿Cuál une dos oraciones separadas por un punto? ¿Cuál acepta y pone una condición? ¿Cuál es una sola oración? (Which one links two sentences, which one accepts and adds a condition, which one is a single sentence?)' } },
          { kind: 'compare', title: 'Tres maneras de conceder · Three ways to concede', columns: [
            { tone: 'blue', label: 'ENTRE DOS ORACIONES', sentence: 'La calle tendrá menos ruido. [[Sin embargo|blue]], los repartos serán más difíciles.', idea: 'Dos oraciones completas. El conector va después del punto y anuncia un contraste.', en: 'Two complete sentences: the connector comes after the full stop and announces a contrast.' },
            { tone: 'orange', label: 'ACEPTO, PERO MATIZO', sentence: 'La idea me parece bien. [[Ahora bien|orange]], necesitamos un horario para los repartos.', idea: 'Hugo acepta la propuesta y pone una condición que considera importante.', en: 'Hugo accepts the proposal, then adds a condition he considers essential: “that said…”.' },
            { tone: 'violet', label: 'DENTRO DE LA ORACIÓN', sentence: '[[Si bien la calle tendrá menos ruido|violet]], los repartos serán más difíciles.', idea: 'Una sola oración: la concesión depende de la idea principal, como en la clase 138.', en: 'A single sentence: the concession depends on the main clause, as in class 138.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«La propuesta es buena. Ahora bien, necesitamos un horario para los repartos». ¿Qué hace Hugo?', options: ['Acepta la propuesta y añade una condición.', 'Cambia de tema.', 'Rechaza la propuesta por completo.'], answer: 0, why: '«Ahora bien» acepta lo dicho y anuncia una condición u objeción importante; no rechaza la propuesta.', en: 'Hugo accepts the proposal and adds a condition.' },
            { prompt: '¿En qué frase el conector une dos oraciones independientes, separadas por un punto?', options: ['Aunque habrá menos ruido, los repartos serán difíciles.', 'Si bien habrá menos ruido, los repartos serán difíciles.', 'Habrá menos ruido. Sin embargo, los repartos serán difíciles.'], answer: 2, why: '«Sin embargo» empieza una oración nueva después del punto. «Si bien» y «aunque» forman una sola oración con la idea principal.', en: 'Which connector links two independent sentences?' },
          ] },
        ] },
        { title: 'Sin embargo, aun así, de todas formas · Linking sentences', mascot: '/brand/mascot/studying.webp', coach: '¿Contraste, insistencia o «da igual»? Contrast, insistence or “either way”?', blocks: [
          { kind: 'concept', tone: 'blue', label: 'CONECTORES ENTRE ORACIONES', question: '¿Unes dos oraciones completas y la segunda va en otra dirección?', en: 'These connectors do not subordinate: they link two complete sentences, each with its own verb, and can open the second one or sit in the middle between commas. Sin embargo and no obstante mark contrast (however, nevertheless). Aun así, con todo and así y todo insist that the result stands despite what was said. De todas formas (de todos modos, de todas maneras) plays the previous point down: whatever the case, what follows holds.', formula: ['oración 1. / ; + conector + , + oración 2', 'oración 2 con el conector en medio, entre comas'],
            meaning: 'No subordinan: unen dos oraciones completas, cada una con su verbo, y pueden abrir la segunda o ir en medio, entre comas. **Sin embargo** y **no obstante** marcan **contraste**. **Aun así**, **con todo** y **así y todo** insisten: conozco el obstáculo y el resultado **se mantiene**. **De todas formas** (de todos modos, de todas maneras) **quita importancia** a lo anterior: sea como sea, lo que sigue vale.',
            examples: [
              { es: 'El cierre será solo de prueba. [[Sin embargo|blue]], muchos comerciantes ya están preocupados.', en: 'The closure is only a trial. However, many shopkeepers are already worried.' },
              { es: 'La propuesta tiene, [[no obstante|blue]], un punto débil: el aparcamiento.', en: 'The proposal does, however, have a weak point: parking. In mid-position, between commas, it sounds formal and written.' },
              { es: 'Hugo perderá clientes que vienen en coche. [[Aun así|teal]], firma la petición.', en: 'Hugo will lose customers who come by car. Even so, he signs the petition.' },
              { es: 'No sé si la calle quedará bonita. [[De todas formas|teal]], vale la pena probar.', en: 'I don’t know if the street will look nice. Either way, it’s worth a try.' },
            ] },
          { kind: 'table', title: 'Matiz y registro · Nuance and register', head: ['Conector', 'Qué añade', 'Registro'], rows: [
            ['[[sin embargo|blue]]', 'contraste: lo que sigue va en otra dirección', 'neutro; muy frecuente por escrito'],
            ['[[no obstante|blue]]', 'el mismo contraste', 'formal: informes, cartas, noticias'],
            ['[[aun así|teal]]', 'a pesar de eso, el resultado se mantiene', 'neutro: oral y escrito'],
            ['[[así y todo|teal]]', 'a pesar de eso (= aun así)', 'neutro'],
            ['[[con todo|teal]]', 'a pesar de todo lo dicho; a menudo cierra un balance', 'formal, sobre todo escrito'],
            ['[[de todas formas|teal]] · de todos modos · de todas maneras', 'sea como sea, lo que sigue vale', 'neutro; muy frecuente en la conversación'],
          ], note: 'Puntuación: delante, **punto** o **punto y coma**; detrás, **coma**. En medio de la oración, entre comas: «La propuesta, sin embargo, llega tarde». **Aun así** se escribe sin tilde: aun = incluso.' },
          { kind: 'tip', icon: '💡', title: '¿Con «pero» o con «y»? · With “pero” or “y”?', text: '«Pero» y «aun así» pueden ir juntos, porque «aun así» refuerza: «Es caro, pero aun así lo compro». En cambio, **pero sin embargo** repite el mismo contraste dos veces y la norma recomienda evitarlo: elige uno. Con «y» sí es posible: «Lo sabía y, sin embargo, lo hizo».', en: '“Pero” can combine with “aun así”, which reinforces it. “Pero sin embargo”, however, says the same thing twice and is best avoided: choose one. “Y, sin embargo” is fine: “He knew, and yet he did it.”' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { context: 'Acta oficial de la asamblea.', prompt: 'La mayoría votó a favor del cierre. ___, la asociación pedirá un informe sobre los repartos.', options: ['Ya, pero', 'No obstante', 'Y eso que'], answer: 1, why: 'Un acta es un texto formal y aquí se unen dos oraciones con contraste: «no obstante». «Y eso que» y «ya, pero» son propios de la conversación.', en: 'The majority voted for the closure. Nevertheless, the association will request a report on deliveries.' },
            { prompt: 'Lucía sabe que habrá protestas. ___, va a defender la propuesta.', options: ['Aunque', 'Si bien', 'Aun así'], answer: 2, why: 'Oración nueva después de punto: hace falta un conector. «Aunque» y «si bien» introducen una oración que depende de otra; no pueden ir solos con coma detrás.', en: 'Lucía knows there will be protests. Even so, she is going to defend the proposal.' },
            { context: 'Hugo habla con Adela por teléfono.', prompt: 'No sé si podré ir a la asamblea. ___, te mando mis ideas por correo.', options: ['Si bien', 'De todas formas', 'No obstante'], answer: 1, why: '«De todas formas» = vaya o no vaya, las ideas llegan. «No obstante» sonaría demasiado formal en una llamada, y «si bien» no abre una oración independiente.', en: 'I don’t know if I’ll make it to the meeting. Either way, I’ll email you my ideas.' },
          ] },
        ] },
        { title: 'Ahora bien, eso sí, aunque = pero · Accept and qualify', mascot: '/brand/mascot/speaking.webp', coach: 'Sí, pero con condiciones. Yes, but on conditions.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'RESERVA Y MATIZ', question: '¿Aceptas lo anterior, pero quieres añadir una objeción o una condición?', en: 'Ahora bien accepts what has been said and announces something important that limits it, an objection or a condition (that said…); it is common in argument, spoken or written. Eso sí adds a point that balances or limits what came before, often a condition; it is very common in speech. Aunque, placed after the main clause, can mean “but”: it adds a reservation, takes the indicative and cannot be moved to the front.', formula: ['idea aceptada. Ahora bien, + objeción o condición', 'idea aceptada; eso sí, + matiz o condición', 'idea principal, aunque + indicativo (= pero)'],
            meaning: '**Ahora bien** acepta lo dicho y anuncia algo importante que lo limita: una objeción o una condición; es frecuente al argumentar, oralmente o por escrito. **Eso sí** añade un matiz que equilibra o limita lo anterior, a menudo una condición; es muy frecuente al hablar. **Aunque**, detrás de la idea principal, puede equivaler a **pero**: añade una reserva, va con indicativo y no se puede poner delante.',
            examples: [
              { es: 'Estoy a favor del cierre. [[Ahora bien|orange]], los camiones de reparto tienen que poder entrar antes de las diez.', en: 'I’m in favour of the closure. That said, delivery lorries must be able to get in before ten.' },
              { es: 'Te presto la carretilla; [[eso sí|orange]], devuélvemela antes del sábado.', en: 'I’ll lend you the wheelbarrow; just make sure you bring it back before Saturday.' },
              { es: 'La idea es buena, [[aunque no sé si los clientes la van a entender|orange]].', en: 'It’s a good idea, though I’m not sure customers will understand it: a reservation added at the end.' },
            ] },
          { kind: 'compare', title: '«Aunque» con dos valores · Two uses of aunque', columns: [
            { tone: 'violet', label: 'CONCESIVO', sentence: '[[Aunque perderé clientes|violet]], apoyo el cierre.', idea: 'El obstáculo no impide el resultado. Puede ir delante o detrás de la idea principal.', en: 'Concessive: the obstacle does not stop the result; it can go before or after the main clause.' },
            { tone: 'orange', label: 'ADVERSATIVO (= PERO)', sentence: 'Apoyo el cierre, [[aunque no sé si funcionará|orange]].', idea: 'Añade una reserva al final y se puede cambiar por «pero». Va con indicativo y siempre detrás.', en: 'Adversative: it works like “but”, adds a reservation, takes the indicative and always comes second.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Me parece bien que cierren la calle. ___, quiero saber dónde vamos a aparcar los vecinos.', options: ['Ahora bien', 'Así que', 'Y eso que'], answer: 0, why: 'Acepta la idea y plantea una objeción importante: «ahora bien». «Así que» introduce una consecuencia; «y eso que» va dentro de la oración, sin punto delante.', en: 'I’m fine with closing the street. That said, I want to know where residents will park.' },
            { context: 'Hugo le deja a Lucía la llave del almacén.', prompt: 'Te dejo la llave del almacén; ___, ciérralo bien al salir.', options: ['con todo', 'eso sí', 'no obstante'], answer: 1, why: 'Una condición en una conversación entre vecinos: «eso sí». «No obstante» y «con todo» son formales y no introducen condiciones.', en: 'I’ll leave you the key; just lock up properly when you leave.' },
            { prompt: '«Es una buena idea, aunque no sé si funcionará». ¿Por qué palabra puedes cambiar «aunque»?', options: ['porque', 'si', 'pero'], answer: 2, why: 'Este «aunque» añade una reserva al final: equivale a «pero».', en: 'Which word can replace “aunque” here?' },
          ] },
        ] },
        { title: 'Dentro de la oración: pese a, y eso que · Inside the sentence', mascot: '/autoestudio/mascot/noting.webp', coach: 'Del periódico a la conversación. From the newspaper to the chat.', blocks: [
          { kind: 'concept', tone: 'violet', label: 'CONCESIVAS: REPASO Y DOS FORMAS NUEVAS', question: '¿Prefieres una sola oración, con la concesión dentro?', en: 'You already know si bien and aun cuando (class 138). Pese a works like a pesar de and is typical of formal and journalistic writing: pese a + noun or infinitive, pese a que + indicative (a fact) or subjunctive (as with a pesar de que). Y eso que is colloquial: it comes after the main clause, takes the indicative and adds a fact that should have changed the outcome, often with surprise or complaint (“and that’s even though…”).', formula: ['si bien + indicativo · aun cuando + subjuntivo / indicativo (formal, clase 138)', 'pese a + nombre / infinitivo · pese a que + indicativo / subjuntivo (formal)', 'idea principal, y eso que + indicativo (coloquial)'],
            meaning: 'Ya conoces **si bien** y **aun cuando** (clase 138). **Pese a** funciona como «a pesar de» y es propio de textos formales y periodísticos: «pese a la lluvia», «pese a que llovía». **Y eso que** es coloquial: va **detrás** de la idea principal, con **indicativo**, y añade un dato que debería haber cambiado el resultado, a menudo con sorpresa o queja.',
            examples: [
              { es: '[[Pese a las protestas|violet]], el municipio mantiene la prueba.', en: 'Despite the protests, the council is keeping the trial: newspaper style.' },
              { es: '[[Pese a que el cierre es temporal|violet]], algunos comercios ya notan menos ventas.', en: 'Although the closure is temporary, some shops are already seeing fewer sales.' },
              { es: 'Hugo votó en contra, [[y eso que su hija va en bici a todas partes|violet]].', en: 'Hugo voted against it, and that’s even though his daughter cycles everywhere: colloquial, slightly surprised.' },
              { es: '[[Aun cuando los datos sean buenos|violet]], el municipio revisará la medida dentro de un año.', en: 'Even if the figures are good, the council will review the measure in a year’s time.' },
            ] },
          { kind: 'decide', title: '¿Qué estructura elijo? · Which structure?', steps: [
            { q: '¿Unes dos oraciones completas, con punto o punto y coma?', yes: 'Un conector: **sin embargo / no obstante** (contraste), **aun así / con todo** (el resultado se mantiene), **de todas formas** (sea como sea), **ahora bien / eso sí** (condición o reserva).', no: 'next' },
            { q: '¿Quieres una sola oración con la concesión dentro?', yes: '**si bien, pese a (que), aun cuando** en registro formal; **aunque** en cualquier registro; **y eso que** + indicativo, detrás y en la conversación.', no: 'Estás respondiendo en un debate oral: «Ya, pero…», «Puede que sí, pero…», «Tienes razón en que…, pero…» (siguiente paso).' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'No vino nadie del municipio, y eso que lo ___ por escrito.', options: ['pidamos', 'pidiéramos', 'pedimos'], answer: 2, why: '«Y eso que» va con indicativo: un hecho real que debería haber cambiado el resultado.', en: 'Nobody from the council came, even though we had asked in writing.' },
            { context: 'Titular de un periódico local.', prompt: '___ la lluvia, cientos de vecinos pasean por la calle del Mercado.', options: ['Y eso que', 'Sin embargo', 'Pese a'], answer: 2, why: 'Delante de un nombre («la lluvia») y en registro periodístico: «pese a». «Sin embargo» no va con un nombre, y «y eso que» pide un verbo y va detrás.', en: 'Despite the rain, hundreds of residents stroll along calle del Mercado.' },
          ] },
        ] },
        { title: 'Objetar en un debate · Objecting in a debate', mascot: '/brand/mascot/seated.webp', coach: 'Primero concede, después objeta. Concede first, then object.', blocks: [
          { kind: 'lead', text: 'En un debate, un «no» directo corta la conversación. Lo habitual es **conceder primero** y **objetar después**. Estas fórmulas cambian de registro y de fuerza.', en: 'In a debate, a flat “no” shuts the conversation down. Speakers usually concede first and object afterwards. These formulas vary in register and in strength.' },
          { kind: 'table', title: 'Fórmulas para objetar · Formulas for objecting', head: ['Fórmula', 'Qué hace', 'Registro'], rows: [
            ['[[Ya, pero…|orange]]', 'concede muy rápido y objeta', 'coloquial; con un tono seco puede sonar a que no escuchas'],
            ['[[Sí, de acuerdo, pero…|orange]]', 'acepta el punto y añade otro', 'neutro'],
            ['[[Puede que sí, pero…|orange]] · Puede que tengas razón, pero…', 'concede como posibilidad, sin comprometerse', 'neutro, cortés'],
            ['[[Tienes razón en que…, pero…|orange]]', 'concede un punto concreto y objeta en otro', 'neutro'],
            ['[[No digo que no…, pero…|orange]]', 'no niega el argumento del otro', 'neutro'],
            ['[[Es cierto que…; ahora bien,…|orange]]', 'acepta un hecho y anuncia una objeción importante', 'neutro o formal: reuniones, debates públicos'],
          ], note: 'Fíjate en el modo: **tener razón en que** + indicativo («Tienes razón en que **hay** mucho ruido»); **puede que** + subjuntivo («Puede que **tengas** razón»); **no digo que** + subjuntivo («No digo que la idea **sea** mala»).' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { context: 'Reunión formal con la concejala de Movilidad.', prompt: '¿Qué objeción es más adecuada?', options: ['Ya, ya, pero los repartos…', 'Ya, pero eso no se lo cree nadie.', 'Es cierto que el ruido ha bajado; ahora bien, los repartos siguen sin solución.'], answer: 2, why: 'En una reunión formal se concede un hecho («es cierto que…») y se objeta con «ahora bien». «Ya, pero» es coloquial y aquí suena brusco.', en: 'Formal meeting: which objection fits best?' },
            { prompt: 'Tienes razón en que la calle ___ más segura, pero los mayores necesitan el autobús.', options: ['será', 'fuera', 'sea'], answer: 0, why: '«Tener razón en que» presenta algo que el hablante acepta como cierto: indicativo («será»).', en: 'You’re right that the street will be safer, but older people need the bus.' },
            { prompt: 'Puede que ___ razón, pero yo prefiero esperar a ver los datos.', options: ['tengas', 'tendrás', 'tienes'], answer: 0, why: '«Puede que» va siempre con subjuntivo: «puede que tengas».', en: 'You may be right, but I’d rather wait and see the figures.' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: '¿Conector, conjunción o puntuación? Connector, conjunction or punctuation?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees cada frase con el error y tu alumno explica qué falla antes de ver la corrección: ¿el conector, el modo, la preposición o la puntuación?', self: 'Lee cada frase y piensa qué falla: ¿el conector, el modo, la preposición o la puntuación? Después toca para ver la corrección. (What’s wrong in each sentence?)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'La calle está cerrada, pero sin embargo pasan coches.', right: 'La calle está cerrada; sin embargo, pasan coches. / La calle está cerrada, pero pasan coches.', why: '«Pero» y «sin embargo» repiten el mismo contraste. Elige uno. (Don’t double the contrast.)' },
            { wrong: 'Sin embargo que perdemos clientes, apoyamos el cierre.', right: 'Aunque perdemos clientes, apoyamos el cierre.', why: '«Sin embargo» no introduce oraciones subordinadas ni lleva «que». Para una sola oración, usa «aunque» o «pese a que».' },
            { wrong: 'No vino nadie, y eso que lo hayamos anunciado.', right: 'No vino nadie, y eso que lo habíamos anunciado.', why: '«Y eso que» va con indicativo: un hecho real.' },
            { wrong: 'De todas las formas, mañana voto.', right: 'De todas formas, mañana voto.', why: 'Expresión fija sin artículo: de todas formas, de todos modos, de todas maneras.' },
            { wrong: 'Pese que hay protestas, la prueba sigue.', right: 'Pese a que hay protestas, la prueba sigue.', why: '«Pese» va siempre con «a»: pese a la lluvia, pese a que llueve.' },
            { wrong: 'Tienes razón que el ruido es un problema.', right: 'Tienes razón en que el ruido es un problema.', why: 'Se tiene razón **en** algo: tener razón en que. Sin «en» se oye en la conversación, pero en registro cuidado se mantiene.' },
            { wrong: 'El proyecto es caro sin embargo es necesario.', right: 'El proyecto es caro; sin embargo, es necesario.', why: 'Delante de «sin embargo», punto o punto y coma; detrás, coma.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'El proyecto es útil; ___, llega tarde.', options: ['sin embargo', 'pero sin embargo', 'sin embargo que'], answer: 0, why: 'Después de punto y coma, el conector solo, con coma detrás: «; sin embargo,».', en: 'The project is useful; however, it comes too late.' },
            { prompt: 'Votaron en contra, y eso que el informe ___ claro.', options: ['sea', 'era', 'fuera'], answer: 1, why: '«Y eso que» + indicativo: el informe era claro de verdad.', en: 'They voted against it, even though the report was clear.' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno cuenta una decisión reciente con dos oraciones unidas por «sin embargo» o «aun así» y añade una condición con «eso sí».' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'La asamblea de vecinos', coach: 'Toca cada conector marcado. Tap each marked connector.',
      steps: [
        { title: 'En el salón de la asociación · At the association hall', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Hugo, tu alumno es Lucía y los dos leen a Adela por turnos. Después tu alumno toca cada expresión marcada y explica qué función tiene.', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada y piensa: ¿contraste, insistencia, reserva u objeción? ¿Formal o coloquial? (Tap each marked phrase and think about its function and register.)' } },
          { kind: 'explore', title: '¿Cerramos la calle del Mercado?', setting: 'Salón de la asociación vecinal, siete de la tarde. Adela modera. Lucía y Hugo se conocen desde hace años y se tratan de tú. (The association hall at 7 p.m.: Adela chairs; Lucía and Hugo are old acquaintances.)', lines: [
            { who: 'Adela', text: 'Bueno, empezamos. El municipio quiere cerrar la calle del Mercado al tráfico durante un año. [[No obstante|blue]], antes de decidir nada, quiere oír a los vecinos.', en: 'Right, let’s start. The council wants to close calle del Mercado to traffic for a year. However, before deciding anything, it wants to hear from residents.' },
            { who: 'Lucía', text: 'Yo estoy a favor. Por la mañana hay tanto tráfico que los niños no pueden ir solos al colegio, [[y eso que está a dos calles|violet]].', en: 'I’m in favour. In the morning there’s so much traffic that children can’t walk to school on their own, and it’s only two streets away.' },
            { who: 'Hugo', text: '[[Ya, pero|orange]] ¿y los repartos? A mí me traen el material en camión tres veces por semana.', en: 'Sure, but what about deliveries? My stock comes by lorry three times a week.' },
            { who: 'Lucía', text: '[[Tienes razón en que|orange]] es un problema. [[Ahora bien|orange]], se puede poner un horario de carga y descarga, como en otros barrios.', en: 'You’re right that it’s a problem. That said, there could be loading hours, as in other neighbourhoods.' },
            { who: 'Hugo', text: '[[Puede que sí|orange]], pero muchos de mis clientes vienen en coche desde otros barrios. Si no pueden aparcar, se van al centro comercial.', en: 'Maybe, but many of my customers drive in from other areas. If they can’t park, they’ll go to the shopping centre.' },
            { who: 'Adela', text: 'Según el municipio, en otras ciudades los comercios vendieron más con calles peatonales. [[Con todo|teal]], cada barrio es distinto.', en: 'According to the council, shops in other cities sold more once streets were pedestrianised. All the same, every neighbourhood is different.' },
            { who: 'Hugo', text: 'Mira, yo [[no digo que la idea sea mala|orange]]. Llevo treinta años aquí y el ruido es insoportable. [[Sin embargo|blue]], un año entero es mucho tiempo para una prueba.', en: 'Look, I’m not saying it’s a bad idea. I’ve been here thirty years and the noise is unbearable. But a whole year is a long time for a trial.' },
            { who: 'Lucía', text: '[[Si bien un año parece mucho|violet]], con menos tiempo no se ven los resultados.', en: 'A year may seem long, but with less time you can’t see the results.' },
            { who: 'Hugo', text: 'Bueno… lo voto. [[Eso sí|orange]], quiero que la asociación pida por escrito el horario de carga.', en: 'All right… I’ll vote for it. But I want the association to request the loading hours in writing.' },
            { who: 'Adela', text: 'Me parece justo. Lo pondremos en el acta, [[aunque la última palabra la tiene el municipio|orange]].', en: 'That seems fair. We’ll put it in the minutes, though the final say lies with the council.' },
            { who: 'Lucía', text: 'Gracias, Hugo. Sé que a ti te cuesta más que a nadie.', en: 'Thanks, Hugo. I know it’s harder for you than for anyone.' },
            { who: 'Hugo', text: 'Ya me conoces: protesto mucho. [[De todas formas|teal]], si en seis meses no funciona, vuelvo a la asamblea a quejarme.', en: 'You know me: I complain a lot. Either way, if it isn’t working in six months, I’ll be back at the meeting to complain.' },
          ], notes: {
            'No obstante': 'Contraste en registro formal: Adela abre una asamblea y habla como presidenta. Va después de punto y con coma detrás.',
            'y eso que está a dos calles': 'Coloquial, detrás de la idea principal y con indicativo: el colegio está muy cerca, y aun así los niños no pueden ir solos. El dato «debería» haber facilitado las cosas.',
            'Ya, pero': 'Fórmula coloquial para objetar: Hugo concede muy rápido y pasa a su problema. Entre vecinos que se conocen funciona; en una reunión formal sonaría brusco.',
            'Tienes razón en que': 'Lucía concede un punto concreto antes de responder. Tener razón **en** que + indicativo: el problema existe.',
            'Ahora bien': 'Después de conceder, Lucía anuncia lo importante: una solución que limita la objeción de Hugo. Punto delante, coma detrás.',
            'Puede que sí': 'Hugo concede como posibilidad, sin comprometerse («quizá tengas razón»), y objeta con «pero».',
            'Con todo': 'A pesar de todo lo dicho: Adela da el dato y lo matiza. Es un conector formal, propio de alguien que modera y resume.',
            'no digo que la idea sea mala': 'No digo que + subjuntivo: Hugo no niega el argumento contrario antes de objetar. Suaviza la crítica.',
            'Sin embargo': 'Contraste entre dos oraciones: el ruido es un problema real, pero un año le parece demasiado. Neutro y muy frecuente.',
            'Si bien un año parece mucho': 'Concesión formal dentro de la oración (clase 138), con indicativo: Lucía acepta el dato de Hugo y lo rebate en la misma frase.',
            'Eso sí': 'Hugo acepta y pone una condición. Muy frecuente en la conversación: «lo voto; eso sí, con esta condición».',
            'aunque la última palabra la tiene el municipio': '«Aunque» = pero: añade una reserva al final, con indicativo. No se puede poner delante sin cambiar el sentido.',
            'De todas formas': 'Sea como sea: Hugo quita peso a lo anterior y añade lo que hará en cualquier caso. Muy frecuente al hablar.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Qué le preocupa a Hugo?', options: ['Los repartos y los clientes que vienen en coche.', 'El ruido de las terrazas.', 'Que los niños vayan solos al colegio.'], answer: 0, why: '«¿Y los repartos?» y «muchos de mis clientes vienen en coche desde otros barrios».', en: 'What worries Hugo?' },
            { prompt: '¿Qué condición pone Hugo para votar a favor?', options: ['Que el municipio construya un aparcamiento.', 'Que la prueba dure solo seis meses.', 'Que la asociación pida por escrito un horario de carga.'], answer: 2, why: '«Eso sí, quiero que la asociación pida por escrito el horario de carga».', en: 'What condition does Hugo set for his vote?' },
            { prompt: '¿Qué hará Hugo si en seis meses la prueba no funciona?', options: ['Se mudará a otro barrio.', 'Volverá a la asamblea a quejarse.', 'Cerrará la ferretería.'], answer: 1, why: '«Si en seis meses no funciona, vuelvo a la asamblea a quejarme».', en: 'What will Hugo do if the trial isn’t working in six months?' },
          ] },
        ] },
        { title: 'El resumen en el grupo · The summary in the group chat', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'chat-fill', title: 'Grupo de la asociación · Association group chat', lines: [
            { who: 'Adela', text: 'Resumen de la asamblea: apoyamos la prueba de un año. ___, pediremos por escrito un horario de carga y descarga.', options: ['Pese a', 'Eso sí', 'Y eso que'], answer: 1, why: 'Adela acepta la prueba y añade una condición: «eso sí», natural en un chat entre vecinos.' },
            { who: 'Marta', text: 'Yo no pude ir, ___ lo tenía apuntado en la agenda.', options: ['ahora bien', 'y eso que', 'no obstante'], answer: 1, why: 'Coloquial, detrás de la idea principal y con indicativo: lo tenía apuntado y aun así no fue.' },
            { who: 'Adela', text: 'No pasa nada. ___, el acta estará en la web el lunes.', options: ['De todas formas', 'Si bien', 'Pese a que'], answer: 0, why: 'Sea como sea, Marta podrá leer el acta: «de todas formas». «Si bien» y «pese a que» no abren una oración independiente.' },
            { who: 'Hugo', text: 'Yo voté a favor, ___ sigo pensando que un año es mucho.', options: ['aunque', 'sin embargo que', 'pese a'], answer: 0, why: '«Aunque» = pero: añade una reserva al final, con indicativo («sigo pensando»).' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: «¿Hay en tu barrio o en tu ciudad algo que querrías cambiar?». Tu alumno responde con una ventaja, un «sin embargo» y un «eso sí».' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Función, registro y puntuación. Function, register and punctuation.',
      steps: [
        { title: 'Elige el conector · Pick the connector', blocks: [
          { kind: 'choice', items: [
            { context: 'Carta de la asociación al municipio.', prompt: 'El cierre ha reducido el ruido. ___, los comercios piden ayudas para los primeros meses.', options: ['No obstante', 'De todas las formas', 'Así que'], answer: 0, why: 'Contraste entre dos oraciones en un texto formal: «no obstante». «Así que» introduce una consecuencia, y la otra opción no existe con artículo.', en: 'The closure has reduced noise. Nevertheless, shops are asking for support during the first months.' },
            { prompt: 'Llovió toda la mañana. ___, la feria de la calle del Mercado se llenó de gente.', options: ['Aun así', 'Aunque', 'Por eso'], answer: 0, why: 'A pesar de la lluvia, el resultado se mantiene: «aun así». «Por eso» daría la lluvia como causa, y «aunque» no puede ir solo con coma.', en: 'It rained all morning. Even so, the fair on calle del Mercado was packed.' },
            { context: 'Lucía habla con una vecina.', prompt: 'No sé si la propuesta saldrá adelante. ___, yo voy a votar a favor.', options: ['Pese a', 'Si bien', 'De todos modos'], answer: 2, why: 'Salga adelante o no, Lucía votará a favor: «de todos modos» = sea como sea.', en: 'I don’t know if the proposal will go through. Either way, I’m voting for it.' },
            { prompt: 'Te ayudo a montar el puesto; ___, a las ocho me tengo que ir.', options: ['eso sí', 'con todo', 'pese a que'], answer: 0, why: 'Una condición o limitación en la conversación: «eso sí».', en: 'I’ll help you set up the stall; I do have to leave at eight, though.' },
            { context: 'Informe final del primer mes.', prompt: 'Ha habido quejas por los repartos y algún problema de acceso. ___, el balance es positivo.', options: ['Con todo', 'Y eso que', 'Eso sí'], answer: 0, why: '«Con todo» = teniendo en cuenta todo lo dicho, el resultado se mantiene. Es formal y típico al cerrar un balance.', en: 'There have been complaints about deliveries and some access problems. All in all, the outcome is positive.' },
          ] },
        ] },
        { title: '¿Conversación o texto formal? · Chat or formal text?', blocks: [
          { kind: 'classify', title: '¿Dónde encaja mejor cada frase? · Where does each sentence fit best?', categories: [
            { id: 'oral', label: 'CONVERSACIÓN · entre vecinos, en el bar, en un chat', tone: 'orange' },
            { id: 'formal', label: 'TEXTO FORMAL · acta, informe, carta al municipio', tone: 'blue' },
          ], items: [
            { text: 'Y eso que nos lo prometieron en la última reunión.', answer: 'oral', why: '«Y eso que» es coloquial, propio de la conversación.' },
            { text: 'No obstante, la asociación solicita un estudio sobre el pequeño comercio.', answer: 'formal', why: '«No obstante» y «solicita» marcan un registro formal y escrito.' },
            { text: 'Ya, pero ¿quién va a pagar los bancos nuevos?', answer: 'oral', why: '«Ya, pero» es una fórmula coloquial para objetar.' },
            { text: 'Si bien la medida ha reducido el ruido, debe garantizarse el acceso de las ambulancias.', answer: 'formal', why: '«Si bien» + indicativo y la pasiva refleja («debe garantizarse») son propios de un texto formal.' },
            { text: 'De todas formas, mañana te cuento cómo fue.', answer: 'oral', why: '«De todas formas» con «te cuento»: conversación entre conocidos.' },
            { text: 'Con todo, el balance del primer trimestre es positivo.', answer: 'formal', why: '«Con todo» es un conector formal que suele cerrar un balance.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'El horario de carga es corto, sin embargo es suficiente.', ok: false, options: ['El horario de carga es corto; sin embargo, es suficiente.', 'El horario de carga es corto, pero sin embargo es suficiente.', 'El horario de carga es corto sin embargo, es suficiente.'], answer: 0, why: 'Punto y coma (o punto) delante de «sin embargo» y coma detrás. «Pero sin embargo» es redundante.' },
            { sentence: 'Hugo no está convencido; aun así, ha firmado la petición.', ok: true, why: 'Correcta: punto y coma, «aun así» sin tilde y coma detrás.' },
            { sentence: 'Pese que el cierre es temporal, algunos vecinos ya protestan.', ok: false, options: ['Pese a que el cierre es temporal, algunos vecinos ya protestan.', 'Pese a el cierre es temporal, algunos vecinos ya protestan.', 'Pese de que el cierre es temporal, algunos vecinos ya protestan.'], answer: 0, why: 'Con un verbo conjugado: «pese a que». «Pese a» sin «que» solo va con un nombre o un infinitivo.' },
            { sentence: 'La terraza se llenó, y eso que hiciera frío.', ok: false, options: ['La terraza se llenó, y eso que hacía frío.', 'La terraza se llenó, y eso que haga frío.', 'La terraza se llenó, y eso que hará frío.'], answer: 0, why: '«Y eso que» + indicativo: un hecho real del pasado, «hacía frío».' },
            { sentence: 'La propuesta, no obstante, deja sin resolver el problema del aparcamiento.', ok: true, why: 'Correcta: «no obstante» en medio de la oración, entre comas.' },
            { sentence: 'Tienes razón que el autobús tarda más ahora.', ok: false, options: ['Tienes razón en que el autobús tarde más ahora.', 'Tienes razón en que el autobús tarda más ahora.', 'Tienes razón de que el autobús tarde más ahora.'], answer: 1, why: 'Tener razón **en** que + indicativo: aceptas como cierto que el autobús tarda más.' },
          ] },
        ] },
        { title: 'Tres meses después · Three months later', blocks: [
          { kind: 'chat-fill', title: 'Hugo y su hija Nuria en la ferretería · Hugo and his daughter Nuria', lines: [
            { who: 'Nuria', text: 'Papá, han pasado tres meses y las ventas no han bajado. ___, ¿sigues pensando que fue un error?', options: ['Pese a que', 'Así y todo', 'Si bien'], answer: 1, why: '«Así y todo» = aun así: a pesar de ese dato, ¿mantienes tu opinión? «Si bien» y «pese a que» no abren una oración independiente.' },
            { who: 'Hugo', text: '___, pero es porque ha sido verano. En invierno ya veremos.', options: ['Y eso que', 'Puede que sí', 'Puede que sea'], answer: 1, why: 'Hugo concede como posibilidad y objeta: «Puede que sí, pero…».' },
            { who: 'Nuria', text: 'Tienes razón en que el invierno ___ distinto, pero la gente ya se ha acostumbrado a pasear por aquí.', options: ['sea', 'fuera', 'será'], answer: 2, why: 'Tener razón en que + indicativo: Nuria acepta como cierto que el invierno será distinto.' },
            { who: 'Hugo', text: 'Ya, ya. Los repartos funcionan bien, ___: el camión entra a las ocho y a las nueve ya se ha ido.', options: ['no obstante', 'pese a', 'eso sí'], answer: 2, why: '«Eso sí» al final reconoce un punto a favor que equilibra sus quejas: muy natural al hablar.' },
            { who: 'Nuria', text: 'Entonces, ¿vas a votar a favor de hacerlo permanente?' },
            { who: 'Hugo', text: 'No lo sé. ___, primero quiero ver las cuentas de diciembre.', options: ['De todos modos', 'Y eso que', 'Si bien'], answer: 0, why: 'Sea cual sea su voto, primero quiere ver las cuentas: «de todos modos».' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['La', 'idea', 'es', 'buena;', 'ahora', 'bien,', 'el', 'plazo', 'es', 'corto'], accept: ['La idea es buena; ahora bien, el plazo es corto'], en: 'The idea is good; that said, the deadline is tight.' },
            { tiles: ['Hugo', 'votó', 'a', 'favor,', 'y', 'eso', 'que', 'tenía', 'dudas'], accept: ['Hugo votó a favor, y eso que tenía dudas'], en: 'Hugo voted in favour, even though he had doubts.' },
            { tiles: ['La', 'calle', 'estará', 'cerrada;', 'eso', 'sí,', 'las', 'ambulancias', 'podrán', 'pasar'], accept: ['La calle estará cerrada; eso sí, las ambulancias podrán pasar'], en: 'The street will be closed; ambulances will be able to get through, though.' },
          ] },
        ] },
        { title: 'Reformula · Rephrase', blocks: [
          { kind: 'rewrite', title: 'Cambia la estructura · Change the structure', items: [
            { prompt: 'Habrá menos aparcamiento, pero la asociación apoya la prueba.', instruction: 'Dos oraciones. Usa «sin embargo» en la segunda.', accept: ['Habrá menos aparcamiento. Sin embargo, la asociación apoya la prueba', 'Habrá menos aparcamiento. La asociación, sin embargo, apoya la prueba'] },
            { prompt: 'Aunque los comerciantes protestaron, el municipio mantuvo la prueba.', instruction: 'Registro de periódico: empieza con «Pese a las…».', accept: ['Pese a las protestas de los comerciantes, el municipio mantuvo la prueba', 'Pese a las quejas de los comerciantes, el municipio mantuvo la prueba'] },
            { prompt: 'Nadie entendió el informe. Lo leímos dos veces.', instruction: 'Una sola oración, coloquial, con «y eso que».', accept: ['Nadie entendió el informe, y eso que lo leímos dos veces', 'Nadie entendió el informe, y eso que nos lo leímos dos veces'] },
            { prompt: 'La calle es más tranquila. Pero los repartos son un problema.', instruction: 'Una oración formal que empiece con «Si bien».', accept: ['Si bien la calle es más tranquila, los repartos son un problema', 'Si bien la calle es más tranquila, los repartos siguen siendo un problema'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno defiende en voz alta una opinión sobre su ciudad en tres oraciones: una ventaja, un «sin embargo» y un «con todo» o «aun así».' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'La radio del barrio', coach: 'Primero la idea, después los detalles. Gist first, then details.',
      steps: [
        { title: 'Barrio al día · The local news', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general. Segunda escucha: tu alumno anota cada conector y dice si marca contraste, insistencia, reserva o concesión dentro de la oración. Después, las preguntas.', self: 'Escucha una vez para la idea general y otra para los detalles. Anota cada conector: ¿contraste, insistencia, reserva o concesión dentro de la oración? (Listen once for the gist and once for the details.)' } },
          { kind: 'listen', title: 'Barrio al día', channel: 'RADIO DE LA ALAMEDA · RESUMEN SEMANAL', src: '/audio/grammar-live/456.mp3',
            before: '«Barrio al día» es el resumen semanal de la radio del barrio. El locutor cuenta cómo fue la asamblea. ¿Qué conectores esperas oír en una crónica de radio: más formales o más coloquiales? (What kind of connectors do you expect in a radio news round-up?)',
            gist: { prompt: '¿De qué trata el programa? · What is the piece about?', options: ['De la apertura de un centro comercial.', 'De una entrevista con la concejala de Movilidad.', 'Del resultado de la asamblea sobre el cierre de la calle.'], answer: 2, why: 'Resume la votación, las dudas de los comerciantes, la condición de Hugo y lo que promete el municipio.', en: 'It summarises the assembly’s vote on closing the street.' },
            details: [
              { prompt: '¿Qué temen los comerciantes?', options: ['Pagar más impuestos.', 'Perder clientes.', 'Que haya más ruido.'], answer: 1, why: '«Los comerciantes temen perder clientes».', en: 'What are the shopkeepers afraid of?' },
              { prompt: '¿Qué dice el municipio sobre otras ciudades?', options: ['Que allí la prueba fracasó.', 'Que allí cerraron muchas tiendas.', 'Que las calles peatonales han atraído más gente a las tiendas.'], answer: 2, why: '«Según el municipio, en otras ciudades las calles peatonales han atraído más gente a las tiendas».', en: 'What does the council say about other cities?' },
              { prompt: '¿Qué pidió Hugo Medina?', options: ['Más plazas de aparcamiento.', 'Un horario fijo para los repartos.', 'Que la prueba durara menos.'], answer: 1, why: '«Votó a favor; eso sí, pidió un horario fijo para los repartos».', en: 'What did Hugo Medina ask for?' },
              { prompt: '¿Qué promete el municipio?', options: ['Abrir la calle los fines de semana.', 'Bajar los alquileres de los locales.', 'Publicar cada tres meses los datos de ruido, tráfico y ventas.'], answer: 2, why: '«El municipio promete publicar cada tres meses los datos de ruido, de tráfico y de ventas».', en: 'What does the council promise?' },
            ],
            transcript: 'Buenas tardes y bienvenidos a «Barrio al día», en la radio de La Alameda. Como cada viernes, repasamos lo más importante de la semana. Ayer la asociación vecinal votó a favor de cerrar al tráfico la calle del Mercado durante un año. La decisión no fue fácil, [[y eso que|violet]] muchos vecinos llevaban meses quejándose del ruido. Los comerciantes temen perder clientes. [[Sin embargo|blue]], según el municipio, en otras ciudades las calles peatonales han atraído más gente a las tiendas. Hugo Medina, dueño de la ferretería, tenía muchas dudas. [[Aun así|teal]], votó a favor; [[eso sí|orange]], pidió un horario fijo para los repartos. [[Pese a la tensión de los últimos días|violet]], el debate fue tranquilo y respetuoso. ¿Saldrá bien la prueba? Nadie lo sabe. [[Ahora bien|orange]], el municipio promete publicar cada tres meses los datos de ruido, de tráfico y de ventas. [[De todas formas|teal]], si quieren dar su opinión, pueden escribirnos o pasar por la asociación los martes por la tarde. Nosotros seguiremos informando. Buen fin de semana.',
            reply: { teacher: 'Tú eres el locutor y abres los micrófonos a los oyentes. Tu alumno llama a la radio como vecino: concede un argumento con «Es cierto que…» o «Tienes razón en que…» y objeta con «sin embargo» o «ahora bien».', self: 'Llama a la radio en voz alta como vecino o vecina: concede un argumento con «Es cierto que…» y objeta con «sin embargo» o «ahora bien». (Call in to the radio show and give your view.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Debatir sin cortar la conversación', coach: 'Concede y objeta. Concede and object.',
      steps: [
        { title: 'Debates y matices · Debates and nuances', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas y defiendes a veces la postura contraria. Tu alumno concede antes de objetar y usa al menos dos conectores distintos en cada respuesta. Si falla la puntuación o el modo, tú repites la frase corregida y sigues.', self: 'Lee cada pregunta y responde en voz alta. Concede antes de objetar y usa al menos dos conectores distintos en cada respuesta. (Concede before objecting; use at least two different connectors.)' } },
          { kind: 'talk', cards: [
            { q: '¿Cerrarías al tráfico la calle principal de tu barrio o de tu ciudad? · Would you close your main street to traffic?', followUps: ['¿Quién saldría ganando y quién perdiendo? (Who would win and who would lose?)', '¿Qué condición pondrías?'], phrases: ['[[Sin embargo|blue]], …', '[[Ahora bien|orange]], …', '[[Eso sí|orange]], …'], hint: 'Da tu opinión, reconoce un problema con «sin embargo» y pon una condición con «ahora bien» o «eso sí».', example: 'Yo cerraría la avenida del centro: hay demasiado tráfico y casi no se puede pasear. Sin embargo, mucha gente mayor depende del autobús. Ahora bien, si se mantiene una línea de autobús eléctrico, creo que todos saldríamos ganando.', next: 'Ahora, una objeción cara a cara.' },
            { q: 'Eres Hugo. Lucía dice: «Con la calle cerrada, el barrio será mucho más agradable». Objeta sin cortar la conversación. · You are Hugo: object without shutting her down.', followUps: ['¿Y si el municipio da ayudas a los comercios?', '¿Qué te convencería del todo?'], phrases: ['[[Ya, pero|orange]] …', '[[Tienes razón en que|orange]] …, pero…', '[[Puede que sí|orange]], pero…'], hint: 'Concede primero (indicativo tras «tienes razón en que»; subjuntivo tras «puede que») y objeta después.', example: 'Tienes razón en que será más agradable, Lucía. Puede que incluso venga más gente a pasear. Ya, pero pasear no es comprar: mis clientes necesitan cargar sacos de cemento en el coche.', teacher: 'Tú eres Lucía y das tres argumentos seguidos. Tu alumno concede cada uno con una fórmula distinta antes de objetar.' },
            { q: 'Cuenta algo que salió mal aunque lo habías preparado todo. · Tell about something that went wrong despite careful planning.', followUps: ['¿Qué aprendiste?', '¿Lo repetirías?'], phrases: ['…, [[y eso que|violet]] …', '[[Aun así|teal]], …', '[[Con todo|teal]], …'], hint: 'Coloquial: «y eso que» + indicativo, detrás de la idea principal. Para el balance final, «aun así» o «con todo».', example: 'El año pasado organicé una cena sorpresa para mi hermana y llegó tarde, y eso que se lo había dicho a todos sus amigos. Se enfadó un poco. Aun así, al final fue una noche estupenda.' },
            { q: 'Un amigo te pide prestado algo valioso (el coche, la cámara, tu casa en vacaciones). Aceptas, pero pones condiciones. · Lend something valuable, with conditions.', followUps: ['¿Qué pasa si no cumple las condiciones?', '¿Hay algo que nunca prestarías?'], phrases: ['[[Eso sí|orange]], …', '[[De todas formas|teal]], …', '…, [[aunque|orange]] …'], hint: '«Eso sí» introduce la condición; «aunque» al final añade una reserva (= pero), con indicativo.', example: 'Claro que te dejo el coche para el fin de semana. Eso sí, devuélvemelo con el depósito lleno. Es bastante viejo, aunque nunca me ha dejado tirado. De todas formas, te paso el teléfono del seguro, por si acaso.', next: 'Ahora, en el trabajo.' },
            { q: 'En una reunión de trabajo, tu jefa propone trabajar cuatro días a la semana con jornadas más largas. Responde de forma formal. · Respond formally at a work meeting.', followUps: ['¿Qué pasaría con los clientes los viernes?', '¿Qué alternativa propones?'], phrases: ['[[Es cierto que|orange]] …; [[ahora bien|orange]], …', '[[No obstante|blue]], …', '[[Si bien|violet]] …, …'], hint: 'Registro formal: nada de «ya, pero» ni «y eso que». Concede un hecho y objeta con «ahora bien» o «no obstante».', example: 'Es cierto que tener los viernes libres mejoraría la vida de muchos de nosotros; ahora bien, diez horas al día son demasiadas para un trabajo que exige tanta concentración. Si bien la idea me parece interesante, propondría probarla primero tres meses. No obstante, estoy dispuesta a intentarlo.', teacher: 'Tú eres la jefa y respondes a cada objeción con un argumento nuevo. Tu alumno mantiene el registro formal.' },
            { q: '¿Las redes sociales mejoran o empeoran los debates públicos? · Do social networks improve or worsen public debate?', followUps: ['¿Cómo te informas tú?', '¿Qué cambiarías de las redes?'], phrases: ['[[No digo que no|orange]] …, pero…', '[[Sin embargo|blue]], …', '[[De todos modos|teal]], …'], hint: 'No digo que + subjuntivo («no digo que no sean útiles»); después, el contraste y tu conclusión.', example: 'No digo que las redes no sean útiles, pero muchas veces premian al que grita más. Sin embargo, gracias a ellas se conocen noticias que antes no salían en ningún sitio. De todos modos, yo contrasto siempre lo que leo.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno pregunta y tú respondes con algún error a propósito («pero sin embargo», «y eso que lo hayamos dicho»). Tu alumno lo detecta y lo corrige.', self: 'Ahora haz tú las preguntas en voz alta y respóndelas defendiendo la postura contraria. (Now ask the questions aloud and argue the opposite side.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Una aportación formal', coach: 'Concede, objeta y propone. Concede, object, propose.',
      steps: [
        { title: 'La consulta pública · The public consultation', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos cada conector: ¿qué función tiene, lleva la puntuación correcta y encaja en un texto formal? Después tu alumno lee el texto en voz alta.', self: 'Escribe tu texto y toca «Revisar mi texto». Después repasa cada conector: ¿qué función tiene, lleva la puntuación correcta y encaja en un texto formal? (Check each connector’s function, punctuation and register.)' } },
          { kind: 'write', title: 'Mi opinión sobre la calle del Mercado · My view on the street closure', situation: 'El municipio abre una consulta pública sobre el cierre de la calle del Mercado. Escribe, como vecino o vecina de La Alameda (o sobre un cambio real en tu ciudad), un texto formal para la concejala de Movilidad: reconoce las ventajas, plantea tus objeciones y propón condiciones. (Write a formal contribution to the council’s public consultation: acknowledge the advantages, raise objections and propose conditions.)', task: [
            'Reconoce una ventaja y contrasta con «sin embargo» o «no obstante», con la puntuación correcta. (Contrast two sentences.)',
            'Concede dentro de una oración con «si bien» o «pese a (que)». (Concede inside a sentence.)',
            'Plantea una condición o una objeción con «ahora bien». (Add a condition.)',
            'Cierra con un balance: «con todo» o «aun así». (Sum up.)',
            'Registro formal, de usted, sin fórmulas coloquiales como «ya, pero» o «y eso que». (Formal register.)',
          ], starters: ['Estimada señora concejala:', 'Le escribo como…', 'Es indudable que…', 'Si bien…,', 'Pese a que…,', 'No obstante,…', 'Ahora bien, pido…', 'Con todo,…', 'Quedo a su disposición para cualquier aclaración.'],
            words: ['sin embargo', 'no obstante', 'si bien', 'pese a', 'ahora bien', 'con todo', 'aun así', 'propuesta', 'condición', 'atentamente'],
            model: 'Estimada señora concejala: Le escribo como vecino de La Alameda y propietario de una ferretería en la calle del Mercado. [[Si bien|violet]] el tráfico ha sido un problema durante años, el cierre total de la calle me plantea algunas dudas. Es indudable que habrá menos ruido y que los niños podrán ir solos al colegio. [[No obstante|blue]], muchos comercios dependen de clientes que llegan en coche desde otros barrios. [[Pese a que|violet]] el municipio ha prometido nuevas plazas de aparcamiento, todavía no sabemos dónde estarán. Apoyo la prueba de un año. [[Ahora bien|orange]], pido tres condiciones: un horario fijo de carga y descarga, acceso garantizado para ambulancias y taxis, y la publicación trimestral de los datos de ventas. No quiero que estas objeciones se entiendan como un rechazo. [[Con todo|teal]], creo que el barrio puede ganar mucho con esta medida si se escucha a quienes trabajamos en él. Quedo a su disposición para cualquier aclaración. Atentamente, Hugo Medina.',
            minWords: 120,
            checks: [
              { label: 'Un conector de contraste entre oraciones (sin embargo, no obstante)', pattern: '(?<!\\p{L})(?:sin\\s+embargo|no\\s+obstante)(?!\\p{L})', tip: 'Une dos oraciones con «Sin embargo,…» o «No obstante,…» después de un punto.' },
              { label: 'Una concesión dentro de la oración (si bien, pese a)', pattern: '(?<!\\p{L})(?:si\\s+bien|pese\\s+a)(?!\\p{L})', tip: 'Concede dentro de una oración: «Si bien el tráfico es un problema,…» o «Pese a que…».' },
              { label: 'Una condición u objeción con «ahora bien»', pattern: '(?<!\\p{L})ahora\\s+bien(?!\\p{L})', tip: 'Acepta la propuesta y añade tu condición: «Apoyo la prueba. Ahora bien, pido…».' },
              { label: 'Un balance al principio de oración (con todo, aun así, así y todo)', pattern: '(?:^|[.;:]\\s*)(?:con\\s+todo|aun\\s+así|así\\s+y\\s+todo)\\s*,', tip: 'Cierra con un balance: «Con todo, creo que…» o «Aun así, apoyo…».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})pero\\s*,?\\s*sin\\s+embargo(?!\\p{L})', why: '**Pero sin embargo** es redundante: elige «pero» o «sin embargo».' },
              { pattern: '(?<!\\p{L})pese\\s+que(?!\\p{L})', why: 'Escribe **pese a que**: «pese» va siempre con «a».' },
              { pattern: '(?<!\\p{L})aún\\s+así(?!\\p{L})', why: '**Aun así** se escribe sin tilde: aquí «aun» significa «incluso».' },
              { pattern: '(?<!\\p{L})(?:ya,?\\s+pero|y\\s+eso\\s+que)(?!\\p{L})', why: '«Ya, pero» y «y eso que» son coloquiales. En un texto formal, usa **no obstante**, **si bien** o **pese a que**.' },
              { pattern: '(?:^|[.;]\\s*)(?:sin\\s+embargo|no\\s+obstante)\\s+\\p{L}', why: 'Después de **sin embargo** o **no obstante** al principio de una oración, escribe coma: «No obstante, muchos comercios…».' },
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
            { tone: 'blue', label: 'CONTRASTE', formula: 'oración. Sin embargo / No obstante, oración', example: 'Habrá menos ruido. Sin embargo, los repartos serán difíciles.', caption: 'punto o punto y coma delante, coma detrás; «no obstante», más formal', en: 'contrast between two sentences; no obstante is more formal; never “pero sin embargo”' },
            { tone: 'teal', label: 'A PESAR DE ESO', formula: 'aun así · así y todo · con todo · de todas formas', example: 'Tenía dudas. Aun así, votó a favor.', caption: 'el resultado se mantiene; «de todas formas»: sea como sea', en: 'the result stands despite what was said; de todas formas plays the previous point down' },
            { tone: 'orange', label: 'RESERVA Y OBJECIÓN', formula: 'ahora bien · eso sí · …, aunque + ind. · Ya, pero… · Tienes razón en que…, pero…', example: 'Lo voto. Eso sí, quiero un horario de carga.', caption: 'aceptas y pones una condición o una objeción', en: 'you accept and then add a condition or an objection; choose the formula by register' },
            { tone: 'violet', label: 'DENTRO DE LA ORACIÓN', formula: 'si bien · pese a (que) · aun cuando · …, y eso que + ind.', example: 'Votó en contra, y eso que su hija va en bici.', caption: '«pese a», formal; «y eso que», coloquial y detrás', en: 'one sentence with the concession inside: pese a is formal, y eso que is colloquial and comes second' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Hazte tres preguntas. **¿Una oración o dos?** Dos oraciones → conector con punto o punto y coma delante y coma detrás; una sola → si bien, pese a que, aunque, y eso que. **¿Qué quieres hacer?** Contrastar (sin embargo), mantener el resultado (aun así, con todo), quitar importancia (de todas formas) o poner una condición (ahora bien, eso sí). **¿Dónde estás?** En un informe, no obstante, con todo, si bien, pese a; en la conversación, ya, pero; eso sí; y eso que.', en: 'Ask yourself three questions. One sentence or two? Two sentences need a connector with a full stop or semicolon before it and a comma after; one sentence takes si bien, pese a que, aunque or y eso que. What do you want to do? Contrast, keep the result, play the point down or add a condition. Where are you? In a report, no obstante, con todo, si bien, pese a; in conversation, ya, pero; eso sí; y eso que.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'El vuelo salió con retraso. ___, llegamos a tiempo a la boda.', options: ['Aunque', 'Pese a', 'Aun así'], answer: 2, why: 'Oración nueva después de punto: un conector. «Aun así» = a pesar de eso.', en: 'The flight left late. Even so, we got to the wedding on time.' },
            { context: 'Correo formal a un cliente.', prompt: 'Su pedido está listo. ___, el envío se retrasará dos días por la huelga de transportes.', options: ['Ya, pero', 'No obstante', 'Y eso que'], answer: 1, why: 'Contraste entre dos oraciones en un correo formal: «no obstante».', en: 'Your order is ready. However, delivery will be delayed by two days due to the transport strike.' },
            { prompt: 'Se quedó dormido, y eso que ___ tres alarmas.', options: ['había puesto', 'hubiera puesto', 'haya puesto'], answer: 0, why: '«Y eso que» + indicativo: un hecho real anterior, «había puesto».', en: 'He overslept, even though he had set three alarms.' },
            { prompt: 'Puedes usar mi estudio el fin de semana; ___, riega las plantas.', options: ['si bien', 'eso sí', 'con todo'], answer: 1, why: 'Una condición en la conversación: «eso sí».', en: 'You can use my studio at the weekend; just water the plants.' },
            { prompt: 'El hotel es precioso, ___ el desayuno deja mucho que desear.', options: ['aunque', 'sin embargo que', 'pese a'], answer: 0, why: '«Aunque» = pero: añade una reserva al final, con indicativo.', en: 'The hotel is beautiful, though the breakfast leaves a lot to be desired.' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Ahora, en una empresa. Now, at a company.', blocks: [
          { kind: 'lead', text: 'En una empresa de diseño, el equipo debate la semana de cuatro días. Ana toma notas rápidas; tú las pasas al acta formal de la reunión.', en: 'At a design company, the team is debating a four-day week. Ana jots down quick notes; you turn them into the formal minutes of the meeting.' },
          { kind: 'rewrite', title: 'Las notas de Ana · Ana’s notes', items: [
            { prompt: 'La semana de cuatro días es atractiva, pero las jornadas serían de diez horas.', instruction: 'Dos oraciones, registro formal: usa «No obstante».', accept: ['La semana de cuatro días es atractiva. No obstante, las jornadas serían de diez horas', 'La semana de cuatro días es atractiva. Las jornadas, no obstante, serían de diez horas'] },
            { prompt: 'Aunque el equipo está cansado, ha cumplido todos los plazos.', instruction: 'Registro formal: empieza con «Si bien».', accept: ['Si bien el equipo está cansado, ha cumplido todos los plazos'] },
            { prompt: 'Acepto el cambio. Pero quiero los viernes libres.', instruction: 'Pon la condición con «Ahora bien».', accept: ['Acepto el cambio. Ahora bien, quiero los viernes libres'] },
          ] },
        ] },
        { title: 'Ampliación · Del bar al informe · Extension', mascot: '/brand/mascot/portrait.webp', coach: 'Opcional. Optional.', blocks: [
          { kind: 'lead', text: 'Para estudiantes fuertes o si queda tiempo: el mismo argumento cambia de forma según el registro. «Ya, pero…» se convierte en «No obstante,…»; «y eso que» en «pese a que»; «de todas formas» en «en cualquier caso». Y un adelanto: en la conversación también se concede con el **futuro**: «**Será** muy práctico, pero a mí no me convence» = acepto que puede ser práctico, pero… Lo estudiarás en la clase 161; hoy solo tienes que reconocerlo.', en: 'For strong students or spare time: the same argument changes shape with register. And a preview: in conversation people also concede with the future tense, “Será muy práctico, pero…” meaning “it may well be practical, but…”. You will study it in class 161; for now, just recognise it.' },
          { kind: 'choice', title: 'Cambia de registro · Shift the register', items: [
            { prompt: 'Pasa a registro formal: «Ya, pero los repartos son un problema».', options: ['Y eso que los repartos son un problema.', 'Ya, no obstante, los repartos son un problema.', 'No obstante, los repartos siguen siendo un problema.'], answer: 2, why: '«No obstante» es la versión formal del contraste; «ya» y «y eso que» son coloquiales.', en: 'Make it formal.' },
            { prompt: 'Pasa a registro formal: «Votaron que no, y eso que el informe era favorable».', options: ['Si bien el informe sea favorable, votaron en contra.', 'Pese a que el informe era favorable, votaron en contra.', 'El informe era favorable, ya, pero votaron que no.'], answer: 1, why: '«Pese a que» + indicativo conserva el hecho real en registro formal. «Si bien» no admite subjuntivo.', en: 'Make it formal.' },
            { prompt: '«Será muy práctico, pero a mí no me convence». ¿Qué expresa «será» aquí?', options: ['Una orden.', 'Una predicción sobre el futuro.', 'Una concesión: acepto que puede ser práctico.'], answer: 2, why: 'Es un futuro concesivo: el hablante concede el argumento antes de objetar con «pero».', en: 'What does “será” express here?' },
            { prompt: 'Pasa a la conversación: «Con todo, el balance es positivo».', options: ['Aun así, al final ha salido bien.', 'No obstante el balance positivo.', 'Y eso que el balance es positivo.'], answer: 0, why: '«Aun así» mantiene el sentido de «con todo» (a pesar de todo) en un registro más cotidiano.', en: 'Make it conversational.' },
          ] },
          { kind: 'teacher', text: 'Paso opcional: solo si queda tiempo o para estudiantes fuertes. Tu alumno dice una queja de forma coloquial («Ya, pero…», «y eso que…») y después la reformula como en un informe.' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 157 · Participios y adjetivos resultativos', text: 'Ya sabes conceder y objetar entre oraciones: «Sin embargo…», «Ahora bien…», «Eso sí…». En la clase 157 aprendes a describir con precisión cómo quedan las cosas después de un cambio: «la calle **quedó cerrada**», «los vecinos **están preocupados**», «un comercio **afectado** por las obras». Es el paso natural: en los mismos debates e informes, después de argumentar hay que describir resultados.', en: 'You can now concede and object across sentences. In class 157 you learn to describe precisely how things end up after a change: “the street was left closed”, “residents are worried”, “a shop affected by the works”. It is the natural next step: in the same debates and reports, after arguing you need to describe results.', href: '/gramatica/participios-y-adjetivos-resultativos', label: 'Ir a la clase 157' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Qué diferencia hay entre “Es caro. Sin embargo, lo compro” y “Es caro. Eso sí, lo pago a plazos”?». Respuesta esperada: «sin embargo» marca contraste; «eso sí» acepta y añade una condición. Tarea: el texto de Escribir sobre un cambio real en su ciudad.' },
        ] },
      ],
    },
  ],
};
