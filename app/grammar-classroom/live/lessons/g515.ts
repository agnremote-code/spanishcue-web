import type { LiveLesson } from '../types';

/**
 * Lesson 515 · C2 · Voseo, tuteo y ustedeo: cambios pragmáticos de registro (course unit G215).
 * Builds on G021 (lesson 3: tú / vos / usted / ustedes / vosotros), G058 (lesson 358: vos
 * imperative), G164 (lesson 464: politeness scale, ustedes as the only plural in America,
 * Costa Rican and Colombian usted) and G195 (lesson 495: vos agreement for recognition).
 * This class teaches voseo ON PURPOSE as a legitimate variety (NGLE §16, DPD «voseo»):
 * Rioplatense forms (vos tenés, sos, venís, podés; tené, vení, decí, andá; dijiste, not
 * *dijistes; te / tu / con vos, not vuestro); negative imperative «no te preocupes» (very
 * common) and «no te preocupés» (attested); where voseo is general (Argentina, Uruguay,
 * Paraguay, much of Central America) or coexists with tuteo (parts of Colombia, Venezuela,
 * Ecuador, Bolivia, Chile; Chilean colloquial verbal voseo «tú sabís»); tuteo and its spread;
 * usted of distance vs usted of solidarity / affection (areas of Colombia, Costa Rica);
 * ustedes as the only plural in America and Canarias vs vosotros in most of Spain; pragmatic
 * switches inside one conversation (usted → tú / vos = closeness; back to usted = anger,
 * reproach, irony or distance before others); «¿Nos tuteamos?», «¿Nos tratamos de vos?»,
 * declining politely; region-neutral choices (tú + ustedes) for an international audience.
 * Ampliación: «tú tenés» in Uruguay, «sumercé» in parts of Colombia, «vos» as an address
 * that can sound disrespectful outside voseo areas. Audit row «Norma y variación (voseo)».
 * Scene: Estudio Trama, a fictional dubbing and subtitling studio. Marta Ibáñez (Madrid,
 * head of adaptation), Valeria Sosa (Rosario, Argentina, Rioplatense version) and Camilo
 * Restrepo (Bogotá, neutral Latin American version) adapt the series «La casa del río»,
 * where the lawyer Elena Duarte and her client Ramón Ortiz change address as their
 * relationship changes. Escuchar: Valeria's audio note to Marta (es-AR-ElenaNeural, vos).
 * Escribir: Marta's style note on address for the three versions. Instructions use tú.
 */
