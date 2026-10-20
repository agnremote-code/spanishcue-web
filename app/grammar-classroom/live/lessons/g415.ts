import type { LiveLesson } from '../types';

/**
 * Lesson 415 · B1 · Causales: ya que, puesto que, como (course unit G115).
 * One scene runs through the class: the amateur theatre group La Lámpara, at
 * the Las Acacias cultural centre, is two days from opening night. On Tuesday
 * the lights fail (an old cable in the wiring), the electrician cannot come
 * until Monday, and the director Elena Vidal postpones the premiere to Friday
 * the 14th. Hugo Ferrer (actor) arrives late with an excuse; Nuria Campos
 * (lighting technician) explains the fault; Elena phones a ticket holder,
 * señor Ibarra (usted). In the audio Elena (Colombian voice, usted) records
 * the theatre's phone message for the public. Nuria writes to the centre's
 * director, señora Pardo.
 * Builds on G077 (porque after the result / como first): here porque answers
 * ¿por qué? and can stand alone in a reply; como only at the front; ya que,
 * puesto que, dado que present a known cause, more formal, front or after
 * (with a comma); «ya que estás aquí» (since… anyway); es que (colloquial
 * excuse); por + noun / infinitive; a causa de, debido a (+ noun; debido a
 * que + clause), formal; gracias a (positive) vs por culpa de (blame).
 * «No porque + subjuntivo, sino porque + indicativo» is for recognition only.
 * Mistakes: *Llegué tarde como…, *porque de la avería, *debido a la luz no
 * funcionaba, *gracias a la tormenta (negative result), *perdón por llegué.
 * Instructions use tú.
 */
