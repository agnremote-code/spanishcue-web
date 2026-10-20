import type { LiveLesson } from '../types';

/**
 * Lesson 449 · B2 · Se pasivo, se impersonal y activo contrastados (course unit G149).
 * Builds on G076 (lesson 376: se in recipes and signs), G119 (lesson 419: se
 * pasivo / se impersonal, uno, dicen que) and G148 (lesson 232: ser +
 * participio in library notices). Here the learner CHOOSES among four ways of
 * telling the same fact according to text type and register.
 * Scene: the newsroom of «El Mirador», a small digital newspaper in Valparaíso
 * (Chile). Valentina Herrera (editor), Ignacio Soto (new reporter) and Rosa
 * Paredes (copy editor) prepare Monday's edition: a news piece on the
 * reopening of the fictional funicular «Las Gaviotas», a neighbourhood survey,
 * the classified ads and a recipe. In the podcast bulletin Valentina (Chilean
 * voice, ustedes) reads the news.
 * Content: active (agent known and relevant; 3rd plural «reabrieron» in
 * speech); ser + participio (news, reports, history; participle agreement;
 * por + agente); se pasivo (verb agrees with the noun: se arriendan piezas;
 * people without «a»: se necesitan guías; no agent with «por»); se impersonal
 * (always singular: se vive bien, cuando se es joven, se entrevistó a cien
 * vecinos, se espera que…, se recomienda + infinitive; never plural with
 * personal «a»). Why the agent is hidden (unknown, obvious, irrelevant,
 * general) and a first look at hiding it on purpose (bridge to G150).
 * Norm debate: «Se arrienda piezas» is frequent on signs in many areas, but the
 * academic norm (RAE-ASALE) recommends agreement. Register by text type:
 * headlines, news, recipes, notices, reports, conversation.
 * Ampliación: se les informa, se pueden + infinitive + plural, «por» that is
 * not an agent (por unanimidad).
 */
