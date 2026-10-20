import type { LiveLesson } from '../types';

/**
 * Lesson 419 · B1 · Se pasivo y se impersonal introductorio (course unit G119).
 * Builds on G076 (lesson 376, A2: se + verb in recipes, rules and signs, se
 * corta / se cortan, (no) se puede + infinitive), G031/G060 (reflexive se),
 * G064 (se lo = le + lo) and G118 (dijo que). The B2 classes G148 (lesson 232,
 * ser + participio) and G149 (se pasivo / impersonal / activo) come later.
 * Scene: the neighbourhood association of San Roque, a seaside barrio in
 * Valencia (Spain). Carmen Soler coordinates it; Rubén Pardo, a volunteer,
 * tidies the noticeboard and writes a welcome guide; Lena Fischer, a German
 * nurse who has just moved in, asks how things work. In the voice message
 * Carmen (Spanish voice, tú) explains the town-hall registration and the bins.
 * Content: two names for what the learner already uses. Pasiva refleja: se +
 * verb agreeing with the thing (se vende piso / se venden pisos, se habla
 * inglés, se buscan camareros = any waiters, no «a»). Impersonal se: no thing
 * that agrees → always singular (se vive bien, se cena tarde; se + a + specific
 * people: se busca a los dueños); infinitive or que… → singular (se prohíbe
 * fumar, se dice que). Signs (se ruega silencio), processes (se pide cita, se
 * llevan los papeles), other tenses (se inauguró). Alternatives: 3rd plural
 * (dicen que, tardan), uno (obligatory with verbs that already carry se: uno
 * se acostumbra), generic tú. Contrast: reflexive/pronominal se (se mudó) and
 * se = le (se lo explico). Mistakes: *se vende pisos, *se venden casa, *se
 * buscan a los dueños, *se viven bien, *se prohíben aparcar, *se se levanta.
 * Ser + participio only for recognition (Ampliación), with «se ruega que» +
 * subjunctive (G096) and «se les informa» in formal notices.
 */
