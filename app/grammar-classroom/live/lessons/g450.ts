import type { LiveLesson } from '../types';

/**
 * Lesson 450 · B2 · Se accidental y responsabilidad atenuada (course unit G150).
 * Builds on G060 (reflexive pronouns), G063 (indirect object me / te / le…),
 * G062 (gustar-type agreement: the verb agrees with the thing), G119 / G149
 * (se pasivo and impersonal) and G122 (lesson 422), which already fixed the
 * ORDER «se me», never «me se». Order is only reviewed here; the class is about
 * meaning, agreement and pragmatics.
 * Content: se + indirect pronoun + verb agreeing with the thing (se me rompió el
 * vaso / se me rompieron las gafas; with an infinitive, singular: se me olvidó
 * llamar); obligatory le / les with «a + persona»; possession through the
 * pronoun (se me rompió el celular, not «mi celular»); three degrees of
 * responsibility (rompí / se me rompió / se rompió); olvidar · olvidarse de ·
 * olvidársele; verbs that can «happen by themselves» (olvidarse, perderse,
 * caerse, romperse, quemarse, acabarse, quedarse, escaparse, ocurrirse) and
 * verbs that cannot (*se me escribió); pragmatics: softening blame in excuses
 * and apologies, and when it sounds evasive. Regional note: dañarse /
 * descomponerse / malograrse / estropearse for devices; «se me quedó» (left
 * behind) is general.
 * Scene: Eventos Ceiba, a small events agency in Lima. On Friday they ran a
 * gala dinner at a hotel in Miraflores. On Monday Paula Ortega (director)
 * reviews the night with Felipe Duarte (sound), Natalia Rojas (coordinator) and
 * Camilo Herrera (head waiter); Marta Villegas runs events at the hotel; the
 * client is don Ramiro Salcedo. Voice message: Paula to don Ramiro (Peruvian
 * voice, usted). Ampliación: fixed expressions (se me hizo tarde, se me pasó,
 * se me fue la mano) and formal written apologies. Instructions use tú.
 */
