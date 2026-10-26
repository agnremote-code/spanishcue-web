// «El ascensor del cerro» · B2 · authoritative content data (DRAFT).
//
// Author: Martin (CLRQO). G4 review: Alejandro or a fresh agent (never Martin).
// Builder: Sofia. Concept: docs/board/concepts/2026-10-23-valparaiso-ascensor-del-cerro.md
// (§8 merged spec, §9 open checks) + BOARD-DECISION-001 overlays (G1 objective +
// 3–6 exponents per circle, N1 beat labels, routes as data with the N4/E1 label).
//
// The world reads this file as is; the listening is
// app/escucha-3d/content/ascensor/b2.json (`ascensor` in app/escucha-3d/games.mjs).
//
// Shape: the house shape of app/la-feria-de-villaluz/levels/a2.mjs, without BUSCA.
// - title, place, line, dialogue ([castKey | '*Extra', text]), talk (5), words (6).
// - objective (one primary B2 id, G1), related (supporting/review ids), exponents (3–6).
// - beats, in order. kind "contrast" = linguistic contrast: exactly one correct
//   option; every wrong option names the `feature` it gets wrong and its
//   `feedback` starts by naming it; a wrong pick shows the feedback and lets
//   the class choose again; the right pick shows `feedback`, then `after`.
//   kind "stimulus" = conversation stimulus: never scored. Either `options`
//   (say / reply / end / mood: the class picks one and says it) or `frames`.
// - timeline: one first-person past sentence per option of the circle's
//   stimulus (the pick stored in sessionStorage). They are the notes the group
//   carries up to «asamblea», where CLOSING builds the written agreement (acta)
//   from them. «asamblea» is the closing circle and has no timeline.
// - The circles go from the bottom of the cerro to the top:
//   estacion → escalera → cafe → taller → mirador → asamblea.
//
// Language: neutral international Spanish. tú by default; the class and
// Catalina speak usted to don Lorenzo, and he speaks usted to them. Chilean
// markers (al tiro, ¿cachai?) appear ONLY as labelled exemplars: the contrast
// beat «cachai» in «escalera», the words lists and the listening glossaries.
// Nothing here claims that the synthetic voices sound Chilean: nobody has
// listened to the clips yet. b2.lis.voces-chile needs a real sample brought by
// the teacher (teacher notes of «estacion» and «escalera»).
// The funicular («el ascensor La Gaviota»), its cerro, the foundation, the radio
// programme, prices and dates are fictional. No real ascensor is named.

export const SPOTS = ['estacion', 'escalera', 'cafe', 'taller', 'mirador', 'asamblea'];

// One voice per character for the whole world (scenes and listenings), from
// app/escucha-3d/voices.json. `listening` = speaks only in a listening.
export const CAST = {
  catalina: { name: 'Catalina', full: 'Catalina Muñoz', role: 'Presidenta de la junta de vecinos', gender: 'f', voice: 'es-CL-CatalinaNeural', country: 'Chile' },
  lorenzo: { name: 'Lorenzo', full: 'Don Lorenzo Vergara', role: 'Ascensorista del ascensor La Gaviota desde hace treinta y cinco años', gender: 'm', voice: 'es-CL-LorenzoNeural', country: 'Chile' },
  paola: { name: 'Paola', full: 'Paola Arismendi', role: 'Vecina del cerro y dueña del café junto a la estación de arriba', gender: 'f', voice: 'es-VE-PaolaNeural', country: 'Venezuela' },
  alex: { name: 'Alex', full: 'Alex Zevallos', role: 'Arquitecto de patrimonio, autor del informe técnico', gender: 'm', voice: 'es-PE-AlexNeural', country: 'Perú' },
  elvira: { name: 'Elvira', full: 'Elvira Soler', role: 'Consultora de la fundación que ofrece el dinero para la restauración', gender: 'f', voice: 'es-ES-ElviraNeural', country: 'España' },
  ignacio: { name: 'Ignacio', full: 'Ignacio Ibarra', role: 'Locutor de «Micrófono abierto», en la radio comunitaria del cerro', gender: 'm', voice: 'es-AR-TomasNeural', country: 'Argentina', listening: true },
  yaneth: { name: 'Yaneth', full: 'Yaneth Cárdenas', role: 'Vecina del cerro, enfermera de turno de noche', gender: 'f', voice: 'es-CO-SalomeNeural', country: 'Colombia', listening: true },
  luis: { name: 'Luis', full: 'Luis Andrade', role: 'Guía que lleva grupos de visitantes al cerro', gender: 'm', voice: 'es-EC-LuisNeural', country: 'Ecuador', listening: true },
};