export const lesson: LiveLesson = {
  id: 449,
  level: 'B2',
  title: 'Se pasivo, se impersonal y activo contrastados',
  subtitle: 'Elegir entre activa, ser + participio, se pasivo y se impersonal según el texto: noticia, receta, aviso, informe o conversación.',
  legend: [
    { tone: 'blue', label: 'ACTIVA · alguien hace algo: la municipalidad reabrió, reabrieron (the doer is the subject)' },
    { tone: 'teal', label: 'SER + PARTICIPIO · fue reabierto (por…): registro formal y escrito (formal passive)' },
    { tone: 'orange', label: 'SE PASIVO · el verbo concuerda con la cosa: se arriendan piezas (verb agrees)' },
    { tone: 'violet', label: 'SE IMPERSONAL · singular fijo: se vive bien, se entrevistó a… (always singular)' },
  ],
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Un hecho, cuatro maneras de contarlo', coach: '¿Importa quién lo hizo? Does it matter who did it?',
      steps: [
        { title: 'La edición del lunes · Monday’s edition', blocks: [
          { kind: 'lead', text: 'Valparaíso, Chile. En la redacción de **El Mirador**, un diario digital del puerto, la editora **Valentina Herrera**, el periodista nuevo **Ignacio Soto** y la correctora **Rosa Paredes** preparan la edición del lunes. La gran noticia: después de ocho meses de obras, vuelve a funcionar el ascensor Las Gaviotas, el funicular que sube al cerro. El mismo hecho aparece en cuatro textos distintos, y en cada uno se cuenta de otra manera.', en: 'Valparaíso, Chile. In the newsroom of El Mirador, a local digital paper, the editor, a new reporter and the copy editor are preparing Monday’s edition. The big story: after eight months of works, the Las Gaviotas funicular is running again. The same fact appears in four different texts, and each one tells it differently.' },
          { kind: 'table', title: 'El mismo hecho en cuatro textos · The same fact in four texts', head: ['Texto', 'Versión', 'Qué pone en primer plano'], rows: [
            ['Conversación en la redacción', '¡Por fin [[reabrieron|blue]] el ascensor!', 'el hecho; quién lo hizo no importa (activa, 3.ª plural)'],
            ['Cuerpo de la noticia', 'El ascensor [[fue reabierto|teal]] ayer por la municipalidad.', 'el ascensor, y además el agente (por…)'],
            ['Titular', '[[Se reabre|orange]] el ascensor Las Gaviotas', 'el ascensor; el agente desaparece'],
            ['Reportaje sobre el cerro', 'Desde ayer [[se sube|violet]] al cerro en dos minutos.', 'la experiencia general, sin sujeto'],
          ], note: 'Ninguna versión es «mejor»: cada texto pide una forma. (No version is “better”: each type of text calls for its own form.)' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿Qué versión nombra a quien hizo la acción?', options: ['Se reabre el ascensor Las Gaviotas.', 'Desde ayer se sube al cerro en dos minutos.', 'El ascensor fue reabierto ayer por la municipalidad.'], answer: 2, why: 'Solo la pasiva con ser lleva agente: «por la municipalidad». Las construcciones con se lo ocultan.', en: 'Which version names the doer? Only the ser passive includes an agent with por.' },
            { prompt: '«¡Por fin reabrieron el ascensor!». ¿Quién lo reabrió, según esta frase?', options: ['Ignacio y sus colegas.', 'Alguien que no se nombra; al hablante no le interesa.', 'Los lectores del diario.'], answer: 1, why: 'La 3.ª persona plural sin sujeto es impersonal en la conversación: «ellos», sin decir quiénes.', en: 'In everyday speech, a 3rd person plural verb with no subject means “someone”, not a specific group.' },
          ] },
        ] },
        { title: 'Cuatro opciones, una pregunta · Four options, one question', mascot: '/brand/mascot/studying.webp', coach: 'Primero el agente; después el texto. First the doer, then the text.', blocks: [
          { kind: 'concept', tone: 'blue', label: '¿POR QUÉ OCULTAR AL AGENTE?', question: '¿Sabes quién lo hizo? ¿Le importa al lector?', en: 'Spanish hides the doer when it is unknown, obvious, irrelevant or “people in general”. When the doer is known and relevant, the active is the most direct choice; ser + participle keeps the thing as the topic and still names the doer, typically in writing.', formula: ['agente importante → activa (o ser + participio + por…, en textos formales)', 'agente desconocido, evidente o irrelevante → se'],
            meaning: 'Ocultamos al agente cuando **no se sabe** («Se pintó un mural en la escalera»: nadie sabe quién), cuando **es evidente** («Se aprobó el presupuesto»: lo aprueba el concejo, todo el mundo lo sabe), cuando **no le interesa al lector** (en una receta no importa quién cocina) o cuando hablamos de **la gente en general** («En el cerro se vive tranquilo»). Si el agente es noticia, se nombra: con la **activa** o, en un texto formal, con **ser + participio + por**.',
            examples: [
              { es: '[[La municipalidad reabrió|blue]] el ascensor tras ocho meses de obras.', en: 'Active: the town council is the topic and the doer.' },
              { es: 'El ascensor [[fue reabierto por|teal]] la municipalidad.', en: 'Ser passive: the funicular is the topic; the doer comes at the end, as new information.' },
              { es: '[[Se cambiaron|orange]] los cables y [[se reforzaron|orange]] los rieles.', en: 'Passive se: what was done matters; the workers are obvious.' },
              { es: 'Con el ascensor, [[se llega|violet]] al centro en diez minutos.', en: 'Impersonal se: anyone, people in general.' },
            ],
            note: 'Ocultar al agente a propósito, para no señalar a nadie («Se cometieron errores»), es otro uso: lo verás en la clase 150.' },
          { kind: 'decide', title: '¿Qué forma elijo? · Which form do I choose?', steps: [
            { q: '¿El agente es conocido y le importa al lector?', yes: 'Nómbralo. **Activa** («La municipalidad reabrió…») o, en noticia o informe, **ser + participio + por** («fue reabierto por…»).', no: 'next' },
            { q: '¿Hay una cosa (o personas cualquiera, sin «a») que recibe la acción?', yes: '**Se pasivo**: el verbo concuerda con ella. «Se reabre el ascensor», «Se buscan fotografías», «Se necesitan guías».', no: 'next' },
            { q: '¿No hay cosa, hay «a» + personas, un infinitivo o «que…»?', yes: '**Se impersonal**, siempre en singular: «Se vive bien», «Se entrevistó a cien vecinos», «Se recomienda llegar temprano», «Se espera que…».', no: 'En la conversación, la 3.ª plural también sirve: «Reabrieron el ascensor».' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'En una receta: «___ el choclo con la albahaca».', options: ['Es molido', 'Se muele', 'La cocinera muele'], answer: 1, why: 'En una receta el agente no importa (es quien cocine): se pasivo, que concuerda con «el choclo».', en: 'In a recipe the doer is irrelevant, so passive se is the natural form.' },
            { prompt: 'Una noticia quiere destacar qué empresa hizo la obra:', options: ['Se hizo la obra por una constructora.', 'Se hizo la obra.', 'La obra fue realizada por una constructora de Quilpué.'], answer: 2, why: 'Si el agente es la información nueva, se nombra con ser + participio + por (o con la activa). Con se no se suele poner «por + agente».', en: 'When the doer is the news, name it: ser + participle + por, or the active.' },
          ] },
        ] },
        { title: 'Se pasivo y se impersonal: la frontera · Passive se vs impersonal se', mascot: '/autoestudio/mascot/noting.webp', coach: '¿Hay algo que concuerde? Is there anything to agree with?', blocks: [
          { kind: 'concept', tone: 'orange', label: 'SE PASIVO', question: '¿Qué se arrienda? ¿Qué se busca?', en: 'Passive se: the noun is the grammatical subject, so the verb agrees with it, before or after the verb. This includes people “in general”, with no personal a (se necesitan guías).', formula: ['se + verbo en 3.ª persona que concuerda con el sustantivo', 'sin «a»: cosas o personas cualquiera'],
            meaning: 'El sustantivo es el **sujeto**: por eso el verbo concuerda con él, vaya antes o después. Funciona igual con personas indeterminadas sin «a»: «**Se necesitan** guías con inglés», «**Se contratarán** diez operarios».',
            examples: [
              { es: '[[Se arriendan|orange]] piezas para estudiantes.', en: 'Rooms to rent for students. (Chile: pieza = room, arrendar = to rent.)' },
              { es: 'Las fotografías antiguas [[se digitalizarán|orange]] este mes.', en: 'The old photographs will be digitised this month.' },
              { es: '[[Se necesitan|orange]] guías con inglés para el verano.', en: 'Guides with English needed for the summer: any guides, so no a.' },
            ] },
          { kind: 'concept', tone: 'violet', label: 'SE IMPERSONAL', question: '¿No hay nada que concuerde?', en: 'Impersonal se: there is no subject at all, so the verb is always 3rd person singular. This happens with intransitive verbs, with ser and estar, with personal a + people, and with an infinitive or a que-clause.', formula: ['se + verbo en 3.ª persona singular, siempre', 'verbo sin objeto · ser / estar · a + personas · infinitivo · que…'],
            meaning: 'No hay sujeto, así que el verbo **nunca** va en plural: «En el cerro **se vive** tranquilo», «Cuando **se es** joven…», «En la terraza **se está** bien», «**Se entrevistó a** cien vecinos», «**Se recomienda** llegar temprano», «**Se espera que** el ascensor funcione todo el año».',
            examples: [
              { es: 'Para el reportaje [[se entrevistó a|violet]] cien vecinos del cerro.', en: 'A hundred residents were interviewed: personal a, so singular.' },
              { es: '[[Se busca a|violet]] los vecinos que trabajaron en el ascensor en los años setenta.', en: 'We are looking for the specific residents who worked there.' },
              { es: 'Cuando [[se es|violet]] periodista, nunca [[se descansa|violet]] del todo.', en: 'When you’re a journalist, you never fully switch off.' },
            ],
            note: 'Compara: «**Se buscan** fotografías» (cosas: plural) / «**Se busca a** los vecinos que…» (personas con «a»: singular).' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Para el estudio ___ a los comerciantes del cerro».', options: ['se consultó', 'se consultaron', 'consultaron se'], answer: 0, why: 'Con «a» + personas no hay sujeto: se impersonal, singular.', en: 'Personal a means there is no subject: singular verb.' },
            { prompt: '«___ fotógrafos para el festival de verano».', options: ['Se busca a', 'Se busca', 'Se buscan'], answer: 2, why: 'Fotógrafos cualquiera, sin «a»: son el sujeto y el verbo concuerda.', en: 'Any photographers, no personal a: they are the subject, so plural.' },
          ] },
        ] },
        { title: 'Ser + participio y el registro · The ser passive and register', mascot: '/brand/mascot/speaking.webp', coach: 'Cada texto tiene su forma. Each text has its form.', blocks: [
          { kind: 'concept', tone: 'teal', label: 'SER + PARTICIPIO', question: '¿Escribes una noticia o un informe y quieres nombrar al agente?', en: 'The ser passive belongs to writing: news, reports, history. The participle agrees with the subject. It allows por + agent. In the present tense, for habits or ongoing actions, it sounds forced, and in conversation people prefer the active or se.', formula: ['sujeto + ser + participio (concuerda) + por + agente'],
            meaning: 'Es la forma de las **noticias**, los **informes** y los textos de **historia**. El participio concuerda con el sujeto: «Las escaleras **fueron restauradas** por la municipalidad». En la conversación casi no se usa, y en presente, para hábitos, suena forzada: «Aquí **se venden** diarios», no «Aquí son vendidos diarios».',
            examples: [
              { es: 'Las obras [[fueron financiadas|teal]] con fondos regionales.', en: 'The works were funded with regional money.' },
              { es: 'El ascensor [[fue construido|teal]] en 1912 por una empresa inglesa.', en: 'Typical of historical writing.' },
            ] },
          { kind: 'table', title: '¿Qué forma pide cada texto? · Which form does each text call for?', head: ['Tipo de texto', 'Forma habitual', 'Ejemplo'], rows: [
            ['Titular de prensa', 'se pasivo o participio solo', '[[Se reabre|orange]] el ascensor · Reabierto el ascensor'],
            ['Noticia, historia', 'ser + participio (+ por) y activa', 'El ascensor [[fue reabierto|teal]] por la municipalidad.'],
            ['Receta, instrucciones', 'se pasivo', '[[Se muele|orange]] el choclo; [[se agregan|orange]] las pasas.'],
            ['Aviso, cartel', 'se pasivo / se impersonal', '[[Se arriendan|orange]] piezas · [[Se ruega|violet]] no apoyarse en la puerta.'],
            ['Informe, encuesta', 'se impersonal + que, ser + participio', '[[Se entrevistó a|violet]] cien vecinos; [[se observó|violet]] que…'],
            ['Conversación', 'activa, 3.ª plural, se', '[[Reabrieron|blue]] el ascensor; ahora [[se sube|violet]] rápido.'],
          ], note: 'En los titulares es muy frecuente el participio sin «ser»: «Reabierto el ascensor Las Gaviotas». (Headlines often drop ser.)' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Un amigo te pregunta por el cerro. ¿Qué dices?', options: ['El ascensor ha sido arreglado por los técnicos.', 'Por fin arreglaron el ascensor.', 'El ascensor fue arreglado por fin.'], answer: 1, why: 'En la conversación lo natural es la activa con 3.ª plural; ser + participio suena a noticia leída.', en: 'In casual speech the 3rd person plural active is natural; the ser passive sounds like a news report.' },
            { prompt: 'Informe técnico: «Los rieles ___ por los ingenieros de la empresa».', options: ['fueron revisados', 'se revisaron', 'fue revisado'], answer: 0, why: 'Hay agente (por los ingenieros): ser + participio, y el participio concuerda con «los rieles».', en: 'With an agent in formal writing: ser + participle agreeing with the subject.' },
          ] },
        ] },
        { title: '«Se arrienda piezas»: norma y errores · The norm and common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: 'Busca el sujeto. Find the subject.', blocks: [
          { kind: 'tip', icon: '🌎', title: '¿Se arrienda o se arriendan? · A real debate', text: 'En carteles de muchas zonas, a ambos lados del Atlántico, se ve «Se arrienda piezas», «Se vende casas»: quien escribe siente la frase como impersonal (alguien arrienda piezas). Es frecuente, pero la norma académica (RAE-ASALE) **recomienda la concordancia**: «**Se arriendan** piezas», «**Se venden** casas». En un texto cuidado, y en un diario, concuerda siempre.', en: 'Signs in many areas, in Spain and Latin America, show a singular verb with a plural noun, because writers feel it as impersonal. It is common, but the academic norm recommends agreement, and careful writing always uses it.' },
          { kind: 'guide', text: { teacher: 'Tú lees cada frase con el error; tu alumno dice cuál es el sujeto (o si no lo hay) antes de ver la corrección.', self: 'Lee cada frase y pregúntate: ¿cuál es el sujeto? ¿Hay «a»? Después mira la corrección. (Find the subject first.)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Se buscan a los dueños de las fotos antiguas.', right: 'Se busca a los dueños de las fotos antiguas.', why: 'Con «a» + personas no hay sujeto: el verbo va en singular. Nunca plural con esta «a». (Personal a → singular.)' },
            { wrong: 'Se arrienda departamentos con vista al mar.', right: 'Se arriendan departamentos con vista al mar.', why: 'Departamentos es el sujeto: la norma pide concordancia, aunque el singular se vea en muchos carteles.' },
            { wrong: 'El ascensor se reabrió por la municipalidad.', right: 'El ascensor fue reabierto por la municipalidad. / La municipalidad reabrió el ascensor.', why: 'Con se no se suele nombrar al agente con «por». Si quieres nombrarlo, usa ser + participio o la activa.' },
            { wrong: 'Las obras fueron terminado en marzo.', right: 'Las obras fueron terminadas en marzo.', why: 'Con ser, el participio concuerda con el sujeto: las obras → terminadas.' },
            { wrong: 'En este cerro se viven tranquilos.', right: 'En este cerro se vive tranquilo.', why: 'Vivir no tiene objeto: se impersonal, singular. El adjetivo va en masculino singular.' },
            { wrong: 'Aquí son servidos los mejores completos del puerto.', right: 'Aquí se sirven los mejores completos del puerto.', why: 'Para un hábito en presente, ser + participio suena forzado: lo natural es el se pasivo. (Completo = Chilean hot dog.)' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Aviso para el diario: «___ habitaciones amuebladas cerca de la universidad».', options: ['Se arriendan a', 'Se arriendan', 'Se arrienda'], answer: 1, why: 'Habitaciones es el sujeto: concordancia, como recomienda la norma.', en: 'The noun is the subject: plural agreement, as the norm recommends.' },
            { prompt: '«___ a los lectores que enviaron sus recuerdos del ascensor».', options: ['Son agradecidos', 'Se agradece', 'Se agradecen'], answer: 1, why: '«A los lectores» lleva «a»: impersonal, singular.', en: 'Personal a → impersonal se, singular.' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno cuenta una noticia reciente de su ciudad de tres maneras: a un amigo (activa), como titular (se) y como primera línea de una noticia (ser + participio + por).' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'Lunes en la redacción', coach: 'Toca las expresiones marcadas. Tap the marked expressions.',
      steps: [
        { title: 'Corregir la edición · Editing the issue', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Valentina y Rosa; tu alumno es Ignacio. Después tu alumno toca cada forma marcada y explica por qué se eligió.', self: 'Lee el diálogo en voz alta. Después toca cada forma marcada y explica por qué se eligió esa forma y no otra.' } },
          { kind: 'explore', title: 'La reunión de las nueve', setting: 'Lunes, nueve de la mañana, en la redacción de El Mirador. Valentina y Rosa revisan los textos de Ignacio antes de publicar.', lines: [
            { who: 'Valentina', text: 'Ignacio, leí tu nota del ascensor. Está bien escrita, pero el titular, «[[Reabrieron|blue]] el ascensor», suena a conversación de almacén.', en: 'Ignacio, I read your piece on the funicular. It’s well written, but the headline sounds like corner-shop chat.' },
            { who: 'Ignacio', text: 'Es que no tenía claro quién lo había hecho. ¿La municipalidad o la constructora?', en: 'The thing is, I wasn’t sure who had done it. The town council or the construction company?' },
            { who: 'Valentina', text: 'La obra la pagó la municipalidad, y eso es noticia. En el primer párrafo pon: «El ascensor [[fue reabierto por|teal]] la municipalidad tras ocho meses de obras».', en: 'The council paid for it, and that’s news. In the first paragraph write that it was reopened by the council after eight months of works.' },
            { who: 'Rosa', text: 'Y para el titular, algo corto: «[[Se reabre|orange]] el ascensor Las Gaviotas». El quién va en el texto.', en: 'And for the headline, something short. The who goes in the article.' },
            { who: 'Ignacio', text: 'Perfecto. Otra duda: en el reportaje puse «Se entrevistaron a cien vecinos». ¿Está bien?', en: 'Great. Another question: in the feature I wrote “Se entrevistaron a cien vecinos”. Is that right?' },
            { who: 'Rosa', text: 'Casi. Con esa «a», el verbo no concuerda: «[[Se entrevistó a|violet]] cien vecinos». En cambio, en tu aviso del archivo, «[[Se buscan|orange]] fotografías antiguas», el plural está perfecto.', en: 'Nearly. With that a, the verb doesn’t agree. But in your archive notice, “old photographs wanted”, the plural is perfect.' },
            { who: 'Valentina', text: 'Y destaca la conclusión: casi todos dicen que en el cerro [[se vive|violet]] mejor desde que funciona el ascensor.', en: 'And highlight the conclusion: almost everyone says life on the hill is better since the funicular started running.' },
            { who: 'Ignacio', text: 'Anotado. En los clasificados llegó este: «Se arrienda piezas para estudiantes». ¿Lo publico así?', en: 'Noted. This one came in for the classifieds. Shall I publish it as it is?' },
            { who: 'Rosa', text: 'Así se ve en muchos carteles, pero en el diario corregimos: «[[Se arriendan|orange]] piezas». La norma recomienda la concordancia.', en: 'That’s how many signs put it, but in the paper we correct it. The norm recommends agreement.' },
            { who: 'Ignacio', text: '¿Y la receta de tu abuela, Rosa? ¿La escribo con «usted»: «muela el choclo»?', en: 'And your grandmother’s recipe, Rosa? Shall I write it with usted commands?' },
            { who: 'Rosa', text: 'Mejor con se, como en los libros de cocina: «[[Se muele|orange]] el choclo con albahaca y después [[se agregan|orange]] las pasas y las aceitunas».', en: 'Better with se, as in cookbooks.' },
            { who: 'Valentina', text: 'Una última cosa, Ignacio: nada de «el ascensor se reabrió por la municipalidad». Si quieres el quién, [[la municipalidad reabrió|blue]] el ascensor, y listo.', en: 'One last thing: no “se reabrió por la municipalidad”. If you want the who, use the active, and that’s it.' },
          ], notes: {
            'Reabrieron': '**Activa con 3.ª plural** sin sujeto: muy natural en la conversación («arreglaron la calle»), pero informal para un titular.',
            'fue reabierto por': '**Ser + participio + por**: el ascensor es el tema y el agente aparece al final como información nueva. Típico del cuerpo de una noticia.',
            'Se reabre': '**Se pasivo** en un titular: corto y sin agente. En los titulares se usa mucho el presente para hechos recientes.',
            'Se entrevistó a': '**Se impersonal**: «a cien vecinos» lleva «a», así que no es sujeto. Singular siempre: nunca «se entrevistaron a».',
            'Se buscan': '**Se pasivo** en plural: las fotografías son el sujeto, sin «a».',
            'se vive': '**Se impersonal** con un verbo sin objeto: la gente en general. Singular fijo.',
            'Se arriendan': '**Se pasivo** con concordancia, como recomienda la norma. En Chile se dice arrendar y pieza; en otros países, alquilar y habitación.',
            'Se muele': '**Se pasivo** en una receta: el choclo (maíz tierno) es el sujeto, en singular.',
            'se agregan': '**Se pasivo** en plural: las pasas y las aceitunas. Las recetas casi siempre usan se, no ser + participio.',
            'la municipalidad reabrió': '**Activa**: si el agente importa, la activa es lo más directo. Con se no se suele poner «por + agente».',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Por qué no le gusta a Valentina el titular de Ignacio?', options: ['Porque tiene un error de concordancia.', 'Porque nombra a la municipalidad.', 'Porque suena demasiado coloquial.'], answer: 2, why: 'Dice que «suena a conversación de almacén»: la activa con 3.ª plural es oral.', en: 'Why doesn’t Valentina like the headline? It sounds too colloquial.' },
            { prompt: '¿Qué conclusión tiene el reportaje?', options: ['Que la vida en el cerro mejoró con el ascensor.', 'Que los vecinos no quieren el ascensor.', 'Que el ascensor es demasiado caro.'], answer: 0, why: 'Valentina: «en el cerro se vive mejor desde que funciona el ascensor».', en: 'What is the conclusion of the survey feature?' },
            { prompt: '¿Cómo quiere Rosa la receta?', options: ['Con ser + participio.', 'Con se, como en los libros de cocina.', 'Con imperativos de usted.'], answer: 1, why: 'Rosa: «Mejor con se, como en los libros de cocina».', en: 'How does Rosa want the recipe written?' },
          ] },
        ] },
        { title: 'Más textos de la edición · More texts from the issue', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'classify', title: '¿Qué forma es? · Which form is it?', categories: [
            { id: 'act', label: 'Activa', tone: 'blue' },
            { id: 'ser', label: 'Ser + participio', tone: 'teal' },
            { id: 'pas', label: 'Se pasivo · concuerda', tone: 'orange' },
            { id: 'imp', label: 'Se impersonal · singular', tone: 'violet' },
          ], items: [
            { text: 'Las escaleras del cerro fueron pintadas por estudiantes de arte.', answer: 'ser', why: 'Ser + participio que concuerda (pintadas) y agente con «por».' },
            { text: 'Se publicarán tres cartas de lectores el domingo.', answer: 'pas', why: 'Tres cartas es el sujeto: el verbo concuerda en plural.' },
            { text: 'Se invita a los vecinos a la fiesta del ascensor.', answer: 'imp', why: '«A los vecinos» lleva «a»: singular fijo.' },
            { text: 'Los bomberos limpiaron el mirador después de la tormenta.', answer: 'act', why: 'El agente (los bomberos) es el sujeto: activa.' },
            { text: 'Se espera que el ascensor reciba mil pasajeros al día.', answer: 'imp', why: 'Se + «que…»: impersonal, singular.' },
            { text: 'Se agrega una pizca de comino a la carne.', answer: 'pas', why: 'Una pizca de comino es el sujeto, en singular: el verbo concuerda con él.' },
            { text: 'En la terraza del café se está muy bien al atardecer.', answer: 'imp', why: 'Estar sin sujeto: impersonal.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: tu alumno cambia «Los bomberos limpiaron el mirador» a un titular («Se limpia el mirador tras la tormenta») y explica qué información se pierde.' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Agente, texto, concordancia. Doer, text type, agreement.',
      steps: [
        { title: 'Cada texto, su forma · Each text, its form', blocks: [
          { kind: 'choice', items: [
            { context: 'Titular de portada, corto. (Front-page headline, short.)', prompt: 'Elige el titular:', options: ['La nueva biblioteca del cerro ha sido inaugurada por las autoridades', 'Inauguran a la nueva biblioteca del cerro', 'Se inaugura la nueva biblioteca del cerro'], answer: 2, why: 'Un titular busca brevedad: se pasivo sin agente. La segunda es correcta pero larga; la tercera pone «a» delante de una cosa.', en: 'Headlines need brevity: passive se without an agent.' },
            { context: 'Informe técnico: debe constar quién hizo la reparación. (The report must say who did the repair.)', prompt: 'Elige la frase:', options: ['El cable principal fue reparado por la empresa contratista.', 'Se reparó el cable principal.', 'Se reparó el cable principal por la empresa contratista.'], answer: 0, why: 'El agente es necesario: ser + participio + por. Con se no se suele añadir «por + agente».', en: 'The doer must appear: ser passive with por.' },
            { context: 'Sección de cocina. (Recipe section.)', prompt: '«Primero ___ las cebollas en cubos pequeños».', options: ['son cortadas', 'se cortan', 'se corta'], answer: 1, why: 'Receta: se pasivo, y concuerda con «las cebollas». Ser + participio no se usa en recetas.', en: 'Recipes use passive se, agreeing with the noun.' },
            { context: 'Cartel dentro del ascensor. (Sign inside the funicular.)', prompt: '«___ a los pasajeros que no se apoyen en la puerta».', options: ['Son rogados', 'Se ruega', 'Se ruegan'], answer: 1, why: 'Con «a» + personas y «que…»: impersonal, singular.', en: 'Personal a plus a que-clause: impersonal singular.' },
            { context: 'Ignacio se lo cuenta a un amigo por teléfono. (Ignacio tells a friend on the phone.)', prompt: '«¿Supiste? ¡Por fin ___ el ascensor!»', options: ['fue abierto', 'se abrió por la municipalidad', 'abrieron'], answer: 2, why: 'Conversación: activa con 3.ª plural. Ser + participio suena a noticia; se + por agente se desaconseja.', en: 'Casual speech: the 3rd person plural active.' },
          ] },
        ] },
        { title: '¿Concuerda o no? · Agreement or not?', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'classify', title: 'Frases de la redacción · Newsroom sentences', categories: [
            { id: 'pas', label: 'Se pasivo · concuerda', tone: 'orange' },
            { id: 'imp', label: 'Se impersonal · singular fijo', tone: 'violet' },
          ], items: [
            { text: 'Se necesitan dos fotógrafos para el festival.', answer: 'pas', why: 'Fotógrafos cualquiera, sin «a»: sujeto plural, el verbo concuerda.' },
            { text: 'Se contrató a dos fotógrafas del puerto.', answer: 'imp', why: '«A dos fotógrafas» lleva «a»: singular fijo.' },
            { text: 'En verano se trabaja menos en la redacción.', answer: 'imp', why: 'Trabajar sin objeto: impersonal.' },
            { text: 'Las fotos antiguas se digitalizarán en marzo.', answer: 'pas', why: 'Las fotos es el sujeto: plural.' },
            { text: 'Cuando se es periodista, se duerme poco.', answer: 'imp', why: 'Ser y dormir sin sujeto: impersonal.' },
            { text: 'Se recomienda reservar con anticipación.', answer: 'imp', why: 'Se + infinitivo: singular fijo.' },
            { text: 'Se corrigió el error del pie de foto.', answer: 'pas', why: 'El error es el sujeto (singular): el verbo concuerda con él.' },
          ] },
        ] },
        { title: 'Revisa antes de publicar · Check before publishing', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Se entrevistaron a los dueños de los almacenes del cerro.', ok: false, options: ['Se entrevistó a los dueños de los almacenes del cerro.', 'Se entrevistaron los dueños a los almacenes del cerro.', 'Se entrevistaba a los dueños de los almacenes del cerro.'], answer: 0, why: 'Con «a» + personas no hay sujeto: singular, se entrevistó a.' },
            { sentence: 'Se arrienda oficinas con vista al mar.', ok: false, options: ['Arrienda se oficinas con vista al mar.', 'Se arriendan oficinas con vista al mar.', 'Se arriendan a oficinas con vista al mar.'], answer: 1, why: 'Oficinas es el sujeto: la norma recomienda concordar, se arriendan.' },
            { sentence: 'El nuevo mirador será inaugurado por la alcaldesa el viernes.', ok: true, why: 'Correcta: ser + participio que concuerda (inaugurado, con «el mirador») y agente con «por». Registro de noticia.' },
            { sentence: 'Los rieles se revisaron por los técnicos de la empresa.', ok: false, options: ['Los rieles se revisó por los técnicos de la empresa.', 'Los rieles se revisaron a los técnicos de la empresa.', 'Los técnicos de la empresa revisaron los rieles.'], answer: 2, why: 'Con se no se suele poner «por + agente». Si los técnicos importan, activa (o «fueron revisados por»).' },
            { sentence: 'La sopa es servida muy caliente.', ok: false, options: ['La sopa se sirve muy caliente.', 'La sopa se sirven muy caliente.', 'Se sirve a la sopa muy caliente.'], answer: 0, why: 'En presente, para una instrucción o un hábito, ser + participio suena forzado: se pasivo, se sirve.' },
            { sentence: 'En este cerro se viven tranquilos.', ok: false, options: ['En este cerro se vive tranquilo.', 'En este cerro se viven tranquilo.', 'En este cerro se vive tranquilos.'], answer: 0, why: 'Vivir no tiene objeto: impersonal, singular, y el adjetivo en masculino singular.' },
          ] },
        ] },
        { title: 'Dudas de Ignacio · Ignacio’s questions', blocks: [
          { kind: 'chat-fill', title: 'Mensajes con Rosa · Messages with Rosa', lines: [
            { who: 'Ignacio', text: 'Rosa, ¿cómo dejo este aviso? «___ guía turístico con inglés».', options: ['Se busca a', 'Se busca', 'Se buscan'], answer: 1, why: 'Un guía cualquiera, sin «a»: es el sujeto, en singular.' },
            { who: 'Rosa', text: 'Así está bien. Y el de la escuela de música: «___ clases de piano y guitarra».', options: ['Se ofrece', 'Se ofrecen a', 'Se ofrecen'], answer: 2, why: 'Clases es el sujeto: plural.' },
            { who: 'Ignacio', text: 'Otra: en el informe, ¿«___ a 120 comerciantes»?', options: ['fue consultado', 'se consultó', 'se consultaron'], answer: 1, why: 'Con «a» + personas: impersonal, singular.' },
            { who: 'Rosa', text: 'Sí, singular por la «a». Pero con ser, el participio concuerda: «120 comerciantes ___».', options: ['fue consultado', 'se consultaron a', 'fueron consultados'], answer: 2, why: 'Con ser hay sujeto (120 comerciantes): fueron consultados.' },
            { who: 'Ignacio', text: 'Última: «Desde que funciona el ascensor, en el cerro ___ más tranquilo».', options: ['se vive', 'se viven', 'es vivido'], answer: 0, why: 'Vivir sin objeto: se impersonal, singular.' },
            { who: 'Rosa', text: '¡Perfecto! Ya escribes como Valentina.' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['Se', 'buscan', 'fotografías', 'antiguas', 'del', 'ascensor.'], accept: ['Se buscan fotografías antiguas del ascensor.'], en: 'Old photographs of the funicular wanted.' },
            { tiles: ['entrevistó', 'Se', 'a', 'cien', 'vecinos', 'del', 'cerro.'], accept: ['Se entrevistó a cien vecinos del cerro.'], en: 'A hundred residents of the hill were interviewed.' },
            { tiles: ['fue', 'El', 'mirador', 'restaurado', 'por', 'la', 'municipalidad.'], accept: ['El mirador fue restaurado por la municipalidad.'], en: 'The viewpoint was restored by the town council.' },
          ] },
        ] },
        { title: 'Cambia el registro · Change the register', blocks: [
          { kind: 'rewrite', title: 'Transforma · Transform', items: [
            { prompt: 'Los técnicos cambiaron los cables del ascensor.', instruction: 'Escríbelo con se, sin agente, para un aviso. (Use se, no agent.)', accept: ['Se cambiaron los cables del ascensor.', 'Los cables del ascensor se cambiaron.'] },
            { prompt: 'La municipalidad restauró las escaleras del cerro el año pasado.', instruction: 'Escríbelo con ser + participio y conserva el agente, como en una noticia. (Ser passive with agent.)', accept: ['Las escaleras del cerro fueron restauradas por la municipalidad el año pasado.', 'El año pasado las escaleras del cerro fueron restauradas por la municipalidad.', 'Las escaleras del cerro fueron restauradas el año pasado por la municipalidad.'] },
            { prompt: 'Encuestamos a doscientos estudiantes para el reportaje.', instruction: 'Escríbelo con se, para un informe. (Use se.)', accept: ['Se encuestó a doscientos estudiantes para el reportaje.', 'Para el reportaje se encuestó a doscientos estudiantes.'] },
            { prompt: 'Se arrienda piezas amuebladas cerca de la universidad.', instruction: 'Corrígelo según la norma culta. (Correct it.)', accept: ['Se arriendan piezas amuebladas cerca de la universidad.', 'Cerca de la universidad se arriendan piezas amuebladas.'] },
          ] },
          { kind: 'teacher', text: 'Si sobra tiempo: tu alumno toma una noticia breve de un diario de su país y la transforma en titular (se), en mensaje a un amigo (activa) y en frase de informe (ser + participio).' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'El Mirador al día', coach: 'Primero la idea general, luego los detalles. First the gist, then the details.',
      steps: [
        { title: 'El boletín del lunes · Monday’s bulletin', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: la idea general. Segunda escucha: tu alumno apunta cada forma que oye (activa, ser + participio, se pasivo, se impersonal). Después, las preguntas.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Apunta qué se hizo, quién lo hizo y qué se pide a los oyentes.' } },
          { kind: 'listen', title: 'El Mirador al día', channel: 'PÓDCAST · EL MIRADOR AL DÍA · VALENTINA HERRERA', src: '/audio/grammar-live/449.mp3',
            before: 'Valentina presenta el boletín del lunes. ¿Qué noticias crees que da y qué les pide a los oyentes? (Valentina presents Monday’s bulletin. What news do you think she gives, and what does she ask listeners for?)',
            gist: { prompt: '¿Qué contiene el boletín?', options: ['Solo el anuncio de una obra que empieza el mes que viene.', 'Una entrevista con la alcaldesa sobre el turismo.', 'La reapertura del ascensor, una petición a los oyentes y la receta de la semana.'], answer: 2, why: 'Da la noticia del ascensor, pide fotos y recuerdos, y anuncia la receta.', en: 'What does the bulletin contain?' },
            details: [
              { prompt: '¿Quién reabrió el ascensor?', options: ['La municipalidad.', 'Los vecinos del cerro.', 'Una empresa inglesa.'], answer: 0, why: '«El ascensor Las Gaviotas fue reabierto ayer por la municipalidad».', en: 'Who reopened the funicular?' },
              { prompt: '¿Qué se hizo durante las obras?', options: ['Se cambiaron los cables y se reforzaron los rieles.', 'Se construyó una estación nueva.', 'Se pintaron los vagones.'], answer: 0, why: '«Se cambiaron los cables y se reforzaron los rieles».', en: 'What was done during the works?' },
              { prompt: '¿A cuántas personas se entrevistó para el reportaje?', options: ['A más de cien vecinos.', 'A doscientos estudiantes.', 'A treinta comerciantes.'], answer: 0, why: '«Se entrevistó a más de cien vecinos».', en: 'How many people were interviewed for the feature?' },
              { prompt: '¿Qué pide el diario a los oyentes?', options: ['Que envíen recetas familiares.', 'Que compren la edición impresa.', 'Fotos antiguas y el contacto de quienes trabajaron en el ascensor.'], answer: 2, why: '«Se buscan fotografías antiguas… y también se busca a los vecinos que trabajaron en él».', en: 'What does the paper ask listeners for?' },
            ],
            transcript: 'Buenos días, les habla Valentina Herrera y esto es El Mirador al día, el resumen de las noticias del puerto. Empezamos con la buena noticia de la semana: después de ocho meses cerrado, el ascensor Las Gaviotas [[fue reabierto|teal]] ayer por la municipalidad. Las obras [[fueron financiadas|teal]] con fondos regionales y, según los técnicos, [[se cambiaron|orange]] los cables y [[se reforzaron|orange]] los rieles. Desde hoy [[se puede|violet]] subir al cerro otra vez por trescientos pesos. Para nuestro reportaje del domingo [[se entrevistó a|violet]] más de cien vecinos, y la conclusión es clara: en el cerro [[se vive|violet]] mejor cuando el ascensor funciona. Ahora, una petición. Para el archivo del diario [[se buscan|orange]] fotografías antiguas del ascensor, y también [[se busca a|violet]] los vecinos que trabajaron en él en los años setenta. Queremos contar su historia, así que escríbannos. Y para terminar, la receta de la semana: un pastel de choclo como el de la abuela de nuestra correctora, Rosa. Ya está en la web. Que tengan un buen lunes.',
            reply: { teacher: 'Tú eres un vecino del cerro que no escuchó el boletín. Tu alumno te lo resume en sus palabras, como en una conversación: «Reabrieron el ascensor…», «Se busca a…».', self: 'Resume el boletín en voz alta para un vecino que no lo escuchó, como en una conversación: «Reabrieron el ascensor…», «Están buscando…», «Se busca a…».' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Contar sin decir quién', coach: 'Elige la forma según con quién hablas. Choose the form for your listener.',
      steps: [
        { title: 'Noticias, recetas, avisos e informes · News, recipes, notices and reports', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas y las preguntas de seguimiento. Si tu alumno se equivoca en la concordancia, tú repites la frase bien y siguen.', self: 'Lee la situación y responde en voz alta. Antes de hablar, piensa: ¿importa el agente? ¿Hay «a»? ¿Qué tipo de texto es?' } },
          { kind: 'talk', cards: [
            { q: 'Piensa en una obra o un cambio reciente en tu ciudad. Cuéntaselo primero a un amigo y después como el primer párrafo de una noticia. · Tell a recent change in your city, first to a friend, then as a news lead.', followUps: ['¿Quién lo hizo? ¿Lo nombras en las dos versiones? (Do you name the doer both times?)', '¿Qué se cambió exactamente? (What exactly was changed?)', '¿Cuál sería el titular? (What would the headline be?)'], phrases: ['Por fin [[arreglaron|blue]]…', '… [[fue inaugurado por|teal]]…', '[[Se cambiaron|orange]] / [[se construyó|orange]]…', 'Titular: [[Se abre|orange]]…'], hint: 'Con el amigo, activa; en la noticia, ser + participio + por; en el titular, se.', example: 'A un amigo: «¿Sabías que por fin arreglaron la plaza?». En la noticia: «La plaza central fue renovada por la municipalidad tras seis meses de obras. Se plantaron árboles y se instalaron bancos nuevos». Titular: «Se reabre la plaza central».' },
            { q: 'Explica una receta típica de tu país, como en un libro de cocina. · Explain a typical recipe from your country, cookbook-style.', followUps: ['¿Qué se hace primero? (What do you do first?)', '¿Con qué se sirve? (What is it served with?)', '¿Hay algo que nunca se debe hacer? (Anything you must never do?)'], phrases: ['Primero [[se pelan|orange]]…', 'Después [[se agrega|orange]]…', '[[Se sirve|orange]] con…', '[[Se recomienda|violet]] + infinitivo'], hint: 'La cosa decide: se pela la papa / se pelan las papas.', example: 'Para el pastel de choclo, primero se muele el choclo con albahaca. Después se fríen la cebolla y la carne, y se agregan las aceitunas y el huevo duro. Todo se cubre con la pasta de choclo y se hornea media hora. Se recomienda servirlo con ensalada.', teacher: 'Atención a «se fríe la cebolla» / «se fríen las cebollas»: tu alumno decide por el sustantivo.' },
            { q: 'Dicta tres avisos clasificados para El Mirador: algo que se arrienda o se vende, personas que se necesitan y personas concretas que se buscan. · Dictate three classified ads.', followUps: ['¿Pones el verbo en plural? ¿Por qué? (Plural verb? Why?)', '¿Qué pasa si buscas a personas concretas? (And specific people?)'], phrases: ['[[Se arriendan|orange]] / [[se venden|orange]]…', '[[Se necesitan|orange]] + personas cualquiera', '[[Se busca a|violet]] + personas concretas'], hint: 'Sin «a», concuerda; con «a», singular.', example: 'Se venden dos bicicletas de montaña, casi nuevas. Se necesitan profesores de inglés para clases particulares. Se busca a la señora que encontró unas llaves en el ascensor el viernes.' },
            { q: 'Describe una encuesta o un estudio que hiciste en tu trabajo o tus estudios, en el estilo de un informe. · Describe a survey or study, report-style.', followUps: ['¿A quién se consultó? (Who was consulted?)', '¿Qué se observó? (What was observed?)', '¿Qué se recomienda ahora? (What is recommended now?)'], phrases: ['[[Se encuestó a|violet]]…', '[[Se observó|violet]] que…', 'Los datos [[fueron analizados|teal]]…', '[[Se recomienda|violet]]…'], hint: 'Con «a» + personas y con «que…»: singular.', example: 'En mi empresa se encuestó a ochenta empleados sobre el teletrabajo. Los datos fueron analizados por el equipo de recursos humanos. Se observó que la mayoría prefiere trabajar dos días desde casa, así que se recomienda un horario mixto.' },
            { q: '¿Cuándo es legítimo no decir quién hizo algo y cuándo es una forma de esconder responsabilidades? · When is hiding the doer fair, and when is it evasive?', followUps: ['¿Qué piensas cuando una empresa dice «se cometieron errores»? (What do you think of “mistakes were made”?)', '¿En qué textos te molesta? (Where does it bother you?)', '¿Se hace también en tu lengua? (Is it the same in your language?)'], phrases: ['Me parece normal en…', 'Cuando dicen «[[se tomaron|orange]] medidas», yo pregunto…', 'Prefiero que [[la empresa reconozca|blue]]…'], hint: 'Activa = responsabilidad clara; se = agente oculto, a veces a propósito.', example: 'En una receta o un cartel me parece normal: no importa quién. Pero cuando una empresa dice «se cometieron errores», me molesta, porque no dice quién se equivocó. Prefiero que la empresa diga «cometimos errores».', next: 'Ese uso del se para atenuar la responsabilidad es el tema de la clase 150.' },
          ], swap: { teacher: 'Al final cambian los papeles: tu alumno es el editor y tú le lees tres frases con errores (se entrevistaron a…, se arrienda casas, se reabrió por…); tu alumno las corrige y explica por qué.', self: 'Ahora eres el editor: escribe tres frases con un error típico (se + plural con «a», se + singular con plural, se + por agente) y corrígelas en voz alta.' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Una noticia para El Mirador', coach: 'Titular, noticia y registro. Headline, story and register.',
      steps: [
        { title: 'Tu noticia breve · Your short news piece', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos cada forma: ¿importa el agente? ¿Concuerda el verbo? ¿Hay «a»? Después tu alumno lee su noticia en voz alta, como en un pódcast.', self: 'Escribe tu noticia y toca «Revisar mi texto». Después revisa cada forma: ¿importa el agente? ¿Concuerda el verbo? ¿Hay «a»?' } },
          { kind: 'write', title: 'Noticia breve · Short news piece', situation: 'El Mirador abre una sección de noticias de lectores de otras ciudades. Escribe una noticia breve sobre una obra, un servicio nuevo o un cambio en tu barrio o tu ciudad, para los lectores del diario. (El Mirador is opening a section for readers’ news from other cities. Write a short piece about a project, a new service or a change where you live.)', task: [
            'Escribe un titular con se pasivo o con participio solo. (A headline with se or a bare participle.)',
            'Usa una pasiva con ser + participio que concuerde; con agente si importa. (One ser passive.)',
            'Explica qué se hizo con dos verbos de se pasivo, al menos uno en plural. (Two passive se verbs.)',
            'Incluye un se impersonal: se entrevistó a…, se espera que…, se vive… (One impersonal se.)',
            'Cita a una persona con una frase activa (La directora explicó que…). (One active sentence with a named doer.)',
          ], starters: ['Se reabre…', '… fue inaugurado ayer por…', 'Durante las obras se cambiaron…', 'Para esta nota se entrevistó a…', 'Se espera que…'], words: ['fue reabierto', 'fueron instalados', 'se cambiaron', 'se ampliaron', 'se publicarán', 'se entrevistó a', 'se espera que', 'se vive', 'explicó que'],
            model: 'Se reabre el mercado municipal de Los Aromos. Después de un año de obras, el mercado municipal de Los Aromos fue reabierto el sábado por la municipalidad. Durante la reforma se cambió el techo, se instalaron paneles solares y se ampliaron los pasillos para las personas con movilidad reducida. Los nuevos puestos fueron asignados por sorteo entre los comerciantes que ya trabajaban allí. Para esta nota se entrevistó a quince vendedores y a decenas de clientes, y la opinión es casi unánime: ahora se compra con más comodidad y la gente pasa más tiempo en el mercado. La directora, Carolina Vidal, explicó que en marzo abrirán una cafetería en el segundo piso. Se espera que el mercado reciba más visitantes en verano. Los nuevos horarios se publicarán esta semana en nuestra web.',
            minWords: 110,
            checks: [
              { label: 'Una pasiva con ser + participio (fue reabierto, fueron instalados…)', pattern: '(?<!\\p{L})(?:fue|fueron|ha\\s+sido|han\\s+sido|será|serán)\\s+\\p{L}+(?:ad|id|iert|uest|ech|ich|ist|it)(?:o|a|os|as)(?!\\p{L})', tip: 'Escribe, por ejemplo: «El parque fue inaugurado por la alcaldesa».' },
              { label: 'Un se pasivo en plural (se instalaron, se publicarán…)', pattern: '(?<!\\p{L})se\\s+\\p{L}+(?:an|en|aron|ieron|arán|erán|irán)(?!\\p{L})', tip: 'Escribe, por ejemplo: «Se instalaron bancos nuevos».' },
              { label: 'Un se impersonal (se entrevistó a…, se espera que…, se vive…)', pattern: '(?<!\\p{L})se\\s+(?:vive|vivía|trabaja|está|estaba|espera\\s+que|cree\\s+que|calcula\\s+que|dice\\s+que|recomienda|entrevistó\\s+a|encuestó\\s+a|consultó\\s+a|invita\\s+a|informa\\s+a|busca\\s+a|atiende\\s+a|atendió\\s+a)(?!\\p{L})', tip: 'Escribe, por ejemplo: «Se entrevistó a veinte vecinos» o «Se espera que…».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})se\\s+(?:entrevistaron|encuestaron|consultaron|buscan|informan|informaron|atienden|atendieron|contrataron|invitaron)\\s+al?(?!\\p{L})', why: 'Con «a» + personas, el verbo va en singular: «se entrevistó a los vecinos», «se busca a los responsables».' },
              { pattern: '(?<!\\p{L})se\\s+(?:arrienda|alquila|vende|necesita|ofrece|instaló|cambió|publicará)\\s+(?!(?:antes|entonces|además|apenas|mientras|después)(?!\\p{L}))(?:\\p{L}+(?:os|as|es))(?!\\p{L})', why: 'Si el sustantivo es plural, el verbo concuerda: «se arriendan piezas», «se instalaron bancos».' },
              { pattern: '(?<!\\p{L})se\\s+\\p{L}+\\s+por\\s+(?:la|el|los|las)\\s+(?:municipalidad|alcalde|alcaldesa|empresa|ayuntamiento|gobierno|técnicos|obreros)(?!\\p{L})', why: 'Con se no se suele nombrar al agente con «por»: usa «fue reabierto por…» o la activa.' },
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
            { tone: 'blue', label: 'ACTIVA', formula: 'agente + verbo · 3.ª plural sin sujeto (oral)', example: 'La municipalidad reabrió el ascensor. · Reabrieron el ascensor.', caption: 'el agente importa, o conversación', en: 'Active: the doer matters; in speech, the 3rd person plural means “someone”.' },
            { tone: 'teal', label: 'SER + PARTICIPIO', formula: 'sujeto + ser + participio (concuerda) + por + agente', example: 'Las obras fueron financiadas por la región.', caption: 'noticias, informes, historia', en: 'Ser passive: written, formal; it can name the doer with por.' },
            { tone: 'orange', label: 'SE PASIVO', formula: 'se + verbo que concuerda con el sustantivo (sin «a»)', example: 'Se arriendan piezas. · Se necesitan guías.', caption: 'titulares, recetas, avisos', en: 'Passive se: the verb agrees with the noun; no agent with por.' },
            { tone: 'violet', label: 'SE IMPERSONAL', formula: 'se + verbo en singular (sin objeto · a + personas · infinitivo · que)', example: 'Se vive bien. · Se entrevistó a cien vecinos.', caption: 'nunca plural con «a»', en: 'Impersonal se: always singular, never plural with personal a.' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Tres preguntas: **¿importa el agente?** → activa o ser + participio + por. **¿Hay un sustantivo sin «a»?** → se pasivo, que concuerda («se arriendan piezas», aunque en carteles veas el singular). **¿No hay nada que concuerde?** → se impersonal en singular. Y después: **¿qué texto escribo?**', en: 'Three questions: does the doer matter? Is there a noun without personal a? Is there nothing to agree with? Then choose by text type.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/portrait.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: '«En las playas de la región ___ banderas rojas cuando hay oleaje».', options: ['se ponen a', 'se ponen', 'se pone'], answer: 1, why: 'Banderas es el sujeto: plural.', en: '“Red flags are put up on the region’s beaches when the sea is rough.”' },
            { prompt: '«Para el estudio ___ a cuarenta familias del puerto».', options: ['se entrevistó', 'se entrevistaron', 'entrevistó se'], answer: 0, why: 'Con «a» + personas: singular fijo.', en: '“Forty families from the port were interviewed for the study.”' },
            { prompt: '«Cuando ___ joven, todo parece posible».', options: ['se son', 'es se', 'se es'], answer: 2, why: 'Ser sin sujeto: se impersonal, singular.', en: '“When you’re young, everything seems possible.”' },
            { prompt: 'Informe: «El acuerdo ___ por los dos sindicatos».', options: ['fue firmado', 'se firmó', 'fue firmada'], answer: 0, why: 'Con agente (por los dos sindicatos): ser + participio, que concuerda con «el acuerdo».', en: 'Report: “The agreement was signed by both unions.”' },
            { prompt: 'Aviso cuidado: «___ departamentos con estacionamiento».', options: ['Arriendan se', 'Se arriendan', 'Se arrienda'], answer: 1, why: 'La norma recomienda concordar con departamentos: se arriendan.', en: 'Careful notice: “Flats with parking to rent.”' },
          ] },
        ] },
        { title: 'Otra situación · A new situation', mascot: '/autoestudio/mascot/noting.webp', blocks: [
          { kind: 'lead', text: 'Cartagena, Colombia. **Lucía Méndez** escribe la memoria anual de un museo de historia. Su compañero le pasa notas escritas con «nosotros», pero el informe debe ser impersonal.', en: 'Cartagena, Colombia. Lucía Méndez is writing a history museum’s annual report. Her colleague’s notes are written with “we”, but the report must be impersonal.' },
          { kind: 'rewrite', title: 'La memoria del museo · The museum’s annual report', items: [
            { prompt: 'Restauramos doce cuadros coloniales.', instruction: 'Escríbelo con se. (Use se.)', accept: ['Se restauraron doce cuadros coloniales.', 'Doce cuadros coloniales se restauraron.'] },
            { prompt: 'Atendimos a más de cuatro mil escolares.', instruction: 'Escríbelo con se. Cuidado con la «a». (Watch the a.)', accept: ['Se atendió a más de cuatro mil escolares.'] },
            { prompt: 'El Ministerio de Cultura financió la nueva sala.', instruction: 'Pásalo a ser + participio y conserva el agente. (Ser passive with agent.)', accept: ['La nueva sala fue financiada por el Ministerio de Cultura.'] },
          ] },
        ] },
        { title: 'Ampliación: textos oficiales · Extension: official texts', mascot: '/brand/mascot/studying.webp', coach: 'Opcional: tres detalles de registro. Optional: three register details.', blocks: [
          { kind: 'lead', text: 'Tres detalles de los textos oficiales: **se les** + verbo en avisos a personas («A los usuarios **se les informa** que…»); **se pueden / se deben + infinitivo + plural**, donde la norma prefiere la concordancia («**Se pueden** consultar las fechas»), aunque el singular también se documenta; y **por** que no es agente: «El presupuesto se aprobó **por unanimidad**» es correcto, porque «por unanimidad» indica cómo, no quién.', en: 'Three details of official texts: se les + verb when addressing people; modal + infinitive + plural noun, where agreement is preferred in careful writing although the singular is also found; and por phrases that express manner, not a doer, which are fine with se.' },
          { kind: 'choice', title: 'Elige la forma · Choose the form', items: [
            { prompt: 'Aviso: «A los pasajeros ___ que el ascensor cerrará a las once».', options: ['se informan', 'les se informa', 'se les informa'], answer: 2, why: 'Se impersonal + les (a los pasajeros): el orden es siempre se + les, y el verbo en singular.', en: 'Notice: “Passengers are informed that the funicular will close at eleven.”' },
            { prompt: 'Web del diario, registro cuidado: «En nuestra web ___ consultar todas las ediciones anteriores».', options: ['pueden se', 'se pueden', 'se puede a'], answer: 1, why: 'Con poder + infinitivo + plural (las ediciones), la norma prefiere la concordancia.', en: 'With a modal + infinitive + plural noun, careful writing prefers agreement.' },
            { prompt: '¿Qué frase es correcta y natural?', options: ['La propuesta se aprobaron por unanimidad.', 'La propuesta se aprobó por unanimidad.', 'La propuesta se aprobó por el concejo.'], answer: 1, why: '«Por unanimidad» dice cómo, no quién. Con el concejo como agente: «fue aprobada por el concejo».', en: 'Por unanimidad expresses manner, not a doer, so it is fine with se.' },
            { prompt: 'Comunicado de una empresa: «Lamentablemente, ___ algunos errores en la factura».', options: ['se cometieron', 'se cometió a', 'fueron cometido'], answer: 0, why: 'Se pasivo plural (errores). Fíjate: así la empresa no dice quién se equivocó; lo verás en la clase 150.', en: 'Passive se hides who made the mistakes: the topic of the next class.' },
          ] },
          { kind: 'teacher', text: 'Paso opcional, para alumnos fuertes o si sobra tiempo. Extra: tu alumno redacta un aviso oficial de tres líneas con «se les informa», «se pueden + infinitivo» y una pasiva con ser.' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 150 · Se accidental y responsabilidad atenuada', text: 'Ya sabes elegir entre nombrar al agente y ocultarlo según el texto. El paso natural: el **se** que presenta un hecho como algo que «pasó solo» y suaviza la responsabilidad: «**Se me rompió** el vaso», «**Se nos olvidó** avisar».', en: 'You can now choose between naming the doer and hiding it depending on the text. The natural next step is the se that presents events as accidents and softens responsibility: “the glass broke on me”, “we forgot”.', href: '/gramatica/se-accidental-y-responsabilidad-atenuada', label: 'Ir a la clase 150' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Por qué el titular dice “Se reabre el ascensor” y el cuerpo de la noticia “fue reabierto por la municipalidad”?». Respuesta esperada: el titular busca brevedad y no necesita agente; la noticia sí lo nombra, y con se no se suele poner «por + agente».' },
        ] },
      ],
    },
  ],
};