export const lesson: LiveLesson = {
  id: 450,
  level: 'B2',
  title: 'Se accidental y responsabilidad atenuada',
  subtitle: 'Contar percances con «se me rompió, se le olvidaron» y decidir cuándo suavizar la culpa y cuándo asumirla con claridad.',
  legend: [
    { tone: 'blue', label: 'SE ACCIDENTAL · se me / se le + verbo (it happened to someone)' },
    { tone: 'violet', label: 'A QUIÉN LE PASA · a mí, a Felipe, a los mozos (the person affected)' },
    { tone: 'orange', label: 'RESPONSABILIDAD ACTIVA · rompí, pedimos, fue culpa mía (I did it)' },
    { tone: 'teal', label: 'SIN PERSONA · se rompió, se acabó (no one mentioned)' },
  ],
  optionNotes: {
    'se me olvidaron': 'El verbo concuerda con lo olvidado. Con un infinitivo (olvidó **llamar**, **enviar**…) o con una cosa en singular, va en singular: se me olvidó.',
    'se lo cayó': '«Lo» es complemento directo. Aquí la persona afectada es complemento indirecto: **se le** cayó.',
    'me olvidó': 'Sin «se», el verbo no funciona así. Di «se me olvidó…» (me pasó) u «olvidé…» (yo como sujeto).',
  },
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Cuando las cosas «se» rompen', coach: '¿Lo hiciste o te pasó? Did you do it, or did it happen to you?',
      steps: [
        { title: 'El lunes después de la gala · The Monday after the gala', blocks: [
          { kind: 'lead', text: 'Eventos Ceiba es una pequeña agencia de eventos de Lima. El viernes organizó una cena de gala en un hotel de Miraflores. Hubo algunos percances: una bandeja en el suelo, unos cables olvidados, el hielo que se terminó. El lunes, la directora, Paula Ortega, reúne al equipo. Cada uno cuenta lo que pasó **a su manera**.', en: 'Spanish has three ways to tell the same mishap: you can say you did it, say it happened to you, or say it simply happened. The choice is not only grammatical: it shows how much responsibility you take.' },
          { kind: 'guide', text: { teacher: 'Tú lees las tres versiones y tu alumno dice cuál suena más honesta, cuál más amable y cuál más distante, y por qué.', self: 'Lee las tres versiones en voz alta. ¿Cuál asume la culpa, cuál la suaviza y cuál no menciona a nadie?' } },
          { kind: 'compare', title: 'La misma bandeja, tres versiones', columns: [
            { tone: 'orange', label: 'LO HICE YO', sentence: 'Camilo: «[[Tiré|orange]] la bandeja».', idea: 'Camilo es el sujeto: asume que él lo hizo.', en: 'Camilo is the subject: he presents himself as the one who did it, which can even suggest he did it on purpose.' },
            { tone: 'blue', label: 'ME PASÓ', sentence: 'Camilo: «[[Se me cayó|blue]] la bandeja».', idea: 'La bandeja es el sujeto; Camilo es la persona afectada. Fue sin querer.', en: 'The tray is the subject and Camilo is the person it happened to: he was involved, but it was not intentional.' },
            { tone: 'teal', label: 'PASÓ', sentence: 'Camilo: «[[Se cayó|teal]] la bandeja».', idea: 'No aparece ninguna persona: solo el hecho.', en: 'No person appears at all: just the event. Useful for neutral facts, but it can sound like hiding.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué versión dice que fue sin querer, pero reconoce que Camilo estaba implicado?', options: ['Se cayó la bandeja.', 'Tiré la bandeja.', 'Se me cayó la bandeja.'], answer: 2, why: '«Se me cayó»: la bandeja cae y «me» señala a quién le pasó. Fue involuntario, pero la persona aparece.', en: 'Which version says it was accidental but still shows Camilo was involved?' },
            { prompt: 'En «Se me cayó la bandeja», ¿cuál es el sujeto del verbo?', options: ['Camilo (me)', 'Nadie', 'La bandeja'], answer: 2, why: 'La bandeja es la que «se cae». «Me» es la persona afectada (complemento indirecto).', en: 'In «Se me cayó la bandeja», what is the subject of the verb?' },
          ] },
        ] },
        { title: 'La forma: el verbo mira a la cosa · The verb agrees with the thing', mascot: '/brand/mascot/studying.webp', coach: 'Una cosa, singular; varias, plural. One thing, singular; several, plural.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'SE + PRONOMBRE + VERBO', question: '¿Qué cosa se rompió, se cayó o se olvidó? ¿Una o varias?', en: 'Ask what broke, fell or was forgotten: that thing is the subject, so the verb agrees with it, not with the person. The pronoun says who it happened to.', formula: ['(a + persona) + se + me · te · le · nos · os · les + verbo en 3.ª persona + cosa', 'se me rompió el vaso · se me rompieron las gafas'],
            meaning: 'Funciona como **gustar**: la persona va en el pronombre (me, te, le…) y el verbo concuerda con **la cosa**. Si es una, singular: **se me rompió** el vaso. Si son varias, plural: **se me rompieron** las gafas. Con un infinitivo, singular: **se me olvidó llamar**. La persona puede aparecer también con **a**: **a Felipe se le** olvidaron los cables (el «le» no desaparece).',
            examples: [
              { es: '[[A Felipe|violet]] [[se le olvidaron|blue]] los cables del micrófono.', en: 'Cables is plural, so the verb is plural. Felipe appears twice: a Felipe and le.' },
              { es: 'Hacia las once [[se nos acabó|blue]] el hielo.', en: 'One thing ran out (el hielo): singular. Nos says it happened to the team.' },
              { es: '[[A los mozos|violet]] [[se les acabaron|blue]] las servilletas.', en: 'Les for the waiters (mozos, the usual word in Peru), plural verb for the napkins.' },
              { es: 'Perdona, [[se me olvidó|blue]] mandarte la lista.', en: 'With an infinitive (mandar), the verb stays singular.' },
              { es: '¡Uy! [[Se te cayó|blue]] un guante.', en: 'Te: it happened to you. Telling someone they dropped something is a typical use.' },
            ] },
          { kind: 'table', title: 'Pronombre según la persona · Pronoun by person', head: ['A quién le pasa', 'Una cosa', 'Varias cosas'], rows: [
            ['a mí', '[[se me|blue]] cayó el vaso', '[[se me|blue]] cayeron las llaves'],
            ['a ti', '[[se te|blue]] olvidó el paraguas', '[[se te|blue]] olvidaron las entradas'],
            ['a él · a ella · a usted', '[[se le|blue]] perdió el pasaporte', '[[se le|blue]] perdieron los papeles'],
            ['a nosotros · a nosotras', '[[se nos|blue]] acabó la leche', '[[se nos|blue]] acabaron las servilletas'],
            ['a vosotros · a vosotras (España)', '[[se os|blue]] quemó el arroz', '[[se os|blue]] quemaron las tostadas'],
            ['a ellos · a ellas · a ustedes', '[[se les|blue]] escapó el perro', '[[se les|blue]] escaparon los gatos'],
          ], note: 'El orden es siempre **se + me / te / le…**, nunca «me se» (clase 122). «Se le» puede ser a él, a ella o a usted: si hay duda, añade **a Camilo**, **a usted**.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Felipe, en la gala: «Perdón, ___ las baterías en el almacén».', options: ['se me quedó', 'se me quedaron', 'me se quedaron'], answer: 1, why: 'Las baterías son varias: plural. Y «se» va primero.', en: 'Sorry, I left the batteries in the storeroom.' },
            { prompt: 'Natalia: «___ confirmar la hora con el DJ».', options: ['Se me olvidaron', 'Se me olvidé', 'Se me olvidó'], answer: 2, why: 'Lo olvidado es un infinitivo (confirmar): singular.', en: 'I forgot to confirm the time with the DJ.' },
            { prompt: '___ se le rompieron dos copas.', options: ['De Camilo', 'A Camilo', 'Camilo'], answer: 1, why: 'La persona afectada es complemento indirecto: «a Camilo» + le.', en: 'Camilo broke two glasses (by accident).' },
          ] },
        ] },
        { title: 'Verbos frecuentes y la posesión · Common verbs and possession', mascot: '/brand/mascot/standing.webp', coach: 'Se me rompió el celular, no «mi» celular. No «mi» needed.', blocks: [
          { kind: 'table', title: 'Los verbos de los percances · Verbs for mishaps', head: ['Verbo', 'Ejemplo', 'Idea'], rows: [
            ['olvidarse', '[[Se me olvidó|blue]] tu cumpleaños.', 'forget (it slipped my mind)'],
            ['perderse', '[[Se le perdió|blue]] el pasaporte en el aeropuerto.', 'lose'],
            ['caerse', '[[Se te cayeron|blue]] las monedas.', 'drop'],
            ['romperse', '[[Se nos rompió|blue]] la impresora.', 'break'],
            ['quemarse', '[[Se le quemó|blue]] la salsa al cocinero.', 'burn'],
            ['acabarse', '[[Se nos acabó|blue]] el pan.', 'run out of'],
            ['quedarse', '[[Se me quedó|blue]] el paraguas en el taxi.', 'leave something behind'],
            ['escaparse', '[[Se les escapó|blue]] el perro. · [[Se me escapó|blue]] el secreto.', 'get away; let slip'],
            ['ocurrirse', '[[Se me ocurrió|blue]] una idea.', 'occur to, come up with (not an accident!)'],
          ], note: '**Ocurrírsele** algo a alguien no es un percance: es una idea que «llega sola». También funciona en presente para lo habitual: «Siempre [[se me olvidan|blue]] las gafas».' },
          { kind: 'concept', tone: 'violet', label: 'LA POSESIÓN VA EN EL PRONOMBRE', question: '¿De quién es el celular que se rompió?', en: 'The pronoun already tells you whose thing it is, so Spanish uses the article: se me rompió el celular means my phone. Adding mi sounds redundant.', formula: ['se me rompió el celular = my phone broke', 'se le perdieron las llaves = he / she lost his / her keys'],
            meaning: 'El pronombre ya dice de quién es la cosa, así que lo normal es el **artículo**: **se me rompió el celular**, no «se me rompió mi celular». Lo mismo pasa con la ropa y el cuerpo: **se le manchó la camisa**, **se me durmió la pierna**.',
            examples: [
              { es: '[[Se me rompió|blue]] el celular justo antes del evento.', en: 'My phone broke just before the event: el, not mi.' },
              { es: '[[A Natalia|violet]] [[se le manchó|blue]] el vestido con vino tinto.', en: 'Natalia’s dress got a red wine stain: le already says it is hers.' },
            ] },
          { kind: 'tip', icon: '🌎', title: 'Cuando algo deja de funcionar · When something stops working', text: 'Para un aparato que deja de funcionar, cada zona tiene su verbo favorito, siempre con la misma estructura: **se me malogró** la laptop (Perú), **se me dañó** el computador (Colombia, Venezuela), **se me descompuso** el carro (México y Centroamérica), **se me estropeó** el portátil (España). **Se me quedó** algo en un sitio (lo dejé sin querer) se usa en todas partes.', en: 'For a device that stops working, regions prefer different verbs (malograrse in Peru, dañarse in Colombia and Venezuela, descomponerse in Mexico and Central America, estropearse in Spain), all with the same structure. Se me quedó for leaving something behind is used everywhere.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Cuál es la forma más natural?', options: ['Se me perdió la billetera en el bus.', 'Me se perdió la billetera en el bus.', 'Se me perdió mi billetera en el bus.'], answer: 0, why: '«Me» ya dice que la billetera es tuya: el artículo basta.', en: 'I lost my wallet on the bus.' },
            { prompt: 'Natalia: «En la reunión ___ una solución para el hielo».', options: ['se me olvidó', 'se me acabó', 'se me ocurrió'], answer: 2, why: 'Una idea que aparece sola: ocurrírsele algo a alguien.', en: 'In the meeting, a solution for the ice occurred to me.' },
          ] },
        ] },
        { title: 'Suavizar o asumir · Soften or own it', mascot: '/brand/mascot/speaking.webp', coach: 'Amable no es lo mismo que evasivo. Kind is not the same as evasive.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'RESPONSABILIDAD ATENUADA', question: '¿Fue de verdad un accidente o fue una decisión tuya?', en: 'The accidental se presents what happened as unintended. That makes excuses and apologies sound kinder, but if the problem came from a decision or real carelessness, it can sound like avoiding the blame.', formula: ['accidente real → se me rompió, se me olvidó', 'decisión o error tuyo → rompí, calculé mal, fue culpa mía', 'disculpa profesional → se me olvidó + lo siento + solución'],
            meaning: 'El se accidental presenta el hecho como **involuntario**: por eso suaviza excusas y disculpas («Perdona, se me olvidó tu mensaje»). Pero no borra la responsabilidad. Si el problema fue una **decisión** o un descuido evidente, o si la otra persona sufrió las consecuencias, suena **evasivo**. En el trabajo, lo que da confianza es la combinación: reconoces, te disculpas y propones una solución.',
            examples: [
              { es: '[[Se me olvidó|blue]] enviarte el contrato, lo siento. Te lo mando ahora mismo.', en: 'Accidental se + apology + repair: the usual professional formula.' },
              { es: 'Calculamos mal el hielo: [[fue culpa nuestra|orange]].', en: 'The shortage came from a decision (how much to order), so the team owns it.' },
              { es: '[[Se rompió|teal]] la ventana. (dicho por quien tiró la pelota)', en: 'Without any person, the speaker disappears from the story: in this context it sounds like hiding.' },
            ] },
          { kind: 'compare', title: 'Olvidar, olvidarse de, olvidársele · Three ways to forget', columns: [
            { tone: 'orange', label: 'OLVIDAR ALGO', sentence: '[[Olvidé|orange]] tu cumpleaños.', idea: 'Yo soy el sujeto: suena más directo, casi una confesión.', en: 'The speaker is the subject: the most direct way to admit it.' },
            { tone: 'orange', label: 'OLVIDARSE DE ALGO', sentence: '[[Me olvidé de|orange]] tu cumpleaños.', idea: 'Yo sigo siendo el sujeto; es la forma más frecuente en la conversación. Fíjate en el «de».', en: 'Still the speaker as subject, and very common in conversation. Note the de.' },
            { tone: 'blue', label: 'OLVIDÁRSELE ALGO A ALGUIEN', sentence: '[[Se me olvidó|blue]] tu cumpleaños.', idea: 'Tu cumpleaños es el sujeto: «se me fue de la cabeza». Es la versión más suave.', en: 'The birthday is the subject, as if it slipped out of my head: the softest version.' },
          ] },
          { kind: 'decide', title: '¿Cómo lo cuento?', steps: [
            { q: '¿Fue algo que hiciste a propósito o que decidiste tú (pedir poco, borrar, no avisar)?', yes: 'Usa la forma activa y asúmelo: «[[Calculé mal|orange]] el hielo; [[fue un error mío|orange]]».', no: 'next' },
            { q: '¿Te pasó sin querer y quieres reconocer que estabas implicado?', yes: 'Usa el se accidental: «[[Se me cayó|blue]] la bandeja». Si causó un problema a otro, añade una disculpa y una solución.', no: 'next' },
            { q: '¿Solo informas de un hecho en el que no participaste?', yes: 'Puedes omitir a la persona: «[[Se rompió|teal]] la impresora del almacén».', no: 'Piensa quién estaba implicado y elige entre la forma activa y la accidental.' },
          ] },
          { kind: 'tip', icon: '💡', title: 'No todo verbo «pasa solo» · Not every verb can just happen', text: 'Esta estructura necesita verbos que describan algo que puede **ocurrir sin que nadie lo haga**: romperse, caerse, perderse, borrarse, acabarse… Con verbos que exigen una persona que actúa, no funciona: «se me escribió mal la dirección» ✗ → **escribí mal** la dirección. «Se me mandó el correo» ✗ → **mandé** el correo / **se me pasó** revisarlo.', en: 'The structure only works with verbs for things that can happen on their own (break, fall, get lost, get deleted, run out). Verbs that need someone acting, like escribir or mandar, cannot be used this way: say escribí mal or mandé.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { context: 'Camilo decidió no pedir más hielo para ahorrar. Ahora habla con la directora.', prompt: '¿Qué frase es más adecuada?', options: ['Encargué poco hielo para ahorrar; me equivoqué.', 'Se nos acabó el hielo, qué le vamos a hacer.', 'Se acabó el hielo.'], answer: 0, why: 'Fue una decisión suya: lo honesto es la forma activa. Las otras suenan evasivas.', en: 'Camilo chose not to order more ice to save money. What should he say?' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Mira la cosa, no a la persona. Look at the thing, not the person.', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees cada frase con error; tu alumno dice qué falla antes de ver la corrección.', self: 'Lee cada frase y busca el error antes de mirar la corrección.' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Se me olvidó las llaves en la oficina.', right: 'Se me olvidaron las llaves en la oficina.', why: 'El verbo concuerda con «las llaves» (plural), no con la persona.' },
            { wrong: 'Se me olvidé el regalo.', right: 'Se me olvidó el regalo.', why: 'El sujeto es el regalo: tercera persona. «Me» ya dice que te pasó a ti.' },
            { wrong: 'A Felipe se cayó el micrófono.', right: 'A Felipe se le cayó el micrófono.', why: 'Con «a + persona», el pronombre «le» es obligatorio.' },
            { wrong: 'A Camilo se lo cayó la bandeja.', right: 'A Camilo se le cayó la bandeja.', why: 'La persona afectada es complemento indirecto: le, no lo.' },
            { wrong: 'Se me olvidaron llamar al proveedor.', right: 'Se me olvidó llamar al proveedor.', why: 'Con un infinitivo, el verbo va en singular.' },
            { wrong: 'Se me rompió mi celular.', right: 'Se me rompió el celular.', why: 'El pronombre ya indica de quién es: «mi» sobra.' },
            { wrong: 'Me se cayó el vaso.', right: 'Se me cayó el vaso.', why: '«Se» siempre va primero (repaso de la clase 122).' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'A los invitados ___ los abrigos en el guardarropa.', options: ['se les quedaron', 'se le quedó', 'se los quedaron'], answer: 0, why: 'Les: los invitados. Plural: los abrigos.', en: 'The guests left their coats in the cloakroom.' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno cuenta tres percances reales de su semana con «se me…» y tú preguntas «¿Seguro que fue sin querer?». Si fue una decisión, lo reformula en activa.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'La reunión del lunes', coach: 'Toca las expresiones marcadas. Tap the marked expressions.',
      steps: [
        { title: 'Repaso de la gala · Reviewing the gala', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Paula y tu alumno hace de Felipe, Natalia y Camilo. Después tu alumno toca cada expresión marcada y dice quién asume la culpa y quién la suaviza.', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada y piensa: ¿quién asume la culpa y quién la suaviza?' } },
          { kind: 'explore', title: '¿Qué falló el viernes?', setting: 'Lunes por la mañana, en la oficina de Eventos Ceiba, en Lima. Paula repasa la cena de gala del viernes con su equipo. El cliente quedó contento, pero hubo percances. (Monday morning at the agency: Paula reviews Friday’s gala dinner with her team.)', lines: [
            { who: 'Paula', text: 'Bueno, el cliente quedó contento, pero quiero repasar lo que falló. Felipe, ¿qué pasó con los micrófonos?', en: 'Well, the client was happy, but I want to go over what went wrong. Felipe, what happened with the microphones?' },
            { who: 'Felipe', text: '[[Fue culpa mía|orange]]. [[Se me quedaron|blue]] los cables en el almacén y tuve que volver en taxi.', en: 'It was my fault. I left the cables in the storeroom and had to go back by taxi.' },
            { who: 'Paula', text: '¿Y la lista de canciones? El DJ dice que nunca la recibió.', en: 'And the playlist? The DJ says he never got it.' },
            { who: 'Felipe', text: 'Esa [[se me borró|blue]] del celular, no sé cómo. Pero Natalia lo resolvió.', en: 'That one got deleted from my phone, I don’t know how. But Natalia sorted it out.' },
            { who: 'Natalia', text: 'Sí, [[se me ocurrió|blue]] usar la lista de la boda de la semana pasada. Nadie notó nada.', en: 'Yes, I had the idea of using the playlist from last week’s wedding. Nobody noticed a thing.' },
            { who: 'Paula', text: 'Bien pensado. Camilo, ¿y lo de las copas?', en: 'Good thinking. Camilo, what about the glasses?' },
            { who: 'Camilo', text: '[[A uno de los mozos|violet]] [[se le cayó|blue]] una bandeja junto al escenario. [[Se rompieron|teal]] seis copas del hotel.', en: 'One of the waiters dropped a tray next to the stage. Six of the hotel’s glasses broke.' },
            { who: 'Paula', text: '¿Y el hielo? A las once la gente lo pedía y no había.', en: 'And the ice? At eleven people were asking for it and there wasn’t any.' },
            { who: 'Camilo', text: 'Bueno, [[se nos acabó|blue]]. Son cosas que pasan.', en: 'Well, we ran out. These things happen.' },
            { who: 'Paula', text: 'No, Camilo, eso no «pasó». [[Pedimos|orange]] la mitad de lo necesario. En el correo al cliente lo vamos a decir así.', en: 'No, Camilo, that didn’t just “happen”. We ordered half of what we needed. In the email to the client we’ll say exactly that.' },
            { who: 'Natalia', text: 'De acuerdo. Y tengo que confesar algo: [[se me escapó|blue]] lo del video sorpresa delante del gerente.', en: 'Fair enough. And I have a confession: I let slip the surprise video in front of the manager.' },
            { who: 'Paula', text: '¡Natalia! Menos mal que [[a él|violet]] [[se le olvidó|blue]] enseguida: cuando vio el video, se emocionó igual.', en: 'Natalia! Luckily he forgot about it straight away: when he saw the video, he was just as moved.' },
          ], notes: {
            'Fue culpa mía': 'Felipe empieza **asumiendo** la responsabilidad. Así, el «se me quedaron» que sigue no suena a excusa: es solo cómo pasó.',
            'Se me quedaron': 'Dejar algo en un sitio sin querer. Plural porque concuerda con **los cables**. Se usa en todo el mundo hispanohablante.',
            'se me borró': '**Borrarse** puede ocurrir «solo» (un fallo del celular), así que admite el se accidental. Felipe no sabe qué hizo mal.',
            'se me ocurrió': '**Ocurrírsele** algo a alguien: una idea que aparece. No es un accidente, pero tiene la misma estructura: se + me + verbo que concuerda con la idea (aquí, un infinitivo: singular).',
            'A uno de los mozos': 'La persona afectada con **a**. «Mozo» es la palabra habitual para el camarero en Perú (mesero en México y Colombia, camarero en España). El «le» que sigue es obligatorio.',
            'se le cayó': 'Singular porque concuerda con **una bandeja**. Camilo no culpa al mozo: lo presenta como accidente.',
            'Se rompieron': '**Sin persona**: Camilo solo cuenta el hecho. Aquí es razonable: las copas se rompieron al caer la bandeja, no por acción de nadie.',
            'se nos acabó': 'Gramaticalmente correcto (el hielo, singular; nos, el equipo). Pero Paula lo rechaza: no fue mala suerte, fue una decisión de compra.',
            'Pedimos': 'Paula pasa a la **forma activa**: el equipo es el sujeto y asume el error. Con el cliente, esto da más confianza que «se nos acabó».',
            'se me escapó': '**Escapársele** algo a alguien: decirlo sin querer. También sirve para animales («se les escapó el perro») o la risa.',
            'a él': 'La persona afectada, con **a**, para aclarar que «le» es el gerente y no Natalia.',
            'se le olvidó': 'Singular: lo olvidado es «lo del video». Paula también suaviza: el gerente no «decidió» olvidarlo.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Qué problema tuvo Felipe con los micrófonos?', options: ['Porque se rompió un micrófono.', 'Porque el DJ no recibió la lista.', 'Porque Felipe dejó los cables en el almacén.'], answer: 2, why: '«Se me quedaron los cables en el almacén y tuve que volver en taxi».', en: 'What problem did Felipe have with the microphones?' },
            { prompt: '¿Por qué no acepta Paula «se nos acabó el hielo»?', options: ['Porque el hielo no se acabó.', 'Porque Camilo usa mal la gramática.', 'Porque fue un error de cálculo del equipo, no mala suerte.'], answer: 2, why: '«Pedimos la mitad de lo necesario»: fue una decisión, así que prefiere asumirla.', en: 'Why doesn’t Paula accept «se nos acabó el hielo»?' },
            { prompt: '¿Qué hizo Natalia sin querer?', options: ['Olvidó el video en la oficina.', 'Contó lo del video sorpresa delante del gerente.', 'Borró la lista de canciones.'], answer: 1, why: '«Se me escapó lo del video sorpresa delante del gerente».', en: 'What did Natalia do by accident?' },
          ] },
        ] },
        { title: '¿Asume, suaviza o calla? · Own it, soften it or leave it out?', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'classify', title: 'Frases de la reunión · Sentences from the meeting', categories: [
            { id: 'activa', label: 'ASUME · forma activa', tone: 'orange' },
            { id: 'accidental', label: 'SUAVIZA · se accidental', tone: 'blue' },
            { id: 'sinpersona', label: 'SIN PERSONA · solo el hecho', tone: 'teal' },
          ], items: [
            { text: 'Fue culpa mía.', answer: 'activa', why: 'Felipe se pone como responsable.' },
            { text: 'Se me quedaron los cables en el almacén.', answer: 'accidental', why: 'Se + me: le pasó a Felipe, sin querer.' },
            { text: 'Se rompieron seis copas del hotel.', answer: 'sinpersona', why: 'No aparece ninguna persona.' },
            { text: 'Pedimos la mitad de lo necesario.', answer: 'activa', why: 'El equipo es el sujeto: asume la decisión.' },
            { text: 'Se me escapó lo del video.', answer: 'accidental', why: 'Se + me: lo dijo sin querer.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: «¿Cómo contaría Camilo lo de las copas si quisiera proteger menos al mozo?». Respuesta posible: «Uno de los mozos tiró una bandeja».' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: '¿Qué cosa? ¿A quién? What thing? To whom?',
      steps: [
        { title: 'Elige la forma · Choose the form', blocks: [
          { kind: 'choice', items: [
            { prompt: 'Anoche ___ las llaves dentro del carro.', options: ['me se quedaron', 'se me quedaron', 'se me quedó'], answer: 1, why: 'Las llaves: plural. Y el orden es se + me.', en: 'Last night I locked my keys in the car.' },
            { prompt: 'A los invitados ___ la hora del último autobús.', options: ['se los olvidó', 'se le olvidaron', 'se les olvidó'], answer: 2, why: 'Les: los invitados (plural). Olvidó: la hora (singular).', en: 'The guests forgot the time of the last bus.' },
            { prompt: 'Perdona, ___ enviarte el presupuesto.', options: ['se me olvidó', 'se me olvidaron', 'me olvidó'], answer: 0, why: 'Lo olvidado es un infinitivo (enviar): singular.', en: 'Sorry, I forgot to send you the quote.' },
            { context: 'Ves a una señora mayor, a la que no conoces, buscando algo en el suelo.', prompt: 'Disculpe, ¿___ algo?', options: ['se le cayó', 'se lo cayó', 'se te cayó'], answer: 0, why: 'Con usted: se le. «Se lo» sería complemento directo.', en: 'Excuse me, did you drop something?' },
            { prompt: 'Durante la cena ___ dos ideas para el próximo evento.', options: ['me ocurrieron', 'se me ocurrieron', 'se me ocurrió'], answer: 1, why: 'Dos ideas: plural. Ocurrírsele necesita «se».', en: 'During dinner I came up with two ideas for the next event.' },
            { prompt: 'Estábamos hablando y ___ las empanadas en el horno.', options: ['se nos quemaron', 'nos quemamos', 'se nos quemó'], answer: 0, why: 'Las empanadas: plural. «Nos quemamos» significaría que las personas se quemaron.', en: 'We were chatting and the empanadas burned in the oven.' },
          ] },
        ] },
        { title: '¿Lo hizo, le pasó o pasó? · Did it, happened to them, or just happened?', blocks: [
          { kind: 'classify', title: 'Clasifica cada frase · Sort each sentence', categories: [
            { id: 'activa', label: 'Lo hizo (forma activa)', tone: 'orange' },
            { id: 'accidental', label: 'Le pasó (se accidental)', tone: 'blue' },
            { id: 'sinpersona', label: 'Pasó (sin persona)', tone: 'teal' },
          ], items: [
            { text: 'Borré el archivo viejo para empezar de cero.', answer: 'activa', why: 'Una decisión: la persona es el sujeto.' },
            { text: 'Se me borró el archivo al cerrar el programa.', answer: 'accidental', why: 'Me: le pasó a alguien, sin querer.' },
            { text: 'Con el viento, se cerró la puerta de golpe.', answer: 'sinpersona', why: 'Solo el hecho: no hay persona afectada.' },
            { text: 'A Natalia se le manchó el vestido con vino.', answer: 'accidental', why: 'A Natalia + le: le pasó a ella.' },
            { text: 'Calculé mal la cantidad de hielo; fue un error mío.', answer: 'activa', why: 'Quien habla asume la decisión.' },
          ] },
        ] },
        { title: 'Encuentra el error · Find the mistake', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Se me olvidó las invitaciones en la oficina.', ok: false, options: ['Se me olvidé las invitaciones en la oficina.', 'Se me olvidaron las invitaciones en la oficina.', 'Me se olvidaron las invitaciones en la oficina.'], answer: 1, why: 'Las invitaciones: plural. El verbo concuerda con la cosa.' },
            { sentence: 'A Felipe se cayó el micrófono durante la prueba.', ok: false, options: ['Felipe se le cayó el micrófono durante la prueba.', 'A Felipe se le cayó el micrófono durante la prueba.', 'A Felipe se lo cayó el micrófono durante la prueba.'], answer: 1, why: 'Con «a Felipe» hace falta «le»: se le cayó.' },
            { sentence: 'Se me rompió mi celular el viernes.', ok: false, options: ['Se me rompió el celular el viernes.', 'Se rompió me el celular el viernes.', 'Me rompí el celular el viernes.'], answer: 0, why: 'El pronombre ya dice de quién es: el artículo basta.' },
            { sentence: 'A los mozos se les acabaron las servilletas a las diez.', ok: true, why: 'Correcta: les (los mozos) y plural (las servilletas).' },
            { sentence: 'Se nos olvidamos el regalo de la jefa.', ok: false, options: ['Se nos olvidó el regalo de la jefa.', 'Nos se olvidó el regalo de la jefa.', 'Se nos olvidaron el regalo de la jefa.'], answer: 0, why: 'El sujeto es el regalo: tercera persona singular.' },
            { sentence: 'Ayer se me escribió mal la dirección del cliente.', ok: false, options: ['Ayer escribí mal la dirección del cliente.', 'Ayer se me escribieron mal la dirección del cliente.', 'Ayer me escribió mal la dirección del cliente.'], answer: 0, why: '«Escribir» necesita a alguien que actúa: no puede «pasar solo». Forma activa.' },
          ] },
        ] },
        { title: 'Natalia llama al hotel · Natalia calls the hotel', blocks: [
          { kind: 'chat-fill', title: 'Natalia habla con Marta Villegas, del hotel', lines: [
            { who: 'Marta', text: 'Buenos días, Natalia. ¿Qué tal salió todo el viernes?' },
            { who: 'Natalia', text: 'Muy bien, gracias, pero tengo que contarle algo. A uno de nuestros mozos ___ una bandeja.', options: ['se cayó', 'se lo cayó', 'se le cayó'], answer: 2, why: '«A uno de nuestros mozos» exige «le»; una bandeja: singular.' },
            { who: 'Marta', text: '¿Y hubo daños?' },
            { who: 'Natalia', text: 'Sí, ___ seis copas del hotel. Por supuesto, las pagamos nosotros.', options: ['se le rompió', 'le rompieron', 'se le rompieron'], answer: 2, why: 'Seis copas: plural. «Le rompieron» tendría otro sujeto: unas personas («ellos») se las rompieron a él.' },
            { who: 'Marta', text: 'Se lo agradezco. Son cosas que pasan.' },
            { who: 'Natalia', text: 'Además, ___ los manteles en el salón. ¿Podemos recogerlos mañana?', options: ['se nos quedaron', 'se nos quedó', 'nos quedamos'], answer: 0, why: 'Los manteles: plural. «Nos quedamos los manteles» significaría que decidimos guardarlos.' },
            { who: 'Marta', text: 'Claro, sin problema.' },
            { who: 'Natalia', text: 'Y una disculpa: ___ llamarla para avisar de que llegábamos tarde. Lo siento mucho.', options: ['se me olvidó', 'se me olvidaron', 'me olvidó'], answer: 0, why: 'Infinitivo (llamarla): singular. Y Natalia añade una disculpa.' },
            { who: 'Marta', text: 'Tranquila. Para la próxima, ¿alguna idea?' },
            { who: 'Natalia', text: 'Sí, ___ una: usar copas irrompibles en la terraza.', options: ['me ocurrí', 'se ocurrió me', 'se me ocurrió'], answer: 2, why: 'Ocurrírsele algo a alguien: se + me + ocurrió (una idea).' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['A', 'Camilo', 'se', 'le', 'cayó', 'la', 'bandeja'], accept: ['A Camilo se le cayó la bandeja', 'Se le cayó la bandeja a Camilo', 'La bandeja se le cayó a Camilo'], en: 'Camilo dropped the tray.' },
            { tiles: ['Se', 'nos', 'acabaron', 'las', 'servilletas', 'a', 'las', 'diez'], accept: ['Se nos acabaron las servilletas a las diez', 'A las diez se nos acabaron las servilletas'], en: 'We ran out of napkins at ten.' },
            { tiles: ['Se', 'me', 'olvidó', 'llamar', 'al', 'proveedor'], accept: ['Se me olvidó llamar al proveedor'], en: 'I forgot to call the supplier.' },
          ] },
        ] },
        { title: 'Cambia la perspectiva · Change the perspective', blocks: [
          { kind: 'rewrite', title: 'Del «lo hice» al «me pasó», y al revés', items: [
            { prompt: 'Rompí la jarra sin querer.', instruction: 'Cuéntalo como algo que te pasó. Empieza con «Se me…».', accept: ['Se me rompió la jarra', 'Se me rompió la jarra sin querer'] },
            { prompt: 'Felipe olvidó los cables.', instruction: 'Cuéntalo con el se accidental. Empieza con «A Felipe…».', accept: ['A Felipe se le olvidaron los cables'] },
            { prompt: 'Perdimos las entradas del concierto.', instruction: 'Cuéntalo como un percance del grupo, sin querer. Empieza con «Se nos…».', accept: ['Se nos perdieron las entradas del concierto', 'Se nos perdieron las entradas'] },
            { prompt: 'Se me borró la presentación. (En realidad, la borraste tú por error y quieres asumirlo.)', instruction: 'Usa la forma activa. Empieza con «Borré…».', accept: ['Borré la presentación', 'Borré la presentación por error', 'Borré la presentación sin querer'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno cuenta un percance real dos veces: una para suavizarlo ante un amigo y otra para asumirlo ante un jefe o un cliente.' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Un mensaje para el cliente', coach: 'Primero escucha sin leer. Listen first, read later.',
      steps: [
        { title: 'Paula llama a don Ramiro · Paula calls don Ramiro', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: la idea general. Segunda escucha: tu alumno anota cada «se le / se nos…» y cada frase en la que Paula asume la culpa. Después, las preguntas.', self: 'Escucha una vez para la idea general y otra para los detalles. Anota cada «se le / se nos…» y las frases en las que Paula asume la culpa.' } },
          { kind: 'listen', title: 'Un mensaje de voz de Paula', channel: 'MENSAJE DE VOZ · LUNES · DE PAULA ORTEGA PARA DON RAMIRO SALCEDO', src: '/audio/grammar-live/450.mp3',
            before: 'Paula llama a don Ramiro, el cliente, y le deja un mensaje. ¿Crees que esconderá los problemas o los contará? ¿Cuáles? (Will she hide the problems or tell him? Which ones?)',
            gist: { prompt: '¿Para qué llama Paula?', options: ['Para quejarse de los empleados del hotel.', 'Para pedir más dinero por la cena.', 'Para contar con transparencia los problemas de la noche y ofrecer una compensación.'], answer: 2, why: '«Quiero ser transparente con usted» y al final ofrece un descuento.', en: 'Why is Paula calling?' },
            details: [
              { prompt: '¿Por qué empezó tarde el discurso del gerente?', options: ['Porque el gerente llegó tarde.', 'Porque se cortó la luz.', 'Porque el técnico dejó unos cables en el almacén.'], answer: 2, why: '«A nuestro técnico se le quedaron unos cables en el almacén».', en: 'Why did the manager’s speech start late?' },
              { prompt: '¿Qué pasa con las copas rotas?', options: ['No se las van a cobrar al cliente.', 'El cliente las tiene que pagar.', 'El mozo se hizo daño.'], answer: 0, why: '«Nadie se hizo daño, y esas copas no se las vamos a cobrar».', en: 'What happens about the broken glasses?' },
              { prompt: '¿Cómo presenta Paula el problema del hielo?', options: ['Como culpa del hotel.', 'Como mala suerte.', 'Como un error de cálculo del que ella se hace responsable.'], answer: 2, why: '«Ahí no hubo mala suerte: calculamos mal la cantidad, y eso es responsabilidad mía».', en: 'How does Paula present the ice problem?' },
              { prompt: '¿Qué idea tuvo Natalia?', options: ['Cambiar el menú a última hora.', 'Poner copas irrompibles.', 'Grabar mensajes de los invitados para un video.'], answer: 2, why: '«A Natalia se le ocurrió grabar mensajes de los invitados».', en: 'What idea did Natalia have?' },
            ],
            transcript: 'Buenos días, don Ramiro, soy Paula Ortega, de Eventos Ceiba. Le llamo por lo del viernes. Primero, gracias: sus invitados se fueron muy contentos. Pero quiero ser transparente con usted, porque hubo tres problemas y prefiero que los sepa por mí. Al empezar la noche, a nuestro técnico [[se le quedaron|blue]] unos cables en el almacén, y por eso el discurso de su gerente empezó con veinte minutos de retraso. Después, a uno de los mozos [[se le cayó|blue]] una bandeja y [[se le rompieron|blue]] varias copas. Nadie se hizo daño, y esas copas, por supuesto, no se las vamos a cobrar. Y lo más serio: hacia las once [[se nos acabó|blue]] el hielo. Ahí no hubo mala suerte: [[calculamos mal|orange]] la cantidad, y [[eso es responsabilidad mía|orange]]. Por eso le vamos a descontar el diez por ciento de la factura. Ah, y una buena noticia: a Natalia [[se le ocurrió|blue]] grabar mensajes de los invitados, y esta semana le mandamos el video. Si quiere comentar algo, llámeme cuando quiera. Que tenga un buen día.',
            reply: { teacher: 'Tú eres Paula. Tu alumno es don Ramiro y responde con un mensaje de voz: agradece la transparencia, comenta uno de los problemas y cuenta algo que se le olvidó decir a él.', self: 'Responde a Paula como si fueras don Ramiro: agradece la transparencia, comenta uno de los problemas y cuenta algo que se te olvidó decirle a ella.' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Percances y disculpas', coach: 'Cuenta lo que te pasó y decide cuánto lo suavizas. Tell it and choose how much to soften it.',
      steps: [
        { title: 'Me pasó a mí · It happened to me', blocks: [
          { kind: 'guide', text: { teacher: 'No hace falta usar todas las tarjetas. Tu alumno cuenta y tú a veces preguntas «¿Fue sin querer?» para que decida entre el se accidental y la forma activa.', self: 'Responde cada tarjeta en voz alta. Después pregúntate: ¿fue de verdad un accidente o lo podría contar en activa?' } },
          { kind: 'talk', cards: [
            { q: '¿Qué se te olvida o se te pierde siempre? ¿Tienes algún truco para evitarlo? · What do you always forget or lose?', followUps: ['¿Qué pasó la última vez?', '¿Quién te ayudó?', '¿Funciona tu truco?'], phrases: ['Siempre [[se me olvidan|blue]]…', 'La semana pasada [[se me perdió|blue]]…', '[[Se me quedó|blue]] en…'], hint: 'Presente para lo habitual (se me olvidan), pasado para la anécdota (se me perdió). Mira la cosa: ¿una o varias?', example: 'Siempre se me olvidan las gafas de sol. La semana pasada se me quedaron en un restaurante y tuve que volver al día siguiente. Ahora tengo unas baratas en el carro, por si acaso.', next: 'Ahora, un percance de verdad.' },
            { q: 'Cuenta un día en que todo salió mal: algo se te rompió, se te cayó o se te acabó. · A day when everything went wrong.', followUps: ['¿Dónde estabas?', '¿Cómo lo resolviste?', '¿Fue sin querer de verdad?'], phrases: ['Primero [[se me cayó|blue]]…', 'Luego [[se me rompieron|blue]]…', 'Para colmo, [[se nos acabó|blue]]…'], hint: 'Encadena tres percances con «primero, luego, para colmo». Cuida la concordancia con la cosa.', example: 'El día de mi mudanza, primero se me cayó una caja de platos y se me rompieron casi todos. Luego se me perdieron las llaves de la casa nueva. Y para colmo, a mediodía se nos acabó el agua y todas las tiendas estaban cerradas.', next: 'Ahora, en el trabajo.' },
            { q: 'No has enviado un informe a tiempo. Discúlpate con tu jefa sin sonar evasivo. · Apologize to your boss without sounding evasive.', followUps: ['¿Qué solución propones?', '¿Asumes algo en forma activa?', '¿Qué no dirías nunca?'], phrases: ['Lo siento, [[se me pasó|blue]] la fecha…', '[[Fue un error mío|orange]]…', 'Te lo mando…'], hint: 'Reconoce, discúlpate y propón una solución. Una sola frase con «se me» basta; lo demás, en activa.', example: 'Perdona, Lorena, se me pasó la fecha del informe. Fue un error mío: no lo apunté en la agenda. Te lo mando hoy antes de las cuatro y, a partir de ahora, pongo un recordatorio.', next: 'Ahora tú eres Camilo.', teacher: 'Haz de jefa exigente y pregunta «¿Y cómo se te pasó?». Tu alumno responde sin esconderse detrás de más «se me».' },
            { q: 'Eres Camilo. Explícale a Marta Villegas, del hotel, lo de las copas y los manteles (de usted). · You are Camilo: explain to the hotel manager.', followUps: ['¿Qué ofreces?', '¿Cómo proteges al mozo sin mentir?', '¿Qué le pides?'], phrases: ['[[A uno de nuestros mozos|violet]] [[se le cayó|blue]]…', '[[Se nos quedaron|blue]]…', 'Por supuesto, nosotros…'], hint: 'Usted: se le. Ofrece pagar o reponer lo roto.', example: 'Señora Villegas, a uno de nuestros mozos se le cayó una bandeja y se le rompieron seis copas del hotel. Por supuesto, nosotros las pagamos. Además, se nos quedaron los manteles en el salón; ¿podríamos recogerlos mañana por la mañana?', next: 'Ahora, las buenas ideas.' },
            { q: '¿Cuál es la mejor idea que se te ha ocurrido para resolver un problema? · The best idea you ever had to solve a problem.', followUps: ['¿Cuándo se te ocurrió?', '¿Qué dijeron los demás?', '¿Se les ocurrió algo mejor a ellos?'], phrases: ['De repente [[se me ocurrió|blue]]…', '[[A mi hermana|violet]] [[se le ocurrieron|blue]]…', 'Nunca [[se me habría ocurrido|blue]]…'], hint: 'Ocurrírsele: concuerda con la idea (se me ocurrió una idea, se me ocurrieron dos).', example: 'En un viaje se nos cerró la puerta del apartamento con las llaves dentro. De repente se me ocurrió llamar al restaurante de abajo, que tenía una copia. A mi hermana se le ocurrieron cosas más locas, como entrar por la ventana.' },
            { q: '¿Cuándo te molesta que alguien diga «se me olvidó» o «se rompió»? ¿Cuándo te parece normal? · When does it sound like an excuse?', followUps: ['¿Te ha pasado con un compañero?', '¿Qué preferirías oír?', '¿Usas tú esa estrategia?'], phrases: ['Me parece normal si…', 'Suena a excusa cuando…', 'Prefiero que me digan «[[fue culpa mía|orange]]»…'], hint: 'Piensa en accidentes reales frente a decisiones o descuidos repetidos.', example: 'Me parece normal si es un accidente de verdad, como un vaso que se cae. Pero me molesta cuando un compañero dice «se me olvidó» por tercera vez en una semana. Prefiero que me diga «no lo hice, lo hago ahora».', teacher: 'Es la tarjeta más importante de la clase: tu alumno reflexiona sobre la pragmática, no solo sobre la forma.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tú cuentas un percance con demasiados «se me…» y tu alumno, como jefe o cliente, pregunta y te pide que lo asumas en activa donde corresponda.', self: 'Esta semana, cuando se te olvide o se te rompa algo, cuéntalo en voz alta de las dos maneras: «se me…» y en activa. ¿Cuál es más honesta en ese caso?' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Un correo de disculpa', coach: 'Suaviza lo accidental y asume lo que decidiste. Soften accidents, own decisions.',
      steps: [
        { title: 'Correo al hotel · An email to the hotel', blocks: [
          { kind: 'guide', text: { teacher: 'Puede escribir en clase o como tarea. Revisan juntos cada «se me / se le / se nos»: ¿concuerda con la cosa? ¿Fue de verdad un accidente?', self: 'Escribe tu correo y toca «Revisar mi texto». Después revisa cada «se me / se le / se nos»: ¿concuerda con la cosa? ¿Fue un accidente o lo deberías asumir?' } },
          { kind: 'write', title: 'Disculpas después del evento', situation: 'Eres Paula Ortega. Escribe a Marta Villegas, gerente de eventos del hotel, para disculparte por los percances del viernes y proponer una solución. Trátala de usted. (O escribe sobre un evento tuyo en el que algo salió mal.) · Write to the hotel’s events manager to apologize for Friday’s mishaps and propose a solution.', task: [
            'Cuenta al menos tres percances con el se accidental (se me / se le / se nos…), con una cosa en plural.',
            'Usa una vez «a + persona» con su pronombre (a uno de los mozos se le…).',
            'Asume al menos un error en forma activa (calculamos, olvidé, fue culpa nuestra).',
            'Pide disculpas y propón una solución concreta.',
          ], starters: ['Estimada señora Villegas:', 'Le escribo para disculparme por…', 'Durante la cena, a uno de nuestros mozos…', 'Además, se nos…', 'En cambio, lo del… fue culpa nuestra:', 'Para compensarlo, le proponemos…', 'Atentamente,'],
            words: ['se le cayó', 'se le rompieron', 'se nos quedaron', 'se me olvidó', 'se nos acabó', 'fue culpa nuestra', 'calculamos mal', 'por supuesto', 'reponer', 'le proponemos'],
            model: 'Estimada señora Villegas: Le escribo para disculparme por los percances del viernes. Durante la cena, [[a uno de nuestros mozos|violet]] [[se le cayó|blue]] una bandeja y [[se le rompieron|blue]] seis copas del hotel. Por supuesto, las vamos a reponer esta misma semana. Además, al recoger [[se nos quedaron|blue]] los manteles en el salón; si le parece bien, pasamos por ellos mañana a las diez. También quiero pedirle perdón personalmente: [[se me olvidó|blue]] avisarla de que el montaje empezaría una hora tarde. En cambio, lo del hielo no fue un accidente: [[calculamos mal|orange]] la cantidad y [[fue culpa nuestra|orange]] que sus empleados tuvieran que salir a comprar más. Para compensarlo, le proponemos pagar sus horas extra. Gracias por su paciencia y por la ayuda de todo su equipo. Atentamente, Paula Ortega',
            minWords: 120,
            checks: [
              { label: 'Se accidental: se me / se le / se nos + verbo (accidental se)', pattern: '(?<!\\p{L})se\\s+(?:me|te|le|nos|os|les)\\s+(?:olvid|cay|rompi|perdi|quem|acab|qued|escap|ocurri|borr|manch|pas|malogr|dañ|estrope|descompus)\\p{L}*', tip: 'Cuenta los percances como algo que les pasó: «se le cayó una bandeja», «se nos quedaron los manteles».' },
              { label: 'Una cosa en plural con verbo en plural (plural agreement)', pattern: '(?<!\\p{L})se\\s+(?:me|te|le|nos|os|les)\\s+\\p{L}+(?:aron|ieron|eron)(?!\\p{L})', tip: 'Si son varias cosas, el verbo va en plural: «se le rompieron seis copas».' },
              { label: 'A + persona con su pronombre (a + person)', pattern: '(?<!\\p{L})a\\s+(?:[\\p{L}]+\\s+){1,4}se\\s+(?:le|les)(?!\\p{L})', tip: 'Di a quién le pasó: «a uno de nuestros mozos se le cayó…».' },
              { label: 'Una disculpa (an apology)', pattern: '(?<!\\p{L})(?:disculp\\p{L}*|perd[oó]n|lo\\s+siento|lamento|lamentamos)(?!\\p{L})', tip: 'Pide disculpas con claridad: «Le escribo para disculparme…», «quiero pedirle perdón».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})(?:me|te)\\s+se\\s+(?:olvid|cay|romp|perd|quem|acab|qued|escap|ocurr)', why: 'El orden es «se me / se te», nunca «me se / te se».' },
              { pattern: '(?<!\\p{L})se\\s+(?:me|te|le|nos|os|les)\\s+(?:olvidé|olvidamos|caí|caímos|perdí|perdimos|rompí|rompimos)(?!\\p{L})', why: 'Con el se accidental, el verbo concuerda con la cosa, no con la persona: «se me olvidó», no «se me olvidé».' },
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
            { tone: 'blue', label: 'SE ACCIDENTAL', formula: 'se + me · te · le · nos · os · les + verbo que concuerda con la cosa', example: 'Se me rompió el vaso. · Se me rompieron las gafas. · Se me olvidó llamar.', caption: 'Una cosa o un infinitivo: singular. Varias cosas: plural.', en: 'The thing is the subject: one thing or an infinitive takes a singular verb, several things a plural one.' },
            { tone: 'violet', label: 'A QUIÉN LE PASA', formula: 'a + persona + se + le / les', example: 'A Felipe se le olvidaron los cables. · Se me perdió la billetera (no «mi»).', caption: 'El «le» no desaparece; el pronombre ya indica de quién es la cosa.', en: 'Le stays even with a + person, and the pronoun already shows whose thing it is.' },
            { tone: 'orange', label: 'ASUMIR', formula: 'forma activa: rompí, pedimos poco, fue culpa mía', example: 'Calculamos mal el hielo: fue culpa nuestra.', caption: 'Para decisiones y descuidos claros, asume en activa.', en: 'For decisions and clear carelessness, own it with an active verb.' },
            { tone: 'teal', label: 'SIN PERSONA', formula: 'se + verbo + cosa', example: 'Se rompió la impresora del almacén.', caption: 'Solo el hecho: útil para informar, evasivo si fuiste tú.', en: 'Just the event: fine for reporting, evasive if you did it.' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Primero, la forma: el verbo mira a **la cosa** (se me rompió el vaso, se me rompieron las gafas). Después, la intención: el se accidental **suaviza**, pero no borra la responsabilidad. Úsalo para los accidentes de verdad, acompáñalo de una disculpa y una solución, y asume en **activa** lo que fue una decisión tuya.', en: 'First the form: the verb agrees with the thing. Then the intention: the accidental se softens blame but does not erase it. Use it for genuine accidents, add an apology and a fix, and own your decisions with an active verb.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'Lo siento, ___ las fotocopias en la impresora.', options: ['se me quedaron', 'se me quedó', 'me quedé'], answer: 0, why: 'Las fotocopias: plural. «Me quedé las fotocopias» significaría que decidiste guardarlas.', en: 'Sorry, I left the photocopies in the printer.' },
            { prompt: 'A mis vecinos ___ el gato y lo buscamos toda la tarde.', options: ['se les escapó', 'se los escapó', 'se le escaparon'], answer: 0, why: 'Les: mis vecinos. Escapó: el gato (singular).', en: 'My neighbours’ cat got out and we looked for it all afternoon.' },
            { context: 'Tu jefe: «¿Por qué no tengo el informe?».', prompt: '¿Qué respuesta suena profesional?', options: ['Se me pasó la fecha, lo siento. Te lo mando antes de las doce.', 'Se envió mal, no sé qué pasó.', 'Se me envió mal.'], answer: 0, why: 'Se accidental + disculpa + solución. «Se me envió» no es posible: enviar necesita a alguien que actúa.', en: 'Which answer sounds professional?' },
            { prompt: '—¿Qué tal la mudanza? —Bien, aunque ___ dos cajas de libros.', options: ['nos perdieron', 'se nos perdieron', 'se nos perdió'], answer: 1, why: 'Dos cajas: plural. Nos: a nosotros.', en: 'How was the move? Fine, although we lost two boxes of books.' },
            { context: 'Tiraste sin querer el jarrón de tu amiga mientras jugabas con su perro.', prompt: '¿Qué versión asume más la responsabilidad?', options: ['Rompí tu jarrón; fue culpa mía y te compro otro.', 'Se me rompió tu jarrón.', 'Se rompió el jarrón.'], answer: 0, why: 'La forma activa + «fue culpa mía» + solución. «Se me rompió» suaviza y «se rompió» borra a la persona.', en: 'Which version takes the most responsibility?' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Ahora, un apartamento de alquiler. Now, a holiday rental.', blocks: [
          { kind: 'lead', text: 'Pasaste un fin de semana en un apartamento de alquiler en Cusco. Antes de irte, le dejas una nota a la dueña, la señora Quispe, con lo que pasó.', en: 'You spent a weekend in a holiday flat in Cusco. Before leaving, you write a note to the owner about what happened: use the accidental se for real accidents.' },
          { kind: 'rewrite', title: 'La nota para la señora Quispe · The note for Mrs Quispe', items: [
            { prompt: 'Tu amigo rompió dos tazas sin querer.', instruction: 'Empieza con «A mi amigo…».', accept: ['A mi amigo se le rompieron dos tazas', 'A mi amigo se le rompieron dos tazas sin querer'] },
            { prompt: 'Olvidaste cerrar la ventana del baño anoche.', instruction: 'Discúlpate con el se accidental. Empieza con «Perdone, anoche se me…».', accept: ['Perdone anoche se me olvidó cerrar la ventana del baño', 'Perdone anoche se me pasó cerrar la ventana del baño'] },
            { prompt: 'Tu grupo gastó todo el gas de la cocina.', instruction: 'Habla por el grupo. Empieza con «Se nos…».', accept: ['Se nos acabó el gas de la cocina', 'Se nos acabó el gas'] },
          ] },
        ] },
        { title: 'Ampliación · Expresiones fijas y registro formal · Extension: set phrases and formal register', mascot: '/brand/mascot/portrait.webp', coach: 'Opcional: más allá del percance. Optional: beyond mishaps.', blocks: [
          { kind: 'lead', text: 'La misma estructura aparece en expresiones muy frecuentes: **se me hizo tarde** (no me di cuenta de la hora), **se me pasó** (no me acordé), **se me fue la mano** (puse demasiado: sal, azúcar, castigo…), **se me fue el santo al cielo** (olvidé por completo lo que iba a hacer, coloquial). En un escrito formal, en cambio, se prefiere una construcción nominal: **por un descuido nuestro**, **por un error de nuestro equipo**.', en: 'The same pattern appears in very common set phrases: se me hizo tarde (I lost track of time), se me pasó (it slipped my mind), se me fue la mano (I overdid it), and the colloquial se me fue el santo al cielo (I completely forgot what I was doing). In formal writing, a noun phrase such as por un descuido nuestro often sounds more professional.' },
          { kind: 'choice', title: 'Elige la expresión · Choose the expression', items: [
            { prompt: 'La sopa está saladísima: ___ con la sal.', options: ['se me ocurrió', 'se me fue la mano', 'se me hizo tarde'], answer: 1, why: 'Irse la mano: poner demasiado de algo.', en: 'The soup is far too salty: I overdid the salt.' },
            { prompt: 'Perdona el retraso, estaba leyendo y ___.', options: ['se me cayó', 'se me fue la mano', 'se me hizo tarde'], answer: 2, why: 'Hacerse tarde: perder la noción del tiempo.', en: 'Sorry I’m late, I was reading and lost track of time.' },
            { prompt: 'Correo formal a un cliente: «___, no le enviamos la factura a tiempo».', options: ['Por un descuido nuestro', 'Se nos hizo tarde', 'Se nos fue el santo al cielo'], answer: 0, why: 'En un escrito formal, la construcción nominal asume el error sin sonar coloquial.', en: 'Formal email: through an oversight on our part, we didn’t send you the invoice on time.' },
          ] },
          { kind: 'teacher', text: 'Paso opcional, para alumnos que van rápido o si sobra tiempo. «Se me fue el santo al cielo» es coloquial; en un correo formal, mejor «por un descuido nuestro».' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 151 · Verbos que rigen preposición: confiar en, depender de', text: 'Ya cuentas percances con «se me olvidó» y sabes cuándo asumirlos con «olvidé» o «me olvidé de». Ese «de» no es casual: muchos verbos piden una preposición fija (olvidarse **de**, confiar **en**, depender **de**). En la clase 151 trabajas esos verbos, el paso natural para que tus disculpas y explicaciones suenen precisas.', en: 'You can now tell mishaps with se me olvidó and know when to own them with olvidé or me olvidé de. That de is no accident: many verbs require a fixed preposition (olvidarse de, confiar en, depender de). Class 151 works on those verbs, the natural next step for precise apologies and explanations.', href: '/verbos-que-piden-una-estructura', label: 'Ir a la clase 151' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Es lo mismo "rompí el vaso" que "se me rompió el vaso"?». Respuesta esperada: no; la primera asume la acción y la segunda la presenta como involuntaria. Tarea: escribir el correo de Escribir sobre un percance real.' },
        ] },
      ],
    },
  ],
};