export const CIRCLES = {
  estacion: {
    title: 'La estación de abajo',
    place: 'La estación de abajo del ascensor La Gaviota, en el plan, cerca del puerto',
    objective: 'b2.fun.describir-transformacion',
    related: ['b2.gram.verbos-cambio-sistema', 'b2.lis.voces-chile', 'b1.fun.contar-cambios'],
    exponents: [
      { id: 'volverse', form: 'volverse + adjetivo', use: 'un cambio profundo de carácter, a menudo no buscado: el cerro se ha vuelto más caro' },
      { id: 'convertirse', form: 'convertirse en + sustantivo', use: 'pasar a ser otra cosa: la casa se convirtió en un hostal' },
      { id: 'llegar-a-ser', form: 'llegar a ser + sustantivo', use: 'el resultado de un proceso largo o de un esfuerzo: llegó a ser jefe' },
      { id: 'quedarse', form: 'quedarse + adjetivo', use: 'el estado en que algo termina, a menudo una pérdida: la calle se queda vacía' },
      { id: 'ponerse', form: 'ponerse + adjetivo', use: 'un cambio rápido de estado o de ánimo: se puso muy triste' },
      { id: 'valorar-cambio', form: 'Para bien / para mal…; lo que más ha cambiado es que + indicativo; me da pena que + subjuntivo', use: 'valorar una transformación' },
    ],
    line: 'La estación de abajo está en el plan, entre una ferretería y una parada de buses. En la reja hay un cartel: «Cerrado por reparación». Don Lorenzo, el ascensorista, sigue viniendo cada mañana a abrir su caseta, aunque el carro no se mueve desde hace ocho meses. Esta tarde, arriba, la junta de vecinos se reúne para decidir cómo reabrirlo.',
    dialogue: [
      ['*Una vecina con bolsas', 'Buenos días, don Lorenzo. ¿Todavía nada?'],
      ['lorenzo', 'Todavía nada, señora Rosa. Dicen que en primavera. Eso mismo dijeron en otoño.'],
      ['*Una vecina con bolsas', 'Y una, con estas bolsas, ciento cuarenta escalones. A los setenta años me he vuelto alpinista.'],
      ['lorenzo', 'Usted siempre fue fuerte. El que se ha puesto viejo es el carro.'],
      ['catalina', 'Don Lorenzo, le presento a alguien que viene a la asamblea de esta tarde. Quiere saber cómo era esto antes.'],
      ['lorenzo', '¿Antes? Siéntese, que eso va para largo.'],
    ],
    beats: [
      {
        id: 'anonimo', kind: 'contrast', label: 'Contraste lingüístico', exponent: ['volverse'], who: 'lorenzo',
        context: 'Don Lorenzo mira la calle: «Cuando empecé, aquí todos se conocían. Ahora la gente pasa y no saluda. Y eso no es de un día: es así desde hace años.»',
        prompt: 'Describe con una frase el cambio de carácter del barrio que cuenta don Lorenzo.',
        options: [
          { id: 'puesto', label: 'El barrio se ha puesto más anónimo: ya casi nadie saluda.', correct: false, feature: 'ponerse para un cambio duradero',
            feedback: 'Ponerse para un cambio duradero: «ponerse» indica un cambio rápido y pasajero, de estado o de ánimo («se puso nervioso»). Lo que cuenta don Lorenzo es un cambio profundo y que dura años: «se ha vuelto».' },
          { id: 'vuelto', label: 'El barrio se ha vuelto más anónimo: ya casi nadie saluda.', correct: true,
            feedback: 'Bien: «volverse + adjetivo» describe un cambio profundo de carácter, que nadie buscó: el barrio se ha vuelto más anónimo.' },
          { id: 'convertido', label: 'El barrio se ha convertido más anónimo: ya casi nadie saluda.', correct: false, feature: 'convertirse sin «en»',
            feedback: 'Convertirse sin «en»: «convertirse» necesita «en» y un sustantivo («se ha convertido en un lugar de paso»). Con un adjetivo como «anónimo», lo natural es «volverse».' },
        ],
        after: '«Eso. Más anónimo. Antes yo sabía quién vivía en cada casa solo por cómo entraba al carro.»',
      },
      {
        id: 'hostal', kind: 'contrast', label: 'Contraste lingüístico', exponent: ['convertirse', 'quedarse'], who: 'lorenzo',
        context: 'Don Lorenzo señala la casa azul de enfrente: «Ahí vivía la familia Ramírez, con cinco hijos. Ahora es un hostal. En invierno no hay nadie.»',
        prompt: 'Resume en una frase lo que pasó con la casa.',
        options: [
          { id: 'volvio', label: 'La casa se volvió un hostal y en invierno se queda vacía.', correct: false, feature: 'volverse con un sustantivo',
            feedback: 'Volverse con un sustantivo: para decir qué cosa es ahora la casa, con un sustantivo, lo normal es «convertirse en»: «se convirtió en un hostal». «Volverse» va sobre todo con adjetivos.' },
          { id: 'convirtio', label: 'La casa se convirtió en un hostal y en invierno se queda vacía.', correct: true,
            feedback: 'Bien: «se convirtió en» dice que la casa pasó a ser otra cosa, y «se queda vacía» dice cómo termina cada invierno.' },
          { id: 'pone', label: 'La casa se convirtió en un hostal y en invierno se pone vacía.', correct: false, feature: 'ponerse para un resultado',
            feedback: 'Ponerse para un resultado: «vacía» es el estado en que termina la casa cuando se van todos. Para ese resultado se usa «quedarse»: «se queda vacía». «Ponerse» es un cambio rápido de ánimo o de aspecto.' },
        ],
        after: '«Los Ramírez se fueron a vivir a otro cerro, más arriba. Los hijos todavía me llaman para mi cumpleaños, eso sí.»',
      },
      {
        id: 'jefe', kind: 'contrast', label: 'Contraste lingüístico', exponent: ['llegar-a-ser', 'ponerse'], who: 'catalina',
        context: 'Don Lorenzo baja la voz: «Treinta y cinco años aquí. Al final, era el jefe de los cuatro ascensoristas. Y el día que cerraron, me puse tan triste que no podía hablar.» Llega tarde un vecino y Catalina te pide que se lo cuentes.',
        prompt: 'Cuéntale al vecino lo que dijo don Lorenzo.',
        options: [
          { id: 'se-puso-jefe', label: 'Don Lorenzo se puso jefe de los ascensoristas, y el día del cierre se puso muy triste.', correct: false, feature: 'ponerse con un cargo',
            feedback: 'Ponerse con un cargo: un puesto al que se llega después de muchos años se dice con «llegar a ser»: «llegó a ser jefe». «Ponerse» no sirve para cargos ni profesiones.' },
          { id: 'se-volvio-triste', label: 'Don Lorenzo llegó a ser jefe de los ascensoristas, y el día del cierre se volvió muy triste.', correct: false, feature: 'volverse para una emoción pasajera',
            feedback: 'Volverse para una emoción pasajera: «se volvió triste» diría que cambió su carácter para siempre. La tristeza de aquel día fue un cambio de ánimo: «se puso muy triste».' },
          { id: 'llego-a-ser', label: 'Don Lorenzo llegó a ser jefe de los ascensoristas, y el día del cierre se puso muy triste.', correct: true,
            feedback: 'Bien: «llegó a ser» es el resultado de treinta y cinco años de trabajo; «se puso triste» es el cambio de ánimo de un día.' },
        ],
        after: '«Y al día siguiente volvió a abrir la caseta», dice Catalina. «Como hoy.»',
      },
      {
        id: 'lorenzo', kind: 'stimulus', label: 'Estímulo de conversación', exponent: ['valorar-cambio'], who: 'lorenzo',
        ask: 'Don Lorenzo cierra la caseta y te mira: «Usted que viene de afuera: ¿el cerro ha cambiado para bien o para mal? Dígamelo sin rodeos.»',
        options: [
          { say: 'Para bien, en parte: las casas están arregladas. Pero me da pena que los vecinos de siempre se hayan ido.', reply: 'Eso mismo pienso yo, y no lo sé decir tan claro.', end: 'Don Lorenzo te pide que digas esa frase en la asamblea, con las mismas palabras.', mood: 'smile' },
          { say: 'Para mal: lo que más ha cambiado es que el cerro se ha convertido en un lugar de paso.', reply: 'Un lugar de paso… Sí. La gente sube, mira y baja.', end: 'Don Lorenzo anota «lugar de paso» en la libreta donde apunta las averías del carro.', mood: 'surprised' },
          { say: 'No sé si para bien o para mal. Depende de a quién le pregunte: a usted o al dueño del hostal.', reply: '¡Ja! Al dueño del hostal le va de maravilla. A mí, no tanto.', end: 'Don Lorenzo se ríe por primera vez esta mañana y abre la reja de la escalera: «Suba por aquí, que la asamblea empieza a las siete.»', mood: 'laugh' },
        ],
        teacher: 'No hay respuesta correcta. Pide que cada persona valore el cambio con una estructura del círculo: «me da pena que + subjuntivo», «lo que más ha cambiado es que + indicativo». Si alguien dice «me da pena que se han ido», pregunta qué parte de la frase pide el subjuntivo.',
      },
    ],
    timeline: [
      'En la estación de abajo, don Lorenzo me contó que el cerro ha cambiado para bien y para mal: las casas están arregladas, pero muchos vecinos de siempre se han ido.',
      'En la estación de abajo, don Lorenzo me contó que, para él, el cerro se ha convertido en un lugar de paso.',
      'En la estación de abajo, don Lorenzo me contó que el cambio depende de a quién se le pregunte: al dueño del hostal le va bien; a él, no tanto.',
    ],
    talk: [
      '¿Cómo ha cambiado tu barrio en los últimos diez años? ¿Para bien o para mal?',
      '¿Hay en tu ciudad una casa o una tienda que se haya convertido en otra cosa? ¿En qué?',
      '¿Qué lugar de tu infancia se ha quedado vacío o ha desaparecido?',
      '¿Conoces a alguien que haya llegado a ser una persona importante en su barrio? ¿Cómo lo logró?',
      '¿Qué te da pena que haya cambiado en tu ciudad? ¿Y qué te alegra?',
    ],
    words: ['el ascensorista', 'el plan / los cerros', 'volverse + adjetivo', 'convertirse en + sustantivo', 'llegar a ser', 'quedarse vacío'],
    teacher: 'B2, semana 13 (verbos de cambio). Antes de proyectar, la pregunta de entrada: «¿Cómo ha cambiado tu barrio?». Después del círculo, en la pizarra, cinco columnas: ponerse (estado o ánimo pasajero), volverse (carácter), convertirse en (otra cosa), llegar a ser (resultado de un proceso) y quedarse (cómo termina algo, a menudo una pérdida). Variación chilena (b2.lis.voces-chile): en la escucha de este círculo, don Lorenzo dice «al tiro»; explica el marcador desde el texto. La fonética chilena (por ejemplo, la /s/ aspirada) se trabaja solo con una muestra real que trae el docente: una entrevista o un audio de una persona chilena, con la fuente identificada. Las voces sintéticas de la aplicación no son una muestra de acento. «El plan» y «los cerros» son las palabras de Valparaíso para la parte baja de la ciudad y las colinas.',
  },

  escalera: {
    title: 'Ciento cuarenta escalones',
    place: 'La escalera del mural, a media altura del cerro',
    objective: 'b2.fun.conceder-objetar',
    related: ['b2.gram.concesivas', 'b2.pron.concesion', 'b2.lis.voces-chile'],
    exponents: [
      { id: 'aunque-indicativo', form: 'aunque + indicativo', use: 'conceder un dato que se presenta como información o como un hecho que se afirma' },
      { id: 'aunque-subjuntivo', form: 'aunque + subjuntivo', use: 'conceder algo ya sabido, que no cambia la postura, o una simple posibilidad' },
      { id: 'por-mucho-que', form: 'por mucho que + subjuntivo', use: 'decir que algo, por intenso que sea, no cambia el resultado' },
      { id: 'es-cierto-pero', form: 'Es cierto que…, pero… / Tienes razón en que…, pero… / Si bien…', use: 'conceder una parte del argumento y objetar' },
      { id: 'marcadores-chile', form: 'al tiro, ¿cachai? (ejemplos del habla chilena)', use: 'reconocer y explicar marcadores coloquiales que se oyen en Chile' },
    ],
    line: 'Con el ascensor cerrado, la única forma de subir es la escalera: ciento cuarenta escalones entre casas y patios pequeños. A media altura hay un descanso con un mural que pintaron los vecinos hace años: los ascensoristas del cerro, uno al lado del otro, con su gorra azul. El más joven es don Lorenzo. Catalina y Paola suben juntas, y discuten.',
    dialogue: [
      ['paola', 'Catalina, espera. Respira. Ya sé que quieres una tarifa vecinal, y estoy de acuerdo.'],
      ['catalina', 'Entonces no discutamos.'],
      ['paola', 'Pero aunque me parezca justo, alguien tiene que pagar el mantenimiento. Y los que pueden pagar más son los visitantes.'],
      ['catalina', 'Los visitantes suben en verano. Los vecinos subimos todo el año, con la compra y con los niños.'],
      ['paola', 'Por eso. Que el visitante pague más y el vecino pague menos. Mi café vive de los dos.'],
      ['catalina', 'Lo que me preocupa es otra cosa: la fundación quiere poner su panel aquí, al lado del mural.'],
      ['paola', '¿Al lado de don Lorenzo? Eso sí que no.'],
    ],
    beats: [
      {
        id: 'dato', kind: 'contrast', label: 'Contraste lingüístico', exponent: ['aunque-indicativo'], who: 'catalina',
        context: 'Catalina se apoya en la baranda y te explica algo que tú no sabías: el café de Paola da trabajo a tres personas del cerro. Para ella es un dato importante, pero su postura no cambia.',
        prompt: 'Elige la frase de Catalina: te da un dato nuevo y mantiene su postura.',
        options: [
          { id: 'indicativo', label: 'Aunque el café da trabajo a tres vecinos, la prioridad es la tarifa vecinal.', correct: true,
            feedback: 'Bien: con «aunque + indicativo», Catalina te da el dato como información nueva y lo reconoce. Aun así, mantiene su postura.' },
          { id: 'subjuntivo', label: 'Aunque el café dé trabajo a tres vecinos, la prioridad es la tarifa vecinal.', correct: false, feature: 'modo después de «aunque»',
            feedback: 'Modo después de «aunque»: con subjuntivo, «aunque dé» trata el dato como algo ya sabido o sin importancia para la discusión. Catalina te da información que no conocías, y eso va en indicativo: «aunque da».' },
          { id: 'pero', label: 'Aunque el café da trabajo a tres vecinos, pero la prioridad es la tarifa vecinal.', correct: false, feature: 'aunque y pero en la misma frase',
            feedback: 'Aunque y pero en la misma frase: «aunque» ya une las dos partes. Con «pero» hay dos conectores para una sola concesión. Usa uno: «aunque da trabajo…, la prioridad es…» o «da trabajo…, pero la prioridad es…».' },
        ],
        after: '«Tres y media», corrige Paola. «Los sábados viene mi sobrina.»',
      },
      {
        id: 'posibilidad', kind: 'contrast', label: 'Contraste lingüístico', exponent: ['aunque-subjuntivo'], who: 'catalina',
        context: 'Paola insiste: «A lo mejor el próximo verano suben el doble de visitantes. Nadie lo sabe.» Catalina quiere decir que, incluso en ese caso, su postura no cambia.',
        prompt: 'Elige la frase de Catalina.',
        options: [
          { id: 'suben', label: 'Aunque suben el doble de visitantes, los vecinos tienen que pagar menos.', correct: false, feature: 'hecho o posibilidad',
            feedback: 'Hecho o posibilidad: con indicativo, «aunque suben» afirma que ya suben el doble. Es solo una posibilidad, y para una posibilidad que no cambia tu postura se usa el subjuntivo: «aunque suban».' },
          { id: 'suban', label: 'Aunque suban el doble de visitantes, los vecinos tienen que pagar menos.', correct: true,
            feedback: 'Bien: «aunque + subjuntivo» presenta una posibilidad y dice que, incluso así, la postura de Catalina se mantiene.' },
          { id: 'subiran', label: 'Aunque subirán el doble de visitantes, los vecinos tienen que pagar menos.', correct: false, feature: 'futuro para una posibilidad',
            feedback: 'Futuro para una posibilidad: «aunque subirán» presenta el aumento como algo seguro. Para conceder una posibilidad que no cambia tu postura, se usa el presente de subjuntivo: «aunque suban».' },
        ],
        after: '«Bueno, en eso no te puedo decir nada», admite Paola. «Pero escucha mi parte.»',
      },
      {
        id: 'cables', kind: 'contrast', label: 'Contraste lingüístico', exponent: ['por-mucho-que'], who: 'paola',
        context: 'Desde el descanso se ven los cables del ascensor. Paola los señala: «La tarifa vecinal está muy bien, pero no paga cables nuevos. Da igual cuánto lo deseemos.»',
        prompt: 'Di lo mismo que Paola con «por mucho que».',
        options: [
          { id: 'deseamos', label: 'Por mucho que lo deseamos, una tarifa vecinal sola no paga los cables.', correct: false, feature: 'modo después de «por mucho que»',
            feedback: 'Modo después de «por mucho que»: esta estructura dice que la intensidad no cambia el resultado, y aquí va con subjuntivo: «por mucho que lo deseemos».' },
          { id: 'deseemos', label: 'Por mucho que lo deseemos, una tarifa vecinal sola no paga los cables.', correct: true,
            feedback: 'Bien: «por mucho que + subjuntivo» concede la fuerza del deseo y deja claro que no cambia el resultado.' },
          { id: 'sin-que', label: 'Por mucho lo deseemos, una tarifa vecinal sola no paga los cables.', correct: false, feature: 'falta «que»',
            feedback: 'Falta «que»: la estructura completa es «por mucho que + verbo». Sin «que», la frase no se sostiene.' },
        ],
        after: 'Catalina suspira: «Eso no te lo discuto. Lo que discuto es quién decide la tarifa.»',
      },
      {
        id: 'cachai', kind: 'contrast', label: 'Contraste lingüístico', exponent: ['marcadores-chile'], who: 'catalina',
        context: 'Ejemplo de habla chilena. Catalina, cansada, le dice a Paola: «Si la fundación pone el panel aquí, me voy a quejar al tiro, ¿cachai?». Paola sonríe: conoce estas palabras desde hace años. Tú, quizás no.',
        prompt: '¿Qué quiere decir Catalina?',
        options: [
          { id: 'al-final', label: 'Si ponen el panel, se va a quejar al final, cuando ya esté puesto, ¿entiendes?', correct: false, feature: 'significado de «al tiro»',
            feedback: 'Significado de «al tiro»: no quiere decir «al final». En el habla coloquial de Chile, «al tiro» significa «enseguida», «ahora mismo».' },
          { id: 'enseguida', label: 'Si ponen el panel, se va a quejar enseguida, ¿entiendes?', correct: true,
            feedback: 'Bien: en Chile, «al tiro» es «enseguida» y «¿cachai?» es «¿entiendes?» o «¿me sigues?». Son marcadores coloquiales: funcionan en una conversación entre vecinas, no en un acta.' },
          { id: 'cansada', label: 'Si ponen el panel, se va a quejar enseguida, ¿estás cansada?', correct: false, feature: 'significado de «¿cachai?»',
            feedback: 'Significado de «¿cachai?»: no pregunta por el cansancio. En Chile, «¿cachai?» comprueba que la otra persona entiende: «¿entiendes?», «¿me sigues?».' },
        ],
        after: 'En la asamblea, Catalina tendrá que decirlo de otra forma: «Presentaremos una queja de inmediato.» El registro también es parte del acuerdo.',
      },
      {
        id: 'paola', kind: 'stimulus', label: 'Estímulo de conversación', exponent: ['es-cierto-pero'], who: 'paola',
        ask: 'Paola se sienta en el descanso, delante del mural, y te pregunta: «A ver, tú que vienes de fuera: ¿quién tiene razón, Catalina o yo?»',
        options: [
          { say: 'Es cierto que los visitantes pagan el mantenimiento, pero la tarifa la deberían decidir los vecinos.', reply: 'Bueno, eso lo puedo aceptar, si en la junta también hay sitio para los comercios del cerro.', end: 'Catalina asiente sin decir nada. Para ella, eso ya es mucho.', mood: 'smile' },
          { say: 'Si bien Catalina defiende a los vecinos, sin visitantes ni tu café ni el ascensor se sostienen. Tienes razón tú.', reply: '¡Por fin alguien! Catalina, anótalo.', end: 'Catalina no lo anota. Pero en su libreta escribe «mantenimiento», con dos rayas debajo.', mood: 'laugh' },
          { say: 'Tienes razón en que hace falta dinero, pero por mucho que paguen los visitantes, el ascensor es de los vecinos.', reply: 'De los vecinos… Yo también soy vecina, ¿eh? Vivo aquí arriba desde hace seis años.', end: 'Paola se queda mirando el mural. Al lado de los ascensoristas hay un trozo de pared en blanco: nadie ha pintado todavía a los vecinos nuevos.', mood: 'surprised' },
        ],
        teacher: 'No hay respuesta correcta. Pide que defiendan la opción elegida con una concesión y una objeción. Fíjate en la voz (b2.pron.concesion): la parte concedida va más baja y la objeción, más marcada. Paola y Catalina tienen las dos una parte de razón: no lo presentes como una pelea entre «vecinos» y «comercio». Paola también es vecina.',
      },
    ],
    timeline: [
      'En la escalera, le dije a Paola que los visitantes pagan el mantenimiento, pero que la tarifa la deberían decidir los vecinos.',
      'En la escalera, le di la razón a Paola: si bien Catalina defiende a los vecinos, sin visitantes el ascensor no se sostiene.',
      'En la escalera, le dije a Paola que hace falta dinero, pero que el ascensor es de los vecinos; ella me recordó que también es vecina.',
    ],
    talk: [
      '¿Tienes que subir muchas escaleras para llegar a tu casa o a tu trabajo? ¿Cómo es?',
      'En tu ciudad, ¿hay precios distintos para visitantes y para residentes? ¿Te parece justo?',
      'Concede algo a una persona de la clase con «aunque» y mantén tu postura.',
      '¿Hay en tu barrio un mural o un monumento importante para los vecinos? ¿Por qué lo es?',
      '¿Conoces expresiones de tu país que solo se usan entre amigos? ¿Cuáles?',
    ],
    words: ['el escalón', 'el descanso', 'la tarifa vecinal', 'aunque + indicativo / subjuntivo', 'por mucho que + subjuntivo', 'al tiro, ¿cachai? (Chile, coloquial)'],
    teacher: 'B2, semana 6 (concesivas). Después del círculo, en la pizarra: aunque + indicativo (información nueva o un hecho que se afirma) / aunque + subjuntivo (algo ya sabido que no cambia la postura, o una posibilidad). El contraste «al tiro / ¿cachai?» está marcado como ejemplo de habla chilena: se explica desde el texto, sin imitar el acento y sin pedir a la clase que lo use. Para trabajar la pronunciación chilena (b2.lis.voces-chile), trae una muestra real con su fuente; la voz sintética no lo es. El mural no es decoración: en la asamblea, el lugar del panel de la fundación es uno de los puntos del acuerdo.',
  },

  cafe: {
    title: 'La radio del café',
    place: 'El café de Paola, junto a la estación de arriba',
    objective: 'b2.lis.debate-radio',
    related: ['b2.fun.resumir-declaraciones', 'b2.gram.estilo-indirecto-avanzado', 'b2.gram.condicionales-conectores'],
    exponents: [
      { id: 'postura-condicion', form: 'X acepta…, siempre que + subjuntivo / X acepta…, pero solo si…', use: 'separar la postura de una persona de la condición que pone' },
      { id: 'mientras-que', form: 'X defiende…, mientras que Y…', use: 'comparar dos posturas en una sola frase' },
      { id: 'verbo-cita', form: 'X admitió / aseguró / reconoció que…', use: 'elegir el verbo que transmite la intención de quien habló' },
      { id: 'propone-que', form: 'X propone / pide que + subjuntivo', use: 'transmitir una propuesta o una petición' },
    ],
    line: 'El café de Paola tiene seis mesas, una cafetera italiana y una radio vieja en la barra. Hoy casi nadie habla: todo el mundo escucha «Micrófono abierto», el programa de la radio comunitaria del cerro. El tema de hoy es el ascensor.',
    dialogue: [
      ['paola', 'Shh, que empieza. Catalina, sube el volumen.'],
      ['*El locutor, en la radio', 'Buenas tardes, cerro. Hoy, una sola pregunta: ¿cuánto debería costar el ascensor cuando reabra?'],
      ['*Un cliente', 'Gratis para los vecinos. Y punto.'],
      ['paola', 'Gratis no existe, don Arturo. Lo gratis siempre lo paga alguien.'],
      ['*Un cliente', 'Que lo pague la fundación, entonces.'],
      ['catalina', 'Cuidado con la fundación. Todavía no sabemos qué pide a cambio.'],
    ],
    beats: [
      {
        id: 'enfermera', kind: 'contrast', label: 'Contraste lingüístico', exponent: ['postura-condicion'], who: 'paola',
        context: 'En la radio llama una oyente, enfermera de turno de noche: «Yo acepto una tarifa turística más cara, pero solo si el primer viaje sale a las seis de la mañana, para los que trabajamos en el plan.» Paola te pide que lo resumas para la mesa del fondo, que no oyó bien.',
        prompt: 'Resume la postura de la oyente.',
        options: [
          { id: 'en-contra', label: 'La oyente está en contra de la tarifa turística porque trabaja en el plan.', correct: false, feature: 'postura y condición',
            feedback: 'Postura y condición: la oyente no está en contra: acepta la tarifa turística. Lo que pone es una condición, el primer viaje a las seis. Trabajar en el plan es la razón de esa condición, no de un rechazo.' },
          { id: 'salga', label: 'La oyente acepta la tarifa turística, siempre que el primer viaje salga a las seis.', correct: true,
            feedback: 'Bien: separas la postura (acepta) de la condición (siempre que + subjuntivo). Es lo primero que hay que oír en un debate.' },
          { id: 'sale', label: 'La oyente acepta la tarifa turística, siempre que el primer viaje sale a las seis.', correct: false, feature: 'modo después de «siempre que»',
            feedback: 'Modo después de «siempre que»: cuando introduce una condición, «siempre que» va con subjuntivo: «siempre que salga». Con indicativo significa «cada vez que».' },
        ],
        after: '«Exacto», dice Paola. «Y a las seis yo ya tengo el café abierto. Eso no lo dijo ella, lo digo yo.»',
      },
      {
        id: 'guia', kind: 'contrast', label: 'Contraste lingüístico', exponent: ['mientras-que'], who: 'catalina',
        context: 'Llama un segundo oyente, un guía que lleva grupos al cerro: acepta una tarifa doble para visitantes y pide que el dinero extra vaya a un fondo para el mantenimiento. Catalina toma notas.',
        prompt: 'Compara las dos llamadas en una sola frase.',
        options: [
          { id: 'por-lo-tanto', label: 'La enfermera pide un horario temprano; por lo tanto, el guía pide que el dinero extra vaya al mantenimiento.', correct: false, feature: 'conector de consecuencia',
            feedback: 'Conector de consecuencia: «por lo tanto» dice que la segunda postura es una consecuencia de la primera, y no lo es. Para poner dos posturas distintas una al lado de la otra, usa «mientras que».' },
          { id: 'va', label: 'La enfermera pide un horario temprano, mientras que el guía pide que el dinero extra va al mantenimiento.', correct: false, feature: 'modo después de «pide que»',
            feedback: 'Modo después de «pide que»: «pedir que» transmite una petición y va con subjuntivo: «pide que el dinero vaya».' },
          { id: 'mientras-que', label: 'La enfermera pide un horario temprano, mientras que el guía pide que el dinero extra vaya al mantenimiento.', correct: true,
            feedback: 'Bien: «mientras que» compara las dos posturas, y «pide que + subjuntivo» transmite la petición del guía.' },
        ],
        after: 'Catalina subraya «fondo para el mantenimiento»: «Eso me gusta. Si el fondo lo controla la junta.»',
      },
      {
        id: 'locutor', kind: 'contrast', label: 'Contraste lingüístico', exponent: ['verbo-cita'], who: 'paola',
        context: 'Antes de la pausa, el locutor dice: «Lo reconozco: hace un mes le pedimos una entrevista a la fundación, y todavía no ha contestado.» Entra un vecino y pregunta qué ha dicho la radio.',
        prompt: 'Cuéntale al vecino lo que dijo el locutor, con el verbo que mejor transmite su intención.',
        options: [
          { id: 'prometio', label: 'El locutor prometió que la fundación contestaría.', correct: false, feature: 'verbo de cita',
            feedback: 'Verbo de cita: «prometer» dice que el locutor se compromete a algo. No promete nada: reconoce un hecho incómodo. El verbo justo es «admitir» o «reconocer».' },
          { id: 'admitio', label: 'El locutor admitió que la fundación todavía no había contestado.', correct: true,
            feedback: 'Bien: «admitir» transmite que reconoce algo incómodo, y el pluscuamperfecto «no había contestado» sitúa el hecho antes de sus palabras.' },
          { id: 'hubiera', label: 'El locutor admitió que la fundación todavía no hubiera contestado.', correct: false, feature: 'modo después de «admitir»',
            feedback: 'Modo después de «admitir»: «admitir que» transmite un hecho que se reconoce, y va con indicativo: «admitió que no había contestado».' },
        ],
        after: '«¿Un mes sin contestar?», dice el vecino. «Eso lo pregunto yo en la asamblea.»',
      },
      {
        id: 'paola', kind: 'stimulus', label: 'Estímulo de conversación', exponent: ['propone-que'], who: 'paola',
        ask: 'En la pausa, Paola apoya los codos en la barra: «Yo también voy a llamar al programa. ¿Qué propongo? Ayúdame, que en la radio me pongo nerviosa.»',
        options: [
          { say: 'Propón que haya dos tarifas: una para vecinos y otra, más cara, para visitantes.', reply: 'Dos tarifas. Simple. Así lo entiende hasta mi cafetera.', end: 'Paola marca el número de la radio antes de que se le olvide.', mood: 'laugh' },
          { say: 'Pide que el ascensor abra a las seis, como dijo la enfermera, y que tu café abra a la misma hora.', reply: '¿Y que yo me levante a las cinco? Bueno… por el cerro, sí.', end: 'Paola escribe «seis de la mañana» en la pizarra de los precios, al lado del café con leche.', mood: 'surprised' },
          { say: 'Propón que los comercios del cerro paguen una parte del mantenimiento, a cambio de tener voz en la junta.', reply: 'Uf. Pagar duele. Pero tener voz… eso vale algo.', end: 'Catalina levanta la vista de su libreta. Por primera vez, Paola y ella miran el mismo papel.', mood: 'smile' },
        ],
        teacher: 'No hay respuesta correcta. Exige «propón / pide que + subjuntivo» en la respuesta. Si hay tiempo, una persona hace de locutor y otra llama a la radio con la propuesta elegida (un minuto).',
      },
    ],
    timeline: [
      'En el café, oí el debate de la radio y le propuse a Paola que pidiera dos tarifas: una para vecinos y otra, más cara, para visitantes.',
      'En el café, oí el debate de la radio y le propuse a Paola que pidiera un primer viaje a las seis de la mañana.',
      'En el café, oí el debate de la radio y le propuse a Paola que los comercios pagaran una parte del mantenimiento a cambio de tener voz en la junta.',
    ],
    talk: [
      '¿Escuchas la radio? ¿Qué programas de debate te gustan, o te molestan?',
      '¿Llamarías a un programa de radio para dar tu opinión? ¿Sobre qué tema?',
      'Resume la opinión de dos personas de la clase con «mientras que».',
      '¿Quién debería pagar el transporte público: quien lo usa, el Estado o los visitantes?',
      '¿Hay en tu barrio un café o una tienda donde se habla de los problemas del barrio?',
    ],
    words: ['la radio comunitaria', 'el oyente / la oyente', 'el locutor', 'la tarifa turística', 'siempre que + subjuntivo', 'mientras que'],
    teacher: 'B2, semana 5 (escuchar un debate radiofónico). Es el círculo de escucha por excelencia: en la ruta de comprensión, primero la escucha y después los contrastes. Antes de escuchar, pide dos columnas en el cuaderno: «postura» y «condición». Después, en la pizarra: X acepta…, siempre que…; X pide que…; X admitió que…. La escucha de este círculo es el programa completo, con dos llamadas. Las notas de la clase sobre la radio son una de las fuentes de la asamblea.',
  },

  taller: {
    title: 'El informe del taller',
    place: 'El taller de restauración, al lado de la estación de arriba',
    objective: 'b2.voc.ciudad-sostenible',
    related: ['b2.fun.informar-objetivamente', 'b2.gram.pasiva-impersonalidad', 'b2.fun.mitigacion'],
    exponents: [
      { id: 'movilidad', form: 'el transporte público, la movilidad, la accesibilidad', use: 'hablar del ascensor como un servicio de transporte y no como una atracción' },
      { id: 'espacio-publico', form: 'el espacio público, el uso vecinal / el uso turístico', use: 'decir para quién es un lugar y quién lo usa' },
      { id: 'gentrificacion', form: 'la gentrificación, el alza de los alquileres (en Chile, los arriendos), desplazar a los vecinos', use: 'nombrar el riesgo de que los vecinos tengan que irse' },
      { id: 'se-estima', form: 'se estima que…, según el informe…', use: 'informar de un dato con distancia, sin presentarlo como opinión' },
      { id: 'convendria', form: 'convendría que + imperfecto de subjuntivo', use: 'recomendar con prudencia' },
    ],
    line: 'El taller huele a aceite y a madera. En el centro está el carro del ascensor, sin ruedas, sobre unos caballetes. Alex, el arquitecto que prepara el informe técnico, tiene planos por todas partes. Don Lorenzo ha venido a verlo: es la primera vez que ve su carro desarmado.',
    dialogue: [
      ['alex', 'Don Lorenzo, pase. No toque ese cable, por favor: es la prueba de que hay que cambiarlos todos.'],
      ['lorenzo', 'Ese cable lo cambié yo en el noventa y ocho. Aguantó bastante.'],
      ['alex', 'Aguantó demasiado. Esa es la mala noticia. La buena es que la madera del carro está mejor de lo que pensábamos.'],
      ['lorenzo', '¿Entonces el carro se puede salvar?'],
      ['alex', 'Se puede restaurar, sí. Pero tarda más. Y la asamblea quiere fechas.'],
      ['catalina', 'La asamblea quiere fechas y precios, Alex. Y en palabras que entienda todo el mundo.'],
    ],
    beats: [
      {
        id: 'transporte', kind: 'contrast', label: 'Contraste lingüístico', exponent: ['movilidad'], who: 'alex',
        context: 'Alex prepara la primera frase del informe. Antes de hablar de dinero, quiere dejar claro para qué sirve el ascensor.',
        prompt: 'Elige la frase de Alex.',
        options: [
          { id: 'atraccion', label: 'El ascensor es una atracción turística: garantiza la movilidad de los vecinos que no pueden subir la escalera.', correct: false, feature: 'marco del informe',
            feedback: 'Marco del informe: si lo llamas «atracción turística», la frase se contradice, porque una atracción no garantiza la movilidad de nadie. Alex lo presenta como un servicio: «transporte público».' },
          { id: 'transporte', label: 'El ascensor es transporte público: garantiza la movilidad y la accesibilidad de los vecinos que no pueden subir la escalera.', correct: true,
            feedback: 'Bien: «transporte público», «movilidad» y «accesibilidad» presentan el ascensor como un servicio, no como una atracción. Es el marco de todo el informe.' },
          { id: 'mobilidad', label: 'El ascensor es transporte público: garantiza la mobilidad y la accesibilidad de los vecinos que no pueden subir la escalera.', correct: false, feature: 'forma de la palabra',
            feedback: 'Forma de la palabra: en español se escribe «movilidad», con v, como «mover» y «moverse».' },
        ],
        after: 'Don Lorenzo da un golpecito en la mesa: «Transporte público. Eso. Hace treinta años que lo digo.»',
      },
      {
        id: 'cifra', kind: 'contrast', label: 'Contraste lingüístico', exponent: ['se-estima'], who: 'alex',
        context: 'Ahora, los datos. Alex no quiere que la cifra parezca su opinión: «Esto lo dicen las pruebas, no yo.»',
        prompt: 'Presenta la cifra con distancia.',
        options: [
          { id: 'estiman', label: 'Se estiman que la restauración completa costará unos ochenta millones de pesos.', correct: false, feature: 'concordancia de «se estima que»',
            feedback: 'Concordancia de «se estima que»: el verbo no concuerda con «millones»; lo que se estima es toda la oración que sigue, y por eso va en singular: «se estima que…».' },
          { id: 'creo', label: 'Yo creo que la restauración completa costará unos ochenta millones de pesos.', correct: false, feature: 'distancia del informe',
            feedback: 'Distancia del informe: «yo creo» convierte el dato en una opinión personal. En un informe técnico, la cifra se presenta de forma impersonal: «se estima que», «según las pruebas».' },
          { id: 'estima', label: 'Se estima que la restauración completa costará unos ochenta millones de pesos.', correct: true,
            feedback: 'Bien: «se estima que» presenta el dato sin decir quién lo calcula. Es la voz del informe, no la de Alex.' },
        ],
        after: 'Catalina silba: «Ochenta millones. Lo voy a decir despacio en la asamblea, para que nadie se desmaye.»',
      },
      {
        id: 'recomendacion', kind: 'contrast', label: 'Contraste lingüístico', exponent: ['convendria', 'espacio-publico'], who: 'alex',
        context: 'Última parte: la recomendación. Alex cree que la estación de arriba tiene que seguir siendo un lugar de los vecinos, aunque la fundación ponga allí su panel. Quiere recomendarlo con prudencia.',
        prompt: 'Elige la recomendación del informe.',
        options: [
          { id: 'sigue', label: 'Convendría que la estación de arriba sigue siendo espacio público, de uso vecinal.', correct: false, feature: 'modo después de «convendría que»',
            feedback: 'Modo después de «convendría que»: una recomendación con «convendría que» va con imperfecto de subjuntivo: «convendría que siguiera siendo».' },
          { id: 'siguiera', label: 'Convendría que la estación de arriba siguiera siendo espacio público, de uso vecinal.', correct: true,
            feedback: 'Bien: «convendría que + imperfecto de subjuntivo» recomienda sin imponer, y «espacio público» dice para quién es la estación.' },
          { id: 'privado', label: 'Convendría que la estación de arriba siguiera siendo espacio privado, de uso vecinal.', correct: false, feature: 'espacio público o privado',
            feedback: 'Espacio público o privado: un lugar abierto a todos los vecinos es «espacio público». «Privado» dice lo contrario de lo que recomienda Alex.' },
        ],
        after: '«Eso lo firmo yo», dice don Lorenzo. Alex sonríe: «Usted no firma informes, don Lorenzo.» «Pues este sí.»',
      },
      {
        id: 'alex', kind: 'stimulus', label: 'Estímulo de conversación', exponent: ['gentrificacion'], who: 'alex',
        ask: 'Alex enrolla los planos y te hace la pregunta que no se atreve a hacer en la asamblea: «Si el ascensor queda precioso y sale en todas las guías, ¿no subirán los alquileres? ¿Qué hacemos con eso?»',
        options: [
          { say: 'Es un riesgo real. Convendría que la tarifa vecinal fuera la primera condición, para no desplazar a nadie del ascensor.', reply: 'La tarifa no frena los alquileres, pero por lo menos nadie se queda fuera del carro.', end: 'Alex escribe «riesgo de gentrificación» en el margen del informe, con un signo de interrogación.', mood: 'smile' },
          { say: 'No exageremos. Arreglar un ascensor no es gentrificar un barrio entero.', reply: 'Puede ser. Pero muchas veces empieza así: con algo bonito que se arregla.', end: 'Alex no insiste, pero deja el informe abierto en la página de los riesgos.', mood: 'surprised' },
          { say: 'Eso no se decide en un taller. Hay que llevarlo a la asamblea, aunque nadie quiera hablar de alquileres.', reply: 'Tienes razón. Yo pongo los datos; ustedes, el valor.', end: 'Catalina apunta en su libreta: «Alquileres: punto siete del orden del día».', mood: 'laugh' },
        ],
        teacher: 'No hay respuesta correcta. Pide que usen al menos dos palabras del campo (movilidad, espacio público, gentrificación, desplazar). No conviertas el círculo en una clase de economía: el foco es nombrar el problema con precisión y decidir qué se lleva a la asamblea.',
      },
    ],
    timeline: [
      'En el taller, Alex me preguntó por la gentrificación y le dije que la tarifa vecinal debería ser la primera condición, para no desplazar a nadie.',
      'En el taller, Alex me preguntó por la gentrificación y le dije que arreglar un ascensor no es gentrificar un barrio entero.',
      'En el taller, Alex me preguntó por la gentrificación y le dije que había que llevar el tema de los alquileres a la asamblea.',
    ],
    talk: [
      '¿Cómo te mueves por tu ciudad? ¿Es fácil para una persona mayor o en silla de ruedas?',
      '¿Hay en tu ciudad un barrio que se haya gentrificado? ¿Qué cambió?',
      '¿Qué espacio público de tu barrio usas más? ¿Quién lo cuida?',
      'Si tuvieras que elegir: ¿restaurar el carro original en catorce meses o una réplica moderna en seis? ¿Por qué?',
      '¿Qué medida convendría que tomara tu ciudad para mejorar la movilidad?',
    ],
    words: ['el carro', 'el cable', 'la movilidad', 'el espacio público', 'la gentrificación', 'el alza de los alquileres (en Chile, los arriendos)'],
    teacher: 'B2, semana 11 (urbanismo y movilidad), con la impersonalidad de la semana 9. Datos del informe, para la asamblea: los cables se cambian en todos los casos; restaurar el carro original cuesta unos ochenta millones de pesos y tarda unos catorce meses; una réplica moderna cuesta unos cincuenta millones y tarda unos seis. Todas las cifras son de la historia, no de un ascensor real. En la pizarra: se estima que…, según el informe…, convendría que + imperfecto de subjuntivo.',
  },

  mirador: {
    title: 'La letra pequeña',
    place: 'El mirador de arriba, sobre la bahía',
    objective: 'b2.fun.negociar-condiciones',
    related: ['b2.gram.condicionales-conectores', 'b2.voc.acuerdos-contratos', 'b2.pron.foco-solo-si'],
    exponents: [
      { id: 'siempre-que', form: 'siempre que + subjuntivo', use: 'poner una condición necesaria' },
      { id: 'a-no-ser-que', form: 'a no ser que / salvo que + subjuntivo', use: 'nombrar la única excepción a una regla' },
      { id: 'a-cambio-de', form: 'a cambio de + sustantivo / a cambio de que + subjuntivo', use: 'ofrecer algo y decir qué se pide por ello' },
      { id: 'solo-si', form: 'solo si + indicativo', use: 'poner el foco en una condición única: SOLO si…' },
      { id: 'aceptar-rechazar', form: 'Aceptamos…, con una condición: … / Eso no lo podemos aceptar tal como está.', use: 'aceptar con condiciones o rechazar una propuesta' },
    ],
    line: 'Desde el mirador se ven la bahía y, abajo, los techos del plan. Elvira, la consultora de la fundación, ha venido desde Madrid con una carpeta azul. La fundación ofrece pagar la mayor parte de la restauración. Catalina quiere saber qué pide a cambio.',
    dialogue: [
      ['elvira', 'Catalina, te lo digo claro: la fundación pone el setenta por ciento. Es mucho dinero.'],
      ['catalina', 'Es mucho dinero. Por eso quiero leer la carpeta entera, no solo la primera página.'],
      ['elvira', 'Lo entiendo. Hay condiciones, como en cualquier convenio: horario ampliado en verano, un panel informativo de la fundación…'],
      ['catalina', '¿Y en la última página?'],
      ['elvira', 'En la última página está la gestión. Durante diez años, el ascensor lo gestionaría un operador elegido por la fundación.'],
      ['catalina', '¿Y la tarifa vecinal? ¿Quién la decide?'],
      ['elvira', 'El operador. Siempre que respete un precio máximo, claro.'],
    ],
    beats: [
      {
        id: 'condicion', kind: 'contrast', label: 'Contraste lingüístico', exponent: ['siempre-que'], who: 'catalina',
        context: 'Catalina quiere contestar con una condición necesaria para la junta: que la tarifa vecinal no la decida el operador.',
        prompt: 'Elige la respuesta de Catalina.',
        options: [
          { id: 'decide', label: 'Podemos hablar del operador, siempre que la tarifa vecinal la decide la junta.', correct: false, feature: 'modo después de «siempre que»',
            feedback: 'Modo después de «siempre que»: cuando es una condición, «siempre que» va con subjuntivo: «siempre que la decida la junta». Con indicativo significa «cada vez que».' },
          { id: 'decida', label: 'Podemos hablar del operador, siempre que la tarifa vecinal la decida la junta.', correct: true,
            feedback: 'Bien: «siempre que + subjuntivo» pone una condición necesaria. Catalina no rechaza la propuesta: la abre, pero con un límite.' },
          { id: 'aunque', label: 'Podemos hablar del operador, aunque la tarifa vecinal la decida la junta.', correct: false, feature: 'concesión en lugar de condición',
            feedback: 'Concesión en lugar de condición: «aunque» concede algo, no lo exige. Catalina necesita poner una condición: «siempre que».' },
        ],
        after: 'Elvira anota algo en la carpeta: «Lo puedo consultar. No te prometo nada.»',
      },
      {
        id: 'excepcion', kind: 'contrast', label: 'Contraste lingüístico', exponent: ['a-no-ser-que'], who: 'elvira',
        context: 'Elvira explica la única salida que ve: «El operador externo es obligatorio. Solo hay una excepción: que la junta pague el treinta por ciento que falta y se haga cargo del mantenimiento.»',
        prompt: '¿Cómo lo dice Elvira en una sola frase?',
        options: [
          { id: 'siempre-que', label: 'El operador externo es obligatorio, siempre que la junta pague el treinta por ciento y se haga cargo del mantenimiento.', correct: false, feature: 'condición o excepción',
            feedback: 'Condición o excepción: con «siempre que», pagar sería la condición para tener el operador externo, justo lo contrario. Para la única excepción se usa «a no ser que» o «salvo que».' },
          { id: 'paga', label: 'El operador externo es obligatorio, a no ser que la junta paga el treinta por ciento y se hace cargo del mantenimiento.', correct: false, feature: 'modo después de «a no ser que»',
            feedback: 'Modo después de «a no ser que»: siempre va con subjuntivo: «a no ser que la junta pague… y se haga cargo…».' },
          { id: 'a-no-ser-que', label: 'El operador externo es obligatorio, a no ser que la junta pague el treinta por ciento y se haga cargo del mantenimiento.', correct: true,
            feedback: 'Bien: «a no ser que + subjuntivo» nombra la única excepción a la regla.' },
        ],
        after: 'Catalina hace la cuenta en voz alta: «El treinta por ciento de ochenta millones. Veinticuatro. La junta tiene dos.»',
      },
      {
        id: 'intercambio', kind: 'contrast', label: 'Contraste lingüístico', exponent: ['a-cambio-de'], who: 'catalina',
        context: 'La junta no tiene el dinero, pero tiene otra cosa: los vecinos pueden encargarse de abrir la estación y de vigilarla. Catalina quiere ofrecerlo en un intercambio.',
        prompt: 'Elige la propuesta de Catalina.',
        options: [
          { id: 'fije', label: 'Los vecinos abren y vigilan la estación, a cambio de que la tarifa vecinal la fije la junta.', correct: true,
            feedback: 'Bien: «a cambio de que + subjuntivo» ofrece algo y dice qué se pide por ello.' },
          { id: 'sin-de', label: 'Los vecinos abren y vigilan la estación, a cambio que la tarifa vecinal la fije la junta.', correct: false, feature: 'falta «de»',
            feedback: 'Falta «de»: la forma es «a cambio de que + subjuntivo». Sin «de», la estructura queda incompleta.' },
          { id: 'fija', label: 'Los vecinos abren y vigilan la estación, a cambio de que la tarifa vecinal la fija la junta.', correct: false, feature: 'modo después de «a cambio de que»',
            feedback: 'Modo después de «a cambio de que»: lo que se pide en el intercambio todavía no ha pasado, y va con subjuntivo: «a cambio de que la fije».' },
        ],
        after: 'Elvira cierra la carpeta despacio: «Eso no está en el convenio. Pero tampoco está prohibido.»',
      },
      {
        id: 'elvira', kind: 'stimulus', label: 'Estímulo de conversación', exponent: ['solo-si', 'aceptar-rechazar'], who: 'elvira',
        ask: 'Elvira se vuelve hacia ti: «Tú has recorrido todo el cerro hoy y has hablado con todos. Si fueras la junta, ¿qué me contestarías?»',
        options: [
          { say: 'Aceptamos el dinero, con una condición: el operador solo entra si la tarifa vecinal la decide la junta.', reply: 'Solo si… Me lo pones difícil. Pero es una condición clara, y eso se agradece.', end: 'Elvira escribe «SOLO SI» en mayúsculas en la carpeta y lo subraya dos veces.', mood: 'smile' },
          { say: 'Eso no lo podemos aceptar tal como está. Diez años con un operador externo es demasiado tiempo.', reply: '¿Y cuánto sería razonable? Dame un número y lo llevo a la fundación.', end: 'Catalina te mira y levanta tres dedos. Tres años, no diez.', mood: 'surprised' },
          { say: 'Aceptamos el horario de verano, a cambio de que el panel de la fundación no esté junto al mural.', reply: '¿El panel? Eso es lo de menos. Lo ponemos en la estación y en paz.', end: 'Catalina suelta el aire. Una condición menos. Quedan las difíciles.', mood: 'laugh' },
        ],
        teacher: 'No hay respuesta correcta. Pide que digan la opción con el foco en la condición: «SOLO si la decide la junta», con más fuerza en «solo» (b2.pron.foco-solo-si). Fíjate en que «solo si» va con indicativo. Después, una ronda rápida en parejas: una persona es Elvira y propone una condición; la otra acepta con otra condición o rechaza.',
      },
    ],
    timeline: [
      'En el mirador, le dije a Elvira que aceptábamos el dinero solo si la tarifa vecinal la decidía la junta.',
      'En el mirador, le dije a Elvira que diez años con un operador externo era demasiado tiempo; Catalina propuso tres.',
      'En el mirador, le dije a Elvira que aceptábamos el horario de verano a cambio de que el panel de la fundación no estuviera junto al mural.',
    ],
    talk: [
      '¿Has firmado alguna vez un contrato con letra pequeña que no leíste? ¿Qué pasó?',
      '¿Aceptarías dinero de una empresa para arreglar tu barrio? ¿Con qué condiciones?',
      'Termina la frase: «Te ayudo con la mudanza a cambio de que…».',
      '¿En qué situación dirías «solo si…»? Da un ejemplo de tu vida.',
      '¿Quién debería gestionar un servicio de tu barrio: los vecinos, el municipio o una empresa?',
    ],
    words: ['el convenio', 'la letra pequeña', 'el operador', 'siempre que + subjuntivo', 'a cambio de que + subjuntivo', 'a no ser que + subjuntivo'],
    teacher: 'B2, semana 8 (negociar condiciones). Elvira no es la mala de la historia: la fundación quiere proteger su inversión, y la condición del operador tiene sentido desde su lado. Que la clase lo vea antes de rechazarla. La condición importante (diez años de gestión externa y una tarifa decidida por el operador) aparece al final, en la última página: en la escucha de este círculo, pide que levanten la mano cuando la oigan. En la pizarra: siempre que / a no ser que / a cambio de que + subjuntivo; solo si + indicativo.',
  },

  asamblea: {
    title: 'La asamblea de la junta',
    place: 'La sede de la junta de vecinos, en lo alto del cerro',
    objective: 'b2.fun.mediacion-fuentes',
    related: ['b2.fun.resumir-declaraciones', 'b2.gram.estilo-indirecto-avanzado', 'b2.lis.reunion', 'b2.fun.conceder-objetar'],
    exponents: [
      { id: 'sintetizar', form: 'En lo que coinciden todos es en que…; por un lado…, por otro…', use: 'sintetizar varias posturas sin borrar las diferencias' },
      { id: 'reserva', form: 'X acepta…, aunque le preocupa que + subjuntivo', use: 'conservar la reserva de cada persona' },
      { id: 'atribuir', form: 'X admitió / sostiene / advierte que…', use: 'atribuir cada idea a su fuente con un verbo preciso' },
      { id: 'adaptar', form: 'En pocas palabras: … (frases cortas, usted, sin tecnicismos)', use: 'adaptar la información a la persona que la recibe' },
      { id: 'no-inventar', form: 'Hay acuerdo en…; queda pendiente…', use: 'separar lo acordado de lo pendiente, sin inventar acuerdos' },
    ],
    line: 'La sede de la junta es una sala con sillas de plástico, un termo de agua caliente y una pizarra. Hoy está llena. Catalina preside. En la primera fila están don Lorenzo, Paola y Alex; Elvira, al fondo, con su carpeta azul. Tú has recorrido el cerro entero y has escuchado a todos. Catalina te pide que ayudes a mediar.',
    dialogue: [
      ['catalina', 'Buenas tardes. Hoy no votamos. Hoy escuchamos y escribimos un borrador de acuerdo.'],
      ['*Un vecino desde el fondo', '¿Otro borrador? Llevamos ocho meses subiendo a pie.'],
      ['catalina', 'Por eso mismo, don Arturo. Quiero un acuerdo que no se caiga en la primera reunión con la fundación.'],
      ['lorenzo', 'Yo solo quiero saber una cosa: ¿el que maneje el ascensor va a ser alguien del cerro?'],
      ['elvira', 'Eso depende de lo que acuerden ustedes, don Lorenzo.'],
      ['paola', 'Entonces acordemos bien. Yo traigo café para todos, pero nadie se va de aquí sin un papel.'],
    ],
    beats: [
      {
        id: 'sintesis', kind: 'contrast', label: 'Contraste lingüístico', exponent: ['sintetizar'], who: 'catalina',
        context: 'Catalina te da la palabra: «Tú has hablado con todos. Empieza por lo que tienen en común.»',
        prompt: 'Elige la síntesis que no deja a nadie fuera.',
        options: [
          { id: 'todos-igual', label: 'Todos queremos lo mismo: que el ascensor reabra con una tarifa barata para todo el mundo.', correct: false, feature: 'síntesis que borra diferencias',
            feedback: 'Síntesis que borra diferencias: no todos quieren una tarifa barata para todo el mundo. Paola y la fundación necesitan una tarifa turística. Sintetizar no es simplificar hasta que parezca que todos piensan igual.' },
          { id: 'partido', label: 'Por un lado está Catalina, que tiene razón, y por otro están los demás, que solo piensan en el dinero.', correct: false, feature: 'mediador que toma partido',
            feedback: 'Mediador que toma partido: quien media no dice quién tiene razón ni juzga los motivos de nadie. Presenta las posturas para que el grupo pueda decidir.' },
          { id: 'coinciden', label: 'En lo que coinciden todos es en que el ascensor tiene que reabrir. Por un lado, los vecinos piden una tarifa propia; por otro, el café y la fundación necesitan que suban visitantes.', correct: true,
            feedback: 'Bien: empiezas por el punto común y ordenas las diferencias con «por un lado…; por otro…». Nadie queda fuera y nadie gana todavía.' },
        ],
        after: 'Don Lorenzo asiente. Paola también. Al fondo, Elvira abre la carpeta.',
      },
      {
        id: 'reserva', kind: 'contrast', label: 'Contraste lingüístico', exponent: ['reserva'], who: 'paola',
        context: 'Paola levanta la mano: «Que conste: yo acepto la tarifa vecinal. Pero me preocupa que, si la tarifa turística es muy cara, los visitantes dejen de subir.»',
        prompt: 'Resume la postura de Paola para el acta.',
        options: [
          { id: 'sin-reserva', label: 'Paola está de acuerdo con la tarifa vecinal.', correct: false, feature: 'reserva perdida',
            feedback: 'Reserva perdida: es verdad, pero falta la mitad. Paola acepta con una reserva, y si el acta no la recoge, ella no la va a firmar.' },
          { id: 'con-reserva', label: 'Paola acepta la tarifa vecinal, aunque le preocupa que una tarifa turística muy cara haga que los visitantes dejen de subir.', correct: true,
            feedback: 'Bien: la postura y la reserva, las dos. «Le preocupa que» pide subjuntivo: «haga», «dejen».' },
          { id: 'indicativo', label: 'Paola acepta la tarifa vecinal, aunque le preocupa que una tarifa turística muy cara hace que los visitantes dejan de subir.', correct: false, feature: 'modo después de «le preocupa que»',
            feedback: 'Modo después de «le preocupa que»: un verbo de emoción o de preocupación pide subjuntivo: «le preocupa que… haga que… dejen».' },
        ],
        after: '«Eso. Exactamente eso», dice Paola. «Escríbelo así.»',
      },
      {
        id: 'atribuir', kind: 'contrast', label: 'Contraste lingüístico', exponent: ['atribuir'], who: 'catalina',
        context: 'Ahora, la fundación. En el mirador, Elvira reconoció que el operador externo es una condición del convenio, aunque al principio no lo dijo.',
        prompt: 'Elige el verbo justo para el acta.',
        options: [
          { id: 'prometio', label: 'La consultora prometió que habría un operador externo durante diez años.', correct: false, feature: 'verbo de cita',
            feedback: 'Verbo de cita: «prometer» presenta el operador como un regalo. Elvira no lo ofreció: lo reconoció cuando se le preguntó. El verbo justo es «admitir» o «reconocer».' },
          { id: 'admitio', label: 'La consultora admitió que la fundación exige un operador externo durante diez años.', correct: true,
            feedback: 'Bien: «admitir» dice que reconoció algo que no presentó al principio, sin acusarla de nada. Con el presente «exige», el acta dice que la condición sigue en pie.' },
          { id: 'oculto', label: 'La consultora ocultó que la fundación exige un operador externo durante diez años.', correct: false, feature: 'acusación sin prueba',
            feedback: 'Acusación sin prueba: «ocultó» dice que lo escondió a propósito. Elvira lo puso en la última página y lo dijo cuando se le preguntó. Un acta no acusa: atribuye con precisión.' },
        ],
        after: 'Elvira, desde el fondo: «Gracias. "Admitió" me parece justo.»',
      },
      {
        id: 'adaptar', kind: 'contrast', label: 'Contraste lingüístico', exponent: ['adaptar'], who: 'lorenzo',
        context: 'Don Lorenzo se acerca: «Yo no tengo claro eso del operador ni lo del convenio. Explíquemelo a mí, no a la fundación.»',
        prompt: 'Elige la explicación para don Lorenzo.',
        options: [
          { id: 'tecnico', label: 'Don Lorenzo, se estima que el convenio implica la externalización de la gestión durante un periodo de diez años.', correct: false, feature: 'registro para quien escucha',
            feedback: 'Registro para quien escucha: la información es correcta, pero es la voz de un informe. Don Lorenzo pidió una explicación para él: frases cortas, palabras de todos los días y usted.' },
          { id: 'inventado', label: 'Don Lorenzo, en pocas palabras: si aceptamos el dinero, usted se queda sin trabajo.', correct: false, feature: 'información inventada',
            feedback: 'Información inventada: nadie ha dicho eso. Quizás el operador cuenta con él, quizás no: no se sabe. Adaptar es simplificar, no añadir lo que uno teme.' },
          { id: 'claro', label: 'Don Lorenzo, en pocas palabras: si aceptamos el dinero, durante diez años el ascensor lo maneja una empresa que elige la fundación. Eso todavía no está decidido.', correct: true,
            feedback: 'Bien: adaptas sin cambiar el contenido. Frases cortas, usted y, al final, lo que todavía no está decidido. Eso es mediar.' },
        ],
        after: 'Don Lorenzo se queda pensando: «Una empresa… Bueno. Pero que alguien les enseñe cómo frena el carro en la curva.»',
      },
      {
        id: 'juego-de-roles', kind: 'stimulus', label: 'Estímulo de conversación', exponent: ['sintetizar', 'reserva'], who: 'catalina',
        context: 'Catalina divide la sala en cuatro grupos: vecinos, comercios, fundación y técnico. «Cada grupo defiende lo suyo dos minutos. Ustedes median.»',
        prompt: 'Juego de roles en grupos: cada grupo presenta su postura con una concesión y una condición; la persona que media resume y conserva las reservas. Después, cambien los papeles.',
        frames: [
          { id: 'condicion', label: 'Nosotros aceptamos…, siempre que…' },
          { id: 'concesion', label: 'Entendemos que…; aun así, nos preocupa que…' },
          { id: 'comprobar', label: 'Si he entendido bien, ustedes sostienen que… ¿Es así?' },
          { id: 'sintesis', label: 'Por un lado…; por otro…' },
        ],
        teacher: 'No hay respuesta correcta. Cada grupo saca su postura de las notas de la sesión. La persona que media no opina: resume y pregunta «¿lo he dicho bien?». Corta a los dos minutos por grupo.',
      },
      {
        id: 'acuerdo', kind: 'contrast', label: 'Contraste lingüístico', exponent: ['no-inventar'], who: 'catalina',
        context: 'Antes de escribir el acta, Catalina pregunta: «¿Qué está decidido y qué no? No quiero un papel que diga más de lo que pasó aquí.»',
        prompt: 'Elige la frase final del borrador.',
        options: [
          { id: 'inventado', label: 'Se acuerda aceptar el convenio con la fundación y la tarifa doble para visitantes.', correct: false, feature: 'acuerdo inventado',
            feedback: 'Acuerdo inventado: hoy no se votó. Nadie aceptó el convenio, y la tarifa turística tiene todavía la reserva de Paola. Un acta que dice más de lo que se decidió no la firma nadie.' },
          { id: 'pendiente', label: 'Hay acuerdo en reabrir con tarifa vecinal; queda pendiente la gestión externa, que se votará cuando la fundación responda.', correct: true,
            feedback: 'Bien: separas lo acordado de lo pendiente y dices cuándo se decidirá lo que falta. Eso es mediar sin inventar acuerdos.' },
          { id: 'borrado', label: 'No hay acuerdo en nada; se convoca otra asamblea.', correct: false, feature: 'acuerdo borrado',
            feedback: 'Acuerdo borrado: también es inexacto. Todos aceptaron reabrir y nadie se opuso a la tarifa vecinal. Borrar lo acordado es tan falso como inventarlo.' },
        ],
        after: 'Catalina lo escribe en la pizarra y lo lee en voz alta. Ahora, el acta completa.',
      },
    ],
    talk: [
      '¿Has participado en una reunión de vecinos, de familias o de trabajo? ¿Cómo se tomaban las decisiones?',
      '¿Qué es más difícil: defender tu postura o resumir la de otra persona sin cambiarla?',
      '¿Alguna vez un acta o un resumen dijo algo que no se había acordado? ¿Qué pasó?',
      'Resume la opinión de una persona de la clase con su reserva: «X está de acuerdo, aunque le preocupa que…».',
      '¿Cómo le explicarías una decisión complicada a una persona mayor de tu familia?',
    ],
    words: ['la junta de vecinos', 'el acta', 'el borrador', 'la reserva', 'queda pendiente', 'admitir / sostener / advertir que…'],
    teacher: 'Es el cierre de las dos rutas. Orden fijo: la síntesis → la reserva de Paola → la cita de Elvira → la explicación para don Lorenzo → el juego de roles en grupos → lo decidido y lo pendiente → el acta escrita desde las notas de la sesión, con la lista de control → la pregunta de transferencia. El acta no inventa acuerdos: lo que no se decidió va en «queda pendiente». La lista de control la marca el docente o el grupo; la aplicación no evalúa el habla ni la graba. En la ruta de conversación (20 minutos): los cuatro contrastes, rápidos (4 min), juego de roles 6 min, el acta 8 min y la pregunta final 2 min. En la ruta de comprensión (18 minutos), el juego de roles dura 4 minutos.',
  },
};

