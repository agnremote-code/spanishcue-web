import type { LiveLesson } from '../types';

/**
 * Lesson 220 · B2 · Aunque + indicativo / subjuntivo.
 * One team (Julia, Marcos, Sara) plans a museum visit with bad weather and a
 * slower bus. The mood after «aunque» follows the speaker's stance: news that
 * they assert, an objection everybody already knows, or a pending possibility.
 */
export const lesson: LiveLesson = {
  id: 220,
  level: 'B2',
  title: 'Aunque: conceder y mantener tu postura',
  subtitle: 'Aceptar una objeción con «aunque» y elegir el indicativo o el subjuntivo según lo que quieres comunicar.',
  legend: [
    { tone: 'blue', label: 'Aunque + indicativo · un dato que afirmas o anuncias' },
    { tone: 'teal', label: 'Aunque + subjuntivo · una objeción que todos conocen' },
    { tone: 'orange', label: 'Aunque + subjuntivo · una posibilidad que no sabes si pasará' },
  ],
  optionNotes: {
    'estaría cerrada': 'El condicional no sirve para conceder un dato real con «aunque». Elige entre indicativo (lo anuncias) y subjuntivo (lo das por sabido o posible).',
    'estaría cancelado': 'El condicional no sirve para conceder un dato real con «aunque».',
    llovería: 'El condicional no expresa la posibilidad futura después de «aunque»: se usa el presente de subjuntivo, «aunque llueva».',
    lloverá: 'Con el futuro afirmas que va a llover. Si no sabes si pasará y quieres decir «pase lo que pase», usa el subjuntivo: «aunque llueva».',
    subirá: 'Con el futuro afirmas que va a subir. Si solo concedes la posibilidad, usa el subjuntivo: «aunque suba».',
    aumentará: 'Con el futuro afirmas que va a aumentar. Para una posibilidad no confirmada, usa el subjuntivo: «aunque aumente».',
    'esté cancelado': 'El subjuntivo daría el dato por conocido. Aquí la otra persona no lo sabe: es una noticia, y la noticia va en indicativo.',
    'esté cerrada': 'El subjuntivo daría el dato por conocido. Aquí es una noticia: indicativo.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Conceder sin cambiar de idea', coach: 'Acepto tu objeción, pero mantengo mi plan.',
      steps: [
        { title: 'Tres «aunque», tres intenciones · Three aunque, three intentions', blocks: [
          { kind: 'lead', text: 'Julia organiza una visita a un museo con su equipo. El pronóstico anuncia lluvia. Ella dice tres frases con **aunque** y en todas mantiene el plan, pero cada una comunica algo distinto.', en: 'Julia is organising a museum visit for her team, and the forecast says rain. She says three sentences with «aunque» (although / even if). In all of them she keeps the plan, but each one communicates something different.' },
          { kind: 'guide', text: { teacher: 'Lean las tres frases. Antes de explicar, pregunta: «¿En cuál Julia da una noticia? ¿En cuál responde a algo que ya se dijo? ¿En cuál habla de algo que puede pasar?».', self: 'Lee las tres frases. Para cada una, piensa: ¿Julia da una noticia, responde a algo ya conocido o habla de algo que todavía no sabe?' } },
          { kind: 'compare', title: 'El mismo tema, tres intenciones', columns: [
            { tone: 'blue', label: 'UNA NOTICIA', sentence: '[[Aunque el pronóstico anuncia lluvia|blue]], mantengo la visita.', idea: 'Julia informa al grupo: el dato de la lluvia es parte del mensaje.', en: 'News: Julia is informing the group; the rain forecast is part of her message (“although the forecast says rain…”).' },
            { tone: 'teal', label: 'UNA OBJECIÓN CONOCIDA', sentence: '[[Aunque anuncie lluvia|teal]], el museo está cubierto.', idea: 'Todos saben ya lo del pronóstico. Julia no lo repite como noticia: lo acepta y pone el foco en su respuesta.', en: 'A known objection: everyone already knows about the forecast. Julia doesn’t repeat it as news; she accepts it and shifts the focus to her answer (roughly “rain or no rain, the museum is covered”).' },
            { tone: 'orange', label: 'UNA POSIBILIDAD', sentence: '[[Aunque llueva más de lo previsto|orange]], podemos usar la entrada cubierta.', idea: 'Nadie sabe cuánto va a llover. Pase lo que pase, el plan sigue.', en: 'A possibility: nobody knows how much it will rain. Whatever happens, the plan goes ahead (“even if it rains more than expected…”).' },
          ] },
          { kind: 'tip', icon: '🎯', title: 'No es «verdadero o falso»', text: 'El subjuntivo después de «aunque» **no significa que el dato sea falso**. Julia sabe que el pronóstico anuncia lluvia. Lo que cambia es **qué hace con ese dato**: lo anuncia, lo da por sabido o lo deja abierto.', en: 'It is not “true or false”. The subjunctive after «aunque» does not mean the fact is false. Julia knows the forecast says rain. What changes is what she does with that fact: she announces it, takes it as known, or leaves it open.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'En «Aunque anuncie lluvia, el museo está cubierto», ¿Julia cree que el pronóstico es falso?', options: ['No: acepta el dato y se centra en su respuesta.', 'Sí: el subjuntivo dice que no es verdad.'], answer: 0, why: 'El subjuntivo retoma una objeción conocida; no niega el dato.', en: 'In «Aunque anuncie lluvia, el museo está cubierto», does Julia think the forecast is false?' },
            { prompt: '¿Qué frase habla de algo que **todavía no se sabe**?', options: ['Aunque llueva mucho el sábado, iremos.', 'Aunque llueve mucho, vamos.'], answer: 0, why: 'Nadie sabe cuánto lloverá el sábado: aunque + subjuntivo para una posibilidad.', en: 'Which sentence talks about something that is not known yet?' },
          ] },
        ] },
        { title: 'Aunque + indicativo: una noticia · News', mascot: '/brand/mascot/studying.webp', coach: 'Si lo anuncias, indicativo.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'DATO AFIRMADO', question: '¿Presentas el dato como información nueva o que afirmas?', en: 'The indicative presents the fact as information the speaker asserts and adds to the conversation; the listener may not have known it. Then the speaker holds their position. English “although” + a plain statement works the same way.', formula: ['aunque + indicativo, postura'],
            meaning: 'El **indicativo** presenta el dato como información que el hablante **afirma** y añade a la conversación. La otra persona quizá no lo sabía. Después, el hablante mantiene su postura.',
            examples: [
              { es: '[[Aunque el alquiler subió|blue]], mantengo la mudanza.', en: 'Although the rent went up, I’m going ahead with the move.' },
              { es: '[[Aunque el museo ha cambiado la hora|blue]], podemos llegar a tiempo.', en: 'Although the museum has changed its opening time, we can get there on time.' },
              { es: '[[Aunque el tren está cancelado|blue]], iremos en autobús.', en: 'Although the train is cancelled, we’ll go by bus.' },
              { es: '[[Aunque tenemos poco tiempo|blue]], podemos terminar el informe.', en: 'Although we don’t have much time, we can finish the report.' },
            ],
            note: 'Puedes usar cualquier tiempo del indicativo: presente, pasado, futuro. «Aunque **mañana hará** frío, saldremos» afirma la previsión.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { context: 'Le cuentas a tu compañero algo que él no sabía.', prompt: 'Aunque la carretera ___ cerrada, llegaremos por otra ruta.', options: ['está', 'esté', 'estaría cerrada'], answer: 0, why: 'Es una noticia: el indicativo presenta el dato como información que afirmas.', en: 'You tell your colleague something he didn’t know about the road.' },
            { context: 'Acabas de leer un correo del banco.', prompt: 'Aunque nos ___ el préstamo, seguiremos con el proyecto.', options: ['han negado', 'hayan negado', 'negarían'], answer: 0, why: 'Comunicas una información nueva y segura: indicativo.', en: 'You have just read an email from the bank and you pass on the news about the loan.' },
          ] },
        ] },
        { title: 'Aunque + subjuntivo: una objeción conocida · A known objection', mascot: '/brand/mascot/speaking.webp', coach: 'Ya lo sabemos. Mi punto es otro.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'DATO CONOCIDO', question: '¿El dato ya se dijo y quieres centrarte en tu respuesta?', en: 'Here the subjunctive picks up an objection everyone already knows without turning it into news again. The fact is not denied: it is accepted and pushed into the background, so the focus falls on the position that follows. English often says “OK, it may be expensive, but…” or “even though it’s expensive…”.', formula: ['aunque + subjuntivo (presente o perfecto), postura'],
            meaning: 'El **subjuntivo** retoma una objeción que **todos conocen**, sin convertirla otra vez en la noticia. El dato no se niega: se acepta y pasa a segundo plano. El foco queda en la postura que sigue.',
            examples: [
              { es: '[[Aunque el alquiler haya subido|teal]], mantengo la mudanza.', en: 'OK, the rent has gone up, but I’m going ahead with the move.' },
              { es: '[[Aunque el plan sea caro|teal]], seguimos con él.', en: 'Expensive as the plan may be, we’re sticking with it.' },
              { es: '[[Aunque tarde más|teal]], prefiero ir en autobús.', en: 'Even if it takes longer, I’d rather go by bus.' },
              { es: 'Sí, ya lo sé. [[Aunque sea tu jefe|teal]], no tiene razón.', en: 'Yes, I know. He may be your boss, but he’s wrong.' },
            ],
            note: 'Para un hecho pasado conocido, el perfecto de subjuntivo: «aunque **haya subido**». Para una situación actual: «aunque **sea**, **tenga**, **esté**».' },
          { kind: 'table', title: 'Las formas que más vas a usar', head: ['Verbo', 'Indicativo (lo afirmo)', 'Subjuntivo presente', 'Subjuntivo perfecto'], rows: [
            ['anunciar', 'anuncia', '[[anuncie|teal]]', '[[haya anunciado|teal]]'],
            ['llover', 'llueve', '[[llueva|teal]]', '[[haya llovido|teal]]'],
            ['tardar', 'tarda', '[[tarde|teal]]', '[[haya tardado|teal]]'],
            ['subir', 'sube / subió', '[[suba|teal]]', '[[haya subido|teal]]'],
            ['ser', 'es', '[[sea|teal]]', '[[haya sido|teal]]'],
            ['estar', 'está', '[[esté|teal]]', '[[haya estado|teal]]'],
            ['tener', 'tiene', '[[tenga|teal]]', '[[haya tenido|teal]]'],
          ], note: 'El presente de subjuntivo cambia la vocal: **-ar → -e** (anuncie), **-er / -ir → -a** (llueva, suba). Los irregulares salen de la forma «yo» del presente: tengo → tenga.' },
          { kind: 'tip', icon: '⚠', title: 'Saber el dato no obliga al subjuntivo', text: 'Si los dos conocen el dato, puedes elegir: con **indicativo** lo vuelves a afirmar («Aunque **está** cancelado, iremos»); con **subjuntivo** lo das por sabido y te centras en tu respuesta. Las dos son correctas; cambia la intención.', en: 'Knowing the fact doesn’t force the subjunctive. If you both know it, you can choose: with the indicative you assert it again; with the subjunctive you take it as known and focus on your answer. Both are correct; the intention changes.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { context: 'Tu amigo repite por tercera vez que el hotel está lejos. Tú lo aceptas y quieres centrarte en tu decisión.', prompt: 'Bueno, aunque ___ lejos, lo reservo.', options: ['esté', 'estaría', 'estará'], answer: 0, why: 'Retomas una objeción que ya conocen los dos: subjuntivo.', en: 'Your friend says for the third time that the hotel is far away. You accept it and want to focus on your decision.' },
            { context: 'Ya discutieron una hora sobre el precio. Ahora quieres cerrar el tema.', prompt: 'Aunque el curso ___ caro, me inscribo.', options: ['sea', 'sería', 'será'], answer: 0, why: 'El precio es una objeción compartida; el subjuntivo la deja en segundo plano.', en: 'You have argued about the price for an hour. Now you want to close the topic.' },
          ] },
        ] },
        { title: 'Aunque + subjuntivo: una posibilidad · A possibility', mascot: '/autoestudio/mascot/noting.webp', coach: 'Pase lo que pase, el plan sigue.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'POSIBILIDAD PENDIENTE', question: '¿Hablas de algo que puede pasar, pero no sabes si pasará?', en: 'The subjunctive does not claim the event will happen: it allows for it as a possibility and shows that, even then, the decision stands. It is the Spanish equivalent of “even if…”.', formula: ['aunque + presente de subjuntivo, postura (futuro / presente)'],
            meaning: 'El subjuntivo **no afirma** que el hecho vaya a ocurrir: lo **concede como posibilidad** y muestra que, incluso en ese caso, la decisión se mantiene. Equivale a «incluso si…».',
            examples: [
              { es: '[[Aunque el alquiler suba mañana|orange]], mantendré la mudanza.', en: 'Even if the rent goes up tomorrow, I’ll go ahead with the move.' },
              { es: '[[Aunque llueva durante el camino|orange]], hay una entrada cubierta.', en: 'Even if it rains on the way, there’s a covered entrance.' },
              { es: '[[Aunque el precio aumente|orange]], compraré la entrada.', en: 'Even if the price goes up, I’ll buy the ticket.' },
              { es: '[[Aunque me ofrezcan más dinero|orange]], no voy a cambiar de trabajo.', en: 'Even if they offer me more money, I’m not changing jobs.' },
            ] },
          { kind: 'compare', title: 'Futuro afirmado o posibilidad', columns: [
            { tone: 'blue', label: 'LO AFIRMO', sentence: '[[Aunque mañana lloverá|blue]], saldremos.', idea: 'Doy la lluvia por segura (lo dice el pronóstico). Es poco frecuente, pero correcto.', en: 'I assert it: I take the rain as certain (the forecast says so). Rare, but correct.' },
            { tone: 'orange', label: 'NO LO SÉ', sentence: '[[Aunque mañana llueva|orange]], saldremos.', idea: 'No sé si lloverá. En cualquier caso, salimos.', en: 'I don’t know: I don’t know if it will rain. Either way, we’re going out.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { context: 'No sabes si el precio de la entrada aumentará.', prompt: 'Aunque el precio ___, compraré la entrada.', options: ['aumente', 'aumentará', 'aumentó'], answer: 0, why: 'Una posibilidad no confirmada: presente de subjuntivo.', en: 'You don’t know whether the ticket price will go up.' },
            { context: 'No sabes cómo va a estar el tráfico el lunes.', prompt: 'Aunque ___ mucho tráfico el lunes, llegaré a la reunión.', options: ['haya', 'hay', 'habría'], answer: 0, why: 'Es algo futuro e incierto: aunque + subjuntivo.', en: 'You don’t know what the traffic will be like on Monday.' },
          ] },
        ] },
        { title: 'Cómo elegir · How to choose', mascot: '/brand/mascot/seated.webp', coach: 'Pregúntate qué haces con el dato.', blocks: [
          { kind: 'decide', title: 'Piensa en tu frase con «aunque» y responde', steps: [
            { q: '¿Sabes si el hecho es real o va a ocurrir?', yes: 'next', no: 'Es una posibilidad: **aunque + subjuntivo**. «[[Aunque llueva|orange]], iremos».' },
            { q: '¿La otra persona ya conoce el dato y quieres centrarte en tu respuesta?', yes: '**Aunque + subjuntivo**, para retomar la objeción: «[[Aunque sea caro|teal]], seguimos».', no: 'Lo presentas como información: **aunque + indicativo**. «[[Aunque el tren está cancelado|blue]], iremos en autobús».' },
          ] },
          { kind: 'tip', icon: '🛑', title: 'Conceder no es aceptar todo', text: 'Con «aunque» explicas **qué dificultades aceptas**. También puedes poner un límite: «Aunque tarde más, voy en autobús; **pero si no hay autobús de vuelta**, cambiamos de día».', en: 'Conceding is not accepting everything. With «aunque» you say which difficulties you accept. You can also set a limit: «… pero si no hay autobús de vuelta, cambiamos de día» (but if there’s no bus back, we change the day).' },
          { kind: 'tip', icon: '🔁', title: 'Otras formas de conceder', text: '«**A pesar de que**» funciona igual que «aunque»: «A pesar de que **ha llovido**…» / «A pesar de que **llueva**…». Con un nombre: «**A pesar de** la lluvia, fuimos».', en: 'Other ways to concede. «A pesar de que» (despite the fact that) works just like «aunque», with indicative or subjunctive. With a noun: «A pesar de la lluvia, fuimos» (despite the rain, we went).' },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Cuidado con estas trampas.', blocks: [
          { kind: 'guide', text: { teacher: 'Tu alumno explica la intención de cada frase antes de que muestres la corrección: ¿noticia, objeción conocida o posibilidad?', self: 'Lee cada frase, piensa qué quiere comunicar el hablante y después toca para ver la corrección.' } },
          { kind: 'mistakes', title: '¿Dónde está el error?', items: [
            { wrong: 'Aunque lloverá mañana, iremos a la playa. (No sabes si lloverá.)', right: 'Aunque llueva mañana, iremos a la playa.', why: 'Si no sabes si pasará, no lo afirmes con el futuro: usa el subjuntivo.' },
            { wrong: 'Aunque la carretera esté cerrada, iremos por otra ruta. (Te lo acaban de anunciar.)', right: 'Aunque la carretera está cerrada, iremos por otra ruta.', why: 'Es una noticia que comunicas ahora: indicativo.' },
            { wrong: 'Aunque sería caro, lo compro.', right: 'Aunque sea caro, lo compro. / Aunque es caro, lo compro.', why: 'El condicional no sirve para conceder un dato real con «aunque».' },
            { wrong: 'Aunque el precio suba ayer, mantengo la compra.', right: 'Aunque el precio haya subido ayer, mantengo la compra. / Aunque el precio subió ayer…', why: 'Para un hecho pasado ya conocido, perfecto de subjuntivo («haya subido»), no presente.' },
            { wrong: 'Aunque llueva, pero iremos.', right: 'Aunque llueva, iremos.', why: '«Aunque» ya introduce la concesión: no repitas «pero» en la otra parte.' },
            { wrong: 'A pesar de que llueve mañana, saldremos. (No es seguro que llueva.)', right: 'A pesar de que llueva mañana, saldremos.', why: '«A pesar de que» funciona como «aunque»: para una posibilidad, subjuntivo.' },
          ] },
          { kind: 'teacher', text: 'Da un dato («El restaurante está lleno») y pide tres reacciones: como noticia, como objeción conocida y como posibilidad («aunque esté lleno el sábado»).' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'Conceder en una conversación real', coach: 'Toca las expresiones marcadas.',
      steps: [
        { title: 'Mantener la visita · Keeping the visit', blocks: [
          { kind: 'guide', text: { teacher: 'Lean el diálogo con papeles. Después el alumno toca cada expresión y explica qué hace Julia con el dato: lo anuncia, lo da por sabido o lo deja abierto.', self: 'Lee el diálogo. Después toca cada expresión marcada y piensa qué hace el hablante con el dato.' } },
          { kind: 'explore', title: 'La visita al museo', setting: 'El viernes el equipo va a una exposición. Esta mañana llegó un aviso de mal tiempo. Julia, Marcos y Sara hablan en la oficina.', lines: [
            { who: 'Marcos', text: 'Julia, ¿has visto el aviso? Dicen que el viernes va a llover todo el día.', en: 'Julia, have you seen the warning? They say it’s going to rain all day on Friday.' },
            { who: 'Julia', text: 'Sí, lo he visto. [[Aunque el pronóstico anuncia lluvia|blue]], yo mantengo la visita.', en: 'Yes, I’ve seen it. Although the forecast says rain, I’m keeping the visit.' },
            { who: 'Sara', text: 'Pero vamos a llegar empapados…', en: 'But we’re going to arrive soaked…' },
            { who: 'Julia', text: '[[Aunque anuncie lluvia|teal]], el museo está cubierto y el autobús nos deja en la puerta.', en: 'Rain or no rain, the museum is covered and the bus drops us at the door.' },
            { who: 'Marcos', text: 'Hay otra cosa: [[aunque no lo sabían|blue]], el museo cambió la hora de entrada. Ahora abre a las diez.', en: 'There’s something else: you didn’t know this, but the museum changed its opening time. It now opens at ten.' },
            { who: 'Julia', text: 'Mejor: así no salimos tan temprano.', en: 'Even better: that way we don’t leave so early.' },
            { who: 'Sara', text: '¿Y si llueve más de lo previsto y se inunda la calle?', en: 'And what if it rains more than expected and the street floods?' },
            { who: 'Julia', text: '[[Aunque llueva más de lo previsto|orange]], podemos usar la entrada cubierta del estacionamiento.', en: 'Even if it rains more than expected, we can use the covered entrance from the car park.' },
            { who: 'Marcos', text: 'Lo único que me preocupa es el transporte. Con lluvia, el autobús tarda el doble.', en: 'The only thing that worries me is transport. In the rain the bus takes twice as long.' },
            { who: 'Julia', text: 'Ya, ya hablamos de eso. [[Aunque tarde más|teal]], prefiero salir antes y mantener el plan.', en: 'Yes, we’ve already talked about that. Even if it takes longer, I’d rather leave earlier and keep the plan.' },
            { who: 'Sara', text: 'De acuerdo. Pero si no hay autobús de vuelta, cancelamos.', en: 'OK. But if there’s no bus back, we cancel.' },
            { who: 'Julia', text: 'Por supuesto. [[Aunque lo tengamos todo preparado|orange]], si no podemos volver con seguridad, cambiamos de día.', en: 'Of course. Even though we’ve got everything ready, if we can’t get back safely, we change the day.' },
          ], notes: {
            'Aunque el pronóstico anuncia lluvia': 'Julia **afirma** el dato (indicativo). Reconoce la noticia de Marcos y dice su decisión.',
            'Aunque anuncie lluvia': 'Sara insiste con la misma objeción. Julia ya no la presenta como noticia: la da por sabida (**subjuntivo**) y se centra en su respuesta.',
            'aunque no lo sabían': 'Marcos da una información **nueva** para el grupo: indicativo.',
            'Aunque llueva más de lo previsto': 'Nadie sabe cuánto lloverá: una **posibilidad**. Pase lo que pase, hay solución.',
            'Aunque tarde más': 'El problema del autobús ya está dicho («ya hablamos de eso»). El **subjuntivo** retoma la objeción conocida.',
            'Aunque lo tengamos todo preparado': 'Julia concede algo y pone un **límite**: el plan no se mantiene a cualquier precio. Usa el subjuntivo porque deja el dato en segundo plano: lo importante es la seguridad.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Qué información nueva da Marcos?', options: ['Que el museo cambió la hora de entrada.', 'Que el museo está cubierto.', 'Que no hay autobús de vuelta.'], answer: 0, why: '«Aunque no lo sabíais, el museo cambió la hora de entrada».', en: 'What new information does Marcos give?' },
            { prompt: '¿Qué podría hacer cambiar el plan?', options: ['No poder volver con seguridad.', 'Una lluvia fuerte.', 'Que el autobús tarde más.'], answer: 0, why: '«Si no podemos volver con seguridad, cambiamos de día».', en: 'What could make them change the plan?' },
          ] },
        ] },
        { title: 'Una mudanza discutida · A disputed move', mascot: '/brand/mascot/speaking.webp', coach: 'Fíjate en cómo cambia el modo cuando el dato ya se conoce.', blocks: [
          { kind: 'explore', title: 'Un apartamento más lejos', setting: 'Raúl quiere mudarse a un apartamento más grande. Habla por teléfono con su hermana Clara.', lines: [
            { who: 'Raúl', text: 'Clara, ya tengo apartamento nuevo. [[Aunque el alquiler subió|blue]] este mes, lo voy a firmar.', en: 'Clara, I’ve found a new flat. Although the rent went up this month, I’m going to sign.' },
            { who: 'Clara', text: '¿Subió? ¿Cuánto?', en: 'It went up? By how much?' },
            { who: 'Raúl', text: 'Cincuenta euros. Pero tiene dos habitaciones y un balcón.', en: 'Fifty euros. But it has two bedrooms and a balcony.' },
            { who: 'Clara', text: 'Ya, pero está muy lejos de tu trabajo.', en: 'Sure, but it’s really far from your work.' },
            { who: 'Raúl', text: '[[Aunque esté lejos|teal]], hay metro directo. Son veinticinco minutos.', en: 'Far or not, there’s a direct metro. It’s twenty-five minutes.' },
            { who: 'Clara', text: '¿Y si el dueño sube el precio otra vez el año que viene?', en: 'And what if the landlord puts the price up again next year?' },
            { who: 'Raúl', text: '[[Aunque lo suba|orange]], seguiré pagando menos que en el centro.', en: 'Even if he does, I’ll still be paying less than in the centre.' },
            { who: 'Clara', text: 'Bueno, insisto en lo del dinero: cincuenta euros más al mes es mucho.', en: 'Well, I keep coming back to the money: fifty euros more a month is a lot.' },
            { who: 'Raúl', text: 'Lo sé. [[Aunque haya subido|teal]], es el mejor apartamento que he visto. Y [[aunque mi sueldo no es alto|blue]], puedo pagarlo si ahorro un poco.', en: 'I know. It has gone up, but it’s the best flat I’ve seen. And although my salary isn’t high, I can afford it if I save a bit.' },
            { who: 'Clara', text: 'Bueno, si lo tienes claro… ¡Felicidades!', en: 'Well, if you’re sure… Congratulations!' },
          ], notes: {
            'Aunque el alquiler subió': 'Raúl da la noticia a su hermana: **indicativo**. Ella no lo sabía.',
            'Aunque esté lejos': 'Clara presenta la distancia como objeción; Raúl la acepta sin repetirla como noticia y se centra en su respuesta: **subjuntivo**.',
            'Aunque lo suba': 'Nadie sabe si el dueño subirá el precio: **posibilidad**, presente de subjuntivo.',
            'Aunque haya subido': 'El aumento ya se dijo y se discutió: **perfecto de subjuntivo** para retomar un hecho pasado conocido.',
            'aunque mi sueldo no es alto': 'Raúl **afirma** un dato sobre sí mismo como parte de su argumento: indicativo.',
          } },
          { kind: 'teacher', text: 'Pregunta: «¿Por qué Raúl dice primero "aunque el alquiler subió" y después "aunque haya subido"?». El dato es el mismo; la primera vez es noticia, la segunda ya es conocido.' },
        ] },
        { title: '¿Noticia, objeción o posibilidad? · News, objection or possibility?', blocks: [
          { kind: 'classify', title: 'Clasifica las frases de las dos conversaciones', categories: [
            { id: 'noticia', label: 'Dato que se afirma', tone: 'blue' },
            { id: 'conocido', label: 'Objeción conocida', tone: 'teal' },
            { id: 'posible', label: 'Posibilidad pendiente', tone: 'orange' },
          ], items: [
            { text: 'Aunque el pronóstico anuncia lluvia, mantengo la visita.', answer: 'noticia', why: 'Indicativo: Julia afirma el dato.' },
            { text: 'Aunque tarde más, prefiero salir antes.', answer: 'conocido', why: 'El problema del autobús ya se había dicho.' },
            { text: 'Aunque llueva más de lo previsto, podemos usar la entrada cubierta.', answer: 'posible', why: 'Nadie sabe cuánto lloverá.' },
            { text: 'Aunque el alquiler subió este mes, lo voy a firmar.', answer: 'noticia', why: 'Raúl da la noticia a su hermana.' },
            { text: 'Aunque lo suba el año que viene, seguiré pagando menos.', answer: 'posible', why: 'Una subida futura e incierta.' },
            { text: 'Aunque esté lejos, hay metro directo.', answer: 'conocido', why: 'Clara ya dijo que está lejos; Raúl acepta la objeción.' },
          ] },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Lee bien el contexto: él decide el modo.',
      steps: [
        { title: 'Elige según el contexto · Choose from the context', blocks: [
          { kind: 'choice', items: [
            { context: 'Le cuentas a tu amiga, por primera vez, que el tren está cancelado.', prompt: 'Aunque el tren ___, iremos en autobús.', options: ['está cancelado', 'esté cancelado', 'estaría cancelado'], answer: 0, why: 'Es una noticia: indicativo.', en: 'You tell your friend, for the first time, about the cancelled train.' },
            { context: 'No sabes si el precio aumentará antes del concierto.', prompt: 'Aunque el precio ___, compraré la entrada.', options: ['aumente', 'aumentará', 'aumentó'], answer: 0, why: 'Una posibilidad no confirmada: subjuntivo.', en: 'You don’t know whether the price will go up before the concert.' },
            { context: 'Anuncias una dificultad que tu equipo desconocía.', prompt: 'Aunque ___ poco tiempo, podemos terminar.', options: ['tenemos', 'tengamos', 'tendríamos'], answer: 0, why: 'Introduces la limitación como dato nuevo: indicativo.', en: 'You announce a difficulty your team didn’t know about.' },
            { context: 'Tu pareja repite que el restaurante es caro. Tú lo aceptas y te centras en tu decisión.', prompt: 'Ya lo sé. Aunque ___ caro, quiero celebrarlo allí.', options: ['sea', 'sería', 'será'], answer: 0, why: 'Retomas una objeción conocida para destacar tu postura: subjuntivo.', en: 'Your partner keeps saying the restaurant is expensive. You accept it and focus on your decision.' },
            { context: 'El partido es mañana y no sabes qué tiempo hará.', prompt: 'Aunque ___ frío, jugaremos.', options: ['haga', 'hará', 'hacía'], answer: 0, why: 'Un tiempo futuro que no sabes: subjuntivo.', en: 'The match is tomorrow and you don’t know what the weather will be like.' },
            { context: 'Le cuentas a tu jefa lo que acabas de ver en el correo.', prompt: 'Aunque el cliente ___ la reunión, el proyecto sigue.', options: ['ha cancelado', 'haya cancelado', 'cancelaría'], answer: 0, why: 'Información nueva para tu jefa: indicativo.', en: 'You tell your boss what you’ve just seen in an email.' },
          ] },
        ] },
        { title: 'Compara los significados · Compare the meanings', blocks: [
          { kind: 'choice', items: [
            { prompt: '¿En qué frase el hablante **sabe** que el examen es difícil?', options: ['Aunque el examen es difícil, voy a aprobar.', 'Aunque el examen sea difícil (no lo he visto), voy a aprobar.'], answer: 0, why: 'El indicativo afirma el dato. En la segunda, el hablante no lo sabe todavía.', en: 'In which sentence does the speaker know the exam is hard?' },
            { prompt: '«Aunque haya subido el alquiler, me quedo.» ¿Qué entiendes?', options: ['El alquiler subió y los dos ya lo saben.', 'El alquiler no subió.', 'El alquiler va a subir.'], answer: 0, why: 'Perfecto de subjuntivo: un hecho pasado que se da por conocido.', en: '“The rent has gone up, but I’m staying.” What do you understand?' },
            { prompt: '¿Qué frase significa «incluso si llueve»?', options: ['Aunque llueva, salimos.', 'Aunque llueve, salimos.'], answer: 0, why: 'El subjuntivo concede la posibilidad sin afirmarla.', en: 'Which sentence means “even if it rains”?' },
            { prompt: '«Aunque esté cansada, voy a terminar el informe.» ¿La hablante está cansada?', options: ['Sí, probablemente; pero lo da por sabido y se centra en terminar.', 'No, el subjuntivo dice que no.', 'No se puede saber nunca.'], answer: 0, why: 'El subjuntivo no niega el dato: lo pone en segundo plano.', en: 'In «Aunque esté cansada, voy a terminar el informe», is the speaker tired?' },
          ] },
        ] },
        { title: 'Completa la conversación · Complete the conversation', blocks: [
          { kind: 'chat-fill', title: 'Organizar una cena de equipo', lines: [
            { who: 'Ana', text: 'Les aviso: aunque el restaurante ___ cerrado el lunes, ya tengo otra opción.', options: ['está', 'esté', 'estaría'], answer: 0, why: 'Ana da una noticia: indicativo.' },
            { who: 'Pedro', text: '¿Y es lejos?' },
            { who: 'Ana', text: 'Un poco. Pero aunque ___ lejos, hay estacionamiento.', options: ['esté', 'estaría', 'estará'], answer: 0, why: 'Pedro acaba de plantear la distancia; Ana la acepta y se centra en su respuesta.' },
            { who: 'Pedro', text: '¿Y si no viene todo el equipo?' },
            { who: 'Ana', text: 'Aunque no ___ todos, la cena se hace.', options: ['vengan', 'vienen', 'vendrían'], answer: 0, why: 'No sabe quién vendrá: posibilidad, subjuntivo.' },
            { who: 'Pedro', text: 'Perfecto. Y aunque el menú ___ un poco caro, creo que vale la pena.', options: ['es', 'sería', 'fue'], answer: 0, why: 'Pedro ya miró el menú y afirma el dato: indicativo.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Aunque lloverá mañana, iremos al parque. (No sabes si lloverá.)', ok: false, options: ['Aunque llueva mañana, iremos al parque.', 'Aunque llovería mañana, iremos al parque.', 'Aunque llovió mañana, iremos al parque.'], answer: 0, why: 'Si no sabes si lloverá, usa el subjuntivo.' },
            { sentence: 'Aunque la carretera esté cerrada, iremos por otra ruta. (Te lo acaban de anunciar.)', ok: false, options: ['Aunque la carretera está cerrada, iremos por otra ruta.', 'Aunque la carretera estaría cerrada, iremos por otra ruta.', 'Aunque la carretera estará cerrada, iremos por otra ruta.'], answer: 0, why: 'Es una noticia: indicativo.' },
            { sentence: 'Aunque sea tarde, te llamo. (Ya lo hablamos: sabemos que es tarde.)', ok: true, why: 'Correcta: retoma un dato conocido y se centra en la acción.' },
            { sentence: 'Aunque sería difícil, lo intentaré.', ok: false, options: ['Aunque sea difícil, lo intentaré.', 'Aunque sería difícil, pero lo intentaré.', 'Aunque difícil sería, lo intentaré.'], answer: 0, why: 'El condicional no sirve aquí: subjuntivo para conceder la dificultad.' },
            { sentence: 'Aunque el museo ha cambiado el horario, llegamos a tiempo.', ok: true, why: 'Correcta: comunica una información nueva con indicativo.' },
            { sentence: 'Aunque llueva, pero salimos.', ok: false, options: ['Aunque llueva, salimos.', 'Aunque llueve, pero salimos.', 'Pero llueva, aunque salimos.'], answer: 0, why: 'No repitas «pero» después de una frase con «aunque».' },
          ] },
        ] },
        { title: 'Construye y transforma · Build and transform', blocks: [
          { kind: 'build', title: 'Ordena las palabras', items: [
            { tiles: ['Aunque', 'llueva', 'iremos', 'al', 'museo'], accept: ['Aunque llueva iremos al museo', 'Iremos al museo aunque llueva'], en: 'Even if it rains, we’ll go to the museum.' },
            { tiles: ['Aunque', 'el', 'tren', 'está', 'cancelado', 'llegaremos'], accept: ['Aunque el tren está cancelado llegaremos', 'Llegaremos aunque el tren está cancelado'], en: 'Although the train is cancelled (news), we’ll get there.' },
            { tiles: ['Aunque', 'sea', 'caro', 'lo', 'compro'], accept: ['Aunque sea caro lo compro', 'Lo compro aunque sea caro'], en: 'Expensive or not (we both know), I’m buying it.' },
            { tiles: ['Aunque', 'haya', 'subido', 'me', 'quedo'], accept: ['Aunque haya subido me quedo', 'Me quedo aunque haya subido'], en: 'It has gone up (as we know), but I’m staying.' },
          ] },
          { kind: 'rewrite', title: 'Cambia la intención', items: [
            { prompt: 'Aunque el examen es difícil, voy a aprobar.', instruction: 'Ahora no sabes si el examen será difícil.', accept: ['Aunque el examen sea difícil, voy a aprobar', 'Voy a aprobar aunque el examen sea difícil'] },
            { prompt: 'Va a llover, pero salimos igual. (No es seguro que llueva.)', instruction: 'Escribe la idea con «aunque».', accept: ['Aunque llueva, salimos', 'Salimos aunque llueva', 'Aunque llueva, salimos igual', 'Salimos igual aunque llueva'] },
            { prompt: 'El alquiler subió, pero me quedo. (Ya lo hablamos mucho.)', instruction: 'Retoma el dato conocido con «aunque» y subjuntivo.', accept: ['Aunque el alquiler haya subido, me quedo', 'Me quedo aunque el alquiler haya subido', 'Aunque haya subido el alquiler, me quedo', 'Me quedo aunque haya subido el alquiler'] },
            { prompt: 'Tenemos poco presupuesto, pero haremos la fiesta. (Es una noticia.)', instruction: 'Escribe la idea con «aunque».', accept: ['Aunque tenemos poco presupuesto, haremos la fiesta', 'Haremos la fiesta aunque tenemos poco presupuesto'] },
          ] },
        ] },
        { title: 'Defiende tu postura · Defend your position', mascot: '/brand/mascot/kneeling.webp', coach: 'Concede, pero no cedas.', blocks: [
          { kind: 'choice', items: [
            { context: 'Tu amigo dice: «El curso es muy caro». Tú ya lo sabes y quieres decir que lo vas a hacer igual.', prompt: '¿Qué respuesta pone el foco en tu decisión?', options: ['Ya. Aunque sea caro, lo voy a hacer.', 'Aunque sería caro, lo voy a hacer.', 'Aunque será caro, pero lo voy a hacer.'], answer: 0, why: 'Subjuntivo: aceptas la objeción conocida y destacas tu decisión.', en: 'Your friend says the course is very expensive. You already know and want to say you’ll do it anyway.' },
            { context: 'Tu jefe no sabe que el proveedor llega tarde. Se lo cuentas.', prompt: '¿Qué frase le das?', options: ['Aunque el proveedor llega tarde, cumpliremos el plazo.', 'Aunque el proveedor llegue tarde, cumpliremos el plazo.', 'Aunque el proveedor llegaría tarde, cumpliremos el plazo.'], answer: 0, why: 'Es una noticia para tu jefe: indicativo.', en: 'Your boss doesn’t know the supplier is late. You tell him.' },
            { context: 'Pones un límite a tu concesión.', prompt: 'Aunque ___ más, voy en tren; pero si cancelan el último, vuelvo en auto.', options: ['tarde', 'tardaría', 'tardara'], answer: 0, why: 'El retraso ya es conocido; con el subjuntivo lo aceptas y luego pones el límite.', en: 'You set a limit on what you concede: the delay is already known.' },
            { context: 'No sabes si te van a aceptar en el máster.', prompt: 'Aunque no me ___, seguiré estudiando por mi cuenta.', options: ['acepten', 'aceptan', 'aceptarán'], answer: 0, why: 'Un resultado todavía incierto: subjuntivo.', en: 'You don’t know if you’ll be accepted onto the master’s.' },
          ] },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Una respuesta al grupo', coach: 'Primero escucha sin leer.',
      steps: [
        { title: 'Un mensaje para Julia', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha para la idea general. En la segunda, el alumno anota cada «aunque» y decide si es noticia, objeción conocida o posibilidad.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Anota cada «aunque» que oigas.' } },
          { kind: 'listen', title: 'Una compañera responde a Julia', channel: 'MENSAJE DE VOZ · PARA JULIA', src: '/audio/grammar-classroom/220.mp3',
            before: 'Una compañera responde a Julia sobre la visita al museo. Hay una noticia, una objeción que ya conocen y una duda. ¿Crees que mantendrá el plan?',
            gist: { prompt: '¿Qué hace la compañera en el mensaje?', options: ['Mantiene la visita, pero pone un límite: la vuelta.', 'Cancela la visita por la lluvia.', 'Propone ir a otro museo.'], answer: 0, why: '«Prefiero mantener la visita…» y «Lo que sí necesito comprobar es el último autobús de vuelta».', en: 'What does the colleague do in her message?' },
            details: [
              { prompt: '¿Qué información nueva comunica al principio?', options: ['Que el museo cambió la hora de entrada.', 'Que va a llover.', 'Que no hay autobús.'], answer: 0, why: '«Aunque el museo ha cambiado la hora de entrada, podemos llegar a tiempo».', en: 'What new information does she give at the start?' },
              { prompt: '¿Qué saben ya todos sobre el transporte?', options: ['Que será más lento.', 'Que es gratis.', 'Que no funciona el viernes.'], answer: 0, why: '«Ya sabemos que el transporte será más lento: aunque tarde más…».', en: 'What does everyone already know about transport?' },
              { prompt: '¿Qué solución da si llueve durante el camino?', options: ['Hay una entrada cubierta.', 'Llevar paraguas.', 'Ir en taxi.'], answer: 0, why: '«Aunque llueva durante el camino, hay una entrada cubierta».', en: 'What solution does she give if it rains on the way?' },
              { prompt: '¿Cuándo propondría otro día?', options: ['Si no pueden regresar sin esperar demasiado.', 'Si llueve mucho.', 'Si el museo cierra temprano.'], answer: 0, why: '«Si no podemos regresar sin esperar demasiado, propondría otro día».', en: 'When would she suggest another day?' },
              { prompt: '¿Qué le pide a Julia?', options: ['Que le envíe el horario nuevo.', 'Que cancele la visita.', 'Que compre las entradas.'], answer: 0, why: '«Envíame el horario nuevo cuando lo tengas».', en: 'What does she ask Julia for?' },
            ],
            transcript: 'Hola, Julia. [[Aunque el museo ha cambiado la hora de entrada|blue]], podemos llegar a tiempo. Te aviso porque quizá no habías visto el mensaje. Ya sabemos que el transporte será más lento: [[aunque tarde más|teal]], prefiero mantener la visita y salir antes. Y [[aunque llueva durante el camino|orange]], hay una entrada cubierta. Lo que sí necesito comprobar es el último autobús de vuelta. Si no podemos regresar sin esperar demasiado, propondría otro día. No quiero usar aunque para ignorar todas las dificultades, sino para explicar cuáles podemos aceptar. Envíame el horario nuevo cuando lo tengas y confirmamos el plan con el resto. Así distinguimos la noticia del museo de las objeciones que ya hemos discutido.',
            reply: { teacher: 'El alumno responde como si fuera Julia: acepta una objeción con «aunque» y pone un límite al plan.', self: 'Responde al mensaje como si fueras Julia. Usa «aunque» con una noticia y con una posibilidad, y pon un límite.' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Mantener tu postura', coach: 'Acepta lo que te dicen y explica por qué sigues.',
      steps: [
        { title: 'Mantener tu postura', blocks: [
          { kind: 'guide', text: { teacher: 'Haz de interlocutor escéptico: plantea objeciones y repítelas. Tu alumno las concede con «aunque» antes de defender su postura.', self: 'Responde cada pregunta en voz alta. Imagina que alguien te pone objeciones y concédelas con «aunque».' } },
          { kind: 'talk', cards: [
            { q: '¿Qué dificultad aceptarías sin abandonar un plan importante para ti?', followUps: ['¿Qué plan es?', '¿Qué dificultad no aceptarías nunca?', '¿Alguien te dijo que era mala idea?'], phrases: ['[[Aunque sea|teal]] difícil, …', '[[Aunque tenga que|orange]]…, seguiré…', 'Lo único que me haría cambiar es…'], hint: 'Concede la dificultad con «aunque» y termina con tu postura. Si quieres, añade un límite.', example: 'Quiero hacer un máster en el extranjero. Aunque sea caro, voy a ahorrar dos años. Aunque tenga que vivir con poco, vale la pena. Lo único que me haría cambiar es un problema de salud en mi familia.', next: 'Ahora, una decisión que ya tomaste.', teacher: 'Pregunta: «¿Y si te dijera que…?» para que aparezca una objeción nueva.' },
            { q: 'Cuéntame una decisión que mantuviste aunque otras personas no estaban de acuerdo.', followUps: ['¿Qué te decían?', '¿Fue una buena decisión?', '¿Hoy harías lo mismo?'], phrases: ['[[Aunque mis padres no estaban|blue]] de acuerdo, …', 'Me decían que…', 'Al final…'], hint: 'Para contar hechos que pasaron, el indicativo afirma la información: «Aunque todos me decían que no, me mudé».', example: 'Cuando tenía veinte años me mudé a otra ciudad. Aunque mis padres no estaban de acuerdo, busqué trabajo allí. Al final fue la mejor decisión de mi vida.', next: 'Ahora practiquemos con objeciones que ya conoces.' },
            { q: 'Siempre hay un defecto que todos te recuerdan: tu ciudad, tu trabajo, tu deporte favorito… ¿Cuál es y por qué no te importa?', followUps: ['¿Quién te lo repite más?', '¿Qué le respondes?', '¿Tiene razón en algo?'], phrases: ['Ya lo sé. [[Aunque esté|teal]]…, me encanta.', '[[Aunque sea|teal]]…, para mí…', 'Tienes razón, pero…'], hint: 'Como la objeción ya es conocida, el subjuntivo la pone en segundo plano: «Aunque sea caro, me encanta».', example: 'Todos me dicen que mi barrio es ruidoso. Ya lo sé. Aunque sea ruidoso, tiene vida, mercados y gente en la calle. Para mí es perfecto.', next: 'Pasemos al futuro.' },
            { q: '¿Qué plan vas a mantener pase lo que pase en los próximos meses?', followUps: ['¿Qué podría salir mal?', '¿Tienes un plan B?', '¿Qué te ayudaría?'], phrases: ['[[Aunque llueva|orange]] / [[aunque haga frío|orange]], …', '[[Aunque no me den|orange]]…, …', 'Si de verdad…, entonces…'], hint: 'Para lo que no sabes si pasará, subjuntivo: «Aunque no me den vacaciones, iré a la boda».', example: 'Voy a correr una media maratón en marzo. Aunque haga frío, entrenaré tres días por semana. Aunque no consiga un buen tiempo, quiero terminarla.', next: 'Ahora, una negociación.' },
            { q: 'Tu familia o tus amigos quieren cambiar un plan común (un viaje, una cena). Tú quieres mantenerlo. ¿Cómo lo defiendes?', followUps: ['¿Qué objeción ponen?', '¿Qué concederías?', '¿Dónde pondrías el límite?'], phrases: ['Entiendo que…, pero…', '[[Aunque tarde|teal]] más / [[aunque cueste|teal]] más, …', 'Pero si…, cambiamos.'], hint: 'Concede, defiende y termina con un límite claro: «Pero si…, cambiamos».', example: 'Mis amigos quieren cancelar la excursión por el tráfico. Entiendo el problema. Aunque tardemos más, prefiero ir: salimos a las siete y llegamos antes. Pero si cortan la carretera, cambiamos de día.', teacher: 'Haz de amigo y repite la objeción dos veces. La segunda vez, el alumno debería pasar al subjuntivo para centrarse en su respuesta.' },
            { q: '¿Hay algo en lo que antes pensabas una cosa y ahora piensas otra, aunque mucha gente opine lo contrario?', followUps: ['¿Qué te hizo cambiar?', '¿Qué te dicen los demás?', '¿Te costó cambiar de opinión?'], phrases: ['Antes pensaba que…', '[[Aunque mucha gente cree|blue]] que…, yo…', '[[Aunque me digan|orange]] que…, seguiré pensando…'], hint: 'Combina los tres usos: un dato que afirmas, una objeción conocida y una posibilidad.', example: 'Antes pensaba que trabajar desde casa era aburrido. Aunque mucha gente cree que se trabaja menos, yo trabajo mejor. Aunque me digan que es solitario, no quiero volver a la oficina cada día.' },
          ], swap: { teacher: 'Al final, cambien los papeles: el profesor defiende un plan y el alumno le pone objeciones.', self: 'Esta semana, cuando alguien te ponga una objeción, intenta responder con «aunque». Anota la frase después.' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Mantener o revisar un plan', coach: 'Concede, defiende y pon un límite.',
      steps: [
        { title: 'Mantener o revisar un plan', blocks: [
          { kind: 'guide', text: { teacher: 'Puede escribir en clase o como tarea. Revisen juntos la intención de cada «aunque»: ¿noticia, objeción conocida o posibilidad?', self: 'Escribe tu mensaje y toca «Revisar mi texto». Después comprueba que cada «aunque» tiene el modo que corresponde a tu intención.' } },
          { kind: 'write', title: 'Un mensaje al grupo', situation: 'Organizas un plan con un grupo (una excursión, una cena, una visita, un proyecto). Hay novedades y algunas personas ponen objeciones. Escribe un mensaje al grupo para mantener o revisar el plan.', task: [
            'Da una **noticia** con «aunque + indicativo».',
            'Retoma una **objeción que todos conocen** con «aunque + subjuntivo».',
            'Concede una **posibilidad** que no sabes si pasará.',
            'Explica tu postura y pon un **límite** claro.',
          ], starters: ['Hola a todos:', 'Aunque…, todavía podemos…', 'Ya sabemos que…; aunque…,', 'Y aunque…, …', 'Lo único que me preocupa es…', 'Si…, propondré…'],
            words: ['mantener', 'cancelar', 'de todos modos', 'en cualquier caso', 'sin embargo', 'propongo', 'confirmar', 'el límite', 'a pesar de'],
            model: 'Hola a todos: [[aunque el museo ha cambiado la hora de entrada|blue]], todavía podemos llegar a tiempo. Ya sabemos que el transporte será más lento; [[aunque tarde más|teal]], prefiero salir antes y mantener la visita. [[Aunque llueva durante el camino|orange]], podemos usar la entrada cubierta. Sin embargo, quiero comprobar el último autobús de vuelta. Si el regreso resulta demasiado difícil, propondré otro día. Estas concesiones explican qué dificultades podemos aceptar, pero no eliminan la necesidad de revisar el transporte. Confirmaré el horario con el grupo esta tarde.',
            minWords: 100 },
        ] },
      ],
    },
    {
      id: 'cerrar', label: 'Cerrar', icon: '✓', mascot: '/brand/mascot/standing.webp',
      title: 'Lo esencial · The essentials', coach: '¿Qué te llevas hoy?',
      steps: [
        { title: 'Lo esencial · The essentials', blocks: [
          { kind: 'recap', items: [
            { tone: 'blue', label: 'NOTICIA', formula: 'aunque + indicativo', example: 'Aunque el alquiler subió, mantengo la mudanza.', caption: 'Afirmas el dato y lo añades a la conversación.', en: 'News: you assert the fact and add it to the conversation.' },
            { tone: 'teal', label: 'OBJECIÓN CONOCIDA', formula: 'aunque + subjuntivo', example: 'Aunque el alquiler haya subido, mantengo la mudanza.', caption: 'Das el dato por sabido y te centras en tu postura.', en: 'Known objection: you take the fact as known and focus on your position.' },
            { tone: 'orange', label: 'POSIBILIDAD', formula: 'aunque + presente de subjuntivo', example: 'Aunque el alquiler suba mañana, mantendré la mudanza.', caption: 'No sabes si pasará. Pase lo que pase, sigues.', en: 'Possibility: you don’t know if it will happen; whatever happens, you carry on.' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La pregunta clave', text: 'No preguntes «¿es verdad?», sino **«¿qué hago con este dato?»**. Lo anuncio: indicativo. Lo doy por sabido: subjuntivo. No sé si pasará: subjuntivo.', en: 'The key question. Don’t ask “is it true?” but “what am I doing with this fact?”. I’m announcing it: indicative. I’m taking it as known: subjunctive. I don’t know if it will happen: subjunctive.' },
        ] },
        { title: 'Desafío final · Final challenge', blocks: [
          { kind: 'choice', title: 'Cuatro frases, sin ayuda', items: [
            { context: 'No sabes si mañana habrá huelga de transporte.', prompt: 'Aunque mañana ___ huelga, iré a trabajar.', options: ['haya', 'hay', 'habría'], answer: 0, why: 'Una posibilidad incierta: subjuntivo.', en: 'You don’t know if there will be a transport strike tomorrow.' },
            { context: 'Le das una noticia a tu compañero.', prompt: 'Aunque la reunión se ___, el informe tiene que estar listo.', options: ['ha cancelado', 'haya cancelado', 'cancelaría'], answer: 0, why: 'Información nueva: indicativo.', en: 'You give your colleague some news about the meeting.' },
            { context: 'Tu amiga insiste en que el viaje es largo. Tú ya lo sabes.', prompt: 'Lo sé. Aunque ___ largo, quiero hacerlo.', options: ['sea', 'sería', 'será'], answer: 0, why: 'Objeción conocida: subjuntivo para centrarte en tu decisión.', en: 'Your friend insists the trip is long. You already know.' },
            { context: '¿Qué significa «Aunque esté cansado, voy a salir»?', prompt: 'El hablante…', options: ['acepta su cansancio y mantiene el plan.', 'no está cansado.', 'va a quedarse en casa.'], answer: 0, why: 'El subjuntivo no niega el cansancio: lo pone en segundo plano.', en: 'What does «Aunque esté cansado, voy a salir» mean?' },
          ] },
        ] },
        { title: 'Tus errores y repaso · Your mistakes and review', blocks: [
          { kind: 'review' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿"Aunque + subjuntivo" siempre presenta un dato falso?». No: también puede retomar una objeción conocida y llevar el foco a la postura del hablante.' },
        ] },
      ],
    },
  ],
};