export const lesson: LiveLesson = {
  id: 419,
  level: 'B1',
  title: 'Se pasivo y se impersonal introductorio',
  subtitle: 'Hablar de lo que se hace en un lugar sin decir quién: «se venden pisos», «aquí se vive bien», «se busca a los dueños», «dicen que…».',
  legend: [
    { tone: 'orange', label: 'SE PASIVO · se + verbo que concuerda con la cosa: se vende piso, se venden pisos (the verb agrees with the thing)' },
    { tone: 'blue', label: 'SE IMPERSONAL · siempre singular: se vive bien, se busca a los dueños, se prohíbe fumar (no plural thing: singular)' },
    { tone: 'teal', label: 'OTRAS FORMAS · dicen que, uno se acostumbra, tú genérico (other ways to say “people”)' },
    { tone: 'violet', label: 'OTRO SE · reflexivo (se mudó) y se = le (se lo explico) (a different se)' },
  ],
  stages: [
    {
      id: 'entender', label: 'Entender', icon: '✎', mascot: '/brand/mascot/pointing.webp',
      title: 'Lo que se hace, sin decir quién', coach: 'Lo importante es la acción, no la persona. The action matters, not the person.',
      steps: [
        { title: 'El tablón del barrio · The neighbourhood noticeboard', blocks: [
          { kind: 'lead', text: 'Valencia, barrio de San Roque, junto al mar. **Carmen Soler** coordina la asociación de vecinos y **Rubén Pardo** es voluntario. Hoy ordenan el tablón de anuncios y preparan una guía para los vecinos nuevos, como **Lena Fischer**, una enfermera alemana que acaba de llegar. En el tablón casi nadie dice quién hace las cosas: todo va con **se**.', en: 'Valencia, the San Roque district, by the sea. Carmen Soler runs the residents’ association and Rubén Pardo is a volunteer. Today they are sorting out the noticeboard and preparing a guide for new residents, like Lena Fischer, a German nurse who has just arrived. On the noticeboard almost nobody says who does things: everything uses se.' },
          { kind: 'table', title: 'En el tablón · On the noticeboard', head: ['Anuncio', 'En inglés'], rows: [
            ['[[Se vende|orange]] piso con terraza.', 'Flat with terrace for sale.'],
            ['[[Se alquilan|orange]] dos plazas de garaje.', 'Two parking spaces to rent.'],
            ['[[Se busca a|blue]] los dueños de un gato gris.', 'Looking for the owners of a grey cat.'],
            ['En el patio [[se ruega|orange]] silencio a partir de las once.', 'Quiet in the courtyard after 11 p.m., please.'],
            ['En San Roque [[se vive|blue]] bien: ¡ven a conocernos!', 'Life is good in San Roque: come and meet us!'],
          ], note: '«Piso» es la palabra de España; en gran parte de América se dice «departamento» o «apartamento». (Piso = flat in Spain.)' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«Se vende piso con terraza». ¿Quién vende el piso?', options: ['Carmen, la coordinadora.', 'No se dice: lo importante es el piso.', 'Los vecinos nuevos.'], answer: 1, why: 'El anuncio no dice quién vende: con «se», lo importante es la acción y la cosa.', en: '“Flat for sale.” Who is selling the flat?' },
            { prompt: '«En San Roque se vive bien» habla de…', options: ['cómo es la vida en el barrio para cualquier persona.', 'una persona concreta que vive en San Roque.', 'algo que pasó ayer.'], answer: 0, why: 'Es una afirmación general: la vida en el barrio, para todos.', en: '“Life is good in San Roque” is about…' },
          ] },
        ] },
        { title: 'Se pasivo: el verbo mira la cosa · Passive se: the verb looks at the thing', mascot: '/brand/mascot/studying.webp', coach: 'Una cosa, singular; varias, plural. One thing, singular; several, plural.', blocks: [
          { kind: 'concept', tone: 'orange', label: 'SE PASIVO (PASIVA REFLEJA)', question: '¿Qué se vende? ¿Qué se alquila?', en: 'Passive se: se + verb in the 3rd person, and the verb agrees with the thing (it is grammatically the subject). One thing → singular; several → plural. English often uses a passive (“is sold”) or “for sale / to rent”.', formula: ['se + verbo en 3.ª persona singular + una cosa', 'se + verbo en 3.ª persona plural + varias cosas'],
            meaning: 'En la clase 076 ya usaste «se corta la cebolla / se cortan los tomates». Hoy le ponemos nombre: es el **se pasivo**. La cosa es el sujeto gramatical, por eso el verbo **concuerda** con ella, vaya antes o después. Sirve con todos los tiempos: «se vendió», «se venderán». Con personas cualquiera, sin «a», funciona igual: «**Se buscan** camareros» (cualquier camarero).',
            examples: [
              { es: 'En el mercado [[se venden|orange]] flores, fruta y pescado.', en: 'Flowers, fruit and fish are sold at the market.' },
              { es: 'Aquí [[se habla|orange]] inglés y alemán.', en: 'English and German spoken here.' },
              { es: 'Las bicicletas [[se dejan|orange]] en el patio, no en el portal.', en: 'Bikes are left in the courtyard, not in the entrance hall.' },
              { es: '[[Se necesita|orange]] un electricista para el edificio.', en: 'An electrician is needed for the building.' },
            ],
            note: 'Truco: pregunta «¿qué se vende?». Si la respuesta es plural (flores, fruta y pescado), el verbo va en plural.' },
          { kind: 'table', title: 'Una cosa o varias · One thing or several', head: ['Singular', 'Plural'], rows: [
            ['[[se vende|orange]] **una casa**', '[[se venden|orange]] **dos casas**'],
            ['[[se alquila|orange]] **habitación**', '[[se alquilan|orange]] **habitaciones**'],
            ['[[se arregló|orange]] **la farola**', '[[se arreglaron|orange]] **las aceras**'],
            ['[[se necesita|orange]] **un voluntario**', '[[se necesitan|orange]] **voluntarios**'],
          ], note: 'En los anuncios a menudo desaparece el artículo: «Se vende piso», «Se alquilan habitaciones». (Ads often drop the article.)' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Anuncio de la panadería: «___ pan de leña y empanadillas».', options: ['Vende se', 'Se vende', 'Se venden'], answer: 2, why: 'Pan y empanadillas: varias cosas → plural, se venden.', en: 'Bakery notice: “Wood-fired bread and pasties sold here.”' },
            { prompt: '«El año pasado ___ la plaza del barrio».', options: ['se renovaron', 'se renovó', 'se renueva'], answer: 1, why: 'La plaza: una cosa, y en pasado → se renovó.', en: '“Last year the neighbourhood square was renovated.”' },
          ] },
        ] },
        { title: 'Se impersonal: siempre singular · Impersonal se: always singular', mascot: '/autoestudio/mascot/noting.webp', coach: 'Sin cosa que concuerde, singular. No thing to agree with: singular.', blocks: [
          { kind: 'concept', tone: 'blue', label: 'SE IMPERSONAL', question: '¿Cómo se vive aquí?', en: 'Impersonal se: there is no thing for the verb to agree with, so the verb is always in the 3rd person singular. It describes what people in general do. With “a” + specific people, the verb stays singular too.', formula: ['se + verbo en singular (+ bien, tarde, mucho…)', 'se + verbo en singular + a + personas concretas'],
            meaning: 'A veces no hay ninguna cosa: solo la acción y cómo es. Entonces el verbo va **siempre en singular**: «Aquí **se cena** tarde», «En verano **se duerme** mal». También va en singular cuando el verbo lleva **a + personas concretas**: «**Se atiende a** los vecinos los martes» (los vecinos no son el sujeto, porque llevan «a»).',
            examples: [
              { es: 'En San Roque [[se vive|blue]] muy tranquilo.', en: 'Life in San Roque is very quiet.' },
              { es: 'En verano [[se cena|blue]] en la calle, con los vecinos.', en: 'In summer people have dinner outside, with the neighbours.' },
              { es: 'En la asociación [[se atiende a|blue]] los vecinos los martes por la tarde.', en: 'At the association, residents are seen on Tuesday afternoons.' },
              { es: '[[Se busca a|blue]] los testigos del accidente de la calle Mayor.', en: 'Witnesses to the accident on Calle Mayor are being sought.' },
            ],
            note: '**Con infinitivo o con «que…»**, el verbo también va en singular: «**Se prohíbe** aparcar», «**Se ruega** no hacer ruido», «**Se dice que** el alquiler va a subir».' },
          { kind: 'decide', title: '¿Singular o plural? · Singular or plural?', steps: [
            { q: '¿Hay una cosa o un grupo de cosas sin «a» (pisos, la fruta, camareros)?', yes: '**Se pasivo**: el verbo concuerda con esa cosa. «Se venden pisos», «Se vende fruta».', no: 'next' },
            { q: '¿Hay personas concretas con «a» (a los vecinos, a los dueños)?', yes: '**Singular**: «Se busca a los dueños», «Se atiende a los vecinos».', no: 'next' },
            { q: '¿No hay cosa, o hay un infinitivo o «que…»?', yes: '**Singular**: «Se vive bien», «Se prohíbe fumar», «Se dice que…».', no: 'Revisa la frase: ¿quién o qué es el sujeto?' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '«En este bar ___ muy bien y muy barato».', options: ['se come', 'come se', 'se comen'], answer: 0, why: 'No hay ninguna cosa: solo cómo es la comida allí. Singular, se come.', en: '“You eat very well and very cheaply in this bar.”' },
            { prompt: '«En el centro de salud ___ a los pacientes sin cita hasta las diez».', options: ['atienden se', 'se atienden', 'se atiende'], answer: 2, why: '«A los pacientes» lleva «a»: no es el sujeto. Singular, se atiende.', en: '“At the health centre, patients without an appointment are seen until ten.”' },
          ] },
        ] },
        { title: 'Otras formas de decir «la gente» · Other ways to say “people”', mascot: '/brand/mascot/speaking.webp', coach: 'Elige según el registro. Choose by register.', blocks: [
          { kind: 'compare', title: 'Tres alternativas a «se» · Three alternatives to se', columns: [
            { tone: 'teal', label: 'ELLOS · 3.ª plural', sentence: '[[Dicen que|teal]] van a abrir un cine en el puerto.', idea: 'Personas que no conocemos o no nombramos; el hablante no está incluido. Muy oral. Más formal: «se dice que».', en: 'They say a cinema is going to open at the port. (Unknown people; the speaker is not included.)' },
            { tone: 'teal', label: 'UNO · cualquier persona', sentence: 'Aquí [[uno se acostumbra|teal]] rápido al ruido.', idea: 'Cualquier persona, también yo. Es obligatorio cuando el verbo ya lleva se: nunca «se se acostumbra».', en: 'Here you get used to the noise quickly. (Anyone, including me.)' },
            { tone: 'teal', label: 'TÚ · genérico', sentence: 'En este barrio [[sales|teal]] de casa y [[ves|teal]] el mar.', idea: '«Tú» no es la persona que escucha: es cualquiera. Típico de la conversación informal.', en: 'In this district you step outside and you can see the sea. (Generic “you”.)' },
          ] },
          { kind: 'tip', icon: '💡', title: '¿Por qué «uno»? · Why “uno”?', text: 'Con verbos que ya llevan **se** (acostumbrarse, levantarse, aburrirse), no puedes poner otro se: *«Aquí se se levanta temprano». Dices: «Aquí **uno se levanta** temprano» o «Aquí **la gente se levanta** temprano». Algunas mujeres dicen «**una** se acostumbra».', en: 'With verbs that already have se (acostumbrarse, levantarse, aburrirse) you cannot add another se. Use uno (or la gente): “Aquí uno se levanta temprano.” Women often say “una”.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Lena quiere decir que la gente se aburre poco en el barrio: «Aquí ___ nunca».', options: ['se aburren', 'se se aburre', 'uno no se aburre'], answer: 2, why: 'Aburrirse ya lleva se: para hablar de cualquier persona usamos «uno se aburre».', en: 'Lena wants to say people never get bored in the district: “You never get bored here.”' },
            { prompt: '«___ que el mercado cierra en agosto». (Lo dicen los vecinos; Rubén no lo sabe seguro.)', options: ['Dice', 'Digo', 'Dicen'], answer: 2, why: '3.ª plural impersonal: «dicen que» = la gente dice; el hablante no está incluido.', en: '“They say the market closes in August.”' },
          ] },
        ] },
        { title: '¿Qué «se» es? · Which se is it?', mascot: '/brand/mascot/seated.webp', coach: '¿Hay una persona concreta? Is there a specific person?', blocks: [
          { kind: 'compare', title: 'Tres «se» diferentes · Three different se', columns: [
            { tone: 'violet', label: 'REFLEXIVO / PRONOMINAL', sentence: 'Lena [[se mudó|violet]] al barrio en septiembre.', idea: 'Hay una persona concreta (Lena) y el verbo es mudarse. Se cambia con la persona: me mudé, te mudaste.', en: 'Lena moved to the district in September. (A specific person; the se changes with the person.)' },
            { tone: 'violet', label: 'SE = LE', sentence: 'La guía, Rubén [[se la|violet]] da a los vecinos nuevos.', idea: 'Le + la → se la. Aquí se significa «a ellos».', en: 'Rubén gives the guide to new residents. (se = le/les before lo, la, los, las.)' },
            { tone: 'orange', label: 'SE PASIVO / IMPERSONAL', sentence: 'En la asociación [[se reparte|orange]] una guía a los vecinos nuevos.', idea: 'No hay persona: no importa quién la reparte.', en: 'A guide is handed out to new residents at the association. (No person: who does it does not matter.)' },
          ] },
          { kind: 'tip', icon: '🔎', title: 'Solo para reconocer: ser + participio · Recognition only', text: 'En textos escritos y noticias verás también «El mercado **fue inaugurado** en 1931». Significa lo mismo que «El mercado **se inauguró** en 1931». En la conversación es mucho más frecuente la forma con se. La pasiva con «ser» la trabajas en B2.', en: 'In written texts and the news you will also see ser + past participle: “El mercado fue inaugurado en 1931” (= was opened). In speech, se is far more common. You will practise the ser passive at B2.' },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: '¿En qué frase «se» es pasivo o impersonal?', options: ['Rubén se levanta a las siete.', 'Se lo explico mañana a Lena.', 'En el bar se sirven tapas hasta las doce.'], answer: 2, why: '«Se sirven tapas»: no hay persona, y el verbo concuerda con las tapas. En las otras hay una persona concreta.', en: 'In which sentence is se passive or impersonal?' },
            { prompt: '«Los folletos, Carmen ___ a los vecinos mañana». (She sends them to them.)', options: ['se los manda', 'le los manda', 'se mandan'], answer: 0, why: 'Les + los → se los. Aquí se = «a los vecinos». «Se mandan» no tiene persona, y aquí la persona es Carmen.', en: '“Carmen is sending the leaflets to the residents tomorrow.”' },
          ] },
        ] },
        { title: 'Errores frecuentes · Common mistakes', mascot: '/brand/mascot/standing-crossed.webp', coach: '¿Hay cosa? ¿Hay «a»? Is there a thing? Is there an «a»?', blocks: [
          { kind: 'guide', text: { teacher: 'Tú lees la frase con el error y tu alumno dice qué falla y por qué antes de ver la corrección.', self: 'Lee cada frase, busca el error y explícalo en voz alta antes de ver la corrección. (Find the mistake and explain it.)' } },
          { kind: 'mistakes', title: '¿Dónde está el error? · Where is the mistake?', items: [
            { wrong: 'Se vende pisos en este edificio.', right: 'Se venden pisos en este edificio.', why: 'Pisos es plural y no lleva «a»: el verbo concuerda, se venden. (Plural thing → plural verb.)' },
            { wrong: 'Se venden casa con jardín.', right: 'Se vende casa con jardín.', why: 'Una casa: singular. El anuncio no lleva artículo, pero la cosa sigue siendo singular.' },
            { wrong: 'Se buscan a los dueños del gato.', right: 'Se busca a los dueños del gato.', why: 'Con «a» + personas concretas, el verbo va en singular: se busca a… (With “a” + people: singular.)' },
            { wrong: 'En mi barrio se viven muy bien.', right: 'En mi barrio se vive muy bien.', why: 'No hay ninguna cosa que concuerde: impersonal, siempre singular.' },
            { wrong: 'Se prohíben aparcar delante del garaje.', right: 'Se prohíbe aparcar delante del garaje.', why: 'Con un infinitivo, el verbo va en singular. (Infinitive → singular.)' },
            { wrong: 'En el hospital se se levanta muy temprano.', right: 'En el hospital uno se levanta muy temprano.', why: 'Levantarse ya lleva se: para hablar de cualquier persona, «uno se levanta» o «la gente se levanta».' },
          ] },
          { kind: 'choice', title: 'Comprueba · Check', items: [
            { prompt: 'Cartel de la asociación: «___ a los vecinos a la fiesta del sábado».', options: ['Se invita', 'Invitan se', 'Se invitan'], answer: 0, why: 'A los vecinos: personas con «a» → singular, se invita.', en: 'Association poster: “Residents are invited to Saturday’s party.”' },
            { prompt: 'Anuncio: «___ clases de valenciano para adultos».', options: ['Se ofrecer', 'Se ofrece', 'Se ofrecen'], answer: 2, why: 'Clases: varias cosas, sin «a» → se ofrecen.', en: 'Notice: “Valencian classes for adults available.”' },
          ] },
          { kind: 'teacher', text: 'Cierre de Entender: tu alumno dice dos anuncios con se pasivo (uno singular y uno plural) y dos frases con se impersonal sobre su ciudad («En mi ciudad se cena…», «Se trabaja…»).' },
        ] },
      ],
    },
    {
      id: 'explorar', label: 'Explorar', icon: '🔎', mascot: '/brand/mascot/walking.webp',
      title: 'Una vecina nueva', coach: 'Toca las expresiones marcadas. Tap the marked expressions.',
      steps: [
        { title: 'En la asociación de vecinos · At the residents’ association', blocks: [
          { kind: 'guide', text: { teacher: 'Leen el diálogo con papeles: tú eres Carmen y Lena; tu alumno es Rubén. Después tu alumno toca cada forma marcada y dice qué tipo de se es.', self: 'Lee el diálogo en voz alta. Después toca cada forma marcada y di qué tipo es: se pasivo, se impersonal, otra forma u otro se.' } },
          { kind: 'explore', title: 'El tablón y la guía', setting: 'Jueves por la tarde en el local de la asociación de vecinos de San Roque. Carmen y Rubén ordenan el tablón de anuncios. Después entra Lena, la vecina nueva.', lines: [
            { who: 'Carmen', text: 'Rubén, mira cuántos anuncios: «[[Se vende|orange]] piso con terraza», «[[Se alquilan|orange]] dos plazas de garaje»… Hay que ordenar todo esto.', en: 'Rubén, look how many ads: “Flat with terrace for sale”, “Two parking spaces to rent”… We need to sort all this out.' },
            { who: 'Rubén', text: 'Y este del bar de la esquina: «[[Se buscan|orange]] camareros para el verano». Ese lo dejo, ¿no?', en: 'And this one from the bar on the corner: “Waiters wanted for the summer.” I’ll leave that one up, right?' },
            { who: 'Carmen', text: 'Sí, ese sí. ¿Y el del gato? «[[Se busca a|blue]] los dueños de un gato gris».', en: 'Yes, that one stays. And the cat one? “Looking for the owners of a grey cat.”' },
            { who: 'Rubén', text: 'Ese ya no hace falta: el gato está en casa desde ayer. Oye, ¿y qué pongo en la guía de bienvenida?', en: 'That one isn’t needed any more: the cat has been home since yesterday. Hey, and what shall I put in the welcome guide?' },
            { who: 'Carmen', text: 'Lo práctico: cómo [[se pide|orange]] cita en el ayuntamiento y dónde [[se reciclan|orange]] las pilas. Y la norma del patio: «[[Se ruega|orange]] silencio a partir de las once».', en: 'The practical stuff: how you make an appointment at the town hall and where batteries are recycled. And the courtyard rule: “Quiet after 11 p.m., please.”' },
            { who: 'Lena', text: 'Hola, buenas tardes. ¿Es aquí la asociación de vecinos?', en: 'Hello, good afternoon. Is this the residents’ association?' },
            { who: 'Carmen', text: '¡Hola, Lena! Pasa, pasa. Rubén, esta es Lena: [[se mudó|violet]] a mi edificio la semana pasada.', en: 'Hi, Lena! Come in, come in. Rubén, this is Lena: she moved into my building last week.' },
            { who: 'Lena', text: 'Encantada. Estoy muy contenta, pero todo es muy distinto. ¡Aquí [[se cena|blue]] tardísimo!', en: 'Nice to meet you. I’m very happy, but everything is so different. People have dinner really late here!' },
            { who: 'Rubén', text: 'Es verdad, pero [[uno se acostumbra|teal]] enseguida. Y en este barrio [[se vive|blue]] muy bien: [[sales|teal]] de casa y en diez minutos estás en la playa.', en: 'That’s true, but you get used to it right away. And life is really good in this district: you step outside and in ten minutes you’re on the beach.' },
            { who: 'Lena', text: 'Eso me han dicho. ¿Y qué lengua [[se habla|orange]] en el mercado? Quiero ir el sábado.', en: 'So I’ve heard. And what language is spoken at the market? I want to go on Saturday.' },
            { who: 'Carmen', text: 'Allí [[se hablan|orange]] las dos, valenciano y castellano. Y [[dicen que|teal]] es el mejor mercado de Valencia… aunque eso lo dice todo el barrio.', en: 'Both are spoken there, Valencian and Spanish. And they say it’s the best market in Valencia… although the whole district says that.' },
            { who: 'Rubén', text: 'Y si necesitas ayuda con el empadronamiento, pregúntame a mí: [[se lo|violet]] explico a todos los vecinos nuevos.', en: 'And if you need help registering at the town hall, just ask me: I explain it to all the new residents.' },
          ], notes: {
            'Se vende': '**Se pasivo** en singular: un piso. Es el anuncio más típico; sin artículo, como en muchos carteles.',
            'Se alquilan': '**Se pasivo** en plural: dos plazas de garaje. El verbo concuerda con la cosa.',
            'Se buscan': '**Se pasivo** en plural con personas: camareros cualquiera, sin «a». Por eso el verbo concuerda: se buscan camareros.',
            'Se busca a': '**Se impersonal**: «a los dueños» son personas concretas con «a», no el sujeto. Por eso el verbo va en singular: se busca a…',
            'se pide': '**Se pasivo** en singular: se pide (una) cita. Es el lenguaje de los trámites: cómo se hace algo, paso a paso.',
            'se reciclan': '**Se pasivo** en plural: las pilas. La cosa va después, pero manda igual.',
            'Se ruega': '**Se ruega** + nombre (silencio) o + infinitivo (no hacer ruido): fórmula típica de los carteles formales. Rogar = pedir con cortesía.',
            'se mudó': '**Otro se**: mudarse con una persona concreta, Lena. Cambia con la persona: me mudé, te mudaste, se mudó.',
            'se cena': '**Se impersonal**: no hay ninguna cosa, solo la costumbre. Siempre singular.',
            'uno se acostumbra': '**Uno** = cualquier persona. Acostumbrarse ya lleva se, así que no se puede decir «se se acostumbra».',
            'se vive': '**Se impersonal** con un adverbio (bien): cómo es la vida en el barrio para todos.',
            'sales': '**Tú genérico**: Rubén no habla de Lena; habla de cualquier persona. Muy frecuente en la conversación.',
            'se habla': '**Se pasivo** en singular: Lena pregunta por una lengua.',
            'se hablan': '**Se pasivo** en plural: las dos lenguas, valenciano y castellano.',
            'dicen que': '**3.ª persona plural impersonal**: «la gente dice». Carmen no se incluye. Un poco más formal: «se dice que».',
            'se lo': '**Se = le**: le + lo → se lo. Rubén explica el empadronamiento (lo) a los vecinos nuevos (se = les).',
          } },
          { kind: 'choice', title: '¿Entendiste? · Did you understand?', items: [
            { prompt: '¿Por qué quitan el anuncio del gato?', options: ['Porque el gato ya está en casa.', 'Porque nadie lo leyó.', 'Porque está prohibido poner anuncios de animales.'], answer: 0, why: 'Rubén dice: «el gato está en casa desde ayer».', en: 'Why do they take down the cat notice?' },
            { prompt: '¿Qué le sorprende a Lena del barrio?', options: ['Que no se habla castellano.', 'Que la gente cena muy tarde.', 'Que la playa está lejos.'], answer: 1, why: 'Lena dice: «¡Aquí se cena tardísimo!».', en: 'What surprises Lena about the district?' },
            { prompt: '¿Qué lenguas se hablan en el mercado?', options: ['Solo valenciano.', 'Castellano y alemán.', 'Valenciano y castellano.'], answer: 2, why: 'Carmen: «Allí se hablan las dos, valenciano y castellano».', en: 'Which languages are spoken at the market?' },
          ] },
        ] },
        { title: 'Clasifica las frases del barrio · Sort the district sentences', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'classify', title: '¿Qué forma es? · Which form is it?', categories: [
            { id: 'pas', label: 'Se pasivo · concuerda', tone: 'orange' },
            { id: 'imp', label: 'Se impersonal · singular fijo', tone: 'blue' },
            { id: 'alt', label: 'Otra forma · dicen, uno, tú', tone: 'teal' },
            { id: 'otro', label: 'Otro se · persona concreta', tone: 'violet' },
          ], items: [
            { text: 'En la fiesta del barrio se reparten bocadillos gratis.', answer: 'pas', why: 'Bocadillos: varias cosas, sin «a» → se reparten.' },
            { text: 'En la playa se está muy bien por la tarde.', answer: 'imp', why: 'No hay cosa: solo cómo se está. Singular.' },
            { text: 'Dicen que van a cerrar el cine viejo.', answer: 'alt', why: '«Dicen que»: personas que no conocemos; 3.ª plural impersonal.' },
            { text: 'Rubén se ducha después de correr por la playa.', answer: 'otro', why: 'Hay una persona concreta, Rubén: se reflexivo.' },
            { text: 'Se avisa a los vecinos por correo electrónico.', answer: 'imp', why: '«A los vecinos» lleva «a»: singular, se avisa.' },
            { text: 'Con el ruido de las motos uno no duerme bien.', answer: 'alt', why: '«Uno» = cualquier persona, también el hablante.' },
            { text: 'Las llaves del local se guardan en el bar de enfrente.', answer: 'pas', why: 'Las llaves van antes, pero el verbo concuerda: se guardan.' },
          ] },
          { kind: 'teacher', text: 'Pregunta extra: tu alumno transforma dos frases. «Se reparten bocadillos» → con una sola cosa («Se reparte un bocadillo»); «Dicen que van a cerrar el cine» → con se («Se dice que…»).' },
        ] },
      ],
    },
    {
      id: 'practicar', label: 'Practicar', icon: '✦', mascot: '/brand/mascot/studying.webp',
      title: 'Practicar', coach: 'Primero: ¿hay cosa? ¿Hay «a»? First: is there a thing? Is there an «a»?',
      steps: [
        { title: 'La guía de bienvenida · The welcome guide', blocks: [
          { kind: 'choice', items: [
            { context: 'Rubén escribe la sección de transporte. (Rubén writes the transport section.)', prompt: '«Los billetes de autobús ___ en los quioscos y en la app».', options: ['se compran', 'compran se', 'se compra'], answer: 0, why: 'Los billetes: varias cosas → se compran.', en: '“Bus tickets are sold at kiosks and on the app.”' },
            { context: 'Sección «Vida en el barrio». (“Life in the district” section.)', prompt: '«En San Roque ___ mucho en la calle: en las plazas, en las terrazas…».', options: ['se viven', 'se vive', 'vive se'], answer: 1, why: 'No hay cosa: es una costumbre. Impersonal, singular: se vive.', en: '“In San Roque people spend a lot of time outdoors.”' },
            { context: 'Sección de salud. (Health section.)', prompt: '«En el centro de salud ___ a los niños por la tarde».', options: ['se vacunar', 'se vacunan', 'se vacuna'], answer: 2, why: 'A los niños: personas con «a» → singular, se vacuna.', en: '“Children are vaccinated at the health centre in the afternoon.”' },
            { context: 'Sección de historia del barrio. (District history section.)', prompt: '«Las casas de los pescadores ___ hace más de cien años».', options: ['se construye', 'se construyó', 'se construyeron'], answer: 2, why: 'Las casas: plural, y un hecho terminado en el pasado → se construyeron.', en: '“The fishermen’s houses were built more than a hundred years ago.”' },
            { context: 'Normas del edificio. (Building rules.)', prompt: '«En la azotea no ___ hacer barbacoas».', options: ['se permite', 'se permiten', 'permiten se'], answer: 0, why: 'Con infinitivo (hacer), singular: se permite.', en: '“Barbecues are not allowed on the roof terrace.”' },
          ] },
        ] },
        { title: 'Más frases del tablón · More noticeboard sentences', mascot: '/brand/mascot/kneeling.webp', blocks: [
          { kind: 'classify', title: '¿Concuerda o va en singular? · Agreement or fixed singular?', categories: [
            { id: 'pas', label: 'Se pasivo · concuerda con la cosa', tone: 'orange' },
            { id: 'imp', label: 'Se impersonal · singular fijo', tone: 'blue' },
          ], items: [
            { text: 'Se regalan muebles en buen estado.', answer: 'pas', why: 'Muebles: varias cosas sin «a» → el verbo concuerda.' },
            { text: 'Se ayuda a las personas mayores con la compra.', answer: 'imp', why: '«A las personas mayores» lleva «a»: singular.' },
            { text: 'En el bar de Paco se come de maravilla.', answer: 'imp', why: 'No hay cosa: solo cómo se come. Singular.' },
            { text: 'Se organiza una excursión a la Albufera.', answer: 'pas', why: 'Una excursión: una cosa → singular, pero concuerda con ella.' },
            { text: 'Se ruega no dejar bolsas en el portal.', answer: 'imp', why: 'Con infinitivo (no dejar), singular fijo.' },
            { text: 'Se necesitan voluntarios para la fiesta.', answer: 'pas', why: 'Voluntarios cualquiera, sin «a»: el verbo concuerda en plural.' },
          ] },
        ] },
        { title: 'Corrige las frases · Correct the sentences', blocks: [
          { kind: 'fix', items: [
            { sentence: 'Se alquila habitaciones para estudiantes.', ok: false, options: ['Alquila se habitaciones para estudiantes.', 'Se alquilan habitaciones para estudiantes.', 'Se alquilan a habitaciones para estudiantes.'], answer: 1, why: 'Habitaciones: plural, sin «a» → se alquilan.' },
            { sentence: 'Se informan a los vecinos de que mañana no hay agua.', ok: false, options: ['Se informan los vecinos de que mañana no hay agua.', 'Se informa a los vecinos de que mañana no hay agua.', 'Informa se a los vecinos de que mañana no hay agua.'], answer: 1, why: 'Con «a» + personas, el verbo va en singular: se informa a los vecinos.' },
            { sentence: 'En la playa se prohíbe llevar perros en verano.', ok: true, why: 'Correcta: con infinitivo (llevar), singular. «Perros» va con «llevar», no con «se prohíbe».' },
            { sentence: 'En verano se cierran la piscina a las nueve.', ok: false, options: ['En verano se cierra la piscina a las nueve.', 'En verano se cierran a la piscina a las nueve.', 'En verano cierra se la piscina a las nueve.'], answer: 0, why: 'La piscina: una cosa, sin «a» → singular, se cierra.' },
            { sentence: 'En invierno se aburre uno un poco en el barrio.', ok: true, why: 'Correcta: aburrirse ya lleva se, por eso usamos «uno» como sujeto general.' },
          ] },
        ] },
        { title: 'Lena pregunta · Lena asks', blocks: [
          { kind: 'chat-fill', title: 'Mensajes con Rubén · Messages with Rubén', lines: [
            { who: 'Lena', text: 'Hola, Rubén. Una pregunta: ¿cómo ___ el abono de transporte?', options: ['se saca', 'se sacan', 'sacan se'], answer: 0, why: 'El abono: una cosa → singular, se saca.' },
            { who: 'Rubén', text: 'Muy fácil. ___ una foto y el DNI o el pasaporte en la oficina del metro.', options: ['Se llevan', 'Se llevar', 'Se lleva'], answer: 0, why: 'Una foto y el pasaporte: dos cosas → plural, se llevan.' },
            { who: 'Lena', text: '¿Y es caro?' },
            { who: 'Rubén', text: 'No mucho. Y ___ que el año que viene va a ser más barato.', options: ['dice', 'dicen', 'se dicen'], answer: 1, why: '«Dicen que» = la gente dice; 3.ª plural impersonal. «Se dicen» sería plural sin cosa plural.' },
            { who: 'Lena', text: '¡Genial! ¿Y para el polideportivo?' },
            { who: 'Rubén', text: 'Allí ___ a los vecinos del barrio con descuento. Pregunta en recepción.', options: ['se atiende', 'atiende se', 'se atienden'], answer: 0, why: 'A los vecinos: personas con «a» → singular, se atiende.' },
            { who: 'Lena', text: 'Gracias. Es que con tantos papeles ___ un poco.', options: ['se se pierde', 'uno se pierde', 'se pierden'], answer: 1, why: 'Perderse ya lleva se: para hablar de cualquier persona, «uno se pierde».' },
          ] },
        ] },
        { title: 'Construye frases · Build the sentences', blocks: [
          { kind: 'build', title: 'Ordena las palabras · Put the words in order', items: [
            { tiles: ['Se', 'venden', 'en', 'bicicletas', 'el', 'mercadillo.'], accept: ['Se venden bicicletas en el mercadillo.'], en: 'Bikes are sold at the flea market.' },
            { tiles: ['busca', 'a', 'Se', 'los', 'dueños', 'del', 'coche', 'blanco.'], accept: ['Se busca a los dueños del coche blanco.'], en: 'Looking for the owners of the white car.' },
            { tiles: ['vive', 'Aquí', 'se', 'tranquilo.', 'muy'], accept: ['Aquí se vive muy tranquilo.'], en: 'Life here is very peaceful.' },
          ] },
        ] },
        { title: 'Sin decir quién · Without saying who', blocks: [
          { kind: 'rewrite', title: 'Transforma · Transform', items: [
            { prompt: 'Los vecinos limpian la playa el primer domingo de cada mes.', instruction: 'Escríbelo con se, sin decir quién. (Write it with se.)', accept: ['Se limpia la playa el primer domingo de cada mes.', 'La playa se limpia el primer domingo de cada mes.', 'El primer domingo de cada mes se limpia la playa.'] },
            { prompt: 'En la tienda de Marisa venden periódicos y revistas.', instruction: 'Escríbelo con se. (Write it with se.)', accept: ['En la tienda de Marisa se venden periódicos y revistas.', 'Se venden periódicos y revistas en la tienda de Marisa.'] },
            { prompt: 'Aquí la gente se levanta tarde los domingos.', instruction: 'Cambia «la gente» por «uno». (Use uno.)', accept: ['Aquí uno se levanta tarde los domingos.', 'Los domingos aquí uno se levanta tarde.', 'Aquí los domingos uno se levanta tarde.'] },
            { prompt: 'Buscamos a la persona que perdió estas llaves.', instruction: 'Escríbelo como un cartel, con se. (Write it as a sign.)', accept: ['Se busca a la persona que perdió estas llaves.'] },
          ] },
          { kind: 'teacher', text: 'Si sobra tiempo: tu alumno escribe dos anuncios para el tablón de su propio edificio o trabajo, uno con se pasivo plural y otro con se + a + personas.' },
        ] },
      ],
    },
    {
      id: 'escuchar', label: 'Escuchar', icon: '🎧', mascot: '/brand/mascot/seated.webp',
      title: 'Un audio de Carmen', coach: 'Primero la idea general, luego los detalles. First the gist, then the details.',
      steps: [
        { title: 'Trámites y basura · Paperwork and rubbish', blocks: [
          { kind: 'guide', text: { teacher: 'Primera escucha: la idea general. Segunda escucha: tu alumno apunta los pasos y las normas. Después, las preguntas.', self: 'Escucha una vez para la idea general y otra vez para los detalles. Apunta los pasos del trámite y las normas de la basura.' } },
          { kind: 'listen', title: 'Un audio de Carmen', channel: 'MENSAJE DE VOZ · CARMEN, ASOCIACIÓN DE VECINOS', src: '/audio/grammar-live/419.mp3',
            before: 'Lena tiene que empadronarse y no sabe dónde se tiran algunas cosas. Carmen le manda un audio. ¿Qué crees que le explica? (Lena has to register at the town hall and doesn’t know where some things go in the bins. Carmen sends her a voice message. What do you think she explains?)',
            gist: { prompt: '¿Para qué manda Carmen el audio?', options: ['Para explicarle un trámite y las normas de la basura.', 'Para pedirle ayuda con un mueble.', 'Para invitar a Lena a una fiesta del barrio.'], answer: 0, why: 'Explica cómo se hace el empadronamiento y dónde se tiran las cosas.', en: 'Why does Carmen send the voice message?' },
            details: [
              { prompt: '¿Qué se lleva el día de la cita?', options: ['Solo el pasaporte.', 'Una foto y una carta del trabajo.', 'El pasaporte y el contrato del piso.'], answer: 2, why: '«Ese día se llevan el pasaporte y el contrato del piso, nada más».', en: 'What do you take on the day of the appointment?' },
              { prompt: '¿Por qué no hace falta llegar muy pronto?', options: ['Porque la oficina abre tarde.', 'Porque nunca hay gente.', 'Porque se atiende por orden de cita.'], answer: 2, why: '«Se atiende a la gente por orden de cita».', en: 'Why is there no need to arrive very early?' },
              { prompt: '¿Por qué es mejor pedir la cita esta semana?', options: ['Porque dicen que en septiembre hay mucha cola.', 'Porque en septiembre la oficina cierra.', 'Porque Carmen se va de vacaciones.'], answer: 0, why: '«Dicen que en septiembre hay muchísima cola».', en: 'Why is it better to book this week?' },
              { prompt: '¿Qué se hace con los muebles viejos?', options: ['Se llevan al mercado el sábado.', 'Se dejan junto al contenedor amarillo.', 'Se llama al ayuntamiento y vienen a buscarlos.'], answer: 2, why: '«No se dejan en la calle: se llama al ayuntamiento y vienen a buscarlos gratis».', en: 'What do you do with old furniture?' },
            ],
            transcript: 'Hola, Lena, soy Carmen, de la asociación. Te mando el audio que te prometí sobre el empadronamiento. Es más fácil de lo que parece. Primero [[se pide|orange]] cita en la web del ayuntamiento; por teléfono también [[se puede|blue]], pero tardan muchísimo en contestar. Ese día [[se llevan|orange]] el pasaporte y el contrato del piso, nada más. En la oficina [[se atiende a|blue]] la gente por orden de cita, así que no hace falta llegar muy pronto. Eso sí, [[dicen que|teal]] en septiembre hay muchísima cola, así que yo pediría la cita esta semana. Y lo de la basura, que me lo preguntaste el otro día: el vidrio [[se tira|orange]] en el contenedor verde y los envases, en el amarillo. Los muebles viejos no [[se dejan|orange]] en la calle: [[se llama|blue]] al ayuntamiento y vienen a buscarlos gratis. Al principio todo parece complicado, pero ya verás que [[uno se acostumbra|teal]] enseguida. ¡Y el sábado te espero en el mercado, que allí [[se come|blue]] de maravilla! Un beso.',
            reply: { teacher: 'Tú eres Lena. Tu alumno, como Carmen, te explica en sus palabras cómo se hace el empadronamiento y qué se hace con la basura, con se: «Primero se pide…», «El vidrio se tira…».', self: 'Eres Lena. Explícale en voz alta a una amiga que también es nueva cómo se hace el empadronamiento y qué se hace con la basura: «Primero se pide…», «Los muebles no se dejan…».' } },
        ] },
      ],
    },
    {
      id: 'conversar', label: 'Conversar', icon: '💬', mascot: '/brand/mascot/speaking.webp',
      title: 'Así se vive en mi ciudad', coach: 'Habla de costumbres, normas y trámites sin decir quién. Talk about customs, rules and procedures without saying who.',
      steps: [
        { title: 'Tu ciudad, tus normas, tus trámites · Your city, your rules, your procedures', blocks: [
          { kind: 'guide', text: { teacher: 'Tú haces las preguntas y las preguntas de seguimiento. Si tu alumno falla la concordancia, tú repites la frase bien y siguen.', self: 'Lee la situación y responde en voz alta. Antes de hablar, piensa: ¿hay una cosa que concuerda o va en singular? (Read and answer aloud.)' } },
          { kind: 'talk', cards: [
            { q: 'Lena acaba de llegar a tu ciudad. ¿Cómo se vive allí? ¿A qué hora se come y se cena? · Lena has just arrived in your city. What is life like? When do people eat?', followUps: ['¿Qué se hace los fines de semana? (What do people do at weekends?)', '¿Qué es lo que más le va a sorprender? (What will surprise her most?)', '¿Uno se acostumbra rápido? (Do you get used to it quickly?)'], phrases: ['En mi ciudad [[se vive|blue]]…', '[[Se come|blue]] / [[se cena|blue]] a las…', 'Los domingos [[se sale|blue]]…', 'Al principio cuesta, pero [[uno se acostumbra|teal]]…'], hint: 'Sin cosa → singular: se vive, se cena, se sale.', example: 'En mi ciudad se vive bastante bien, pero se trabaja mucho. Se come a la una y se cena a las ocho, más pronto que en Valencia. Los domingos se sale al parque o a la montaña. Al principio el clima cuesta un poco, pero uno se acostumbra.', next: '¿Qué se echa de menos cuando uno se va de tu ciudad? (What do you miss when you leave?)' },
            { q: '¿Qué normas hay en tu edificio, tu trabajo o tu escuela? ¿Cuáles te parecen bien y cuáles no? · What rules are there where you live, work or study?', followUps: ['¿Qué se prohíbe? (What is forbidden?)', '¿Qué se puede hacer sin pedir permiso? (What can you do without asking?)', '¿Qué norma cambiarías? (Which rule would you change?)'], phrases: ['[[Se prohíbe|blue]] + infinitivo', 'No [[se puede|blue]]…', '[[Se ruega|orange]] puntualidad / silencio', 'Las bicis [[se dejan|orange]]…'], hint: 'Infinitivo → singular: se prohíbe fumar. Cosa plural → plural: las bicis se dejan…', example: 'En mi trabajo se prohíbe comer en las mesas, y la comida se guarda en una cocina pequeña. Se puede trabajar desde casa dos días por semana. Las reuniones se hacen siempre por la mañana. Yo cambiaría una norma: se empieza demasiado temprano.', teacher: 'Si tu alumno dice «se prohíben fumar», tú repites «se prohíbe fumar» y señalas el infinitivo.' },
            { q: 'Explica un trámite de tu país paso a paso: sacar el carné de conducir, abrir una cuenta en el banco, renovar el pasaporte… · Explain a procedure from your country step by step.', followUps: ['¿Qué papeles se llevan? (What documents do you take?)', '¿Cuánto tiempo se tarda? (How long does it take?)', '¿Se puede hacer por internet? (Can it be done online?)'], phrases: ['Primero [[se pide|orange]] cita…', 'Después [[se rellenan|orange]] los formularios…', '[[Se paga|orange]] una tasa…', 'Al final [[se recibe|orange]]…'], hint: 'Pregunta «¿qué se pide? ¿qué se rellena?»: la cosa decide singular o plural.', example: 'Para renovar el pasaporte, primero se pide cita por internet. Ese día se llevan el pasaporte viejo y dos fotos, y se paga una tasa. Se tarda unos veinte minutos. El pasaporte nuevo se recibe en casa en dos semanas.' },
            { q: 'Di en voz alta tres anuncios para el tablón de tu barrio: algo que vendes, algo que buscas y una persona que buscas. · Say three noticeboard ads out loud.', followUps: ['¿Qué pones si son varias cosas? (What if there are several things?)', '¿Y si buscas a una persona concreta? (And if you are looking for a specific person?)'], phrases: ['[[Se vende|orange]] / [[se venden|orange]]…', '[[Se buscan|orange]] + personas cualquiera', '[[Se busca a|blue]] + persona concreta', '[[Se regalan|orange]]…'], hint: 'Personas cualquiera sin «a»: concuerda. Personas concretas con «a»: singular.', example: 'Se vende bicicleta de montaña, casi nueva. Se buscan profesores de guitarra para niños. Se busca a la vecina que encontró mis gafas en el parque: ¡gracias!', teacher: 'Contraste clave: «Se buscan profesores» (cualquiera) frente a «Se busca a la vecina que…» (una persona concreta).' },
            { q: '¿Qué dicen de tu ciudad o de tu barrio? ¿Es verdad? · What do people say about your city or district? Is it true?', followUps: ['¿Qué se dice de la comida? (What is said about the food?)', '¿Tú estás de acuerdo? (Do you agree?)', '¿Qué no se sabe fuera? (What do outsiders not know?)'], phrases: ['[[Dicen que|teal]]…', 'Se dice que…', 'Pero cuando [[vives|teal]] allí, [[ves|teal]] que…'], hint: '«Dicen que» es oral; «se dice que» suena un poco más formal. Las dos van con indicativo.', example: 'Dicen que en mi ciudad siempre llueve, y es un poco verdad. También se dice que la gente es fría, pero cuando vives allí, ves que no es así: la gente es tímida al principio, pero luego es muy amable.' },
          ], swap: { teacher: 'Al final cambian los papeles: tu alumno te pregunta cómo se vive en tu ciudad y qué trámite es más complicado allí; tú respondes con algún error de concordancia y tu alumno lo corrige.', self: 'Ahora imagina que Lena te pregunta por tu barrio: escribe tres preguntas con se («¿Dónde se compra…?», «¿Cómo se va…?», «¿Se puede…?») y respóndelas en voz alta.' } },
        ] },
      ],
    },
    {
      id: 'escribir', label: 'Escribir', icon: '✍', mascot: '/autoestudio/mascot/writing.webp',
      title: 'Una página para la guía', coach: 'Escribe para alguien que acaba de llegar. Write for someone who has just arrived.',
      steps: [
        { title: 'Bienvenido a mi barrio · Welcome to my district', blocks: [
          { kind: 'guide', text: { teacher: 'Se puede escribir en clase o como tarea. Revisan juntos cada forma con se: ¿hay una cosa que concuerda, una «a» o un infinitivo? Después tu alumno lee su texto en voz alta.', self: 'Escribe tu texto y toca «Revisar mi texto». Después revisa cada se: ¿hay una cosa que concuerda, una «a» o un infinitivo?' } },
          { kind: 'write', title: 'Guía de bienvenida · Welcome guide', situation: 'La asociación de vecinos de tu barrio (o de tu ciudad) prepara una guía para personas que acaban de llegar. Escribe tu página: cómo se vive allí, qué normas hay y cómo se hace un trámite. (Your residents’ association is preparing a guide for newcomers. Write your page: what life is like, the rules and how a procedure is done.)', task: [
            'Describe cómo se vive en tu barrio con dos frases con se impersonal (se vive, se come, se sale…). (Two impersonal se sentences.)',
            'Explica dónde se compran o se hacen cosas con dos verbos con se en plural (se venden, se reciclan…). (Two plural passive se verbs.)',
            'Escribe una norma con «se prohíbe», «se ruega» o «no se puede» + infinitivo. (One rule with an infinitive.)',
            'Explica un trámite en dos o tres pasos (primero se pide…, después…). (A procedure in steps.)',
            'Usa «dicen que» o «uno» una vez. (Use dicen que or uno once.)',
          ], starters: ['Bienvenidos a…', 'En mi barrio se vive…', 'En el mercado se venden…', 'Se ruega…', 'Para…, primero se pide…', 'Dicen que…'],
            words: ['se vive', 'se come', 'se sale', 'se venden', 'se reciclan', 'se tiran', 'se prohíbe', 'se ruega', 'no se puede', 'se pide', 'se llevan', 'se atiende a', 'dicen que', 'uno se acostumbra'],
            model: 'Bienvenidos a Los Almendros, un barrio pequeño al norte de la ciudad. Aquí se vive con calma: se sale mucho a la calle y por la tarde se pasea por el parque del río. En el mercado de la plaza se venden fruta, pan y pescado fresco, y los sábados se organizan conciertos al aire libre. Las pilas y el aceite usado se reciclan en el punto limpio, al lado del colegio. Una norma importante: en los portales se ruega no dejar bicicletas. Para apuntarse al polideportivo, primero se pide cita en la web; después se llevan una foto y el pasaporte, y se paga la cuota del mes. Dicen que el barrio es un poco aburrido, pero uno se acostumbra enseguida a la tranquilidad.',
            minWords: 100,
            checks: [
              { label: 'Un verbo con se en plural (se venden, se reciclan…)', pattern: '(?<!\\p{L})se\\s+(?:venden|reciclan|tiran|organizan|compran|llevan|alquilan|hacen|ofrecen|sirven|rellenan|celebran|necesitan|buscan|dejan|pagan|reparten|hablan)(?!\\p{L})', tip: 'Escribe, por ejemplo: «En el mercado se venden flores».' },
              { label: 'Una norma con infinitivo (se prohíbe / se ruega / no se puede + infinitivo)', pattern: '(?<!\\p{L})(?:se\\s+prohíbe|se\\s+ruega|no\\s+se\\s+puede|se\\s+permite)\\s+(?:no\\s+)?\\p{L}+(?:ar|er|ir)(?!\\p{L})', tip: 'Escribe, por ejemplo: «Se ruega no hacer ruido después de las once».' },
              { label: '«Dicen que» o «uno»', pattern: '(?<!\\p{L})(?:dicen\\s+que|uno|una\\s+se)(?!\\p{L})', tip: 'Escribe, por ejemplo: «Dicen que…» o «uno se acostumbra».' },
            ],
            warnings: [
              { pattern: '(?<!\\p{L})se\\s+(?:buscan|necesitan|atienden|ayudan|invitan|informan|avisan)\\s+al?(?!\\p{L})', why: 'Con «a» + personas, el verbo va en singular: «se busca a los dueños», «se atiende a los vecinos».' },
              { pattern: '(?<!\\p{L})se\\s+(?:prohíben|ruegan|permiten|pueden)\\s+(?:no\\s+)?\\p{L}+(?:ar|er|ir)(?!\\p{L})(?!\\s+(?:los|las|\\p{L}+s)(?!\\p{L}))', why: 'Con un infinitivo solo, el verbo va en singular: «se prohíbe aparcar», «se ruega no fumar».' },
              { pattern: '(?<!\\p{L})se\\s+(?:viven|cenan|trabajan|duermen\\s+bien|duermen\\s+mal)(?!\\p{L})', why: 'Sin una cosa que concuerde, el se impersonal va en singular: «se vive bien», «se cena tarde».' },
              { pattern: '(?<!\\p{L})se\\s+se(?!\\p{L})', why: 'No se pueden juntar dos se: con un verbo como acostumbrarse usa «uno se acostumbra» o «la gente se acostumbra».' },
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
            { tone: 'orange', label: 'SE PASIVO', formula: 'se + verbo que concuerda con la cosa', example: 'Se vende piso. · Se venden pisos. · Se buscan camareros.', caption: 'una cosa, singular; varias, plural', en: 'Passive se: the verb agrees with the thing (also with people “in general”, without a).' },
            { tone: 'blue', label: 'SE IMPERSONAL', formula: 'se + verbo en singular (sin cosa · a + personas · infinitivo · que)', example: 'Aquí se vive bien. · Se busca a los dueños. · Se prohíbe fumar.', caption: 'singular fijo', en: 'Impersonal se and se + infinitive: always singular, also with a + specific people.' },
            { tone: 'teal', label: 'OTRAS FORMAS', formula: 'dicen que · uno + verbo · tú genérico', example: 'Dicen que el mercado es el mejor. · Aquí uno se acostumbra.', caption: 'uno, obligatorio con verbos con se', en: 'Other ways to say “people”: 3rd plural, uno (needed with verbs that already have se), generic tú.' },
            { tone: 'violet', label: 'OTRO SE', formula: 'persona concreta + se + verbo · se = le', example: 'Lena se mudó. · Se lo explico.', caption: 'aquí sí hay una persona', en: 'A different se: a specific person (reflexive) or se replacing le before lo/la.' },
          ] },
          { kind: 'tip', icon: '🔑', title: 'La clave · The key', text: 'Antes de escribir el verbo, mira lo que va con él: **¿una cosa o varias sin «a»?** → concuerda (se vende / se venden). **¿Personas con «a», un infinitivo o nada?** → singular (se busca a…, se prohíbe fumar, se vive bien). **¿El verbo ya lleva se?** → usa «uno».', en: 'Before writing the verb, look at what goes with it: one or several things without “a” → agreement; people with “a”, an infinitive or nothing → singular; a verb that already has se → use uno.' },
        ] },
        { title: 'Desafío final · Final challenge', mascot: '/brand/mascot/portrait.webp', blocks: [
          { kind: 'choice', title: 'Cinco frases, sin ayuda · Five sentences, no help', items: [
            { prompt: '«___ coches de segunda mano».', options: ['Se compran', 'Se compra', 'Compran se'], answer: 0, why: 'Coches: varias cosas sin «a» → se compran.', en: '“We buy second-hand cars.”' },
            { prompt: '«En esta empresa ___ a los clientes con mucha amabilidad».', options: ['se tratan', 'se trata', 'tratan se'], answer: 1, why: 'A los clientes: personas con «a» → singular, se trata.', en: '“At this company, customers are treated very kindly.”' },
            { prompt: '«En los hospitales ___ hablar por el móvil en algunas zonas».', options: ['se prohíbe', 'prohíbe se', 'se prohíben'], answer: 0, why: 'Con infinitivo (hablar): singular, se prohíbe.', en: '“In hospitals, talking on your mobile is forbidden in some areas.”' },
            { prompt: '«En la montaña ___ muy pronto».', options: ['se se levanta', 'uno se levanta', 'se levantan uno'], answer: 1, why: 'Levantarse ya lleva se: uno se levanta.', en: '“In the mountains you get up very early.”' },
            { prompt: '«El año pasado ___ dos parques nuevos en mi ciudad».', options: ['se abrió', 'se abrieron', 'se abren'], answer: 1, why: 'Dos parques: plural, en pasado → se abrieron.', en: '“Last year two new parks were opened in my city.”' },
          ] },
        ] },
        { title: 'Otra situación · A new situation', mascot: '/autoestudio/mascot/noting.webp', blocks: [
          { kind: 'lead', text: 'Guadalajara, México. **Paola Ríos** dirige una escuela de idiomas y escribe las normas para los estudiantes nuevos. Su compañero **Hugo** le pasa sus notas, pero están escritas con «nosotros» y «ustedes».', en: 'Guadalajara, Mexico. Paola Ríos runs a language school and is writing the rules for new students. Her colleague Hugo gives her his notes, but they are written with “we” and “you”.' },
          { kind: 'rewrite', title: 'Las normas de la escuela · The school rules', items: [
            { prompt: 'Abrimos la biblioteca a las ocho.', instruction: 'Escríbelo con se, sin decir quién. (Write it with se.)', accept: ['Se abre la biblioteca a las ocho.', 'La biblioteca se abre a las ocho.', 'A las ocho se abre la biblioteca.'] },
            { prompt: 'Corregimos los exámenes en una semana.', instruction: 'Escríbelo con se. (Write it with se.)', accept: ['Se corrigen los exámenes en una semana.', 'Los exámenes se corrigen en una semana.', 'En una semana se corrigen los exámenes.'] },
            { prompt: 'Atendemos a los estudiantes nuevos en la recepción.', instruction: 'Escríbelo con se. Cuidado con la «a». (Watch the «a».)', accept: ['Se atiende a los estudiantes nuevos en la recepción.', 'En la recepción se atiende a los estudiantes nuevos.'] },
          ] },
        ] },
        { title: 'Ampliación: avisos formales · Extension: formal notices', mascot: '/brand/mascot/studying.webp', coach: 'Opcional: el registro de los avisos oficiales. Optional: the register of official notices.', blocks: [
          { kind: 'lead', text: 'En avisos oficiales y noticias aparecen tres recursos más: **se ruega a + personas + que + subjuntivo** («Se ruega a los vecinos que no dejen bolsas en el portal»), **se les recuerda** («Se les recuerda que el ascensor no funciona») y la pasiva con **ser + participio**, que solo tienes que reconocer: «La plaza **fue renovada** en 2020» = «La plaza **se renovó** en 2020».', en: 'Official notices and news use three more resources: se ruega a + people + que + subjunctive, se les recuerda (with les for the people being reminded), and the ser + participle passive, which you only need to recognise for now.' },
          { kind: 'choice', title: 'Elige la forma · Choose the form', items: [
            { prompt: 'Aviso: «Se ruega a los vecinos que no ___ el ascensor durante la obra».', options: ['usen', 'usar', 'usan'], answer: 0, why: 'Rogar que es una petición: que + subjuntivo, usen (como «pedir que», clase 096).', en: 'Notice: “Residents are asked not to use the lift during the works.”' },
            { prompt: 'Aviso: «___ recuerda que el agua se cortará el martes».', options: ['Se les', 'Les se', 'Se se'], answer: 0, why: '«Se les recuerda»: se impersonal + les (a ustedes, los vecinos). El orden es siempre se + les.', en: 'Notice: “Please remember that the water will be cut off on Tuesday.”' },
            { prompt: 'Noticia: «El mercado fue construido en 1931». ¿Qué frase dice lo mismo en un registro más oral?', options: ['El mercado se construyó en 1931.', 'El mercado construyó en 1931.', 'El mercado se construye en 1931.'], answer: 0, why: 'Ser + participio (fue construido) = se pasivo en el mismo tiempo: se construyó.', en: 'News: “The market was built in 1931.” Which sentence means the same in a more spoken register?' },
            { prompt: 'Cartel de un museo, más cortés que «No toquen las obras»:', options: ['Se ruega no tocar las obras.', 'Se ruegan no tocar las obras.', 'Ruega se no tocar las obras.'], answer: 0, why: 'Se ruega + infinitivo: singular, aunque después haya un plural (las obras va con tocar).', en: 'Museum sign, more polite than “Don’t touch the works”.' },
          ] },
          { kind: 'teacher', text: 'Paso opcional, para alumnos fuertes o si sobra tiempo. Extra: tu alumno redacta un aviso formal para su edificio con «Se ruega a los vecinos que…» y «Se les recuerda que…».' },
        ] },
        { title: 'Tus errores y el siguiente paso · Your mistakes and the next step', blocks: [
          { kind: 'review' },
          { kind: 'link', title: 'Siguiente: Clase 120 · Estar + participio para estados resultantes', text: 'Ya sabes hablar de lo que **se hace** sin decir quién: «Se cierra la puerta», «Se arreglaron las aceras». El paso natural: hablar del **resultado** de esas acciones, del estado en que quedan las cosas: «La puerta **está cerrada**», «Las aceras **están arregladas**».', en: 'You can now talk about what is done without saying who does it. The natural next step: talking about the result of those actions, the state things are left in: “The door is closed”, “The pavements are repaired”.', href: '/gramatica/estar-participio-para-estados-resultantes', label: 'Ir a la clase 120' },
          { kind: 'restart' },
          { kind: 'teacher', text: 'Pregunta de cierre: «¿Por qué decimos “se buscan camareros” pero “se busca a los camareros del turno de noche”?». Respuesta esperada: sin «a», camareros cualquiera y el verbo concuerda; con «a», personas concretas y el verbo va en singular. Tarea: cinco anuncios reales para el tablón de su edificio o trabajo.' },
        ] },
      ],
    },
  ],
};