// The closing production at «asamblea»: after the beats above. The class
// mediates and writes a short agreement (acta) from this session's notes.
export const CLOSING = {
  narrative: {
    prompt: 'Escriban en grupo el acta de la asamblea, entre seis y ocho frases. Usen las notas de esta sesión: cada círculo que visitaron tiene una frase. Cada parte conserva su reserva, y nada se da por acordado si no se acordó.',
    frames: ['Se acuerda reabrir el ascensor, siempre que…', 'Aunque…, la junta acepta… a cambio de que…', '(Nombre) acepta…, aunque le preocupa que…', '(Nombre) admitió / sostiene / advierte que…', 'Queda pendiente…, que se votará cuando…'],
    // The notes are built only from this group's picks in this session
    // (sessionStorage): CIRCLES[id].timeline[pick] for each circle visited,
    // in the order visited. Circles not visited are left out.
    source: 'sessionStorage',
    opening: 'En la asamblea de la junta de vecinos se escuchó a los vecinos, a los comercios, al técnico y a la fundación.',
    ending: 'Queda pendiente la gestión del ascensor, que se votará en la próxima asamblea.',
  },
  // Ticked by the teacher or the group, never computed from speech or text.
  selfCheck: {
    scope: 'El grupo en esta sesión',
    marks: ['logrado', 'con ayuda', 'todavía no'],
    items: [
      { id: 'condiciones', label: 'El acta pone dos condiciones o más con «siempre que», «a no ser que» o «a cambio de que», con el verbo en subjuntivo.' },
      { id: 'concesion', label: 'El acta concede algo con «aunque» y elige bien el modo: indicativo para un hecho que se afirma, subjuntivo para algo que se concede sin discutirlo.' },
      { id: 'reservas', label: 'Cada parte aparece con su postura y su reserva, atribuidas con un verbo preciso: admitir, sostener, advertir.' },
      { id: 'pendiente', label: 'El acta no inventa acuerdos: lo que no se decidió aparece como «queda pendiente».' },
    ],
  },
  transfer: {
    question: '¿Hay en tu barrio, en tu edificio o en tu trabajo un conflicto en el que ayudarías a mediar? ¿Qué acuerdo propondrías, y con qué condiciones?',
    model: 'En mi edificio, unos vecinos quieren cerrar el patio por la noche y otros no. Yo propondría cerrarlo a las once, siempre que los que trabajan de noche tengan llave, aunque a algunos les preocupe la seguridad.',
  },
  sessionLabel: 'Notas de esta sesión: no se guardan por alumno',
  reset: 'Nueva clase / nuevo grupo',
};