export const lesson: LiveLesson = {
  id: 415,
  level: 'B1',
  title: 'Causales: ya que, puesto que, como',
  subtitle: 'Explicar causas con el conector adecuado al registro: es que, porque, como, ya que, puesto que, debido a, gracias a o por culpa de.',
  legend: [
    { tone: 'blue', label: 'NEUTRO · porque, como (the everyday cause)' },
    { tone: 'teal', label: 'CAUSA CONOCIDA · ya que, puesto que, dado que (more formal: since, given that)' },
    { tone: 'orange', label: 'COLOQUIAL · es que (an excuse, in speech)' },
    { tone: 'violet', label: '+ NOMBRE · por, a causa de, debido a, gracias a, por culpa de (because of…)' },
  ],
  optionNotes: {
    'como': '«Como» causal va **al principio**, antes de la consecuencia, y con una frase (con verbo). Detrás de la consecuencia usa «porque» o «ya que»; con un nombre, «por».',
    'Porque': '«Porque» necesita un verbo después. Al principio de una frase afirmativa lo natural es «Como»; «Porque» abre la frase sobre todo cuando respondes a «¿por qué?».',
    'es que': '«Es que» es coloquial: sirve para dar una excusa al hablar o en un mensaje informal, no en un aviso formal.',
    'Es que': '«Es que» es coloquial: sirve para dar una excusa al hablar o en un mensaje informal, no en un texto formal.',
    'ya que': '«Ya que» va con una frase completa (con verbo): «ya que no hay luz». Con un nombre solo, usa «por» o «debido a».',
    'debido a': '«Debido a» va con un nombre: «debido a la avería». Con una frase completa, «debido a que…».',
    'Debido a': '«Debido a» va con un nombre: «debido a la avería». Con una frase completa, «debido a que…».',
    'Por culpa de': '«Por culpa de» culpa a alguien o algo de un resultado malo. Aquí el resultado es bueno.',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Dar la causa, según con quién hablas', coach: 'Una causa, muchos conectores. One cause, many connectors.',
      steps: [
        { title: 'Una avería antes del estreno · A breakdown before opening night', blocks: [
          { kind: 'lead', text: 'Elena Vidal dirige La Lámpara, el grupo de teatro del centro cultural Las Acacias. El estreno es el viernes, pero el martes, en el ensayo, las luces dejan de funcionar. Esa tarde Elena oye la misma causa contada de tres maneras: entre compañeros, de forma neutra y en un aviso oficial. Ya conoces **porque** y **como** (clase 077). Hoy aprendes a elegir el conector según el **registro** y según **lo que quieres decir** de la causa.', en: 'Elena Vidal runs La Lámpara, the theatre group at the Las Acacias cultural centre. Opening night is on Friday, but on Tuesday, during rehearsal, the lights stop working. That afternoon Elena hears the same cause told in three ways: between colleagues, in a neutral way and in an official notice. You already know porque and como (class 077). Today you learn to choose the connector by register and by what you want to say about the cause.' },
          { kind: 'compare', title: 'La misma causa, tres registros · The same cause, three registers', columns: [
            { tone: 'orange', label: 'COLOQUIAL · Hugo', sentence: '—¿Por qué no ensayamos? —[[Es que|orange]] no hay luz.', idea: 'Una excusa rápida al hablar.', en: '“Why aren’t we rehearsing?” “Well, there’s no light.” (a quick spoken excuse)' },
            { tone: 'blue', label: 'NEUTRO · Nuria', sentence: 'No ensayamos [[porque|blue]] no hay luz.', idea: 'Sirve en casi todas las situaciones.', en: 'We’re not rehearsing because there’s no light. (works almost everywhere)' },
            { tone: 'violet', label: 'FORMAL · el aviso', sentence: '[[Debido a|violet]] una avería, se suspende el ensayo.', idea: 'Un texto oficial: la causa es un nombre.', en: 'Due to a fault, the rehearsal is cancelled. (an official text: the cause is a noun)' },
          ] },
          { kind: 'guide', text: { teacher: 'Tú lees las tres frases y tu alumno dice dónde las oye o las lee: en el pasillo, en una conversación normal o en un cartel.', self: 'Lee las tres frases en voz alta. ¿Dónde oyes o lees cada una: en el pasillo, en una conversación normal o en un cartel? (Where would you hear or read each one?)' } },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué frase es para el cartel de la puerta del teatro?', options: ['Es que no hay luz.', 'Debido a una avería, se suspende el ensayo.', 'No hay luz, ¿sabes?'], answer: 1, why: 'Un cartel es un texto oficial: «debido a» + nombre es formal y neutro.', en: 'Which sentence is for the sign on the theatre door?' },
            { prompt: 'Hugo llega tarde y le dice a Elena: «Perdona, ___ el autobús ha tardado muchísimo».', options: ['puesto que', 'es que', 'debido a'], answer: 1, why: 'Entre compañeros, para disculparte, lo natural es «es que». «Puesto que» suena demasiado formal y «debido a» necesita un nombre.', en: 'Hugo arrives late and tells Elena: “Sorry, it’s just that the bus took ages.”' },
          ] },
        ] },
        { title: 'Conectores con frase · Connectors + a clause', mascot: '/brand/mascot/studying.webp', coach: '¿Respondes, empiezas o la causa ya se sabe? Answering, starting, or already known?', blocks: [
          { kind: 'concept', tone: 'blue', label: 'PORQUE Y COMO · UN PASO MÁS', question: '¿Por qué? ¿Y cómo empiezo la frase?', en: 'Why? And how do I start the sentence?', formula: ['—¿Por qué…? —Porque + frase.', 'consecuencia + porque + causa', 'Como + causa, consecuencia'],
            meaning: '**Porque** responde a la pregunta «¿por qué?» y puede ir solo en la respuesta: «—¿Por qué no hay ensayo? —Porque no hay luz». En una frase normal va **después** de la consecuencia. **Como** presenta la causa **antes** de la consecuencia y nunca va detrás. No sirve para responder a «¿por qué?».',
            examples: [
              { es: '—¿Por qué llegas tan tarde? —[[Porque|blue]] había obras en la avenida.', en: '“Why are you so late?” “Because there were roadworks on the avenue.”' },
              { es: '[[Como|blue]] no había luz, Elena suspendió el ensayo.', en: 'As there was no light, Elena cancelled the rehearsal.' },
            ] },
          { kind: 'concept', tone: 'teal', label: 'YA QUE · PUESTO QUE · DADO QUE', question: '¿La causa ya se conoce? ¿El texto es formal?', en: 'Is the cause already known? Is the text formal?', formula: ['Ya que / Puesto que / Dado que + causa, consecuencia', 'consecuencia, ya que / puesto que / dado que + causa'],
            meaning: 'Estos tres conectores presentan una causa **conocida** o fácil de aceptar, y son **más formales** que porque. Pueden ir **al principio** o **después** de la frase principal (después, normalmente con coma). **Ya que** es frecuente también al hablar; **puesto que** y **dado que** son sobre todo de textos escritos o situaciones formales.',
            examples: [
              { es: '[[Ya que|teal]] el electricista no viene hasta el lunes, aplazamos el estreno.', en: 'Since the electrician isn’t coming until Monday, we’re postponing the premiere.' },
              { es: 'El estreno se aplaza, [[puesto que|teal]] la sala no tiene luz.', en: 'The premiere is postponed, since the hall has no lighting.' },
              { es: '[[Dado que|teal]] faltan tres días, avisamos al público hoy.', en: 'Given that there are only three days left, we’re letting the audience know today.' },
            ],
            note: 'Uso muy frecuente: **ya que** + una situación presente para proponer algo: «Ya que estás aquí, ¿me ayudas con las sillas?» (since you’re here anyway…).' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '—¿Por qué está cerrada la sala? —___ hay una avería.', options: ['Como', 'Porque', 'Puesto que'], answer: 1, why: 'Respondes a «¿por qué?»: la respuesta empieza con «porque». «Como» no responde preguntas.', en: '“Why is the hall closed?” “Because there’s a fault.”' },
            { prompt: 'Correo del centro cultural: «___ la sala no tiene luz, el ensayo del miércoles queda suspendido».', options: ['Puesto que', 'Es que', 'Por'], answer: 0, why: 'Texto formal y causa con verbo (no tiene): «puesto que». «Es que» es coloquial; «por» va con un nombre.', en: 'Email from the cultural centre: “Since the hall has no lighting, Wednesday’s rehearsal is cancelled.”' },
            { prompt: 'Elena, a Hugo: «___ ya estás aquí, ¿me ayudas a mover el sofá del escenario?».', options: ['Porque', 'Debido a', 'Ya que'], answer: 2, why: '«Ya que» + una situación conocida, para proponer algo: since you’re here anyway.', en: 'Elena to Hugo: “Since you’re here, will you help me move the sofa on the stage?”' },
          ] },
        ] },
        { title: 'Conectores con nombre · Connectors + a noun', mascot: '/brand/mascot/speaking.webp', coach: 'Por la avería, gracias a ti. Because of the fault, thanks to you.', blocks: [
          { kind: 'concept', tone: 'violet', label: 'POR · A CAUSA DE · DEBIDO A', question: '¿La causa es un nombre o un infinitivo?', en: 'Is the cause a noun or an infinitive?', formula: ['por + nombre / infinitivo', 'a causa de / debido a + nombre', 'debido a que + frase (formal)'],
            meaning: 'Cuando la causa es una cosa (un nombre), no necesitas una frase: **por** el tráfico, **a causa de** la lluvia, **debido a** una avería. **Por** es neutro y frecuente; **a causa de** y **debido a** son más formales. Con el mismo sujeto, **por + infinitivo**: «Perdón **por llegar** tarde».',
            examples: [
              { es: 'Hugo llegó tarde [[por|violet]] las obras de la avenida.', en: 'Hugo arrived late because of the roadworks on the avenue.' },
              { es: '[[A causa de|violet]] la lluvia, la feria se hizo dentro.', en: 'Because of the rain, the fair was held indoors.' },
              { es: 'Perdona [[por|violet]] no contestar ayer.', en: 'Sorry for not replying yesterday.' },
            ] },
          { kind: 'compare', title: 'Gracias a / por culpa de · Thanks to / because of (blame)', columns: [
            { tone: 'violet', label: 'GRACIAS A · resultado bueno', sentence: '[[Gracias a|violet]] los vecinos, hay cincuenta sillas más.', idea: 'Agradeces la causa: el resultado es positivo.', en: 'Thanks to the neighbours, there are fifty more chairs.' },
            { tone: 'violet', label: 'POR CULPA DE · resultado malo', sentence: 'Nos quedamos sin luz [[por culpa de|violet]] un cable viejo.', idea: 'Culpas a la causa: el resultado es negativo.', en: 'We were left without lighting because of an old cable.' },
            { tone: 'violet', label: 'DEBIDO A · sin opinión', sentence: '[[Debido a|violet]] una avería, el estreno se aplaza.', idea: 'Informas: no agradeces ni culpas.', en: 'Due to a fault, the premiere is postponed.' },
          ] },
          { kind: 'tip', icon: '💡', title: '«Because of» no es «porque de»', text: 'En inglés dices «because of the rain». En español, **porque** siempre va con un verbo: «porque llovía». Con un nombre, usa **por**, **a causa de** o **debido a**: «por la lluvia». «Porque de la lluvia» no existe.', en: 'In English you say “because of the rain”. In Spanish, porque always goes with a verb: “porque llovía”. With a noun, use por, a causa de or debido a: “por la lluvia”. “Porque de la lluvia” does not exist.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'No hubo ensayo general ___ la avería.', options: ['como', 'por', 'porque'], answer: 1, why: '«La avería» es un nombre: «por» + nombre. «Porque» necesita un verbo.', en: 'There was no dress rehearsal because of the fault.' },
            { prompt: '___ Nuria, ahora las luces del escenario son nuevas.', options: ['Por culpa de', 'Porque', 'Gracias a'], answer: 2, why: 'El resultado es bueno (luces nuevas): agradeces la causa con «gracias a».', en: 'Thanks to Nuria, the stage lights are now new.' },
            { prompt: 'Hugo pide perdón ___ tarde.', options: ['por llega', 'porque llegar', 'por llegar'], answer: 2, why: 'Mismo sujeto (Hugo pide perdón, Hugo llega): «por» + infinitivo.', en: 'Hugo apologises for being late.' },
          ] },
        ] },
        { title: 'Registro y matices · Register and nuance', mascot: '/brand/mascot/standing.webp', coach: '¿Con quién hablas? Who are you talking to?', blocks: [
          { kind: 'table', title: 'Los conectores causales · Causal connectors', head: ['Conector', 'Lo construyes con…', 'Dónde va', 'Registro'], rows: [
            ['[[porque|blue]]', 'porque + frase', 'después de la consecuencia; solo, en una respuesta', 'neutro: oral y escrito'],
            ['[[como|blue]]', 'Como + frase, …', 'solo al principio', 'neutro: oral y escrito'],
            ['[[ya que|teal]]', 'ya que + frase', 'al principio o después (con coma)', 'algo formal; también oral'],
            ['[[puesto que|teal]] · [[dado que|teal]]', '+ frase', 'al principio o después (con coma)', 'formal: sobre todo escrito'],
            ['[[es que|orange]]', 'Es que + frase', 'al principio de una respuesta o de una excusa', 'coloquial (informal)'],
            ['[[por|violet]]', 'por + nombre / infinitivo', 'después o al principio', 'neutro'],
            ['[[a causa de|violet]] · [[debido a|violet]]', '+ nombre (debido a que + frase)', 'al principio o después', 'formal'],
            ['[[gracias a|violet]] / [[por culpa de|violet]]', '+ nombre', 'al principio o después', 'neutro: positivo / negativo'],
          ], note: 'Oral = when you speak; escrito = in writing. Un mensaje a un amigo es escrito, pero informal: allí «es que» es natural.' },
          { kind: 'tip', icon: '🔑', title: '«Es que»: la excusa · “Es que”: the excuse', text: 'Al hablar, **es que** presenta una explicación o una excusa, casi siempre como respuesta a una pregunta, una queja o una invitación: «—¿Vienes al cine? —**Es que** mañana trabajo temprano». Es muy frecuente en todo el mundo hispanohablante, pero en un correo formal o en un aviso suena demasiado informal.', en: 'In speech, es que introduces an explanation or an excuse, almost always in reply to a question, a complaint or an invitation: “Are you coming to the cinema?” “Well, I start work early tomorrow.” It is very common across the Spanish-speaking world, but in a formal email or a notice it sounds too informal.' },
          { kind: 'tip', icon: '🌎', title: 'No porque…, sino porque… · Not because…, but because…', text: 'Para negar una causa falsa y dar la verdadera: «Aplazamos el estreno, **no porque** no **estemos** preparados, **sino porque** no hay luz». La causa que niegas va normalmente en **subjuntivo** (estemos); la causa real, en indicativo (hay). Hoy solo tienes que reconocerlo y entenderlo.', en: 'To reject a false reason and give the real one: “We’re postponing the premiere, not because we aren’t ready, but because there’s no lighting.” The reason you reject usually goes in the subjunctive (estemos); the real one in the indicative (hay). Today you only need to recognise and understand it.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Mensaje de WhatsApp a una amiga: «No puedo ir a tu fiesta, ___ tengo el estreno».', options: ['a causa de', 'dado que', 'es que'], answer: 2, why: 'Mensaje informal a una amiga: «es que» es natural. «Dado que» es formal; «a causa de» necesita un nombre.', en: 'WhatsApp message to a friend: “I can’t come to your party, I’ve got the premiere, you see.”' },
            { prompt: '«No ensayamos tanto porque nos guste, sino porque queremos hacerlo bien.» ¿Por qué ensayan tanto?', options: ['Porque quieren hacerlo bien.', 'Porque la directora lo exige.', 'Porque les gusta mucho.'], answer: 0, why: '«No porque…» niega una causa (con subjuntivo: guste); «sino porque…» da la causa real.', en: '“We don’t rehearse so much because we enjoy it, but because we want to do it well.” Why do they rehearse so much?' },
            { prompt: '¿Qué conector es más formal?', options: ['es que', 'puesto que', 'porque'], answer: 1, why: '«Puesto que» es propio de textos formales; «porque» es neutro y «es que», coloquial.', en: 'Which connector is the most formal?' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: '¿Frase o nombre? ¿Delante o detrás? Clause or noun? Front or back?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la frase con el error y tu alumno explica qué falla: ¿el conector necesita una frase o un nombre?, ¿va delante o detrás?, ¿el registro es adecuado? Después ven la corrección.', self: 'Lee cada frase y piensa: ¿frase o nombre?, ¿delante o detrás?, ¿registro adecuado? Toca para ver la corrección. (Clause or noun? Front or back? Right register?)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Hugo llegó tarde como había obras.', right: 'Hugo llegó tarde porque había obras. / Como había obras, Hugo llegó tarde.', why: '«Como» causal solo va al principio. Detrás de la consecuencia, «porque» o «ya que». (Causal como only goes first.)' },
            { wrong: 'Porque de la avería, no hay estreno.', right: 'Por la avería / Debido a la avería, no hay estreno.', why: 'Calco de «because of». Con un nombre: por, a causa de, debido a. (With a noun, not porque.)' },
            { wrong: 'Debido a la luz no funcionaba, se suspendió el ensayo.', right: 'Debido a que la luz no funcionaba, se suspendió el ensayo.', why: 'Con una frase completa (verbo: funcionaba), «debido a que». «Debido a» solo va con un nombre. (Debido a + noun; debido a que + clause.)' },
            { wrong: 'Gracias a la tormenta, nos quedamos sin luz.', right: 'Por culpa de la tormenta / A causa de la tormenta, nos quedamos sin luz.', why: 'El resultado es malo: «gracias a» suena a agradecimiento. Usa «por culpa de» (culpa) o «a causa de» (neutro).' },
            { wrong: 'Perdona por llegué tarde.', right: 'Perdona por llegar tarde.', why: 'Después de «por» va un nombre o un infinitivo, no un verbo conjugado. (Por + infinitive.)' },
          ] },
          { kind: 'decide', title: '¿Qué conector uso? · Which connector?', steps: [
            { q: '¿La causa es un nombre (la avería, el tráfico) o un infinitivo?', yes: 'Usa **por** (neutro), **a causa de** / **debido a** (formal), o **gracias a** / **por culpa de** si valoras el resultado.', no: 'next' },
            { q: '¿Respondes a «¿por qué?» o pones la causa después de la consecuencia?', yes: 'Usa **porque** (o **es que** si das una excusa informal).', no: 'next' },
            { q: '¿Empiezas la frase con la causa?', yes: 'En general, **como**. Si el texto es formal o la causa ya se conoce, **ya que**, **puesto que**, **dado que**.', no: 'Mira el registro: con amigos, «porque» o «es que»; en un texto formal, «ya que» o «puesto que».' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué frase es correcta?', options: ['No salimos debido a la lluvia.', 'No salimos como llovía.', 'Debido a llovía, no salimos.'], answer: 0, why: '«Debido a» + nombre (la lluvia). Las otras: «debido a» con verbo y «como» detrás.', en: 'Which sentence is correct?' },
            { prompt: '___ el retraso del tren, perdimos la conexión.', options: ['Ya que', 'Gracias a', 'Por culpa de'], answer: 2, why: 'Resultado malo (perdimos la conexión) y causa con nombre: «por culpa de».', en: 'Because of the train delay, we missed our connection.' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno explica la misma causa real de tres formas: a un amigo («Es que…»), de forma neutra («… porque…») y en un aviso («Debido a…, …»).' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'Martes por la tarde, sin luz', coach: 'Toca las expresiones marcadas. Tap the marked expressions.',
      steps: [
        { title: 'En el escenario · On stage', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Elena y tu alumno es Hugo y Nuria. Después tu alumno toca cada expresión marcada y dice si es coloquial, neutra o formal.', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada: ¿es coloquial, neutra o formal? (Colloquial, neutral or formal?)' } },
          { kind: 'explore', title: 'Sin luz a tres días del estreno', setting: 'Martes, siete de la tarde, en la sala del centro cultural Las Acacias. Elena, Hugo y Nuria se tratan de tú. (Tuesday, 7 p.m., in the hall of the Las Acacias cultural centre. Elena, Hugo and Nuria use tú with each other.)', lines: [
            { who: 'Hugo', text: '¡Perdona, Elena! [[Es que|orange]] el autobús ha tardado muchísimo.', en: 'Sorry, Elena! The bus took ages, you see.' },
            { who: 'Elena', text: 'Tranquilo. [[Como|blue]] no llegabas, hemos empezado con la escena dos.', en: 'Don’t worry. As you weren’t here yet, we started with scene two.' },
            { who: 'Hugo', text: 'Ha sido [[por las obras|violet]] de la avenida: todo el tráfico pasa por mi calle.', en: 'It was because of the roadworks on the avenue: all the traffic goes down my street.' },
            { who: 'Nuria', text: 'Elena, tenemos un problema: las luces no funcionan [[porque|blue]] hay una avería en la instalación eléctrica.', en: 'Elena, we’ve got a problem: the lights aren’t working because there’s a fault in the wiring.' },
            { who: 'Elena', text: '¿Y no se puede arreglar esta semana?', en: 'And can’t it be fixed this week?' },
            { who: 'Nuria', text: 'No, [[ya que|teal]] el electricista del centro no puede venir hasta el lunes. Y sin luces no hay ensayo general.', en: 'No, since the centre’s electrician can’t come until Monday. And without lights there’s no dress rehearsal.' },
            { who: 'Hugo', text: 'Bueno, [[ya que estamos aquí|teal]], podemos ensayar el texto sentados.', en: 'Well, since we’re here anyway, we can rehearse the lines sitting down.' },
            { who: 'Elena', text: 'Buena idea. Pero el viernes no podemos estrenar. [[Dado que|teal]] faltan solo tres días, hay que avisar al público hoy mismo.', en: 'Good idea. But we can’t open on Friday. Given that there are only three days left, we need to tell the audience today.' },
            { who: 'Nuria', text: '¡Qué mala suerte! Todo [[por culpa de|violet]] un cable viejo.', en: 'What bad luck! All because of an old cable.' },
            { who: 'Hugo', text: 'Al menos, [[gracias a|violet]] los vecinos, ahora tenemos cincuenta sillas más.', en: 'At least, thanks to the neighbours, we now have fifty more chairs.' },
            { who: 'Elena', text: 'Sí. Y en el aviso quiero dejar algo claro: aplazamos el estreno, pero [[no porque|blue]] no estemos preparados, [[sino porque|blue]] queremos hacerlo bien.', en: 'Yes. And in the notice I want to make one thing clear: we’re postponing the premiere, but not because we aren’t ready, but because we want to do it properly.' },
            { who: 'Nuria', text: 'Pues empieza así: «[[Debido a|violet]] una avería eléctrica, el estreno se aplaza al viernes 14».', en: 'Then start like this: “Due to an electrical fault, the premiere is postponed to Friday the 14th.”' },
          ], notes: {
            'Es que': 'Coloquial: Hugo se disculpa con una excusa, como respuesta a la situación (llega tarde). Perfecto entre compañeros; no en un aviso.',
            'Como': 'Causa al principio, antes de la consecuencia (hemos empezado con la escena dos). «Como» nunca va detrás.',
            'por las obras': '«Por» + nombre: la causa es una cosa, no una frase. Neutro y muy frecuente. No «porque de las obras».',
            'porque': 'Causa después de la consecuencia (las luces no funcionan), con una frase completa: neutro.',
            'ya que': 'Causa conocida, un poco más formal que «porque». Después de «No,» explica la respuesta.',
            'ya que estamos aquí': '«Ya que» + una situación presente para proponer algo: since we’re here anyway. Muy frecuente al hablar.',
            'Dado que': 'Formal: presenta un dato que todos conocen (faltan tres días) para justificar una decisión. Más típico de textos escritos.',
            'por culpa de': 'Nombre + valoración negativa: Nuria culpa al cable del problema.',
            'gracias a': 'Nombre + valoración positiva: los vecinos son la causa de algo bueno.',
            'no porque': 'Niega una causa falsa. El verbo va en subjuntivo: **estemos** (de estar). Solo tienes que reconocerlo.',
            'sino porque': 'Da la causa verdadera, en indicativo: queremos hacerlo bien.',
            'Debido a': 'Formal, para un aviso: «debido a» + nombre (una avería eléctrica). No informa de culpas, solo del hecho.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Por qué llegó tarde Hugo?', options: ['Porque se quedó dormido.', 'Por las obras de la avenida.', 'Porque no había luz en el teatro.'], answer: 1, why: '«Ha sido por las obras de la avenida».', en: 'Why was Hugo late?' },
            { prompt: '¿Por qué no se puede arreglar la avería esta semana?', options: ['Es muy cara.', 'El centro está cerrado.', 'El electricista no puede venir hasta el lunes.'], answer: 2, why: '«Ya que el electricista del centro no puede venir hasta el lunes».', en: 'Why can’t the fault be fixed this week?' },
            { prompt: 'Según Elena, ¿por qué aplazan el estreno?', options: ['Porque los actores no están preparados.', 'Porque los vecinos se quejaron.', 'Porque quieren hacerlo bien.'], answer: 2, why: '«No porque no estemos preparados, sino porque queremos hacerlo bien».', en: 'According to Elena, why are they postponing the premiere?' },
          ] },
        ] },
        { title: '¿Coloquial, neutro o formal? · Colloquial, neutral or formal?', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'classify', title: 'Frases de la tarde · Sentences from that afternoon', categories: [
            { id: 'coloquial', label: 'COLOQUIAL · entre amigos', tone: 'orange' },
            { id: 'neutro', label: 'NEUTRO · casi siempre sirve', tone: 'blue' },
            { id: 'formal', label: 'FORMAL · aviso o correo oficial', tone: 'teal' },
          ], items: [
            { text: 'Es que el autobús ha tardado muchísimo.', answer: 'coloquial', why: '«Es que»: una excusa al hablar.' },
            { text: 'Las luces no funcionan porque hay una avería.', answer: 'neutro', why: '«Porque» sirve en casi cualquier situación.' },
            { text: 'Dado que faltan tres días, se informa al público.', answer: 'formal', why: '«Dado que» y «se informa»: lenguaje de aviso.' },
            { text: 'Como no llegabas, hemos empezado.', answer: 'neutro', why: '«Como» al principio: neutro, oral y escrito.' },
            { text: 'Debido a una avería eléctrica, el estreno se aplaza.', answer: 'formal', why: '«Debido a» + nombre: típico de avisos.' },
            { text: '¿Mañana? Es que tengo cita con el médico.', answer: 'coloquial', why: '«Es que» responde con una excusa: coloquial.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: «¿Cómo dice Hugo lo de las obras a Elena? ¿Y cómo lo escribiría el centro en un cartel?». Respuesta posible: «Es que hay obras» / «Debido a las obras en la avenida…».' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: '¿Frase o nombre? ¿Formal o no? Clause or noun? Formal or not?',
      steps: [
        { title: 'Los avisos del grupo · The group’s notices', blocks: [
          { kind: 'choice', items: [
            { context: 'Nuria habla con Elena. (Nuria talks to Elena.)', prompt: 'Hoy no podemos probar el sonido ___ el técnico de audio está enfermo.', options: ['porque', 'como', 'debido a'], answer: 0, why: 'Causa después de la consecuencia, con verbo (está): «porque». «Como» va delante; «debido a» necesita un nombre.', en: 'We can’t test the sound today because the sound technician is ill.' },
            { context: 'Elena, al grupo. (Elena, to the group.)', prompt: '___ la nueva fecha es el viernes 14, vamos a cambiar los carteles.', options: ['Como', 'Por', 'Porque'], answer: 0, why: 'Causa al principio, con verbo (es): «Como». «Por» va con un nombre.', en: 'As the new date is Friday the 14th, we’re going to change the posters.' },
            { context: 'Aviso en la web del centro. (Notice on the centre’s website.)', prompt: 'La función del viernes se aplaza ___ problemas técnicos.', options: ['es que', 'ya que', 'debido a'], answer: 2, why: '«Problemas técnicos» es un nombre y el texto es formal: «debido a». «Ya que» necesita una frase.', en: 'Friday’s performance is postponed due to technical problems.' },
            { context: 'Hugo responde por WhatsApp. (Hugo replies on WhatsApp.)', prompt: 'Perdona por no contestar antes, ___ estaba en el ensayo.', options: ['a causa de', 'puesto que', 'es que'], answer: 2, why: 'Una excusa en un mensaje informal: «es que». «Puesto que» es correcto, pero demasiado formal aquí; «a causa de» necesita un nombre.', en: 'Sorry for not replying sooner, I was at rehearsal.' },
            { context: 'Nuria cuenta el martes. (Nuria tells what happened on Tuesday.)', prompt: 'Al final, el ensayo terminó a las once ___ la avería.', options: ['como', 'por', 'porque'], answer: 1, why: '«La avería» es un nombre: «por». «Porque» y «como» necesitan un verbo.', en: 'In the end, the rehearsal finished at eleven because of the fault.' },
          ] },
        ] },
        { title: '¿Gracias a, por culpa de o debido a? · Positive, negative or neutral?', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'classify', title: '¿Qué conector va en el hueco? · Which connector fills the gap?', categories: [
            { id: 'gracias', label: 'GRACIAS A · resultado bueno', tone: 'violet' },
            { id: 'culpa', label: 'POR CULPA DE · queja', tone: 'orange' },
            { id: 'debido', label: 'DEBIDO A · aviso neutro', tone: 'teal' },
          ], items: [
            { text: 'Elena, contenta: «___ la ayuda de Nuria, la sala está preciosa».', answer: 'gracias', why: 'Resultado bueno y agradecimiento: «gracias a».' },
            { text: 'Nuria se queja: «___ un cable viejo, perdimos el ensayo general».', answer: 'culpa', why: 'Una queja: culpa al cable de un resultado malo.' },
            { text: 'Aviso oficial: «___ las obras, el autobús 12 cambia de ruta».', answer: 'debido', why: 'Un aviso informa sin valorar: «debido a».' },
            { text: 'Hugo, enfadado: «___ el tráfico, he llegado tarde otra vez».', answer: 'culpa', why: 'Hugo está enfadado y culpa al tráfico.' },
            { text: 'Nota del centro: «___ la lluvia, la feria del sábado se hace dentro».', answer: 'debido', why: 'Una nota oficial, neutra: «debido a».' },
            { text: 'Hugo, a sus vecinos: «___ ustedes, hoy tenemos sillas para todos».', answer: 'gracias', why: 'Hugo agradece a los vecinos un resultado bueno.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Nuria se quedó hasta tarde como había mucho trabajo.', ok: false, options: ['Nuria se quedó hasta tarde porque había mucho trabajo.', 'Nuria se quedó hasta tarde, como había mucho trabajo.', 'Nuria se quedó hasta tarde como que había mucho trabajo.'], answer: 0, why: '«Como» causal no va detrás de la consecuencia, ni con coma. Detrás: «porque» (o «ya que»).' },
            { sentence: 'Debido a el teatro estaba cerrado, ensayamos en un parque.', ok: false, options: ['Debido el teatro estaba cerrado, ensayamos en un parque.', 'Debido a que el teatro estaba cerrado, ensayamos en un parque.', 'Debido al teatro estaba cerrado, ensayamos en un parque.'], answer: 1, why: 'La causa es una frase completa (estaba cerrado): «debido a que».' },
            { sentence: 'Puesto que ya tienes entrada, no necesitas comprar otra.', ok: true, why: 'Correcta: «puesto que» + frase al principio, para una causa conocida (ya tienes entrada).' },
            { sentence: 'Porque del mal tiempo, la función empezó tarde.', ok: false, options: ['Como el mal tiempo, la función empezó tarde.', 'A causa del mal tiempo, la función empezó tarde.', 'Porque el mal tiempo, la función empezó tarde.'], answer: 1, why: 'Con un nombre (el mal tiempo): «a causa de» (o «por»). «Porque» y «como» necesitan un verbo.' },
            { sentence: 'Gracias a la tormenta, se cortó la luz en todo el barrio.', ok: false, options: ['Por gracias a la tormenta, se cortó la luz en todo el barrio.', 'Gracias de la tormenta, se cortó la luz en todo el barrio.', 'Por culpa de la tormenta, se cortó la luz en todo el barrio.'], answer: 2, why: 'Un corte de luz es malo: «por culpa de» (o «a causa de», neutro). «Gracias a» es para resultados buenos.' },
          ] },
        ] },
        { title: 'Una llamada al público · A call to a ticket holder', mascot: '/brand/mascot/speaking.webp', blocks: [
          { kind: 'chat-fill', title: 'Elena llama al señor Ibarra (usted) · Elena calls Mr Ibarra', lines: [
            { who: 'Elena', text: 'Buenas tardes, señor Ibarra. Le llamo del grupo La Lámpara. El estreno del viernes se aplaza ___ una avería eléctrica.', options: ['como', 'porque', 'por'], answer: 2, why: '«Una avería» es un nombre: «por».' },
            { who: 'Señor Ibarra', text: '¡Vaya! ¿Y mi entrada? ___ vivo lejos, no puedo ir a la taquilla esta semana.', options: ['Como', 'Porque', 'Por'], answer: 0, why: 'Causa al principio, con verbo (vivo): «Como».' },
            { who: 'Elena', text: 'No se preocupe: no tiene que cambiarla, ___ sirve para la nueva fecha, el viernes 14.', options: ['a causa de', 'como', 'ya que'], answer: 2, why: 'Causa después, con verbo (sirve): «ya que». «Como» no va detrás; «a causa de» necesita un nombre.' },
            { who: 'Señor Ibarra', text: 'Perfecto. Y perdone ___ no contestar ayer: tenía el teléfono apagado.', options: ['por', 'porque', 'gracias a'], answer: 0, why: 'Pedir perdón por algo que hizo uno mismo: «por» + infinitivo (no contestar).' },
            { who: 'Elena', text: 'No pasa nada. Ah, y una buena noticia: ___ los vecinos, ahora hay cincuenta sillas más.', options: ['gracias a', 'por culpa de', 'debido'], answer: 0, why: 'Resultado bueno: «gracias a». «Debido» solo no funciona: «debido a».' },
            { who: 'Señor Ibarra', text: '¡Qué bien! Entonces nos vemos el 14. Muchas gracias por avisar.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['Como', 'no', 'había', 'luz,', 'ensayamos', 'sentados'], accept: ['Como no había luz, ensayamos sentados'], en: 'As there was no light, we rehearsed sitting down.' },
            { tiles: ['El', 'estreno', 'se', 'aplaza', 'debido', 'a', 'una', 'avería'], accept: ['El estreno se aplaza debido a una avería', 'Debido a una avería el estreno se aplaza'], en: 'The premiere is postponed due to a fault.' },
            { tiles: ['Ya', 'que', 'estás', 'aquí,', 'ayúdame', 'con', 'las', 'sillas'], accept: ['Ya que estás aquí, ayúdame con las sillas'], en: 'Since you’re here, help me with the chairs.' },
            { tiles: ['Hugo', 'llegó', 'tarde', 'por', 'las', 'obras'], accept: ['Hugo llegó tarde por las obras', 'Por las obras Hugo llegó tarde'], en: 'Hugo arrived late because of the roadworks.' },
          ] },
        ] },
        { title: 'Cambia el conector · Change the connector', blocks: [
          { kind: 'rewrite', title: 'La misma causa, otra forma · The same cause, another way', items: [
            { prompt: 'No hay ensayo general porque el electricista no puede venir hasta el lunes.', instruction: 'Pon la causa al principio con «Como».', accept: ['Como el electricista no puede venir hasta el lunes, no hay ensayo general', 'Como el electricista no puede venir hasta el lunes no hay ensayo general'] },
            { prompt: 'El público ya tiene entradas. No hace falta venderlas otra vez.', instruction: 'Une las frases con «Puesto que» al principio (registro formal).', accept: ['Puesto que el público ya tiene entradas, no hace falta venderlas otra vez', 'Puesto que el público ya tiene entradas no hace falta venderlas otra vez'] },
            { prompt: 'Hugo llegó tarde porque había obras en la avenida.', instruction: 'Usa «por» + nombre (las obras). Empieza con «Hugo».', accept: ['Hugo llegó tarde por las obras', 'Hugo llegó tarde por las obras de la avenida', 'Hugo llegó tarde por las obras en la avenida'] },
            { prompt: 'Hugo pide perdón porque llegó tarde.', instruction: 'Mismo sujeto: usa «por» + infinitivo. Empieza con «Hugo».', accept: ['Hugo pide perdón por llegar tarde', 'Hugo pide perdón por haber llegado tarde'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno da una causa real de su semana dos veces: a un amigo (con «es que» o «porque») y en un correo a su jefe o profesor (con «ya que» o «debido a»).' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'El mensaje del teléfono del teatro', coach: 'Primero escucha sin leer. Listen first, read later.',
      steps: [
        { title: 'Un mensaje grabado · A recorded message', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general (¿qué pasa con el estreno?). Segunda escucha: tu alumno levanta la mano con cada conector de causa (debido a, como, puesto que…). Después, las preguntas.', self: 'Escucha una vez para la idea general y otra para los detalles. Cuenta los conectores de causa que oyes. Vas a oír «esté» (subjuntivo de estar) después de «no porque»: solo tienes que entenderlo. (Listen once for the gist, once for the details.)' } },
          { kind: 'listen', title: 'El teléfono de La Lámpara', channel: 'MENSAJE GRABADO · TELÉFONO DEL GRUPO DE TEATRO', src: '/audio/grammar-live/415.mp3',
            before: 'Un vecino llama al teléfono del teatro y escucha un mensaje grabado de Elena. ¿Qué crees que explica: la nueva fecha, la causa, qué pasa con las entradas…? (A neighbour calls the theatre and hears Elena’s recorded message. What do you think she explains?)',
            gist: { prompt: '¿Cuál es la idea general? · What is the main idea?', options: ['El grupo cancela la obra para siempre.', 'El estreno se aplaza por una avería, y las entradas sirven para la nueva fecha.', 'El teatro busca actores nuevos para el estreno.'], answer: 1, why: '«El estreno… se aplaza al viernes 14» y la entrada «sirve para la nueva fecha».', en: 'What is the main idea?' },
            details: [
              { prompt: '¿Por qué no pueden usar las luces y el sonido?', options: ['Porque son muy caros.', 'Por culpa de una tormenta.', 'Por una avería eléctrica en la sala.'], answer: 2, why: '«Debido a una avería eléctrica en la sala».', en: 'Why can’t they use the lights and sound?' },
              { prompt: 'Según Elena, ¿la obra está lista?', options: ['No, les falta ensayar.', 'Sí: no aplazan porque no esté lista, sino para ofrecerla completa.', 'No lo dice.'], answer: 1, why: '«No lo aplazamos porque la obra no esté lista, sino porque queremos ofrecerle el espectáculo completo».', en: 'According to Elena, is the play ready?' },
              { prompt: '¿Qué pasa si una persona no puede venir el día 14?', options: ['Tiene que comprar otra entrada.', 'Puede venir otro día de la semana.', 'Le devuelven el dinero en la taquilla.'], answer: 2, why: '«Si no puede venir el día 14, le devolvemos el dinero en la taquilla».', en: 'What happens if someone can’t come on the 14th?' },
              { prompt: '¿Cuál es la buena noticia?', options: ['Hay cincuenta asientos más gracias a los vecinos.', 'La entrada ahora es gratis.', 'El electricista ya vino.'], answer: 0, why: '«Gracias a los vecinos que nos han prestado sillas, la sala tiene ahora cincuenta asientos más».', en: 'What is the good news?' },
            ],
            transcript: 'Buenas tardes. Ha llamado al grupo de teatro La Lámpara, del centro cultural Las Acacias. Le habla Elena Vidal, la directora. Le informamos de que el estreno de «La casa del reloj», previsto para este viernes, se aplaza al viernes 14. [[Debido a|violet]] una avería eléctrica en la sala, esta semana no podemos usar las luces ni el sonido. [[Como|blue]] la reparación va a tardar unos días, hemos decidido esperar. Pero no lo aplazamos [[porque|blue]] la obra no esté lista, [[sino porque|blue]] queremos ofrecerle el espectáculo completo. [[Puesto que|teal]] muchas personas ya tienen su entrada, no es necesario cambiarla: sirve para la nueva fecha. Si no puede venir el día 14, le devolvemos el dinero en la taquilla, [[ya que|teal]] usted compró la entrada para otro día. Y una buena noticia: [[gracias a|violet]] los vecinos que nos han prestado sillas, la sala tiene ahora cincuenta asientos más. Muchas gracias [[por|violet]] su paciencia, y hasta el viernes 14.',
            reply: { teacher: 'Tú eres el señor Ibarra y no puedes ir el día 14. Tu alumno es Elena y te responde: explica otra vez la causa del cambio con un conector formal y qué puedes hacer con tu entrada.', self: 'Imagina que no puedes ir el día 14. Deja un mensaje de voz a Elena: di por qué no puedes ir (con «es que» o «ya que») y pregunta por tu entrada. (Leave Elena a voice message: why you can’t go and what about your ticket.)' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Explicar causas en el grupo', coach: 'Elige el conector según con quién hablas. Choose by who you’re talking to.',
      steps: [
        { title: '¿Por qué? · Why?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas y tu alumno responde con causas reales o inventadas (su trabajo, sus clases, un grupo o club). Tú repites su frase con el conector adecuado al registro y sigues con la repregunta.', self: 'Piensa en tu vida real o en un grupo o club inventado. Lee la pregunta, responde en voz alta y cambia de conector en cada tarjeta. (Answer aloud with a different connector on each card.)' } },
          { kind: 'talk', cards: [
            { q: 'Llegas tarde a una reunión o a una clase. ¿Qué le dices a tu compañero? · You arrive late to a meeting or a class. What do you tell your colleague?', followUps: ['¿Te pasa a menudo? (Does it happen often?)', '¿Y qué dices a tu jefe o profesor? (And what do you tell your boss or teacher?)'], phrases: ['Perdona, [[es que|orange]]…', 'He llegado tarde [[por|violet]] el tráfico / las obras…', 'Perdona [[por|violet]] llegar tarde.'], hint: 'Con un compañero, «es que» + frase o «por» + nombre.', example: 'Perdona, es que el metro iba lleno y he esperado veinte minutos. Perdona por llegar tarde.', next: 'Ahora, una decisión.', teacher: 'Responde tú también con una excusa corta («Es que…»), y después pregunta: «¿Y cómo lo dices en un correo a tu jefe?».' },
            { q: '¿Qué decisión tomaste este mes por una causa clara? Empieza por la causa. · What decision did you make this month for a clear reason? Start with the reason.', followUps: ['¿Fue fácil decidir? (Was it easy to decide?)', '¿Qué otra opción tenías? (What other option did you have?)'], phrases: ['[[Como|blue]]…, decidí…', '[[Ya que|teal]]…, …', '…[[porque|blue]]…'], hint: '«Como» o «ya que» al principio, coma, y la decisión.', example: 'Como trabajo cerca de casa, decidí ir al trabajo en bicicleta. Y ya que ahora tengo más tiempo libre, me apunté a un curso de cocina.', next: 'Ahora, aprovecha la ocasión.' },
            { q: 'Un amigo está en tu casa. Pídele algo con «ya que». · A friend is at your place. Ask them for something with “ya que”.', followUps: ['¿Y si dice que no? (And if they say no?)', '¿Qué haces tú a cambio? (What do you do in return?)'], phrases: ['[[Ya que estás aquí|teal]], ¿me ayudas con…?', '[[Ya que|teal]] vas al centro, ¿me compras…?'], hint: '«Ya que» + algo que ya pasa (estás aquí, vas al centro) + una petición.', example: 'Ya que estás aquí, ¿me ayudas a colgar este cuadro? Y ya que vas al centro, ¿me compras un cuaderno?', next: 'Ahora, lo bueno y lo malo.' },
            { q: 'Cuenta algo bueno que conseguiste gracias a alguien, y algo malo por culpa de algo. · Tell something good you got thanks to someone, and something bad because of something.', followUps: ['¿Le diste las gracias? (Did you thank them?)', '¿Se pudo solucionar? (Could it be solved?)'], phrases: ['[[Gracias a|violet]] mi…, pude…', '[[Por culpa de|violet]] la lluvia / una huelga…, …'], hint: '«Gracias a» con un resultado bueno; «por culpa de» con uno malo. Las dos van con un nombre.', example: 'Gracias a mi vecina, encontré trabajo en su empresa. Por culpa de una huelga de trenes, perdí una entrevista.', next: 'Ahora, en formal.' },
            { q: 'Eres responsable de un grupo o una actividad y hay un cambio. Explícalo como en un aviso oficial. · You run a group or an activity and something changes. Explain it as in an official notice.', followUps: ['¿Cuál es la nueva fecha? (What is the new date?)', '¿Qué pasa con las personas apuntadas? (What happens to the people signed up?)'], phrases: ['[[Debido a|violet]] / [[A causa de|violet]]…, la actividad se aplaza…', '[[Puesto que|teal]] / [[Dado que|teal]]…, …'], hint: 'Registro formal: «debido a» + nombre, «puesto que» + frase. Nada de «es que».', example: 'Debido a la lluvia, la excursión del sábado se aplaza al domingo. Puesto que el autobús ya está pagado, no es necesario pagar otra vez.', next: 'Ahora, la causa verdadera.' },
            { q: 'Alguien piensa una causa equivocada de algo que haces. Corrígela. · Someone has the wrong idea about why you do something. Correct it.', followUps: ['¿Por qué lo pensaba? (Why did they think so?)', '¿Desde cuándo lo haces? (Since when have you done it?)'], phrases: ['No lo hago [[porque|blue]]…, [[sino porque|blue]]…', 'No es [[por|violet]]…, es [[por|violet]]…'], hint: 'La forma más fácil: «No es por + nombre, es por + nombre». Si te atreves: «no porque + subjuntivo, sino porque…».', example: 'Estudio español, pero no es por mi trabajo, es por mi familia. No lo estudio porque sea obligatorio, sino porque me encanta.', teacher: 'Aquí «no porque + subjuntivo» es opcional: acepta «No es por…, es por…» como respuesta completa.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tu alumno hace las preguntas («¿Por qué llegas tarde?», «¿Por qué cambiaste de plan?») y tú respondes, unas veces de forma coloquial y otras formal. Tu alumno dice qué registro usas.', self: 'Ahora cambia de papel: haz las preguntas en voz alta y responde dos veces, primero a un amigo y después en formal. (Ask the questions and answer twice: informally and formally.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Un correo formal', coach: 'Causas formales, sin «es que». Formal causes, no “es que”.',
      steps: [
        { title: 'Nuria escribe al centro cultural · Nuria writes to the cultural centre', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos cada conector: ¿va con frase o con nombre? ¿Es adecuado para un correo formal? Después tu alumno lee su correo en voz alta.', self: 'Escribe tu correo y toca «Revisar mi texto». Después revisa cada conector: ¿frase o nombre? ¿Es formal? (Check each connector: clause or noun? Is it formal?)' } },
          { kind: 'write', title: 'Pedir la sala para una nueva fecha · Asking for the hall on a new date', situation: 'Eres Nuria (o eres tú, en tu grupo, club o equipo). Escribe un correo formal a la señora Pardo, directora del centro cultural: explica por qué el grupo no pudo ensayar, por qué aplaza el estreno y pide la sala para la nueva fecha. (You are Nuria, or yourself in your own group, club or team. Write a formal email to Mrs Pardo, the director of the cultural centre: explain why the group couldn’t rehearse and why it is postponing the premiere, and ask for the hall on the new date.)', task: [
            'Saluda con un registro formal y di en nombre de quién escribes. (Greet formally and say who you are writing for.)',
            'Explica qué pasó con «debido a» o «a causa de» + nombre. (Explain what happened with a formal connector + noun.)',
            'Explica la decisión con «como», «ya que» o «puesto que» + frase. (Explain the decision with a connector + clause.)',
            'Haz tu petición y menciona algo bueno con «gracias a». (Make your request and mention something good with “gracias a”.)',
            'Da las gracias y despídete de forma formal. (Thank her and sign off formally.)',
          ], starters: ['Estimada señora Pardo:', 'Le escribo en nombre de…', 'Debido a…, …', 'Como…, hemos decidido…', 'Ya que la sala está libre…, ¿podríamos…?', 'Gracias a…', 'Muchas gracias por…', 'Un saludo cordial,'],
            words: ['debido a', 'a causa de', 'como', 'ya que', 'puesto que', 'dado que', 'porque', 'gracias a', 'por', 'aplazar', 'la avería', 'el estreno'],
            model: 'Estimada señora Pardo: Le escribo en nombre del grupo de teatro La Lámpara. El martes no pudimos hacer el ensayo general [[debido a|violet]] una avería en la instalación eléctrica de la sala. [[Como|blue]] el electricista no puede venir hasta el lunes, hemos decidido aplazar el estreno. [[Ya que|teal]] la sala está libre el viernes 14, ¿podríamos usarla ese día de seis a once de la noche? La obra está lista: el problema es solo técnico. Además, [[gracias a|violet]] los vecinos, ahora tenemos cincuenta sillas más, así que esperamos mucho público. Muchas gracias [[por|violet]] su ayuda. Un saludo cordial, Nuria Campos, técnica de luces.',
            minWords: 80,
            checks: [
              { label: 'Una causa formal: debido a, a causa de, ya que, puesto que… (a formal cause)', pattern: '(?<!\\p{L})(?:debido\\s+a|a\\s+causa\\s+de|ya\\s+que|puesto\\s+que|dado\\s+que)(?!\\p{L})', tip: 'Da una causa formal: «Debido a una avería…», «Puesto que la sala no tiene luz…».' },
              { label: '«Como» al principio de una frase (como at the start)', pattern: '(?:^|[.!?:;]\\s*)como(?!\\p{L})', tip: 'Empieza una frase con la causa: «Como el electricista no puede venir, …».' },
              { label: '«Gracias a» (something good)', pattern: '(?<!\\p{L})gracias\\s+al?(?!\\p{L})', tip: 'Menciona algo bueno: «Gracias a los vecinos, tenemos más sillas».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})porque\\s+del?(?!\\p{L})', why: '«Porque» va con un verbo. Con un nombre: **por**, **a causa de** o **debido a** («debido a la avería»).' },
              { pattern: '(?<!\\p{L})gracias\\s+a\\s+(?:la|una)\\s+(?:avería|averia|tormenta|lluvia)(?!\\p{L})', why: 'Un problema no se agradece: **por culpa de** o **debido a** la avería.' },
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
            { tone: 'blue', label: 'NEUTRO · PORQUE / COMO', formula: 'consecuencia + porque… · Como…, consecuencia', example: 'No ensayamos porque no hay luz. / Como no había luz, ensayamos sentados.', caption: '«porque» responde a ¿por qué?; «como», solo al principio', en: '“porque” answers why; “como” only at the start' },
            { tone: 'teal', label: 'CAUSA CONOCIDA · FORMAL', formula: 'ya que · puesto que · dado que + frase', example: 'Puesto que ya tiene entrada, no necesita cambiarla.', caption: 'delante o detrás; ya que también al hablar', en: 'front or after; ya que is also common in speech' },
            { tone: 'violet', label: 'CAUSA + NOMBRE', formula: 'por · a causa de · debido a · gracias a · por culpa de', example: 'Debido a una avería, el estreno se aplaza.', caption: 'gracias a = bueno; por culpa de = malo; debido a = neutro', en: 'gracias a = good result; por culpa de = bad; debido a = neutral' },
            { tone: 'orange', label: 'COLOQUIAL · ES QUE', formula: 'Es que + frase', example: '—¿Vienes? —Es que mañana trabajo temprano.', caption: 'una excusa al hablar; no en textos formales', en: 'a spoken excuse; not in formal texts' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Haz dos preguntas. **¿Frase o nombre?** Con frase: porque, como, ya que, puesto que. Con nombre: por, debido a, gracias a. **¿Con quién hablas?** Con amigos, «es que» y «porque»; en un aviso o un correo formal, «debido a», «ya que», «puesto que». Y recuerda: «como» siempre delante, y nunca «porque de».', en: 'Ask two questions. Clause or noun? With a clause: porque, como, ya que, puesto que. With a noun: por, debido a, gracias a. Who are you talking to? With friends, “es que” and “porque”; in a notice or a formal email, “debido a”, “ya que”, “puesto que”. And remember: “como” always goes first, and never “porque de”.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: '___ hoy es festivo, la biblioteca está cerrada.', options: ['Como', 'Por', 'Porque'], answer: 0, why: 'Causa al principio, con verbo (es): «Como».', en: 'As today is a public holiday, the library is closed.' },
            { prompt: 'Aviso del aeropuerto: «El vuelo sale con retraso ___ la niebla».', options: ['es que', 'debido a', 'ya que'], answer: 1, why: 'Aviso formal y causa con nombre (la niebla): «debido a».', en: 'Airport notice: “The flight is delayed due to fog.”' },
            { prompt: '—¿Por qué no viniste a la cena? —___ tenía fiebre.', options: ['Debido a', 'Es que', 'Puesto que'], answer: 1, why: 'Una excusa en una conversación informal: «Es que».', en: '“Why didn’t you come to dinner?” “I had a temperature, you see.”' },
            { prompt: '___ mi hermana, encontré apartamento en una semana.', options: ['Porque', 'Por culpa de', 'Gracias a'], answer: 2, why: 'Resultado bueno y causa con nombre: «gracias a».', en: 'Thanks to my sister, I found an apartment in a week.' },
            { prompt: 'Me pusieron una multa ___ ir demasiado rápido.', options: ['como', 'porque', 'por'], answer: 2, why: '«Por» + infinitivo (ir demasiado rápido): la causa de la multa.', en: 'I got a fine for going too fast.' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/walking.webp', coach: 'Ahora, una excursión. Now, a trip.', blocks: [
          { kind: 'lead', text: 'Un grupo de amigos organiza una excursión a la montaña, pero el plan cambia. Reescribe las frases con el conector que se indica.', en: 'A group of friends is organising a trip to the mountains, but the plan changes. Rewrite the sentences with the connector given.' },
          { kind: 'rewrite', title: 'La excursión · The trip', items: [
            { prompt: 'La excursión se cancela porque va a llover.', instruction: 'Pon la causa al principio con «Como».', accept: ['Como va a llover, la excursión se cancela', 'Como va a llover, se cancela la excursión'] },
            { prompt: 'Marta tiene coche. Podemos ir a la montaña.', instruction: 'Usa «gracias a» + el coche de Marta. Empieza con «Gracias».', accept: ['Gracias al coche de Marta, podemos ir a la montaña', 'Gracias al coche de Marta podemos ir a la montaña'] },
            { prompt: 'No vamos el sábado. Hay huelga de trenes.', instruction: 'Une las frases con «ya que» después de la primera.', accept: ['No vamos el sábado, ya que hay huelga de trenes', 'No vamos el sábado ya que hay huelga de trenes'] },
          ] },
        ] },
        { title: 'Ampliación: registro y causa negada · Extension: register and rejected reasons', mascot: '/brand/mascot/portrait.webp', coach: 'Para quien quiere más. For those who want more.', blocks: [
          { kind: 'tip', icon: '✍', title: 'Del pasillo al correo · From the corridor to the email', text: 'La misma causa cambia de forma según el registro: «Es que el profe está enfermo» (pasillo) → «No hay clase porque el profesor está enfermo» (neutro) → «Debido a la enfermedad del profesor, se suspende la clase» (aviso). En textos formales es frecuente pasar de una frase a un **nombre**: está enfermo → la enfermedad; llueve → la lluvia.', en: 'The same cause changes shape with the register: from the corridor, to neutral, to an official notice. In formal texts it is common to turn a clause into a noun: “is ill” → “the illness”; “it’s raining” → “the rain”.' },
          { kind: 'choice', title: 'Más allá · Going further', items: [
            { prompt: '«No te llamo porque quiera pedirte algo, sino porque te echo de menos.» ¿Por qué llama?', options: ['No lo dice.', 'Porque quiere pedirle algo.', 'Porque lo echa de menos.'], answer: 2, why: '«No porque» niega una causa (en subjuntivo: quiera); «sino porque» da la real (en indicativo: echo de menos).', en: '“I’m not calling because I want something from you, but because I miss you.” Why is the person calling?' },
            { prompt: 'Correo de la universidad: «___ el edificio está en obras, las clases del lunes serán en línea».', options: ['Es que', 'A causa de', 'Dado que'], answer: 2, why: 'Texto formal y causa con verbo (está): «dado que». «Es que» es coloquial y «a causa de» necesita un nombre.', en: 'Email from the university: “Since the building is under renovation, Monday’s classes will be online.”' },
            { prompt: '«Ya que vas al mercado, ¿me compras pan?» Aquí «ya que» significa…', options: ['aprovechando que vas (since you’re going anyway)', 'porque tienes que ir obligatoriamente', 'aunque no quieres ir'], answer: 0, why: '«Ya que» + una situación que ya existe, para pedir o proponer algo.', en: '“Since you’re going to the market, will you buy me some bread?” Here “ya que” means…' },
            { prompt: '¿Qué versión es la más adecuada para un cartel oficial?', options: ['Es que hay huelga, así que no hay autobuses.', 'A causa de la huelga, hoy no hay servicio de autobuses.', 'No hay autobuses por culpa de la huelga, ¡qué horror!'], answer: 1, why: '«A causa de» + nombre, sin opinión: registro de aviso. Las otras dos son coloquiales.', en: 'Which version is best for an official sign?' },
          ] },
          { kind: 'teacher', text: 'Paso opcional: para estudiantes rápidos o si hay tiempo extra. «No porque + subjuntivo» es solo para reconocer; su uso activo se trabaja en B2.' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 116 · Consecutivas: así que, por eso, de modo que', text: 'Ya sabes presentar la **causa** con el conector adecuado: «Como no había luz…», «Debido a una avería…», «Es que…». En la clase 116 miras el otro lado de la misma relación: la **consecuencia**, con «así que», «por eso» y «de modo que». Es el paso natural: primero explicas por qué pasa algo; ahora dices qué pasa después.', en: 'You can now present the cause with the right connector: “Como no había luz…”, “Debido a una avería…”, “Es que…”. In class 116 you look at the other side of the same relationship: the consequence, with “así que”, “por eso” and “de modo que”. It is the natural next step: first you explain why something happens; now you say what happens as a result.', href: '/gramatica/consecutivas-asi-que-por-eso-de', label: 'Ir a la clase 116' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Por qué estudias español?». Tu alumno responde dos veces: a un amigo («Es que…», «porque…») y en una carta formal («Puesto que…», «Debido a…»). Tarea: escribir el correo de Escribir sobre un cambio real de su trabajo o sus clases.' },
        ] },
      ],
    },
  ],
};