export const lesson: LiveLesson = {
  id: 515,
  level: 'C2',
  title: 'Voseo, tuteo y ustedeo: cambios pragmáticos de registro',
  subtitle: 'Reconocer y usar tú, vos y usted según la región y la relación, e interpretar qué significa cambiar de trato a mitad de una conversación.',
  legend: [
    { tone: 'blue', label: 'TUTEO · tú y su plural de España, vosotros (tú sabes · ¿habéis visto?)' },
    { tone: 'teal', label: 'VOSEO · vos sabés, tenés, vení, decime' },
    { tone: 'orange', label: 'USTED / USTEDES · distancia, respeto o confianza (ustedeo)' },
    { tone: 'violet', label: 'CAMBIO DE TRATO · ¿nos tuteamos?, vuelta al usted' },
  ],
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Tres formas de decir «tú»', coach: 'Misma frase, otra relación. Same sentence, a different relationship.',
      steps: [
        { title: 'En el estudio de doblaje · At the dubbing studio', blocks: [
          { kind: 'lead', text: '**Estudio Trama** adapta la serie «La casa del río» para tres públicos: España, Latinoamérica en versión neutra y el Río de la Plata. Marta Ibáñez (Madrid) dirige la adaptación; Valeria Sosa (Rosario) firma la versión rioplatense y Camilo Restrepo (Bogotá), la neutra. El problema de esta semana no es el vocabulario, sino el **trato**: Elena, una abogada, y Ramón, su cliente, empiezan de usted, pasan a la confianza y, en el capítulo cinco, ella vuelve al usted. Cada cambio cuenta algo.', en: 'Estudio Trama is adapting a series for three audiences: Spain, a neutral Latin American version and the River Plate region. This week’s problem is not vocabulary but forms of address: a lawyer and her client start with usted, move to a familiar form and, in episode five, she goes back to usted. Every switch tells the audience something.' },
          { kind: 'guide', text: { teacher: 'Tú lees las tres frases y tu alumno dice qué relación y qué región sugiere cada una. Después responde a las preguntas.', self: 'Lee las tres frases en voz alta. ¿Qué cambia: el significado, la relación o la región? (What changes: meaning, relationship or region?)' } },
          { kind: 'compare', title: 'Elena le dice a Ramón… · Elena tells Ramón…', columns: [
            { tone: 'blue', label: 'TÚ · versión de España y neutra', sentence: '[[Tú sabes|blue]] que puedes contar conmigo.', idea: 'Confianza. En España es el trato más extendido; en la versión neutra, el tú de confianza para toda América.', en: 'Familiar address. In Spain it is the most widespread form; in neutral Latin American Spanish it is the standard familiar form.' },
            { tone: 'teal', label: 'VOS · versión rioplatense', sentence: '[[Vos sabés|teal]] que podés contar conmigo.', idea: 'La misma confianza con las formas del voseo, que en Argentina y Uruguay son las de la lengua culta.', en: 'The same closeness, expressed with voseo, which in Argentina and Uruguay is the educated standard, not slang.' },
            { tone: 'orange', label: 'USTED · al principio de la serie', sentence: '[[Usted sabe|orange]] que puede contar conmigo.', idea: 'Respeto o distancia profesional; en algunas zonas, también cariño.', en: 'Respect or professional distance; in some regions, affection as well.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿En qué se diferencian las tres frases?', options: ['En el trato y en la variedad: dicen lo mismo con otra relación o en otra región.', 'En el significado: cada una promete algo distinto.', 'En el tiempo verbal.'], answer: 0, why: 'El contenido es el mismo; cambian la persona gramatical, la relación y, en el caso de vos, la región.', en: 'How do the three sentences differ?' },
            { prompt: 'Valeria escribe a Marta: «Vos sabés que te ayudo con el guion». ¿Cómo lo interpreta Marta?', options: ['Como una forma muy formal.', 'Como el trato normal de confianza de una hablante de Rosario.', 'Como un error de conjugación.'], answer: 1, why: 'En Argentina el voseo es el trato de confianza general, también entre colegas.', en: 'How should Marta read Valeria’s message?' },
          ] },
        ] },
        { title: 'El voseo: formas · Voseo: the forms', mascot: '/brand/mascot/studying.webp', coach: 'Acento al final, sin diptongo. Stress at the end, no diphthong.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'VOSEO RIOPLATENSE', question: '¿Cómo se conjuga el verbo con «vos» en Argentina, Uruguay o Paraguay?', en: 'In the River Plate area, vos has its own forms in the present indicative and the affirmative imperative: stress on the last syllable and no stem change (tenés, podés, querés, venís; ser → sos). The imperative is the infinitive without -r, stressed at the end (tené, vení, decí, hacé); ir has no vos imperative of its own, so andá is used. Other tenses are the same as with tú: dijiste, tendrás. Pronouns and possessives are te and tu: “Te lo dije a vos”, “tu pasaporte”, “con vos” instead of contigo.', formula: ['presente: hablás · tenés · podés · venís · decís · sos', 'imperativo: hablá · tené · vení · decí · hacé · andá (ir)', 'pretérito y futuro como tú: dijiste · tendrás', 'pronombres: te, tu / tuyo; a vos, para vos, con vos'],
            meaning: 'Con **vos**, el presente de indicativo y el imperativo afirmativo tienen formas propias: acento en la última sílaba y **sin diptongo** (tenés, podés, querés, venís; ser → **sos**). El imperativo es el infinitivo sin -r, con acento final (tené, vení, decí, hacé); para «ir» se usa **andá**. En los demás tiempos las formas coinciden con las de tú: «dijiste», «tendrás». Los pronombres y posesivos son los de tú (**te**, **tu**, tuyo), pero con preposición se dice «a vos», «para vos», «**con vos**» (no «contigo»).',
            examples: [
              { es: '[[Vos tenés|teal]] razón: el capítulo tres es el más difícil.', en: 'You’re right: episode three is the hardest (tenés, not tienes).' },
              { es: 'Si [[querés|teal]], [[andá|teal]] vos primero y yo te alcanzo.', en: 'If you like, go ahead and I’ll catch up with you (andá is the vos imperative of ir).' },
              { es: '[[Decime|teal]] la verdad: ¿[[vos|teal]] escribiste esa escena?', en: 'Tell me the truth: did you write that scene? (decí + me; the past is the same as with tú)' },
              { es: 'Esto es para [[vos|teal]]; lo hice pensando en [[tu|teal]] versión.', en: 'This is for you; I did it with your version in mind (para vos, but the possessive is tu).' },
            ] },
          { kind: 'table', title: 'Tú, vos y usted en paralelo · Side by side', head: ['Verbo', 'tú', 'vos (rioplatense)', 'usted'], rows: [
            ['tener (presente)', 'tienes', '**tenés**', 'tiene'],
            ['poder (presente)', 'puedes', '**podés**', 'puede'],
            ['ser (presente)', 'eres', '**sos**', 'es'],
            ['venir (imperativo)', 'ven', '**vení**', 'venga'],
            ['ir (imperativo)', 've', '**andá**', 'vaya'],
            ['decir (pretérito)', 'dijiste', 'dijiste', 'dijo'],
            ['preocuparse (imperativo negativo)', 'no te preocupes', 'no te preocupes · no te preocupés', 'no se preocupe'],
          ], note: 'En el imperativo negativo y en el subjuntivo, el área rioplatense usa mucho las formas de tú: «no te preocupes», «quiero que vengas». Las formas con acento final («no te preocupés», «que vengás») también se oyen, sobre todo al hablar. Las dos conviven; si dudas, las formas de tú son las más extendidas.' },
          { kind: 'tip', icon: '🌎', title: '¿Dónde se vosea? · Where is vos used?', text: 'El voseo es **general** en Argentina, Uruguay y Paraguay y en gran parte de Centroamérica. **Convive** con el tuteo, según zonas, edades y situaciones, en partes de Colombia, Venezuela, Ecuador, Bolivia y Chile. Las formas no son idénticas en todas partes: en Chile, por ejemplo, en el habla coloquial es frecuente el voseo **solo verbal** con el pronombre tú («tú sabís», «¿cómo estái?»). Cuando no sepas cómo se usa en un lugar concreto, di que varía: es más exacto que generalizar.', en: 'Voseo is general in Argentina, Uruguay, Paraguay and much of Central America, and it coexists with tú, depending on area, age and situation, in parts of Colombia, Venezuela, Ecuador, Bolivia and Chile. The forms differ: in colloquial Chilean Spanish, for instance, vos-type verb endings are often used with the pronoun tú (“tú sabís”). If you don’t know how a place uses it, say that usage varies.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'En la versión rioplatense, Ramón le dice a Elena: «___ a mi oficina mañana a las nueve».', options: ['Vení', 'Viení', 'Vienes'], answer: 0, why: 'Imperativo de vos: infinitivo sin -r, con acento final y sin diptongo: vení.', en: 'Come to my office tomorrow at nine.' },
            { prompt: '¿Qué frase es correcta en el voseo rioplatense?', options: ['Vos dijistes que llegabas temprano.', 'Vos dijiste que llegabas temprano.', 'Vos decistes que llegabas temprano.'], answer: 1, why: 'El pretérito de vos coincide con el de tú: dijiste. La forma con -s final se evita en la lengua cuidada.', en: 'Which sentence is correct in River Plate voseo? (You said you’d arrive early.)' },
          ] },
        ] },
        { title: 'Usted y ustedes: distancia y confianza · Usted and ustedes', mascot: '/brand/mascot/standing.webp', coach: 'Usted no siempre es distancia. Usted is not always distance.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'DOS USOS DE «USTED»', question: '¿Usted marca distancia y respeto, o confianza y cariño?', en: 'Usted normally marks respect or social distance: with strangers, older people, clients or authorities. In some areas, notably parts of Colombia and Costa Rica, it is also used between close people (parents and children, partners, friends): linguists call this the usted of solidarity, or ustedeo. There, usted does not sound cold. For the plural, ustedes is the only form in Latin America and the Canary Islands (and in parts of Andalusia); most of Spain uses vosotros for familiar plural address and ustedes for formal address.', formula: ['usted de distancia: Señora, ¿usted desea algo más?', 'usted de confianza (ustedeo): Mijo, ¿usted ya almorzó?', 'plural en América y Canarias: ustedes (para todos)', 'plural en la mayor parte de España: vosotros (confianza) · ustedes (respeto)'],
            meaning: '**Usted** suele marcar respeto o distancia social: con desconocidos, personas mayores, clientes o autoridades. Pero en algunas zonas, como partes de **Colombia** y **Costa Rica**, también se usa entre personas muy cercanas (padres e hijos, parejas, amigos): es el **usted de confianza** o **ustedeo**, y ahí no suena frío. En plural, **ustedes** es la única forma en América y Canarias (también en parte de Andalucía); en la mayor parte de España, **vosotros** es el plural de confianza y **ustedes**, el de respeto.',
            examples: [
              { es: 'Señor Ortiz, [[¿usted firmó|orange]] ya el poder notarial?', en: 'Mr Ortiz, have you signed the power of attorney yet? (professional distance)' },
              { es: 'Mamá, [[¿usted me guardó|orange]] la carta que llegó ayer?', en: 'Mum, did you keep the letter that came yesterday for me? (affectionate usted, frequent in parts of Colombia)' },
              { es: 'Chicos, [[¿habéis terminado|blue]] los subtítulos?', en: 'Guys, have you finished the subtitles? (familiar plural in Spain)' },
              { es: 'Chicos, [[¿ya terminaron|orange]] los subtítulos?', en: 'The same question in Latin America: ustedes for everyone.' },
            ] },
          { kind: 'table', title: 'El trato, de un vistazo · Address at a glance', head: ['Zona', 'Confianza (singular)', 'Respeto (singular)', 'Plural'], rows: [
            ['mayor parte de España', '[[tú|blue]]', '[[usted|orange]]', '[[vosotros|blue]] / [[ustedes|orange]]'],
            ['Canarias', '[[tú|blue]]', '[[usted|orange]]', '[[ustedes|orange]]'],
            ['México, Caribe, Perú (gran parte)', '[[tú|blue]]', '[[usted|orange]]', '[[ustedes|orange]]'],
            ['Argentina, Uruguay, Paraguay', '[[vos|teal]] (en Uruguay también tú)', '[[usted|orange]]', '[[ustedes|orange]]'],
            ['Colombia, Costa Rica (según zonas)', '[[tú|blue]], [[vos|teal]] o [[usted|orange]] de confianza', '[[usted|orange]]', '[[ustedes|orange]]'],
          ], note: 'Es un mapa simplificado: dentro de cada país hay variación por zonas, edad y situación. En España el tuteo se ha extendido mucho, también con desconocidos en muchas situaciones; en buena parte de América el usted sigue siendo más frecuente con desconocidos y personas mayores.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Camilo, de Bogotá, le dice a su madre: «Mamá, ¿usted cómo amaneció?». ¿Qué expresa?', options: ['Un error: con la madre se usa tú.', 'Distancia: está enfadado con ella.', 'Cariño: en zonas de Colombia el usted se usa también en familia.'], answer: 2, why: 'Es el ustedeo de confianza, frecuente en partes de Colombia: no marca distancia.', en: 'What does Camilo’s usted to his mother express?' },
            { prompt: 'Un anuncio para clientes de Bogotá, Lima y Ciudad de México: «Si ___ dudas, llámennos».', options: ['tienen', 'tenés', 'tenéis'], answer: 0, why: 'En América el único plural es ustedes: tienen (y «llámennos», también de ustedes).', en: 'An ad for clients in three Latin American capitals: “If you have any questions, call us.”' },
          ] },
        ] },
        { title: 'Cambiar de trato en la conversación · Switching address', mascot: '/brand/mascot/speaking.webp', coach: 'El cambio también comunica. The switch itself is a message.', blocks: [
          { kind: 'concept', tone: 'violet', label: 'CAMBIOS PRAGMÁTICOS', question: '¿Qué significa que alguien cambie de trato a mitad de una relación o de una conversación?', en: 'Moving from usted to tú (or vos) usually signals closeness, and it is often negotiated: “¿Nos tuteamos?”, “Puede tutearme”. Going back to usted with someone you already address as tú usually signals the opposite: anger, reproach, irony or deliberate distance, often with the person’s title and surname. A switch only means something against the speaker’s usual system: for someone who uses usted with their family, usted is not a sign of anger.', formula: ['usted → tú / vos: acercamiento (¿Nos tuteamos? · ¿Nos tratamos de vos?)', 'tú / vos → usted: enfado, reproche, ironía o distancia (Mire usted, señor Ortiz…)', 'tú → usted delante de otros: formalidad pública', 'el cambio se lee según el sistema habitual de cada hablante'],
            meaning: 'Pasar de **usted a tú** (o a vos) suele indicar **acercamiento**, y a menudo se negocia: «¿Nos tuteamos?», «Puede tutearme». **Volver al usted** con alguien a quien ya se tutea indica lo contrario: **enfado, reproche, ironía** o distancia buscada, muchas veces con el título y el apellido. Ojo: el cambio solo significa algo **frente al trato habitual** de cada hablante. Para quien usa usted con su familia, el usted no es una señal de enfado.',
            examples: [
              { es: 'Bueno, Ramón, después de tres meses… [[¿nos tuteamos?|violet]]', en: 'Well, Ramón, after three months… shall we drop the formalities?' },
              { es: '[[Puede tutearme|violet]], de verdad, que el usted me hace sentir mayor.', en: 'You can call me tú, honestly; usted makes me feel old.' },
              { es: '[[Usted me ha engañado|violet]], señor Ortiz.', en: 'You have deceived me, Mr Ortiz: back to usted and the surname after weeks of tú, so it sounds cold and hurt.' },
              { es: 'Si no le importa, [[prefiero que sigamos de usted|violet]].', en: 'If you don’t mind, I’d rather we kept to usted (a polite refusal).' },
            ] },
          { kind: 'decide', title: '¿Cómo interpreto el cambio? · How do I read a switch?', steps: [
            { q: '¿El hablante usa usted también con su familia y sus amigos?', yes: 'Probablemente es **ustedeo de confianza**: no hay distancia. Mira el tono antes de interpretar nada.', no: 'next' },
            { q: '¿Alguien propone dejar el usted y el otro acepta?', yes: '**Acercamiento pactado**: «[[¿Nos tuteamos?|violet]]» · «Claro, tutéame».', no: 'next' },
            { q: '¿Vuelve al usted alguien que ya tuteaba o voseaba?', yes: '**Distancia buscada**: enfado, reproche, ironía o formalidad delante de otros. Fíjate en el tono y en si añade el apellido.', no: 'El trato no cambia: no hay mensaje extra.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Lucía y su hijo se tutean siempre. Un día ella le dice: «Usted se va a su cuarto ahora mismo». ¿Qué comunica?', options: ['Enfado y autoridad: el usted rompe el trato habitual.', 'Más cariño del habitual.', 'Respeto porque el hijo ha crecido.'], answer: 0, why: 'Volver al usted dentro de una relación de tú marca distancia: aquí, enfado.', en: 'A mother who always uses tú suddenly says usted. What does it convey?' },
            { prompt: 'Una cliente nueva le dice a Elena: «¿Le importa si nos tuteamos?». Elena prefiere mantener el usted. ¿Qué respuesta es cortés?', options: ['«No, gracias.»', '«Tú no me tutees.»', '«Si no le importa, prefiero que sigamos de usted.»'], answer: 2, why: 'Rechaza con suavidad y mantiene el usted en la propia respuesta.', en: 'Which reply politely declines the switch to tú?' },
          ] },
        ] },
        { title: 'Errores de forma y de interpretación · Errors of form and interpretation', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Coherencia en la forma, cuidado al interpretar. Consistent forms, careful reading.', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees cada frase con el error y tu alumno explica qué falla antes de ver la corrección: la forma o la interpretación.', self: 'Lee cada frase y decide qué falla: ¿la forma o la interpretación? Después mira la corrección. (Is it the form or the reading that is wrong?)' } },
          { kind: 'mistakes', title: '¿Qué falla? · What’s wrong?', items: [
            { wrong: 'Señora Ríos, pase y siéntate, por favor.', right: 'Señora Ríos, pase y siéntese, por favor.', why: 'Mezcla usted y tú en el mismo turno. Sin intención expresiva, suena a descuido: mantén un solo trato.' },
            { wrong: 'Vos tenés que traer vuestro pasaporte.', right: 'Vos tenés que traer tu pasaporte.', why: 'Con vos, el posesivo es tu / tuyo y el pronombre, te. «Vuestro» corresponde a vosotros.' },
            { wrong: 'Vos dijistes que vendrías.', right: 'Vos dijiste que vendrías.', why: 'El pretérito de vos es igual que el de tú. «Dijistes» se oye, pero se evita en la lengua cuidada.' },
            { wrong: '«Vos sabés» es un error: se dice «tú sabes».', right: '«Vos sabés» es la forma culta en Argentina y Uruguay.', why: 'El voseo es norma culta en esas zonas: se usa en la prensa, la literatura y la enseñanza.' },
            { wrong: 'Mi madre, que siempre me tutea, me habló de usted: estaba siendo amable.', right: 'Mi madre, que siempre me tutea, me habló de usted: estaba enfadada.', why: 'Pasar de tú a usted dentro de una relación de confianza suele marcar distancia o enfado.' },
            { wrong: 'Estimados clientes de Lima: os esperamos en la feria.', right: 'Estimados clientes de Lima: los esperamos en la feria.', why: 'En América el plural es ustedes, con los pronombres los / las / les, nunca os.' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Ramón, rioplatense, le escribe a Elena. ¿Qué frase es coherente?', options: ['Vos sabéis que os espero.', 'Vos sabés que lo espero.', 'Vos sabés que te espero.'], answer: 2, why: 'Voseo: sabés + te. «Sabéis / os» es de vosotros; «lo» sería de usted.', en: 'Which sentence is consistent? (You know I’m waiting for you.)' },
            { prompt: 'En una reunión, la jefa, que siempre tutea a Camilo, le dice delante del cliente: «Usted me entregará el informe el lunes». ¿Qué es lo más probable?', options: ['Que ha olvidado su nombre.', 'Que se ha equivocado de persona gramatical.', 'Formalidad pública o reproche: marca distancia delante del cliente.'], answer: 2, why: 'Un usted inesperado delante de otros suele marcar formalidad o reproche.', en: 'What does the boss’s sudden usted in front of the client most likely mean?' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno cuenta, sin preparar, cómo trata a cinco personas de su vida (madre, jefe, vecino mayor, amigo, camarero) y si alguna vez cambió de trato con alguien y por qué.' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'La reunión de adaptación', coach: 'Toca cada expresión marcada. Tap each marked expression.',
      steps: [
        { title: 'Tres versiones, una escena · Three versions, one scene', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Marta y tu alumno lee a Valeria y a Camilo. Después tu alumno toca cada expresión marcada y explica qué trato es y qué comunica.', self: 'Lee el diálogo en voz alta. Después toca cada expresión marcada: ¿tuteo, voseo, usted o cambio de trato? (Tap each marked expression: which form of address, and what does it convey?)' } },
          { kind: 'explore', title: 'La escena doce', setting: 'Lunes, videollamada de Estudio Trama. Marta (Madrid), Valeria (Rosario) y Camilo (Bogotá) trabajan juntos desde hace cinco años. Repasan cómo se tratan Elena y Ramón en cada versión. (A video call: three adapters, three ways of saying “you”.)', lines: [
            { who: 'Marta', text: 'Bueno, ¿empezamos? [[¿Habéis visto|blue]] ya la escena doce? Es la que más me preocupa.', en: 'Right, shall we start? Have you both seen scene twelve yet? It’s the one I’m most worried about.' },
            { who: 'Valeria', text: 'Sí, anoche. Y [[vos sabés|teal]] que en mi versión no hay dudas: empiezan de usted y en el capítulo tres pasan al vos.', en: 'Yes, last night. And you know there’s no question in my version: they start with usted and switch to vos in episode three.' },
            { who: 'Camilo', text: 'En la neutra, Marta, [[usted ya sabe|orange]] lo que pienso: de usted a tú, y nada de vos.', en: 'In the neutral one, Marta, you already know what I think: from usted to tú, and no vos at all.' },
            { who: 'Marta', text: 'Camilo, cinco años trabajando juntos y me sigues tratando de usted. [[¿Cuándo nos tuteamos?|violet]]', en: 'Camilo, five years working together and you still call me usted. When are we going to use tú?' },
            { who: 'Camilo', text: 'Ay, Marta, si en Bogotá [[a mi mamá también la trato de usted|orange]]. Para mí es cariño, no distancia.', en: 'Oh, Marta, back in Bogotá I call my mum usted too. For me it’s affection, not distance.' },
            { who: 'Valeria', text: 'A mí, por favor, [[tratame de vos|teal]], que si no siento que estoy hablando con el banco.', en: 'Please use vos with me, or I’ll feel like I’m talking to the bank.' },
            { who: 'Marta', text: 'Hecho. Vamos a la escena: Elena le pregunta a Ramón «[[¿Nos podemos tutear?|violet]]» y él sonríe. Ahí empieza la amistad.', en: 'Done. On to the scene: Elena asks Ramón whether they can use tú, and he smiles. That’s where the friendship starts.' },
            { who: 'Valeria', text: 'En la mía dice «[[¿Nos tratamos de vos?|violet]]» y él contesta: «Dale, pero [[vení|teal]] mañana temprano».', en: 'In mine she says “¿Nos tratamos de vos?” and he answers: “OK, but come early tomorrow.”' },
            { who: 'Marta', text: 'Y luego el capítulo cinco. Elena descubre que Ramón le mintió y, en mi versión, le suelta: «[[Usted me ha engañado, señor Ortiz|violet]]».', en: 'And then episode five. Elena finds out Ramón lied to her and, in my version, she snaps: “You have deceived me, Mr Ortiz.”' },
            { who: 'Camilo', text: 'En la neutra queda «Usted me engañó», y [[ustedes|orange]] dos saben que funciona: [[volver al usted|violet]] es levantar una pared.', en: 'In the neutral version it’s “Usted me engañó”, and you two know it works: going back to usted is putting up a wall.' },
            { who: 'Valeria', text: 'En la mía, igual: después de meses de «[[vos tenés|teal]]», un «usted tiene» duele más que un grito.', en: 'Same in mine: after months of “vos tenés”, a “usted tiene” hurts more than shouting.' },
            { who: 'Marta', text: 'Perfecto: el cambio se queda en las tres versiones. [[Mandadme|blue]] los guiones el viernes y [[os|blue]] invito a un café virtual.', en: 'Perfect: the switch stays in all three versions. Send me the scripts on Friday and the virtual coffee’s on me.' },
          ], notes: {
            '¿Habéis visto': '**Vosotros**: Marta es de Madrid y se dirige a sus dos colegas con el plural de confianza de la mayor parte de España.',
            'vos sabés': '**Voseo**: Valeria es de Rosario. «Sabés» lleva el acento al final; es su trato normal de confianza, no un rasgo vulgar.',
            'usted ya sabe': '**Usted de confianza**: Camilo trata de usted a una colega y amiga. En partes de Colombia es un trato cercano, no frío.',
            '¿Cuándo nos tuteamos?': '**Propuesta de cambio**: Marta interpreta el usted como distancia y propone pasar al tú. Así se negocia el acercamiento.',
            'a mi mamá también la trato de usted': '**Ustedeo afectivo**: Camilo explica su sistema. Si usa usted con su madre, con Marta no puede significar distancia.',
            'tratame de vos': '**Imperativo de vos** (tratá + me; con pronombre pierde la tilde). Valeria pide que no la traten de usted: para ella, el usted sería frío.',
            '¿Nos podemos tutear?': '**Acercamiento pactado** en la versión de España y la neutra: se pide permiso para dejar el usted.',
            '¿Nos tratamos de vos?': 'La misma propuesta en la versión rioplatense: allí el trato de confianza es el **vos**, no el tú.',
            'vení': '**Imperativo de vos** de «venir»: acento final y sin diptongo. En tú sería «ven».',
            'Usted me ha engañado, señor Ortiz': '**Vuelta al usted**: tras semanas de tú, el usted y el apellido marcan enfado y distancia. En la versión de España, con pretérito perfecto.',
            'ustedes': '**Ustedes**: en América es el único plural, también entre amigos. Camilo se dirige así a Marta y a Valeria.',
            'volver al usted': 'Camilo resume la función del cambio: el usted **inesperado** levanta una pared entre los personajes.',
            'vos tenés': '**Presente de vos** de «tener»: sin diptongo y con acento final. Representa meses de confianza que el usted rompe.',
            'Mandadme': '**Imperativo de vosotros** (mandad + me; la -d se mantiene con «me»). En América sería «Mándenme».',
            'os': '**Os**, pronombre de vosotros. En América: «los / las invito» o «les invito», según la zona.',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Por qué Camilo sigue tratando de usted a Marta?', options: ['Porque quiere mantener la distancia profesional.', 'Porque en su zona el usted también es un trato de cariño.', 'Porque Marta es su jefa y se lo exige.'], answer: 1, why: '«A mi mamá también la trato de usted. Para mí es cariño, no distancia».', en: 'Why does Camilo still use usted with Marta?' },
            { prompt: '¿Qué tienen en común las tres versiones en el capítulo cinco?', options: ['Elena deja de hablar con Ramón.', 'Elena vuelve al usted para marcar enfado y distancia.', 'Elena pasa al vos.'], answer: 1, why: '«El cambio se queda en las tres versiones»: volver al usted «es levantar una pared».', en: 'What do the three versions share in episode five?' },
            { prompt: '¿Cómo pediría Valeria lo mismo que Marta en la última línea?', options: ['«Mandame los guiones el viernes y los invito a un café.»', '«Mándenme los guiones el viernes y los invito a un café.»', '«Mandadme los guiones el viernes y os invito a un café.»'], answer: 1, why: 'Valeria se dirige a dos personas: en América el plural es ustedes (mándenme, los invito).', en: 'How would Valeria say Marta’s last line?' },
          ] },
        ] },
        { title: 'El guion por dentro · Inside the script', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'classify', title: '¿Qué comunica el trato? · What does the address convey?', categories: [
            { id: 'cerca', label: 'ACERCAMIENTO', tone: 'violet' },
            { id: 'lejos', label: 'DISTANCIA, ENFADO O IRONÍA', tone: 'orange' },
            { id: 'neutro', label: 'SIN CAMBIO · trato habitual', tone: 'blue' },
          ], items: [
            { text: 'Capítulo 3. Elena, que hasta ayer trataba de usted a Ramón: «Ramón, ¿te apetece un café?».', answer: 'cerca', why: 'Primer tú después del usted: se acerca.' },
            { text: 'Capítulo 5. Elena, que ya lo tuteaba: «Mire usted, señor Ortiz, no me haga reír».', answer: 'lejos', why: 'Vuelta al usted con apellido y tono irónico: distancia y enfado.' },
            { text: 'La madre de Camilo, que siempre lo trata de usted: «Mijo, ¿usted ya comió?».', answer: 'neutro', why: 'Es su trato habitual de cariño: no hay cambio que interpretar.' },
            { text: 'El juez, a Ramón, desde el primer día: «Señor Ortiz, siéntese, por favor».', answer: 'neutro', why: 'Trato institucional esperable desde el principio.' },
            { text: 'Ramón, en la versión rioplatense: «Bueno, Elena, ¿nos tratamos de vos?».', answer: 'cerca', why: 'Propuesta explícita de pasar a la confianza.' },
            { text: 'Capítulo 5. Ramón, que siempre la voseaba, delante del juez: «La doctora Duarte sabrá lo que dice».', answer: 'lejos', why: 'Deja de hablarle de vos y la nombra en tercera persona con el título: distancia buscada.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: tu alumno inventa una réplica de Ramón en el capítulo seis que intente volver a la confianza, en la versión que prefiera.' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Primero la relación, después la forma. Relationship first, then the form.',
      steps: [
        { title: 'Interpreta el cambio · Read the switch', blocks: [
          { kind: 'choice', items: [
            { prompt: 'Una pareja se tutea siempre. En plena discusión, él dice: «Haga usted lo que quiera».', options: ['Un error de conjugación.', 'Ironía y enfado: el usted rompe su trato habitual.', 'Respeto sincero.'], answer: 1, why: 'Volver al usted en una relación de tú, con este tono, marca distancia irónica.', en: 'A couple who always use tú: in the middle of a row he switches to usted.' },
            { prompt: 'Después de la firma del contrato, el cliente le dice a Elena: «Ya puede tutearme, ¿eh?».', options: ['La invita a acercarse: propone el tú.', 'Le reprocha algo.', 'Le pide más distancia.'], answer: 0, why: '«Puede tutearme» es una invitación explícita a dejar el usted.', en: 'After signing the contract, the client tells Elena she can now call him tú.' },
            { prompt: 'Una abuela costarricense dice a su nieta: «Venga, mi amor, ¿usted quiere más arroz?».', options: ['Distancia: la abuela está enfadada.', 'Ironía.', 'Cariño: en Costa Rica el usted se usa mucho también en familia.'], answer: 2, why: 'Ustedeo de confianza: «mi amor» deja claro que no hay distancia.', en: 'A Costa Rican grandmother uses usted with her granddaughter.' },
            { prompt: 'Para el subtitulado de una plataforma que se ve en toda Latinoamérica, ¿qué trato de confianza elige Camilo?', options: ['vos', 'tú', 'vosotros'], answer: 1, why: 'El tú es la opción de confianza más general para un público latinoamericano amplio; vos es regional y vosotros, de España.', en: 'For subtitles seen across Latin America, which familiar form does Camilo choose?' },
            { prompt: 'El jefe, que tutea a todo el equipo, escribe en un correo con copia a la dirección: «Le recuerdo, señorita Sosa, que el plazo vence hoy».', options: ['Quiere acercarse a Valeria.', 'Formalidad pública con un tono de reproche.', 'Lo hace por costumbre.'], answer: 1, why: 'Un usted y el apellido delante de terceros, con «le recuerdo», marcan distancia y reproche.', en: 'A boss who uses tú with everyone writes usted and a surname in an email copied to management.' },
          ] },
        ] },
        { title: '¿Qué sistema es? · Which system is it?', blocks: [
          { kind: 'classify', title: 'Clasifica cada frase · Classify each line', categories: [
            { id: 'tu', label: 'TUTEO', tone: 'blue' },
            { id: 'vos', label: 'VOSEO (pronombre o forma verbal)', tone: 'teal' },
            { id: 'usted', label: 'USTED', tone: 'orange' },
          ], items: [
            { text: 'Andá vos, que yo me quedo con los chicos.', answer: 'vos', why: '«Andá»: imperativo de vos para «ir».' },
            { text: 'Mijo, ¿usted ya almorzó?', answer: 'usted', why: 'Usted de confianza, frecuente en partes de Colombia.' },
            { text: '¿Tú sabís a qué hora llega el tren?', answer: 'vos', why: 'Voseo solo verbal (sabís) con el pronombre tú: coloquial en Chile.' },
            { text: 'Siéntate donde quieras.', answer: 'tu', why: 'Imperativo y presente de subjuntivo de tú.' },
            { text: 'Decime la verdad, ¿te gustó?', answer: 'vos', why: '«Decime»: decí + me, imperativo de vos.' },
            { text: '¿Me regala un minuto, señora?', answer: 'usted', why: '«Regala», tercera persona: usted.' },
          ] },
        ] },
        { title: 'Corrige el guion · Fix the script', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Señor Ortiz, pase y siéntate, por favor.', ok: false, options: ['Señor Ortiz, pasa y siéntese, por favor.', 'Señor Ortiz, pase y siéntese, por favor.', 'Señor Ortiz, pasad y sentaos, por favor.'], answer: 1, why: 'Un solo trato en el mismo turno: con «señor Ortiz», usted (pase, siéntese).' },
            { sentence: 'Vos tenés que traer vuestro pasaporte.', ok: false, options: ['Vos tenés que traer su pasaporte.', 'Vos tienes que traer vuestro pasaporte.', 'Vos tenés que traer tu pasaporte.'], answer: 2, why: 'Con vos, el posesivo es «tu»; «vuestro» es de vosotros y «su», de usted.' },
            { sentence: 'Vos me prometistes que llamarías.', ok: false, options: ['Vos me prometisteis que llamarías.', 'Vos me prometiste que llamarías.', 'Vos me prometés que llamarías.'], answer: 1, why: 'El pretérito de vos coincide con el de tú: prometiste, sin -s final.' },
            { sentence: 'Si querés, andá vos primero.', ok: true, why: 'Correcta: «querés» y «andá» son formas de vos; «andá» es el imperativo de «ir».' },
            { sentence: 'Queridos socios de Guadalajara: os esperamos el viernes.', ok: false, options: ['Queridos socios de Guadalajara: vos esperamos el viernes.', 'Queridos socios de Guadalajara: les esperáis el viernes.', 'Queridos socios de Guadalajara: los esperamos el viernes.'], answer: 2, why: 'En México el plural es ustedes: el pronombre es «los», no «os».' },
            { sentence: 'No te preocupes, vos sabés lo que hacés.', ok: true, why: 'Correcta: en el área rioplatense el imperativo negativo «no te preocupes» convive con el voseo en el resto de la frase.' },
          ] },
        ] },
        { title: 'El chat del equipo · The team chat', mascot: '/brand/mascot/seated.webp', blocks: [
          { kind: 'chat-fill', title: 'Marta y Camilo preparan la versión neutra · Preparing the neutral version', lines: [
            { who: 'Marta', text: 'Camilo, en la neutra Elena tiene que invitar a dos clientes a sentarse. ¿Cómo queda?' },
            { who: 'Camilo', text: '«Por favor, ___».', options: ['siéntense', 'sentaos', 'sentate'], answer: 0, why: 'Dos personas en América: ustedes (siéntense). «Sentaos» es de vosotros; «sentate», de vos singular.' },
            { who: 'Marta', text: 'Bien. ¿Y cuando Ramón se pone tierno en el capítulo tres?' },
            { who: 'Camilo', text: '«Elena, ___ que confío en ti».', options: ['sabéis', 'sabes', 'sabés'], answer: 1, why: 'Versión neutra y ya en confianza: tú sabes. «Sabés» sería voseo regional; «sabéis», vosotros.' },
            { who: 'Marta', text: 'Y en el cinco, cuando ella se enfada, yo pondría: «Señor Ortiz, ___ me mintió».', options: ['usted', 'vos', 'tú'], answer: 0, why: 'Vuelta al usted con el apellido: marca la distancia del enfado.' },
            { who: 'Camilo', text: 'Exacto. Y en la escena final, ya reconciliados: «___ con cuidado, Ramón».', options: ['Ve', 'Andá', 'Váyase'], answer: 0, why: 'Al final se reconcilian y vuelve el tú: «ve». «Andá» sería voseo y «váyase», usted.' },
            { who: 'Marta', text: 'Me encanta. Y el mensaje de la plataforma, igual en todos los países: «¿Te gustó el capítulo? ___».', options: ['Puntualo', 'Puntuadlo', 'Puntúalo'], answer: 2, why: 'Un mensaje común para todos los públicos usa el tú, la opción más general. «Puntualo» es voseo y «puntuadlo», vosotros.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['¿Le', 'molesta', 'si', 'nos', 'tratamos', 'de', 'tú?'], accept: ['¿Le molesta si nos tratamos de tú?'], en: 'Do you mind if we use tú with each other?' },
            { tiles: ['Prefiero', 'que', 'sigamos', 'de', 'usted,', 'si', 'no', 'le', 'importa.'], accept: ['Prefiero que sigamos de usted, si no le importa.'], en: 'I’d rather we kept to usted, if you don’t mind.' },
            { tiles: ['Vos', 'sabés', 'que', 'podés', 'contar', 'conmigo.'], accept: ['Vos sabés que podés contar conmigo.'], en: 'You know you can count on me (River Plate voseo).' },
          ] },
        ] },
        { title: 'Cambia la relación · Change the relationship', mascot: '/autoestudio/mascot/noting.webp', blocks: [
          { kind: 'guide', text: { teacher: 'Tu alumno reescribe cada réplica para la relación indicada y explica qué cambia en el verbo y en los pronombres. Tú confirmas si el trato es coherente.', self: 'Reescribe cada réplica y comprueba que verbo, pronombres y posesivos van en el mismo trato. (Keep verbs, pronouns and possessives consistent.)' } },
          { kind: 'rewrite', title: 'Otra relación, otra réplica · New relationship, new line', items: [
            { prompt: 'Siéntate y explícame qué pasó.', instruction: 'Elena está enfadada con Ramón: pásalo a usted.', accept: ['Siéntese y explíqueme qué pasó', 'Siéntese y explíqueme lo que pasó'] },
            { prompt: '¿Tienes tiempo mañana? Ven a mi oficina.', instruction: 'Versión rioplatense: pásalo a vos.', accept: ['¿Tenés tiempo mañana? Vení a mi oficina', 'Vos tenés tiempo mañana? Vení a mi oficina'] },
            { prompt: '¿Usted ya terminó el informe?', instruction: 'Ya son amigos (versión neutra): pásalo a tú.', accept: ['¿Ya terminaste el informe?', '¿Tú ya terminaste el informe?', '¿Ya terminaste tú el informe?'] },
            { prompt: '¿Ya habéis visto el capítulo? Os va a encantar.', instruction: 'Para un público latinoamericano: pásalo a ustedes.', accept: ['¿Ya han visto el capítulo? Les va a encantar', '¿Ya vieron el capítulo? Les va a encantar'] },
          ] },
          { kind: 'teacher', text: 'Al final de Practicar, tu alumno lee en voz alta una de las réplicas con dos entonaciones: una neutra y otra enfadada. ¿Cambia el efecto del usted?' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'El audio de Valeria', coach: 'Primero la idea, después los detalles. Gist first, then details.',
      steps: [
        { title: 'Un audio desde Rosario · An audio note from Rosario', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: solo la idea general. Segunda escucha: tu alumno anota cada forma de vos que oye y cada cambio de trato que Valeria comenta. Después, las preguntas.', self: 'Escucha una vez para la idea general y otra para los detalles. Anota las formas de vos y los cambios de trato de la serie. (Note the vos forms and the switches she talks about.)' } },
          { kind: 'listen', title: 'Audio de Valeria', channel: 'MENSAJE DE AUDIO · VALERIA SOSA', src: '/audio/grammar-live/515.mp3',
            before: 'Valeria le manda a Marta un audio sobre su versión de la escena doce. Es argentina y habla con voseo. ¿Qué crees que va a comentar del trato entre Elena y Ramón? (What do you think she will say about how the characters address each other?)',
            gist: { prompt: '¿De qué trata el audio? · What is the audio note about?', options: ['De las vacaciones que va a tomar.', 'De cómo adaptó los cambios de trato de la serie en la versión rioplatense.', 'De un problema técnico con el sonido del doblaje.'], answer: 1, why: 'Explica qué trato usa en cada capítulo y por qué.', en: 'She explains which form of address she used in each episode and why.' },
            details: [
              { prompt: '¿Qué contesta Ramón cuando Elena le propone tratarse de vos?', options: ['Que sí, pero que ella paga el café.', 'Que lo tiene que pensar.', 'Que prefiere seguir de usted.'], answer: 0, why: '«Dale, pero vos pagás el café».', en: 'How does Ramón reply when Elena suggests using vos?' },
              { prompt: '¿Por qué mantiene Valeria el usted en el capítulo cinco?', options: ['Porque la productora se lo pidió.', 'Porque en Argentina no se usa el vos en los juicios.', 'Porque así la herida se nota más.'], answer: 2, why: '«Si vuelve al usted, la herida se nota más».', en: 'Why does Valeria keep usted in episode five?' },
              { prompt: '¿Qué forma eligió para «no te preocupes»?', options: ['«No te preocupes», aunque «preocupés» también se oye.', '«No se preocupe».', '«No te preocupés», porque es la única correcta en Argentina.'], answer: 0, why: '«Dejé “preocupes”; “preocupés” también se oye acá, pero me sonaba más natural así».', en: 'Which form did she choose for “don’t worry”?' },
              { prompt: '¿Qué le pide a Marta?', options: ['Que escuche la escena y le diga qué le parece.', 'Que la llame esta noche.', 'Que reescriba la escena.'], answer: 0, why: '«Si tenés un rato, escuchala y decime qué te parece».', en: 'What does she ask Marta to do?' },
            ],
            transcript: 'Marta, ¿cómo [[andás|teal]]? Soy Valeria. Te mando este audio porque terminé la escena doce y quiero que la escuches antes del viernes. Mirá, en la versión rioplatense dejé el usted del principio: Ramón es mayor, es su cliente, y Elena lo trata con distancia profesional. En el capítulo tres, cuando ella le pregunta «[[¿Nos tratamos de vos?|violet]]», él le contesta: «Dale, pero [[vos pagás|teal]] el café». Y con eso ya está: el público siente que se hicieron amigos, sin necesidad de explicar nada. Lo que más me costó fue el capítulo cinco. Ella le dice «[[Usted me mintió, señor Ortiz|violet]]», y pensé en poner «vos me mentiste», pero no: si vuelve al usted, la herida se nota más. Es como cerrar una puerta. Ah, otra cosa: en la frase «no te preocupes, yo me encargo», dejé «preocupes»; «preocupés» también se oye acá, pero me sonaba más natural así. Si [[tenés|teal]] un rato, [[escuchala|teal]] y [[decime|teal]] qué te parece. Y no te olvides de que el viernes [[vos me debés|teal]] un café. ¡Un beso grande!',
            reply: { teacher: 'Tú eres Marta y respondes al audio de Valeria con tu opinión sobre la escena. Tu alumno, como Valeria, defiende sus decisiones de trato con voseo o con tú, como prefiera.', self: 'Responde a Valeria con un audio de un minuto: di qué te parece cada decisión de trato y si en tu variedad harías lo mismo. (Reply in a one-minute audio note.)' } },
          { kind: 'tip', icon: '🇦🇷', title: 'El voseo de Valeria · Valeria’s voseo', text: 'Valeria usa el voseo de confianza con Marta: **andás**, **mirá**, **tenés**, **escuchala**, **decime**, **vos me debés**. En el subjuntivo dice «quiero que la **escuches**» y «no te **preocupes**», con formas iguales a las de tú, muy frecuentes en el área rioplatense. «Acá» y «dale» son también rasgos de su variedad.', en: 'Valeria uses vos with Marta: andás, mirá, tenés, escuchala, decime. In the subjunctive she uses the same forms as tú (“quiero que la escuches”, “no te preocupes”), which are very common in the River Plate area. “Acá” and “dale” are also typical of her variety.' },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Hablar del trato y cambiarlo', coach: 'Elige el trato y defiéndelo. Choose your form of address and defend it.',
      steps: [
        { title: 'Tú, vos, usted y los cambios · Address and its shifts', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas y tu alumno responde con frases completas. En las dos últimas tarjetas, tú haces de interlocutor dentro de la escena.', self: 'Lee cada pregunta y responde en voz alta. Cuando cites un trato, conjúgalo bien y explica qué comunica. (Conjugate each form correctly and say what it conveys.)' } },
          { kind: 'talk', cards: [
            { q: '¿Cómo tratas a tu madre, a tu jefe, a un vecino mayor y a un camarero de tu edad? ¿Por qué? · How do you address these four people, and why?', followUps: ['¿Siempre ha sido así o ha cambiado con los años?', '¿Es igual en otras zonas de tu país?'], phrases: ['[[A mi madre la tuteo|blue]] / [[la trato de usted|orange]]…', 'Con mi jefe [[me trato de tú|blue]] desde que…', 'En mi país [[se usa mucho el usted|orange]] con…'], hint: 'Explica cada elección: edad, jerarquía, región, costumbre familiar.', example: 'A mi madre la tuteo, como casi todo el mundo en mi ciudad. Con mi jefe me trato de tú porque en la empresa nadie usa el usted. Al vecino del cuarto, que tiene ochenta años, lo trato de usted, y al camarero, si es joven, lo tuteo sin pensarlo.', next: 'Ahora, una propuesta de cambio.' },
            { q: 'Alguien que acabas de conocer en una reunión de trabajo te dice: «¿Nos tuteamos?». Acepta con naturalidad o, con elegancia, prefiere seguir de usted. · Accept or politely decline.', followUps: ['¿Y si te lo propone alguien mucho mayor?', '¿Alguna vez has sido tú quien lo ha propuesto?'], phrases: ['[[Claro, tutéame|violet]], por favor.', '[[Si no le importa, prefiero que sigamos de usted|violet]].', '[[¿Nos tratamos de vos?|violet]] (zonas voseantes)'], hint: 'Si rechazas, mantén el usted también en la respuesta, y suaviza con «si no le importa».', example: 'Claro, tutéame, que con el usted me siento como en una entrevista. Pero si me lo propusiera el director general, le diría: «Si no le importa, de momento prefiero que sigamos de usted». Y en Rosario, seguramente, me preguntarían: «¿Nos tratamos de vos?».' },
            { q: 'Recuerda una vez que alguien cambió de trato contigo, de tú a usted o al revés. ¿Qué quería decir? · Describe a time someone switched how they addressed you.', followUps: ['¿Cómo te sentiste?', '¿Volvieron después al trato de antes?'], phrases: ['[[Me habló de usted|violet]] y entendí que…', '[[Pasó al tú|violet]] cuando…', 'Ese usted [[sonaba a reproche|violet]].'], hint: 'Cuenta el contexto, la forma exacta y lo que interpretaste.', example: 'Mi profesora de piano me trató de usted durante dos años. El día que aprobé el examen me dijo: «Bueno, ya puedes tutearme». Fue como un ascenso. En cambio, mi hermano, que siempre me tutea, una vez me dijo «Usted sabrá lo que hace», y supe que estaba muy enfadado.', next: 'Ahora, trabajo de adaptación.' },
            { q: 'Eres Marta. Explicas a la productora, que te trata de usted, por qué la versión neutra usa tú y ustedes, y no vos ni vosotros. · Explain the choices for the neutral version.', followUps: ['¿Y por qué hay también una versión rioplatense?', '¿Qué se pierde en la versión neutra?'], phrases: ['Para un público amplio, [[el tú es lo más general|blue]].', 'En América [[el único plural es ustedes|orange]].', 'El voseo [[es la norma culta|teal]] en…'], hint: 'Responde de usted a la productora y nombra las regiones con cuidado.', example: 'Mire, para un público de toda Latinoamérica el tú de confianza es la opción más general, y ustedes es el único plural en América, así que vosotros sonaría a España. El voseo es la norma culta en Argentina y Uruguay, y por eso hacemos una versión rioplatense: allí un «tú» en boca de dos amigos sonaría a doblaje.' },
            { q: 'Eres Elena en el capítulo cinco: reprocha a Ramón su mentira volviendo al usted. Tu compañero intenta recuperar el tú. · Role-play the angry switch back to usted.', followUps: ['¿En qué momento podría Elena volver al tú?', '¿Cómo cambiaría la escena en la versión rioplatense?'], phrases: ['[[Mire usted, señor Ortiz|violet]]…', '[[No me tutee|violet]], por favor.', '[[Usted sabrá|violet]] lo que hace.'], hint: 'Usa el apellido y mantén el usted en verbos, pronombres y posesivos.', example: 'Mire usted, señor Ortiz: me ha mentido durante tres meses. No, no me tutee ahora; usted perdió ese derecho cuando me ocultó el testamento. Usted sabrá lo que hace con su vida, pero mi nombre no lo va a manchar.', teacher: 'Tú eres Ramón e intentas volver al tú («Elena, escúchame…»). Tu alumno mantiene el usted hasta que decide perdonarte.' },
          ], swap: { teacher: 'Al final, cambian los papeles: tú haces de Elena y mezclas a propósito tú y usted en la misma réplica. Tu alumno detecta la mezcla y decide si tiene intención expresiva o es un descuido.', self: 'Graba la escena de Elena y escúchala: ¿hay algún tú perdido entre los usted (un «te», un «tu», un imperativo)? Corrígelo y repite. (Record yourself and check for stray tú forms.)' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Nota de estilo sobre el trato', coach: 'Explica cada trato y cada cambio. Explain each form and each switch.',
      steps: [
        { title: 'Una nota para el equipo · A note for the team', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Después tu alumno lee la nota en voz alta y juntos comprueban que cada forma citada está bien conjugada.', self: 'Escribe tu nota y toca «Revisar mi texto». Después comprueba que cada forma que citas está bien conjugada. (Check every form you quote.)' } },
          { kind: 'write', title: 'Nota de estilo · Style note', situation: 'Eres Marta (o eres tú, si adaptas una serie que conoces). Escribes al equipo de Estudio Trama y a la productora una nota de estilo de 150 a 220 palabras sobre el trato entre Elena y Ramón: qué forma usan en cada momento, qué comunica cada cambio y cómo se resuelve en la versión de España, la neutra y la rioplatense. (Write a style note on forms of address for the team and the producer.)', task: [
            'Describe el trato inicial y qué indica.',
            'Explica el paso a la confianza y cómo se propone en cada versión (tú o vos).',
            'Interpreta la vuelta al usted del capítulo cinco.',
            'Indica qué plural se usa en España y en América.',
            'Cita al menos dos formas de voseo correctamente conjugadas.',
          ], starters: ['En los dos primeros capítulos, Elena y Ramón…', 'El paso al tú / al vos marca…', 'La vuelta al usted no es…', 'En la versión neutra…', 'En la rioplatense, en cambio,…'],
            words: ['tratarse de usted', 'tutear', 'vosear', 'distancia', 'acercamiento', 'reproche', 'ustedes', 'vosotros', 'tenés', 'vení'],
            model: 'Nota de estilo: el trato en «La casa del río». En los dos primeros capítulos, Elena y Ramón [[se tratan de usted|orange]]: es la distancia profesional entre una abogada y su cliente, y debe mantenerse en verbos, pronombres y posesivos («su contrato», nunca «tu contrato»). En el capítulo tres pasan a la confianza, y el cambio se pacta en pantalla: en la versión de España y en la neutra, Elena pregunta «[[¿Nos podemos tutear?|violet]]»; en la rioplatense, «[[¿Nos tratamos de vos?|violet]]», y a partir de ahí Ramón le dice «[[vos tenés|teal]] razón» o «[[vení|teal]] mañana». En el capítulo cinco, Elena [[vuelve al usted|violet]] con el apellido («Usted me engañó, señor Ortiz»). No es respeto, sino reproche: el público debe sentir que se cierra una puerta, así que no lo suavicemos. Para los planos de grupo, recordad que en América el único plural es [[ustedes|orange]]; [[vosotros|blue]] queda solo para la versión de España. Por último, no corrijáis el voseo de la versión rioplatense: allí es la forma culta de confianza, igual que el tú en las otras dos.',
            minWords: 150,
            checks: [
              { label: 'Habla del usted', pattern: '(?<!\\p{L})(?:usted|ustedes)(?!\\p{L})', tip: 'Describe el trato de usted: cuándo aparece y qué indica.' },
              { label: 'Habla del tú o del tuteo', pattern: '(?<!\\p{L})(?:tú|tutear|tuteo|tutean|tuteamos|tutea)(?!\\p{L})', tip: 'Explica el paso al tú en la versión de España o en la neutra.' },
              { label: 'Habla del voseo', pattern: '(?<!\\p{L})(?:vos|voseo|vosear)(?!\\p{L})', tip: 'Explica cómo se resuelve el cambio en la versión rioplatense.' },
              { label: 'Menciona el plural (ustedes o vosotros)', pattern: '(?<!\\p{L})(?:ustedes|vosotros)(?!\\p{L})', tip: 'Indica qué plural se usa en España y en América.' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})vos\\s+(?:tienes|puedes|quieres|vienes|eres|sabes)(?!\\p{L})', why: 'En el voseo rioplatense: «vos **tenés**, **podés**, **querés**, **venís**, **sos**, **sabés**».' },
              { pattern: '(?<!\\p{L})(?:dijistes|tuvistes|vinistes|fuistes|hicistes)(?!\\p{L})', why: 'El pretérito de vos es igual que el de tú: «dijiste», «tuviste», sin -s final.' },
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
            { tone: 'blue', label: 'TUTEO', formula: 'tú sabes · ven · plural: vosotros (España) / ustedes (América)', example: 'Tú sabes que puedes contar conmigo. ¿Habéis visto la escena?', caption: 'la opción de confianza más general', en: 'The most widespread familiar form; its plural is vosotros in most of Spain and ustedes in Latin America' },
            { tone: 'teal', label: 'VOSEO', formula: 'vos sabés · tenés · sos · vení · andá · te / tu / con vos', example: 'Vos sabés que podés contar conmigo. Decime qué te parece.', caption: 'norma culta en el Río de la Plata', en: 'Vos has its own present and imperative forms and is the educated norm in Argentina and Uruguay' },
            { tone: 'orange', label: 'USTED', formula: 'usted sabe · venga · su / le', example: 'Usted sabe que puede contar conmigo. Mamá, ¿usted ya comió?', caption: 'distancia o, en algunas zonas, cariño', en: 'Usted marks distance or respect, but in parts of Colombia and Costa Rica it can also be affectionate' },
            { tone: 'violet', label: 'CAMBIO DE TRATO', formula: 'usted → tú / vos = acercamiento · tú / vos → usted = distancia', example: '¿Nos tuteamos? · Usted me ha engañado, señor Ortiz.', caption: 'se lee frente al trato habitual', en: 'A switch to tú signals closeness; a switch back to usted signals anger, irony or distance, judged against the speaker’s usual system' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Antes de elegir el trato, pregúntate **dónde** (¿vosea esa comunidad?, ¿qué plural usa?) y **con quién** (¿distancia o confianza?). Antes de interpretar un cambio, pregúntate **cuál es el trato habitual** de esa persona: un usted inesperado comunica algo; un usted de siempre, no. Y sea cual sea el trato, mantenlo coherente en verbos, pronombres y posesivos.', en: 'Before choosing a form of address, ask where (does this community use vos? which plural?) and with whom (distance or closeness?). Before interpreting a switch, ask what the person’s usual form is: an unexpected usted means something, a habitual one doesn’t. Whatever you choose, keep verbs, pronouns and possessives consistent.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/standing-crossed.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: 'Versión rioplatense: «Si ___ dudas, preguntame».', options: ['tienes', 'tenéis', 'tenés'], answer: 2, why: 'Con «preguntame» (vos), el presente es «tenés».', en: 'If you have any questions, ask me.' },
            { prompt: 'Un hotel de Cartagena escribe a un grupo de turistas: «___ esperamos a las ocho en el vestíbulo».', options: ['Os', 'Vos', 'Los'], answer: 2, why: 'En América el plural es ustedes: «los esperamos».', en: 'A hotel in Colombia writes to a group: “We’ll be waiting for you at eight in the lobby.”' },
            { prompt: 'Dos amigos que se tutean. Uno, molesto, le dice al otro: «Usted sabrá lo que hace». ¿Qué expresa?', options: ['Cariño.', 'Respeto.', 'Reproche y distancia.'], answer: 2, why: 'El usted inesperado rompe el trato habitual: reproche.', en: 'Two friends who use tú: one says “Usted sabrá lo que hace”.' },
            { prompt: '¿Cuál es el imperativo de vos de «ir»?', options: ['ve', 'andá', 'id'], answer: 1, why: 'Con vos, para «ir» se usa «andá»; «ve» es de tú e «id», de vosotros.', en: 'What is the vos imperative of ir?' },
            { prompt: 'Subtítulos para toda Latinoamérica, dos amigos íntimos: «___ que te quiero».', options: ['Tú sabes', 'Vosotros sabéis', 'Vos sabés'], answer: 0, why: 'Para un público latinoamericano amplio, el tú de confianza es la opción más general.', en: 'Subtitles for all of Latin America, two close friends: “You know I love you.”' },
          ] },
        ] },
        { title: 'Una situación nueva · A new situation', mascot: '/brand/mascot/kneeling.webp', coach: 'Ahora, una agencia de viajes. Now, a travel agency.', blocks: [
          { kind: 'lead', text: 'Una agencia de viajes de Valencia quiere usar en México los mismos mensajes que usa en España. Adáptalos para un público mexicano.', en: 'A travel agency in Valencia wants to use its Spanish messages in Mexico. Adapt them for a Mexican audience.' },
          { kind: 'rewrite', title: 'Mensajes para México · Messages for Mexico', items: [
            { prompt: 'Si tenéis dudas, escribidnos.', instruction: 'Pásalo a ustedes.', accept: ['Si tienen dudas, escríbannos', 'Si tienen dudas escríbannos'] },
            { prompt: 'Vosotros elegís el horario de la excursión.', instruction: 'Pásalo a ustedes.', accept: ['Ustedes eligen el horario de la excursión'] },
            { prompt: 'Os enviaremos los billetes por correo.', instruction: 'Pásalo a ustedes (en México se dice «boletos»).', accept: ['Les enviaremos los boletos por correo', 'Los boletos se los enviaremos por correo'] },
          ] },
        ] },
        { title: 'Ampliación: otros sistemas · Extension: other systems', mascot: '/brand/mascot/portrait.webp', coach: 'Opcional. Optional.', blocks: [
          { kind: 'lead', text: 'Para estudiantes fuertes o si queda tiempo. **1.** En **Uruguay** alternan vos y tú, y se oye también la combinación «**tú tenés**»: pronombre de tú con forma verbal de vos. **2.** En **Chile**, el voseo verbal coloquial («tú sabís», «¿qué querís?») convive con el tuteo; el pronombre «vos» puede sonar muy familiar o incluso despectivo, según el contexto. **3.** En zonas de **Colombia** (Boyacá, Cundinamarca) se oye «**sumercé**», un trato cercano y respetuoso a la vez. **4.** Fuera de las zonas voseantes, un «vos» dicho por quien no es de allí puede sonar a imitación: si no es tu variedad, úsalo para entender, no para impostar.', en: 'For strong students or spare time. 1. In Uruguay vos and tú alternate, and you also hear “tú tenés”: the tú pronoun with a vos verb form. 2. In Chile, colloquial vos-type verb forms (“tú sabís”) coexist with tú; the pronoun vos itself can sound very familiar or even disrespectful, depending on context. 3. In parts of Colombia you hear “sumercé”, both warm and respectful. 4. Outside voseo areas, vos from a speaker who isn’t from there may sound put on: if it isn’t your variety, use it to understand, not to imitate.' },
          { kind: 'choice', title: 'Registro y matices · Register and nuance', items: [
            { prompt: 'Una uruguaya dice: «Tú tenés razón». ¿Cómo lo valoras?', options: ['Es un error: debe ser «tú tienes».', 'Mezcla dos variedades por descuido.', 'Es una combinación propia de su variedad: pronombre tú y verbo de vos.'], answer: 2, why: 'En Uruguay se documenta el pronombre tú con formas verbales de voseo.', en: 'A Uruguayan speaker says “Tú tenés razón”. How do you judge it?' },
            { prompt: '«¿Cómo estái?», dice un amigo chileno. ¿Qué es?', options: ['Un error de pronunciación.', 'Voseo verbal coloquial con el sentido de «¿cómo estás?».', 'Una forma de usted.'], answer: 1, why: '«Estái» es voseo verbal coloquial chileno; equivale a «estás».', en: 'A Chilean friend says “¿Cómo estái?”. What is it?' },
            { prompt: 'En Tunja, una señora le dice al vendedor: «Sumercé, ¿me regala dos panes?». ¿Qué transmite?', options: ['Ironía.', 'Enfado.', 'Un trato cercano y respetuoso a la vez.'], answer: 2, why: '«Sumercé» combina cercanía y respeto en zonas de Colombia.', en: 'In Tunja (Colombia), a woman addresses the vendor as “sumercé”. What does it convey?' },
          ] },
          { kind: 'teacher', text: 'Paso opcional, solo si queda tiempo o para estudiantes fuertes. Extra: tu alumno busca una escena de una serie o película en la que un personaje cambie de trato y explica qué comunica el cambio.' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 216 · Variación regional del pasado perfecto y evidencialidad', text: 'Ya eliges entre tú, vos y usted según la región y la relación, y sabes leer un cambio de trato. En la clase 216 sigues con la variación entre regiones, ahora en el pasado: por qué en Madrid se dice «Hoy he visto a Ana» y en Ciudad de México «Hoy vi a Ana», y cómo algunas variedades usan los tiempos del pasado para indicar de dónde viene la información. Es el paso natural: de cómo nos dirigimos al otro a cómo contamos lo que sabemos.', en: 'You can now choose between tú, vos and usted by region and relationship, and read a switch in address. In class 216 you keep exploring regional variation, now in the past: why Madrid says “Hoy he visto a Ana” while Mexico City says “Hoy vi a Ana”, and how some varieties use past tenses to show where the information comes from. It is the natural next step: from how we address people to how we report what we know.', href: '/gramatica/variacion-regional-del-pasado-perfecto-y', label: 'Ir a la clase 216' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Por qué el usted de Camilo a su madre no es frío y el de Elena a Ramón sí?». Respuesta esperada: el de Camilo es su trato habitual de cariño; el de Elena rompe un tuteo previo y marca reproche. Tarea: la nota de estilo de Escribir.' },
        ] },
      ],
    },
  ],
};