// Teacher routes as data (BD-001 E1/N4). A step with `oneOf` lets the teacher
// pick one circle. Both routes end in the closing at «asamblea».
export const ROUTES = [
  {
    id: 'conversacion', mode: 'conversacion', title: 'Conversación', minutes: 45,
    steps: [
      { id: 'calentamiento', minutes: 5, do: 'Pregunta: «¿Cómo ha cambiado tu barrio?». Anota en la pizarra los verbos de cambio que salgan (se ha vuelto, se ha convertido en…). Si traes una muestra real de habla chilena, ponla ahora, un minuto.' },
      { circle: 'estacion', minutes: 5 },
      { oneOf: ['escalera', 'cafe'], minutes: 5 },
      { circle: 'taller', minutes: 5 },
      { circle: 'mirador', minutes: 5 },
      { circle: 'asamblea', minutes: 20, closing: true },
    ],
  },
  {
    id: 'comprension', mode: 'escucha', title: 'Comprensión auditiva', minutes: 45,
    steps: [
      { id: 'calentamiento', minutes: 3, do: 'Pregunta: «¿Cómo ha cambiado tu barrio?». Después, avisa: en cada escucha hay que separar la postura de cada persona y la condición que pone.' },
      { oneOf: ['estacion', 'escalera'], minutes: 6, listening: true },
      { circle: 'cafe', minutes: 6, listening: true },
      { circle: 'taller', minutes: 6, listening: true },
      { circle: 'mirador', minutes: 6, listening: true },
      { circle: 'asamblea', minutes: 18, closing: true },
    ],
  },
];

// E1 (BOARD-DECISION-001 §3.2): progress = round(100 × route circles done ÷
// route circles); 100 only on the closing «Terminar». Any report built on it
// uses only the N4 wording below, never "learning" or a session count.
export const E1_LABEL = 'accounts that have reached the closing of lesson X at least once ÷ accounts that opened lesson X; signed-in PRO accounts only; not learning; reaching the closing ≠ teaching the route';

// Placement note for the teacher list.
export const PLACEMENT = 'Para la mitad de B2: concesivas (semana 6), conectores condicionales (semana 8) y verbos de cambio (semana 13); el cierre es una mediación con acta escrita.';
